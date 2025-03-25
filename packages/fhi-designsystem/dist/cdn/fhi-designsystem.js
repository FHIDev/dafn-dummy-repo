/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis,
  q =
    R.ShadowRoot &&
    (R.ShadyCSS === void 0 || R.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  F = Symbol(),
  J = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(t, e, r) {
    if (((this._$cssResult$ = !0), r !== F))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.',
      );
    (this.cssText = t), (this.t = e);
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (q && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = J.get(e)),
        t === void 0 &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          r && J.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const pt = s => new nt(typeof s == 'string' ? s : s + '', void 0, F),
  dt = (s, ...t) => {
    const e =
      s.length === 1
        ? s[0]
        : t.reduce(
            (r, i, n) =>
              r +
              (o => {
                if (o._$cssResult$ === !0) return o.cssText;
                if (typeof o == 'number') return o;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    o +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                );
              })(i) +
              s[n + 1],
            s[0],
          );
    return new nt(e, s, F);
  },
  ut = (s, t) => {
    if (q)
      s.adoptedStyleSheets = t.map(e =>
        e instanceof CSSStyleSheet ? e : e.styleSheet,
      );
    else
      for (const e of t) {
        const r = document.createElement('style'),
          i = R.litNonce;
        i !== void 0 && r.setAttribute('nonce', i),
          (r.textContent = e.cssText),
          s.appendChild(r);
      }
  },
  Z = q
    ? s => s
    : s =>
        s instanceof CSSStyleSheet
          ? (t => {
              let e = '';
              for (const r of t.cssRules) e += r.cssText;
              return pt(e);
            })(s)
          : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
    is: gt,
    defineProperty: ft,
    getOwnPropertyDescriptor: yt,
    getOwnPropertyNames: $t,
    getOwnPropertySymbols: mt,
    getPrototypeOf: vt,
  } = Object,
  m = globalThis,
  G = m.trustedTypes,
  _t = G ? G.emptyScript : '',
  D = m.reactiveElementPolyfillSupport,
  C = (s, t) => s,
  M = {
    toAttribute(s, t) {
      switch (t) {
        case Boolean:
          s = s ? _t : null;
          break;
        case Object:
        case Array:
          s = s == null ? s : JSON.stringify(s);
      }
      return s;
    },
    fromAttribute(s, t) {
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
    },
  },
  W = (s, t) => !gt(s, t),
  Q = { attribute: !0, type: String, converter: M, reflect: !1, hasChanged: W };
Symbol.metadata ?? (Symbol.metadata = Symbol('metadata')),
  m.litPropertyMetadata ??
    (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class S extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Q) {
    if (
      (e.state && (e.attribute = !1),
      this._$Ei(),
      this.elementProperties.set(t, e),
      !e.noAccessor)
    ) {
      const r = Symbol(),
        i = this.getPropertyDescriptor(t, r, e);
      i !== void 0 && ft(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: i, set: n } = yt(this.prototype, t) ?? {
      get() {
        return this[e];
      },
      set(o) {
        this[e] = o;
      },
    };
    return {
      get() {
        return i == null ? void 0 : i.call(this);
      },
      set(o) {
        const l = i == null ? void 0 : i.call(this);
        n.call(this, o), this.requestUpdate(t, l, r);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Q;
  }
  static _$Ei() {
    if (this.hasOwnProperty(C('elementProperties'))) return;
    const t = vt(this);
    t.finalize(),
      t.l !== void 0 && (this.l = [...t.l]),
      (this.elementProperties = new Map(t.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(C('finalized'))) return;
    if (
      ((this.finalized = !0), this._$Ei(), this.hasOwnProperty(C('properties')))
    ) {
      const e = this.properties,
        r = [...$t(e), ...mt(e)];
      for (const i of r) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0)
        for (const [r, i] of e) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const i = this._$Eu(e, r);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const i of r) e.unshift(Z(i));
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
    return ut(t, this.constructor.elementStyles), t;
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
    var n;
    const r = this.constructor.elementProperties.get(t),
      i = this.constructor._$Eu(t, r);
    if (i !== void 0 && r.reflect === !0) {
      const o = (
        ((n = r.converter) == null ? void 0 : n.toAttribute) !== void 0
          ? r.converter
          : M
      ).toAttribute(e, r.type);
      (this._$Em = t),
        o == null ? this.removeAttribute(i) : this.setAttribute(i, o),
        (this._$Em = null);
    }
  }
  _$AK(t, e) {
    var n;
    const r = this.constructor,
      i = r._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = r.getPropertyOptions(i),
        l =
          typeof o.converter == 'function'
            ? { fromAttribute: o.converter }
            : ((n = o.converter) == null ? void 0 : n.fromAttribute) !== void 0
              ? o.converter
              : M;
      (this._$Em = i),
        (this[i] = l.fromAttribute(e, o.type)),
        (this._$Em = null);
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      if (
        (r ?? (r = this.constructor.getPropertyOptions(t)),
        !(r.hasChanged ?? W)(this[t], e))
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
        for (const [n, o] of this._$Ep) this[n] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0)
        for (const [n, o] of i)
          o.wrapped !== !0 ||
            this._$AL.has(n) ||
            this[n] === void 0 ||
            this.P(n, this[n], o);
    }
    let t = !1;
    const e = this._$AL;
    try {
      (t = this.shouldUpdate(e)),
        t
          ? (this.willUpdate(e),
            (r = this._$EO) == null ||
              r.forEach(i => {
                var n;
                return (n = i.hostUpdate) == null ? void 0 : n.call(i);
              }),
            this.update(e))
          : this._$EU();
    } catch (i) {
      throw ((t = !1), this._$EU(), i);
    }
    t && this._$AE(e);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    (e = this._$EO) == null ||
      e.forEach(r => {
        var i;
        return (i = r.hostUpdated) == null ? void 0 : i.call(r);
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
(S.elementStyles = []),
  (S.shadowRootOptions = { mode: 'open' }),
  (S[C('elementProperties')] = /* @__PURE__ */ new Map()),
  (S[C('finalized')] = /* @__PURE__ */ new Map()),
  D == null || D({ ReactiveElement: S }),
  (m.reactiveElementVersions ?? (m.reactiveElementVersions = [])).push('2.0.4');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P = globalThis,
  z = P.trustedTypes,
  X = z ? z.createPolicy('lit-html', { createHTML: s => s }) : void 0,
  at = '$lit$',
  $ = `lit$${Math.random().toFixed(9).slice(2)}$`,
  lt = '?' + $,
  bt = `<${lt}>`,
  A = document,
  O = () => A.createComment(''),
  k = s => s === null || (typeof s != 'object' && typeof s != 'function'),
  K = Array.isArray,
  At = s =>
    K(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == 'function',
  j = `[ 	
\f\r]`,
  x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Y = /-->/g,
  tt = />/g,
  _ = RegExp(
    `>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    'g',
  ),
  et = /'/g,
  rt = /"/g,
  ht = /^(?:script|style|textarea|title)$/i,
  St =
    s =>
    (t, ...e) => ({ _$litType$: s, strings: t, values: e }),
  L = St(1),
  E = Symbol.for('lit-noChange'),
  c = Symbol.for('lit-nothing'),
  it = /* @__PURE__ */ new WeakMap(),
  b = A.createTreeWalker(A, 129);
function ct(s, t) {
  if (!K(s) || !s.hasOwnProperty('raw'))
    throw Error('invalid template strings array');
  return X !== void 0 ? X.createHTML(t) : t;
}
const Et = (s, t) => {
  const e = s.length - 1,
    r = [];
  let i,
    n = t === 2 ? '<svg>' : t === 3 ? '<math>' : '',
    o = x;
  for (let l = 0; l < e; l++) {
    const a = s[l];
    let p,
      d,
      h = -1,
      f = 0;
    for (; f < a.length && ((o.lastIndex = f), (d = o.exec(a)), d !== null); )
      (f = o.lastIndex),
        o === x
          ? d[1] === '!--'
            ? (o = Y)
            : d[1] !== void 0
              ? (o = tt)
              : d[2] !== void 0
                ? (ht.test(d[2]) && (i = RegExp('</' + d[2], 'g')), (o = _))
                : d[3] !== void 0 && (o = _)
          : o === _
            ? d[0] === '>'
              ? ((o = i ?? x), (h = -1))
              : d[1] === void 0
                ? (h = -2)
                : ((h = o.lastIndex - d[2].length),
                  (p = d[1]),
                  (o = d[3] === void 0 ? _ : d[3] === '"' ? rt : et))
            : o === rt || o === et
              ? (o = _)
              : o === Y || o === tt
                ? (o = x)
                : ((o = _), (i = void 0));
    const y = o === _ && s[l + 1].startsWith('/>') ? ' ' : '';
    n +=
      o === x
        ? a + bt
        : h >= 0
          ? (r.push(p), a.slice(0, h) + at + a.slice(h) + $ + y)
          : a + $ + (h === -2 ? l : y);
  }
  return [
    ct(
      s,
      n + (s[e] || '<?>') + (t === 2 ? '</svg>' : t === 3 ? '</math>' : ''),
    ),
    r,
  ];
};
class T {
  constructor({ strings: t, _$litType$: e }, r) {
    let i;
    this.parts = [];
    let n = 0,
      o = 0;
    const l = t.length - 1,
      a = this.parts,
      [p, d] = Et(t, e);
    if (
      ((this.el = T.createElement(p, r)),
      (b.currentNode = this.el.content),
      e === 2 || e === 3)
    ) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (i = b.nextNode()) !== null && a.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const h of i.getAttributeNames())
            if (h.endsWith(at)) {
              const f = d[o++],
                y = i.getAttribute(h).split($),
                N = /([.?@])?(.*)/.exec(f);
              a.push({
                type: 1,
                index: n,
                name: N[2],
                strings: y,
                ctor:
                  N[1] === '.' ? xt : N[1] === '?' ? Ct : N[1] === '@' ? Pt : I,
              }),
                i.removeAttribute(h);
            } else
              h.startsWith($) &&
                (a.push({ type: 6, index: n }), i.removeAttribute(h));
        if (ht.test(i.tagName)) {
          const h = i.textContent.split($),
            f = h.length - 1;
          if (f > 0) {
            i.textContent = z ? z.emptyScript : '';
            for (let y = 0; y < f; y++)
              i.append(h[y], O()),
                b.nextNode(),
                a.push({ type: 2, index: ++n });
            i.append(h[f], O());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === lt) a.push({ type: 2, index: n });
        else {
          let h = -1;
          for (; (h = i.data.indexOf($, h + 1)) !== -1; )
            a.push({ type: 7, index: n }), (h += $.length - 1);
        }
      n++;
    }
  }
  static createElement(t, e) {
    const r = A.createElement('template');
    return (r.innerHTML = t), r;
  }
}
function w(s, t, e = s, r) {
  var o, l;
  if (t === E) return t;
  let i = r !== void 0 ? ((o = e._$Co) == null ? void 0 : o[r]) : e._$Cl;
  const n = k(t) ? void 0 : t._$litDirective$;
  return (
    (i == null ? void 0 : i.constructor) !== n &&
      ((l = i == null ? void 0 : i._$AO) == null || l.call(i, !1),
      n === void 0 ? (i = void 0) : ((i = new n(s)), i._$AT(s, e, r)),
      r !== void 0 ? ((e._$Co ?? (e._$Co = []))[r] = i) : (e._$Cl = i)),
    i !== void 0 && (t = w(s, i._$AS(s, t.values), i, r)),
    t
  );
}
class wt {
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
      i = ((t == null ? void 0 : t.creationScope) ?? A).importNode(e, !0);
    b.currentNode = i;
    let n = b.nextNode(),
      o = 0,
      l = 0,
      a = r[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let p;
        a.type === 2
          ? (p = new H(n, n.nextSibling, this, t))
          : a.type === 1
            ? (p = new a.ctor(n, a.name, a.strings, this, t))
            : a.type === 6 && (p = new Ut(n, this, t)),
          this._$AV.push(p),
          (a = r[++l]);
      }
      o !== (a == null ? void 0 : a.index) && ((n = b.nextNode()), o++);
    }
    return (b.currentNode = A), i;
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
class H {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, i) {
    (this.type = 2),
      (this._$AH = c),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = r),
      (this.options = i),
      (this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0);
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
    (t = w(this, t, e)),
      k(t)
        ? t === c || t == null || t === ''
          ? (this._$AH !== c && this._$AR(), (this._$AH = c))
          : t !== this._$AH && t !== E && this._(t)
        : t._$litType$ !== void 0
          ? this.$(t)
          : t.nodeType !== void 0
            ? this.T(t)
            : At(t)
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
    this._$AH !== c && k(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.T(A.createTextNode(t)),
      (this._$AH = t);
  }
  $(t) {
    var n;
    const { values: e, _$litType$: r } = t,
      i =
        typeof r == 'number'
          ? this._$AC(t)
          : (r.el === void 0 &&
              (r.el = T.createElement(ct(r.h, r.h[0]), this.options)),
            r);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === i) this._$AH.p(e);
    else {
      const o = new wt(i, this),
        l = o.u(this.options);
      o.p(e), this.T(l), (this._$AH = o);
    }
  }
  _$AC(t) {
    let e = it.get(t.strings);
    return e === void 0 && it.set(t.strings, (e = new T(t))), e;
  }
  k(t) {
    K(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let r,
      i = 0;
    for (const n of t)
      i === e.length
        ? e.push((r = new H(this.O(O()), this.O(O()), this, this.options)))
        : (r = e[i]),
        r._$AI(n),
        i++;
    i < e.length && (this._$AR(r && r._$AB.nextSibling, i), (e.length = i));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for (
      (r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const i = t.nextSibling;
      t.remove(), (t = i);
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 &&
      ((this._$Cv = t), (e = this._$AP) == null || e.call(this, t));
  }
}
class I {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, i, n) {
    (this.type = 1),
      (this._$AH = c),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = i),
      (this.options = n),
      r.length > 2 || r[0] !== '' || r[1] !== ''
        ? ((this._$AH = Array(r.length - 1).fill(new String())),
          (this.strings = r))
        : (this._$AH = c);
  }
  _$AI(t, e = this, r, i) {
    const n = this.strings;
    let o = !1;
    if (n === void 0)
      (t = w(this, t, e, 0)),
        (o = !k(t) || (t !== this._$AH && t !== E)),
        o && (this._$AH = t);
    else {
      const l = t;
      let a, p;
      for (t = n[0], a = 0; a < n.length - 1; a++)
        (p = w(this, l[r + a], e, a)),
          p === E && (p = this._$AH[a]),
          o || (o = !k(p) || p !== this._$AH[a]),
          p === c ? (t = c) : t !== c && (t += (p ?? '') + n[a + 1]),
          (this._$AH[a] = p);
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === c
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? '');
  }
}
class xt extends I {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === c ? void 0 : t;
  }
}
class Ct extends I {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== c);
  }
}
class Pt extends I {
  constructor(t, e, r, i, n) {
    super(t, e, r, i, n), (this.type = 5);
  }
  _$AI(t, e = this) {
    if ((t = w(this, t, e, 0) ?? c) === E) return;
    const r = this._$AH,
      i =
        (t === c && r !== c) ||
        t.capture !== r.capture ||
        t.once !== r.once ||
        t.passive !== r.passive,
      n = t !== c && (r === c || i);
    i && this.element.removeEventListener(this.name, this, r),
      n && this.element.addEventListener(this.name, this, t),
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
class Ut {
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
    w(this, t);
  }
}
const B = P.litHtmlPolyfillSupport;
B == null || B(T, H),
  (P.litHtmlVersions ?? (P.litHtmlVersions = [])).push('3.2.1');
const Ot = (s, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = r._$litPart$;
  if (i === void 0) {
    const n = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = i = new H(t.insertBefore(O(), n), n, void 0, e ?? {});
  }
  return i._$AI(s), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let U = class extends S {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
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
      (this._$Do = Ot(e, this.renderRoot, this.renderOptions));
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
    return E;
  }
};
var ot;
(U._$litElement$ = !0),
  (U.finalized = !0),
  (ot = globalThis.litElementHydrateSupport) == null ||
    ot.call(globalThis, { LitElement: U });
const V = globalThis.litElementPolyfillSupport;
V == null || V({ LitElement: U });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push(
  '4.1.1',
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kt = s => (t, e) => {
  e !== void 0
    ? e.addInitializer(() => {
        customElements.define(s, t);
      })
    : customElements.define(s, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tt = {
    attribute: !0,
    type: String,
    converter: M,
    reflect: !1,
    hasChanged: W,
  },
  Ht = (s = Tt, t, e) => {
    const { kind: r, metadata: i } = e;
    let n = globalThis.litPropertyMetadata.get(i);
    if (
      (n === void 0 &&
        globalThis.litPropertyMetadata.set(i, (n = /* @__PURE__ */ new Map())),
      n.set(e.name, s),
      r === 'accessor')
    ) {
      const { name: o } = e;
      return {
        set(l) {
          const a = t.get.call(this);
          t.set.call(this, l), this.requestUpdate(o, a, s);
        },
        init(l) {
          return l !== void 0 && this.P(o, void 0, s), l;
        },
      };
    }
    if (r === 'setter') {
      const { name: o } = e;
      return function (l) {
        const a = this[o];
        t.call(this, l), this.requestUpdate(o, a, s);
      };
    }
    throw Error('Unsupported decorator location: ' + r);
  };
function v(s) {
  return (t, e) =>
    typeof e == 'object'
      ? Ht(s, t, e)
      : ((r, i, n) => {
          const o = i.hasOwnProperty(n);
          return (
            i.constructor.createProperty(n, o ? { ...r, wrapped: !0 } : r),
            o ? Object.getOwnPropertyDescriptor(i, n) : void 0
          );
        })(s, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = (s, t, e) => (
  (e.configurable = !0),
  (e.enumerable = !0),
  Reflect.decorate && typeof t != 'object' && Object.defineProperty(s, t, e),
  e
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Rt(s, t) {
  return (e, r, i) => {
    const n = o => {
      var l;
      return ((l = o.renderRoot) == null ? void 0 : l.querySelector(s)) ?? null;
    };
    return Nt(e, r, {
      get() {
        return n(this);
      },
    });
  };
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = s => s ?? c;
var Mt = Object.defineProperty,
  zt = Object.getOwnPropertyDescriptor,
  g = (s, t, e, r) => {
    for (
      var i = r > 1 ? void 0 : r ? zt(t, e) : t, n = s.length - 1, o;
      n >= 0;
      n--
    )
      (o = s[n]) && (i = (r ? o(t, e, i) : o(i)) || i);
    return r && i && Mt(t, e, i), i;
  };
const It = 'fhi-text-input';
let u = class extends U {
  constructor() {
    super(),
      (this.label = void 0),
      (this.message = void 0),
      (this.placeholder = null),
      (this.status = void 0),
      (this.readonly = !1),
      (this.disabled = !1),
      (this._name = void 0),
      (this._value = ''),
      (this._internals = this.attachInternals());
  }
  get name() {
    return this._name;
  }
  set name(s) {
    const t = this._name;
    (this._name = s),
      this.requestUpdate('name', t),
      this._internals.setFormValue(this._value);
  }
  get value() {
    return this._value;
  }
  set value(s) {
    const t = this._value;
    (this._value = s),
      this.requestUpdate('value', t),
      this._internals.setFormValue(this._value);
  }
  connectedCallback() {
    super.connectedCallback(), this._internals.setFormValue(this.value);
  }
  onChange() {
    this.dispatchEvent(
      new Event('change', {
        bubbles: !0,
        composed: !0,
      }),
    );
  }
  onInput() {
    (this.value = this._input.value), this._internals.setFormValue(this.value);
  }
  onKeyDown(s) {
    s.key === 'Enter' &&
      this._internals.form &&
      this._internals.form.requestSubmit();
  }
  formResetCallback() {
    (this.value = this.getAttribute('value') || ''),
      this._internals.setFormValue(this.value);
  }
  render() {
    return L`
      ${this.label && L`<label for="input-element">${this.label}</label>`}
      <input
        id="input-element"
        name=${st(this.name)}
        placeholder=${st(this.placeholder)}
        .value=${this.value}
        ?readonly=${this.readonly}
        ?disabled=${this.disabled}
        @change=${this.onChange}
        @input=${this.onInput}
        @keydown=${this.onKeyDown}
      />
      ${this.message ? L`<p class="message">${this.message}</p>` : ''}
    `;
  }
};
u.formAssociated = !0;
u.styles = dt`
    :host {
      --typography-font-family: var(--fhi-font-family-roboto-flex);

      --opacity-disabled: var(--fhi-opacity-disabled);

      /* label */
      --color-label-text: var(--fhi-color-neutral-text);
      --color-label-text-error: var(--fhi-color-danger-text);

      --typography-label-font-weight: var(
        --fhi-typography-label-small-font-weight
      );
      --typography-label-font-size: var(--fhi-typography-label-small-font-size);
      --typography-label-line-height: var(
        --fhi-typography-label-small-line-height
      );
      --typography-label-letter-spacing: var(
        --fhi-typography-label-small-letter-spacing
      );

      --dimension-label-padding-bottom: var(--fhi-spacing-050);

      /* input */
      --color-input-placeholder: var(--fhi-color-neutral-base);
      --color-input-text: var(--fhi-color-neutral-text);
      --color-input-text-error: var(--fhi-color-danger-text);
      --color-input-background: var(--fhi-color-neutral-background);
      --color-input-background-active: var(--fhi-color-accent-background);
      --color-input-background-hover: var(--fhi-color-accent-background-subtle);
      --color-input-background-error: var(--fhi-color-danger-background);
      --color-input-border: var(--fhi-color-neutral-border);
      --color-input-border-hover: var(--fhi-color-accent-border);
      --color-input-border-active: var(--fhi-color-accent-border-strong);
      --color-input-border-error: var(--fhi-color-danger-border-strong);
      --color-input-border-disabled: var(--fhi-color-neutral-border);

      --typography-input-font-weight: var(
        --fhi-typography-body-medium-font-weight
      );
      --typography-input-font-size: var(--fhi-typography-body-medium-font-size);
      --typography-input-line-height: var(
        --fhi-typography-body-medium-line-height
      );
      --typography-input-letter-spacing: var(
        --fhi-typography-body-medium-letter-spacing
      );

      --dimension-input-border-width: var(--fhi-dimension-border-width);

      --dimension-input-height: var(--fhi-spacing-500);
      --dimension-input-border-radius: var(--fhi-border-radius-050);
      --dimension-input-padding-left: var(--fhi-spacing-150);
      --dimension-input-padding-right: var(--fhi-spacing-150);

      --motion-input-transition: all var(--fhi-motion-ease-default)
        var(--fhi-motion-duration-quick);

      /* message */
      --color-message-text: var(--fhi-color-neutral-text);
      --color-message-text-error: var(--fhi-color-danger-text-subtle);

      --typography-message-font-weight: var(
        --fhi-typography-body-small-font-weight
      );
      --typography-message-font-size: var(
        --fhi-typography-body-small-font-size
      );
      --typography-message-line-height: var(
        --fhi-typography-body-small-line-height
      );
      --typography-message-letter-spacing: var(
        --fhi-typography-body-small-letter-spacing
      );

      --dimension-message-margin-top: var(--fhi-spacing-050);
    }

    :host {
      display: flex;
      flex-direction: column;
      font-family: var(--typography-font-family);

      label {
        font-weight: var(--typography-label-font-weight);
        font-size: var(--typography-label-font-size);
        line-height: var(--typography-label-line-height);
        letter-spacing: var(--typography-label-letter-spacing);
        color: var(--color-label-text);
        padding-bottom: var(--dimension-label-padding-bottom);
      }

      input {
        box-sizing: border-box;
        height: var(--dimension-input-height);
        border: var(--dimension-input-border-width) solid
          var(--color-input-border);
        border-radius: var(--dimension-input-border-radius);
        padding: 0 var(--dimension-input-padding-right) 0
          var(--dimension-input-padding-left);
        color: var(--color-input-text);
        background-color: var(--color-input-background);
        font-family: var(--typography-font-family);
        font-weight: var(--typography-input-font-weight);
        font-size: var(--typography-input-font-size);
        line-height: var(--typography-input-line-height);
        letter-spacing: var(--typography-input-letter-spacing);
        transition: var(--motion-input-transition);
        &:hover {
          border-color: var(--color-input-border-hover);
          background-color: var(--color-input-background-hover);
        }
        &:focus {
          border-color: var(--color-input-border-active);
          background-color: var(--color-input-background-active);
        }
        &::placeholder {
          color: var(--color-input-placeholder);
        }
      }

      .message {
        margin: var(--dimension-message-margin-top) 0 0 0;
        color: var(--color-message-text);
        font-weight: var(--typography-message-font-weight);
        font-size: var(--typography-message-font-size);
        line-height: var(--typography-message-line-height);
        letter-spacing: var(--typography-message-letter-spacing);
      }
    }

    :host([disabled]) {
      opacity: var(--opacity-disabled);
      cursor: not-allowed;
      * {
        cursor: not-allowed;
      }
      input {
        &:hover {
          border-color: var(--color-input-border);
          background-color: var(--color-input-background);
        }
      }
    }

    :host([readonly]:not([disabled])) {
      input {
        border: unset;
        border-radius: unset;
        background-color: unset;
        border-left: var(--dimension-input-border-width) solid
          var(--color-input-border);
      }
    }

    :host([status='error']:not([disabled]):not([readonly])) {
      label {
        color: var(--color-label-text-error);
      }
      input {
        border-color: var(--color-input-border-error);
        background-color: var(--color-input-background-error);
        color: var(--color-input-text-error);
      }
      .message {
        color: var(--color-message-text-error);
      }
    }
  `;
g([v({ type: String })], u.prototype, 'label', 2);
g([v({ type: String })], u.prototype, 'message', 2);
g([v({ type: String })], u.prototype, 'placeholder', 2);
g([v({ type: String, reflect: !0 })], u.prototype, 'status', 2);
g([v({ type: Boolean, reflect: !0 })], u.prototype, 'readonly', 2);
g([v({ type: Boolean, reflect: !0 })], u.prototype, 'disabled', 2);
g([Rt('#input-element')], u.prototype, '_input', 2);
g([v({ type: String, reflect: !0 })], u.prototype, 'name', 1);
g([v({ type: String })], u.prototype, 'value', 1);
u = g([kt(It)], u);
export { u as FhiTextInput, It as FhiTextInputSelector };
//# sourceMappingURL=fhi-designsystem.js.map
