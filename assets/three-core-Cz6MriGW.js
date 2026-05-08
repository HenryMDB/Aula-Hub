/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Ci = { ROTATE: 0, DOLLY: 1, PAN: 2 },
  Ri = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  _h = 0,
  zo = 1,
  vh = 2,
  ml = 1,
  yh = 2,
  An = 3,
  In = 0,
  Ot = 1,
  cn = 2,
  Pn = 0,
  Pi = 1,
  Vo = 2,
  Ho = 3,
  Go = 4,
  bh = 5,
  ii = 100,
  Mh = 101,
  Sh = 102,
  Th = 103,
  Eh = 104,
  Ah = 200,
  wh = 201,
  Rh = 202,
  Ch = 203,
  da = 204,
  pa = 205,
  Ph = 206,
  Lh = 207,
  Ih = 208,
  Dh = 209,
  Nh = 210,
  Uh = 211,
  Fh = 212,
  Oh = 213,
  Bh = 214,
  ma = 0,
  xa = 1,
  ga = 2,
  Ni = 3,
  _a = 4,
  va = 5,
  ya = 6,
  ba = 7,
  xl = 0,
  kh = 1,
  zh = 2,
  Wn = 0,
  Vh = 1,
  Hh = 2,
  Gh = 3,
  Wh = 4,
  Xh = 5,
  qh = 6,
  Yh = 7,
  Wo = "attached",
  jh = "detached",
  gl = 300,
  Ui = 301,
  Fi = 302,
  Ma = 303,
  Sa = 304,
  _r = 306,
  Oi = 1e3,
  ln = 1001,
  fr = 1002,
  Dt = 1003,
  _l = 1004,
  ss = 1005,
  It = 1006,
  ar = 1007,
  Rn = 1008,
  fn = 1009,
  vl = 1010,
  yl = 1011,
  ds = 1012,
  co = 1013,
  oi = 1014,
  nn = 1015,
  li = 1016,
  lo = 1017,
  ho = 1018,
  ps = 1020,
  bl = 35902,
  Ml = 35899,
  Sl = 1021,
  Tl = 1022,
  jt = 1023,
  ms = 1026,
  xs = 1027,
  uo = 1028,
  fo = 1029,
  po = 1030,
  mo = 1031,
  xo = 1033,
  or = 33776,
  cr = 33777,
  lr = 33778,
  hr = 33779,
  Ta = 35840,
  Ea = 35841,
  Aa = 35842,
  wa = 35843,
  Ra = 36196,
  Ca = 37492,
  Pa = 37496,
  La = 37808,
  Ia = 37809,
  Da = 37810,
  Na = 37811,
  Ua = 37812,
  Fa = 37813,
  Oa = 37814,
  Ba = 37815,
  ka = 37816,
  za = 37817,
  Va = 37818,
  Ha = 37819,
  Ga = 37820,
  Wa = 37821,
  Xa = 36492,
  qa = 36494,
  Ya = 36495,
  ja = 36283,
  Ka = 36284,
  Za = 36285,
  Ja = 36286,
  gs = 2300,
  _s = 2301,
  Er = 2302,
  Xo = 2400,
  qo = 2401,
  Yo = 2402,
  Kh = 2500,
  Zh = 0,
  El = 1,
  $a = 2,
  Jh = 3200,
  $h = 3201,
  Al = 0,
  Qh = 1,
  Vn = "",
  gt = "srgb",
  wt = "srgb-linear",
  dr = "linear",
  ot = "srgb",
  fi = 7680,
  jo = 519,
  eu = 512,
  tu = 513,
  nu = 514,
  wl = 515,
  iu = 516,
  su = 517,
  ru = 518,
  au = 519,
  Qa = 35044,
  Ko = "300 es",
  hn = 2e3,
  pr = 2001;
function Rl(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return !0;
  return !1;
}
function vs(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function ou() {
  const s = vs("canvas");
  return (s.style.display = "block"), s;
}
const Zo = {};
function mr(...s) {
  const e = "THREE." + s.shift();
  console.log(e, ...s);
}
function Ue(...s) {
  const e = "THREE." + s.shift();
  console.warn(e, ...s);
}
function Je(...s) {
  const e = "THREE." + s.shift();
  console.error(e, ...s);
}
function ys(...s) {
  const e = s.join(" ");
  e in Zo || ((Zo[e] = !0), Ue(...s));
}
function cu(s, e, t) {
  return new Promise(function (n, i) {
    function r() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
class hi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const i = n[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const Et = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let Jo = 1234567;
const os = Math.PI / 180,
  Bi = 180 / Math.PI;
function Kt() {
  const s = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Et[s & 255] +
    Et[(s >> 8) & 255] +
    Et[(s >> 16) & 255] +
    Et[(s >> 24) & 255] +
    "-" +
    Et[e & 255] +
    Et[(e >> 8) & 255] +
    "-" +
    Et[((e >> 16) & 15) | 64] +
    Et[(e >> 24) & 255] +
    "-" +
    Et[(t & 63) | 128] +
    Et[(t >> 8) & 255] +
    "-" +
    Et[(t >> 16) & 255] +
    Et[(t >> 24) & 255] +
    Et[n & 255] +
    Et[(n >> 8) & 255] +
    Et[(n >> 16) & 255] +
    Et[(n >> 24) & 255]
  ).toLowerCase();
}
function je(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function go(s, e) {
  return ((s % e) + e) % e;
}
function lu(s, e, t, n, i) {
  return n + ((s - e) * (i - n)) / (t - e);
}
function hu(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function cs(s, e, t) {
  return (1 - t) * s + t * e;
}
function uu(s, e, t, n) {
  return cs(s, e, 1 - Math.exp(-t * n));
}
function fu(s, e = 1) {
  return e - Math.abs(go(s, e * 2) - e);
}
function du(s, e, t) {
  return s <= e
    ? 0
    : s >= t
    ? 1
    : ((s = (s - e) / (t - e)), s * s * (3 - 2 * s));
}
function pu(s, e, t) {
  return s <= e
    ? 0
    : s >= t
    ? 1
    : ((s = (s - e) / (t - e)), s * s * s * (s * (s * 6 - 15) + 10));
}
function mu(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function xu(s, e) {
  return s + Math.random() * (e - s);
}
function gu(s) {
  return s * (0.5 - Math.random());
}
function _u(s) {
  s !== void 0 && (Jo = s);
  let e = (Jo += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function vu(s) {
  return s * os;
}
function yu(s) {
  return s * Bi;
}
function bu(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function Mu(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function Su(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function Tu(s, e, t, n, i) {
  const r = Math.cos,
    a = Math.sin,
    o = r(t / 2),
    c = a(t / 2),
    l = r((e + n) / 2),
    h = a((e + n) / 2),
    u = r((e - n) / 2),
    f = a((e - n) / 2),
    d = r((n - e) / 2),
    x = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * h, c * u, c * f, o * l);
      break;
    case "YZY":
      s.set(c * f, o * h, c * u, o * l);
      break;
    case "ZXZ":
      s.set(c * u, c * f, o * h, o * l);
      break;
    case "XZX":
      s.set(o * h, c * x, c * d, o * l);
      break;
    case "YXY":
      s.set(c * d, o * h, c * x, o * l);
      break;
    case "ZYZ":
      s.set(c * x, c * d, o * h, o * l);
      break;
    default:
      Ue(
        "MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
function en(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function it(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Cl = {
  DEG2RAD: os,
  RAD2DEG: Bi,
  generateUUID: Kt,
  clamp: je,
  euclideanModulo: go,
  mapLinear: lu,
  inverseLerp: hu,
  lerp: cs,
  damp: uu,
  pingpong: fu,
  smoothstep: du,
  smootherstep: pu,
  randInt: mu,
  randFloat: xu,
  randFloatSpread: gu,
  seededRandom: _u,
  degToRad: vu,
  radToDeg: yu,
  isPowerOfTwo: bu,
  ceilPowerOfTwo: Mu,
  floorPowerOfTwo: Su,
  setQuaternionFromProperEuler: Tu,
  normalize: it,
  denormalize: en,
};
class oe {
  constructor(e = 0, t = 0) {
    (oe.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = je(this.x, e.x, t.x)), (this.y = je(this.y, e.y, t.y)), this
    );
  }
  clampScalar(e, t) {
    return (this.x = je(this.x, e, t)), (this.y = je(this.y, e, t)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(je(n, e, t));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(je(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * n - a * i + e.x), (this.y = r * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class dn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let c = n[i + 0],
      l = n[i + 1],
      h = n[i + 2],
      u = n[i + 3],
      f = r[a + 0],
      d = r[a + 1],
      x = r[a + 2],
      g = r[a + 3];
    if (o <= 0) {
      (e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = u);
      return;
    }
    if (o >= 1) {
      (e[t + 0] = f), (e[t + 1] = d), (e[t + 2] = x), (e[t + 3] = g);
      return;
    }
    if (u !== g || c !== f || l !== d || h !== x) {
      let m = c * f + l * d + h * x + u * g;
      m < 0 && ((f = -f), (d = -d), (x = -x), (g = -g), (m = -m));
      let p = 1 - o;
      if (m < 0.9995) {
        const R = Math.acos(m),
          _ = Math.sin(R);
        (p = Math.sin(p * R) / _),
          (o = Math.sin(o * R) / _),
          (c = c * p + f * o),
          (l = l * p + d * o),
          (h = h * p + x * o),
          (u = u * p + g * o);
      } else {
        (c = c * p + f * o),
          (l = l * p + d * o),
          (h = h * p + x * o),
          (u = u * p + g * o);
        const R = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        (c *= R), (l *= R), (h *= R), (u *= R);
      }
    }
    (e[t] = c), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = u);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i],
      c = n[i + 1],
      l = n[i + 2],
      h = n[i + 3],
      u = r[a],
      f = r[a + 1],
      d = r[a + 2],
      x = r[a + 3];
    return (
      (e[t] = o * x + h * u + c * d - l * f),
      (e[t + 1] = c * x + h * f + l * u - o * d),
      (e[t + 2] = l * x + h * d + o * f - c * u),
      (e[t + 3] = h * x - o * u - c * f - l * d),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._order,
      o = Math.cos,
      c = Math.sin,
      l = o(n / 2),
      h = o(i / 2),
      u = o(r / 2),
      f = c(n / 2),
      d = c(i / 2),
      x = c(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = f * h * u + l * d * x),
          (this._y = l * d * u - f * h * x),
          (this._z = l * h * x + f * d * u),
          (this._w = l * h * u - f * d * x);
        break;
      case "YXZ":
        (this._x = f * h * u + l * d * x),
          (this._y = l * d * u - f * h * x),
          (this._z = l * h * x - f * d * u),
          (this._w = l * h * u + f * d * x);
        break;
      case "ZXY":
        (this._x = f * h * u - l * d * x),
          (this._y = l * d * u + f * h * x),
          (this._z = l * h * x + f * d * u),
          (this._w = l * h * u - f * d * x);
        break;
      case "ZYX":
        (this._x = f * h * u - l * d * x),
          (this._y = l * d * u + f * h * x),
          (this._z = l * h * x - f * d * u),
          (this._w = l * h * u + f * d * x);
        break;
      case "YZX":
        (this._x = f * h * u + l * d * x),
          (this._y = l * d * u + f * h * x),
          (this._z = l * h * x - f * d * u),
          (this._w = l * h * u - f * d * x);
        break;
      case "XZY":
        (this._x = f * h * u - l * d * x),
          (this._y = l * d * u - f * h * x),
          (this._z = l * h * x + f * d * u),
          (this._w = l * h * u + f * d * x);
        break;
      default:
        Ue("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      a = t[1],
      o = t[5],
      c = t[9],
      l = t[2],
      h = t[6],
      u = t[10],
      f = n + o + u;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / d),
        (this._x = (h - c) * d),
        (this._y = (r - l) * d),
        (this._z = (a - i) * d);
    } else if (n > o && n > u) {
      const d = 2 * Math.sqrt(1 + n - o - u);
      (this._w = (h - c) / d),
        (this._x = 0.25 * d),
        (this._y = (i + a) / d),
        (this._z = (r + l) / d);
    } else if (o > u) {
      const d = 2 * Math.sqrt(1 + o - n - u);
      (this._w = (r - l) / d),
        (this._x = (i + a) / d),
        (this._y = 0.25 * d),
        (this._z = (c + h) / d);
    } else {
      const d = 2 * Math.sqrt(1 + u - n - o);
      (this._w = (a - i) / d),
        (this._x = (r + l) / d),
        (this._y = (c + h) / d),
        (this._z = 0.25 * d);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < 1e-8
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(je(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._w,
      o = t._x,
      c = t._y,
      l = t._z,
      h = t._w;
    return (
      (this._x = n * h + a * o + i * l - r * c),
      (this._y = i * h + a * c + r * o - n * l),
      (this._z = r * h + a * l + n * c - i * o),
      (this._w = a * h - n * o - i * c - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t <= 0) return this;
    if (t >= 1) return this.copy(e);
    let n = e._x,
      i = e._y,
      r = e._z,
      a = e._w,
      o = this.dot(e);
    o < 0 && ((n = -n), (i = -i), (r = -r), (a = -a), (o = -o));
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o),
        h = Math.sin(l);
      (c = Math.sin(c * l) / h),
        (t = Math.sin(t * l) / h),
        (this._x = this._x * c + n * t),
        (this._y = this._y * c + i * t),
        (this._z = this._z * c + r * t),
        (this._w = this._w * c + a * t),
        this._onChangeCallback();
    } else
      (this._x = this._x * c + n * t),
        (this._y = this._y * c + i * t),
        (this._z = this._z * c + r * t),
        (this._w = this._w * c + a * t),
        this.normalize();
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      r = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class F {
  constructor(e = 0, t = 0, n = 0) {
    (F.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion($o.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion($o.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      a = e.y,
      o = e.z,
      c = e.w,
      l = 2 * (a * i - o * n),
      h = 2 * (o * t - r * i),
      u = 2 * (r * n - a * t);
    return (
      (this.x = t + c * l + a * u - o * h),
      (this.y = n + c * h + o * l - r * u),
      (this.z = i + c * u + r * h - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = je(this.x, e.x, t.x)),
      (this.y = je(this.y, e.y, t.y)),
      (this.z = je(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = je(this.x, e, t)),
      (this.y = je(this.y, e, t)),
      (this.z = je(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(je(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      a = t.x,
      o = t.y,
      c = t.z;
    return (
      (this.x = i * c - r * o),
      (this.y = r * a - n * c),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ar.copy(this).projectOnVector(e), this.sub(Ar);
  }
  reflect(e) {
    return this.sub(Ar.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(je(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ar = new F(),
  $o = new dn();
class Ge {
  constructor(e, t, n, i, r, a, o, c, l) {
    (Ge.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, r, a, o, c, l);
  }
  set(e, t, n, i, r, a, o, c, l) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[1] = i),
      (h[2] = o),
      (h[3] = t),
      (h[4] = r),
      (h[5] = c),
      (h[6] = n),
      (h[7] = a),
      (h[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      o = n[3],
      c = n[6],
      l = n[1],
      h = n[4],
      u = n[7],
      f = n[2],
      d = n[5],
      x = n[8],
      g = i[0],
      m = i[3],
      p = i[6],
      R = i[1],
      _ = i[4],
      S = i[7],
      L = i[2],
      w = i[5],
      I = i[8];
    return (
      (r[0] = a * g + o * R + c * L),
      (r[3] = a * m + o * _ + c * w),
      (r[6] = a * p + o * S + c * I),
      (r[1] = l * g + h * R + u * L),
      (r[4] = l * m + h * _ + u * w),
      (r[7] = l * p + h * S + u * I),
      (r[2] = f * g + d * R + x * L),
      (r[5] = f * m + d * _ + x * w),
      (r[8] = f * p + d * S + x * I),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      h = e[8];
    return (
      t * a * h - t * o * l - n * r * h + n * o * c + i * r * l - i * a * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      h = e[8],
      u = h * a - o * l,
      f = o * c - h * r,
      d = l * r - a * c,
      x = t * u + n * f + i * d;
    if (x === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / x;
    return (
      (e[0] = u * g),
      (e[1] = (i * l - h * n) * g),
      (e[2] = (o * n - i * a) * g),
      (e[3] = f * g),
      (e[4] = (h * t - i * c) * g),
      (e[5] = (i * r - o * t) * g),
      (e[6] = d * g),
      (e[7] = (n * c - l * t) * g),
      (e[8] = (a * t - n * r) * g),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, a, o) {
    const c = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * a + l * o) + a + e,
        -i * l,
        i * c,
        -i * (-l * a + c * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(wr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(wr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(wr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const wr = new Ge(),
  Qo = new Ge().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  ),
  ec = new Ge().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
function Eu() {
  const s = {
      enabled: !0,
      workingColorSpace: wt,
      spaces: {},
      convert: function (i, r, a) {
        return (
          this.enabled === !1 ||
            r === a ||
            !r ||
            !a ||
            (this.spaces[r].transfer === ot &&
              ((i.r = Ln(i.r)), (i.g = Ln(i.g)), (i.b = Ln(i.b))),
            this.spaces[r].primaries !== this.spaces[a].primaries &&
              (i.applyMatrix3(this.spaces[r].toXYZ),
              i.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === ot &&
              ((i.r = Li(i.r)), (i.g = Li(i.g)), (i.b = Li(i.b)))),
          i
        );
      },
      workingToColorSpace: function (i, r) {
        return this.convert(i, this.workingColorSpace, r);
      },
      colorSpaceToWorking: function (i, r) {
        return this.convert(i, r, this.workingColorSpace);
      },
      getPrimaries: function (i) {
        return this.spaces[i].primaries;
      },
      getTransfer: function (i) {
        return i === Vn ? dr : this.spaces[i].transfer;
      },
      getToneMappingMode: function (i) {
        return (
          this.spaces[i].outputColorSpaceConfig.toneMappingMode || "standard"
        );
      },
      getLuminanceCoefficients: function (i, r = this.workingColorSpace) {
        return i.fromArray(this.spaces[r].luminanceCoefficients);
      },
      define: function (i) {
        Object.assign(this.spaces, i);
      },
      _getMatrix: function (i, r, a) {
        return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (i) {
        return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (i = this.workingColorSpace) {
        return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (i, r) {
        return (
          ys(
            "ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."
          ),
          s.workingToColorSpace(i, r)
        );
      },
      toWorkingColorSpace: function (i, r) {
        return (
          ys(
            "ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."
          ),
          s.colorSpaceToWorking(i, r)
        );
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    s.define({
      [wt]: {
        primaries: e,
        whitePoint: n,
        transfer: dr,
        toXYZ: Qo,
        fromXYZ: ec,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: gt },
        outputColorSpaceConfig: { drawingBufferColorSpace: gt },
      },
      [gt]: {
        primaries: e,
        whitePoint: n,
        transfer: ot,
        toXYZ: Qo,
        fromXYZ: ec,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: gt },
      },
    }),
    s
  );
}
const et = Eu();
function Ln(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Li(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let di;
class Au {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      di === void 0 && (di = vs("canvas")),
        (di.width = e.width),
        (di.height = e.height);
      const i = di.getContext("2d");
      e instanceof ImageData
        ? i.putImageData(e, 0, 0)
        : i.drawImage(e, 0, 0, e.width, e.height),
        (n = di);
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = vs("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let a = 0; a < r.length; a++) r[a] = Ln(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Ln(t[n] / 255) * 255))
          : (t[n] = Ln(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        Ue(
          "ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let wu = 0;
class _o {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: wu++ }),
      (this.uuid = Kt()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  getSize(e) {
    const t = this.data;
    return (
      typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement
        ? e.set(t.videoWidth, t.videoHeight, 0)
        : t instanceof VideoFrame
        ? e.set(t.displayHeight, t.displayWidth, 0)
        : t !== null
        ? e.set(t.width, t.height, t.depth || 0)
        : e.set(0, 0, 0),
      e
    );
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push(Rr(i[a].image)) : r.push(Rr(i[a]));
      } else r = Rr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Rr(s) {
  return (typeof HTMLImageElement < "u" && s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && s instanceof ImageBitmap)
    ? Au.getDataURL(s)
    : s.data
    ? {
        data: Array.from(s.data),
        width: s.width,
        height: s.height,
        type: s.data.constructor.name,
      }
    : (Ue("Texture: Unable to serialize Texture."), {});
}
let Ru = 0;
const Cr = new F();
class St extends hi {
  constructor(
    e = St.DEFAULT_IMAGE,
    t = St.DEFAULT_MAPPING,
    n = ln,
    i = ln,
    r = It,
    a = Rn,
    o = jt,
    c = fn,
    l = St.DEFAULT_ANISOTROPY,
    h = Vn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Ru++ }),
      (this.uuid = Kt()),
      (this.name = ""),
      (this.source = new _o(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new oe(0, 0)),
      (this.repeat = new oe(1, 1)),
      (this.center = new oe(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ge()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = h),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(e && e.depth && e.depth > 1)),
      (this.pmremVersion = 0);
  }
  get width() {
    return this.source.getSize(Cr).x;
  }
  get height() {
    return this.source.getSize(Cr).y;
  }
  get depth() {
    return this.source.getSize(Cr).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.isArrayTexture = e.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const i = this[t];
      if (i === void 0) {
        Ue(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      (i && n && i.isVector2 && n.isVector2) ||
      (i && n && i.isVector3 && n.isVector3) ||
      (i && n && i.isMatrix3 && n.isMatrix3)
        ? i.copy(n)
        : (this[t] = n);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== gl) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Oi:
          e.x = e.x - Math.floor(e.x);
          break;
        case ln:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case fr:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Oi:
          e.y = e.y - Math.floor(e.y);
          break;
        case ln:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case fr:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
St.DEFAULT_IMAGE = null;
St.DEFAULT_MAPPING = gl;
St.DEFAULT_ANISOTROPY = 1;
class tt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (tt.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), (this.w /= e.w), this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const c = e.elements,
      l = c[0],
      h = c[4],
      u = c[8],
      f = c[1],
      d = c[5],
      x = c[9],
      g = c[2],
      m = c[6],
      p = c[10];
    if (
      Math.abs(h - f) < 0.01 &&
      Math.abs(u - g) < 0.01 &&
      Math.abs(x - m) < 0.01
    ) {
      if (
        Math.abs(h + f) < 0.1 &&
        Math.abs(u + g) < 0.1 &&
        Math.abs(x + m) < 0.1 &&
        Math.abs(l + d + p - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const _ = (l + 1) / 2,
        S = (d + 1) / 2,
        L = (p + 1) / 2,
        w = (h + f) / 4,
        I = (u + g) / 4,
        N = (x + m) / 4;
      return (
        _ > S && _ > L
          ? _ < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(_)), (i = w / n), (r = I / n))
          : S > L
          ? S < 0.01
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(S)), (n = w / i), (r = N / i))
          : L < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(L)), (n = I / r), (i = N / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let R = Math.sqrt(
      (m - x) * (m - x) + (u - g) * (u - g) + (f - h) * (f - h)
    );
    return (
      Math.abs(R) < 0.001 && (R = 1),
      (this.x = (m - x) / R),
      (this.y = (u - g) / R),
      (this.z = (f - h) / R),
      (this.w = Math.acos((l + d + p - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = je(this.x, e.x, t.x)),
      (this.y = je(this.y, e.y, t.y)),
      (this.z = je(this.z, e.z, t.z)),
      (this.w = je(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = je(this.x, e, t)),
      (this.y = je(this.y, e, t)),
      (this.z = je(this.z, e, t)),
      (this.w = je(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(je(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Cu extends hi {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: It,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
          depth: 1,
          multiview: !1,
        },
        n
      )),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = n.depth),
      (this.scissor = new tt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new tt(0, 0, e, t));
    const i = { width: e, height: t, depth: n.depth },
      r = new St(i);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      (this.textures[o] = r.clone()),
        (this.textures[o].isRenderTargetTexture = !0),
        (this.textures[o].renderTarget = this);
    this._setTextureOptions(n),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples),
      (this.multiview = n.multiview);
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: It,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null,
    };
    e.mapping !== void 0 && (t.mapping = e.mapping),
      e.wrapS !== void 0 && (t.wrapS = e.wrapS),
      e.wrapT !== void 0 && (t.wrapT = e.wrapT),
      e.wrapR !== void 0 && (t.wrapR = e.wrapR),
      e.magFilter !== void 0 && (t.magFilter = e.magFilter),
      e.minFilter !== void 0 && (t.minFilter = e.minFilter),
      e.format !== void 0 && (t.format = e.format),
      e.type !== void 0 && (t.type = e.type),
      e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
      e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
      e.flipY !== void 0 && (t.flipY = e.flipY),
      e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
      e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null),
      e !== null && (e.renderTarget = this),
      (this._depthTexture = e);
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let i = 0, r = this.textures.length; i < r; i++)
        (this.textures[i].image.width = e),
          (this.textures[i].image.height = t),
          (this.textures[i].image.depth = n),
          this.textures[i].isData3DTexture !== !0 &&
            (this.textures[i].isArrayTexture =
              this.textures[i].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let t = 0, n = e.textures.length; t < n; t++) {
      (this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0),
        (this.textures[t].renderTarget = this);
      const i = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new _o(i);
    }
    return (
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Xn extends Cu {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class Pl extends St {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Dt),
      (this.minFilter = Dt),
      (this.wrapR = ln),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Pu extends St {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Dt),
      (this.minFilter = Dt),
      (this.wrapR = ln),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Dn {
  constructor(
    e = new F(1 / 0, 1 / 0, 1 / 0),
    t = new F(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Jt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Jt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Jt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          e.isMesh === !0
            ? e.getVertexPosition(a, Jt)
            : Jt.fromBufferAttribute(r, a),
            Jt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Jt);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Ps.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Ps.copy(n.boundingBox)),
          Ps.applyMatrix4(e.matrixWorld),
          this.union(Ps);
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Jt),
      Jt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ji),
      Ls.subVectors(this.max, ji),
      pi.subVectors(e.a, ji),
      mi.subVectors(e.b, ji),
      xi.subVectors(e.c, ji),
      Nn.subVectors(mi, pi),
      Un.subVectors(xi, mi),
      Kn.subVectors(pi, xi);
    let t = [
      0,
      -Nn.z,
      Nn.y,
      0,
      -Un.z,
      Un.y,
      0,
      -Kn.z,
      Kn.y,
      Nn.z,
      0,
      -Nn.x,
      Un.z,
      0,
      -Un.x,
      Kn.z,
      0,
      -Kn.x,
      -Nn.y,
      Nn.x,
      0,
      -Un.y,
      Un.x,
      0,
      -Kn.y,
      Kn.x,
      0,
    ];
    return !Pr(t, pi, mi, xi, Ls) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Pr(t, pi, mi, xi, Ls))
      ? !1
      : (Is.crossVectors(Nn, Un),
        (t = [Is.x, Is.y, Is.z]),
        Pr(t, pi, mi, xi, Ls));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Jt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Jt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (vn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        vn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        vn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        vn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        vn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        vn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        vn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        vn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(vn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const vn = [
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
  ],
  Jt = new F(),
  Ps = new Dn(),
  pi = new F(),
  mi = new F(),
  xi = new F(),
  Nn = new F(),
  Un = new F(),
  Kn = new F(),
  ji = new F(),
  Ls = new F(),
  Is = new F(),
  Zn = new F();
function Pr(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Zn.fromArray(s, r);
    const o =
        i.x * Math.abs(Zn.x) + i.y * Math.abs(Zn.y) + i.z * Math.abs(Zn.z),
      c = e.dot(Zn),
      l = t.dot(Zn),
      h = n.dot(Zn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o) return !1;
  }
  return !0;
}
const Lu = new Dn(),
  Ki = new F(),
  Lr = new F();
class xn {
  constructor(e = new F(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Lu.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Ki.subVectors(e, this.center);
    const t = Ki.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ki, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Lr.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Ki.copy(e.center).add(Lr)),
            this.expandByPoint(Ki.copy(e.center).sub(Lr))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return (this.radius = e.radius), this.center.fromArray(e.center), this;
  }
}
const yn = new F(),
  Ir = new F(),
  Ds = new F(),
  Fn = new F(),
  Dr = new F(),
  Ns = new F(),
  Nr = new F();
class Es {
  constructor(e = new F(), t = new F(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, yn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = yn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (yn.copy(this.origin).addScaledVector(this.direction, t),
        yn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Ir.copy(e).add(t).multiplyScalar(0.5),
      Ds.copy(t).sub(e).normalize(),
      Fn.copy(this.origin).sub(Ir);
    const r = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Ds),
      o = Fn.dot(this.direction),
      c = -Fn.dot(Ds),
      l = Fn.lengthSq(),
      h = Math.abs(1 - a * a);
    let u, f, d, x;
    if (h > 0)
      if (((u = a * c - o), (f = a * o - c), (x = r * h), u >= 0))
        if (f >= -x)
          if (f <= x) {
            const g = 1 / h;
            (u *= g),
              (f *= g),
              (d = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * c) + l);
          } else
            (f = r),
              (u = Math.max(0, -(a * f + o))),
              (d = -u * u + f * (f + 2 * c) + l);
        else
          (f = -r),
            (u = Math.max(0, -(a * f + o))),
            (d = -u * u + f * (f + 2 * c) + l);
      else
        f <= -x
          ? ((u = Math.max(0, -(-a * r + o))),
            (f = u > 0 ? -r : Math.min(Math.max(-r, -c), r)),
            (d = -u * u + f * (f + 2 * c) + l))
          : f <= x
          ? ((u = 0),
            (f = Math.min(Math.max(-r, -c), r)),
            (d = f * (f + 2 * c) + l))
          : ((u = Math.max(0, -(a * r + o))),
            (f = u > 0 ? r : Math.min(Math.max(-r, -c), r)),
            (d = -u * u + f * (f + 2 * c) + l));
    else
      (f = a > 0 ? -r : r),
        (u = Math.max(0, -(a * f + o))),
        (d = -u * u + f * (f + 2 * c) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, u),
      i && i.copy(Ir).addScaledVector(Ds, f),
      d
    );
  }
  intersectSphere(e, t) {
    yn.subVectors(e.center, this.origin);
    const n = yn.dot(this.direction),
      i = yn.dot(yn) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i),
      o = n - a,
      c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return e.radius < 0
      ? !1
      : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, o, c;
    const l = 1 / this.direction.x,
      h = 1 / this.direction.y,
      u = 1 / this.direction.z,
      f = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - f.x) * l), (i = (e.max.x - f.x) * l))
        : ((n = (e.max.x - f.x) * l), (i = (e.min.x - f.x) * l)),
      h >= 0
        ? ((r = (e.min.y - f.y) * h), (a = (e.max.y - f.y) * h))
        : ((r = (e.max.y - f.y) * h), (a = (e.min.y - f.y) * h)),
      n > a ||
      r > i ||
      ((r > n || isNaN(n)) && (n = r),
      (a < i || isNaN(i)) && (i = a),
      u >= 0
        ? ((o = (e.min.z - f.z) * u), (c = (e.max.z - f.z) * u))
        : ((o = (e.max.z - f.z) * u), (c = (e.min.z - f.z) * u)),
      n > c || o > i) ||
      ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, yn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Dr.subVectors(t, e), Ns.subVectors(n, e), Nr.crossVectors(Dr, Ns);
    let a = this.direction.dot(Nr),
      o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    Fn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Ns.crossVectors(Fn, Ns));
    if (c < 0) return null;
    const l = o * this.direction.dot(Dr.cross(Fn));
    if (l < 0 || c + l > a) return null;
    const h = -o * Fn.dot(Nr);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ye {
  constructor(e, t, n, i, r, a, o, c, l, h, u, f, d, x, g, m) {
    (Ye.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, r, a, o, c, l, h, u, f, d, x, g, m);
  }
  set(e, t, n, i, r, a, o, c, l, h, u, f, d, x, g, m) {
    const p = this.elements;
    return (
      (p[0] = e),
      (p[4] = t),
      (p[8] = n),
      (p[12] = i),
      (p[1] = r),
      (p[5] = a),
      (p[9] = o),
      (p[13] = c),
      (p[2] = l),
      (p[6] = h),
      (p[10] = u),
      (p[14] = f),
      (p[3] = d),
      (p[7] = x),
      (p[11] = g),
      (p[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ye().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / gi.setFromMatrixColumn(e, 0).length(),
      r = 1 / gi.setFromMatrixColumn(e, 1).length(),
      a = 1 / gi.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      c = Math.cos(i),
      l = Math.sin(i),
      h = Math.cos(r),
      u = Math.sin(r);
    if (e.order === "XYZ") {
      const f = a * h,
        d = a * u,
        x = o * h,
        g = o * u;
      (t[0] = c * h),
        (t[4] = -c * u),
        (t[8] = l),
        (t[1] = d + x * l),
        (t[5] = f - g * l),
        (t[9] = -o * c),
        (t[2] = g - f * l),
        (t[6] = x + d * l),
        (t[10] = a * c);
    } else if (e.order === "YXZ") {
      const f = c * h,
        d = c * u,
        x = l * h,
        g = l * u;
      (t[0] = f + g * o),
        (t[4] = x * o - d),
        (t[8] = a * l),
        (t[1] = a * u),
        (t[5] = a * h),
        (t[9] = -o),
        (t[2] = d * o - x),
        (t[6] = g + f * o),
        (t[10] = a * c);
    } else if (e.order === "ZXY") {
      const f = c * h,
        d = c * u,
        x = l * h,
        g = l * u;
      (t[0] = f - g * o),
        (t[4] = -a * u),
        (t[8] = x + d * o),
        (t[1] = d + x * o),
        (t[5] = a * h),
        (t[9] = g - f * o),
        (t[2] = -a * l),
        (t[6] = o),
        (t[10] = a * c);
    } else if (e.order === "ZYX") {
      const f = a * h,
        d = a * u,
        x = o * h,
        g = o * u;
      (t[0] = c * h),
        (t[4] = x * l - d),
        (t[8] = f * l + g),
        (t[1] = c * u),
        (t[5] = g * l + f),
        (t[9] = d * l - x),
        (t[2] = -l),
        (t[6] = o * c),
        (t[10] = a * c);
    } else if (e.order === "YZX") {
      const f = a * c,
        d = a * l,
        x = o * c,
        g = o * l;
      (t[0] = c * h),
        (t[4] = g - f * u),
        (t[8] = x * u + d),
        (t[1] = u),
        (t[5] = a * h),
        (t[9] = -o * h),
        (t[2] = -l * h),
        (t[6] = d * u + x),
        (t[10] = f - g * u);
    } else if (e.order === "XZY") {
      const f = a * c,
        d = a * l,
        x = o * c,
        g = o * l;
      (t[0] = c * h),
        (t[4] = -u),
        (t[8] = l * h),
        (t[1] = f * u + g),
        (t[5] = a * h),
        (t[9] = d * u - x),
        (t[2] = x * u - d),
        (t[6] = o * h),
        (t[10] = g * u + f);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Iu, e, Du);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Ht.subVectors(e, t),
      Ht.lengthSq() === 0 && (Ht.z = 1),
      Ht.normalize(),
      On.crossVectors(n, Ht),
      On.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Ht.x += 1e-4) : (Ht.z += 1e-4),
        Ht.normalize(),
        On.crossVectors(n, Ht)),
      On.normalize(),
      Us.crossVectors(Ht, On),
      (i[0] = On.x),
      (i[4] = Us.x),
      (i[8] = Ht.x),
      (i[1] = On.y),
      (i[5] = Us.y),
      (i[9] = Ht.y),
      (i[2] = On.z),
      (i[6] = Us.z),
      (i[10] = Ht.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      h = n[1],
      u = n[5],
      f = n[9],
      d = n[13],
      x = n[2],
      g = n[6],
      m = n[10],
      p = n[14],
      R = n[3],
      _ = n[7],
      S = n[11],
      L = n[15],
      w = i[0],
      I = i[4],
      N = i[8],
      E = i[12],
      M = i[1],
      U = i[5],
      V = i[9],
      K = i[13],
      Z = i[2],
      ne = i[6],
      $ = i[10],
      se = i[14],
      k = i[3],
      de = i[7],
      pe = i[11],
      Ae = i[15];
    return (
      (r[0] = a * w + o * M + c * Z + l * k),
      (r[4] = a * I + o * U + c * ne + l * de),
      (r[8] = a * N + o * V + c * $ + l * pe),
      (r[12] = a * E + o * K + c * se + l * Ae),
      (r[1] = h * w + u * M + f * Z + d * k),
      (r[5] = h * I + u * U + f * ne + d * de),
      (r[9] = h * N + u * V + f * $ + d * pe),
      (r[13] = h * E + u * K + f * se + d * Ae),
      (r[2] = x * w + g * M + m * Z + p * k),
      (r[6] = x * I + g * U + m * ne + p * de),
      (r[10] = x * N + g * V + m * $ + p * pe),
      (r[14] = x * E + g * K + m * se + p * Ae),
      (r[3] = R * w + _ * M + S * Z + L * k),
      (r[7] = R * I + _ * U + S * ne + L * de),
      (r[11] = R * N + _ * V + S * $ + L * pe),
      (r[15] = R * E + _ * K + S * se + L * Ae),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      a = e[1],
      o = e[5],
      c = e[9],
      l = e[13],
      h = e[2],
      u = e[6],
      f = e[10],
      d = e[14],
      x = e[3],
      g = e[7],
      m = e[11],
      p = e[15];
    return (
      x *
        (+r * c * u -
          i * l * u -
          r * o * f +
          n * l * f +
          i * o * d -
          n * c * d) +
      g *
        (+t * c * d -
          t * l * f +
          r * a * f -
          i * a * d +
          i * l * h -
          r * c * h) +
      m *
        (+t * l * u -
          t * o * d -
          r * a * u +
          n * a * d +
          r * o * h -
          n * l * h) +
      p *
        (-i * o * h - t * c * u + t * o * f + i * a * u - n * a * f + n * c * h)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      h = e[8],
      u = e[9],
      f = e[10],
      d = e[11],
      x = e[12],
      g = e[13],
      m = e[14],
      p = e[15],
      R = u * m * l - g * f * l + g * c * d - o * m * d - u * c * p + o * f * p,
      _ = x * f * l - h * m * l - x * c * d + a * m * d + h * c * p - a * f * p,
      S = h * g * l - x * u * l + x * o * d - a * g * d - h * o * p + a * u * p,
      L = x * u * c - h * g * c - x * o * f + a * g * f + h * o * m - a * u * m,
      w = t * R + n * _ + i * S + r * L;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const I = 1 / w;
    return (
      (e[0] = R * I),
      (e[1] =
        (g * f * r -
          u * m * r -
          g * i * d +
          n * m * d +
          u * i * p -
          n * f * p) *
        I),
      (e[2] =
        (o * m * r -
          g * c * r +
          g * i * l -
          n * m * l -
          o * i * p +
          n * c * p) *
        I),
      (e[3] =
        (u * c * r -
          o * f * r -
          u * i * l +
          n * f * l +
          o * i * d -
          n * c * d) *
        I),
      (e[4] = _ * I),
      (e[5] =
        (h * m * r -
          x * f * r +
          x * i * d -
          t * m * d -
          h * i * p +
          t * f * p) *
        I),
      (e[6] =
        (x * c * r -
          a * m * r -
          x * i * l +
          t * m * l +
          a * i * p -
          t * c * p) *
        I),
      (e[7] =
        (a * f * r -
          h * c * r +
          h * i * l -
          t * f * l -
          a * i * d +
          t * c * d) *
        I),
      (e[8] = S * I),
      (e[9] =
        (x * u * r -
          h * g * r -
          x * n * d +
          t * g * d +
          h * n * p -
          t * u * p) *
        I),
      (e[10] =
        (a * g * r -
          x * o * r +
          x * n * l -
          t * g * l -
          a * n * p +
          t * o * p) *
        I),
      (e[11] =
        (h * o * r -
          a * u * r -
          h * n * l +
          t * u * l +
          a * n * d -
          t * o * d) *
        I),
      (e[12] = L * I),
      (e[13] =
        (h * g * i -
          x * u * i +
          x * n * f -
          t * g * f -
          h * n * m +
          t * u * m) *
        I),
      (e[14] =
        (x * o * i -
          a * g * i -
          x * n * c +
          t * g * c +
          a * n * m -
          t * o * m) *
        I),
      (e[15] =
        (a * u * i -
          h * o * i +
          h * n * c -
          t * u * c -
          a * n * f +
          t * o * f) *
        I),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      a = e.x,
      o = e.y,
      c = e.z,
      l = r * a,
      h = r * o;
    return (
      this.set(
        l * a + n,
        l * o - i * c,
        l * c + i * o,
        0,
        l * o + i * c,
        h * o + n,
        h * c - i * a,
        0,
        l * c - i * o,
        h * c + i * a,
        r * c * c + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      a = t._y,
      o = t._z,
      c = t._w,
      l = r + r,
      h = a + a,
      u = o + o,
      f = r * l,
      d = r * h,
      x = r * u,
      g = a * h,
      m = a * u,
      p = o * u,
      R = c * l,
      _ = c * h,
      S = c * u,
      L = n.x,
      w = n.y,
      I = n.z;
    return (
      (i[0] = (1 - (g + p)) * L),
      (i[1] = (d + S) * L),
      (i[2] = (x - _) * L),
      (i[3] = 0),
      (i[4] = (d - S) * w),
      (i[5] = (1 - (f + p)) * w),
      (i[6] = (m + R) * w),
      (i[7] = 0),
      (i[8] = (x + _) * I),
      (i[9] = (m - R) * I),
      (i[10] = (1 - (f + g)) * I),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = gi.set(i[0], i[1], i[2]).length();
    const a = gi.set(i[4], i[5], i[6]).length(),
      o = gi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      $t.copy(this);
    const l = 1 / r,
      h = 1 / a,
      u = 1 / o;
    return (
      ($t.elements[0] *= l),
      ($t.elements[1] *= l),
      ($t.elements[2] *= l),
      ($t.elements[4] *= h),
      ($t.elements[5] *= h),
      ($t.elements[6] *= h),
      ($t.elements[8] *= u),
      ($t.elements[9] *= u),
      ($t.elements[10] *= u),
      t.setFromRotationMatrix($t),
      (n.x = r),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, i, r, a, o = hn, c = !1) {
    const l = this.elements,
      h = (2 * r) / (t - e),
      u = (2 * r) / (n - i),
      f = (t + e) / (t - e),
      d = (n + i) / (n - i);
    let x, g;
    if (c) (x = r / (a - r)), (g = (a * r) / (a - r));
    else if (o === hn) (x = -(a + r) / (a - r)), (g = (-2 * a * r) / (a - r));
    else if (o === pr) (x = -a / (a - r)), (g = (-a * r) / (a - r));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = h),
      (l[4] = 0),
      (l[8] = f),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = d),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = x),
      (l[14] = g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, a, o = hn, c = !1) {
    const l = this.elements,
      h = 2 / (t - e),
      u = 2 / (n - i),
      f = -(t + e) / (t - e),
      d = -(n + i) / (n - i);
    let x, g;
    if (c) (x = 1 / (a - r)), (g = a / (a - r));
    else if (o === hn) (x = -2 / (a - r)), (g = -(a + r) / (a - r));
    else if (o === pr) (x = -1 / (a - r)), (g = -r / (a - r));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = h),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = f),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = 0),
      (l[13] = d),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = x),
      (l[14] = g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const gi = new F(),
  $t = new Ye(),
  Iu = new F(0, 0, 0),
  Du = new F(1, 1, 1),
  On = new F(),
  Us = new F(),
  Ht = new F(),
  tc = new Ye(),
  nc = new dn();
class pn {
  constructor(e = 0, t = 0, n = 0, i = pn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      a = i[4],
      o = i[8],
      c = i[1],
      l = i[5],
      h = i[9],
      u = i[2],
      f = i[6],
      d = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(je(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-h, d)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(f, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-je(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(o, d)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-u, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(je(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-u, d)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-je(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(f, d)), (this._z = Math.atan2(c, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(je(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-h, l)), (this._y = Math.atan2(-u, r)))
            : ((this._x = 0), (this._y = Math.atan2(o, d)));
        break;
      case "XZY":
        (this._z = Math.asin(-je(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(f, l)), (this._y = Math.atan2(o, r)))
            : ((this._x = Math.atan2(-h, d)), (this._y = 0));
        break;
      default:
        Ue(
          "Euler: .setFromRotationMatrix() encountered an unknown order: " + t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      tc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(tc, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return nc.setFromEuler(this), this.setFromQuaternion(nc, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
pn.DEFAULT_ORDER = "XYZ";
class Ll {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Nu = 0;
const ic = new F(),
  _i = new dn(),
  bn = new Ye(),
  Fs = new F(),
  Zi = new F(),
  Uu = new F(),
  Fu = new dn(),
  sc = new F(1, 0, 0),
  rc = new F(0, 1, 0),
  ac = new F(0, 0, 1),
  oc = { type: "added" },
  Ou = { type: "removed" },
  vi = { type: "childadded", child: null },
  Ur = { type: "childremoved", child: null };
class pt extends hi {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Nu++ }),
      (this.uuid = Kt()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = pt.DEFAULT_UP.clone());
    const e = new F(),
      t = new pn(),
      n = new dn(),
      i = new F(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Ye() },
        normalMatrix: { value: new Ge() },
      }),
      (this.matrix = new Ye()),
      (this.matrixWorld = new Ye()),
      (this.matrixAutoUpdate = pt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Ll()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.customDepthMaterial = void 0),
      (this.customDistanceMaterial = void 0),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return _i.setFromAxisAngle(e, t), this.quaternion.multiply(_i), this;
  }
  rotateOnWorldAxis(e, t) {
    return _i.setFromAxisAngle(e, t), this.quaternion.premultiply(_i), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(sc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(rc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ac, e);
  }
  translateOnAxis(e, t) {
    return (
      ic.copy(e).applyQuaternion(this.quaternion),
      this.position.add(ic.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(sc, e);
  }
  translateY(e) {
    return this.translateOnAxis(rc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ac, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(bn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Fs.copy(e) : Fs.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Zi.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? bn.lookAt(Zi, Fs, this.up)
        : bn.lookAt(Fs, Zi, this.up),
      this.quaternion.setFromRotationMatrix(bn),
      i &&
        (bn.extractRotation(i.matrixWorld),
        _i.setFromRotationMatrix(bn),
        this.quaternion.premultiply(_i.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (Je("Object3D.add: object can't be added as a child of itself.", e),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(oc),
            (vi.child = e),
            this.dispatchEvent(vi),
            (vi.child = null))
          : Je("Object3D.add: object not an instance of THREE.Object3D.", e),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(Ou),
        (Ur.child = e),
        this.dispatchEvent(Ur),
        (Ur.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      bn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), bn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(bn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(oc),
      (vi.child = e),
      this.dispatchEvent(vi),
      (vi.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Zi, e, Uu), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Zi, Fu, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      t === !0)
    ) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++) i[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = "BatchedMesh"),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.geometryInfo = this._geometryInfo.map((o) => ({
          ...o,
          boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
          boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0,
        }))),
        (i.instanceInfo = this._instanceInfo.map((o) => ({ ...o }))),
        (i.availableInstanceIds = this._availableInstanceIds.slice()),
        (i.availableGeometryIds = this._availableGeometryIds.slice()),
        (i.nextIndexStart = this._nextIndexStart),
        (i.nextVertexStart = this._nextVertexStart),
        (i.geometryCount = this._geometryCount),
        (i.maxInstanceCount = this._maxInstanceCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.matricesTexture = this._matricesTexture.toJSON(e)),
        (i.indirectTexture = this._indirectTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (i.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (i.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null &&
          (i.boundingBox = this.boundingBox.toJSON()));
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            r(e.shapes, u);
          }
        else r(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(r(e.materials, this.material[c]));
        i.material = o;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries),
        c = a(e.materials),
        l = a(e.textures),
        h = a(e.images),
        u = a(e.shapes),
        f = a(e.skeletons),
        d = a(e.animations),
        x = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        h.length > 0 && (n.images = h),
        u.length > 0 && (n.shapes = u),
        f.length > 0 && (n.skeletons = f),
        d.length > 0 && (n.animations = d),
        x.length > 0 && (n.nodes = x);
    }
    return (n.object = i), n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
pt.DEFAULT_UP = new F(0, 1, 0);
pt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Qt = new F(),
  Mn = new F(),
  Fr = new F(),
  Sn = new F(),
  yi = new F(),
  bi = new F(),
  cc = new F(),
  Or = new F(),
  Br = new F(),
  kr = new F(),
  zr = new tt(),
  Vr = new tt(),
  Hr = new tt();
class tn {
  constructor(e = new F(), t = new F(), n = new F()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Qt.subVectors(e, t), i.cross(Qt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    Qt.subVectors(i, t), Mn.subVectors(n, t), Fr.subVectors(e, t);
    const a = Qt.dot(Qt),
      o = Qt.dot(Mn),
      c = Qt.dot(Fr),
      l = Mn.dot(Mn),
      h = Mn.dot(Fr),
      u = a * l - o * o;
    if (u === 0) return r.set(0, 0, 0), null;
    const f = 1 / u,
      d = (l * c - o * h) * f,
      x = (a * h - o * c) * f;
    return r.set(1 - d - x, x, d);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Sn) === null
      ? !1
      : Sn.x >= 0 && Sn.y >= 0 && Sn.x + Sn.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, c) {
    return this.getBarycoord(e, t, n, i, Sn) === null
      ? ((c.x = 0),
        (c.y = 0),
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null)
      : (c.setScalar(0),
        c.addScaledVector(r, Sn.x),
        c.addScaledVector(a, Sn.y),
        c.addScaledVector(o, Sn.z),
        c);
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    return (
      zr.setScalar(0),
      Vr.setScalar(0),
      Hr.setScalar(0),
      zr.fromBufferAttribute(e, t),
      Vr.fromBufferAttribute(e, n),
      Hr.fromBufferAttribute(e, i),
      a.setScalar(0),
      a.addScaledVector(zr, r.x),
      a.addScaledVector(Vr, r.y),
      a.addScaledVector(Hr, r.z),
      a
    );
  }
  static isFrontFacing(e, t, n, i) {
    return Qt.subVectors(n, t), Mn.subVectors(e, t), Qt.cross(Mn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Qt.subVectors(this.c, this.b),
      Mn.subVectors(this.a, this.b),
      Qt.cross(Mn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return tn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return tn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return tn.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return tn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return tn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let a, o;
    yi.subVectors(i, n), bi.subVectors(r, n), Or.subVectors(e, n);
    const c = yi.dot(Or),
      l = bi.dot(Or);
    if (c <= 0 && l <= 0) return t.copy(n);
    Br.subVectors(e, i);
    const h = yi.dot(Br),
      u = bi.dot(Br);
    if (h >= 0 && u <= h) return t.copy(i);
    const f = c * u - h * l;
    if (f <= 0 && c >= 0 && h <= 0)
      return (a = c / (c - h)), t.copy(n).addScaledVector(yi, a);
    kr.subVectors(e, r);
    const d = yi.dot(kr),
      x = bi.dot(kr);
    if (x >= 0 && d <= x) return t.copy(r);
    const g = d * l - c * x;
    if (g <= 0 && l >= 0 && x <= 0)
      return (o = l / (l - x)), t.copy(n).addScaledVector(bi, o);
    const m = h * x - d * u;
    if (m <= 0 && u - h >= 0 && d - x >= 0)
      return (
        cc.subVectors(r, i),
        (o = (u - h) / (u - h + (d - x))),
        t.copy(i).addScaledVector(cc, o)
      );
    const p = 1 / (m + g + f);
    return (
      (a = g * p),
      (o = f * p),
      t.copy(n).addScaledVector(yi, a).addScaledVector(bi, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Il = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Bn = { h: 0, s: 0, l: 0 },
  Os = { h: 0, s: 0, l: 0 };
function Gr(s, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? s + (e - s) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? s + (e - s) * 6 * (2 / 3 - t)
      : s
  );
}
class We {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor
        ? this.copy(i)
        : typeof i == "number"
        ? this.setHex(i)
        : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = gt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      et.colorSpaceToWorking(this, t),
      this
    );
  }
  setRGB(e, t, n, i = et.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      et.colorSpaceToWorking(this, i),
      this
    );
  }
  setHSL(e, t, n, i = et.workingColorSpace) {
    if (((e = go(e, 1)), (t = je(t, 0, 1)), (n = je(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r;
      (this.r = Gr(a, r, e + 1 / 3)),
        (this.g = Gr(a, r, e)),
        (this.b = Gr(a, r, e - 1 / 3));
    }
    return et.colorSpaceToWorking(this, i), this;
  }
  setStyle(e, t = gt) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        Ue("Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      const a = i[1],
        o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(255, parseInt(r[1], 10)) / 255,
                Math.min(255, parseInt(r[2], 10)) / 255,
                Math.min(255, parseInt(r[3], 10)) / 255,
                t
              )
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(100, parseInt(r[1], 10)) / 100,
                Math.min(100, parseInt(r[2], 10)) / 100,
                Math.min(100, parseInt(r[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setHSL(
                parseFloat(r[1]) / 360,
                parseFloat(r[2]) / 100,
                parseFloat(r[3]) / 100,
                t
              )
            );
          break;
        default:
          Ue("Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = i[1],
        a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      Ue("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = gt) {
    const n = Il[e.toLowerCase()];
    return (
      n !== void 0 ? this.setHex(n, t) : Ue("Color: Unknown color " + e), this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Ln(e.r)), (this.g = Ln(e.g)), (this.b = Ln(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Li(e.r)), (this.g = Li(e.g)), (this.b = Li(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = gt) {
    return (
      et.workingToColorSpace(At.copy(this), e),
      Math.round(je(At.r * 255, 0, 255)) * 65536 +
        Math.round(je(At.g * 255, 0, 255)) * 256 +
        Math.round(je(At.b * 255, 0, 255))
    );
  }
  getHexString(e = gt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = et.workingColorSpace) {
    et.workingToColorSpace(At.copy(this), t);
    const n = At.r,
      i = At.g,
      r = At.b,
      a = Math.max(n, i, r),
      o = Math.min(n, i, r);
    let c, l;
    const h = (o + a) / 2;
    if (o === a) (c = 0), (l = 0);
    else {
      const u = a - o;
      switch (((l = h <= 0.5 ? u / (a + o) : u / (2 - a - o)), a)) {
        case n:
          c = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / u + 2;
          break;
        case r:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = l), (e.l = h), e;
  }
  getRGB(e, t = et.workingColorSpace) {
    return (
      et.workingToColorSpace(At.copy(this), t),
      (e.r = At.r),
      (e.g = At.g),
      (e.b = At.b),
      e
    );
  }
  getStyle(e = gt) {
    et.workingToColorSpace(At.copy(this), e);
    const t = At.r,
      n = At.g,
      i = At.b;
    return e !== gt
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          i * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Bn), this.setHSL(Bn.h + e, Bn.s + t, Bn.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Bn), e.getHSL(Os);
    const n = cs(Bn.h, Os.h, t),
      i = cs(Bn.s, Os.s, t),
      r = cs(Bn.l, Os.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      i = this.b,
      r = e.elements;
    return (
      (this.r = r[0] * t + r[3] * n + r[6] * i),
      (this.g = r[1] * t + r[4] * n + r[7] * i),
      (this.b = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const At = new We();
We.NAMES = Il;
let Bu = 0;
class un extends hi {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Bu++ }),
      (this.uuid = Kt()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Pi),
      (this.side = In),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = da),
      (this.blendDst = pa),
      (this.blendEquation = ii),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new We(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = Ni),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = jo),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = fi),
      (this.stencilZFail = fi),
      (this.stencilZPass = fi),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.allowOverride = !0),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          Ue(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.sheenColorMap &&
        this.sheenColorMap.isTexture &&
        (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
      this.sheenRoughnessMap &&
        this.sheenRoughnessMap.isTexture &&
        (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Pi && (n.blending = this.blending),
      this.side !== In && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== da && (n.blendSrc = this.blendSrc),
      this.blendDst !== pa && (n.blendDst = this.blendDst),
      this.blendEquation !== ii && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== Ni && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== jo && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== fi && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== fi && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== fi && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures),
        a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class ri extends un {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new We(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new pn()),
      (this.combine = xl),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const _t = new F(),
  Bs = new oe();
let ku = 0;
class Tt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: ku++ }),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Qa),
      (this.updateRanges = []),
      (this.gpuType = nn),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Bs.fromBufferAttribute(this, t),
          Bs.applyMatrix3(e),
          this.setXY(t, Bs.x, Bs.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        _t.fromBufferAttribute(this, t),
          _t.applyMatrix3(e),
          this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t),
        _t.applyMatrix4(e),
        this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t),
        _t.applyNormalMatrix(e),
        this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t),
        _t.transformDirection(e),
        this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = en(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = it(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = it(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = it(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = it(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = it(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = it(t, this.array)), (n = it(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = it(t, this.array)),
        (n = it(n, this.array)),
        (i = it(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = it(t, this.array)),
        (n = it(n, this.array)),
        (i = it(i, this.array)),
        (r = it(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Qa && (e.usage = this.usage),
      e
    );
  }
}
class Dl extends Tt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Nl extends Tt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Bt extends Tt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let zu = 0;
const qt = new Ye(),
  Wr = new pt(),
  Mi = new F(),
  Gt = new Dn(),
  Ji = new Dn(),
  Mt = new F();
class kt extends hi {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: zu++ }),
      (this.uuid = Kt()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Rl(e) ? Nl : Dl)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e) {
    return (this.indirect = e), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ge().getNormalMatrix(e);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return qt.makeRotationFromQuaternion(e), this.applyMatrix4(qt), this;
  }
  rotateX(e) {
    return qt.makeRotationX(e), this.applyMatrix4(qt), this;
  }
  rotateY(e) {
    return qt.makeRotationY(e), this.applyMatrix4(qt), this;
  }
  rotateZ(e) {
    return qt.makeRotationZ(e), this.applyMatrix4(qt), this;
  }
  translate(e, t, n) {
    return qt.makeTranslation(e, t, n), this.applyMatrix4(qt), this;
  }
  scale(e, t, n) {
    return qt.makeScale(e, t, n), this.applyMatrix4(qt), this;
  }
  lookAt(e) {
    return Wr.lookAt(e), Wr.updateMatrix(), this.applyMatrix4(Wr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Mi).negate(),
      this.translate(Mi.x, Mi.y, Mi.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let i = 0, r = e.length; i < r; i++) {
        const a = e[i];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Bt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let i = 0; i < n; i++) {
        const r = e[i];
        t.setXYZ(i, r.x, r.y, r.z || 0);
      }
      e.length > t.count &&
        Ue(
          "BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."
        ),
        (t.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Dn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Je(
        "BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(
          new F(-1 / 0, -1 / 0, -1 / 0),
          new F(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          Gt.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (Mt.addVectors(this.boundingBox.min, Gt.min),
                this.boundingBox.expandByPoint(Mt),
                Mt.addVectors(this.boundingBox.max, Gt.max),
                this.boundingBox.expandByPoint(Mt))
              : (this.boundingBox.expandByPoint(Gt.min),
                this.boundingBox.expandByPoint(Gt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      Je(
        'BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new xn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Je(
        "BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new F(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Gt.setFromBufferAttribute(e), t))
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          Ji.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (Mt.addVectors(Gt.min, Ji.min),
                Gt.expandByPoint(Mt),
                Mt.addVectors(Gt.max, Ji.max),
                Gt.expandByPoint(Mt))
              : (Gt.expandByPoint(Ji.min), Gt.expandByPoint(Ji.max));
        }
      Gt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        Mt.fromBufferAttribute(e, r),
          (i = Math.max(i, n.distanceToSquared(Mt)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r],
            c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            Mt.fromBufferAttribute(o, l),
              c && (Mi.fromBufferAttribute(e, l), Mt.add(Mi)),
              (i = Math.max(i, n.distanceToSquared(Mt)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          Je(
            'BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      Je(
        "BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = t.position,
      i = t.normal,
      r = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Tt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      c = [];
    for (let N = 0; N < n.count; N++) (o[N] = new F()), (c[N] = new F());
    const l = new F(),
      h = new F(),
      u = new F(),
      f = new oe(),
      d = new oe(),
      x = new oe(),
      g = new F(),
      m = new F();
    function p(N, E, M) {
      l.fromBufferAttribute(n, N),
        h.fromBufferAttribute(n, E),
        u.fromBufferAttribute(n, M),
        f.fromBufferAttribute(r, N),
        d.fromBufferAttribute(r, E),
        x.fromBufferAttribute(r, M),
        h.sub(l),
        u.sub(l),
        d.sub(f),
        x.sub(f);
      const U = 1 / (d.x * x.y - x.x * d.y);
      isFinite(U) &&
        (g
          .copy(h)
          .multiplyScalar(x.y)
          .addScaledVector(u, -d.y)
          .multiplyScalar(U),
        m
          .copy(u)
          .multiplyScalar(d.x)
          .addScaledVector(h, -x.x)
          .multiplyScalar(U),
        o[N].add(g),
        o[E].add(g),
        o[M].add(g),
        c[N].add(m),
        c[E].add(m),
        c[M].add(m));
    }
    let R = this.groups;
    R.length === 0 && (R = [{ start: 0, count: e.count }]);
    for (let N = 0, E = R.length; N < E; ++N) {
      const M = R[N],
        U = M.start,
        V = M.count;
      for (let K = U, Z = U + V; K < Z; K += 3)
        p(e.getX(K + 0), e.getX(K + 1), e.getX(K + 2));
    }
    const _ = new F(),
      S = new F(),
      L = new F(),
      w = new F();
    function I(N) {
      L.fromBufferAttribute(i, N), w.copy(L);
      const E = o[N];
      _.copy(E),
        _.sub(L.multiplyScalar(L.dot(E))).normalize(),
        S.crossVectors(w, E);
      const U = S.dot(c[N]) < 0 ? -1 : 1;
      a.setXYZW(N, _.x, _.y, _.z, U);
    }
    for (let N = 0, E = R.length; N < E; ++N) {
      const M = R[N],
        U = M.start,
        V = M.count;
      for (let K = U, Z = U + V; K < Z; K += 3)
        I(e.getX(K + 0)), I(e.getX(K + 1)), I(e.getX(K + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Tt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let f = 0, d = n.count; f < d; f++) n.setXYZ(f, 0, 0, 0);
      const i = new F(),
        r = new F(),
        a = new F(),
        o = new F(),
        c = new F(),
        l = new F(),
        h = new F(),
        u = new F();
      if (e)
        for (let f = 0, d = e.count; f < d; f += 3) {
          const x = e.getX(f + 0),
            g = e.getX(f + 1),
            m = e.getX(f + 2);
          i.fromBufferAttribute(t, x),
            r.fromBufferAttribute(t, g),
            a.fromBufferAttribute(t, m),
            h.subVectors(a, r),
            u.subVectors(i, r),
            h.cross(u),
            o.fromBufferAttribute(n, x),
            c.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, m),
            o.add(h),
            c.add(h),
            l.add(h),
            n.setXYZ(x, o.x, o.y, o.z),
            n.setXYZ(g, c.x, c.y, c.z),
            n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let f = 0, d = t.count; f < d; f += 3)
          i.fromBufferAttribute(t, f + 0),
            r.fromBufferAttribute(t, f + 1),
            a.fromBufferAttribute(t, f + 2),
            h.subVectors(a, r),
            u.subVectors(i, r),
            h.cross(u),
            n.setXYZ(f + 0, h.x, h.y, h.z),
            n.setXYZ(f + 1, h.x, h.y, h.z),
            n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Mt.fromBufferAttribute(e, t),
        Mt.normalize(),
        e.setXYZ(t, Mt.x, Mt.y, Mt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array,
        h = o.itemSize,
        u = o.normalized,
        f = new l.constructor(c.length * h);
      let d = 0,
        x = 0;
      for (let g = 0, m = c.length; g < m; g++) {
        o.isInterleavedBufferAttribute
          ? (d = c[g] * o.data.stride + o.offset)
          : (d = c[g] * h);
        for (let p = 0; p < h; p++) f[x++] = l[d++];
      }
      return new Tt(f, h, u);
    }
    if (this.index === null)
      return (
        Ue(
          "BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new kt(),
      n = this.index.array,
      i = this.attributes;
    for (const o in i) {
      const c = i[o],
        l = e(c, n);
      t.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [],
        l = r[o];
      for (let h = 0, u = l.length; h < u; h++) {
        const f = l[h],
          d = e(f, n);
        c.push(d);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        h = [];
      for (let u = 0, f = l.length; u < f; u++) {
        const d = l[u];
        h.push(d.toJSON(e.data));
      }
      h.length > 0 && ((i[c] = h), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const h = [],
        u = r[l];
      for (let f = 0, d = u.length; f < d; f++) h.push(u[f].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const lc = new Ye(),
  Jn = new Es(),
  ks = new xn(),
  hc = new F(),
  zs = new F(),
  Vs = new F(),
  Hs = new F(),
  Xr = new F(),
  Gs = new F(),
  uc = new F(),
  Ws = new F();
class Wt extends pt {
  constructor(e = new kt(), t = new ri()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      (this.count = 1),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      Gs.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const h = o[c],
          u = r[c];
        h !== 0 &&
          (Xr.fromBufferAttribute(u, e),
          a ? Gs.addScaledVector(Xr, h) : Gs.addScaledVector(Xr.sub(t), h));
      }
      t.add(Gs);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    i !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ks.copy(n.boundingSphere),
      ks.applyMatrix4(r),
      Jn.copy(e.ray).recast(e.near),
      !(
        ks.containsPoint(Jn.origin) === !1 &&
        (Jn.intersectSphere(ks, hc) === null ||
          Jn.origin.distanceToSquared(hc) > (e.far - e.near) ** 2)
      ) &&
        (lc.copy(r).invert(),
        Jn.copy(e.ray).applyMatrix4(lc),
        !(n.boundingBox !== null && Jn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Jn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry,
      a = this.material,
      o = r.index,
      c = r.attributes.position,
      l = r.attributes.uv,
      h = r.attributes.uv1,
      u = r.attributes.normal,
      f = r.groups,
      d = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let x = 0, g = f.length; x < g; x++) {
          const m = f[x],
            p = a[m.materialIndex],
            R = Math.max(m.start, d.start),
            _ = Math.min(
              o.count,
              Math.min(m.start + m.count, d.start + d.count)
            );
          for (let S = R, L = _; S < L; S += 3) {
            const w = o.getX(S),
              I = o.getX(S + 1),
              N = o.getX(S + 2);
            (i = Xs(this, p, e, n, l, h, u, w, I, N)),
              i &&
                ((i.faceIndex = Math.floor(S / 3)),
                (i.face.materialIndex = m.materialIndex),
                t.push(i));
          }
        }
      else {
        const x = Math.max(0, d.start),
          g = Math.min(o.count, d.start + d.count);
        for (let m = x, p = g; m < p; m += 3) {
          const R = o.getX(m),
            _ = o.getX(m + 1),
            S = o.getX(m + 2);
          (i = Xs(this, a, e, n, l, h, u, R, _, S)),
            i && ((i.faceIndex = Math.floor(m / 3)), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let x = 0, g = f.length; x < g; x++) {
          const m = f[x],
            p = a[m.materialIndex],
            R = Math.max(m.start, d.start),
            _ = Math.min(
              c.count,
              Math.min(m.start + m.count, d.start + d.count)
            );
          for (let S = R, L = _; S < L; S += 3) {
            const w = S,
              I = S + 1,
              N = S + 2;
            (i = Xs(this, p, e, n, l, h, u, w, I, N)),
              i &&
                ((i.faceIndex = Math.floor(S / 3)),
                (i.face.materialIndex = m.materialIndex),
                t.push(i));
          }
        }
      else {
        const x = Math.max(0, d.start),
          g = Math.min(c.count, d.start + d.count);
        for (let m = x, p = g; m < p; m += 3) {
          const R = m,
            _ = m + 1,
            S = m + 2;
          (i = Xs(this, a, e, n, l, h, u, R, _, S)),
            i && ((i.faceIndex = Math.floor(m / 3)), t.push(i));
        }
      }
  }
}
function Vu(s, e, t, n, i, r, a, o) {
  let c;
  if (
    (e.side === Ot
      ? (c = n.intersectTriangle(a, r, i, !0, o))
      : (c = n.intersectTriangle(i, r, a, e.side === In, o)),
    c === null)
  )
    return null;
  Ws.copy(o), Ws.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(Ws);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: Ws.clone(), object: s };
}
function Xs(s, e, t, n, i, r, a, o, c, l) {
  s.getVertexPosition(o, zs),
    s.getVertexPosition(c, Vs),
    s.getVertexPosition(l, Hs);
  const h = Vu(s, e, t, n, zs, Vs, Hs, uc);
  if (h) {
    const u = new F();
    tn.getBarycoord(uc, zs, Vs, Hs, u),
      i && (h.uv = tn.getInterpolatedAttribute(i, o, c, l, u, new oe())),
      r && (h.uv1 = tn.getInterpolatedAttribute(r, o, c, l, u, new oe())),
      a &&
        ((h.normal = tn.getInterpolatedAttribute(a, o, c, l, u, new F())),
        h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = { a: o, b: c, c: l, normal: new F(), materialIndex: 0 };
    tn.getNormal(zs, Vs, Hs, f.normal), (h.face = f), (h.barycoord = u);
  }
  return h;
}
class As extends kt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      });
    const o = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
    const c = [],
      l = [],
      h = [],
      u = [];
    let f = 0,
      d = 0;
    x("z", "y", "x", -1, -1, n, t, e, a, r, 0),
      x("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      x("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      x("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      x("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      x("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(c),
      this.setAttribute("position", new Bt(l, 3)),
      this.setAttribute("normal", new Bt(h, 3)),
      this.setAttribute("uv", new Bt(u, 2));
    function x(g, m, p, R, _, S, L, w, I, N, E) {
      const M = S / I,
        U = L / N,
        V = S / 2,
        K = L / 2,
        Z = w / 2,
        ne = I + 1,
        $ = N + 1;
      let se = 0,
        k = 0;
      const de = new F();
      for (let pe = 0; pe < $; pe++) {
        const Ae = pe * U - K;
        for (let Ve = 0; Ve < ne; Ve++) {
          const Ke = Ve * M - V;
          (de[g] = Ke * R),
            (de[m] = Ae * _),
            (de[p] = Z),
            l.push(de.x, de.y, de.z),
            (de[g] = 0),
            (de[m] = 0),
            (de[p] = w > 0 ? 1 : -1),
            h.push(de.x, de.y, de.z),
            u.push(Ve / I),
            u.push(1 - pe / N),
            (se += 1);
        }
      }
      for (let pe = 0; pe < N; pe++)
        for (let Ae = 0; Ae < I; Ae++) {
          const Ve = f + Ae + ne * pe,
            Ke = f + Ae + ne * (pe + 1),
            Y = f + (Ae + 1) + ne * (pe + 1),
            O = f + (Ae + 1) + ne * pe;
          c.push(Ve, Ke, O), c.push(Ke, Y, O), (k += 6);
        }
      o.addGroup(d, k, E), (d += k), (f += se);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new As(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function ki(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (Ue(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function Pt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = ki(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function Hu(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(s[t].clone());
  return e;
}
function Ul(s) {
  const e = s.getRenderTarget();
  return e === null
    ? s.outputColorSpace
    : e.isXRRenderTarget === !0
    ? e.texture.colorSpace
    : et.workingColorSpace;
}
const Fl = { clone: ki, merge: Pt };
var Gu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Wu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class mn extends un {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Gu),
      (this.fragmentShader = Wu),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = ki(e.uniforms)),
      (this.uniformsGroups = Hu(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[i] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[i] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[i] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[i] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: a.toArray() })
        : (t.uniforms[i] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ol extends pt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Ye()),
      (this.projectionMatrix = new Ye()),
      (this.projectionMatrixInverse = new Ye()),
      (this.coordinateSystem = hn),
      (this._reversedDepth = !1);
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const kn = new F(),
  fc = new oe(),
  dc = new oe();
class Lt extends Ol {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Bi * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(os * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Bi * 2 * Math.atan(Math.tan(os * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    kn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(kn.x, kn.y).multiplyScalar(-e / kn.z),
      kn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(kn.x, kn.y).multiplyScalar(-e / kn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, fc, dc), t.subVectors(dc, fc);
  }
  setViewOffset(e, t, n, i, r, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(os * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth,
        l = a.fullHeight;
      (r += (a.offsetX * i) / c),
        (t -= (a.offsetY * n) / l),
        (i *= a.width / c),
        (n *= a.height / l);
    }
    const o = this.filmOffset;
    o !== 0 && (r += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + i,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
        this.reversedDepth
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Si = -90,
  Ti = 1;
class Xu extends pt {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const i = new Lt(Si, Ti, e, t);
    (i.layers = this.layers), this.add(i);
    const r = new Lt(Si, Ti, e, t);
    (r.layers = this.layers), this.add(r);
    const a = new Lt(Si, Ti, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new Lt(Si, Ti, e, t);
    (o.layers = this.layers), this.add(o);
    const c = new Lt(Si, Ti, e, t);
    (c.layers = this.layers), this.add(c);
    const l = new Lt(Si, Ti, e, t);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, i, r, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === hn)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1);
    else if (e === pr)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const l of t) this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, a, o, c, l, h] = this.children,
      u = e.getRenderTarget(),
      f = e.getActiveCubeFace(),
      d = e.getActiveMipmapLevel(),
      x = e.xr.enabled;
    e.xr.enabled = !1;
    const g = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, i),
      e.render(t, r),
      e.setRenderTarget(n, 1, i),
      e.render(t, a),
      e.setRenderTarget(n, 2, i),
      e.render(t, o),
      e.setRenderTarget(n, 3, i),
      e.render(t, c),
      e.setRenderTarget(n, 4, i),
      e.render(t, l),
      (n.texture.generateMipmaps = g),
      e.setRenderTarget(n, 5, i),
      e.render(t, h),
      e.setRenderTarget(u, f, d),
      (e.xr.enabled = x),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Bl extends St {
  constructor(e = [], t = Ui, n, i, r, a, o, c, l, h) {
    super(e, t, n, i, r, a, o, c, l, h),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class qu extends Xn {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new Bl(i)),
      this._setTextureOptions(t),
      (this.texture.isRenderTargetTexture = !0);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new As(5, 5, 5),
      r = new mn({
        name: "CubemapFromEquirect",
        uniforms: ki(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Ot,
        blending: Pn,
      });
    r.uniforms.tEquirect.value = t;
    const a = new Wt(i, r),
      o = t.minFilter;
    return (
      t.minFilter === Rn && (t.minFilter = It),
      new Xu(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t = !0, n = !0, i = !0) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
class ai extends pt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Yu = { type: "move" };
class qr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new ai()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new ai()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new F()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new F())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new ai()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new F()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new F())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      a = null;
    const o = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const g of e.hand.values()) {
          const m = t.getJointPose(g, n),
            p = this._getHandJoint(l, g);
          m !== null &&
            (p.matrix.fromArray(m.transform.matrix),
            p.matrix.decompose(p.position, p.rotation, p.scale),
            (p.matrixWorldNeedsUpdate = !0),
            (p.jointRadius = m.radius)),
            (p.visible = m !== null);
        }
        const h = l.joints["index-finger-tip"],
          u = l.joints["thumb-tip"],
          f = h.position.distanceTo(u.position),
          d = 0.02,
          x = 0.005;
        l.inputState.pinching && f > d + x
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            f <= d - x &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (c.matrix.fromArray(r.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            (c.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(r.linearVelocity))
              : (c.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(r.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      o !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && r !== null && (i = r),
        i !== null &&
          (o.matrix.fromArray(i.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(i.linearVelocity))
            : (o.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(i.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Yu)));
    }
    return (
      o !== null && (o.visible = i !== null),
      c !== null && (c.visible = r !== null),
      l !== null && (l.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ai();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class t_ extends pt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new pn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new pn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class kl {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = Qa),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = Kt());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Kt()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Kt()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const Ct = new F();
class vr {
  constructor(e, t, n, i = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = i);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Ct.fromBufferAttribute(this, t),
        Ct.applyMatrix4(e),
        this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ct.fromBufferAttribute(this, t),
        Ct.applyNormalMatrix(e),
        this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ct.fromBufferAttribute(this, t),
        Ct.transformDirection(e),
        this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = en(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = it(n, this.array)),
      (this.data.array[e * this.data.stride + this.offset + t] = n),
      this
    );
  }
  setX(e, t) {
    return (
      this.normalized && (t = it(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = it(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = it(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = it(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = en(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = en(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = en(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = it(t, this.array)), (n = it(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = it(t, this.array)),
        (n = it(n, this.array)),
        (i = it(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = it(t, this.array)),
        (n = it(n, this.array)),
        (i = it(i, this.array)),
        (r = it(r, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      (this.data.array[e + 3] = r),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      mr(
        "InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return new Tt(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new vr(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      mr(
        "InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
const pc = new F(),
  mc = new tt(),
  xc = new tt(),
  ju = new F(),
  gc = new Ye(),
  qs = new F(),
  Yr = new xn(),
  _c = new Ye(),
  jr = new Es();
class Ku extends Wt {
  constructor(e, t) {
    super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = Wo),
      (this.bindMatrix = new Ye()),
      (this.bindMatrixInverse = new Ye()),
      (this.boundingBox = null),
      (this.boundingSphere = null);
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Dn()),
      this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, qs), this.boundingBox.expandByPoint(qs);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new xn()),
      this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, qs), this.boundingSphere.expandByPoint(qs);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  raycast(e, t) {
    const n = this.material,
      i = this.matrixWorld;
    n !== void 0 &&
      (this.boundingSphere === null && this.computeBoundingSphere(),
      Yr.copy(this.boundingSphere),
      Yr.applyMatrix4(i),
      e.ray.intersectsSphere(Yr) !== !1 &&
        (_c.copy(i).invert(),
        jr.copy(e.ray).applyMatrix4(_c),
        !(
          this.boundingBox !== null && jr.intersectsBox(this.boundingBox) === !1
        ) && this._computeIntersections(e, t, jr)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    (this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new tt(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === Wo
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === jh
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : Ue("SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton,
      i = this.geometry;
    mc.fromBufferAttribute(i.attributes.skinIndex, e),
      xc.fromBufferAttribute(i.attributes.skinWeight, e),
      pc.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = xc.getComponent(r);
      if (a !== 0) {
        const o = mc.getComponent(r);
        gc.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
          t.addScaledVector(ju.copy(pc).applyMatrix4(gc), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class zl extends pt {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class vo extends St {
  constructor(e = null, t = 1, n = 1, i, r, a, o, c, l = Dt, h = Dt, u, f) {
    super(null, a, o, c, l, h, i, r, u, f),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const vc = new Ye(),
  Zu = new Ye();
class yo {
  constructor(e = [], t = []) {
    (this.uuid = Kt()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
      this.calculateInverses();
    else if (e.length !== t.length) {
      Ue(
        "Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ye());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ye();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : Zu;
      vc.multiplyMatrices(o, t[r]), vc.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new yo(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    (e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4));
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new vo(t, e, e, jt, nn);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = n),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let a = t[r];
      a === void 0 &&
        (Ue("Skeleton: No bone found with UUID:", r), (a = new zl())),
        this.bones.push(a),
        this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class eo extends Tt {
  constructor(e, t, n, i = 1) {
    super(e, t, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = i);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
const Ei = new Ye(),
  yc = new Ye(),
  Ys = [],
  bc = new Dn(),
  Ju = new Ye(),
  $i = new Wt(),
  Qi = new xn();
class $u extends Wt {
  constructor(e, t, n) {
    super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new eo(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    for (let i = 0; i < n; i++) this.setMatrixAt(i, Ju);
  }
  computeBoundingBox() {
    const e = this.geometry,
      t = this.count;
    this.boundingBox === null && (this.boundingBox = new Dn()),
      e.boundingBox === null && e.computeBoundingBox(),
      this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ei),
        bc.copy(e.boundingBox).applyMatrix4(Ei),
        this.boundingBox.union(bc);
  }
  computeBoundingSphere() {
    const e = this.geometry,
      t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new xn()),
      e.boundingSphere === null && e.computeBoundingSphere(),
      this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ei),
        Qi.copy(e.boundingSphere).applyMatrix4(Ei),
        this.boundingSphere.union(Qi);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      i = this.morphTexture.source.data.data,
      r = n.length + 1,
      a = e * r + 1;
    for (let o = 0; o < n.length; o++) n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      (($i.geometry = this.geometry),
      ($i.material = this.material),
      $i.material !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        Qi.copy(this.boundingSphere),
        Qi.applyMatrix4(n),
        e.ray.intersectsSphere(Qi) !== !1))
    )
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Ei),
          yc.multiplyMatrices(n, Ei),
          ($i.matrixWorld = yc),
          $i.raycast(e, Ys);
        for (let a = 0, o = Ys.length; a < o; a++) {
          const c = Ys[a];
          (c.instanceId = r), (c.object = this), t.push(c);
        }
        Ys.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null &&
      (this.instanceColor = new eo(
        new Float32Array(this.instanceMatrix.count * 3).fill(1),
        3
      )),
      t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      i = n.length + 1;
    this.morphTexture === null &&
      (this.morphTexture = new vo(
        new Float32Array(i * this.count),
        i,
        this.count,
        uo,
        nn
      ));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++) a += n[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
      c = i * e;
    (r[c] = o), r.set(n, c + 1);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({ type: "dispose" }),
      this.morphTexture !== null &&
        (this.morphTexture.dispose(), (this.morphTexture = null));
  }
}
const Kr = new F(),
  Qu = new F(),
  ef = new Ge();
class wn {
  constructor(e = new F(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Kr.subVectors(n, t).cross(Qu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Kr),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || ef.getNormalMatrix(e),
      i = this.coplanarPoint(Kr).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const $n = new xn(),
  tf = new oe(0.5, 0.5),
  js = new F();
class bo {
  constructor(
    e = new wn(),
    t = new wn(),
    n = new wn(),
    i = new wn(),
    r = new wn(),
    a = new wn()
  ) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(i),
      o[4].copy(r),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = hn, n = !1) {
    const i = this.planes,
      r = e.elements,
      a = r[0],
      o = r[1],
      c = r[2],
      l = r[3],
      h = r[4],
      u = r[5],
      f = r[6],
      d = r[7],
      x = r[8],
      g = r[9],
      m = r[10],
      p = r[11],
      R = r[12],
      _ = r[13],
      S = r[14],
      L = r[15];
    if (
      (i[0].setComponents(l - a, d - h, p - x, L - R).normalize(),
      i[1].setComponents(l + a, d + h, p + x, L + R).normalize(),
      i[2].setComponents(l + o, d + u, p + g, L + _).normalize(),
      i[3].setComponents(l - o, d - u, p - g, L - _).normalize(),
      n)
    )
      i[4].setComponents(c, f, m, S).normalize(),
        i[5].setComponents(l - c, d - f, p - m, L - S).normalize();
    else if (
      (i[4].setComponents(l - c, d - f, p - m, L - S).normalize(), t === hn)
    )
      i[5].setComponents(l + c, d + f, p + m, L + S).normalize();
    else if (t === pr) i[5].setComponents(c, f, m, S).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        $n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        $n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere($n);
  }
  intersectsSprite(e) {
    $n.center.set(0, 0, 0);
    const t = tf.distanceTo(e.center);
    return (
      ($n.radius = 0.7071067811865476 + t),
      $n.applyMatrix4(e.matrixWorld),
      this.intersectsSphere($n)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((js.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (js.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (js.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(js) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Vl extends un {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new We(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const xr = new F(),
  gr = new F(),
  Mc = new Ye(),
  es = new Es(),
  Ks = new xn(),
  Zr = new F(),
  Sc = new F();
class Mo extends pt {
  constructor(e = new kt(), t = new Vl()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        xr.fromBufferAttribute(t, i - 1),
          gr.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += xr.distanceTo(gr));
      e.setAttribute("lineDistance", new Bt(n, 1));
    } else
      Ue(
        "Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ks.copy(n.boundingSphere),
      Ks.applyMatrix4(i),
      (Ks.radius += r),
      e.ray.intersectsSphere(Ks) === !1)
    )
      return;
    Mc.copy(i).invert(), es.copy(e.ray).applyMatrix4(Mc);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = this.isLineSegments ? 2 : 1,
      h = n.index,
      f = n.attributes.position;
    if (h !== null) {
      const d = Math.max(0, a.start),
        x = Math.min(h.count, a.start + a.count);
      for (let g = d, m = x - 1; g < m; g += l) {
        const p = h.getX(g),
          R = h.getX(g + 1),
          _ = Zs(this, e, es, c, p, R, g);
        _ && t.push(_);
      }
      if (this.isLineLoop) {
        const g = h.getX(x - 1),
          m = h.getX(d),
          p = Zs(this, e, es, c, g, m, x - 1);
        p && t.push(p);
      }
    } else {
      const d = Math.max(0, a.start),
        x = Math.min(f.count, a.start + a.count);
      for (let g = d, m = x - 1; g < m; g += l) {
        const p = Zs(this, e, es, c, g, g + 1, g);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const g = Zs(this, e, es, c, x - 1, d, x - 1);
        g && t.push(g);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
}
function Zs(s, e, t, n, i, r, a) {
  const o = s.geometry.attributes.position;
  if (
    (xr.fromBufferAttribute(o, i),
    gr.fromBufferAttribute(o, r),
    t.distanceSqToSegment(xr, gr, Zr, Sc) > n)
  )
    return;
  Zr.applyMatrix4(s.matrixWorld);
  const l = e.ray.origin.distanceTo(Zr);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      point: Sc.clone().applyMatrix4(s.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s,
    };
}
const Tc = new F(),
  Ec = new F();
class nf extends Mo {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Tc.fromBufferAttribute(t, i),
          Ec.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + Tc.distanceTo(Ec));
      e.setAttribute("lineDistance", new Bt(n, 1));
    } else
      Ue(
        "LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class sf extends Mo {
  constructor(e, t) {
    super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
  }
}
class Hl extends un {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new We(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const Ac = new Ye(),
  to = new Es(),
  Js = new xn(),
  $s = new F();
class rf extends pt {
  constructor(e = new kt(), t = new Hl()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Js.copy(n.boundingSphere),
      Js.applyMatrix4(i),
      (Js.radius += r),
      e.ray.intersectsSphere(Js) === !1)
    )
      return;
    Ac.copy(i).invert(), to.copy(e.ray).applyMatrix4(Ac);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = n.index,
      u = n.attributes.position;
    if (l !== null) {
      const f = Math.max(0, a.start),
        d = Math.min(l.count, a.start + a.count);
      for (let x = f, g = d; x < g; x++) {
        const m = l.getX(x);
        $s.fromBufferAttribute(u, m), wc($s, m, c, i, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start),
        d = Math.min(u.count, a.start + a.count);
      for (let x = f, g = d; x < g; x++)
        $s.fromBufferAttribute(u, x), wc($s, x, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
}
function wc(s, e, t, n, i, r, a) {
  const o = to.distanceSqToPoint(s);
  if (o < t) {
    const c = new F();
    to.closestPointToPoint(s, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    r.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a,
    });
  }
}
class Gl extends St {
  constructor(e, t, n = oi, i, r, a, o = Dt, c = Dt, l, h = ms, u = 1) {
    if (h !== ms && h !== xs)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    const f = { width: e, height: t, depth: u };
    super(f, i, r, a, o, c, h, n, l),
      (this.isDepthTexture = !0),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.source = new _o(Object.assign({}, e.image))),
      (this.compareFunction = e.compareFunction),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class Wl extends St {
  constructor(e = null) {
    super(), (this.sourceTexture = e), (this.isExternalTexture = !0);
  }
  copy(e) {
    return super.copy(e), (this.sourceTexture = e.sourceTexture), this;
  }
}
class gn {
  constructor() {
    (this.type = "Curve"),
      (this.arcLengthDivisions = 200),
      (this.needsUpdate = !1),
      (this.cacheArcLengths = null);
  }
  getPoint() {
    Ue("Curve: .getPoint() not implemented.");
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n,
      i = this.getPoint(0),
      r = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      (n = this.getPoint(a / e)), (r += n.distanceTo(i)), t.push(r), (i = n);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t = null) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let a;
    t ? (a = t) : (a = e * n[r - 1]);
    let o = 0,
      c = r - 1,
      l;
    for (; o <= c; )
      if (((i = Math.floor(o + (c - o) / 2)), (l = n[i] - a), l < 0)) o = i + 1;
      else if (l > 0) c = i - 1;
      else {
        c = i;
        break;
      }
    if (((i = c), n[i] === a)) return i / (r - 1);
    const h = n[i],
      f = n[i + 1] - h,
      d = (a - h) / f;
    return (i + d) / (r - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4,
      r = e + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const a = this.getPoint(i),
      o = this.getPoint(r),
      c = t || (a.isVector2 ? new oe() : new F());
    return c.copy(o).sub(a).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t = !1) {
    const n = new F(),
      i = [],
      r = [],
      a = [],
      o = new F(),
      c = new Ye();
    for (let d = 0; d <= e; d++) {
      const x = d / e;
      i[d] = this.getTangentAt(x, new F());
    }
    (r[0] = new F()), (a[0] = new F());
    let l = Number.MAX_VALUE;
    const h = Math.abs(i[0].x),
      u = Math.abs(i[0].y),
      f = Math.abs(i[0].z);
    h <= l && ((l = h), n.set(1, 0, 0)),
      u <= l && ((l = u), n.set(0, 1, 0)),
      f <= l && n.set(0, 0, 1),
      o.crossVectors(i[0], n).normalize(),
      r[0].crossVectors(i[0], o),
      a[0].crossVectors(i[0], r[0]);
    for (let d = 1; d <= e; d++) {
      if (
        ((r[d] = r[d - 1].clone()),
        (a[d] = a[d - 1].clone()),
        o.crossVectors(i[d - 1], i[d]),
        o.length() > Number.EPSILON)
      ) {
        o.normalize();
        const x = Math.acos(je(i[d - 1].dot(i[d]), -1, 1));
        r[d].applyMatrix4(c.makeRotationAxis(o, x));
      }
      a[d].crossVectors(i[d], r[d]);
    }
    if (t === !0) {
      let d = Math.acos(je(r[0].dot(r[e]), -1, 1));
      (d /= e), i[0].dot(o.crossVectors(r[0], r[e])) > 0 && (d = -d);
      for (let x = 1; x <= e; x++)
        r[x].applyMatrix4(c.makeRotationAxis(i[x], d * x)),
          a[x].crossVectors(i[x], r[x]);
    }
    return { tangents: i, normals: r, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    const e = {
      metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class So extends gn {
  constructor(
    e = 0,
    t = 0,
    n = 1,
    i = 1,
    r = 0,
    a = Math.PI * 2,
    o = !1,
    c = 0
  ) {
    super(),
      (this.isEllipseCurve = !0),
      (this.type = "EllipseCurve"),
      (this.aX = e),
      (this.aY = t),
      (this.xRadius = n),
      (this.yRadius = i),
      (this.aStartAngle = r),
      (this.aEndAngle = a),
      (this.aClockwise = o),
      (this.aRotation = c);
  }
  getPoint(e, t = new oe()) {
    const n = t,
      i = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += i;
    for (; r > i; ) r -= i;
    r < Number.EPSILON && (a ? (r = 0) : (r = i)),
      this.aClockwise === !0 && !a && (r === i ? (r = -i) : (r = r - i));
    const o = this.aStartAngle + e * r;
    let c = this.aX + this.xRadius * Math.cos(o),
      l = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation),
        u = Math.sin(this.aRotation),
        f = c - this.aX,
        d = l - this.aY;
      (c = f * h - d * u + this.aX), (l = f * u + d * h + this.aY);
    }
    return n.set(c, l);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.aX = this.aX),
      (e.aY = this.aY),
      (e.xRadius = this.xRadius),
      (e.yRadius = this.yRadius),
      (e.aStartAngle = this.aStartAngle),
      (e.aEndAngle = this.aEndAngle),
      (e.aClockwise = this.aClockwise),
      (e.aRotation = this.aRotation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
}
class af extends So {
  constructor(e, t, n, i, r, a) {
    super(e, t, n, n, i, r, a),
      (this.isArcCurve = !0),
      (this.type = "ArcCurve");
  }
}
function To() {
  let s = 0,
    e = 0,
    t = 0,
    n = 0;
  function i(r, a, o, c) {
    (s = r),
      (e = o),
      (t = -3 * r + 3 * a - 2 * o - c),
      (n = 2 * r - 2 * a + o + c);
  }
  return {
    initCatmullRom: function (r, a, o, c, l) {
      i(a, o, l * (o - r), l * (c - a));
    },
    initNonuniformCatmullRom: function (r, a, o, c, l, h, u) {
      let f = (a - r) / l - (o - r) / (l + h) + (o - a) / h,
        d = (o - a) / h - (c - a) / (h + u) + (c - o) / u;
      (f *= h), (d *= h), i(a, o, f, d);
    },
    calc: function (r) {
      const a = r * r,
        o = a * r;
      return s + e * r + t * a + n * o;
    },
  };
}
const Qs = new F(),
  Jr = new To(),
  $r = new To(),
  Qr = new To();
class of extends gn {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(),
      (this.isCatmullRomCurve3 = !0),
      (this.type = "CatmullRomCurve3"),
      (this.points = e),
      (this.closed = t),
      (this.curveType = n),
      (this.tension = i);
  }
  getPoint(e, t = new F()) {
    const n = t,
      i = this.points,
      r = i.length,
      a = (r - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a),
      c = a - o;
    this.closed
      ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r)
      : c === 0 && o === r - 1 && ((o = r - 2), (c = 1));
    let l, h;
    this.closed || o > 0
      ? (l = i[(o - 1) % r])
      : (Qs.subVectors(i[0], i[1]).add(i[0]), (l = Qs));
    const u = i[o % r],
      f = i[(o + 1) % r];
    if (
      (this.closed || o + 2 < r
        ? (h = i[(o + 2) % r])
        : (Qs.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (h = Qs)),
      this.curveType === "centripetal" || this.curveType === "chordal")
    ) {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let x = Math.pow(l.distanceToSquared(u), d),
        g = Math.pow(u.distanceToSquared(f), d),
        m = Math.pow(f.distanceToSquared(h), d);
      g < 1e-4 && (g = 1),
        x < 1e-4 && (x = g),
        m < 1e-4 && (m = g),
        Jr.initNonuniformCatmullRom(l.x, u.x, f.x, h.x, x, g, m),
        $r.initNonuniformCatmullRom(l.y, u.y, f.y, h.y, x, g, m),
        Qr.initNonuniformCatmullRom(l.z, u.z, f.z, h.z, x, g, m);
    } else
      this.curveType === "catmullrom" &&
        (Jr.initCatmullRom(l.x, u.x, f.x, h.x, this.tension),
        $r.initCatmullRom(l.y, u.y, f.y, h.y, this.tension),
        Qr.initCatmullRom(l.z, u.z, f.z, h.z, this.tension));
    return n.set(Jr.calc(c), $r.calc(c), Qr.calc(c)), n;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return (
      (e.closed = this.closed),
      (e.curveType = this.curveType),
      (e.tension = this.tension),
      e
    );
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new F().fromArray(i));
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
}
function Rc(s, e, t, n, i) {
  const r = (n - e) * 0.5,
    a = (i - t) * 0.5,
    o = s * s,
    c = s * o;
  return (
    (2 * t - 2 * n + r + a) * c + (-3 * t + 3 * n - 2 * r - a) * o + r * s + t
  );
}
function cf(s, e) {
  const t = 1 - s;
  return t * t * e;
}
function lf(s, e) {
  return 2 * (1 - s) * s * e;
}
function hf(s, e) {
  return s * s * e;
}
function ls(s, e, t, n) {
  return cf(s, e) + lf(s, t) + hf(s, n);
}
function uf(s, e) {
  const t = 1 - s;
  return t * t * t * e;
}
function ff(s, e) {
  const t = 1 - s;
  return 3 * t * t * s * e;
}
function df(s, e) {
  return 3 * (1 - s) * s * s * e;
}
function pf(s, e) {
  return s * s * s * e;
}
function hs(s, e, t, n, i) {
  return uf(s, e) + ff(s, t) + df(s, n) + pf(s, i);
}
class Xl extends gn {
  constructor(e = new oe(), t = new oe(), n = new oe(), i = new oe()) {
    super(),
      (this.isCubicBezierCurve = !0),
      (this.type = "CubicBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(e, t = new oe()) {
    const n = t,
      i = this.v0,
      r = this.v1,
      a = this.v2,
      o = this.v3;
    return n.set(hs(e, i.x, r.x, a.x, o.x), hs(e, i.y, r.y, a.y, o.y)), n;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
class mf extends gn {
  constructor(e = new F(), t = new F(), n = new F(), i = new F()) {
    super(),
      (this.isCubicBezierCurve3 = !0),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(e, t = new F()) {
    const n = t,
      i = this.v0,
      r = this.v1,
      a = this.v2,
      o = this.v3;
    return (
      n.set(
        hs(e, i.x, r.x, a.x, o.x),
        hs(e, i.y, r.y, a.y, o.y),
        hs(e, i.z, r.z, a.z, o.z)
      ),
      n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
class ql extends gn {
  constructor(e = new oe(), t = new oe()) {
    super(),
      (this.isLineCurve = !0),
      (this.type = "LineCurve"),
      (this.v1 = e),
      (this.v2 = t);
  }
  getPoint(e, t = new oe()) {
    const n = t;
    return (
      e === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
      n
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new oe()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class xf extends gn {
  constructor(e = new F(), t = new F()) {
    super(),
      (this.isLineCurve3 = !0),
      (this.type = "LineCurve3"),
      (this.v1 = e),
      (this.v2 = t);
  }
  getPoint(e, t = new F()) {
    const n = t;
    return (
      e === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
      n
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new F()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class Yl extends gn {
  constructor(e = new oe(), t = new oe(), n = new oe()) {
    super(),
      (this.isQuadraticBezierCurve = !0),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n);
  }
  getPoint(e, t = new oe()) {
    const n = t,
      i = this.v0,
      r = this.v1,
      a = this.v2;
    return n.set(ls(e, i.x, r.x, a.x), ls(e, i.y, r.y, a.y)), n;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
class gf extends gn {
  constructor(e = new F(), t = new F(), n = new F()) {
    super(),
      (this.isQuadraticBezierCurve3 = !0),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n);
  }
  getPoint(e, t = new F()) {
    const n = t,
      i = this.v0,
      r = this.v1,
      a = this.v2;
    return (
      n.set(ls(e, i.x, r.x, a.x), ls(e, i.y, r.y, a.y), ls(e, i.z, r.z, a.z)), n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
class jl extends gn {
  constructor(e = []) {
    super(),
      (this.isSplineCurve = !0),
      (this.type = "SplineCurve"),
      (this.points = e);
  }
  getPoint(e, t = new oe()) {
    const n = t,
      i = this.points,
      r = (i.length - 1) * e,
      a = Math.floor(r),
      o = r - a,
      c = i[a === 0 ? a : a - 1],
      l = i[a],
      h = i[a > i.length - 2 ? i.length - 1 : a + 1],
      u = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(Rc(o, c.x, l.x, h.x, u.x), Rc(o, c.y, l.y, h.y, u.y)), n;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new oe().fromArray(i));
    }
    return this;
  }
}
var no = Object.freeze({
  __proto__: null,
  ArcCurve: af,
  CatmullRomCurve3: of,
  CubicBezierCurve: Xl,
  CubicBezierCurve3: mf,
  EllipseCurve: So,
  LineCurve: ql,
  LineCurve3: xf,
  QuadraticBezierCurve: Yl,
  QuadraticBezierCurve3: gf,
  SplineCurve: jl,
});
class _f extends gn {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new no[n](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const n = e * this.getLength(),
      i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const a = i[r] - n,
          o = this.curves[r],
          c = o.getLength(),
          l = c === 0 ? 0 : 1 - a / c;
        return o.getPointAt(l, t);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      (t += this.curves[n].getLength()), e.push(t);
    return (this.cacheLengths = e), e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const a = r[i],
        o = a.isEllipseCurve
          ? e * 2
          : a.isLineCurve || a.isLineCurve3
          ? 1
          : a.isSplineCurve
          ? e * a.points.length
          : e,
        c = a.getPoints(o);
      for (let l = 0; l < c.length; l++) {
        const h = c[l];
        (n && n.equals(h)) || (t.push(h), (n = h));
      }
    }
    return (
      this.autoClose &&
        t.length > 1 &&
        !t[t.length - 1].equals(t[0]) &&
        t.push(t[0]),
      t
    );
  }
  copy(e) {
    super.copy(e), (this.curves = []);
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return (this.autoClose = e.autoClose), this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.autoClose = this.autoClose), (e.curves = []);
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new no[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Ii extends _f {
  constructor(e) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new oe()),
      e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new ql(this.currentPoint.clone(), new oe(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const r = new Yl(this.currentPoint.clone(), new oe(e, t), new oe(n, i));
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, r, a) {
    const o = new Xl(
      this.currentPoint.clone(),
      new oe(e, t),
      new oe(n, i),
      new oe(r, a)
    );
    return this.curves.push(o), this.currentPoint.set(r, a), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e),
      n = new jl(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, r, a) {
    const o = this.currentPoint.x,
      c = this.currentPoint.y;
    return this.absarc(e + o, t + c, n, i, r, a), this;
  }
  absarc(e, t, n, i, r, a) {
    return this.absellipse(e, t, n, n, i, r, a), this;
  }
  ellipse(e, t, n, i, r, a, o, c) {
    const l = this.currentPoint.x,
      h = this.currentPoint.y;
    return this.absellipse(e + l, t + h, n, i, r, a, o, c), this;
  }
  absellipse(e, t, n, i, r, a, o, c) {
    const l = new So(e, t, n, i, r, a, o, c);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.currentPoint = this.currentPoint.toArray()), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class us extends Ii {
  constructor(e) {
    super(e), (this.uuid = Kt()), (this.type = "Shape"), (this.holes = []);
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
  }
  copy(e) {
    super.copy(e), (this.holes = []);
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.uuid = this.uuid), (e.holes = []);
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []);
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new Ii().fromJSON(i));
    }
    return this;
  }
}
function vf(s, e, t = 2) {
  const n = e && e.length,
    i = n ? e[0] * t : s.length;
  let r = Kl(s, 0, i, t, !0);
  const a = [];
  if (!r || r.next === r.prev) return a;
  let o, c, l;
  if ((n && (r = Tf(s, e, r, t)), s.length > 80 * t)) {
    (o = s[0]), (c = s[1]);
    let h = o,
      u = c;
    for (let f = t; f < i; f += t) {
      const d = s[f],
        x = s[f + 1];
      d < o && (o = d), x < c && (c = x), d > h && (h = d), x > u && (u = x);
    }
    (l = Math.max(h - o, u - c)), (l = l !== 0 ? 32767 / l : 0);
  }
  return bs(r, a, t, o, c, l, 0), a;
}
function Kl(s, e, t, n, i) {
  let r;
  if (i === Uf(s, e, t, n) > 0)
    for (let a = e; a < t; a += n) r = Cc((a / n) | 0, s[a], s[a + 1], r);
  else
    for (let a = t - n; a >= e; a -= n) r = Cc((a / n) | 0, s[a], s[a + 1], r);
  return r && zi(r, r.next) && (Ss(r), (r = r.next)), r;
}
function ci(s, e) {
  if (!s) return s;
  e || (e = s);
  let t = s,
    n;
  do
    if (
      ((n = !1), !t.steiner && (zi(t, t.next) || dt(t.prev, t, t.next) === 0))
    ) {
      if ((Ss(t), (t = e = t.prev), t === t.next)) break;
      n = !0;
    } else t = t.next;
  while (n || t !== e);
  return e;
}
function bs(s, e, t, n, i, r, a) {
  if (!s) return;
  !a && r && Cf(s, n, i, r);
  let o = s;
  for (; s.prev !== s.next; ) {
    const c = s.prev,
      l = s.next;
    if (r ? bf(s, n, i, r) : yf(s)) {
      e.push(c.i, s.i, l.i), Ss(s), (s = l.next), (o = l.next);
      continue;
    }
    if (((s = l), s === o)) {
      a
        ? a === 1
          ? ((s = Mf(ci(s), e)), bs(s, e, t, n, i, r, 2))
          : a === 2 && Sf(s, e, t, n, i, r)
        : bs(ci(s), e, t, n, i, r, 1);
      break;
    }
  }
}
function yf(s) {
  const e = s.prev,
    t = s,
    n = s.next;
  if (dt(e, t, n) >= 0) return !1;
  const i = e.x,
    r = t.x,
    a = n.x,
    o = e.y,
    c = t.y,
    l = n.y,
    h = Math.min(i, r, a),
    u = Math.min(o, c, l),
    f = Math.max(i, r, a),
    d = Math.max(o, c, l);
  let x = n.next;
  for (; x !== e; ) {
    if (
      x.x >= h &&
      x.x <= f &&
      x.y >= u &&
      x.y <= d &&
      rs(i, o, r, c, a, l, x.x, x.y) &&
      dt(x.prev, x, x.next) >= 0
    )
      return !1;
    x = x.next;
  }
  return !0;
}
function bf(s, e, t, n) {
  const i = s.prev,
    r = s,
    a = s.next;
  if (dt(i, r, a) >= 0) return !1;
  const o = i.x,
    c = r.x,
    l = a.x,
    h = i.y,
    u = r.y,
    f = a.y,
    d = Math.min(o, c, l),
    x = Math.min(h, u, f),
    g = Math.max(o, c, l),
    m = Math.max(h, u, f),
    p = io(d, x, e, t, n),
    R = io(g, m, e, t, n);
  let _ = s.prevZ,
    S = s.nextZ;
  for (; _ && _.z >= p && S && S.z <= R; ) {
    if (
      (_.x >= d &&
        _.x <= g &&
        _.y >= x &&
        _.y <= m &&
        _ !== i &&
        _ !== a &&
        rs(o, h, c, u, l, f, _.x, _.y) &&
        dt(_.prev, _, _.next) >= 0) ||
      ((_ = _.prevZ),
      S.x >= d &&
        S.x <= g &&
        S.y >= x &&
        S.y <= m &&
        S !== i &&
        S !== a &&
        rs(o, h, c, u, l, f, S.x, S.y) &&
        dt(S.prev, S, S.next) >= 0)
    )
      return !1;
    S = S.nextZ;
  }
  for (; _ && _.z >= p; ) {
    if (
      _.x >= d &&
      _.x <= g &&
      _.y >= x &&
      _.y <= m &&
      _ !== i &&
      _ !== a &&
      rs(o, h, c, u, l, f, _.x, _.y) &&
      dt(_.prev, _, _.next) >= 0
    )
      return !1;
    _ = _.prevZ;
  }
  for (; S && S.z <= R; ) {
    if (
      S.x >= d &&
      S.x <= g &&
      S.y >= x &&
      S.y <= m &&
      S !== i &&
      S !== a &&
      rs(o, h, c, u, l, f, S.x, S.y) &&
      dt(S.prev, S, S.next) >= 0
    )
      return !1;
    S = S.nextZ;
  }
  return !0;
}
function Mf(s, e) {
  let t = s;
  do {
    const n = t.prev,
      i = t.next.next;
    !zi(n, i) &&
      Jl(n, t, t.next, i) &&
      Ms(n, i) &&
      Ms(i, n) &&
      (e.push(n.i, t.i, i.i), Ss(t), Ss(t.next), (t = s = i)),
      (t = t.next);
  } while (t !== s);
  return ci(t);
}
function Sf(s, e, t, n, i, r) {
  let a = s;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && If(a, o)) {
        let c = $l(a, o);
        (a = ci(a, a.next)),
          (c = ci(c, c.next)),
          bs(a, e, t, n, i, r, 0),
          bs(c, e, t, n, i, r, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== s);
}
function Tf(s, e, t, n) {
  const i = [];
  for (let r = 0, a = e.length; r < a; r++) {
    const o = e[r] * n,
      c = r < a - 1 ? e[r + 1] * n : s.length,
      l = Kl(s, o, c, n, !1);
    l === l.next && (l.steiner = !0), i.push(Lf(l));
  }
  i.sort(Ef);
  for (let r = 0; r < i.length; r++) t = Af(i[r], t);
  return t;
}
function Ef(s, e) {
  let t = s.x - e.x;
  if (t === 0 && ((t = s.y - e.y), t === 0)) {
    const n = (s.next.y - s.y) / (s.next.x - s.x),
      i = (e.next.y - e.y) / (e.next.x - e.x);
    t = n - i;
  }
  return t;
}
function Af(s, e) {
  const t = wf(s, e);
  if (!t) return e;
  const n = $l(t, s);
  return ci(n, n.next), ci(t, t.next);
}
function wf(s, e) {
  let t = e;
  const n = s.x,
    i = s.y;
  let r = -1 / 0,
    a;
  if (zi(s, t)) return t;
  do {
    if (zi(s, t.next)) return t.next;
    if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
      const u = t.x + ((i - t.y) * (t.next.x - t.x)) / (t.next.y - t.y);
      if (
        u <= n &&
        u > r &&
        ((r = u), (a = t.x < t.next.x ? t : t.next), u === n)
      )
        return a;
    }
    t = t.next;
  } while (t !== e);
  if (!a) return null;
  const o = a,
    c = a.x,
    l = a.y;
  let h = 1 / 0;
  t = a;
  do {
    if (
      n >= t.x &&
      t.x >= c &&
      n !== t.x &&
      Zl(i < l ? n : r, i, c, l, i < l ? r : n, i, t.x, t.y)
    ) {
      const u = Math.abs(i - t.y) / (n - t.x);
      Ms(t, s) &&
        (u < h || (u === h && (t.x > a.x || (t.x === a.x && Rf(a, t))))) &&
        ((a = t), (h = u));
    }
    t = t.next;
  } while (t !== o);
  return a;
}
function Rf(s, e) {
  return dt(s.prev, s, e.prev) < 0 && dt(e.next, s, s.next) < 0;
}
function Cf(s, e, t, n) {
  let i = s;
  do
    i.z === 0 && (i.z = io(i.x, i.y, e, t, n)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next);
  while (i !== s);
  (i.prevZ.nextZ = null), (i.prevZ = null), Pf(i);
}
function Pf(s) {
  let e,
    t = 1;
  do {
    let n = s,
      i;
    s = null;
    let r = null;
    for (e = 0; n; ) {
      e++;
      let a = n,
        o = 0;
      for (let l = 0; l < t && (o++, (a = a.nextZ), !!a); l++);
      let c = t;
      for (; o > 0 || (c > 0 && a); )
        o !== 0 && (c === 0 || !a || n.z <= a.z)
          ? ((i = n), (n = n.nextZ), o--)
          : ((i = a), (a = a.nextZ), c--),
          r ? (r.nextZ = i) : (s = i),
          (i.prevZ = r),
          (r = i);
      n = a;
    }
    (r.nextZ = null), (t *= 2);
  } while (e > 1);
  return s;
}
function io(s, e, t, n, i) {
  return (
    (s = ((s - t) * i) | 0),
    (e = ((e - n) * i) | 0),
    (s = (s | (s << 8)) & 16711935),
    (s = (s | (s << 4)) & 252645135),
    (s = (s | (s << 2)) & 858993459),
    (s = (s | (s << 1)) & 1431655765),
    (e = (e | (e << 8)) & 16711935),
    (e = (e | (e << 4)) & 252645135),
    (e = (e | (e << 2)) & 858993459),
    (e = (e | (e << 1)) & 1431655765),
    s | (e << 1)
  );
}
function Lf(s) {
  let e = s,
    t = s;
  do (e.x < t.x || (e.x === t.x && e.y < t.y)) && (t = e), (e = e.next);
  while (e !== s);
  return t;
}
function Zl(s, e, t, n, i, r, a, o) {
  return (
    (i - a) * (e - o) >= (s - a) * (r - o) &&
    (s - a) * (n - o) >= (t - a) * (e - o) &&
    (t - a) * (r - o) >= (i - a) * (n - o)
  );
}
function rs(s, e, t, n, i, r, a, o) {
  return !(s === a && e === o) && Zl(s, e, t, n, i, r, a, o);
}
function If(s, e) {
  return (
    s.next.i !== e.i &&
    s.prev.i !== e.i &&
    !Df(s, e) &&
    ((Ms(s, e) &&
      Ms(e, s) &&
      Nf(s, e) &&
      (dt(s.prev, s, e.prev) || dt(s, e.prev, e))) ||
      (zi(s, e) && dt(s.prev, s, s.next) > 0 && dt(e.prev, e, e.next) > 0))
  );
}
function dt(s, e, t) {
  return (e.y - s.y) * (t.x - e.x) - (e.x - s.x) * (t.y - e.y);
}
function zi(s, e) {
  return s.x === e.x && s.y === e.y;
}
function Jl(s, e, t, n) {
  const i = tr(dt(s, e, t)),
    r = tr(dt(s, e, n)),
    a = tr(dt(t, n, s)),
    o = tr(dt(t, n, e));
  return !!(
    (i !== r && a !== o) ||
    (i === 0 && er(s, t, e)) ||
    (r === 0 && er(s, n, e)) ||
    (a === 0 && er(t, s, n)) ||
    (o === 0 && er(t, e, n))
  );
}
function er(s, e, t) {
  return (
    e.x <= Math.max(s.x, t.x) &&
    e.x >= Math.min(s.x, t.x) &&
    e.y <= Math.max(s.y, t.y) &&
    e.y >= Math.min(s.y, t.y)
  );
}
function tr(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0;
}
function Df(s, e) {
  let t = s;
  do {
    if (
      t.i !== s.i &&
      t.next.i !== s.i &&
      t.i !== e.i &&
      t.next.i !== e.i &&
      Jl(t, t.next, s, e)
    )
      return !0;
    t = t.next;
  } while (t !== s);
  return !1;
}
function Ms(s, e) {
  return dt(s.prev, s, s.next) < 0
    ? dt(s, e, s.next) >= 0 && dt(s, s.prev, e) >= 0
    : dt(s, e, s.prev) < 0 || dt(s, s.next, e) < 0;
}
function Nf(s, e) {
  let t = s,
    n = !1;
  const i = (s.x + e.x) / 2,
    r = (s.y + e.y) / 2;
  do
    t.y > r != t.next.y > r &&
      t.next.y !== t.y &&
      i < ((t.next.x - t.x) * (r - t.y)) / (t.next.y - t.y) + t.x &&
      (n = !n),
      (t = t.next);
  while (t !== s);
  return n;
}
function $l(s, e) {
  const t = so(s.i, s.x, s.y),
    n = so(e.i, e.x, e.y),
    i = s.next,
    r = e.prev;
  return (
    (s.next = e),
    (e.prev = s),
    (t.next = i),
    (i.prev = t),
    (n.next = t),
    (t.prev = n),
    (r.next = n),
    (n.prev = r),
    n
  );
}
function Cc(s, e, t, n) {
  const i = so(s, e, t);
  return (
    n
      ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  );
}
function Ss(s) {
  (s.next.prev = s.prev),
    (s.prev.next = s.next),
    s.prevZ && (s.prevZ.nextZ = s.nextZ),
    s.nextZ && (s.nextZ.prevZ = s.prevZ);
}
function so(s, e, t) {
  return {
    i: s,
    x: e,
    y: t,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null,
    steiner: !1,
  };
}
function Uf(s, e, t, n) {
  let i = 0;
  for (let r = e, a = t - n; r < t; r += n)
    (i += (s[a] - s[r]) * (s[r + 1] + s[a + 1])), (a = r);
  return i;
}
class Ff {
  static triangulate(e, t, n = 2) {
    return vf(e, t, n);
  }
}
class Hn {
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, r = 0; r < t; i = r++)
      n += e[i].x * e[r].y - e[r].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Hn.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [],
      i = [],
      r = [];
    Pc(e), Lc(n, e);
    let a = e.length;
    t.forEach(Pc);
    for (let c = 0; c < t.length; c++)
      i.push(a), (a += t[c].length), Lc(n, t[c]);
    const o = Ff.triangulate(n, i);
    for (let c = 0; c < o.length; c += 3) r.push(o.slice(c, c + 3));
    return r;
  }
}
function Pc(s) {
  const e = s.length;
  e > 2 && s[e - 1].equals(s[0]) && s.pop();
}
function Lc(s, e) {
  for (let t = 0; t < e.length; t++) s.push(e[t].x), s.push(e[t].y);
}
class Ql extends kt {
  constructor(
    e = new us([
      new oe(0.5, 0.5),
      new oe(-0.5, 0.5),
      new oe(-0.5, -0.5),
      new oe(0.5, -0.5),
    ]),
    t = {}
  ) {
    super(),
      (this.type = "ExtrudeGeometry"),
      (this.parameters = { shapes: e, options: t }),
      (e = Array.isArray(e) ? e : [e]);
    const n = this,
      i = [],
      r = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o];
      a(l);
    }
    this.setAttribute("position", new Bt(i, 3)),
      this.setAttribute("uv", new Bt(r, 2)),
      this.computeVertexNormals();
    function a(o) {
      const c = [],
        l = t.curveSegments !== void 0 ? t.curveSegments : 12,
        h = t.steps !== void 0 ? t.steps : 1,
        u = t.depth !== void 0 ? t.depth : 1;
      let f = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0,
        d = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2,
        x = t.bevelSize !== void 0 ? t.bevelSize : d - 0.1,
        g = t.bevelOffset !== void 0 ? t.bevelOffset : 0,
        m = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const p = t.extrudePath,
        R = t.UVGenerator !== void 0 ? t.UVGenerator : Of;
      let _,
        S = !1,
        L,
        w,
        I,
        N;
      p &&
        ((_ = p.getSpacedPoints(h)),
        (S = !0),
        (f = !1),
        (L = p.computeFrenetFrames(h, !1)),
        (w = new F()),
        (I = new F()),
        (N = new F())),
        f || ((m = 0), (d = 0), (x = 0), (g = 0));
      const E = o.extractPoints(l);
      let M = E.shape;
      const U = E.holes;
      if (!Hn.isClockWise(M)) {
        M = M.reverse();
        for (let z = 0, y = U.length; z < y; z++) {
          const j = U[z];
          Hn.isClockWise(j) && (U[z] = j.reverse());
        }
      }
      function K(z) {
        const j = 10000000000000001e-36;
        let J = z[0];
        for (let D = 1; D <= z.length; D++) {
          const C = D % z.length,
            ae = z[C],
            ce = ae.x - J.x,
            be = ae.y - J.y,
            P = ce * ce + be * be,
            v = Math.max(
              Math.abs(ae.x),
              Math.abs(ae.y),
              Math.abs(J.x),
              Math.abs(J.y)
            ),
            G = j * v * v;
          if (P <= G) {
            z.splice(C, 1), D--;
            continue;
          }
          J = ae;
        }
      }
      K(M), U.forEach(K);
      const Z = U.length,
        ne = M;
      for (let z = 0; z < Z; z++) {
        const y = U[z];
        M = M.concat(y);
      }
      function $(z, y, j) {
        return (
          y || Je("ExtrudeGeometry: vec does not exist"),
          z.clone().addScaledVector(y, j)
        );
      }
      const se = M.length;
      function k(z, y, j) {
        let J, D, C;
        const ae = z.x - y.x,
          ce = z.y - y.y,
          be = j.x - z.x,
          P = j.y - z.y,
          v = ae * ae + ce * ce,
          G = ae * P - ce * be;
        if (Math.abs(G) > Number.EPSILON) {
          const ie = Math.sqrt(v),
            fe = Math.sqrt(be * be + P * P),
            te = y.x - ce / ie,
            Le = y.y + ae / ie,
            ye = j.x - P / fe,
            Ne = j.y + be / fe,
            Pe = ((ye - te) * P - (Ne - Le) * be) / (ae * P - ce * be);
          (J = te + ae * Pe - z.x), (D = Le + ce * Pe - z.y);
          const me = J * J + D * D;
          if (me <= 2) return new oe(J, D);
          C = Math.sqrt(me / 2);
        } else {
          let ie = !1;
          ae > Number.EPSILON
            ? be > Number.EPSILON && (ie = !0)
            : ae < -Number.EPSILON
            ? be < -Number.EPSILON && (ie = !0)
            : Math.sign(ce) === Math.sign(P) && (ie = !0),
            ie
              ? ((J = -ce), (D = ae), (C = Math.sqrt(v)))
              : ((J = ae), (D = ce), (C = Math.sqrt(v / 2)));
        }
        return new oe(J / C, D / C);
      }
      const de = [];
      for (let z = 0, y = ne.length, j = y - 1, J = z + 1; z < y; z++, j++, J++)
        j === y && (j = 0),
          J === y && (J = 0),
          (de[z] = k(ne[z], ne[j], ne[J]));
      const pe = [];
      let Ae,
        Ve = de.concat();
      for (let z = 0, y = Z; z < y; z++) {
        const j = U[z];
        Ae = [];
        for (
          let J = 0, D = j.length, C = D - 1, ae = J + 1;
          J < D;
          J++, C++, ae++
        )
          C === D && (C = 0),
            ae === D && (ae = 0),
            (Ae[J] = k(j[J], j[C], j[ae]));
        pe.push(Ae), (Ve = Ve.concat(Ae));
      }
      let Ke;
      if (m === 0) Ke = Hn.triangulateShape(ne, U);
      else {
        const z = [],
          y = [];
        for (let j = 0; j < m; j++) {
          const J = j / m,
            D = d * Math.cos((J * Math.PI) / 2),
            C = x * Math.sin((J * Math.PI) / 2) + g;
          for (let ae = 0, ce = ne.length; ae < ce; ae++) {
            const be = $(ne[ae], de[ae], C);
            re(be.x, be.y, -D), J === 0 && z.push(be);
          }
          for (let ae = 0, ce = Z; ae < ce; ae++) {
            const be = U[ae];
            Ae = pe[ae];
            const P = [];
            for (let v = 0, G = be.length; v < G; v++) {
              const ie = $(be[v], Ae[v], C);
              re(ie.x, ie.y, -D), J === 0 && P.push(ie);
            }
            J === 0 && y.push(P);
          }
        }
        Ke = Hn.triangulateShape(z, y);
      }
      const Y = Ke.length,
        O = x + g;
      for (let z = 0; z < se; z++) {
        const y = f ? $(M[z], Ve[z], O) : M[z];
        S
          ? (I.copy(L.normals[0]).multiplyScalar(y.x),
            w.copy(L.binormals[0]).multiplyScalar(y.y),
            N.copy(_[0]).add(I).add(w),
            re(N.x, N.y, N.z))
          : re(y.x, y.y, 0);
      }
      for (let z = 1; z <= h; z++)
        for (let y = 0; y < se; y++) {
          const j = f ? $(M[y], Ve[y], O) : M[y];
          S
            ? (I.copy(L.normals[z]).multiplyScalar(j.x),
              w.copy(L.binormals[z]).multiplyScalar(j.y),
              N.copy(_[z]).add(I).add(w),
              re(N.x, N.y, N.z))
            : re(j.x, j.y, (u / h) * z);
        }
      for (let z = m - 1; z >= 0; z--) {
        const y = z / m,
          j = d * Math.cos((y * Math.PI) / 2),
          J = x * Math.sin((y * Math.PI) / 2) + g;
        for (let D = 0, C = ne.length; D < C; D++) {
          const ae = $(ne[D], de[D], J);
          re(ae.x, ae.y, u + j);
        }
        for (let D = 0, C = U.length; D < C; D++) {
          const ae = U[D];
          Ae = pe[D];
          for (let ce = 0, be = ae.length; ce < be; ce++) {
            const P = $(ae[ce], Ae[ce], J);
            S ? re(P.x, P.y + _[h - 1].y, _[h - 1].x + j) : re(P.x, P.y, u + j);
          }
        }
      }
      T(), b();
      function T() {
        const z = i.length / 3;
        if (f) {
          let y = 0,
            j = se * y;
          for (let J = 0; J < Y; J++) {
            const D = Ke[J];
            H(D[2] + j, D[1] + j, D[0] + j);
          }
          (y = h + m * 2), (j = se * y);
          for (let J = 0; J < Y; J++) {
            const D = Ke[J];
            H(D[0] + j, D[1] + j, D[2] + j);
          }
        } else {
          for (let y = 0; y < Y; y++) {
            const j = Ke[y];
            H(j[2], j[1], j[0]);
          }
          for (let y = 0; y < Y; y++) {
            const j = Ke[y];
            H(j[0] + se * h, j[1] + se * h, j[2] + se * h);
          }
        }
        n.addGroup(z, i.length / 3 - z, 0);
      }
      function b() {
        const z = i.length / 3;
        let y = 0;
        q(ne, y), (y += ne.length);
        for (let j = 0, J = U.length; j < J; j++) {
          const D = U[j];
          q(D, y), (y += D.length);
        }
        n.addGroup(z, i.length / 3 - z, 1);
      }
      function q(z, y) {
        let j = z.length;
        for (; --j >= 0; ) {
          const J = j;
          let D = j - 1;
          D < 0 && (D = z.length - 1);
          for (let C = 0, ae = h + m * 2; C < ae; C++) {
            const ce = se * C,
              be = se * (C + 1),
              P = y + J + ce,
              v = y + D + ce,
              G = y + D + be,
              ie = y + J + be;
            le(P, v, G, ie);
          }
        }
      }
      function re(z, y, j) {
        c.push(z), c.push(y), c.push(j);
      }
      function H(z, y, j) {
        ge(z), ge(y), ge(j);
        const J = i.length / 3,
          D = R.generateTopUV(n, i, J - 3, J - 2, J - 1);
        he(D[0]), he(D[1]), he(D[2]);
      }
      function le(z, y, j, J) {
        ge(z), ge(y), ge(J), ge(y), ge(j), ge(J);
        const D = i.length / 3,
          C = R.generateSideWallUV(n, i, D - 6, D - 3, D - 2, D - 1);
        he(C[0]), he(C[1]), he(C[3]), he(C[1]), he(C[2]), he(C[3]);
      }
      function ge(z) {
        i.push(c[z * 3 + 0]), i.push(c[z * 3 + 1]), i.push(c[z * 3 + 2]);
      }
      function he(z) {
        r.push(z.x), r.push(z.y);
      }
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  toJSON() {
    const e = super.toJSON(),
      t = this.parameters.shapes,
      n = this.parameters.options;
    return Bf(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let r = 0, a = e.shapes.length; r < a; r++) {
      const o = t[e.shapes[r]];
      n.push(o);
    }
    const i = e.options.extrudePath;
    return (
      i !== void 0 && (e.options.extrudePath = new no[i.type]().fromJSON(i)),
      new Ql(n, e.options)
    );
  }
}
const Of = {
  generateTopUV: function (s, e, t, n, i) {
    const r = e[t * 3],
      a = e[t * 3 + 1],
      o = e[n * 3],
      c = e[n * 3 + 1],
      l = e[i * 3],
      h = e[i * 3 + 1];
    return [new oe(r, a), new oe(o, c), new oe(l, h)];
  },
  generateSideWallUV: function (s, e, t, n, i, r) {
    const a = e[t * 3],
      o = e[t * 3 + 1],
      c = e[t * 3 + 2],
      l = e[n * 3],
      h = e[n * 3 + 1],
      u = e[n * 3 + 2],
      f = e[i * 3],
      d = e[i * 3 + 1],
      x = e[i * 3 + 2],
      g = e[r * 3],
      m = e[r * 3 + 1],
      p = e[r * 3 + 2];
    return Math.abs(o - h) < Math.abs(a - l)
      ? [new oe(a, 1 - c), new oe(l, 1 - u), new oe(f, 1 - x), new oe(g, 1 - p)]
      : [
          new oe(o, 1 - c),
          new oe(h, 1 - u),
          new oe(d, 1 - x),
          new oe(m, 1 - p),
        ];
  },
};
function Bf(s, e, t) {
  if (((t.shapes = []), Array.isArray(s)))
    for (let n = 0, i = s.length; n < i; n++) {
      const r = s[n];
      t.shapes.push(r.uuid);
    }
  else t.shapes.push(s.uuid);
  return (
    (t.options = Object.assign({}, e)),
    e.extrudePath !== void 0 &&
      (t.options.extrudePath = e.extrudePath.toJSON()),
    t
  );
}
class yr extends kt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const r = e / 2,
      a = t / 2,
      o = Math.floor(n),
      c = Math.floor(i),
      l = o + 1,
      h = c + 1,
      u = e / o,
      f = t / c,
      d = [],
      x = [],
      g = [],
      m = [];
    for (let p = 0; p < h; p++) {
      const R = p * f - a;
      for (let _ = 0; _ < l; _++) {
        const S = _ * u - r;
        x.push(S, -R, 0), g.push(0, 0, 1), m.push(_ / o), m.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let R = 0; R < o; R++) {
        const _ = R + l * p,
          S = R + l * (p + 1),
          L = R + 1 + l * (p + 1),
          w = R + 1 + l * p;
        d.push(_, S, w), d.push(S, L, w);
      }
    this.setIndex(d),
      this.setAttribute("position", new Bt(x, 3)),
      this.setAttribute("normal", new Bt(g, 3)),
      this.setAttribute("uv", new Bt(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new yr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Eo extends un {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.type = "MeshStandardMaterial"),
      (this.defines = { STANDARD: "" }),
      (this.color = new We(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new We(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Al),
      (this.normalScale = new oe(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new pn()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class _n extends Eo {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new oe(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return je((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new We(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new We(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new We(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._dispersion = 0),
      (this._iridescence = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, (this._dispersion = e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.anisotropy = e.anisotropy),
      (this.anisotropyRotation = e.anisotropyRotation),
      (this.anisotropyMap = e.anisotropyMap),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.dispersion = e.dispersion),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
class kf extends un {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Jh),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class zf extends un {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
function nr(s, e) {
  return !s || s.constructor === e
    ? s
    : typeof e.BYTES_PER_ELEMENT == "number"
    ? new e(s)
    : Array.prototype.slice.call(s);
}
function Vf(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function Hf(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length,
    n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Ic(s, e, t) {
  const n = s.length,
    i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let c = 0; c !== e; ++c) i[a++] = s[o + c];
  }
  return i;
}
function eh(s, e, t, n) {
  let i = 1,
    r = s[0];
  for (; r !== void 0 && r[n] === void 0; ) r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        (a = r[n]),
          a !== void 0 && (e.push(r.time), t.push(...a)),
          (r = s[i++]);
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        (a = r[n]),
          a !== void 0 && (e.push(r.time), a.toArray(t, t.length)),
          (r = s[i++]);
      while (r !== void 0);
    else
      do (a = r[n]), a !== void 0 && (e.push(r.time), t.push(a)), (r = s[i++]);
      while (r !== void 0);
}
class ws {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      r = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === o) break;
              if (((r = i), (i = t[++n]), e < i)) break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && ((n = 2), (r = o));
            for (let c = n - 2; ; ) {
              if (r === void 0)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === c) break;
              if (((i = r), (r = t[--n - 1]), e >= r)) break e;
            }
            (a = n), (n = 0);
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = (n + a) >>> 1;
          e < t[o] ? (a = o) : (n = o + 1);
        }
        if (((i = t[n]), (r = t[n - 1]), r === void 0))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (i === void 0)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[r + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class Gf extends ws {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: Xo, endingEnd: Xo });
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2,
      a = e + 1,
      o = i[r],
      c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case qo:
          (r = e), (o = 2 * t - n);
          break;
        case Yo:
          (r = i.length - 2), (o = t + i[r] - i[r + 1]);
          break;
        default:
          (r = e), (o = n);
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case qo:
          (a = e), (c = 2 * n - t);
          break;
        case Yo:
          (a = 1), (c = n + i[1] - i[0]);
          break;
        default:
          (a = e - 1), (c = t);
      }
    const l = (n - t) * 0.5,
      h = this.valueSize;
    (this._weightPrev = l / (t - o)),
      (this._weightNext = l / (c - n)),
      (this._offsetPrev = r * h),
      (this._offsetNext = a * h);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      h = this._offsetPrev,
      u = this._offsetNext,
      f = this._weightPrev,
      d = this._weightNext,
      x = (n - t) / (i - t),
      g = x * x,
      m = g * x,
      p = -f * m + 2 * f * g - f * x,
      R = (1 + f) * m + (-1.5 - 2 * f) * g + (-0.5 + f) * x + 1,
      _ = (-1 - d) * m + (1.5 + d) * g + 0.5 * x,
      S = d * m - d * g;
    for (let L = 0; L !== o; ++L)
      r[L] = p * a[h + L] + R * a[l + L] + _ * a[c + L] + S * a[u + L];
    return r;
  }
}
class Wf extends ws {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      h = (n - t) / (i - t),
      u = 1 - h;
    for (let f = 0; f !== o; ++f) r[f] = a[l + f] * u + a[c + f] * h;
    return r;
  }
}
class Xf extends ws {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class sn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = nr(t, this.TimeBufferType)),
      (this.values = nr(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: nr(e.times, Array),
        values: nr(e.values, Array),
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Xf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Wf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Gf(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case gs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case _s:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Er:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return Ue("KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return gs;
      case this.InterpolantFactoryMethodLinear:
        return _s;
      case this.InterpolantFactoryMethodSmooth:
        return Er;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let r = 0,
      a = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; a !== -1 && n[a] > t; ) --a;
    if ((++a, r !== 0 || a !== i)) {
      r >= a && ((a = Math.max(a, 1)), (r = a - 1));
      const o = this.getValueSize();
      (this.times = n.slice(r, a)),
        (this.values = this.values.slice(r * o, a * o));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (Je("KeyframeTrack: Invalid value size in track.", this), (e = !1));
    const n = this.times,
      i = this.values,
      r = n.length;
    r === 0 && (Je("KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let o = 0; o !== r; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        Je("KeyframeTrack: Time is not a valid number.", this, o, c), (e = !1);
        break;
      }
      if (a !== null && a > c) {
        Je("KeyframeTrack: Out of order keys.", this, o, c, a), (e = !1);
        break;
      }
      a = c;
    }
    if (i !== void 0 && Vf(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          Je("KeyframeTrack: Value is not a valid number.", this, o, l),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      i = this.getInterpolation() === Er,
      r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let c = !1;
      const l = e[o],
        h = e[o + 1];
      if (l !== h && (o !== 1 || l !== e[0]))
        if (i) c = !0;
        else {
          const u = o * n,
            f = u - n,
            d = u + n;
          for (let x = 0; x !== n; ++x) {
            const g = t[u + x];
            if (g !== t[f + x] || g !== t[d + x]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n,
            f = a * n;
          for (let d = 0; d !== n; ++d) t[f + d] = t[u + d];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, c = a * n, l = 0; l !== n; ++l) t[c + l] = t[o + l];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      i = new n(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
sn.prototype.ValueTypeName = "";
sn.prototype.TimeBufferType = Float32Array;
sn.prototype.ValueBufferType = Float32Array;
sn.prototype.DefaultInterpolation = _s;
class Wi extends sn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Wi.prototype.ValueTypeName = "bool";
Wi.prototype.ValueBufferType = Array;
Wi.prototype.DefaultInterpolation = gs;
Wi.prototype.InterpolantFactoryMethodLinear = void 0;
Wi.prototype.InterpolantFactoryMethodSmooth = void 0;
class th extends sn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
th.prototype.ValueTypeName = "color";
class Vi extends sn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
Vi.prototype.ValueTypeName = "number";
class qf extends ws {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = (n - t) / (i - t);
    let l = e * o;
    for (let h = l + o; l !== h; l += 4) dn.slerpFlat(r, 0, a, l - o, a, l, c);
    return r;
  }
}
class Hi extends sn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  InterpolantFactoryMethodLinear(e) {
    return new qf(this.times, this.values, this.getValueSize(), e);
  }
}
Hi.prototype.ValueTypeName = "quaternion";
Hi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Xi extends sn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Xi.prototype.ValueTypeName = "string";
Xi.prototype.ValueBufferType = Array;
Xi.prototype.DefaultInterpolation = gs;
Xi.prototype.InterpolantFactoryMethodLinear = void 0;
Xi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Gi extends sn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
Gi.prototype.ValueTypeName = "vector";
class Yf {
  constructor(e = "", t = -1, n = [], i = Kh) {
    (this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = i),
      (this.uuid = Kt()),
      (this.userData = {}),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(Kf(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return (r.uuid = e.uuid), (r.userData = JSON.parse(e.userData || "{}")), r;
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
        userData: JSON.stringify(e.userData),
      };
    for (let r = 0, a = n.length; r !== a; ++r) t.push(sn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length,
      a = [];
    for (let o = 0; o < r; o++) {
      let c = [],
        l = [];
      c.push((o + r - 1) % r, o, (o + 1) % r), l.push(0, 1, 0);
      const h = Hf(c);
      (c = Ic(c, 1, h)),
        (l = Ic(l, 1, h)),
        !i && c[0] === 0 && (c.push(r), l.push(l[0])),
        a.push(
          new Vi(".morphTargetInfluences[" + t[o].name + "]", c, l).scale(1 / n)
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o],
        h = l.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let f = i[u];
        f || (i[u] = f = []), f.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (
      (Ue(
        "AnimationClip: parseAnimation() is deprecated and will be removed with r185"
      ),
      !e)
    )
      return Je("AnimationClip: No animation in JSONLoader data."), null;
    const n = function (u, f, d, x, g) {
        if (d.length !== 0) {
          const m = [],
            p = [];
          eh(d, m, p, x), m.length !== 0 && g.push(new u(f, m, p));
        }
      },
      i = [],
      r = e.name || "default",
      a = e.fps || 30,
      o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let u = 0; u < l.length; u++) {
      const f = l[u].keys;
      if (!(!f || f.length === 0))
        if (f[0].morphTargets) {
          const d = {};
          let x;
          for (x = 0; x < f.length; x++)
            if (f[x].morphTargets)
              for (let g = 0; g < f[x].morphTargets.length; g++)
                d[f[x].morphTargets[g]] = -1;
          for (const g in d) {
            const m = [],
              p = [];
            for (let R = 0; R !== f[x].morphTargets.length; ++R) {
              const _ = f[x];
              m.push(_.time), p.push(_.morphTarget === g ? 1 : 0);
            }
            i.push(new Vi(".morphTargetInfluence[" + g + "]", m, p));
          }
          c = d.length * a;
        } else {
          const d = ".bones[" + t[u].name + "]";
          n(Gi, d + ".position", f, "pos", i),
            n(Hi, d + ".quaternion", f, "rot", i),
            n(Gi, d + ".scale", f, "scl", i);
        }
    }
    return i.length === 0 ? null : new this(r, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let n = 0; n < this.tracks.length; n++) e.push(this.tracks[n].clone());
    const t = new this.constructor(this.name, this.duration, e, this.blendMode);
    return (t.userData = JSON.parse(JSON.stringify(this.userData))), t;
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function jf(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Vi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Gi;
    case "color":
      return th;
    case "quaternion":
      return Hi;
    case "bool":
    case "boolean":
      return Wi;
    case "string":
      return Xi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function Kf(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = jf(s.type);
  if (s.times === void 0) {
    const t = [],
      n = [];
    eh(s.keys, t, n, "value"), (s.times = t), (s.values = n);
  }
  return e.parse !== void 0
    ? e.parse(s)
    : new e(s.name, s.times, s.values, s.interpolation);
}
const Cn = {
  enabled: !1,
  files: {},
  add: function (s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function (s) {
    if (this.enabled !== !1) return this.files[s];
  },
  remove: function (s) {
    delete this.files[s];
  },
  clear: function () {
    this.files = {};
  },
};
class Zf {
  constructor(e, t, n) {
    const i = this;
    let r = !1,
      a = 0,
      o = 0,
      c;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this._abortController = null),
      (this.itemStart = function (h) {
        o++, r === !1 && i.onStart !== void 0 && i.onStart(h, a, o), (r = !0);
      }),
      (this.itemEnd = function (h) {
        a++,
          i.onProgress !== void 0 && i.onProgress(h, a, o),
          a === o && ((r = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (h) {
        i.onError !== void 0 && i.onError(h);
      }),
      (this.resolveURL = function (h) {
        return c ? c(h) : h;
      }),
      (this.setURLModifier = function (h) {
        return (c = h), this;
      }),
      (this.addHandler = function (h, u) {
        return l.push(h, u), this;
      }),
      (this.removeHandler = function (h) {
        const u = l.indexOf(h);
        return u !== -1 && l.splice(u, 2), this;
      }),
      (this.getHandler = function (h) {
        for (let u = 0, f = l.length; u < f; u += 2) {
          const d = l[u],
            x = l[u + 1];
          if ((d.global && (d.lastIndex = 0), d.test(h))) return x;
        }
        return null;
      }),
      (this.abort = function () {
        return (
          this.abortController.abort(), (this._abortController = null), this
        );
      });
  }
  get abortController() {
    return (
      this._abortController || (this._abortController = new AbortController()),
      this._abortController
    );
  }
}
const Jf = new Zf();
class qn {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Jf),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
  abort() {
    return this;
  }
}
qn.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Tn = {};
class $f extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class Ts extends qn {
  constructor(e) {
    super(e),
      (this.mimeType = ""),
      (this.responseType = ""),
      (this._abortController = new AbortController());
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = Cn.get(`file:${e}`);
    if (r !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(r), this.manager.itemEnd(e);
        }, 0),
        r
      );
    if (Tn[e] !== void 0) {
      Tn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    (Tn[e] = []), Tn[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
        signal:
          typeof AbortSignal.any == "function"
            ? AbortSignal.any([
                this._abortController.signal,
                this.manager.abortController.signal,
              ])
            : this._abortController.signal,
      }),
      o = this.mimeType,
      c = this.responseType;
    fetch(a)
      .then((l) => {
        if (l.status === 200 || l.status === 0) {
          if (
            (l.status === 0 && Ue("FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              l.body === void 0 ||
              l.body.getReader === void 0)
          )
            return l;
          const h = Tn[e],
            u = l.body.getReader(),
            f = l.headers.get("X-File-Size") || l.headers.get("Content-Length"),
            d = f ? parseInt(f) : 0,
            x = d !== 0;
          let g = 0;
          const m = new ReadableStream({
            start(p) {
              R();
              function R() {
                u.read().then(
                  ({ done: _, value: S }) => {
                    if (_) p.close();
                    else {
                      g += S.byteLength;
                      const L = new ProgressEvent("progress", {
                        lengthComputable: x,
                        loaded: g,
                        total: d,
                      });
                      for (let w = 0, I = h.length; w < I; w++) {
                        const N = h[w];
                        N.onProgress && N.onProgress(L);
                      }
                      p.enqueue(S), R();
                    }
                  },
                  (_) => {
                    p.error(_);
                  }
                );
              }
            },
          });
          return new Response(m);
        } else
          throw new $f(
            `fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,
            l
          );
      })
      .then((l) => {
        switch (c) {
          case "arraybuffer":
            return l.arrayBuffer();
          case "blob":
            return l.blob();
          case "document":
            return l.text().then((h) => new DOMParser().parseFromString(h, o));
          case "json":
            return l.json();
          default:
            if (o === "") return l.text();
            {
              const u = /charset="?([^;"\s]*)"?/i.exec(o),
                f = u && u[1] ? u[1].toLowerCase() : void 0,
                d = new TextDecoder(f);
              return l.arrayBuffer().then((x) => d.decode(x));
            }
        }
      })
      .then((l) => {
        Cn.add(`file:${e}`, l);
        const h = Tn[e];
        delete Tn[e];
        for (let u = 0, f = h.length; u < f; u++) {
          const d = h[u];
          d.onLoad && d.onLoad(l);
        }
      })
      .catch((l) => {
        const h = Tn[e];
        if (h === void 0) throw (this.manager.itemError(e), l);
        delete Tn[e];
        for (let u = 0, f = h.length; u < f; u++) {
          const d = h[u];
          d.onError && d.onError(l);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
  abort() {
    return (
      this._abortController.abort(),
      (this._abortController = new AbortController()),
      this
    );
  }
}
const Ai = new WeakMap();
class Qf extends qn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      a = Cn.get(`image:${e}`);
    if (a !== void 0) {
      if (a.complete === !0)
        r.manager.itemStart(e),
          setTimeout(function () {
            t && t(a), r.manager.itemEnd(e);
          }, 0);
      else {
        let u = Ai.get(a);
        u === void 0 && ((u = []), Ai.set(a, u)),
          u.push({ onLoad: t, onError: i });
      }
      return a;
    }
    const o = vs("img");
    function c() {
      h(), t && t(this);
      const u = Ai.get(this) || [];
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        d.onLoad && d.onLoad(this);
      }
      Ai.delete(this), r.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), Cn.remove(`image:${e}`);
      const f = Ai.get(this) || [];
      for (let d = 0; d < f.length; d++) {
        const x = f[d];
        x.onError && x.onError(u);
      }
      Ai.delete(this), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", c, !1),
        o.removeEventListener("error", l, !1);
    }
    return (
      o.addEventListener("load", c, !1),
      o.addEventListener("error", l, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      Cn.add(`image:${e}`, o),
      r.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class ed extends qn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new St(),
      a = new Qf(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          (r.image = o), (r.needsUpdate = !0), t !== void 0 && t(r);
        },
        n,
        i
      ),
      r
    );
  }
}
class Ao extends pt {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new We(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (t.object.target = this.target.uuid),
      t
    );
  }
}
const ea = new Ye(),
  Dc = new F(),
  Nc = new F();
class wo {
  constructor(e) {
    (this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new oe(512, 512)),
      (this.mapType = fn),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Ye()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new bo()),
      (this._frameExtents = new oe(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new tt(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    Dc.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(Dc),
      Nc.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Nc),
      t.updateMatrixWorld(),
      ea.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(
        ea,
        t.coordinateSystem,
        t.reversedDepth
      ),
      t.reversedDepth
        ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1)
        : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(ea);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      (this.autoUpdate = e.autoUpdate),
      (this.needsUpdate = e.needsUpdate),
      (this.normalBias = e.normalBias),
      (this.blurSamples = e.blurSamples),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.intensity !== 1 && (e.intensity = this.intensity),
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class td extends wo {
  constructor() {
    super(new Lt(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1),
      (this.aspect = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = Bi * 2 * e.angle * this.focus,
      i = (this.mapSize.width / this.mapSize.height) * this.aspect,
      r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = r), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class nd extends Ao {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(pt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new pt()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = r),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new td());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const Uc = new Ye(),
  ts = new F(),
  ta = new F();
class id extends wo {
  constructor() {
    super(new Lt(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new oe(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new tt(2, 1, 1, 1),
        new tt(0, 1, 1, 1),
        new tt(3, 1, 1, 1),
        new tt(1, 1, 1, 1),
        new tt(3, 0, 1, 1),
        new tt(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new F(1, 0, 0),
        new F(-1, 0, 0),
        new F(0, 0, 1),
        new F(0, 0, -1),
        new F(0, 1, 0),
        new F(0, -1, 0),
      ]),
      (this._cubeUps = [
        new F(0, 1, 0),
        new F(0, 1, 0),
        new F(0, 1, 0),
        new F(0, 1, 0),
        new F(0, 0, 1),
        new F(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      r = e.distance || n.far;
    r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
      ts.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(ts),
      ta.copy(n.position),
      ta.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(ta),
      n.updateMatrixWorld(),
      i.makeTranslation(-ts.x, -ts.y, -ts.z),
      Uc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(
        Uc,
        n.coordinateSystem,
        n.reversedDepth
      );
  }
}
class sd extends Ao {
  constructor(e, t, n = 0, i = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new id());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Ro extends Ol {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      a = n + e,
      o = i + t,
      c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += l * this.view.offsetX),
        (a = r + l * this.view.width),
        (o -= h * this.view.offsetY),
        (c = o - h * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      r,
      a,
      o,
      c,
      this.near,
      this.far,
      this.coordinateSystem,
      this.reversedDepth
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
class rd extends wo {
  constructor() {
    super(new Ro(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class ad extends Ao {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(pt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new pt()),
      (this.shadow = new rd());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class fs {
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === ""
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
const na = new WeakMap();
class od extends qn {
  constructor(e) {
    super(e),
      (this.isImageBitmapLoader = !0),
      typeof createImageBitmap > "u" &&
        Ue("ImageBitmapLoader: createImageBitmap() not supported."),
      typeof fetch > "u" && Ue("ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" }),
      (this._abortController = new AbortController());
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      a = Cn.get(`image-bitmap:${e}`);
    if (a !== void 0) {
      if ((r.manager.itemStart(e), a.then)) {
        a.then((l) => {
          if (na.has(a) === !0)
            i && i(na.get(a)), r.manager.itemError(e), r.manager.itemEnd(e);
          else return t && t(l), r.manager.itemEnd(e), l;
        });
        return;
      }
      return (
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    }
    const o = {};
    (o.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (o.headers = this.requestHeader),
      (o.signal =
        typeof AbortSignal.any == "function"
          ? AbortSignal.any([
              this._abortController.signal,
              this.manager.abortController.signal,
            ])
          : this._abortController.signal);
    const c = fetch(e, o)
      .then(function (l) {
        return l.blob();
      })
      .then(function (l) {
        return createImageBitmap(
          l,
          Object.assign(r.options, { colorSpaceConversion: "none" })
        );
      })
      .then(function (l) {
        return (
          Cn.add(`image-bitmap:${e}`, l), t && t(l), r.manager.itemEnd(e), l
        );
      })
      .catch(function (l) {
        i && i(l),
          na.set(c, l),
          Cn.remove(`image-bitmap:${e}`),
          r.manager.itemError(e),
          r.manager.itemEnd(e);
      });
    Cn.add(`image-bitmap:${e}`, c), r.manager.itemStart(e);
  }
  abort() {
    return (
      this._abortController.abort(),
      (this._abortController = new AbortController()),
      this
    );
  }
}
class cd extends Lt {
  constructor(e = []) {
    super(),
      (this.isArrayCamera = !0),
      (this.isMultiViewCamera = !1),
      (this.cameras = e);
  }
}
const Co = "\\[\\]\\.:\\/",
  ld = new RegExp("[" + Co + "]", "g"),
  Po = "[^" + Co + "]",
  hd = "[^" + Co.replace("\\.", "") + "]",
  ud = /((?:WC+[\/:])*)/.source.replace("WC", Po),
  fd = /(WCOD+)?/.source.replace("WCOD", hd),
  dd = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Po),
  pd = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Po),
  md = new RegExp("^" + ud + fd + dd + pd + "$"),
  xd = ["material", "materials", "bones", "map"];
class gd {
  constructor(e, t, n) {
    const i = n || st.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class st {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || st.parseTrackName(t)),
      (this.node = st.findNode(e, this.parsedPath.nodeName)),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new st.Composite(e, t, n)
      : new st(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(ld, "");
  }
  static parseTrackName(e) {
    const t = md.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      xd.indexOf(r) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = r));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (
      t === void 0 ||
      t === "" ||
      t === "." ||
      t === -1 ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (r) {
          for (let a = 0; a < r.length; a++) {
            const o = r[a];
            if (o.name === t || o.uuid === t) return o;
            const c = n(o.children);
            if (c) return c;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let r = t.propertyIndex;
    if (
      (e || ((e = st.findNode(this.rootNode, t.nodeName)), (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      Ue("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            Je(
              "PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            Je(
              "PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            Je(
              "PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            Je(
              "PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.map) {
            Je(
              "PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            Je(
              "PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          Je(
            "PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      Je(
        "PropertyBinding: Trying to update property for track: " +
          l +
          "." +
          i +
          " but it wasn't found.",
        e
      );
      return;
    }
    let o = this.Versioning.None;
    (this.targetObject = e),
      e.isMaterial === !0
        ? (o = this.Versioning.NeedsUpdate)
        : e.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          Je(
            "PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          Je(
            "PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
          return;
        }
        e.morphTargetDictionary[r] !== void 0 &&
          (r = e.morphTargetDictionary[r]);
      }
      (c = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = r);
    } else
      a.fromArray !== void 0 && a.toArray !== void 0
        ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[c]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[c][o]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
st.Composite = gd;
st.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
st.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
st.prototype.GetterByBindingType = [
  st.prototype._getValue_direct,
  st.prototype._getValue_array,
  st.prototype._getValue_arrayElement,
  st.prototype._getValue_toArray,
];
st.prototype.SetterByBindingTypeAndVersioning = [
  [
    st.prototype._setValue_direct,
    st.prototype._setValue_direct_setNeedsUpdate,
    st.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    st.prototype._setValue_array,
    st.prototype._setValue_array_setNeedsUpdate,
    st.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    st.prototype._setValue_arrayElement,
    st.prototype._setValue_arrayElement_setNeedsUpdate,
    st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    st.prototype._setValue_fromArray,
    st.prototype._setValue_fromArray_setNeedsUpdate,
    st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class Fc {
  constructor(e = 1, t = 0, n = 0) {
    (this.radius = e), (this.phi = t), (this.theta = n);
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (this.phi = je(this.phi, 1e-6, Math.PI - 1e-6)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(je(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Oc = new oe();
class _d {
  constructor(e = new oe(1 / 0, 1 / 0), t = new oe(-1 / 0, -1 / 0)) {
    (this.isBox2 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Oc.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = 1 / 0),
      (this.max.x = this.max.y = -1 / 0),
      this
    );
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y
    );
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Oc).distanceTo(e);
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
class Qn {
  constructor() {
    (this.type = "ShapePath"),
      (this.color = new We()),
      (this.subPaths = []),
      (this.currentPath = null);
  }
  moveTo(e, t) {
    return (
      (this.currentPath = new Ii()),
      this.subPaths.push(this.currentPath),
      this.currentPath.moveTo(e, t),
      this
    );
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    return this.currentPath.quadraticCurveTo(e, t, n, i), this;
  }
  bezierCurveTo(e, t, n, i, r, a) {
    return this.currentPath.bezierCurveTo(e, t, n, i, r, a), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(p) {
      const R = [];
      for (let _ = 0, S = p.length; _ < S; _++) {
        const L = p[_],
          w = new us();
        (w.curves = L.curves), R.push(w);
      }
      return R;
    }
    function n(p, R) {
      const _ = R.length;
      let S = !1;
      for (let L = _ - 1, w = 0; w < _; L = w++) {
        let I = R[L],
          N = R[w],
          E = N.x - I.x,
          M = N.y - I.y;
        if (Math.abs(M) > Number.EPSILON) {
          if (
            (M < 0 && ((I = R[w]), (E = -E), (N = R[L]), (M = -M)),
            p.y < I.y || p.y > N.y)
          )
            continue;
          if (p.y === I.y) {
            if (p.x === I.x) return !0;
          } else {
            const U = M * (p.x - I.x) - E * (p.y - I.y);
            if (U === 0) return !0;
            if (U < 0) continue;
            S = !S;
          }
        } else {
          if (p.y !== I.y) continue;
          if ((N.x <= p.x && p.x <= I.x) || (I.x <= p.x && p.x <= N.x))
            return !0;
        }
      }
      return S;
    }
    const i = Hn.isClockWise,
      r = this.subPaths;
    if (r.length === 0) return [];
    let a, o, c;
    const l = [];
    if (r.length === 1)
      return (o = r[0]), (c = new us()), (c.curves = o.curves), l.push(c), l;
    let h = !i(r[0].getPoints());
    h = e ? !h : h;
    const u = [],
      f = [];
    let d = [],
      x = 0,
      g;
    (f[x] = void 0), (d[x] = []);
    for (let p = 0, R = r.length; p < R; p++)
      (o = r[p]),
        (g = o.getPoints()),
        (a = i(g)),
        (a = e ? !a : a),
        a
          ? (!h && f[x] && x++,
            (f[x] = { s: new us(), p: g }),
            (f[x].s.curves = o.curves),
            h && x++,
            (d[x] = []))
          : d[x].push({ h: o, p: g[0] });
    if (!f[0]) return t(r);
    if (f.length > 1) {
      let p = !1,
        R = 0;
      for (let _ = 0, S = f.length; _ < S; _++) u[_] = [];
      for (let _ = 0, S = f.length; _ < S; _++) {
        const L = d[_];
        for (let w = 0; w < L.length; w++) {
          const I = L[w];
          let N = !0;
          for (let E = 0; E < f.length; E++)
            n(I.p, f[E].p) &&
              (_ !== E && R++, N ? ((N = !1), u[E].push(I)) : (p = !0));
          N && u[_].push(I);
        }
      }
      R > 0 && p === !1 && (d = u);
    }
    let m;
    for (let p = 0, R = f.length; p < R; p++) {
      (c = f[p].s), l.push(c), (m = d[p]);
      for (let _ = 0, S = m.length; _ < S; _++) c.holes.push(m[_].h);
    }
    return l;
  }
}
class vd extends hi {
  constructor(e, t = null) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.enabled = !0),
      (this.state = -1),
      (this.keys = {}),
      (this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }),
      (this.touches = { ONE: null, TWO: null });
  }
  connect(e) {
    if (e === void 0) {
      Ue("Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), (this.domElement = e);
  }
  disconnect() {}
  dispose() {}
  update() {}
}
function Bc(s, e, t, n) {
  const i = yd(n);
  switch (t) {
    case Sl:
      return s * e;
    case uo:
      return ((s * e) / i.components) * i.byteLength;
    case fo:
      return ((s * e) / i.components) * i.byteLength;
    case po:
      return ((s * e * 2) / i.components) * i.byteLength;
    case mo:
      return ((s * e * 2) / i.components) * i.byteLength;
    case Tl:
      return ((s * e * 3) / i.components) * i.byteLength;
    case jt:
      return ((s * e * 4) / i.components) * i.byteLength;
    case xo:
      return ((s * e * 4) / i.components) * i.byteLength;
    case or:
    case cr:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case lr:
    case hr:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ea:
    case wa:
      return (Math.max(s, 16) * Math.max(e, 8)) / 4;
    case Ta:
    case Aa:
      return (Math.max(s, 8) * Math.max(e, 8)) / 2;
    case Ra:
    case Ca:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Pa:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case La:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ia:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Da:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Na:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Ua:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Fa:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Oa:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ba:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case ka:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case za:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Va:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ha:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Ga:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Wa:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Xa:
    case qa:
    case Ya:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case ja:
    case Ka:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case Za:
    case Ja:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function yd(s) {
  switch (s) {
    case fn:
    case vl:
      return { byteLength: 1, components: 1 };
    case ds:
    case yl:
    case li:
      return { byteLength: 2, components: 1 };
    case lo:
    case ho:
      return { byteLength: 2, components: 4 };
    case oi:
    case co:
    case nn:
      return { byteLength: 4, components: 1 };
    case bl:
    case Ml:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: "181" } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? Ue("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = "181"));
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function nh() {
  let s = null,
    e = !1,
    t = null,
    n = null;
  function i(r, a) {
    t(r, a), (n = s.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = s.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      s.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function bd(s) {
  const e = new WeakMap();
  function t(o, c) {
    const l = o.array,
      h = o.usage,
      u = l.byteLength,
      f = s.createBuffer();
    s.bindBuffer(c, f), s.bufferData(c, l, h), o.onUploadCallback();
    let d;
    if (l instanceof Float32Array) d = s.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      d = s.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (d = s.HALF_FLOAT) : (d = s.UNSIGNED_SHORT);
    else if (l instanceof Int16Array) d = s.SHORT;
    else if (l instanceof Uint32Array) d = s.UNSIGNED_INT;
    else if (l instanceof Int32Array) d = s.INT;
    else if (l instanceof Int8Array) d = s.BYTE;
    else if (l instanceof Uint8Array) d = s.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) d = s.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + l
      );
    return {
      buffer: f,
      type: d,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: u,
    };
  }
  function n(o, c, l) {
    const h = c.array,
      u = c.updateRanges;
    if ((s.bindBuffer(l, o), u.length === 0)) s.bufferSubData(l, 0, h);
    else {
      u.sort((d, x) => d.start - x.start);
      let f = 0;
      for (let d = 1; d < u.length; d++) {
        const x = u[f],
          g = u[d];
        g.start <= x.start + x.count + 1
          ? (x.count = Math.max(x.count, g.start + g.count - x.start))
          : (++f, (u[f] = g));
      }
      u.length = f + 1;
      for (let d = 0, x = u.length; d < x; d++) {
        const g = u[d];
        s.bufferSubData(l, g.start * h.BYTES_PER_ELEMENT, h, g.start, g.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (s.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const h = e.get(o);
      (!h || h.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const l = e.get(o);
    if (l === void 0) e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      n(l.buffer, o, c), (l.version = o.version);
    }
  }
  return { get: i, remove: r, update: a };
}
var Md = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Sd = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Td = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Ed = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Ad = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  wd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Rd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Cd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Pd = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  Ld = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  Id = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Dd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Nd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  Ud = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Fd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Od = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  Bd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  kd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  zd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Vd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Hd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Gd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  Wd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  Xd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  qd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Yd = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  jd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Kd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Zd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Jd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  $d = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Qd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  ep = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  tp = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
  np = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  ip = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  sp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  rp = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  ap = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  op = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  cp = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  lp = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  hp = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  up = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  fp = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  dp = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  pp = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  mp = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  xp = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  gp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  _p = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  vp = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  yp = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  bp = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Mp = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Sp = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Tp = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Ep = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Ap = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  wp = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  Rp = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Cp = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Pp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Lp = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Ip = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Dp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Np = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Up = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Fp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Op = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  Bp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  kp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  zp = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Vp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Hp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Gp = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Wp = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Xp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  qp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Yp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  jp = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Kp = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Zp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Jp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  $p = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Qp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  em = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  tm = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  nm = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  im = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  sm = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  rm = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  am = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  om = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  cm = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  lm = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  hm = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  um = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  fm = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  dm = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  pm = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  mm = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  xm = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  gm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  _m = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  vm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  ym = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const bm = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Mm = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Sm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Tm = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Em = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Am = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  wm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Rm = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  Cm = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Pm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Lm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Im = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Dm = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Nm = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Um = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Fm = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Om = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Bm = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  km = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  zm = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Vm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Hm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Gm = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Wm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Xm = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  qm = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ym = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  jm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Km = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Zm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Jm = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  $m = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Qm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  e0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Ze = {
    alphahash_fragment: Md,
    alphahash_pars_fragment: Sd,
    alphamap_fragment: Td,
    alphamap_pars_fragment: Ed,
    alphatest_fragment: Ad,
    alphatest_pars_fragment: wd,
    aomap_fragment: Rd,
    aomap_pars_fragment: Cd,
    batching_pars_vertex: Pd,
    batching_vertex: Ld,
    begin_vertex: Id,
    beginnormal_vertex: Dd,
    bsdfs: Nd,
    iridescence_fragment: Ud,
    bumpmap_pars_fragment: Fd,
    clipping_planes_fragment: Od,
    clipping_planes_pars_fragment: Bd,
    clipping_planes_pars_vertex: kd,
    clipping_planes_vertex: zd,
    color_fragment: Vd,
    color_pars_fragment: Hd,
    color_pars_vertex: Gd,
    color_vertex: Wd,
    common: Xd,
    cube_uv_reflection_fragment: qd,
    defaultnormal_vertex: Yd,
    displacementmap_pars_vertex: jd,
    displacementmap_vertex: Kd,
    emissivemap_fragment: Zd,
    emissivemap_pars_fragment: Jd,
    colorspace_fragment: $d,
    colorspace_pars_fragment: Qd,
    envmap_fragment: ep,
    envmap_common_pars_fragment: tp,
    envmap_pars_fragment: np,
    envmap_pars_vertex: ip,
    envmap_physical_pars_fragment: pp,
    envmap_vertex: sp,
    fog_vertex: rp,
    fog_pars_vertex: ap,
    fog_fragment: op,
    fog_pars_fragment: cp,
    gradientmap_pars_fragment: lp,
    lightmap_pars_fragment: hp,
    lights_lambert_fragment: up,
    lights_lambert_pars_fragment: fp,
    lights_pars_begin: dp,
    lights_toon_fragment: mp,
    lights_toon_pars_fragment: xp,
    lights_phong_fragment: gp,
    lights_phong_pars_fragment: _p,
    lights_physical_fragment: vp,
    lights_physical_pars_fragment: yp,
    lights_fragment_begin: bp,
    lights_fragment_maps: Mp,
    lights_fragment_end: Sp,
    logdepthbuf_fragment: Tp,
    logdepthbuf_pars_fragment: Ep,
    logdepthbuf_pars_vertex: Ap,
    logdepthbuf_vertex: wp,
    map_fragment: Rp,
    map_pars_fragment: Cp,
    map_particle_fragment: Pp,
    map_particle_pars_fragment: Lp,
    metalnessmap_fragment: Ip,
    metalnessmap_pars_fragment: Dp,
    morphinstance_vertex: Np,
    morphcolor_vertex: Up,
    morphnormal_vertex: Fp,
    morphtarget_pars_vertex: Op,
    morphtarget_vertex: Bp,
    normal_fragment_begin: kp,
    normal_fragment_maps: zp,
    normal_pars_fragment: Vp,
    normal_pars_vertex: Hp,
    normal_vertex: Gp,
    normalmap_pars_fragment: Wp,
    clearcoat_normal_fragment_begin: Xp,
    clearcoat_normal_fragment_maps: qp,
    clearcoat_pars_fragment: Yp,
    iridescence_pars_fragment: jp,
    opaque_fragment: Kp,
    packing: Zp,
    premultiplied_alpha_fragment: Jp,
    project_vertex: $p,
    dithering_fragment: Qp,
    dithering_pars_fragment: em,
    roughnessmap_fragment: tm,
    roughnessmap_pars_fragment: nm,
    shadowmap_pars_fragment: im,
    shadowmap_pars_vertex: sm,
    shadowmap_vertex: rm,
    shadowmask_pars_fragment: am,
    skinbase_vertex: om,
    skinning_pars_vertex: cm,
    skinning_vertex: lm,
    skinnormal_vertex: hm,
    specularmap_fragment: um,
    specularmap_pars_fragment: fm,
    tonemapping_fragment: dm,
    tonemapping_pars_fragment: pm,
    transmission_fragment: mm,
    transmission_pars_fragment: xm,
    uv_pars_fragment: gm,
    uv_pars_vertex: _m,
    uv_vertex: vm,
    worldpos_vertex: ym,
    background_vert: bm,
    background_frag: Mm,
    backgroundCube_vert: Sm,
    backgroundCube_frag: Tm,
    cube_vert: Em,
    cube_frag: Am,
    depth_vert: wm,
    depth_frag: Rm,
    distanceRGBA_vert: Cm,
    distanceRGBA_frag: Pm,
    equirect_vert: Lm,
    equirect_frag: Im,
    linedashed_vert: Dm,
    linedashed_frag: Nm,
    meshbasic_vert: Um,
    meshbasic_frag: Fm,
    meshlambert_vert: Om,
    meshlambert_frag: Bm,
    meshmatcap_vert: km,
    meshmatcap_frag: zm,
    meshnormal_vert: Vm,
    meshnormal_frag: Hm,
    meshphong_vert: Gm,
    meshphong_frag: Wm,
    meshphysical_vert: Xm,
    meshphysical_frag: qm,
    meshtoon_vert: Ym,
    meshtoon_frag: jm,
    points_vert: Km,
    points_frag: Zm,
    shadow_vert: Jm,
    shadow_frag: $m,
    sprite_vert: Qm,
    sprite_frag: e0,
  },
  Te = {
    common: {
      diffuse: { value: new We(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ge() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ge() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ge() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Ge() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
      dfgLUT: { value: null },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ge() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ge() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ge() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ge() },
      normalScale: { value: new oe(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ge() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ge() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ge() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ge() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new We(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new We(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ge() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ge() },
    },
    sprite: {
      diffuse: { value: new We(16777215) },
      opacity: { value: 1 },
      center: { value: new oe(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ge() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ge() },
      alphaTest: { value: 0 },
    },
  },
  on = {
    basic: {
      uniforms: Pt([
        Te.common,
        Te.specularmap,
        Te.envmap,
        Te.aomap,
        Te.lightmap,
        Te.fog,
      ]),
      vertexShader: Ze.meshbasic_vert,
      fragmentShader: Ze.meshbasic_frag,
    },
    lambert: {
      uniforms: Pt([
        Te.common,
        Te.specularmap,
        Te.envmap,
        Te.aomap,
        Te.lightmap,
        Te.emissivemap,
        Te.bumpmap,
        Te.normalmap,
        Te.displacementmap,
        Te.fog,
        Te.lights,
        { emissive: { value: new We(0) } },
      ]),
      vertexShader: Ze.meshlambert_vert,
      fragmentShader: Ze.meshlambert_frag,
    },
    phong: {
      uniforms: Pt([
        Te.common,
        Te.specularmap,
        Te.envmap,
        Te.aomap,
        Te.lightmap,
        Te.emissivemap,
        Te.bumpmap,
        Te.normalmap,
        Te.displacementmap,
        Te.fog,
        Te.lights,
        {
          emissive: { value: new We(0) },
          specular: { value: new We(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ze.meshphong_vert,
      fragmentShader: Ze.meshphong_frag,
    },
    standard: {
      uniforms: Pt([
        Te.common,
        Te.envmap,
        Te.aomap,
        Te.lightmap,
        Te.emissivemap,
        Te.bumpmap,
        Te.normalmap,
        Te.displacementmap,
        Te.roughnessmap,
        Te.metalnessmap,
        Te.fog,
        Te.lights,
        {
          emissive: { value: new We(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ze.meshphysical_vert,
      fragmentShader: Ze.meshphysical_frag,
    },
    toon: {
      uniforms: Pt([
        Te.common,
        Te.aomap,
        Te.lightmap,
        Te.emissivemap,
        Te.bumpmap,
        Te.normalmap,
        Te.displacementmap,
        Te.gradientmap,
        Te.fog,
        Te.lights,
        { emissive: { value: new We(0) } },
      ]),
      vertexShader: Ze.meshtoon_vert,
      fragmentShader: Ze.meshtoon_frag,
    },
    matcap: {
      uniforms: Pt([
        Te.common,
        Te.bumpmap,
        Te.normalmap,
        Te.displacementmap,
        Te.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ze.meshmatcap_vert,
      fragmentShader: Ze.meshmatcap_frag,
    },
    points: {
      uniforms: Pt([Te.points, Te.fog]),
      vertexShader: Ze.points_vert,
      fragmentShader: Ze.points_frag,
    },
    dashed: {
      uniforms: Pt([
        Te.common,
        Te.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ze.linedashed_vert,
      fragmentShader: Ze.linedashed_frag,
    },
    depth: {
      uniforms: Pt([Te.common, Te.displacementmap]),
      vertexShader: Ze.depth_vert,
      fragmentShader: Ze.depth_frag,
    },
    normal: {
      uniforms: Pt([
        Te.common,
        Te.bumpmap,
        Te.normalmap,
        Te.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ze.meshnormal_vert,
      fragmentShader: Ze.meshnormal_frag,
    },
    sprite: {
      uniforms: Pt([Te.sprite, Te.fog]),
      vertexShader: Ze.sprite_vert,
      fragmentShader: Ze.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ge() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ze.background_vert,
      fragmentShader: Ze.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Ge() },
      },
      vertexShader: Ze.backgroundCube_vert,
      fragmentShader: Ze.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Ze.cube_vert,
      fragmentShader: Ze.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ze.equirect_vert,
      fragmentShader: Ze.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Pt([
        Te.common,
        Te.displacementmap,
        {
          referencePosition: { value: new F() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ze.distanceRGBA_vert,
      fragmentShader: Ze.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Pt([
        Te.lights,
        Te.fog,
        { color: { value: new We(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ze.shadow_vert,
      fragmentShader: Ze.shadow_frag,
    },
  };
on.physical = {
  uniforms: Pt([
    on.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ge() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ge() },
      clearcoatNormalScale: { value: new oe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ge() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ge() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ge() },
      sheen: { value: 0 },
      sheenColor: { value: new We(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ge() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ge() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ge() },
      transmissionSamplerSize: { value: new oe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ge() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new We(0) },
      specularColor: { value: new We(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ge() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ge() },
      anisotropyVector: { value: new oe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ge() },
    },
  ]),
  vertexShader: Ze.meshphysical_vert,
  fragmentShader: Ze.meshphysical_frag,
};
const ir = { r: 0, b: 0, g: 0 },
  ei = new pn(),
  t0 = new Ye();
function n0(s, e, t, n, i, r, a) {
  const o = new We(0);
  let c = r === !0 ? 0 : 1,
    l,
    h,
    u = null,
    f = 0,
    d = null;
  function x(_) {
    let S = _.isScene === !0 ? _.background : null;
    return (
      S && S.isTexture && (S = (_.backgroundBlurriness > 0 ? t : e).get(S)), S
    );
  }
  function g(_) {
    let S = !1;
    const L = x(_);
    L === null ? p(o, c) : L && L.isColor && (p(L, 1), (S = !0));
    const w = s.xr.getEnvironmentBlendMode();
    w === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (s.autoClear || S) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function m(_, S) {
    const L = x(S);
    L && (L.isCubeTexture || L.mapping === _r)
      ? (h === void 0 &&
          ((h = new Wt(
            new As(1, 1, 1),
            new mn({
              name: "BackgroundCubeMaterial",
              uniforms: ki(on.backgroundCube.uniforms),
              vertexShader: on.backgroundCube.vertexShader,
              fragmentShader: on.backgroundCube.fragmentShader,
              side: Ot,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            })
          )),
          h.geometry.deleteAttribute("normal"),
          h.geometry.deleteAttribute("uv"),
          (h.onBeforeRender = function (w, I, N) {
            this.matrixWorld.copyPosition(N.matrixWorld);
          }),
          Object.defineProperty(h.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          i.update(h)),
        ei.copy(S.backgroundRotation),
        (ei.x *= -1),
        (ei.y *= -1),
        (ei.z *= -1),
        L.isCubeTexture &&
          L.isRenderTargetTexture === !1 &&
          ((ei.y *= -1), (ei.z *= -1)),
        (h.material.uniforms.envMap.value = L),
        (h.material.uniforms.flipEnvMap.value =
          L.isCubeTexture && L.isRenderTargetTexture === !1 ? -1 : 1),
        (h.material.uniforms.backgroundBlurriness.value =
          S.backgroundBlurriness),
        (h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity),
        h.material.uniforms.backgroundRotation.value.setFromMatrix4(
          t0.makeRotationFromEuler(ei)
        ),
        (h.material.toneMapped = et.getTransfer(L.colorSpace) !== ot),
        (u !== L || f !== L.version || d !== s.toneMapping) &&
          ((h.material.needsUpdate = !0),
          (u = L),
          (f = L.version),
          (d = s.toneMapping)),
        h.layers.enableAll(),
        _.unshift(h, h.geometry, h.material, 0, 0, null))
      : L &&
        L.isTexture &&
        (l === void 0 &&
          ((l = new Wt(
            new yr(2, 2),
            new mn({
              name: "BackgroundMaterial",
              uniforms: ki(on.background.uniforms),
              vertexShader: on.background.vertexShader,
              fragmentShader: on.background.fragmentShader,
              side: In,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            })
          )),
          l.geometry.deleteAttribute("normal"),
          Object.defineProperty(l.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          i.update(l)),
        (l.material.uniforms.t2D.value = L),
        (l.material.uniforms.backgroundIntensity.value = S.backgroundIntensity),
        (l.material.toneMapped = et.getTransfer(L.colorSpace) !== ot),
        L.matrixAutoUpdate === !0 && L.updateMatrix(),
        l.material.uniforms.uvTransform.value.copy(L.matrix),
        (u !== L || f !== L.version || d !== s.toneMapping) &&
          ((l.material.needsUpdate = !0),
          (u = L),
          (f = L.version),
          (d = s.toneMapping)),
        l.layers.enableAll(),
        _.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(_, S) {
    _.getRGB(ir, Ul(s)), n.buffers.color.setClear(ir.r, ir.g, ir.b, S, a);
  }
  function R() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), (h = void 0)),
      l !== void 0 &&
        (l.geometry.dispose(), l.material.dispose(), (l = void 0));
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (_, S = 1) {
      o.set(_), (c = S), p(o, c);
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (_) {
      (c = _), p(o, c);
    },
    render: g,
    addToRenderList: m,
    dispose: R,
  };
}
function i0(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    n = {},
    i = f(null);
  let r = i,
    a = !1;
  function o(M, U, V, K, Z) {
    let ne = !1;
    const $ = u(K, V, U);
    r !== $ && ((r = $), l(r.object)),
      (ne = d(M, K, V, Z)),
      ne && x(M, K, V, Z),
      Z !== null && e.update(Z, s.ELEMENT_ARRAY_BUFFER),
      (ne || a) &&
        ((a = !1),
        S(M, U, V, K),
        Z !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(Z).buffer));
  }
  function c() {
    return s.createVertexArray();
  }
  function l(M) {
    return s.bindVertexArray(M);
  }
  function h(M) {
    return s.deleteVertexArray(M);
  }
  function u(M, U, V) {
    const K = V.wireframe === !0;
    let Z = n[M.id];
    Z === void 0 && ((Z = {}), (n[M.id] = Z));
    let ne = Z[U.id];
    ne === void 0 && ((ne = {}), (Z[U.id] = ne));
    let $ = ne[K];
    return $ === void 0 && (($ = f(c())), (ne[K] = $)), $;
  }
  function f(M) {
    const U = [],
      V = [],
      K = [];
    for (let Z = 0; Z < t; Z++) (U[Z] = 0), (V[Z] = 0), (K[Z] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: U,
      enabledAttributes: V,
      attributeDivisors: K,
      object: M,
      attributes: {},
      index: null,
    };
  }
  function d(M, U, V, K) {
    const Z = r.attributes,
      ne = U.attributes;
    let $ = 0;
    const se = V.getAttributes();
    for (const k in se)
      if (se[k].location >= 0) {
        const pe = Z[k];
        let Ae = ne[k];
        if (
          (Ae === void 0 &&
            (k === "instanceMatrix" &&
              M.instanceMatrix &&
              (Ae = M.instanceMatrix),
            k === "instanceColor" && M.instanceColor && (Ae = M.instanceColor)),
          pe === void 0 || pe.attribute !== Ae || (Ae && pe.data !== Ae.data))
        )
          return !0;
        $++;
      }
    return r.attributesNum !== $ || r.index !== K;
  }
  function x(M, U, V, K) {
    const Z = {},
      ne = U.attributes;
    let $ = 0;
    const se = V.getAttributes();
    for (const k in se)
      if (se[k].location >= 0) {
        let pe = ne[k];
        pe === void 0 &&
          (k === "instanceMatrix" &&
            M.instanceMatrix &&
            (pe = M.instanceMatrix),
          k === "instanceColor" && M.instanceColor && (pe = M.instanceColor));
        const Ae = {};
        (Ae.attribute = pe),
          pe && pe.data && (Ae.data = pe.data),
          (Z[k] = Ae),
          $++;
      }
    (r.attributes = Z), (r.attributesNum = $), (r.index = K);
  }
  function g() {
    const M = r.newAttributes;
    for (let U = 0, V = M.length; U < V; U++) M[U] = 0;
  }
  function m(M) {
    p(M, 0);
  }
  function p(M, U) {
    const V = r.newAttributes,
      K = r.enabledAttributes,
      Z = r.attributeDivisors;
    (V[M] = 1),
      K[M] === 0 && (s.enableVertexAttribArray(M), (K[M] = 1)),
      Z[M] !== U && (s.vertexAttribDivisor(M, U), (Z[M] = U));
  }
  function R() {
    const M = r.newAttributes,
      U = r.enabledAttributes;
    for (let V = 0, K = U.length; V < K; V++)
      U[V] !== M[V] && (s.disableVertexAttribArray(V), (U[V] = 0));
  }
  function _(M, U, V, K, Z, ne, $) {
    $ === !0
      ? s.vertexAttribIPointer(M, U, V, Z, ne)
      : s.vertexAttribPointer(M, U, V, K, Z, ne);
  }
  function S(M, U, V, K) {
    g();
    const Z = K.attributes,
      ne = V.getAttributes(),
      $ = U.defaultAttributeValues;
    for (const se in ne) {
      const k = ne[se];
      if (k.location >= 0) {
        let de = Z[se];
        if (
          (de === void 0 &&
            (se === "instanceMatrix" &&
              M.instanceMatrix &&
              (de = M.instanceMatrix),
            se === "instanceColor" &&
              M.instanceColor &&
              (de = M.instanceColor)),
          de !== void 0)
        ) {
          const pe = de.normalized,
            Ae = de.itemSize,
            Ve = e.get(de);
          if (Ve === void 0) continue;
          const Ke = Ve.buffer,
            Y = Ve.type,
            O = Ve.bytesPerElement,
            T = Y === s.INT || Y === s.UNSIGNED_INT || de.gpuType === co;
          if (de.isInterleavedBufferAttribute) {
            const b = de.data,
              q = b.stride,
              re = de.offset;
            if (b.isInstancedInterleavedBuffer) {
              for (let H = 0; H < k.locationSize; H++)
                p(k.location + H, b.meshPerAttribute);
              M.isInstancedMesh !== !0 &&
                K._maxInstanceCount === void 0 &&
                (K._maxInstanceCount = b.meshPerAttribute * b.count);
            } else for (let H = 0; H < k.locationSize; H++) m(k.location + H);
            s.bindBuffer(s.ARRAY_BUFFER, Ke);
            for (let H = 0; H < k.locationSize; H++)
              _(
                k.location + H,
                Ae / k.locationSize,
                Y,
                pe,
                q * O,
                (re + (Ae / k.locationSize) * H) * O,
                T
              );
          } else {
            if (de.isInstancedBufferAttribute) {
              for (let b = 0; b < k.locationSize; b++)
                p(k.location + b, de.meshPerAttribute);
              M.isInstancedMesh !== !0 &&
                K._maxInstanceCount === void 0 &&
                (K._maxInstanceCount = de.meshPerAttribute * de.count);
            } else for (let b = 0; b < k.locationSize; b++) m(k.location + b);
            s.bindBuffer(s.ARRAY_BUFFER, Ke);
            for (let b = 0; b < k.locationSize; b++)
              _(
                k.location + b,
                Ae / k.locationSize,
                Y,
                pe,
                Ae * O,
                (Ae / k.locationSize) * b * O,
                T
              );
          }
        } else if ($ !== void 0) {
          const pe = $[se];
          if (pe !== void 0)
            switch (pe.length) {
              case 2:
                s.vertexAttrib2fv(k.location, pe);
                break;
              case 3:
                s.vertexAttrib3fv(k.location, pe);
                break;
              case 4:
                s.vertexAttrib4fv(k.location, pe);
                break;
              default:
                s.vertexAttrib1fv(k.location, pe);
            }
        }
      }
    }
    R();
  }
  function L() {
    N();
    for (const M in n) {
      const U = n[M];
      for (const V in U) {
        const K = U[V];
        for (const Z in K) h(K[Z].object), delete K[Z];
        delete U[V];
      }
      delete n[M];
    }
  }
  function w(M) {
    if (n[M.id] === void 0) return;
    const U = n[M.id];
    for (const V in U) {
      const K = U[V];
      for (const Z in K) h(K[Z].object), delete K[Z];
      delete U[V];
    }
    delete n[M.id];
  }
  function I(M) {
    for (const U in n) {
      const V = n[U];
      if (V[M.id] === void 0) continue;
      const K = V[M.id];
      for (const Z in K) h(K[Z].object), delete K[Z];
      delete V[M.id];
    }
  }
  function N() {
    E(), (a = !0), r !== i && ((r = i), l(r.object));
  }
  function E() {
    (i.geometry = null), (i.program = null), (i.wireframe = !1);
  }
  return {
    setup: o,
    reset: N,
    resetDefaultState: E,
    dispose: L,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: I,
    initAttributes: g,
    enableAttribute: m,
    disableUnusedAttributes: R,
  };
}
function s0(s, e, t) {
  let n;
  function i(l) {
    n = l;
  }
  function r(l, h) {
    s.drawArrays(n, l, h), t.update(h, n, 1);
  }
  function a(l, h, u) {
    u !== 0 && (s.drawArraysInstanced(n, l, h, u), t.update(h, n, u));
  }
  function o(l, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, u);
    let d = 0;
    for (let x = 0; x < u; x++) d += h[x];
    t.update(d, n, 1);
  }
  function c(l, h, u, f) {
    if (u === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null) for (let x = 0; x < l.length; x++) a(l[x], h[x], f[x]);
    else {
      d.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, f, 0, u);
      let x = 0;
      for (let g = 0; g < u; g++) x += h[g] * f[g];
      t.update(x, n, 1);
    }
  }
  (this.setMode = i),
    (this.render = r),
    (this.renderInstances = a),
    (this.renderMultiDraw = o),
    (this.renderMultiDrawInstances = c);
}
function r0(s, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const I = e.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function a(I) {
    return !(
      I !== jt &&
      n.convert(I) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(I) {
    const N =
      I === li &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      I !== fn &&
      n.convert(I) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) &&
      I !== nn &&
      !N
    );
  }
  function c(I) {
    if (I === "highp") {
      if (
        s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision >
          0 &&
        s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      I = "mediump";
    }
    return I === "mediump" &&
      s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision >
        0 &&
      s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const h = c(l);
  h !== l &&
    (Ue("WebGLRenderer:", l, "not supported, using", h, "instead."), (l = h));
  const u = t.logarithmicDepthBuffer === !0,
    f = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"),
    d = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),
    x = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    g = s.getParameter(s.MAX_TEXTURE_SIZE),
    m = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),
    p = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    R = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),
    _ = s.getParameter(s.MAX_VARYING_VECTORS),
    S = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),
    L = x > 0,
    w = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: r,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: u,
    reversedDepthBuffer: f,
    maxTextures: d,
    maxVertexTextures: x,
    maxTextureSize: g,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: R,
    maxVaryings: _,
    maxFragmentUniforms: S,
    vertexTextures: L,
    maxSamples: w,
  };
}
function a0(s) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    r = !1;
  const a = new wn(),
    o = new Ge(),
    c = { value: null, needsUpdate: !1 };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (u, f) {
      const d = u.length !== 0 || f || n !== 0 || i;
      return (i = f), (n = u.length), d;
    }),
    (this.beginShadows = function () {
      (r = !0), h(null);
    }),
    (this.endShadows = function () {
      r = !1;
    }),
    (this.setGlobalState = function (u, f) {
      t = h(u, f, 0);
    }),
    (this.setState = function (u, f, d) {
      const x = u.clippingPlanes,
        g = u.clipIntersection,
        m = u.clipShadows,
        p = s.get(u);
      if (!i || x === null || x.length === 0 || (r && !m)) r ? h(null) : l();
      else {
        const R = r ? 0 : n,
          _ = R * 4;
        let S = p.clippingState || null;
        (c.value = S), (S = h(x, f, _, d));
        for (let L = 0; L !== _; ++L) S[L] = t[L];
        (p.clippingState = S),
          (this.numIntersection = g ? this.numPlanes : 0),
          (this.numPlanes += R);
      }
    });
  function l() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function h(u, f, d, x) {
    const g = u !== null ? u.length : 0;
    let m = null;
    if (g !== 0) {
      if (((m = c.value), x !== !0 || m === null)) {
        const p = d + g * 4,
          R = f.matrixWorldInverse;
        o.getNormalMatrix(R),
          (m === null || m.length < p) && (m = new Float32Array(p));
        for (let _ = 0, S = d; _ !== g; ++_, S += 4)
          a.copy(u[_]).applyMatrix4(R, o),
            a.normal.toArray(m, S),
            (m[S + 3] = a.constant);
      }
      (c.value = m), (c.needsUpdate = !0);
    }
    return (e.numPlanes = g), (e.numIntersection = 0), m;
  }
}
function o0(s) {
  let e = new WeakMap();
  function t(a, o) {
    return o === Ma ? (a.mapping = Ui) : o === Sa && (a.mapping = Fi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Ma || o === Sa)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new qu(c.height);
            return (
              l.fromEquirectangularTexture(s, a),
              e.set(a, l),
              a.addEventListener("dispose", i),
              t(l.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
const Gn = 4,
  kc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  si = 20,
  c0 = 256,
  ns = new Ro(),
  zc = new We();
let ia = null,
  sa = 0,
  ra = 0,
  aa = !1;
const l0 = new F();
class Vc {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._lodMeshes = []),
      (this._backgroundBox = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      (this._blurMaterial = null),
      (this._ggxMaterial = null);
  }
  fromScene(e, t = 0, n = 0.1, i = 100, r = {}) {
    const { size: a = 256, position: o = l0 } = r;
    (ia = this._renderer.getRenderTarget()),
      (sa = this._renderer.getActiveCubeFace()),
      (ra = this._renderer.getActiveMipmapLevel()),
      (aa = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(a);
    const c = this._allocateTargets();
    return (
      (c.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, c, o),
      t > 0 && this._blur(c, 0, 0, t),
      this._applyPMREM(c),
      this._cleanup(c),
      c
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Wc()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Gc()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose(),
      this._backgroundBox !== null &&
        (this._backgroundBox.geometry.dispose(),
        this._backgroundBox.material.dispose());
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._ggxMaterial !== null && this._ggxMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++)
      this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ia, sa, ra),
      (this._renderer.xr.enabled = aa),
      (e.scissorTest = !1),
      wi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ui || e.mapping === Fi
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (ia = this._renderer.getRenderTarget()),
      (sa = this._renderer.getActiveCubeFace()),
      (ra = this._renderer.getActiveMipmapLevel()),
      (aa = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: It,
        minFilter: It,
        generateMipmaps: !1,
        type: li,
        format: jt,
        colorSpace: wt,
        depthBuffer: !1,
      },
      i = Hc(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Hc(e, t, n));
      const { _lodMax: r } = this;
      ({
        lodMeshes: this._lodMeshes,
        sizeLods: this._sizeLods,
        sigmas: this._sigmas,
      } = h0(r)),
        (this._blurMaterial = f0(r, e, t)),
        (this._ggxMaterial = u0(r, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Wt(new kt(), e);
    this._renderer.compile(t, ns);
  }
  _sceneToCubeUV(e, t, n, i, r) {
    const c = new Lt(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      h = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      f = u.autoClear,
      d = u.toneMapping;
    u.getClearColor(zc),
      (u.toneMapping = Wn),
      (u.autoClear = !1),
      u.state.buffers.depth.getReversed() &&
        (u.setRenderTarget(i), u.clearDepth(), u.setRenderTarget(null)),
      this._backgroundBox === null &&
        (this._backgroundBox = new Wt(
          new As(),
          new ri({
            name: "PMREM.Background",
            side: Ot,
            depthWrite: !1,
            depthTest: !1,
          })
        ));
    const g = this._backgroundBox,
      m = g.material;
    let p = !1;
    const R = e.background;
    R
      ? R.isColor && (m.color.copy(R), (e.background = null), (p = !0))
      : (m.color.copy(zc), (p = !0));
    for (let _ = 0; _ < 6; _++) {
      const S = _ % 3;
      S === 0
        ? (c.up.set(0, l[_], 0),
          c.position.set(r.x, r.y, r.z),
          c.lookAt(r.x + h[_], r.y, r.z))
        : S === 1
        ? (c.up.set(0, 0, l[_]),
          c.position.set(r.x, r.y, r.z),
          c.lookAt(r.x, r.y + h[_], r.z))
        : (c.up.set(0, l[_], 0),
          c.position.set(r.x, r.y, r.z),
          c.lookAt(r.x, r.y, r.z + h[_]));
      const L = this._cubeSize;
      wi(i, S * L, _ > 2 ? L : 0, L, L),
        u.setRenderTarget(i),
        p && u.render(g, c),
        u.render(e, c);
    }
    (u.toneMapping = d), (u.autoClear = f), (e.background = R);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === Ui || e.mapping === Fi;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Wc()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Gc());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = this._lodMeshes[0];
    a.material = r;
    const o = r.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    wi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, ns);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodMeshes.length;
    for (let r = 1; r < i; r++) this._applyGGXFilter(e, r - 1, r);
    t.autoClear = n;
  }
  _applyGGXFilter(e, t, n) {
    const i = this._renderer,
      r = this._pingPongRenderTarget,
      a = this._ggxMaterial,
      o = this._lodMeshes[n];
    o.material = a;
    const c = a.uniforms,
      l = n / (this._lodMeshes.length - 1),
      h = t / (this._lodMeshes.length - 1),
      u = Math.sqrt(l * l - h * h),
      f = 0.05 + l * 0.95,
      d = u * f,
      { _lodMax: x } = this,
      g = this._sizeLods[n],
      m = 3 * g * (n > x - Gn ? n - x + Gn : 0),
      p = 4 * (this._cubeSize - g);
    (c.envMap.value = e.texture),
      (c.roughness.value = d),
      (c.mipInt.value = x - t),
      wi(r, m, p, 3 * g, 2 * g),
      i.setRenderTarget(r),
      i.render(o, ns),
      (c.envMap.value = r.texture),
      (c.roughness.value = 0),
      (c.mipInt.value = x - n),
      wi(e, m, p, 3 * g, 2 * g),
      i.setRenderTarget(e),
      i.render(o, ns);
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r),
      this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const c = this._renderer,
      l = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      Je("blur direction must be either latitudinal or longitudinal!");
    const h = 3,
      u = this._lodMeshes[i];
    u.material = l;
    const f = l.uniforms,
      d = this._sizeLods[n] - 1,
      x = isFinite(r) ? Math.PI / (2 * d) : (2 * Math.PI) / (2 * si - 1),
      g = r / x,
      m = isFinite(r) ? 1 + Math.floor(h * g) : si;
    m > si &&
      Ue(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`
      );
    const p = [];
    let R = 0;
    for (let I = 0; I < si; ++I) {
      const N = I / g,
        E = Math.exp((-N * N) / 2);
      p.push(E), I === 0 ? (R += E) : I < m && (R += 2 * E);
    }
    for (let I = 0; I < p.length; I++) p[I] = p[I] / R;
    (f.envMap.value = e.texture),
      (f.samples.value = m),
      (f.weights.value = p),
      (f.latitudinal.value = a === "latitudinal"),
      o && (f.poleAxis.value = o);
    const { _lodMax: _ } = this;
    (f.dTheta.value = x), (f.mipInt.value = _ - n);
    const S = this._sizeLods[i],
      L = 3 * S * (i > _ - Gn ? i - _ + Gn : 0),
      w = 4 * (this._cubeSize - S);
    wi(t, L, w, 3 * S, 2 * S), c.setRenderTarget(t), c.render(u, ns);
  }
}
function h0(s) {
  const e = [],
    t = [],
    n = [];
  let i = s;
  const r = s - Gn + 1 + kc.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    e.push(o);
    let c = 1 / o;
    a > s - Gn ? (c = kc[a - s + Gn - 1]) : a === 0 && (c = 0), t.push(c);
    const l = 1 / (o - 2),
      h = -l,
      u = 1 + l,
      f = [h, h, u, h, u, u, h, h, u, u, h, u],
      d = 6,
      x = 6,
      g = 3,
      m = 2,
      p = 1,
      R = new Float32Array(g * x * d),
      _ = new Float32Array(m * x * d),
      S = new Float32Array(p * x * d);
    for (let w = 0; w < d; w++) {
      const I = ((w % 3) * 2) / 3 - 1,
        N = w > 2 ? 0 : -1,
        E = [
          I,
          N,
          0,
          I + 2 / 3,
          N,
          0,
          I + 2 / 3,
          N + 1,
          0,
          I,
          N,
          0,
          I + 2 / 3,
          N + 1,
          0,
          I,
          N + 1,
          0,
        ];
      R.set(E, g * x * w), _.set(f, m * x * w);
      const M = [w, w, w, w, w, w];
      S.set(M, p * x * w);
    }
    const L = new kt();
    L.setAttribute("position", new Tt(R, g)),
      L.setAttribute("uv", new Tt(_, m)),
      L.setAttribute("faceIndex", new Tt(S, p)),
      n.push(new Wt(L, null)),
      i > Gn && i--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function Hc(s, e, t) {
  const n = new Xn(s, e, t);
  return (
    (n.texture.mapping = _r),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function wi(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function u0(s, e, t) {
  return new mn({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: c0,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 },
    },
    vertexShader: br(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
    blending: Pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function f0(s, e, t) {
  const n = new Float32Array(si),
    i = new F(0, 1, 0);
  return new mn({
    name: "SphericalGaussianBlur",
    defines: {
      n: si,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: br(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Gc() {
  return new mn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: br(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Wc() {
  return new mn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: br(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function br() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function d0(s) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping,
        l = c === Ma || c === Sa,
        h = c === Ui || c === Fi;
      if (l || h) {
        let u = e.get(o);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return (
            t === null && (t = new Vc(s)),
            (u = l ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u)),
            (u.texture.pmremVersion = o.pmremVersion),
            e.set(o, u),
            u.texture
          );
        if (u !== void 0) return u.texture;
        {
          const d = o.image;
          return (l && d && d.height > 0) || (h && d && i(d))
            ? (t === null && (t = new Vc(s)),
              (u = l ? t.fromEquirectangular(o) : t.fromCubemap(o)),
              (u.texture.pmremVersion = o.pmremVersion),
              e.set(o, u),
              o.addEventListener("dispose", r),
              u.texture)
            : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++) o[h] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function p0(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    const i = s.getExtension(n);
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null && ys("WebGLRenderer: " + n + " extension not supported."), i
      );
    },
  };
}
function m0(s, e, t, n) {
  const i = {},
    r = new WeakMap();
  function a(u) {
    const f = u.target;
    f.index !== null && e.remove(f.index);
    for (const x in f.attributes) e.remove(f.attributes[x]);
    f.removeEventListener("dispose", a), delete i[f.id];
    const d = r.get(f);
    d && (e.remove(d), r.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(u, f) {
    return (
      i[f.id] === !0 ||
        (f.addEventListener("dispose", a),
        (i[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function c(u) {
    const f = u.attributes;
    for (const d in f) e.update(f[d], s.ARRAY_BUFFER);
  }
  function l(u) {
    const f = [],
      d = u.index,
      x = u.attributes.position;
    let g = 0;
    if (d !== null) {
      const R = d.array;
      g = d.version;
      for (let _ = 0, S = R.length; _ < S; _ += 3) {
        const L = R[_ + 0],
          w = R[_ + 1],
          I = R[_ + 2];
        f.push(L, w, w, I, I, L);
      }
    } else if (x !== void 0) {
      const R = x.array;
      g = x.version;
      for (let _ = 0, S = R.length / 3 - 1; _ < S; _ += 3) {
        const L = _ + 0,
          w = _ + 1,
          I = _ + 2;
        f.push(L, w, w, I, I, L);
      }
    } else return;
    const m = new (Rl(f) ? Nl : Dl)(f, 1);
    m.version = g;
    const p = r.get(u);
    p && e.remove(p), r.set(u, m);
  }
  function h(u) {
    const f = r.get(u);
    if (f) {
      const d = u.index;
      d !== null && f.version < d.version && l(u);
    } else l(u);
    return r.get(u);
  }
  return { get: o, update: c, getWireframeAttribute: h };
}
function x0(s, e, t) {
  let n;
  function i(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    (r = f.type), (a = f.bytesPerElement);
  }
  function c(f, d) {
    s.drawElements(n, d, r, f * a), t.update(d, n, 1);
  }
  function l(f, d, x) {
    x !== 0 && (s.drawElementsInstanced(n, d, r, f * a, x), t.update(d, n, x));
  }
  function h(f, d, x) {
    if (x === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, r, f, 0, x);
    let m = 0;
    for (let p = 0; p < x; p++) m += d[p];
    t.update(m, n, 1);
  }
  function u(f, d, x, g) {
    if (x === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let p = 0; p < f.length; p++) l(f[p] / a, d[p], g[p]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, d, 0, r, f, 0, g, 0, x);
      let p = 0;
      for (let R = 0; R < x; R++) p += d[R] * g[R];
      t.update(p, n, 1);
    }
  }
  (this.setMode = i),
    (this.setIndex = o),
    (this.render = c),
    (this.renderInstances = l),
    (this.renderMultiDraw = h),
    (this.renderMultiDrawInstances = u);
}
function g0(s) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch ((t.calls++, a)) {
      case s.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s.LINES:
        t.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += o * r;
        break;
      case s.POINTS:
        t.points += o * r;
        break;
      default:
        Je("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function _0(s, e, t) {
  const n = new WeakMap(),
    i = new tt();
  function r(a, o, c) {
    const l = a.morphTargetInfluences,
      h =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      u = h !== void 0 ? h.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== u) {
      let E = function () {
        I.dispose(), n.delete(o), o.removeEventListener("dispose", E);
      };
      f !== void 0 && f.texture.dispose();
      const d = o.morphAttributes.position !== void 0,
        x = o.morphAttributes.normal !== void 0,
        g = o.morphAttributes.color !== void 0,
        m = o.morphAttributes.position || [],
        p = o.morphAttributes.normal || [],
        R = o.morphAttributes.color || [];
      let _ = 0;
      d === !0 && (_ = 1), x === !0 && (_ = 2), g === !0 && (_ = 3);
      let S = o.attributes.position.count * _,
        L = 1;
      S > e.maxTextureSize &&
        ((L = Math.ceil(S / e.maxTextureSize)), (S = e.maxTextureSize));
      const w = new Float32Array(S * L * 4 * u),
        I = new Pl(w, S, L, u);
      (I.type = nn), (I.needsUpdate = !0);
      const N = _ * 4;
      for (let M = 0; M < u; M++) {
        const U = m[M],
          V = p[M],
          K = R[M],
          Z = S * L * 4 * M;
        for (let ne = 0; ne < U.count; ne++) {
          const $ = ne * N;
          d === !0 &&
            (i.fromBufferAttribute(U, ne),
            (w[Z + $ + 0] = i.x),
            (w[Z + $ + 1] = i.y),
            (w[Z + $ + 2] = i.z),
            (w[Z + $ + 3] = 0)),
            x === !0 &&
              (i.fromBufferAttribute(V, ne),
              (w[Z + $ + 4] = i.x),
              (w[Z + $ + 5] = i.y),
              (w[Z + $ + 6] = i.z),
              (w[Z + $ + 7] = 0)),
            g === !0 &&
              (i.fromBufferAttribute(K, ne),
              (w[Z + $ + 8] = i.x),
              (w[Z + $ + 9] = i.y),
              (w[Z + $ + 10] = i.z),
              (w[Z + $ + 11] = K.itemSize === 4 ? i.w : 1));
        }
      }
      (f = { count: u, texture: I, size: new oe(S, L) }),
        n.set(o, f),
        o.addEventListener("dispose", E);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(s, "morphTexture", a.morphTexture, t);
    else {
      let d = 0;
      for (let g = 0; g < l.length; g++) d += l[g];
      const x = o.morphTargetsRelative ? 1 : 1 - d;
      c.getUniforms().setValue(s, "morphTargetBaseInfluence", x),
        c.getUniforms().setValue(s, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(s, "morphTargetsTexture", f.texture, t),
      c.getUniforms().setValue(s, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function v0(s, e, t, n) {
  let i = new WeakMap();
  function r(c) {
    const l = n.render.frame,
      h = c.geometry,
      u = e.get(c, h);
    if (
      (i.get(u) !== l && (e.update(u), i.set(u, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", o) === !1 &&
          c.addEventListener("dispose", o),
        i.get(c) !== l &&
          (t.update(c.instanceMatrix, s.ARRAY_BUFFER),
          c.instanceColor !== null && t.update(c.instanceColor, s.ARRAY_BUFFER),
          i.set(c, l))),
      c.isSkinnedMesh)
    ) {
      const f = c.skeleton;
      i.get(f) !== l && (f.update(), i.set(f, l));
    }
    return u;
  }
  function a() {
    i = new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return { update: r, dispose: a };
}
const ih = new St(),
  Xc = new Gl(1, 1),
  sh = new Pl(),
  rh = new Pu(),
  ah = new Bl(),
  qc = [],
  Yc = [],
  jc = new Float32Array(16),
  Kc = new Float32Array(9),
  Zc = new Float32Array(4);
function qi(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = qc[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (qc[i] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), s[a].toArray(r, o);
  }
  return r;
}
function yt(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
function bt(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function Mr(s, e) {
  let t = Yc[e];
  t === void 0 && ((t = new Int32Array(e)), (Yc[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function y0(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function b0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (yt(t, e)) return;
    s.uniform2fv(this.addr, e), bt(t, e);
  }
}
function M0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (s.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (yt(t, e)) return;
    s.uniform3fv(this.addr, e), bt(t, e);
  }
}
function S0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (yt(t, e)) return;
    s.uniform4fv(this.addr, e), bt(t, e);
  }
}
function T0(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (yt(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), bt(t, e);
  } else {
    if (yt(t, n)) return;
    Zc.set(n), s.uniformMatrix2fv(this.addr, !1, Zc), bt(t, n);
  }
}
function E0(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (yt(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), bt(t, e);
  } else {
    if (yt(t, n)) return;
    Kc.set(n), s.uniformMatrix3fv(this.addr, !1, Kc), bt(t, n);
  }
}
function A0(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (yt(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), bt(t, e);
  } else {
    if (yt(t, n)) return;
    jc.set(n), s.uniformMatrix4fv(this.addr, !1, jc), bt(t, n);
  }
}
function w0(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function R0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (yt(t, e)) return;
    s.uniform2iv(this.addr, e), bt(t, e);
  }
}
function C0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (yt(t, e)) return;
    s.uniform3iv(this.addr, e), bt(t, e);
  }
}
function P0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (yt(t, e)) return;
    s.uniform4iv(this.addr, e), bt(t, e);
  }
}
function L0(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function I0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (yt(t, e)) return;
    s.uniform2uiv(this.addr, e), bt(t, e);
  }
}
function D0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (yt(t, e)) return;
    s.uniform3uiv(this.addr, e), bt(t, e);
  }
}
function N0(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (yt(t, e)) return;
    s.uniform4uiv(this.addr, e), bt(t, e);
  }
}
function U0(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i));
  let r;
  this.type === s.SAMPLER_2D_SHADOW
    ? ((Xc.compareFunction = wl), (r = Xc))
    : (r = ih),
    t.setTexture2D(e || r, i);
}
function F0(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || rh, i);
}
function O0(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || ah, i);
}
function B0(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || sh, i);
}
function k0(s) {
  switch (s) {
    case 5126:
      return y0;
    case 35664:
      return b0;
    case 35665:
      return M0;
    case 35666:
      return S0;
    case 35674:
      return T0;
    case 35675:
      return E0;
    case 35676:
      return A0;
    case 5124:
    case 35670:
      return w0;
    case 35667:
    case 35671:
      return R0;
    case 35668:
    case 35672:
      return C0;
    case 35669:
    case 35673:
      return P0;
    case 5125:
      return L0;
    case 36294:
      return I0;
    case 36295:
      return D0;
    case 36296:
      return N0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return U0;
    case 35679:
    case 36299:
    case 36307:
      return F0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return O0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return B0;
  }
}
function z0(s, e) {
  s.uniform1fv(this.addr, e);
}
function V0(s, e) {
  const t = qi(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function H0(s, e) {
  const t = qi(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function G0(s, e) {
  const t = qi(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function W0(s, e) {
  const t = qi(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function X0(s, e) {
  const t = qi(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function q0(s, e) {
  const t = qi(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Y0(s, e) {
  s.uniform1iv(this.addr, e);
}
function j0(s, e) {
  s.uniform2iv(this.addr, e);
}
function K0(s, e) {
  s.uniform3iv(this.addr, e);
}
function Z0(s, e) {
  s.uniform4iv(this.addr, e);
}
function J0(s, e) {
  s.uniform1uiv(this.addr, e);
}
function $0(s, e) {
  s.uniform2uiv(this.addr, e);
}
function Q0(s, e) {
  s.uniform3uiv(this.addr, e);
}
function ex(s, e) {
  s.uniform4uiv(this.addr, e);
}
function tx(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Mr(t, i);
  yt(n, r) || (s.uniform1iv(this.addr, r), bt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || ih, r[a]);
}
function nx(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Mr(t, i);
  yt(n, r) || (s.uniform1iv(this.addr, r), bt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || rh, r[a]);
}
function ix(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Mr(t, i);
  yt(n, r) || (s.uniform1iv(this.addr, r), bt(n, r));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || ah, r[a]);
}
function sx(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Mr(t, i);
  yt(n, r) || (s.uniform1iv(this.addr, r), bt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || sh, r[a]);
}
function rx(s) {
  switch (s) {
    case 5126:
      return z0;
    case 35664:
      return V0;
    case 35665:
      return H0;
    case 35666:
      return G0;
    case 35674:
      return W0;
    case 35675:
      return X0;
    case 35676:
      return q0;
    case 5124:
    case 35670:
      return Y0;
    case 35667:
    case 35671:
      return j0;
    case 35668:
    case 35672:
      return K0;
    case 35669:
    case 35673:
      return Z0;
    case 5125:
      return J0;
    case 36294:
      return $0;
    case 36295:
      return Q0;
    case 36296:
      return ex;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return tx;
    case 35679:
    case 36299:
    case 36307:
      return nx;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ix;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return sx;
  }
}
class ax {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = k0(t.type));
  }
}
class ox {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = rx(t.type));
  }
}
class cx {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const oa = /(\w+)(\])?(\[|\.)?/g;
function Jc(s, e) {
  s.seq.push(e), (s.map[e.id] = e);
}
function lx(s, e, t) {
  const n = s.name,
    i = n.length;
  for (oa.lastIndex = 0; ; ) {
    const r = oa.exec(n),
      a = oa.lastIndex;
    let o = r[1];
    const c = r[2] === "]",
      l = r[3];
    if ((c && (o = o | 0), l === void 0 || (l === "[" && a + 2 === i))) {
      Jc(t, l === void 0 ? new ax(o, s, e) : new ox(o, s, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && ((u = new cx(o)), Jc(t, u)), (t = u);
    }
  }
}
class ur {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, r.name);
      lx(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r],
        c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function $c(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const hx = 37297;
let ux = 0;
function fx(s, e) {
  const t = s.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Qc = new Ge();
function dx(s) {
  et._getMatrix(Qc, et.workingColorSpace, s);
  const e = `mat3( ${Qc.elements.map((t) => t.toFixed(4))} )`;
  switch (et.getTransfer(s)) {
    case dr:
      return [e, "LinearTransferOETF"];
    case ot:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        Ue("WebGLProgram: Unsupported color space: ", s),
        [e, "LinearTransferOETF"]
      );
  }
}
function el(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS),
    r = (s.getShaderInfoLog(e) || "").trim();
  if (n && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      fx(s.getShaderSource(e), o)
    );
  } else return r;
}
function px(s, e) {
  const t = dx(e);
  return [
    `vec4 ${s}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
function mx(s, e) {
  let t;
  switch (e) {
    case Vh:
      t = "Linear";
      break;
    case Hh:
      t = "Reinhard";
      break;
    case Gh:
      t = "Cineon";
      break;
    case Wh:
      t = "ACESFilmic";
      break;
    case qh:
      t = "AgX";
      break;
    case Yh:
      t = "Neutral";
      break;
    case Xh:
      t = "Custom";
      break;
    default:
      Ue("WebGLProgram: Unsupported toneMapping:", e), (t = "Linear");
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
const sr = new F();
function xx() {
  et.getLuminanceCoefficients(sr);
  const s = sr.x.toFixed(4),
    e = sr.y.toFixed(4),
    t = sr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function gx(s) {
  return [
    s.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(as).join(`
`);
}
function _x(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function vx(s, e) {
  const t = {},
    n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i),
      a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2),
      r.type === s.FLOAT_MAT3 && (o = 3),
      r.type === s.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: r.type,
        location: s.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function as(s) {
  return s !== "";
}
function tl(s, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function nl(s, e) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const yx = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ro(s) {
  return s.replace(yx, Mx);
}
const bx = new Map();
function Mx(s, e) {
  let t = Ze[e];
  if (t === void 0) {
    const n = bx.get(e);
    if (n !== void 0)
      (t = Ze[n]),
        Ue(
          'WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return ro(t);
}
const Sx =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function il(s) {
  return s.replace(Sx, Tx);
}
function Tx(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function sl(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return (
    s.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : s.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Ex(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === ml
      ? (e = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === yh
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : s.shadowMapType === An && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Ax(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Ui:
      case Fi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case _r:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function wx(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Fi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Rx(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case xl:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case kh:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case zh:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Cx(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
    texelHeight: n,
    maxMip: t,
  };
}
function Px(s, e, t, n) {
  const i = s.getContext(),
    r = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const c = Ex(t),
    l = Ax(t),
    h = wx(t),
    u = Rx(t),
    f = Cx(t),
    d = gx(t),
    x = _x(r),
    g = i.createProgram();
  let m,
    p,
    R = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((m = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
      ].filter(as).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (p = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
      ].filter(as).join(`
`)),
      p.length > 0 &&
        (p += `
`))
    : ((m = [
        sl(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(as).join(`
`)),
      (p = [
        sl(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + u : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Wn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Wn ? Ze.tonemapping_pars_fragment : "",
        t.toneMapping !== Wn ? mx("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Ze.colorspace_pars_fragment,
        px("linearToOutputTexel", t.outputColorSpace),
        xx(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(as).join(`
`))),
    (a = ro(a)),
    (a = tl(a, t)),
    (a = nl(a, t)),
    (o = ro(o)),
    (o = tl(o, t)),
    (o = nl(o, t)),
    (a = il(a)),
    (o = il(o)),
    t.isRawShaderMaterial !== !0 &&
      ((R = `#version 300 es
`),
      (m =
        [
          d,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (p =
        [
          "#define varying in",
          t.glslVersion === Ko
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Ko ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        p));
  const _ = R + m + a,
    S = R + p + o,
    L = $c(i, i.VERTEX_SHADER, _),
    w = $c(i, i.FRAGMENT_SHADER, S);
  i.attachShader(g, L),
    i.attachShader(g, w),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(g, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(g, 0, "position"),
    i.linkProgram(g);
  function I(U) {
    if (s.debug.checkShaderErrors) {
      const V = i.getProgramInfoLog(g) || "",
        K = i.getShaderInfoLog(L) || "",
        Z = i.getShaderInfoLog(w) || "",
        ne = V.trim(),
        $ = K.trim(),
        se = Z.trim();
      let k = !0,
        de = !0;
      if (i.getProgramParameter(g, i.LINK_STATUS) === !1)
        if (((k = !1), typeof s.debug.onShaderError == "function"))
          s.debug.onShaderError(i, g, L, w);
        else {
          const pe = el(i, L, "vertex"),
            Ae = el(i, w, "fragment");
          Je(
            "THREE.WebGLProgram: Shader Error " +
              i.getError() +
              " - VALIDATE_STATUS " +
              i.getProgramParameter(g, i.VALIDATE_STATUS) +
              `

Material Name: ` +
              U.name +
              `
Material Type: ` +
              U.type +
              `

Program Info Log: ` +
              ne +
              `
` +
              pe +
              `
` +
              Ae
          );
        }
      else
        ne !== ""
          ? Ue("WebGLProgram: Program Info Log:", ne)
          : ($ === "" || se === "") && (de = !1);
      de &&
        (U.diagnostics = {
          runnable: k,
          programLog: ne,
          vertexShader: { log: $, prefix: m },
          fragmentShader: { log: se, prefix: p },
        });
    }
    i.deleteShader(L), i.deleteShader(w), (N = new ur(i, g)), (E = vx(i, g));
  }
  let N;
  this.getUniforms = function () {
    return N === void 0 && I(this), N;
  };
  let E;
  this.getAttributes = function () {
    return E === void 0 && I(this), E;
  };
  let M = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return M === !1 && (M = i.getProgramParameter(g, hx)), M;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(g),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = ux++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = g),
    (this.vertexShader = L),
    (this.fragmentShader = w),
    this
  );
}
let Lx = 0;
class Ix {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Dx(e)), t.set(e, n)), n;
  }
}
class Dx {
  constructor(e) {
    (this.id = Lx++), (this.code = e), (this.usedTimes = 0);
  }
}
function Nx(s, e, t, n, i, r, a) {
  const o = new Ll(),
    c = new Ix(),
    l = new Set(),
    h = [],
    u = i.logarithmicDepthBuffer,
    f = i.vertexTextures;
  let d = i.precision;
  const x = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function g(E) {
    return l.add(E), E === 0 ? "uv" : `uv${E}`;
  }
  function m(E, M, U, V, K) {
    const Z = V.fog,
      ne = K.geometry,
      $ = E.isMeshStandardMaterial ? V.environment : null,
      se = (E.isMeshStandardMaterial ? t : e).get(E.envMap || $),
      k = se && se.mapping === _r ? se.image.height : null,
      de = x[E.type];
    E.precision !== null &&
      ((d = i.getMaxPrecision(E.precision)),
      d !== E.precision &&
        Ue(
          "WebGLProgram.getParameters:",
          E.precision,
          "not supported, using",
          d,
          "instead."
        ));
    const pe =
        ne.morphAttributes.position ||
        ne.morphAttributes.normal ||
        ne.morphAttributes.color,
      Ae = pe !== void 0 ? pe.length : 0;
    let Ve = 0;
    ne.morphAttributes.position !== void 0 && (Ve = 1),
      ne.morphAttributes.normal !== void 0 && (Ve = 2),
      ne.morphAttributes.color !== void 0 && (Ve = 3);
    let Ke, Y, O, T;
    if (de) {
      const rt = on[de];
      (Ke = rt.vertexShader), (Y = rt.fragmentShader);
    } else
      (Ke = E.vertexShader),
        (Y = E.fragmentShader),
        c.update(E),
        (O = c.getVertexShaderID(E)),
        (T = c.getFragmentShaderID(E));
    const b = s.getRenderTarget(),
      q = s.state.buffers.depth.getReversed(),
      re = K.isInstancedMesh === !0,
      H = K.isBatchedMesh === !0,
      le = !!E.map,
      ge = !!E.matcap,
      he = !!se,
      z = !!E.aoMap,
      y = !!E.lightMap,
      j = !!E.bumpMap,
      J = !!E.normalMap,
      D = !!E.displacementMap,
      C = !!E.emissiveMap,
      ae = !!E.metalnessMap,
      ce = !!E.roughnessMap,
      be = E.anisotropy > 0,
      P = E.clearcoat > 0,
      v = E.dispersion > 0,
      G = E.iridescence > 0,
      ie = E.sheen > 0,
      fe = E.transmission > 0,
      te = be && !!E.anisotropyMap,
      Le = P && !!E.clearcoatMap,
      ye = P && !!E.clearcoatNormalMap,
      Ne = P && !!E.clearcoatRoughnessMap,
      Pe = G && !!E.iridescenceMap,
      me = G && !!E.iridescenceThicknessMap,
      _e = ie && !!E.sheenColorMap,
      ze = ie && !!E.sheenRoughnessMap,
      Be = !!E.specularMap,
      Re = !!E.specularColorMap,
      Xe = !!E.specularIntensityMap,
      B = fe && !!E.transmissionMap,
      Ee = fe && !!E.thicknessMap,
      Me = !!E.gradientMap,
      Se = !!E.alphaMap,
      xe = E.alphaTest > 0,
      ue = !!E.alphaHash,
      Ie = !!E.extensions;
    let qe = Wn;
    E.toneMapped &&
      (b === null || b.isXRRenderTarget === !0) &&
      (qe = s.toneMapping);
    const ht = {
      shaderID: de,
      shaderType: E.type,
      shaderName: E.name,
      vertexShader: Ke,
      fragmentShader: Y,
      defines: E.defines,
      customVertexShaderID: O,
      customFragmentShaderID: T,
      isRawShaderMaterial: E.isRawShaderMaterial === !0,
      glslVersion: E.glslVersion,
      precision: d,
      batching: H,
      batchingColor: H && K._colorsTexture !== null,
      instancing: re,
      instancingColor: re && K.instanceColor !== null,
      instancingMorph: re && K.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace:
        b === null
          ? s.outputColorSpace
          : b.isXRRenderTarget === !0
          ? b.texture.colorSpace
          : wt,
      alphaToCoverage: !!E.alphaToCoverage,
      map: le,
      matcap: ge,
      envMap: he,
      envMapMode: he && se.mapping,
      envMapCubeUVHeight: k,
      aoMap: z,
      lightMap: y,
      bumpMap: j,
      normalMap: J,
      displacementMap: f && D,
      emissiveMap: C,
      normalMapObjectSpace: J && E.normalMapType === Qh,
      normalMapTangentSpace: J && E.normalMapType === Al,
      metalnessMap: ae,
      roughnessMap: ce,
      anisotropy: be,
      anisotropyMap: te,
      clearcoat: P,
      clearcoatMap: Le,
      clearcoatNormalMap: ye,
      clearcoatRoughnessMap: Ne,
      dispersion: v,
      iridescence: G,
      iridescenceMap: Pe,
      iridescenceThicknessMap: me,
      sheen: ie,
      sheenColorMap: _e,
      sheenRoughnessMap: ze,
      specularMap: Be,
      specularColorMap: Re,
      specularIntensityMap: Xe,
      transmission: fe,
      transmissionMap: B,
      thicknessMap: Ee,
      gradientMap: Me,
      opaque:
        E.transparent === !1 && E.blending === Pi && E.alphaToCoverage === !1,
      alphaMap: Se,
      alphaTest: xe,
      alphaHash: ue,
      combine: E.combine,
      mapUv: le && g(E.map.channel),
      aoMapUv: z && g(E.aoMap.channel),
      lightMapUv: y && g(E.lightMap.channel),
      bumpMapUv: j && g(E.bumpMap.channel),
      normalMapUv: J && g(E.normalMap.channel),
      displacementMapUv: D && g(E.displacementMap.channel),
      emissiveMapUv: C && g(E.emissiveMap.channel),
      metalnessMapUv: ae && g(E.metalnessMap.channel),
      roughnessMapUv: ce && g(E.roughnessMap.channel),
      anisotropyMapUv: te && g(E.anisotropyMap.channel),
      clearcoatMapUv: Le && g(E.clearcoatMap.channel),
      clearcoatNormalMapUv: ye && g(E.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Ne && g(E.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Pe && g(E.iridescenceMap.channel),
      iridescenceThicknessMapUv: me && g(E.iridescenceThicknessMap.channel),
      sheenColorMapUv: _e && g(E.sheenColorMap.channel),
      sheenRoughnessMapUv: ze && g(E.sheenRoughnessMap.channel),
      specularMapUv: Be && g(E.specularMap.channel),
      specularColorMapUv: Re && g(E.specularColorMap.channel),
      specularIntensityMapUv: Xe && g(E.specularIntensityMap.channel),
      transmissionMapUv: B && g(E.transmissionMap.channel),
      thicknessMapUv: Ee && g(E.thicknessMap.channel),
      alphaMapUv: Se && g(E.alphaMap.channel),
      vertexTangents: !!ne.attributes.tangent && (J || be),
      vertexColors: E.vertexColors,
      vertexAlphas:
        E.vertexColors === !0 &&
        !!ne.attributes.color &&
        ne.attributes.color.itemSize === 4,
      pointsUvs: K.isPoints === !0 && !!ne.attributes.uv && (le || Se),
      fog: !!Z,
      useFog: E.fog === !0,
      fogExp2: !!Z && Z.isFogExp2,
      flatShading: E.flatShading === !0 && E.wireframe === !1,
      sizeAttenuation: E.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reversedDepthBuffer: q,
      skinning: K.isSkinnedMesh === !0,
      morphTargets: ne.morphAttributes.position !== void 0,
      morphNormals: ne.morphAttributes.normal !== void 0,
      morphColors: ne.morphAttributes.color !== void 0,
      morphTargetsCount: Ae,
      morphTextureStride: Ve,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: E.dithering,
      shadowMapEnabled: s.shadowMap.enabled && U.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: qe,
      decodeVideoTexture:
        le &&
        E.map.isVideoTexture === !0 &&
        et.getTransfer(E.map.colorSpace) === ot,
      decodeVideoTextureEmissive:
        C &&
        E.emissiveMap.isVideoTexture === !0 &&
        et.getTransfer(E.emissiveMap.colorSpace) === ot,
      premultipliedAlpha: E.premultipliedAlpha,
      doubleSided: E.side === cn,
      flipSided: E.side === Ot,
      useDepthPacking: E.depthPacking >= 0,
      depthPacking: E.depthPacking || 0,
      index0AttributeName: E.index0AttributeName,
      extensionClipCullDistance:
        Ie &&
        E.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((Ie && E.extensions.multiDraw === !0) || H) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile"
      ),
      customProgramCacheKey: E.customProgramCacheKey(),
    };
    return (
      (ht.vertexUv1s = l.has(1)),
      (ht.vertexUv2s = l.has(2)),
      (ht.vertexUv3s = l.has(3)),
      l.clear(),
      ht
    );
  }
  function p(E) {
    const M = [];
    if (
      (E.shaderID
        ? M.push(E.shaderID)
        : (M.push(E.customVertexShaderID), M.push(E.customFragmentShaderID)),
      E.defines !== void 0)
    )
      for (const U in E.defines) M.push(U), M.push(E.defines[U]);
    return (
      E.isRawShaderMaterial === !1 &&
        (R(M, E), _(M, E), M.push(s.outputColorSpace)),
      M.push(E.customProgramCacheKey),
      M.join()
    );
  }
  function R(E, M) {
    E.push(M.precision),
      E.push(M.outputColorSpace),
      E.push(M.envMapMode),
      E.push(M.envMapCubeUVHeight),
      E.push(M.mapUv),
      E.push(M.alphaMapUv),
      E.push(M.lightMapUv),
      E.push(M.aoMapUv),
      E.push(M.bumpMapUv),
      E.push(M.normalMapUv),
      E.push(M.displacementMapUv),
      E.push(M.emissiveMapUv),
      E.push(M.metalnessMapUv),
      E.push(M.roughnessMapUv),
      E.push(M.anisotropyMapUv),
      E.push(M.clearcoatMapUv),
      E.push(M.clearcoatNormalMapUv),
      E.push(M.clearcoatRoughnessMapUv),
      E.push(M.iridescenceMapUv),
      E.push(M.iridescenceThicknessMapUv),
      E.push(M.sheenColorMapUv),
      E.push(M.sheenRoughnessMapUv),
      E.push(M.specularMapUv),
      E.push(M.specularColorMapUv),
      E.push(M.specularIntensityMapUv),
      E.push(M.transmissionMapUv),
      E.push(M.thicknessMapUv),
      E.push(M.combine),
      E.push(M.fogExp2),
      E.push(M.sizeAttenuation),
      E.push(M.morphTargetsCount),
      E.push(M.morphAttributeCount),
      E.push(M.numDirLights),
      E.push(M.numPointLights),
      E.push(M.numSpotLights),
      E.push(M.numSpotLightMaps),
      E.push(M.numHemiLights),
      E.push(M.numRectAreaLights),
      E.push(M.numDirLightShadows),
      E.push(M.numPointLightShadows),
      E.push(M.numSpotLightShadows),
      E.push(M.numSpotLightShadowsWithMaps),
      E.push(M.numLightProbes),
      E.push(M.shadowMapType),
      E.push(M.toneMapping),
      E.push(M.numClippingPlanes),
      E.push(M.numClipIntersection),
      E.push(M.depthPacking);
  }
  function _(E, M) {
    o.disableAll(),
      M.supportsVertexTextures && o.enable(0),
      M.instancing && o.enable(1),
      M.instancingColor && o.enable(2),
      M.instancingMorph && o.enable(3),
      M.matcap && o.enable(4),
      M.envMap && o.enable(5),
      M.normalMapObjectSpace && o.enable(6),
      M.normalMapTangentSpace && o.enable(7),
      M.clearcoat && o.enable(8),
      M.iridescence && o.enable(9),
      M.alphaTest && o.enable(10),
      M.vertexColors && o.enable(11),
      M.vertexAlphas && o.enable(12),
      M.vertexUv1s && o.enable(13),
      M.vertexUv2s && o.enable(14),
      M.vertexUv3s && o.enable(15),
      M.vertexTangents && o.enable(16),
      M.anisotropy && o.enable(17),
      M.alphaHash && o.enable(18),
      M.batching && o.enable(19),
      M.dispersion && o.enable(20),
      M.batchingColor && o.enable(21),
      M.gradientMap && o.enable(22),
      E.push(o.mask),
      o.disableAll(),
      M.fog && o.enable(0),
      M.useFog && o.enable(1),
      M.flatShading && o.enable(2),
      M.logarithmicDepthBuffer && o.enable(3),
      M.reversedDepthBuffer && o.enable(4),
      M.skinning && o.enable(5),
      M.morphTargets && o.enable(6),
      M.morphNormals && o.enable(7),
      M.morphColors && o.enable(8),
      M.premultipliedAlpha && o.enable(9),
      M.shadowMapEnabled && o.enable(10),
      M.doubleSided && o.enable(11),
      M.flipSided && o.enable(12),
      M.useDepthPacking && o.enable(13),
      M.dithering && o.enable(14),
      M.transmission && o.enable(15),
      M.sheen && o.enable(16),
      M.opaque && o.enable(17),
      M.pointsUvs && o.enable(18),
      M.decodeVideoTexture && o.enable(19),
      M.decodeVideoTextureEmissive && o.enable(20),
      M.alphaToCoverage && o.enable(21),
      E.push(o.mask);
  }
  function S(E) {
    const M = x[E.type];
    let U;
    if (M) {
      const V = on[M];
      U = Fl.clone(V.uniforms);
    } else U = E.uniforms;
    return U;
  }
  function L(E, M) {
    let U;
    for (let V = 0, K = h.length; V < K; V++) {
      const Z = h[V];
      if (Z.cacheKey === M) {
        (U = Z), ++U.usedTimes;
        break;
      }
    }
    return U === void 0 && ((U = new Px(s, M, E, r)), h.push(U)), U;
  }
  function w(E) {
    if (--E.usedTimes === 0) {
      const M = h.indexOf(E);
      (h[M] = h[h.length - 1]), h.pop(), E.destroy();
    }
  }
  function I(E) {
    c.remove(E);
  }
  function N() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: p,
    getUniforms: S,
    acquireProgram: L,
    releaseProgram: w,
    releaseShaderCache: I,
    programs: h,
    dispose: N,
  };
}
function Ux() {
  let s = new WeakMap();
  function e(a) {
    return s.has(a);
  }
  function t(a) {
    let o = s.get(a);
    return o === void 0 && ((o = {}), s.set(a, o)), o;
  }
  function n(a) {
    s.delete(a);
  }
  function i(a, o, c) {
    s.get(a)[o] = c;
  }
  function r() {
    s = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: i, dispose: r };
}
function Fx(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.material.id !== e.material.id
    ? s.material.id - e.material.id
    : s.z !== e.z
    ? s.z - e.z
    : s.id - e.id;
}
function rl(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.z !== e.z
    ? e.z - s.z
    : s.id - e.id;
}
function al() {
  const s = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function r() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function a(u, f, d, x, g, m) {
    let p = s[e];
    return (
      p === void 0
        ? ((p = {
            id: u.id,
            object: u,
            geometry: f,
            material: d,
            groupOrder: x,
            renderOrder: u.renderOrder,
            z: g,
            group: m,
          }),
          (s[e] = p))
        : ((p.id = u.id),
          (p.object = u),
          (p.geometry = f),
          (p.material = d),
          (p.groupOrder = x),
          (p.renderOrder = u.renderOrder),
          (p.z = g),
          (p.group = m)),
      e++,
      p
    );
  }
  function o(u, f, d, x, g, m) {
    const p = a(u, f, d, x, g, m);
    d.transmission > 0
      ? n.push(p)
      : d.transparent === !0
      ? i.push(p)
      : t.push(p);
  }
  function c(u, f, d, x, g, m) {
    const p = a(u, f, d, x, g, m);
    d.transmission > 0
      ? n.unshift(p)
      : d.transparent === !0
      ? i.unshift(p)
      : t.unshift(p);
  }
  function l(u, f) {
    t.length > 1 && t.sort(u || Fx),
      n.length > 1 && n.sort(f || rl),
      i.length > 1 && i.sort(f || rl);
  }
  function h() {
    for (let u = e, f = s.length; u < f; u++) {
      const d = s[u];
      if (d.id === null) break;
      (d.id = null),
        (d.object = null),
        (d.geometry = null),
        (d.material = null),
        (d.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: c,
    finish: h,
    sort: l,
  };
}
function Ox() {
  let s = new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return (
      r === void 0
        ? ((a = new al()), s.set(n, [a]))
        : i >= r.length
        ? ((a = new al()), r.push(a))
        : (a = r[i]),
      a
    );
  }
  function t() {
    s = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Bx() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new F(), color: new We() };
          break;
        case "SpotLight":
          t = {
            position: new F(),
            direction: new F(),
            color: new We(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new F(), color: new We(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new F(), skyColor: new We(), groundColor: new We() };
          break;
        case "RectAreaLight":
          t = {
            color: new We(),
            position: new F(),
            halfWidth: new F(),
            halfHeight: new F(),
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
function kx() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new oe(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new oe(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new oe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
let zx = 0;
function Vx(s, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (s.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (s.map ? 1 : 0)
  );
}
function Hx(s) {
  const e = new Bx(),
    t = kx(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let l = 0; l < 9; l++) n.probe.push(new F());
  const i = new F(),
    r = new Ye(),
    a = new Ye();
  function o(l) {
    let h = 0,
      u = 0,
      f = 0;
    for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
    let d = 0,
      x = 0,
      g = 0,
      m = 0,
      p = 0,
      R = 0,
      _ = 0,
      S = 0,
      L = 0,
      w = 0,
      I = 0;
    l.sort(Vx);
    for (let E = 0, M = l.length; E < M; E++) {
      const U = l[E],
        V = U.color,
        K = U.intensity,
        Z = U.distance,
        ne = U.shadow && U.shadow.map ? U.shadow.map.texture : null;
      if (U.isAmbientLight) (h += V.r * K), (u += V.g * K), (f += V.b * K);
      else if (U.isLightProbe) {
        for (let $ = 0; $ < 9; $++)
          n.probe[$].addScaledVector(U.sh.coefficients[$], K);
        I++;
      } else if (U.isDirectionalLight) {
        const $ = e.get(U);
        if (($.color.copy(U.color).multiplyScalar(U.intensity), U.castShadow)) {
          const se = U.shadow,
            k = t.get(U);
          (k.shadowIntensity = se.intensity),
            (k.shadowBias = se.bias),
            (k.shadowNormalBias = se.normalBias),
            (k.shadowRadius = se.radius),
            (k.shadowMapSize = se.mapSize),
            (n.directionalShadow[d] = k),
            (n.directionalShadowMap[d] = ne),
            (n.directionalShadowMatrix[d] = U.shadow.matrix),
            R++;
        }
        (n.directional[d] = $), d++;
      } else if (U.isSpotLight) {
        const $ = e.get(U);
        $.position.setFromMatrixPosition(U.matrixWorld),
          $.color.copy(V).multiplyScalar(K),
          ($.distance = Z),
          ($.coneCos = Math.cos(U.angle)),
          ($.penumbraCos = Math.cos(U.angle * (1 - U.penumbra))),
          ($.decay = U.decay),
          (n.spot[g] = $);
        const se = U.shadow;
        if (
          (U.map &&
            ((n.spotLightMap[L] = U.map),
            L++,
            se.updateMatrices(U),
            U.castShadow && w++),
          (n.spotLightMatrix[g] = se.matrix),
          U.castShadow)
        ) {
          const k = t.get(U);
          (k.shadowIntensity = se.intensity),
            (k.shadowBias = se.bias),
            (k.shadowNormalBias = se.normalBias),
            (k.shadowRadius = se.radius),
            (k.shadowMapSize = se.mapSize),
            (n.spotShadow[g] = k),
            (n.spotShadowMap[g] = ne),
            S++;
        }
        g++;
      } else if (U.isRectAreaLight) {
        const $ = e.get(U);
        $.color.copy(V).multiplyScalar(K),
          $.halfWidth.set(U.width * 0.5, 0, 0),
          $.halfHeight.set(0, U.height * 0.5, 0),
          (n.rectArea[m] = $),
          m++;
      } else if (U.isPointLight) {
        const $ = e.get(U);
        if (
          ($.color.copy(U.color).multiplyScalar(U.intensity),
          ($.distance = U.distance),
          ($.decay = U.decay),
          U.castShadow)
        ) {
          const se = U.shadow,
            k = t.get(U);
          (k.shadowIntensity = se.intensity),
            (k.shadowBias = se.bias),
            (k.shadowNormalBias = se.normalBias),
            (k.shadowRadius = se.radius),
            (k.shadowMapSize = se.mapSize),
            (k.shadowCameraNear = se.camera.near),
            (k.shadowCameraFar = se.camera.far),
            (n.pointShadow[x] = k),
            (n.pointShadowMap[x] = ne),
            (n.pointShadowMatrix[x] = U.shadow.matrix),
            _++;
        }
        (n.point[x] = $), x++;
      } else if (U.isHemisphereLight) {
        const $ = e.get(U);
        $.skyColor.copy(U.color).multiplyScalar(K),
          $.groundColor.copy(U.groundColor).multiplyScalar(K),
          (n.hemi[p] = $),
          p++;
      }
    }
    m > 0 &&
      (s.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = Te.LTC_FLOAT_1), (n.rectAreaLTC2 = Te.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = Te.LTC_HALF_1), (n.rectAreaLTC2 = Te.LTC_HALF_2))),
      (n.ambient[0] = h),
      (n.ambient[1] = u),
      (n.ambient[2] = f);
    const N = n.hash;
    (N.directionalLength !== d ||
      N.pointLength !== x ||
      N.spotLength !== g ||
      N.rectAreaLength !== m ||
      N.hemiLength !== p ||
      N.numDirectionalShadows !== R ||
      N.numPointShadows !== _ ||
      N.numSpotShadows !== S ||
      N.numSpotMaps !== L ||
      N.numLightProbes !== I) &&
      ((n.directional.length = d),
      (n.spot.length = g),
      (n.rectArea.length = m),
      (n.point.length = x),
      (n.hemi.length = p),
      (n.directionalShadow.length = R),
      (n.directionalShadowMap.length = R),
      (n.pointShadow.length = _),
      (n.pointShadowMap.length = _),
      (n.spotShadow.length = S),
      (n.spotShadowMap.length = S),
      (n.directionalShadowMatrix.length = R),
      (n.pointShadowMatrix.length = _),
      (n.spotLightMatrix.length = S + L - w),
      (n.spotLightMap.length = L),
      (n.numSpotLightShadowsWithMaps = w),
      (n.numLightProbes = I),
      (N.directionalLength = d),
      (N.pointLength = x),
      (N.spotLength = g),
      (N.rectAreaLength = m),
      (N.hemiLength = p),
      (N.numDirectionalShadows = R),
      (N.numPointShadows = _),
      (N.numSpotShadows = S),
      (N.numSpotMaps = L),
      (N.numLightProbes = I),
      (n.version = zx++));
  }
  function c(l, h) {
    let u = 0,
      f = 0,
      d = 0,
      x = 0,
      g = 0;
    const m = h.matrixWorldInverse;
    for (let p = 0, R = l.length; p < R; p++) {
      const _ = l[p];
      if (_.isDirectionalLight) {
        const S = n.directional[u];
        S.direction.setFromMatrixPosition(_.matrixWorld),
          i.setFromMatrixPosition(_.target.matrixWorld),
          S.direction.sub(i),
          S.direction.transformDirection(m),
          u++;
      } else if (_.isSpotLight) {
        const S = n.spot[d];
        S.position.setFromMatrixPosition(_.matrixWorld),
          S.position.applyMatrix4(m),
          S.direction.setFromMatrixPosition(_.matrixWorld),
          i.setFromMatrixPosition(_.target.matrixWorld),
          S.direction.sub(i),
          S.direction.transformDirection(m),
          d++;
      } else if (_.isRectAreaLight) {
        const S = n.rectArea[x];
        S.position.setFromMatrixPosition(_.matrixWorld),
          S.position.applyMatrix4(m),
          a.identity(),
          r.copy(_.matrixWorld),
          r.premultiply(m),
          a.extractRotation(r),
          S.halfWidth.set(_.width * 0.5, 0, 0),
          S.halfHeight.set(0, _.height * 0.5, 0),
          S.halfWidth.applyMatrix4(a),
          S.halfHeight.applyMatrix4(a),
          x++;
      } else if (_.isPointLight) {
        const S = n.point[f];
        S.position.setFromMatrixPosition(_.matrixWorld),
          S.position.applyMatrix4(m),
          f++;
      } else if (_.isHemisphereLight) {
        const S = n.hemi[g];
        S.direction.setFromMatrixPosition(_.matrixWorld),
          S.direction.transformDirection(m),
          g++;
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function ol(s) {
  const e = new Hx(s),
    t = [],
    n = [];
  function i(h) {
    (l.camera = h), (t.length = 0), (n.length = 0);
  }
  function r(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function c(h) {
    e.setupView(t, h);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: i,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: r,
    pushShadow: a,
  };
}
function Gx(s) {
  let e = new WeakMap();
  function t(i, r = 0) {
    const a = e.get(i);
    let o;
    return (
      a === void 0
        ? ((o = new ol(s)), e.set(i, [o]))
        : r >= a.length
        ? ((o = new ol(s)), a.push(o))
        : (o = a[r]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
const Wx = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Xx = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function qx(s, e, t) {
  let n = new bo();
  const i = new oe(),
    r = new oe(),
    a = new tt(),
    o = new kf({ depthPacking: $h }),
    c = new zf(),
    l = {},
    h = t.maxTextureSize,
    u = { [In]: Ot, [Ot]: In, [cn]: cn },
    f = new mn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new oe() },
        radius: { value: 4 },
      },
      vertexShader: Wx,
      fragmentShader: Xx,
    }),
    d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const x = new kt();
  x.setAttribute(
    "position",
    new Tt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const g = new Wt(x, f),
    m = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = ml);
  let p = this.type;
  this.render = function (w, I, N) {
    if (
      m.enabled === !1 ||
      (m.autoUpdate === !1 && m.needsUpdate === !1) ||
      w.length === 0
    )
      return;
    const E = s.getRenderTarget(),
      M = s.getActiveCubeFace(),
      U = s.getActiveMipmapLevel(),
      V = s.state;
    V.setBlending(Pn),
      V.buffers.depth.getReversed() === !0
        ? V.buffers.color.setClear(0, 0, 0, 0)
        : V.buffers.color.setClear(1, 1, 1, 1),
      V.buffers.depth.setTest(!0),
      V.setScissorTest(!1);
    const K = p !== An && this.type === An,
      Z = p === An && this.type !== An;
    for (let ne = 0, $ = w.length; ne < $; ne++) {
      const se = w[ne],
        k = se.shadow;
      if (k === void 0) {
        Ue("WebGLShadowMap:", se, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      i.copy(k.mapSize);
      const de = k.getFrameExtents();
      if (
        (i.multiply(de),
        r.copy(k.mapSize),
        (i.x > h || i.y > h) &&
          (i.x > h &&
            ((r.x = Math.floor(h / de.x)),
            (i.x = r.x * de.x),
            (k.mapSize.x = r.x)),
          i.y > h &&
            ((r.y = Math.floor(h / de.y)),
            (i.y = r.y * de.y),
            (k.mapSize.y = r.y))),
        k.map === null || K === !0 || Z === !0)
      ) {
        const Ae = this.type !== An ? { minFilter: Dt, magFilter: Dt } : {};
        k.map !== null && k.map.dispose(),
          (k.map = new Xn(i.x, i.y, Ae)),
          (k.map.texture.name = se.name + ".shadowMap"),
          k.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(k.map), s.clear();
      const pe = k.getViewportCount();
      for (let Ae = 0; Ae < pe; Ae++) {
        const Ve = k.getViewport(Ae);
        a.set(r.x * Ve.x, r.y * Ve.y, r.x * Ve.z, r.y * Ve.w),
          V.viewport(a),
          k.updateMatrices(se, Ae),
          (n = k.getFrustum()),
          S(I, N, k.camera, se, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === An && R(k, N),
        (k.needsUpdate = !1);
    }
    (p = this.type), (m.needsUpdate = !1), s.setRenderTarget(E, M, U);
  };
  function R(w, I) {
    const N = e.update(g);
    f.defines.VSM_SAMPLES !== w.blurSamples &&
      ((f.defines.VSM_SAMPLES = w.blurSamples),
      (d.defines.VSM_SAMPLES = w.blurSamples),
      (f.needsUpdate = !0),
      (d.needsUpdate = !0)),
      w.mapPass === null && (w.mapPass = new Xn(i.x, i.y)),
      (f.uniforms.shadow_pass.value = w.map.texture),
      (f.uniforms.resolution.value = w.mapSize),
      (f.uniforms.radius.value = w.radius),
      s.setRenderTarget(w.mapPass),
      s.clear(),
      s.renderBufferDirect(I, null, N, f, g, null),
      (d.uniforms.shadow_pass.value = w.mapPass.texture),
      (d.uniforms.resolution.value = w.mapSize),
      (d.uniforms.radius.value = w.radius),
      s.setRenderTarget(w.map),
      s.clear(),
      s.renderBufferDirect(I, null, N, d, g, null);
  }
  function _(w, I, N, E) {
    let M = null;
    const U =
      N.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (U !== void 0) M = U;
    else if (
      ((M = N.isPointLight === !0 ? c : o),
      (s.localClippingEnabled &&
        I.clipShadows === !0 &&
        Array.isArray(I.clippingPlanes) &&
        I.clippingPlanes.length !== 0) ||
        (I.displacementMap && I.displacementScale !== 0) ||
        (I.alphaMap && I.alphaTest > 0) ||
        (I.map && I.alphaTest > 0) ||
        I.alphaToCoverage === !0)
    ) {
      const V = M.uuid,
        K = I.uuid;
      let Z = l[V];
      Z === void 0 && ((Z = {}), (l[V] = Z));
      let ne = Z[K];
      ne === void 0 &&
        ((ne = M.clone()), (Z[K] = ne), I.addEventListener("dispose", L)),
        (M = ne);
    }
    if (
      ((M.visible = I.visible),
      (M.wireframe = I.wireframe),
      E === An
        ? (M.side = I.shadowSide !== null ? I.shadowSide : I.side)
        : (M.side = I.shadowSide !== null ? I.shadowSide : u[I.side]),
      (M.alphaMap = I.alphaMap),
      (M.alphaTest = I.alphaToCoverage === !0 ? 0.5 : I.alphaTest),
      (M.map = I.map),
      (M.clipShadows = I.clipShadows),
      (M.clippingPlanes = I.clippingPlanes),
      (M.clipIntersection = I.clipIntersection),
      (M.displacementMap = I.displacementMap),
      (M.displacementScale = I.displacementScale),
      (M.displacementBias = I.displacementBias),
      (M.wireframeLinewidth = I.wireframeLinewidth),
      (M.linewidth = I.linewidth),
      N.isPointLight === !0 && M.isMeshDistanceMaterial === !0)
    ) {
      const V = s.properties.get(M);
      V.light = N;
    }
    return M;
  }
  function S(w, I, N, E, M) {
    if (w.visible === !1) return;
    if (
      w.layers.test(I.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && M === An)) &&
      (!w.frustumCulled || n.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, w.matrixWorld);
      const K = e.update(w),
        Z = w.material;
      if (Array.isArray(Z)) {
        const ne = K.groups;
        for (let $ = 0, se = ne.length; $ < se; $++) {
          const k = ne[$],
            de = Z[k.materialIndex];
          if (de && de.visible) {
            const pe = _(w, de, E, M);
            w.onBeforeShadow(s, w, I, N, K, pe, k),
              s.renderBufferDirect(N, null, K, pe, w, k),
              w.onAfterShadow(s, w, I, N, K, pe, k);
          }
        }
      } else if (Z.visible) {
        const ne = _(w, Z, E, M);
        w.onBeforeShadow(s, w, I, N, K, ne, null),
          s.renderBufferDirect(N, null, K, ne, w, null),
          w.onAfterShadow(s, w, I, N, K, ne, null);
      }
    }
    const V = w.children;
    for (let K = 0, Z = V.length; K < Z; K++) S(V[K], I, N, E, M);
  }
  function L(w) {
    w.target.removeEventListener("dispose", L);
    for (const N in l) {
      const E = l[N],
        M = w.target.uuid;
      M in E && (E[M].dispose(), delete E[M]);
    }
  }
}
const Yx = {
  [ma]: xa,
  [ga]: ya,
  [_a]: ba,
  [Ni]: va,
  [xa]: ma,
  [ya]: ga,
  [ba]: _a,
  [va]: Ni,
};
function jx(s, e) {
  function t() {
    let B = !1;
    const Ee = new tt();
    let Me = null;
    const Se = new tt(0, 0, 0, 0);
    return {
      setMask: function (xe) {
        Me !== xe && !B && (s.colorMask(xe, xe, xe, xe), (Me = xe));
      },
      setLocked: function (xe) {
        B = xe;
      },
      setClear: function (xe, ue, Ie, qe, ht) {
        ht === !0 && ((xe *= qe), (ue *= qe), (Ie *= qe)),
          Ee.set(xe, ue, Ie, qe),
          Se.equals(Ee) === !1 && (s.clearColor(xe, ue, Ie, qe), Se.copy(Ee));
      },
      reset: function () {
        (B = !1), (Me = null), Se.set(-1, 0, 0, 0);
      },
    };
  }
  function n() {
    let B = !1,
      Ee = !1,
      Me = null,
      Se = null,
      xe = null;
    return {
      setReversed: function (ue) {
        if (Ee !== ue) {
          const Ie = e.get("EXT_clip_control");
          ue
            ? Ie.clipControlEXT(Ie.LOWER_LEFT_EXT, Ie.ZERO_TO_ONE_EXT)
            : Ie.clipControlEXT(Ie.LOWER_LEFT_EXT, Ie.NEGATIVE_ONE_TO_ONE_EXT),
            (Ee = ue);
          const qe = xe;
          (xe = null), this.setClear(qe);
        }
      },
      getReversed: function () {
        return Ee;
      },
      setTest: function (ue) {
        ue ? b(s.DEPTH_TEST) : q(s.DEPTH_TEST);
      },
      setMask: function (ue) {
        Me !== ue && !B && (s.depthMask(ue), (Me = ue));
      },
      setFunc: function (ue) {
        if ((Ee && (ue = Yx[ue]), Se !== ue)) {
          switch (ue) {
            case ma:
              s.depthFunc(s.NEVER);
              break;
            case xa:
              s.depthFunc(s.ALWAYS);
              break;
            case ga:
              s.depthFunc(s.LESS);
              break;
            case Ni:
              s.depthFunc(s.LEQUAL);
              break;
            case _a:
              s.depthFunc(s.EQUAL);
              break;
            case va:
              s.depthFunc(s.GEQUAL);
              break;
            case ya:
              s.depthFunc(s.GREATER);
              break;
            case ba:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          Se = ue;
        }
      },
      setLocked: function (ue) {
        B = ue;
      },
      setClear: function (ue) {
        xe !== ue && (Ee && (ue = 1 - ue), s.clearDepth(ue), (xe = ue));
      },
      reset: function () {
        (B = !1), (Me = null), (Se = null), (xe = null), (Ee = !1);
      },
    };
  }
  function i() {
    let B = !1,
      Ee = null,
      Me = null,
      Se = null,
      xe = null,
      ue = null,
      Ie = null,
      qe = null,
      ht = null;
    return {
      setTest: function (rt) {
        B || (rt ? b(s.STENCIL_TEST) : q(s.STENCIL_TEST));
      },
      setMask: function (rt) {
        Ee !== rt && !B && (s.stencilMask(rt), (Ee = rt));
      },
      setFunc: function (rt, rn, Zt) {
        (Me !== rt || Se !== rn || xe !== Zt) &&
          (s.stencilFunc(rt, rn, Zt), (Me = rt), (Se = rn), (xe = Zt));
      },
      setOp: function (rt, rn, Zt) {
        (ue !== rt || Ie !== rn || qe !== Zt) &&
          (s.stencilOp(rt, rn, Zt), (ue = rt), (Ie = rn), (qe = Zt));
      },
      setLocked: function (rt) {
        B = rt;
      },
      setClear: function (rt) {
        ht !== rt && (s.clearStencil(rt), (ht = rt));
      },
      reset: function () {
        (B = !1),
          (Ee = null),
          (Me = null),
          (Se = null),
          (xe = null),
          (ue = null),
          (Ie = null),
          (qe = null),
          (ht = null);
      },
    };
  }
  const r = new t(),
    a = new n(),
    o = new i(),
    c = new WeakMap(),
    l = new WeakMap();
  let h = {},
    u = {},
    f = new WeakMap(),
    d = [],
    x = null,
    g = !1,
    m = null,
    p = null,
    R = null,
    _ = null,
    S = null,
    L = null,
    w = null,
    I = new We(0, 0, 0),
    N = 0,
    E = !1,
    M = null,
    U = null,
    V = null,
    K = null,
    Z = null;
  const ne = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = !1,
    se = 0;
  const k = s.getParameter(s.VERSION);
  k.indexOf("WebGL") !== -1
    ? ((se = parseFloat(/^WebGL (\d)/.exec(k)[1])), ($ = se >= 1))
    : k.indexOf("OpenGL ES") !== -1 &&
      ((se = parseFloat(/^OpenGL ES (\d)/.exec(k)[1])), ($ = se >= 2));
  let de = null,
    pe = {};
  const Ae = s.getParameter(s.SCISSOR_BOX),
    Ve = s.getParameter(s.VIEWPORT),
    Ke = new tt().fromArray(Ae),
    Y = new tt().fromArray(Ve);
  function O(B, Ee, Me, Se) {
    const xe = new Uint8Array(4),
      ue = s.createTexture();
    s.bindTexture(B, ue),
      s.texParameteri(B, s.TEXTURE_MIN_FILTER, s.NEAREST),
      s.texParameteri(B, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Ie = 0; Ie < Me; Ie++)
      B === s.TEXTURE_3D || B === s.TEXTURE_2D_ARRAY
        ? s.texImage3D(Ee, 0, s.RGBA, 1, 1, Se, 0, s.RGBA, s.UNSIGNED_BYTE, xe)
        : s.texImage2D(
            Ee + Ie,
            0,
            s.RGBA,
            1,
            1,
            0,
            s.RGBA,
            s.UNSIGNED_BYTE,
            xe
          );
    return ue;
  }
  const T = {};
  (T[s.TEXTURE_2D] = O(s.TEXTURE_2D, s.TEXTURE_2D, 1)),
    (T[s.TEXTURE_CUBE_MAP] = O(
      s.TEXTURE_CUBE_MAP,
      s.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (T[s.TEXTURE_2D_ARRAY] = O(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1)),
    (T[s.TEXTURE_3D] = O(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1)),
    r.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    b(s.DEPTH_TEST),
    a.setFunc(Ni),
    j(!1),
    J(zo),
    b(s.CULL_FACE),
    z(Pn);
  function b(B) {
    h[B] !== !0 && (s.enable(B), (h[B] = !0));
  }
  function q(B) {
    h[B] !== !1 && (s.disable(B), (h[B] = !1));
  }
  function re(B, Ee) {
    return u[B] !== Ee
      ? (s.bindFramebuffer(B, Ee),
        (u[B] = Ee),
        B === s.DRAW_FRAMEBUFFER && (u[s.FRAMEBUFFER] = Ee),
        B === s.FRAMEBUFFER && (u[s.DRAW_FRAMEBUFFER] = Ee),
        !0)
      : !1;
  }
  function H(B, Ee) {
    let Me = d,
      Se = !1;
    if (B) {
      (Me = f.get(Ee)), Me === void 0 && ((Me = []), f.set(Ee, Me));
      const xe = B.textures;
      if (Me.length !== xe.length || Me[0] !== s.COLOR_ATTACHMENT0) {
        for (let ue = 0, Ie = xe.length; ue < Ie; ue++)
          Me[ue] = s.COLOR_ATTACHMENT0 + ue;
        (Me.length = xe.length), (Se = !0);
      }
    } else Me[0] !== s.BACK && ((Me[0] = s.BACK), (Se = !0));
    Se && s.drawBuffers(Me);
  }
  function le(B) {
    return x !== B ? (s.useProgram(B), (x = B), !0) : !1;
  }
  const ge = {
    [ii]: s.FUNC_ADD,
    [Mh]: s.FUNC_SUBTRACT,
    [Sh]: s.FUNC_REVERSE_SUBTRACT,
  };
  (ge[Th] = s.MIN), (ge[Eh] = s.MAX);
  const he = {
    [Ah]: s.ZERO,
    [wh]: s.ONE,
    [Rh]: s.SRC_COLOR,
    [da]: s.SRC_ALPHA,
    [Nh]: s.SRC_ALPHA_SATURATE,
    [Ih]: s.DST_COLOR,
    [Ph]: s.DST_ALPHA,
    [Ch]: s.ONE_MINUS_SRC_COLOR,
    [pa]: s.ONE_MINUS_SRC_ALPHA,
    [Dh]: s.ONE_MINUS_DST_COLOR,
    [Lh]: s.ONE_MINUS_DST_ALPHA,
    [Uh]: s.CONSTANT_COLOR,
    [Fh]: s.ONE_MINUS_CONSTANT_COLOR,
    [Oh]: s.CONSTANT_ALPHA,
    [Bh]: s.ONE_MINUS_CONSTANT_ALPHA,
  };
  function z(B, Ee, Me, Se, xe, ue, Ie, qe, ht, rt) {
    if (B === Pn) {
      g === !0 && (q(s.BLEND), (g = !1));
      return;
    }
    if ((g === !1 && (b(s.BLEND), (g = !0)), B !== bh)) {
      if (B !== m || rt !== E) {
        if (
          ((p !== ii || S !== ii) &&
            (s.blendEquation(s.FUNC_ADD), (p = ii), (S = ii)),
          rt)
        )
          switch (B) {
            case Pi:
              s.blendFuncSeparate(
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Vo:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case Ho:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Go:
              s.blendFuncSeparate(
                s.DST_COLOR,
                s.ONE_MINUS_SRC_ALPHA,
                s.ZERO,
                s.ONE
              );
              break;
            default:
              Je("WebGLState: Invalid blending: ", B);
              break;
          }
        else
          switch (B) {
            case Pi:
              s.blendFuncSeparate(
                s.SRC_ALPHA,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Vo:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE, s.ONE, s.ONE);
              break;
            case Ho:
              Je(
                "WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true"
              );
              break;
            case Go:
              Je(
                "WebGLState: MultiplyBlending requires material.premultipliedAlpha = true"
              );
              break;
            default:
              Je("WebGLState: Invalid blending: ", B);
              break;
          }
        (R = null),
          (_ = null),
          (L = null),
          (w = null),
          I.set(0, 0, 0),
          (N = 0),
          (m = B),
          (E = rt);
      }
      return;
    }
    (xe = xe || Ee),
      (ue = ue || Me),
      (Ie = Ie || Se),
      (Ee !== p || xe !== S) &&
        (s.blendEquationSeparate(ge[Ee], ge[xe]), (p = Ee), (S = xe)),
      (Me !== R || Se !== _ || ue !== L || Ie !== w) &&
        (s.blendFuncSeparate(he[Me], he[Se], he[ue], he[Ie]),
        (R = Me),
        (_ = Se),
        (L = ue),
        (w = Ie)),
      (qe.equals(I) === !1 || ht !== N) &&
        (s.blendColor(qe.r, qe.g, qe.b, ht), I.copy(qe), (N = ht)),
      (m = B),
      (E = !1);
  }
  function y(B, Ee) {
    B.side === cn ? q(s.CULL_FACE) : b(s.CULL_FACE);
    let Me = B.side === Ot;
    Ee && (Me = !Me),
      j(Me),
      B.blending === Pi && B.transparent === !1
        ? z(Pn)
        : z(
            B.blending,
            B.blendEquation,
            B.blendSrc,
            B.blendDst,
            B.blendEquationAlpha,
            B.blendSrcAlpha,
            B.blendDstAlpha,
            B.blendColor,
            B.blendAlpha,
            B.premultipliedAlpha
          ),
      a.setFunc(B.depthFunc),
      a.setTest(B.depthTest),
      a.setMask(B.depthWrite),
      r.setMask(B.colorWrite);
    const Se = B.stencilWrite;
    o.setTest(Se),
      Se &&
        (o.setMask(B.stencilWriteMask),
        o.setFunc(B.stencilFunc, B.stencilRef, B.stencilFuncMask),
        o.setOp(B.stencilFail, B.stencilZFail, B.stencilZPass)),
      C(B.polygonOffset, B.polygonOffsetFactor, B.polygonOffsetUnits),
      B.alphaToCoverage === !0
        ? b(s.SAMPLE_ALPHA_TO_COVERAGE)
        : q(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function j(B) {
    M !== B && (B ? s.frontFace(s.CW) : s.frontFace(s.CCW), (M = B));
  }
  function J(B) {
    B !== _h
      ? (b(s.CULL_FACE),
        B !== U &&
          (B === zo
            ? s.cullFace(s.BACK)
            : B === vh
            ? s.cullFace(s.FRONT)
            : s.cullFace(s.FRONT_AND_BACK)))
      : q(s.CULL_FACE),
      (U = B);
  }
  function D(B) {
    B !== V && ($ && s.lineWidth(B), (V = B));
  }
  function C(B, Ee, Me) {
    B
      ? (b(s.POLYGON_OFFSET_FILL),
        (K !== Ee || Z !== Me) && (s.polygonOffset(Ee, Me), (K = Ee), (Z = Me)))
      : q(s.POLYGON_OFFSET_FILL);
  }
  function ae(B) {
    B ? b(s.SCISSOR_TEST) : q(s.SCISSOR_TEST);
  }
  function ce(B) {
    B === void 0 && (B = s.TEXTURE0 + ne - 1),
      de !== B && (s.activeTexture(B), (de = B));
  }
  function be(B, Ee, Me) {
    Me === void 0 && (de === null ? (Me = s.TEXTURE0 + ne - 1) : (Me = de));
    let Se = pe[Me];
    Se === void 0 && ((Se = { type: void 0, texture: void 0 }), (pe[Me] = Se)),
      (Se.type !== B || Se.texture !== Ee) &&
        (de !== Me && (s.activeTexture(Me), (de = Me)),
        s.bindTexture(B, Ee || T[B]),
        (Se.type = B),
        (Se.texture = Ee));
  }
  function P() {
    const B = pe[de];
    B !== void 0 &&
      B.type !== void 0 &&
      (s.bindTexture(B.type, null), (B.type = void 0), (B.texture = void 0));
  }
  function v() {
    try {
      s.compressedTexImage2D(...arguments);
    } catch (B) {
      B("WebGLState:", B);
    }
  }
  function G() {
    try {
      s.compressedTexImage3D(...arguments);
    } catch (B) {
      B("WebGLState:", B);
    }
  }
  function ie() {
    try {
      s.texSubImage2D(...arguments);
    } catch (B) {
      B("WebGLState:", B);
    }
  }
  function fe() {
    try {
      s.texSubImage3D(...arguments);
    } catch (B) {
      B("WebGLState:", B);
    }
  }
  function te() {
    try {
      s.compressedTexSubImage2D(...arguments);
    } catch (B) {
      B("WebGLState:", B);
    }
  }
  function Le() {
    try {
      s.compressedTexSubImage3D(...arguments);
    } catch (B) {
      B("WebGLState:", B);
    }
  }
  function ye() {
    try {
      s.texStorage2D(...arguments);
    } catch (B) {
      B("WebGLState:", B);
    }
  }
  function Ne() {
    try {
      s.texStorage3D(...arguments);
    } catch (B) {
      B("WebGLState:", B);
    }
  }
  function Pe() {
    try {
      s.texImage2D(...arguments);
    } catch (B) {
      B("WebGLState:", B);
    }
  }
  function me() {
    try {
      s.texImage3D(...arguments);
    } catch (B) {
      B("WebGLState:", B);
    }
  }
  function _e(B) {
    Ke.equals(B) === !1 && (s.scissor(B.x, B.y, B.z, B.w), Ke.copy(B));
  }
  function ze(B) {
    Y.equals(B) === !1 && (s.viewport(B.x, B.y, B.z, B.w), Y.copy(B));
  }
  function Be(B, Ee) {
    let Me = l.get(Ee);
    Me === void 0 && ((Me = new WeakMap()), l.set(Ee, Me));
    let Se = Me.get(B);
    Se === void 0 && ((Se = s.getUniformBlockIndex(Ee, B.name)), Me.set(B, Se));
  }
  function Re(B, Ee) {
    const Se = l.get(Ee).get(B);
    c.get(Ee) !== Se &&
      (s.uniformBlockBinding(Ee, Se, B.__bindingPointIndex), c.set(Ee, Se));
  }
  function Xe() {
    s.disable(s.BLEND),
      s.disable(s.CULL_FACE),
      s.disable(s.DEPTH_TEST),
      s.disable(s.POLYGON_OFFSET_FILL),
      s.disable(s.SCISSOR_TEST),
      s.disable(s.STENCIL_TEST),
      s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),
      s.blendEquation(s.FUNC_ADD),
      s.blendFunc(s.ONE, s.ZERO),
      s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO),
      s.blendColor(0, 0, 0, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(s.LESS),
      a.setReversed(!1),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(s.ALWAYS, 0, 4294967295),
      s.stencilOp(s.KEEP, s.KEEP, s.KEEP),
      s.clearStencil(0),
      s.cullFace(s.BACK),
      s.frontFace(s.CCW),
      s.polygonOffset(0, 0),
      s.activeTexture(s.TEXTURE0),
      s.bindFramebuffer(s.FRAMEBUFFER, null),
      s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
      s.bindFramebuffer(s.READ_FRAMEBUFFER, null),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (h = {}),
      (de = null),
      (pe = {}),
      (u = {}),
      (f = new WeakMap()),
      (d = []),
      (x = null),
      (g = !1),
      (m = null),
      (p = null),
      (R = null),
      (_ = null),
      (S = null),
      (L = null),
      (w = null),
      (I = new We(0, 0, 0)),
      (N = 0),
      (E = !1),
      (M = null),
      (U = null),
      (V = null),
      (K = null),
      (Z = null),
      Ke.set(0, 0, s.canvas.width, s.canvas.height),
      Y.set(0, 0, s.canvas.width, s.canvas.height),
      r.reset(),
      a.reset(),
      o.reset();
  }
  return {
    buffers: { color: r, depth: a, stencil: o },
    enable: b,
    disable: q,
    bindFramebuffer: re,
    drawBuffers: H,
    useProgram: le,
    setBlending: z,
    setMaterial: y,
    setFlipSided: j,
    setCullFace: J,
    setLineWidth: D,
    setPolygonOffset: C,
    setScissorTest: ae,
    activeTexture: ce,
    bindTexture: be,
    unbindTexture: P,
    compressedTexImage2D: v,
    compressedTexImage3D: G,
    texImage2D: Pe,
    texImage3D: me,
    updateUBOMapping: Be,
    uniformBlockBinding: Re,
    texStorage2D: ye,
    texStorage3D: Ne,
    texSubImage2D: ie,
    texSubImage3D: fe,
    compressedTexSubImage2D: te,
    compressedTexSubImage3D: Le,
    scissor: _e,
    viewport: ze,
    reset: Xe,
  };
}
function Kx(s, e, t, n, i, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    l = new oe(),
    h = new WeakMap();
  let u;
  const f = new WeakMap();
  let d = !1;
  try {
    d =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function x(P, v) {
    return d ? new OffscreenCanvas(P, v) : vs("canvas");
  }
  function g(P, v, G) {
    let ie = 1;
    const fe = be(P);
    if (
      ((fe.width > G || fe.height > G) &&
        (ie = G / Math.max(fe.width, fe.height)),
      ie < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && P instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && P instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && P instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && P instanceof VideoFrame)
      ) {
        const te = Math.floor(ie * fe.width),
          Le = Math.floor(ie * fe.height);
        u === void 0 && (u = x(te, Le));
        const ye = v ? x(te, Le) : u;
        return (
          (ye.width = te),
          (ye.height = Le),
          ye.getContext("2d").drawImage(P, 0, 0, te, Le),
          Ue(
            "WebGLRenderer: Texture has been resized from (" +
              fe.width +
              "x" +
              fe.height +
              ") to (" +
              te +
              "x" +
              Le +
              ")."
          ),
          ye
        );
      } else
        return (
          "data" in P &&
            Ue(
              "WebGLRenderer: Image in DataTexture is too big (" +
                fe.width +
                "x" +
                fe.height +
                ")."
            ),
          P
        );
    return P;
  }
  function m(P) {
    return P.generateMipmaps;
  }
  function p(P) {
    s.generateMipmap(P);
  }
  function R(P) {
    return P.isWebGLCubeRenderTarget
      ? s.TEXTURE_CUBE_MAP
      : P.isWebGL3DRenderTarget
      ? s.TEXTURE_3D
      : P.isWebGLArrayRenderTarget || P.isCompressedArrayTexture
      ? s.TEXTURE_2D_ARRAY
      : s.TEXTURE_2D;
  }
  function _(P, v, G, ie, fe = !1) {
    if (P !== null) {
      if (s[P] !== void 0) return s[P];
      Ue(
        "WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          P +
          "'"
      );
    }
    let te = v;
    if (
      (v === s.RED &&
        (G === s.FLOAT && (te = s.R32F),
        G === s.HALF_FLOAT && (te = s.R16F),
        G === s.UNSIGNED_BYTE && (te = s.R8)),
      v === s.RED_INTEGER &&
        (G === s.UNSIGNED_BYTE && (te = s.R8UI),
        G === s.UNSIGNED_SHORT && (te = s.R16UI),
        G === s.UNSIGNED_INT && (te = s.R32UI),
        G === s.BYTE && (te = s.R8I),
        G === s.SHORT && (te = s.R16I),
        G === s.INT && (te = s.R32I)),
      v === s.RG &&
        (G === s.FLOAT && (te = s.RG32F),
        G === s.HALF_FLOAT && (te = s.RG16F),
        G === s.UNSIGNED_BYTE && (te = s.RG8)),
      v === s.RG_INTEGER &&
        (G === s.UNSIGNED_BYTE && (te = s.RG8UI),
        G === s.UNSIGNED_SHORT && (te = s.RG16UI),
        G === s.UNSIGNED_INT && (te = s.RG32UI),
        G === s.BYTE && (te = s.RG8I),
        G === s.SHORT && (te = s.RG16I),
        G === s.INT && (te = s.RG32I)),
      v === s.RGB_INTEGER &&
        (G === s.UNSIGNED_BYTE && (te = s.RGB8UI),
        G === s.UNSIGNED_SHORT && (te = s.RGB16UI),
        G === s.UNSIGNED_INT && (te = s.RGB32UI),
        G === s.BYTE && (te = s.RGB8I),
        G === s.SHORT && (te = s.RGB16I),
        G === s.INT && (te = s.RGB32I)),
      v === s.RGBA_INTEGER &&
        (G === s.UNSIGNED_BYTE && (te = s.RGBA8UI),
        G === s.UNSIGNED_SHORT && (te = s.RGBA16UI),
        G === s.UNSIGNED_INT && (te = s.RGBA32UI),
        G === s.BYTE && (te = s.RGBA8I),
        G === s.SHORT && (te = s.RGBA16I),
        G === s.INT && (te = s.RGBA32I)),
      v === s.RGB &&
        (G === s.UNSIGNED_INT_5_9_9_9_REV && (te = s.RGB9_E5),
        G === s.UNSIGNED_INT_10F_11F_11F_REV && (te = s.R11F_G11F_B10F)),
      v === s.RGBA)
    ) {
      const Le = fe ? dr : et.getTransfer(ie);
      G === s.FLOAT && (te = s.RGBA32F),
        G === s.HALF_FLOAT && (te = s.RGBA16F),
        G === s.UNSIGNED_BYTE && (te = Le === ot ? s.SRGB8_ALPHA8 : s.RGBA8),
        G === s.UNSIGNED_SHORT_4_4_4_4 && (te = s.RGBA4),
        G === s.UNSIGNED_SHORT_5_5_5_1 && (te = s.RGB5_A1);
    }
    return (
      (te === s.R16F ||
        te === s.R32F ||
        te === s.RG16F ||
        te === s.RG32F ||
        te === s.RGBA16F ||
        te === s.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      te
    );
  }
  function S(P, v) {
    let G;
    return (
      P
        ? v === null || v === oi || v === ps
          ? (G = s.DEPTH24_STENCIL8)
          : v === nn
          ? (G = s.DEPTH32F_STENCIL8)
          : v === ds &&
            ((G = s.DEPTH24_STENCIL8),
            Ue(
              "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
            ))
        : v === null || v === oi || v === ps
        ? (G = s.DEPTH_COMPONENT24)
        : v === nn
        ? (G = s.DEPTH_COMPONENT32F)
        : v === ds && (G = s.DEPTH_COMPONENT16),
      G
    );
  }
  function L(P, v) {
    return m(P) === !0 ||
      (P.isFramebufferTexture && P.minFilter !== Dt && P.minFilter !== It)
      ? Math.log2(Math.max(v.width, v.height)) + 1
      : P.mipmaps !== void 0 && P.mipmaps.length > 0
      ? P.mipmaps.length
      : P.isCompressedTexture && Array.isArray(P.image)
      ? v.mipmaps.length
      : 1;
  }
  function w(P) {
    const v = P.target;
    v.removeEventListener("dispose", w), N(v), v.isVideoTexture && h.delete(v);
  }
  function I(P) {
    const v = P.target;
    v.removeEventListener("dispose", I), M(v);
  }
  function N(P) {
    const v = n.get(P);
    if (v.__webglInit === void 0) return;
    const G = P.source,
      ie = f.get(G);
    if (ie) {
      const fe = ie[v.__cacheKey];
      fe.usedTimes--,
        fe.usedTimes === 0 && E(P),
        Object.keys(ie).length === 0 && f.delete(G);
    }
    n.remove(P);
  }
  function E(P) {
    const v = n.get(P);
    s.deleteTexture(v.__webglTexture);
    const G = P.source,
      ie = f.get(G);
    delete ie[v.__cacheKey], a.memory.textures--;
  }
  function M(P) {
    const v = n.get(P);
    if (
      (P.depthTexture && (P.depthTexture.dispose(), n.remove(P.depthTexture)),
      P.isWebGLCubeRenderTarget)
    )
      for (let ie = 0; ie < 6; ie++) {
        if (Array.isArray(v.__webglFramebuffer[ie]))
          for (let fe = 0; fe < v.__webglFramebuffer[ie].length; fe++)
            s.deleteFramebuffer(v.__webglFramebuffer[ie][fe]);
        else s.deleteFramebuffer(v.__webglFramebuffer[ie]);
        v.__webglDepthbuffer && s.deleteRenderbuffer(v.__webglDepthbuffer[ie]);
      }
    else {
      if (Array.isArray(v.__webglFramebuffer))
        for (let ie = 0; ie < v.__webglFramebuffer.length; ie++)
          s.deleteFramebuffer(v.__webglFramebuffer[ie]);
      else s.deleteFramebuffer(v.__webglFramebuffer);
      if (
        (v.__webglDepthbuffer && s.deleteRenderbuffer(v.__webglDepthbuffer),
        v.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(v.__webglMultisampledFramebuffer),
        v.__webglColorRenderbuffer)
      )
        for (let ie = 0; ie < v.__webglColorRenderbuffer.length; ie++)
          v.__webglColorRenderbuffer[ie] &&
            s.deleteRenderbuffer(v.__webglColorRenderbuffer[ie]);
      v.__webglDepthRenderbuffer &&
        s.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const G = P.textures;
    for (let ie = 0, fe = G.length; ie < fe; ie++) {
      const te = n.get(G[ie]);
      te.__webglTexture &&
        (s.deleteTexture(te.__webglTexture), a.memory.textures--),
        n.remove(G[ie]);
    }
    n.remove(P);
  }
  let U = 0;
  function V() {
    U = 0;
  }
  function K() {
    const P = U;
    return (
      P >= i.maxTextures &&
        Ue(
          "WebGLTextures: Trying to use " +
            P +
            " texture units while this GPU supports only " +
            i.maxTextures
        ),
      (U += 1),
      P
    );
  }
  function Z(P) {
    const v = [];
    return (
      v.push(P.wrapS),
      v.push(P.wrapT),
      v.push(P.wrapR || 0),
      v.push(P.magFilter),
      v.push(P.minFilter),
      v.push(P.anisotropy),
      v.push(P.internalFormat),
      v.push(P.format),
      v.push(P.type),
      v.push(P.generateMipmaps),
      v.push(P.premultiplyAlpha),
      v.push(P.flipY),
      v.push(P.unpackAlignment),
      v.push(P.colorSpace),
      v.join()
    );
  }
  function ne(P, v) {
    const G = n.get(P);
    if (
      (P.isVideoTexture && ae(P),
      P.isRenderTargetTexture === !1 &&
        P.isExternalTexture !== !0 &&
        P.version > 0 &&
        G.__version !== P.version)
    ) {
      const ie = P.image;
      if (ie === null)
        Ue("WebGLRenderer: Texture marked for update but no image data found.");
      else if (ie.complete === !1)
        Ue("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        T(G, P, v);
        return;
      }
    } else
      P.isExternalTexture &&
        (G.__webglTexture = P.sourceTexture ? P.sourceTexture : null);
    t.bindTexture(s.TEXTURE_2D, G.__webglTexture, s.TEXTURE0 + v);
  }
  function $(P, v) {
    const G = n.get(P);
    if (
      P.isRenderTargetTexture === !1 &&
      P.version > 0 &&
      G.__version !== P.version
    ) {
      T(G, P, v);
      return;
    } else
      P.isExternalTexture &&
        (G.__webglTexture = P.sourceTexture ? P.sourceTexture : null);
    t.bindTexture(s.TEXTURE_2D_ARRAY, G.__webglTexture, s.TEXTURE0 + v);
  }
  function se(P, v) {
    const G = n.get(P);
    if (
      P.isRenderTargetTexture === !1 &&
      P.version > 0 &&
      G.__version !== P.version
    ) {
      T(G, P, v);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, G.__webglTexture, s.TEXTURE0 + v);
  }
  function k(P, v) {
    const G = n.get(P);
    if (P.version > 0 && G.__version !== P.version) {
      b(G, P, v);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, G.__webglTexture, s.TEXTURE0 + v);
  }
  const de = { [Oi]: s.REPEAT, [ln]: s.CLAMP_TO_EDGE, [fr]: s.MIRRORED_REPEAT },
    pe = {
      [Dt]: s.NEAREST,
      [_l]: s.NEAREST_MIPMAP_NEAREST,
      [ss]: s.NEAREST_MIPMAP_LINEAR,
      [It]: s.LINEAR,
      [ar]: s.LINEAR_MIPMAP_NEAREST,
      [Rn]: s.LINEAR_MIPMAP_LINEAR,
    },
    Ae = {
      [eu]: s.NEVER,
      [au]: s.ALWAYS,
      [tu]: s.LESS,
      [wl]: s.LEQUAL,
      [nu]: s.EQUAL,
      [ru]: s.GEQUAL,
      [iu]: s.GREATER,
      [su]: s.NOTEQUAL,
    };
  function Ve(P, v) {
    if (
      (v.type === nn &&
        e.has("OES_texture_float_linear") === !1 &&
        (v.magFilter === It ||
          v.magFilter === ar ||
          v.magFilter === ss ||
          v.magFilter === Rn ||
          v.minFilter === It ||
          v.minFilter === ar ||
          v.minFilter === ss ||
          v.minFilter === Rn) &&
        Ue(
          "WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      s.texParameteri(P, s.TEXTURE_WRAP_S, de[v.wrapS]),
      s.texParameteri(P, s.TEXTURE_WRAP_T, de[v.wrapT]),
      (P === s.TEXTURE_3D || P === s.TEXTURE_2D_ARRAY) &&
        s.texParameteri(P, s.TEXTURE_WRAP_R, de[v.wrapR]),
      s.texParameteri(P, s.TEXTURE_MAG_FILTER, pe[v.magFilter]),
      s.texParameteri(P, s.TEXTURE_MIN_FILTER, pe[v.minFilter]),
      v.compareFunction &&
        (s.texParameteri(P, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE),
        s.texParameteri(P, s.TEXTURE_COMPARE_FUNC, Ae[v.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        v.magFilter === Dt ||
        (v.minFilter !== ss && v.minFilter !== Rn) ||
        (v.type === nn && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const G = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(
          P,
          G.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(v.anisotropy, i.getMaxAnisotropy())
        ),
          (n.get(v).__currentAnisotropy = v.anisotropy);
      }
    }
  }
  function Ke(P, v) {
    let G = !1;
    P.__webglInit === void 0 &&
      ((P.__webglInit = !0), v.addEventListener("dispose", w));
    const ie = v.source;
    let fe = f.get(ie);
    fe === void 0 && ((fe = {}), f.set(ie, fe));
    const te = Z(v);
    if (te !== P.__cacheKey) {
      fe[te] === void 0 &&
        ((fe[te] = { texture: s.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (G = !0)),
        fe[te].usedTimes++;
      const Le = fe[P.__cacheKey];
      Le !== void 0 &&
        (fe[P.__cacheKey].usedTimes--, Le.usedTimes === 0 && E(v)),
        (P.__cacheKey = te),
        (P.__webglTexture = fe[te].texture);
    }
    return G;
  }
  function Y(P, v, G) {
    return Math.floor(Math.floor(P / G) / v);
  }
  function O(P, v, G, ie) {
    const te = P.updateRanges;
    if (te.length === 0)
      t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, v.width, v.height, G, ie, v.data);
    else {
      te.sort((me, _e) => me.start - _e.start);
      let Le = 0;
      for (let me = 1; me < te.length; me++) {
        const _e = te[Le],
          ze = te[me],
          Be = _e.start + _e.count,
          Re = Y(ze.start, v.width, 4),
          Xe = Y(_e.start, v.width, 4);
        ze.start <= Be + 1 &&
        Re === Xe &&
        Y(ze.start + ze.count - 1, v.width, 4) === Re
          ? (_e.count = Math.max(_e.count, ze.start + ze.count - _e.start))
          : (++Le, (te[Le] = ze));
      }
      te.length = Le + 1;
      const ye = s.getParameter(s.UNPACK_ROW_LENGTH),
        Ne = s.getParameter(s.UNPACK_SKIP_PIXELS),
        Pe = s.getParameter(s.UNPACK_SKIP_ROWS);
      s.pixelStorei(s.UNPACK_ROW_LENGTH, v.width);
      for (let me = 0, _e = te.length; me < _e; me++) {
        const ze = te[me],
          Be = Math.floor(ze.start / 4),
          Re = Math.ceil(ze.count / 4),
          Xe = Be % v.width,
          B = Math.floor(Be / v.width),
          Ee = Re,
          Me = 1;
        s.pixelStorei(s.UNPACK_SKIP_PIXELS, Xe),
          s.pixelStorei(s.UNPACK_SKIP_ROWS, B),
          t.texSubImage2D(s.TEXTURE_2D, 0, Xe, B, Ee, Me, G, ie, v.data);
      }
      P.clearUpdateRanges(),
        s.pixelStorei(s.UNPACK_ROW_LENGTH, ye),
        s.pixelStorei(s.UNPACK_SKIP_PIXELS, Ne),
        s.pixelStorei(s.UNPACK_SKIP_ROWS, Pe);
    }
  }
  function T(P, v, G) {
    let ie = s.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) &&
      (ie = s.TEXTURE_2D_ARRAY),
      v.isData3DTexture && (ie = s.TEXTURE_3D);
    const fe = Ke(P, v),
      te = v.source;
    t.bindTexture(ie, P.__webglTexture, s.TEXTURE0 + G);
    const Le = n.get(te);
    if (te.version !== Le.__version || fe === !0) {
      t.activeTexture(s.TEXTURE0 + G);
      const ye = et.getPrimaries(et.workingColorSpace),
        Ne = v.colorSpace === Vn ? null : et.getPrimaries(v.colorSpace),
        Pe =
          v.colorSpace === Vn || ye === Ne ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, v.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, v.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Pe);
      let me = g(v.image, !1, i.maxTextureSize);
      me = ce(v, me);
      const _e = r.convert(v.format, v.colorSpace),
        ze = r.convert(v.type);
      let Be = _(v.internalFormat, _e, ze, v.colorSpace, v.isVideoTexture);
      Ve(ie, v);
      let Re;
      const Xe = v.mipmaps,
        B = v.isVideoTexture !== !0,
        Ee = Le.__version === void 0 || fe === !0,
        Me = te.dataReady,
        Se = L(v, me);
      if (v.isDepthTexture)
        (Be = S(v.format === xs, v.type)),
          Ee &&
            (B
              ? t.texStorage2D(s.TEXTURE_2D, 1, Be, me.width, me.height)
              : t.texImage2D(
                  s.TEXTURE_2D,
                  0,
                  Be,
                  me.width,
                  me.height,
                  0,
                  _e,
                  ze,
                  null
                ));
      else if (v.isDataTexture)
        if (Xe.length > 0) {
          B &&
            Ee &&
            t.texStorage2D(s.TEXTURE_2D, Se, Be, Xe[0].width, Xe[0].height);
          for (let xe = 0, ue = Xe.length; xe < ue; xe++)
            (Re = Xe[xe]),
              B
                ? Me &&
                  t.texSubImage2D(
                    s.TEXTURE_2D,
                    xe,
                    0,
                    0,
                    Re.width,
                    Re.height,
                    _e,
                    ze,
                    Re.data
                  )
                : t.texImage2D(
                    s.TEXTURE_2D,
                    xe,
                    Be,
                    Re.width,
                    Re.height,
                    0,
                    _e,
                    ze,
                    Re.data
                  );
          v.generateMipmaps = !1;
        } else
          B
            ? (Ee && t.texStorage2D(s.TEXTURE_2D, Se, Be, me.width, me.height),
              Me && O(v, me, _e, ze))
            : t.texImage2D(
                s.TEXTURE_2D,
                0,
                Be,
                me.width,
                me.height,
                0,
                _e,
                ze,
                me.data
              );
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          B &&
            Ee &&
            t.texStorage3D(
              s.TEXTURE_2D_ARRAY,
              Se,
              Be,
              Xe[0].width,
              Xe[0].height,
              me.depth
            );
          for (let xe = 0, ue = Xe.length; xe < ue; xe++)
            if (((Re = Xe[xe]), v.format !== jt))
              if (_e !== null)
                if (B) {
                  if (Me)
                    if (v.layerUpdates.size > 0) {
                      const Ie = Bc(Re.width, Re.height, v.format, v.type);
                      for (const qe of v.layerUpdates) {
                        const ht = Re.data.subarray(
                          (qe * Ie) / Re.data.BYTES_PER_ELEMENT,
                          ((qe + 1) * Ie) / Re.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(
                          s.TEXTURE_2D_ARRAY,
                          xe,
                          0,
                          0,
                          qe,
                          Re.width,
                          Re.height,
                          1,
                          _e,
                          ht
                        );
                      }
                      v.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        s.TEXTURE_2D_ARRAY,
                        xe,
                        0,
                        0,
                        0,
                        Re.width,
                        Re.height,
                        me.depth,
                        _e,
                        Re.data
                      );
                } else
                  t.compressedTexImage3D(
                    s.TEXTURE_2D_ARRAY,
                    xe,
                    Be,
                    Re.width,
                    Re.height,
                    me.depth,
                    0,
                    Re.data,
                    0,
                    0
                  );
              else
                Ue(
                  "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                );
            else
              B
                ? Me &&
                  t.texSubImage3D(
                    s.TEXTURE_2D_ARRAY,
                    xe,
                    0,
                    0,
                    0,
                    Re.width,
                    Re.height,
                    me.depth,
                    _e,
                    ze,
                    Re.data
                  )
                : t.texImage3D(
                    s.TEXTURE_2D_ARRAY,
                    xe,
                    Be,
                    Re.width,
                    Re.height,
                    me.depth,
                    0,
                    _e,
                    ze,
                    Re.data
                  );
        } else {
          B &&
            Ee &&
            t.texStorage2D(s.TEXTURE_2D, Se, Be, Xe[0].width, Xe[0].height);
          for (let xe = 0, ue = Xe.length; xe < ue; xe++)
            (Re = Xe[xe]),
              v.format !== jt
                ? _e !== null
                  ? B
                    ? Me &&
                      t.compressedTexSubImage2D(
                        s.TEXTURE_2D,
                        xe,
                        0,
                        0,
                        Re.width,
                        Re.height,
                        _e,
                        Re.data
                      )
                    : t.compressedTexImage2D(
                        s.TEXTURE_2D,
                        xe,
                        Be,
                        Re.width,
                        Re.height,
                        0,
                        Re.data
                      )
                  : Ue(
                      "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : B
                ? Me &&
                  t.texSubImage2D(
                    s.TEXTURE_2D,
                    xe,
                    0,
                    0,
                    Re.width,
                    Re.height,
                    _e,
                    ze,
                    Re.data
                  )
                : t.texImage2D(
                    s.TEXTURE_2D,
                    xe,
                    Be,
                    Re.width,
                    Re.height,
                    0,
                    _e,
                    ze,
                    Re.data
                  );
        }
      else if (v.isDataArrayTexture)
        if (B) {
          if (
            (Ee &&
              t.texStorage3D(
                s.TEXTURE_2D_ARRAY,
                Se,
                Be,
                me.width,
                me.height,
                me.depth
              ),
            Me)
          )
            if (v.layerUpdates.size > 0) {
              const xe = Bc(me.width, me.height, v.format, v.type);
              for (const ue of v.layerUpdates) {
                const Ie = me.data.subarray(
                  (ue * xe) / me.data.BYTES_PER_ELEMENT,
                  ((ue + 1) * xe) / me.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(
                  s.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  ue,
                  me.width,
                  me.height,
                  1,
                  _e,
                  ze,
                  Ie
                );
              }
              v.clearLayerUpdates();
            } else
              t.texSubImage3D(
                s.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                me.width,
                me.height,
                me.depth,
                _e,
                ze,
                me.data
              );
        } else
          t.texImage3D(
            s.TEXTURE_2D_ARRAY,
            0,
            Be,
            me.width,
            me.height,
            me.depth,
            0,
            _e,
            ze,
            me.data
          );
      else if (v.isData3DTexture)
        B
          ? (Ee &&
              t.texStorage3D(
                s.TEXTURE_3D,
                Se,
                Be,
                me.width,
                me.height,
                me.depth
              ),
            Me &&
              t.texSubImage3D(
                s.TEXTURE_3D,
                0,
                0,
                0,
                0,
                me.width,
                me.height,
                me.depth,
                _e,
                ze,
                me.data
              ))
          : t.texImage3D(
              s.TEXTURE_3D,
              0,
              Be,
              me.width,
              me.height,
              me.depth,
              0,
              _e,
              ze,
              me.data
            );
      else if (v.isFramebufferTexture) {
        if (Ee)
          if (B) t.texStorage2D(s.TEXTURE_2D, Se, Be, me.width, me.height);
          else {
            let xe = me.width,
              ue = me.height;
            for (let Ie = 0; Ie < Se; Ie++)
              t.texImage2D(s.TEXTURE_2D, Ie, Be, xe, ue, 0, _e, ze, null),
                (xe >>= 1),
                (ue >>= 1);
          }
      } else if (Xe.length > 0) {
        if (B && Ee) {
          const xe = be(Xe[0]);
          t.texStorage2D(s.TEXTURE_2D, Se, Be, xe.width, xe.height);
        }
        for (let xe = 0, ue = Xe.length; xe < ue; xe++)
          (Re = Xe[xe]),
            B
              ? Me && t.texSubImage2D(s.TEXTURE_2D, xe, 0, 0, _e, ze, Re)
              : t.texImage2D(s.TEXTURE_2D, xe, Be, _e, ze, Re);
        v.generateMipmaps = !1;
      } else if (B) {
        if (Ee) {
          const xe = be(me);
          t.texStorage2D(s.TEXTURE_2D, Se, Be, xe.width, xe.height);
        }
        Me && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, _e, ze, me);
      } else t.texImage2D(s.TEXTURE_2D, 0, Be, _e, ze, me);
      m(v) && p(ie), (Le.__version = te.version), v.onUpdate && v.onUpdate(v);
    }
    P.__version = v.version;
  }
  function b(P, v, G) {
    if (v.image.length !== 6) return;
    const ie = Ke(P, v),
      fe = v.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, P.__webglTexture, s.TEXTURE0 + G);
    const te = n.get(fe);
    if (fe.version !== te.__version || ie === !0) {
      t.activeTexture(s.TEXTURE0 + G);
      const Le = et.getPrimaries(et.workingColorSpace),
        ye = v.colorSpace === Vn ? null : et.getPrimaries(v.colorSpace),
        Ne =
          v.colorSpace === Vn || Le === ye ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, v.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, v.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ne);
      const Pe = v.isCompressedTexture || v.image[0].isCompressedTexture,
        me = v.image[0] && v.image[0].isDataTexture,
        _e = [];
      for (let ue = 0; ue < 6; ue++)
        !Pe && !me
          ? (_e[ue] = g(v.image[ue], !0, i.maxCubemapSize))
          : (_e[ue] = me ? v.image[ue].image : v.image[ue]),
          (_e[ue] = ce(v, _e[ue]));
      const ze = _e[0],
        Be = r.convert(v.format, v.colorSpace),
        Re = r.convert(v.type),
        Xe = _(v.internalFormat, Be, Re, v.colorSpace),
        B = v.isVideoTexture !== !0,
        Ee = te.__version === void 0 || ie === !0,
        Me = fe.dataReady;
      let Se = L(v, ze);
      Ve(s.TEXTURE_CUBE_MAP, v);
      let xe;
      if (Pe) {
        B &&
          Ee &&
          t.texStorage2D(s.TEXTURE_CUBE_MAP, Se, Xe, ze.width, ze.height);
        for (let ue = 0; ue < 6; ue++) {
          xe = _e[ue].mipmaps;
          for (let Ie = 0; Ie < xe.length; Ie++) {
            const qe = xe[Ie];
            v.format !== jt
              ? Be !== null
                ? B
                  ? Me &&
                    t.compressedTexSubImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                      Ie,
                      0,
                      0,
                      qe.width,
                      qe.height,
                      Be,
                      qe.data
                    )
                  : t.compressedTexImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                      Ie,
                      Xe,
                      qe.width,
                      qe.height,
                      0,
                      qe.data
                    )
                : Ue(
                    "WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : B
              ? Me &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                  Ie,
                  0,
                  0,
                  qe.width,
                  qe.height,
                  Be,
                  Re,
                  qe.data
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                  Ie,
                  Xe,
                  qe.width,
                  qe.height,
                  0,
                  Be,
                  Re,
                  qe.data
                );
          }
        }
      } else {
        if (((xe = v.mipmaps), B && Ee)) {
          xe.length > 0 && Se++;
          const ue = be(_e[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, Se, Xe, ue.width, ue.height);
        }
        for (let ue = 0; ue < 6; ue++)
          if (me) {
            B
              ? Me &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                  0,
                  0,
                  0,
                  _e[ue].width,
                  _e[ue].height,
                  Be,
                  Re,
                  _e[ue].data
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                  0,
                  Xe,
                  _e[ue].width,
                  _e[ue].height,
                  0,
                  Be,
                  Re,
                  _e[ue].data
                );
            for (let Ie = 0; Ie < xe.length; Ie++) {
              const ht = xe[Ie].image[ue].image;
              B
                ? Me &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                    Ie + 1,
                    0,
                    0,
                    ht.width,
                    ht.height,
                    Be,
                    Re,
                    ht.data
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                    Ie + 1,
                    Xe,
                    ht.width,
                    ht.height,
                    0,
                    Be,
                    Re,
                    ht.data
                  );
            }
          } else {
            B
              ? Me &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                  0,
                  0,
                  0,
                  Be,
                  Re,
                  _e[ue]
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                  0,
                  Xe,
                  Be,
                  Re,
                  _e[ue]
                );
            for (let Ie = 0; Ie < xe.length; Ie++) {
              const qe = xe[Ie];
              B
                ? Me &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                    Ie + 1,
                    0,
                    0,
                    Be,
                    Re,
                    qe.image[ue]
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
                    Ie + 1,
                    Xe,
                    Be,
                    Re,
                    qe.image[ue]
                  );
            }
          }
      }
      m(v) && p(s.TEXTURE_CUBE_MAP),
        (te.__version = fe.version),
        v.onUpdate && v.onUpdate(v);
    }
    P.__version = v.version;
  }
  function q(P, v, G, ie, fe, te) {
    const Le = r.convert(G.format, G.colorSpace),
      ye = r.convert(G.type),
      Ne = _(G.internalFormat, Le, ye, G.colorSpace),
      Pe = n.get(v),
      me = n.get(G);
    if (((me.__renderTarget = v), !Pe.__hasExternalTextures)) {
      const _e = Math.max(1, v.width >> te),
        ze = Math.max(1, v.height >> te);
      fe === s.TEXTURE_3D || fe === s.TEXTURE_2D_ARRAY
        ? t.texImage3D(fe, te, Ne, _e, ze, v.depth, 0, Le, ye, null)
        : t.texImage2D(fe, te, Ne, _e, ze, 0, Le, ye, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, P),
      C(v)
        ? o.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            ie,
            fe,
            me.__webglTexture,
            0,
            D(v)
          )
        : (fe === s.TEXTURE_2D ||
            (fe >= s.TEXTURE_CUBE_MAP_POSITIVE_X &&
              fe <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          s.framebufferTexture2D(s.FRAMEBUFFER, ie, fe, me.__webglTexture, te),
      t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function re(P, v, G) {
    if ((s.bindRenderbuffer(s.RENDERBUFFER, P), v.depthBuffer)) {
      const ie = v.depthTexture,
        fe = ie && ie.isDepthTexture ? ie.type : null,
        te = S(v.stencilBuffer, fe),
        Le = v.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT,
        ye = D(v);
      C(v)
        ? o.renderbufferStorageMultisampleEXT(
            s.RENDERBUFFER,
            ye,
            te,
            v.width,
            v.height
          )
        : G
        ? s.renderbufferStorageMultisample(
            s.RENDERBUFFER,
            ye,
            te,
            v.width,
            v.height
          )
        : s.renderbufferStorage(s.RENDERBUFFER, te, v.width, v.height),
        s.framebufferRenderbuffer(s.FRAMEBUFFER, Le, s.RENDERBUFFER, P);
    } else {
      const ie = v.textures;
      for (let fe = 0; fe < ie.length; fe++) {
        const te = ie[fe],
          Le = r.convert(te.format, te.colorSpace),
          ye = r.convert(te.type),
          Ne = _(te.internalFormat, Le, ye, te.colorSpace),
          Pe = D(v);
        G && C(v) === !1
          ? s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              Pe,
              Ne,
              v.width,
              v.height
            )
          : C(v)
          ? o.renderbufferStorageMultisampleEXT(
              s.RENDERBUFFER,
              Pe,
              Ne,
              v.width,
              v.height
            )
          : s.renderbufferStorage(s.RENDERBUFFER, Ne, v.width, v.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function H(P, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(s.FRAMEBUFFER, P),
      !(v.depthTexture && v.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    const ie = n.get(v.depthTexture);
    (ie.__renderTarget = v),
      (!ie.__webglTexture ||
        v.depthTexture.image.width !== v.width ||
        v.depthTexture.image.height !== v.height) &&
        ((v.depthTexture.image.width = v.width),
        (v.depthTexture.image.height = v.height),
        (v.depthTexture.needsUpdate = !0)),
      ne(v.depthTexture, 0);
    const fe = ie.__webglTexture,
      te = D(v);
    if (v.depthTexture.format === ms)
      C(v)
        ? o.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            fe,
            0,
            te
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            fe,
            0
          );
    else if (v.depthTexture.format === xs)
      C(v)
        ? o.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            fe,
            0,
            te
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            fe,
            0
          );
    else throw new Error("Unknown depthTexture format");
  }
  function le(P) {
    const v = n.get(P),
      G = P.isWebGLCubeRenderTarget === !0;
    if (v.__boundDepthTexture !== P.depthTexture) {
      const ie = P.depthTexture;
      if ((v.__depthDisposeCallback && v.__depthDisposeCallback(), ie)) {
        const fe = () => {
          delete v.__boundDepthTexture,
            delete v.__depthDisposeCallback,
            ie.removeEventListener("dispose", fe);
        };
        ie.addEventListener("dispose", fe), (v.__depthDisposeCallback = fe);
      }
      v.__boundDepthTexture = ie;
    }
    if (P.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (G)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      const ie = P.texture.mipmaps;
      ie && ie.length > 0
        ? H(v.__webglFramebuffer[0], P)
        : H(v.__webglFramebuffer, P);
    } else if (G) {
      v.__webglDepthbuffer = [];
      for (let ie = 0; ie < 6; ie++)
        if (
          (t.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer[ie]),
          v.__webglDepthbuffer[ie] === void 0)
        )
          (v.__webglDepthbuffer[ie] = s.createRenderbuffer()),
            re(v.__webglDepthbuffer[ie], P, !1);
        else {
          const fe = P.stencilBuffer
              ? s.DEPTH_STENCIL_ATTACHMENT
              : s.DEPTH_ATTACHMENT,
            te = v.__webglDepthbuffer[ie];
          s.bindRenderbuffer(s.RENDERBUFFER, te),
            s.framebufferRenderbuffer(s.FRAMEBUFFER, fe, s.RENDERBUFFER, te);
        }
    } else {
      const ie = P.texture.mipmaps;
      if (
        (ie && ie.length > 0
          ? t.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer[0])
          : t.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer),
        v.__webglDepthbuffer === void 0)
      )
        (v.__webglDepthbuffer = s.createRenderbuffer()),
          re(v.__webglDepthbuffer, P, !1);
      else {
        const fe = P.stencilBuffer
            ? s.DEPTH_STENCIL_ATTACHMENT
            : s.DEPTH_ATTACHMENT,
          te = v.__webglDepthbuffer;
        s.bindRenderbuffer(s.RENDERBUFFER, te),
          s.framebufferRenderbuffer(s.FRAMEBUFFER, fe, s.RENDERBUFFER, te);
      }
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function ge(P, v, G) {
    const ie = n.get(P);
    v !== void 0 &&
      q(
        ie.__webglFramebuffer,
        P,
        P.texture,
        s.COLOR_ATTACHMENT0,
        s.TEXTURE_2D,
        0
      ),
      G !== void 0 && le(P);
  }
  function he(P) {
    const v = P.texture,
      G = n.get(P),
      ie = n.get(v);
    P.addEventListener("dispose", I);
    const fe = P.textures,
      te = P.isWebGLCubeRenderTarget === !0,
      Le = fe.length > 1;
    if (
      (Le ||
        (ie.__webglTexture === void 0 &&
          (ie.__webglTexture = s.createTexture()),
        (ie.__version = v.version),
        a.memory.textures++),
      te)
    ) {
      G.__webglFramebuffer = [];
      for (let ye = 0; ye < 6; ye++)
        if (v.mipmaps && v.mipmaps.length > 0) {
          G.__webglFramebuffer[ye] = [];
          for (let Ne = 0; Ne < v.mipmaps.length; Ne++)
            G.__webglFramebuffer[ye][Ne] = s.createFramebuffer();
        } else G.__webglFramebuffer[ye] = s.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        G.__webglFramebuffer = [];
        for (let ye = 0; ye < v.mipmaps.length; ye++)
          G.__webglFramebuffer[ye] = s.createFramebuffer();
      } else G.__webglFramebuffer = s.createFramebuffer();
      if (Le)
        for (let ye = 0, Ne = fe.length; ye < Ne; ye++) {
          const Pe = n.get(fe[ye]);
          Pe.__webglTexture === void 0 &&
            ((Pe.__webglTexture = s.createTexture()), a.memory.textures++);
        }
      if (P.samples > 0 && C(P) === !1) {
        (G.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (G.__webglColorRenderbuffer = []),
          t.bindFramebuffer(s.FRAMEBUFFER, G.__webglMultisampledFramebuffer);
        for (let ye = 0; ye < fe.length; ye++) {
          const Ne = fe[ye];
          (G.__webglColorRenderbuffer[ye] = s.createRenderbuffer()),
            s.bindRenderbuffer(s.RENDERBUFFER, G.__webglColorRenderbuffer[ye]);
          const Pe = r.convert(Ne.format, Ne.colorSpace),
            me = r.convert(Ne.type),
            _e = _(
              Ne.internalFormat,
              Pe,
              me,
              Ne.colorSpace,
              P.isXRRenderTarget === !0
            ),
            ze = D(P);
          s.renderbufferStorageMultisample(
            s.RENDERBUFFER,
            ze,
            _e,
            P.width,
            P.height
          ),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + ye,
              s.RENDERBUFFER,
              G.__webglColorRenderbuffer[ye]
            );
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null),
          P.depthBuffer &&
            ((G.__webglDepthRenderbuffer = s.createRenderbuffer()),
            re(G.__webglDepthRenderbuffer, P, !0)),
          t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (te) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, ie.__webglTexture),
        Ve(s.TEXTURE_CUBE_MAP, v);
      for (let ye = 0; ye < 6; ye++)
        if (v.mipmaps && v.mipmaps.length > 0)
          for (let Ne = 0; Ne < v.mipmaps.length; Ne++)
            q(
              G.__webglFramebuffer[ye][Ne],
              P,
              v,
              s.COLOR_ATTACHMENT0,
              s.TEXTURE_CUBE_MAP_POSITIVE_X + ye,
              Ne
            );
        else
          q(
            G.__webglFramebuffer[ye],
            P,
            v,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_CUBE_MAP_POSITIVE_X + ye,
            0
          );
      m(v) && p(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Le) {
      for (let ye = 0, Ne = fe.length; ye < Ne; ye++) {
        const Pe = fe[ye],
          me = n.get(Pe);
        let _e = s.TEXTURE_2D;
        (P.isWebGL3DRenderTarget || P.isWebGLArrayRenderTarget) &&
          (_e = P.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY),
          t.bindTexture(_e, me.__webglTexture),
          Ve(_e, Pe),
          q(G.__webglFramebuffer, P, Pe, s.COLOR_ATTACHMENT0 + ye, _e, 0),
          m(Pe) && p(_e);
      }
      t.unbindTexture();
    } else {
      let ye = s.TEXTURE_2D;
      if (
        ((P.isWebGL3DRenderTarget || P.isWebGLArrayRenderTarget) &&
          (ye = P.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY),
        t.bindTexture(ye, ie.__webglTexture),
        Ve(ye, v),
        v.mipmaps && v.mipmaps.length > 0)
      )
        for (let Ne = 0; Ne < v.mipmaps.length; Ne++)
          q(G.__webglFramebuffer[Ne], P, v, s.COLOR_ATTACHMENT0, ye, Ne);
      else q(G.__webglFramebuffer, P, v, s.COLOR_ATTACHMENT0, ye, 0);
      m(v) && p(ye), t.unbindTexture();
    }
    P.depthBuffer && le(P);
  }
  function z(P) {
    const v = P.textures;
    for (let G = 0, ie = v.length; G < ie; G++) {
      const fe = v[G];
      if (m(fe)) {
        const te = R(P),
          Le = n.get(fe).__webglTexture;
        t.bindTexture(te, Le), p(te), t.unbindTexture();
      }
    }
  }
  const y = [],
    j = [];
  function J(P) {
    if (P.samples > 0) {
      if (C(P) === !1) {
        const v = P.textures,
          G = P.width,
          ie = P.height;
        let fe = s.COLOR_BUFFER_BIT;
        const te = P.stencilBuffer
            ? s.DEPTH_STENCIL_ATTACHMENT
            : s.DEPTH_ATTACHMENT,
          Le = n.get(P),
          ye = v.length > 1;
        if (ye)
          for (let Pe = 0; Pe < v.length; Pe++)
            t.bindFramebuffer(s.FRAMEBUFFER, Le.__webglMultisampledFramebuffer),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + Pe,
                s.RENDERBUFFER,
                null
              ),
              t.bindFramebuffer(s.FRAMEBUFFER, Le.__webglFramebuffer),
              s.framebufferTexture2D(
                s.DRAW_FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + Pe,
                s.TEXTURE_2D,
                null,
                0
              );
        t.bindFramebuffer(
          s.READ_FRAMEBUFFER,
          Le.__webglMultisampledFramebuffer
        );
        const Ne = P.texture.mipmaps;
        Ne && Ne.length > 0
          ? t.bindFramebuffer(s.DRAW_FRAMEBUFFER, Le.__webglFramebuffer[0])
          : t.bindFramebuffer(s.DRAW_FRAMEBUFFER, Le.__webglFramebuffer);
        for (let Pe = 0; Pe < v.length; Pe++) {
          if (
            (P.resolveDepthBuffer &&
              (P.depthBuffer && (fe |= s.DEPTH_BUFFER_BIT),
              P.stencilBuffer &&
                P.resolveStencilBuffer &&
                (fe |= s.STENCIL_BUFFER_BIT)),
            ye)
          ) {
            s.framebufferRenderbuffer(
              s.READ_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0,
              s.RENDERBUFFER,
              Le.__webglColorRenderbuffer[Pe]
            );
            const me = n.get(v[Pe]).__webglTexture;
            s.framebufferTexture2D(
              s.DRAW_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0,
              s.TEXTURE_2D,
              me,
              0
            );
          }
          s.blitFramebuffer(0, 0, G, ie, 0, 0, G, ie, fe, s.NEAREST),
            c === !0 &&
              ((y.length = 0),
              (j.length = 0),
              y.push(s.COLOR_ATTACHMENT0 + Pe),
              P.depthBuffer &&
                P.resolveDepthBuffer === !1 &&
                (y.push(te),
                j.push(te),
                s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, j)),
              s.invalidateFramebuffer(s.READ_FRAMEBUFFER, y));
        }
        if (
          (t.bindFramebuffer(s.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
          ye)
        )
          for (let Pe = 0; Pe < v.length; Pe++) {
            t.bindFramebuffer(s.FRAMEBUFFER, Le.__webglMultisampledFramebuffer),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + Pe,
                s.RENDERBUFFER,
                Le.__webglColorRenderbuffer[Pe]
              );
            const me = n.get(v[Pe]).__webglTexture;
            t.bindFramebuffer(s.FRAMEBUFFER, Le.__webglFramebuffer),
              s.framebufferTexture2D(
                s.DRAW_FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + Pe,
                s.TEXTURE_2D,
                me,
                0
              );
          }
        t.bindFramebuffer(
          s.DRAW_FRAMEBUFFER,
          Le.__webglMultisampledFramebuffer
        );
      } else if (P.depthBuffer && P.resolveDepthBuffer === !1 && c) {
        const v = P.stencilBuffer
          ? s.DEPTH_STENCIL_ATTACHMENT
          : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function D(P) {
    return Math.min(i.maxSamples, P.samples);
  }
  function C(P) {
    const v = n.get(P);
    return (
      P.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      v.__useRenderToTexture !== !1
    );
  }
  function ae(P) {
    const v = a.render.frame;
    h.get(P) !== v && (h.set(P, v), P.update());
  }
  function ce(P, v) {
    const G = P.colorSpace,
      ie = P.format,
      fe = P.type;
    return (
      P.isCompressedTexture === !0 ||
        P.isVideoTexture === !0 ||
        (G !== wt &&
          G !== Vn &&
          (et.getTransfer(G) === ot
            ? (ie !== jt || fe !== fn) &&
              Ue(
                "WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : Je("WebGLTextures: Unsupported texture color space:", G))),
      v
    );
  }
  function be(P) {
    return (
      typeof HTMLImageElement < "u" && P instanceof HTMLImageElement
        ? ((l.width = P.naturalWidth || P.width),
          (l.height = P.naturalHeight || P.height))
        : typeof VideoFrame < "u" && P instanceof VideoFrame
        ? ((l.width = P.displayWidth), (l.height = P.displayHeight))
        : ((l.width = P.width), (l.height = P.height)),
      l
    );
  }
  (this.allocateTextureUnit = K),
    (this.resetTextureUnits = V),
    (this.setTexture2D = ne),
    (this.setTexture2DArray = $),
    (this.setTexture3D = se),
    (this.setTextureCube = k),
    (this.rebindTextures = ge),
    (this.setupRenderTarget = he),
    (this.updateRenderTargetMipmap = z),
    (this.updateMultisampleRenderTarget = J),
    (this.setupDepthRenderbuffer = le),
    (this.setupFrameBufferTexture = q),
    (this.useMultisampledRTT = C);
}
function Zx(s, e) {
  function t(n, i = Vn) {
    let r;
    const a = et.getTransfer(i);
    if (n === fn) return s.UNSIGNED_BYTE;
    if (n === lo) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === ho) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === bl) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Ml) return s.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === vl) return s.BYTE;
    if (n === yl) return s.SHORT;
    if (n === ds) return s.UNSIGNED_SHORT;
    if (n === co) return s.INT;
    if (n === oi) return s.UNSIGNED_INT;
    if (n === nn) return s.FLOAT;
    if (n === li) return s.HALF_FLOAT;
    if (n === Sl) return s.ALPHA;
    if (n === Tl) return s.RGB;
    if (n === jt) return s.RGBA;
    if (n === ms) return s.DEPTH_COMPONENT;
    if (n === xs) return s.DEPTH_STENCIL;
    if (n === uo) return s.RED;
    if (n === fo) return s.RED_INTEGER;
    if (n === po) return s.RG;
    if (n === mo) return s.RG_INTEGER;
    if (n === xo) return s.RGBA_INTEGER;
    if (n === or || n === cr || n === lr || n === hr)
      if (a === ot)
        if (((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), r !== null)) {
          if (n === or) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === cr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === lr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === hr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((r = e.get("WEBGL_compressed_texture_s3tc")), r !== null)) {
        if (n === or) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === cr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === lr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === hr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === Ta || n === Ea || n === Aa || n === wa)
      if (((r = e.get("WEBGL_compressed_texture_pvrtc")), r !== null)) {
        if (n === Ta) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ea) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Aa) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === wa) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === Ra || n === Ca || n === Pa)
      if (((r = e.get("WEBGL_compressed_texture_etc")), r !== null)) {
        if (n === Ra || n === Ca)
          return a === ot ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Pa)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === La ||
      n === Ia ||
      n === Da ||
      n === Na ||
      n === Ua ||
      n === Fa ||
      n === Oa ||
      n === Ba ||
      n === ka ||
      n === za ||
      n === Va ||
      n === Ha ||
      n === Ga ||
      n === Wa
    )
      if (((r = e.get("WEBGL_compressed_texture_astc")), r !== null)) {
        if (n === La)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ia)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Da)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Na)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Ua)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Fa)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Oa)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Ba)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === ka)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === za)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Va)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Ha)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Ga)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Wa)
          return a === ot
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === Xa || n === qa || n === Ya)
      if (((r = e.get("EXT_texture_compression_bptc")), r !== null)) {
        if (n === Xa)
          return a === ot
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === qa) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Ya) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === ja || n === Ka || n === Za || n === Ja)
      if (((r = e.get("EXT_texture_compression_rgtc")), r !== null)) {
        if (n === ja) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ka) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Za) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Ja) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === ps ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: t };
}
const Jx = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  $x = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Qx {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new Wl(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) &&
        ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = n);
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new mn({
          vertexShader: Jx,
          fragmentShader: $x,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new Wt(new yr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class eg extends hi {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      a = null,
      o = "local-floor",
      c = 1,
      l = null,
      h = null,
      u = null,
      f = null,
      d = null,
      x = null;
    const g = typeof XRWebGLBinding < "u",
      m = new Qx(),
      p = {},
      R = t.getContextAttributes();
    let _ = null,
      S = null;
    const L = [],
      w = [],
      I = new oe();
    let N = null;
    const E = new Lt();
    E.viewport = new tt();
    const M = new Lt();
    M.viewport = new tt();
    const U = [E, M],
      V = new cd();
    let K = null,
      Z = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (T) {
        let b = L[T];
        return (
          b === void 0 && ((b = new qr()), (L[T] = b)), b.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (T) {
        let b = L[T];
        return b === void 0 && ((b = new qr()), (L[T] = b)), b.getGripSpace();
      }),
      (this.getHand = function (T) {
        let b = L[T];
        return b === void 0 && ((b = new qr()), (L[T] = b)), b.getHandSpace();
      });
    function ne(T) {
      const b = w.indexOf(T.inputSource);
      if (b === -1) return;
      const q = L[b];
      q !== void 0 &&
        (q.update(T.inputSource, T.frame, l || a),
        q.dispatchEvent({ type: T.type, data: T.inputSource }));
    }
    function $() {
      i.removeEventListener("select", ne),
        i.removeEventListener("selectstart", ne),
        i.removeEventListener("selectend", ne),
        i.removeEventListener("squeeze", ne),
        i.removeEventListener("squeezestart", ne),
        i.removeEventListener("squeezeend", ne),
        i.removeEventListener("end", $),
        i.removeEventListener("inputsourceschange", se);
      for (let T = 0; T < L.length; T++) {
        const b = w[T];
        b !== null && ((w[T] = null), L[T].disconnect(b));
      }
      (K = null), (Z = null), m.reset();
      for (const T in p) delete p[T];
      e.setRenderTarget(_),
        (d = null),
        (f = null),
        (u = null),
        (i = null),
        (S = null),
        O.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(N),
        e.setSize(I.width, I.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (T) {
      (r = T),
        n.isPresenting === !0 &&
          Ue("WebXRManager: Cannot change framebuffer scale while presenting.");
    }),
      (this.setReferenceSpaceType = function (T) {
        (o = T),
          n.isPresenting === !0 &&
            Ue(
              "WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (T) {
        l = T;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : d;
      }),
      (this.getBinding = function () {
        return u === null && g && (u = new XRWebGLBinding(i, t)), u;
      }),
      (this.getFrame = function () {
        return x;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (T) {
        if (((i = T), i !== null)) {
          if (
            ((_ = e.getRenderTarget()),
            i.addEventListener("select", ne),
            i.addEventListener("selectstart", ne),
            i.addEventListener("selectend", ne),
            i.addEventListener("squeeze", ne),
            i.addEventListener("squeezestart", ne),
            i.addEventListener("squeezeend", ne),
            i.addEventListener("end", $),
            i.addEventListener("inputsourceschange", se),
            R.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (N = e.getPixelRatio()),
            e.getSize(I),
            g && "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let q = null,
              re = null,
              H = null;
            R.depth &&
              ((H = R.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (q = R.stencil ? xs : ms),
              (re = R.stencil ? ps : oi));
            const le = { colorFormat: t.RGBA8, depthFormat: H, scaleFactor: r };
            (u = this.getBinding()),
              (f = u.createProjectionLayer(le)),
              i.updateRenderState({ layers: [f] }),
              e.setPixelRatio(1),
              e.setSize(f.textureWidth, f.textureHeight, !1),
              (S = new Xn(f.textureWidth, f.textureHeight, {
                format: jt,
                type: fn,
                depthTexture: new Gl(
                  f.textureWidth,
                  f.textureHeight,
                  re,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  q
                ),
                stencilBuffer: R.stencil,
                colorSpace: e.outputColorSpace,
                samples: R.antialias ? 4 : 0,
                resolveDepthBuffer: f.ignoreDepthValues === !1,
                resolveStencilBuffer: f.ignoreDepthValues === !1,
              }));
          } else {
            const q = {
              antialias: R.antialias,
              alpha: !0,
              depth: R.depth,
              stencil: R.stencil,
              framebufferScaleFactor: r,
            };
            (d = new XRWebGLLayer(i, t, q)),
              i.updateRenderState({ baseLayer: d }),
              e.setPixelRatio(1),
              e.setSize(d.framebufferWidth, d.framebufferHeight, !1),
              (S = new Xn(d.framebufferWidth, d.framebufferHeight, {
                format: jt,
                type: fn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: R.stencil,
                resolveDepthBuffer: d.ignoreDepthValues === !1,
                resolveStencilBuffer: d.ignoreDepthValues === !1,
              }));
          }
          (S.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (a = await i.requestReferenceSpace(o)),
            O.setContext(i),
            O.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (i !== null) return i.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return m.getDepthTexture();
      });
    function se(T) {
      for (let b = 0; b < T.removed.length; b++) {
        const q = T.removed[b],
          re = w.indexOf(q);
        re >= 0 && ((w[re] = null), L[re].disconnect(q));
      }
      for (let b = 0; b < T.added.length; b++) {
        const q = T.added[b];
        let re = w.indexOf(q);
        if (re === -1) {
          for (let le = 0; le < L.length; le++)
            if (le >= w.length) {
              w.push(q), (re = le);
              break;
            } else if (w[le] === null) {
              (w[le] = q), (re = le);
              break;
            }
          if (re === -1) break;
        }
        const H = L[re];
        H && H.connect(q);
      }
    }
    const k = new F(),
      de = new F();
    function pe(T, b, q) {
      k.setFromMatrixPosition(b.matrixWorld),
        de.setFromMatrixPosition(q.matrixWorld);
      const re = k.distanceTo(de),
        H = b.projectionMatrix.elements,
        le = q.projectionMatrix.elements,
        ge = H[14] / (H[10] - 1),
        he = H[14] / (H[10] + 1),
        z = (H[9] + 1) / H[5],
        y = (H[9] - 1) / H[5],
        j = (H[8] - 1) / H[0],
        J = (le[8] + 1) / le[0],
        D = ge * j,
        C = ge * J,
        ae = re / (-j + J),
        ce = ae * -j;
      if (
        (b.matrixWorld.decompose(T.position, T.quaternion, T.scale),
        T.translateX(ce),
        T.translateZ(ae),
        T.matrixWorld.compose(T.position, T.quaternion, T.scale),
        T.matrixWorldInverse.copy(T.matrixWorld).invert(),
        H[10] === -1)
      )
        T.projectionMatrix.copy(b.projectionMatrix),
          T.projectionMatrixInverse.copy(b.projectionMatrixInverse);
      else {
        const be = ge + ae,
          P = he + ae,
          v = D - ce,
          G = C + (re - ce),
          ie = ((z * he) / P) * be,
          fe = ((y * he) / P) * be;
        T.projectionMatrix.makePerspective(v, G, ie, fe, be, P),
          T.projectionMatrixInverse.copy(T.projectionMatrix).invert();
      }
    }
    function Ae(T, b) {
      b === null
        ? T.matrixWorld.copy(T.matrix)
        : T.matrixWorld.multiplyMatrices(b.matrixWorld, T.matrix),
        T.matrixWorldInverse.copy(T.matrixWorld).invert();
    }
    this.updateCamera = function (T) {
      if (i === null) return;
      let b = T.near,
        q = T.far;
      m.texture !== null &&
        (m.depthNear > 0 && (b = m.depthNear),
        m.depthFar > 0 && (q = m.depthFar)),
        (V.near = M.near = E.near = b),
        (V.far = M.far = E.far = q),
        (K !== V.near || Z !== V.far) &&
          (i.updateRenderState({ depthNear: V.near, depthFar: V.far }),
          (K = V.near),
          (Z = V.far)),
        (V.layers.mask = T.layers.mask | 6),
        (E.layers.mask = V.layers.mask & 3),
        (M.layers.mask = V.layers.mask & 5);
      const re = T.parent,
        H = V.cameras;
      Ae(V, re);
      for (let le = 0; le < H.length; le++) Ae(H[le], re);
      H.length === 2
        ? pe(V, E, M)
        : V.projectionMatrix.copy(E.projectionMatrix),
        Ve(T, V, re);
    };
    function Ve(T, b, q) {
      q === null
        ? T.matrix.copy(b.matrixWorld)
        : (T.matrix.copy(q.matrixWorld),
          T.matrix.invert(),
          T.matrix.multiply(b.matrixWorld)),
        T.matrix.decompose(T.position, T.quaternion, T.scale),
        T.updateMatrixWorld(!0),
        T.projectionMatrix.copy(b.projectionMatrix),
        T.projectionMatrixInverse.copy(b.projectionMatrixInverse),
        T.isPerspectiveCamera &&
          ((T.fov = Bi * 2 * Math.atan(1 / T.projectionMatrix.elements[5])),
          (T.zoom = 1));
    }
    (this.getCamera = function () {
      return V;
    }),
      (this.getFoveation = function () {
        if (!(f === null && d === null)) return c;
      }),
      (this.setFoveation = function (T) {
        (c = T),
          f !== null && (f.fixedFoveation = T),
          d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = T);
      }),
      (this.hasDepthSensing = function () {
        return m.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return m.getMesh(V);
      }),
      (this.getCameraTexture = function (T) {
        return p[T];
      });
    let Ke = null;
    function Y(T, b) {
      if (((h = b.getViewerPose(l || a)), (x = b), h !== null)) {
        const q = h.views;
        d !== null &&
          (e.setRenderTargetFramebuffer(S, d.framebuffer),
          e.setRenderTarget(S));
        let re = !1;
        q.length !== V.cameras.length && ((V.cameras.length = 0), (re = !0));
        for (let he = 0; he < q.length; he++) {
          const z = q[he];
          let y = null;
          if (d !== null) y = d.getViewport(z);
          else {
            const J = u.getViewSubImage(f, z);
            (y = J.viewport),
              he === 0 &&
                (e.setRenderTargetTextures(
                  S,
                  J.colorTexture,
                  J.depthStencilTexture
                ),
                e.setRenderTarget(S));
          }
          let j = U[he];
          j === void 0 &&
            ((j = new Lt()),
            j.layers.enable(he),
            (j.viewport = new tt()),
            (U[he] = j)),
            j.matrix.fromArray(z.transform.matrix),
            j.matrix.decompose(j.position, j.quaternion, j.scale),
            j.projectionMatrix.fromArray(z.projectionMatrix),
            j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),
            j.viewport.set(y.x, y.y, y.width, y.height),
            he === 0 &&
              (V.matrix.copy(j.matrix),
              V.matrix.decompose(V.position, V.quaternion, V.scale)),
            re === !0 && V.cameras.push(j);
        }
        const H = i.enabledFeatures;
        if (
          H &&
          H.includes("depth-sensing") &&
          i.depthUsage == "gpu-optimized" &&
          g
        ) {
          u = n.getBinding();
          const he = u.getDepthInformation(q[0]);
          he && he.isValid && he.texture && m.init(he, i.renderState);
        }
        if (H && H.includes("camera-access") && g) {
          e.state.unbindTexture(), (u = n.getBinding());
          for (let he = 0; he < q.length; he++) {
            const z = q[he].camera;
            if (z) {
              let y = p[z];
              y || ((y = new Wl()), (p[z] = y));
              const j = u.getCameraImage(z);
              y.sourceTexture = j;
            }
          }
        }
      }
      for (let q = 0; q < L.length; q++) {
        const re = w[q],
          H = L[q];
        re !== null && H !== void 0 && H.update(re, b, l || a);
      }
      Ke && Ke(T, b),
        b.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: b }),
        (x = null);
    }
    const O = new nh();
    O.setAnimationLoop(Y),
      (this.setAnimationLoop = function (T) {
        Ke = T;
      }),
      (this.dispose = function () {});
  }
}
const ti = new pn(),
  tg = new Ye();
function ng(s, e) {
  function t(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, Ul(s)),
      p.isFog
        ? ((m.fogNear.value = p.near), (m.fogFar.value = p.far))
        : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function i(m, p, R, _, S) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial
      ? r(m, p)
      : p.isMeshToonMaterial
      ? (r(m, p), u(m, p))
      : p.isMeshPhongMaterial
      ? (r(m, p), h(m, p))
      : p.isMeshStandardMaterial
      ? (r(m, p), f(m, p), p.isMeshPhysicalMaterial && d(m, p, S))
      : p.isMeshMatcapMaterial
      ? (r(m, p), x(m, p))
      : p.isMeshDepthMaterial
      ? r(m, p)
      : p.isMeshDistanceMaterial
      ? (r(m, p), g(m, p))
      : p.isMeshNormalMaterial
      ? r(m, p)
      : p.isLineBasicMaterial
      ? (a(m, p), p.isLineDashedMaterial && o(m, p))
      : p.isPointsMaterial
      ? c(m, p, R, _)
      : p.isSpriteMaterial
      ? l(m, p)
      : p.isShadowMaterial
      ? (m.color.value.copy(p.color), (m.opacity.value = p.opacity))
      : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(m, p) {
    (m.opacity.value = p.opacity),
      p.color && m.diffuse.value.copy(p.color),
      p.emissive &&
        m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && ((m.map.value = p.map), t(p.map, m.mapTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), t(p.alphaMap, m.alphaMapTransform)),
      p.bumpMap &&
        ((m.bumpMap.value = p.bumpMap),
        t(p.bumpMap, m.bumpMapTransform),
        (m.bumpScale.value = p.bumpScale),
        p.side === Ot && (m.bumpScale.value *= -1)),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        t(p.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(p.normalScale),
        p.side === Ot && m.normalScale.value.negate()),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        t(p.displacementMap, m.displacementMapTransform),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)),
      p.emissiveMap &&
        ((m.emissiveMap.value = p.emissiveMap),
        t(p.emissiveMap, m.emissiveMapTransform)),
      p.specularMap &&
        ((m.specularMap.value = p.specularMap),
        t(p.specularMap, m.specularMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const R = e.get(p),
      _ = R.envMap,
      S = R.envMapRotation;
    _ &&
      ((m.envMap.value = _),
      ti.copy(S),
      (ti.x *= -1),
      (ti.y *= -1),
      (ti.z *= -1),
      _.isCubeTexture &&
        _.isRenderTargetTexture === !1 &&
        ((ti.y *= -1), (ti.z *= -1)),
      m.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(ti)),
      (m.flipEnvMap.value =
        _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
      (m.reflectivity.value = p.reflectivity),
      (m.ior.value = p.ior),
      (m.refractionRatio.value = p.refractionRatio)),
      p.lightMap &&
        ((m.lightMap.value = p.lightMap),
        (m.lightMapIntensity.value = p.lightMapIntensity),
        t(p.lightMap, m.lightMapTransform)),
      p.aoMap &&
        ((m.aoMap.value = p.aoMap),
        (m.aoMapIntensity.value = p.aoMapIntensity),
        t(p.aoMap, m.aoMapTransform));
  }
  function a(m, p) {
    m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      p.map && ((m.map.value = p.map), t(p.map, m.mapTransform));
  }
  function o(m, p) {
    (m.dashSize.value = p.dashSize),
      (m.totalSize.value = p.dashSize + p.gapSize),
      (m.scale.value = p.scale);
  }
  function c(m, p, R, _) {
    m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.size.value = p.size * R),
      (m.scale.value = _ * 0.5),
      p.map && ((m.map.value = p.map), t(p.map, m.uvTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), t(p.alphaMap, m.alphaMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function l(m, p) {
    m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.rotation.value = p.rotation),
      p.map && ((m.map.value = p.map), t(p.map, m.mapTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), t(p.alphaMap, m.alphaMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function h(m, p) {
    m.specular.value.copy(p.specular),
      (m.shininess.value = Math.max(p.shininess, 1e-4));
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function f(m, p) {
    (m.metalness.value = p.metalness),
      p.metalnessMap &&
        ((m.metalnessMap.value = p.metalnessMap),
        t(p.metalnessMap, m.metalnessMapTransform)),
      (m.roughness.value = p.roughness),
      p.roughnessMap &&
        ((m.roughnessMap.value = p.roughnessMap),
        t(p.roughnessMap, m.roughnessMapTransform)),
      p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function d(m, p, R) {
    (m.ior.value = p.ior),
      p.sheen > 0 &&
        (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        (m.sheenRoughness.value = p.sheenRoughness),
        p.sheenColorMap &&
          ((m.sheenColorMap.value = p.sheenColorMap),
          t(p.sheenColorMap, m.sheenColorMapTransform)),
        p.sheenRoughnessMap &&
          ((m.sheenRoughnessMap.value = p.sheenRoughnessMap),
          t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
      p.clearcoat > 0 &&
        ((m.clearcoat.value = p.clearcoat),
        (m.clearcoatRoughness.value = p.clearcoatRoughness),
        p.clearcoatMap &&
          ((m.clearcoatMap.value = p.clearcoatMap),
          t(p.clearcoatMap, m.clearcoatMapTransform)),
        p.clearcoatRoughnessMap &&
          ((m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
          t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        p.clearcoatNormalMap &&
          ((m.clearcoatNormalMap.value = p.clearcoatNormalMap),
          t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform),
          m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
          p.side === Ot && m.clearcoatNormalScale.value.negate())),
      p.dispersion > 0 && (m.dispersion.value = p.dispersion),
      p.iridescence > 0 &&
        ((m.iridescence.value = p.iridescence),
        (m.iridescenceIOR.value = p.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1]),
        p.iridescenceMap &&
          ((m.iridescenceMap.value = p.iridescenceMap),
          t(p.iridescenceMap, m.iridescenceMapTransform)),
        p.iridescenceThicknessMap &&
          ((m.iridescenceThicknessMap.value = p.iridescenceThicknessMap),
          t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
      p.transmission > 0 &&
        ((m.transmission.value = p.transmission),
        (m.transmissionSamplerMap.value = R.texture),
        m.transmissionSamplerSize.value.set(R.width, R.height),
        p.transmissionMap &&
          ((m.transmissionMap.value = p.transmissionMap),
          t(p.transmissionMap, m.transmissionMapTransform)),
        (m.thickness.value = p.thickness),
        p.thicknessMap &&
          ((m.thicknessMap.value = p.thicknessMap),
          t(p.thicknessMap, m.thicknessMapTransform)),
        (m.attenuationDistance.value = p.attenuationDistance),
        m.attenuationColor.value.copy(p.attenuationColor)),
      p.anisotropy > 0 &&
        (m.anisotropyVector.value.set(
          p.anisotropy * Math.cos(p.anisotropyRotation),
          p.anisotropy * Math.sin(p.anisotropyRotation)
        ),
        p.anisotropyMap &&
          ((m.anisotropyMap.value = p.anisotropyMap),
          t(p.anisotropyMap, m.anisotropyMapTransform))),
      (m.specularIntensity.value = p.specularIntensity),
      m.specularColor.value.copy(p.specularColor),
      p.specularColorMap &&
        ((m.specularColorMap.value = p.specularColorMap),
        t(p.specularColorMap, m.specularColorMapTransform)),
      p.specularIntensityMap &&
        ((m.specularIntensityMap.value = p.specularIntensityMap),
        t(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function x(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function g(m, p) {
    const R = e.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),
      (m.nearDistance.value = R.shadow.camera.near),
      (m.farDistance.value = R.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function ig(s, e, t, n) {
  let i = {},
    r = {},
    a = [];
  const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(R, _) {
    const S = _.program;
    n.uniformBlockBinding(R, S);
  }
  function l(R, _) {
    let S = i[R.id];
    S === void 0 &&
      (x(R), (S = h(R)), (i[R.id] = S), R.addEventListener("dispose", m));
    const L = _.program;
    n.updateUBOMapping(R, L);
    const w = e.render.frame;
    r[R.id] !== w && (f(R), (r[R.id] = w));
  }
  function h(R) {
    const _ = u();
    R.__bindingPointIndex = _;
    const S = s.createBuffer(),
      L = R.__size,
      w = R.usage;
    return (
      s.bindBuffer(s.UNIFORM_BUFFER, S),
      s.bufferData(s.UNIFORM_BUFFER, L, w),
      s.bindBuffer(s.UNIFORM_BUFFER, null),
      s.bindBufferBase(s.UNIFORM_BUFFER, _, S),
      S
    );
  }
  function u() {
    for (let R = 0; R < o; R++) if (a.indexOf(R) === -1) return a.push(R), R;
    return (
      Je(
        "WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function f(R) {
    const _ = i[R.id],
      S = R.uniforms,
      L = R.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, _);
    for (let w = 0, I = S.length; w < I; w++) {
      const N = Array.isArray(S[w]) ? S[w] : [S[w]];
      for (let E = 0, M = N.length; E < M; E++) {
        const U = N[E];
        if (d(U, w, E, L) === !0) {
          const V = U.__offset,
            K = Array.isArray(U.value) ? U.value : [U.value];
          let Z = 0;
          for (let ne = 0; ne < K.length; ne++) {
            const $ = K[ne],
              se = g($);
            typeof $ == "number" || typeof $ == "boolean"
              ? ((U.__data[0] = $),
                s.bufferSubData(s.UNIFORM_BUFFER, V + Z, U.__data))
              : $.isMatrix3
              ? ((U.__data[0] = $.elements[0]),
                (U.__data[1] = $.elements[1]),
                (U.__data[2] = $.elements[2]),
                (U.__data[3] = 0),
                (U.__data[4] = $.elements[3]),
                (U.__data[5] = $.elements[4]),
                (U.__data[6] = $.elements[5]),
                (U.__data[7] = 0),
                (U.__data[8] = $.elements[6]),
                (U.__data[9] = $.elements[7]),
                (U.__data[10] = $.elements[8]),
                (U.__data[11] = 0))
              : ($.toArray(U.__data, Z),
                (Z += se.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          s.bufferSubData(s.UNIFORM_BUFFER, V, U.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function d(R, _, S, L) {
    const w = R.value,
      I = _ + "_" + S;
    if (L[I] === void 0)
      return (
        typeof w == "number" || typeof w == "boolean"
          ? (L[I] = w)
          : (L[I] = w.clone()),
        !0
      );
    {
      const N = L[I];
      if (typeof w == "number" || typeof w == "boolean") {
        if (N !== w) return (L[I] = w), !0;
      } else if (N.equals(w) === !1) return N.copy(w), !0;
    }
    return !1;
  }
  function x(R) {
    const _ = R.uniforms;
    let S = 0;
    const L = 16;
    for (let I = 0, N = _.length; I < N; I++) {
      const E = Array.isArray(_[I]) ? _[I] : [_[I]];
      for (let M = 0, U = E.length; M < U; M++) {
        const V = E[M],
          K = Array.isArray(V.value) ? V.value : [V.value];
        for (let Z = 0, ne = K.length; Z < ne; Z++) {
          const $ = K[Z],
            se = g($),
            k = S % L,
            de = k % se.boundary,
            pe = k + de;
          (S += de),
            pe !== 0 && L - pe < se.storage && (S += L - pe),
            (V.__data = new Float32Array(
              se.storage / Float32Array.BYTES_PER_ELEMENT
            )),
            (V.__offset = S),
            (S += se.storage);
        }
      }
    }
    const w = S % L;
    return w > 0 && (S += L - w), (R.__size = S), (R.__cache = {}), this;
  }
  function g(R) {
    const _ = { boundary: 0, storage: 0 };
    return (
      typeof R == "number" || typeof R == "boolean"
        ? ((_.boundary = 4), (_.storage = 4))
        : R.isVector2
        ? ((_.boundary = 8), (_.storage = 8))
        : R.isVector3 || R.isColor
        ? ((_.boundary = 16), (_.storage = 12))
        : R.isVector4
        ? ((_.boundary = 16), (_.storage = 16))
        : R.isMatrix3
        ? ((_.boundary = 48), (_.storage = 48))
        : R.isMatrix4
        ? ((_.boundary = 64), (_.storage = 64))
        : R.isTexture
        ? Ue(
            "WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : Ue("WebGLRenderer: Unsupported uniform value type.", R),
      _
    );
  }
  function m(R) {
    const _ = R.target;
    _.removeEventListener("dispose", m);
    const S = a.indexOf(_.__bindingPointIndex);
    a.splice(S, 1), s.deleteBuffer(i[_.id]), delete i[_.id], delete r[_.id];
  }
  function p() {
    for (const R in i) s.deleteBuffer(i[R]);
    (a = []), (i = {}), (r = {});
  }
  return { bind: c, update: l, dispose: p };
}
const sg = new Uint16Array([
  11481, 15204, 11534, 15171, 11808, 15015, 12385, 14843, 12894, 14716, 13396,
  14600, 13693, 14483, 13976, 14366, 14237, 14171, 14405, 13961, 14511, 13770,
  14605, 13598, 14687, 13444, 14760, 13305, 14822, 13066, 14876, 12857, 14923,
  12675, 14963, 12517, 14997, 12379, 15025, 12230, 15049, 12023, 15070, 11843,
  15086, 11687, 15100, 11551, 15111, 11433, 15120, 11330, 15127, 11217, 15132,
  11060, 15135, 10922, 15138, 10801, 15139, 10695, 15139, 10600, 13012, 14923,
  13020, 14917, 13064, 14886, 13176, 14800, 13349, 14666, 13513, 14526, 13724,
  14398, 13960, 14230, 14200, 14020, 14383, 13827, 14488, 13651, 14583, 13491,
  14667, 13348, 14740, 13132, 14803, 12908, 14856, 12713, 14901, 12542, 14938,
  12394, 14968, 12241, 14992, 12017, 15010, 11822, 15024, 11654, 15034, 11507,
  15041, 11380, 15044, 11269, 15044, 11081, 15042, 10913, 15037, 10764, 15031,
  10635, 15023, 10520, 15014, 10419, 15003, 10330, 13657, 14676, 13658, 14673,
  13670, 14660, 13698, 14622, 13750, 14547, 13834, 14442, 13956, 14317, 14112,
  14093, 14291, 13889, 14407, 13704, 14499, 13538, 14586, 13389, 14664, 13201,
  14733, 12966, 14792, 12758, 14842, 12577, 14882, 12418, 14915, 12272, 14940,
  12033, 14959, 11826, 14972, 11646, 14980, 11490, 14983, 11355, 14983, 11212,
  14979, 11008, 14971, 10830, 14961, 10675, 14950, 10540, 14936, 10420, 14923,
  10315, 14909, 10204, 14894, 10041, 14089, 14460, 14090, 14459, 14096, 14452,
  14112, 14431, 14141, 14388, 14186, 14305, 14252, 14130, 14341, 13941, 14399,
  13756, 14467, 13585, 14539, 13430, 14610, 13272, 14677, 13026, 14737, 12808,
  14790, 12617, 14833, 12449, 14869, 12303, 14896, 12065, 14916, 11845, 14929,
  11655, 14937, 11490, 14939, 11347, 14936, 11184, 14930, 10970, 14921, 10783,
  14912, 10621, 14900, 10480, 14885, 10356, 14867, 10247, 14848, 10062, 14827,
  9894, 14805, 9745, 14400, 14208, 14400, 14206, 14402, 14198, 14406, 14174,
  14415, 14122, 14427, 14035, 14444, 13913, 14469, 13767, 14504, 13613, 14548,
  13463, 14598, 13324, 14651, 13082, 14704, 12858, 14752, 12658, 14795, 12483,
  14831, 12330, 14860, 12106, 14881, 11875, 14895, 11675, 14903, 11501, 14905,
  11351, 14903, 11178, 14900, 10953, 14892, 10757, 14880, 10589, 14865, 10442,
  14847, 10313, 14827, 10162, 14805, 9965, 14782, 9792, 14757, 9642, 14731,
  9507, 14562, 13883, 14562, 13883, 14563, 13877, 14566, 13862, 14570, 13830,
  14576, 13773, 14584, 13689, 14595, 13582, 14613, 13461, 14637, 13336, 14668,
  13120, 14704, 12897, 14741, 12695, 14776, 12516, 14808, 12358, 14835, 12150,
  14856, 11910, 14870, 11701, 14878, 11519, 14882, 11361, 14884, 11187, 14880,
  10951, 14871, 10748, 14858, 10572, 14842, 10418, 14823, 10286, 14801, 10099,
  14777, 9897, 14751, 9722, 14725, 9567, 14696, 9430, 14666, 9309, 14702, 13604,
  14702, 13604, 14702, 13600, 14703, 13591, 14705, 13570, 14707, 13533, 14709,
  13477, 14712, 13400, 14718, 13305, 14727, 13106, 14743, 12907, 14762, 12716,
  14784, 12539, 14807, 12380, 14827, 12190, 14844, 11943, 14855, 11727, 14863,
  11539, 14870, 11376, 14871, 11204, 14868, 10960, 14858, 10748, 14845, 10565,
  14829, 10406, 14809, 10269, 14786, 10058, 14761, 9852, 14734, 9671, 14705,
  9512, 14674, 9374, 14641, 9253, 14608, 9076, 14821, 13366, 14821, 13365,
  14821, 13364, 14821, 13358, 14821, 13344, 14821, 13320, 14819, 13252, 14817,
  13145, 14815, 13011, 14814, 12858, 14817, 12698, 14823, 12539, 14832, 12389,
  14841, 12214, 14850, 11968, 14856, 11750, 14861, 11558, 14866, 11390, 14867,
  11226, 14862, 10972, 14853, 10754, 14840, 10565, 14823, 10401, 14803, 10259,
  14780, 10032, 14754, 9820, 14725, 9635, 14694, 9473, 14661, 9333, 14627, 9203,
  14593, 8988, 14557, 8798, 14923, 13014, 14922, 13014, 14922, 13012, 14922,
  13004, 14920, 12987, 14919, 12957, 14915, 12907, 14909, 12834, 14902, 12738,
  14894, 12623, 14888, 12498, 14883, 12370, 14880, 12203, 14878, 11970, 14875,
  11759, 14873, 11569, 14874, 11401, 14872, 11243, 14865, 10986, 14855, 10762,
  14842, 10568, 14825, 10401, 14804, 10255, 14781, 10017, 14754, 9799, 14725,
  9611, 14692, 9445, 14658, 9301, 14623, 9139, 14587, 8920, 14548, 8729, 14509,
  8562, 15008, 12672, 15008, 12672, 15008, 12671, 15007, 12667, 15005, 12656,
  15001, 12637, 14997, 12605, 14989, 12556, 14978, 12490, 14966, 12407, 14953,
  12313, 14940, 12136, 14927, 11934, 14914, 11742, 14903, 11563, 14896, 11401,
  14889, 11247, 14879, 10992, 14866, 10767, 14851, 10570, 14833, 10400, 14812,
  10252, 14789, 10007, 14761, 9784, 14731, 9592, 14698, 9424, 14663, 9279,
  14627, 9088, 14588, 8868, 14548, 8676, 14508, 8508, 14467, 8360, 15080, 12386,
  15080, 12386, 15079, 12385, 15078, 12383, 15076, 12378, 15072, 12367, 15066,
  12347, 15057, 12315, 15045, 12253, 15030, 12138, 15012, 11998, 14993, 11845,
  14972, 11685, 14951, 11530, 14935, 11383, 14920, 11228, 14904, 10981, 14887,
  10762, 14870, 10567, 14850, 10397, 14827, 10248, 14803, 9997, 14774, 9771,
  14743, 9578, 14710, 9407, 14674, 9259, 14637, 9048, 14596, 8826, 14555, 8632,
  14514, 8464, 14471, 8317, 14427, 8182, 15139, 12008, 15139, 12008, 15138,
  12008, 15137, 12007, 15135, 12003, 15130, 11990, 15124, 11969, 15115, 11929,
  15102, 11872, 15086, 11794, 15064, 11693, 15041, 11581, 15013, 11459, 14987,
  11336, 14966, 11170, 14944, 10944, 14921, 10738, 14898, 10552, 14875, 10387,
  14850, 10239, 14824, 9983, 14794, 9758, 14762, 9563, 14728, 9392, 14692, 9244,
  14653, 9014, 14611, 8791, 14569, 8597, 14526, 8427, 14481, 8281, 14436, 8110,
  14391, 7885, 15188, 11617, 15188, 11617, 15187, 11617, 15186, 11618, 15183,
  11617, 15179, 11612, 15173, 11601, 15163, 11581, 15150, 11546, 15133, 11495,
  15110, 11427, 15083, 11346, 15051, 11246, 15024, 11057, 14996, 10868, 14967,
  10687, 14938, 10517, 14911, 10362, 14882, 10206, 14853, 9956, 14821, 9737,
  14787, 9543, 14752, 9375, 14715, 9228, 14675, 8980, 14632, 8760, 14589, 8565,
  14544, 8395, 14498, 8248, 14451, 8049, 14404, 7824, 14357, 7630, 15228, 11298,
  15228, 11298, 15227, 11299, 15226, 11301, 15223, 11303, 15219, 11302, 15213,
  11299, 15204, 11290, 15191, 11271, 15174, 11217, 15150, 11129, 15119, 11015,
  15087, 10886, 15057, 10744, 15024, 10599, 14990, 10455, 14957, 10318, 14924,
  10143, 14891, 9911, 14856, 9701, 14820, 9516, 14782, 9352, 14744, 9200, 14703,
  8946, 14659, 8725, 14615, 8533, 14568, 8366, 14521, 8220, 14472, 7992, 14423,
  7770, 14374, 7578, 14315, 7408, 15260, 10819, 15260, 10819, 15259, 10822,
  15258, 10826, 15256, 10832, 15251, 10836, 15246, 10841, 15237, 10838, 15225,
  10821, 15207, 10788, 15183, 10734, 15151, 10660, 15120, 10571, 15087, 10469,
  15049, 10359, 15012, 10249, 14974, 10041, 14937, 9837, 14900, 9647, 14860,
  9475, 14820, 9320, 14779, 9147, 14736, 8902, 14691, 8688, 14646, 8499, 14598,
  8335, 14549, 8189, 14499, 7940, 14448, 7720, 14397, 7529, 14347, 7363, 14256,
  7218, 15285, 10410, 15285, 10411, 15285, 10413, 15284, 10418, 15282, 10425,
  15278, 10434, 15272, 10442, 15264, 10449, 15252, 10445, 15235, 10433, 15210,
  10403, 15179, 10358, 15149, 10301, 15113, 10218, 15073, 10059, 15033, 9894,
  14991, 9726, 14951, 9565, 14909, 9413, 14865, 9273, 14822, 9073, 14777, 8845,
  14730, 8641, 14682, 8459, 14633, 8300, 14583, 8129, 14531, 7883, 14479, 7670,
  14426, 7482, 14373, 7321, 14305, 7176, 14201, 6939, 15305, 9939, 15305, 9940,
  15305, 9945, 15304, 9955, 15302, 9967, 15298, 9989, 15293, 10010, 15286,
  10033, 15274, 10044, 15258, 10045, 15233, 10022, 15205, 9975, 15174, 9903,
  15136, 9808, 15095, 9697, 15053, 9578, 15009, 9451, 14965, 9327, 14918, 9198,
  14871, 8973, 14825, 8766, 14775, 8579, 14725, 8408, 14675, 8259, 14622, 8058,
  14569, 7821, 14515, 7615, 14460, 7435, 14405, 7276, 14350, 7108, 14256, 6866,
  14149, 6653, 15321, 9444, 15321, 9445, 15321, 9448, 15320, 9458, 15317, 9470,
  15314, 9490, 15310, 9515, 15302, 9540, 15292, 9562, 15276, 9579, 15251, 9577,
  15226, 9559, 15195, 9519, 15156, 9463, 15116, 9389, 15071, 9304, 15025, 9208,
  14978, 9023, 14927, 8838, 14878, 8661, 14827, 8496, 14774, 8344, 14722, 8206,
  14667, 7973, 14612, 7749, 14556, 7555, 14499, 7382, 14443, 7229, 14385, 7025,
  14322, 6791, 14210, 6588, 14100, 6409, 15333, 8920, 15333, 8921, 15332, 8927,
  15332, 8943, 15329, 8965, 15326, 9002, 15322, 9048, 15316, 9106, 15307, 9162,
  15291, 9204, 15267, 9221, 15244, 9221, 15212, 9196, 15175, 9134, 15133, 9043,
  15088, 8930, 15040, 8801, 14990, 8665, 14938, 8526, 14886, 8391, 14830, 8261,
  14775, 8087, 14719, 7866, 14661, 7664, 14603, 7482, 14544, 7322, 14485, 7178,
  14426, 6936, 14367, 6713, 14281, 6517, 14166, 6348, 14054, 6198, 15341, 8360,
  15341, 8361, 15341, 8366, 15341, 8379, 15339, 8399, 15336, 8431, 15332, 8473,
  15326, 8527, 15318, 8585, 15302, 8632, 15281, 8670, 15258, 8690, 15227, 8690,
  15191, 8664, 15149, 8612, 15104, 8543, 15055, 8456, 15001, 8360, 14948, 8259,
  14892, 8122, 14834, 7923, 14776, 7734, 14716, 7558, 14656, 7397, 14595, 7250,
  14534, 7070, 14472, 6835, 14410, 6628, 14350, 6443, 14243, 6283, 14125, 6135,
  14010, 5889, 15348, 7715, 15348, 7717, 15348, 7725, 15347, 7745, 15345, 7780,
  15343, 7836, 15339, 7905, 15334, 8e3, 15326, 8103, 15310, 8193, 15293, 8239,
  15270, 8270, 15240, 8287, 15204, 8283, 15163, 8260, 15118, 8223, 15067, 8143,
  15014, 8014, 14958, 7873, 14899, 7723, 14839, 7573, 14778, 7430, 14715, 7293,
  14652, 7164, 14588, 6931, 14524, 6720, 14460, 6531, 14396, 6362, 14330, 6210,
  14207, 6015, 14086, 5781, 13969, 5576, 15352, 7114, 15352, 7116, 15352, 7128,
  15352, 7159, 15350, 7195, 15348, 7237, 15345, 7299, 15340, 7374, 15332, 7457,
  15317, 7544, 15301, 7633, 15280, 7703, 15251, 7754, 15216, 7775, 15176, 7767,
  15131, 7733, 15079, 7670, 15026, 7588, 14967, 7492, 14906, 7387, 14844, 7278,
  14779, 7171, 14714, 6965, 14648, 6770, 14581, 6587, 14515, 6420, 14448, 6269,
  14382, 6123, 14299, 5881, 14172, 5665, 14049, 5477, 13929, 5310, 15355, 6329,
  15355, 6330, 15355, 6339, 15355, 6362, 15353, 6410, 15351, 6472, 15349, 6572,
  15344, 6688, 15337, 6835, 15323, 6985, 15309, 7142, 15287, 7220, 15260, 7277,
  15226, 7310, 15188, 7326, 15142, 7318, 15090, 7285, 15036, 7239, 14976, 7177,
  14914, 7045, 14849, 6892, 14782, 6736, 14714, 6581, 14645, 6433, 14576, 6293,
  14506, 6164, 14438, 5946, 14369, 5733, 14270, 5540, 14140, 5369, 14014, 5216,
  13892, 5043, 15357, 5483, 15357, 5484, 15357, 5496, 15357, 5528, 15356, 5597,
  15354, 5692, 15351, 5835, 15347, 6011, 15339, 6195, 15328, 6317, 15314, 6446,
  15293, 6566, 15268, 6668, 15235, 6746, 15197, 6796, 15152, 6811, 15101, 6790,
  15046, 6748, 14985, 6673, 14921, 6583, 14854, 6479, 14785, 6371, 14714, 6259,
  14643, 6149, 14571, 5946, 14499, 5750, 14428, 5567, 14358, 5401, 14242, 5250,
  14109, 5111, 13980, 4870, 13856, 4657, 15359, 4555, 15359, 4557, 15358, 4573,
  15358, 4633, 15357, 4715, 15355, 4841, 15353, 5061, 15349, 5216, 15342, 5391,
  15331, 5577, 15318, 5770, 15299, 5967, 15274, 6150, 15243, 6223, 15206, 6280,
  15161, 6310, 15111, 6317, 15055, 6300, 14994, 6262, 14928, 6208, 14860, 6141,
  14788, 5994, 14715, 5838, 14641, 5684, 14566, 5529, 14492, 5384, 14418, 5247,
  14346, 5121, 14216, 4892, 14079, 4682, 13948, 4496, 13822, 4330, 15359, 3498,
  15359, 3501, 15359, 3520, 15359, 3598, 15358, 3719, 15356, 3860, 15355, 4137,
  15351, 4305, 15344, 4563, 15334, 4809, 15321, 5116, 15303, 5273, 15280, 5418,
  15250, 5547, 15214, 5653, 15170, 5722, 15120, 5761, 15064, 5763, 15002, 5733,
  14935, 5673, 14865, 5597, 14792, 5504, 14716, 5400, 14640, 5294, 14563, 5185,
  14486, 5041, 14410, 4841, 14335, 4655, 14191, 4482, 14051, 4325, 13918, 4183,
  13790, 4012, 15360, 2282, 15360, 2285, 15360, 2306, 15360, 2401, 15359, 2547,
  15357, 2748, 15355, 3103, 15352, 3349, 15345, 3675, 15336, 4020, 15324, 4272,
  15307, 4496, 15285, 4716, 15255, 4908, 15220, 5086, 15178, 5170, 15128, 5214,
  15072, 5234, 15010, 5231, 14943, 5206, 14871, 5166, 14796, 5102, 14718, 4971,
  14639, 4833, 14559, 4687, 14480, 4541, 14402, 4401, 14315, 4268, 14167, 4142,
  14025, 3958, 13888, 3747, 13759, 3556, 15360, 923, 15360, 925, 15360, 946,
  15360, 1052, 15359, 1214, 15357, 1494, 15356, 1892, 15352, 2274, 15346, 2663,
  15338, 3099, 15326, 3393, 15309, 3679, 15288, 3980, 15260, 4183, 15226, 4325,
  15185, 4437, 15136, 4517, 15080, 4570, 15018, 4591, 14950, 4581, 14877, 4545,
  14800, 4485, 14720, 4411, 14638, 4325, 14556, 4231, 14475, 4136, 14395, 3988,
  14297, 3803, 14145, 3628, 13999, 3465, 13861, 3314, 13729, 3177, 15360, 263,
  15360, 264, 15360, 272, 15360, 325, 15359, 407, 15358, 548, 15356, 780, 15352,
  1144, 15347, 1580, 15339, 2099, 15328, 2425, 15312, 2795, 15292, 3133, 15264,
  3329, 15232, 3517, 15191, 3689, 15143, 3819, 15088, 3923, 15025, 3978, 14956,
  3999, 14882, 3979, 14804, 3931, 14722, 3855, 14639, 3756, 14554, 3645, 14470,
  3529, 14388, 3409, 14279, 3289, 14124, 3173, 13975, 3055, 13834, 2848, 13701,
  2658, 15360, 49, 15360, 49, 15360, 52, 15360, 75, 15359, 111, 15358, 201,
  15356, 283, 15353, 519, 15348, 726, 15340, 1045, 15329, 1415, 15314, 1795,
  15295, 2173, 15269, 2410, 15237, 2649, 15197, 2866, 15150, 3054, 15095, 3140,
  15032, 3196, 14963, 3228, 14888, 3236, 14808, 3224, 14725, 3191, 14639, 3146,
  14553, 3088, 14466, 2976, 14382, 2836, 14262, 2692, 14103, 2549, 13952, 2409,
  13808, 2278, 13674, 2154, 15360, 4, 15360, 4, 15360, 4, 15360, 13, 15359, 33,
  15358, 59, 15357, 112, 15353, 199, 15348, 302, 15341, 456, 15331, 628, 15316,
  827, 15297, 1082, 15272, 1332, 15241, 1601, 15202, 1851, 15156, 2069, 15101,
  2172, 15039, 2256, 14970, 2314, 14894, 2348, 14813, 2358, 14728, 2344, 14640,
  2311, 14551, 2263, 14463, 2203, 14376, 2133, 14247, 2059, 14084, 1915, 13930,
  1761, 13784, 1609, 13648, 1464, 15360, 0, 15360, 0, 15360, 0, 15360, 3, 15359,
  18, 15358, 26, 15357, 53, 15354, 80, 15348, 97, 15341, 165, 15332, 238, 15318,
  326, 15299, 427, 15275, 529, 15245, 654, 15207, 771, 15161, 885, 15108, 994,
  15046, 1089, 14976, 1170, 14900, 1229, 14817, 1266, 14731, 1284, 14641, 1282,
  14550, 1260, 14460, 1223, 14370, 1174, 14232, 1116, 14066, 1050, 13909, 981,
  13761, 910, 13623, 839,
]);
let En = null;
function rg() {
  return (
    En === null &&
      ((En = new vo(sg, 32, 32, po, li)),
      (En.minFilter = It),
      (En.magFilter = It),
      (En.wrapS = ln),
      (En.wrapT = ln),
      (En.generateMipmaps = !1),
      (En.needsUpdate = !0)),
    En
  );
}
class n_ {
  constructor(e = {}) {
    const {
      canvas: t = ou(),
      context: n = null,
      depth: i = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1,
      reversedDepthBuffer: f = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      d = n.getContextAttributes().alpha;
    } else d = a;
    const x = new Set([xo, mo, fo]),
      g = new Set([fn, oi, ds, ps, lo, ho]),
      m = new Uint32Array(4),
      p = new Int32Array(4);
    let R = null,
      _ = null;
    const S = [],
      L = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.toneMapping = Wn),
      (this.toneMappingExposure = 1),
      (this.transmissionResolutionScale = 1);
    const w = this;
    let I = !1;
    this._outputColorSpace = gt;
    let N = 0,
      E = 0,
      M = null,
      U = -1,
      V = null;
    const K = new tt(),
      Z = new tt();
    let ne = null;
    const $ = new We(0);
    let se = 0,
      k = t.width,
      de = t.height,
      pe = 1,
      Ae = null,
      Ve = null;
    const Ke = new tt(0, 0, k, de),
      Y = new tt(0, 0, k, de);
    let O = !1;
    const T = new bo();
    let b = !1,
      q = !1;
    const re = new Ye(),
      H = new F(),
      le = new tt(),
      ge = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let he = !1;
    function z() {
      return M === null ? pe : 1;
    }
    let y = n;
    function j(A, W) {
      return t.getContext(A, W);
    }
    try {
      const A = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u,
      };
      if (
        ("setAttribute" in t && t.setAttribute("data-engine", "three.js r181"),
        t.addEventListener("webglcontextlost", xe, !1),
        t.addEventListener("webglcontextrestored", ue, !1),
        t.addEventListener("webglcontextcreationerror", Ie, !1),
        y === null)
      ) {
        const W = "webgl2";
        if (((y = j(W, A)), y === null))
          throw j(W)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (A) {
      throw (A("WebGLRenderer: " + A.message), A);
    }
    let J,
      D,
      C,
      ae,
      ce,
      be,
      P,
      v,
      G,
      ie,
      fe,
      te,
      Le,
      ye,
      Ne,
      Pe,
      me,
      _e,
      ze,
      Be,
      Re,
      Xe,
      B,
      Ee;
    function Me() {
      (J = new p0(y)),
        J.init(),
        (Xe = new Zx(y, J)),
        (D = new r0(y, J, e, Xe)),
        (C = new jx(y, J)),
        D.reversedDepthBuffer && f && C.buffers.depth.setReversed(!0),
        (ae = new g0(y)),
        (ce = new Ux()),
        (be = new Kx(y, J, C, ce, D, Xe, ae)),
        (P = new o0(w)),
        (v = new d0(w)),
        (G = new bd(y)),
        (B = new i0(y, G)),
        (ie = new m0(y, G, ae, B)),
        (fe = new v0(y, ie, G, ae)),
        (ze = new _0(y, D, be)),
        (Pe = new a0(ce)),
        (te = new Nx(w, P, v, J, D, B, Pe)),
        (Le = new ng(w, ce)),
        (ye = new Ox()),
        (Ne = new Gx(J)),
        (_e = new n0(w, P, v, C, fe, d, c)),
        (me = new qx(w, fe, D)),
        (Ee = new ig(y, ae, D, C)),
        (Be = new s0(y, J, ae)),
        (Re = new x0(y, J, ae)),
        (ae.programs = te.programs),
        (w.capabilities = D),
        (w.extensions = J),
        (w.properties = ce),
        (w.renderLists = ye),
        (w.shadowMap = me),
        (w.state = C),
        (w.info = ae);
    }
    Me();
    const Se = new eg(w, y);
    (this.xr = Se),
      (this.getContext = function () {
        return y;
      }),
      (this.getContextAttributes = function () {
        return y.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const A = J.get("WEBGL_lose_context");
        A && A.loseContext();
      }),
      (this.forceContextRestore = function () {
        const A = J.get("WEBGL_lose_context");
        A && A.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return pe;
      }),
      (this.setPixelRatio = function (A) {
        A !== void 0 && ((pe = A), this.setSize(k, de, !1));
      }),
      (this.getSize = function (A) {
        return A.set(k, de);
      }),
      (this.setSize = function (A, W, Q = !0) {
        if (Se.isPresenting) {
          Ue("WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        (k = A),
          (de = W),
          (t.width = Math.floor(A * pe)),
          (t.height = Math.floor(W * pe)),
          Q === !0 && ((t.style.width = A + "px"), (t.style.height = W + "px")),
          this.setViewport(0, 0, A, W);
      }),
      (this.getDrawingBufferSize = function (A) {
        return A.set(k * pe, de * pe).floor();
      }),
      (this.setDrawingBufferSize = function (A, W, Q) {
        (k = A),
          (de = W),
          (pe = Q),
          (t.width = Math.floor(A * Q)),
          (t.height = Math.floor(W * Q)),
          this.setViewport(0, 0, A, W);
      }),
      (this.getCurrentViewport = function (A) {
        return A.copy(K);
      }),
      (this.getViewport = function (A) {
        return A.copy(Ke);
      }),
      (this.setViewport = function (A, W, Q, ee) {
        A.isVector4 ? Ke.set(A.x, A.y, A.z, A.w) : Ke.set(A, W, Q, ee),
          C.viewport(K.copy(Ke).multiplyScalar(pe).round());
      }),
      (this.getScissor = function (A) {
        return A.copy(Y);
      }),
      (this.setScissor = function (A, W, Q, ee) {
        A.isVector4 ? Y.set(A.x, A.y, A.z, A.w) : Y.set(A, W, Q, ee),
          C.scissor(Z.copy(Y).multiplyScalar(pe).round());
      }),
      (this.getScissorTest = function () {
        return O;
      }),
      (this.setScissorTest = function (A) {
        C.setScissorTest((O = A));
      }),
      (this.setOpaqueSort = function (A) {
        Ae = A;
      }),
      (this.setTransparentSort = function (A) {
        Ve = A;
      }),
      (this.getClearColor = function (A) {
        return A.copy(_e.getClearColor());
      }),
      (this.setClearColor = function () {
        _e.setClearColor(...arguments);
      }),
      (this.getClearAlpha = function () {
        return _e.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        _e.setClearAlpha(...arguments);
      }),
      (this.clear = function (A = !0, W = !0, Q = !0) {
        let ee = 0;
        if (A) {
          let X = !1;
          if (M !== null) {
            const ve = M.texture.format;
            X = x.has(ve);
          }
          if (X) {
            const ve = M.texture.type,
              we = g.has(ve),
              De = _e.getClearColor(),
              Ce = _e.getClearAlpha(),
              ke = De.r,
              He = De.g,
              Fe = De.b;
            we
              ? ((m[0] = ke),
                (m[1] = He),
                (m[2] = Fe),
                (m[3] = Ce),
                y.clearBufferuiv(y.COLOR, 0, m))
              : ((p[0] = ke),
                (p[1] = He),
                (p[2] = Fe),
                (p[3] = Ce),
                y.clearBufferiv(y.COLOR, 0, p));
          } else ee |= y.COLOR_BUFFER_BIT;
        }
        W && (ee |= y.DEPTH_BUFFER_BIT),
          Q &&
            ((ee |= y.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          y.clear(ee);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", xe, !1),
          t.removeEventListener("webglcontextrestored", ue, !1),
          t.removeEventListener("webglcontextcreationerror", Ie, !1),
          _e.dispose(),
          ye.dispose(),
          Ne.dispose(),
          ce.dispose(),
          P.dispose(),
          v.dispose(),
          fe.dispose(),
          B.dispose(),
          Ee.dispose(),
          te.dispose(),
          Se.dispose(),
          Se.removeEventListener("sessionstart", Do),
          Se.removeEventListener("sessionend", No),
          Yn.stop();
      });
    function xe(A) {
      A.preventDefault(), mr("WebGLRenderer: Context Lost."), (I = !0);
    }
    function ue() {
      mr("WebGLRenderer: Context Restored."), (I = !1);
      const A = ae.autoReset,
        W = me.enabled,
        Q = me.autoUpdate,
        ee = me.needsUpdate,
        X = me.type;
      Me(),
        (ae.autoReset = A),
        (me.enabled = W),
        (me.autoUpdate = Q),
        (me.needsUpdate = ee),
        (me.type = X);
    }
    function Ie(A) {
      Je(
        "WebGLRenderer: A WebGL context could not be created. Reason: ",
        A.statusMessage
      );
    }
    function qe(A) {
      const W = A.target;
      W.removeEventListener("dispose", qe), ht(W);
    }
    function ht(A) {
      rt(A), ce.remove(A);
    }
    function rt(A) {
      const W = ce.get(A).programs;
      W !== void 0 &&
        (W.forEach(function (Q) {
          te.releaseProgram(Q);
        }),
        A.isShaderMaterial && te.releaseShaderCache(A));
    }
    this.renderBufferDirect = function (A, W, Q, ee, X, ve) {
      W === null && (W = ge);
      const we = X.isMesh && X.matrixWorld.determinant() < 0,
        De = fh(A, W, Q, ee, X);
      C.setMaterial(ee, we);
      let Ce = Q.index,
        ke = 1;
      if (ee.wireframe === !0) {
        if (((Ce = ie.getWireframeAttribute(Q)), Ce === void 0)) return;
        ke = 2;
      }
      const He = Q.drawRange,
        Fe = Q.attributes.position;
      let Qe = He.start * ke,
        at = (He.start + He.count) * ke;
      ve !== null &&
        ((Qe = Math.max(Qe, ve.start * ke)),
        (at = Math.min(at, (ve.start + ve.count) * ke))),
        Ce !== null
          ? ((Qe = Math.max(Qe, 0)), (at = Math.min(at, Ce.count)))
          : Fe != null &&
            ((Qe = Math.max(Qe, 0)), (at = Math.min(at, Fe.count)));
      const mt = at - Qe;
      if (mt < 0 || mt === 1 / 0) return;
      B.setup(X, ee, De, Q, Ce);
      let xt,
        lt = Be;
      if (
        (Ce !== null && ((xt = G.get(Ce)), (lt = Re), lt.setIndex(xt)),
        X.isMesh)
      )
        ee.wireframe === !0
          ? (C.setLineWidth(ee.wireframeLinewidth * z()), lt.setMode(y.LINES))
          : lt.setMode(y.TRIANGLES);
      else if (X.isLine) {
        let Oe = ee.linewidth;
        Oe === void 0 && (Oe = 1),
          C.setLineWidth(Oe * z()),
          X.isLineSegments
            ? lt.setMode(y.LINES)
            : X.isLineLoop
            ? lt.setMode(y.LINE_LOOP)
            : lt.setMode(y.LINE_STRIP);
      } else
        X.isPoints
          ? lt.setMode(y.POINTS)
          : X.isSprite && lt.setMode(y.TRIANGLES);
      if (X.isBatchedMesh)
        if (X._multiDrawInstances !== null)
          ys(
            "WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."
          ),
            lt.renderMultiDrawInstances(
              X._multiDrawStarts,
              X._multiDrawCounts,
              X._multiDrawCount,
              X._multiDrawInstances
            );
        else if (J.get("WEBGL_multi_draw"))
          lt.renderMultiDraw(
            X._multiDrawStarts,
            X._multiDrawCounts,
            X._multiDrawCount
          );
        else {
          const Oe = X._multiDrawStarts,
            ut = X._multiDrawCounts,
            nt = X._multiDrawCount,
            zt = Ce ? G.get(Ce).bytesPerElement : 1,
            ui = ce.get(ee).currentProgram.getUniforms();
          for (let Vt = 0; Vt < nt; Vt++)
            ui.setValue(y, "_gl_DrawID", Vt), lt.render(Oe[Vt] / zt, ut[Vt]);
        }
      else if (X.isInstancedMesh) lt.renderInstances(Qe, mt, X.count);
      else if (Q.isInstancedBufferGeometry) {
        const Oe = Q._maxInstanceCount !== void 0 ? Q._maxInstanceCount : 1 / 0,
          ut = Math.min(Q.instanceCount, Oe);
        lt.renderInstances(Qe, mt, ut);
      } else lt.render(Qe, mt);
    };
    function rn(A, W, Q) {
      A.transparent === !0 && A.side === cn && A.forceSinglePass === !1
        ? ((A.side = Ot),
          (A.needsUpdate = !0),
          Cs(A, W, Q),
          (A.side = In),
          (A.needsUpdate = !0),
          Cs(A, W, Q),
          (A.side = cn))
        : Cs(A, W, Q);
    }
    (this.compile = function (A, W, Q = null) {
      Q === null && (Q = A),
        (_ = Ne.get(Q)),
        _.init(W),
        L.push(_),
        Q.traverseVisible(function (X) {
          X.isLight &&
            X.layers.test(W.layers) &&
            (_.pushLight(X), X.castShadow && _.pushShadow(X));
        }),
        A !== Q &&
          A.traverseVisible(function (X) {
            X.isLight &&
              X.layers.test(W.layers) &&
              (_.pushLight(X), X.castShadow && _.pushShadow(X));
          }),
        _.setupLights();
      const ee = new Set();
      return (
        A.traverse(function (X) {
          if (!(X.isMesh || X.isPoints || X.isLine || X.isSprite)) return;
          const ve = X.material;
          if (ve)
            if (Array.isArray(ve))
              for (let we = 0; we < ve.length; we++) {
                const De = ve[we];
                rn(De, Q, X), ee.add(De);
              }
            else rn(ve, Q, X), ee.add(ve);
        }),
        (_ = L.pop()),
        ee
      );
    }),
      (this.compileAsync = function (A, W, Q = null) {
        const ee = this.compile(A, W, Q);
        return new Promise((X) => {
          function ve() {
            if (
              (ee.forEach(function (we) {
                ce.get(we).currentProgram.isReady() && ee.delete(we);
              }),
              ee.size === 0)
            ) {
              X(A);
              return;
            }
            setTimeout(ve, 10);
          }
          J.get("KHR_parallel_shader_compile") !== null
            ? ve()
            : setTimeout(ve, 10);
        });
      });
    let Zt = null;
    function uh(A) {
      Zt && Zt(A);
    }
    function Do() {
      Yn.stop();
    }
    function No() {
      Yn.start();
    }
    const Yn = new nh();
    Yn.setAnimationLoop(uh),
      typeof self < "u" && Yn.setContext(self),
      (this.setAnimationLoop = function (A) {
        (Zt = A), Se.setAnimationLoop(A), A === null ? Yn.stop() : Yn.start();
      }),
      Se.addEventListener("sessionstart", Do),
      Se.addEventListener("sessionend", No),
      (this.render = function (A, W) {
        if (W !== void 0 && W.isCamera !== !0) {
          Je(
            "WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (I === !0) return;
        if (
          (A.matrixWorldAutoUpdate === !0 && A.updateMatrixWorld(),
          W.parent === null &&
            W.matrixWorldAutoUpdate === !0 &&
            W.updateMatrixWorld(),
          Se.enabled === !0 &&
            Se.isPresenting === !0 &&
            (Se.cameraAutoUpdate === !0 && Se.updateCamera(W),
            (W = Se.getCamera())),
          A.isScene === !0 && A.onBeforeRender(w, A, W, M),
          (_ = Ne.get(A, L.length)),
          _.init(W),
          L.push(_),
          re.multiplyMatrices(W.projectionMatrix, W.matrixWorldInverse),
          T.setFromProjectionMatrix(re, hn, W.reversedDepth),
          (q = this.localClippingEnabled),
          (b = Pe.init(this.clippingPlanes, q)),
          (R = ye.get(A, S.length)),
          R.init(),
          S.push(R),
          Se.enabled === !0 && Se.isPresenting === !0)
        ) {
          const ve = w.xr.getDepthSensingMesh();
          ve !== null && Sr(ve, W, -1 / 0, w.sortObjects);
        }
        Sr(A, W, 0, w.sortObjects),
          R.finish(),
          w.sortObjects === !0 && R.sort(Ae, Ve),
          (he =
            Se.enabled === !1 ||
            Se.isPresenting === !1 ||
            Se.hasDepthSensing() === !1),
          he && _e.addToRenderList(R, A),
          this.info.render.frame++,
          b === !0 && Pe.beginShadows();
        const Q = _.state.shadowsArray;
        me.render(Q, A, W),
          b === !0 && Pe.endShadows(),
          this.info.autoReset === !0 && this.info.reset();
        const ee = R.opaque,
          X = R.transmissive;
        if ((_.setupLights(), W.isArrayCamera)) {
          const ve = W.cameras;
          if (X.length > 0)
            for (let we = 0, De = ve.length; we < De; we++) {
              const Ce = ve[we];
              Fo(ee, X, A, Ce);
            }
          he && _e.render(A);
          for (let we = 0, De = ve.length; we < De; we++) {
            const Ce = ve[we];
            Uo(R, A, Ce, Ce.viewport);
          }
        } else X.length > 0 && Fo(ee, X, A, W), he && _e.render(A), Uo(R, A, W);
        M !== null &&
          E === 0 &&
          (be.updateMultisampleRenderTarget(M), be.updateRenderTargetMipmap(M)),
          A.isScene === !0 && A.onAfterRender(w, A, W),
          B.resetDefaultState(),
          (U = -1),
          (V = null),
          L.pop(),
          L.length > 0
            ? ((_ = L[L.length - 1]),
              b === !0 && Pe.setGlobalState(w.clippingPlanes, _.state.camera))
            : (_ = null),
          S.pop(),
          S.length > 0 ? (R = S[S.length - 1]) : (R = null);
      });
    function Sr(A, W, Q, ee) {
      if (A.visible === !1) return;
      if (A.layers.test(W.layers)) {
        if (A.isGroup) Q = A.renderOrder;
        else if (A.isLOD) A.autoUpdate === !0 && A.update(W);
        else if (A.isLight) _.pushLight(A), A.castShadow && _.pushShadow(A);
        else if (A.isSprite) {
          if (!A.frustumCulled || T.intersectsSprite(A)) {
            ee && le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(re);
            const we = fe.update(A),
              De = A.material;
            De.visible && R.push(A, we, De, Q, le.z, null);
          }
        } else if (
          (A.isMesh || A.isLine || A.isPoints) &&
          (!A.frustumCulled || T.intersectsObject(A))
        ) {
          const we = fe.update(A),
            De = A.material;
          if (
            (ee &&
              (A.boundingSphere !== void 0
                ? (A.boundingSphere === null && A.computeBoundingSphere(),
                  le.copy(A.boundingSphere.center))
                : (we.boundingSphere === null && we.computeBoundingSphere(),
                  le.copy(we.boundingSphere.center)),
              le.applyMatrix4(A.matrixWorld).applyMatrix4(re)),
            Array.isArray(De))
          ) {
            const Ce = we.groups;
            for (let ke = 0, He = Ce.length; ke < He; ke++) {
              const Fe = Ce[ke],
                Qe = De[Fe.materialIndex];
              Qe && Qe.visible && R.push(A, we, Qe, Q, le.z, Fe);
            }
          } else De.visible && R.push(A, we, De, Q, le.z, null);
        }
      }
      const ve = A.children;
      for (let we = 0, De = ve.length; we < De; we++) Sr(ve[we], W, Q, ee);
    }
    function Uo(A, W, Q, ee) {
      const { opaque: X, transmissive: ve, transparent: we } = A;
      _.setupLightsView(Q),
        b === !0 && Pe.setGlobalState(w.clippingPlanes, Q),
        ee && C.viewport(K.copy(ee)),
        X.length > 0 && Rs(X, W, Q),
        ve.length > 0 && Rs(ve, W, Q),
        we.length > 0 && Rs(we, W, Q),
        C.buffers.depth.setTest(!0),
        C.buffers.depth.setMask(!0),
        C.buffers.color.setMask(!0),
        C.setPolygonOffset(!1);
    }
    function Fo(A, W, Q, ee) {
      if ((Q.isScene === !0 ? Q.overrideMaterial : null) !== null) return;
      _.state.transmissionRenderTarget[ee.id] === void 0 &&
        (_.state.transmissionRenderTarget[ee.id] = new Xn(1, 1, {
          generateMipmaps: !0,
          type:
            J.has("EXT_color_buffer_half_float") ||
            J.has("EXT_color_buffer_float")
              ? li
              : fn,
          minFilter: Rn,
          samples: 4,
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: et.workingColorSpace,
        }));
      const ve = _.state.transmissionRenderTarget[ee.id],
        we = ee.viewport || K;
      ve.setSize(
        we.z * w.transmissionResolutionScale,
        we.w * w.transmissionResolutionScale
      );
      const De = w.getRenderTarget(),
        Ce = w.getActiveCubeFace(),
        ke = w.getActiveMipmapLevel();
      w.setRenderTarget(ve),
        w.getClearColor($),
        (se = w.getClearAlpha()),
        se < 1 && w.setClearColor(16777215, 0.5),
        w.clear(),
        he && _e.render(Q);
      const He = w.toneMapping;
      w.toneMapping = Wn;
      const Fe = ee.viewport;
      if (
        (ee.viewport !== void 0 && (ee.viewport = void 0),
        _.setupLightsView(ee),
        b === !0 && Pe.setGlobalState(w.clippingPlanes, ee),
        Rs(A, Q, ee),
        be.updateMultisampleRenderTarget(ve),
        be.updateRenderTargetMipmap(ve),
        J.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let Qe = !1;
        for (let at = 0, mt = W.length; at < mt; at++) {
          const xt = W[at],
            { object: lt, geometry: Oe, material: ut, group: nt } = xt;
          if (ut.side === cn && lt.layers.test(ee.layers)) {
            const zt = ut.side;
            (ut.side = Ot),
              (ut.needsUpdate = !0),
              Oo(lt, Q, ee, Oe, ut, nt),
              (ut.side = zt),
              (ut.needsUpdate = !0),
              (Qe = !0);
          }
        }
        Qe === !0 &&
          (be.updateMultisampleRenderTarget(ve),
          be.updateRenderTargetMipmap(ve));
      }
      w.setRenderTarget(De, Ce, ke),
        w.setClearColor($, se),
        Fe !== void 0 && (ee.viewport = Fe),
        (w.toneMapping = He);
    }
    function Rs(A, W, Q) {
      const ee = W.isScene === !0 ? W.overrideMaterial : null;
      for (let X = 0, ve = A.length; X < ve; X++) {
        const we = A[X],
          { object: De, geometry: Ce, group: ke } = we;
        let He = we.material;
        He.allowOverride === !0 && ee !== null && (He = ee),
          De.layers.test(Q.layers) && Oo(De, W, Q, Ce, He, ke);
      }
    }
    function Oo(A, W, Q, ee, X, ve) {
      A.onBeforeRender(w, W, Q, ee, X, ve),
        A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse, A.matrixWorld),
        A.normalMatrix.getNormalMatrix(A.modelViewMatrix),
        X.onBeforeRender(w, W, Q, ee, A, ve),
        X.transparent === !0 && X.side === cn && X.forceSinglePass === !1
          ? ((X.side = Ot),
            (X.needsUpdate = !0),
            w.renderBufferDirect(Q, W, ee, X, A, ve),
            (X.side = In),
            (X.needsUpdate = !0),
            w.renderBufferDirect(Q, W, ee, X, A, ve),
            (X.side = cn))
          : w.renderBufferDirect(Q, W, ee, X, A, ve),
        A.onAfterRender(w, W, Q, ee, X, ve);
    }
    function Cs(A, W, Q) {
      W.isScene !== !0 && (W = ge);
      const ee = ce.get(A),
        X = _.state.lights,
        ve = _.state.shadowsArray,
        we = X.state.version,
        De = te.getParameters(A, X.state, ve, W, Q),
        Ce = te.getProgramCacheKey(De);
      let ke = ee.programs;
      (ee.environment = A.isMeshStandardMaterial ? W.environment : null),
        (ee.fog = W.fog),
        (ee.envMap = (A.isMeshStandardMaterial ? v : P).get(
          A.envMap || ee.environment
        )),
        (ee.envMapRotation =
          ee.environment !== null && A.envMap === null
            ? W.environmentRotation
            : A.envMapRotation),
        ke === void 0 &&
          (A.addEventListener("dispose", qe),
          (ke = new Map()),
          (ee.programs = ke));
      let He = ke.get(Ce);
      if (He !== void 0) {
        if (ee.currentProgram === He && ee.lightsStateVersion === we)
          return ko(A, De), He;
      } else
        (De.uniforms = te.getUniforms(A)),
          A.onBeforeCompile(De, w),
          (He = te.acquireProgram(De, Ce)),
          ke.set(Ce, He),
          (ee.uniforms = De.uniforms);
      const Fe = ee.uniforms;
      return (
        ((!A.isShaderMaterial && !A.isRawShaderMaterial) ||
          A.clipping === !0) &&
          (Fe.clippingPlanes = Pe.uniform),
        ko(A, De),
        (ee.needsLights = ph(A)),
        (ee.lightsStateVersion = we),
        ee.needsLights &&
          ((Fe.ambientLightColor.value = X.state.ambient),
          (Fe.lightProbe.value = X.state.probe),
          (Fe.directionalLights.value = X.state.directional),
          (Fe.directionalLightShadows.value = X.state.directionalShadow),
          (Fe.spotLights.value = X.state.spot),
          (Fe.spotLightShadows.value = X.state.spotShadow),
          (Fe.rectAreaLights.value = X.state.rectArea),
          (Fe.ltc_1.value = X.state.rectAreaLTC1),
          (Fe.ltc_2.value = X.state.rectAreaLTC2),
          (Fe.pointLights.value = X.state.point),
          (Fe.pointLightShadows.value = X.state.pointShadow),
          (Fe.hemisphereLights.value = X.state.hemi),
          (Fe.directionalShadowMap.value = X.state.directionalShadowMap),
          (Fe.directionalShadowMatrix.value = X.state.directionalShadowMatrix),
          (Fe.spotShadowMap.value = X.state.spotShadowMap),
          (Fe.spotLightMatrix.value = X.state.spotLightMatrix),
          (Fe.spotLightMap.value = X.state.spotLightMap),
          (Fe.pointShadowMap.value = X.state.pointShadowMap),
          (Fe.pointShadowMatrix.value = X.state.pointShadowMatrix)),
        (ee.currentProgram = He),
        (ee.uniformsList = null),
        He
      );
    }
    function Bo(A) {
      if (A.uniformsList === null) {
        const W = A.currentProgram.getUniforms();
        A.uniformsList = ur.seqWithValue(W.seq, A.uniforms);
      }
      return A.uniformsList;
    }
    function ko(A, W) {
      const Q = ce.get(A);
      (Q.outputColorSpace = W.outputColorSpace),
        (Q.batching = W.batching),
        (Q.batchingColor = W.batchingColor),
        (Q.instancing = W.instancing),
        (Q.instancingColor = W.instancingColor),
        (Q.instancingMorph = W.instancingMorph),
        (Q.skinning = W.skinning),
        (Q.morphTargets = W.morphTargets),
        (Q.morphNormals = W.morphNormals),
        (Q.morphColors = W.morphColors),
        (Q.morphTargetsCount = W.morphTargetsCount),
        (Q.numClippingPlanes = W.numClippingPlanes),
        (Q.numIntersection = W.numClipIntersection),
        (Q.vertexAlphas = W.vertexAlphas),
        (Q.vertexTangents = W.vertexTangents),
        (Q.toneMapping = W.toneMapping);
    }
    function fh(A, W, Q, ee, X) {
      W.isScene !== !0 && (W = ge), be.resetTextureUnits();
      const ve = W.fog,
        we = ee.isMeshStandardMaterial ? W.environment : null,
        De =
          M === null
            ? w.outputColorSpace
            : M.isXRRenderTarget === !0
            ? M.texture.colorSpace
            : wt,
        Ce = (ee.isMeshStandardMaterial ? v : P).get(ee.envMap || we),
        ke =
          ee.vertexColors === !0 &&
          !!Q.attributes.color &&
          Q.attributes.color.itemSize === 4,
        He = !!Q.attributes.tangent && (!!ee.normalMap || ee.anisotropy > 0),
        Fe = !!Q.morphAttributes.position,
        Qe = !!Q.morphAttributes.normal,
        at = !!Q.morphAttributes.color;
      let mt = Wn;
      ee.toneMapped &&
        (M === null || M.isXRRenderTarget === !0) &&
        (mt = w.toneMapping);
      const xt =
          Q.morphAttributes.position ||
          Q.morphAttributes.normal ||
          Q.morphAttributes.color,
        lt = xt !== void 0 ? xt.length : 0,
        Oe = ce.get(ee),
        ut = _.state.lights;
      if (b === !0 && (q === !0 || A !== V)) {
        const Rt = A === V && ee.id === U;
        Pe.setState(ee, A, Rt);
      }
      let nt = !1;
      ee.version === Oe.__version
        ? ((Oe.needsLights && Oe.lightsStateVersion !== ut.state.version) ||
            Oe.outputColorSpace !== De ||
            (X.isBatchedMesh && Oe.batching === !1) ||
            (!X.isBatchedMesh && Oe.batching === !0) ||
            (X.isBatchedMesh &&
              Oe.batchingColor === !0 &&
              X.colorTexture === null) ||
            (X.isBatchedMesh &&
              Oe.batchingColor === !1 &&
              X.colorTexture !== null) ||
            (X.isInstancedMesh && Oe.instancing === !1) ||
            (!X.isInstancedMesh && Oe.instancing === !0) ||
            (X.isSkinnedMesh && Oe.skinning === !1) ||
            (!X.isSkinnedMesh && Oe.skinning === !0) ||
            (X.isInstancedMesh &&
              Oe.instancingColor === !0 &&
              X.instanceColor === null) ||
            (X.isInstancedMesh &&
              Oe.instancingColor === !1 &&
              X.instanceColor !== null) ||
            (X.isInstancedMesh &&
              Oe.instancingMorph === !0 &&
              X.morphTexture === null) ||
            (X.isInstancedMesh &&
              Oe.instancingMorph === !1 &&
              X.morphTexture !== null) ||
            Oe.envMap !== Ce ||
            (ee.fog === !0 && Oe.fog !== ve) ||
            (Oe.numClippingPlanes !== void 0 &&
              (Oe.numClippingPlanes !== Pe.numPlanes ||
                Oe.numIntersection !== Pe.numIntersection)) ||
            Oe.vertexAlphas !== ke ||
            Oe.vertexTangents !== He ||
            Oe.morphTargets !== Fe ||
            Oe.morphNormals !== Qe ||
            Oe.morphColors !== at ||
            Oe.toneMapping !== mt ||
            Oe.morphTargetsCount !== lt) &&
          (nt = !0)
        : ((nt = !0), (Oe.__version = ee.version));
      let zt = Oe.currentProgram;
      nt === !0 && (zt = Cs(ee, W, X));
      let ui = !1,
        Vt = !1,
        Yi = !1;
      const ft = zt.getUniforms(),
        Nt = Oe.uniforms;
      if (
        (C.useProgram(zt.program) && ((ui = !0), (Vt = !0), (Yi = !0)),
        ee.id !== U && ((U = ee.id), (Vt = !0)),
        ui || V !== A)
      ) {
        C.buffers.depth.getReversed() &&
          A.reversedDepth !== !0 &&
          ((A._reversedDepth = !0), A.updateProjectionMatrix()),
          ft.setValue(y, "projectionMatrix", A.projectionMatrix),
          ft.setValue(y, "viewMatrix", A.matrixWorldInverse);
        const Ut = ft.map.cameraPosition;
        Ut !== void 0 && Ut.setValue(y, H.setFromMatrixPosition(A.matrixWorld)),
          D.logarithmicDepthBuffer &&
            ft.setValue(
              y,
              "logDepthBufFC",
              2 / (Math.log(A.far + 1) / Math.LN2)
            ),
          (ee.isMeshPhongMaterial ||
            ee.isMeshToonMaterial ||
            ee.isMeshLambertMaterial ||
            ee.isMeshBasicMaterial ||
            ee.isMeshStandardMaterial ||
            ee.isShaderMaterial) &&
            ft.setValue(y, "isOrthographic", A.isOrthographicCamera === !0),
          V !== A && ((V = A), (Vt = !0), (Yi = !0));
      }
      if (X.isSkinnedMesh) {
        ft.setOptional(y, X, "bindMatrix"),
          ft.setOptional(y, X, "bindMatrixInverse");
        const Rt = X.skeleton;
        Rt &&
          (Rt.boneTexture === null && Rt.computeBoneTexture(),
          ft.setValue(y, "boneTexture", Rt.boneTexture, be));
      }
      X.isBatchedMesh &&
        (ft.setOptional(y, X, "batchingTexture"),
        ft.setValue(y, "batchingTexture", X._matricesTexture, be),
        ft.setOptional(y, X, "batchingIdTexture"),
        ft.setValue(y, "batchingIdTexture", X._indirectTexture, be),
        ft.setOptional(y, X, "batchingColorTexture"),
        X._colorsTexture !== null &&
          ft.setValue(y, "batchingColorTexture", X._colorsTexture, be));
      const Xt = Q.morphAttributes;
      if (
        ((Xt.position !== void 0 ||
          Xt.normal !== void 0 ||
          Xt.color !== void 0) &&
          ze.update(X, Q, zt),
        (Vt || Oe.receiveShadow !== X.receiveShadow) &&
          ((Oe.receiveShadow = X.receiveShadow),
          ft.setValue(y, "receiveShadow", X.receiveShadow)),
        ee.isMeshGouraudMaterial &&
          ee.envMap !== null &&
          ((Nt.envMap.value = Ce),
          (Nt.flipEnvMap.value =
            Ce.isCubeTexture && Ce.isRenderTargetTexture === !1 ? -1 : 1)),
        ee.isMeshStandardMaterial &&
          ee.envMap === null &&
          W.environment !== null &&
          (Nt.envMapIntensity.value = W.environmentIntensity),
        Nt.dfgLUT !== void 0 && (Nt.dfgLUT.value = rg()),
        Vt &&
          (ft.setValue(y, "toneMappingExposure", w.toneMappingExposure),
          Oe.needsLights && dh(Nt, Yi),
          ve && ee.fog === !0 && Le.refreshFogUniforms(Nt, ve),
          Le.refreshMaterialUniforms(
            Nt,
            ee,
            pe,
            de,
            _.state.transmissionRenderTarget[A.id]
          ),
          ur.upload(y, Bo(Oe), Nt, be)),
        ee.isShaderMaterial &&
          ee.uniformsNeedUpdate === !0 &&
          (ur.upload(y, Bo(Oe), Nt, be), (ee.uniformsNeedUpdate = !1)),
        ee.isSpriteMaterial && ft.setValue(y, "center", X.center),
        ft.setValue(y, "modelViewMatrix", X.modelViewMatrix),
        ft.setValue(y, "normalMatrix", X.normalMatrix),
        ft.setValue(y, "modelMatrix", X.matrixWorld),
        ee.isShaderMaterial || ee.isRawShaderMaterial)
      ) {
        const Rt = ee.uniformsGroups;
        for (let Ut = 0, Tr = Rt.length; Ut < Tr; Ut++) {
          const jn = Rt[Ut];
          Ee.update(jn, zt), Ee.bind(jn, zt);
        }
      }
      return zt;
    }
    function dh(A, W) {
      (A.ambientLightColor.needsUpdate = W),
        (A.lightProbe.needsUpdate = W),
        (A.directionalLights.needsUpdate = W),
        (A.directionalLightShadows.needsUpdate = W),
        (A.pointLights.needsUpdate = W),
        (A.pointLightShadows.needsUpdate = W),
        (A.spotLights.needsUpdate = W),
        (A.spotLightShadows.needsUpdate = W),
        (A.rectAreaLights.needsUpdate = W),
        (A.hemisphereLights.needsUpdate = W);
    }
    function ph(A) {
      return (
        A.isMeshLambertMaterial ||
        A.isMeshToonMaterial ||
        A.isMeshPhongMaterial ||
        A.isMeshStandardMaterial ||
        A.isShadowMaterial ||
        (A.isShaderMaterial && A.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return N;
    }),
      (this.getActiveMipmapLevel = function () {
        return E;
      }),
      (this.getRenderTarget = function () {
        return M;
      }),
      (this.setRenderTargetTextures = function (A, W, Q) {
        const ee = ce.get(A);
        (ee.__autoAllocateDepthBuffer = A.resolveDepthBuffer === !1),
          ee.__autoAllocateDepthBuffer === !1 && (ee.__useRenderToTexture = !1),
          (ce.get(A.texture).__webglTexture = W),
          (ce.get(A.depthTexture).__webglTexture = ee.__autoAllocateDepthBuffer
            ? void 0
            : Q),
          (ee.__hasExternalTextures = !0);
      }),
      (this.setRenderTargetFramebuffer = function (A, W) {
        const Q = ce.get(A);
        (Q.__webglFramebuffer = W), (Q.__useDefaultFramebuffer = W === void 0);
      });
    const mh = y.createFramebuffer();
    (this.setRenderTarget = function (A, W = 0, Q = 0) {
      (M = A), (N = W), (E = Q);
      let ee = !0,
        X = null,
        ve = !1,
        we = !1;
      if (A) {
        const Ce = ce.get(A);
        if (Ce.__useDefaultFramebuffer !== void 0)
          C.bindFramebuffer(y.FRAMEBUFFER, null), (ee = !1);
        else if (Ce.__webglFramebuffer === void 0) be.setupRenderTarget(A);
        else if (Ce.__hasExternalTextures)
          be.rebindTextures(
            A,
            ce.get(A.texture).__webglTexture,
            ce.get(A.depthTexture).__webglTexture
          );
        else if (A.depthBuffer) {
          const Fe = A.depthTexture;
          if (Ce.__boundDepthTexture !== Fe) {
            if (
              Fe !== null &&
              ce.has(Fe) &&
              (A.width !== Fe.image.width || A.height !== Fe.image.height)
            )
              throw new Error(
                "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."
              );
            be.setupDepthRenderbuffer(A);
          }
        }
        const ke = A.texture;
        (ke.isData3DTexture ||
          ke.isDataArrayTexture ||
          ke.isCompressedArrayTexture) &&
          (we = !0);
        const He = ce.get(A).__webglFramebuffer;
        A.isWebGLCubeRenderTarget
          ? (Array.isArray(He[W]) ? (X = He[W][Q]) : (X = He[W]), (ve = !0))
          : A.samples > 0 && be.useMultisampledRTT(A) === !1
          ? (X = ce.get(A).__webglMultisampledFramebuffer)
          : Array.isArray(He)
          ? (X = He[Q])
          : (X = He),
          K.copy(A.viewport),
          Z.copy(A.scissor),
          (ne = A.scissorTest);
      } else
        K.copy(Ke).multiplyScalar(pe).floor(),
          Z.copy(Y).multiplyScalar(pe).floor(),
          (ne = O);
      if (
        (Q !== 0 && (X = mh),
        C.bindFramebuffer(y.FRAMEBUFFER, X) && ee && C.drawBuffers(A, X),
        C.viewport(K),
        C.scissor(Z),
        C.setScissorTest(ne),
        ve)
      ) {
        const Ce = ce.get(A.texture);
        y.framebufferTexture2D(
          y.FRAMEBUFFER,
          y.COLOR_ATTACHMENT0,
          y.TEXTURE_CUBE_MAP_POSITIVE_X + W,
          Ce.__webglTexture,
          Q
        );
      } else if (we) {
        const Ce = W;
        for (let ke = 0; ke < A.textures.length; ke++) {
          const He = ce.get(A.textures[ke]);
          y.framebufferTextureLayer(
            y.FRAMEBUFFER,
            y.COLOR_ATTACHMENT0 + ke,
            He.__webglTexture,
            Q,
            Ce
          );
        }
      } else if (A !== null && Q !== 0) {
        const Ce = ce.get(A.texture);
        y.framebufferTexture2D(
          y.FRAMEBUFFER,
          y.COLOR_ATTACHMENT0,
          y.TEXTURE_2D,
          Ce.__webglTexture,
          Q
        );
      }
      U = -1;
    }),
      (this.readRenderTargetPixels = function (A, W, Q, ee, X, ve, we, De = 0) {
        if (!(A && A.isWebGLRenderTarget)) {
          Je(
            "WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let Ce = ce.get(A).__webglFramebuffer;
        if ((A.isWebGLCubeRenderTarget && we !== void 0 && (Ce = Ce[we]), Ce)) {
          C.bindFramebuffer(y.FRAMEBUFFER, Ce);
          try {
            const ke = A.textures[De],
              He = ke.format,
              Fe = ke.type;
            if (!D.textureFormatReadable(He)) {
              Je(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            if (!D.textureTypeReadable(Fe)) {
              Je(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            W >= 0 &&
              W <= A.width - ee &&
              Q >= 0 &&
              Q <= A.height - X &&
              (A.textures.length > 1 && y.readBuffer(y.COLOR_ATTACHMENT0 + De),
              y.readPixels(W, Q, ee, X, Xe.convert(He), Xe.convert(Fe), ve));
          } finally {
            const ke = M !== null ? ce.get(M).__webglFramebuffer : null;
            C.bindFramebuffer(y.FRAMEBUFFER, ke);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        A,
        W,
        Q,
        ee,
        X,
        ve,
        we,
        De = 0
      ) {
        if (!(A && A.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let Ce = ce.get(A).__webglFramebuffer;
        if ((A.isWebGLCubeRenderTarget && we !== void 0 && (Ce = Ce[we]), Ce))
          if (W >= 0 && W <= A.width - ee && Q >= 0 && Q <= A.height - X) {
            C.bindFramebuffer(y.FRAMEBUFFER, Ce);
            const ke = A.textures[De],
              He = ke.format,
              Fe = ke.type;
            if (!D.textureFormatReadable(He))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
              );
            if (!D.textureTypeReadable(Fe))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            const Qe = y.createBuffer();
            y.bindBuffer(y.PIXEL_PACK_BUFFER, Qe),
              y.bufferData(y.PIXEL_PACK_BUFFER, ve.byteLength, y.STREAM_READ),
              A.textures.length > 1 && y.readBuffer(y.COLOR_ATTACHMENT0 + De),
              y.readPixels(W, Q, ee, X, Xe.convert(He), Xe.convert(Fe), 0);
            const at = M !== null ? ce.get(M).__webglFramebuffer : null;
            C.bindFramebuffer(y.FRAMEBUFFER, at);
            const mt = y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              y.flush(),
              await cu(y, mt, 4),
              y.bindBuffer(y.PIXEL_PACK_BUFFER, Qe),
              y.getBufferSubData(y.PIXEL_PACK_BUFFER, 0, ve),
              y.deleteBuffer(Qe),
              y.deleteSync(mt),
              ve
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range."
            );
      }),
      (this.copyFramebufferToTexture = function (A, W = null, Q = 0) {
        const ee = Math.pow(2, -Q),
          X = Math.floor(A.image.width * ee),
          ve = Math.floor(A.image.height * ee),
          we = W !== null ? W.x : 0,
          De = W !== null ? W.y : 0;
        be.setTexture2D(A, 0),
          y.copyTexSubImage2D(y.TEXTURE_2D, Q, 0, 0, we, De, X, ve),
          C.unbindTexture();
      });
    const xh = y.createFramebuffer(),
      gh = y.createFramebuffer();
    (this.copyTextureToTexture = function (
      A,
      W,
      Q = null,
      ee = null,
      X = 0,
      ve = null
    ) {
      ve === null &&
        (X !== 0
          ? (ys(
              "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."
            ),
            (ve = X),
            (X = 0))
          : (ve = 0));
      let we, De, Ce, ke, He, Fe, Qe, at, mt;
      const xt = A.isCompressedTexture ? A.mipmaps[ve] : A.image;
      if (Q !== null)
        (we = Q.max.x - Q.min.x),
          (De = Q.max.y - Q.min.y),
          (Ce = Q.isBox3 ? Q.max.z - Q.min.z : 1),
          (ke = Q.min.x),
          (He = Q.min.y),
          (Fe = Q.isBox3 ? Q.min.z : 0);
      else {
        const Xt = Math.pow(2, -X);
        (we = Math.floor(xt.width * Xt)),
          (De = Math.floor(xt.height * Xt)),
          A.isDataArrayTexture
            ? (Ce = xt.depth)
            : A.isData3DTexture
            ? (Ce = Math.floor(xt.depth * Xt))
            : (Ce = 1),
          (ke = 0),
          (He = 0),
          (Fe = 0);
      }
      ee !== null
        ? ((Qe = ee.x), (at = ee.y), (mt = ee.z))
        : ((Qe = 0), (at = 0), (mt = 0));
      const lt = Xe.convert(W.format),
        Oe = Xe.convert(W.type);
      let ut;
      W.isData3DTexture
        ? (be.setTexture3D(W, 0), (ut = y.TEXTURE_3D))
        : W.isDataArrayTexture || W.isCompressedArrayTexture
        ? (be.setTexture2DArray(W, 0), (ut = y.TEXTURE_2D_ARRAY))
        : (be.setTexture2D(W, 0), (ut = y.TEXTURE_2D)),
        y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL, W.flipY),
        y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL, W.premultiplyAlpha),
        y.pixelStorei(y.UNPACK_ALIGNMENT, W.unpackAlignment);
      const nt = y.getParameter(y.UNPACK_ROW_LENGTH),
        zt = y.getParameter(y.UNPACK_IMAGE_HEIGHT),
        ui = y.getParameter(y.UNPACK_SKIP_PIXELS),
        Vt = y.getParameter(y.UNPACK_SKIP_ROWS),
        Yi = y.getParameter(y.UNPACK_SKIP_IMAGES);
      y.pixelStorei(y.UNPACK_ROW_LENGTH, xt.width),
        y.pixelStorei(y.UNPACK_IMAGE_HEIGHT, xt.height),
        y.pixelStorei(y.UNPACK_SKIP_PIXELS, ke),
        y.pixelStorei(y.UNPACK_SKIP_ROWS, He),
        y.pixelStorei(y.UNPACK_SKIP_IMAGES, Fe);
      const ft = A.isDataArrayTexture || A.isData3DTexture,
        Nt = W.isDataArrayTexture || W.isData3DTexture;
      if (A.isDepthTexture) {
        const Xt = ce.get(A),
          Rt = ce.get(W),
          Ut = ce.get(Xt.__renderTarget),
          Tr = ce.get(Rt.__renderTarget);
        C.bindFramebuffer(y.READ_FRAMEBUFFER, Ut.__webglFramebuffer),
          C.bindFramebuffer(y.DRAW_FRAMEBUFFER, Tr.__webglFramebuffer);
        for (let jn = 0; jn < Ce; jn++)
          ft &&
            (y.framebufferTextureLayer(
              y.READ_FRAMEBUFFER,
              y.COLOR_ATTACHMENT0,
              ce.get(A).__webglTexture,
              X,
              Fe + jn
            ),
            y.framebufferTextureLayer(
              y.DRAW_FRAMEBUFFER,
              y.COLOR_ATTACHMENT0,
              ce.get(W).__webglTexture,
              ve,
              mt + jn
            )),
            y.blitFramebuffer(
              ke,
              He,
              we,
              De,
              Qe,
              at,
              we,
              De,
              y.DEPTH_BUFFER_BIT,
              y.NEAREST
            );
        C.bindFramebuffer(y.READ_FRAMEBUFFER, null),
          C.bindFramebuffer(y.DRAW_FRAMEBUFFER, null);
      } else if (X !== 0 || A.isRenderTargetTexture || ce.has(A)) {
        const Xt = ce.get(A),
          Rt = ce.get(W);
        C.bindFramebuffer(y.READ_FRAMEBUFFER, xh),
          C.bindFramebuffer(y.DRAW_FRAMEBUFFER, gh);
        for (let Ut = 0; Ut < Ce; Ut++)
          ft
            ? y.framebufferTextureLayer(
                y.READ_FRAMEBUFFER,
                y.COLOR_ATTACHMENT0,
                Xt.__webglTexture,
                X,
                Fe + Ut
              )
            : y.framebufferTexture2D(
                y.READ_FRAMEBUFFER,
                y.COLOR_ATTACHMENT0,
                y.TEXTURE_2D,
                Xt.__webglTexture,
                X
              ),
            Nt
              ? y.framebufferTextureLayer(
                  y.DRAW_FRAMEBUFFER,
                  y.COLOR_ATTACHMENT0,
                  Rt.__webglTexture,
                  ve,
                  mt + Ut
                )
              : y.framebufferTexture2D(
                  y.DRAW_FRAMEBUFFER,
                  y.COLOR_ATTACHMENT0,
                  y.TEXTURE_2D,
                  Rt.__webglTexture,
                  ve
                ),
            X !== 0
              ? y.blitFramebuffer(
                  ke,
                  He,
                  we,
                  De,
                  Qe,
                  at,
                  we,
                  De,
                  y.COLOR_BUFFER_BIT,
                  y.NEAREST
                )
              : Nt
              ? y.copyTexSubImage3D(ut, ve, Qe, at, mt + Ut, ke, He, we, De)
              : y.copyTexSubImage2D(ut, ve, Qe, at, ke, He, we, De);
        C.bindFramebuffer(y.READ_FRAMEBUFFER, null),
          C.bindFramebuffer(y.DRAW_FRAMEBUFFER, null);
      } else
        Nt
          ? A.isDataTexture || A.isData3DTexture
            ? y.texSubImage3D(ut, ve, Qe, at, mt, we, De, Ce, lt, Oe, xt.data)
            : W.isCompressedArrayTexture
            ? y.compressedTexSubImage3D(
                ut,
                ve,
                Qe,
                at,
                mt,
                we,
                De,
                Ce,
                lt,
                xt.data
              )
            : y.texSubImage3D(ut, ve, Qe, at, mt, we, De, Ce, lt, Oe, xt)
          : A.isDataTexture
          ? y.texSubImage2D(y.TEXTURE_2D, ve, Qe, at, we, De, lt, Oe, xt.data)
          : A.isCompressedTexture
          ? y.compressedTexSubImage2D(
              y.TEXTURE_2D,
              ve,
              Qe,
              at,
              xt.width,
              xt.height,
              lt,
              xt.data
            )
          : y.texSubImage2D(y.TEXTURE_2D, ve, Qe, at, we, De, lt, Oe, xt);
      y.pixelStorei(y.UNPACK_ROW_LENGTH, nt),
        y.pixelStorei(y.UNPACK_IMAGE_HEIGHT, zt),
        y.pixelStorei(y.UNPACK_SKIP_PIXELS, ui),
        y.pixelStorei(y.UNPACK_SKIP_ROWS, Vt),
        y.pixelStorei(y.UNPACK_SKIP_IMAGES, Yi),
        ve === 0 && W.generateMipmaps && y.generateMipmap(ut),
        C.unbindTexture();
    }),
      (this.initRenderTarget = function (A) {
        ce.get(A).__webglFramebuffer === void 0 && be.setupRenderTarget(A);
      }),
      (this.initTexture = function (A) {
        A.isCubeTexture
          ? be.setTextureCube(A, 0)
          : A.isData3DTexture
          ? be.setTexture3D(A, 0)
          : A.isDataArrayTexture || A.isCompressedArrayTexture
          ? be.setTexture2DArray(A, 0)
          : be.setTexture2D(A, 0),
          C.unbindTexture();
      }),
      (this.resetState = function () {
        (N = 0), (E = 0), (M = null), C.reset(), B.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return hn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = et._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = et._getUnpackColorSpace());
  }
}
function cl(s, e) {
  if (e === Zh)
    return (
      console.warn(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
      ),
      s
    );
  if (e === $a || e === El) {
    let t = s.getIndex();
    if (t === null) {
      const a = [],
        o = s.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++) a.push(c);
        s.setIndex(a), (t = s.getIndex());
      } else
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
          ),
          s
        );
    }
    const n = t.count - 2,
      i = [];
    if (e === $a)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0
          ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2)))
          : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n &&
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
      );
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        e
      ),
      s
    );
}
class i_ extends qn {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (t) {
        return new hg(t);
      }),
      this.register(function (t) {
        return new ug(t);
      }),
      this.register(function (t) {
        return new yg(t);
      }),
      this.register(function (t) {
        return new bg(t);
      }),
      this.register(function (t) {
        return new Mg(t);
      }),
      this.register(function (t) {
        return new dg(t);
      }),
      this.register(function (t) {
        return new pg(t);
      }),
      this.register(function (t) {
        return new mg(t);
      }),
      this.register(function (t) {
        return new xg(t);
      }),
      this.register(function (t) {
        return new lg(t);
      }),
      this.register(function (t) {
        return new gg(t);
      }),
      this.register(function (t) {
        return new fg(t);
      }),
      this.register(function (t) {
        return new vg(t);
      }),
      this.register(function (t) {
        return new _g(t);
      }),
      this.register(function (t) {
        return new og(t);
      }),
      this.register(function (t) {
        return new Sg(t);
      }),
      this.register(function (t) {
        return new Tg(t);
      });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "") a = this.resourcePath;
    else if (this.path !== "") {
      const l = fs.extractUrlBase(e);
      a = fs.resolveURL(l, this.path);
    } else a = fs.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function (l) {
        i ? i(l) : console.error(l),
          r.manager.itemError(e),
          r.manager.itemEnd(e);
      },
      c = new Ts(this.manager);
    c.setPath(this.path),
      c.setResponseType("arraybuffer"),
      c.setRequestHeader(this.requestHeader),
      c.setWithCredentials(this.withCredentials),
      c.load(
        e,
        function (l) {
          try {
            r.parse(
              l,
              a,
              function (h) {
                t(h), r.manager.itemEnd(e);
              },
              o
            );
          } catch (h) {
            o(h);
          }
        },
        n,
        o
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, i) {
    let r;
    const a = {},
      o = {},
      c = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === oh) {
        try {
          a[$e.KHR_BINARY_GLTF] = new Eg(e);
        } catch (u) {
          i && i(u);
          return;
        }
        r = JSON.parse(a[$e.KHR_BINARY_GLTF].content);
      } else r = JSON.parse(c.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i &&
        i(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
          )
        );
      return;
    }
    const l = new Bg(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](l);
      u.name ||
        console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
        (o[u.name] = u),
        (a[u.name] = !0);
    }
    if (r.extensionsUsed)
      for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const u = r.extensionsUsed[h],
          f = r.extensionsRequired || [];
        switch (u) {
          case $e.KHR_MATERIALS_UNLIT:
            a[u] = new cg();
            break;
          case $e.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new Ag(r, this.dracoLoader);
            break;
          case $e.KHR_TEXTURE_TRANSFORM:
            a[u] = new wg();
            break;
          case $e.KHR_MESH_QUANTIZATION:
            a[u] = new Rg();
            break;
          default:
            f.indexOf(u) >= 0 &&
              o[u] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function ag() {
  let s = {};
  return {
    get: function (e) {
      return s[e];
    },
    add: function (e, t) {
      s[e] = t;
    },
    remove: function (e) {
      delete s[e];
    },
    removeAll: function () {
      s = {};
    },
  };
}
const $e = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class og {
  constructor(e) {
    (this.parser = e),
      (this.name = $e.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions &&
        r.extensions[this.name] &&
        r.extensions[this.name].light !== void 0 &&
        e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json,
      c = (((r.extensions && r.extensions[this.name]) || {}).lights || [])[e];
    let l;
    const h = new We(16777215);
    c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], wt);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        (l = new ad(h)), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        (l = new sd(h)), (l.distance = u);
        break;
      case "spot":
        (l = new nd(h)),
          (l.distance = u),
          (c.spot = c.spot || {}),
          (c.spot.innerConeAngle =
            c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0),
          (c.spot.outerConeAngle =
            c.spot.outerConeAngle !== void 0
              ? c.spot.outerConeAngle
              : Math.PI / 4),
          (l.angle = c.spot.outerConeAngle),
          (l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle),
          l.target.position.set(0, 0, -1),
          l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return (
      l.position.set(0, 0, 0),
      an(l, c),
      c.intensity !== void 0 && (l.intensity = c.intensity),
      (l.name = t.createUniqueName(c.name || "light_" + e)),
      (i = Promise.resolve(l)),
      t.cache.add(n, i),
      i
    );
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this,
      n = this.parser,
      r = n.json.nodes[e],
      o = ((r.extensions && r.extensions[this.name]) || {}).light;
    return o === void 0
      ? null
      : this._loadLight(o).then(function (c) {
          return n._getNodeRef(t.cache, o, c);
        });
  }
}
class cg {
  constructor() {
    this.name = $e.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ri;
  }
  extendParams(e, t, n) {
    const i = [];
    (e.color = new We(1, 1, 1)), (e.opacity = 1);
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], wt), (e.opacity = a[3]);
      }
      r.baseColorTexture !== void 0 &&
        i.push(n.assignTexture(e, "map", r.baseColorTexture, gt));
    }
    return Promise.all(i);
  }
}
class lg {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class hg {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : _n;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    if (
      (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor),
      a.clearcoatTexture !== void 0 &&
        r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
      a.clearcoatRoughnessFactor !== void 0 &&
        (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
      a.clearcoatRoughnessTexture !== void 0 &&
        r.push(
          n.assignTexture(
            t,
            "clearcoatRoughnessMap",
            a.clearcoatRoughnessTexture
          )
        ),
      a.clearcoatNormalTexture !== void 0 &&
        (r.push(
          n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)
        ),
        a.clearcoatNormalTexture.scale !== void 0))
    ) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new oe(o, o);
    }
    return Promise.all(r);
  }
}
class ug {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_MATERIALS_DISPERSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : _n;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return (
      (t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0),
      Promise.resolve()
    );
  }
}
class fg {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : _n;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor),
      a.iridescenceTexture !== void 0 &&
        r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)),
      a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor),
      t.iridescenceThicknessRange === void 0 &&
        (t.iridescenceThicknessRange = [100, 400]),
      a.iridescenceThicknessMinimum !== void 0 &&
        (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
      a.iridescenceThicknessMaximum !== void 0 &&
        (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
      a.iridescenceThicknessTexture !== void 0 &&
        r.push(
          n.assignTexture(
            t,
            "iridescenceThicknessMap",
            a.iridescenceThicknessTexture
          )
        ),
      Promise.all(r)
    );
  }
}
class dg {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : _n;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    (t.sheenColor = new We(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], wt);
    }
    return (
      a.sheenRoughnessFactor !== void 0 &&
        (t.sheenRoughness = a.sheenRoughnessFactor),
      a.sheenColorTexture !== void 0 &&
        r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, gt)),
      a.sheenRoughnessTexture !== void 0 &&
        r.push(
          n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)
        ),
      Promise.all(r)
    );
  }
}
class pg {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : _n;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.transmissionFactor !== void 0 &&
        (t.transmission = a.transmissionFactor),
      a.transmissionTexture !== void 0 &&
        r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)),
      Promise.all(r)
    );
  }
}
class mg {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : _n;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    (t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0),
      a.thicknessTexture !== void 0 &&
        r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)),
      (t.attenuationDistance = a.attenuationDistance || 1 / 0);
    const o = a.attenuationColor || [1, 1, 1];
    return (
      (t.attenuationColor = new We().setRGB(o[0], o[1], o[2], wt)),
      Promise.all(r)
    );
  }
}
class xg {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : _n;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return (t.ior = r.ior !== void 0 ? r.ior : 1.5), Promise.resolve();
  }
}
class gg {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : _n;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    (t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1),
      a.specularTexture !== void 0 &&
        r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new We().setRGB(o[0], o[1], o[2], wt)),
      a.specularColorTexture !== void 0 &&
        r.push(
          n.assignTexture(t, "specularColorMap", a.specularColorTexture, gt)
        ),
      Promise.all(r)
    );
  }
}
class _g {
  constructor(e) {
    (this.parser = e), (this.name = $e.EXT_MATERIALS_BUMP);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : _n;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      (t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1),
      a.bumpTexture !== void 0 &&
        r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)),
      Promise.all(r)
    );
  }
}
class vg {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_MATERIALS_ANISOTROPY);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : _n;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength),
      a.anisotropyRotation !== void 0 &&
        (t.anisotropyRotation = a.anisotropyRotation),
      a.anisotropyTexture !== void 0 &&
        r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)),
      Promise.all(r)
    );
  }
}
class yg {
  constructor(e) {
    (this.parser = e), (this.name = $e.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const t = this.parser,
      n = t.json,
      i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name],
      a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
        );
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class bg {
  constructor(e) {
    (this.parser = e), (this.name = $e.EXT_TEXTURE_WEBP);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t],
      o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return n.loadTextureImage(e, a.source, c);
  }
}
class Mg {
  constructor(e) {
    (this.parser = e), (this.name = $e.EXT_TEXTURE_AVIF);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t],
      o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return n.loadTextureImage(e, a.source, c);
  }
}
class Sg {
  constructor(e) {
    (this.name = $e.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    const t = this.parser.json,
      n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name],
        r = this.parser.getDependency("buffer", i.buffer),
        a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (
          t.extensionsRequired &&
          t.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
          );
        return null;
      }
      return r.then(function (o) {
        const c = i.byteOffset || 0,
          l = i.byteLength || 0,
          h = i.count,
          u = i.byteStride,
          f = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync
          ? a
              .decodeGltfBufferAsync(h, u, f, i.mode, i.filter)
              .then(function (d) {
                return d.buffer;
              })
          : a.ready.then(function () {
              const d = new ArrayBuffer(h * u);
              return (
                a.decodeGltfBuffer(
                  new Uint8Array(d),
                  h,
                  u,
                  f,
                  i.mode,
                  i.filter
                ),
                d
              );
            });
      });
    } else return null;
  }
}
class Tg {
  constructor(e) {
    (this.name = $e.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (
        l.mode !== Yt.TRIANGLES &&
        l.mode !== Yt.TRIANGLE_STRIP &&
        l.mode !== Yt.TRIANGLE_FAN &&
        l.mode !== void 0
      )
        return null;
    const a = n.extensions[this.name].attributes,
      o = [],
      c = {};
    for (const l in a)
      o.push(
        this.parser
          .getDependency("accessor", a[l])
          .then((h) => ((c[l] = h), c[l]))
      );
    return o.length < 1
      ? null
      : (o.push(this.parser.createNodeMesh(e)),
        Promise.all(o).then((l) => {
          const h = l.pop(),
            u = h.isGroup ? h.children : [h],
            f = l[0].count,
            d = [];
          for (const x of u) {
            const g = new Ye(),
              m = new F(),
              p = new dn(),
              R = new F(1, 1, 1),
              _ = new $u(x.geometry, x.material, f);
            for (let S = 0; S < f; S++)
              c.TRANSLATION && m.fromBufferAttribute(c.TRANSLATION, S),
                c.ROTATION && p.fromBufferAttribute(c.ROTATION, S),
                c.SCALE && R.fromBufferAttribute(c.SCALE, S),
                _.setMatrixAt(S, g.compose(m, p, R));
            for (const S in c)
              if (S === "_COLOR_0") {
                const L = c[S];
                _.instanceColor = new eo(L.array, L.itemSize, L.normalized);
              } else
                S !== "TRANSLATION" &&
                  S !== "ROTATION" &&
                  S !== "SCALE" &&
                  x.geometry.setAttribute(S, c[S]);
            pt.prototype.copy.call(_, x),
              this.parser.assignFinalMaterial(_),
              d.push(_);
          }
          return h.isGroup ? (h.clear(), h.add(...d), h) : d[0];
        }));
  }
}
const oh = "glTF",
  is = 12,
  ll = { JSON: 1313821514, BIN: 5130562 };
class Eg {
  constructor(e) {
    (this.name = $e.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const t = new DataView(e, 0, is),
      n = new TextDecoder();
    if (
      ((this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== oh)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - is,
      r = new DataView(e, is);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, !0);
      a += 4;
      const c = r.getUint32(a, !0);
      if (((a += 4), c === ll.JSON)) {
        const l = new Uint8Array(e, is + a, o);
        this.content = n.decode(l);
      } else if (c === ll.BIN) {
        const l = is + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Ag {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = $e.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json,
      i = this.dracoLoader,
      r = e.extensions[this.name].bufferView,
      a = e.extensions[this.name].attributes,
      o = {},
      c = {},
      l = {};
    for (const h in a) {
      const u = ao[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = ao[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const f = n.accessors[e.attributes[h]],
          d = Di[f.componentType];
        (l[u] = d.name), (c[u] = f.normalized === !0);
      }
    }
    return t.getDependency("bufferView", r).then(function (h) {
      return new Promise(function (u, f) {
        i.decodeDracoFile(
          h,
          function (d) {
            for (const x in d.attributes) {
              const g = d.attributes[x],
                m = c[x];
              m !== void 0 && (g.normalized = m);
            }
            u(d);
          },
          o,
          l,
          wt,
          f
        );
      });
    });
  }
}
class wg {
  constructor() {
    this.name = $e.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      ((t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0) ||
        ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class Rg {
  constructor() {
    this.name = $e.KHR_MESH_QUANTIZATION;
  }
}
class ch extends ws {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i * 3 + i;
    for (let a = 0; a !== i; a++) t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = o * 2,
      l = o * 3,
      h = i - t,
      u = (n - t) / h,
      f = u * u,
      d = f * u,
      x = e * l,
      g = x - l,
      m = -2 * d + 3 * f,
      p = d - f,
      R = 1 - m,
      _ = p - f + u;
    for (let S = 0; S !== o; S++) {
      const L = a[g + S + o],
        w = a[g + S + c] * h,
        I = a[x + S + o],
        N = a[x + S] * h;
      r[S] = R * L + _ * w + m * I + p * N;
    }
    return r;
  }
}
const Cg = new dn();
class Pg extends ch {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return Cg.fromArray(r).normalize().toArray(r), r;
  }
}
const Yt = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
  },
  Di = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  hl = { 9728: Dt, 9729: It, 9984: _l, 9985: ar, 9986: ss, 9987: Rn },
  ul = { 33071: ln, 33648: fr, 10497: Oi },
  ca = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  ao = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  zn = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  Lg = { CUBICSPLINE: void 0, LINEAR: _s, STEP: gs },
  la = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function Ig(s) {
  return (
    s.DefaultMaterial === void 0 &&
      (s.DefaultMaterial = new Eo({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: In,
      })),
    s.DefaultMaterial
  );
}
function ni(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 &&
      ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
      (e.userData.gltfExtensions[n] = t.extensions[n]));
}
function an(s, e) {
  e.extras !== void 0 &&
    (typeof e.extras == "object"
      ? Object.assign(s.userData, e.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras
        ));
}
function Dg(s, e, t) {
  let n = !1,
    i = !1,
    r = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (
      (u.POSITION !== void 0 && (n = !0),
      u.NORMAL !== void 0 && (i = !0),
      u.COLOR_0 !== void 0 && (r = !0),
      n && i && r)
    )
      break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [],
    o = [],
    c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (n) {
      const f =
        u.POSITION !== void 0
          ? t.getDependency("accessor", u.POSITION)
          : s.attributes.position;
      a.push(f);
    }
    if (i) {
      const f =
        u.NORMAL !== void 0
          ? t.getDependency("accessor", u.NORMAL)
          : s.attributes.normal;
      o.push(f);
    }
    if (r) {
      const f =
        u.COLOR_0 !== void 0
          ? t.getDependency("accessor", u.COLOR_0)
          : s.attributes.color;
      c.push(f);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(c)]).then(
    function (l) {
      const h = l[0],
        u = l[1],
        f = l[2];
      return (
        n && (s.morphAttributes.position = h),
        i && (s.morphAttributes.normal = u),
        r && (s.morphAttributes.color = f),
        (s.morphTargetsRelative = !0),
        s
      );
    }
  );
}
function Ng(s, e) {
  if ((s.updateMorphTargets(), e.weights !== void 0))
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
      );
  }
}
function Ug(s) {
  let e;
  const t = s.extensions && s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];
  if (
    (t
      ? (e = "draco:" + t.bufferView + ":" + t.indices + ":" + ha(t.attributes))
      : (e = s.indices + ":" + ha(s.attributes) + ":" + s.mode),
    s.targets !== void 0)
  )
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + ha(s.targets[n]);
  return e;
}
function ha(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function oo(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}
function Fg(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0
    ? "image/webp"
    : s.search(/\.ktx2($|\?)/i) > 0 || s.search(/^data\:image\/ktx2/) === 0
    ? "image/ktx2"
    : "image/png";
}
const Og = new Ye();
class Bg {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new ag()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    let n = !1,
      i = -1,
      r = !1,
      a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const c = o.match(/Version\/(\d+)/);
      (i = n && c ? parseInt(c[1], 10) : -1),
        (r = o.indexOf("Firefox") > -1),
        (a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1);
    }
    typeof createImageBitmap > "u" || (n && i < 17) || (r && a < 98)
      ? (this.textureLoader = new ed(this.options.manager))
      : (this.textureLoader = new od(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new Ts(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this,
      i = this.json,
      r = this.extensions;
    this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (a) {
        return a._markDefs && a._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (a) {
          return a.beforeRoot && a.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([
            n.getDependencies("scene"),
            n.getDependencies("animation"),
            n.getDependencies("camera"),
          ]);
        })
        .then(function (a) {
          const o = {
            scene: a[0][i.scene || 0],
            scenes: a[0],
            animations: a[1],
            cameras: a[2],
            asset: i.asset,
            parser: n,
            userData: {},
          };
          return (
            ni(r, o, i),
            an(o, i),
            Promise.all(
              n._invokeAll(function (c) {
                return c.afterRoot && c.afterRoot(o);
              })
            ).then(function () {
              for (const c of o.scenes) c.updateMatrixWorld();
              e(o);
            })
          );
        })
        .catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++) e[a[o]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      a.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, a.mesh),
        a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)),
        a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 &&
      (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(),
      r = (a, o) => {
        const c = this.associations.get(a);
        c != null && this.associations.set(o, c);
        for (const [l, h] of a.children.entries()) r(h, o.children[l]);
      };
    return r(n, i), (i.name += "_instance_" + e.uses[t]++), i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function (r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function (r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function (r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function (r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function (r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function (r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (
            ((i = this._invokeOne(function (r) {
              return r != this && r.getDependency && r.getDependency(e, t);
            })),
            !i)
          )
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this,
        i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      (t = Promise.all(
        i.map(function (r, a) {
          return n.getDependency(e, a);
        })
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
      );
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function (r, a) {
      n.load(fs.resolveURL(t.uri, i.path), r, void 0, function () {
        a(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')
        );
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (n) {
      const i = t.byteLength || 0,
        r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this,
      n = this.json,
      i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = ca[i.type],
        o = Di[i.componentType],
        c = i.normalized === !0,
        l = new o(i.count * a);
      return Promise.resolve(new Tt(l, a, c));
    }
    const r = [];
    return (
      i.bufferView !== void 0
        ? r.push(this.getDependency("bufferView", i.bufferView))
        : r.push(null),
      i.sparse !== void 0 &&
        (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
        r.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
      Promise.all(r).then(function (a) {
        const o = a[0],
          c = ca[i.type],
          l = Di[i.componentType],
          h = l.BYTES_PER_ELEMENT,
          u = h * c,
          f = i.byteOffset || 0,
          d =
            i.bufferView !== void 0
              ? n.bufferViews[i.bufferView].byteStride
              : void 0,
          x = i.normalized === !0;
        let g, m;
        if (d && d !== u) {
          const p = Math.floor(f / d),
            R =
              "InterleavedBuffer:" +
              i.bufferView +
              ":" +
              i.componentType +
              ":" +
              p +
              ":" +
              i.count;
          let _ = t.cache.get(R);
          _ ||
            ((g = new l(o, p * d, (i.count * d) / h)),
            (_ = new kl(g, d / h)),
            t.cache.add(R, _)),
            (m = new vr(_, c, (f % d) / h, x));
        } else o === null ? (g = new l(i.count * c)) : (g = new l(o, f, i.count * c)), (m = new Tt(g, c, x));
        if (i.sparse !== void 0) {
          const p = ca.SCALAR,
            R = Di[i.sparse.indices.componentType],
            _ = i.sparse.indices.byteOffset || 0,
            S = i.sparse.values.byteOffset || 0,
            L = new R(a[1], _, i.sparse.count * p),
            w = new l(a[2], S, i.sparse.count * c);
          o !== null && (m = new Tt(m.array.slice(), m.itemSize, m.normalized)),
            (m.normalized = !1);
          for (let I = 0, N = L.length; I < N; I++) {
            const E = L[I];
            if (
              (m.setX(E, w[I * c]),
              c >= 2 && m.setY(E, w[I * c + 1]),
              c >= 3 && m.setZ(E, w[I * c + 2]),
              c >= 4 && m.setW(E, w[I * c + 3]),
              c >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
              );
          }
          m.normalized = x;
        }
        return m;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      n = this.options,
      r = t.textures[e].source,
      a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this,
      r = this.json,
      a = r.textures[e],
      o = r.images[t],
      c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c]) return this.textureCache[c];
    const l = this.loadImageSource(t, n)
      .then(function (h) {
        (h.flipY = !1),
          (h.name = a.name || o.name || ""),
          h.name === "" &&
            typeof o.uri == "string" &&
            o.uri.startsWith("data:image/") === !1 &&
            (h.name = o.uri);
        const f = (r.samplers || {})[a.sampler] || {};
        return (
          (h.magFilter = hl[f.magFilter] || It),
          (h.minFilter = hl[f.minFilter] || Rn),
          (h.wrapS = ul[f.wrapS] || Oi),
          (h.wrapT = ul[f.wrapT] || Oi),
          (h.generateMipmaps =
            !h.isCompressedTexture && h.minFilter !== Dt && h.minFilter !== It),
          i.associations.set(h, { textures: e }),
          h
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[c] = l), l;
  }
  loadImageSource(e, t) {
    const n = this,
      i = this.json,
      r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e],
      o = self.URL || self.webkitURL;
    let c = a.uri || "",
      l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function (u) {
        l = !0;
        const f = new Blob([u], { type: a.mimeType });
        return (c = o.createObjectURL(f)), c;
      });
    else if (a.uri === void 0)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
      );
    const h = Promise.resolve(c)
      .then(function (u) {
        return new Promise(function (f, d) {
          let x = f;
          t.isImageBitmapLoader === !0 &&
            (x = function (g) {
              const m = new St(g);
              (m.needsUpdate = !0), f(m);
            }),
            t.load(fs.resolveURL(u, r.path), x, void 0, d);
        });
      })
      .then(function (u) {
        return (
          l === !0 && o.revokeObjectURL(c),
          an(u, a),
          (u.userData.mimeType = a.mimeType || Fg(a.uri)),
          u
        );
      })
      .catch(function (u) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", c), u);
      });
    return (this.sourceCache[e] = h), h;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function (a) {
      if (!a) return null;
      if (
        (n.texCoord !== void 0 &&
          n.texCoord > 0 &&
          ((a = a.clone()), (a.channel = n.texCoord)),
        r.extensions[$e.KHR_TEXTURE_TRANSFORM])
      ) {
        const o =
          n.extensions !== void 0
            ? n.extensions[$e.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (o) {
          const c = r.associations.get(a);
          (a = r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a, o)),
            r.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.colorSpace = i), (e[t] = a), a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0,
      r = t.attributes.color !== void 0,
      a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c ||
        ((c = new Hl()),
        un.prototype.copy.call(c, n),
        c.color.copy(n.color),
        (c.map = n.map),
        (c.sizeAttenuation = !1),
        this.cache.add(o, c)),
        (n = c);
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c ||
        ((c = new Vl()),
        un.prototype.copy.call(c, n),
        c.color.copy(n.color),
        (c.map = n.map),
        this.cache.add(o, c)),
        (n = c);
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"),
        r && (o += "vertex-colors:"),
        a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c ||
        ((c = n.clone()),
        r && (c.vertexColors = !0),
        a && (c.flatShading = !0),
        i &&
          (c.normalScale && (c.normalScale.y *= -1),
          c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)),
        this.cache.add(o, c),
        this.associations.set(c, this.associations.get(n))),
        (n = c);
    }
    e.material = n;
  }
  getMaterialType() {
    return Eo;
  }
  loadMaterial(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      r = n.materials[e];
    let a;
    const o = {},
      c = r.extensions || {},
      l = [];
    if (c[$e.KHR_MATERIALS_UNLIT]) {
      const u = i[$e.KHR_MATERIALS_UNLIT];
      (a = u.getMaterialType()), l.push(u.extendParams(o, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (
        ((o.color = new We(1, 1, 1)),
        (o.opacity = 1),
        Array.isArray(u.baseColorFactor))
      ) {
        const f = u.baseColorFactor;
        o.color.setRGB(f[0], f[1], f[2], wt), (o.opacity = f[3]);
      }
      u.baseColorTexture !== void 0 &&
        l.push(t.assignTexture(o, "map", u.baseColorTexture, gt)),
        (o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1),
        (o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1),
        u.metallicRoughnessTexture !== void 0 &&
          (l.push(
            t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)
          ),
          l.push(
            t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture)
          )),
        (a = this._invokeOne(function (f) {
          return f.getMaterialType && f.getMaterialType(e);
        })),
        l.push(
          Promise.all(
            this._invokeAll(function (f) {
              return f.extendMaterialParams && f.extendMaterialParams(e, o);
            })
          )
        );
    }
    r.doubleSided === !0 && (o.side = cn);
    const h = r.alphaMode || la.OPAQUE;
    if (
      (h === la.BLEND
        ? ((o.transparent = !0), (o.depthWrite = !1))
        : ((o.transparent = !1),
          h === la.MASK &&
            (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)),
      r.normalTexture !== void 0 &&
        a !== ri &&
        (l.push(t.assignTexture(o, "normalMap", r.normalTexture)),
        (o.normalScale = new oe(1, 1)),
        r.normalTexture.scale !== void 0))
    ) {
      const u = r.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (
      (r.occlusionTexture !== void 0 &&
        a !== ri &&
        (l.push(t.assignTexture(o, "aoMap", r.occlusionTexture)),
        r.occlusionTexture.strength !== void 0 &&
          (o.aoMapIntensity = r.occlusionTexture.strength)),
      r.emissiveFactor !== void 0 && a !== ri)
    ) {
      const u = r.emissiveFactor;
      o.emissive = new We().setRGB(u[0], u[1], u[2], wt);
    }
    return (
      r.emissiveTexture !== void 0 &&
        a !== ri &&
        l.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, gt)),
      Promise.all(l).then(function () {
        const u = new a(o);
        return (
          r.name && (u.name = r.name),
          an(u, r),
          t.associations.set(u, { materials: e }),
          r.extensions && ni(i, u, r),
          u
        );
      })
    );
  }
  createUniqueName(e) {
    const t = st.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed
      ? t + "_" + ++this.nodeNamesUsed[t]
      : ((this.nodeNamesUsed[t] = 0), t);
  }
  loadGeometries(e) {
    const t = this,
      n = this.extensions,
      i = this.primitiveCache;
    function r(o) {
      return n[$e.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(o, t)
        .then(function (c) {
          return fl(c, o, t);
        });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o],
        h = Ug(l),
        u = i[h];
      if (u) a.push(u.promise);
      else {
        let f;
        l.extensions && l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]
          ? (f = r(l))
          : (f = fl(new kt(), l, t)),
          (i[h] = { primitive: l, promise: f }),
          a.push(f);
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      r = n.meshes[e],
      a = r.primitives,
      o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const h =
        a[c].material === void 0
          ? Ig(this.cache)
          : this.getDependency("material", a[c].material);
      o.push(h);
    }
    return (
      o.push(t.loadGeometries(a)),
      Promise.all(o).then(function (c) {
        const l = c.slice(0, c.length - 1),
          h = c[c.length - 1],
          u = [];
        for (let d = 0, x = h.length; d < x; d++) {
          const g = h[d],
            m = a[d];
          let p;
          const R = l[d];
          if (
            m.mode === Yt.TRIANGLES ||
            m.mode === Yt.TRIANGLE_STRIP ||
            m.mode === Yt.TRIANGLE_FAN ||
            m.mode === void 0
          )
            (p = r.isSkinnedMesh === !0 ? new Ku(g, R) : new Wt(g, R)),
              p.isSkinnedMesh === !0 && p.normalizeSkinWeights(),
              m.mode === Yt.TRIANGLE_STRIP
                ? (p.geometry = cl(p.geometry, El))
                : m.mode === Yt.TRIANGLE_FAN &&
                  (p.geometry = cl(p.geometry, $a));
          else if (m.mode === Yt.LINES) p = new nf(g, R);
          else if (m.mode === Yt.LINE_STRIP) p = new Mo(g, R);
          else if (m.mode === Yt.LINE_LOOP) p = new sf(g, R);
          else if (m.mode === Yt.POINTS) p = new rf(g, R);
          else
            throw new Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + m.mode
            );
          Object.keys(p.geometry.morphAttributes).length > 0 && Ng(p, r),
            (p.name = t.createUniqueName(r.name || "mesh_" + e)),
            an(p, r),
            m.extensions && ni(i, p, m),
            t.assignFinalMaterial(p),
            u.push(p);
        }
        for (let d = 0, x = u.length; d < x; d++)
          t.associations.set(u[d], { meshes: e, primitives: d });
        if (u.length === 1) return r.extensions && ni(i, u[0], r), u[0];
        const f = new ai();
        r.extensions && ni(i, f, r), t.associations.set(f, { meshes: e });
        for (let d = 0, x = u.length; d < x; d++) f.add(u[d]);
        return f;
      })
    );
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e],
      i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective"
        ? (t = new Lt(
            Cl.radToDeg(i.yfov),
            i.aspectRatio || 1,
            i.znear || 1,
            i.zfar || 2e6
          ))
        : n.type === "orthographic" &&
          (t = new Ro(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
      n.name && (t.name = this.createUniqueName(n.name)),
      an(t, n),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return (
      t.inverseBindMatrices !== void 0
        ? n.push(this.getDependency("accessor", t.inverseBindMatrices))
        : n.push(null),
      Promise.all(n).then(function (i) {
        const r = i.pop(),
          a = i,
          o = [],
          c = [];
        for (let l = 0, h = a.length; l < h; l++) {
          const u = a[l];
          if (u) {
            o.push(u);
            const f = new Ye();
            r !== null && f.fromArray(r.array, l * 16), c.push(f);
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              t.joints[l]
            );
        }
        return new yo(o, c);
      })
    );
  }
  loadAnimation(e) {
    const t = this.json,
      n = this,
      i = t.animations[e],
      r = i.name ? i.name : "animation_" + e,
      a = [],
      o = [],
      c = [],
      l = [],
      h = [];
    for (let u = 0, f = i.channels.length; u < f; u++) {
      const d = i.channels[u],
        x = i.samplers[d.sampler],
        g = d.target,
        m = g.node,
        p = i.parameters !== void 0 ? i.parameters[x.input] : x.input,
        R = i.parameters !== void 0 ? i.parameters[x.output] : x.output;
      g.node !== void 0 &&
        (a.push(this.getDependency("node", m)),
        o.push(this.getDependency("accessor", p)),
        c.push(this.getDependency("accessor", R)),
        l.push(x),
        h.push(g));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h),
    ]).then(function (u) {
      const f = u[0],
        d = u[1],
        x = u[2],
        g = u[3],
        m = u[4],
        p = [];
      for (let _ = 0, S = f.length; _ < S; _++) {
        const L = f[_],
          w = d[_],
          I = x[_],
          N = g[_],
          E = m[_];
        if (L === void 0) continue;
        L.updateMatrix && L.updateMatrix();
        const M = n._createAnimationTracks(L, w, I, N, E);
        if (M) for (let U = 0; U < M.length; U++) p.push(M[U]);
      }
      const R = new Yf(r, void 0, p);
      return an(R, i), R;
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e];
    return i.mesh === void 0
      ? null
      : n.getDependency("mesh", i.mesh).then(function (r) {
          const a = n._getNodeRef(n.meshCache, i.mesh, r);
          return (
            i.weights !== void 0 &&
              a.traverse(function (o) {
                if (o.isMesh)
                  for (let c = 0, l = i.weights.length; c < l; c++)
                    o.morphTargetInfluences[c] = i.weights[c];
              }),
            a
          );
        });
  }
  loadNode(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e],
      r = n._loadNodeShallow(e),
      a = [],
      o = i.children || [];
    for (let l = 0, h = o.length; l < h; l++)
      a.push(n.getDependency("node", o[l]));
    const c =
      i.skin === void 0
        ? Promise.resolve(null)
        : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(a), c]).then(function (l) {
      const h = l[0],
        u = l[1],
        f = l[2];
      f !== null &&
        h.traverse(function (d) {
          d.isSkinnedMesh && d.bind(f, Og);
        });
      for (let d = 0, x = u.length; d < x; d++) h.add(u[d]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json,
      n = this.extensions,
      i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e],
      a = r.name ? i.createUniqueName(r.name) : "",
      o = [],
      c = i._invokeOne(function (l) {
        return l.createNodeMesh && l.createNodeMesh(e);
      });
    return (
      c && o.push(c),
      r.camera !== void 0 &&
        o.push(
          i.getDependency("camera", r.camera).then(function (l) {
            return i._getNodeRef(i.cameraCache, r.camera, l);
          })
        ),
      i
        ._invokeAll(function (l) {
          return l.createNodeAttachment && l.createNodeAttachment(e);
        })
        .forEach(function (l) {
          o.push(l);
        }),
      (this.nodeCache[e] = Promise.all(o).then(function (l) {
        let h;
        if (
          (r.isBone === !0
            ? (h = new zl())
            : l.length > 1
            ? (h = new ai())
            : l.length === 1
            ? (h = l[0])
            : (h = new pt()),
          h !== l[0])
        )
          for (let u = 0, f = l.length; u < f; u++) h.add(l[u]);
        if (
          (r.name && ((h.userData.name = r.name), (h.name = a)),
          an(h, r),
          r.extensions && ni(n, h, r),
          r.matrix !== void 0)
        ) {
          const u = new Ye();
          u.fromArray(r.matrix), h.applyMatrix4(u);
        } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
        if (!i.associations.has(h)) i.associations.set(h, {});
        else if (r.mesh !== void 0 && i.meshCache.refs[r.mesh] > 1) {
          const u = i.associations.get(h);
          i.associations.set(h, { ...u });
        }
        return (i.associations.get(h).nodes = e), h;
      })),
      this.nodeCache[e]
    );
  }
  loadScene(e) {
    const t = this.extensions,
      n = this.json.scenes[e],
      i = this,
      r = new ai();
    n.name && (r.name = i.createUniqueName(n.name)),
      an(r, n),
      n.extensions && ni(t, r, n);
    const a = n.nodes || [],
      o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function (c) {
      for (let h = 0, u = c.length; h < u; h++) r.add(c[h]);
      const l = (h) => {
        const u = new Map();
        for (const [f, d] of i.associations)
          (f instanceof un || f instanceof St) && u.set(f, d);
        return (
          h.traverse((f) => {
            const d = i.associations.get(f);
            d != null && u.set(f, d);
          }),
          u
        );
      };
      return (i.associations = l(r)), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [],
      o = e.name ? e.name : e.uuid,
      c = [];
    zn[r.path] === zn.weights
      ? e.traverse(function (f) {
          f.morphTargetInfluences && c.push(f.name ? f.name : f.uuid);
        })
      : c.push(o);
    let l;
    switch (zn[r.path]) {
      case zn.weights:
        l = Vi;
        break;
      case zn.rotation:
        l = Hi;
        break;
      case zn.translation:
      case zn.scale:
        l = Gi;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Vi;
            break;
          case 2:
          case 3:
          default:
            l = Gi;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? Lg[i.interpolation] : _s,
      u = this._getArrayFromAccessor(n);
    for (let f = 0, d = c.length; f < d; f++) {
      const x = new l(c[f] + "." + zn[r.path], t.array, u, h);
      i.interpolation === "CUBICSPLINE" &&
        this._createCubicSplineTrackInterpolant(x),
        a.push(x);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = oo(t.constructor),
        i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    (e.createInterpolant = function (n) {
      const i = this instanceof Hi ? Pg : ch;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }),
      (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0);
  }
}
function kg(s, e, t) {
  const n = e.attributes,
    i = new Dn();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION],
      c = o.min,
      l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (
        (i.set(new F(c[0], c[1], c[2]), new F(l[0], l[1], l[2])), o.normalized)
      ) {
        const h = oo(Di[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
      );
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new F(),
      c = new F();
    for (let l = 0, h = r.length; l < h; l++) {
      const u = r[l];
      if (u.POSITION !== void 0) {
        const f = t.json.accessors[u.POSITION],
          d = f.min,
          x = f.max;
        if (d !== void 0 && x !== void 0) {
          if (
            (c.setX(Math.max(Math.abs(d[0]), Math.abs(x[0]))),
            c.setY(Math.max(Math.abs(d[1]), Math.abs(x[1]))),
            c.setZ(Math.max(Math.abs(d[2]), Math.abs(x[2]))),
            f.normalized)
          ) {
            const g = oo(Di[f.componentType]);
            c.multiplyScalar(g);
          }
          o.max(c);
        } else
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
      }
    }
    i.expandByVector(o);
  }
  s.boundingBox = i;
  const a = new xn();
  i.getCenter(a.center),
    (a.radius = i.min.distanceTo(i.max) / 2),
    (s.boundingSphere = a);
}
function fl(s, e, t) {
  const n = e.attributes,
    i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function (c) {
      s.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = ao[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function (o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return (
    et.workingColorSpace !== wt &&
      "COLOR_0" in n &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`
      ),
    an(s, e),
    kg(s, e, t),
    Promise.all(i).then(function () {
      return e.targets !== void 0 ? Dg(s, e.targets, t) : s;
    })
  );
}
const ua = new WeakMap();
class s_ extends qn {
  constructor(e) {
    super(e),
      (this.decoderPath = ""),
      (this.decoderConfig = {}),
      (this.decoderBinary = null),
      (this.decoderPending = null),
      (this.workerLimit = 4),
      (this.workerPool = []),
      (this.workerNextTaskID = 1),
      (this.workerSourceURL = ""),
      (this.defaultAttributeIDs = {
        position: "POSITION",
        normal: "NORMAL",
        color: "COLOR",
        uv: "TEX_COORD",
      }),
      (this.defaultAttributeTypes = {
        position: "Float32Array",
        normal: "Float32Array",
        color: "Float32Array",
        uv: "Float32Array",
      });
  }
  setDecoderPath(e) {
    return (this.decoderPath = e), this;
  }
  setDecoderConfig(e) {
    return (this.decoderConfig = e), this;
  }
  setWorkerLimit(e) {
    return (this.workerLimit = e), this;
  }
  load(e, t, n, i) {
    const r = new Ts(this.manager);
    r.setPath(this.path),
      r.setResponseType("arraybuffer"),
      r.setRequestHeader(this.requestHeader),
      r.setWithCredentials(this.withCredentials),
      r.load(
        e,
        (a) => {
          this.parse(a, t, i);
        },
        n,
        i
      );
  }
  parse(e, t, n = () => {}) {
    this.decodeDracoFile(e, t, null, null, gt, n).catch(n);
  }
  decodeDracoFile(e, t, n, i, r = wt, a = () => {}) {
    const o = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
      vertexColorSpace: r,
    };
    return this.decodeGeometry(e, o).then(t).catch(a);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if (ua.has(e)) {
      const c = ua.get(e);
      if (c.key === n) return c.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let i;
    const r = this.workerNextTaskID++,
      a = e.byteLength,
      o = this._getWorker(r, a)
        .then(
          (c) => (
            (i = c),
            new Promise((l, h) => {
              (i._callbacks[r] = { resolve: l, reject: h }),
                i.postMessage(
                  { type: "decode", id: r, taskConfig: t, buffer: e },
                  [e]
                );
            })
          )
        )
        .then((c) => this._createGeometry(c.geometry));
    return (
      o
        .catch(() => !0)
        .then(() => {
          i && r && this._releaseTask(i, r);
        }),
      ua.set(e, { key: n, promise: o }),
      o
    );
  }
  _createGeometry(e) {
    const t = new kt();
    e.index && t.setIndex(new Tt(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const {
        name: i,
        array: r,
        itemSize: a,
        stride: o,
        vertexColorSpace: c,
      } = e.attributes[n];
      let l;
      if (a === o) l = new Tt(r, a);
      else {
        const h = new kl(r, o);
        l = new vr(h, a, 0);
      }
      i === "color" &&
        (this._assignVertexColorSpace(l, c),
        (l.normalized = !(r instanceof Float32Array))),
        t.setAttribute(i, l);
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== gt) return;
    const n = new We();
    for (let i = 0, r = e.count; i < r; i++)
      n.fromBufferAttribute(e, i),
        et.colorSpaceToWorking(n, gt),
        e.setXYZ(i, n.r, n.g, n.b);
  }
  _loadLibrary(e, t) {
    const n = new Ts(this.manager);
    return (
      n.setPath(this.decoderPath),
      n.setResponseType(t),
      n.setWithCredentials(this.withCredentials),
      new Promise((i, r) => {
        n.load(e, i, void 0, r);
      })
    );
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const e =
        typeof WebAssembly != "object" || this.decoderConfig.type === "js",
      t = [];
    return (
      e
        ? t.push(this._loadLibrary("draco_decoder.js", "text"))
        : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
          t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
      (this.decoderPending = Promise.all(t).then((n) => {
        const i = n[0];
        e || (this.decoderConfig.wasmBinary = n[1]);
        const r = zg.toString(),
          a = [
            "/* draco decoder */",
            i,
            "",
            "/* worker */",
            r.substring(r.indexOf("{") + 1, r.lastIndexOf("}")),
          ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([a]));
      })),
      this.decoderPending
    );
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL);
        (i._callbacks = {}),
          (i._taskCosts = {}),
          (i._taskLoad = 0),
          i.postMessage({ type: "init", decoderConfig: this.decoderConfig }),
          (i.onmessage = function (r) {
            const a = r.data;
            switch (a.type) {
              case "decode":
                i._callbacks[a.id].resolve(a);
                break;
              case "error":
                i._callbacks[a.id].reject(a);
                break;
              default:
                console.error(
                  'THREE.DRACOLoader: Unexpected message, "' + a.type + '"'
                );
            }
          }),
          this.workerPool.push(i);
      } else
        this.workerPool.sort(function (i, r) {
          return i._taskLoad > r._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return (n._taskCosts[e] = t), (n._taskLoad += t), n;
    });
  }
  _releaseTask(e, t) {
    (e._taskLoad -= e._taskCosts[t]),
      delete e._callbacks[t],
      delete e._taskCosts[t];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((e) => e._taskLoad)
    );
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return (
      (this.workerPool.length = 0),
      this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL),
      this
    );
  }
}
function zg() {
  let s, e;
  onmessage = function (a) {
    const o = a.data;
    switch (o.type) {
      case "init":
        (s = o.decoderConfig),
          (e = new Promise(function (h) {
            (s.onModuleLoaded = function (u) {
              h({ draco: u });
            }),
              DracoDecoderModule(s);
          }));
        break;
      case "decode":
        const c = o.buffer,
          l = o.taskConfig;
        e.then((h) => {
          const u = h.draco,
            f = new u.Decoder();
          try {
            const d = t(u, f, new Int8Array(c), l),
              x = d.attributes.map((g) => g.array.buffer);
            d.index && x.push(d.index.array.buffer),
              self.postMessage({ type: "decode", id: o.id, geometry: d }, x);
          } catch (d) {
            console.error(d),
              self.postMessage({ type: "error", id: o.id, error: d.message });
          } finally {
            u.destroy(f);
          }
        });
        break;
    }
  };
  function t(a, o, c, l) {
    const h = l.attributeIDs,
      u = l.attributeTypes;
    let f, d;
    const x = o.GetEncodedGeometryType(c);
    if (x === a.TRIANGULAR_MESH)
      (f = new a.Mesh()), (d = o.DecodeArrayToMesh(c, c.byteLength, f));
    else if (x === a.POINT_CLOUD)
      (f = new a.PointCloud()),
        (d = o.DecodeArrayToPointCloud(c, c.byteLength, f));
    else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!d.ok() || f.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + d.error_msg());
    const g = { index: null, attributes: [] };
    for (const m in h) {
      const p = self[u[m]];
      let R, _;
      if (l.useUniqueIDs) (_ = h[m]), (R = o.GetAttributeByUniqueId(f, _));
      else {
        if (((_ = o.GetAttributeId(f, a[h[m]])), _ === -1)) continue;
        R = o.GetAttribute(f, _);
      }
      const S = i(a, o, f, m, p, R);
      m === "color" && (S.vertexColorSpace = l.vertexColorSpace),
        g.attributes.push(S);
    }
    return x === a.TRIANGULAR_MESH && (g.index = n(a, o, f)), a.destroy(f), g;
  }
  function n(a, o, c) {
    const h = c.num_faces() * 3,
      u = h * 4,
      f = a._malloc(u);
    o.GetTrianglesUInt32Array(c, u, f);
    const d = new Uint32Array(a.HEAPF32.buffer, f, h).slice();
    return a._free(f), { array: d, itemSize: 1 };
  }
  function i(a, o, c, l, h, u) {
    const f = c.num_points(),
      d = u.num_components(),
      x = r(a, h),
      g = d * h.BYTES_PER_ELEMENT,
      m = Math.ceil(g / 4) * 4,
      p = m / h.BYTES_PER_ELEMENT,
      R = f * g,
      _ = f * m,
      S = a._malloc(R);
    o.GetAttributeDataArrayForAllPoints(c, u, x, R, S);
    const L = new h(a.HEAPF32.buffer, S, R / h.BYTES_PER_ELEMENT);
    let w;
    if (g === m) w = L.slice();
    else {
      w = new h(_ / h.BYTES_PER_ELEMENT);
      let I = 0;
      for (let N = 0, E = L.length; N < E; N++) {
        for (let M = 0; M < d; M++) w[I + M] = L[N * d + M];
        I += p;
      }
    }
    return a._free(S), { name: l, count: f, itemSize: d, array: w, stride: p };
  }
  function r(a, o) {
    switch (o) {
      case Float32Array:
        return a.DT_FLOAT32;
      case Int8Array:
        return a.DT_INT8;
      case Int16Array:
        return a.DT_INT16;
      case Int32Array:
        return a.DT_INT32;
      case Uint8Array:
        return a.DT_UINT8;
      case Uint16Array:
        return a.DT_UINT16;
      case Uint32Array:
        return a.DT_UINT32;
    }
  }
}
const dl = { type: "change" },
  Lo = { type: "start" },
  lh = { type: "end" },
  rr = new Es(),
  pl = new wn(),
  Vg = Math.cos(70 * Cl.DEG2RAD),
  vt = new F(),
  Ft = 2 * Math.PI,
  ct = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6,
  },
  fa = 1e-6;
class r_ extends vd {
  constructor(e, t = null) {
    super(e, t),
      (this.state = ct.NONE),
      (this.target = new F()),
      (this.cursor = new F()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.keyRotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: Ci.ROTATE,
        MIDDLE: Ci.DOLLY,
        RIGHT: Ci.PAN,
      }),
      (this.touches = { ONE: Ri.ROTATE, TWO: Ri.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this._lastPosition = new F()),
      (this._lastQuaternion = new dn()),
      (this._lastTargetPosition = new F()),
      (this._quat = new dn().setFromUnitVectors(e.up, new F(0, 1, 0))),
      (this._quatInverse = this._quat.clone().invert()),
      (this._spherical = new Fc()),
      (this._sphericalDelta = new Fc()),
      (this._scale = 1),
      (this._panOffset = new F()),
      (this._rotateStart = new oe()),
      (this._rotateEnd = new oe()),
      (this._rotateDelta = new oe()),
      (this._panStart = new oe()),
      (this._panEnd = new oe()),
      (this._panDelta = new oe()),
      (this._dollyStart = new oe()),
      (this._dollyEnd = new oe()),
      (this._dollyDelta = new oe()),
      (this._dollyDirection = new F()),
      (this._mouse = new oe()),
      (this._performCursorZoom = !1),
      (this._pointers = []),
      (this._pointerPositions = {}),
      (this._controlActive = !1),
      (this._onPointerMove = Gg.bind(this)),
      (this._onPointerDown = Hg.bind(this)),
      (this._onPointerUp = Wg.bind(this)),
      (this._onContextMenu = Jg.bind(this)),
      (this._onMouseWheel = Yg.bind(this)),
      (this._onKeyDown = jg.bind(this)),
      (this._onTouchStart = Kg.bind(this)),
      (this._onTouchMove = Zg.bind(this)),
      (this._onMouseDown = Xg.bind(this)),
      (this._onMouseMove = qg.bind(this)),
      (this._interceptControlDown = $g.bind(this)),
      (this._interceptControlUp = Qg.bind(this)),
      this.domElement !== null && this.connect(this.domElement),
      this.update();
  }
  connect(e) {
    super.connect(e),
      this.domElement.addEventListener("pointerdown", this._onPointerDown),
      this.domElement.addEventListener("pointercancel", this._onPointerUp),
      this.domElement.addEventListener("contextmenu", this._onContextMenu),
      this.domElement.addEventListener("wheel", this._onMouseWheel, {
        passive: !1,
      }),
      this.domElement
        .getRootNode()
        .addEventListener("keydown", this._interceptControlDown, {
          passive: !0,
          capture: !0,
        }),
      (this.domElement.style.touchAction = "none");
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown),
      this.domElement.removeEventListener("pointermove", this._onPointerMove),
      this.domElement.removeEventListener("pointerup", this._onPointerUp),
      this.domElement.removeEventListener("pointercancel", this._onPointerUp),
      this.domElement.removeEventListener("wheel", this._onMouseWheel),
      this.domElement.removeEventListener("contextmenu", this._onContextMenu),
      this.stopListenToKeyEvents(),
      this.domElement
        .getRootNode()
        .removeEventListener("keydown", this._interceptControlDown, {
          capture: !0,
        }),
      (this.domElement.style.touchAction = "auto");
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown),
      (this._domElementKeyEvents = e);
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null &&
      (this._domElementKeyEvents.removeEventListener(
        "keydown",
        this._onKeyDown
      ),
      (this._domElementKeyEvents = null));
  }
  saveState() {
    this.target0.copy(this.target),
      this.position0.copy(this.object.position),
      (this.zoom0 = this.object.zoom);
  }
  reset() {
    this.target.copy(this.target0),
      this.object.position.copy(this.position0),
      (this.object.zoom = this.zoom0),
      this.object.updateProjectionMatrix(),
      this.dispatchEvent(dl),
      this.update(),
      (this.state = ct.NONE);
  }
  update(e = null) {
    const t = this.object.position;
    vt.copy(t).sub(this.target),
      vt.applyQuaternion(this._quat),
      this._spherical.setFromVector3(vt),
      this.autoRotate &&
        this.state === ct.NONE &&
        this._rotateLeft(this._getAutoRotationAngle(e)),
      this.enableDamping
        ? ((this._spherical.theta +=
            this._sphericalDelta.theta * this.dampingFactor),
          (this._spherical.phi +=
            this._sphericalDelta.phi * this.dampingFactor))
        : ((this._spherical.theta += this._sphericalDelta.theta),
          (this._spherical.phi += this._sphericalDelta.phi));
    let n = this.minAzimuthAngle,
      i = this.maxAzimuthAngle;
    isFinite(n) &&
      isFinite(i) &&
      (n < -Math.PI ? (n += Ft) : n > Math.PI && (n -= Ft),
      i < -Math.PI ? (i += Ft) : i > Math.PI && (i -= Ft),
      n <= i
        ? (this._spherical.theta = Math.max(
            n,
            Math.min(i, this._spherical.theta)
          ))
        : (this._spherical.theta =
            this._spherical.theta > (n + i) / 2
              ? Math.max(n, this._spherical.theta)
              : Math.min(i, this._spherical.theta))),
      (this._spherical.phi = Math.max(
        this.minPolarAngle,
        Math.min(this.maxPolarAngle, this._spherical.phi)
      )),
      this._spherical.makeSafe(),
      this.enableDamping === !0
        ? this.target.addScaledVector(this._panOffset, this.dampingFactor)
        : this.target.add(this._panOffset),
      this.target.sub(this.cursor),
      this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
      this.target.add(this.cursor);
    let r = !1;
    if (
      (this.zoomToCursor && this._performCursorZoom) ||
      this.object.isOrthographicCamera
    )
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      (this._spherical.radius = this._clampDistance(
        this._spherical.radius * this._scale
      )),
        (r = a != this._spherical.radius);
    }
    if (
      (vt.setFromSpherical(this._spherical),
      vt.applyQuaternion(this._quatInverse),
      t.copy(this.target).add(vt),
      this.object.lookAt(this.target),
      this.enableDamping === !0
        ? ((this._sphericalDelta.theta *= 1 - this.dampingFactor),
          (this._sphericalDelta.phi *= 1 - this.dampingFactor),
          this._panOffset.multiplyScalar(1 - this.dampingFactor))
        : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)),
      this.zoomToCursor && this._performCursorZoom)
    ) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = vt.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c),
          this.object.updateMatrixWorld(),
          (r = !!c);
      } else if (this.object.isOrthographicCamera) {
        const o = new F(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        (this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / this._scale)
        )),
          this.object.updateProjectionMatrix(),
          (r = c !== this.object.zoom);
        const l = new F(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object),
          this.object.position.sub(l).add(o),
          this.object.updateMatrixWorld(),
          (a = vt.length());
      } else
        console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
        ),
          (this.zoomToCursor = !1);
      a !== null &&
        (this.screenSpacePanning
          ? this.target
              .set(0, 0, -1)
              .transformDirection(this.object.matrix)
              .multiplyScalar(a)
              .add(this.object.position)
          : (rr.origin.copy(this.object.position),
            rr.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(rr.direction)) < Vg
              ? this.object.lookAt(this.target)
              : (pl.setFromNormalAndCoplanarPoint(this.object.up, this.target),
                rr.intersectPlane(pl, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      (this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.object.zoom / this._scale)
      )),
        a !== this.object.zoom &&
          (this.object.updateProjectionMatrix(), (r = !0));
    }
    return (
      (this._scale = 1),
      (this._performCursorZoom = !1),
      r ||
      this._lastPosition.distanceToSquared(this.object.position) > fa ||
      8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > fa ||
      this._lastTargetPosition.distanceToSquared(this.target) > fa
        ? (this.dispatchEvent(dl),
          this._lastPosition.copy(this.object.position),
          this._lastQuaternion.copy(this.object.quaternion),
          this._lastTargetPosition.copy(this.target),
          !0)
        : !1
    );
  }
  _getAutoRotationAngle(e) {
    return e !== null
      ? (Ft / 60) * this.autoRotateSpeed * e
      : (Ft / 60 / 60) * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    vt.setFromMatrixColumn(t, 0),
      vt.multiplyScalar(-e),
      this._panOffset.add(vt);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0
      ? vt.setFromMatrixColumn(t, 1)
      : (vt.setFromMatrixColumn(t, 0), vt.crossVectors(this.object.up, vt)),
      vt.multiplyScalar(e),
      this._panOffset.add(vt);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      vt.copy(i).sub(this.target);
      let r = vt.length();
      (r *= Math.tan(((this.object.fov / 2) * Math.PI) / 180)),
        this._panLeft((2 * e * r) / n.clientHeight, this.object.matrix),
        this._panUp((2 * t * r) / n.clientHeight, this.object.matrix);
    } else
      this.object.isOrthographicCamera
        ? (this._panLeft(
            (e * (this.object.right - this.object.left)) /
              this.object.zoom /
              n.clientWidth,
            this.object.matrix
          ),
          this._panUp(
            (t * (this.object.top - this.object.bottom)) /
              this.object.zoom /
              n.clientHeight,
            this.object.matrix
          ))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
          ),
          (this.enablePan = !1));
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale /= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
        ),
        (this.enableZoom = !1));
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale *= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
        ),
        (this.enableZoom = !1));
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(),
      i = e - n.left,
      r = t - n.top,
      a = n.width,
      o = n.height;
    (this._mouse.x = (i / a) * 2 - 1),
      (this._mouse.y = -(r / o) * 2 + 1),
      this._dollyDirection
        .set(this._mouse.x, this._mouse.y, 1)
        .unproject(this.object)
        .sub(this.object.position)
        .normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX),
      this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY),
      this._rotateDelta
        .subVectors(this._rotateEnd, this._rotateStart)
        .multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft((Ft * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((Ft * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd),
      this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY),
      this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
      this._dollyDelta.y > 0
        ? this._dollyOut(this._getZoomScale(this._dollyDelta.y))
        : this._dollyDelta.y < 0 &&
          this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
      this._dollyStart.copy(this._dollyEnd),
      this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY),
      this._panDelta
        .subVectors(this._panEnd, this._panStart)
        .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd),
      this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY),
      e.deltaY < 0
        ? this._dollyIn(this._getZoomScale(e.deltaY))
        : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
      this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateUp(
              (Ft * this.keyRotateSpeed) / this.domElement.clientHeight
            )
          : this.enablePan && this._pan(0, this.keyPanSpeed),
          (t = !0);
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateUp(
              (-Ft * this.keyRotateSpeed) / this.domElement.clientHeight
            )
          : this.enablePan && this._pan(0, -this.keyPanSpeed),
          (t = !0);
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateLeft(
              (Ft * this.keyRotateSpeed) / this.domElement.clientHeight
            )
          : this.enablePan && this._pan(this.keyPanSpeed, 0),
          (t = !0);
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateLeft(
              (-Ft * this.keyRotateSpeed) / this.domElement.clientHeight
            )
          : this.enablePan && this._pan(-this.keyPanSpeed, 0),
          (t = !0);
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        i = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        i = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      i = e.pageY - t.y,
      r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e),
      this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e),
      this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e),
        i = 0.5 * (e.pageX + n.x),
        r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta
      .subVectors(this._rotateEnd, this._rotateStart)
      .multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft((Ft * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((Ft * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        i = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, i);
    }
    this._panDelta
      .subVectors(this._panEnd, this._panStart)
      .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      i = e.pageY - t.y,
      r = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, r),
      this._dollyDelta.set(
        0,
        Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)
      ),
      this._dollyOut(this._dollyDelta.y),
      this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5,
      o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e),
      this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e),
      this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && ((t = new oe()), (this._pointerPositions[e.pointerId] = t)),
      t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t =
      e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode,
      n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function Hg(s) {
  this.enabled !== !1 &&
    (this._pointers.length === 0 &&
      (this.domElement.setPointerCapture(s.pointerId),
      this.domElement.addEventListener("pointermove", this._onPointerMove),
      this.domElement.addEventListener("pointerup", this._onPointerUp)),
    !this._isTrackingPointer(s) &&
      (this._addPointer(s),
      s.pointerType === "touch"
        ? this._onTouchStart(s)
        : this._onMouseDown(s)));
}
function Gg(s) {
  this.enabled !== !1 &&
    (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s));
}
function Wg(s) {
  switch ((this._removePointer(s), this._pointers.length)) {
    case 0:
      this.domElement.releasePointerCapture(s.pointerId),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.dispatchEvent(lh),
        (this.state = ct.NONE);
      break;
    case 1:
      const e = this._pointers[0],
        t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function Xg(s) {
  let e;
  switch (s.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case Ci.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(s), (this.state = ct.DOLLY);
      break;
    case Ci.ROTATE:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(s), (this.state = ct.PAN);
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(s), (this.state = ct.ROTATE);
      }
      break;
    case Ci.PAN:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(s), (this.state = ct.ROTATE);
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(s), (this.state = ct.PAN);
      }
      break;
    default:
      this.state = ct.NONE;
  }
  this.state !== ct.NONE && this.dispatchEvent(Lo);
}
function qg(s) {
  switch (this.state) {
    case ct.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(s);
      break;
    case ct.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(s);
      break;
    case ct.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(s);
      break;
  }
}
function Yg(s) {
  this.enabled === !1 ||
    this.enableZoom === !1 ||
    this.state !== ct.NONE ||
    (s.preventDefault(),
    this.dispatchEvent(Lo),
    this._handleMouseWheel(this._customWheelEvent(s)),
    this.dispatchEvent(lh));
}
function jg(s) {
  this.enabled !== !1 && this._handleKeyDown(s);
}
function Kg(s) {
  switch ((this._trackPointer(s), this._pointers.length)) {
    case 1:
      switch (this.touches.ONE) {
        case Ri.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(s), (this.state = ct.TOUCH_ROTATE);
          break;
        case Ri.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(s), (this.state = ct.TOUCH_PAN);
          break;
        default:
          this.state = ct.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ri.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(s), (this.state = ct.TOUCH_DOLLY_PAN);
          break;
        case Ri.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(s),
            (this.state = ct.TOUCH_DOLLY_ROTATE);
          break;
        default:
          this.state = ct.NONE;
      }
      break;
    default:
      this.state = ct.NONE;
  }
  this.state !== ct.NONE && this.dispatchEvent(Lo);
}
function Zg(s) {
  switch ((this._trackPointer(s), this.state)) {
    case ct.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(s), this.update();
      break;
    case ct.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(s), this.update();
      break;
    case ct.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(s), this.update();
      break;
    case ct.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(s), this.update();
      break;
    default:
      this.state = ct.NONE;
  }
}
function Jg(s) {
  this.enabled !== !1 && s.preventDefault();
}
function $g(s) {
  s.key === "Control" &&
    ((this._controlActive = !0),
    this.domElement
      .getRootNode()
      .addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
function Qg(s) {
  s.key === "Control" &&
    ((this._controlActive = !1),
    this.domElement
      .getRootNode()
      .removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
class Io extends Wt {
  constructor(e, t = {}) {
    super(e),
      (this.isReflector = !0),
      (this.type = "Reflector"),
      (this.forceUpdate = !1),
      (this.camera = new Lt());
    const n = this,
      i = t.color !== void 0 ? new We(t.color) : new We(8355711),
      r = t.textureWidth || 512,
      a = t.textureHeight || 512,
      o = t.clipBias || 0,
      c = t.shader || Io.ReflectorShader,
      l = t.multisample !== void 0 ? t.multisample : 4,
      h = new wn(),
      u = new F(),
      f = new F(),
      d = new F(),
      x = new Ye(),
      g = new F(0, 0, -1),
      m = new tt(),
      p = new F(),
      R = new F(),
      _ = new tt(),
      S = new Ye(),
      L = this.camera,
      w = new Xn(r, a, { samples: l, type: li }),
      I = new mn({
        name: c.name !== void 0 ? c.name : "unspecified",
        uniforms: Fl.clone(c.uniforms),
        fragmentShader: c.fragmentShader,
        vertexShader: c.vertexShader,
      });
    (I.uniforms.tDiffuse.value = w.texture),
      (I.uniforms.color.value = i),
      (I.uniforms.textureMatrix.value = S),
      (this.material = I),
      (this.onBeforeRender = function (N, E, M) {
        if (
          (f.setFromMatrixPosition(n.matrixWorld),
          d.setFromMatrixPosition(M.matrixWorld),
          x.extractRotation(n.matrixWorld),
          u.set(0, 0, 1),
          u.applyMatrix4(x),
          p.subVectors(f, d),
          p.dot(u) > 0 === !0 && this.forceUpdate === !1)
        )
          return;
        p.reflect(u).negate(),
          p.add(f),
          x.extractRotation(M.matrixWorld),
          g.set(0, 0, -1),
          g.applyMatrix4(x),
          g.add(d),
          R.subVectors(f, g),
          R.reflect(u).negate(),
          R.add(f),
          L.position.copy(p),
          L.up.set(0, 1, 0),
          L.up.applyMatrix4(x),
          L.up.reflect(u),
          L.lookAt(R),
          (L.far = M.far),
          L.updateMatrixWorld(),
          L.projectionMatrix.copy(M.projectionMatrix),
          S.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
          S.multiply(L.projectionMatrix),
          S.multiply(L.matrixWorldInverse),
          S.multiply(n.matrixWorld),
          h.setFromNormalAndCoplanarPoint(u, f),
          h.applyMatrix4(L.matrixWorldInverse),
          m.set(h.normal.x, h.normal.y, h.normal.z, h.constant);
        const V = L.projectionMatrix;
        (_.x = (Math.sign(m.x) + V.elements[8]) / V.elements[0]),
          (_.y = (Math.sign(m.y) + V.elements[9]) / V.elements[5]),
          (_.z = -1),
          (_.w = (1 + V.elements[10]) / V.elements[14]),
          m.multiplyScalar(2 / m.dot(_)),
          (V.elements[2] = m.x),
          (V.elements[6] = m.y),
          (V.elements[10] = m.z + 1 - o),
          (V.elements[14] = m.w),
          (n.visible = !1);
        const K = N.getRenderTarget(),
          Z = N.xr.enabled,
          ne = N.shadowMap.autoUpdate;
        (N.xr.enabled = !1),
          (N.shadowMap.autoUpdate = !1),
          N.setRenderTarget(w),
          N.state.buffers.depth.setMask(!0),
          N.autoClear === !1 && N.clear(),
          N.render(E, L),
          (N.xr.enabled = Z),
          (N.shadowMap.autoUpdate = ne),
          N.setRenderTarget(K);
        const $ = M.viewport;
        $ !== void 0 && N.state.viewport($),
          (n.visible = !0),
          (this.forceUpdate = !1);
      }),
      (this.getRenderTarget = function () {
        return w;
      }),
      (this.dispose = function () {
        w.dispose(), n.material.dispose();
      });
  }
}
Io.ReflectorShader = {
  name: "ReflectorShader",
  uniforms: {
    color: { value: null },
    tDiffuse: { value: null },
    textureMatrix: { value: null },
  },
  vertexShader: `
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,
  fragmentShader: `
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`,
};
const e_ = gt;
class hh extends qn {
  constructor(e) {
    super(e), (this.defaultDPI = 90), (this.defaultUnit = "px");
  }
  load(e, t, n, i) {
    const r = this,
      a = new Ts(r.manager);
    a.setPath(r.path),
      a.setRequestHeader(r.requestHeader),
      a.setWithCredentials(r.withCredentials),
      a.load(
        e,
        function (o) {
          try {
            t(r.parse(o));
          } catch (c) {
            i ? i(c) : console.error(c), r.manager.itemError(e);
          }
        },
        n,
        i
      );
  }
  parse(e) {
    const t = this;
    function n(Y, O) {
      if (Y.nodeType !== 1) return;
      const T = S(Y);
      let b = !1,
        q = null;
      switch (Y.nodeName) {
        case "svg":
          O = x(Y, O);
          break;
        case "style":
          r(Y);
          break;
        case "g":
          O = x(Y, O);
          break;
        case "path":
          (O = x(Y, O)), Y.hasAttribute("d") && (q = i(Y));
          break;
        case "rect":
          (O = x(Y, O)), (q = c(Y));
          break;
        case "polygon":
          (O = x(Y, O)), (q = l(Y));
          break;
        case "polyline":
          (O = x(Y, O)), (q = h(Y));
          break;
        case "circle":
          (O = x(Y, O)), (q = u(Y));
          break;
        case "ellipse":
          (O = x(Y, O)), (q = f(Y));
          break;
        case "line":
          (O = x(Y, O)), (q = d(Y));
          break;
        case "defs":
          b = !0;
          break;
        case "use":
          O = x(Y, O);
          const le = (
              Y.getAttributeNS("http://www.w3.org/1999/xlink", "href") || ""
            ).substring(1),
            ge = Y.viewportElement.getElementById(le);
          ge
            ? n(ge, O)
            : console.warn(
                "SVGLoader: 'use node' references non-existent node id: " + le
              );
          break;
      }
      q &&
        (O.fill !== void 0 && O.fill !== "none" && q.color.setStyle(O.fill, e_),
        w(q, Ae),
        V.push(q),
        (q.userData = { node: Y, style: O }));
      const re = Y.childNodes;
      for (let H = 0; H < re.length; H++) {
        const le = re[H];
        (b && le.nodeName !== "style" && le.nodeName !== "defs") || n(le, O);
      }
      T && (Z.pop(), Z.length > 0 ? Ae.copy(Z[Z.length - 1]) : Ae.identity());
    }
    function i(Y) {
      const O = new Qn(),
        T = new oe(),
        b = new oe(),
        q = new oe();
      let re = !0,
        H = !1;
      const le = Y.getAttribute("d");
      if (le === "" || le === "none") return null;
      const ge = le.match(/[a-df-z][^a-df-z]*/gi);
      for (let he = 0, z = ge.length; he < z; he++) {
        const y = ge[he],
          j = y.charAt(0),
          J = y.slice(1).trim();
        re === !0 && ((H = !0), (re = !1));
        let D;
        switch (j) {
          case "M":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 2)
              (T.x = D[C + 0]),
                (T.y = D[C + 1]),
                (b.x = T.x),
                (b.y = T.y),
                C === 0 ? O.moveTo(T.x, T.y) : O.lineTo(T.x, T.y),
                C === 0 && q.copy(T);
            break;
          case "H":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C++)
              (T.x = D[C]),
                (b.x = T.x),
                (b.y = T.y),
                O.lineTo(T.x, T.y),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "V":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C++)
              (T.y = D[C]),
                (b.x = T.x),
                (b.y = T.y),
                O.lineTo(T.x, T.y),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "L":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 2)
              (T.x = D[C + 0]),
                (T.y = D[C + 1]),
                (b.x = T.x),
                (b.y = T.y),
                O.lineTo(T.x, T.y),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "C":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 6)
              O.bezierCurveTo(
                D[C + 0],
                D[C + 1],
                D[C + 2],
                D[C + 3],
                D[C + 4],
                D[C + 5]
              ),
                (b.x = D[C + 2]),
                (b.y = D[C + 3]),
                (T.x = D[C + 4]),
                (T.y = D[C + 5]),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "S":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 4)
              O.bezierCurveTo(
                g(T.x, b.x),
                g(T.y, b.y),
                D[C + 0],
                D[C + 1],
                D[C + 2],
                D[C + 3]
              ),
                (b.x = D[C + 0]),
                (b.y = D[C + 1]),
                (T.x = D[C + 2]),
                (T.y = D[C + 3]),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "Q":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 4)
              O.quadraticCurveTo(D[C + 0], D[C + 1], D[C + 2], D[C + 3]),
                (b.x = D[C + 0]),
                (b.y = D[C + 1]),
                (T.x = D[C + 2]),
                (T.y = D[C + 3]),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "T":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 2) {
              const ce = g(T.x, b.x),
                be = g(T.y, b.y);
              O.quadraticCurveTo(ce, be, D[C + 0], D[C + 1]),
                (b.x = ce),
                (b.y = be),
                (T.x = D[C + 0]),
                (T.y = D[C + 1]),
                C === 0 && H === !0 && q.copy(T);
            }
            break;
          case "A":
            D = m(J, [3, 4], 7);
            for (let C = 0, ae = D.length; C < ae; C += 7) {
              if (D[C + 5] == T.x && D[C + 6] == T.y) continue;
              const ce = T.clone();
              (T.x = D[C + 5]),
                (T.y = D[C + 6]),
                (b.x = T.x),
                (b.y = T.y),
                a(O, D[C], D[C + 1], D[C + 2], D[C + 3], D[C + 4], ce, T),
                C === 0 && H === !0 && q.copy(T);
            }
            break;
          case "m":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 2)
              (T.x += D[C + 0]),
                (T.y += D[C + 1]),
                (b.x = T.x),
                (b.y = T.y),
                C === 0 ? O.moveTo(T.x, T.y) : O.lineTo(T.x, T.y),
                C === 0 && q.copy(T);
            break;
          case "h":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C++)
              (T.x += D[C]),
                (b.x = T.x),
                (b.y = T.y),
                O.lineTo(T.x, T.y),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "v":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C++)
              (T.y += D[C]),
                (b.x = T.x),
                (b.y = T.y),
                O.lineTo(T.x, T.y),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "l":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 2)
              (T.x += D[C + 0]),
                (T.y += D[C + 1]),
                (b.x = T.x),
                (b.y = T.y),
                O.lineTo(T.x, T.y),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "c":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 6)
              O.bezierCurveTo(
                T.x + D[C + 0],
                T.y + D[C + 1],
                T.x + D[C + 2],
                T.y + D[C + 3],
                T.x + D[C + 4],
                T.y + D[C + 5]
              ),
                (b.x = T.x + D[C + 2]),
                (b.y = T.y + D[C + 3]),
                (T.x += D[C + 4]),
                (T.y += D[C + 5]),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "s":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 4)
              O.bezierCurveTo(
                g(T.x, b.x),
                g(T.y, b.y),
                T.x + D[C + 0],
                T.y + D[C + 1],
                T.x + D[C + 2],
                T.y + D[C + 3]
              ),
                (b.x = T.x + D[C + 0]),
                (b.y = T.y + D[C + 1]),
                (T.x += D[C + 2]),
                (T.y += D[C + 3]),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "q":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 4)
              O.quadraticCurveTo(
                T.x + D[C + 0],
                T.y + D[C + 1],
                T.x + D[C + 2],
                T.y + D[C + 3]
              ),
                (b.x = T.x + D[C + 0]),
                (b.y = T.y + D[C + 1]),
                (T.x += D[C + 2]),
                (T.y += D[C + 3]),
                C === 0 && H === !0 && q.copy(T);
            break;
          case "t":
            D = m(J);
            for (let C = 0, ae = D.length; C < ae; C += 2) {
              const ce = g(T.x, b.x),
                be = g(T.y, b.y);
              O.quadraticCurveTo(ce, be, T.x + D[C + 0], T.y + D[C + 1]),
                (b.x = ce),
                (b.y = be),
                (T.x = T.x + D[C + 0]),
                (T.y = T.y + D[C + 1]),
                C === 0 && H === !0 && q.copy(T);
            }
            break;
          case "a":
            D = m(J, [3, 4], 7);
            for (let C = 0, ae = D.length; C < ae; C += 7) {
              if (D[C + 5] == 0 && D[C + 6] == 0) continue;
              const ce = T.clone();
              (T.x += D[C + 5]),
                (T.y += D[C + 6]),
                (b.x = T.x),
                (b.y = T.y),
                a(O, D[C], D[C + 1], D[C + 2], D[C + 3], D[C + 4], ce, T),
                C === 0 && H === !0 && q.copy(T);
            }
            break;
          case "Z":
          case "z":
            (O.currentPath.autoClose = !0),
              O.currentPath.curves.length > 0 &&
                (T.copy(q), O.currentPath.currentPoint.copy(T), (re = !0));
            break;
          default:
            console.warn(y);
        }
        H = !1;
      }
      return O;
    }
    function r(Y) {
      if (!(!Y.sheet || !Y.sheet.cssRules || !Y.sheet.cssRules.length))
        for (let O = 0; O < Y.sheet.cssRules.length; O++) {
          const T = Y.sheet.cssRules[O];
          if (T.type !== 1) continue;
          const b = T.selectorText
            .split(/,/gm)
            .filter(Boolean)
            .map((q) => q.trim());
          for (let q = 0; q < b.length; q++) {
            const re = Object.fromEntries(
              Object.entries(T.style).filter(([, H]) => H !== "")
            );
            K[b[q]] = Object.assign(K[b[q]] || {}, re);
          }
        }
    }
    function a(Y, O, T, b, q, re, H, le) {
      if (O == 0 || T == 0) {
        Y.lineTo(le.x, le.y);
        return;
      }
      (b = (b * Math.PI) / 180), (O = Math.abs(O)), (T = Math.abs(T));
      const ge = (H.x - le.x) / 2,
        he = (H.y - le.y) / 2,
        z = Math.cos(b) * ge + Math.sin(b) * he,
        y = -Math.sin(b) * ge + Math.cos(b) * he;
      let j = O * O,
        J = T * T;
      const D = z * z,
        C = y * y,
        ae = D / j + C / J;
      if (ae > 1) {
        const ye = Math.sqrt(ae);
        (O = ye * O), (T = ye * T), (j = O * O), (J = T * T);
      }
      const ce = j * C + J * D,
        be = (j * J - ce) / ce;
      let P = Math.sqrt(Math.max(0, be));
      q === re && (P = -P);
      const v = (P * O * y) / T,
        G = (-P * T * z) / O,
        ie = Math.cos(b) * v - Math.sin(b) * G + (H.x + le.x) / 2,
        fe = Math.sin(b) * v + Math.cos(b) * G + (H.y + le.y) / 2,
        te = o(1, 0, (z - v) / O, (y - G) / T),
        Le =
          o((z - v) / O, (y - G) / T, (-z - v) / O, (-y - G) / T) %
          (Math.PI * 2);
      Y.currentPath.absellipse(ie, fe, O, T, te, te + Le, re === 0, b);
    }
    function o(Y, O, T, b) {
      const q = Y * T + O * b,
        re = Math.sqrt(Y * Y + O * O) * Math.sqrt(T * T + b * b);
      let H = Math.acos(Math.max(-1, Math.min(1, q / re)));
      return Y * b - O * T < 0 && (H = -H), H;
    }
    function c(Y) {
      const O = _(Y.getAttribute("x") || 0),
        T = _(Y.getAttribute("y") || 0),
        b = _(Y.getAttribute("rx") || Y.getAttribute("ry") || 0),
        q = _(Y.getAttribute("ry") || Y.getAttribute("rx") || 0),
        re = _(Y.getAttribute("width")),
        H = _(Y.getAttribute("height")),
        le = 1 - 0.551915024494,
        ge = new Qn();
      return (
        ge.moveTo(O + b, T),
        ge.lineTo(O + re - b, T),
        (b !== 0 || q !== 0) &&
          ge.bezierCurveTo(
            O + re - b * le,
            T,
            O + re,
            T + q * le,
            O + re,
            T + q
          ),
        ge.lineTo(O + re, T + H - q),
        (b !== 0 || q !== 0) &&
          ge.bezierCurveTo(
            O + re,
            T + H - q * le,
            O + re - b * le,
            T + H,
            O + re - b,
            T + H
          ),
        ge.lineTo(O + b, T + H),
        (b !== 0 || q !== 0) &&
          ge.bezierCurveTo(O + b * le, T + H, O, T + H - q * le, O, T + H - q),
        ge.lineTo(O, T + q),
        (b !== 0 || q !== 0) &&
          ge.bezierCurveTo(O, T + q * le, O + b * le, T, O + b, T),
        ge
      );
    }
    function l(Y) {
      function O(re, H, le) {
        const ge = _(H),
          he = _(le);
        q === 0 ? b.moveTo(ge, he) : b.lineTo(ge, he), q++;
      }
      const T =
          /([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,
        b = new Qn();
      let q = 0;
      return (
        Y.getAttribute("points").replace(T, O),
        (b.currentPath.autoClose = !0),
        b
      );
    }
    function h(Y) {
      function O(re, H, le) {
        const ge = _(H),
          he = _(le);
        q === 0 ? b.moveTo(ge, he) : b.lineTo(ge, he), q++;
      }
      const T =
          /([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,
        b = new Qn();
      let q = 0;
      return (
        Y.getAttribute("points").replace(T, O),
        (b.currentPath.autoClose = !1),
        b
      );
    }
    function u(Y) {
      const O = _(Y.getAttribute("cx") || 0),
        T = _(Y.getAttribute("cy") || 0),
        b = _(Y.getAttribute("r") || 0),
        q = new Ii();
      q.absarc(O, T, b, 0, Math.PI * 2);
      const re = new Qn();
      return re.subPaths.push(q), re;
    }
    function f(Y) {
      const O = _(Y.getAttribute("cx") || 0),
        T = _(Y.getAttribute("cy") || 0),
        b = _(Y.getAttribute("rx") || 0),
        q = _(Y.getAttribute("ry") || 0),
        re = new Ii();
      re.absellipse(O, T, b, q, 0, Math.PI * 2);
      const H = new Qn();
      return H.subPaths.push(re), H;
    }
    function d(Y) {
      const O = _(Y.getAttribute("x1") || 0),
        T = _(Y.getAttribute("y1") || 0),
        b = _(Y.getAttribute("x2") || 0),
        q = _(Y.getAttribute("y2") || 0),
        re = new Qn();
      return (
        re.moveTo(O, T), re.lineTo(b, q), (re.currentPath.autoClose = !1), re
      );
    }
    function x(Y, O) {
      O = Object.assign({}, O);
      let T = {};
      if (Y.hasAttribute("class")) {
        const H = Y.getAttribute("class")
          .split(/\s/)
          .filter(Boolean)
          .map((le) => le.trim());
        for (let le = 0; le < H.length; le++)
          T = Object.assign(T, K["." + H[le]]);
      }
      Y.hasAttribute("id") &&
        (T = Object.assign(T, K["#" + Y.getAttribute("id")]));
      function b(H, le, ge) {
        ge === void 0 &&
          (ge = function (z) {
            return (
              z.startsWith("url") &&
                console.warn(
                  "SVGLoader: url access in attributes is not implemented."
                ),
              z
            );
          }),
          Y.hasAttribute(H) && (O[le] = ge(Y.getAttribute(H))),
          T[H] && (O[le] = ge(T[H])),
          Y.style && Y.style[H] !== "" && (O[le] = ge(Y.style[H]));
      }
      function q(H) {
        return Math.max(0, Math.min(1, _(H)));
      }
      function re(H) {
        return Math.max(0, _(H));
      }
      return (
        b("fill", "fill"),
        b("fill-opacity", "fillOpacity", q),
        b("fill-rule", "fillRule"),
        b("opacity", "opacity", q),
        b("stroke", "stroke"),
        b("stroke-opacity", "strokeOpacity", q),
        b("stroke-width", "strokeWidth", re),
        b("stroke-linejoin", "strokeLineJoin"),
        b("stroke-linecap", "strokeLineCap"),
        b("stroke-miterlimit", "strokeMiterLimit", re),
        b("visibility", "visibility"),
        O
      );
    }
    function g(Y, O) {
      return Y - (O - Y);
    }
    function m(Y, O, T) {
      if (typeof Y != "string")
        throw new TypeError("Invalid input: " + typeof Y);
      const b = {
          WHITESPACE: /[ \t\r\n]/,
          DIGIT: /[\d]/,
          SIGN: /[-+]/,
          POINT: /\./,
          COMMA: /,/,
          EXP: /e/i,
          FLAGS: /[01]/,
        },
        q = 0,
        re = 1,
        H = 2,
        le = 3;
      let ge = q,
        he = !0,
        z = "",
        y = "";
      const j = [];
      function J(ce, be, P) {
        const v = new SyntaxError(
          'Unexpected character "' + ce + '" at index ' + be + "."
        );
        throw ((v.partial = P), v);
      }
      function D() {
        z !== "" &&
          (y === ""
            ? j.push(Number(z))
            : j.push(Number(z) * Math.pow(10, Number(y)))),
          (z = ""),
          (y = "");
      }
      let C;
      const ae = Y.length;
      for (let ce = 0; ce < ae; ce++) {
        if (
          ((C = Y[ce]),
          Array.isArray(O) && O.includes(j.length % T) && b.FLAGS.test(C))
        ) {
          (ge = re), (z = C), D();
          continue;
        }
        if (ge === q) {
          if (b.WHITESPACE.test(C)) continue;
          if (b.DIGIT.test(C) || b.SIGN.test(C)) {
            (ge = re), (z = C);
            continue;
          }
          if (b.POINT.test(C)) {
            (ge = H), (z = C);
            continue;
          }
          b.COMMA.test(C) && (he && J(C, ce, j), (he = !0));
        }
        if (ge === re) {
          if (b.DIGIT.test(C)) {
            z += C;
            continue;
          }
          if (b.POINT.test(C)) {
            (z += C), (ge = H);
            continue;
          }
          if (b.EXP.test(C)) {
            ge = le;
            continue;
          }
          b.SIGN.test(C) && z.length === 1 && b.SIGN.test(z[0]) && J(C, ce, j);
        }
        if (ge === H) {
          if (b.DIGIT.test(C)) {
            z += C;
            continue;
          }
          if (b.EXP.test(C)) {
            ge = le;
            continue;
          }
          b.POINT.test(C) && z[z.length - 1] === "." && J(C, ce, j);
        }
        if (ge === le) {
          if (b.DIGIT.test(C)) {
            y += C;
            continue;
          }
          if (b.SIGN.test(C)) {
            if (y === "") {
              y += C;
              continue;
            }
            y.length === 1 && b.SIGN.test(y) && J(C, ce, j);
          }
        }
        b.WHITESPACE.test(C)
          ? (D(), (ge = q), (he = !1))
          : b.COMMA.test(C)
          ? (D(), (ge = q), (he = !0))
          : b.SIGN.test(C)
          ? (D(), (ge = re), (z = C))
          : b.POINT.test(C)
          ? (D(), (ge = H), (z = C))
          : J(C, ce, j);
      }
      return D(), j;
    }
    const p = ["mm", "cm", "in", "pt", "pc", "px"],
      R = {
        mm: {
          mm: 1,
          cm: 0.1,
          in: 1 / 25.4,
          pt: 72 / 25.4,
          pc: 6 / 25.4,
          px: -1,
        },
        cm: {
          mm: 10,
          cm: 1,
          in: 1 / 2.54,
          pt: 72 / 2.54,
          pc: 6 / 2.54,
          px: -1,
        },
        in: { mm: 25.4, cm: 2.54, in: 1, pt: 72, pc: 6, px: -1 },
        pt: {
          mm: 25.4 / 72,
          cm: 2.54 / 72,
          in: 1 / 72,
          pt: 1,
          pc: 6 / 72,
          px: -1,
        },
        pc: {
          mm: 25.4 / 6,
          cm: 2.54 / 6,
          in: 1 / 6,
          pt: 72 / 6,
          pc: 1,
          px: -1,
        },
        px: { px: 1 },
      };
    function _(Y) {
      let O = "px";
      if (typeof Y == "string" || Y instanceof String)
        for (let b = 0, q = p.length; b < q; b++) {
          const re = p[b];
          if (Y.endsWith(re)) {
            (O = re), (Y = Y.substring(0, Y.length - re.length));
            break;
          }
        }
      let T;
      return (
        O === "px" && t.defaultUnit !== "px"
          ? (T = R.in[t.defaultUnit] / t.defaultDPI)
          : ((T = R[O][t.defaultUnit]), T < 0 && (T = R[O].in * t.defaultDPI)),
        T * parseFloat(Y)
      );
    }
    function S(Y) {
      if (
        !(
          Y.hasAttribute("transform") ||
          (Y.nodeName === "use" && (Y.hasAttribute("x") || Y.hasAttribute("y")))
        )
      )
        return null;
      const O = L(Y);
      return (
        Z.length > 0 && O.premultiply(Z[Z.length - 1]), Ae.copy(O), Z.push(O), O
      );
    }
    function L(Y) {
      const O = new Ge(),
        T = ne;
      if (
        Y.nodeName === "use" &&
        (Y.hasAttribute("x") || Y.hasAttribute("y"))
      ) {
        const b = _(Y.getAttribute("x") || 0),
          q = _(Y.getAttribute("y") || 0);
        O.translate(b, q);
      }
      if (Y.hasAttribute("transform")) {
        const b = Y.getAttribute("transform").split(")");
        for (let q = b.length - 1; q >= 0; q--) {
          const re = b[q].trim();
          if (re === "") continue;
          const H = re.indexOf("("),
            le = re.length;
          if (H > 0 && H < le) {
            const ge = re.slice(0, H),
              he = m(re.slice(H + 1));
            switch ((T.identity(), ge)) {
              case "translate":
                if (he.length >= 1) {
                  const z = he[0];
                  let y = 0;
                  he.length >= 2 && (y = he[1]), T.translate(z, y);
                }
                break;
              case "rotate":
                if (he.length >= 1) {
                  let z = 0,
                    y = 0,
                    j = 0;
                  (z = (he[0] * Math.PI) / 180),
                    he.length >= 3 && ((y = he[1]), (j = he[2])),
                    $.makeTranslation(-y, -j),
                    se.makeRotation(z),
                    k.multiplyMatrices(se, $),
                    $.makeTranslation(y, j),
                    T.multiplyMatrices($, k);
                }
                break;
              case "scale":
                if (he.length >= 1) {
                  const z = he[0];
                  let y = z;
                  he.length >= 2 && (y = he[1]), T.scale(z, y);
                }
                break;
              case "skewX":
                he.length === 1 &&
                  T.set(
                    1,
                    Math.tan((he[0] * Math.PI) / 180),
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1
                  );
                break;
              case "skewY":
                he.length === 1 &&
                  T.set(
                    1,
                    0,
                    0,
                    Math.tan((he[0] * Math.PI) / 180),
                    1,
                    0,
                    0,
                    0,
                    1
                  );
                break;
              case "matrix":
                he.length === 6 &&
                  T.set(he[0], he[2], he[4], he[1], he[3], he[5], 0, 0, 1);
                break;
            }
          }
          O.premultiply(T);
        }
      }
      return O;
    }
    function w(Y, O) {
      function T(H) {
        pe.set(H.x, H.y, 1).applyMatrix3(O), H.set(pe.x, pe.y);
      }
      function b(H) {
        const le = H.xRadius,
          ge = H.yRadius,
          he = Math.cos(H.aRotation),
          z = Math.sin(H.aRotation),
          y = new F(le * he, le * z, 0),
          j = new F(-ge * z, ge * he, 0),
          J = y.applyMatrix3(O),
          D = j.applyMatrix3(O),
          C = ne.set(J.x, D.x, 0, J.y, D.y, 0, 0, 0, 1),
          ae = $.copy(C).invert(),
          P = se.copy(ae).transpose().multiply(ae).elements,
          v = U(P[0], P[1], P[4]),
          G = Math.sqrt(v.rt1),
          ie = Math.sqrt(v.rt2);
        if (
          ((H.xRadius = 1 / G),
          (H.yRadius = 1 / ie),
          (H.aRotation = Math.atan2(v.sn, v.cs)),
          !((H.aEndAngle - H.aStartAngle) % (2 * Math.PI) < Number.EPSILON))
        ) {
          const te = $.set(G, 0, 0, 0, ie, 0, 0, 0, 1),
            Le = se.set(v.cs, v.sn, 0, -v.sn, v.cs, 0, 0, 0, 1),
            ye = te.multiply(Le).multiply(C),
            Ne = (Pe) => {
              const { x: me, y: _e } = new F(
                Math.cos(Pe),
                Math.sin(Pe),
                0
              ).applyMatrix3(ye);
              return Math.atan2(_e, me);
            };
          (H.aStartAngle = Ne(H.aStartAngle)),
            (H.aEndAngle = Ne(H.aEndAngle)),
            I(O) && (H.aClockwise = !H.aClockwise);
        }
      }
      function q(H) {
        const le = E(O),
          ge = M(O);
        (H.xRadius *= le), (H.yRadius *= ge);
        const he =
          le > Number.EPSILON
            ? Math.atan2(O.elements[1], O.elements[0])
            : Math.atan2(-O.elements[3], O.elements[4]);
        (H.aRotation += he),
          I(O) &&
            ((H.aStartAngle *= -1),
            (H.aEndAngle *= -1),
            (H.aClockwise = !H.aClockwise));
      }
      const re = Y.subPaths;
      for (let H = 0, le = re.length; H < le; H++) {
        const he = re[H].curves;
        for (let z = 0; z < he.length; z++) {
          const y = he[z];
          y.isLineCurve
            ? (T(y.v1), T(y.v2))
            : y.isCubicBezierCurve
            ? (T(y.v0), T(y.v1), T(y.v2), T(y.v3))
            : y.isQuadraticBezierCurve
            ? (T(y.v0), T(y.v1), T(y.v2))
            : y.isEllipseCurve &&
              (de.set(y.aX, y.aY),
              T(de),
              (y.aX = de.x),
              (y.aY = de.y),
              N(O) ? b(y) : q(y));
        }
      }
    }
    function I(Y) {
      const O = Y.elements;
      return O[0] * O[4] - O[1] * O[3] < 0;
    }
    function N(Y) {
      const O = Y.elements,
        T = O[0] * O[3] + O[1] * O[4];
      if (T === 0) return !1;
      const b = E(Y),
        q = M(Y);
      return Math.abs(T / (b * q)) > Number.EPSILON;
    }
    function E(Y) {
      const O = Y.elements;
      return Math.sqrt(O[0] * O[0] + O[1] * O[1]);
    }
    function M(Y) {
      const O = Y.elements;
      return Math.sqrt(O[3] * O[3] + O[4] * O[4]);
    }
    function U(Y, O, T) {
      let b, q, re, H, le;
      const ge = Y + T,
        he = Y - T,
        z = Math.sqrt(he * he + 4 * O * O);
      return (
        ge > 0
          ? ((b = 0.5 * (ge + z)), (le = 1 / b), (q = Y * le * T - O * le * O))
          : ge < 0
          ? (q = 0.5 * (ge - z))
          : ((b = 0.5 * z), (q = -0.5 * z)),
        he > 0 ? (re = he + z) : (re = he - z),
        Math.abs(re) > 2 * Math.abs(O)
          ? ((le = (-2 * O) / re),
            (H = 1 / Math.sqrt(1 + le * le)),
            (re = le * H))
          : Math.abs(O) === 0
          ? ((re = 1), (H = 0))
          : ((le = (-0.5 * re) / O),
            (re = 1 / Math.sqrt(1 + le * le)),
            (H = le * re)),
        he > 0 && ((le = re), (re = -H), (H = le)),
        { rt1: b, rt2: q, cs: re, sn: H }
      );
    }
    const V = [],
      K = {},
      Z = [],
      ne = new Ge(),
      $ = new Ge(),
      se = new Ge(),
      k = new Ge(),
      de = new oe(),
      pe = new F(),
      Ae = new Ge(),
      Ve = new DOMParser().parseFromString(e, "image/svg+xml");
    return (
      n(Ve.documentElement, {
        fill: "#000",
        fillOpacity: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
        strokeLineJoin: "miter",
        strokeLineCap: "butt",
        strokeMiterLimit: 4,
      }),
      { paths: V, xml: Ve.documentElement }
    );
  }
  static createShapes(e) {
    const n = {
        ORIGIN: 0,
        DESTINATION: 1,
        BETWEEN: 2,
        LEFT: 3,
        RIGHT: 4,
        BEHIND: 5,
        BEYOND: 6,
      },
      i = { loc: n.ORIGIN, t: 0 };
    function r(g, m, p, R) {
      const _ = g.x,
        S = m.x,
        L = p.x,
        w = R.x,
        I = g.y,
        N = m.y,
        E = p.y,
        M = R.y,
        U = (w - L) * (I - E) - (M - E) * (_ - L),
        V = (S - _) * (I - E) - (N - I) * (_ - L),
        K = (M - E) * (S - _) - (w - L) * (N - I),
        Z = U / K,
        ne = V / K;
      if ((K === 0 && U !== 0) || Z <= 0 || Z >= 1 || ne < 0 || ne > 1)
        return null;
      if (U === 0 && K === 0) {
        for (let $ = 0; $ < 2; $++)
          if ((a($ === 0 ? p : R, g, m), i.loc == n.ORIGIN)) {
            const se = $ === 0 ? p : R;
            return { x: se.x, y: se.y, t: i.t };
          } else if (i.loc == n.BETWEEN) {
            const se = +(_ + i.t * (S - _)).toPrecision(10),
              k = +(I + i.t * (N - I)).toPrecision(10);
            return { x: se, y: k, t: i.t };
          }
        return null;
      } else {
        for (let k = 0; k < 2; k++)
          if ((a(k === 0 ? p : R, g, m), i.loc == n.ORIGIN)) {
            const de = k === 0 ? p : R;
            return { x: de.x, y: de.y, t: i.t };
          }
        const $ = +(_ + Z * (S - _)).toPrecision(10),
          se = +(I + Z * (N - I)).toPrecision(10);
        return { x: $, y: se, t: Z };
      }
    }
    function a(g, m, p) {
      const R = p.x - m.x,
        _ = p.y - m.y,
        S = g.x - m.x,
        L = g.y - m.y,
        w = R * L - S * _;
      if (g.x === m.x && g.y === m.y) {
        (i.loc = n.ORIGIN), (i.t = 0);
        return;
      }
      if (g.x === p.x && g.y === p.y) {
        (i.loc = n.DESTINATION), (i.t = 1);
        return;
      }
      if (w < -Number.EPSILON) {
        i.loc = n.LEFT;
        return;
      }
      if (w > Number.EPSILON) {
        i.loc = n.RIGHT;
        return;
      }
      if (R * S < 0 || _ * L < 0) {
        i.loc = n.BEHIND;
        return;
      }
      if (Math.sqrt(R * R + _ * _) < Math.sqrt(S * S + L * L)) {
        i.loc = n.BEYOND;
        return;
      }
      let I;
      R !== 0 ? (I = S / R) : (I = L / _), (i.loc = n.BETWEEN), (i.t = I);
    }
    function o(g, m) {
      const p = [],
        R = [];
      for (let _ = 1; _ < g.length; _++) {
        const S = g[_ - 1],
          L = g[_];
        for (let w = 1; w < m.length; w++) {
          const I = m[w - 1],
            N = m[w],
            E = r(S, L, I, N);
          E !== null &&
            p.find(
              (M) => M.t <= E.t + Number.EPSILON && M.t >= E.t - Number.EPSILON
            ) === void 0 &&
            (p.push(E), R.push(new oe(E.x, E.y)));
        }
      }
      return R;
    }
    function c(g, m, p) {
      const R = new oe();
      m.getCenter(R);
      const _ = [];
      return (
        p.forEach((S) => {
          S.boundingBox.containsPoint(R) &&
            o(g, S.points).forEach((w) => {
              _.push({ identifier: S.identifier, isCW: S.isCW, point: w });
            });
        }),
        _.sort((S, L) => S.point.x - L.point.x),
        _
      );
    }
    function l(g, m, p, R, _) {
      (_ == null || _ === "") && (_ = "nonzero");
      const S = new oe();
      g.boundingBox.getCenter(S);
      const L = [new oe(p, S.y), new oe(R, S.y)],
        w = c(L, g.boundingBox, m);
      w.sort((V, K) => V.point.x - K.point.x);
      const I = [],
        N = [];
      w.forEach((V) => {
        V.identifier === g.identifier ? I.push(V) : N.push(V);
      });
      const E = I[0].point.x,
        M = [];
      let U = 0;
      for (; U < N.length && N[U].point.x < E; )
        M.length > 0 && M[M.length - 1] === N[U].identifier
          ? M.pop()
          : M.push(N[U].identifier),
          U++;
      if ((M.push(g.identifier), _ === "evenodd")) {
        const V = M.length % 2 === 0,
          K = M[M.length - 2];
        return { identifier: g.identifier, isHole: V, for: K };
      } else if (_ === "nonzero") {
        let V = !0,
          K = null,
          Z = null;
        for (let ne = 0; ne < M.length; ne++) {
          const $ = M[ne];
          V
            ? ((Z = m[$].isCW), (V = !1), (K = $))
            : Z !== m[$].isCW && ((Z = m[$].isCW), (V = !0));
        }
        return { identifier: g.identifier, isHole: V, for: K };
      } else
        console.warn('fill-rule: "' + _ + '" is currently not implemented.');
    }
    let h = 999999999,
      u = -999999999,
      f = e.subPaths.map((g) => {
        const m = g.getPoints();
        let p = -999999999,
          R = 999999999,
          _ = -999999999,
          S = 999999999;
        for (let L = 0; L < m.length; L++) {
          const w = m[L];
          w.y > p && (p = w.y),
            w.y < R && (R = w.y),
            w.x > _ && (_ = w.x),
            w.x < S && (S = w.x);
        }
        return (
          u <= _ && (u = _ + 1),
          h >= S && (h = S - 1),
          {
            curves: g.curves,
            points: m,
            isCW: Hn.isClockWise(m),
            identifier: -1,
            boundingBox: new _d(new oe(S, R), new oe(_, p)),
          }
        );
      });
    f = f.filter((g) => g.points.length > 1);
    for (let g = 0; g < f.length; g++) f[g].identifier = g;
    const d = f.map((g) =>
        l(g, f, h, u, e.userData ? e.userData.style.fillRule : void 0)
      ),
      x = [];
    return (
      f.forEach((g) => {
        if (!d[g.identifier].isHole) {
          const p = new us();
          (p.curves = g.curves),
            d
              .filter((_) => _.isHole && _.for === g.identifier)
              .forEach((_) => {
                const S = f[_.identifier],
                  L = new Ii();
                (L.curves = S.curves), p.holes.push(L);
              }),
            x.push(p);
        }
      }),
      x
    );
  }
  static getStrokeStyle(e, t, n, i, r) {
    return (
      (e = e !== void 0 ? e : 1),
      (t = t !== void 0 ? t : "#000"),
      (n = n !== void 0 ? n : "miter"),
      (i = i !== void 0 ? i : "butt"),
      (r = r !== void 0 ? r : 4),
      {
        strokeColor: t,
        strokeWidth: e,
        strokeLineJoin: n,
        strokeLineCap: i,
        strokeMiterLimit: r,
      }
    );
  }
  static pointsToStroke(e, t, n, i) {
    const r = [],
      a = [],
      o = [];
    if (hh.pointsToStrokeWithBuffers(e, t, n, i, r, a, o) === 0) return null;
    const c = new kt();
    return (
      c.setAttribute("position", new Bt(r, 3)),
      c.setAttribute("normal", new Bt(a, 3)),
      c.setAttribute("uv", new Bt(o, 2)),
      c
    );
  }
  static pointsToStrokeWithBuffers(e, t, n, i, r, a, o, c) {
    const l = new oe(),
      h = new oe(),
      u = new oe(),
      f = new oe(),
      d = new oe(),
      x = new oe(),
      g = new oe(),
      m = new oe(),
      p = new oe(),
      R = new oe(),
      _ = new oe(),
      S = new oe(),
      L = new oe(),
      w = new oe(),
      I = new oe(),
      N = new oe(),
      E = new oe();
    (n = n !== void 0 ? n : 12),
      (i = i !== void 0 ? i : 0.001),
      (c = c !== void 0 ? c : 0),
      (e = he(e));
    const M = e.length;
    if (M < 2) return 0;
    const U = e[0].equals(e[M - 1]);
    let V,
      K = e[0],
      Z;
    const ne = t.strokeWidth / 2,
      $ = 1 / (M - 1);
    let se = 0,
      k,
      de,
      pe,
      Ae,
      Ve = !1,
      Ke = 0,
      Y = c * 3,
      O = c * 2;
    T(e[0], e[1], l).multiplyScalar(ne),
      m.copy(e[0]).sub(l),
      p.copy(e[0]).add(l),
      R.copy(m),
      _.copy(p);
    for (let z = 1; z < M; z++) {
      (V = e[z]),
        z === M - 1 ? (U ? (Z = e[1]) : (Z = void 0)) : (Z = e[z + 1]);
      const y = l;
      if (
        (T(K, V, y),
        u.copy(y).multiplyScalar(ne),
        S.copy(V).sub(u),
        L.copy(V).add(u),
        (k = se + $),
        (de = !1),
        Z !== void 0)
      ) {
        T(V, Z, h),
          u.copy(h).multiplyScalar(ne),
          w.copy(V).sub(u),
          I.copy(V).add(u),
          (pe = !0),
          u.subVectors(Z, K),
          y.dot(u) < 0 && (pe = !1),
          z === 1 && (Ve = pe),
          u.subVectors(Z, V),
          u.normalize();
        const j = Math.abs(y.dot(u));
        if (j > Number.EPSILON) {
          const J = ne / j;
          u.multiplyScalar(-J),
            f.subVectors(V, K),
            d.copy(f).setLength(J).add(u),
            N.copy(d).negate();
          const D = d.length(),
            C = f.length();
          f.divideScalar(C), x.subVectors(Z, V);
          const ae = x.length();
          switch (
            (x.divideScalar(ae),
            f.dot(N) < C && x.dot(N) < ae && (de = !0),
            E.copy(d).add(V),
            N.add(V),
            (Ae = !1),
            de ? (pe ? (I.copy(N), L.copy(N)) : (w.copy(N), S.copy(N))) : re(),
            t.strokeLineJoin)
          ) {
            case "bevel":
              H(pe, de, k);
              break;
            case "round":
              le(pe, de), pe ? q(V, S, w, k, 0) : q(V, I, L, k, 1);
              break;
            case "miter":
            case "miter-clip":
            default:
              const ce = (ne * t.strokeMiterLimit) / D;
              if (ce < 1)
                if (t.strokeLineJoin !== "miter-clip") {
                  H(pe, de, k);
                  break;
                } else
                  le(pe, de),
                    pe
                      ? (x.subVectors(E, S).multiplyScalar(ce).add(S),
                        g.subVectors(E, w).multiplyScalar(ce).add(w),
                        b(S, k, 0),
                        b(x, k, 0),
                        b(V, k, 0.5),
                        b(V, k, 0.5),
                        b(x, k, 0),
                        b(g, k, 0),
                        b(V, k, 0.5),
                        b(g, k, 0),
                        b(w, k, 0))
                      : (x.subVectors(E, L).multiplyScalar(ce).add(L),
                        g.subVectors(E, I).multiplyScalar(ce).add(I),
                        b(L, k, 1),
                        b(x, k, 1),
                        b(V, k, 0.5),
                        b(V, k, 0.5),
                        b(x, k, 1),
                        b(g, k, 1),
                        b(V, k, 0.5),
                        b(g, k, 1),
                        b(I, k, 1));
              else
                de
                  ? (pe
                      ? (b(p, se, 1),
                        b(m, se, 0),
                        b(E, k, 0),
                        b(p, se, 1),
                        b(E, k, 0),
                        b(N, k, 1))
                      : (b(p, se, 1),
                        b(m, se, 0),
                        b(E, k, 1),
                        b(m, se, 0),
                        b(N, k, 0),
                        b(E, k, 1)),
                    pe ? w.copy(E) : I.copy(E))
                  : pe
                  ? (b(S, k, 0),
                    b(E, k, 0),
                    b(V, k, 0.5),
                    b(V, k, 0.5),
                    b(E, k, 0),
                    b(w, k, 0))
                  : (b(L, k, 1),
                    b(E, k, 1),
                    b(V, k, 0.5),
                    b(V, k, 0.5),
                    b(E, k, 1),
                    b(I, k, 1)),
                  (Ae = !0);
              break;
          }
        } else re();
      } else re();
      !U && z === M - 1 && ge(e[0], R, _, pe, !0, se),
        (se = k),
        (K = V),
        m.copy(w),
        p.copy(I);
    }
    if (!U) ge(V, S, L, pe, !1, k);
    else if (de && r) {
      let z = E,
        y = N;
      Ve !== pe && ((z = N), (y = E)),
        pe
          ? (Ae || Ve) &&
            (y.toArray(r, 0), y.toArray(r, 9), Ae && z.toArray(r, 3))
          : (Ae || !Ve) &&
            (y.toArray(r, 3), y.toArray(r, 9), Ae && z.toArray(r, 0));
    }
    return Ke;
    function T(z, y, j) {
      return j.subVectors(y, z), j.set(-j.y, j.x).normalize();
    }
    function b(z, y, j) {
      r &&
        ((r[Y] = z.x),
        (r[Y + 1] = z.y),
        (r[Y + 2] = 0),
        a && ((a[Y] = 0), (a[Y + 1] = 0), (a[Y + 2] = 1)),
        (Y += 3),
        o && ((o[O] = y), (o[O + 1] = j), (O += 2))),
        (Ke += 3);
    }
    function q(z, y, j, J, D) {
      l.copy(y).sub(z).normalize(), h.copy(j).sub(z).normalize();
      let C = Math.PI;
      const ae = l.dot(h);
      Math.abs(ae) < 1 && (C = Math.abs(Math.acos(ae))), (C /= n), u.copy(y);
      for (let ce = 0, be = n - 1; ce < be; ce++)
        f.copy(u).rotateAround(z, C),
          b(u, J, D),
          b(f, J, D),
          b(z, J, 0.5),
          u.copy(f);
      b(f, J, D), b(j, J, D), b(z, J, 0.5);
    }
    function re() {
      b(p, se, 1), b(m, se, 0), b(S, k, 0), b(p, se, 1), b(S, k, 0), b(L, k, 1);
    }
    function H(z, y, j) {
      y
        ? z
          ? (b(p, se, 1),
            b(m, se, 0),
            b(S, k, 0),
            b(p, se, 1),
            b(S, k, 0),
            b(N, k, 1),
            b(S, j, 0),
            b(w, j, 0),
            b(N, j, 0.5))
          : (b(p, se, 1),
            b(m, se, 0),
            b(L, k, 1),
            b(m, se, 0),
            b(N, k, 0),
            b(L, k, 1),
            b(L, j, 1),
            b(N, j, 0),
            b(I, j, 1))
        : z
        ? (b(S, j, 0), b(w, j, 0), b(V, j, 0.5))
        : (b(L, j, 1), b(I, j, 0), b(V, j, 0.5));
    }
    function le(z, y) {
      y &&
        (z
          ? (b(p, se, 1),
            b(m, se, 0),
            b(S, k, 0),
            b(p, se, 1),
            b(S, k, 0),
            b(N, k, 1),
            b(S, se, 0),
            b(V, k, 0.5),
            b(N, k, 1),
            b(V, k, 0.5),
            b(w, se, 0),
            b(N, k, 1))
          : (b(p, se, 1),
            b(m, se, 0),
            b(L, k, 1),
            b(m, se, 0),
            b(N, k, 0),
            b(L, k, 1),
            b(L, se, 1),
            b(N, k, 0),
            b(V, k, 0.5),
            b(V, k, 0.5),
            b(N, k, 0),
            b(I, se, 1)));
    }
    function ge(z, y, j, J, D, C) {
      switch (t.strokeLineCap) {
        case "round":
          D ? q(z, j, y, C, 0.5) : q(z, y, j, C, 0.5);
          break;
        case "square":
          if (D)
            l.subVectors(y, z),
              h.set(l.y, -l.x),
              u.addVectors(l, h).add(z),
              f.subVectors(h, l).add(z),
              J
                ? (u.toArray(r, 3), f.toArray(r, 0), f.toArray(r, 9))
                : (u.toArray(r, 3),
                  o[7] === 1 ? f.toArray(r, 9) : u.toArray(r, 9),
                  f.toArray(r, 0));
          else {
            l.subVectors(j, z),
              h.set(l.y, -l.x),
              u.addVectors(l, h).add(z),
              f.subVectors(h, l).add(z);
            const ae = r.length;
            J
              ? (u.toArray(r, ae - 3),
                f.toArray(r, ae - 6),
                f.toArray(r, ae - 12))
              : (f.toArray(r, ae - 6),
                u.toArray(r, ae - 3),
                f.toArray(r, ae - 12));
          }
          break;
      }
    }
    function he(z) {
      let y = !1;
      for (let J = 1, D = z.length - 1; J < D; J++)
        if (z[J].distanceTo(z[J + 1]) < i) {
          y = !0;
          break;
        }
      if (!y) return z;
      const j = [];
      j.push(z[0]);
      for (let J = 1, D = z.length - 1; J < D; J++)
        z[J].distanceTo(z[J + 1]) >= i && j.push(z[J]);
      return j.push(z[z.length - 1]), j;
    }
  }
}
export {
  s_ as D,
  Ql as E,
  i_ as G,
  un as M,
  pt as O,
  Lt as P,
  Io as R,
  t_ as S,
  St as T,
  n_ as W,
  ad as a,
  yh as b,
  r_ as c,
  yr as d,
  hh as e,
  _n as f,
  ai as g,
  ri as h,
  cn as i,
  Wt as j,
  ed as k,
  Ma as l,
  gt as m,
  Cl as n,
};
