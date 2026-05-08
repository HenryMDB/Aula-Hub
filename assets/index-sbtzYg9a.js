import {
  z as R,
  v as Z,
  i as e,
  F as i,
  A as Y,
  k as l,
  m as g,
  n as x,
  B as a,
  t as w,
  h as d,
  y as s,
  _ as z,
  C as M,
  u as j,
  o as q,
  D as $,
  d as E,
  E as k,
  w as I,
  G as B,
  H as J,
  l as D,
  T as O,
  j as K,
  I as S,
  q as N,
  p as V,
  r as L,
  U as h,
  x as _,
  J as nn,
  L as ln,
} from "./index-w58kBX-A.js";
import { T as tn } from "./toolbar-BQPkvROV.js";
import "./three-core-Cz6MriGW.js";
const Q =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAvCAYAAAC/vqlHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIsSURBVGiB7ZpditRAFIXPqUQQFyHMwzwMiAwNHVyO4gZ0B7oSXY4gjL40AzO+uA0l9/hwU50ZnWQqbZWtZQ7ddCAVTr7quvVzqwgAm+32BRVeMYSnJAAQdUiQAEFfJby5+PjhPTfbZ88hvQshgCTIWmBdkiAJZoa+71+2sP4tGUCiSmCXQAAkXgeTHlfTgifFGKVPgl+xoridkjOGY7/Gn1a7pLCkyXulYz+XdxJwNJszPcT8GN73AsdufT+m3WHsRtr3A7mgS3jPAkfD8Wu/GPtQBsSh7faLHK5S3glNehy4ZQYbjGOtkkBgAAPgkxdk7PHze08CjzULr10z9NbDTIAEQSAIkFAQGgAiIDXDCx3+L5f0Toxh4Ps3O93tPn2ZKnd2dn768NGDK0mZYzivd9I4LAm73cWkIQBcXn6+TuhIFyu393838ViB71JqSJaYbeX2vhd4yZIxLjFzqYT3ZC89PiyQaS0/17q6pHfCxIMLm1XOZp3fe7b6Ym2RRNd1J3Nlu647uVn+d1XKm+ebrZqmwVxOK2XFEp87xmppzvunnFba8jAFotR6OLf3ogTAMRN8ubzXiUftWoFr1wpcu1bg2rUC164VuHatwLVrBa5dA7D2m1B1auRrAflHnttN2Wn/16Q9r9AOJ9VAeKKrxpN4TujXrWQwIwC7kQeuD9jMTxG0Zua3lHv3/m/RuLFuNgB7/JrvqqMiZsWfEbr1uB2OCVRDelvCmMz/AaHSf543lZmYAAAAAElFTkSuQmCC",
  sn = { class: "typec-box all-center" },
  en = { class: "usb-bottom all-center w-full" },
  on = { class: "empty-center all-center w-full" },
  an = { class: "keyboard-box" },
  rn = { class: "row" },
  dn = { class: "row" },
  un = { class: "row" },
  mn = { class: "row" },
  vn = { class: "row" },
  cn = { class: "keyboard-box new-keyBoard" },
  bn = { class: "row" },
  fn = { class: "row" },
  pn = { class: "row" },
  An = { class: "row" },
  gn = { class: "row" },
  yn = { class: "empty-tips" },
  wn = R({
    __name: "emptyMachine",
    setup(G) {
      const { t: c } = Z.useI18n();
      return (b, n) => (
        s(),
        e(
          i,
          null,
          [
            n[41] ||
              (n[41] = Y(
                '<div class="USB-box flex item-center" data-v-487a35d4><img src="' +
                  Q +
                  '" alt="" data-v-487a35d4><div class="usb-bottom flex w-full" data-v-487a35d4><div class="blue-line w-full" data-v-487a35d4></div><div class="blue-line w-full" data-v-487a35d4></div></div></div>',
                1
              )),
            l("div", sn, [
              n[2] || (n[2] = l("img", { src: Q, alt: "" }, null, -1)),
              l("div", en, [
                n[0] ||
                  (n[0] = l("div", { class: "blue-line w-full" }, null, -1)),
                n[1] ||
                  (n[1] = l("div", { class: "blue-line w-full" }, null, -1)),
                g(x, { name: "typecIcon" }),
              ]),
              n[3] || (n[3] = l("div", { class: "typec-connect" }, null, -1)),
              n[4] || (n[4] = l("div", { class: "typec-line" }, null, -1)),
            ]),
            l("div", on, [
              l("div", an, [
                l("div", rn, [
                  (s(),
                  e(
                    i,
                    null,
                    a(13, (t) => l("div", { key: t, class: "common-btn" })),
                    64
                  )),
                  n[5] ||
                    (n[5] = l(
                      "div",
                      { class: "del-btn common-btn" },
                      null,
                      -1
                    )),
                  n[6] ||
                    (n[6] = l(
                      "div",
                      { class: "right-btn common-btn" },
                      null,
                      -1
                    )),
                ]),
                l("div", dn, [
                  n[7] ||
                    (n[7] = l(
                      "div",
                      { class: "tab-btn common-btn" },
                      null,
                      -1
                    )),
                  (s(),
                  e(
                    i,
                    null,
                    a(12, (t) => l("div", { key: t, class: "common-btn" })),
                    64
                  )),
                  n[8] ||
                    (n[8] = l(
                      "div",
                      { class: "slash-btn common-btn" },
                      null,
                      -1
                    )),
                  n[9] ||
                    (n[9] = l(
                      "div",
                      { class: "right-btn common-btn" },
                      null,
                      -1
                    )),
                ]),
                l("div", un, [
                  n[10] ||
                    (n[10] = l(
                      "div",
                      { class: "caps-btn common-btn" },
                      null,
                      -1
                    )),
                  (s(),
                  e(
                    i,
                    null,
                    a(11, (t) => l("div", { key: t, class: "common-btn" })),
                    64
                  )),
                  n[11] ||
                    (n[11] = l(
                      "div",
                      { class: "enter-btn common-btn" },
                      null,
                      -1
                    )),
                  n[12] ||
                    (n[12] = l(
                      "div",
                      { class: "right-btn common-btn" },
                      null,
                      -1
                    )),
                ]),
                l("div", mn, [
                  n[13] ||
                    (n[13] = l(
                      "div",
                      { class: "l-shift-btn common-btn" },
                      null,
                      -1
                    )),
                  (s(),
                  e(
                    i,
                    null,
                    a(10, (t) => l("div", { key: t, class: "common-btn" })),
                    64
                  )),
                  n[14] ||
                    (n[14] = l(
                      "div",
                      { class: "r-shift-btn common-btn" },
                      null,
                      -1
                    )),
                  n[15] ||
                    (n[15] = l("div", { class: "common-btn" }, null, -1)),
                  n[16] ||
                    (n[16] = l(
                      "div",
                      { class: "right-btn common-btn" },
                      null,
                      -1
                    )),
                ]),
                l("div", vn, [
                  n[17] ||
                    (n[17] = l(
                      "div",
                      { class: "l-ctrl-btn common-btn" },
                      null,
                      -1
                    )),
                  n[18] ||
                    (n[18] = l(
                      "div",
                      { class: "l-win-btn common-btn" },
                      null,
                      -1
                    )),
                  n[19] ||
                    (n[19] = l(
                      "div",
                      { class: "tab-btn common-btn" },
                      null,
                      -1
                    )),
                  n[20] ||
                    (n[20] = l(
                      "div",
                      { class: "space-btn common-btn" },
                      null,
                      -1
                    )),
                  (s(),
                  e(
                    i,
                    null,
                    a(2, (t) => l("div", { key: t, class: "common-btn" })),
                    64
                  )),
                  n[21] ||
                    (n[21] = l(
                      "div",
                      { class: "l-fn-btm common-btn" },
                      null,
                      -1
                    )),
                  (s(),
                  e(
                    i,
                    null,
                    a(2, (t) => l("div", { key: t, class: "common-btn" })),
                    64
                  )),
                  n[22] ||
                    (n[22] = l(
                      "div",
                      { class: "right-btn common-btn" },
                      null,
                      -1
                    )),
                ]),
                l("div", cn, [
                  l("div", bn, [
                    (s(),
                    e(
                      i,
                      null,
                      a(13, (t) => l("div", { key: t, class: "common-btn" })),
                      64
                    )),
                    n[23] ||
                      (n[23] = l(
                        "div",
                        { class: "del-btn common-btn" },
                        null,
                        -1
                      )),
                    n[24] ||
                      (n[24] = l(
                        "div",
                        { class: "right-btn common-btn" },
                        null,
                        -1
                      )),
                  ]),
                  l("div", fn, [
                    n[25] ||
                      (n[25] = l(
                        "div",
                        { class: "tab-btn common-btn" },
                        null,
                        -1
                      )),
                    (s(),
                    e(
                      i,
                      null,
                      a(12, (t) => l("div", { key: t, class: "common-btn" })),
                      64
                    )),
                    n[26] ||
                      (n[26] = l(
                        "div",
                        { class: "slash-btn common-btn" },
                        null,
                        -1
                      )),
                    n[27] ||
                      (n[27] = l(
                        "div",
                        { class: "right-btn common-btn" },
                        null,
                        -1
                      )),
                  ]),
                  l("div", pn, [
                    n[28] ||
                      (n[28] = l(
                        "div",
                        { class: "caps-btn common-btn" },
                        null,
                        -1
                      )),
                    (s(),
                    e(
                      i,
                      null,
                      a(11, (t) => l("div", { key: t, class: "common-btn" })),
                      64
                    )),
                    n[29] ||
                      (n[29] = l(
                        "div",
                        { class: "enter-btn common-btn" },
                        null,
                        -1
                      )),
                    n[30] ||
                      (n[30] = l(
                        "div",
                        { class: "right-btn common-btn" },
                        null,
                        -1
                      )),
                  ]),
                  l("div", An, [
                    n[31] ||
                      (n[31] = l(
                        "div",
                        { class: "l-shift-btn common-btn" },
                        null,
                        -1
                      )),
                    (s(),
                    e(
                      i,
                      null,
                      a(10, (t) => l("div", { key: t, class: "common-btn" })),
                      64
                    )),
                    n[32] ||
                      (n[32] = l(
                        "div",
                        { class: "r-shift-btn common-btn" },
                        null,
                        -1
                      )),
                    n[33] ||
                      (n[33] = l("div", { class: "common-btn" }, null, -1)),
                    n[34] ||
                      (n[34] = l(
                        "div",
                        { class: "right-btn common-btn" },
                        null,
                        -1
                      )),
                  ]),
                  l("div", gn, [
                    n[35] ||
                      (n[35] = l(
                        "div",
                        { class: "l-ctrl-btn common-btn" },
                        null,
                        -1
                      )),
                    n[36] ||
                      (n[36] = l(
                        "div",
                        { class: "l-win-btn common-btn" },
                        null,
                        -1
                      )),
                    n[37] ||
                      (n[37] = l(
                        "div",
                        { class: "tab-btn common-btn" },
                        null,
                        -1
                      )),
                    n[38] ||
                      (n[38] = l(
                        "div",
                        { class: "space-btn common-btn" },
                        null,
                        -1
                      )),
                    (s(),
                    e(
                      i,
                      null,
                      a(2, (t) => l("div", { key: t, class: "common-btn" })),
                      64
                    )),
                    n[39] ||
                      (n[39] = l(
                        "div",
                        { class: "l-fn-btm common-btn" },
                        null,
                        -1
                      )),
                    (s(),
                    e(
                      i,
                      null,
                      a(2, (t) => l("div", { key: t, class: "common-btn" })),
                      64
                    )),
                    n[40] ||
                      (n[40] = l(
                        "div",
                        { class: "right-btn common-btn" },
                        null,
                        -1
                      )),
                  ]),
                ]),
              ]),
              l("div", yn, w(d(c)("empty")), 1),
            ]),
          ],
          64
        )
      );
    },
  }),
  kn = z(wn, [["__scopeId", "data-v-487a35d4"]]),
  xn = ["onClick"],
  Tn = { class: "relative product-name" },
  Cn = ["src"],
  In = { class: "item-center wireless-status absolute" },
  Bn = { class: "pointer-group item-center" },
  Dn = R({
    __name: "index",
    setup(G) {
      const { t: c } = Z.useI18n(),
        b = M(),
        n = j("DeviceGroupRef"),
        t = L(0),
        y = L(0),
        {
          allArray: m,
          onListener: H,
          offListener: P,
          checkDevice: T,
        } = h({
          fn: async () => {
            await ln(), (y.value = 0), U();
          },
        });
      function W(u) {
        const r = b.imgList[u] || 0;
        return b.setProductColor(u, r), r;
      }
      function X(u) {
        (b.deviceInfo = u),
          (b.globalDevice = m.value),
          _.push({ path: `/${u.deviceType === 1 ? "keyboard" : "mouse"}` });
      }
      function F(u) {
        if (!n.value || u.deltaY === 0) return;
        u.preventDefault();
        let r = t.value;
        if (
          ((r += u.deltaY > 0 ? 1 : u.deltaY < 0 && r > 0 ? -1 : 0),
          r === t.value || !nn(m.value[r]))
        )
          return;
        const f = (o) => (o.deviceType === 1 ? 295.5 : 184.5),
          p = f(m.value[t.value]),
          A = f(m.value[r]);
        r > t.value ? (y.value -= p + A) : (y.value += p + A), (t.value = r);
      }
      function U() {
        var v;
        (t.value = 0),
          !(!n.value || !((v = m.value) != null && v.length)) &&
            (m.value[0].deviceType === 1
              ? (n.value.style.paddingLeft = "calc(50vw - 295.5px)")
              : (n.value.style.paddingLeft = "calc(50vw - 184.5px)"));
      }
      return (
        q(async () => {
          "hid" in navigator ||
            (await $.confirm(
              `${c("reSet.message18")}`,
              `${c("reSet.title10")}`,
              { confirmButtonText: c("reSet.confirmText"), showCancel: !1 }
            )),
            H();
        }),
        E(() => {
          (b.logicReady = !1), P();
        }),
        (u, v) => {
          var r, f, p, A;
          return (
            s(),
            e(
              "div",
              {
                class: V([
                  "check-device-container w-full flex",
                  { "electron-height": d(N)() },
                ]),
              },
              [
                g(tn),
                l(
                  "div",
                  {
                    class: "check-device-content all-center w-full",
                    onWheel: F,
                  },
                  [
                    l(
                      "div",
                      {
                        ref_key: "DeviceGroupRef",
                        ref: n,
                        class: "device-group item-center",
                        style: k({ transform: `translateX(${y.value}px)` }),
                      },
                      [
                        I(
                          g(
                            O,
                            {
                              name: "fade",
                              tag: "div",
                              class: "item-center",
                              style: { gap: "44px" },
                            },
                            {
                              default: J(() => [
                                (s(!0),
                                e(
                                  i,
                                  null,
                                  a(d(m), (o) => {
                                    var C;
                                    return (
                                      s(),
                                      e(
                                        "div",
                                        {
                                          key: o.hidProperty,
                                          style: k({
                                            width:
                                              o.deviceType === 1
                                                ? "551px"
                                                : "329px",
                                          }),
                                          class:
                                            "check-device-parent relative item-center",
                                          onClick: (Sn) => X(o),
                                        },
                                        [
                                          v[1] ||
                                            (v[1] = l(
                                              "div",
                                              {
                                                style: { cursor: "pointer" },
                                                class:
                                                  "check-device-item h-full w-full absolute tf-0",
                                              },
                                              null,
                                              -1
                                            )),
                                          l(
                                            "div",
                                            Tn,
                                            w(o.customName || o.pName),
                                            1
                                          ),
                                          l(
                                            "img",
                                            {
                                              src:
                                                (C = o.img) == null
                                                  ? void 0
                                                  : C[W(o.pName)],
                                              style: k({
                                                maxWidth:
                                                  o.deviceType === 1
                                                    ? "385px"
                                                    : "321px",
                                              }),
                                              class: "relative",
                                              alt: "",
                                              ondragstart: "return false",
                                            },
                                            null,
                                            12,
                                            Cn
                                          ),
                                          l("div", In, [
                                            D(
                                              w(
                                                o.wireless === 1
                                                  ? d(c)("deviceType.wireless")
                                                  : d(c)("deviceType.wire")
                                              ) + " ",
                                              1
                                            ),
                                            g(
                                              x,
                                              {
                                                name:
                                                  o.wireless === 1
                                                    ? "wireless"
                                                    : "wired",
                                              },
                                              null,
                                              8,
                                              ["name"]
                                            ),
                                          ]),
                                        ],
                                        12,
                                        xn
                                      )
                                    );
                                  }),
                                  128
                                )),
                              ]),
                              _: 1,
                            },
                            512
                          ),
                          [[B, (r = d(m)) == null ? void 0 : r.length]]
                        ),
                      ],
                      4
                    ),
                    I(
                      l(
                        "div",
                        Bn,
                        [
                          (s(!0),
                          e(
                            i,
                            null,
                            a(
                              (f = d(m)) == null ? void 0 : f.length,
                              (o) => (
                                s(),
                                e(
                                  "div",
                                  {
                                    key: o,
                                    class: V([
                                      "pointer-outer",
                                      { "active-point": t.value === o - 1 },
                                    ]),
                                  },
                                  null,
                                  2
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        512
                      ),
                      [[B, (p = d(m)) == null ? void 0 : p.length]]
                    ),
                    (A = d(m)) != null && A.length
                      ? S("", !0)
                      : (s(), K(kn, { key: 0 })),
                    d(N)()
                      ? S("", !0)
                      : (s(),
                        e(
                          "div",
                          {
                            key: 1,
                            class: "check-device-btn all-center",
                            onClick:
                              v[0] || (v[0] = (...o) => d(T) && d(T)(...o)),
                          },
                          [
                            g(x, { name: "addMacro" }),
                            D(" " + w(d(c)("checkDevice")), 1),
                          ]
                        )),
                  ],
                  32
                ),
              ],
              2
            )
          );
        }
      );
    },
  }),
  Qn = z(Dn, [["__scopeId", "data-v-5f7baec1"]]);
export { Qn as default };
