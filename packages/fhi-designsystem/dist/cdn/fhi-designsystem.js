/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N = globalThis,
  V =
    N.ShadowRoot &&
    (N.ShadyCSS === void 0 || N.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  W = Symbol(),
  K = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(t, e, r) {
    if (((this._$cssResult$ = !0), r !== W))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.',
      );
    (this.cssText = t), (this.t = e);
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (V && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = K.get(e)),
        t === void 0 &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          r && K.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const lt = i => new it(typeof i == 'string' ? i : i + '', void 0, W),
  ht = (i, ...t) => {
    const e =
      i.length === 1
        ? i[0]
        : t.reduce(
            (r, o, a) =>
              r +
              (s => {
                if (s._$cssResult$ === !0) return s.cssText;
                if (typeof s == 'number') return s;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    s +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                );
              })(o) +
              i[a + 1],
            i[0],
          );
    return new it(e, i, W);
  },
  dt = (i, t) => {
    if (V)
      i.adoptedStyleSheets = t.map(e =>
        e instanceof CSSStyleSheet ? e : e.styleSheet,
      );
    else
      for (const e of t) {
        const r = document.createElement('style'),
          o = N.litNonce;
        o !== void 0 && r.setAttribute('nonce', o),
          (r.textContent = e.cssText),
          i.appendChild(r);
      }
  },
  Z = V
    ? i => i
    : i =>
        i instanceof CSSStyleSheet
          ? (t => {
              let e = '';
              for (const r of t.cssRules) e += r.cssText;
              return lt(e);
            })(i)
          : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
    is: ut,
    defineProperty: ft,
    getOwnPropertyDescriptor: pt,
    getOwnPropertyNames: vt,
    getOwnPropertySymbols: gt,
    getPrototypeOf: bt,
  } = Object,
  g = globalThis,
  J = g.trustedTypes,
  $t = J ? J.emptyScript : '',
  B = g.reactiveElementPolyfillSupport,
  S = (i, t) => i,
  M = {
    toAttribute(i, t) {
      switch (t) {
        case Boolean:
          i = i ? $t : null;
          break;
        case Object:
        case Array:
          i = i == null ? i : JSON.stringify(i);
      }
      return i;
    },
    fromAttribute(i, t) {
      let e = i;
      switch (t) {
        case Boolean:
          e = i !== null;
          break;
        case Number:
          e = i === null ? null : Number(i);
          break;
        case Object:
        case Array:
          try {
            e = JSON.parse(i);
          } catch {
            e = null;
          }
      }
      return e;
    },
  },
  q = (i, t) => !ut(i, t),
  G = { attribute: !0, type: String, converter: M, reflect: !1, hasChanged: q };
Symbol.metadata ?? (Symbol.metadata = Symbol('metadata')),
  g.litPropertyMetadata ??
    (g.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class m extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = G) {
    if (
      (e.state && (e.attribute = !1),
      this._$Ei(),
      this.elementProperties.set(t, e),
      !e.noAccessor)
    ) {
      const r = Symbol(),
        o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && ft(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: a } = pt(this.prototype, t) ?? {
      get() {
        return this[e];
      },
      set(s) {
        this[e] = s;
      },
    };
    return {
      get() {
        return o == null ? void 0 : o.call(this);
      },
      set(s) {
        const c = o == null ? void 0 : o.call(this);
        a.call(this, s), this.requestUpdate(t, c, r);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? G;
  }
  static _$Ei() {
    if (this.hasOwnProperty(S('elementProperties'))) return;
    const t = bt(this);
    t.finalize(),
      t.l !== void 0 && (this.l = [...t.l]),
      (this.elementProperties = new Map(t.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(S('finalized'))) return;
    if (
      ((this.finalized = !0), this._$Ei(), this.hasOwnProperty(S('properties')))
    ) {
      const e = this.properties,
        r = [...vt(e), ...gt(e)];
      for (const o of r) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0)
        for (const [r, o] of e) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const o = this._$Eu(e, r);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(Z(o));
    } else t !== void 0 && e.push(Z(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1
      ? void 0
      : typeof r == 'string'
        ? r
        : typeof t == 'string'
          ? t.toLowerCase()
          : void 0;
  }
  constructor() {
    super(),
      (this._$Ep = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Em = null),
      this._$Ev();
  }
  _$Ev() {
    var t;
    (this._$ES = new Promise(e => (this.enableUpdating = e))),
      (this._$AL = /* @__PURE__ */ new Map()),
      this._$E_(),
      this.requestUpdate(),
      (t = this.constructor.l) == null || t.forEach(e => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(),
      e = this.constructor.elementProperties;
    for (const r of e.keys())
      this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return dt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$EO) == null ||
        t.forEach(e => {
          var r;
          return (r = e.hostConnected) == null ? void 0 : r.call(e);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null ||
      t.forEach(e => {
        var r;
        return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
      });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$EC(t, e) {
    var a;
    const r = this.constructor.elementProperties.get(t),
      o = this.constructor._$Eu(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const s = (
        ((a = r.converter) == null ? void 0 : a.toAttribute) !== void 0
          ? r.converter
          : M
      ).toAttribute(e, r.type);
      (this._$Em = t),
        s == null ? this.removeAttribute(o) : this.setAttribute(o, s),
        (this._$Em = null);
    }
  }
  _$AK(t, e) {
    var a;
    const r = this.constructor,
      o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const s = r.getPropertyOptions(o),
        c =
          typeof s.converter == 'function'
            ? { fromAttribute: s.converter }
            : ((a = s.converter) == null ? void 0 : a.fromAttribute) !== void 0
              ? s.converter
              : M;
      (this._$Em = o),
        (this[o] = c.fromAttribute(e, s.type)),
        (this._$Em = null);
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      if (
        (r ?? (r = this.constructor.getPropertyOptions(t)),
        !(r.hasChanged ?? q)(this[t], e))
      )
        return;
      this.P(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, r) {
    this._$AL.has(t) || this._$AL.set(t, e),
      r.reflect === !0 &&
        this._$Em !== t &&
        (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (
        (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
        this._$Ep)
      ) {
        for (const [a, s] of this._$Ep) this[a] = s;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0)
        for (const [a, s] of o)
          s.wrapped !== !0 ||
            this._$AL.has(a) ||
            this[a] === void 0 ||
            this.P(a, this[a], s);
    }
    let t = !1;
    const e = this._$AL;
    try {
      (t = this.shouldUpdate(e)),
        t
          ? (this.willUpdate(e),
            (r = this._$EO) == null ||
              r.forEach(o => {
                var a;
                return (a = o.hostUpdate) == null ? void 0 : a.call(o);
              }),
            this.update(e))
          : this._$EU();
    } catch (o) {
      throw ((t = !1), this._$EU(), o);
    }
    t && this._$AE(e);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    (e = this._$EO) == null ||
      e.forEach(r => {
        var o;
        return (o = r.hostUpdated) == null ? void 0 : o.call(r);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$EU() {
    (this._$AL = /* @__PURE__ */ new Map()), (this.isUpdatePending = !1);
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
    this._$Ej && (this._$Ej = this._$Ej.forEach(e => this._$EC(e, this[e]))),
      this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
}
(m.elementStyles = []),
  (m.shadowRootOptions = { mode: 'open' }),
  (m[S('elementProperties')] = /* @__PURE__ */ new Map()),
  (m[S('finalized')] = /* @__PURE__ */ new Map()),
  B == null || B({ ReactiveElement: m }),
  (g.reactiveElementVersions ?? (g.reactiveElementVersions = [])).push('2.0.4');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w = globalThis,
  R = w.trustedTypes,
  Q = R ? R.createPolicy('lit-html', { createHTML: i => i }) : void 0,
  st = '$lit$',
  v = `lit$${Math.random().toFixed(9).slice(2)}$`,
  at = '?' + v,
  _t = `<${at}>`,
  _ = document,
  P = () => _.createComment(''),
  U = i => i === null || (typeof i != 'object' && typeof i != 'function'),
  F = Array.isArray,
  yt = i =>
    F(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == 'function',
  L = `[ 	
\f\r]`,
  E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Y = /-->/g,
  X = />/g,
  b = RegExp(
    `>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    'g',
  ),
  tt = /'/g,
  et = /"/g,
  nt = /^(?:script|style|textarea|title)$/i,
  mt =
    i =>
    (t, ...e) => ({ _$litType$: i, strings: t, values: e }),
  At = mt(1),
  A = Symbol.for('lit-noChange'),
  d = Symbol.for('lit-nothing'),
  rt = /* @__PURE__ */ new WeakMap(),
  $ = _.createTreeWalker(_, 129);
function ct(i, t) {
  if (!F(i) || !i.hasOwnProperty('raw'))
    throw Error('invalid template strings array');
  return Q !== void 0 ? Q.createHTML(t) : t;
}
const xt = (i, t) => {
  const e = i.length - 1,
    r = [];
  let o,
    a = t === 2 ? '<svg>' : t === 3 ? '<math>' : '',
    s = E;
  for (let c = 0; c < e; c++) {
    const n = i[c];
    let h,
      u,
      l = -1,
      f = 0;
    for (; f < n.length && ((s.lastIndex = f), (u = s.exec(n)), u !== null); )
      (f = s.lastIndex),
        s === E
          ? u[1] === '!--'
            ? (s = Y)
            : u[1] !== void 0
              ? (s = X)
              : u[2] !== void 0
                ? (nt.test(u[2]) && (o = RegExp('</' + u[2], 'g')), (s = b))
                : u[3] !== void 0 && (s = b)
          : s === b
            ? u[0] === '>'
              ? ((s = o ?? E), (l = -1))
              : u[1] === void 0
                ? (l = -2)
                : ((l = s.lastIndex - u[2].length),
                  (h = u[1]),
                  (s = u[3] === void 0 ? b : u[3] === '"' ? et : tt))
            : s === et || s === tt
              ? (s = b)
              : s === Y || s === X
                ? (s = E)
                : ((s = b), (o = void 0));
    const p = s === b && i[c + 1].startsWith('/>') ? ' ' : '';
    a +=
      s === E
        ? n + _t
        : l >= 0
          ? (r.push(h), n.slice(0, l) + st + n.slice(l) + v + p)
          : n + v + (l === -2 ? c : p);
  }
  return [
    ct(
      i,
      a + (i[e] || '<?>') + (t === 2 ? '</svg>' : t === 3 ? '</math>' : ''),
    ),
    r,
  ];
};
class C {
  constructor({ strings: t, _$litType$: e }, r) {
    let o;
    this.parts = [];
    let a = 0,
      s = 0;
    const c = t.length - 1,
      n = this.parts,
      [h, u] = xt(t, e);
    if (
      ((this.el = C.createElement(h, r)),
      ($.currentNode = this.el.content),
      e === 2 || e === 3)
    ) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (o = $.nextNode()) !== null && n.length < c; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes())
          for (const l of o.getAttributeNames())
            if (l.endsWith(st)) {
              const f = u[s++],
                p = o.getAttribute(l).split(v),
                H = /([.?@])?(.*)/.exec(f);
              n.push({
                type: 1,
                index: a,
                name: H[2],
                strings: p,
                ctor:
                  H[1] === '.' ? St : H[1] === '?' ? wt : H[1] === '@' ? kt : z,
              }),
                o.removeAttribute(l);
            } else
              l.startsWith(v) &&
                (n.push({ type: 6, index: a }), o.removeAttribute(l));
        if (nt.test(o.tagName)) {
          const l = o.textContent.split(v),
            f = l.length - 1;
          if (f > 0) {
            o.textContent = R ? R.emptyScript : '';
            for (let p = 0; p < f; p++)
              o.append(l[p], P()),
                $.nextNode(),
                n.push({ type: 2, index: ++a });
            o.append(l[f], P());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === at) n.push({ type: 2, index: a });
        else {
          let l = -1;
          for (; (l = o.data.indexOf(v, l + 1)) !== -1; )
            n.push({ type: 7, index: a }), (l += v.length - 1);
        }
      a++;
    }
  }
  static createElement(t, e) {
    const r = _.createElement('template');
    return (r.innerHTML = t), r;
  }
}
function x(i, t, e = i, r) {
  var s, c;
  if (t === A) return t;
  let o = r !== void 0 ? ((s = e.o) == null ? void 0 : s[r]) : e.l;
  const a = U(t) ? void 0 : t._$litDirective$;
  return (
    (o == null ? void 0 : o.constructor) !== a &&
      ((c = o == null ? void 0 : o._$AO) == null || c.call(o, !1),
      a === void 0 ? (o = void 0) : ((o = new a(i)), o._$AT(i, e, r)),
      r !== void 0 ? ((e.o ?? (e.o = []))[r] = o) : (e.l = o)),
    o !== void 0 && (t = x(i, o._$AS(i, t.values), o, r)),
    t
  );
}
class Et {
  constructor(t, e) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const {
        el: { content: e },
        parts: r,
      } = this._$AD,
      o = ((t == null ? void 0 : t.creationScope) ?? _).importNode(e, !0);
    $.currentNode = o;
    let a = $.nextNode(),
      s = 0,
      c = 0,
      n = r[0];
    for (; n !== void 0; ) {
      if (s === n.index) {
        let h;
        n.type === 2
          ? (h = new O(a, a.nextSibling, this, t))
          : n.type === 1
            ? (h = new n.ctor(a, n.name, n.strings, this, t))
            : n.type === 6 && (h = new Pt(a, this, t)),
          this._$AV.push(h),
          (n = r[++c]);
      }
      s !== (n == null ? void 0 : n.index) && ((a = $.nextNode()), s++);
    }
    return ($.currentNode = _), o;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV)
      r !== void 0 &&
        (r.strings !== void 0
          ? (r._$AI(t, r, e), (e += r.strings.length - 2))
          : r._$AI(t[e])),
        e++;
  }
}
class O {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this.v;
  }
  constructor(t, e, r, o) {
    (this.type = 2),
      (this._$AH = d),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = r),
      (this.options = o),
      (this.v = (o == null ? void 0 : o.isConnected) ?? !0);
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return (
      e !== void 0 &&
        (t == null ? void 0 : t.nodeType) === 11 &&
        (t = e.parentNode),
      t
    );
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    (t = x(this, t, e)),
      U(t)
        ? t === d || t == null || t === ''
          ? (this._$AH !== d && this._$AR(), (this._$AH = d))
          : t !== this._$AH && t !== A && this._(t)
        : t._$litType$ !== void 0
          ? this.$(t)
          : t.nodeType !== void 0
            ? this.T(t)
            : yt(t)
              ? this.k(t)
              : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
  }
  _(t) {
    this._$AH !== d && U(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.T(_.createTextNode(t)),
      (this._$AH = t);
  }
  $(t) {
    var a;
    const { values: e, _$litType$: r } = t,
      o =
        typeof r == 'number'
          ? this._$AC(t)
          : (r.el === void 0 &&
              (r.el = C.createElement(ct(r.h, r.h[0]), this.options)),
            r);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === o) this._$AH.p(e);
    else {
      const s = new Et(o, this),
        c = s.u(this.options);
      s.p(e), this.T(c), (this._$AH = s);
    }
  }
  _$AC(t) {
    let e = rt.get(t.strings);
    return e === void 0 && rt.set(t.strings, (e = new C(t))), e;
  }
  k(t) {
    F(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let r,
      o = 0;
    for (const a of t)
      o === e.length
        ? e.push((r = new O(this.O(P()), this.O(P()), this, this.options)))
        : (r = e[o]),
        r._$AI(a),
        o++;
    o < e.length && (this._$AR(r && r._$AB.nextSibling, o), (e.length = o));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for (
      (r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const o = t.nextSibling;
      t.remove(), (t = o);
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 &&
      ((this.v = t), (e = this._$AP) == null || e.call(this, t));
  }
}
class z {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, o, a) {
    (this.type = 1),
      (this._$AH = d),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = o),
      (this.options = a),
      r.length > 2 || r[0] !== '' || r[1] !== ''
        ? ((this._$AH = Array(r.length - 1).fill(new String())),
          (this.strings = r))
        : (this._$AH = d);
  }
  _$AI(t, e = this, r, o) {
    const a = this.strings;
    let s = !1;
    if (a === void 0)
      (t = x(this, t, e, 0)),
        (s = !U(t) || (t !== this._$AH && t !== A)),
        s && (this._$AH = t);
    else {
      const c = t;
      let n, h;
      for (t = a[0], n = 0; n < a.length - 1; n++)
        (h = x(this, c[r + n], e, n)),
          h === A && (h = this._$AH[n]),
          s || (s = !U(h) || h !== this._$AH[n]),
          h === d ? (t = d) : t !== d && (t += (h ?? '') + a[n + 1]),
          (this._$AH[n] = h);
    }
    s && !o && this.j(t);
  }
  j(t) {
    t === d
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? '');
  }
}
class St extends z {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class wt extends z {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class kt extends z {
  constructor(t, e, r, o, a) {
    super(t, e, r, o, a), (this.type = 5);
  }
  _$AI(t, e = this) {
    if ((t = x(this, t, e, 0) ?? d) === A) return;
    const r = this._$AH,
      o =
        (t === d && r !== d) ||
        t.capture !== r.capture ||
        t.once !== r.once ||
        t.passive !== r.passive,
      a = t !== d && (r === d || o);
    o && this.element.removeEventListener(this.name, this, r),
      a && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == 'function'
      ? this._$AH.call(
          ((e = this.options) == null ? void 0 : e.host) ?? this.element,
          t,
        )
      : this._$AH.handleEvent(t);
  }
}
class Pt {
  constructor(t, e, r) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = r);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    x(this, t);
  }
}
const I = w.litHtmlPolyfillSupport;
I == null || I(C, O),
  (w.litHtmlVersions ?? (w.litHtmlVersions = [])).push('3.2.0');
const Ut = (i, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = r._$litPart$;
  if (o === void 0) {
    const a = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = o = new O(t.insertBefore(P(), a), a, void 0, e ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class k extends m {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this.o = void 0);
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (
      (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild),
      t
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this.o = Ut(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this.o) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.o) == null || t.setConnected(!1);
  }
  render() {
    return A;
  }
}
var ot;
(k._$litElement$ = !0),
  (k.finalized = !0),
  (ot = globalThis.litElementHydrateSupport) == null ||
    ot.call(globalThis, { LitElement: k });
const D = globalThis.litElementPolyfillSupport;
D == null || D({ LitElement: k });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push(
  '4.1.0',
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ct = i => (t, e) => {
  e !== void 0
    ? e.addInitializer(() => {
        customElements.define(i, t);
      })
    : customElements.define(i, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ot = {
    attribute: !0,
    type: String,
    converter: M,
    reflect: !1,
    hasChanged: q,
  },
  Tt = (i = Ot, t, e) => {
    const { kind: r, metadata: o } = e;
    let a = globalThis.litPropertyMetadata.get(o);
    if (
      (a === void 0 &&
        globalThis.litPropertyMetadata.set(o, (a = /* @__PURE__ */ new Map())),
      a.set(e.name, i),
      r === 'accessor')
    ) {
      const { name: s } = e;
      return {
        set(c) {
          const n = t.get.call(this);
          t.set.call(this, c), this.requestUpdate(s, n, i);
        },
        init(c) {
          return c !== void 0 && this.P(s, void 0, i), c;
        },
      };
    }
    if (r === 'setter') {
      const { name: s } = e;
      return function (c) {
        const n = this[s];
        t.call(this, c), this.requestUpdate(s, n, i);
      };
    }
    throw Error('Unsupported decorator location: ' + r);
  };
function j(i) {
  return (t, e) =>
    typeof e == 'object'
      ? Tt(i, t, e)
      : ((r, o, a) => {
          const s = o.hasOwnProperty(a);
          return (
            o.constructor.createProperty(a, s ? { ...r, wrapped: !0 } : r),
            s ? Object.getOwnPropertyDescriptor(o, a) : void 0
          );
        })(i, t, e);
}
var Ht = Object.defineProperty,
  Nt = Object.getOwnPropertyDescriptor,
  T = (i, t, e, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Nt(t, e) : t, a = i.length - 1, s;
      a >= 0;
      a--
    )
      (s = i[a]) && (o = (r ? s(t, e, o) : s(o)) || o);
    return r && o && Ht(t, e, o), o;
  };
const Mt = 'fhi-button';
let y = class extends k {
  constructor() {
    super(...arguments),
      (this.color = 'accent'),
      (this.variant = 'strong'),
      (this.size = 'medium'),
      (this.disabled = !1);
  }
  render() {
    return At`<button ?disabled=${this.disabled}>
      <slot></slot>
    </button>`;
  }
};
y.styles = ht`
    :host {
      button {
        border-radius: var(--fhi-border-radius-full);
        border: var(--fhi-border-width);
        font-family: var(--fhi-font-family-roboto-flex);

        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition-duration: var(--fhi-duration-quick);
        transition-timing-function: cubic-bezier(var(--fhi-ease-default));

        cursor: pointer;
        &:disabled {
          opacity: var(--fhi-opacity-disabled);
          cursor: not-allowed;
        }
      }
    }

    :host([size='large']) button {
      font-size: var(--fhi-typography-label-large-font-size);
      font-weight: var(--fhi-typography-label-large-font-weight);
      line-height: var(--fhi-typography-label-large-line-height);
      letter-spacing: var(--fhi-typography-label-large-letter-spacing);

      padding-top: var(--fhi-spacing-200);
      padding-right: var(--fhi-spacing-300);
      padding-bottom: var(--fhi-spacing-200);
      padding-left: var(--fhi-spacing-300);
      gap: var(--fhi-spacing-100);
    }

    :host([size='medium']) button {
      font-size: var(--fhi-typography-label-medium-font-size);
      font-weight: var(--fhi-typography-label-medium-font-weight);
      line-height: var(--fhi-typography-label-medium-line-height);
      letter-spacing: var(--fhi-typography-label-medium-letter-spacing);

      padding-top: var(--fhi-spacing-100);
      padding-right: var(--fhi-spacing-200);
      padding-bottom: var(--fhi-spacing-100);
      padding-left: var(--fhi-spacing-200);
      gap: var(--fhi-spacing-050);
    }

    :host([size='small']) button {
      font-size: var(--fhi-tyopgraphy-label-medium-font-size);
      font-weight: var(--fhi-typography-label-medium-font-weight);
      line-height: var(--fhi-typography-label-medium-line-height);
      letter-spacing: var(--fhi-typography-label-medium-letter-spacing);

      padding-top: var(--fhi-spacing-050);
      padding-right: var(--fhi-spacing-150);
      padding-bottom: var(--fhi-spacing-050);
      padding-left: var(--fhi-spacing-150);
    }

    :host([color='accent'][variant='strong']) button {
      background-color: var(--fhi-color-accent-base);
      border-color: var(--fhi-color-accent-base);
      color: var(--fhi-color-accent-text-inverted);
      &:hover {
        background-color: var(--fhi-color-accent-base-hover);
        border-color: var(--fhi-color-accent-base-hover);
      }
      &:active {
        background-color: var(--fhi-color-accent-base-active);
        border-color: var(--fhi-color-accent-base-active);
      }
      &:disabled {
        background-color: var(--fhi-color-accent-base);
        border-color: var(--fhi-color-accent-base);
        color: var(--fhi-color-accent-text-inverted);
      }
    }

    :host([color='accent'][variant='subtle']) button {
      background-color: var(--fhi-color-accent-surface);
      border-color: var(--fhi-color-accent-surface);
      color: var(--fhi-color-accent-text-subtle);
      &:hover {
        background-color: var(--fhi-color-accent-surface-hover);
        border-color: var(--fhi-color-accent-surface-hover);
      }
      &:active {
        background-color: var(--fhi-color-accent-surface-active);
        border-color: var(--fhi-color-accent-surface-active);
      }
      &:disabled {
        background-color: var(--fhi-color-accent-surface);
        border-color: var(--fhi-color-accent-surface);
      }
    }

    :host([color='accent'][variant='outlined']) button {
      border-color: var(--fhi-color-accent-border);
      color: var(--fhi-color-accent-text-subtle);
      background-color: transparent;
      &:hover {
        background-color: var(--fhi-color-accent-surface);
        border-color: var(--fhi-color-accent-surface);
      }
      &:active {
        background-color: var(--fhi-color-accent-surface-hover);
        border-color: var(--fhi-color-accent-surface-hover);
      }
      &:disabled {
        border-color: var(--fhi-color-accent-border);
        background-color: transparent;
      }
    }

    :host([color='accent'][variant='text']) button {
      background-color: transparent;
      border-color: transparent;
      color: var(--fhi-color-accent-text-subtle);
      &:hover {
        background-color: var(--fhi-color-accent-surface);
        border-color: var(--fhi-color-accent-surface);
        color: var(--fhi-color-accent-text);
      }
      &:active {
        background-color: var(--fhi-color-accent-surface-hover);
        border-color: var(--fhi-color-accent-surface-hover);
        color: var(--fhi-color-accent-text);
      }
      &:disabled {
        background-color: transparent;
        color: var(--fhi-color-accent-text-subtle);
      }
    }

    :host([color='neutral'][variant='strong']) button {
      background-color: var(--fhi-color-neutral-base);
      border-color: var(--fhi-color-neutral-base);
      color: var(--fhi-color-neutral-text-inverted);
      &:hover {
        background-color: var(--fhi-color-neutral-base-hover);
        border-color: var(--fhi-color-neutral-base-hover);
        color: var(--fhi-color-neutral-text-inverted);
      }
      &:active {
        background-color: var(--fhi-color-neutral-base-active);
        border-color: var(--fhi-color-neutral-base-active);
        color: var(--fhi-color-neutral-text-inverted);
      }
      &:disabled {
        background-color: var(--fhi-color-neutral-base);
        border-color: var(--fhi-color-neutral-base);
        color: var(--fhi-color-neutral-text-inverted);
      }
    }

    :host([color='neutral'][variant='subtle']) button {
      background-color: var(--fhi-color-neutral-surface);
      border-color: var(--fhi-color-neutral-surface);
      color: var(--fhi-color-neutral-text-subtle);
      &:hover {
        background-color: var(--fhi-color-neutral-surface-hover);
        border-color: var(--fhi-color-neutral-surface-hover);
        color: var(--fhi-color-neutral-text);
      }
      &:active {
        background-color: var(--fhi-color-neutral-surface-active);
        border-color: var(--fhi-color-neutral-surface-active);
        color: var(--fhi-color-neutral-text);
      }
      &:disabled {
        background-color: var(--fhi-color-neutral-surface);
        border-color: var(--fhi-color-neutral-surface);
        color: var(--fhi-color-neutral-text);
      }
    }

    :host([color='neutral'][variant='outlined']) button {
      border-color: var(--fhi-color-neutral-border);
      color: var(--fhi-color-neutral-text-subtle);
      background-color: transparent;
      &:hover {
        background-color: var(--fhi-color-neutral-surface);
        border-color: var(--fhi-color-neutral-surface);
        color: var(--fhi-color-neutral-text);
      }
      &:active {
        background-color: var(--fhi-color-neutral-surface-hover);
        border-color: var(--fhi-color-neutral-surface-hover);
        color: var(--fhi-color-neutral-text);
      }
      &:disabled {
        border-color: var(--fhi-color-neutral-border);
        color: var(--fhi-color-neutral-text-subtle);
        background-color: transparent;
      }
    }

    :host([color='neutral'][variant='text']) button {
      background-color: transparent;
      border-color: transparent;
      color: var(--fhi-color-neutral-text-subtle);
      &:hover {
        background-color: var(--fhi-color-neutral-surface);
        border-color: var(--fhi-color-neutral-surface);
        color: var(--fhi-color-neutral-text);
      }
      &:active {
        background-color: var(--fhi-color-neutral-surface-hover);
        border-color: var(--fhi-color-neutral-surface-hover);
        color: var(--fhi-color-neutral-text);
      }
      &:disabled {
        background-color: transparent;
        border-color: transparent;
        color: var(--fhi-color-neutral-text-subtle);
      }
    }

    :host([color='danger'][variant='strong']) button {
      background-color: var(--fhi-color-danger-base);
      border-color: var(--fhi-color-danger-base);
      color: var(--fhi-color-danger-text-inverted);
      &:hover {
        background-color: var(--fhi-color-danger-base-hover);
        border-color: var(--fhi-color-danger-base-hover);
      }
      &:active {
        background-color: var(--fhi-color-danger-base-active);
        border-color: var(--fhi-color-danger-base-active);
      }
      &:disabled {
        background-color: var(--fhi-color-danger-base);
        border-color: var(--fhi-color-danger-base);
      }
    }

    :host([color='danger'][variant='subtle']) button {
      background-color: var(--fhi-color-danger-surface);
      border-color: var(--fhi-color-danger-surface);
      color: var(--fhi-color-danger-text-subtle);
      &:hover {
        background-color: var(--fhi-color-danger-surface-hover);
        border-color: var(--fhi-color-danger-surface-hover);
        color: var(--fhi-color-danger-text);
      }
      &:active {
        background-color: var(--fhi-color-danger-surface-active);
        border-color: var(--fhi-color-danger-surface-active);
        color: var(--fhi-color-danger-text);
      }
      &:disabled {
        background-color: var(--fhi-color-danger-surface);
        border-color: var(--fhi-color-danger-surface);
        color: var(--fhi-color-danger-text);
      }
    }

    :host([color='danger'][variant='outlined']) button {
      border-color: var(--fhi-color-danger-border);
      color: var(--fhi-color-danger-text-subtle);
      background-color: transparent;
      &:hover {
        background-color: var(--fhi-color-danger-surface);
        border-color: var(--fhi-color-danger-surface);
        color: var(--fhi-color-danger-text);
      }
      &:active {
        background-color: var(--fhi-color-danger-surface-hover);
        border-color: var(--fhi-color-danger-surface-hover);
        color: var(--fhi-color-danger-text);
      }
      &:disabled {
        border-color: var(--fhi-color-danger-border);
        color: var(--fhi-color-danger-text);
        background-color: transparent;
      }
    }

    :host([color='danger'][variant='text']) button {
      background-color: transparent;
      border-color: transparent;
      color: var(--fhi-color-danger-text-subtle);
      &:hover {
        background-color: var(--fhi-color-danger-surface);
        border-color: var(--fhi-color-danger-surface);
        color: var(--fhi-color-danger-text);
      }
      &:active {
        background-color: var(--fhi-color-danger-surface-hover);
        border-color: var(--fhi-color-danger-surface-hover);
        color: var(--fhi-color-danger-text);
      }
      &:disabled {
        background-color: transparent;
        border-color: transparent;
        color: var(--fhi-color-danger-text-subtle);
      }
    }
  `;
T([j({ type: String, reflect: !0 })], y.prototype, 'color', 2);
T([j({ type: String, reflect: !0 })], y.prototype, 'variant', 2);
T([j({ type: String, reflect: !0 })], y.prototype, 'size', 2);
T([j({ type: Boolean, reflect: !0 })], y.prototype, 'disabled', 2);
y = T([Ct(Mt)], y);
export { y as FhiButton, Mt as FhiButtonSelector };
//# sourceMappingURL=fhi-designsystem.js.map
