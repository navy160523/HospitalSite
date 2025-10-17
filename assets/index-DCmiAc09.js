(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ie={},Mr=[],qt=()=>{},Wf=()=>!1,Fo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Lc=n=>n.startsWith("onUpdate:"),lt=Object.assign,Fc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qm=Object.prototype.hasOwnProperty,ye=(n,e)=>qm.call(n,e),ne=Array.isArray,Lr=n=>ai(n)==="[object Map]",Uo=n=>ai(n)==="[object Set]",Bu=n=>ai(n)==="[object Date]",ce=n=>typeof n=="function",Me=n=>typeof n=="string",Yt=n=>typeof n=="symbol",be=n=>n!==null&&typeof n=="object",Kf=n=>(be(n)||ce(n))&&ce(n.then)&&ce(n.catch),Gf=Object.prototype.toString,ai=n=>Gf.call(n),Hm=n=>ai(n).slice(8,-1),Qf=n=>ai(n)==="[object Object]",Uc=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xs=Mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zm=/-\w/g,Un=Bo(n=>n.replace(zm,e=>e.slice(1).toUpperCase())),Wm=/\B([A-Z])/g,Er=Bo(n=>n.replace(Wm,"-$1").toLowerCase()),Jf=Bo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ca=Bo(n=>n?`on${Jf(n)}`:""),kn=(n,e)=>!Object.is(n,e),qi=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Yf=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},io=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ju;const jo=()=>ju||(ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bc(n){if(ne(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Me(r)?Jm(r):Bc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Me(n)||be(n))return n}const Km=/;(?![^(]*\))/g,Gm=/:([^]+)/,Qm=/\/\*[^]*?\*\//g;function Jm(n){const e={};return n.replace(Qm,"").split(Km).forEach(t=>{if(t){const r=t.split(Gm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $o(n){let e="";if(Me(n))e=n;else if(ne(n))for(let t=0;t<n.length;t++){const r=$o(n[t]);r&&(e+=r+" ")}else if(be(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ym="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xm=Mc(Ym);function Xf(n){return!!n||n===""}function Zm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=qo(n[r],e[r]);return t}function qo(n,e){if(n===e)return!0;let t=Bu(n),r=Bu(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Yt(n),r=Yt(e),t||r)return n===e;if(t=ne(n),r=ne(e),t||r)return t&&r?Zm(n,e):!1;if(t=be(n),r=be(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!qo(n[a],e[a]))return!1}}return String(n)===String(e)}function e_(n,e){return n.findIndex(t=>qo(t,e))}const Zf=n=>!!(n&&n.__v_isRef===!0),Rt=n=>Me(n)?n:n==null?"":ne(n)||be(n)&&(n.toString===Gf||!ce(n.toString))?Zf(n)?Rt(n.value):JSON.stringify(n,ed,2):String(n),ed=(n,e)=>Zf(e)?ed(n,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Va(r,i)+" =>"]=s,t),{})}:Uo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Va(t))}:Yt(e)?Va(e):be(e)&&!ne(e)&&!Qf(e)?String(e):e,Va=(n,e="")=>{var t;return Yt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ut;class t_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ut,!e&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ut;try{return ut=this,e()}finally{ut=t}}}on(){++this._on===1&&(this.prevScope=ut,ut=this)}off(){this._on>0&&--this._on===0&&(ut=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function n_(){return ut}let we;const Da=new WeakSet;class td{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ut&&ut.active&&ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Da.has(this)&&(Da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$u(this),sd(this);const e=we,t=Vt;we=this,Vt=!0;try{return this.fn()}finally{id(this),we=e,Vt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qc(e);this.deps=this.depsTail=void 0,$u(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ya(this)&&this.run()}get dirty(){return Ya(this)}}let nd=0,Ms,Ls;function rd(n,e=!1){if(n.flags|=8,e){n.next=Ls,Ls=n;return}n.next=Ms,Ms=n}function jc(){nd++}function $c(){if(--nd>0)return;if(Ls){let e=Ls;for(Ls=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ms;){let e=Ms;for(Ms=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function sd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function id(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),qc(r),r_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Ya(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(od(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function od(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gs)||(n.globalVersion=Gs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ya(n))))return;n.flags|=2;const e=n.dep,t=we,r=Vt;we=n,Vt=!0;try{sd(n);const s=n.fn(n._value);(e.version===0||kn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{we=t,Vt=r,id(n),n.flags&=-3}}function qc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)qc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function r_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Vt=!0;const ad=[];function cn(){ad.push(Vt),Vt=!1}function ln(){const n=ad.pop();Vt=n===void 0?!0:n}function $u(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=we;we=void 0;try{e()}finally{we=t}}}let Gs=0;class s_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!we||!Vt||we===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==we)t=this.activeLink=new s_(we,this),we.deps?(t.prevDep=we.depsTail,we.depsTail.nextDep=t,we.depsTail=t):we.deps=we.depsTail=t,cd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=we.depsTail,t.nextDep=void 0,we.depsTail.nextDep=t,we.depsTail=t,we.deps===t&&(we.deps=r)}return t}trigger(e){this.version++,Gs++,this.notify(e)}notify(e){jc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{$c()}}}function cd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)cd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Xa=new WeakMap,lr=Symbol(""),Za=Symbol(""),Qs=Symbol("");function Ze(n,e,t){if(Vt&&we){let r=Xa.get(n);r||Xa.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Hc),s.map=r,s.key=t),s.track()}}function rn(n,e,t,r,s,i){const a=Xa.get(n);if(!a){Gs++;return}const c=l=>{l&&l.trigger()};if(jc(),e==="clear")a.forEach(c);else{const l=ne(n),h=l&&Uc(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Qs||!Yt(m)&&m>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(Qs)),e){case"add":l?h&&c(a.get("length")):(c(a.get(lr)),Lr(n)&&c(a.get(Za)));break;case"delete":l||(c(a.get(lr)),Lr(n)&&c(a.get(Za)));break;case"set":Lr(n)&&c(a.get(lr));break}}$c()}function Cr(n){const e=_e(n);return e===n?e:(Ze(e,"iterate",Qs),At(n)?e:e.map(We))}function Ho(n){return Ze(n=_e(n),"iterate",Qs),n}const i_={__proto__:null,[Symbol.iterator](){return ka(this,Symbol.iterator,We)},concat(...n){return Cr(this).concat(...n.map(e=>ne(e)?Cr(e):e))},entries(){return ka(this,"entries",n=>(n[1]=We(n[1]),n))},every(n,e){return tn(this,"every",n,e,void 0,arguments)},filter(n,e){return tn(this,"filter",n,e,t=>t.map(We),arguments)},find(n,e){return tn(this,"find",n,e,We,arguments)},findIndex(n,e){return tn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return tn(this,"findLast",n,e,We,arguments)},findLastIndex(n,e){return tn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return tn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Na(this,"includes",n)},indexOf(...n){return Na(this,"indexOf",n)},join(n){return Cr(this).join(n)},lastIndexOf(...n){return Na(this,"lastIndexOf",n)},map(n,e){return tn(this,"map",n,e,void 0,arguments)},pop(){return Ss(this,"pop")},push(...n){return Ss(this,"push",n)},reduce(n,...e){return qu(this,"reduce",n,e)},reduceRight(n,...e){return qu(this,"reduceRight",n,e)},shift(){return Ss(this,"shift")},some(n,e){return tn(this,"some",n,e,void 0,arguments)},splice(...n){return Ss(this,"splice",n)},toReversed(){return Cr(this).toReversed()},toSorted(n){return Cr(this).toSorted(n)},toSpliced(...n){return Cr(this).toSpliced(...n)},unshift(...n){return Ss(this,"unshift",n)},values(){return ka(this,"values",We)}};function ka(n,e,t){const r=Ho(n),s=r[e]();return r!==n&&!At(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const o_=Array.prototype;function tn(n,e,t,r,s,i){const a=Ho(n),c=a!==n&&!At(n),l=a[e];if(l!==o_[e]){const p=l.apply(n,i);return c?We(p):p}let h=t;a!==n&&(c?h=function(p,m){return t.call(this,We(p),m,n)}:t.length>2&&(h=function(p,m){return t.call(this,p,m,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function qu(n,e,t,r){const s=Ho(n);let i=t;return s!==n&&(At(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,We(c),l,n)}),s[e](i,...r)}function Na(n,e,t){const r=_e(n);Ze(r,"iterate",Qs);const s=r[e](...t);return(s===-1||s===!1)&&Gc(t[0])?(t[0]=_e(t[0]),r[e](...t)):s}function Ss(n,e,t=[]){cn(),jc();const r=_e(n)[e].apply(n,t);return $c(),ln(),r}const a_=Mc("__proto__,__v_isRef,__isVue"),ld=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Yt));function c_(n){Yt(n)||(n=String(n));const e=_e(this);return Ze(e,"has",n),e.hasOwnProperty(n)}class ud{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?y_:pd:i?dd:fd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ne(e);if(!s){let l;if(a&&(l=i_[t]))return l;if(t==="hasOwnProperty")return c_}const c=Reflect.get(e,t,tt(e)?e:r);if((Yt(t)?ld.has(t):a_(t))||(s||Ze(e,"get",t),i))return c;if(tt(c)){const l=a&&Uc(t)?c:c.value;return s&&be(l)?tc(l):l}return be(c)?s?tc(c):Wc(c):c}}class hd extends ud{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=Bn(i);if(!At(r)&&!Bn(r)&&(i=_e(i),r=_e(r)),!ne(e)&&tt(i)&&!tt(r))return l||(i.value=r),!0}const a=ne(e)&&Uc(t)?Number(t)<e.length:ye(e,t),c=Reflect.set(e,t,r,tt(e)?e:s);return e===_e(s)&&(a?kn(r,i)&&rn(e,"set",t,r):rn(e,"add",t,r)),c}deleteProperty(e,t){const r=ye(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&rn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Yt(t)||!ld.has(t))&&Ze(e,"has",t),r}ownKeys(e){return Ze(e,"iterate",ne(e)?"length":lr),Reflect.ownKeys(e)}}class l_ extends ud{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const u_=new hd,h_=new l_,f_=new hd(!0);const ec=n=>n,ki=n=>Reflect.getPrototypeOf(n);function d_(n,e,t){return function(...r){const s=this.__v_raw,i=_e(s),a=Lr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?ec:e?oo:We;return!e&&Ze(i,"iterate",l?Za:lr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Ni(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function p_(n,e){const t={get(s){const i=this.__v_raw,a=_e(i),c=_e(s);n||(kn(s,c)&&Ze(a,"get",s),Ze(a,"get",c));const{has:l}=ki(a),h=e?ec:n?oo:We;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&Ze(_e(s),"iterate",lr),s.size},has(s){const i=this.__v_raw,a=_e(i),c=_e(s);return n||(kn(s,c)&&Ze(a,"has",s),Ze(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=_e(c),h=e?ec:n?oo:We;return!n&&Ze(l,"iterate",lr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return lt(t,n?{add:Ni("add"),set:Ni("set"),delete:Ni("delete"),clear:Ni("clear")}:{add(s){!e&&!At(s)&&!Bn(s)&&(s=_e(s));const i=_e(this);return ki(i).has.call(i,s)||(i.add(s),rn(i,"add",s,s)),this},set(s,i){!e&&!At(i)&&!Bn(i)&&(i=_e(i));const a=_e(this),{has:c,get:l}=ki(a);let h=c.call(a,s);h||(s=_e(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?kn(i,d)&&rn(a,"set",s,i):rn(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:c}=ki(i);let l=a.call(i,s);l||(s=_e(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&rn(i,"delete",s,void 0),h},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&rn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=d_(s,n,e)}),t}function zc(n,e){const t=p_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ye(t,s)&&s in r?t:r,s,i)}const g_={get:zc(!1,!1)},m_={get:zc(!1,!0)},__={get:zc(!0,!1)};const fd=new WeakMap,dd=new WeakMap,pd=new WeakMap,y_=new WeakMap;function E_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function T_(n){return n.__v_skip||!Object.isExtensible(n)?0:E_(Hm(n))}function Wc(n){return Bn(n)?n:Kc(n,!1,u_,g_,fd)}function v_(n){return Kc(n,!1,f_,m_,dd)}function tc(n){return Kc(n,!0,h_,__,pd)}function Kc(n,e,t,r,s){if(!be(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=T_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function Fr(n){return Bn(n)?Fr(n.__v_raw):!!(n&&n.__v_isReactive)}function Bn(n){return!!(n&&n.__v_isReadonly)}function At(n){return!!(n&&n.__v_isShallow)}function Gc(n){return n?!!n.__v_raw:!1}function _e(n){const e=n&&n.__v_raw;return e?_e(e):n}function I_(n){return!ye(n,"__v_skip")&&Object.isExtensible(n)&&Yf(n,"__v_skip",!0),n}const We=n=>be(n)?Wc(n):n,oo=n=>be(n)?tc(n):n;function tt(n){return n?n.__v_isRef===!0:!1}function ot(n){return w_(n,!1)}function w_(n,e){return tt(n)?n:new A_(n,e)}class A_{constructor(e,t){this.dep=new Hc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_e(e),this._value=t?e:We(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||At(e)||Bn(e);e=r?e:_e(e),kn(e,t)&&(this._rawValue=e,this._value=r?e:We(e),this.dep.trigger())}}function Cs(n){return tt(n)?n.value:n}const b_={get:(n,e,t)=>e==="__v_raw"?n:Cs(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return tt(s)&&!tt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function gd(n){return Fr(n)?n:new Proxy(n,b_)}class S_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Hc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return rd(this,!0),!0}get value(){const e=this.dep.track();return od(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function R_(n,e,t=!1){let r,s;return ce(n)?r=n:(r=n.get,s=n.set),new S_(r,s,t)}const Oi={},ao=new WeakMap;let ir;function P_(n,e=!1,t=ir){if(t){let r=ao.get(t);r||ao.set(t,r=[]),r.push(n)}}function C_(n,e,t=Ie){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=$=>s?$:At($)||s===!1||s===0?sn($,1):sn($);let d,p,m,b,D=!1,P=!1;if(tt(n)?(p=()=>n.value,D=At(n)):Fr(n)?(p=()=>h(n),D=!0):ne(n)?(P=!0,D=n.some($=>Fr($)||At($)),p=()=>n.map($=>{if(tt($))return $.value;if(Fr($))return h($);if(ce($))return l?l($,2):$()})):ce(n)?e?p=l?()=>l(n,2):n:p=()=>{if(m){cn();try{m()}finally{ln()}}const $=ir;ir=d;try{return l?l(n,3,[b]):n(b)}finally{ir=$}}:p=qt,e&&s){const $=p,re=s===!0?1/0:s;p=()=>sn($(),re)}const V=n_(),j=()=>{d.stop(),V&&V.active&&Fc(V.effects,d)};if(i&&e){const $=e;e=(...re)=>{$(...re),j()}}let H=P?new Array(n.length).fill(Oi):Oi;const K=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const re=d.run();if(s||D||(P?re.some((ie,v)=>kn(ie,H[v])):kn(re,H))){m&&m();const ie=ir;ir=d;try{const v=[re,H===Oi?void 0:P&&H[0]===Oi?[]:H,b];H=re,l?l(e,3,v):e(...v)}finally{ir=ie}}}else d.run()};return c&&c(K),d=new td(p),d.scheduler=a?()=>a(K,!1):K,b=$=>P_($,!1,d),m=d.onStop=()=>{const $=ao.get(d);if($){if(l)l($,4);else for(const re of $)re();ao.delete(d)}},e?r?K(!0):H=d.run():a?a(K.bind(null,!0),!0):d.run(),j.pause=d.pause.bind(d),j.resume=d.resume.bind(d),j.stop=j,j}function sn(n,e=1/0,t){if(e<=0||!be(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,tt(n))sn(n.value,e,t);else if(ne(n))for(let r=0;r<n.length;r++)sn(n[r],e,t);else if(Uo(n)||Lr(n))n.forEach(r=>{sn(r,e,t)});else if(Qf(n)){for(const r in n)sn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&sn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(n,e,t,r){try{return r?n(...r):n()}catch(s){zo(s,e,t)}}function Xt(n,e,t,r){if(ce(n)){const s=ci(n,e,t,r);return s&&Kf(s)&&s.catch(i=>{zo(i,e,t)}),s}if(ne(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Xt(n[i],e,t,r));return s}}function zo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){cn(),ci(i,null,10,[n,l,h]),ln();return}}V_(n,t,s,r,a)}function V_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const at=[];let Ut=-1;const Ur=[];let bn=null,Vr=0;const md=Promise.resolve();let co=null;function _d(n){const e=co||md;return n?e.then(this?n.bind(this):n):e}function D_(n){let e=Ut+1,t=at.length;for(;e<t;){const r=e+t>>>1,s=at[r],i=Js(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Qc(n){if(!(n.flags&1)){const e=Js(n),t=at[at.length-1];!t||!(n.flags&2)&&e>=Js(t)?at.push(n):at.splice(D_(e),0,n),n.flags|=1,yd()}}function yd(){co||(co=md.then(Td))}function k_(n){ne(n)?Ur.push(...n):bn&&n.id===-1?bn.splice(Vr+1,0,n):n.flags&1||(Ur.push(n),n.flags|=1),yd()}function Hu(n,e,t=Ut+1){for(;t<at.length;t++){const r=at[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;at.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ed(n){if(Ur.length){const e=[...new Set(Ur)].sort((t,r)=>Js(t)-Js(r));if(Ur.length=0,bn){bn.push(...e);return}for(bn=e,Vr=0;Vr<bn.length;Vr++){const t=bn[Vr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}bn=null,Vr=0}}const Js=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Td(n){try{for(Ut=0;Ut<at.length;Ut++){const e=at[Ut];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ut<at.length;Ut++){const e=at[Ut];e&&(e.flags&=-2)}Ut=-1,at.length=0,Ed(),co=null,(at.length||Ur.length)&&Td()}}let wt=null,vd=null;function lo(n){const e=wt;return wt=n,vd=n&&n.type.__scopeId||null,e}function N_(n,e=wt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&eh(-1);const i=lo(e);let a;try{a=n(...s)}finally{lo(i),r._d&&eh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Rs(n,e){if(wt===null)return n;const t=Jo(wt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ie]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&sn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function rr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(cn(),Xt(l,t,8,[n.el,c,n,e]),ln())}}const O_=Symbol("_vte"),x_=n=>n.__isTeleport,M_=Symbol("_leaveCb");function Jc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Jc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Id(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const uo=new WeakMap;function Fs(n,e,t,r,s=!1){if(ne(n)){n.forEach((D,P)=>Fs(D,e&&(ne(e)?e[P]:e),t,r,s));return}if(Us(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Fs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Jo(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===Ie?c.refs={}:c.refs,p=c.setupState,m=_e(p),b=p===Ie?Wf:D=>ye(m,D);if(h!=null&&h!==l){if(zu(e),Me(h))d[h]=null,b(h)&&(p[h]=null);else if(tt(h)){h.value=null;const D=e;D.k&&(d[D.k]=null)}}if(ce(l))ci(l,c,12,[a,d]);else{const D=Me(l),P=tt(l);if(D||P){const V=()=>{if(n.f){const j=D?b(l)?p[l]:d[l]:l.value;if(s)ne(j)&&Fc(j,i);else if(ne(j))j.includes(i)||j.push(i);else if(D)d[l]=[i],b(l)&&(p[l]=d[l]);else{const H=[i];l.value=H,n.k&&(d[n.k]=H)}}else D?(d[l]=a,b(l)&&(p[l]=a)):P&&(l.value=a,n.k&&(d[n.k]=a))};if(a){const j=()=>{V(),uo.delete(n)};j.id=-1,uo.set(n,j),_t(j,t)}else zu(n),V()}}}function zu(n){const e=uo.get(n);e&&(e.flags|=8,uo.delete(n))}jo().requestIdleCallback;jo().cancelIdleCallback;const Us=n=>!!n.type.__asyncLoader,wd=n=>n.type.__isKeepAlive;function L_(n,e){Ad(n,"a",e)}function F_(n,e){Ad(n,"da",e)}function Ad(n,e,t=ct){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Wo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)wd(s.parent.vnode)&&U_(r,e,t,s),s=s.parent}}function U_(n,e,t,r){const s=Wo(e,n,r,!0);Ko(()=>{Fc(r[e],s)},t)}function Wo(n,e,t=ct,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{cn();const c=li(t),l=Xt(e,t,n,a);return c(),ln(),l});return r?s.unshift(i):s.push(i),i}}const gn=n=>(e,t=ct)=>{(!Xs||n==="sp")&&Wo(n,(...r)=>e(...r),t)},B_=gn("bm"),Yc=gn("m"),j_=gn("bu"),$_=gn("u"),q_=gn("bum"),Ko=gn("um"),H_=gn("sp"),z_=gn("rtg"),W_=gn("rtc");function K_(n,e=ct){Wo("ec",n,e)}const G_=Symbol.for("v-ndc");function bd(n,e,t,r){let s;const i=t,a=ne(n);if(a||Me(n)){const c=a&&Fr(n);let l=!1,h=!1;c&&(l=!At(n),h=Bn(n),n=Ho(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?oo(We(n[d])):We(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(be(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}const nc=n=>n?Wd(n)?Jo(n):nc(n.parent):null,Bs=lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nc(n.parent),$root:n=>nc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Rd(n),$forceUpdate:n=>n.f||(n.f=()=>{Qc(n.update)}),$nextTick:n=>n.n||(n.n=_d.bind(n.proxy)),$watch:n=>my.bind(n)}),Oa=(n,e)=>n!==Ie&&!n.__isScriptSetup&&ye(n,e),Q_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;let h;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Oa(r,e))return a[e]=1,r[e];if(s!==Ie&&ye(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&ye(h,e))return a[e]=3,i[e];if(t!==Ie&&ye(t,e))return a[e]=4,t[e];rc&&(a[e]=0)}}const d=Bs[e];let p,m;if(d)return e==="$attrs"&&Ze(n.attrs,"get",""),d(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==Ie&&ye(t,e))return a[e]=4,t[e];if(m=l.config.globalProperties,ye(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Oa(s,e)?(s[e]=t,!0):r!==Ie&&ye(r,e)?(r[e]=t,!0):ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i,type:a}},c){let l,h;return!!(t[c]||n!==Ie&&c[0]!=="$"&&ye(n,c)||Oa(e,c)||(l=i[0])&&ye(l,c)||ye(r,c)||ye(Bs,c)||ye(s.config.globalProperties,c)||(h=a.__cssModules)&&h[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Wu(n){return ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let rc=!0;function J_(n){const e=Rd(n),t=n.proxy,r=n.ctx;rc=!1,e.beforeCreate&&Ku(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:b,updated:D,activated:P,deactivated:V,beforeDestroy:j,beforeUnmount:H,destroyed:K,unmounted:$,render:re,renderTracked:ie,renderTriggered:v,errorCaptured:_,serverPrefetch:T,expose:w,inheritAttrs:I,components:S,directives:y,filters:Ue}=e;if(h&&Y_(h,r,null),a)for(const Se in a){const me=a[Se];ce(me)&&(r[Se]=me.bind(t))}if(s){const Se=s.call(t,t);be(Se)&&(n.data=Wc(Se))}if(rc=!0,i)for(const Se in i){const me=i[Se],Tt=ce(me)?me.bind(t,t):ce(me.get)?me.get.bind(t,t):qt,wr=!ce(me)&&ce(me.set)?me.set.bind(t):qt,xt=Gd({get:Tt,set:wr});Object.defineProperty(r,Se,{enumerable:!0,configurable:!0,get:()=>xt.value,set:dt=>xt.value=dt})}if(c)for(const Se in c)Sd(c[Se],r,t,Se);if(l){const Se=ce(l)?l.call(t):l;Reflect.ownKeys(Se).forEach(me=>{ry(me,Se[me])})}d&&Ku(d,n,"c");function qe(Se,me){ne(me)?me.forEach(Tt=>Se(Tt.bind(t))):me&&Se(me.bind(t))}if(qe(B_,p),qe(Yc,m),qe(j_,b),qe($_,D),qe(L_,P),qe(F_,V),qe(K_,_),qe(W_,ie),qe(z_,v),qe(q_,H),qe(Ko,$),qe(H_,T),ne(w))if(w.length){const Se=n.exposed||(n.exposed={});w.forEach(me=>{Object.defineProperty(Se,me,{get:()=>t[me],set:Tt=>t[me]=Tt,enumerable:!0})})}else n.exposed||(n.exposed={});re&&n.render===qt&&(n.render=re),I!=null&&(n.inheritAttrs=I),S&&(n.components=S),y&&(n.directives=y),T&&Id(n)}function Y_(n,e,t=qt){ne(n)&&(n=sc(n));for(const r in n){const s=n[r];let i;be(s)?"default"in s?i=Hi(s.from||r,s.default,!0):i=Hi(s.from||r):i=Hi(s),tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Ku(n,e,t){Xt(ne(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Sd(n,e,t,r){let s=r.includes(".")?Bd(t,r):()=>t[r];if(Me(n)){const i=e[n];ce(i)&&zi(s,i)}else if(ce(n))zi(s,n.bind(t));else if(be(n))if(ne(n))n.forEach(i=>Sd(i,e,t,r));else{const i=ce(n.handler)?n.handler.bind(t):e[n.handler];ce(i)&&zi(s,i,n)}}function Rd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>ho(l,h,a,!0)),ho(l,e,a)),be(e)&&i.set(e,l),l}function ho(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&ho(n,i,t,!0),s&&s.forEach(a=>ho(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=X_[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const X_={data:Gu,props:Qu,emits:Qu,methods:Vs,computed:Vs,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Vs,directives:Vs,watch:ey,provide:Gu,inject:Z_};function Gu(n,e){return e?n?function(){return lt(ce(n)?n.call(this,this):n,ce(e)?e.call(this,this):e)}:e:n}function Z_(n,e){return Vs(sc(n),sc(e))}function sc(n){if(ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function it(n,e){return n?[...new Set([].concat(n,e))]:e}function Vs(n,e){return n?lt(Object.create(null),n,e):e}function Qu(n,e){return n?ne(n)&&ne(e)?[...new Set([...n,...e])]:lt(Object.create(null),Wu(n),Wu(e??{})):e}function ey(n,e){if(!n)return e;if(!e)return n;const t=lt(Object.create(null),n);for(const r in e)t[r]=it(n[r],e[r]);return t}function Pd(){return{app:null,config:{isNativeTag:Wf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ty=0;function ny(n,e){return function(r,s=null){ce(r)||(r=lt({},r)),s!=null&&!be(s)&&(s=null);const i=Pd(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:ty++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:By,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ce(d.install)?(a.add(d),d.install(h,...p)):ce(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!l){const b=h._ceVNode||Dt(r,s);return b.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(b,d,m),l=!0,h._container=d,d.__vue_app__=h,Jo(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Xt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Br;Br=h;try{return d()}finally{Br=p}}};return h}}let Br=null;function ry(n,e){if(ct){let t=ct.provides;const r=ct.parent&&ct.parent.provides;r===t&&(t=ct.provides=Object.create(r)),t[n]=e}}function Hi(n,e,t=!1){const r=Oy();if(r||Br){let s=Br?Br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ce(e)?e.call(r&&r.proxy):e}}const Cd={},Vd=()=>Object.create(Cd),Dd=n=>Object.getPrototypeOf(n)===Cd;function sy(n,e,t,r=!1){const s={},i=Vd();n.propsDefaults=Object.create(null),kd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:v_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function iy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=_e(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Go(n.emitsOptions,m))continue;const b=e[m];if(l)if(ye(i,m))b!==i[m]&&(i[m]=b,h=!0);else{const D=Un(m);s[D]=ic(l,c,D,b,n,!1)}else b!==i[m]&&(i[m]=b,h=!0)}}}else{kd(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!ye(e,p)&&((d=Er(p))===p||!ye(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=ic(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!ye(e,p))&&(delete i[p],h=!0)}h&&rn(n.attrs,"set","")}function kd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(xs(l))continue;const h=e[l];let d;s&&ye(s,d=Un(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:Go(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=_e(t),h=c||Ie;for(let d=0;d<i.length;d++){const p=i[d];t[p]=ic(s,l,p,h[p],n,!ye(h,p))}}return a}function ic(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=ye(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ce(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=li(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Er(t))&&(r=!0))}return r}const oy=new WeakMap;function Nd(n,e,t=!1){const r=t?oy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!ce(n)){const d=p=>{l=!0;const[m,b]=Nd(p,e,!0);lt(a,m),b&&c.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return be(n)&&r.set(n,Mr),Mr;if(ne(i))for(let d=0;d<i.length;d++){const p=Un(i[d]);Ju(p)&&(a[p]=Ie)}else if(i)for(const d in i){const p=Un(d);if(Ju(p)){const m=i[d],b=a[p]=ne(m)||ce(m)?{type:m}:lt({},m),D=b.type;let P=!1,V=!0;if(ne(D))for(let j=0;j<D.length;++j){const H=D[j],K=ce(H)&&H.name;if(K==="Boolean"){P=!0;break}else K==="String"&&(V=!1)}else P=ce(D)&&D.name==="Boolean";b[0]=P,b[1]=V,(P||ye(b,"default"))&&c.push(p)}}const h=[a,c];return be(n)&&r.set(n,h),h}function Ju(n){return n[0]!=="$"&&!xs(n)}const Xc=n=>n==="_"||n==="_ctx"||n==="$stable",Zc=n=>ne(n)?n.map(jt):[jt(n)],ay=(n,e,t)=>{if(e._n)return e;const r=N_((...s)=>Zc(e(...s)),t);return r._c=!1,r},Od=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Xc(s))continue;const i=n[s];if(ce(i))e[s]=ay(s,i,r);else if(i!=null){const a=Zc(i);e[s]=()=>a}}},xd=(n,e)=>{const t=Zc(e);n.slots.default=()=>t},Md=(n,e,t)=>{for(const r in e)(t||!Xc(r))&&(n[r]=e[r])},cy=(n,e,t)=>{const r=n.slots=Vd();if(n.vnode.shapeFlag&32){const s=e._;s?(Md(r,e,t),t&&Yf(r,"_",s,!0)):Od(e,r)}else e&&xd(n,e)},ly=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ie;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Md(s,e,t):(i=!e.$stable,Od(e,s)),a=e}else e&&(xd(n,e),a={default:1});if(i)for(const c in s)!Xc(c)&&a[c]==null&&delete s[c]},_t=Ay;function uy(n){return hy(n)}function hy(n,e){const t=jo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:b=qt,insertStaticContent:D}=n,P=(E,A,k,B=null,x=null,M=null,z=void 0,U=null,L=!!A.dynamicChildren)=>{if(E===A)return;E&&!Ps(E,A)&&(B=_n(E),dt(E,x,M,!0),E=null),A.patchFlag===-2&&(L=!1,A.dynamicChildren=null);const{type:F,ref:X,shapeFlag:W}=A;switch(F){case Qo:V(E,A,k,B);break;case jn:j(E,A,k,B);break;case Ma:E==null&&H(A,k,B,z);break;case St:S(E,A,k,B,x,M,z,U,L);break;default:W&1?re(E,A,k,B,x,M,z,U,L):W&6?y(E,A,k,B,x,M,z,U,L):(W&64||W&128)&&F.process(E,A,k,B,x,M,z,U,L,Yn)}X!=null&&x?Fs(X,E&&E.ref,M,A||E,!A):X==null&&E&&E.ref!=null&&Fs(E.ref,null,M,E,!0)},V=(E,A,k,B)=>{if(E==null)r(A.el=c(A.children),k,B);else{const x=A.el=E.el;A.children!==E.children&&h(x,A.children)}},j=(E,A,k,B)=>{E==null?r(A.el=l(A.children||""),k,B):A.el=E.el},H=(E,A,k,B)=>{[E.el,E.anchor]=D(E.children,A,k,B,E.el,E.anchor)},K=({el:E,anchor:A},k,B)=>{let x;for(;E&&E!==A;)x=m(E),r(E,k,B),E=x;r(A,k,B)},$=({el:E,anchor:A})=>{let k;for(;E&&E!==A;)k=m(E),s(E),E=k;s(A)},re=(E,A,k,B,x,M,z,U,L)=>{A.type==="svg"?z="svg":A.type==="math"&&(z="mathml"),E==null?ie(A,k,B,x,M,z,U,L):T(E,A,x,M,z,U,L)},ie=(E,A,k,B,x,M,z,U)=>{let L,F;const{props:X,shapeFlag:W,transition:Y,dirs:Z}=E;if(L=E.el=a(E.type,M,X&&X.is,X),W&8?d(L,E.children):W&16&&_(E.children,L,null,B,x,xa(E,M),z,U),Z&&rr(E,null,B,"created"),v(L,E,E.scopeId,z,B),X){for(const Te in X)Te!=="value"&&!xs(Te)&&i(L,Te,null,X[Te],M,B);"value"in X&&i(L,"value",null,X.value,M),(F=X.onVnodeBeforeMount)&&Ft(F,B,E)}Z&&rr(E,null,B,"beforeMount");const ue=fy(x,Y);ue&&Y.beforeEnter(L),r(L,A,k),((F=X&&X.onVnodeMounted)||ue||Z)&&_t(()=>{F&&Ft(F,B,E),ue&&Y.enter(L),Z&&rr(E,null,B,"mounted")},x)},v=(E,A,k,B,x)=>{if(k&&b(E,k),B)for(let M=0;M<B.length;M++)b(E,B[M]);if(x){let M=x.subTree;if(A===M||$d(M.type)&&(M.ssContent===A||M.ssFallback===A)){const z=x.vnode;v(E,z,z.scopeId,z.slotScopeIds,x.parent)}}},_=(E,A,k,B,x,M,z,U,L=0)=>{for(let F=L;F<E.length;F++){const X=E[F]=U?Sn(E[F]):jt(E[F]);P(null,X,A,k,B,x,M,z,U)}},T=(E,A,k,B,x,M,z)=>{const U=A.el=E.el;let{patchFlag:L,dynamicChildren:F,dirs:X}=A;L|=E.patchFlag&16;const W=E.props||Ie,Y=A.props||Ie;let Z;if(k&&sr(k,!1),(Z=Y.onVnodeBeforeUpdate)&&Ft(Z,k,A,E),X&&rr(A,E,k,"beforeUpdate"),k&&sr(k,!0),(W.innerHTML&&Y.innerHTML==null||W.textContent&&Y.textContent==null)&&d(U,""),F?w(E.dynamicChildren,F,U,k,B,xa(A,x),M):z||me(E,A,U,null,k,B,xa(A,x),M,!1),L>0){if(L&16)I(U,W,Y,k,x);else if(L&2&&W.class!==Y.class&&i(U,"class",null,Y.class,x),L&4&&i(U,"style",W.style,Y.style,x),L&8){const ue=A.dynamicProps;for(let Te=0;Te<ue.length;Te++){const ge=ue[Te],Qe=W[ge],Je=Y[ge];(Je!==Qe||ge==="value")&&i(U,ge,Qe,Je,x,k)}}L&1&&E.children!==A.children&&d(U,A.children)}else!z&&F==null&&I(U,W,Y,k,x);((Z=Y.onVnodeUpdated)||X)&&_t(()=>{Z&&Ft(Z,k,A,E),X&&rr(A,E,k,"updated")},B)},w=(E,A,k,B,x,M,z)=>{for(let U=0;U<A.length;U++){const L=E[U],F=A[U],X=L.el&&(L.type===St||!Ps(L,F)||L.shapeFlag&198)?p(L.el):k;P(L,F,X,null,B,x,M,z,!0)}},I=(E,A,k,B,x)=>{if(A!==k){if(A!==Ie)for(const M in A)!xs(M)&&!(M in k)&&i(E,M,A[M],null,x,B);for(const M in k){if(xs(M))continue;const z=k[M],U=A[M];z!==U&&M!=="value"&&i(E,M,U,z,x,B)}"value"in k&&i(E,"value",A.value,k.value,x)}},S=(E,A,k,B,x,M,z,U,L)=>{const F=A.el=E?E.el:c(""),X=A.anchor=E?E.anchor:c("");let{patchFlag:W,dynamicChildren:Y,slotScopeIds:Z}=A;Z&&(U=U?U.concat(Z):Z),E==null?(r(F,k,B),r(X,k,B),_(A.children||[],k,X,x,M,z,U,L)):W>0&&W&64&&Y&&E.dynamicChildren?(w(E.dynamicChildren,Y,k,x,M,z,U),(A.key!=null||x&&A===x.subTree)&&Ld(E,A,!0)):me(E,A,k,X,x,M,z,U,L)},y=(E,A,k,B,x,M,z,U,L)=>{A.slotScopeIds=U,E==null?A.shapeFlag&512?x.ctx.activate(A,k,B,z,L):Ue(A,k,B,x,M,z,L):Ot(E,A,L)},Ue=(E,A,k,B,x,M,z)=>{const U=E.component=Ny(E,B,x);if(wd(E)&&(U.ctx.renderer=Yn),xy(U,!1,z),U.asyncDep){if(x&&x.registerDep(U,qe,z),!E.el){const L=U.subTree=Dt(jn);j(null,L,A,k),E.placeholder=L.el}}else qe(U,E,A,k,x,M,z)},Ot=(E,A,k)=>{const B=A.component=E.component;if(Iy(E,A,k))if(B.asyncDep&&!B.asyncResolved){Se(B,A,k);return}else B.next=A,B.update();else A.el=E.el,B.vnode=A},qe=(E,A,k,B,x,M,z)=>{const U=()=>{if(E.isMounted){let{next:W,bu:Y,u:Z,parent:ue,vnode:Te}=E;{const gt=Fd(E);if(gt){W&&(W.el=Te.el,Se(E,W,z)),gt.asyncDep.then(()=>{E.isUnmounted||U()});return}}let ge=W,Qe;sr(E,!1),W?(W.el=Te.el,Se(E,W,z)):W=Te,Y&&qi(Y),(Qe=W.props&&W.props.onVnodeBeforeUpdate)&&Ft(Qe,ue,W,Te),sr(E,!0);const Je=Xu(E),pt=E.subTree;E.subTree=Je,P(pt,Je,p(pt.el),_n(pt),E,x,M),W.el=Je.el,ge===null&&wy(E,Je.el),Z&&_t(Z,x),(Qe=W.props&&W.props.onVnodeUpdated)&&_t(()=>Ft(Qe,ue,W,Te),x)}else{let W;const{el:Y,props:Z}=A,{bm:ue,m:Te,parent:ge,root:Qe,type:Je}=E,pt=Us(A);sr(E,!1),ue&&qi(ue),!pt&&(W=Z&&Z.onVnodeBeforeMount)&&Ft(W,ge,A),sr(E,!0);{Qe.ce&&Qe.ce._def.shadowRoot!==!1&&Qe.ce._injectChildStyle(Je);const gt=E.subTree=Xu(E);P(null,gt,k,B,E,x,M),A.el=gt.el}if(Te&&_t(Te,x),!pt&&(W=Z&&Z.onVnodeMounted)){const gt=A;_t(()=>Ft(W,ge,gt),x)}(A.shapeFlag&256||ge&&Us(ge.vnode)&&ge.vnode.shapeFlag&256)&&E.a&&_t(E.a,x),E.isMounted=!0,A=k=B=null}};E.scope.on();const L=E.effect=new td(U);E.scope.off();const F=E.update=L.run.bind(L),X=E.job=L.runIfDirty.bind(L);X.i=E,X.id=E.uid,L.scheduler=()=>Qc(X),sr(E,!0),F()},Se=(E,A,k)=>{A.component=E;const B=E.vnode.props;E.vnode=A,E.next=null,iy(E,A.props,B,k),ly(E,A.children,k),cn(),Hu(E),ln()},me=(E,A,k,B,x,M,z,U,L=!1)=>{const F=E&&E.children,X=E?E.shapeFlag:0,W=A.children,{patchFlag:Y,shapeFlag:Z}=A;if(Y>0){if(Y&128){wr(F,W,k,B,x,M,z,U,L);return}else if(Y&256){Tt(F,W,k,B,x,M,z,U,L);return}}Z&8?(X&16&&en(F,x,M),W!==F&&d(k,W)):X&16?Z&16?wr(F,W,k,B,x,M,z,U,L):en(F,x,M,!0):(X&8&&d(k,""),Z&16&&_(W,k,B,x,M,z,U,L))},Tt=(E,A,k,B,x,M,z,U,L)=>{E=E||Mr,A=A||Mr;const F=E.length,X=A.length,W=Math.min(F,X);let Y;for(Y=0;Y<W;Y++){const Z=A[Y]=L?Sn(A[Y]):jt(A[Y]);P(E[Y],Z,k,null,x,M,z,U,L)}F>X?en(E,x,M,!0,!1,W):_(A,k,B,x,M,z,U,L,W)},wr=(E,A,k,B,x,M,z,U,L)=>{let F=0;const X=A.length;let W=E.length-1,Y=X-1;for(;F<=W&&F<=Y;){const Z=E[F],ue=A[F]=L?Sn(A[F]):jt(A[F]);if(Ps(Z,ue))P(Z,ue,k,null,x,M,z,U,L);else break;F++}for(;F<=W&&F<=Y;){const Z=E[W],ue=A[Y]=L?Sn(A[Y]):jt(A[Y]);if(Ps(Z,ue))P(Z,ue,k,null,x,M,z,U,L);else break;W--,Y--}if(F>W){if(F<=Y){const Z=Y+1,ue=Z<X?A[Z].el:B;for(;F<=Y;)P(null,A[F]=L?Sn(A[F]):jt(A[F]),k,ue,x,M,z,U,L),F++}}else if(F>Y)for(;F<=W;)dt(E[F],x,M,!0),F++;else{const Z=F,ue=F,Te=new Map;for(F=ue;F<=Y;F++){const He=A[F]=L?Sn(A[F]):jt(A[F]);He.key!=null&&Te.set(He.key,F)}let ge,Qe=0;const Je=Y-ue+1;let pt=!1,gt=0;const bt=new Array(Je);for(F=0;F<Je;F++)bt[F]=0;for(F=Z;F<=W;F++){const He=E[F];if(Qe>=Je){dt(He,x,M,!0);continue}let Be;if(He.key!=null)Be=Te.get(He.key);else for(ge=ue;ge<=Y;ge++)if(bt[ge-ue]===0&&Ps(He,A[ge])){Be=ge;break}Be===void 0?dt(He,x,M,!0):(bt[Be-ue]=F+1,Be>=gt?gt=Be:pt=!0,P(He,A[Be],k,null,x,M,z,U,L),Qe++)}const br=pt?dy(bt):Mr;for(ge=br.length-1,F=Je-1;F>=0;F--){const He=ue+F,Be=A[He],hs=A[He+1],Xn=He+1<X?hs.el||hs.placeholder:B;bt[F]===0?P(null,Be,k,Xn,x,M,z,U,L):pt&&(ge<0||F!==br[ge]?xt(Be,k,Xn,2):ge--)}}},xt=(E,A,k,B,x=null)=>{const{el:M,type:z,transition:U,children:L,shapeFlag:F}=E;if(F&6){xt(E.component.subTree,A,k,B);return}if(F&128){E.suspense.move(A,k,B);return}if(F&64){z.move(E,A,k,Yn);return}if(z===St){r(M,A,k);for(let W=0;W<L.length;W++)xt(L[W],A,k,B);r(E.anchor,A,k);return}if(z===Ma){K(E,A,k);return}if(B!==2&&F&1&&U)if(B===0)U.beforeEnter(M),r(M,A,k),_t(()=>U.enter(M),x);else{const{leave:W,delayLeave:Y,afterLeave:Z}=U,ue=()=>{E.ctx.isUnmounted?s(M):r(M,A,k)},Te=()=>{M._isLeaving&&M[M_](!0),W(M,()=>{ue(),Z&&Z()})};Y?Y(M,ue,Te):Te()}else r(M,A,k)},dt=(E,A,k,B=!1,x=!1)=>{const{type:M,props:z,ref:U,children:L,dynamicChildren:F,shapeFlag:X,patchFlag:W,dirs:Y,cacheIndex:Z}=E;if(W===-2&&(x=!1),U!=null&&(cn(),Fs(U,null,k,E,!0),ln()),Z!=null&&(A.renderCache[Z]=void 0),X&256){A.ctx.deactivate(E);return}const ue=X&1&&Y,Te=!Us(E);let ge;if(Te&&(ge=z&&z.onVnodeBeforeUnmount)&&Ft(ge,A,E),X&6)ls(E.component,k,B);else{if(X&128){E.suspense.unmount(k,B);return}ue&&rr(E,null,A,"beforeUnmount"),X&64?E.type.remove(E,A,k,Yn,B):F&&!F.hasOnce&&(M!==St||W>0&&W&64)?en(F,A,k,!1,!0):(M===St&&W&384||!x&&X&16)&&en(L,A,k),B&&cs(E)}(Te&&(ge=z&&z.onVnodeUnmounted)||ue)&&_t(()=>{ge&&Ft(ge,A,E),ue&&rr(E,null,A,"unmounted")},k)},cs=E=>{const{type:A,el:k,anchor:B,transition:x}=E;if(A===St){Ar(k,B);return}if(A===Ma){$(E);return}const M=()=>{s(k),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(E.shapeFlag&1&&x&&!x.persisted){const{leave:z,delayLeave:U}=x,L=()=>z(k,M);U?U(E.el,M,L):L()}else M()},Ar=(E,A)=>{let k;for(;E!==A;)k=m(E),s(E),E=k;s(A)},ls=(E,A,k)=>{const{bum:B,scope:x,job:M,subTree:z,um:U,m:L,a:F}=E;Yu(L),Yu(F),B&&qi(B),x.stop(),M&&(M.flags|=8,dt(z,E,A,k)),U&&_t(U,A),_t(()=>{E.isUnmounted=!0},A)},en=(E,A,k,B=!1,x=!1,M=0)=>{for(let z=M;z<E.length;z++)dt(E[z],A,k,B,x)},_n=E=>{if(E.shapeFlag&6)return _n(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const A=m(E.anchor||E.el),k=A&&A[O_];return k?m(k):A};let Jn=!1;const us=(E,A,k)=>{E==null?A._vnode&&dt(A._vnode,null,null,!0):P(A._vnode||null,E,A,null,null,null,k),A._vnode=E,Jn||(Jn=!0,Hu(),Ed(),Jn=!1)},Yn={p:P,um:dt,m:xt,r:cs,mt:Ue,mc:_,pc:me,pbc:w,n:_n,o:n};return{render:us,hydrate:void 0,createApp:ny(us)}}function xa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function sr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function fy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ld(n,e,t=!1){const r=n.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Sn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Ld(a,c)),c.type===Qo&&c.patchFlag!==-1&&(c.el=a.el),c.type===jn&&!c.el&&(c.el=a.el)}}function dy(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Fd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fd(e)}function Yu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const py=Symbol.for("v-scx"),gy=()=>Hi(py);function zi(n,e,t){return Ud(n,e,t)}function Ud(n,e,t=Ie){const{immediate:r,deep:s,flush:i,once:a}=t,c=lt({},t),l=e&&r||!e&&i!=="post";let h;if(Xs){if(i==="sync"){const b=gy();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=qt,b.resume=qt,b.pause=qt,b}}const d=ct;c.call=(b,D,P)=>Xt(b,d,D,P);let p=!1;i==="post"?c.scheduler=b=>{_t(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,D)=>{D?b():Qc(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const m=C_(n,e,c);return Xs&&(h?h.push(m):l&&m()),m}function my(n,e,t){const r=this.proxy,s=Me(n)?n.includes(".")?Bd(r,n):()=>r[n]:n.bind(r,r);let i;ce(e)?i=e:(i=e.handler,t=e);const a=li(this),c=Ud(s,i.bind(r),t);return a(),c}function Bd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const _y=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Un(e)}Modifiers`]||n[`${Er(e)}Modifiers`];function yy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ie;let s=t;const i=e.startsWith("update:"),a=i&&_y(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Me(d)?d.trim():d)),a.number&&(s=t.map(io)));let c,l=r[c=Ca(e)]||r[c=Ca(Un(e))];!l&&i&&(l=r[c=Ca(Er(e))]),l&&Xt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Xt(h,n,6,s)}}const Ey=new WeakMap;function jd(n,e,t=!1){const r=t?Ey:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!ce(n)){const l=h=>{const d=jd(h,e,!0);d&&(c=!0,lt(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(be(n)&&r.set(n,null),null):(ne(i)?i.forEach(l=>a[l]=null):lt(a,i),be(n)&&r.set(n,a),a)}function Go(n,e){return!n||!Fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(n,e[0].toLowerCase()+e.slice(1))||ye(n,Er(e))||ye(n,e))}function Xu(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:b,ctx:D,inheritAttrs:P}=n,V=lo(n);let j,H;try{if(t.shapeFlag&4){const $=s||r,re=$;j=jt(h.call(re,$,d,p,b,m,D)),H=c}else{const $=e;j=jt($.length>1?$(p,{attrs:c,slots:a,emit:l}):$(p,null)),H=e.props?c:Ty(c)}}catch($){js.length=0,zo($,n,1),j=Dt(jn)}let K=j;if(H&&P!==!1){const $=Object.keys(H),{shapeFlag:re}=K;$.length&&re&7&&(i&&$.some(Lc)&&(H=vy(H,i)),K=Wr(K,H,!1,!0))}return t.dirs&&(K=Wr(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition&&Jc(K,t.transition),j=K,lo(V),j}const Ty=n=>{let e;for(const t in n)(t==="class"||t==="style"||Fo(t))&&((e||(e={}))[t]=n[t]);return e},vy=(n,e)=>{const t={};for(const r in n)(!Lc(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Iy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Zu(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!Go(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Zu(r,a,h):!0:!!a;return!1}function Zu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Go(t,i))return!0}return!1}function wy({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const $d=n=>n.__isSuspense;function Ay(n,e){e&&e.pendingBranch?ne(n)?e.effects.push(...n):e.effects.push(n):k_(n)}const St=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),jn=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),js=[];let yt=null;function vt(n=!1){js.push(yt=n?null:[])}function by(){js.pop(),yt=js[js.length-1]||null}let Ys=1;function eh(n,e=!1){Ys+=n,n<0&&yt&&e&&(yt.hasOnce=!0)}function qd(n){return n.dynamicChildren=Ys>0?yt||Mr:null,by(),Ys>0&&yt&&yt.push(n),n}function Pt(n,e,t,r,s,i){return qd(oe(n,e,t,r,s,i,!0))}function Sy(n,e,t,r,s){return qd(Dt(n,e,t,r,s,!0))}function Hd(n){return n?n.__v_isVNode===!0:!1}function Ps(n,e){return n.type===e.type&&n.key===e.key}const zd=({key:n})=>n??null,Wi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||tt(n)||ce(n)?{i:wt,r:n,k:e,f:!!t}:n:null);function oe(n,e=null,t=null,r=0,s=null,i=n===St?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&zd(e),ref:e&&Wi(e),scopeId:vd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wt};return c?(el(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=Me(t)?8:16),Ys>0&&!a&&yt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&yt.push(l),l}const Dt=Ry;function Ry(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===G_)&&(n=jn),Hd(n)){const c=Wr(n,e,!0);return t&&el(c,t),Ys>0&&!i&&yt&&(c.shapeFlag&6?yt[yt.indexOf(n)]=c:yt.push(c)),c.patchFlag=-2,c}if(Uy(n)&&(n=n.__vccOpts),e){e=Py(e);let{class:c,style:l}=e;c&&!Me(c)&&(e.class=$o(c)),be(l)&&(Gc(l)&&!ne(l)&&(l=lt({},l)),e.style=Bc(l))}const a=Me(n)?1:$d(n)?128:x_(n)?64:be(n)?4:ce(n)?2:0;return oe(n,e,t,r,s,a,i,!0)}function Py(n){return n?Gc(n)||Dd(n)?lt({},n):n:null}function Wr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?Vy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&zd(h),ref:e&&e.ref?t&&i?ne(i)?i.concat(Wi(e)):[i,Wi(e)]:Wi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==St?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Wr(n.ssContent),ssFallback:n.ssFallback&&Wr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Jc(d,l.clone(d)),d}function Cy(n=" ",e=0){return Dt(Qo,null,n,e)}function fo(n="",e=!1){return e?(vt(),Sy(jn,null,n)):Dt(jn,null,n)}function jt(n){return n==null||typeof n=="boolean"?Dt(jn):ne(n)?Dt(St,null,n.slice()):Hd(n)?Sn(n):Dt(Qo,null,String(n))}function Sn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Wr(n)}function el(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ne(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),el(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Dd(e)?e._ctx=wt:s===3&&wt&&(wt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:wt},t=32):(e=String(e),r&64?(t=16,e=[Cy(e)]):t=8);n.children=e,n.shapeFlag|=t}function Vy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$o([e.class,r.class]));else if(s==="style")e.style=Bc([e.style,r.style]);else if(Fo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ne(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ft(n,e,t,r=null){Xt(n,e,7,[t,r])}const Dy=Pd();let ky=0;function Ny(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Dy,i={uid:ky++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new t_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nd(r,s),emitsOptions:jd(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yy.bind(null,i),n.ce&&n.ce(i),i}let ct=null;const Oy=()=>ct||wt;let po,oc;{const n=jo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};po=e("__VUE_INSTANCE_SETTERS__",t=>ct=t),oc=e("__VUE_SSR_SETTERS__",t=>Xs=t)}const li=n=>{const e=ct;return po(n),n.scope.on(),()=>{n.scope.off(),po(e)}},th=()=>{ct&&ct.scope.off(),po(null)};function Wd(n){return n.vnode.shapeFlag&4}let Xs=!1;function xy(n,e=!1,t=!1){e&&oc(e);const{props:r,children:s}=n.vnode,i=Wd(n);sy(n,r,i,e),cy(n,s,t||e);const a=i?My(n,e):void 0;return e&&oc(!1),a}function My(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Q_);const{setup:r}=t;if(r){cn();const s=n.setupContext=r.length>1?Fy(n):null,i=li(n),a=ci(r,n,0,[n.props,s]),c=Kf(a);if(ln(),i(),(c||n.sp)&&!Us(n)&&Id(n),c){if(a.then(th,th),e)return a.then(l=>{nh(n,l)}).catch(l=>{zo(l,n,0)});n.asyncDep=a}else nh(n,a)}else Kd(n)}function nh(n,e,t){ce(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:be(e)&&(n.setupState=gd(e)),Kd(n)}function Kd(n,e,t){const r=n.type;n.render||(n.render=r.render||qt);{const s=li(n);cn();try{J_(n)}finally{ln(),s()}}}const Ly={get(n,e){return Ze(n,"get",""),n[e]}};function Fy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ly),slots:n.slots,emit:n.emit,expose:e}}function Jo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(gd(I_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Bs)return Bs[t](n)},has(e,t){return t in e||t in Bs}})):n.proxy}function Uy(n){return ce(n)&&"__vccOpts"in n}const Gd=(n,e)=>R_(n,e,Xs),By="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ac;const rh=typeof window<"u"&&window.trustedTypes;if(rh)try{ac=rh.createPolicy("vue",{createHTML:n=>n})}catch{}const Qd=ac?n=>ac.createHTML(n):n=>n,jy="http://www.w3.org/2000/svg",$y="http://www.w3.org/1998/Math/MathML",nn=typeof document<"u"?document:null,sh=nn&&nn.createElement("template"),qy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?nn.createElementNS(jy,n):e==="mathml"?nn.createElementNS($y,n):t?nn.createElement(n,{is:t}):nn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>nn.createTextNode(n),createComment:n=>nn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>nn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{sh.innerHTML=Qd(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=sh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Hy=Symbol("_vtc");function zy(n,e,t){const r=n[Hy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ih=Symbol("_vod"),Wy=Symbol("_vsh"),Ky=Symbol(""),Gy=/(?:^|;)\s*display\s*:/;function Qy(n,e,t){const r=n.style,s=Me(t);let i=!1;if(t&&!s){if(e)if(Me(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&Ki(r,c,"")}else for(const a in e)t[a]==null&&Ki(r,a,"");for(const a in t)a==="display"&&(i=!0),Ki(r,a,t[a])}else if(s){if(e!==t){const a=r[Ky];a&&(t+=";"+a),r.cssText=t,i=Gy.test(t)}}else e&&n.removeAttribute("style");ih in n&&(n[ih]=i?r.display:"",n[Wy]&&(r.display="none"))}const oh=/\s*!important$/;function Ki(n,e,t){if(ne(t))t.forEach(r=>Ki(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Jy(n,e);oh.test(t)?n.setProperty(Er(r),t.replace(oh,""),"important"):n[r]=t}}const ah=["Webkit","Moz","ms"],La={};function Jy(n,e){const t=La[e];if(t)return t;let r=Un(e);if(r!=="filter"&&r in n)return La[e]=r;r=Jf(r);for(let s=0;s<ah.length;s++){const i=ah[s]+r;if(i in n)return La[e]=i}return e}const ch="http://www.w3.org/1999/xlink";function lh(n,e,t,r,s,i=Xm(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ch,e.slice(6,e.length)):n.setAttributeNS(ch,e,t):t==null||i&&!Xf(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Yt(t)?String(t):t)}function uh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Qd(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Xf(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function ar(n,e,t,r){n.addEventListener(e,t,r)}function Yy(n,e,t,r){n.removeEventListener(e,t,r)}const hh=Symbol("_vei");function Xy(n,e,t,r,s=null){const i=n[hh]||(n[hh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Zy(e);if(r){const h=i[e]=nE(r,s);ar(n,c,h,l)}else a&&(Yy(n,c,a,l),i[e]=void 0)}}const fh=/(?:Once|Passive|Capture)$/;function Zy(n){let e;if(fh.test(n)){e={};let r;for(;r=n.match(fh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Er(n.slice(2)),e]}let Fa=0;const eE=Promise.resolve(),tE=()=>Fa||(eE.then(()=>Fa=0),Fa=Date.now());function nE(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Xt(rE(r,t.value),e,5,[r])};return t.value=n,t.attached=tE(),t}function rE(n,e){if(ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const dh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,sE=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?zy(n,r,a):e==="style"?Qy(n,t,r):Fo(e)?Lc(e)||Xy(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iE(n,e,r,a))?(uh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lh(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Me(r))?uh(n,Un(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),lh(n,e,r,a))};function iE(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&dh(e)&&ce(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dh(e)&&Me(t)?!1:e in n}const go=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ne(e)?t=>qi(e,t):e};function oE(n){n.target.composing=!0}function ph(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jr=Symbol("_assign"),xi={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[jr]=go(s);const i=r||s.props&&s.props.type==="number";ar(n,e?"change":"input",a=>{if(a.target.composing)return;let c=n.value;t&&(c=c.trim()),i&&(c=io(c)),n[jr](c)}),t&&ar(n,"change",()=>{n.value=n.value.trim()}),e||(ar(n,"compositionstart",oE),ar(n,"compositionend",ph),ar(n,"change",ph))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[jr]=go(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?io(n.value):n.value,l=e??"";c!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},aE={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const s=Uo(e);ar(n,"change",()=>{const i=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?io(mo(a)):mo(a));n[jr](n.multiple?s?new Set(i):i:i[0]),n._assigning=!0,_d(()=>{n._assigning=!1})}),n[jr]=go(r)},mounted(n,{value:e}){gh(n,e)},beforeUpdate(n,e,t){n[jr]=go(t)},updated(n,{value:e}){n._assigning||gh(n,e)}};function gh(n,e){const t=n.multiple,r=ne(e);if(!(t&&!r&&!Uo(e))){for(let s=0,i=n.options.length;s<i;s++){const a=n.options[s],c=mo(a);if(t)if(r){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(h=>String(h)===String(c)):a.selected=e_(e,c)>-1}else a.selected=e.has(c);else if(qo(mo(a),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function mo(n){return"_value"in n?n._value:n.value}const cE=["ctrl","shift","alt","meta"],lE={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>cE.some(t=>n[`${t}Key`]&&!e.includes(t))},Jd=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=lE[e[a]];if(c&&c(s,e))return}return n(s,...i)})},uE=lt({patchProp:sE},qy);let mh;function hE(){return mh||(mh=uy(uE))}const fE=(...n)=>{const e=hE().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=pE(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,dE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function dE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function pE(n){return Me(n)?document.querySelector(n):n}const gE="cb053df10ee265cc352d6f92f4942439";let Mi=null;function _o(){return typeof window>"u"?Promise.reject(new Error("window is undefined")):window.kakao&&window.kakao.maps?Promise.resolve({kakao:window.kakao}):Mi||(Mi=new Promise((n,e)=>{const t=document.createElement("script"),r=`https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${gE}&libraries=services`;t.src=r,t.async=!0,t.onload=()=>{window.kakao.maps.load(()=>n({kakao:window.kakao}))},t.onerror=()=>e(new Error("카카오 지도 스크립트 로드 실패")),document.head.appendChild(t)}),Mi)}async function mE(n){const{kakao:e}=await _o();return new Promise(t=>{new e.maps.services.Geocoder().addressSearch(n,(s,i)=>{if(i===e.maps.services.Status.OK&&s&&s.length>0){const{y:a,x:c}=s[0];t({lat:parseFloat(a),lng:parseFloat(c)})}else t(null)})})}const tl=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},_E={key:0,class:"address-results"},yE=["onClick"],EE={class:"address-main"},TE={class:"address-detail"},vE=["disabled"],IE={key:1,class:"error"},wE={__name:"HospitalForm",emits:["added"],setup(n,{emit:e}){const t=e,r=ot("2024"),s=ot(""),i=ot(""),a=ot(""),c=ot([]),l=ot(0),h=ot(!1),d=ot("");async function p(){if(!a.value||a.value.length<2){c.value=[];return}try{const{kakao:D}=await _o(),P=new D.maps.services.Places,V=new D.maps.services.Geocoder;P.keywordSearch(a.value,(j,H)=>{if(H===D.maps.services.Status.OK){let K=j.filter($=>{const re=$.place_name,ie=$.category_name;return ie.includes("의료")||ie.includes("병원")||ie.includes("장애인복지시설")||ie.includes("직업전문교육")||ie.includes("사회복지시설")||ie.includes("사회복지단체")||re.includes("병원")||re.includes("의원")||re.toLowerCase().includes("clinic")||re.includes("센터")});if(K.length>0){c.value=K.slice(0,50);return}}V.addressSearch(a.value,(K,$)=>{if($===D.maps.services.Status.OK&&K.length>0){const re=K.map(ie=>({place_name:"(주소 검색 결과)",address_name:ie.address_name,y:ie.y,x:ie.x,category_name:"주소"}));c.value=re}else c.value=[]})})}catch(D){console.error("검색 오류:",D),c.value=[]}}function m(D){s.value=D.place_name,i.value=D.address_name,a.value="",c.value=[]}async function b(){if(!(!r.value||!s.value||!i.value||l.value==null))try{h.value=!0,d.value="";const{kakao:D}=await _o();new D.maps.services.Geocoder().addressSearch(i.value,(V,j)=>{if(j===D.maps.services.Status.OK&&V&&V.length>0){const{y:H,x:K}=V[0];t("added",{YEAR:r.value,HOSPITAL_NM:s.value,ADDR:i.value,NUM:l.value??0,lat:parseFloat(H),lng:parseFloat(K)}),r.value="",s.value="",i.value="",a.value="",l.value=0}else d.value="주소를 찾을 수 없습니다.";h.value=!1})}catch(D){d.value=(D==null?void 0:D.message)||"등록 중 오류가 발생했습니다.",h.value=!1}}return(D,P)=>(vt(),Pt("form",{class:"form",onSubmit:Jd(b,["prevent"])},[oe("label",null,[P[6]||(P[6]=oe("span",null,"등록 연도",-1)),Rs(oe("select",{"onUpdate:modelValue":P[0]||(P[0]=V=>r.value=V),required:""},[...P[5]||(P[5]=[oe("option",{value:"2024"},"2024년",-1),oe("option",{value:"2025"},"2025년",-1)])],512),[[aE,r.value]])]),oe("label",null,[P[7]||(P[7]=oe("span",null,"병원 주소 검색",-1)),Rs(oe("input",{"onUpdate:modelValue":P[1]||(P[1]=V=>a.value=V),onInput:p,placeholder:"주소를 입력하세요 (예: 서울특별시 강남구)"},null,544),[[xi,a.value,void 0,{trim:!0}]])]),oe("label",null,[P[8]||(P[8]=oe("span",null,"병원 이름",-1)),Rs(oe("input",{"onUpdate:modelValue":P[2]||(P[2]=V=>s.value=V),required:"",placeholder:"예) 행복병원"},null,512),[[xi,s.value,void 0,{trim:!0}]])]),c.value.length>0?(vt(),Pt("div",_E,[(vt(!0),Pt(St,null,bd(c.value,(V,j)=>(vt(),Pt("div",{key:j,class:"address-item",onClick:H=>m(V)},[oe("div",EE,Rt(V.place_name),1),oe("div",TE,Rt(V.address_name),1)],8,yE))),128))])):fo("",!0),oe("label",null,[P[9]||(P[9]=oe("span",null,"병원 주소",-1)),Rs(oe("input",{"onUpdate:modelValue":P[3]||(P[3]=V=>i.value=V),required:"",placeholder:"주소를 검색하여 선택하세요",readonly:""},null,512),[[xi,i.value,void 0,{trim:!0}]])]),oe("label",null,[P[10]||(P[10]=oe("span",null,"모집인원 수",-1)),Rs(oe("input",{"onUpdate:modelValue":P[4]||(P[4]=V=>l.value=V),type:"number",min:"0",required:""},null,512),[[xi,l.value,void 0,{number:!0}]])]),oe("button",{disabled:h.value},Rt(h.value?"등록 중…":"등록"),9,vE),d.value?(vt(),Pt("p",IE,Rt(d.value),1)):fo("",!0)],32))}},AE=tl(wE,[["__scopeId","data-v-f26643ce"]]),bE=()=>{};var _h={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},SE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Xd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(m=64)),r.push(t[d],t[p],t[m],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):SE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new RE;const m=i<<2|c>>4;if(r.push(m),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class RE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PE=function(n){const e=Yd(n);return Xd.encodeByteArray(e,!0)},yo=function(n){return PE(n).replace(/\./g,"")},Zd=function(n){try{return Xd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=()=>CE().__FIREBASE_DEFAULTS__,DE=()=>{if(typeof process>"u"||typeof _h>"u")return;const n=_h.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zd(n[1]);return e&&JSON.parse(e)},Yo=()=>{try{return bE()||VE()||DE()||kE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ep=n=>{var e,t;return(t=(e=Yo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},NE=n=>{const e=ep(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tp=()=>{var n;return(n=Yo())==null?void 0:n.config},np=n=>{var e;return(e=Yo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rp(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[yo(JSON.stringify(t)),yo(JSON.stringify(a)),""].join(".")}const $s={};function ME(){const n={prod:[],emulator:[]};for(const e of Object.keys($s))$s[e]?n.emulator.push(e):n.prod.push(e);return n}function LE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let yh=!1;function sp(n,e){if(typeof window>"u"||typeof document>"u"||!ts(window.location.host)||$s[n]===e||$s[n]||yh)return;$s[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=ME().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,b){m.setAttribute("width","24"),m.setAttribute("id",b),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{yh=!0,a()},m}function d(m,b){m.setAttribute("id",b),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=LE(r),b=t("text"),D=document.getElementById(b)||document.createElement("span"),P=t("learnmore"),V=document.getElementById(P)||document.createElement("a"),j=t("preprendIcon"),H=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const K=m.element;c(K),d(V,P);const $=h();l(H,j),K.append(H,D,V,$),document.body.appendChild(K)}i?(D.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function UE(){var e;const n=(e=Yo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $E(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qE(){const n=nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function HE(){return!UE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zE(){try{return typeof indexedDB=="object"}catch{return!1}}function WE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="FirebaseError";class mn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=KE,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?GE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new mn(s,c,r)}}function GE(n,e){return n.replace(QE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const QE=/\{\$([^}]+)}/g;function JE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Eh(i)&&Eh(a)){if(!dr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Eh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function YE(n,e){const t=new XE(n,e);return t.subscribe.bind(t)}class XE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ZE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ua),s.error===void 0&&(s.error=Ua),s.complete===void 0&&(s.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ua(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n){return n&&n._delegate?n._delegate:n}class pr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new OE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nT(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tT(n){return n===or?void 0:n}function nT(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const sT={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},iT=he.INFO,oT={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},aT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=oT[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nl{constructor(e){this.name=e,this._logLevel=iT,this._logHandler=aT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const cT=(n,e)=>e.some(t=>n instanceof t);let Th,vh;function lT(){return Th||(Th=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uT(){return vh||(vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ip=new WeakMap,cc=new WeakMap,op=new WeakMap,Ba=new WeakMap,rl=new WeakMap;function hT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Nn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ip.set(t,n)}).catch(()=>{}),rl.set(e,n),e}function fT(n){if(cc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});cc.set(n,e)}let lc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return cc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||op.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dT(n){lc=n(lc)}function pT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ja(this),e,...t);return op.set(r,e.sort?e.sort():[e]),Nn(r)}:uT().includes(n)?function(...e){return n.apply(ja(this),e),Nn(ip.get(this))}:function(...e){return Nn(n.apply(ja(this),e))}}function gT(n){return typeof n=="function"?pT(n):(n instanceof IDBTransaction&&fT(n),cT(n,lT())?new Proxy(n,lc):n)}function Nn(n){if(n instanceof IDBRequest)return hT(n);if(Ba.has(n))return Ba.get(n);const e=gT(n);return e!==n&&(Ba.set(n,e),rl.set(e,n)),e}const ja=n=>rl.get(n);function mT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Nn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Nn(a.result),l.oldVersion,l.newVersion,Nn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const _T=["get","getKey","getAll","getAllKeys","count"],yT=["put","add","delete","clear"],$a=new Map;function Ih(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_T.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return $a.set(e,i),i}dT(n=>({...n,get:(e,t,r)=>Ih(e,t)||n.get(e,t,r),has:(e,t)=>!!Ih(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(TT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function TT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uc="@firebase/app",wh="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new nl("@firebase/app"),vT="@firebase/app-compat",IT="@firebase/analytics-compat",wT="@firebase/analytics",AT="@firebase/app-check-compat",bT="@firebase/app-check",ST="@firebase/auth",RT="@firebase/auth-compat",PT="@firebase/database",CT="@firebase/data-connect",VT="@firebase/database-compat",DT="@firebase/functions",kT="@firebase/functions-compat",NT="@firebase/installations",OT="@firebase/installations-compat",xT="@firebase/messaging",MT="@firebase/messaging-compat",LT="@firebase/performance",FT="@firebase/performance-compat",UT="@firebase/remote-config",BT="@firebase/remote-config-compat",jT="@firebase/storage",$T="@firebase/storage-compat",qT="@firebase/firestore",HT="@firebase/ai",zT="@firebase/firestore-compat",WT="firebase",KT="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="[DEFAULT]",GT={[uc]:"fire-core",[vT]:"fire-core-compat",[wT]:"fire-analytics",[IT]:"fire-analytics-compat",[bT]:"fire-app-check",[AT]:"fire-app-check-compat",[ST]:"fire-auth",[RT]:"fire-auth-compat",[PT]:"fire-rtdb",[CT]:"fire-data-connect",[VT]:"fire-rtdb-compat",[DT]:"fire-fn",[kT]:"fire-fn-compat",[NT]:"fire-iid",[OT]:"fire-iid-compat",[xT]:"fire-fcm",[MT]:"fire-fcm-compat",[LT]:"fire-perf",[FT]:"fire-perf-compat",[UT]:"fire-rc",[BT]:"fire-rc-compat",[jT]:"fire-gcs",[$T]:"fire-gcs-compat",[qT]:"fire-fst",[zT]:"fire-fst-compat",[HT]:"fire-vertex","fire-js":"fire-js",[WT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Map,QT=new Map,fc=new Map;function Ah(n,e){try{n.container.addComponent(e)}catch(t){un.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kr(n){const e=n.name;if(fc.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;fc.set(e,n);for(const t of Eo.values())Ah(t,n);for(const t of QT.values())Ah(t,n);return!0}function sl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $t(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new ui("app","Firebase",JT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=KT;function ap(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:hc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw On.create("bad-app-name",{appName:String(s)});if(t||(t=tp()),!t)throw On.create("no-options");const i=Eo.get(s);if(i){if(dr(t,i.options)&&dr(r,i.config))return i;throw On.create("duplicate-app",{appName:s})}const a=new rT(s);for(const l of fc.values())a.addComponent(l);const c=new YT(t,r,a);return Eo.set(s,c),c}function cp(n=hc){const e=Eo.get(n);if(!e&&n===hc&&tp())return ap();if(!e)throw On.create("no-app",{appName:n});return e}function xn(n,e,t){let r=GT[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}Kr(new pr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="firebase-heartbeat-database",ZT=1,Zs="firebase-heartbeat-store";let qa=null;function lp(){return qa||(qa=mT(XT,ZT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw On.create("idb-open",{originalErrorMessage:n.message})})),qa}async function ev(n){try{const t=(await lp()).transaction(Zs),r=await t.objectStore(Zs).get(up(n));return await t.done,r}catch(e){if(e instanceof mn)un.warn(e.message);else{const t=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});un.warn(t.message)}}}async function bh(n,e){try{const r=(await lp()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,up(n)),await r.done}catch(t){if(t instanceof mn)un.warn(t.message);else{const r=On.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});un.warn(r.message)}}}function up(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=1024,nv=30;class rv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>nv){const a=ov(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sh(),{heartbeatsToSend:r,unsentEntries:s}=sv(this._heartbeatsCache.heartbeats),i=yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return un.warn(t),""}}}function Sh(){return new Date().toISOString().substring(0,10)}function sv(n,e=tv){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Rh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Rh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class iv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zE()?WE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ev(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rh(n){return yo(JSON.stringify({version:2,heartbeats:n})).length}function ov(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n){Kr(new pr("platform-logger",e=>new ET(e),"PRIVATE")),Kr(new pr("heartbeat",e=>new rv(e),"PRIVATE")),xn(uc,wh,n),xn(uc,wh,"esm2020"),xn("fire-js","")}av("");var Ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mn,hp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function T(){}T.prototype=_.prototype,v.F=_.prototype,v.prototype=new T,v.prototype.constructor=v,v.D=function(w,I,S){for(var y=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)y[Ue-2]=arguments[Ue];return _.prototype[I].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,T){T||(T=0);const w=Array(16);if(typeof _=="string")for(var I=0;I<16;++I)w[I]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(I=0;I<16;++I)w[I]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=v.g[0],T=v.g[1],I=v.g[2];let S=v.g[3],y;y=_+(S^T&(I^S))+w[0]+3614090360&4294967295,_=T+(y<<7&4294967295|y>>>25),y=S+(I^_&(T^I))+w[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=I+(T^S&(_^T))+w[2]+606105819&4294967295,I=S+(y<<17&4294967295|y>>>15),y=T+(_^I&(S^_))+w[3]+3250441966&4294967295,T=I+(y<<22&4294967295|y>>>10),y=_+(S^T&(I^S))+w[4]+4118548399&4294967295,_=T+(y<<7&4294967295|y>>>25),y=S+(I^_&(T^I))+w[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=I+(T^S&(_^T))+w[6]+2821735955&4294967295,I=S+(y<<17&4294967295|y>>>15),y=T+(_^I&(S^_))+w[7]+4249261313&4294967295,T=I+(y<<22&4294967295|y>>>10),y=_+(S^T&(I^S))+w[8]+1770035416&4294967295,_=T+(y<<7&4294967295|y>>>25),y=S+(I^_&(T^I))+w[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=I+(T^S&(_^T))+w[10]+4294925233&4294967295,I=S+(y<<17&4294967295|y>>>15),y=T+(_^I&(S^_))+w[11]+2304563134&4294967295,T=I+(y<<22&4294967295|y>>>10),y=_+(S^T&(I^S))+w[12]+1804603682&4294967295,_=T+(y<<7&4294967295|y>>>25),y=S+(I^_&(T^I))+w[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=I+(T^S&(_^T))+w[14]+2792965006&4294967295,I=S+(y<<17&4294967295|y>>>15),y=T+(_^I&(S^_))+w[15]+1236535329&4294967295,T=I+(y<<22&4294967295|y>>>10),y=_+(I^S&(T^I))+w[1]+4129170786&4294967295,_=T+(y<<5&4294967295|y>>>27),y=S+(T^I&(_^T))+w[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=I+(_^T&(S^_))+w[11]+643717713&4294967295,I=S+(y<<14&4294967295|y>>>18),y=T+(S^_&(I^S))+w[0]+3921069994&4294967295,T=I+(y<<20&4294967295|y>>>12),y=_+(I^S&(T^I))+w[5]+3593408605&4294967295,_=T+(y<<5&4294967295|y>>>27),y=S+(T^I&(_^T))+w[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=I+(_^T&(S^_))+w[15]+3634488961&4294967295,I=S+(y<<14&4294967295|y>>>18),y=T+(S^_&(I^S))+w[4]+3889429448&4294967295,T=I+(y<<20&4294967295|y>>>12),y=_+(I^S&(T^I))+w[9]+568446438&4294967295,_=T+(y<<5&4294967295|y>>>27),y=S+(T^I&(_^T))+w[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=I+(_^T&(S^_))+w[3]+4107603335&4294967295,I=S+(y<<14&4294967295|y>>>18),y=T+(S^_&(I^S))+w[8]+1163531501&4294967295,T=I+(y<<20&4294967295|y>>>12),y=_+(I^S&(T^I))+w[13]+2850285829&4294967295,_=T+(y<<5&4294967295|y>>>27),y=S+(T^I&(_^T))+w[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=I+(_^T&(S^_))+w[7]+1735328473&4294967295,I=S+(y<<14&4294967295|y>>>18),y=T+(S^_&(I^S))+w[12]+2368359562&4294967295,T=I+(y<<20&4294967295|y>>>12),y=_+(T^I^S)+w[5]+4294588738&4294967295,_=T+(y<<4&4294967295|y>>>28),y=S+(_^T^I)+w[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=I+(S^_^T)+w[11]+1839030562&4294967295,I=S+(y<<16&4294967295|y>>>16),y=T+(I^S^_)+w[14]+4259657740&4294967295,T=I+(y<<23&4294967295|y>>>9),y=_+(T^I^S)+w[1]+2763975236&4294967295,_=T+(y<<4&4294967295|y>>>28),y=S+(_^T^I)+w[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=I+(S^_^T)+w[7]+4139469664&4294967295,I=S+(y<<16&4294967295|y>>>16),y=T+(I^S^_)+w[10]+3200236656&4294967295,T=I+(y<<23&4294967295|y>>>9),y=_+(T^I^S)+w[13]+681279174&4294967295,_=T+(y<<4&4294967295|y>>>28),y=S+(_^T^I)+w[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=I+(S^_^T)+w[3]+3572445317&4294967295,I=S+(y<<16&4294967295|y>>>16),y=T+(I^S^_)+w[6]+76029189&4294967295,T=I+(y<<23&4294967295|y>>>9),y=_+(T^I^S)+w[9]+3654602809&4294967295,_=T+(y<<4&4294967295|y>>>28),y=S+(_^T^I)+w[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=I+(S^_^T)+w[15]+530742520&4294967295,I=S+(y<<16&4294967295|y>>>16),y=T+(I^S^_)+w[2]+3299628645&4294967295,T=I+(y<<23&4294967295|y>>>9),y=_+(I^(T|~S))+w[0]+4096336452&4294967295,_=T+(y<<6&4294967295|y>>>26),y=S+(T^(_|~I))+w[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=I+(_^(S|~T))+w[14]+2878612391&4294967295,I=S+(y<<15&4294967295|y>>>17),y=T+(S^(I|~_))+w[5]+4237533241&4294967295,T=I+(y<<21&4294967295|y>>>11),y=_+(I^(T|~S))+w[12]+1700485571&4294967295,_=T+(y<<6&4294967295|y>>>26),y=S+(T^(_|~I))+w[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=I+(_^(S|~T))+w[10]+4293915773&4294967295,I=S+(y<<15&4294967295|y>>>17),y=T+(S^(I|~_))+w[1]+2240044497&4294967295,T=I+(y<<21&4294967295|y>>>11),y=_+(I^(T|~S))+w[8]+1873313359&4294967295,_=T+(y<<6&4294967295|y>>>26),y=S+(T^(_|~I))+w[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=I+(_^(S|~T))+w[6]+2734768916&4294967295,I=S+(y<<15&4294967295|y>>>17),y=T+(S^(I|~_))+w[13]+1309151649&4294967295,T=I+(y<<21&4294967295|y>>>11),y=_+(I^(T|~S))+w[4]+4149444226&4294967295,_=T+(y<<6&4294967295|y>>>26),y=S+(T^(_|~I))+w[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=I+(_^(S|~T))+w[2]+718787259&4294967295,I=S+(y<<15&4294967295|y>>>17),y=T+(S^(I|~_))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+S&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const T=_-this.blockSize,w=this.C;let I=this.h,S=0;for(;S<_;){if(I==0)for(;S<=T;)s(this,v,S),S+=this.blockSize;if(typeof v=="string"){for(;S<_;)if(w[I++]=v.charCodeAt(S++),I==this.blockSize){s(this,w),I=0;break}}else for(;S<_;)if(w[I++]=v[S++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var T=v.length-8;T<v.length;++T)v[T]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,T=0;T<4;++T)for(let w=0;w<32;w+=8)v[_++]=this.g[T]>>>w&255;return v};function i(v,_){var T=c;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=_(v)}function a(v,_){this.h=_;const T=[];let w=!0;for(let I=v.length-1;I>=0;I--){const S=v[I]|0;w&&S==_||(T[I]=S,w=!1)}this.g=T}var c={};function l(v){return-128<=v&&v<128?i(v,function(_){return new a([_|0],_<0?-1:0)}):new a([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return V(h(-v));const _=[];let T=1;for(let w=0;v>=T;w++)_[w]=v/T|0,T*=4294967296;return new a(_,0)}function d(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return V(d(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(_,8));let w=p;for(let S=0;S<v.length;S+=8){var I=Math.min(8,v.length-S);const y=parseInt(v.substring(S,S+I),_);I<8?(I=h(Math.pow(_,I)),w=w.j(I).add(h(y))):(w=w.j(T),w=w.add(h(y)))}return w}var p=l(0),m=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(P(this))return-V(this).m();let v=0,_=1;for(let T=0;T<this.g.length;T++){const w=this.i(T);v+=(w>=0?w:4294967296+w)*_,_*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(P(this))return"-"+V(this).toString(v);const _=h(Math.pow(v,6));var T=this;let w="";for(;;){const I=$(T,_).g;T=j(T,I.j(_));let S=((T.g.length>0?T.g[0]:T.h)>>>0).toString(v);if(T=I,D(T))return S+w;for(;S.length<6;)S="0"+S;w=S+w}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function P(v){return v.h==-1}n.l=function(v){return v=j(this,v),P(v)?-1:D(v)?0:1};function V(v){const _=v.g.length,T=[];for(let w=0;w<_;w++)T[w]=~v.g[w];return new a(T,~v.h).add(m)}n.abs=function(){return P(this)?V(this):this},n.add=function(v){const _=Math.max(this.g.length,v.g.length),T=[];let w=0;for(let I=0;I<=_;I++){let S=w+(this.i(I)&65535)+(v.i(I)&65535),y=(S>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);w=y>>>16,S&=65535,y&=65535,T[I]=y<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function j(v,_){return v.add(V(_))}n.j=function(v){if(D(this)||D(v))return p;if(P(this))return P(v)?V(this).j(V(v)):V(V(this).j(v));if(P(v))return V(this.j(V(v)));if(this.l(b)<0&&v.l(b)<0)return h(this.m()*v.m());const _=this.g.length+v.g.length,T=[];for(var w=0;w<2*_;w++)T[w]=0;for(w=0;w<this.g.length;w++)for(let I=0;I<v.g.length;I++){const S=this.i(w)>>>16,y=this.i(w)&65535,Ue=v.i(I)>>>16,Ot=v.i(I)&65535;T[2*w+2*I]+=y*Ot,H(T,2*w+2*I),T[2*w+2*I+1]+=S*Ot,H(T,2*w+2*I+1),T[2*w+2*I+1]+=y*Ue,H(T,2*w+2*I+1),T[2*w+2*I+2]+=S*Ue,H(T,2*w+2*I+2)}for(v=0;v<_;v++)T[v]=T[2*v+1]<<16|T[2*v];for(v=_;v<2*_;v++)T[v]=0;return new a(T,0)};function H(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function K(v,_){this.g=v,this.h=_}function $(v,_){if(D(_))throw Error("division by zero");if(D(v))return new K(p,p);if(P(v))return _=$(V(v),_),new K(V(_.g),V(_.h));if(P(_))return _=$(v,V(_)),new K(V(_.g),_.h);if(v.g.length>30){if(P(v)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,w=_;w.l(v)<=0;)T=re(T),w=re(w);var I=ie(T,1),S=ie(w,1);for(w=ie(w,2),T=ie(T,2);!D(w);){var y=S.add(w);y.l(v)<=0&&(I=I.add(T),S=y),w=ie(w,1),T=ie(T,1)}return _=j(v,I.j(_)),new K(I,_)}for(I=p;v.l(_)>=0;){for(T=Math.max(1,Math.floor(v.m()/_.m())),w=Math.ceil(Math.log(T)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),S=h(T),y=S.j(_);P(y)||y.l(v)>0;)T-=w,S=h(T),y=S.j(_);D(S)&&(S=m),I=I.add(S),v=j(v,y)}return new K(I,v)}n.B=function(v){return $(this,v).h},n.and=function(v){const _=Math.max(this.g.length,v.g.length),T=[];for(let w=0;w<_;w++)T[w]=this.i(w)&v.i(w);return new a(T,this.h&v.h)},n.or=function(v){const _=Math.max(this.g.length,v.g.length),T=[];for(let w=0;w<_;w++)T[w]=this.i(w)|v.i(w);return new a(T,this.h|v.h)},n.xor=function(v){const _=Math.max(this.g.length,v.g.length),T=[];for(let w=0;w<_;w++)T[w]=this.i(w)^v.i(w);return new a(T,this.h^v.h)};function re(v){const _=v.g.length+1,T=[];for(let w=0;w<_;w++)T[w]=v.i(w)<<1|v.i(w-1)>>>31;return new a(T,v.h)}function ie(v,_){const T=_>>5;_%=32;const w=v.g.length-T,I=[];for(let S=0;S<w;S++)I[S]=_>0?v.i(S+T)>>>_|v.i(S+T+1)<<32-_:v.i(S+T);return new a(I,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,hp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Mn=a}).apply(typeof Ph<"u"?Ph:typeof self<"u"?self:typeof window<"u"?window:{});var Li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fp,Ds,dp,Gi,dc,pp,gp,mp;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Li=="object"&&Li];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=l,h.apply(null,arguments)}function d(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,R,C){for(var q=Array(arguments.length-2),le=2;le<arguments.length;le++)q[le-2]=arguments[le];return u.prototype[R].apply(g,q)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function D(o,u){for(let g=1;g<arguments.length;g++){const R=arguments[g];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=o.length||0;const C=R.length||0;o.length=f+C;for(let q=0;q<C;q++)o[f+q]=R[q]}else o.push(R)}}class P{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(o){a.setTimeout(()=>{throw o},0)}function j(){var o=v;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class H{constructor(){this.h=this.g=null}add(u,f){const g=K.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var K=new P(()=>new $,o=>o.reset());class ${constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let re,ie=!1,v=new H,_=()=>{const o=Promise.resolve(void 0);re=()=>{o.then(T)}};function T(){for(var o;o=j();){try{o.h.call(o.g)}catch(f){V(f)}var u=K;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ie=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function Ue(o,u){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(Ue,I),Ue.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ot="closure_listenable_"+(Math.random()*1e6|0),qe=0;function Se(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++qe,this.da=this.fa=!1}function me(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Tt(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function wr(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function xt(o){const u={};for(const f in o)u[f]=o[f];return u}const dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cs(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let C=0;C<dt.length;C++)f=dt[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function Ar(o){this.src=o,this.g={},this.h=0}Ar.prototype.add=function(o,u,f,g,R){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const q=en(o,u,g,R);return q>-1?(u=o[q],f||(u.fa=!1)):(u=new Se(u,this.src,C,!!g,R),u.fa=f,o.push(u)),u};function ls(o,u){const f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=R>=0)&&Array.prototype.splice.call(g,R,1),C&&(me(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function en(o,u,f,g){for(let R=0;R<o.length;++R){const C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return R}return-1}var _n="closure_lm_"+(Math.random()*1e6|0),Jn={};function us(o,u,f,g,R){if(Array.isArray(u)){for(let C=0;C<u.length;C++)us(o,u[C],f,g,R);return null}return f=z(f),o&&o[Ot]?o.J(u,f,c(g)?!!g.capture:!1,R):Yn(o,u,f,!1,g,R)}function Yn(o,u,f,g,R,C){if(!u)throw Error("Invalid event type");const q=c(R)?!!R.capture:!!R;let le=x(o);if(le||(o[_n]=le=new Ar(o)),f=le.add(u,f,g,q,C),f.proxy)return f;if(g=Yl(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)S||(R=q),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(k(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Yl(){function o(f){return u.call(o.src,o.listener,f)}const u=B;return o}function E(o,u,f,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)E(o,u[C],f,g,R);else g=c(g)?!!g.capture:!!g,f=z(f),o&&o[Ot]?(o=o.i,C=String(u).toString(),C in o.g&&(u=o.g[C],f=en(u,f,g,R),f>-1&&(me(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[C],o.h--)))):o&&(o=x(o))&&(u=o.g[u.toString()],o=-1,u&&(o=en(u,f,g,R)),(f=o>-1?u[o]:null)&&A(f))}function A(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Ot])ls(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(k(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=x(u))?(ls(f,o),f.h==0&&(f.src=null,u[_n]=null)):me(o)}}}function k(o){return o in Jn?Jn[o]:Jn[o]="on"+o}function B(o,u){if(o.da)o=!0;else{u=new Ue(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&A(o),o=f.call(g,u)}return o}function x(o){return o=o[_n],o instanceof Ar?o:null}var M="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(o){return typeof o=="function"?o:(o[M]||(o[M]=function(u){return o.handleEvent(u)}),o[M])}function U(){w.call(this),this.i=new Ar(this),this.M=this,this.G=null}p(U,w),U.prototype[Ot]=!0,U.prototype.removeEventListener=function(o,u,f,g){E(this,o,u,f,g)};function L(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new I(u,o);else if(u instanceof I)u.target=u.target||o;else{var R=u;u=new I(g,o),cs(u,R)}R=!0;let C,q;if(f)for(q=f.length-1;q>=0;q--)C=u.g=f[q],R=F(C,g,!0,u)&&R;if(C=u.g=o,R=F(C,g,!0,u)&&R,R=F(C,g,!1,u)&&R,f)for(q=0;q<f.length;q++)C=u.g=f[q],R=F(C,g,!1,u)&&R}U.prototype.N=function(){if(U.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)me(f[g]);delete o.g[u],o.h--}}this.G=null},U.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},U.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function F(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let C=0;C<u.length;++C){const q=u[C];if(q&&!q.da&&q.capture==f){const le=q.listener,Le=q.ha||q.src;q.fa&&ls(o.i,q),R=le.call(Le,g)!==!1&&R}}return R&&!g.defaultPrevented}function X(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function W(o){o.g=X(()=>{o.g=null,o.i&&(o.i=!1,W(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Y extends w{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:W(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(o){w.call(this),this.h=o,this.g={}}p(Z,w);var ue=[];function Te(o){Tt(o.g,function(u,f){this.g.hasOwnProperty(f)&&A(u)},o),o.g={}}Z.prototype.N=function(){Z.Z.N.call(this),Te(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ge=a.JSON.stringify,Qe=a.JSON.parse,Je=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function pt(){}function gt(){}var bt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function br(){I.call(this,"d")}p(br,I);function He(){I.call(this,"c")}p(He,I);var Be={},hs=null;function Xn(){return hs=hs||new U}Be.Ia="serverreachability";function Xl(o){I.call(this,Be.Ia,o)}p(Xl,I);function fs(o){const u=Xn();L(u,new Xl(u))}Be.STAT_EVENT="statevent";function Zl(o,u){I.call(this,Be.STAT_EVENT,o),this.stat=u}p(Zl,I);function st(o){const u=Xn();L(u,new Zl(u,o))}Be.Ja="timingevent";function eu(o,u){I.call(this,Be.Ja,o),this.size=u}p(eu,I);function ds(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function ps(){this.g=!0}ps.prototype.ua=function(){this.g=!1};function vm(o,u,f,g,R,C){o.info(function(){if(o.g)if(C){var q="",le=C.split("&");for(let ve=0;ve<le.length;ve++){var Le=le[ve].split("=");if(Le.length>1){const je=Le[0];Le=Le[1];const Lt=je.split("_");q=Lt.length>=2&&Lt[1]=="type"?q+(je+"="+Le+"&"):q+(je+"=redacted&")}}}else q=null;else q=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+q})}function Im(o,u,f,g,R,C,q){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+q})}function Sr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Am(o,f)+(g?" "+g:"")})}function wm(o,u){o.info(function(){return"TIMEOUT: "+u})}ps.prototype.info=function(){};function Am(o,u){if(!o.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var f=C[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let q=1;q<g.length;q++)g[q]=""}}}}return ge(C)}catch{return u}}var Ii={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},tu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},nu;function ga(){}p(ga,pt),ga.prototype.g=function(){return new XMLHttpRequest},nu=new ga;function gs(o){return encodeURIComponent(String(o))}function bm(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function yn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ru}function ru(){this.i=null,this.g="",this.h=!1}var su={},ma={};function _a(o,u,f){o.M=1,o.A=Ai(Mt(u)),o.u=f,o.R=!0,iu(o,null)}function iu(o,u){o.F=Date.now(),wi(o),o.B=Mt(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),yu(f.i,"t",g),o.C=0,f=o.j.L,o.h=new ru,o.g=Mu(o.j,f?u:null,!o.u),o.P>0&&(o.O=new Y(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(ue[0]=R.toString()),R=ue);for(let C=0;C<R.length;C++){const q=us(f,R[C],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.J?xt(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),fs(),vm(o.i,o.v,o.B,o.l,o.S,o.u)}yn.prototype.ba=function(o){o=o.target;const u=this.O;u&&vn(o)==3?u.j():this.Y(o)},yn.prototype.Y=function(o){try{if(o==this.g)e:{const le=vn(this.g),Le=this.g.ya(),ve=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||bu(this.g)))){this.K||le!=4||Le==7||(Le==8||ve<=0?fs(3):fs(2)),ya(this);var u=this.g.ca();this.X=u;var f=Sm(this);if(this.o=u==200,Im(this.i,this.v,this.B,this.l,this.S,le,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var C=g;break t}}C=null}if(o=C)Sr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ea(this,o);else{this.o=!1,this.m=3,st(12),Zn(this),ms(this);break e}}if(this.R){o=!0;let je;for(;!this.K&&this.C<f.length;)if(je=Rm(this,f),je==ma){le==4&&(this.m=4,st(14),o=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(je==su){this.m=4,st(15),Sr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Sr(this.i,this.l,je,null),Ea(this,je);if(ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||f.length!=0||this.h.h||(this.m=1,st(16),o=!1),this.o=this.o&&o,!o)Sr(this.i,this.l,f,"[Invalid Chunked Response]"),Zn(this),ms(this);else if(f.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ra(q),q.P=!0,st(11))}}else Sr(this.i,this.l,f,null),Ea(this,f);le==4&&Zn(this),this.o&&!this.K&&(le==4?ku(this.j,this):(this.o=!1,wi(this)))}else jm(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Zn(this),ms(this)}}}catch{}finally{}};function Sm(o){if(!ou(o))return o.g.la();const u=bu(o.g);if(u==="")return"";let f="";const g=u.length,R=vn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Zn(o),ms(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<g;C++)o.h.h=!0,f+=o.h.i.decode(u[C],{stream:!(R&&C==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function ou(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Rm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?ma:(f=Number(u.substring(f,g)),isNaN(f)?su:(g+=1,g+f>u.length?ma:(u=u.slice(g,g+f),o.C=g+f,u)))}yn.prototype.cancel=function(){this.K=!0,Zn(this)};function wi(o){o.T=Date.now()+o.H,au(o,o.H)}function au(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ds(h(o.aa,o),u)}function ya(o){o.D&&(a.clearTimeout(o.D),o.D=null)}yn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(wm(this.i,this.B),this.M!=2&&(fs(),st(17)),Zn(this),this.m=2,ms(this)):au(this,this.T-o)};function ms(o){o.j.I==0||o.K||ku(o.j,o)}function Zn(o){ya(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Te(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Ea(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||Ta(f.h,o))){if(!o.L&&Ta(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Ci(f),Ri(f);else break e;Sa(f),st(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ds(h(f.Va,f),6e3));uu(f.h)<=1&&f.ta&&(f.ta=void 0)}else tr(f,11)}else if((o.L||f.g==o)&&Ci(f),!y(u))for(R=f.Ba.g.parse(u),u=0;u<R.length;u++){let ve=R[u];const je=ve[0];if(!(je<=f.K))if(f.K=je,ve=ve[1],f.I==2)if(ve[0]=="c"){f.M=ve[1],f.ba=ve[2];const Lt=ve[3];Lt!=null&&(f.ka=Lt,f.j.info("VER="+f.ka));const nr=ve[4];nr!=null&&(f.za=nr,f.j.info("SVER="+f.za));const In=ve[5];In!=null&&typeof In=="number"&&In>0&&(g=1.5*In,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const wn=o.g;if(wn){const Di=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var C=g.h;C.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(va(C,C.h),C.h=null))}if(g.G){const Pa=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pa&&(g.wa=Pa,Re(g.J,g.G,Pa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var q=o;if(g.na=xu(g,g.L?g.ba:null,g.W),q.L){hu(g.h,q);var le=q,Le=g.O;Le&&(le.H=Le),le.D&&(ya(le),wi(le)),g.g=q}else Vu(g);f.i.length>0&&Pi(f)}else ve[0]!="stop"&&ve[0]!="close"||tr(f,7);else f.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?tr(f,7):ba(f):ve[0]!="noop"&&f.l&&f.l.qa(ve),f.A=0)}}fs(4)}catch{}}var Pm=class{constructor(o,u){this.g=o,this.map=u}};function cu(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function lu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function uu(o){return o.h?1:o.g?o.g.size:0}function Ta(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function va(o,u){o.g?o.g.add(u):o.h=u}function hu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}cu.prototype.cancel=function(){if(this.i=fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return b(o.i)}var du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cm(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let R,C=null;g>=0?(R=o[f].substring(0,g),C=o[f].substring(g+1)):R=o[f],u(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function En(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof En?(this.l=o.l,_s(this,o.j),this.o=o.o,this.g=o.g,ys(this,o.u),this.h=o.h,Ia(this,Eu(o.i)),this.m=o.m):o&&(u=String(o).match(du))?(this.l=!1,_s(this,u[1]||"",!0),this.o=Es(u[2]||""),this.g=Es(u[3]||"",!0),ys(this,u[4]),this.h=Es(u[5]||"",!0),Ia(this,u[6]||"",!0),this.m=Es(u[7]||"")):(this.l=!1,this.i=new vs(null,this.l))}En.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Ts(u,pu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ts(u,pu,!0),"@"),o.push(gs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ts(f,f.charAt(0)=="/"?km:Dm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ts(f,Om)),o.join("")},En.prototype.resolve=function(o){const u=Mt(this);let f=!!o.j;f?_s(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)ys(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=u.h.lastIndexOf("/");R!=-1&&(g=u.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const C=[];for(let q=0;q<R.length;){const le=R[q++];le=="."?g&&q==R.length&&C.push(""):le==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&q==R.length&&C.push("")):(C.push(le),g=!0)}g=C.join("/")}else g=R}return f?u.h=g:f=o.i.toString()!=="",f?Ia(u,Eu(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Mt(o){return new En(o)}function _s(o,u,f){o.j=f?Es(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ys(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Ia(o,u,f){u instanceof vs?(o.i=u,xm(o.i,o.l)):(f||(u=Ts(u,Nm)),o.i=new vs(u,o.l))}function Re(o,u,f){o.i.set(u,f)}function Ai(o){return Re(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Es(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ts(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Vm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Vm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var pu=/[#\/\?@]/g,Dm=/[#\?:]/g,km=/[#\?]/g,Nm=/[#\?@]/g,Om=/#/g;function vs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function er(o){o.g||(o.g=new Map,o.h=0,o.i&&Cm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=vs.prototype,n.add=function(o,u){er(this),this.i=null,o=Rr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function gu(o,u){er(o),u=Rr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function mu(o,u){return er(o),u=Rr(o,u),o.g.has(u)}n.forEach=function(o,u){er(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)};function _u(o,u){er(o);let f=[];if(typeof u=="string")mu(o,u)&&(f=f.concat(o.g.get(Rr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}n.set=function(o,u){return er(this),this.i=null,o=Rr(this,o),mu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=_u(this,o),o.length>0?String(o[0]):u):u};function yu(o,u,f){gu(o,u),f.length>0&&(o.i=null,o.g.set(Rr(o,u),b(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const R=gs(f);f=_u(this,f);for(let C=0;C<f.length;C++){let q=R;f[C]!==""&&(q+="="+gs(f[C])),o.push(q)}}return this.i=o.join("&")};function Eu(o){const u=new vs;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Rr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function xm(o,u){u&&!o.j&&(er(o),o.i=null,o.g.forEach(function(f,g){const R=g.toLowerCase();g!=R&&(gu(this,g),yu(this,R,f))},o)),o.j=u}function Mm(o,u){const f=new ps;if(a.Image){const g=new Image;g.onload=d(Tn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=d(Tn,f,"TestLoadImage: error",!1,u,g),g.onabort=d(Tn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=d(Tn,f,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Lm(o,u){const f=new ps,g=new AbortController,R=setTimeout(()=>{g.abort(),Tn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?Tn(f,"TestPingServer: ok",!0,u):Tn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Tn(f,"TestPingServer: error",!1,u)})}function Tn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function Fm(){this.g=new Je}function wa(o){this.i=o.Sb||null,this.h=o.ab||!1}p(wa,pt),wa.prototype.g=function(){return new bi(this.i,this.h)};function bi(o,u){U.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(bi,U),n=bi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,ws(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Is(this):ws(this),this.readyState==3&&Tu(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Is(this))},n.Na=function(o){this.g&&(this.response=o,Is(this))},n.ga=function(){this.g&&Is(this)};function Is(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ws(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function ws(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function vu(o){let u="";return Tt(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Aa(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=vu(f),typeof o=="string"?f!=null&&gs(f):Re(o,u,f))}function Ve(o){U.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ve,U);var Um=/^https?$/i,Bm=["POST","PUT"];n=Ve.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():nu.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Iu(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Bm,u,void 0)>=0)||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,q]of f)this.g.setRequestHeader(C,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){Iu(this,C)}};function Iu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,wu(o),Si(o)}function wu(o){o.A||(o.A=!0,L(o,"complete"),L(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,L(this,"complete"),L(this,"abort"),Si(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Si(this,!0)),Ve.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Au(this):this.Xa())},n.Xa=function(){Au(this)};function Au(o){if(o.h&&typeof i<"u"){if(o.v&&vn(o)==4)setTimeout(o.Ca.bind(o),0);else if(L(o,"readystatechange"),vn(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=C===0){let q=String(o.D).match(du)[1]||null;!q&&a.self&&a.self.location&&(q=a.self.location.protocol.slice(0,-1)),g=!Um.test(q?q.toLowerCase():"")}f=g}if(f)L(o,"complete"),L(o,"success");else{o.o=6;try{var R=vn(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",wu(o)}}finally{Si(o)}}}}function Si(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||L(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function vn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return vn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Qe(u)}};function bu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function jm(o){const u={};o=(o.g&&vn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(y(o[g]))continue;var f=bm(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}wr(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Su(o){this.za=0,this.i=[],this.j=new ps,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=As("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=As("baseRetryDelayMs",5e3,o),this.Za=As("retryDelaySeedMs",1e4,o),this.Ta=As("forwardChannelMaxRetries",2,o),this.va=As("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new cu(o&&o.concurrentRequestLimit),this.Ba=new Fm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Su.prototype,n.ka=8,n.I=1,n.connect=function(o,u,f,g){st(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=xu(this,null,this.W),Pi(this)};function ba(o){if(Ru(o),o.I==3){var u=o.V++,f=Mt(o.J);if(Re(f,"SID",o.M),Re(f,"RID",u),Re(f,"TYPE","terminate"),bs(o,f),u=new yn(o,o.j,u),u.M=2,u.A=Ai(Mt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=Mu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),wi(u)}Ou(o)}function Ri(o){o.g&&(Ra(o),o.g.cancel(),o.g=null)}function Ru(o){Ri(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ci(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Pi(o){if(!lu(o.h)&&!o.m){o.m=!0;var u=o.Ea;re||_(),ie||(re(),ie=!0),v.add(u,o),o.D=0}}function $m(o,u){return uu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ds(h(o.Ea,o,u),Nu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new yn(this,this.j,o);let C=this.o;if(this.U&&(C?(C=xt(C),cs(C,this.U)):C=this.U),this.u!==null||this.R||(R.J=C,C=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Cu(this,R,u),f=Mt(this.J),Re(f,"RID",o),Re(f,"CVER",22),this.G&&Re(f,"X-HTTP-Session-Id",this.G),bs(this,f),C&&(this.R?u="headers="+gs(vu(C))+"&"+u:this.u&&Aa(f,this.u,C)),va(this.h,R),this.Ra&&Re(f,"TYPE","init"),this.S?(Re(f,"$req",u),Re(f,"SID","null"),R.U=!0,_a(R,f,null)):_a(R,f,u),this.I=2}}else this.I==3&&(o?Pu(this,o):this.i.length==0||lu(this.h)||Pu(this))};function Pu(o,u){var f;u?f=u.l:f=o.V++;const g=Mt(o.J);Re(g,"SID",o.M),Re(g,"RID",f),Re(g,"AID",o.K),bs(o,g),o.u&&o.o&&Aa(g,o.u,o.o),f=new yn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Cu(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),va(o.h,f),_a(f,g,u)}function bs(o,u){o.H&&Tt(o.H,function(f,g){Re(u,g,f)}),o.l&&Tt({},function(f,g){Re(u,g,f)})}function Cu(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var R=o.i;let le=-1;for(;;){const Le=["count="+f];le==-1?f>0?(le=R[0].g,Le.push("ofs="+le)):le=0:Le.push("ofs="+le);let ve=!0;for(let je=0;je<f;je++){var C=R[je].g;const Lt=R[je].map;if(C-=le,C<0)le=Math.max(0,R[je].g-100),ve=!1;else try{C="req"+C+"_"||"";try{var q=Lt instanceof Map?Lt:Object.entries(Lt);for(const[nr,In]of q){let wn=In;c(In)&&(wn=ge(In)),Le.push(C+nr+"="+encodeURIComponent(wn))}}catch(nr){throw Le.push(C+"type="+encodeURIComponent("_badmap")),nr}}catch{g&&g(Lt)}}if(ve){q=Le.join("&");break e}}q=void 0}return o=o.i.splice(0,f),u.G=o,q}function Vu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;re||_(),ie||(re(),ie=!0),v.add(u,o),o.A=0}}function Sa(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ds(h(o.Da,o),Nu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Du(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ds(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),Ri(this),Du(this))};function Ra(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Du(o){o.g=new yn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Mt(o.na);Re(u,"RID","rpc"),Re(u,"SID",o.M),Re(u,"AID",o.K),Re(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Re(u,"TO",o.ia),Re(u,"TYPE","xmlhttp"),bs(o,u),o.u&&o.o&&Aa(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Ai(Mt(u)),f.u=null,f.R=!0,iu(f,o)}n.Va=function(){this.C!=null&&(this.C=null,Ri(this),Sa(this),st(19))};function Ci(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function ku(o,u){var f=null;if(o.g==u){Ci(o),Ra(o),o.g=null;var g=2}else if(Ta(o.h,u))f=u.G,hu(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var R=o.D;g=Xn(),L(g,new eu(g,f)),Pi(o)}else Vu(o);else if(R=u.m,R==3||R==0&&u.X>0||!(g==1&&$m(o,u)||g==2&&Sa(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),R){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function Nu(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function tr(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const R=!g;g=new En(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_s(g,"https"),Ai(g),R?Mm(g.toString(),f):Lm(g.toString(),f)}else st(2);o.I=0,o.l&&o.l.pa(u),Ou(o),Ru(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Ou(o){if(o.I=0,o.ja=[],o.l){const u=fu(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ja,u),D(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function xu(o,u,f){var g=f instanceof En?Mt(f):new En(f);if(g.g!="")u&&(g.g=u+"."+g.g),ys(g,g.u);else{var R=a.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const C=new En(null);g&&_s(C,g),u&&(C.g=u),R&&ys(C,R),f&&(C.h=f),g=C}return f=o.G,u=o.wa,f&&u&&Re(g,f,u),Re(g,"VER",o.ka),bs(o,g),g}function Mu(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Ve(new wa({ab:f})):new Ve(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lu(){}n=Lu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Vi(){}Vi.prototype.g=function(o,u){return new mt(o,u)};function mt(o,u){U.call(this),this.g=new Su(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!y(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Pr(this)}p(mt,U),mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){ba(this.g)},mt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=ge(o),o=f);u.i.push(new Pm(u.Ya++,o)),u.I==3&&Pi(u)},mt.prototype.N=function(){this.g.l=null,delete this.j,ba(this.g),delete this.g,mt.Z.N.call(this)};function Fu(o){br.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Fu,br);function Uu(){He.call(this),this.status=1}p(Uu,He);function Pr(o){this.g=o}p(Pr,Lu),Pr.prototype.ra=function(){L(this.g,"a")},Pr.prototype.qa=function(o){L(this.g,new Fu(o))},Pr.prototype.pa=function(o){L(this.g,new Uu)},Pr.prototype.oa=function(){L(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,mp=function(){return new Vi},gp=function(){return Xn()},pp=Be,dc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ii.NO_ERROR=0,Ii.TIMEOUT=8,Ii.HTTP_ERROR=6,Gi=Ii,tu.COMPLETE="complete",dp=tu,gt.EventType=bt,bt.OPEN="a",bt.CLOSE="b",bt.ERROR="c",bt.MESSAGE="d",U.prototype.listen=U.prototype.J,Ds=gt,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,fp=Ve}).apply(typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{});const Ch="@firebase/firestore",Vh="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new nl("@firebase/firestore");function Dr(){return gr.logLevel}function Q(n,...e){if(gr.logLevel<=he.DEBUG){const t=e.map(il);gr.debug(`Firestore (${rs}): ${n}`,...t)}}function hn(n,...e){if(gr.logLevel<=he.ERROR){const t=e.map(il);gr.error(`Firestore (${rs}): ${n}`,...t)}}function Gr(n,...e){if(gr.logLevel<=he.WARN){const t=e.map(il);gr.warn(`Firestore (${rs}): ${n}`,...t)}}function il(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,_p(n,r,t)}function _p(n,e,t){let r=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw hn(r),new Error(r)}function Ee(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||_p(e,s,r)}function ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends mn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xe.UNAUTHENTICATED))}shutdown(){}}class lv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class uv{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ee(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ln,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ln)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string",31837,{l:r}),new yp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class hv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new hv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ee(this.o===void 0,3512);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Dh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=pv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function pc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Ha(s)===Ha(i)?fe(s,i):Ha(s)?1:-1}return fe(n.length,e.length)}const gv=55296,mv=57343;function Ha(n){const e=n.charCodeAt(0);return e>=gv&&e<=mv}function Qr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="__name__";class Bt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Bt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return fe(e.length,t.length)}static compareSegments(e,t){const r=Bt.isNumericId(e),s=Bt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Bt.extractNumericId(e).compare(Bt.extractNumericId(t)):pc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mn.fromString(e.substring(4,e.length-2))}}class Ae extends Bt{construct(e,t,r){return new Ae(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ae(t)}static emptyPath(){return new Ae([])}}const _v=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Bt{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return _v.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kh}static keyField(){return new Ke([kh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new G(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new G(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ae.fromString(e))}static fromName(e){return new J(Ae.fromString(e).popFirst(5))}static empty(){return new J(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n,e,t){if(!t)throw new G(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yv(n,e,t,r){if(e===!0&&r===!0)throw new G(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nh(n){if(!J.isDocumentKey(n))throw new G(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Oh(n){if(J.isDocumentKey(n))throw new G(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Tp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Xo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function Ht(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xo(n);throw new G(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,e){const t={typeString:n};return e&&(t.value=e),t}function fi(n,e){if(!Tp(n))throw new G(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new G(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=-62135596800,Mh=1e6;class Pe{static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Mh);return new Pe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xh)throw new G(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mh}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fi(e,Pe._jsonSchema))return new Pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Pe._jsonSchemaVersion="firestore/timestamp/1.0",Pe._jsonSchema={type:Oe("string",Pe._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Pe(0,0))}static max(){return new se(new Pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=-1;function Ev(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Pe(t+1,0):new Pe(t,r));return new $n(s,J.empty(),e)}function Tv(n){return new $n(n.readTime,n.key,ei)}class $n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new $n(se.min(),J.empty(),ei)}static max(){return new $n(se.max(),J.empty(),ei)}}function vv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=J.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Iv)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(d=>{a[h]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Av(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function is(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=-1;function ea(n){return n==null}function To(n){return n===0&&1/n==-1/0}function bv(n){return typeof n=="number"&&Number.isInteger(n)&&!To(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="";function Sv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Lh(e)),e=Rv(n.get(t),e);return Lh(e)}function Rv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case vp:t+="";break;default:t+=i}}return t}function Lh(n){return n+vp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ip(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||ze.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fi(this.root,e,this.comparator,!0)}}class Fi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ze(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Uh(this.data.getIterator())}getIteratorFrom(e){return new Uh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Fe(this.comparator);return t.data=e,t}}class Uh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Et([])}unionWith(e){let t=new Fe(Ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wp("Invalid base64 string: "+i):i}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const Pv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(n){if(Ee(!!n,39018),typeof n=="string"){let e=0;const t=Pv.exec(n);if(Ee(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(n.seconds),nanos:De(n.nanos)}}function De(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hn(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="server_timestamp",bp="__type__",Sp="__previous_value__",Rp="__local_write_time__";function cl(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[bp])==null?void 0:r.stringValue)===Ap}function ta(n){const e=n.mapValue.fields[Sp];return cl(e)?ta(e):e}function ti(n){const e=qn(n.mapValue.fields[Rp].timestampValue);return new Pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const vo="(default)";class ni{constructor(e,t){this.projectId=e,this.database=t||vo}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database===vo}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="__type__",Vv="__max__",Ui={mapValue:{}},Cp="__vector__",Io="value";function zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?cl(n)?4:kv(n)?9007199254740991:Dv(n)?10:11:ee(28295,{value:n})}function Zt(n,e){if(n===e)return!0;const t=zn(n);if(t!==zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ti(n).isEqual(ti(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=qn(s.timestampValue),c=qn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Hn(s.bytesValue).isEqual(Hn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=De(s.doubleValue),c=De(i.doubleValue);return a===c?To(a)===To(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Qr(n.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Fh(a)!==Fh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Zt(a[l],c[l])))return!1;return!0}(n,e);default:return ee(52216,{left:n})}}function ri(n,e){return(n.values||[]).find(t=>Zt(t,e))!==void 0}function Jr(n,e){if(n===e)return 0;const t=zn(n),r=zn(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=De(i.integerValue||i.doubleValue),l=De(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Bh(n.timestampValue,e.timestampValue);case 4:return Bh(ti(n),ti(e));case 5:return pc(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Hn(i),l=Hn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=fe(c[h],l[h]);if(d!==0)return d}return fe(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=fe(De(i.latitude),De(a.latitude));return c!==0?c:fe(De(i.longitude),De(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return jh(n.arrayValue,e.arrayValue);case 10:return function(i,a){var m,b,D,P;const c=i.fields||{},l=a.fields||{},h=(m=c[Io])==null?void 0:m.arrayValue,d=(b=l[Io])==null?void 0:b.arrayValue,p=fe(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return p!==0?p:jh(h,d)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ui.mapValue&&a===Ui.mapValue)return 0;if(i===Ui.mapValue)return 1;if(a===Ui.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=pc(l[p],d[p]);if(m!==0)return m;const b=Jr(c[l[p]],h[d[p]]);if(b!==0)return b}return fe(l.length,d.length)}(n.mapValue,e.mapValue);default:throw ee(23264,{he:t})}}function Bh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=qn(n),r=qn(e),s=fe(t.seconds,r.seconds);return s!==0?s:fe(t.nanos,r.nanos)}function jh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Jr(t[s],r[s]);if(i)return i}return fe(t.length,r.length)}function Yr(n){return gc(n)}function gc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=qn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Hn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return J.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=gc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${gc(t.fields[a])}`;return s+"}"}(n.mapValue):ee(61005,{value:n})}function Qi(n){switch(zn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ta(n);return e?16+Qi(e):16;case 5:return 2*n.stringValue.length;case 6:return Hn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Qi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Gn(r.fields,(i,a)=>{s+=i.length+Qi(a)}),s}(n.mapValue);default:throw ee(13486,{value:n})}}function $h(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function mc(n){return!!n&&"integerValue"in n}function ll(n){return!!n&&"arrayValue"in n}function qh(n){return!!n&&"nullValue"in n}function Hh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ji(n){return!!n&&"mapValue"in n}function Dv(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Pp])==null?void 0:r.stringValue)===Cp}function qs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Gn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=qs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qs(n.arrayValue.values[t]);return e}return{...n}}function kv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Vv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ji(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(t)}setAll(e){let t=Ke.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=qs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ji(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ji(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Gn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ft(qs(this.value))}}function Vp(n){const e=[];return Gn(n.fields,(t,r)=>{const s=new Ke([t]);if(Ji(r)){const i=Vp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new et(e,0,se.min(),se.min(),se.min(),ft.empty(),0)}static newFoundDocument(e,t,r,s){return new et(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new et(e,2,t,se.min(),se.min(),ft.empty(),0)}static newUnknownDocument(e,t){return new et(e,3,t,se.min(),se.min(),ft.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.position=e,this.inclusive=t}}function zh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),t.key):r=Jr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Zt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t="asc"){this.field=e,this.dir=t}}function Nv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{}class Ne extends Dp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new xv(e,t,r):t==="array-contains"?new Fv(e,r):t==="in"?new Uv(e,r):t==="not-in"?new Bv(e,r):t==="array-contains-any"?new jv(e,r):new Ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Mv(e,r):new Lv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Jr(t,this.value)):t!==null&&zn(this.value)===zn(t)&&this.matchesComparison(Jr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends Dp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Nt(e,t)}matches(e){return kp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function kp(n){return n.op==="and"}function Np(n){return Ov(n)&&kp(n)}function Ov(n){for(const e of n.filters)if(e instanceof Nt)return!1;return!0}function _c(n){if(n instanceof Ne)return n.field.canonicalString()+n.op.toString()+Yr(n.value);if(Np(n))return n.filters.map(e=>_c(e)).join(",");{const e=n.filters.map(t=>_c(t)).join(",");return`${n.op}(${e})`}}function Op(n,e){return n instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(n,e):n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Op(a,s.filters[c]),!0):!1}(n,e):void ee(19439)}function xp(n){return n instanceof Ne?function(t){return`${t.field.canonicalString()} ${t.op} ${Yr(t.value)}`}(n):n instanceof Nt?function(t){return t.op.toString()+" {"+t.getFilters().map(xp).join(" ,")+"}"}(n):"Filter"}class xv extends Ne{constructor(e,t,r){super(e,t,r),this.key=J.fromName(r.referenceValue)}matches(e){const t=J.comparator(e.key,this.key);return this.matchesComparison(t)}}class Mv extends Ne{constructor(e,t){super(e,"in",t),this.keys=Mp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Lv extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=Mp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Mp(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>J.fromName(r.referenceValue))}class Fv extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ll(t)&&ri(t.arrayValue,this.value)}}class Uv extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ri(this.value.arrayValue,t)}}class Bv extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ri(this.value.arrayValue,t)}}class jv extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ll(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ri(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Kh(n,e=null,t=[],r=[],s=null,i=null,a=null){return new $v(n,e,t,r,s,i,a)}function ul(n){const e=ae(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>_c(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ea(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Yr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Yr(r)).join(",")),e.Te=t}return e.Te}function hl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Nv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Op(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Wh(n.startAt,e.startAt)&&Wh(n.endAt,e.endAt)}function yc(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qv(n,e,t,r,s,i,a,c){return new di(n,e,t,r,s,i,a,c)}function fl(n){return new di(n)}function Gh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Lp(n){return n.collectionGroup!==null}function Hs(n){const e=ae(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Fe(Ke.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ao(i,r))}),t.has(Ke.keyField().canonicalString())||e.Ie.push(new Ao(Ke.keyField(),r))}return e.Ie}function zt(n){const e=ae(n);return e.Ee||(e.Ee=Hv(e,Hs(n))),e.Ee}function Hv(n,e){if(n.limitType==="F")return Kh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ao(s.field,i)});const t=n.endAt?new wo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new wo(n.startAt.position,n.startAt.inclusive):null;return Kh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ec(n,e){const t=n.filters.concat([e]);return new di(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Tc(n,e,t){return new di(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function na(n,e){return hl(zt(n),zt(e))&&n.limitType===e.limitType}function Fp(n){return`${ul(zt(n))}|lt:${n.limitType}`}function kr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>xp(s)).join(", ")}]`),ea(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Yr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Yr(s)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function ra(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=zh(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Hs(r),s)||r.endAt&&!function(a,c,l){const h=zh(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Hs(r),s))}(n,e)}function zv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Up(n){return(e,t)=>{let r=!1;for(const s of Hs(n)){const i=Wv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Wv(n,e,t){const r=n.field.isKeyField()?J.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Jr(l,h):ee(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ip(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=new Ce(J.comparator);function fn(){return Kv}const Bp=new Ce(J.comparator);function ks(...n){let e=Bp;for(const t of n)e=e.insert(t.key,t);return e}function jp(n){let e=Bp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function cr(){return zs()}function $p(){return zs()}function zs(){return new Tr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Gv=new Ce(J.comparator),Qv=new Fe(J.comparator);function de(...n){let e=Qv;for(const t of n)e=e.add(t);return e}const Jv=new Fe(fe);function Yv(){return Jv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function qp(n){return{integerValue:""+n}}function Xv(n,e){return bv(e)?qp(e):dl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this._=void 0}}function Zv(n,e,t){return n instanceof bo?function(s,i){const a={fields:{[bp]:{stringValue:Ap},[Rp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&cl(i)&&(i=ta(i)),i&&(a.fields[Sp]=i),{mapValue:a}}(t,e):n instanceof si?zp(n,e):n instanceof ii?Wp(n,e):function(s,i){const a=Hp(s,i),c=Qh(a)+Qh(s.Ae);return mc(a)&&mc(s.Ae)?qp(c):dl(s.serializer,c)}(n,e)}function eI(n,e,t){return n instanceof si?zp(n,e):n instanceof ii?Wp(n,e):t}function Hp(n,e){return n instanceof So?function(r){return mc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class bo extends sa{}class si extends sa{constructor(e){super(),this.elements=e}}function zp(n,e){const t=Kp(e);for(const r of n.elements)t.some(s=>Zt(s,r))||t.push(r);return{arrayValue:{values:t}}}class ii extends sa{constructor(e){super(),this.elements=e}}function Wp(n,e){let t=Kp(e);for(const r of n.elements)t=t.filter(s=>!Zt(s,r));return{arrayValue:{values:t}}}class So extends sa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Qh(n){return De(n.integerValue||n.doubleValue)}function Kp(n){return ll(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function tI(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof si&&s instanceof si||r instanceof ii&&s instanceof ii?Qr(r.elements,s.elements,Zt):r instanceof So&&s instanceof So?Zt(r.Ae,s.Ae):r instanceof bo&&s instanceof bo}(n.transform,e.transform)}class nI{constructor(e,t){this.version=e,this.transformResults=t}}class kt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ia{}function Gp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new pl(n.key,kt.none()):new pi(n.key,n.data,kt.none());{const t=n.data,r=ft.empty();let s=new Fe(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Qn(n.key,r,new Et(s.toArray()),kt.none())}}function rI(n,e,t){n instanceof pi?function(s,i,a){const c=s.value.clone(),l=Yh(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Qn?function(s,i,a){if(!Yi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Yh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Qp(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ws(n,e,t,r){return n instanceof pi?function(i,a,c,l){if(!Yi(i.precondition,a))return c;const h=i.value.clone(),d=Xh(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qn?function(i,a,c,l){if(!Yi(i.precondition,a))return c;const h=Xh(i.fieldTransforms,l,a),d=a.data;return d.setAll(Qp(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,c){return Yi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function sI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Hp(r.transform,s||null);i!=null&&(t===null&&(t=ft.empty()),t.set(r.field,i))}return t||null}function Jh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qr(r,s,(i,a)=>tI(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class pi extends ia{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qn extends ia{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Yh(n,e,t){const r=new Map;Ee(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,eI(a,c,t[s]))}return r}function Xh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Zv(i,a,e))}return r}class pl extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iI extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ws(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ws(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=$p();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Gp(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),de())}isEqual(e){return this.batchId===e.batchId&&Qr(this.mutations,e.mutations,(t,r)=>Jh(t,r))&&Qr(this.baseMutations,e.baseMutations,(t,r)=>Jh(t,r))}}class gl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ee(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Gv}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new gl(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,pe;function lI(n){switch(n){case N.OK:return ee(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function Jp(n){if(n===void 0)return hn("GRPC error has no .code"),N.UNKNOWN;switch(n){case ke.OK:return N.OK;case ke.CANCELLED:return N.CANCELLED;case ke.UNKNOWN:return N.UNKNOWN;case ke.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ke.INTERNAL:return N.INTERNAL;case ke.UNAVAILABLE:return N.UNAVAILABLE;case ke.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ke.NOT_FOUND:return N.NOT_FOUND;case ke.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ke.ABORTED:return N.ABORTED;case ke.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ke.DATA_LOSS:return N.DATA_LOSS;default:return ee(39323,{code:n})}}(pe=ke||(ke={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new Mn([4294967295,4294967295],0);function Zh(n){const e=uI().encode(n),t=new hp;return t.update(e),new Uint8Array(t.digest())}function ef(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Mn([t,r],0),new Mn([s,i],0)]}class ml{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ns(`Invalid padding: ${t}`);if(r<0)throw new Ns(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ns(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ns(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Mn.fromNumber(r)));return s.compare(hI)===1&&(s=new Mn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Zh(e),[r,s]=ef(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ml(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Zh(e),[r,s]=ef(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,gi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new oa(se.min(),s,new Ce(fe),fn(),de())}}class gi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new gi(r,t,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Yp{constructor(e,t){this.targetId=e,this.Ce=t}}class Xp{constructor(e,t,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class tf{constructor(){this.ve=0,this.Fe=nf(),this.Me=Ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),t=de(),r=de();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new gi(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=nf()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ee(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class fI{constructor(e){this.Ge=e,this.ze=new Map,this.je=fn(),this.Je=Bi(),this.He=Bi(),this.Ye=new Ce(fe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(yc(i))if(r===0){const a=new J(i.path);this.et(t,a,et.newNoDocument(a,se.min()))}else Ee(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Hn(r).toUint8Array()}catch(l){if(l instanceof wp)return Gr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ml(a,s,i)}catch(l){return Gr(l instanceof Ns?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&yc(c.target)){const l=new J(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,et.newNoDocument(l,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=de();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new oa(e,t,this.Ye,this.je,r);return this.je=fn(),this.Je=Bi(),this.He=Bi(),this.Ye=new Ce(fe),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new tf,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Fe(fe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Fe(fe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new tf),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Bi(){return new Ce(J.comparator)}function nf(){return new Ce(J.comparator)}const dI={asc:"ASCENDING",desc:"DESCENDING"},pI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gI={and:"AND",or:"OR"};class mI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vc(n,e){return n.useProto3Json||ea(e)?e:{value:e}}function Ro(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _I(n,e){return Ro(n,e.toTimestamp())}function Wt(n){return Ee(!!n,49232),se.fromTimestamp(function(t){const r=qn(t);return new Pe(r.seconds,r.nanos)}(n))}function _l(n,e){return Ic(n,e).canonicalString()}function Ic(n,e){const t=function(s){return new Ae(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function eg(n){const e=Ae.fromString(n);return Ee(ig(e),10190,{key:e.toString()}),e}function wc(n,e){return _l(n.databaseId,e.path)}function za(n,e){const t=eg(e);if(t.get(1)!==n.databaseId.projectId)throw new G(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new J(ng(t))}function tg(n,e){return _l(n.databaseId,e)}function yI(n){const e=eg(n);return e.length===4?Ae.emptyPath():ng(e)}function Ac(n){return new Ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ng(n){return Ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function rf(n,e,t){return{name:wc(n,e),fields:t.value.mapValue.fields}}function EI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ee(d===void 0||typeof d=="string",58123),Ge.fromBase64String(d||"")):(Ee(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ge.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const d=h.code===void 0?N.UNKNOWN:Jp(h.code);return new G(d,h.message||"")}(a);t=new Xp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=za(n,r.document.name),i=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):se.min(),c=new ft({mapValue:{fields:r.document.fields}}),l=et.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new Xi(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=za(n,r.document),i=r.readTime?Wt(r.readTime):se.min(),a=et.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Xi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=za(n,r.document),i=r.removedTargetIds||[];t=new Xi([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new cI(s,i),c=r.targetId;t=new Yp(c,a)}}return t}function TI(n,e){let t;if(e instanceof pi)t={update:rf(n,e.key,e.value)};else if(e instanceof pl)t={delete:wc(n,e.key)};else if(e instanceof Qn)t={update:rf(n,e.key,e.data),updateMask:CI(e.fieldMask)};else{if(!(e instanceof iI))return ee(16599,{Vt:e.type});t={verify:wc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof bo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof si)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ii)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof So)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ee(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_I(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(n,e.precondition)),t}function vI(n,e){return n&&n.length>0?(Ee(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Wt(s.updateTime):Wt(i);return a.isEqual(se.min())&&(a=Wt(i)),new nI(a,s.transformResults||[])}(t,e))):[]}function II(n,e){return{documents:[tg(n,e.path)]}}function wI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=tg(n,s);const i=function(h){if(h.length!==0)return sg(Nt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Nr(m.field),direction:SI(m.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=vc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function AI(n){let e=yI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ee(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const m=rg(p);return m instanceof Nt&&Np(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(m=>function(D){return new Ao(Or(D.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,ea(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(p){const m=!!p.before,b=p.values||[];return new wo(b,m)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const m=!p.before,b=p.values||[];return new wo(b,m)}(t.endAt)),qv(e,s,a,i,c,"F",l,h)}function bI(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Or(t.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Or(t.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(t.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Or(t.unaryFilter.field);return Ne.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ne.create(Or(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Nt.create(t.compositeFilter.filters.map(r=>rg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(t.compositeFilter.op))}(n):ee(30097,{filter:n})}function SI(n){return dI[n]}function RI(n){return pI[n]}function PI(n){return gI[n]}function Nr(n){return{fieldPath:n.canonicalString()}}function Or(n){return Ke.fromServerFormat(n.fieldPath)}function sg(n){return n instanceof Ne?function(t){if(t.op==="=="){if(Hh(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NAN"}};if(qh(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Hh(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NAN"}};if(qh(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(t.field),op:RI(t.op),value:t.value}}}(n):n instanceof Nt?function(t){const r=t.getFilters().map(s=>sg(s));return r.length===1?r[0]:{compositeFilter:{op:PI(t.op),filters:r}}}(n):ee(54877,{filter:n})}function CI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ig(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,r,s,i=se.min(),a=se.min(),c=Ge.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.yt=e}}function DI(n){const e=AI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Tc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.Cn=new NI}addToCollectionParentIndex(e,t){return this.Cn.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve($n.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve($n.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class NI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Fe(Ae.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},og=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(og,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Xr(0)}static cr(){return new Xr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="LruGarbageCollector",OI=1048576;function af([n,e],[t,r]){const s=fe(n,t);return s===0?fe(e,r):s}class xI{constructor(e){this.Ir=e,this.buffer=new Fe(af),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();af(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class MI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Q(of,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){is(t)?Q(of,"Ignoring IndexedDB error during garbage collection: ",t):await ss(t)}await this.Vr(3e5)})}}class LI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return O.resolve(Zo.ce);const r=new xI(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(sf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sf):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Dr()<=he.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function FI(n,e){return new LI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.changes=new Tr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ws(r.mutation,s,Et.empty(),Pe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,t,r=de()){const s=cr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=ks();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=cr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,de()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=fn();const a=zs(),c=function(){return zs()}();return t.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Qn)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ws(d.mutation,h,d.mutation.getFieldMask(),Pe.now())):a.set(h.key,Et.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>c.set(h,new BI(d,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=zs();let s=new Ce((a,c)=>a-c),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||Et.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||de()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=$p();d.forEach(m=>{if(!i.has(m)){const b=Gp(t.get(m),r.get(m));b!==null&&p.set(m,b),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(cr());let c=ei,l=i;return a.next(h=>O.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,de())).next(d=>({batchId:c,changes:jp(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new J(t)).next(r=>{let s=ks();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ks();return this.indexManager.getCollectionParents(e,i).next(c=>O.forEach(c,l=>{const h=function(p,m){return new di(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,et.newInvalidDocument(d)))});let c=ks();return a.forEach((l,h)=>{const d=i.get(l);d!==void 0&&Ws(d.mutation,h,Et.empty(),Pe.now()),ra(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return O.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:DI(s.bundledQuery),readTime:Wt(s.readTime)}}(t)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.overlays=new Ce(J.comparator),this.qr=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=cr();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=cr(),i=t.length+1,a=new J(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ce((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=cr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=cr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return O.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new aI(t,r));let i=this.qr.get(t);i===void 0&&(i=de(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.Qr=new Fe($e.$r),this.Ur=new Fe($e.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new $e(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new $e(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new J(new Ae([])),r=new $e(t,e),s=new $e(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new J(new Ae([])),r=new $e(t,e),s=new $e(t,e+1);let i=de();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new $e(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return J.comparator(e.key,t.key)||fe(e.Yr,t.Yr)}static Kr(e,t){return fe(e.Yr,t.Yr)||J.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Fe($e.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new oI(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new $e(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?al:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new $e(t,0),s=new $e(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Fe(fe);return t.forEach(s=>{const i=new $e(s,0),a=new $e(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new $e(new J(i),0);let c=new Fe(fe);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},a),O.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ee(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(t.mutations,s=>{const i=new $e(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new $e(t,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.ri=e,this.docs=function(){return new Ce(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():et.newInvalidDocument(t))}getEntries(e,t){let r=fn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=fn();const a=t.path,c=new J(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vv(Tv(d),r)<=0||(s.has(d.key)||ra(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}ii(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new KI(this)}getSize(e){return O.resolve(this.size)}}class KI extends UI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.persistence=e,this.si=new Tr(t=>ul(t),hl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new yl,this.targetCount=0,this.ai=Xr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),O.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Xr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Pr(t),O.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t){this.ui={},this.overlays={},this.ci=new Zo(0),this.li=!1,this.li=!0,this.hi=new HI,this.referenceDelegate=e(this),this.Pi=new GI(this),this.indexManager=new kI,this.remoteDocumentCache=function(s){return new WI(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new VI(t),this.Ii=new $I(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new zI(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){Q("MemoryPersistence","Starting transaction:",e);const s=new QI(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class QI extends wv{constructor(e){super(),this.currentSequenceNumber=e}}class El{constructor(e){this.persistence=e,this.Ri=new yl,this.Vi=null}static mi(e){return new El(e)}get fi(){if(this.Vi)return this.Vi;throw ee(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),O.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=J.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return O.or([()=>O.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Po{constructor(e,t){this.persistence=e,this.pi=new Tr(r=>Sv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=FI(this,t)}static mi(e,t){return new Po(e,t)}Ei(){}di(e){return O.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qi(e.data.value)),t}br(e,t,r){return O.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=de(),s=de();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Tl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return HE()?8:Av(nt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new JI;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Dr()<=he.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",kr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Dr()<=he.DEBUG&&Q("QueryEngine","Query:",kr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Dr()<=he.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",kr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(t))):O.resolve())}ys(e,t){if(Gh(t))return O.resolve(null);let r=zt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Tc(t,null,"F"),r=zt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=de(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(t,c);return this.Cs(t,h,a,l.readTime)?this.ys(e,Tc(t,null,"F")):this.vs(e,h,t,l)}))})))}ws(e,t,r,s){return Gh(t)||s.isEqual(se.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?O.resolve(null):(Dr()<=he.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),kr(t)),this.vs(e,a,t,Ev(s,ei)).next(c=>c))})}Ds(e,t){let r=new Fe(Up(e));return t.forEach((s,i)=>{ra(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Dr()<=he.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",kr(t)),this.ps.getDocumentsMatchingQuery(e,t,$n.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="LocalStore",XI=3e8;class ZI{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Ce(fe),this.xs=new Tr(i=>ul(i),hl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function ew(n,e,t,r){return new ZI(n,e,t,r)}async function cg(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=de();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function tw(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let b=O.resolve();return m.forEach(D=>{b=b.next(()=>d.getEntry(l,D)).next(P=>{const V=h.docVersions.get(D);Ee(V!==null,48541),P.version.compareTo(V)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),d.addEntry(P)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=de();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function lg(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function nw(n,e){const t=ae(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(t.Pi.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(i,d.addedDocuments,p)));let b=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Ge.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),function(P,V,j){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=XI?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,b,d)&&c.push(t.Pi.updateTargetData(i,b))});let l=fn(),h=de();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(rw(i,a,e.documentUpdates).next(d=>{l=d.ks,h=d.qs})),!r.isEqual(se.min())){const d=t.Pi.getLastRemoteSnapshotVersion(i).next(p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return O.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Ms=s,i))}function rw(n,e,t){let r=de(),s=de();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=fn();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):Q(vl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:a,qs:s}})}function sw(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=al),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iw(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Dn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function bc(n,e,t){const r=ae(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!is(a))throw a;Q(vl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function cf(n,e,t){const r=ae(n);let s=se.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,d){const p=ae(l),m=p.xs.get(d);return m!==void 0?O.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,d)}(r,a,zt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:de())).next(c=>(ow(r,zv(e),c),{documents:c,Qs:i})))}function ow(n,e,t){let r=n.Os.get(e)||se.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class lf{constructor(){this.activeTargetIds=Yv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aw{constructor(){this.Mo=new lf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new lf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="ConnectivityMonitor";class hf{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Q(uf,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Q(uf,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji=null;function Sc(){return ji===null?ji=function(){return 268435456+Math.round(2147483648*Math.random())}():ji++,"0x"+ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="RestConnection",lw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class uw{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===vo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Sc(),c=this.zo(e,t.toUriEncodedString());Q(Wa,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),d=ts(h);return this.Jo(e,c,l,r,d).then(p=>(Q(Wa,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Gr(Wa,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=lw[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class fw extends uw{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Sc();return new Promise((c,l)=>{const h=new fp;h.setWithCredentials(!0),h.listenOnce(dp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Gi.NO_ERROR:const p=h.getResponseJson();Q(Ye,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Gi.TIMEOUT:Q(Ye,`RPC '${e}' ${a} timed out`),l(new G(N.DEADLINE_EXCEEDED,"Request time out"));break;case Gi.HTTP_ERROR:const m=h.getStatus();if(Q(Ye,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const D=b==null?void 0:b.error;if(D&&D.status&&D.message){const P=function(j){const H=j.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(H)>=0?H:N.UNKNOWN}(D.status);l(new G(P,D.message))}else l(new G(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new G(N.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Q(Ye,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);Q(Ye,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)})}T_(e,t,r){const s=Sc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=mp(),c=gp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");Q(Ye,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.I_(p);let m=!1,b=!1;const D=new hw({Yo:V=>{b?Q(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(Q(Ye,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Q(Ye,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Zo:()=>p.close()}),P=(V,j,H)=>{V.listen(j,K=>{try{H(K)}catch($){setTimeout(()=>{throw $},0)}})};return P(p,Ds.EventType.OPEN,()=>{b||(Q(Ye,`RPC '${e}' stream ${s} transport opened.`),D.o_())}),P(p,Ds.EventType.CLOSE,()=>{b||(b=!0,Q(Ye,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(p))}),P(p,Ds.EventType.ERROR,V=>{b||(b=!0,Gr(Ye,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),D.a_(new G(N.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ds.EventType.MESSAGE,V=>{var j;if(!b){const H=V.data[0];Ee(!!H,16349);const K=H,$=(K==null?void 0:K.error)||((j=K[0])==null?void 0:j.error);if($){Q(Ye,`RPC '${e}' stream ${s} received error:`,$);const re=$.status;let ie=function(T){const w=ke[T];if(w!==void 0)return Jp(w)}(re),v=$.message;ie===void 0&&(ie=N.INTERNAL,v="Unknown error status: "+re+" with message "+$.message),b=!0,D.a_(new G(ie,v)),p.close()}else Q(Ye,`RPC '${e}' stream ${s} received:`,H),D.u_(H)}}),P(c,pp.STAT_EVENT,V=>{V.stat===dc.PROXY?Q(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===dc.NOPROXY&&Q(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Ka(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n){return new mI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="PersistentStream";class hg{constructor(e,t,r,s,i,a,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ug(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(hn(t.toString()),hn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new G(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(ff,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(Q(ff,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dw extends hg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=EI(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Wt(a.readTime):se.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Ac(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=yc(l)?{documents:II(i,l)}:{query:wI(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Zp(i,a.resumeToken);const h=vc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=Ro(i,a.snapshotVersion.toTimestamp());const h=vc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=bI(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Ac(this.serializer),t.removeTarget=e,this.q_(t)}}class pw extends hg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=vI(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ac(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>TI(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{}class mw extends gw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new G(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Ic(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(N.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,Ic(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(N.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class _w{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hn(t),this.aa=!1):Q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="RemoteStore";class yw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{vr(this)&&(Q(mr,"Restarting streams for network reachability change."),await async function(l){const h=ae(l);h.Ea.add(4),await mi(h),h.Ra.set("Unknown"),h.Ea.delete(4),await ca(h)}(this))})}),this.Ra=new _w(r,s)}}async function ca(n){if(vr(n))for(const e of n.da)await e(!0)}async function mi(n){for(const e of n.da)await e(!1)}function fg(n,e){const t=ae(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),bl(t)?Al(t):os(t).O_()&&wl(t,e))}function Il(n,e){const t=ae(n),r=os(t);t.Ia.delete(e),r.O_()&&dg(t,e),t.Ia.size===0&&(r.O_()?r.L_():vr(t)&&t.Ra.set("Unknown"))}function wl(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}os(n).Y_(e)}function dg(n,e){n.Va.Ue(e),os(n).Z_(e)}function Al(n){n.Va=new fI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),os(n).start(),n.Ra.ua()}function bl(n){return vr(n)&&!os(n).x_()&&n.Ia.size>0}function vr(n){return ae(n).Ea.size===0}function pg(n){n.Va=void 0}async function Ew(n){n.Ra.set("Online")}async function Tw(n){n.Ia.forEach((e,t)=>{wl(n,e)})}async function vw(n,e){pg(n),bl(n)?(n.Ra.ha(e),Al(n)):n.Ra.set("Unknown")}async function Iw(n,e,t){if(n.Ra.set("Online"),e instanceof Xp&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){Q(mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Co(n,r)}else if(e instanceof Xi?n.Va.Ze(e):e instanceof Yp?n.Va.st(e):n.Va.tt(e),!t.isEqual(se.min()))try{const r=await lg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),dg(i,l);const p=new Dn(d.target,l,h,d.sequenceNumber);wl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){Q(mr,"Failed to raise snapshot:",r),await Co(n,r)}}async function Co(n,e,t){if(!is(e))throw e;n.Ea.add(1),await mi(n),n.Ra.set("Offline"),t||(t=()=>lg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q(mr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ca(n)})}function gg(n,e){return e().catch(t=>Co(n,t,e))}async function la(n){const e=ae(n),t=Wn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:al;for(;ww(e);)try{const s=await sw(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Aw(e,s)}catch(s){await Co(e,s)}mg(e)&&_g(e)}function ww(n){return vr(n)&&n.Ta.length<10}function Aw(n,e){n.Ta.push(e);const t=Wn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function mg(n){return vr(n)&&!Wn(n).x_()&&n.Ta.length>0}function _g(n){Wn(n).start()}async function bw(n){Wn(n).ra()}async function Sw(n){const e=Wn(n);for(const t of n.Ta)e.ea(t.mutations)}async function Rw(n,e,t){const r=n.Ta.shift(),s=gl.from(r,e,t);await gg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await la(n)}async function Pw(n,e){e&&Wn(n).X_&&await async function(r,s){if(function(a){return lI(a)&&a!==N.ABORTED}(s.code)){const i=r.Ta.shift();Wn(r).B_(),await gg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await la(r)}}(n,e),mg(n)&&_g(n)}async function df(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),Q(mr,"RemoteStore received new credentials");const r=vr(t);t.Ea.add(3),await mi(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ca(t)}async function Cw(n,e){const t=ae(n);e?(t.Ea.delete(2),await ca(t)):e||(t.Ea.add(2),await mi(t),t.Ra.set("Unknown"))}function os(n){return n.ma||(n.ma=function(t,r,s){const i=ae(t);return i.sa(),new dw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:Ew.bind(null,n),t_:Tw.bind(null,n),r_:vw.bind(null,n),H_:Iw.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),bl(n)?Al(n):n.Ra.set("Unknown")):(await n.ma.stop(),pg(n))})),n.ma}function Wn(n){return n.fa||(n.fa=function(t,r,s){const i=ae(t);return i.sa(),new pw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:bw.bind(null,n),r_:Pw.bind(null,n),ta:Sw.bind(null,n),na:Rw.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await la(n)):(await n.fa.stop(),n.Ta.length>0&&(Q(mr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Sl(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rl(n,e){if(hn("AsyncQueue",`${e}: ${n}`),is(n))return new G(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{static emptySet(e){return new $r(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||J.comparator(t.key,r.key):(t,r)=>J.comparator(t.key,r.key),this.keyedMap=ks(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $r)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new $r;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.ga=new Ce(J.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Zr{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Zr(e,t,$r.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Dw{constructor(){this.queries=gf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ae(t),i=s.queries;s.queries=gf(),i.forEach((a,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new G(N.ABORTED,"Firestore shutting down"))}}function gf(){return new Tr(n=>Fp(n),na)}async function yg(n,e){const t=ae(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Vw,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Rl(a,`Initialization of query '${kr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Pl(t)}async function Eg(n,e){const t=ae(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function kw(n,e){const t=ae(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Pl(t)}function Nw(n,e,t){const r=ae(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Pl(n){n.Ca.forEach(e=>{e.next()})}var Rc,mf;(mf=Rc||(Rc={})).Ma="default",mf.Cache="cache";class Tg{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Rc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.key=e}}class Ig{constructor(e){this.key=e}}class Ow{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=Up(e),this.tu=new $r(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new pf,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),b=ra(this.query,p)?p:null,D=!!m&&this.mutatedKeys.has(m.key),P=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let V=!1;m&&b?m.data.isEqual(b.data)?D!==P&&(r.track({type:3,doc:b}),V=!0):this.su(m,b)||(r.track({type:2,doc:b}),V=!0,(l&&this.eu(b,l)>0||h&&this.eu(b,h)<0)&&(c=!0)):!m&&b?(r.track({type:0,doc:b}),V=!0):m&&!b&&(r.track({type:1,doc:m}),V=!0,(l||h)&&(c=!0)),V&&(b?(a=a.add(b),i=P?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((d,p)=>function(b,D){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Rt:V})}};return P(b)-P(D)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,a.length!==0||h?{snapshot:new Zr(this.query,e.tu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new pf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Ig(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new vg(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=de();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Zr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Cl="SyncEngine";class xw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Mw{constructor(e){this.key=e,this.hu=!1}}class Lw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Tr(c=>Fp(c),na),this.Iu=new Map,this.Eu=new Set,this.du=new Ce(J.comparator),this.Au=new Map,this.Ru=new yl,this.Vu={},this.mu=new Map,this.fu=Xr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Fw(n,e,t=!0){const r=Pg(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await wg(r,e,t,!0),s}async function Uw(n,e){const t=Pg(n);await wg(t,e,!0,!1)}async function wg(n,e,t,r){const s=await iw(n.localStore,zt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Bw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&fg(n.remoteStore,s),c}async function Bw(n,e,t,r,s){n.pu=(p,m,b)=>async function(P,V,j,H){let K=V.view.ru(j);K.Cs&&(K=await cf(P.localStore,V.query,!1).then(({documents:v})=>V.view.ru(v,K)));const $=H&&H.targetChanges.get(V.targetId),re=H&&H.targetMismatches.get(V.targetId)!=null,ie=V.view.applyChanges(K,P.isPrimaryClient,$,re);return yf(P,V.targetId,ie.au),ie.snapshot}(n,p,m,b);const i=await cf(n.localStore,e,!0),a=new Ow(e,i.Qs),c=a.ru(i.documents),l=gi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);yf(n,t,h.au);const d=new xw(e,t,a);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function jw(n,e,t){const r=ae(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!na(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Il(r.remoteStore,s.targetId),Pc(r,s.targetId)}).catch(ss)):(Pc(r,s.targetId),await bc(r.localStore,s.targetId,!0))}async function $w(n,e){const t=ae(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Il(t.remoteStore,r.targetId))}async function qw(n,e,t){const r=Jw(n);try{const s=await function(a,c){const l=ae(a),h=Pe.now(),d=c.reduce((b,D)=>b.add(D.key),de());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let D=fn(),P=de();return l.Ns.getEntries(b,d).next(V=>{D=V,D.forEach((j,H)=>{H.isValidDocument()||(P=P.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,D)).next(V=>{p=V;const j=[];for(const H of c){const K=sI(H,p.get(H.key).overlayedDocument);K!=null&&j.push(new Qn(H.key,K,Vp(K.value.mapValue),kt.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,j,c)}).next(V=>{m=V;const j=V.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(b,V.batchId,j)})}).then(()=>({batchId:m.batchId,changes:jp(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.Vu[a.currentUser.toKey()];h||(h=new Ce(fe)),h=h.insert(c,l),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await _i(r,s.changes),await la(r.remoteStore)}catch(s){const i=Rl(s,"Failed to persist write");t.reject(i)}}async function Ag(n,e){const t=ae(n);try{const r=await nw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Ee(a.hu,14607):s.removedDocuments.size>0&&(Ee(a.hu,42227),a.hu=!1))}),await _i(t,r,e)}catch(r){await ss(r)}}function _f(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=ae(a);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(c)&&(h=!0)}),h&&Pl(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hw(n,e,t){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Ce(J.comparator);a=a.insert(i,et.newNoDocument(i,se.min()));const c=de().add(i),l=new oa(se.min(),new Map,new Ce(fe),a,c);await Ag(r,l),r.du=r.du.remove(i),r.Au.delete(e),Vl(r)}else await bc(r.localStore,e,!1).then(()=>Pc(r,e,t)).catch(ss)}async function zw(n,e){const t=ae(n),r=e.batch.batchId;try{const s=await tw(t.localStore,e);Sg(t,r,null),bg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await _i(t,s)}catch(s){await ss(s)}}async function Ww(n,e,t){const r=ae(n);try{const s=await function(a,c){const l=ae(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ee(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);Sg(r,e,t),bg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await _i(r,s)}catch(s){await ss(s)}}function bg(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Sg(n,e,t){const r=ae(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Pc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Rg(n,r)})}function Rg(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Il(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Vl(n))}function yf(n,e,t){for(const r of t)r instanceof vg?(n.Ru.addReference(r.key,e),Kw(n,r)):r instanceof Ig?(Q(Cl,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Rg(n,r.key)):ee(19791,{wu:r})}function Kw(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(Q(Cl,"New document in limbo: "+t),n.Eu.add(r),Vl(n))}function Vl(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new J(Ae.fromString(e)),r=n.fu.next();n.Au.set(r,new Mw(t)),n.du=n.du.insert(t,r),fg(n.remoteStore,new Dn(zt(fl(t.path)),r,"TargetPurposeLimboResolution",Zo.ce))}}async function _i(n,e,t){const r=ae(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{a.push(r.pu(l,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Tl.As(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(l,h){const d=ae(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,m=>O.forEach(m.Es,b=>d.persistence.referenceDelegate.addReference(p,m.targetId,b)).next(()=>O.forEach(m.ds,b=>d.persistence.referenceDelegate.removeReference(p,m.targetId,b)))))}catch(p){if(!is(p))throw p;Q(vl,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const b=d.Ms.get(m),D=b.snapshotVersion,P=b.withLastLimboFreeSnapshotVersion(D);d.Ms=d.Ms.insert(m,P)}}}(r.localStore,i))}async function Gw(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){Q(Cl,"User change. New user:",e.toKey());const r=await cg(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new G(N.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _i(t,r.Ls)}}function Qw(n,e){const t=ae(n),r=t.Au.get(e);if(r&&r.hu)return de().add(r.key);{let s=de();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Pg(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ag.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hw.bind(null,e),e.Pu.H_=kw.bind(null,e.eventManager),e.Pu.yu=Nw.bind(null,e.eventManager),e}function Jw(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ww.bind(null,e),e}class Vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=aa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return ew(this.persistence,new YI,e.initialUser,this.serializer)}Cu(e){return new ag(El.mi,this.serializer)}Du(e){return new aw}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vo.provider={build:()=>new Vo};class Yw extends Vo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ee(this.persistence.referenceDelegate instanceof Po,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new MI(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new ag(r=>Po.mi(r,t),this.serializer)}}class Cc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_f(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gw.bind(null,this.syncEngine),await Cw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Dw}()}createDatastore(e){const t=aa(e.databaseInfo.databaseId),r=function(i){return new fw(i)}(e.databaseInfo);return function(i,a,c,l){return new mw(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new yw(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>_f(this.syncEngine,t,0),function(){return hf.v()?new hf:new cw}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,d){const p=new Lw(s,i,a,c,l,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ae(s);Q(mr,"RemoteStore shutting down."),i.Ea.add(5),await mi(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Cc.provider={build:()=>new Cc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):hn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="FirestoreClient";class Xw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=ol.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Q(Kn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Q(Kn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Rl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ga(n,e){n.asyncQueue.verifyOperationInProgress(),Q(Kn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await cg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ef(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Zw(n);Q(Kn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>df(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>df(e.remoteStore,s)),n._onlineComponents=e}async function Zw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q(Kn,"Using user provided OfflineComponentProvider");try{await Ga(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Gr("Error using user provided cache. Falling back to memory cache: "+t),await Ga(n,new Vo)}}else Q(Kn,"Using default OfflineComponentProvider"),await Ga(n,new Yw(void 0));return n._offlineComponents}async function Vg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q(Kn,"Using user provided OnlineComponentProvider"),await Ef(n,n._uninitializedComponentsProvider._online)):(Q(Kn,"Using default OnlineComponentProvider"),await Ef(n,new Cc))),n._onlineComponents}function eA(n){return Vg(n).then(e=>e.syncEngine)}async function Vc(n){const e=await Vg(n),t=e.eventManager;return t.onListen=Fw.bind(null,e.syncEngine),t.onUnlisten=jw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Uw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$w.bind(null,e.syncEngine),t}function tA(n,e,t={}){const r=new Ln;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const d=new Cg({next:m=>{d.Nu(),a.enqueueAndForget(()=>Eg(i,p)),m.fromCache&&l.source==="server"?h.reject(new G(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Tg(c,d,{includeMetadataChanges:!0,qa:!0});return yg(i,p)}(await Vc(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="firestore.googleapis.com",vf=!0;class If{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kg,this.ssl=vf}else this.host=e.host,this.ssl=e.ssl??vf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=og;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OI)throw new G(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dg(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ua{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new If({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new If(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cv;switch(r.type){case"firstParty":return new fv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Tf.get(t);r&&(Q("ComponentProvider","Removing Datastore"),Tf.delete(t),r.terminate())}(this),Promise.resolve()}}function nA(n,e,t,r={}){var h;n=Ht(n,ua);const s=ts(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(rp(`https://${c}`),sp("Firestore",!0)),i.host!==kg&&i.host!==c&&Gr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!dr(l,a)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Xe.MOCK_USER;else{d=xE(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new G(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Xe(m)}n._authCredentials=new lv(new yp(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ir(this.firestore,e,this._query)}}class xe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(fi(t,xe._jsonSchema))return new xe(e,r||null,new J(Ae.fromString(t.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:Oe("string",xe._jsonSchemaVersion),referencePath:Oe("string")};class Fn extends Ir{constructor(e,t,r){super(e,t,fl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new J(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function Ng(n,e,...t){if(n=rt(n),Ep("collection","path",e),n instanceof ua){const r=Ae.fromString(e,...t);return Oh(r),new Fn(n,null,r)}{if(!(n instanceof xe||n instanceof Fn))throw new G(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ae.fromString(e,...t));return Oh(r),new Fn(n.firestore,null,r)}}function Dc(n,e,...t){if(n=rt(n),arguments.length===1&&(e=ol.newId()),Ep("doc","path",e),n instanceof ua){const r=Ae.fromString(e,...t);return Nh(r),new xe(n,null,new J(r))}{if(!(n instanceof xe||n instanceof Fn))throw new G(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ae.fromString(e,...t));return Nh(r),new xe(n.firestore,n instanceof Fn?n.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="AsyncQueue";class Af{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ug(this,"async_queue_retry"),this._c=()=>{const r=Ka();r&&Q(wf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ka();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ka();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ln;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!is(e))throw e;Q(wf,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,hn("INTERNAL UNHANDLED ERROR: ",bf(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Sl.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:bf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function bf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class _r extends ua{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Af,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Af(e),this._firestoreClient=void 0,await e}}}function rA(n,e){const t=typeof n=="object"?n:cp(),r=typeof n=="string"?n:vo,s=sl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=NE("firestore");i&&nA(s,...i)}return s}function Dl(n){if(n._terminated)throw new G(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||sA(n),n._firestoreClient}function sA(n){var r,s,i;const e=n._freezeSettings(),t=function(c,l,h,d){return new Cv(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Dg(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Xw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this._byteString=e}static fromBase64String(e){try{return new It(Ge.fromBase64String(e))}catch(t){throw new G(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new It(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:It._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fi(e,It._jsonSchema))return It.fromBase64String(e.bytes)}}It._jsonSchemaVersion="firestore/bytes/1.0",It._jsonSchema={type:Oe("string",It._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kt._jsonSchemaVersion}}static fromJSON(e){if(fi(e,Kt._jsonSchema))return new Kt(e.latitude,e.longitude)}}Kt._jsonSchemaVersion="firestore/geoPoint/1.0",Kt._jsonSchema={type:Oe("string",Kt._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fi(e,Gt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Gt(e.vectorValues);throw new G(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:Oe("string",Gt._jsonSchemaVersion),vectorValues:Oe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=/^__.*__$/;class oA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,t,this.fieldTransforms):new pi(e,this.data,t,this.fieldTransforms)}}class Og{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ac:n})}}class Nl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Nl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Do(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(xg(this.Ac)&&iA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class aA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||aa(e)}Cc(e,t,r,s=!1){return new Nl({Ac:e,methodName:t,Dc:r,path:Ke.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ol(n){const e=n._freezeSettings(),t=aa(n._databaseId);return new aA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function cA(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);xl("Data must be an object, but it was:",a,r);const c=Mg(r,a);let l,h;if(i.merge)l=new Et(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=kc(e,p,t);if(!a.contains(m))throw new G(N.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Fg(d,m)||d.push(m)}l=new Et(d),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new oA(new ft(c),l,h)}class fa extends kl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fa}}function lA(n,e,t,r){const s=n.Cc(1,e,t);xl("Data must be an object, but it was:",s,r);const i=[],a=ft.empty();Gn(r,(l,h)=>{const d=Ml(e,l,t);h=rt(h);const p=s.yc(d);if(h instanceof fa)i.push(d);else{const m=yi(h,p);m!=null&&(i.push(d),a.set(d,m))}});const c=new Et(i);return new Og(a,c,s.fieldTransforms)}function uA(n,e,t,r,s,i){const a=n.Cc(1,e,t),c=[kc(e,r,t)],l=[s];if(i.length%2!=0)throw new G(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(kc(e,i[m])),l.push(i[m+1]);const h=[],d=ft.empty();for(let m=c.length-1;m>=0;--m)if(!Fg(h,c[m])){const b=c[m];let D=l[m];D=rt(D);const P=a.yc(b);if(D instanceof fa)h.push(b);else{const V=yi(D,P);V!=null&&(h.push(b),d.set(b,V))}}const p=new Et(h);return new Og(d,p,a.fieldTransforms)}function hA(n,e,t,r=!1){return yi(t,n.Cc(r?4:3,e))}function yi(n,e){if(Lg(n=rt(n)))return xl("Unsupported field value:",e,n),Mg(n,e);if(n instanceof kl)return function(r,s){if(!xg(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=yi(c,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Pe.fromDate(r);return{timestampValue:Ro(s.serializer,i)}}if(r instanceof Pe){const i=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ro(s.serializer,i)}}if(r instanceof Kt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof It)return{bytesValue:Zp(s.serializer,r._byteString)};if(r instanceof xe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_l(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Gt)return function(a,c){return{mapValue:{fields:{[Pp]:{stringValue:Cp},[Io]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return dl(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Xo(r)}`)}(n,e)}function Mg(n,e){const t={};return Ip(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gn(n,(r,s)=>{const i=yi(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Lg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Pe||n instanceof Kt||n instanceof It||n instanceof xe||n instanceof kl||n instanceof Gt)}function xl(n,e,t){if(!Lg(t)||!Tp(t)){const r=Xo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function kc(n,e,t){if((e=rt(e))instanceof ha)return e._internalPath;if(typeof e=="string")return Ml(n,e);throw Do("Field path arguments must be of type string or ",n,!1,void 0,t)}const fA=new RegExp("[~\\*/\\[\\]]");function Ml(n,e,t){if(e.search(fA)>=0)throw Do(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ha(...e.split("."))._internalPath}catch{throw Do(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Do(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new G(N.INVALID_ARGUMENT,c+n+l)}function Fg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Bg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dA extends Ug{data(){return super.data()}}function Bg(n,e){return typeof e=="string"?Ml(n,e):e instanceof ha?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ll{}class pA extends Ll{}function gA(n,e,...t){let r=[];e instanceof Ll&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof Ul).length,c=i.filter(l=>l instanceof Fl).length;if(a>1||a>0&&c>0)throw new G(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Fl extends pA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Fl(e,t,r)}_apply(e){const t=this._parse(e);return $g(e._query,t),new Ir(e.firestore,e.converter,Ec(e._query,t))}_parse(e){const t=Ol(e.firestore);return function(i,a,c,l,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Pf(p,d);const D=[];for(const P of p)D.push(Rf(l,i,P));m={arrayValue:{values:D}}}else m=Rf(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Pf(p,d),m=hA(c,a,p,d==="in"||d==="not-in");return Ne.create(h,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ul extends Ll{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ul(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Nt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)$g(a,l),a=Ec(a,l)}(e._query,t),new Ir(e.firestore,e.converter,Ec(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Rf(n,e,t){if(typeof(t=rt(t))=="string"){if(t==="")throw new G(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lp(e)&&t.indexOf("/")!==-1)throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ae.fromString(t));if(!J.isDocumentKey(r))throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $h(n,new J(r))}if(t instanceof xe)return $h(n,t._key);throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xo(t)}.`)}function Pf(n,e){if(!Array.isArray(n)||n.length===0)throw new G(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $g(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new G(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class mA{convertValue(e,t="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Gn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Io].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>De(a.doubleValue));return new Gt(t)}convertGeoPoint(e){return new Kt(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ta(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ti(e));default:return null}}convertTimestamp(e){const t=qn(e);return new Pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ae.fromString(e);Ee(ig(r),9688,{name:e});const s=new ni(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(t)||hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Os{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ur extends Ug{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Bg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ur._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ur._jsonSchemaVersion="firestore/documentSnapshot/1.0",ur._jsonSchema={type:Oe("string",ur._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class Zi extends ur{data(e={}){return super.data(e)}}class hr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Os(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zi(this._firestore,this._userDataWriter,r.key,r,new Os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Zi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Os(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Zi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Os(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:yA(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ol.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}hr._jsonSchemaVersion="firestore/querySnapshot/1.0",hr._jsonSchema={type:Oe("string",hr._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class Bl extends mA{constructor(e){super(),this.firestore=e}convertBytes(e){return new It(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,t)}}function EA(n){n=Ht(n,Ir);const e=Ht(n.firestore,_r),t=Dl(e),r=new Bl(e);return jg(n._query),tA(t,n._query).then(s=>new hr(e,r,n,s))}function TA(n,e,t,...r){n=Ht(n,xe);const s=Ht(n.firestore,_r),i=Ol(s);let a;return a=typeof(e=rt(e))=="string"||e instanceof ha?uA(i,"updateDoc",n._key,e,t,r):lA(i,"updateDoc",n._key,e),jl(s,[a.toMutation(n._key,kt.exists(!0))])}function vA(n){return jl(Ht(n.firestore,_r),[new pl(n._key,kt.none())])}function IA(n,e){const t=Ht(n.firestore,_r),r=Dc(n),s=_A(n.converter,e);return jl(t,[cA(Ol(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,kt.exists(!1))]).then(()=>r)}function wA(n,...e){var l,h,d;n=rt(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Sf(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Sf(e[r])){const p=e[r];e[r]=(l=p.next)==null?void 0:l.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let i,a,c;if(n instanceof xe)a=Ht(n.firestore,_r),c=fl(n._key.path),i={next:p=>{e[r]&&e[r](AA(a,n,p))},error:e[r+1],complete:e[r+2]};else{const p=Ht(n,Ir);a=Ht(p.firestore,_r),c=p._query;const m=new Bl(a);i={next:b=>{e[r]&&e[r](new hr(a,m,p,b))},error:e[r+1],complete:e[r+2]},jg(n._query)}return function(m,b,D,P){const V=new Cg(P),j=new Tg(b,V,D);return m.asyncQueue.enqueueAndForget(async()=>yg(await Vc(m),j)),()=>{V.Nu(),m.asyncQueue.enqueueAndForget(async()=>Eg(await Vc(m),j))}}(Dl(a),c,s,i)}function jl(n,e){return function(r,s){const i=new Ln;return r.asyncQueue.enqueueAndForget(async()=>qw(await eA(r),s,i)),i.promise}(Dl(n),e)}function AA(n,e,t){const r=t.docs.get(e._key),s=new Bl(n);return new ur(n,s,e._key,r,new Os(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){rs=s})(ns),Kr(new pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new _r(new uv(r.getProvider("auth-internal")),new dv(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(h.options.projectId,d)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),xn(Ch,Vh,e),xn(Ch,Vh,"esm2020")})();var bA="firebase",SA="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(bA,SA,"app");function qg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RA=qg,Hg=new ui("auth","Firebase",qg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new nl("@firebase/auth");function PA(n,...e){ko.logLevel<=he.WARN&&ko.warn(`Auth (${ns}): ${n}`,...e)}function eo(n,...e){ko.logLevel<=he.ERROR&&ko.error(`Auth (${ns}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,...e){throw $l(n,...e)}function Qt(n,...e){return $l(n,...e)}function zg(n,e,t){const r={...RA(),[e]:t};return new ui("auth","Firebase",r).create(e,{appName:n.name})}function fr(n){return zg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $l(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Hg.create(n,...e)}function te(n,e,...t){if(!n)throw $l(e,...t)}function on(n){const e="INTERNAL ASSERTION FAILED: "+n;throw eo(e),new Error(e)}function pn(n,e){n||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function CA(){return Cf()==="http:"||Cf()==="https:"}function Cf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CA()||jE()||"connection"in navigator)?navigator.onLine:!0}function DA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.shortDelay=e,this.longDelay=t,pn(t>e,"Short delay should be less than long delay!"),this.isMobile=FE()||$E()}get(){return VA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n,e){pn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OA=new Ei(3e4,6e4);function Hl(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function as(n,e,t,r,s={}){return Kg(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=hi({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return BE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ts(n.emulatorConfig.host)&&(h.credentials="include"),Wg.fetch()(await Gg(n,n.config.apiHost,t,c),h)})}async function Kg(n,e,t){n._canInitEmulator=!1;const r={...kA,...e};try{const s=new MA(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw $i(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw $i(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw $i(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zg(n,d,h);dn(n,d)}}catch(s){if(s instanceof mn)throw s;dn(n,"network-request-failed",{message:String(s)})}}async function xA(n,e,t,r,s={}){const i=await as(n,e,t,r,s);return"mfaPendingCredential"in i&&dn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Gg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ql(n.config,s):`${n.config.apiScheme}://${s}`;return NA.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class MA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),OA.get())})}}function $i(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Qt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(n,e){return as(n,"POST","/v1/accounts:delete",e)}async function No(n,e){return as(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FA(n,e=!1){const t=rt(n),r=await t.getIdToken(e),s=zl(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ks(Qa(s.auth_time)),issuedAtTime:Ks(Qa(s.iat)),expirationTime:Ks(Qa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qa(n){return Number(n)*1e3}function zl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zd(t);return s?JSON.parse(s):(eo("Failed to decode base64 JWT payload"),null)}catch(s){return eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vf(n){const e=zl(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof mn&&UA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function UA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n){var p;const e=n.auth,t=await n.getIdToken(),r=await oi(n,No(e,{idToken:t}));te(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Qg(s.providerUserInfo):[],a=$A(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Oc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function jA(n){const e=rt(n);await Oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $A(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(n,e){const t=await Kg(n,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Gg(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&ts(n.emulatorConfig.host)&&(l.credentials="include"),Wg.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function HA(n,e){return as(n,"POST","/v2/accounts:revokeToken",Hl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Vf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await qA(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new qr;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ct{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new BA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Oc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await oi(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return FA(this,e)}reload(){return jA(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ct({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Oo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await oi(this,LA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:b,providerData:D,stsTokenManager:P}=t;te(p&&P,e,"internal-error");const V=qr.fromJSON(this.name,P);te(typeof p=="string",e,"internal-error"),An(r,e.name),An(s,e.name),te(typeof m=="boolean",e,"internal-error"),te(typeof b=="boolean",e,"internal-error"),An(i,e.name),An(a,e.name),An(c,e.name),An(l,e.name),An(h,e.name),An(d,e.name);const j=new Ct({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:V,createdAt:h,lastLoginAt:d});return D&&Array.isArray(D)&&(j.providerData=D.map(H=>({...H}))),l&&(j._redirectEventId=l),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new qr;s.updateFromServerResponse(t);const i=new Ct({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Oo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new qr;c.updateFromIdToken(r);const l=new Ct({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Oc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map;function an(n){pn(n instanceof Function,"Expected a class definition");let e=Df.get(n);return e?(pn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Df.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jg.type="NONE";const kf=Jg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n,e,t){return`firebase:${n}:${e}:${t}`}class Hr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=to(this.userKey,s.apiKey,i),this.fullPersistenceKey=to("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await No(this.auth,{idToken:e}).catch(()=>{});return t?Ct._fromGetAccountInfoResponse(this.auth,t,e):null}return Ct._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hr(an(kf),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||an(kf);const a=to(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const m=await No(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Ct._fromGetAccountInfoResponse(e,m,d)}else p=Ct._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Hr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Hr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(em(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nm(e))return"Blackberry";if(rm(e))return"Webos";if(Xg(e))return"Safari";if((e.includes("chrome/")||Zg(e))&&!e.includes("edge/"))return"Chrome";if(tm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yg(n=nt()){return/firefox\//i.test(n)}function Xg(n=nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zg(n=nt()){return/crios\//i.test(n)}function em(n=nt()){return/iemobile/i.test(n)}function tm(n=nt()){return/android/i.test(n)}function nm(n=nt()){return/blackberry/i.test(n)}function rm(n=nt()){return/webos/i.test(n)}function Wl(n=nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zA(n=nt()){var e;return Wl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function WA(){return qE()&&document.documentMode===10}function sm(n=nt()){return Wl(n)||tm(n)||rm(n)||nm(n)||/windows phone/i.test(n)||em(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n,e=[]){let t;switch(n){case"Browser":t=Nf(nt());break;case"Worker":t=`${Nf(nt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(n,e={}){return as(n,"GET","/v2/passwordPolicy",Hl(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=6;class JA{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??QA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.beforeStateQueue=new KA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=an(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await No(this,{idToken:e}),r=await Ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if($t(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(fr(this));const t=e?rt(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GA(this),t=new JA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await HA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&an(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[an(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=im(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&PA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Kl(n){return rt(n)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=YE(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XA(n){Gl=n}function ZA(n){return Gl.loadJS(n)}function eb(){return Gl.gapiScript}function tb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(n,e){const t=sl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(dr(i,e??{}))return s;dn(s,"already-initialized")}return t.initialize({options:e})}function rb(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(an);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sb(n,e,t){const r=Kl(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=om(e),{host:a,port:c}=ib(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(dr(h,r.config.emulator)&&dr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ts(a)?(rp(`${i}//${a}${l}`),sp("Auth",!0)):ob()}function om(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ib(n){const e=om(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:xf(a)}}}function xf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ob(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,t){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(n,e){return xA(n,"POST","/v1/accounts:signInWithIdp",Hl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="http://localhost";class yr extends am{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new yr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return zr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zr(e,t)}buildRequest(){const e={requestUri:ab,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends cm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ti{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Pn.credential(t,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ti{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ti{constructor(){super("twitter.com")}static credential(e,t){return yr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vn.credential(t,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ct._fromIdTokenResponse(e,r,s),a=Mf(r);return new es({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Mf(r);return new es({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Mf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends mn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new xo(e,t,r,s)}}function lm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(n,i,e,r):i})}async function cb(n,e,t=!1){const r=await oi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return es._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(n,e,t=!1){const{auth:r}=n;if($t(r.app))return Promise.reject(fr(r));const s="reauthenticate";try{const i=await oi(n,lm(r,s,e,n),t);te(i.idToken,r,"internal-error");const a=zl(i.idToken);te(a,r,"internal-error");const{sub:c}=a;return te(n.uid===c,r,"user-mismatch"),es._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(n,e,t=!1){if($t(n.app))return Promise.reject(fr(n));const r="signIn",s=await lm(n,r,e),i=await es._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function hb(n,e,t,r){return rt(n).onIdTokenChanged(e,t,r)}function fb(n,e,t){return rt(n).beforeAuthStateChanged(e,t)}const Mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=1e3,pb=10;class hm extends um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);WA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hm.type="LOCAL";const gb=hm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm extends um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fm.type="SESSION";const dm=fm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await mb(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Ql("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function yb(n){Jt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function Eb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function vb(){return pm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="firebaseLocalStorageDb",Ib=1,Lo="firebaseLocalStorage",mm="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pa(n,e){return n.transaction([Lo],e?"readwrite":"readonly").objectStore(Lo)}function wb(){const n=indexedDB.deleteDatabase(gm);return new vi(n).toPromise()}function xc(){const n=indexedDB.open(gm,Ib);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Lo,{keyPath:mm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Lo)?e(r):(r.close(),await wb(),e(await xc()))})})}async function Lf(n,e,t){const r=pa(n,!0).put({[mm]:e,value:t});return new vi(r).toPromise()}async function Ab(n,e){const t=pa(n,!1).get(e),r=await new vi(t).toPromise();return r===void 0?null:r.value}function Ff(n,e){const t=pa(n,!0).delete(e);return new vi(t).toPromise()}const bb=800,Sb=3;class _m{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Sb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=da._getInstance(vb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Eb(),!this.activeServiceWorker)return;this.sender=new _b(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await Lf(e,Mo,"1"),await Ff(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ab(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ff(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=pa(s,!1).getAll();return new vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_m.type="LOCAL";const Rb=_m;new Ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(n,e){return e?an(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends am{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cb(n){return ub(n.auth,new Jl(n),n.bypassAuthState)}function Vb(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),lb(t,new Jl(n),n.bypassAuthState)}async function Db(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),cb(t,new Jl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cb;case"linkViaPopup":case"linkViaRedirect":return Db;case"reauthViaPopup":case"reauthViaRedirect":return Vb;default:dn(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new Ei(2e3,1e4);class xr extends ym{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kb.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="pendingRedirect",no=new Map;class Ob extends ym{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const r=await xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xb(n,e){const t=Fb(e),r=Lb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Mb(n,e){no.set(n._key(),e)}function Lb(n){return an(n._redirectPersistence)}function Fb(n){return to(Nb,n.config.apiKey,n.name)}async function Ub(n,e,t=!1){if($t(n.app))return Promise.reject(fr(n));const r=Kl(n),s=Pb(r,e),a=await new Ob(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=10*60*1e3;class jb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$b(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Em(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uf(e))}saveEventToCache(e){this.cachedEventUids.add(Uf(e)),this.lastProcessedEventTime=Date.now()}}function Uf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Em({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $b(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Em(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(n,e={}){return as(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zb=/^https?/;async function Wb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qb(n);for(const t of e)try{if(Kb(t))return}catch{}dn(n,"unauthorized-domain")}function Kb(n){const e=Nc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!zb.test(t))return!1;if(Hb.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Ei(3e4,6e4);function Bf(){const n=Jt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Qb(n){return new Promise((e,t)=>{var s,i,a;function r(){Bf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bf(),t(Qt(n,"network-request-failed"))},timeout:Gb.get()})}if((i=(s=Jt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Jt().gapi)!=null&&a.load)r();else{const c=tb("iframefcb");return Jt()[c]=()=>{gapi.load?r():t(Qt(n,"network-request-failed"))},ZA(`${eb()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ro=null,e})}let ro=null;function Jb(n){return ro=ro||Qb(n),ro}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new Ei(5e3,15e3),Xb="__/auth/iframe",Zb="emulator/auth/iframe",eS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nS(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ql(e,Zb):`https://${n.config.authDomain}/${Xb}`,r={apiKey:e.apiKey,appName:n.name,v:ns},s=tS.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${hi(r).slice(1)}`}async function rS(n){const e=await Jb(n),t=Jt().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:nS(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Qt(n,"network-request-failed"),c=Jt().setTimeout(()=>{i(a)},Yb.get());function l(){Jt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iS=500,oS=600,aS="_blank",cS="http://localhost";class jf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lS(n,e,t,r=iS,s=oS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...sS,width:r.toString(),height:s.toString(),top:i,left:a},h=nt().toLowerCase();t&&(c=Zg(h)?aS:t),Yg(h)&&(e=e||cS,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[b,D])=>`${m}${b}=${D},`,"");if(zA(h)&&c!=="_self")return uS(e||"",c),new jf(null);const p=window.open(e||"",c,d);te(p,n,"popup-blocked");try{p.focus()}catch{}return new jf(p)}function uS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="__/auth/handler",fS="emulator/auth/handler",dS=encodeURIComponent("fac");async function $f(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ns,eventId:s};if(e instanceof cm){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",JE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Ti){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${dS}=${encodeURIComponent(l)}`:"";return`${pS(n)}?${hi(c).slice(1)}${h}`}function pS({config:n}){return n.emulator?ql(n,fS):`https://${n.authDomain}/${hS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="webStorageSupport";class gS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dm,this._completeRedirectFn=Ub,this._overrideRedirectResult=Mb}async _openPopup(e,t,r,s){var a;pn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await $f(e,t,r,Nc(),s);return lS(e,i,Ql())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await $f(e,t,r,Nc(),s);return yb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await rS(e),r=new jb(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ja,{type:Ja},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Ja];i!==void 0&&t(!!i),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sm()||Xg()||Wl()}}const mS=gS;var qf="@firebase/auth",Hf="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ES(n){Kr(new pr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:im(n)},h=new YA(r,s,i,l);return rb(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new pr("auth-internal",e=>{const t=Kl(e.getProvider("auth").getImmediate());return(r=>new _S(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(qf,Hf,yS(n)),xn(qf,Hf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=5*60,vS=np("authIdTokenMaxAge")||TS;let zf=null;const IS=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>vS)return;const s=t==null?void 0:t.token;zf!==s&&(zf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wS(n=cp()){const e=sl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nb(n,{popupRedirectResolver:mS,persistence:[Rb,gb,dm]}),r=np("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=IS(i.toString());fb(t,a,()=>a(t.currentUser)),hb(t,c=>a(c))}}const s=ep("auth");return s&&sb(t,`http://${s}`),t}function AS(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}XA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Qt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",AS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ES("Browser");const bS={apiKey:"AIzaSyBBG7ZK4k0dcqKaVRn2AXRrHDfhBj4am8k",authDomain:"hospitalsite-4da7c.firebaseapp.com",projectId:"hospitalsite-4da7c",storageBucket:"hospitalsite-4da7c.firebasestorage.app",messagingSenderId:"720953153589",appId:"1:720953153589:web:1d8cf2c23cf689b8b4797c",measurementId:"G-LJ2NWGVCYQ"},Tm=ap(bS),so=rA(Tm);wS(Tm);const SS={class:"map-container"},RS={class:"map-header"},PS={class:"hospital-list"},CS={class:"list-items"},VS=["onClick"],DS={class:"item-info"},kS={class:"recruitment-count"},NS={class:"year-badge"},OS=["onClick"],xS={__name:"HospitalMap",props:{hospitals:{type:Array,default:()=>[]}},emits:["deleteHospital"],setup(n,{emit:e}){const t=n,r=ot([]),s=Gd(()=>[...r.value].sort((P,V)=>P.HOSPITAL_NM.localeCompare(V.HOSPITAL_NM,"ko"))),i=e,a=ot(null),c=ot(null);let l=null,h=[],d=null;function p(){h.forEach(P=>P.setMap(null)),h=[]}function m(){if(!(!l||!d)&&(p(),t.hospitals.forEach(P=>{const V=new d.maps.LatLng(P.lat,P.lng),j=new d.maps.Marker({position:V,map:l}),H=`
			<div style="padding:6px 8px;white-space:nowrap">
				<strong>${P.HOSPITAL_NM}</strong><br/>
				${P.ADDR}<br/>
				모집인원: ${P.NUM}명
			</div>
		`,K=new d.maps.InfoWindow({content:H});d.maps.event.addListener(j,"click",()=>{K.open(l,j),b(P)}),h.push(j)}),t.hospitals.length>0)){const P=new d.maps.LatLngBounds;t.hospitals.forEach(V=>P.extend(new d.maps.LatLng(V.lat,V.lng))),l.setBounds(P)}}function b(P){if(l&&d){const V=new d.maps.LatLng(P.lat,P.lng);l.setLevel(4),l.setCenter(V)}}function D(P){confirm(`${P.HOSPITAL_NM}을(를) 삭제하시겠습니까?`)&&i("deleteHospital",P)}return Yc(async()=>{const{kakao:P}=await _o();d=P,l=new P.maps.Map(a.value,{center:new P.maps.LatLng(37.5665,126.978),level:7});const V=await EA(Ng(so,"hospitalData"));r.value=V.docs.map(K=>({id:K.id,...K.data()}));const j=new P.maps.LatLngBounds,H={};for(const K of V.docs){const{ADDR:$,HOSPITAL_NM:re,NUM:ie,YEAR:v}=K.data();if(!$){console.warn("주소가 누락된 데이터가 있습니다.");continue}H[$]||(H[$]={HOSPITAL_NM:re,ADDR:$,years:{}}),H[$].years[v]=ie}for(const K in H){const $=H[K],re=await mE($.ADDR);if(!re){console.warn(`주소 변환 실패: ${$.ADDR}`);continue}const ie=new P.maps.LatLng(re.lat,re.lng),v=new P.maps.Marker({map:l,position:ie});let _='<div style="width:200px;text-align:center;padding:0px 0;">';_+="<strong>"+$.HOSPITAL_NM+"</strong><br/>"+$.ADDR;for(const I in $.years)_+=`<br/>${I} 모집인원: ${$.years[I]}명`;_+="</div>";const T=new P.maps.InfoWindow({content:_});let w=!1;P.maps.event.addListener(v,"click",function(){w?(T.close(),w=!1):(T.open(l,v),w=!0)}),j.extend(ie)}j.isEmpty()||l.setBounds(j)}),Ko(()=>{p(),l=null,d=null}),zi(()=>t.hospitals,()=>{m()},{deep:!0}),(P,V)=>(vt(),Pt("div",SS,[oe("div",RS,[V[0]||(V[0]=oe("h3",null,"병원 위치",-1)),oe("p",null,"총 "+Rt(n.hospitals.length)+"개 병원이 등록되어 있습니다",1)]),oe("div",{ref_key:"mapEl",ref:a,class:"map"},null,512),oe("div",PS,[V[1]||(V[1]=oe("h4",null,"병원 목록",-1)),V[2]||(V[2]=oe("h6",null,"서울-나눔터(5명)/서울-누리봄(1명)/서울-새오름터(2명)/서울-양천아이존(3명)/서울-한림대부속한강성심병원(2명)/부산-하모니하우스(1명) 제외",-1)),V[3]||(V[3]=oe("input",{type:"text",placeholder:"병원 이름으로 검색(미구현)"},null,-1)),V[4]||(V[4]=oe("br",null,null,-1)),V[5]||(V[5]=oe("br",null,null,-1)),oe("div",CS,[(vt(!0),Pt(St,null,bd(s.value,j=>{var H;return vt(),Pt("div",{key:j.id,class:$o(["list-item",{selected:((H=c.value)==null?void 0:H.id)===j.id}]),onClick:K=>b(j)},[oe("div",DS,[oe("strong",null,Rt(j.HOSPITAL_NM),1),oe("span",null,Rt(j.ADDR),1),oe("span",kS,"모집인원: "+Rt(j.NUM)+"명",1),oe("span",NS,Rt(j.YEAR)+"년",1)]),oe("button",{onClick:Jd(K=>D(j),["stop"]),class:"delete-btn"},"삭제",8,OS)],10,VS)}),128))])])]))}},MS=tl(xS,[["__scopeId","data-v-3d0fc1bb"]]);function LS(){const n=ot([]),e=ot(!1),t=ot(null),r=ot("2024"),s=Ng(so,"hospitalData");let i=null;function a(){e.value=!0;const d=gA(s);i=wA(d,p=>{const m=[];p.forEach(b=>{m.push({docid:b.docid,...b.data()})}),n.value=m,e.value=!1},p=>{console.error("Firestore 데이터 읽기 오류:",p),t.value="데이터를 불러오는 중 오류가 발생했습니다.",e.value=!1})}async function c(d){try{e.value=!0,t.value=null;const p=await IA(s,d);return location.reload(),p.id}catch(p){throw console.error("병원 추가 오류:",p),t.value="병원을 추가하는 중 오류가 발생했습니다.",p}finally{e.value=!1}}async function l(d,p){try{e.value=!0,t.value=null;const m=Dc(so,"hospitalData",d);await TA(m,p)}catch(m){throw console.error("병원 업데이트 오류:",m),t.value="병원을 업데이트하는 중 오류가 발생했습니다.",m}finally{e.value=!1}}async function h(d){const p=Dc(so,"hospitalData",d);try{e.value=!0,t.value=null,await vA(p),location.reload()}catch(m){throw console.error("병원 삭제 오류:",m),t.value="병원을 삭제하는 중 오류가 발생했습니다.",m}finally{e.value=!1}}return Yc(()=>{a()}),Ko(()=>{i&&i()}),{hospitals:n,loading:e,error:t,selectedYear:r,addHospital:c,updateHospital:l,deleteHospital:h}}const FS={class:"container"},US={key:0,class:"error-message"},BS={key:1,class:"loading-message"},jS={class:"layout"},$S={class:"left"},qS={class:"right"},HS={__name:"App",setup(n){const{hospitals:e,addHospital:t,deleteHospital:r,loading:s,error:i}=LS();async function a(l){try{await t(l),console.log("병원이 성공적으로 추가되었습니다.")}catch(h){console.error("병원 추가 실패:",h)}}async function c(l){try{await r(l.id),console.log("병원이 성공적으로 삭제되었습니다.")}catch(h){console.error("병원 삭제 실패:",h)}}return(l,h)=>(vt(),Pt("div",FS,[h[1]||(h[1]=oe("h1",null,"병원 지원 지도",-1)),Cs(i)?(vt(),Pt("div",US,Rt(Cs(i)),1)):fo("",!0),Cs(s)?(vt(),Pt("div",BS," 데이터를 불러오는 중... ")):fo("",!0),oe("div",jS,[oe("section",$S,[h[0]||(h[0]=oe("h2",null,"병원 등록",-1)),Dt(AE,{onAdded:a})]),oe("section",qS,[Dt(MS,{hospitals:Cs(e),onDeleteHospital:c},null,8,["hospitals"])])])]))}},zS=tl(HS,[["__scopeId","data-v-c94d48a0"]]);fE(zS).mount("#app");
