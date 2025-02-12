/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const M = globalThis,
  V =
    M.ShadowRoot &&
    (M.ShadyCSS === void 0 || M.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  W = Symbol(),
  J = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(e, t, r) {
    if (((this._$cssResult$ = !0), r !== W))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.',
      );
    (this.cssText = e), (this.t = t);
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (V && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = J.get(t)),
        e === void 0 &&
          ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText),
          r && J.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const le = i => new ie(typeof i == 'string' ? i : i + '', void 0, W),
  he = (i, ...e) => {
    const t =
      i.length === 1
        ? i[0]
        : e.reduce(
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
    return new ie(t, i, W);
  },
  de = (i, e) => {
    if (V)
      i.adoptedStyleSheets = e.map(t =>
        t instanceof CSSStyleSheet ? t : t.styleSheet,
      );
    else
      for (const t of e) {
        const r = document.createElement('style'),
          o = M.litNonce;
        o !== void 0 && r.setAttribute('nonce', o),
          (r.textContent = t.cssText),
          i.appendChild(r);
      }
  },
  K = V
    ? i => i
    : i =>
        i instanceof CSSStyleSheet
          ? (e => {
              let t = '';
              for (const r of e.cssRules) t += r.cssText;
              return le(t);
            })(i)
          : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
    is: ue,
    defineProperty: fe,
    getOwnPropertyDescriptor: pe,
    getOwnPropertyNames: ve,
    getOwnPropertySymbols: ge,
    getPrototypeOf: be,
  } = Object,
  g = globalThis,
  Z = g.trustedTypes,
  $e = Z ? Z.emptyScript : '',
  B = g.reactiveElementPolyfillSupport,
  S = (i, e) => i,
  N = {
    toAttribute(i, e) {
      switch (e) {
        case Boolean:
          i = i ? $e : null;
          break;
        case Object:
        case Array:
          i = i == null ? i : JSON.stringify(i);
      }
      return i;
    },
    fromAttribute(i, e) {
      let t = i;
      switch (e) {
        case Boolean:
          t = i !== null;
          break;
        case Number:
          t = i === null ? null : Number(i);
          break;
        case Object:
        case Array:
          try {
            t = JSON.parse(i);
          } catch {
            t = null;
          }
      }
      return t;
    },
  },
  q = (i, e) => !ue(i, e),
  G = { attribute: !0, type: String, converter: N, reflect: !1, hasChanged: q };
Symbol.metadata ?? (Symbol.metadata = Symbol('metadata')),
  g.litPropertyMetadata ??
    (g.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class m extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = G) {
    if (
      (t.state && (t.attribute = !1),
      this._$Ei(),
      this.elementProperties.set(e, t),
      !t.noAccessor)
    ) {
      const r = Symbol(),
        o = this.getPropertyDescriptor(e, r, t);
      o !== void 0 && fe(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: o, set: a } = pe(this.prototype, e) ?? {
      get() {
        return this[t];
      },
      set(s) {
        this[t] = s;
      },
    };
    return {
      get() {
        return o == null ? void 0 : o.call(this);
      },
      set(s) {
        const c = o == null ? void 0 : o.call(this);
        a.call(this, s), this.requestUpdate(e, c, r);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? G;
  }
  static _$Ei() {
    if (this.hasOwnProperty(S('elementProperties'))) return;
    const e = be(this);
    e.finalize(),
      e.l !== void 0 && (this.l = [...e.l]),
      (this.elementProperties = new Map(e.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(S('finalized'))) return;
    if (
      ((this.finalized = !0), this._$Ei(), this.hasOwnProperty(S('properties')))
    ) {
      const t = this.properties,
        r = [...ve(t), ...ge(t)];
      for (const o of r) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0)
        for (const [r, o] of t) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const o = this._$Eu(t, r);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const o of r) t.unshift(K(o));
    } else e !== void 0 && t.push(K(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1
      ? void 0
      : typeof r == 'string'
        ? r
        : typeof e == 'string'
          ? e.toLowerCase()
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
    var e;
    (this._$ES = new Promise(t => (this.enableUpdating = t))),
      (this._$AL = /* @__PURE__ */ new Map()),
      this._$E_(),
      this.requestUpdate(),
      (e = this.constructor.l) == null || e.forEach(t => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(),
      t = this.constructor.elementProperties;
    for (const r of t.keys())
      this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return de(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (e = this._$EO) == null ||
        e.forEach(t => {
          var r;
          return (r = t.hostConnected) == null ? void 0 : r.call(t);
        });
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null ||
      e.forEach(t => {
        var r;
        return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
      });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$EC(e, t) {
    var a;
    const r = this.constructor.elementProperties.get(e),
      o = this.constructor._$Eu(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const s = (
        ((a = r.converter) == null ? void 0 : a.toAttribute) !== void 0
          ? r.converter
          : N
      ).toAttribute(t, r.type);
      (this._$Em = e),
        s == null ? this.removeAttribute(o) : this.setAttribute(o, s),
        (this._$Em = null);
    }
  }
  _$AK(e, t) {
    var a;
    const r = this.constructor,
      o = r._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const s = r.getPropertyOptions(o),
        c =
          typeof s.converter == 'function'
            ? { fromAttribute: s.converter }
            : ((a = s.converter) == null ? void 0 : a.fromAttribute) !== void 0
              ? s.converter
              : N;
      (this._$Em = o),
        (this[o] = c.fromAttribute(t, s.type)),
        (this._$Em = null);
    }
  }
  requestUpdate(e, t, r) {
    if (e !== void 0) {
      if (
        (r ?? (r = this.constructor.getPropertyOptions(e)),
        !(r.hasChanged ?? q)(this[e], t))
      )
        return;
      this.P(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, r) {
    this._$AL.has(e) || this._$AL.set(e, t),
      r.reflect === !0 &&
        this._$Em !== e &&
        (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && (await e), !this.isUpdatePending;
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
    let e = !1;
    const t = this._$AL;
    try {
      (e = this.shouldUpdate(t)),
        e
          ? (this.willUpdate(t),
            (r = this._$EO) == null ||
              r.forEach(o => {
                var a;
                return (a = o.hostUpdate) == null ? void 0 : a.call(o);
              }),
            this.update(t))
          : this._$EU();
    } catch (o) {
      throw ((e = !1), this._$EU(), o);
    }
    e && this._$AE(t);
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    (t = this._$EO) == null ||
      t.forEach(r => {
        var o;
        return (o = r.hostUpdated) == null ? void 0 : o.call(r);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
      this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach(t => this._$EC(t, this[t]))),
      this._$EU();
  }
  updated(e) {}
  firstUpdated(e) {}
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
  se = '$lit$',
  v = `lit$${Math.random().toFixed(9).slice(2)}$`,
  ae = '?' + v,
  _e = `<${ae}>`,
  _ = document,
  P = () => _.createComment(''),
  C = i => i === null || (typeof i != 'object' && typeof i != 'function'),
  F = Array.isArray,
  ye = i =>
    F(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == 'function',
  D = `[ 	
\f\r]`,
  E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  X = /-->/g,
  Y = />/g,
  b = RegExp(
    `>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    'g',
  ),
  ee = /'/g,
  te = /"/g,
  ne = /^(?:script|style|textarea|title)$/i,
  me =
    i =>
    (e, ...t) => ({ _$litType$: i, strings: e, values: t }),
  Ae = me(1),
  A = Symbol.for('lit-noChange'),
  d = Symbol.for('lit-nothing'),
  re = /* @__PURE__ */ new WeakMap(),
  $ = _.createTreeWalker(_, 129);
function ce(i, e) {
  if (!F(i) || !i.hasOwnProperty('raw'))
    throw Error('invalid template strings array');
  return Q !== void 0 ? Q.createHTML(e) : e;
}
const xe = (i, e) => {
  const t = i.length - 1,
    r = [];
  let o,
    a = e === 2 ? '<svg>' : e === 3 ? '<math>' : '',
    s = E;
  for (let c = 0; c < t; c++) {
    const n = i[c];
    let h,
      u,
      l = -1,
      f = 0;
    for (; f < n.length && ((s.lastIndex = f), (u = s.exec(n)), u !== null); )
      (f = s.lastIndex),
        s === E
          ? u[1] === '!--'
            ? (s = X)
            : u[1] !== void 0
              ? (s = Y)
              : u[2] !== void 0
                ? (ne.test(u[2]) && (o = RegExp('</' + u[2], 'g')), (s = b))
                : u[3] !== void 0 && (s = b)
          : s === b
            ? u[0] === '>'
              ? ((s = o ?? E), (l = -1))
              : u[1] === void 0
                ? (l = -2)
                : ((l = s.lastIndex - u[2].length),
                  (h = u[1]),
                  (s = u[3] === void 0 ? b : u[3] === '"' ? te : ee))
            : s === te || s === ee
              ? (s = b)
              : s === X || s === Y
                ? (s = E)
                : ((s = b), (o = void 0));
    const p = s === b && i[c + 1].startsWith('/>') ? ' ' : '';
    a +=
      s === E
        ? n + _e
        : l >= 0
          ? (r.push(h), n.slice(0, l) + se + n.slice(l) + v + p)
          : n + v + (l === -2 ? c : p);
  }
  return [
    ce(
      i,
      a + (i[t] || '<?>') + (e === 2 ? '</svg>' : e === 3 ? '</math>' : ''),
    ),
    r,
  ];
};
class U {
  constructor({ strings: e, _$litType$: t }, r) {
    let o;
    this.parts = [];
    let a = 0,
      s = 0;
    const c = e.length - 1,
      n = this.parts,
      [h, u] = xe(e, t);
    if (
      ((this.el = U.createElement(h, r)),
      ($.currentNode = this.el.content),
      t === 2 || t === 3)
    ) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (o = $.nextNode()) !== null && n.length < c; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes())
          for (const l of o.getAttributeNames())
            if (l.endsWith(se)) {
              const f = u[s++],
                p = o.getAttribute(l).split(v),
                H = /([.?@])?(.*)/.exec(f);
              n.push({
                type: 1,
                index: a,
                name: H[2],
                strings: p,
                ctor:
                  H[1] === '.' ? Se : H[1] === '?' ? we : H[1] === '@' ? ke : z,
              }),
                o.removeAttribute(l);
            } else
              l.startsWith(v) &&
                (n.push({ type: 6, index: a }), o.removeAttribute(l));
        if (ne.test(o.tagName)) {
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
        if (o.data === ae) n.push({ type: 2, index: a });
        else {
          let l = -1;
          for (; (l = o.data.indexOf(v, l + 1)) !== -1; )
            n.push({ type: 7, index: a }), (l += v.length - 1);
        }
      a++;
    }
  }
  static createElement(e, t) {
    const r = _.createElement('template');
    return (r.innerHTML = e), r;
  }
}
function x(i, e, t = i, r) {
  var s, c;
  if (e === A) return e;
  let o = r !== void 0 ? ((s = t._$Co) == null ? void 0 : s[r]) : t._$Cl;
  const a = C(e) ? void 0 : e._$litDirective$;
  return (
    (o == null ? void 0 : o.constructor) !== a &&
      ((c = o == null ? void 0 : o._$AO) == null || c.call(o, !1),
      a === void 0 ? (o = void 0) : ((o = new a(i)), o._$AT(i, t, r)),
      r !== void 0 ? ((t._$Co ?? (t._$Co = []))[r] = o) : (t._$Cl = o)),
    o !== void 0 && (e = x(i, o._$AS(i, e.values), o, r)),
    e
  );
}
class Ee {
  constructor(e, t) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const {
        el: { content: t },
        parts: r,
      } = this._$AD,
      o = ((e == null ? void 0 : e.creationScope) ?? _).importNode(t, !0);
    $.currentNode = o;
    let a = $.nextNode(),
      s = 0,
      c = 0,
      n = r[0];
    for (; n !== void 0; ) {
      if (s === n.index) {
        let h;
        n.type === 2
          ? (h = new O(a, a.nextSibling, this, e))
          : n.type === 1
            ? (h = new n.ctor(a, n.name, n.strings, this, e))
            : n.type === 6 && (h = new Pe(a, this, e)),
          this._$AV.push(h),
          (n = r[++c]);
      }
      s !== (n == null ? void 0 : n.index) && ((a = $.nextNode()), s++);
    }
    return ($.currentNode = _), o;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV)
      r !== void 0 &&
        (r.strings !== void 0
          ? (r._$AI(e, r, t), (t += r.strings.length - 2))
          : r._$AI(e[t])),
        t++;
  }
}
class O {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, o) {
    (this.type = 2),
      (this._$AH = d),
      (this._$AN = void 0),
      (this._$AA = e),
      (this._$AB = t),
      (this._$AM = r),
      (this.options = o),
      (this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0);
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return (
      t !== void 0 &&
        (e == null ? void 0 : e.nodeType) === 11 &&
        (e = t.parentNode),
      e
    );
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    (e = x(this, e, t)),
      C(e)
        ? e === d || e == null || e === ''
          ? (this._$AH !== d && this._$AR(), (this._$AH = d))
          : e !== this._$AH && e !== A && this._(e)
        : e._$litType$ !== void 0
          ? this.$(e)
          : e.nodeType !== void 0
            ? this.T(e)
            : ye(e)
              ? this.k(e)
              : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), (this._$AH = this.O(e)));
  }
  _(e) {
    this._$AH !== d && C(this._$AH)
      ? (this._$AA.nextSibling.data = e)
      : this.T(_.createTextNode(e)),
      (this._$AH = e);
  }
  $(e) {
    var a;
    const { values: t, _$litType$: r } = e,
      o =
        typeof r == 'number'
          ? this._$AC(e)
          : (r.el === void 0 &&
              (r.el = U.createElement(ce(r.h, r.h[0]), this.options)),
            r);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === o) this._$AH.p(t);
    else {
      const s = new Ee(o, this),
        c = s.u(this.options);
      s.p(t), this.T(c), (this._$AH = s);
    }
  }
  _$AC(e) {
    let t = re.get(e.strings);
    return t === void 0 && re.set(e.strings, (t = new U(e))), t;
  }
  k(e) {
    F(this._$AH) || ((this._$AH = []), this._$AR());
    const t = this._$AH;
    let r,
      o = 0;
    for (const a of e)
      o === t.length
        ? t.push((r = new O(this.O(P()), this.O(P()), this, this.options)))
        : (r = t[o]),
        r._$AI(a),
        o++;
    o < t.length && (this._$AR(r && r._$AB.nextSibling, o), (t.length = o));
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for (
      (r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t);
      e && e !== this._$AB;

    ) {
      const o = e.nextSibling;
      e.remove(), (e = o);
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 &&
      ((this._$Cv = e), (t = this._$AP) == null || t.call(this, e));
  }
}
class z {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, o, a) {
    (this.type = 1),
      (this._$AH = d),
      (this._$AN = void 0),
      (this.element = e),
      (this.name = t),
      (this._$AM = o),
      (this.options = a),
      r.length > 2 || r[0] !== '' || r[1] !== ''
        ? ((this._$AH = Array(r.length - 1).fill(new String())),
          (this.strings = r))
        : (this._$AH = d);
  }
  _$AI(e, t = this, r, o) {
    const a = this.strings;
    let s = !1;
    if (a === void 0)
      (e = x(this, e, t, 0)),
        (s = !C(e) || (e !== this._$AH && e !== A)),
        s && (this._$AH = e);
    else {
      const c = e;
      let n, h;
      for (e = a[0], n = 0; n < a.length - 1; n++)
        (h = x(this, c[r + n], t, n)),
          h === A && (h = this._$AH[n]),
          s || (s = !C(h) || h !== this._$AH[n]),
          h === d ? (e = d) : e !== d && (e += (h ?? '') + a[n + 1]),
          (this._$AH[n] = h);
    }
    s && !o && this.j(e);
  }
  j(e) {
    e === d
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, e ?? '');
  }
}
class Se extends z {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(e) {
    this.element[this.name] = e === d ? void 0 : e;
  }
}
class we extends z {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== d);
  }
}
class ke extends z {
  constructor(e, t, r, o, a) {
    super(e, t, r, o, a), (this.type = 5);
  }
  _$AI(e, t = this) {
    if ((e = x(this, e, t, 0) ?? d) === A) return;
    const r = this._$AH,
      o =
        (e === d && r !== d) ||
        e.capture !== r.capture ||
        e.once !== r.once ||
        e.passive !== r.passive,
      a = e !== d && (r === d || o);
    o && this.element.removeEventListener(this.name, this, r),
      a && this.element.addEventListener(this.name, this, e),
      (this._$AH = e);
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == 'function'
      ? this._$AH.call(
          ((t = this.options) == null ? void 0 : t.host) ?? this.element,
          e,
        )
      : this._$AH.handleEvent(e);
  }
}
class Pe {
  constructor(e, t, r) {
    (this.element = e),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = t),
      (this.options = r);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    x(this, e);
  }
}
const L = w.litHtmlPolyfillSupport;
L == null || L(U, O),
  (w.litHtmlVersions ?? (w.litHtmlVersions = [])).push('3.2.1');
const Ce = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = r._$litPart$;
  if (o === void 0) {
    const a = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = o = new O(e.insertBefore(P(), a), a, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let k = class extends m {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (
      (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild),
      e
    );
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(e),
      (this._$Do = Ce(t, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return A;
  }
};
var oe;
(k._$litElement$ = !0),
  (k.finalized = !0),
  (oe = globalThis.litElementHydrateSupport) == null ||
    oe.call(globalThis, { LitElement: k });
const I = globalThis.litElementPolyfillSupport;
I == null || I({ LitElement: k });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push(
  '4.1.1',
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ue = i => (e, t) => {
  t !== void 0
    ? t.addInitializer(() => {
        customElements.define(i, e);
      })
    : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oe = {
    attribute: !0,
    type: String,
    converter: N,
    reflect: !1,
    hasChanged: q,
  },
  Te = (i = Oe, e, t) => {
    const { kind: r, metadata: o } = t;
    let a = globalThis.litPropertyMetadata.get(o);
    if (
      (a === void 0 &&
        globalThis.litPropertyMetadata.set(o, (a = /* @__PURE__ */ new Map())),
      a.set(t.name, i),
      r === 'accessor')
    ) {
      const { name: s } = t;
      return {
        set(c) {
          const n = e.get.call(this);
          e.set.call(this, c), this.requestUpdate(s, n, i);
        },
        init(c) {
          return c !== void 0 && this.P(s, void 0, i), c;
        },
      };
    }
    if (r === 'setter') {
      const { name: s } = t;
      return function (c) {
        const n = this[s];
        e.call(this, c), this.requestUpdate(s, n, i);
      };
    }
    throw Error('Unsupported decorator location: ' + r);
  };
function j(i) {
  return (e, t) =>
    typeof t == 'object'
      ? Te(i, e, t)
      : ((r, o, a) => {
          const s = o.hasOwnProperty(a);
          return (
            o.constructor.createProperty(a, s ? { ...r, wrapped: !0 } : r),
            s ? Object.getOwnPropertyDescriptor(o, a) : void 0
          );
        })(i, e, t);
}
var He = Object.defineProperty,
  Me = Object.getOwnPropertyDescriptor,
  T = (i, e, t, r) => {
    for (
      var o = r > 1 ? void 0 : r ? Me(e, t) : e, a = i.length - 1, s;
      a >= 0;
      a--
    )
      (s = i[a]) && (o = (r ? s(e, t, o) : s(o)) || o);
    return r && o && He(e, t, o), o;
  };
const Ne = 'fhi-button';
let y = class extends k {
  constructor() {
    super(...arguments),
      (this.color = 'accent'),
      (this.variant = 'strong'),
      (this.size = 'medium'),
      (this.disabled = !1);
  }
  render() {
    return Ae`<button ?disabled=${this.disabled}>
      <slot></slot>
    </button>`;
  }
};
y.styles = he`
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
y = T([Ue(Ne)], y);
export { y as FhiButton, Ne as FhiButtonSelector };
//# sourceMappingURL=fhi-designsystem.js.map
