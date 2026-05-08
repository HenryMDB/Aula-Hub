var u = Object.defineProperty;
var _ = (e, t, a) =>
  t in e
    ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (e[t] = a);
var s = (e, t, a) => _(e, typeof t != "symbol" ? t + "" : t, a);
import { X as S, a4 as l, D as g, a8 as r } from "./index-w58kBX-A.js";
import "./three-core-Cz6MriGW.js";
class I {
  constructor(t, a) {
    s(this, "store");
    s(this, "staticData");
    s(this, "ServiceDevice");
    s(this, "defaultPageData");
    s(
      this,
      "activeData",
      S({ loadPrefSet: !1, isMacMode: !1, roi: 0, roiOptions: [] })
    );
    (this.store = t),
      (this.ServiceDevice = a),
      (this.defaultPageData = l(this.activeData)),
      (this.staticData = {
        roiOptions: [
          { value: 0, label: "8KHz" },
          { value: 1, label: "4KHz" },
          { value: 2, label: "2KHz" },
          { value: 3, label: "1KHz" },
          { value: 4, label: "500Hz" },
          { value: 5, label: "250Hz" },
          { value: 6, label: "125Hz" },
        ],
      });
  }
  async getPerfConfig(t) {
    var a, c, o;
    t ||
      ((this.activeData.roiOptions = l(this.staticData.roiOptions)),
      (this.activeData.roi = await ((a = this.store.deviceInstance) == null
        ? void 0
        : a.Info_Class.getApi("ORDER_TYPE_ROES"))),
      (this.activeData.isMacMode =
        ((c = this.store.deviceInfo) == null ? void 0 : c.FnMode) === "Mac"),
      (o = this.store.deviceInstance) == null ||
        o.Info_Class.activeReportMode((i) => {
          this.activeData.isMacMode =
            (i == null ? void 0 : i.currentSystem) === "mac";
        }));
  }
  async onMountedFn() {
    this.activeData.loadPrefSet = !0;
    try {
      await this.getPerfConfig();
    } catch {}
    this.activeData.loadPrefSet = !1;
  }
  async setPerfConfig(t, a) {
    var c, o, i, v, f, D, h;
    switch (a) {
      case "roi":
        const d = l(this.activeData.roi);
        this.activeData.roi = "";
        try {
          await g.confirm(
            `${r.global.t("reSet.message11")}`,
            `${r.global.t("reSet.title7")}`,
            {
              confirmButtonText: r.global.t("reSet.confirmText"),
              cancelButtonText: r.global.t("reSet.cancelText"),
            }
          ),
            (this.activeData.loadPrefSet = !0),
            await ((c = this.ServiceDevice) == null
              ? void 0
              : c.setRateOfReturn(Number(t))),
            (this.activeData.loadPrefSet = !1);
        } catch {
          this.activeData.roi = d;
        }
        break;
      case "isMacMode":
        (this.activeData.loadPrefSet = !0),
          await ((i =
            (o = this.store.deviceInstance) == null ? void 0 : o.Info_Class) ==
          null
            ? void 0
            : i.getApi(
                t ? "ORDER_TYPE_SET_MAC_MODEL" : "ORDER_TYPE_SET_WIN_MODEL"
              ));
        const n = await ((f =
          (v = this.store.deviceInstance) == null ? void 0 : v.Info_Class) ==
        null
          ? void 0
          : f.getApi("ORDER_TYPE_QUERY_WIN_MODEL"));
        (this.store.deviceInfo.FnMode =
          (n == null ? void 0 : n.currentSystem) === "win" ? "Win" : "Mac"),
          await ((h =
            (D = this.store.deviceInstance) == null ? void 0 : D.Info_Class) ==
          null
            ? void 0
            : h.initDeviceLayout()),
          (this.activeData.loadPrefSet = !1);
    }
  }
  resetClass() {
    Object.assign(this.activeData, l(this.defaultPageData));
  }
}
export { I as default };
