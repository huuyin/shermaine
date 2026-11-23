# How to change this site

The site at the repository root (`index.html`, `assets/`, `fonts/`, `images/`) is built from the files in this folder.
Do not edit the built files by hand. Change a source here, then build again.

## The one command

From the repository root:

```
node source/build.js --publish
```

This rebuilds the site into `source/dist/` and copies the result over the files in the repository root.
It only adds and overwrites. It never deletes anything, so `videos/` and `.git` are safe.
It needs Node 16 or newer and nothing else. There is nothing to install.

Then check the site locally (`python3 -m http.server 8080`, open http://localhost:8080/), commit and push.

## Where things live

| To change | Edit |
|---|---|
| Email, LinkedIn, the two CV files (`cv` is the plain ATS version, `cvDesigned` is the designed one), photo, the three demo videos, GitHub links for the builds, page title and description | `source/site.config.json` |
| The opening (Hello screen, the three paths) and the closing "Thank you" card | `source/pages/ScrollTrial.dc.html` |
| Everything else: projects, story chapters, skills sheet, the two activities, Ask me | `source/pages/Main.dc.html` |
| The project drawings | `source/pages/CaseArt.dc.html` |
| The character | `source/pages/ChibiPose.dc.html` |
| Photo, video stills, the two CV PDFs, icon, share image | `source/static/` (copied to the site as they are) |

Inside `Main.dc.html`, most text is plain data near the bottom of the file:

- `caseData()` holds the 14 projects: title, one-line description, the problem, what I did, the result, what I'd change.
- `stopData()` and `chapterData()` hold the six story chapters.
- `sheetData()` holds skills, tools, awards, education and certificates.
- `askData()` holds the Ask me questions and answers.

## How a page source works

Each `.dc.html` file is one part of the page. It has three pieces:

1. A `<helmet>` with that part's styles.
2. An HTML template. `{{name}}` is a hole that gets filled in. `<sc-if>` shows something only when a value is true. `<sc-for>` repeats something for each item in a list. `<dc-import name="Part">` places another part.
3. A script with `class Component extends DCLogic`. Its `renderVals()` returns the values for the holes.

`source/runtime/dc-lite.js` is the small program that turns those templates into the live page. It uses React, which is in `source/vendor/`.

## The placeholders the build fills in

The page sources still contain a few placeholders from the design stage: `[Your photo]`, three `[Demo video ...]` boxes, and buttons that point nowhere. `build.js` swaps in the real photo, videos and links from `site.config.json`.
If you change those parts of the sources, the build stops with a clear message instead of publishing a half-filled page.

## Adding the GitHub links for the three builds

In `source/site.config.json`, each build has a `github` field that is empty. Put the repository address in it and rebuild.
A build with an address gets a "View code on GitHub" button. A build without one shows only "Watch demo".

## Licences

- React (`source/vendor/`): MIT licence, see `LICENSE-react.txt`.
- Fonts (`source/fonts/`): Inter, Playfair Display and Silkscreen, each under the SIL Open Font License. The licence files sit beside the fonts.
