import { buildLevel, levelGrid, LEVEL_COUNT, TIER_SIZE, tierParams, firstCell, exposedColors } from './levels.js';

const $ = s => document.querySelector(s);
const canvas = $('#game');
const ctx = canvas.getContext('2d');
const SAVE_KEY = 'chromaloop.v1';

// ---- save -------------------------------------------------------------------
let save = (() => {
  try { return { unlocked: 1, stars: {}, sound: true, ...JSON.parse(localStorage.getItem(SAVE_KEY)) }; }
  catch { return { unlocked: 1, stars: {}, sound: true }; }
})();
const persist = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch {} };

// ---- audio ------------------------------------------------------------------
let actx = null, lastHit = 0;
function tone(freq, dur = 0.06, type = 'square', vol = 0.04, slide = 0) {
  if (!save.sound) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(actx.destination); o.start(t); o.stop(t + dur + 0.02);
  } catch {}
}
const sfx = {
  hit() { const n = performance.now(); if (n - lastHit < 28) return; lastHit = n; tone(500 + Math.random() * 500, 0.04, 'square', 0.025); },
  launch() { tone(220, 0.12, 'triangle', 0.08, 300); },
  slot() { tone(330, 0.1, 'sine', 0.08, -120); },
  deny() { tone(120, 0.15, 'sawtooth', 0.05); },
  empty() { tone(700, 0.08, 'sine', 0.05, 400); },
  win() { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => tone(f, 0.18, 'triangle', 0.08), i * 110)); },
  lose() { [392, 330, 262].forEach((f, i) => setTimeout(() => tone(f, 0.22, 'triangle', 0.08), i * 150)); },
};
const buzz = ms => { try { navigator.vibrate && navigator.vibrate(ms); } catch {} };

// ---- color helpers ------------------------------------------------------------
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  const f = v => Math.max(0, Math.min(255, Math.round(amt < 0 ? v * (1 + amt) : v + (255 - v) * amt)));
  return `rgb(${f(r)},${f(g)},${f(b)})`;
}
const lum = hex => { const n = parseInt(hex.slice(1), 16); return (0.3 * (n >> 16) + 0.59 * ((n >> 8) & 255) + 0.11 * (n & 255)) / 255; };

// ---- state --------------------------------------------------------------------
let VW = 0, VH = 0, DPR = 1;
let G = {};     // geometry
let S = null;   // level state
let time = 0;

function startLevel(n) {
  n = Math.max(0, Math.min(LEVEL_COUNT - 1, n));
  const L = buildLevel(n);
  S = {
    n, L, w: L.w, h: L.h, cells: Int16Array.from(L.cells), colors: L.colors,
    hi: L.colors.map(c => shade(c, 0.35)), lo: L.colors.map(c => shade(c, -0.3)),
    columns: L.columns.map(c => c.map(s => ({ ...s }))),
    slots: new Array(L.slots).fill(null),
    belt: [], pending: [], projectiles: [], particles: [],
    remaining: L.total, status: 'play', endTimer: 0, maxSlotsUsed: 0, ghost: new Map(),
  };
  save.current = n; persist();
  $('#levelLabel').textContent = `Level ${n + 1}`;
  $('#levelName').textContent = L.name;
  hideModal();
  layout();
}

// ---- layout -------------------------------------------------------------------
function layout() {
  VW = window.innerWidth; VH = window.innerHeight;
  DPR = Math.min(window.devicePixelRatio || 1, 3);
  canvas.width = Math.round(VW * DPR); canvas.height = Math.round(VH * DPR);
  canvas.style.width = VW + 'px'; canvas.style.height = VH + 'px';
  if (!S) return;
  const hudB = $('#hud').getBoundingClientRect().bottom + 6;
  const avail = VH - hudB;
  const size = Math.min(VW - 12, avail * 0.6, 640);
  const rx = (VW - size) / 2, ry = hudB;
  const bw = size * 0.085;
  const x0 = rx + bw / 2, x1 = rx + size - bw / 2, y0 = ry + bw / 2, y1 = ry + size - bw / 2;
  const R = bw * 1.25;
  const pad = bw * 0.55;
  const iw = size - 2 * bw - 2 * pad, ih = iw;
  const cell = Math.min(iw / S.w, ih / S.h);
  const gx = rx + (size - cell * S.w) / 2, gy = ry + (size - cell * S.h) / 2;
  const straightH = x1 - x0 - 2 * R, straightV = y1 - y0 - 2 * R, arc = Math.PI * R / 2;
  const segs = [straightH, arc, straightV, arc, straightH, arc, straightV];
  const total = segs.reduce((a, b) => a + b, 0);
  const shR = bw * 0.62;

  // slots + queue
  const below = ry + size;
  const slotSize = Math.min((VW - 24) / S.slots.length * 0.82, 64, (VH - below) * 0.17);
  const slotGap = slotSize * 0.22;
  const slotY = below + slotSize * 0.45 + 8;
  const slotX0 = VW / 2 - (S.slots.length * slotSize + (S.slots.length - 1) * slotGap) / 2 + slotSize / 2;
  const nc = S.columns.length;
  const qTop = slotY + slotSize * 0.5 + 10;
  const qR = Math.min(slotSize * 0.5, (VH - qTop - 10) / 6.2, (VW - 30) / nc / 2.6);
  const qGap = qR * 2.6;
  const qX0 = VW / 2 - (nc - 1) * qGap / 2;
  G = { size, rx, ry, bw, x0, x1, y0, y1, R, cell, gx, gy, segs, total, shR,
        slotSize, slotGap, slotY, slotX0, qTop, qR, qGap, qX0,
        speed: total / (4.2 + (S.w + S.h) / 22) };
}

const slotPos = i => ({ x: G.slotX0 + i * (G.slotSize + G.slotGap), y: G.slotY });
const queuePos = (col, row) => ({ x: G.qX0 + col * G.qGap, y: G.qTop + G.qR * 1.1 + row * G.qR * 2.15 });
const entryPos = () => pathPoint(0);
const exitPos = () => pathPoint(1);

// u in [0,1] along the loop: bottom→right side up→top leftwards→left side down.
function pathPoint(u) {
  let d = Math.max(0, Math.min(1, u)) * G.total;
  const { x0, x1, y0, y1, R, segs } = G;
  for (let k = 0; k < segs.length; k++) {
    const L = segs[k];
    if (d <= L || k === segs.length - 1) {
      const t = L > 0 ? Math.min(1, d / L) : 0;
      switch (k) {
        case 0: return { x: x0 + R + t * L, y: y1, side: 0, ang: -Math.PI / 2 };
        case 1: { const a = Math.PI / 2 - t * Math.PI / 2; return { x: x1 - R + R * Math.cos(a), y: y1 - R + R * Math.sin(a), side: -1, ang: -Math.PI / 2 - t * Math.PI / 2 }; }
        case 2: return { x: x1, y: y1 - R - t * L, side: 1, ang: Math.PI };
        case 3: { const a = -t * Math.PI / 2; return { x: x1 - R + R * Math.cos(a), y: y0 + R + R * Math.sin(a), side: -1, ang: Math.PI - t * Math.PI / 2 }; }
        case 4: return { x: x1 - R - t * L, y: y0, side: 2, ang: Math.PI / 2 };
        case 5: { const a = -Math.PI / 2 - t * Math.PI / 2; return { x: x0 + R + R * Math.cos(a), y: y0 + R + R * Math.sin(a), side: -1, ang: Math.PI / 2 - t * Math.PI / 2 }; }
        case 6: return { x: x0, y: y0 + R + t * L, side: 3, ang: 0 };
      }
    }
    d -= L;
  }
}

function laneAt(p) {
  if (p.side === 0 || p.side === 2) {
    const c = Math.floor((p.x - G.gx) / G.cell);
    return c >= 0 && c < S.w ? c : -1;
  }
  if (p.side === 1 || p.side === 3) {
    const r = Math.floor((p.y - G.gy) / G.cell);
    return r >= 0 && r < S.h ? r : -1;
  }
  return -1;
}
const cellCenter = i => ({ x: G.gx + (i % S.w + 0.5) * G.cell, y: G.gy + (Math.floor(i / S.w) + 0.5) * G.cell });

// ---- actions ------------------------------------------------------------------
function launch(sh, from) {
  if (S.belt.length + S.pending.length >= S.L.capacity) {
    S.capShake = 0.4; sfx.deny(); buzz(30);
    return false;
  }
  const e = entryPos();
  sh.anim = { fx: from.x, fy: from.y, tx: e.x, ty: e.y, t: 0, dur: 0.28 };
  sh.lane = null;
  S.pending.push(sh);
  sfx.launch(); buzz(10);
  return true;
}

function onTap(x, y) {
  if (!S || S.status !== 'play') return;
  for (let i = 0; i < S.slots.length; i++) {
    const sh = S.slots[i]; if (!sh) continue;
    const p = slotPos(i);
    if (Math.abs(x - p.x) < G.slotSize * 0.6 && Math.abs(y - p.y) < G.slotSize * 0.6) {
      if (launch(sh, sh.anim ? lerpAnim(sh.anim) : p)) S.slots[i] = null;
      return;
    }
  }
  for (let c = 0; c < S.columns.length; c++) {
    if (!S.columns[c].length) continue;
    const p = queuePos(c, 0);
    if (Math.hypot(x - p.x, y - p.y) < G.qR * 1.35) {
      const sh = S.columns[c][0];
      if (launch(sh, p)) { S.columns[c].shift(); S.colAnim = S.colAnim || {}; S.colAnim[c] = 1; }
      return;
    }
  }
}

const ease = t => 1 - Math.pow(1 - t, 3);
const lerpAnim = a => { const t = ease(Math.min(1, a.t / a.dur)); return { x: a.fx + (a.tx - a.fx) * t, y: a.fy + (a.ty - a.fy) * t - Math.sin(t * Math.PI) * G.bw * 0.8 }; };

function burst(x, y, color, n, spd, size) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, v = spd * (0.4 + Math.random());
    S.particles.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - spd * 0.3, life: 0.5 + Math.random() * 0.3, t: 0, color, size: size * (0.5 + Math.random() * 0.6) });
  }
}

// Describe what gets harder when the next level starts a new tier.
function levelUpText(next) {
  if (next >= LEVEL_COUNT || next % TIER_SIZE !== 0) return '';
  const a = tierParams(next / TIER_SIZE - 1), b = tierParams(next / TIER_SIZE), ch = [];
  if (b.size > a.size) ch.push(`bigger pictures (${b.size}×${b.size})`);
  if (b.colors > a.colors) ch.push(`up to ${b.colors} colors`);
  if (b.cols > a.cols) ch.push(`${b.cols} shooter columns`);
  if (b.slots < a.slots) ch.push(`only ${b.slots} holding slots`);
  return ch.length ? `\n\nLevel up! Next: ${ch.join(', ')}.` : '';
}

function endLevel(won, reason) {
  if (S.status !== 'play') return;
  S.status = won ? 'won' : 'lost';
  setTimeout(() => {
    if (won) {
      const stars = S.maxSlotsUsed <= 1 ? 3 : S.maxSlotsUsed <= S.slots.length - 2 ? 2 : 1;
      save.stars[S.n] = Math.max(save.stars[S.n] || 0, stars);
      save.unlocked = Math.max(save.unlocked, Math.min(LEVEL_COUNT, S.n + 2));
      persist(); sfx.win(); buzz([20, 40, 20]);
      showModal('Cleared!', `${S.L.name} complete.${levelUpText(S.n + 1)}`, stars, S.n + 1 < LEVEL_COUNT ? 'Next' : 'Replay',
        () => startLevel(S.n + 1 < LEVEL_COUNT ? S.n + 1 : S.n));
    } else {
      sfx.lose(); buzz(80);
      showModal('Stuck!', reason, 0, 'Retry', () => startLevel(S.n));
    }
  }, won ? 500 : 700);
}

// ---- update -------------------------------------------------------------------
function update(dt) {
  if (!S) return;
  const du = G.speed * dt / G.total;
  const spacingU = (G.shR * 2.25) / G.total;

  // pending → belt
  for (const sh of S.pending) if (sh.anim) sh.anim.t += dt;
  if (S.pending.length) {
    const sh = S.pending[0];
    const clear = S.belt.every(b => b.u > spacingU);
    if (sh.anim.t >= sh.anim.dur && clear) {
      S.pending.shift(); sh.anim = null; sh.u = 0; sh.lane = null; sh.fired = 0;
      S.belt.push(sh);
    }
  }

  // belt movement + firing
  for (let i = S.belt.length - 1; i >= 0; i--) {
    const sh = S.belt[i];
    sh.u += du;
    const p = pathPoint(sh.u);
    sh.x = p.x; sh.y = p.y; sh.ang = p.ang;
    const lane = laneAt(p);
    const key = lane >= 0 ? p.side * 1000 + lane : -1;
    if (key !== sh.lane) {
      sh.lane = key;
      if (lane >= 0 && sh.ammo > 0 && S.status === 'play') {
        const c = firstCell(S.cells, S.w, S.h, p.side, lane);
        if (c >= 0 && S.cells[c] === sh.color) {
          S.cells[c] = -1; S.remaining--; sh.ammo--; sh.recoil = 1;
          S.ghost.set(c, sh.color);
          S.projectiles.push({ fx: p.x, fy: p.y, cell: c, color: sh.color, t: 0, dur: 0.16 });
        }
      }
    }
    if (sh.recoil) sh.recoil = Math.max(0, sh.recoil - dt * 8);
    if (sh.ammo <= 0) {
      S.belt.splice(i, 1);
      burst(p.x, p.y, S.colors[sh.color], 14, G.bw * 4, G.bw * 0.22);
      sfx.empty();
      continue;
    }
    if (sh.u >= 1) {
      S.belt.splice(i, 1);
      const j = S.slots.indexOf(null);
      if (j < 0) { S.overflow = { sh, x: p.x, y: p.y }; endLevel(false, 'No room left in the holding slots.'); continue; }
      const sp = slotPos(j);
      sh.anim = { fx: p.x, fy: p.y, tx: sp.x, ty: sp.y, t: 0, dur: 0.35 };
      S.slots[j] = sh;
      S.maxSlotsUsed = Math.max(S.maxSlotsUsed, S.slots.filter(Boolean).length);
      sfx.slot();
    }
  }
  for (const sh of S.slots) if (sh && sh.anim) { sh.anim.t += dt; if (sh.anim.t >= sh.anim.dur) sh.anim = null; }

  // projectiles
  for (let i = S.projectiles.length - 1; i >= 0; i--) {
    const pr = S.projectiles[i];
    pr.t += dt;
    if (pr.t >= pr.dur) {
      S.projectiles.splice(i, 1);
      S.ghost.delete(pr.cell);
      const c = cellCenter(pr.cell);
      burst(c.x, c.y, S.colors[pr.color], 4, G.cell * 5, G.cell * 0.45);
      sfx.hit();
    }
  }
  for (let i = S.particles.length - 1; i >= 0; i--) {
    const q = S.particles[i];
    q.t += dt; q.x += q.vx * dt; q.y += q.vy * dt; q.vy += 900 * dt * (G.bw / 40);
    if (q.t >= q.life) S.particles.splice(i, 1);
  }
  if (S.capShake) S.capShake = Math.max(0, S.capShake - dt);
  if (S.colAnim) for (const k in S.colAnim) S.colAnim[k] = Math.max(0, S.colAnim[k] - dt * 5);

  // win / stuck
  if (S.status === 'play') {
    if (S.remaining === 0 && !S.projectiles.length) endLevel(true);
    else if (S.remaining > 0 && !S.belt.length && !S.pending.length) {
      const exp = exposedColors(S.cells, S.w, S.h);
      const avail = [...S.slots.filter(Boolean), ...S.columns.filter(c => c.length).map(c => c[0])];
      const canFire = avail.some(s => exp.has(s.color));
      const canPark = S.slots.includes(null) && S.columns.some(c => c.length);
      if (!canFire && !canPark) endLevel(false, 'None of your shooters can reach a matching pixel.');
    }
  }
}

// ---- drawing ------------------------------------------------------------------
function rr(x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }

function drawShooter(x, y, r, color, ammo, ang = null, alpha = 1, recoil = 0, dim = false) {
  const hex = S.colors[color];
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  // shadow
  ctx.fillStyle = 'rgba(0,0,0,.28)';
  ctx.beginPath(); ctx.ellipse(0, r * 0.9, r * 0.85, r * 0.28, 0, 0, Math.PI * 2); ctx.fill();
  // nozzle
  if (ang !== null) {
    ctx.save(); ctx.rotate(ang);
    ctx.fillStyle = shade(hex, -0.45);
    rr(r * (0.55 - recoil * 0.15), -r * 0.24, r * 0.62, r * 0.48, r * 0.12); ctx.fill();
    ctx.restore();
  }
  // body
  const grad = ctx.createLinearGradient(0, -r, 0, r);
  grad.addColorStop(0, shade(hex, dim ? 0 : 0.25)); grad.addColorStop(1, shade(hex, -0.35));
  ctx.fillStyle = grad;
  rr(-r, -r * 0.92, r * 2, r * 1.9, r * 0.62); ctx.fill();
  ctx.strokeStyle = shade(hex, -0.55); ctx.lineWidth = Math.max(1, r * 0.08); ctx.stroke();
  // little ear-tufts
  ctx.fillStyle = shade(hex, 0.1);
  ctx.beginPath(); ctx.arc(-r * 0.55, -r * 0.9, r * 0.2, 0, Math.PI * 2); ctx.arc(r * 0.55, -r * 0.9, r * 0.2, 0, Math.PI * 2); ctx.fill();
  // gloss
  ctx.fillStyle = 'rgba(255,255,255,.35)';
  ctx.beginPath(); ctx.ellipse(-r * 0.4, -r * 0.5, r * 0.32, r * 0.18, -0.5, 0, Math.PI * 2); ctx.fill();
  // eyes
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(-r * 0.32, -r * 0.2, r * 0.17, 0, Math.PI * 2); ctx.arc(r * 0.32, -r * 0.2, r * 0.17, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#1d1b2c';
  ctx.beginPath(); ctx.arc(-r * 0.29, -r * 0.17, r * 0.085, 0, Math.PI * 2); ctx.arc(r * 0.35, -r * 0.17, r * 0.085, 0, Math.PI * 2); ctx.fill();
  // ammo
  ctx.font = `900 ${Math.round(r * 0.78)}px system-ui, -apple-system, "Segoe UI", sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round'; ctx.lineWidth = r * 0.2; ctx.strokeStyle = 'rgba(20,18,35,.85)';
  ctx.strokeText(ammo, 0, r * 0.42);
  ctx.fillStyle = '#fff'; ctx.fillText(ammo, 0, r * 0.42);
  if (dim) { ctx.fillStyle = 'rgba(30,26,50,.3)'; rr(-r, -r * 1.1, r * 2, r * 2.1, r * 0.62); ctx.fill(); }
  ctx.restore();
}

function drawBelt() {
  const { x0, y0, x1, y1, R, bw, rx, ry, size } = G;
  // panel
  ctx.fillStyle = '#2a2440';
  rr(rx - 4, ry - 4, size + 8, size + 8, R + bw * 0.6); ctx.fill();
  // track
  ctx.lineWidth = bw + 6; ctx.strokeStyle = '#ffb347';
  rr(x0, y0, x1 - x0, y1 - y0, R); ctx.stroke();
  ctx.lineWidth = bw; ctx.strokeStyle = '#3d3560';
  rr(x0, y0, x1 - x0, y1 - y0, R); ctx.stroke();
  // inner board
  ctx.fillStyle = '#8a82a8';
  rr(rx + bw + 3, ry + bw + 3, size - 2 * bw - 6, size - 2 * bw - 6, R * 0.5); ctx.fill();
  // moving chevrons
  const step = bw * 1.7, off = (time * G.speed) % step;
  ctx.strokeStyle = 'rgba(255,255,255,.16)'; ctx.lineWidth = bw * 0.12; ctx.lineCap = 'round';
  for (let d = off; d < G.total; d += step) {
    const p = pathPoint(d / G.total), q = pathPoint(Math.min(1, (d + 1) / G.total));
    const a = Math.atan2(q.y - p.y, q.x - p.x), s = bw * 0.18;
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(a);
    ctx.beginPath(); ctx.moveTo(-s, -s * 1.3); ctx.lineTo(s * 0.4, 0); ctx.lineTo(-s, s * 1.3); ctx.stroke();
    ctx.restore();
  }
  // gate on the unused bottom-left arc: shows belt capacity
  const gx0 = x0 + R - R * Math.SQRT1_2, gy0 = y1 - R + R * Math.SQRT1_2;
  ctx.fillStyle = '#ffb347';
  ctx.beginPath(); ctx.arc(gx0, gy0, bw * 0.72, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#2a2440';
  ctx.beginPath(); ctx.arc(gx0, gy0, bw * 0.56, 0, Math.PI * 2); ctx.fill();
  const used = S.belt.length + S.pending.length, shake = S.capShake ? Math.sin(time * 60) * bw * 0.15 : 0;
  ctx.font = `800 ${Math.round(bw * 0.42)}px system-ui, sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = S.capShake ? '#ff6b6b' : used >= S.L.capacity ? '#ffb347' : '#e9e4ff';
  ctx.fillText(`${used}/${S.L.capacity}`, gx0 + shake, gy0);
}

function drawGrid() {
  const { gx, gy, cell } = G;
  const gap = cell > 8 ? 1 : 0.5;
  const hl = Math.max(1, cell * 0.22);
  for (let r = 0; r < S.h; r++) for (let c = 0; c < S.w; c++) {
    const i = r * S.w + c;
    let v = S.cells[i];
    let ghost = false;
    if (v < 0) { if (!S.ghost.has(i)) continue; v = S.ghost.get(i); ghost = true; }
    const x = gx + c * cell, y = gy + r * cell;
    ctx.fillStyle = S.lo[v]; ctx.fillRect(x + gap * 0.5, y + gap * 0.5, cell - gap, cell - gap);
    ctx.fillStyle = S.colors[v]; ctx.fillRect(x + gap * 0.5, y + gap * 0.5, cell - gap, cell - gap - hl * 0.6);
    ctx.fillStyle = S.hi[v]; ctx.fillRect(x + gap * 0.5, y + gap * 0.5, cell - gap, hl * 0.5);
    if (ghost) { ctx.fillStyle = 'rgba(255,255,255,.5)'; ctx.fillRect(x, y, cell, cell); }
  }
}

function draw() {
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  const bg = ctx.createLinearGradient(0, 0, 0, VH);
  bg.addColorStop(0, '#3a2f63'); bg.addColorStop(1, '#1d1838');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, VW, VH);
  if (!S) return;

  drawBelt();
  drawGrid();

  // slots
  for (let i = 0; i < S.slots.length; i++) {
    const p = slotPos(i), s = G.slotSize;
    ctx.fillStyle = 'rgba(0,0,0,.25)'; rr(p.x - s / 2, p.y - s / 2 + 3, s, s, s * 0.25); ctx.fill();
    ctx.fillStyle = '#4a3f78'; rr(p.x - s / 2, p.y - s / 2, s, s, s * 0.25); ctx.fill();
    ctx.fillStyle = '#3b3263'; rr(p.x - s / 2 + 3, p.y - s / 2 + 3, s - 6, s - 6, s * 0.2); ctx.fill();
  }
  // queue columns
  for (let c = 0; c < S.columns.length; c++) {
    const col = S.columns[c];
    const slide = (S.colAnim && S.colAnim[c]) || 0;
    for (let k = Math.min(col.length, 3) - 1; k >= 0; k--) {
      const p = queuePos(c, k + slide);
      const r = G.qR * (k === 0 ? 1 : 0.92);
      drawShooter(p.x, p.y, r, col[k].color, col[k].ammo, null, 1, 0, k > 0);
    }
    if (col.length > 3) {
      const p = queuePos(c, 2.75);
      ctx.font = `800 ${Math.round(G.qR * 0.5)}px system-ui, sans-serif`;
      ctx.fillStyle = 'rgba(255,255,255,.6)'; ctx.textAlign = 'center';
      ctx.fillText(`+${col.length - 3}`, p.x, p.y + G.qR * 0.9);
    }
  }
  for (const sh of S.slots) if (sh) {
    const p = sh.anim ? lerpAnim(sh.anim) : null;
    const i = S.slots.indexOf(sh), sp = slotPos(i);
    drawShooter(p ? p.x : sp.x, p ? p.y : sp.y, G.slotSize * 0.4, sh.color, sh.ammo);
  }

  // belt shooters (draw later ones first so leaders are on top)
  for (const sh of S.belt) drawShooter(sh.x, sh.y, G.shR, sh.color, sh.ammo, sh.ang, 1, sh.recoil || 0);
  for (const sh of S.pending) {
    const p = lerpAnim(sh.anim);
    drawShooter(p.x, p.y, G.shR, sh.color, sh.ammo, -Math.PI / 2, 0.95);
  }
  if (S.overflow) drawShooter(S.overflow.x, S.overflow.y, G.shR * (1 + 0.1 * Math.sin(time * 20)), S.overflow.sh.color, S.overflow.sh.ammo);

  // projectiles
  for (const pr of S.projectiles) {
    const c = cellCenter(pr.cell), t = pr.t / pr.dur;
    const x = pr.fx + (c.x - pr.fx) * t, y = pr.fy + (c.y - pr.fy) * t;
    const s = Math.max(3, G.cell * 0.55);
    ctx.fillStyle = S.lo[pr.color]; ctx.fillRect(x - s / 2, y - s / 2, s, s);
    ctx.fillStyle = S.colors[pr.color]; ctx.fillRect(x - s / 2 + 1, y - s / 2 + 1, s - 2, s - 2);
  }
  for (const q of S.particles) {
    ctx.globalAlpha = 1 - q.t / q.life;
    ctx.fillStyle = q.color; ctx.fillRect(q.x - q.size / 2, q.y - q.size / 2, q.size, q.size);
  }
  ctx.globalAlpha = 1;

  // progress bar
  const pct = 1 - S.remaining / S.L.total;
  $('#progress').style.width = (pct * 100).toFixed(1) + '%';
}

// ---- loop ---------------------------------------------------------------------
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  time += dt;
  // sub-step so fast belts never skip a lane
  const steps = Math.max(1, Math.ceil((G.speed || 0) * dt / Math.max(2, (G.cell || 4) * 0.5)));
  for (let i = 0; i < steps; i++) update(dt / steps);
  draw();
  requestAnimationFrame(frame);
}

// ---- UI -----------------------------------------------------------------------
function showModal(title, text, stars, btn, action) {
  $('#modalTitle').textContent = title;
  $('#modalText').textContent = text;
  $('#modalStars').textContent = stars ? '★'.repeat(stars) + '☆'.repeat(3 - stars) : '';
  const b = $('#modalBtn'); b.textContent = btn; b.onclick = () => { action(); };
  $('#modal').classList.remove('hidden');
}
function hideModal() { $('#modal').classList.add('hidden'); }

function drawThumb(cv, n) {
  const g = levelGrid(n);
  const sz = 64; cv.width = sz; cv.height = sz;
  const c2 = cv.getContext('2d');
  const cell = sz / Math.max(g.w, g.h);
  const ox = (sz - cell * g.w) / 2, oy = (sz - cell * g.h) / 2;
  for (let i = 0; i < g.cells.length; i++) {
    const v = g.cells[i]; if (v < 0) continue;
    c2.fillStyle = g.colors[v];
    c2.fillRect(ox + (i % g.w) * cell, oy + Math.floor(i / g.w) * cell, Math.ceil(cell), Math.ceil(cell));
  }
}

function openLevels() {
  const grid = $('#levelGrid');
  grid.innerHTML = '';
  for (let n = 0; n < LEVEL_COUNT; n++) {
    const b = document.createElement('button');
    b.className = 'lvl';
    const locked = n >= save.unlocked;
    if (locked) { b.classList.add('locked'); b.innerHTML = `<span class="num">${n + 1}</span><span class="lock">🔒</span>`; }
    else {
      const cv = document.createElement('canvas');
      const st = save.stars[n] || 0;
      b.innerHTML = `<span class="num">${n + 1}</span>`;
      b.appendChild(cv);
      const s = document.createElement('span'); s.className = 'stars';
      s.textContent = st ? '★'.repeat(st) : '';
      b.appendChild(s);
      // render thumbs lazily so the menu opens instantly
      requestIdleCallback ? requestIdleCallback(() => drawThumb(cv, n)) : setTimeout(() => drawThumb(cv, n));
      b.onclick = () => { $('#levels').classList.add('hidden'); startLevel(n); };
    }
    grid.appendChild(b);
  }
  $('#levels').classList.remove('hidden');
  const cur = grid.children[save.current || 0];
  if (cur) cur.scrollIntoView({ block: 'center' });
}
window.requestIdleCallback = window.requestIdleCallback || (fn => setTimeout(fn, 1));

function updateSoundBtn() { $('#btnSound').textContent = save.sound ? '🔊' : '🔇'; }

$('#btnMenu').onclick = openLevels;
$('#btnCloseLevels').onclick = () => $('#levels').classList.add('hidden');
$('#btnRestart').onclick = () => startLevel(S.n);
$('#btnSound').onclick = () => { save.sound = !save.sound; persist(); updateSoundBtn(); };
$('#btnHelp').onclick = () => $('#help').classList.remove('hidden');
$('#btnHelpClose').onclick = () => { $('#help').classList.add('hidden'); save.seenHelp = true; persist(); };

canvas.addEventListener('pointerdown', e => { e.preventDefault(); onTap(e.clientX, e.clientY); });
window.addEventListener('resize', layout);
document.addEventListener('gesturestart', e => e.preventDefault());

updateSoundBtn();
startLevel(Math.min(save.current ?? 0, save.unlocked - 1));
if (!save.seenHelp) $('#help').classList.remove('hidden');
requestAnimationFrame(frame);

// debug hook for automated testing
window.__chroma = { get S() { return S; }, get G() { return G; }, startLevel, onTap, slotPos, queuePos };
