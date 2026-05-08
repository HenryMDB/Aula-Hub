import { A as ke } from "./aulaKeyboard-AQHDrDfR.js";
import {
  _ as q,
  y as l,
  i as o,
  z as X,
  v as j,
  C as W,
  j as oe,
  a3 as ye,
  H as he,
  k as e,
  l as E,
  t as i,
  h as t,
  m as w,
  n as O,
  ae as ue,
  af as ve,
  r as N,
  a4 as z,
  u as _e,
  a5 as Y,
  F as T,
  B as H,
  p as te,
  J as le,
  an as Z,
  I as F,
  E as me,
  s as J,
  ac as ce,
  P as $e,
  o as Se,
  d as xe,
  av as we,
} from "./index-w58kBX-A.js";
import { A as se } from "./aula-ruleTip-BXkezzL8.js";
import "./three-core-Cz6MriGW.js";
const Ce = {},
  be = { class: "row-line w-full" };
function Ke(G, I) {
  return l(), o("div", be);
}
const De = q(Ce, [
    ["render", Ke],
    ["__scopeId", "data-v-35c9a154"],
  ]),
  Be = { class: "bin-dia w-full" },
  Ve = { class: "bin-dia-header item-center" },
  Me = { class: "w-full item-center slider-content" },
  Te = { class: "item-center bin-version-footer" },
  Ie = X({
    __name: "dksPress",
    setup(G, { expose: I }) {
      var a;
      const { t: b } = j.useI18n(),
        y = N(!1),
        m = N(1.4),
        C = (a = W().deviceInstance) == null ? void 0 : a.High_Class,
        _ = C == null ? void 0 : C.highStatic;
      function g() {
        (m.value = 1.4), (y.value = !1);
      }
      function k() {
        C.setDksPress(m.value), (y.value = !1);
      }
      function d(r) {
        (y.value = !0), (m.value = z(r));
      }
      return (
        I({ openDia: d }),
        (r, $) => (
          l(),
          oe(
            ye,
            {
              modelValue: y.value,
              "onUpdate:modelValue": $[2] || ($[2] = (x) => (y.value = x)),
              width: "721px",
              "max-width": "721px",
              "padding-value": "0",
              "close-on-click-overlay": !1,
              onClose: g,
            },
            {
              default: he(() => [
                e("div", Be, [
                  e("div", Ve, [
                    E(i(t(b)("highSet.text27")) + " ", 1),
                    w(O, { name: "close", onClick: g }),
                  ]),
                  e("div", Me, [
                    w(
                      ue,
                      {
                        modelValue: m.value,
                        "onUpdate:modelValue":
                          $[0] || ($[0] = (x) => (m.value = x)),
                        steps: t(_).dksPressStep,
                        max: t(_).dksPressMax,
                        min: t(_).dksPressMin,
                        fixed: t(_).dksPressFixed,
                      },
                      null,
                      8,
                      ["modelValue", "steps", "max", "min", "fixed"]
                    ),
                    w(
                      ve,
                      {
                        modelValue: m.value,
                        "onUpdate:modelValue":
                          $[1] || ($[1] = (x) => (m.value = x)),
                        style: { width: "4.875rem" },
                        steps: t(_).dksPressStep,
                        max: t(_).dksPressMax,
                        min: t(_).dksPressMin,
                        fixed: t(_).dksPressFixed,
                      },
                      null,
                      8,
                      ["modelValue", "steps", "max", "min", "fixed"]
                    ),
                  ]),
                  e("div", Te, [
                    e(
                      "div",
                      { class: "all-center footer-cancel-btn", onClick: g },
                      i(t(b)("highSet.text17")),
                      1
                    ),
                    e(
                      "div",
                      { class: "all-center footer-primary-btn", onClick: k },
                      i(t(b)("reSet.confirmText")),
                      1
                    ),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["modelValue"]
          )
        )
      );
    },
  }),
  Pe = q(Ie, [["__scopeId", "data-v-9b4b8291"]]),
  He = { class: "high-set h-full flex" },
  Ae = { class: "high-set-header item-center" },
  Re = { class: "header-left item-center" },
  Ue = { class: "header-title" },
  Le = { class: "header-tips" },
  Oe = { class: "item-center high-btn-group" },
  Ee = { class: "high-content item-center" },
  Ne = { class: "high-left h-full" },
  qe = { class: "high-title" },
  Ge = { class: "high-subtitle" },
  Fe = { class: "item-center high-key-group" },
  Xe = ["onClick"],
  ze = { class: "key-num" },
  Je = { class: "high-center h-full" },
  je = { class: "high-title" },
  We = { class: "high-subtitle" },
  Qe = { class: "dks-content flex" },
  Ze = { class: "dks-content-header flex item-center" },
  Ye = ["onClick"],
  et = ["title"],
  tt = { class: "common-text" },
  st = { class: "dks-content-bottom flex" },
  it = ["title", "onClick"],
  at = ["onClick"],
  ct = { class: "item-center dks-btn-group" },
  lt = { key: 0, class: "all-center section-item-ch" },
  ot = { key: 1, class: "dks-progress" },
  nt = ["onMousedown"],
  dt = X({
    __name: "highDKS",
    emits: ["update:activePage", "update:sureSuccess", "update:clearActiveKey"],
    setup(G, { expose: I, emit: b }) {
      var Q, ne;
      const y = b,
        m = ["down", "bottom", "up", "reset"],
        s = {
          startX: 0,
          startPos: 0,
          startBound: 0,
          endBound: 0,
          pos: [0, 128, 292, 456],
          isDraged: !1,
        },
        C = N(-1),
        _ = N(-1),
        g = N(),
        k = _e("DksPressRef"),
        d = J(() => [
          { icon: "dksDown", label: "highSet.text23" },
          { icon: "dksBottom", label: "highSet.text24" },
          { icon: "dksUp", label: "highSet.text25" },
          { icon: "dksReset", label: "highSet.text26" },
        ]),
        { t: a } = j.useI18n(),
        r = W(),
        $ = (Q = r.deviceInstance) == null ? void 0 : Q.Info_Class,
        x = (ne = r.deviceInstance) == null ? void 0 : ne.High_Class,
        p = $ == null ? void 0 : $.keyboardMap,
        V = x.activeData,
        S = V.singleHighData;
      Y(
        () => V.activeKey,
        (M) => {
          x.specialSetKey(M, "DKS");
        },
        { deep: !0, immediate: !0 }
      );
      function B(M) {
        x.changeDksPress(M, k);
      }
      function D(M, R) {
        S.activeTravel[M].includes(R) || S.activeTravel[M].push(R);
      }
      function f(M, R, L) {
        (C.value = R), (_.value = L);
        const P = S.activeTravel[L].filter((ie) => ie > R).sort(
          (ie, de) => ie - de
        );
        s.startBound = s.pos[R];
        const ee = P.length > 0 ? P[0] : 3;
        S.travelDistance[L][R]
          ? (s.startPos = S.travelDistance[L][R])
          : (s.startPos = 0),
          (s.endBound = s.pos[ee] - s.startBound),
          R !== 0 && (s.endBound -= 36),
          (s.startX = M.clientX),
          window.addEventListener("mousemove", c),
          window.addEventListener("mouseup", n);
      }
      function c(M) {
        const R = M.clientX - s.startX;
        let L = s.startPos + R;
        L >= s.endBound && (L = s.endBound),
          (s.isDraged = !0),
          (S.travelDistance[_.value][C.value] = L);
      }
      function n() {
        if (!s.isDraged) {
          (S.activeTravel[_.value] = S.activeTravel[_.value].filter(
            (R) => R !== C.value
          )),
            (S.travelDistance[_.value][C.value] = 0),
            window.removeEventListener("mousemove", c),
            window.removeEventListener("mouseup", n);
          return;
        }
        let M = S.travelDistance[_.value][C.value];
        for (let R of s.pos)
          if (M <= R + 80) {
            S.travelDistance[_.value][C.value] = R;
            break;
          }
        (s.startX = 0),
          (s.startPos = 0),
          (s.startBound = 0),
          (s.endBound = 0),
          (s.isDraged = !1),
          window.removeEventListener("mousemove", c),
          window.removeEventListener("mouseup", n);
      }
      function h(M) {
        V.activeBrowserKey = V.activeBrowserKey === M ? -1 : M;
      }
      function u(M) {
        S.browserCode[M] = "";
      }
      function v() {
        y("update:activePage", { icon: "parent" }, -1);
      }
      async function K() {
        var M;
        (V.activeBrowserKey = -1),
          ((M = S == null ? void 0 : S.deviceKey) != null && M.includes("")) ||
            ((await x.setDKSToDevice(g.value)) && y("update:sureSuccess"));
      }
      function A(M) {
        g.value = z(M);
      }
      function U(M) {
        y("update:clearActiveKey", M);
      }
      return (
        I({ setOldHigh: A }),
        (M, R) => (
          l(),
          o("div", He, [
            e("div", Ae, [
              e("div", Re, [
                e("div", Ue, i(t(a)("highSet.text3")), 1),
                e("div", Le, i(t(a)("highSet.text4")), 1),
              ]),
              e("div", Oe, [
                e(
                  "div",
                  { class: "all-center", onClick: v },
                  i(t(a)("highSet.text17")),
                  1
                ),
                e(
                  "div",
                  { class: "all-center", onClick: K },
                  i(t(a)("highSet.text18")),
                  1
                ),
              ]),
            ]),
            e("div", Ee, [
              e("div", Ne, [
                e("div", qe, i(t(a)("highSet.text19")), 1),
                e("div", Ge, i(t(a)("highSet.text20")), 1),
                e("div", null, [
                  e("div", Fe, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(S).deviceKey, (L, P) => {
                        var ee;
                        return (
                          l(),
                          o("div", { key: P, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: "key-item all-center",
                                onClick: (ie) => U(L),
                              },
                              i(
                                (ee = t(p)[L]) == null ? void 0 : ee.defaultKey
                              ),
                              9,
                              Xe
                            ),
                            e("div", ze, i(t(a)("macro.text7")) + i(P + 1), 1),
                            w(
                              se,
                              {
                                "model-value": L,
                                rules: [
                                  {
                                    required: !0,
                                    message: `${t(a)("macro.text7")}${P + 1}${t(
                                      a
                                    )("macro.text8")}`,
                                  },
                                ],
                              },
                              null,
                              8,
                              ["model-value", "rules"]
                            ),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              e("div", Je, [
                e("div", je, i(t(a)("highSet.text21")), 1),
                e("div", We, i(t(a)("highSet.text22")), 1),
                e("div", Qe, [
                  e("div", Ze, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(
                        t(S).pressProcess,
                        (L, P) => (
                          l(),
                          o(
                            "div",
                            {
                              key: P,
                              class: "all-center",
                              onClick: (ee) => B(P),
                            },
                            [
                              e(
                                "div",
                                {
                                  class:
                                    "dks-header-item-top all-center w-full",
                                  title: t(a)(d.value[P].label),
                                },
                                [
                                  w(O, { name: d.value[P].icon }, null, 8, [
                                    "name",
                                  ]),
                                  e("div", tt, i(t(a)(d.value[P].label)), 1),
                                ],
                                8,
                                et
                              ),
                              w(De),
                              e("div", null, i(L) + "mm", 1),
                            ],
                            8,
                            Ye
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  e("div", st, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(S).browserCode, (L, P) => {
                        var ee, ie, de;
                        return (
                          l(),
                          o(
                            "div",
                            {
                              key: P,
                              class: "flex item-center dks-content-box",
                            },
                            [
                              e(
                                "div",
                                {
                                  class: te([
                                    "dks-key relative",
                                    {
                                      "is-active-browser":
                                        t(V).activeBrowserKey === P,
                                    },
                                  ]),
                                  title:
                                    ((ee = t(p)[L]) == null
                                      ? void 0
                                      : ee.defaultKey) || "",
                                  onClick: (re) => h(P),
                                },
                                [
                                  E(
                                    i(
                                      ((ie = t(p)[L]) == null
                                        ? void 0
                                        : ie.defaultKey) || ""
                                    ) + " ",
                                    1
                                  ),
                                  t(le)(
                                    (de = t(p)[L]) == null
                                      ? void 0
                                      : de.defaultKey
                                  )
                                    ? (l(),
                                      o(
                                        "div",
                                        {
                                          key: 0,
                                          class: "absolute del-btn all-center",
                                          onClick: Z((re) => u(P), ["stop"]),
                                        },
                                        [w(O, { name: "delBrowser" })],
                                        8,
                                        at
                                      ))
                                    : F("", !0),
                                ],
                                10,
                                it
                              ),
                              e("div", ct, [
                                (l(),
                                o(
                                  T,
                                  null,
                                  H(m, (re, ae) => {
                                    var ge;
                                    return e(
                                      "div",
                                      {
                                        key: re,
                                        class: "all-center section-item",
                                      },
                                      [
                                        (ge = t(S).activeTravel[P]) != null &&
                                        ge.includes(ae)
                                          ? (l(),
                                            o("div", ot, [
                                              e(
                                                "div",
                                                {
                                                  class: "back-dks flex",
                                                  style: me({
                                                    width:
                                                      (t(S).travelDistance[P][
                                                        ae
                                                      ] +
                                                        36) /
                                                        16 +
                                                      "rem",
                                                  }),
                                                },
                                                null,
                                                4
                                              ),
                                              e(
                                                "div",
                                                {
                                                  style: me({
                                                    left:
                                                      t(S).travelDistance[P][
                                                        ae
                                                      ] <= 0
                                                        ? 0
                                                        : t(S).travelDistance[
                                                            P
                                                          ][ae] /
                                                            16 +
                                                          "rem",
                                                  }),
                                                  class:
                                                    "dks-active all-center",
                                                  onMousedown: Z(
                                                    (pe) => f(pe, ae, P),
                                                    ["stop"]
                                                  ),
                                                },
                                                [
                                                  ...(R[0] ||
                                                    (R[0] = [
                                                      e(
                                                        "div",
                                                        {
                                                          class:
                                                            "dks-active-inner",
                                                        },
                                                        null,
                                                        -1
                                                      ),
                                                    ])),
                                                ],
                                                44,
                                                nt
                                              ),
                                            ]))
                                          : (l(),
                                            o("div", lt, [
                                              w(
                                                O,
                                                {
                                                  name: "dksBtn",
                                                  onClick: (pe) => D(P, ae),
                                                },
                                                null,
                                                8,
                                                ["onClick"]
                                              ),
                                            ])),
                                      ]
                                    );
                                  }),
                                  64
                                )),
                              ]),
                            ]
                          )
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
            ]),
            w(Pe, { ref_key: "DksPressRef", ref: k }, null, 512),
          ])
        )
      );
    },
  }),
  rt = q(dt, [["__scopeId", "data-v-394e9792"]]),
  ht = { class: "high-set h-full flex" },
  ut = { class: "high-set-header item-center" },
  vt = { class: "header-left item-center" },
  _t = { class: "header-title" },
  gt = { class: "header-tips" },
  pt = { class: "item-center high-btn-group" },
  mt = { class: "high-content item-center" },
  ft = { class: "high-left h-full" },
  yt = { class: "high-title" },
  kt = { class: "high-subtitle" },
  $t = { class: "item-center high-key-group" },
  St = ["onClick"],
  xt = { class: "key-item all-center" },
  wt = { class: "key-num" },
  Ct = { class: "socd-tips flex" },
  bt = { class: "high-center h-full" },
  Kt = { class: "high-title" },
  Dt = { class: "high-subtitle" },
  Bt = X({
    __name: "highSOCD",
    emits: ["update:activePage", "update:sureSuccess", "update:clearActiveKey"],
    setup(G, { expose: I, emit: b }) {
      var D, f;
      const y = b,
        m = N(),
        { t: s } = j.useI18n(),
        C = W(),
        _ = (D = C.deviceInstance) == null ? void 0 : D.Info_Class,
        g = (f = C.deviceInstance) == null ? void 0 : f.High_Class,
        k = _ == null ? void 0 : _.keyboardMap,
        d = J(() => g.highStatic),
        a = g.activeData,
        r = a.singleHighData;
      Y(
        () => a.activeKey,
        (c) => {
          g.specialSetKey(c, "SOCD");
        },
        { deep: !0, immediate: !0 }
      );
      function $(c, n) {
        switch (n) {
          case "bindMode":
            r.bindMode = Number(c);
            break;
          case "browserCode":
            x(Number(c));
            break;
          case "sliderValue":
            r.sliderValue = Number(c);
            break;
          case "delBrowser":
            r.browserCode[c] = "";
            break;
        }
      }
      function x(c) {
        a.activeBrowserKey = a.activeBrowserKey === c ? -1 : c;
      }
      function p() {
        y("update:activePage", { icon: "parent" }, -1);
      }
      async function V() {
        var c;
        (a.activeBrowserKey = -1),
          ((c = r == null ? void 0 : r.deviceKey) != null && c.includes("")) ||
            ((await g.setSOCDToDevice(m.value)) && y("update:sureSuccess"));
      }
      function S(c) {
        m.value = z(c);
      }
      function B(c) {
        y("update:clearActiveKey", c);
      }
      return (
        I({ setOldHigh: S }),
        (c, n) => (
          l(),
          o("div", ht, [
            e("div", ut, [
              e("div", vt, [
                e("div", _t, i(t(s)("highSet.text5")), 1),
                e("div", gt, i(t(s)("highSet.text6")), 1),
              ]),
              e("div", pt, [
                e(
                  "div",
                  { class: "all-center", onClick: p },
                  i(t(s)("highSet.text17")),
                  1
                ),
                e(
                  "div",
                  { class: "all-center", onClick: V },
                  i(t(s)("highSet.text18")),
                  1
                ),
              ]),
            ]),
            e("div", mt, [
              e("div", ft, [
                e("div", yt, i(t(s)("highSet.text19")), 1),
                e("div", kt, i(t(s)("highSet.text20")), 1),
                e("div", null, [
                  e("div", $t, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(r).deviceKey, (h, u) => {
                        var v;
                        return (
                          l(),
                          o(
                            "div",
                            { key: u, class: "relative", onClick: (K) => B(h) },
                            [
                              e(
                                "div",
                                xt,
                                i(
                                  (v = t(k)[h]) == null ? void 0 : v.defaultKey
                                ),
                                1
                              ),
                              e(
                                "div",
                                wt,
                                i(t(s)("macro.text7")) + i(u + 1),
                                1
                              ),
                              w(
                                se,
                                {
                                  "model-value": h,
                                  rules: [
                                    {
                                      required: !0,
                                      message: `${t(s)("macro.text7")}${
                                        u + 1
                                      }${t(s)("macro.text8")}`,
                                    },
                                  ],
                                },
                                null,
                                8,
                                ["model-value", "rules"]
                              ),
                            ],
                            8,
                            St
                          )
                        );
                      }),
                      128
                    )),
                  ]),
                  e("div", Ct, [
                    w(O, { name: "socdTips" }),
                    E(" " + i(t(s)("useTips.text8")), 1),
                  ]),
                ]),
              ]),
              w(
                ce,
                {
                  "ins-value": "socdCenter",
                  params: {
                    staticData: d.value,
                    activeData: t(a),
                    Key_Map: t(k),
                  },
                  "onUpdate:report": $,
                },
                null,
                8,
                ["params"]
              ),
              e("div", bt, [
                e("div", Kt, i(t(s)("highSet.text28")), 1),
                e("div", Dt, i(t(s)("highSet.text29")), 1),
                e("div", null, [
                  w(
                    $e,
                    {
                      modelValue: t(r).behaviorMode,
                      "onUpdate:modelValue":
                        n[0] || (n[0] = (h) => (t(r).behaviorMode = h)),
                      "radio-options": d.value.SOCDOptions,
                    },
                    null,
                    8,
                    ["modelValue", "radio-options"]
                  ),
                ]),
              ]),
              w(
                ce,
                {
                  "ins-value": "socdRight",
                  params: { activeData: t(a), staticData: d.value },
                  "onUpdate:report": $,
                },
                null,
                8,
                ["params"]
              ),
            ]),
          ])
        )
      );
    },
  }),
  Vt = q(Bt, [["__scopeId", "data-v-c27aa912"]]),
  Mt = { class: "high-set h-full flex" },
  Tt = { class: "high-set-header item-center" },
  It = { class: "header-left item-center" },
  Pt = { class: "header-title" },
  Ht = { class: "header-tips" },
  At = { class: "item-center high-btn-group" },
  Rt = { class: "high-content item-center" },
  Ut = { class: "high-left h-full" },
  Lt = { class: "high-title" },
  Ot = { class: "high-subtitle" },
  Et = { class: "item-center high-key-group" },
  Nt = ["onClick"],
  qt = { class: "key-num" },
  Gt = { class: "high-left high-center h-full" },
  Ft = { class: "high-title" },
  Xt = { class: "high-subtitle" },
  zt = { class: "item-center high-key-group" },
  Jt = ["onClick"],
  jt = ["title", "onClick"],
  Wt = { class: "w-full item-center mpt-action" },
  Qt = X({
    __name: "highMPT",
    emits: ["update:activePage", "update:sureSuccess", "update:clearActiveKey"],
    setup(G, { expose: I, emit: b }) {
      var D, f;
      const y = b,
        m = N(),
        { t: s } = j.useI18n(),
        C = W(),
        _ = (D = C.deviceInstance) == null ? void 0 : D.Info_Class,
        g = (f = C.deviceInstance) == null ? void 0 : f.High_Class,
        k = _ == null ? void 0 : _.keyboardMap,
        d = J(() => g.highStatic),
        a = g.activeData,
        r = a.singleHighData;
      Y(
        () => a.activeKey,
        (c) => {
          g.specialSetKey(c, "MPT");
        },
        { deep: !0, immediate: !0 }
      );
      function $(c) {
        a.activeBrowserKey = a.activeBrowserKey === c ? -1 : c;
      }
      function x(c) {
        r.browserCode[c] = "";
      }
      function p() {
        y("update:activePage", { icon: "parent" }, -1);
      }
      async function V() {
        var c;
        (a.activeBrowserKey = -1),
          ((c = r == null ? void 0 : r.deviceKey) != null && c.includes("")) ||
            ((await g.setMPTToDevice(m.value)) && y("update:sureSuccess"));
      }
      function S(c) {
        m.value = z(c);
      }
      function B(c) {
        y("update:clearActiveKey", c);
      }
      return (
        I({ setOldHigh: S }),
        (c, n) => (
          l(),
          o("div", Mt, [
            e("div", Tt, [
              e("div", It, [
                e("div", Pt, i(t(s)("highSet.text7")), 1),
                e("div", Ht, [
                  E(i(t(s)("highSet.text8")), 1),
                  e("span", null, i(t(s)("highSet.text40")), 1),
                ]),
              ]),
              e("div", At, [
                e(
                  "div",
                  { class: "all-center", onClick: p },
                  i(t(s)("highSet.text17")),
                  1
                ),
                e(
                  "div",
                  { class: "all-center", onClick: V },
                  i(t(s)("highSet.text18")),
                  1
                ),
              ]),
            ]),
            e("div", Rt, [
              e("div", Ut, [
                e("div", Lt, i(t(s)("highSet.text19")), 1),
                e("div", Ot, i(t(s)("highSet.text20")), 1),
                e("div", null, [
                  e("div", Et, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(r).deviceKey, (h, u) => {
                        var v;
                        return (
                          l(),
                          o("div", { key: u, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: "key-item all-center",
                                onClick: (K) => B(h),
                              },
                              i((v = t(k)[h]) == null ? void 0 : v.defaultKey),
                              9,
                              Nt
                            ),
                            e("div", qt, i(t(s)("macro.text7")) + i(u + 1), 1),
                            w(
                              se,
                              {
                                "model-value": h,
                                rules: [
                                  {
                                    required: !0,
                                    message: `${t(s)("macro.text7")}${u + 1}${t(
                                      s
                                    )("macro.text8")}`,
                                  },
                                ],
                              },
                              null,
                              8,
                              ["model-value", "rules"]
                            ),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              e("div", Gt, [
                e("div", Ft, i(t(s)("highSet.text21")), 1),
                e("div", Xt, i(t(s)("highSet.text41")), 1),
                e("div", null, [
                  e("div", zt, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(r).browserCode, (h, u) => {
                        var v, K, A;
                        return (
                          l(),
                          o("div", { key: u, class: "item-center w-full" }, [
                            e(
                              "div",
                              {
                                class: te([
                                  "key-item browser-key relative",
                                  {
                                    "is-active-browser":
                                      t(a).activeBrowserKey === u,
                                  },
                                ]),
                                onClick: (U) => $(u),
                              },
                              [
                                E(
                                  i(
                                    ((v = t(k)[h]) == null
                                      ? void 0
                                      : v.defaultKey) || ""
                                  ) + " ",
                                  1
                                ),
                                t(le)(
                                  (K = t(k)[h]) == null ? void 0 : K.defaultKey
                                )
                                  ? (l(),
                                    o(
                                      "div",
                                      {
                                        key: 0,
                                        class: "absolute del-btn all-center",
                                        title:
                                          ((A = t(k)[h]) == null
                                            ? void 0
                                            : A.defaultKey) || "",
                                        onClick: Z((U) => x(u), ["stop"]),
                                      },
                                      [w(O, { name: "delBrowser" })],
                                      8,
                                      jt
                                    ))
                                  : F("", !0),
                              ],
                              10,
                              Jt
                            ),
                            e("div", Wt, [
                              w(
                                ue,
                                {
                                  modelValue: t(r).sliderValue[u],
                                  "onUpdate:modelValue": (U) =>
                                    (t(r).sliderValue[u] = U),
                                  steps: d.value.mptStep,
                                  max: d.value.mptMax,
                                  min: d.value.mptMin,
                                  fixed: d.value.mptFixed,
                                },
                                null,
                                8,
                                [
                                  "modelValue",
                                  "onUpdate:modelValue",
                                  "steps",
                                  "max",
                                  "min",
                                  "fixed",
                                ]
                              ),
                              w(
                                ve,
                                {
                                  modelValue: t(r).sliderValue[u],
                                  "onUpdate:modelValue": (U) =>
                                    (t(r).sliderValue[u] = U),
                                  style: { width: "4.875rem" },
                                  steps: d.value.mptStep,
                                  max: d.value.mptMax,
                                  min: d.value.mptMin,
                                  fixed: d.value.mptFixed,
                                },
                                null,
                                8,
                                [
                                  "modelValue",
                                  "onUpdate:modelValue",
                                  "steps",
                                  "max",
                                  "min",
                                  "fixed",
                                ]
                              ),
                            ]),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      );
    },
  }),
  Zt = q(Qt, [["__scopeId", "data-v-a29e04ab"]]),
  Yt = { class: "high-set h-full flex" },
  es = { class: "high-set-header item-center" },
  ts = { class: "header-left item-center" },
  ss = { class: "header-title" },
  is = { class: "header-tips" },
  as = { class: "item-center high-btn-group" },
  cs = { class: "high-content item-center" },
  ls = { class: "high-left h-full" },
  os = { class: "high-title" },
  ns = { class: "high-subtitle" },
  ds = { class: "item-center high-key-group" },
  rs = ["onClick"],
  hs = { class: "key-num" },
  us = { class: "high-left h-full" },
  vs = { class: "high-title" },
  _s = { class: "high-subtitle" },
  gs = { class: "item-center high-key-group" },
  ps = ["title", "onClick"],
  ms = ["onClick"],
  fs = { class: "key-num" },
  ys = { class: "high-right h-full" },
  ks = { class: "high-title" },
  $s = { class: "high-subtitle" },
  Ss = { class: "item-center mt-right w-full" },
  xs = { class: "mt-right-text w-full" },
  ws = { class: "w-full item-center mt-action" },
  Cs = X({
    __name: "highMT",
    emits: ["update:activePage", "update:sureSuccess", "update:clearActiveKey"],
    setup(G, { expose: I, emit: b }) {
      var D, f;
      const y = b,
        m = N(),
        { t: s } = j.useI18n(),
        C = W(),
        _ = (D = C.deviceInstance) == null ? void 0 : D.Info_Class,
        g = (f = C.deviceInstance) == null ? void 0 : f.High_Class,
        k = _ == null ? void 0 : _.keyboardMap,
        d = g.activeData,
        a = d.singleHighData,
        r = J(() => g.highStatic);
      Y(
        () => d.activeKey,
        (c) => {
          g.specialSetKey(c, "MT");
        },
        { deep: !0, immediate: !0 }
      );
      function $(c) {
        d.activeBrowserKey = d.activeBrowserKey === c ? -1 : c;
      }
      function x(c) {
        a.browserCode[c] = "";
      }
      function p() {
        y("update:activePage", { icon: "parent" }, -1);
      }
      async function V() {
        var c;
        (d.activeBrowserKey = -1),
          ((c = a == null ? void 0 : a.deviceKey) != null && c.includes("")) ||
            ((await g.setMTToDevice(m.value)) && y("update:sureSuccess"));
      }
      function S(c) {
        m.value = z(c);
      }
      function B(c) {
        y("update:clearActiveKey", c);
      }
      return (
        I({ setOldHigh: S }),
        (c, n) => (
          l(),
          o("div", Yt, [
            e("div", es, [
              e("div", ts, [
                e("div", ss, i(t(s)("highSet.text9")), 1),
                e("div", is, i(t(s)("highSet.text10")), 1),
              ]),
              e("div", as, [
                e(
                  "div",
                  { class: "all-center", onClick: p },
                  i(t(s)("highSet.text17")),
                  1
                ),
                e(
                  "div",
                  { class: "all-center", onClick: V },
                  i(t(s)("highSet.text18")),
                  1
                ),
              ]),
            ]),
            e("div", cs, [
              e("div", ls, [
                e("div", os, i(t(s)("highSet.text19")), 1),
                e("div", ns, i(t(s)("highSet.text20")), 1),
                e("div", null, [
                  e("div", ds, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(a).deviceKey, (h, u) => {
                        var v;
                        return (
                          l(),
                          o("div", { key: u, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: "key-item all-center",
                                onClick: (K) => B(h),
                              },
                              i((v = t(k)[h]) == null ? void 0 : v.defaultKey),
                              9,
                              rs
                            ),
                            e("div", hs, i(t(s)("macro.text7")) + i(u + 1), 1),
                            w(
                              se,
                              {
                                "model-value": h,
                                rules: [
                                  {
                                    required: !0,
                                    message: `${t(s)("macro.text7")}${u + 1}${t(
                                      s
                                    )("macro.text8")}`,
                                  },
                                ],
                              },
                              null,
                              8,
                              ["model-value", "rules"]
                            ),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              e("div", us, [
                e("div", vs, i(t(s)("highSet.text21")), 1),
                e("div", _s, i(t(s)("highSet.text42")), 1),
                e("div", null, [
                  e("div", gs, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(a).browserCode, (h, u) => {
                        var v, K, A;
                        return (
                          l(),
                          o("div", { key: u, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: te([
                                  "key-item browser-key relative",
                                  {
                                    "is-active-browser":
                                      t(d).activeBrowserKey === u,
                                  },
                                ]),
                                title:
                                  ((v = t(k)[h]) == null
                                    ? void 0
                                    : v.defaultKey) || "",
                                onClick: (U) => $(u),
                              },
                              [
                                E(
                                  i(
                                    ((K = t(k)[h]) == null
                                      ? void 0
                                      : K.defaultKey) || ""
                                  ) + " ",
                                  1
                                ),
                                t(le)(
                                  (A = t(k)[h]) == null ? void 0 : A.defaultKey
                                )
                                  ? (l(),
                                    o(
                                      "div",
                                      {
                                        key: 0,
                                        class: "absolute del-btn all-center",
                                        onClick: Z((U) => x(u), ["stop"]),
                                      },
                                      [w(O, { name: "delBrowser" })],
                                      8,
                                      ms
                                    ))
                                  : F("", !0),
                              ],
                              10,
                              ps
                            ),
                            e("div", fs, i(t(s)(r.value.mtKeyDown[u])), 1),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              e("div", ys, [
                e("div", ks, i(t(s)("highSet.text43")), 1),
                e("div", $s, i(t(s)("highSet.text44")), 1),
                e("div", null, [
                  e("div", Ss, [
                    e("div", xs, i(t(s)("highSet.text33")), 1),
                    e("div", ws, [
                      w(
                        ue,
                        {
                          modelValue: t(a).sliderValue,
                          "onUpdate:modelValue":
                            n[0] || (n[0] = (h) => (t(a).sliderValue = h)),
                          max: r.value.mtMax,
                          min: r.value.mtMin,
                        },
                        null,
                        8,
                        ["modelValue", "max", "min"]
                      ),
                      w(
                        ve,
                        {
                          modelValue: t(a).sliderValue,
                          "onUpdate:modelValue":
                            n[1] || (n[1] = (h) => (t(a).sliderValue = h)),
                          style: { width: "4.875rem" },
                          max: r.value.mtMax,
                          min: r.value.mtMin,
                          steps: r.value.mtStep,
                        },
                        null,
                        8,
                        ["modelValue", "max", "min", "steps"]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      );
    },
  }),
  bs = q(Cs, [["__scopeId", "data-v-7fbf99c9"]]),
  Ks = { class: "high-set h-full flex" },
  Ds = { class: "high-set-header item-center" },
  Bs = { class: "header-left item-center" },
  Vs = { class: "header-title" },
  Ms = { class: "header-tips" },
  Ts = { class: "item-center high-btn-group" },
  Is = { class: "high-content item-center" },
  Ps = { class: "high-left h-full" },
  Hs = { class: "high-title" },
  As = { class: "high-subtitle" },
  Rs = { class: "item-center high-key-group" },
  Us = ["onClick"],
  Ls = { class: "key-num" },
  Os = { class: "high-left h-full high-right" },
  Es = { class: "high-title" },
  Ns = { class: "high-subtitle" },
  qs = { class: "item-center high-key-group" },
  Gs = ["title", "onClick"],
  Fs = ["onClick"],
  Xs = X({
    __name: "highEND",
    emits: ["update:activePage", "update:sureSuccess", "update:clearActiveKey"],
    setup(G, { expose: I, emit: b }) {
      var f, c;
      const y = b,
        m = N(),
        { t: s } = j.useI18n(),
        C = W(),
        _ = (f = C.deviceInstance) == null ? void 0 : f.Info_Class,
        g = (c = C.deviceInstance) == null ? void 0 : c.High_Class,
        k = _ == null ? void 0 : _.keyboardMap,
        d = g.activeData,
        a = d.singleHighData,
        r = J(() => g.highStatic);
      Y(
        () => d.activeKey,
        (n) => {
          g.specialSetKey(n, "END");
        },
        { deep: !0, immediate: !0 }
      );
      function $(n, h) {
        switch (h) {
          case "sliderValue":
            a.sliderValue = Number(n);
            break;
        }
      }
      function x(n) {
        d.activeBrowserKey = d.activeBrowserKey === n ? -1 : n;
      }
      function p(n) {
        a.browserCode[n] = "";
      }
      function V() {
        y("update:activePage", { icon: "parent" }, -1);
      }
      async function S() {
        var n;
        (d.activeBrowserKey = -1),
          ((n = a == null ? void 0 : a.deviceKey) != null && n.includes("")) ||
            ((await g.setENDToDevice(m.value)) && y("update:sureSuccess"));
      }
      function B(n) {
        m.value = z(n);
      }
      function D(n) {
        y("update:clearActiveKey", n);
      }
      return (
        I({ setOldHigh: B }),
        (n, h) => (
          l(),
          o("div", Ks, [
            e("div", Ds, [
              e("div", Bs, [
                e("div", Vs, i(t(s)("highSet.text13")), 1),
                e("div", Ms, i(t(s)("highSet.text14")), 1),
              ]),
              e("div", Ts, [
                e(
                  "div",
                  { class: "all-center", onClick: V },
                  i(t(s)("highSet.text17")),
                  1
                ),
                e(
                  "div",
                  { class: "all-center", onClick: S },
                  i(t(s)("highSet.text18")),
                  1
                ),
              ]),
            ]),
            e("div", Is, [
              e("div", Ps, [
                e("div", Hs, i(t(s)("highSet.text19")), 1),
                e("div", As, i(t(s)("highSet.text20")), 1),
                e("div", null, [
                  e("div", Rs, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(a).deviceKey, (u, v) => {
                        var K;
                        return (
                          l(),
                          o("div", { key: v, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: "key-item all-center",
                                onClick: (A) => D(u),
                              },
                              i((K = t(k)[u]) == null ? void 0 : K.defaultKey),
                              9,
                              Us
                            ),
                            e("div", Ls, i(t(s)("macro.text7")) + i(v + 1), 1),
                            w(
                              se,
                              {
                                "model-value": u,
                                rules: [
                                  {
                                    required: !0,
                                    message: `${t(s)("macro.text7")}${v + 1}${t(
                                      s
                                    )("macro.text8")}`,
                                  },
                                ],
                              },
                              null,
                              8,
                              ["model-value", "rules"]
                            ),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              e("div", Os, [
                e("div", Es, i(t(s)("highSet.text21")), 1),
                e("div", Ns, i(t(s)("highSet.text49")), 1),
                e("div", null, [
                  e("div", qs, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(a).browserCode, (u, v) => {
                        var K, A, U;
                        return (
                          l(),
                          o("div", { key: v, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: te([
                                  "key-item browser-key relative",
                                  {
                                    "is-active-browser":
                                      t(d).activeBrowserKey === v,
                                  },
                                ]),
                                title:
                                  ((K = t(k)[u]) == null
                                    ? void 0
                                    : K.defaultKey) || "",
                                onClick: (Q) => x(v),
                              },
                              [
                                E(
                                  i(
                                    ((A = t(k)[u]) == null
                                      ? void 0
                                      : A.defaultKey) || ""
                                  ) + " ",
                                  1
                                ),
                                t(le)(
                                  (U = t(k)[u]) == null ? void 0 : U.defaultKey
                                )
                                  ? (l(),
                                    o(
                                      "div",
                                      {
                                        key: 0,
                                        class: "absolute del-btn all-center",
                                        onClick: Z((Q) => p(v), ["stop"]),
                                      },
                                      [w(O, { name: "delBrowser" })],
                                      8,
                                      Fs
                                    ))
                                  : F("", !0),
                              ],
                              10,
                              Gs
                            ),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              w(
                ce,
                {
                  "ins-value": "endRight",
                  params: { activeData: t(d), staticData: r.value },
                  "onUpdate:report": $,
                },
                null,
                8,
                ["params"]
              ),
            ]),
          ])
        )
      );
    },
  }),
  zs = q(Xs, [["__scopeId", "data-v-fa015b23"]]),
  Js = { class: "high-set h-full flex" },
  js = { class: "high-set-header item-center" },
  Ws = { class: "header-left item-center" },
  Qs = { class: "header-title" },
  Zs = { class: "header-tips" },
  Ys = { class: "item-center high-btn-group" },
  ei = { class: "high-content item-center" },
  ti = { class: "high-left h-full" },
  si = { class: "high-title" },
  ii = { class: "high-subtitle" },
  ai = { class: "item-center high-key-group" },
  ci = ["onClick"],
  li = { class: "key-num" },
  oi = { class: "high-left h-full" },
  ni = { class: "high-title" },
  di = { class: "high-subtitle" },
  ri = { class: "item-center high-key-group" },
  hi = ["title", "onClick"],
  ui = ["onClick"],
  vi = X({
    __name: "highTGL",
    emits: ["update:activePage", "update:sureSuccess", "update:clearActiveKey"],
    setup(G, { expose: I, emit: b }) {
      var f, c;
      const y = b,
        m = N(),
        { t: s } = j.useI18n(),
        C = W(),
        _ = (f = C.deviceInstance) == null ? void 0 : f.Info_Class,
        g = (c = C.deviceInstance) == null ? void 0 : c.High_Class,
        k = _ == null ? void 0 : _.keyboardMap,
        d = g.activeData,
        a = d.singleHighData,
        r = J(() => g.highStatic);
      Y(
        () => d.activeKey,
        (n) => {
          g.specialSetKey(n, "TGL");
        },
        { deep: !0, immediate: !0 }
      );
      function $(n, h) {
        switch (h) {
          case "sliderValue":
            a.sliderValue = n;
            break;
        }
      }
      function x(n) {
        d.activeBrowserKey = d.activeBrowserKey === n ? -1 : n;
      }
      function p(n) {
        a.browserCode[n] = "";
      }
      function V() {
        y("update:activePage", { icon: "parent" }, -1);
      }
      async function S() {
        var n;
        (d.activeBrowserKey = -1),
          ((n = a == null ? void 0 : a.deviceKey) != null && n.includes("")) ||
            ((await g.setTGLToDevice(m.value)) && y("update:sureSuccess"));
      }
      function B(n) {
        m.value = z(n);
      }
      function D(n) {
        y("update:clearActiveKey", n);
      }
      return (
        I({ setOldHigh: B }),
        (n, h) => (
          l(),
          o("div", Js, [
            e("div", js, [
              e("div", Ws, [
                e("div", Qs, i(t(s)("highSet.text11")), 1),
                e("div", Zs, i(t(s)("highSet.text12")), 1),
              ]),
              e("div", Ys, [
                e(
                  "div",
                  { class: "all-center", onClick: V },
                  i(t(s)("highSet.text17")),
                  1
                ),
                e(
                  "div",
                  { class: "all-center", onClick: S },
                  i(t(s)("highSet.text18")),
                  1
                ),
              ]),
            ]),
            e("div", ei, [
              e("div", ti, [
                e("div", si, i(t(s)("highSet.text19")), 1),
                e("div", ii, i(t(s)("highSet.text20")), 1),
                e("div", null, [
                  e("div", ai, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(a).deviceKey, (u, v) => {
                        var K;
                        return (
                          l(),
                          o("div", { key: v, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: "key-item all-center",
                                onClick: (A) => D(u),
                              },
                              i((K = t(k)[u]) == null ? void 0 : K.defaultKey),
                              9,
                              ci
                            ),
                            e("div", li, i(t(s)("macro.text7")) + i(v + 1), 1),
                            w(
                              se,
                              {
                                "model-value": u,
                                rules: [
                                  {
                                    required: !0,
                                    message: `${t(s)("macro.text7")}${v + 1}${t(
                                      s
                                    )("macro.text8")}`,
                                  },
                                ],
                              },
                              null,
                              8,
                              ["model-value", "rules"]
                            ),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              e("div", oi, [
                e("div", ni, i(t(s)("highSet.text21")), 1),
                e("div", di, i(t(s)("highSet.text47")), 1),
                e("div", null, [
                  e("div", ri, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(a).browserCode, (u, v) => {
                        var K, A, U;
                        return (
                          l(),
                          o("div", { key: v, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: te([
                                  "key-item browser-key relative",
                                  {
                                    "is-active-browser":
                                      t(d).activeBrowserKey === v,
                                  },
                                ]),
                                title:
                                  ((K = t(k)[u]) == null
                                    ? void 0
                                    : K.defaultKey) || "",
                                onClick: (Q) => x(v),
                              },
                              [
                                E(
                                  i(
                                    ((A = t(k)[u]) == null
                                      ? void 0
                                      : A.defaultKey) || ""
                                  ) + " ",
                                  1
                                ),
                                t(le)(
                                  (U = t(k)[u]) == null ? void 0 : U.defaultKey
                                )
                                  ? (l(),
                                    o(
                                      "div",
                                      {
                                        key: 0,
                                        class: "absolute del-btn all-center",
                                        onClick: Z((Q) => p(v), ["stop"]),
                                      },
                                      [w(O, { name: "delBrowser" })],
                                      8,
                                      ui
                                    ))
                                  : F("", !0),
                              ],
                              10,
                              hi
                            ),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              w(
                ce,
                {
                  "ins-value": "tglRight",
                  params: { activeData: t(d), staticData: r.value },
                  "onUpdate:report": $,
                },
                null,
                8,
                ["params"]
              ),
            ]),
          ])
        )
      );
    },
  }),
  _i = q(vi, [["__scopeId", "data-v-0ace3b87"]]),
  gi = { class: "high-set h-full flex" },
  pi = { class: "high-set-header item-center" },
  mi = { class: "header-left item-center" },
  fi = { class: "header-title" },
  yi = { class: "header-tips" },
  ki = { class: "item-center high-btn-group" },
  $i = { class: "high-content item-center" },
  Si = { class: "high-left h-full" },
  xi = { class: "high-title" },
  wi = { class: "high-subtitle" },
  Ci = { class: "item-center high-key-group" },
  bi = ["onClick"],
  Ki = { class: "key-num" },
  Di = X({
    __name: "highRS",
    emits: ["update:activePage", "update:sureSuccess", "update:clearActiveKey"],
    setup(G, { expose: I, emit: b }) {
      var D, f;
      const y = b,
        m = N(),
        { t: s } = j.useI18n(),
        C = W(),
        _ = (D = C.deviceInstance) == null ? void 0 : D.Info_Class,
        g = (f = C.deviceInstance) == null ? void 0 : f.High_Class,
        k = _ == null ? void 0 : _.keyboardMap,
        d = g.activeData,
        a = d.singleHighData,
        r = J(() => g.highStatic);
      Y(
        () => d.activeKey,
        (c) => {
          g.specialSetKey(c, "RS");
        },
        { deep: !0, immediate: !0 }
      );
      function $(c, n) {
        switch (n) {
          case "sliderValue":
            a.sliderValue = c;
            break;
          case "browserCode":
            x(c);
            break;
          case "delBrowser":
            a.browserCode[c] = "";
        }
      }
      function x(c) {
        d.activeBrowserKey = d.activeBrowserKey === c ? -1 : c;
      }
      function p() {
        y("update:activePage", { icon: "parent" }, -1);
      }
      async function V() {
        var c;
        (d.activeBrowserKey = -1),
          ((c = a == null ? void 0 : a.deviceKey) != null && c.includes("")) ||
            ((await g.setRSToDevice(m.value)) && y("update:sureSuccess"));
      }
      function S(c) {
        m.value = z(c);
      }
      function B(c) {
        y("update:clearActiveKey", c);
      }
      return (
        I({ setOldHigh: S }),
        (c, n) => (
          l(),
          o("div", gi, [
            e("div", pi, [
              e("div", mi, [
                e("div", fi, i(t(s)("highSet.text15")), 1),
                e("div", yi, i(t(s)("highSet.text16")), 1),
              ]),
              e("div", ki, [
                e(
                  "div",
                  { class: "all-center", onClick: p },
                  i(t(s)("highSet.text17")),
                  1
                ),
                e(
                  "div",
                  { class: "all-center", onClick: V },
                  i(t(s)("highSet.text18")),
                  1
                ),
              ]),
            ]),
            e("div", $i, [
              e("div", Si, [
                e("div", xi, i(t(s)("highSet.text19")), 1),
                e("div", wi, i(t(s)("highSet.text20")), 1),
                e("div", null, [
                  e("div", Ci, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(a).deviceKey, (h, u) => {
                        var v;
                        return (
                          l(),
                          o("div", { key: u, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: "key-item all-center",
                                onClick: (K) => B(h),
                              },
                              i((v = t(k)[h]) == null ? void 0 : v.defaultKey),
                              9,
                              bi
                            ),
                            e("div", Ki, i(t(s)("macro.text7")) + i(u + 1), 1),
                            w(
                              se,
                              {
                                "model-value": h,
                                rules: [
                                  {
                                    required: !0,
                                    message: `${t(s)("macro.text7")}${u + 1}${t(
                                      s
                                    )("macro.text8")}`,
                                  },
                                ],
                              },
                              null,
                              8,
                              ["model-value", "rules"]
                            ),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              w(
                ce,
                {
                  "ins-value": "rsCenter",
                  params: {
                    staticData: r.value,
                    activeData: t(d),
                    Key_Map: t(k),
                  },
                  "onUpdate:report": $,
                },
                null,
                8,
                ["params"]
              ),
              w(
                ce,
                {
                  "ins-value": "rsRight",
                  params: { activeData: t(d), staticData: r.value },
                  "onUpdate:report": $,
                },
                null,
                8,
                ["params"]
              ),
            ]),
          ])
        )
      );
    },
  }),
  Bi = q(Di, [["__scopeId", "data-v-89d3dadb"]]),
  Vi = { class: "high-set h-full flex" },
  Mi = { class: "high-set-header item-center" },
  Ti = { class: "header-left item-center" },
  Ii = { class: "header-title" },
  Pi = { class: "header-tips" },
  Hi = { class: "item-center high-btn-group" },
  Ai = { class: "high-content item-center" },
  Ri = { class: "high-left h-full" },
  Ui = { class: "high-title" },
  Li = { class: "high-subtitle" },
  Oi = { class: "item-center high-key-group" },
  Ei = ["onClick"],
  Ni = { class: "key-num" },
  qi = { class: "high-left h-full" },
  Gi = { class: "high-title" },
  Fi = { class: "high-subtitle" },
  Xi = { class: "item-center sys-code-group" },
  zi = ["onClick"],
  Ji = { key: 0, class: "absolute sys-index all-center" },
  ji = { class: "item-center high-key-group" },
  Wi = ["title", "onClick"],
  Qi = ["onClick"],
  Zi = { class: "key-num" },
  Yi = X({
    __name: "highCB",
    emits: ["update:activePage", "update:sureSuccess", "update:clearActiveKey"],
    setup(G, { expose: I, emit: b }) {
      var c, n;
      const y = b,
        m = N(),
        { t: s } = j.useI18n(),
        C = W(),
        _ = (c = C.deviceInstance) == null ? void 0 : c.Info_Class,
        g = (n = C.deviceInstance) == null ? void 0 : n.High_Class,
        k = _ == null ? void 0 : _.keyboardMap,
        d = g.activeData,
        a = d.singleHighData,
        r = J(() => g.highStatic);
      Y(
        () => d.activeKey,
        (h) => {
          g.specialSetKey(h, "CB");
        },
        { deep: !0, immediate: !0 }
      );
      function $(h) {
        d.activeBrowserKey = d.activeBrowserKey === h ? -1 : h;
      }
      function x(h) {
        a.browserCode[h] = "";
      }
      function p(h) {
        let u = a.sysCode.findIndex((v) => v === h);
        return u === -1 ? 0 : u + 1;
      }
      function V(h) {
        var u;
        a.sysCode.includes(h.value)
          ? (a.sysCode = a.sysCode.filter((v) => v !== h.value))
          : ((u = a.sysCode) == null ? void 0 : u.length) >= 2
          ? (a.sysCode[a.sysCode.length - 1] = h.value)
          : a.sysCode.push(h.value);
      }
      function S() {
        y("update:activePage", { icon: "parent" }, -1);
      }
      async function B() {
        var h;
        (d.activeBrowserKey = -1),
          ((h = a == null ? void 0 : a.deviceKey) != null && h.includes("")) ||
            ((await g.setCBToDevice(m.value)) && y("update:sureSuccess"));
      }
      function D(h) {
        m.value = z(h);
      }
      function f(h) {
        y("update:clearActiveKey", h);
      }
      return (
        I({ setOldHigh: D }),
        (h, u) => (
          l(),
          o("div", Vi, [
            e("div", Mi, [
              e("div", Ti, [
                e("div", Ii, i(t(s)("highSet.text79")), 1),
                e("div", Pi, i(t(s)("highSet.text80")), 1),
              ]),
              e("div", Hi, [
                e(
                  "div",
                  { class: "all-center", onClick: S },
                  i(t(s)("highSet.text17")),
                  1
                ),
                e(
                  "div",
                  { class: "all-center", onClick: B },
                  i(t(s)("highSet.text18")),
                  1
                ),
              ]),
            ]),
            e("div", Ai, [
              e("div", Ri, [
                e("div", Ui, i(t(s)("highSet.text19")), 1),
                e("div", Li, i(t(s)("highSet.text20")), 1),
                e("div", null, [
                  e("div", Oi, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(a).deviceKey, (v, K) => {
                        var A;
                        return (
                          l(),
                          o("div", { key: K, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: "key-item all-center",
                                onClick: (U) => f(v),
                              },
                              i((A = t(k)[v]) == null ? void 0 : A.defaultKey),
                              9,
                              Ei
                            ),
                            e("div", Ni, i(t(s)("macro.text7")) + i(K + 1), 1),
                            w(
                              se,
                              {
                                "model-value": v,
                                rules: [
                                  {
                                    required: !0,
                                    message: `${t(s)("macro.text7")}${K + 1}${t(
                                      s
                                    )("macro.text8")}`,
                                  },
                                ],
                              },
                              null,
                              8,
                              ["model-value", "rules"]
                            ),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              e("div", qi, [
                e("div", Gi, i(t(s)("highSet.text21")), 1),
                e("div", Fi, i(t(s)("highSet.text81")), 1),
                e("div", null, [
                  e("div", Xi, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(
                        r.value.CBOptions,
                        (v, K) => (
                          l(),
                          o(
                            "div",
                            {
                              key: K,
                              class: te([
                                "relative sys-code-item all-center",
                                {
                                  "active-sb-sys": t(a).sysCode.includes(
                                    v.value
                                  ),
                                },
                              ]),
                              onClick: (A) => V(v),
                            },
                            [
                              E(i(v.label) + " ", 1),
                              t(a).sysCode.includes(v.value)
                                ? (l(), o("div", Ji, i(p(v.value)), 1))
                                : F("", !0),
                            ],
                            10,
                            zi
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  e("div", ji, [
                    (l(!0),
                    o(
                      T,
                      null,
                      H(t(a).browserCode, (v, K) => {
                        var A, U, Q;
                        return (
                          l(),
                          o("div", { key: K, class: "relative" }, [
                            e(
                              "div",
                              {
                                class: te([
                                  "key-item browser-key relative",
                                  {
                                    "is-active-browser":
                                      t(d).activeBrowserKey === K,
                                  },
                                ]),
                                title:
                                  ((A = t(k)[v]) == null
                                    ? void 0
                                    : A.defaultKey) || "",
                                onClick: (ne) => $(K),
                              },
                              [
                                E(
                                  i(
                                    ((U = t(k)[v]) == null
                                      ? void 0
                                      : U.defaultKey) || ""
                                  ) + " ",
                                  1
                                ),
                                t(le)(
                                  (Q = t(k)[v]) == null ? void 0 : Q.defaultKey
                                )
                                  ? (l(),
                                    o(
                                      "div",
                                      {
                                        key: 0,
                                        class: "absolute del-btn all-center",
                                        onClick: Z((ne) => x(K), ["stop"]),
                                      },
                                      [w(O, { name: "delBrowser" })],
                                      8,
                                      Qi
                                    ))
                                  : F("", !0),
                              ],
                              10,
                              Wi
                            ),
                            e("div", Zi, i(t(s)("macro.text7")) + i(K + 1), 1),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      );
    },
  }),
  ea = q(Yi, [["__scopeId", "data-v-1c066c68"]]),
  fe = "" + new URL("DKS-D9kgmmQP.webm", import.meta.url).href,
  ta = "" + new URL("MPT-U_qcJMbc.webm", import.meta.url).href,
  sa = "" + new URL("MT-DtnyCVsv.webm", import.meta.url).href,
  ia = "" + new URL("TGL-Cb6RmkVn.webm", import.meta.url).href,
  aa = "" + new URL("END-C3kJZFwr.webm", import.meta.url).href,
  ca = "" + new URL("aPriority-J5FSH5vz.webm", import.meta.url).href,
  la = "" + new URL("bPriority-Cl4Wp4s3.webm", import.meta.url).href,
  oa = "" + new URL("override-bv9AWHmF.webm", import.meta.url).href,
  na = "" + new URL("cancelOut-0xqVqrDB.webm", import.meta.url).href,
  da = "" + new URL("RS-Dy15W7z7.webm", import.meta.url).href,
  ra = { class: "high-video-dia" },
  ha = { class: "video-dia-header item-center" },
  ua = { class: "video-content flex" },
  va = { class: "video-left" },
  _a = { class: "title" },
  ga = { class: "sub-title" },
  pa = { class: "title title-1" },
  ma = { class: "sub-title sub-ul" },
  fa = { class: "video-right flex" },
  ya = { class: "video-right-title" },
  ka = { key: 0, class: "socd-mode-group item-center" },
  $a = ["onClick"],
  Sa = ["src"],
  xa = X({
    __name: "highVideo",
    setup(G, { expose: I }) {
      const { t: b } = j.useI18n(),
        y = N(!1),
        m = N("DKS"),
        s = N(0),
        C = {
          DKS: {
            title: "highSet.text3",
            subTitle1: "highSet.text51",
            tips1: "highSet.text4",
            subTitle2: "highSet.text52",
            tips2: [
              "highSet.text53",
              "highSet.text54",
              "highSet.text55",
              "highSet.text56",
            ],
          },
          MPT: {
            title: "highSet.text7",
            subTitle1: "highSet.text51",
            tips1: "highSet.text8",
            subTitle2: "highSet.text52",
            tips2: ["highSet.text57", "highSet.text58", "highSet.text59"],
          },
          MT: {
            title: "highSet.text9",
            subTitle1: "highSet.text51",
            tips1: "highSet.text10",
            subTitle2: "highSet.text52",
            tips2: ["highSet.text60", "highSet.text61"],
          },
          TGL: {
            title: "highSet.text11",
            subTitle1: "highSet.text51",
            tips1: "highSet.text12",
            subTitle2: "highSet.text52",
            tips2: ["highSet.text62", "highSet.text63"],
          },
          END: {
            title: "highSet.text13",
            subTitle1: "highSet.text51",
            tips1: "highSet.text14",
            subTitle2: "highSet.text52",
            tips2: [
              "highSet.text64",
              "highSet.text65",
              "highSet.text66",
              "highSet.text67",
            ],
          },
          SOCD: {
            title: "highSet.text5",
            subTitle1: "highSet.text51",
            tips1: "highSet.text6",
            subTitle2: "highSet.text52",
            tips2: [
              "highSet.text68",
              "highSet.text69",
              "highSet.text70",
              "highSet.text71",
            ],
          },
          RS: {
            title: "highSet.text15",
            subTitle1: "highSet.text51",
            tips1: "highSet.text16",
            subTitle2: "highSet.text52",
            tips2: ["highSet.text72", "highSet.text73"],
          },
        },
        _ = [
          "highSet.text74",
          "highSet.text75",
          "highSet.text76",
          "highSet.text77",
        ],
        g = J(() => {
          let r = fe;
          switch (m.value) {
            case "DKS":
              r = fe;
              break;
            case "MPT":
              r = ta;
              break;
            case "MT":
              r = sa;
              break;
            case "TGL":
              r = ia;
              break;
            case "END":
              r = aa;
              break;
            case "SOCD":
              s.value === 0
                ? (r = ca)
                : s.value === 1
                ? (r = la)
                : s.value === 2
                ? (r = oa)
                : s.value === 3 && (r = na);
              break;
            case "RS":
              r = da;
              break;
          }
          return r;
        }),
        k = J(() => C[m.value]);
      function d() {
        (y.value = !1), (m.value = "DKS"), (s.value = 0);
      }
      function a(r) {
        (y.value = !0), (m.value = r), (s.value = 0);
      }
      return (
        I({ openDia: a }),
        (r, $) => (
          l(),
          oe(
            ye,
            {
              modelValue: y.value,
              "onUpdate:modelValue": $[0] || ($[0] = (x) => (y.value = x)),
              width: "737px",
              "max-width": "737px",
              "padding-value": "0",
              onClose: d,
            },
            {
              default: he(() => {
                var x, p, V, S, B;
                return [
                  e("div", ra, [
                    e("div", ha, [
                      E(
                        i(t(b)((x = k.value) == null ? void 0 : x.title)) + " ",
                        1
                      ),
                      w(O, { name: "close", onClick: d }),
                    ]),
                    e("div", ua, [
                      e("div", va, [
                        e(
                          "div",
                          _a,
                          i(t(b)((p = k.value) == null ? void 0 : p.subTitle1)),
                          1
                        ),
                        e(
                          "div",
                          ga,
                          i(t(b)((V = k.value) == null ? void 0 : V.tips1)),
                          1
                        ),
                        e(
                          "div",
                          pa,
                          i(t(b)((S = k.value) == null ? void 0 : S.subTitle2)),
                          1
                        ),
                        e("ul", ma, [
                          (l(!0),
                          o(
                            T,
                            null,
                            H(
                              (B = k.value) == null ? void 0 : B.tips2,
                              (D) => (l(), o("li", { key: D }, i(t(b)(D)), 1))
                            ),
                            128
                          )),
                        ]),
                      ]),
                      $[1] ||
                        ($[1] = e("div", { class: "center-line" }, null, -1)),
                      e("div", fa, [
                        e("div", ya, i(t(b)("highSet.text78")), 1),
                        m.value === "SOCD"
                          ? (l(),
                            o("div", ka, [
                              (l(),
                              o(
                                T,
                                null,
                                H(_, (D, f) =>
                                  e(
                                    "div",
                                    {
                                      key: D,
                                      class: te([
                                        "tab-item all-center",
                                        { "active-mode": f === s.value },
                                      ]),
                                      onClick: (c) => (s.value = f),
                                    },
                                    i(t(b)(D)),
                                    11,
                                    $a
                                  )
                                ),
                                64
                              )),
                            ]))
                          : F("", !0),
                        (l(),
                        o(
                          "video",
                          {
                            key: g.value,
                            autoplay: "",
                            muted: "",
                            loop: "",
                            class: "background-video w-full",
                          },
                          [
                            e(
                              "source",
                              { src: g.value, type: "video/mp4" },
                              null,
                              8,
                              Sa
                            ),
                          ]
                        )),
                      ]),
                    ]),
                  ]),
                ];
              }),
              _: 1,
            },
            8,
            ["modelValue"]
          )
        )
      );
    },
  }),
  wa = q(xa, [["__scopeId", "data-v-d9e34045"]]),
  Ca = { class: "list-content h-full" },
  ba = { class: "high-list w-full flex" },
  Ka = { class: "w-full high-header item-center" },
  Da = { class: "w-full high-content" },
  Ba = ["onClick"],
  Va = { class: "page-item-header item-center w-full" },
  Ma = { class: "item-center" },
  Ta = { class: "actions-list w-full flex" },
  Ia = { class: "w-full high-header item-center" },
  Pa = { class: "w-full high-content flex" },
  Ha = ["onClick"],
  Aa = { class: "item-center h-full" },
  Ra = { class: "device-key-group h-full all-center" },
  Ua = ["title"],
  La = { class: "item-center action-item-right" },
  Oa = { key: 0, class: "item-center browser-code" },
  Ea = ["onClick"],
  Na = X({
    __name: "highCenter",
    emits: ["update:activePage", "update:delete"],
    setup(G, { emit: I }) {
      var V, S;
      const { t: b } = j.useI18n(),
        y = W(),
        m = (V = y.deviceInstance) == null ? void 0 : V.Info_Class,
        s = (S = y.deviceInstance) == null ? void 0 : S.High_Class,
        C = m == null ? void 0 : m.keyboardMap,
        _ = s.activeData,
        g = _e("HighVideoRef"),
        k = I,
        d = J(() => [
          { icon: "DKS", title: "highSet.text3", tips: "highSet.text4" },
          { icon: "SOCD", title: "highSet.text5", tips: "highSet.text6" },
          { icon: "MPT", title: "highSet.text7", tips: "highSet.text8" },
          { icon: "MT", title: "highSet.text9", tips: "highSet.text10" },
          { icon: "TGL", title: "highSet.text11", tips: "highSet.text12" },
          { icon: "END", title: "highSet.text13", tips: "highSet.text14" },
          { icon: "RS", title: "highSet.text15", tips: "highSet.text16" },
          { icon: "CB", title: "highSet.text79", tips: "highSet.text80" },
        ]);
      function a(B, D) {
        k("update:activePage", z(B), D);
      }
      function r(B) {
        let D = "";
        for (let f in C)
          if (f == B) {
            D = C[f].defaultKey;
            break;
          }
        return D;
      }
      function $(B) {
        let D = d.value.find((f) => f.icon === B);
        return D ? D.title : "";
      }
      async function x(B) {
        k("update:delete", z(B));
      }
      function p(B) {
        g.value && g.value.openDia(B);
      }
      return (B, D) => (
        l(),
        o("div", Ca, [
          e("div", ba, [
            e("div", Ka, i(t(b)("highSet.text1")), 1),
            e("div", Da, [
              (l(!0),
              o(
                T,
                null,
                H(
                  d.value,
                  (f) => (
                    l(),
                    o(
                      T,
                      { key: f.icon },
                      [
                        t(_).pageData.includes(f.icon)
                          ? (l(),
                            o(
                              "div",
                              {
                                key: 0,
                                class: "high-page-item content-center",
                                onClick: (c) => a(f, -1),
                              },
                              [
                                e("div", Va, [
                                  e("div", Ma, [
                                    w(
                                      O,
                                      { name: f.icon, class: "high-icon" },
                                      null,
                                      8,
                                      ["name"]
                                    ),
                                    E(" " + i(t(b)(f.title)), 1),
                                  ]),
                                  f.icon !== "CB"
                                    ? (l(),
                                      oe(
                                        O,
                                        {
                                          key: 0,
                                          name: "highVideo",
                                          class: "video-icon",
                                          onClick: Z(
                                            (c) => p(f.icon),
                                            ["stop"]
                                          ),
                                        },
                                        null,
                                        8,
                                        ["onClick"]
                                      ))
                                    : F("", !0),
                                ]),
                                E(" " + i(t(b)(f.tips)), 1),
                              ],
                              8,
                              Ba
                            ))
                          : F("", !0),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
          e("div", Ta, [
            e("div", Ia, i(t(b)("highSet.text2")), 1),
            e("div", Pa, [
              (l(!0),
              o(
                T,
                null,
                H(
                  t(_).advancedActions,
                  (f, c) => (
                    l(),
                    o(
                      T,
                      { key: c },
                      [
                        f.icon !== "MACRO"
                          ? (l(),
                            o(
                              "div",
                              {
                                key: 0,
                                class: "actions-item item-center",
                                onClick: (n) => a(f, c),
                              },
                              [
                                e("div", Aa, [
                                  e("div", Ra, [
                                    (l(!0),
                                    o(
                                      T,
                                      null,
                                      H(
                                        f.deviceKey,
                                        (n) => (
                                          l(),
                                          o(
                                            "div",
                                            {
                                              key: n,
                                              class: "key-code",
                                              title: r(n),
                                            },
                                            i(r(n)),
                                            9,
                                            Ua
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  w(
                                    O,
                                    { name: f.icon, class: "high-icon" },
                                    null,
                                    8,
                                    ["name"]
                                  ),
                                  E(" " + i(t(b)($(f.icon))), 1),
                                ]),
                                e("div", La, [
                                  "browserCode" in f
                                    ? (l(),
                                      o("div", Oa, [
                                        (l(!0),
                                        o(
                                          T,
                                          null,
                                          H(
                                            f.browserCode,
                                            (n) => (
                                              l(),
                                              o(
                                                "div",
                                                { key: n, class: "key-code" },
                                                i(r(n)),
                                                1
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]))
                                    : F("", !0),
                                  e(
                                    "div",
                                    {
                                      class: "del-icon all-center",
                                      onClick: Z((n) => x(f), ["stop"]),
                                    },
                                    [w(O, { name: "del" })],
                                    8,
                                    Ea
                                  ),
                                ]),
                              ],
                              8,
                              Ha
                            ))
                          : F("", !0),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
          w(wa, { ref_key: "HighVideoRef", ref: g }, null, 512),
        ])
      );
    },
  }),
  qa = q(Na, [["__scopeId", "data-v-b6232f4f"]]),
  Ga = { class: "full-container" },
  Fa = ["title"],
  Xa = ["onClick"],
  za = ["onClick"],
  Ja = { key: 1 },
  ja = { class: "w-full high-container" },
  Wa = X({
    __name: "index",
    setup(G) {
      var r;
      const I = {
          DKS: rt,
          CB: ea,
          SOCD: Vt,
          MPT: Zt,
          MT: bs,
          END: zs,
          TGL: _i,
          RS: Bi,
          parent: qa,
        },
        b = _e("HighComponentsRef"),
        m = (r = W().deviceInstance) == null ? void 0 : r.High_Class,
        s = m.activeData;
      Y(
        () => s.activeBrowserKey,
        ($) => {
          window.removeEventListener("keydown", g),
            $ !== -1 && window.addEventListener("keydown", g);
        }
      );
      function C($, x) {
        m.changeActivePage($, x, b);
      }
      async function _() {
        await m.sureSuccess(b);
      }
      function g($) {
        m.handleKeyDown($);
      }
      function k($) {
        m.activeKeyIsHigh($, b);
      }
      async function d($) {
        await m.deleteHigh($);
      }
      function a($) {
        m.clearActiveKey($);
      }
      return (
        Se(async () => {
          await m.onMountedFn();
        }),
        xe(() => {
          m.resetClass();
        }),
        ($, x) => (
          l(),
          o("div", Ga, [
            w(
              ke,
              {
                modelValue: t(s).activeKey,
                "onUpdate:modelValue":
                  x[0] || (x[0] = (p) => (t(s).activeKey = p)),
                "length-value": t(s).chooseLength,
              },
              {
                default: he(({ item: p, selectKey: V }) => [
                  e(
                    "div",
                    {
                      class: "change-key-device-item w-full h-full all-center",
                      title: p == null ? void 0 : p.name,
                    },
                    [
                      p != null && p.highMode
                        ? (l(),
                          o(
                            "div",
                            {
                              key: 0,
                              class: "high-icon w-full h-full all-center",
                              onClick: (S) => k(p),
                            },
                            [
                              w(
                                O,
                                { name: p == null ? void 0 : p.highMode },
                                null,
                                8,
                                ["name"]
                              ),
                              E(" " + i(p == null ? void 0 : p.highMode), 1),
                            ],
                            8,
                            Xa
                          ))
                        : (l(),
                          o(
                            "div",
                            {
                              key: 1,
                              class: "w-full h-full common-item",
                              onClick: (S) => V(p),
                            },
                            [
                              p.icon
                                ? (l(),
                                  oe(
                                    O,
                                    { key: 0, name: p.icon, class: "key-icon" },
                                    null,
                                    8,
                                    ["name"]
                                  ))
                                : (l(),
                                  o(
                                    "span",
                                    Ja,
                                    i(p == null ? void 0 : p.name),
                                    1
                                  )),
                            ],
                            8,
                            za
                          )),
                    ],
                    8,
                    Fa
                  ),
                ]),
                _: 1,
              },
              8,
              ["modelValue", "length-value"]
            ),
            e("div", ja, [
              (l(),
              oe(
                we(I[t(s).activePage]),
                {
                  ref_key: "HighComponentsRef",
                  ref: b,
                  key: t(s).activePage,
                  "single-high-data": t(s).singleHighData,
                  "onUpdate:singleHighData":
                    x[1] || (x[1] = (p) => (t(s).singleHighData = p)),
                  "active-browser-key": t(s).activeBrowserKey,
                  "onUpdate:activeBrowserKey":
                    x[2] || (x[2] = (p) => (t(s).activeBrowserKey = p)),
                  "edit-or-add": t(s).editOrAdd,
                  "onUpdate:editOrAdd":
                    x[3] || (x[3] = (p) => (t(s).editOrAdd = p)),
                  "all-data": t(s),
                  "bind-active-key": t(s).activeKey,
                  "onUpdate:activePage": C,
                  "onUpdate:sureSuccess": _,
                  "onUpdate:delete": d,
                  "onUpdate:clearActiveKey": a,
                },
                null,
                40,
                [
                  "single-high-data",
                  "active-browser-key",
                  "edit-or-add",
                  "all-data",
                  "bind-active-key",
                ]
              )),
            ]),
          ])
        )
      );
    },
  }),
  tc = q(Wa, [["__scopeId", "data-v-9c559160"]]);
export { tc as default };
