(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=globalThis,at=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol(),rt=new WeakMap;let Nt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(at&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&rt.set(e,t))}return t}toString(){return this.cssText}};const Mt=s=>new Nt(typeof s=="string"?s:s+"",void 0,nt),Y=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((n,a,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[i+1],s[0]);return new Nt(e,s,nt)},Ut=(s,t)=>{if(at)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),a=Q.litNonce;a!==void 0&&n.setAttribute("nonce",a),n.textContent=e.cssText,s.appendChild(n)}},lt=at?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return Mt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zt,defineProperty:Rt,getOwnPropertyDescriptor:Yt,getOwnPropertyNames:Ht,getOwnPropertySymbols:Bt,getPrototypeOf:Qt}=Object,v=globalThis,ct=v.trustedTypes,Ft=ct?ct.emptyScript:"",q=v.reactiveElementPolyfillSupport,D=(s,t)=>s,V={toAttribute(s,t){switch(t){case Boolean:s=s?Ft:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},it=(s,t)=>!zt(s,t),dt={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);let C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),a=this.getPropertyDescriptor(t,n,e);a!==void 0&&Rt(this.prototype,t,a)}}static getPropertyDescriptor(t,e,n){const{get:a,set:i}=Yt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:a,set(o){const l=a==null?void 0:a.call(this);i==null||i.call(this,o),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dt}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const t=Qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const e=this.properties,n=[...Ht(e),...Bt(e)];for(const a of n)this.createProperty(a,e[a])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,a]of e)this.elementProperties.set(n,a)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const a=this._$Eu(e,n);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const a of n)e.unshift(lt(a))}else t!==void 0&&e.push(lt(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ut(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var i;const n=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,n);if(a!==void 0&&n.reflect===!0){const o=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:V).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,e){var i,o;const n=this.constructor,a=n._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const l=n.getPropertyOptions(a),r=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:V;this._$Em=a;const c=r.fromAttribute(e,l.type);this[a]=c??((o=this._$Ej)==null?void 0:o.get(a))??c,this._$Em=null}}requestUpdate(t,e,n){var a;if(t!==void 0){const i=this.constructor,o=this[t];if(n??(n=i.getPropertyOptions(t)),!((n.hasChanged??it)(o,e)||n.useDefault&&n.reflect&&o===((a=this._$Ej)==null?void 0:a.get(t))&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:a,wrapped:i},o){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),a===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,o]of a){const{wrapped:l}=o,r=this[i];l!==!0||this._$AL.has(i)||r===void 0||this.C(i,void 0,o,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(a=>{var i;return(i=a.hostUpdate)==null?void 0:i.call(a)}),this.update(e)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var a;return(a=n.hostUpdated)==null?void 0:a.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[D("elementProperties")]=new Map,C[D("finalized")]=new Map,q==null||q({ReactiveElement:C}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,W=L.trustedTypes,ut=W?W.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ct="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,It="?"+y,Vt=`<${It}>`,S=document,U=()=>S.createComment(""),z=s=>s===null||typeof s!="object"&&typeof s!="function",ot=Array.isArray,Wt=s=>ot(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",K=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,gt=/>/g,x=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,ft=/"/g,jt=/^(?:script|style|textarea|title)$/i,Gt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),f=Gt(1),N=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),bt=new WeakMap,w=S.createTreeWalker(S,129);function Tt(s,t){if(!ot(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ut!==void 0?ut.createHTML(t):t}const Jt=(s,t)=>{const e=s.length-1,n=[];let a,i=t===2?"<svg>":t===3?"<math>":"",o=O;for(let l=0;l<e;l++){const r=s[l];let c,p,d=-1,h=0;for(;h<r.length&&(o.lastIndex=h,p=o.exec(r),p!==null);)h=o.lastIndex,o===O?p[1]==="!--"?o=pt:p[1]!==void 0?o=gt:p[2]!==void 0?(jt.test(p[2])&&(a=RegExp("</"+p[2],"g")),o=x):p[3]!==void 0&&(o=x):o===x?p[0]===">"?(o=a??O,d=-1):p[1]===void 0?d=-2:(d=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?x:p[3]==='"'?ft:ht):o===ft||o===ht?o=x:o===pt||o===gt?o=O:(o=x,a=void 0);const b=o===x&&s[l+1].startsWith("/>")?" ":"";i+=o===O?r+Vt:d>=0?(n.push(c),r.slice(0,d)+Ct+r.slice(d)+y+b):r+y+(d===-2?l:b)}return[Tt(s,i+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class R{constructor({strings:t,_$litType$:e},n){let a;this.parts=[];let i=0,o=0;const l=t.length-1,r=this.parts,[c,p]=Jt(t,e);if(this.el=R.createElement(c,n),w.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(a=w.nextNode())!==null&&r.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const d of a.getAttributeNames())if(d.endsWith(Ct)){const h=p[o++],b=a.getAttribute(d).split(y),H=/([.?@])?(.*)/.exec(h);r.push({type:1,index:i,name:H[2],strings:b,ctor:H[1]==="."?qt:H[1]==="?"?Kt:H[1]==="@"?Xt:Z}),a.removeAttribute(d)}else d.startsWith(y)&&(r.push({type:6,index:i}),a.removeAttribute(d));if(jt.test(a.tagName)){const d=a.textContent.split(y),h=d.length-1;if(h>0){a.textContent=W?W.emptyScript:"";for(let b=0;b<h;b++)a.append(d[b],U()),w.nextNode(),r.push({type:2,index:++i});a.append(d[h],U())}}}else if(a.nodeType===8)if(a.data===It)r.push({type:2,index:i});else{let d=-1;for(;(d=a.data.indexOf(y,d+1))!==-1;)r.push({type:7,index:i}),d+=y.length-1}i++}}static createElement(t,e){const n=S.createElement("template");return n.innerHTML=t,n}}function I(s,t,e=s,n){var o,l;if(t===N)return t;let a=n!==void 0?(o=e._$Co)==null?void 0:o[n]:e._$Cl;const i=z(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==i&&((l=a==null?void 0:a._$AO)==null||l.call(a,!1),i===void 0?a=void 0:(a=new i(s),a._$AT(s,e,n)),n!==void 0?(e._$Co??(e._$Co=[]))[n]=a:e._$Cl=a),a!==void 0&&(t=I(s,a._$AS(s,t.values),a,n)),t}class Zt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,a=((t==null?void 0:t.creationScope)??S).importNode(e,!0);w.currentNode=a;let i=w.nextNode(),o=0,l=0,r=n[0];for(;r!==void 0;){if(o===r.index){let c;r.type===2?c=new j(i,i.nextSibling,this,t):r.type===1?c=new r.ctor(i,r.name,r.strings,this,t):r.type===6&&(c=new te(i,this,t)),this._$AV.push(c),r=n[++l]}o!==(r==null?void 0:r.index)&&(i=w.nextNode(),o++)}return w.currentNode=S,a}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class j{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,a){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),z(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:n}=t,a=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=R.createElement(Tt(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===a)this._$AH.p(e);else{const o=new Zt(a,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new R(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,a=0;for(const i of t)a===e.length?e.push(n=new j(this.O(U()),this.O(U()),this,this.options)):n=e[a],n._$AI(i),a++;a<e.length&&(this._$AR(n&&n._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){const a=t.nextSibling;t.remove(),t=a}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,a,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(t,e=this,n,a){const i=this.strings;let o=!1;if(i===void 0)t=I(this,t,e,0),o=!z(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{const l=t;let r,c;for(t=i[0],r=0;r<i.length-1;r++)c=I(this,l[n+r],e,r),c===N&&(c=this._$AH[r]),o||(o=!z(c)||c!==this._$AH[r]),c===g?t=g:t!==g&&(t+=(c??"")+i[r+1]),this._$AH[r]=c}o&&!a&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class qt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class Kt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class Xt extends Z{constructor(t,e,n,a,i){super(t,e,n,a,i),this.type=5}_$AI(t,e=this){if((t=I(this,t,e,0)??g)===N)return;const n=this._$AH,a=t===g&&n!==g||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==g&&(n===g||a);a&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class te{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const ee={I:j},X=L.litHtmlPolyfillSupport;X==null||X(R,j),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.3.1");const Et=(s,t,e)=>{const n=(e==null?void 0:e.renderBefore)??t;let a=n._$litPart$;if(a===void 0){const i=(e==null?void 0:e.renderBefore)??null;n._$litPart$=a=new j(t.insertBefore(U(),i),i,void 0,e??{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;let m=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return N}};var St;m._$litElement$=!0,m.finalized=!0,(St=A.litElementHydrateSupport)==null||St.call(A,{LitElement:m});const tt=A.litElementPolyfillSupport;tt==null||tt({LitElement:m});(A.litElementVersions??(A.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:it},ae=(s=se,t,e)=>{const{kind:n,metadata:a}=e;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),n==="setter"&&((s=Object.create(s)).wrapped=!0),i.set(e.name,s),n==="accessor"){const{name:o}=e;return{set(l){const r=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,r,s)},init(l){return l!==void 0&&this.C(o,void 0,s,l),l}}}if(n==="setter"){const{name:o}=e;return function(l){const r=this[o];t.call(this,l),this.requestUpdate(o,r,s)}}throw Error("Unsupported decorator location: "+n)};function M(s){return(t,e)=>typeof e=="object"?ae(s,t,e):((n,a,i)=>{const o=a.hasOwnProperty(i);return a.constructor.createProperty(i,n),o?Object.getOwnPropertyDescriptor(a,i):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(s){return M({...s,state:!0,attribute:!1})}const ne="modulepreload",ie=function(s){return"/status-tag-component/"+s},mt={},oe=function(t,e,n){let a=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(e.map(r=>{if(r=ie(r),r in mt)return;mt[r]=!0;const c=r.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${p}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":ne,c||(d.as="script"),d.crossOrigin="",d.href=r,l&&d.setAttribute("nonce",l),document.head.appendChild(d),c)return new Promise((h,b)=>{d.addEventListener("load",h),d.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${r}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return a.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re={ATTRIBUTE:1},Ot=s=>(...t)=>({_$litDirective$:s,values:t});class Dt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:le}=ee,yt=(s,t)=>(s==null?void 0:s._$litType$)!==void 0,ce=s=>{var t;return((t=s==null?void 0:s._$litType$)==null?void 0:t.h)!=null},vt=()=>document.createComment(""),kt=(s,t,e)=>{var i;const n=s._$AA.parentNode,a=s._$AB;if(e===void 0){const o=n.insertBefore(vt(),a),l=n.insertBefore(vt(),a);e=new le(o,l,s,s.options)}else{const o=e._$AB.nextSibling,l=e._$AM,r=l!==s;if(r){let c;(i=e._$AQ)==null||i.call(e,s),e._$AM=s,e._$AP!==void 0&&(c=s._$AU)!==l._$AU&&e._$AP(c)}if(o!==a||r){let c=e._$AA;for(;c!==o;){const p=c.nextSibling;n.insertBefore(c,a),c=p}}}return e},de={},$t=(s,t=de)=>s._$AH=t,_t=s=>s._$AH,ue=s=>{s._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=s=>ce(s)?s._$litType$.h:s.strings,pe=Ot(class extends Dt{constructor(s){super(s),this.et=new WeakMap}render(s){return[s]}update(s,[t]){const e=yt(this.it)?xt(this.it):null,n=yt(t)?xt(t):null;if(e!==null&&(n===null||e!==n)){const a=_t(s).pop();let i=this.et.get(e);if(i===void 0){const o=document.createDocumentFragment();i=Et(g,o),i.setConnected(!1),this.et.set(e,i)}$t(i,[a]),kt(i,void 0,a)}if(n!==null){if(e===null||e!==n){const a=this.et.get(n);if(a!==void 0){const i=_t(a).pop();ue(s),kt(s,void 0,i),$t(s,[i])}}this.it=t}else this.it=void 0;return this.render(t)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=Ot(class extends Dt{constructor(s){var t;if(super(s),s.type!==re.ATTRIBUTE||s.name!=="class"||((t=s.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var n,a;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(t)}const e=s.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const o=!!t[i];o===this.st.has(i)||(a=this.nt)!=null&&a.has(i)||(o?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return N}}),ge={loading:"加载中",running:"运行中",stop:"已停止",warning:"警告",danger:"异常",unknown:"未知",failed:"失败"},he={status:ge},fe={loading:"Loading",running:"Running",stop:"Stopped",warning:"Warning",danger:"Abnormal",unknown:"Unknown",failed:"Failed"},be={status:fe},me="blueking_language",P="zh-CN",B={"zh-CN":he,"en-US":be};function ye(){if(typeof document>"u")return P;const s=document.cookie.split(";");for(const t of s){const[e,...n]=t.trim().split("=");if(e===me)return n.join("=")==="en"?"en-US":P}return P}class ve{constructor(t=P){this.currentLocale=P,this.currentLocale=t}setLocale(t){B[t]?this.currentLocale=t:console.warn(`[I18n] 不支持的语言代码: ${t}，将继续使用 ${this.currentLocale}`)}getLocale(){return this.currentLocale}t(t){const e=t.split(".");let n=B[this.currentLocale];for(const a of e)if(n&&typeof n=="object"&&a in n)n=n[a];else return console.debug(`[I18n] 翻译键未找到: ${t} (语言: ${this.currentLocale})`),t;return typeof n=="string"?n:t}getAvailableLocales(){return Object.keys(B)}isLocaleSupported(t){return t in B}}const wt=new ve,ke='@charset "UTF-8";:host{display:inline-flex;vertical-align:middle}.bkbase-status-tag{display:inline-flex;align-items:center;padding:0 8px;height:22px;border-radius:13px;font-size:12px;font-weight:700;background-color:#f0f1f5;box-sizing:border-box}.bkbase-status-tag-loading{display:inline-block;width:12px;height:12px;margin-right:4px;background-image:var(--loading-icon);background-repeat:no-repeat;background-position:center;background-size:100%;animation:bk-status-loading-rotate 1s linear infinite}.bkbase-status-tag-dot{display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:4px;background-color:#c4c6cc;position:relative}.bkbase-status-tag-dot:before{content:"";position:absolute;width:100%;height:100%;border-radius:50%;background-color:inherit;opacity:.2}.bkbase-status-tag--loading{background-color:#edf4ff;color:#699df4;border:1px solid #CDDFFE}.bkbase-status-tag--running{background-color:#ebfaef;color:#299e56;border:1px solid #CBF0DA}.bkbase-status-tag--running .bkbase-status-tag-dot{background:#e5f6ea;border:1px solid #3FC06D}.bkbase-status-tag--stop{background-color:#f5f7fa;color:#979ba5;border:1px solid #EAEBF0}.bkbase-status-tag--stop .bkbase-status-tag-dot{background:#f0f1f5;border:1px solid #C4C6CC}.bkbase-status-tag--warning{background-color:#fdf4e9;color:#f59500;border:1px solid #FCE5C0}.bkbase-status-tag--warning .bkbase-status-tag-dot{background:#fce5c0;border:1px solid #F59500}.bkbase-status-tag--danger{background-color:#ffebeb;color:#ea3636}.bkbase-status-tag--danger .bkbase-status-tag-dot{background:#fdd8d6;border:1px solid #EA3636}.bkbase-status-tag--unknown{background-color:#feebea;color:#ea3636;border:1px solid #FDD8D6}.bkbase-status-tag--unknown .bkbase-status-tag-dot{background:#fdd8d6;border:1px solid #EA3636}.bkbase-status-tag--has-tip{cursor:pointer}.bkbase-status-tag--has-tip span:last-child{text-decoration:underline dashed;text-decoration-color:currentColor;text-decoration-thickness:1px;text-underline-offset:3px}@keyframes bk-status-loading-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.bkbase-status-tag--type-stroke,.bkbase-status-tag--type-filled{background-color:transparent;border:none;padding:0;color:#4d4f56;font-weight:400}.bkbase-status-tag--type-stroke span:last-child,.bkbase-status-tag--type-filled span:last-child{margin-left:4px}.bkbase-status-tag--type-stroke .bkbase-status-tag-dot{width:8px;height:8px;border-radius:50%;box-sizing:border-box}.bkbase-status-tag--type-stroke .bkbase-status-tag-dot:before{display:none}.bkbase-status-tag--type-stroke.bkbase-status-tag--running .bkbase-status-tag-dot{background:#cbf0da;border:1px solid #2CAF5E}.bkbase-status-tag--type-filled .bkbase-status-tag-dot{width:13px;height:13px;border-radius:50%;box-sizing:border-box;position:relative}.bkbase-status-tag--type-filled .bkbase-status-tag-dot:before{display:none}.bkbase-status-tag--type-filled .bkbase-status-tag-dot:after{content:"";position:absolute;width:7px;height:7px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%)}.bkbase-status-tag--type-filled.bkbase-status-tag--running .bkbase-status-tag-dot{background:#daf6e5;border:none}.bkbase-status-tag--type-filled.bkbase-status-tag--running .bkbase-status-tag-dot:after{background:#3fc06d}.bkbase-status-tag--type-filled.bkbase-status-tag--stop .bkbase-status-tag-dot{background:#979ba529;border:none}.bkbase-status-tag--type-filled.bkbase-status-tag--stop .bkbase-status-tag-dot:after{background:#979ba5}.bkbase-status-tag--type-filled.bkbase-status-tag--warning .bkbase-status-tag-dot{background:#fdeed8;border:none}.bkbase-status-tag--type-filled.bkbase-status-tag--warning .bkbase-status-tag-dot:after{background:#f59500}.bkbase-status-tag--type-filled.bkbase-status-tag--danger .bkbase-status-tag-dot{background:#ea363629;border:none}.bkbase-status-tag--type-filled.bkbase-status-tag--danger .bkbase-status-tag-dot:after{background:#ea3636}.bkbase-status-tag--type-filled.bkbase-status-tag--unknown .bkbase-status-tag-dot{background:#ea363629;border:none}.bkbase-status-tag--type-filled.bkbase-status-tag--unknown .bkbase-status-tag-dot:after{background:#ea3636}';var $e=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,_=(s,t,e,n)=>{for(var a=n>1?void 0:n?_e(t,e):t,i=s.length-1,o;i>=0;i--)(o=s[i])&&(a=(n?o(t,e,a):o(a))||a);return n&&a&&$e(t,e,a),a};const At={loading:{text:"loading",theme:"loading"},running:{text:"running",theme:"running"},stop:{text:"stop",theme:"stop"},warning:{text:"warning",theme:"warning"},danger:{text:"danger",theme:"danger"},unknown:{text:"unknown",theme:"stop"},failed:{text:"failed",theme:"unknown"}},xe="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNhODRmZiI+PHBhdGggZD0iTTMzMi44IDI0My4yYzI1LjYgMjUuNiAyNS42IDY0IDAgODkuNi0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBMMjE3LjYgMzA3LjIgMTk4LjQgMjg4Yy0yNS42LTI1LjYtMjUuNi02NCAwLTg5LjZzNjQtMjUuNiA4OS42IDBsMjUuNiAyNS42TDMzMi44IDI0My4yeiIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTkyIDQ0OGMzOC40IDAgNjQgMjUuNiA2NCA2NFMyMzAuNCA1NzYgMTkyIDU3NkgxNjAgMTI4Qzg5LjYgNTc2IDY0IDU1MC40IDY0IDUxMnMyNS42LTY0IDY0LTY0aDMySDE5MnoiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGQ9Ik0yNDMuMiA2OTEuMmMyNS42LTI1LjYgNjQtMjUuNiA4OS42IDAgMjUuNiAyNS42IDI1LjYgNjQgMCA4OS42bC0yNS42IDI1LjZMMjgxLjYgODMyYy0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBzLTI1LjYtNjQgMC04OS42bDI1LjYtMjUuNkwyNDMuMiA2OTEuMnoiIG9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTQ0OCA4MzJjMC0zOC40IDI1LjYtNjQgNjQtNjRzNjQgMjUuNiA2NCA2NHYzMlY4OTZjMCAzOC40LTI1LjYgNjQtNjQgNjRzLTY0LTI1LjYtNjQtNjR2LTMyVjgzMnoiIG9wYWNpdHk9Ii40NSIvPjxwYXRoIGQ9Ik04MjUuNiA4MjUuNmMtMjUuNiAyNS42LTY0IDI1LjYtODkuNiAwbC0yNS42LTI1LjYgMCAwLTI1LjYtMjUuNmMtMjUuNi0yNS42LTI1LjYtNjQgMC04OS42czY0LTI1LjYgODkuNiAwbDI1LjYgMjUuNiAyNS42IDI1LjYgMCAwQzg1MS4yIDc2MS42IDg1MS4yIDgwNi40IDgyNS42IDgyNS42eiIgb3BhY2l0eT0iLjYiLz48cGF0aCBkPSJNODk2IDQ0OGwtMzIgMTI4SDgzMmMtMzguNCAwLTY0LTI1LjYtNjQtNjRzMjUuNi02NCA2NC02NEg4OTZ6TTk2MCA1MTJjMCAzOC40LTI1LjYgNjQtNjQgNjRoLTMyTDg5NiA0NDhDOTM0LjQgNDQ4IDk2MCA0NzMuNiA5NjAgNTEyeiIgb3BhYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Ik03NDIuNCAxOTJjMjUuNi0xOS4yIDY0LTE5LjIgODMuMiA2LjQgMjUuNiAyNS42IDI1LjYgNjQgMCA4OS42bC0yNS42IDI1LjYtMjUuNiAyNS42Yy0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBzLTI1LjYtNjQgMC04OS42IiBvcGFjaXR5PSIuOSIvPjxwYXRoIGQ9Ik00NDggMTYwTDU3NiAxOTJjMCAzOC40LTI1LjYgNjQtNjQgNjRTNDQ4IDIzMC40IDQ0OCAxOTJWMTYwek01MTIgNjRjMzguNCAwIDY0IDI1LjYgNjQgNjR2MzJINDQ4VjEyOEM0NDggODkuNiA0NzMuNiA2NCA1MTIgNjR6TTQ0OCAxNjBoMTI4VjE5Mkg0NDhWMTYwem0iLz48L2c+PC9zdmc+";let u=class extends m{constructor(){super(...arguments),this.status="unknown",this.type="",this.statusMap={},this.locale="zh-CN",this.tip="",this.tippyOptions={},this._mergedStatusMap=At,this._tippyInstance=null}connectedCallback(){if(super.connectedCallback(),!this.hasAttribute("locale")){const s=ye();s&&(this.locale=s)}}willUpdate(s){s.has("locale")&&wt.setLocale(this.locale),s.has("statusMap")&&(this._mergedStatusMap=this._computeMergedStatusMap())}updated(s){(s.has("tip")||s.has("tippyOptions"))&&this._setupTippy()}disconnectedCallback(){super.disconnectedCallback(),this._destroyTippy()}async _resolveTippy(){return typeof window<"u"&&"tippy"in window?window.tippy:u._tippyFn!==void 0?u._tippyFn:(u._tippyResolving||(u._tippyResolving=(async()=>{try{const s=await oe(()=>import("./tippy.esm-DmBrcu_n.js"),[]),t=s.default??s;return u._tippyFn=t,t}catch{return u._tippyFn=null,null}finally{u._tippyResolving=null}})()),u._tippyResolving)}async _setupTippy(){if(this._destroyTippy(),!this.tip){this.removeAttribute("title");return}const s=await this._resolveTippy();if(!s){this.title=this.tip;return}this.removeAttribute("title"),this._tippyInstance=s(this,{content:this.tip,...this.tippyOptions})}_destroyTippy(){this._tippyInstance&&(this._tippyInstance.destroy(),this._tippyInstance=null)}_computeMergedStatusMap(){return{...At,...this.statusMap}}_findMatchingStatusKey(s){const t=this._mergedStatusMap;if(t[s])return s;const e=s.toLowerCase();if(t[e])return e;const n=s.toUpperCase();return t[n]?n:"unknown"}_getCurrentStatus(){const s=this._findMatchingStatusKey(this.status),t=this._mergedStatusMap[s]||this._mergedStatusMap.unknown,e=`status.${t.text}`,n=wt.t(e),a=n===e?t.text:n;return{...t,text:a}}_renderIcon(s){return s==="loading"?f`<span class="bkbase-status-tag-loading"></span>`:f`<span class="bkbase-status-tag-dot"></span>`}render(){const s=this._getCurrentStatus(),{theme:t,text:e}=s,n={"bkbase-status-tag":!0,[`bkbase-status-tag--${t}`]:!0,[`bkbase-status-tag--type-${this.type}`]:!!this.type,"bkbase-status-tag--has-tip":!!this.tip};return f`
      <div class=${F(n)}>
        ${pe(this._renderIcon(t))}
        <span>${e}</span>
      </div>
    `}};u.styles=[Mt(ke.replace("var(--loading-icon)",`url('${xe}')`))];u._tippyFn=void 0;u._tippyResolving=null;_([M({type:String,reflect:!0})],u.prototype,"status",2);_([M({type:String,reflect:!0})],u.prototype,"type",2);_([M({type:Object,attribute:"status-map",converter:{fromAttribute:s=>{if(!s)return{};try{return JSON.parse(s)}catch(t){return console.warn("[StatusTag] 解析 status-map 失败:",t),{}}},toAttribute:s=>JSON.stringify(s)}})],u.prototype,"statusMap",2);_([M({type:String,reflect:!0})],u.prototype,"locale",2);_([M({type:String})],u.prototype,"tip",2);_([M({type:Object,attribute:"tippy-options",converter:{fromAttribute:s=>{if(!s)return{};try{return JSON.parse(s)}catch(t){return console.warn("[StatusTag] 解析 tippy-options 失败:",t),{}}},toAttribute:s=>JSON.stringify(s)}})],u.prototype,"tippyOptions",2);_([$()],u.prototype,"_mergedStatusMap",2);u=_([T("status-tag")],u);var we=Object.getOwnPropertyDescriptor,Ae=(s,t,e,n)=>{for(var a=n>1?void 0:n?we(t,e):t,i=s.length-1,o;i>=0;i--)(o=s[i])&&(a=o(a)||a);return a};let et=class extends m{render(){return f`
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
            <status-tag status="danger"></status-tag>
            <status-tag status="failed"></status-tag>
            <status-tag status="unknown"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="loading"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning"&gt;&lt;/status-tag&gt;
&lt;status-tag status="danger"&gt;&lt;/status-tag&gt;
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
                  <status-tag status="danger"></status-tag>
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
                  <status-tag status="danger" type="stroke"></status-tag>
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
                  <status-tag status="danger" type="filled"></status-tag>
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
                <status-tag status="danger" locale="zh-CN"></status-tag>
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
                <status-tag status="danger" locale="en-US"></status-tag>
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

      <!-- Tooltip 提示 -->
      <section class="section">
        <h2>💬 Tooltip 提示</h2>
        <div class="demo-card">
          <h3>基础提示（hover 查看效果）</h3>
          <div class="demo-preview">
            <status-tag status="running" tip="服务运行正常，已持续运行 72 小时"></status-tag>
            <status-tag status="danger" tip="检测到异常，错误码: E5001"></status-tag>
            <status-tag status="warning" tip="CPU 使用率超过 80%，请关注"></status-tag>
            <status-tag status="stop" tip="服务已于 2026-03-23 停止"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="running" tip="服务运行正常，已持续运行 72 小时"&gt;&lt;/status-tag&gt;
&lt;status-tag status="danger" tip="检测到异常，错误码: E5001"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning" tip="CPU 使用率超过 80%，请关注"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop" tip="服务已于 2026-03-23 停止"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
        <div class="demo-card">
          <h3>自定义 Tippy 配置</h3>
          <div class="demo-preview">
            <status-tag
              status="running"
              tip="展示在下方"
              tippy-options='{"placement": "bottom"}'
            ></status-tag>
            <status-tag
              status="danger"
              tip="展示在右侧"
              tippy-options='{"placement": "right"}'
            ></status-tag>
            <status-tag
              status="warning"
              tip="带箭头 + 延迟显示"
              tippy-options='{"arrow": true, "delay": [300, 0]}'
            ></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;!-- 底部展示 --&gt;
&lt;status-tag
  status="running"
  tip="展示在下方"
  tippy-options='{"placement": "bottom"}'
&gt;&lt;/status-tag&gt;

&lt;!-- 右侧展示 --&gt;
&lt;status-tag
  status="danger"
  tip="展示在右侧"
  tippy-options='{"placement": "right"}'
&gt;&lt;/status-tag&gt;

&lt;!-- 带箭头 + 延迟 --&gt;
&lt;status-tag
  status="warning"
  tip="带箭头 + 延迟显示"
  tippy-options='{"arrow": true, "delay": [300, 0]}'
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
    `}};et.styles=Y`
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
  `;et=Ae([T("demo-section")],et);var Se=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,E=(s,t,e,n)=>{for(var a=n>1?void 0:n?Ne(t,e):t,i=s.length-1,o;i>=0;i--)(o=s[i])&&(a=(n?o(t,e,a):o(a))||a);return n&&a&&Se(t,e,a),a};let k=class extends m{constructor(){super(...arguments),this.status="running",this.type="",this.locale="zh-CN",this.useCustomMap=!1,this.customMap='{"pending": {"text": "待处理", "theme": "warning"}}'}render(){return f`
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
              <select @change=${s=>this.status=s.target.value}>
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
              <select @change=${s=>this.type=s.target.value}>
                <option value="" selected>Default</option>
                <option value="stroke">Stroke</option>
                <option value="filled">Filled</option>
              </select>
            </label>
            <label>
              Locale:
              <select @change=${s=>this.locale=s.target.value}>
                <option value="zh-CN" selected>zh-CN</option>
                <option value="en-US">en-US</option>
              </select>
            </label>
          </div>
        </div>
      </section>
    `}};k.styles=Y`
    /* 样式省略，参考原 playground/styles.css */
  `;E([$()],k.prototype,"status",2);E([$()],k.prototype,"type",2);E([$()],k.prototype,"locale",2);E([$()],k.prototype,"useCustomMap",2);E([$()],k.prototype,"customMap",2);k=E([T("interactive-controller")],k);var Me=Object.getOwnPropertyDescriptor,Ce=(s,t,e,n)=>{for(var a=n>1?void 0:n?Me(t,e):t,i=s.length-1,o;i>=0;i--)(o=s[i])&&(a=o(a)||a);return a};let st=class extends m{render(){return f`
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
    `}};st.styles=Y`
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
  `;st=Ce([T("api-docs")],st);var Ie=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Lt=(s,t,e,n)=>{for(var a=n>1?void 0:n?je(t,e):t,i=s.length-1,o;i>=0;i--)(o=s[i])&&(a=(n?o(t,e,a):o(a))||a);return n&&a&&Ie(t,e,a),a};let G=class extends m{constructor(){super(...arguments),this.activeTab="vue3"}_renderVue3Code(){return f`
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
</pre>`}_renderVue2Code(){return f`
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
</pre>`}_renderReactCode(){return f`
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
</pre>`}render(){return f`
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
    `}};G.styles=Y`
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
  `;Lt([$()],G.prototype,"activeTab",2);G=Lt([T("framework-examples")],G);var Te=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Pt=(s,t,e,n)=>{for(var a=n>1?void 0:n?Ee(t,e):t,i=s.length-1,o;i>=0;i--)(o=s[i])&&(a=(n?o(t,e,a):o(a))||a);return n&&a&&Te(t,e,a),a};let J=class extends m{constructor(){super(...arguments),this.activeSection="demo"}_scrollToSection(s){var e;this.activeSection=s;const t=(e=this.shadowRoot)==null?void 0:e.getElementById(s);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}render(){return f`
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
    `}};J.styles=Y`
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
  `;Pt([$()],J.prototype,"activeSection",2);J=Pt([T("playground-app")],J);console.log("🎨 Status Tag Playground 已加载");
//# sourceMappingURL=index-DY-brcwQ.js.map
