import {
  z as ne,
  v as oe,
  u as Y,
  j as Q,
  H,
  k as t,
  l as R,
  t as l,
  h as e,
  p as w,
  m as v,
  n as x,
  ac as Z,
  y as r,
  i as u,
  F as T,
  B as U,
  as as fe,
  af as _e,
  E as ae,
  at as pe,
  r as D,
  au as ie,
  a4 as N,
  L as re,
  D as ke,
  _ as se,
  C as ve,
  a5 as de,
  a7 as ge,
  o as we,
  ab as xe,
  w as be,
  an as Me,
  s as $e,
  $ as Ce,
} from "./index-w58kBX-A.js";
import { v as Se } from "./el-loading-DyxSlm0Y.js";
import { A as De } from "./aulaKeyboard-AQHDrDfR.js";
import { E as Ke, S as Ae } from "./editNameDia-KJ4A9bda.js";
import { A as ue } from "./aula-ruleTip-BXkezzL8.js";
import "./three-core-Cz6MriGW.js";
const Le = { class: "w-full macro-drawer flex h-full" },
  Ve = { class: "macro-header item-center w-full" },
  Ie = { class: "macro-drawer-content flex relative" },
  Te = { class: "action-header item-center" },
  Ue = { class: "item-center macro-name" },
  Re = { class: "action-right item-center" },
  Ne = ["title"],
  Ee = { class: "item-center action-item-left" },
  Be = ["onClick"],
  He = ["title"],
  Oe = { class: "common-text" },
  Fe = ["onClick"],
  Pe = ["title"],
  je = { class: "common-text" },
  ze = ne({
    __name: "macroDrawer",
    emits: ["update:macroList"],
    setup(ee, { expose: M, emit: K }) {
      const { t: c } = oe.useI18n(),
        A = D(),
        n = D({ id: "", name: "", actions: [] }),
        b = D("Add"),
        s = D(!1),
        $ = D(),
        p = D(0),
        _ = D(!1),
        h = D(""),
        C = Y("MacroListRef"),
        V = Y("EditNameDiaRef"),
        j = [
          { label: "keySet.text14", value: "keydown", slotName: "keyAction" },
          { label: "keySet.text15", value: "keyup", slotName: "keyAction" },
        ],
        z = K;
      function q(o, m) {
        switch (m) {
          case "editName":
            I(), (h.value = ""), V.value && V.value.openDia(n.value.name);
            break;
        }
      }
      function J() {
        I(),
          F(),
          (h.value = ""),
          (p.value = 0),
          (_.value = !1),
          (s.value = !s.value),
          s.value && y();
      }
      function W() {
        I(), (h.value = ""), (n.value.actions.length = 0);
      }
      function O() {
        I(),
          (h.value = ""),
          (n.value.actions = n.value.actions.filter((o) => o.keyValue)),
          z("update:macroList", b.value, n.value);
      }
      function F() {
        window.removeEventListener("keydown", i),
          window.removeEventListener("keyup", d);
      }
      function y() {
        (p.value = 0),
          window.addEventListener("keydown", i),
          window.addEventListener("keyup", d);
      }
      function i(o) {
        o.preventDefault(),
          o.stopPropagation(),
          !(o instanceof KeyboardEvent && o.repeat) && L(o, "keydown");
      }
      function d(o) {
        o.preventDefault(), o.stopPropagation(), L(o, "keyup");
      }
      function L(o, m) {
        var X;
        let k = 10,
          B = Number(new Date()),
          g = "";
        p.value > 0 && (k = B - p.value),
          o instanceof MouseEvent
            ? (g = {
                0: "MouseLeft",
                1: "MouseMiddle",
                2: "MouseRight",
                4: "MouseSide1",
                3: "MouseSide2",
              }[o.button])
            : (g = o.code),
          p.value > 0 &&
            (X = n.value.actions) != null &&
            X.length &&
            (n.value.actions[n.value.actions.length - 1].time = Math.max(
              k,
              10
            )),
          n.value.actions.push({
            time: 10,
            keyStatus: m,
            keyValue: g,
            id: g + "-id-" + ie(),
          }),
          (p.value = B),
          te();
      }
      function P(o) {
        I(), (h.value = ""), n.value.actions.splice(o, 1);
      }
      function G() {
        var o;
        I(),
          (h.value = ""),
          ((o = n.value.actions) == null ? void 0 : o.length) < 70 &&
            (n.value.actions.push({
              time: 10,
              keyStatus: "keydown",
              keyValue: "",
              id: "-id-" + ie(),
            }),
            te());
      }
      function a(o) {
        n.value.name = N(o);
      }
      function f(o) {
        I(),
          h.value !== o.id
            ? ((h.value = o.id), window.addEventListener("keydown", E))
            : (h.value = "");
      }
      function E(o) {
        let m = n.value.actions.find((k) => k.id === h.value);
        m && ((m.keyValue = o.code), (h.value = ""));
      }
      function I() {
        window.removeEventListener("keydown", E);
      }
      async function le() {
        I(), (h.value = "");
        let o = await ye();
        !s.value && o && ce();
      }
      function ce() {
        (h.value = ""),
          (b.value = "Add"),
          (s.value = !1),
          (p.value = 0),
          (_.value = !1),
          (A.value = !1);
      }
      function me(o, m) {
        (A.value = !0),
          re(() => {
            (b.value = o), (n.value = N(m)), ($.value = N(m)), he(), te();
          });
      }
      function he() {
        const o = C.value;
        o &&
          new Ae(o, {
            animation: 150,
            handle: ".drag-icon",
            ghostClass: "is-dragging",
            onEnd: (m) => {
              if (m.oldIndex == null || m.newIndex == null) return;
              const k = n.value.actions.splice(m.oldIndex, 1)[0];
              n.value.actions.splice(m.newIndex, 0, k);
            },
          });
      }
      async function ye() {
        var m;
        if (
          !(b.value === "Add"
            ? ((m = n.value.actions) == null ? void 0 : m.length) > 0
            : (() => {
                const k = JSON.stringify($.value),
                  B = N(n.value);
                return k !== JSON.stringify(B);
              })())
        )
          return !0;
        try {
          return (
            await ke.confirm(`${c("reSet.message5")}`, `${c("reSet.title4")}`, {
              confirmButtonText: c("reSet.confirmText"),
              cancelButtonText: c("reSet.cancelText"),
            }),
            !0
          );
        } catch {
          return !1;
        }
      }
      const te = async () => {
        await re();
        const o = C.value;
        o && (o.scrollTop = o.scrollHeight);
      };
      return (
        M({ openDrawer: me, clearValue: ce }),
        (o, m) => (
          r(),
          Q(
            pe,
            {
              modelValue: A.value,
              "onUpdate:modelValue": m[0] || (m[0] = (k) => (A.value = k)),
              width: "100%",
              "max-width": "960px",
              "padding-value": "20px",
              "close-on-click-overlay": !s.value,
              onClose: le,
            },
            {
              default: H(() => {
                var k, B;
                return [
                  t("div", Le, [
                    t("div", Ve, [
                      R(l(e(c)("keySet.text8")) + " ", 1),
                      t(
                        "div",
                        {
                          class: w([
                            "all-center close-btn h-full",
                            { "aula-disabled": s.value },
                          ]),
                          onClick: le,
                        },
                        [v(x, { name: "close" })],
                        2
                      ),
                    ]),
                    t("div", Ie, [
                      t("div", Te, [
                        t("div", Ue, [
                          R(l(n.value.name) + " ", 1),
                          v(
                            Z,
                            {
                              "ins-value": "macroEditName",
                              params: { recordStatus: s.value },
                              "onUpdate:report": q,
                            },
                            null,
                            8,
                            ["params"]
                          ),
                        ]),
                        t("div", Re, [
                          t(
                            "div",
                            {
                              class: w([
                                "common-text",
                                { "active-recording": s.value },
                              ]),
                              title: s.value
                                ? e(c)("keySet.text9")
                                : e(c)("keySet.text10"),
                              onClick: J,
                            },
                            l(
                              s.value
                                ? e(c)("keySet.text9")
                                : e(c)("keySet.text10")
                            ),
                            11,
                            Ne
                          ),
                          t(
                            "div",
                            {
                              class: w([
                                "common-text",
                                {
                                  "aula-disabled":
                                    s.value ||
                                    !(
                                      (k = n.value.actions) != null && k.length
                                    ),
                                },
                              ]),
                              onClick: W,
                            },
                            l(e(c)("keySet.text11")),
                            3
                          ),
                          t(
                            "div",
                            {
                              class: w([
                                "common-text",
                                { "aula-disabled": s.value },
                              ]),
                              onClick: O,
                            },
                            l(e(c)("keySet.text12")),
                            3
                          ),
                        ]),
                      ]),
                      t(
                        "div",
                        {
                          ref_key: "MacroListRef",
                          ref: C,
                          class: w([
                            "action-content",
                            { "aula-disabled": s.value },
                          ]),
                        },
                        [
                          (r(!0),
                          u(
                            T,
                            null,
                            U(
                              n.value.actions,
                              (g, X) => (
                                r(),
                                u(
                                  "div",
                                  {
                                    key: g.id,
                                    class: "action-item item-center w-full",
                                  },
                                  [
                                    t("div", Ee, [
                                      v(x, {
                                        name: "dragList",
                                        class: "drag-icon",
                                      }),
                                      t(
                                        "div",
                                        {
                                          class: w([
                                            "action-code all-center",
                                            {
                                              "active-actions-item":
                                                h.value === g.id,
                                            },
                                          ]),
                                          onClick: (S) => f(g),
                                        },
                                        l(g.keyValue),
                                        11,
                                        Be
                                      ),
                                      v(
                                        fe,
                                        {
                                          modelValue: g.keyStatus,
                                          "onUpdate:modelValue": (S) =>
                                            (g.keyStatus = S),
                                          "segment-array": j,
                                          gap: 8,
                                        },
                                        {
                                          keyAction: H(({ params: S }) => [
                                            t(
                                              "div",
                                              {
                                                class:
                                                  "key-action-item all-center w-full",
                                                title: e(c)(S.label),
                                              },
                                              [
                                                v(
                                                  x,
                                                  { name: S.value },
                                                  null,
                                                  8,
                                                  ["name"]
                                                ),
                                                t(
                                                  "div",
                                                  Oe,
                                                  l(e(c)(S.label)),
                                                  1
                                                ),
                                              ],
                                              8,
                                              He
                                            ),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["modelValue", "onUpdate:modelValue"]
                                      ),
                                      v(
                                        _e,
                                        {
                                          modelValue: g.time,
                                          "onUpdate:modelValue": (S) =>
                                            (g.time = S),
                                          min: 10,
                                          max: 1e5,
                                          style: { "max-width": "80px" },
                                        },
                                        null,
                                        8,
                                        ["modelValue", "onUpdate:modelValue"]
                                      ),
                                    ]),
                                    t(
                                      "div",
                                      {
                                        class: "delete-icon all-center",
                                        onClick: (S) => P(X),
                                      },
                                      [v(x, { name: "del" })],
                                      8,
                                      Fe
                                    ),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        2
                      ),
                      t(
                        "div",
                        {
                          class: w([
                            "all-center inset-btn",
                            { "aula-disabled": s.value },
                          ]),
                          style: ae({
                            marginTop:
                              (B = n.value.actions) != null && B.length
                                ? "24px"
                                : 0,
                          }),
                          title: e(c)("keySet.text13"),
                          onClick: G,
                        },
                        [
                          v(x, { name: "insetKey" }),
                          t("div", je, l(e(c)("keySet.text13")), 1),
                        ],
                        14,
                        Pe
                      ),
                    ]),
                  ]),
                  v(
                    Ke,
                    { ref_key: "EditNameDiaRef", ref: V, "onUpdate:name": a },
                    null,
                    512
                  ),
                ];
              }),
              _: 1,
            },
            8,
            ["modelValue", "close-on-click-overlay"]
          )
        )
      );
    },
  }),
  qe = se(ze, [["__scopeId", "data-v-9d853143"]]),
  Je = { class: "w-full flex high-set" },
  We = { class: "w-full high-set-header item-center" },
  Ge = { class: "item-center high-btn-group" },
  Qe = { class: "high-content item-center" },
  Xe = { class: "high-left h-full" },
  Ye = { class: "high-title" },
  Ze = { class: "high-subtitle" },
  et = { class: "item-center high-key-group" },
  tt = ["onClick"],
  at = { class: "key-num" },
  nt = { class: "high-center h-full" },
  ot = { class: "high-title" },
  st = { class: "high-subtitle" },
  lt = { class: "flex macro-options w-full" },
  ct = ["onClick"],
  it = { class: "high-right h-full" },
  rt = { class: "high-title" },
  dt = { class: "high-subtitle" },
  ut = { class: "item-center macro-choose relative" },
  vt = { class: "macro-choose-item w-full" },
  mt = ne({
    __name: "highMACRO",
    props: {
      macroList: { type: Array, default: () => [] },
      bindActiveKey: { type: Array, default: () => [] },
    },
    emits: [
      "update:cancel",
      "update:unBind",
      "update:setMacroToKey",
      "update:clearActiveKey",
    ],
    setup(ee, { expose: M, emit: K }) {
      var O, F;
      const { t: c } = oe.useI18n(),
        A = ee,
        n = D(A.macroList),
        b = D(),
        s = ve(),
        $ = (O = s.deviceInstance) == null ? void 0 : O.Key_Class,
        p = (F = s.deviceInstance) == null ? void 0 : F.Info_Class,
        _ = $.activeData.singleHighData,
        h = p == null ? void 0 : p.keyboardMap,
        C = K;
      de(
        () => A.macroList,
        (y) => {
          n.value = N(y);
        },
        { immediate: !0, deep: !0 }
      ),
        de(
          () => A.bindActiveKey,
          (y) => {
            $.specialSetKey(y);
          },
          { deep: !0, immediate: !0 }
        );
      function V(y, i) {
        switch (i) {
          case "clickCount":
            _.clickCount = Number(N(y));
            break;
          case "clickInterval":
            _.clickInterval = Number(N(y));
            break;
        }
      }
      function j() {
        C("update:cancel");
      }
      async function z() {
        C("update:unBind", b.value);
      }
      function q() {
        C("update:setMacroToKey", b.value, _);
      }
      function J(y) {
        b.value = N(y);
      }
      function W(y) {
        C("update:clearActiveKey", y);
      }
      return (
        M({ setOldMacro: J }),
        (y, i) => (
          r(),
          u("div", Je, [
            t("div", We, [
              R(l(e(c)("macro.text1")) + " ", 1),
              t("div", Ge, [
                t(
                  "div",
                  { class: "all-center", onClick: j },
                  l(e(c)("macro.text2")),
                  1
                ),
                t(
                  "div",
                  {
                    class: w([
                      "all-center",
                      { "aula-disabled": !e($).activeData.isMacroKey },
                    ]),
                    onClick: z,
                  },
                  l(e(c)("macro.text3")),
                  3
                ),
                t(
                  "div",
                  { class: "all-center", onClick: q },
                  l(e(c)("macro.text4")),
                  1
                ),
              ]),
            ]),
            t("div", Qe, [
              t("div", Xe, [
                t("div", Ye, "1." + l(e(c)("macro.text5")), 1),
                t("div", Ze, l(e(c)("macro.text6")), 1),
                t("div", et, [
                  (r(!0),
                  u(
                    T,
                    null,
                    U(e(_).deviceKey, (d, L) => {
                      var P;
                      return (
                        r(),
                        u("div", { key: L, class: "relative" }, [
                          t(
                            "div",
                            {
                              class: "key-item all-center",
                              onClick: (G) => W(d),
                            },
                            l((P = e(h)[d]) == null ? void 0 : P.defaultKey),
                            9,
                            tt
                          ),
                          t("div", at, l(e(c)("macro.text7")) + l(L + 1), 1),
                          v(
                            ue,
                            {
                              "model-value": d,
                              rules: [
                                {
                                  required: !0,
                                  message: `${e(c)("macro.text7")}${L + 1}${e(
                                    c
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
              t("div", nt, [
                t("div", ot, "2." + l(e(c)("macro.text9")), 1),
                t("div", st, l(e(c)("macro.text10")), 1),
                t("div", lt, [
                  (r(!0),
                  u(
                    T,
                    null,
                    U(
                      e($).MACROOptions,
                      (d) => (
                        r(),
                        u(
                          "div",
                          {
                            key: d.value,
                            class: w([
                              "macro-option-item item-center",
                              { "active-mode": d.value === e(_).behaviorMode },
                            ]),
                            onClick: (L) => (e(_).behaviorMode = d.value),
                          },
                          [R(l(d.label) + " ", 1), v(x, { name: "issue" })],
                          10,
                          ct
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              t("div", it, [
                t("div", rt, "3." + l(e(c)("macro.text15")), 1),
                t("div", dt, l(e(c)("macro.text16")), 1),
                t("div", ut, [
                  t("div", vt, l(e(c)("macro.text17")), 1),
                  v(
                    ge,
                    {
                      modelValue: e(_).macroId,
                      "onUpdate:modelValue":
                        i[0] || (i[0] = (d) => (e(_).macroId = d)),
                      "label-alias": "name",
                      "value-alias": "id",
                      options: n.value,
                    },
                    null,
                    8,
                    ["modelValue", "options"]
                  ),
                  v(
                    ue,
                    {
                      "model-value": e(_).macroId,
                      rules: [{ required: !0, message: e(c)("macro.text18") }],
                    },
                    null,
                    8,
                    ["model-value", "rules"]
                  ),
                ]),
                v(
                  Z,
                  {
                    "ins-value": "macroClickNum",
                    params: { singleHighData: e(_) },
                    "onUpdate:report": V,
                  },
                  null,
                  8,
                  ["params"]
                ),
              ]),
            ]),
          ])
        )
      );
    },
  }),
  ht = se(mt, [["__scopeId", "data-v-e3563b45"]]),
  yt = { class: "full-container" },
  ft = ["title"],
  _t = ["onClick"],
  pt = ["onClick"],
  kt = { key: 1 },
  gt = { class: "absolute side-menu" },
  wt = ["onClick"],
  xt = { key: 0, class: "key-container" },
  bt = { class: "key-content-item w-full flex" },
  Mt = { class: "key-header w-full item-center" },
  $t = { class: "key-body flex" },
  Ct = { class: "key-tabs item-center" },
  St = { class: "item-center tabs-group" },
  Dt = ["title", "onClick"],
  Kt = { class: "key-content w-full" },
  At = { key: 0, class: "relative item-center key-map" },
  Lt = ["onClick"],
  Vt = { key: 1, class: "item-center special-key-map" },
  It = ["onClick"],
  Tt = { key: 1 },
  Ut = { class: "macro-item w-full flex" },
  Rt = { class: "key-header w-full item-center" },
  Nt = { class: "macro-content w-full flex" },
  Et = { class: "macro-name" },
  Bt = { class: "item-center macro-list-right" },
  Ht = ["onClick"],
  Ot = ["onClick"],
  Ft = ne({
    __name: "index",
    setup(ee) {
      var y;
      const { t: M } = oe.useI18n(),
        K = Y("MacroDrawerRef"),
        c = Y("HighMacroRef"),
        n = (y = ve().deviceInstance) == null ? void 0 : y.Key_Class,
        b = $e(() => (n == null ? void 0 : n.Key_Disabled())),
        s = n.activeData;
      async function $(i, d) {
        await n.sdkReport(i, d, K);
      }
      function p(i) {
        n.changeActiveTab(i);
      }
      async function _() {
        await n.resetKey();
      }
      async function h(i) {
        await n.setActiveKey(i);
      }
      async function C(i) {
        await n.changeFnLevel(i);
      }
      async function V(i) {
        await n.highChoose(i, c);
      }
      async function j(i, d) {
        await n.updateList(i, d, K);
      }
      async function z(i) {
        K.value && K.value.openDrawer("Update", i);
      }
      function q() {
        n.cancelSetMacro();
      }
      async function J(i) {
        await n.unBindMacro(i);
      }
      async function W(i) {
        await n.setMacroToKey(i);
      }
      function O(i) {
        n.clearActiveKey(i);
      }
      function F(i) {
        n.bindMacro(i);
      }
      return (
        we(async () => {
          await n.onMountedFn();
        }),
        xe(async () => {
          await n.resetClass();
        }),
        (i, d) => {
          var G;
          const L = Ce,
            P = Se;
          return be(
            (r(),
            u("div", yt, [
              v(
                De,
                {
                  modelValue: e(s).activeKey,
                  "onUpdate:modelValue":
                    d[0] || (d[0] = (a) => (e(s).activeKey = a)),
                  "length-value": e(s).chooseLength,
                  "onUpdate:highChoose": V,
                },
                {
                  default: H(({ item: a, selectKey: f }) => [
                    t(
                      "div",
                      {
                        class:
                          "change-key-device-item w-full h-full all-center",
                        title: a == null ? void 0 : a.name,
                      },
                      [
                        a != null && a.highMode
                          ? (r(),
                            u(
                              "div",
                              {
                                key: 0,
                                class: "high-icon w-full h-full all-center",
                                onClick: (E) => V(a),
                              },
                              [
                                v(
                                  x,
                                  { name: a == null ? void 0 : a.highMode },
                                  null,
                                  8,
                                  ["name"]
                                ),
                                R(" " + l(a == null ? void 0 : a.highMode), 1),
                              ],
                              8,
                              _t
                            ))
                          : (r(),
                            u(
                              "div",
                              {
                                key: 1,
                                class: "w-full h-full common-item",
                                onClick: (E) => f(a),
                              },
                              [
                                a.icon
                                  ? (r(),
                                    Q(
                                      x,
                                      {
                                        key: 0,
                                        name: a.icon,
                                        class: "key-icon",
                                      },
                                      null,
                                      8,
                                      ["name"]
                                    ))
                                  : (r(),
                                    u(
                                      "span",
                                      kt,
                                      l(a == null ? void 0 : a.name),
                                      1
                                    )),
                              ],
                              8,
                              pt
                            )),
                      ],
                      8,
                      ft
                    ),
                  ]),
                  side: H(() => [
                    t("div", gt, [
                      (r(!0),
                      u(
                        T,
                        null,
                        U(
                          e(s).FnMenu,
                          (a, f) => (
                            r(),
                            u(
                              "div",
                              {
                                key: f,
                                class: w([
                                  "item-center side-item w-full",
                                  { "active-fn-mode": e(s).FnLevel === f },
                                ]),
                                onClick: Me((E) => C(f), ["stop"]),
                              },
                              [
                                v(x, { name: a.icon }, null, 8, ["name"]),
                                t("div", null, l(a.label), 1),
                              ],
                              10,
                              wt
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                  footer: H(({ deviceInfo: a }) => [
                    t(
                      "div",
                      {
                        class: "change-key-tips flex",
                        style: ae({
                          width:
                            Number(a == null ? void 0 : a.bgWidth) / 16 + "rem",
                        }),
                      },
                      [
                        t("div", null, l(e(M)("keySet.text1")) + "：", 1),
                        t("div", null, l(e(M)("keySet.text2")), 1),
                      ],
                      4
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue", "length-value"]
              ),
              e(s).showPage === "common"
                ? (r(),
                  u("div", xt, [
                    t("div", bt, [
                      t("div", Mt, l(e(M)("keySet.text3")), 1),
                      t("div", $t, [
                        t("div", Ct, [
                          t("div", St, [
                            (r(!0),
                            u(
                              T,
                              null,
                              U(
                                e(s).pageData,
                                (a, f) => (
                                  r(),
                                  u(
                                    "div",
                                    {
                                      key: f,
                                      class: w([
                                        "tabs-item common-text",
                                        { "active-tabs": e(s).activeTab === f },
                                      ]),
                                      title: a.label,
                                      onClick: (E) => p(f),
                                    },
                                    l(a.label),
                                    11,
                                    Dt
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          t(
                            "div",
                            {
                              class: w([
                                "item-center side-item",
                                { "aula-disabled": b.value.resetDisabled },
                              ]),
                              onClick: _,
                            },
                            [
                              v(x, { name: "resetDefault" }),
                              t("div", null, l(e(M)("keySet.text4")), 1),
                            ],
                            2
                          ),
                        ]),
                        t("div", Kt, [
                          e(s).activeTab === 0
                            ? (r(),
                              u("div", At, [
                                (r(!0),
                                u(
                                  T,
                                  null,
                                  U(
                                    (G = e(s).pageData[0]) == null
                                      ? void 0
                                      : G.data,
                                    (a) => (
                                      r(),
                                      u(
                                        "div",
                                        {
                                          key: a == null ? void 0 : a.keyValue,
                                          class:
                                            "absolute keyboard-item all-center",
                                          style: ae({
                                            width: a.width / 16 + "rem",
                                            height: a.height / 16 + "rem",
                                            left: a.x / 16 + "rem",
                                            top: a.y / 16 + "rem",
                                          }),
                                          onClick: (f) => h(a.keyValue),
                                        },
                                        l(a.defaultKey),
                                        13,
                                        Lt
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]))
                            : (r(),
                              u("div", Vt, [
                                (r(!0),
                                u(
                                  T,
                                  null,
                                  U(
                                    e(s).pageData[e(s).activeTab].data,
                                    (a, f) => (
                                      r(),
                                      Q(
                                        L,
                                        {
                                          key: f,
                                          placement: "top",
                                          "popper-class": "dp-dr-popover",
                                          "show-arrow": !1,
                                          "hide-after": 0,
                                        },
                                        {
                                          reference: H(() => [
                                            t(
                                              "div",
                                              {
                                                class:
                                                  "special-key-item all-center",
                                                onClick: (E) => h(a.keyValue),
                                              },
                                              [
                                                a.icon
                                                  ? (r(),
                                                    Q(
                                                      x,
                                                      { key: 0, name: a.icon },
                                                      null,
                                                      8,
                                                      ["name"]
                                                    ))
                                                  : (r(),
                                                    u(
                                                      "span",
                                                      Tt,
                                                      l(a.title),
                                                      1
                                                    )),
                                              ],
                                              8,
                                              It
                                            ),
                                          ]),
                                          default: H(() => [R(l(a.title), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ])),
                        ]),
                      ]),
                    ]),
                    t("div", Ut, [
                      t("div", Rt, [
                        R(l(e(M)("keySet.text5")) + " ", 1),
                        v(Z, {
                          "ins-value": "macroAddBtn",
                          "onUpdate:report": $,
                        }),
                      ]),
                      t("div", Nt, [
                        (r(!0),
                        u(
                          T,
                          null,
                          U(
                            e(s).macroList,
                            (a) => (
                              r(),
                              u(
                                "div",
                                {
                                  key: a.id,
                                  class: "item-center macro-list-item w-full",
                                },
                                [
                                  t("div", Et, l(a.name), 1),
                                  t("div", Bt, [
                                    t(
                                      "div",
                                      {
                                        class: w([
                                          "bind-btn all-center",
                                          {
                                            "aula-disabled":
                                              b.value.setMacroDisabled,
                                          },
                                        ]),
                                        onClick: (f) => F(a),
                                      },
                                      [
                                        v(x, { name: "bindMacro" }),
                                        R(
                                          " " +
                                            l(e(M)("keySet.text7")) +
                                            l(a.name),
                                          1
                                        ),
                                      ],
                                      10,
                                      Ht
                                    ),
                                    t(
                                      "div",
                                      {
                                        class: "macro-set-btn all-center",
                                        onClick: (f) => z(a),
                                      },
                                      [v(x, { name: "edit" })],
                                      8,
                                      Ot
                                    ),
                                    v(
                                      Z,
                                      {
                                        params: { item: a },
                                        "ins-value": "macroDeleteBtn",
                                        "onUpdate:report": $,
                                      },
                                      null,
                                      8,
                                      ["params"]
                                    ),
                                  ]),
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]))
                : (r(),
                  Q(
                    ht,
                    {
                      key: 1,
                      ref_key: "HighMacroRef",
                      ref: c,
                      "single-high-data": e(s).singleHighData,
                      "onUpdate:singleHighData":
                        d[1] || (d[1] = (a) => (e(s).singleHighData = a)),
                      "is-macro-key": e(s).isMacroKey,
                      "onUpdate:isMacroKey":
                        d[2] || (d[2] = (a) => (e(s).isMacroKey = a)),
                      "bind-active-key": e(s).activeKey,
                      "macro-list": e(s).macroList,
                      "onUpdate:cancel": q,
                      "onUpdate:unBind": J,
                      "onUpdate:setMacroToKey": W,
                      "onUpdate:clearActiveKey": O,
                    },
                    null,
                    8,
                    [
                      "single-high-data",
                      "is-macro-key",
                      "bind-active-key",
                      "macro-list",
                    ]
                  )),
              v(
                qe,
                { ref_key: "MacroDrawerRef", ref: K, "onUpdate:macroList": j },
                null,
                512
              ),
            ])),
            [[P, e(s).loadKeySet, void 0, { fullscreen: !0, lock: !0 }]]
          );
        }
      );
    },
  }),
  Gt = se(Ft, [["__scopeId", "data-v-2632a49c"]]);
export { Gt as default };
