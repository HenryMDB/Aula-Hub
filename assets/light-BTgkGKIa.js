var m = Object.defineProperty;
var b = (n, e, t) =>
  e in n
    ? m(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var l = (n, e, t) => b(n, typeof e != "symbol" ? e + "" : e, t);
import {
  X as k,
  a8 as a,
  a4 as h,
  aa as u,
  aM as p,
  aN as r,
  aO as d,
  ai as f,
  L as D,
} from "./index-w58kBX-A.js";
import "./three-core-Cz6MriGW.js";
class I {
  constructor(e, t) {
    l(this, "store");
    l(this, "lightExplicit");
    l(this, "ServiceDevice");
    l(this, "onEffect");
    l(this, "onLogo");
    l(this, "debouncedFetch");
    l(this, "debounceSetInfo");
    l(this, "defaultPageData");
    l(
      this,
      "activeData",
      k({
        activeKey: [],
        activePage: 0,
        mode: 0,
        colors: [],
        direction: !1,
        colorIndex: 0,
        lightly: 1,
        sleepDelay: 0,
        speed: 1,
        activeColor: "rgb(144, 238, 144)",
        deviceShowColor: !1,
        chooseLength: 0,
        randomColor: !1,
        lightStatus: !1,
        activeModeList: [],
      })
    );
    (this.store = e),
      (this.ServiceDevice = t),
      (this.onEffect = 0),
      (this.onLogo = 0),
      (this.lightExplicit = {
        maxLightly: 5,
        maxSpeed: 5,
        lightSupportPage: [
          { value: 0, label: "kLight.type1" },
          { value: 1, label: "kLight.type2" },
        ],
        effectMode: [
          { label: a.global.t("kLight.sparkLinkV1.mode1"), value: 22 },
          { label: a.global.t("kLight.sparkLinkV1.mode2"), value: 21 },
          { label: a.global.t("kLight.sparkLinkV1.mode3"), value: 1 },
          { label: a.global.t("kLight.sparkLinkV1.mode4"), value: 2 },
          { label: a.global.t("kLight.sparkLinkV1.mode5"), value: 3 },
          { label: a.global.t("kLight.sparkLinkV1.mode6"), value: 4 },
          { label: a.global.t("kLight.sparkLinkV1.mode7"), value: 5 },
          { label: a.global.t("kLight.sparkLinkV1.mode8"), value: 6 },
          { label: a.global.t("kLight.sparkLinkV1.mode9"), value: 7 },
          { label: a.global.t("kLight.sparkLinkV1.mode10"), value: 8 },
          { label: a.global.t("kLight.sparkLinkV1.mode11"), value: 9 },
          { label: a.global.t("kLight.sparkLinkV1.mode12"), value: 10 },
          { label: a.global.t("kLight.sparkLinkV1.mode13"), value: 11 },
          { label: a.global.t("kLight.sparkLinkV1.mode14"), value: 12 },
          { label: a.global.t("kLight.sparkLinkV1.mode15"), value: 13 },
          { label: a.global.t("kLight.sparkLinkV1.mode16"), value: 14 },
          { label: a.global.t("kLight.sparkLinkV1.mode17"), value: 15 },
          { label: a.global.t("kLight.sparkLinkV1.mode18"), value: 16 },
          { label: a.global.t("kLight.sparkLinkV1.mode19"), value: 17 },
          { label: a.global.t("kLight.sparkLinkV1.mode20"), value: 18 },
          { label: a.global.t("kLight.sparkLinkV1.mode21"), value: 19 },
          { label: a.global.t("kLight.sparkLinkV1.mode22"), value: 20 },
        ],
        logoMode: [
          { label: a.global.t("kLight.sparkLinkV1.fmode1"), value: 22 },
          { label: a.global.t("kLight.sparkLinkV1.fmode2"), value: 1 },
          { label: a.global.t("kLight.sparkLinkV1.fmode3"), value: 2 },
          { label: a.global.t("kLight.sparkLinkV1.fmode4"), value: 3 },
          { label: a.global.t("kLight.sparkLinkV1.fmode5"), value: 4 },
        ],
        sleepOptions: [
          { label: "Never", value: 0 },
          { label: "1min", value: 1 },
          { label: "2min", value: 2 },
          { label: "3min", value: 3 },
          { label: "5min", value: 5 },
          { label: "10min", value: 10 },
          { label: "15min", value: 15 },
          { label: "20min", value: 20 },
          { label: "25min", value: 25 },
          { label: "30min", value: 30 },
          { label: "45min", value: 45 },
          { label: "60min", value: 60 },
          { label: "120min", value: 120 },
        ],
      }),
      (this.defaultPageData = h(this.activeData)),
      (this.debouncedFetch = u(async (o) => {
        o === 0
          ? await this.getEffectInfo()
          : o === 1 && (await this.getLogoInfo());
      })),
      (this.debounceSetInfo = u(async () => {
        switch (this.activeData.activePage) {
          case 0:
            await this.setEffectInfo();
            break;
          case 1:
            await this.setLogoInfo();
            break;
        }
      }));
  }
  lightDisabled() {
    return {
      lightlyDisabled: !1,
      speedDisabled: [21, 22].includes(this.activeData.mode),
      colorDisabled:
        this.activeData.mode === 0 ||
        (this.activeData.activePage === 1 && this.activeData.mode !== 22) ||
        this.activeData.randomColor,
      colorClosed:
        [21, 8, 9, 0].includes(this.activeData.mode) ||
        (this.activeData.activePage === 1 && this.activeData.mode !== 22),
      lightClosed: this.activeData.mode === 0,
      directionDisabled: [21, 22].includes(this.activeData.mode),
    };
  }
  selectPage(e) {
    this.activeData.activePage !== e.value &&
      (e.value === 0 &&
        (this.activeData.activeModeList = h(this.lightExplicit.effectMode)),
      e.value === 1 &&
        (this.activeData.activeModeList = h(this.lightExplicit.logoMode)),
      (this.activeData.activePage = e.value),
      (this.activeData.deviceShowColor = !1),
      (this.activeData.chooseLength = 0),
      this.debouncedFetch(e.value));
  }
  selectMode(e) {
    this.activeData.mode !== e.value &&
      (this.activeData.activePage === 0 &&
        ![0, 21, 22].includes(e.value) &&
        ((this.activeData.randomColor = !0), (this.activeData.colorIndex = -1)),
      (this.activeData.mode = e.value),
      this.debounceSetInfo());
  }
  async sdkReport(e, t) {
    var o;
    switch (t) {
      case "sleepDelay":
        (this.activeData.sleepDelay = e), this.debounceSetInfo();
        break;
      case "direction":
        (this.activeData.direction = e), this.debounceSetInfo();
        break;
      case "colorful":
        (this.activeData.randomColor = e), await this.changeRandomColor(e);
        break;
      case "selectColorItem":
        this.activeData.colorIndex !== e &&
          ((this.activeData.colorIndex = e),
          e !== 7 &&
            (this.activeData.activeColor = r(
              (o = this.activeData.colors) == null ? void 0 : o[e]
            )),
          this.debounceSetInfo());
        break;
      case "musicRhythm":
        p("https://app.aulacn.com/commonAssets/Aula-Music-Setup1.exe");
        break;
    }
  }
  async changeActiveColor() {
    switch (this.activeData.activePage) {
      case 0:
        await this.setEffectColor(this.activeData.activeKey);
        break;
      case 1:
        this.activeData.mode === 22 &&
          ((this.activeData.colors[this.activeData.colorIndex] =
            d(this.activeData.activeColor) ?? ""),
          await this.setLogoInfo());
        break;
    }
  }
  async changeRandomColor(e) {
    var t;
    switch (
      ((this.activeData.activeColor = e
        ? "rgb(0, 0, 0)"
        : (t = this.activeData.colors) == null
        ? void 0
        : t[0]),
      (this.activeData.colorIndex = e ? -1 : 0),
      this.activeData.activePage)
    ) {
      case 0:
        await this.setEffectInfo();
        break;
      case 1:
        await this.setLogoInfo();
        break;
    }
  }
  async closeLight(e) {
    switch (((this.activeData.mode = e ? 1 : 0), this.activeData.activePage)) {
      case 0:
        await this.setEffectInfo();
        break;
      case 1:
        await this.setLogoInfo();
        break;
    }
  }
  async changeKeyCustomColor(e) {
    this.activeData.mode === 21 && (await this.setCustomLight([e.keyValue]));
  }
  async onMountedFn(e, t) {
    var o;
    (o = this.store.deviceInfo) != null &&
      o.pName.includes("WIN") &&
      (this.lightExplicit.lightSupportPage = [
        { value: 0, label: "kLight.type1" },
      ]),
      (this.activeData.activeModeList = h(this.lightExplicit.effectMode)),
      await this.getEffectInfo(),
      this.activeReportLogo(),
      this.activeReportEffect(),
      (t.value.color.rgb = f(this.activeData.activeColor)),
      e.value && e.value.getPosKey(),
      t.value &&
        ((t.value.color.rgb = f(this.activeData.activeColor)),
        t.value.on("input:end", async (i) => {
          (this.activeData.activeColor = `rgb(${i.rgb.r}, ${i.rgb.g}, ${i.rgb.b})`),
            await this.changeActiveColor();
        }));
  }
  async getEffectInfo() {
    var t, o, i;
    await ((o =
      (t = this.store.deviceInstance) == null ? void 0 : t.Info_Class) == null
      ? void 0
      : o.getApi("ORDER_TYPE_RGBNACK", [1]));
    const e = await ((i = this.ServiceDevice) == null
      ? void 0
      : i.getLighting());
    await this.changeEffectToPage(e, 0);
  }
  async changeEffectToPage(e, t) {
    (this.activeData.deviceShowColor = !1),
      (this.activeData.lightStatus = !0),
      (this.activeData.randomColor = !1),
      (this.activeData.mode = e.open ? e.mode : 0),
      (this.activeData.colors = e.colors),
      (this.activeData.sleepDelay = e.sleepDelay),
      (this.activeData.speed = e.speed + 1),
      (this.activeData.lightly = e.luminance + 1),
      (this.activeData.direction = e.direction),
      e.open
        ? e.type === "static"
          ? ((this.activeData.mode = 22),
            (this.activeData.colorIndex =
              e.staticColor >= 7 ? -1 : e.staticColor),
            (this.activeData.randomColor = this.activeData.colorIndex === -1),
            e.staticColor < 7 &&
              (this.activeData.activeColor = r(e.colors[e.staticColor])))
          : e.type === "custom"
          ? (await this.getCustomLight(),
            (this.activeData.deviceShowColor = !0),
            (this.activeData.mode = 21))
          : ((this.activeData.mode = e.mode),
            (this.activeData.colorIndex =
              e.dynamicColorId === 0 ? -1 : e.dynamicColorId - 1),
            (this.activeData.randomColor = this.activeData.colorIndex === -1),
            e.dynamicColorId > 0 &&
              (this.activeData.activeColor = r(e.colors[e.dynamicColorId])))
        : ((this.activeData.mode = 0), (this.activeData.lightStatus = !1));
  }
  async setEffectInfo() {
    var o, i;
    const e = h(this.activeData);
    let t = {
      direction: e.direction,
      luminance: e.lightly - 1,
      mode: e.mode,
      open: !0,
      sleepDelay: e.sleepDelay,
      speed: e.speed - 1,
      staticColor: e.colorIndex === -1 ? 7 : e.colorIndex,
      superResponse: !0,
      colors: e.colors,
      type: "dynamic",
      dynamicColorId: e.colorIndex === -1 ? 0 : e.colorIndex + 1,
    };
    e.mode
      ? e.mode === 22
        ? ((t.type = "static"), (t.speed = 0), (t.mode = 0))
        : e.mode === 21 && ((t.type = "custom"), (t.speed = 0))
      : ((t.mode = 0), (t.open = !1)),
      t.open
        ? await ((i = this.ServiceDevice) == null
            ? void 0
            : i.setLighting(t, "1.0.9"))
        : await ((o = this.ServiceDevice) == null
            ? void 0
            : o.closedLighting());
  }
  async setEffectColor(e) {
    this.activeData.mode === 22
      ? ((this.activeData.colors[this.activeData.colorIndex] =
          d(this.activeData.activeColor) ?? ""),
        await this.setEffectInfo())
      : this.activeData.mode === 21
      ? e != null && e.length && (await this.setCustomLight(e))
      : ((this.activeData.colors[this.activeData.colorIndex] =
          d(this.activeData.activeColor) ?? ""),
        await this.setEffectInfo());
  }
  async setCustomLight(e) {
    var o, i;
    let t = f(this.activeData.activeColor) ?? { r: 0, g: 0, b: 0 };
    for (let s of this.store.deviceLayout) {
      if (!s.keyValue || !e.includes(Number(s.keyValue))) continue;
      let g;
      s.customBg === `rgb(${t.r}, ${t.g}, ${t.b})`
        ? (g = { key: s.keyValue, r: 0, g: 0, b: 0 })
        : (g = {
            key: s.keyValue,
            r: Number(t.r),
            g: Number(t.g),
            b: Number(t.b),
          });
      const v = await ((o = this.ServiceDevice) == null
        ? void 0
        : o.setCustomLighting(g));
      v.R || v.G || v.B
        ? (s.customBg = `rgb(${v.R}, ${v.G}, ${v.B})`)
        : (s.customBg = "");
    }
    await ((i = this.ServiceDevice) == null ? void 0 : i.saveCustomLighting());
  }
  async getCustomLight() {
    var o;
    const e = new Map(),
      t = [];
    for (const i of this.store.deviceLayout) {
      if (!i.keyValue) continue;
      const s = await ((o = this.ServiceDevice) == null
        ? void 0
        : o
            .getCustomLighting(Number(i.keyValue))
            .then((c) => {
              const g = c.R || c.G || c.B ? `rgb(${c.R}, ${c.G}, ${c.B})` : "";
              e.set(i.keyValue, g);
            })
            .catch(() => {
              console.error(
                "lightSet",
                `${i == null ? void 0 : i.keyValue}按键自定义灯光失败`
              ),
                e.set(i.keyValue, "");
            }));
      t.push(s);
    }
    await Promise.all(t);
    for (const i of this.store.deviceLayout)
      i.keyValue && e.has(i.keyValue) && (i.customBg = e.get(i.keyValue));
  }
  async getLogoInfo() {
    var t;
    const e = await ((t = this.ServiceDevice) == null
      ? void 0
      : t.getLogoLighting());
    this.changeLogoToPage(e);
  }
  async setLogoInfo() {
    var o;
    const e = h(this.activeData);
    let t = {
      direction: e.direction,
      luminance: e.lightly - 1,
      mode: e.mode,
      open: !0,
      sleepDelay: e.sleepDelay,
      speed: e.speed - 1,
      staticColor: e.colorIndex,
      superResponse: !0,
      colors: e.colors,
      type: "dynamic",
    };
    e.mode
      ? e.mode === 22 && ((t.type = "static"), (t.speed = 0), (t.mode = 21))
      : ((t.mode = 0), (t.open = !1)),
      await ((o = this.ServiceDevice) == null ? void 0 : o.setLogoLighting(t));
  }
  changeLogoToPage(e) {
    (this.activeData.sleepDelay = e.sleepDelay),
      (this.activeData.colors = e.colors),
      (this.activeData.direction = e.direction),
      (this.activeData.lightly = e.luminance + 1),
      (this.activeData.speed = e.speed + 1),
      (this.activeData.randomColor = !1),
      (this.activeData.lightStatus = !0),
      e.open
        ? e.type === "dynamic"
          ? (this.activeData.mode = e.mode)
          : ((this.activeData.colorIndex =
              e.staticColor >= 7 ? -1 : e.staticColor),
            (this.activeData.randomColor = this.activeData.colorIndex === -1),
            e.staticColor < 7 &&
              (this.activeData.activeColor = r(e.colors[e.staticColor])),
            (this.activeData.mode = 22))
        : ((this.activeData.mode = 0), (this.activeData.lightStatus = !1));
  }
  activeReportEffect() {
    var e;
    this.onEffect === 0 &&
      ((e = this.ServiceDevice) == null ||
        e.on("getSpecialSingleRGB", async (t) => {
          (this.onEffect = 1),
            t &&
              this.activeData.activePage === 0 &&
              (await D(), await this.changeEffectToPage(t, 1));
        }));
  }
  activeReportLogo() {
    var e;
    this.onLogo === 0 &&
      ((e = this.ServiceDevice) == null ||
        e.on("getLogoRGB", async (t) => {
          (this.onEffect = 1),
            t &&
              this.activeData.activePage === 1 &&
              (await D(), this.changeLogoToPage(t));
        }));
  }
  resetClass() {
    var e, t;
    Object.assign(this.activeData, h(this.defaultPageData)),
      (this.onEffect = 0),
      (this.onLogo = 0),
      (e = this.ServiceDevice) == null || e.off("getLogoRGB"),
      (t = this.ServiceDevice) == null || t.off("getSpecialSingleRGB");
  }
}
export { I as default };
