(function(c,$){typeof exports=="object"&&typeof module<"u"?$(exports):typeof define=="function"&&define.amd?define(["exports"],$):(c=typeof globalThis<"u"?globalThis:c||self,$(c["fhi-designsystem"]={}))})(this,function(c){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pt;const $=globalThis,F=$.ShadowRoot&&($.ShadyCSS===void 0||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),J=new WeakMap;let Z=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(e,t))}return t}toString(){return this.cssText}};const dt=s=>new Z(typeof s=="string"?s:s+"",void 0,j),ut=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Z(e,s,j)},gt=(s,t)=>{if(F)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=$.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},G=F?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return dt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:yt,getOwnPropertyDescriptor:$t,getOwnPropertyNames:mt,getOwnPropertySymbols:vt,getPrototypeOf:bt}=Object,m=globalThis,Q=m.trustedTypes,_t=Q?Q.emptyScript:"",D=m.reactiveElementPolyfillSupport,P=(s,t)=>s,M={toAttribute(s,t){switch(t){case Boolean:s=s?_t:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},B=(s,t)=>!ft(s,t),X={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:B};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&yt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=$t(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const l=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,i=[...mt(e),...vt(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(G(r))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:M).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:M;this._$Em=r,this[r]=l.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??B)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[P("elementProperties")]=new Map,E[P("finalized")]=new Map,D==null||D({ReactiveElement:E}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,N=C.trustedTypes,Y=N?N.createPolicy("lit-html",{createHTML:s=>s}):void 0,tt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+v,At=`<${et}>`,_=document,T=()=>_.createComment(""),U=s=>s===null||typeof s!="object"&&typeof s!="function",L=Array.isArray,St=s=>L(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",q=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,rt=/>/g,A=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,ot=/"/g,nt=/^(?:script|style|textarea|title)$/i,Et=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),V=Et(1),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),at=new WeakMap,S=_.createTreeWalker(_,129);function lt(s,t){if(!L(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const wt=(s,t)=>{const e=s.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=O;for(let l=0;l<e;l++){const a=s[l];let d,u,h=-1,y=0;for(;y<a.length&&(o.lastIndex=y,u=o.exec(a),u!==null);)y=o.lastIndex,o===O?u[1]==="!--"?o=it:u[1]!==void 0?o=rt:u[2]!==void 0?(nt.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=r??O,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?A:u[3]==='"'?ot:st):o===ot||o===st?o=A:o===it||o===rt?o=O:(o=A,r=void 0);const b=o===A&&s[l+1].startsWith("/>")?" ":"";n+=o===O?a+At:h>=0?(i.push(d),a.slice(0,h)+tt+a.slice(h)+v+b):a+v+(h===-2?l:b)}return[lt(s,n+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class k{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[d,u]=wt(t,e);if(this.el=k.createElement(d,i),S.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=S.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(tt)){const y=u[o++],b=r.getAttribute(h).split(v),z=/([.?@])?(.*)/.exec(y);a.push({type:1,index:n,name:z[2],strings:b,ctor:z[1]==="."?Pt:z[1]==="?"?Ct:z[1]==="@"?Tt:R}),r.removeAttribute(h)}else h.startsWith(v)&&(a.push({type:6,index:n}),r.removeAttribute(h));if(nt.test(r.tagName)){const h=r.textContent.split(v),y=h.length-1;if(y>0){r.textContent=N?N.emptyScript:"";for(let b=0;b<y;b++)r.append(h[b],T()),S.nextNode(),a.push({type:2,index:++n});r.append(h[y],T())}}}else if(r.nodeType===8)if(r.data===et)a.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(v,h+1))!==-1;)a.push({type:7,index:n}),h+=v.length-1}n++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function x(s,t,e=s,i){var o,l;if(t===w)return t;let r=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const n=U(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=r:e._$Cl=r),r!==void 0&&(t=x(s,r._$AS(s,t.values),r,i)),t}class xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??_).importNode(e,!0);S.currentNode=r;let n=S.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new H(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new Ut(n,this,t)),this._$AV.push(d),a=i[++l]}o!==(a==null?void 0:a.index)&&(n=S.nextNode(),o++)}return S.currentNode=_,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),U(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):St(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=k.createElement(lt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const o=new xt(r,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new k(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new H(this.O(T()),this.O(T()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(n===void 0)t=x(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const l=t;let a,d;for(t=n[0],a=0;a<n.length-1;a++)d=x(this,l[i+a],e,a),d===w&&(d=this._$AH[a]),o||(o=!U(d)||d!==this._$AH[a]),d===p?t=p:t!==p&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}o&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ct extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Tt extends R{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??p)===w)return;const i=this._$AH,r=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const W=C.litHtmlPolyfillSupport;W==null||W(k,H),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.2.1");const Ot=(s,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=r=new H(t.insertBefore(T(),n),n,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let I=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return w}};I._$litElement$=!0,I.finalized=!0,(pt=globalThis.litElementHydrateSupport)==null||pt.call(globalThis,{LitElement:I});const K=globalThis.litElementPolyfillSupport;K==null||K({LitElement:I}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:B},It=(s=Ht,t,e)=>{const{kind:i,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(e.name,s),i==="accessor"){const{name:o}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,s)},init(l){return l!==void 0&&this.P(o,void 0,s),l}}}if(i==="setter"){const{name:o}=e;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+i)};function f(s){return(t,e)=>typeof e=="object"?It(s,t,e):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=(s,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(s,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nt(s,t){return(e,i,r)=>{const n=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(s))??null};return Mt(e,i,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=s=>s??p;var Rt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,g=(s,t,e,i)=>{for(var r=i>1?void 0:i?zt(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&Rt(t,e,r),r};const ct="fhi-text-input";c.FhiTextInput=class extends I{constructor(){super(),this.label=void 0,this.message=void 0,this.placeholder=null,this.status=void 0,this.required=!1,this.readonly=!1,this.disabled=!1,this._name=void 0,this._value="",this._internals=this.attachInternals()}get name(){return this._name}set name(t){const e=this._name;this._name=t,this.requestUpdate("name",e),this._internals.setFormValue(this._value)}get value(){return this._value}set value(t){const e=this._value;this._value=t,this.requestUpdate("value",e),this._internals.setFormValue(this._value)}connectedCallback(){super.connectedCallback(),this._internals.setFormValue(this.value)}onChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}onInput(){this.value=this._input.value,this._internals.setFormValue(this.value)}onKeyDown(t){t.key==="Enter"&&this._internals.form&&this._internals.form.requestSubmit()}formResetCallback(){this.value=this.getAttribute("value")||"",this._internals.setFormValue(this.value)}render(){return V`
      ${this.label&&V`<label for="input-element">${this.label}</label>`}
      <input
        id="input-element"
        name=${ht(this.name)}
        placeholder=${ht(this.placeholder)}
        .value=${this.value}
        ?required=${this.required}
        ?readonly=${this.readonly}
        ?disabled=${this.disabled}
        @change=${this.onChange}
        @input=${this.onInput}
        @keydown=${this.onKeyDown}
      />
      ${this.message?V`<p class="message">${this.message}</p>`:""}
    `}},c.FhiTextInput.formAssociated=!0,c.FhiTextInput.styles=ut`
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

      --dimension-label-padding-bottom: var(--fhi-spacing-100);

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

      --dimension-message-margin-top: var(--fhi-spacing-100);
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
        font-weight: var(--typography-input-font-weight);
        font-size: var(--typography-input-font-size);
        line-height: var(--typography-input-line-height);
        letter-spacing: var(--typography-input-letter-spacing);
        transition: all var(--fhi-motion-ease-default)
          var(--fhi-motion-duration-quick);
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
      opacity: var(--fhi-opacity-disabled);
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
        background-color: transparent;
        background-image: linear-gradient(
          90deg,
          var(--color-input-border) var(--dimension-input-border-width),
          transparent 1px
        );
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
  `,g([Nt("#input-element")],c.FhiTextInput.prototype,"_input",2),g([f({type:String})],c.FhiTextInput.prototype,"label",2),g([f({type:String})],c.FhiTextInput.prototype,"message",2),g([f({type:String})],c.FhiTextInput.prototype,"placeholder",2),g([f({type:String,reflect:!0})],c.FhiTextInput.prototype,"status",2),g([f({type:Boolean})],c.FhiTextInput.prototype,"required",2),g([f({type:Boolean})],c.FhiTextInput.prototype,"readonly",2),g([f({type:Boolean})],c.FhiTextInput.prototype,"disabled",2),g([f({type:String,reflect:!0})],c.FhiTextInput.prototype,"name",1),g([f({type:String})],c.FhiTextInput.prototype,"value",1),c.FhiTextInput=g([kt(ct)],c.FhiTextInput),c.FhiTextInputSelector=ct,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=fhi-designsystem.umd.cjs.map
