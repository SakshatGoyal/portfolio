/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dotlottie/player-component/dist/chunk-HDDX7F4A.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@dotlottie/player-component/dist/chunk-HDDX7F4A.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ u),
/* harmony export */   b: () => (/* binding */ v)
/* harmony export */ });
var l=Object.create,a=Object.defineProperty,n=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,O=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),s=(r,e,t,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of f(e))!c.call(r,o)&&o!==t&&a(r,o,{get:()=>e[o],enumerable:!(p=n(e,o))||p.enumerable});return r},v=(r,e,t)=>(t=r!=null?l(O(r)):{},s(e||!r||!r.__esModule?a(t,"default",{value:r,enumerable:!0}):t,r));


//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-HDDX7F4A.mjs.map

/***/ }),

/***/ "./node_modules/@dotlottie/player-component/dist/chunk-ODPU3M3Z.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@dotlottie/player-component/dist/chunk-ODPU3M3Z.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Ut),
/* harmony export */   b: () => (/* binding */ w),
/* harmony export */   c: () => (/* binding */ Kt)
/* harmony export */ });
var N=window,R=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,M=Symbol(),tt=new WeakMap,S=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==M)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o,e=this.t;if(R&&t===void 0){let o=e!==void 0&&e.length===1;o&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&tt.set(e,t));}return t}toString(){return this.cssText}},et=r=>new S(typeof r=="string"?r:r+"",void 0,M),j=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new S(e,r,M)},L=(r,t)=>{R?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let o=document.createElement("style"),i=N.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,r.appendChild(o);});},O=R?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return et(e)})(r):r;var B,T=window,ot=T.trustedTypes,xt=ot?ot.emptyScript:"",it=T.reactiveElementPolyfillSupport,I={toAttribute(r,t){switch(t){case Boolean:r=r?xt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r);}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r);}catch{e=null;}}return e}},rt=(r,t)=>t!==r&&(t==t||r==r),D={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:rt},V="finalized",f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t);}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,o)=>{let i=this._$Ep(o,e);i!==void 0&&(this._$Ev.set(i,o),t.push(i));}),t}static createProperty(t,e=D){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i);}}static getPropertyDescriptor(t,e,o){return {get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,o);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||D}static finalize(){if(this.hasOwnProperty(V))return !1;this[V]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of o)this.createProperty(i,e[i]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let i of o)e.unshift(O(i));}else t!==void 0&&e.push(O(t));return e}static _$Ep(t,e){let o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this));}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t));}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e]);});}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return L(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return (o=e.hostConnected)===null||o===void 0?void 0:o.call(e)});}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return (o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)});}attributeChangedCallback(t,e,o){this._$AK(t,o);}_$EO(t,e,o=D){var i;let n=this.constructor._$Ep(t,o);if(n!==void 0&&o.reflect===!0){let s=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:I).toAttribute(e,o.type);this._$El=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null;}}_$AK(t,e){var o;let i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){let s=i.getPropertyOptions(n),h=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:I;this._$El=n,this[n]=h.fromAttribute(e,s.type),this._$El=null;}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(e){Promise.reject(e);}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return (n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(o)):this._$Ek();}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(o);}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return (i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};f[V]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},it==null||it({ReactiveElement:f}),((B=T.reactiveElementVersions)!==null&&B!==void 0?B:T.reactiveElementVersions=[]).push("1.6.3");var K,z=window,y=z.trustedTypes,st=y?y.createPolicy("lit-html",{createHTML:r=>r}):void 0,q="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,dt="?"+g,yt=`<${dt}>`,m=document,k=()=>m.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",ut=Array.isArray,_t=r=>ut(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,lt=/>/g,b=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),at=/'/g,ht=/"/g,vt=/^(?:script|style|textarea|title)$/i,ft=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Ut=ft(1),x=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ct=new WeakMap,$=m.createTreeWalker(m,129,null,!1);function gt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}var At=(r,t)=>{let e=r.length-1,o=[],i,n=t===2?"<svg>":"",s=E;for(let h=0;h<e;h++){let l=r[h],a,c,p=-1,u=0;for(;u<l.length&&(s.lastIndex=u,c=s.exec(l),c!==null);)u=s.lastIndex,s===E?c[1]==="!--"?s=nt:c[1]!==void 0?s=lt:c[2]!==void 0?(vt.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=b):c[3]!==void 0&&(s=b):s===b?c[0]===">"?(s=i!=null?i:E,p=-1):c[1]===void 0?p=-2:(p=s.lastIndex-c[2].length,a=c[1],s=c[3]===void 0?b:c[3]==='"'?ht:at):s===ht||s===at?s=b:s===nt||s===lt?s=E:(s=b,i=void 0);let v=s===b&&r[h+1].startsWith("/>")?" ":"";n+=s===E?l+yt:p>=0?(o.push(a),l.slice(0,p)+q+l.slice(p)+g+v):l+g+(p===-2?(o.push(void 0),h):v);}return [gt(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),o]},U=class r{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,s=0,h=t.length-1,l=this.parts,[a,c]=At(t,e);if(this.el=r.createElement(a,o),$.currentNode=this.el.content,e===2){let p=this.el.content,u=p.firstChild;u.remove(),p.append(...u.childNodes);}for(;(i=$.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes()){let p=[];for(let u of i.getAttributeNames())if(u.endsWith(q)||u.startsWith(g)){let v=c[s++];if(p.push(u),v!==void 0){let mt=i.getAttribute(v.toLowerCase()+q).split(g),H=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:H[2],strings:mt,ctor:H[1]==="."?F:H[1]==="?"?Z:H[1]==="@"?G:A});}else l.push({type:6,index:n});}for(let u of p)i.removeAttribute(u);}if(vt.test(i.tagName)){let p=i.textContent.split(g),u=p.length-1;if(u>0){i.textContent=y?y.emptyScript:"";for(let v=0;v<u;v++)i.append(p[v],k()),$.nextNode(),l.push({type:2,index:++n});i.append(p[u],k());}}}else if(i.nodeType===8)if(i.data===dt)l.push({type:2,index:n});else {let p=-1;for(;(p=i.data.indexOf(g,p+1))!==-1;)l.push({type:7,index:n}),p+=g.length-1;}n++;}}static createElement(t,e){let o=m.createElement("template");return o.innerHTML=t,o}};function _(r,t,e=r,o){var i,n,s,h;if(t===x)return t;let l=o!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[o]:e._$Cl,a=C(t)?void 0:t._$litDirective$;return (l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,o)),o!==void 0?((s=(h=e)._$Co)!==null&&s!==void 0?s:h._$Co=[])[o]=l:e._$Cl=l),l!==void 0&&(t=_(r,l._$AS(r,t.values),l,o)),t}var J=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:o},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(o,!0);$.currentNode=n;let s=$.nextNode(),h=0,l=0,a=i[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new P(s,s.nextSibling,this,t):a.type===1?c=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(c=new Q(s,this,t)),this._$AV.push(c),a=i[++l];}h!==(a==null?void 0:a.index)&&(s=$.nextNode(),h++);}return $.currentNode=m,n}v(t){let e=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++;}},P=class r{constructor(t,e,o,i){var n;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n;}get _$AU(){var t,e;return (e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_(this,t,e),C(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):_t(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(m.createTextNode(t)),this._$AH=t;}g(t){var e;let{values:o,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=U.createElement(gt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(o);else {let s=new J(n,this),h=s.u(this.options);s.v(o),this.$(h),this._$AH=s;}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new U(t)),e}T(t){ut(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,i=0;for(let n of t)i===e.length?e.push(o=new r(this.k(k()),this.k(k()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i);}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t));}},A=class{constructor(t,e,o,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=d;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){let n=this.strings,s=!1;if(n===void 0)t=_(this,t,e,0),s=!C(t)||t!==this._$AH&&t!==x,s&&(this._$AH=t);else {let h=t,l,a;for(t=n[0],l=0;l<n.length-1;l++)a=_(this,h[o+l],e,l),a===x&&(a=this._$AH[l]),s||(s=!C(a)||a!==this._$AH[l]),a===d?t=d:t!==d&&(t+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a;}s&&!i&&this.j(t);}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"");}},F=class extends A{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===d?void 0:t;}},wt=y?y.emptyScript:"",Z=class extends A{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==d?this.element.setAttribute(this.name,wt):this.element.removeAttribute(this.name);}},G=class extends A{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5;}_$AI(t,e=this){var o;if((t=(o=_(this,t,e,0))!==null&&o!==void 0?o:d)===x)return;let i=this._$AH,n=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==d&&(i===d||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t);}},Q=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o;}get _$AU(){return this._$AM._$AU}_$AI(t){_(this,t);}};var pt=z.litHtmlPolyfillSupport;pt==null||pt(U,P),((K=z.litHtmlVersions)!==null&&K!==void 0?K:z.litHtmlVersions=[]).push("2.8.0");var bt=(r,t,e)=>{var o,i;let n=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t,s=n._$litPart$;if(s===void 0){let h=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new P(t.insertBefore(k(),h),h,void 0,e!=null?e:{});}return s._$AI(r),s};var X,Y;var w=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;let o=super.createRenderRoot();return (t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=bt(e,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1);}render(){return x}};w.finalized=!0,w._$litElement$=!0,(X=globalThis.litElementHydrateSupport)===null||X===void 0||X.call(globalThis,{LitElement:w});var $t=globalThis.litElementPolyfillSupport;$t==null||$t({LitElement:w});((Y=globalThis.litElementVersions)!==null&&Y!==void 0?Y:globalThis.litElementVersions=[]).push("3.3.3");var Kt=j`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host * {
    box-sizing: border-box;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`;/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/


//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ODPU3M3Z.mjs.map

/***/ }),

/***/ "./node_modules/@dotlottie/player-component/dist/chunk-TRZ6EGBZ.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@dotlottie/player-component/dist/chunk-TRZ6EGBZ.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ g),
/* harmony export */   b: () => (/* binding */ et),
/* harmony export */   c: () => (/* binding */ k),
/* harmony export */   d: () => (/* binding */ rn),
/* harmony export */   e: () => (/* binding */ Zi),
/* harmony export */   f: () => (/* binding */ tn),
/* harmony export */   g: () => (/* binding */ en),
/* harmony export */   h: () => (/* binding */ q),
/* harmony export */   i: () => (/* binding */ nn),
/* harmony export */   j: () => (/* binding */ gn)
/* harmony export */ });
var ee={},Be=function(t,e,i,n,r){var o=new Worker(ee[e]||(ee[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return o.onmessage=function(a){var l=a.data,s=l.$e$;if(s){var u=new Error(s[0]);u.code=s[1],u.stack=s[2],r(u,null);}else r(null,l);},o.postMessage(i,n),o},F=Uint8Array,Z=Uint16Array,le=Int32Array,zt=new F([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Dt=new F([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ue=new F([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),he=function(t,e){for(var i=new Z(31),n=0;n<31;++n)i[n]=e+=1<<t[n-1];for(var r=new le(i[30]),n=1;n<30;++n)for(var o=i[n];o<i[n+1];++o)r[o]=o-i[n]<<5|n;return {b:i,r}},de=he(zt,2),Ut=de.b,Je=de.r;Ut[28]=258,Je[258]=28;var Re=he(Dt,0),ce=Re.b,gt=new Z(32768);for(b=0;b<32768;++b)K=(b&43690)>>1|(b&21845)<<1,K=(K&52428)>>2|(K&13107)<<2,K=(K&61680)>>4|(K&3855)<<4,gt[b]=((K&65280)>>8|(K&255)<<8)>>1;var K,b,rt=function(t,e,i){for(var n=t.length,r=0,o=new Z(e);r<n;++r)t[r]&&++o[t[r]-1];var a=new Z(e);for(r=1;r<e;++r)a[r]=a[r-1]+o[r-1]<<1;var l;if(i){l=new Z(1<<e);var s=15-e;for(r=0;r<n;++r)if(t[r])for(var u=r<<4|t[r],d=e-t[r],h=a[t[r]-1]++<<d,c=h|(1<<d)-1;h<=c;++h)l[gt[h]>>s]=u;}else for(l=new Z(n),r=0;r<n;++r)t[r]&&(l[r]=gt[a[t[r]-1]++]>>15-t[r]);return l},ht=new F(288);for(b=0;b<144;++b)ht[b]=8;var b;for(b=144;b<256;++b)ht[b]=9;var b;for(b=256;b<280;++b)ht[b]=7;var b;for(b=280;b<288;++b)ht[b]=8;var b,fe=new F(32);for(b=0;b<32;++b)fe[b]=5;var b,pe=rt(ht,9,1),me=rt(fe,5,1),vt=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},V=function(t,e,i){var n=e/8|0;return (t[n]|t[n+1]<<8)>>(e&7)&i},yt=function(t,e){var i=e/8|0;return (t[i]|t[i+1]<<8|t[i+2]<<16)>>(e&7)},_e=function(t){return (t+7)/8|0},bt=function(t,e,i){return (e==null||e<0)&&(e=0),(i==null||i>t.length)&&(i=t.length),new F(t.subarray(e,i))},ve=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],x=function(t,e,i){var n=new Error(e||ve[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,x),!i)throw n;return n},ye=function(t,e,i,n){var r=t.length,o=n?n.length:0;if(!r||e.f&&!e.l)return i||new F(0);var a=!i,l=a||e.i!=2,s=e.i;a&&(i=new F(r*3));var u=function(Yt){var Zt=i.length;if(Yt>Zt){var te=new F(Math.max(Zt*2,Yt));te.set(i),i=te;}},d=e.f||0,h=e.p||0,c=e.b||0,p=e.l,m=e.d,f=e.m,v=e.n,_=r*8;do{if(!p){d=V(t,h,1);var S=V(t,h+1,3);if(h+=3,S)if(S==1)p=pe,m=me,f=9,v=5;else if(S==2){var y=V(t,h,31)+257,A=V(t,h+10,15)+4,P=y+V(t,h+5,31)+1;h+=14;for(var N=new F(P),O=new F(19),I=0;I<A;++I)O[ue[I]]=V(t,h+I*3,7);h+=A*3;for(var T=vt(O),B=(1<<T)-1,C=rt(O,T,1),I=0;I<P;){var z=C[V(t,h,B)];h+=z&15;var j=z>>4;if(j<16)N[I++]=j;else {var U=0,E=0;for(j==16?(E=3+V(t,h,3),h+=2,U=N[I-1]):j==17?(E=3+V(t,h,7),h+=3):j==18&&(E=11+V(t,h,127),h+=7);E--;)N[I++]=U;}}var Q=N.subarray(0,y),X=N.subarray(y);f=vt(Q),v=vt(X),p=rt(Q,f,1),m=rt(X,v,1);}else x(1);else {var j=_e(h)+4,Lt=t[j-4]|t[j-3]<<8,Ot=j+Lt;if(Ot>r){s&&x(0);break}l&&u(c+Lt),i.set(t.subarray(j,Ot),c),e.b=c+=Lt,e.p=h=Ot*8,e.f=d;continue}if(h>_){s&&x(0);break}}l&&u(c+131072);for(var Ve=(1<<f)-1,$e=(1<<v)-1,Mt=h;;Mt=h){var U=p[yt(t,h)&Ve],nt=U>>4;if(h+=U&15,h>_){s&&x(0);break}if(U||x(2),nt<256)i[c++]=nt;else if(nt==256){Mt=h,p=null;break}else {var Kt=nt-254;if(nt>264){var I=nt-257,lt=zt[I];Kt=V(t,h,(1<<lt)-1)+Ut[I],h+=lt;}var At=m[yt(t,h)&$e],Pt=At>>4;At||x(3),h+=At&15;var X=ce[Pt];if(Pt>3){var lt=Dt[Pt];X+=yt(t,h)&(1<<lt)-1,h+=lt;}if(h>_){s&&x(0);break}l&&u(c+131072);var Qt=c+Kt;if(c<X){var Xt=o-X,qe=Math.min(X,Qt);for(Xt+c<0&&x(3);c<qe;++c)i[c]=n[Xt+c];}for(;c<Qt;++c)i[c]=i[c-X];}}e.l=p,e.p=Mt,e.b=c,e.f=d,p&&(d=1,e.m=f,e.d=m,e.n=v);}while(!d);return c!=i.length&&a?bt(i,0,c):i.subarray(0,c)},He=new F(0),We=function(t,e){var i={};for(var n in t)i[n]=t[n];for(var n in e)i[n]=e[n];return i},ie=function(t,e,i){for(var n=t(),r=t.toString(),o=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var l=n[a],s=o[a];if(typeof l=="function"){e+=";"+s+"=";var u=l.toString();if(l.prototype)if(u.indexOf("[native code]")!=-1){var d=u.indexOf(" ",8)+1;e+=u.slice(d,u.indexOf("(",d));}else {e+=u;for(var h in l.prototype)e+=";"+s+".prototype."+h+"="+l.prototype[h].toString();}else e+=u;}else i[s]=l;}return e},_t=[],Ge=function(t){var e=[];for(var i in t)t[i].buffer&&e.push((t[i]=new t[i].constructor(t[i])).buffer);return e},Ke=function(t,e,i,n){if(!_t[i]){for(var r="",o={},a=t.length-1,l=0;l<a;++l)r=ie(t[l],r,o);_t[i]={c:ie(t[a],r,o),e:o};}var s=We({},_t[i].e);return Be(_t[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",i,s,Ge(s),n)},Qe=function(){return [F,Z,le,zt,Dt,ue,Ut,ce,pe,me,gt,ve,rt,vt,V,yt,_e,bt,x,ye,Vt,ge,be]},ge=function(t){return postMessage(t,[t.buffer])},be=function(t){return t&&{out:t.size&&new F(t.size),dictionary:t.dictionary}},Xe=function(t,e,i,n,r,o){var a=Ke(i,n,r,function(l,s){a.terminate(),o(l,s);});return a.postMessage([t,e],e.consume?[t.buffer]:[]),function(){a.terminate();}},W=function(t,e){return t[e]|t[e+1]<<8},J=function(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},Ct=function(t,e){return J(t,e)+J(t,e+4)*4294967296};function Ye(t,e,i){return i||(i=e,e={}),typeof i!="function"&&x(7),Xe(t,e,[Qe],function(n){return ge(Vt(n.data[0],be(n.data[1])))},1,i)}function Vt(t,e){return ye(t,{i:2},e&&e.out,e&&e.dictionary)}var Tt=typeof TextDecoder<"u"&&new TextDecoder,Ze=0;try{Tt.decode(He,{stream:!0}),Ze=1;}catch{}var ti=function(t){for(var e="",i=0;;){var n=t[i++],r=(n>127)+(n>223)+(n>239);if(i+r>t.length)return {s:e,r:bt(t,i-1)};r?r==3?(n=((n&15)<<18|(t[i++]&63)<<12|(t[i++]&63)<<6|t[i++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|t[i++]&63):e+=String.fromCharCode((n&15)<<12|(t[i++]&63)<<6|t[i++]&63):e+=String.fromCharCode(n);}};function ot(t,e){if(e){for(var i="",n=0;n<t.length;n+=16384)i+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return i}else {if(Tt)return Tt.decode(t);var r=ti(t),o=r.s,i=r.r;return i.length&&x(8),o}}var ei=function(t,e){return e+30+W(t,e+26)+W(t,e+28)},ii=function(t,e,i){var n=W(t,e+28),r=ot(t.subarray(e+46,e+46+n),!(W(t,e+8)&2048)),o=e+46+n,a=J(t,e+20),l=i&&a==4294967295?ni(t,o):[a,J(t,e+24),J(t,e+42)],s=l[0],u=l[1],d=l[2];return [W(t,e+10),s,u,r,o+W(t,e+30)+W(t,e+32),d]},ni=function(t,e){for(;W(t,e)!=1;e+=4+W(t,e+2));return [Ct(t,e+12),Ct(t,e+4),Ct(t,e+20)]},ne=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(t){t();};function ri(t,e,i){i||(i=e,e={}),typeof i!="function"&&x(7);var n=[],r=function(){for(var v=0;v<n.length;++v)n[v]();},o={},a=function(v,_){ne(function(){i(v,_);});};ne(function(){a=i;});for(var l=t.length-22;J(t,l)!=101010256;--l)if(!l||t.length-l>65558)return a(x(13,0,1),null),r;var s=W(t,l+8);if(s){var u=s,d=J(t,l+16),h=d==4294967295||u==65535;if(h){var c=J(t,l-12);h=J(t,c)==101075792,h&&(u=s=J(t,c+32),d=J(t,c+48));}for(var p=e&&e.filter,m=function(v){var _=ii(t,d,h),S=_[0],y=_[1],A=_[2],P=_[3],N=_[4],O=_[5],I=ei(t,O);d=N;var T=function(C,z){C?(r(),a(C,null)):(z&&(o[P]=z),--s||a(null,o));};if(!p||p({name:P,size:y,originalSize:A,compression:S}))if(!S)T(null,bt(t,I,I+y));else if(S==8){var B=t.subarray(I,I+y);if(y<32e4)try{T(null,Vt(B,{out:new F(A)}));}catch(C){T(C,null);}else n.push(Ye(B,{size:A},T));}else T(x(14,"unknown compression type "+S,1),null);else T(null,null);},f=0;f<u;++f)m(f);}else a(null,{});return r}function oi(t){return (Array.isArray(t)?t:t.issues).reduce((e,i)=>{if(i.path){let n=i.path.map(({key:r})=>r).join(".");e.nested[n]=[...e.nested[n]||[],i.message];}else e.root=[...e.root||[],i.message];return e},{nested:{}})}var ai=class extends Error{issues;constructor(t){super(t[0].message),this.name="ValiError",this.issues=t;}};function si(t,e){return {reason:t==null?void 0:t.reason,validation:e.validation,origin:(t==null?void 0:t.origin)||"value",message:e.message,input:e.input,abortEarly:t==null?void 0:t.abortEarly,abortPipeEarly:t==null?void 0:t.abortPipeEarly}}function li(t,e){return {reason:e,origin:t==null?void 0:t.origin,abortEarly:t==null?void 0:t.abortEarly,abortPipeEarly:t==null?void 0:t.abortPipeEarly}}function Y(t,e,i,n){if(!e||!e.length)return {output:t};let r,o,a=t;for(let l of e){let s=l(a);if(s.issue){r=r||li(i,n);let u=si(r,s.issue);if(o?o.push(u):o=[u],r.abortEarly||r.abortPipeEarly)break}else a=s.output;}return o?{issues:o}:{output:a}}function H(t,e){return !t||typeof t=="string"?[t,e]:[void 0,t]}function G(t,e,i,n,r,o){return {issues:[{reason:e,validation:i,origin:(t==null?void 0:t.origin)||"value",message:n,input:r,issues:o,abortEarly:t==null?void 0:t.abortEarly,abortPipeEarly:t==null?void 0:t.abortPipeEarly}]}}function ui(t=[]){return {schema:"any",async:!1,_parse(e,i){return Y(e,t,i,"any")}}}function ut(t,e,i){let[n,r]=H(e,i);return {schema:"array",array:{item:t},async:!1,_parse(o,a){if(!Array.isArray(o))return G(a,"type","array",n||"Invalid type",o);let l,s=[];for(let u=0;u<o.length;u++){let d=o[u],h=t._parse(d,a);if(h.issues){let c={schema:"array",input:o,key:u,value:d};for(let p of h.issues)p.path?p.path.unshift(c):p.path=[c],l==null||l.push(p);if(l||(l=h.issues),a!=null&&a.abortEarly)break}else s.push(h.output);}return l?{issues:l}:Y(s,r,a,"array")}}}function Et(t,e){let[i,n]=H(t,e);return {schema:"boolean",async:!1,_parse(r,o){return typeof r!="boolean"?G(o,"type","boolean",i||"Invalid type",r):Y(r,n,o,"boolean")}}}function re(t,e){return {schema:"literal",literal:t,async:!1,_parse(i,n){return i!==t?G(n,"type","literal",e||"Invalid type",i):{output:i}}}}function hi(t,e){return {schema:"native_enum",nativeEnum:t,async:!1,_parse(i,n){return Object.values(t).includes(i)?{output:i}:G(n,"type","native_enum",e||"Invalid type",i)}}}function R(t,e){let[i,n]=H(t,e);return {schema:"number",async:!1,_parse(r,o){return typeof r!="number"?G(o,"type","number",i||"Invalid type",r):Y(r,n,o,"number")}}}function $(t,e,i){let[n,r]=H(e,i),o;return {schema:"object",object:t,async:!1,_parse(a,l){if(!a||typeof a!="object")return G(l,"type","object",n||"Invalid type",a);o=o||Object.entries(t);let s,u={};for(let[d,h]of o){let c=a[d],p=h._parse(c,l);if(p.issues){let m={schema:"object",input:a,key:d,value:c};for(let f of p.issues)f.path?f.path.unshift(m):f.path=[m],s==null||s.push(f);if(s||(s=p.issues),l!=null&&l.abortEarly)break}else u[d]=p.output;}return s?{issues:s}:Y(u,r,l,"object")}}}function w(t){return {schema:"optional",wrapped:t,async:!1,_parse(e,i){return e===void 0?{output:e}:t._parse(e,i)}}}function M(t,e){let[i,n]=H(t,e);return {schema:"string",async:!1,_parse(r,o){return typeof r!="string"?G(o,"type","string",i||"Invalid type",r):Y(r,n,o,"string")}}}function di(t,e,i,n){if(typeof e=="object"&&!Array.isArray(e)){let[a,l]=H(i,n);return [t,e,a,l]}let[r,o]=H(e,i);return [M(),t,r,o]}var ci=["__proto__","prototype","constructor"];function fi(t,e,i,n){let[r,o,a,l]=di(t,e,i,n);return {schema:"record",record:{key:r,value:o},async:!1,_parse(s,u){if(!s||typeof s!="object")return G(u,"type","record",a||"Invalid type",s);let d,h={};for(let[c,p]of Object.entries(s))if(!ci.includes(c)){let m,f=r._parse(c,{origin:"key",abortEarly:u==null?void 0:u.abortEarly,abortPipeEarly:u==null?void 0:u.abortPipeEarly});if(f.issues){m={schema:"record",input:s,key:c,value:p};for(let _ of f.issues)_.path=[m],d==null||d.push(_);if(d||(d=f.issues),u!=null&&u.abortEarly)break}let v=o._parse(p,u);if(v.issues){m=m||{schema:"record",input:s,key:c,value:p};for(let _ of v.issues)_.path?_.path.unshift(m):_.path=[m],d==null||d.push(_);if(d||(d=v.issues),u!=null&&u.abortEarly)break}!f.issues&&!v.issues&&(h[f.output]=v.output);}return d?{issues:d}:Y(h,l,u,"record")}}}function pi(t,e,i){if(typeof t=="object"&&!Array.isArray(t)){let[o,a]=H(e,i);return [t,o,a]}let[n,r]=H(t,e);return [void 0,n,r]}function oe(t,e,i,n){let[r,o,a]=pi(e,i,n);return {schema:"tuple",tuple:{items:t,rest:r},async:!1,_parse(l,s){if(!Array.isArray(l)||!r&&t.length!==l.length||r&&t.length>l.length)return G(s,"type","tuple",o||"Invalid type",l);let u,d=[];for(let h=0;h<t.length;h++){let c=l[h],p=t[h]._parse(c,s);if(p.issues){let m={schema:"tuple",input:l,key:h,value:c};for(let f of p.issues)f.path?f.path.unshift(m):f.path=[m],u==null||u.push(f);if(u||(u=p.issues),s!=null&&s.abortEarly)break}else d[h]=p.output;}if(r)for(let h=t.length;h<l.length;h++){let c=l[h],p=r._parse(c,s);if(p.issues){let m={schema:"tuple",input:l,key:h,value:c};for(let f of p.issues)f.path?f.path.unshift(m):f.path=[m],u==null||u.push(f);if(u||(u=p.issues),s!=null&&s.abortEarly)break}else d[h]=p.output;}return u?{issues:u}:Y(d,a,s,"tuple")}}}function jt(t,e){return {schema:"union",union:t,async:!1,_parse(i,n){let r,o;for(let a of t){let l=a._parse(i,n);if(l.issues)if(r)for(let s of l.issues)r.push(s);else r=l.issues;else {o=[l.output];break}}return o?{output:o[0]}:G(n,"type","union",e||"Invalid type",i,r)}}}function dt(t,e,i){let[n,r]=H(e,i);return $(t.reduce((o,a)=>({...o,...a.object}),{}),n,r)}function mi(t,e,i,n){let[r,o]=H(i,n);return $(Object.entries(t.object).reduce((a,[l,s])=>e.includes(l)?a:{...a,[l]:s},{}),r,o)}function _i(t,e,i){let n=t._parse(e,i);return n.issues?{success:!1,error:new ai(n.issues),issues:n.issues}:{success:!0,data:n.output,output:n.output}}function xt(t,e){return i=>i>t?{issue:{validation:"max_value",message:e||"Invalid value",input:i}}:{output:i}}function Ft(t,e){return i=>i<t?{issue:{validation:"min_value",message:e||"Invalid value",input:i}}:{output:i}}var vi=Object.create,$t=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,we=Object.getOwnPropertyNames,gi=Object.getPrototypeOf,bi=Object.prototype.hasOwnProperty,wi=(t,e,i)=>e in t?$t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ct=(t,e)=>function(){return e||(0, t[we(t)[0]])((e={exports:{}}).exports,e),e.exports},Si=(t,e,i,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of we(e))!bi.call(t,r)&&r!==i&&$t(t,r,{get:()=>e[r],enumerable:!(n=yi(e,r))||n.enumerable});return t},Ii=(t,e,i)=>(i=t!=null?vi(gi(t)):{},Si(e||!t||!t.__esModule?$t(i,"default",{value:t,enumerable:!0}):i,t)),ki=(t,e,i)=>(wi(t,typeof e!="symbol"?e+"":e,i),i),Li=ct({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0;var e=(i,n,r=0,o=0,a=i.width-r,l=i.height-o,s=0,u=0)=>{if(r=r|0,o=o|0,a=a|0,l=l|0,s=s|0,u=u|0,a<=0||l<=0)return;let d=new Uint32Array(i.data.buffer),h=new Uint32Array(n.data.buffer);for(let c=0;c<l;c++){let p=o+c;if(p<0||p>=i.height)continue;let m=u+c;if(!(m<0||m>=n.height))for(let f=0;f<a;f++){let v=r+f;if(v<0||v>=i.width)continue;let _=s+f;if(_<0||_>=n.width)continue;let S=p*i.width+v,y=m*n.width+_;h[y]=d[S];}}};t.copy=e;}}),Oi=ct({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateImageFactory=(e=[0,0,0,0],i=4)=>{if(i=Math.floor(i),isNaN(i)||i<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in e)||e.length<i)throw TypeError(`fill should be iterable with at least ${i} members`);e=new Uint8ClampedArray(e).slice(0,i);let n=e.every(r=>r===0);return (r,o,a)=>{if(r===void 0||o===void 0)throw TypeError("Not enough arguments");if(r=Math.floor(r),o=Math.floor(o),isNaN(r)||r<1||isNaN(o)||o<1)throw TypeError("Index or size is negative or greater than the allowed amount");let l=r*o*i;if(a===void 0&&(a=new Uint8ClampedArray(l)),a instanceof Uint8ClampedArray){if(a.length!==l)throw TypeError("Index or size is negative or greater than the allowed amount");if(!n)for(let s=0;s<o;s++)for(let u=0;u<r;u++){let d=(s*r+u)*i;for(let h=0;h<i;h++)a[d+h]=e[h];}return {get width(){return r},get height(){return o},get data(){return a}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},t.createImage=t.CreateImageFactory();}}),Mi=ct({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0;var e=14,i=(o,a)=>{if(o<=-a||o>=a||o==0)return 0;let l=o*Math.PI;return Math.sin(l)/l*Math.sin(l/a)/(l/a)},n=o=>Math.round(o*((1<<e)-1)),r=(o,a,l,s,u)=>{let d=u?2:3,h=1/l,c=Math.min(1,l),p=d/c,m=Math.floor((p+1)*2),f=new Int16Array((m+2)*a),v=0;for(let _=0;_<a;_++){let S=(_+.5)*h+s,y=Math.max(0,Math.floor(S-p)),A=Math.min(o-1,Math.ceil(S+p)),P=A-y+1,N=new Float32Array(P),O=new Int16Array(P),I=0,T=0;for(let E=y;E<=A;E++){let Q=i((E+.5-S)*c,d);I+=Q,N[T]=Q,T++;}let B=0;for(let E=0;E<N.length;E++){let Q=N[E]/I;B+=Q,O[E]=n(Q);}O[a>>1]+=n(1-B);let C=0;for(;C<O.length&&O[C]===0;)C++;let z=O.length-1;for(;z>0&&O[z]===0;)z--;let j=y+C,U=z-C+1;f[v++]=j,f[v++]=U,f.set(O.subarray(C,z+1),v),v+=U;}return f};t.filters=r;}}),Ai=ct({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.convolve=void 0;var e=14,i=(n,r,o,a,l,s)=>{let u=0,d=0;for(let h=0;h<a;h++){let c=0;for(let p=0;p<l;p++){let m=s[c++],f=u+m*4|0,v=0,_=0,S=0,y=0;for(let A=s[c++];A>0;A--){let P=s[c++];v=v+P*n[f]|0,_=_+P*n[f+1]|0,S=S+P*n[f+2]|0,y=y+P*n[f+3]|0,f=f+4|0;}r[d]=v+8192>>e,r[d+1]=_+8192>>e,r[d+2]=S+8192>>e,r[d+3]=y+8192>>e,d=d+a*4|0;}d=(h+1)*4|0,u=(h+1)*o*4|0;}};t.convolve=i;}}),Pi=ct({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.lanczos2=t.lanczos=void 0;var e=Li(),i=Oi(),n=Mi(),r=Ai(),o=(s,u,d=!1)=>{let h=u.width/s.width,c=u.height/s.height,p=n.filters(s.width,u.width,h,0,d),m=n.filters(s.height,u.height,c,0,d),f=new Uint8ClampedArray(u.width*s.height*4);r.convolve(s.data,f,s.width,s.height,u.width,p),r.convolve(f,u.data,s.height,u.width,u.height,m);},a=(s,u,d=0,h=0,c=s.width-d,p=s.height-h,m=0,f=0,v=u.width-m,_=u.height-f)=>{if(d=d|0,h=h|0,c=c|0,p=p|0,m=m|0,f=f|0,v=v|0,_=_|0,c<=0||p<=0||v<=0||_<=0)return;if(d===0&&h===0&&c===s.width&&p===s.height&&m===0&&f===0&&v===u.width&&_===u.height){o(s,u);return}let S=i.createImage(c,p),y=i.createImage(v,_);e.copy(s,S,d,h),o(S,y),e.copy(y,u,0,0,y.width,y.height,m,f);};t.lanczos=a;var l=(s,u,d=0,h=0,c=s.width-d,p=s.height-h,m=0,f=0,v=u.width-m,_=u.height-f)=>{if(d=d|0,h=h|0,c=c|0,p=p|0,m=m|0,f=f|0,v=v|0,_=_|0,c<=0||p<=0||v<=0||_<=0)return;if(d===0&&h===0&&c===s.width&&p===s.height&&m===0&&f===0&&v===u.width&&_===u.height){o(s,u,!0);return}let S=i.createImage(c,p),y=i.createImage(v,_);e.copy(s,S,d,h),o(S,y,!0),e.copy(y,u,0,0,y.width,y.height,m,f);};t.lanczos2=l;}}),Se=(t=>(t.Bounce="bounce",t.Normal="normal",t))(Se||{}),Ci=hi(Se),Ie=$({autoplay:w(Et()),defaultTheme:w(M()),direction:w(jt([re(1),re(-1)])),hover:w(Et()),id:M(),intermission:w(R()),loop:w(jt([Et(),R()])),playMode:w(Ci),speed:w(R()),themeColor:w(M())}),Ei=$({animations:ut(M()),id:M()}),Ti=$({activeAnimationId:w(M()),animations:ut(Ie),author:w(M()),custom:w(fi(M(),ui())),description:w(M()),generator:w(M()),keywords:w(M()),revision:w(R()),themes:w(ut(Ei)),states:w(ut(M())),version:w(M())}),qt=mi(Ie,["id"]),tt=$({state:M()}),ji=tt,xi=dt([tt,$({ms:R()})]),Fi=dt([tt,$({count:R()})]),Ni=tt,zi=tt,Di=tt,Ui=dt([tt,$({threshold:w(ut(R([Ft(0),xt(1)])))})]),Vi=$({onAfter:w(xi),onClick:w(ji),onComplete:w(Di),onEnter:w(Fi),onMouseEnter:w(Ni),onMouseLeave:w(zi),onShow:w(Ui)}),$i=dt([qt,$({playOnScroll:w(oe([R([Ft(0),xt(1)]),R([Ft(0),xt(1)])])),segments:w(jt([oe([R(),R()]),M()]))})]);dt([Vi,$({animationId:w(M()),playbackSettings:$i})]);var qi={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},ae={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},Bi=t=>{let e=null,i=[];if(!t)return null;let n=t.substring(t.indexOf(",")+1);typeof window>"u"?e=Buffer.from(n,"base64").toString("binary"):e=atob(n);let r=new Uint8Array(e.length);for(let o=0;o<e.length;o+=1)r[o]=e.charCodeAt(o);i=Array.from(r.subarray(0,8));for(let o in ae){let a=ae[o];if(a&&i.every((l,s)=>l===a[s]))return qi[o]}return null},Bt=class extends Error{constructor(t,e){super(t),ki(this,"code"),this.name="[dotlottie-js]",this.code=e;}};function ke(t){let e;if(typeof window>"u")e=Buffer.from(t).toString("base64");else {let i=Array.prototype.map.call(t,n=>String.fromCharCode(n)).join("");e=window.btoa(i);}return `data:${Bi(e)};base64,${e}`}function se(t){return "w"in t&&"h"in t&&!("xt"in t)&&"p"in t}function Nt(t){return !("h"in t)&&!("w"in t)&&"p"in t&&"e"in t&&"u"in t&&"id"in t}async function ft(t,e=()=>!0){if(!(t instanceof Uint8Array))throw new Bt("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,n)=>{ri(t,{filter:e},(r,o)=>{r&&n(r),i(o);});})}async function Jt(t,e,i){if(!(t instanceof Uint8Array))throw new Bt("DotLottie not found","INVALID_DOTLOTTIE");return (await ft(t,n=>n.name===e&&(!i||i(n))))[e]}async function wt(t){let e="manifest.json",i=(await ft(t,n=>n.name===e))[e];if(!(typeof i>"u"))return JSON.parse(ot(i,!1))}async function Ji(t){if(!(t instanceof Uint8Array))return {success:!1,error:"DotLottie not found"};let e=await wt(t);if(typeof e>"u")return {success:!1,error:"Invalid .lottie file, manifest.json is missing"};let i=_i(Ti,e);return i.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(oi(i.error).nested,null,2)}`}}async function Rt(t){let e=new Uint8Array(t),i=await Ji(e);if(i.error)throw new Bt(i.error,"INVALID_DOTLOTTIE");return e}async function Ri(t,e){let i=await ft(t,r=>{let o=r.name.replace("audio/","");return r.name.startsWith("audio/")&&(!e||e({...r,name:o}))}),n={};for(let r in i){let o=i[r];if(o instanceof Uint8Array){let a=r.replace("audio/","");n[a]=ke(o);}}return n}async function Hi(t,e){var i;let n=new Map;for(let[o,a]of Object.entries(e))for(let l of a.assets||[])if(Nt(l)){let s=l.p;n.has(s)||n.set(s,new Set),(i=n.get(s))==null||i.add(o);}let r=await Ri(t,o=>n.has(o.name));for(let[o,a]of n){let l=r[o];if(l)for(let s of a){let u=e[s];for(let d of (u==null?void 0:u.assets)||[])Nt(d)&&d.p===o&&(d.p=l,d.u="",d.e=1);}}}async function Wi(t,e){let i=await ft(t,r=>{let o=r.name.replace("images/","");return r.name.startsWith("images/")&&(!e||e({...r,name:o}))}),n={};for(let r in i){let o=i[r];if(o instanceof Uint8Array){let a=r.replace("images/","");n[a]=ke(o);}}return n}async function Gi(t,e){var i;let n=new Map;for(let[o,a]of Object.entries(e))for(let l of a.assets||[])if(se(l)){let s=l.p;n.has(s)||n.set(s,new Set),(i=n.get(s))==null||i.add(o);}let r=await Wi(t,o=>n.has(o.name));for(let[o,a]of n){let l=r[o];if(l)for(let s of a){let u=e[s];for(let d of (u==null?void 0:u.assets)||[])se(d)&&d.p===o&&(d.p=l,d.u="",d.e=1);}}}async function Le(t,e,{inlineAssets:i}={},n){let r=`animations/${e}.json`,o=await Jt(t,r,n);if(typeof o>"u")return;let a=JSON.parse(ot(o,!1));if(!i)return a;let l={[e]:a};return await Gi(t,l),await Hi(t,l),a}async function Oe(t,e,i){let n=`themes/${e}.json`,r=await Jt(t,n,i);if(!(typeof r>"u"))return JSON.parse(ot(r,!1))}async function Me(t,e){let i={},n=await ft(t,r=>{let o=r.name.replace("states/","").replace(".json","");return r.name.startsWith("states/")&&(!e||e({...r,name:o}))});for(let r in n){let o=n[r];if(o instanceof Uint8Array){let a=r.replace("states/","").replace(".json","");i[a]=ot(o,!1);}}return i}async function Ae(t,e,i){let n=`states/${e}.json`,r=await Jt(t,n,i);return typeof r>"u"?void 0:JSON.parse(ot(r,!1))}Ii(Pi());function g(t,e="dotLottie-common"){return new Error(`[${e}]: ${t}`)}function et(t,e="dotLottie-common",...i){console.error(`[${e}]:`,t,...i);}function k(t,e="dotLottie-common",...i){console.warn(`[${e}]:`,t,...i);}function Pe(t=""){let e=t.trim(),i=e.lastIndexOf("/"),n=e.substring(i+1),r=n.indexOf(".");return r!==-1?n.substring(0,r):n}function at(t){return ["v","ip","op","layers","fr","w","h"].every(e=>Object.prototype.hasOwnProperty.call(t,e))}function Ce(t){let e=t.assets;return e?e.some(i=>Nt(i)):!1}function Ee(t){try{let e=JSON.parse(t);return at(e)}catch{return !1}}function rn(t,e){let i=Object.keys(t).find(n=>t[n]===e);if(i===void 0)throw new Error("Value not found in the object.");return i}function St(t){return JSON.parse(JSON.stringify(t))}var Te=class{_dotLottie;_animationsMap=new Map;_themeMap=new Map;_stateMachinesMap=new Map;_manifest;get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(t){let e=await fetch(t,{method:"GET",mode:"cors"});if(!e.ok)throw new Error(`Failed to load dotLottie from ${t} with status ${e.status}`);let i=e.headers.get("content-type");if(i!=null&&i.includes("application/json")){let n=await e.json();if(!at(n))throw new Error(`Invalid lottie JSON at ${t}`);let r=Pe(t);this._animationsMap.set(r,n);let o={activeAnimationId:r,animations:[{id:r}]};this._manifest=o;}else {this._dotLottie=await Rt(await e.arrayBuffer());let n=await wt(this._dotLottie);if(!n)throw new Error("Manifest not found");this._manifest=n;}}loadFromLottieJSON(t){if(!at(t))throw new Error("Invalid lottie JSON");let e="my-animation";this._animationsMap.set(e,t);let i={activeAnimationId:e,animations:[{id:e}]};this._manifest=i;}async loadFromArrayBuffer(t){this._dotLottie=await Rt(t);let e=await wt(this._dotLottie);if(!e)throw new Error("Manifest not found");this._manifest=e;}async getAnimation(t){if(this._animationsMap.get(t))return this._animationsMap.get(t);if(!this._dotLottie)return;let e=await Le(this._dotLottie,t,{inlineAssets:!0});return e&&this._animationsMap.set(t,e),e}async getTheme(t){if(this._themeMap.get(t))return this._themeMap.get(t);if(!this._dotLottie)return;let e=await Oe(this._dotLottie,t);return e&&this._themeMap.set(t,e),e}async getStateMachines(){if(!this._dotLottie)return;let t=await Me(this._dotLottie);for(let e in t)if(e){let i=t[e];if(i){let n=JSON.parse(i);if(n){let r=n.descriptor.id;this._stateMachinesMap.get(r)||this._stateMachinesMap.set(r,n);}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(t){if(this._stateMachinesMap.get(t))return this._stateMachinesMap.get(t);if(!this._dotLottie)return;let e=await Ae(this._dotLottie,t);return e&&this._stateMachinesMap.set(e.descriptor.id,e),e}};function kt(){throw new Error("Cycle detected")}function Wt(){if(st>1)st--;else {for(var t,e=!1;pt!==void 0;){var i=pt;for(pt=void 0,Ht++;i!==void 0;){var n=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&xe(i))try{i.c();}catch(r){e||(t=r,e=!0);}i=n;}}if(Ht=0,st--,e)throw t}}var L=void 0,pt=void 0,st=0,Ht=0,It=0;function je(t){if(L!==void 0){var e=t.n;if(e===void 0||e.t!==L)return e={i:0,S:t,p:L.s,n:void 0,t:L,e:void 0,x:void 0,r:e},L.s!==void 0&&(L.s.n=e),L.s=e,t.n=e,32&L.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=L.s,e.n=void 0,L.s.n=e,L.s=e),e}}function D(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0;}D.prototype.h=function(){return !0};D.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t);};D.prototype.U=function(t){if(this.t!==void 0){var e=t.e,i=t.x;e!==void 0&&(e.x=i,t.e=void 0),i!==void 0&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i);}};D.prototype.subscribe=function(t){var e=this;return Xi(function(){var i=e.value,n=32&this.f;this.f&=-33;try{t(i);}finally{this.f|=n;}})};D.prototype.valueOf=function(){return this.value};D.prototype.toString=function(){return this.value+""};D.prototype.toJSON=function(){return this.value};D.prototype.peek=function(){return this.v};Object.defineProperty(D.prototype,"value",{get:function(){var t=je(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(L instanceof it&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){Ht>100&&kt(),this.v=t,this.i++,It++,st++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N();}finally{Wt();}}}});function Ki(t){return new D(t)}function xe(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return !0;return !1}function Fe(t){for(var e=t.s;e!==void 0;e=e.n){var i=e.S.n;if(i!==void 0&&(e.r=i),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Ne(t){for(var e=t.s,i=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):i=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n;}t.s=i;}function it(t){D.call(this,void 0),this.x=t,this.s=void 0,this.g=It-1,this.f=4;}(it.prototype=new D).h=function(){if(this.f&=-3,1&this.f)return !1;if((36&this.f)==32||(this.f&=-5,this.g===It))return !0;if(this.g=It,this.f|=1,this.i>0&&!xe(this))return this.f&=-2,!0;var t=L;try{Fe(this),L=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++);}catch(i){this.v=i,this.f|=16,this.i++;}return L=t,Ne(this),this.f&=-2,!0};it.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e);}D.prototype.S.call(this,t);};it.prototype.U=function(t){if(this.t!==void 0&&(D.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e);}};it.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N();}};it.prototype.peek=function(){if(this.h()||kt(),16&this.f)throw this.v;return this.v};Object.defineProperty(it.prototype,"value",{get:function(){1&this.f&&kt();var t=je(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function ze(t){var e=t.u;if(t.u=void 0,typeof e=="function"){st++;var i=L;L=void 0;try{e();}catch(n){throw t.f&=-2,t.f|=8,Gt(t),n}finally{L=i,Wt();}}}function Gt(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,ze(t);}function Qi(t){if(L!==this)throw new Error("Out-of-order effect");Ne(this),L=t,this.f&=-2,8&this.f&&Gt(this),Wt();}function mt(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32;}mt.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e);}finally{t();}};mt.prototype.S=function(){1&this.f&&kt(),this.f|=1,this.f&=-9,ze(this),Fe(this),st++;var t=L;return L=this,Qi.bind(this,t)};mt.prototype.N=function(){2&this.f||(this.f|=2,this.o=pt,pt=this);};mt.prototype.d=function(){this.f|=8,1&this.f||Gt(this);};function Xi(t){var e=new mt(t);try{e.c();}catch(i){throw e.d(),i}return e.d.bind(e)}var De=class{_state;_prevState;constructor(t){this._prevState=t,this._state=Ki(t);}setState(t){this._prevState=this._state.value,this._state.value=t;}subscribe(t){return this._state.subscribe(e=>t(e,this._prevState))}};async function Ue(t,e){let[{DotLottieStateMachineManager:i}]=await Promise.all([__webpack_require__.e(/*! import() */ "vendors-node_modules_dotlottie_player-component_dist_dotlottie-state-machine-manager-2E7RUGJG-fa0198").then(__webpack_require__.bind(__webpack_require__, /*! ./dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR.mjs */ "./node_modules/@dotlottie/player-component/dist/dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR.mjs"))]);if(!t.length)throw g("No state machines available inside this .lottie!");return new i(t,e)}var Yi={name:"@dotlottie/common",version:"0.7.11",type:"module",description:"",author:"Afsal <afsal@lottiefiles.com>, Sam Osborne <sam@lottiefiles.com>",license:"MIT",engines:{node:">18.0.0"},module:"dist/index.js",main:"dist/index.js",types:"dist/index.d.ts",files:["dist"],keywords:[],scripts:{build:"tsup",dev:"tsup --watch",lint:"eslint .","type-check":"tsc --noEmit"},dependencies:{"@dotlottie/dotlottie-js":"^0.7.0","@preact/signals-core":"^1.2.3",howler:"^2.2.3","lottie-web":"^5.12.2",xstate:"^4.38.1"},devDependencies:{"@lottiefiles/lottie-types":"^1.2.0","@types/howler":"^2.2.8",tsup:"^7.2.0",typescript:"^4.7.4"},publishConfig:{access:"public"}},Zi=(t=>(t.Complete="complete",t.DataFail="data_fail",t.DataReady="data_ready",t.Error="error",t.Frame="frame",t.Freeze="freeze",t.LoopComplete="loopComplete",t.Pause="pause",t.Play="play",t.Ready="ready",t.Stop="stop",t.VisibilityChange="visibilityChange",t))(Zi||{}),tn=(t=>(t.Completed="completed",t.Error="error",t.Fetching="fetching",t.Frozen="frozen",t.Initial="initial",t.Loading="loading",t.Paused="paused",t.Playing="playing",t.Ready="ready",t.Stopped="stopped",t))(tn||{}),en=(t=>(t.Bounce="bounce",t.Normal="normal",t))(en||{}),q={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},nn={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},gn=class{_lottie;_src;_animationConfig;_prevUserPlaybackOptions={};_userPlaybackOptions;_hover=!1;_loop=!1;_counter=0;_intermission=0;_counterInterval=null;_container=null;_name;_mode="normal";_background="transparent";_animation;_defaultTheme;_activeAnimationId;_currentAnimationId;_testId;_listeners=new Map;_currentState="initial";_stateBeforeFreeze="initial";state=new De(nn);_light=!1;_worker=!1;_dotLottieLoader=new Te;_activeStateId;_inInteractiveMode=!1;_scrollTicking=!1;_scrollCallback=void 0;_onShowIntersectionObserver=void 0;_visibilityPercentage=0;_audios=[];_stateMachineManager;constructor(t,e,i){typeof t=="string"?this._src=t:this._src=St(t),i!=null&&i.testId&&(this._testId=i.testId),this._defaultTheme=(i==null?void 0:i.defaultTheme)||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),typeof(i==null?void 0:i.activeAnimationId)=="string"&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,typeof(i==null?void 0:i.background)=="string"&&this.setBackground(i.background),typeof(i==null?void 0:i.activeStateId)<"u"&&(this._activeStateId=i.activeStateId);let{rendererSettings:n,...r}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...n},...r},i!=null&&i.light&&(this._light=i.light),i!=null&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange();}_listenToHover(){var t,e,i,n;let r=()=>{this._hover&&this.currentState!=="playing"&&this.play();},o=()=>{this._hover&&this.currentState==="playing"&&this.stop();};(t=this._container)==null||t.removeEventListener("mouseenter",r),(e=this._container)==null||e.removeEventListener("mouseleave",o),(i=this._container)==null||i.addEventListener("mouseleave",o),(n=this._container)==null||n.addEventListener("mouseenter",r);}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&this.currentState==="playing"?this.freeze():this.currentState==="frozen"&&this.unfreeze());}_listenToVisibilityChange(){typeof document<"u"&&typeof document.hidden<"u"&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange());}_getOption(t){var e;if(typeof this._userPlaybackOptions[t]<"u")return this._userPlaybackOptions[t];let i=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations.find(n=>n.id===this._currentAnimationId);return i&&typeof i[t]<"u"?i[t]:q[t]}_getPlaybackOptions(){let t={};for(let e in q)typeof q[e]<"u"&&(t[e]=this._getOption(e));return t}_setPlayerState(t){var e,i,n;let r=t(this._getPlaybackOptions());try{qt._parse(r);}catch{k(`Invalid PlaybackOptions, ${JSON.stringify(r,null,2)}`);return}typeof r.defaultTheme<"u"&&(this._defaultTheme=r.defaultTheme),typeof r.playMode<"u"&&(this._mode=r.playMode),typeof r.intermission<"u"&&(this._intermission=r.intermission),typeof r.hover<"u"&&(this._hover=r.hover),typeof r.loop<"u"&&(this.clearCountTimer(),this._loop=r.loop,this._counter=0,(e=this._lottie)==null||e.setLoop(typeof r.loop=="number"?!0:r.loop)),typeof r.speed<"u"&&((i=this._lottie)==null||i.setSpeed(r.speed)),typeof r.autoplay<"u"&&this._lottie&&(this._lottie.autoplay=r.autoplay),typeof r.direction<"u"&&((n=this._lottie)==null||n.setDirection(r.direction));}_getOptionsFromAnimation(t){let{id:e,...i}=t;return {...q,...i}}_updateTestData(){!this._testId||!this._lottie||(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed});}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover());}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval);}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData();}static isPathJSON(t){var e;return ((e=t.split(".").pop())==null?void 0:e.toLowerCase())==="json"}get src(){return this._src}updateSrc(t){this._src!==t&&(typeof t=="string"?this._src=t:this._src=St(t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load());}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){typeof t=="boolean"&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify());}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify();}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){typeof t=="string"&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState(()=>({playMode:t})),this._notify(),this._updateTestData());}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){k("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing");}goToAndStop(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){k("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped");}seek(t){if(!this._lottie||["loading"].includes(this._currentState)){k("seek() Can't use whilst loading.");return}let e=t;typeof e=="number"&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let n=i[2]==="%"?this.totalFrames*Number(i[1])/100:i[1];n!==void 0&&(this._lottie.goToAndPlay(n,!0),this.currentState==="playing"?this.play():this.currentState==="frozen"?this.freeze():this.pause());}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i){let[n,r]=t!=null?t:[0,this.totalFrames-1],[o,a]=e!=null?e:[0,1];if(!this._areNumbersInRange(o,a)){et("threshold values must be between 0 and 1");return}if(this.container){let{height:l,top:s}=this.container.getBoundingClientRect(),u=window.innerHeight-s,d=window.innerHeight+l,h=u/d,c=n+Math.round((h-o)/(a-o)*(r-n));i&&i(h),this.goToAndStop(c,!0),(c>=r||h>=a)&&this._handleAnimationComplete();}this._scrollTicking=!1;}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(t,e,i)),this._scrollTicking=!0);}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(t==null?void 0:t.segments,t==null?void 0:t.threshold,t==null?void 0:t.positionCallback),window.addEventListener("scroll",this._scrollCallback);}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0);}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0);}addIntersectionObserver(t){if(!this.container)throw g("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:t!=null&&t.threshold?t.threshold:[0,1]},i=n=>{n.forEach(r=>{var o,a;this._visibilityPercentage=r.intersectionRatio*100,r.isIntersecting?(t!=null&&t.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),(o=this._container)==null||o.dispatchEvent(new Event("visibilityChange"))):t!=null&&t.callbackOnIntersect&&(t.callbackOnIntersect(0),(a=this._container)==null||a.dispatchEvent(new Event("visibilityChange")));});};this._onShowIntersectionObserver=new IntersectionObserver(i,e),this._onShowIntersectionObserver.observe(this.container);}playOnShow(t){var e;if(this.stop(),!this.container)throw g("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:(e=t==null?void 0:t.threshold)!=null?e:[],callbackOnIntersect:i=>{i===0?this.pause():this.play();}});}_validatePlaybackOptions(t){if(!t)return {};let e={};for(let[i,n]of Object.entries(t))switch(i){case"autoplay":typeof n=="boolean"&&(e.autoplay=n);break;case"direction":typeof n=="number"&&[1,-1].includes(n)&&(e.direction=n);break;case"loop":(typeof n=="boolean"||typeof n=="number")&&(e.loop=n);break;case"playMode":typeof n=="string"&&["normal","bounce"].includes(n)&&(e.playMode=n);break;case"speed":typeof n=="number"&&(e.speed=n);break;case"themeColor":typeof n=="string"&&(e.themeColor=n);break;case"hover":typeof n=="boolean"&&(e.hover=n);break;case"intermission":typeof n=="number"&&(e.intermission=n);break;case"defaultTheme":typeof n=="string"&&(e.defaultTheme=n);break}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){var t;if(!((t=this._dotLottieLoader.manifest)!=null&&t.animations.length))throw g("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(this._dotLottieLoader.animationsMap.size===0)throw g("No animations have been loaded.")}async play(t,e){var i,n;if(["initial","loading"].includes(this._currentState)){k("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t){this._lottie.playDirection===-1&&this._lottie.currentFrame===0?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if(typeof t=="number"){let r=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations[t];if(!r)throw g("animation not found.");typeof e=="function"?await this.render({id:r.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(r))}):await this.render({id:r.id});}if(typeof t=="string"){let r=(n=this._dotLottieLoader.manifest)==null?void 0:n.animations.find(o=>o.id===t);if(!r)throw g("animation not found.");typeof e=="function"?await this.render({id:r.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(r))}):await this.render({id:r.id});}}playSegments(t,e){if(!this._lottie||["loading"].includes(this._currentState)){k("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(t,e),this.setCurrentState("playing");}resetSegments(t){if(!this._lottie||["loading"].includes(this._currentState)){k("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(t);}togglePlay(){this.currentState==="playing"?this.pause():this.play();}_getAnimationByIdOrIndex(t){var e,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),typeof t=="number"){let n=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations[t];if(!n)throw g("animation not found.");return n}if(typeof t=="string"){let n=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations.find(r=>r.id===t);if(!n)throw g("animation not found.");return n}throw g("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(!this._inInteractiveMode){et("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(this._dotLottieLoader.stateMachinesMap.size===0&&await this._dotLottieLoader.getStateMachines(),this._dotLottieLoader.stateMachinesMap.size===0)throw g("No interactivity states are available.");if(t==="undefined")throw g("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await Ue(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t);}enterInteractiveMode(t){var e;if(t)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&((e=this._stateMachineManager)==null||e.stop()),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t);else throw g("stateId must be a non-empty string.")}exitInteractiveMode(){var t;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",(t=this._stateMachineManager)==null||t.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset());}reset(){var t;let e=this._getActiveAnimationId(),i=(t=this._dotLottieLoader.manifest)==null?void 0:t.animations.find(n=>n.id===e);if(this._inInteractiveMode&&this.exitInteractiveMode(),!i)throw g("animation not found.");this.play(e);}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw g("manifest not found.");if(this._inInteractiveMode){k("previous() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(n=>n.id===this._currentAnimationId);if(e===-1)throw g("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw g("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id});}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw g("manifest not found.");if(this._inInteractiveMode){k("next() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(n=>n.id===this._currentAnimationId);if(e===-1)throw g("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw g("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id});}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){k("resize() Can't use whilst loading.");return}this._lottie.resize();}stop(){if(!this._lottie||["loading"].includes(this._currentState)){k("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped");}pause(){if(!this._lottie||["loading"].includes(this._currentState)){k("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused");}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){k("freeze() Can't use whilst loading.");return}this.currentState!=="frozen"&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen");}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){k("unfreeze() Can't use whilst loading.");return}this._stateBeforeFreeze==="playing"?this.play():this.pause();}destroy(){var t,e;(t=this._container)!=null&&t.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(i=>{i.unload();}),this._audios=[]),this.clearCountTimer(),typeof document<"u"&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,(e=this._lottie)==null||e.destroy(),this._lottie=void 0;}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return `${Yi.dependencies["lottie-web"]}`}addEventListener(t,e){var i,n,r;this._listeners.has(t)||this._listeners.set(t,new Set),(i=this._listeners.get(t))==null||i.add(e);try{t==="complete"?(n=this._container)==null||n.addEventListener(t,e):(r=this._lottie)==null||r.addEventListener(t,e);}catch(o){et(`addEventListener ${o}`);}}getState(){var t,e,i,n,r,o,a;return {autoplay:(e=(t=this._lottie)==null?void 0:t.autoplay)!=null?e:!1,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:(n=(i=this._lottie)==null?void 0:i.playDirection)!=null?n:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:(o=(r=this._lottie)==null?void 0:r.playSpeed)!=null?o:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:(a=this._activeStateId)!=null?a:""}}_notify(){this.state.setState(this.getState());}get totalFrames(){var t;return ((t=this._lottie)==null?void 0:t.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState(()=>({direction:t})),this._userPlaybackOptions.direction=t;}get speed(){var t;return ((t=this._lottie)==null?void 0:t.playSpeed)||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState(()=>({speed:t})),this._userPlaybackOptions.speed=t;}get autoplay(){var t,e;return (e=(t=this._lottie)==null?void 0:t.autoplay)!=null?e:!1}setAutoplay(t){if(this._requireValidAutoplay(t),!this._lottie||["loading"].includes(this._currentState)){k("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:t})),this._userPlaybackOptions.autoplay=t;}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){k("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay);}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState(()=>({defaultTheme:t})),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render();}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState(()=>({loop:t})),this._userPlaybackOptions.loop=t;}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){k("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop);}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t);}get _frame(){return this._lottie?this.currentState==="completed"?this.direction===-1?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){var e;let i;!Array.isArray(t)||t.length===0?i=["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"]:i=t;let n=!1;if(i.includes("activeAnimationId")){let r=(e=this._dotLottieLoader.manifest)==null?void 0:e.activeAnimationId,o=this._getAnimationByIdOrIndex(r||0);this._activeAnimationId=r,await this._setCurrentAnimation(o.id),n=!0;}i.forEach(r=>{switch(r){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"));break}}),n&&this.render();}removeEventListener(t,e){var i,n,r;try{t==="complete"?(i=this._container)==null||i.removeEventListener(t,e):(n=this._lottie)==null||n.removeEventListener(t,e),(r=this._listeners.get(t))==null||r.delete(e);}catch(o){et("removeEventListener",o);}}_handleAnimationComplete(){var t;typeof this._loop=="number"&&this.stop();let e=this.direction===-1?0:this.totalFrames-1;this.goToAndStop(e,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),(t=this._container)==null||t.dispatchEvent(new Event("complete"));}addEventListeners(){var t;if(!this._lottie||["loading"].includes(this._currentState)){k("addEventListeners() Can't use whilst loading.");return}this._lottie.addEventListener("enterFrame",()=>{var e;if(!this._lottie){k("enterFrame event : Lottie is undefined.");return}Math.floor(this._lottie.currentFrame)===0&&this.direction===-1&&((e=this._container)==null||e.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify();}),this._lottie.addEventListener("loopComplete",()=>{var e;if(!this._lottie){k("loopComplete event : Lottie is undefined.");return}(e=this._container)==null||e.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let i=this._lottie.playDirection;if(typeof this._loop=="number"&&this._loop>0&&(this._counter+=this._mode==="bounce"?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}this._mode==="bounce"&&typeof i=="number"&&(i=Number(i)*-1);let n=i===-1?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(n,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(n,!0));},this._intermission)):(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(i===-1?this.totalFrames-1:0,!0));}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&this._loop===!1&&this._mode==="bounce"){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let e=this._lottie.playDirection;this._mode==="bounce"&&typeof e=="number"&&(e=Number(e)*-1);let i=e===-1?this.totalFrames-1:0;this._setPlayerState(()=>({direction:e})),this.goToAndPlay(i,!0);},this._intermission);}else this._handleAnimationComplete();});for(let[e,i]of this._listeners)if(e==="complete")for(let n of i)(t=this._container)==null||t.addEventListener(e,n);else for(let n of i)this._lottie.addEventListener(e,n);}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready";}async _getAudioFactory(){if(this._animation&&Ce(this._animation)){let{DotLottieAudio:t}=await __webpack_require__.e(/*! import() */ "vendors-node_modules_dotlottie_player-component_dist_dotlottie-audio-75C54RUV_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./dotlottie-audio-75C54RUV.mjs */ "./node_modules/@dotlottie/player-component/dist/dotlottie-audio-75C54RUV.mjs"));return e=>{let i=new t({src:[e]});return this._audios.push(i),i}}return null}async render(t){var e,i,n,r,o,a,l,s,u,d,h,c,p,m,f,v,_,S;if(t!=null&&t.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw g("no animation selected");let y=(e=q.loop)!=null?e:!1,A=(i=q.autoplay)!=null?i:!1,P=(n=q.playMode)!=null?n:"normal",N=(r=q.intermission)!=null?r:0,O=(o=q.hover)!=null?o:!1,I=(a=q.direction)!=null?a:1,T=(l=q.speed)!=null?l:1,B=(s=q.defaultTheme)!=null?s:"";y=(u=t==null?void 0:t.loop)!=null?u:this._getOption("loop"),A=(d=t==null?void 0:t.autoplay)!=null?d:this._getOption("autoplay"),P=(h=t==null?void 0:t.playMode)!=null?h:this._getOption("playMode"),N=(c=t==null?void 0:t.intermission)!=null?c:this._getOption("intermission"),O=(p=t==null?void 0:t.hover)!=null?p:this._getOption("hover"),I=(m=t==null?void 0:t.direction)!=null?m:this._getOption("direction"),T=(f=t==null?void 0:t.speed)!=null?f:this._getOption("speed"),B=(v=t==null?void 0:t.defaultTheme)!=null?v:this._getOption("defaultTheme");let C={...this._animationConfig,autoplay:O?!1:A,loop:typeof y=="number"?!0:y,renderer:this._worker?"svg":(_=this._animationConfig.renderer)!=null?_:"svg"},[z,j,U]=await Promise.all([this._dotLottieLoader.getTheme(B),this._getLottiePlayerInstance(),this._getAudioFactory()]);if(z&&this._animation?(this._animation=St(this._animation),this._animation.slots=z):this._animation=await this._dotLottieLoader.getAnimation((S=this._currentAnimationId)!=null?S:""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:B,playMode:P,intermission:N,hover:O,loop:y})),U?this._lottie=j.loadAnimation({...C,container:this._container,animationData:this._animation,audioFactory:U}):this._lottie=j.loadAnimation({...C,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var E;(E=this._lottie)==null||E.playSegments([0,this._lottie.totalFrames],!0);}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:I,speed:T})),A&&!O&&(y===!1&&I===-1?this.play():this.setCurrentState("playing")),this._updateTestData();}async _getLottiePlayerInstance(){var t;let e=(t=this._animationConfig.renderer)!=null?t:"svg",i;if(this._worker)return e!=="svg"&&k("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),i=await __webpack_require__.e(/*! import() */ "vendors-node_modules_dotlottie_player-component_dist_lottie_worker-Q23FJ6ZR-YP5OKMTN_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./lottie_worker-Q23FJ6ZR-YP5OKMTN.mjs */ "./node_modules/@dotlottie/player-component/dist/lottie_worker-Q23FJ6ZR-YP5OKMTN.mjs")),i.default;switch(e){case"svg":{this._light?i=await __webpack_require__.e(/*! import() */ "vendors-node_modules_dotlottie_player-component_dist_lottie_light-KMJEUZFY-TNG7ODX7_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./lottie_light-KMJEUZFY-TNG7ODX7.mjs */ "./node_modules/@dotlottie/player-component/dist/lottie_light-KMJEUZFY-TNG7ODX7.mjs")):i=await __webpack_require__.e(/*! import() */ "vendors-node_modules_dotlottie_player-component_dist_lottie_svg-MJGYILXD-NRTSROOT_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./lottie_svg-MJGYILXD-NRTSROOT.mjs */ "./node_modules/@dotlottie/player-component/dist/lottie_svg-MJGYILXD-NRTSROOT.mjs"));break}case"canvas":{this._light?i=await __webpack_require__.e(/*! import() */ "vendors-node_modules_dotlottie_player-component_dist_lottie_light_canvas-B5UTTNXA-PRI6IBWW_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./lottie_light_canvas-B5UTTNXA-PRI6IBWW.mjs */ "./node_modules/@dotlottie/player-component/dist/lottie_light_canvas-B5UTTNXA-PRI6IBWW.mjs")):i=await __webpack_require__.e(/*! import() */ "vendors-node_modules_dotlottie_player-component_dist_lottie_canvas-CDSUBMCL-MZNYH5VV_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./lottie_canvas-CDSUBMCL-MZNYH5VV.mjs */ "./node_modules/@dotlottie/player-component/dist/lottie_canvas-CDSUBMCL-MZNYH5VV.mjs"));break}case"html":{this._light?i=await __webpack_require__.e(/*! import() */ "vendors-node_modules_dotlottie_player-component_dist_lottie_light_html-SLCECTRT-SYWXEBDN_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./lottie_light_html-SLCECTRT-SYWXEBDN.mjs */ "./node_modules/@dotlottie/player-component/dist/lottie_light_html-SLCECTRT-SYWXEBDN.mjs")):i=await __webpack_require__.e(/*! import() */ "vendors-node_modules_dotlottie_player-component_dist_lottie_html-X3TYKVQI-L6774NQS_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./lottie_html-X3TYKVQI-L6774NQS.mjs */ "./node_modules/@dotlottie/player-component/dist/lottie_html-X3TYKVQI-L6774NQS.mjs"));break}default:throw new Error(`Invalid renderer: ${e}`)}return i.default}_getActiveAnimationId(){var t,e,i,n;let r=this._dotLottieLoader.manifest;return (n=(i=(t=this._activeAnimationId)!=null?t:r==null?void 0:r.activeAnimationId)!=null?i:(e=r==null?void 0:r.animations[0])==null?void 0:e.id)!=null?n:void 0}async load(t){if(this._currentState==="loading"){k("Loading in progress..");return}try{if(this.setCurrentState("loading"),typeof this._src=="string")if(Ee(this._src)){let i=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(i);}else {let i=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(i.toString());}else if(typeof this._src=="object"&&at(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw g("Invalid src provided");if(!this._dotLottieLoader.manifest)throw g("No manifest found");let e=this._getActiveAnimationId();if(!e)throw g("No active animation found");await this._setCurrentAnimation(e),await this.render(t);}catch(e){this.setCurrentState("error"),e instanceof Error&&et(`Error loading animation: ${e.message}`);}}setErrorState(t){this.setCurrentState("error"),et(t);}_requireValidDirection(t){if(t!==-1&&t!==1)throw g("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw g("intermission must be a positive number")}_requireValidLoop(t){if(typeof t=="number"&&(!Number.isInteger(t)||t<0))throw g("loop must be a positive number or boolean")}_requireValidSpeed(t){if(typeof t!="number")throw g("speed must be a number")}_requireValidBackground(t){if(typeof t!="string")throw g("background must be a string")}_requireValidAutoplay(t){if(typeof t!="boolean")throw g("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed);}};


//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-TRZ6EGBZ.mjs.map

/***/ }),

/***/ "./node_modules/@dotlottie/player-component/dist/chunk-ZWH2ESXT.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@dotlottie/player-component/dist/chunk-ZWH2ESXT.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ j)
/* harmony export */ });
var h=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var j=(g,b,d,c)=>{for(var a=c>1?void 0:c?i(b,d):b,e=g.length-1,f;e>=0;e--)(f=g[e])&&(a=(c?f(b,d,a):f(a))||a);return c&&a&&h(b,d,a),a};


//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ZWH2ESXT.mjs.map

/***/ }),

/***/ "./node_modules/@dotlottie/player-component/dist/dotlottie-player.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@dotlottie/player-component/dist/dotlottie-player.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DotLottiePlayer: () => (/* binding */ a),
/* harmony export */   PlayMode: () => (/* reexport safe */ _chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.g)
/* harmony export */ });
/* harmony import */ var _chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-ODPU3M3Z.mjs */ "./node_modules/@dotlottie/player-component/dist/chunk-ODPU3M3Z.mjs");
/* harmony import */ var _chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-TRZ6EGBZ.mjs */ "./node_modules/@dotlottie/player-component/dist/chunk-TRZ6EGBZ.mjs");
/* harmony import */ var _chunk_HDDX7F4A_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-HDDX7F4A.mjs */ "./node_modules/@dotlottie/player-component/dist/chunk-HDDX7F4A.mjs");
/* harmony import */ var _chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-ZWH2ESXT.mjs */ "./node_modules/@dotlottie/player-component/dist/chunk-ZWH2ESXT.mjs");






var M=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this));},finisher(e){e.createProperty(t.key,r);}},x=(r,t,e)=>{t.constructor.createProperty(e,r);};function p(r){return (t,e)=>e!==void 0?x(r,t,e):M(r,t)}function k(r){return p({...r,state:!0})}var v=({finisher:r,descriptor:t})=>(e,i)=>{var n;if(i===void 0){let l=(n=e.originalKey)!==null&&n!==void 0?n:e.key,h=t!=null?{kind:"method",placement:"prototype",key:l,descriptor:t(e.key)}:{...e,key:l};return r!=null&&(h.finisher=function(b){r(b,l);}),h}{let l=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),r==null||r(l,i);}};function O(r,t){return v({descriptor:e=>{let i={get(){var n,l;return (l=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r))!==null&&l!==void 0?l:null},enumerable:!0,configurable:!0};if(t){let n=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var l,h;return this[n]===void 0&&(this[n]=(h=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(r))!==null&&h!==void 0?h:null),this[n]};}return i}})}var L;((L=window.HTMLSlotElement)===null||L===void 0?void 0:L.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var I={name:"@dotlottie/player-component",version:"2.7.12",description:"dotLottie animation player web component.",repository:"https://github.com/dotlottie/player-component.git",homepage:"https://dotlottie.io/players",bugs:"https://github.com/dotlottie/player-component/issues",author:"Jawish Hameed <jawish@lottiefiles.com>",license:"MIT",main:"dist/dotlottie-player.js",module:"dist/dotlottie-player.mjs",types:"dist/dotlottie-player.d.ts",files:["dist"],keywords:["dotlottie","animation","web component","component","lit-element","player"],scripts:{build:"tsup","cypress:open":"cypress open --component",dev:"tsup --watch",lint:"eslint .","lint:fix":"eslint --fix",test:"cypress run --component","type-check":"tsc --noEmit"},dependencies:{"@dotlottie/common":"workspace:*",lit:"^2.7.5"},devDependencies:{"@vitejs/plugin-legacy":"^4.1.0","axe-core":"^4.7.2",cypress:"^12.11.0","cypress-axe":"^1.4.0","cypress-ct-lit":"^0.3.2","lottie-web":"^5.12.2",terser:"^5.19.0",tsup:"^7.2.0",typescript:"^4.7.4",vite:"^4.3.9"},publishConfig:{access:"public"},browserslist:["> 3%"]};var T="dotlottie-player";var a=class extends _chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.b{defaultTheme="";container;playMode=_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.g.Normal;autoplay=!1;background="transparent";controls=!1;direction=1;hover=!1;loop;renderer="svg";speed=1;src;intermission=0;activeAnimationId=null;light=!1;worker=!1;activeStateId;_seeker=0;_dotLottieCommonPlayer;_io;_loop;_renderer="svg";_unsubscribeListeners;_hasMultipleAnimations=!1;_hasMultipleThemes=!1;_hasMultipleStates=!1;_popoverIsOpen=!1;_animationsTabIsOpen=!1;_statesTabIsOpen=!1;_styleTabIsOpen=!1;_themesForCurrentAnimation=[];_statesForCurrentAnimation=[];_parseLoop(t){let e=parseInt(t,10);return Number.isInteger(e)&&e>0?(this._loop=e,e):typeof t=="string"&&["true","false"].includes(t)?(this._loop=t==="true",this._loop):((0,_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.c)("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(t){let e=t.currentTarget;try{let i=parseInt(e.value,10);if(!this._dotLottieCommonPlayer)return;let n=i/100*this._dotLottieCommonPlayer.totalFrames;this.seek(n);}catch{throw (0,_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Error while seeking animation")}}_initListeners(){let t=this._dotLottieCommonPlayer;if(t===void 0){(0,_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.c)("player not initialized - cannot add event listeners","dotlottie-player-component");return}this._unsubscribeListeners=t.state.subscribe((e$1,i)=>{this._seeker=e$1.seeker,this.requestUpdate(),i.currentState!==e$1.currentState&&this.dispatchEvent(new CustomEvent(e$1.currentState)),this.dispatchEvent(new CustomEvent(_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.e.Frame,{detail:{frame:e$1.frame,seeker:e$1.seeker}})),this.dispatchEvent(new CustomEvent(_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.e.VisibilityChange,{detail:{visibilityPercentage:e$1.visibilityPercentage}}));}),t.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.e.Complete));}),t.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.e.LoopComplete));}),t.addEventListener("DOMLoaded",()=>{let e$1=this.getManifest();e$1&&e$1.themes&&(this._themesForCurrentAnimation=e$1.themes.filter(i=>i.animations.includes(this.getCurrentAnimationId()||""))),e$1&&e$1.states&&(this._hasMultipleStates=e$1.states.length>0,this._statesForCurrentAnimation=[],e$1.states.forEach(i=>{this._statesForCurrentAnimation.push(i);})),this.dispatchEvent(new CustomEvent(_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.e.Ready));}),t.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.e.DataReady));}),t.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.e.DataFail));}),window&&window.addEventListener("click",e=>this._clickOutListener(e));}async load(t,e,i){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new _chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.j(t,this.container,{rendererSettings:e!=null?e:{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?this.direction===1?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(i);let n=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,n&&(n.themes&&(this._themesForCurrentAnimation=n.themes.filter(l=>l.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=n.themes.length>0),n.states&&(this._hasMultipleStates=n.states.length>0,this._statesForCurrentAnimation=[],n.states.forEach(l=>{this._statesForCurrentAnimation.push(l);}))),this._initListeners();}getCurrentAnimationId(){var t;return (t=this._dotLottieCommonPlayer)==null?void 0:t.currentAnimationId}animationCount(){var t;return this._dotLottieCommonPlayer&&((t=this._dotLottieCommonPlayer.getManifest())==null?void 0:t.animations.length)||0}animations(){if(!this._dotLottieCommonPlayer)return [];let t=this._dotLottieCommonPlayer.getManifest();return (t==null?void 0:t.animations.map(e=>e.id))||[]}currentAnimation(){return !this._dotLottieCommonPlayer||!this._dotLottieCommonPlayer.currentAnimationId?"":this._dotLottieCommonPlayer.currentAnimationId}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.i}getManifest(){var t;return (t=this._dotLottieCommonPlayer)==null?void 0:t.getManifest()}getLottie(){var t;return (t=this._dotLottieCommonPlayer)==null?void 0:t.getAnimationInstance()}getVersions(){return {lottieWebVersion:_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.j.getLottieWebVersion(),dotLottiePlayerVersion:`${I.version}`}}previous(t){var e;(e=this._dotLottieCommonPlayer)==null||e.previous(t);}next(t){var e;(e=this._dotLottieCommonPlayer)==null||e.next(t);}reset(){var t;(t=this._dotLottieCommonPlayer)==null||t.reset();}play(t,e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(t,e);}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause();}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop();}playOnShow(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(t);}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow();}playOnScroll(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(t);}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll();}seek(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(t);}snapshot(t=!0){if(!this.shadowRoot)return "";let e=this.shadowRoot.querySelector(".animation svg"),i=new XMLSerializer().serializeToString(e);if(t){let n=document.createElement("a");n.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`,n.download=`download_${this._seeker}.svg`,document.body.appendChild(n),n.click(),document.body.removeChild(n);}return i}setTheme(t){var e;(e=this._dotLottieCommonPlayer)==null||e.setDefaultTheme(t);}themes(){var e;if(!this._dotLottieCommonPlayer)return [];let t=this._dotLottieCommonPlayer.getManifest();return ((e=t==null?void 0:t.themes)==null?void 0:e.map(i=>i.id))||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze();}setSpeed(t=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(t);}setDirection(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(t);}setLooping(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(t);}isLooping(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.loop:!1}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay();}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop();}setPlayMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(t);}enterInteractiveMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(t);}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode();}revertToManifestValues(t){var e;(e=this._dotLottieCommonPlayer)==null||e.revertToManifestValues(t);}static get styles(){return _chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.c}async firstUpdated(){var t;this.container=(t=this.shadowRoot)==null?void 0:t.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(e=>{var i,n;e[0]!==void 0&&e[0].isIntersecting?((i=this._dotLottieCommonPlayer)==null?void 0:i.currentState)===_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.f.Frozen&&this.play():((n=this._dotLottieCommonPlayer)==null?void 0:n.currentState)===_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.f.Playing&&this._freeze();}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),this.renderer==="svg"?this._renderer="svg":this.renderer==="canvas"?this._renderer="canvas":this.renderer==="html"&&(this._renderer="html"),this.src&&await this.load(this.src);}disconnectedCallback(){var t,e;this._io&&(this._io.disconnect(),this._io=void 0),(t=this._dotLottieCommonPlayer)==null||t.destroy(),(e=this._unsubscribeListeners)==null||e.call(this),window&&window.removeEventListener("click",i=>this._clickOutListener(i));}_clickOutListener(t){!t.composedPath().some(i=>i instanceof HTMLElement?i.classList.contains("popover")||i.id==="lottie-animation-options":!1)&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate());}renderControls(){var i,n,l,h,b;let t=((i=this._dotLottieCommonPlayer)==null?void 0:i.currentState)===_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.f.Playing,e=((n=this._dotLottieCommonPlayer)==null?void 0:n.currentState)===_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.f.Paused;return (0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay();}}
          class=${t||e?`active ${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`:`${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${t?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)``}
        <input
          id="lottie-seeker-input"
          class="seeker ${((l=this._dotLottieCommonPlayer)==null?void 0:l.direction)===-1?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${s=>this._handleSeekChange(s)}
          @mousedown=${()=>{this._freeze();}}
          @mouseup=${()=>{var s;(s=this._dotLottieCommonPlayer)==null||s.unfreeze();}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${(h=this._dotLottieCommonPlayer)!=null&&h.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate();}}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)``}
      </div>
      ${this._popoverIsOpen?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${!this._animationsTabIsOpen&&!this._styleTabIsOpen&&!this._statesTabIsOpen?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate();}}
                      @keydown=${s=>{(s.code==="Space"||s.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate());}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)``}
              ${this._hasMultipleThemes&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate();}}
                    @keydown=${s=>{(s.code==="Space"||s.code==="Enter")&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate());}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._hasMultipleStates&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate();}}
                    @keydown=${s=>{(s.code==="Space"||s.code==="Enter")&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate());}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._animationsTabIsOpen?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate();}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(s=>(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${s}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(s),this.requestUpdate();}}
                                @keydown=${c=>{(c.code==="Space"||c.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(s),this.requestUpdate());}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===s?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${s}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)``}
              ${this._styleTabIsOpen?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate();}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${((b=this._dotLottieCommonPlayer)==null?void 0:b.defaultTheme)===""?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)``:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate();}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(s=>(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${s.id}"
                                @click=${()=>{this.setTheme(s.id);}}
                                @keydown=${c=>{(c.code==="Space"||c.code==="Enter")&&this.setTheme(s.id);}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===s.id?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${s.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)``}
              ${this._statesTabIsOpen?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate();}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate();}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(s=>(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${s}"
                                @click=${()=>{this.enterInteractiveMode(s);}}
                                @keydown=${c=>{(c.code==="Space"||c.code==="Enter")&&this.enterInteractiveMode(s);}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===s?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${s}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)``}
            </div>
          `:(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)``}
    `}render(){var i;let t=this.controls?"main controls":"main",e=this.controls?"animation controls":"animation";return (0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)`
      <div id="animation-container" class=${t} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${e} style="background:${this.background};">
          ${((i=this._dotLottieCommonPlayer)==null?void 0:i.currentState)===_chunk_TRZ6EGBZ_mjs__WEBPACK_IMPORTED_MODULE_1__.f.Error?(0,_chunk_ODPU3M3Z_mjs__WEBPACK_IMPORTED_MODULE_0__.a)` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:String})],a.prototype,"defaultTheme",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([O("#animation")],a.prototype,"container",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p()],a.prototype,"playMode",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:Boolean})],a.prototype,"autoplay",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:String})],a.prototype,"background",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:Boolean})],a.prototype,"controls",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:Number})],a.prototype,"direction",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:Boolean})],a.prototype,"hover",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:String})],a.prototype,"loop",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:String})],a.prototype,"renderer",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:Number})],a.prototype,"speed",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:String})],a.prototype,"src",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p()],a.prototype,"intermission",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:String})],a.prototype,"activeAnimationId",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:Boolean})],a.prototype,"light",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:Boolean})],a.prototype,"worker",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([p({type:String})],a.prototype,"activeStateId",2),(0,_chunk_ZWH2ESXT_mjs__WEBPACK_IMPORTED_MODULE_3__.a)([k()],a.prototype,"_seeker",2);customElements.get(T)||customElements.define(T,a);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/


//# sourceMappingURL=out.js.map
//# sourceMappingURL=dotlottie-player.mjs.map

/***/ }),

/***/ "./node_modules/@swup/head-plugin/dist/index.modern.js":
/*!*************************************************************!*\
  !*** ./node_modules/@swup/head-plugin/dist/index.modern.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _swup_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swup/plugin */ "./node_modules/@swup/plugin/dist/index.modern.js");
function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)({}).hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},t.apply(null,arguments)}function s(e){return"title"!==e.localName&&!e.matches("[data-swup-theme]")}function n(e,t){return e.outerHTML===t.outerHTML}function r(e,t=[]){const s=Array.from(e.attributes);return t.length?s.filter(({name:e})=>t.some(t=>t instanceof RegExp?t.test(e):e===t)):s}function o(e){return e.matches("link[rel=stylesheet][href]")}class i extends _swup_plugin__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(e={}){var i;super(),i=this,this.name="SwupHeadPlugin",this.requires={swup:">=4.6"},this.defaults={persistTags:!1,persistAssets:!1,awaitAssets:!1,attributes:["lang","dir"],timeout:3e3},this.options=void 0,this.updateHead=async function(e,{page:{}}){const{awaitAssets:a,attributes:l,timeout:u}=i.options,c=e.to.document,{removed:d,added:h}=function(e,r,{shouldPersist:o=()=>!1}={}){const i=Array.from(e.children),a=Array.from(r.children),l=(u=i,a.reduce((e,t,s)=>(u.some(e=>n(t,e))||e.push({el:t,index:s}),e),[]));var u;const c=function(e,t){return e.reduce((e,s)=>(t.some(e=>n(s,e))||e.push({el:s}),e),[])}(i,a);c.reverse().filter(({el:e})=>s(e)).filter(({el:e})=>!o(e)).forEach(({el:t})=>e.removeChild(t));const d=l.filter(({el:e})=>s(e)).map(s=>{let n=s.el.cloneNode(!0);return e.insertBefore(n,e.children[(s.index||0)+1]||null),t({},s,{el:n})});return{removed:c.map(({el:e})=>e),added:d.map(({el:e})=>e)}}(document.head,c.head,{shouldPersist:e=>i.isPersistentTag(e)});if(i.swup.log(`Removed ${d.length} / added ${h.length} tags in head`),null!=l&&l.length&&function(e,t,s=[]){const n=new Set;for(const{name:o,value:i}of r(t,s))e.setAttribute(o,i),n.add(o);for(const{name:t}of r(e,s))n.has(t)||e.removeAttribute(t)}(document.documentElement,c.documentElement,l),a){const e=function(e,t=0){return e.filter(o).map(e=>function(e,t=0){let s;const n=t=>{e.sheet?t():s=setTimeout(()=>n(t),10)};return new Promise(r=>{n(()=>r(e)),t>0&&setTimeout(()=>{s&&clearTimeout(s),r(e)},t)})}(e,t))}(h,u);e.length&&(i.swup.log(`Waiting for ${e.length} assets to load`),await Promise.all(e))}},this.options=t({},this.defaults,e),this.options.persistAssets&&!this.options.persistTags&&(this.options.persistTags="link[rel=stylesheet], script[src], style")}mount(){this.before("content:replace",this.updateHead)}isPersistentTag(e){const{persistTags:t}=this.options;return"function"==typeof t?t(e):"string"==typeof t&&t.length>0?e.matches(t):Boolean(t)}}
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ "./node_modules/@swup/plugin/dist/index.modern.js":
/*!********************************************************!*\
  !*** ./node_modules/@swup/plugin/dist/index.modern.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function r(){return r=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},r.apply(this,arguments)}const n=r=>String(r).split(".").map(r=>String(parseInt(r||"0",10))).concat(["0","0"]).slice(0,3).join(".");class e{constructor(){this.isSwupPlugin=!0,this.swup=void 0,this.version=void 0,this.requires={},this.handlersToUnregister=[]}mount(){}unmount(){this.handlersToUnregister.forEach(r=>r()),this.handlersToUnregister=[]}_beforeMount(){if(!this.name)throw new Error("You must define a name of plugin when creating a class.")}_afterUnmount(){}_checkRequirements(){return"object"!=typeof this.requires||Object.entries(this.requires).forEach(([r,e])=>{if(!function(r,e,t){const s=function(r,n){var e;if("swup"===r)return null!=(e=n.version)?e:"";{var t;const e=n.findPlugin(r);return null!=(t=null==e?void 0:e.version)?t:""}}(r,t);return!!s&&((r,e)=>e.every(e=>{const[,t,s]=e.match(/^([\D]+)?(.*)$/)||[];var o,i;return((r,n)=>{const e={"":r=>0===r,">":r=>r>0,">=":r=>r>=0,"<":r=>r<0,"<=":r=>r<=0};return(e[n]||e[""])(r)})((i=s,o=n(o=r),i=n(i),o.localeCompare(i,void 0,{numeric:!0})),t||">=")}))(s,e)}(r,e=Array.isArray(e)?e:[e],this.swup)){const n=`${r} ${e.join(", ")}`;throw new Error(`Plugin version mismatch: ${this.name} requires ${n}`)}}),!0}on(r,n,e={}){var t;n=!(t=n).name.startsWith("bound ")||t.hasOwnProperty("prototype")?n.bind(this):n;const s=this.swup.hooks.on(r,n,e);return this.handlersToUnregister.push(s),s}once(n,e,t={}){return this.on(n,e,r({},t,{once:!0}))}before(n,e,t={}){return this.on(n,e,r({},t,{before:!0}))}replace(n,e,t={}){return this.on(n,e,r({},t,{replace:!0}))}off(r,n){return this.swup.hooks.off(r,n)}}
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ "./node_modules/delegate-it/delegate.js":
/*!**********************************************!*\
  !*** ./node_modules/delegate-it/delegate.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Keeps track of raw listeners added to the base elements to avoid duplication */
const ledger = new WeakMap();
function editLedger(wanted, baseElement, callback, setup) {
    if (!wanted && !ledger.has(baseElement)) {
        return false;
    }
    const elementMap = ledger.get(baseElement)
        ?? new WeakMap();
    ledger.set(baseElement, elementMap);
    const setups = elementMap.get(callback) ?? new Set();
    elementMap.set(callback, setups);
    const existed = setups.has(setup);
    if (wanted) {
        setups.add(setup);
    }
    else {
        setups.delete(setup);
    }
    return existed && wanted;
}
function safeClosest(event, selector) {
    let target = event.target;
    if (target instanceof Text) {
        target = target.parentElement;
    }
    if (target instanceof Element && event.currentTarget instanceof Element) {
        // `.closest()` may match ancestors of `currentTarget` but we only need its children
        const closest = target.closest(selector);
        if (closest && event.currentTarget.contains(closest)) {
            return closest;
        }
    }
}
// This type isn't exported as a declaration, so it needs to be duplicated above
function delegate(selector, type, callback, options = {}) {
    const { signal, base = document } = options;
    if (signal?.aborted) {
        return;
    }
    // Don't pass `once` to `addEventListener` because it needs to be handled in `delegate-it`
    const { once, ...nativeListenerOptions } = options;
    // `document` should never be the base, it's just an easy way to define "global event listeners"
    const baseElement = base instanceof Document ? base.documentElement : base;
    // Handle the regular Element usage
    const capture = Boolean(typeof options === 'object' ? options.capture : options);
    const listenerFunction = (event) => {
        const delegateTarget = safeClosest(event, String(selector));
        if (delegateTarget) {
            const delegateEvent = Object.assign(event, { delegateTarget });
            callback.call(baseElement, delegateEvent);
            if (once) {
                baseElement.removeEventListener(type, listenerFunction, nativeListenerOptions);
                editLedger(false, baseElement, callback, setup);
            }
        }
    };
    const setup = JSON.stringify({ selector, type, capture });
    const isAlreadyListening = editLedger(true, baseElement, callback, setup);
    if (!isAlreadyListening) {
        baseElement.addEventListener(type, listenerFunction, nativeListenerOptions);
    }
    signal?.addEventListener('abort', () => {
        editLedger(false, baseElement, callback, setup);
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delegate);


/***/ }),

/***/ "./node_modules/delegate-it/index.js":
/*!*******************************************!*\
  !*** ./node_modules/delegate-it/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _delegate_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   oneEvent: () => (/* reexport safe */ _one_event_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _delegate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delegate.js */ "./node_modules/delegate-it/delegate.js");
/* harmony import */ var _one_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-event.js */ "./node_modules/delegate-it/one-event.js");





/***/ }),

/***/ "./node_modules/delegate-it/one-event.js":
/*!***********************************************!*\
  !*** ./node_modules/delegate-it/one-event.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _delegate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delegate.js */ "./node_modules/delegate-it/delegate.js");

// This type isn't exported as a declaration, so it needs to be duplicated above
async function oneEvent(selector, type, options = {}) {
    return new Promise(resolve => {
        options.once = true;
        if (options.signal?.aborted) {
            resolve(undefined);
        }
        options.signal?.addEventListener('abort', () => {
            resolve(undefined);
        });
        (0,_delegate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(selector, type, resolve, options);
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneEvent);


/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPlugin: () => (/* binding */ CSSPlugin),
/* harmony export */   _createElement: () => (/* binding */ _createElement),
/* harmony export */   _getBBox: () => (/* binding */ _getBBox),
/* harmony export */   checkPrefix: () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _reverting,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle(property, isNotCSS) {
  var _this = this;

  var target = this.target,
      style = target.style,
      cache = target._gsap;

  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.

      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function (p) {
        return _saveStyle.call(_this, p, isNotCSS);
      });
    }

    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }

    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }

    property = _transformProp;
  }

  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 3) {
    // stored like this: property, isNotCSS, value
    if (!props[i + 1]) {
      props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    } else if (props[i + 1] === 2) {
      // non-CSS value (function-based)
      target[props[i]](props[i + 2]);
    } else {
      // non-CSS value (not function-based)
      target[props[i]] = props[i + 2];
    }
  }

  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }

    i = _reverting();

    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);

      if (cache.zOrigin && style[_transformOriginProp]) {
        style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.

        cache.zOrigin = 0;
        cache.renderTransform();
      }

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

  properties && target.style && target.nodeType && properties.split(",").forEach(function (p) {
    return saver.save(p);
  }); // make sure it's a DOM node too.

  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.reverting;
    _pluginInitted = 1;
  }
},
    _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var owner = target.ownerSVGElement,
      svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      clone = target.cloneNode(true),
      bbox;

  clone.style.display = "block";
  svg.appendChild(clone);

  _docElement.appendChild(svg);

  try {
    bbox = clone.getBBox();
  } catch (e) {}

  svg.removeChild(clone);

  _docElement.removeChild(svg);

  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds, cloned;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getReparentedCloneBBox(target);
    cloned = 1;
  }

  bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style,
        first2Chars;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      first2Chars = property.substr(0, 2);

      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time && !cache.uncache) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
    }

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");
        style.scale = style.rotate = style.translate = "none";

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375. Note: position: fixed elements report a null offsetParent but they could also be invisible because they're in an ancestor with display: none, so we check getBoundingClientRect(). We only want to alter the DOM if we absolutely have to because it can cause iframe content to reload, like a Vimeo video.
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    if (cache.uncache) {
      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
    }

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || startValue === "auto" || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", 0, style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/Observer.js":
/*!***************************************!*\
  !*** ./node_modules/gsap/Observer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observer: () => (/* binding */ Observer),
/* harmony export */   _getProxyProp: () => (/* binding */ _getProxyProp),
/* harmony export */   _getScrollFunc: () => (/* binding */ _getScrollFunc),
/* harmony export */   _getTarget: () => (/* binding */ _getTarget),
/* harmony export */   _getVelocityProp: () => (/* binding */ _getVelocityProp),
/* harmony export */   _horizontal: () => (/* binding */ _horizontal),
/* harmony export */   _isViewport: () => (/* binding */ _isViewport),
/* harmony export */   _proxies: () => (/* binding */ _proxies),
/* harmony export */   _scrollers: () => (/* binding */ _scrollers),
/* harmony export */   _vertical: () => (/* binding */ _vertical),
/* harmony export */   "default": () => (/* binding */ Observer)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _clamp,
    _win,
    _doc,
    _docEl,
    _body,
    _isTouch,
    _pointerType,
    ScrollTrigger,
    _root,
    _normalizer,
    _eventTypes,
    _context,
    _getGSAP = function _getGSAP() {
  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _startup = 1,
    _observers = [],
    _scrollers = [],
    _proxies = [],
    _getTime = Date.now,
    _bridge = function _bridge(name, value) {
  return value;
},
    _integrate = function _integrate() {
  var core = ScrollTrigger.core,
      data = core.bridge || {},
      scrollers = core._scrollers,
      proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;

  _bridge = function _bridge(name, value) {
    return data[name](value);
  };
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _isViewport = function _isViewport(el) {
  return !!~_root.indexOf(el);
},
    _addListener = function _addListener(element, type, func, passive, capture) {
  return element.addEventListener(type, func, {
    passive: passive !== false,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _onScroll = function _onScroll() {
  return _normalizer && _normalizer.isPressed || _scrollers.cache++;
},
    _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
  var cachingFunc = function cachingFunc(value) {
    // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
    if (value || value === 0) {
      _startup && (_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.

      var isNormalizing = _normalizer && _normalizer.isPressed;
      value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!

      f(value);
      cachingFunc.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
    } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
      cachingFunc.cacheID = _scrollers.cache;
      cachingFunc.v = f();
    }

    return cachingFunc.v + cachingFunc.offset;
  };

  cachingFunc.offset = 0;
  return f && cachingFunc;
},
    _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  })
},
    _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  })
},
    _getTarget = function _getTarget(t, self) {
  return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;
  // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
  _isViewport(element) && (element = _doc.scrollingElement || _docEl);

  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  _scrollers[i + offset] || _addListener(element, "scroll", _onScroll); // clear the cache when a scroll occurs

  var prev = _scrollers[i + offset],
      func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
    return arguments.length ? element[s] = value : element[s];
  })));
  func.target = element;
  prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.

  return func;
},
    _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
  var v1 = value,
      v2 = value,
      t1 = _getTime(),
      t2 = t1,
      min = minTimeRefresh || 50,
      dropToZeroTime = Math.max(500, min * 3),
      update = function update(value, force) {
    var t = _getTime();

    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value;
    } else {
      // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
      v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }
  },
      reset = function reset() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  },
      getVelocity = function getVelocity(latestValue) {
    var tOld = t2,
        vOld = v2,
        t = _getTime();

    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
  };

  return {
    update: update,
    reset: reset,
    getVelocity: getVelocity
  };
},
    _getEvent = function _getEvent(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
},
    _getAbsoluteMax = function _getAbsoluteMax(a) {
  var max = Math.max.apply(Math, a),
      min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
},
    _setScrollTrigger = function _setScrollTrigger() {
  ScrollTrigger = gsap.core.globals().ScrollTrigger;
  ScrollTrigger && ScrollTrigger.core && _integrate();
},
    _initCore = function _initCore(core) {
  gsap = core || _getGSAP();

  if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;
    _root = [_win, _doc, _docEl, _body];
    _clamp = gsap.utils.clamp;

    _context = gsap.core.context || function () {};

    _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

    _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function () {
      return _startup = 0;
    }, 500);

    _setScrollTrigger();

    _coreInitted = 1;
  }

  return _coreInitted;
};

_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/function () {
  function Observer(vars) {
    this.init(vars);
  }

  var _proto = Observer.prototype;

  _proto.init = function init(vars) {
    _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance,
        dragMinimum = vars.dragMinimum,
        type = vars.type,
        target = vars.target,
        lineHeight = vars.lineHeight,
        debounce = vars.debounce,
        preventDefault = vars.preventDefault,
        onStop = vars.onStop,
        onStopDelay = vars.onStopDelay,
        ignore = vars.ignore,
        wheelSpeed = vars.wheelSpeed,
        event = vars.event,
        onDragStart = vars.onDragStart,
        onDragEnd = vars.onDragEnd,
        onDrag = vars.onDrag,
        onPress = vars.onPress,
        onRelease = vars.onRelease,
        onRight = vars.onRight,
        onLeft = vars.onLeft,
        onUp = vars.onUp,
        onDown = vars.onDown,
        onChangeX = vars.onChangeX,
        onChangeY = vars.onChangeY,
        onChange = vars.onChange,
        onToggleX = vars.onToggleX,
        onToggleY = vars.onToggleY,
        onHover = vars.onHover,
        onHoverEnd = vars.onHoverEnd,
        onMove = vars.onMove,
        ignoreCheck = vars.ignoreCheck,
        isNormalizer = vars.isNormalizer,
        onGestureStart = vars.onGestureStart,
        onGestureEnd = vars.onGestureEnd,
        onWheel = vars.onWheel,
        onEnable = vars.onEnable,
        onDisable = vars.onDisable,
        onClick = vars.onClick,
        scrollSpeed = vars.scrollSpeed,
        capture = vars.capture,
        allowClicks = vars.allowClicks,
        lockAxis = vars.lockAxis,
        onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl;
    this.vars = vars;
    ignore && (ignore = gsap.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.

    var id,
        onStopDelayedCall,
        dragged,
        moved,
        wheeled,
        locked,
        axis,
        self = this,
        prevDeltaX = 0,
        prevDeltaY = 0,
        passive = vars.passive || !preventDefault && vars.passive !== false,
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollX = scrollFuncX(),
        scrollY = scrollFuncY(),
        limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
        // for devices that accommodate mouse events and touch events, we need to distinguish.
    isViewport = _isViewport(target),
        ownerDoc = target.ownerDocument || _doc,
        deltaX = [0, 0, 0],
        // wheel, scroll, pointer/touch
    deltaY = [0, 0, 0],
        onClickTime = 0,
        clickCapture = function clickCapture() {
      return onClickTime = _getTime();
    },
        _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
      return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    },
        onStopFunc = function onStopFunc() {
      self._vx.reset();

      self._vy.reset();

      onStopDelayedCall.pause();
      onStop && onStop(self);
    },
        update = function update() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX),
          dy = self.deltaY = _getAbsoluteMax(deltaY),
          changedX = Math.abs(dx) >= tolerance,
          changedY = Math.abs(dy) >= tolerance;

      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.

      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }

      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }

      if (moved || dragged) {
        onMove && onMove(self);

        if (dragged) {
          onDragStart && dragged === 1 && onDragStart(self);
          onDrag && onDrag(self);
          dragged = 0;
        }

        moved = false;
      }

      locked && !(locked = false) && onLockAxis && onLockAxis(self);

      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }

      id = 0;
    },
        onDelta = function onDelta(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;

      self._vx.update(x);

      self._vy.update(y);

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }

      if (axis !== "y") {
        deltaX[2] += x;

        self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.

      }

      if (axis !== "x") {
        deltaY[2] += y;

        self._vy.update(y, true);
      }

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        _onDrag = function _onDrag(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y,
          isDragging = self.isDragging;
      self.x = x;
      self.y = y;

      if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
        dragged = isDragging ? 2 : 1; // dragged: 0 = not dragging, 1 = first drag, 2 = normal drag

        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
      }
    },
        _onPress = self.onPress = function (e) {
      if (_ignoreCheck(e, 1) || e && e.button) {
        return;
      }

      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.

      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;

      self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.


      self._vy.reset();

      _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);

      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    },
        _onRelease = self.onRelease = function (e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);

      var isTrackingDrag = !isNaN(self.y - self.startY),
          wasDragging = self.isDragging,
          isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
          // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
      eventData = _getEvent(e);

      if (!isDragNotClick && isTrackingDrag) {
        self._vx.reset();

        self._vy.reset(); //if (preventDefault && allowClicks && self.isPressed) { // check isPressed because in a rare edge case, the inputObserver in ScrollTrigger may stopPropagation() on the press/drag, so the onRelease may get fired without the onPress/onDrag ever getting called, thus it could trigger a click to occur on a link after scroll-dragging it.


        if (preventDefault && allowClicks) {
          gsap.delayedCall(0.08, function () {
            // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
            if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                //some browsers (like mobile Safari) don't properly trigger the click event
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }

      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
      dragged && update(); // in case debouncing, we don't want onDrag to fire AFTER onDragEnd().

      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, isDragNotClick);
    },
        _onGestureStart = function _onGestureStart(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    },
        _onGestureEnd = function _onGestureEnd() {
      return (self.isGesturing = false) || onGestureEnd(self);
    },
        onScroll = function onScroll(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = scrollFuncX(),
          y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    },
        _onWheel = function _onWheel(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    },
        _onMove = function _onMove(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      onStop && onStopDelayedCall.restart(true);
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    },
        _onHover = function _onHover(e) {
      self.event = e;
      onHover(self);
    },
        _onHoverEnd = function _onHoverEnd(e) {
      self.event = e;
      onHoverEnd(self);
    },
        _onClick = function _onClick(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };

    onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;

    _context(this);

    self.enable = function (e) {
      if (!self.isEnabled) {
        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);

        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener(target, _eventTypes[0], _onPress, passive, capture);

          _addListener(ownerDoc, _eventTypes[2], _onRelease);

          _addListener(ownerDoc, _eventTypes[3], _onRelease);

          allowClicks && _addListener(target, "click", clickCapture, true, true);
          onClick && _addListener(target, "click", _onClick);
          onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener(target, _pointerType + "move", _onMove);
        }

        self.isEnabled = true;
        self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;

        self._vx.reset();

        self._vy.reset();

        scrollX = scrollFuncX();
        scrollY = scrollFuncY();
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }

      return self;
    };

    self.disable = function () {
      if (self.isEnabled) {
        // only remove the _onScroll listener if there aren't any others that rely on the functionality.
        _observers.filter(function (o) {
          return o !== self && _isViewport(o.target);
        }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        if (self.isPressed) {
          self._vx.reset();

          self._vy.reset();

          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }

        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

        _removeListener(target, "wheel", _onWheel, capture);

        _removeListener(target, _eventTypes[0], _onPress, capture);

        _removeListener(ownerDoc, _eventTypes[2], _onRelease);

        _removeListener(ownerDoc, _eventTypes[3], _onRelease);

        _removeListener(target, "click", clickCapture, true);

        _removeListener(target, "click", _onClick);

        _removeListener(ownerDoc, "gesturestart", _onGestureStart);

        _removeListener(ownerDoc, "gestureend", _onGestureEnd);

        _removeListener(target, _pointerType + "enter", _onHover);

        _removeListener(target, _pointerType + "leave", _onHoverEnd);

        _removeListener(target, _pointerType + "move", _onMove);

        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };

    self.kill = self.revert = function () {
      self.disable();

      var i = _observers.indexOf(self);

      i >= 0 && _observers.splice(i, 1);
      _normalizer === self && (_normalizer = 0);
    };

    _observers.push(self);

    isNormalizer && _isViewport(target) && (_normalizer = self);
    self.enable(event);
  };

  _createClass(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);

  return Observer;
}();
Observer.version = "3.12.7";

Observer.create = function (vars) {
  return new Observer(vars);
};

Observer.register = _initCore;

Observer.getAll = function () {
  return _observers.slice();
};

Observer.getById = function (id) {
  return _observers.filter(function (o) {
    return o.vars.id === id;
  })[0];
};

_getGSAP() && gsap.registerPlugin(Observer);


/***/ }),

/***/ "./node_modules/gsap/ScrollTrigger.js":
/*!********************************************!*\
  !*** ./node_modules/gsap/ScrollTrigger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollTrigger: () => (/* binding */ ScrollTrigger),
/* harmony export */   "default": () => (/* binding */ ScrollTrigger)
/* harmony export */ });
/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer.js */ "./node_modules/gsap/Observer.js");
/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _normalizer,
    _ignoreMobileResize,
    _baseScreenHeight,
    _baseScreenWidth,
    _fixIOSBug,
    _context,
    _scrollRestoration,
    _div100vh,
    _100vh,
    _isReverted,
    _clampingMax,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 0,
    _parseClamp = function _parseClamp(value, type, self) {
  var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
  self["_" + type + "Clamp"] = clamp;
  return clamp ? value.substr(6, value.length - 7) : value;
},
    _keepClamp = function _keepClamp(value, clamp) {
  return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
},
    _rafBugFix = function _rafBugFix() {
  return _enabled && requestAnimationFrame(_rafBugFix);
},
    // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
_pointerDownHandler = function _pointerDownHandler() {
  return _pointerIsDown = 1;
},
    _pointerUpHandler = function _pointerUpHandler() {
  return _pointerIsDown = 0;
},
    _passThrough = function _passThrough(v) {
  return v;
},
    _round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getViewportDimension = function _getViewportDimension(dimensionProperty) {
  return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _100vh;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
  var d = _ref.d,
      d2 = _ref.d2,
      a = _ref.a;
  return (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref2) {
  var s = _ref2.s,
      d2 = _ref2.d2,
      d = _ref2.d,
      a = _ref2.a;
  return Math.max(0, (s = "scroll" + d2) && (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _endAnimation = function _endAnimation(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
},
    _callback = function _callback(self, func) {
  if (self.enabled) {
    var result = self._ctx ? self._ctx.add(function () {
      return func(self);
    }) : func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
},
    _abs = Math.abs,
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
  var position = _getComputedStyle(element).position;

  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
  var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;

  for (p in labels) {
    a.push(labels[p] / duration);
  }

  return a;
},
    _getClosestLabel = function _getClosestLabel(animation) {
  return function (value) {
    return gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
},
    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
  var snap = gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
    return a - b;
  });
  return a ? function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var i;

    if (!direction) {
      return snap(value);
    }

    if (direction > 0) {
      value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }

      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;

      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }

    return a[0];
  } : function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
},
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
  return function (value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _wheelListener = function _wheelListener(func, el, scrollFunc) {
  scrollFunc = scrollFunc && scrollFunc.wheelHandler;

  if (scrollFunc) {
    func(el, "wheel", scrollFunc);
    func(el, "touchmove", scrollFunc);
  }
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      fontSize = _ref4.fontSize,
      indent = _ref4.indent,
      fontWeight = _ref4.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _rafID,
    _sync = function _sync() {
  return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
},
    _onScroll = function _onScroll() {
  // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
  if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
    // if the user is dragging the scrollbar, allow it.
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;

    if (_normalizer) {
      _rafID || (_rafID = requestAnimationFrame(_updateAll));
    } else {
      _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110

    }

    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
},
    _setBaseDimensions = function _setBaseDimensions() {
  _baseScreenWidth = _win.innerWidth;
  _baseScreenHeight = _win.innerHeight;
},
    _onResize = function _onResize(force) {
  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
  (force === true || !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25)) && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (trigger && (!media || trigger._ctx === media)) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert(true, true);
      }
    }
  }

  _isReverted = true;
  media && _revertRecorded(media);
  media || _dispatch("revert");
},
    _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
  // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
  (force || !_refreshingAll) && _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
  });
  _isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
},
    _refreshingAll,
    _refreshID = 0,
    _queueRefreshID,
    _queueRefreshAll = function _queueRefreshAll() {
  // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
  if (_queueRefreshID !== _refreshID) {
    var id = _queueRefreshID = _refreshID;
    requestAnimationFrame(function () {
      return id === _refreshID && _refreshAll(true);
    });
  }
},
    _refresh100vh = function _refresh100vh() {
  _body.appendChild(_div100vh);

  _100vh = !_normalizer && _div100vh.offsetHeight || _win.innerHeight;

  _body.removeChild(_div100vh);
},
    _hideAllMarkers = function _hideAllMarkers(hide) {
  return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (el) {
    return el.style.display = hide ? "none" : "block";
  });
},
    _refreshAll = function _refreshAll(force, skipRevert) {
  _docEl = _doc.documentElement; // some frameworks like Astro may cache the <body> and replace it during routing, so we'll just re-record the _docEl and _body for safety (otherwise, the markers may not get added properly).

  _body = _doc.body;
  _root = [_win, _doc, _docEl, _body];

  if (_lastScrollTime && !force && !_isReverted) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  _refresh100vh();

  _refreshingAll = ScrollTrigger.isRefreshing = true;

  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
  }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away


  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    if (_isFunction(obj)) {
      obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes

      obj(0);
    }
  });

  _triggers.slice(0).forEach(function (t) {
    return t.refresh();
  }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.


  _isReverted = false;

  _triggers.forEach(function (t) {
    // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
    if (t._subPinOffset && t.pin) {
      var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
          original = t.pin[prop];
      t.revert(true, 1);
      t.adjustPinSpacing(t.pin[prop] - original);
      t.refresh();
    }
  });

  _clampingMax = 1; // pinSpacing might be propping a page open, thus when we .setPositions() to clamp a ScrollTrigger's end we should leave the pinSpacing alone. That's what this flag is for.

  _hideAllMarkers(true);

  _triggers.forEach(function (t) {
    // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
    var max = _maxScroll(t.scroller, t._dir),
        endClamp = t.vars.end === "max" || t._endClamp && t.end > max,
        startClamp = t._startClamp && t.start >= max;

    (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
  });

  _hideAllMarkers(false);

  _clampingMax = 0;
  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    if (_isFunction(obj)) {
      obj.smooth && requestAnimationFrame(function () {
        return obj.target.style.scrollBehavior = "smooth";
      });
      obj.rec && obj(obj.rec);
    }
  });

  _clearScrollMemory(_scrollRestoration, 1);

  _resizeDelay.pause();

  _refreshID++;
  _refreshingAll = 2;

  _updateAll(2);

  _triggers.forEach(function (t) {
    return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
  });

  _refreshingAll = ScrollTrigger.isRefreshing = false;

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _primary,
    _updateAll = function _updateAll(force) {
  if (force === 2 || !_refreshingAll && !_isReverted) {
    // _isReverted could be true if, for example, a matchMedia() is in the process of executing. We don't want to update during the time everything is reverted.
    ScrollTrigger.isUpdating = true;
    _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.

    var l = _triggers.length,
        time = _getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();

    _direction = _lastScroll > scroll ? -1 : 1;
    _refreshingAll || (_lastScroll = scroll);

    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;

        _dispatch("scrollEnd");
      }

      _time2 = _time1;
      _time1 = time;
    }

    if (_direction < 0) {
      _i = l;

      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }

      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }

    ScrollTrigger.isUpdating = false;
  }

  _rafID = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  var cache = pin._gsap;

  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin._gsap.swappedIn) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }

  pin._gsap.swappedIn = false;
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (!pin._gsap.swappedIn) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.flexBasis = cs.flexBasis || "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];

    if (pin.parentNode !== spacer) {
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }

    pin._gsap.swappedIn = true;
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
  containerAnimation && containerAnimation.seek(0);
  isNaN(value) || (value = +value); // convert a string number like "45" to an actual number

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));
    var offsets = (value || "0").split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
    element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger, self) || _body;
    bounds = _getBounds(element) || {};

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else {
    containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
    markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (clampZeroProp) {
    self[clampZeroProp] = value || -0.001;
    value < 0 && (value = 0);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    p1 = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }

  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
},
    _prefixExp = /(webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }

      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }

    gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
},
    _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
  var last1 = initialValue,
      last2 = last1;
  return function (value) {
    var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.

    if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
      // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
      value = current;
      onInterrupt && onInterrupt();
    }

    last2 = last1;
    last1 = Math.round(value);
    return last1;
  };
},
    _shiftMarker = function _shiftMarker(marker, direction, value) {
  var vars = {};
  vars[direction.p] = "+=" + value;
  gsap.set(marker, vars);
},
    // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    initialValue = initialValue || getScroll();

    var checkForInterruption = _interruptionTracker(getScroll, initialValue, function () {
      tween.kill();
      getTween.tween = 0;
    });

    change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.

    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    vars[prop] = scrollTo;
    vars.inherit = false;
    vars.modifiers = modifiers;

    modifiers[prop] = function () {
      return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
    };

    vars.onUpdate = function () {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
      getTween.tween && _updateAll(); // if it was interrupted/killed, like in a context.revert(), don't force an updateAll()
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;

  getScroll.wheelHandler = function () {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };

  _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.


  ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
  return getTween;
};

var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");

    _context(this);

    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        pinSpacer = _vars.pinSpacer,
        containerAnimation = _vars.containerAnimation,
        fastScrollEnd = _vars.fastScrollEnd,
        preventOverlaps = _vars.preventOverlaps,
        direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical,
        isToggle = !scrub && scrub !== 0,
        scroller = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.scroller || _win),
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = ("pinType" in vars ? vars.pinType : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "pinType") || isViewport && "fixed") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        lastSnap = 0,
        lastRefresh = 0,
        prevProgress = 0,
        scrollFunc = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
        tweenTo,
        pinCache,
        snapFunc,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        executingOnRefresh,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        pinMoves,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevScroll,
        prevAnimProgress,
        caMarkerSetter,
        customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.


    self._startClamp = self._endClamp = false;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;

    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
    }

    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      left: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    self.scrubDuration = function (value) {
      scrubSmooth = _isNumber(value) && value;

      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          inherit: false,
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };

    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://gsap.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010

      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    if (snap) {
      // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }

      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (o) {
        return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
      }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters


      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        var scroll = scrollFunc(),
            refreshedRecently = _getTime() - lastRefresh < 500,
            tween = tweenTo.tween;

        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change,
              totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
              velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
              naturalEnd = progress + (snap.inertia === false ? 0 : change1),
              endValue,
              endScroll,
              _snap = snap,
              onStart = _snap.onStart,
              _onInterrupt = _snap.onInterrupt,
              _onComplete = _snap.onComplete;
          endValue = snapFunc(naturalEnd, self);
          _isNumber(endValue) || (endValue = naturalEnd); // in case the function didn't return a number, fall back to using the naturalEnd

          endScroll = Math.max(0, Math.round(start + endValue * change));

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            if (snap.inertia === false) {
              change1 = endValue - progress;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();

                if (animation && !isToggle) {
                  // the resolution of the scrollbar is limited, so we should correct the scrubbed animation's playhead at the end to match EXACTLY where it was supposed to snap
                  scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                }

                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.

    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)

      self.pin = pin;
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }

        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];

      var content = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "content") || scroller);

      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));

      if (!useFixedPosition && !(_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.length && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
          oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }

    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };

    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };

    self.revert = function (revert, temp) {
      if (!temp) {
        return self.kill(true);
      } // for compatibility with gsap.context() and gsap.matchMedia() which call revert()


      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== self.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });

        if (r) {
          _refreshing = self;
          self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
        }

        if (pin && (!pinReparent || !self.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }

        r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.

        _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.

        self.isReverted = r;
      }
    };

    self.refresh = function (soft, force, position, pinOffset) {
      // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = self;

      if (tweenTo.tween && !position) {
        // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }

      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.revert({
        kill: false
      }).invalidate();
      self.isReverted || self.revert(true, true);
      self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
          isFirstRefresh = change <= 0.01,
          offset = 0,
          otherPinOffset = pinOffset || 0,
          parsedEnd = _isObject(position) ? position.end : vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
          pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.pinnedContainer, self),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll,
          initted,
          revertedPins,
          forcedOverflow,
          markerStartOffset,
          markerEndOffset;

      if (markers && _isObject(position)) {
        // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
        markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
      }

      while (i-- > 0) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;

        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert(true, true);
        }

        if (curTrigger !== _triggers[i]) {
          // in case it got removed.
          triggerIndex--;
          i--;
        }
      }

      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      parsedStart = _parseClamp(parsedStart, "start", self);
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      parsedEnd = _parseClamp(parsedEnd, "end", self);
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);

          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }

          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._startClamp && (self._startClamp += offset);

      if (self._endClamp && !_refreshingAll) {
        self._endClamp = end || -0.001;
        end = Math.min(end, _maxScroll(scroller, direction));
      }

      change = end - start || (start -= 0.01) && 0.001;

      if (isFirstRefresh) {
        // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
        prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
      }

      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical;
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;

        if (!max && end > 1) {
          // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://gsap.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
          forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };

          if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, isVertical ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;

          if (i) {
            spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

            spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }

          _setState(spacerState);

          if (pinnedContainer) {
            // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
            _triggers.forEach(function (t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }

          useFixedPosition && scrollFunc(prevScroll);
        } else {
          i = _getSize(pin, direction);
          i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);

          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }

        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false, true);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity

      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }

      self.revert(false, true);
      lastRefresh = _getTime();

      if (snapDelayedCall) {
        lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
        // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.

        snapDelayedCall.restart(true);
      }

      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      scrubTween && scrubTween.invalidate();

      if (!isNaN(markerStartOffset)) {
        // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
        markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);

        _shiftMarker(markerStartTrigger, direction, markerStartOffset);

        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));

        _shiftMarker(markerEndTrigger, direction, markerEndOffset);

        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }

      isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.

      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
        executingOnRefresh = true;
        onRefresh(self);
        executingOnRefresh = false;
      }
    };

    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);

      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };

    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };

    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
          a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

      return (_isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function (t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };

    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }

      var scroll = _refreshingAll === true ? prevScroll : self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled,
          isAtMax,
          isTakingAction;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      if (anticipatePin && pin && !_refreshing && !_startup && _lastScrollTime) {
        if (!clipped && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.0001;
        } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.9999;
        }
      }

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }

        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.

            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              // legacy support (courtesy), before 3.10.0
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                _reparent(pin, _body, bounds.top + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _offset : 0) + _px, bounds.left + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }

            _setState(isActive || isAtMax ? pinActiveState : pinState);

            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }

          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);

            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }

      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };

    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        isViewport || _addListener(scroller, "scroll", _onScroll);
        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }

        refresh !== false && self.refresh();
      }
    };

    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };

    self.setPositions = function (newStart, newEnd, keepClamp, pinOffset) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (containerAnimation) {
        // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
        var st = containerAnimation.scrollTrigger,
            duration = containerAnimation.duration(),
            _change = st.end - st.start;

        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }

      self.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset);
      self.update();
    };

    self.adjustPinSpacing = function (amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;

        _setState(spacerState);
      }
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert(true, true);
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          isViewport || _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;

      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });

      i || _refreshingAll || (self.scroll.rec = 0);

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);

      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;

        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });

        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }

      vars.onKill && vars.onKill(self);
    };

    _triggers.push(self);

    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);

    if (animation && animation.add && !change) {
      // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
      var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().

      self.update = function () {
        self.update = updateFunc;
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++; // otherwise a cached scroll position may get used in the refresh() in a very rare scenario, like if ScrollTriggers are created inside a DOMContentLoaded event and the queued requestAnimationFrame() fires beforehand. See https://gsap.com/community/forums/topic/41267-scrolltrigger-breaks-on-refresh-when-using-domcontentloaded/

        start || end || self.refresh();
      };

      gsap.delayedCall(0.01, self.update);
      change = 0.01;
      start = end = 0;
    } else {
      self.refresh();
    }

    pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();
      _windowExists() && window.document && ScrollTrigger.enable();
      _coreInitted = _enabled;
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }

    return _defaults;
  };

  ScrollTrigger.disable = function disable(reset, kill) {
    _enabled = 0;

    _triggers.forEach(function (trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });

    _removeListener(_win, "wheel", _onScroll);

    _removeListener(_doc, "scroll", _onScroll);

    clearInterval(_syncInterval);

    _removeListener(_doc, "touchcancel", _passThrough);

    _removeListener(_body, "touchstart", _passThrough);

    _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

    _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

    _resizeDelay.kill();

    _iterateAutoRefresh(_removeListener);

    for (var i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);

      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
    }
  };

  ScrollTrigger.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;

    if (gsap) {
      _toArray = gsap.utils.toArray;
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || _passThrough;
      _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
      _scrollRestoration = _win.history.scrollRestoration || "auto";
      _lastScroll = _win.pageYOffset || 0;
      gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

      if (_body) {
        _enabled = 1;
        _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.

        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";

        _refresh100vh();

        _rafBugFix();

        _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

        ScrollTrigger.isTouch = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch;
        _fixIOSBug = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503

        _ignoreMobileResize = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch === 1;

        _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.


        _root = [_win, _doc, _docEl, _body];

        if (gsap.matchMedia) {
          ScrollTrigger.matchMedia = function (vars) {
            var mm = gsap.matchMedia(),
                p;

            for (p in vars) {
              mm.add(p, vars[p]);
            }

            return mm;
          };

          gsap.addEventListener("matchMediaInit", function () {
            return _revertAll();
          });
          gsap.addEventListener("matchMediaRevert", function () {
            return _revertRecorded();
          });
          gsap.addEventListener("matchMedia", function () {
            _refreshAll(0, 1);

            _dispatch("matchMedia");
          });
          gsap.matchMedia().add("(orientation: portrait)", function () {
            // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
            _setBaseDimensions();

            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }

        _setBaseDimensions();

        _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


        var bodyHasStyle = _body.hasAttribute("style"),
            bodyStyle = _body.style,
            border = bodyStyle.borderTopStyle,
            AnimationProto = gsap.core.Animation.prototype,
            bounds,
            i;

        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)

        bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

        bounds = _getBounds(_body);
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.m = Math.round(bounds.top + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.m = Math.round(bounds.left + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");

        if (!bodyHasStyle) {
          // SSR frameworks like Next.js complain if this attribute gets added.
          _body.setAttribute("style", ""); // it's not enough to just removeAttribute() - we must first set it to empty, otherwise Next.js complains.


          _body.removeAttribute("style");
        } // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.


        _syncInterval = setInterval(_sync, 250);
        gsap.delayedCall(0.5, function () {
          return _startup = 0;
        });

        _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


        _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://gsap.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


        _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

        _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

        _transformProp = gsap.utils.checkPrefix("transform");

        _stateProps.push(_transformProp);

        _coreInitted = _getTime();
        _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function () {
          var w = _win.innerWidth,
              h = _win.innerHeight;

          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];

        _iterateAutoRefresh(_addListener);

        _triggers.forEach(function (trigger) {
          return trigger.enable(0, 1);
        });

        for (i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);

          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
        }
      }
    }
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(target),
        i = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.indexOf(t),
        isViewport = _isViewport(t);

    if (~i) {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.splice(i, isViewport ? 6 : 2);
    }

    if (vars) {
      isViewport ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(t, vars);
    }
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function (t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };

  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element) : element).getBoundingClientRect(),
        offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };

  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element));
    var bounds = element.getBoundingClientRect(),
        size = bounds[horizontal ? _width : _height],
        offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };

  ScrollTrigger.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function (t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });

    if (allowListeners !== true) {
      var listeners = _listeners.killAll || [];
      _listeners = {};
      listeners.forEach(function (f) {
        return f();
      });
    }
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.12.7";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);

      i >= 0 && _savedStyles.splice(i, 5);

      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
    }
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize(true) : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};

ScrollTrigger.update = function (force) {
  return ++_Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache && _updateAll(force === true ? 2 : 0);
};

ScrollTrigger.clearScrollMemory = _clearScrollMemory;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element), horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.


ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.snapDirectional = _snapDirectional;

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).


var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
},
    _allowNativePanning = function _allowNativePanning(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
  }

  target === _docEl && _allowNativePanning(_body, direction);
},
    _overflow = {
  auto: 1,
  scroll: 1
},
    _nestedScroll = function _nestedScroll(_ref5) {
  var event = _ref5.event,
      target = _ref5.target,
      axis = _ref5.axis;

  var node = (event.changedTouches ? event.changedTouches[0] : event).target,
      cache = node._gsap || gsap.core.getCache(node),
      time = _getTime(),
      cs;

  if (!cache._isScrollT || time - cache._isScrollT > 2000) {
    // cache for 2 seconds to improve performance.
    while (node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
      node = node.parentNode;
    }

    cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }

  if (cache._isScroll || axis === "x") {
    event.stopPropagation();
    event._gsapAllow = true;
  }
},
    // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
  return _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.create({
    target: target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type: type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, true);
    }
  });
},
    _inputExp = /(input|label|select|textarea)/i,
    _inputIsFocused,
    _captureInputs = function _captureInputs(e) {
  var isInput = _inputExp.test(e.target.tagName);

  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
},
    _getScrollNormalizer = function _getScrollNormalizer(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";

  var _vars2 = vars,
      normalizeScrollX = _vars2.normalizeScrollX,
      momentum = _vars2.momentum,
      allowNestedScroll = _vars2.allowNestedScroll,
      onRelease = _vars2.onRelease,
      self,
      maxY,
      target = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.target) || _docEl,
      smoother = gsap.core.globals().ScrollSmoother,
      smootherInstance = smoother && smoother.get(),
      content = _fixIOSBug && (vars.content && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()),
      scrollFuncY = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      scrollFuncX = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal),
      scale = 1,
      initialScale = (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth,
      wheelRefresh = 0,
      resolveMomentumDuration = _isFunction(momentum) ? function () {
    return momentum(self);
  } : function () {
    return momentum || 2.8;
  },
      lastRefreshID,
      skipTouchMove,
      inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
      resumeTouchMove = function resumeTouchMove() {
    return skipTouchMove = false;
  },
      scrollClampX = _passThrough,
      scrollClampY = _passThrough,
      updateClamps = function updateClamps() {
    maxY = _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
    scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)));
    lastRefreshID = _refreshID;
  },
      removeContentOffset = function removeContentOffset() {
    content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
    scrollFuncY.offset = scrollFuncY.cacheID = 0;
  },
      ignoreDrag = function ignoreDrag() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);

      var offset = _round(self.deltaY / 2),
          scroll = scrollClampY(scrollFuncY.v - offset);

      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;

        var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);

        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
        content._gsap.y = y + "px";
        scrollFuncY.cacheID = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache;

        _updateAll();
      }

      return true;
    }

    scrollFuncY.offset && removeContentOffset();
    skipTouchMove = true;
  },
      tween,
      startScrollX,
      startScrollY,
      onStopDelayedCall,
      onResize = function onResize() {
    // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
    updateClamps();

    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };

  content && gsap.set(content, {
    y: "+=0"
  }); // to ensure there's a cache (element._gsap)

  vars.ignoreCheck = function (e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };

  vars.onPress = function () {
    skipTouchMove = false;
    var prevScale = scale;
    scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };

  vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
    scrollFuncY.offset && removeContentOffset();

    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++; // make sure we're pulling the non-cached value
      // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)

      var dur = resolveMomentumDuration(),
          currentScroll,
          endScroll;

      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.

        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }

      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)

      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);

      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
        gsap.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }

    onRelease && onRelease(self);
  };

  vars.onWheel = function () {
    tween._ts && tween.pause();

    if (_getTime() - wheelRefresh > 1000) {
      // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
      lastRefreshID = 0;
      wheelRefresh = _getTime();
    }
  };

  vars.onChange = function (self, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.

    if (dy) {
      scrollFuncY.offset && removeContentOffset();
      var isTouch = yArray[2] === dy,
          y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1],
          yClamped = scrollClampY(y);
      isTouch && y !== yClamped && (startScrollY += yClamped - y);
      scrollFuncY(yClamped);
    }

    (dy || dx) && _updateAll();
  };

  vars.onEnable = function () {
    _allowNativePanning(target, normalizeScrollX ? false : "x");

    ScrollTrigger.addEventListener("refresh", onResize);

    _addListener(_win, "resize", onResize);

    if (scrollFuncY.smooth) {
      scrollFuncY.target.style.scrollBehavior = "auto";
      scrollFuncY.smooth = scrollFuncX.smooth = false;
    }

    inputObserver.enable();
  };

  vars.onDisable = function () {
    _allowNativePanning(target, true);

    _removeListener(_win, "resize", onResize);

    ScrollTrigger.removeEventListener("refresh", onResize);
    inputObserver.kill();
  };

  vars.lockAxis = vars.lockAxis !== false;
  self = new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
  self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.

  _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.

  _fixIOSBug && gsap.ticker.add(_passThrough); // prevent the ticker from sleeping

  onStopDelayedCall = self._dc;
  tween = gsap.to(self, {
    ease: "power4",
    paused: true,
    inherit: false,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function () {
        return tween.pause();
      })
    },
    onUpdate: _updateAll,
    onComplete: onStopDelayedCall.vars.onComplete
  }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.

  return self;
};

ScrollTrigger.sort = function (func) {
  if (_isFunction(func)) {
    return _triggers.sort(func);
  }

  var scroll = _win.pageYOffset || 0;
  ScrollTrigger.getAll().forEach(function (t) {
    return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win.innerHeight;
  });
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
  }); // anything with a containerAnimation should refresh last.
};

ScrollTrigger.observe = function (vars) {
  return new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
};

ScrollTrigger.normalizeScroll = function (vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }

  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }

  if (vars === false) {
    _normalizer && _normalizer.kill();
    _normalizer = vars;
    return;
  }

  var normalizer = vars instanceof _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};

ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._getVelocityProp,
  _inputObserver: _inputObserver,
  _scrollers: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers,
  _proxies: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   Back: () => (/* binding */ Back),
/* harmony export */   Bounce: () => (/* binding */ Bounce),
/* harmony export */   Circ: () => (/* binding */ Circ),
/* harmony export */   Cubic: () => (/* binding */ Cubic),
/* harmony export */   Elastic: () => (/* binding */ Elastic),
/* harmony export */   Expo: () => (/* binding */ Expo),
/* harmony export */   GSCache: () => (/* binding */ GSCache),
/* harmony export */   Linear: () => (/* binding */ Linear),
/* harmony export */   Power0: () => (/* binding */ Power0),
/* harmony export */   Power1: () => (/* binding */ Power1),
/* harmony export */   Power2: () => (/* binding */ Power2),
/* harmony export */   Power3: () => (/* binding */ Power3),
/* harmony export */   Power4: () => (/* binding */ Power4),
/* harmony export */   PropTween: () => (/* binding */ PropTween),
/* harmony export */   Quad: () => (/* binding */ Quad),
/* harmony export */   Quart: () => (/* binding */ Quart),
/* harmony export */   Quint: () => (/* binding */ Quint),
/* harmony export */   Sine: () => (/* binding */ Sine),
/* harmony export */   SteppedEase: () => (/* binding */ SteppedEase),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   TimelineLite: () => (/* binding */ Timeline),
/* harmony export */   TimelineMax: () => (/* binding */ Timeline),
/* harmony export */   Tween: () => (/* binding */ Tween),
/* harmony export */   TweenLite: () => (/* binding */ Tween),
/* harmony export */   TweenMax: () => (/* binding */ Tween),
/* harmony export */   _checkPlugin: () => (/* binding */ _checkPlugin),
/* harmony export */   _colorExp: () => (/* binding */ _colorExp),
/* harmony export */   _colorStringFilter: () => (/* binding */ _colorStringFilter),
/* harmony export */   _config: () => (/* binding */ _config),
/* harmony export */   _forEachName: () => (/* binding */ _forEachName),
/* harmony export */   _getCache: () => (/* binding */ _getCache),
/* harmony export */   _getProperty: () => (/* binding */ _getProperty),
/* harmony export */   _getSetter: () => (/* binding */ _getSetter),
/* harmony export */   _isString: () => (/* binding */ _isString),
/* harmony export */   _isUndefined: () => (/* binding */ _isUndefined),
/* harmony export */   _missingPlugin: () => (/* binding */ _missingPlugin),
/* harmony export */   _numExp: () => (/* binding */ _numExp),
/* harmony export */   _numWithUnitExp: () => (/* binding */ _numWithUnitExp),
/* harmony export */   _parseRelative: () => (/* binding */ _parseRelative),
/* harmony export */   _plugins: () => (/* binding */ _plugins),
/* harmony export */   _relExp: () => (/* binding */ _relExp),
/* harmony export */   _removeLinkedListItem: () => (/* binding */ _removeLinkedListItem),
/* harmony export */   _renderComplexString: () => (/* binding */ _renderComplexString),
/* harmony export */   _replaceRandom: () => (/* binding */ _replaceRandom),
/* harmony export */   _round: () => (/* binding */ _round),
/* harmony export */   _roundModifier: () => (/* binding */ _roundModifier),
/* harmony export */   _setDefaults: () => (/* binding */ _setDefaults),
/* harmony export */   _sortPropTweensByPriority: () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   _ticker: () => (/* binding */ _ticker),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   distribute: () => (/* binding */ distribute),
/* harmony export */   getUnit: () => (/* binding */ getUnit),
/* harmony export */   gsap: () => (/* binding */ gsap),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   mapRange: () => (/* binding */ mapRange),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   selector: () => (/* binding */ selector),
/* harmony export */   shuffle: () => (/* binding */ shuffle),
/* harmony export */   snap: () => (/* binding */ snap),
/* harmony export */   splitColor: () => (/* binding */ splitColor),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   unitize: () => (/* binding */ unitize),
/* harmony export */   wrap: () => (/* binding */ wrap),
/* harmony export */   wrapYoyo: () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _reverting,
    _context,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
},
    _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
  _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = (Math.random() * i) | 0, v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt < l && wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin(config) {
  if (!config) return;
  config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  if (_windowExists() || config.headless) {
    // edge case: some build tools may pass in a null/undefined value
    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config);
  }
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _registerPluginQueue.forEach(_createPlugin);
        }

        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
}); // previously 2 ** (10 * (p - 1)) but that doesn't end up with the value quite at the right spot so we do a blended ease to ensure it lands where it should perfectly.


_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context) {
      this._ctx = _context;

      _context.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    } // possible future addition - if an animation is removed from its parent and then .restart() or .play() or .resume() is called, perhaps we should force it back into the globalTimeline but be careful because what if it's already at its end? We don't want it to just persist forever and not get released for GC.
    // !this.parent && !value && this._tTime < this._tDur && this !== _globalTimeline && _globalTimeline.add(this);


    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting;
    _reverting = config;

    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }

    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }

    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    this._dur || (this._zTime = -_tinyNum); // ensures onComplete fires on a zero-duration animation that gets restarted.

    return this;
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)

          iteration = ~~prevIteration;

          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    child.parent === this && _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate(soft);
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this, soft);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time, tTime) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function () {
          return _callback(tween, "onUpdate");
        },
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

        tween._startAt._sat = tween; // used in globalTime()

        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
      // this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)

          iteration = ~~prevIteration;

          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          } else if (time > dur) {
            time = dur;
          }
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
            // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
      return this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch = function _dispatch(type) {
  return (_listeners[type] || _emptyArray).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c, function (func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;

    _dispatch("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }

    var self = this,
        f = function f() {
      var prev = _context,
          prevSelector = self.selector,
          result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction ? f(self, function (func) {
      return self.add(null, func);
    }) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      (function () {
        var tweens = _this4.getTweens(),
            i = _this4.data.length,
            t;

        while (i--) {
          // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
          t = _this4.data[i];

          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort


        tweens.map(function (t) {
          return {
            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function (o) {
          return o.t.revert(revert);
        }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

        i = _this4.data.length;

        while (i--) {
          // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
          t = _this4.data[i];

          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }

        _this4._r.forEach(function (f) {
          return f(revert, _this4);
        });

        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.length;

      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  } // killWithCleanup() {
  // 	this.kill();
  // 	this._r.forEach(f => f(false, this));
  // }
  ;

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
    _context && _context.data.push(this);
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context, function (f) {
      return context.add(null, f);
    });
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _setDefaults2;

    var tween = gsap.to(target, _setDefaults((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);

        toAdd._ctx = _context;
      }

      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.12.7";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Back: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   Bounce: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   CSSPlugin: () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   Circ: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   Cubic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   Elastic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   Expo: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   Linear: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   Power0: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   Power1: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   Power2: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   Power3: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   Power4: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   Quad: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   Quart: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   Quint: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   Sine: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   SteppedEase: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   Strong: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   TimelineLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   TimelineMax: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   TweenLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   TweenMax: () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   gsap: () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./node_modules/lenis/dist/lenis.mjs":
/*!*******************************************!*\
  !*** ./node_modules/lenis/dist/lenis.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lenis)
/* harmony export */ });
function clamp(t,i,e){return Math.max(t,Math.min(i,e))}class Animate{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.duration=0,this.currentTime=0}advance(t){var i;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=clamp(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function damp(t,i,e,s){return function lerp(t,i,e){return(1-e)*t+e*i}(t,i,1-Math.exp(-e*s))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),null===(i=this.onUpdate)||void 0===i||i.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,i,{lerp:e,duration:s,easing:o,onStart:n,onUpdate:l}){this.from=this.value=t,this.to=i,this.lerp=e,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,null==n||n(),this.onUpdate=l}}class Dimensions{constructor({wrapper:t,content:i,autoResize:e=!0,debounce:s=250}={}){this.width=0,this.height=0,this.scrollWidth=0,this.scrollHeight=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):this.wrapper instanceof HTMLElement&&(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):this.wrapper instanceof HTMLElement&&(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},this.wrapper=t,this.content=i,e&&(this.debouncedResize=function debounce(t,i){let e;return function(){let s=arguments,o=this;clearTimeout(e),e=setTimeout((function(){t.apply(o,s)}),i)}}(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,i;null===(t=this.wrapperResizeObserver)||void 0===t||t.disconnect(),null===(i=this.contentResizeObserver)||void 0===i||i.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class Emitter{constructor(){this.events={}}emit(t,...i){let e=this.events[t]||[];for(let t=0,s=e.length;t<s;t++)e[t](...i)}on(t,i){var e;return(null===(e=this.events[t])||void 0===e?void 0:e.push(i))||(this.events[t]=[i]),()=>{var e;this.events[t]=null===(e=this.events[t])||void 0===e?void 0:e.filter((t=>i!==t))}}off(t,i){var e;this.events[t]=null===(e=this.events[t])||void 0===e?void 0:e.filter((t=>i!==t))}destroy(){this.events={}}}const t=100/6;class VirtualScroll{constructor(i,{wheelMultiplier:e=1,touchMultiplier:s=1}){this.lastDelta={x:0,y:0},this.windowWidth=0,this.windowHeight=0,this.onTouchStart=t=>{const{clientX:i,clientY:e}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=i,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})},this.onTouchMove=t=>{var i,e,s,o;const{clientX:n,clientY:l}=t.targetTouches?t.targetTouches[0]:t,r=-(n-(null!==(e=null===(i=this.touchStart)||void 0===i?void 0:i.x)&&void 0!==e?e:0))*this.touchMultiplier,h=-(l-(null!==(o=null===(s=this.touchStart)||void 0===s?void 0:s.y)&&void 0!==o?o:0))*this.touchMultiplier;this.touchStart.x=n,this.touchStart.y=l,this.lastDelta={x:r,y:h},this.emitter.emit("scroll",{deltaX:r,deltaY:h,event:t})},this.onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=i=>{let{deltaX:e,deltaY:s,deltaMode:o}=i;e*=1===o?t:2===o?this.windowWidth:1,s*=1===o?t:2===o?this.windowHeight:1,e*=this.wheelMultiplier,s*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:s,event:i})},this.onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight},this.element=i,this.wheelMultiplier=e,this.touchMultiplier=s,this.touchStart={x:null,y:null},this.emitter=new Emitter,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,i){return this.emitter.on(t,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel),this.element.removeEventListener("touchstart",this.onTouchStart),this.element.removeEventListener("touchmove",this.onTouchMove),this.element.removeEventListener("touchend",this.onTouchEnd)}}class Lenis{constructor({wrapper:t=window,content:i=document.documentElement,wheelEventsTarget:e=t,eventsTarget:s=e,smoothWheel:o=!0,syncTouch:n=!1,syncTouchLerp:l=.075,touchInertiaMultiplier:r=35,duration:h,easing:a=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),lerp:c=.1,infinite:d=!1,orientation:u="vertical",gestureOrientation:p="vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:w,virtualScroll:S,__experimental__naiveDimensions:f=!1}={}){this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.onPointerDown=t=>{1===t.button&&this.reset()},this.onVirtualScroll=t=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(t))return;const{deltaX:i,deltaY:e,event:s}=t;if(this.emitter.emit("virtual-scroll",{deltaX:i,deltaY:e,event:s}),s.ctrlKey)return;const o=s.type.includes("touch"),n=s.type.includes("wheel");this.isTouching="touchstart"===s.type||"touchmove"===s.type;if(this.options.syncTouch&&o&&"touchstart"===s.type&&!this.isStopped&&!this.isLocked)return void this.reset();const l=0===i&&0===e,r="vertical"===this.options.gestureOrientation&&0===e||"horizontal"===this.options.gestureOrientation&&0===i;if(l||r)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const a=this.options.prevent;if(h.find((t=>{var i,e,s,l,r;return t instanceof Element&&("function"==typeof a&&(null==a?void 0:a(t))||(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent"))||o&&(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent-touch"))||n&&(null===(s=t.hasAttribute)||void 0===s?void 0:s.call(t,"data-lenis-prevent-wheel"))||(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis"))&&!(null===(r=t.classList)||void 0===r?void 0:r.contains("lenis-stopped")))})))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(!(this.options.syncTouch&&o||this.options.smoothWheel&&n))return this.isScrolling="native",void this.animate.stop();s.preventDefault();let c=e;"both"===this.options.gestureOrientation?c=Math.abs(e)>Math.abs(i)?e:i:"horizontal"===this.options.gestureOrientation&&(c=i);const d=o&&this.options.syncTouch,u=o&&"touchend"===s.type&&Math.abs(c)>5;u&&(c=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+c,Object.assign({programmatic:!1},d?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(clearTimeout(this.__resetVelocityTimeout),delete this.__resetVelocityTimeout,this.__preventNextNativeScrollEvent)delete this.__preventNextNativeScrollEvent;else if(!1===this.isScrolling||"native"===this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling="native",this.emit(),0!==this.velocity&&(this.__resetVelocityTimeout=setTimeout((()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()}),400))}},window.lenisVersion="1.1.9",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:i,wheelEventsTarget:e,eventsTarget:s,smoothWheel:o,syncTouch:n,syncTouchLerp:l,touchInertiaMultiplier:r,duration:h,easing:a,lerp:c,infinite:d,gestureOrientation:p,orientation:u,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:w,virtualScroll:S,__experimental__naiveDimensions:f},this.animate=new Animate,this.emitter=new Emitter,this.dimensions=new Dimensions({wrapper:t,content:i,autoResize:g}),this.updateClassName(),this.userData={},this.time=0,this.velocity=this.lastVelocity=0,this.isLocked=!1,this.isStopped=!1,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new VirtualScroll(s,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,i){return this.emitter.on(t,i)}off(t,i){return this.emitter.off(t,i)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const i=t-(this.time||t);this.time=t,this.animate.advance(.001*i)}scrollTo(t,{offset:i=0,immediate:e=!1,lock:s=!1,duration:o=this.options.duration,easing:n=this.options.easing,lerp:l=this.options.lerp,onStart:r,onComplete:h,force:a=!1,programmatic:c=!0,userData:d={}}={}){if(!this.isStopped&&!this.isLocked||a){if("string"==typeof t&&["top","left","start"].includes(t))t=0;else if("string"==typeof t&&["bottom","right","end"].includes(t))t=this.limit;else{let e;if("string"==typeof t?e=document.querySelector(t):t instanceof HTMLElement&&(null==t?void 0:t.nodeType)&&(e=t),e){if(this.options.wrapper!==window){const t=this.rootElement.getBoundingClientRect();i-=this.isHorizontal?t.left:t.top}const s=e.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof t&&(t+=i,t=Math.round(t),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):t=clamp(0,t,this.limit),t!==this.targetScroll)){if(this.userData=d,e)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==h||h(this),void(this.userData={});c||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:n,lerp:l,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",null==r||r(this)},onUpdate:(t,i)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),i||this.emit(),i&&(this.reset(),this.emit(),null==h||h(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this.__preventNextNativeScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextNativeScrollEvent}))}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function modulo(t,i){return(t%i+i)%i}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.updateClassName())}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.updateClassName())}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),"smooth"===this.isScrolling&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}
//# sourceMappingURL=lenis.mjs.map


/***/ }),

/***/ "./node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lenis */ "./node_modules/lenis/dist/lenis.mjs");
function s(){return s=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var i in e)({}).hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},s.apply(null,arguments)}class e{constructor({scrollElements:t,rootMargin:s="-1px -1px -1px -1px",IORaf:e}){this.scrollElements=void 0,this.rootMargin=void 0,this.IORaf=void 0,this.observer=void 0,this.scrollElements=t,this.rootMargin=s,this.IORaf=e,this._init()}_init(){this.observer=new IntersectionObserver(t=>{t.forEach(t=>{const s=this.scrollElements.find(s=>s.$el===t.target);t.isIntersecting?(s&&(s.isAlreadyIntersected=!0),this._setInview(t)):s&&s.isAlreadyIntersected&&this._setOutOfView(t)})},{rootMargin:this.rootMargin});for(const t of this.scrollElements)this.observe(t.$el)}destroy(){this.observer.disconnect()}observe(t){t&&this.observer.observe(t)}unobserve(t){t&&this.observer.unobserve(t)}_setInview(t){const s=this.scrollElements.find(s=>s.$el===t.target);this.IORaf&&(null==s||s.setInteractivityOn()),!this.IORaf&&(null==s||s.setInview())}_setOutOfView(t){const s=this.scrollElements.find(s=>s.$el===t.target);this.IORaf&&(null==s||s.setInteractivityOff()),!this.IORaf&&(null==s||s.setOutOfView()),null!=s&&s.attributes.scrollRepeat||this.IORaf||this.unobserve(t.target)}}function i(t,s,e,i,r){return e+((r-t)/(s-t)*(i-e)||0)}function r(t,s){return t.reduce((t,e)=>Math.abs(e-s)<Math.abs(t-s)?e:t)}class l{constructor({$el:t,id:s,modularInstance:e,subscribeElementUpdateFn:i,unsubscribeElementUpdateFn:r,needRaf:l,scrollOrientation:n}){var o,a,c,h,d;this.$el=void 0,this.id=void 0,this.needRaf=void 0,this.attributes=void 0,this.scrollOrientation=void 0,this.isAlreadyIntersected=void 0,this.intersection=void 0,this.metrics=void 0,this.currentScroll=void 0,this.translateValue=void 0,this.progress=void 0,this.lastProgress=void 0,this.modularInstance=void 0,this.progressModularModules=void 0,this.isInview=void 0,this.isInteractive=void 0,this.isInFold=void 0,this.isFirstResize=void 0,this.subscribeElementUpdateFn=void 0,this.unsubscribeElementUpdateFn=void 0,this.$el=t,this.id=s,this.needRaf=l,this.scrollOrientation=n,this.modularInstance=e,this.subscribeElementUpdateFn=i,this.unsubscribeElementUpdateFn=r,this.attributes={scrollClass:null!=(o=this.$el.dataset.scrollClass)?o:"is-inview",scrollOffset:null!=(a=this.$el.dataset.scrollOffset)?a:"0,0",scrollPosition:null!=(c=this.$el.dataset.scrollPosition)?c:"start,end",scrollModuleProgress:null!=this.$el.dataset.scrollModuleProgress,scrollCssProgress:null!=this.$el.dataset.scrollCssProgress,scrollEventProgress:null!=(h=this.$el.dataset.scrollEventProgress)?h:null,scrollSpeed:null!=this.$el.dataset.scrollSpeed?parseFloat(this.$el.dataset.scrollSpeed):null,scrollRepeat:null!=this.$el.dataset.scrollRepeat,scrollCall:null!=(d=this.$el.dataset.scrollCall)?d:null,scrollCallSelf:null!=this.$el.dataset.scrollCallSelf,scrollIgnoreFold:null!=this.$el.dataset.scrollIgnoreFold,scrollEnableTouchSpeed:null!=this.$el.dataset.scrollEnableTouchSpeed},this.intersection={start:0,end:0},this.metrics={offsetStart:0,offsetEnd:0,bcr:{}},this.currentScroll="vertical"===this.scrollOrientation?window.scrollY:window.scrollX,this.translateValue=0,this.progress=0,this.lastProgress=null,this.progressModularModules=[],this.isInview=!1,this.isInteractive=!1,this.isAlreadyIntersected=!1,this.isInFold=!1,this.isFirstResize=!0,this._init()}_init(){this.needRaf&&(this.modularInstance&&this.attributes.scrollModuleProgress&&this._getProgressModularModules(),this._resize())}onResize({currentScroll:t}){this.currentScroll=t,this._resize()}onRender({currentScroll:t,smooth:s}){const e="vertical"===this.scrollOrientation?window.innerHeight:window.innerWidth;if(this.currentScroll=t,this._computeProgress(),this.attributes.scrollSpeed&&!isNaN(this.attributes.scrollSpeed))if(this.attributes.scrollEnableTouchSpeed||s){if(this.isInFold){const t=Math.max(0,this.progress);this.translateValue=t*e*this.attributes.scrollSpeed*-1}else{const t=i(0,1,-1,1,this.progress);this.translateValue=t*e*this.attributes.scrollSpeed*-1}this.$el.style.transform="vertical"===this.scrollOrientation?`translate3d(0, ${this.translateValue}px, 0)`:`translate3d(${this.translateValue}px, 0, 0)`}else this.translateValue&&(this.$el.style.transform="translate3d(0, 0, 0)"),this.translateValue=0}setInview(){if(this.isInview)return;this.isInview=!0,this.$el.classList.add(this.attributes.scrollClass);const t=this._getScrollCallFrom();this.attributes.scrollCall&&this._dispatchCall("enter",t)}setOutOfView(){if(!this.isInview||!this.attributes.scrollRepeat)return;this.isInview=!1,this.$el.classList.remove(this.attributes.scrollClass);const t=this._getScrollCallFrom();this.attributes.scrollCall&&this._dispatchCall("leave",t)}setInteractivityOn(){this.isInteractive||(this.isInteractive=!0,this.subscribeElementUpdateFn(this))}setInteractivityOff(){this.isInteractive&&(this.isInteractive=!1,this.unsubscribeElementUpdateFn(this),null!=this.lastProgress&&this._computeProgress(r([0,1],this.lastProgress)))}_resize(){this.metrics.bcr=this.$el.getBoundingClientRect(),this._computeMetrics(),this._computeIntersection(),this.isFirstResize&&(this.isFirstResize=!1,this.isInFold&&this.setInview())}_computeMetrics(){const{top:t,left:s,height:e,width:i}=this.metrics.bcr,r="vertical"===this.scrollOrientation?window.innerHeight:window.innerWidth,l="vertical"===this.scrollOrientation?e:i;this.metrics.offsetStart=this.currentScroll+("vertical"===this.scrollOrientation?t:s)-this.translateValue,this.metrics.offsetEnd=this.metrics.offsetStart+l,this.isInFold=this.metrics.offsetStart<r&&!this.attributes.scrollIgnoreFold}_computeIntersection(){const t="vertical"===this.scrollOrientation?window.innerHeight:window.innerWidth,s="vertical"===this.scrollOrientation?this.metrics.bcr.height:this.metrics.bcr.width,e=this.attributes.scrollOffset.split(","),i=null!=e[0]?e[0].trim():"0",r=null!=e[1]?e[1].trim():"0",l=this.attributes.scrollPosition.split(",");let n=null!=l[0]?l[0].trim():"start";const o=null!=l[1]?l[1].trim():"end",a=i.includes("%")?t*parseInt(i.replace("%","").trim())*.01:parseInt(i),c=r.includes("%")?t*parseInt(r.replace("%","").trim())*.01:parseInt(r);switch(this.isInFold&&(n="fold"),n){case"start":default:this.intersection.start=this.metrics.offsetStart-t+a;break;case"middle":this.intersection.start=this.metrics.offsetStart-t+a+.5*s;break;case"end":this.intersection.start=this.metrics.offsetStart-t+a+s;break;case"fold":this.intersection.start=0}switch(o){case"start":this.intersection.end=this.metrics.offsetStart-c;break;case"middle":this.intersection.end=this.metrics.offsetStart-c+.5*s;break;default:this.intersection.end=this.metrics.offsetStart-c+s}if(this.intersection.end<=this.intersection.start)switch(o){case"start":default:this.intersection.end=this.intersection.start+1;break;case"middle":this.intersection.end=this.intersection.start+.5*s;break;case"end":this.intersection.end=this.intersection.start+s}}_computeProgress(t){const s=null!=t?t:(e=i(this.intersection.start,this.intersection.end,0,1,this.currentScroll))<0?0:e>1?1:e;var e;if(this.progress=s,s!=this.lastProgress){if(this.lastProgress=s,this.attributes.scrollCssProgress&&this._setCssProgress(s),this.attributes.scrollEventProgress&&this._setCustomEventProgress(s),this.attributes.scrollModuleProgress)for(const t of this.progressModularModules)this.modularInstance&&this.modularInstance.call("onScrollProgress",s,t.moduleName,t.moduleId);s>0&&s<1&&this.setInview(),0===s&&this.setOutOfView(),1===s&&this.setOutOfView()}}_setCssProgress(t=0){this.$el.style.setProperty("--progress",t.toString())}_setCustomEventProgress(t=0){const s=this.attributes.scrollEventProgress;if(!s)return;const e=new CustomEvent(s,{detail:{target:this.$el,progress:t}});window.dispatchEvent(e)}_getProgressModularModules(){if(!this.modularInstance)return;const t=Object.keys(this.$el.dataset).filter(t=>t.includes("module")),s=Object.entries(this.modularInstance.modules);if(t.length)for(const e of t){const t=this.$el.dataset[e];if(!t)return;for(const e of s){const[s,i]=e;t in i&&this.progressModularModules.push({moduleName:s,moduleId:t})}}}_getScrollCallFrom(){const t=r([this.intersection.start,this.intersection.end],this.currentScroll);return this.intersection.start===t?"start":"end"}_dispatchCall(t,s){var e,i;const r=null==(e=this.attributes.scrollCall)?void 0:e.split(","),l=null==(i=this.attributes)?void 0:i.scrollCallSelf;if(r&&r.length>1){var n;const[e,i,o]=r;let a;a=l?this.$el.dataset[`module${i.trim()}`]:o,this.modularInstance&&this.modularInstance.call(e.trim(),{target:this.$el,way:t,from:s},i.trim(),null==(n=a)?void 0:n.trim())}else if(r){const[e]=r,i=new CustomEvent(e,{detail:{target:this.$el,way:t,from:s}});window.dispatchEvent(i)}}}const n=["scrollOffset","scrollPosition","scrollModuleProgress","scrollCssProgress","scrollEventProgress","scrollSpeed"];class o{constructor({$el:t,modularInstance:s,triggerRootMargin:e,rafRootMargin:i,scrollOrientation:r}){this.$scrollContainer=void 0,this.modularInstance=void 0,this.triggerRootMargin=void 0,this.rafRootMargin=void 0,this.scrollElements=void 0,this.triggeredScrollElements=void 0,this.RAFScrollElements=void 0,this.scrollElementsToUpdate=void 0,this.IOTriggerInstance=void 0,this.IORafInstance=void 0,this.scrollOrientation=void 0,t?(this.$scrollContainer=t,this.modularInstance=s,this.scrollOrientation=r,this.triggerRootMargin=null!=e?e:"-1px -1px -1px -1px",this.rafRootMargin=null!=i?i:"100% 100% 100% 100%",this.scrollElements=[],this.triggeredScrollElements=[],this.RAFScrollElements=[],this.scrollElementsToUpdate=[],this._init()):console.error("Please provide a DOM Element as scrollContainer")}_init(){const t=this.$scrollContainer.querySelectorAll("[data-scroll]"),s=Array.from(t);this._subscribeScrollElements(s),this.IOTriggerInstance=new e({scrollElements:[...this.triggeredScrollElements],rootMargin:this.triggerRootMargin,IORaf:!1}),this.IORafInstance=new e({scrollElements:[...this.RAFScrollElements],rootMargin:this.rafRootMargin,IORaf:!0})}destroy(){this.IOTriggerInstance.destroy(),this.IORafInstance.destroy(),this._unsubscribeAllScrollElements()}onResize({currentScroll:t}){for(const s of this.RAFScrollElements)s.onResize({currentScroll:t})}onRender({currentScroll:t,smooth:s}){for(const e of this.scrollElementsToUpdate)e.onRender({currentScroll:t,smooth:s})}removeScrollElements(t){const s=t.querySelectorAll("[data-scroll]");if(s.length){for(let t=0;t<this.triggeredScrollElements.length;t++){const e=this.triggeredScrollElements[t];Array.from(s).indexOf(e.$el)>-1&&(this.IOTriggerInstance.unobserve(e.$el),this.triggeredScrollElements.splice(t,1))}for(let t=0;t<this.RAFScrollElements.length;t++){const e=this.RAFScrollElements[t];Array.from(s).indexOf(e.$el)>-1&&(this.IORafInstance.unobserve(e.$el),this.RAFScrollElements.splice(t,1))}s.forEach(t=>{const s=this.scrollElementsToUpdate.find(s=>s.$el===t),e=this.scrollElements.find(s=>s.$el===t);s&&this._unsubscribeElementUpdate(s),e&&(this.scrollElements=this.scrollElements.filter(t=>t.id!=e.id))})}}addScrollElements(t){const s=t.querySelectorAll("[data-scroll]"),e=[];this.scrollElements.forEach(t=>{e.push(t.id)});const i=Math.max(...e,0)+1,r=Array.from(s);this._subscribeScrollElements(r,i,!0)}_subscribeScrollElements(t,s=0,e=!1){for(let i=0;i<t.length;i++){const r=t[i],n=this._checkRafNeeded(r),o=new l({$el:r,id:s+i,scrollOrientation:this.scrollOrientation,modularInstance:this.modularInstance,subscribeElementUpdateFn:this._subscribeElementUpdate.bind(this),unsubscribeElementUpdateFn:this._unsubscribeElementUpdate.bind(this),needRaf:n});this.scrollElements.push(o),n?(this.RAFScrollElements.push(o),e&&(this.IORafInstance.scrollElements.push(o),this.IORafInstance.observe(o.$el))):(this.triggeredScrollElements.push(o),e&&(this.IOTriggerInstance.scrollElements.push(o),this.IOTriggerInstance.observe(o.$el)))}}_unsubscribeAllScrollElements(){this.scrollElements=[],this.RAFScrollElements=[],this.triggeredScrollElements=[],this.scrollElementsToUpdate=[]}_subscribeElementUpdate(t){this.scrollElementsToUpdate.push(t)}_unsubscribeElementUpdate(t){this.scrollElementsToUpdate=this.scrollElementsToUpdate.filter(s=>s.id!=t.id)}_checkRafNeeded(t){let s=[...n];const e=t=>{s=s.filter(s=>s!=t)};if(t.dataset.scrollOffset){if("0,0"!=t.dataset.scrollOffset.split(",").map(t=>t.replace("%","").trim()).join(","))return!0;e("scrollOffset")}else e("scrollOffset");if(t.dataset.scrollPosition){if("top,bottom"!=t.dataset.scrollPosition.trim())return!0;e("scrollPosition")}else e("scrollPosition");if(t.dataset.scrollSpeed&&!isNaN(parseFloat(t.dataset.scrollSpeed)))return!0;e("scrollSpeed");for(const e of s)if(e in t.dataset)return!0;return!1}}class a{constructor({resizeElements:t,resizeCallback:s=()=>{}}){this.$resizeElements=void 0,this.isFirstObserve=void 0,this.observer=void 0,this.resizeCallback=void 0,this.$resizeElements=t,this.resizeCallback=s,this.isFirstObserve=!0,this._init()}_init(){this.observer=new ResizeObserver(t=>{var s;!this.isFirstObserve&&(null==(s=this.resizeCallback)||s.call(this)),this.isFirstObserve=!1});for(const t of this.$resizeElements)this.observer.observe(t)}destroy(){this.observer.disconnect()}}class c{constructor({lenisOptions:t={},modularInstance:s,triggerRootMargin:e,rafRootMargin:i,autoResize:r=!0,autoStart:l=!0,scrollCallback:n=()=>{},initCustomTicker:o,destroyCustomTicker:a}={}){this.rafPlaying=void 0,this.lenisInstance=void 0,this.coreInstance=void 0,this.lenisOptions=void 0,this.modularInstance=void 0,this.triggerRootMargin=void 0,this.rafRootMargin=void 0,this.rafInstance=void 0,this.autoResize=void 0,this.autoStart=void 0,this.ROInstance=void 0,this.initCustomTicker=void 0,this.destroyCustomTicker=void 0,this._onRenderBind=void 0,this._onResizeBind=void 0,this._onScrollToBind=void 0;for(const[s]of Object.entries(t))["wrapper","content","infinite"].includes(s)&&console.warn(`Warning: Key "${s}" is not possible to edit in Locomotive Scroll.`);Object.assign(this,{lenisOptions:t,modularInstance:s,triggerRootMargin:e,rafRootMargin:i,autoResize:r,autoStart:l,scrollCallback:n,initCustomTicker:o,destroyCustomTicker:a}),this._onRenderBind=this._onRender.bind(this),this._onScrollToBind=this._onScrollTo.bind(this),this._onResizeBind=this._onResize.bind(this),this.rafPlaying=!1,this._init()}_init(){var e;this.lenisInstance=new lenis__WEBPACK_IMPORTED_MODULE_0__["default"](s({},this.lenisOptions,{wrapper:window,content:document.documentElement,infinite:!1})),null==(e=this.lenisInstance)||e.on("scroll",this.scrollCallback),document.documentElement.setAttribute("data-scroll-orientation",this.lenisInstance.options.orientation),requestAnimationFrame(()=>{this.coreInstance=new o({$el:this.lenisInstance.rootElement,modularInstance:this.modularInstance,triggerRootMargin:this.triggerRootMargin,rafRootMargin:this.rafRootMargin,scrollOrientation:this.lenisInstance.options.orientation}),this._bindEvents(),this.initCustomTicker&&!this.destroyCustomTicker?console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble."):!this.initCustomTicker&&this.destroyCustomTicker&&console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."),this.autoStart&&this.start()})}destroy(){var t;this.stop(),this._unbindEvents(),this.lenisInstance.destroy(),null==(t=this.coreInstance)||t.destroy(),requestAnimationFrame(()=>{var t;null==(t=this.coreInstance)||t.destroy()})}_bindEvents(){this._bindScrollToEvents(),this.autoResize&&("ResizeObserver"in window?this.ROInstance=new a({resizeElements:[document.body],resizeCallback:this._onResizeBind}):window.addEventListener("resize",this._onResizeBind))}_unbindEvents(){this._unbindScrollToEvents(),this.autoResize&&("ResizeObserver"in window?this.ROInstance&&this.ROInstance.destroy():window.removeEventListener("resize",this._onResizeBind))}_bindScrollToEvents(t){const s=t||this.lenisInstance.rootElement,e=null==s?void 0:s.querySelectorAll("[data-scroll-to]");(null==e?void 0:e.length)&&e.forEach(t=>{t.addEventListener("click",this._onScrollToBind,!1)})}_unbindScrollToEvents(t){const s=t||this.lenisInstance.rootElement,e=null==s?void 0:s.querySelectorAll("[data-scroll-to]");(null==e?void 0:e.length)&&e.forEach(t=>{t.removeEventListener("click",this._onScrollToBind,!1)})}_onResize(){requestAnimationFrame(()=>{var t;null==(t=this.coreInstance)||t.onResize({currentScroll:this.lenisInstance.scroll})})}_onRender(){var t,s;null==(t=this.lenisInstance)||t.raf(Date.now()),null==(s=this.coreInstance)||s.onRender({currentScroll:this.lenisInstance.scroll,smooth:this.lenisInstance.options.smoothWheel})}_onScrollTo(t){var s;t.preventDefault();const e=null!=(s=t.currentTarget)?s:null;if(!e)return;const i=e.getAttribute("data-scroll-to-href")||e.getAttribute("href"),r=e.getAttribute("data-scroll-to-offset")||0,l=e.getAttribute("data-scroll-to-duration")||this.lenisInstance.options.duration;i&&this.scrollTo(i,{offset:"string"==typeof r?parseInt(r):r,duration:"string"==typeof l?parseInt(l):l})}start(){var t;this.rafPlaying||(null==(t=this.lenisInstance)||t.start(),this.rafPlaying=!0,this.initCustomTicker?this.initCustomTicker(this._onRenderBind):this._raf())}stop(){var t;this.rafPlaying&&(null==(t=this.lenisInstance)||t.stop(),this.rafPlaying=!1,this.destroyCustomTicker?this.destroyCustomTicker(this._onRenderBind):this.rafInstance&&cancelAnimationFrame(this.rafInstance))}removeScrollElements(t){var s;t?(this._unbindScrollToEvents(t),null==(s=this.coreInstance)||s.removeScrollElements(t)):console.error("Please provide a DOM Element as $oldContainer")}addScrollElements(t){var s;t?(null==(s=this.coreInstance)||s.addScrollElements(t),requestAnimationFrame(()=>{this._bindScrollToEvents(t)})):console.error("Please provide a DOM Element as $newContainer")}resize(){this._onResizeBind()}scrollTo(t,s){var e;null==(e=this.lenisInstance)||e.scrollTo(t,{offset:null==s?void 0:s.offset,lerp:null==s?void 0:s.lerp,duration:null==s?void 0:s.duration,immediate:null==s?void 0:s.immediate,lock:null==s?void 0:s.lock,force:null==s?void 0:s.force,easing:null==s?void 0:s.easing,onComplete:null==s?void 0:s.onComplete})}_raf(){this._onRenderBind(),this.rafInstance=requestAnimationFrame(()=>this._raf())}}
//# sourceMappingURL=locomotive-scroll.modern.mjs.map


/***/ }),

/***/ "./node_modules/path-to-regexp/dist.es2015/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/path-to-regexp/dist.es2015/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   pathToRegexp: () => (/* binding */ pathToRegexp),
/* harmony export */   regexpToFunction: () => (/* binding */ regexpToFunction),
/* harmony export */   tokensToFunction: () => (/* binding */ tokensToFunction),
/* harmony export */   tokensToRegexp: () => (/* binding */ tokensToRegexp)
/* harmony export */ });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    var isSafe = function (value) {
        for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
            var char = delimiter_1[_i];
            if (value.indexOf(char) > -1)
                return true;
        }
        return false;
    };
    var safePattern = function (prefix) {
        var prev = result[result.length - 1];
        var prevText = prefix || (prev && typeof prev === "string" ? prev : "");
        if (prev && !prevText) {
            throw new TypeError("Must have text between two parameters, missing text after \"".concat(prev.name, "\""));
        }
        if (!prevText || isSafe(prevText))
            return "[^".concat(escapeString(delimiter), "]+?");
        return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || safePattern(prefix),
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: "",
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    }
                    else {
                        route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                    }
                }
                else {
                    if (token.modifier === "+" || token.modifier === "*") {
                        throw new TypeError("Can not repeat \"".concat(token.name, "\" without a prefix and suffix"));
                    }
                    route += "(".concat(token.pattern, ")").concat(token.modifier);
                }
            }
            else {
                route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
            }
        }
    }
    if (end) {
        if (!strict)
            route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1
            : endToken === undefined;
        if (!strict) {
            route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
            route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/swup/dist/Swup.modern.js":
/*!***********************************************!*\
  !*** ./node_modules/swup/dist/Swup.modern.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Location: () => (/* binding */ l),
/* harmony export */   classify: () => (/* binding */ s),
/* harmony export */   createHistoryRecord: () => (/* binding */ o),
/* harmony export */   "default": () => (/* binding */ _),
/* harmony export */   delegateEvent: () => (/* binding */ a),
/* harmony export */   forceReflow: () => (/* binding */ v),
/* harmony export */   getContextualAttr: () => (/* binding */ y),
/* harmony export */   getCurrentUrl: () => (/* binding */ n),
/* harmony export */   isPromise: () => (/* binding */ f),
/* harmony export */   matchPath: () => (/* binding */ h),
/* harmony export */   nextTick: () => (/* binding */ w),
/* harmony export */   query: () => (/* binding */ p),
/* harmony export */   queryAll: () => (/* binding */ m),
/* harmony export */   runAsPromise: () => (/* binding */ g),
/* harmony export */   updateHistoryRecord: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var delegate_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! delegate-it */ "./node_modules/delegate-it/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/dist.es2015/index.js");
function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)({}).hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},i.apply(null,arguments)}const s=(t,e)=>String(t).toLowerCase().replace(/[\s/_.]+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")||e||"",n=({hash:t}={})=>window.location.pathname+window.location.search+(t?window.location.hash:""),o=(t,e={})=>{const s=i({url:t=t||n({hash:!0}),random:Math.random(),source:"swup"},e);window.history.pushState(s,"",t)},r=(t=null,e={})=>{t=t||n({hash:!0});const s=i({},window.history.state||{},{url:t,random:Math.random(),source:"swup"},e);window.history.replaceState(s,"",t)},a=(e,s,n,o)=>{const r=new AbortController;return o=i({},o,{signal:r.signal}),(0,delegate_it__WEBPACK_IMPORTED_MODULE_0__["default"])(e,s,n,o),{destroy:()=>r.abort()}};class l extends URL{constructor(t,e=document.baseURI){super(t.toString(),e),Object.setPrototypeOf(this,l.prototype)}get url(){return this.pathname+this.search}static fromElement(t){const e=t.getAttribute("href")||t.getAttribute("xlink:href")||"";return new l(e)}static fromUrl(t){return new l(t)}}const h=(t,i)=>{try{return (0,path_to_regexp__WEBPACK_IMPORTED_MODULE_1__.match)(t,i)}catch(e){throw new Error(`[swup] Error parsing path "${String(t)}":\n${String(e)}`)}};class c extends Error{constructor(t,e){super(t),this.url=void 0,this.status=void 0,this.aborted=void 0,this.timedOut=void 0,this.name="FetchError",this.url=e.url,this.status=e.status,this.aborted=e.aborted||!1,this.timedOut=e.timedOut||!1}}async function u(t,e={}){var s;t=l.fromUrl(t).url;const{visit:n=this.visit}=e,o=i({},this.options.requestHeaders,e.headers),r=null!=(s=e.timeout)?s:this.options.timeout,a=new AbortController,{signal:h}=a;e=i({},e,{headers:o,signal:h});let u,d=!1,p=null;r&&r>0&&(p=setTimeout(()=>{d=!0,a.abort("timeout")},r));try{u=await this.hooks.call("fetch:request",n,{url:t,options:e},(t,{url:e,options:i})=>fetch(e,i)),p&&clearTimeout(p)}catch(e){if(d)throw this.hooks.call("fetch:timeout",n,{url:t}),new c(`Request timed out: ${t}`,{url:t,timedOut:d});if("AbortError"===(null==e?void 0:e.name)||h.aborted)throw new c(`Request aborted: ${t}`,{url:t,aborted:!0});throw e}const{status:m,url:w}=u,f=await u.text();if(500===m)throw this.hooks.call("fetch:error",n,{status:m,response:u,url:w}),new c(`Server error: ${w}`,{status:m,url:w});if(!f)throw new c(`Empty response: ${w}`,{status:m,url:w});const{url:g}=l.fromUrl(w),v={url:g,html:f};return!n.cache.write||e.method&&"GET"!==e.method||t!==g||this.cache.set(v.url,v),v}class d{constructor(t){this.swup=void 0,this.pages=new Map,this.swup=t}get size(){return this.pages.size}get all(){const t=new Map;return this.pages.forEach((e,s)=>{t.set(s,i({},e))}),t}has(t){return this.pages.has(this.resolve(t))}get(t){const e=this.pages.get(this.resolve(t));return e?i({},e):e}set(t,e){e=i({},e,{url:t=this.resolve(t)}),this.pages.set(t,e),this.swup.hooks.callSync("cache:set",void 0,{page:e})}update(t,e){t=this.resolve(t);const s=i({},this.get(t),e,{url:t});this.pages.set(t,s)}delete(t){this.pages.delete(this.resolve(t))}clear(){this.pages.clear(),this.swup.hooks.callSync("cache:clear",void 0,void 0)}prune(t){this.pages.forEach((e,i)=>{t(i,e)&&this.delete(i)})}resolve(t){const{url:e}=l.fromUrl(t);return this.swup.resolveUrl(e)}}const p=(t,e=document)=>e.querySelector(t),m=(t,e=document)=>Array.from(e.querySelectorAll(t)),w=()=>new Promise(t=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{t()})})});function f(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}function g(t,e=[]){return new Promise((i,s)=>{const n=t(...e);f(n)?n.then(i,s):i(n)})}function v(t){var e;null==(e=t=t||document.body)||e.getBoundingClientRect()}function y(t,e){const i=null==t?void 0:t.closest(`[${e}]`);return null!=i&&i.hasAttribute(e)?(null==i?void 0:i.getAttribute(e))||!0:void 0}class k{constructor(t){this.swup=void 0,this.swupClasses=["to-","is-changing","is-rendering","is-popstate","is-animating","is-leaving"],this.swup=t}get selectors(){const{scope:t}=this.swup.visit.animation;return"containers"===t?this.swup.visit.containers:"html"===t?["html"]:Array.isArray(t)?t:[]}get selector(){return this.selectors.join(",")}get targets(){return this.selector.trim()?m(this.selector):[]}add(...t){this.targets.forEach(e=>e.classList.add(...t))}remove(...t){this.targets.forEach(e=>e.classList.remove(...t))}clear(){this.targets.forEach(t=>{const e=t.className.split(" ").filter(t=>this.isSwupClass(t));t.classList.remove(...e)})}isSwupClass(t){return this.swupClasses.some(e=>t.startsWith(e))}}class b{constructor(t,e){this.id=void 0,this.state=void 0,this.from=void 0,this.to=void 0,this.containers=void 0,this.animation=void 0,this.trigger=void 0,this.cache=void 0,this.history=void 0,this.scroll=void 0,this.meta=void 0;const{to:i,from:s,hash:n,el:o,event:r}=e;this.id=Math.random(),this.state=1,this.from={url:null!=s?s:t.location.url,hash:t.location.hash},this.to={url:i,hash:n},this.containers=t.options.containers,this.animation={animate:!0,wait:!1,name:void 0,native:t.options.native,scope:t.options.animationScope,selector:t.options.animationSelector},this.trigger={el:o,event:r},this.cache={read:t.options.cache,write:t.options.cache},this.history={action:"push",popstate:!1,direction:void 0},this.scroll={reset:!0,target:void 0},this.meta={}}advance(t){this.state<t&&(this.state=t)}abort(){this.state=8}get done(){return this.state>=7}}function S(t){return new b(this,t)}class E{constructor(t){this.swup=void 0,this.registry=new Map,this.hooks=["animation:out:start","animation:out:await","animation:out:end","animation:in:start","animation:in:await","animation:in:end","animation:skip","cache:clear","cache:set","content:replace","content:scroll","enable","disable","fetch:request","fetch:error","fetch:timeout","history:popstate","link:click","link:self","link:anchor","link:newtab","page:load","page:view","scroll:top","scroll:anchor","visit:start","visit:transition","visit:abort","visit:end"],this.swup=t,this.init()}init(){this.hooks.forEach(t=>this.create(t))}create(t){this.registry.has(t)||this.registry.set(t,new Map)}exists(t){return this.registry.has(t)}get(t){const e=this.registry.get(t);if(e)return e;console.error(`Unknown hook '${t}'`)}clear(){this.registry.forEach(t=>t.clear())}on(t,e,s={}){const n=this.get(t);if(!n)return console.warn(`Hook '${t}' not found.`),()=>{};const o=i({},s,{id:n.size+1,hook:t,handler:e});return n.set(e,o),()=>this.off(t,e)}before(t,e,s={}){return this.on(t,e,i({},s,{before:!0}))}replace(t,e,s={}){return this.on(t,e,i({},s,{replace:!0}))}once(t,e,s={}){return this.on(t,e,i({},s,{once:!0}))}off(t,e){const i=this.get(t);i&&e?i.delete(e)||console.warn(`Handler for hook '${t}' not found.`):i&&i.clear()}async call(t,e,i,s){const[n,o,r]=this.parseCallArgs(t,e,i,s),{before:a,handler:l,after:h}=this.getHandlers(t,r);await this.run(a,n,o);const[c]=await this.run(l,n,o,!0);return await this.run(h,n,o),this.dispatchDomEvent(t,n,o),c}callSync(t,e,i,s){const[n,o,r]=this.parseCallArgs(t,e,i,s),{before:a,handler:l,after:h}=this.getHandlers(t,r);this.runSync(a,n,o);const[c]=this.runSync(l,n,o,!0);return this.runSync(h,n,o),this.dispatchDomEvent(t,n,o),c}parseCallArgs(t,e,i,s){return e instanceof b||"object"!=typeof e&&"function"!=typeof i?[e,i,s]:[void 0,e,i]}async run(t,e=this.swup.visit,i,s=!1){const n=[];for(const{hook:o,handler:r,defaultHandler:a,once:l}of t)if(null==e||!e.done){l&&this.off(o,r);try{const t=await g(r,[e,i,a]);n.push(t)}catch(t){if(s)throw t;console.error(`Error in hook '${o}':`,t)}}return n}runSync(t,e=this.swup.visit,i,s=!1){const n=[];for(const{hook:o,handler:r,defaultHandler:a,once:l}of t)if(null==e||!e.done){l&&this.off(o,r);try{const t=r(e,i,a);n.push(t),f(t)&&console.warn(`Swup will not await Promises in handler for synchronous hook '${o}'.`)}catch(t){if(s)throw t;console.error(`Error in hook '${o}':`,t)}}return n}getHandlers(t,e){const i=this.get(t);if(!i)return{found:!1,before:[],handler:[],after:[],replaced:!1};const s=Array.from(i.values()),n=this.sortRegistrations,o=s.filter(({before:t,replace:e})=>t&&!e).sort(n),r=s.filter(({replace:t})=>t).filter(t=>!0).sort(n),a=s.filter(({before:t,replace:e})=>!t&&!e).sort(n),l=r.length>0;let h=[];if(e&&(h=[{id:0,hook:t,handler:e}],l)){const i=r.length-1,{handler:s,once:n}=r[i],o=t=>{const i=r[t-1];return i?(e,s)=>i.handler(e,s,o(t-1)):e};h=[{id:0,hook:t,once:n,handler:s,defaultHandler:o(i)}]}return{found:!0,before:o,handler:h,after:a,replaced:l}}sortRegistrations(t,e){var i,s;return(null!=(i=t.priority)?i:0)-(null!=(s=e.priority)?s:0)||t.id-e.id||0}dispatchDomEvent(t,e,i){if(null!=e&&e.done)return;const s={hook:t,args:i,visit:e||this.swup.visit};document.dispatchEvent(new CustomEvent("swup:any",{detail:s,bubbles:!0})),document.dispatchEvent(new CustomEvent(`swup:${t}`,{detail:s,bubbles:!0}))}parseName(t){const[e,...s]=t.split(".");return[e,s.reduce((t,e)=>i({},t,{[e]:!0}),{})]}}const C=t=>{if(t&&"#"===t.charAt(0)&&(t=t.substring(1)),!t)return null;const e=decodeURIComponent(t);let i=document.getElementById(t)||document.getElementById(e)||p(`a[name='${CSS.escape(t)}']`)||p(`a[name='${CSS.escape(e)}']`);return i||"top"!==t||(i=document.body),i},U="transition",P="animation";async function $({selector:t,elements:e}){if(!1===t&&!e)return;let i=[];if(e)i=Array.from(e);else if(t&&(i=m(t,document.body),!i.length))return void console.warn(`[swup] No elements found matching animationSelector \`${t}\``);const s=i.map(t=>function(t){const{type:e,timeout:i,propCount:s}=function(t){const e=window.getComputedStyle(t),i=x(e,`${U}Delay`),s=x(e,`${U}Duration`),n=A(i,s),o=x(e,`${P}Delay`),r=x(e,`${P}Duration`),a=A(o,r),l=Math.max(n,a),h=l>0?n>a?U:P:null;return{type:h,timeout:l,propCount:h?h===U?s.length:r.length:0}}(t);return!(!e||!i)&&new Promise(n=>{const o=`${e}end`,r=performance.now();let a=0;const l=()=>{t.removeEventListener(o,h),n()},h=e=>{e.target===t&&((performance.now()-r)/1e3<e.elapsedTime||++a>=s&&l())};setTimeout(()=>{a<s&&l()},i+1),t.addEventListener(o,h)})}(t));s.filter(Boolean).length>0?await Promise.all(s):t&&console.warn(`[swup] No CSS animation duration defined on elements matching \`${t}\``)}function x(t,e){return(t[e]||"").split(", ")}function A(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((e,i)=>H(e)+H(t[i])))}function H(t){return 1e3*parseFloat(t)}function V(t,e={},s={}){if("string"!=typeof t)throw new Error("swup.navigate() requires a URL parameter");if(this.shouldIgnoreVisit(t,{el:s.el,event:s.event}))return void window.location.assign(t);const{url:n,hash:o}=l.fromUrl(t),r=this.createVisit(i({},s,{to:n,hash:o}));this.performNavigation(r,e)}async function I(t,e={}){if(this.navigating){if(this.visit.state>=6)return t.state=2,void(this.onVisitEnd=()=>this.performNavigation(t,e));await this.hooks.call("visit:abort",this.visit,void 0),delete this.visit.to.document,this.visit.state=8}this.navigating=!0,this.visit=t;const{el:i}=t.trigger;e.referrer=e.referrer||this.location.url,!1===e.animate&&(t.animation.animate=!1),t.animation.animate||this.classes.clear();const n=e.history||y(i,"data-swup-history");"string"==typeof n&&["push","replace"].includes(n)&&(t.history.action=n);const a=e.animation||y(i,"data-swup-animation");var h,c;"string"==typeof a&&(t.animation.name=a),t.meta=e.meta||{},"object"==typeof e.cache?(t.cache.read=null!=(h=e.cache.read)?h:t.cache.read,t.cache.write=null!=(c=e.cache.write)?c:t.cache.write):void 0!==e.cache&&(t.cache={read:!!e.cache,write:!!e.cache}),delete e.cache;try{await this.hooks.call("visit:start",t,void 0),t.state=3;const i=this.hooks.call("page:load",t,{options:e},async(t,e)=>{let i;return t.cache.read&&(i=this.cache.get(t.to.url)),e.page=i||await this.fetchPage(t.to.url,e.options),e.cache=!!i,e.page});i.then(({html:e})=>{t.advance(5),t.to.html=e,t.to.document=(new DOMParser).parseFromString(e,"text/html")});const n=t.to.url+t.to.hash;if(t.history.popstate||("replace"===t.history.action||t.to.url===this.location.url?r(n):(this.currentHistoryIndex++,o(n,{index:this.currentHistoryIndex}))),this.location=l.fromUrl(n),t.history.popstate&&this.classes.add("is-popstate"),t.animation.name&&this.classes.add(`to-${s(t.animation.name)}`),t.animation.wait&&await i,t.done)return;if(await this.hooks.call("visit:transition",t,void 0,async()=>{if(!t.animation.animate)return await this.hooks.call("animation:skip",void 0),void await this.renderPage(t,await i);t.advance(4),await this.animatePageOut(t),t.animation.native&&document.startViewTransition?await document.startViewTransition(async()=>await this.renderPage(t,await i)).finished:await this.renderPage(t,await i),await this.animatePageIn(t)}),t.done)return;await this.hooks.call("visit:end",t,void 0,()=>this.classes.clear()),t.state=7,this.navigating=!1,this.onVisitEnd&&(this.onVisitEnd(),this.onVisitEnd=void 0)}catch(e){if(!e||null!=e&&e.aborted)return void(t.state=8);t.state=9,console.error(e),this.options.skipPopStateHandling=()=>(window.location.assign(t.to.url+t.to.hash),!0),window.history.back()}finally{delete t.to.document}}const L=async function(t){await this.hooks.call("animation:out:start",t,void 0,()=>{this.classes.add("is-changing","is-animating","is-leaving")}),await this.hooks.call("animation:out:await",t,{skip:!1},(t,{skip:e})=>{if(!e)return this.awaitAnimations({selector:t.animation.selector})}),await this.hooks.call("animation:out:end",t,void 0)},q=function(t){var e;const i=t.to.document;if(!i)return!1;const s=(null==(e=i.querySelector("title"))?void 0:e.innerText)||"";document.title=s;const n=m('[data-swup-persist]:not([data-swup-persist=""])'),o=t.containers.map(t=>{const e=document.querySelector(t),s=i.querySelector(t);return e&&s?(e.replaceWith(s.cloneNode(!0)),!0):(e||console.warn(`[swup] Container missing in current document: ${t}`),s||console.warn(`[swup] Container missing in incoming document: ${t}`),!1)}).filter(Boolean);return n.forEach(t=>{const e=t.getAttribute("data-swup-persist"),i=p(`[data-swup-persist="${e}"]`);i&&i!==t&&i.replaceWith(t)}),o.length===t.containers.length},R=function(t){const e={behavior:"auto"},{target:s,reset:n}=t.scroll,o=null!=s?s:t.to.hash;let r=!1;return o&&(r=this.hooks.callSync("scroll:anchor",t,{hash:o,options:e},(t,{hash:e,options:i})=>{const s=this.getAnchorElement(e);return s&&s.scrollIntoView(i),!!s})),n&&!r&&(r=this.hooks.callSync("scroll:top",t,{options:e},(t,{options:e})=>(window.scrollTo(i({top:0,left:0},e)),!0))),r},T=async function(t){if(t.done)return;const e=this.hooks.call("animation:in:await",t,{skip:!1},(t,{skip:e})=>{if(!e)return this.awaitAnimations({selector:t.animation.selector})});await w(),await this.hooks.call("animation:in:start",t,void 0,()=>{this.classes.remove("is-animating")}),await e,await this.hooks.call("animation:in:end",t,void 0)},N=async function(t,e){if(t.done)return;t.advance(6);const{url:i}=e;this.isSameResolvedUrl(n(),i)||(r(i),this.location=l.fromUrl(i),t.to.url=this.location.url,t.to.hash=this.location.hash),await this.hooks.call("content:replace",t,{page:e},(t,{})=>{if(this.classes.remove("is-leaving"),t.animation.animate&&this.classes.add("is-rendering"),!this.replaceContent(t))throw new Error("[swup] Container mismatch, aborting");t.animation.animate&&(this.classes.add("is-changing","is-animating","is-rendering"),t.animation.name&&this.classes.add(`to-${s(t.animation.name)}`))}),await this.hooks.call("content:scroll",t,void 0,()=>this.scrollToContent(t)),await this.hooks.call("page:view",t,{url:this.location.url,title:document.title})},O=function(t){var e;if(e=t,Boolean(null==e?void 0:e.isSwupPlugin)){if(t.swup=this,!t._checkRequirements||t._checkRequirements())return t._beforeMount&&t._beforeMount(),t.mount(),this.plugins.push(t),this.plugins}else console.error("Not a swup plugin instance",t)};function D(t){const e=this.findPlugin(t);if(e)return e.unmount(),e._afterUnmount&&e._afterUnmount(),this.plugins=this.plugins.filter(t=>t!==e),this.plugins;console.error("No such plugin",e)}function M(t){return this.plugins.find(e=>e===t||e.name===t||e.name===`Swup${String(t)}`)}function W(t){if("function"!=typeof this.options.resolveUrl)return console.warn("[swup] options.resolveUrl expects a callback function."),t;const e=this.options.resolveUrl(t);return e&&"string"==typeof e?e.startsWith("//")||e.startsWith("http")?(console.warn("[swup] options.resolveUrl needs to return a relative url"),t):e:(console.warn("[swup] options.resolveUrl needs to return a url"),t)}function B(t,e){return this.resolveUrl(t)===this.resolveUrl(e)}const j={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',animationScope:"html",cache:!0,containers:["#swup"],hooks:{},ignoreVisit:(t,{el:e}={})=>!(null==e||!e.closest("[data-no-swup]")),linkSelector:"a[href]",linkToSelf:"scroll",native:!1,plugins:[],resolveUrl:t=>t,requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},skipPopStateHandling:t=>{var e;return"swup"!==(null==(e=t.state)?void 0:e.source)},timeout:0};class _{get currentPageUrl(){return this.location.url}constructor(t={}){var e,s;this.version="4.8.1",this.options=void 0,this.defaults=j,this.plugins=[],this.visit=void 0,this.cache=void 0,this.hooks=void 0,this.classes=void 0,this.location=l.fromUrl(window.location.href),this.currentHistoryIndex=void 0,this.clickDelegate=void 0,this.navigating=!1,this.onVisitEnd=void 0,this.use=O,this.unuse=D,this.findPlugin=M,this.log=()=>{},this.navigate=V,this.performNavigation=I,this.createVisit=S,this.delegateEvent=a,this.fetchPage=u,this.awaitAnimations=$,this.renderPage=N,this.replaceContent=q,this.animatePageIn=T,this.animatePageOut=L,this.scrollToContent=R,this.getAnchorElement=C,this.getCurrentUrl=n,this.resolveUrl=W,this.isSameResolvedUrl=B,this.options=i({},this.defaults,t),this.handleLinkClick=this.handleLinkClick.bind(this),this.handlePopState=this.handlePopState.bind(this),this.cache=new d(this),this.classes=new k(this),this.hooks=new E(this),this.visit=this.createVisit({to:""}),this.currentHistoryIndex=null!=(e=null==(s=window.history.state)?void 0:s.index)?e:1,this.enable()}async enable(){var t;const{linkSelector:e}=this.options;this.clickDelegate=this.delegateEvent(e,"click",this.handleLinkClick),window.addEventListener("popstate",this.handlePopState),this.options.animateHistoryBrowsing&&(window.history.scrollRestoration="manual"),this.options.native=this.options.native&&!!document.startViewTransition,this.options.plugins.forEach(t=>this.use(t));for(const[t,e]of Object.entries(this.options.hooks)){const[i,s]=this.hooks.parseName(t);this.hooks.on(i,e,s)}"swup"!==(null==(t=window.history.state)?void 0:t.source)&&r(null,{index:this.currentHistoryIndex}),await w(),await this.hooks.call("enable",void 0,void 0,()=>{const t=document.documentElement;t.classList.add("swup-enabled"),t.classList.toggle("swup-native",this.options.native)})}async destroy(){this.clickDelegate.destroy(),window.removeEventListener("popstate",this.handlePopState),this.cache.clear(),this.options.plugins.forEach(t=>this.unuse(t)),await this.hooks.call("disable",void 0,void 0,()=>{const t=document.documentElement;t.classList.remove("swup-enabled"),t.classList.remove("swup-native")}),this.hooks.clear()}shouldIgnoreVisit(t,{el:e,event:i}={}){const{origin:s,url:n,hash:o}=l.fromUrl(t);return s!==window.location.origin||!(!e||!this.triggerWillOpenNewWindow(e))||!!this.options.ignoreVisit(n+o,{el:e,event:i})}handleLinkClick(t){const e=t.delegateTarget,{href:i,url:s,hash:n}=l.fromElement(e);if(this.shouldIgnoreVisit(i,{el:e,event:t}))return;if(this.navigating&&s===this.visit.to.url)return void t.preventDefault();const o=this.createVisit({to:s,hash:n,el:e,event:t});t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?this.hooks.callSync("link:newtab",o,{href:i}):0===t.button&&this.hooks.callSync("link:click",o,{el:e,event:t},()=>{var e;const i=null!=(e=o.from.url)?e:"";t.preventDefault(),s&&s!==i?this.isSameResolvedUrl(s,i)||this.performNavigation(o):n?this.hooks.callSync("link:anchor",o,{hash:n},()=>{r(s+n),this.scrollToContent(o)}):this.hooks.callSync("link:self",o,void 0,()=>{"navigate"===this.options.linkToSelf?this.performNavigation(o):(r(s),this.scrollToContent(o))})})}handlePopState(t){var e,i,s,o;const r=null!=(e=null==(i=t.state)?void 0:i.url)?e:window.location.href;if(this.options.skipPopStateHandling(t))return;if(this.isSameResolvedUrl(n(),this.location.url))return;const{url:a,hash:h}=l.fromUrl(r),c=this.createVisit({to:a,hash:h,event:t});c.history.popstate=!0;const u=null!=(s=null==(o=t.state)?void 0:o.index)?s:0;u&&u!==this.currentHistoryIndex&&(c.history.direction=u-this.currentHistoryIndex>0?"forwards":"backwards",this.currentHistoryIndex=u),c.animation.animate=!1,c.scroll.reset=!1,c.scroll.target=!1,this.options.animateHistoryBrowsing&&(c.animation.animate=!0,c.scroll.reset=!0),this.hooks.callSync("history:popstate",c,{event:t},()=>{this.performNavigation(c)})}triggerWillOpenNewWindow(t){return!!t.matches('[download], [target="_blank"]')}}
//# sourceMappingURL=Swup.modern.js.map


/***/ }),

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initFrontpageHeader: () => (/* binding */ initFrontpageHeader),
/* harmony export */   initPageFadeIn: () => (/* binding */ initPageFadeIn),
/* harmony export */   initProcess: () => (/* binding */ initProcess),
/* harmony export */   initTeamCulture: () => (/* binding */ initTeamCulture)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");




function initTeamCulture() {
    const container = document.querySelector(".container.sno.team-culture");
    if (!container) {
        console.warn("Team culture container not found!");
        return;
    }

    // Pin the header so it stays fixed throughout the scroll of this section.
    const header = container.querySelector(".header");
    if (header) {
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            pin: header,
            pinSpacing: false, // prevent extra space when pinning
            anticipatePin: 0.5,
            // markers: true, // Uncomment to see trigger markers during development
        });
    }
}

function initProcess(locomotiveScroll) {
    // Get the indicator element that holds the phase titles.
    const indicator = document.querySelector(".indicator");
    if (!indicator) {
        console.warn("No indicator element found.");
        return;
    }

    // Get all spans within the indicator.
    const spans = indicator.querySelectorAll("a");

    // Get the process container and all process segments.
    const processContainer = document.querySelector(".container.sno.process");
    if (!processContainer) {
        console.warn("No process container found.");
        return;
    }

    // Select all process segments using the process-phase attribute.
    const processSections = processContainer.querySelectorAll("section[process-phase]");

    // Pin the indicator while scrolling through the process container.
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
        trigger: processContainer,
        start: "top top",
        end: "bottom bottom",
        pin: indicator,
        pinSpacing: false,
        // markers: true, // Uncomment to debug pin positions.
    });

    let isScrolling = false;

    // For each process segment, create a ScrollTrigger to update the indicator.
    processSections.forEach((section) => {
        const phase = section.getAttribute("process-phase").trim();

        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
                updateIndicator(phase);
            },
            onEnterBack: () => {
                updateIndicator(phase);
            },
            // markers: true, // Uncomment for debugging.
        });
    });

    // Helper function to update indicator spans.
    function updateIndicator(activePhase) {
        if (!isScrolling) {
            spans.forEach((span) => {
                if (span.textContent.trim() === activePhase) {
                    span.classList.add("primary");
                } else {
                    span.classList.remove("primary");
                }
            });
        }
    }

    // Listen for clicks on indicator links.
    document.querySelectorAll(".indicator a").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSelector = link.getAttribute("data-target");
            const targetElem = document.querySelector(targetSelector);
            if (targetElem) {
                isScrolling = true;

                locomotiveScroll.scrollTo(targetElem, {
                    offset: 0,
                    duration: 1, // in seconds
                    onComplete: () => {
                        isScrolling = false;
                    },
                });

                spans.forEach((span) => {
                    span.classList.remove("primary");
                });
                link.classList.add("primary");
            }
        });
    });

    // Cancel the programmatic scroll if the user manually interacts.
    document.addEventListener("wheel", () => {
        isScrolling = false;
    });
    document.addEventListener("touchstart", () => {
        isScrolling = false;
    });
}

function initFrontpageHeader(locomotiveScroll) {
    const header = document.querySelector(".frontpage-header .header");
    const nav = document.querySelector("nav.floating-menu .translucent");
    const container = document.querySelector(".frontpage-header");
    if (!header) return;
    // Pin the header so it stays fixed during the scroll.
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom top",
    });

    // Create the initial fade in up timeline.
    const tl = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline();
    tl.from(header.querySelector(".logotype"), { opacity: 0, y: 50, duration: 1 }).from(header.querySelector(".text"), { opacity: 0, y: 50, duration: 1 }, "-=0.8").from(nav, { y: 100, duration: 1 }, "-=0.8");

    // Function to set up scroll-trigger animations after fade-in.
    function setupScrollTriggers() {
        // Animate the logotype upward on scroll.
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(header.querySelector("svg"), {
            y: "-80vh",

            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isMobileDevice)() ? "+=150%" : "+=100%",
                scrub: true,
            },
        });

        console.log((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isMobileDevice)());

        // Animate the text upward on scroll.
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(header.querySelectorAll("h1, h2"), {
            y: "-60vh",
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isMobileDevice)() ? "+=150%" : "+=100%",
                scrub: true,
            },
        });
    }

    setupScrollTriggers();
}

function initPageFadeIn() {
    // Create a timeline for your fade-in animations
    const tl = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline();
    // Simple fade in for the nav
    tl.from("nav.floating-menu .translucent", { y: 100, duration: 1 }, "<");
}


/***/ }),

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupSocialProof: () => (/* binding */ cleanupSocialProof),
/* harmony export */   initActivateVideoSound: () => (/* binding */ initActivateVideoSound),
/* harmony export */   initBenefitsList: () => (/* binding */ initBenefitsList),
/* harmony export */   initFrontpageServices: () => (/* binding */ initFrontpageServices),
/* harmony export */   initLottieAnimations: () => (/* binding */ initLottieAnimations),
/* harmony export */   initServiceCards: () => (/* binding */ initServiceCards),
/* harmony export */   initSocialProof: () => (/* binding */ initSocialProof),
/* harmony export */   initTestimonial: () => (/* binding */ initTestimonial),
/* harmony export */   initWorkPage: () => (/* binding */ initWorkPage)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _dotlottie_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dotlottie/player-component */ "./node_modules/@dotlottie/player-component/dist/dotlottie-player.mjs");



let socialProofMarquees = [];
let socialProofSliders = [];

function initActivateVideoSound() {
    const videos = document.querySelectorAll("video.enable-activate-sound");
    const cursorSound = document.querySelector(".cursor-activate-sound");

    videos.forEach((v) => {
        v.addEventListener("click", (e) => {
            const clickedVideo = e.target.closest("video");
            const wrapper = e.target.closest(".lazy-video-wrapper");
            const muteIcon = wrapper ? wrapper.querySelector(".mute-icon") : null;

            if (clickedVideo) {
                if (clickedVideo.muted) {
                    // Mute all other videos
                    videos.forEach((video) => {
                        if (video !== clickedVideo) {
                            video.muted = true;
                        }
                    });
                    // Unmute and play the clicked video
                    clickedVideo.muted = false;
                    clickedVideo.play().catch((err) => console.error("Play failed:", err));
                    if (muteIcon) muteIcon.style.opacity = 0;

                    // If hovered, update the cursor text to indicate "Mute Sound"
                    if (clickedVideo.matches(":hover")) {
                        cursorSound.textContent = "Mute Sound";
                    }
                } else {
                    // Mute the clicked video (so no video plays with sound)
                    clickedVideo.muted = true;
                    if (muteIcon) muteIcon.style.opacity = 1;
                    if (clickedVideo.matches(":hover")) {
                        cursorSound.textContent = "Activate Sound";
                    }
                }
            }
        });
    });
}

function initLottieAnimations() {
    // Find all lottie containers on the page.
    const containers = document.querySelectorAll(".lottie-animation");

    containers.forEach((container) => {
        const path = container.getAttribute("data-lottie-path");
        const player = container.querySelector("dotlottie-player");
        player.load(path);
    });
}

function initWorkPage() {
    const filterItems = document.querySelectorAll(".filter-item");
    const projects = document.querySelectorAll(".project");
    const workContainer = document.querySelector(".container.sno.work .work-wrapper");

    // Set initial active state: assume the first filter is "All"
    filterItems.forEach((item) => (item.style.opacity = "0.6"));
    if (filterItems[0]) filterItems[0].style.opacity = "1";

    filterItems.forEach((item) => {
        item.addEventListener("click", function () {
            const filterText = this.textContent.trim().toLowerCase();

            // Update filter item opacity for active state.
            filterItems.forEach((i) => (i.style.opacity = "0.6"));
            this.style.opacity = "1";

            // Create a GSAP timeline to manage the transition phases.
            const tl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline();

            // 1. Fade out the entire work container.
            tl.to(workContainer, {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: () => {
                    // 2. Update each project's display based on the filter.
                    projects.forEach((project) => {
                        const rawTypes = (project.getAttribute("project-type") || "").toLowerCase();
                        // Split by pipe delimiter (service names are separated by " | " in PHP)
                        // This keeps multi-word service names intact (e.g., "brand strategy" stays as one item)
                        const types = rawTypes
                            .split("|")
                            .map((s) => s.trim())
                            .filter(Boolean);

                        if (filterText === "all" || types.includes(filterText)) {
                            project.style.display = "";
                        } else {
                            project.style.display = "none";
                        }
                    });
                },
            });

            // 3. Fade the container back in with updated displays.
            tl.to(workContainer, {
                autoAlpha: 1,
                duration: 0.5,
                ease: "power2.inOut",
            });
        });
    });
}

function initFrontpageServices() {
    // Get all containers acting as slideshows.
    const wrappers = document.querySelectorAll(".cover-image-wrapper");

    wrappers.forEach((wrapper) => {
        // Get Image Element
        const imgElement = wrapper.querySelector("img");
        // Read original dimensions from data attributes and fix the container height.
        const origWidth = parseFloat(imgElement.getAttribute("width"));
        const origHeight = parseFloat(imgElement.getAttribute("height"));
        if (origWidth && origHeight) {
            const aspectRatio = origHeight / origWidth;
            wrapper.style.height = `${wrapper.offsetWidth * aspectRatio}px`;
        }

        // Get all <picture> elements inside the wrapper.
        const pictures = Array.from(wrapper.querySelectorAll("picture"));
        if (!pictures.length) return;

        // Ensure each picture fills the container.
        pictures.forEach((pic) => {
            pic.style.width = "100%";
            pic.style.height = "100%";
        });

        // Initially, only the first picture is visible.
        pictures.forEach((pic, idx) => {
            pic.style.display = idx === 0 ? "block" : "none";
        });

        let currentIndex = 0;
        let swapTimeout;

        // Preload all images on start.
        pictures.forEach((pic) => {
            const img = pic.querySelector("img");
            if (img && !img.complete) {
                const preloadImg = new Image();
                preloadImg.src = img.src;
            }
        });

        // Function to swap to the next image after ensuring it's loaded.
        function swap() {
            // Hide the current picture.
            pictures[currentIndex].style.display = "none";

            // Determine the next index.
            const nextIndex = (currentIndex + 1) % pictures.length;
            const nextPic = pictures[nextIndex];
            const nextImg = nextPic.querySelector("img");

            // Helper to show the next image.
            function showNext() {
                nextPic.style.display = "block";
                currentIndex = nextIndex;

                // Optionally preload the image after next.
                const subsequentIndex = (currentIndex + 1) % pictures.length;
                const subsequentImg = pictures[subsequentIndex].querySelector("img");
                if (subsequentImg && !subsequentImg.complete) {
                    const preImg = new Image();
                    preImg.src = subsequentImg.src;
                }

                // Schedule the next swap.
                swapTimeout = setTimeout(swap, 500);
            }

            // If the next image is loaded, show it; otherwise wait for the load event.
            if (nextImg.complete && nextImg.naturalWidth > 0) {
                showNext();
            } else {
                nextImg.addEventListener("load", function handler() {
                    showNext();
                    nextImg.removeEventListener("load", handler);
                });
            }
        }

        // Start the slideshow on hover.
        wrapper.addEventListener("mouseenter", () => {
            swapTimeout = setTimeout(swap, 250);
        });

        // Stop the slideshow on mouseleave without resetting the current image.
        wrapper.addEventListener("mouseleave", () => {
            if (swapTimeout) {
                clearTimeout(swapTimeout);
                swapTimeout = null;
            }
        });

        // Update the container height on window resize.
        window.addEventListener("resize", () => {
            if (origWidth && origHeight) {
                const aspectRatio = origHeight / origWidth;
                wrapper.style.height = `${wrapper.offsetWidth * aspectRatio}px`;
            }
        });
    });
}

function initServiceCards() {
    const cards = document.querySelectorAll("[data-service-card]");

    const openPanel = (source) => {
        const column = source.closest("[class^='col-']");
        const panel = column?.querySelector(".service-panel");
        const card = column?.querySelector("[data-service-card]");
        if (!panel) return;

        panel.classList.add("is-open");
        card?.setAttribute("aria-expanded", "true");
    };

    const closePanel = (panel) => {
        panel.classList.remove("is-open");
        panel.closest("[class^='col-']")?.querySelector("[data-service-card]")?.setAttribute("aria-expanded", "false");
    };

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            openPanel(card);
        });

        card.addEventListener("keydown", (e) => {
            if (e.key !== "Enter" && e.key !== " ") return;

            e.preventDefault();
            openPanel(card);
        });
    });

    const closes = document.querySelectorAll("[data-service-close]");

    closes.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const panel = btn.closest(".service-panel");
            if (panel) closePanel(panel);
        });
    });

    const panels = document.querySelectorAll(".service-panel");

    panels.forEach((panel) => {
        panel.addEventListener("click", (e) => {
            if (!e.target.closest(".panel-content")) {
                closePanel(panel);
            }
        });
    });
}

function initTestimonial() {
    const root = document.querySelector(".sno.testimonial");
    if (!root) return;

    const entries = Array.from(root.querySelectorAll(".entry"));
    if (entries.length < 2) return;

    const dots = Array.from(root.querySelectorAll(".pagination-dot"));
    const nextBtn = root.querySelector(".pagination-next");
    const FADE_MS = 240; // sync with your CSS

    // 1) pre-measure heights
    const heights = entries.map((el) => el.offsetHeight);

    // 2) lock initial container height
    root.style.height = `${heights[0]}px`;
    root.style.transition = "height 300ms ease-in-out";

    let current = 0;
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    // 3) fade-out → resize → fade-in
    async function show(i) {
        const next = (i + entries.length) % entries.length;
        if (next === current) return;

        // a) fade out current
        root.style.height = `${heights[current]}px`;
        entries[current].classList.remove("active");
        await wait(FADE_MS);

        // b) resize
        root.style.height = `${heights[next]}px`;

        // c) fade in next
        entries[next].classList.add("active");

        // d) update dots
        dots.forEach((dot, idx) => dot.classList.toggle("active", idx === next));

        current = next;
    }

    // 4) wire up controls
    dots.forEach((d, i) => d.addEventListener("click", () => show(i)));
    if (nextBtn) nextBtn.addEventListener("click", () => show(current + 1));

    // ——— new: click on the container itself advances to next ———
    root.addEventListener("click", (e) => {
        // if click wasn’t inside the pagination controls, go next
        if (!e.target.closest(".pagination-controls")) {
            show(current + 1);
        }
    });

    // 5) initial state
    entries.forEach((el, i) => el.classList.toggle("active", i === 0));
}

function initBenefitsList() {
    const lists = document.querySelectorAll("[data-benefits-list]");
    if (!lists.length) return;

    const supportsHover = window.matchMedia("(hover: hover)").matches;
    const isMobile = window.innerWidth < 992;

    lists.forEach((list) => {
        const items = Array.from(list.querySelectorAll("[data-benefits-list-item]"));
        const panel = list.parentElement?.querySelector("[data-benefits-list-panel]");
        const panelCopy = panel?.querySelector("[data-benefits-list-panel-copy]");
        if (!items.length) return;

        const hidePanel = () => {
            if (!panel || !panelCopy) return;
            panel.classList.remove("is-visible");
            panel.setAttribute("aria-hidden", "true");
            panelCopy.innerHTML = "";
        };

        const positionPanel = (clientX, clientY) => {
            if (!panel) return;

            const offset = 24;
            const viewportPadding = 24;
            const panelWidth = panel.offsetWidth || 280;
            const panelHeight = panel.offsetHeight || 120;

            let x = clientX + offset;
            let y = clientY + offset;

            if (x + panelWidth + viewportPadding > window.innerWidth) {
                x = clientX - panelWidth - offset;
            }

            if (y + panelHeight + viewportPadding > window.innerHeight) {
                y = clientY - panelHeight - offset;
            }

            panel.style.transform = `translate3d(${Math.max(viewportPadding, x)}px, ${Math.max(viewportPadding, y)}px, 0)`;
        };

        const showPanel = (html, clientX, clientY) => {
            if (!panel || !panelCopy || !html) return;

            panelCopy.innerHTML = html;
            panel.classList.add("is-visible");
            panel.setAttribute("aria-hidden", "false");
            positionPanel(clientX, clientY);
        };

        items.forEach((item) => {
            const trigger = item.querySelector("[data-benefits-list-trigger]");
            const copy = item.querySelector("[data-benefits-list-copy]");
            if (!trigger) return;

            if (isMobile) {
                trigger.setAttribute("aria-expanded", "false");
                return;
            }

            if (supportsHover) {
                trigger.addEventListener("mouseenter", (e) => {
                    showPanel(copy?.innerHTML, e.clientX, e.clientY);
                });

                trigger.addEventListener("mousemove", (e) => {
                    showPanel(copy?.innerHTML, e.clientX, e.clientY);
                });

                trigger.addEventListener("mouseleave", () => {
                    hidePanel();
                });

                return;
            }

            trigger.addEventListener("click", (e) => {
                e.stopPropagation();
                const isActive = item.classList.contains("active");

                items.forEach((entry) => {
                    entry.classList.remove("active");
                    const entryTrigger = entry.querySelector("[data-benefits-list-trigger]");
                    if (entryTrigger) entryTrigger.setAttribute("aria-expanded", "false");
                });

                if (isActive) {
                    hidePanel();
                    return;
                }

                const rect = trigger.getBoundingClientRect();
                item.classList.add("active");
                trigger.setAttribute("aria-expanded", "true");
                showPanel(copy?.innerHTML, rect.left + rect.width / 2, rect.bottom);
            });
        });

        if (!supportsHover && !isMobile) {
            document.addEventListener("click", (e) => {
                if (e.target.closest("[data-benefits-list-trigger]")) return;

                items.forEach((entry) => {
                    entry.classList.remove("active");
                    const entryTrigger = entry.querySelector("[data-benefits-list-trigger]");
                    if (entryTrigger) entryTrigger.setAttribute("aria-expanded", "false");
                });
                hidePanel();
            });

            window.addEventListener("resize", hidePanel);
            window.addEventListener("scroll", hidePanel, { passive: true });
        }
    });
}

function initSocialProof() {
    cleanupSocialProof();

    const sliders = document.querySelectorAll("[data-social-proof-slider]");
    const marquees = document.querySelectorAll("[data-social-proof-marquee]");
    if (!sliders.length && !marquees.length) return;

    const supportsHover = window.matchMedia("(hover: hover)").matches;

    sliders.forEach((root) => {
        const entries = Array.from(root.querySelectorAll(".entry"));
        if (!entries.length) return;

        const progressButton = root.querySelector("[data-social-proof-progress-button]");
        const currentLabel = root.querySelector("[data-social-proof-current]");
        const hasMultiple = entries.length > 1;

        const state = {
            root,
            entries,
            progressButton,
            currentLabel,
            rafId: null,
            resizeObserver: null,
            resizeHandler: null,
            mouseEnterHandler: null,
            mouseLeaveHandler: null,
            clickHandler: null,
            dotHandlers: [],
            current: 0,
            elapsed: 0,
            lastTime: 0,
            duration: 7500,
            paused: false,
        };

        const updatePagination = (value) => {
            if (state.progressButton) {
                state.progressButton.style.setProperty("--progress", value.toString());
                state.progressButton.setAttribute("aria-label", `Show next testimonial (${state.current + 1}/${state.entries.length})`);
            }

            if (state.currentLabel) {
                state.currentLabel.textContent = String(state.current + 1);
            }
        };

        const updateHeight = () => {
            if (!state.entries[state.current]) return;
            root.style.height = `${state.entries[state.current].offsetHeight}px`;
        };

        const show = (index) => {
            const next = (index + state.entries.length) % state.entries.length;
            if (next === state.current) return;

            state.entries[state.current].classList.remove("active");
            state.entries[next].classList.add("active");
            state.current = next;
            state.elapsed = 0;
            updatePagination(0);
            updateHeight();
        };

        const step = (now) => {
            if (!hasMultiple) return;
            if (!state.lastTime) state.lastTime = now;
            const delta = now - state.lastTime;
            state.lastTime = now;

            if (!state.paused) {
                state.elapsed += delta;
                const progress = Math.min(state.elapsed / state.duration, 1);
                updatePagination(progress);

                if (progress >= 1) {
                    show(state.current + 1);
                }
            }

            state.rafId = window.requestAnimationFrame(step);
        };

        state.entries.forEach((entry, index) => {
            entry.classList.toggle("active", index === 0);
        });

        updatePagination(0);
        updateHeight();

        if (hasMultiple) {
            state.clickHandler = (e) => {
                if (e.target.closest(".pagination-controls")) return;
                show(state.current + 1);
            };
            root.addEventListener("click", state.clickHandler);

            if (state.progressButton) {
                const handler = (e) => {
                    e.stopPropagation();
                    show(state.current + 1);
                };
                state.progressButton.addEventListener("click", handler);
                state.dotHandlers.push({ dot: state.progressButton, handler });
            }

            if (supportsHover) {
                state.mouseEnterHandler = () => {
                    state.paused = true;
                };
                state.mouseLeaveHandler = () => {
                    state.paused = false;
                    state.lastTime = 0;
                };

                root.addEventListener("mouseenter", state.mouseEnterHandler);
                root.addEventListener("mouseleave", state.mouseLeaveHandler);
            }

            if ("ResizeObserver" in window) {
                state.resizeObserver = new ResizeObserver(() => updateHeight());
                state.entries.forEach((entry) => state.resizeObserver.observe(entry));
                state.resizeObserver.observe(root);
            } else {
                state.resizeHandler = () => updateHeight();
                window.addEventListener("resize", state.resizeHandler);
            }

            state.rafId = window.requestAnimationFrame(step);
        }

        socialProofSliders.push(state);
    });

    marquees.forEach((marquee) => {
        const track = marquee.querySelector("[data-social-proof-track]");
        const sequence = marquee.querySelector("[data-social-proof-sequence]");
        if (!track || !sequence || sequence.children.length === 0) return;

        const clone = sequence.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.classList.add("is-clone");
        track.appendChild(clone);

        const state = {
            marquee,
            track,
            sequence,
            clone,
            rafId: null,
            resizeObserver: null,
            resizeHandler: null,
            mouseEnterHandler: null,
            mouseLeaveHandler: null,
            sequenceWidth: 0,
            x: 0,
            lastTime: 0,
            currentSpeed: 56,
            targetSpeed: 56,
            baseSpeed: 56,
            hoverSpeed: 24,
        };

        const measure = () => {
            state.sequenceWidth = state.sequence.getBoundingClientRect().width;
            if (!state.sequenceWidth) return;

            if (-state.x >= state.sequenceWidth) {
                state.x = state.x % state.sequenceWidth;
            }
            state.track.style.transform = `translate3d(${state.x}px, 0, 0)`;
        };

        const step = (now) => {
            if (!state.lastTime) state.lastTime = now;
            const delta = (now - state.lastTime) / 1000;
            state.lastTime = now;

            if (state.sequenceWidth > 0) {
                state.currentSpeed += (state.targetSpeed - state.currentSpeed) * 0.08;
                state.x -= state.currentSpeed * delta;

                if (-state.x >= state.sequenceWidth) {
                    state.x += state.sequenceWidth;
                }

                state.track.style.transform = `translate3d(${state.x}px, 0, 0)`;
            }

            state.rafId = window.requestAnimationFrame(step);
        };

        if (supportsHover) {
            state.mouseEnterHandler = () => {
                state.targetSpeed = state.hoverSpeed;
            };
            state.mouseLeaveHandler = () => {
                state.targetSpeed = state.baseSpeed;
            };

            marquee.addEventListener("mouseenter", state.mouseEnterHandler);
            marquee.addEventListener("mouseleave", state.mouseLeaveHandler);
        }

        if ("ResizeObserver" in window) {
            state.resizeObserver = new ResizeObserver(() => measure());
            state.resizeObserver.observe(sequence);
            state.resizeObserver.observe(marquee);
        } else {
            state.resizeHandler = () => measure();
            window.addEventListener("resize", state.resizeHandler);
        }

        measure();
        state.rafId = window.requestAnimationFrame(step);
        socialProofMarquees.push(state);
    });
}

function cleanupSocialProof() {
    socialProofSliders.forEach((state) => {
        if (state.rafId) {
            window.cancelAnimationFrame(state.rafId);
        }
        if (state.resizeObserver) {
            state.resizeObserver.disconnect();
        }
        if (state.resizeHandler) {
            window.removeEventListener("resize", state.resizeHandler);
        }
        if (state.mouseEnterHandler) {
            state.root.removeEventListener("mouseenter", state.mouseEnterHandler);
        }
        if (state.mouseLeaveHandler) {
            state.root.removeEventListener("mouseleave", state.mouseLeaveHandler);
        }
        if (state.clickHandler) {
            state.root.removeEventListener("click", state.clickHandler);
        }
        state.dotHandlers.forEach(({ dot, handler }) => {
            dot.removeEventListener("click", handler);
        });
    });

    socialProofSliders = [];

    socialProofMarquees.forEach((state) => {
        if (state.rafId) {
            window.cancelAnimationFrame(state.rafId);
        }
        if (state.resizeObserver) {
            state.resizeObserver.disconnect();
        }
        if (state.resizeHandler) {
            window.removeEventListener("resize", state.resizeHandler);
        }
        if (state.mouseEnterHandler) {
            state.marquee.removeEventListener("mouseenter", state.mouseEnterHandler);
        }
        if (state.mouseLeaveHandler) {
            state.marquee.removeEventListener("mouseleave", state.mouseLeaveHandler);
        }
        if (state.clone && state.clone.parentNode) {
            state.clone.parentNode.removeChild(state.clone);
        }
    });

    socialProofMarquees = [];
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupLazyVideoObservers: () => (/* binding */ cleanupLazyVideoObservers),
/* harmony export */   initAccordions: () => (/* binding */ initAccordions),
/* harmony export */   initCopyEmail: () => (/* binding */ initCopyEmail),
/* harmony export */   initCursor: () => (/* binding */ initCursor),
/* harmony export */   initFooterClock: () => (/* binding */ initFooterClock),
/* harmony export */   initLazyVideos: () => (/* binding */ initLazyVideos),
/* harmony export */   isMobileDevice: () => (/* binding */ isMobileDevice),
/* harmony export */   resetCustomCursor: () => (/* binding */ resetCustomCursor)
/* harmony export */ });
// Icon constants
const PLUS_ICON = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33969 4.65993H0.429688V3.33993H3.33969V0.429932H4.65969V3.33993H7.56969V4.65993H4.65969V7.56993H3.33969V4.65993Z" fill="#211E1F" />
</svg>`;

const MINUS_ICON = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.429688 3.33984V4.65984H7.56969V3.33984H0.429688Z" fill="#211E1F" />
</svg>`;

//
//
// Custom Cursor
function initCursor(cursorTargets) {
    if (!isMobileDevice()) {
        const screenWidth = window.innerWidth;
        const maxWidthForMobile = 992;
        const customCursor = document.querySelector(".cursor");
        const isTouchCapable = navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;
        if (!customCursor) return;

        if (screenWidth <= maxWidthForMobile || isTouchCapable) {
            // Hide custom cursor on mobile and touch-capable desktop devices
            customCursor.style.display = "none";
            return;
        }

        customCursor.style.display = "";

        document.addEventListener("mousemove", (e) => {
            window.lastMouseX = e.clientX;
            window.lastMouseY = e.clientY;
        });

        function animateCursor() {
            customCursor.style.transform = `translate3d(${window.lastMouseX}px, ${window.lastMouseY}px, 0)`;
            requestAnimationFrame(animateCursor);
        }
        requestAnimationFrame(animateCursor);

        // Initialize cursor targets
        initCursorTargets(customCursor, cursorTargets);
    }
}

function resetCustomCursor() {
    const customCursor = document.querySelector(".cursor");
    customCursor.className = "cursor";
}

function initCursorTargets(customCursor, cursorTargets) {
    // Keep track of active modes (assuming one at a time)
    let activeModes = new Set();

    for (const selector in cursorTargets) {
        const modeClass = cursorTargets[selector];
        const targets = document.querySelectorAll(selector);

        targets.forEach((target) => {
            target.addEventListener("mouseenter", () => {
                // Clear any existing modes
                activeModes.forEach((m) => customCursor.classList.remove(m));
                activeModes.clear();

                // Add the new mode
                customCursor.classList.add("cursor-active");
                customCursor.classList.add(modeClass);
                activeModes.add(modeClass);

                // Update cursor text based on the video's state
                updateCursorTextForVideo(target, customCursor);
            });

            target.addEventListener("mouseleave", () => {
                // Remove the mode for this target
                customCursor.classList.remove(modeClass);
                activeModes.delete(modeClass);

                // Optionally revert to a default state if no modes remain
                if (activeModes.size === 0) {
                    customCursor.classList.remove("cursor-active");
                    const cursorSound = customCursor.querySelector(".cursor-activate-sound");
                    if (cursorSound) {
                        cursorSound.textContent = "Activate Sound";
                    }
                }
            });
        });
    }
}

function updateCursorTextForVideo(video, customCursor) {
    const cursorSound = customCursor.querySelector(".cursor-activate-sound");
    cursorSound.textContent = video.muted ? "Activate Sound" : "Mute Sound";
}

function isMobileDevice() {
    return window.innerWidth < 992; // Mobile screens are typically 767px or less
}

//
//
// Accordion Mechanic
function initAccordions() {
    const accordions = document.querySelectorAll(".accordion");

    if (accordions.length > 0) {
        accordions.forEach((accordion) => {
            const button = accordion.querySelector(".accordion-button");
            const panel = accordion.querySelector(".accordion-panel");

            button.addEventListener("click", function () {
                const isActive = this.classList.contains("active");
                const span = this.querySelector(".accordion-indicator");

                // Toggle the current panel
                this.classList.toggle("active");

                if (panel) {
                    if (isActive) {
                        panel.style.display = "none";
                        span.innerHTML = PLUS_ICON;
                    } else {
                        panel.style.display = "flex";
                        span.innerHTML = MINUS_ICON;
                    }
                }
            });
        });
    }

    // Set equal heights for upper-card-content in offering blocks
    setUpperCardContentHeights();

    // Throttled resize handler
    window.addEventListener("resize", throttle(setUpperCardContentHeights, 150));
}

// Utility: Throttle function
function throttle(fn, wait) {
    let lastTime = 0;
    let timeout;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            fn.apply(this, args);
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                lastTime = Date.now();
                fn.apply(this, args);
            }, wait - (now - lastTime));
        }
    };
}

// Set equal heights for upper-card-content in each .row.stretch-xs
function setUpperCardContentHeights() {
    // For each row.stretch-xs
    document.querySelectorAll(".sno.content-layout .row.stretch-xs").forEach((row) => {
        // Find all upper-card-content in this row
        const uppers = row.querySelectorAll(".upper-card-content");
        if (uppers.length < 2) return; // Only if more than one
        // Reset heights first
        uppers.forEach((el) => (el.style.height = ""));
        // Measure max height
        let maxHeight = 0;
        uppers.forEach((el) => {
            const h = el.offsetHeight;
            if (h > maxHeight) maxHeight = h;
        });
        // Set all to max height
        uppers.forEach((el) => (el.style.height = maxHeight + "px"));
    });
}

//
//
// Footer Clock
function initFooterClock() {
    const footer = document.querySelector("footer");
    if (footer) {
        const clockEl = document.querySelector(".clock");
        if (!clockEl) return;

        function updateClock() {
            const now = new Date();
            // Get Vienna time, including time zone short name (CET or CEST)
            const timeString = now.toLocaleTimeString("en-GB", {
                timeZone: "Europe/Vienna",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
            });
            clockEl.textContent = `${timeString}, VIE / SBG`;
        }

        updateClock(); // initial update
        setInterval(updateClock, 1000); // update every minute
    }
}

// Global array to hold IntersectionObservers.
let lazyVideoObservers = [];

function initLazyVideos() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const lazyVideos = document.querySelectorAll(".lazy");

    function applyVideoAspectRatio(wrapper) {
        const isMobile = isMobileDevice();
        const width = isMobile
            ? (wrapper.getAttribute("data-width-mobile") || wrapper.getAttribute("data-width-desktop"))
            : (wrapper.getAttribute("data-width-desktop") || wrapper.getAttribute("data-width-mobile"));
        const height = isMobile
            ? (wrapper.getAttribute("data-height-mobile") || wrapper.getAttribute("data-height-desktop"))
            : (wrapper.getAttribute("data-height-desktop") || wrapper.getAttribute("data-height-mobile"));

        if (width && height) {
            const aspectRatio = (height / width) * 100;
            wrapper.style.paddingBottom = `${aspectRatio}%`;
        }
    }

    lazyVideos.forEach((video) => {
        const wrapper = video.closest(".lazy-video-wrapper");

        // Reserve space based on the currently relevant desktop/mobile ratio.
        applyVideoAspectRatio(wrapper);

        // Use IntersectionObserver if available.
        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !video.hasAttribute("data-loaded")) {
                            loadVideo(video);
                        } else if (!entry.isIntersecting && video.hasAttribute("data-loaded")) {
                            unloadVideo(video);
                        }
                    });
                },
                {
                    rootMargin: "200px 0px",
                    threshold: 0.1,
                }
            );
            observer.observe(video);
            lazyVideoObservers.push(observer);
        }
    });

    window.addEventListener(
        "resize",
        throttle(() => {
            document.querySelectorAll(".lazy-video-wrapper").forEach(applyVideoAspectRatio);
        }, 150)
    );

    function loadVideo(video) {
        const wrapper = video.closest(".lazy-video-wrapper");
        const isMobile = isMobileDevice(); // Your mobile detection helper.
        let chosenUrl = "";
        let mimeType = "";

        if (isSafari) {
            // 1. Correct-size mp4
            chosenUrl = isMobile
                ? wrapper.getAttribute("data-scr-mp4-mobile")
                : wrapper.getAttribute("data-scr-mp4-full");
            // 2. Cross-size mp4 fallback
            if (!chosenUrl) {
                chosenUrl = isMobile
                    ? wrapper.getAttribute("data-scr-mp4-full")
                    : wrapper.getAttribute("data-scr-mp4-mobile");
            }
            mimeType = "video/mp4";
            // 3. Last resort: webm (Safari 16+ supports VP9/WebM)
            if (!chosenUrl) {
                chosenUrl = isMobile
                    ? (wrapper.getAttribute("data-scr-webm-mobile") || wrapper.getAttribute("data-scr-webm-full"))
                    : (wrapper.getAttribute("data-scr-webm-full") || wrapper.getAttribute("data-scr-webm-mobile"));
                if (chosenUrl) mimeType = "video/webm";
            }
        } else {
            // 1. Correct-size webm
            chosenUrl = isMobile
                ? wrapper.getAttribute("data-scr-webm-mobile")
                : wrapper.getAttribute("data-scr-webm-full");
            // 2. Cross-size webm fallback
            if (!chosenUrl) {
                chosenUrl = isMobile
                    ? wrapper.getAttribute("data-scr-webm-full")
                    : wrapper.getAttribute("data-scr-webm-mobile");
            }
            mimeType = "video/webm";
            // 3. Fallback to mp4 if no webm available (mp4-only assets)
            if (!chosenUrl) {
                chosenUrl = isMobile
                    ? (wrapper.getAttribute("data-scr-mp4-mobile") || wrapper.getAttribute("data-scr-mp4-full"))
                    : (wrapper.getAttribute("data-scr-mp4-full") || wrapper.getAttribute("data-scr-mp4-mobile"));
                if (chosenUrl) mimeType = "video/mp4";
            }
        }

        if (!chosenUrl) {
            console.warn("No chosen video source found for", video);
            return;
        }

        // Check for an existing <source> element; create one if missing.
        let source = video.querySelector("source");
        if (!source) {
            source = document.createElement("source");
            video.appendChild(source);
        }
        // Set the source attributes.
        source.src = chosenUrl;
        source.type = mimeType;

        // Mark the video as loaded and load it.
        video.setAttribute("data-loaded", "true");
        video.load();

        if (video.readyState >= 3) {
            if (video.hasAttribute("autoplay")) video.play();
            video.classList.add("loaded");
        } else {
            video.addEventListener(
                "canplaythrough",
                () => {
                    video.classList.add("loaded"); // CSS fade-in effect.
                    if (video.hasAttribute("autoplay")) {
                        video.play();
                    }
                },
                { once: true }
            );
        }
    }

    function unloadVideo(video) {
        if (!video.paused) {
            video.pause();
        }
        const source = video.querySelector("source");
        if (source) {
            source.removeAttribute("src"); // Remove source to unload video
            video.removeAttribute("data-loaded"); // Reset loaded flag
            video.load(); // Reset the video element
            video.classList.remove("loaded"); // Optional: reset fade-in effect
        }
    }
}

// Optional cleanup function (e.g. on swup page transitions).
function cleanupLazyVideoObservers() {
    lazyVideoObservers.forEach((observer) => observer.disconnect());
    lazyVideoObservers = [];
}

// Copy email to clipboard functionality
function initCopyEmail() {
    const buttons = document.querySelectorAll(".copy-email-btn");
    
    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    buttons.forEach((button) => {
        const email = button.getAttribute("data-email");
        if (!email) return;

        // On touch devices, just open mail client
        if (isTouchDevice) {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = `mailto:${email}`;
            });
            return; // Skip the rest of the desktop functionality
        }

        // Desktop: Copy functionality
        const defaultText = button.querySelector(".default-text");
        const emailText = button.querySelector(".email-text");
        const copyLabel = button.querySelector(".copy-label");
        const copiedLabel = button.querySelector(".copied-label");

        let isAnimating = false;

        // Hover: Show email and copy label (instant, no fade)
        button.addEventListener("mouseenter", () => {
            if (isAnimating) return;
            defaultText.style.display = "none";
            emailText.style.display = "block";
            copyLabel.style.display = "inline-flex";
        });

        button.addEventListener("mouseleave", () => {
            if (isAnimating) return;
            defaultText.style.display = "block";
            emailText.style.display = "none";
            copyLabel.style.display = "none";
        });

        // Click: Copy to clipboard
        button.addEventListener("click", async (e) => {
            e.preventDefault();
            if (isAnimating) return;

            isAnimating = true;

            try {
                // Copy to clipboard (works in modern browsers including Safari)
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(email);
                } else {
                    // Fallback for older browsers
                    const textArea = document.createElement("textarea");
                    textArea.value = email;
                    textArea.style.position = "fixed";
                    textArea.style.left = "-999999px";
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textArea);
                }

                // Show "Copied" state
                copyLabel.style.display = "none";
                copiedLabel.style.display = "inline-flex";

                // Reset after 3 seconds
                setTimeout(() => {
                    copiedLabel.style.display = "none";
                    
                    // Check if still hovering
                    if (button.matches(":hover")) {
                        // Keep showing email + copy label
                        defaultText.style.display = "none";
                        emailText.style.display = "block";
                        copyLabel.style.display = "inline-flex";
                    } else {
                        // Back to default state
                        defaultText.style.display = "block";
                        emailText.style.display = "none";
                        copyLabel.style.display = "none";
                    }
                    
                    isAnimating = false;
                }, 3000);
            } catch (err) {
                console.error("Failed to copy email:", err);
                isAnimating = false;
            }
        });
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".frontend.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swup */ "./node_modules/swup/dist/Swup.modern.js");
/* harmony import */ var _swup_head_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swup/head-plugin */ "./node_modules/@swup/head-plugin/dist/index.modern.js");
/* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! locomotive-scroll */ "./node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation.js */ "./src/animation.js");
/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.js */ "./src/block.js");
// Libs







//Custom Functions




// VARS
var swup;
var locomotiveScroll;

// Custom Cursor Targets
const cursorTargets = {
    "video.enable-activate-sound": "cursor-mode-activate-sound",
    ".featured-project .project-assets, .featured-projects .image-wrapper, .work-wrapper .project": "cursor-mode-featured-project",
    ".sno.work-filter h1": "cursor-mode-filter-project",
    "a[href*='denise@studio-nordost.com'], a[href*='christoph@studio-nordost.com'], a[href*='sebastian@studio-nordost.com'], a[href*='alexander@studio-nordost.com']": "cursor-mode-general-email",
    ".frontpage-services img": "cursor-mode-serivce-details",
    "a.lets-talk": "cursor-mode-lets-talk",
    ".error-404": "cursor-mode-error-404",
    ".social-proof .testimonial-slider.has-multiple": "cursor-mode-testimonial",
};

function initSetup() {
    swup = new swup__WEBPACK_IMPORTED_MODULE_0__["default"]({
        plugins: [
            new _swup_head_plugin__WEBPACK_IMPORTED_MODULE_1__["default"]({
                persistAssets: true,
                persistTags: "script[matomo-tag-manager], script[src*='analytics.studio-nordost.com']",
            }),
        ],
    });
    gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger);
}

function initScroll() {
    const nav = document.querySelectorAll("nav > .row");
    const navWrapper = document.querySelector("nav");

    locomotiveScroll = new locomotive_scroll__WEBPACK_IMPORTED_MODULE_2__["default"]({
        scrollCallback: ({ direction, progress }) => {
            if (progress > 0.92) navVisibility(false);
            else navVisibility(true);
        },
    });

    const navVisibility = (visible) => {
        nav.forEach((n) => {
            n.style.opacity = visible ? 1 : 0;
        });
        // navWrapper.style.pointerEvents = visible ? "all" : "none";
    };
}

function initHooks() {
    swup.hooks.on("animation:out:start", (e) => {
        locomotiveScroll.destroy();
        _utils_js__WEBPACK_IMPORTED_MODULE_3__.cleanupLazyVideoObservers();
        _block_js__WEBPACK_IMPORTED_MODULE_5__.cleanupSocialProof();
        // if (utils.isMobileDevice()) swup.cache.clear();
    });

    swup.hooks.on("animation:in:start", (e) => {
        _utils_js__WEBPACK_IMPORTED_MODULE_3__.resetCustomCursor();
    });

    swup.hooks.on("page:view", (e) => {
        initPageLoad();
    });
}

// Main Page Load Function
function initPageLoad(entryPoint = false) {
    const videosWithSound = document.querySelector("video.enable-activate-sound");
    const frontpageProjects = document.querySelector(".sno.frontpage-header");
    const frontpageServices = document.querySelector(".frontpage-services");
    const teamCulture = document.querySelector(".sno.team-culture");
    const lottieAnimation = document.querySelector(".lottie-animation");
    const process = document.querySelector(".sno.process");
    const workPage = document.querySelector(".sno.work");
    const testimonial = document.querySelector(".sno.testimonial");
    const serviceCards = document.querySelector(".sno.service-cards");
    const socialProof = document.querySelector(".sno.social-proof");
    const benefitsList = document.querySelector(".sno.benefits.benefits-style-list");

    // Base Setup
    if (entryPoint) {
        initSetup();
        initHooks();
    }

    initScroll();
    // observeNavigation();

    _utils_js__WEBPACK_IMPORTED_MODULE_3__.initCursor(cursorTargets);
    _utils_js__WEBPACK_IMPORTED_MODULE_3__.initLazyVideos();
    _utils_js__WEBPACK_IMPORTED_MODULE_3__.initAccordions();
    _utils_js__WEBPACK_IMPORTED_MODULE_3__.initFooterClock();
    _utils_js__WEBPACK_IMPORTED_MODULE_3__.initCopyEmail();

    // Anim
    if (frontpageProjects) _animation_js__WEBPACK_IMPORTED_MODULE_4__.initFrontpageHeader(locomotiveScroll);
    else _animation_js__WEBPACK_IMPORTED_MODULE_4__.initPageFadeIn();

    if (teamCulture) _animation_js__WEBPACK_IMPORTED_MODULE_4__.initTeamCulture();
    if (process) _animation_js__WEBPACK_IMPORTED_MODULE_4__.initProcess(locomotiveScroll);

    // Block
    if (videosWithSound) _block_js__WEBPACK_IMPORTED_MODULE_5__.initActivateVideoSound();
    if (workPage) _block_js__WEBPACK_IMPORTED_MODULE_5__.initWorkPage();
    if (lottieAnimation) _block_js__WEBPACK_IMPORTED_MODULE_5__.initLottieAnimations();
    if (frontpageServices) _block_js__WEBPACK_IMPORTED_MODULE_5__.initFrontpageServices();
    if (testimonial) _block_js__WEBPACK_IMPORTED_MODULE_5__.initTestimonial();
    if (serviceCards) _block_js__WEBPACK_IMPORTED_MODULE_5__.initServiceCards();
    if (socialProof) _block_js__WEBPACK_IMPORTED_MODULE_5__.initSocialProof();
    if (benefitsList) _block_js__WEBPACK_IMPORTED_MODULE_5__.initBenefitsList();
}

document.addEventListener("DOMContentLoaded", function () {
    initPageLoad(true);
});

})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map