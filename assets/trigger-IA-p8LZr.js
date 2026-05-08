var b = Object.defineProperty;
var x = (v, e, t) =>
  e in v
    ? b(v, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (v[e] = t);
var h = (v, e, t) => x(v, typeof e != "symbol" ? e + "" : e, t);
import { X as M, a4 as u, aa as w, D as d, a8 as o } from "./index-w58kBX-A.js";
import "./three-core-Cz6MriGW.js";
class N {
  constructor(e, t) {
    h(this, "store");
    h(this, "timer");
    h(this, "setTriggerCondition");
    h(this, "ServiceDevice");
    h(this, "Trigger_Data");
    h(this, "defaultPageData");
    h(
      this,
      "activeData",
      M({
        loadTrigger: !1,
        togetherMode: !1,
        calibrateStatus: !1,
        activeKey: [],
        chooseLength: 0,
        singleTravel: 0.3,
        dp: 0.3,
        dr: 0.3,
        rtPress: 0.3,
        rtRelease: 0.3,
        triggerMode: 0,
        testPercentage: 0,
        testData: 0,
        travelTest: !1,
        axisValue: "",
        calibrationStatus: !1,
      })
    );
    (this.store = e),
      (this.ServiceDevice = t),
      (this.timer = null),
      (this.defaultPageData = u(this.activeData)),
      (this.Trigger_Data = {
        travelMin: 0.1,
        travelMax: 3.4,
        travelStep: 0.001,
        travelFixed: 3,
        dieMin: 0,
        dieMax: 1,
        dieStep: 0.01,
        dieFixed: 2,
        rtMin: 0.005,
        rtMax: 3.4,
        rtStep: 0.001,
        rtFixed: 3,
        defaultTravel: 2,
        defaultDie: 0.2,
        axisList: [],
      }),
      (this.setTriggerCondition = w(async (a, i, s) => {
        var r;
        if (
          !(
            !((r = this.activeData.activeKey) != null && r.length) ||
            !(a != null && a.length)
          )
        ) {
          this.activeData.loadTrigger = !0;
          for (let c of a)
            await this.setTriggerInfo(this.activeData.activeKey, c);
          i != null && i.value && i.value.getPosKey(),
            (this.activeData.loadTrigger = !1),
            s && (this.activeData.activeKey.length = 0);
        }
      }));
  }
  async sdkReport(e, t) {
    switch (t) {
      case "travelTest":
        (this.activeData.travelTest = e), await this.changeTravelTest(e);
        break;
    }
  }
  activeSideItem(e, t) {
    var a;
    switch (e) {
      case 0:
        this.selectAllKey();
        break;
      case 1:
        this.reserveIt();
        break;
      case 2:
        this.selectWASD();
        break;
      case 3:
        this.activeData.activeKey.length = 0;
        break;
      case 4:
        ((a = this.activeData.activeKey) == null ? void 0 : a.length) > 0 &&
          this.resetConfig(t);
    }
  }
  selectAllKey() {
    (this.activeData.activeKey.length = 0),
      this.store.deviceLayout.forEach((e) => {
        this.activeData.activeKey.push(e.keyValue);
      });
  }
  reserveIt() {
    let e = [];
    this.store.deviceLayout.forEach((t) => {
      e.push(t.keyValue);
    }),
      (this.activeData.activeKey = e.filter(
        (t) => !this.activeData.activeKey.includes(t)
      ));
  }
  selectWASD() {
    this.activeData.activeKey.length = 0;
    let e = ["KeyW", "KeyA", "KeyS", "KeyD"];
    this.store.deviceLayout.forEach((t) => {
      e.includes(t.browserCode) && this.activeData.activeKey.push(t.keyValue);
    });
  }
  async resetConfig(e) {
    await d
      .confirm(
        `${o.global.t("reSet.message1")}`,
        `${o.global.t("reSet.title1")}`,
        {
          confirmButtonText: `${o.global.t("reSet.confirmText")}`,
          cancelButtonText: `${o.global.t("reSet.cancelText")}`,
        }
      )
      .then(async () => {
        (this.activeData.singleTravel = this.Trigger_Data.defaultTravel),
          (this.activeData.dr = this.Trigger_Data.defaultDie),
          (this.activeData.dp = this.Trigger_Data.defaultDie),
          (this.activeData.triggerMode = 0),
          await this.setTriggerCondition(
            ["singleTravel", "dr", "dp", "triggerMode"],
            e,
            "clear"
          );
      })
      .catch(() => {});
  }
  setRtValue(e, t) {
    if (!this.activeData.togetherMode) {
      this.setTriggerCondition([e], t);
      return;
    }
    e === "rtRelease"
      ? (this.activeData.rtPress = this.activeData.rtRelease)
      : e === "rtPress" &&
        (this.activeData.rtRelease = this.activeData.rtPress),
      this.setTriggerCondition(["rtPress", "rtRelease"], t);
  }
  async calibrateDevice(e, t) {
    e ? (this.activeData.chooseLength = 0) : this.resetChooseLength(),
      await this.endTravelTest(),
      t.value &&
        (t.value.openDia(),
        e ? await this.startCalibration() : await this.endCalibration());
  }
  async changeTravelTest(e) {
    e ? await this.startTravelTest() : await this.endTravelTest();
  }
  async useAxis(e) {
    var t;
    (t = this.activeData.activeKey) != null &&
      t.length &&
      (await d
        .confirm(
          `${o.global.t("reSet.message2")}`,
          `${o.global.t("reSet.title2")}`,
          {
            confirmButtonText: `${o.global.t("reSet.confirmText")}`,
            cancelButtonText: `${o.global.t("reSet.cancelText")}`,
          }
        )
        .then(async () => {
          (this.activeData.loadTrigger = !0),
            await this.setAxisInfo(),
            (this.activeData.activeKey.length = 0),
            e.value && e.value.getPosKey(),
            (this.activeData.loadTrigger = !1);
        })
        .catch(() => {}));
  }
  updateKeyChoose(e, t) {
    this.activeData.calibrationStatus ||
      ((this.activeData.singleTravel = Number(
        t == null ? void 0 : t.singleTravel
      )),
      (this.activeData.dr = Number(t == null ? void 0 : t.dr)),
      (this.activeData.dp = Number(t == null ? void 0 : t.dp)),
      (this.activeData.rtPress = Number(t == null ? void 0 : t.rtPress)),
      (this.activeData.rtRelease = Number(t == null ? void 0 : t.rtRelease)),
      (this.activeData.triggerMode = Number(
        t == null ? void 0 : t.triggerMode
      )),
      (this.activeData.axisValue = Number(t == null ? void 0 : t.axisId)),
      (this.Trigger_Data.travelMax = Number(t == null ? void 0 : t.maxTravel)),
      (this.Trigger_Data.rtMax = Number(t == null ? void 0 : t.maxTravel)));
  }
  resetChooseLength() {
    this.activeData.chooseLength = this.store.deviceLayout.length;
  }
  async getAllTriggerInfo() {
    for (let e of this.store.deviceLayout) await this.batchGetValue(e);
  }
  async getAxisInfo() {
    for (let e of this.store.deviceLayout) await this.batchGetAxis(e);
  }
  resetTime() {
    this.timer &&
      (clearInterval(this.timer),
      clearTimeout(this.timer),
      (this.timer = null));
  }
  async onMountedFn(e) {
    var t, a, i;
    (this.Trigger_Data.axisList =
      (a = (t = this.store.deviceInstance) == null ? void 0 : t.Info_Class) ==
      null
        ? void 0
        : a.axisMap),
      (this.activeData.loadTrigger = !0);
    try {
      await this.getAllTriggerInfo(),
        this.resetChooseLength(),
        await this.getAxisInfo(),
        (i = this.Trigger_Data.axisList) != null &&
          i.length &&
          ((this.activeData.axisValue = this.Trigger_Data.axisList[0].id),
          (this.Trigger_Data.travelMax =
            this.Trigger_Data.axisList[0].maxTravel),
          (this.Trigger_Data.rtMax = this.Trigger_Data.axisList[0].maxTravel)),
        e.value && e.value.getPosKey();
    } catch {}
    this.activeData.loadTrigger = !1;
  }
  async batchGetValue(e) {
    var l, g, n, D;
    const [
      { touchMode: t },
      a,
      { pressTravel: i, releaseTravel: s },
      { pressDead: r, releaseDead: c },
    ] = await Promise.all([
      (l = this.ServiceDevice) == null
        ? void 0
        : l.getPerformanceMode(Number(e.keyValue)),
      (g = this.ServiceDevice) == null
        ? void 0
        : g.getSingleTravel(Number(e.keyValue), 3),
      (n = this.ServiceDevice) == null
        ? void 0
        : n.getRtTravel(Number(e.keyValue)),
      (D = this.ServiceDevice) == null ? void 0 : D.getDpDr(Number(e.keyValue)),
    ]);
    (e.triggerMode = t === "rt" ? 1 : 0),
      (e.singleTravel = a),
      (e.rtPress = i),
      (e.rtRelease = s),
      (e.dp = r),
      (e.dr = c);
  }
  async setTriggerInfo(e, t) {
    for (let a of this.store.deviceLayout)
      if (e.indexOf(Number(a.keyValue)) !== -1)
        switch (t) {
          case "singleTravel":
            await this.setSingleTravel(a);
            break;
          case "dp":
            await this.setDpData(a);
            break;
          case "dr":
            await this.setDrData(a);
            break;
          case "triggerMode":
            await this.setRTMode(a);
            break;
          case "rtPress":
            await this.setRTPress(a), (this.activeData.triggerMode = 1);
            break;
          case "rtRelease":
            await this.setRTRelease(a), (this.activeData.triggerMode = 1);
            break;
        }
  }
  async setSingleTravel(e) {
    var t;
    e.singleTravel = await ((t = this.ServiceDevice) == null
      ? void 0
      : t.setSingleTravel(Number(e.keyValue), this.activeData.singleTravel, 3));
  }
  async setDpData(e) {
    var t;
    e.dp = await ((t = this.ServiceDevice) == null
      ? void 0
      : t.setDp(Number(e.keyValue), this.activeData.dp));
  }
  async setDrData(e) {
    var t;
    e.dr = await ((t = this.ServiceDevice) == null
      ? void 0
      : t.setDr(Number(e.keyValue), this.activeData.dr));
  }
  async setRTMode(e) {
    var t;
    if (this.activeData.triggerMode !== e.triggerMode) {
      const a = await ((t = this.ServiceDevice) == null
        ? void 0
        : t.setPerformanceMode(
            Number(e.keyValue),
            this.activeData.triggerMode === 1 ? "rt" : "single",
            Number(e.highMode)
          ));
      e.triggerMode = (a == null ? void 0 : a.touchMode) === "rt" ? 1 : 0;
    }
  }
  async setRTPress(e) {
    var a, i;
    if (e.triggerMode === 0) {
      const s = await ((a = this.ServiceDevice) == null
        ? void 0
        : a.setPerformanceMode(Number(e.keyValue), "rt", Number(e.highMode)));
      e.triggerMode = (s == null ? void 0 : s.touchMode) === "rt" ? 1 : 0;
    }
    const t = await ((i = this.ServiceDevice) == null
      ? void 0
      : i.setRtPressTravel(Number(e.keyValue), this.activeData.rtPress));
    e.rtPress = t == null ? void 0 : t.pressTravel;
  }
  async setRTRelease(e) {
    var a, i;
    if (e.triggerMode === 0) {
      const s = await ((a = this.ServiceDevice) == null
        ? void 0
        : a.setPerformanceMode(Number(e.keyValue), "rt", Number(e.highMode)));
      e.triggerMode = (s == null ? void 0 : s.touchMode) === "rt" ? 1 : 0;
    }
    const t = await ((i = this.ServiceDevice) == null
      ? void 0
      : i.setRtReleaseTravel(Number(e.keyValue), this.activeData.rtRelease));
    e.rtRelease = t == null ? void 0 : t.releaseTravel;
  }
  async startCalibration() {
    var e;
    this.resetTime(),
      await ((e = this.ServiceDevice) == null ? void 0 : e.calibrationStart()),
      (this.timer = setInterval(async () => {
        try {
          await this.calibrationCallback();
        } catch {
          await this.endCalibration();
        }
      }, 60));
  }
  async calibrationCallback() {
    var t, a;
    const e = await ((t = this.ServiceDevice) == null
      ? void 0
      : t.getRm6X21Calibration());
    if (
      (console.log(e),
      (a = e == null ? void 0 : e.calibrations) != null && a.length)
    ) {
      let i = [],
        s = [];
      e == null ||
        e.calibrations.forEach((r, c) => {
          c &&
            r.map((l, g) => {
              if (l)
                return (
                  i.push(e == null ? void 0 : e.travels[c][g]), s.push(l), l
                );
            });
        }),
        i.forEach((r, c) => {
          let l = this.store.deviceLayout[c];
          if (l) {
            let g =
              (l.maxTravel || this.Trigger_Data.travelMax) -
                Number(l.dp) -
                Number(l.dr) -
                this.Trigger_Data.travelMin || 0;
            const n =
                ((r - this.Trigger_Data.travelMin) /
                  ((l.maxTravel || this.Trigger_Data.travelMax) -
                    this.Trigger_Data.travelMin)) *
                100,
              D = (T, f = 0, y = 100) => Math.min(y, Math.max(f, T));
            (this.store.deviceLayout[c].keyADC = Number(
              (s[c] * 1e3).toFixed(0)
            )),
              (this.store.deviceLayout[c].calibratePercentage = D(n)),
              r >= g && (this.store.deviceLayout[c].calibrateSuccess = !0);
          }
        });
    }
  }
  async endCalibration() {
    var e;
    (this.activeData.calibrationStatus = !1),
      this.resetChooseLength(),
      this.resetTime(),
      await ((e = this.ServiceDevice) == null ? void 0 : e.calibrationEnd()),
      this.store.deviceLayout.forEach((t) => {
        (t.calibratePercentage = 0), (t.calibrateSuccess = !1);
      });
  }
  async startTravelTest() {
    this.resetTime(),
      (this.timer = setInterval(async () => {
        var e;
        try {
          let t = 0;
          const a = await ((e = this.ServiceDevice) == null
            ? void 0
            : e.getRm6X21Travel());
          if (
            (a &&
              a.travels &&
              a.travels.forEach((i) => {
                i.forEach((s) => {
                  s > t && (t = s);
                });
              }),
            (this.activeData.testData = t || this.Trigger_Data.travelMin),
            t)
          ) {
            if (this.activeData.travelTest) {
              const i = this.Trigger_Data.travelMax,
                s = this.Trigger_Data.travelMin;
              let r = ((t - s) / (i - s)) * 100;
              this.activeData.testPercentage = r < 0 ? 0 : r > 100 ? 100 : r;
            }
          } else this.activeData.testPercentage = 0;
        } catch {
          this.resetTime(),
            (this.activeData.travelTest = !1),
            (this.activeData.testPercentage = 0);
        }
      }, 10));
  }
  async endTravelTest() {
    this.resetTime(),
      (this.activeData.travelTest = !1),
      (this.activeData.testPercentage = 0);
  }
  async setAxisInfo() {
    var e;
    for (const t of this.store.deviceLayout) {
      const a = t.keyValue;
      this.activeData.activeKey.includes(a) &&
        this.activeData.axisValue !== t.axisId &&
        (await ((e = this.ServiceDevice) == null
          ? void 0
          : e.setAxis(Number(a), Number(this.activeData.axisValue))),
        await this.batchGetAxis(t));
    }
  }
  async batchGetAxis(e) {
    var a;
    let t = await ((a = this.ServiceDevice) == null
      ? void 0
      : a.getAxis(Number(e.keyValue)));
    for (let i of this.Trigger_Data.axisList)
      if ((i == null ? void 0 : i.id) === (t == null ? void 0 : t.axis)) {
        (e.axisId = i == null ? void 0 : i.id),
          (e.axisColor = i == null ? void 0 : i.iconColor),
          (e.maxTravel = i.maxTravel);
        break;
      }
  }
  async useMasterConfig(e) {
    const t = new Map();
    e &&
      e.config.forEach((r) => {
        t.set(r.code, r);
      });
    const a = ["singleTravel", "dp", "dr", "rtPress", "rtRelease"],
      i = [],
      s = [];
    for (let r of this.store.deviceLayout)
      t.get(r.browserCode) ? i.push(r) : s.push(r);
    if (i != null && i.length) {
      this.activeData.triggerMode = 1;
      for (let r of i)
        for (let c of a)
          (this.activeData[c] = t.get(r.browserCode)[c]),
            await this.setTriggerInfo([Number(r.keyValue)], c);
    }
    if (s != null && s.length) {
      const r = [];
      (this.activeData.triggerMode = 0),
        (this.activeData.singleTravel = this.Trigger_Data.defaultTravel),
        (this.activeData.dp = this.Trigger_Data.defaultDie),
        (this.activeData.dr = this.Trigger_Data.defaultDie);
      for (let c of s) r.push(Number(c.keyValue));
      for (let c of ["singleTravel", "dp", "dr", "triggerMode"])
        await this.setTriggerInfo(r, c);
    }
  }
  resetClass() {
    this.resetTime(), Object.assign(this.activeData, u(this.defaultPageData));
  }
}
export { N as default };
