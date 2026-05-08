var m = Object.defineProperty;
var k = (v, e, t) =>
  e in v
    ? m(v, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (v[e] = t);
var h = (v, e, t) => k(v, typeof e != "symbol" ? e + "" : e, t);
import { D as f } from "./SparkLinkV1-BZE96y6t.js";
import {
  X as K,
  a4 as r,
  a8 as c,
  D as g,
  L as b,
  J as y,
  au as S,
} from "./index-w58kBX-A.js";
import "./three-core-Cz6MriGW.js";
class F {
  constructor(e, t) {
    h(this, "store");
    h(this, "keyboardMap");
    h(this, "defaultPageData");
    h(this, "MACROOptions");
    h(this, "ServiceDevice");
    h(
      this,
      "activeData",
      K({
        chooseLength: 0,
        pageData: [],
        FnMenu: [],
        FnLevel: 0,
        macroList: [],
        advancedActions: [],
        activeTab: 0,
        loadKeySet: !1,
        activeKey: [],
        showPage: "common",
        isMacroKey: !1,
        singleHighData: {
          deviceKey: [""],
          macroId: "",
          behaviorMode: 0,
          clickCount: 1,
          clickInterval: 100,
        },
      })
    );
    (this.store = e),
      (this.ServiceDevice = t),
      (this.keyboardMap = f),
      (this.defaultPageData = r(this.activeData)),
      (this.MACROOptions = [
        { label: c.global.t("macro.text11"), value: 0 },
        { label: c.global.t("macro.text12"), value: 1 },
        { label: c.global.t("macro.text13"), value: 2 },
        { label: c.global.t("macro.text14"), value: 3 },
      ]);
  }
  Key_Disabled() {
    var e, t;
    return {
      resetDisabled:
        ((e = this.activeData.activeKey) == null ? void 0 : e.length) === 0 ||
        this.activeData.FnLevel !== 0,
      setMacroDisabled:
        ((t = this.activeData.activeKey) == null ? void 0 : t.length) !== 1 ||
        this.activeData.FnLevel !== 0,
    };
  }
  async sdkReport(e, t, s) {
    switch (t) {
      case "addMacro":
        if (s.value) {
          let a = { name: "", actions: [] };
          for (let i = 1; i <= 100; i++)
            if (!this.activeData.macroList.find((l) => l.name === "M" + i)) {
              a.name = "M" + i;
              break;
            }
          s.value.openDrawer("Add", a);
        }
        break;
      case "delMacro":
        await g
          .confirm(
            `${c.global.t("reSet.message6")}`,
            `${c.global.t("reSet.title5")}`,
            {
              confirmButtonText: c.global.t("reSet.confirmText"),
              cancelButtonText: c.global.t("reSet.cancelText"),
            }
          )
          .then(() => {
            try {
              (this.activeData.macroList = this.activeData.macroList.filter(
                (a) => a.id !== (e == null ? void 0 : e.id)
              )),
                this.store.setProductMacroList(this.activeData.macroList);
            } catch (a) {
              console.error(a);
            }
          })
          .catch(() => {});
        break;
    }
  }
  changeActiveTab(e) {
    this.activeData.activeTab !== e && (this.activeData.activeTab = e);
  }
  async resetKey() {
    await g
      .confirm(
        `${c.global.t("reSet.message7")}`,
        `${c.global.t("reSet.title1")}`,
        {
          confirmButtonText: c.global.t("reSet.confirmText"),
          cancelButtonText: c.global.t("reSet.cancelText"),
        }
      )
      .then(async () => {
        var s, a;
        this.activeData.loadKeySet = !0;
        let e = !1,
          t = [];
        try {
          for (let i of this.store.deviceLayout)
            this.activeData.activeKey.find(
              (l) => l === (i == null ? void 0 : i.keyValue)
            ) &&
              i.fnValue !== i.keyValue &&
              i.keyValue !== 1 &&
              t.push({ key: Number(i.keyValue), layout: 0, value: i.keyValue });
          t != null &&
            t.length &&
            (await ((s = this.ServiceDevice) == null ? void 0 : s.setKey(t))),
            await ((a = this.store.deviceInstance) == null
              ? void 0
              : a.Info_Class.initDeviceFnLayout(0)),
            (e = !0);
        } catch (i) {
          console.error(i);
        }
        e && this.cancelSetMacro(), (this.activeData.loadKeySet = !1);
      })
      .catch(() => {
        this.activeData.loadKeySet = !1;
      });
  }
  async setActiveKey(e) {
    var t;
    (t = this.activeData.activeKey) != null &&
      t.length &&
      (await this.setKey(Number(e)), (this.activeData.activeKey.length = 0));
  }
  async changeFnLevel(e) {
    var t;
    this.activeData.FnLevel !== e &&
      (this.cancelSetMacro(),
      (this.activeData.loadKeySet = !0),
      (this.activeData.FnLevel = e),
      await ((t = this.store.deviceInstance) == null
        ? void 0
        : t.Info_Class.initDeviceFnLayout(e)),
      await this.getAllHighList(),
      (this.activeData.loadKeySet = !1));
  }
  highChoose(e, t) {
    const s = this.activeData.advancedActions.find((a) =>
      a.deviceKey.includes(e.keyValue)
    );
    if (s && s.icon === "MACRO") {
      const a = r(s);
      this.activeData.singleHighData.macroId = "";
      for (const i of Object.keys(a)) this.activeData.singleHighData[i] = a[i];
      (this.activeData.showPage = "MACRO"),
        (this.activeData.isMacroKey = !0),
        (this.activeData.activeKey = r(s.deviceKey)),
        (this.activeData.chooseLength = 1),
        b(() => {
          t.value && t.value.setOldMacro(r(this.activeData.singleHighData));
        });
    }
  }
  async updateList(e, t, s) {
    let a = !1;
    const i = this.activeData.macroList.find((l) => l.name === t.name),
      o = async () =>
        g.confirm(
          `${c.global.t("reSet.message8")}`,
          `${c.global.t("reSet.title4")}`,
          { confirmButtonText: c.global.t("reSet.confirmText"), showCancel: !1 }
        );
    if (i && (e === "Add" || i.id !== t.id)) {
      await o();
      return;
    }
    e === "Add" ? (a = this.addMacro(t)) : (a = this.updateMacro(t)),
      a &&
        (await b(() => {
          s.value && s.value.clearValue();
        }));
  }
  cancelSetMacro() {
    (this.activeData.activeKey.length = 0),
      (this.activeData.showPage = "common"),
      this.resetChooseLength();
  }
  async unBindMacro(e) {
    await g
      .confirm(
        `${c.global.t("reSet.message9")}`,
        `${c.global.t("reSet.title6")}`,
        {
          confirmButtonText: c.global.t("reSet.confirmText"),
          cancelButtonText: c.global.t("reSet.cancelText"),
        }
      )
      .then(async () => {
        (await this.deleteHighAction(e)) && this.cancelSetMacro();
      })
      .catch(() => {});
  }
  async setMacroToKey(e) {
    this.activeData.loadKeySet = !0;
    try {
      (await this.setMACROToDevice(e)) &&
        (this.cancelSetMacro(), await this.getAllHighList());
    } catch (t) {
      console.error(t);
    }
    this.activeData.loadKeySet = !1;
  }
  bindMacro(e) {
    this.setMacroAddData(),
      (this.activeData.singleHighData.deviceKey = r(this.activeData.activeKey)),
      y(e == null ? void 0 : e.id) &&
        (this.activeData.singleHighData.macroId = e == null ? void 0 : e.id),
      (this.activeData.showPage = "MACRO"),
      (this.activeData.isMacroKey = !1),
      (this.activeData.chooseLength = 1);
  }
  clearActiveKey(e) {
    this.activeData.activeKey = this.activeData.activeKey.filter(
      (t) => t !== e
    );
  }
  resetChooseLength() {
    this.activeData.chooseLength = this.store.deviceLayout.length;
  }
  setPageData() {
    var s, a;
    const e = [],
      t = [];
    this.activeData.pageData = [
      { label: c.global.t("keySet.sparkLinkV1Key.label1"), data: [] },
      { label: c.global.t("keySet.sparkLinkV1Key.label2"), data: [] },
      { label: c.global.t("keySet.sparkLinkV1Key.label3"), data: [] },
      { label: c.global.t("keySet.sparkLinkV1Key.label4"), data: [] },
      { label: c.global.t("keySet.sparkLinkV1Key.label5"), data: [] },
      { label: c.global.t("keySet.sparkLinkV1Key.label6"), data: [] },
    ];
    for (let i in this.keyboardMap)
      if (
        (y((s = this.keyboardMap[i]) == null ? void 0 : s.x) &&
          e.push({ ...this.keyboardMap[i], keyValue: Number(i) }),
        y(this.keyboardMap[i].type))
      ) {
        const o = this.keyboardMap[i].type;
        t[o] ?? (t[o] = []),
          t[o].push({
            keyValue: Number(i),
            title: this.keyboardMap[i].defaultKey,
            icon: ((a = this.keyboardMap[i]) == null ? void 0 : a.icon) || "",
          });
      }
    this.activeData.pageData.forEach((i, o) => {
      o ? (i.data = t[o - 1]) : (i.data = e);
    });
  }
  async getFnList() {
    var t, s;
    let e =
      ((t = this.store.deviceInfo) == null ? void 0 : t.FnMode) === "Win"
        ? "win"
        : "mac";
    this.changeListToPage({ currentSystem: e }),
      (s = this.store.deviceInstance) == null ||
        s.Info_Class.activeReportMode((a) => {
          this.changeListToPage(a), (this.activeData.FnLevel = 0);
        });
  }
  async getAllHighList() {
    var e, t, s;
    this.activeData.advancedActions = [];
    for (let a of this.store.deviceLayout) {
      if (this.activeData.FnLevel !== 0) {
        a.highMode = "";
        continue;
      }
      const { advancedKeyMode: i } = await ((e = this.ServiceDevice) == null
        ? void 0
        : e.getPerformanceMode(Number(a.keyValue)));
      if (
        ((a.highMode =
          (s =
            (t = this.store.deviceInstance) == null ? void 0 : t.High_Class) ==
          null
            ? void 0
            : s.highDataToIcon(i)),
        a.highMode && a.highMode === "MACRO")
      ) {
        const o = await this.getMACROConfig(Number(a.keyValue));
        o && this.activeData.advancedActions.push({ ...o, icon: a.highMode });
      }
    }
  }
  getMacroList() {
    this.activeData.macroList = r(this.store.getProductMacroList);
  }
  specialSetKey(e) {
    const s = r(this.defaultPageData.singleHighData.deviceKey).length,
      a = Array.from(new Set(e));
    this.activeData.singleHighData.deviceKey = Array.from(
      { length: s },
      (i, o) => a[o] ?? ""
    );
  }
  async onMountedFn() {
    (this.activeData.loadKeySet = !0),
      this.resetChooseLength(),
      this.setPageData(),
      await this.getFnList(),
      this.getMacroList(),
      await this.getAllHighList(),
      (this.activeData.loadKeySet = !1);
  }
  async setKey(e) {
    var s, a;
    let t = [];
    this.activeData.activeKey.forEach((i) => {
      t.push({ key: i, layout: this.activeData.FnLevel, value: e });
    }),
      t != null &&
        t.length &&
        (await ((s = this.ServiceDevice) == null ? void 0 : s.setKey(t)),
        await ((a = this.store.deviceInstance) == null
          ? void 0
          : a.Info_Class.initDeviceFnLayout(this.activeData.FnLevel)));
  }
  changeListToPage(e) {
    (e == null ? void 0 : e.currentSystem) === "win"
      ? (this.activeData.FnMenu = [
          { icon: "winBase", label: "Win Base" },
          { icon: "winBase", label: "Win Fn1" },
          { icon: "winBase", label: "Win Fn2" },
          { icon: "winBase", label: "Win Fn3" },
        ])
      : (this.activeData.FnMenu = [
          { icon: "macBase", label: "Mac Base" },
          { icon: "macBase", label: "Mac Fn1" },
          { icon: "macBase", label: "Mac Fn2" },
          { icon: "macBase", label: "Mac Fn3" },
        ]);
  }
  setMacroAddData() {
    for (let e in r(this.defaultPageData.singleHighData)) {
      const t = e;
      this.activeData.singleHighData[t] = r(
        this.defaultPageData.singleHighData[t]
      );
    }
  }
  async getMACROConfig(e) {
    var s;
    let t = null;
    try {
      const a = await ((s = this.ServiceDevice) == null
        ? void 0
        : s.getMacro(e));
      t = {
        deviceKey: [e],
        behaviorMode: a.mode,
        clickCount: a.num,
        clickInterval: a.delay,
      };
    } catch (a) {
      console.error(a);
    }
    return t;
  }
  async setMACROToDevice(e) {
    var s, a, i, o;
    let t = !1;
    if (
      this.activeData.singleHighData.deviceKey.includes("") ||
      !y(this.activeData.singleHighData.macroId)
    )
      return t;
    try {
      this.activeData.isMacroKey && (await this.deleteHighAction(e));
      let l = {
        index: 0,
        len: 0,
        mode: this.activeData.singleHighData.behaviorMode,
        key: Number(this.activeData.singleHighData.deviceKey[0]) || 0,
        num: Number(this.activeData.singleHighData.clickCount) || 1,
        delay: Number(this.activeData.singleHighData.clickInterval) || 100,
      };
      const D = [];
      let n =
        (s = this.activeData.macroList) == null
          ? void 0
          : s.find((d) => d.id === this.activeData.singleHighData.macroId);
      n &&
        ((l.len =
          (a = n == null ? void 0 : n.actions) == null ? void 0 : a.length),
        (i = n == null ? void 0 : n.actions) != null &&
          i.length &&
          (n == null ||
            n.actions.forEach((d) => {
              var u;
              const M =
                (u = Object.entries(f).find(
                  ([, L]) => L.browserCode === d.keyValue
                )) == null
                  ? void 0
                  : u[0];
              D.push({
                keyCode: Number(M),
                timeDifference: Number(d.time),
                status: d.keyStatus === "keydown" ? 1 : 0,
              });
            }))),
        await ((o = this.ServiceDevice) == null
          ? void 0
          : o.setMacro(l, D, "0")),
        (t = !0);
    } catch (l) {
      console.error(l);
    }
    return t;
  }
  async deleteHighAction(e) {
    var s, a;
    let t = !1;
    try {
      if ((s = e == null ? void 0 : e.deviceKey) != null && s.length) {
        for (let i of e == null ? void 0 : e.deviceKey) {
          let o = this.store.deviceLayout.find((l) => l.keyValue === i);
          o &&
            o != null &&
            o.highMode &&
            (await ((a = this.ServiceDevice) == null
              ? void 0
              : a.deleteKey(Number(i), 0)));
        }
        await this.getAllHighList();
      }
      t = !0;
    } catch (i) {
      console.error(i);
    }
    return t;
  }
  addMacro(e) {
    let t = !1;
    try {
      this.activeData.macroList.push({ ...e, id: S() }),
        this.store.setProductMacroList(this.activeData.macroList),
        (t = !0);
    } catch (s) {
      console.error(s);
    }
    return t;
  }
  updateMacro(e) {
    let t = !1;
    try {
      const s = this.activeData.macroList.findIndex((a) => a.id === e.id);
      s !== -1
        ? this.activeData.macroList.splice(s, 1, e)
        : this.activeData.macroList.push(e),
        this.store.setProductMacroList(this.activeData.macroList),
        (t = !0);
    } catch (s) {
      console.error(s);
    }
    return t;
  }
  async resetClass() {
    Object.assign(this.activeData, r(this.defaultPageData)),
      await this.changeFnLevel(0);
  }
}
export { F as default };
