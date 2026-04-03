import{$ as Ec,$a as Ra,A as hi,Aa as Nn,B as Sc,Ba as as,C as md,D as ui,Da as Nd,E as Sa,Ea as Fd,F as Yn,Fa as Ud,G as xt,Ga as Od,H as gd,Ha as Bd,I as dt,Ia as os,J as vd,Ja as ls,K as Rt,Ka as zd,L as ft,La as kd,M as Fe,Ma as Vd,N as _d,Na as cs,O as xd,Oa as Jt,P as di,Pa as mn,Q as fn,Qa as Kt,T as yd,Ta as Aa,U as Md,V as bc,Va as Mn,W as Pn,Wa as Ta,X as wc,Xa as Hd,Y as Sd,Ya as Ca,Z as zi,Za as ki,_ as ba,_a as Vi,a as Ae,aa as wa,ab as hs,b as zt,ba as bd,bb as vr,ca as Dn,cb as Gd,da as $n,db as Wd,e as od,ea as rs,eb as Xd,f as ld,fa as Ac,fb as qd,g as cd,ga as wd,gb as Yd,h as Bi,ha as Tc,hb as Ia,i as un,ia as Ed,ib as $d,j as dn,ja as Cc,jb as Pa,k as xn,ka as Ad,kb as us,l as je,la as Ln,lb as jd,m as hd,ma as Rc,mb as Zd,n as yc,na as Ea,nb as Jd,o as ud,oa as Td,ob as Da,p as kt,pa as Cd,q as dd,qa as pn,qb as Dc,r as qn,ra as ss,rb as Kd,s as Mc,sa as Rd,sb as Qd,t as fd,ta as Id,tb as ef,u as xa,ua as Pd,ub as _r,v as yn,va as Ic,w as ya,wa as bt,x as Ma,xa as Dd,y as gr,ya as Ld,z as pd,za as Pc}from"./chunk-S527T6O4.js";var ds=class{_doc;constructor(e){this._doc=e}manager},La=(()=>{class n extends ds{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(ft(Pn))};static \u0275prov=dt({token:n,factory:n.\u0275fac})}return n})(),Ua=new Rt(""),Uc=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(a=>{a.manager=this});let r=t.filter(a=>!(a instanceof La));this._plugins=r.slice().reverse();let s=t.find(a=>a instanceof La);s&&this._plugins.push(s)}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new xt(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(ft(Ua),ft(ba))};static \u0275prov=dt({token:n,factory:n.\u0275fac})}return n})(),Lc="ng-app-id";function tf(n){for(let e of n)e.remove()}function nf(n,e){let t=e.createElement("style");return t.textContent=n,t}function r0(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Lc}="${e}"],link[${Lc}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Lc),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Fc(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Oc=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,r0(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,nf);i?.forEach(r=>this.addUsage(r,this.external,Fc))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(tf(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])tf(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,nf(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Fc(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(ft(Pn),ft(Cc),ft(Rc,8),ft(Ln))};static \u0275prov=dt({token:n,factory:n.\u0275fac})}return n})(),Nc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Bc=/%COMP%/g;var sf="%COMP%",s0=`_nghost-${sf}`,a0=`_ngcontent-${sf}`,o0=!0,l0=new Rt("",{factory:()=>o0});function c0(n){return a0.replace(Bc,n)}function h0(n){return s0.replace(Bc,n)}function af(n,e){return e.map(t=>t.replace(Bc,n))}var zc=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,i,r,s,a,o,l=null,c=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=a,this.ngZone=o,this.nonce=l,this.tracingService=c,this.defaultRenderer=new fs(t,a,o,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof Fa?r.applyToHost(t):r instanceof ps&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let a=this.doc,o=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,u=this.tracingService;switch(i.encapsulation){case Ea.Emulated:s=new Fa(l,c,i,this.appId,h,a,o,u);break;case Ea.ShadowDom:return new Na(l,t,i,a,o,this.nonce,u,c);case Ea.ExperimentalIsolatedShadowDom:return new Na(l,t,i,a,o,this.nonce,u);default:s=new ps(l,c,i,h,a,o,u);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(ft(Uc),ft(Oc),ft(Cc),ft(l0),ft(Pn),ft(ba),ft(Rc),ft(Id,8))};static \u0275prov=dt({token:n,factory:n.\u0275fac})}return n})(),fs=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Nc[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(rf(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(rf(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new xt(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Nc[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Nc[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(ss.DashCase|ss.Important)?e.style.setProperty(t,i,r&ss.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&ss.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=us().getGlobalEventTarget(this.doc,e),!e))throw new xt(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function rf(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Na=class extends fs{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,i,r,s,a,o,l){super(e,r,s,o),this.hostEl=t,this.sharedStylesHost=l,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=af(i.id,c);for(let u of c){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}let h=i.getExternalStyles?.();if(h)for(let u of h){let d=Fc(u,r);a&&d.setAttribute("nonce",a),this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ps=class extends fs{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,a,o,l){super(e,s,a,o),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?af(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Rd.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Fa=class extends ps{contentAttr;hostAttr;constructor(e,t,i,r,s,a,o,l){let c=r+"-"+i.id;super(e,t,i,s,a,o,l,c),this.contentAttr=c0(c),this.hostAttr=h0(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var Oa=class n extends Zd{supportsDOMEvents=!0;static makeCurrent(){jd(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=u0();return t==null?null:d0(t)}resetBaseElement(){ms=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Kd(document.cookie,e)}},ms=null;function u0(){return ms=ms||document.head.querySelector("base"),ms?ms.getAttribute("href"):null}function d0(n){return new URL(n,document.baseURI).pathname}var f0=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=dt({token:n,factory:n.\u0275fac})}return n})(),of=["alt","control","meta","shift"],p0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},m0={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},hf=(()=>{class n extends ds{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let a=n.parseEventName(i),o=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>us().onAndCancel(t,a.domEventName,o,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),a="",o=i.indexOf("code");if(o>-1&&(i.splice(o,1),a="code."),of.forEach(c=>{let h=i.indexOf(c);h>-1&&(i.splice(h,1),a+=c+".")}),a+=s,i.length!=0||s.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(t,i){let r=p0[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),of.forEach(a=>{if(a!==r){let o=m0[a];o(t)&&(s+=a+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(ft(Pn))};static \u0275prov=dt({token:n,factory:n.\u0275fac})}return n})();async function kc(n,e,t){let i=Ae({rootComponent:n},g0(e,t));return $d(i)}function g0(n,e){return{platformRef:e?.platformRef,appProviders:[...M0,...n?.providers??[]],platformProviders:y0}}function v0(){Oa.makeCurrent()}function _0(){return new Ec}function x0(){return Ed(document),document}var y0=[{provide:Ln,useValue:ef},{provide:Ad,useValue:v0,multi:!0},{provide:Pn,useFactory:x0}];var M0=[{provide:xd,useValue:"root"},{provide:Ec,useFactory:_0},{provide:Ua,useClass:La,multi:!0},{provide:Ua,useClass:hf,multi:!0},zc,Oc,Uc,{provide:Pd,useExisting:zc},{provide:Qd,useClass:f0},[]];var uf=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(ft(Pn))};static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Be="primary",Ts=Symbol("RouteTitle"),Xc=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Wi(n){return new Xc(n)}function Vc(n,e,t){for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(r[0]===":")t[r.substring(1)]=s;else if(r!==s.path)return!1}return!0}function yf(n,e,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let l={},c=n.slice(0,i.length);return Vc(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let s=i.slice(0,r),a=i.slice(r+1);if(s.length+a.length>n.length||t.pathMatch==="full"&&e.hasChildren()&&t.path!=="**")return null;let o={};return!Vc(s,n.slice(0,s.length),o)||!Vc(a,n.slice(n.length-a.length),o)?null:{consumed:n,posParams:o}}function Ga(n){return new Promise((e,t)=>{n.pipe(hi()).subscribe({next:i=>e(i),error:i=>t(i)})})}function w0(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Fn(n[t],e[t]))return!1;return!0}function Fn(n,e){let t=n?qc(n):void 0,i=e?qc(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Mf(n[r],e[r]))return!1;return!0}function qc(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Mf(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function E0(n){return n.length>0?n[n.length-1]:null}function Yi(n){return yc(n)?n:Fd(n)?xn(Promise.resolve(n)):je(n)}function Sf(n){return yc(n)?Ga(n):Promise.resolve(n)}var A0={exact:wf,subset:Ef},bf={exact:T0,subset:C0,ignored:()=>!0};function ah(n,e,t){let i=n instanceof en?n:e.parseUrl(n);return Xd(()=>Yc(e.lastSuccessfulNavigation()?.finalUrl??new en,i,t))}function Yc(n,e,t){return A0[t.paths](n.root,e.root,t.matrixParams)&&bf[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function T0(n,e){return Fn(n,e)}function wf(n,e,t){if(!Hi(n.segments,e.segments)||!ka(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!wf(n.children[i],e.children[i],t))return!1;return!0}function C0(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Mf(n[t],e[t]))}function Ef(n,e,t){return Af(n,e,e.segments,t)}function Af(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Hi(r,t)||e.hasChildren()||!ka(r,t,i))}else if(n.segments.length===t.length){if(!Hi(n.segments,t)||!ka(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!Ef(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Hi(n.segments,r)||!ka(n.segments,r,i)||!n.children[Be]?!1:Af(n.children[Be],e,s,i)}}function ka(n,e,t){return e.every((i,r)=>bf[t](n[r].parameters,i.parameters))}var en=class{root;queryParams;fragment;_queryParamMap;constructor(e=new it([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Wi(this.queryParams),this._queryParamMap}toString(){return P0.serialize(this)}},it=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Va(this)}},pi=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Wi(this.parameters),this._parameterMap}toString(){return Cf(this)}};function R0(n,e){return Hi(n,e)&&n.every((t,i)=>Fn(t.parameters,e[i].parameters))}function Hi(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function I0(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Be&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Be&&(t=t.concat(e(r,i)))}),t}var Cs=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=dt({token:n,factory:()=>new mi,providedIn:"root"})}return n})(),mi=class{parse(e){let t=new jc(e);return new en(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${gs(e.root,!0)}`,i=N0(e.queryParams),r=typeof e.fragment=="string"?`#${D0(e.fragment)}`:"";return`${t}${i}${r}`}},P0=new mi;function Va(n){return n.segments.map(e=>Cf(e)).join("/")}function gs(n,e){if(!n.hasChildren())return Va(n);if(e){let t=n.children[Be]?gs(n.children[Be],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Be&&i.push(`${r}:${gs(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=I0(n,(i,r)=>r===Be?[gs(n.children[Be],!1)]:[`${r}:${gs(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Be]!=null?`${Va(n)}/${t[0]}`:`${Va(n)}/(${t.join("//")})`}}function Tf(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ba(n){return Tf(n).replace(/%3B/gi,";")}function D0(n){return encodeURI(n)}function $c(n){return Tf(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ha(n){return decodeURIComponent(n)}function df(n){return Ha(n.replace(/\+/g,"%20"))}function Cf(n){return`${$c(n.path)}${L0(n.parameters)}`}function L0(n){return Object.entries(n).map(([e,t])=>`;${$c(e)}=${$c(t)}`).join("")}function N0(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Ba(t)}=${Ba(r)}`).join("&"):`${Ba(t)}=${Ba(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var F0=/^[^\/()?;#]+/;function Hc(n){let e=n.match(F0);return e?e[0]:""}var U0=/^[^\/()?;=#]+/;function O0(n){let e=n.match(U0);return e?e[0]:""}var B0=/^[^=?&#]+/;function z0(n){let e=n.match(B0);return e?e[0]:""}var k0=/^[^&#]+/;function V0(n){let e=n.match(k0);return e?e[0]:""}var jc=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new it([],{}):new it([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Be]=new it(e,t)),i}parseSegment(){let e=Hc(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new xt(4009,!1);return this.capture(e),new pi(Ha(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=O0(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Hc(this.remaining);r&&(i=r,this.capture(i))}e[Ha(t)]=Ha(i)}parseQueryParam(e){let t=z0(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let a=V0(this.remaining);a&&(i=a,this.capture(i))}let r=df(t),s=df(i);if(e.hasOwnProperty(r)){let a=e[r];Array.isArray(a)||(a=[a],e[r]=a),a.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Hc(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new xt(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Be);let a=this.parseChildren();t[s??Be]=Object.keys(a).length===1&&a[Be]?a[Be]:new it([],a),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new xt(4011,!1)}};function Rf(n){return n.segments.length>0?new it([],{[Be]:n}):n}function If(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=If(r);if(i===Be&&s.segments.length===0&&s.hasChildren())for(let[a,o]of Object.entries(s.children))e[a]=o;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new it(n.segments,e);return H0(t)}function H0(n){if(n.numberOfChildren===1&&n.children[Be]){let e=n.children[Be];return new it(n.segments.concat(e.segments),e.children)}return n}function gi(n){return n instanceof en}function Pf(n,e,t=null,i=null,r=new mi){let s=Df(n);return Lf(s,e,t,i,r)}function Df(n){let e;function t(s){let a={};for(let l of s.children){let c=t(l);a[l.outlet]=c}let o=new it(s.url,a);return s===n&&(e=o),o}let i=t(n.root),r=Rf(i);return e??r}function Lf(n,e,t,i,r){let s=n;for(;s.parent;)s=s.parent;if(e.length===0)return Gc(s,s,s,t,i,r);let a=G0(e);if(a.toRoot())return Gc(s,s,new it([],{}),t,i,r);let o=W0(a,s,n),l=o.processChildren?_s(o.segmentGroup,o.index,a.commands):Ff(o.segmentGroup,o.index,a.commands);return Gc(s,o.segmentGroup,l,t,i,r)}function Wa(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ms(n){return typeof n=="object"&&n!=null&&n.outlets}function ff(n,e,t){n||="\u0275";let i=new en;return i.queryParams={[n]:e},t.parse(t.serialize(i)).queryParams[n]}function Gc(n,e,t,i,r,s){let a={};for(let[c,h]of Object.entries(i??{}))a[c]=Array.isArray(h)?h.map(u=>ff(c,u,s)):ff(c,h,s);let o;n===e?o=t:o=Nf(n,e,t);let l=Rf(If(o));return new en(l,a,r)}function Nf(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Nf(s,e,t)}),new it(n.segments,i)}var Xa=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Wa(i[0]))throw new xt(4003,!1);let r=i.find(Ms);if(r&&r!==E0(i))throw new xt(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function G0(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Xa(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,a)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let o={};return Object.entries(s.outlets).forEach(([l,c])=>{o[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:o}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:a===0?(s.split("/").forEach((o,l)=>{l==0&&o==="."||(l==0&&o===""?t=!0:o===".."?e++:o!=""&&r.push(o))}),r):[...r,s]},[]);return new Xa(t,e,i)}var yr=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function W0(n,e,t){if(n.isAbsolute)return new yr(e,!0,0);if(!t)return new yr(e,!1,NaN);if(t.parent===null)return new yr(t,!0,0);let i=Wa(n.commands[0])?0:1,r=t.segments.length-1+i;return X0(t,r,n.numberOfDoubleDots)}function X0(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new xt(4005,!1);r=i.segments.length}return new yr(i,!1,r-s)}function q0(n){return Ms(n[0])?n[0].outlets:{[Be]:n}}function Ff(n,e,t){if(n??=new it([],{}),n.segments.length===0&&n.hasChildren())return _s(n,e,t);let i=Y0(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new it(n.segments.slice(0,i.pathIndex),{});return s.children[Be]=new it(n.segments.slice(i.pathIndex),n.children),_s(s,0,r)}else return i.match&&r.length===0?new it(n.segments,{}):i.match&&!n.hasChildren()?Zc(n,e,t):i.match?_s(n,0,r):Zc(n,e,t)}function _s(n,e,t){if(t.length===0)return new it(n.segments,{});{let i=q0(t),r={};if(Object.keys(i).some(s=>s!==Be)&&n.children[Be]&&n.numberOfChildren===1&&n.children[Be].segments.length===0){let s=_s(n.children[Be],e,t);return new it(n.segments,s.children)}return Object.entries(i).forEach(([s,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[s]=Ff(n.children[s],e,a))}),Object.entries(n.children).forEach(([s,a])=>{i[s]===void 0&&(r[s]=a)}),new it(n.segments,r)}}function Y0(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let a=n.segments[r],o=t[i];if(Ms(o))break;let l=`${o}`,c=i<t.length-1?t[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!mf(l,c,a))return s;i+=2}else{if(!mf(l,{},a))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Zc(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Ms(s)){let l=$0(s.outlets);return new it(i,l)}if(r===0&&Wa(t[0])){let l=n.segments[e];i.push(new pi(l.path,pf(t[0]))),r++;continue}let a=Ms(s)?s.outlets[Be]:`${s}`,o=r<t.length-1?t[r+1]:null;a&&o&&Wa(o)?(i.push(new pi(a,pf(o))),r+=2):(i.push(new pi(a,{})),r++)}return new it(i,{})}function $0(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Zc(new it([],{}),0,i))}),e}function pf(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function mf(n,e,t){return n==t.path&&Fn(e,t.parameters)}var xs="imperative",At=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(At||{}),tn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Xi=class extends tn{type=At.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Vt=class extends tn{urlAfterRedirects;type=At.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Lt=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Lt||{}),Ss=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Ss||{}),gn=class extends tn{reason;code;type=At.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Uf(n){return n instanceof gn&&(n.code===Lt.Redirect||n.code===Lt.SupersededByNewNavigation)}var Zn=class extends tn{reason;code;type=At.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},qi=class extends tn{error;target;type=At.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Sr=class extends tn{urlAfterRedirects;state;type=At.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qa=class extends tn{urlAfterRedirects;state;type=At.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ya=class extends tn{urlAfterRedirects;state;shouldActivate;type=At.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},$a=class extends tn{urlAfterRedirects;state;type=At.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ja=class extends tn{urlAfterRedirects;state;type=At.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Za=class{route;type=At.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ja=class{route;type=At.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ka=class{snapshot;type=At.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Qa=class{snapshot;type=At.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},eo=class{snapshot;type=At.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},to=class{snapshot;type=At.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var br=class{},wr=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function j0(n){return!(n instanceof br)&&!(n instanceof wr)}var no=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Tr(this.rootInjector)}},Tr=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new no(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(ft(di))};static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),io=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Jc(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Jc(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Kc(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Kc(e,this._root).map(t=>t.value)}};function Jc(n,e){if(n===e.value)return e;for(let t of e.children){let i=Jc(n,t);if(i)return i}return null}function Kc(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Kc(n,t);if(i.length)return i.unshift(e),i}return[]}var Qt=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function xr(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var bs=class extends io{snapshot;constructor(e,t){super(e),this.snapshot=t,oh(this,e)}toString(){return this.snapshot.toString()}};function Of(n,e){let t=Z0(n,e),i=new un([new pi("",{})]),r=new un({}),s=new un({}),a=new un({}),o=new un(""),l=new Jn(i,r,a,o,s,Be,n,t.root);return l.snapshot=t.root,new bs(new Qt(l,[]),t)}function Z0(n,e){let t={},i={},r={},a=new Gi([],t,r,"",i,Be,n,null,{},e);return new ws("",new Qt(a,[]))}var Jn=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,a,o,l){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=a,this.component=o,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(kt(c=>c[Ts]))??je(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(kt(e=>Wi(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(kt(e=>Wi(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ro(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:Ae(Ae({},e.params),n.params),data:Ae(Ae({},e.data),n.data),resolve:Ae(Ae(Ae(Ae({},n.data),e.data),r?.data),n._resolvedData)}:i={params:Ae({},n.params),data:Ae({},n.data),resolve:Ae(Ae({},n.data),n._resolvedData??{})},r&&zf(r)&&(i.resolve[Ts]=r.title),i}var Gi=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ts]}constructor(e,t,i,r,s,a,o,l,c,h){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=a,this.component=o,this.routeConfig=l,this._resolve=c,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Wi(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Wi(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},ws=class extends io{url;constructor(e,t){super(t),this.url=e,oh(this,t)}toString(){return Bf(this._root)}};function oh(n,e){e.value._routerState=n,e.children.forEach(t=>oh(n,t))}function Bf(n){let e=n.children.length>0?` { ${n.children.map(Bf).join(", ")} } `:"";return`${n.value}${e}`}function Wc(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Fn(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Fn(e.params,t.params)||n.paramsSubject.next(t.params),w0(e.url,t.url)||n.urlSubject.next(t.url),Fn(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Qc(n,e){let t=Fn(n.params,e.params)&&R0(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Qc(n.parent,e.parent))}function zf(n){return typeof n.title=="string"||n.title===null}var kf=new Rt(""),Rs=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Be;activateEvents=new zi;deactivateEvents=new zi;attachEvents=new zi;detachEvents=new zi;routerOutletData=Yd();parentContexts=Fe(Tr);location=Fe(Dd);changeDetector=Fe(Ia);inputBinder=Fe(lo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new xt(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new xt(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new xt(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new xt(4013,!1);this._activatedRoute=t;let r=this.location,a=t.snapshot.component,o=this.parentContexts.getOrCreateContext(this.name).children,l=new eh(t,o,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=as({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[rs]})}return n})(),eh=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Jn?this.route:e===Tr?this.childContexts:e===kf?this.outletData:this.parent.get(e,t)}},lo=new Rt("");var lh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Nn({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Kt(0,"router-outlet")},dependencies:[Rs],encapsulation:2})}return n})();function ch(n){let e=n.children&&n.children.map(ch),t=e?zt(Ae({},n),{children:e}):Ae({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Be&&(t.component=lh),t}function J0(n,e,t){let i=Es(n,e._root,t?t._root:void 0);return new bs(i,e)}function Es(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=K0(n,e,t);return new Qt(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let a=s.route;return a.value._futureSnapshot=e.value,a.children=e.children.map(o=>Es(n,o)),a}}let i=Q0(e.value),r=e.children.map(s=>Es(n,s));return new Qt(i,r)}}function K0(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Es(n,i,r);return Es(n,i)})}function Q0(n){return new Jn(new un(n.url),new un(n.params),new un(n.queryParams),new un(n.fragment),new un(n.data),n.outlet,n.component,n)}var Er=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},Vf="ngNavigationCancelingError";function so(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=gi(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Hf(!1,Lt.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function Hf(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[Vf]=!0,t.cancellationCode=e,t}function ev(n){return Gf(n)&&gi(n.url)}function Gf(n){return!!n&&n[Vf]}var th=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Wc(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=xr(t);e.children.forEach(s=>{let a=s.value.outlet;this.deactivateRoutes(s,r[a],i),delete r[a]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(e,t,a.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=xr(e);for(let a of Object.values(s))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),o=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:a,route:e,contexts:o})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=xr(e);for(let a of Object.values(s))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=xr(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new to(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Qa(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Wc(r),r===s)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,a.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let o=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(o.contexts),a.attachRef=o.componentRef,a.route=o.route.value,a.outlet&&a.outlet.attach(o.componentRef,o.route.value),Wc(o.route.value),this.activateChildRoutes(e,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(e,null,a.children)}else this.activateChildRoutes(e,null,i)}},ao=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Mr=class{component;route;constructor(e,t){this.component=e,this.route=t}};function tv(n,e,t){let i=n._root,r=e?e._root:null;return vs(i,r,t,[i.value])}function nv(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Cr(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!vd(n)?n:e.get(n):i}function vs(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=xr(e);return n.children.forEach(a=>{iv(a,s[a.value.outlet],t,i.concat([a.value]),r),delete s[a.value.outlet]}),Object.entries(s).forEach(([a,o])=>ys(o,t.getContext(a),r)),r}function iv(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,a=e?e.value:null,o=t?t.getContext(n.value.outlet):null;if(a&&s.routeConfig===a.routeConfig){let l=rv(a,s,s.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new ao(i)):(s.data=a.data,s._resolvedData=a._resolvedData),s.component?vs(n,e,o?o.children:null,i,r):vs(n,e,t,i,r),l&&o&&o.outlet&&o.outlet.isActivated&&r.canDeactivateChecks.push(new Mr(o.outlet.component,a))}else a&&ys(e,o,r),r.canActivateChecks.push(new ao(i)),s.component?vs(n,null,o?o.children:null,i,r):vs(n,null,t,i,r);return r}function rv(n,e,t){if(typeof t=="function")return fn(e._environmentInjector,()=>t(n,e));switch(t){case"pathParamsChange":return!Hi(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Hi(n.url,e.url)||!Fn(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Qc(n,e)||!Fn(n.queryParams,e.queryParams);default:return!Qc(n,e)}}function ys(n,e,t){let i=xr(n),r=n.value;Object.entries(i).forEach(([s,a])=>{r.component?e?ys(a,e.children.getContext(s),t):ys(a,null,t):ys(a,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Mr(e.outlet.component,r)):t.canDeactivateChecks.push(new Mr(null,r)):t.canDeactivateChecks.push(new Mr(null,r))}function Is(n){return typeof n=="function"}function sv(n){return typeof n=="boolean"}function av(n){return n&&Is(n.canLoad)}function ov(n){return n&&Is(n.canActivate)}function lv(n){return n&&Is(n.canActivateChild)}function cv(n){return n&&Is(n.canDeactivate)}function hv(n){return n&&Is(n.canMatch)}function Wf(n){return n instanceof ud||n?.name==="EmptyError"}var za=Symbol("INITIAL_VALUE");function Ar(){return ui(n=>dd(n.map(e=>e.pipe(gr(1),md(za)))).pipe(kt(e=>{for(let t of e)if(t!==!0){if(t===za)return za;if(t===!1||uv(t))return t}return!0}),yn(e=>e!==za),gr(1)))}function uv(n){return gi(n)||n instanceof Er}function Xf(n){return n.aborted?je(void 0).pipe(gr(1)):new cd(e=>{let t=()=>{e.next(),e.complete()};return n.addEventListener("abort",t),()=>n.removeEventListener("abort",t)})}function qf(n){return Sa(Xf(n))}function dv(n){return qn(e=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:s}}=e;return s.length===0&&r.length===0?je(zt(Ae({},e),{guardsResult:!0})):fv(s,t,i).pipe(qn(a=>a&&sv(a)?pv(t,r,n):je(a)),kt(a=>zt(Ae({},e),{guardsResult:a})))})}function fv(n,e,t){return xn(n).pipe(qn(i=>xv(i.component,i.route,t,e)),hi(i=>i!==!0,!0))}function pv(n,e,t){return xn(e).pipe(Ma(i=>fd(gv(i.route.parent,t),mv(i.route,t),_v(n,i.path),vv(n,i.route))),hi(i=>i!==!0,!0))}function mv(n,e){return n!==null&&e&&e(new eo(n)),je(!0)}function gv(n,e){return n!==null&&e&&e(new Ka(n)),je(!0)}function vv(n,e){let t=e.routeConfig?e.routeConfig.canActivate:null;if(!t||t.length===0)return je(!0);let i=t.map(r=>xa(()=>{let s=e._environmentInjector,a=Cr(r,s),o=ov(a)?a.canActivate(e,n):fn(s,()=>a(e,n));return Yi(o).pipe(hi())}));return je(i).pipe(Ar())}function _v(n,e){let t=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(s=>nv(s)).filter(s=>s!==null).map(s=>xa(()=>{let a=s.guards.map(o=>{let l=s.node._environmentInjector,c=Cr(o,l),h=lv(c)?c.canActivateChild(t,n):fn(l,()=>c(t,n));return Yi(h).pipe(hi())});return je(a).pipe(Ar())}));return je(r).pipe(Ar())}function xv(n,e,t,i){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return je(!0);let s=r.map(a=>{let o=e._environmentInjector,l=Cr(a,o),c=cv(l)?l.canDeactivate(n,e,t,i):fn(o,()=>l(n,e,t,i));return Yi(c).pipe(hi())});return je(s).pipe(Ar())}function yv(n,e,t,i,r){let s=e.canLoad;if(s===void 0||s.length===0)return je(!0);let a=s.map(o=>{let l=Cr(o,n),c=av(l)?l.canLoad(e,t):fn(n,()=>l(e,t)),h=Yi(c);return r?h.pipe(qf(r)):h});return je(a).pipe(Ar(),Yf(i))}function Yf(n){return ld(Yn(e=>{if(typeof e!="boolean")throw so(n,e)}),kt(e=>e===!0))}function Mv(n,e,t,i,r){let s=e.canMatch;if(!s||s.length===0)return je(!0);let a=s.map(o=>{let l=Cr(o,n),c=hv(l)?l.canMatch(e,t):fn(n,()=>l(e,t));return Yi(c).pipe(qf(r))});return je(a).pipe(Ar(),Yf(i))}var jn=class n extends Error{segmentGroup;constructor(e){super(),this.segmentGroup=e||null,Object.setPrototypeOf(this,n.prototype)}},As=class n extends Error{urlTree;constructor(e){super(),this.urlTree=e,Object.setPrototypeOf(this,n.prototype)}};function Sv(n){throw new xt(4e3,!1)}function bv(n){throw Hf(!1,Lt.GuardRejected)}var nh=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}async lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[Be])throw Sv(`${e.redirectTo}`);r=r.children[Be]}}async applyRedirectCommands(e,t,i,r,s){let a=await wv(t,r,s);if(a instanceof en)throw new As(a);let o=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),e,i);if(a[0]==="/")throw new As(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new en(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let o=s.substring(1);i[r]=t[o]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),a={};return Object.entries(t.children).forEach(([o,l])=>{a[o]=this.createSegmentGroup(e,l,i,r)}),new it(s,a)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new xt(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function wv(n,e,t){if(typeof n=="string")return Promise.resolve(n);let i=n,{queryParams:r,fragment:s,routeConfig:a,url:o,outlet:l,params:c,data:h,title:u,paramMap:d,queryParamMap:p}=e;return Ga(Yi(fn(t,()=>i({params:c,data:h,queryParams:r,fragment:s,routeConfig:a,url:o,outlet:l,title:u,paramMap:d,queryParamMap:p}))))}function Ev(n,e){return n.providers&&!n._injector&&(n._injector=Pc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Sn(n){return n.outlet||Be}function Av(n,e){let t=n.filter(i=>Sn(i)===e);return t.push(...n.filter(i=>Sn(i)!==e)),t}var ih={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Tv(n,e,t,i,r,s){let a=$f(n,e,t);return a.matched?(i=Ev(e,i),Mv(i,e,t,r,s).pipe(kt(o=>o===!0?a:Ae({},ih)))):je(a)}function $f(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?Ae({},ih):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||yf)(t,n,e);if(!r)return Ae({},ih);let s={};Object.entries(r.posParams??{}).forEach(([o,l])=>{s[o]=l.path});let a=r.consumed.length>0?Ae(Ae({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function gf(n,e,t,i){return t.length>0&&Iv(n,t,i)?{segmentGroup:new it(e,Rv(i,new it(t,n.children))),slicedSegments:[]}:t.length===0&&Pv(n,t,i)?{segmentGroup:new it(n.segments,Cv(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new it(n.segments,n.children),slicedSegments:t}}function Cv(n,e,t,i){let r={};for(let s of t)if(co(n,e,s)&&!i[Sn(s)]){let a=new it([],{});r[Sn(s)]=a}return Ae(Ae({},i),r)}function Rv(n,e){let t={};t[Be]=e;for(let i of n)if(i.path===""&&Sn(i)!==Be){let r=new it([],{});t[Sn(i)]=r}return t}function Iv(n,e,t){return t.some(i=>co(n,e,i)&&Sn(i)!==Be)}function Pv(n,e,t){return t.some(i=>co(n,e,i))}function co(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Dv(n,e,t){return e.length===0&&!n.children[t]}var rh=class{};async function Lv(n,e,t,i,r,s,a="emptyOnly",o){return new sh(n,e,t,i,r,a,s,o).recognize()}var Nv=31,sh=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,a,o,l){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=a,this.urlSerializer=o,this.abortSignal=l,this.applyRedirects=new nh(this.urlSerializer,this.urlTree)}noMatchError(e){return new xt(4002,`'${e.segmentGroup}'`)}async recognize(){let e=gf(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(e),r=new Qt(i,t),s=new ws("",r),a=Pf(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(a),{state:s,tree:a}}async match(e){let t=new Gi([],Object.freeze({}),Object.freeze(Ae({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Be,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,e,Be,t),rootSnapshot:t}}catch(i){if(i instanceof As)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof jn?this.noMatchError(i):i}}async processSegmentGroup(e,t,i,r,s){if(i.segments.length===0&&i.hasChildren())return this.processChildren(e,t,i,s);let a=await this.processSegment(e,t,i,i.segments,r,!0,s);return a instanceof Qt?[a]:[]}async processChildren(e,t,i,r){let s=[];for(let l of Object.keys(i.children))l==="primary"?s.unshift(l):s.push(l);let a=[];for(let l of s){let c=i.children[l],h=Av(t,l),u=await this.processSegmentGroup(e,h,c,l,r);a.push(...u)}let o=jf(a);return Fv(o),o}async processSegment(e,t,i,r,s,a,o){for(let l of t)try{return await this.processSegmentAgainstRoute(l._injector??e,t,l,i,r,s,a,o)}catch(c){if(c instanceof jn||Wf(c))continue;throw c}if(Dv(i,r,s))return new rh;throw new jn(i)}async processSegmentAgainstRoute(e,t,i,r,s,a,o,l){if(Sn(i)!==a&&(a===Be||!co(r,s,i)))throw new jn(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(e,r,i,s,a,l);if(this.allowRedirects&&o)return this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,a,l);throw new jn(r)}async expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,a,o){let{matched:l,parameters:c,consumedSegments:h,positionalParamSegments:u,remainingSegments:d}=$f(t,r,s);if(!l)throw new jn(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Nv&&(this.allowRedirects=!1));let p=new Gi(s,c,Object.freeze(Ae({},this.urlTree.queryParams)),this.urlTree.fragment,vf(r),Sn(r),r.component??r._loadedComponent??null,r,_f(r),e),g=ro(p,o,this.paramsInheritanceStrategy);if(p.params=Object.freeze(g.params),p.data=Object.freeze(g.data),this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let _=await this.applyRedirects.applyRedirectCommands(h,r.redirectTo,u,p,e),m=await this.applyRedirects.lineralizeSegments(r,_);return this.processSegment(e,i,t,m.concat(d),a,!1,o)}async matchSegmentAgainstRoute(e,t,i,r,s,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let o=await Ga(Tv(t,i,r,e,this.urlSerializer,this.abortSignal));if(i.path==="**"&&(t.children={}),!o?.matched)throw new jn(t);e=i._injector??e;let{routes:l}=await this.getChildConfig(e,i,r),c=i._loadedInjector??e,{parameters:h,consumedSegments:u,remainingSegments:d}=o,p=new Gi(u,h,Object.freeze(Ae({},this.urlTree.queryParams)),this.urlTree.fragment,vf(i),Sn(i),i.component??i._loadedComponent??null,i,_f(i),e),g=ro(p,a,this.paramsInheritanceStrategy);p.params=Object.freeze(g.params),p.data=Object.freeze(g.data);let{segmentGroup:_,slicedSegments:m}=gf(t,u,d,l);if(m.length===0&&_.hasChildren()){let b=await this.processChildren(c,l,_,p);return new Qt(p,b)}if(l.length===0&&m.length===0)return new Qt(p,[]);let f=Sn(i)===s,w=await this.processSegment(c,l,_,m,f?Be:s,!0,p);return new Qt(p,w instanceof Qt?[w]:[])}async getChildConfig(e,t,i){if(t.children)return{routes:t.children,injector:e};if(t.loadChildren){if(t._loadedRoutes!==void 0){let s=t._loadedNgModuleFactory;return s&&!t._loadedInjector&&(t._loadedInjector=s.create(e).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ga(yv(e,t,i,this.urlSerializer,this.abortSignal))){let s=await this.configLoader.loadChildren(e,t);return t._loadedRoutes=s.routes,t._loadedInjector=s.injector,t._loadedNgModuleFactory=s.factory,s}throw bv(t)}return{routes:[],injector:e}}};function Fv(n){n.sort((e,t)=>e.value.outlet===Be?-1:t.value.outlet===Be?1:e.value.outlet.localeCompare(t.value.outlet))}function Uv(n){let e=n.value.routeConfig;return e&&e.path===""}function jf(n){let e=[],t=new Set;for(let i of n){if(!Uv(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=jf(i.children);e.push(new Qt(i.value,r))}return e.filter(i=>!t.has(i))}function vf(n){return n.data||{}}function _f(n){return n.resolve||{}}function Ov(n,e,t,i,r,s,a){return qn(async o=>{let{state:l,tree:c}=await Lv(n,e,t,i,o.extractedUrl,r,s,a);return zt(Ae({},o),{targetSnapshot:l,urlAfterRedirects:c})})}function Bv(n){return qn(e=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=e;if(!i.length)return je(e);let r=new Set(i.map(o=>o.route)),s=new Set;for(let o of r)if(!s.has(o))for(let l of Zf(o))s.add(l);let a=0;return xn(s).pipe(Ma(o=>r.has(o)?zv(o,t,n):(o.data=ro(o,o.parent,n).resolve,je(void 0))),Yn(()=>a++),Sc(1),qn(o=>a===s.size?je(e):dn))})}function Zf(n){let e=n.children.map(t=>Zf(t)).flat();return[n,...e]}function zv(n,e,t){let i=n.routeConfig,r=n._resolve;return i?.title!==void 0&&!zf(i)&&(r[Ts]=i.title),xa(()=>(n.data=ro(n,n.parent,t).resolve,kv(r,n,e).pipe(kt(s=>(n._resolvedData=s,n.data=Ae(Ae({},n.data),s),null)))))}function kv(n,e,t){let i=qc(n);if(i.length===0)return je({});let r={};return xn(i).pipe(qn(s=>Vv(n[s],e,t).pipe(hi(),Yn(a=>{if(a instanceof Er)throw so(new mi,a);r[s]=a}))),Sc(1),kt(()=>r),ya(s=>Wf(s)?dn:hd(s)))}function Vv(n,e,t){let i=e._environmentInjector,r=Cr(n,i),s=r.resolve?r.resolve(e,t):fn(i,()=>r(e,t));return Yi(s)}function xf(n){return ui(e=>{let t=n(e);return t?xn(t).pipe(kt(()=>e)):je(e)})}var hh=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Be);return i}getResolvedTitleForRoute(t){return t.data[Ts]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=dt({token:n,factory:()=>Fe(Jf),providedIn:"root"})}return n})(),Jf=(()=>{class n extends hh{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(ft(uf))};static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Rr=new Rt("",{factory:()=>({})}),Ps=new Rt(""),Kf=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=Fe(Wd);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let s=await Sf(fn(t,()=>i.loadComponent())),a=await tp(ep(s));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let s=await Qf(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,s}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function Qf(n,e,t,i){let r=await Sf(fn(t,()=>n.loadChildren())),s=await tp(ep(r)),a;s instanceof Ld||Array.isArray(s)?a=s:a=await e.compileModuleAsync(s),i&&i(n);let o,l,c=!1,h;return Array.isArray(a)?(l=a,c=!0):(o=a.create(t).injector,h=a,l=o.get(Ps,[],{optional:!0,self:!0}).flat()),{routes:l.map(ch),injector:o,factory:h}}function Hv(n){return n&&typeof n=="object"&&"default"in n}function ep(n){return Hv(n)?n.default:n}async function tp(n){return n}var ho=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=dt({token:n,factory:()=>Fe(Gv),providedIn:"root"})}return n})(),Gv=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),np=new Rt("");var Wv=()=>{},ip=new Rt(""),rp=(()=>{class n{currentNavigation=Dn(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Dn(null);events=new Bi;transitionAbortWithErrorSubject=new Bi;configLoader=Fe(Kf);environmentInjector=Fe(di);destroyRef=Fe(wc);urlSerializer=Fe(Cs);rootContexts=Fe(Tr);location=Fe(Da);inputBindingEnabled=Fe(lo,{optional:!0})!==null;titleStrategy=Fe(hh);options=Fe(Rr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=Fe(ho);createViewTransition=Fe(np,{optional:!0});navigationErrorHandler=Fe(ip,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>je(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Za(r)),i=r=>this.events.next(new Ja(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;$n(()=>{this.transitions?.next(zt(Ae({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))})}setupNavigations(t){return this.transitions=new un(null),this.transitions.pipe(yn(i=>i!==null),ui(i=>{let r=!1,s=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return je(i).pipe(ui(o=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Lt.SupersededByNewNavigation),dn;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:l?zt(Ae({},l),{previousNavigation:null}):null,abort:()=>s.abort()});let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&h!=="reload")return this.events.next(new Zn(o.id,this.urlSerializer.serialize(o.rawUrl),"",Ss.IgnoredSameUrlNavigation)),o.resolve(!1),dn;if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return je(o).pipe(ui(u=>(this.events.next(new Xi(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),u.id!==this.navigationId?dn:Promise.resolve(u))),Ov(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),Yn(u=>{i.targetSnapshot=u.targetSnapshot,i.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation.update(p=>(p.finalUrl=u.urlAfterRedirects,p));let d=new Sr(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:u,extractedUrl:d,source:p,restoredState:g,extras:_}=o,m=new Xi(u,this.urlSerializer.serialize(d),p,g);this.events.next(m);let f=Of(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=zt(Ae({},o),{targetSnapshot:f,urlAfterRedirects:d,extras:zt(Ae({},_),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(w=>(w.finalUrl=d,w)),je(i)}else return this.events.next(new Zn(o.id,this.urlSerializer.serialize(o.extractedUrl),"",Ss.IgnoredByUrlHandlingStrategy)),o.resolve(!1),dn}),kt(o=>{let l=new qa(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);return this.events.next(l),this.currentTransition=i=zt(Ae({},o),{guards:tv(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),i}),dv(o=>this.events.next(o)),ui(o=>{if(i.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw so(this.urlSerializer,o.guardsResult);let l=new Ya(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);if(this.events.next(l),!a())return dn;if(!o.guardsResult)return this.cancelNavigationTransition(o,"",Lt.GuardRejected),dn;if(o.guards.canActivateChecks.length===0)return je(o);let c=new $a(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);if(this.events.next(c),!a())return dn;let h=!1;return je(o).pipe(Bv(this.paramsInheritanceStrategy),Yn({next:()=>{h=!0;let u=new ja(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(u)},complete:()=>{h||this.cancelNavigationTransition(o,"",Lt.NoDataFromResolver)}}))}),xf(o=>{let l=h=>{let u=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let d=h._environmentInjector;u.push(this.configLoader.loadComponent(d,h.routeConfig).then(p=>{h.component=p}))}for(let d of h.children)u.push(...l(d));return u},c=l(o.targetSnapshot.root);return c.length===0?je(o):xn(Promise.all(c).then(()=>o))}),xf(()=>this.afterPreactivation()),ui(()=>{let{currentSnapshot:o,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,o.root,l.root);return c?xn(c).pipe(kt(()=>i)):je(i)}),gr(1),kt(o=>{let l=J0(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);this.currentTransition=i=o=zt(Ae({},o),{targetRouterState:l}),this.currentNavigation.update(c=>(c.targetRouterState=l,c)),this.events.next(new br),a()&&(new th(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=Wv,c)),this.lastSuccessfulNavigation.set($n(this.currentNavigation)),this.events.next(new Vt(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)))}),Sa(Xf(s.signal).pipe(yn(()=>!r&&!i.targetRouterState),Yn(()=>{this.cancelNavigationTransition(i,s.signal.reason+"",Lt.Aborted)}))),Yn({complete:()=>{r=!0}}),Sa(this.transitionAbortWithErrorSubject.pipe(Yn(o=>{throw o}))),pd(()=>{s.abort(),r||this.cancelNavigationTransition(i,"",Lt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ya(o=>{if(r=!0,this.destroyed)return i.resolve(!1),dn;if(Gf(o))this.events.next(new gn(i.id,this.urlSerializer.serialize(i.extractedUrl),o.message,o.cancellationCode)),ev(o)?this.events.next(new wr(o.url,o.navigationBehaviorOptions)):i.resolve(!1);else{let l=new qi(i.id,this.urlSerializer.serialize(i.extractedUrl),o,i.targetSnapshot??void 0);try{let c=fn(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Er){let{message:h,cancellationCode:u}=so(this.urlSerializer,c);this.events.next(new gn(i.id,this.urlSerializer.serialize(i.extractedUrl),h,u)),this.events.next(new wr(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),o}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return dn}))}))}cancelNavigationTransition(t,i,r){let s=new gn(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=$n(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Xv(n){return n!==xs}var sp=new Rt("");var ap=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=dt({token:n,factory:()=>Fe(qv),providedIn:"root"})}return n})(),oo=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}shouldDestroyInjector(e){return!0}},qv=(()=>{class n extends oo{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ac(n)))(r||n)}})();static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),uh=(()=>{class n{urlSerializer=Fe(Cs);options=Fe(Rr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=Fe(Da);urlHandlingStrategy=Fe(ho);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new en;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,a=r??s;return a instanceof en?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=Of(null,Fe(di));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=dt({token:n,factory:()=>Fe(Yv),providedIn:"root"})}return n})(),Yv=(()=>{class n extends uh{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof Xi?this.updateStateMemento():t instanceof Zn?this.commitTransition(i):t instanceof Sr?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof br?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof gn&&!Uf(t)?this.restoreHistory(i):t instanceof qi?this.restoreHistory(i,!0):t instanceof Vt&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:s,state:a}=i;if(this.location.isCurrentPathEqualTo(t)||s){let o=this.browserPageId,l=Ae(Ae({},a),this.generateNgRouterState(r,o));this.location.replaceState(t,"",l)}else{let o=Ae(Ae({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",o)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ac(n)))(r||n)}})();static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function dh(n,e){n.events.pipe(yn(t=>t instanceof Vt||t instanceof gn||t instanceof qi||t instanceof Zn),kt(t=>t instanceof Vt||t instanceof Zn?0:(t instanceof gn?t.code===Lt.Redirect||t.code===Lt.SupersededByNewNavigation:!1)?2:1),yn(t=>t!==2),gr(1)).subscribe(()=>{e()})}var fh={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ph={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Un=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=Fe(Nd);stateManager=Fe(uh);options=Fe(Rr,{optional:!0})||{};pendingTasks=Fe(Sd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=Fe(rp);urlSerializer=Fe(Cs);location=Fe(Da);urlHandlingStrategy=Fe(ho);injector=Fe(di);_events=new Bi;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=Fe(ap);injectorCleanup=Fe(sp,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=Fe(Ps,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!Fe(lo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new od;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=$n(this.navigationTransitions.currentNavigation);if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof gn&&i.code!==Lt.Redirect&&i.code!==Lt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Vt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof wr){let a=i.navigationBehaviorOptions,o=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=Ae({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Xv(r.source)},a);this.scheduleNavigation(o,xs,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}j0(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),xs,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},a=r?.navigationId?r:null;if(r){let l=Ae({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let o=this.parseUrl(t);this.scheduleNavigation(o,i,a,s).catch(l=>{this.disposed||this.injector.get(wa)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return $n(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(ch),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:a,queryParamsHandling:o,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,h=null;switch(o??this.options.defaultQueryParamsHandling){case"merge":h=Ae(Ae({},this.currentUrlTree.queryParams),s);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=s||null}h!==null&&(h=this.removeEmptyProps(h));let u;try{let d=r?r.snapshot:this.routerState.snapshot.root;u=Df(d)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),u=this.currentUrlTree.root}return Lf(u,t,h,c??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=gi(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,xs,null,i)}navigate(t,i={skipLocationChange:!1}){return $v(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(gd(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=Ae({},fh):i===!1?r=Ae({},ph):r=i,gi(t))return Yc(this.currentUrlTree,t,r);let s=this.parseUrl(t);return Yc(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,a){if(this.disposed)return Promise.resolve(!1);let o,l,c;a?(o=a.resolve,l=a.reject,c=a.promise):c=new Promise((u,d)=>{o=u,l=d});let h=this.pendingTasks.add();return dh(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:o,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(u=>Promise.reject(u))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $v(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new xt(4008,!1)}var Ir=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=Dn(null);get href(){return $n(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new Bi;applicationErrorHandler=Fe(wa);options=Fe(Rr,{optional:!0});constructor(t,i,r,s,a,o){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=s,this.el=a,this.locationStrategy=o,this.reactiveHref.set(Fe(new qd("href"),{optional:!0}));let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href")),this.isAnchorElement&&(this.setTabIndexIfNotOnNativeEl("0"),this.subscribeToNavigationEventsIfNecessary())}subscribeToNavigationEventsIfNecessary(){this.subscription===void 0&&(this.subscription=this.router.events.subscribe(t=>{t instanceof Vt&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(gi(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,s,a){let o=this.urlTree;if(o===null||this.isAnchorElement&&(t!==0||i||r||s||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(o,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.reactiveHref.set(t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null)}applyAttributeValue(t,i){let r=this.renderer,s=this.el.nativeElement;i!==null?r.setAttribute(s,t,i):r.removeAttribute(s,t)}get urlTree(){return this.routerLinkInput===null?null:gi(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(i){return new(i||n)(bt(Un),bt(Jn),wd("tabindex"),bt(Ic),bt(Tc),bt(Jd))};static \u0275dir=as({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&Mn("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&Bd("href",r.reactiveHref(),Td)("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Pa],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Pa],replaceUrl:[2,"replaceUrl","replaceUrl",Pa],routerLink:"routerLink"},features:[rs]})}return n})(),mh=(()=>{class n{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new zi;link=Fe(Ir,{optional:!0});constructor(t,i,r,s){this.router=t,this.element=i,this.renderer=r,this.cdr=s,this.routerEventsSubscription=t.events.subscribe(a=>{a instanceof Vt&&this.update()})}ngAfterContentInit(){je(this.links.changes,je(null)).pipe(Mc()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=xn(t).pipe(Mc()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(t){let i=Array.isArray(t)?t:t.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(i=>{t?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let i=Zv(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?Ae({},fh):Ae({},ph);return r=>{let s=r.urlTree;return s?$n(ah(s,t,i)):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(i){return new(i||n)(bt(Un),bt(Tc),bt(Ic),bt(Ia))};static \u0275dir=as({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,s){if(i&1&&Hd(s,Ir,5),i&2){let a;ki(a=Vi())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[rs]})}return n})();function Zv(n){return!!n.paths}var Jv=new Rt("");function gh(n,...e){return _d([{provide:Ps,multi:!0,useValue:n},[],{provide:Jn,useFactory:Kv},{provide:Ud,multi:!0,useFactory:Qv},e.map(t=>t.\u0275providers)])}function Kv(){return Fe(Un).routerState.root}function Qv(){let n=Fe(bc);return e=>{let t=n.get(Od);if(e!==t.components[0])return;let i=n.get(Un),r=n.get(e_);n.get(t_)===1&&i.initialNavigation(),n.get(n_,null,{optional:!0})?.setUpPreloading(),n.get(Jv,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var e_=new Rt("",{factory:()=>new Bi}),t_=new Rt("",{factory:()=>1});var n_=new Rt("");var lp=[{path:"",loadComponent:()=>import("./chunk-23BRHAVO.js").then(n=>n.Index)},{path:"about",loadComponent:()=>import("./chunk-ZB4JTUBZ.js").then(n=>n.About)},{path:"work",loadComponent:()=>import("./chunk-6GI3QSH4.js").then(n=>n.Work)},{path:"contact",loadComponent:()=>import("./chunk-BLYX64AF.js").then(n=>n.Contact)},{path:"**",redirectTo:"",pathMatch:"full"}];var cp={providers:[bd(),gh(lp)]};var i_=()=>({exact:!0}),uo=class n{constructor(e){this.router=e;this.router.events.pipe(yn(t=>t instanceof Vt)).subscribe(()=>{this.closeMenu()})}isMenuOpen=!1;toggleMenu(){this.isMenuOpen=!this.isMenuOpen}closeMenu(){this.isMenuOpen=!1}static \u0275fac=function(t){return new(t||n)(bt(Un))};static \u0275cmp=Nn({type:n,selectors:[["app-header"]],decls:30,vars:10,consts:[[1,"btn"],["routerLink","/",1,"btn","logo"],[1,"navbar"],[1,"hamburgerMenu",3,"click"],["viewBox","0 0 100 100","width","80",1,"ham","hamRotate","ham7"],["d","m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013",1,"line","top"],["d","m 70,50 h -40",1,"line","middle"],["d","m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40",1,"line","bottom"],[1,"overlay",3,"click"],[1,"navbar-links"],[1,"mobile"],["routerLink","/","routerLinkActive","active",3,"click","routerLinkActiveOptions"],["routerLink","/work","routerLinkActive","active",3,"click"],["routerLink","/about","routerLinkActive","active",3,"click"],["routerLink","/contact","routerLinkActive","active",3,"click"]],template:function(t,i){t&1&&(Jt(0,"section")(1,"header")(2,"div",0)(3,"a",1),vr(4,".AdamJuwaied"),mn()(),Jt(5,"nav",2)(6,"div",3),Mn("click",function(){return i.toggleMenu()}),yd(),Jt(7,"svg",4),Kt(8,"path",5)(9,"path",6)(10,"path",7),mn()(),Md(),Jt(11,"div",8),Mn("click",function(){return i.closeMenu()}),mn(),Jt(12,"div",9)(13,"ul",10)(14,"div",0)(15,"li")(16,"a",11),Mn("click",function(){return i.closeMenu()}),vr(17,".Home"),mn()()(),Jt(18,"div",0)(19,"li")(20,"a",12),Mn("click",function(){return i.closeMenu()}),vr(21,".Work"),mn()()(),Jt(22,"div",0)(23,"li")(24,"a",13),Mn("click",function(){return i.closeMenu()}),vr(25,".About"),mn()()(),Jt(26,"div",0)(27,"li")(28,"a",14),Mn("click",function(){return i.closeMenu()}),vr(29,".Contact"),mn()()()()()()()()),t&2&&(pn(6),hs("active",i.isMenuOpen),pn(),hs("active",i.isMenuOpen),pn(4),hs("active",i.isMenuOpen),pn(),hs("active",i.isMenuOpen),pn(4),cs("routerLinkActiveOptions",Gd(9,i_)))},dependencies:[Ir,mh,Dc],styles:["[_nghost-%COMP%]{display:block}header[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]{transition:opacity .4s ease-out}"]})};function $i(n){let e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function fo(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function hp(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function _h(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n}function xh(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n}function up(n,e,t){return n[0]=e[0]*t[0],n[1]=e[1]*t[1],n[2]=e[2]*t[2],n}function dp(n,e,t){return n[0]=e[0]/t[0],n[1]=e[1]/t[1],n[2]=e[2]/t[2],n}function mo(n,e,t){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n}function fp(n,e){let t=e[0]-n[0],i=e[1]-n[1],r=e[2]-n[2];return Math.sqrt(t*t+i*i+r*r)}function pp(n,e){let t=e[0]-n[0],i=e[1]-n[1],r=e[2]-n[2];return t*t+i*i+r*r}function yh(n){let e=n[0],t=n[1],i=n[2];return e*e+t*t+i*i}function mp(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n}function gp(n,e){return n[0]=1/e[0],n[1]=1/e[1],n[2]=1/e[2],n}function po(n,e){let t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function Mh(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Sh(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2];return n[0]=r*l-s*o,n[1]=s*a-i*l,n[2]=i*o-r*a,n}function vp(n,e,t,i){let r=e[0],s=e[1],a=e[2];return n[0]=r+i*(t[0]-r),n[1]=s+i*(t[1]-s),n[2]=a+i*(t[2]-a),n}function _p(n,e,t,i,r){let s=Math.exp(-i*r),a=e[0],o=e[1],l=e[2];return n[0]=t[0]+(a-t[0])*s,n[1]=t[1]+(o-t[1])*s,n[2]=t[2]+(l-t[2])*s,n}function xp(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s+t[12])/a,n[1]=(t[1]*i+t[5]*r+t[9]*s+t[13])/a,n[2]=(t[2]*i+t[6]*r+t[10]*s+t[14])/a,n}function yp(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s)/a,n[1]=(t[1]*i+t[5]*r+t[9]*s)/a,n[2]=(t[2]*i+t[6]*r+t[10]*s)/a,n}function Mp(n,e,t){let i=e[0],r=e[1],s=e[2];return n[0]=i*t[0]+r*t[3]+s*t[6],n[1]=i*t[1]+r*t[4]+s*t[7],n[2]=i*t[2]+r*t[5]+s*t[8],n}function Sp(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2],c=t[3],h=o*s-l*r,u=l*i-a*s,d=a*r-o*i,p=o*d-l*u,g=l*h-a*d,_=a*u-o*h,m=c*2;return h*=m,u*=m,d*=m,p*=2,g*=2,_*=2,n[0]=i+h+p,n[1]=r+u+g,n[2]=s+d+_,n}var bp=(function(){let n=[0,0,0],e=[0,0,0];return function(t,i){fo(n,t),fo(e,i),po(n,n),po(e,e);let r=Mh(n,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}})();function wp(n,e){return n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2]}var Xt=class n extends Array{constructor(e=0,t=e,i=e){return super(e,t,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,i=e){return e.length?this.copy(e):(hp(this,e,t,i),this)}copy(e){return fo(this,e),this}add(e,t){return t?_h(this,e,t):_h(this,this,e),this}sub(e,t){return t?xh(this,e,t):xh(this,this,e),this}multiply(e){return e.length?up(this,this,e):mo(this,this,e),this}divide(e){return e.length?dp(this,this,e):mo(this,this,1/e),this}inverse(e=this){return gp(this,e),this}len(){return $i(this)}distance(e){return e?fp(this,e):$i(this)}squaredLen(){return yh(this)}squaredDistance(e){return e?pp(this,e):yh(this)}negate(e=this){return mp(this,e),this}cross(e,t){return t?Sh(this,e,t):Sh(this,this,e),this}scale(e){return mo(this,this,e),this}normalize(){return po(this,this),this}dot(e){return Mh(this,e)}equals(e){return wp(this,e)}applyMatrix3(e){return Mp(this,this,e),this}applyMatrix4(e){return xp(this,this,e),this}scaleRotateMatrix4(e){return yp(this,this,e),this}applyQuaternion(e){return Sp(this,this,e),this}angle(e){return bp(this,e)}lerp(e,t){return vp(this,this,e,t),this}smoothLerp(e,t,i){return _p(this,this,e,t,i),this}clone(){return new n(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){let t=this[0],i=this[1],r=this[2];return this[0]=e[0]*t+e[4]*i+e[8]*r,this[1]=e[1]*t+e[5]*i+e[9]*r,this[2]=e[2]*t+e[6]*i+e[10]*r,this.normalize()}};var Ap=new Xt,r_=1,s_=1,Tp=!1,go=class{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=r_++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in t)this.addAttribute(i,t[i])}addAttribute(e,t){if(this.attributes[e]=t,t.id=s_++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){let t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}let s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;r===35674&&(a=2),r===35675&&(a=3),r===35676&&(a=4);let o=s.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let h=0;h<a;h++)this.gl.vertexAttribPointer(t+h,o,s.type,s.normalized,s.stride+l,s.offset+h*c),this.gl.enableVertexAttribArray(t+h),this.gl.renderer.vertexAttribDivisor(t+h,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((r,{name:s})=>{let a=this.attributes[s];a.needsUpdate&&this.updateAttribute(a)});let i=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){let e=this.attributes.position;if(e.data)return e;if(!Tp)return console.warn("No position buffer data found to compute bounds"),Tp=!0}computeBoundingBox(e){e||(e=this.getPosition());let t=e.data,i=e.size;this.bounds||(this.bounds={min:new Xt,max:new Xt,center:new Xt,scale:new Xt,radius:1/0});let r=this.bounds.min,s=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;r.set(1/0),s.set(-1/0);for(let l=0,c=t.length;l<c;l+=i){let h=t[l],u=t[l+1],d=t[l+2];r.x=Math.min(h,r.x),r.y=Math.min(u,r.y),r.z=Math.min(d,r.z),s.x=Math.max(h,s.x),s.y=Math.max(u,s.y),s.z=Math.max(d,s.z)}o.sub(s,r),a.add(r,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());let t=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let s=0,a=t.length;s<a;s+=i)Ap.fromArray(t,s),r=Math.max(r,this.bounds.center.squaredDistance(Ap));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}};var a_=1,Cp={},Ds=class{constructor(e,{vertex:t,fragment:i,uniforms:r={},transparent:s=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=a_++,t||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:i})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Rp(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Rp(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));let l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;let r=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){let o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(r[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=r.join("")}setBlendFunc(e,t,i,r){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,i){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=i}setStencilOp(e,t,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,s)=>{let a=this.uniforms[s.uniformName];for(let o of s.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return Ip(`Active uniform ${s.name} has not been supplied`);if(a&&a.value===void 0)return Ip(`${s.name} uniform is missing a value parameter`);if(a.value.texture)return t=t+1,a.value.update(t),bh(this.gl,s.type,r,t);if(a.value.length&&a.value[0].texture){let o=[];return a.value.forEach(l=>{t=t+1,l.update(t),o.push(t)}),bh(this.gl,s.type,r,o)}bh(this.gl,s.type,r,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}};function bh(n,e,t,i){i=i.length?o_(i):i;let r=n.renderer.state.uniformLocations.get(t);if(i.length)if(r===void 0||r.length!==i.length)n.renderer.state.uniformLocations.set(t,i.slice(0));else{if(l_(r,i))return;r.set?r.set(i):c_(r,i),n.renderer.state.uniformLocations.set(t,r)}else{if(r===i)return;n.renderer.state.uniformLocations.set(t,i)}switch(e){case 5126:return i.length?n.uniform1fv(t,i):n.uniform1f(t,i);case 35664:return n.uniform2fv(t,i);case 35665:return n.uniform3fv(t,i);case 35666:return n.uniform4fv(t,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?n.uniform1iv(t,i):n.uniform1i(t,i);case 35671:case 35667:return n.uniform2iv(t,i);case 35672:case 35668:return n.uniform3iv(t,i);case 35673:case 35669:return n.uniform4iv(t,i);case 35674:return n.uniformMatrix2fv(t,!1,i);case 35675:return n.uniformMatrix3fv(t,!1,i);case 35676:return n.uniformMatrix4fv(t,!1,i)}}function Rp(n){let e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function o_(n){let e=n.length,t=n[0].length;if(t===void 0)return n;let i=e*t,r=Cp[i];r||(Cp[i]=r=new Float32Array(i));for(let s=0;s<e;s++)r.set(n[s],s*t);return r}function l_(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function c_(n,e){for(let t=0,i=n.length;t<i;t++)n[t]=e[t]}var wh=0;function Ip(n){wh>100||(console.warn(n),wh++,wh>100&&console.warn("More than 100 program warnings - stopping logs."))}var Eh=new Xt,h_=1,Ls=class{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:i=150,dpr:r=1,alpha:s=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:h=!1,powerPreference:u="default",autoClear:d=!0,webgl:p=2}={}){let g={alpha:s,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u};this.dpr=r,this.alpha=s,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=d,this.id=h_++,p===2&&(this.gl=e.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,t))}setScissor(e,t,i=0,r=0){this.gl.scissor(i,r,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,t,i,r):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,i){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,i||0))}setStencilOp(e,t,i){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=i,this.gl.stencilOp(e,t,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,i){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:i,sort:r}){let s=[];if(t&&i&&t.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&t&&!t.frustumIntersectsMesh(a)||s.push(a))}),r){let a=[],o=[],l=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!t)&&(c.worldMatrix.getTranslation(Eh),Eh.applyMatrix4(t.projectionViewMatrix),c.zDepth=Eh.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),s=a.concat(o,l)}return s}render({scene:e,camera:t,target:i=null,update:r=!0,sort:s=!0,frustumCull:a=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:a,sort:s}).forEach(c=>{c.draw({camera:t})})}};function Pp(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}function Dp(n,e,t,i,r){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n}function Lp(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),n[0]=t*a,n[1]=i*a,n[2]=r*a,n[3]=s*a,n}function Np(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3]}function Fp(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function Up(n,e,t){t=t*.5;let i=Math.sin(t);return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=Math.cos(t),n}function Ah(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=t[0],l=t[1],c=t[2],h=t[3];return n[0]=i*h+a*o+r*c-s*l,n[1]=r*h+a*l+s*o-i*c,n[2]=s*h+a*c+i*l-r*o,n[3]=a*h-i*o-r*l-s*c,n}function Op(n,e,t){t*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return n[0]=i*l+a*o,n[1]=r*l+s*o,n[2]=s*l-r*o,n[3]=a*l-i*o,n}function Bp(n,e,t){t*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return n[0]=i*l-s*o,n[1]=r*l+a*o,n[2]=s*l+i*o,n[3]=a*l-r*o,n}function zp(n,e,t){t*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return n[0]=i*l+r*o,n[1]=r*l-i*o,n[2]=s*l+a*o,n[3]=a*l-s*o,n}function kp(n,e,t,i){let r=e[0],s=e[1],a=e[2],o=e[3],l=t[0],c=t[1],h=t[2],u=t[3],d,p,g,_,m;return p=r*l+s*c+a*h+o*u,p<0&&(p=-p,l=-l,c=-c,h=-h,u=-u),1-p>1e-6?(d=Math.acos(p),g=Math.sin(d),_=Math.sin((1-i)*d)/g,m=Math.sin(i*d)/g):(_=1-i,m=i),n[0]=_*r+m*l,n[1]=_*s+m*c,n[2]=_*a+m*h,n[3]=_*o+m*u,n}function Vp(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s,o=a?1/a:0;return n[0]=-t*o,n[1]=-i*o,n[2]=-r*o,n[3]=s*o,n}function Hp(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=e[3],n}function Gp(n,e){let t=e[0]+e[4]+e[8],i;if(t>0)i=Math.sqrt(t+1),n[3]=.5*i,i=.5/i,n[0]=(e[5]-e[7])*i,n[1]=(e[6]-e[2])*i,n[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),n[r]=.5*i,i=.5/i,n[3]=(e[s*3+a]-e[a*3+s])*i,n[s]=(e[s*3+r]+e[r*3+s])*i,n[a]=(e[a*3+r]+e[r*3+a])*i}return n}function Wp(n,e,t="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return t==="XYZ"?(n[0]=i*a*l+r*s*o,n[1]=r*s*l-i*a*o,n[2]=r*a*o+i*s*l,n[3]=r*a*l-i*s*o):t==="YXZ"?(n[0]=i*a*l+r*s*o,n[1]=r*s*l-i*a*o,n[2]=r*a*o-i*s*l,n[3]=r*a*l+i*s*o):t==="ZXY"?(n[0]=i*a*l-r*s*o,n[1]=r*s*l+i*a*o,n[2]=r*a*o+i*s*l,n[3]=r*a*l-i*s*o):t==="ZYX"?(n[0]=i*a*l-r*s*o,n[1]=r*s*l+i*a*o,n[2]=r*a*o-i*s*l,n[3]=r*a*l+i*s*o):t==="YZX"?(n[0]=i*a*l+r*s*o,n[1]=r*s*l+i*a*o,n[2]=r*a*o-i*s*l,n[3]=r*a*l-i*s*o):t==="XZY"&&(n[0]=i*a*l-r*s*o,n[1]=r*s*l-i*a*o,n[2]=r*a*o+i*s*l,n[3]=r*a*l+i*s*o),n}var Xp=Pp,qp=Dp;var Yp=Np;var $p=Lp;var vo=class extends Array{constructor(e=0,t=0,i=0,r=1){super(e,t,i,r),this.onChange=()=>{},this._target=this;let s=["0","1","2","3"];return new Proxy(this,{set(a,o){let l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return Fp(this._target),this.onChange(),this}set(e,t,i,r){return e.length?this.copy(e):(qp(this._target,e,t,i,r),this.onChange(),this)}rotateX(e){return Op(this._target,this._target,e),this.onChange(),this}rotateY(e){return Bp(this._target,this._target,e),this.onChange(),this}rotateZ(e){return zp(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return Vp(this._target,e),this.onChange(),this}conjugate(e=this._target){return Hp(this._target,e),this.onChange(),this}copy(e){return Xp(this._target,e),this.onChange(),this}normalize(e=this._target){return $p(this._target,e),this.onChange(),this}multiply(e,t){return t?Ah(this._target,e,t):Ah(this._target,this._target,e),this.onChange(),this}dot(e){return Yp(this._target,e)}fromMatrix3(e){return Gp(this._target,e),this.onChange(),this}fromEuler(e,t){return Wp(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return Up(this._target,e,t),this.onChange(),this}slerp(e,t){return kp(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}};var f_=1e-6;function jp(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function Zp(n,e,t,i,r,s,a,o,l,c,h,u,d,p,g,_,m){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n[4]=s,n[5]=a,n[6]=o,n[7]=l,n[8]=c,n[9]=h,n[10]=u,n[11]=d,n[12]=p,n[13]=g,n[14]=_,n[15]=m,n}function Jp(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Kp(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],w=t*o-i*a,b=t*l-r*a,S=t*c-s*a,E=i*l-r*o,T=i*c-s*o,R=r*c-s*l,C=h*_-u*g,x=h*m-d*g,M=h*f-p*g,P=u*m-d*_,F=u*f-p*_,U=d*f-p*m,O=w*U-b*F+S*P+E*M-T*x+R*C;return O?(O=1/O,n[0]=(o*U-l*F+c*P)*O,n[1]=(r*F-i*U-s*P)*O,n[2]=(_*R-m*T+f*E)*O,n[3]=(d*T-u*R-p*E)*O,n[4]=(l*M-a*U-c*x)*O,n[5]=(t*U-r*M+s*x)*O,n[6]=(m*S-g*R-f*b)*O,n[7]=(h*R-d*S+p*b)*O,n[8]=(a*F-o*M+c*C)*O,n[9]=(i*M-t*F-s*C)*O,n[10]=(g*T-_*S+f*w)*O,n[11]=(u*S-h*T-p*w)*O,n[12]=(o*x-a*P-l*C)*O,n[13]=(t*P-i*x+r*C)*O,n[14]=(_*b-g*E-m*w)*O,n[15]=(h*E-u*b+d*w)*O,n):null}function Th(n){let e=n[0],t=n[1],i=n[2],r=n[3],s=n[4],a=n[5],o=n[6],l=n[7],c=n[8],h=n[9],u=n[10],d=n[11],p=n[12],g=n[13],_=n[14],m=n[15],f=e*a-t*s,w=e*o-i*s,b=e*l-r*s,S=t*o-i*a,E=t*l-r*a,T=i*l-r*o,R=c*g-h*p,C=c*_-u*p,x=c*m-d*p,M=h*_-u*g,P=h*m-d*g,F=u*m-d*_;return f*F-w*P+b*M+S*x-E*C+T*R}function Ch(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],u=e[8],d=e[9],p=e[10],g=e[11],_=e[12],m=e[13],f=e[14],w=e[15],b=t[0],S=t[1],E=t[2],T=t[3];return n[0]=b*i+S*o+E*u+T*_,n[1]=b*r+S*l+E*d+T*m,n[2]=b*s+S*c+E*p+T*f,n[3]=b*a+S*h+E*g+T*w,b=t[4],S=t[5],E=t[6],T=t[7],n[4]=b*i+S*o+E*u+T*_,n[5]=b*r+S*l+E*d+T*m,n[6]=b*s+S*c+E*p+T*f,n[7]=b*a+S*h+E*g+T*w,b=t[8],S=t[9],E=t[10],T=t[11],n[8]=b*i+S*o+E*u+T*_,n[9]=b*r+S*l+E*d+T*m,n[10]=b*s+S*c+E*p+T*f,n[11]=b*a+S*h+E*g+T*w,b=t[12],S=t[13],E=t[14],T=t[15],n[12]=b*i+S*o+E*u+T*_,n[13]=b*r+S*l+E*d+T*m,n[14]=b*s+S*c+E*p+T*f,n[15]=b*a+S*h+E*g+T*w,n}function Qp(n,e,t){let i=t[0],r=t[1],s=t[2],a,o,l,c,h,u,d,p,g,_,m,f;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],l=e[2],c=e[3],h=e[4],u=e[5],d=e[6],p=e[7],g=e[8],_=e[9],m=e[10],f=e[11],n[0]=a,n[1]=o,n[2]=l,n[3]=c,n[4]=h,n[5]=u,n[6]=d,n[7]=p,n[8]=g,n[9]=_,n[10]=m,n[11]=f,n[12]=a*i+h*r+g*s+e[12],n[13]=o*i+u*r+_*s+e[13],n[14]=l*i+d*r+m*s+e[14],n[15]=c*i+p*r+f*s+e[15]),n}function em(n,e,t){let i=t[0],r=t[1],s=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function tm(n,e,t,i){let r=i[0],s=i[1],a=i[2],o=Math.hypot(r,s,a),l,c,h,u,d,p,g,_,m,f,w,b,S,E,T,R,C,x,M,P,F,U,O,X;return Math.abs(o)<f_?null:(o=1/o,r*=o,s*=o,a*=o,l=Math.sin(t),c=Math.cos(t),h=1-c,u=e[0],d=e[1],p=e[2],g=e[3],_=e[4],m=e[5],f=e[6],w=e[7],b=e[8],S=e[9],E=e[10],T=e[11],R=r*r*h+c,C=s*r*h+a*l,x=a*r*h-s*l,M=r*s*h-a*l,P=s*s*h+c,F=a*s*h+r*l,U=r*a*h+s*l,O=s*a*h-r*l,X=a*a*h+c,n[0]=u*R+_*C+b*x,n[1]=d*R+m*C+S*x,n[2]=p*R+f*C+E*x,n[3]=g*R+w*C+T*x,n[4]=u*M+_*P+b*F,n[5]=d*M+m*P+S*F,n[6]=p*M+f*P+E*F,n[7]=g*M+w*P+T*F,n[8]=u*U+_*O+b*X,n[9]=d*U+m*O+S*X,n[10]=p*U+f*O+E*X,n[11]=g*U+w*O+T*X,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function nm(n,e){return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function Rh(n,e){let t=e[0],i=e[1],r=e[2],s=e[4],a=e[5],o=e[6],l=e[8],c=e[9],h=e[10];return n[0]=Math.hypot(t,i,r),n[1]=Math.hypot(s,a,o),n[2]=Math.hypot(l,c,h),n}function im(n){let e=n[0],t=n[1],i=n[2],r=n[4],s=n[5],a=n[6],o=n[8],l=n[9],c=n[10],h=e*e+t*t+i*i,u=r*r+s*s+a*a,d=o*o+l*l+c*c;return Math.sqrt(Math.max(h,u,d))}var Ih=(function(){let n=[1,1,1];return function(e,t){let i=n;Rh(i,t);let r=1/i[0],s=1/i[1],a=1/i[2],o=t[0]*r,l=t[1]*s,c=t[2]*a,h=t[4]*r,u=t[5]*s,d=t[6]*a,p=t[8]*r,g=t[9]*s,_=t[10]*a,m=o+u+_,f=0;return m>0?(f=Math.sqrt(m+1)*2,e[3]=.25*f,e[0]=(d-g)/f,e[1]=(p-c)/f,e[2]=(l-h)/f):o>u&&o>_?(f=Math.sqrt(1+o-u-_)*2,e[3]=(d-g)/f,e[0]=.25*f,e[1]=(l+h)/f,e[2]=(p+c)/f):u>_?(f=Math.sqrt(1+u-o-_)*2,e[3]=(p-c)/f,e[0]=(l+h)/f,e[1]=.25*f,e[2]=(d+g)/f):(f=Math.sqrt(1+_-o-u)*2,e[3]=(l-h)/f,e[0]=(p+c)/f,e[1]=(d+g)/f,e[2]=.25*f),e}})();function rm(n,e,t,i){let r=$i([n[0],n[1],n[2]]),s=$i([n[4],n[5],n[6]]),a=$i([n[8],n[9],n[10]]);Th(n)<0&&(r=-r),t[0]=n[12],t[1]=n[13],t[2]=n[14];let l=n.slice(),c=1/r,h=1/s,u=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=h,l[5]*=h,l[6]*=h,l[8]*=u,l[9]*=u,l[10]*=u,Ih(e,l),i[0]=r,i[1]=s,i[2]=a}function sm(n,e,t,i){let r=n,s=e[0],a=e[1],o=e[2],l=e[3],c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,_=a*h,m=a*u,f=o*u,w=l*c,b=l*h,S=l*u,E=i[0],T=i[1],R=i[2];return r[0]=(1-(_+f))*E,r[1]=(p+S)*E,r[2]=(g-b)*E,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+f))*T,r[6]=(m+w)*T,r[7]=0,r[8]=(g+b)*R,r[9]=(m-w)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function am(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t+t,o=i+i,l=r+r,c=t*a,h=i*a,u=i*o,d=r*a,p=r*o,g=r*l,_=s*a,m=s*o,f=s*l;return n[0]=1-u-g,n[1]=h+f,n[2]=d-m,n[3]=0,n[4]=h-f,n[5]=1-c-g,n[6]=p+_,n[7]=0,n[8]=d+m,n[9]=p-_,n[10]=1-c-u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function om(n,e,t,i,r){let s=1/Math.tan(e/2),a=1/(i-r);return n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=(r+i)*a,n[11]=-1,n[12]=0,n[13]=0,n[14]=2*r*i*a,n[15]=0,n}function lm(n,e,t,i,r,s,a){let o=1/(e-t),l=1/(i-r),c=1/(s-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*l,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*c,n[11]=0,n[12]=(e+t)*o,n[13]=(r+i)*l,n[14]=(a+s)*c,n[15]=1,n}function cm(n,e,t,i){let r=e[0],s=e[1],a=e[2],o=i[0],l=i[1],c=i[2],h=r-t[0],u=s-t[1],d=a-t[2],p=h*h+u*u+d*d;p===0?d=1:(p=1/Math.sqrt(p),h*=p,u*=p,d*=p);let g=l*d-c*u,_=c*h-o*d,m=o*u-l*h;return p=g*g+_*_+m*m,p===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,g=l*d-c*u,_=c*h-o*d,m=o*u-l*h,p=g*g+_*_+m*m),p=1/Math.sqrt(p),g*=p,_*=p,m*=p,n[0]=g,n[1]=_,n[2]=m,n[3]=0,n[4]=u*m-d*_,n[5]=d*g-h*m,n[6]=h*_-u*g,n[7]=0,n[8]=h,n[9]=u,n[10]=d,n[11]=0,n[12]=r,n[13]=s,n[14]=a,n[15]=1,n}function Ph(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n[4]=e[4]+t[4],n[5]=e[5]+t[5],n[6]=e[6]+t[6],n[7]=e[7]+t[7],n[8]=e[8]+t[8],n[9]=e[9]+t[9],n[10]=e[10]+t[10],n[11]=e[11]+t[11],n[12]=e[12]+t[12],n[13]=e[13]+t[13],n[14]=e[14]+t[14],n[15]=e[15]+t[15],n}function Dh(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n[4]=e[4]-t[4],n[5]=e[5]-t[5],n[6]=e[6]-t[6],n[7]=e[7]-t[7],n[8]=e[8]-t[8],n[9]=e[9]-t[9],n[10]=e[10]-t[10],n[11]=e[11]-t[11],n[12]=e[12]-t[12],n[13]=e[13]-t[13],n[14]=e[14]-t[14],n[15]=e[15]-t[15],n}function hm(n,e,t){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7]*t,n[8]=e[8]*t,n[9]=e[9]*t,n[10]=e[10]*t,n[11]=e[11]*t,n[12]=e[12]*t,n[13]=e[13]*t,n[14]=e[14]*t,n[15]=e[15]*t,n}var Kn=class extends Array{constructor(e=1,t=0,i=0,r=0,s=0,a=1,o=0,l=0,c=0,h=0,u=1,d=0,p=0,g=0,_=0,m=1){return super(e,t,i,r,s,a,o,l,c,h,u,d,p,g,_,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,i,r,s,a,o,l,c,h,u,d,p,g,_,m){return e.length?this.copy(e):(Zp(this,e,t,i,r,s,a,o,l,c,h,u,d,p,g,_,m),this)}translate(e,t=this){return Qp(this,t,e),this}rotate(e,t,i=this){return tm(this,i,e,t),this}scale(e,t=this){return em(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?Ph(this,e,t):Ph(this,this,e),this}sub(e,t){return t?Dh(this,e,t):Dh(this,this,e),this}multiply(e,t){return e.length?t?Ch(this,e,t):Ch(this,this,e):hm(this,this,e),this}identity(){return Jp(this),this}copy(e){return jp(this,e),this}fromPerspective({fov:e,aspect:t,near:i,far:r}={}){return om(this,e,t,i,r),this}fromOrthogonal({left:e,right:t,bottom:i,top:r,near:s,far:a}){return lm(this,e,t,i,r,s,a),this}fromQuaternion(e){return am(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return Kp(this,e),this}compose(e,t,i){return sm(this,e,t,i),this}decompose(e,t,i){return rm(this,e,t,i),this}getRotation(e){return Ih(e,this),this}getTranslation(e){return nm(e,this),this}getScaling(e){return Rh(e,this),this}getMaxScaleOnAxis(){return im(this)}lookAt(e,t,i){return cm(this,e,t,i),this}determinant(){return Th(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}};function um(n,e,t="YXZ"){return t==="XYZ"?(n[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(n[0]=Math.atan2(-e[9],e[10]),n[2]=Math.atan2(-e[4],e[0])):(n[0]=Math.atan2(e[6],e[5]),n[2]=0)):t==="YXZ"?(n[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(n[1]=Math.atan2(e[8],e[10]),n[2]=Math.atan2(e[1],e[5])):(n[1]=Math.atan2(-e[2],e[0]),n[2]=0)):t==="ZXY"?(n[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(n[1]=Math.atan2(-e[2],e[10]),n[2]=Math.atan2(-e[4],e[5])):(n[1]=0,n[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(n[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(n[0]=Math.atan2(e[6],e[10]),n[2]=Math.atan2(e[1],e[0])):(n[0]=0,n[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(n[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(n[0]=Math.atan2(-e[9],e[5]),n[1]=Math.atan2(-e[2],e[0])):(n[0]=0,n[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(n[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(n[0]=Math.atan2(e[6],e[5]),n[1]=Math.atan2(e[8],e[0])):(n[0]=Math.atan2(-e[9],e[10]),n[1]=0)),n}var dm=new Kn,_o=class extends Array{constructor(e=0,t=e,i=e,r="YXZ"){super(e,t,i),this.order=r,this.onChange=()=>{},this._target=this;let s=["0","1","2"];return new Proxy(this,{set(a,o){let l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return um(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,i){return dm.fromQuaternion(e),this._target.fromRotationMatrix(dm,t),i||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}};var xo=class{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Kn,this.worldMatrix=new Kn,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Xt,this.quaternion=new vo,this.scale=new Xt(1),this.rotation=new _o,this.up=new Xt(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,i=this.children.length;t<i;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,i=this.children.length;t<i;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}};function fm(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[4],n[4]=e[5],n[5]=e[6],n[6]=e[8],n[7]=e[9],n[8]=e[10],n}function pm(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t+t,o=i+i,l=r+r,c=t*a,h=i*a,u=i*o,d=r*a,p=r*o,g=r*l,_=s*a,m=s*o,f=s*l;return n[0]=1-u-g,n[3]=h-f,n[6]=d+m,n[1]=h+f,n[4]=1-c-g,n[7]=p-_,n[2]=d-m,n[5]=p+_,n[8]=1-c-u,n}function mm(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n}function gm(n,e,t,i,r,s,a,o,l,c){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n[4]=s,n[5]=a,n[6]=o,n[7]=l,n[8]=c,n}function vm(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=1,n[5]=0,n[6]=0,n[7]=0,n[8]=1,n}function _m(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=-h*s+o*l,p=c*s-a*l,g=t*u+i*d+r*p;return g?(g=1/g,n[0]=u*g,n[1]=(-h*i+r*c)*g,n[2]=(o*i-r*a)*g,n[3]=d*g,n[4]=(h*t-r*l)*g,n[5]=(-o*t+r*s)*g,n[6]=p*g,n[7]=(-c*t+i*l)*g,n[8]=(a*t-i*s)*g,n):null}function Lh(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],u=e[8],d=t[0],p=t[1],g=t[2],_=t[3],m=t[4],f=t[5],w=t[6],b=t[7],S=t[8];return n[0]=d*i+p*a+g*c,n[1]=d*r+p*o+g*h,n[2]=d*s+p*l+g*u,n[3]=_*i+m*a+f*c,n[4]=_*r+m*o+f*h,n[5]=_*s+m*l+f*u,n[6]=w*i+b*a+S*c,n[7]=w*r+b*o+S*h,n[8]=w*s+b*l+S*u,n}function xm(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],u=e[8],d=t[0],p=t[1];return n[0]=i,n[1]=r,n[2]=s,n[3]=a,n[4]=o,n[5]=l,n[6]=d*i+p*a+c,n[7]=d*r+p*o+h,n[8]=d*s+p*l+u,n}function ym(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],u=e[8],d=Math.sin(t),p=Math.cos(t);return n[0]=p*i+d*a,n[1]=p*r+d*o,n[2]=p*s+d*l,n[3]=p*a-d*i,n[4]=p*o-d*r,n[5]=p*l-d*s,n[6]=c,n[7]=h,n[8]=u,n}function Mm(n,e,t){let i=t[0],r=t[1];return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=r*e[3],n[4]=r*e[4],n[5]=r*e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n}function Sm(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],w=t*o-i*a,b=t*l-r*a,S=t*c-s*a,E=i*l-r*o,T=i*c-s*o,R=r*c-s*l,C=h*_-u*g,x=h*m-d*g,M=h*f-p*g,P=u*m-d*_,F=u*f-p*_,U=d*f-p*m,O=w*U-b*F+S*P+E*M-T*x+R*C;return O?(O=1/O,n[0]=(o*U-l*F+c*P)*O,n[1]=(l*M-a*U-c*x)*O,n[2]=(a*F-o*M+c*C)*O,n[3]=(r*F-i*U-s*P)*O,n[4]=(t*U-r*M+s*x)*O,n[5]=(i*M-t*F-s*C)*O,n[6]=(_*R-m*T+f*E)*O,n[7]=(m*S-g*R-f*b)*O,n[8]=(g*T-_*S+f*w)*O,n):null}var yo=class extends Array{constructor(e=1,t=0,i=0,r=0,s=1,a=0,o=0,l=0,c=1){return super(e,t,i,r,s,a,o,l,c),this}set(e,t,i,r,s,a,o,l,c){return e.length?this.copy(e):(gm(this,e,t,i,r,s,a,o,l,c),this)}translate(e,t=this){return xm(this,t,e),this}rotate(e,t=this){return ym(this,t,e),this}scale(e,t=this){return Mm(this,t,e),this}multiply(e,t){return t?Lh(this,e,t):Lh(this,this,e),this}identity(){return vm(this),this}copy(e){return mm(this,e),this}fromMatrix4(e){return fm(this,e),this}fromQuaternion(e){return pm(this,e),this}fromBasis(e,t,i){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],i[0],i[1],i[2]),this}inverse(e=this){return _m(this,e),this}getNormalMatrix(e){return Sm(this,e),this}};var v_=0,Ns=class extends xo{constructor(e,{geometry:t,program:i,mode:r=e.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=v_++,this.geometry=t,this.program=i,this.mode=r,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new Kn,this.normalMatrix=new yo,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}};var Fs=class extends go{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}};var __=["container"],x_=n=>{let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},y_=(n,e,t)=>{switch(n){case"top-left":return{anchor:[0,-.2*t],dir:[0,1]};case"top-right":return{anchor:[e,-.2*t],dir:[0,1]};case"top-center":return{anchor:[.5*e,-.2*t],dir:[0,1]};case"left":return{anchor:[-.2*e,.5*t],dir:[1,0]};case"right":return{anchor:[(1+.2)*e,.5*t],dir:[-1,0]};case"bottom-left":return{anchor:[0,(1+.2)*t],dir:[0,-1]};case"bottom-center":return{anchor:[.5*e,(1+.2)*t],dir:[0,-1]};case"bottom-right":return{anchor:[e,(1+.2)*t],dir:[0,-1]};default:return{anchor:[.5*e,-.2*t],dir:[0,1]}}},M_=`
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`,S_=`precision highp float;

uniform float iTime;
uniform vec2  iResolution;
uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;

  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);

  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);

  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) *
    rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) *
    rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);

  fragColor = rays1 * 0.82 + rays2 * 0.65;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}`,Mo=class n{containerRef;raysOrigin="top-right";raysColor="#c26b3b";raysSpeed=1;lightSpread=3;rayLength=5;pulsating=!1;fadeDistance=3;saturation=1;followMouse=!0;mouseInfluence=.25;noiseAmount=.4;distortion=0;isBrowser;isMobile=!1;renderer=null;mesh=null;uniforms=null;animationId=null;observer=null;mouse={x:.5,y:.5};smoothMouse={x:.5,y:.5};boundMouseMove=this.onMouseMove.bind(this);boundTouchMove=this.onTouchMove.bind(this);boundResize=this.onResize.bind(this);frameCount=0;lastScrollY=0;lastScrollTime=0;constructor(e){this.isBrowser=_r(e),this.isBrowser&&(this.isMobile=window.innerWidth<768||"ontouchstart"in window&&window.innerWidth<1024)}ngOnInit(){this.isBrowser&&(this.observer=new IntersectionObserver(e=>{e[0].isIntersecting&&(this.initWebGL(),this.observer?.disconnect())},{threshold:.1}),this.observer.observe(this.containerRef.nativeElement))}ngOnDestroy(){this.cleanup(),this.observer?.disconnect()}initWebGL(){let e=this.containerRef.nativeElement;if(!e)return;this.renderer=new Ls({dpr:Math.min(window.devicePixelRatio,this.isMobile?1:2),alpha:!0});let t=this.renderer.gl;for(t.canvas.style.width="100%",t.canvas.style.height="100%";e.firstChild;)e.removeChild(e.firstChild);e.appendChild(t.canvas),this.uniforms={iTime:{value:0},iResolution:{value:[1,1]},rayPos:{value:[0,0]},rayDir:{value:[0,1]},raysColor:{value:x_(this.raysColor)},raysSpeed:{value:this.raysSpeed},lightSpread:{value:this.lightSpread},rayLength:{value:this.rayLength},pulsating:{value:this.pulsating?1:0},fadeDistance:{value:this.fadeDistance},saturation:{value:this.saturation},mousePos:{value:[.5,.5]},mouseInfluence:{value:this.mouseInfluence},noiseAmount:{value:this.noiseAmount},distortion:{value:this.distortion}};let i=new Fs(t),r=new Ds(t,{vertex:M_,fragment:S_,uniforms:this.uniforms});this.mesh=new Ns(t,{geometry:i,program:r}),this.updatePlacement(),this.followMouse&&(window.addEventListener("mousemove",this.boundMouseMove),window.addEventListener("touchmove",this.boundTouchMove,{passive:!0})),window.addEventListener("resize",this.boundResize);let s=a=>{if(!this.renderer||!this.uniforms||!this.mesh)return;this.frameCount++;let o=window.scrollY;o!==this.lastScrollY&&(this.lastScrollTime=a,this.lastScrollY=o);let l=a-this.lastScrollTime<300;if(this.isMobile&&l&&this.frameCount%2!==0){this.animationId=requestAnimationFrame(s);return}this.uniforms.iTime.value=a*.001,this.followMouse&&this.mouseInfluence>0&&(this.smoothMouse.x=this.smoothMouse.x*.92+this.mouse.x*(1-.92),this.smoothMouse.y=this.smoothMouse.y*.92+this.mouse.y*(1-.92),this.uniforms.mousePos.value=[this.smoothMouse.x,this.smoothMouse.y]);try{this.renderer.render({scene:this.mesh}),this.animationId=requestAnimationFrame(s)}catch{return}};this.animationId=requestAnimationFrame(s)}updatePlacement(){let e=this.containerRef.nativeElement;if(!e||!this.renderer)return;this.renderer.dpr=Math.min(window.devicePixelRatio,this.isMobile?1:2);let{clientWidth:t,clientHeight:i}=e;this.renderer.setSize(t,i);let r=this.renderer.dpr,s=t*r,a=i*r;this.uniforms.iResolution.value=[s,a];let{anchor:o,dir:l}=y_(this.raysOrigin,s,a);this.uniforms.rayPos.value=o,this.uniforms.rayDir.value=l}onMouseMove(e){let t=this.containerRef.nativeElement;if(!t||!this.renderer)return;let i=t.getBoundingClientRect();this.mouse.x=(e.clientX-i.left)/i.width,this.mouse.y=(e.clientY-i.top)/i.height}onTouchMove(e){let t=this.containerRef.nativeElement;if(!t||!this.renderer||!e.touches[0])return;let i=t.getBoundingClientRect();this.mouse.x=(e.touches[0].clientX-i.left)/i.width,this.mouse.y=(e.touches[0].clientY-i.top)/i.height}onResize(){this.updatePlacement()}cleanup(){if(this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null),window.removeEventListener("mousemove",this.boundMouseMove),window.removeEventListener("touchmove",this.boundTouchMove),window.removeEventListener("resize",this.boundResize),this.renderer)try{let e=this.renderer.gl.canvas,t=this.renderer.gl.getExtension("WEBGL_lose_context");t&&t.loseContext(),e?.parentNode&&e.parentNode.removeChild(e)}catch{}this.renderer=null,this.uniforms=null,this.mesh=null}static \u0275fac=function(t){return new(t||n)(bt(Ln))};static \u0275cmp=Nn({type:n,selectors:[["app-light-rays"]],viewQuery:function(t,i){if(t&1&&Ca(__,7),t&2){let r;ki(r=Vi())&&(i.containerRef=r.first)}},inputs:{raysOrigin:"raysOrigin",raysColor:"raysColor",raysSpeed:"raysSpeed",lightSpread:"lightSpread",rayLength:"rayLength",pulsating:"pulsating",fadeDistance:"fadeDistance",saturation:"saturation",followMouse:"followMouse",mouseInfluence:"mouseInfluence",noiseAmount:"noiseAmount",distortion:"distortion"},decls:2,vars:0,consts:[["container",""],[1,"light-rays-container"]],template:function(t,i){t&1&&Aa(0,"div",1,0)},styles:["[_nghost-%COMP%]{display:block;position:fixed;inset:0;pointer-events:none;z-index:1;overflow:hidden;mix-blend-mode:screen}.light-rays-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;pointer-events:none;overflow:hidden}"]})};var Hm=0,uu=1,Gm=2;var ra=1,Wm=2,Jr=3,si=0,Ht=1,kn=2,Vn=0,tr=1,du=2,fu=3,pu=4,dl=5,wi=100,Xm=101,qm=102,Ym=103,$m=104,jm=200,fl=201,Zm=202,Jm=203,Go=204,Wr=205,Km=206,Qm=207,eg=208,tg=209,ng=210,ig=211,rg=212,sg=213,ag=214,pl=0,ml=1,gl=2,nr=3,vl=4,_l=5,xl=6,yl=7,mu=0,og=1,lg=2,Tn=0,gu=1,vu=2,_u=3,xu=4,yu=5,Mu=6,Su=7;var iu=300,Pi=301,lr=302,Ml=303,Sl=304,sa=306,Wo=1e3,Bn=1001,Xo=1002,Ct=1003,cg=1004;var aa=1005;var Pt=1006,bl=1007;var Di=1008;var cn=1009,bu=1010,wu=1011,Kr=1012,wl=1013,Cn=1014,Rn=1015,Hn=1016,El=1017,Al=1018,Qr=1020,Eu=35902,Au=35899,Tu=1021,Cu=1022,_n=1023,zn=1026,Li=1027,Ru=1028,Tl=1029,cr=1030,Cl=1031;var Rl=1033,oa=33776,la=33777,ca=33778,ha=33779,Il=35840,Pl=35841,Dl=35842,Ll=35843,Nl=36196,Fl=37492,Ul=37496,Ol=37488,Bl=37489,zl=37490,kl=37491,Vl=37808,Hl=37809,Gl=37810,Wl=37811,Xl=37812,ql=37813,Yl=37814,$l=37815,jl=37816,Zl=37817,Jl=37818,Kl=37819,Ql=37820,ec=37821,tc=36492,nc=36494,ic=36495,rc=36283,sc=36284,ac=36285,oc=36286;var Vs=2300,qo=2301,Ho=2302,ru=2400,su=2401,au=2402;var hg=3200;var ug=0,dg=1,li="",sn="srgb",ir="srgb-linear",Hs="linear",rt="srgb";var Qi=7680;var ou=519,fg=512,pg=513,mg=514,lc=515,gg=516,vg=517,cc=518,_g=519,lu=35044,ua=35048;var Iu="300 es",An=2e3,Gs=2001;function Pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function b_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xg(){let n=Ws("canvas");return n.style.display="block",n}var bm={},Xr=null;function Du(...n){let e="THREE."+n.shift();Xr?Xr("log",e,...n):console.log(e,...n)}function Ue(...n){let e="THREE."+n.shift();Xr?Xr("warn",e,...n):console.warn(e,...n)}function Pe(...n){let e="THREE."+n.shift();Xr?Xr("error",e,...n):console.error(e,...n)}function qr(...n){let e=n.join(" ");e in bm||(bm[e]=!0,Ue(...n))}function yg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nh=Math.PI/180,Yo=180/Math.PI;function da(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function w_(n,e){return(n%e+e)%e}function Fh(n,e,t){return(1-t)*n+t*e}function Us(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Qe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+u*_;m<0&&(d=-d,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){let w=Math.acos(m),b=Math.sin(w);f=Math.sin(f*w)/b,o=Math.sin(o*w)/b,l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+_*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+_*o;let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uh=new z,wm=new oi,ke=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],w=r[1],b=r[4],S=r[7],E=r[2],T=r[5],R=r[8];return s[0]=a*_+o*w+l*E,s[3]=a*m+o*b+l*T,s[6]=a*f+o*S+l*R,s[1]=c*_+h*w+u*E,s[4]=c*m+h*b+u*T,s[7]=c*f+h*S+u*R,s[2]=d*_+p*w+g*E,s[5]=d*m+p*b+g*T,s[8]=d*f+p*S+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=t*u+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oh=new ke,Em=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Am=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){let n={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?Hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ir]:{primaries:e,whitePoint:i,transfer:Hs,toXYZ:Em,fromXYZ:Am,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Em,fromXYZ:Am,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}var Ke=E_();function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Pr,$o=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pr===void 0&&(Pr=Ws("canvas")),Pr.width=e.width,Pr.height=e.height;let r=Pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Pr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ws("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ri(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},A_=0,Yr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=da(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Bh(r[a].image)):s.push(Bh(r[a]))}else s=Bh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$o.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var T_=0,zh=new z,ci=(()=>{class n extends ai{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Bn,s=Bn,a=Pt,o=Di,l=_n,c=cn,h=n.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=da(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ue(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){Ue(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=iu,n.DEFAULT_ANISOTROPY=1,n})(),_t=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,S=(p+1)/2,E=(f+1)/2,T=(h+d)/4,R=(u+_)/4,C=(g+m)/4;return b>S&&b>E?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=R/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=C/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=C/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new ci(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends jo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Xs=class extends ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),bo.subVectors(this.max,Os),Dr.subVectors(e.a,Os),Lr.subVectors(e.b,Os),Nr.subVectors(e.c,Os),vi.subVectors(Lr,Dr),_i.subVectors(Nr,Lr),ji.subVectors(Dr,Nr);let t=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-ji.z,ji.y,vi.z,0,-vi.x,_i.z,0,-_i.x,ji.z,0,-ji.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-ji.y,ji.x,0];return!kh(t,Dr,Lr,Nr,bo)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,Dr,Lr,Nr,bo))?!1:(wo.crossVectors(vi,_i),t=[wo.x,wo.y,wo.z],kh(t,Dr,Lr,Nr,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new z,new z,new z,new z,new z,new z,new z,new z],bn=new z,So=new Ei,Dr=new z,Lr=new z,Nr=new z,vi=new z,_i=new z,ji=new z,Os=new z,bo=new z,wo=new z,Zi=new z;function kh(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zi.fromArray(n,s);let o=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=i.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var C_=new Ei,Bs=new z,Vh=new z,rr=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):C_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);let t=Bs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Vh)),this.expandByPoint(Bs.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ei=new z,Hh=new z,Eo=new z,xi=new z,Gh=new z,Ao=new z,Wh=new z,qs=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hh.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Hh);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Eo),o=xi.dot(this.direction),l=-xi.dot(Eo),c=xi.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Hh).addScaledVector(Eo,d),p}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,r,s){Gh.subVectors(t,e),Ao.subVectors(i,e),Wh.crossVectors(Gh,Ao);let a=this.direction.dot(Wh),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);let l=o*this.direction.dot(Ao.crossVectors(xi,Ao));if(l<0)return null;let c=o*this.direction.dot(Gh.cross(xi));if(c<0||l+c>a)return null;let h=-o*xi.dot(Wh);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,g,_,m)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),a=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,I_)}lookAt(e,t,i){let r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),yi.crossVectors(i,nn),yi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),yi.crossVectors(i,nn)),yi.normalize(),To.crossVectors(nn,yi),r[0]=yi.x,r[4]=To.x,r[8]=nn.x,r[1]=yi.y,r[5]=To.y,r[9]=nn.y,r[2]=yi.z,r[6]=To.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],w=i[3],b=i[7],S=i[11],E=i[15],T=r[0],R=r[4],C=r[8],x=r[12],M=r[1],P=r[5],F=r[9],U=r[13],O=r[2],X=r[6],W=r[10],k=r[14],Z=r[3],ce=r[7],ne=r[11],he=r[15];return s[0]=a*T+o*M+l*O+c*Z,s[4]=a*R+o*P+l*X+c*ce,s[8]=a*C+o*F+l*W+c*ne,s[12]=a*x+o*U+l*k+c*he,s[1]=h*T+u*M+d*O+p*Z,s[5]=h*R+u*P+d*X+p*ce,s[9]=h*C+u*F+d*W+p*ne,s[13]=h*x+u*U+d*k+p*he,s[2]=g*T+_*M+m*O+f*Z,s[6]=g*R+_*P+m*X+f*ce,s[10]=g*C+_*F+m*W+f*ne,s[14]=g*x+_*U+m*k+f*he,s[3]=w*T+b*M+S*O+E*Z,s[7]=w*R+b*P+S*X+E*ce,s[11]=w*C+b*F+S*W+E*ne,s[15]=w*x+b*U+S*k+E*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15],w=l*p-c*d,b=o*p-c*u,S=o*d-l*u,E=a*p-c*h,T=a*d-l*h,R=a*u-o*h;return t*(_*w-m*b+f*S)-i*(g*w-m*E+f*T)+r*(g*b-_*E+f*R)-s*(g*S-_*T+m*R)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],w=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,b=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,S=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,E=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=t*w+i*b+r*S+s*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=w*R,e[1]=(_*d*s-u*m*s-_*r*p+i*m*p+u*r*f-i*d*f)*R,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*f+i*l*f)*R,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*p-i*l*p)*R,e[4]=b*R,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*f+t*d*f)*R,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*f-t*l*f)*R,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*R,e[8]=S*R,e[9]=(g*u*s-h*_*s-g*i*p+t*_*p+h*i*f-t*u*f)*R,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*f+t*o*f)*R,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*p-t*o*p)*R,e[12]=E*R,e[13]=(h*_*r-g*u*r+g*i*d-t*_*d-h*i*m+t*u*m)*R,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*R,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,_=a*h,m=a*u,f=o*u,w=l*c,b=l*h,S=l*u,E=i.x,T=i.y,R=i.z;return r[0]=(1-(_+f))*E,r[1]=(p+S)*E,r[2]=(g-b)*E,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+f))*T,r[6]=(m+w)*T,r[7]=0,r[8]=(g+b)*R,r[9]=(m-w)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Fr.set(r[0],r[1],r[2]).length(),a=Fr.set(r[4],r[5],r[6]).length(),o=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),wn.copy(this);let c=1/s,h=1/a,u=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=An,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===An)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Gs)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=An,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===An)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Gs)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Fr=new z,wn=new yt,R_=new z(0,0,0),I_=new z(1,1,1),yi=new z,To=new z,nn=new z,Tm=new yt,Cm=new oi,sr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,a=s[0],o=s[4],l=s[8],c=s[1],h=s[5],u=s[9],d=s[2],p=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Tm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tm,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Cm.setFromEuler(this),this.setFromQuaternion(Cm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ys=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},P_=0,Rm=new z,Ur=new oi,ti=new yt,Co=new z,zs=new z,D_=new z,L_=new oi,Im=new z(1,0,0),Pm=new z(0,1,0),Dm=new z(0,0,1),Lm={type:"added"},N_={type:"removed"},Or={type:"childadded",child:null},Xh={type:"childremoved",child:null},Ni=(()=>{class n extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new z,i=new sr,r=new oi,s=new z(1,1,1);function a(){r.setFromEuler(i,!1)}function o(){i.setFromQuaternion(r,void 0,!1)}i._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new ke}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ur.setFromAxisAngle(t,i),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,i){return Ur.setFromAxisAngle(t,i),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis(Im,t)}rotateY(t){return this.rotateOnAxis(Pm,t)}rotateZ(t){return this.rotateOnAxis(Dm,t)}translateOnAxis(t,i){return Rm.copy(t).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Im,t)}translateY(t){return this.translateOnAxis(Pm,t)}translateZ(t){return this.translateOnAxis(Dm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Co.copy(t):Co.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(zs,Co,this.up):ti.lookAt(Co,zs,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),Ur.setFromRotationMatrix(ti),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lm),Or.child=t,this.dispatchEvent(Or),Or.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(N_),Xh.child=t,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lm),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let o=this.children[r].getObjectByProperty(t,i);if(o!==void 0)return o}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,D_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,L_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>zt(Ae({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>Ae({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(t.materials,this.material[c]));s.material=l}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(a(t.animations,c))}}if(i){let l=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),d=o(t.shapes),p=o(t.skeletons),g=o(t.animations),_=o(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new z(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),En=new z,ni=new z,qh=new z,ii=new z,Br=new z,zr=new z,Nm=new z,Yh=new z,$h=new z,jh=new z,Zh=new _t,Jh=new _t,Kh=new _t,bi=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),ni.subVectors(i,t),qh.subVectors(e,t);let a=En.dot(En),o=En.dot(ni),l=En.dot(qh),c=ni.dot(ni),h=ni.dot(qh),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Zh.setScalar(0),Jh.setScalar(0),Kh.setScalar(0),Zh.fromBufferAttribute(e,t),Jh.fromBufferAttribute(e,i),Kh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zh,s.x),a.addScaledVector(Jh,s.y),a.addScaledVector(Kh,s.z),a}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),ni.subVectors(e,t),En.cross(ni).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),En.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Br.subVectors(r,i),zr.subVectors(s,i),Yh.subVectors(e,i);let l=Br.dot(Yh),c=zr.dot(Yh);if(l<=0&&c<=0)return t.copy(i);$h.subVectors(e,r);let h=Br.dot($h),u=zr.dot($h);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Br,a);jh.subVectors(e,s);let p=Br.dot(jh),g=zr.dot(jh);if(g>=0&&p<=g)return t.copy(s);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(zr,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Nm.subVectors(s,r),o=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(Nm,o);let f=1/(m+_+d);return a=_*f,o=d*f,t.copy(i).addScaledVector(Br,a).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Qh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=w_(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Qh(a,s,e+1/3),this.g=Qh(a,s,e),this.b=Qh(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=sn){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let i=Mg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Ke.workingToColorSpace(Ft.copy(this),e),Math.round(Ze(Ft.r*255,0,255))*65536+Math.round(Ze(Ft.g*255,0,255))*256+Math.round(Ze(Ft.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Ft.copy(this),t);let i=Ft.r,r=Ft.g,s=Ft.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=sn){Ke.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,r=Ft.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Ro);let i=Fh(Mi.h,Ro.h,t),r=Fh(Mi.s,Ro.s,t),s=Fh(Mi.l,Ro.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new tt;tt.NAMES=Mg;var F_=0,Ai=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=da(),this.name="",this.type="Material",this.blending=tr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wr,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Go&&(i.blendSrc=this.blendSrc),this.blendDst!==Wr&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$s=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new z,Io=new Qe,U_=0,It=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lu,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Us(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Us(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Us(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lu&&(e.usage=this.usage),e}};var js=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zs=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var pt=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}},O_=0,vn=new yt,eu=new Ni,kr=new z,rn=new Ei,ks=new Ei,Tt=new z,on=class n extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?Zs:js)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(rn.min,ks.min),rn.expandByPoint(Tt),Tt.addVectors(rn.max,ks.max),rn.expandByPoint(Tt)):(rn.expandByPoint(ks.min),rn.expandByPoint(ks.max))}rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(kr.fromBufferAttribute(e,c),Tt.add(kr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new z,l[C]=new z;let c=new z,h=new z,u=new z,d=new Qe,p=new Qe,g=new Qe,_=new z,m=new z;function f(C,x,M){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,M),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[x].add(_),o[M].add(_),l[C].add(m),l[x].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,x=w.length;C<x;++C){let M=w[C],P=M.start,F=M.count;for(let U=P,O=P+F;U<O;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new z,S=new z,E=new z,T=new z;function R(C){E.fromBufferAttribute(r,C),T.copy(E);let x=o[C];b.copy(x),b.sub(E.multiplyScalar(E.dot(x))).normalize(),S.crossVectors(T,x);let P=S.dot(l[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,P)}for(let C=0,x=w.length;C<x;++C){let M=w[C],P=M.start,F=M.count;for(let U=P,O=P+F;U<O;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,h=new z,u=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new It(d,h,u)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fm=new yt,Ji=new qs,Po=new rr,Um=new z,Do=new z,Lo=new z,No=new z,tu=new z,Fo=new z,Om=new z,Uo=new z,$t=class extends Ni{constructor(e=new on,t=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(tu.fromBufferAttribute(u,e),a?Fo.addScaledVector(tu,h):Fo.addScaledVector(tu.sub(t),h))}t.add(Fo)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(Po.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Po,Um)===null||Ji.origin.distanceToSquared(Um)>(e.far-e.near)**2))&&(Fm.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(Fm),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,E=b;S<E;S+=3){let T=o.getX(S),R=o.getX(S+1),C=o.getX(S+2);r=Oo(this,f,e,i,c,h,u,T,R,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let w=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);r=Oo(this,a,e,i,c,h,u,w,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,E=b;S<E;S+=3){let T=S,R=S+1,C=S+2;r=Oo(this,f,e,i,c,h,u,T,R,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let w=m,b=m+1,S=m+2;r=Oo(this,a,e,i,c,h,u,w,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function B_(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===si,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:n}}function Oo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Do),n.getVertexPosition(l,Lo),n.getVertexPosition(c,No);let h=B_(n,e,t,i,Do,Lo,No,Om);if(h){let u=new z;bi.getBarycoord(Om,Do,Lo,No,u),r&&(h.uv=bi.getInterpolatedAttribute(r,o,l,c,u,new Qe)),s&&(h.uv1=bi.getInterpolatedAttribute(s,o,l,c,u,new Qe)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,l,c,u,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new z,materialIndex:0};bi.getNormal(Do,Lo,No,d.normal),h.face=d,h.barycoord=u}return h}var $r=class n extends on{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function g(_,m,f,w,b,S,E,T,R,C,x){let M=S/R,P=E/C,F=S/2,U=E/2,O=T/2,X=R+1,W=C+1,k=0,Z=0,ce=new z;for(let ne=0;ne<W;ne++){let he=ne*P-U;for(let Ve=0;Ve<X;Ve++){let De=Ve*M-F;ce[_]=De*w,ce[m]=he*b,ce[f]=O,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[f]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Ve/R),u.push(1-ne/C),k+=1}}for(let ne=0;ne<C;ne++)for(let he=0;he<R;he++){let Ve=d+he+X*ne,De=d+he+X*(ne+1),nt=d+(he+1)+X*(ne+1),Je=d+(he+1)+X*ne;l.push(Ve,De,Je),l.push(De,nt,Je),Z+=6}o.addGroup(p,Z,x),p+=Z,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){let e={};for(let t=0;t<n.length;t++){let i=hr(n[t]);for(let r in i)e[r]=i[r]}return e}function z_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Sg={clone:hr,merge:Ot},k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ut=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=V_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Js=class extends Ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new z,Bm=new Qe,zm=new Qe,Yt=class extends Js{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Nh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,Bm,zm),t.subVectors(zm,Bm)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Nh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vr=-90,Hr=1,Jo=class extends Ni{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(Vr,Hr,e,t);r.layers=this.layers,this.add(r);let s=new Yt(Vr,Hr,e,t);s.layers=this.layers,this.add(s);let a=new Yt(Vr,Hr,e,t);a.layers=this.layers,this.add(a);let o=new Yt(Vr,Hr,e,t);o.layers=this.layers,this.add(o);let l=new Yt(Vr,Hr,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Vr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ks=class extends ci{constructor(e=[],t=Pi,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qs=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ks(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $r(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Vn});s.uniforms.tEquirect.value=t;let a=new $t(r,s),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=Pt),new Jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},er=class extends Ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},H_={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Zr=class extends Ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentIntensity=1,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ko=class extends ci{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ct,h=Ct,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nu=new z,G_=new z,W_=new ke,On=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=nu.subVectors(i,t).cross(G_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||W_.getNormalMatrix(e),r=this.coplanarPoint(nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new rr,X_=new Qe(.5,.5),Bo=new z,ea=class{constructor(e=new On,t=new On,i=new On,r=new On,s=new On,a=new On){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],g=s[8],_=s[9],m=s[10],f=s[11],w=s[12],b=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-a,p-h,f-g,E-w).normalize(),r[1].setComponents(c+a,p+h,f+g,E+w).normalize(),r[2].setComponents(c+o,p+u,f+_,E+b).normalize(),r[3].setComponents(c-o,p-u,f-_,E-b).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,p-d,f-m,E-S).normalize();else if(r[4].setComponents(c-l,p-d,f-m,E-S).normalize(),t===An)r[5].setComponents(c+l,p+d,f+m,E+S).normalize();else if(t===Gs)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=X_.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Bo.x=r.normal.x>0?e.max.x:e.min.x,Bo.y=r.normal.y>0?e.max.y:e.min.y,Bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qo=class extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},km=new yt,cu=new qs,zo=new rr,ko=new z,ta=class extends Ni{constructor(e=new on,t=new Qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),zo.radius+=s,e.ray.intersectsSphere(zo)===!1)return;km.copy(r).invert(),cu.copy(e.ray).applyMatrix4(km);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){let m=c.getX(g);ko.fromBufferAttribute(u,m),Vm(ko,m,l,r,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)ko.fromBufferAttribute(u,g),Vm(ko,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Vm(n,e,t,i,r,s,a){let o=cu.distanceSqToPoint(n);if(o<t){let l=new z;cu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ti=class extends ci{constructor(e,t,i=Cn,r,s,a,o=Ct,l=Ct,c,h=zn,u=1){if(h!==zn&&h!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},el=class extends Ti{constructor(e,t=Cn,i=Pi,r,s,a=Ct,o=Ct,l,c=zn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},na=class extends ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ar=class n extends on{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let w=f*d-a;for(let b=0;b<c;b++){let S=b*u-s;g.push(S,-w,0),_.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){let b=w+c*f,S=w+c*(f+1),E=w+1+c*(f+1),T=w+1+c*f;p.push(b,S,T),p.push(S,E,T)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var tl=class extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var nl=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},il=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var or=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends or{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case su:s=e,o=2*t-i;break;case au:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case su:a=e,l=2*i-t;break;case au:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,w=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*_+.5*g,S=p*m-p*_;for(let E=0;E!==o;++E)s[E]=f*a[h+E]+w*a[c+E]+b*a[l+E]+S*a[u+E];return s}},sl=class extends or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},al=class extends or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ln=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vo(t,this.TimeBufferType),this.values=Vo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vo(e.times,Array),values:Vo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case qo:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ue("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&b_(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ho,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=qo;var Ci=class extends ln{constructor(e,t,i){super(e,t,i)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Vs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends ln{constructor(e,t,i,r){super(e,t,i,r)}};ol.prototype.ValueTypeName="color";var ll=class extends ln{constructor(e,t,i,r){super(e,t,i,r)}};ll.prototype.ValueTypeName="number";var cl=class extends or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)oi.slerpFlat(s,0,a,c-o,a,c,l);return s}},ia=class extends ln{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends ln{constructor(e,t,i){super(e,t,i)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Vs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends ln{constructor(e,t,i,r){super(e,t,i,r)}};hl.prototype.ValueTypeName="vector";var Ii=class extends Js{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ul=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Nu="\\[\\]\\.:\\/",q_=new RegExp("["+Nu+"]","g"),Fu="[^"+Nu+"]",Y_="[^"+Nu.replace("\\.","")+"]",$_=/((?:WC+[\/:])*)/.source.replace("WC",Fu),j_=/(WCOD+)?/.source.replace("WCOD",Y_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),J_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),K_=new RegExp("^"+$_+j_+Z_+J_+"$"),Q_=["material","materials","bones","map"],hu=class{constructor(e,t,i){let r=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(q_,"")}static parseTrackName(t){let i=K_.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=r.nodeName.substring(s+1);Q_.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===i||l.uuid===i)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,a=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=i.nodeName;Pe("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=hu,n})();vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var WE=new Float32Array(1);function Uu(n,e,t,i){let r=ex(i);switch(t){case Tu:return n*e;case Ru:return n*e/r.components*r.byteLength;case Tl:return n*e/r.components*r.byteLength;case cr:return n*e*2/r.components*r.byteLength;case Cl:return n*e*2/r.components*r.byteLength;case Cu:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case Rl:return n*e*4/r.components*r.byteLength;case oa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ca:case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Ll:return Math.max(n,16)*Math.max(e,8)/4;case Il:case Dl:return Math.max(n,8)*Math.max(e,8)/2;case Nl:case Fl:case Ol:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:case zl:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tc:case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rc:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ac:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ex(n){switch(n){case cn:case bu:return{byteLength:1,components:1};case Kr:case wu:case Hn:return{byteLength:2,components:1};case El:case Al:return{byteLength:2,components:4};case Cn:case wl:case Rn:return{byteLength:4,components:1};case Eu:case Au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function Xg(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nx(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var ix=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ux=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ax=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$x=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ty=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ny=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,my=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Py=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:ix,alphahash_pars_fragment:rx,alphamap_fragment:sx,alphamap_pars_fragment:ax,alphatest_fragment:ox,alphatest_pars_fragment:lx,aomap_fragment:cx,aomap_pars_fragment:hx,batching_pars_vertex:ux,batching_vertex:dx,begin_vertex:fx,beginnormal_vertex:px,bsdfs:mx,iridescence_fragment:gx,bumpmap_pars_fragment:vx,clipping_planes_fragment:_x,clipping_planes_pars_fragment:xx,clipping_planes_pars_vertex:yx,clipping_planes_vertex:Mx,color_fragment:Sx,color_pars_fragment:bx,color_pars_vertex:wx,color_vertex:Ex,common:Ax,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:Cx,displacementmap_pars_vertex:Rx,displacementmap_vertex:Ix,emissivemap_fragment:Px,emissivemap_pars_fragment:Dx,colorspace_fragment:Lx,colorspace_pars_fragment:Nx,envmap_fragment:Fx,envmap_common_pars_fragment:Ux,envmap_pars_fragment:Ox,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:jx,envmap_vertex:zx,fog_vertex:kx,fog_pars_vertex:Vx,fog_fragment:Hx,fog_pars_fragment:Gx,gradientmap_pars_fragment:Wx,lightmap_pars_fragment:Xx,lights_lambert_fragment:qx,lights_lambert_pars_fragment:Yx,lights_pars_begin:$x,lights_toon_fragment:Zx,lights_toon_pars_fragment:Jx,lights_phong_fragment:Kx,lights_phong_pars_fragment:Qx,lights_physical_fragment:ey,lights_physical_pars_fragment:ty,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:ry,logdepthbuf_fragment:sy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:oy,logdepthbuf_vertex:ly,map_fragment:cy,map_pars_fragment:hy,map_particle_fragment:uy,map_particle_pars_fragment:dy,metalnessmap_fragment:fy,metalnessmap_pars_fragment:py,morphinstance_vertex:my,morphcolor_vertex:gy,morphnormal_vertex:vy,morphtarget_pars_vertex:_y,morphtarget_vertex:xy,normal_fragment_begin:yy,normal_fragment_maps:My,normal_pars_fragment:Sy,normal_pars_vertex:by,normal_vertex:wy,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Ty,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Ry,opaque_fragment:Iy,packing:Py,premultiplied_alpha_fragment:Dy,project_vertex:Ly,dithering_fragment:Ny,dithering_pars_fragment:Fy,roughnessmap_fragment:Uy,roughnessmap_pars_fragment:Oy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:zy,shadowmap_vertex:ky,shadowmask_pars_fragment:Vy,skinbase_vertex:Hy,skinning_pars_vertex:Gy,skinning_vertex:Wy,skinnormal_vertex:Xy,specularmap_fragment:qy,specularmap_pars_fragment:Yy,tonemapping_fragment:$y,tonemapping_pars_fragment:jy,transmission_fragment:Zy,transmission_pars_fragment:Jy,uv_pars_fragment:Ky,uv_pars_vertex:Qy,uv_vertex:eM,worldpos_vertex:tM,background_vert:nM,background_frag:iM,backgroundCube_vert:rM,backgroundCube_frag:sM,cube_vert:aM,cube_frag:oM,depth_vert:lM,depth_frag:cM,distance_vert:hM,distance_frag:uM,equirect_vert:dM,equirect_frag:fM,linedashed_vert:pM,linedashed_frag:mM,meshbasic_vert:gM,meshbasic_frag:vM,meshlambert_vert:_M,meshlambert_frag:xM,meshmatcap_vert:yM,meshmatcap_frag:MM,meshnormal_vert:SM,meshnormal_frag:bM,meshphong_vert:wM,meshphong_frag:EM,meshphysical_vert:AM,meshphysical_frag:TM,meshtoon_vert:CM,meshtoon_frag:RM,points_vert:IM,points_frag:PM,shadow_vert:DM,shadow_frag:LM,sprite_vert:NM,sprite_frag:FM},oe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Wn={basic:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new tt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ot([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ot([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new tt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ot([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ot([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ot([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ot([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ot([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ot([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Ot([oe.common,oe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Ot([oe.lights,oe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Wn.physical={uniforms:Ot([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var hc={r:0,b:0,g:0},ur=new sr,UM=new yt;function OM(n,e,t,i,r,s,a){let o=new tt(0),l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1,E=g(b);E===null?f(o,l):E&&E.isColor&&(f(E,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){let E=g(S);E&&(E.isCubeTexture||E.mapping===sa)?(h===void 0&&(h=new $t(new $r(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:hr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ur.copy(S.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(ur)),h.material.toneMapped=Ke.getTransfer(E.colorSpace)!==rt,(u!==E||d!==E.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new $t(new ar(2,2),new Ut({name:"BackgroundMaterial",uniforms:hr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,S){b.getRGB(hc,Lu(n)),i.buffers.color.setClear(hc.r,hc.g,hc.b,S,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:_,addToRenderList:m,dispose:w}}function BM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function o(M,P,F,U,O){let X=!1,W=u(U,F,P);s!==W&&(s=W,c(s.object)),X=p(M,U,F,O),X&&g(M,U,F,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(M,P,F,U),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,P,F){let U=F.wireframe===!0,O=i[M.id];O===void 0&&(O={},i[M.id]=O);let X=O[P.id];X===void 0&&(X={},O[P.id]=X);let W=X[U];return W===void 0&&(W=d(l()),X[U]=W),W}function d(M){let P=[],F=[],U=[];for(let O=0;O<t;O++)P[O]=0,F[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:U,object:M,attributes:{},index:null}}function p(M,P,F,U){let O=s.attributes,X=P.attributes,W=0,k=F.getAttributes();for(let Z in k)if(k[Z].location>=0){let ne=O[Z],he=X[Z];if(he===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;W++}return s.attributesNum!==W||s.index!==U}function g(M,P,F,U){let O={},X=P.attributes,W=0,k=F.getAttributes();for(let Z in k)if(k[Z].location>=0){let ne=X[Z];ne===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor));let he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),O[Z]=he,W++}s.attributes=O,s.attributesNum=W,s.index=U}function _(){let M=s.newAttributes;for(let P=0,F=M.length;P<F;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){let F=s.newAttributes,U=s.enabledAttributes,O=s.attributeDivisors;F[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),O[M]!==P&&(n.vertexAttribDivisor(M,P),O[M]=P)}function w(){let M=s.newAttributes,P=s.enabledAttributes;for(let F=0,U=P.length;F<U;F++)P[F]!==M[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function b(M,P,F,U,O,X,W){W===!0?n.vertexAttribIPointer(M,P,F,O,X):n.vertexAttribPointer(M,P,F,U,O,X)}function S(M,P,F,U){_();let O=U.attributes,X=F.getAttributes(),W=P.defaultAttributeValues;for(let k in X){let Z=X[k];if(Z.location>=0){let ce=O[k];if(ce===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){let ne=ce.normalized,he=ce.itemSize,Ve=e.get(ce);if(Ve===void 0)continue;let De=Ve.buffer,nt=Ve.type,Je=Ve.bytesPerElement,Y=nt===n.INT||nt===n.UNSIGNED_INT||ce.gpuType===wl;if(ce.isInterleavedBufferAttribute){let J=ce.data,pe=J.stride,Le=ce.offset;if(J.isInstancedInterleavedBuffer){for(let fe=0;fe<Z.locationSize;fe++)f(Z.location+fe,J.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let fe=0;fe<Z.locationSize;fe++)m(Z.location+fe);n.bindBuffer(n.ARRAY_BUFFER,De);for(let fe=0;fe<Z.locationSize;fe++)b(Z.location+fe,he/Z.locationSize,nt,ne,pe*Je,(Le+he/Z.locationSize*fe)*Je,Y)}else{if(ce.isInstancedBufferAttribute){for(let J=0;J<Z.locationSize;J++)f(Z.location+J,ce.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let J=0;J<Z.locationSize;J++)m(Z.location+J);n.bindBuffer(n.ARRAY_BUFFER,De);for(let J=0;J<Z.locationSize;J++)b(Z.location+J,he/Z.locationSize,nt,ne,he*Je,he/Z.locationSize*J*Je,Y)}}else if(W!==void 0){let ne=W[k];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(Z.location,ne);break;case 3:n.vertexAttrib3fv(Z.location,ne);break;case 4:n.vertexAttrib4fv(Z.location,ne);break;default:n.vertexAttrib1fv(Z.location,ne)}}}}w()}function E(){C();for(let M in i){let P=i[M];for(let F in P){let U=P[F];for(let O in U)h(U[O].object),delete U[O];delete P[F]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let P=i[M.id];for(let F in P){let U=P[F];for(let O in U)h(U[O].object),delete U[O];delete P[F]}delete i[M.id]}function R(M){for(let P in i){let F=i[P];if(F[M.id]===void 0)continue;let U=F[M.id];for(let O in U)h(U[O].object),delete U[O];delete F[M.id]}}function C(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function zM(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==_n&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let C=R===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Rn&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ue("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,maxSamples:E,samples:T}}function VM(n){let e=this,t=null,i=0,r=!1,s=!1,a=new On,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let w=s?0:i,b=w*4,S=f.clippingState||null;l.value=S,S=h(g,d,b,p);for(let E=0;E!==b;++E)S[E]=t[E];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,S=p;b!==_;++b,S+=4)a.copy(u[b]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function HM(n){let e=new WeakMap;function t(a,o){return o===Ml?a.mapping=Pi:o===Sl&&(a.mapping=lr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ml||o===Sl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qs(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Fi=4,bg=[.125,.215,.35,.446,.526,.582],fr=20,GM=256,fa=new Ii,wg=new tt,Ou=null,Bu=0,zu=0,ku=!1,WM=new z,dc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=WM}=s;Ou=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,Bu,zu),this._renderer.xr.enabled=ku,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Hn,format:_n,colorSpace:ir,depthBuffer:!1},r=Eg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eg(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XM(s)),this._blurMaterial=YM(s,e,t),this._ggxMaterial=qM(s,e,t)}return r}_compileMaterial(e){let t=new $t(new on,e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,i,r,s){let l=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(wg),u.toneMapping=Tn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new $r,new $s({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,f=!0):(m.color.copy(wg),f=!0);for(let b=0;b<6;b++){let S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));let E=this._cubeSize;es(r,S*E,b>2?E:0,E,E),u.setRenderTarget(r),f&&u.render(_,l),u.render(e,l)}u.toneMapping=p,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Pi||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ag());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;es(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,fa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Fi?i-g+Fi:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,es(s,m,f,3*_,2*_),r.setRenderTarget(s),r.render(o,fa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,es(e,m,f,3*_,2*_),r.setRenderTarget(e),r.render(o,fa)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[r];u.material=c;let d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):fr;m>fr&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);let f=[],w=0;for(let R=0;R<fr;++R){let C=R/_,x=Math.exp(-C*C/2);f.push(x),R===0?w+=x:R<m&&(w+=2*x)}for(let R=0;R<f.length;R++)f[R]=f[R]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let S=this._sizeLods[r],E=3*S*(r>b-Fi?r-b+Fi:0),T=4*(this._cubeSize-S);es(t,E,T,3*S,2*S),l.setRenderTarget(t),l.render(u,fa)}};function XM(n){let e=[],t=[],i=[],r=n,s=n-Fi+1+bg.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Fi?l=bg[a-n+Fi-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*p),b=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){let R=T%3*2/3-1,C=T>2?0:-1,x=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];w.set(x,_*g*T),b.set(d,m*g*T);let M=[T,T,T,T,T,T];S.set(M,f*g*T)}let E=new on;E.setAttribute("position",new It(w,_)),E.setAttribute("uv",new It(b,m)),E.setAttribute("faceIndex",new It(S,f)),i.push(new $t(E,null)),r>Fi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Eg(n,e,t){let i=new an(n,e,t);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function qM(n,e,t){return new Ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function YM(n,e,t){let i=new Float32Array(fr),r=new z(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ag(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Tg(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $M(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ml||l===Sl,h=l===Pi||l===lr;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new dc(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new dc(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function jM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&qr("WebGLRenderer: "+i+" extension not supported."),r}}}function ZM(n,e,t,i){let r={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let w=p.array;_=p.version;for(let b=0,S=w.length;b<S;b+=3){let E=w[b+0],T=w[b+1],R=w[b+2];d.push(E,T,T,R,R,E)}}else if(g!==void 0){let w=g.array;_=g.version;for(let b=0,S=w.length/3-1;b<S;b+=3){let E=b+0,T=b+1,R=b+2;d.push(E,T,T,R,R,E)}}else return;let m=new(Pu(d)?Zs:js)(d,1);m.version=_;let f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function JM(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*_[w];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function KM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function QM(n,e,t){let i=new WeakMap,r=new _t;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let E=o.attributes.position.count*S,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let R=new Float32Array(E*T*4*u),C=new Xs(R,E,T,u);C.type=Rn,C.needsUpdate=!0;let x=S*4;for(let P=0;P<u;P++){let F=f[P],U=w[P],O=b[P],X=E*T*4*P;for(let W=0;W<F.count;W++){let k=W*x;g===!0&&(r.fromBufferAttribute(F,W),R[X+k+0]=r.x,R[X+k+1]=r.y,R[X+k+2]=r.z,R[X+k+3]=0),_===!0&&(r.fromBufferAttribute(U,W),R[X+k+4]=r.x,R[X+k+5]=r.y,R[X+k+6]=r.z,R[X+k+7]=0),m===!0&&(r.fromBufferAttribute(O,W),R[X+k+8]=r.x,R[X+k+9]=r.y,R[X+k+10]=r.z,R[X+k+11]=O.itemSize===4?r.w:1)}}d={count:u,texture:C,size:new Qe(E,T)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function eS(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var tS={[gu]:"LINEAR_TONE_MAPPING",[vu]:"REINHARD_TONE_MAPPING",[_u]:"CINEON_TONE_MAPPING",[xu]:"ACES_FILMIC_TONE_MAPPING",[Mu]:"AGX_TONE_MAPPING",[Su]:"NEUTRAL_TONE_MAPPING",[yu]:"CUSTOM_TONE_MAPPING"};function nS(n,e,t,i,r){let s=new an(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new an(e,t,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),o=new on;o.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new pt([0,2,0,0,2,0],2));let l=new tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new $t(o,l),h=new Ii(-1,1,1,-1,0,1),u=null,d=null,p=!1,g,_=null,m=[],f=!1;this.setSize=function(w,b){s.setSize(w,b),a.setSize(w,b);for(let S=0;S<m.length;S++){let E=m[S];E.setSize&&E.setSize(w,b)}},this.setEffects=function(w){m=w,f=m.length>0&&m[0].isRenderPass===!0;let b=s.width,S=s.height;for(let E=0;E<m.length;E++){let T=m[E];T.setSize&&T.setSize(b,S)}},this.begin=function(w,b){if(p||w.toneMapping===Tn&&m.length===0)return!1;if(_=b,b!==null){let S=b.width,E=b.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return f===!1&&w.setRenderTarget(s),g=w.toneMapping,w.toneMapping=Tn,!0},this.hasRenderPass=function(){return f},this.end=function(w,b){w.toneMapping=g,p=!0;let S=s,E=a;for(let T=0;T<m.length;T++){let R=m[T];if(R.enabled!==!1&&(R.render(w,E,S,b),R.needsSwap!==!1)){let C=S;S=E,E=C}}if(u!==w.outputColorSpace||d!==w.toneMapping){u=w.outputColorSpace,d=w.toneMapping,l.defines={},Ke.getTransfer(u)===rt&&(l.defines.SRGB_TRANSFER="");let T=tS[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,w.setRenderTarget(_),w.render(c,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var qg=new ci,Gu=new Ti(1,1),Yg=new Xs,$g=new Zo,jg=new Ks,Cg=[],Rg=[],Ig=new Float32Array(16),Pg=new Float32Array(9),Dg=new Float32Array(4);function ns(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Cg[r];if(s===void 0&&(s=new Float32Array(r),Cg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pc(n,e){let t=Rg[e];t===void 0&&(t=new Int32Array(e),Rg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function sS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function aS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function oS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;Dg.set(i),n.uniformMatrix2fv(this.addr,!1,Dg),Et(t,i)}}function lS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;Pg.set(i),n.uniformMatrix3fv(this.addr,!1,Pg),Et(t,i)}}function cS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;Ig.set(i),n.uniformMatrix4fv(this.addr,!1,Ig),Et(t,i)}}function hS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function dS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function fS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function pS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function gS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function vS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function _S(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gu.compareFunction=t.isReversedDepthBuffer()?cc:lc,s=Gu):s=qg,t.setTexture2D(e||s,r)}function xS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$g,r)}function yS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||jg,r)}function MS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Yg,r)}function SS(n){switch(n){case 5126:return iS;case 35664:return rS;case 35665:return sS;case 35666:return aS;case 35674:return oS;case 35675:return lS;case 35676:return cS;case 5124:case 35670:return hS;case 35667:case 35671:return uS;case 35668:case 35672:return dS;case 35669:case 35673:return fS;case 5125:return pS;case 36294:return mS;case 36295:return gS;case 36296:return vS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return MS}}function bS(n,e){n.uniform1fv(this.addr,e)}function wS(n,e){let t=ns(e,this.size,2);n.uniform2fv(this.addr,t)}function ES(n,e){let t=ns(e,this.size,3);n.uniform3fv(this.addr,t)}function AS(n,e){let t=ns(e,this.size,4);n.uniform4fv(this.addr,t)}function TS(n,e){let t=ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CS(n,e){let t=ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RS(n,e){let t=ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function IS(n,e){n.uniform1iv(this.addr,e)}function PS(n,e){n.uniform2iv(this.addr,e)}function DS(n,e){n.uniform3iv(this.addr,e)}function LS(n,e){n.uniform4iv(this.addr,e)}function NS(n,e){n.uniform1uiv(this.addr,e)}function FS(n,e){n.uniform2uiv(this.addr,e)}function US(n,e){n.uniform3uiv(this.addr,e)}function OS(n,e){n.uniform4uiv(this.addr,e)}function BS(n,e,t){let i=this.cache,r=e.length,s=pc(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Gu:a=qg;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function zS(n,e,t){let i=this.cache,r=e.length,s=pc(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||$g,s[a])}function kS(n,e,t){let i=this.cache,r=e.length,s=pc(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||jg,s[a])}function VS(n,e,t){let i=this.cache,r=e.length,s=pc(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Yg,s[a])}function HS(n){switch(n){case 5126:return bS;case 35664:return wS;case 35665:return ES;case 35666:return AS;case 35674:return TS;case 35675:return CS;case 35676:return RS;case 5124:case 35670:return IS;case 35667:case 35671:return PS;case 35668:case 35672:return DS;case 35669:case 35673:return LS;case 5125:return NS;case 36294:return FS;case 36295:return US;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return VS}}var Wu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SS(t.type)}},Xu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HS(t.type)}},qu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Vu=/(\w+)(\])?(\[|\.)?/g;function Lg(n,e){n.seq.push(e),n.map[e.id]=e}function GS(n,e,t){let i=n.name,r=i.length;for(Vu.lastIndex=0;;){let s=Vu.exec(i),a=Vu.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Lg(t,c===void 0?new Wu(o,n,e):new Xu(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new qu(o),Lg(t,u)),t=u}}}var ts=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);GS(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Ng(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var WS=37297,XS=0;function qS(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Fg=new ke;function YS(n){Ke._getMatrix(Fg,Ke.workingColorSpace,n);let e=`mat3( ${Fg.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Hs:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ug(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+qS(n.getShaderSource(e),o)}else return s}function $S(n,e){let t=YS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var jS={[gu]:"Linear",[vu]:"Reinhard",[_u]:"Cineon",[xu]:"ACESFilmic",[Mu]:"AgX",[Su]:"Neutral",[yu]:"Custom"};function ZS(n,e){let t=jS[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uc=new z;function JS(){Ke.getLuminanceCoefficients(uc);let n=uc.x.toFixed(4),e=uc.y.toFixed(4),t=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function QS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ma(n){return n!==""}function Og(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(n){return n.replace(tb,ib)}var nb=new Map;function ib(n,e){let t=He[e];if(t===void 0){let i=nb.get(e);if(i!==void 0)t=He[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yu(t)}var rb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(n){return n.replace(rb,sb)}function sb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ab={[ra]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function ob(n){return ab[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lb={[Pi]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function cb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":lb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var hb={[lr]:"ENVMAP_MODE_REFRACTION"};function ub(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":hb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var db={[mu]:"ENVMAP_BLENDING_MULTIPLY",[og]:"ENVMAP_BLENDING_MIX",[lg]:"ENVMAP_BLENDING_ADD"};function fb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":db[n.combine]||"ENVMAP_BLENDING_NONE"}function pb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function mb(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ob(t),c=cb(t),h=ub(t),u=fb(t),d=pb(t),p=KS(t),g=QS(s),_=r.createProgram(),m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),f.length>0&&(f+=`
`)):(m=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),f=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?He.tonemapping_pars_fragment:"",t.toneMapping!==Tn?ZS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,$S("linearToOutputTexel",t.outputColorSpace),JS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=Yu(a),a=Og(a,t),a=Bg(a,t),o=Yu(o),o=Og(o,t),o=Bg(o,t),a=zg(a),o=zg(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=w+m+a,S=w+f+o,E=Ng(r,r.VERTEX_SHADER,b),T=Ng(r,r.FRAGMENT_SHADER,S);r.attachShader(_,E),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(P){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(_)||"",U=r.getShaderInfoLog(E)||"",O=r.getShaderInfoLog(T)||"",X=F.trim(),W=U.trim(),k=O.trim(),Z=!0,ce=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,T);else{let ne=Ug(r,E,"vertex"),he=Ug(r,T,"fragment");Pe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+ne+`
`+he)}else X!==""?Ue("WebGLProgram: Program Info Log:",X):(W===""||k==="")&&(ce=!1);ce&&(P.diagnostics={runnable:Z,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:k,prefix:f}})}r.deleteShader(E),r.deleteShader(T),C=new ts(r,_),x=eb(r,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,WS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}var gb=0,$u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ju(e),t.set(e,i)),i}},ju=class{constructor(e){this.id=gb++,this.code=e,this.usedTimes=0}};function vb(n,e,t,i,r,s,a){let o=new Ys,l=new $u,c=new Set,h=[],u=new Map,d=r.logarithmicDepthBuffer,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,F,U){let O=F.fog,X=U.geometry,W=x.isMeshStandardMaterial?F.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),Z=k&&k.mapping===sa?k.image.height:null,ce=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&Ue("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let ne=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,he=ne!==void 0?ne.length:0,Ve=0;X.morphAttributes.position!==void 0&&(Ve=1),X.morphAttributes.normal!==void 0&&(Ve=2),X.morphAttributes.color!==void 0&&(Ve=3);let De,nt,Je,Y;if(ce){let st=Wn[ce];De=st.vertexShader,nt=st.fragmentShader}else De=x.vertexShader,nt=x.fragmentShader,l.update(x),Je=l.getVertexShaderID(x),Y=l.getFragmentShaderID(x);let J=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Le=U.isInstancedMesh===!0,fe=U.isBatchedMesh===!0,Xe=!!x.map,ut=!!x.matcap,Ne=!!k,Me=!!x.aoMap,be=!!x.lightMap,we=!!x.bumpMap,Ge=!!x.normalMap,I=!!x.displacementMap,$e=!!x.emissiveMap,ze=!!x.metalnessMap,qe=!!x.roughnessMap,le=x.anisotropy>0,A=x.clearcoat>0,v=x.dispersion>0,D=x.iridescence>0,q=x.sheen>0,$=x.transmission>0,G=le&&!!x.anisotropyMap,ge=A&&!!x.clearcoatMap,ee=A&&!!x.clearcoatNormalMap,ve=A&&!!x.clearcoatRoughnessMap,Te=D&&!!x.iridescenceMap,K=D&&!!x.iridescenceThicknessMap,ie=q&&!!x.sheenColorMap,ye=q&&!!x.sheenRoughnessMap,Se=!!x.specularMap,se=!!x.specularColorMap,We=!!x.specularIntensityMap,L=$&&!!x.transmissionMap,de=$&&!!x.thicknessMap,te=!!x.gradientMap,me=!!x.alphaMap,Q=x.alphaTest>0,j=!!x.alphaHash,re=!!x.extensions,Oe=Tn;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Oe=n.toneMapping);let ct={shaderID:ce,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:nt,defines:x.defines,customVertexShaderID:Je,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:fe,batchingColor:fe&&U._colorsTexture!==null,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ir,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:ut,envMap:Ne,envMapMode:Ne&&k.mapping,envMapCubeUVHeight:Z,aoMap:Me,lightMap:be,bumpMap:we,normalMap:Ge,displacementMap:I,emissiveMap:$e,normalMapObjectSpace:Ge&&x.normalMapType===dg,normalMapTangentSpace:Ge&&x.normalMapType===ug,metalnessMap:ze,roughnessMap:qe,anisotropy:le,anisotropyMap:G,clearcoat:A,clearcoatMap:ge,clearcoatNormalMap:ee,clearcoatRoughnessMap:ve,dispersion:v,iridescence:D,iridescenceMap:Te,iridescenceThicknessMap:K,sheen:q,sheenColorMap:ie,sheenRoughnessMap:ye,specularMap:Se,specularColorMap:se,specularIntensityMap:We,transmission:$,transmissionMap:L,thicknessMap:de,gradientMap:te,opaque:x.transparent===!1&&x.blending===tr&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:j,combine:x.combine,mapUv:Xe&&_(x.map.channel),aoMapUv:Me&&_(x.aoMap.channel),lightMapUv:be&&_(x.lightMap.channel),bumpMapUv:we&&_(x.bumpMap.channel),normalMapUv:Ge&&_(x.normalMap.channel),displacementMapUv:I&&_(x.displacementMap.channel),emissiveMapUv:$e&&_(x.emissiveMap.channel),metalnessMapUv:ze&&_(x.metalnessMap.channel),roughnessMapUv:qe&&_(x.roughnessMap.channel),anisotropyMapUv:G&&_(x.anisotropyMap.channel),clearcoatMapUv:ge&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(x.sheenRoughnessMap.channel),specularMapUv:Se&&_(x.specularMap.channel),specularColorMapUv:se&&_(x.specularColorMap.channel),specularIntensityMapUv:We&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:de&&_(x.thicknessMap.channel),alphaMapUv:me&&_(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ge||le),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Xe||me),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:$e&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kn,flipSided:x.side===Ht,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function f(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(w(M,x),b(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function w(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){let M=g[x.type],P;if(M){let F=Wn[M];P=Sg.clone(F.uniforms)}else P=x.uniforms;return P}function E(x,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new mb(n,M,x,s),h.push(P),u.set(M,P)),P}function T(x){if(--x.usedTimes===0){let M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:E,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:C}}function _b(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function xb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hg(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,g,_,m){let f=a(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(u,d,p,g,_,m){let f=a(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||xb),i.length>1&&i.sort(d||Vg),r.length>1&&r.sort(d||Vg)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function yb(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new Hg,n.set(i,[a])):r>=s.length?(a=new Hg,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Mb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Sb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var bb=0;function wb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Eb(n){let e=new Mb,t=Sb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let r=new z,s=new yt,a=new yt;function o(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,w=0,b=0,S=0,E=0,T=0,R=0;c.sort(wb);for(let x=0,M=c.length;x<M;x++){let P=c[x],F=P.color,U=P.intensity,O=P.distance,X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===cr?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*U,u+=F.g*U,d+=F.b*U;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],U);R++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,Z=t.get(P);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=W,p++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(U),W.distance=O,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;let k=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,k.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=k.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=X,S++}_++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(F).multiplyScalar(U),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let k=P.shadow,Z=t.get(P);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(U),W.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==w||C.numPointShadows!==b||C.numSpotShadows!==S||C.numSpotMaps!==E||C.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=w,C.numPointShadows=b,C.numSpotShadows=S,C.numSpotMaps=E,C.numLightProbes=R,i.version=bb++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let b=c[f];if(b.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(b.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let S=i.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Gg(n){let e=new Eb(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ab(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Gg(n),e.set(r,[o])):s>=a.length?(o=new Gg(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rb=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Ib=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Wg=new yt,pa=new z,Hu=new z;function Pb(n,e,t){let i=new ea,r=new Qe,s=new Qe,a=new _t,o=new nl,l=new il,c={},h=t.maxTextureSize,u={[si]:Ht,[Ht]:si,[kn]:kn},d=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Tb,fragmentShader:Cb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ra;let f=this.type;this.render=function(T,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;T.type===Wm&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=ra);let x=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Vn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let U=f!==this.type;U&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(X=>X.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,X=T.length;O<X;O++){let W=T[O],k=W.shadow;if(k===void 0){Ue("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let Z=k.getFrameExtents();if(r.multiply(Z),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Z.x),r.x=s.x*Z.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Z.y),r.y=s.y*Z.y,k.mapSize.y=s.y)),k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Jr){if(W.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new an(r.x,r.y,{format:cr,type:Hn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Ti(r.x,r.y,Rn),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=zn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct}else{W.isPointLight?(k.map=new Qs(r.x),k.map.depthTexture=new el(r.x,Cn)):(k.map=new an(r.x,r.y),k.map.depthTexture=new Ti(r.x,r.y,Cn)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=zn;let ne=n.state.buffers.depth.getReversed();this.type===ra?(k.map.depthTexture.compareFunction=ne?cc:lc,k.map.depthTexture.minFilter=Pt,k.map.depthTexture.magFilter=Pt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct)}k.camera.updateProjectionMatrix()}let ce=k.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<ce;ne++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(k.map),n.clear());let he=k.getViewport(ne);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),F.viewport(a)}if(W.isPointLight){let he=k.camera,Ve=k.matrix,De=W.distance||he.far;De!==he.far&&(he.far=De,he.updateProjectionMatrix()),pa.setFromMatrixPosition(W.matrixWorld),he.position.copy(pa),Hu.copy(he.position),Hu.add(Rb[ne]),he.up.copy(Ib[ne]),he.lookAt(Hu),he.updateMatrixWorld(),Ve.makeTranslation(-pa.x,-pa.y,-pa.z),Wg.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Wg,he.coordinateSystem,he.reversedDepth)}else k.updateMatrices(W);i=k.getFrustum(),S(R,C,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Jr&&w(k,C),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,M,P)};function w(T,R){let C=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new an(r.x,r.y,{format:cr,type:Hn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,C,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,C,p,_,null)}function b(T,R,C,x){let M=null,P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=M.uuid,U=R.uuid,O=c[F];O===void 0&&(O={},c[F]=O);let X=O[U];X===void 0&&(X=M.clone(),O[U]=X,R.addEventListener("dispose",E)),M=X}if(M.visible=R.visible,M.wireframe=R.wireframe,x===Jr?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=n.properties.get(M);F.light=C}return M}function S(T,R,C,x,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Jr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let U=e.update(T),O=T.material;if(Array.isArray(O)){let X=U.groups;for(let W=0,k=X.length;W<k;W++){let Z=X[W],ce=O[Z.materialIndex];if(ce&&ce.visible){let ne=b(T,ce,x,M);T.onBeforeShadow(n,T,R,C,U,ne,Z),n.renderBufferDirect(C,null,U,ne,T,Z),T.onAfterShadow(n,T,R,C,U,ne,Z)}}}else if(O.visible){let X=b(T,O,x,M);T.onBeforeShadow(n,T,R,C,U,X,null),n.renderBufferDirect(C,null,U,X,T,null),T.onAfterShadow(n,T,R,C,U,X,null)}}let F=T.children;for(let U=0,O=F.length;U<O;U++)S(F[U],R,C,x,M)}function E(T){T.target.removeEventListener("dispose",E);for(let C in c){let x=c[C],M=T.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}var Db={[pl]:ml,[gl]:xl,[vl]:yl,[nr]:_l,[ml]:pl,[xl]:gl,[yl]:vl,[_l]:nr};function Lb(n,e){function t(){let L=!1,de=new _t,te=null,me=new _t(0,0,0,0);return{setMask:function(Q){te!==Q&&!L&&(n.colorMask(Q,Q,Q,Q),te=Q)},setLocked:function(Q){L=Q},setClear:function(Q,j,re,Oe,ct){ct===!0&&(Q*=Oe,j*=Oe,re*=Oe),de.set(Q,j,re,Oe),me.equals(de)===!1&&(n.clearColor(Q,j,re,Oe),me.copy(de))},reset:function(){L=!1,te=null,me.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,te=null,me=null,Q=null;return{setReversed:function(j){if(de!==j){let re=e.get("EXT_clip_control");j?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),de=j;let Oe=Q;Q=null,this.setClear(Oe)}},getReversed:function(){return de},setTest:function(j){j?J(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(j){te!==j&&!L&&(n.depthMask(j),te=j)},setFunc:function(j){if(de&&(j=Db[j]),me!==j){switch(j){case pl:n.depthFunc(n.NEVER);break;case ml:n.depthFunc(n.ALWAYS);break;case gl:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case vl:n.depthFunc(n.EQUAL);break;case _l:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=j}},setLocked:function(j){L=j},setClear:function(j){Q!==j&&(de&&(j=1-j),n.clearDepth(j),Q=j)},reset:function(){L=!1,te=null,me=null,Q=null,de=!1}}}function r(){let L=!1,de=null,te=null,me=null,Q=null,j=null,re=null,Oe=null,ct=null;return{setTest:function(st){L||(st?J(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(st){de!==st&&!L&&(n.stencilMask(st),de=st)},setFunc:function(st,In,Xn){(te!==st||me!==In||Q!==Xn)&&(n.stencilFunc(st,In,Xn),te=st,me=In,Q=Xn)},setOp:function(st,In,Xn){(j!==st||re!==In||Oe!==Xn)&&(n.stencilOp(st,In,Xn),j=st,re=In,Oe=Xn)},setLocked:function(st){L=st},setClear:function(st){ct!==st&&(n.clearStencil(st),ct=st)},reset:function(){L=!1,de=null,te=null,me=null,Q=null,j=null,re=null,Oe=null,ct=null}}}let s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,b=null,S=null,E=null,T=null,R=new tt(0,0,0),C=0,x=!1,M=null,P=null,F=null,U=null,O=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,k=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=k>=2);let ce=null,ne={},he=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),De=new _t().fromArray(he),nt=new _t().fromArray(Ve);function Je(L,de,te,me){let Q=new Uint8Array(4),j=n.createTexture();n.bindTexture(L,j),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<te;re++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(de+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return j}let Y={};Y[n.TEXTURE_2D]=Je(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(nr),we(!1),Ge(uu),J(n.CULL_FACE),Me(Vn);function J(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function pe(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Le(L,de){return u[L]!==de?(n.bindFramebuffer(L,de),u[L]=de,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function fe(L,de){let te=p,me=!1;if(L){te=d.get(de),te===void 0&&(te=[],d.set(de,te));let Q=L.textures;if(te.length!==Q.length||te[0]!==n.COLOR_ATTACHMENT0){for(let j=0,re=Q.length;j<re;j++)te[j]=n.COLOR_ATTACHMENT0+j;te.length=Q.length,me=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,me=!0);me&&n.drawBuffers(te)}function Xe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let ut={[wi]:n.FUNC_ADD,[Xm]:n.FUNC_SUBTRACT,[qm]:n.FUNC_REVERSE_SUBTRACT};ut[Ym]=n.MIN,ut[$m]=n.MAX;let Ne={[jm]:n.ZERO,[fl]:n.ONE,[Zm]:n.SRC_COLOR,[Go]:n.SRC_ALPHA,[ng]:n.SRC_ALPHA_SATURATE,[eg]:n.DST_COLOR,[Km]:n.DST_ALPHA,[Jm]:n.ONE_MINUS_SRC_COLOR,[Wr]:n.ONE_MINUS_SRC_ALPHA,[tg]:n.ONE_MINUS_DST_COLOR,[Qm]:n.ONE_MINUS_DST_ALPHA,[ig]:n.CONSTANT_COLOR,[rg]:n.ONE_MINUS_CONSTANT_COLOR,[sg]:n.CONSTANT_ALPHA,[ag]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(L,de,te,me,Q,j,re,Oe,ct,st){if(L===Vn){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(J(n.BLEND),_=!0),L!==dl){if(L!==m||st!==x){if((f!==wi||S!==wi)&&(n.blendEquation(n.FUNC_ADD),f=wi,S=wi),st)switch(L){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case du:n.blendFunc(n.ONE,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pe("WebGLState: Invalid blending: ",L);break}else switch(L){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case du:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fu:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pu:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",L);break}w=null,b=null,E=null,T=null,R.set(0,0,0),C=0,m=L,x=st}return}Q=Q||de,j=j||te,re=re||me,(de!==f||Q!==S)&&(n.blendEquationSeparate(ut[de],ut[Q]),f=de,S=Q),(te!==w||me!==b||j!==E||re!==T)&&(n.blendFuncSeparate(Ne[te],Ne[me],Ne[j],Ne[re]),w=te,b=me,E=j,T=re),(Oe.equals(R)===!1||ct!==C)&&(n.blendColor(Oe.r,Oe.g,Oe.b,ct),R.copy(Oe),C=ct),m=L,x=!1}function be(L,de){L.side===kn?pe(n.CULL_FACE):J(n.CULL_FACE);let te=L.side===Ht;de&&(te=!te),we(te),L.blending===tr&&L.transparent===!1?Me(Vn):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function Ge(L){L!==Hm?(J(n.CULL_FACE),L!==P&&(L===uu?n.cullFace(n.BACK):L===Gm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),P=L}function I(L){L!==F&&(W&&n.lineWidth(L),F=L)}function $e(L,de,te){L?(J(n.POLYGON_OFFSET_FILL),(U!==de||O!==te)&&(n.polygonOffset(de,te),U=de,O=te)):pe(n.POLYGON_OFFSET_FILL)}function ze(L){L?J(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function qe(L){L===void 0&&(L=n.TEXTURE0+X-1),ce!==L&&(n.activeTexture(L),ce=L)}function le(L,de,te){te===void 0&&(ce===null?te=n.TEXTURE0+X-1:te=ce);let me=ne[te];me===void 0&&(me={type:void 0,texture:void 0},ne[te]=me),(me.type!==L||me.texture!==de)&&(ce!==te&&(n.activeTexture(te),ce=te),n.bindTexture(L,de||Y[L]),me.type=L,me.texture=de)}function A(){let L=ne[ce];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function q(){try{n.texSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function $(){try{n.texSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ee(){try{n.texStorage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ve(){try{n.texStorage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Te(){try{n.texImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function K(){try{n.texImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ie(L){De.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),De.copy(L))}function ye(L){nt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),nt.copy(L))}function Se(L,de){let te=c.get(de);te===void 0&&(te=new WeakMap,c.set(de,te));let me=te.get(L);me===void 0&&(me=n.getUniformBlockIndex(de,L.name),te.set(L,me))}function se(L,de){let me=c.get(de).get(L);l.get(de)!==me&&(n.uniformBlockBinding(de,me,L.__bindingPointIndex),l.set(de,me))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,ne={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,b=null,S=null,E=null,T=null,R=new tt(0,0,0),C=0,x=!1,M=null,P=null,F=null,U=null,O=null,De.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:pe,bindFramebuffer:Le,drawBuffers:fe,useProgram:Xe,setBlending:Me,setMaterial:be,setFlipSided:we,setCullFace:Ge,setLineWidth:I,setPolygonOffset:$e,setScissorTest:ze,activeTexture:qe,bindTexture:le,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:Te,texImage3D:K,updateUBOMapping:Se,uniformBlockBinding:se,texStorage2D:ee,texStorage3D:ve,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:G,compressedTexSubImage3D:ge,scissor:ie,viewport:ye,reset:We}}function Nb(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):Ws("canvas")}function _(A,v,D){let q=1,$=le(A);if(($.width>D||$.height>D)&&(q=D/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let G=Math.floor(q*$.width),ge=Math.floor(q*$.height);u===void 0&&(u=g(G,ge));let ee=v?g(G,ge):u;return ee.width=G,ee.height=ge,ee.getContext("2d").drawImage(A,0,0,G,ge),Ue("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+G+"x"+ge+")."),ee}else return"data"in A&&Ue("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,v,D,q,$=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let G=v;if(v===n.RED&&(D===n.FLOAT&&(G=n.R32F),D===n.HALF_FLOAT&&(G=n.R16F),D===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.R8UI),D===n.UNSIGNED_SHORT&&(G=n.R16UI),D===n.UNSIGNED_INT&&(G=n.R32UI),D===n.BYTE&&(G=n.R8I),D===n.SHORT&&(G=n.R16I),D===n.INT&&(G=n.R32I)),v===n.RG&&(D===n.FLOAT&&(G=n.RG32F),D===n.HALF_FLOAT&&(G=n.RG16F),D===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.RG8UI),D===n.UNSIGNED_SHORT&&(G=n.RG16UI),D===n.UNSIGNED_INT&&(G=n.RG32UI),D===n.BYTE&&(G=n.RG8I),D===n.SHORT&&(G=n.RG16I),D===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.RGB8UI),D===n.UNSIGNED_SHORT&&(G=n.RGB16UI),D===n.UNSIGNED_INT&&(G=n.RGB32UI),D===n.BYTE&&(G=n.RGB8I),D===n.SHORT&&(G=n.RGB16I),D===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),D===n.UNSIGNED_INT&&(G=n.RGBA32UI),D===n.BYTE&&(G=n.RGBA8I),D===n.SHORT&&(G=n.RGBA16I),D===n.INT&&(G=n.RGBA32I)),v===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),v===n.RGBA){let ge=$?Hs:Ke.getTransfer(q);D===n.FLOAT&&(G=n.RGBA32F),D===n.HALF_FLOAT&&(G=n.RGBA16F),D===n.UNSIGNED_BYTE&&(G=ge===rt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(A,v){let D;return A?v===null||v===Cn||v===Qr?D=n.DEPTH24_STENCIL8:v===Rn?D=n.DEPTH32F_STENCIL8:v===Kr&&(D=n.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Cn||v===Qr?D=n.DEPTH_COMPONENT24:v===Rn?D=n.DEPTH_COMPONENT32F:v===Kr&&(D=n.DEPTH_COMPONENT16),D}function E(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ct&&A.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function T(A){let v=A.target;v.removeEventListener("dispose",T),C(v),v.isVideoTexture&&h.delete(v)}function R(A){let v=A.target;v.removeEventListener("dispose",R),M(v)}function C(A){let v=i.get(A);if(v.__webglInit===void 0)return;let D=A.source,q=d.get(D);if(q){let $=q[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(A),Object.keys(q).length===0&&d.delete(D)}i.remove(A)}function x(A){let v=i.get(A);n.deleteTexture(v.__webglTexture);let D=A.source,q=d.get(D);delete q[v.__cacheKey],a.memory.textures--}function M(A){let v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let $=0;$<v.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[q][$]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let D=A.textures;for(let q=0,$=D.length;q<$;q++){let G=i.get(D[q]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(D[q])}i.remove(A)}let P=0;function F(){P=0}function U(){let A=P;return A>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function O(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function X(A,v){let D=i.get(A);if(A.isVideoTexture&&ze(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&D.__version!==A.version){let q=A.image;if(q===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,A,v);return}}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function W(A,v){let D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){Y(D,A,v);return}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function k(A,v){let D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){Y(D,A,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function Z(A,v){let D=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&D.__version!==A.version){J(D,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}let ce={[Wo]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[Xo]:n.MIRRORED_REPEAT},ne={[Ct]:n.NEAREST,[cg]:n.NEAREST_MIPMAP_NEAREST,[aa]:n.NEAREST_MIPMAP_LINEAR,[Pt]:n.LINEAR,[bl]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},he={[fg]:n.NEVER,[_g]:n.ALWAYS,[pg]:n.LESS,[lc]:n.LEQUAL,[mg]:n.EQUAL,[cc]:n.GEQUAL,[gg]:n.GREATER,[vg]:n.NOTEQUAL};function Ve(A,v){if(v.type===Rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pt||v.magFilter===bl||v.magFilter===aa||v.magFilter===Di||v.minFilter===Pt||v.minFilter===bl||v.minFilter===aa||v.minFilter===Di)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ce[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ce[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ce[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ne[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ne[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==aa&&v.minFilter!==Di||v.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function De(A,v){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",T));let q=v.source,$=d.get(q);$===void 0&&($={},d.set(q,$));let G=O(v);if(G!==A.__cacheKey){$[G]===void 0&&($[G]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),$[G].usedTimes++;let ge=$[A.__cacheKey];ge!==void 0&&($[A.__cacheKey].usedTimes--,ge.usedTimes===0&&x(v)),A.__cacheKey=G,A.__webglTexture=$[G].texture}return D}function nt(A,v,D){return Math.floor(Math.floor(A/D)/v)}function Je(A,v,D,q){let G=A.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,D,q,v.data);else{G.sort((K,ie)=>K.start-ie.start);let ge=0;for(let K=1;K<G.length;K++){let ie=G[ge],ye=G[K],Se=ie.start+ie.count,se=nt(ye.start,v.width,4),We=nt(ie.start,v.width,4);ye.start<=Se+1&&se===We&&nt(ye.start+ye.count-1,v.width,4)===se?ie.count=Math.max(ie.count,ye.start+ye.count-ie.start):(++ge,G[ge]=ye)}G.length=ge+1;let ee=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let K=0,ie=G.length;K<ie;K++){let ye=G[K],Se=Math.floor(ye.start/4),se=Math.ceil(ye.count/4),We=Se%v.width,L=Math.floor(Se/v.width),de=se,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,We,L,de,te,D,q,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ee),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function Y(A,v,D){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);let $=De(A,v),G=v.source;t.bindTexture(q,A.__webglTexture,n.TEXTURE0+D);let ge=i.get(G);if(G.version!==ge.__version||$===!0){t.activeTexture(n.TEXTURE0+D);let ee=Ke.getPrimaries(Ke.workingColorSpace),ve=v.colorSpace===li?null:Ke.getPrimaries(v.colorSpace),Te=v.colorSpace===li||ee===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let K=_(v.image,!1,r.maxTextureSize);K=qe(v,K);let ie=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),Se=b(v.internalFormat,ie,ye,v.colorSpace,v.isVideoTexture);Ve(q,v);let se,We=v.mipmaps,L=v.isVideoTexture!==!0,de=ge.__version===void 0||$===!0,te=G.dataReady,me=E(v,K);if(v.isDepthTexture)Se=S(v.format===Li,v.type),de&&(L?t.texStorage2D(n.TEXTURE_2D,1,Se,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,Se,K.width,K.height,0,ie,ye,null));else if(v.isDataTexture)if(We.length>0){L&&de&&t.texStorage2D(n.TEXTURE_2D,me,Se,We[0].width,We[0].height);for(let Q=0,j=We.length;Q<j;Q++)se=We[Q],L?te&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,se.width,se.height,ie,ye,se.data):t.texImage2D(n.TEXTURE_2D,Q,Se,se.width,se.height,0,ie,ye,se.data);v.generateMipmaps=!1}else L?(de&&t.texStorage2D(n.TEXTURE_2D,me,Se,K.width,K.height),te&&Je(v,K,ie,ye)):t.texImage2D(n.TEXTURE_2D,0,Se,K.width,K.height,0,ie,ye,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Se,We[0].width,We[0].height,K.depth);for(let Q=0,j=We.length;Q<j;Q++)if(se=We[Q],v.format!==_n)if(ie!==null)if(L){if(te)if(v.layerUpdates.size>0){let re=Uu(se.width,se.height,v.format,v.type);for(let Oe of v.layerUpdates){let ct=se.data.subarray(Oe*re/se.data.BYTES_PER_ELEMENT,(Oe+1)*re/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Oe,se.width,se.height,1,ie,ct)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,se.width,se.height,K.depth,ie,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Se,se.width,se.height,K.depth,0,se.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,se.width,se.height,K.depth,ie,ye,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Se,se.width,se.height,K.depth,0,ie,ye,se.data)}else{L&&de&&t.texStorage2D(n.TEXTURE_2D,me,Se,We[0].width,We[0].height);for(let Q=0,j=We.length;Q<j;Q++)se=We[Q],v.format!==_n?ie!==null?L?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,se.width,se.height,ie,se.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Se,se.width,se.height,0,se.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,se.width,se.height,ie,ye,se.data):t.texImage2D(n.TEXTURE_2D,Q,Se,se.width,se.height,0,ie,ye,se.data)}else if(v.isDataArrayTexture)if(L){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Se,K.width,K.height,K.depth),te)if(v.layerUpdates.size>0){let Q=Uu(K.width,K.height,v.format,v.type);for(let j of v.layerUpdates){let re=K.data.subarray(j*Q/K.data.BYTES_PER_ELEMENT,(j+1)*Q/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,K.width,K.height,1,ie,ye,re)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ie,ye,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,K.width,K.height,K.depth,0,ie,ye,K.data);else if(v.isData3DTexture)L?(de&&t.texStorage3D(n.TEXTURE_3D,me,Se,K.width,K.height,K.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ie,ye,K.data)):t.texImage3D(n.TEXTURE_3D,0,Se,K.width,K.height,K.depth,0,ie,ye,K.data);else if(v.isFramebufferTexture){if(de)if(L)t.texStorage2D(n.TEXTURE_2D,me,Se,K.width,K.height);else{let Q=K.width,j=K.height;for(let re=0;re<me;re++)t.texImage2D(n.TEXTURE_2D,re,Se,Q,j,0,ie,ye,null),Q>>=1,j>>=1}}else if(We.length>0){if(L&&de){let Q=le(We[0]);t.texStorage2D(n.TEXTURE_2D,me,Se,Q.width,Q.height)}for(let Q=0,j=We.length;Q<j;Q++)se=We[Q],L?te&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ie,ye,se):t.texImage2D(n.TEXTURE_2D,Q,Se,ie,ye,se);v.generateMipmaps=!1}else if(L){if(de){let Q=le(K);t.texStorage2D(n.TEXTURE_2D,me,Se,Q.width,Q.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie,ye,K)}else t.texImage2D(n.TEXTURE_2D,0,Se,ie,ye,K);m(v)&&f(q),ge.__version=G.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function J(A,v,D){if(v.image.length!==6)return;let q=De(A,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+D);let G=i.get($);if($.version!==G.__version||q===!0){t.activeTexture(n.TEXTURE0+D);let ge=Ke.getPrimaries(Ke.workingColorSpace),ee=v.colorSpace===li?null:Ke.getPrimaries(v.colorSpace),ve=v.colorSpace===li||ge===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Te=v.isCompressedTexture||v.image[0].isCompressedTexture,K=v.image[0]&&v.image[0].isDataTexture,ie=[];for(let j=0;j<6;j++)!Te&&!K?ie[j]=_(v.image[j],!0,r.maxCubemapSize):ie[j]=K?v.image[j].image:v.image[j],ie[j]=qe(v,ie[j]);let ye=ie[0],Se=s.convert(v.format,v.colorSpace),se=s.convert(v.type),We=b(v.internalFormat,Se,se,v.colorSpace),L=v.isVideoTexture!==!0,de=G.__version===void 0||q===!0,te=$.dataReady,me=E(v,ye);Ve(n.TEXTURE_CUBE_MAP,v);let Q;if(Te){L&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,We,ye.width,ye.height);for(let j=0;j<6;j++){Q=ie[j].mipmaps;for(let re=0;re<Q.length;re++){let Oe=Q[re];v.format!==_n?Se!==null?L?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,0,0,Oe.width,Oe.height,Se,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,We,Oe.width,Oe.height,0,Oe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,0,0,Oe.width,Oe.height,Se,se,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,We,Oe.width,Oe.height,0,Se,se,Oe.data)}}}else{if(Q=v.mipmaps,L&&de){Q.length>0&&me++;let j=le(ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,We,j.width,j.height)}for(let j=0;j<6;j++)if(K){L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ie[j].width,ie[j].height,Se,se,ie[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,ie[j].width,ie[j].height,0,Se,se,ie[j].data);for(let re=0;re<Q.length;re++){let ct=Q[re].image[j].image;L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,0,0,ct.width,ct.height,Se,se,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,We,ct.width,ct.height,0,Se,se,ct.data)}}else{L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Se,se,ie[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,Se,se,ie[j]);for(let re=0;re<Q.length;re++){let Oe=Q[re];L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,0,0,Se,se,Oe.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,We,Se,se,Oe.image[j])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),G.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function pe(A,v,D,q,$,G){let ge=s.convert(D.format,D.colorSpace),ee=s.convert(D.type),ve=b(D.internalFormat,ge,ee,D.colorSpace),Te=i.get(v),K=i.get(D);if(K.__renderTarget=v,!Te.__hasExternalTextures){let ie=Math.max(1,v.width>>G),ye=Math.max(1,v.height>>G);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,G,ve,ie,ye,v.depth,0,ge,ee,null):t.texImage2D($,G,ve,ie,ye,0,ge,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),$e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,K.__webglTexture,0,I(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,K.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(A,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){let q=v.depthTexture,$=q&&q.isDepthTexture?q.type:null,G=S(v.stencilBuffer,$),ge=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$e(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(v),G,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(v),G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,A)}else{let q=v.textures;for(let $=0;$<q.length;$++){let G=q[$],ge=s.convert(G.format,G.colorSpace),ee=s.convert(G.type),ve=b(G.internalFormat,ge,ee,G.colorSpace);$e(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(v),ve,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(v),ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(A,v,D){let q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,v.depthTexture);let Te=s.convert(v.depthTexture.format),K=s.convert(v.depthTexture.type),ie;v.depthTexture.format===zn?ie=n.DEPTH_COMPONENT24:v.depthTexture.format===Li&&(ie=n.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ie,v.width,v.height,0,Te,K,null)}}else X(v.depthTexture,0);let G=$.__webglTexture,ge=I(v),ee=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,ve=v.depthTexture.format===Li?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===zn)$e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,ee,G,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,ve,ee,G,0);else if(v.depthTexture.format===Li)$e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,ee,G,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,ve,ee,G,0);else throw new Error("Unknown depthTexture format")}function Xe(A){let v=i.get(A),D=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=q}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let q=0;q<6;q++)fe(v.__webglFramebuffer[q],A,q);else{let q=A.texture.mipmaps;q&&q.length>0?fe(v.__webglFramebuffer[0],A,0):fe(v.__webglFramebuffer,A,0)}else if(D){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),Le(v.__webglDepthbuffer[q],A,!1);else{let $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,G)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Le(v.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(A,v,D){let q=i.get(A);v!==void 0&&pe(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Xe(A)}function Ne(A){let v=A.texture,D=i.get(A),q=i.get(v);A.addEventListener("dispose",R);let $=A.textures,G=A.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,a.memory.textures++),G){D.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[ee]=[];for(let ve=0;ve<v.mipmaps.length;ve++)D.__webglFramebuffer[ee][ve]=n.createFramebuffer()}else D.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let ee=0;ee<v.mipmaps.length;ee++)D.__webglFramebuffer[ee]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ge)for(let ee=0,ve=$.length;ee<ve;ee++){let Te=i.get($[ee]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&$e(A)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ee=0;ee<$.length;ee++){let ve=$[ee];D.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ee]);let Te=s.convert(ve.format,ve.colorSpace),K=s.convert(ve.type),ie=b(ve.internalFormat,Te,K,ve.colorSpace,A.isXRRenderTarget===!0),ye=I(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ie,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,D.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(D.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,v);for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)pe(D.__webglFramebuffer[ee][ve],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve);else pe(D.__webglFramebuffer[ee],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ee=0,ve=$.length;ee<ve;ee++){let Te=$[ee],K=i.get(Te),ie=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,K.__webglTexture),Ve(ie,Te),pe(D.__webglFramebuffer,A,Te,n.COLOR_ATTACHMENT0+ee,ie,0),m(Te)&&f(ie)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,q.__webglTexture),Ve(ee,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)pe(D.__webglFramebuffer[ve],A,v,n.COLOR_ATTACHMENT0,ee,ve);else pe(D.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,ee,0);m(v)&&f(ee),t.unbindTexture()}A.depthBuffer&&Xe(A)}function Me(A){let v=A.textures;for(let D=0,q=v.length;D<q;D++){let $=v[D];if(m($)){let G=w(A),ge=i.get($).__webglTexture;t.bindTexture(G,ge),f(G),t.unbindTexture()}}}let be=[],we=[];function Ge(A){if(A.samples>0){if($e(A)===!1){let v=A.textures,D=A.width,q=A.height,$=n.COLOR_BUFFER_BIT,G=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(A),ee=v.length>1;if(ee)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let ve=A.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Te]);let K=i.get(v[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,D,q,0,0,D,q,$,n.NEAREST),l===!0&&(be.length=0,we.length=0,be.push(n.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(be.push(G),we.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,we)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Te]);let K=i.get(v[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,K,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function I(A){return Math.min(r.maxSamples,A.samples)}function $e(A){let v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ze(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function qe(A,v){let D=A.colorSpace,q=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||D!==ir&&D!==li&&(Ke.getTransfer(D)===rt?(q!==_n||$!==cn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",D)),v}function le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=Z,this.rebindTextures=ut,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Fb(n,e){function t(i,r=li){let s,a=Ke.getTransfer(r);if(i===cn)return n.UNSIGNED_BYTE;if(i===El)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Al)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Au)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bu)return n.BYTE;if(i===wu)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===wl)return n.INT;if(i===Cn)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Hn)return n.HALF_FLOAT;if(i===Tu)return n.ALPHA;if(i===Cu)return n.RGB;if(i===_n)return n.RGBA;if(i===zn)return n.DEPTH_COMPONENT;if(i===Li)return n.DEPTH_STENCIL;if(i===Ru)return n.RED;if(i===Tl)return n.RED_INTEGER;if(i===cr)return n.RG;if(i===Cl)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===oa||i===la||i===ca||i===ha)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Pl||i===Dl||i===Ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===Fl||i===Ul||i===Ol||i===Bl||i===zl||i===kl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nl||i===Fl)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ul)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ol)return s.COMPRESSED_R11_EAC;if(i===Bl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zl)return s.COMPRESSED_RG11_EAC;if(i===kl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vl||i===Hl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===jl||i===Zl||i===Jl||i===Kl||i===Ql||i===ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ql)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$l)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tc||i===nc||i===ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tc)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===sc||i===ac||i===oc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new na(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ut({vertexShader:Ub,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ju=class extends ai{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Zu,f={},w=t.getContextAttributes(),b=null,S=null,E=[],T=[],R=new Qe,C=null,x=new Yt;x.viewport=new _t;let M=new Yt;M.viewport=new _t;let P=[x,M],F=new ul,U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=E[Y];return J===void 0&&(J=new jr,E[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=E[Y];return J===void 0&&(J=new jr,E[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=E[Y];return J===void 0&&(J=new jr,E[Y]=J),J.getHandSpace()};function X(Y){let J=T.indexOf(Y.inputSource);if(J===-1)return;let pe=E[J];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<E.length;Y++){let J=T[Y];J!==null&&(T[Y]=null,E[Y].disconnect(J))}U=null,O=null,m.reset();for(let Y in f)delete f[Y];e.setRenderTarget(b),p=null,d=null,u=null,r=null,S=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",W),r.addEventListener("inputsourceschange",k),w.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Le=null,fe=null;w.depth&&(fe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=w.stencil?Li:zn,Le=w.stencil?Qr:Cn);let Xe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Xe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new an(d.textureWidth,d.textureHeight,{format:_n,type:cn,depthTexture:new Ti(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new an(p.framebufferWidth,p.framebufferHeight,{format:_n,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Y){for(let J=0;J<Y.removed.length;J++){let pe=Y.removed[J],Le=T.indexOf(pe);Le>=0&&(T[Le]=null,E[Le].disconnect(pe))}for(let J=0;J<Y.added.length;J++){let pe=Y.added[J],Le=T.indexOf(pe);if(Le===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=T.length){T.push(pe),Le=Xe;break}else if(T[Xe]===null){T[Xe]=pe,Le=Xe;break}if(Le===-1)break}let fe=E[Le];fe&&fe.connect(pe)}}let Z=new z,ce=new z;function ne(Y,J,pe){Z.setFromMatrixPosition(J.matrixWorld),ce.setFromMatrixPosition(pe.matrixWorld);let Le=Z.distanceTo(ce),fe=J.projectionMatrix.elements,Xe=pe.projectionMatrix.elements,ut=fe[14]/(fe[10]-1),Ne=fe[14]/(fe[10]+1),Me=(fe[9]+1)/fe[5],be=(fe[9]-1)/fe[5],we=(fe[8]-1)/fe[0],Ge=(Xe[8]+1)/Xe[0],I=ut*we,$e=ut*Ge,ze=Le/(-we+Ge),qe=ze*-we;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(qe),Y.translateZ(ze),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),fe[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let le=ut+ze,A=Ne+ze,v=I-qe,D=$e+(Le-qe),q=Me*Ne/A*le,$=be*Ne/A*le;Y.projectionMatrix.makePerspective(v,D,q,$,le,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function he(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,pe=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),F.near=M.near=x.near=J,F.far=M.far=x.far=pe,(U!==F.near||O!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),U=F.near,O=F.far),F.layers.mask=Y.layers.mask|6,x.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;let Le=Y.parent,fe=F.cameras;he(F,Le);for(let Xe=0;Xe<fe.length;Xe++)he(fe[Xe],Le);fe.length===2?ne(F,x,M):F.projectionMatrix.copy(x.projectionMatrix),Ve(Y,F,Le)};function Ve(Y,J,pe){pe===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return f[Y]};let De=null;function nt(Y,J){if(h=J.getViewerPose(c||a),g=J,h!==null){let pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Le=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let Ne=0;Ne<pe.length;Ne++){let Me=pe[Ne],be=null;if(p!==null)be=p.getViewport(Me);else{let Ge=u.getViewSubImage(d,Me);be=Ge.viewport,Ne===0&&(e.setRenderTargetTextures(S,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(S))}let we=P[Ne];we===void 0&&(we=new Yt,we.layers.enable(Ne),we.viewport=new _t,P[Ne]=we),we.matrix.fromArray(Me.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Me.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(be.x,be.y,be.width,be.height),Ne===0&&(F.matrix.copy(we.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(we)}let fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let Ne=u.getDepthInformation(pe[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,r.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let Ne=0;Ne<pe.length;Ne++){let Me=pe[Ne].camera;if(Me){let be=f[Me];be||(be=new na,f[Me]=be);let we=u.getCameraImage(Me);be.sourceTexture=we}}}}for(let pe=0;pe<E.length;pe++){let Le=T[pe],fe=E[pe];Le!==null&&fe!==void 0&&fe.update(Le,J,c||a)}De&&De(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let Je=new Xg;Je.setAnimationLoop(nt),this.setAnimationLoop=function(Y){De=Y},this.dispose=function(){}}},dr=new sr,Bb=new yt;function zb(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Lu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,w,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=e.get(f),b=w.envMap,S=w.envMapRotation;b&&(m.envMap.value=b,dr.copy(S),dr.x*=-1,dr.y*=-1,dr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(dr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kb(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let S=b.program;i.uniformBlockBinding(w,S)}function c(w,b){let S=r[w.id];S===void 0&&(g(w),S=h(w),r[w.id]=S,w.addEventListener("dispose",m));let E=b.program;i.updateUBOMapping(w,E);let T=e.render.frame;s[w.id]!==T&&(d(w),s[w.id]=T)}function h(w){let b=u();w.__bindingPointIndex=b;let S=n.createBuffer(),E=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let b=r[w.id],S=w.uniforms,E=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,R=S.length;T<R;T++){let C=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,M=C.length;x<M;x++){let P=C[x];if(p(P,T,x,E)===!0){let F=P.__offset,U=Array.isArray(P.value)?P.value:[P.value],O=0;for(let X=0;X<U.length;X++){let W=U[X],k=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+O,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,O),O+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,S,E){let T=w.value,R=b+"_"+S;if(E[R]===void 0)return typeof T=="number"||typeof T=="boolean"?E[R]=T:E[R]=T.clone(),!0;{let C=E[R];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return E[R]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(w){let b=w.uniforms,S=0,E=16;for(let R=0,C=b.length;R<C;R++){let x=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,P=x.length;M<P;M++){let F=x[M],U=Array.isArray(F.value)?F.value:[F.value];for(let O=0,X=U.length;O<X;O++){let W=U[O],k=_(W),Z=S%E,ce=Z%k.boundary,ne=Z+ce;S+=ce,ne!==0&&E-ne<k.storage&&(S+=E-ne),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=k.storage}}}let T=S%E;return T>0&&(S+=E-T),w.__size=S,w.__cache={},this}function _(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ue("WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(let w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}var Vb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function Hb(){return Gn===null&&(Gn=new Ko(Vb,16,16,cr,Hn),Gn.name="DFG_LUT",Gn.minFilter=Pt,Gn.magFilter=Pt,Gn.wrapS=Bn,Gn.wrapT=Bn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var ga=class{constructor(e={}){let{canvas:t=xg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=cn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=p,m=new Set([Rl,Cl,Tl]),f=new Set([cn,Cn,Kr,Qr,El,Al]),w=new Uint32Array(4),b=new Int32Array(4),S=null,E=null,T=[],R=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,M=!1;this._outputColorSpace=sn;let P=0,F=0,U=null,O=-1,X=null,W=new _t,k=new _t,Z=null,ce=new tt(0),ne=0,he=t.width,Ve=t.height,De=1,nt=null,Je=null,Y=new _t(0,0,he,Ve),J=new _t(0,0,he,Ve),pe=!1,Le=new ea,fe=!1,Xe=!1,ut=new yt,Ne=new z,Me=new _t,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ge(){return U===null?De:1}let I=i;function $e(y,N){return t.getContext(y,N)}try{let y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",st,!1),I===null){let N="webgl2";if(I=$e(N,y),I===null)throw $e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Pe("WebGLRenderer: "+y.message),y}let ze,qe,le,A,v,D,q,$,G,ge,ee,ve,Te,K,ie,ye,Se,se,We,L,de,te,me,Q;function j(){ze=new jM(I),ze.init(),te=new Fb(I,ze),qe=new kM(I,ze,e,te),le=new Lb(I,ze),qe.reversedDepthBuffer&&d&&le.buffers.depth.setReversed(!0),A=new KM(I),v=new _b,D=new Nb(I,ze,le,v,qe,te,A),q=new HM(x),$=new $M(x),G=new nx(I),me=new BM(I,G),ge=new ZM(I,G,A,me),ee=new eS(I,ge,G,A),We=new QM(I,qe,D),ye=new VM(v),ve=new vb(x,q,$,ze,qe,me,ye),Te=new zb(x,v),K=new yb,ie=new Ab(ze),se=new OM(x,q,$,le,ee,g,l),Se=new Pb(x,ee,qe),Q=new kb(I,A,qe,le),L=new zM(I,ze,A),de=new JM(I,ze,A),A.programs=ve.programs,x.capabilities=qe,x.extensions=ze,x.properties=v,x.renderLists=K,x.shadowMap=Se,x.state=le,x.info=A}j(),_!==cn&&(C=new nS(_,t.width,t.height,r,s));let re=new Ju(x,I);this.xr=re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let y=ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(y){y!==void 0&&(De=y,this.setSize(he,Ve,!1))},this.getSize=function(y){return y.set(he,Ve)},this.setSize=function(y,N,H=!0){if(re.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}he=y,Ve=N,t.width=Math.floor(y*De),t.height=Math.floor(N*De),H===!0&&(t.style.width=y+"px",t.style.height=N+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(he*De,Ve*De).floor()},this.setDrawingBufferSize=function(y,N,H){he=y,Ve=N,De=H,t.width=Math.floor(y*H),t.height=Math.floor(N*H),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(_===cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(W)},this.getViewport=function(y){return y.copy(Y)},this.setViewport=function(y,N,H,V){y.isVector4?Y.set(y.x,y.y,y.z,y.w):Y.set(y,N,H,V),le.viewport(W.copy(Y).multiplyScalar(De).round())},this.getScissor=function(y){return y.copy(J)},this.setScissor=function(y,N,H,V){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,N,H,V),le.scissor(k.copy(J).multiplyScalar(De).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(y){le.setScissorTest(pe=y)},this.setOpaqueSort=function(y){nt=y},this.setTransparentSort=function(y){Je=y},this.getClearColor=function(y){return y.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,H=!0){let V=0;if(y){let B=!1;if(U!==null){let ae=U.texture.format;B=m.has(ae)}if(B){let ae=U.texture.type,_e=f.has(ae),ue=se.getClearColor(),xe=se.getClearAlpha(),Ee=ue.r,Ie=ue.g,Ce=ue.b;_e?(w[0]=Ee,w[1]=Ie,w[2]=Ce,w[3]=xe,I.clearBufferuiv(I.COLOR,0,w)):(b[0]=Ee,b[1]=Ie,b[2]=Ce,b[3]=xe,I.clearBufferiv(I.COLOR,0,b))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",st,!1),se.dispose(),K.dispose(),ie.dispose(),v.dispose(),q.dispose(),$.dispose(),ee.dispose(),me.dispose(),Q.dispose(),ve.dispose(),re.dispose(),re.removeEventListener("sessionstart",ed),re.removeEventListener("sessionend",td),Ui.stop()};function Oe(y){y.preventDefault(),Du("WebGLRenderer: Context Lost."),M=!0}function ct(){Du("WebGLRenderer: Context Restored."),M=!1;let y=A.autoReset,N=Se.enabled,H=Se.autoUpdate,V=Se.needsUpdate,B=Se.type;j(),A.autoReset=y,Se.enabled=N,Se.autoUpdate=H,Se.needsUpdate=V,Se.type=B}function st(y){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function In(y){let N=y.target;N.removeEventListener("dispose",In),Xn(N)}function Xn(y){Zg(y),v.remove(y)}function Zg(y){let N=v.get(y).programs;N!==void 0&&(N.forEach(function(H){ve.releaseProgram(H)}),y.isShaderMaterial&&ve.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,H,V,B,ae){N===null&&(N=be);let _e=B.isMesh&&B.matrixWorld.determinant()<0,ue=Kg(y,N,H,V,B);le.setMaterial(V,_e);let xe=H.index,Ee=1;if(V.wireframe===!0){if(xe=ge.getWireframeAttribute(H),xe===void 0)return;Ee=2}let Ie=H.drawRange,Ce=H.attributes.position,Ye=Ie.start*Ee,ot=(Ie.start+Ie.count)*Ee;ae!==null&&(Ye=Math.max(Ye,ae.start*Ee),ot=Math.min(ot,(ae.start+ae.count)*Ee)),xe!==null?(Ye=Math.max(Ye,0),ot=Math.min(ot,xe.count)):Ce!=null&&(Ye=Math.max(Ye,0),ot=Math.min(ot,Ce.count));let mt=ot-Ye;if(mt<0||mt===1/0)return;me.setup(B,V,ue,H,xe);let gt,lt=L;if(xe!==null&&(gt=G.get(xe),lt=de,lt.setIndex(gt)),B.isMesh)V.wireframe===!0?(le.setLineWidth(V.wireframeLinewidth*Ge()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(B.isLine){let Re=V.linewidth;Re===void 0&&(Re=1),le.setLineWidth(Re*Ge()),B.isLineSegments?lt.setMode(I.LINES):B.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else B.isPoints?lt.setMode(I.POINTS):B.isSprite&&lt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)qr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Re=B._multiDrawStarts,at=B._multiDrawCounts,et=B._multiDrawCount,jt=xe?G.get(xe).bytesPerElement:1,mr=v.get(V).currentProgram.getUniforms();for(let Zt=0;Zt<et;Zt++)mr.setValue(I,"_gl_DrawID",Zt),lt.render(Re[Zt]/jt,at[Zt])}else if(B.isInstancedMesh)lt.renderInstances(Ye,mt,B.count);else if(H.isInstancedBufferGeometry){let Re=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,at=Math.min(H.instanceCount,Re);lt.renderInstances(Ye,mt,at)}else lt.render(Ye,mt)};function Qu(y,N,H){y.transparent===!0&&y.side===kn&&y.forceSinglePass===!1?(y.side=Ht,y.needsUpdate=!0,_a(y,N,H),y.side=si,y.needsUpdate=!0,_a(y,N,H),y.side=kn):_a(y,N,H)}this.compile=function(y,N,H=null){H===null&&(H=y),E=ie.get(H),E.init(N),R.push(E),H.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),y!==H&&y.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights();let V=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ae=B.material;if(ae)if(Array.isArray(ae))for(let _e=0;_e<ae.length;_e++){let ue=ae[_e];Qu(ue,H,B),V.add(ue)}else Qu(ae,H,B),V.add(ae)}),E=R.pop(),V},this.compileAsync=function(y,N,H=null){let V=this.compile(y,N,H);return new Promise(B=>{function ae(){if(V.forEach(function(_e){v.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){B(y);return}setTimeout(ae,10)}ze.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let vc=null;function Jg(y){vc&&vc(y)}function ed(){Ui.stop()}function td(){Ui.start()}let Ui=new Xg;Ui.setAnimationLoop(Jg),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(y){vc=y,re.setAnimationLoop(y),y===null?Ui.stop():Ui.start()},re.addEventListener("sessionstart",ed),re.addEventListener("sessionend",td),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;let H=re.enabled===!0&&re.isPresenting===!0,V=C!==null&&(U===null||H)&&C.begin(x,U);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,N,U),E=ie.get(y,R.length),E.init(N),R.push(E),ut.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Le.setFromProjectionMatrix(ut,An,N.reversedDepth),Xe=this.localClippingEnabled,fe=ye.init(this.clippingPlanes,Xe),S=K.get(y,T.length),S.init(),T.push(S),re.enabled===!0&&re.isPresenting===!0){let _e=x.xr.getDepthSensingMesh();_e!==null&&_c(_e,N,-1/0,x.sortObjects)}_c(y,N,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(nt,Je),we=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,we&&se.addToRenderList(S,y),this.info.render.frame++,fe===!0&&ye.beginShadows();let B=E.state.shadowsArray;if(Se.render(B,y,N),fe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&C.hasRenderPass())===!1){let _e=S.opaque,ue=S.transmissive;if(E.setupLights(),N.isArrayCamera){let xe=N.cameras;if(ue.length>0)for(let Ee=0,Ie=xe.length;Ee<Ie;Ee++){let Ce=xe[Ee];id(_e,ue,y,Ce)}we&&se.render(y);for(let Ee=0,Ie=xe.length;Ee<Ie;Ee++){let Ce=xe[Ee];nd(S,y,Ce,Ce.viewport)}}else ue.length>0&&id(_e,ue,y,N),we&&se.render(y),nd(S,y,N)}U!==null&&F===0&&(D.updateMultisampleRenderTarget(U),D.updateRenderTargetMipmap(U)),V&&C.end(x),y.isScene===!0&&y.onAfterRender(x,y,N),me.resetDefaultState(),O=-1,X=null,R.pop(),R.length>0?(E=R[R.length-1],fe===!0&&ye.setGlobalState(x.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function _c(y,N,H,V){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Le.intersectsSprite(y)){V&&Me.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ut);let _e=ee.update(y),ue=y.material;ue.visible&&S.push(y,_e,ue,H,Me.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Le.intersectsObject(y))){let _e=ee.update(y),ue=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Me.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Me.copy(_e.boundingSphere.center)),Me.applyMatrix4(y.matrixWorld).applyMatrix4(ut)),Array.isArray(ue)){let xe=_e.groups;for(let Ee=0,Ie=xe.length;Ee<Ie;Ee++){let Ce=xe[Ee],Ye=ue[Ce.materialIndex];Ye&&Ye.visible&&S.push(y,_e,Ye,H,Me.z,Ce)}}else ue.visible&&S.push(y,_e,ue,H,Me.z,null)}}let ae=y.children;for(let _e=0,ue=ae.length;_e<ue;_e++)_c(ae[_e],N,H,V)}function nd(y,N,H,V){let{opaque:B,transmissive:ae,transparent:_e}=y;E.setupLightsView(H),fe===!0&&ye.setGlobalState(x.clippingPlanes,H),V&&le.viewport(W.copy(V)),B.length>0&&va(B,N,H),ae.length>0&&va(ae,N,H),_e.length>0&&va(_e,N,H),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function id(y,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Ye=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new an(1,1,{generateMipmaps:!0,type:Ye?Hn:cn,minFilter:Di,samples:qe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let ae=E.state.transmissionRenderTarget[V.id],_e=V.viewport||W;ae.setSize(_e.z*x.transmissionResolutionScale,_e.w*x.transmissionResolutionScale);let ue=x.getRenderTarget(),xe=x.getActiveCubeFace(),Ee=x.getActiveMipmapLevel();x.setRenderTarget(ae),x.getClearColor(ce),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear(),we&&se.render(H);let Ie=x.toneMapping;x.toneMapping=Tn;let Ce=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),fe===!0&&ye.setGlobalState(x.clippingPlanes,V),va(y,H,V),D.updateMultisampleRenderTarget(ae),D.updateRenderTargetMipmap(ae),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let ot=0,mt=N.length;ot<mt;ot++){let gt=N[ot],{object:lt,geometry:Re,material:at,group:et}=gt;if(at.side===kn&&lt.layers.test(V.layers)){let jt=at.side;at.side=Ht,at.needsUpdate=!0,rd(lt,H,V,Re,at,et),at.side=jt,at.needsUpdate=!0,Ye=!0}}Ye===!0&&(D.updateMultisampleRenderTarget(ae),D.updateRenderTargetMipmap(ae))}x.setRenderTarget(ue,xe,Ee),x.setClearColor(ce,ne),Ce!==void 0&&(V.viewport=Ce),x.toneMapping=Ie}function va(y,N,H){let V=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ae=y.length;B<ae;B++){let _e=y[B],{object:ue,geometry:xe,group:Ee}=_e,Ie=_e.material;Ie.allowOverride===!0&&V!==null&&(Ie=V),ue.layers.test(H.layers)&&rd(ue,N,H,xe,Ie,Ee)}}function rd(y,N,H,V,B,ae){y.onBeforeRender(x,N,H,V,B,ae),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(x,N,H,V,y,ae),B.transparent===!0&&B.side===kn&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,x.renderBufferDirect(H,N,V,B,y,ae),B.side=si,B.needsUpdate=!0,x.renderBufferDirect(H,N,V,B,y,ae),B.side=kn):x.renderBufferDirect(H,N,V,B,y,ae),y.onAfterRender(x,N,H,V,B,ae)}function _a(y,N,H){N.isScene!==!0&&(N=be);let V=v.get(y),B=E.state.lights,ae=E.state.shadowsArray,_e=B.state.version,ue=ve.getParameters(y,B.state,ae,N,H),xe=ve.getProgramCacheKey(ue),Ee=V.programs;V.environment=y.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(y.isMeshStandardMaterial?$:q).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ee===void 0&&(y.addEventListener("dispose",In),Ee=new Map,V.programs=Ee);let Ie=Ee.get(xe);if(Ie!==void 0){if(V.currentProgram===Ie&&V.lightsStateVersion===_e)return ad(y,ue),Ie}else ue.uniforms=ve.getUniforms(y),y.onBeforeCompile(ue,x),Ie=ve.acquireProgram(ue,xe),Ee.set(xe,Ie),V.uniforms=ue.uniforms;let Ce=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=ye.uniform),ad(y,ue),V.needsLights=e0(y),V.lightsStateVersion=_e,V.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Ie,V.uniformsList=null,Ie}function sd(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=ts.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function ad(y,N){let H=v.get(y);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Kg(y,N,H,V,B){N.isScene!==!0&&(N=be),D.resetTextureUnits();let ae=N.fog,_e=V.isMeshStandardMaterial?N.environment:null,ue=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ir,xe=(V.isMeshStandardMaterial?$:q).get(V.envMap||_e),Ee=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!H.morphAttributes.position,Ye=!!H.morphAttributes.normal,ot=!!H.morphAttributes.color,mt=Tn;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(mt=x.toneMapping);let gt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,lt=gt!==void 0?gt.length:0,Re=v.get(V),at=E.state.lights;if(fe===!0&&(Xe===!0||y!==X)){let Bt=y===X&&V.id===O;ye.setState(V,y,Bt)}let et=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==at.state.version||Re.outputColorSpace!==ue||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==xe||V.fog===!0&&Re.fog!==ae||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ye.numPlanes||Re.numIntersection!==ye.numIntersection)||Re.vertexAlphas!==Ee||Re.vertexTangents!==Ie||Re.morphTargets!==Ce||Re.morphNormals!==Ye||Re.morphColors!==ot||Re.toneMapping!==mt||Re.morphTargetsCount!==lt)&&(et=!0):(et=!0,Re.__version=V.version);let jt=Re.currentProgram;et===!0&&(jt=_a(V,N,B));let mr=!1,Zt=!1,is=!1,ht=jt.getUniforms(),Gt=Re.uniforms;if(le.useProgram(jt.program)&&(mr=!0,Zt=!0,is=!0),V.id!==O&&(O=V.id,Zt=!0),mr||X!==y){le.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(I,"projectionMatrix",y.projectionMatrix),ht.setValue(I,"viewMatrix",y.matrixWorldInverse);let Wt=ht.map.cameraPosition;Wt!==void 0&&Wt.setValue(I,Ne.setFromMatrixPosition(y.matrixWorld)),qe.logarithmicDepthBuffer&&ht.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),X!==y&&(X=y,Zt=!0,is=!0)}if(Re.needsLights&&(at.state.directionalShadowMap.length>0&&ht.setValue(I,"directionalShadowMap",at.state.directionalShadowMap,D),at.state.spotShadowMap.length>0&&ht.setValue(I,"spotShadowMap",at.state.spotShadowMap,D),at.state.pointShadowMap.length>0&&ht.setValue(I,"pointShadowMap",at.state.pointShadowMap,D)),B.isSkinnedMesh){ht.setOptional(I,B,"bindMatrix"),ht.setOptional(I,B,"bindMatrixInverse");let Bt=B.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ht.setValue(I,"boneTexture",Bt.boneTexture,D))}B.isBatchedMesh&&(ht.setOptional(I,B,"batchingTexture"),ht.setValue(I,"batchingTexture",B._matricesTexture,D),ht.setOptional(I,B,"batchingIdTexture"),ht.setValue(I,"batchingIdTexture",B._indirectTexture,D),ht.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&ht.setValue(I,"batchingColorTexture",B._colorsTexture,D));let hn=H.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&We.update(B,H,jt),(Zt||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,ht.setValue(I,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Gt.envMap.value=xe,Gt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Gt.envMapIntensity.value=N.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=Hb()),Zt&&(ht.setValue(I,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Qg(Gt,is),ae&&V.fog===!0&&Te.refreshFogUniforms(Gt,ae),Te.refreshMaterialUniforms(Gt,V,De,Ve,E.state.transmissionRenderTarget[y.id]),ts.upload(I,sd(Re),Gt,D)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ts.upload(I,sd(Re),Gt,D),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(I,"center",B.center),ht.setValue(I,"modelViewMatrix",B.modelViewMatrix),ht.setValue(I,"normalMatrix",B.normalMatrix),ht.setValue(I,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Bt=V.uniformsGroups;for(let Wt=0,xc=Bt.length;Wt<xc;Wt++){let Oi=Bt[Wt];Q.update(Oi,jt),Q.bind(Oi,jt)}}return jt}function Qg(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function e0(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,N,H){let V=v.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),v.get(y.texture).__webglTexture=N,v.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let H=v.get(y);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};let t0=I.createFramebuffer();this.setRenderTarget=function(y,N=0,H=0){U=y,P=N,F=H;let V=null,B=!1,ae=!1;if(y){let ue=v.get(y);if(ue.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(I.FRAMEBUFFER,ue.__webglFramebuffer),W.copy(y.viewport),k.copy(y.scissor),Z=y.scissorTest,le.viewport(W),le.scissor(k),le.setScissorTest(Z),O=-1;return}else if(ue.__webglFramebuffer===void 0)D.setupRenderTarget(y);else if(ue.__hasExternalTextures)D.rebindTextures(y,v.get(y.texture).__webglTexture,v.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ie=y.depthTexture;if(ue.__boundDepthTexture!==Ie){if(Ie!==null&&v.has(Ie)&&(y.width!==Ie.image.width||y.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(y)}}let xe=y.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ae=!0);let Ee=v.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ee[N])?V=Ee[N][H]:V=Ee[N],B=!0):y.samples>0&&D.useMultisampledRTT(y)===!1?V=v.get(y).__webglMultisampledFramebuffer:Array.isArray(Ee)?V=Ee[H]:V=Ee,W.copy(y.viewport),k.copy(y.scissor),Z=y.scissorTest}else W.copy(Y).multiplyScalar(De).floor(),k.copy(J).multiplyScalar(De).floor(),Z=pe;if(H!==0&&(V=t0),le.bindFramebuffer(I.FRAMEBUFFER,V)&&le.drawBuffers(y,V),le.viewport(W),le.scissor(k),le.setScissorTest(Z),B){let ue=v.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,H)}else if(ae){let ue=N;for(let xe=0;xe<y.textures.length;xe++){let Ee=v.get(y.textures[xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+xe,Ee.__webglTexture,H,ue)}}else if(y!==null&&H!==0){let ue=v.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ue.__webglTexture,H)}O=-1},this.readRenderTargetPixels=function(y,N,H,V,B,ae,_e,ue=0){if(!(y&&y.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=v.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){le.bindFramebuffer(I.FRAMEBUFFER,xe);try{let Ee=y.textures[ue],Ie=Ee.format,Ce=Ee.type;if(!qe.textureFormatReadable(Ie)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ce)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-V&&H>=0&&H<=y.height-B&&(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue),I.readPixels(N,H,V,B,te.convert(Ie),te.convert(Ce),ae))}finally{let Ee=U!==null?v.get(U).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(y,N,H,V,B,ae,_e,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=v.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe)if(N>=0&&N<=y.width-V&&H>=0&&H<=y.height-B){le.bindFramebuffer(I.FRAMEBUFFER,xe);let Ee=y.textures[ue],Ie=Ee.format,Ce=Ee.type;if(!qe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ye),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue),I.readPixels(N,H,V,B,te.convert(Ie),te.convert(Ce),0);let ot=U!==null?v.get(U).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,ot);let mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yg(I,mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ye),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae),I.deleteBuffer(Ye),I.deleteSync(mt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,H=0){let V=Math.pow(2,-H),B=Math.floor(y.image.width*V),ae=Math.floor(y.image.height*V),_e=N!==null?N.x:0,ue=N!==null?N.y:0;D.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,_e,ue,B,ae),le.unbindTexture()};let n0=I.createFramebuffer(),i0=I.createFramebuffer();this.copyTextureToTexture=function(y,N,H=null,V=null,B=0,ae=null){ae===null&&(B!==0?(qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=B,B=0):ae=0);let _e,ue,xe,Ee,Ie,Ce,Ye,ot,mt,gt=y.isCompressedTexture?y.mipmaps[ae]:y.image;if(H!==null)_e=H.max.x-H.min.x,ue=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,Ie=H.min.y,Ce=H.isBox3?H.min.z:0;else{let hn=Math.pow(2,-B);_e=Math.floor(gt.width*hn),ue=Math.floor(gt.height*hn),y.isDataArrayTexture?xe=gt.depth:y.isData3DTexture?xe=Math.floor(gt.depth*hn):xe=1,Ee=0,Ie=0,Ce=0}V!==null?(Ye=V.x,ot=V.y,mt=V.z):(Ye=0,ot=0,mt=0);let lt=te.convert(N.format),Re=te.convert(N.type),at;N.isData3DTexture?(D.setTexture3D(N,0),at=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),at=I.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),at=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let et=I.getParameter(I.UNPACK_ROW_LENGTH),jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),mr=I.getParameter(I.UNPACK_SKIP_PIXELS),Zt=I.getParameter(I.UNPACK_SKIP_ROWS),is=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce);let ht=y.isDataArrayTexture||y.isData3DTexture,Gt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let hn=v.get(y),Bt=v.get(N),Wt=v.get(hn.__renderTarget),xc=v.get(Bt.__renderTarget);le.bindFramebuffer(I.READ_FRAMEBUFFER,Wt.__webglFramebuffer),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,xc.__webglFramebuffer);for(let Oi=0;Oi<xe;Oi++)ht&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(y).__webglTexture,B,Ce+Oi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(N).__webglTexture,ae,mt+Oi)),I.blitFramebuffer(Ee,Ie,_e,ue,Ye,ot,_e,ue,I.DEPTH_BUFFER_BIT,I.NEAREST);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||v.has(y)){let hn=v.get(y),Bt=v.get(N);le.bindFramebuffer(I.READ_FRAMEBUFFER,n0),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,i0);for(let Wt=0;Wt<xe;Wt++)ht?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,B,Ce+Wt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,B),Gt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,ae,mt+Wt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,ae),B!==0?I.blitFramebuffer(Ee,Ie,_e,ue,Ye,ot,_e,ue,I.COLOR_BUFFER_BIT,I.NEAREST):Gt?I.copyTexSubImage3D(at,ae,Ye,ot,mt+Wt,Ee,Ie,_e,ue):I.copyTexSubImage2D(at,ae,Ye,ot,Ee,Ie,_e,ue);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Gt?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(at,ae,Ye,ot,mt,_e,ue,xe,lt,Re,gt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(at,ae,Ye,ot,mt,_e,ue,xe,lt,gt.data):I.texSubImage3D(at,ae,Ye,ot,mt,_e,ue,xe,lt,Re,gt):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ae,Ye,ot,_e,ue,lt,Re,gt.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ae,Ye,ot,gt.width,gt.height,lt,gt.data):I.texSubImage2D(I.TEXTURE_2D,ae,Ye,ot,_e,ue,lt,Re,gt);I.pixelStorei(I.UNPACK_ROW_LENGTH,et),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,mr),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,is),ae===0&&N.generateMipmaps&&I.generateMipmap(at),le.unbindTexture()},this.initRenderTarget=function(y){v.get(y).__webglFramebuffer===void 0&&D.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?D.setTextureCube(y,0):y.isData3DTexture?D.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?D.setTexture2DArray(y,0):D.setTexture2D(y,0),le.unbindTexture()},this.resetState=function(){P=0,F=0,U=null,le.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Wb=["glCanvas"],Xb=["vigCanvas"],pr=0,St=1,Dt=2,Ku=[[.831,.627,.29],[.788,.529,.231],[.859,.58,.263],[.91,.663,.31],[.722,.478,.204],[.941,.745,.416],[.659,.431,.176],[.859,.635,.333],[.769,.533,.224],[.878,.678,.369]],qb=`
  // Per-particle attributes (set once at init, read-only on GPU)
  attribute float aBaseX;
  attribute float aBaseY;
  attribute float aBaseOpacity;
  attribute float aSize;
  attribute float aLayer;       // 0=FAR, 1=MID, 2=NEAR
  attribute float aDepth;       // 0..1 camera depth
  attribute float aFlickerSpeed;
  attribute float aFlickerPhase;
  attribute float aColorIndex;
  attribute float aHash;        // deterministic hash for spread

  // Dynamic per-particle attributes (updated from JS each frame)
  attribute float aPosX;
  attribute float aPosY;
  attribute float aOpacity;

  // Uniforms
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uDpr;

  // Varyings to fragment
  varying float vOpacity;
  varying float vDepth;
  varying float vColorIndex;
  varying float vSize;

  void main() {
    // Convert pixel coords to NDC (-1..1)
    float ndcX = (aPosX / uResolution.x) * 2.0 - 1.0;
    float ndcY = 1.0 - (aPosY / uResolution.y) * 2.0;

    gl_Position = vec4(ndcX, ndcY, 0.0, 1.0);

    // Point size in device pixels \u2014 layer-based DOF sizing
    float basePx = aSize;
    float dofMul;
    if (aDepth > 0.65) {
      dofMul = 2.8; // NEAR bokeh
    } else if (aDepth > 0.25) {
      dofMul = 2.2; // MID focused
    } else {
      dofMul = 2.0; // FAR sharp
    }

    // Bottom blur: particles in bottom 20% grow larger
    float bottomRatio = aPosY / uResolution.y;
    float bottomBlur = bottomRatio > 0.80 ? (bottomRatio - 0.80) / 0.20 : 0.0;
    dofMul *= (1.0 + bottomBlur * 1.2);

    gl_PointSize = max(1.0, basePx * dofMul * uDpr);

    // Pass to fragment
    vOpacity = aOpacity;
    vDepth = aDepth;
    vColorIndex = aColorIndex;
    vSize = aSize;
  }
`,Yb=`
  precision mediump float;

  varying float vOpacity;
  varying float vDepth;
  varying float vColorIndex;
  varying float vSize;

  uniform vec3 uPalette[10];

  void main() {
    if (vOpacity < 0.003) discard;

    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv) * 2.0; // 0 at center, 1 at edge

    // DOF-based alpha profile
    float alpha;
    if (vDepth > 0.65) {
      // NEAR: very soft bokeh glow
      float inner = smoothstep(0.0, 0.18, dist);
      float outer = 1.0 - smoothstep(0.18, 1.0, dist);
      alpha = mix(1.0, 0.0, smoothstep(0.0, 1.0, dist * dist));
    } else if (vDepth > 0.25) {
      // MID: crisp with tight soft edge
      alpha = 1.0 - smoothstep(0.55, 1.0, dist);
    } else {
      // FAR: solid dot, sharp
      alpha = 1.0 - smoothstep(0.65, 1.0, dist);
    }

    if (alpha < 0.003) discard;

    // Color from palette
    int ci = int(vColorIndex);
    vec3 color = uPalette[0];
    // Manual palette lookup (WebGL1 compat \u2014 no dynamic indexing)
    if (ci == 1) color = uPalette[1];
    else if (ci == 2) color = uPalette[2];
    else if (ci == 3) color = uPalette[3];
    else if (ci == 4) color = uPalette[4];
    else if (ci == 5) color = uPalette[5];
    else if (ci == 6) color = uPalette[6];
    else if (ci == 7) color = uPalette[7];
    else if (ci == 8) color = uPalette[8];
    else if (ci == 9) color = uPalette[9];

    // Premultiplied alpha output (matches Canvas2D SrcOver compositing)
    float a = alpha * vOpacity;
    gl_FragColor = vec4(color * a, a);
  }
`,$b=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,jb=`
  precision mediump float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform float uScrollField;
  uniform vec2 uCursor;
  uniform float uCursorStrength;

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;

    // -- Main radial vignette (center-weighted, elliptical) --
    vec2 center = vec2(0.5, 0.42);
    vec2 diff = uv - center;
    diff.x *= aspect;
    float vigR = length(diff) / (max(aspect, 1.0) * 0.85);

    float mainVig = smoothstep(0.18, 1.0, vigR);
    mainVig = mainVig * mainVig * 0.94; // max darkness

    // -- Bottom gradient --
    float botVig = smoothstep(0.55, 1.0, uv.y) * 0.65;

    // -- Corner darkening --
    float tlDist = length(uv * vec2(aspect, 1.0)) / (max(aspect, 1.0) * 0.35);
    float tlVig = (1.0 - smoothstep(0.0, 1.0, tlDist)) * 0.70;

    float blDist = length((uv - vec2(0.0, 1.0)) * vec2(aspect, 1.0)) / (max(aspect, 1.0) * 0.30);
    float blVig = (1.0 - smoothstep(0.0, 1.0, blDist)) * 0.60;

    float brDist = length((uv - vec2(1.0, 1.0)) * vec2(aspect, 1.0)) / (max(aspect, 1.0) * 0.30);
    float brVig = (1.0 - smoothstep(0.0, 1.0, brDist)) * 0.56;

    // -- Left edge --
    float leVig = (1.0 - smoothstep(0.0, 0.18, uv.x)) * 0.38;

    // Combine base vignette
    float darkness = max(mainVig, max(botVig, max(tlVig, max(blVig, max(brVig, leVig)))));

    // -- Scroll-driven deepening --
    if (uScrollField > 0.05) {
      float darkPhase = uScrollField > 0.65 ? 1.0 : (uScrollField - 0.05) / 0.6;
      float darkenAlpha = darkPhase * 0.75;

      float edgeProg = uScrollField < 0.25 ? 0.0 : (uScrollField > 0.7 ? 1.0 : (uScrollField - 0.25) / 0.45);
      float clearR = edgeProg > 0.0
        ? (0.15 + (1.0 - edgeProg) * 0.25)
        : 0.4 * (1.0 - darkPhase);

      vec2 scrollDiff = uv - vec2(0.5, 0.5);
      scrollDiff.x *= aspect;
      float scrollDist = length(scrollDiff) / (max(aspect, 1.0) * 0.9);

      float scrollVig = smoothstep(clearR, 1.0, scrollDist) * darkenAlpha;
      darkness = max(darkness, scrollVig);

      if (darkPhase > 0.4) {
        float deepAlpha = (darkPhase - 0.4) / 0.6 * 0.5;
        darkness = max(darkness, deepAlpha);
      }
    }

    // -- Cursor brightening (erase vignette around cursor) --
    if (uCursorStrength > 0.005) {
      vec2 cursorUV = uCursor / uResolution;
      cursorUV.y = 1.0 - cursorUV.y;
      vec2 cursorDiff = uv - cursorUV;
      cursorDiff.x *= aspect;
      float cursorR = 220.0 / uResolution.y;
      float cursorDist = length(cursorDiff) / cursorR;
      float cursorMask = (1.0 - smoothstep(0.0, 1.0, cursorDist)) * uCursorStrength * 0.55;
      darkness -= cursorMask;
    }

    darkness = clamp(darkness, 0.0, 1.0);

    gl_FragColor = vec4(0.0, 0.0, 0.0, darkness);
  }
`,mc=class n{canvasRef;vigCanvasRef;lockTouch=!1;scrollProgress=0;isBrowser;renderer;vigRenderer;scene;camera;particleGeometry;particleMaterial;particlePoints;vignetteScene;vignetteCamera;vignetteMaterial;pPosX;pPosY;pVX;pVY;pBaseX;pBaseY;pBirthX;pBirthY;pSize;pOpacity;pBaseOpacity;pFlickerSpeed;pFlickerPhase;pT;pSpeed;pScatter;pRate;pDepth;pLayer;pKind;pColor;pActive;pCount=0;width=0;height=0;dpr=1;time=0;frameCount=0;isMobile=!1;animationId=null;mouseX=-9999;mouseY=-9999;prevMouseX=-9999;prevMouseY=-9999;mouseVx=0;mouseVy=0;mouseActive=!1;mouseLastMoveTime=0;cursorSmoothedX=-9999;cursorSmoothedY=-9999;cursorStrength=0;smoothScrollProgress=0;globalScrollField=0;lastScrollChangeTime=0;prevScrollInput=0;fluidHasEnergy=!1;bp0x=0;bp0y=0;bp1x=0;bp1y=0;bp2x=0;bp2y=0;bp3x=0;bp3y=0;FLUID_N=48;FLUID_DT=.016;FLUID_VISC=25;FLUID_FORCE=.06;FLUID_CURSOR_PX=32;fluidVx;fluidVy;fluidVx0;fluidVy0;boundResize;boundMouseMove;boundMouseLeave;boundTouchMove;boundTouchEnd;get flowCount(){return this.isMobile?60:this.width<768?200:500}get settledCount(){return this.isMobile?800:this.width<768?2200:5500}constructor(e){this.isBrowser=_r(e)}ngOnInit(){this.isBrowser&&(this.isMobile=window.innerWidth<768||"ontouchstart"in window&&window.innerWidth<1024,this.isMobile&&(this.FLUID_N=24),this.dpr=Math.min(window.devicePixelRatio,this.isMobile?1:1.5),this.width=window.innerWidth,this.height=window.innerHeight,this.initThree(),this.initFluidGrid(),this.initParticles(),this.initVignette(),this.boundResize=this.onResize.bind(this),this.boundMouseMove=this.onMouseMove.bind(this),this.boundMouseLeave=this.onMouseLeave.bind(this),this.boundTouchMove=this.onTouchMove.bind(this),this.boundTouchEnd=this.onTouchEnd.bind(this),window.addEventListener("resize",this.boundResize),window.addEventListener("mousemove",this.boundMouseMove),window.addEventListener("mouseleave",this.boundMouseLeave),window.addEventListener("touchmove",this.boundTouchMove,{passive:!1}),window.addEventListener("touchend",this.boundTouchEnd),this.animate(0))}ngOnDestroy(){this.animationId&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.boundResize),window.removeEventListener("mousemove",this.boundMouseMove),window.removeEventListener("mouseleave",this.boundMouseLeave),window.removeEventListener("touchmove",this.boundTouchMove),window.removeEventListener("touchend",this.boundTouchEnd),this.renderer?.dispose(),this.vigRenderer?.dispose(),this.particleGeometry?.dispose(),this.particleMaterial?.dispose(),this.vignetteMaterial?.dispose()}initThree(){let e=this.canvasRef.nativeElement;this.renderer=new ga({canvas:e,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height),this.renderer.autoClear=!1;let t=this.vigCanvasRef.nativeElement;this.vigRenderer=new ga({canvas:t,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"high-performance"}),this.vigRenderer.setPixelRatio(this.dpr),this.vigRenderer.setSize(this.width,this.height),this.scene=new Zr,this.camera=new Ii(-1,1,1,-1,0,1)}initParticles(){let e=this.settledCount+this.flowCount;this.pCount=e,this.pPosX=new Float32Array(e),this.pPosY=new Float32Array(e),this.pVX=new Float32Array(e),this.pVY=new Float32Array(e),this.pBaseX=new Float32Array(e),this.pBaseY=new Float32Array(e),this.pBirthX=new Float32Array(e),this.pBirthY=new Float32Array(e),this.pSize=new Float32Array(e),this.pOpacity=new Float32Array(e),this.pBaseOpacity=new Float32Array(e),this.pFlickerSpeed=new Float32Array(e),this.pFlickerPhase=new Float32Array(e),this.pT=new Float32Array(e),this.pSpeed=new Float32Array(e),this.pScatter=new Float32Array(e),this.pRate=new Float32Array(e),this.pDepth=new Float32Array(e),this.pLayer=new Uint8Array(e),this.pKind=new Uint8Array(e),this.pColor=new Uint8Array(e),this.pActive=new Uint8Array(e),this.cacheBezier();let t=0;for(let i=0;i<this.settledCount;i++,t++)this.initSettledParticle(t);for(let i=0;i<this.flowCount;i++,t++)this.initFlowParticle(t,Math.random());this.buildParticleGeometry()}buildParticleGeometry(){let e=this.pCount;this.particleGeometry=new on;let t=new pt(this.pBaseX,1),i=new pt(this.pBaseY,1),r=new pt(this.pBaseOpacity,1),s=new pt(this.pSize,1),a=new pt(new Float32Array(this.pLayer),1),o=new pt(this.pDepth,1),l=new pt(this.pFlickerSpeed,1),c=new pt(this.pFlickerPhase,1),h=new pt(this.pFlickerPhase.map(w=>w*.15915494),1),u=new Float32Array(e);for(let w=0;w<e;w++)u[w]=this.pColor[w];let d=new pt(u,1);this.particleGeometry.setAttribute("aBaseX",t),this.particleGeometry.setAttribute("aBaseY",i),this.particleGeometry.setAttribute("aBaseOpacity",r),this.particleGeometry.setAttribute("aSize",s),this.particleGeometry.setAttribute("aLayer",a),this.particleGeometry.setAttribute("aDepth",o),this.particleGeometry.setAttribute("aFlickerSpeed",l),this.particleGeometry.setAttribute("aFlickerPhase",c),this.particleGeometry.setAttribute("aColorIndex",d),this.particleGeometry.setAttribute("aHash",h);let p=new It(this.pPosX,1);p.setUsage(ua);let g=new It(this.pPosY,1);g.setUsage(ua);let _=new It(this.pOpacity,1);_.setUsage(ua),this.particleGeometry.setAttribute("aPosX",p),this.particleGeometry.setAttribute("aPosY",g),this.particleGeometry.setAttribute("aOpacity",_);let m=new Float32Array(e*3);this.particleGeometry.setAttribute("position",new pt(m,3));let f=Ku.map(w=>new z(w[0],w[1],w[2]));this.particleMaterial=new Ut({vertexShader:qb,fragmentShader:Yb,uniforms:{uTime:{value:0},uResolution:{value:new Qe(this.width,this.height)},uDpr:{value:this.dpr},uPalette:{value:f}},transparent:!0,depthTest:!1,depthWrite:!1,blending:dl,blendSrc:fl,blendDst:Wr}),this.particlePoints=new ta(this.particleGeometry,this.particleMaterial),this.particlePoints.frustumCulled=!1,this.scene.add(this.particlePoints)}initVignette(){this.vignetteScene=new Zr,this.vignetteCamera=new Ii(-1,1,1,-1,0,1),this.vignetteMaterial=new Ut({vertexShader:$b,fragmentShader:jb,uniforms:{uResolution:{value:new Qe(this.width,this.height)},uScrollField:{value:0},uCursor:{value:new Qe(-9999,-9999)},uCursorStrength:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1});let e=new $t(new ar(2,2),this.vignetteMaterial);e.frustumCulled=!1,this.vignetteScene.add(e)}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.dpr=Math.min(window.devicePixelRatio,this.isMobile?1:1.5),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height),this.vigRenderer.setPixelRatio(this.dpr),this.vigRenderer.setSize(this.width,this.height),this.particleMaterial&&(this.particleMaterial.uniforms.uResolution.value.set(this.width,this.height),this.particleMaterial.uniforms.uDpr.value=this.dpr),this.vignetteMaterial&&this.vignetteMaterial.uniforms.uResolution.value.set(this.width,this.height),this.cacheBezier(),this.fluidVx&&(this.fluidVx.fill(0),this.fluidVy.fill(0),this.fluidVx0.fill(0),this.fluidVy0.fill(0))}onMouseMove(e){this.prevMouseX=this.mouseX,this.prevMouseY=this.mouseY,this.mouseX=e.clientX,this.mouseY=e.clientY,this.mouseActive=!0,this.mouseLastMoveTime=performance.now()}onMouseLeave(){this.mouseActive=!1}onTouchMove(e){this.lockTouch&&e.preventDefault(),e.touches.length>0&&(this.prevMouseX=this.mouseX,this.prevMouseY=this.mouseY,this.mouseX=e.touches[0].clientX,this.mouseY=e.touches[0].clientY,this.mouseActive=!0,this.mouseLastMoveTime=performance.now())}onTouchEnd(){this.mouseActive=!1}cacheBezier(){let e=this.width,t=this.height;this.bp0x=e*1.02,this.bp0y=t*-.03,this.bp1x=e*.82,this.bp1y=t*.28,this.bp2x=e*.62,this.bp2y=t*.65,this.bp3x=e*.55,this.bp3y=t*1.06}flowPosX(e){let t=1-e,i=t*t,r=i*t,s=e*e,a=s*e;return r*this.bp0x+3*i*e*this.bp1x+3*t*s*this.bp2x+a*this.bp3x}flowPosY(e){let t=1-e,i=t*t,r=i*t,s=e*e,a=s*e;return r*this.bp0y+3*i*e*this.bp1y+3*t*s*this.bp2y+a*this.bp3y}flowTangent(e){let t=1-e,i=3*t*t*(this.bp1x-this.bp0x)+6*t*e*(this.bp2x-this.bp1x)+3*e*e*(this.bp3x-this.bp2x),r=3*t*t*(this.bp1y-this.bp0y)+6*t*e*(this.bp2y-this.bp1y)+3*e*e*(this.bp3y-this.bp2y),s=Math.sqrt(i*i+r*r)||1;return{tx:i/s,ty:r/s}}initSettledParticle(e){let t=this.width,i=this.height,r=Math.random()*t,s=r/t,a=4*(s-.5)*(s-.5),o=.78,c=o-a*(o-.48),h=1.08,d=h-a*(h-1.02),g=1-Math.pow(Math.random(),1.8),_=.38*(.3+g*1.7),m=.55,f=.07*(.1+(1-g)*3.9),w=_+m+f,b=Math.random()*w,S;b<_?S=pr:b<_+m?S=St:S=Dt;let E=1-Math.pow(a,.8)*.35,T;if(S===Dt){let W=c+(d-c)*.35;T=i*(W+Math.pow(Math.random(),.6)*(d-W))}else if(S===St){let W=Math.pow(Math.random(),2);T=i*(d-W*(d-c))}else{let W=c-.14,k=Math.pow(Math.random(),1.4);T=i*(d-k*(d-W))}let R=T/i,C=d-c,x=C>.01?(R-c)/C:1,M=x<.35?x/.35:1,P=Math.max(0,(R-.5)*2),F,U;S===pr?(F=.4+Math.random()*.6,U=(.15+Math.random()*.3)*(.55+P*.45)*E*M):S===St?(F=.8+Math.random()*1.6,U=(.3+Math.random()*.45)*(.45+P*.55)*E*M):(F=3+Math.random()*4,U=(.04+Math.random()*.08)*E);let O=S===pr?Math.random()*.3:S===St?.3+Math.random()*.4:.7+Math.random()*.3,X=S===Dt?.15+Math.random()*.3:S===St?.8+Math.random()*2:1.2+Math.random()*2.5;this.pPosX[e]=r,this.pPosY[e]=T,this.pVX[e]=0,this.pVY[e]=0,this.pBaseX[e]=r,this.pBaseY[e]=T,this.pBirthX[e]=r,this.pBirthY[e]=T,this.pSize[e]=F,this.pOpacity[e]=U*Math.random(),this.pBaseOpacity[e]=U,this.pFlickerSpeed[e]=X,this.pFlickerPhase[e]=Math.random()*Math.PI*2,this.pT[e]=0,this.pSpeed[e]=0,this.pScatter[e]=0,this.pRate[e]=0,this.pDepth[e]=O,this.pLayer[e]=S,this.pKind[e]=0,this.pColor[e]=Math.floor(Math.random()*Ku.length),this.pActive[e]=0}initFlowParticle(e,t){let i=this.width,r=this.height,s=t,a=Math.max(.01,Math.min(.99,s)),o=this.flowTangent(a),l=-o.ty,c=o.tx,h=Math.min(i,r),u=.06+a*.55,d=h*u,p=(Math.random()-.5)*2*d,g=this.flowPosX(a)+l*p,_=this.flowPosY(a)+c*p,m=Math.random(),f;m<.45?f=pr:m<.82?f=St:f=Dt;let w;f===Dt?w=1+Math.random()*1.5:f===St?w=.3+Math.random()*1.1:w=.15+Math.random()*.45;let b;f===Dt?b=.03+Math.random()*.07:f===St?b=.2+Math.random()*.4:b=.05+Math.random()*.16;let S;f===Dt?S=2e-5+Math.random()*3e-5:f===St?S=6e-5+Math.random()*1e-4:S=3e-5+Math.random()*6e-5;let E=f===Dt?.3+Math.random()*.5:.8+Math.random()*2,T=f===Dt?.015+Math.random()*.015:.03+Math.random()*.04;this.pPosX[e]=g,this.pPosY[e]=_,this.pVX[e]=0,this.pVY[e]=0,this.pBaseX[e]=g,this.pBaseY[e]=_,this.pBirthX[e]=g,this.pBirthY[e]=_,this.pSize[e]=w,this.pOpacity[e]=b*Math.random(),this.pBaseOpacity[e]=b,this.pFlickerSpeed[e]=E,this.pFlickerPhase[e]=Math.random()*Math.PI*2,this.pT[e]=s,this.pSpeed[e]=S,this.pScatter[e]=p,this.pRate[e]=T,this.pDepth[e]=0,this.pLayer[e]=f,this.pKind[e]=1,this.pColor[e]=Math.floor(Math.random()*Ku.length),this.pActive[e]=0}animate=e=>{this.time=e*.001,this.frameCount++;let t=performance.now();Math.abs(this.scrollProgress-this.prevScrollInput)>.001&&(this.lastScrollChangeTime=t,this.prevScrollInput=this.scrollProgress);let i=t-this.lastScrollChangeTime<200;if(this.isMobile&&i&&(this.frameCount&1)===0){this.animationId=requestAnimationFrame(this.animate);return}let r=this.width,s=this.height,a=this.scrollProgress<this.smoothScrollProgress?.22:.18;this.smoothScrollProgress+=(this.scrollProgress-this.smoothScrollProgress)*a;let o=this.smoothScrollProgress,c=1-(o<.1?0:o>.85?1:(o-.1)/.75),h=1-c*c*c;this.globalScrollField=h;let u=.12,d=t-this.mouseLastMoveTime;this.cursorSmoothedX<-9e3?(this.cursorSmoothedX=this.mouseX,this.cursorSmoothedY=this.mouseY):(this.cursorSmoothedX+=(this.mouseX-this.cursorSmoothedX)*u,this.cursorSmoothedY+=(this.mouseY-this.cursorSmoothedY)*u);let p=this.mouseActive&&d<1200?1:0;if(this.cursorStrength+=(p-this.cursorStrength)*.08,this.mouseActive?(this.mouseVx=(this.mouseX-this.prevMouseX)*.6+this.mouseVx*.4,this.mouseVy=(this.mouseY-this.prevMouseY)*.6+this.mouseVy*.4,this.prevMouseX=this.mouseX,this.prevMouseY=this.mouseY):(this.mouseVx*=.92,this.mouseVy*=.92),!i&&(this.mouseActive||this.fluidHasEnergy)){this.fluidStep();let f=0,w=(this.FLUID_N+2)*(this.FLUID_N+2);for(let b=0;b<w;b+=4){let S=this.fluidVx[b]*this.fluidVx[b]+this.fluidVy[b]*this.fluidVy[b];S>f&&(f=S)}this.fluidHasEnergy=f>1e-5}this.updateParticles();let g=this.particleGeometry.getAttribute("aPosX"),_=this.particleGeometry.getAttribute("aPosY"),m=this.particleGeometry.getAttribute("aOpacity");g.needsUpdate=!0,_.needsUpdate=!0,m.needsUpdate=!0,this.particleMaterial.uniforms.uTime.value=this.time,this.vignetteMaterial.uniforms.uScrollField.value=this.globalScrollField,this.vignetteMaterial.uniforms.uCursor.value.set(this.cursorSmoothedX,this.cursorSmoothedY),this.vignetteMaterial.uniforms.uCursorStrength.value=this.cursorStrength,this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.vigRenderer.render(this.vignetteScene,this.vignetteCamera),this.animationId=requestAnimationFrame(this.animate)};updateParticles(){let e=this.time,t=this.width,i=this.height,r=Math.min(t,i),s=Math.max(t,i)/this.FLUID_N,a=this.FLUID_N,o=a+2,l=this.fluidVx,c=this.fluidVy,h=a/t,u=a/i,d=this.globalScrollField,p=this.mouseX,g=this.mouseY,_=this.mouseActive,m=4e4,f=d<.03?0:d>.6?.55:d/.6*.55,w=.4,b=.28,S=.12,E=.04,T=this.settledCount;for(let C=0;C<T;C++){let x=this.pLayer[C],M=this.pFlickerPhase[C],P=this.pPosX[C],F=this.pPosY[C],U=this.pActive[C],O=this.pBaseX[C],X=this.pBaseY[C],W=this.pBirthX[C],k=this.pBirthY[C],Z=d<.05?.012:.003;if(O+=(W-O)*Z,X+=(k-X)*Z,this.pBaseX[C]=O,this.pBaseY[C]=X,U){let Me=this.pRate[C]-1;if(Me<=0){Me=0,U=0,this.pActive[C]=0;let be=.4;this.pBaseX[C]=O+(P-O)*be,this.pBaseY[C]=X+(F-X)*be}this.pRate[C]=Me}if(_){let Me=P-p,be=F-g;Me*Me+be*be<m&&(U||(U=1,this.pActive[C]=1),this.pRate[C]=90)}let ce=M*.15915494,ne=k/i,he=x===pr?-.02:x===St?.05:.4,De=he+ce*((x===pr||x===St?1.02:.95)-he),nt=(ne+(De-ne)*d)*i,Je=x===pr?w:x===St?b:S,Y=W/t-.5,J=W+Y*t*Je*d,pe=O-W,Le=X-k,fe=J+pe,Xe=nt+Le;if(U){let Me=P*h+.5,be=F*u+.5;Me<.5?Me=.5:Me>a+.5&&(Me=a+.5),be<.5?be=.5:be>a+.5&&(be=a+.5);let we=Me|0,Ge=be|0,I=Me-we,$e=be-Ge,ze=1-I,qe=1-$e,le=we+o*Ge,A=ze*(qe*l[le]+$e*l[le+o])+I*(qe*l[le+1]+$e*l[le+o+1]),v=ze*(qe*c[le]+$e*c[le+o])+I*(qe*c[le+1]+$e*c[le+o+1]),D=x===Dt?.4:x===St?.25:.12,q=this.pVX[C]+A*s*D,$=this.pVY[C]+v*s*D,G=(fe-P)*.015,ge=(Xe-F)*.015,ee=1.5;G>ee?G=ee:G<-ee&&(G=-ee),ge>ee?ge=ee:ge<-ee&&(ge=-ee),q+=G,$+=ge,F<-i*.1&&($+=.12),F>i*1.08&&($-=.06),P<-t*.05&&(q+=.06),P>t*1.05&&(q-=.06),q*=.9,$*=.9;let ve=q*q+$*$,Te=5;if(ve>Te*Te){let K=Te/Math.sqrt(ve);q*=K,$*=K}P+=q,F+=$,this.pVX[C]=q,this.pVY[C]=$}else{let Me=this.pVX[C],be=this.pVY[C],we=(fe-P)*E,Ge=(Xe-F)*E,I=2;we>I?we=I:we<-I&&(we=-I),Ge>I?Ge=I:Ge<-I&&(Ge=-I),Me+=we,be+=Ge;let $e=P*h+.5,ze=F*u+.5;$e<.5?$e=.5:$e>a+.5&&($e=a+.5),ze<.5?ze=.5:ze>a+.5&&(ze=a+.5);let qe=$e|0,le=ze|0,A=$e-qe,v=ze-le,D=qe+o*le,q=(1-A)*((1-v)*l[D]+v*l[D+o])+A*((1-v)*l[D+1]+v*l[D+o+1]),$=(1-A)*((1-v)*c[D]+v*c[D+o])+A*((1-v)*c[D+1]+v*c[D+o+1]),G=x===Dt?.18:x===St?.1:.04;Me+=q*s*G,be+=$*s*G,Me*=.88,be*=.88;let ge=Me*Me+be*be,ee=3;if(ge>ee*ee){let ie=ee/Math.sqrt(ge);Me*=ie,be*=ie}P+=Me,F+=be,this.pVX[C]=Me,this.pVY[C]=be;let ve=x===Dt?.55:x===St?.28:.1,Te=x===Dt?.05:x===St?.07:.09,K=Te*.72;P+=Math.cos(e*Te+M)*ve*.08,F+=Math.sin(e*K+M*1.3)*ve*.05}this.pPosX[C]=P,this.pPosY[C]=F;let ut=.65+.35*Math.sin(e*this.pFlickerSpeed[C]+M),Ne=this.pBaseOpacity[C]*ut;if(d>.01&&(Ne*=1+f,d>.4)){let Me=d<.9?(d-.4)/.5:1,be=Math.abs(P/t-.5)*2,we=Math.abs(F/i-.5)*2,Ge=be>we?be:we,I=Ge<.35?Ge/.35:1;Ne*=1-Me*(1-I)*.7}if(U){let Me=this.pVX[C],be=this.pVY[C],we=Math.sqrt(Me*Me+be*be);Ne*=1-(we*.04<.35?we*.04:.35)}this.pOpacity[C]+=(Ne-this.pOpacity[C])*.12}let R=this.pCount;for(let C=T;C<R;C++){let x=this.pLayer[C],M=this.pT[C];M+=this.pSpeed[C],M>1.06&&(M=-.04-Math.random()*.03,this.pVX[C]=0,this.pVY[C]=0,this.pOpacity[C]=0),this.pT[C]=M;let P=M<.01?.01:M>.99?.99:M,F=this.flowPosX(P),U=this.flowPosY(P),O=this.flowTangent(P),X=-O.ty,W=O.tx,k=.06+P*.55,Z=r*k,ne=this.pScatter[C]/(r*.61||1)*Z,he=F+X*ne,Ve=U+W*ne;this.pBaseX[C]+=(he-this.pBaseX[C])*.06,this.pBaseY[C]+=(Ve-this.pBaseY[C])*.06;let De=this.pPosX[C],nt=this.pPosY[C],Je=De*h+.5,Y=nt*u+.5;Je<.5?Je=.5:Je>a+.5&&(Je=a+.5),Y<.5?Y=.5:Y>a+.5&&(Y=a+.5);let J=Je|0,pe=Y|0,Le=Je-J,fe=Y-pe,Xe=1-Le,ut=1-fe,Ne=J+o*pe,Me=Xe*(ut*l[Ne]+fe*l[Ne+o])+Le*(ut*l[Ne+1]+fe*l[Ne+o+1]),be=Xe*(ut*c[Ne]+fe*c[Ne+o])+Le*(ut*c[Ne+1]+fe*c[Ne+o+1]),we=x===Dt?.35:x===St?.2:.08,Ge=this.pVX[C]+Me*s*we,I=this.pVY[C]+be*s*we,$e=this.pRate[C]*.3;Ge+=(this.pBaseX[C]-De)*$e,I+=(this.pBaseY[C]-nt)*$e;let ze=x===Dt?.96:x===St?.94:.9;Ge*=ze,I*=ze,De+=Ge,nt+=I;let qe=this.pFlickerPhase[C],le=x===Dt?.012:x===St?.009:.004,A=x===Dt?.25:x===St?.17:.08;De+=Math.sin(e*A+qe)*le,nt+=Math.cos(e*(A*.72)+qe*1.3)*le*.5,this.pVX[C]=Ge,this.pVY[C]=I,this.pPosX[C]=De,this.pPosY[C]=nt;let v=1;M<0?v=0:M<.07?v=M/.07:M>.93&&(v=(1-M)/.07),v<0?v=0:v>1&&(v=1);let D=Math.sqrt(Ge*Ge+I*I),q=1-(D*.04<.35?D*.04:.35),$=.65+.35*Math.sin(e*this.pFlickerSpeed[C]+qe),G=this.pBaseOpacity[C]*v*$*q;this.pOpacity[C]+=(G-this.pOpacity[C])*.18}}initFluidGrid(){let e=(this.FLUID_N+2)*(this.FLUID_N+2);this.fluidVx=new Float32Array(e),this.fluidVy=new Float32Array(e),this.fluidVx0=new Float32Array(e),this.fluidVy0=new Float32Array(e)}fluidStep(){let e=this.FLUID_DT,t=this.FLUID_VISC,i;this.fluidAddForce(),i=this.fluidVx,this.fluidVx=this.fluidVx0,this.fluidVx0=i,i=this.fluidVy,this.fluidVy=this.fluidVy0,this.fluidVy0=i,this.fluidDiffuse(1,this.fluidVx,this.fluidVx0,t,e),this.fluidDiffuse(2,this.fluidVy,this.fluidVy0,t,e),this.fluidProject(this.fluidVx,this.fluidVy,this.fluidVx0,this.fluidVy0),i=this.fluidVx,this.fluidVx=this.fluidVx0,this.fluidVx0=i,i=this.fluidVy,this.fluidVy=this.fluidVy0,this.fluidVy0=i,this.fluidAdvect(1,this.fluidVx,this.fluidVx0,this.fluidVx0,this.fluidVy0,e),this.fluidAdvect(2,this.fluidVy,this.fluidVy0,this.fluidVx0,this.fluidVy0,e),this.fluidProject(this.fluidVx,this.fluidVy,this.fluidVx0,this.fluidVy0)}fluidAddForce(){let e=this.FLUID_N,t=e+2,i=this.mouseVx,r=this.mouseVy;if(Math.sqrt(i*i+r*r)<.5)return;let a=this.mouseX/this.width*e,o=this.mouseY/this.height*e,l=Math.max(2,this.FLUID_CURSOR_PX/Math.max(this.width,this.height)*e),c=i*this.FLUID_FORCE,h=r*this.FLUID_FORCE,u=Math.max(1,a-l|0),d=Math.min(e,Math.ceil(a+l)),p=Math.max(1,o-l|0),g=Math.min(e,Math.ceil(o+l)),_=l*l,m=1/l;for(let f=p;f<=g;f++){let w=f-o,b=w*w,S=t*f;for(let E=u;E<=d;E++){let T=E-a,R=T*T+b;if(R>_)continue;let C=1-Math.sqrt(R)*m,x=C*C,M=E+S;this.fluidVx[M]+=c*x,this.fluidVy[M]+=h*x}}}fluidDiffuse(e,t,i,r,s){let a=this.FLUID_N,o=a+2,l=r*s,c=1/(1+4*l);for(let h=0;h<4;h++){for(let u=1;u<=a;u++){let d=o*u;for(let p=1;p<=a;p++){let g=p+d;t[g]=(i[g]+l*(t[g-1]+t[g+1]+t[g-o]+t[g+o]))*c}}this.fluidSetBnd(e,t)}}fluidAdvect(e,t,i,r,s,a){let o=this.FLUID_N,l=o+2,c=a*o,h=o+.5;for(let u=1;u<=o;u++){let d=l*u;for(let p=1;p<=o;p++){let g=p+d,_=p-c*r[g],m=u-c*s[g];_<.5?_=.5:_>h&&(_=h),m<.5?m=.5:m>h&&(m=h);let f=_|0,w=m|0,b=_-f,S=1-b,E=m-w,T=1-E,R=f+l*w,C=R+l;t[g]=S*(T*i[R]+E*i[C])+b*(T*i[R+1]+E*i[C+1])}}this.fluidSetBnd(e,t)}fluidProject(e,t,i,r){let s=this.FLUID_N,a=s+2,l=-.5*(1/s),c=.5*s;for(let h=1;h<=s;h++){let u=a*h;for(let d=1;d<=s;d++){let p=d+u;r[p]=l*(e[p+1]-e[p-1]+t[p+a]-t[p-a]),i[p]=0}}this.fluidSetBnd(0,r),this.fluidSetBnd(0,i);for(let h=0;h<4;h++){for(let u=1;u<=s;u++){let d=a*u;for(let p=1;p<=s;p++){let g=p+d;i[g]=(r[g]+i[g-1]+i[g+1]+i[g-a]+i[g+a])*.25}}this.fluidSetBnd(0,i)}for(let h=1;h<=s;h++){let u=a*h;for(let d=1;d<=s;d++){let p=d+u;e[p]-=c*(i[p+1]-i[p-1]),t[p]-=c*(i[p+a]-i[p-a])}}this.fluidSetBnd(1,e),this.fluidSetBnd(2,t)}fluidSetBnd(e,t){let i=this.FLUID_N,r=i+2,s=e===1?-1:1,a=e===2?-1:1,o=i+1;for(let l=1;l<=i;l++){let c=r*l;t[c]=s*t[1+c],t[o+c]=s*t[i+c],t[l]=a*t[l+r],t[l+r*o]=a*t[l+r*i]}t[0]=.5*(t[1]+t[r]),t[o]=.5*(t[i]+t[o+r]),t[r*o]=.5*(t[1+r*o]+t[r*i]),t[o+r*o]=.5*(t[i+r*o]+t[o+r*i])}static \u0275fac=function(t){return new(t||n)(bt(Ln))};static \u0275cmp=Nn({type:n,selectors:[["app-dust-particles-gl"]],viewQuery:function(t,i){if(t&1&&Ca(Wb,7)(Xb,7),t&2){let r;ki(r=Vi())&&(i.canvasRef=r.first),ki(r=Vi())&&(i.vigCanvasRef=r.first)}},inputs:{lockTouch:"lockTouch",scrollProgress:"scrollProgress"},decls:4,vars:0,consts:[["vigCanvas",""],["glCanvas",""],[1,"vig-gl"],["data-dust","",1,"dust-gl"]],template:function(t,i){t&1&&Aa(0,"canvas",2,0)(2,"canvas",3,1)},styles:["[_nghost-%COMP%]{display:block;position:fixed;inset:0;z-index:2;pointer-events:none}.vig-gl[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none}.dust-gl[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;mix-blend-mode:screen;z-index:auto}"]})};function Zb(n,e){if(n&1&&Kt(0,"span",13),n&2){let t=e.$implicit;Ra("left",t.leftPx,"px")("top",t.topPx,"px")("width",t.widthPx,"px")("height",t.heightPx,"px")("opacity",t.opacity)("transform","rotate("+t.rotationDeg+"deg)")}}function Jb(n,e){if(n&1&&(Jt(0,"div",11),kd(1,Zb,1,12,"span",12,zd),mn()),n&2){let t=Ta();Ra("opacity",1-t.homeScrollProgress()*2.5),pn(),Vd(t.patternItems())}}function Kb(n,e){n&1&&Kt(0,"div",6)}function Qb(n,e){if(n&1&&Kt(0,"app-light-rays",14),n&2){let t=Ta();Ra("opacity",1-t.homeScrollProgress()*3),cs("raysSpeed",1)("lightSpread",.9)("rayLength",1)("pulsating",!1)("fadeDistance",.55)("saturation",1)("followMouse",!0)("mouseInfluence",.18)("noiseAmount",.4)("distortion",0)}}function e1(n,e){if(n&1&&Kt(0,"app-dust-particles-gl",9),n&2){let t=Ta();cs("lockTouch",!1)("scrollProgress",t.homeScrollProgress())}}var gc=class n{constructor(e,t){this.router=t;this.isBrowser=_r(e),this.isBrowser&&(this.updatePatternGrid(),window.addEventListener("homepage-scroll",(i=>{this.homeScrollProgress.set(i.detail.progress)}))),this.router.events.pipe(yn(i=>i instanceof Vt)).subscribe(i=>{this.isHomePage.set(i.urlAfterRedirects==="/"||i.urlAfterRedirects===""),this.isContactPage.set(i.urlAfterRedirects==="/contact"),i.urlAfterRedirects!=="/"&&i.urlAfterRedirects!==""&&this.homeScrollProgress.set(0)})}patternItems=Dn([]);isHomePage=Dn(!0);isContactPage=Dn(!1);homeScrollProgress=Dn(0);isBrowser;updatePatternGrid(){if(!this.isBrowser)return;let e=window.innerWidth,t=window.innerHeight,i=Math.max(48,Math.min(e*.048,64)),r=i*1.28,s=r*1.52,a=i*1.34,o=Math.ceil((e+s)/s)+1,l=Math.ceil((t+a)/a)+1,c=[];for(let h=0;h<l;h++){let u=h%2===0?0:s*.48;for(let d=-1;d<o;d++){let p=h*o+d+1,g=[-8,-4,3,7,1,-6,5];c.push({leftPx:d*s+u-r*.16,topPx:h*a-i*.14,widthPx:r,heightPx:i,opacity:[.14,.09,.12,.07,.1][p%5],rotationDeg:g[p%g.length]})}}this.patternItems.set(c)}static \u0275fac=function(t){return new(t||n)(bt(Ln),bt(Un))};static \u0275cmp=Nn({type:n,selectors:[["app-root"]],hostBindings:function(t,i){t&1&&Mn("resize",function(){return i.updatePatternGrid()},Cd)},decls:13,vars:4,consts:[[1,"app-shell"],["aria-hidden","true",1,"app-shell__background"],[1,"app-shell__background-color"],[1,"app-shell__background-pattern",3,"opacity"],[1,"app-shell__background-texture"],[1,"app-shell__background-focal-blur"],[1,"app-shell__background-vignette"],[1,"app-shell__background-ambient"],["raysOrigin","top-right","raysColor","#d4923e",3,"raysSpeed","lightSpread","rayLength","pulsating","fadeDistance","saturation","followMouse","mouseInfluence","noiseAmount","distortion","opacity"],[3,"lockTouch","scrollProgress"],[1,"app-shell__content"],[1,"app-shell__background-pattern"],[1,"app-shell__background-glyph",3,"left","top","width","height","opacity","transform"],[1,"app-shell__background-glyph"],["raysOrigin","top-right","raysColor","#d4923e",3,"raysSpeed","lightSpread","rayLength","pulsating","fadeDistance","saturation","followMouse","mouseInfluence","noiseAmount","distortion"]],template:function(t,i){t&1&&(Jt(0,"div",0)(1,"div",1),Kt(2,"div",2),os(3,Jb,3,2,"div",3),Kt(4,"div",4)(5,"div",5),os(6,Kb,1,0,"div",6),Kt(7,"div",7),mn(),os(8,Qb,1,12,"app-light-rays",8),os(9,e1,1,2,"app-dust-particles-gl",9),Jt(10,"div",10),Kt(11,"app-header")(12,"router-outlet"),mn()()),t&2&&(pn(3),ls(i.isHomePage()?3:-1),pn(3),ls(i.isHomePage()?6:-1),pn(2),ls(i.isHomePage()?8:-1),pn(),ls(i.isHomePage()||i.isContactPage()?9:-1))},dependencies:[Rs,uo,Mo,mc],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;min-height:100vh;min-height:100dvh;--app-background-base: #3a0e3c;--app-background-shadow: rgba(0, 0, 0, .95);--app-background-highlight: rgba(118, 44, 100, .16);--app-background-texture-deep: rgba(18, 3, 22, .52);--app-background-texture-mid: rgba(62, 16, 56, .32);--app-background-texture-soft: rgba(255, 227, 241, .042);--app-background-dust: rgba(226, 187, 220, .04);--app-pattern-color: rgba(145, 108, 168, .18);--app-pattern-shadow: rgba(40, 12, 42, .18)}.app-shell[_ngcontent-%COMP%]{position:relative;min-height:100vh;min-height:100dvh}.app-shell__background[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}.app-shell__background-color[_ngcontent-%COMP%], .app-shell__background-pattern[_ngcontent-%COMP%], .app-shell__background-texture[_ngcontent-%COMP%], .app-shell__background-focal-blur[_ngcontent-%COMP%], .app-shell__background-vignette[_ngcontent-%COMP%], .app-shell__background-ambient[_ngcontent-%COMP%]{position:absolute;inset:0}.app-shell__background-color[_ngcontent-%COMP%]{background:radial-gradient(ellipse 70% 60% at 52% 44%,rgba(95,28,90,.2),transparent 58%),radial-gradient(circle at 64% 44%,rgba(100,26,96,.13),transparent 36%),radial-gradient(circle at 48% 38%,var(--app-background-highlight),transparent 48%),linear-gradient(180deg,#1a061c 0%,#2c0c2e 18%,var(--app-background-base) 50%,#2c0c2e 100%)}.app-shell__background-pattern[_ngcontent-%COMP%]{inset:-8vh -10vw;z-index:2;will-change:opacity;contain:layout style;transform:translateZ(0)}.app-shell__background-pattern[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 42%,rgba(255,232,245,.018),transparent 20%),radial-gradient(circle at 50% 58%,rgba(13,3,18,.28),transparent 42%),repeating-linear-gradient(32deg,rgba(255,235,245,.008) 0 2px,transparent 2px 13px),repeating-linear-gradient(128deg,rgba(0,0,0,.03) 0 3px,transparent 3px 18px);mix-blend-mode:soft-light;opacity:.75;pointer-events:none}.app-shell__background-glyph[_ngcontent-%COMP%]{position:absolute;display:block;background-image:url(/images/adam-pattern.png);background-repeat:no-repeat;background-position:center;background-size:contain;opacity:inherit;filter:brightness(.85) saturate(.85) contrast(.92);mix-blend-mode:soft-light;-webkit-user-select:none;user-select:none;contain:strict}.app-shell__background-texture[_ngcontent-%COMP%]{opacity:1;z-index:1;background:radial-gradient(ellipse 34% 28% at 8% 14%,rgba(0,0,0,.38),transparent),radial-gradient(ellipse 28% 38% at 86% 12%,rgba(0,0,0,.34),transparent),radial-gradient(ellipse 42% 30% at 30% 54%,rgba(0,0,0,.36),transparent),radial-gradient(ellipse 30% 26% at 70% 68%,rgba(0,0,0,.32),transparent),radial-gradient(ellipse 22% 34% at 94% 48%,rgba(0,0,0,.36),transparent),radial-gradient(ellipse 26% 30% at 18% 40%,rgba(0,0,0,.3),transparent),radial-gradient(ellipse 20% 24% at 52% 20%,rgba(0,0,0,.28),transparent),radial-gradient(ellipse 32% 22% at 42% 86%,rgba(0,0,0,.34),transparent),repeating-linear-gradient(172deg,rgba(0,0,0,.1) 0 1px,transparent 1px 4px),repeating-linear-gradient(168deg,rgba(0,0,0,.07) 0 2px,transparent 2px 7px),repeating-linear-gradient(176deg,rgba(0,0,0,.05) 0 1px,transparent 1px 6px),repeating-radial-gradient(circle at 25% 25%,rgba(0,0,0,.1) 0 2px,transparent 2px 5px),repeating-radial-gradient(circle at 75% 50%,rgba(0,0,0,.09) 0 2px,transparent 2px 6px),repeating-radial-gradient(circle at 50% 75%,rgba(0,0,0,.08) 0 1px,transparent 1px 4px),repeating-radial-gradient(circle at 40% 40%,rgba(0,0,0,.06) 0 1px,transparent 1px 3px),repeating-radial-gradient(circle at 65% 30%,rgba(0,0,0,.05) 0 1px,transparent 1px 3px);background-size:100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,28px 28px,36px 36px,44px 44px,18px 18px,22px 22px,16px 16px,12px 12px,14px 14px;mix-blend-mode:multiply;filter:contrast(1.25)}.app-shell__background-texture[_ngcontent-%COMP%]:before, .app-shell__background-texture[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0}.app-shell__background-texture[_ngcontent-%COMP%]:before{opacity:.95;background:radial-gradient(ellipse 44% 36% at 14% 22%,rgba(0,0,0,.34),transparent),radial-gradient(ellipse 38% 32% at 82% 14%,rgba(0,0,0,.3),transparent),radial-gradient(ellipse 36% 42% at 38% 66%,rgba(0,0,0,.32),transparent),radial-gradient(ellipse 32% 28% at 92% 62%,rgba(0,0,0,.28),transparent),radial-gradient(ellipse 30% 36% at 54% 38%,rgba(0,0,0,.24),transparent),radial-gradient(ellipse 24% 22% at 6% 72%,rgba(0,0,0,.3),transparent),radial-gradient(ellipse 28% 24% at 64% 30%,rgba(0,0,0,.26),transparent),repeating-linear-gradient(175deg,rgba(0,0,0,.08) 0 1px,transparent 1px 5px),repeating-linear-gradient(170deg,rgba(0,0,0,.06) 0 2px,transparent 2px 8px),repeating-radial-gradient(circle at 50% 50%,rgba(0,0,0,.07) 0 1px,transparent 1px 4px);mix-blend-mode:multiply;filter:blur(.5px)}.app-shell__background-texture[_ngcontent-%COMP%]:after{opacity:.4;background:radial-gradient(ellipse 30% 50% at 20% 16%,rgba(255,230,240,.045),transparent),radial-gradient(ellipse 28% 44% at 80% 22%,rgba(255,225,235,.035),transparent),radial-gradient(ellipse 24% 40% at 30% 74%,rgba(255,218,232,.035),transparent),radial-gradient(ellipse 26% 38% at 74% 70%,rgba(255,214,226,.04),transparent),radial-gradient(circle at 50% 42%,rgba(255,235,244,.05),transparent 38%),repeating-radial-gradient(circle at 20% 20%,rgba(255,245,250,.025) 0 1px,transparent 1px 6px),repeating-radial-gradient(circle at 80% 80%,rgba(255,240,248,.022) 0 1px,transparent 1px 7px),repeating-radial-gradient(circle at 50% 50%,rgba(255,242,250,.018) 0 1px,transparent 1px 5px);mix-blend-mode:screen}.app-shell__background-focal-blur[_ngcontent-%COMP%]{z-index:3;backdrop-filter:blur(3.5px);-webkit-backdrop-filter:blur(3.5px);mask-image:radial-gradient(ellipse 38% 34% at 50% 50%,transparent 0%,transparent 40%,rgba(0,0,0,.5) 70%,black 100%);-webkit-mask-image:radial-gradient(ellipse 38% 34% at 50% 50%,transparent 0%,transparent 40%,rgba(0,0,0,.5) 70%,black 100%);pointer-events:none}.app-shell__background-vignette[_ngcontent-%COMP%]{z-index:4;display:none;background:radial-gradient(ellipse 72% 62% at 50% 42%,transparent 14%,rgba(0,0,0,.34) 40%,rgba(0,0,0,.68) 56%,rgba(0,0,0,.9) 74%,rgba(0,0,0,.96) 100%),linear-gradient(to top,rgba(0,0,0,.7) 0%,rgba(0,0,0,.62) 4%,rgba(0,0,0,.48) 10%,rgba(0,0,0,.3) 18%,rgba(0,0,0,.12) 26%,transparent 38%),radial-gradient(circle at 0% 0%,rgba(0,0,0,.82),transparent 32%),radial-gradient(circle at 100% 0%,rgba(0,0,0,.14),transparent 26%),radial-gradient(circle at 0% 100%,rgba(0,0,0,.78),transparent 28%),radial-gradient(circle at 100% 100%,rgba(0,0,0,.74),transparent 28%),linear-gradient(to right,rgba(0,0,0,.45) 0%,rgba(0,0,0,.15) 10%,transparent 18%),linear-gradient(to bottom,rgba(0,0,0,.28) 0%,transparent 8%)}.app-shell__background-ambient[_ngcontent-%COMP%]{z-index:5;background:radial-gradient(ellipse 68% 56% at 50% 42%,rgba(82,24,78,.22) 0%,rgba(68,18,64,.14) 20%,rgba(48,10,46,.06) 40%,transparent 62%);pointer-events:none}.app-shell__content[_ngcontent-%COMP%]{position:relative;z-index:3;min-height:100vh}@media(max-width:768px){[_nghost-%COMP%]{--app-background-highlight: rgba(138, 64, 97, .18);--app-pattern-color: rgba(156, 111, 170, .17)}.app-shell__background-pattern[_ngcontent-%COMP%]{inset:-5vh -18vw}.app-shell__background-glyph[_ngcontent-%COMP%]{filter:drop-shadow(0 0 1px var(--app-pattern-shadow)) brightness(1.12)}.app-shell__background-vignette[_ngcontent-%COMP%]{display:none}}']})};kc(gc,cp).catch(n=>console.error(n));
