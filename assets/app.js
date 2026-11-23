/* built by build.js: do not edit by hand, change the page sources and build again */

// ---------- ScrollTrial
DCLite.define("ScrollTrial", "<div ref=\"{{boxRef}}\" class=\"trial\" data-opening=\"hello\" data-mock=\"none\" style=\"--acc: {{accent}}; width: 100%; height: 100vh; overflow-x: hidden; overflow-y: auto; background: #FCFCFC; color: #030711; font-family: Inter, system-ui, sans-serif\">\n\n<div id=\"sc-barwrap\" class=\"sx bar-wrap\"><nav id=\"sc-bar\" class=\"bar\" aria-label=\"Sections\">\n<span class=\"bar-left\"><button type=\"button\" id=\"sc-bar-top\" class=\"bar-name serif\">Shermaine Tan.</button>\n<button type=\"button\" id=\"sc-bar-back\" class=\"bar-back\" hidden><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M19 12H5M11 6l-6 6 6 6\"></path></svg><span id=\"sc-bar-back-t\" class=\"bar-back-t\" aria-hidden=\"true\"></span></button></span>\n<span class=\"bar-links\"><button type=\"button\" class=\"bar-go\">My work</button><button type=\"button\" class=\"bar-go\">My story</button><button type=\"button\" class=\"bar-go\">How I think</button><button type=\"button\" id=\"sc-bar-talk\" class=\"bar-talk\">Let's talk</button></span>\n</nav></div>\n<div class=\"top\">\n<span class=\"serif\" style=\"font-size: 22px\">Shermaine Tan.</span>\n<div class=\"top-nav\"><button type=\"button\" class=\"nav-go\">My work</button><button type=\"button\" class=\"nav-go\">My story</button><button type=\"button\" class=\"nav-go\">How I think</button><button type=\"button\" id=\"sc-talk\" class=\"talk\">Let's talk</button></div>\n</div>\n<div class=\"sx hi-pin\">\n<section id=\"sc-hi\" class=\"sx hi\" aria-label=\"Hello\"><div class=\"hi-in\">\n<div id=\"sc-hi-word\" class=\"hi-word serif\" aria-hidden=\"true\">Hello.</div>\n<div id=\"sc-hi-card\" class=\"hi-card\">\n<div class=\"hi-chibi\" aria-hidden=\"true\"><dc-import name=\"ChibiPose\" pose=\"wave\" hint-size=\"190px,230px\"></dc-import></div>\n<p class=\"hi-name serif\">I'm Shermaine.</p>\n<p class=\"hi-line\">Product manager in Malaysia, building <b>AI products</b>.</p>\n<div class=\"hi-skills\"><span class=\"eyebrow hi-label\">See for yourself</span>\n<ul class=\"hi-proof\">\n<li><button type=\"button\" class=\"hi-pf\" data-path=\"work\" data-filter=\"AI\"><b>3 AI projects at work</b><span>a chatbot, computer vision and a Copilot agent</span></button></li>\n<li><button type=\"button\" class=\"hi-pf\" data-path=\"work\"><b>3 AI tools in my own time</b><span>each with a demo video</span></button></li>\n<li><button type=\"button\" class=\"hi-pf\" data-path=\"think\"><b>5 checks before AI ships</b><span>try them yourself</span></button></li>\n</ul></div>\n<div class=\"hi-nums\"><span class=\"eyebrow hi-label\">In numbers</span>\n<ul class=\"hi-figs\"><li><b>8</b><span>years in product and project delivery</span></li><li><b>7</b><span>industries, from telco and TV to water and e‑commerce</span></li><li><b>3</b><span>AI tools built in my own time</span></li><li><b>2</b><span>Gold awards for brand experience</span></li></ul></div>\n<div class=\"hi-btns\"><button type=\"button\" id=\"sc-hi-play\" class=\"btn hi-play\"><span class=\"hint-fine\">Scroll or click to start</span><span class=\"hint-coarse\">Swipe or tap to start</span><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 9l6 6 6-6\"></path></svg></button><button type=\"button\" id=\"sc-hi-short\" class=\"btn btn-line\">In a hurry? 60-second version</button></div>\n</div>\n<button type=\"button\" id=\"sc-hi-cue\" class=\"hi-cue\"><span class=\"hint-fine\">Scroll or click to start</span><span class=\"hint-coarse\">Swipe or tap to start</span><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 9l6 6 6-6\"></path></svg></button>\n</div></section>\n<section id=\"sc-nums\" class=\"sx n2\" aria-label=\"In numbers: 8 years in product and project delivery, 7 industries, 3 AI tools built in my own time, 2 Gold awards for brand experience\">\n<div class=\"n2-in\" aria-hidden=\"true\">\n<div class=\"n2-i\"><span class=\"n2-n\">8</span><span class=\"n2-l\">years in product and project delivery</span></div>\n<div class=\"n2-i\"><span class=\"n2-n\">7</span><span class=\"n2-l\">industries, from telco and TV to water and e-commerce</span></div>\n<div class=\"n2-i\"><span class=\"n2-n\">3</span><span class=\"n2-l\">AI tools built in my own time</span></div>\n<div class=\"n2-i\"><span class=\"n2-n\">2</span><span class=\"n2-l\">Gold awards for brand experience</span></div>\n</div>\n</section>\n</div>\n<section id=\"sc-hero\" class=\"sx sc-hero\" aria-label=\"Introduction\">\n<div class=\"stage\">\n<h1 class=\"sr-only\">{{h1}}</h1>\n<p class=\"sr-only sum\">A law degree and a diploma in international arbitration, then eight years in product and project delivery. Now chatbots, computer vision and AI agents, as a product manager in Malaysia.</p>\n<div id=\"sc-mini\" class=\"mini\" aria-hidden=\"true\"><span class=\"mini-s\"><i></i><b>{{b1.year}}</b>{{b1.short}}</span><span class=\"mini-s\"><i></i><b>{{b2.year}}</b>{{b2.short}}</span><span class=\"mini-s\"><i></i><b>{{b3.year}}</b>{{b3.short}}</span></div>\n<div class=\"tape\" aria-hidden=\"true\"><div id=\"sc-track\" class=\"track serif\"><span id=\"ph1\" class=\"ph\"><span class=\"tg\"><i></i><b>{{b1.year}}</b> · {{b1.role}}</span><span class=\"ph-t\">{{b1.head}}</span></span><span id=\"ph2\" class=\"ph\"><span class=\"tg\"><i></i><b>{{b2.year}}</b> · {{b2.role}}</span><span class=\"ph-t\">{{b2.head}}</span></span><span id=\"ph3\" class=\"ph ph-key\"><span class=\"tg\"><i></i><b>{{b3.year}}</b> · {{b3.role}}</span><span class=\"ph-t\"><span class=\"mark\">{{b3.head}}</span></span></span></div></div>\n<div class=\"floor\" aria-hidden=\"true\"><i id=\"sc-floor\"></i></div>\n<button type=\"button\" id=\"sc-hint\" class=\"hint\"><span class=\"hint-mouse\" aria-hidden=\"true\"><i></i></span><span class=\"hint-fine\">Scroll down or click to play</span><span class=\"hint-coarse\">Swipe up or tap to play</span>\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 9l6 6 6-6\"></path></svg></button>\n<button type=\"button\" id=\"sc-short\" class=\"short-go\">In a hurry? Read the 60-second version</button>\n\n<div id=\"sc-panel\" class=\"panel\">\n<span id=\"sc-tip\" class=\"seat-tip\" aria-hidden=\"true\">3 paths ahead<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6 6-6\"></path></svg></span>\n<div id=\"sc-chibi\" class=\"chibi\" aria-hidden=\"true\">\n<div class=\"pose on\"><dc-import name=\"ChibiPose\" pose=\"book\" hint-size=\"190px,230px\"></dc-import></div>\n<div class=\"pose\"><dc-import name=\"ChibiPose\" pose=\"glasses\" hint-size=\"190px,230px\"></dc-import></div>\n<div class=\"pose\"><dc-import name=\"ChibiPose\" pose=\"wave\" hint-size=\"190px,230px\"></dc-import></div>\n</div>\n<div class=\"bubble\" aria-hidden=\"true\">\n<span class=\"say\">{{b1.pre}}<span class=\"hl\">{{b1.hl}}</span>{{b1.post}}</span>\n<span class=\"say\">{{b2.pre}}<span class=\"hl\">{{b2.hl}}</span>{{b2.post}}</span>\n<span class=\"say\">{{b3.pre}}<span class=\"hl\">{{b3.hl}}</span>{{b3.post}}</span>\n<span class=\"say\">{{b4.pre}}<span class=\"hl\">{{b4.hl}}</span>{{b4.post}}</span>\n</div>\n<div class=\"panel-in\">\n<div id=\"sc-paths\" class=\"paths\">\n<span class=\"paths-q\">Where should we start?</span>\n<button type=\"button\" class=\"path\"><span class=\"path-t\"><b>Show me what you've built</b><small>Three AI tools, then the bigger projects</small></span><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></button>\n<button type=\"button\" class=\"path\"><span class=\"path-t\"><b>Tell me your story</b><small>Law degree to AI, in six chapters</small></span><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></button>\n<button type=\"button\" class=\"path\"><span class=\"path-t\"><b>Test how I think</b><small>Two quick activities: AI and product</small></span><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></button>\n</div>\n</div>\n</div>\n\n<div id=\"sc-wipe-lead\" class=\"wipe wipe-lead\" aria-hidden=\"true\"></div>\n<div id=\"sc-wipe\" class=\"wipe wipe-main\">\n<div id=\"sc-band\" class=\"band serif\" aria-hidden=\"true\">Law&nbsp;&nbsp;·&nbsp;&nbsp;Product&nbsp;&nbsp;·&nbsp;&nbsp;AI&nbsp;&nbsp;·&nbsp;&nbsp;Law&nbsp;&nbsp;·&nbsp;&nbsp;Product&nbsp;&nbsp;·&nbsp;&nbsp;AI</div>\n<div class=\"work-head\"><div class=\"work-in\">\n<span class=\"eyebrow\" style=\"color: #C3CBDB\">Featured work</span>\n<h2 id=\"sc-lines\" class=\"lines serif\"><span class=\"ln\"><span>Three projects</span></span><span class=\"ln\"><span>to start with</span></span></h2>\n</div></div>\n</div>\n</div>\n</section>\n\n<section id=\"sc-work\" class=\"sx work\" aria-label=\"Featured work, the three projects\">\n<div class=\"work-in\">\n<div class=\"cards\">\n<div class=\"card-wrap\"><button type=\"button\" class=\"card\">\n<span class=\"card-art\" aria-hidden=\"true\"><span><dc-import name=\"CaseArt\" art=\"chatbot\" hint-size=\"180px,120px\"></dc-import></span></span>\n<span class=\"card-body\"><span class=\"eyebrow\">Air Selangor</span><span class=\"card-title\">Joy, a bilingual NLP chatbot</span><span class=\"card-fact\"><b>No ticket needed</b> to check a bill or a case status, in English or Malay</span><span class=\"card-open\">Open case study<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></span></span>\n</button></div>\n<div class=\"card-wrap\"><button type=\"button\" class=\"card\">\n<span class=\"card-art\" aria-hidden=\"true\"><span><dc-import name=\"CaseArt\" art=\"handover\" hint-size=\"180px,120px\"></dc-import></span></span>\n<span class=\"card-body\"><span class=\"eyebrow\">Air Selangor</span><span class=\"card-title\">Knowledge handover agent</span><span class=\"card-fact\"><b>Under 20 seconds</b> per answer, pointing to the exact document and page</span><span class=\"card-open\">Open case study<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></span></span>\n</button></div>\n<div class=\"card-wrap\"><button type=\"button\" class=\"card\">\n<span class=\"card-art\" aria-hidden=\"true\"><span><dc-import name=\"CaseArt\" art=\"herbalife\" hint-size=\"180px,120px\"></dc-import></span></span>\n<span class=\"card-body\"><span class=\"eyebrow\">MinistryXR</span><span class=\"card-title\">Herbalife Virtual Extravaganza</span><span class=\"card-fact\"><b>35,000+</b> members across 14 countries</span><span class=\"card-open\">Open case study<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></span></span>\n</button></div>\n</div>\n<button type=\"button\" id=\"sc-all\" class=\"see-all\">See all projects and my AI builds</button>\n</div>\n</section>\n\n<div id=\"sc-main\" class=\"trial-main\">\n<dc-import name=\"Main\" accent=\"{{accent}}\" hint-size=\"1440px,2400px\"></dc-import>\n</div>\n\n<section id=\"sc-hello\" class=\"sx hello\" aria-label=\"Contact\">\n<div class=\"hello-bg\" aria-hidden=\"true\"></div>\n<div id=\"sc-hello-word\" class=\"hello-word serif\" aria-hidden=\"true\"><span>Thank</span> <span>you.</span></div>\n<div id=\"sc-hello-card\" class=\"hello-card\">\n<div class=\"hello-chibi\" aria-hidden=\"true\"><dc-import name=\"ChibiPose\" pose=\"wave\" hint-size=\"190px,230px\"></dc-import></div>\n<div class=\"hello-photo\"><img src=\"images/profile-picture.jpeg\" alt=\"Shermaine Tan\" width=\"800\" height=\"800\" style=\"display: block; width: 100%; height: 100%; border-radius: 50%; object-fit: cover\"></div>\n<h2>Let's build something great.</h2>\n<p>The best way to reach me is by email or LinkedIn.</p>\n<div class=\"hello-btns\">\n<a class=\"btn\" href=\"mailto:sm.shermainetan@gmail.com?subject=Portfolio%20Inquiry\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"></rect><path d=\"M3 7l9 6 9-6\"></path></svg>Email me</a>\n<a class=\"btn btn-line\" href=\"https://www.linkedin.com/in/shermaine-tan-497bbb156/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>\n<span style=\"display: flex; flex-wrap: wrap; gap: 8px; flex-basis: 100%\">\n<a class=\"btn btn-line\" href=\"SHERMAINE_TAN_CV_designed.pdf\" download=\"Shermaine-Tan-CV-designed.pdf\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 4v11\"></path><path d=\"M7 11l5 5 5-5\"></path><path d=\"M5 20h14\"></path></svg>Designed CV</a>\n<a class=\"btn btn-line\" href=\"SHERMAINE_TAN_CV.pdf\" download=\"Shermaine-Tan-CV.pdf\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 4v11\"></path><path d=\"M7 11l5 5 5-5\"></path><path d=\"M5 20h14\"></path></svg>ATS-friendly CV</a>\n</span>\n</div>\n</div>\n</section>\n<div class=\"sx foot\">© 2026 Shermaine Tan</div>\n<div class=\"sx spot-wrap\"><button type=\"button\" id=\"sc-spot\" class=\"spot-pill\" hidden aria-label=\"Back to where you were\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 18px\"><path d=\"M19 12H5M11 6l-6 6 6 6\"></path></svg><span>Back to where you were</span></button></div>\n\n</div>", function (DCLogic, React) {
class Component extends DCLogic {
  componentDidMount() {
    const box = this.boxEl;
    if (!box || typeof window === 'undefined') return;
    const one = (sel) => box.querySelector(sel);
    const all = (sel) => Array.prototype.slice.call(box.querySelectorAll(sel));
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const seg = (p, a, b) => clamp((p - a) / (b - a), 0, 1);
    const ease = (t) => t * t * (3 - 2 * t);
    const px = (x, y) => 'translate3d(' + x.toFixed(1) + 'px,' + (y || 0).toFixed(1) + 'px,0)';
    const calm = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const hero = one('#sc-hero');
    const stage = one('.stage');
    const track = one('#sc-track');
    const phrases = [one('#ph1'), one('#ph2'), one('#ph3')];
    // the amber Hello scene comes first, as an ordinary section; the story scene then starts at `base`, its own place in the page.
    // The beats are fractions of the story's own pace (t0): each turn moves the track on by one headline, then the seat opens (open),
    // the paths are held (holdA to holdB, plus the extra pause), and the wipe takes over. stops are where click-to-play rests
    const hi = one('#sc-hi');
    // The Hello entrance plays when the Hello screen is actually in view and the fonts have arrived, not while the page is still loading out of sight.
    // It plays again only if the screen comes back into view with the page still at the very top: that happens on a design canvas when the board is
    // panned away and back, not during an ordinary scroll down and up, where the page is no longer at the top when Hello returns.
    if (!calm && typeof IntersectionObserver !== 'undefined') {
      box.classList.add('hi-wait');
      const fontsIn = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
      let hiOn = false, hiPlayed = false, wentDown = false;   // wentDown: the page has been scrolled since Hello was last seen resting at the top
      this.hiScroll = () => { if (box.scrollTop > 2) wentDown = true; else if (hiOn) wentDown = false; };
      box.addEventListener('scroll', this.hiScroll, { passive: true });
      const playHi = () => { if (!this.hiWatch) return; hiPlayed = true; box.classList.remove('hi-wait'); box.classList.remove('hi-go'); void box.offsetWidth; box.classList.add('hi-go'); };
      this.hiWatch = new IntersectionObserver((list) => {
        const on = list[list.length - 1].isIntersecting;
        if (on && !hiOn) { if (!hiPlayed || (box.scrollTop < 2 && !wentDown)) fontsIn.then(playHi, playHi); if (box.scrollTop < 2) wentDown = false; }
        hiOn = on;
      }, { threshold: 0.3 });
      this.hiWatch.observe(hi);
      // safety net: whatever happens, the Hello screen never stays hidden. If nothing has started it after a moment, it starts anyway
      this.hiTimer = window.setTimeout(() => { this.hiTimer = null; if (!hiPlayed) playHi(); }, 2500);
    }
    const nums = one('#sc-nums');
    const numEls = all('.n2-n');
    const B = { turns: [[0.04, 0.22], [0.28, 0.46]], open: [0.52, 0.61], holdA: 0.61, holdB: 0.74, lead: [0.74, 0.88], grow: [0.77, 0.91], lines: 0.865, stops: [0.25, 0.49] };
    const mini = one('#sc-mini');
    const panel = one('#sc-panel');
    const chibi = one('#sc-chibi');
    const poses = all('.pose');
    const says = all('.say');
    const paths = one('#sc-paths');
    const rows = all('#sc-paths .path');
    const floor = one('#sc-floor');
    const hint = one('#sc-hint');
    const bar = one('#sc-bar');
    const tip = one('#sc-tip');
    const wipeLead = one('#sc-wipe-lead');
    const wipe = one('#sc-wipe');
    const band = one('#sc-band');
    const lines = one('#sc-lines');
    const cards = all('.card-wrap');
    const hello = one('#sc-hello');
    const helloWord = one('#sc-hello-word');
    const helloCard = one('#sc-hello-card');
    const driven = [track, chibi, paths, hint, tip, floor, wipeLead, wipe, band, helloWord, helloCard].concat(phrases, says, cards.map((w) => w.firstElementChild));
    let wasLite = null;
    let cur = box.scrollTop;   // the scroll position the animation is at: it glides after the real one
    let last = 0;
    let lite = false;
    let goingUp = false;
    // the ways back. mainBack: the homepage inside has somewhere to return to (its label). spot: "Let's talk" took the visitor
    // to the end of the page from this scroll position. spotFrom: where their own scrolling is measured from afterwards
    const backBtn = one('#sc-bar-back');
    const backText = one('#sc-bar-back-t');
    const spotBtn = one('#sc-spot');
    let mainBack = null;
    let spot = null;
    let spotFrom = null;
    const showBack = () => {
      const label = spot !== null ? 'Back to where you were' : mainBack;
      backBtn.hidden = !label;
      if (label) { backText.setAttribute('data-label', label); backBtn.setAttribute('aria-label', label); }
      spotBtn.hidden = spot === null;
      box.classList.toggle('has-spot', spot !== null);
    };
    const clearSpot = () => {
      if (spot === null) return;
      spot = null;
      spotFrom = null;
      spotBtn.classList.remove('small');
      showBack();
    };
    let peak = box.scrollTop;   // the furthest down since the scroll last turned upward, and the furthest up since it turned down
    let dip = box.scrollTop;

    const targets = numEls.map((el) => Number(el.textContent) || 0);
    let numsDone = calm;
    const showNums = () => { numsDone = true; numEls.forEach((el, k) => { el.textContent = String(targets[k]); }); };
    const rollNums = () => {
      numsDone = true;
      const t0 = window.performance.now();
      const step = (t) => {
        const k = clamp((t - t0) / 1400, 0, 1);
        const e = 1 - Math.pow(1 - k, 3);
        numEls.forEach((el, n) => { el.textContent = String(Math.round(targets[n] * e)); });
        if (k < 1) this.numsFrame = window.requestAnimationFrame(step); else this.numsFrame = null;
      };
      this.numsFrame = window.requestAnimationFrame(step);
    };
    if (!numsDone) numEls.forEach((el) => { el.textContent = '0'; });
    const render = () => {
      const vw = box.clientWidth;
      const vh = box.clientHeight;
      const top = box.getBoundingClientRect().top;
      lite = calm || vw < 760 || vh < 480;
      box.classList.toggle('tight', !lite && (vh < 760 || vw < 1210));   // no room for the second line on each path
      if (lite !== wasLite) {
        box.classList.toggle('lite', lite);
        box.classList.toggle('calm', calm);
        // hand every part back to the stylesheet, so each layout starts clean
        driven.forEach((el) => { el.style.transform = ''; el.style.opacity = ''; el.style.clipPath = ''; });
        paths.style.visibility = '';
        paths.style.pointerEvents = '';
        hint.style.visibility = '';
        tip.style.visibility = '';
        panel.style.height = '';
        hello.style.removeProperty('--arc');
        poses.forEach((el, k) => el.classList.toggle('on', lite ? k === poses.length - 1 : k === 0));
        if (!lite) lines.classList.remove('in');
        rows.forEach((el) => el.classList.remove('lit'));
        wasLite = lite;
        if (lite) void box.offsetWidth;   // let the hidden starting state apply first, so the lines can arrive from it
      }
      // tell the homepage inside how tall the menu is and whether it only shows while scrolling up,
      // so whatever it scrolls to lands below the menu and not behind it
      const menuH = bar.offsetHeight + 'px';
      if (box.style.getPropertyValue('--menu-h') !== menuH) box.style.setProperty('--menu-h', menuH);
      const menuUp = lite ? '1' : '0';
      if (box.style.getPropertyValue('--menu-up') !== menuUp) box.style.setProperty('--menu-up', menuUp);
      const lag = box.scrollTop - cur;   // how far the glide is behind the real scroll right now
      // the menu. Phone layout: once the opening is behind us, and only while scrolling up, so it never covers what is being read.
      // The direction has some slack (24px up, 8px down) so a wobble does not flick it on and off
      const yNow = box.scrollTop;
      if (spot !== null && spotFrom !== null) {
        if (Math.abs(yNow - spot) < vh * 0.5) clearSpot();                                  // they scrolled back there themselves
        else if (Math.abs(yNow - spotFrom) > 120) spotBtn.classList.add('small');          // reading on: the phone button steps aside
      }
      if (goingUp) { dip = Math.min(dip, yNow); if (yNow - dip > 8) { goingUp = false; peak = yNow; } }
      else { peak = Math.max(peak, yNow); if (peak - yNow > 24) { goingUp = true; dip = yNow; } }
      let menuOn = lite && goingUp && yNow >= hero.offsetTop + hero.offsetHeight - 1;
      let solid = true;
      let overHi = false;

      if (!lite) {
        // scene 1: p is how far through the held hero we are, from 0 to 1
        // the opening keeps its original pace (t0); the extra length (stay) is all spent with the three paths open,
        // so they are not scrolled past in a couple of clicks. v is the scroll position with that pause taken out
        const travel = hero.offsetHeight - vh;
        const stay = Math.min(vh * 0.7, travel * 0.5);
        const t0 = travel - stay;
        const holdA = t0 * B.holdA;
        const holdB = t0 * B.holdB + stay;
        const c = Math.max(0, cur - hero.offsetTop);   // how far into the story scene we are (it is not first in the page when Hello is)
        const v = c <= holdA ? c : c >= holdB ? c - stay : holdA + (c - holdA) * (t0 * (B.holdB - B.holdA)) / (holdB - holdA);
        const p = clamp(v / t0, 0, 1);
        const walk = clamp((c - holdA) / (holdB - holdA), 0, 1);   // 0 to 1 through the pause
        const focus = ease(seg(p, B.turns[0][0], B.turns[0][1])) + ease(seg(p, B.turns[1][0], B.turns[1][1]));   // which phrase rests on the left, 0 to 2
        const pathsIn = ease(seg(p, B.open[0], B.open[1]));                                                       // the chibi's seat opens into the three paths
        const beat = focus + pathsIn;
        const lead = ease(seg(p, B.lead[0], B.lead[1]));
        const grow = ease(seg(p, B.grow[0], B.grow[1]));

        const xs = phrases.map((el) => el.offsetLeft);
        const i = Math.min(1, Math.floor(focus));
        track.style.transform = px(vw * 0.06 - (xs[i] + (xs[i + 1] - xs[i]) * (focus - i)));
        phrases.forEach((el, k) => { el.style.opacity = clamp(1 - Math.abs(focus - k) * 1.2, 0, 1).toFixed(3); });
        says.forEach((el, k) => {
          const o = clamp(1 - Math.abs(k - beat) * 2.6, 0, 1);
          el.style.opacity = o.toFixed(3);
          el.style.transform = 'scale(' + (0.9 + 0.1 * o).toFixed(3) + ')';
        });
        chibi.style.transform = px(0, -Math.sin(Math.PI * (beat - Math.floor(beat))) * vh * 0.022);   // a small hop on every change
        const poseAt = Math.min(poses.length - 1, Math.round(focus));
        poses.forEach((el, k) => el.classList.toggle('on', k === poseAt));
        floor.style.transform = 'scaleX(' + ((focus + 1) / 3).toFixed(3) + ')';
        const cue = 1 - seg(p, 0.01, 0.05);
        hint.style.opacity = cue.toFixed(3);
        hint.style.visibility = cue < 0.02 ? 'hidden' : 'visible';   // once faded it must not catch clicks or focus

        const seat = clamp(vh * 0.076, 44, 68);
        // the open panel is only as tall as the question and the three paths need (at most 44vh), so tall screens get no empty gap
        const full = Math.max(seat, Math.min(vh * 0.44, paths.offsetHeight));
        panel.style.height = (seat + (full - seat) * pathsIn).toFixed(1) + 'px';
        paths.style.opacity = ease(seg(pathsIn, 0.3, 1)).toFixed(3);
        // the seat's own label gives way as the paths arrive, and stays hidden wherever it would run into the chibi
        tip.style.opacity = (1 - seg(pathsIn, 0, 0.35)).toFixed(3);
        tip.style.visibility = tip.getBoundingClientRect().right > chibi.getBoundingClientRect().left + chibi.offsetWidth * 0.16 ? 'hidden' : 'visible';
        paths.style.visibility = pathsIn > 0.02 ? 'visible' : 'hidden';
        paths.style.pointerEvents = pathsIn > 0.9 && lead < 0.03 ? 'auto' : 'none';
        // while the paths are held, scrolling walks down them one at a time, so each one gets read
        const litAt = walk > 0.1 && walk < 0.91 ? Math.min(2, Math.floor((walk - 0.1) / 0.27)) : -1;
        rows.forEach((el, k) => el.classList.toggle('lit', k === litAt));

        const pr = panel.getBoundingClientRect();
        const sr = stage.getBoundingClientRect();
        const at = 'px at ' + (pr.left - sr.left + pr.width / 2).toFixed(1) + 'px ' + (pr.top - sr.top + pr.height * 0.45).toFixed(1) + 'px)';
        const far = Math.hypot(vw, vh) * 1.05;
        wipeLead.style.clipPath = 'circle(' + (lead * far).toFixed(1) + at;
        wipe.style.clipPath = 'circle(' + (grow * far).toFixed(1) + at;
        lines.classList.toggle('in', p > B.lines);
        // wide screens: the menu is always there. It is see-through over the opening and turns solid the moment the wipe reaches it,
        // so the circles pass underneath and the three choices never leave the screen
        menuOn = true;
        solid = lead * far > pr.top - sr.top + pr.height * 0.45 - bar.offsetHeight;
        {
          // over the Hello scene the menu wears the scene's colour, until the story's dome reaches the menu
          const barH = bar.offsetHeight;
          overHi = hero.getBoundingClientRect().top - top > barH;
          if (!overHi && yNow < hero.offsetTop + vh * 0.09) solid = true;   // a solid strip until the corners of the rising sheet have cleared the menu
          else if (overHi) solid = false;
        }
        band.style.transform = px((0.16 - clamp((v - t0 * B.holdB) / (t0 * (1 - B.holdB) + vh), 0, 1) * 0.7) * vw);
      } else {
        // phone layout: the three headline lines arrive one after another, then the supporting line under them
        phrases.forEach((el) => { if (calm || el.getBoundingClientRect().top - top < vh * 0.86) el.classList.add('in'); });
        if (phrases[0].classList.contains('in')) mini.classList.add('in');
        if (phrases[2].classList.contains('in')) box.classList.add('said');
        if (lines.getBoundingClientRect().top - top < vh * 0.9) lines.classList.add('in');
      }
      bar.classList.toggle('on', menuOn);
      bar.classList.toggle('solid', solid);
      bar.classList.toggle('on-hi', overHi);
      // the banner's numbers count up the first time it comes into view; met from above (after a jump down the page) they are simply there
      if (!numsDone) {
        const nr = numEls[0].getBoundingClientRect();
        if (nr.bottom - top < 0) showNums();
        else if (nr.top - top < vh * 0.88) rollNums();
      }
      box.classList.toggle('menu-on', lite && menuOn);
      if (calm) return;

      if (lite) {
        const wr = wipe.getBoundingClientRect();
        band.style.transform = px((0.1 - clamp((vh - (wr.top - top)) / (vh + wr.height), 0, 1) * 0.6) * vw);
      } else {
        // scene 2: the three cards drift at slightly different speeds
        cards.forEach((w, k) => {
          const r = w.getBoundingClientRect();
          const off = ((r.top - top + lag) + r.height / 2 - vh / 2) / vh;
          w.firstElementChild.style.transform = px(0, off * [36, 0, -36][k % 3]);
        });
      }

      // scene 3: the dome flattens, the word slides in from the side, the card rises
      const hr = hello.getBoundingClientRect();
      const arrive = ease(clamp((vh - (hr.top - top + lag)) / hr.height, 0, 1));
      hello.style.setProperty('--arc', ((1 - arrive) * vh * 0.32).toFixed(1) + 'px');
      helloWord.style.transform = px((1 - arrive) * vw * 0.46);
      helloCard.style.transform = px(0, (1 - arrive) * 140);
    };

    const loop = (now) => {
      this.frame = null;
      const target = box.scrollTop;
      const dt = clamp(now - last, 0, 64);
      last = now;
      if (calm || lite) cur = target;
      else {
        cur += (target - cur) * (1 - Math.exp(-dt / 150));
        if (Math.abs(target - cur) < 0.35) cur = target;
      }
      render();
      if (cur !== target) this.frame = window.requestAnimationFrame(loop);
    };

    this.schedule = () => {
      if (this.frame) return;
      last = window.performance.now();
      this.frame = window.requestAnimationFrame(loop);
    };
    // every button opens its real place in the homepage below
    const smooth = calm ? 'auto' : 'smooth';
    const go = (detail) => {
      if (!detail.back) clearSpot();   // going somewhere else on purpose: the old spot no longer matters
      const main = box.querySelector('#sc-main #top');
      if (main) main.dispatchEvent(new window.CustomEvent('portfolio-go', { detail: detail }));
      else box.scrollTo({ top: hero.offsetHeight - box.clientHeight * 0.45, behavior: smooth });
    };
    this.wired = [];
    const wire = (el, fn) => { if (el) { el.addEventListener('click', fn); this.wired.push([el, fn]); } };
    const pathIds = ['work', 'story', 'think'];
    all('.path').forEach((b, k) => wire(b, () => go({ path: pathIds[k] })));
    all('.nav-go').forEach((b, k) => wire(b, () => go({ path: pathIds[k] })));
    ['chatbot', 'handover', 'herbalife'].forEach((id, k) => wire(cards[k] && cards[k].firstElementChild, () => go({ case: id })));
    wire(one('#sc-all'), () => go({ path: 'work' }));
    wire(one('#sc-short'), () => go({ path: 'short' }));
    // the cue can play the opening for people who do not scroll: it glides through the beats, pauses on each so the line can be read,
    // and stops with the three paths open. Any scroll, key or tap of their own takes over at once.
    let playing = 0;
    this.stopPlay = () => { playing = 0; };
    const play = () => {
      if (lite) return;
      const id = playing = window.performance.now();
      const vh0 = box.clientHeight;
      const travel = hero.offsetHeight - vh0;
      const stay = Math.min(vh0 * 0.7, travel * 0.5);
      const t0 = travel - stay;
      const base = hero.offsetTop;
      // the play-through also rests on the first story line
      const lead = [base];
      const stops = lead.concat(B.stops.map((k) => base + k * t0), [base + B.holdA * t0 + ((B.holdB - B.holdA) * t0 + stay) * 0.04]).filter((y) => y > box.scrollTop + 4);
      const glideTo = (y, ms) => new Promise((done) => {
        const from = box.scrollTop;
        const t0 = window.performance.now();
        const step = (t) => {
          if (playing !== id) { done(false); return; }
          const k = clamp((t - t0) / ms, 0, 1);
          box.scrollTop = from + (y - from) * (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);
          if (k < 1) window.requestAnimationFrame(step); else done(true);
        };
        window.requestAnimationFrame(step);
      });
      const hold = (ms) => new Promise((done) => window.setTimeout(() => done(playing === id), ms));
      (async () => {
        for (let k = 0; k < stops.length; k++) {
          if (!(await glideTo(stops[k], 950))) return;
          if (k < stops.length - 1 && !(await hold(1500))) return;
        }
        if (playing === id) playing = 0;
      })();
    };
    wire(hint, play);
    const hiPlay = one('#sc-hi-play');
    wire(hiPlay, play);
    const hiCue = one('#sc-hi-cue');   // the cue under the card, on the sketch board only
    wire(hiCue, play);
    wire(one('#sc-hi-short'), () => go({ path: 'short' }));
    all('.hi-pf').forEach((b) => wire(b, () => go(b.getAttribute('data-filter') ? { path: b.getAttribute('data-path'), filter: b.getAttribute('data-filter') } : { path: b.getAttribute('data-path') })));
    this.takeOver = (e) => { if (!(e.type === 'pointerdown' && (hint.contains(e.target) || hiPlay.contains(e.target) || (hiCue && hiCue.contains(e.target))))) this.stopPlay(); };
    ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((ev) => box.addEventListener(ev, this.takeOver, { passive: true }));
    const toHello = () => {
      const y = hello.getBoundingClientRect().top - box.getBoundingClientRect().top + box.scrollTop;
      // a real jump (not a nudge from just above the end): remember where they were, and offer the way back
      if (y - box.scrollTop > box.clientHeight * 1.5) {
        spot = box.scrollTop;
        spotFrom = null;
        spotBtn.classList.remove('small');
        showBack();
        if (this.spotTimer) window.clearTimeout(this.spotTimer);
        this.spotTimer = window.setTimeout(() => { this.spotTimer = null; if (spot !== null) spotFrom = box.scrollTop; }, 1600);   // once the jump has landed
      }
      box.scrollTo({ top: y, behavior: smooth });
    };
    const backToSpot = () => {
      if (spot === null) return;
      const y = spot;
      clearSpot();
      box.scrollTo({ top: y, behavior: smooth });
    };
    wire(one('#sc-talk'), toHello);
    // the menu that stays on top: the same three paths, the contact scene, and the name as the way back up
    const barGo = all('.bar-go');
    barGo.forEach((b, k) => wire(b, () => go({ path: pathIds[k] })));
    wire(one('#sc-bar-talk'), toHello);
    wire(one('#sc-bar-top'), () => { clearSpot(); box.scrollTo({ top: 0, behavior: smooth }); });
    // the homepage inside says when it has somewhere to go back to; on wide screens the button for it sits in the menu
    this.onBack = (e) => { mainBack = (e && e.detail && e.detail.label) || null; showBack(); };
    box.addEventListener('portfolio-back', this.onBack);
    wire(backBtn, () => { if (spot !== null) backToSpot(); else go({ back: true }); });
    wire(spotBtn, backToSpot);
    this.onPath = (e) => { clearSpot(); const id = e && e.detail && e.detail.path; barGo.forEach((b, k) => { if (pathIds[k] === id) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); }); };
    box.addEventListener('portfolio-path', this.onPath);   // the homepage inside announces its path, and the event bubbles up to here
    // the homepage below grows and shrinks as sections open: keep the last scene in step
    if (typeof window.ResizeObserver !== 'undefined' && one('#sc-main')) {
      this.sizeWatch = new window.ResizeObserver(() => this.schedule());
      this.sizeWatch.observe(one('#sc-main'));
    }
    this.scrollBox = box;
    box.addEventListener('scroll', this.schedule, { passive: true });
    window.addEventListener('resize', this.schedule);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(this.schedule);
    render();
  }

  componentWillUnmount() {
    if (this.scrollBox && this.schedule) this.scrollBox.removeEventListener('scroll', this.schedule);
    if (this.stopPlay) this.stopPlay();
    if (this.scrollBox && this.onPath) this.scrollBox.removeEventListener('portfolio-path', this.onPath);
    if (this.scrollBox && this.onBack) this.scrollBox.removeEventListener('portfolio-back', this.onBack);
    if (this.spotTimer) { window.clearTimeout(this.spotTimer); this.spotTimer = null; }
    if (this.numsFrame) { window.cancelAnimationFrame(this.numsFrame); this.numsFrame = null; }
    if (this.scrollBox && this.takeOver) ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((ev) => this.scrollBox.removeEventListener(ev, this.takeOver));
    if (this.wired) this.wired.forEach((w) => w[0].removeEventListener('click', w[1]));
    this.wired = null;
    if (this.sizeWatch) { this.sizeWatch.disconnect(); this.sizeWatch = null; }
    if (this.hiWatch) { this.hiWatch.disconnect(); this.hiWatch = null; }
    if (this.scrollBox && this.hiScroll) this.scrollBox.removeEventListener('scroll', this.hiScroll);
    if (this.hiTimer) { window.clearTimeout(this.hiTimer); this.hiTimer = null; }
    if (typeof window !== 'undefined') {
      if (this.schedule) window.removeEventListener('resize', this.schedule);
      if (this.frame) window.cancelAnimationFrame(this.frame);
    }
    this.frame = null;
  }

  renderVals() {
    if (!this.boxRef) this.boxRef = (el) => { this.boxEl = el; };
    // the opening's wording lives here, once. `hl` is the part of the chibi's line that gets the highlight.
    return {
      accent: this.props.accent || '#F2B544',
      boxRef: this.boxRef,
      h1: "Hello, I'm Shermaine. I studied law. Now I build AI products.",
      b1: { year: '2015', role: 'Law school', short: 'Law', head: 'I studied law.', pre: 'A ', hl: 'law degree', post: ' and a diploma in international arbitration.' },
      b2: { year: '2018', role: 'First software job', short: 'Software', head: 'Now I build', pre: 'Then ', hl: 'eight years', post: ' in product and project delivery.' },
      b3: { year: 'Now', role: 'Product manager in Malaysia', short: 'AI', head: 'AI products.', pre: 'Chatbots, computer vision and ', hl: 'AI agents', post: '.' },
      b4: { pre: '', hl: 'Pick a path', post: ", and I'll take you there." }
    };
  }
}
return Component;
});

// ---------- ChibiPose
DCLite.define("ChibiPose", "<div style=\"width: 100%\">\n<sc-if value=\"{{isTilt}}\" hint-placeholder-val=\"{{true}}\">\n<svg class=\"chibi-pop\" viewBox=\"0 0 140 170\" role=\"img\" aria-label=\"Chibi Shermaine sitting and tilting her head\" style=\"display: block; width: 100%; height: auto\"><g class=\"chibi-tilt\"><path d=\"M34 58 L31 110 C30 119 41 121 45 115 L95 115 C99 121 110 119 109 110 L106 58 Z\" fill=\"#33221E\"></path></g><g class=\"chibi-legl\"><rect x=\"53\" y=\"124\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#7F9CC4\"></rect><rect x=\"52\" y=\"144\" width=\"16\" height=\"5\" rx=\"2\" fill=\"#A9BEDD\"></rect><rect x=\"55\" y=\"149\" width=\"10\" height=\"4\" fill=\"#F2A7B5\"></rect><rect x=\"50.5\" y=\"152\" width=\"19\" height=\"11\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"50.5\" y=\"160\" width=\"19\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><g class=\"chibi-legr\"><rect x=\"73\" y=\"124\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#7F9CC4\"></rect><rect x=\"72\" y=\"144\" width=\"16\" height=\"5\" rx=\"2\" fill=\"#A9BEDD\"></rect><rect x=\"75\" y=\"149\" width=\"10\" height=\"4\" fill=\"#F2A7B5\"></rect><rect x=\"70.5\" y=\"152\" width=\"19\" height=\"11\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"70.5\" y=\"160\" width=\"19\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><path d=\"M46 101 C46 92 94 92 94 101 L98 129 C98 133 42 133 42 129 Z\" fill=\"#EBC6B8\"></path><path d=\"M60 93 Q70 100 80 93 L81 132 L59 132 Z\" fill=\"#FFFFFF\"></path><path d=\"M51 106 L50 128\" fill=\"none\" stroke=\"#D3A090\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path><path d=\"M89 106 L90 128\" fill=\"none\" stroke=\"#D3A090\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path><circle cx=\"84.5\" cy=\"110\" r=\"1.5\" fill=\"#D3A090\"></circle><circle cx=\"85\" cy=\"120\" r=\"1.5\" fill=\"#D3A090\"></circle><rect x=\"65\" y=\"84\" width=\"10\" height=\"12\" rx=\"4\" fill=\"#F9DEC9\"></rect><g class=\"chibi-tilt\"><ellipse cx=\"70\" cy=\"56\" rx=\"36\" ry=\"34\" fill=\"#33221E\"></ellipse><ellipse cx=\"70\" cy=\"60\" rx=\"33\" ry=\"30\" fill=\"#F9DEC9\"></ellipse><path d=\"M36 62 C32 36 52 24 70 24 C90 24 108 36 104 62 C101 50 90 39 63 35 C52 39 41 49 36 62 Z\" fill=\"#33221E\"></path><path d=\"M50 51 Q55 48.5 60 50.5\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><path d=\"M80 50.5 Q85 48.5 90 51\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><circle cx=\"45\" cy=\"77\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><circle cx=\"95\" cy=\"77\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><g class=\"chibi-blink\"><g><ellipse cx=\"56\" cy=\"65\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><ellipse cx=\"84\" cy=\"65\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><circle cx=\"57.3\" cy=\"63.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle><circle cx=\"85.3\" cy=\"63.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle></g></g><g><circle cx=\"56\" cy=\"64\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><circle cx=\"84\" cy=\"64\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><path d=\"M67.3 62.5 Q70 60 72.7 62.5\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M44.6 62 L38 61\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><path d=\"M95.4 62 L102 61\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path></g><path d=\"M64 80 Q70 85 76 80\" fill=\"none\" stroke=\"#B5545F\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g><path d=\"M50 103 Q43 117 57 123\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><path d=\"M90 103 Q97 117 83 123\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><rect x=\"57\" y=\"111\" width=\"26\" height=\"17\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"57\" y=\"115\" width=\"26\" height=\"3\" fill=\"#F2B544\"></rect><circle cx=\"59\" cy=\"124\" r=\"5\" fill=\"#F9DEC9\"></circle><circle cx=\"81\" cy=\"124\" r=\"5\" fill=\"#F9DEC9\"></circle></svg>\n</sc-if>\n<sc-if value=\"{{isGlasses}}\" hint-placeholder-val=\"{{false}}\">\n<svg class=\"chibi-pop\" viewBox=\"0 0 140 170\" role=\"img\" aria-label=\"Chibi Shermaine touching her glasses and glancing aside\" style=\"display: block; width: 100%; height: auto\"><g><path d=\"M34 58 L31 110 C30 119 41 121 45 115 L95 115 C99 121 110 119 109 110 L106 58 Z\" fill=\"#33221E\"></path></g><g class=\"chibi-legl\"><rect x=\"53\" y=\"124\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#7F9CC4\"></rect><rect x=\"52\" y=\"144\" width=\"16\" height=\"5\" rx=\"2\" fill=\"#A9BEDD\"></rect><rect x=\"55\" y=\"149\" width=\"10\" height=\"4\" fill=\"#F2A7B5\"></rect><rect x=\"50.5\" y=\"152\" width=\"19\" height=\"11\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"50.5\" y=\"160\" width=\"19\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><g class=\"chibi-legr\"><rect x=\"73\" y=\"124\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#7F9CC4\"></rect><rect x=\"72\" y=\"144\" width=\"16\" height=\"5\" rx=\"2\" fill=\"#A9BEDD\"></rect><rect x=\"75\" y=\"149\" width=\"10\" height=\"4\" fill=\"#F2A7B5\"></rect><rect x=\"70.5\" y=\"152\" width=\"19\" height=\"11\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"70.5\" y=\"160\" width=\"19\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><path d=\"M46 101 C46 92 94 92 94 101 L98 129 C98 133 42 133 42 129 Z\" fill=\"#EBC6B8\"></path><path d=\"M60 93 Q70 100 80 93 L81 132 L59 132 Z\" fill=\"#FFFFFF\"></path><path d=\"M51 106 L50 128\" fill=\"none\" stroke=\"#D3A090\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path><path d=\"M89 106 L90 128\" fill=\"none\" stroke=\"#D3A090\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path><circle cx=\"84.5\" cy=\"110\" r=\"1.5\" fill=\"#D3A090\"></circle><circle cx=\"85\" cy=\"120\" r=\"1.5\" fill=\"#D3A090\"></circle><rect x=\"65\" y=\"84\" width=\"10\" height=\"12\" rx=\"4\" fill=\"#F9DEC9\"></rect><g><ellipse cx=\"70\" cy=\"56\" rx=\"36\" ry=\"34\" fill=\"#33221E\"></ellipse><ellipse cx=\"70\" cy=\"60\" rx=\"33\" ry=\"30\" fill=\"#F9DEC9\"></ellipse><path d=\"M36 62 C32 36 52 24 70 24 C90 24 108 36 104 62 C101 50 90 39 63 35 C52 39 41 49 36 62 Z\" fill=\"#33221E\"></path><path d=\"M50 51 Q55 48.5 60 50.5\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><path d=\"M80 50.5 Q85 48.5 90 51\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><circle cx=\"45\" cy=\"77\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><circle cx=\"95\" cy=\"77\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><g class=\"chibi-blink\"><g class=\"chibi-glance\"><ellipse cx=\"56\" cy=\"65\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><ellipse cx=\"84\" cy=\"65\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><circle cx=\"57.3\" cy=\"63.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle><circle cx=\"85.3\" cy=\"63.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle></g></g><g class=\"chibi-push\"><circle cx=\"56\" cy=\"64\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><circle cx=\"84\" cy=\"64\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><path d=\"M67.3 62.5 Q70 60 72.7 62.5\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M44.6 62 L38 61\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><path d=\"M95.4 62 L102 61\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path></g><path d=\"M64 80 Q70 85 76 80\" fill=\"none\" stroke=\"#B5545F\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g><path d=\"M50 103 Q43 117 57 123\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><rect x=\"57\" y=\"111\" width=\"26\" height=\"17\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"57\" y=\"115\" width=\"26\" height=\"3\" fill=\"#F2B544\"></rect><circle cx=\"59\" cy=\"124\" r=\"5\" fill=\"#F9DEC9\"></circle><g class=\"chibi-push\"><path d=\"M90 103 Q106 100 101 79\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><circle cx=\"100\" cy=\"73\" r=\"5\" fill=\"#F9DEC9\"></circle></g></svg>\n</sc-if>\n<sc-if value=\"{{isWave}}\" hint-placeholder-val=\"{{false}}\">\n<svg class=\"chibi-pop\" viewBox=\"0 0 140 170\" role=\"img\" aria-label=\"Chibi Shermaine waving\" style=\"display: block; width: 100%; height: auto\"><g><path d=\"M34 58 L31 110 C30 119 41 121 45 115 L95 115 C99 121 110 119 109 110 L106 58 Z\" fill=\"#33221E\"></path></g><g class=\"chibi-legl\"><rect x=\"53\" y=\"124\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#7F9CC4\"></rect><rect x=\"52\" y=\"144\" width=\"16\" height=\"5\" rx=\"2\" fill=\"#A9BEDD\"></rect><rect x=\"55\" y=\"149\" width=\"10\" height=\"4\" fill=\"#F2A7B5\"></rect><rect x=\"50.5\" y=\"152\" width=\"19\" height=\"11\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"50.5\" y=\"160\" width=\"19\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><g class=\"chibi-legr\"><rect x=\"73\" y=\"124\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#7F9CC4\"></rect><rect x=\"72\" y=\"144\" width=\"16\" height=\"5\" rx=\"2\" fill=\"#A9BEDD\"></rect><rect x=\"75\" y=\"149\" width=\"10\" height=\"4\" fill=\"#F2A7B5\"></rect><rect x=\"70.5\" y=\"152\" width=\"19\" height=\"11\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"70.5\" y=\"160\" width=\"19\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><path d=\"M46 101 C46 92 94 92 94 101 L98 129 C98 133 42 133 42 129 Z\" fill=\"#EBC6B8\"></path><path d=\"M60 93 Q70 100 80 93 L81 132 L59 132 Z\" fill=\"#FFFFFF\"></path><path d=\"M51 106 L50 128\" fill=\"none\" stroke=\"#D3A090\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path><path d=\"M89 106 L90 128\" fill=\"none\" stroke=\"#D3A090\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path><circle cx=\"84.5\" cy=\"110\" r=\"1.5\" fill=\"#D3A090\"></circle><circle cx=\"85\" cy=\"120\" r=\"1.5\" fill=\"#D3A090\"></circle><rect x=\"65\" y=\"84\" width=\"10\" height=\"12\" rx=\"4\" fill=\"#F9DEC9\"></rect><g><ellipse cx=\"70\" cy=\"56\" rx=\"36\" ry=\"34\" fill=\"#33221E\"></ellipse><ellipse cx=\"70\" cy=\"60\" rx=\"33\" ry=\"30\" fill=\"#F9DEC9\"></ellipse><path d=\"M36 62 C32 36 52 24 70 24 C90 24 108 36 104 62 C101 50 90 39 63 35 C52 39 41 49 36 62 Z\" fill=\"#33221E\"></path><path d=\"M50 51 Q55 48.5 60 50.5\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><path d=\"M80 50.5 Q85 48.5 90 51\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><circle cx=\"45\" cy=\"77\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><circle cx=\"95\" cy=\"77\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><g class=\"chibi-blink\"><g><ellipse cx=\"56\" cy=\"65\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><ellipse cx=\"84\" cy=\"65\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><circle cx=\"57.3\" cy=\"63.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle><circle cx=\"85.3\" cy=\"63.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle></g></g><g><circle cx=\"56\" cy=\"64\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><circle cx=\"84\" cy=\"64\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><path d=\"M67.3 62.5 Q70 60 72.7 62.5\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M44.6 62 L38 61\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><path d=\"M95.4 62 L102 61\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path></g><path d=\"M64 80 Q70 85 76 80\" fill=\"none\" stroke=\"#B5545F\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g><path d=\"M50 103 Q43 117 57 123\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><rect x=\"57\" y=\"111\" width=\"26\" height=\"17\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"57\" y=\"115\" width=\"26\" height=\"3\" fill=\"#F2B544\"></rect><circle cx=\"59\" cy=\"124\" r=\"5\" fill=\"#F9DEC9\"></circle><g class=\"chibi-wave\"><path d=\"M90 103 Q108 100 113 80\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><circle cx=\"114\" cy=\"75\" r=\"5\" fill=\"#F9DEC9\"></circle></g></svg>\n</sc-if>\n<sc-if value=\"{{isBook}}\" hint-placeholder-val=\"{{false}}\">\n<svg class=\"chibi-pop\" viewBox=\"0 0 140 170\" role=\"img\" aria-label=\"Chibi Shermaine flipping through a book\" style=\"display: block; width: 100%; height: auto\"><g class=\"chibi-nod\"><path d=\"M34 58 L31 110 C30 119 41 121 45 115 L95 115 C99 121 110 119 109 110 L106 58 Z\" fill=\"#33221E\"></path></g><g class=\"chibi-legl\"><rect x=\"53\" y=\"124\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#7F9CC4\"></rect><rect x=\"52\" y=\"144\" width=\"16\" height=\"5\" rx=\"2\" fill=\"#A9BEDD\"></rect><rect x=\"55\" y=\"149\" width=\"10\" height=\"4\" fill=\"#F2A7B5\"></rect><rect x=\"50.5\" y=\"152\" width=\"19\" height=\"11\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"50.5\" y=\"160\" width=\"19\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><g class=\"chibi-legr\"><rect x=\"73\" y=\"124\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#7F9CC4\"></rect><rect x=\"72\" y=\"144\" width=\"16\" height=\"5\" rx=\"2\" fill=\"#A9BEDD\"></rect><rect x=\"75\" y=\"149\" width=\"10\" height=\"4\" fill=\"#F2A7B5\"></rect><rect x=\"70.5\" y=\"152\" width=\"19\" height=\"11\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"70.5\" y=\"160\" width=\"19\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><path d=\"M46 101 C46 92 94 92 94 101 L98 129 C98 133 42 133 42 129 Z\" fill=\"#EBC6B8\"></path><path d=\"M60 93 Q70 100 80 93 L81 132 L59 132 Z\" fill=\"#FFFFFF\"></path><path d=\"M51 106 L50 128\" fill=\"none\" stroke=\"#D3A090\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path><path d=\"M89 106 L90 128\" fill=\"none\" stroke=\"#D3A090\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path><circle cx=\"84.5\" cy=\"110\" r=\"1.5\" fill=\"#D3A090\"></circle><circle cx=\"85\" cy=\"120\" r=\"1.5\" fill=\"#D3A090\"></circle><rect x=\"65\" y=\"84\" width=\"10\" height=\"12\" rx=\"4\" fill=\"#F9DEC9\"></rect><g class=\"chibi-nod\"><ellipse cx=\"70\" cy=\"56\" rx=\"36\" ry=\"34\" fill=\"#33221E\"></ellipse><ellipse cx=\"70\" cy=\"60\" rx=\"33\" ry=\"30\" fill=\"#F9DEC9\"></ellipse><path d=\"M36 62 C32 36 52 24 70 24 C90 24 108 36 104 62 C101 50 90 39 63 35 C52 39 41 49 36 62 Z\" fill=\"#33221E\"></path><path d=\"M50 51 Q55 48.5 60 50.5\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><path d=\"M80 50.5 Q85 48.5 90 51\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><circle cx=\"45\" cy=\"77\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><circle cx=\"95\" cy=\"77\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><g class=\"chibi-blink\"><g><ellipse cx=\"56\" cy=\"67\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><ellipse cx=\"84\" cy=\"67\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><circle cx=\"57.3\" cy=\"65.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle><circle cx=\"85.3\" cy=\"65.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle></g></g><g><circle cx=\"56\" cy=\"64\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><circle cx=\"84\" cy=\"64\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><path d=\"M67.3 62.5 Q70 60 72.7 62.5\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M44.6 62 L38 61\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><path d=\"M95.4 62 L102 61\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path></g><path d=\"M64 80 Q70 85 76 80\" fill=\"none\" stroke=\"#B5545F\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g><path d=\"M50 103 Q42 114 50 121\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><path d=\"M90 103 Q98 114 90 121\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><path d=\"M70 107 L45 103 L45 126 L70 130 L95 126 L95 103 Z\" fill=\"#17203A\"></path><path d=\"M70 106 L47 102.5 L47 123.5 L70 127 Z\" fill=\"#FFF7E6\"></path><path d=\"M70 106 L93 102.5 L93 123.5 L70 127 Z\" fill=\"#FFF7E6\"></path><path d=\"M52 109 L66 111 M52 114 L66 116 M74 111 L88 109 M74 116 L88 114\" fill=\"none\" stroke=\"#D8C9A8\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path><path class=\"chibi-flip\" d=\"M70 106 L93 102.5 L93 123.5 L70 127 Z\" fill=\"#FFFDF5\" stroke=\"#D8C9A8\" stroke-width=\"0.8\"></path><path d=\"M70 106 L70 127\" fill=\"none\" stroke=\"#D8C9A8\" stroke-width=\"1\"></path><circle cx=\"49\" cy=\"123\" r=\"5\" fill=\"#F9DEC9\"></circle><circle cx=\"91\" cy=\"123\" r=\"5\" fill=\"#F9DEC9\"></circle></svg>\n</sc-if>\n<sc-if value=\"{{isLean}}\" hint-placeholder-val=\"{{false}}\">\n<svg class=\"chibi-pop\" viewBox=\"6 0 130 122\" role=\"img\" aria-label=\"Chibi Shermaine sitting on the ground with her back against the word AI\" style=\"display: block; width: 100%; height: auto\"><path d=\"M14 40 C10 70 13 98 22 110 C30 115 40 108 38 96 L42 58 Z\" fill=\"#33221E\"></path><path d=\"M90 82 L110 110\" fill=\"none\" stroke=\"#6C89B3\" stroke-width=\"12\" stroke-linecap=\"round\"></path><rect x=\"104\" y=\"106\" width=\"24\" height=\"12\" rx=\"5\" fill=\"#6A432B\"></rect><rect x=\"104\" y=\"115\" width=\"24\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect><path d=\"M30 74 C30 65 60 65 61 75 L63 108 C63 117 31 119 27 110 Z\" fill=\"#EBC6B8\"></path><path d=\"M53 70 L60.5 73 L62 100 L55 100 Z\" fill=\"#FFFFFF\"></path><path d=\"M34 80 L32 108\" fill=\"none\" stroke=\"#D3A090\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path><path d=\"M50 107 L84 79\" fill=\"none\" stroke=\"#7F9CC4\" stroke-width=\"17\" stroke-linecap=\"round\"></path><path d=\"M84 79 L101 109\" fill=\"none\" stroke=\"#7F9CC4\" stroke-width=\"13\" stroke-linecap=\"round\"></path><path d=\"M98.2 104 L100.4 108\" fill=\"none\" stroke=\"#A9BEDD\" stroke-width=\"15\" stroke-linecap=\"butt\"></path><g class=\"chibi-tap\"><rect x=\"93\" y=\"107\" width=\"25\" height=\"12\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"93\" y=\"116\" width=\"25\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><path d=\"M44 80 Q62 94 90 92\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><circle cx=\"93\" cy=\"92\" r=\"5\" fill=\"#F9DEC9\"></circle><g class=\"chibi-nod3\"><ellipse cx=\"46\" cy=\"36\" rx=\"36\" ry=\"34\" fill=\"#33221E\"></ellipse><ellipse cx=\"46\" cy=\"40\" rx=\"33\" ry=\"30\" fill=\"#F9DEC9\"></ellipse><path d=\"M12 42 C8 16 28 4 46 4 C66 4 84 16 80 42 C77 30 66 19 39 15 C28 19 17 29 12 42 Z\" fill=\"#33221E\"></path><path d=\"M26 31 Q31 28.5 36 30.5\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><path d=\"M56 30.5 Q61 28.5 66 31\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><circle cx=\"21\" cy=\"57\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><circle cx=\"71\" cy=\"57\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><g class=\"chibi-blink3\"><ellipse cx=\"32\" cy=\"45\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><ellipse cx=\"60\" cy=\"45\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><circle cx=\"33.3\" cy=\"43.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle><circle cx=\"61.3\" cy=\"43.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle></g><circle cx=\"32\" cy=\"44\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><circle cx=\"60\" cy=\"44\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><path d=\"M43.3 42.5 Q46 40 48.7 42.5\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M20.6 42 L14 41\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><path d=\"M71.4 42 L78 41\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><path d=\"M40 60 Q46 65 52 60\" fill=\"none\" stroke=\"#B5545F\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g></svg>\n</sc-if>\n<sc-if value=\"{{isLie}}\" hint-placeholder-val=\"{{false}}\">\n<svg class=\"chibi-pop\" viewBox=\"0 14 220 100\" role=\"img\" aria-label=\"Chibi Shermaine lying down and flipping through a book\" style=\"display: block; width: 100%; height: auto\"><ellipse cx=\"112\" cy=\"108\" rx=\"96\" ry=\"4\" fill=\"#E1E5EB\"></ellipse><g class=\"chibi-kickr\"><rect x=\"169.5\" y=\"58\" width=\"13\" height=\"42\" rx=\"6\" fill=\"#7F9CC4\"></rect><rect x=\"168.5\" y=\"58\" width=\"15\" height=\"5\" rx=\"2\" fill=\"#A9BEDD\"></rect><rect x=\"171.5\" y=\"54\" width=\"9\" height=\"4\" fill=\"#F2A7B5\"></rect><rect x=\"166\" y=\"42\" width=\"20\" height=\"12\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"166\" y=\"42\" width=\"20\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><g class=\"chibi-kickl\"><rect x=\"157.5\" y=\"58\" width=\"13\" height=\"42\" rx=\"6\" fill=\"#7F9CC4\"></rect><rect x=\"156.5\" y=\"58\" width=\"15\" height=\"5\" rx=\"2\" fill=\"#A9BEDD\"></rect><rect x=\"159.5\" y=\"54\" width=\"9\" height=\"4\" fill=\"#F2A7B5\"></rect><rect x=\"154\" y=\"42\" width=\"20\" height=\"12\" rx=\"5\" fill=\"#7A4E32\"></rect><rect x=\"154\" y=\"42\" width=\"20\" height=\"3\" rx=\"1.5\" fill=\"#5E3A24\"></rect></g><rect x=\"128\" y=\"84\" width=\"56\" height=\"24\" rx=\"11\" fill=\"#7F9CC4\"></rect><rect x=\"78\" y=\"80\" width=\"62\" height=\"28\" rx=\"12\" fill=\"#EBC6B8\"></rect><path d=\"M88 84 L132 84\" fill=\"none\" stroke=\"#D3A090\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path><path d=\"M30 56 L28 100 C28 108 40 108 42 102 L44 68 Z\" fill=\"#33221E\"></path><path d=\"M96 56 C108 64 117 77 115 92 C108 97 100 94 95 88 Z\" fill=\"#33221E\"></path><path d=\"M106 104 L92 100\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><g class=\"chibi-nod2\"><ellipse cx=\"64\" cy=\"54\" rx=\"36\" ry=\"34\" fill=\"#33221E\"></ellipse><ellipse cx=\"64\" cy=\"58\" rx=\"33\" ry=\"30\" fill=\"#F9DEC9\"></ellipse><path d=\"M30 60 C26 34 46 22 64 22 C84 22 102 34 98 60 C95 48 84 37 57 33 C46 37 35 47 30 60 Z\" fill=\"#33221E\"></path><path d=\"M44 49 Q49 46.5 54 48.5\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><path d=\"M74 48.5 Q79 46.5 84 49\" fill=\"none\" stroke=\"#33221E\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><circle cx=\"39\" cy=\"75\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><circle cx=\"89\" cy=\"75\" r=\"5\" fill=\"#F29CAB\" opacity=\"0.45\"></circle><g class=\"chibi-blink2\"><ellipse cx=\"50\" cy=\"65\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><ellipse cx=\"78\" cy=\"65\" rx=\"3.6\" ry=\"4.8\" fill=\"#4A2E22\"></ellipse><circle cx=\"51.3\" cy=\"63.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle><circle cx=\"79.3\" cy=\"63.3\" r=\"1.3\" fill=\"#FFFFFF\"></circle></g><circle cx=\"50\" cy=\"62\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><circle cx=\"78\" cy=\"62\" r=\"11.5\" fill=\"#FFFFFF\" fill-opacity=\"0.3\" stroke=\"#8A5A2B\" stroke-width=\"2.6\"></circle><path d=\"M61.3 60.5 Q64 58 66.7 60.5\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M38.6 60 L32 59\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><path d=\"M89.4 60 L96 59\" fill=\"none\" stroke=\"#8A5A2B\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><path d=\"M58 78 Q64 83 70 78\" fill=\"none\" stroke=\"#B5545F\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g><path d=\"M64 93 L36 89 L36 106 L64 110 L92 106 L92 89 Z\" fill=\"#17203A\"></path><path d=\"M64 92 L38 88.5 L38 104 L64 107.5 Z\" fill=\"#FFF7E6\"></path><path d=\"M64 92 L90 88.5 L90 104 L64 107.5 Z\" fill=\"#FFF7E6\"></path><path d=\"M43 94 L59 96 M43 99 L59 101 M69 96 L85 94 M69 101 L85 99\" fill=\"none\" stroke=\"#D8C9A8\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path><path class=\"chibi-flip2\" d=\"M64 92 L90 88.5 L90 104 L64 107.5 Z\" fill=\"#FFFDF5\" stroke=\"#D8C9A8\" stroke-width=\"0.8\"></path><path d=\"M64 92 L64 107.5\" fill=\"none\" stroke=\"#D8C9A8\" stroke-width=\"1\"></path><path d=\"M22 104 L36 100\" fill=\"none\" stroke=\"#E2B6A6\" stroke-width=\"9\" stroke-linecap=\"round\"></path><circle cx=\"37\" cy=\"99\" r=\"5\" fill=\"#F9DEC9\"></circle><circle cx=\"91\" cy=\"99\" r=\"5\" fill=\"#F9DEC9\"></circle></svg>\n</sc-if>\n</div>", function (DCLogic, React) {
class Component extends DCLogic {
  renderVals() {
    const pose = this.props.pose ?? 'tilt';
    return {
      isTilt: pose === 'tilt',
      isGlasses: pose === 'glasses',
      isWave: pose === 'wave',
      isBook: pose === 'book',
      isLean: pose === 'lean',
      isLie: pose === 'lie'
    };
  }
}
return Component;
});

// ---------- CaseArt
DCLite.define("CaseArt", "<div style=\"width: 100%; background: #F1F3F6\">\n<sc-if value=\"{{is_chatbot}}\" hint-placeholder-val=\"{{true}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a chat in English and Malay that ends with the request resolved\" style=\"display: block; width: 100%; height: auto\"><rect x=\"16\" y=\"16\" width=\"78\" height=\"34\" rx=\"12\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><path d=\"M30 50 L26 60 L40 50 Z\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><rect x=\"28\" y=\"49\" width=\"13\" height=\"3\" fill=\"#FFFFFF\"></rect><rect x=\"28\" y=\"28\" width=\"34\" height=\"4\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"28\" y=\"36\" width=\"50\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"86\" y=\"46\" width=\"78\" height=\"34\" rx=\"12\" fill=\"#17203A\"></rect><path d=\"M150 80 L154 90 L140 80 Z\" fill=\"#17203A\"></path><rect x=\"98\" y=\"58\" width=\"40\" height=\"4\" rx=\"2\" fill=\"#FFFFFF\"></rect><rect x=\"98\" y=\"66\" width=\"54\" height=\"4\" rx=\"2\" fill=\"#F2B544\"></rect><circle cx=\"40\" cy=\"92\" r=\"12\" fill=\"#F2B544\"></circle><path d=\"M34 92 L38.5 96.5 L46.5 87.5\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"58\" y=\"86\" width=\"26\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"58\" y=\"94\" width=\"18\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect></svg>\n</sc-if>\n<sc-if value=\"{{is_vision}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a photo of a leaking pipe with the leak boxed and labelled by a computer vision model\" style=\"display: block; width: 100%; height: auto\"><rect x=\"20\" y=\"18\" width=\"104\" height=\"80\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><rect x=\"28\" y=\"56\" width=\"88\" height=\"14\" rx=\"3\" fill=\"#C9CFD9\"></rect><rect x=\"64\" y=\"51\" width=\"12\" height=\"24\" rx=\"3\" fill=\"#17203A\"></rect><path d=\"M70 78 C66 84 65 87 70 90 C75 87 74 84 70 78 Z\" fill=\"#F2B544\"></path><path d=\"M58 76 C55.5 80 55 82 58 84 C61 82 60.5 80 58 76 Z\" fill=\"#F2B544\"></path><path d=\"M82 76 C79.5 80 79 82 82 84 C85 82 84.5 80 82 76 Z\" fill=\"#F2B544\"></path><rect x=\"48\" y=\"44\" width=\"44\" height=\"50\" rx=\"4\" fill=\"none\" stroke=\"#F2B544\" stroke-width=\"2.4\" stroke-dasharray=\"5 4\"></rect><rect x=\"48\" y=\"32\" width=\"32\" height=\"11\" rx=\"3\" fill=\"#F2B544\"></rect><rect x=\"53\" y=\"35.5\" width=\"20\" height=\"4\" rx=\"2\" fill=\"#17203A\"></rect><circle cx=\"148\" cy=\"42\" r=\"14\" fill=\"#17203A\"></circle><circle cx=\"148\" cy=\"42\" r=\"6\" fill=\"#F2B544\"></circle><rect x=\"134\" y=\"66\" width=\"28\" height=\"4\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"134\" y=\"75\" width=\"20\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"134\" y=\"84\" width=\"24\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect></svg>\n</sc-if>\n<sc-if value=\"{{is_handover}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a question searched across handover documents, returning an answer that cites its source page\" style=\"display: block; width: 100%; height: auto\"><rect x=\"26\" y=\"30\" width=\"44\" height=\"58\" rx=\"5\" fill=\"#C9CFD9\"></rect><rect x=\"20\" y=\"24\" width=\"44\" height=\"58\" rx=\"5\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><rect x=\"28\" y=\"34\" width=\"28\" height=\"4\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"28\" y=\"43\" width=\"22\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"28\" y=\"52\" width=\"28\" height=\"4\" rx=\"2\" fill=\"#F2B544\"></rect><rect x=\"28\" y=\"61\" width=\"18\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><path d=\"M78 56 L98 56\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M92 50 L98 56 L92 62\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"106\" y=\"30\" width=\"58\" height=\"52\" rx=\"10\" fill=\"#17203A\"></rect><rect x=\"116\" y=\"42\" width=\"38\" height=\"4\" rx=\"2\" fill=\"#FFFFFF\"></rect><rect x=\"116\" y=\"51\" width=\"30\" height=\"4\" rx=\"2\" fill=\"#FFFFFF\"></rect><rect x=\"116\" y=\"64\" width=\"26\" height=\"10\" rx=\"5\" fill=\"#F2B544\"></rect><circle cx=\"124\" cy=\"96\" r=\"4\" fill=\"#C9CFD9\"></circle><circle cx=\"136\" cy=\"96\" r=\"4\" fill=\"#C9CFD9\"></circle><circle cx=\"148\" cy=\"96\" r=\"4\" fill=\"#17203A\"></circle></svg>\n</sc-if>\n<sc-if value=\"{{is_herbalife}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a virtual event on a screen with a large online audience\" style=\"display: block; width: 100%; height: auto\"><rect x=\"38\" y=\"14\" width=\"104\" height=\"60\" rx=\"8\" fill=\"#17203A\"></rect><polygon points=\"82,32 82,56 102,44\" fill=\"#F2B544\"></polygon><rect x=\"78\" y=\"74\" width=\"24\" height=\"5\" fill=\"#17203A\"></rect><circle cx=\"27\" cy=\"92\" r=\"6\" fill=\"#17203A\"></circle><circle cx=\"45\" cy=\"92\" r=\"6\" fill=\"#F2B544\"></circle><circle cx=\"63\" cy=\"92\" r=\"6\" fill=\"#C9CFD9\"></circle><circle cx=\"81\" cy=\"92\" r=\"6\" fill=\"#17203A\"></circle><circle cx=\"99\" cy=\"92\" r=\"6\" fill=\"#F2B544\"></circle><circle cx=\"117\" cy=\"92\" r=\"6\" fill=\"#C9CFD9\"></circle><circle cx=\"135\" cy=\"92\" r=\"6\" fill=\"#17203A\"></circle><circle cx=\"153\" cy=\"92\" r=\"6\" fill=\"#F2B544\"></circle><circle cx=\"36\" cy=\"108\" r=\"6\" fill=\"#C9CFD9\"></circle><circle cx=\"54\" cy=\"108\" r=\"6\" fill=\"#17203A\"></circle><circle cx=\"72\" cy=\"108\" r=\"6\" fill=\"#F2B544\"></circle><circle cx=\"90\" cy=\"108\" r=\"6\" fill=\"#C9CFD9\"></circle><circle cx=\"108\" cy=\"108\" r=\"6\" fill=\"#17203A\"></circle><circle cx=\"126\" cy=\"108\" r=\"6\" fill=\"#F2B544\"></circle><circle cx=\"144\" cy=\"108\" r=\"6\" fill=\"#C9CFD9\"></circle></svg>\n</sc-if>\n<sc-if value=\"{{is_tiger}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a street food stall inside a browser window, for a festival held online\" style=\"display: block; width: 100%; height: auto\"><rect x=\"20\" y=\"14\" width=\"140\" height=\"92\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><path d=\"M20 30 H160\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2\"></path><circle cx=\"30\" cy=\"22\" r=\"2.5\" fill=\"#17203A\"></circle><circle cx=\"38\" cy=\"22\" r=\"2.5\" fill=\"#F2B544\"></circle><circle cx=\"46\" cy=\"22\" r=\"2.5\" fill=\"#C9CFD9\"></circle><polygon points=\"56,40 73,40 69,56 48,56\" fill=\"#F2B544\"></polygon><polygon points=\"73,40 90,40 90,56 69,56\" fill=\"#17203A\"></polygon><polygon points=\"90,40 107,40 111,56 90,56\" fill=\"#F2B544\"></polygon><polygon points=\"107,40 124,40 132,56 111,56\" fill=\"#17203A\"></polygon><rect x=\"54\" y=\"56\" width=\"4\" height=\"24\" fill=\"#17203A\"></rect><rect x=\"122\" y=\"56\" width=\"4\" height=\"24\" fill=\"#17203A\"></rect><rect x=\"48\" y=\"78\" width=\"84\" height=\"18\" rx=\"3\" fill=\"#17203A\"></rect><path d=\"M76 68 H104 A14 10 0 0 1 76 68 Z\" fill=\"#F2B544\"></path><path d=\"M85 65 c-2 -2 2 -3 0 -5\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><path d=\"M95 65 c-2 -2 2 -3 0 -5\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"1.8\" stroke-linecap=\"round\"></path><circle cx=\"62\" cy=\"87\" r=\"3\" fill=\"#F2B544\"></circle><circle cx=\"118\" cy=\"87\" r=\"3\" fill=\"#F2B544\"></circle><rect x=\"72\" y=\"85\" width=\"36\" height=\"4\" rx=\"2\" fill=\"#FFFFFF\"></rect><path d=\"M142 74 v15 l4 -3.5 l3 6.5 l3 -1.5 l-3 -6.5 h5.5 Z\" fill=\"#17203A\" stroke=\"#FFFFFF\" stroke-width=\"1.5\" stroke-linejoin=\"round\"></path></svg>\n</sc-if>\n<sc-if value=\"{{is_misc}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a VR headset next to a speaker at a podium, for a town hall held in virtual reality\" style=\"display: block; width: 100%; height: auto\"><rect x=\"12\" y=\"52\" width=\"12\" height=\"14\" rx=\"3\" fill=\"#C9CFD9\"></rect><rect x=\"92\" y=\"52\" width=\"12\" height=\"14\" rx=\"3\" fill=\"#C9CFD9\"></rect><rect x=\"20\" y=\"38\" width=\"76\" height=\"42\" rx=\"15\" fill=\"#17203A\"></rect><path d=\"M50 80 Q58 70 66 80 Z\" fill=\"#F1F3F6\"></path><circle cx=\"42\" cy=\"58\" r=\"10\" fill=\"#FFFFFF\"></circle><circle cx=\"74\" cy=\"58\" r=\"10\" fill=\"#FFFFFF\"></circle><circle cx=\"42\" cy=\"58\" r=\"4.5\" fill=\"#F2B544\"></circle><circle cx=\"74\" cy=\"58\" r=\"4.5\" fill=\"#F2B544\"></circle><circle cx=\"30\" cy=\"98\" r=\"5\" fill=\"#C9CFD9\"></circle><circle cx=\"46\" cy=\"98\" r=\"5\" fill=\"#17203A\"></circle><circle cx=\"62\" cy=\"98\" r=\"5\" fill=\"#C9CFD9\"></circle><circle cx=\"78\" cy=\"98\" r=\"5\" fill=\"#17203A\"></circle><circle cx=\"140\" cy=\"30\" r=\"9\" fill=\"#F2B544\"></circle><rect x=\"127\" y=\"42\" width=\"26\" height=\"24\" rx=\"10\" fill=\"#17203A\"></rect><polygon points=\"120,60 160,60 154,100 126,100\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><circle cx=\"140\" cy=\"80\" r=\"6\" fill=\"#F2B544\"></circle></svg>\n</sc-if>\n<sc-if value=\"{{is_ar}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a phone showing a 3D object placed in the room through its camera, for augmented reality\" style=\"display: block; width: 100%; height: auto\"><circle cx=\"38\" cy=\"42\" r=\"11\" fill=\"none\" stroke=\"#C9CFD9\" stroke-width=\"2\" stroke-dasharray=\"4 4\"></circle><rect x=\"64\" y=\"10\" width=\"52\" height=\"100\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2.4\"></rect><rect x=\"82\" y=\"16\" width=\"16\" height=\"3\" rx=\"1.5\" fill=\"#17203A\"></rect><ellipse cx=\"90\" cy=\"84\" rx=\"17\" ry=\"4.5\" fill=\"#C9CFD9\"></ellipse><polygon points=\"90,44 105,51.5 90,59 75,51.5\" fill=\"#F2B544\"></polygon><polygon points=\"75,51.5 90,59 90,77 75,69.5\" fill=\"#17203A\"></polygon><polygon points=\"105,51.5 90,59 90,77 105,69.5\" fill=\"#8A93A3\"></polygon><path d=\"M71 40 V34 H77\" fill=\"none\" stroke=\"#F2B544\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M103 34 H109 V40\" fill=\"none\" stroke=\"#F2B544\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M71 90 V96 H77\" fill=\"none\" stroke=\"#F2B544\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M103 96 H109 V90\" fill=\"none\" stroke=\"#F2B544\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M140 24 l2.5 5.5 l5.5 2.5 l-5.5 2.5 l-2.5 5.5 l-2.5 -5.5 l-5.5 -2.5 l5.5 -2.5 Z\" fill=\"#F2B544\"></path><path d=\"M146 74 l1.8 4 l4 1.8 l-4 1.8 l-1.8 4 l-1.8 -4 l-4 -1.8 l4 -1.8 Z\" fill=\"#17203A\"></path><path d=\"M34 78 l1.5 3.3 l3.3 1.5 l-3.3 1.5 l-1.5 3.3 l-1.5 -3.3 l-3.3 -1.5 l3.3 -1.5 Z\" fill=\"#C9CFD9\"></path></svg>\n</sc-if>\n<sc-if value=\"{{is_handbook}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of an open handbook with a bookmark, next to a short multiple-choice quiz\" style=\"display: block; width: 100%; height: auto\"><path d=\"M20 30 Q44 22 66 30 V94 Q44 86 20 94 Z\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><path d=\"M66 30 Q88 22 112 30 V94 Q88 86 66 94 Z\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><rect x=\"28\" y=\"42\" width=\"28\" height=\"4\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"28\" y=\"51\" width=\"30\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"28\" y=\"60\" width=\"24\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"28\" y=\"69\" width=\"30\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"74\" y=\"51\" width=\"28\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"74\" y=\"60\" width=\"22\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"74\" y=\"69\" width=\"26\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><polygon points=\"92,26 103,26 103,50 97.5,45 92,50\" fill=\"#F2B544\"></polygon><rect x=\"124\" y=\"34\" width=\"42\" height=\"56\" rx=\"8\" fill=\"#17203A\"></rect><circle cx=\"134\" cy=\"48\" r=\"4\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"1.8\"></circle><rect x=\"142\" y=\"46\" width=\"16\" height=\"4\" rx=\"2\" fill=\"#FFFFFF\"></rect><circle cx=\"134\" cy=\"62\" r=\"4\" fill=\"#F2B544\"></circle><rect x=\"142\" y=\"60\" width=\"16\" height=\"4\" rx=\"2\" fill=\"#F2B544\"></rect><circle cx=\"134\" cy=\"76\" r=\"4\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"1.8\"></circle><rect x=\"142\" y=\"74\" width=\"12\" height=\"4\" rx=\"2\" fill=\"#FFFFFF\"></rect></svg>\n</sc-if>\n<sc-if value=\"{{is_antc}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a screen showing a grid of people on a video call, for a conference moved online\" style=\"display: block; width: 100%; height: auto\"><rect x=\"24\" y=\"12\" width=\"132\" height=\"80\" rx=\"8\" fill=\"#17203A\"></rect><rect x=\"78\" y=\"92\" width=\"24\" height=\"6\" fill=\"#17203A\"></rect><rect x=\"62\" y=\"98\" width=\"56\" height=\"5\" rx=\"2.5\" fill=\"#17203A\"></rect><rect x=\"30\" y=\"18\" width=\"36\" height=\"30\" rx=\"5\" fill=\"#F2B544\"></rect><circle cx=\"48\" cy=\"29\" r=\"5\" fill=\"#17203A\"></circle><path d=\"M39 45 a9 8 0 0 1 18 0 Z\" fill=\"#17203A\"></path><rect x=\"72\" y=\"18\" width=\"36\" height=\"30\" rx=\"5\" fill=\"#FFFFFF\"></rect><circle cx=\"90\" cy=\"29\" r=\"5\" fill=\"#17203A\"></circle><path d=\"M81 45 a9 8 0 0 1 18 0 Z\" fill=\"#17203A\"></path><rect x=\"114\" y=\"18\" width=\"36\" height=\"30\" rx=\"5\" fill=\"#FFFFFF\"></rect><circle cx=\"132\" cy=\"29\" r=\"5\" fill=\"#17203A\"></circle><path d=\"M123 45 a9 8 0 0 1 18 0 Z\" fill=\"#17203A\"></path><rect x=\"30\" y=\"54\" width=\"36\" height=\"30\" rx=\"5\" fill=\"#FFFFFF\"></rect><circle cx=\"48\" cy=\"65\" r=\"5\" fill=\"#17203A\"></circle><path d=\"M39 81 a9 8 0 0 1 18 0 Z\" fill=\"#17203A\"></path><rect x=\"72\" y=\"54\" width=\"36\" height=\"30\" rx=\"5\" fill=\"#FFFFFF\"></rect><circle cx=\"90\" cy=\"65\" r=\"5\" fill=\"#17203A\"></circle><path d=\"M81 81 a9 8 0 0 1 18 0 Z\" fill=\"#17203A\"></path><rect x=\"114\" y=\"54\" width=\"36\" height=\"30\" rx=\"5\" fill=\"#C9CFD9\"></rect><circle cx=\"132\" cy=\"65\" r=\"5\" fill=\"#17203A\"></circle><path d=\"M123 81 a9 8 0 0 1 18 0 Z\" fill=\"#17203A\"></path></svg>\n</sc-if>\n<sc-if value=\"{{is_yippi}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a loyalty card with a star and a points bar, next to a gift box, for a rewards platform\" style=\"display: block; width: 100%; height: auto\"><rect x=\"18\" y=\"28\" width=\"96\" height=\"64\" rx=\"10\" fill=\"#17203A\"></rect><polygon points=\"46,40 48.9,48 57.4,48.3 50.8,53.5 53.1,61.7 46,57 38.9,61.7 41.2,53.5 34.6,48.3 43.1,48\" fill=\"#F2B544\"></polygon><rect x=\"66\" y=\"44\" width=\"34\" height=\"4\" rx=\"2\" fill=\"#FFFFFF\"></rect><rect x=\"66\" y=\"54\" width=\"24\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"30\" y=\"74\" width=\"72\" height=\"6\" rx=\"3\" fill=\"#36426A\"></rect><rect x=\"30\" y=\"74\" width=\"46\" height=\"6\" rx=\"3\" fill=\"#F2B544\"></rect><rect x=\"126\" y=\"60\" width=\"36\" height=\"32\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><rect x=\"122\" y=\"50\" width=\"44\" height=\"12\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><rect x=\"141\" y=\"50\" width=\"6\" height=\"42\" fill=\"#F2B544\"></rect><path d=\"M144 50 C134 36 126 46 144 50 Z\" fill=\"#F2B544\"></path><path d=\"M144 50 C154 36 162 46 144 50 Z\" fill=\"#F2B544\"></path><circle cx=\"128\" cy=\"26\" r=\"5\" fill=\"#F2B544\"></circle><circle cx=\"156\" cy=\"30\" r=\"3\" fill=\"#C9CFD9\"></circle></svg>\n</sc-if>\n<sc-if value=\"{{is_testing}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a list of tests all ticked off, next to a play button that runs them automatically\" style=\"display: block; width: 100%; height: auto\"><rect x=\"18\" y=\"16\" width=\"100\" height=\"88\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><path d=\"M18 32 H118\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2\"></path><circle cx=\"28\" cy=\"24\" r=\"2.5\" fill=\"#17203A\"></circle><circle cx=\"36\" cy=\"24\" r=\"2.5\" fill=\"#F2B544\"></circle><circle cx=\"44\" cy=\"24\" r=\"2.5\" fill=\"#C9CFD9\"></circle><circle cx=\"36\" cy=\"48\" r=\"6\" fill=\"#F2B544\"></circle><path d=\"M33 48 l2.4 2.4 l4 -4.6\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"50\" y=\"46\" width=\"54\" height=\"4\" rx=\"2\" fill=\"#17203A\"></rect><circle cx=\"36\" cy=\"66\" r=\"6\" fill=\"#F2B544\"></circle><path d=\"M33 66 l2.4 2.4 l4 -4.6\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"50\" y=\"64\" width=\"40\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><circle cx=\"36\" cy=\"84\" r=\"6\" fill=\"#F2B544\"></circle><path d=\"M33 84 l2.4 2.4 l4 -4.6\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"50\" y=\"82\" width=\"48\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><circle cx=\"148\" cy=\"54\" r=\"18\" fill=\"#17203A\"></circle><polygon points=\"143,45 143,63 158,54\" fill=\"#F2B544\"></polygon><rect x=\"134\" y=\"82\" width=\"28\" height=\"4\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"138\" y=\"91\" width=\"20\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect></svg>\n</sc-if>\n<sc-if value=\"{{is_workflows}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a form moving through three approval steps and ending with an approved stamp\" style=\"display: block; width: 100%; height: auto\"><path d=\"M40 28 H140\" fill=\"none\" stroke=\"#C9CFD9\" stroke-width=\"3\" stroke-linecap=\"round\"></path><circle cx=\"40\" cy=\"28\" r=\"8\" fill=\"#17203A\"></circle><circle cx=\"90\" cy=\"28\" r=\"8\" fill=\"#17203A\"></circle><circle cx=\"140\" cy=\"28\" r=\"8\" fill=\"#F2B544\"></circle><path d=\"M36.5 28 l2.5 2.5 l4.5 -5\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M86.5 28 l2.5 2.5 l4.5 -5\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M136.5 28 l2.5 2.5 l4.5 -5\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"34\" y=\"46\" width=\"96\" height=\"60\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><rect x=\"44\" y=\"56\" width=\"40\" height=\"4\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"44\" y=\"65\" width=\"62\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"44\" y=\"74\" width=\"54\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><path d=\"M44 94 q5 -8 10 0 t10 0 t10 0\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2\" stroke-linecap=\"round\"></path><circle cx=\"130\" cy=\"92\" r=\"16\" fill=\"#F2B544\" stroke=\"#F1F3F6\" stroke-width=\"3\"></circle><path d=\"M122.5 92 l5.5 5.5 l9.5 -11\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>\n</sc-if>\n<sc-if value=\"{{is_portals}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a self-serve portal with a booking calendar, next to an email and a text message being sent\" style=\"display: block; width: 100%; height: auto\"><rect x=\"16\" y=\"16\" width=\"104\" height=\"88\" rx=\"8\" fill=\"#FFFFFF\"></rect><path d=\"M24 16 H40 V104 H24 A8 8 0 0 1 16 96 V24 A8 8 0 0 1 24 16 Z\" fill=\"#17203A\"></path><rect x=\"16\" y=\"16\" width=\"104\" height=\"88\" rx=\"8\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2\"></rect><circle cx=\"28\" cy=\"32\" r=\"4\" fill=\"#F2B544\"></circle><rect x=\"23\" y=\"44\" width=\"10\" height=\"3\" rx=\"1.5\" fill=\"#C9CFD9\"></rect><rect x=\"23\" y=\"52\" width=\"10\" height=\"3\" rx=\"1.5\" fill=\"#C9CFD9\"></rect><rect x=\"23\" y=\"60\" width=\"10\" height=\"3\" rx=\"1.5\" fill=\"#C9CFD9\"></rect><rect x=\"48\" y=\"26\" width=\"40\" height=\"5\" rx=\"2.5\" fill=\"#17203A\"></rect><rect x=\"48\" y=\"40\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#C9CFD9\"></rect><rect x=\"64\" y=\"40\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#F2B544\"></rect><rect x=\"80\" y=\"40\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#C9CFD9\"></rect><rect x=\"96\" y=\"40\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#C9CFD9\"></rect><rect x=\"48\" y=\"56\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#F2B544\"></rect><rect x=\"64\" y=\"56\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#F2B544\"></rect><rect x=\"80\" y=\"56\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#C9CFD9\"></rect><rect x=\"96\" y=\"56\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#17203A\"></rect><rect x=\"48\" y=\"72\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#C9CFD9\"></rect><rect x=\"64\" y=\"72\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#C9CFD9\"></rect><rect x=\"80\" y=\"72\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#F2B544\"></rect><rect x=\"96\" y=\"72\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#C9CFD9\"></rect><rect x=\"48\" y=\"92\" width=\"60\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"130\" y=\"34\" width=\"36\" height=\"26\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><path d=\"M131 36 L148 50 L165 36\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><circle cx=\"166\" cy=\"34\" r=\"6\" fill=\"#F2B544\"></circle><rect x=\"132\" y=\"72\" width=\"32\" height=\"18\" rx=\"8\" fill=\"#17203A\"></rect><circle cx=\"141\" cy=\"81\" r=\"1.8\" fill=\"#FFFFFF\"></circle><circle cx=\"148\" cy=\"81\" r=\"1.8\" fill=\"#FFFFFF\"></circle><circle cx=\"155\" cy=\"81\" r=\"1.8\" fill=\"#FFFFFF\"></circle></svg>\n</sc-if>\n<sc-if value=\"{{is_support}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 180 120\" role=\"img\" aria-label=\"Diagram of a failed order on the left turned into a completed order on the right\" style=\"display: block; width: 100%; height: auto\"><rect x=\"18\" y=\"30\" width=\"52\" height=\"62\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><rect x=\"26\" y=\"40\" width=\"24\" height=\"4\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"26\" y=\"49\" width=\"36\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"26\" y=\"58\" width=\"30\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"26\" y=\"67\" width=\"20\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><circle cx=\"66\" cy=\"88\" r=\"12\" fill=\"#17203A\" stroke=\"#F1F3F6\" stroke-width=\"3\"></circle><rect x=\"64.5\" y=\"81\" width=\"3\" height=\"9\" rx=\"1.5\" fill=\"#FFFFFF\"></rect><circle cx=\"66\" cy=\"94\" r=\"1.8\" fill=\"#FFFFFF\"></circle><path d=\"M82 60 H98\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M92 54 L98 60 L92 66\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"110\" y=\"30\" width=\"52\" height=\"62\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#17203A\" stroke-width=\"2\"></rect><rect x=\"118\" y=\"40\" width=\"24\" height=\"4\" rx=\"2\" fill=\"#17203A\"></rect><rect x=\"118\" y=\"49\" width=\"36\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"118\" y=\"58\" width=\"30\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><rect x=\"118\" y=\"67\" width=\"20\" height=\"4\" rx=\"2\" fill=\"#C9CFD9\"></rect><circle cx=\"158\" cy=\"88\" r=\"12\" fill=\"#F2B544\" stroke=\"#F1F3F6\" stroke-width=\"3\"></circle><path d=\"M152 88 l4.5 4.5 l8 -9\" fill=\"none\" stroke=\"#17203A\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>\n</sc-if>\n</div>", function (DCLogic, React) {
class Component extends DCLogic {
  renderVals() {
    const art = this.props.art ?? 'chatbot';
    return {
      is_chatbot: art === 'chatbot',
      is_vision: art === 'vision',
      is_handover: art === 'handover',
      is_herbalife: art === 'herbalife',
      is_tiger: art === 'tiger',
      is_misc: art === 'misc',
      is_ar: art === 'ar',
      is_handbook: art === 'handbook',
      is_antc: art === 'antc',
      is_yippi: art === 'yippi',
      is_testing: art === 'testing',
      is_workflows: art === 'workflows',
      is_portals: art === 'portals',
      is_support: art === 'support'
    };
  }
}
return Component;
});

// ---------- CheckIcon
DCLite.define("CheckIcon", "<span style=\"display: block; width: 100%; color: inherit\">\n<sc-if value=\"{{isObjective}}\" hint-placeholder-val=\"{{true}}\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block; width: 100%; height: auto\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>\n</sc-if>\n<sc-if value=\"{{isData}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block; width: 100%; height: auto\"><ellipse cx=\"12\" cy=\"6\" rx=\"7\" ry=\"3\"></ellipse><path d=\"M5 6v6c0 1.700 3.100 3 7 3s7-1.300 7-3V6\"></path><path d=\"M5 12v6c0 1.700 3.100 3 7 3s7-1.300 7-3v-6\"></path></svg>\n</sc-if>\n<sc-if value=\"{{isOutcome}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block; width: 100%; height: auto\"><path d=\"M4 19h16\"></path><path d=\"M6 15l4-4 3 3 5-6\"></path></svg>\n</sc-if>\n<sc-if value=\"{{isDesign}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block; width: 100%; height: auto\"><circle cx=\"8\" cy=\"8\" r=\"3\"></circle><path d=\"M3 19c0-3 2.200-5 5-5s5 2 5 5\"></path><path d=\"M15 9h6\"></path><path d=\"M18 6l3 3-3 3\"></path></svg>\n</sc-if>\n<sc-if value=\"{{isGuard}}\" hint-placeholder-val=\"{{false}}\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block; width: 100%; height: auto\"><path d=\"M12 3l7 3v5c0 4.500-3 8-7 10-4-2-7-5.500-7-10V6z\"></path></svg>\n</sc-if>\n</span>", function (DCLogic, React) {
class Component extends DCLogic {
  renderVals() {
    const kind = this.props.kind ?? 'objective';
    return {
      isObjective: kind === 'objective',
      isData: kind === 'data',
      isOutcome: kind === 'outcome',
      isDesign: kind === 'design',
      isGuard: kind === 'guard'
    };
  }
}
return Component;
});

// ---------- Main
DCLite.define("Main", "<div id=\"top\" ref=\"{{rootRef}}\" style=\"--acc: {{accent}}; min-height: 100vh; display: flex; flex-direction: column; background: #FCFCFC; color: #030711; font-family: Inter, system-ui, sans-serif; font-size: 16px; line-height: 1.5\">\n\n<header style=\"background: #FCFCFC; border-bottom: 1px solid #E1E5EB\">\n<div style=\"max-width: 1120px; margin: 0 auto; padding: 16px 24px; box-sizing: border-box; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 24px\">\n<a href=\"#top\" style=\"display: inline-flex; align-items: center; min-height: 44px; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 22px; color: #030711; text-decoration: none\">Shermaine Tan.</a>\n<nav aria-label=\"Paths\" style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 4px 4px\">\n<sc-for list=\"{{paths}}\" as=\"p\" hint-placeholder-count=\"3\">\n<button type=\"button\" class=\"nav-link\" onClick=\"{{p.pick}}\" aria-pressed=\"{{p.pressed}}\" style=\"min-height: 44px; padding: 0 12px; border: 0; background: transparent; color: #030711; font-family: inherit; font-size: 15px; font-weight: {{p.navWeight}}; text-decoration: {{p.navLine}}; text-underline-offset: 6px; cursor: pointer\">{{p.short}}</button>\n</sc-for>\n<a class=\"btn-pop btn-flip\" href=\"#contact\" style=\"display: inline-flex; align-items: center; min-height: 44px; padding: 0 20px; margin-left: 8px; border-radius: 999px; background: #17203A; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 600\">Let's talk</a>\n</nav>\n</div>\n</header>\n\n<section aria-label=\"Introduction\" style=\"background: #FCFCFC; overflow: hidden\">\n<div style=\"max-width: 1120px; margin: 0 auto; padding: 56px 24px 72px; box-sizing: border-box; display: flex; flex-wrap: wrap; align-items: center; gap: 40px 56px\">\n\n<div class=\"hero-rise\" style=\"flex: 1 1 440px; min-width: 0; container-type: inline-size; display: flex; flex-direction: column; align-items: flex-start; gap: 20px\">\n<span style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 32px; padding: 0 14px; border-radius: 999px; background: #F1F3F6; font-size: 14px; font-weight: 600; color: #030711\"><span aria-hidden=\"true\" style=\"width: 8px; height: 8px; border-radius: 50%; background: {{accent}}\"></span>Hi, I'm Shermaine</span>\n<h1 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: clamp(44px, 15.5cqw, 88px); line-height: 1.08; letter-spacing: -0.02em; display: flex; flex-direction: column; align-items: flex-start\">\n<span style=\"font-size: 0.62em; line-height: 1.18; letter-spacing: -0.01em\">I studied law. </span>\n<span style=\"font-size: 0.62em; line-height: 1.18; letter-spacing: -0.01em\">Now I build </span>\n<span style=\"margin-top: 0.1em; margin-left: -0.16em; padding: 0 0.16em; border-radius: 0.14em; background: {{accent}}; color: #17203A\">AI products.</span>\n</h1>\n<p style=\"margin: 0; max-width: 460px; font-size: 19px; line-height: 1.5; color: #5B6472\">I'm a product manager based in Malaysia. Pick a path and I'll show you around.</p>\n<button type=\"button\" class=\"link-pop\" onClick=\"{{pickShort}}\" aria-pressed=\"{{shortPressed}}\" style=\"min-height: 44px; padding: 0; border: 0; background: transparent; color: #17203A; font-family: inherit; font-size: 15px; font-weight: 600; text-decoration: underline; text-underline-offset: 4px; cursor: pointer\">In a hurry? Read the 60-second version</button>\n</div>\n\n<div class=\"hero-rise hero-rise-2\" style=\"flex: 1 1 400px; min-width: 0; max-width: 520px; margin: 0 auto; position: relative; padding-top: 170px; box-sizing: border-box\">\n<div aria-hidden=\"true\" style=\"position: absolute; top: 0; left: 50%; width: min(380px, 94%); aspect-ratio: 1 / 1; transform: translateX(-50%); border-radius: 50%; background: #DCE6F5\"></div>\n<div style=\"position: absolute; z-index: 2; top: 12px; left: 20px; width: 170px; height: 206px; pointer-events: none\">\n<dc-import name=\"ChibiPose\" pose=\"{{heroPose}}\" hint-size=\"170px,206px\"></dc-import>\n</div>\n<p style=\"position: absolute; z-index: 2; top: 46px; left: 198px; max-width: calc(100% - 204px); margin: 0; padding: 12px 16px; box-sizing: border-box; background: #17203A; color: #FFFFFF; border-radius: 18px 18px 18px 4px; font-size: 16px; line-height: 1.4; font-weight: 600\"><span class=\"sr-only\">{{sayHero.text}}</span><span aria-hidden=\"true\"><sc-for list=\"{{sayHero.chars}}\" as=\"ch\" hint-placeholder-count=\"24\"><span class=\"ty {{sayHero.k}}\" style=\"animation-delay: {{ch.d}}\">{{ch.c}}</span></sc-for></span></p>\n<div role=\"group\" aria-label=\"Choose a path\" style=\"position: relative; padding: 12px; border-radius: 28px; background: #17203A; display: flex; flex-direction: column; gap: 10px\">\n<div style=\"height: 36px; padding: 0 10px; display: flex; align-items: center; justify-content: flex-end\">\n<span style=\"font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C3CBDB\">Pick a path</span>\n</div>\n<button type=\"button\" class=\"path-row\" onClick=\"{{pw.pick}}\" onMouseEnter=\"{{pw.over}}\" onMouseLeave=\"{{hoverOut}}\" onFocus=\"{{pw.over}}\" onBlur=\"{{hoverOut}}\" aria-pressed=\"{{pw.pressed}}\" style=\"width: 100%; min-height: 84px; padding: 14px 16px; box-sizing: border-box; border-radius: 18px; border: 1px solid {{pw.border}}; background: {{pw.bg}}; color: {{pw.fg}}; font-family: inherit; text-align: left; cursor: pointer; display: flex; align-items: center; gap: 16px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 48px; width: 48px; height: 48px; border-radius: 14px; background: {{pw.tileBg}}; color: {{pw.tileFg}}; display: inline-flex; align-items: center; justify-content: center\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"13\" rx=\"2\"></rect><path d=\"M10 8.5v4l3.5-2z\"></path><path d=\"M8 21h8M12 17v4\"></path></svg>\n</span>\n<span style=\"flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px\">\n<span style=\"font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 21px; line-height: 1.2\">Show me what you've built</span>\n<span style=\"font-size: 14px; line-height: 1.4; color: {{pw.subFg}}\">Three AI tools, then the bigger projects</span>\n</span>\n<span aria-hidden=\"true\" style=\"flex: 0 0 auto; display: inline-flex; color: {{pw.arrowFg}}; transform: {{pw.turn}}; transition: transform 0.2s ease\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg>\n</span>\n</button>\n<button type=\"button\" class=\"path-row\" onClick=\"{{ps.pick}}\" onMouseEnter=\"{{ps.over}}\" onMouseLeave=\"{{hoverOut}}\" onFocus=\"{{ps.over}}\" onBlur=\"{{hoverOut}}\" aria-pressed=\"{{ps.pressed}}\" style=\"width: 100%; min-height: 84px; padding: 14px 16px; box-sizing: border-box; border-radius: 18px; border: 1px solid {{ps.border}}; background: {{ps.bg}}; color: {{ps.fg}}; font-family: inherit; text-align: left; cursor: pointer; display: flex; align-items: center; gap: 16px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 48px; width: 48px; height: 48px; border-radius: 14px; background: {{ps.tileBg}}; color: {{ps.tileFg}}; display: inline-flex; align-items: center; justify-content: center\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6.5C10 5 7 4.500 4 5v13c3-.5 6 0 8 1.500 2-1.500 5-2 8-1.500V5c-3-.5-6 0-8 1.500z\"></path><path d=\"M12 6.500v13\"></path></svg>\n</span>\n<span style=\"flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px\">\n<span style=\"font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 21px; line-height: 1.2\">Tell me your story</span>\n<span style=\"font-size: 14px; line-height: 1.4; color: {{ps.subFg}}\">From a law degree to AI product, in six chapters</span>\n</span>\n<span aria-hidden=\"true\" style=\"flex: 0 0 auto; display: inline-flex; color: {{ps.arrowFg}}; transform: {{ps.turn}}; transition: transform 0.2s ease\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg>\n</span>\n</button>\n<button type=\"button\" class=\"path-row\" onClick=\"{{pt.pick}}\" onMouseEnter=\"{{pt.over}}\" onMouseLeave=\"{{hoverOut}}\" onFocus=\"{{pt.over}}\" onBlur=\"{{hoverOut}}\" aria-pressed=\"{{pt.pressed}}\" style=\"width: 100%; min-height: 84px; padding: 14px 16px; box-sizing: border-box; border-radius: 18px; border: 1px solid {{pt.border}}; background: {{pt.bg}}; color: {{pt.fg}}; font-family: inherit; text-align: left; cursor: pointer; display: flex; align-items: center; gap: 16px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 48px; width: 48px; height: 48px; border-radius: 14px; background: {{pt.tileBg}}; color: {{pt.tileFg}}; display: inline-flex; align-items: center; justify-content: center\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.500 18h5M10.500 21h3\"></path><path d=\"M12 3a6 6 0 0 0-3.500 10.900c.600.500 1 1.200 1 2.100h5c0-.900.400-1.600 1-2.100A6 6 0 0 0 12 3z\"></path></svg>\n</span>\n<span style=\"flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px\">\n<span style=\"font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 21px; line-height: 1.2\">Test how I think</span>\n<span style=\"font-size: 14px; line-height: 1.4; color: {{pt.subFg}}\">Two quick activities: product and AI</span>\n</span>\n<span aria-hidden=\"true\" style=\"flex: 0 0 auto; display: inline-flex; color: {{pt.arrowFg}}; transform: {{pt.turn}}; transition: transform 0.2s ease\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg>\n</span>\n</button>\n</div>\n</div>\n\n</div>\n</section>\n\n<div ref=\"{{pathRef}}\"></div>\n\n<sc-if value=\"{{isShort}}\" hint-placeholder-val=\"{{false}}\">\n<section id=\"short\" style=\"background: #FCFCFC\">\n<div class=\"rv-stagger\" style=\"max-width: 1120px; margin: 0 auto; padding: 72px 24px; box-sizing: border-box; display: flex; flex-wrap: wrap; align-items: center; gap: 32px 56px\">\n<div class=\"rv\" style=\"flex: 0 0 auto; width: clamp(120px, 34cqw, 200px); height: clamp(120px, 34cqw, 200px); margin: 0 auto; box-sizing: border-box; border-radius: 50%; background: #E9ECF1; border: 6px solid #FFFFFF; box-shadow: 0 12px 32px rgba(23, 32, 58, 0.14); display: flex; align-items: center; justify-content: center; color: #5B6472; font-size: 14px\"><img src=\"images/profile-picture.jpeg\" alt=\"Shermaine Tan\" width=\"800\" height=\"800\" style=\"display: block; width: 100%; height: 100%; border-radius: 50%; object-fit: cover\"></div>\n<div class=\"rv\" style=\"flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; align-items: flex-start; gap: 16px\">\n<span style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 32px; padding: 0 14px; border-radius: 999px; background: #F1F3F6; font-size: 14px; font-weight: 500; color: #030711\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z\"></path><circle cx=\"12\" cy=\"10\" r=\"2.5\"></circle></svg>\nPuchong, Malaysia\n</span>\n<h2 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 38px; line-height: 1.15; letter-spacing: -0.01em\">The 60-second version</h2>\n<ul style=\"margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; font-size: 17px\">\n<li><b>Now:</b> product and project manager at Air Selangor, Malaysia's largest water utility. In the Data Science unit since 2026.</li>\n<li><b>AI at work:</b> managed a bilingual chatbot that is in production, led the business side of a computer vision proof of concept that passed its accuracy bar, and built a Copilot agent for handovers.</li>\n<li><b>AI in my own time:</b> three working tools, each with a demo video.</li>\n<li><b>Study:</b> Master's in Artificial Intelligence at the University of Southampton, in progress, on top of a law degree.</li>\n</ul>\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<a class=\"btn-pop btn-flip\" href=\"SHERMAINE_TAN_CV_designed.pdf\" download=\"Shermaine-Tan-CV-designed.pdf\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; background: #17203A; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 600\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 4v11\"></path><path d=\"M7 11l5 5 5-5\"></path><path d=\"M5 20h14\"></path></svg>\nDesigned CV\n</a>\n<a class=\"btn-pop\" href=\"SHERMAINE_TAN_CV.pdf\" download=\"Shermaine-Tan-CV.pdf\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; border: 1px solid #17203A; color: #17203A; text-decoration: none; font-size: 15px; font-weight: 600\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 4v11\"></path><path d=\"M7 11l5 5 5-5\"></path><path d=\"M5 20h14\"></path></svg>\nATS-friendly CV\n</a>\n<a class=\"btn-pop\" href=\"https://www.linkedin.com/in/shermaine-tan-497bbb156/\" target=\"_blank\" rel=\"noopener\" style=\"display: inline-flex; align-items: center; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; border: 1px solid #17203A; color: #17203A; text-decoration: none; font-size: 15px; font-weight: 600\">LinkedIn</a>\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{seeWork}}\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; border: 1px solid #17203A; background: transparent; color: #17203A; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polygon points=\"7 4 20 12 7 20 7 4\"></polygon></svg>\nWatch the demos\n</button>\n</div>\n</div>\n</div>\n</section>\n</sc-if>\n\n\n<sc-if value=\"{{isWork}}\" hint-placeholder-val=\"{{false}}\">\n<section id=\"builds\" style=\"background: #FCFCFC\">\n<div style=\"max-width: 1120px; margin: 0 auto; padding: 88px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 40px\">\n<div class=\"rv\" style=\"display: flex; flex-direction: column; gap: 10px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">Side projects</span>\n<div style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px\">\n<h2 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: clamp(40px, 11vw, 52px); line-height: 1.1; letter-spacing: -0.01em\"><span class=\"h-lead\">Things I built with </span><span style=\"white-space: nowrap\"><span class=\"h-mark\" style=\"margin-left: 0\">AI</span><span style=\"display: inline-block; width: 66px; margin-left: 3px; font-size: 0; line-height: 0; vertical-align: baseline\"><dc-import name=\"ChibiPose\" pose=\"lean\" hint-size=\"66px,62px\"></dc-import></span></span></h2>\n<p style=\"margin: 0; padding: 10px 16px; background: #17203A; color: #FFFFFF; border-radius: 18px 18px 18px 4px; font-size: 15px; line-height: 1.4; font-weight: 600\"><span class=\"sr-only\">{{sayBuilds.text}}</span><span aria-hidden=\"true\"><sc-for list=\"{{sayBuilds.chars}}\" as=\"ch\" hint-placeholder-count=\"24\"><span class=\"ty {{sayBuilds.k}}\" style=\"animation-delay: {{ch.d}}\">{{ch.c}}</span></sc-for></span></p>\n</div>\n<p style=\"margin: 0; max-width: 640px; font-size: 17px; color: #5B6472\">A short demo of each.</p>\n</div>\n<div class=\"rv-stagger\" style=\"display: flex; flex-wrap: wrap; align-items: stretch; gap: 24px\">\n\n<article class=\"rv card-pop\" style=\"flex: 1 1 300px; min-width: 0; background: #FFFFFF; border: 1px solid #E1E5EB; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column\">\n<video id=\"demo-gantt\" controls preload=\"none\" playsinline poster=\"images/demo-gantt.jpg\" aria-label=\"Demo of Requirement-to-Gantt Planner\" style=\"display: block; width: 100%; height: 190px; background: #17203A; object-fit: contain\"><source src=\"videos/requirement-to-gantt.mp4\" type=\"video/mp4\"></video>\n<div style=\"flex: 1 1 auto; padding: 24px; display: flex; flex-direction: column; gap: 12px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">AI planning and estimation</span>\n<h3 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 22px; line-height: 1.25\">Requirement-to-Gantt Planner</h3>\n<p style=\"margin: 0; font-size: 16px; color: #5B6472\">Describe a feature in one line and get clarifying questions, a phased task breakdown and a Gantt chart with the critical path highlighted.</p>\n<p style=\"margin: 0; font-size: 16px; font-weight: 600\">My takeaway: it asks a lot of questions and still can't cover everything, but it gets the first draft going.</p>\n<div style=\"margin-top: auto; padding-top: 8px; display: flex; flex-wrap: wrap; gap: 8px\">\n<a class=\"btn-pop\" href=\"videos/requirement-to-gantt.mp4\" data-play=\"demo-gantt\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; background: {{accent}}; color: #17203A; text-decoration: none; font-size: 15px; font-weight: 600\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polygon points=\"7 4 20 12 7 20 7 4\"></polygon></svg>\nWatch demo (1:32)\n</a>\n\n</div>\n</div>\n</article>\n\n<article class=\"rv card-pop\" style=\"flex: 1 1 300px; min-width: 0; background: #FFFFFF; border: 1px solid #E1E5EB; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column\">\n<video id=\"demo-evidence\" controls preload=\"none\" playsinline poster=\"images/demo-evidence.jpg\" aria-label=\"Demo of Feature Evidence Copilot\" style=\"display: block; width: 100%; height: 190px; background: #17203A; object-fit: contain\"><source src=\"videos/ai-backlog-review.mp4\" type=\"video/mp4\"></video>\n<div style=\"flex: 1 1 auto; padding: 24px; display: flex; flex-direction: column; gap: 12px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">Requirements intelligence</span>\n<h3 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 22px; line-height: 1.25\">Feature Evidence Copilot</h3>\n<p style=\"margin: 0; font-size: 16px; color: #5B6472\">Checks backlog items against requirement documents using Claude, so features get prioritised on traceable evidence instead of intuition.</p>\n<p style=\"margin: 0; font-size: 16px; font-weight: 600\">My takeaway: a quick ranking is only useful when the reasoning is there to check.</p>\n<div style=\"margin-top: auto; padding-top: 8px; display: flex; flex-wrap: wrap; gap: 8px\">\n<a class=\"btn-pop\" href=\"videos/ai-backlog-review.mp4\" data-play=\"demo-evidence\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; background: {{accent}}; color: #17203A; text-decoration: none; font-size: 15px; font-weight: 600\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polygon points=\"7 4 20 12 7 20 7 4\"></polygon></svg>\nWatch demo (0:25)\n</a>\n\n</div>\n</div>\n</article>\n\n<article class=\"rv card-pop\" style=\"flex: 1 1 300px; min-width: 0; background: #FFFFFF; border: 1px solid #E1E5EB; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column\">\n<video id=\"demo-loyalty\" controls preload=\"none\" playsinline poster=\"images/demo-loyalty.jpg\" aria-label=\"Demo of Loyalty Campaign Generator\" style=\"display: block; width: 100%; height: 190px; background: #17203A; object-fit: contain\"><source src=\"videos/joyrewards.mp4\" type=\"video/mp4\"></video>\n<div style=\"flex: 1 1 auto; padding: 24px; display: flex; flex-direction: column; gap: 12px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">Generative AI for marketing</span>\n<h3 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 22px; line-height: 1.25\">Loyalty Campaign Generator</h3>\n<p style=\"margin: 0; font-size: 16px; color: #5B6472\">Turns a campaign objective into a full loyalty campaign with Google Gemini: gamification mechanics, reward structures, bilingual content and influencer plans.</p>\n<p style=\"margin: 0; font-size: 16px; font-weight: 600\">My takeaway: I built it to learn how marketing managers work, and where AI could save them time.</p>\n<div style=\"margin-top: auto; padding-top: 8px; display: flex; flex-wrap: wrap; gap: 8px\">\n<a class=\"btn-pop\" href=\"videos/joyrewards.mp4\" data-play=\"demo-loyalty\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; background: {{accent}}; color: #17203A; text-decoration: none; font-size: 15px; font-weight: 600\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polygon points=\"7 4 20 12 7 20 7 4\"></polygon></svg>\nWatch demo (1:05)\n</a>\n\n</div>\n</div>\n</article>\n\n</div>\n</div>\n</section>\n\n<section id=\"cases\" ref=\"{{casesRef}}\" style=\"background: #F1F3F6\">\n<div style=\"max-width: 1120px; margin: 0 auto; padding: 88px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 28px\">\n<div class=\"rv\" style=\"display: flex; flex-direction: column; gap: 10px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">Selected work</span>\n<div style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px\">\n<h2 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 38px; line-height: 1.15; letter-spacing: -0.01em\">Case studies <span style=\"display: inline-block; width: 130px; margin-left: 6px; font-size: 0; line-height: 0; vertical-align: baseline\"><dc-import name=\"ChibiPose\" pose=\"lie\" hint-size=\"130px,59px\"></dc-import></span></h2>\n<p style=\"margin: 0; padding: 10px 16px; background: #17203A; color: #FFFFFF; border-radius: 18px 18px 18px 4px; font-size: 15px; line-height: 1.4; font-weight: 600\"><span class=\"sr-only\">{{sayCases.text}}</span><span aria-hidden=\"true\"><sc-for list=\"{{sayCases.chars}}\" as=\"ch\" hint-placeholder-count=\"24\"><span class=\"ty {{sayCases.k}}\" style=\"animation-delay: {{ch.d}}\">{{ch.c}}</span></sc-for></span></p>\n</div>\n<p id=\"filter-label\" style=\"margin: 0; max-width: 640px; font-size: 17px; color: #5B6472\">Three to start with. Use the filters to see the rest, then open any project for the problem, what I did and what I'd change. Listed by job, newest first.</p>\n</div>\n<div role=\"group\" aria-labelledby=\"filter-label\" style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<sc-for list=\"{{filters}}\" as=\"f\" hint-placeholder-count=\"5\">\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{f.pick}}\" aria-pressed=\"{{f.pressed}}\" style=\"min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid {{f.border}}; background: {{f.bg}}; color: {{f.fg}}; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">{{f.label}}</button>\n</sc-for>\n</div>\n<div class=\"rv-stagger\" style=\"display: flex; flex-direction: column; gap: 12px\">\n<sc-for list=\"{{cases}}\" as=\"c\" hint-placeholder-count=\"4\">\n<sc-if value=\"{{c.show}}\" hint-placeholder-val=\"{{true}}\">\n<article id=\"case-{{c.id}}\" class=\"rv case-row\" style=\"background: #FFFFFF; border: 1px solid #E1E5EB; border-radius: 16px; padding: {{c.pad}}; display: flex; flex-direction: column; gap: 20px\">\n<div class=\"case-head\" onClick=\"{{c.toggle}}\" style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 16px 24px\">\n<div class=\"case-img\" style=\"flex: 0 0 180px; width: 180px; height: 120px; box-sizing: border-box; border-radius: 10px; background: #F1F3F6; overflow: hidden\">\n<dc-import name=\"CaseArt\" art=\"{{c.id}}\" hint-size=\"180px,120px\"></dc-import>\n</div>\n<div style=\"flex: 1 1 280px; min-width: 0; display: flex; flex-direction: column; gap: 6px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">{{c.where}}</span>\n<h3 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 22px; line-height: 1.25\">{{c.title}}</h3>\n<p style=\"margin: 0; font-size: 16px; color: #5B6472\">{{c.hook}}</p>\n</div>\n<div style=\"flex: 0 1 250px; min-width: 0\">\n<p class=\"fact\" style=\"font-size: 16px; color: #17203A\"><b>{{c.stat}}</b>{{c.statRest}}</p>\n</div>\n<button class=\"btn-pop\" type=\"button\" aria-expanded=\"{{c.expanded}}\" style=\"flex: 0 0 auto; min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid #17203A; background: {{c.btnBg}}; color: {{c.btnFg}}; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">{{c.btnLabel}}</button>\n</div>\n<sc-if value=\"{{c.open}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"border-top: 1px solid #E1E5EB; padding-top: 20px; display: flex; flex-wrap: wrap; gap: 20px 24px\">\n<div style=\"flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 6px\">\n<span style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 8px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">The problem</span>\n<sc-if value=\"{{c.dProblem}}\" hint-placeholder-val=\"{{false}}\">\n<span style=\"padding: 1px 8px; border-radius: 999px; background: #FFE2A3; color: #17203A; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase\">Draft</span>\n</sc-if>\n</span>\n<sc-if value=\"{{c.p.isText}}\" hint-placeholder-val=\"{{true}}\">\n<p style=\"margin: 0; font-size: 16px\">{{c.p.text}}</p>\n</sc-if>\n<sc-if value=\"{{c.p.isList}}\" hint-placeholder-val=\"{{false}}\">\n<sc-if value=\"{{c.p.hasLead}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; font-size: 16px\">{{c.p.lead}}</p>\n</sc-if>\n<ul style=\"margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; font-size: 16px; line-height: 1.45\">\n<sc-for list=\"{{c.p.items}}\" as=\"it\" hint-placeholder-count=\"3\">\n<li>{{it.t}}</li>\n</sc-for>\n</ul>\n</sc-if>\n</div>\n<div style=\"flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 6px\">\n<span style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 8px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">What I did</span>\n<sc-if value=\"{{c.dDid}}\" hint-placeholder-val=\"{{false}}\">\n<span style=\"padding: 1px 8px; border-radius: 999px; background: #FFE2A3; color: #17203A; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase\">Draft</span>\n</sc-if>\n</span>\n<sc-if value=\"{{c.d.isText}}\" hint-placeholder-val=\"{{true}}\">\n<p style=\"margin: 0; font-size: 16px\">{{c.d.text}}</p>\n</sc-if>\n<sc-if value=\"{{c.d.isList}}\" hint-placeholder-val=\"{{false}}\">\n<sc-if value=\"{{c.d.hasLead}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; font-size: 16px\">{{c.d.lead}}</p>\n</sc-if>\n<ul style=\"margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; font-size: 16px; line-height: 1.45\">\n<sc-for list=\"{{c.d.items}}\" as=\"it\" hint-placeholder-count=\"3\">\n<li>{{it.t}}</li>\n</sc-for>\n</ul>\n</sc-if>\n</div>\n<div style=\"flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 6px\">\n<span style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 8px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">The result</span>\n<sc-if value=\"{{c.dResult}}\" hint-placeholder-val=\"{{false}}\">\n<span style=\"padding: 1px 8px; border-radius: 999px; background: #FFE2A3; color: #17203A; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase\">Draft</span>\n</sc-if>\n</span>\n<sc-if value=\"{{c.r.isText}}\" hint-placeholder-val=\"{{true}}\">\n<p style=\"margin: 0; font-size: 16px\">{{c.r.text}}</p>\n</sc-if>\n<sc-if value=\"{{c.r.isList}}\" hint-placeholder-val=\"{{false}}\">\n<sc-if value=\"{{c.r.hasLead}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; font-size: 16px\">{{c.r.lead}}</p>\n</sc-if>\n<ul style=\"margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; font-size: 16px; line-height: 1.45\">\n<sc-for list=\"{{c.r.items}}\" as=\"it\" hint-placeholder-count=\"3\">\n<li>{{it.t}}</li>\n</sc-for>\n</ul>\n</sc-if>\n<sc-if value=\"{{c.hasResultNote}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 2px 0 0; font-size: 13px; font-weight: 600; color: #17203A\">{{c.resultNote}}</p>\n</sc-if>\n<sc-if value=\"{{c.hasResultLinks}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"margin-top: 4px; display: flex; flex-direction: column; gap: 6px\">\n<span style=\"font-size: 13px; font-weight: 600; color: #5B6472\">{{c.resultLinksLabel}}</span>\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<sc-for list=\"{{c.resultLinks}}\" as=\"rl\" hint-placeholder-count=\"2\">\n<a class=\"btn-pop\" href=\"{{rl.url}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 0 14px; box-sizing: border-box; border-radius: 999px; border: 1px solid #17203A; color: #17203A; text-decoration: none; font-size: 14px; font-weight: 600\">\n<span>{{rl.label}}</span>\n<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 14px\"><path d=\"M7 17L17 7M9 7h8v8\"></path></svg>\n</a>\n</sc-for>\n</div>\n</div>\n</sc-if>\n</div>\n<div style=\"flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 6px\">\n<span style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 8px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">What I'd change</span>\n<sc-if value=\"{{c.dChange}}\" hint-placeholder-val=\"{{false}}\">\n<span style=\"padding: 1px 8px; border-radius: 999px; background: #FFE2A3; color: #17203A; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase\">Draft</span>\n</sc-if>\n</span>\n<sc-if value=\"{{c.g.isText}}\" hint-placeholder-val=\"{{true}}\">\n<p style=\"margin: 0; font-size: 16px\">{{c.g.text}}</p>\n</sc-if>\n<sc-if value=\"{{c.g.isList}}\" hint-placeholder-val=\"{{false}}\">\n<sc-if value=\"{{c.g.hasLead}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; font-size: 16px\">{{c.g.lead}}</p>\n</sc-if>\n<ul style=\"margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; font-size: 16px; line-height: 1.45\">\n<sc-for list=\"{{c.g.items}}\" as=\"it\" hint-placeholder-count=\"3\">\n<li>{{it.t}}</li>\n</sc-for>\n</ul>\n</sc-if>\n</div>\n</div>\n</sc-if>\n</article>\n</sc-if>\n</sc-for>\n</div>\n<sc-if value=\"{{showSeeAll}}\" hint-placeholder-val=\"{{true}}\">\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{seeAll}}\" style=\"align-self: flex-start; min-height: 44px; padding: 0 20px; border-radius: 999px; border: 1px solid #17203A; background: transparent; color: #17203A; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">See all {{caseTotal}} projects</button>\n</sc-if>\n</div>\n</section>\n</sc-if>\n\n<sc-if value=\"{{isThink}}\" hint-placeholder-val=\"{{false}}\">\n<section id=\"game\" style=\"background: #FCFCFC\">\n<div style=\"max-width: 1120px; margin: 0 auto; padding: 88px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 40px\">\n<div class=\"rv\" style=\"max-width: 680px; display: flex; flex-direction: column; gap: 10px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">Your turn</span>\n<h2 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 38px; line-height: 1.15; letter-spacing: -0.01em\">{{actTitle}}</h2>\n<p style=\"margin: 0; font-size: 17px; color: #5B6472\">{{actSub}}</p>\n<div role=\"group\" aria-label=\"Choose an activity\" style=\"margin-top: 10px; display: flex; flex-wrap: wrap; gap: 8px\">\n<sc-for list=\"{{actTabs}}\" as=\"t\" hint-placeholder-count=\"2\">\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{t.pick}}\" aria-pressed=\"{{t.pressed}}\" style=\"min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid {{t.border}}; background: {{t.bg}}; color: {{t.fg}}; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">{{t.label}}</button>\n</sc-for>\n</div>\n</div>\n<sc-if value=\"{{isProduct}}\" hint-placeholder-val=\"{{true}}\">\n<ol aria-label=\"Rounds\" style=\"margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; align-items: center; gap: 8px\">\n<sc-for list=\"{{rounds}}\" as=\"rd\" hint-placeholder-count=\"3\">\n<li class=\"step-li {{rd.cls}}\" aria-current=\"{{rd.current}}\" style=\"color: {{rd.fg}}; font-weight: {{rd.weight}}\">\n<span class=\"step-n\" style=\"background: {{rd.numBg}}; color: {{rd.numFg}}; border-color: {{rd.numBorder}}\">{{rd.n}}</span>\n<span>{{rd.label}}</span>\n</li>\n</sc-for>\n<sc-if value=\"{{canSkip}}\" hint-placeholder-val=\"{{true}}\">\n<li>\n<button type=\"button\" class=\"link-pop\" onClick=\"{{skipToStory}}\" style=\"min-height: 44px; padding: 0 8px; border: 0; background: transparent; color: #17203A; font-family: inherit; font-size: 14px; font-weight: 600; text-decoration: underline; text-underline-offset: 4px; cursor: pointer\">Skip to how I'd decide</button>\n</li>\n</sc-if>\n</ol>\n</sc-if>\n<div style=\"container-type: inline-size; display: flex; flex-wrap: {{rowWrap}}; align-items: {{rowAlign}}; gap: 24px\">\n\n<sc-if value=\"{{isProduct}}\" hint-placeholder-val=\"{{true}}\">\n<div id=\"sprint-box\" style=\"flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; gap: 10px\">\n<sc-if value=\"{{boardOpen}}\" hint-placeholder-val=\"{{true}}\">\n<div class=\"sprint-bar\" style=\"position: sticky; top: 8px; z-index: 2; align-items: center; gap: 12px; padding: 10px 14px; box-sizing: border-box; border-radius: 12px; background: #17203A; color: #FFFFFF\">\n<span aria-hidden=\"true\" style=\"flex: 1 1 auto; display: flex; gap: 5px\">\n<sc-for list=\"{{slots}}\" as=\"sl\" hint-placeholder-count=\"5\">\n<span style=\"flex: 1 1 0; height: 14px; border-radius: 5px; background: {{sl.bg}}; transition: background-color 0.2s ease\"></span>\n</sc-for>\n</span>\n<span style=\"flex: 0 0 auto; font-size: 14px; font-weight: 600\">{{sprintShort}}</span>\n</div>\n<ul aria-label=\"Requests\" style=\"margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px\">\n<sc-for list=\"{{reqs}}\" as=\"r\" hint-placeholder-count=\"5\">\n<li>\n<button type=\"button\" class=\"req-row {{r.shakeClass}}\" onClick=\"{{r.toggle}}\" aria-pressed=\"{{r.pressed}}\" style=\"width: 100%; min-height: 76px; padding: 12px 16px; box-sizing: border-box; border-radius: 14px; border: 2px solid {{r.border}}; background: {{r.bg}}; color: #030711; font-family: inherit; text-align: left; cursor: pointer; display: flex; align-items: center; gap: 14px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 28px; width: 28px; height: 28px; box-sizing: border-box; border-radius: 50%; border: 2px solid {{r.checkBorder}}; background: {{r.checkBg}}; color: #17203A; display: inline-flex; align-items: center; justify-content: center\">\n<span style=\"display: inline-flex; opacity: {{r.checkOpacity}}\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7.5\"></path></svg>\n</span>\n</span>\n<span style=\"flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; align-items: flex-start; gap: 2px\">\n<span style=\"font-size: 16px; font-weight: 600; line-height: 1.3\">{{r.title}}</span>\n<span style=\"font-size: 14px; line-height: 1.4; color: #5B6472\">{{r.hint}}</span>\n<sc-if value=\"{{r.hasTag}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"tag-in\" style=\"margin-top: 4px; padding: 3px 10px; border-radius: 999px; background: #FFE2A3; color: #17203A; font-size: 12px; font-weight: 700\">{{r.tag}}</span>\n</sc-if>\n</span>\n<span style=\"flex: 0 0 auto; display: flex; flex-direction: column; align-items: flex-end; gap: 5px\">\n<span aria-hidden=\"true\" style=\"display: flex; gap: 3px\">\n<sc-for list=\"{{r.blocks}}\" as=\"b\" hint-placeholder-count=\"2\">\n<span style=\"width: 12px; height: 12px; border-radius: 3px; background: {{b.bg}}\"></span>\n</sc-for>\n</span>\n<span style=\"font-size: 12px; font-weight: 600; color: #5B6472\">{{r.effort}}</span>\n</span>\n</button>\n</li>\n</sc-for>\n</ul>\n</sc-if>\n<sc-if value=\"{{storyOpen}}\" hint-placeholder-val=\"{{false}}\">\n<ol aria-label=\"How I'd decide, step by step\" style=\"margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px\">\n<sc-for list=\"{{storySteps}}\" as=\"st\" hint-placeholder-count=\"2\">\n<li class=\"story-step\" style=\"padding: 18px 20px; box-sizing: border-box; background: #FFFFFF; border: 1px solid #E1E5EB; border-radius: 16px; display: flex; flex-direction: column; gap: 12px\">\n<div style=\"display: flex; align-items: center; gap: 12px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 40px; width: 40px; height: 40px; border-radius: 50%; background: {{st.avatarBg}}; color: #17203A; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700\">\n<sc-if value=\"{{st.isMe}}\" hint-placeholder-val=\"{{true}}\">Me</sc-if>\n<sc-if value=\"{{st.isEng}}\" hint-placeholder-val=\"{{false}}\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 8l-4 4 4 4\"></path><path d=\"M16 8l4 4-4 4\"></path><path d=\"M13.5 6l-3 12\"></path></svg>\n</sc-if>\n<sc-if value=\"{{st.isSup}}\" hint-placeholder-val=\"{{false}}\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 14v-2a8 8 0 0 1 16 0v2\"></path><rect x=\"3\" y=\"13\" width=\"4\" height=\"6\" rx=\"1.5\"></rect><rect x=\"17\" y=\"13\" width=\"4\" height=\"6\" rx=\"1.5\"></rect></svg>\n</sc-if>\n<sc-if value=\"{{st.isMkt}}\" hint-placeholder-val=\"{{false}}\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 10v4h3l6 4V6l-6 4H4z\"></path><path d=\"M17 9a4 4 0 0 1 0 6\"></path></svg>\n</sc-if>\n</span>\n<span style=\"display: flex; flex-direction: column; gap: 2px\">\n<span style=\"font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">Step {{st.n}} of 4</span>\n<span style=\"font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 22px; line-height: 1.2\">{{st.label}}</span>\n</span>\n</div>\n<sc-if value=\"{{st.hasQuote}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; padding: 10px 14px; border-radius: 4px 14px 14px 14px; background: #F1F3F6; font-size: 15px; line-height: 1.45\">{{st.quote}}</p>\n</sc-if>\n<div aria-hidden=\"true\" style=\"display: flex; gap: 4px\">\n<sc-for list=\"{{st.segs}}\" as=\"sg\" hint-placeholder-count=\"3\">\n<span style=\"flex: {{sg.size}} 1 0; min-width: 0; height: 30px; border-radius: 8px; background: {{sg.bg}}; color: {{sg.fg}}; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; white-space: nowrap; overflow: hidden\">{{sg.name}}</span>\n</sc-for>\n</div>\n<p style=\"margin: 0; font-size: 13px; font-weight: 600; color: #5B6472\">{{st.change}}</p>\n<p style=\"margin: 0; font-size: 16px; line-height: 1.5\">{{st.think}}</p>\n</li>\n</sc-for>\n</ol>\n<sc-if value=\"{{storyMore}}\" hint-placeholder-val=\"{{true}}\">\n<button id=\"story-next\" class=\"btn-pop btn-flip\" type=\"button\" onClick=\"{{storyNext}}\" style=\"align-self: flex-start; margin-top: 4px; min-height: 48px; padding: 0 22px; border-radius: 999px; border: 0; background: #17203A; color: #FFFFFF; font-family: inherit; font-weight: 600; font-size: 15px; text-align: left; cursor: pointer; display: inline-flex; align-items: center; gap: 10px\">\n<span>{{storyNextLabel}}</span>\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 auto\"><path d=\"M5 12h14\"></path><path d=\"M13 6l6 6-6 6\"></path></svg>\n</button>\n</sc-if>\n<sc-if value=\"{{storyEnd}}\" hint-placeholder-val=\"{{false}}\">\n<h3 id=\"story-end\" style=\"margin: 14px 0 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 22px; line-height: 1.25\">{{storyEndTitle}}</h3>\n<ul id=\"story-end-list\" aria-label=\"{{storyEndTitle}}\" class=\"story-step\" style=\"margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px\">\n<sc-for list=\"{{reqResults}}\" as=\"r\" hint-placeholder-count=\"5\">\n<li style=\"padding: 12px 16px; box-sizing: border-box; background: #FFFFFF; border: 1px solid #E1E5EB; border-radius: 14px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 16px\">\n<span style=\"font-size: 16px; font-weight: 600; line-height: 1.3\">{{r.title}}</span>\n<span style=\"flex: 0 0 auto; display: flex; gap: 6px\">\n<sc-if value=\"{{r.hasYou}}\" hint-placeholder-val=\"{{true}}\">\n<span style=\"padding: 4px 12px; border-radius: 999px; border: 1px solid {{r.you.border}}; background: {{r.you.bg}}; color: {{r.you.fg}}; font-size: 13px; font-weight: 600\">{{r.youLabel}}</span>\n</sc-if>\n<span style=\"padding: 4px 12px; border-radius: 999px; border: 1px solid {{r.me.border}}; background: {{r.me.bg}}; color: {{r.me.fg}}; font-size: 13px; font-weight: 600\">{{r.meLabel}}</span>\n</span>\n</li>\n</sc-for>\n</ul>\n</sc-if>\n</sc-if>\n</div>\n</sc-if>\n\n<sc-if value=\"{{isAi}}\" hint-placeholder-val=\"{{false}}\">\n<div id=\"ai-box\" style=\"flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 10px\">\n<div class=\"ai-phone\" role=\"log\" aria-label=\"Chat between a customer and a shop's AI assistant\">\n<div class=\"ai-phone-top\"><span class=\"ai-av\" aria-hidden=\"true\">AI</span><span>Shop assistant</span></div>\n<div class=\"ai-phone-body\">\n<sc-for list=\"{{aiMsgs}}\" as=\"m\" hint-placeholder-count=\"3\">\n<div class=\"ai-msg {{m.cls}}\">\n<sc-if value=\"{{m.isAi}}\" hint-placeholder-val=\"{{true}}\"><span class=\"ai-av\" aria-hidden=\"true\">AI</span></sc-if>\n<span class=\"ai-bub\"><span>{{m.text}}</span>\n<sc-if value=\"{{m.flagged}}\" hint-placeholder-val=\"{{false}}\"><span class=\"ai-tag ai-tag-f\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.400\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 21V4\"></path><path d=\"M5 4h11l-2 4 2 4H5\"></path></svg><span>Flagged</span></span></sc-if>\n<sc-if value=\"{{m.fixed}}\" hint-placeholder-val=\"{{false}}\"><span class=\"ai-tag ai-tag-x\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5 9-10\"></path></svg><span>Fixed</span></span></sc-if>\n</span>\n</div>\n</sc-for>\n<sc-if value=\"{{aiDone}}\" hint-placeholder-val=\"{{false}}\"><span class=\"ai-stamp\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5 9-10\"></path></svg><span>{{aiStampLine}}</span></span></sc-if>\n</div>\n</div>\n</div>\n</sc-if>\n\n<div id=\"game-panel\" style=\"flex: 1 1 420px; min-width: 0; position: {{panelPos}}; top: {{panelTop}}; z-index: 0; padding-top: 96px; box-sizing: border-box\">\n<div style=\"position: absolute; top: 18px; right: 28px; z-index: 1; width: 84px; height: 102px\">\n<dc-import name=\"ChibiPose\" pose=\"{{gamePose}}\" hint-size=\"84px,102px\"></dc-import>\n</div>\n<p style=\"position: absolute; top: 6px; right: 124px; margin: 0; max-width: 270px; padding: 10px 16px; background: #17203A; color: #FFFFFF; border-radius: 18px 18px 4px 18px; font-size: 15px; line-height: 1.4; font-weight: 600\"><span class=\"sr-only\">{{sayGame.text}}</span><span aria-hidden=\"true\"><sc-for list=\"{{sayGame.chars}}\" as=\"ch\" hint-placeholder-count=\"24\"><span class=\"ty {{sayGame.k}}\" style=\"animation-delay: {{ch.d}}\">{{ch.c}}</span></sc-for></span></p>\n<div style=\"padding: 28px; box-sizing: border-box; background: #17203A; color: #FFFFFF; border-radius: 16px; display: flex; flex-direction: column; align-items: flex-start; gap: 16px\">\n<sc-if value=\"{{boardOpen}}\" hint-placeholder-val=\"{{true}}\">\n<h3 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 24px; line-height: 1.25\">{{panelTitle}}</h3>\n<div aria-hidden=\"true\" style=\"width: 100%; display: flex; gap: 6px\">\n<sc-for list=\"{{slots}}\" as=\"sl\" hint-placeholder-count=\"5\">\n<span style=\"flex: 1 1 0; height: 18px; border-radius: 6px; background: {{sl.bg}}; transition: background-color 0.2s ease\"></span>\n</sc-for>\n</div>\n<p style=\"margin: 0; font-size: 16px; color: #C3CBDB\">{{sprintStatus}}</p>\n</sc-if>\n<sc-if value=\"{{r1Open}}\" hint-placeholder-val=\"{{true}}\">\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{lockFirst}}\" disabled=\"{{lockDisabled}}\" style=\"min-height: 44px; padding: 0 20px; border-radius: 999px; border: 0; background: {{accent}}; color: #17203A; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer; opacity: {{lockOpacity}}\">Lock it in</button>\n</sc-if>\n<sc-if value=\"{{r2Open}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"width: 100%; display: flex; flex-direction: column; gap: 10px\">\n<sc-if value=\"{{m1}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"chat-in\" style=\"display: flex; align-items: flex-start; gap: 10px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 36px; width: 36px; height: 36px; border-radius: 50%; background: #DCE6F5; color: #17203A; display: inline-flex; align-items: center; justify-content: center\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 8l-4 4 4 4\"></path><path d=\"M16 8l4 4-4 4\"></path><path d=\"M13.5 6l-3 12\"></path></svg>\n</span>\n<div style=\"flex: 1 1 auto; min-width: 0; padding: 10px 14px; border-radius: 4px 14px 14px 14px; background: #222D4E; border: 1px solid #36426A; display: flex; flex-direction: column; gap: 2px\">\n<span style=\"font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #C3CBDB\">Engineering lead</span>\n<span style=\"font-size: 15px; line-height: 1.45\">Heads up. Photo reports need new storage, so it's 4 blocks, not 3.</span>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{m2}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"chat-in\" style=\"display: flex; align-items: flex-start; gap: 10px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 36px; width: 36px; height: 36px; border-radius: 50%; background: #F6D9CF; color: #17203A; display: inline-flex; align-items: center; justify-content: center\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 14v-2a8 8 0 0 1 16 0v2\"></path><rect x=\"3\" y=\"13\" width=\"4\" height=\"6\" rx=\"1.5\"></rect><rect x=\"17\" y=\"13\" width=\"4\" height=\"6\" rx=\"1.5\"></rect></svg>\n</span>\n<div style=\"flex: 1 1 auto; min-width: 0; padding: 10px 14px; border-radius: 4px 14px 14px 14px; background: #222D4E; border: 1px solid #36426A; display: flex; flex-direction: column; gap: 2px\">\n<span style=\"font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #C3CBDB\">Support lead</span>\n<span style=\"font-size: 15px; line-height: 1.45\">Half our calls are people asking if the service is down.</span>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{m3}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"chat-in\" style=\"display: flex; align-items: flex-start; gap: 10px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 36px; width: 36px; height: 36px; border-radius: 50%; background: #FFE2A3; color: #17203A; display: inline-flex; align-items: center; justify-content: center\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 10v4h3l6 4V6l-6 4H4z\"></path><path d=\"M17 9a4 4 0 0 1 0 6\"></path></svg>\n</span>\n<div style=\"flex: 1 1 auto; min-width: 0; padding: 10px 14px; border-radius: 4px 14px 14px 14px; background: #222D4E; border: 1px solid #36426A; display: flex; flex-direction: column; gap: 2px\">\n<span style=\"font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #C3CBDB\">Marketing lead</span>\n<span style=\"font-size: 15px; line-height: 1.45\">The campaign moved to next month. We need rewards in this sprint.</span>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{typing}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"chat-in\" role=\"status\" aria-label=\"Someone is typing\" style=\"display: flex; align-items: center; gap: 10px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 36px; width: 36px; height: 36px; border-radius: 50%; background: #36426A\"></span>\n<span aria-hidden=\"true\" style=\"display: inline-flex; align-items: center; gap: 5px; padding: 14px 16px; border-radius: 4px 14px 14px 14px; background: #222D4E; border: 1px solid #36426A\">\n<span class=\"typing-dot\" style=\"width: 7px; height: 7px; border-radius: 50%; background: #C3CBDB\"></span>\n<span class=\"typing-dot typing-dot-2\" style=\"width: 7px; height: 7px; border-radius: 50%; background: #C3CBDB\"></span>\n<span class=\"typing-dot typing-dot-3\" style=\"width: 7px; height: 7px; border-radius: 50%; background: #C3CBDB\"></span>\n</span>\n</div>\n</sc-if>\n</div>\n<button id=\"r2-next\" class=\"btn-pop\" type=\"button\" onClick=\"{{r2Next}}\" disabled=\"{{r2Disabled}}\" style=\"min-height: 44px; padding: 0 20px; border-radius: 999px; border: 0; background: {{accent}}; color: #17203A; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer; opacity: {{r2Opacity}}\">{{r2Label}}</button>\n</sc-if>\n<sc-if value=\"{{storyOpen}}\" hint-placeholder-val=\"{{false}}\">\n<h3 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 24px; line-height: 1.25\">{{storyTitle}}</h3>\n<p style=\"margin: 0; font-size: 16px; color: #C3CBDB\">{{storyStatus}}</p>\n<sc-if value=\"{{storyEnd}}\" hint-placeholder-val=\"{{false}}\">\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{reset}}\" style=\"min-height: 44px; padding: 0 20px; border-radius: 999px; border: 1px solid #FFFFFF; background: transparent; color: #FFFFFF; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">Play again</button>\n</sc-if>\n</sc-if>\n<sc-if value=\"{{isAi}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"ai-found\"><span>Checks found</span>\n<sc-for list=\"{{aiChecks}}\" as=\"c\" hint-placeholder-count=\"5\">\n<span class=\"ai-dot {{c.cls}}\" title=\"{{c.name}}\"><span class=\"ai-ic\" aria-hidden=\"true\"><dc-import name=\"CheckIcon\" kind=\"{{c.id}}\" hint-size=\"18px,18px\"></dc-import></span><span class=\"sr-only\">{{c.name}}</span></span>\n</sc-for>\n</div>\n</sc-if>\n<sc-if value=\"{{aiJudge}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"ai-eb\">{{aiLabel}}</span>\n<div class=\"ai-fact\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 17v4\"></path><path d=\"M8 3h8l-1 6 3 4H6l3-4z\"></path></svg><span><b>{{aiFact.k}}</b><span>{{aiFact.t}}</span></span></div>\n<div class=\"ai-bigs\" role=\"group\" aria-label=\"Your call on this message\">\n<button type=\"button\" class=\"ai-big\" onClick=\"{{aiFine}}\">Looks fine</button>\n<button type=\"button\" class=\"ai-big ai-big-flag\" onClick=\"{{aiFlag}}\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.400\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 21V4\"></path><path d=\"M5 4h11l-2 4 2 4H5\"></path></svg><span>Flag it</span></button>\n</div>\n</sc-if>\n<sc-if value=\"{{aiName}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"ai-eb\">Flagged. Which check was missing?</span>\n<div class=\"ai-cks\" role=\"group\" aria-label=\"Which check was missing?\">\n<sc-for list=\"{{aiCheckOpts}}\" as=\"o\" hint-placeholder-count=\"5\">\n<button type=\"button\" class=\"ai-ck\" onClick=\"{{o.pick}}\"><span class=\"ai-ic\" aria-hidden=\"true\"><dc-import name=\"CheckIcon\" kind=\"{{o.id}}\" hint-size=\"22px,22px\"></dc-import></span><span>{{o.name}}</span></button>\n</sc-for>\n</div>\n</sc-if>\n<sc-if value=\"{{aiRevealFlaw}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"ai-eb\">The missing check</span>\n<span class=\"ai-lit\"><span class=\"ai-ic\" aria-hidden=\"true\"><dc-import name=\"CheckIcon\" kind=\"{{aiLit.id}}\" hint-size=\"24px,24px\"></dc-import></span><span>{{aiLit.name}}</span></span>\n<p class=\"ai-flaw\">{{aiLit.flaw}}</p>\n<p class=\"ai-rule\">{{aiLit.rule}}</p>\n<p class=\"ai-you\">{{aiYouLine}}</p>\n</sc-if>\n<sc-if value=\"{{aiRevealFine}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"ai-eb\">Nothing missing</span>\n<p class=\"ai-rule\">This one is fine.</p>\n<p class=\"ai-you\">{{aiYouLine}}</p>\n</sc-if>\n<sc-if value=\"{{aiReveal}}\" hint-placeholder-val=\"{{false}}\">\n<button id=\"ai-next\" class=\"btn-pop\" type=\"button\" onClick=\"{{aiNext}}\" style=\"min-height: 48px; padding: 0 22px; border-radius: 999px; border: 0; background: {{accent}}; color: #17203A; font-family: inherit; font-weight: 600; font-size: 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 10px\"><span>{{aiNextLabel}}</span><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 auto\"><path d=\"M5 12h14\"></path><path d=\"M13 6l6 6-6 6\"></path></svg></button>\n</sc-if>\n<sc-if value=\"{{aiDone}}\" hint-placeholder-val=\"{{false}}\">\n<h3 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 24px; line-height: 1.25\">My launch checklist</h3>\n<ul class=\"ai-list\" aria-label=\"My five checks before an AI feature goes live\">\n<sc-for list=\"{{aiRules}}\" as=\"r\" hint-placeholder-count=\"5\">\n<li><span class=\"ai-dot on\"><span class=\"ai-ic\" aria-hidden=\"true\"><dc-import name=\"CheckIcon\" kind=\"{{r.id}}\" hint-size=\"18px,18px\"></dc-import></span></span><b>{{r.name}}</b><span>{{r.rule}}</span></li>\n</sc-for>\n</ul>\n<p style=\"margin: 0; font-size: 16px; line-height: 1.5; color: #FFFFFF\">AI is a tool to enhance people. The thinking behind it is still product management.</p>\n<p style=\"margin: 0; font-size: 13px; color: #C3CBDB\">[Draft wording. Change any message or rule that is not how you would put it.]</p>\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{aiSeeBuilds}}\" style=\"min-height: 44px; padding: 0 20px; border-radius: 999px; border: 0; background: {{accent}}; color: #17203A; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">See what I've built with AI</button>\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{aiReset}}\" style=\"min-height: 44px; padding: 0 20px; border-radius: 999px; border: 1px solid #FFFFFF; background: transparent; color: #FFFFFF; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">Play again</button>\n</div>\n</sc-if>\n</div>\n</div>\n\n</div>\n</div>\n</section>\n</sc-if>\n\n<sc-if value=\"{{isStory}}\" hint-placeholder-val=\"{{false}}\">\n<section id=\"journey\" style=\"background: #F1F3F6\">\n<div style=\"max-width: 1120px; margin: 0 auto; padding: 88px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 40px\">\n<div class=\"rv\" style=\"max-width: 640px; display: flex; flex-direction: column; gap: 10px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">My story</span>\n<h2 class=\"h-two\" style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: clamp(40px, 11vw, 52px); line-height: 1.1; letter-spacing: -0.01em\"><span class=\"h-lead\">From law to </span><span class=\"h-mark\">AI product</span></h2>\n<p id=\"journey-label\" style=\"margin: 0; font-size: 17px; color: #5B6472\">Six chapters. Walk through them one by one, or press play.</p>\n</div>\n<div id=\"journey-walk\" style=\"display: flex; flex-direction: column; gap: 20px\">\n<div style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px\">\n<button class=\"btn-pop btn-flip\" type=\"button\" onClick=\"{{journeyPlay}}\" style=\"min-height: 44px; padding: 0 20px; border-radius: 999px; border: 0; background: #17203A; color: #FFFFFF; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">{{journeyPlayLabel}}</button>\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{journeyPrev}}\" disabled=\"{{journeyPrevDisabled}}\" aria-label=\"Previous chapter\" style=\"width: 44px; height: 44px; padding: 0; border-radius: 50%; border: 1px solid #8A93A3; background: #FFFFFF; color: #17203A; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; opacity: {{journeyPrevOpacity}}\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 6l-6 6 6 6\"></path></svg>\n</button>\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{journeyNext}}\" disabled=\"{{journeyNextDisabled}}\" aria-label=\"Next chapter\" style=\"width: 44px; height: 44px; padding: 0; border-radius: 50%; border: 1px solid #8A93A3; background: #FFFFFF; color: #17203A; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; opacity: {{journeyNextOpacity}}\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\"></path></svg>\n</button>\n<span style=\"font-size: 14px; font-weight: 500; color: #5B6472\">Chapter {{journeyNumber}} of 6: {{stop.label}}</span>\n</div>\n<div id=\"journey-track\" role=\"group\" aria-labelledby=\"journey-label\" style=\"position: relative; height: 160px\">\n<div style=\"position: absolute; left: 6%; right: 6%; top: 106px; height: 4px; border-radius: 2px; background: #C9CFD9\"></div>\n<div style=\"position: absolute; left: 6%; top: 106px; height: 4px; border-radius: 2px; background: #17203A; width: {{journeyFill}}; transition: width 0.6s ease\"></div>\n<sc-for list=\"{{stops}}\" as=\"st\" hint-placeholder-count=\"6\">\n<button type=\"button\" class=\"stop-btn\" onClick=\"{{st.pick}}\" aria-pressed=\"{{st.pressed}}\" aria-label=\"{{st.aria}}\" style=\"position: absolute; top: 86px; left: {{st.left}}; width: 56px; margin-left: -28px; padding: 0; border: 0; background: transparent; cursor: pointer; font-family: inherit; display: flex; flex-direction: column; align-items: center; gap: 0\">\n<span style=\"position: relative; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center\"><span class=\"{{st.ringClass}}\" style=\"position: absolute; left: 50%; top: 50%; width: 18px; height: 18px; margin: -9px 0 0 -9px; border-radius: 50%; background: #17203A; opacity: {{st.ringOpacity}}\"></span><span class=\"stop-dot\" style=\"position: relative; display: block; width: {{st.dot}}; height: {{st.dot}}; box-sizing: border-box; border-radius: {{st.dotRadius}}; background: {{st.dotBg}}; border: 3px solid #17203A; box-shadow: 0 0 0 4px rgba(23, 32, 58, 0.12)\"></span></span>\n<span style=\"padding: 2px 10px; border-radius: 999px; border: 1px solid {{st.chipBorder}}; background: {{st.chipBg}}; color: {{st.chipFg}}; font-size: 12px; font-weight: 600; line-height: 1.5\">{{st.year}}</span>\n</button>\n</sc-for>\n<div style=\"position: absolute; top: 8px; left: {{journeyChibiLeft}}; width: 84px; height: 102px; transition: left 0.6s ease; pointer-events: none\">\n<dc-import name=\"ChibiPose\" pose=\"{{journeyPose}}\" hint-size=\"84px,102px\"></dc-import>\n</div>\n</div>\n<p style=\"margin: 0; font-size: 13px; line-height: 1.5; color: #5B6472\"><span style=\"font-weight: 600; color: #17203A\">Pick any year to jump there.</span> Round chapters are jobs, square chapters are study.</p>\n<div id=\"journey-card\" style=\"background: #FFFFFF; border: 1px solid #E1E5EB; border-radius: 16px; padding: 28px; box-sizing: border-box; overflow: hidden; display: flex; flex-wrap: wrap; align-items: flex-start; gap: 16px 32px\">\n<div class=\"{{chClass}}\" style=\"flex: 0 0 auto; display: flex; flex-direction: column; gap: 4px\">\n<span style=\"font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 44px; line-height: 1\">{{stop.number}}</span>\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">{{stop.years}}</span>\n<span style=\"align-self: flex-start; margin-top: 6px; padding: 2px 10px; border-radius: 999px; background: #F1F3F6; color: #030711; font-size: 12px; font-weight: 600\">{{stop.kind}}</span>\n</div>\n<div class=\"{{chClass}}\" style=\"flex: 1 1 320px; min-width: 0; display: flex; flex-direction: column; align-items: flex-start; gap: 12px\">\n<h3 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 30px; line-height: 1.2; letter-spacing: -0.01em\">{{stop.hook}}</h3>\n<p style=\"margin: 0; font-size: 15px; font-weight: 600; color: #5B6472\">{{stop.role}}</p>\n<p style=\"margin: 0; max-width: 760px; font-size: 16px\">{{stop.detail}}</p>\n<sc-if value=\"{{stop.hasProjects}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 8px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">From this chapter</span>\n<sc-for list=\"{{stop.projects}}\" as=\"pr\" hint-placeholder-count=\"3\">\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{pr.go}}\" style=\"min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid #8A93A3; background: #FFFFFF; color: #17203A; font-family: inherit; font-weight: 600; font-size: 14px; cursor: pointer\">{{pr.label}}</button>\n</sc-for>\n</div>\n</sc-if>\n<sc-if value=\"{{stop.hasNext}}\" hint-placeholder-val=\"{{true}}\">\n<button class=\"btn-pop btn-flip\" type=\"button\" onClick=\"{{journeyNext}}\" style=\"margin-top: 4px; min-height: 48px; padding: 0 22px; border-radius: 999px; border: 0; background: #17203A; color: #FFFFFF; font-family: inherit; font-weight: 600; font-size: 15px; text-align: left; cursor: pointer; display: inline-flex; align-items: center; gap: 10px\">\n<span>{{stop.nextLabel}}</span>\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 auto\"><path d=\"M5 12h14\"></path><path d=\"M13 6l6 6-6 6\"></path></svg>\n</button>\n</sc-if>\n</div>\n</div>\n</div>\n</div>\n</section>\n</sc-if>\n\n<sc-if value=\"{{showFeatured}}\" hint-placeholder-val=\"{{true}}\">\n<section id=\"featured\" aria-label=\"Featured work\" style=\"background: #FCFCFC\">\n<div class=\"feat-wrap\" style=\"max-width: 1120px; margin: 0 auto; padding: 8px 24px 80px; box-sizing: border-box; display: flex; flex-direction: column; gap: 24px\">\n<div class=\"rv\" style=\"display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 8px 24px\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">Featured work</span>\n<h2 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 32px; line-height: 1.2; letter-spacing: -0.01em\">Three projects to start with</h2>\n</div>\n<button type=\"button\" class=\"link-pop\" onClick=\"{{seeWork}}\" style=\"min-height: 44px; padding: 0; border: 0; background: transparent; color: #17203A; font-family: inherit; font-size: 15px; font-weight: 600; text-decoration: underline; text-underline-offset: 4px; cursor: pointer\">See all {{caseTotal}} projects and my AI builds</button>\n</div>\n<div class=\"rv-stagger\" style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: 16px\">\n<sc-for list=\"{{featured}}\" as=\"f\" hint-placeholder-count=\"3\">\n<button type=\"button\" class=\"rv card-pop feat-card\" onClick=\"{{f.go}}\" style=\"padding: 0; box-sizing: border-box; border: 1px solid #E1E5EB; border-radius: 16px; background: #FFFFFF; color: #030711; font-family: inherit; text-align: left; cursor: pointer; overflow: hidden\">\n<span class=\"feat-art\" aria-hidden=\"true\" style=\"background: #F1F3F6\"><span class=\"feat-art-in\"><dc-import name=\"CaseArt\" art=\"{{f.id}}\" hint-size=\"180px,120px\"></dc-import></span></span>\n<span class=\"feat-body\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">{{f.where}}</span>\n<span style=\"font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 20px; line-height: 1.25\">{{f.title}}</span>\n<span class=\"fact\" style=\"margin-top: 4px\"><b>{{f.stat}}</b>{{f.statRest}}</span>\n<span style=\"margin-top: auto; padding-top: 8px; display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; color: #17203A\">Open case study\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 16px\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg>\n</span>\n</span>\n</button>\n</sc-for>\n</div>\n</div>\n</section>\n</sc-if>\n\n<section aria-label=\"Where next\" style=\"background: #FCFCFC\">\n<div style=\"max-width: 1120px; margin: 0 auto; padding: 118px 24px 72px; box-sizing: border-box\">\n<div class=\"rv\" style=\"position: relative; padding: 28px; box-sizing: border-box; border-radius: 20px; background: #17203A; color: #FFFFFF; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 18px 32px\">\n<div class=\"chibi-hop\" style=\"position: absolute; top: -78px; right: 28px; width: 84px; height: 102px\">\n<dc-import name=\"ChibiPose\" pose=\"wave\" hint-size=\"84px,102px\"></dc-import>\n</div>\n<div style=\"flex: 1 1 320px; min-width: 0; display: flex; flex-direction: column; gap: 6px\">\n<h2 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 26px; line-height: 1.25\"><span class=\"sr-only\">{{sayNext.text}}</span><span aria-hidden=\"true\"><sc-for list=\"{{sayNext.chars}}\" as=\"ch\" hint-placeholder-count=\"24\"><span class=\"ty {{sayNext.k}}\" style=\"animation-delay: {{ch.d}}\">{{ch.c}}</span></sc-for></span></h2>\n<p style=\"margin: 0; font-size: 16px; color: #C3CBDB; text-wrap: balance\">{{next.sub}}</p>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<sc-for list=\"{{next.options}}\" as=\"o\" hint-placeholder-count=\"2\">\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{o.pick}}\" style=\"min-height: 44px; padding: 0 20px; border-radius: 999px; border: 1px solid {{o.border}}; background: {{o.bg}}; color: {{o.fg}}; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">{{o.label}}</button>\n</sc-for>\n</div>\n</div>\n</div>\n</section>\n\n<section class=\"nums-wrap\" aria-label=\"In numbers\" ref=\"{{stripRef}}\" style=\"background: #17203A; color: #FFFFFF\">\n<div class=\"rv-stagger nums\">\n<div class=\"rv\"><span class=\"nums-n\" style=\"color: {{accent}}\">{{n1}}</span><span class=\"nums-l\">years in product and project delivery</span></div>\n<div class=\"rv\"><span class=\"nums-n\" style=\"color: {{accent}}\">{{n2}}</span><span class=\"nums-l\">industries, from telco and TV to water and e-commerce</span></div>\n<div class=\"rv\"><span class=\"nums-n\" style=\"color: {{accent}}\">{{n3}}</span><span class=\"nums-l\">AI tools built in my own time</span></div>\n<div class=\"rv\"><span class=\"nums-n\" style=\"color: {{accent}}\">{{n4}}</span><span class=\"nums-l\">Gold awards for brand experience</span></div>\n</div>\n</section>\n\n<section id=\"sheet\" aria-label=\"Character sheet\" style=\"background: #F1F3F6\">\n<div style=\"max-width: 1120px; margin: 0 auto; padding: 88px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 28px\">\n<div class=\"rv\" style=\"max-width: 640px; display: flex; flex-direction: column; gap: 10px\">\n<span style=\"font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472\">Character sheet</span>\n<h2 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 38px; line-height: 1.15; letter-spacing: -0.01em\">Skills, training and awards</h2>\n<p style=\"margin: 0; font-size: 17px; color: #5B6472\">Pick a tab, like a game menu.</p>\n</div>\n\n<div class=\"rv\" style=\"padding: 14px; box-sizing: border-box; border-radius: 24px; background: #17203A; color: #FFFFFF; display: flex; flex-wrap: wrap; align-items: stretch; gap: 14px\">\n\n<div style=\"flex: 1 1 260px; min-width: 0; box-sizing: border-box; padding: 18px; border-radius: 16px; background: #222D4E; border: 1px solid #36426A; display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center\">\n<div style=\"width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 8px\">\n<span class=\"hud\" style=\"font-size: 12px; color: #C3CBDB\">Player 1</span>\n<span class=\"hud lv-pop\" style=\"display: inline-block; padding: 4px 10px; border-radius: 8px; background: {{accent}}; color: #17203A; font-size: 13px; font-weight: 700\">Lv 8</span>\n</div>\n<div style=\"position: relative; width: 170px; height: 192px\">\n<div aria-hidden=\"true\" style=\"position: absolute; left: 17px; top: 0; width: 136px; height: 136px; border-radius: 50%; background: #DCE6F5\"></div>\n<div aria-hidden=\"true\" style=\"position: absolute; left: 28px; top: 133px; width: 114px; height: 54px; box-sizing: border-box; border-radius: 12px; background: #36426A; border-top: 4px solid {{accent}}\"></div>\n<div class=\"chibi-hop\" style=\"position: absolute; z-index: 1; left: 20px; top: 12px; width: 130px; height: 158px\">\n<dc-import name=\"ChibiPose\" pose=\"{{sheetPose}}\" hint-size=\"130px,158px\"></dc-import>\n</div>\n</div>\n<span style=\"font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 24px; line-height: 1.2\">Shermaine Tan</span>\n<span style=\"font-size: 14px; color: #C3CBDB\">Product manager, AI products</span>\n<div class=\"rv xp-row\" style=\"width: 100%; display: flex; flex-direction: column; gap: 6px\">\n<div class=\"hud\" style=\"display: flex; justify-content: space-between; gap: 8px; font-size: 12px; color: #C3CBDB\"><span>Experience</span><span>8 years</span></div>\n<div aria-hidden=\"true\" style=\"display: flex; gap: 4px\">\n<sc-for list=\"{{xpSegs}}\" as=\"xp\" hint-placeholder-count=\"8\">\n<span class=\"xp-seg\" style=\"flex: 1 1 0; height: 12px; border-radius: 4px; background: {{accent}}\"></span>\n</sc-for>\n</div>\n<span style=\"font-size: 13px; color: #C3CBDB\">One level per year in product and project delivery</span>\n</div>\n<p style=\"margin: 2px 0 0; width: 100%; box-sizing: border-box; padding: 10px 12px; border-radius: 12px; background: #17203A; border: 1px solid #36426A; font-size: 14px; line-height: 1.4; font-weight: 600\"><span class=\"sr-only\">{{saySheet.text}}</span><span aria-hidden=\"true\"><sc-for list=\"{{saySheet.chars}}\" as=\"ch\" hint-placeholder-count=\"24\"><span class=\"ty {{saySheet.k}}\" style=\"animation-delay: {{ch.d}}\">{{ch.c}}</span></sc-for></span></p>\n</div>\n\n<div style=\"flex: 999 1 480px; min-width: 0; display: flex; flex-direction: column; gap: 12px\">\n<div role=\"group\" aria-label=\"Character sheet sections\" style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<sc-for list=\"{{sheetTabs}}\" as=\"t\" hint-placeholder-count=\"6\">\n<button type=\"button\" class=\"sheet-tab\" onClick=\"{{t.pick}}\" aria-pressed=\"{{t.pressed}}\" style=\"min-height: 44px; padding: 0 16px 0 12px; border-radius: 10px; border: 1px solid {{t.border}}; background: {{t.bg}}; color: {{t.fg}}; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px\">\n<span aria-hidden=\"true\" style=\"display: inline-flex; opacity: {{t.cursor}}\">\n<svg width=\"10\" height=\"12\" viewBox=\"0 0 10 12\" fill=\"currentColor\"><path d=\"M0 0l10 6-10 6z\"></path></svg>\n</span>\n<span>{{t.label}}</span>\n</button>\n</sc-for>\n</div>\n\n<div style=\"flex: 1 1 auto; min-height: 360px; box-sizing: border-box; padding: 20px; border-radius: 16px; background: #222D4E; border: 1px solid #36426A; display: flex; flex-direction: column; gap: 18px\">\n\n<sc-if value=\"{{sheetIsSkills}}\" hint-placeholder-val=\"{{true}}\">\n<sc-for list=\"{{skillGroups}}\" as=\"g\" hint-placeholder-count=\"3\">\n<div class=\"sheet-in\" style=\"display: flex; flex-direction: column; gap: 10px\">\n<span class=\"hud\" style=\"font-size: 12px; color: {{accent}}\">{{g.label}}</span>\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<sc-for list=\"{{g.items}}\" as=\"it\" hint-placeholder-count=\"6\">\n<span class=\"slot-hi\" style=\"padding: 7px 12px; border-radius: 999px; background: #17203A; border: 1px solid #36426A; font-size: 14px; font-weight: 500\">{{it.t}}</span>\n</sc-for>\n</div>\n</div>\n</sc-for>\n<sc-if value=\"{{skillsMore}}\" hint-placeholder-val=\"{{false}}\">\n<button type=\"button\" class=\"btn-pop\" onClick=\"{{showSkills}}\" style=\"align-self: flex-start; min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid #FFFFFF; background: transparent; color: #FFFFFF; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">Show all {{skillCount}} skills</button>\n</sc-if>\n</sc-if>\n\n<sc-if value=\"{{sheetIsTools}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"hud\" style=\"font-size: 12px; color: {{accent}}\">Equipped: 16 tools</span>\n<div class=\"sheet-in\" style=\"display: grid; grid-template-columns: repeat(auto-fill, minmax(min(132px, 100%), 1fr)); gap: 8px\">\n<sc-for list=\"{{toolSlots}}\" as=\"tl\" hint-placeholder-count=\"8\">\n<div class=\"slot-hi\" style=\"min-height: 66px; padding: 10px 12px; box-sizing: border-box; border-radius: 12px; background: #17203A; border: 1px solid #36426A; display: flex; flex-direction: column; justify-content: space-between; gap: 6px\">\n<span class=\"hud\" style=\"font-size: 12px; color: #C3CBDB\">{{tl.kind}}</span>\n<span style=\"font-size: 15px; font-weight: 600; line-height: 1.25\">{{tl.name}}</span>\n</div>\n</sc-for>\n</div>\n</sc-if>\n\n<sc-if value=\"{{sheetIsLang}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"hud\" style=\"font-size: 12px; color: {{accent}}\">Languages spoken</span>\n<div class=\"sheet-in\" style=\"max-width: 560px; display: flex; flex-direction: column; gap: 18px\">\n<sc-for list=\"{{langs}}\" as=\"lg\" hint-placeholder-count=\"3\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<div style=\"display: flex; align-items: baseline; justify-content: space-between; gap: 12px\">\n<span style=\"font-size: 18px; font-weight: 600\">{{lg.name}}</span>\n<span style=\"font-size: 14px; color: #C3CBDB\">{{lg.level}}</span>\n</div>\n<span aria-hidden=\"true\" style=\"display: flex; gap: 5px\">\n<sc-for list=\"{{lg.segs}}\" as=\"sg\" hint-placeholder-count=\"3\">\n<span class=\"lang-seg\" style=\"flex: 1 1 0; height: 14px; border-radius: 5px; background: {{sg.bg}}\"></span>\n</sc-for>\n</span>\n</div>\n</sc-for>\n</div>\n</sc-if>\n\n<sc-if value=\"{{sheetIsEdu}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"sheet-in\" style=\"padding: 16px; box-sizing: border-box; border-radius: 14px; background: #17203A; border: 1px solid {{accent}}; display: flex; flex-direction: column; gap: 6px\">\n<span class=\"hud\" style=\"font-size: 12px; color: {{accent}}\">Active quest, 2025 to now</span>\n<span style=\"font-size: 19px; font-weight: 600; line-height: 1.3\">Master's in Artificial Intelligence (Digital Transformation)</span>\n<span style=\"font-size: 14px; color: #C3CBDB\">University of Southampton, UK</span>\n<div style=\"margin-top: 6px; display: flex; flex-wrap: wrap; gap: 6px\">\n<span style=\"padding: 5px 10px; border-radius: 999px; border: 1px solid #36426A; font-size: 13px\">Responsible AI and governance</span>\n<span style=\"padding: 5px 10px; border-radius: 999px; border: 1px solid #36426A; font-size: 13px\">Machine learning</span>\n<span style=\"padding: 5px 10px; border-radius: 999px; border: 1px solid #36426A; font-size: 13px\">Generative AI and LLMs</span>\n<span style=\"padding: 5px 10px; border-radius: 999px; border: 1px solid #36426A; font-size: 13px\">AI deployment and monitoring</span>\n</div>\n</div>\n<span class=\"hud\" style=\"font-size: 12px; color: #C3CBDB\">Quests completed</span>\n<ul class=\"sheet-in\" style=\"margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px\">\n<sc-for list=\"{{eduDone}}\" as=\"ed\" hint-placeholder-count=\"3\">\n<li style=\"display: flex; align-items: flex-start; gap: 12px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 24px; width: 24px; height: 24px; margin-top: 1px; border-radius: 50%; background: {{accent}}; color: #17203A; display: inline-flex; align-items: center; justify-content: center\">\n<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7.5\"></path></svg>\n</span>\n<span style=\"display: flex; flex-direction: column; gap: 2px\">\n<span style=\"font-size: 16px; font-weight: 600; line-height: 1.3\">{{ed.title}}</span>\n<span style=\"font-size: 14px; color: #C3CBDB\">{{ed.sub}}</span>\n</span>\n</li>\n</sc-for>\n</ul>\n</sc-if>\n\n<sc-if value=\"{{sheetIsCert}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"hud\" style=\"font-size: 12px; color: {{accent}}\">Achievements unlocked: 9</span>\n<div class=\"sheet-in\" style=\"display: grid; grid-template-columns: repeat(auto-fill, minmax(min(210px, 100%), 1fr)); gap: 8px\">\n<sc-for list=\"{{certs}}\" as=\"ct\" hint-placeholder-count=\"6\">\n<div class=\"slot-hi cert-tile\" style=\"padding: 12px; box-sizing: border-box; border-radius: 12px; background: #17203A; border: 1px solid {{ct.border}}; display: flex; align-items: flex-start; gap: 10px\">\n<span aria-hidden=\"true\" class=\"cert-star\" style=\"flex: 0 0 28px; width: 28px; height: 28px; border-radius: 50%; background: {{ct.starBg}}; color: {{ct.starFg}}; display: inline-flex; align-items: center; justify-content: center\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.300 9.300l6.100-.7z\"></path></svg>\n</span>\n<span style=\"min-width: 0; display: flex; flex-direction: column; gap: 2px\">\n<span style=\"font-size: 14px; font-weight: 600; line-height: 1.3; color: {{ct.nameFg}}\">{{ct.name}}</span>\n<span style=\"font-size: 12px; color: #C3CBDB\">{{ct.by}}</span>\n</span>\n</div>\n</sc-for>\n</div>\n</sc-if>\n\n<sc-if value=\"{{sheetIsAwards}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"hud\" style=\"font-size: 12px; color: {{accent}}\">Trophies: 2 gold</span>\n<div class=\"sheet-in\" style=\"display: grid; grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr)); gap: 10px\">\n<sc-for list=\"{{awards}}\" as=\"aw\" hint-placeholder-count=\"2\">\n<div class=\"slot-hi\" style=\"padding: 16px; box-sizing: border-box; border-radius: 14px; background: #17203A; border: 1px solid #36426A; display: flex; flex-direction: column; align-items: flex-start; gap: 8px\">\n<span style=\"display: flex; align-items: center; gap: 10px\">\n<span aria-hidden=\"true\" style=\"flex: 0 0 40px; width: 40px; height: 40px; border-radius: 50%; background: {{accent}}; color: #17203A; display: inline-flex; align-items: center; justify-content: center\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 4h8v5a4 4 0 0 1-8 0z\"></path><path d=\"M8 5.500H5.500a2.500 2.500 0 0 0 2.700 3.500\"></path><path d=\"M16 5.500h2.500a2.500 2.500 0 0 1-2.700 3.500\"></path><path d=\"M12 13v4M9 20h6M10 17h4\"></path></svg>\n</span>\n<span class=\"hud\" style=\"font-size: 12px; color: {{accent}}\">{{aw.level}}</span>\n</span>\n<span style=\"font-size: 16px; font-weight: 600; line-height: 1.3\">{{aw.cat}}</span>\n<span style=\"font-size: 13px; line-height: 1.4; color: #C3CBDB\">{{aw.work}}</span>\n<a class=\"btn-pop\" href=\"{{aw.url}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"margin-top: 4px; display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 0 14px; box-sizing: border-box; border-radius: 999px; border: 1px solid #8A93A3; color: #FFFFFF; text-decoration: none; font-size: 14px; font-weight: 600\">\n<span>View the winning entry</span>\n<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 14px\"><path d=\"M7 17L17 7M9 7h8v8\"></path></svg>\n</a>\n</div>\n</sc-for>\n</div>\n<p class=\"sheet-in\" style=\"margin: 0; max-width: 620px; font-size: 14px; line-height: 1.5; color: #C3CBDB\">One festival, two categories. MinistryXR built it and I managed the project. Awarded to the campaign team at Malaysia's national advertising awards.</p>\n<button type=\"button\" class=\"btn-pop\" onClick=\"{{awardGo}}\" style=\"align-self: flex-start; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid #8A93A3; background: transparent; color: #FFFFFF; font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px\">\n<span>See the project</span>\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 16px\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg>\n</button>\n</sc-if>\n\n</div>\n</div>\n</div>\n</div>\n</section>\n\n<section id=\"contact\" style=\"flex: 1 0 auto; background: #17203A; color: #FFFFFF\">\n<div style=\"max-width: 1120px; margin: 0 auto; padding: 88px 24px 40px; box-sizing: border-box; display: flex; flex-direction: column; gap: 28px\">\n<div class=\"rv\" style=\"max-width: 640px; display: flex; flex-direction: column; gap: 10px\">\n<h2 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 38px; line-height: 1.15; letter-spacing: -0.01em\">Ask me something</h2>\n<p id=\"ask-label\" style=\"margin: 0; font-size: 17px; color: #C3CBDB\">Pick a question. The answers are mine, not a chatbot's.</p>\n</div>\n<div class=\"rv\" role=\"group\" aria-labelledby=\"ask-label\" style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<sc-for list=\"{{asks}}\" as=\"a\" hint-placeholder-count=\"5\">\n<button class=\"btn-pop\" type=\"button\" onClick=\"{{a.pick}}\" aria-pressed=\"{{a.pressed}}\" style=\"min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid {{a.border}}; background: {{a.bg}}; color: {{a.fg}}; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer\">{{a.q}}</button>\n</sc-for>\n</div>\n<div class=\"rv\" style=\"position: relative; margin-top: 88px; background: #1F2A4A; border: 1px solid #36426A; border-radius: 16px; padding: 40px 24px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px\">\n<div class=\"chibi-hop\" style=\"position: absolute; top: -102px; right: 28px; width: 110px; height: 134px\">\n<dc-import name=\"ChibiPose\" pose=\"{{ask.pose}}\" hint-size=\"110px,134px\"></dc-import>\n</div>\n<span class=\"hud\" style=\"position: absolute; top: -13px; left: 24px; padding: 4px 10px; border-radius: 8px; background: {{accent}}; color: #17203A; font-size: 12px; font-weight: 700\">Shermaine</span>\n<h3 style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 20px; line-height: 1.3\">{{ask.q}}</h3>\n<p style=\"margin: 0; max-width: 760px; font-size: 16px; color: #C3CBDB\"><span class=\"sr-only\">{{sayAsk.text}}</span><span aria-hidden=\"true\"><sc-for list=\"{{sayAsk.chars}}\" as=\"ch\" hint-placeholder-count=\"24\"><span class=\"ty {{sayAsk.k}}\" style=\"animation-delay: {{ch.d}}\">{{ch.c}}</span></sc-for></span></p>\n</div>\n<div id=\"closing\" style=\"margin-top: 44px; padding-top: 44px; border-top: 1px solid #36426A; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px\">\n<div style=\"flex: 1 1 360px; min-width: 0; display: flex; flex-direction: column; gap: 8px\">\n<h2 class=\"h-two\" style=\"margin: 0; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: clamp(34px, 9.5vw, 44px); line-height: 1.12; letter-spacing: -0.01em\"><span class=\"h-lead\">Let's build </span><span style=\"color: {{accent}}\">something great.</span></h2>\n<p style=\"margin: 0; font-size: 16px; color: #C3CBDB\">The best way to reach me is by email or LinkedIn.</p>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<a class=\"btn-pop\" href=\"mailto:sm.shermainetan@gmail.com?subject=Portfolio%20Inquiry\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; background: {{accent}}; color: #17203A; text-decoration: none; font-size: 15px; font-weight: 600\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"></rect><path d=\"M3 7l9 6 9-6\"></path></svg>\nEmail me\n</a>\n<a class=\"btn-pop\" href=\"https://www.linkedin.com/in/shermaine-tan-497bbb156/\" target=\"_blank\" rel=\"noopener\" style=\"display: inline-flex; align-items: center; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; border: 1px solid #FFFFFF; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 600\">LinkedIn</a>\n<a class=\"btn-pop\" href=\"SHERMAINE_TAN_CV_designed.pdf\" download=\"Shermaine-Tan-CV-designed.pdf\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; border: 1px solid #FFFFFF; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 600\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 4v11\"></path><path d=\"M7 11l5 5 5-5\"></path><path d=\"M5 20h14\"></path></svg>Designed CV</a>\n<a class=\"btn-pop\" href=\"SHERMAINE_TAN_CV.pdf\" download=\"Shermaine-Tan-CV.pdf\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; box-sizing: border-box; border-radius: 999px; border: 1px solid #FFFFFF; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 600\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 4v11\"></path><path d=\"M7 11l5 5 5-5\"></path><path d=\"M5 20h14\"></path></svg>ATS-friendly CV</a>\n</div>\n</div>\n<p id=\"copyright\" style=\"margin: 16px 0 0; font-size: 13px; color: #C3CBDB\">© 2026 Shermaine Tan</p>\n</div>\n</section>\n\n<sc-if value=\"{{hasBack}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"position: sticky; bottom: 0; z-index: 5; height: 0\">\n<button type=\"button\" class=\"{{backClass}}\" onClick=\"{{goBack}}\" aria-label=\"{{backLabel}}\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 18px\"><path d=\"M19 12H5M11 6l-6 6 6 6\"></path></svg>\n<span>{{backLabel}}</span>\n</button>\n</div>\n</sc-if>\n\n</div>", function (DCLogic, React) {
class Component extends DCLogic {
  caseData() {
    return [
      {
        id: 'chatbot',
        draft: [],
        featured: true,
        tags: ['AI'],
        where: 'Air Selangor',
        title: 'Joy, a bilingual NLP chatbot',
        hook: 'A production English and Malay chatbot that resolves customer inquiries end to end.',
        stat: 'No ticket needed',
        statJoin: '',
        statLabel: 'to check a bill or a case status, in English or Malay',
        resultNote: 'Exact figures shared in interview.',
        problem: 'The earlier chatbot could only raise tickets. Simple questions still became tickets, some in the wrong category, and this stretched the support team.',
        did: [
          'Started with the most common inquiries, and asked of each one: can this be solved without a ticket?',
          'Wrote the requirements with the business, including ways to resolve cases faster',
          'Worked with engineers to get the right APIs ready for the vendor building the chatbot'
        ],
        result: [
          'Customers check a bill or a case status in chat, with no ticket raised',
          'Guests can report a roadside leak or burst without logging in',
          'When a ticket is needed, it arrives with the customer\'s answers, so the support team troubleshoots less'
        ],
        change: 'I would not chase the perfect answer at the start. Everyone had a different opinion and none was wrong, but it was the data on the most common inquiries that showed us what to build first.'
      },
      {
        id: 'vision',
        draft: [],
        tags: ['AI'],
        where: 'Air Selangor, proof of concept',
        title: 'Computer vision for leak and burst reports',
        hook: 'A proof of concept that classified leak and burst photos taken on mobile devices.',
        stat: 'Accuracy bar passed',
        statLabel: 'for field testing with the on-site leak team',
        problem: 'Miscategorised leak and burst reports meant field crews were often sent out just to verify an issue, which delayed responses and raised field service costs.',
        did: [
          'Led from the business side, between the business and the vendor, to prove the case for going ahead',
          'Set the requirements from my AI master\'s studies, with targets for accuracy, confidence and false positives',
          'Supplied the photos and a brief on what counts as a leak or burst, then checked the vendor\'s results'
        ],
        result: [
          'Accuracy improved with each training cycle, on photos from past reports and outside images from the vendor',
          'Passed the accuracy bar set for field testing with the on-site leak team',
          'Discontinued before that field test, when priorities changed'
        ],
        resultNote: 'Accuracy figures shared in interview.',
        change: 'Photo quality set the limit: many real photos were low resolution or badly angled. I would let customers send higher-resolution photos, with guidance on the right angle.'
      },
      {
        id: 'handover',
        draft: [],
        featured: true,
        tags: ['AI'],
        where: 'Air Selangor',
        title: 'Knowledge handover agent',
        hook: 'A Microsoft 365 Copilot agent that answers handover questions in plain language.',
        stat: 'Under 20 seconds',
        statLabel: 'per answer, pointing to the exact document and page',
        problem: 'Handovers relied on lengthy documentation, so new owners spent a long time searching and still depended on the outgoing owner for answers.',
        did: [
          'Designed and built the agent on handover documents from several projects',
          'Kept it to those documents only, with no outside search',
          'Made it point people to the team that owns each process, so questions reach the right owner'
        ],
        result: [
          'New owners get answers without searching through documents or waiting for the outgoing owner',
          'The incoming team tried it out, which is how the answers were checked',
          'Small scale so far: used by me and a few colleagues'
        ],
        change: 'Involve the incoming owners earlier, and use the questions they actually ask to decide which documents the agent needs first.'
      },
      {
        id: 'herbalife',
        draft: [],
        featured: true,
        tags: ['Virtual events'],
        where: 'MinistryXR',
        title: 'Herbalife Virtual Extravaganza',
        hook: 'A virtual 3D event for training, content sharing and entertainment across Asia Pacific.',
        stat: '35,000+',
        statLabel: 'members across 14 countries',
        problem: 'During the COVID-19 pandemic, distributors and members could not meet in person for their annual event.',
        did: [
          'As project manager, ran client meetings on progress, bugs and feedback, and adjusted the timeline when needed',
          'Coordinated translations for each country and passed them to the build team',
          'Tested the event on different phone types, using a VPN to check access from other countries'
        ],
        result: 'The client renewed the partnership for their 2022 annual event.',
        change: 'Many parties were involved, and the process got messy. If I started over, I would streamline it before the project begins.'
      },
      {
        id: 'tiger',
        draft: [],
        tags: ['Virtual events'],
        where: 'MinistryXR',
        title: 'Tiger Virtual Street Food Festival 2.0',
        hook: 'A virtual festival with food vendors, games and redeemable rewards.',
        stat: '2 Gold awards',
        statLabel: "at Malaysia's national advertising awards",
        problem: 'The first virtual festival was a big success and won innovation awards, so the bar for version 2.0 was higher.',
        did: [
          'Managed version 2.0 of the festival',
          'Delivered a virtual world where visitors browse and order from 120+ food vendors',
          'Included games with points to redeem for virtual and physical gifts'
        ],
        result: 'The festival won Gold in two categories: Best Brand Experience & Activation-Led Integrated Campaign, and Best Digital-Led Brand Experience & Activation.',
        resultLinksLabel: 'View the winning entries',
        resultLinks: [
          { label: 'Integrated campaign', url: 'https://www.kancilawards.com/winners/entry/2022/6487' },
          { label: 'Digital-led', url: 'https://www.kancilawards.com/winners/entry/2022/6452' }
        ],
        change: 'Late requests were approved close to launch and even mid-event, so the team worked overnight and bugs slipped through. Today I would set a cut-off for changes and protect the testing time.'
      },
      {
        id: 'antc',
        draft: [],
        tags: ['Virtual events'],
        where: 'TOGL Technology',
        title: 'Asean New Tech Conference, gone virtual',
        hook: 'A regional technology conference, held online for 2023.',
        stat: '360-degree showrooms',
        statJoin: ',',
        statLabel: 'online exhibitions and talks',
        problem: 'The conference ran as a physical event every year. For 2023 the company chose to hold it virtually, so people anywhere could take part.',
        did: [
          'Led the move online',
          'Kept technology, event and business teams aligned'
        ],
        result: [
          'In the organisers\' view, attendees preferred meeting in person, so the conference did not stay online',
          'The 360-degree showroom was kept, to show clients who cannot visit in person'
        ],
        change: 'Ask attendees first. I would keep the conference in person and offer the virtual showroom alongside it, for people who cannot travel.'
      },
      {
        id: 'misc',
        draft: [],
        tags: ['Virtual events', 'AR and VR'],
        where: 'MinistryXR',
        title: 'MISC Presidential Town Hall in VR',
        hook: 'A virtual reality web experience with brick-built versions of the company offices.',
        stat: 'VR town hall',
        statLabel: 'for employees at every level',
        problem: 'The yearly town hall needed one place where employees from offices around the world could gather, discuss and interact.',
        did: [
          'Led development of the VR experience',
          'Worked with my 3D developers, who lightened models that were too detailed to run with a large crowd'
        ],
        result: 'The town hall ran in VR, with employees meeting in one shared space.',
        change: 'Bring my developers into the creative discussions from the start, so we only promise the client what can run smoothly for a full crowd.'
      },
      {
        id: 'ar',
        draft: [],
        tags: ['AR and VR'],
        where: 'MinistryXR',
        title: 'AR experiences for brands',
        hook: 'Small augmented reality projects for brand clients, from product how-tos to social media campaigns.',
        stat: '3 brands',
        statJoin: ':',
        statLabel: 'Astro, Kotex and Cetaphil',
        problem: 'Brands wanted fresh ways to reach their customers. Astro needed an easier way to explain its set-top box, and Kotex wanted a social media campaign people would share.',
        did: [
          'Pitched AR ideas to clients',
          'Led my team as they built each experience'
        ],
        result: [
          'Astro: the AR how-to was delivered on time',
          'Kotex: the idea won the pitch over competing proposals, and the AR experience was widely shared on social media',
          'Cetaphil: came back for a second AR project'
        ],
        change: 'Plan how to measure results before launch, so the reach of each AR experience is on record.'
      },
      {
        id: 'handbook',
        draft: [],
        tags: ['Business tools'],
        where: 'MinistryXR, internal project',
        title: 'Employee handbook site with a quiz',
        hook: 'An internal site that makes the employee handbook engaging, through a short quiz.',
        stat: 'Read and tested',
        statJoin: ':',
        statLabel: 'handbook, quiz and scores in one site',
        problem: 'People usually skim a handbook and sign it. HR wanted employees to take it in, without forcing them to memorise everything.',
        did: [
          'Agreed with HR what the site needed to do',
          'Worked with the developers to deliver it, with an admin area HR can update on its own'
        ],
        result: 'The site went live, and HR could see who had finished the quiz and how they scored.',
        change: 'Check how much people remembered afterwards, and how the quiz felt to use. I would improve both before calling it ready to ship.'
      },
      {
        id: 'yippi',
        draft: [],
        tags: ['Product'],
        where: 'TOGL Technology',
        title: 'Yippi rewards platform',
        hook: 'Moving an app toward an e-rewards model.',
        stat: 'Earn and spend',
        statLabel: 'rebates across shopping, travel and bills',
        problem: 'The app had grown from a social app into travel bookings and e-commerce, but had no rewards. As users became more reward-driven, it needed a way to keep them.',
        did: [
          'Decided which features to release from the business\'s list, prioritising engagement and retention',
          'Managed the delivery together with the team',
          'Worked with marketing on online events for users'
        ],
        result: 'The rewards model went live in the app, with rebates earned from partner spending.',
        change: 'Prove the rewards model with one partner category first, before widening it.'
      },
      {
        id: 'testing',
        draft: [],
        tags: ['Product'],
        where: 'TOGL Technology',
        title: 'Shift to automated testing',
        hook: 'Replacing manual release testing with automated scripts, across the company.',
        stat: 'Self-initiated',
        statJoin: ',',
        statLabel: 'then adopted across the company',
        problem: 'Testing was done by hand, which was slow to repeat for every release and limited how much could be covered.',
        did: [
          'Evaluated automation vendors',
          'Wrote and ran automated test scripts hands-on',
          'Presented the benefits and trade-offs to management'
        ],
        result: [
          'Repeat testing of some features became much faster',
          'Engineers tidied their code so the tests could read it, which left it cleaner',
          'Automation was not perfect: some issues still slipped through'
        ],
        change: 'Agree with the engineers up front how screens are built, so tests can find every element. We fixed that afterwards, which cost time.'
      },
      {
        id: 'workflows',
        draft: [],
        tags: ['Business tools'],
        where: 'ValueLabs',
        title: 'Seven approval workflows on SharePoint',
        hook: 'Manual business approvals turned into digital workflows.',
        stat: '7',
        statLabel: 'workflows delivered',
        problem: 'Business approvals were handled by hand, without a proper audit trail.',
        did: [
          'Gathered requirements from business users and proposed how SharePoint could meet them',
          'Agreed scope and delivery dates with the software engineers',
          'Wrote the test cases and user guides, and tested each release'
        ],
        result: [
          'Seven workflows delivered',
          'They cover approvals such as charge codes, investment proposals and asset disposal'
        ],
        change: 'Walk through every approval step with the business users on paper before building, to catch the exceptions early.'
      },
      {
        id: 'portals',
        draft: [],
        tags: ['Business tools'],
        where: 'ValueLabs, for a media client',
        title: 'Self-serve portal for radio and TV ads',
        hook: 'A portal where a media company\'s customers plan and book their own advertising.',
        stat: 'Radio and TV',
        statLabel: 'advertising, booked by customers themselves',
        problem: 'Customers needed an easier way to work out what their advertising budget could buy, and then book it.',
        did: [
          'Took it from business requirements through to delivery by the developers',
          'Prepared the user guide and test cases'
        ],
        result: [
          'Customers work out what their budget can buy, then book radio and TV slots on their own',
          'The marketing team follows up with the agreement, as payment is not handled in the portal'
        ],
        change: 'Even in agile, features need to be locked down. I would break down more clearly what each release has to achieve before building.'
      },
      {
        id: 'support',
        draft: [],
        tags: ['Business tools'],
        where: 'ValueLabs, for a telco client',
        title: 'Level 2 support for telco sales apps',
        hook: 'Keeping sales apps running for retail, home and business customers.',
        stat: '3',
        statLabel: 'sales apps supported',
        problem: 'Orders keyed in by frontline staff sometimes failed, and someone had to find out why and get them moving again.',
        did: [
          'Troubleshot failed orders with other teams, checking the database and the details keyed in',
          'Retriggered orders and kept customer information correct',
          'Broke down the recurring issues and reported them to the business, with proposed fixes'
        ],
        result: [
          'Frontline staff could keep serving customers',
          'The business got a clear view of what kept going wrong, and what to do about it'
        ],
        change: 'Keep a troubleshooting guide as I go, with the cause and the fix for each type of failure. Repeat issues could then be solved in minutes.'
      }
    ];
  }

  sheetData() {
    return {
      tabs: [
        { id: 'skills', label: 'Skills', pose: 'glasses', say: 'What I bring to a team.' },
        { id: 'awards', label: 'Awards', pose: 'wave', say: 'Two golds for one festival.' },
        { id: 'tools', label: 'Tools', pose: 'tilt', say: 'The kit I work with.' },
        { id: 'lang', label: 'Languages', pose: 'wave', say: 'Hello. Apa khabar. Nei hou.' },
        { id: 'edu', label: 'Education', pose: 'book', say: 'Still levelling up.' },
        { id: 'cert', label: 'Certificates', pose: 'wave', say: 'Gold stars are my top 3.' }
      ],
      skills: [
        { label: 'AI products', items: ['AI product strategy and delivery', 'NLP applications', 'Computer vision applications', 'Model evaluation and readiness', 'AI governance and adoption', 'Training data strategy', 'Human-in-the-loop systems'] },
        { label: 'Delivery', items: ['Cross-functional leadership', 'Agile delivery', 'Product roadmapping', 'Backlog prioritisation', 'Customer journey design', 'Requirements analysis'] },
        { label: 'Core', items: ['Business development', 'Research and trend analysis', 'Project management'] }
      ],
      tools: [
        ['AI', 'Claude'], ['AI', 'Gemini'], ['AI', 'Microsoft 365 Copilot'], ['AI', 'Google AI Studio'],
        ['Plan', 'Jira'], ['Plan', 'Trello'], ['Design', 'Figma'], ['Diagram', 'Miro'], ['Diagram', 'Visio'], ['Diagram', 'Draw.io'], ['Build', 'Replit'],
        ['Data', 'SQL'], ['Data', 'Databricks'], ['Test', 'Katalon'], ['Test', 'Eggplant'], ['Test', 'Leapwork']
      ],
      langs: [
        { name: 'English', level: 'Fluent', n: 3 },
        { name: 'Malay', level: 'Fluent', n: 3 },
        { name: 'Cantonese', level: 'Intermediate', n: 2 }
      ],
      awards: [
        { level: 'Gold, 2022', cat: 'Best Brand Experience & Activation-Led Integrated Campaign', work: 'Tiger Virtual Street Food Festival 2.0', url: 'https://www.kancilawards.com/winners/entry/2022/6487' },
        { level: 'Gold, 2022', cat: 'Best Digital-Led Brand Experience & Activation', work: 'Tiger Virtual Street Food Festival 2.0', url: 'https://www.kancilawards.com/winners/entry/2022/6452' }
      ],
      eduDone: [
        { title: 'Law degree (LLB)', sub: 'Nottingham Trent University, UK, 2015 to 2017' },
        { title: 'Diploma in International Arbitration', sub: 'Brickfields Asia College, 2018' },
        { title: 'Cambridge A-Level, Economics and Law', sub: 'Brickfields Asia College, 2014 to 2015' }
      ],
      certs: [
        // recent = the three picked out with a gold star (the Google professional certificates). The rest follow, newest first, toned down
        { name: 'Google Project Management Professional Certificate', by: 'Google, 2022', recent: true },
        { name: 'Google UX Certificate', by: 'Google, 2022', recent: true },
        { name: 'Google Digital Marketing and E-commerce Professional Certificate', by: 'Google, 2023', recent: true },
        { name: 'Learn SQL Basics for Data Science', by: 'UC Davis, 2023' },
        { name: 'Introduction to HTML5', by: 'University of Michigan, 2020' },
        { name: 'Scrum Master Certification', by: 'International Scrum Institute, 2019' },
        { name: 'Scrum Product Owner', by: 'Scrum Institute, 2019' },
        { name: 'Programming Fundamentals', by: 'Duke University, 2019' },
        { name: 'Cloud Basics', by: 'Percipio, 2019' }
      ]
    };
  }

  gameData() {
    return [
      { id: 'dark', title: 'Dark mode', size: 1, hint: 'The most requested feature on social media.', say: 'Quick win. Is it the most useful?' },
      { id: 'photo', title: 'Report a problem with a photo', size: 3, hint: 'Would cut the back and forth between customers and support.', say: "Big one. That's most of the sprint." },
      { id: 'alerts', title: 'Alerts when the service is down', size: 2, hint: 'Support gets flooded with calls every time something breaks.', say: 'Fewer angry calls. Nice.' },
      { id: 'rewards', title: 'Rewards for loyal customers', size: 3, hint: 'Marketing wants it for a campaign next quarter.', say: 'Marketing will be happy.' },
      { id: 'pay', title: 'Pay in two taps', size: 2, hint: 'Almost every customer pays through the app each month.', say: 'Everyone uses that one.' }
    ];
  }

  myPath() {
    return [
      { who: 'me', label: 'My first instinct', picks: ['pay', 'photo'], think: 'I start with what nearly every customer touches each month. Then I add the one that would save support the most time.' },
      { who: 'eng', label: 'After engineering', quote: '"Photo reports need new storage, so it\'s 4 blocks, not 3."', picks: ['pay', 'alerts', 'dark'], think: 'Photo no longer fits next to pay, so it comes out. I ask engineering what a smaller first version could look like, and use the space for alerts and dark mode.' },
      { who: 'sup', label: 'After support', quote: '"Half our calls are people asking if the service is down."', picks: ['pay', 'alerts', 'dark'], think: 'Nothing moves, but alerts just went from nice to have to must have. If something gets cut later, it will not be this.' },
      { who: 'mkt', label: 'After marketing', quote: '"The campaign moved to next month. We need rewards in this sprint."', picks: ['pay', 'alerts', 'dark'], think: 'The hard one. Rewards would cost me pay or alerts, and both help more customers. I keep the sprint, explain why to marketing, and offer them the first slot in the next one.' }
    ];
  }

  stopData() {
    return [
      {
        id: 'law',
        years: '2015 to 2018',
        label: 'Law',
        role: 'Bachelor of Laws, Nottingham Trent University',
        detail: 'A law degree, a Diploma in International Arbitration and legal internships at Yeoh & Khong and Messrs Raja, Darryl: trademark research, case files and client communication.'
      },
      {
        id: 'valuelabs',
        years: '2018 to 2021',
        label: 'ValueLabs',
        role: 'Intern to Management Trainee, ValueLabs',
        detail: 'Requirement gathering, QA test cases, user guides and L2 support across web and mobile applications.'
      },
      {
        id: 'ministryxr',
        years: '2021 to 2022',
        label: 'MinistryXR',
        role: 'Junior Project Manager, MinistryXR',
        detail: 'End-to-end delivery of AR, VR and virtual event projects for regional and global clients, including award-winning brand experiences.'
      },
      {
        id: 'togl',
        years: '2022 to 2023',
        label: 'TOGL Technology',
        role: 'Product Manager, TOGL Technology',
        detail: 'Product work on the Yippi app, the shift from manual to automated testing, and moving a regional conference to a fully virtual format.'
      },
      {
        id: 'airselangor',
        years: '2023 to now',
        label: 'Air Selangor',
        role: 'Product and project manager at Air Selangor. Official title: Associate I, Program Management Office, then Data Science from 2026',
        detail: 'Managed the roadmap and delivery of Joy, a bilingual NLP chatbot, and led a computer vision proof of concept for leak and burst reports. Also built a Copilot agent for project handovers and led process redesign. Moved to the Data Science unit in 2026, working on data studies for the billing team and an early draft of a data and AI governance framework.'
      },
      {
        id: 'msc',
        years: '2025 to now',
        label: "Master's in AI",
        role: "Master's in Artificial Intelligence (Digital Transformation), University of Southampton",
        detail: 'Studying alongside full-time work. Focus areas: responsible AI and governance, machine learning, generative AI and LLMs, and AI deployment and monitoring.'
      }
    ];
  }

  askData() {
    return [
      { id: 'law', q: 'Why law to product?', pose: 'book', a: "I didn't start out knowing where I was heading. I studied law, moved into software, and somewhere along the way found what I enjoy most: building something people depend on. Product is where I get to do that every day." },
      { id: 'proud', q: 'Which project are you proudest of?', pose: 'wave', a: "The easy answer would be the one that won awards, but I can't pick just one. Every project came with its own challenges, and seeing each one through to the end is what makes me proud." },
      { id: 'ai', q: 'How do you use AI in your work?', pose: 'glasses', a: 'I started like most of us did, by trying the tools out. Then I paired them with the problem solving I learned in product management and began building my own tools for everyday product work. You can see three of them on this site.' },
      { id: 'wrong', q: 'What have your mistakes taught you?', pose: 'tilt', a: "I've got plenty wrong along the way. Each time, I look at what went wrong, work out why, and do better the next time. I've also learned that what used to work won't always keep working, so I keep checking instead of assuming." },
      { id: 'next', q: 'What are you looking for next?', pose: 'wave', a: "I want to contribute more in the AI space, because that's where I find the most joy. For me that means building AI products people can depend on." }
    ];
  }

  checkData() {
    return [
      { id: 'objective', name: 'Objective' },
      { id: 'data', name: 'Data' },
      { id: 'outcome', name: 'Outcome' },
      { id: 'design', name: 'Design' },
      { id: 'guard', name: 'Guardrails' }
    ];
  }

  aiData() {
    // one card per message. `check` marks a flaw and names the check that was missing.
    return [
      { id: 'hello', bad: 'Hi! I can help with orders and returns.', fact: ['The assistant', 'Covers orders and returns only.'] },
      { id: 'voucher', check: 'guard', cust: 'My order arrived damaged. Refund?', bad: 'Yes! Full refund plus a RM50 voucher.', good: 'Sorry about that. Your full refund has started.', fact: ['Shop policy', 'Refund only. No vouchers.'], flaw: 'It invented a voucher.', rule: 'Answer only from approved policy.' },
      { id: 'window', check: 'data', cust: 'How long do I have to return things?', bad: 'You have 14 days.', good: 'You have 30 days.', fact: ['Shop policy', '30 days. Changed last month.'], flaw: "It used last month's policy.", rule: 'Policy updated the day it changes.' },
      { id: 'charger', check: 'objective', cust: 'The charger got really hot. Is it safe?', bad: 'It should be fine. Chargers get warm.', good: "I can't advise on safety. Please stop using it.", fact: ['The assistant', 'Orders and returns only. Not safety.'], flaw: 'It answered a safety question.', rule: 'Orders and returns only.' },
      { id: 'person', check: 'design', cust: 'I want to talk to a person!', bad: 'I understand. Anything else I can help with?', good: 'Of course. Connecting you now.', fact: ['The team', 'A person takes over when asked.'], flaw: 'It kept the customer from a person.', rule: 'Hand over when someone asks.' },
      { id: 'report', check: 'outcome', kind: 'sys', bad: 'Rated 1 star. Nobody checked for 3 weeks.', good: 'Rated 1 star. Reviewed the same week.', fact: ['Team target', 'Review bad ratings every week.'], flaw: 'Nobody was watching the results.', rule: 'Bad ratings reviewed every week.' }
    ];
  }

  pathData() {
    return [
      { id: 'work', short: 'My work', title: "Show me what you've built", pose: 'wave', say: 'Three AI tools, then the bigger projects.' },
      { id: 'story', short: 'My story', title: 'Tell me your story', pose: 'book', say: 'It starts with a law degree.' },
      { id: 'think', short: 'How I think', title: 'Test how I think', pose: 'glasses', say: "Two quick ones. I'll show you mine after." }
    ];
  }

  chapterData() {
    return {
      law: { hook: 'It started with a law degree.', next: 'Next: how a law graduate ended up in software' },
      valuelabs: { hook: 'Then I switched to software.', next: 'Next: AR, VR and virtual events', cases: ['workflows', 'portals', 'support'] },
      ministryxr: { hook: 'I delivered AR, VR and virtual events.', next: 'Next: my first product manager role', cases: ['herbalife', 'tiger', 'misc', 'ar', 'handbook'] },
      togl: { hook: 'I became a product manager.', next: 'Next: my first AI projects', cases: ['antc', 'yippi', 'testing'] },
      airselangor: { hook: 'This is where AI came in.', next: 'Next: back to university, while working', cases: ['chatbot', 'vision', 'handover'] },
      msc: { hook: "Now I'm studying AI properly.", builds: true }
    };
  }

  // the top edge of whatever this page scrolls in: the frame around it when it is embedded, else the window
  viewTop(el) {
    let box = el && el.parentElement;
    while (box && box !== document.body && box !== document.documentElement) {
      const oy = window.getComputedStyle(box).overflowY;
      if ((oy === 'auto' || oy === 'scroll') && box.scrollHeight > box.clientHeight + 4) return box.getBoundingClientRect().top;
      box = box.parentElement;
    }
    return 0;
  }

  // room to leave for a menu that sits on top of the page. The page that embeds this one says how tall its menu is (--menu-h)
  // and whether it only shows while scrolling up (--menu-up), as it does on phones
  menuRoom(box) {
    if (!box || typeof window === 'undefined') return { h: 0, upOnly: false };
    const cs = window.getComputedStyle(box);
    return { h: parseFloat(cs.getPropertyValue('--menu-h')) || 0, upOnly: cs.getPropertyValue('--menu-up').trim() === '1' };
  }

  scrollToEl(el, skip) {
    if (!el || typeof window === 'undefined') return;
    const smooth = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const top = el.getBoundingClientRect().top + (skip || 0);
    let box = el.parentElement;
    while (box && box !== document.body && box !== document.documentElement) {
      const oy = window.getComputedStyle(box).overflowY;
      if ((oy === 'auto' || oy === 'scroll') && box.scrollHeight > box.clientHeight + 4) break;
      box = box.parentElement;
    }
    if (box && box !== document.body && box !== document.documentElement) {
      const boxTop = box.getBoundingClientRect().top;
      let dy = top - boxTop - 12;
      // Whatever we land on must sit below the menu, not behind it.
      // A menu that only shows while scrolling up needs that room only when this scroll goes up
      const m = this.menuRoom(box);
      const menuOn = m.h && (!m.upOnly || dy < 0);
      if (menuOn && !skip) dy -= m.h;
      else if (menuOn) {
        // a section brings its own top padding (skip). Sections do not all have the same padding, so measure it
        // and land with the first line 24px under the menu. The section edge never drops below the menu.
        const sec = el.firstElementChild ? el : (el.nextElementSibling || el);
        const inner = sec.firstElementChild;
        const pad = (parseFloat(window.getComputedStyle(sec).paddingTop) || 0) + (inner ? parseFloat(window.getComputedStyle(inner).paddingTop) || 0 : 0);
        if (pad) dy = sec.getBoundingClientRect().top - boxTop - Math.min(m.h, m.h + 24 - pad);
      }
      box.scrollTo({ top: box.scrollTop + dy, behavior: smooth ? 'smooth' : 'auto' });
      return;
    }
    const page = document.scrollingElement;
    if (page && page.scrollHeight > page.clientHeight + 4) {
      window.scrollTo({ top: window.scrollY + top - 12, behavior: smooth ? 'smooth' : 'auto' });
    }
  }

  scrollSoon(getEl, skip) {
    if (typeof window === 'undefined') return;
    if (this.scrollTimer) clearTimeout(this.scrollTimer);
    this.scrollTimer = setTimeout(() => {
      this.scrollTimer = null;
      this.scrollToEl(getEl(), skip);
    }, 90);
  }

  find(sel) {
    return this.rootEl ? this.rootEl.querySelector(sel) : null;
  }

  revealEl(el, anchor) {
    if (!el || typeof window === 'undefined') return;
    const smooth = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    let box = el.parentElement;
    while (box && box !== document.body && box !== document.documentElement) {
      const oy = window.getComputedStyle(box).overflowY;
      if ((oy === 'auto' || oy === 'scroll') && box.scrollHeight > box.clientHeight + 4) break;
      box = box.parentElement;
    }
    const inBox = box && box !== document.body && box !== document.documentElement;
    const view = inBox ? box.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
    // keep clear of a menu on top of the page: always if it is always there, and on any scroll up if that is what brings it back
    const m = this.menuRoom(inBox ? box : null);
    const bottomLimit = view.bottom - 24;
    const r = el.getBoundingClientRect();
    const head = (anchor || el).getBoundingClientRect();
    const plan = (topLimit) => {
      let d = 0;
      if (head.top < topLimit) d = head.top - topLimit;
      else if (r.bottom > bottomLimit) d = Math.min(r.bottom - bottomLimit, head.top - topLimit);
      // the two do not fit together: let the anchor go and show the end of the element instead
      if (anchor && r.bottom - d > bottomLimit) d = Math.min(r.bottom - bottomLimit, r.top - topLimit);
      return d;
    };
    let dy = plan(view.top + 12 + (m.upOnly ? 0 : m.h));
    if (m.upOnly && dy < 0) dy = plan(view.top + 12 + m.h);   // this scroll goes up, which brings that menu back: plan again with room for it
    if (Math.abs(dy) < 6) return;
    (inBox ? box : window).scrollBy({ top: dy, behavior: smooth ? 'smooth' : 'auto' });
  }

  revealSoon(sel, anchorSel, wait) {
    if (typeof window === 'undefined') return;
    if (this.revealTimer) clearTimeout(this.revealTimer);
    this.revealTimer = setTimeout(() => {
      this.revealTimer = null;
      const el = this.find(sel);
      if (el) this.revealEl(el, anchorSel ? this.find(anchorSel) : null);
    }, wait || 160);
  }

  // lets a page that embeds this one show which path is open
  tellPath(id) {
    if (this.rootEl && typeof window !== 'undefined') this.rootEl.dispatchEvent(new window.CustomEvent('portfolio-path', { detail: { path: id }, bubbles: true }));
  }

  // where the visitor is now, kept for the button that brings them back after an in-page button takes them somewhere else
  wayBack(label, sel, skip) {
    return { path: (this.state || {}).path, label: label, sel: sel, skip: skip };
  }

  // lets a page that embeds this one show the way back in its own menu
  tellBack(back) {
    if (this.rootEl && typeof window !== 'undefined') this.rootEl.dispatchEvent(new window.CustomEvent('portfolio-back', { detail: { label: back ? back.label : null }, bubbles: true }));
    this.watchBack(!!back);
  }

  // the floating button starts as a labelled pill; once the visitor has scrolled on a little it shrinks to a round arrow in the corner
  watchBack(on) {
    if (typeof window === 'undefined') return;
    if (this.backTimer) { clearTimeout(this.backTimer); this.backTimer = null; }
    if (this.backScroll) { this.backScroll.box.removeEventListener('scroll', this.backScroll.fn); this.backScroll = null; }
    if (!on || !this.rootEl) return;
    // wait for the jump itself to finish, then watch for the visitor's own scrolling
    this.backTimer = setTimeout(() => {
      this.backTimer = null;
      let box = this.rootEl.parentElement;
      while (box && box !== document.body && box !== document.documentElement) {
        const oy = window.getComputedStyle(box).overflowY;
        if ((oy === 'auto' || oy === 'scroll') && box.scrollHeight > box.clientHeight + 4) break;
        box = box.parentElement;
      }
      const inBox = box && box !== document.body && box !== document.documentElement;
      const target = inBox ? box : window;
      const pos = () => (inBox ? box.scrollTop : window.scrollY);
      const from = pos();
      const fn = () => {
        if (Math.abs(pos() - from) < 120) return;
        target.removeEventListener('scroll', fn);
        this.backScroll = null;
        this.setState({ backSmall: true });
      };
      this.backScroll = { box: target, fn: fn };
      target.addEventListener('scroll', fn, { passive: true });
    }, 1600);
  }

  goBack() {
    const b = (this.state || {}).back;
    if (!b) return;
    this.stopJourney();
    this.setState({ path: b.path, playing: false, back: null, backSmall: false });
    this.tellPath(b.path);
    this.tellBack(null);
    this.scrollSoon(() => this.find(b.sel) || this.pathEl, b.skip);
  }

  pickPath(id, back) {
    this.stopJourney();
    this.setState({ path: id, playing: false, back: back || null, backSmall: false });
    this.tellBack(back);
    this.tellPath(id);
    this.scrollSoon(() => this.pathEl, 44);
  }

  goCases(filter) {
    this.stopJourney();
    this.setState({ path: 'work', filter: filter, open: null, playing: false, back: null, backSmall: false });
    this.tellBack(null);
    this.tellPath('work');
    this.scrollSoon(() => this.casesEl);
  }

  goCase(id, back) {
    this.stopJourney();
    this.setState({ path: 'work', filter: 'All', open: id, playing: false, back: back || null, backSmall: false });
    this.tellBack(back);
    this.tellPath('work');
    this.scrollSoon(() => (this.casesEl && this.casesEl.querySelector('#case-' + id)) || this.casesEl);
  }

  stopJourney() {
    if (this.journeyTimer) {
      clearInterval(this.journeyTimer);
      this.journeyTimer = null;
    }
  }

  // turn to a chapter: the one on show slides away, then the new one slides in from the side it comes from
  // (from the right when going forward, from the left when going back), so the change is hard to miss
  turnChapter(id, playing) {
    const ids = this.stopData().map((st) => st.id);
    const from = Math.max(0, ids.indexOf((this.state || {}).stop ?? ids[0]));
    const to = Math.max(0, ids.indexOf(id));
    const still = typeof window === 'undefined' || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (this.turnTimer) { clearTimeout(this.turnTimer); this.turnTimer = null; }
    if (still || to === from) {
      this.setState({ stop: ids[to], playing: playing, turn: null });
      this.revealSoon('#journey-card', '#journey-track');
      return;
    }
    const dir = to > from ? 1 : -1;
    this.setState({ playing: playing, turn: { phase: 'out', dir: dir } });
    this.turnTimer = setTimeout(() => {
      this.turnTimer = null;
      this.setState({ stop: ids[to], turn: { phase: 'in', dir: dir } });
      this.revealSoon('#journey-card', '#journey-track');
    }, 170);
  }

  playJourney() {
    if (this.journeyTimer) {
      this.stopJourney();
      this.setState({ playing: false });
      return;
    }
    const ids = this.stopData().map((st) => st.id);
    const last = ids.length - 1;
    let i = 0;
    this.turnChapter(ids[0], true);
    this.journeyTimer = setInterval(() => {
      i += 1;
      if (i >= last) this.stopJourney();
      this.turnChapter(ids[Math.min(i, last)], i < last);
    }, 5000);
  }

  stopRoll() {
    if (this.rollTimer) {
      clearInterval(this.rollTimer);
      this.rollTimer = null;
    }
  }

  rollNumbers() {
    if (this.rollTimer || this.rolled) return;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.rolled = true;   // once per visit
    const start = Date.now();
    this.setState({ rollMs: 0, rollTick: 0 });
    this.rollTimer = setInterval(() => {
      const ms = Date.now() - start;
      if (ms >= 1500) {
        this.stopRoll();
        this.setState({ rollMs: null });
        return;
      }
      this.setState({ rollMs: ms, rollTick: ((this.state || {}).rollTick || 0) + 1 });
    }, 50);
  }

  componentDidMount() {
    const el = this.stripEl;
    if (el && typeof IntersectionObserver !== 'undefined') {
      this.rollObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || this.rolled || this.rollTimer) return;
          // met on the way back up: just show the numbers. The count-up is for arriving from above it, scrolling down
          if (e.boundingClientRect.top < this.viewTop(el) - 1) { this.rolled = true; this.setState({ rollTick: ((this.state || {}).rollTick || 0) + 1 }); }
          else if (e.intersectionRatio >= 0.5) this.rollNumbers();
        });
      }, { threshold: [0, 0.5] });
      this.rollObserver.observe(el);
    } else {
      this.rollNumbers();
    }
    const root = this.rootEl;
    if (root) {
      // lets a page that embeds this one open a path or a case study
      this.onGo = (e) => {
        const d = (e && e.detail) || {};
        if (d.back) this.goBack();
        else if (d.case) this.goCase(d.case);
        else if (d.path === 'work' && d.filter) this.goCases(d.filter);
        else if (d.path) this.pickPath(d.path);
      };
      root.addEventListener('portfolio-go', this.onGo);
    }
    if (root && typeof IntersectionObserver !== 'undefined' && typeof MutationObserver !== 'undefined') {
      this.revealObserver = new IntersectionObserver((entries) => {
        const edge = this.viewTop(root) - 1;
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // coming in over the top edge (scrolling back up, or after a jump down the page): show it at once. The rise is for content arriving from below
            if (e.boundingClientRect.top < edge) e.target.classList.add('rv-now');
            e.target.classList.add('rv-in');
            this.revealObserver.unobserve(e.target);
          }
        });
        // anything still waiting above the screen was jumped over (a button took us down the page): mark it shown, so it is simply there on the way back up
        root.querySelectorAll('.rv:not(.rv-in)').forEach((n) => {
          const r = n.getBoundingClientRect();
          if (r.height > 0 && r.bottom <= edge) { n.classList.add('rv-now', 'rv-in'); this.revealObserver.unobserve(n); }
        });
      }, { rootMargin: '0px 0px -48px 0px', threshold: 0 });
      const scan = () => {
        root.querySelectorAll('.rv:not(.rv-in)').forEach((n) => this.revealObserver.observe(n));
      };
      this.revealWatcher = new MutationObserver(scan);
      this.revealWatcher.observe(root, { childList: true, subtree: true });
      root.classList.add('rv-on');
      scan();
    }
  }

  componentWillUnmount() {
    if (this.rootEl && this.onGo) this.rootEl.removeEventListener('portfolio-go', this.onGo);
    if (this.revealWatcher) { this.revealWatcher.disconnect(); this.revealWatcher = null; }
    if (this.revealObserver) { this.revealObserver.disconnect(); this.revealObserver = null; }
    this.stopJourney();
    this.watchBack(false);
    if (this.turnTimer) { clearTimeout(this.turnTimer); this.turnTimer = null; }
    this.stopRoll();
    this.stopMsg();
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
      this.scrollTimer = null;
    }
    if (this.revealTimer) {
      clearTimeout(this.revealTimer);
      this.revealTimer = null;
    }
    if (this.rollObserver) {
      this.rollObserver.disconnect();
      this.rollObserver = null;
    }
  }

  reqSize(id, msgs) {
    if (id === 'photo' && msgs >= 1) return 4;
    return this.gameData().filter((g) => g.id === id)[0].size;
  }

  toggleReq(id) {
    const s = this.state || {};
    const phase = s.phase || 'r1';
    if (phase === 'r3') return;
    const msgs = phase === 'r1' ? 0 : (s.msgs || 0);
    const sprint = (s.sprint || []).slice();
    const at = sprint.indexOf(id);
    if (at !== -1) {
      sprint.splice(at, 1);
      this.setState({ sprint: sprint, last: { type: 'remove', id: id } });
      return;
    }
    const used = sprint.reduce((n, x) => n + this.reqSize(x, msgs), 0);
    if (used + this.reqSize(id, msgs) > 5) {
      this.setState({ last: { type: 'block', id: id, n: ((s.last && s.last.n) || 0) + 1 } });
      return;
    }
    sprint.push(id);
    this.setState({ sprint: sprint, last: { type: 'add', id: id } });
  }

  stopMsg() {
    if (this.msgTimer) {
      clearTimeout(this.msgTimer);
      this.msgTimer = null;
    }
  }

  nextMsg(n) {
    this.stopMsg();
    const calm = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (calm) {
      this.setState({ typing: false, msgs: n, last: { type: 'msg', n: n } });
      this.revealSoon('#r2-next', '#game-panel');
      return;
    }
    this.setState({ typing: true });
    this.msgTimer = setTimeout(() => {
      this.msgTimer = null;
      this.setState({ typing: false, msgs: n, last: { type: 'msg', n: n } });
      this.revealSoon('#r2-next', n === 1 ? '#game-panel' : null);
    }, 1000);
  }

  lockFirst() {
    this.setState({ phase: 'r2', msgs: 0 });
    this.nextMsg(1);
    this.revealSoon('#game-panel');
  }

  r2Next() {
    const s = this.state || {};
    const n = s.msgs || 0;
    if (s.typing) return;
    if (n < 3) {
      this.nextMsg(n + 1);
      return;
    }
    this.setState({ phase: 'r3', storyStep: 0 });
    this.revealSoon('#sprint-box');
  }

  skipToStory() {
    this.stopMsg();
    this.setState({ phase: 'r3', msgs: 3, typing: false, storyStep: 0 });
    this.revealSoon('#sprint-box');
  }

  resetSprint() {
    this.stopMsg();
    this.setState({ phase: 'r1', sprint: [], msgs: 0, typing: false, storyStep: 0, last: undefined });
    this.scrollSoon(() => this.find('#game'), 44);
  }

  renderVals() {
    const s = this.state || {};
    const accent = this.props.accent ?? '#F2B544';
    const navy = '#17203A';
    if (!this.sayMemo) this.sayMemo = {};
    const typed = (key, text, firstMs, laterMs, stamp) => {
      const memo = this.sayMemo[key] || (this.sayMemo[key] = { text: null, flip: false, first: true });
      const sig = String(text) + '|' + (stamp || '');
      if (memo.text !== sig) {
        memo.first = memo.text === null;
        memo.flip = !memo.flip;
        memo.text = sig;
      }
      let at = memo.first ? firstMs : laterMs;
      const step = Math.max(18, Math.min(46, Math.round(5000 / Math.max(1, String(text).length))));
      const chars = String(text).split('').map((c) => {
        const item = { c: c, d: at + 'ms' };
        at += c === '.' || c === '?' || c === '!' ? step * 7 : (c === ',' ? step * 4 : step);
        return item;
      });
      return { text: text, k: memo.flip ? 'ty-a' : 'ty-b', chars: chars };
    };
    const line = '#8A93A3';

    const chip = (on) => ({
      pressed: on ? 'true' : 'false',
      bg: on ? navy : '#FFFFFF',
      fg: on ? '#FFFFFF' : '#030711',
      border: on ? navy : line
    });

    if (!this.stripRef) this.stripRef = (el) => { this.stripEl = el; };
    if (!this.rootRef) this.rootRef = (el) => { this.rootEl = el; };
    const rolling = typeof s.rollMs === 'number';
    // each number counts up from zero and stops on its real value: it never shows a figure that is not true
    // until the strip has come into view they wait at zero, so the real figure is never shown and then taken away
    const still = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const waiting = !rolling && !this.rolled && !still && typeof IntersectionObserver !== 'undefined';
    const roll = (target, i) => {
      if (waiting) return '0';
      if (!rolling) return String(target);
      const k = Math.min(1, s.rollMs / (800 + i * 200));
      return String(Math.round(target * (1 - Math.pow(1 - k, 3))));
    };

    if (!this.pathRef) this.pathRef = (el) => { this.pathEl = el; };
    if (!this.casesRef) this.casesRef = (el) => { this.casesEl = el; };
    const path = s.path;
    const pathList = this.pathData();
    const paths = pathList.map((p) => {
      const on = p.id === path;
      return {
        ...p,
        pressed: on ? 'true' : 'false',
        bg: on ? accent : '#222D4E',
        border: on ? accent : '#36426A',
        fg: on ? navy : '#FFFFFF',
        subFg: on ? navy : '#C3CBDB',
        tileBg: on ? navy : accent,
        tileFg: on ? accent : navy,
        arrowFg: on ? navy : accent,
        turn: on ? 'rotate(90deg)' : 'rotate(0deg)',
        navWeight: on ? 700 : 500,
        navLine: on ? 'underline' : 'none',
        pick: () => this.pickPath(p.id),
        over: () => this.setState({ hover: p.id })
      };
    });
    const pathById = {};
    paths.forEach((p) => { pathById[p.id] = p; });
    const lookAt = pathById[s.hover] || pathById[path];
    const heroSay = pathById[s.hover] ? pathById[s.hover].say : (path === undefined ? 'Where shall we start?' : "Scroll down. It's right below.");
    const nextCopy = {
      work: { title: 'Want the story behind these?', sub: 'How a law graduate ended up building AI products.', ids: ['story', 'think'] },
      story: { title: "That's the story so far.", sub: 'See the work it led\u00A0to, or test how I think.', ids: ['work', 'think'] },
      think: { title: 'Curious how that plays out on real projects?', sub: 'See the work, or read how I got here.', ids: ['work', 'story'] },
      short: { title: 'Got a few more minutes?', sub: "See what I've built, or read how I got here.", ids: ['work', 'story'] },
      // nobody picked a path and just scrolled: offer all three here, so the rest of the site is one tap away
      none: { title: 'Where to next?', sub: 'My AI builds, my story, or a test of how I think.', ids: ['work', 'story', 'think'] }
    };
    const nc = path === undefined ? nextCopy.none : (nextCopy[path] || nextCopy.short);
    const next = {
      title: nc.title,
      sub: nc.sub,
      options: nc.ids.map((id, i) => ({
        label: pathList.filter((p) => p.id === id)[0].title,
        bg: i === 0 ? accent : 'transparent',
        fg: i === 0 ? navy : '#FFFFFF',
        border: i === 0 ? accent : '#FFFFFF',
        pick: () => this.pickPath(id)
      }))
    };

    const filter = s.filter ?? 'Featured';
    // listed by job, newest first; within a job the order written in caseData() is kept
    const jobRank = (c) => (/^Air Selangor/.test(c.where) ? 0 : (/^TOGL/.test(c.where) ? 1 : (/^MinistryXR/.test(c.where) ? 2 : 3)));
    const allCases = this.caseData().map((c, i) => ({ c: c, i: i })).sort((x, y) => jobRank(x.c) - jobRank(y.c) || x.i - y.i).map((x) => x.c);
    // two of the old filters held only two projects each, so the smaller groups are shown together
    const filterGroups = { 'Events and AR/VR': ['Virtual events', 'AR and VR'], 'Product and business tools': ['Product', 'Business tools'] };
    const matchCase = (c, f) => (f === 'All' ? true : (f === 'Featured' ? c.featured === true : (filterGroups[f] || [f]).some((t) => c.tags.indexOf(t) !== -1)));
    const filters = ['Featured', 'All', 'AI', 'Events and AR/VR', 'Product and business tools'].map((f) => ({
      ...chip(f === filter),
      label: f,
      pick: () => this.setState({ filter: f })
    }));

    // on a phone an open case study is about two screens long, so they all start closed there
    const narrow = typeof window !== 'undefined' && window.innerWidth < 700;
    const openId = s.open === undefined ? null : s.open;
    const casePart = (v) => {
      if (!Array.isArray(v)) return { text: v, isText: true, isList: false, lead: '', hasLead: false, items: [] };
      const lead = v.length > 1 && v[0].slice(-1) === ':' ? v[0] : '';
      return { text: '', isText: false, isList: true, lead: lead, hasLead: lead !== '', items: (lead ? v.slice(1) : v).map((t) => ({ t: t })) };
    };
    const cases = allCases.map((c) => {
      const open = c.id === openId;
      return {
        ...c,
        statRest: (c.statJoin || '') + ' ' + c.statLabel,
        show: matchCase(c, filter),
        pad: '20px',
        p: casePart(c.problem),
        d: casePart(c.did),
        r: casePart(c.result),
        resultNote: c.resultNote || '',
        hasResultNote: !!c.resultNote,
        resultLinks: c.resultLinks || [],
        resultLinksLabel: c.resultLinksLabel || '',
        hasResultLinks: !!(c.resultLinks && c.resultLinks.length),
        g: casePart(c.change),
        dProblem: (c.draft || []).indexOf('problem') !== -1,
        dDid: (c.draft || []).indexOf('did') !== -1,
        dResult: (c.draft || []).indexOf('result') !== -1,
        dChange: (c.draft || []).indexOf('change') !== -1,
        open: open,
        expanded: open ? 'true' : 'false',
        btnLabel: open ? 'Close' : 'Open case study',
        btnBg: open ? navy : '#FFFFFF',
        btnFg: open ? '#FFFFFF' : navy,
        toggle: () => this.setState({ open: open ? null : c.id })
      };
    });

    const sheet = this.sheetData();
    const sheetTab = s.sheetTab || 'skills';
    const sheetNow = sheet.tabs.filter((t) => t.id === sheetTab)[0] || sheet.tabs[0];
    const sheetTabs = sheet.tabs.map((t) => {
      const on = t.id === sheetNow.id;
      return {
        label: t.label,
        pressed: on ? 'true' : 'false',
        bg: on ? accent : '#222D4E',
        fg: on ? navy : '#FFFFFF',
        border: on ? accent : '#36426A',
        cursor: on ? 1 : 0.35,
        pick: () => this.setState({ sheetTab: t.id })
      };
    });
    const skillGroupsAll = sheet.skills.map((g) => ({ label: g.label, items: g.items.map((t) => ({ t: t })) }));
    const skillsAll = !narrow || !!s.skillsAll;
    const skillGroups = skillsAll ? skillGroupsAll : skillGroupsAll.slice(0, 1);
    const skillCount = sheet.skills.reduce((n, g) => n + g.items.length, 0);
    const toolSlots = sheet.tools.map((t) => ({ kind: t[0], name: t[1] }));

    const cap = 5;
    const phase = s.phase || 'r1';
    const msgs = phase === 'r1' ? 0 : (phase === 'r3' ? 3 : (s.msgs || 0));
    const typing = phase === 'r2' && s.typing === true;
    const reqList = this.gameData();
    const reqById = {};
    reqList.forEach((g) => { reqById[g.id] = g; });
    const sprint = s.sprint || [];
    const used = sprint.reduce((n, id) => n + this.reqSize(id, msgs), 0);
    const over = Math.max(0, used - cap);
    const last = s.last || {};
    const effortLabel = { 1: 'Small', 2: 'Medium', 3: 'Large', 4: 'Extra large' };
    const reqTags = {
      photo: msgs >= 1 ? 'Now 4 blocks' : '',
      alerts: msgs >= 2 ? 'Half of all support calls' : '',
      rewards: msgs >= 3 ? 'Campaign moved to next month' : ''
    };
    const reqs = reqList.map((g) => {
      const size = this.reqSize(g.id, msgs);
      const on = sprint.indexOf(g.id) !== -1;
      const fits = on || used + size <= cap;
      const blocked = last.type === 'block' && last.id === g.id;
      return {
        title: g.title,
        hint: g.hint,
        tag: reqTags[g.id] || '',
        hasTag: !!reqTags[g.id],
        effort: fits ? effortLabel[size] : "Won't fit",
        blocks: reqList.slice(0, size).map(() => ({ bg: fits ? navy : '#C9CFD9' })),
        pressed: on ? 'true' : 'false',
        border: on ? navy : '#E1E5EB',
        bg: on ? '#FFF6E0' : '#FFFFFF',
        checkBorder: on ? accent : '#8A93A3',
        checkBg: on ? accent : '#FFFFFF',
        checkOpacity: on ? 1 : 0,
        shakeClass: blocked ? (last.n % 2 === 1 ? 'req-shake-a' : 'req-shake-b') : '',
        toggle: () => this.toggleReq(g.id)
      };
    });
    const slots = [];
    for (let i = 0; i < Math.max(cap, used); i += 1) slots.push({ bg: i >= cap ? '#FFFFFF' : (i < used ? accent : '#36426A') });
    const sprintStatus = over > 0
      ? 'Over by ' + over + '. Take something out.'
      : (used === 0 ? 'Nothing in yet. Room for 5 blocks.' : (used === cap ? 'Full. 5 of 5 blocks used.' : used + ' of 5 blocks used, ' + (cap - used) + ' left.'));
    const sprintShort = over > 0 ? 'Over by ' + over : used + ' of 5 used';

    const myPath = this.myPath();
    const shortName = { pay: 'Pay', alerts: 'Alerts', dark: 'Dark', photo: 'Photo', rewards: 'Rewards' };
    const whoBg = { me: accent, eng: '#DCE6F5', sup: '#F6D9CF', mkt: '#FFE2A3' };
    const storyStep = Math.min(s.storyStep || 0, myPath.length);
    const storyEnd = phase === 'r3' && storyStep >= myPath.length;
    const storySteps = myPath.slice(0, Math.min(storyStep, myPath.length - 1) + 1).map((st, i) => {
      const prev = i === 0 ? [] : myPath[i - 1].picks;
      const usedAt = st.picks.reduce((n, id) => n + this.reqSize(id, i), 0);
      const segs = st.picks.map((id) => {
        const fresh = i > 0 && prev.indexOf(id) === -1;
        return { name: shortName[id], size: this.reqSize(id, i), bg: fresh ? accent : navy, fg: fresh ? navy : '#FFFFFF' };
      });
      if (usedAt < cap) segs.push({ name: '', size: cap - usedAt, bg: '#E9ECF1', fg: navy });
      const ins = st.picks.filter((id) => prev.indexOf(id) === -1).map((id) => shortName[id]);
      const outs = prev.filter((id) => st.picks.indexOf(id) === -1).map((id) => shortName[id]);
      let change = 'No change to my sprint.';
      if (i === 0) change = 'My sprint: ' + ins.join(', ') + '.';
      else if (ins.length + outs.length > 0) change = (ins.length ? 'In: ' + ins.join(', ') + '. ' : '') + (outs.length ? 'Out: ' + outs.join(', ') + '.' : '');
      return {
        n: i + 1,
        label: st.label,
        quote: st.quote || '',
        hasQuote: !!st.quote,
        think: st.think,
        segs: segs,
        change: change,
        avatarBg: whoBg[st.who],
        isMe: st.who === 'me',
        isEng: st.who === 'eng',
        isSup: st.who === 'sup',
        isMkt: st.who === 'mkt'
      };
    });
    const myFinal = myPath[myPath.length - 1].picks;
    const samePicks = sprint.filter((id) => myFinal.indexOf(id) !== -1).length;
    const sameSprint = samePicks === myFinal.length && sprint.length === myFinal.length;
    const inOut = (on) => ({ bg: on ? navy : '#FFFFFF', fg: on ? '#FFFFFF' : '#5B6472', border: on ? navy : '#8A93A3' });
    const reqResults = reqList.map((g) => {
      const you = sprint.indexOf(g.id) !== -1;
      const me = myFinal.indexOf(g.id) !== -1;
      return { title: g.title, hasYou: sprint.length > 0, youLabel: you ? 'You: in' : 'You: out', meLabel: me ? 'Me: in' : 'Me: out', you: inOut(you), me: inOut(me) };
    });
    const noPlay = sprint.length === 0;   // they skipped to my answer without filling a sprint: there is nothing of theirs to compare
    const storyNextLabels = ['Then engineering spoke up', 'Then support spoke up', 'Then marketing pushed', noPlay ? 'See my final sprint' : 'See how we compare'];

    let sprintSay = phase === 'r2' ? 'You can still swap things.' : 'Tap a request to add it.';
    let sprintPose = 'glasses';
    if (phase === 'r3') {
      if (storyEnd) {
        sprintSay = noPlay ? "That's my sprint." : (sameSprint ? 'Great minds.' : "Different sprint. That's fine.");
        sprintPose = 'wave';
      } else {
        sprintSay = ["Here's my first instinct.", 'That changed things.', 'That one made it easy.', 'This was the hard one.'][storyStep];
        sprintPose = ['tilt', 'glasses', 'wave', 'glasses'][storyStep];
      }
    } else if (typing) {
      sprintSay = 'Hang on, someone is typing.';
    } else if (over > 0) {
      sprintSay = 'Over by ' + over + '. Something has to go.';
      sprintPose = 'tilt';
    } else if (last.type === 'block') {
      sprintSay = "That won't fit. Take something out first.";
      sprintPose = 'tilt';
    } else if (last.type === 'msg') {
      sprintSay = ['', 'Bigger than it looked.', "That's a lot of calls.", 'Tough one. What gives?'][last.n] || sprintSay;
    } else if (used === cap) {
      sprintSay = phase === 'r1' ? "Sprint's full. Lock it in?" : "Sprint's full.";
    } else if (last.type === 'add') {
      sprintSay = reqById[last.id].say;
    } else if (last.type === 'remove') {
      sprintSay = 'Out it goes.';
    }
    const phaseNum = { r1: 1, r2: 2, r3: 3 }[phase];
    const rounds = [
      { n: 1, label: 'Your first call' },
      { n: 2, label: 'The team weighs in' },
      { n: 3, label: "How I'd decide" }
    ].map((rd) => {
      const cur = rd.n === phaseNum;
      const done = rd.n < phaseNum;
      return {
        n: rd.n,
        label: rd.label,
        current: cur ? 'step' : 'false',
        cls: (rd.n < 3 ? 'step-next' : '') + (done ? ' step-done' : ''),
        fg: cur ? navy : (done ? '#030711' : '#5B6472'),
        weight: cur ? 700 : (done ? 600 : 500),
        numBg: cur ? navy : (done ? '#FFFFFF' : 'transparent'),
        numFg: cur ? '#FFFFFF' : (done ? navy : '#5B6472'),
        numBorder: cur || done ? navy : '#C9CFD9'
      };
    });

    const act = s.act ?? 'ai';
    const isAi = act === 'ai';
    const actTabs = [
      { id: 'ai', label: 'AI thinking' },
      { id: 'product', label: 'Product thinking' }
    ].map((t) => ({
      ...chip(t.id === act),
      label: t.label,
      pick: () => { this.setState({ act: t.id }); if (t.id === 'ai') this.revealSoon('#game-panel', '#ai-box'); }
    }));
    const calls = s.calls || {};
    const aiCards = this.aiData();
    const checkList = this.checkData();
    const checkName = {};
    checkList.forEach((c) => { checkName[c.id] = c.name; });
    const aiFlaws = aiCards.filter((c) => c.check);
    const aiStep = Math.min(s.aiStep || 0, aiCards.length);
    const aiFinished = aiStep >= aiCards.length;
    const aiCard = aiCards[Math.min(aiStep, aiCards.length - 1)];
    const aiCall = aiFinished ? undefined : calls[aiCard.id];
    // judge: fine or flag. name: which check was missing. reveal: my answer, and the reply fixes itself.
    const aiPhase = aiFinished ? 'done' : (!aiCall ? 'judge' : (aiCall.flag && aiCard.check && !aiCall.check ? 'name' : 'reveal'));
    const aiCaught = aiFlaws.filter((c) => calls[c.id] && calls[c.id].flag).length;
    const aiShown = (k) => aiFinished || k < aiStep || (k === aiStep && aiPhase === 'reveal');
    const aiMsgs = [];
    aiCards.forEach((c, k) => {
      if (k > aiStep || (aiFinished && k < aiCards.length - 2)) return;   // at the end only the last two exchanges stay, under the stamp
      const past = aiFinished || k < aiStep;
      const old = !aiFinished && past;
      const tail = old ? ' old' : (past ? '' : ' chat-in');
      if (c.cust) aiMsgs.push({ cls: 'cu' + tail, text: c.cust, isAi: false, flagged: false, fixed: false });
      const fixed = !!c.check && aiShown(k);
      const flagged = !past && aiPhase === 'name';
      aiMsgs.push({ cls: (c.kind === 'sys' ? 'sys' : 'ai') + tail + (fixed ? ' fixed' : '') + (flagged ? ' flag' : ''), text: fixed ? c.good : c.bad, isAi: c.kind !== 'sys', flagged: flagged, fixed: fixed });
    });
    const aiChecks = checkList.map((c) => {
      const k = aiCards.findIndex((q) => q.check === c.id);
      const shown = k >= 0 && aiShown(k);
      const got = shown && !!calls[aiCards[k].id] && calls[aiCards[k].id].flag;
      return { id: c.id, name: c.name, cls: shown ? (got ? 'on' : 'miss') : '' };
    });
    const aiSet = (v) => { this.setState({ calls: { ...calls, [aiCard.id]: v } }); this.revealSoon('#game-panel', '#ai-box'); };
    const aiCheckOpts = checkList.map((c) => ({ id: c.id, name: c.name, pick: () => aiSet({ flag: true, check: c.id }) }));
    const aiIsFlaw = !!aiCard.check;
    const aiSameCheck = !!aiCall && aiCall.check === aiCard.check;
    let aiYouLine = '';
    let aiSay = aiStep === 0 ? 'Would you let this one go out?' : 'How about this one?';
    let aiPose = 'glasses';
    if (aiPhase === 'name') { aiSay = 'Good catch. What was missing?'; aiPose = 'tilt'; }
    if (aiPhase === 'reveal' && aiIsFlaw) {
      aiYouLine = !aiCall.flag ? 'You let this one through.' : (aiSameCheck ? 'You picked ' + checkName[aiCard.check] + ' too.' : 'You picked ' + checkName[aiCall.check] + ". I'd file it under " + checkName[aiCard.check] + '.');
      aiSay = !aiCall.flag ? 'This one slipped past you.' : (aiSameCheck ? 'Same as mine.' : 'Close. I see it differently.');
      aiPose = aiCall.flag ? 'wave' : 'glasses';
    }
    if (aiPhase === 'reveal' && !aiIsFlaw) {
      aiYouLine = aiCall.flag ? 'You flagged it, but it only does what it should.' : 'You let it through. Good call.';
      aiSay = aiCall.flag ? 'That one was fine, actually.' : 'Right. Nothing wrong there.';
      aiPose = aiCall.flag ? 'tilt' : 'wave';
    }
    if (aiFinished) { aiSay = 'You caught ' + aiCaught + ' of ' + aiFlaws.length + '.'; aiPose = 'wave'; }

    const stopList = this.stopData();
    const stopIds = stopList.map((st) => st.id);
    const stopIndex = Math.max(0, stopIds.indexOf(s.stop ?? stopIds[0]));
    const chapters = this.chapterData();
    const caseTitles = {};
    allCases.forEach((c) => { caseTitles[c.id] = c.title; });
    const chapterProjects = (id) => {
      const ch = chapters[id] || {};
      const back = () => this.wayBack('Back to my story', '#journey-walk');
      if (ch.builds) return [{ label: 'Three AI tools I built in my own time', go: () => this.pickPath('work', back()) }];
      return (ch.cases || []).map((cid) => ({ label: caseTitles[cid], go: () => this.goCase(cid, back()) }));
    };
    const stopPct = (i) => +(6 + i * 17.6).toFixed(1);
    const stopPoses = { law: 'book', valuelabs: 'tilt', ministryxr: 'wave', togl: 'glasses', airselangor: 'tilt', msc: 'book' };
    const stopKinds = { law: 'Study', msc: 'Study, alongside work' };
    const goStop = (i) => {
      this.stopJourney();
      this.turnChapter(stopIds[i], false);
    };
    const stops = stopList.map((st, i) => {
      const on = i === stopIndex;
      return {
        pressed: on ? 'true' : 'false',
        aria: st.label + ', ' + st.years,
        left: stopPct(i) + '%',
        dot: on ? '24px' : '18px',
        dotBg: on ? accent : (i < stopIndex ? navy : '#FFFFFF'),
        year: st.years.slice(0, 4),
        chipBg: on ? navy : '#FFFFFF',
        chipFg: on ? '#FFFFFF' : '#030711',
        chipBorder: on ? navy : '#8A93A3',
        ringClass: i === stopIndex + 1 ? 'stop-pulse' : '',
        ringOpacity: i === stopIndex + 1 ? 0.5 : 0,
        kind: stopKinds[st.id] || 'Work',
        dotRadius: stopKinds[st.id] ? '5px' : '50%',
        number: '0' + (i + 1),
        years: st.years,
        label: st.label,
        role: st.role,
        detail: st.detail,
        hook: (chapters[st.id] || {}).hook || st.role,
        nextLabel: (chapters[st.id] || {}).next || '',
        hasNext: i < stopList.length - 1,
        projects: chapterProjects(st.id),
        hasProjects: chapterProjects(st.id).length > 0,
        pick: () => goStop(i)
      };
    });
    const stop = stops[stopIndex];
    const playing = s.playing === true;

    const askId = s.ask ?? 'law';
    let ask = null;
    const asks = this.askData().map((a) => {
      const on = a.id === askId;
      const item = {
        q: a.q,
        pose: a.pose,
        answer: a.a,
        pressed: on ? 'true' : 'false',
        bg: on ? accent : 'transparent',
        fg: on ? navy : '#FFFFFF',
        border: on ? accent : '#8A93A3',
        pick: () => this.setState({ ask: a.id })
      };
      if (on) ask = item;
      return item;
    });

    return {
      accent: accent,
      stripRef: this.stripRef,
      rootRef: this.rootRef,
      n1: roll(8, 0),
      n2: roll(7, 1),
      n3: roll(3, 2),
      n4: roll(2, 3),
      paths: paths,
      pathRef: this.pathRef,
      casesRef: this.casesRef,
      isWork: path === 'work',
      isStory: path === 'story',
      isThink: path === 'think',
      isShort: path === 'short',
      showFeatured: path === undefined || path === 'short',
      featured: allCases.filter((c) => c.featured === true).map((c) => ({ id: c.id, where: c.where, title: c.title, stat: c.stat, statRest: (c.statJoin || '') + ' ' + c.statLabel, go: () => this.goCase(c.id) })),
      seeWork: () => this.pickPath('work'),
      next: next,
      pickShort: () => this.pickPath('short'),
      shortPressed: path === 'short' ? 'true' : 'false',
      pw: pathById.work,
      ps: pathById.story,
      pt: pathById.think,
      hoverOut: () => this.setState({ hover: undefined }),
      sayHero: typed('hero', heroSay, 750, 0),
      sayBuilds: typed('builds', 'Good pick. Press play on any of these.', 450, 0),
      sayCases: typed('cases', 'These are the bigger ones, from my day jobs.', 450, 0),
      sayGame: typed('game', isAi ? aiSay : sprintSay, 500, 0),
      sayNext: typed('next', next && next.title ? next.title : '', 400, 0),
      saySheet: typed('sheet', sheetNow.say, 600, 0),
      sayAsk: typed('ask', (ask || asks[0]).answer, 500, 200, askId),
      heroPose: lookAt ? lookAt.pose : (path === undefined ? 'tilt' : 'wave'),
      gamePose: isAi ? aiPose : sprintPose,
      isProduct: !isAi,
      isAi: isAi,
      actTabs: actTabs,
      actTitle: isAi ? 'Would you ship this?' : 'Fill the sprint',
      actSub: isAi
        ? "A shop's new AI assistant is about to go live. Read one message at a time and make the call: fine, or flag it."
        : "Picture any customer app: a bank, a shop, a telco. Five requests are waiting, but the sprint only has room for five blocks of effort. Tap the ones you'd build.",
      sheetTabs: sheetTabs,
      sheetPose: sheetNow.pose,
      sheetIsSkills: sheetNow.id === 'skills',
      sheetIsTools: sheetNow.id === 'tools',
      sheetIsLang: sheetNow.id === 'lang',
      sheetIsEdu: sheetNow.id === 'edu',
      sheetIsCert: sheetNow.id === 'cert',
      sheetIsAwards: sheetNow.id === 'awards',
      awards: sheet.awards,
      awardGo: () => this.goCase('tiger', this.wayBack('Back to awards', '#sheet', 44)),
      xpSegs: sheet.langs.concat(sheet.langs, sheet.langs).slice(0, 8).map(() => ({})),
      skillGroups: skillGroups,
      skillsMore: !skillsAll,
      skillCount: skillCount,
      showSkills: () => this.setState({ skillsAll: true }),
      toolSlots: toolSlots,
      langs: sheet.langs.map((l) => ({ name: l.name, level: l.level, segs: [0, 1, 2].map((i) => ({ bg: i < l.n ? accent : '#36426A' })) })),
      eduDone: sheet.eduDone,
      certs: sheet.certs.map((c) => ({ name: c.name, by: c.by, border: c.recent ? accent : '#36426A', starBg: c.recent ? accent : '#36426A', starFg: c.recent ? navy : '#C3CBDB', nameFg: c.recent ? '#FFFFFF' : '#C3CBDB' })),
      rowWrap: !isAi && phase === 'r2' ? 'wrap-reverse' : 'wrap',
      rowAlign: !isAi && phase === 'r2' ? 'flex-end' : 'flex-start',
      panelPos: !isAi && phase === 'r3' ? 'sticky' : 'relative',
      panelTop: !isAi && phase === 'r3' ? '16px' : 'auto',
      rounds: rounds,
      canSkip: phase !== 'r3',
      skipToStory: () => this.skipToStory(),
      boardOpen: !isAi && phase !== 'r3',
      r1Open: !isAi && phase === 'r1',
      r2Open: !isAi && phase === 'r2',
      storyOpen: !isAi && phase === 'r3',
      panelTitle: phase === 'r1' ? 'This sprint' : 'The team weighs in',
      reqs: reqs,
      slots: slots,
      sprintShort: sprintShort,
      sprintStatus: sprintStatus,
      lockDisabled: used === 0,
      lockOpacity: used === 0 ? 0.45 : 1,
      lockFirst: () => this.lockFirst(),
      m1: msgs >= 1,
      m2: msgs >= 2,
      m3: msgs >= 3,
      typing: typing,
      r2Next: () => this.r2Next(),
      r2Disabled: typing || over > 0,
      r2Opacity: typing || over > 0 ? 0.45 : 1,
      r2Label: typing ? 'Someone is typing' : (msgs < 3 ? 'Next message' : 'Lock my final sprint'),
      storySteps: storySteps,
      storyMore: !isAi && phase === 'r3' && !storyEnd,
      storyEnd: !isAi && storyEnd,
      storyNext: () => { this.setState({ storyStep: storyStep + 1 }); this.revealSoon('#story-next, #story-end-list', storyStep + 1 >= myPath.length ? '#story-end' : null); },
      storyNextLabel: storyNextLabels[Math.min(storyStep, storyNextLabels.length - 1)],
      storyTitle: storyEnd ? (noPlay ? "That's how I'd decide." : (sameSprint ? "We'd run the same sprint." : 'We ended with ' + samePicks + ' of the same.')) : "How I'd decide",
      storyEndTitle: noPlay ? 'My final sprint' : 'Your final sprint next to mine',
      storyStatus: storyEnd ? (noPlay ? 'Play it yourself and see where we differ.' : "That's how my sprint took shape.") : 'Step ' + (storyStep + 1) + ' of 4',
      reqResults: reqResults,
      reset: () => this.resetSprint(),
      aiDone: isAi && aiFinished,
      aiMsgs: aiMsgs,
      aiChecks: aiChecks,
      aiJudge: isAi && aiPhase === 'judge',
      aiName: isAi && aiPhase === 'name',
      aiReveal: isAi && aiPhase === 'reveal',
      aiRevealFlaw: isAi && aiPhase === 'reveal' && aiIsFlaw,
      aiRevealFine: isAi && aiPhase === 'reveal' && !aiIsFlaw,
      aiLabel: 'Message ' + Math.min(aiStep + 1, aiCards.length) + ' of ' + aiCards.length,
      aiFact: { k: aiCard.fact[0], t: aiCard.fact[1] },
      aiFine: () => aiSet({ flag: false }),
      aiFlag: () => aiSet({ flag: true }),
      aiCheckOpts: aiCheckOpts,
      aiLit: { id: aiCard.check || 'objective', name: checkName[aiCard.check] || '', flaw: aiCard.flaw || '', rule: aiCard.rule || '' },
      aiYouLine: aiYouLine,
      aiNext: () => { this.setState({ aiStep: aiStep + 1 }); this.revealSoon('#game-panel', '#ai-box'); },
      aiNextLabel: aiStep === aiCards.length - 1 ? 'See my launch checklist' : 'Next message',
      aiRules: checkList.map((c) => ({ id: c.id, name: c.name, rule: (aiCards.find((q) => q.check === c.id) || {}).rule || '' })),
      aiStampLine: aiFlaws.length + ' of ' + aiFlaws.length + ' fixed',
      aiSeeBuilds: () => this.pickPath('work', this.wayBack('Back to how I think', '#game', 44)),
      aiReset: () => { this.setState({ aiStep: 0, calls: {} }); this.scrollSoon(() => this.find('#game'), 44); },
      filters: filters,
      cases: cases,
      showSeeAll: filter === 'Featured',
      seeAll: () => this.setState({ filter: 'All' }),
      caseTotal: allCases.length,
      stops: stops,
      stop: stop,
      chClass: !s.turn ? '' : s.turn.phase === 'out' ? (s.turn.dir > 0 ? 'ch-out-l' : 'ch-out-r') : (s.turn.dir > 0 ? 'ch-in-r' : 'ch-in-l'),
      hasBack: !!s.back,
      backClass: s.backSmall ? 'back-pill small' : 'back-pill',
      backLabel: s.back ? s.back.label : '',
      goBack: () => this.goBack(),
      journeyFill: +(stopIndex * 17.6).toFixed(1) + '%',
      journeyChibiLeft: 'calc(' + stopPct(stopIndex) + '% - 42px)',
      journeyPose: stopPoses[stopIds[stopIndex]] || 'tilt',
      journeyNumber: stopIndex + 1,
      journeyPrev: () => goStop(Math.max(0, stopIndex - 1)),
      journeyNext: () => goStop(Math.min(stopIds.length - 1, stopIndex + 1)),
      journeyPrevDisabled: stopIndex === 0,
      journeyNextDisabled: stopIndex === stopIds.length - 1,
      journeyPrevOpacity: stopIndex === 0 ? 0.35 : 1,
      journeyNextOpacity: stopIndex === stopIds.length - 1 ? 0.35 : 1,
      journeyPlay: () => this.playJourney(),
      journeyPlayLabel: playing ? 'Pause' : 'Play my story',
      asks: asks,
      ask: ask || asks[0]
    };
  }
}
return Component;
});

// ---------- start
(function () {
  DCLite.mount("ScrollTrial", document.getElementById('dc-root'));
  // "Watch demo" plays the video that sits in the same card
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[data-play]') : null;
    if (!a) return;
    var v = document.getElementById(a.getAttribute('data-play'));
    if (!v || !v.play) return;
    e.preventDefault();
    var p = v.play(); if (p && p.catch) p.catch(function () {});
    if (v.focus) v.focus({ preventScroll: true });
  });
})();
