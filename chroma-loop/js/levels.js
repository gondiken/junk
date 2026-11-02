// Level data + generation. Pure functions, no DOM.
import { SCENES, renderScene } from './scenes.js';

export const PAL = {
  r: '#e63946', o: '#f77f00', y: '#ffd23f', g: '#57cc58', d: '#2d6a4f',
  b: '#3a86ff', c: '#4cc9f0', p: '#8e5bd8', k: '#ff8fab', w: '#f8f4e9',
  n: '#8d5a3b', x: '#2b2d42', s: '#a3acb9', t: '#f2c79b', m: '#b5179e',
  B: '#23408e', L: '#bde0fe', G: '#b5e48c', N: '#5a3825', S: '#5c6370',
  P: '#c8b6ff', T: '#2a9d8f', R: '#9d0208', Y: '#ffe27a',
};

// Hand-drawn sprites. '.' = empty (or bg color when a level adds a background).
const SPRITES = [
  { name: 'Heart', map: [
    '..rr...rr..', '.rrrr.rrrr.', 'rrkrrrrrrrr', 'rkrrrrrrrrr', 'rrrrrrrrrrr',
    '.rrrrrrrrr.', '..rrrrrrr..', '...rrrrr...', '....rrr....', '.....r.....'] },
  { name: 'Mushroom', map: [
    '....rrrr....', '..rrrrwwrr..', '.rwwrrwwrrr.', '.rwwrrrrrwr.', 'rrrrrwwrrrrr',
    'rrwrrwwrrwwr', 'rrrrrrrrrwwr', '.rrrrrrrrrr.', '...twwwwt...', '...txwwxt...',
    '...twwwwt...', '....tttt....'] },
  { name: 'Cat', map: [
    '.x.........x.', '.xx.......xx.', '.xox.....xox.', '.xooxxxxxoox.', '.xooooooooox.',
    'xooooooooooox', 'xoowxoooxwoox', 'xooxxoooxxoox', 'xoooookooooox', 'xoooxoxoxooox',
    '.xooooooooox.', '..xxxxxxxxx..'] },
  { name: 'Fish', map: [
    '......oooo......', '....oooooooo...o', '...owxoowoooo.oo', '..ooxxoowooooooo',
    '.oooooowoooooooo', '..ooooowooooo.oo', '...ooooowoooo..o', '....oooooooo....', '......oooo......'] },
  { name: 'Tree', map: [
    '.....gg.....', '....gggg....', '...ggdggg...', '..gggggdgg..', '...gdgggg...',
    '..ggggggdg..', '.ggdgggggggg', '..gggggdgg..', '.gggdggggggg', 'gggggggggdgg',
    '....nnnn....', '....nnnn....', '...nnnnnn...'] },
  { name: 'House', map: [
    '......r......', '.....rrr.....', '....rrrrr..x.', '...rrrrrrr.x.', '..rrrrrrrrrx.',
    '.rrrrrrrrrrr.', 'rrrrrrrrrrrrr', '.wwwwwwwwwww.', '.wbbwwwwwbbw.', '.wbbwwnnwbbw.',
    '.wwwwwnnwwww.', '.wwwwwnywwww.', '.wwwwwnnwwww.'] },
  { name: 'Ice Cream', map: [
    '...kkk...', '..kkkkk..', '.kkwkkkk.', '.kkkkkrk.', '.kkkkkkk.', '..wwwww..',
    '.wwcwwww.', 'wwwwwwcww', '.ttttttt.', '..ttntt..', '..tnttt..', '...ttt...', '...tn....', '....t....'] },
  { name: 'Rocket', map: [
    '.....r.....', '....rrr....', '....rrr....', '...wwwww...', '...wwwww...', '...wbbbw...',
    '...wbcbw...', '...wbbbw...', '...wwwww...', '...wwwww...', '..rwwwwwr..', '.rrwwwwwrr.',
    '.rr.www.rr.', '....ooo....', '....yoy....', '.....y.....'] },
  { name: 'Ghost', map: [
    '....pppp....', '..pppppppp..', '.pppppppppp.', '.ppwwpppwwp.', '.ppwxpppwxp.',
    'pppwxpppwxpp', 'pppppppppppp', 'pppppkkppppp', 'pppppppppppp', 'pppppppppppp',
    'pppppppppppp', 'pp.ppp.ppp.p', 'p...p...p...'] },
  { name: 'Cherries', map: [
    '.......dd...', '......dddd..', '.....d.dd...', '....d...d...', '...d.....d..', '..d......d..',
    '.rrr....rrr.', 'rrwrr..rrwrr', 'rwrrr..rwrrr', 'rrrrr..rrrrr', 'rrrrr..rrrrr', '.rrr....rrr.'] },
  { name: 'Frog', map: [
    '..ggg....ggg..', '.gwwxg..gwwxg.', '.gwxxg..gwxxg.', 'gggggggggggggg', 'gggggggggggggg',
    'gkgggggggggkgg', 'ggxggggggggxgg', 'gggxxxxxxxxggg', '.gggggggggggg.', '..dgggggggggd.', '.ddd.....ddd..'] },
  { name: 'Duck', map: [
    '....yyyy.....', '...yyyyyy....', '...yywxyy....', '..oyyyyyy....', '.ooyyyyyy....',
    '..oyyyyy.....', '....yyyyyyy.y', '...yyyyyyyyyy', '..yyywwyyyyyy', '..yyyyywwwyy.',
    '...yyyyyyyy..', '....yyyyy....'] },
  { name: 'Night', bg: 'x', map: [
    '..............', '...yyyy....w..', '..yyyyy...www.', '.yyyy......w..', '.yyy..........',
    'yyyy......w...', 'yyy...........', 'yyy.....w.....', 'yyyy..........', '.yyyy.....w...',
    '.yyyyy......w.', '..yyyyyy.yy...', '...yyyyyyy....', '.....yyy......'] },
  { name: 'Flower', map: [
    '.....kk......', '....kkkk.....', '..kk.kk.kk...', '.kkkkkkkkkk..', '..kkkyyykk...',
    '.kkkyyyyykkk.', '..kkyyyyykk..', '...kkyyykk...', '..kk.kkk.kk..', '......g......',
    '...gg.g......', '....ggg.gg...', '......ggg....', '......g......'] },
  { name: 'Sailboat', map: [
    '......w.......', '......ww......', '......www.....', '......wwww....', '......wwwww...',
    '.....rwwwwww..', '....rrwwwwwww.', '...rrrw.......', '..rrrrw.......', 'nnnnnnnnnnnnnn',
    '.nnnnnnnnnnnn.', '..nnnnnnnnnn..', 'bbbbbbbbbbbbbb', 'cbbbcbbbbcbbbc'] },
];

const PALETTES = [
  ['r', 'y', 'o', 'n', 'w'], ['b', 'c', 'w', 'p', 'x'], ['g', 'd', 'y', 'n', 'w'],
  ['k', 'p', 'w', 'm', 'c'], ['o', 'y', 'r', 'x', 'w'], ['c', 'b', 'g', 'y', 'x'],
  ['m', 'k', 'y', 'b', 'w'], ['t', 'n', 'x', 'w', 'o'],
];

const GENS = [
  ['Bands',   (x, y, P) => Math.floor(y / P.bw)],
  ['Slope',   (x, y, P) => Math.floor((x + y) / P.bw)],
  ['Checks',  (x, y, P) => Math.floor(x / P.bw) + Math.floor(y / P.bw)],
  ['Ripple',  (x, y, P) => Math.floor(Math.hypot(x - P.cx, y - P.cy) / P.bw)],
  ['Gem',     (x, y, P) => Math.floor((Math.abs(x - P.cx) + Math.abs(y - P.cy)) / P.bw)],
  ['Swirl',   (x, y, P) => Math.floor((Math.atan2(y - P.cy, x - P.cx) / (2 * Math.PI) + 1) * P.k * 2 + Math.hypot(x - P.cx, y - P.cy) / P.bw)],
  ['Burst',   (x, y, P) => Math.hypot(x - P.cx, y - P.cy) < P.R * 0.38 ? 0 : 1 + Math.floor((Math.atan2(y - P.cy, x - P.cx) / (2 * Math.PI) + 1) * P.rays)],
  ['Lava',    (x, y, P) => Math.floor(((Math.sin(x * P.a) + Math.sin(y * P.b) + Math.sin((x + y) * P.c) + 3) / 6) * P.k * 0.999 * 2)],
  ['Waves',   (x, y, P) => Math.floor((y + Math.sin(x * P.a * 1.5) * P.amp) / P.bw)],
  ['Zigzag',  (x, y, P) => Math.floor((y + Math.abs((x % (2 * P.zz)) - P.zz)) / P.bw)],
];


export const LEVEL_COUNT = 100;
export const TIER_SIZE = 5;

// Difficulty steps up every 5 levels.
export function tierParams(t) {
  return {
    size: Math.min(30, 10 + Math.round(t * 1.25)),  // board edge: 10, 11, 13, 14, 15 ... 30
    colors: Math.min(8, 3 + Math.floor((t + 1) / 2)), // 3, 4, 4, 5, 5 ... 8
    cols: t < 2 ? 3 : t < 8 ? 4 : 5,                 // shooter columns
    slots: t < 10 ? 5 : t < 15 ? 4 : 3,              // holding slots
  };
}

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const pick = (R, arr) => arr[Math.floor(R() * arr.length)];
function shuffle(R, arr) {
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr;
}

// ---- level schedule ---------------------------------------------------------

const keyCount = keys => new Set(keys.filter(Boolean)).size;
const SPRITE_INFO = SPRITES.map(sp => {
  const w = Math.max(...sp.map.map(r => r.length)), h = sp.map.length;
  return { w, h, colors: new Set(sp.map.join('').replace(/\./g, '')).size + (sp.bg ? 1 : 0) };
});
const SCENE_COLORS = SCENES.map(sc => keyCount(renderScene(sc, 32, 32)));

// Decides, once, what each level shows. Every 5 levels: 3-4 pictures + 1 pattern.
const SCHEDULE = (() => {
  const R = rng(4242);
  const uses = new Map();
  const out = [];
  let lastGen = -1;
  for (let n = 0; n < LEVEL_COUNT; n++) {
    const t = Math.floor(n / TIER_SIZE), P = tierParams(t), i = n % TIER_SIZE;
    if (n === 0 || i === 2) {
      let gen;
      // plain bands/checks only in early tiers
      do { gen = n === 0 ? 0 : Math.floor(R() * GENS.length); } while (n > 0 && (gen === lastGen || (t >= 4 && (gen === 0 || gen === 2))));
      lastGen = gen;
      out.push({ kind: 'pattern', gen, size: P.size, colors: n === 0 ? 2 : Math.min(P.colors, 6) });
      continue;
    }
    const cands = [];
    SPRITE_INFO.forEach((info, idx) => {
      const scale = Math.max(info.w, info.h) * 2 <= P.size ? 2 : 1;
      const w = info.w * scale, h = info.h * scale;
      if (Math.max(w, h) > P.size + 4) return;
      const needBg = !SPRITES[idx].bg && info.colors < P.colors;
      const colors = info.colors + (needBg ? 1 : 0);
      if (colors > P.colors) return;
      if (!needBg && Math.max(w, h) < P.size - 3) return; // too small for this tier
      if (Math.max(w, h) < P.size * 0.6) return;        // would float in a sea of background
      cands.push({ kind: 'sprite', idx, scale, bg: needBg, colors });
    });
    if (P.size >= 13) SCENES.forEach((sc, idx) => {
      if (SCENE_COLORS[idx] > Math.min(8, P.colors + 1)) return;
      cands.push({ kind: 'scene', idx, colors: SCENE_COLORS[idx] });
    });
    let best = null, bestScore = Infinity;
    for (const c of cands) {
      const id = c.kind + c.idx, u = uses.get(id) || 0;
      const score = Math.abs(P.colors - c.colors) + u * 4 + (c.kind === 'scene' ? -1.5 : t >= 4 ? 3 : 0) + R() * 0.8;
      if (score < bestScore) { bestScore = score; best = c; }
    }
    const id = best.kind + best.idx, u = uses.get(id) || 0;
    uses.set(id, u + 1);
    out.push({ ...best, size: P.size, mirror: u % 2 === 1 });
  }
  return out;
})();

// ---- grid building ----------------------------------------------------------

function keysToGrid(keys, w, h, name) {
  const colorKeys = [];
  const cells = new Int16Array(w * h).fill(-1);
  for (let i = 0; i < w * h; i++) {
    const k = keys[i];
    if (!k) continue;
    let ci = colorKeys.indexOf(k);
    if (ci < 0) { ci = colorKeys.length; colorKeys.push(k); }
    cells[i] = ci;
  }
  return { name, w, h, cells, colors: colorKeys.map(k => PAL[k]) };
}

function spriteGrid(sp, scale, bg, minSize, mirror) {
  const w0 = Math.max(...sp.map.map(r => r.length)), h0 = sp.map.length;
  const sw = w0 * scale, sh = h0 * scale;
  const w = bg ? Math.max(sw, minSize) : sw, h = bg ? Math.max(sh, minSize) : sh;
  const ox = Math.floor((w - sw) / 2), oy = Math.floor((h - sh) / 2);
  const keys = new Array(w * h).fill(bg || null);
  for (let y = 0; y < h0; y++) for (let x = 0; x < w0; x++) {
    const ch = sp.map[y][mirror ? w0 - 1 - x : x] || '.';
    const k = ch === '.' ? (bg || null) : ch;
    for (let sy = 0; sy < scale; sy++) for (let sx = 0; sx < scale; sx++)
      keys[(oy + y * scale + sy) * w + ox + x * scale + sx] = k;
  }
  return keysToGrid(keys, w, h, sp.name);
}

function procGrid(n, gi, size, k, R) {
  const w = size, h = size + (R() < 0.4 ? 2 : 0);
  const pal = shuffle(R, pick(R, PALETTES).slice()).slice(0, k);
  const [gname, fn] = GENS[gi];
  const P = {
    k, cx: (w - 1) / 2, cy: (h - 1) / 2, R: Math.min(w, h) / 2,
    bw: Math.max(1, Math.min(Math.floor(size / (k + 1)), Math.round(size / (4 + R() * 4)))),
    rays: (k - 1) * (2 + Math.floor(R() * 3)) || 6,
    a: 0.2 + R() * 0.4, b: 0.2 + R() * 0.4, c: 0.1 + R() * 0.3,
    amp: 1 + R() * 3, zz: 2 + Math.floor(R() * 4),
  };
  const mask = n < 10 ? 0 : Math.floor(R() * 4); // 0,1 none; 2 circle; 3 diamond
  const keys = new Array(w * h).fill(null);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = x - P.cx, dy = y - P.cy;
    if (mask === 2 && Math.hypot(dx, dy) > P.R + 0.3) continue;
    if (mask === 3 && Math.abs(dx) + Math.abs(dy) > P.R * 1.35) continue;
    let v = fn(x, y, P);
    if (gname === 'Burst' && k > 1) v = v === 0 ? 0 : 1 + ((v - 1) % (k - 1));
    keys[y * w + x] = pal[((v % k) + k) % k];
  }
  return keysToGrid(keys, w, h, gname);
}

export function levelGrid(n) {
  const e = SCHEDULE[n];
  const R = rng(n * 7919 + 13);
  if (e.kind === 'pattern') return procGrid(n, e.gen, e.size, e.colors, R);
  if (e.kind === 'scene') {
    const sc = SCENES[e.idx];
    return keysToGrid(renderScene(sc, e.size, e.size, e.mirror), e.size, e.size, sc.name);
  }
  const sp = SPRITES[e.idx];
  let bg = sp.bg || null;
  if (e.bg) {
    const used = new Set(sp.map.join('').split(''));
    bg = pick(R, ['b', 'c', 'w', 'x', 'k', 'g', 'y', 's', 'p', 'L', 'G', 'P'].filter(c => !used.has(c)));
  }
  return spriteGrid(sp, e.scale, bg, e.size, e.mirror);
}

// ---- line-of-sight helpers (shared with the game) ----------------------------
// side 0 = bottom (looks up a column), 1 = right (looks left along a row),
// 2 = top (looks down a column), 3 = left (looks right along a row)
export function firstCell(cells, w, h, side, idx) {
  if (side === 0) { for (let r = h - 1; r >= 0; r--) if (cells[r * w + idx] >= 0) return r * w + idx; }
  else if (side === 1) { for (let c = w - 1; c >= 0; c--) if (cells[idx * w + c] >= 0) return idx * w + c; }
  else if (side === 2) { for (let r = 0; r < h; r++) if (cells[r * w + idx] >= 0) return r * w + idx; }
  else { for (let c = 0; c < w; c++) if (cells[idx * w + c] >= 0) return idx * w + c; }
  return -1;
}

export function exposedColors(cells, w, h) {
  const set = new Set();
  for (let s = 0; s < 4; s++) {
    const n = s % 2 === 0 ? w : h;
    for (let i = 0; i < n; i++) { const c = firstCell(cells, w, h, s, i); if (c >= 0) set.add(cells[c]); }
  }
  return set;
}

// One full loop in belt order. Mutates cells. Returns {shots, ammo}.
function simLoop(cells, w, h, color, ammo) {
  let shots = 0;
  const lane = (s, i) => {
    if (ammo <= 0) return;
    const c = firstCell(cells, w, h, s, i);
    if (c >= 0 && cells[c] === color) { cells[c] = -1; ammo--; shots++; }
  };
  for (let c = 0; c < w; c++) lane(0, c);
  for (let r = h - 1; r >= 0; r--) lane(1, r);
  for (let c = w - 1; c >= 0; c--) lane(2, c);
  for (let r = 0; r < h; r++) lane(3, r);
  return { shots, ammo };
}

// Greedy sequential playthrough: proves a level can be cleared and measures how
// much it leaned on the holding slots (a rough difficulty score).
function solve(g, columns, slotCount) {
  const { w, h } = g;
  const cells = Int16Array.from(g.cells);
  let left = cells.reduce((a, v) => a + (v >= 0), 0);
  const cols = columns.map(c => c.map(s => ({ ...s })));
  const slots = [];
  let maxSlots = 0, parks = 0;
  for (let step = 0; step < 5000 && left > 0; step++) {
    let best = null, bestShots = 0;
    slots.forEach((s, i) => {
      const r = simLoop(cells.slice(), w, h, s.color, s.ammo);
      if (r.shots > bestShots) { bestShots = r.shots; best = { slot: i }; }
    });
    cols.forEach((c, j) => {
      if (!c.length) return;
      const r = simLoop(cells.slice(), w, h, c[0].color, c[0].ammo);
      if (r.ammo > 0 && slots.length >= slotCount) return;
      if (r.shots > bestShots) { bestShots = r.shots; best = { col: j }; }
    });
    if (best) {
      const sh = best.slot !== undefined ? slots[best.slot] : cols[best.col][0];
      const r = simLoop(cells, w, h, sh.color, sh.ammo);
      left -= r.shots; sh.ammo = r.ammo;
      if (best.slot !== undefined) { if (sh.ammo === 0) slots.splice(best.slot, 1); }
      else { cols[best.col].shift(); if (sh.ammo > 0) slots.push(sh); }
    } else {
      if (slots.length >= slotCount) return { ok: false };
      const j = cols.findIndex(c => c.length > 0);
      if (j < 0) return { ok: false };
      slots.push(cols[j].shift()); parks++;
    }
    maxSlots = Math.max(maxSlots, slots.length);
  }
  return { ok: left === 0, score: maxSlots + parks * 0.5 };
}

export function buildLevel(n) {
  const g = levelGrid(n);
  const t = Math.floor(n / TIER_SIZE), TP = tierParams(t);
  const R = rng(n * 104729 + 7);
  const counts = new Array(g.colors.length).fill(0);
  for (const v of g.cells) if (v >= 0) counts[v]++;
  const total = counts.reduce((a, b) => a + b, 0);
  const span = g.w + g.h;
  const sizes = span <= 22 ? [5, 10, 10, 15, 20] : span <= 34 ? [10, 15, 20, 30] : [10, 20, 30, 40, 40];

  const shooters = [];
  counts.forEach((cnt, color) => {
    while (cnt > 0) {
      let a = Math.min(pick(R, sizes), cnt);
      if (cnt - a > 0 && cnt - a < 4) a = cnt;
      shooters.push({ color, ammo: a });
      cnt -= a;
    }
  });
  const nc = Math.max(3, Math.min(TP.cols, Math.floor(shooters.length / 2)));

  // Try several shuffles; early tiers keep the easiest solvable one, later tiers the hardest.
  let slots = TP.slots, columns = null;
  for (; slots <= 6 && !columns; slots++) {
    let bestScore = null;
    for (let attempt = 0, found = 0; attempt < 40 && found < 5; attempt++) {
      const order = shuffle(R, shooters.slice());
      const cols = Array.from({ length: nc }, () => []);
      order.forEach((s, i) => cols[i % nc].push({ ...s }));
      const res = solve(g, cols, slots);
      if (!res.ok) continue;
      found++;
      const better = bestScore === null || (t < 2 ? res.score < bestScore : res.score > bestScore);
      if (better) { bestScore = res.score; columns = cols; }
    }
    if (columns) break;
  }
  if (!columns) { // practically unreachable: deal in color order
    columns = Array.from({ length: nc }, () => []);
    shooters.forEach((s, i) => columns[i % nc].push({ ...s }));
  }
  return { n, tier: t, name: g.name, w: g.w, h: g.h, cells: g.cells, colors: g.colors, columns, slots, capacity: 5, total };
}

export const _internal = { solve };
