# Chroma Loop

A mobile-first PWA puzzle game. Tap shooters to send them onto a conveyor belt that loops around a
pixel-art picture. As a shooter rides the belt, it fires at the first pixel in each row or column it
passes, but only if that pixel is its color. Clear the whole picture to win.

- 100 levels in tiers of 5. Every tier steps something up: board size (10x10 up to 30x30), colors
  (2 up to 8), shooter columns (3 to 5) and, from level 51, fewer holding slots (5 to 4 to 3).
- Pictures: 26 vector scenes (`js/scenes.js`) rasterized at the tier's board size, so the same scene
  gets more detailed as boards grow, plus 15 small hand-drawn sprites for the early levels and
  10 pattern generators (one pattern level per tier).
- Every level is checked at generation time by a greedy solver, so it's always clearable. From tier 3
  on, the hardest of several solvable shooter orders is used.
- Max 5 shooters on the belt. Stars depend on how many holding slots you needed.
- Progress, stars and the sound setting are saved in localStorage. Works offline once installed.

## Run

No build step. Serve the folder and open it:

```sh
cd chroma-loop && python3 -m http.server 8000
```

To install it on a phone, host the folder on any static HTTPS host (GitHub Pages, Netlify,
Cloudflare Pages), open it in the mobile browser and choose "Add to Home Screen".

## Files

- `js/levels.js`: palette, sprites, tier curve, level schedule, pattern generators, shooter dealing, solver
- `js/scenes.js`: vector scenes and the rasterizer
- `js/game.js`: belt geometry, game loop, rendering, input, UI
- `sw.js`: offline cache. Bump `VERSION` when you change files.
