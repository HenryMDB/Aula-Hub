var M = Object.defineProperty;
var A = (g, e, t) =>
  e in g
    ? M(g, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (g[e] = t);
var h = (g, e, t) => A(g, typeof e != "symbol" ? e + "" : e, t);
import {
  X as k,
  a8 as l,
  a4 as d,
  L as T,
  D as H,
  aP as N,
  aQ as P,
  J as v,
} from "./index-w58kBX-A.js";
import "./three-core-Cz6MriGW.js";
class V {
  constructor(e, t) {
    h(this, "store");
    h(this, "chooseLength");
    h(this, "highDefaultData");
    h(this, "highStatic");
    h(this, "defaultPageData");
    h(this, "ServiceDevice");
    h(
      this,
      "activeData",
      k({
        chooseLength: 0,
        pageData: [],
        advancedActions: [],
        activeKey: [],
        activePage: "parent",
        singleHighData: {},
        activeBrowserKey: -1,
        editOrAdd: 0,
      })
    );
    (this.store = e),
      (this.ServiceDevice = t),
      (this.chooseLength = {
        parent: 0,
        DKS: 1,
        MPT: 1,
        MT: 1,
        TGL: 1,
        END: 1,
        SOCD: 2,
      }),
      (this.highDefaultData = {
        DKS: {
          deviceKey: [""],
          browserCode: ["", "", "", ""],
          pressProcess: [1.4, 3.4, 3.4, 1.4],
          travelDistance: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
          activeTravel: [[], [], [], []],
        },
        MPT: {
          deviceKey: [""],
          browserCode: ["", "", ""],
          sliderValue: [1, 2, 3],
        },
        MT: { deviceKey: [""], browserCode: ["", ""], sliderValue: 200 },
        TGL: { deviceKey: [""], browserCode: [""], sliderValue: 200 },
        END: { deviceKey: [""], browserCode: [""] },
        SOCD: {
          deviceKey: ["", ""],
          browserCode: ["", ""],
          behaviorMode: 0,
          sliderValue: 0,
          bindMode: 0,
        },
        MACRO: {
          deviceKey: [""],
          macroId: "",
          behaviorMode: 0,
          clickCount: 1,
          clickInterval: 100,
        },
      }),
      (this.highStatic = {
        mptMax: 3.4,
        mptMin: 0.1,
        mptFixed: 3,
        mptStep: 0.001,
        mtMax: 1e3,
        mtStep: 1,
        mtMin: 1,
        mtKeyDown: ["highSet.text45", "highSet.text46"],
        tglMax: 1e3,
        tglMin: 1,
        tglStep: 1,
        socdMin: 0,
        socdMax: 50,
        socdStep: 1,
        dksPressMin: 0.1,
        dksPressMax: 3.4,
        dksPressStep: 0.001,
        dksPressFixed: 3,
        SOCDOptions: [
          { label: l.global.t("highSet.text34"), value: 0 },
          { label: l.global.t("highSet.text35"), value: 1 },
          { label: l.global.t("highSet.text36"), value: 2 },
          { label: l.global.t("highSet.text37"), value: 3 },
        ],
        SOCDBindMode: [
          { value: 0, label: l.global.t("highSet.text38") },
          { value: 1, label: l.global.t("highSet.text39") },
        ],
      }),
      (this.defaultPageData = d(this.activeData));
  }
  changeActivePage(e, t, i) {
    var a;
    (this.activeData.activeBrowserKey = -1),
      (this.activeData.activeKey.length = 0),
      Object.keys(this.activeData.singleHighData).forEach((s) => {
        delete this.activeData.singleHighData[s];
      }),
      this.setHighAddData(e.icon),
      (this.activeData.editOrAdd = t === -1 ? 0 : 1),
      t !== -1 &&
        Object.keys(e).forEach((s) => {
          s !== "icon" && (this.activeData.singleHighData[s] = e[s]);
        }),
      this.setChooseLength(e.icon),
      (a = e == null ? void 0 : e.deviceKey) != null &&
        a.length &&
        (this.activeData.activeKey = d(e.deviceKey)),
      (this.activeData.activePage = e.icon),
      T(() => {
        var s, c;
        i.value &&
          ((c = (s = i.value) == null ? void 0 : s.setOldHigh) == null ||
            c.call(s, d(this.activeData.singleHighData)));
      });
  }
  async sureSuccess(e) {
    await this.getAllHighList(),
      this.changeActivePage({ icon: "parent" }, -1, e);
  }
  handleKeyDown(e) {
    var t, i;
    e.preventDefault(),
      e.stopPropagation(),
      this.activeData.activeBrowserKey !== -1 &&
        ((this.activeData.singleHighData.browserCode[
          this.activeData.activeBrowserKey
        ] =
          (i =
            (t = this.store.deviceInstance) == null ? void 0 : t.Info_Class) ==
          null
            ? void 0
            : i.getKeyValueByBrowserCode(e.code)),
        (this.activeData.activeBrowserKey = -1)),
      window.removeEventListener("keydown", this.handleKeyDown);
  }
  activeKeyIsHigh(e, t) {
    for (let i = 0; i < this.activeData.advancedActions.length; i++)
      if (
        this.activeData.advancedActions[i].deviceKey.includes(e.keyValue) &&
        this.activeData.advancedActions[i].icon !== "MACRO"
      ) {
        this.changeActivePage(this.activeData.advancedActions[i], i, t);
        break;
      }
  }
  async deleteHigh(e) {
    await H.confirm(
      `${l.global.t("reSet.message10")}`,
      `${l.global.t("reSet.title5")}`,
      {
        confirmButtonText: l.global.t("reSet.confirmText"),
        cancelButtonText: l.global.t("reSet.cancelText"),
      }
    )
      .then(async () => {
        await this.deleteHighAction(e);
      })
      .catch(() => {});
  }
  clearActiveKey(e) {
    this.activeData.activeKey = this.activeData.activeKey.filter(
      (t) => t !== e
    );
  }
  changeDksPress(e, t) {
    var i;
    t.value &&
      [0, 3].includes(e) &&
      t.value.openDia(
        (i = this.activeData.singleHighData) == null
          ? void 0
          : i.pressProcess[e]
      );
  }
  setDksPress(e) {
    [0, 3].forEach((t) => {
      this.activeData.singleHighData.pressProcess[t] = e;
    });
  }
  specialSetKey(e, t) {
    const a = this.highDefaultData[t].deviceKey.length,
      s = Array.from(new Set(e));
    this.activeData.singleHighData.deviceKey = Array.from(
      { length: a },
      (c, r) => s[r] ?? ""
    );
  }
  async onMountedFn() {
    (this.activeData.pageData = ["DKS", "MPT", "MT", "SOCD", "TGL", "END"]),
      await this.getAllHighList();
  }
  setChooseLength(e) {
    this.activeData.chooseLength = this.chooseLength[e];
  }
  setHighAddData(e) {
    for (let t in d(this.highDefaultData[e])) {
      const i = t;
      this.activeData.singleHighData[i] = d(this.highDefaultData[e][i]);
    }
  }
  async getAllHighList() {
    var e;
    this.activeData.advancedActions = [];
    for (let t of this.store.deviceLayout) {
      const { advancedKeyMode: i } = await ((e = this.ServiceDevice) == null
        ? void 0
        : e.getPerformanceMode(Number(t.keyValue)));
      if (
        ((t.highMode = this.highDataToIcon(i)),
        t.highMode && t.highMode !== "MACRO")
      ) {
        const a = await this.getHighDetail(t);
        a && this.activeData.advancedActions.push({ ...a, icon: t.highMode });
      }
    }
  }
  async getHighDetail(e) {
    let t = null;
    switch (e.highMode) {
      case "DKS":
        t = await this.getDKSConfig(Number(e.keyValue));
        break;
      case "MPT":
        t = await this.getMPTConfig(Number(e.keyValue));
        break;
      case "MT":
        t = await this.getMTConfig(Number(e.keyValue));
        break;
      case "TGL":
        t = await this.getTGLConfig(Number(e.keyValue));
        break;
      case "END":
        t = await this.getENDConfig(Number(e.keyValue));
        break;
      case "SOCD":
        t = await this.getSOCDConfig(Number(e.keyValue));
        break;
    }
    return t;
  }
  async getDKSConfig(e) {
    var i, a, s;
    let t = null;
    try {
      const [c, r, o] = await Promise.all([
          (i = this.ServiceDevice) == null ? void 0 : i.getDksAll(e),
          (a = this.ServiceDevice) == null ? void 0 : a.getTrpsAll(e),
          (s = this.ServiceDevice) == null ? void 0 : s.getDksTravel(e),
        ]),
        n = Array.from({ length: 4 }, () => []),
        w = c ? [c.dks1, c.dks2, c.dks3, c.dks4] : Array(4).fill(""),
        S = r ? [r.trps1, r.trps2, r.trps3, r.trps4] : [],
        f = Number(o) || 1.4,
        b = Array.from({ length: 4 }, () => [0, 0, 0, 0]),
        D = N(S);
      D != null &&
        D.length &&
        D.forEach((K, u) => {
          K.forEach((C, y) => {
            if (C)
              if (y % 2 === 0) {
                const p = y / 2;
                n[u].push(p);
              } else this.handleSpecialDKS(y, u, n[u], b);
          });
        }),
        (t = {
          deviceKey: [e],
          browserCode: w,
          pressProcess: [f, 3.4, 3.4, f],
          travelDistance: b,
          activeTravel: n,
        });
    } catch (c) {
      console.error(c);
    }
    return t;
  }
  async getMPTConfig(e) {
    var i;
    let t = null;
    try {
      const a = await ((i = this.ServiceDevice) == null ? void 0 : i.getMpt(e));
      t = { deviceKey: [e], browserCode: a.dks, sliderValue: a.dbs };
    } catch (a) {
      console.error(a);
    }
    return t;
  }
  async getMTConfig(e) {
    var i, a;
    let t = null;
    try {
      const s = await ((i = this.ServiceDevice) == null
          ? void 0
          : i.getMtorTgl(e)),
        c = await ((a = this.ServiceDevice) == null ? void 0 : a.getDksAll(e));
      t = {
        deviceKey: [e],
        browserCode: c ? [c.dks1, c.dks2] : ["", ""],
        sliderValue: s,
      };
    } catch (s) {
      console.error(s);
    }
    return t;
  }
  async getTGLConfig(e) {
    var i;
    let t = null;
    try {
      const a = await ((i = this.ServiceDevice) == null ? void 0 : i.getTGL(e));
      t = { deviceKey: [e], browserCode: [a.dks], sliderValue: a.delay };
    } catch (a) {
      console.error(a);
    }
    return t;
  }
  async getENDConfig(e) {
    var i;
    let t = null;
    try {
      const a = await ((i = this.ServiceDevice) == null ? void 0 : i.getEND(e));
      t = { deviceKey: [e], browserCode: [a.dks] };
    } catch (a) {
      console.error(a);
    }
    return t;
  }
  async getSOCDConfig(e) {
    var i, a;
    let t = null;
    try {
      let s = "";
      this.store.deviceInfo && (s = this.store.deviceInfo.binVersion);
      const c = d(this.activeData);
      if ((i = c.advancedActions) != null && i.length) {
        for (let o of c.advancedActions)
          if (o.icon === "SOCD" && o.deviceKey.includes(e)) return null;
      }
      const r = await ((a = this.ServiceDevice) == null
        ? void 0
        : a.getSocd(e, s));
      t = {
        deviceKey: [r.pos1, r.pos2],
        browserCode: [r.key1 || "", r.key2 || ""],
        bindMode: r.type,
        behaviorMode: r.mode,
        sliderValue: r.delay,
      };
    } catch (s) {
      console.error(s);
    }
    return t;
  }
  handleSpecialDKS(e, t, i, a) {
    ({
      1: () => {
        a[t][0] = 128;
      },
      3: () => {
        i.includes(1) ? (a[t][1] = 128) : i.includes(0) && (a[t][0] = 292);
      },
      5: () => {
        i.includes(2)
          ? (a[t][2] = 128)
          : i.includes(1)
          ? (a[t][1] = 292)
          : i.includes(0) && (a[t][0] = 456);
      },
    }[e]());
  }
  highDataToIcon(e) {
    switch (e) {
      case 0:
        return "";
      case 1:
        return "DKS";
      case 2:
        return "MPT";
      case 3:
        return "MT";
      case 4:
        return "TGL";
      case 5:
        return "END";
      case 6:
        return "MACRO";
      case 8:
        return "SOCD";
      default:
        return "";
    }
  }
  async setDKSToDevice(e) {
    var i;
    let t = !1;
    try {
      let a = [];
      const s = this.activeData.singleHighData;
      s.browserCode.forEach((c, r) => {
        const o = s.travelDistance[r],
          n = s.activeTravel[r];
        a.push([
          n.includes(0),
          o[0] > 0,
          n.includes(1),
          o[1] > 0 || o[0] === 292,
          n.includes(2),
          o[2] > 0 || o[0] === 456 || o[1] === 292,
          n.includes(3),
        ]);
      }),
        this.activeData.editOrAdd && (await this.deleteHighAction(e)),
        await ((i = this.ServiceDevice) == null
          ? void 0
          : i.setDks({
              key: Number(s.deviceKey[0]),
              dks: s.browserCode.map((c) => (v(c) ? Number(c) : 0)),
              dbs: [s.pressProcess[0] * 1e3, 3.4 * 1e3],
              trps: P(a),
            })),
        (t = !0);
    } catch (a) {
      console.error(a);
    }
    return t;
  }
  async setMPTToDevice(e) {
    var i;
    let t = !1;
    try {
      this.activeData.editOrAdd && (await this.deleteHighAction(e));
      const a = this.activeData.singleHighData;
      await ((i = this.ServiceDevice) == null
        ? void 0
        : i.setMpt({
            key: a.deviceKey[0],
            dks: a.browserCode.map((s) => (v(s) ? Number(s) : 0)),
            dbs: a.sliderValue.map((s) => Number(s)),
          })),
        (t = !0);
    } catch (a) {
      console.error(a);
    }
    return t;
  }
  async setMTToDevice(e) {
    var i;
    let t = !1;
    try {
      this.activeData.editOrAdd && (await this.deleteHighAction(e));
      const a = this.activeData.singleHighData;
      await ((i = this.ServiceDevice) == null
        ? void 0
        : i.setMT({
            key: a.deviceKey[0],
            dks: a.browserCode.map((s) => (v(s) ? Number(s) : 0)),
            delay: Number(a.sliderValue) / 10,
          })),
        (t = !0);
    } catch (a) {
      console.error(a);
    }
    return t;
  }
  async setTGLToDevice(e) {
    var i;
    let t = !1;
    try {
      this.activeData.editOrAdd && (await this.deleteHighAction(e));
      const a = this.activeData.singleHighData;
      await ((i = this.ServiceDevice) == null
        ? void 0
        : i.setTGL({
            key: a.deviceKey[0],
            dks: a.browserCode.map((s) => (v(s) ? Number(s) : 0)),
            delay: Number(a.sliderValue),
          })),
        (t = !0);
    } catch (a) {
      console.error(a);
    }
    return t;
  }
  async setENDToDevice(e) {
    var i;
    let t = !1;
    try {
      this.activeData.editOrAdd && (await this.deleteHighAction(e));
      const a = this.activeData.singleHighData;
      await ((i = this.ServiceDevice) == null
        ? void 0
        : i.setEND({
            key: a.deviceKey[0],
            dks: a.browserCode.map((s) => (v(s) ? Number(s) : 0)),
          })),
        (t = !0);
    } catch (a) {
      console.error(a);
    }
    return t;
  }
  async setSOCDToDevice(e) {
    var i, a, s;
    let t = !1;
    try {
      let c = "";
      this.activeData.editOrAdd && (await this.deleteHighAction(e)),
        this.store.deviceInfo && (c = this.store.deviceInfo.binVersion);
      const r = this.activeData.singleHighData;
      await ((s = this.ServiceDevice) == null
        ? void 0
        : s.setSocd(
            {
              pos1: Number(r.deviceKey[0]) || 0,
              pos2: Number(r.deviceKey[1]) || 0,
              key1: Number((i = r.browserCode) == null ? void 0 : i[0]) || 0,
              key2: Number((a = r.browserCode) == null ? void 0 : a[1]) || 0,
              type: r.bindMode,
              mode: r.behaviorMode,
              delay: r.sliderValue,
            },
            c
          )),
        (t = !0);
    } catch (c) {
      console.error(c);
    }
    return t;
  }
  async deleteHighAction(e) {
    var i, a;
    let t = !1;
    try {
      if ((i = e == null ? void 0 : e.deviceKey) != null && i.length) {
        for (let s of e == null ? void 0 : e.deviceKey) {
          let c = this.store.deviceLayout.find((r) => r.keyValue === s);
          c &&
            c != null &&
            c.highMode &&
            (await ((a = this.ServiceDevice) == null
              ? void 0
              : a.deleteKey(Number(s), 0)));
        }
        await this.getAllHighList();
      }
      t = !0;
    } catch (s) {
      console.error(s);
    }
    return t;
  }
  resetClass() {
    Object.assign(this.activeData, d(this.defaultPageData));
  }
}
export { V as default };
