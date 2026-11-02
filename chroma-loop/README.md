# Chroma Loop

A mobile-first PWA puzzle game. Tap shooters to send them onto a conveyor belt that loops around a
pixel-art picture. As a shooter rides the belt, it fires at the first pixel in each row or column it
passes, but only if that pixel is its color. Clear the whole picture to win.

- 100 levels: 15 hand-drawn sprites (shown plain, with backgrounds, scaled up and mirrored) mixed
  with 10 procedural pattern generators. Levels get bigger and use more colors as you go.
- Every level is checked at generation time by a greedy solver, so it's always clearable.
- 5 holding slots, max 5 shooters on the belt. Stars depend on how many slots you needed.
- Progress, stars and the sound setting are saved in localStorage. Works offline once installed.

## Run

No build step. Serve the folder and open it:

```sh
cd chroma-loop && python3 -m http.server 8000
```

To install it on a phone, host the folder on any static HTTPS host (GitHub Pages, Netlify,
Cloudflare Pages), open it in the mobile browser and choose "Add to Home Screen".

## Files

- `js/levels.js`: palette, sprites, procedural generators, shooter dealing and the solver check
- `js/game.js`: belt geometry, game loop, rendering, input, UI
- `sw.js`: offline cache. Bump `VERSION` when you change files.
