var A = Object.defineProperty;
var D = (m, e, t) =>
  e in m
    ? A(m, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (m[e] = t);
var i = (m, e, t) => D(m, typeof e != "symbol" ? e + "" : e, t);
import {
  r as S,
  R as W,
  g as E,
  a as w,
  b,
  _ as B,
  v as G,
  u as H,
  c as I,
  o as P,
  d as z,
  e as F,
  f as X,
  w as Y,
  h as y,
  i as U,
  j as N,
  k as R,
  K as O,
  l as V,
  t as q,
  m as K,
  n as $,
  p as J,
  q as Q,
  s as Z,
  x as j,
  y as M,
} from "./index-w58kBX-A.js";
import { v as ee } from "./el-loading-DyxSlm0Y.js";
import {
  S as te,
  G as ie,
  e as x,
  D as se,
  f as ae,
  a as ne,
  O as re,
  g as oe,
  h as de,
  i as he,
  E as le,
  j as ce,
  k as me,
  l as ue,
  m as pe,
  P as fe,
  W as ge,
  b as we,
  n as c,
} from "./three-core-Cz6MriGW.js";
class ye {
  constructor() {
    i(this, "isInited", !1);
    i(this, "container", null);
    i(this, "scene", null);
    i(this, "camera", null);
    i(this, "renderer", null);
    i(this, "model", null);
    i(this, "directionalLight2", null);
    i(this, "frameId", null);
    i(this, "resTracker", null);
    i(this, "isRendering", !1);
    i(this, "head", null);
    i(this, "machineBody", null);
    i(this, "loadModel", S(!1));
    i(this, "leftArm", null);
    i(this, "rightArm", null);
    i(this, "leftHand", null);
    i(this, "rightHand", null);
    i(this, "targetRotation", { headX: 0, headY: 0, bodyX: 0, bodyY: 0 });
    i(this, "currentRotation", { headX: 0, headY: 0, bodyX: 0, bodyY: 0 });
    i(this, "lerpFactor", 0.05);
    i(this, "animate", (e = 0) => {
      !this.renderer ||
        !this.isRendering ||
        ((this.frameId = requestAnimationFrame(this.animate)),
        this.head &&
          this.machineBody &&
          ((this.head.rotation.x = c.lerp(
            this.head.rotation.x,
            this.targetRotation.headX,
            this.lerpFactor
          )),
          (this.head.rotation.y = c.lerp(
            this.head.rotation.y,
            this.targetRotation.headY,
            this.lerpFactor
          )),
          (this.machineBody.rotation.x = c.lerp(
            this.machineBody.rotation.x,
            this.targetRotation.bodyX,
            this.lerpFactor
          )),
          (this.machineBody.rotation.y = c.lerp(
            this.machineBody.rotation.y,
            this.targetRotation.bodyY,
            this.lerpFactor
          ))),
        this.renderer.render(this.scene, this.camera));
    });
  }
  initModel(e) {
    if (
      ((this.container = e),
      (this.loadModel.value = !1),
      this.isInited && this.renderer && this.camera)
    ) {
      this.container.appendChild(this.renderer.domElement),
        this.onWindowResize(),
        this.start();
      return;
    }
    this.isRendering = !0;
    const t = e.clientWidth,
      o = e.clientHeight;
    this.resTracker = new W();
    const a = this.resTracker.track.bind(this.resTracker);
    this.scene = a(new te());
    const h = a(new ie()),
      u = a(new x()),
      d = a(new se());
    d.setDecoderPath(E("draco")),
      d.setDecoderConfig({ type: "js" }),
      d.preload(),
      h.setDRACOLoader(d),
      h.load(
        w("model/machine-draco.glb"),
        (r) => {
          var n, l;
          if (
            ((this.model = a(r.scene)),
            (this.model.position.y -= 1.9),
            (n = this.model) == null || n.scale.set(1.2, 1.2, 1.2),
            (this.machineBody = this.findTopPart(
              (l = this.model) == null ? void 0 : l.children
            )),
            this.model.traverse((s) => {
              s.name === "Head" && (this.head = s),
                s.name === "arm" && (this.leftArm = s),
                s.name === "arm001" && (this.rightArm = s),
                s.name === "Hand" && (this.leftHand = s),
                s.name === "Hand002" && (this.rightHand = s),
                s.name === "Head_2" &&
                  (s.material = new ae({
                    metalness: 1,
                    roughness: 0,
                    color: 0,
                    sheen: 1,
                    sheenRoughness: 0,
                    clearcoat: 1,
                    clearcoatRoughness: 0,
                  })),
                s.isMesh && (s.material.needsUpdate = !0);
            }),
            (this.directionalLight2 = a(new ne(16777215, 1.45))),
            this.directionalLight2.position.set(0, 0.3, 2),
            this.model)
          ) {
            const s = a(new re());
            s.position.set(0, 180, 0), (this.directionalLight2.target = s);
          }
          this.scene.add(this.model);
        },
        (r) => {
          if (r.lengthComputable) {
            const n = Math.ceil((r.loaded / r.total) * 100);
            this.loadModel.value = n !== 100;
          }
        },
        () => {
          this.loadModel.value = !1;
        }
      ),
      u.load(w("model/logo.svg"), (r) => {
        const n = r.paths,
          l = a(new oe());
        for (let s = 0; s < n.length; s++) {
          const L = n[s],
            T = a(new de({ color: 16777215, side: he, depthWrite: !0 })),
            v = x.createShapes(L);
          for (let g = 0; g < v.length; g++) {
            const _ = v[g],
              k = new le(_, { depth: 2, bevelEnabled: !0 }),
              C = new ce(k, T);
            l.add(C);
          }
        }
        l.scale.set(0.1, 0.1, 0.1),
          l.position.set(-5.8, 3, -10),
          (l.rotation.x = 9.6),
          this.scene.add(l);
      }),
      new me().load(w("model/env.jpg"), (r) => {
        (r.mapping = ue), (r.colorSpace = pe), (this.scene.environment = r);
      }),
      (this.camera = a(
        new fe(30, window.innerWidth / window.innerHeight, 0.1, 2e3)
      )),
      this.camera.position.set(0, 0, 13),
      this.camera.lookAt(0, 0, 0),
      (this.renderer = a(
        new ge({ alpha: !0, antialias: !0, depth: !0, premultipliedAlpha: !0 })
      )),
      this.renderer.setSize(t, o),
      (this.renderer.shadowMap.type = we),
      e.appendChild(this.renderer.domElement),
      this.startAnimat(),
      this.animate(),
      (this.isInited = !0);
  }
  startAnimat() {
    this.camera &&
      setTimeout(() => {
        b.fromTo(
          this.camera.position,
          { x: 0, y: 0, z: 13 },
          {
            x: 0,
            y: 0,
            z: 9.5,
            duration: 2,
            ease: "power3.inOut",
            onUpdate: () => {
              var e;
              (e = this.camera) == null || e.updateProjectionMatrix();
            },
          }
        );
      }, 500);
  }
  stop() {
    (this.isRendering = !1),
      this.frameId !== null && cancelAnimationFrame(this.frameId);
  }
  start() {
    (this.isRendering = !0), this.animate();
  }
  disposeScene() {
    if (!this.renderer) return;
    cancelAnimationFrame(this.frameId),
      this.scene && this.scene.clear(),
      this.resTracker && this.resTracker.dispose();
    const e = this.renderer.domElement;
    e && e.parentNode && e.parentNode.removeChild(e),
      this.renderer.dispose(),
      this.renderer.forceContextLoss(),
      this.renderer.info.reset(),
      (this.scene = null),
      (this.camera = null),
      (this.model = null),
      (this.resTracker = null),
      (this.renderer = null),
      (this.isInited = !1);
  }
  onWindowResize() {
    if (!this.camera || !this.renderer || !this.container) return;
    const e = this.container.clientWidth,
      t = this.container.clientHeight;
    (this.camera.aspect = e / t),
      this.camera.updateProjectionMatrix(),
      this.renderer.setSize(e, t);
  }
  removeListen() {
    window.removeEventListener("resize", () => this.onWindowResize()),
      window.removeEventListener("mousemove", (e) => this.listenMouse(e));
  }
  setListen() {
    this.removeListen(),
      window.addEventListener("resize", () => this.onWindowResize()),
      window.addEventListener("mousemove", (e) => this.listenMouse(e));
  }
  getMouseDegrees(e, t, o) {
    let a = 0,
      h = 0,
      u,
      d,
      p,
      r,
      n = { x: window.innerWidth, y: window.innerHeight };
    return (
      e <= n.x / 2 &&
        ((u = n.x / 2 - e),
        (d = (u / (n.x / 2)) * 100),
        (a = ((o * d) / 100) * -1)),
      e >= n.x / 2 &&
        ((u = e - n.x / 2), (d = (u / (n.x / 2)) * 100), (a = (o * d) / 100)),
      t <= n.y / 2 &&
        ((p = n.y / 2 - t),
        (r = (p / (n.y / 2)) * 100),
        (h = ((o * 0.5 * r) / 100) * -1)),
      t >= n.y / 2 &&
        ((p = t - n.y / 2), (r = (p / (n.y / 2)) * 100), (h = (o * r) / 100)),
      { x: a, y: h }
    );
  }
  listenMouse(e) {
    const t = { x: e.clientX, y: e.clientY },
      o = this.getMouseDegrees(t.x, t.y, 30);
    (this.targetRotation.headX = c.degToRad(o.y)),
      (this.targetRotation.headY = c.degToRad(o.x));
    const a = this.getMouseDegrees(t.x, t.y, 10);
    (this.targetRotation.bodyX = c.degToRad(a.y)),
      (this.targetRotation.bodyY = c.degToRad(a.x));
  }
  findTopPart(e) {
    if (!e || !e.length) return null;
    for (const t of e) {
      if (t.name === "Top_part") return t;
      if (t.children && t.children.length) {
        const o = this.findTopPart(t.children);
        if (o) return o;
      }
    }
    return null;
  }
}
const f = new ye(),
  ve = {
    __name: "index",
    setup(m) {
      const { t: e } = G.useI18n(),
        t = H("homeWebGLRef"),
        o = I(),
        a = Z(() => f.loadModel.value);
      function h() {
        j.push({ path: "/checkDevice" });
      }
      return (
        P(() => {
          t.value && (f.initModel(t.value, o), f.setListen());
        }),
        z(() => {
          f.removeListen(), f.stop();
        }),
        F(() => {
          f.start();
        }),
        X(() => {
          f.stop();
        }),
        (u, d) => {
          const p = ee;
          return Y(
            (M(),
            U(
              "div",
              {
                class: J([
                  "home-container relative content-center",
                  { "electron-height": y(Q)() },
                ]),
              },
              [
                (M(),
                N(
                  O,
                  null,
                  [
                    R(
                      "div",
                      { ref_key: "homeWebGLRef", ref: t, class: "ModelCanvas" },
                      null,
                      512
                    ),
                  ],
                  1024
                )),
                R(
                  "div",
                  { class: "use-btn absolute item-center", onClick: h },
                  [V(q(y(e)("home")) + " ", 1), K($, { name: "forwardArrow" })]
                ),
              ],
              2
            )),
            [[p, y(a)]]
          );
        }
      );
    },
  },
  Te = B(ve, [["__scopeId", "data-v-e04118cf"]]);
export { Te as default };
