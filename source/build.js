#!/usr/bin/env node
/*
 * Builds the website from the page sources.
 *
 *   node build.js                      build into ./dist
 *   node build.js --publish            build, then copy the result into the folder above this one (the repository root)
 *   node build.js --publish <folder>   build, then copy the result into <folder>
 *   node build.js --pages <folder>     read the page parts from another folder (default ./pages)
 *
 * ./pages holds the page parts (ScrollTrial, Main, ChibiPose, CaseArt, CheckIcon as .dc.html files).
 * ./dist receives the finished site: index.html, assets/, fonts/, images/ and the CV. It is emptied on every build.
 * Publishing only adds and overwrites files. It never deletes anything, so videos/ and .git are safe.
 * The demo videos are large and already live in the repository's videos/ folder, so they are not copied.
 *
 * Needs only Node (no packages to install).
 */
'use strict';
const fs = require('fs');
const path = require('path');

const here = __dirname;
const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i === -1 ? null : (args[i + 1] && args[i + 1].slice(0, 2) !== '--' ? args[i + 1] : ''); };
const srcDir = path.resolve(opt('--pages') || path.join(here, 'pages'));
const outDir = path.resolve(opt('--out') || path.join(here, 'dist'));
const publishTo = opt('--publish') === null ? null : path.resolve(opt('--publish') || path.join(here, '..'));
const cfg = JSON.parse(fs.readFileSync(path.join(here, 'site.config.json'), 'utf8'));

// the order matters for the styles: the page first, then the parts in the order they first appear
const PARTS = ['ScrollTrial', 'ChibiPose', 'CaseArt', 'CheckIcon', 'Main'];
const ROOT = 'ScrollTrial';

function fail(msg) { console.error('BUILD FAILED: ' + msg); process.exit(1); }
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ---------- 1. read each part: its styles, its template and its logic
function readPart(name) {
  const file = path.join(srcDir, name + '.dc.html');
  if (!fs.existsSync(file)) fail('missing page part ' + file);
  const s = fs.readFileSync(file, 'utf8');
  const a = s.indexOf('<x-dc>'); const b = s.indexOf('</x-dc>');
  if (a < 0 || b < 0) fail(name + ': no <x-dc> block');
  let body = s.slice(a + 6, b);
  let css = ''; const fonts = [];
  const h0 = body.indexOf('<helmet>'); const h1 = body.indexOf('</helmet>');
  if (h0 >= 0 && h1 > h0) {
    const helmet = body.slice(h0 + 8, h1);
    body = body.slice(0, h0) + body.slice(h1 + 9);
    helmet.replace(/<style>([\s\S]*?)<\/style>/g, (_, t) => { css += t; return ''; });
    helmet.replace(/<link[^>]*href="([^"]+)"[^>]*>/g, (_, href) => { fonts.push(href.replace(/&amp;/g, '&')); return ''; });
  }
  const m = s.slice(b).match(/<script type="text\/x-dc" data-dc-script[^>]*>([\s\S]*?)<\/script>/);
  if (!m) fail(name + ': no logic script');
  return { name, html: body.trim(), css, fonts, logic: m[1] };
}
const parts = {};
for (const n of PARTS) parts[n] = readPart(n);

// ---------- 2. put the real content in place of the placeholders
// every swap says how many times its text must be found, so a change in the sources cannot slip through unnoticed
function swap(part, find, put, times) {
  const p = parts[part];
  const n = p.html.split(find).length - 1;
  if (n !== times) fail(part + ': expected ' + times + ' of "' + find.slice(0, 60) + '" but found ' + n);
  p.html = p.html.split(find).join(put);
}
function swapNth(part, find, puts) {
  const p = parts[part];
  const bits = p.html.split(find);
  if (bits.length - 1 !== puts.length) fail(part + ': expected ' + puts.length + ' of "' + find.slice(0, 60) + '" but found ' + (bits.length - 1));
  let out = bits[0];
  for (let i = 0; i < puts.length; i++) out += puts[i] + bits[i + 1];
  p.html = out;
}
function swapRe(part, re, put, times) {
  const p = parts[part];
  const all = new RegExp(re.source, re.flags.indexOf('g') === -1 ? re.flags + 'g' : re.flags);
  const n = (p.html.match(all) || []).length;
  if (n !== times) fail(part + ': expected ' + times + ' of ' + re + ' but found ' + n);
  p.html = p.html.replace(all, put);
}

const mail = 'mailto:' + cfg.email + (cfg.emailSubject ? '?subject=' + encodeURIComponent(cfg.emailSubject) : '');
const b = cfg.builds;
if (!b || b.length !== 3) fail('site.config.json needs exactly three builds');
// PLAIN=1 builds the page exactly as the sources have it, placeholders included. It is only for comparing the build with the design mock.
if (!process.env.PLAIN) {
const photo = '<img src="' + esc(cfg.photo) + '" alt="Shermaine Tan" width="800" height="800" style="display: block; width: 100%; height: 100%; border-radius: 50%; object-fit: cover">';

// the photo: the 60-second card and the closing card
swap('Main', '>[Your photo]</div>', '>' + photo + '</div>', 1);
swap('ScrollTrial', '<div class="hello-photo">[Your photo]</div>', '<div class="hello-photo">' + photo + '</div>', 1);

// the three demo videos, in the order of the cards. Their lengths are read from the placeholders, to show beside "Watch demo".
const lengths = (parts.Main.html.match(/\[Demo video, \d+:\d\d, plays on tap\]/g) || []).map((t) => t.match(/\d+:\d\d/)[0]);
if (lengths.length !== 3) fail('Main: expected 3 demo video placeholders but found ' + lengths.length);
const video = (x) => '<video id="' + esc(x.id) + '" controls preload="none" playsinline poster="' + esc(x.poster) + '" aria-label="Demo of ' + esc(x.title) +
  '" style="display: block; width: 100%; height: 190px; background: #17203A; object-fit: contain"><source src="' + esc(x.video) + '" type="video/mp4"></video>';
swapRe('Main', /<div style="height: 190px;[^"]*">\[Demo video, 1:32, plays on tap\]<\/div>/, video(b[0]), 1);
swapRe('Main', /<div style="height: 190px;[^"]*">\[Demo video, 0:25, plays on tap\]<\/div>/, video(b[1]), 1);
swapRe('Main', /<div style="height: 190px;[^"]*">\[Demo video, 1:05, plays on tap\]<\/div>/, video(b[2]), 1);

// "Watch demo" plays the video in its card (it is a plain link to the video file if scripts are off)
{
  const re = /<a class="btn-pop" href="#builds"( style="[^"]*">\s*<svg[^>]*>.*?<\/svg>\s*Watch demo\s*<\/a>)/g;
  let i = 0;
  const n = (parts.Main.html.match(re) || []).length;
  if (n !== 3) fail('Main: expected 3 "Watch demo" buttons but found ' + n);
  parts.Main.html = parts.Main.html.replace(re, (_, rest) => {
    const len = lengths[i], x = b[i++];
    return '<a class="btn-pop" href="' + esc(x.video) + '" data-play="' + esc(x.id) + '"' + rest.replace(/Watch demo(\s*<\/a>)$/, 'Watch demo (' + len + ')$1');
  });
}
// "View code on GitHub": a real link when the address is known, otherwise the button is left out
{
  const re = /<a class="btn-pop" href="#builds"( style="[^"]*">View code on GitHub<\/a>)/g;
  let i = 0;
  const n = (parts.Main.html.match(re) || []).length;
  if (n !== 3) fail('Main: expected 3 "View code on GitHub" buttons but found ' + n);
  parts.Main.html = parts.Main.html.replace(re, (_, rest) => { const x = b[i++]; return x.github ? '<a class="btn-pop" href="' + esc(x.github) + '" target="_blank" rel="noopener"' + rest : ''; });
  if (!b.some((x) => x.github)) swap('Main', 'A short demo of each, with the code on GitHub.', 'A short demo of each.', 1);
  else if (!b.every((x) => x.github)) swap('Main', 'A short demo of each, with the code on GitHub.', 'A short demo of each, with the code on GitHub where it is public.', 1);
}

// contact: email, LinkedIn and the CV
const out = ' target="_blank" rel="noopener"';
swapRe('ScrollTrial', /<a class="btn" href="#sc-hello">(<svg[^>]*>.*?<\/svg>Email me<\/a>)/, '<a class="btn" href="' + esc(mail) + '">$1', 1);
swap('ScrollTrial', '<a class="btn btn-line" href="#sc-hello">LinkedIn</a>', '<a class="btn btn-line" href="' + esc(cfg.linkedin) + '"' + out + '>LinkedIn</a>', 1);
// The CV comes in two versions: a designed one for people to read, and a plain one that applicant tracking systems (ATS) read well.
// Wherever the design has one "Request my CV" button, the site shows two download buttons.
if (!cfg.cv || !cfg.cvDesigned) fail('site.config.json needs both "cv" (the plain ATS version) and "cvDesigned" (the designed version)');
for (const f of [cfg.cv, cfg.cvDesigned]) if (!fs.existsSync(path.join(here, 'static', f))) fail('CV file missing from static/: ' + f);
const dlIcon = '<path d="M12 4v11"></path><path d="M7 11l5 5 5-5"></path><path d="M5 20h14"></path>';
const dlSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + dlIcon + '</svg>';
const cvs = [
  { href: cfg.cvDesigned, save: 'Shermaine-Tan-CV-designed.pdf', label: 'Designed CV' },
  { href: cfg.cv, save: 'Shermaine-Tan-CV.pdf', label: 'ATS-friendly CV' },
];
const cvAttr = (c) => 'href="' + esc(c.href) + '" download="' + esc(c.save) + '"';
const restyle = (style, find, put) => { if (style.indexOf(find) === -1) fail('CV button: expected "' + find + '" in the button style'); return style.replace(find, put); };
// last screen: the two CV buttons sit together on their own row, under "Email me" and "LinkedIn"
swap('ScrollTrial', '<a class="btn btn-line" href="#sc-hello">Request my CV</a>', '<span style="display: flex; flex-wrap: wrap; gap: 8px; flex-basis: 100%">\n' + cvs.map((c) => '<a class="btn btn-line" ' + cvAttr(c) + '>' + dlSvg + c.label + '</a>').join('\n') + '\n</span>', 1);
// 60-second card: the first button keeps its filled style, the second is outlined like the buttons beside it
swapRe('Main', /<a class="btn-pop btn-flip" href="#contact"( style="[^"]*">\s*<svg[^>]*>).*?(<\/svg>\s*)Request my CV(\s*<\/a>)/, (_, a, z, end) =>
  '<a class="btn-pop btn-flip" ' + cvAttr(cvs[0]) + a + dlIcon + z + cvs[0].label + end + '\n' +
  '<a class="btn-pop" ' + cvAttr(cvs[1]) + restyle(a, 'background: #17203A; color: #FFFFFF', 'border: 1px solid #17203A; color: #17203A') + dlIcon + z + cvs[1].label + end, 1);
swapRe('Main', /<a class="btn-pop" href="#contact"( style="[^"]*">\s*<svg[^>]*>.*?<\/svg>\s*Email me\s*<\/a>)/, '<a class="btn-pop" href="' + esc(mail) + '"$1', 1);
swapRe('Main', /<a class="btn-pop" href="#contact"( style="[^"]*">LinkedIn<\/a>)/g, '<a class="btn-pop" href="' + esc(cfg.linkedin) + '"' + out + '$1', 2);
swapRe('Main', /<a class="btn-pop" href="#contact"( style="[^"]*">)Request my CV(<\/a>)/, (_, a, end) => cvs.map((c) => '<a class="btn-pop" ' + cvAttr(c) + restyle(a, 'align-items: center;', 'align-items: center; gap: 8px;') + dlSvg + c.label + end).join('\n'), 1);

for (const n of PARTS) {
  const left = parts[n].html.match(/\[(Your photo|Demo video)[^\]]*\]/g);
  if (left) fail(n + ': placeholder still in the page: ' + left.join(', '));
}
}

// ---------- 3. write the site
// the build folder is emptied first, so make sure it really is a build folder and not somewhere precious
if (fs.existsSync(outDir)) {
  const precious = ['.git', 'videos', 'build.js', 'pages'].filter((n) => fs.existsSync(path.join(outDir, n)));
  if (precious.length || here.indexOf(outDir + path.sep) === 0 || here === outDir) fail('refusing to empty ' + outDir + ' (it holds ' + (precious.join(', ') || 'this build script') + '). Build into ./dist and use --publish.');
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(path.join(outDir, 'assets'), { recursive: true });

const baseCss = [
  '/* built by build.js: do not edit by hand, change the page sources and build again */',
  'html,body{height:100%;margin:0}#dc-root,#dc-root>.sc-host{height:100%}',
  '@media print{@page{margin:.5cm}figure,table{break-inside:avoid}#dc-root,#dc-root>.sc-host{height:auto}' +
    '*,*::before,*::after{print-color-adjust:exact;-webkit-print-color-adjust:exact;animation-delay:-99s !important;animation-duration:.001s !important;' +
    'animation-iteration-count:1 !important;animation-fill-mode:both !important;transition-duration:0s !important}}'
].join('\n');
// on phones the browser's own bars come and go: size the page to the part of the screen that is really visible
const siteCss = '\n/* ---------- site only */\n@supports (height:100dvh){#dc-root .trial{height:100dvh !important}}\n';
// the fonts travel with the site (no request to another company's server). Latin letters only.
const FONTS = [];
for (const w of [400, 500, 600, 700]) FONTS.push(['Inter', 'normal', w, 'inter-latin-' + w + '-normal.woff2']);
for (const w of [600, 700]) for (const st of ['normal', 'italic']) FONTS.push(['Playfair Display', st, w, 'playfair-display-latin-' + w + '-' + st + '.woff2']);
for (const w of [400, 700]) FONTS.push(['Silkscreen', 'normal', w, 'silkscreen-latin-' + w + '-normal.woff2']);
const fontCss = FONTS.map((f) => "@font-face{font-family:'" + f[0] + "';font-style:" + f[1] + ';font-weight:' + f[2] + ";font-display:swap;src:url(../fonts/" + f[3] + ") format('woff2')}").join('\n');
fs.mkdirSync(path.join(outDir, 'fonts'), { recursive: true });
for (const e of fs.readdirSync(path.join(here, 'fonts'))) fs.copyFileSync(path.join(here, 'fonts', e), path.join(outDir, 'fonts', e));
let css = baseCss + '\n' + fontCss + '\n';
for (const n of PARTS) css += '\n/* ---------- ' + n + ' */\n' + parts[n].css.trim() + '\n';
css += siteCss;
fs.writeFileSync(path.join(outDir, 'assets', 'site.css'), css);

let js = '/* built by build.js: do not edit by hand, change the page sources and build again */\n';
for (const n of PARTS) {
  js += '\n// ---------- ' + n + '\nDCLite.define(' + JSON.stringify(n) + ', ' + JSON.stringify(parts[n].html) + ', function (DCLogic, React) {\n' +
    parts[n].logic.trim() + '\nreturn Component;\n});\n';
}
js += '\n// ---------- start\n' +
  '(function () {\n' +
  "  DCLite.mount(" + JSON.stringify(ROOT) + ", document.getElementById('dc-root'));\n" +
  '  // "Watch demo" plays the video that sits in the same card\n' +
  "  document.addEventListener('click', function (e) {\n" +
  "    var a = e.target && e.target.closest ? e.target.closest('a[data-play]') : null;\n" +
  '    if (!a) return;\n' +
  "    var v = document.getElementById(a.getAttribute('data-play'));\n" +
  '    if (!v || !v.play) return;\n' +
  '    e.preventDefault();\n' +
  '    var p = v.play(); if (p && p.catch) p.catch(function () {});\n' +
  "    if (v.focus) v.focus({ preventScroll: true });\n" +
  '  });\n' +
  '})();\n';
fs.writeFileSync(path.join(outDir, 'assets', 'app.js'), js);

for (const f of ['react.production.min.js', 'react-dom.production.min.js', 'LICENSE-react.txt']) fs.copyFileSync(path.join(here, 'vendor', f), path.join(outDir, 'assets', f));
fs.copyFileSync(path.join(here, 'runtime', 'dc-lite.js'), path.join(outDir, 'assets', 'dc-lite.js'));

// everything in static/ goes to the site as it is (photo, video stills, CV, icon, share image)
(function copy(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    if (e.isDirectory()) copy(path.join(from, e.name), path.join(to, e.name));
    else fs.copyFileSync(path.join(from, e.name), path.join(to, e.name));
  }
})(path.join(here, 'static'), outDir);

// the same sources always give the same files: the cache stamp is a fingerprint of the built styles and scripts
const stamp = require('crypto').createHash('sha1').update(css).update(js).update(fs.readFileSync(path.join(here, 'runtime', 'dc-lite.js'))).digest('hex').slice(0, 10);
const url = cfg.siteUrl.replace(/\/?$/, '/');
const index = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(cfg.title)}</title>
<meta name="description" content="${esc(cfg.description)}">
<link rel="canonical" href="${esc(url)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(cfg.title)}">
<meta property="og:description" content="${esc(cfg.description)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(url)}opengraph.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#F2B544">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="preload" href="fonts/playfair-display-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/inter-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<style>html,body{background:#F2B544}</style>
<link rel="stylesheet" href="assets/site.css?v=${stamp}">
</head>
<body>
<div id="dc-root"></div>
<noscript>
<div style="max-width: 640px; margin: 0 auto; padding: 48px 24px; font-family: Georgia, serif; color: #17203A">
<h1>Shermaine Tan</h1>
<p>Product manager in Malaysia, building AI products.</p>
<p>This site needs JavaScript to show the projects and the story. You can still reach me here:</p>
<p><a href="${esc(mail)}">Email me</a> · <a href="${esc(cfg.linkedin)}">LinkedIn</a> · <a href="${esc(cfg.cvDesigned)}">Designed CV</a> · <a href="${esc(cfg.cv)}">ATS-friendly CV</a></p>
</div>
</noscript>
<script src="assets/react.production.min.js"></script>
<script src="assets/react-dom.production.min.js"></script>
<script src="assets/dc-lite.js?v=${stamp}"></script>
<script src="assets/app.js?v=${stamp}"></script>
</body>
</html>
`;
fs.writeFileSync(path.join(outDir, 'index.html'), index);
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>' + esc(url) + '</loc></url>\n</urlset>\n');

// ---------- 4. publish: copy the build over the live folder, adding and overwriting only
if (publishTo) {
  if (!fs.existsSync(publishTo)) fail('publish folder does not exist: ' + publishTo);
  let n = 0;
  (function copy(from, to) {
    fs.mkdirSync(to, { recursive: true });
    for (const e of fs.readdirSync(from, { withFileTypes: true })) {
      if (e.isDirectory()) copy(path.join(from, e.name), path.join(to, e.name));
      else { fs.copyFileSync(path.join(from, e.name), path.join(to, e.name)); n++; }
    }
  })(outDir, publishTo);
  console.log('Published ' + n + ' files into ' + publishTo);
  const missing = b.map((x) => x.video).filter((v) => !fs.existsSync(path.join(publishTo, v)));
  if (missing.length) console.log('  WARNING: these demo videos are not in the publish folder yet: ' + missing.join(', '));
}

const size = (f) => (fs.statSync(path.join(outDir, f)).size / 1024).toFixed(0) + ' KB';
console.log('Built ' + outDir);
console.log('  index.html ' + size('index.html') + ', assets/app.js ' + size('assets/app.js') + ', assets/site.css ' + size('assets/site.css'));
console.log('  videos are not copied: the site expects ' + b.map((x) => x.video).join(', '));
