(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,at=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol(),rt=new WeakMap;let St=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(at&&t===void 0){const a=e!==void 0&&e.length===1;a&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&rt.set(e,t))}return t}toString(){return this.cssText}};const Nt=n=>new St(typeof n=="string"?n:n+"",void 0,nt),R=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((a,s,o)=>a+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new St(e,n,nt)},Pt=(n,t)=>{if(at)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const a=document.createElement("style"),s=B.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=e.cssText,n.appendChild(a)}},lt=at?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return Nt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ut,defineProperty:zt,getOwnPropertyDescriptor:Rt,getOwnPropertyNames:Yt,getOwnPropertySymbols:Ht,getPrototypeOf:Qt}=Object,v=globalThis,ct=v.trustedTypes,Bt=ct?ct.emptyScript:"",q=v.reactiveElementPolyfillSupport,O=(n,t)=>n,V={toAttribute(n,t){switch(t){case Boolean:n=n?Bt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ot=(n,t)=>!Ut(n,t),dt={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);let N=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const a=Symbol(),s=this.getPropertyDescriptor(t,a,e);s!==void 0&&zt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,a){const{get:s,set:o}=Rt(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:s,set(i){const l=s==null?void 0:s.call(this);o==null||o.call(this,i),this.requestUpdate(t,l,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dt}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=Qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,a=[...Yt(e),...Ht(e)];for(const s of a)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[a,s]of e)this.elementProperties.set(a,s)}this._$Eh=new Map;for(const[e,a]of this.elementProperties){const s=this._$Eu(e,a);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const s of a)e.unshift(lt(s))}else t!==void 0&&e.push(lt(t));return e}static _$Eu(t,e){const a=e.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var a;return(a=e.hostConnected)==null?void 0:a.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var a;return(a=e.hostDisconnected)==null?void 0:a.call(e)})}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$ET(t,e){var o;const a=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,a);if(s!==void 0&&a.reflect===!0){const i=(((o=a.converter)==null?void 0:o.toAttribute)!==void 0?a.converter:V).toAttribute(e,a.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){var o,i;const a=this.constructor,s=a._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=a.getPropertyOptions(s),r=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:V;this._$Em=s;const c=r.fromAttribute(e,l.type);this[s]=c??((i=this._$Ej)==null?void 0:i.get(s))??c,this._$Em=null}}requestUpdate(t,e,a){var s;if(t!==void 0){const o=this.constructor,i=this[t];if(a??(a=o.getPropertyOptions(t)),!((a.hasChanged??ot)(i,e)||a.useDefault&&a.reflect&&i===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(o._$Eu(t,a))))return;this.C(t,e,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:a,reflect:s,wrapped:o},i){a&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??e??this[t]),o!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,i]of s){const{wrapped:l}=i,r=this[o];l!==!0||this._$AL.has(o)||r===void 0||this.C(o,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(a=this._$EO)==null||a.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(a=>{var s;return(s=a.hostUpdated)==null?void 0:s.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[O("elementProperties")]=new Map,N[O("finalized")]=new Map,q==null||q({ReactiveElement:N}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,G=D.trustedTypes,ut=G?G.createPolicy("lit-html",{createHTML:n=>n}):void 0,Mt="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,Ct="?"+m,Ft=`<${Ct}>`,A=document,P=()=>A.createComment(""),U=n=>n===null||typeof n!="object"&&typeof n!="function",it=Array.isArray,Vt=n=>it(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",K=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,gt=/>/g,_=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,ft=/"/g,jt=/^(?:script|style|textarea|title)$/i,Gt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),g=Gt(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),bt=new WeakMap,x=A.createTreeWalker(A,129);function It(n,t){if(!it(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ut!==void 0?ut.createHTML(t):t}const Wt=(n,t)=>{const e=n.length-1,a=[];let s,o=t===2?"<svg>":t===3?"<math>":"",i=E;for(let l=0;l<e;l++){const r=n[l];let c,p,d=-1,f=0;for(;f<r.length&&(i.lastIndex=f,p=i.exec(r),p!==null);)f=i.lastIndex,i===E?p[1]==="!--"?i=pt:p[1]!==void 0?i=gt:p[2]!==void 0?(jt.test(p[2])&&(s=RegExp("</"+p[2],"g")),i=_):p[3]!==void 0&&(i=_):i===_?p[0]===">"?(i=s??E,d=-1):p[1]===void 0?d=-2:(d=i.lastIndex-p[2].length,c=p[1],i=p[3]===void 0?_:p[3]==='"'?ft:ht):i===ft||i===ht?i=_:i===pt||i===gt?i=E:(i=_,s=void 0);const b=i===_&&n[l+1].startsWith("/>")?" ":"";o+=i===E?r+Ft:d>=0?(a.push(c),r.slice(0,d)+Mt+r.slice(d)+m+b):r+m+(d===-2?l:b)}return[It(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class z{constructor({strings:t,_$litType$:e},a){let s;this.parts=[];let o=0,i=0;const l=t.length-1,r=this.parts,[c,p]=Wt(t,e);if(this.el=z.createElement(c,a),x.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=x.nextNode())!==null&&r.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(Mt)){const f=p[i++],b=s.getAttribute(d).split(m),H=/([.?@])?(.*)/.exec(f);r.push({type:1,index:o,name:H[2],strings:b,ctor:H[1]==="."?Zt:H[1]==="?"?qt:H[1]==="@"?Kt:Z}),s.removeAttribute(d)}else d.startsWith(m)&&(r.push({type:6,index:o}),s.removeAttribute(d));if(jt.test(s.tagName)){const d=s.textContent.split(m),f=d.length-1;if(f>0){s.textContent=G?G.emptyScript:"";for(let b=0;b<f;b++)s.append(d[b],P()),x.nextNode(),r.push({type:2,index:++o});s.append(d[f],P())}}}else if(s.nodeType===8)if(s.data===Ct)r.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(m,d+1))!==-1;)r.push({type:7,index:o}),d+=m.length-1}o++}}static createElement(t,e){const a=A.createElement("template");return a.innerHTML=t,a}}function M(n,t,e=n,a){var i,l;if(t===S)return t;let s=a!==void 0?(i=e._$Co)==null?void 0:i[a]:e._$Cl;const o=U(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,a)),a!==void 0?(e._$Co??(e._$Co=[]))[a]=s:e._$Cl=s),s!==void 0&&(t=M(n,s._$AS(n,t.values),s,a)),t}class Jt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(e,!0);x.currentNode=s;let o=x.nextNode(),i=0,l=0,r=a[0];for(;r!==void 0;){if(i===r.index){let c;r.type===2?c=new C(o,o.nextSibling,this,t):r.type===1?c=new r.ctor(o,r.name,r.strings,this,t):r.type===6&&(c=new Xt(o,this,t)),this._$AV.push(c),r=a[++l]}i!==(r==null?void 0:r.index)&&(o=x.nextNode(),i++)}return x.currentNode=A,s}p(t){let e=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class C{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,a,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),U(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:a}=t,s=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=z.createElement(It(a.h,a.h[0]),this.options)),a);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const i=new Jt(s,this),l=i.u(this.options);i.p(e),this.T(l),this._$AH=i}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new z(t)),e}k(t){it(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,s=0;for(const o of t)s===e.length?e.push(a=new C(this.O(P()),this.O(P()),this,this.options)):a=e[s],a._$AI(o),s++;s<e.length&&(this._$AR(a&&a._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=u}_$AI(t,e=this,a,s){const o=this.strings;let i=!1;if(o===void 0)t=M(this,t,e,0),i=!U(t)||t!==this._$AH&&t!==S,i&&(this._$AH=t);else{const l=t;let r,c;for(t=o[0],r=0;r<o.length-1;r++)c=M(this,l[a+r],e,r),c===S&&(c=this._$AH[r]),i||(i=!U(c)||c!==this._$AH[r]),c===u?t=u:t!==u&&(t+=(c??"")+o[r+1]),this._$AH[r]=c}i&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Zt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class qt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Kt extends Z{constructor(t,e,a,s,o){super(t,e,a,s,o),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??u)===S)return;const a=this._$AH,s=t===u&&a!==u||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,o=t!==u&&(a===u||s);s&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Xt{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const te={I:C},X=D.litHtmlPolyfillSupport;X==null||X(z,C),(D.litHtmlVersions??(D.litHtmlVersions=[])).push("3.3.1");const Tt=(n,t,e)=>{const a=(e==null?void 0:e.renderBefore)??t;let s=a._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;a._$litPart$=s=new C(t.insertBefore(P(),o),o,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis;let h=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}};var At;h._$litElement$=!0,h.finalized=!0,(At=w.litElementHydrateSupport)==null||At.call(w,{LitElement:h});const tt=w.litElementPolyfillSupport;tt==null||tt({LitElement:h});(w.litElementVersions??(w.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:ot},se=(n=ee,t,e)=>{const{kind:a,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),a==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(e.name,n),a==="accessor"){const{name:i}=e;return{set(l){const r=t.get.call(this);t.set.call(this,l),this.requestUpdate(i,r,n)},init(l){return l!==void 0&&this.C(i,void 0,n,l),l}}}if(a==="setter"){const{name:i}=e;return function(l){const r=this[i];t.call(this,l),this.requestUpdate(i,r,n)}}throw Error("Unsupported decorator location: "+a)};function Y(n){return(t,e)=>typeof e=="object"?se(n,t,e):((a,s,o)=>{const i=s.hasOwnProperty(o);return s.constructor.createProperty(o,a),i?Object.getOwnPropertyDescriptor(s,o):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(n){return Y({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae={ATTRIBUTE:1},Et=n=>(...t)=>({_$litDirective$:n,values:t});class Ot{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ne}=te,mt=(n,t)=>(n==null?void 0:n._$litType$)!==void 0,oe=n=>{var t;return((t=n==null?void 0:n._$litType$)==null?void 0:t.h)!=null},vt=()=>document.createComment(""),yt=(n,t,e)=>{var o;const a=n._$AA.parentNode,s=n._$AB;if(e===void 0){const i=a.insertBefore(vt(),s),l=a.insertBefore(vt(),s);e=new ne(i,l,n,n.options)}else{const i=e._$AB.nextSibling,l=e._$AM,r=l!==n;if(r){let c;(o=e._$AQ)==null||o.call(e,n),e._$AM=n,e._$AP!==void 0&&(c=n._$AU)!==l._$AU&&e._$AP(c)}if(i!==s||r){let c=e._$AA;for(;c!==i;){const p=c.nextSibling;a.insertBefore(c,s),c=p}}}return e},ie={},kt=(n,t=ie)=>n._$AH=t,$t=n=>n._$AH,re=n=>{n._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=n=>oe(n)?n._$litType$.h:n.strings,le=Et(class extends Ot{constructor(n){super(n),this.et=new WeakMap}render(n){return[n]}update(n,[t]){const e=mt(this.it)?_t(this.it):null,a=mt(t)?_t(t):null;if(e!==null&&(a===null||e!==a)){const s=$t(n).pop();let o=this.et.get(e);if(o===void 0){const i=document.createDocumentFragment();o=Tt(u,i),o.setConnected(!1),this.et.set(e,o)}kt(o,[s]),yt(o,void 0,s)}if(a!==null){if(e===null||e!==a){const s=this.et.get(a);if(s!==void 0){const o=$t(s).pop();re(n),yt(n,void 0,o),kt(n,[o])}}this.it=t}else this.it=void 0;return this.render(t)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=Et(class extends Ot{constructor(n){var t;if(super(n),n.type!==ae.ATTRIBUTE||n.name!=="class"||((t=n.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var a,s;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((a=this.nt)!=null&&a.has(o))&&this.st.add(o);return this.render(t)}const e=n.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const i=!!t[o];i===this.st.has(o)||(s=this.nt)!=null&&s.has(o)||(i?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return S}}),ce={loading:"加载中",running:"运行中",stop:"已停止",warning:"警告",unknown:"未知",failed:"失败"},de={status:ce},ue={loading:"Loading",running:"Running",stop:"Stopped",warning:"Warning",unknown:"Unknown",failed:"Failed"},pe={status:ue},ge="blueking_language",L="zh-CN",Q={"zh-CN":de,"en-US":pe};function he(){if(typeof document>"u")return L;const n=document.cookie.split(";");for(const t of n){const[e,...a]=t.trim().split("=");if(e===ge)return a.join("=")==="en"?"en-US":L}return L}class fe{constructor(t=L){this.currentLocale=L,this.currentLocale=t}setLocale(t){Q[t]?this.currentLocale=t:console.warn(`[I18n] 不支持的语言代码: ${t}，将继续使用 ${this.currentLocale}`)}getLocale(){return this.currentLocale}t(t){const e=t.split(".");let a=Q[this.currentLocale];for(const s of e)if(a&&typeof a=="object"&&s in a)a=a[s];else return console.debug(`[I18n] 翻译键未找到: ${t} (语言: ${this.currentLocale})`),t;return typeof a=="string"?a:t}getAvailableLocales(){return Object.keys(Q)}isLocaleSupported(t){return t in Q}}const xt=new fe,be='@charset "UTF-8";:host{display:inline-flex;vertical-align:middle}.bkbase-status-tag{display:inline-flex;align-items:center;padding:0 8px;height:22px;border-radius:13px;font-size:12px;font-weight:700;background-color:#f0f1f5;box-sizing:border-box}.bkbase-status-tag-loading{display:inline-block;width:12px;height:12px;margin-right:4px;background-image:var(--loading-icon);background-repeat:no-repeat;background-position:center;background-size:100%;animation:bk-status-loading-rotate 1s linear infinite}.bkbase-status-tag-dot{display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:4px;background-color:#c4c6cc;position:relative}.bkbase-status-tag-dot:before{content:"";position:absolute;width:100%;height:100%;border-radius:50%;background-color:inherit;opacity:.2}.bkbase-status-tag--loading{background-color:#edf4ff;color:#699df4;border:1px solid #CDDFFE}.bkbase-status-tag--running{background-color:#ebfaef;color:#299e56;border:1px solid #CBF0DA}.bkbase-status-tag--running .bkbase-status-tag-dot{background:#e5f6ea;border:1px solid #3FC06D}.bkbase-status-tag--stop{background-color:#f5f7fa;color:#979ba5;border:1px solid #EAEBF0}.bkbase-status-tag--stop .bkbase-status-tag-dot{background:#f0f1f5;border:1px solid #C4C6CC}.bkbase-status-tag--warning{background-color:#fdf4e9;color:#f59500;border:1px solid #FCE5C0}.bkbase-status-tag--warning .bkbase-status-tag-dot{background:#fce5c0;border:1px solid #F59500}.bkbase-status-tag--unknown{background-color:#feebea;color:#ea3636;border:1px solid #FDD8D6}.bkbase-status-tag--unknown .bkbase-status-tag-dot{background:#fdd8d6;border:1px solid #EA3636}@keyframes bk-status-loading-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.bkbase-status-tag--type-stroke,.bkbase-status-tag--type-filled{background-color:transparent;border:none;padding:0;color:#4d4f56;font-weight:400}.bkbase-status-tag--type-stroke span:last-child,.bkbase-status-tag--type-filled span:last-child{margin-left:4px}.bkbase-status-tag--type-stroke .bkbase-status-tag-dot{width:8px;height:8px;border-radius:50%;box-sizing:border-box}.bkbase-status-tag--type-stroke .bkbase-status-tag-dot:before{display:none}.bkbase-status-tag--type-stroke.bkbase-status-tag--running .bkbase-status-tag-dot{background:#cbf0da;border:1px solid #2CAF5E}.bkbase-status-tag--type-filled .bkbase-status-tag-dot{width:13px;height:13px;border-radius:50%;box-sizing:border-box;position:relative}.bkbase-status-tag--type-filled .bkbase-status-tag-dot:before{display:none}.bkbase-status-tag--type-filled .bkbase-status-tag-dot:after{content:"";position:absolute;width:7px;height:7px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%)}.bkbase-status-tag--type-filled.bkbase-status-tag--running .bkbase-status-tag-dot{background:#daf6e5;border:none}.bkbase-status-tag--type-filled.bkbase-status-tag--running .bkbase-status-tag-dot:after{background:#3fc06d}.bkbase-status-tag--type-filled.bkbase-status-tag--stop .bkbase-status-tag-dot{background:#979ba529;border:none}.bkbase-status-tag--type-filled.bkbase-status-tag--stop .bkbase-status-tag-dot:after{background:#979ba5}.bkbase-status-tag--type-filled.bkbase-status-tag--warning .bkbase-status-tag-dot{background:#fdeed8;border:none}.bkbase-status-tag--type-filled.bkbase-status-tag--warning .bkbase-status-tag-dot:after{background:#f59500}.bkbase-status-tag--type-filled.bkbase-status-tag--unknown .bkbase-status-tag-dot{background:#ea363629;border:none}.bkbase-status-tag--type-filled.bkbase-status-tag--unknown .bkbase-status-tag-dot:after{background:#ea3636}';var me=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,I=(n,t,e,a)=>{for(var s=a>1?void 0:a?ve(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=(a?i(t,e,s):i(s))||s);return a&&s&&me(t,e,s),s};const wt={loading:{text:"loading",theme:"loading"},running:{text:"running",theme:"running"},stop:{text:"stop",theme:"stop"},warning:{text:"warning",theme:"warning"},unknown:{text:"unknown",theme:"stop"},failed:{text:"failed",theme:"unknown"}},ye="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNhODRmZiI+PHBhdGggZD0iTTMzMi44IDI0My4yYzI1LjYgMjUuNiAyNS42IDY0IDAgODkuNi0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBMMjE3LjYgMzA3LjIgMTk4LjQgMjg4Yy0yNS42LTI1LjYtMjUuNi02NCAwLTg5LjZzNjQtMjUuNiA4OS42IDBsMjUuNiAyNS42TDMzMi44IDI0My4yeiIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTkyIDQ0OGMzOC40IDAgNjQgMjUuNiA2NCA2NFMyMzAuNCA1NzYgMTkyIDU3NkgxNjAgMTI4Qzg5LjYgNTc2IDY0IDU1MC40IDY0IDUxMnMyNS42LTY0IDY0LTY0aDMySDE5MnoiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGQ9Ik0yNDMuMiA2OTEuMmMyNS42LTI1LjYgNjQtMjUuNiA4OS42IDAgMjUuNiAyNS42IDI1LjYgNjQgMCA4OS42bC0yNS42IDI1LjZMMjgxLjYgODMyYy0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBzLTI1LjYtNjQgMC04OS42bDI1LjYtMjUuNkwyNDMuMiA2OTEuMnoiIG9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTQ0OCA4MzJjMC0zOC40IDI1LjYtNjQgNjQtNjRzNjQgMjUuNiA2NCA2NHYzMlY4OTZjMCAzOC40LTI1LjYgNjQtNjQgNjRzLTY0LTI1LjYtNjQtNjR2LTMyVjgzMnoiIG9wYWNpdHk9Ii40NSIvPjxwYXRoIGQ9Ik04MjUuNiA4MjUuNmMtMjUuNiAyNS42LTY0IDI1LjYtODkuNiAwbC0yNS42LTI1LjYgMCAwLTI1LjYtMjUuNmMtMjUuNi0yNS42LTI1LjYtNjQgMC04OS42czY0LTI1LjYgODkuNiAwbDI1LjYgMjUuNiAyNS42IDI1LjYgMCAwQzg1MS4yIDc2MS42IDg1MS4yIDgwNi40IDgyNS42IDgyNS42eiIgb3BhY2l0eT0iLjYiLz48cGF0aCBkPSJNODk2IDQ0OGwtMzIgMTI4SDgzMmMtMzguNCAwLTY0LTI1LjYtNjQtNjRzMjUuNi02NCA2NC02NEg4OTZ6TTk2MCA1MTJjMCAzOC40LTI1LjYgNjQtNjQgNjRoLTMyTDg5NiA0NDhDOTM0LjQgNDQ4IDk2MCA0NzMuNiA5NjAgNTEyeiIgb3BhYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Ik03NDIuNCAxOTJjMjUuNi0xOS4yIDY0LTE5LjIgODMuMiA2LjQgMjUuNiAyNS42IDI1LjYgNjQgMCA4OS42bC0yNS42IDI1LjYtMjUuNiAyNS42Yy0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBzLTI1LjYtNjQgMC04OS42IiBvcGFjaXR5PSIuOSIvPjxwYXRoIGQ9Ik00NDggMTYwTDU3NiAxOTJjMCAzOC40LTI1LjYgNjQtNjQgNjRTNDQ4IDIzMC40IDQ0OCAxOTJWMTYwek01MTIgNjRjMzguNCAwIDY0IDI1LjYgNjQgNjR2MzJINDQ4VjEyOEM0NDggODkuNiA0NzMuNiA2NCA1MTIgNjR6TTQ0OCAxNjBoMTI4VjE5Mkg0NDhWMTYwem0iLz48L2c+PC9zdmc+";let y=class extends h{constructor(){super(...arguments),this.status="unknown",this.type="",this.statusMap={},this.locale="zh-CN",this._mergedStatusMap=wt}connectedCallback(){if(super.connectedCallback(),!this.hasAttribute("locale")){const n=he();n&&(this.locale=n)}}willUpdate(n){n.has("locale")&&xt.setLocale(this.locale),n.has("statusMap")&&(this._mergedStatusMap=this._computeMergedStatusMap())}_computeMergedStatusMap(){return{...wt,...this.statusMap}}_findMatchingStatusKey(n){const t=this._mergedStatusMap;if(t[n])return n;const e=n.toLowerCase();if(t[e])return e;const a=n.toUpperCase();return t[a]?a:"unknown"}_getCurrentStatus(){const n=this._findMatchingStatusKey(this.status),t=this._mergedStatusMap[n]||this._mergedStatusMap.unknown;return{...t,text:xt.t(`status.${t.text}`)}}_renderIcon(n){return n==="loading"?g`<span class="bkbase-status-tag-loading"></span>`:g`<span class="bkbase-status-tag-dot"></span>`}render(){const n=this._getCurrentStatus(),{theme:t,text:e}=n,a={"bkbase-status-tag":!0,[`bkbase-status-tag--${t}`]:!0,[`bkbase-status-tag--type-${this.type}`]:!!this.type};return g`
      <div class=${F(a)}>
        ${le(this._renderIcon(t))}
        <span>${e}</span>
      </div>
    `}};y.styles=[Nt(be.replace("var(--loading-icon)",`url('${ye}')`))];I([Y({type:String,reflect:!0})],y.prototype,"status",2);I([Y({type:String,reflect:!0})],y.prototype,"type",2);I([Y({type:Object,attribute:"status-map",converter:{fromAttribute:n=>{if(!n)return{};try{return JSON.parse(n)}catch(t){return console.warn("[StatusTag] 解析 status-map 失败:",t),{}}},toAttribute:n=>JSON.stringify(n)}})],y.prototype,"statusMap",2);I([Y({type:String,reflect:!0})],y.prototype,"locale",2);I([$()],y.prototype,"_mergedStatusMap",2);y=I([j("status-tag")],y);var ke=Object.getOwnPropertyDescriptor,$e=(n,t,e,a)=>{for(var s=a>1?void 0:a?ke(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=i(s)||s);return s};let et=class extends h{render(){return g`
      <!-- 快速开始 -->
      <section class="section">
        <h2>🚀 快速开始</h2>
        <div class="demo-card">
          <h3>基础用法</h3>
          <div class="demo-preview">
            <status-tag status="loading"></status-tag>
            <status-tag status="running"></status-tag>
            <status-tag status="stop"></status-tag>
            <status-tag status="warning"></status-tag>
            <status-tag status="failed"></status-tag>
            <status-tag status="unknown"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="loading"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning"&gt;&lt;/status-tag&gt;
&lt;status-tag status="failed"&gt;&lt;/status-tag&gt;
&lt;status-tag status="unknown"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 样式类型 -->
      <section class="section">
        <h2>🎭 样式类型</h2>
        <div class="demo-card">
          <h3>多种展现形态</h3>
          <div class="demo-preview">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="width: 60px; color: #999; font-size: 12px;">Default</span>
                <div style="display: flex; gap: 8px;">
                  <status-tag status="loading"></status-tag>
                  <status-tag status="running"></status-tag>
                  <status-tag status="stop"></status-tag>
                  <status-tag status="warning"></status-tag>
                  <status-tag status="failed"></status-tag>
                  <status-tag status="unknown"></status-tag>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="width: 60px; color: #999; font-size: 12px;">Stroke</span>
                <div style="display: flex; gap: 8px;">
                  <status-tag status="loading" type="stroke"></status-tag>
                  <status-tag status="running" type="stroke"></status-tag>
                  <status-tag status="stop" type="stroke"></status-tag>
                  <status-tag status="warning" type="stroke"></status-tag>
                  <status-tag status="failed" type="stroke"></status-tag>
                  <status-tag status="unknown" type="stroke"></status-tag>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="width: 60px; color: #999; font-size: 12px;">Filled</span>
                <div style="display: flex; gap: 8px;">
                  <status-tag status="loading" type="filled"></status-tag>
                  <status-tag status="stop" type="filled"></status-tag>
                  <status-tag status="warning" type="filled"></status-tag>
                  <status-tag status="failed" type="filled"></status-tag>
                  <status-tag status="unknown" type="filled"></status-tag>
                </div>
              </div>
            </div>
          </div>
          <div class="demo-code">
            <pre><code>&lt;!-- Default (带背景框) --&gt;
&lt;status-tag status="loading"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning"&gt;&lt;/status-tag&gt;
&lt;status-tag status="failed"&gt;&lt;/status-tag&gt;
&lt;status-tag status="unknown"&gt;&lt;/status-tag&gt;

&lt;!-- Stroke (8px 描边) --&gt;
&lt;status-tag status="loading" type="stroke"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running" type="stroke"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop" type="stroke"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning" type="stroke"&gt;&lt;/status-tag&gt;
&lt;status-tag status="failed" type="stroke"&gt;&lt;/status-tag&gt;
&lt;status-tag status="unknown" type="stroke"&gt;&lt;/status-tag&gt;

&lt;!-- Filled (13px 光晕 + 7px 实心) --&gt;
&lt;status-tag status="loading" type="filled"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running" type="filled"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop" type="filled"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning" type="filled"&gt;&lt;/status-tag&gt;
&lt;status-tag status="failed" type="filled"&gt;&lt;/status-tag&gt;
&lt;status-tag status="unknown" type="filled"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 国际化 -->
      <section class="section">
        <h2>🌍 国际化（i18n）</h2>
        <div class="demo-card">
          <h3>中文 vs 英文</h3>
          <div class="i18n-comparison">
            <div class="i18n-column">
              <h4>中文（zh-CN）</h4>
              <div class="demo-preview">
                <status-tag status="loading" locale="zh-CN"></status-tag>
                <status-tag status="running" locale="zh-CN"></status-tag>
                <status-tag status="stop" locale="zh-CN"></status-tag>
                <status-tag status="warning" locale="zh-CN"></status-tag>
                <status-tag status="failed" locale="zh-CN"></status-tag>
                <status-tag status="unknown" locale="zh-CN"></status-tag>
              </div>
            </div>
            <div class="i18n-column">
              <h4>英文（en-US）</h4>
              <div class="demo-preview">
                <status-tag status="loading" locale="en-US"></status-tag>
                <status-tag status="running" locale="en-US"></status-tag>
                <status-tag status="stop" locale="en-US"></status-tag>
                <status-tag status="warning" locale="en-US"></status-tag>
                <status-tag status="failed" locale="en-US"></status-tag>
                <status-tag status="unknown" locale="en-US"></status-tag>
              </div>
            </div>
          </div>
          <div class="demo-code">
            <pre><code>&lt;!-- 中文 --&gt;
&lt;status-tag status="running" locale="zh-CN"&gt;&lt;/status-tag&gt;

&lt;!-- 英文 --&gt;
&lt;status-tag status="running" locale="en-US"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 自定义状态 -->
      <section class="section">
        <h2>🎨 自定义状态映射</h2>
        <div class="demo-card">
          <h3>自定义业务状态</h3>
          <div class="demo-preview">
            <status-tag
              status="pending"
              status-map='{"pending": {"text": "待审批", "theme": "warning"}}'
            ></status-tag>
            <status-tag
              status="approved"
              status-map='{"approved": {"text": "已批准", "theme": "running"}}'
            ></status-tag>
            <status-tag
              status="rejected"
              status-map='{"rejected": {"text": "已拒绝", "theme": "stop"}}'
            ></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag
  status="pending"
  status-map='{"pending": {"text": "待审批", "theme": "warning"}}'
&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 大小写不敏感 -->
      <section class="section">
        <h2>🔤 大小写不敏感</h2>
        <div class="demo-card">
          <h3>状态值支持多种格式</h3>
          <div class="demo-preview">
            <status-tag status="RUNNING"></status-tag>
            <status-tag status="Running"></status-tag>
            <status-tag status="running"></status-tag>
            <status-tag status="Stop"></status-tag>
            <status-tag status="STOP"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="RUNNING"&gt;&lt;/status-tag&gt;
&lt;status-tag status="Running"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>
    `}};et.styles=R`
    :host {
      display: block;
    }

    .section {
      margin-bottom: 32px;
    }

    h2 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 24px;
      color: #313238;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .demo-card {
      background: white;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      margin-bottom: 24px;
    }

    h3 {
      font-size: 20px;
      font-weight: 500;
      margin: 0 0 16px 0;
      color: #63656e;
    }

    .demo-preview {
      padding: 24px;
      background: #f5f7fa;
      border-radius: 8px;
      margin-bottom: 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: center;
    }

    .demo-code {
      background: #282c34;
      border-radius: 8px;
      padding: 16px;
      overflow-x: auto;
    }

    pre {
      margin: 0;
      font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
      font-size: 14px;
      line-height: 1.5;
    }

    code {
      color: #abb2bf;
    }

    .i18n-comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 16px;
    }

    .i18n-column h4 {
      margin: 0 0 16px 0;
      padding-bottom: 8px;
      border-bottom: 2px solid #3a84ff;
      font-size: 16px;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .i18n-comparison {
        grid-template-columns: 1fr;
      }
    }
  `;et=$e([j("demo-section")],et);var _e=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,T=(n,t,e,a)=>{for(var s=a>1?void 0:a?xe(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=(a?i(t,e,s):i(s))||s);return a&&s&&_e(t,e,s),s};let k=class extends h{constructor(){super(...arguments),this.status="running",this.type="",this.locale="zh-CN",this.useCustomMap=!1,this.customMap='{"pending": {"text": "待处理", "theme": "warning"}}'}render(){return g`
      <section class="section">
        <h2>🎮 交互式控制器</h2>
        <div class="demo-card">
          <div class="preview">
            <status-tag
              status=${this.status}
              type=${this.type}
              locale=${this.locale}
              .statusMap=${this.useCustomMap?JSON.parse(this.customMap):{}}
            ></status-tag>
          </div>
          <div class="controls">
            <label>
              Status:
              <select @change=${n=>this.status=n.target.value}>
                <option value="loading">loading</option>
                <option value="running" selected>running</option>
                <option value="stop">stop</option>
                <option value="warning">warning</option>
                <option value="failed">failed</option>
                <option value="unknown">unknown</option>
              </select>
            </label>
            <label>
              Type:
              <select @change=${n=>this.type=n.target.value}>
                <option value="" selected>Default</option>
                <option value="stroke">Stroke</option>
                <option value="filled">Filled</option>
              </select>
            </label>
            <label>
              Locale:
              <select @change=${n=>this.locale=n.target.value}>
                <option value="zh-CN" selected>zh-CN</option>
                <option value="en-US">en-US</option>
              </select>
            </label>
          </div>
        </div>
      </section>
    `}};k.styles=R`
    /* 样式省略，参考原 playground/styles.css */
  `;T([$()],k.prototype,"status",2);T([$()],k.prototype,"type",2);T([$()],k.prototype,"locale",2);T([$()],k.prototype,"useCustomMap",2);T([$()],k.prototype,"customMap",2);k=T([j("interactive-controller")],k);var we=Object.getOwnPropertyDescriptor,Ae=(n,t,e,a)=>{for(var s=a>1?void 0:a?we(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=i(s)||s);return s};let st=class extends h{render(){return g`
      <section id="api-docs">
        <h2>📖 API 文档</h2>
        
        <h3>属性 (Attributes / Properties)</h3>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>属性名</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>status</code></td>
                <td><div class="desc">当前状态值。支持大小写不敏感匹配。</div></td>
                <td><code class="type-code">string</code></td>
                <td><span class="default">'unknown'</span></td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td><div class="desc">样式类型。支持 'stroke' | 'filled'。</div></td>
                <td><code class="type-code">string</code></td>
                <td><span class="default">''</span></td>
              </tr>
              <tr>
                <td><code>locale</code></td>
                <td><div class="desc">国际化语言代码。支持 'zh-CN' | 'en-US'。</div></td>
                <td><code class="type-code">string</code></td>
                <td><span class="default">'zh-CN'</span></td>
              </tr>
              <tr>
                <td><code>status-map</code></td>
                <td><div class="desc">自定义状态映射配置 JSON 字符串。</div></td>
                <td><code class="type-code">string | StatusMapConfig</code></td>
                <td><span class="default">{}</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>类型定义 (Types)</h3>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>类型名称</th>
                <th>定义</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>StatusMapConfig</code></td>
                <td>
                  <code>Record&lt;string, StatusConfig&gt;</code>
                </td>
                <td><div class="desc">状态映射配置对象，key 为状态值。</div></td>
              </tr>
              <tr>
                <td><code>StatusConfig</code></td>
                <td>
                  <pre style="margin: 0; background: transparent; padding: 0;">{
  text: string;
  theme: StatusTheme;
}</pre>
                </td>
                <td><div class="desc">单个状态的配置，包含显示文本和主题。</div></td>
              </tr>
              <tr>
                <td><code>StatusTheme</code></td>
                <td>
                  <code>'loading' | 'running' | 'stop' | 'warning' | 'unknown'</code>
                </td>
                <td><div class="desc">支持的主题类型。</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `}};st.styles=R`
    :host {
      display: block;
      padding-bottom: 60px;
    }

    h2 {
      font-size: 28px;
      font-weight: 600;
      margin: 40px 0 24px 0;
      color: #313238;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid #dcdee5;
      padding-bottom: 16px;
    }

    h3 {
      font-size: 20px;
      font-weight: 500;
      margin: 32px 0 16px 0;
      color: #313238;
    }

    .table-container {
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid #dcdee5;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      font-size: 14px;
    }

    th, td {
      padding: 16px;
      text-align: left;
      border-bottom: 1px solid #f0f1f5;
    }

    th {
      background: #fafbfd;
      color: #63656e;
      font-weight: 600;
      white-space: nowrap;
    }

    tr:last-child td {
      border-bottom: none;
    }

    code {
      font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
      background: #f0f1f5;
      padding: 2px 6px;
      border-radius: 4px;
      color: #c41d7f;
      font-size: 13px;
    }

    .type-code {
      color: #096dd9;
    }

    .desc {
      line-height: 1.6;
      color: #63656e;
    }

    .default {
      color: #63656e;
      font-family: monospace;
    }
  `;st=Ae([j("api-docs")],st);var Se=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Dt=(n,t,e,a)=>{for(var s=a>1?void 0:a?Ne(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=(a?i(t,e,s):i(s))||s);return a&&s&&Se(t,e,s),s};let W=class extends h{constructor(){super(...arguments),this.activeTab="vue3"}_renderVue3Code(){return g`
<pre class="code-block">
<span class="token comment">&lt;!-- main.ts --&gt;</span>
<span class="token keyword">import</span> <span class="token string">'@blueking/status-tag'</span><span class="token punctuation">;</span>

<span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag">&lt;template&gt;</span>
  <span class="token tag">&lt;status-tag</span>
    <span class="token attr-name">status</span><span class="token attr-value">="running"</span>
    <span class="token attr-name">type</span><span class="token attr-value">="filled"</span>
    <span class="token attr-name">locale</span><span class="token attr-value">="zh-CN"</span>
  <span class="token tag">&gt;&lt;/status-tag&gt;</span>
<span class="token tag">&lt;/template&gt;</span>
</pre>`}_renderVue2Code(){return g`
<pre class="code-block">
<span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token string">'@blueking/status-tag'</span><span class="token punctuation">;</span>

<span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag">&lt;template&gt;</span>
  <span class="token tag">&lt;div&gt;</span>
    <span class="token comment">&lt;!-- Vue 2 中 Web Component 属性绑定 --&gt;</span>
    <span class="token tag">&lt;status-tag</span>
      <span class="token attr-name">status</span><span class="token attr-value">="running"</span>
      <span class="token attr-name">type</span><span class="token attr-value">="filled"</span>
      <span class="token attr-name">:status-map</span><span class="token attr-value">="JSON.stringify(customMap)"</span>
    <span class="token tag">&gt;&lt;/status-tag&gt;</span>
  <span class="token tag">&lt;/div&gt;</span>
<span class="token tag">&lt;/template&gt;</span>

<span class="token tag">&lt;script&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">()</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      customMap<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token punctuation">...</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token tag">&lt;/script&gt;</span>
</pre>`}_renderReactCode(){return g`
<pre class="code-block">
<span class="token comment">// App.tsx</span>
<span class="token keyword">import</span> <span class="token string">'@blueking/status-tag'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">()</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag">&lt;div&gt;</span>
      <span class="token comment">{/* React 中使用 Web Component */}</span>
      <span class="token tag">&lt;status-tag</span>
        <span class="token attr-name">status</span><span class="token attr-value">="running"</span>
        <span class="token attr-name">type</span><span class="token attr-value">="filled"</span>
        <span class="token attr-name">locale</span><span class="token attr-value">="en-US"</span>
      <span class="token tag">&gt;&lt;/status-tag&gt;</span>
    <span class="token tag">&lt;/div&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>`}render(){return g`
      <section class="section">
        <h2>🔧 框架集成</h2>
        <div class="framework-card">
          <div class="tabs">
            <div 
              class=${F({tab:!0,active:this.activeTab==="vue3"})}
              @click=${()=>this.activeTab="vue3"}
            >
              Vue 3
            </div>
            <div 
              class=${F({tab:!0,active:this.activeTab==="vue2"})}
              @click=${()=>this.activeTab="vue2"}
            >
              Vue 2
            </div>
            <div 
              class=${F({tab:!0,active:this.activeTab==="react"})}
              @click=${()=>this.activeTab="react"}
            >
              React
            </div>
          </div>
          <div class="content">
            ${this.activeTab==="vue3"?this._renderVue3Code():""}
            ${this.activeTab==="vue2"?this._renderVue2Code():""}
            ${this.activeTab==="react"?this._renderReactCode():""}
          </div>
        </div>
      </section>
    `}};W.styles=R`
    :host {
      display: block;
    }

    .section {
      margin-bottom: 32px;
    }

    h2 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 24px;
      color: #313238;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .framework-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .tabs {
      display: flex;
      border-bottom: 1px solid #dcdee5;
      background: #fafbfd;
    }

    .tab {
      padding: 16px 24px;
      cursor: pointer;
      font-size: 14px;
      color: #63656e;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
      font-weight: 500;
    }

    .tab:hover {
      color: #3a84ff;
    }

    .tab.active {
      color: #3a84ff;
      border-bottom-color: #3a84ff;
      background: white;
    }

    .content {
      padding: 0;
    }

    .code-block {
      margin: 0;
      padding: 24px;
      background: #282c34;
      overflow-x: auto;
      font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
      font-size: 14px;
      line-height: 1.5;
      color: #abb2bf;
    }

    .token.tag { color: #e06c75; }
    .token.attr-name { color: #d19a66; }
    .token.attr-value { color: #98c379; }
    .token.comment { color: #5c6370; font-style: italic; }
    .token.keyword { color: #c678dd; }
    .token.string { color: #98c379; }
    .token.function { color: #61afef; }
  `;Dt([$()],W.prototype,"activeTab",2);W=Dt([j("framework-examples")],W);var Me=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,Lt=(n,t,e,a)=>{for(var s=a>1?void 0:a?Ce(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(s=(a?i(t,e,s):i(s))||s);return a&&s&&Me(t,e,s),s};let J=class extends h{constructor(){super(...arguments),this.activeSection="demo"}_scrollToSection(n){var e;this.activeSection=n;const t=(e=this.shadowRoot)==null?void 0:e.getElementById(n);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}render(){return g`
      <div class="app-layout">
        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="logo-area">
            🎨 Status Tag
          </div>
          <ul class="nav-menu">
            <li class="nav-item">
              <a class="nav-link ${this.activeSection==="demo"?"active":""}" 
                 @click=${()=>this._scrollToSection("demo")}>
                基础演示
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${this.activeSection==="interactive"?"active":""}" 
                 @click=${()=>this._scrollToSection("interactive")}>
                交互控制
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${this.activeSection==="frameworks"?"active":""}" 
                 @click=${()=>this._scrollToSection("frameworks")}>
                框架集成
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${this.activeSection==="api"?"active":""}" 
                 @click=${()=>this._scrollToSection("api")}>
                API 文档
              </a>
            </li>
          </ul>
        </aside>

        <!-- Header -->
        <header class="header">
          <h1>Status Tag Playground</h1>
          <div class="header-actions">
            <a href="../../README.md" class="github-link" target="_blank">文档</a>
            <a href="https://github.com/forrany/status-tag-component" class="github-link" target="_blank">
              GitHub
            </a>
          </div>
        </header>

        <!-- Main Content -->
        <main>
          <div id="demo" class="content-section">
            <demo-section></demo-section>
          </div>
          
          <div id="interactive" class="content-section">
            <interactive-controller></interactive-controller>
          </div>

          <div id="frameworks" class="content-section">
            <framework-examples></framework-examples>
          </div>

          <div id="api" class="content-section">
            <api-docs></api-docs>
          </div>
        </main>

        <!-- Footer -->
        <footer>
          <p>
            Made with ❤️ by Blueking Team | Based on Lit Element
          </p>
        </footer>
      </div>
    `}};J.styles=R`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #313238;
      background: #f5f7fa;
      line-height: 1.6;
      --primary-color: #3a84ff;
      --header-height: 64px;
      --sidebar-width: 260px;
    }

    /* Layout */
    .app-layout {
      display: grid;
      grid-template-columns: var(--sidebar-width) 1fr;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
      grid-template-areas: 
        "sidebar header"
        "sidebar main"
        "sidebar footer";
    }

    /* Header */
    .header {
      grid-area: header;
      background: white;
      height: var(--header-height);
      display: flex;
      align-items: center;
      padding: 0 40px;
      border-bottom: 1px solid #dcdee5;
      position: sticky;
      top: 0;
      z-index: 10;
      backdrop-filter: blur(8px);
      background: rgba(255, 255, 255, 0.9);
    }

    h1 {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 12px;
      color: #313238;
    }

    .header-actions {
      margin-left: auto;
      display: flex;
      gap: 16px;
    }

    .github-link {
      color: #63656e;
      text-decoration: none;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s;
    }

    .github-link:hover {
      color: var(--primary-color);
    }

    /* Sidebar */
    .sidebar {
      grid-area: sidebar;
      background: #182132;
      color: #979ba5;
      height: 100vh;
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      border-right: 1px solid #dcdee5;
      overflow-y: auto;
    }

    .logo-area {
      height: var(--header-height);
      display: flex;
      align-items: center;
      padding: 0 24px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      color: white;
      font-weight: bold;
      font-size: 18px;
    }

    .nav-menu {
      padding: 24px 0;
      list-style: none;
      margin: 0;
    }

    .nav-item {
      padding: 0 24px;
      margin-bottom: 4px;
    }

    .nav-link {
      display: block;
      padding: 10px 16px;
      color: #979ba5;
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.2s;
      cursor: pointer;
      font-size: 14px;
    }

    .nav-link:hover {
      color: white;
      background: rgba(255,255,255,0.1);
    }

    .nav-link.active {
      color: white;
      background: var(--primary-color);
    }

    /* Main Content */
    main {
      grid-area: main;
      padding: 24px 40px;
      width: 100%;
      box-sizing: border-box;
      margin: 0 auto;
    }

    .content-section {
      margin-bottom: 60px;
      scroll-margin-top: 80px;
    }

    /* Footer */
    footer {
      grid-area: footer;
      padding: 24px 40px;
      text-align: center;
      color: #979ba5;
      font-size: 14px;
      border-top: 1px solid #dcdee5;
      background: white;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .app-layout {
        grid-template-columns: 1fr;
        grid-template-areas: 
          "header"
          "main"
          "footer";
      }

      .sidebar {
        display: none; /* Simplify for mobile for now */
      }

      .header {
        padding: 0 20px;
      }

      main {
        padding: 20px;
      }
    }
  `;Lt([$()],J.prototype,"activeSection",2);J=Lt([j("playground-app")],J);console.log("🎨 Status Tag Playground 已加载");
//# sourceMappingURL=index-9pZPJTtI.js.map
