/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tt = globalThis, ne = Tt.ShadowRoot && (Tt.ShadyCSS === void 0 || Tt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, je = Symbol(), _e = /* @__PURE__ */ new WeakMap();
let us = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== je) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (ne && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = _e.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && _e.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ds = (s) => new us(typeof s == "string" ? s : s + "", void 0, je), ps = (s, t) => {
  if (ne) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), r = Tt.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = e.cssText, s.appendChild(i);
  }
}, we = ne ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return ds(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: fs, defineProperty: gs, getOwnPropertyDescriptor: ms, getOwnPropertyNames: bs, getOwnPropertySymbols: vs, getPrototypeOf: Cs } = Object, M = globalThis, $e = M.trustedTypes, ys = $e ? $e.emptyScript : "", Wt = M.reactiveElementPolyfillSupport, pt = (s, t) => s, Lt = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? ys : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, ae = (s, t) => !fs(s, t), Se = { attribute: !0, type: String, converter: Lt, reflect: !1, useDefault: !1, hasChanged: ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), M.litPropertyMetadata ?? (M.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let et = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Se) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), r = this.getPropertyDescriptor(t, i, e);
      r !== void 0 && gs(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: r, set: o } = ms(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: r, set(n) {
      const a = r == null ? void 0 : r.call(this);
      o == null || o.call(this, n), this.requestUpdate(t, a, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Se;
  }
  static _$Ei() {
    if (this.hasOwnProperty(pt("elementProperties"))) return;
    const t = Cs(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(pt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(pt("properties"))) {
      const e = this.properties, i = [...bs(e), ...vs(e)];
      for (const r of i) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, r] of e) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const r = this._$Eu(e, i);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const r of i) e.unshift(we(r));
    } else t !== void 0 && e.push(we(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ps(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) == null ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) == null ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    var o;
    const i = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const n = (((o = i.converter) == null ? void 0 : o.toAttribute) !== void 0 ? i.converter : Lt).toAttribute(e, i.type);
      this._$Em = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o, n;
    const i = this.constructor, r = i._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const a = i.getPropertyOptions(r), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((o = a.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? a.converter : Lt;
      this._$Em = r;
      const c = l.fromAttribute(e, a.type);
      this[r] = c ?? ((n = this._$Ej) == null ? void 0 : n.get(r)) ?? c, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, r = !1, o) {
    var n;
    if (t !== void 0) {
      const a = this.constructor;
      if (r === !1 && (o = this[t]), i ?? (i = a.getPropertyOptions(t)), !((i.hasChanged ?? ae)(o, e) || i.useDefault && i.reflect && o === ((n = this._$Ej) == null ? void 0 : n.get(t)) && !this.hasAttribute(a._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: r, wrapped: o }, n) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), o !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), r === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, n] of this._$Ep) this[o] = n;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [o, n] of r) {
        const { wrapped: a } = n, l = this[o];
        a !== !0 || this._$AL.has(o) || l === void 0 || this.C(o, void 0, n, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (i = this._$EO) == null || i.forEach((r) => {
        var o;
        return (o = r.hostUpdate) == null ? void 0 : o.call(r);
      }), this.update(e)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var r;
      return (r = i.hostUpdated) == null ? void 0 : r.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
et.elementStyles = [], et.shadowRootOptions = { mode: "open" }, et[pt("elementProperties")] = /* @__PURE__ */ new Map(), et[pt("finalized")] = /* @__PURE__ */ new Map(), Wt == null || Wt({ ReactiveElement: et }), (M.reactiveElementVersions ?? (M.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = globalThis, Ae = (s) => s, Pt = ft.trustedTypes, Ee = Pt ? Pt.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, We = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, ze = "?" + B, _s = `<${ze}>`, W = document, gt = () => W.createComment(""), mt = (s) => s === null || typeof s != "object" && typeof s != "function", le = Array.isArray, ws = (s) => le(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", zt = `[ 	
\f\r]`, dt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, xe = /-->/g, Oe = />/g, F = RegExp(`>|${zt}(?:([^\\s"'>=/]+)(${zt}*=${zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Te = /'/g, Le = /"/g, Ke = /^(?:script|style|textarea|title)$/i, $s = (s) => (t, ...e) => ({ _$litType$: s, strings: t, values: e }), u = $s(1), z = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), Pe = /* @__PURE__ */ new WeakMap(), q = W.createTreeWalker(W, 129);
function Ve(s, t) {
  if (!le(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ee !== void 0 ? Ee.createHTML(t) : t;
}
const Ss = (s, t) => {
  const e = s.length - 1, i = [];
  let r, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = dt;
  for (let a = 0; a < e; a++) {
    const l = s[a];
    let c, g, d = -1, v = 0;
    for (; v < l.length && (n.lastIndex = v, g = n.exec(l), g !== null); ) v = n.lastIndex, n === dt ? g[1] === "!--" ? n = xe : g[1] !== void 0 ? n = Oe : g[2] !== void 0 ? (Ke.test(g[2]) && (r = RegExp("</" + g[2], "g")), n = F) : g[3] !== void 0 && (n = F) : n === F ? g[0] === ">" ? (n = r ?? dt, d = -1) : g[1] === void 0 ? d = -2 : (d = n.lastIndex - g[2].length, c = g[1], n = g[3] === void 0 ? F : g[3] === '"' ? Le : Te) : n === Le || n === Te ? n = F : n === xe || n === Oe ? n = dt : (n = F, r = void 0);
    const C = n === F && s[a + 1].startsWith("/>") ? " " : "";
    o += n === dt ? l + _s : d >= 0 ? (i.push(c), l.slice(0, d) + We + l.slice(d) + B + C) : l + B + (d === -2 ? a : C);
  }
  return [Ve(s, o + (s[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class bt {
  constructor({ strings: t, _$litType$: e }, i) {
    let r;
    this.parts = [];
    let o = 0, n = 0;
    const a = t.length - 1, l = this.parts, [c, g] = Ss(t, e);
    if (this.el = bt.createElement(c, i), q.currentNode = this.el.content, e === 2 || e === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (r = q.nextNode()) !== null && l.length < a; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const d of r.getAttributeNames()) if (d.endsWith(We)) {
          const v = g[n++], C = r.getAttribute(d).split(B), A = /([.?@])?(.*)/.exec(v);
          l.push({ type: 1, index: o, name: A[2], strings: C, ctor: A[1] === "." ? Es : A[1] === "?" ? xs : A[1] === "@" ? Os : Rt }), r.removeAttribute(d);
        } else d.startsWith(B) && (l.push({ type: 6, index: o }), r.removeAttribute(d));
        if (Ke.test(r.tagName)) {
          const d = r.textContent.split(B), v = d.length - 1;
          if (v > 0) {
            r.textContent = Pt ? Pt.emptyScript : "";
            for (let C = 0; C < v; C++) r.append(d[C], gt()), q.nextNode(), l.push({ type: 2, index: ++o });
            r.append(d[v], gt());
          }
        }
      } else if (r.nodeType === 8) if (r.data === ze) l.push({ type: 2, index: o });
      else {
        let d = -1;
        for (; (d = r.data.indexOf(B, d + 1)) !== -1; ) l.push({ type: 7, index: o }), d += B.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const i = W.createElement("template");
    return i.innerHTML = t, i;
  }
}
function rt(s, t, e = s, i) {
  var n, a;
  if (t === z) return t;
  let r = i !== void 0 ? (n = e._$Co) == null ? void 0 : n[i] : e._$Cl;
  const o = mt(t) ? void 0 : t._$litDirective$;
  return (r == null ? void 0 : r.constructor) !== o && ((a = r == null ? void 0 : r._$AO) == null || a.call(r, !1), o === void 0 ? r = void 0 : (r = new o(s), r._$AT(s, e, i)), i !== void 0 ? (e._$Co ?? (e._$Co = []))[i] = r : e._$Cl = r), r !== void 0 && (t = rt(s, r._$AS(s, t.values), r, i)), t;
}
class As {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: i } = this._$AD, r = ((t == null ? void 0 : t.creationScope) ?? W).importNode(e, !0);
    q.currentNode = r;
    let o = q.nextNode(), n = 0, a = 0, l = i[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let c;
        l.type === 2 ? c = new wt(o, o.nextSibling, this, t) : l.type === 1 ? c = new l.ctor(o, l.name, l.strings, this, t) : l.type === 6 && (c = new Ts(o, this, t)), this._$AV.push(c), l = i[++a];
      }
      n !== (l == null ? void 0 : l.index) && (o = q.nextNode(), n++);
    }
    return q.currentNode = W, r;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class wt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, i, r) {
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = rt(this, t, e), mt(t) ? t === b || t == null || t === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : t !== this._$AH && t !== z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ws(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== b && mt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(W.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = bt.createElement(Ve(i.h, i.h[0]), this.options)), i);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === r) this._$AH.p(e);
    else {
      const n = new As(r, this), a = n.u(this.options);
      n.p(e), this.T(a), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = Pe.get(t.strings);
    return e === void 0 && Pe.set(t.strings, e = new bt(t)), e;
  }
  k(t) {
    le(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, r = 0;
    for (const o of t) r === e.length ? e.push(i = new wt(this.O(gt()), this.O(gt()), this, this.options)) : i = e[r], i._$AI(o), r++;
    r < e.length && (this._$AR(i && i._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, e); t !== this._$AB; ) {
      const r = Ae(t).nextSibling;
      Ae(t).remove(), t = r;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class Rt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, r, o) {
    this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = o, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = b;
  }
  _$AI(t, e = this, i, r) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = rt(this, t, e, 0), n = !mt(t) || t !== this._$AH && t !== z, n && (this._$AH = t);
    else {
      const a = t;
      let l, c;
      for (t = o[0], l = 0; l < o.length - 1; l++) c = rt(this, a[i + l], e, l), c === z && (c = this._$AH[l]), n || (n = !mt(c) || c !== this._$AH[l]), c === b ? t = b : t !== b && (t += (c ?? "") + o[l + 1]), this._$AH[l] = c;
    }
    n && !r && this.j(t);
  }
  j(t) {
    t === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Es extends Rt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === b ? void 0 : t;
  }
}
class xs extends Rt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== b);
  }
}
class Os extends Rt {
  constructor(t, e, i, r, o) {
    super(t, e, i, r, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = rt(this, t, e, 0) ?? b) === z) return;
    const i = this._$AH, r = t === b && i !== b || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, o = t !== b && (i === b || r);
    r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ts {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    rt(this, t);
  }
}
const Kt = ft.litHtmlPolyfillSupport;
Kt == null || Kt(bt, wt), (ft.litHtmlVersions ?? (ft.litHtmlVersions = [])).push("3.3.2");
const Ls = (s, t, e) => {
  const i = (e == null ? void 0 : e.renderBefore) ?? t;
  let r = i._$litPart$;
  if (r === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    i._$litPart$ = r = new wt(t.insertBefore(gt(), o), o, void 0, e ?? {});
  }
  return r._$AI(s), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis;
let st = class extends et {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ls(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return z;
  }
};
var Ge;
st._$litElement$ = !0, st.finalized = !0, (Ge = j.litElementHydrateSupport) == null || Ge.call(j, { LitElement: st });
const Vt = j.litElementPolyfillSupport;
Vt == null || Vt({ LitElement: st });
(j.litElementVersions ?? (j.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const f = (s) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(s, t);
  }) : customElements.define(s, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ps = { attribute: !0, type: String, converter: Lt, reflect: !1, hasChanged: ae }, Is = (s = Ps, t, e) => {
  const { kind: i, metadata: r } = e;
  let o = globalThis.litPropertyMetadata.get(r);
  if (o === void 0 && globalThis.litPropertyMetadata.set(r, o = /* @__PURE__ */ new Map()), i === "setter" && ((s = Object.create(s)).wrapped = !0), o.set(e.name, s), i === "accessor") {
    const { name: n } = e;
    return { set(a) {
      const l = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(n, l, s, !0, a);
    }, init(a) {
      return a !== void 0 && this.C(n, void 0, s, a), a;
    } };
  }
  if (i === "setter") {
    const { name: n } = e;
    return function(a) {
      const l = this[n];
      t.call(this, a), this.requestUpdate(n, l, s, !0, a);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function h(s) {
  return (t, e) => typeof e == "object" ? Is(s, t, e) : ((i, r, o) => {
    const n = r.hasOwnProperty(o);
    return r.constructor.createProperty(o, i), n ? Object.getOwnPropertyDescriptor(r, o) : void 0;
  })(s, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Q(s) {
  return h({ ...s, state: !0, attribute: !1 });
}
const _ = [];
for (let s = 0; s < 256; ++s)
  _.push((s + 256).toString(16).slice(1));
function Ds(s, t = 0) {
  return (_[s[t + 0]] + _[s[t + 1]] + _[s[t + 2]] + _[s[t + 3]] + "-" + _[s[t + 4]] + _[s[t + 5]] + "-" + _[s[t + 6]] + _[s[t + 7]] + "-" + _[s[t + 8]] + _[s[t + 9]] + "-" + _[s[t + 10]] + _[s[t + 11]] + _[s[t + 12]] + _[s[t + 13]] + _[s[t + 14]] + _[s[t + 15]]).toLowerCase();
}
let Jt;
const Us = new Uint8Array(16);
function ks() {
  if (!Jt) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Jt = crypto.getRandomValues.bind(crypto);
  }
  return Jt(Us);
}
const Ns = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ie = { randomUUID: Ns };
function Bs(s, t, e) {
  var r;
  if (Ie.randomUUID && !s)
    return Ie.randomUUID();
  s = s || {};
  const i = s.random ?? ((r = s.rng) == null ? void 0 : r.call(s)) ?? ks();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, Ds(i);
}
class Ht {
  constructor() {
    this.subscribers = /* @__PURE__ */ new Map();
  }
  subscribe(t) {
    const e = Bs();
    return this.subscribers.set(e, t), e;
  }
  unsubscribe(t) {
    this.subscribers.delete(t);
  }
  notify(t) {
    for (const e of this.subscribers.values())
      e(t);
  }
}
class Ms extends Ht {
  // Default breakpoint
  constructor() {
    super(), this.currentBreakpoint = "desktop", this.setupObserver();
  }
  setupObserver() {
    "ResizeObserver" in globalThis ? (this.resizeObserver = new ResizeObserver(() => {
      this.calculateBreakpoint();
    }), this.resizeObserver.observe(document.body)) : window.addEventListener("resize", () => this.calculateBreakpoint()), this.calculateBreakpoint();
  }
  calculateBreakpoint() {
    const t = window.innerWidth;
    let e = this.currentBreakpoint;
    t < 860 ? this.currentBreakpoint = "mobile" : this.currentBreakpoint = "desktop", e !== this.currentBreakpoint && this.notify(this.currentBreakpoint);
  }
  get breakpoint() {
    return this.currentBreakpoint;
  }
  get isMobile() {
    return this.currentBreakpoint === "mobile";
  }
}
const Ot = new Ms();
var w = /* @__PURE__ */ ((s) => (s.BREAKPOINT_CHANGED = "BreakpointEvents/BREAKPOINT_CHANGED", s))(w || {});
class E {
  constructor(t, e = !1) {
    this.id = "", this.breakpointPrefix = "uhf-breakpoint--", this.host = t, this.host.addController(this), this.addClassesToHost = e;
  }
  hostConnected() {
    this.addClassesToHost && this.host.updateComplete.then(() => {
      this.host.classList.add(this.getBreakpointClasses());
    }), this.id = Ot.subscribe(() => {
      this.addClassesToHost && (Array.from(this.host.classList).filter((t) => t.startsWith(this.breakpointPrefix)).forEach((t) => this.host.classList.remove(t)), this.host.classList.add(this.getBreakpointClasses())), this.host.dispatchEvent(new CustomEvent("BreakpointEvents/BREAKPOINT_CHANGED", {
        detail: { breakpoint: this.breakpoint, isMobile: this.isMobile },
        bubbles: !1
      }));
    });
  }
  hostDisconnected() {
    Ot.unsubscribe(this.id);
  }
  // Public API
  get isMobile() {
    return Ot.isMobile;
  }
  get breakpoint() {
    return Ot.breakpoint;
  }
  getBreakpointClasses() {
    return `${this.breakpointPrefix}${this.breakpoint}`;
  }
}
const Yt = "uhf-tas-cache", Je = 1, Rs = 6e5;
function Hs() {
  const t = Number("600000");
  return !Number.isFinite(t) || t < 0 ? Rs : t;
}
function Fs(s) {
  if (!s || typeof s != "object") return !1;
  const t = s;
  return !(t.v !== Je || typeof t.writtenAt != "number" || !Number.isFinite(t.writtenAt) || t.writtenAt <= 0 || !t.payload || typeof t.payload != "object");
}
class qs {
  constructor(t = Hs()) {
    this.ttlMs = t;
  }
  read(t, e = Date.now()) {
    if (this.ttlMs === 0) return null;
    let i;
    try {
      i = localStorage.getItem(Yt);
    } catch {
      return null;
    }
    if (i === null) return null;
    let r;
    try {
      r = JSON.parse(i);
    } catch {
      return null;
    }
    return !Fs(r) || e < r.writtenAt || e - r.writtenAt > this.ttlMs || !r.payload.partnerId || r.payload.partnerId !== t ? null : r.payload;
  }
  write(t, e = Date.now()) {
    if (this.ttlMs === 0) return;
    const i = { v: Je, writtenAt: e, payload: t };
    let r;
    try {
      r = JSON.stringify(i);
    } catch (o) {
      const n = o instanceof Error ? o.message : String(o);
      console.error("Unable to serialize UHF assignment cache entry: " + n);
      return;
    }
    try {
      localStorage.setItem(Yt, r);
    } catch (o) {
      const n = o instanceof Error ? o.message : String(o);
      console.error("Unable to write UHF assignment cache entry: " + n);
    }
  }
  clear() {
    try {
      localStorage.removeItem(Yt);
    } catch {
    }
  }
}
const De = new qs();
var $ = /* @__PURE__ */ ((s) => (s.LIGHT = "light", s.DARK = "dark", s))($ || {}), vt = /* @__PURE__ */ ((s) => (s.RTL = "rtl", s.LTR = "ltr", s))(vt || {});
class Gs extends Ht {
  constructor() {
    super(), this.mutationObserver = null, this.context = {
      headerTheme: "light",
      footerTheme: "light",
      alignment: this.getInitialAlignment(),
      assignment: void 0,
      locale: "en-us"
    }, this.fetchTasAssignment(), this.watchHtmlDirection();
  }
  getInitialAlignment() {
    const t = document.documentElement;
    return (t.getAttribute("dir") || t.dir || "ltr").toLowerCase() === "rtl" ? "rtl" : "ltr";
  }
  watchHtmlDirection() {
    const t = document.documentElement;
    this.mutationObserver = new MutationObserver((e) => {
      e.forEach((i) => {
        if (i.type === "attributes" && i.attributeName === "dir") {
          const r = this.getInitialAlignment();
          this.context.alignment !== r && this.updateContext({ alignment: r });
        }
      });
    }), this.mutationObserver.observe(t, {
      attributes: !0,
      attributeFilter: ["dir"]
    });
  }
  updateContext(t) {
    const e = { ...this.context };
    this.context = { ...this.context, ...t }, JSON.stringify(e) !== JSON.stringify(this.context) && this.notify(t);
  }
  getContext() {
    return this.context;
  }
  async fetchTasAssignment() {
    let t = "x-exp-clientid";
    const e = document.querySelector("uhf-header"), i = (e == null ? void 0 : e.getAttribute("partnerid")) ?? "", r = De.read(i);
    if (r) {
      this.updateContext({ assignment: r });
      return;
    }
    try {
      const o = {
        "Content-Type": "application/json"
      }, n = localStorage.getItem(t);
      n && (o["x-exp-clientid"] = n);
      const a = new URL("https://uhf-exp-fd-gbcrdgggfbggh0g3.b02.azurefd.net/api/v1/tas");
      i && a.searchParams.set("partnerId", i);
      let l = await fetch(a.toString(), {
        method: "GET",
        headers: o
      });
      if (!l.ok)
        throw new Error(`Error: ${l.status} ${l.statusText}`);
      const c = await l.json();
      c.partnerId = i, !n && c.clientId && localStorage.setItem(t, c.clientId), De.write(c), this.updateContext({ assignment: c });
    } catch (o) {
      console.error("Unable to fetch UHF assignment: " + o.message);
    }
  }
}
const Ye = new Gs();
var Xt = /* @__PURE__ */ ((s) => (s.CONTEXT_CHANGED = "ContextEvents/CONTEXT_CHANGED", s))(Xt || {});
class U {
  constructor(t) {
    this.host = t, this.host.addController(this), this.contextService = Ye;
  }
  hostConnected() {
    this.id = this.contextService.subscribe(this.onContextChanged.bind(this));
  }
  hostDisconnected() {
    this.id && this.contextService.unsubscribe(this.id);
  }
  onContextChanged(t) {
    this.host.dispatchEvent(new CustomEvent("ContextEvents/CONTEXT_CHANGED", {
      detail: t,
      bubbles: !1
    }));
  }
  setContext(t) {
    this.contextService.updateContext(t);
  }
  getAlignmentClasses() {
    return `uhf-alignment--${this.alignment}`;
  }
  get alignment() {
    return this.contextService.getContext().alignment || vt.LTR;
  }
  get locale() {
    return this.contextService.getContext().locale || "en-us";
  }
  getLocaleLabel() {
    return ((this.locale ?? "").trim().split(/[-_]/)[0] || "en").toUpperCase();
  }
  get assignment() {
    return this.contextService.getContext().assignment;
  }
  getHeaderThemeClasses() {
    return `uhf-theme--${this.headerTheme}`;
  }
  get headerTheme() {
    return this.contextService.getContext().headerTheme || $.LIGHT;
  }
  getFooterThemeClasses() {
    return `uhf-theme--${this.footerTheme}`;
  }
  get footerTheme() {
    return this.contextService.getContext().footerTheme || $.LIGHT;
  }
}
class js extends Ht {
  constructor() {
    super(), this.state = {
      searchState: { isSearchOpen: !1 },
      mobileState: { isContextualNavOpen: !1, isGlobalNavOpen: !1 },
      meControlState: { config: void 0, activeAccount: void 0 }
    };
  }
  setState(t) {
    const e = { ...this.state }, i = t(e);
    this.state = { ...this.state, ...i }, JSON.stringify(e) !== JSON.stringify(this.state) && this.notify(i);
  }
  getState() {
    return this.state;
  }
}
const Ws = new js();
var T = /* @__PURE__ */ ((s) => (s.STATE_CHANGED = "StateEvents/STATE_CHANGED", s))(T || {});
class X {
  constructor(t) {
    (this.host = t).addController(this), this.stateService = Ws;
  }
  hostConnected() {
    this.id = this.stateService.subscribe(this.onStateChanged.bind(this));
  }
  hostDisconnected() {
    this.id && this.stateService.unsubscribe(this.id);
  }
  onStateChanged(t) {
    this.host.dispatchEvent(new CustomEvent("StateEvents/STATE_CHANGED", {
      detail: t,
      bubbles: !1
    }));
  }
  getState() {
    return this.stateService.getState();
  }
  setState(t) {
    this.stateService.setState(t);
  }
}
var zs = Object.defineProperty, Ks = (s, t, e, i) => {
  for (var r = void 0, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = n(t, e, r) || r);
  return r && zs(t, e, r), r;
};
class p extends st {
  constructor(t = !1) {
    super(), this.debug = !1, this.originalChildren = [], this.passthroughChildren = !1, this.passthroughChildren = t;
  }
  connectedCallback() {
    if (!this.passthroughChildren) {
      let t = [];
      Array.from(this.children).forEach((e) => {
        t.push(e.cloneNode(!0)), e.remove();
      }), this.originalChildren = t;
    }
    super.connectedCallback();
  }
  createRenderRoot() {
    return this;
  }
  getChildren() {
    return this.originalChildren.map((t) => t.cloneNode(!0));
  }
  getChildrenBySlot(t) {
    return t === "default" ? this.originalChildren.filter((e) => !(e instanceof Element) || !e.getAttribute("slot")).map((e) => e.cloneNode(!0)) : this.originalChildren.filter((e) => e instanceof Element && e.getAttribute("slot") === t).map((e) => e.cloneNode(!0));
  }
  findFirstCustomAncestor() {
    let t = this.parentElement;
    for (; t; ) {
      if (t.tagName.includes("-"))
        return t;
      t = t.parentElement;
    }
    return null;
  }
  checkIfSlotExists(t) {
    return this.originalChildren.some((e) => e instanceof Element && e.getAttribute("slot") === t);
  }
}
Ks([
  h({ type: Boolean })
], p.prototype, "debug");
var Vs = Object.defineProperty, Js = Object.getOwnPropertyDescriptor, $t = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Js(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && Vs(t, e, r), r;
};
let it = class extends p {
  constructor() {
    super(), this.partnerId = "", this.headerId = "", this.theme = "light", this.locale = "en-us", this.onBreakpointChanged = () => {
      this.requestUpdate();
    }, this.onStateChanged = (s) => {
      const t = s.detail;
      t.searchState !== void 0 && this.classList.toggle("search-open", t.searchState.isSearchOpen ?? !1);
    }, this.breakpointController = new E(this), this.contextController = new U(this), this.stateController = new X(this);
  }
  connectedCallback() {
    const s = this.theme === "dark" ? $.DARK : $.LIGHT;
    this.contextController.setContext({
      headerTheme: s,
      locale: this.locale,
      headerId: this.headerId,
      partnerId: this.partnerId
    }), super.connectedCallback(), this.addEventListener(T.STATE_CHANGED, this.onStateChanged), this.addEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged);
  }
  disconnectedCallback() {
    this.removeEventListener(T.STATE_CHANGED, this.onStateChanged), this.removeEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged), super.disconnectedCallback();
  }
  willUpdate(s) {
    var t;
    if (s.has("theme")) {
      const e = $[(t = this.theme) == null ? void 0 : t.toUpperCase()] || $.LIGHT;
      this.contextController.setContext({ headerTheme: e });
    }
  }
  updated() {
    this.dispatchEvent(new CustomEvent("uhf-header-rendered", {
      bubbles: !0,
      composed: !0,
      detail: {
        view: this.breakpointController.isMobile ? "mobile" : "desktop"
      }
    }));
  }
  // get the children of the action container
  // need this for mobile view when the actions are rendered
  // outside the action container
  getActionChildren() {
    const s = super.getChildrenBySlot("actions");
    if (!s || s.length === 0) return [];
    const t = s[0];
    return Array.from(t.children).map((e) => e.cloneNode(!0));
  }
  getActionChildByTag(s) {
    return this.getActionChildren().filter(
      (t) => t instanceof Element && t.tagName.toLowerCase() === s
    );
  }
  render() {
    let s = [
      this.breakpointController.getBreakpointClasses(),
      this.contextController.getHeaderThemeClasses()
    ];
    return this.breakpointController.isMobile ? u`
                ${super.getChildrenBySlot("skip-link")}
                <uhf-cookie-banner></uhf-cookie-banner>
                ${super.getChildrenBySlot("promo-banner")}
                <header 
                    class="uhf-header ${s.join(" ")}"
                    itemscope
                    itemtype="https://schema.org/WPHeader"
                >
                    <div class="uhf-header-l0">
                        <div class="uhf-header-l0__actions">
                            ${this.getActionChildByTag("uhf-global-nav")}
                            ${this.getActionChildByTag("uhf-search")}
                        </div>
                        ${super.getChildrenBySlot("brand")}
                        <div class="uhf-header-l0__actions">
                            ${this.getActionChildByTag("uhf-cart")}
                            ${this.getActionChildByTag("uhf-mecontrol")}
                        </div>
                    </div>
                    ${super.checkIfSlotExists("contextual-nav") ? u`
                        <div class="uhf-header-l1">
                            ${super.getChildrenBySlot("contextual-nav")}
                        </div>
                    ` : ""}
                </header>
                ${super.getChildrenBySlot("site-promo-banner")}
            ` : u`
            ${super.getChildrenBySlot("skip-link")}
            <uhf-cookie-banner></uhf-cookie-banner>
            ${super.getChildrenBySlot("promo-banner")}
            <header class="uhf-header ${s.join(" ")}" itemscope itemtype="https://schema.org/WPHeader">
                <div class="uhf-header__container">
                    ${super.getChildrenBySlot("brand")}
                    ${super.getChildrenBySlot("contextual-nav")}
                    ${super.getChildrenBySlot("actions")}
                </div>
            </header>
            ${super.getChildrenBySlot("site-promo-banner")}
        `;
  }
};
$t([
  h({ type: String })
], it.prototype, "partnerId", 2);
$t([
  h({ type: String })
], it.prototype, "headerId", 2);
$t([
  h({ type: String })
], it.prototype, "theme", 2);
$t([
  h({ type: String })
], it.prototype, "locale", 2);
it = $t([
  f("uhf-header")
], it);
var Ys = Object.getOwnPropertyDescriptor, Qs = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Ys(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = n(r) || r);
  return r;
};
let Ue = class extends p {
  // this is just a simple container element
  // basically the equivalent of a div
  constructor() {
    super(!0);
  }
};
Ue = Qs([
  f("uhf-actions")
], Ue);
var Xs = Object.defineProperty, Zs = Object.getOwnPropertyDescriptor, Qe = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Zs(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && Xs(t, e, r), r;
};
let Zt = class extends p {
  constructor() {
    super(), this.pipe = "true", this.breakpointController = new E(this, !0);
  }
  render() {
    return u`
            <div itemscope itemtype="https://schema.org/Organization" style="display:contents">
                <meta itemprop="url" content="https://www.microsoft.com"/>
                <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject" style="display:contents">
                    ${super.getChildrenBySlot("microsoft-logo")}
                </div>
                ${this.checkIfSlotExists("brand-logo") ? u`
                    <div class="uhf-site-logo-container ${this.pipe === "true" ? "show-pipe" : ""}">
                        ${super.getChildrenBySlot("brand-logo")}
                    </div>` : ""}
            </div>
        `;
  }
};
Qe([
  h({ type: String })
], Zt.prototype, "pipe", 2);
Zt = Qe([
  f("uhf-brand")
], Zt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = (s) => s ?? b;
var tr = Object.defineProperty, er = Object.getOwnPropertyDescriptor, k = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? er(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && tr(t, e, r), r;
};
let P = class extends p {
  constructor() {
    super(), this.brand = "", this.overflowText = "More", this.homeUrl = "", this.homeText = "", this.navLabel = "", this.theme = "", this.logoImageUrl = "", this.logoAlt = "", this.onBreakpointChanged = () => {
      this.requestUpdate();
    }, this.breakpointController = new E(this), this.stateController = new X(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged);
  }
  disconnectedCallback() {
    this.removeEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged), super.disconnectedCallback();
  }
  render() {
    return this.breakpointController.isMobile ? u`
                <uhf-contextual-nav-mobile 
                    brand=${this.brand} 
                    homeUrl=${this.homeUrl} 
                    homeText=${this.homeText}
                    logoimageurl=${ot(this.logoImageUrl)}
                    logoalt=${ot(this.logoAlt)}
                    data-nav-label=${this.navLabel}>
                    ${super.getChildren()}
                </uhf-contextual-nav-mobile>
            ` : u`
            <uhf-contextual-nav-desktop overflowText=${this.overflowText} data-nav-label=${this.navLabel}>
                ${super.getChildren()}
            </uhf-contextual-nav-desktop>
       `;
  }
};
k([
  h({ type: String })
], P.prototype, "brand", 2);
k([
  h({ type: String })
], P.prototype, "overflowText", 2);
k([
  h({ type: String })
], P.prototype, "homeUrl", 2);
k([
  h({ type: String })
], P.prototype, "homeText", 2);
k([
  h({ type: String, attribute: "data-nav-label" })
], P.prototype, "navLabel", 2);
k([
  h({ type: String })
], P.prototype, "theme", 2);
k([
  h({ type: String, attribute: "logoimageurl" })
], P.prototype, "logoImageUrl", 2);
k([
  h({ type: String, attribute: "logoalt" })
], P.prototype, "logoAlt", 2);
P = k([
  f("uhf-contextual-nav")
], P);
var sr = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, Ft = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? rr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && sr(t, e, r), r;
};
let Ct = class extends p {
  constructor() {
    super(...arguments), this.brand = "", this.overflowText = "More", this.navLabel = "";
  }
  render() {
    const s = JSON.stringify({
      compnm: "UHF",
      view: "UHF",
      pa: "UniversalHeader",
      hn: this.overflowText,
      ehn: "More",
      cN: `CatNav_${this.overflowText}_nonnav`,
      ecn: "CatNav_More_nonnav"
    });
    return u`
            <nav class="uhf-contextual-nav" role="navigation" aria-label=${ot(this.navLabel)} itemscope itemtype="https://schema.org/SiteNavigationElement">
                <uhf-overflow-menu
                    overflowText=${this.overflowText}
                    triggerDataM=${s}
                    containerSelector=".uhf-header__container"
                >
                    ${super.getChildrenBySlot("default")}
                    ${super.getChildrenBySlot("CTA").map((t) => (t instanceof Element && t.setAttribute("slot", "after"), t))}
                </uhf-overflow-menu>
            </nav>
        `;
  }
};
Ft([
  h({ type: String })
], Ct.prototype, "brand", 2);
Ft([
  h({ type: String })
], Ct.prototype, "overflowText", 2);
Ft([
  h({ type: String, attribute: "data-nav-label" })
], Ct.prototype, "navLabel", 2);
Ct = Ft([
  f("uhf-contextual-nav-desktop")
], Ct);
const ir = (s) => s.filter((t) => {
  const e = getComputedStyle(t);
  if (e.display === "none" || e.visibility === "hidden") return !1;
  let i = t.parentElement;
  for (; i; ) {
    const r = getComputedStyle(i);
    if (r.display === "none" || r.visibility === "hidden") return !1;
    i = i.parentElement;
  }
  return !0;
}), Xe = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  '[role="menuitem"]',
  '[role="option"]'
];
class Ze {
  constructor(t, e) {
    this.focusedIndex = -1, this.menuItems = [], this.host = t, this.containerQuery = e, this.host.addController(this);
  }
  hostConnected() {
  }
  getFocusableMenuItems() {
    const t = this.containerQuery ? this.host.querySelector(this.containerQuery) : this.host;
    if (!t) return [];
    const e = t.querySelectorAll(Xe.join(", "));
    return ir(Array.from(e));
  }
  focusFirstMenuItem() {
    this.menuItems = this.getFocusableMenuItems(), this.menuItems.length > 0 && (this.focusedIndex = 0, this.menuItems[0].focus(), this.updateMenuItemAttributes());
  }
  focusLastMenuItem() {
    this.menuItems = this.getFocusableMenuItems(), this.menuItems.length > 0 && (this.focusedIndex = this.menuItems.length - 1, this.menuItems[this.focusedIndex].focus(), this.updateMenuItemAttributes());
  }
  focusNextItem() {
    this.menuItems = this.getFocusableMenuItems(), this.menuItems.length !== 0 && (this.focusedIndex = (this.focusedIndex + 1) % this.menuItems.length, this.menuItems[this.focusedIndex].focus(), this.updateMenuItemAttributes());
  }
  focusPreviousItem() {
    this.menuItems = this.getFocusableMenuItems(), this.menuItems.length !== 0 && (this.focusedIndex = this.focusedIndex <= 0 ? this.menuItems.length - 1 : this.focusedIndex - 1, this.menuItems[this.focusedIndex].focus(), this.updateMenuItemAttributes());
  }
  updateMenuItemAttributes() {
    this.menuItems.forEach((t, e) => {
      e === this.focusedIndex ? t.classList.add("focused") : t.classList.remove("focused");
    });
  }
  activateCurrentItem() {
    this.focusedIndex >= 0 && this.menuItems[this.focusedIndex] && this.menuItems[this.focusedIndex].click();
  }
  setFocusIndex(t) {
    this.focusedIndex = t, this.updateMenuItemAttributes();
  }
  getItemCount() {
    return this.menuItems = this.getFocusableMenuItems(), this.menuItems.length;
  }
}
class or extends Ht {
  constructor() {
    super(), window.addEventListener("keydown", (t) => this.notify(t));
  }
}
const nr = new or();
class he {
  constructor(t, e, i) {
    this.keyboardService = nr, this.handleKeyDown = (r) => {
      switch (r.key) {
        case "ArrowDown":
          r.preventDefault(), this.callbacks.onArrowDown ? this.callbacks.onArrowDown(this.focusController) : this.focusController.focusNextItem();
          break;
        case "ArrowUp":
          r.preventDefault(), this.callbacks.onArrowUp ? this.callbacks.onArrowUp(this.focusController) : this.focusController.focusPreviousItem();
          break;
        case "Home":
          r.preventDefault(), this.callbacks.onHome ? this.callbacks.onHome(this.focusController) : this.focusController.focusFirstMenuItem();
          break;
        case "End":
          r.preventDefault(), this.callbacks.onEnd ? this.callbacks.onEnd(this.focusController) : this.focusController.focusLastMenuItem();
          break;
        case "Escape":
          r.preventDefault(), this.callbacks.onEscape && this.callbacks.onEscape(this.focusController);
          break;
        case "Tab":
          this.callbacks.onTab && this.callbacks.onTab(this.focusController, r);
          break;
        case "Enter":
          this.callbacks.onEnter && this.callbacks.onEnter(this.focusController);
          break;
        case " ":
          this.callbacks.onSpace && this.callbacks.onSpace(this.focusController);
          break;
      }
    }, this.listen = () => {
      this.id || (this.id = this.keyboardService.subscribe(this.handleKeyDown));
    }, this.deafen = () => {
      this.id && (this.keyboardService.unsubscribe(this.id), this.id = void 0);
    }, (this.host = t).addController(this), this.focusController = new Ze(this.host, i), this.callbacks = e;
  }
  hostConnected() {
  }
  hostDisconnected() {
    this.deafen();
  }
}
var D = /* @__PURE__ */ ((s) => (s.POSITION_CALCULATED = "PositionEvents/POSITION_CALCULATED", s))(D || {});
class ar {
  // margin from the edge of the viewport
  constructor(t, e, i, r, o = 0) {
    this.calculateMobilePosition = () => {
      var ut, At;
      const n = (ut = this.host.findFirstCustomAncestor()) == null ? void 0 : ut.querySelector(this.anchorSelector), a = (At = this.host.findFirstCustomAncestor()) == null ? void 0 : At.querySelector(this.popoutSelector);
      if (!n || !a) return;
      a.style.removeProperty("top"), a.style.removeProperty("left"), a.style.removeProperty("width");
      const l = n.getBoundingClientRect(), c = window.scrollY, g = l.top + c, d = l.height;
      let v = "100%", C = 0, A = g + d;
      a.style.width = v, a.style.left = `${C}px`, a.style.top = `${A}px`, a.style.visibility = "visible", this.host.dispatchEvent(new CustomEvent("PositionEvents/POSITION_CALCULATED", { bubbles: !0 }));
    }, this.calculatePosition = () => {
      var be, ve, Ce;
      const n = (be = this.host.findFirstCustomAncestor()) == null ? void 0 : be.querySelector(this.anchorSelector), a = (ve = this.host.findFirstCustomAncestor()) == null ? void 0 : ve.querySelector(this.popoutSelector);
      if (!n || !a) return;
      a.style.visibility = "hidden";
      const l = n.getBoundingClientRect(), c = window.scrollX, g = window.scrollY, d = document.documentElement.clientWidth, v = c + d, C = 0, A = l.top + g, ut = l.left + c, At = l.width + c, hs = l.height, tt = Math.max(a.scrollWidth, a.offsetWidth), Et = (Ce = a.offsetParent) == null ? void 0 : Ce.getBoundingClientRect(), cs = this.isRtl();
      let H = 0, xt = 0;
      for (const jt of this.positions)
        if (jt === "bottom") {
          if (xt = A + hs, cs) {
            let O = ut + l.width - tt;
            if (O < C + this.margin) {
              H = Math.min(c + this.margin, v - tt - this.margin);
              break;
            }
            H = O;
          } else {
            let O = ut;
            if (O + tt > v - this.margin) {
              H = Math.max(v - tt - this.margin, c + this.margin);
              break;
            }
            H = O;
          }
          break;
        } else if (jt === "left") {
          let O = -tt;
          if (l.x + O < C + this.margin)
            continue;
          H = O, xt = Et ? l.top - Et.top : A;
          break;
        } else if (jt === "right") {
          let O = At, ye = O + tt;
          if (l.x + ye > v - this.margin)
            continue;
          H = O, xt = Et ? l.top - Et.top : A;
          break;
        }
      a.style.top = `${xt}px`, a.style.left = `${H}px`, a.style.visibility = "visible", this.host.dispatchEvent(new CustomEvent("PositionEvents/POSITION_CALCULATED", { bubbles: !0 }));
    }, (this.host = t).addController(this), this.positions = e, this.anchorSelector = i, this.popoutSelector = r, this.margin = o, this.positions.push(
      "bottom"
      /* BOTTOM */
    );
  }
  hostConnected() {
  }
  isRtl() {
    return Ye.getContext().alignment === vt.RTL;
  }
}
var lr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, Z = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? hr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && lr(t, e, r), r;
};
let R = class extends p {
  constructor() {
    super(), this.brand = "", this.homeUrl = "", this.homeText = "", this.navLabel = "", this.logoImageUrl = "", this.logoAlt = "", this.onStateChanged = (s) => {
      var e;
      const t = s.detail;
      if (((e = t.mobileState) == null ? void 0 : e.isContextualNavOpen) !== void 0) {
        const i = t.mobileState.isContextualNavOpen;
        this.updateToggleState(i), i || this.keyboardController.deafen();
      }
    }, this.toggleMenu = () => {
      let s = !this.stateController.getState().mobileState.isContextualNavOpen;
      this.stateController.setState((t) => ({ mobileState: { ...t.mobileState, isContextualNavOpen: s } }));
    }, this.updateToggleState = (s) => {
      const t = this.querySelector("button.uhf-contextual-nav-trigger uhf-icon");
      t && t.setAttribute("iconName", s ? "ChevronUp" : "ChevronDown");
      const e = this.querySelector("uhf-popout.uhf-contextual-nav-popout");
      e && (s ? e.setAttribute("open", "") : e.removeAttribute("open"));
    }, this.handlePopoutOpened = (s) => {
      s.stopPropagation(), this.keyboardController.focusController.focusFirstMenuItem(), this.keyboardController.listen();
    }, this.handleOutsideClick = (s) => {
      this.stateController.getState().mobileState.isContextualNavOpen && !this.contains(s.target) && this.toggleMenu();
    }, this.breakpointController = new E(this), this.stateController = new X(this), this.keyboardController = new he(this, {
      onTab: (s, t) => {
        if (t.shiftKey)
          s.focusedIndex <= 0 ? this.toggleMenu() : (t.preventDefault(), s.focusPreviousItem());
        else {
          const e = s.getItemCount();
          s.focusedIndex >= e - 1 ? this.toggleMenu() : (t.preventDefault(), s.focusNextItem());
        }
      }
    }, "uhf-popout.uhf-contextual-nav-popout");
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("click", this.handleOutsideClick), this.addEventListener(D.POSITION_CALCULATED, this.handlePopoutOpened), this.addEventListener(T.STATE_CHANGED, this.onStateChanged);
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.handleOutsideClick), this.removeEventListener(D.POSITION_CALCULATED, this.handlePopoutOpened), this.removeEventListener(T.STATE_CHANGED, this.onStateChanged), super.disconnectedCallback();
  }
  render() {
    return u`
            <button class="uhf-contextual-nav-trigger" @click=${this.toggleMenu}>
                ${this.logoImageUrl ? u`<img src="${this.logoImageUrl}" alt="${this.logoAlt}" />` : this.brand}
                <uhf-icon iconName="ChevronDown" size=12></uhf-icon>
            </button>
            <nav class="uhf-contextual-nav ${this.breakpointController.getBreakpointClasses()}" role="navigation" aria-label=${ot(this.navLabel)} itemscope itemtype="https://schema.org/SiteNavigationElement">
                <uhf-popout 
                    targetSelector="button.uhf-contextual-nav-trigger"
                    positions="bottom"
                    margin="0"
                    class="uhf-contextual-nav-popout"
                >
                    <ul>
                        ${this.homeUrl && this.homeText ? u`<li><a class="uhf-nav-item uhf-nav-link" href="${this.homeUrl}">${this.homeText}</a></li>` : ""}
                        ${super.getChildren().map((s) => u`<li>${s}</li>`)}
                    </ul>
                </uhf-popout>
            </nav>
        `;
  }
};
Z([
  h({ type: String })
], R.prototype, "brand", 2);
Z([
  h({ type: String })
], R.prototype, "homeUrl", 2);
Z([
  h({ type: String })
], R.prototype, "homeText", 2);
Z([
  h({ type: String, attribute: "data-nav-label" })
], R.prototype, "navLabel", 2);
Z([
  h({ type: String, attribute: "logoimageurl" })
], R.prototype, "logoImageUrl", 2);
Z([
  h({ type: String, attribute: "logoalt" })
], R.prototype, "logoAlt", 2);
R = Z([
  f("uhf-contextual-nav-mobile")
], R);
class ts {
  constructor(t, e, i) {
    (this.host = t).addController(this), this.onResize = i, this.resizeElement = e, this.setupResizeObserver();
  }
  hostDisconnected() {
    this.cleanupResizeObserver();
  }
  setupResizeObserver() {
    "ResizeObserver" in globalThis ? (this.resizeObserver = new ResizeObserver(() => {
      this.onResize();
    }), this.resizeObserver.observe(this.resizeElement)) : globalThis.addEventListener("resize", this.onResize);
  }
  cleanupResizeObserver() {
    this.resizeObserver ? this.resizeObserver.disconnect() : globalThis.removeEventListener("resize", this.onResize);
  }
}
class cr {
  constructor(t, e = {}) {
    var i;
    this._isOverflowing = !1, this._visibleItems = 0, this._itemWidthCache = /* @__PURE__ */ new Map(), this._triggerWidth = 0, this._beforeWidth = 0, this._afterWidth = 0, this._hasMeasured = !1, this._calculateOverflow = async () => {
      var d;
      if (!this._menuContainer) return;
      const r = this._menuItems, o = !this._hasMeasured || this._itemsChanged(r);
      o && await this._measureMenuItems(r);
      const n = await this._getAvailableWidth();
      if (n === 0) return;
      const a = n - this._options.overflowBuffer - this._triggerWidth - this._beforeWidth - this._afterWidth;
      let l = 0, c = 0;
      for (const v of r) {
        const C = this._itemWidthCache.get(v) || 0;
        if (l += C, l <= a) {
          c++, v.classList.remove("hidden");
          continue;
        }
        break;
      }
      const g = this._visibleItems;
      this._visibleItems = c, this._isOverflowing = c < r.length, this._beforeContent.forEach((v) => v.classList.remove("hidden")), this._afterContent.forEach((v) => v.classList.remove("hidden")), this._isOverflowing && ((d = this._overflowTrigger) == null || d.classList.remove("hidden")), this._menuContainer.classList.add("overflow-ready"), (g !== this._visibleItems || o) && this._updateOverflowMenu(this.overflowDropdownContent);
    }, (this.host = t).addController(this), this._options = {
      overflowBuffer: e.overflowBuffer ?? 100,
      containerSelector: e.containerSelector ?? "",
      fixedSiblingWidths: e.fixedSiblingWidths ?? {}
    }, (i = this.host.updateComplete) == null || i.then(() => {
      const r = this._flexContainer || this.host.querySelector(".uhf-overflow-menu");
      this.resizeController = new ts(t, r, this._calculateOverflow);
    });
  }
  hostUpdated() {
    if (this._hasMeasured) {
      const t = this._menuItems;
      this._itemsChanged(t) && this._calculateOverflow();
    } else
      this._calculateOverflow();
  }
  /**
   * Measure every menu item and cache its width.  Items must be in the
   * layout (not display:none) for offsetWidth to be accurate.  On the
   * very first call the entire menu is still visibility:hidden (via CSS)
   * so the user never sees the momentarily-unhidden items.
   */
  async _measureMenuItems(t) {
    var r;
    this._itemWidthCache.clear();
    for (const o of t) {
      const n = await this._getEffectiveWidth(o);
      this._itemWidthCache.set(o, n), o.classList.add("hidden");
    }
    let e = 0;
    for (const o of this._beforeContent)
      e += await this._getEffectiveWidth(o);
    this._beforeWidth = e;
    let i = 0;
    for (const o of this._afterContent)
      i += await this._getEffectiveWidth(o);
    this._afterWidth = i, (r = this._overflowTrigger) == null || r.classList.remove("hidden"), this._triggerWidth = this._overflowTrigger ? await this._getEffectiveWidth(this._overflowTrigger) : 0, this._hasMeasured = !0;
  }
  /**
   * Compute the space available for menu items by measuring the ancestor
   * flex container and subtracting everything that isn't the overflow
   * menu's region.
   */
  async _getAvailableWidth() {
    const t = this._flexChild, e = this._flexContainer;
    if (!e || !t) return 0;
    const i = this._menuItems, r = this._overflowTrigger, o = this._beforeContent, n = this._afterContent;
    i.forEach((C) => C.classList.add("hidden")), r && r.classList.add("hidden"), o.forEach((C) => C.classList.add("hidden")), n.forEach((C) => C.classList.add("hidden"));
    const a = getComputedStyle(e), l = e.clientWidth - parseFloat(a.paddingLeft) - parseFloat(a.paddingRight), c = parseFloat(a.gap) || 0;
    let g = 0, d = 0;
    for (const C of Array.from(e.children)) {
      if (d++, C === t) continue;
      const A = C.tagName.toUpperCase();
      if (this._options.fixedSiblingWidths[A]) {
        g += this._options.fixedSiblingWidths[A];
        continue;
      }
      g += await this._getEffectiveWidth(C);
    }
    const v = d > 1 ? (d - 1) * c : 0;
    return l - g - v;
  }
  /**
   * Get the effective rendered width of an element. Elements with
   * display:contents or display:inline (e.g. custom elements without
   * explicit display) report offsetWidth as 0.  For those, recursively
   * sum the widths of their children until real boxes are found.
   */
  async _getEffectiveWidth(t) {
    if (t instanceof st && t.isUpdatePending && await t.updateComplete, t.offsetWidth > 0) return t.offsetWidth;
    let e = 0;
    for (const i of Array.from(t.children))
      e += await this._getEffectiveWidth(i);
    return e;
  }
  /**
   * Check whether the current DOM items differ from the cached set
   * (e.g. after a Lit re-render that creates new element clones).
   */
  _itemsChanged(t) {
    return t.length !== this._itemWidthCache.size ? !0 : t.some((e) => !this._itemWidthCache.has(e));
  }
  /**
   * Populate the overflow trigger's dropdown body with the given items.
   */
  _updateOverflowMenu(t) {
    const e = this.host.querySelector(".overflow-trigger div.uhf-dropdown-body");
    t && e && (e.innerHTML = "", t.forEach((i) => e.appendChild(i)));
  }
  // ── DOM Getters ──────────────────────────────────────────────────
  /** The inner wrapper div rendered by uhf-overflow-menu. */
  get _menuContainer() {
    return this.host.querySelector(".uhf-overflow-menu") || null;
  }
  /**
   * The ancestor flex container used to compute available width.
   * Uses the explicit `containerSelector` option when set, otherwise
   * walks up the DOM to find the nearest flex/grid parent.
   */
  get _flexContainer() {
    if (this._options.containerSelector)
      return this.host.closest(this._options.containerSelector) || null;
    let t = this.host.parentElement;
    for (; t; ) {
      const e = getComputedStyle(t).display;
      if (["flex", "inline-flex", "grid", "inline-grid"].includes(e))
        return t;
      t = t.parentElement;
    }
    return null;
  }
  /**
   * The direct child of the flex container that contains (or is an
   * ancestor of) this overflow menu.  Used to exclude "our" region
   * when summing sibling widths.
   */
  get _flexChild() {
    const t = this._flexContainer;
    if (!t) return null;
    let e = this.host;
    for (; e && e.parentElement !== t; )
      e = e.parentElement;
    return e;
  }
  /** The overflow dropdown trigger element. */
  get _overflowTrigger() {
    return this.host.querySelector(".overflow-trigger") || null;
  }
  /** Navigable items inside the items container. */
  get _menuItems() {
    const t = this.host.querySelector("div.uhf-overflow-menu-items");
    return t ? Array.from(t.children).filter(
      (e) => e.matches("uhf-dropdown, .uhf-nav-link")
    ) : [];
  }
  /** Non-collapsible content rendered before the collapsible items. */
  get _beforeContent() {
    const t = this.host.querySelector("div.uhf-overflow-menu-before");
    return t ? Array.from(t.children) : [];
  }
  /** Non-collapsible content rendered after the collapsible items. */
  get _afterContent() {
    const t = this.host.querySelector("div.uhf-overflow-menu-after");
    return t ? Array.from(t.children) : [];
  }
  // ── Overflow Item Conversion ─────────────────────────────────────
  _isNavLink(t) {
    return t.matches(".uhf-nav-link, a[href]");
  }
  _isDropdown(t) {
    return t.matches("uhf-dropdown");
  }
  _convertNavLinkToDropdownLink(t) {
    var l;
    const e = t.getAttribute("href") || "#", i = ((l = t.textContent) == null ? void 0 : l.trim()) || "", r = t.getAttribute("name") || "", o = t.getAttribute("data-m") || "", n = t.getAttribute("id") || "", a = document.createElement("a");
    return a.className = "uhf-nav-item uhf-dropdown-link", a.href = e, n && (a.id = n), a.setAttribute("name", r), a.setAttribute("data-m", o), a.textContent = i, a;
  }
  _convertDropdownToFlyout(t) {
    var l;
    const e = t.getAttribute("text") || ((l = t.textContent) == null ? void 0 : l.trim()) || "", i = t.getAttribute("name") || "", r = t.getAttribute("data-m") || "", o = t.getAttribute("id") || "", n = this._getDropdownDestination(t), a = document.createElement("uhf-flyout");
    return a.setAttribute("text", e), o && (a.id = o), a.setAttribute("name", i), a.setAttribute("data-m", r), a.replaceChildren(...n.content), a;
  }
  _getDropdownDestination(t) {
    const e = t.querySelectorAll("uhf-dropdown-column");
    if (e.length > 0)
      return {
        type: "multicolumn",
        content: Array.from(e).map((r) => this._convertColumnToTemplate(r))
      };
    const i = t.querySelectorAll(".uhf-dropdown-link, a[href]");
    return i.length > 0 ? {
      type: "submenu",
      content: Array.from(i).map((r) => this._convertLinkToTemplate(r))
    } : { type: "unknown", content: [] };
  }
  _convertColumnToTemplate(t) {
    var a;
    const e = ((a = t.querySelector(".uhf-dropdown-column-title")) == null ? void 0 : a.textContent) || t.getAttribute("title") || "", i = t.querySelectorAll(".uhf-dropdown-link, a[href]"), r = t.getAttribute("data-m") || "", o = Array.from(i).map(
      (l) => this._convertLinkToTemplate(l)
    ), n = document.createElement("uhf-flyout");
    return n.setAttribute("text", e), n.setAttribute("data-m", r), n.replaceChildren(...o), n;
  }
  _convertLinkToTemplate(t) {
    var l;
    const e = t.getAttribute("href") || "#", i = ((l = t.textContent) == null ? void 0 : l.trim()) || "", r = t.getAttribute("name") || "", o = t.getAttribute("data-m") || "", n = t.getAttribute("id") || "", a = document.createElement("a");
    return a.className = "uhf-nav-item uhf-dropdown-link", a.href = e, n && (a.id = n), a.setAttribute("name", r), a.setAttribute("data-m", o), a.textContent = i, a;
  }
  get overflowDropdownContent() {
    const t = [];
    return this.overflowItems.forEach((e) => {
      this._isNavLink(e) ? t.push(this._convertNavLinkToDropdownLink(e)) : this._isDropdown(e) && t.push(this._convertDropdownToFlyout(e));
    }), t;
  }
  // ── Public API ───────────────────────────────────────────────────
  get isOverflowing() {
    return this._isOverflowing;
  }
  get visibleItems() {
    return this._visibleItems;
  }
  get overflowItems() {
    return this._menuItems.slice(this._visibleItems);
  }
}
var ur = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, at = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? dr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && ur(t, e, r), r;
};
let K = class extends p {
  constructor() {
    super(...arguments), this.overflowText = "More", this.triggerDataM = "", this.containerSelector = "", this.overflowBuffer = 100, this.fixedSiblingWidths = "";
  }
  firstUpdated() {
    const s = {
      overflowBuffer: this.overflowBuffer,
      containerSelector: this.containerSelector || void 0
    };
    if (this.fixedSiblingWidths)
      try {
        s.fixedSiblingWidths = JSON.parse(this.fixedSiblingWidths);
      } catch {
      }
    this.overflowController = new cr(this, s);
  }
  render() {
    return u`
            <div class="uhf-overflow-menu">
                <div class="uhf-overflow-menu-before">
                    ${super.getChildrenBySlot("before")}
                </div>
                <div class="uhf-overflow-menu-items">
                    ${super.getChildrenBySlot("default")}
                </div>
                <uhf-dropdown
                    class="overflow-trigger"
                    text=${this.overflowText}
                    data-m=${this.triggerDataM}
                >
                </uhf-dropdown>
                <div class="uhf-overflow-menu-after">
                    ${super.getChildrenBySlot("after")}
                </div>
            </div>
        `;
  }
};
at([
  h({ type: String })
], K.prototype, "overflowText", 2);
at([
  h({ type: String })
], K.prototype, "triggerDataM", 2);
at([
  h({ type: String })
], K.prototype, "containerSelector", 2);
at([
  h({ type: Number })
], K.prototype, "overflowBuffer", 2);
at([
  h({ type: String })
], K.prototype, "fixedSiblingWidths", 2);
K = at([
  f("uhf-overflow-menu")
], K);
class pr {
  constructor(t, e) {
    this.host = t, this.host.addController(this), this.initialForm = e, this.formData = { ...e };
  }
  hostConnected() {
  }
  resetForm() {
    this.formData = { ...this.initialForm };
  }
  setFormData(t, e) {
    this.formData[t] = e;
  }
  get data() {
    return this.formData;
  }
}
class fr {
  constructor(t, e) {
    this.isLoading = !1, this.error = null, (this.host = t).addController(this), this.baseUrl = e;
  }
  hostConnected() {
  }
  hostDisconnected() {
    this.abortController && this.abortController.abort();
  }
  setIsLoading(t) {
    this.isLoading = t, this.host.dispatchEvent(new CustomEvent("ApiEvents/LOADING_CHANGED", {
      detail: { isLoading: t },
      bubbles: !1
    }));
  }
  async fetchData(t, e) {
    this.setIsLoading(!0), this.error = null, this.abortController && this.abortController.abort(), this.abortController = new AbortController();
    try {
      const i = await fetch(
        `${this.baseUrl}${t}`,
        {
          ...e,
          signal: (e == null ? void 0 : e.signal) || this.abortController.signal
        }
      );
      if (!i.ok)
        throw new Error(`Error: ${i.status} ${i.statusText}`);
      return await i.json();
    } catch (i) {
      return this.error = i.message, null;
    } finally {
      this.setIsLoading(!1), this.abortController = null;
    }
  }
  setBaseUrl(t) {
    this.baseUrl = t;
  }
}
var L = /* @__PURE__ */ ((s) => (s.TERM_CLICKED = "SearchEvents/TERM_CLICKED", s.AUTO_SUGGEST_UPDATED = "SearchEvents/AUTO_SUGGEST_UPDATED", s))(L || {});
function gr(s, t) {
  let e;
  return function(...i) {
    const r = this;
    clearTimeout(e), e = setTimeout(() => {
      s.apply(r, i);
    }, t);
  };
}
const es = (s, t, e, i, r, o) => {
  setTimeout(() => {
    s() ? t() : r > 0 ? es(s, t, i, i, r - 1, o) : console.warn(o);
  }, e);
};
class mr {
  constructor(t) {
    this.handleOutsideClick = (e) => {
      this.isOpen && !this.host.contains(e.target) && this.toggle();
    }, this.onEscapeClicked = (e) => {
      let i = this.host.querySelector("input[type='search']");
      i && i === document.activeElement ? this.toggle() : (e.setFocusIndex(-1), i == null || i.focus());
    }, this.boldText = (e, i) => {
      if (!i.trim()) return e;
      const r = new RegExp(`(${i})`, "gi");
      return e.replace(r, "<strong>$1</strong>");
    }, this.getImageUrl = (e) => e.startsWith("http") ? e : `https:${e}`, this.getSafeUrl = (e, i) => {
      const r = e == null ? void 0 : e.trim();
      if (!r) return null;
      const o = r.startsWith("//") ? `https:${r}` : r;
      try {
        const n = new URL(o, window.location.origin);
        if (n.protocol !== "http:" && n.protocol !== "https:")
          return null;
        const a = i == null ? void 0 : i.trim();
        return a && !n.searchParams.has("icid") && n.searchParams.set("icid", a), n.href;
      } catch {
        return null;
      }
    }, this.setAutoSuggestWidth = () => {
      var r;
      let e = (r = this.host.querySelector("input")) == null ? void 0 : r.scrollWidth, i = this.host.querySelector("uhf-popout");
      e && i && (i.style.width = `${e}px`);
    }, this.toggle = () => {
      let e = !this.isOpen;
      this.stateController.setState((i) => ({ searchState: { ...i.searchState, isSearchOpen: e } })), e ? (this.keyboardController.listen(), this.fetchSuggestions(!0)) : (this.formController.resetForm(), this.keyboardController.deafen(), this.keyboardController.focusController.setFocusIndex(-1), this.host.dispatchEvent(new CustomEvent(L.AUTO_SUGGEST_UPDATED, { detail: { autoSuggestResults: [] }, bubbles: !1 })));
    }, this.fetchSuggestions = (e = !1) => {
      var i;
      (i = this.apiController) == null || i.fetchData(`?${this.createAutoSuggestQueryString(e)}`).then((r) => {
        let o = this.processAutoSuggestResults(r);
        this.host.dispatchEvent(new CustomEvent(L.AUTO_SUGGEST_UPDATED, { detail: { autoSuggestResults: o }, bubbles: !1 }));
      });
    }, this.host = t, this.host.addController(this), this.stateController = new X(this.host), this.formController = new pr(this.host, { q: "" }), this.contextController = new U(this.host), this.keyboardController = new he(this.host, {
      onEscape: this.onEscapeClicked
    }, "uhf-popout"), this.debouncedAutoSuggestFetch = gr(this.fetchSuggestions, 300), this.host.updateComplete.then(() => {
      this.resizeController = new ts(this.host, this.host.querySelector("input.uhf-search-input"), this.setAutoSuggestWidth), this.apiController = new fr(this.host, this.host.autoSuggestUrl), this.setAutoSuggestWidth();
    });
  }
  hostConnected() {
    document.addEventListener("click", this.handleOutsideClick);
  }
  hostDisconnected() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
  createAutoSuggestQueryString(t = !1) {
    let e = this.host, i = {
      market: this.contextController.locale,
      clientId: e.clientId,
      sources: e.source,
      counts: e.productCount
    };
    return t ? (i.feature = "zerostate", i.site = window.location.origin.includes("localhost") ? "https://www.microsoft.com/en-us/" : window.location.origin + window.location.pathname) : i.query = this.query.trim(), new URLSearchParams(i).toString();
  }
  processAutoSuggestResults(t) {
    var o;
    let e = [], i = 0;
    const r = this.query;
    return (o = t == null ? void 0 : t.ResultSets) == null || o.forEach((n) => {
      n.Type == "product" ? n.Suggests.forEach((l) => {
        let c = document.createElement("uhf-autosuggest-item");
        c.setAttribute("text", this.boldText(l.Title, this.query));
        const g = this.getSafeUrl(l.Url, l.Icid);
        g && c.setAttribute("url", g), l.ImageUrl && c.setAttribute("imageUrl", this.getImageUrl(l.ImageUrl)), c.setAttribute("secondaryText", l.Source), c.setAttribute("position", i.toString()), c.setAttribute("query", r);
        const d = l.Pid;
        d && c.setAttribute("pid", d), l.Icid && c.setAttribute("icid", l.Icid), e.push(c), i++;
      }) : n.Type == "term" && n.Suggests.forEach((l) => {
        let c = document.createElement("uhf-autosuggest-item");
        if (c.setAttribute("text", this.boldText(l.Txt, r)), c.setAttribute("position", i.toString()), c.setAttribute("query", r), l.Url) {
          const g = this.getSafeUrl(l.Url, l.Icid);
          g && c.setAttribute("url", g);
        }
        l.Icid && c.setAttribute("icid", l.Icid), e.push(c), i++;
      });
    }), e;
  }
  setForm(t, e) {
    this.formController.setFormData(t, e), this.debouncedAutoSuggestFetch();
  }
  submit() {
    const t = this.query.trim();
    if (!t)
      return;
    this.host.dispatchEvent(new CustomEvent(L.AUTO_SUGGEST_UPDATED, { detail: { autoSuggestResults: [] }, bubbles: !1 }));
    const e = this.host.searchUrl.includes("?") ? "&" : "?";
    let i = `${this.host.searchUrl}${e}${this.host.queryParameterName}=${encodeURIComponent(t)}`;
    this.host.searchParams && (i += `&${this.host.searchParams}`), window.location.href = i;
  }
  get isOpen() {
    return this.stateController.getState().searchState.isSearchOpen || !1;
  }
  get query() {
    const t = this.host.queryParameterName || "q";
    return this.formController.data[t] ?? "";
  }
}
var br = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, x = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? vr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && br(t, e, r), r;
};
let S = class extends p {
  constructor() {
    super(), this.searchUrl = "", this.autoSuggestUrl = "https://www.microsoft.com/msstoreapiprod/api/autosuggest", this.zeroStateUrl = "", this.placeholder = "Search...", this.searchLabel = "", this.queryParameterName = "q", this.clientId = "7F27B536-CF6B-4C65-8638-A0F8CBDFCA65", this.productCount = "5,1,5", this.source = "Microsoft-Terms,Iris-Products,DCatAll-Products", this.cancelLabel = "Cancel", this.searchParams = "", this.autoSuggestResults = [], this.onBreakpointChanged = () => {
      this.requestUpdate();
    }, this.onStateChanged = (s) => {
      var e;
      const t = s.detail;
      if (((e = t.searchState) == null ? void 0 : e.isSearchOpen) !== void 0) {
        let i = t.searchState.isSearchOpen;
        this.classList.toggle("search-open", i);
        const r = this.querySelector(".uhf-search-container");
        r && r.classList.toggle("hidden", !i);
        const o = this.querySelector(".uhf-search-button");
        o && o.classList.toggle("hidden", i), i && this.querySelector("input").focus();
      }
    }, this.handleAutoSuggestUpdate = (s) => {
      const { autoSuggestResults: t } = s.detail;
      this.autoSuggestResults = t;
    }, this.handleTermClicked = (s) => {
      s.stopImmediatePropagation();
      const { term: t } = s.detail;
      this.searchController.setForm(this.queryParameterName, t), this.searchController.submit();
    }, this.onChange = (s) => {
      const t = s.target;
      this.searchController.setForm(this.queryParameterName, t.value);
    }, this.onSubmit = (s) => {
      s.preventDefault(), this.searchController.submit();
    }, this.searchController = new mr(this), this.breakpointController = new E(this), this.stateController = new X(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener(L.AUTO_SUGGEST_UPDATED, this.handleAutoSuggestUpdate), this.addEventListener(L.TERM_CLICKED, this.handleTermClicked), this.addEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged), this.addEventListener(T.STATE_CHANGED, this.onStateChanged);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener(L.AUTO_SUGGEST_UPDATED, this.handleAutoSuggestUpdate), this.removeEventListener(L.TERM_CLICKED, this.handleTermClicked), this.removeEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged), this.removeEventListener(T.STATE_CHANGED, this.onStateChanged), this.searchController.isOpen && this.searchController.toggle();
  }
  render() {
    return u`
            <div class="uhf-search-container hidden">
                ${this.breakpointController.isMobile ? u`
                    <button 
                        class="uhf-search-cancel ${this.breakpointController.getBreakpointClasses()}" 
                        @click=${this.searchController.toggle} 
                        aria-label="Back"
                        data-m='{"compnm":"UHF","view":"UHF","pa":"UniversalSearch","cN":"Close Search","ecn":"Close Search"}'
                    >
                        <uhf-icon iconName="Back" size=15></uhf-icon>
                    </button>
                ` : ""}
                <form class="uhf-search-form" itemscope itemtype="https://schema.org/SearchAction" @submit=${this.onSubmit}>
                    <meta itemprop="target" content="${this.searchUrl}?${this.queryParameterName}={search_term_string}"/>
                    <input 
                        type="search" 
                        name="${this.queryParameterName}" 
                        class="uhf-search-input ${this.breakpointController.getBreakpointClasses()}" 
                        .placeholder="${this.placeholder}" 
                        title="${this.placeholder}"
                        @input=${this.onChange}
                        .value="${this.searchController.query}" 
                        autocomplete="off"
                        role="combobox"
                        tabindex="0"
                        aria-expanded="${this.searchController.isOpen}"
                        aria-controls="uhf-autosuggest-popout"
                        itemprop="query-input"
                        data-bi-srchq="${this.searchController.query}"
                        data-m='{"compnm": "UHF", "view": "UHF", "pa": "UniversalSearch", "cN":"SearchBox", "ecn":"SearchBox"}'
                    />
                    <button type="submit" 
                    class="uhf-search-submit-button" 
                    aria-label="${this.searchLabel}"
                    title="${this.searchLabel}"
                    data-bi-srchq="${this.searchController.query}"
                    data-m=${JSON.stringify({ compnm: "UHF", view: "UHF", pa: "UniversalSearch", cN: "Search_nav", ecn: "Search_nav", bhvr: 61, srchq: this.searchController.query, srchtype: "manual" })}
                    >
                    <uhf-icon iconName="Search" size="16"></uhf-icon>
                    </button>
                </form>
                ${this.breakpointController.isMobile ? "" : u`
                    <button class="uhf-search-cancel" @click=${this.searchController.toggle}
                        data-m='{"compnm":"UHF","view":"UHF","pa":"UniversalSearch","cN":"Close Search","ecn":"Close Search"}'>
                        ${this.cancelLabel}
                    </button>
                `}
            </div>
            <button 
                class="uhf-nav-item uhf-nav-button uhf-search-button" 
                @click=${this.searchController.toggle}
                aria-label="${this.placeholder || this.searchLabel}"
                title="${this.placeholder}"
                data-m='{"compnm": "UHF", "view": "UHF", "pa": "UniversalSearch", "cN":"Search_nav", "ecn":"Search_nav", "bhvr": 62}'
            >
                <span class="uhf-search-text">${this.searchLabel}</span>
                <uhf-icon iconName="Search"></uhf-icon>
            </button>
            <uhf-popout 
                class="uhf-autosuggest"
                ?open="${this.autoSuggestResults.length > 0 && this.searchController.isOpen}"
                targetSelector="input.uhf-search-input"
                positions="bottom"
                style=""
                id="uhf-autosuggest-popout"
                role="listbox"
                disableMobilePositioning
            >
                ${this.autoSuggestResults}
            </uhf-popout>
        `;
  }
};
x([
  h({ type: String })
], S.prototype, "searchUrl", 2);
x([
  h({ type: String })
], S.prototype, "autoSuggestUrl", 2);
x([
  h({ type: String })
], S.prototype, "zeroStateUrl", 2);
x([
  h({ type: String })
], S.prototype, "placeholder", 2);
x([
  h({ type: String, attribute: "search-label" })
], S.prototype, "searchLabel", 2);
x([
  h({ type: String })
], S.prototype, "queryParameterName", 2);
x([
  h({ type: String })
], S.prototype, "clientId", 2);
x([
  h({ type: String })
], S.prototype, "productCount", 2);
x([
  h({ type: String })
], S.prototype, "source", 2);
x([
  h({ type: String, attribute: "cancel-label" })
], S.prototype, "cancelLabel", 2);
x([
  h({ type: String, attribute: "search-params" })
], S.prototype, "searchParams", 2);
x([
  Q()
], S.prototype, "autoSuggestResults", 2);
S = x([
  f("uhf-search")
], S);
var Cr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, ce = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? yr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && Cr(t, e, r), r;
};
let It = class extends p {
  constructor() {
    super(...arguments), this.iconName = "", this.size = 16;
  }
  render() {
    return u`
            <i class="ms-Icon ms-Icon--${this.iconName}" style="font-size: ${this.size}px;"></i>
        `;
  }
};
ce([
  h({ type: String })
], It.prototype, "iconName", 2);
ce([
  h({ type: Number })
], It.prototype, "size", 2);
It = ce([
  f("uhf-icon")
], It);
var _r = Object.defineProperty, wr = Object.getOwnPropertyDescriptor, lt = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? wr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && _r(t, e, r), r;
};
let V = class extends p {
  constructor() {
    super(), this.cartUrl = "", this.cartCountUrl = "https://www.microsoft.com/store/buy/cartcount", this.cartLabel = "", this.cartCountText = "items in cart", this.cartCount = 0, this.normalizeCartCountUrl = () => this.cartCountUrl && this.cartCountUrl.startsWith("//") ? `https:${this.cartCountUrl}` : this.cartCountUrl, this.handleCartUpdates = (s) => {
      var t;
      try {
        if (typeof s.data != "string") return;
        if (((t = this.getAttribute("data-src-dmn-chk")) == null ? void 0 : t.trim().toLowerCase()) !== "false") {
          const o = this.normalizeCartCountUrl();
          if (!o) return;
          let n;
          try {
            n = new URL(o).origin;
          } catch {
            console.warn("[UHF Cart] Invalid cartCountUrl:", o);
            return;
          }
          if (s.origin !== n) return;
        }
        const e = s.data.indexOf("="), i = e === -1 ? s.data : s.data.slice(0, e), r = e === -1 ? "" : s.data.slice(e + 1);
        if (i !== "DR_Cart_Count") return;
        this.cartCount = /^\d+$/.test(r) ? parseInt(r, 10) : 0;
      } catch (e) {
        console.warn("[UHF Cart] Cart count processing failed", e);
      }
    };
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("message", this.handleCartUpdates);
  }
  disconnectedCallback() {
    window.removeEventListener("message", this.handleCartUpdates), super.disconnectedCallback();
  }
  render() {
    return u`
            <iframe id="uhf-cart-count-iframe" src="${this.normalizeCartCountUrl()}"></iframe>
            <a 
                href="${this.cartUrl}" 
                class="uhf-nav-item uhf-nav-button uhf-cart" 
                aria-label="${this.cartLabel}" 
                title="${this.cartCount} ${this.cartCountText}"
                data-m='{"compnm": "UHF", "view": "UHF", "pa": "UniversalHeader", "cN":"GlobalNav_Cart_Nav", "bhvr": 82}'
            >
                <span class="uhf-cart-text">${this.cartLabel}</span>
                <uhf-icon iconName="ShoppingCart"></uhf-icon>
                <span class="uhf-cart-count ${this.cartCount === 0 ? "hidden" : ""}">${this.cartCount}</span>
            </a>
        `;
  }
};
lt([
  h({ type: String })
], V.prototype, "cartUrl", 2);
lt([
  h({ type: String })
], V.prototype, "cartCountUrl", 2);
lt([
  h({ type: String, attribute: "cart-label" })
], V.prototype, "cartLabel", 2);
lt([
  h({ type: String, attribute: "cart-count-text" })
], V.prototype, "cartCountText", 2);
lt([
  Q()
], V.prototype, "cartCount", 2);
V = lt([
  f("uhf-cart")
], V);
var $r = Object.defineProperty, Sr = Object.getOwnPropertyDescriptor, ue = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Sr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && $r(t, e, r), r;
};
let Dt = class extends p {
  constructor() {
    super(), this.text = "Menu", this.dataM = "", this.onBreakpointChanged = () => {
      this.requestUpdate();
    }, this.breakpointController = new E(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged);
  }
  disconnectedCallback() {
    this.removeEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged), super.disconnectedCallback();
  }
  render() {
    return this.breakpointController.isMobile ? u`
                <uhf-dropdown-mobile text=${this.text} ?debug=${this.debug} data-m=${this.dataM}>
                    ${super.getChildren()}
                </uhf-dropdown-mobile>
            ` : u`
            <uhf-dropdown-desktop text=${this.text} ?debug=${this.debug} data-m=${this.dataM}>
                ${super.getChildren()}
            </uhf-dropdown-desktop>
        `;
  }
};
ue([
  h({ type: String })
], Dt.prototype, "text", 2);
ue([
  h({ type: String, attribute: "data-m" })
], Dt.prototype, "dataM", 2);
Dt = ue([
  f("uhf-dropdown")
], Dt);
class Ar {
  constructor() {
    this.subscribers = [], window.addEventListener("keydown", (t) => this.notify(t));
  }
  notify(t) {
    if (this.subscribers.length === 0) return;
    const e = this.subscribers[this.subscribers.length - 1];
    e(t);
  }
  subscribe(t) {
    this.subscribers.push(t);
  }
  unsubscribe() {
    this.subscribers.pop();
  }
  clearAll() {
    this.subscribers = [];
  }
}
const Er = new Ar();
var G = /* @__PURE__ */ ((s) => (s.TOGGLE = "DropdownEvents/TOGGLE", s.CLOSE_VIA_TAB = "DropdownEvents/CLOSE_VIA_TAB", s))(G || {});
class ss {
  constructor(t) {
    this.isOpen = !1, this.margin = 16, this.keyboardService = Er, this.handleKeyDown = (e) => {
      var i;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), this.focusController.focusNextItem();
          break;
        case "ArrowUp":
          e.preventDefault(), this.focusController.focusPreviousItem();
          break;
        case "Home":
          e.preventDefault(), this.focusController.focusFirstMenuItem();
          break;
        case "End":
          e.preventDefault(), this.focusController.focusLastMenuItem();
          break;
        case "Escape":
          e.preventDefault(), this.toggle(), (i = this.host.querySelector(this.buttonQuery)) == null || i.focus();
          break;
        case "Tab":
          if (e.shiftKey)
            this.focusController.focusedIndex <= 0 ? (this.toggle(), this.host.dispatchEvent(new CustomEvent("DropdownEvents/CLOSE_VIA_TAB", {
              bubbles: !0,
              detail: { originalEvent: e }
            }))) : (e.preventDefault(), this.focusController.focusPreviousItem());
          else {
            const r = this.focusController.getItemCount();
            this.focusController.focusedIndex >= r - 1 ? (this.toggle(), this.host.dispatchEvent(new CustomEvent("DropdownEvents/CLOSE_VIA_TAB", {
              bubbles: !0,
              detail: { originalEvent: e }
            }))) : (e.preventDefault(), this.focusController.focusNextItem());
          }
          break;
        case "Enter":
        case " ":
          this.focusController.focusedIndex >= 0 && (e.preventDefault(), this.focusController.activateCurrentItem());
          break;
      }
    }, this.handleOutsideClick = (e) => {
      !this.host.contains(e.target) && this.isOpen && (this.toggle(), this.keyboardService.clearAll());
    }, this.toggle = () => {
      this.isOpen = !this.isOpen, this.isOpen ? this.keyboardService.subscribe(this.handleKeyDown) : (this.keyboardService.unsubscribe(), this.focusController.focusedIndex = -1), this.host.dispatchEvent(new CustomEvent("DropdownEvents/TOGGLE", {
        detail: { isOpen: this.isOpen },
        bubbles: !1
      }));
    }, this.afterPopoutOpened = (e) => {
      e.stopImmediatePropagation();
    }, this.host = t, this.host.addController(this), this.focusController = new Ze(this.host, "uhf-popout"), this.buttonQuery = "button.uhf-nav-item";
  }
  hostConnected() {
    document.addEventListener("click", this.handleOutsideClick);
  }
  hostDisconnected() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
}
var xr = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, de = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Or(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && xr(t, e, r), r;
};
let Ut = class extends p {
  constructor() {
    super(), this.text = "Menu", this.dataM = "", this.hasColumns = !1, this.onChildClosedViaTab = (s) => {
      if (s.target === this || !this.dropdownController.isOpen) return;
      s.stopPropagation();
      const { originalEvent: t } = s.detail, i = s.target.querySelector("button.uhf-flyout-trigger"), r = this.querySelector("uhf-popout.uhf-dropdown-menu");
      if (!r) return;
      const n = Array.from(r.querySelectorAll(Xe.join(", "))).filter((l) => !l.closest("uhf-flyout-desktop uhf-popout")), a = i ? n.indexOf(i) : -1;
      t.shiftKey ? a >= 0 && (t.preventDefault(), i.focus(), this.dropdownController.focusController.focusedIndex = a) : a >= 0 && a < n.length - 1 ? (t.preventDefault(), n[a + 1].focus(), this.dropdownController.focusController.focusedIndex = a + 1) : this.dropdownController.toggle();
    }, this.onToggle = () => {
      const s = this.dropdownController.isOpen, t = this.querySelector("button.uhf-nav-item");
      t && (t.classList.toggle("open", s), t.setAttribute("aria-expanded", String(s)));
      const e = this.querySelector("uhf-popout");
      e && (s ? e.setAttribute("open", "") : e.removeAttribute("open"));
    }, this.dropdownController = new ss(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.hasColumns = this.checkHasColumns(), this.addEventListener(D.POSITION_CALCULATED, this.dropdownController.afterPopoutOpened), this.addEventListener(G.TOGGLE, this.onToggle), this.addEventListener(G.CLOSE_VIA_TAB, this.onChildClosedViaTab);
  }
  disconnectedCallback() {
    this.removeEventListener(D.POSITION_CALCULATED, this.dropdownController.afterPopoutOpened), this.removeEventListener(G.TOGGLE, this.onToggle), this.removeEventListener(G.CLOSE_VIA_TAB, this.onChildClosedViaTab), super.disconnectedCallback();
  }
  checkHasColumns() {
    return super.getChildren().some((t) => t.nodeName.toLowerCase() === "uhf-dropdown-column");
  }
  render() {
    return u`
            <button 
                @click="${this.dropdownController.toggle}" 
                class="uhf-nav-item uhf-nav-button uhf-dropdown-trigger ${this.dropdownController.isOpen ? "open" : ""}" 
                role="button" 
                aria-haspopup="true"
                aria-expanded="${this.dropdownController.isOpen}"
                data-m=${this.dataM}
            >
                ${this.text}
                <uhf-icon iconName="ChevronDown" size=8></uhf-icon>
            </button>

            <uhf-popout 
                targetSelector="button.uhf-nav-item"
                ?open="${this.dropdownController.isOpen}"
                class="uhf-dropdown-menu"
            >
                ${super.getChildrenBySlot("header")}
                <div class="uhf-dropdown-body ${this.hasColumns ? "has-columns" : "no-columns"}">
                    ${super.getChildrenBySlot("default")}
                </div>
                ${super.getChildrenBySlot("footer")}
            </uhf-popout>
        `;
  }
};
de([
  h({ type: String })
], Ut.prototype, "text", 2);
de([
  h({ type: String, attribute: "data-m" })
], Ut.prototype, "dataM", 2);
Ut = de([
  f("uhf-dropdown-desktop")
], Ut);
var Tr = Object.defineProperty, Lr = Object.getOwnPropertyDescriptor, rs = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Lr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && Tr(t, e, r), r;
};
let te = class extends p {
  constructor() {
    super(), this.text = "", this.isOpen = !1, this.toggle = () => {
      this.isOpen = !this.isOpen, this.updateToggleState();
    }, this.onStateChanged = (s) => {
      var e, i;
      const t = s.detail;
      t.mobileState && (!((e = t.mobileState) != null && e.isContextualNavOpen) || !((i = t.mobileState) != null && i.isGlobalNavOpen)) && this.isOpen && (this.isOpen = !1, this.updateToggleState());
    }, this.updateToggleState = () => {
      const s = this.querySelector("button.uhf-dropdown-trigger-mobile");
      s && s.classList.toggle("open", this.isOpen);
      const t = this.querySelector("uhf-icon");
      t && t.setAttribute("iconName", this.isOpen ? "ChevronUp" : "ChevronDown");
      const e = this.querySelector(".uhf-dropdown-container");
      e && e.classList.toggle("hidden", !this.isOpen);
    }, this.stateController = new X(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener(T.STATE_CHANGED, this.onStateChanged);
  }
  disconnectedCallback() {
    this.removeEventListener(T.STATE_CHANGED, this.onStateChanged), super.disconnectedCallback();
  }
  render() {
    return u`
            <button class="uhf-dropdown-trigger-mobile ${this.isOpen ? "open" : ""}" @click=${this.toggle}>
                <span class="uhf-dropdown-trigger-mobile-text">${this.text}</span>
                <uhf-icon iconName="${this.isOpen ? "ChevronUp" : "ChevronDown"}" size=12></uhf-icon>
            </button>
            <div class="uhf-dropdown-container ${this.isOpen ? "" : "hidden"}">
                <ul>
                    ${super.getChildren().map((s) => u`<li>${s}</li>`)}
                </ul>
            </div>
        `;
  }
};
rs([
  h({ type: String })
], te.prototype, "text", 2);
te = rs([
  f("uhf-dropdown-mobile")
], te);
var Pr = Object.getOwnPropertyDescriptor, Ir = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Pr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = n(r) || r);
  return r;
};
let ke = class extends p {
  constructor() {
    super(), this.breakpointController = new E(this, !0);
  }
  render() {
    return u`
            <ul class="uhf-dropdown-header">
                ${super.getChildren().map((s) => u`<li>${s}</li>`)} 
            </ul>
        `;
  }
};
ke = Ir([
  f("uhf-dropdown-header")
], ke);
var Dr = Object.defineProperty, Ur = Object.getOwnPropertyDescriptor, pe = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Ur(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && Dr(t, e, r), r;
};
let kt = class extends p {
  constructor() {
    super(), this.columnTitle = "", this.showTooltip = "true", this.onBreakpointChanged = () => {
      this.requestUpdate();
    }, this.breakpointController = new E(this, !0);
  }
  connectedCallback() {
    super.connectedCallback(), this.columnTitle || (this.columnTitle = this.getAttribute("title") || ""), this.showTooltip === "false" && this.setAttribute("title", ""), this.addEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged);
  }
  disconnectedCallback() {
    this.removeEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged), super.disconnectedCallback();
  }
  render() {
    return this.breakpointController.isMobile ? u`
                <uhf-dropdown-mobile text="${this.columnTitle}">
                    ${super.getChildren()}
                </uhf-dropdown-mobile>
            ` : u`
            <div class="uhf-dropdown-column-title">${this.columnTitle}</div>
            <ul>
                ${super.getChildren().map((s) => u`<li>${s}</li>`)}
            </ul>
        `;
  }
};
pe([
  h({ type: String })
], kt.prototype, "columnTitle", 2);
pe([
  h({ type: String, attribute: "show-tooltip" })
], kt.prototype, "showTooltip", 2);
kt = pe([
  f("uhf-dropdown-column")
], kt);
var kr = Object.getOwnPropertyDescriptor, Nr = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? kr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = n(r) || r);
  return r;
};
let Ne = class extends p {
  constructor() {
    super(), this.breakpointController = new E(this, !0);
  }
  render() {
    return u`
            ${super.getChildren()}
        `;
  }
};
Ne = Nr([
  f("uhf-dropdown-footer")
], Ne);
var Br = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, fe = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Mr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && Br(t, e, r), r;
};
let Nt = class extends p {
  constructor() {
    super(), this.text = "", this.dataM = "", this.onBreakpointChanged = () => {
      this.requestUpdate();
    }, this.breakpointController = new E(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged);
  }
  disconnectedCallback() {
    this.removeEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged), super.disconnectedCallback();
  }
  render() {
    return this.breakpointController.isMobile ? u`
                <uhf-dropdown-mobile text="${this.text}" data-m=${this.dataM}>
                    ${super.getChildren()}
                </uhf-dropdown-mobile>
            ` : u`
            <uhf-flyout-desktop text="${this.text}" data-m=${this.dataM}>
                ${super.getChildren()}
            </uhf-flyout-desktop>
        `;
  }
};
fe([
  h({ type: String })
], Nt.prototype, "text", 2);
fe([
  h({ type: String, attribute: "data-m" })
], Nt.prototype, "dataM", 2);
Nt = fe([
  f("uhf-flyout")
], Nt);
var Rr = Object.defineProperty, Hr = Object.getOwnPropertyDescriptor, ge = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Hr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && Rr(t, e, r), r;
};
let Bt = class extends p {
  constructor() {
    super(), this.text = "", this.dataM = "", this.onToggle = () => {
      const s = this.flyoutController.isOpen, t = this.querySelector("button.uhf-flyout-trigger");
      t && (t.classList.toggle("open", s), t.setAttribute("aria-expanded", String(s)));
      const e = this.querySelector("uhf-popout");
      e && (s ? e.setAttribute("open", "") : e.removeAttribute("open"));
    }, this.onMouseEnter = () => {
      this.flyoutController.isOpen || this.flyoutController.toggle();
    }, this.onMouseLeave = (s) => {
      const t = s.relatedTarget, e = this.querySelector("uhf-popout");
      this.flyoutController.isOpen && e && !e.contains(t) && this.flyoutController.toggle();
    }, this.flyoutController = new ss(this), this.contextController = new U(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener(D.POSITION_CALCULATED, this.flyoutController.afterPopoutOpened), this.addEventListener(G.TOGGLE, this.onToggle);
  }
  disconnectedCallback() {
    this.removeEventListener(D.POSITION_CALCULATED, this.flyoutController.afterPopoutOpened), this.removeEventListener(G.TOGGLE, this.onToggle), super.disconnectedCallback();
  }
  render() {
    return u`
        <div 
            class="uhf-nav-item-wrapper"
            @mouseenter=${this.onMouseEnter}
            @mouseleave=${this.onMouseLeave}
        >
            <button 
                class="uhf-nav-item uhf-dropdown-button uhf-flyout-trigger ${this.flyoutController.isOpen ? "open" : ""}" 
                @click=${this.flyoutController.toggle}
                aria-haspopup="true"
                aria-expanded="${this.flyoutController.isOpen}"
                data-m=${this.dataM}
            >
                <span class="uhf-flyout-text">${this.text}</span>
                <uhf-icon 
                    iconName="${this.contextController.alignment === vt.LTR ? "ChevronRight" : "ChevronLeft"}" 
                    size=8
                >
                </uhf-icon>
            </button>
            <uhf-popout 
                class="uhf-flyout"
                ?open="${this.flyoutController.isOpen}"
                targetSelector="button.uhf-flyout-trigger"
                positions="${this.contextController.alignment === vt.RTL ? "left,right" : "right,left"}"
            >
                ${super.getChildren()}
            </uhf-popout>
        </div>
        `;
  }
};
ge([
  h({ type: String })
], Bt.prototype, "text", 2);
ge([
  h({ type: String, attribute: "data-m" })
], Bt.prototype, "dataM", 2);
Bt = ge([
  f("uhf-flyout-desktop")
], Bt);
var Fr = Object.getOwnPropertyDescriptor, qr = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Fr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = n(r) || r);
  return r;
};
let Be = class extends p {
  constructor() {
    super(), this.contextController = new U(this);
  }
  firstUpdated() {
    requestAnimationFrame(() => this.updateLocaleLinks());
  }
  normalizeLocale(s) {
    return (s ?? "").trim().replace(/_/g, "-").toLowerCase();
  }
  buildHref(s, t) {
    return `${s.origin}${t}${s.search}${s.hash}`;
  }
  updateLocaleLinks() {
    const s = this.normalizeLocale(this.contextController.locale), t = new URL(window.location.href), e = t.pathname;
    Array.from(this.querySelectorAll("a[data-uhf-locale]")).forEach((r) => {
      const o = r.getAttribute("data-uhf-locale");
      if (!o) return;
      const n = this.resolveLocale(o, s), a = this.replaceLocaleInPath(e, s, n);
      r.setAttribute("href", this.buildHref(t, a));
    });
  }
  resolveLocale(s, t) {
    const e = this.normalizeLocale(s);
    if (e.includes("-"))
      return e;
    const i = this.normalizeLocale(t).split("-").filter(Boolean);
    return i.length <= 1 ? e : [e, ...i.slice(1)].join("-");
  }
  replaceLocaleInPath(s, t, e) {
    const i = s.split("/").filter(Boolean);
    if (i.length === 0)
      return "/" + e;
    const r = this.normalizeLocale(t), o = i.map((a) => this.normalizeLocale(a)), n = o.findIndex((a) => a === r);
    if (n >= 0)
      i[n] = e;
    else {
      const a = o.findIndex((l) => this.looksLikeLocale(l));
      a >= 0 ? i[a] = e : i.unshift(e);
    }
    return "/" + i.join("/");
  }
  looksLikeLocale(s) {
    return /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-[a-z0-9]{5,8})*$/i.test(s);
  }
  render() {
    const s = this.contextController.getLocaleLabel();
    return u` <uhf-dropdown class="uhf-header-locale-picker" text="${s}"> ${super.getChildren()} </uhf-dropdown> `;
  }
};
Be = qr([
  f("uhf-locale-picker")
], Be);
var Gr = Object.defineProperty, jr = Object.getOwnPropertyDescriptor, is = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? jr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && Gr(t, e, r), r;
};
let ee = class extends p {
  constructor() {
    super(), this.theme = "light", this.contextController = new U(this);
  }
  connectedCallback() {
    const s = this.theme === "dark" ? $.DARK : $.LIGHT;
    this.contextController.setContext({ footerTheme: s }), super.connectedCallback();
  }
  willUpdate(s) {
    if (s.has("theme")) {
      const t = this.theme === "dark" ? $.DARK : $.LIGHT;
      this.contextController.setContext({ footerTheme: t });
    }
  }
  render() {
    return u`
            <footer id="uhf-footer" class="uhf-footer c-uhff ${this.contextController.getFooterThemeClasses()}" itemscope itemtype="https://schema.org/WPFooter">
                ${super.getChildrenBySlot("uhf-footer-nav")}
                <div class="uhf-footer-base">
                    <div class="uhf-footer-legal-links">
                        ${this.checkIfSlotExists("uhf-footer-locale-picker") ? u`
                            <div class="uhf-footer-locale-picker-container">
                                <uhf-icon iconName="World" size="20"></uhf-icon>
                                ${super.getChildrenBySlot("uhf-footer-locale-picker")}
                            </div>
                        ` : ""}
                        ${super.getChildrenBySlot("uhf-footer-california-privacy-link")}
                        ${super.getChildrenBySlot("uhf-footer-consumer-health-privacy-link")}
                    </div>
                    ${super.getChildrenBySlot("uhf-footer-menu")}
                </div>
                ${super.getChildrenBySlot("uhf-footer-regional-content")}
            </footer>
        `;
  }
};
is([
  h({ type: String })
], ee.prototype, "theme", 2);
ee = is([
  f("uhf-footer")
], ee);
var Wr = Object.getOwnPropertyDescriptor, zr = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Wr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = n(r) || r);
  return r;
};
let Me = class extends p {
  constructor() {
    super();
  }
  render() {
    return u`
            <nav class="uhf-footer-nav" aria-label="Footer Resource links" itemscope itemtype="https://schema.org/SiteNavigationElement">
                ${super.getChildren()}
            </nav>
        `;
  }
};
Me = zr([
  f("uhf-footer-nav")
], Me);
var Kr = Object.defineProperty, Vr = Object.getOwnPropertyDescriptor, os = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Vr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && Kr(t, e, r), r;
};
let se = class extends p {
  constructor() {
    super(), this.heading = "";
  }
  render() {
    return u`
                <h2 class="uhf-footer-nav-group-heading">${this.heading}</h2>
                <ul class="uhf-footer-nav-group-links">
                    ${super.getChildren().map((s) => u`<li>${s}</li>`)}
                </ul>
        `;
  }
};
os([
  h({ type: String })
], se.prototype, "heading", 2);
se = os([
  f("uhf-footer-nav-group")
], se);
var Jr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, ns = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? Yr(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && Jr(t, e, r), r;
};
let re = class extends p {
  constructor() {
    super(), this.navLabel = "";
  }
  firstUpdated() {
    var t;
    let s = (t = document.getElementById("uhf-Footer_ManageCookies")) == null ? void 0 : t.parentElement;
    s && s.classList.add("hidden");
  }
  render() {
    return u`
            <nav class="uhf-footer-menu" aria-label=${ot(this.navLabel)} itemscope itemtype="https://schema.org/SiteNavigationElement">
                <ul>
                    ${super.getChildren().map((s) => u`<li>${s}</li>`)}
                    <li>© Microsoft ${(/* @__PURE__ */ new Date()).getFullYear()}</li>
                </ul>
            </nav>
        `;
  }
};
ns([
  h({ type: String, attribute: "data-nav-label" })
], re.prototype, "navLabel", 2);
re = ns([
  f("uhf-footer-menu")
], re);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qr = { CHILD: 2 }, Xr = (s) => (...t) => ({ _$litDirective$: s, values: t });
class Zr {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ie extends Zr {
  constructor(t) {
    if (super(t), this.it = b, t.type !== Qr.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === b || t == null) return this._t = void 0, this.it = t;
    if (t === z) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const e = [t];
    return e.raw = e, this._t = { _$litType$: this.constructor.resultType, strings: e, values: [] };
  }
}
ie.directiveName = "unsafeHTML", ie.resultType = 1;
const Qt = Xr(ie);
var ti = Object.defineProperty, ei = Object.getOwnPropertyDescriptor, N = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? ei(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && ti(t, e, r), r;
};
let I = class extends p {
  constructor() {
    super(), this.text = "", this.url = "", this.imageUrl = null, this.secondaryText = null, this.position = 0, this.query = "", this.pid = "", this.icid = "", this.onTermClick = (s) => {
      this.dispatchEvent(new CustomEvent(L.TERM_CLICKED, {
        detail: {
          term: s.target.innerText
        },
        bubbles: !0
      }));
    }, this.handleProductInteraction = () => {
      this.dispatchEvent(new CustomEvent(L.AUTO_SUGGEST_UPDATED, {
        detail: { autoSuggestResults: [] },
        bubbles: !0
      }));
    };
  }
  // Builds declarative data-m JSON for an autosuggest item. The 1DS SDK
  // auto-emits a typed BC 60 (SEARCHAUTOCOMPLETE) beacon on click — no
  // manual JS call required. 
  buildDataM() {
    const s = this.text.replace(/<[^>]*>/g, ""), t = !!this.imageUrl, e = {
      compnm: "UHF",
      view: "UHF",
      pa: "UniversalSearch",
      cN: s,
      ecn: s,
      bhvr: 60,
      cT: t ? "4" : "0",
      srchq: this.query,
      srchtype: "auto suggest",
      asdisplayed: !0,
      aslinkpos: String(this.position),
      qrylngth: String(this.query.length),
      resultselected: s
    };
    return this.pid && (e.pid = this.pid), JSON.stringify(e);
  }
  render() {
    return this.imageUrl ? u`
                <li role="presentation">
                    <a href="${this.url}" class="uhf-autosuggest-link" role="option" tabindex="0"
                        @click=${this.handleProductInteraction}
                        @auxclick=${this.handleProductInteraction}
                        data-bi-srchq="${this.query}"
                        data-m=${this.buildDataM()}>
                        <img src="${this.imageUrl}" alt="${this.text}" />
                        <div class="uhf-autosuggest-item-text">
                            <span>${Qt(this.text)}</span>
                            ${this.secondaryText ? u`<span>${this.secondaryText}</span>` : ""}
                        </div>
                    </a>
                </li>
            ` : this.url ? u`
                <li role="presentation">
                    <a href="${this.url}" class="uhf-autosuggest-term-link" role="option" tabindex="0">
                        ${Qt(this.text)}
                    </a>
                </li>
            ` : u`
            <li class="uhf-autosuggest-term" @click=${this.onTermClick} role="presentation"
                data-bi-srchq="${this.query}"
                data-m=${this.buildDataM()}>
                <span role="option" tabindex="0">${Qt(this.text)}</span>
            </li>
        `;
  }
};
N([
  h({ type: String })
], I.prototype, "text", 2);
N([
  h({ type: String })
], I.prototype, "url", 2);
N([
  h({ type: String })
], I.prototype, "imageUrl", 2);
N([
  h({ type: String })
], I.prototype, "secondaryText", 2);
N([
  h({ type: Number })
], I.prototype, "position", 2);
N([
  h({ type: String })
], I.prototype, "query", 2);
N([
  h({ type: String })
], I.prototype, "pid", 2);
N([
  h({ type: String })
], I.prototype, "icid", 2);
I = N([
  f("uhf-autosuggest-item")
], I);
var si = Object.defineProperty, ri = Object.getOwnPropertyDescriptor, ht = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? ri(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && si(t, e, r), r;
};
let J = class extends p {
  constructor() {
    super(!0), this.targetSelector = "", this.positions = "bottom,right,left", this.margin = 15, this.open = !1, this.disableMobilePositioning = !1, this.calculatePosition = () => {
      var s, t;
      this.open && (this.breakpointController.isMobile && !this.disableMobilePositioning ? (s = this.positionController) == null || s.calculateMobilePosition() : (t = this.positionController) == null || t.calculatePosition());
    }, this.breakpointController = new E(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.positionController = new ar(
      this,
      this.positions.split(","),
      this.targetSelector,
      "uhf-popout",
      this.margin
    ), window.addEventListener("resize", this.calculatePosition);
  }
  disconnectedCallback() {
    window.removeEventListener("resize", this.calculatePosition), super.disconnectedCallback();
  }
  firstUpdated(s) {
    this.calculatePosition();
  }
  updated(s) {
    this.open ? (this.classList.remove("hidden"), setTimeout(() => {
      this.calculatePosition();
    }, 0)) : this.classList.add("hidden");
  }
  render() {
    return u``;
  }
};
ht([
  h({ type: String })
], J.prototype, "targetSelector", 2);
ht([
  h({ type: String })
], J.prototype, "positions", 2);
ht([
  h({ type: Number })
], J.prototype, "margin", 2);
ht([
  h({ type: Boolean })
], J.prototype, "open", 2);
ht([
  h({ type: Boolean })
], J.prototype, "disableMobilePositioning", 2);
J = ht([
  f("uhf-popout")
], J);
var ii = Object.defineProperty, oi = Object.getOwnPropertyDescriptor, qt = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? oi(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && ii(t, e, r), r;
};
let yt = class extends p {
  constructor() {
    super(), this.dataM = "", this.extensibleLinks = "", this.signInLabel = "", this.redirectWrapperFocus = (s) => {
      const t = s.target;
      if (t != null && t.matches('div[role="button"]')) {
        const e = t.querySelector("button");
        e && e.focus();
      }
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.dataM = '{"compnm": "UHF", "view": "UHF", "pa": "UniversalHeader", "hn": "Account", "cN": "GlobalNav_Account_cont", "ecn": "GlobalNav_Account_cont", "ehn": "Account"}', this.observeRoleButtonTabIndex(), this.addEventListener("focusin", this.redirectWrapperFocus);
  }
  disconnectedCallback() {
    var s, t;
    this.removeEventListener("focusin", this.redirectWrapperFocus), (s = this.mutationObserver) == null || s.disconnect(), (t = this.reactRoot) == null || t.unmount(), super.disconnectedCallback();
  }
  /**
   * The @mecontrol/fluent-web library wraps the trigger button in a
   * div[role="button"] when the flyout is expanded. This wrapper persists
   * after the flyout closes and remains in the tab order, causing an extra
   * tab stop on the mecontrol. This observer removes the wrapper from the
   * sequential tab order so only the inner <button> is tabbable.
   */
  observeRoleButtonTabIndex() {
    this.fixRoleButtonTabIndex(), this.mutationObserver = new MutationObserver(() => {
      this.fixRoleButtonTabIndex();
    }), this.mutationObserver.observe(this, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["tabindex"] });
  }
  fixRoleButtonTabIndex() {
    this.querySelectorAll('div[role="button"] > button').forEach((t) => {
      const e = t.parentElement;
      e && e.getAttribute("tabindex") !== "-1" && e.setAttribute("tabindex", "-1");
    });
  }
  async firstUpdated() {
    await this.loadReactApp();
  }
  async loadReactApp() {
    try {
      const [s, { default: t }, { default: e }] = await Promise.all([
        import("./index-CoTcO_uA.js").then((i) => i.R),
        import("./client-Dd_gH7f0.js").then((i) => i.c),
        import("./MeControl-OFOyhRkE.js").then((i) => i.M)
        // Your React component
      ]);
      this.reactRoot = t.createRoot(this), this.reactRoot.render(s.createElement(e, { extensibleLinks: this.extensibleLinks, signInLabelText: this.signInLabel || void 0 }));
    } catch (s) {
      console.error("Failed to load React app:", s);
    }
  }
  render() {
    return u`
        `;
  }
};
qt([
  h({ type: String, reflect: !0, attribute: "data-m" })
], yt.prototype, "dataM", 2);
qt([
  h({ type: String })
], yt.prototype, "extensibleLinks", 2);
qt([
  h({ type: String, attribute: "sign-in-label" })
], yt.prototype, "signInLabel", 2);
yt = qt([
  f("uhf-mecontrol")
], yt);
var ni = Object.defineProperty, ai = Object.getOwnPropertyDescriptor, St = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? ai(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && ni(t, e, r), r;
};
let nt = class extends p {
  constructor() {
    super(), this.text = "All Microsoft", this.solo = !1, this.dataM = "", this.navLabel = "", this.onBreakpointChanged = () => {
      this.requestUpdate();
    }, this.breakpointController = new E(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged);
  }
  disconnectedCallback() {
    this.removeEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged), super.disconnectedCallback();
  }
  render() {
    return this.breakpointController.isMobile ? u`
                <uhf-global-nav-mobile ?solo=${this.solo} data-m=${this.dataM} data-nav-label=${this.navLabel}>
                    ${super.getChildren()}
                </uhf-global-nav-mobile>
            ` : u`
            <uhf-global-nav-desktop text=${this.text} data-m=${this.dataM} data-nav-label=${this.navLabel}>
                ${super.getChildren()}
            </uhf-global-nav-desktop>
        `;
  }
};
St([
  h({ type: String })
], nt.prototype, "text", 2);
St([
  h({ type: Boolean })
], nt.prototype, "solo", 2);
St([
  h({ type: String, attribute: "data-m" })
], nt.prototype, "dataM", 2);
St([
  h({ type: String, attribute: "data-nav-label" })
], nt.prototype, "navLabel", 2);
nt = St([
  f("uhf-global-nav")
], nt);
var li = Object.defineProperty, hi = Object.getOwnPropertyDescriptor, Gt = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? hi(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && li(t, e, r), r;
};
let _t = class extends p {
  constructor() {
    super(...arguments), this.text = "All Microsoft", this.dataM = "", this.navLabel = "";
  }
  render() {
    return u`
            <nav class="uhf-global-nav" aria-label=${ot(this.navLabel)} itemscope itemtype="https://schema.org/SiteNavigationElement">
                <uhf-dropdown text=${this.text} data-m=${this.dataM}>
                    ${super.getChildren()}
                </uhf-dropdown>
            </nav>
            
        `;
  }
};
Gt([
  h({ type: String })
], _t.prototype, "text", 2);
Gt([
  h({ type: String, attribute: "data-m" })
], _t.prototype, "dataM", 2);
Gt([
  h({ type: String, attribute: "data-nav-label" })
], _t.prototype, "navLabel", 2);
_t = Gt([
  f("uhf-global-nav-desktop")
], _t);
var ci = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, me = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? ui(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && ci(t, e, r), r;
};
let Mt = class extends p {
  constructor() {
    super(), this.solo = !1, this.dataM = "", this.contextualNavItems = [], this.onStateChanged = (s) => {
      var e;
      const t = s.detail;
      if (((e = t.mobileState) == null ? void 0 : e.isGlobalNavOpen) !== void 0) {
        const i = t.mobileState.isGlobalNavOpen;
        this.updateToggleState(i), i || this.keyboardController.deafen();
      }
    }, this.handleOutsideClick = (s) => {
      this.stateController.getState().mobileState.isGlobalNavOpen && !this.contains(s.target) && this.toggle();
    }, this.handlePopoutOpened = (s) => {
      s.stopPropagation(), this.keyboardController.focusController.focusFirstMenuItem(), this.keyboardController.listen();
    }, this.getContextualNavItems = () => {
      let s = document.querySelectorAll("uhf-popout.uhf-contextual-nav-popout > ul > li");
      return Array.from(s).map((t) => t.cloneNode(!0));
    }, this.toggle = () => {
      let s = !this.stateController.getState().mobileState.isGlobalNavOpen;
      this.stateController.setState((t) => ({ mobileState: { ...t.mobileState, isGlobalNavOpen: s } }));
    }, this.updateToggleState = (s) => {
      const t = this.querySelector("button.uhf-nav-button uhf-icon");
      t && t.setAttribute("iconName", s ? "Cancel" : "GlobalNavButton");
      const e = this.querySelector("uhf-popout.uhf-global-nav-popout");
      e && (s ? e.setAttribute("open", "") : e.removeAttribute("open"));
    }, this.getItems = () => super.getChildren().map((s) => u`<li>${s}</li>`), this.stateController = new X(this), this.keyboardController = new he(this, {
      onTab: (s, t) => {
        if (t.shiftKey)
          s.focusedIndex <= 0 ? this.toggle() : (t.preventDefault(), s.focusPreviousItem());
        else {
          const e = s.getItemCount();
          s.focusedIndex >= e - 1 ? this.toggle() : (t.preventDefault(), s.focusNextItem());
        }
      }
    }, "uhf-popout.uhf-global-nav-popout");
  }
  connectedCallback() {
    var s;
    super.connectedCallback(), document.addEventListener("click", this.handleOutsideClick), this.addEventListener(D.POSITION_CALCULATED, this.handlePopoutOpened), this.addEventListener(T.STATE_CHANGED, this.onStateChanged), this.solo && ((s = document.querySelector("div.uhf-header-l1")) == null || s.classList.add("hidden"), this.loadContextualNavItems());
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.handleOutsideClick), this.removeEventListener(D.POSITION_CALCULATED, this.handlePopoutOpened), this.removeEventListener(T.STATE_CHANGED, this.onStateChanged), super.disconnectedCallback();
  }
  async loadContextualNavItems() {
    await this.updateComplete;
    const s = document.querySelector("uhf-contextual-nav-mobile");
    if (s != null && s.updateComplete && await s.updateComplete, this.contextualNavItems = this.getContextualNavItems(), this.contextualNavItems.length > 0) {
      const t = this.querySelector("uhf-popout.uhf-global-nav-popout ul");
      if (t) {
        const e = document.createDocumentFragment();
        this.contextualNavItems.forEach((i) => e.appendChild(i)), t.prepend(e);
      }
    }
  }
  render() {
    return u`
            <button 
                class="uhf-nav-item uhf-nav-button" 
                @click=${this.toggle} 
                aria-label="All Microsoft expand to see list of Microsoft products and services"
                data-m=${this.dataM}
            >
                <uhf-icon iconName="GlobalNavButton" size=20></uhf-icon>
            </button>
            <uhf-popout 
                class="uhf-global-nav-popout" 
                targetSelector="button.uhf-nav-button" 
                positions="bottom"
                itemscope
                itemtype="https://schema.org/SiteNavigationElement"
            >
                <ul>
                    ${this.getItems()}
                </ul>
            </uhf-popout>
        `;
  }
};
me([
  h({ type: Boolean })
], Mt.prototype, "solo", 2);
me([
  h({ type: String, attribute: "data-m" })
], Mt.prototype, "dataM", 2);
Mt = me([
  f("uhf-global-nav-mobile")
], Mt);
var as = /* @__PURE__ */ ((s) => (s.FLAGS_UPDATED = "FeatureFlagEvents/FLAGS_UPDATED", s))(as || {});
class di {
  constructor(t) {
    this.onContextChanged = (e) => {
      e.detail.assignment !== void 0 && this.host.dispatchEvent(new CustomEvent("FeatureFlagEvents/FLAGS_UPDATED", {
        bubbles: !1
      }));
    }, this.host = t, this.contextController = new U(this.host), this.host.addEventListener(Xt.CONTEXT_CHANGED, this.onContextChanged);
  }
  hostConnected() {
  }
  hostDisconnected() {
    this.host.removeEventListener(Xt.CONTEXT_CHANGED, this.onContextChanged);
  }
  getFeatureFlag(t, e) {
    let i = this.contextController.assignment, r = i == null ? void 0 : i.configs.find((o) => o.id == t);
    if (r)
      return r.parameters[e];
  }
  get flights() {
    let t = this.contextController.assignment;
    return t == null ? void 0 : t.flights;
  }
  get features() {
    let t = this.contextController.assignment;
    return t == null ? void 0 : t.features;
  }
  get configs() {
    let t = this.contextController.assignment;
    return t == null ? void 0 : t.configs;
  }
  get clientId() {
    let t = this.contextController.assignment;
    return t == null ? void 0 : t.clientId;
  }
}
var pi = Object.getOwnPropertyDescriptor, fi = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? pi(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = n(r) || r);
  return r;
};
const gi = "cookie-banner", Re = "msccBannerV2", mi = "cbid-compat";
let He = class extends p {
  constructor() {
    super(), this.initCookieBanner = (s) => {
      this.initializedBannerId = s, window.WcpConsent.init(this.contextController.locale, s, (t, e) => {
        window.siteConsent = e, e.isConsentRequired && this.manageFooter(e);
      });
    }, this.manageFooter = async (s) => {
      var i;
      const t = document.querySelector("uhf-footer-menu");
      if (!t) {
        console.error("[UHF] Unable to load manage cookies button: uhf-footer-menu element not found");
        return;
      }
      await t.updateComplete;
      let e = (i = document.getElementById("uhf-Footer_ManageCookies")) == null ? void 0 : i.parentElement;
      if (e) {
        e.classList.remove("hidden");
        let r = e.getElementsByTagName("a")[0];
        r && r.addEventListener("click", this.manageConsent.bind(this, s));
      } else
        console.error("[UHF] Unable to load manage cookies button: Footer item with id uhf-Footer_ManageCookies not found");
    }, this.manageConsent = (s, t) => {
      t.preventDefault(), s.manageConsent();
    }, this.contextController = new U(this), this.featureFlagController = new di(this);
  }
  get bannerId() {
    return this.featureFlagController.configs === void 0 ? Re : this.featureFlagController.getFeatureFlag("default", mi) ? gi : Re;
  }
  firstUpdated() {
    this.startCookieBanner(), this.featureFlagController.configs === void 0 && this.addEventListener(as.FLAGS_UPDATED, async () => {
      this.requestUpdate(), await this.updateComplete, this.startCookieBanner();
    }, { once: !0 });
  }
  startCookieBanner() {
    const s = this.bannerId;
    if (this.initializedBannerId === s)
      return;
    const t = () => this.initCookieBanner(s);
    window.WcpConsent ? t() : es(() => !!window.WcpConsent, t, 1e3, 100, 50, "Unable to load WcpConsent: WcpConsent is not defined");
  }
  render() {
    return u`
            <div id="${this.bannerId}"></div>
        `;
  }
};
He = fi([
  f("uhf-cookie-banner")
], He);
var bi = Object.defineProperty, vi = Object.getOwnPropertyDescriptor, y = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? vi(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && bi(t, e, r), r;
};
const Fe = "uhf_hide_promo_banner", Ci = "uhf_hide_epb", qe = 7;
let m = class extends p {
  constructor() {
    super(), this.logoUrl = "", this.title = "", this.paragraph = "", this.actionText = "", this.actionUrl = "", this.actionAriaLabel = "", this.dismissText = "No thanks", this.dismissAriaLabel = "Dismiss promo banner", this.logoAltText = "", this.cookieExpiry = qe, this.targetBrowser = "all", this.showOnMobile = !1, this.forceVisible = !1, this.bannerConfig = "", this.isVisible = !1, this.isAnimatingOut = !1, this.isAnimatingIn = !1, this.selectedConfig = null, this.hasTriggeredEntranceAnimation = !1, this.onBreakpointChanged = () => {
      this.updateBannerVisibility();
    }, this.handleDismiss = () => {
      this.isAnimatingOut = !0, this.trackDismissal();
    }, this.handleAnimationEnd = () => {
      this.isAnimatingOut && (this.setCookieOnRootDomain(Fe, "true", "/", this.cookieExpiry), this.isVisible = !1, this.isAnimatingOut = !1, this.dispatchEvent(new CustomEvent("banner-closed", {
        bubbles: !0,
        composed: !0,
        detail: { height: this.getHeight() }
      }))), this.isAnimatingIn && (this.isAnimatingIn = !1);
    }, this.handleImageError = (s) => {
    }, this.breakpointController = new E(this), this.contextController = new U(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.processConfig(), this.updateBannerVisibility(), this.addEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged);
  }
  disconnectedCallback() {
    this.removeEventListener(w.BREAKPOINT_CHANGED, this.onBreakpointChanged), super.disconnectedCallback();
  }
  /**
   * Process the banner-config JSON and select appropriate banner config.
   * Banner data must come from Alpine CMS - no fallbacks in production.
   */
  processConfig() {
    if (this.bannerConfig)
      try {
        const s = JSON.parse(this.bannerConfig);
        if (!Array.isArray(s) || s.length === 0)
          return;
        const t = s.filter((e) => {
          const i = typeof e.browser == "string", r = typeof e.title == "string" || typeof e.paragraph == "string";
          return i && r;
        });
        if (t.length === 0)
          return;
        this.selectedConfig = this.filterAndSelectBanner(t), this.selectedConfig && this.applyConfig(this.selectedConfig);
      } catch {
      }
  }
  /**
   * Filter banner configs by browser and Windows 10 requirement (matches legacy logic)
   */
  filterAndSelectBanner(s) {
    const t = m.isWindows10(), e = m.getCurrentBrowser();
    if (!e) {
      const r = s.filter(
        (o) => {
          var n, a;
          return ((n = o.browser) == null ? void 0 : n.toLowerCase()) === "all" && (t || ((a = o.extensionType) == null ? void 0 : a.toLowerCase()) !== "windows10only".toLowerCase());
        }
      );
      return r.length > 0 ? r[0] : null;
    }
    if (e === "firefox" || e === "edge" || e === "chrome" || e === "ie11") {
      const r = s.filter(
        (o) => {
          var n, a, l, c;
          return (((n = o.browser) == null ? void 0 : n.toLowerCase()) === e || ((a = o.browser) == null ? void 0 : a.toLowerCase()) === "non-anaheim" || ((l = o.browser) == null ? void 0 : l.toLowerCase()) === "all") && (t || ((c = o.extensionType) == null ? void 0 : c.toLowerCase()) !== "windows10only".toLowerCase());
        }
      );
      return r.length > 0 ? r[0] : null;
    } else if (e === "anaheim") {
      const r = s.filter(
        (o) => {
          var n, a, l;
          return (((n = o.browser) == null ? void 0 : n.toLowerCase()) === e || ((a = o.browser) == null ? void 0 : a.toLowerCase()) === "all") && (t || ((l = o.extensionType) == null ? void 0 : l.toLowerCase()) !== "windows10only".toLowerCase());
        }
      );
      return r.length > 0 ? r[0] : null;
    } else if (e === "opera" || e === "brave") {
      const r = s.filter(
        (o) => {
          var n, a, l, c;
          return (((n = o.browser) == null ? void 0 : n.toLowerCase()) === e || ((a = o.browser) == null ? void 0 : a.toLowerCase()) === "non-anaheim" || ((l = o.browser) == null ? void 0 : l.toLowerCase()) === "all") && (t || ((c = o.extensionType) == null ? void 0 : c.toLowerCase()) !== "windows10only".toLowerCase());
        }
      );
      return r.length > 0 ? r[0] : null;
    }
    const i = s.filter(
      (r) => {
        var o, n;
        return ((o = r.browser) == null ? void 0 : o.toLowerCase()) === "all" && (t || ((n = r.extensionType) == null ? void 0 : n.toLowerCase()) !== "windows10only".toLowerCase());
      }
    );
    return i.length > 0 ? i[0] : null;
  }
  /**
   * Apply selected config to component properties
   */
  applyConfig(s) {
    var e;
    const t = this.contextController.headerTheme === $.DARK;
    this.title = s.title || "", this.paragraph = s.paragraph || "", this.actionText = s.actionLinkText || "", this.actionUrl = s.extensionUrl || "", this.actionAriaLabel = s.actionLinkAriaLabel || "", this.dismissText = s.dismissText || "No thanks", this.dismissAriaLabel = s.dismissAriaLabel || "Dismiss promo banner", this.cookieExpiry = s.cookieExpiration || qe, this.targetBrowser = s.browser || "all", this.logoUrl = t ? s.logoUrlDarkTheme || "" : s.logoUrlLightTheme || "", this.logoAltText = ((e = s.logoAltText) == null ? void 0 : e.trim()) || this.title || "", this.updateWrapperThemeClass();
  }
  updateWrapperThemeClass() {
    this.classList.remove("theme-light-wrapper", "theme-dark-wrapper"), this.classList.add(this.getWrapperThemeClass());
  }
  /**
   * Trigger entrance animation only once to prevent double animation.
   */
  triggerEntranceAnimation() {
    this.hasTriggeredEntranceAnimation || (this.hasTriggeredEntranceAnimation = !0, this.isAnimatingIn = !0, this.updateWrapperThemeClass());
  }
  static isWindows10() {
    return navigator.userAgent.toLowerCase().indexOf("windows nt 10.0") >= 0;
  }
  /**
   * Check if the banner should be visible based on browser, device, and cookie.
   * Banner only shows if Alpine CMS provides valid config data.
   */
  updateBannerVisibility() {
    if (this.forceVisible) {
      if (!this.title && !this.paragraph) {
        this.isVisible = !1;
        return;
      }
      this.isVisible = !0, this.triggerEntranceAnimation();
      return;
    }
    if (this.getCookie(Fe) === "true" || this.getCookie(Ci) === "true") {
      this.isVisible = !1;
      return;
    }
    if (!this.showOnMobile && this.breakpointController.isMobile) {
      this.isVisible = !1;
      return;
    }
    if (this.bannerConfig && !this.selectedConfig) {
      this.isVisible = !1;
      return;
    }
    if (!this.bannerConfig && this.targetBrowser !== "all") {
      const s = m.getCurrentBrowser();
      if (!this.matchesBrowser(s, this.targetBrowser)) {
        this.isVisible = !1;
        return;
      }
    }
    if (!this.title && !this.paragraph) {
      this.isVisible = !1;
      return;
    }
    this.isVisible = !0, this.triggerEntranceAnimation();
  }
  /**
   * Check if current browser matches target browser config
   */
  matchesBrowser(s, t) {
    return t === "all" ? !0 : t === "non-anaheim" ? s !== "anaheim" : s === t;
  }
  /**
   * Detect Edge Chromium browser
   */
  static isEdgeChromium() {
    return m.includesUserAgentDataBrand("microsoft edge");
  }
  /**
   * Detect Brave browser
   */
  static isBrave() {
    return !!window.navigator.brave || m.includesUserAgentDataBrand("brave");
  }
  /**
   * Check if UserAgentData brands includes specified brand
   */
  static includesUserAgentDataBrand(s) {
    const t = window.navigator;
    if (t.userAgentData) {
      const e = t.userAgentData.brands;
      for (let i = 0; i < e.length; i++)
        if (e[i].brand.toLowerCase() === s.toLowerCase())
          return !0;
    }
    return !1;
  }
  /**
   * Detect Opera browser
   */
  static isOpera() {
    const s = window.navigator;
    return !!window.opr || s.userAgent.toLowerCase().indexOf("opr/") >= 0;
  }
  /**
   * Detect current browser type
   */
  static getCurrentBrowser() {
    const s = navigator.userAgent.toLowerCase();
    return m.isEdgeChromium() ? "anaheim" : window.chrome && (window.chrome.webstore || window.chrome.runtime) && s.indexOf("edg") <= -1 ? "chrome" : m.isBrave() ? "brave" : m.isOpera() ? "opera" : window.chrome && s.indexOf("chrome") >= 0 ? "chrome" : typeof window.InstallTrigger < "u" ? "firefox" : s.indexOf("trident") >= 0 && s.indexOf("rv:11") >= 0 ? "ie11" : s.indexOf("edge/") >= 0 ? "edge" : s.indexOf("edg/") >= 0 ? "anaheim" : null;
  }
  /**
   * Get the current height of the banner
   */
  getHeight() {
    return this.getBoundingClientRect().height;
  }
  /**
   * Get cookie value by name
   */
  getCookie(s) {
    var i;
    const e = `; ${document.cookie}`.split(`; ${s}=`);
    return e.length === 2 && ((i = e.pop()) == null ? void 0 : i.split(";").shift()) || null;
  }
  /**
   * Set cookie on the root domain
   */
  setCookieOnRootDomain(s, t, e, i) {
    const r = document.location.hostname.split(".");
    let o = r.pop() || "";
    if (o === "localhost")
      this.setCookie(s, t, e, i);
    else
      for (; this.getCookie(s) !== t && r.length !== 0; ) {
        const n = r.pop();
        n && (o = n + "." + o, this.setCookie(s, t, e, i, o));
      }
  }
  /**
   * Set a cookie
   */
  setCookie(s, t, e, i, r) {
    const o = /* @__PURE__ */ new Date();
    o.setTime(o.getTime() + i * 24 * 60 * 60 * 1e3);
    const n = `expires=${o.toUTCString()}`, a = r ? `domain=${r};` : "";
    document.cookie = `${s}=${t};${n};path=${e};${a}`;
  }
  /**
   * Track banner dismissal via WEDCS
   */
  trackDismissal() {
    typeof window.MscomCustomEvent == "function" && window.MscomCustomEvent("wcs.cn", "PromoBannerDismissed", "wcs.cot", 4);
  }
  /**
   * Get theme-specific classes
   */
  getThemeClass() {
    return this.contextController.headerTheme === $.DARK ? "theme-dark" : "theme-light";
  }
  /**
   * Get wrapper theme class for full-width background
   */
  getWrapperThemeClass() {
    return this.contextController.headerTheme === $.DARK ? "theme-dark-wrapper" : "theme-light-wrapper";
  }
  render() {
    if (!this.isVisible)
      return b;
    const s = this.isAnimatingOut ? "uhf-promo-banner--rollup" : this.isAnimatingIn ? "uhf-promo-banner--rollin" : "";
    return u`
            <div 
                class="uhf-promo-banner ${this.getThemeClass()} ${s}"
                role="region"
                aria-label="Promotional banner"
                @animationend=${this.handleAnimationEnd}
            >
            <div class="uhf-promo-banner__container">
                <div class="uhf-promo-banner__content">
                    ${this.logoUrl ? u`
                        <img 
                            class="uhf-promo-banner__logo" 
                            src="${this.logoUrl}" 
                            alt="${this.logoAltText}"
                            @error=${this.handleImageError}
                        />
                    ` : b}
                    <div class="uhf-promo-banner__text">
                        ${this.title ? u`<span class="uhf-promo-banner__title">${this.title}</span>` : b}
                        ${this.paragraph ? u`<span class="uhf-promo-banner__paragraph">${this.paragraph}</span>` : b}
                    </div>
                </div>
                <div class="uhf-promo-banner__actions">
                    <button
                        class="uhf-promo-banner__dismiss"
                        @click=${this.handleDismiss}
                        aria-label="${this.dismissAriaLabel}"
                        data-m='{"compnm": "UHF", "view": "UHF", "pa": "UniversalHeader", "hn": "PromoBanner", "cN": "PB-dismiss_nonnav", "ecn": "PB-dismiss_nonnav", "ehn": "PromoBanner"}'
                    >
                        ${this.dismissText}
                    </button>
                    ${this.actionUrl && this.actionText.trim().length > 0 ? u`
                        <a 
                            class="uhf-promo-banner__action"
                            href="${this.actionUrl}"
                            aria-label="${this.actionAriaLabel || this.actionText}"
                            data-m='{"compnm": "UHF", "view": "UHF", "pa": "UniversalHeader", "hn": "PromoBanner", "cN": "PB-launch_nav", "ecn": "PB-launch_nav", "ehn": "PromoBanner"}'
                        >
                            ${this.actionText}
                        </a>
                    ` : b}
                </div>
            </div>
            </div>
        `;
  }
};
y([
  h({ type: String, attribute: "logo-url" })
], m.prototype, "logoUrl", 2);
y([
  h({ type: String })
], m.prototype, "title", 2);
y([
  h({ type: String })
], m.prototype, "paragraph", 2);
y([
  h({ type: String, attribute: "action-text" })
], m.prototype, "actionText", 2);
y([
  h({ type: String, attribute: "action-url" })
], m.prototype, "actionUrl", 2);
y([
  h({ type: String, attribute: "action-aria-label" })
], m.prototype, "actionAriaLabel", 2);
y([
  h({ type: String, attribute: "dismiss-text" })
], m.prototype, "dismissText", 2);
y([
  h({ type: String, attribute: "dismiss-aria-label" })
], m.prototype, "dismissAriaLabel", 2);
y([
  h({ type: String, attribute: "logo-alt-text" })
], m.prototype, "logoAltText", 2);
y([
  h({ type: Number, attribute: "cookie-expiry" })
], m.prototype, "cookieExpiry", 2);
y([
  h({ type: String, attribute: "target-browser" })
], m.prototype, "targetBrowser", 2);
y([
  h({ type: Boolean, attribute: "show-on-mobile" })
], m.prototype, "showOnMobile", 2);
y([
  h({ type: Boolean, attribute: "force-visible" })
], m.prototype, "forceVisible", 2);
y([
  h({ type: String, attribute: "banner-config" })
], m.prototype, "bannerConfig", 2);
y([
  Q()
], m.prototype, "isVisible", 2);
y([
  Q()
], m.prototype, "isAnimatingOut", 2);
y([
  Q()
], m.prototype, "isAnimatingIn", 2);
y([
  Q()
], m.prototype, "selectedConfig", 2);
m = y([
  f("uhf-promo-banner")
], m);
var yi = Object.defineProperty, _i = Object.getOwnPropertyDescriptor, ct = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? _i(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && yi(t, e, r), r;
};
let Y = class extends p {
  constructor() {
    super(), this.text = "", this.url = "", this.linkLabel = "", this.backgroundColor = "", this.isVisible = !0, this.contextController = new U(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.isVisible = !!this.text;
  }
  /**
   * Get theme-specific classes
   */
  getThemeClass() {
    return this.contextController.headerTheme === $.DARK ? "theme-dark" : "theme-light";
  }
  /**
   * Get custom background style if provided
   */
  getBackgroundStyle() {
    return this.backgroundColor ? `background-color: ${this.backgroundColor};` : "";
  }
  render() {
    if (!this.isVisible || !this.text)
      return b;
    const s = this.linkLabel.trim(), t = this.url ? u`<a href="${this.url}" aria-label="${s || this.text}">${this.text} &gt;</a>` : u`<span>${this.text}</span>`;
    return u`
            <div 
                class="uhf-site-promo-banner ${this.getThemeClass()}"
                style="${this.getBackgroundStyle()}"
                role="region"
                aria-label="Site promotional banner"
            >
                ${t}
            </div>
        `;
  }
};
ct([
  h({ type: String })
], Y.prototype, "text", 2);
ct([
  h({ type: String })
], Y.prototype, "url", 2);
ct([
  h({ type: String, attribute: "data-link-label" })
], Y.prototype, "linkLabel", 2);
ct([
  h({ type: String, attribute: "background-color" })
], Y.prototype, "backgroundColor", 2);
ct([
  Q()
], Y.prototype, "isVisible", 2);
Y = ct([
  f("uhf-site-promo-banner")
], Y);
var wi = Object.defineProperty, $i = Object.getOwnPropertyDescriptor, ls = (s, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? $i(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (r = (i ? n(t, e, r) : n(r)) || r);
  return i && r && wi(t, e, r), r;
};
let oe = class extends p {
  constructor() {
    super(), this.condition = !1;
  }
  render() {
    return this.condition ? super.getChildrenBySlot("treatment") : super.getChildrenBySlot("control");
  }
};
ls([
  h({ type: Boolean })
], oe.prototype, "condition", 2);
oe = ls([
  f("uhf-feature-gate")
], oe);
export {
  $ as T,
  Ye as c,
  Ws as s
};

// SIG // Begin signature block
// SIG // MIIpAwYJKoZIhvcNAQcCoIIo9DCCKPACAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // SJuiAMsEcKm9fVcoTk+71O/JNcUDJCi0ogHGXPKXXPWg
// SIG // gg3SMIIGvDCCBKSgAwIBAgITMwAAANLYbEaxncayoAAA
// SIG // AAAA0jANBgkqhkiG9w0BAQwFADBiMQswCQYDVQQGEwJV
// SIG // UzEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MTMwMQYDVQQDEypBenVyZSBSU0EgUHVibGljIFNlcnZp
// SIG // Y2VzIENvZGUgU2lnbmluZyBQQ0EwHhcNMjYwMzA1MTkw
// SIG // NjE4WhcNMjcwMzAzMTkwNjE4WjCBgjELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEsMCoGA1UEAxMjQXp1cmUgUHVibGljIFNl
// SIG // cnZpY2VzIFJTQSBDb2RlIFNpZ24wggGiMA0GCSqGSIb3
// SIG // DQEBAQUAA4IBjwAwggGKAoIBgQCzWKZG9P7t0hKBimeC
// SIG // eMptumOPqwHZzspivt8o8D+6mS0L1WzQjEvrAtSYvzQI
// SIG // MJXDWAf7ItbG2MxPPOVPtHNQaA8+mr9GdNgsb9bJM2hK
// SIG // 4y4P1elGhGGX8NimfQZW9TeSAZsYe0OfRjMdwIphuyjh
// SIG // 8kbARy3/mnDliXCdGj0u1Ft1qw87+bT6FlZ8Pv+OykUW
// SIG // /WAM28r56qu1C5qm6Xx5LvRBxzk+i4K+Mu17yN3ALlad
// SIG // 5w9uetGBa3WK1eN8ftCd2K0SV0AzpPVcuWbuYhhdifMW
// SIG // trtg4r7pgWxQDBu6gSicXRt7oBFY56ilLxNqzs+UrhTq
// SIG // Kq1taSw1qC3s0KzyxEC/Bz2+OFjnfbeZQxF2dMJ1r2Vw
// SIG // E5nW65uckXepwgofsKgs806jTkt4Br8Kd0PAwmC9qF4T
// SIG // xereCls2gIQmvAJxkACZnCbXGJp7XZ6Xsw+nykQzpiov
// SIG // dlNLwTm/zzkDQSws7z+7m6jZEB3d7hiOqsuz47MEfmUJ
// SIG // qluOioDD6d8CAwEAAaOCAcgwggHEMA4GA1UdDwEB/wQE
// SIG // AwIHgDAfBgNVHSUEGDAWBggrBgEFBQcDAwYKKwYBBAGC
// SIG // N1sBATAdBgNVHQ4EFgQUYqV4NR+DJwhQtHAKZqMo4HsM
// SIG // aRkwVAYDVR0RBE0wS6RJMEcxLTArBgNVBAsTJE1pY3Jv
// SIG // c29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRlZDEW
// SIG // MBQGA1UEBRMNNDY5OTgxKzUwNzE4NzAfBgNVHSMEGDAW
// SIG // gBTxL7qRFnzefVInMfV6+9VYWWk6PTBvBgNVHR8EaDBm
// SIG // MGSgYqBghl5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpb3BzL2NybC9BenVyZSUyMFJTQSUyMFB1YmxpYyUy
// SIG // MFNlcnZpY2VzJTIwQ29kZSUyMFNpZ25pbmclMjBQQ0Eu
// SIG // Y3JsMHwGCCsGAQUFBwEBBHAwbjBsBggrBgEFBQcwAoZg
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9j
// SIG // ZXJ0cy9BenVyZSUyMFJTQSUyMFB1YmxpYyUyMFNlcnZp
// SIG // Y2VzJTIwQ29kZSUyMFNpZ25pbmclMjBQQ0EuY3J0MAwG
// SIG // A1UdEwEB/wQCMAAwDQYJKoZIhvcNAQEMBQADggIBAKMM
// SIG // UX0YVUUCTqE50xhl9Pk0hRfkLD14eIdvc+/cwwgKs2mR
// SIG // DMG66/dGboyhlj1pogVsnvh0ByqJoFQYP/bqzQIgXJZM
// SIG // 778xRQ3b5REzU+6sEFdnDBdWe2lT3SoEZD4gPGcqj6BZ
// SIG // w/1dJDLeenv9hUIqZMGE28IZx26CIVXoieUq9Bj69Z0n
// SIG // o0bzuzx20QwOqZ6yhiUT9UtOzSF55T3DJlx3COEYfQQP
// SIG // Oomvj2V6lIVpum3v7OFSjGzTJaCcY/JKYqDHrcDCdmau
// SIG // 3zAiCMkNJk5Nmsg5BPjes7MML/cC+6fSs+L3N1c8ilGt
// SIG // Y7ghulNnBnJv+UZuD7ig5gANLk4wK/I5Y2BtxAtNowsy
// SIG // nthb9Tnck5nYJ6i3HyWUc24TuXXAF++dG+H8Yes16vJL
// SIG // HqH5b2xywVJelLFpYOj7kvGT8jJFZKUAJe1c//D1rBkA
// SIG // Y+BT39mkAEd81B59pTHOwVS9uVxcwGa3yEXryhWbh44q
// SIG // LQE9kfh8bypq2vLeSYZQX5kn3Lxyzk+W41MmabZHSu2R
// SIG // X7ve201BkkpGuq8PL7IdQT8uba6Wqv7Pewiz4HsUfc0l
// SIG // +PhcXgfn1ArJiUW1Sww92sLFk7C0UCufMjtxvxMwkfJc
// SIG // edZWVele21OzOEXSzFf5OkPg6ne7JOvZeJYmCaFITJE+
// SIG // 9ha6TSs+TczP61FR7+ptMIIHDjCCBPagAwIBAgITMwAA
// SIG // AAKyxJOIeFns0wAAAAAAAjANBgkqhkiG9w0BAQwFADBb
// SIG // MQswCQYDVQQGEwJVUzEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSwwKgYDVQQDEyNNaWNyb3NvZnQg
// SIG // UlNBIFNlcnZpY2VzIFJvb3QgQ0EgMjAyMTAeFw0yMTA5
// SIG // MDIxNzQxMTlaFw0zNjA5MDIxNzUxMTlaMGIxCzAJBgNV
// SIG // BAYTAlVTMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xMzAxBgNVBAMTKkF6dXJlIFJTQSBQdWJsaWMg
// SIG // U2VydmljZXMgQ29kZSBTaWduaW5nIFBDQTCCAiIwDQYJ
// SIG // KoZIhvcNAQEBBQADggIPADCCAgoCggIBAKXd/Sy91nFg
// SIG // seVJOFgeRhVxrcahyp1YGSN0FpOEgEREVb3ND/QgI7I0
// SIG // yd7XG6OE8Vomr5FMxvK8TvJ4Lc6LP9BDz2GSa1M0LlzH
// SIG // KX757/24C0ZndzccA1qQi00+BmmOr4plmxRzTFv4Phdw
// SIG // 8yBPF9GDvClqV8ASvvbitfjaD7dVPOFLb7N7fvt/qWog
// SIG // GN5eis0FXCqVJdmPZZaX2h4iG0otsAhfq8yvSlJ0YwO4
// SIG // i5GDeLQwTsMN1Rf2UAHQKCUYkFsLSQ0mqbaRbDZhB+2p
// SIG // FL/q/c2a6hlHLnapYyfwlNFXkDhwAFWEzfwFHER2oR42
// SIG // UayfN9tsO/p2tWk33CrnHdndJDrIZ6oQ3D+Ngol/TR8B
// SIG // AgXCIM6se6YlLDTsxRwh9QUDq7KVhKy58HGKJUqwgIW0
// SIG // E7cvlzUl0Hft/ebhALZyFDkhof9C5Cq4c/486XLjQq0n
// SIG // buKsFNhQU0yvABR3eohw63Kps66Uma48oE0JmqOxmzrP
// SIG // vrITYcsnByKleiHn+4yq+Ts/KrtqkQwQcuikMPrZwXCt
// SIG // sYkxMUyUn8gr8oew22WDeIQECAM1Cz9TcdJadsrToKqX
// SIG // Qa2bAn/AABAYyogPPONfGvojTI3DlYD42etMa/gPeZJa
// SIG // vX+z7x8d/4eYBnJ9WFSi9q0v+vLOGc3fyM2KQtq5eVbH
// SIG // X5rVyWc6bJ35AgMBAAGjggHCMIIBvjAQBgkrBgEEAYI3
// SIG // FQEEAwIBADAdBgNVHQ4EFgQU8S+6kRZ83n1SJzH1evvV
// SIG // WFlpOj0wVAYDVR0gBE0wSzBJBgRVHSAAMEEwPwYIKwYB
// SIG // BQUHAgEWM2h0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9w
// SIG // a2lvcHMvRG9jcy9SZXBvc2l0b3J5Lmh0bTAZBgkrBgEE
// SIG // AYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8EBAMCAYYw
// SIG // DwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBQODLFk
// SIG // ab0tsdVrJqZH6lZOgMPtijBmBgNVHR8EXzBdMFugWaBX
// SIG // hlVodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3Bz
// SIG // L2NybC9NaWNyb3NvZnQlMjBSU0ElMjBTZXJ2aWNlcyUy
// SIG // MFJvb3QlMjBDQSUyMDIwMjEuY3JsMHMGCCsGAQUFBwEB
// SIG // BGcwZTBjBggrBgEFBQcwAoZXaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraW9wcy9jZXJ0cy9NaWNyb3NvZnQl
// SIG // MjBSU0ElMjBTZXJ2aWNlcyUyMFJvb3QlMjBDQSUyMDIw
// SIG // MjEuY3J0MA0GCSqGSIb3DQEBDAUAA4ICAQBin7PMBnXj
// SIG // nIJ0x++LnudLDWWnZ8dZmJ14DuZfUss/doUThLAM4crr
// SIG // HaTbJoulUUELNd2AnOpX/Z4tenUMT3sjYIdPYyJfIYWP
// SIG // RqfI6Nbz+JVK7RRvn2nl5EEMIuRE6UKS9ZGBbf02a7sb
// SIG // 04E/7BN/NhhrmtS/tVFjfRrrVh9zXku45rqWuCwUTzg3
// SIG // EqxKQ8OGbtjBQtq/Syb/clm5BHsoh3XhMnb9VLv3G1du
// SIG // Nf90FL5/o88XZ4L18nx1lfky2nllY4HIA8PK8AarqAW4
// SIG // iKSTA3EGqn8s/47WtQKT+qED2YbZXVOYL+L7vQDCnFbw
// SIG // hgAx6ucuMz7Ae1rqibg3AjsC7U5M3oA/vqAHDKDA3mdM
// SIG // 5D6L/ZEdQgaG20HhUOSQ+CiQD3TyHSiVCfVMuTv83IiK
// SIG // Cni3LW/23tHC2tbN57rlhMcoyjIi+IVd7j7s41MFBaDw
// SIG // JrmfXn/YM+lR/5QqvO7zWAbbr/XU531v3jr/jBilmrqt
// SIG // 6U/b7y8TXyA9nYxV9iSMFmcbyIi2xgdcAHhxnpXcvcvy
// SIG // FWET6YiJiyeSJZwwJv8gwXiBF+Zh0IHArl6KVsbAdsAT
// SIG // uP1TCEBpPynXZmkviIEWPtnv315ZjTC7nPoOpSnOVaO7
// SIG // wZztrOefZunI5fBxw7mG1oyoRnADZawiFsVo9J/cDu15
// SIG // ErRCfDQRhwSiBTGCGokwghqFAgEBMHkwYjELMAkGA1UE
// SIG // BhMCVVMxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEzMDEGA1UEAxMqQXp1cmUgUlNBIFB1YmxpYyBT
// SIG // ZXJ2aWNlcyBDb2RlIFNpZ25pbmcgUENBAhMzAAAA0ths
// SIG // RrGdxrKgAAAAAADSMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCC/SmhXcMuQeTzVxWqcnuBPGezJ8O2N5o1TI85a
// SIG // EYOaBzBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBgJg+s8TAKezN
// SIG // C7Iplgz2/yA4HCYNfFOj5xSXpkE5V+E8l8NGNVgKszCF
// SIG // 5j61ZupTkOwoLV12G82EOkW+auNM8nezIJ1oWI+Y7vTY
// SIG // HOeLOeILHvmlYHyupg+bYRk+aMnEBgzUaO5f9u2c3KdG
// SIG // 8S/iOIvuLAmK9Sd91F+0CKJqay9AzbUrXHbI3R/bOIey
// SIG // 5ANleA9/l9Y7bIyHxAtMeO0KzKfJKAyNCu52CP5Z2RkA
// SIG // PxrVlvL988JGZRhKvnkJ2zUbg5AR0BjJzw22mc/Nmp0t
// SIG // yPplIeTjc0wDm7t4cLyONYa02fMKe31WSgBcmnvA5xY1
// SIG // imogltjJbjS71QDeYO4fB4A39+hNKi36kw7TzeC3xSTj
// SIG // qV/uGy8TB7m83de2BdBGvoGbhw/vKSwujPHXohlu8TDC
// SIG // Eeqt8dTEiMdLmj77eO9SRmI4kXuI8k6MJMRKBfFaJdiL
// SIG // 8sbBlgLa8h/GnlVNNiOarfQrh9AkJC/4EJfwzQdpVgru
// SIG // GJM9+OrhcMee9BAtZ6GCF7AwghesBgorBgEEAYI3AwMB
// SIG // MYIXnDCCF5gGCSqGSIb3DQEHAqCCF4kwgheFAgEDMQ8w
// SIG // DQYJYIZIAWUDBAIBBQAwggFaBgsqhkiG9w0BCRABBKCC
// SIG // AUkEggFFMIIBQQIBAQYKKwYBBAGEWQoDATAxMA0GCWCG
// SIG // SAFlAwQCAQUABCAOK4cRajUDiJh3P1XYWKxbZoFpboQx
// SIG // /qXnGVJT8SFftgIGahGsGKZQGBMyMDI2MDYxNjEyNTcy
// SIG // My41NDJaMASAAgH0oIHZpIHWMIHTMQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFu
// SIG // ZCBPcGVyYXRpb25zIExpbWl0ZWQxJzAlBgNVBAsTHm5T
// SIG // aGllbGQgVFNTIEVTTjo2RjFBLTA1RTAtRDk0NzElMCMG
// SIG // A1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vydmlj
// SIG // ZaCCEf4wggcoMIIFEKADAgECAhMzAAACHAlVFdfDWQfR
// SIG // AAEAAAIcMA0GCSqGSIb3DQEBCwUAMHwxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFBDQSAyMDEwMB4XDTI1MDgxNDE4NDgzMVoX
// SIG // DTI2MTExMzE4NDgzMVowgdMxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xLTArBgNVBAsTJE1pY3Jvc29mdCBJcmVsYW5kIE9w
// SIG // ZXJhdGlvbnMgTGltaXRlZDEnMCUGA1UECxMeblNoaWVs
// SIG // ZCBUU1MgRVNOOjZGMUEtMDVFMC1EOTQ3MSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIC
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAow0x
// SIG // EAUaFIyyLIXeFzeI8IKyBON2u0Dr02ISE5p9G5CUXfnF
// SIG // u2S0E1gWCMvDWpopX6lRxjmgnqaL3BtnWlBVTo8xUNRZ
// SIG // u23ie4YBMAJB7Ut6mnqnHVwvDJxGO4TD3SnrCd+yg35B
// SIG // 9QFejq3o4+OByvXjynaypZyukcQaLsKQvoxE8ElHH7zc
// SIG // OXEJWmU3rnXzaW/S4SH3OPhoUbTTcy6nUgKx5pRWiQ24
// SIG // UEPLYzcxGJjqjkz+GiCWGPFHDMdW86laWvmCslouQPsN
// SIG // 2eBk8dxJcEZmW4l6p4TthoXcfexEA9YdYaMz10aMhZNp
// SIG // dsNaDtDQUMDEC3k1D1My69MXSPlUmD9xFyDlkXiVa7BC
// SIG // Ep3XcVtqTgzHGwr28JD6oE7zEPYeuZOiuCBXTZSo/wk3
// SIG // tbDlsESbIPV6inYqrzxiMYqlxfCdzC3Cimh9/NT/Lk9/
// SIG // aU+Iyyc9b3OaT0dZ8wgLaVDCGELRMrqyImdFHv0Mudct
// SIG // zW/kPsV3Ja9ufpKWujEiN3CW//X8hFa9j5ImNeQzcMit
// SIG // 3MoSaoGwnbiZJX1IyibIphlqccXFk4oTTSOQBsAUw8U0
// SIG // gwOnM5UJD8mBUBd65Np6NBkx2cviJ4I34GyXFCWyy5Ft
// SIG // 1QsBYyVfAG3KOhCfPHQf8lQzJvLr57YW0bD/xVs4Ag4g
// SIG // TS6KZNyFEfX9jFdRlr0CAwEAAaOCAUkwggFFMB0GA1Ud
// SIG // DgQWBBRa3mOCzB8u7zpvDh8MGKVYLCk7ZDAfBgNVHSME
// SIG // GDAWgBSfpxVdAF5iXYP05dJlpxtTNRnpcjBfBgNVHR8E
// SIG // WDBWMFSgUqBQhk5odHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vcGtpb3BzL2NybC9NaWNyb3NvZnQlMjBUaW1lLVN0
// SIG // YW1wJTIwUENBJTIwMjAxMCgxKS5jcmwwbAYIKwYBBQUH
// SIG // AQEEYDBeMFwGCCsGAQUFBzAChlBodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpb3BzL2NlcnRzL01pY3Jvc29m
// SIG // dCUyMFRpbWUtU3RhbXAlMjBQQ0ElMjAyMDEwKDEpLmNy
// SIG // dDAMBgNVHRMBAf8EAjAAMBYGA1UdJQEB/wQMMAoGCCsG
// SIG // AQUFBwMIMA4GA1UdDwEB/wQEAwIHgDANBgkqhkiG9w0B
// SIG // AQsFAAOCAgEAklb6w/deaid3BujQCtWFBe0n9pkyRy+y
// SIG // yWEg70iDwoJ5u0e0O+4GerNzdZb1zTPsHJ8EGMyo1K7y
// SIG // tL21+pmdFMTl19PC8OJ5Y2p+XKUQy2dD+hggRMmJgDQs
// SIG // gbOCxHYeO+jg4t+vg61wUrovzzLkH3z0PJXXvoNuBj9L
// SIG // da9CiNMd60451Kube99ArSf6ZMj3t0p4rFbgSazDs+8T
// SIG // J+8KA5GVaYjPHj9rlMuI3WjohEc9apnQ6hMjMck3jlHZ
// SIG // IwluVYeUQE0qjmApfMtTAEzbMUdY8sLTunL1GkbDSeKn
// SIG // 9O7llBGnNtyM1uM9Mdv1VyWh0z/IriQKIjntqqGyoF0H
// SIG // vDHOFZCyUDBPLflyiu7Y1zQ/sPounsb96aBfQdq3h3LO
// SIG // n6t+m9EnNz/G6MzzWvpJk6YgTHTIqeQN/F/XpiPvbfek
// SIG // 3nq/PYbL3au+kBfRUHiCFXSvt6lor0HC626vUmz9ZNPO
// SIG // xwEWLuccomxsy3JwWH79vsM/7ARqoG5h6d6NahfaOuRP
// SIG // 4XI9xtdH3Pa/NCLyQjxKXyLxzwQzjddkX2EpTJnlypuh
// SIG // PmEdea59Uz2E303LxyXSnKBvGsAnyWYAfnejr3YAiL9Y
// SIG // rN2l2dn198RpA4DCm9QtZYiwC0q2fuUvui34PfPIUZBy
// SIG // f7wHuuWu50hY9WLx1kOMI8xyo7AI6TaNrnIwggdxMIIF
// SIG // WaADAgECAhMzAAAAFcXna54Cm0mZAAAAAAAVMA0GCSqG
// SIG // SIb3DQEBCwUAMIGIMQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMTIw
// SIG // MAYDVQQDEylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0
// SIG // ZSBBdXRob3JpdHkgMjAxMDAeFw0yMTA5MzAxODIyMjVa
// SIG // Fw0zMDA5MzAxODMyMjVaMHwxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFBDQSAyMDEwMIICIjANBgkqhkiG9w0BAQEFAAOCAg8A
// SIG // MIICCgKCAgEA5OGmTOe0ciELeaLL1yR5vQ7VgtP97pwH
// SIG // B9KpbE51yMo1V/YBf2xK4OK9uT4XYDP/XE/HZveVU3Fa
// SIG // 4n5KWv64NmeFRiMMtY0Tz3cywBAY6GB9alKDRLemjkZr
// SIG // BxTzxXb1hlDcwUTIcVxRMTegCjhuje3XD9gmU3w5YQJ6
// SIG // xKr9cmmvHaus9ja+NSZk2pg7uhp7M62AW36MEBydUv62
// SIG // 6GIl3GoPz130/o5Tz9bshVZN7928jaTjkY+yOSxRnOlw
// SIG // aQ3KNi1wjjHINSi947SHJMPgyY9+tVSP3PoFVZhtaDua
// SIG // Rr3tpK56KTesy+uDRedGbsoy1cCGMFxPLOJiss254o2I
// SIG // 5JasAUq7vnGpF1tnYN74kpEeHT39IM9zfUGaRnXNxF80
// SIG // 3RKJ1v2lIH1+/NmeRd+2ci/bfV+AutuqfjbsNkz2K26o
// SIG // ElHovwUDo9Fzpk03dJQcNIIP8BDyt0cY7afomXw/TNuv
// SIG // XsLz1dhzPUNOwTM5TI4CvEJoLhDqhFFG4tG9ahhaYQFz
// SIG // ymeiXtcodgLiMxhy16cg8ML6EgrXY28MyTZki1ugpoMh
// SIG // XV8wdJGUlNi5UPkLiWHzNgY1GIRH29wb0f2y1BzFa/Zc
// SIG // UlFdEtsluq9QBXpsxREdcu+N+VLEhReTwDwV2xo3xwgV
// SIG // GD94q0W29R6HXtqPnhZyacaue7e3PmriLq0CAwEAAaOC
// SIG // Ad0wggHZMBIGCSsGAQQBgjcVAQQFAgMBAAEwIwYJKwYB
// SIG // BAGCNxUCBBYEFCqnUv5kxJq+gpE8RjUpzxD/LwTuMB0G
// SIG // A1UdDgQWBBSfpxVdAF5iXYP05dJlpxtTNRnpcjBcBgNV
// SIG // HSAEVTBTMFEGDCsGAQQBgjdMg30BATBBMD8GCCsGAQUF
// SIG // BwIBFjNodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // b3BzL0RvY3MvUmVwb3NpdG9yeS5odG0wEwYDVR0lBAww
// SIG // CgYIKwYBBQUHAwgwGQYJKwYBBAGCNxQCBAweCgBTAHUA
// SIG // YgBDAEEwCwYDVR0PBAQDAgGGMA8GA1UdEwEB/wQFMAMB
// SIG // Af8wHwYDVR0jBBgwFoAU1fZWy4/oolxiaNE9lJBb186a
// SIG // GMQwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0cDovL2NybC5t
// SIG // aWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMvTWlj
// SIG // Um9vQ2VyQXV0XzIwMTAtMDYtMjMuY3JsMFoGCCsGAQUF
// SIG // BwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0cDovL3d3dy5t
// SIG // aWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNSb29DZXJB
// SIG // dXRfMjAxMC0wNi0yMy5jcnQwDQYJKoZIhvcNAQELBQAD
// SIG // ggIBAJ1VffwqreEsH2cBMSRb4Z5yS/ypb+pcFLY+Tkdk
// SIG // eLEGk5c9MTO1OdfCcTY/2mRsfNB1OW27DzHkwo/7bNGh
// SIG // lBgi7ulmZzpTTd2YurYeeNg2LpypglYAA7AFvonoaeC6
// SIG // Ce5732pvvinLbtg/SHUB2RjebYIM9W0jVOR4U3UkV7nd
// SIG // n/OOPcbzaN9l9qRWqveVtihVJ9AkvUCgvxm2EhIRXT0n
// SIG // 4ECWOKz3+SmJw7wXsFSFQrP8DJ6LGYnn8AtqgcKBGUIZ
// SIG // UnWKNsIdw2FzLixre24/LAl4FOmRsqlb30mjdAy87JGA
// SIG // 0j3mSj5mO0+7hvoyGtmW9I/2kQH2zsZ0/fZMcm8Qq3Uw
// SIG // xTSwethQ/gpY3UA8x1RtnWN0SCyxTkctwRQEcb9k+SS+
// SIG // c23Kjgm9swFXSVRk2XPXfx5bRAGOWhmRaw2fpCjcZxko
// SIG // JLo4S5pu+yFUa2pFEUep8beuyOiJXk+d0tBMdrVXVAmx
// SIG // aQFEfnyhYWxz/gq77EFmPWn9y8FBSX5+k77L+DvktxW/
// SIG // tM4+pTFRhLy/AsGConsXHRWJjXD+57XQKBqJC4822rpM
// SIG // +Zv/Cuk0+CQ1ZyvgDbjmjJnW4SLq8CdCPSWU5nR0W2rR
// SIG // nj7tfqAxM328y+l7vzhwRNGQ8cirOoo6CGJ/2XBjU02N
// SIG // 7oJtpQUQwXEGahC0HVUzWLOhcGbyoYIDWTCCAkECAQEw
// SIG // ggEBoYHZpIHWMIHTMQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMS0w
// SIG // KwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFuZCBPcGVyYXRp
// SIG // b25zIExpbWl0ZWQxJzAlBgNVBAsTHm5TaGllbGQgVFNT
// SIG // IEVTTjo2RjFBLTA1RTAtRDk0NzElMCMGA1UEAxMcTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZaIjCgEBMAcG
// SIG // BSsOAwIaAxUAWmTiA01u5mxq/nVxiRJLMOskVGeggYMw
// SIG // gYCkfjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQD
// SIG // Ex1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAN
// SIG // BgkqhkiG9w0BAQsFAAIFAO3bI9MwIhgPMjAyNjA2MTYw
// SIG // MTIyMjdaGA8yMDI2MDYxNzAxMjIyN1owdzA9BgorBgEE
// SIG // AYRZCgQBMS8wLTAKAgUA7dsj0wIBADAKAgEAAgIN1wIB
// SIG // /zAHAgEAAgITjTAKAgUA7dx1UwIBADA2BgorBgEEAYRZ
// SIG // CgQCMSgwJjAMBgorBgEEAYRZCgMCoAowCAIBAAIDB6Eg
// SIG // oQowCAIBAAIDAYagMA0GCSqGSIb3DQEBCwUAA4IBAQDB
// SIG // NrD81NcCE++msTzqijSmRmo+kFF1myGIzUXjK2nEqBdK
// SIG // 3tBpuyJx9gK3jctmNtl4LIpHGlbwEEykcTzIgMpQhKs0
// SIG // WfHj/x3onyk4Xft9D3Q6fsksCfxirHWhnM1LYo1v3Rln
// SIG // FmmSUW6XbzdCc7424Eduhe6K86EShPYdB2tbgjNCFFTV
// SIG // FW0tCvxeyUHc57v/OybSv4iy91w7hkzV/aqv7T0xI/dn
// SIG // 0aPZcK059V+Bt1wkSSaJAtARwbQwe7UtmLTAKE6z3FVt
// SIG // 4GqT328ACEUvbx3Jp5T4lIfIGcjIabRYR9Oqbuekni1q
// SIG // /vJLjfaVbBBuyjpzYobC70Odhi8zlLs0MYIEDTCCBAkC
// SIG // AQEwgZMwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAC
// SIG // EzMAAAIcCVUV18NZB9EAAQAAAhwwDQYJYIZIAWUDBAIB
// SIG // BQCgggFKMBoGCSqGSIb3DQEJAzENBgsqhkiG9w0BCRAB
// SIG // BDAvBgkqhkiG9w0BCQQxIgQgtbPrmd7r7aFfbO/t3vA6
// SIG // D9fe5OyFuGdEUqNxpzzNhkswgfoGCyqGSIb3DQEJEAIv
// SIG // MYHqMIHnMIHkMIG9BCCgIGkmNhdo7+KE7dWhI+E2Ctx2
// SIG // RLWoYvvJodCIciHHaDCBmDCBgKR+MHwxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFBDQSAyMDEwAhMzAAACHAlVFdfDWQfRAAEA
// SIG // AAIcMCIEIN1p+AX8U4yHIzYzGAAb42V08qYGiYmGR7yp
// SIG // /GDOOehCMA0GCSqGSIb3DQEBCwUABIICAAo6I4H3wOC6
// SIG // J+7S4BVgimMa7yuMCz37ZPkv+MPASrn2yXTEJgjvh5Z+
// SIG // 3vkGjgg+lnVEtFfXjCx8SOEzTiHKGE5t4fBDudcSWy+d
// SIG // bs2pStyfi/KDzExrluSd4qYzVGJIzZdNOr4htBRs4FvL
// SIG // g/+DzZXAyZKfpfxnbgrIeBk1udUhghWgplp7mwO6avQN
// SIG // FVkhErdwbYIHveHMgooyBayT9Mfom4+pkp+1Qp2Ja8E+
// SIG // lBA0F2LkRmITGSYk+V8UyKcdl78IcdQeZlETFBUrmfBe
// SIG // E+yWIDlg9XZoAWAdtHbV8jPgO7J37Hw0sbWvkZzh9PN7
// SIG // RGqA1xS05SbB+eA5kJevpTFIlt3xRcZIRmVB7jPBoLu6
// SIG // STc6V5MU0ILMsCV2SCJAqLi7+y7a49z8B/RjxJTMI95O
// SIG // HuUFQftob5HvihIgeio71khO5WNJzmA3FEG5slKN/kVA
// SIG // ml8q8Uwn+OxRfjQvxp7stqM4NDZqimd3VAHivV93u+4j
// SIG // JLqaj6K0qa7VdOrG7Za0MFXg4RtBuVOsjL5Vsfbcjto/
// SIG // +vVvWSFdt+Or9iGBKJha7fWmkjhPRQrWIvOHphcU+RGt
// SIG // /oJb7WFyeYW5hkjvsOJqCOJEacRkfCEX3IE7ibn9Tv0A
// SIG // EjL/wAZaV27dt03BMlZNGH5QWvnkc03Ngj0SRfDYUAx7
// SIG // D7/6slkfhIsx
// SIG // End signature block
