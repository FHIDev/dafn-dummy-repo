(function(f,v){typeof exports=="object"&&typeof module<"u"?v(exports):typeof define=="function"&&define.amd?define(["exports"],v):(f=typeof globalThis<"u"?globalThis:f||self,v(f["fhi-designsystem"]={}))})(this,function(f){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lt;const v=globalThis,j=v.ShadowRoot&&(v.ShadyCSS===void 0||v.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),K=new WeakMap;let Z=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(j&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&K.set(e,t))}return t}toString(){return this.cssText}};const ht=i=>new Z(typeof i=="string"?i:i+"",void 0,L),dt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[a+1],i[0]);return new Z(e,i,L)},ut=(i,t)=>{if(j)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),o=v.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)}},J=j?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return ht(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:pt,getOwnPropertyDescriptor:vt,getOwnPropertyNames:gt,getOwnPropertySymbols:bt,getPrototypeOf:$t}=Object,g=globalThis,G=g.trustedTypes,_t=G?G.emptyScript:"",I=g.reactiveElementPolyfillSupport,x=(i,t)=>i,M={toAttribute(i,t){switch(t){case Boolean:i=i?_t:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},D=(i,t)=>!ft(i,t),Q={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:D};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&pt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:a}=vt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const c=o==null?void 0:o.call(this);a.call(this,s),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=$t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,r=[...gt(e),...bt(e)];for(const o of r)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(J(o))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var a;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(((a=r.converter)==null?void 0:a.toAttribute)!==void 0?r.converter:M).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){var a;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:M;this._$Em=o,this[o]=c.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??D)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,s]of o)s.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(e)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,I==null||I({ReactiveElement:A}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis,N=w.trustedTypes,Y=N?N.createPolicy("lit-html",{createHTML:i=>i}):void 0,X="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,tt="?"+b,yt=`<${tt}>`,_=document,k=()=>_.createComment(""),P=i=>i===null||typeof i!="object"&&typeof i!="function",F=Array.isArray,mt=i=>F(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",V=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,rt=/>/g,y=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,it=/"/g,st=/^(?:script|style|textarea|title)$/i,At=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),St=At(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),at=new WeakMap,m=_.createTreeWalker(_,129);function nt(i,t){if(!F(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const Et=(i,t)=>{const e=i.length-1,r=[];let o,a=t===2?"<svg>":t===3?"<math>":"",s=U;for(let c=0;c<e;c++){const n=i[c];let d,u,l=-1,p=0;for(;p<n.length&&(s.lastIndex=p,u=s.exec(n),u!==null);)p=s.lastIndex,s===U?u[1]==="!--"?s=et:u[1]!==void 0?s=rt:u[2]!==void 0?(st.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=y):u[3]!==void 0&&(s=y):s===y?u[0]===">"?(s=o??U,l=-1):u[1]===void 0?l=-2:(l=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?y:u[3]==='"'?it:ot):s===it||s===ot?s=y:s===et||s===rt?s=U:(s=y,o=void 0);const $=s===y&&i[c+1].startsWith("/>")?" ":"";a+=s===U?n+yt:l>=0?(r.push(d),n.slice(0,l)+X+n.slice(l)+b+$):n+b+(l===-2?c:$)}return[nt(i,a+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class C{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let a=0,s=0;const c=t.length-1,n=this.parts,[d,u]=Et(t,e);if(this.el=C.createElement(d,r),m.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(o=m.nextNode())!==null&&n.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const l of o.getAttributeNames())if(l.endsWith(X)){const p=u[s++],$=o.getAttribute(l).split(b),B=/([.?@])?(.*)/.exec(p);n.push({type:1,index:a,name:B[2],strings:$,ctor:B[1]==="."?wt:B[1]==="?"?kt:B[1]==="@"?Pt:R}),o.removeAttribute(l)}else l.startsWith(b)&&(n.push({type:6,index:a}),o.removeAttribute(l));if(st.test(o.tagName)){const l=o.textContent.split(b),p=l.length-1;if(p>0){o.textContent=N?N.emptyScript:"";for(let $=0;$<p;$++)o.append(l[$],k()),m.nextNode(),n.push({type:2,index:++a});o.append(l[p],k())}}}else if(o.nodeType===8)if(o.data===tt)n.push({type:2,index:a});else{let l=-1;for(;(l=o.data.indexOf(b,l+1))!==-1;)n.push({type:7,index:a}),l+=b.length-1}a++}}static createElement(t,e){const r=_.createElement("template");return r.innerHTML=t,r}}function E(i,t,e=i,r){var s,c;if(t===S)return t;let o=r!==void 0?(s=e.o)==null?void 0:s[r]:e.l;const a=P(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((c=o==null?void 0:o._$AO)==null||c.call(o,!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,r)),r!==void 0?(e.o??(e.o=[]))[r]=o:e.l=o),o!==void 0&&(t=E(i,o._$AS(i,t.values),o,r)),t}class xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??_).importNode(e,!0);m.currentNode=o;let a=m.nextNode(),s=0,c=0,n=r[0];for(;n!==void 0;){if(s===n.index){let d;n.type===2?d=new O(a,a.nextSibling,this,t):n.type===1?d=new n.ctor(a,n.name,n.strings,this,t):n.type===6&&(d=new Ut(a,this,t)),this._$AV.push(d),n=r[++c]}s!==(n==null?void 0:n.index)&&(a=m.nextNode(),s++)}return m.currentNode=_,o}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,r,o){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this.v=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),P(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=C.createElement(nt(r.h,r.h[0]),this.options)),r);if(((a=this._$AH)==null?void 0:a._$AD)===o)this._$AH.p(e);else{const s=new xt(o,this),c=s.u(this.options);s.p(e),this.T(c),this._$AH=s}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new C(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const a of t)o===e.length?e.push(r=new O(this.O(k()),this.O(k()),this,this.options)):r=e[o],r._$AI(a),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,a){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(t,e=this,r,o){const a=this.strings;let s=!1;if(a===void 0)t=E(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==S,s&&(this._$AH=t);else{const c=t;let n,d;for(t=a[0],n=0;n<a.length-1;n++)d=E(this,c[r+n],e,n),d===S&&(d=this._$AH[n]),s||(s=!P(d)||d!==this._$AH[n]),d===h?t=h:t!==h&&(t+=(d??"")+a[n+1]),this._$AH[n]=d}s&&!o&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class kt extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Pt extends R{constructor(t,e,r,o,a){super(t,e,r,o,a),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??h)===S)return;const r=this._$AH,o=t===h&&r!==h||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==h&&(r===h||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const W=w.litHtmlPolyfillSupport;W==null||W(C,O),(w.litHtmlVersions??(w.litHtmlVersions=[])).push("3.2.0");const Ct=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const a=(e==null?void 0:e.renderBefore)??null;r._$litPart$=o=new O(t.insertBefore(k(),a),a,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class T extends A{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return S}}T._$litElement$=!0,T.finalized=!0,(lt=globalThis.litElementHydrateSupport)==null||lt.call(globalThis,{LitElement:T});const q=globalThis.litElementPolyfillSupport;q==null||q({LitElement:T}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:D},Ht=(i=Tt,t,e)=>{const{kind:r,metadata:o}=e;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(e.name,i),r==="accessor"){const{name:s}=e;return{set(c){const n=t.get.call(this);t.set.call(this,c),this.requestUpdate(s,n,i)},init(c){return c!==void 0&&this.P(s,void 0,i),c}}}if(r==="setter"){const{name:s}=e;return function(c){const n=this[s];t.call(this,c),this.requestUpdate(s,n,i)}}throw Error("Unsupported decorator location: "+r)};function z(i){return(t,e)=>typeof e=="object"?Ht(i,t,e):((r,o,a)=>{const s=o.hasOwnProperty(a);return o.constructor.createProperty(a,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,a):void 0})(i,t,e)}var Mt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,H=(i,t,e,r)=>{for(var o=r>1?void 0:r?Nt(t,e):t,a=i.length-1,s;a>=0;a--)(s=i[a])&&(o=(r?s(t,e,o):s(o))||o);return r&&o&&Mt(t,e,o),o};const ct="fhi-button";f.FhiButton=class extends T{constructor(){super(...arguments),this.color="accent",this.variant="strong",this.size="medium",this.disabled=!1}render(){return St`<button ?disabled=${this.disabled}>
      <slot></slot>
    </button>`}},f.FhiButton.styles=dt`
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
  `,H([z({type:String,reflect:!0})],f.FhiButton.prototype,"color",2),H([z({type:String,reflect:!0})],f.FhiButton.prototype,"variant",2),H([z({type:String,reflect:!0})],f.FhiButton.prototype,"size",2),H([z({type:Boolean,reflect:!0})],f.FhiButton.prototype,"disabled",2),f.FhiButton=H([Ot(ct)],f.FhiButton),f.FhiButtonSelector=ct,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=fhi-designsystem.umd.cjs.map
