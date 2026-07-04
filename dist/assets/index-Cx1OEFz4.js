(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function oA(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Om={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function lA(){if(py)return gt;py=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function S(F,K,Se){this.props=F,this.context=K,this.refs=y,this.updater=Se||M}S.prototype.isReactComponent={},S.prototype.setState=function(F,K){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,K,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function U(){}U.prototype=S.prototype;function O(F,K,Se){this.props=F,this.context=K,this.refs=y,this.updater=Se||M}var R=O.prototype=new U;R.constructor=O,T(R,S.prototype),R.isPureReactComponent=!0;var N=Array.isArray;function w(){}var C={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(F,K,Se){var ge=Se.ref;return{$$typeof:o,type:F,key:K,ref:ge!==void 0?ge:null,props:Se}}function z(F,K){return D(F.type,K,F.props)}function k(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function B(F){var K={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Se){return K[Se]})}var ee=/\/+/g;function j(F,K){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):K.toString(36)}function q(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(w,w):(F.status="pending",F.then(function(K){F.status==="pending"&&(F.status="fulfilled",F.value=K)},function(K){F.status==="pending"&&(F.status="rejected",F.reason=K)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function I(F,K,Se,ge,Ne){var ne=typeof F;(ne==="undefined"||ne==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(ne){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case o:case e:ve=!0;break;case _:return ve=F._init,I(ve(F._payload),K,Se,ge,Ne)}}if(ve)return Ne=Ne(F),ve=ge===""?"."+j(F,0):ge,N(Ne)?(Se="",ve!=null&&(Se=ve.replace(ee,"$&/")+"/"),I(Ne,K,Se,"",function(tt){return tt})):Ne!=null&&(k(Ne)&&(Ne=z(Ne,Se+(Ne.key==null||F&&F.key===Ne.key?"":(""+Ne.key).replace(ee,"$&/")+"/")+ve)),K.push(Ne)),1;ve=0;var Me=ge===""?".":ge+":";if(N(F))for(var Oe=0;Oe<F.length;Oe++)ge=F[Oe],ne=Me+j(ge,Oe),ve+=I(ge,K,Se,ne,Ne);else if(Oe=x(F),typeof Oe=="function")for(F=Oe.call(F),Oe=0;!(ge=F.next()).done;)ge=ge.value,ne=Me+j(ge,Oe++),ve+=I(ge,K,Se,ne,Ne);else if(ne==="object"){if(typeof F.then=="function")return I(q(F),K,Se,ge,Ne);throw K=String(F),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ve}function G(F,K,Se){if(F==null)return F;var ge=[],Ne=0;return I(F,ge,"","",function(ne){return K.call(Se,ne,Ne++)}),ge}function Y(F){if(F._status===-1){var K=F._result;K=K(),K.then(function(Se){(F._status===0||F._status===-1)&&(F._status=1,F._result=Se)},function(Se){(F._status===0||F._status===-1)&&(F._status=2,F._result=Se)}),F._status===-1&&(F._status=0,F._result=K)}if(F._status===1)return F._result.default;throw F._result}var se=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},V={map:G,forEach:function(F,K,Se){G(F,function(){K.apply(this,arguments)},Se)},count:function(F){var K=0;return G(F,function(){K++}),K},toArray:function(F){return G(F,function(K){return K})||[]},only:function(F){if(!k(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return gt.Activity=v,gt.Children=V,gt.Component=S,gt.Fragment=n,gt.Profiler=r,gt.PureComponent=O,gt.StrictMode=a,gt.Suspense=p,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,gt.__COMPILER_RUNTIME={__proto__:null,c:function(F){return C.H.useMemoCache(F)}},gt.cache=function(F){return function(){return F.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(F,K,Se){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var ge=T({},F.props),Ne=F.key;if(K!=null)for(ne in K.key!==void 0&&(Ne=""+K.key),K)!b.call(K,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&K.ref===void 0||(ge[ne]=K[ne]);var ne=arguments.length-2;if(ne===1)ge.children=Se;else if(1<ne){for(var ve=Array(ne),Me=0;Me<ne;Me++)ve[Me]=arguments[Me+2];ge.children=ve}return D(F.type,Ne,ge)},gt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:l,_context:F},F},gt.createElement=function(F,K,Se){var ge,Ne={},ne=null;if(K!=null)for(ge in K.key!==void 0&&(ne=""+K.key),K)b.call(K,ge)&&ge!=="key"&&ge!=="__self"&&ge!=="__source"&&(Ne[ge]=K[ge]);var ve=arguments.length-2;if(ve===1)Ne.children=Se;else if(1<ve){for(var Me=Array(ve),Oe=0;Oe<ve;Oe++)Me[Oe]=arguments[Oe+2];Ne.children=Me}if(F&&F.defaultProps)for(ge in ve=F.defaultProps,ve)Ne[ge]===void 0&&(Ne[ge]=ve[ge]);return D(F,ne,Ne)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(F){return{$$typeof:f,render:F}},gt.isValidElement=k,gt.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:Y}},gt.memo=function(F,K){return{$$typeof:d,type:F,compare:K===void 0?null:K}},gt.startTransition=function(F){var K=C.T,Se={};C.T=Se;try{var ge=F(),Ne=C.S;Ne!==null&&Ne(Se,ge),typeof ge=="object"&&ge!==null&&typeof ge.then=="function"&&ge.then(w,se)}catch(ne){se(ne)}finally{K!==null&&Se.types!==null&&(K.types=Se.types),C.T=K}},gt.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},gt.use=function(F){return C.H.use(F)},gt.useActionState=function(F,K,Se){return C.H.useActionState(F,K,Se)},gt.useCallback=function(F,K){return C.H.useCallback(F,K)},gt.useContext=function(F){return C.H.useContext(F)},gt.useDebugValue=function(){},gt.useDeferredValue=function(F,K){return C.H.useDeferredValue(F,K)},gt.useEffect=function(F,K){return C.H.useEffect(F,K)},gt.useEffectEvent=function(F){return C.H.useEffectEvent(F)},gt.useId=function(){return C.H.useId()},gt.useImperativeHandle=function(F,K,Se){return C.H.useImperativeHandle(F,K,Se)},gt.useInsertionEffect=function(F,K){return C.H.useInsertionEffect(F,K)},gt.useLayoutEffect=function(F,K){return C.H.useLayoutEffect(F,K)},gt.useMemo=function(F,K){return C.H.useMemo(F,K)},gt.useOptimistic=function(F,K){return C.H.useOptimistic(F,K)},gt.useReducer=function(F,K,Se){return C.H.useReducer(F,K,Se)},gt.useRef=function(F){return C.H.useRef(F)},gt.useState=function(F){return C.H.useState(F)},gt.useSyncExternalStore=function(F,K,Se){return C.H.useSyncExternalStore(F,K,Se)},gt.useTransition=function(){return C.H.useTransition()},gt.version="19.2.7",gt}var my;function q0(){return my||(my=1,Om.exports=lA()),Om.exports}var An=q0();const be=oA(An);var Pm={exports:{}},ac={},Fm={exports:{}},Im={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function uA(){return _y||(_y=1,(function(o){function e(I,G){var Y=I.length;I.push(G);e:for(;0<Y;){var se=Y-1>>>1,V=I[se];if(0<r(V,G))I[se]=G,I[Y]=V,Y=se;else break e}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var G=I[0],Y=I.pop();if(Y!==G){I[0]=Y;e:for(var se=0,V=I.length,F=V>>>1;se<F;){var K=2*(se+1)-1,Se=I[K],ge=K+1,Ne=I[ge];if(0>r(Se,Y))ge<V&&0>r(Ne,Se)?(I[se]=Ne,I[ge]=Y,se=ge):(I[se]=Se,I[K]=Y,se=K);else if(ge<V&&0>r(Ne,Y))I[se]=Ne,I[ge]=Y,se=ge;else break e}}return G}function r(I,G){var Y=I.sortIndex-G.sortIndex;return Y!==0?Y:I.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,v=null,g=3,x=!1,M=!1,T=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function R(I){for(var G=n(d);G!==null;){if(G.callback===null)a(d);else if(G.startTime<=I)a(d),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(d)}}function N(I){if(T=!1,R(I),!M)if(n(p)!==null)M=!0,w||(w=!0,B());else{var G=n(d);G!==null&&q(N,G.startTime-I)}}var w=!1,C=-1,b=5,D=-1;function z(){return y?!0:!(o.unstable_now()-D<b)}function k(){if(y=!1,w){var I=o.unstable_now();D=I;var G=!0;try{e:{M=!1,T&&(T=!1,U(C),C=-1),x=!0;var Y=g;try{t:{for(R(I),v=n(p);v!==null&&!(v.expirationTime>I&&z());){var se=v.callback;if(typeof se=="function"){v.callback=null,g=v.priorityLevel;var V=se(v.expirationTime<=I);if(I=o.unstable_now(),typeof V=="function"){v.callback=V,R(I),G=!0;break t}v===n(p)&&a(p),R(I)}else a(p);v=n(p)}if(v!==null)G=!0;else{var F=n(d);F!==null&&q(N,F.startTime-I),G=!1}}break e}finally{v=null,g=Y,x=!1}G=void 0}}finally{G?B():w=!1}}}var B;if(typeof O=="function")B=function(){O(k)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,j=ee.port2;ee.port1.onmessage=k,B=function(){j.postMessage(null)}}else B=function(){S(k,0)};function q(I,G){C=S(function(){I(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(I){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Y=g;g=G;try{return I()}finally{g=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=g;g=I;try{return G()}finally{g=Y}},o.unstable_scheduleCallback=function(I,G,Y){var se=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?se+Y:se):Y=se,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=Y+V,I={id:_++,callback:G,priorityLevel:I,startTime:Y,expirationTime:V,sortIndex:-1},Y>se?(I.sortIndex=Y,e(d,I),n(p)===null&&I===n(d)&&(T?(U(C),C=-1):T=!0,q(N,Y-se))):(I.sortIndex=V,e(p,I),M||x||(M=!0,w||(w=!0,B()))),I},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(I){var G=g;return function(){var Y=g;g=G;try{return I.apply(this,arguments)}finally{g=Y}}}})(Im)),Im}var gy;function cA(){return gy||(gy=1,Fm.exports=uA()),Fm.exports}var zm={exports:{}},yi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function fA(){if(vy)return yi;vy=1;var o=q0();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:v==null?null:""+v,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return yi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,yi.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(p,d,null,_)},yi.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},yi.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},yi.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},yi.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):_==="script"&&a.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},yi.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},yi.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},yi.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},yi.requestFormReset=function(p){a.d.r(p)},yi.unstable_batchedUpdates=function(p,d){return p(d)},yi.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},yi.useFormStatus=function(){return c.H.useHostTransitionStatus()},yi.version="19.2.7",yi}var xy;function hA(){if(xy)return zm.exports;xy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zm.exports=fA(),zm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy;function dA(){if(Sy)return ac;Sy=1;var o=cA(),e=q0(),n=hA();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function l(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function c(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(l(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=l(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,u=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){s=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),t;if(m===u)return p(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==u.return)s=h,u=m;else{for(var E=!1,P=h.child;P;){if(P===s){E=!0,s=h,u=m;break}if(P===u){E=!0,u=h,s=m;break}P=P.sibling}if(!E){for(P=m.child;P;){if(P===s){E=!0,s=m,u=h;break}if(P===u){E=!0,u=m,s=h;break}P=P.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==u)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),O=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),z=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function B(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Symbol.for("react.client.reference");function j(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ee?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case N:return"Suspense";case w:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case O:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case R:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C:return i=t.displayName||null,i!==null?i:j(t.type)||"Memo";case b:i=t._payload,t=t._init;try{return j(t(i))}catch{}}return null}var q=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},se=[],V=-1;function F(t){return{current:t}}function K(t){0>V||(t.current=se[V],se[V]=null,V--)}function Se(t,i){V++,se[V]=t.current,t.current=i}var ge=F(null),Ne=F(null),ne=F(null),ve=F(null);function Me(t,i){switch(Se(ne,i),Se(Ne,t),Se(ge,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?IS(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=IS(i),t=zS(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(ge),Se(ge,t)}function Oe(){K(ge),K(Ne),K(ne)}function tt(t){t.memoizedState!==null&&Se(ve,t);var i=ge.current,s=zS(i,t.type);i!==s&&(Se(Ne,t),Se(ge,s))}function Ye(t){Ne.current===t&&(K(ge),K(Ne)),ve.current===t&&(K(ve),ec._currentValue=Y)}var xt,We;function it(t){if(xt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);xt=i&&i[1]||"",We=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+t+We}var ct=!1;function ft(t,i){if(!t||ct)return"";ct=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(me){var fe=me}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(me){fe=me}t.call(Ae.prototype)}}else{try{throw Error()}catch(me){fe=me}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(me){if(me&&fe&&typeof me.stack=="string")return[me.stack,fe.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],P=m[1];if(E&&P){var X=E.split(`
`),ue=P.split(`
`);for(h=u=0;u<X.length&&!X[u].includes("DetermineComponentFrameRoot");)u++;for(;h<ue.length&&!ue[h].includes("DetermineComponentFrameRoot");)h++;if(u===X.length||h===ue.length)for(u=X.length-1,h=ue.length-1;1<=u&&0<=h&&X[u]!==ue[h];)h--;for(;1<=u&&0<=h;u--,h--)if(X[u]!==ue[h]){if(u!==1||h!==1)do if(u--,h--,0>h||X[u]!==ue[h]){var ye=`
`+X[u].replace(" at new "," at ");return t.displayName&&ye.includes("<anonymous>")&&(ye=ye.replace("<anonymous>",t.displayName)),ye}while(1<=u&&0<=h);break}}}finally{ct=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?it(s):""}function ce(t,i){switch(t.tag){case 26:case 27:case 5:return it(t.type);case 16:return it("Lazy");case 13:return t.child!==i&&i!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return it("Activity");default:return""}}function Ft(t){try{var i="",s=null;do i+=ce(t,s),s=t,t=t.return;while(t);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var qt=Object.prototype.hasOwnProperty,jt=o.unstable_scheduleCallback,pt=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,Q=o.unstable_requestPaint,It=o.unstable_now,dt=o.unstable_getCurrentPriorityLevel,H=o.unstable_ImmediatePriority,A=o.unstable_UserBlockingPriority,$=o.unstable_NormalPriority,ae=o.unstable_LowPriority,de=o.unstable_IdlePriority,Pe=o.log,De=o.unstable_setDisableYieldValue,_e=null,pe=null;function Fe(t){if(typeof Pe=="function"&&De(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(_e,t)}catch{}}var ke=Math.clz32?Math.clz32:Le,Be=Math.log,ze=Math.LN2;function Le(t){return t>>>=0,t===0?32:31-(Be(t)/ze|0)|0}var et=256,at=262144,W=4194304;function Ue(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,i,s){var u=t.pendingLanes;if(u===0)return 0;var h=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var P=u&134217727;return P!==0?(u=P&~m,u!==0?h=Ue(u):(E&=P,E!==0?h=Ue(E):s||(s=P&~t,s!==0&&(h=Ue(s))))):(P=u&~m,P!==0?h=Ue(P):E!==0?h=Ue(E):s||(s=u&~t,s!==0&&(h=Ue(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Ie(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function He(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Ce(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Te(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ot(t,i,s,u,h,m){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var P=t.entanglements,X=t.expirationTimes,ue=t.hiddenUpdates;for(s=E&~s;0<s;){var ye=31-ke(s),Ae=1<<ye;P[ye]=0,X[ye]=-1;var fe=ue[ye];if(fe!==null)for(ue[ye]=null,ye=0;ye<fe.length;ye++){var me=fe[ye];me!==null&&(me.lane&=-536870913)}s&=~Ae}u!==0&&we(t,u,0),m!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~i))}function we(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var u=31-ke(i);t.entangledLanes|=i,t.entanglements[u]=t.entanglements[u]|1073741824|s&261930}function st(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var u=31-ke(s),h=1<<u;h&i|t[u]&i&&(t[u]|=i),s&=~h}}function Qe(t,i){var s=i&-i;return s=(s&42)!==0?1:mt(s),(s&(t.suspendedLanes|i))!==0?0:s}function mt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Rn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:oy(t.type))}function cn(t,i){var s=G.p;try{return G.p=t,i()}finally{G.p=s}}var mn=Math.random().toString(36).slice(2),St="__reactFiber$"+mn,yt="__reactProps$"+mn,Mt="__reactContainer$"+mn,Jn="__reactEvents$"+mn,fn="__reactListeners$"+mn,ai="__reactHandles$"+mn,ri="__reactResources$"+mn,Sn="__reactMarker$"+mn;function yn(t){delete t[St],delete t[yt],delete t[Jn],delete t[fn],delete t[ai]}function Mn(t){var i=t[St];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Mt]||s[St]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=WS(t);t!==null;){if(s=t[St])return s;t=WS(t)}return i}t=s,s=t.parentNode}return null}function hi(t){if(t=t[St]||t[Mt]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ta(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function En(t){var i=t[ri];return i||(i=t[ri]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Rt(t){t[Sn]=!0}var Di=new Set,L={};function J(t,i){le(t,i),le(t+"Capture",i)}function le(t,i){for(L[t]=i,t=0;t<i.length;t++)Di.add(i[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Ge={};function Xe(t){return qt.call(Ge,t)?!0:qt.call(re,t)?!1:ie.test(t)?Ge[t]=!0:(re[t]=!0,!1)}function Ve(t,i,s){if(Xe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Je(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ke(t,i,s,u){if(u===null)t.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+u)}}function lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Et(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function rt(t,i,s){var u=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var h=u.get,m=u.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:u.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Zt(t){if(!t._valueTracker){var i=Et(t)?"checked":"value";t._valueTracker=rt(t,i,""+t[i])}}function Cn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return t&&(u=Et(t)?t.checked?"true":"false":t.value),t=u,t!==s?(i.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var nn=/[\n"\\]/g;function an(t){return t.replace(nn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ze(t,i,s,u,h,m,E,P){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+lt(i)):t.value!==""+lt(i)&&(t.value=""+lt(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?Lt(t,E,lt(i)):s!=null?Lt(t,E,lt(s)):u!=null&&t.removeAttribute("value"),h==null&&m!=null&&(t.defaultChecked=!!m),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),P!=null&&typeof P!="function"&&typeof P!="symbol"&&typeof P!="boolean"?t.name=""+lt(P):t.removeAttribute("name")}function Si(t,i,s,u,h,m,E,P){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Zt(t);return}s=s!=null?""+lt(s):"",i=i!=null?""+lt(i):s,P||i===t.value||(t.value=i),t.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,t.checked=P?t.checked:!!u,t.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E),Zt(t)}function Lt(t,i,s){i==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function $n(t,i,s,u){if(t=t.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=i.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&u&&(t[s].defaultSelected=!0)}else{for(s=""+lt(s),i=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function ta(t,i,s){if(i!=null&&(i=""+lt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+lt(s):""}function Va(t,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(a(92));if(q(u)){if(1<u.length)throw Error(a(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=lt(i),t.defaultValue=s,u=t.textContent,u===s&&u!==""&&u!==null&&(t.value=u),Zt(t)}function na(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(t,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":u?t.setProperty(i,s):typeof s!="number"||s===0||rn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function ka(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?t.setProperty(u,""):u==="float"?t.cssFloat="":t[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&s[h]!==u&&wn(t,h,u)}else for(var m in i)i.hasOwnProperty(m)&&wn(t,m,i[m])}function en(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ss=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function js(t){return ss.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Er(){}var Ud=null;function Nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zo=null,Ko=null;function Fg(t){var i=hi(t);if(i&&(t=i.stateNode)){var s=t[yt]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ze(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+an(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==t&&u.form===t.form){var h=u[yt]||null;if(!h)throw Error(a(90));Ze(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===t.form&&Cn(u)}break e;case"textarea":ta(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&$n(t,!!s.multiple,i,!1)}}}var Ld=!1;function Ig(t,i,s){if(Ld)return t(i,s);Ld=!0;try{var u=t(i);return u}finally{if(Ld=!1,(Zo!==null||Ko!==null)&&(Hf(),Zo&&(i=Zo,t=Ko,Ko=Zo=null,Fg(i),t)))for(i=0;i<t.length;i++)Fg(t[i])}}function gu(t,i){var s=t.stateNode;if(s===null)return null;var u=s[yt]||null;if(u===null)return null;s=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=!1;if(Tr)try{var vu={};Object.defineProperty(vu,"passive",{get:function(){Od=!0}}),window.addEventListener("test",vu,vu),window.removeEventListener("test",vu,vu)}catch{Od=!1}var os=null,Pd=null,jc=null;function zg(){if(jc)return jc;var t,i=Pd,s=i.length,u,h="value"in os?os.value:os.textContent,m=h.length;for(t=0;t<s&&i[t]===h[t];t++);var E=s-t;for(u=1;u<=E&&i[s-u]===h[m-u];u++);return jc=h.slice(t,1<u?1-u:void 0)}function ef(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function tf(){return!0}function Bg(){return!1}function Hi(t){function i(s,u,h,m,E){this._reactName=s,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(s=t[P],this[P]=s?s(m):m[P]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?tf:Bg,this.isPropagationStopped=Bg,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=tf)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=tf)},persist:function(){},isPersistent:tf}),i}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=Hi(eo),xu=v({},eo,{view:0,detail:0}),rT=Hi(xu),Fd,Id,Su,af=v({},xu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Su&&(Su&&t.type==="mousemove"?(Fd=t.screenX-Su.screenX,Id=t.screenY-Su.screenY):Id=Fd=0,Su=t),Fd)},movementY:function(t){return"movementY"in t?t.movementY:Id}}),Hg=Hi(af),sT=v({},af,{dataTransfer:0}),oT=Hi(sT),lT=v({},xu,{relatedTarget:0}),zd=Hi(lT),uT=v({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),cT=Hi(uT),fT=v({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hT=Hi(fT),dT=v({},eo,{data:0}),Gg=Hi(dT),pT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_T={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gT(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=_T[t])?!!i[t]:!1}function Bd(){return gT}var vT=v({},xu,{key:function(t){if(t.key){var i=pT[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ef(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(t){return t.type==="keypress"?ef(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ef(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xT=Hi(vT),ST=v({},af,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vg=Hi(ST),yT=v({},xu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),MT=Hi(yT),ET=v({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),TT=Hi(ET),bT=v({},af,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AT=Hi(bT),RT=v({},eo,{newState:0,oldState:0}),CT=Hi(RT),wT=[9,13,27,32],Hd=Tr&&"CompositionEvent"in window,yu=null;Tr&&"documentMode"in document&&(yu=document.documentMode);var DT=Tr&&"TextEvent"in window&&!yu,kg=Tr&&(!Hd||yu&&8<yu&&11>=yu),Xg=" ",Wg=!1;function qg(t,i){switch(t){case"keyup":return wT.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qo=!1;function UT(t,i){switch(t){case"compositionend":return Yg(i);case"keypress":return i.which!==32?null:(Wg=!0,Xg);case"textInput":return t=i.data,t===Xg&&Wg?null:t;default:return null}}function NT(t,i){if(Qo)return t==="compositionend"||!Hd&&qg(t,i)?(t=zg(),jc=Pd=os=null,Qo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kg&&i.locale!=="ko"?null:i.data;default:return null}}var LT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!LT[t.type]:i==="textarea"}function Kg(t,i,s,u){Zo?Ko?Ko.push(u):Ko=[u]:Zo=u,i=Yf(i,"onChange"),0<i.length&&(s=new nf("onChange","change",null,s,u),t.push({event:s,listeners:i}))}var Mu=null,Eu=null;function OT(t){US(t,0)}function rf(t){var i=Ta(t);if(Cn(i))return t}function Qg(t,i){if(t==="change")return i}var Jg=!1;if(Tr){var Gd;if(Tr){var Vd="oninput"in document;if(!Vd){var $g=document.createElement("div");$g.setAttribute("oninput","return;"),Vd=typeof $g.oninput=="function"}Gd=Vd}else Gd=!1;Jg=Gd&&(!document.documentMode||9<document.documentMode)}function jg(){Mu&&(Mu.detachEvent("onpropertychange",ev),Eu=Mu=null)}function ev(t){if(t.propertyName==="value"&&rf(Eu)){var i=[];Kg(i,Eu,t,Nd(t)),Ig(OT,i)}}function PT(t,i,s){t==="focusin"?(jg(),Mu=i,Eu=s,Mu.attachEvent("onpropertychange",ev)):t==="focusout"&&jg()}function FT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rf(Eu)}function IT(t,i){if(t==="click")return rf(i)}function zT(t,i){if(t==="input"||t==="change")return rf(i)}function BT(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ia=typeof Object.is=="function"?Object.is:BT;function Tu(t,i){if(ia(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var h=s[u];if(!qt.call(i,h)||!ia(t[h],i[h]))return!1}return!0}function tv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nv(t,i){var s=tv(t);t=0;for(var u;s;){if(s.nodeType===3){if(u=t+s.textContent.length,t<=i&&u>=i)return{node:s,offset:i-t};t=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=tv(s)}}function iv(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?iv(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function av(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=_n(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=_n(t.document)}return i}function kd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var HT=Tr&&"documentMode"in document&&11>=document.documentMode,Jo=null,Xd=null,bu=null,Wd=!1;function rv(t,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Wd||Jo==null||Jo!==_n(u)||(u=Jo,"selectionStart"in u&&kd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),bu&&Tu(bu,u)||(bu=u,u=Yf(Xd,"onSelect"),0<u.length&&(i=new nf("onSelect","select",null,i,s),t.push({event:i,listeners:u}),i.target=Jo)))}function to(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var $o={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionrun:to("Transition","TransitionRun"),transitionstart:to("Transition","TransitionStart"),transitioncancel:to("Transition","TransitionCancel"),transitionend:to("Transition","TransitionEnd")},qd={},sv={};Tr&&(sv=document.createElement("div").style,"AnimationEvent"in window||(delete $o.animationend.animation,delete $o.animationiteration.animation,delete $o.animationstart.animation),"TransitionEvent"in window||delete $o.transitionend.transition);function no(t){if(qd[t])return qd[t];if(!$o[t])return t;var i=$o[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in sv)return qd[t]=i[s];return t}var ov=no("animationend"),lv=no("animationiteration"),uv=no("animationstart"),GT=no("transitionrun"),VT=no("transitionstart"),kT=no("transitioncancel"),cv=no("transitionend"),fv=new Map,Yd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yd.push("scrollEnd");function Xa(t,i){fv.set(t,i),J(i,[t])}var sf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ba=[],jo=0,Zd=0;function of(){for(var t=jo,i=Zd=jo=0;i<t;){var s=ba[i];ba[i++]=null;var u=ba[i];ba[i++]=null;var h=ba[i];ba[i++]=null;var m=ba[i];if(ba[i++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}m!==0&&hv(s,h,m)}}function lf(t,i,s,u){ba[jo++]=t,ba[jo++]=i,ba[jo++]=s,ba[jo++]=u,Zd|=u,t.lanes|=u,t=t.alternate,t!==null&&(t.lanes|=u)}function Kd(t,i,s,u){return lf(t,i,s,u),uf(t)}function io(t,i){return lf(t,null,null,i),uf(t)}function hv(t,i,s){t.lanes|=s;var u=t.alternate;u!==null&&(u.lanes|=s);for(var h=!1,m=t.return;m!==null;)m.childLanes|=s,u=m.alternate,u!==null&&(u.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(h=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,h&&i!==null&&(h=31-ke(s),t=m.hiddenUpdates,u=t[h],u===null?t[h]=[i]:u.push(i),i.lane=s|536870912),m):null}function uf(t){if(50<Yu)throw Yu=0,am=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var el={};function XT(t,i,s,u){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function aa(t,i,s,u){return new XT(t,i,s,u)}function Qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function br(t,i){var s=t.alternate;return s===null?(s=aa(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function dv(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function cf(t,i,s,u,h,m){var E=0;if(u=t,typeof t=="function")Qd(t)&&(E=1);else if(typeof t=="string")E=Kb(t,s,ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=aa(31,s,i,h),t.elementType=D,t.lanes=m,t;case T:return ao(s.children,h,m,i);case y:E=8,h|=24;break;case S:return t=aa(12,s,i,h|2),t.elementType=S,t.lanes=m,t;case N:return t=aa(13,s,i,h),t.elementType=N,t.lanes=m,t;case w:return t=aa(19,s,i,h),t.elementType=w,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:E=10;break e;case U:E=9;break e;case R:E=11;break e;case C:E=14;break e;case b:E=16,u=null;break e}E=29,s=Error(a(130,t===null?"null":typeof t,"")),u=null}return i=aa(E,s,i,h),i.elementType=t,i.type=u,i.lanes=m,i}function ao(t,i,s,u){return t=aa(7,t,u,i),t.lanes=s,t}function Jd(t,i,s){return t=aa(6,t,null,i),t.lanes=s,t}function pv(t){var i=aa(18,null,null,0);return i.stateNode=t,i}function $d(t,i,s){return i=aa(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var mv=new WeakMap;function Aa(t,i){if(typeof t=="object"&&t!==null){var s=mv.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Ft(i)},mv.set(t,i),i)}return{value:t,source:i,stack:Ft(i)}}var tl=[],nl=0,ff=null,Au=0,Ra=[],Ca=0,ls=null,nr=1,ir="";function Ar(t,i){tl[nl++]=Au,tl[nl++]=ff,ff=t,Au=i}function _v(t,i,s){Ra[Ca++]=nr,Ra[Ca++]=ir,Ra[Ca++]=ls,ls=t;var u=nr;t=ir;var h=32-ke(u)-1;u&=~(1<<h),s+=1;var m=32-ke(i)+h;if(30<m){var E=h-h%5;m=(u&(1<<E)-1).toString(32),u>>=E,h-=E,nr=1<<32-ke(i)+h|s<<h|u,ir=m+t}else nr=1<<m|s<<h|u,ir=t}function jd(t){t.return!==null&&(Ar(t,1),_v(t,1,0))}function ep(t){for(;t===ff;)ff=tl[--nl],tl[nl]=null,Au=tl[--nl],tl[nl]=null;for(;t===ls;)ls=Ra[--Ca],Ra[Ca]=null,ir=Ra[--Ca],Ra[Ca]=null,nr=Ra[--Ca],Ra[Ca]=null}function gv(t,i){Ra[Ca++]=nr,Ra[Ca++]=ir,Ra[Ca++]=ls,nr=i.id,ir=i.overflow,ls=t}var di=null,Tn=null,Ht=!1,us=null,wa=!1,tp=Error(a(519));function cs(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ru(Aa(i,t)),tp}function vv(t){var i=t.stateNode,s=t.type,u=t.memoizedProps;switch(i[St]=t,i[yt]=u,s){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(s=0;s<Ku.length;s++)Pt(Ku[s],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":Pt("invalid",i),Si(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Pt("invalid",i);break;case"textarea":Pt("invalid",i),Va(i,u.value,u.defaultValue,u.children)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||PS(i.textContent,s)?(u.popover!=null&&(Pt("beforetoggle",i),Pt("toggle",i)),u.onScroll!=null&&Pt("scroll",i),u.onScrollEnd!=null&&Pt("scrollend",i),u.onClick!=null&&(i.onclick=Er),i=!0):i=!1,i||cs(t,!0)}function xv(t){for(di=t.return;di;)switch(di.tag){case 5:case 31:case 13:wa=!1;return;case 27:case 3:wa=!0;return;default:di=di.return}}function il(t){if(t!==di)return!1;if(!Ht)return xv(t),Ht=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||xm(t.type,t.memoizedProps)),s=!s),s&&Tn&&cs(t),xv(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Tn=XS(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Tn=XS(t)}else i===27?(i=Tn,Ts(t.type)?(t=Tm,Tm=null,Tn=t):Tn=i):Tn=di?Ua(t.stateNode.nextSibling):null;return!0}function ro(){Tn=di=null,Ht=!1}function np(){var t=us;return t!==null&&(Xi===null?Xi=t:Xi.push.apply(Xi,t),us=null),t}function Ru(t){us===null?us=[t]:us.push(t)}var ip=F(null),so=null,Rr=null;function fs(t,i,s){Se(ip,i._currentValue),i._currentValue=s}function Cr(t){t._currentValue=ip.current,K(ip)}function ap(t,i,s){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===s)break;t=t.return}}function rp(t,i,s,u){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;e:for(;m!==null;){var P=m;m=h;for(var X=0;X<i.length;X++)if(P.context===i[X]){m.lanes|=s,P=m.alternate,P!==null&&(P.lanes|=s),ap(m.return,s,t),u||(E=null);break e}m=P.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),ap(E,s,t),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===t){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function al(t,i,s,u){t=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var P=h.type;ia(h.pendingProps.value,E.value)||(t!==null?t.push(P):t=[P])}}else if(h===ve.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(ec):t=[ec])}h=h.return}t!==null&&rp(i,t,s,u),i.flags|=262144}function hf(t){for(t=t.firstContext;t!==null;){if(!ia(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function oo(t){so=t,Rr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pi(t){return Sv(so,t)}function df(t,i){return so===null&&oo(t),Sv(t,i)}function Sv(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Rr===null){if(t===null)throw Error(a(308));Rr=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Rr=Rr.next=i;return s}var WT=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,u){t.push(u)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},qT=o.unstable_scheduleCallback,YT=o.unstable_NormalPriority,kn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sp(){return{controller:new WT,data:new Map,refCount:0}}function Cu(t){t.refCount--,t.refCount===0&&qT(YT,function(){t.controller.abort()})}var wu=null,op=0,rl=0,sl=null;function ZT(t,i){if(wu===null){var s=wu=[];op=0,rl=cm(),sl={status:"pending",value:void 0,then:function(u){s.push(u)}}}return op++,i.then(yv,yv),i}function yv(){if(--op===0&&wu!==null){sl!==null&&(sl.status="fulfilled");var t=wu;wu=null,rl=0,sl=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function KT(t,i){var s=[],u={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return t.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),u}var Mv=I.S;I.S=function(t,i){rS=It(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ZT(t,i),Mv!==null&&Mv(t,i)};var lo=F(null);function lp(){var t=lo.current;return t!==null?t:gn.pooledCache}function pf(t,i){i===null?Se(lo,lo.current):Se(lo,i.pool)}function Ev(){var t=lp();return t===null?null:{parent:kn._currentValue,pool:t}}var ol=Error(a(460)),up=Error(a(474)),mf=Error(a(542)),_f={then:function(){}};function Tv(t){return t=t.status,t==="fulfilled"||t==="rejected"}function bv(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Er,Er),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Rv(t),t;default:if(typeof i.status=="string")i.then(Er,Er);else{if(t=gn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Rv(t),t}throw co=i,ol}}function uo(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(co=s,ol):s}}var co=null;function Av(){if(co===null)throw Error(a(459));var t=co;return co=null,t}function Rv(t){if(t===ol||t===mf)throw Error(a(483))}var ll=null,Du=0;function gf(t){var i=Du;return Du+=1,ll===null&&(ll=[]),bv(ll,t,i)}function Uu(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function vf(t,i){throw i.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Cv(t){function i(te,Z){if(t){var oe=te.deletions;oe===null?(te.deletions=[Z],te.flags|=16):oe.push(Z)}}function s(te,Z){if(!t)return null;for(;Z!==null;)i(te,Z),Z=Z.sibling;return null}function u(te){for(var Z=new Map;te!==null;)te.key!==null?Z.set(te.key,te):Z.set(te.index,te),te=te.sibling;return Z}function h(te,Z){return te=br(te,Z),te.index=0,te.sibling=null,te}function m(te,Z,oe){return te.index=oe,t?(oe=te.alternate,oe!==null?(oe=oe.index,oe<Z?(te.flags|=67108866,Z):oe):(te.flags|=67108866,Z)):(te.flags|=1048576,Z)}function E(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function P(te,Z,oe,Ee){return Z===null||Z.tag!==6?(Z=Jd(oe,te.mode,Ee),Z.return=te,Z):(Z=h(Z,oe),Z.return=te,Z)}function X(te,Z,oe,Ee){var ut=oe.type;return ut===T?ye(te,Z,oe.props.children,Ee,oe.key):Z!==null&&(Z.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===b&&uo(ut)===Z.type)?(Z=h(Z,oe.props),Uu(Z,oe),Z.return=te,Z):(Z=cf(oe.type,oe.key,oe.props,null,te.mode,Ee),Uu(Z,oe),Z.return=te,Z)}function ue(te,Z,oe,Ee){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==oe.containerInfo||Z.stateNode.implementation!==oe.implementation?(Z=$d(oe,te.mode,Ee),Z.return=te,Z):(Z=h(Z,oe.children||[]),Z.return=te,Z)}function ye(te,Z,oe,Ee,ut){return Z===null||Z.tag!==7?(Z=ao(oe,te.mode,Ee,ut),Z.return=te,Z):(Z=h(Z,oe),Z.return=te,Z)}function Ae(te,Z,oe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Jd(""+Z,te.mode,oe),Z.return=te,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case x:return oe=cf(Z.type,Z.key,Z.props,null,te.mode,oe),Uu(oe,Z),oe.return=te,oe;case M:return Z=$d(Z,te.mode,oe),Z.return=te,Z;case b:return Z=uo(Z),Ae(te,Z,oe)}if(q(Z)||B(Z))return Z=ao(Z,te.mode,oe,null),Z.return=te,Z;if(typeof Z.then=="function")return Ae(te,gf(Z),oe);if(Z.$$typeof===O)return Ae(te,df(te,Z),oe);vf(te,Z)}return null}function fe(te,Z,oe,Ee){var ut=Z!==null?Z.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return ut!==null?null:P(te,Z,""+oe,Ee);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case x:return oe.key===ut?X(te,Z,oe,Ee):null;case M:return oe.key===ut?ue(te,Z,oe,Ee):null;case b:return oe=uo(oe),fe(te,Z,oe,Ee)}if(q(oe)||B(oe))return ut!==null?null:ye(te,Z,oe,Ee,null);if(typeof oe.then=="function")return fe(te,Z,gf(oe),Ee);if(oe.$$typeof===O)return fe(te,Z,df(te,oe),Ee);vf(te,oe)}return null}function me(te,Z,oe,Ee,ut){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return te=te.get(oe)||null,P(Z,te,""+Ee,ut);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case x:return te=te.get(Ee.key===null?oe:Ee.key)||null,X(Z,te,Ee,ut);case M:return te=te.get(Ee.key===null?oe:Ee.key)||null,ue(Z,te,Ee,ut);case b:return Ee=uo(Ee),me(te,Z,oe,Ee,ut)}if(q(Ee)||B(Ee))return te=te.get(oe)||null,ye(Z,te,Ee,ut,null);if(typeof Ee.then=="function")return me(te,Z,oe,gf(Ee),ut);if(Ee.$$typeof===O)return me(te,Z,oe,df(Z,Ee),ut);vf(Z,Ee)}return null}function $e(te,Z,oe,Ee){for(var ut=null,Kt=null,nt=Z,At=Z=0,Bt=null;nt!==null&&At<oe.length;At++){nt.index>At?(Bt=nt,nt=null):Bt=nt.sibling;var Qt=fe(te,nt,oe[At],Ee);if(Qt===null){nt===null&&(nt=Bt);break}t&&nt&&Qt.alternate===null&&i(te,nt),Z=m(Qt,Z,At),Kt===null?ut=Qt:Kt.sibling=Qt,Kt=Qt,nt=Bt}if(At===oe.length)return s(te,nt),Ht&&Ar(te,At),ut;if(nt===null){for(;At<oe.length;At++)nt=Ae(te,oe[At],Ee),nt!==null&&(Z=m(nt,Z,At),Kt===null?ut=nt:Kt.sibling=nt,Kt=nt);return Ht&&Ar(te,At),ut}for(nt=u(nt);At<oe.length;At++)Bt=me(nt,te,At,oe[At],Ee),Bt!==null&&(t&&Bt.alternate!==null&&nt.delete(Bt.key===null?At:Bt.key),Z=m(Bt,Z,At),Kt===null?ut=Bt:Kt.sibling=Bt,Kt=Bt);return t&&nt.forEach(function(ws){return i(te,ws)}),Ht&&Ar(te,At),ut}function ht(te,Z,oe,Ee){if(oe==null)throw Error(a(151));for(var ut=null,Kt=null,nt=Z,At=Z=0,Bt=null,Qt=oe.next();nt!==null&&!Qt.done;At++,Qt=oe.next()){nt.index>At?(Bt=nt,nt=null):Bt=nt.sibling;var ws=fe(te,nt,Qt.value,Ee);if(ws===null){nt===null&&(nt=Bt);break}t&&nt&&ws.alternate===null&&i(te,nt),Z=m(ws,Z,At),Kt===null?ut=ws:Kt.sibling=ws,Kt=ws,nt=Bt}if(Qt.done)return s(te,nt),Ht&&Ar(te,At),ut;if(nt===null){for(;!Qt.done;At++,Qt=oe.next())Qt=Ae(te,Qt.value,Ee),Qt!==null&&(Z=m(Qt,Z,At),Kt===null?ut=Qt:Kt.sibling=Qt,Kt=Qt);return Ht&&Ar(te,At),ut}for(nt=u(nt);!Qt.done;At++,Qt=oe.next())Qt=me(nt,te,At,Qt.value,Ee),Qt!==null&&(t&&Qt.alternate!==null&&nt.delete(Qt.key===null?At:Qt.key),Z=m(Qt,Z,At),Kt===null?ut=Qt:Kt.sibling=Qt,Kt=Qt);return t&&nt.forEach(function(sA){return i(te,sA)}),Ht&&Ar(te,At),ut}function pn(te,Z,oe,Ee){if(typeof oe=="object"&&oe!==null&&oe.type===T&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case x:e:{for(var ut=oe.key;Z!==null;){if(Z.key===ut){if(ut=oe.type,ut===T){if(Z.tag===7){s(te,Z.sibling),Ee=h(Z,oe.props.children),Ee.return=te,te=Ee;break e}}else if(Z.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===b&&uo(ut)===Z.type){s(te,Z.sibling),Ee=h(Z,oe.props),Uu(Ee,oe),Ee.return=te,te=Ee;break e}s(te,Z);break}else i(te,Z);Z=Z.sibling}oe.type===T?(Ee=ao(oe.props.children,te.mode,Ee,oe.key),Ee.return=te,te=Ee):(Ee=cf(oe.type,oe.key,oe.props,null,te.mode,Ee),Uu(Ee,oe),Ee.return=te,te=Ee)}return E(te);case M:e:{for(ut=oe.key;Z!==null;){if(Z.key===ut)if(Z.tag===4&&Z.stateNode.containerInfo===oe.containerInfo&&Z.stateNode.implementation===oe.implementation){s(te,Z.sibling),Ee=h(Z,oe.children||[]),Ee.return=te,te=Ee;break e}else{s(te,Z);break}else i(te,Z);Z=Z.sibling}Ee=$d(oe,te.mode,Ee),Ee.return=te,te=Ee}return E(te);case b:return oe=uo(oe),pn(te,Z,oe,Ee)}if(q(oe))return $e(te,Z,oe,Ee);if(B(oe)){if(ut=B(oe),typeof ut!="function")throw Error(a(150));return oe=ut.call(oe),ht(te,Z,oe,Ee)}if(typeof oe.then=="function")return pn(te,Z,gf(oe),Ee);if(oe.$$typeof===O)return pn(te,Z,df(te,oe),Ee);vf(te,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Z!==null&&Z.tag===6?(s(te,Z.sibling),Ee=h(Z,oe),Ee.return=te,te=Ee):(s(te,Z),Ee=Jd(oe,te.mode,Ee),Ee.return=te,te=Ee),E(te)):s(te,Z)}return function(te,Z,oe,Ee){try{Du=0;var ut=pn(te,Z,oe,Ee);return ll=null,ut}catch(nt){if(nt===ol||nt===mf)throw nt;var Kt=aa(29,nt,null,te.mode);return Kt.lanes=Ee,Kt.return=te,Kt}finally{}}}var fo=Cv(!0),wv=Cv(!1),hs=!1;function cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fp(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ds(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ps(t,i,s){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,($t&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=uf(t),hv(t,null,s),i}return lf(t,u,i,s),uf(t)}function Nu(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,st(t,s)}}function hp(t,i){var s=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var dp=!1;function Lu(){if(dp){var t=sl;if(t!==null)throw t}}function Ou(t,i,s,u){dp=!1;var h=t.updateQueue;hs=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,P=h.shared.pending;if(P!==null){h.shared.pending=null;var X=P,ue=X.next;X.next=null,E===null?m=ue:E.next=ue,E=X;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,P=ye.lastBaseUpdate,P!==E&&(P===null?ye.firstBaseUpdate=ue:P.next=ue,ye.lastBaseUpdate=X))}if(m!==null){var Ae=h.baseState;E=0,ye=ue=X=null,P=m;do{var fe=P.lane&-536870913,me=fe!==P.lane;if(me?(zt&fe)===fe:(u&fe)===fe){fe!==0&&fe===rl&&(dp=!0),ye!==null&&(ye=ye.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});e:{var $e=t,ht=P;fe=i;var pn=s;switch(ht.tag){case 1:if($e=ht.payload,typeof $e=="function"){Ae=$e.call(pn,Ae,fe);break e}Ae=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=ht.payload,fe=typeof $e=="function"?$e.call(pn,Ae,fe):$e,fe==null)break e;Ae=v({},Ae,fe);break e;case 2:hs=!0}}fe=P.callback,fe!==null&&(t.flags|=64,me&&(t.flags|=8192),me=h.callbacks,me===null?h.callbacks=[fe]:me.push(fe))}else me={lane:fe,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ye===null?(ue=ye=me,X=Ae):ye=ye.next=me,E|=fe;if(P=P.next,P===null){if(P=h.shared.pending,P===null)break;me=P,P=me.next,me.next=null,h.lastBaseUpdate=me,h.shared.pending=null}}while(!0);ye===null&&(X=Ae),h.baseState=X,h.firstBaseUpdate=ue,h.lastBaseUpdate=ye,m===null&&(h.shared.lanes=0),xs|=E,t.lanes=E,t.memoizedState=Ae}}function Dv(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Uv(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Dv(s[t],i)}var ul=F(null),xf=F(0);function Nv(t,i){t=Ir,Se(xf,t),Se(ul,i),Ir=t|i.baseLanes}function pp(){Se(xf,Ir),Se(ul,ul.current)}function mp(){Ir=xf.current,K(ul),K(xf)}var ra=F(null),Da=null;function ms(t){var i=t.alternate;Se(Bn,Bn.current&1),Se(ra,t),Da===null&&(i===null||ul.current!==null||i.memoizedState!==null)&&(Da=t)}function _p(t){Se(Bn,Bn.current),Se(ra,t),Da===null&&(Da=t)}function Lv(t){t.tag===22?(Se(Bn,Bn.current),Se(ra,t),Da===null&&(Da=t)):_s()}function _s(){Se(Bn,Bn.current),Se(ra,ra.current)}function sa(t){K(ra),Da===t&&(Da=null),K(Bn)}var Bn=F(0);function Sf(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Mm(s)||Em(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wr=0,Tt=null,hn=null,Xn=null,yf=!1,cl=!1,ho=!1,Mf=0,Pu=0,fl=null,QT=0;function Pn(){throw Error(a(321))}function gp(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ia(t[s],i[s]))return!1;return!0}function vp(t,i,s,u,h,m){return wr=m,Tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?_x:Lp,ho=!1,m=s(u,h),ho=!1,cl&&(m=Pv(i,s,u,h)),Ov(t),m}function Ov(t){I.H=zu;var i=hn!==null&&hn.next!==null;if(wr=0,Xn=hn=Tt=null,yf=!1,Pu=0,fl=null,i)throw Error(a(300));t===null||Wn||(t=t.dependencies,t!==null&&hf(t)&&(Wn=!0))}function Pv(t,i,s,u){Tt=t;var h=0;do{if(cl&&(fl=null),Pu=0,cl=!1,25<=h)throw Error(a(301));if(h+=1,Xn=hn=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=gx,m=i(s,u)}while(cl);return m}function JT(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?Fu(i):i,t=t.useState()[0],(hn!==null?hn.memoizedState:null)!==t&&(Tt.flags|=1024),i}function xp(){var t=Mf!==0;return Mf=0,t}function Sp(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function yp(t){if(yf){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}yf=!1}wr=0,Xn=hn=Tt=null,cl=!1,Pu=Mf=0,fl=null}function Ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xn===null?Tt.memoizedState=Xn=t:Xn=Xn.next=t,Xn}function Hn(){if(hn===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=hn.next;var i=Xn===null?Tt.memoizedState:Xn.next;if(i!==null)Xn=i,hn=t;else{if(t===null)throw Tt.alternate===null?Error(a(467)):Error(a(310));hn=t,t={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},Xn===null?Tt.memoizedState=Xn=t:Xn=Xn.next=t}return Xn}function Ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fu(t){var i=Pu;return Pu+=1,fl===null&&(fl=[]),t=bv(fl,t,i),i=Tt,(Xn===null?i.memoizedState:Xn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?_x:Lp),t}function Tf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fu(t);if(t.$$typeof===O)return pi(t)}throw Error(a(438,String(t)))}function Mp(t){var i=null,s=Tt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=Tt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Ef(),Tt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),u=0;u<t;u++)s[u]=z;return i.index++,s}function Dr(t,i){return typeof i=="function"?i(t):i}function bf(t){var i=Hn();return Ep(i,hn,t)}function Ep(t,i,s){var u=t.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var h=t.baseQueue,m=u.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,u.pending=null}if(m=t.baseState,h===null)t.memoizedState=m;else{i=h.next;var P=E=null,X=null,ue=i,ye=!1;do{var Ae=ue.lane&-536870913;if(Ae!==ue.lane?(zt&Ae)===Ae:(wr&Ae)===Ae){var fe=ue.revertLane;if(fe===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),Ae===rl&&(ye=!0);else if((wr&fe)===fe){ue=ue.next,fe===rl&&(ye=!0);continue}else Ae={lane:0,revertLane:ue.revertLane,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},X===null?(P=X=Ae,E=m):X=X.next=Ae,Tt.lanes|=fe,xs|=fe;Ae=ue.action,ho&&s(m,Ae),m=ue.hasEagerState?ue.eagerState:s(m,Ae)}else fe={lane:Ae,revertLane:ue.revertLane,gesture:ue.gesture,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},X===null?(P=X=fe,E=m):X=X.next=fe,Tt.lanes|=Ae,xs|=Ae;ue=ue.next}while(ue!==null&&ue!==i);if(X===null?E=m:X.next=P,!ia(m,t.memoizedState)&&(Wn=!0,ye&&(s=sl,s!==null)))throw s;t.memoizedState=m,t.baseState=E,t.baseQueue=X,u.lastRenderedState=m}return h===null&&(u.lanes=0),[t.memoizedState,u.dispatch]}function Tp(t){var i=Hn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var u=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do m=t(m,E.action),E=E.next;while(E!==h);ia(m,i.memoizedState)||(Wn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,u]}function Fv(t,i,s){var u=Tt,h=Hn(),m=Ht;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!ia((hn||h).memoizedState,s);if(E&&(h.memoizedState=s,Wn=!0),h=h.queue,Rp(Bv.bind(null,u,h,t),[t]),h.getSnapshot!==i||E||Xn!==null&&Xn.memoizedState.tag&1){if(u.flags|=2048,hl(9,{destroy:void 0},zv.bind(null,u,h,s,i),null),gn===null)throw Error(a(349));m||(wr&127)!==0||Iv(u,i,s)}return s}function Iv(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Tt.updateQueue,i===null?(i=Ef(),Tt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function zv(t,i,s,u){i.value=s,i.getSnapshot=u,Hv(i)&&Gv(t)}function Bv(t,i,s){return s(function(){Hv(i)&&Gv(t)})}function Hv(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ia(t,s)}catch{return!0}}function Gv(t){var i=io(t,2);i!==null&&Wi(i,t,2)}function bp(t){var i=Ui();if(typeof t=="function"){var s=t;if(t=s(),ho){Fe(!0);try{s()}finally{Fe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:t},i}function Vv(t,i,s,u){return t.baseState=s,Ep(t,hn,typeof u=="function"?u:Dr)}function $T(t,i,s,u,h){if(Cf(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};I.T!==null?s(!0):m.isTransition=!1,u(m),s=i.pending,s===null?(m.next=i.pending=m,kv(i,m)):(m.next=s.next,i.pending=s.next=m)}}function kv(t,i){var s=i.action,u=i.payload,h=t.state;if(i.isTransition){var m=I.T,E={};I.T=E;try{var P=s(h,u),X=I.S;X!==null&&X(E,P),Xv(t,i,P)}catch(ue){Ap(t,i,ue)}finally{m!==null&&E.types!==null&&(m.types=E.types),I.T=m}}else try{m=s(h,u),Xv(t,i,m)}catch(ue){Ap(t,i,ue)}}function Xv(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){Wv(t,i,u)},function(u){return Ap(t,i,u)}):Wv(t,i,s)}function Wv(t,i,s){i.status="fulfilled",i.value=s,qv(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,kv(t,s)))}function Ap(t,i,s){var u=t.pending;if(t.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,qv(i),i=i.next;while(i!==u)}t.action=null}function qv(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Yv(t,i){return i}function Zv(t,i){if(Ht){var s=gn.formState;if(s!==null){e:{var u=Tt;if(Ht){if(Tn){t:{for(var h=Tn,m=wa;h.nodeType!==8;){if(!m){h=null;break t}if(h=Ua(h.nextSibling),h===null){h=null;break t}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Tn=Ua(h.nextSibling),u=h.data==="F!";break e}}cs(u)}u=!1}u&&(i=s[0])}}return s=Ui(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yv,lastRenderedState:i},s.queue=u,s=dx.bind(null,Tt,u),u.dispatch=s,u=bp(!1),m=Np.bind(null,Tt,!1,u.queue),u=Ui(),h={state:i,dispatch:null,action:t,pending:null},u.queue=h,s=$T.bind(null,Tt,h,m,s),h.dispatch=s,u.memoizedState=t,[i,s,!1]}function Kv(t){var i=Hn();return Qv(i,hn,t)}function Qv(t,i,s){if(i=Ep(t,i,Yv)[0],t=bf(Dr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=Fu(i)}catch(E){throw E===ol?mf:E}else u=i;i=Hn();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(Tt.flags|=2048,hl(9,{destroy:void 0},jT.bind(null,h,s),null)),[u,m,t]}function jT(t,i){t.action=i}function Jv(t){var i=Hn(),s=hn;if(s!==null)return Qv(i,s,t);Hn(),i=i.memoizedState,s=Hn();var u=s.queue.dispatch;return s.memoizedState=t,[i,u,!1]}function hl(t,i,s,u){return t={tag:t,create:s,deps:u,inst:i,next:null},i=Tt.updateQueue,i===null&&(i=Ef(),Tt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(u=s.next,s.next=t,t.next=u,i.lastEffect=t),t}function $v(){return Hn().memoizedState}function Af(t,i,s,u){var h=Ui();Tt.flags|=t,h.memoizedState=hl(1|i,{destroy:void 0},s,u===void 0?null:u)}function Rf(t,i,s,u){var h=Hn();u=u===void 0?null:u;var m=h.memoizedState.inst;hn!==null&&u!==null&&gp(u,hn.memoizedState.deps)?h.memoizedState=hl(i,m,s,u):(Tt.flags|=t,h.memoizedState=hl(1|i,m,s,u))}function jv(t,i){Af(8390656,8,t,i)}function Rp(t,i){Rf(2048,8,t,i)}function eb(t){Tt.flags|=4;var i=Tt.updateQueue;if(i===null)i=Ef(),Tt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function ex(t){var i=Hn().memoizedState;return eb({ref:i,nextImpl:t}),function(){if(($t&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function tx(t,i){return Rf(4,2,t,i)}function nx(t,i){return Rf(4,4,t,i)}function ix(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ax(t,i,s){s=s!=null?s.concat([t]):null,Rf(4,4,ix.bind(null,i,t),s)}function Cp(){}function rx(t,i){var s=Hn();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&gp(i,u[1])?u[0]:(s.memoizedState=[t,i],t)}function sx(t,i){var s=Hn();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&gp(i,u[1]))return u[0];if(u=t(),ho){Fe(!0);try{t()}finally{Fe(!1)}}return s.memoizedState=[u,i],u}function wp(t,i,s){return s===void 0||(wr&1073741824)!==0&&(zt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=oS(),Tt.lanes|=t,xs|=t,s)}function ox(t,i,s,u){return ia(s,i)?s:ul.current!==null?(t=wp(t,s,u),ia(t,i)||(Wn=!0),t):(wr&42)===0||(wr&1073741824)!==0&&(zt&261930)===0?(Wn=!0,t.memoizedState=s):(t=oS(),Tt.lanes|=t,xs|=t,i)}function lx(t,i,s,u,h){var m=G.p;G.p=m!==0&&8>m?m:8;var E=I.T,P={};I.T=P,Np(t,!1,i,s);try{var X=h(),ue=I.S;if(ue!==null&&ue(P,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var ye=KT(X,u);Iu(t,i,ye,ua(t))}else Iu(t,i,u,ua(t))}catch(Ae){Iu(t,i,{then:function(){},status:"rejected",reason:Ae},ua())}finally{G.p=m,E!==null&&P.types!==null&&(E.types=P.types),I.T=E}}function tb(){}function Dp(t,i,s,u){if(t.tag!==5)throw Error(a(476));var h=ux(t).queue;lx(t,h,i,Y,s===null?tb:function(){return cx(t),s(u)})}function ux(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function cx(t){var i=ux(t);i.next===null&&(i=t.alternate.memoizedState),Iu(t,i.next.queue,{},ua())}function Up(){return pi(ec)}function fx(){return Hn().memoizedState}function hx(){return Hn().memoizedState}function nb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ua();t=ds(s);var u=ps(i,t,s);u!==null&&(Wi(u,i,s),Nu(u,i,s)),i={cache:sp()},t.payload=i;return}i=i.return}}function ib(t,i,s){var u=ua();s={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Cf(t)?px(i,s):(s=Kd(t,i,s,u),s!==null&&(Wi(s,t,u),mx(s,i,u)))}function dx(t,i,s){var u=ua();Iu(t,i,s,u)}function Iu(t,i,s,u){var h={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Cf(t))px(i,h);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,P=m(E,s);if(h.hasEagerState=!0,h.eagerState=P,ia(P,E))return lf(t,i,h,0),gn===null&&of(),!1}catch{}finally{}if(s=Kd(t,i,h,u),s!==null)return Wi(s,t,u),mx(s,i,u),!0}return!1}function Np(t,i,s,u){if(u={lane:2,revertLane:cm(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Cf(t)){if(i)throw Error(a(479))}else i=Kd(t,s,u,2),i!==null&&Wi(i,t,2)}function Cf(t){var i=t.alternate;return t===Tt||i!==null&&i===Tt}function px(t,i){cl=yf=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function mx(t,i,s){if((s&4194048)!==0){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,st(t,s)}}var zu={readContext:pi,use:Tf,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useLayoutEffect:Pn,useInsertionEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useSyncExternalStore:Pn,useId:Pn,useHostTransitionStatus:Pn,useFormState:Pn,useActionState:Pn,useOptimistic:Pn,useMemoCache:Pn,useCacheRefresh:Pn};zu.useEffectEvent=Pn;var _x={readContext:pi,use:Tf,useCallback:function(t,i){return Ui().memoizedState=[t,i===void 0?null:i],t},useContext:pi,useEffect:jv,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Af(4194308,4,ix.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Af(4194308,4,t,i)},useInsertionEffect:function(t,i){Af(4,2,t,i)},useMemo:function(t,i){var s=Ui();i=i===void 0?null:i;var u=t();if(ho){Fe(!0);try{t()}finally{Fe(!1)}}return s.memoizedState=[u,i],u},useReducer:function(t,i,s){var u=Ui();if(s!==void 0){var h=s(i);if(ho){Fe(!0);try{s(i)}finally{Fe(!1)}}}else h=i;return u.memoizedState=u.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},u.queue=t,t=t.dispatch=ib.bind(null,Tt,t),[u.memoizedState,t]},useRef:function(t){var i=Ui();return t={current:t},i.memoizedState=t},useState:function(t){t=bp(t);var i=t.queue,s=dx.bind(null,Tt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Cp,useDeferredValue:function(t,i){var s=Ui();return wp(s,t,i)},useTransition:function(){var t=bp(!1);return t=lx.bind(null,Tt,t.queue,!0,!1),Ui().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var u=Tt,h=Ui();if(Ht){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),gn===null)throw Error(a(349));(zt&127)!==0||Iv(u,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,jv(Bv.bind(null,u,m,t),[t]),u.flags|=2048,hl(9,{destroy:void 0},zv.bind(null,u,m,s,i),null),s},useId:function(){var t=Ui(),i=gn.identifierPrefix;if(Ht){var s=ir,u=nr;s=(u&~(1<<32-ke(u)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Mf++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=QT++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Up,useFormState:Zv,useActionState:Zv,useOptimistic:function(t){var i=Ui();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Np.bind(null,Tt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Mp,useCacheRefresh:function(){return Ui().memoizedState=nb.bind(null,Tt)},useEffectEvent:function(t){var i=Ui(),s={impl:t};return i.memoizedState=s,function(){if(($t&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Lp={readContext:pi,use:Tf,useCallback:rx,useContext:pi,useEffect:Rp,useImperativeHandle:ax,useInsertionEffect:tx,useLayoutEffect:nx,useMemo:sx,useReducer:bf,useRef:$v,useState:function(){return bf(Dr)},useDebugValue:Cp,useDeferredValue:function(t,i){var s=Hn();return ox(s,hn.memoizedState,t,i)},useTransition:function(){var t=bf(Dr)[0],i=Hn().memoizedState;return[typeof t=="boolean"?t:Fu(t),i]},useSyncExternalStore:Fv,useId:fx,useHostTransitionStatus:Up,useFormState:Kv,useActionState:Kv,useOptimistic:function(t,i){var s=Hn();return Vv(s,hn,t,i)},useMemoCache:Mp,useCacheRefresh:hx};Lp.useEffectEvent=ex;var gx={readContext:pi,use:Tf,useCallback:rx,useContext:pi,useEffect:Rp,useImperativeHandle:ax,useInsertionEffect:tx,useLayoutEffect:nx,useMemo:sx,useReducer:Tp,useRef:$v,useState:function(){return Tp(Dr)},useDebugValue:Cp,useDeferredValue:function(t,i){var s=Hn();return hn===null?wp(s,t,i):ox(s,hn.memoizedState,t,i)},useTransition:function(){var t=Tp(Dr)[0],i=Hn().memoizedState;return[typeof t=="boolean"?t:Fu(t),i]},useSyncExternalStore:Fv,useId:fx,useHostTransitionStatus:Up,useFormState:Jv,useActionState:Jv,useOptimistic:function(t,i){var s=Hn();return hn!==null?Vv(s,hn,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Mp,useCacheRefresh:hx};gx.useEffectEvent=ex;function Op(t,i,s,u){i=t.memoizedState,s=s(u,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Pp={enqueueSetState:function(t,i,s){t=t._reactInternals;var u=ua(),h=ds(u);h.payload=i,s!=null&&(h.callback=s),i=ps(t,h,u),i!==null&&(Wi(i,t,u),Nu(i,t,u))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var u=ua(),h=ds(u);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ps(t,h,u),i!==null&&(Wi(i,t,u),Nu(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ua(),u=ds(s);u.tag=2,i!=null&&(u.callback=i),i=ps(t,u,s),i!==null&&(Wi(i,t,s),Nu(i,t,s))}};function vx(t,i,s,u,h,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!Tu(s,u)||!Tu(h,m):!0}function xx(t,i,s,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==t&&Pp.enqueueReplaceState(i,i.state,null)}function po(t,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var h in t)s[h]===void 0&&(s[h]=t[h])}return s}function Sx(t){sf(t)}function yx(t){console.error(t)}function Mx(t){sf(t)}function wf(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Ex(t,i,s){try{var u=t.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Fp(t,i,s){return s=ds(s),s.tag=3,s.payload={element:null},s.callback=function(){wf(t,i)},s}function Tx(t){return t=ds(t),t.tag=3,t}function bx(t,i,s,u){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;t.payload=function(){return h(m)},t.callback=function(){Ex(i,s,u)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Ex(i,s,u),typeof h!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var P=u.stack;this.componentDidCatch(u.value,{componentStack:P!==null?P:""})})}function ab(t,i,s,u,h){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&al(i,s,h,!0),s=ra.current,s!==null){switch(s.tag){case 31:case 13:return Da===null?Gf():s.alternate===null&&Fn===0&&(Fn=3),s.flags&=-257,s.flags|=65536,s.lanes=h,u===_f?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),om(t,u,h)),!1;case 22:return s.flags|=65536,u===_f?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),om(t,u,h)),!1}throw Error(a(435,s.tag))}return om(t,u,h),Gf(),!1}if(Ht)return i=ra.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==tp&&(t=Error(a(422),{cause:u}),Ru(Aa(t,s)))):(u!==tp&&(i=Error(a(423),{cause:u}),Ru(Aa(i,s))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,u=Aa(u,s),h=Fp(t.stateNode,u,h),hp(t,h),Fn!==4&&(Fn=2)),!1;var m=Error(a(520),{cause:u});if(m=Aa(m,s),qu===null?qu=[m]:qu.push(m),Fn!==4&&(Fn=2),i===null)return!0;u=Aa(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=h&-h,s.lanes|=t,t=Fp(s.stateNode,u,t),hp(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ss===null||!Ss.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Tx(h),bx(h,t,s,u),hp(s,h),!1}s=s.return}while(s!==null);return!1}var Ip=Error(a(461)),Wn=!1;function mi(t,i,s,u){i.child=t===null?wv(i,null,s,u):fo(i,t.child,s,u)}function Ax(t,i,s,u,h){s=s.render;var m=i.ref;if("ref"in u){var E={};for(var P in u)P!=="ref"&&(E[P]=u[P])}else E=u;return oo(i),u=vp(t,i,s,E,m,h),P=xp(),t!==null&&!Wn?(Sp(t,i,h),Ur(t,i,h)):(Ht&&P&&jd(i),i.flags|=1,mi(t,i,u,h),i.child)}function Rx(t,i,s,u,h){if(t===null){var m=s.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Cx(t,i,m,u,h)):(t=cf(s.type,null,u,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Wp(t,h)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:Tu,s(E,u)&&t.ref===i.ref)return Ur(t,i,h)}return i.flags|=1,t=br(m,u),t.ref=i.ref,t.return=i,i.child=t}function Cx(t,i,s,u,h){if(t!==null){var m=t.memoizedProps;if(Tu(m,u)&&t.ref===i.ref)if(Wn=!1,i.pendingProps=u=m,Wp(t,h))(t.flags&131072)!==0&&(Wn=!0);else return i.lanes=t.lanes,Ur(t,i,h)}return zp(t,i,s,u,h)}function wx(t,i,s,u){var h=u.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(u=i.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;u=h&~m}else u=0,i.child=null;return Dx(t,i,m,s,u)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&pf(i,m!==null?m.cachePool:null),m!==null?Nv(i,m):pp(),Lv(i);else return u=i.lanes=536870912,Dx(t,i,m!==null?m.baseLanes|s:s,s,u)}else m!==null?(pf(i,m.cachePool),Nv(i,m),_s(),i.memoizedState=null):(t!==null&&pf(i,null),pp(),_s());return mi(t,i,h,s),i.child}function Bu(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Dx(t,i,s,u,h){var m=lp();return m=m===null?null:{parent:kn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&pf(i,null),pp(),Lv(i),t!==null&&al(t,i,u,!0),i.childLanes=h,null}function Df(t,i){return i=Nf({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Ux(t,i,s){return fo(i,t.child,null,s),t=Df(i,i.pendingProps),t.flags|=2,sa(i),i.memoizedState=null,t}function rb(t,i,s){var u=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ht){if(u.mode==="hidden")return t=Df(i,u),i.lanes=536870912,Bu(null,t);if(_p(i),(t=Tn)?(t=kS(t,wa),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ls!==null?{id:nr,overflow:ir}:null,retryLane:536870912,hydrationErrors:null},s=pv(t),s.return=i,i.child=s,di=i,Tn=null)):t=null,t===null)throw cs(i);return i.lanes=536870912,null}return Df(i,u)}var m=t.memoizedState;if(m!==null){var E=m.dehydrated;if(_p(i),h)if(i.flags&256)i.flags&=-257,i=Ux(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Wn||al(t,i,s,!1),h=(s&t.childLanes)!==0,Wn||h){if(u=gn,u!==null&&(E=Qe(u,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,io(t,E),Wi(u,t,E),Ip;Gf(),i=Ux(t,i,s)}else t=m.treeContext,Tn=Ua(E.nextSibling),di=i,Ht=!0,us=null,wa=!1,t!==null&&gv(i,t),i=Df(i,u),i.flags|=4096;return i}return t=br(t.child,{mode:u.mode,children:u.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Uf(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function zp(t,i,s,u,h){return oo(i),s=vp(t,i,s,u,void 0,h),u=xp(),t!==null&&!Wn?(Sp(t,i,h),Ur(t,i,h)):(Ht&&u&&jd(i),i.flags|=1,mi(t,i,s,h),i.child)}function Nx(t,i,s,u,h,m){return oo(i),i.updateQueue=null,s=Pv(i,u,s,h),Ov(t),u=xp(),t!==null&&!Wn?(Sp(t,i,m),Ur(t,i,m)):(Ht&&u&&jd(i),i.flags|=1,mi(t,i,s,m),i.child)}function Lx(t,i,s,u,h){if(oo(i),i.stateNode===null){var m=el,E=s.contextType;typeof E=="object"&&E!==null&&(m=pi(E)),m=new s(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Pp,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},cp(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?pi(E):el,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Op(i,s,E,u),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Pp.enqueueReplaceState(m,m.state,null),Ou(i,u,m,h),Lu(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(t===null){m=i.stateNode;var P=i.memoizedProps,X=po(s,P);m.props=X;var ue=m.context,ye=s.contextType;E=el,typeof ye=="object"&&ye!==null&&(E=pi(ye));var Ae=s.getDerivedStateFromProps;ye=typeof Ae=="function"||typeof m.getSnapshotBeforeUpdate=="function",P=i.pendingProps!==P,ye||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(P||ue!==E)&&xx(i,m,u,E),hs=!1;var fe=i.memoizedState;m.state=fe,Ou(i,u,m,h),Lu(),ue=i.memoizedState,P||fe!==ue||hs?(typeof Ae=="function"&&(Op(i,s,Ae,u),ue=i.memoizedState),(X=hs||vx(i,s,X,u,fe,ue,E))?(ye||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=ue),m.props=u,m.state=ue,m.context=E,u=X):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,fp(t,i),E=i.memoizedProps,ye=po(s,E),m.props=ye,Ae=i.pendingProps,fe=m.context,ue=s.contextType,X=el,typeof ue=="object"&&ue!==null&&(X=pi(ue)),P=s.getDerivedStateFromProps,(ue=typeof P=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Ae||fe!==X)&&xx(i,m,u,X),hs=!1,fe=i.memoizedState,m.state=fe,Ou(i,u,m,h),Lu();var me=i.memoizedState;E!==Ae||fe!==me||hs||t!==null&&t.dependencies!==null&&hf(t.dependencies)?(typeof P=="function"&&(Op(i,s,P,u),me=i.memoizedState),(ye=hs||vx(i,s,ye,u,fe,me,X)||t!==null&&t.dependencies!==null&&hf(t.dependencies))?(ue||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,me,X),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,me,X)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&fe===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&fe===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=me),m.props=u,m.state=me,m.context=X,u=ye):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&fe===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&fe===t.memoizedState||(i.flags|=1024),u=!1)}return m=u,Uf(t,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&u?(i.child=fo(i,t.child,null,h),i.child=fo(i,null,s,h)):mi(t,i,s,h),i.memoizedState=m.state,t=i.child):t=Ur(t,i,h),t}function Ox(t,i,s,u){return ro(),i.flags|=256,mi(t,i,s,u),i.child}var Bp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hp(t){return{baseLanes:t,cachePool:Ev()}}function Gp(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=la),t}function Px(t,i,s){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(Bn.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ht){if(h?ms(i):_s(),(t=Tn)?(t=kS(t,wa),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ls!==null?{id:nr,overflow:ir}:null,retryLane:536870912,hydrationErrors:null},s=pv(t),s.return=i,i.child=s,di=i,Tn=null)):t=null,t===null)throw cs(i);return Em(t)?i.lanes=32:i.lanes=536870912,null}var P=u.children;return u=u.fallback,h?(_s(),h=i.mode,P=Nf({mode:"hidden",children:P},h),u=ao(u,h,s,null),P.return=i,u.return=i,P.sibling=u,i.child=P,u=i.child,u.memoizedState=Hp(s),u.childLanes=Gp(t,E,s),i.memoizedState=Bp,Bu(null,u)):(ms(i),Vp(i,P))}var X=t.memoizedState;if(X!==null&&(P=X.dehydrated,P!==null)){if(m)i.flags&256?(ms(i),i.flags&=-257,i=kp(t,i,s)):i.memoizedState!==null?(_s(),i.child=t.child,i.flags|=128,i=null):(_s(),P=u.fallback,h=i.mode,u=Nf({mode:"visible",children:u.children},h),P=ao(P,h,s,null),P.flags|=2,u.return=i,P.return=i,u.sibling=P,i.child=u,fo(i,t.child,null,s),u=i.child,u.memoizedState=Hp(s),u.childLanes=Gp(t,E,s),i.memoizedState=Bp,i=Bu(null,u));else if(ms(i),Em(P)){if(E=P.nextSibling&&P.nextSibling.dataset,E)var ue=E.dgst;E=ue,u=Error(a(419)),u.stack="",u.digest=E,Ru({value:u,source:null,stack:null}),i=kp(t,i,s)}else if(Wn||al(t,i,s,!1),E=(s&t.childLanes)!==0,Wn||E){if(E=gn,E!==null&&(u=Qe(E,s),u!==0&&u!==X.retryLane))throw X.retryLane=u,io(t,u),Wi(E,t,u),Ip;Mm(P)||Gf(),i=kp(t,i,s)}else Mm(P)?(i.flags|=192,i.child=t.child,i=null):(t=X.treeContext,Tn=Ua(P.nextSibling),di=i,Ht=!0,us=null,wa=!1,t!==null&&gv(i,t),i=Vp(i,u.children),i.flags|=4096);return i}return h?(_s(),P=u.fallback,h=i.mode,X=t.child,ue=X.sibling,u=br(X,{mode:"hidden",children:u.children}),u.subtreeFlags=X.subtreeFlags&65011712,ue!==null?P=br(ue,P):(P=ao(P,h,s,null),P.flags|=2),P.return=i,u.return=i,u.sibling=P,i.child=u,Bu(null,u),u=i.child,P=t.child.memoizedState,P===null?P=Hp(s):(h=P.cachePool,h!==null?(X=kn._currentValue,h=h.parent!==X?{parent:X,pool:X}:h):h=Ev(),P={baseLanes:P.baseLanes|s,cachePool:h}),u.memoizedState=P,u.childLanes=Gp(t,E,s),i.memoizedState=Bp,Bu(t.child,u)):(ms(i),s=t.child,t=s.sibling,s=br(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=s,i.memoizedState=null,s)}function Vp(t,i){return i=Nf({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Nf(t,i){return t=aa(22,t,null,i),t.lanes=0,t}function kp(t,i,s){return fo(i,t.child,null,s),t=Vp(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Fx(t,i,s){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),ap(t.return,i,s)}function Xp(t,i,s,u,h,m){var E=t.memoizedState;E===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=u,E.tail=s,E.tailMode=h,E.treeForkCount=m)}function Ix(t,i,s){var u=i.pendingProps,h=u.revealOrder,m=u.tail;u=u.children;var E=Bn.current,P=(E&2)!==0;if(P?(E=E&1|2,i.flags|=128):E&=1,Se(Bn,E),mi(t,i,u,s),u=Ht?Au:0,!P&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fx(t,s,i);else if(t.tag===19)Fx(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)t=s.alternate,t!==null&&Sf(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Xp(i,!1,h,s,m,u);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Sf(t)===null){i.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}Xp(i,!0,s,null,m,u);break;case"together":Xp(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function Ur(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),xs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(al(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=br(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=br(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Wp(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&hf(t)))}function sb(t,i,s){switch(i.tag){case 3:Me(i,i.stateNode.containerInfo),fs(i,kn,t.memoizedState.cache),ro();break;case 27:case 5:tt(i);break;case 4:Me(i,i.stateNode.containerInfo);break;case 10:fs(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,_p(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(ms(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Px(t,i,s):(ms(i),t=Ur(t,i,s),t!==null?t.sibling:null);ms(i);break;case 19:var h=(t.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||(al(t,i,s,!1),u=(s&i.childLanes)!==0),h){if(u)return Ix(t,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Se(Bn,Bn.current),u)break;return null;case 22:return i.lanes=0,wx(t,i,s,i.pendingProps);case 24:fs(i,kn,t.memoizedState.cache)}return Ur(t,i,s)}function zx(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Wn=!0;else{if(!Wp(t,s)&&(i.flags&128)===0)return Wn=!1,sb(t,i,s);Wn=(t.flags&131072)!==0}else Wn=!1,Ht&&(i.flags&1048576)!==0&&_v(i,Au,i.index);switch(i.lanes=0,i.tag){case 16:e:{var u=i.pendingProps;if(t=uo(i.elementType),i.type=t,typeof t=="function")Qd(t)?(u=po(t,u),i.tag=1,i=Lx(null,i,t,u,s)):(i.tag=0,i=zp(null,i,t,u,s));else{if(t!=null){var h=t.$$typeof;if(h===R){i.tag=11,i=Ax(null,i,t,u,s);break e}else if(h===C){i.tag=14,i=Rx(null,i,t,u,s);break e}}throw i=j(t)||t,Error(a(306,i,""))}}return i;case 0:return zp(t,i,i.type,i.pendingProps,s);case 1:return u=i.type,h=po(u,i.pendingProps),Lx(t,i,u,h,s);case 3:e:{if(Me(i,i.stateNode.containerInfo),t===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,fp(t,i),Ou(i,u,null,s);var E=i.memoizedState;if(u=E.cache,fs(i,kn,u),u!==m.cache&&rp(i,[kn],s,!0),Lu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Ox(t,i,u,s);break e}else if(u!==h){h=Aa(Error(a(424)),i),Ru(h),i=Ox(t,i,u,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Tn=Ua(t.firstChild),di=i,Ht=!0,us=null,wa=!0,s=wv(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ro(),u===h){i=Ur(t,i,s);break e}mi(t,i,u,s)}i=i.child}return i;case 26:return Uf(t,i),t===null?(s=KS(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ht||(s=i.type,t=i.pendingProps,u=Zf(ne.current).createElement(s),u[St]=i,u[yt]=t,_i(u,s,t),Rt(u),i.stateNode=u):i.memoizedState=KS(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return tt(i),t===null&&Ht&&(u=i.stateNode=qS(i.type,i.pendingProps,ne.current),di=i,wa=!0,h=Tn,Ts(i.type)?(Tm=h,Tn=Ua(u.firstChild)):Tn=h),mi(t,i,i.pendingProps.children,s),Uf(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ht&&((h=u=Tn)&&(u=Fb(u,i.type,i.pendingProps,wa),u!==null?(i.stateNode=u,di=i,Tn=Ua(u.firstChild),wa=!1,h=!0):h=!1),h||cs(i)),tt(i),h=i.type,m=i.pendingProps,E=t!==null?t.memoizedProps:null,u=m.children,xm(h,m)?u=null:E!==null&&xm(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=vp(t,i,JT,null,null,s),ec._currentValue=h),Uf(t,i),mi(t,i,u,s),i.child;case 6:return t===null&&Ht&&((t=s=Tn)&&(s=Ib(s,i.pendingProps,wa),s!==null?(i.stateNode=s,di=i,Tn=null,t=!0):t=!1),t||cs(i)),null;case 13:return Px(t,i,s);case 4:return Me(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=fo(i,null,u,s):mi(t,i,u,s),i.child;case 11:return Ax(t,i,i.type,i.pendingProps,s);case 7:return mi(t,i,i.pendingProps,s),i.child;case 8:return mi(t,i,i.pendingProps.children,s),i.child;case 12:return mi(t,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,fs(i,i.type,u.value),mi(t,i,u.children,s),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,oo(i),h=pi(h),u=u(h),i.flags|=1,mi(t,i,u,s),i.child;case 14:return Rx(t,i,i.type,i.pendingProps,s);case 15:return Cx(t,i,i.type,i.pendingProps,s);case 19:return Ix(t,i,s);case 31:return rb(t,i,s);case 22:return wx(t,i,s,i.pendingProps);case 24:return oo(i),u=pi(kn),t===null?(h=lp(),h===null&&(h=gn,m=sp(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:u,cache:h},cp(i),fs(i,kn,h)):((t.lanes&s)!==0&&(fp(t,i),Ou(i,null,null,s),Lu()),h=t.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),fs(i,kn,u)):(u=m.cache,fs(i,kn,u),u!==h.cache&&rp(i,[kn],s,!0))),mi(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Nr(t){t.flags|=4}function qp(t,i,s,u,h){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(fS())t.flags|=8192;else throw co=_f,up}else t.flags&=-16777217}function Bx(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ey(i))if(fS())t.flags|=8192;else throw co=_f,up}function Lf(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Re():536870912,t.lanes|=i,_l|=i)}function Hu(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function bn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,u=0;if(i)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=s,i}function ob(t,i,s){var u=i.pendingProps;switch(ep(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return bn(i),null;case 3:return s=i.stateNode,u=null,t!==null&&(u=t.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Cr(kn),Oe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(il(i)?Nr(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,np())),bn(i),null;case 26:var h=i.type,m=i.memoizedState;return t===null?(Nr(i),m!==null?(bn(i),Bx(i,m)):(bn(i),qp(i,h,null,u,s))):m?m!==t.memoizedState?(Nr(i),bn(i),Bx(i,m)):(bn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==u&&Nr(i),bn(i),qp(i,h,t,u,s)),null;case 27:if(Ye(i),s=ne.current,h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==u&&Nr(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return bn(i),null}t=ge.current,il(i)?vv(i):(t=qS(h,u,s),i.stateNode=t,Nr(i))}return bn(i),null;case 5:if(Ye(i),h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==u&&Nr(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return bn(i),null}if(m=ge.current,il(i))vv(i);else{var E=Zf(ne.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?E.createElement("select",{is:u.is}):E.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?E.createElement(h,{is:u.is}):E.createElement(h)}}m[St]=i,m[yt]=u;e:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break e;for(;E.sibling===null;){if(E.return===null||E.return===i)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;e:switch(_i(m,h,u),h){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&Nr(i)}}return bn(i),qp(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==u&&Nr(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(t=ne.current,il(i)){if(t=i.stateNode,s=i.memoizedProps,u=null,h=di,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}t[St]=i,t=!!(t.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||PS(t.nodeValue,s)),t||cs(i,!0)}else t=Zf(t).createTextNode(u),t[St]=i,i.stateNode=t}return bn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(u=il(i),s!==null){if(t===null){if(!u)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[St]=i}else ro(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),t=!1}else s=np(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(sa(i),i):(sa(i),null);if((i.flags&128)!==0)throw Error(a(558))}return bn(i),null;case 13:if(u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=il(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[St]=i}else ro(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),h=!1}else h=np(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(sa(i),i):(sa(i),null)}return sa(i),(i.flags&128)!==0?(i.lanes=s,i):(s=u!==null,t=t!==null&&t.memoizedState!==null,s&&(u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Lf(i,i.updateQueue),bn(i),null);case 4:return Oe(),t===null&&pm(i.stateNode.containerInfo),bn(i),null;case 10:return Cr(i.type),bn(i),null;case 19:if(K(Bn),u=i.memoizedState,u===null)return bn(i),null;if(h=(i.flags&128)!==0,m=u.rendering,m===null)if(h)Hu(u,!1);else{if(Fn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Sf(t),m!==null){for(i.flags|=128,Hu(u,!1),t=m.updateQueue,i.updateQueue=t,Lf(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)dv(s,t),s=s.sibling;return Se(Bn,Bn.current&1|2),Ht&&Ar(i,u.treeForkCount),i.child}t=t.sibling}u.tail!==null&&It()>zf&&(i.flags|=128,h=!0,Hu(u,!1),i.lanes=4194304)}else{if(!h)if(t=Sf(m),t!==null){if(i.flags|=128,h=!0,t=t.updateQueue,i.updateQueue=t,Lf(i,t),Hu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Ht)return bn(i),null}else 2*It()-u.renderingStartTime>zf&&s!==536870912&&(i.flags|=128,h=!0,Hu(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(t=u.last,t!==null?t.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=It(),t.sibling=null,s=Bn.current,Se(Bn,h?s&1|2:s&1),Ht&&Ar(i,u.treeForkCount),t):(bn(i),null);case 22:case 23:return sa(i),mp(),u=i.memoizedState!==null,t!==null?t.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),s=i.updateQueue,s!==null&&Lf(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),t!==null&&K(lo),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Cr(kn),bn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function lb(t,i){switch(ep(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Cr(kn),Oe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ye(i),null;case 31:if(i.memoizedState!==null){if(sa(i),i.alternate===null)throw Error(a(340));ro()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(sa(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ro()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return K(Bn),null;case 4:return Oe(),null;case 10:return Cr(i.type),null;case 22:case 23:return sa(i),mp(),t!==null&&K(lo),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Cr(kn),null;case 25:return null;default:return null}}function Hx(t,i){switch(ep(i),i.tag){case 3:Cr(kn),Oe();break;case 26:case 27:case 5:Ye(i);break;case 4:Oe();break;case 31:i.memoizedState!==null&&sa(i);break;case 13:sa(i);break;case 19:K(Bn);break;case 10:Cr(i.type);break;case 22:case 23:sa(i),mp(),t!==null&&K(lo);break;case 24:Cr(kn)}}function Gu(t,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&t)===t){u=void 0;var m=s.create,E=s.inst;u=m(),E.destroy=u}s=s.next}while(s!==h)}}catch(P){on(i,i.return,P)}}function gs(t,i,s){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&t)===t){var E=u.inst,P=E.destroy;if(P!==void 0){E.destroy=void 0,h=i;var X=s,ue=P;try{ue()}catch(ye){on(h,X,ye)}}}u=u.next}while(u!==m)}}catch(ye){on(i,i.return,ye)}}function Gx(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Uv(i,s)}catch(u){on(t,t.return,u)}}}function Vx(t,i,s){s.props=po(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(u){on(t,i,u)}}function Vu(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var u=t.stateNode;break;case 30:u=t.stateNode;break;default:u=t.stateNode}typeof s=="function"?t.refCleanup=s(u):s.current=u}}catch(h){on(t,i,h)}}function ar(t,i){var s=t.ref,u=t.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(h){on(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){on(t,i,h)}else s.current=null}function kx(t){var i=t.type,s=t.memoizedProps,u=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break e;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(h){on(t,t.return,h)}}function Yp(t,i,s){try{var u=t.stateNode;Db(u,t.type,s,i),u[yt]=i}catch(h){on(t,t.return,h)}}function Xx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ts(t.type)||t.tag===4}function Zp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ts(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kp(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Er));else if(u!==4&&(u===27&&Ts(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Kp(t,i,s),t=t.sibling;t!==null;)Kp(t,i,s),t=t.sibling}function Of(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(u!==4&&(u===27&&Ts(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Of(t,i,s),t=t.sibling;t!==null;)Of(t,i,s),t=t.sibling}function Wx(t){var i=t.stateNode,s=t.memoizedProps;try{for(var u=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);_i(i,u,s),i[St]=t,i[yt]=s}catch(m){on(t,t.return,m)}}var Lr=!1,qn=!1,Qp=!1,qx=typeof WeakSet=="function"?WeakSet:Set,si=null;function ub(t,i){if(t=t.containerInfo,gm=th,t=av(t),kd(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,P=-1,X=-1,ue=0,ye=0,Ae=t,fe=null;t:for(;;){for(var me;Ae!==s||h!==0&&Ae.nodeType!==3||(P=E+h),Ae!==m||u!==0&&Ae.nodeType!==3||(X=E+u),Ae.nodeType===3&&(E+=Ae.nodeValue.length),(me=Ae.firstChild)!==null;)fe=Ae,Ae=me;for(;;){if(Ae===t)break t;if(fe===s&&++ue===h&&(P=E),fe===m&&++ye===u&&(X=E),(me=Ae.nextSibling)!==null)break;Ae=fe,fe=Ae.parentNode}Ae=me}s=P===-1||X===-1?null:{start:P,end:X}}else s=null}s=s||{start:0,end:0}}else s=null;for(vm={focusedElem:t,selectionRange:s},th=!1,si=i;si!==null;)if(i=si,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,si=t;else for(;si!==null;){switch(i=si,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)h=t[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,u=s.stateNode;try{var $e=po(s.type,h);t=u.getSnapshotBeforeUpdate($e,m),u.__reactInternalSnapshotBeforeUpdate=t}catch(ht){on(s,s.return,ht)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)ym(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ym(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,si=t;break}si=i.return}}function Yx(t,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:Pr(t,s),u&4&&Gu(5,s);break;case 1:if(Pr(t,s),u&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(E){on(s,s.return,E)}else{var h=po(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){on(s,s.return,E)}}u&64&&Gx(s),u&512&&Vu(s,s.return);break;case 3:if(Pr(t,s),u&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Uv(t,i)}catch(E){on(s,s.return,E)}}break;case 27:i===null&&u&4&&Wx(s);case 26:case 5:Pr(t,s),i===null&&u&4&&kx(s),u&512&&Vu(s,s.return);break;case 12:Pr(t,s);break;case 31:Pr(t,s),u&4&&Qx(t,s);break;case 13:Pr(t,s),u&4&&Jx(t,s),u&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=vb.bind(null,s),zb(t,s))));break;case 22:if(u=s.memoizedState!==null||Lr,!u){i=i!==null&&i.memoizedState!==null||qn,h=Lr;var m=qn;Lr=u,(qn=i)&&!m?Fr(t,s,(s.subtreeFlags&8772)!==0):Pr(t,s),Lr=h,qn=m}break;case 30:break;default:Pr(t,s)}}function Zx(t){var i=t.alternate;i!==null&&(t.alternate=null,Zx(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&yn(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dn=null,Gi=!1;function Or(t,i,s){for(s=s.child;s!==null;)Kx(t,i,s),s=s.sibling}function Kx(t,i,s){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(_e,s)}catch{}switch(s.tag){case 26:qn||ar(s,i),Or(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:qn||ar(s,i);var u=Dn,h=Gi;Ts(s.type)&&(Dn=s.stateNode,Gi=!1),Or(t,i,s),Ju(s.stateNode),Dn=u,Gi=h;break;case 5:qn||ar(s,i);case 6:if(u=Dn,h=Gi,Dn=null,Or(t,i,s),Dn=u,Gi=h,Dn!==null)if(Gi)try{(Dn.nodeType===9?Dn.body:Dn.nodeName==="HTML"?Dn.ownerDocument.body:Dn).removeChild(s.stateNode)}catch(m){on(s,i,m)}else try{Dn.removeChild(s.stateNode)}catch(m){on(s,i,m)}break;case 18:Dn!==null&&(Gi?(t=Dn,GS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Tl(t)):GS(Dn,s.stateNode));break;case 4:u=Dn,h=Gi,Dn=s.stateNode.containerInfo,Gi=!0,Or(t,i,s),Dn=u,Gi=h;break;case 0:case 11:case 14:case 15:gs(2,s,i),qn||gs(4,s,i),Or(t,i,s);break;case 1:qn||(ar(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&Vx(s,i,u)),Or(t,i,s);break;case 21:Or(t,i,s);break;case 22:qn=(u=qn)||s.memoizedState!==null,Or(t,i,s),qn=u;break;default:Or(t,i,s)}}function Qx(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tl(t)}catch(s){on(i,i.return,s)}}}function Jx(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tl(t)}catch(s){on(i,i.return,s)}}function cb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new qx),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new qx),i;default:throw Error(a(435,t.tag))}}function Pf(t,i){var s=cb(t);i.forEach(function(u){if(!s.has(u)){s.add(u);var h=xb.bind(null,t,u);u.then(h,h)}})}function Vi(t,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var h=s[u],m=t,E=i,P=E;e:for(;P!==null;){switch(P.tag){case 27:if(Ts(P.type)){Dn=P.stateNode,Gi=!1;break e}break;case 5:Dn=P.stateNode,Gi=!1;break e;case 3:case 4:Dn=P.stateNode.containerInfo,Gi=!0;break e}P=P.return}if(Dn===null)throw Error(a(160));Kx(m,E,h),Dn=null,Gi=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)$x(i,t),i=i.sibling}var Wa=null;function $x(t,i){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vi(i,t),ki(t),u&4&&(gs(3,t,t.return),Gu(3,t),gs(5,t,t.return));break;case 1:Vi(i,t),ki(t),u&512&&(qn||s===null||ar(s,s.return)),u&64&&Lr&&(t=t.updateQueue,t!==null&&(u=t.callbacks,u!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var h=Wa;if(Vi(i,t),ki(t),u&512&&(qn||s===null||ar(s,s.return)),u&4){var m=s!==null?s.memoizedState:null;if(u=t.memoizedState,s===null)if(u===null)if(t.stateNode===null){e:{u=t.type,s=t.memoizedProps,h=h.ownerDocument||h;t:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Sn]||m[St]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),_i(m,u,s),m[St]=t,Rt(m),u=m;break e;case"link":var E=$S("link","href",h).get(u+(s.href||""));if(E){for(var P=0;P<E.length;P++)if(m=E[P],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(P,1);break t}}m=h.createElement(u),_i(m,u,s),h.head.appendChild(m);break;case"meta":if(E=$S("meta","content",h).get(u+(s.content||""))){for(P=0;P<E.length;P++)if(m=E[P],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(P,1);break t}}m=h.createElement(u),_i(m,u,s),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[St]=t,Rt(m),u=m}t.stateNode=u}else jS(h,t.type,t.stateNode);else t.stateNode=JS(h,u,t.memoizedProps);else m!==u?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,u===null?jS(h,t.type,t.stateNode):JS(h,u,t.memoizedProps)):u===null&&t.stateNode!==null&&Yp(t,t.memoizedProps,s.memoizedProps)}break;case 27:Vi(i,t),ki(t),u&512&&(qn||s===null||ar(s,s.return)),s!==null&&u&4&&Yp(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Vi(i,t),ki(t),u&512&&(qn||s===null||ar(s,s.return)),t.flags&32){h=t.stateNode;try{na(h,"")}catch($e){on(t,t.return,$e)}}u&4&&t.stateNode!=null&&(h=t.memoizedProps,Yp(t,h,s!==null?s.memoizedProps:h)),u&1024&&(Qp=!0);break;case 6:if(Vi(i,t),ki(t),u&4){if(t.stateNode===null)throw Error(a(162));u=t.memoizedProps,s=t.stateNode;try{s.nodeValue=u}catch($e){on(t,t.return,$e)}}break;case 3:if(Jf=null,h=Wa,Wa=Kf(i.containerInfo),Vi(i,t),Wa=h,ki(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Tl(i.containerInfo)}catch($e){on(t,t.return,$e)}Qp&&(Qp=!1,jx(t));break;case 4:u=Wa,Wa=Kf(t.stateNode.containerInfo),Vi(i,t),ki(t),Wa=u;break;case 12:Vi(i,t),ki(t);break;case 31:Vi(i,t),ki(t),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,Pf(t,u)));break;case 13:Vi(i,t),ki(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(If=It()),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,Pf(t,u)));break;case 22:h=t.memoizedState!==null;var X=s!==null&&s.memoizedState!==null,ue=Lr,ye=qn;if(Lr=ue||h,qn=ye||X,Vi(i,t),qn=ye,Lr=ue,ki(t),u&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||X||Lr||qn||mo(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){X=s=i;try{if(m=X.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{P=X.stateNode;var Ae=X.memoizedProps.style,fe=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;P.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch($e){on(X,X.return,$e)}}}else if(i.tag===6){if(s===null){X=i;try{X.stateNode.nodeValue=h?"":X.memoizedProps}catch($e){on(X,X.return,$e)}}}else if(i.tag===18){if(s===null){X=i;try{var me=X.stateNode;h?VS(me,!0):VS(X.stateNode,!1)}catch($e){on(X,X.return,$e)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=t.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Pf(t,s))));break;case 19:Vi(i,t),ki(t),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,Pf(t,u)));break;case 30:break;case 21:break;default:Vi(i,t),ki(t)}}function ki(t){var i=t.flags;if(i&2){try{for(var s,u=t.return;u!==null;){if(Xx(u)){s=u;break}u=u.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=Zp(t);Of(t,m,h);break;case 5:var E=s.stateNode;s.flags&32&&(na(E,""),s.flags&=-33);var P=Zp(t);Of(t,P,E);break;case 3:case 4:var X=s.stateNode.containerInfo,ue=Zp(t);Kp(t,ue,X);break;default:throw Error(a(161))}}catch(ye){on(t,t.return,ye)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function jx(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;jx(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Pr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Yx(t,i.alternate,i),i=i.sibling}function mo(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:gs(4,i,i.return),mo(i);break;case 1:ar(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Vx(i,i.return,s),mo(i);break;case 27:Ju(i.stateNode);case 26:case 5:ar(i,i.return),mo(i);break;case 22:i.memoizedState===null&&mo(i);break;case 30:mo(i);break;default:mo(i)}t=t.sibling}}function Fr(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=t,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Fr(h,m,s),Gu(4,m);break;case 1:if(Fr(h,m,s),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(ue){on(u,u.return,ue)}if(u=m,h=u.updateQueue,h!==null){var P=u.stateNode;try{var X=h.shared.hiddenCallbacks;if(X!==null)for(h.shared.hiddenCallbacks=null,h=0;h<X.length;h++)Dv(X[h],P)}catch(ue){on(u,u.return,ue)}}s&&E&64&&Gx(m),Vu(m,m.return);break;case 27:Wx(m);case 26:case 5:Fr(h,m,s),s&&u===null&&E&4&&kx(m),Vu(m,m.return);break;case 12:Fr(h,m,s);break;case 31:Fr(h,m,s),s&&E&4&&Qx(h,m);break;case 13:Fr(h,m,s),s&&E&4&&Jx(h,m);break;case 22:m.memoizedState===null&&Fr(h,m,s),Vu(m,m.return);break;case 30:break;default:Fr(h,m,s)}i=i.sibling}}function Jp(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Cu(s))}function $p(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Cu(t))}function qa(t,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)eS(t,i,s,u),i=i.sibling}function eS(t,i,s,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:qa(t,i,s,u),h&2048&&Gu(9,i);break;case 1:qa(t,i,s,u);break;case 3:qa(t,i,s,u),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Cu(t)));break;case 12:if(h&2048){qa(t,i,s,u),t=i.stateNode;try{var m=i.memoizedProps,E=m.id,P=m.onPostCommit;typeof P=="function"&&P(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(X){on(i,i.return,X)}}else qa(t,i,s,u);break;case 31:qa(t,i,s,u);break;case 13:qa(t,i,s,u);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?qa(t,i,s,u):ku(t,i):m._visibility&2?qa(t,i,s,u):(m._visibility|=2,dl(t,i,s,u,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Jp(E,i);break;case 24:qa(t,i,s,u),h&2048&&$p(i.alternate,i);break;default:qa(t,i,s,u)}}function dl(t,i,s,u,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,E=i,P=s,X=u,ue=E.flags;switch(E.tag){case 0:case 11:case 15:dl(m,E,P,X,h),Gu(8,E);break;case 23:break;case 22:var ye=E.stateNode;E.memoizedState!==null?ye._visibility&2?dl(m,E,P,X,h):ku(m,E):(ye._visibility|=2,dl(m,E,P,X,h)),h&&ue&2048&&Jp(E.alternate,E);break;case 24:dl(m,E,P,X,h),h&&ue&2048&&$p(E.alternate,E);break;default:dl(m,E,P,X,h)}i=i.sibling}}function ku(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,u=i,h=u.flags;switch(u.tag){case 22:ku(s,u),h&2048&&Jp(u.alternate,u);break;case 24:ku(s,u),h&2048&&$p(u.alternate,u);break;default:ku(s,u)}i=i.sibling}}var Xu=8192;function pl(t,i,s){if(t.subtreeFlags&Xu)for(t=t.child;t!==null;)tS(t,i,s),t=t.sibling}function tS(t,i,s){switch(t.tag){case 26:pl(t,i,s),t.flags&Xu&&t.memoizedState!==null&&Qb(s,Wa,t.memoizedState,t.memoizedProps);break;case 5:pl(t,i,s);break;case 3:case 4:var u=Wa;Wa=Kf(t.stateNode.containerInfo),pl(t,i,s),Wa=u;break;case 22:t.memoizedState===null&&(u=t.alternate,u!==null&&u.memoizedState!==null?(u=Xu,Xu=16777216,pl(t,i,s),Xu=u):pl(t,i,s));break;default:pl(t,i,s)}}function nS(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Wu(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];si=u,aS(u,t)}nS(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)iS(t),t=t.sibling}function iS(t){switch(t.tag){case 0:case 11:case 15:Wu(t),t.flags&2048&&gs(9,t,t.return);break;case 3:Wu(t);break;case 12:Wu(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ff(t)):Wu(t);break;default:Wu(t)}}function Ff(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];si=u,aS(u,t)}nS(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:gs(8,i,i.return),Ff(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ff(i));break;default:Ff(i)}t=t.sibling}}function aS(t,i){for(;si!==null;){var s=si;switch(s.tag){case 0:case 11:case 15:gs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Cu(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,si=u;else e:for(s=t;si!==null;){u=si;var h=u.sibling,m=u.return;if(Zx(u),u===s){si=null;break e}if(h!==null){h.return=m,si=h;break e}si=m}}}var fb={getCacheForType:function(t){var i=pi(kn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return pi(kn).controller.signal}},hb=typeof WeakMap=="function"?WeakMap:Map,$t=0,gn=null,Ot=null,zt=0,sn=0,oa=null,vs=!1,ml=!1,jp=!1,Ir=0,Fn=0,xs=0,_o=0,em=0,la=0,_l=0,qu=null,Xi=null,tm=!1,If=0,rS=0,zf=1/0,Bf=null,Ss=null,jn=0,ys=null,gl=null,zr=0,nm=0,im=null,sS=null,Yu=0,am=null;function ua(){return($t&2)!==0&&zt!==0?zt&-zt:I.T!==null?cm():bt()}function oS(){if(la===0)if((zt&536870912)===0||Ht){var t=at;at<<=1,(at&3932160)===0&&(at=262144),la=t}else la=536870912;return t=ra.current,t!==null&&(t.flags|=32),la}function Wi(t,i,s){(t===gn&&(sn===2||sn===9)||t.cancelPendingCommit!==null)&&(vl(t,0),Ms(t,zt,la,!1)),Te(t,s),(($t&2)===0||t!==gn)&&(t===gn&&(($t&2)===0&&(_o|=s),Fn===4&&Ms(t,zt,la,!1)),rr(t))}function lS(t,i,s){if(($t&6)!==0)throw Error(a(327));var u=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ie(t,i),h=u?mb(t,i):sm(t,i,!0),m=u;do{if(h===0){ml&&!u&&Ms(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!db(s)){h=sm(t,i,!1),m=!1;continue}if(h===2){if(m=i,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var P=t;h=qu;var X=P.current.memoizedState.isDehydrated;if(X&&(vl(P,E).flags|=256),E=sm(P,E,!1),E!==2){if(jp&&!X){P.errorRecoveryDisabledLanes|=m,_o|=m,h=4;break e}m=Xi,Xi=h,m!==null&&(Xi===null?Xi=m:Xi.push.apply(Xi,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){vl(t,0),Ms(t,i,0,!0);break}e:{switch(u=t,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ms(u,i,la,!vs);break e;case 2:Xi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=If+300-It(),10<h)){if(Ms(u,i,la,!vs),xe(u,0,!0)!==0)break e;zr=i,u.timeoutHandle=BS(uS.bind(null,u,s,Xi,Bf,tm,i,la,_o,_l,vs,m,"Throttled",-0,0),h);break e}uS(u,s,Xi,Bf,tm,i,la,_o,_l,vs,m,null,-0,0)}}break}while(!0);rr(t)}function uS(t,i,s,u,h,m,E,P,X,ue,ye,Ae,fe,me){if(t.timeoutHandle=-1,Ae=i.subtreeFlags,Ae&8192||(Ae&16785408)===16785408){Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Er},tS(i,m,Ae);var $e=(m&62914560)===m?If-It():(m&4194048)===m?rS-It():0;if($e=Jb(Ae,$e),$e!==null){zr=m,t.cancelPendingCommit=$e(gS.bind(null,t,i,m,s,u,h,E,P,X,ye,Ae,null,fe,me)),Ms(t,m,E,!ue);return}}gS(t,i,m,s,u,h,E,P,X)}function db(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var h=s[u],m=h.getSnapshot;h=h.value;try{if(!ia(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ms(t,i,s,u){i&=~em,i&=~_o,t.suspendedLanes|=i,t.pingedLanes&=~i,u&&(t.warmLanes|=i),u=t.expirationTimes;for(var h=i;0<h;){var m=31-ke(h),E=1<<m;u[m]=-1,h&=~E}s!==0&&we(t,s,i)}function Hf(){return($t&6)===0?(Zu(0),!1):!0}function rm(){if(Ot!==null){if(sn===0)var t=Ot.return;else t=Ot,Rr=so=null,yp(t),ll=null,Du=0,t=Ot;for(;t!==null;)Hx(t.alternate,t),t=t.return;Ot=null}}function vl(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Lb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),zr=0,rm(),gn=t,Ot=s=br(t.current,null),zt=i,sn=0,oa=null,vs=!1,ml=Ie(t,i),jp=!1,_l=la=em=_o=xs=Fn=0,Xi=qu=null,tm=!1,(i&8)!==0&&(i|=i&32);var u=t.entangledLanes;if(u!==0)for(t=t.entanglements,u&=i;0<u;){var h=31-ke(u),m=1<<h;i|=t[h],u&=~m}return Ir=i,of(),s}function cS(t,i){Tt=null,I.H=zu,i===ol||i===mf?(i=Av(),sn=3):i===up?(i=Av(),sn=4):sn=i===Ip?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,oa=i,Ot===null&&(Fn=1,wf(t,Aa(i,t.current)))}function fS(){var t=ra.current;return t===null?!0:(zt&4194048)===zt?Da===null:(zt&62914560)===zt||(zt&536870912)!==0?t===Da:!1}function hS(){var t=I.H;return I.H=zu,t===null?zu:t}function dS(){var t=I.A;return I.A=fb,t}function Gf(){Fn=4,vs||(zt&4194048)!==zt&&ra.current!==null||(ml=!0),(xs&134217727)===0&&(_o&134217727)===0||gn===null||Ms(gn,zt,la,!1)}function sm(t,i,s){var u=$t;$t|=2;var h=hS(),m=dS();(gn!==t||zt!==i)&&(Bf=null,vl(t,i)),i=!1;var E=Fn;e:do try{if(sn!==0&&Ot!==null){var P=Ot,X=oa;switch(sn){case 8:rm(),E=6;break e;case 3:case 2:case 9:case 6:ra.current===null&&(i=!0);var ue=sn;if(sn=0,oa=null,xl(t,P,X,ue),s&&ml){E=0;break e}break;default:ue=sn,sn=0,oa=null,xl(t,P,X,ue)}}pb(),E=Fn;break}catch(ye){cS(t,ye)}while(!0);return i&&t.shellSuspendCounter++,Rr=so=null,$t=u,I.H=h,I.A=m,Ot===null&&(gn=null,zt=0,of()),E}function pb(){for(;Ot!==null;)pS(Ot)}function mb(t,i){var s=$t;$t|=2;var u=hS(),h=dS();gn!==t||zt!==i?(Bf=null,zf=It()+500,vl(t,i)):ml=Ie(t,i);e:do try{if(sn!==0&&Ot!==null){i=Ot;var m=oa;t:switch(sn){case 1:sn=0,oa=null,xl(t,i,m,1);break;case 2:case 9:if(Tv(m)){sn=0,oa=null,mS(i);break}i=function(){sn!==2&&sn!==9||gn!==t||(sn=7),rr(t)},m.then(i,i);break e;case 3:sn=7;break e;case 4:sn=5;break e;case 7:Tv(m)?(sn=0,oa=null,mS(i)):(sn=0,oa=null,xl(t,i,m,7));break;case 5:var E=null;switch(Ot.tag){case 26:E=Ot.memoizedState;case 5:case 27:var P=Ot;if(E?ey(E):P.stateNode.complete){sn=0,oa=null;var X=P.sibling;if(X!==null)Ot=X;else{var ue=P.return;ue!==null?(Ot=ue,Vf(ue)):Ot=null}break t}}sn=0,oa=null,xl(t,i,m,5);break;case 6:sn=0,oa=null,xl(t,i,m,6);break;case 8:rm(),Fn=6;break e;default:throw Error(a(462))}}_b();break}catch(ye){cS(t,ye)}while(!0);return Rr=so=null,I.H=u,I.A=h,$t=s,Ot!==null?0:(gn=null,zt=0,of(),Fn)}function _b(){for(;Ot!==null&&!Yt();)pS(Ot)}function pS(t){var i=zx(t.alternate,t,Ir);t.memoizedProps=t.pendingProps,i===null?Vf(t):Ot=i}function mS(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Nx(s,i,i.pendingProps,i.type,void 0,zt);break;case 11:i=Nx(s,i,i.pendingProps,i.type.render,i.ref,zt);break;case 5:yp(i);default:Hx(s,i),i=Ot=dv(i,Ir),i=zx(s,i,Ir)}t.memoizedProps=t.pendingProps,i===null?Vf(t):Ot=i}function xl(t,i,s,u){Rr=so=null,yp(i),ll=null,Du=0;var h=i.return;try{if(ab(t,h,i,s,zt)){Fn=1,wf(t,Aa(s,t.current)),Ot=null;return}}catch(m){if(h!==null)throw Ot=h,m;Fn=1,wf(t,Aa(s,t.current)),Ot=null;return}i.flags&32768?(Ht||u===1?t=!0:ml||(zt&536870912)!==0?t=!1:(vs=t=!0,(u===2||u===9||u===3||u===6)&&(u=ra.current,u!==null&&u.tag===13&&(u.flags|=16384))),_S(i,t)):Vf(i)}function Vf(t){var i=t;do{if((i.flags&32768)!==0){_S(i,vs);return}t=i.return;var s=ob(i.alternate,i,Ir);if(s!==null){Ot=s;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=t}while(i!==null);Fn===0&&(Fn=5)}function _S(t,i){do{var s=lb(t.alternate,t);if(s!==null){s.flags&=32767,Ot=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Ot=t;return}Ot=t=s}while(t!==null);Fn=6,Ot=null}function gS(t,i,s,u,h,m,E,P,X){t.cancelPendingCommit=null;do kf();while(jn!==0);if(($t&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Zd,ot(t,s,m,E,P,X),t===gn&&(Ot=gn=null,zt=0),gl=i,ys=t,zr=s,nm=m,im=h,sS=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sb($,function(){return MS(),null})):(t.callbackNode=null,t.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=I.T,I.T=null,h=G.p,G.p=2,E=$t,$t|=4;try{ub(t,i,s)}finally{$t=E,G.p=h,I.T=u}}jn=1,vS(),xS(),SS()}}function vS(){if(jn===1){jn=0;var t=ys,i=gl,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var u=G.p;G.p=2;var h=$t;$t|=4;try{$x(i,t);var m=vm,E=av(t.containerInfo),P=m.focusedElem,X=m.selectionRange;if(E!==P&&P&&P.ownerDocument&&iv(P.ownerDocument.documentElement,P)){if(X!==null&&kd(P)){var ue=X.start,ye=X.end;if(ye===void 0&&(ye=ue),"selectionStart"in P)P.selectionStart=ue,P.selectionEnd=Math.min(ye,P.value.length);else{var Ae=P.ownerDocument||document,fe=Ae&&Ae.defaultView||window;if(fe.getSelection){var me=fe.getSelection(),$e=P.textContent.length,ht=Math.min(X.start,$e),pn=X.end===void 0?ht:Math.min(X.end,$e);!me.extend&&ht>pn&&(E=pn,pn=ht,ht=E);var te=nv(P,ht),Z=nv(P,pn);if(te&&Z&&(me.rangeCount!==1||me.anchorNode!==te.node||me.anchorOffset!==te.offset||me.focusNode!==Z.node||me.focusOffset!==Z.offset)){var oe=Ae.createRange();oe.setStart(te.node,te.offset),me.removeAllRanges(),ht>pn?(me.addRange(oe),me.extend(Z.node,Z.offset)):(oe.setEnd(Z.node,Z.offset),me.addRange(oe))}}}}for(Ae=[],me=P;me=me.parentNode;)me.nodeType===1&&Ae.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof P.focus=="function"&&P.focus(),P=0;P<Ae.length;P++){var Ee=Ae[P];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}th=!!gm,vm=gm=null}finally{$t=h,G.p=u,I.T=s}}t.current=i,jn=2}}function xS(){if(jn===2){jn=0;var t=ys,i=gl,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var u=G.p;G.p=2;var h=$t;$t|=4;try{Yx(t,i.alternate,i)}finally{$t=h,G.p=u,I.T=s}}jn=3}}function SS(){if(jn===4||jn===3){jn=0,Q();var t=ys,i=gl,s=zr,u=sS;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?jn=5:(jn=0,gl=ys=null,yS(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Ss=null),Rn(s),i=i.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(_e,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=I.T,h=G.p,G.p=2,I.T=null;try{for(var m=t.onRecoverableError,E=0;E<u.length;E++){var P=u[E];m(P.value,{componentStack:P.stack})}}finally{I.T=i,G.p=h}}(zr&3)!==0&&kf(),rr(t),h=t.pendingLanes,(s&261930)!==0&&(h&42)!==0?t===am?Yu++:(Yu=0,am=t):Yu=0,Zu(0)}}function yS(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Cu(i)))}function kf(){return vS(),xS(),SS(),MS()}function MS(){if(jn!==5)return!1;var t=ys,i=nm;nm=0;var s=Rn(zr),u=I.T,h=G.p;try{G.p=32>s?32:s,I.T=null,s=im,im=null;var m=ys,E=zr;if(jn=0,gl=ys=null,zr=0,($t&6)!==0)throw Error(a(331));var P=$t;if($t|=4,iS(m.current),eS(m,m.current,E,s),$t=P,Zu(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(_e,m)}catch{}return!0}finally{G.p=h,I.T=u,yS(t,i)}}function ES(t,i,s){i=Aa(s,i),i=Fp(t.stateNode,i,2),t=ps(t,i,2),t!==null&&(Te(t,2),rr(t))}function on(t,i,s){if(t.tag===3)ES(t,t,s);else for(;i!==null;){if(i.tag===3){ES(i,t,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ss===null||!Ss.has(u))){t=Aa(s,t),s=Tx(2),u=ps(i,s,2),u!==null&&(bx(s,u,i,t),Te(u,2),rr(u));break}}i=i.return}}function om(t,i,s){var u=t.pingCache;if(u===null){u=t.pingCache=new hb;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(s)||(jp=!0,h.add(s),t=gb.bind(null,t,i,s),i.then(t,t))}function gb(t,i,s){var u=t.pingCache;u!==null&&u.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,gn===t&&(zt&s)===s&&(Fn===4||Fn===3&&(zt&62914560)===zt&&300>It()-If?($t&2)===0&&vl(t,0):em|=s,_l===zt&&(_l=0)),rr(t)}function TS(t,i){i===0&&(i=Re()),t=io(t,i),t!==null&&(Te(t,i),rr(t))}function vb(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),TS(t,s)}function xb(t,i){var s=0;switch(t.tag){case 31:case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:u=t.stateNode;break;case 22:u=t.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),TS(t,s)}function Sb(t,i){return jt(t,i)}var Xf=null,Sl=null,lm=!1,Wf=!1,um=!1,Es=0;function rr(t){t!==Sl&&t.next===null&&(Sl===null?Xf=Sl=t:Sl=Sl.next=t),Wf=!0,lm||(lm=!0,Mb())}function Zu(t,i){if(!um&&Wf){um=!0;do for(var s=!1,u=Xf;u!==null;){if(t!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var E=u.suspendedLanes,P=u.pingedLanes;m=(1<<31-ke(42|t)+1)-1,m&=h&~(E&~P),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,CS(u,m))}else m=zt,m=xe(u,u===gn?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Ie(u,m)||(s=!0,CS(u,m));u=u.next}while(s);um=!1}}function yb(){bS()}function bS(){Wf=lm=!1;var t=0;Es!==0&&Nb()&&(t=Es);for(var i=It(),s=null,u=Xf;u!==null;){var h=u.next,m=AS(u,i);m===0?(u.next=null,s===null?Xf=h:s.next=h,h===null&&(Sl=s)):(s=u,(t!==0||(m&3)!==0)&&(Wf=!0)),u=h}jn!==0&&jn!==5||Zu(t),Es!==0&&(Es=0)}function AS(t,i){for(var s=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-ke(m),P=1<<E,X=h[E];X===-1?((P&s)===0||(P&u)!==0)&&(h[E]=He(P,i)):X<=i&&(t.expiredLanes|=P),m&=~P}if(i=gn,s=zt,s=xe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),u=t.callbackNode,s===0||t===i&&(sn===2||sn===9)||t.cancelPendingCommit!==null)return u!==null&&u!==null&&pt(u),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(u!==null&&pt(u),Rn(s)){case 2:case 8:s=A;break;case 32:s=$;break;case 268435456:s=de;break;default:s=$}return u=RS.bind(null,t),s=jt(s,u),t.callbackPriority=i,t.callbackNode=s,i}return u!==null&&u!==null&&pt(u),t.callbackPriority=2,t.callbackNode=null,2}function RS(t,i){if(jn!==0&&jn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(kf()&&t.callbackNode!==s)return null;var u=zt;return u=xe(t,t===gn?u:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),u===0?null:(lS(t,u,i),AS(t,It()),t.callbackNode!=null&&t.callbackNode===s?RS.bind(null,t):null)}function CS(t,i){if(kf())return null;lS(t,i,!0)}function Mb(){Ob(function(){($t&6)!==0?jt(H,yb):bS()})}function cm(){if(Es===0){var t=rl;t===0&&(t=et,et<<=1,(et&261888)===0&&(et=256)),Es=t}return Es}function wS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:js(""+t)}function DS(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Eb(t,i,s,u,h){if(i==="submit"&&s&&s.stateNode===h){var m=wS((h[yt]||null).action),E=u.submitter;E&&(i=(i=E[yt]||null)?wS(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var P=new nf("action","action",null,u,h);t.push({event:P,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Es!==0){var X=E?DS(h,E):new FormData(h);Dp(s,{pending:!0,data:X,method:h.method,action:m},null,X)}}else typeof m=="function"&&(P.preventDefault(),X=E?DS(h,E):new FormData(h),Dp(s,{pending:!0,data:X,method:h.method,action:m},m,X))},currentTarget:h}]})}}for(var fm=0;fm<Yd.length;fm++){var hm=Yd[fm],Tb=hm.toLowerCase(),bb=hm[0].toUpperCase()+hm.slice(1);Xa(Tb,"on"+bb)}Xa(ov,"onAnimationEnd"),Xa(lv,"onAnimationIteration"),Xa(uv,"onAnimationStart"),Xa("dblclick","onDoubleClick"),Xa("focusin","onFocus"),Xa("focusout","onBlur"),Xa(GT,"onTransitionRun"),Xa(VT,"onTransitionStart"),Xa(kT,"onTransitionCancel"),Xa(cv,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ku));function US(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var u=t[s],h=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var P=u[E],X=P.instance,ue=P.currentTarget;if(P=P.listener,X!==m&&h.isPropagationStopped())break e;m=P,h.currentTarget=ue;try{m(h)}catch(ye){sf(ye)}h.currentTarget=null,m=X}else for(E=0;E<u.length;E++){if(P=u[E],X=P.instance,ue=P.currentTarget,P=P.listener,X!==m&&h.isPropagationStopped())break e;m=P,h.currentTarget=ue;try{m(h)}catch(ye){sf(ye)}h.currentTarget=null,m=X}}}}function Pt(t,i){var s=i[Jn];s===void 0&&(s=i[Jn]=new Set);var u=t+"__bubble";s.has(u)||(NS(i,t,2,!1),s.add(u))}function dm(t,i,s){var u=0;i&&(u|=4),NS(s,t,u,i)}var qf="_reactListening"+Math.random().toString(36).slice(2);function pm(t){if(!t[qf]){t[qf]=!0,Di.forEach(function(s){s!=="selectionchange"&&(Ab.has(s)||dm(s,!1,t),dm(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[qf]||(i[qf]=!0,dm("selectionchange",!1,i))}}function NS(t,i,s,u){switch(oy(i)){case 2:var h=eA;break;case 8:h=tA;break;default:h=wm}s=h.bind(null,i,s,t),h=void 0,!Od||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(i,s,{capture:!0,passive:h}):t.addEventListener(i,s,!0):h!==void 0?t.addEventListener(i,s,{passive:h}):t.addEventListener(i,s,!1)}function mm(t,i,s,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var P=u.stateNode.containerInfo;if(P===h)break;if(E===4)for(E=u.return;E!==null;){var X=E.tag;if((X===3||X===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;P!==null;){if(E=Mn(P),E===null)return;if(X=E.tag,X===5||X===6||X===26||X===27){u=m=E;continue e}P=P.parentNode}}u=u.return}Ig(function(){var ue=m,ye=Nd(s),Ae=[];e:{var fe=fv.get(t);if(fe!==void 0){var me=nf,$e=t;switch(t){case"keypress":if(ef(s)===0)break e;case"keydown":case"keyup":me=xT;break;case"focusin":$e="focus",me=zd;break;case"focusout":$e="blur",me=zd;break;case"beforeblur":case"afterblur":me=zd;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=oT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=MT;break;case ov:case lv:case uv:me=cT;break;case cv:me=TT;break;case"scroll":case"scrollend":me=rT;break;case"wheel":me=AT;break;case"copy":case"cut":case"paste":me=hT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Vg;break;case"toggle":case"beforetoggle":me=CT}var ht=(i&4)!==0,pn=!ht&&(t==="scroll"||t==="scrollend"),te=ht?fe!==null?fe+"Capture":null:fe;ht=[];for(var Z=ue,oe;Z!==null;){var Ee=Z;if(oe=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||oe===null||te===null||(Ee=gu(Z,te),Ee!=null&&ht.push(Qu(Z,Ee,oe))),pn)break;Z=Z.return}0<ht.length&&(fe=new me(fe,$e,null,s,ye),Ae.push({event:fe,listeners:ht}))}}if((i&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",me=t==="mouseout"||t==="pointerout",fe&&s!==Ud&&($e=s.relatedTarget||s.fromElement)&&(Mn($e)||$e[Mt]))break e;if((me||fe)&&(fe=ye.window===ye?ye:(fe=ye.ownerDocument)?fe.defaultView||fe.parentWindow:window,me?($e=s.relatedTarget||s.toElement,me=ue,$e=$e?Mn($e):null,$e!==null&&(pn=l($e),ht=$e.tag,$e!==pn||ht!==5&&ht!==27&&ht!==6)&&($e=null)):(me=null,$e=ue),me!==$e)){if(ht=Hg,Ee="onMouseLeave",te="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(ht=Vg,Ee="onPointerLeave",te="onPointerEnter",Z="pointer"),pn=me==null?fe:Ta(me),oe=$e==null?fe:Ta($e),fe=new ht(Ee,Z+"leave",me,s,ye),fe.target=pn,fe.relatedTarget=oe,Ee=null,Mn(ye)===ue&&(ht=new ht(te,Z+"enter",$e,s,ye),ht.target=oe,ht.relatedTarget=pn,Ee=ht),pn=Ee,me&&$e)t:{for(ht=Rb,te=me,Z=$e,oe=0,Ee=te;Ee;Ee=ht(Ee))oe++;Ee=0;for(var ut=Z;ut;ut=ht(ut))Ee++;for(;0<oe-Ee;)te=ht(te),oe--;for(;0<Ee-oe;)Z=ht(Z),Ee--;for(;oe--;){if(te===Z||Z!==null&&te===Z.alternate){ht=te;break t}te=ht(te),Z=ht(Z)}ht=null}else ht=null;me!==null&&LS(Ae,fe,me,ht,!1),$e!==null&&pn!==null&&LS(Ae,pn,$e,ht,!0)}}e:{if(fe=ue?Ta(ue):window,me=fe.nodeName&&fe.nodeName.toLowerCase(),me==="select"||me==="input"&&fe.type==="file")var Kt=Qg;else if(Zg(fe))if(Jg)Kt=zT;else{Kt=FT;var nt=PT}else me=fe.nodeName,!me||me.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?ue&&en(ue.elementType)&&(Kt=Qg):Kt=IT;if(Kt&&(Kt=Kt(t,ue))){Kg(Ae,Kt,s,ye);break e}nt&&nt(t,fe,ue),t==="focusout"&&ue&&fe.type==="number"&&ue.memoizedProps.value!=null&&Lt(fe,"number",fe.value)}switch(nt=ue?Ta(ue):window,t){case"focusin":(Zg(nt)||nt.contentEditable==="true")&&(Jo=nt,Xd=ue,bu=null);break;case"focusout":bu=Xd=Jo=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,rv(Ae,s,ye);break;case"selectionchange":if(HT)break;case"keydown":case"keyup":rv(Ae,s,ye)}var At;if(Hd)e:{switch(t){case"compositionstart":var Bt="onCompositionStart";break e;case"compositionend":Bt="onCompositionEnd";break e;case"compositionupdate":Bt="onCompositionUpdate";break e}Bt=void 0}else Qo?qg(t,s)&&(Bt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Bt="onCompositionStart");Bt&&(kg&&s.locale!=="ko"&&(Qo||Bt!=="onCompositionStart"?Bt==="onCompositionEnd"&&Qo&&(At=zg()):(os=ye,Pd="value"in os?os.value:os.textContent,Qo=!0)),nt=Yf(ue,Bt),0<nt.length&&(Bt=new Gg(Bt,t,null,s,ye),Ae.push({event:Bt,listeners:nt}),At?Bt.data=At:(At=Yg(s),At!==null&&(Bt.data=At)))),(At=DT?UT(t,s):NT(t,s))&&(Bt=Yf(ue,"onBeforeInput"),0<Bt.length&&(nt=new Gg("onBeforeInput","beforeinput",null,s,ye),Ae.push({event:nt,listeners:Bt}),nt.data=At)),Eb(Ae,t,ue,s,ye)}US(Ae,i)})}function Qu(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Yf(t,i){for(var s=i+"Capture",u=[];t!==null;){var h=t,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=gu(t,s),h!=null&&u.unshift(Qu(t,h,m)),h=gu(t,i),h!=null&&u.push(Qu(t,h,m))),t.tag===3)return u;t=t.return}return[]}function Rb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function LS(t,i,s,u,h){for(var m=i._reactName,E=[];s!==null&&s!==u;){var P=s,X=P.alternate,ue=P.stateNode;if(P=P.tag,X!==null&&X===u)break;P!==5&&P!==26&&P!==27||ue===null||(X=ue,h?(ue=gu(s,m),ue!=null&&E.unshift(Qu(s,ue,X))):h||(ue=gu(s,m),ue!=null&&E.push(Qu(s,ue,X)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var Cb=/\r\n?/g,wb=/\u0000|\uFFFD/g;function OS(t){return(typeof t=="string"?t:""+t).replace(Cb,`
`).replace(wb,"")}function PS(t,i){return i=OS(i),OS(t)===i}function dn(t,i,s,u,h,m){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||na(t,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&na(t,""+u);break;case"className":Je(t,"class",u);break;case"tabIndex":Je(t,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,s,u);break;case"style":ka(t,u,m);break;case"data":if(i!=="object"){Je(t,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){t.removeAttribute(s);break}u=js(""+u),t.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&dn(t,i,"name",h.name,h,null),dn(t,i,"formEncType",h.formEncType,h,null),dn(t,i,"formMethod",h.formMethod,h,null),dn(t,i,"formTarget",h.formTarget,h,null)):(dn(t,i,"encType",h.encType,h,null),dn(t,i,"method",h.method,h,null),dn(t,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){t.removeAttribute(s);break}u=js(""+u),t.setAttribute(s,u);break;case"onClick":u!=null&&(t.onclick=Er);break;case"onScroll":u!=null&&Pt("scroll",t);break;case"onScrollEnd":u!=null&&Pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":t.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){t.removeAttribute("xlink:href");break}s=js(""+u),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(s,""+u):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":u===!0?t.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(s,u):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?t.setAttribute(s,u):t.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?t.removeAttribute(s):t.setAttribute(s,u);break;case"popover":Pt("beforetoggle",t),Pt("toggle",t),Ve(t,"popover",u);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ve(t,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=tr.get(s)||s,Ve(t,s,u))}}function _m(t,i,s,u,h,m){switch(s){case"style":ka(t,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof u=="string"?na(t,u):(typeof u=="number"||typeof u=="bigint")&&na(t,""+u);break;case"onScroll":u!=null&&Pt("scroll",t);break;case"onScrollEnd":u!=null&&Pt("scrollend",t);break;case"onClick":u!=null&&(t.onclick=Er);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!L.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=t[yt]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,u,h);break e}s in t?t[s]=u:u===!0?t.setAttribute(s,""):Ve(t,s,u)}}}function _i(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pt("error",t),Pt("load",t);var u=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:dn(t,i,m,E,s,null)}}h&&dn(t,i,"srcSet",s.srcSet,s,null),u&&dn(t,i,"src",s.src,s,null);return;case"input":Pt("invalid",t);var P=m=E=h=null,X=null,ue=null;for(u in s)if(s.hasOwnProperty(u)){var ye=s[u];if(ye!=null)switch(u){case"name":h=ye;break;case"type":E=ye;break;case"checked":X=ye;break;case"defaultChecked":ue=ye;break;case"value":m=ye;break;case"defaultValue":P=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(a(137,i));break;default:dn(t,i,u,ye,s,null)}}Si(t,m,P,X,ue,E,h,!1);return;case"select":Pt("invalid",t),u=E=m=null;for(h in s)if(s.hasOwnProperty(h)&&(P=s[h],P!=null))switch(h){case"value":m=P;break;case"defaultValue":E=P;break;case"multiple":u=P;default:dn(t,i,h,P,s,null)}i=m,s=E,t.multiple=!!u,i!=null?$n(t,!!u,i,!1):s!=null&&$n(t,!!u,s,!0);return;case"textarea":Pt("invalid",t),m=h=u=null;for(E in s)if(s.hasOwnProperty(E)&&(P=s[E],P!=null))switch(E){case"value":u=P;break;case"defaultValue":h=P;break;case"children":m=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(91));break;default:dn(t,i,E,P,s,null)}Va(t,u,h,m);return;case"option":for(X in s)if(s.hasOwnProperty(X)&&(u=s[X],u!=null))switch(X){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:dn(t,i,X,u,s,null)}return;case"dialog":Pt("beforetoggle",t),Pt("toggle",t),Pt("cancel",t),Pt("close",t);break;case"iframe":case"object":Pt("load",t);break;case"video":case"audio":for(u=0;u<Ku.length;u++)Pt(Ku[u],t);break;case"image":Pt("error",t),Pt("load",t);break;case"details":Pt("toggle",t);break;case"embed":case"source":case"link":Pt("error",t),Pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ue in s)if(s.hasOwnProperty(ue)&&(u=s[ue],u!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:dn(t,i,ue,u,s,null)}return;default:if(en(i)){for(ye in s)s.hasOwnProperty(ye)&&(u=s[ye],u!==void 0&&_m(t,i,ye,u,s,void 0));return}}for(P in s)s.hasOwnProperty(P)&&(u=s[P],u!=null&&dn(t,i,P,u,s,null))}function Db(t,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,P=null,X=null,ue=null,ye=null;for(me in s){var Ae=s[me];if(s.hasOwnProperty(me)&&Ae!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":X=Ae;default:u.hasOwnProperty(me)||dn(t,i,me,null,u,Ae)}}for(var fe in u){var me=u[fe];if(Ae=s[fe],u.hasOwnProperty(fe)&&(me!=null||Ae!=null))switch(fe){case"type":m=me;break;case"name":h=me;break;case"checked":ue=me;break;case"defaultChecked":ye=me;break;case"value":E=me;break;case"defaultValue":P=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:me!==Ae&&dn(t,i,fe,me,u,Ae)}}Ze(t,E,P,X,ue,ye,m,h);return;case"select":me=E=P=fe=null;for(m in s)if(X=s[m],s.hasOwnProperty(m)&&X!=null)switch(m){case"value":break;case"multiple":me=X;default:u.hasOwnProperty(m)||dn(t,i,m,null,u,X)}for(h in u)if(m=u[h],X=s[h],u.hasOwnProperty(h)&&(m!=null||X!=null))switch(h){case"value":fe=m;break;case"defaultValue":P=m;break;case"multiple":E=m;default:m!==X&&dn(t,i,h,m,u,X)}i=P,s=E,u=me,fe!=null?$n(t,!!s,fe,!1):!!u!=!!s&&(i!=null?$n(t,!!s,i,!0):$n(t,!!s,s?[]:"",!1));return;case"textarea":me=fe=null;for(P in s)if(h=s[P],s.hasOwnProperty(P)&&h!=null&&!u.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:dn(t,i,P,null,u,h)}for(E in u)if(h=u[E],m=s[E],u.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":fe=h;break;case"defaultValue":me=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&dn(t,i,E,h,u,m)}ta(t,fe,me);return;case"option":for(var $e in s)if(fe=s[$e],s.hasOwnProperty($e)&&fe!=null&&!u.hasOwnProperty($e))switch($e){case"selected":t.selected=!1;break;default:dn(t,i,$e,null,u,fe)}for(X in u)if(fe=u[X],me=s[X],u.hasOwnProperty(X)&&fe!==me&&(fe!=null||me!=null))switch(X){case"selected":t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:dn(t,i,X,fe,u,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in s)fe=s[ht],s.hasOwnProperty(ht)&&fe!=null&&!u.hasOwnProperty(ht)&&dn(t,i,ht,null,u,fe);for(ue in u)if(fe=u[ue],me=s[ue],u.hasOwnProperty(ue)&&fe!==me&&(fe!=null||me!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,i));break;default:dn(t,i,ue,fe,u,me)}return;default:if(en(i)){for(var pn in s)fe=s[pn],s.hasOwnProperty(pn)&&fe!==void 0&&!u.hasOwnProperty(pn)&&_m(t,i,pn,void 0,u,fe);for(ye in u)fe=u[ye],me=s[ye],!u.hasOwnProperty(ye)||fe===me||fe===void 0&&me===void 0||_m(t,i,ye,fe,u,me);return}}for(var te in s)fe=s[te],s.hasOwnProperty(te)&&fe!=null&&!u.hasOwnProperty(te)&&dn(t,i,te,null,u,fe);for(Ae in u)fe=u[Ae],me=s[Ae],!u.hasOwnProperty(Ae)||fe===me||fe==null&&me==null||dn(t,i,Ae,fe,u,me)}function FS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ub(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),u=0;u<s.length;u++){var h=s[u],m=h.transferSize,E=h.initiatorType,P=h.duration;if(m&&P&&FS(E)){for(E=0,P=h.responseEnd,u+=1;u<s.length;u++){var X=s[u],ue=X.startTime;if(ue>P)break;var ye=X.transferSize,Ae=X.initiatorType;ye&&FS(Ae)&&(X=X.responseEnd,E+=ye*(X<P?1:(P-ue)/(X-ue)))}if(--u,i+=8*(m+E)/(h.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gm=null,vm=null;function Zf(t){return t.nodeType===9?t:t.ownerDocument}function IS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zS(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function xm(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Sm=null;function Nb(){var t=window.event;return t&&t.type==="popstate"?t===Sm?!1:(Sm=t,!0):(Sm=null,!1)}var BS=typeof setTimeout=="function"?setTimeout:void 0,Lb=typeof clearTimeout=="function"?clearTimeout:void 0,HS=typeof Promise=="function"?Promise:void 0,Ob=typeof queueMicrotask=="function"?queueMicrotask:typeof HS<"u"?function(t){return HS.resolve(null).then(t).catch(Pb)}:BS;function Pb(t){setTimeout(function(){throw t})}function Ts(t){return t==="head"}function GS(t,i){var s=i,u=0;do{var h=s.nextSibling;if(t.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(u===0){t.removeChild(h),Tl(i);return}u--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")u++;else if(s==="html")Ju(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Ju(s);for(var m=s.firstChild;m;){var E=m.nextSibling,P=m.nodeName;m[Sn]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&Ju(t.ownerDocument.body);s=h}while(s);Tl(i)}function VS(t,i){var s=t;t=0;do{var u=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=u}while(s)}function ym(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ym(s),yn(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Fb(t,i,s,u){for(;t.nodeType===1;){var h=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(u){if(!t[Sn])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Ua(t.nextSibling),t===null)break}return null}function Ib(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ua(t.nextSibling),t===null))return null;return t}function kS(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ua(t.nextSibling),t===null))return null;return t}function Mm(t){return t.data==="$?"||t.data==="$~"}function Em(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zb(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var u=function(){i(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),t._reactRetry=u}}function Ua(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Tm=null;function XS(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ua(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function WS(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function qS(t,i,s){switch(i=Zf(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Ju(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);yn(t)}var Na=new Map,YS=new Set;function Kf(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Br=G.d;G.d={f:Bb,r:Hb,D:Gb,C:Vb,L:kb,m:Xb,X:qb,S:Wb,M:Yb};function Bb(){var t=Br.f(),i=Hf();return t||i}function Hb(t){var i=hi(t);i!==null&&i.tag===5&&i.type==="form"?cx(i):Br.r(t)}var yl=typeof document>"u"?null:document;function ZS(t,i,s){var u=yl;if(u&&typeof i=="string"&&i){var h=an(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),YS.has(h)||(YS.add(h),t={rel:t,crossOrigin:s,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),_i(i,"link",t),Rt(i),u.head.appendChild(i)))}}function Gb(t){Br.D(t),ZS("dns-prefetch",t,null)}function Vb(t,i){Br.C(t,i),ZS("preconnect",t,i)}function kb(t,i,s){Br.L(t,i,s);var u=yl;if(u&&t&&i){var h='link[rel="preload"][as="'+an(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+an(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+an(s.imageSizes)+'"]')):h+='[href="'+an(t)+'"]';var m=h;switch(i){case"style":m=Ml(t);break;case"script":m=El(t)}Na.has(m)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Na.set(m,t),u.querySelector(h)!==null||i==="style"&&u.querySelector($u(m))||i==="script"&&u.querySelector(ju(m))||(i=u.createElement("link"),_i(i,"link",t),Rt(i),u.head.appendChild(i)))}}function Xb(t,i){Br.m(t,i);var s=yl;if(s&&t){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+an(u)+'"][href="'+an(t)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=El(t)}if(!Na.has(m)&&(t=v({rel:"modulepreload",href:t},i),Na.set(m,t),s.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ju(m)))return}u=s.createElement("link"),_i(u,"link",t),Rt(u),s.head.appendChild(u)}}}function Wb(t,i,s){Br.S(t,i,s);var u=yl;if(u&&t){var h=En(u).hoistableStyles,m=Ml(t);i=i||"default";var E=h.get(m);if(!E){var P={loading:0,preload:null};if(E=u.querySelector($u(m)))P.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Na.get(m))&&bm(t,s);var X=E=u.createElement("link");Rt(X),_i(X,"link",t),X._p=new Promise(function(ue,ye){X.onload=ue,X.onerror=ye}),X.addEventListener("load",function(){P.loading|=1}),X.addEventListener("error",function(){P.loading|=2}),P.loading|=4,Qf(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:P},h.set(m,E)}}}function qb(t,i){Br.X(t,i);var s=yl;if(s&&t){var u=En(s).hoistableScripts,h=El(t),m=u.get(h);m||(m=s.querySelector(ju(h)),m||(t=v({src:t,async:!0},i),(i=Na.get(h))&&Am(t,i),m=s.createElement("script"),Rt(m),_i(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function Yb(t,i){Br.M(t,i);var s=yl;if(s&&t){var u=En(s).hoistableScripts,h=El(t),m=u.get(h);m||(m=s.querySelector(ju(h)),m||(t=v({src:t,async:!0,type:"module"},i),(i=Na.get(h))&&Am(t,i),m=s.createElement("script"),Rt(m),_i(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function KS(t,i,s,u){var h=(h=ne.current)?Kf(h):null;if(!h)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ml(s.href),s=En(h).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ml(s.href);var m=En(h).hoistableStyles,E=m.get(t);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=h.querySelector($u(t)))&&!m._p&&(E.instance=m,E.state.loading=5),Na.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Na.set(t,s),m||Zb(h,t,s,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=El(s),s=En(h).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Ml(t){return'href="'+an(t)+'"'}function $u(t){return'link[rel="stylesheet"]['+t+"]"}function QS(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Zb(t,i,s,u){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=t.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),_i(i,"link",s),Rt(i),t.head.appendChild(i))}function El(t){return'[src="'+an(t)+'"]'}function ju(t){return"script[async]"+t}function JS(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=t.querySelector('style[data-href~="'+an(s.href)+'"]');if(u)return i.instance=u,Rt(u),u;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(t.ownerDocument||t).createElement("style"),Rt(u),_i(u,"style",h),Qf(u,s.precedence,t),i.instance=u;case"stylesheet":h=Ml(s.href);var m=t.querySelector($u(h));if(m)return i.state.loading|=4,i.instance=m,Rt(m),m;u=QS(s),(h=Na.get(h))&&bm(u,h),m=(t.ownerDocument||t).createElement("link"),Rt(m);var E=m;return E._p=new Promise(function(P,X){E.onload=P,E.onerror=X}),_i(m,"link",u),i.state.loading|=4,Qf(m,s.precedence,t),i.instance=m;case"script":return m=El(s.src),(h=t.querySelector(ju(m)))?(i.instance=h,Rt(h),h):(u=s,(h=Na.get(m))&&(u=v({},s),Am(u,h)),t=t.ownerDocument||t,h=t.createElement("script"),Rt(h),_i(h,"link",u),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Qf(u,s.precedence,t));return i.instance}function Qf(t,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,E=0;E<u.length;E++){var P=u[E];if(P.dataset.precedence===i)m=P;else if(m!==h)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function bm(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Am(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Jf=null;function $S(t,i,s){if(Jf===null){var u=new Map,h=Jf=new Map;h.set(s,u)}else h=Jf,u=h.get(s),u||(u=new Map,h.set(s,u));if(u.has(t))return u;for(u.set(t,null),s=s.getElementsByTagName(t),h=0;h<s.length;h++){var m=s[h];if(!(m[Sn]||m[St]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=t+E;var P=u.get(E);P?P.push(m):u.set(E,[m])}}return u}function jS(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Kb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function ey(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Qb(t,i,s,u){if(s.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=Ml(u.href),m=i.querySelector($u(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=$f.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,Rt(m);return}m=i.ownerDocument||i,u=QS(u),(h=Na.get(h))&&bm(u,h),m=m.createElement("link"),Rt(m);var E=m;E._p=new Promise(function(P,X){E.onload=P,E.onerror=X}),_i(m,"link",u),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=$f.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Rm=0;function Jb(t,i){return t.stylesheets&&t.count===0&&eh(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var u=setTimeout(function(){if(t.stylesheets&&eh(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Rm===0&&(Rm=62500*Ub());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&eh(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Rm?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(u),clearTimeout(h)}}:null}function $f(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var jf=null;function eh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,jf=new Map,i.forEach($b,t),jf=null,$f.call(t))}function $b(t,i){if(!(i.state.loading&4)){var s=jf.get(t);if(s)var u=s.get(null);else{s=new Map,jf.set(t,s);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),u=E)}u&&s.set(null,u)}h=i.instance,E=h.getAttribute("data-precedence"),m=s.get(E)||u,m===u&&s.set(null,h),s.set(E,h),this.count++,u=$f.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var ec={$$typeof:O,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function jb(t,i,s,u,h,m,E,P,X){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function ty(t,i,s,u,h,m,E,P,X,ue,ye,Ae){return t=new jb(t,i,s,E,X,ue,ye,Ae,P),i=1,m===!0&&(i|=24),m=aa(3,null,null,i),t.current=m,m.stateNode=t,i=sp(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:s,cache:i},cp(m),t}function ny(t){return t?(t=el,t):el}function iy(t,i,s,u,h,m){h=ny(h),u.context===null?u.context=h:u.pendingContext=h,u=ds(i),u.payload={element:s},m=m===void 0?null:m,m!==null&&(u.callback=m),s=ps(t,u,i),s!==null&&(Wi(s,t,i),Nu(s,t,i))}function ay(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Cm(t,i){ay(t,i),(t=t.alternate)&&ay(t,i)}function ry(t){if(t.tag===13||t.tag===31){var i=io(t,67108864);i!==null&&Wi(i,t,67108864),Cm(t,67108864)}}function sy(t){if(t.tag===13||t.tag===31){var i=ua();i=mt(i);var s=io(t,i);s!==null&&Wi(s,t,i),Cm(t,i)}}var th=!0;function eA(t,i,s,u){var h=I.T;I.T=null;var m=G.p;try{G.p=2,wm(t,i,s,u)}finally{G.p=m,I.T=h}}function tA(t,i,s,u){var h=I.T;I.T=null;var m=G.p;try{G.p=8,wm(t,i,s,u)}finally{G.p=m,I.T=h}}function wm(t,i,s,u){if(th){var h=Dm(u);if(h===null)mm(t,i,u,nh,s),ly(t,u);else if(iA(h,t,i,s,u))u.stopPropagation();else if(ly(t,u),i&4&&-1<nA.indexOf(t)){for(;h!==null;){var m=hi(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Ue(m.pendingLanes);if(E!==0){var P=m;for(P.pendingLanes|=2,P.entangledLanes|=2;E;){var X=1<<31-ke(E);P.entanglements[1]|=X,E&=~X}rr(m),($t&6)===0&&(zf=It()+500,Zu(0))}}break;case 31:case 13:P=io(m,2),P!==null&&Wi(P,m,2),Hf(),Cm(m,2)}if(m=Dm(u),m===null&&mm(t,i,u,nh,s),m===h)break;h=m}h!==null&&u.stopPropagation()}else mm(t,i,u,null,s)}}function Dm(t){return t=Nd(t),Um(t)}var nh=null;function Um(t){if(nh=null,t=Mn(t),t!==null){var i=l(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=c(i),t!==null)return t;t=null}else if(s===31){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return nh=t,null}function oy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case H:return 2;case A:return 8;case $:case ae:return 32;case de:return 268435456;default:return 32}default:return 32}}var Nm=!1,bs=null,As=null,Rs=null,tc=new Map,nc=new Map,Cs=[],nA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ly(t,i){switch(t){case"focusin":case"focusout":bs=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":tc.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(i.pointerId)}}function ic(t,i,s,u,h,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=hi(i),i!==null&&ry(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function iA(t,i,s,u,h){switch(i){case"focusin":return bs=ic(bs,t,i,s,u,h),!0;case"dragenter":return As=ic(As,t,i,s,u,h),!0;case"mouseover":return Rs=ic(Rs,t,i,s,u,h),!0;case"pointerover":var m=h.pointerId;return tc.set(m,ic(tc.get(m)||null,t,i,s,u,h)),!0;case"gotpointercapture":return m=h.pointerId,nc.set(m,ic(nc.get(m)||null,t,i,s,u,h)),!0}return!1}function uy(t){var i=Mn(t.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){t.blockedOn=i,cn(t.priority,function(){sy(s)});return}}else if(i===31){if(i=f(s),i!==null){t.blockedOn=i,cn(t.priority,function(){sy(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ih(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Dm(t.nativeEvent);if(s===null){s=t.nativeEvent;var u=new s.constructor(s.type,s);Ud=u,s.target.dispatchEvent(u),Ud=null}else return i=hi(s),i!==null&&ry(i),t.blockedOn=s,!1;i.shift()}return!0}function cy(t,i,s){ih(t)&&s.delete(i)}function aA(){Nm=!1,bs!==null&&ih(bs)&&(bs=null),As!==null&&ih(As)&&(As=null),Rs!==null&&ih(Rs)&&(Rs=null),tc.forEach(cy),nc.forEach(cy)}function ah(t,i){t.blockedOn===i&&(t.blockedOn=null,Nm||(Nm=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,aA)))}var rh=null;function fy(t){rh!==t&&(rh=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rh===t&&(rh=null);for(var i=0;i<t.length;i+=3){var s=t[i],u=t[i+1],h=t[i+2];if(typeof u!="function"){if(Um(u||s)===null)continue;break}var m=hi(s);m!==null&&(t.splice(i,3),i-=3,Dp(m,{pending:!0,data:h,method:s.method,action:u},u,h))}}))}function Tl(t){function i(X){return ah(X,t)}bs!==null&&ah(bs,t),As!==null&&ah(As,t),Rs!==null&&ah(Rs,t),tc.forEach(i),nc.forEach(i);for(var s=0;s<Cs.length;s++){var u=Cs[s];u.blockedOn===t&&(u.blockedOn=null)}for(;0<Cs.length&&(s=Cs[0],s.blockedOn===null);)uy(s),s.blockedOn===null&&Cs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var h=s[u],m=s[u+1],E=h[yt]||null;if(typeof m=="function")E||fy(s);else if(E){var P=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[yt]||null)P=E.formAction;else if(Um(h)!==null)continue}else P=E.action;typeof P=="function"?s[u+1]=P:(s.splice(u,3),u-=3),fy(s)}}}function hy(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),u||setTimeout(s,20)}function s(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){u=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Lm(t){this._internalRoot=t}sh.prototype.render=Lm.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,u=ua();iy(s,u,t,i,null,null)},sh.prototype.unmount=Lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;iy(t.current,2,null,t,null,null),Hf(),i[Mt]=null}};function sh(t){this._internalRoot=t}sh.prototype.unstable_scheduleHydration=function(t){if(t){var i=bt();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Cs.length&&i!==0&&i<Cs[s].priority;s++);Cs.splice(s,0,t),s===0&&uy(t)}};var dy=e.version;if(dy!=="19.2.7")throw Error(a(527,dy,"19.2.7"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var rA={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oh.isDisabled&&oh.supportsFiber)try{_e=oh.inject(rA),pe=oh}catch{}}return ac.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,u="",h=Sx,m=yx,E=Mx;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=ty(t,1,!1,null,null,s,u,null,h,m,E,hy),t[Mt]=i.current,pm(t),new Lm(i)},ac.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var u=!1,h="",m=Sx,E=yx,P=Mx,X=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(P=s.onRecoverableError),s.formState!==void 0&&(X=s.formState)),i=ty(t,1,!0,i,s??null,u,h,X,m,E,P,hy),i.context=ny(null),s=i.current,u=ua(),u=mt(u),h=ds(u),h.callback=null,ps(s,h,u),s=u,i.current.lanes=s,Te(i,s),rr(i),t[Mt]=i.current,pm(t),new sh(i)},ac.version="19.2.7",ac}var yy;function pA(){if(yy)return Pm.exports;yy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Pm.exports=dA(),Pm.exports}var mA=pA();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Y0="185",_A=0,My=1,gA=2,Xh=1,vA=2,mc=3,Ys=0,Ki=1,Yr=2,Jr=0,Kl=1,Ey=2,Ty=3,by=4,xA=5,Ro=100,SA=101,yA=102,MA=103,EA=104,TA=200,bA=201,AA=202,RA=203,N_=204,L_=205,CA=206,wA=207,DA=208,UA=209,NA=210,LA=211,OA=212,PA=213,FA=214,O_=0,P_=1,F_=2,ru=3,I_=4,z_=5,B_=6,H_=7,nE=0,IA=1,zA=2,_r=0,iE=1,aE=2,rE=3,sE=4,oE=5,lE=6,uE=7,cE=300,Ho=301,su=302,Bm=303,Hm=304,Ed=306,G_=1e3,Kr=1001,V_=1002,gi=1003,BA=1004,lh=1005,Ci=1006,Gm=1007,wo=1008,za=1009,fE=1010,hE=1011,Fc=1012,Z0=1013,Sr=1014,hr=1015,ts=1016,K0=1017,Q0=1018,Ic=1020,dE=35902,pE=35899,mE=1021,_E=1022,ja=1023,ns=1026,Do=1027,gE=1028,J0=1029,Go=1030,$0=1031,j0=1033,Wh=33776,qh=33777,Yh=33778,Zh=33779,k_=35840,X_=35841,W_=35842,q_=35843,Y_=36196,Z_=37492,K_=37496,Q_=37488,J_=37489,rd=37490,$_=37491,j_=37808,e0=37809,t0=37810,n0=37811,i0=37812,a0=37813,r0=37814,s0=37815,o0=37816,l0=37817,u0=37818,c0=37819,f0=37820,h0=37821,d0=36492,p0=36494,m0=36495,_0=36283,g0=36284,sd=36285,v0=36286,HA=3200,Ay=0,GA=1,Is="",Pa="srgb",od="srgb-linear",ld="linear",un="srgb",bl=7680,Ry=519,VA=512,kA=513,XA=514,eg=515,WA=516,qA=517,tg=518,YA=519,Cy=35044,wy="300 es",dr=2e3,ud=2001;function ZA(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function cd(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function KA(){const o=cd("canvas");return o.style.display="block",o}const Dy={};function Uy(...o){const e="THREE."+o.shift();console.log(e,...o)}function vE(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function _t(...o){o=vE(o);const e="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...o)}}function Xt(...o){o=vE(o);const e="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...o)}}function Ql(...o){const e=o.join(" ");e in Dy||(Dy[e]=!0,_t(...o))}function QA(o,e,n){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const JA={[O_]:P_,[F_]:B_,[I_]:H_,[ru]:z_,[P_]:O_,[B_]:F_,[H_]:I_,[z_]:ru};class qo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let l=0,c=r.length;l<c;l++)r[l].call(this,e);e.target=null}}}const Mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vm=Math.PI/180,x0=180/Math.PI;function Zc(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Mi[o&255]+Mi[o>>8&255]+Mi[o>>16&255]+Mi[o>>24&255]+"-"+Mi[e&255]+Mi[e>>8&255]+"-"+Mi[e>>16&15|64]+Mi[e>>24&255]+"-"+Mi[n&63|128]+Mi[n>>8&255]+"-"+Mi[n>>16&255]+Mi[n>>24&255]+Mi[a&255]+Mi[a>>8&255]+Mi[a>>16&255]+Mi[a>>24&255]).toLowerCase()}function Vt(o,e,n){return Math.max(e,Math.min(n,o))}function $A(o,e){return(o%e+e)%e}function km(o,e,n){return(1-n)*o+n*e}function rc(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ug=class Ug{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Vt(this.x,e.x,n.x),this.y=Vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Vt(this.x,e,n),this.y=Vt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Vt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*a-c*r+e.x,this.y=l*r+c*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ug.prototype.isVector2=!0;let Wt=Ug;class mu{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,l,c,f){let p=a[r+0],d=a[r+1],_=a[r+2],v=a[r+3],g=l[c+0],x=l[c+1],M=l[c+2],T=l[c+3];if(v!==T||p!==g||d!==x||_!==M){let y=p*g+d*x+_*M+v*T;y<0&&(g=-g,x=-x,M=-M,T=-T,y=-y);let S=1-f;if(y<.9995){const U=Math.acos(y),O=Math.sin(U);S=Math.sin(S*U)/O,f=Math.sin(f*U)/O,p=p*S+g*f,d=d*S+x*f,_=_*S+M*f,v=v*S+T*f}else{p=p*S+g*f,d=d*S+x*f,_=_*S+M*f,v=v*S+T*f;const U=1/Math.sqrt(p*p+d*d+_*_+v*v);p*=U,d*=U,_*=U,v*=U}}e[n]=p,e[n+1]=d,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,r,l,c){const f=a[r],p=a[r+1],d=a[r+2],_=a[r+3],v=l[c],g=l[c+1],x=l[c+2],M=l[c+3];return e[n]=f*M+_*v+p*x-d*g,e[n+1]=p*M+_*g+d*v-f*x,e[n+2]=d*M+_*x+f*g-p*v,e[n+3]=_*M-f*v-p*g-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(r/2),v=f(l/2),g=p(a/2),x=p(r/2),M=p(l/2);switch(c){case"XYZ":this._x=g*_*v+d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v-g*x*M;break;case"YXZ":this._x=g*_*v+d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v+g*x*M;break;case"ZXY":this._x=g*_*v-d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v-g*x*M;break;case"ZYX":this._x=g*_*v-d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v+g*x*M;break;case"YZX":this._x=g*_*v+d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v-g*x*M;break;case"XZY":this._x=g*_*v-d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v+g*x*M;break;default:_t("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],v=n[10],g=a+f+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-p)*x,this._y=(l-d)*x,this._z=(c-r)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(_-p)/x,this._x=.25*x,this._y=(r+c)/x,this._z=(l+d)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-d)/x,this._x=(r+c)/x,this._y=.25*x,this._z=(p+_)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(c-r)/x,this._x=(l+d)/x,this._y=(p+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,l=e._z,c=e._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+r*d-l*p,this._y=r*_+c*p+l*f-a*d,this._z=l*_+c*d+a*p-r*f,this._w=c*_-a*f-r*p-l*d,this._onChangeCallback(),this}slerp(e,n){let a=e._x,r=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(a=-a,r=-r,l=-l,c=-c,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ng=class Ng{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ny.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ny.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,l=e.elements,c=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*c,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,l=e.x,c=e.y,f=e.z,p=e.w,d=2*(c*r-f*a),_=2*(f*n-l*r),v=2*(l*a-c*n);return this.x=n+p*d+c*v-f*_,this.y=a+p*_+f*d-l*v,this.z=r+p*v+l*_-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Vt(this.x,e.x,n.x),this.y=Vt(this.y,e.y,n.y),this.z=Vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Vt(this.x,e,n),this.y=Vt(this.y,e,n),this.z=Vt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,l=e.z,c=n.x,f=n.y,p=n.z;return this.x=r*p-l*f,this.y=l*c-a*p,this.z=a*f-r*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Xm.copy(this).projectOnVector(e),this.sub(Xm)}reflect(e){return this.sub(Xm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Vt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ng.prototype.isVector3=!0;let he=Ng;const Xm=new he,Ny=new mu,Lg=class Lg{constructor(e,n,a,r,l,c,f,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,l,c,f,p,d)}set(e,n,a,r,l,c,f,p,d){const _=this.elements;return _[0]=e,_[1]=r,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],v=a[7],g=a[2],x=a[5],M=a[8],T=r[0],y=r[3],S=r[6],U=r[1],O=r[4],R=r[7],N=r[2],w=r[5],C=r[8];return l[0]=c*T+f*U+p*N,l[3]=c*y+f*O+p*w,l[6]=c*S+f*R+p*C,l[1]=d*T+_*U+v*N,l[4]=d*y+_*O+v*w,l[7]=d*S+_*R+v*C,l[2]=g*T+x*U+M*N,l[5]=g*y+x*O+M*w,l[8]=g*S+x*R+M*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],_=e[8];return n*c*_-n*f*d-a*l*_+a*f*p+r*l*d-r*c*p}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],_=e[8],v=_*c-f*d,g=f*p-_*l,x=d*l-c*p,M=n*v+a*g+r*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(r*d-_*a)*T,e[2]=(f*a-r*c)*T,e[3]=g*T,e[4]=(_*n-r*p)*T,e[5]=(r*l-f*n)*T,e[6]=x*T,e[7]=(a*p-d*n)*T,e[8]=(c*n-a*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+e,-r*d,r*p,-r*(-d*c+p*f)+f+n,0,0,1),this}scale(e,n){return Ql("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wm.makeScale(e,n)),this}rotate(e){return Ql("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wm.makeRotation(-e)),this}translate(e,n){return Ql("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wm.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lg.prototype.isMatrix3=!0;let vt=Lg;const Wm=new vt,Ly=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oy=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jA(){const o={enabled:!0,workingColorSpace:od,spaces:{},convert:function(r,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===un&&(r.r=$r(r.r),r.g=$r(r.g),r.b=$r(r.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===un&&(r.r=Jl(r.r),r.g=Jl(r.g),r.b=Jl(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Is?ld:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,c){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return Ql("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return Ql("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[od]:{primaries:e,whitePoint:a,transfer:ld,toXYZ:Ly,fromXYZ:Oy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pa},outputColorSpaceConfig:{drawingBufferColorSpace:Pa}},[Pa]:{primaries:e,whitePoint:a,transfer:un,toXYZ:Ly,fromXYZ:Oy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pa}}}),o}const Gt=jA();function $r(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Jl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Al;class eR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Al===void 0&&(Al=cd("canvas")),Al.width=e.width,Al.height=e.height;const r=Al.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Al}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=cd("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),l=r.data;for(let c=0;c<l.length;c++)l[c]=$r(l[c]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor($r(n[a]/255)*255):n[a]=$r(n[a]);return{data:n,width:e.width,height:e.height}}else return _t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tR=0;class ng{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tR++}),this.uuid=Zc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let c=0,f=r.length;c<f;c++)r[c].isDataTexture?l.push(qm(r[c].image)):l.push(qm(r[c]))}else l=qm(r);a.url=l}return n||(e.images[this.uuid]=a),a}}function qm(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?eR.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(_t("Texture: Unable to serialize Texture."),{})}let nR=0;const Ym=new he;class Bi extends qo{constructor(e=Bi.DEFAULT_IMAGE,n=Bi.DEFAULT_MAPPING,a=Kr,r=Kr,l=Ci,c=wo,f=ja,p=za,d=Bi.DEFAULT_ANISOTROPY,_=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nR++}),this.uuid=Zc(),this.name="",this.source=new ng(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ym).x}get height(){return this.source.getSize(Ym).y}get depth(){return this.source.getSize(Ym).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){_t(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){_t(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case G_:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case V_:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case G_:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case V_:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bi.DEFAULT_IMAGE=null;Bi.DEFAULT_MAPPING=cE;Bi.DEFAULT_ANISOTROPY=1;const Og=class Og{constructor(e=0,n=0,a=0,r=1){this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*r+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*r+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*r+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*r+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,l;const p=e.elements,d=p[0],_=p[4],v=p[8],g=p[1],x=p[5],M=p[9],T=p[2],y=p[6],S=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const O=(d+1)/2,R=(x+1)/2,N=(S+1)/2,w=(_+g)/4,C=(v+T)/4,b=(M+y)/4;return O>R&&O>N?O<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(O),r=w/a,l=C/a):R>N?R<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(R),a=w/r,l=b/r):N<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(N),a=C/l,r=b/l),this.set(a,r,l,n),this}let U=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(g-_)*(g-_));return Math.abs(U)<.001&&(U=1),this.x=(y-M)/U,this.y=(v-T)/U,this.z=(g-_)/U,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Vt(this.x,e.x,n.x),this.y=Vt(this.y,e.y,n.y),this.z=Vt(this.z,e.z,n.z),this.w=Vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Vt(this.x,e,n),this.y=Vt(this.y,e,n),this.z=Vt(this.z,e,n),this.w=Vt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Og.prototype.isVector4=!0;let In=Og;class iR extends qo{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new In(0,0,e,n),this.scissorTest=!1,this.viewport=new In(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:a.depth},l=new Bi(r),c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ng(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends iR{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class xE extends Bi{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aR extends Bi{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Md=class Md{constructor(e,n,a,r,l,c,f,p,d,_,v,g,x,M,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,l,c,f,p,d,_,v,g,x,M,T,y)}set(e,n,a,r,l,c,f,p,d,_,v,g,x,M,T,y){const S=this.elements;return S[0]=e,S[4]=n,S[8]=a,S[12]=r,S[1]=l,S[5]=c,S[9]=f,S[13]=p,S[2]=d,S[6]=_,S[10]=v,S[14]=g,S[3]=x,S[7]=M,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Md().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,r=1/Rl.setFromMatrixColumn(e,0).length(),l=1/Rl.setFromMatrixColumn(e,1).length(),c=1/Rl.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,l=e.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(r),d=Math.sin(r),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=c*_,x=c*v,M=f*_,T=f*v;n[0]=p*_,n[4]=-p*v,n[8]=d,n[1]=x+M*d,n[5]=g-T*d,n[9]=-f*p,n[2]=T-g*d,n[6]=M+x*d,n[10]=c*p}else if(e.order==="YXZ"){const g=p*_,x=p*v,M=d*_,T=d*v;n[0]=g+T*f,n[4]=M*f-x,n[8]=c*d,n[1]=c*v,n[5]=c*_,n[9]=-f,n[2]=x*f-M,n[6]=T+g*f,n[10]=c*p}else if(e.order==="ZXY"){const g=p*_,x=p*v,M=d*_,T=d*v;n[0]=g-T*f,n[4]=-c*v,n[8]=M+x*f,n[1]=x+M*f,n[5]=c*_,n[9]=T-g*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(e.order==="ZYX"){const g=c*_,x=c*v,M=f*_,T=f*v;n[0]=p*_,n[4]=M*d-x,n[8]=g*d+T,n[1]=p*v,n[5]=T*d+g,n[9]=x*d-M,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(e.order==="YZX"){const g=c*p,x=c*d,M=f*p,T=f*d;n[0]=p*_,n[4]=T-g*v,n[8]=M*v+x,n[1]=v,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=x*v+M,n[10]=g-T*v}else if(e.order==="XZY"){const g=c*p,x=c*d,M=f*p,T=f*d;n[0]=p*_,n[4]=-v,n[8]=d*_,n[1]=g*v+T,n[5]=c*_,n[9]=x*v-M,n[2]=M*v-x,n[6]=f*_,n[10]=T*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rR,e,sR)}lookAt(e,n,a){const r=this.elements;return ca.subVectors(e,n),ca.lengthSq()===0&&(ca.z=1),ca.normalize(),Ds.crossVectors(a,ca),Ds.lengthSq()===0&&(Math.abs(a.z)===1?ca.x+=1e-4:ca.z+=1e-4,ca.normalize(),Ds.crossVectors(a,ca)),Ds.normalize(),uh.crossVectors(ca,Ds),r[0]=Ds.x,r[4]=uh.x,r[8]=ca.x,r[1]=Ds.y,r[5]=uh.y,r[9]=ca.y,r[2]=Ds.z,r[6]=uh.z,r[10]=ca.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],v=a[5],g=a[9],x=a[13],M=a[2],T=a[6],y=a[10],S=a[14],U=a[3],O=a[7],R=a[11],N=a[15],w=r[0],C=r[4],b=r[8],D=r[12],z=r[1],k=r[5],B=r[9],ee=r[13],j=r[2],q=r[6],I=r[10],G=r[14],Y=r[3],se=r[7],V=r[11],F=r[15];return l[0]=c*w+f*z+p*j+d*Y,l[4]=c*C+f*k+p*q+d*se,l[8]=c*b+f*B+p*I+d*V,l[12]=c*D+f*ee+p*G+d*F,l[1]=_*w+v*z+g*j+x*Y,l[5]=_*C+v*k+g*q+x*se,l[9]=_*b+v*B+g*I+x*V,l[13]=_*D+v*ee+g*G+x*F,l[2]=M*w+T*z+y*j+S*Y,l[6]=M*C+T*k+y*q+S*se,l[10]=M*b+T*B+y*I+S*V,l[14]=M*D+T*ee+y*G+S*F,l[3]=U*w+O*z+R*j+N*Y,l[7]=U*C+O*k+R*q+N*se,l[11]=U*b+O*B+R*I+N*V,l[15]=U*D+O*ee+R*G+N*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],l=e[12],c=e[1],f=e[5],p=e[9],d=e[13],_=e[2],v=e[6],g=e[10],x=e[14],M=e[3],T=e[7],y=e[11],S=e[15],U=p*x-d*g,O=f*x-d*v,R=f*g-p*v,N=c*x-d*_,w=c*g-p*_,C=c*v-f*_;return n*(T*U-y*O+S*R)-a*(M*U-y*N+S*w)+r*(M*O-T*N+S*C)-l*(M*R-T*w+y*C)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],r=e[8],l=e[1],c=e[5],f=e[9],p=e[2],d=e[6],_=e[10];return n*(c*_-f*d)-a*(l*_-f*p)+r*(l*d-c*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],_=e[8],v=e[9],g=e[10],x=e[11],M=e[12],T=e[13],y=e[14],S=e[15],U=n*f-a*c,O=n*p-r*c,R=n*d-l*c,N=a*p-r*f,w=a*d-l*f,C=r*d-l*p,b=_*T-v*M,D=_*y-g*M,z=_*S-x*M,k=v*y-g*T,B=v*S-x*T,ee=g*S-x*y,j=U*ee-O*B+R*k+N*z-w*D+C*b;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/j;return e[0]=(f*ee-p*B+d*k)*q,e[1]=(r*B-a*ee-l*k)*q,e[2]=(T*C-y*w+S*N)*q,e[3]=(g*w-v*C-x*N)*q,e[4]=(p*z-c*ee-d*D)*q,e[5]=(n*ee-r*z+l*D)*q,e[6]=(y*R-M*C-S*O)*q,e[7]=(_*C-g*R+x*O)*q,e[8]=(c*B-f*z+d*b)*q,e[9]=(a*z-n*B-l*b)*q,e[10]=(M*w-T*R+S*U)*q,e[11]=(v*R-_*w-x*U)*q,e[12]=(f*D-c*k-p*b)*q,e[13]=(n*k-a*D+r*b)*q,e[14]=(T*O-M*N-y*U)*q,e[15]=(_*N-v*O+g*U)*q,this}scale(e){const n=this.elements,a=e.x,r=e.y,l=e.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,c=e.x,f=e.y,p=e.z,d=l*c,_=l*f;return this.set(d*c+a,d*f-r*p,d*p+r*f,0,d*f+r*p,_*f+a,_*p-r*c,0,d*p-r*f,_*p+r*c,l*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,l,c){return this.set(1,a,l,0,e,1,c,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,_=c+c,v=f+f,g=l*d,x=l*_,M=l*v,T=c*_,y=c*v,S=f*v,U=p*d,O=p*_,R=p*v,N=a.x,w=a.y,C=a.z;return r[0]=(1-(T+S))*N,r[1]=(x+R)*N,r[2]=(M-O)*N,r[3]=0,r[4]=(x-R)*w,r[5]=(1-(g+S))*w,r[6]=(y+U)*w,r[7]=0,r[8]=(M+O)*C,r[9]=(y-U)*C,r[10]=(1-(g+T))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const l=this.determinantAffine();if(l===0)return a.set(1,1,1),n.identity(),this;let c=Rl.set(r[0],r[1],r[2]).length();const f=Rl.set(r[4],r[5],r[6]).length(),p=Rl.set(r[8],r[9],r[10]).length();l<0&&(c=-c),Ya.copy(this);const d=1/c,_=1/f,v=1/p;return Ya.elements[0]*=d,Ya.elements[1]*=d,Ya.elements[2]*=d,Ya.elements[4]*=_,Ya.elements[5]*=_,Ya.elements[6]*=_,Ya.elements[8]*=v,Ya.elements[9]*=v,Ya.elements[10]*=v,n.setFromRotationMatrix(Ya),a.x=c,a.y=f,a.z=p,this}makePerspective(e,n,a,r,l,c,f=dr,p=!1){const d=this.elements,_=2*l/(n-e),v=2*l/(a-r),g=(n+e)/(n-e),x=(a+r)/(a-r);let M,T;if(p)M=l/(c-l),T=c*l/(c-l);else if(f===dr)M=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===ud)M=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,r,l,c,f=dr,p=!1){const d=this.elements,_=2/(n-e),v=2/(a-r),g=-(n+e)/(n-e),x=-(a+r)/(a-r);let M,T;if(p)M=1/(c-l),T=c/(c-l);else if(f===dr)M=-2/(c-l),T=-(c+l)/(c-l);else if(f===ud)M=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};Md.prototype.isMatrix4=!0;let Qn=Md;const Rl=new he,Ya=new Qn,rR=new he(0,0,0),sR=new he(1,1,1),Ds=new he,uh=new he,ca=new he,Py=new Qn,Fy=new mu;class Vo{constructor(e=0,n=0,a=0,r=Vo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,l=r[0],c=r[4],f=r[8],p=r[1],d=r[5],_=r[9],v=r[2],g=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Vt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,x),this._y=0);break;default:_t("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Py.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Py,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fy.setFromEuler(this),this.setFromQuaternion(Fy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vo.DEFAULT_ORDER="XYZ";class SE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oR=0;const Iy=new he,Cl=new mu,Hr=new Qn,ch=new he,sc=new he,lR=new he,uR=new mu,zy=new he(1,0,0),By=new he(0,1,0),Hy=new he(0,0,1),Gy={type:"added"},cR={type:"removed"},wl={type:"childadded",child:null},Zm={type:"childremoved",child:null};class Sa extends qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=Zc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sa.DEFAULT_UP.clone();const e=new he,n=new Vo,a=new mu,r=new he(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qn},normalMatrix:{value:new vt}}),this.matrix=new Qn,this.matrixWorld=new Qn,this.matrixAutoUpdate=Sa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new SE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cl.setFromAxisAngle(e,n),this.quaternion.multiply(Cl),this}rotateOnWorldAxis(e,n){return Cl.setFromAxisAngle(e,n),this.quaternion.premultiply(Cl),this}rotateX(e){return this.rotateOnAxis(zy,e)}rotateY(e){return this.rotateOnAxis(By,e)}rotateZ(e){return this.rotateOnAxis(Hy,e)}translateOnAxis(e,n){return Iy.copy(e).applyQuaternion(this.quaternion),this.position.add(Iy.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zy,e)}translateY(e){return this.translateOnAxis(By,e)}translateZ(e){return this.translateOnAxis(Hy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hr.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?ch.copy(e):ch.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),sc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hr.lookAt(sc,ch,this.up):Hr.lookAt(ch,sc,this.up),this.quaternion.setFromRotationMatrix(Hr),r&&(Hr.extractRotation(r.matrixWorld),Cl.setFromRotationMatrix(Hr),this.quaternion.premultiply(Cl.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gy),wl.child=e,this.dispatchEvent(wl),wl.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cR),Zm.child=e,this.dispatchEvent(Zm),Zm.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gy),wl.child=e,this.dispatchEvent(wl),wl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const c=this.children[a].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sc,e,lR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sc,uR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,r=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*a-l[8]*r,l[13]+=a-l[1]*n-l[5]*a-l[9]*r,l[14]+=r-l[2]*n-l[6]*a-l[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const v=p[d];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(e.materials,this.material[p]));r.material=f}else r.material=l(e.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(l(e.animations,p))}}if(n){const f=c(e.geometries),p=c(e.materials),d=c(e.textures),_=c(e.images),v=c(e.shapes),g=c(e.skeletons),x=c(e.animations),M=c(e.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=r,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}Sa.DEFAULT_UP=new he(0,1,0);Sa.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fh extends Sa{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fR={type:"move"};class Km{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fh,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fh,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fh,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,a),S=this._getHandJoint(d,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,M=.005;d.inputState.pinching&&g>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(fR)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new fh;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const yE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},hh={h:0,s:0,l:0};function Qm(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Jt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=Gt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Gt.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=Gt.workingColorSpace){if(e=$A(e,1),n=Vt(n,0,1),a=Vt(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=Qm(c,l,e+1/3),this.g=Qm(c,l,e),this.b=Qm(c,l,e-1/3)}return Gt.colorSpaceToWorking(this,r),this}setStyle(e,n=Pa){function a(l){l!==void 0&&parseFloat(l)<1&&_t("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=r[1],f=r[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:_t("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=r[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);_t("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pa){const a=yE[e.toLowerCase()];return a!==void 0?this.setHex(a,n):_t("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=Jl(e.r),this.g=Jl(e.g),this.b=Jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pa){return Gt.workingToColorSpace(Ei.copy(this),e),Math.round(Vt(Ei.r*255,0,255))*65536+Math.round(Vt(Ei.g*255,0,255))*256+Math.round(Vt(Ei.b*255,0,255))}getHexString(e=Pa){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Gt.workingColorSpace){Gt.workingToColorSpace(Ei.copy(this),n);const a=Ei.r,r=Ei.g,l=Ei.b,c=Math.max(a,r,l),f=Math.min(a,r,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const v=c-f;switch(d=_<=.5?v/(c+f):v/(2-c-f),c){case a:p=(r-l)/v+(r<l?6:0);break;case r:p=(l-a)/v+2;break;case l:p=(a-r)/v+4;break}p/=6}return e.h=p,e.s=d,e.l=_,e}getRGB(e,n=Gt.workingColorSpace){return Gt.workingToColorSpace(Ei.copy(this),n),e.r=Ei.r,e.g=Ei.g,e.b=Ei.b,e}getStyle(e=Pa){Gt.workingToColorSpace(Ei.copy(this),e);const n=Ei.r,a=Ei.g,r=Ei.b;return e!==Pa?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+n,Us.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Us),e.getHSL(hh);const a=km(Us.h,hh.h,n),r=km(Us.s,hh.s,n),l=km(Us.l,hh.l,n);return this.setHSL(a,r,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,l=e.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ei=new Jt;Jt.NAMES=yE;class hR extends Sa{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vo,this.environmentIntensity=1,this.environmentRotation=new Vo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Za=new he,Gr=new he,Jm=new he,Vr=new he,Dl=new he,Ul=new he,Vy=new he,$m=new he,jm=new he,e_=new he,t_=new In,n_=new In,i_=new In;class $a{constructor(e=new he,n=new he,a=new he){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Za.subVectors(e,n),r.cross(Za);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(e,n,a,r,l){Za.subVectors(r,n),Gr.subVectors(a,n),Jm.subVectors(e,n);const c=Za.dot(Za),f=Za.dot(Gr),p=Za.dot(Jm),d=Gr.dot(Gr),_=Gr.dot(Jm),v=c*d-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,x=(d*p-f*_)*g,M=(c*_-f*p)*g;return l.set(1-x-M,M,x)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,Vr)===null?!1:Vr.x>=0&&Vr.y>=0&&Vr.x+Vr.y<=1}static getInterpolation(e,n,a,r,l,c,f,p){return this.getBarycoord(e,n,a,r,Vr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Vr.x),p.addScaledVector(c,Vr.y),p.addScaledVector(f,Vr.z),p)}static getInterpolatedAttribute(e,n,a,r,l,c){return t_.setScalar(0),n_.setScalar(0),i_.setScalar(0),t_.fromBufferAttribute(e,n),n_.fromBufferAttribute(e,a),i_.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(t_,l.x),c.addScaledVector(n_,l.y),c.addScaledVector(i_,l.z),c}static isFrontFacing(e,n,a,r){return Za.subVectors(a,n),Gr.subVectors(e,n),Za.cross(Gr).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Za.subVectors(this.c,this.b),Gr.subVectors(this.a,this.b),Za.cross(Gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $a.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,l){return $a.getInterpolation(e,this.a,this.b,this.c,n,a,r,l)}containsPoint(e){return $a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,l=this.c;let c,f;Dl.subVectors(r,a),Ul.subVectors(l,a),$m.subVectors(e,a);const p=Dl.dot($m),d=Ul.dot($m);if(p<=0&&d<=0)return n.copy(a);jm.subVectors(e,r);const _=Dl.dot(jm),v=Ul.dot(jm);if(_>=0&&v<=_)return n.copy(r);const g=p*v-_*d;if(g<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(Dl,c);e_.subVectors(e,l);const x=Dl.dot(e_),M=Ul.dot(e_);if(M>=0&&x<=M)return n.copy(l);const T=x*d-p*M;if(T<=0&&d>=0&&M<=0)return f=d/(d-M),n.copy(a).addScaledVector(Ul,f);const y=_*M-x*v;if(y<=0&&v-_>=0&&x-M>=0)return Vy.subVectors(l,r),f=(v-_)/(v-_+(x-M)),n.copy(r).addScaledVector(Vy,f);const S=1/(y+T+g);return c=T*S,f=g*S,n.copy(a).addScaledVector(Dl,c).addScaledVector(Ul,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Kc{constructor(e=new he(1/0,1/0,1/0),n=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Ka.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Ka.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Ka.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Ka):Ka.fromBufferAttribute(l,c),Ka.applyMatrix4(e.matrixWorld),this.expandByPoint(Ka);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dh.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),dh.copy(a.boundingBox)),dh.applyMatrix4(e.matrixWorld),this.union(dh)}const r=e.children;for(let l=0,c=r.length;l<c;l++)this.expandByObject(r[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ka),Ka.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oc),ph.subVectors(this.max,oc),Nl.subVectors(e.a,oc),Ll.subVectors(e.b,oc),Ol.subVectors(e.c,oc),Ns.subVectors(Ll,Nl),Ls.subVectors(Ol,Ll),go.subVectors(Nl,Ol);let n=[0,-Ns.z,Ns.y,0,-Ls.z,Ls.y,0,-go.z,go.y,Ns.z,0,-Ns.x,Ls.z,0,-Ls.x,go.z,0,-go.x,-Ns.y,Ns.x,0,-Ls.y,Ls.x,0,-go.y,go.x,0];return!a_(n,Nl,Ll,Ol,ph)||(n=[1,0,0,0,1,0,0,0,1],!a_(n,Nl,Ll,Ol,ph))?!1:(mh.crossVectors(Ns,Ls),n=[mh.x,mh.y,mh.z],a_(n,Nl,Ll,Ol,ph))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ka).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ka).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kr=[new he,new he,new he,new he,new he,new he,new he,new he],Ka=new he,dh=new Kc,Nl=new he,Ll=new he,Ol=new he,Ns=new he,Ls=new he,go=new he,oc=new he,ph=new he,mh=new he,vo=new he;function a_(o,e,n,a,r){for(let l=0,c=o.length-3;l<=c;l+=3){vo.fromArray(o,l);const f=r.x*Math.abs(vo.x)+r.y*Math.abs(vo.y)+r.z*Math.abs(vo.z),p=e.dot(vo),d=n.dot(vo),_=a.dot(vo);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const Yn=new he,_h=new Wt;let dR=0;class vr extends qo{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Cy,this.updateRanges=[],this.gpuType=hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)_h.fromBufferAttribute(this,n),_h.applyMatrix3(e),this.setXY(n,_h.x,_h.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Yn.fromBufferAttribute(this,n),Yn.applyMatrix3(e),this.setXYZ(n,Yn.x,Yn.y,Yn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Yn.fromBufferAttribute(this,n),Yn.applyMatrix4(e),this.setXYZ(n,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Yn.fromBufferAttribute(this,n),Yn.applyNormalMatrix(e),this.setXYZ(n,Yn.x,Yn.y,Yn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Yn.fromBufferAttribute(this,n),Yn.transformDirection(e),this.setXYZ(n,Yn.x,Yn.y,Yn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=rc(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=qi(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=rc(n,this.array)),n}setX(e,n){return this.normalized&&(n=qi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=rc(n,this.array)),n}setY(e,n){return this.normalized&&(n=qi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=rc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=rc(n,this.array)),n}setW(e,n){return this.normalized&&(n=qi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=qi(n,this.array),a=qi(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=qi(n,this.array),a=qi(a,this.array),r=qi(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,l){return e*=this.itemSize,this.normalized&&(n=qi(n,this.array),a=qi(a,this.array),r=qi(r,this.array),l=qi(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cy&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ME extends vr{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class EE extends vr{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class jr extends vr{constructor(e,n,a){super(new Float32Array(e),n,a)}}const pR=new Kc,lc=new he,r_=new he;class ig{constructor(e=new he,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):pR.setFromPoints(e).getCenter(a);let r=0;for(let l=0,c=e.length;l<c;l++)r=Math.max(r,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lc.subVectors(e,this.center);const n=lc.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(lc,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(r_.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lc.copy(e.center).add(r_)),this.expandByPoint(lc.copy(e.center).sub(r_))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mR=0;const La=new Qn,s_=new Sa,Pl=new he,fa=new Kc,uc=new Kc,oi=new he;class rs extends qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=Zc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ZA(e)?EE:ME)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new vt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return La.makeRotationFromQuaternion(e),this.applyMatrix4(La),this}rotateX(e){return La.makeRotationX(e),this.applyMatrix4(La),this}rotateY(e){return La.makeRotationY(e),this.applyMatrix4(La),this}rotateZ(e){return La.makeRotationZ(e),this.applyMatrix4(La),this}translate(e,n,a){return La.makeTranslation(e,n,a),this.applyMatrix4(La),this}scale(e,n,a){return La.makeScale(e,n,a),this.applyMatrix4(La),this}lookAt(e){return s_.lookAt(e),s_.updateMatrix(),this.applyMatrix4(s_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pl).negate(),this.translate(Pl.x,Pl.y,Pl.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new jr(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&_t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];fa.setFromBufferAttribute(l),this.morphTargetsRelative?(oi.addVectors(this.boundingBox.min,fa.min),this.boundingBox.expandByPoint(oi),oi.addVectors(this.boundingBox.max,fa.max),this.boundingBox.expandByPoint(oi)):(this.boundingBox.expandByPoint(fa.min),this.boundingBox.expandByPoint(fa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ig);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const a=this.boundingSphere.center;if(fa.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];uc.setFromBufferAttribute(f),this.morphTargetsRelative?(oi.addVectors(fa.min,uc.min),fa.expandByPoint(oi),oi.addVectors(fa.max,uc.max),fa.expandByPoint(oi)):(fa.expandByPoint(uc.min),fa.expandByPoint(uc.max))}fa.getCenter(a);let r=0;for(let l=0,c=e.count;l<c;l++)oi.fromBufferAttribute(e,l),r=Math.max(r,a.distanceToSquared(oi));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)oi.fromBufferAttribute(f,d),p&&(Pl.fromBufferAttribute(e,d),oi.add(Pl)),r=Math.max(r,a.distanceToSquared(oi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==a.count)&&(c=new vr(new Float32Array(4*a.count),4),this.setAttribute("tangent",c));const f=[],p=[];for(let b=0;b<a.count;b++)f[b]=new he,p[b]=new he;const d=new he,_=new he,v=new he,g=new Wt,x=new Wt,M=new Wt,T=new he,y=new he;function S(b,D,z){d.fromBufferAttribute(a,b),_.fromBufferAttribute(a,D),v.fromBufferAttribute(a,z),g.fromBufferAttribute(l,b),x.fromBufferAttribute(l,D),M.fromBufferAttribute(l,z),_.sub(d),v.sub(d),x.sub(g),M.sub(g);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(T.copy(_).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(k),y.copy(v).multiplyScalar(x.x).addScaledVector(_,-M.x).multiplyScalar(k),f[b].add(T),f[D].add(T),f[z].add(T),p[b].add(y),p[D].add(y),p[z].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let b=0,D=U.length;b<D;++b){const z=U[b],k=z.start,B=z.count;for(let ee=k,j=k+B;ee<j;ee+=3)S(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const O=new he,R=new he,N=new he,w=new he;function C(b){N.fromBufferAttribute(r,b),w.copy(N);const D=f[b];O.copy(D),O.sub(N.multiplyScalar(N.dot(D))).normalize(),R.crossVectors(w,D);const k=R.dot(p[b])<0?-1:1;c.setXYZW(b,O.x,O.y,O.z,k)}for(let b=0,D=U.length;b<D;++b){const z=U[b],k=z.start,B=z.count;for(let ee=k,j=k+B;ee<j;ee+=3)C(e.getX(ee+0)),C(e.getX(ee+1)),C(e.getX(ee+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new vr(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,x=a.count;g<x;g++)a.setXYZ(g,0,0,0);const r=new he,l=new he,c=new he,f=new he,p=new he,d=new he,_=new he,v=new he;if(e)for(let g=0,x=e.count;g<x;g+=3){const M=e.getX(g+0),T=e.getX(g+1),y=e.getX(g+2);r.fromBufferAttribute(n,M),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,y),_.subVectors(c,l),v.subVectors(r,l),_.cross(v),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,T),d.fromBufferAttribute(a,y),f.add(_),p.add(_),d.add(_),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,x=n.count;g<x;g+=3)r.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),_.subVectors(c,l),v.subVectors(r,l),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)oi.fromBufferAttribute(e,n),oi.normalize(),e.setXYZ(n,oi.x,oi.y,oi.z)}toNonIndexed(){function e(f,p){const d=f.array,_=f.itemSize,v=f.normalized,g=new d.constructor(p.length*_);let x=0,M=0;for(let T=0,y=p.length;T<y;T++){f.isInterleavedBufferAttribute?x=p[T]*f.data.stride+f.offset:x=p[T]*_;for(let S=0;S<_;S++)g[M++]=d[x++]}return new vr(g,_,v)}if(this.index===null)return _t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rs,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],d=e(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,v=d.length;_<v;_++){const g=d[_],x=e(g,a);p.push(x)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const r={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let v=0,g=d.length;v<g;v++){const x=d[v];_.push(x.toJSON(e.data))}_.length>0&&(r[p]=_,l=!0)}l&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const d in r){const _=r[d];this.setAttribute(d,_.clone(n))}const l=e.morphAttributes;for(const d in l){const _=[],v=l[d];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,_=c.length;d<_;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _R=0;class Td extends qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_R++}),this.uuid=Zc(),this.name="",this.type="Material",this.blending=Kl,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=N_,this.blendDst=L_,this.blendEquation=Ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ru,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ry,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bl,this.stencilZFail=bl,this.stencilZPass=bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){_t(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){_t(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector2&&a&&a.isVector2||r&&r.isEuler&&a&&a.isEuler||r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Kl&&(a.blending=this.blending),this.side!==Ys&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==N_&&(a.blendSrc=this.blendSrc),this.blendDst!==L_&&(a.blendDst=this.blendDst),this.blendEquation!==Ro&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==ru&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ry&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bl&&(a.stencilFail=this.stencilFail),this.stencilZFail!==bl&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==bl&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=r(e.textures),c=r(e.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Wt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xr=new he,o_=new he,gh=new he,Os=new he,l_=new he,vh=new he,u_=new he;class gR{constructor(e=new he,n=new he(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xr.copy(this.origin).addScaledVector(this.direction,n),Xr.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){o_.copy(e).add(n).multiplyScalar(.5),gh.copy(n).sub(e).normalize(),Os.copy(this.origin).sub(o_);const l=e.distanceTo(n)*.5,c=-this.direction.dot(gh),f=Os.dot(this.direction),p=-Os.dot(gh),d=Os.lengthSq(),_=Math.abs(1-c*c);let v,g,x,M;if(_>0)if(v=c*p-f,g=c*f-p,M=l*_,v>=0)if(g>=-M)if(g<=M){const T=1/_;v*=T,g*=T,x=v*(v+c*g+2*f)+g*(c*v+g+2*p)+d}else g=l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*p)+d;else g=-l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*p)+d;else g<=-M?(v=Math.max(0,-(-c*l+f)),g=v>0?-l:Math.min(Math.max(-l,-p),l),x=-v*v+g*(g+2*p)+d):g<=M?(v=0,g=Math.min(Math.max(-l,-p),l),x=g*(g+2*p)+d):(v=Math.max(0,-(c*l+f)),g=v>0?l:Math.min(Math.max(-l,-p),l),x=-v*v+g*(g+2*p)+d);else g=c>0?-l:l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(o_).addScaledVector(gh,g),x}intersectSphere(e,n){Xr.subVectors(e.center,this.origin);const a=Xr.dot(this.direction),r=Xr.dot(Xr)-a*a,l=e.radius*e.radius;if(r>l)return null;const c=Math.sqrt(l-r),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(a=(e.min.x-g.x)*d,r=(e.max.x-g.x)*d):(a=(e.max.x-g.x)*d,r=(e.min.x-g.x)*d),_>=0?(l=(e.min.y-g.y)*_,c=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,c=(e.min.y-g.y)*_),a>c||l>r||((l>a||isNaN(a))&&(a=l),(c<r||isNaN(r))&&(r=c),v>=0?(f=(e.min.z-g.z)*v,p=(e.max.z-g.z)*v):(f=(e.max.z-g.z)*v,p=(e.min.z-g.z)*v),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,Xr)!==null}intersectTriangle(e,n,a,r,l){l_.subVectors(n,e),vh.subVectors(a,e),u_.crossVectors(l_,vh);let c=this.direction.dot(u_),f;if(c>0){if(r)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Os.subVectors(this.origin,e);const p=f*this.direction.dot(vh.crossVectors(Os,vh));if(p<0)return null;const d=f*this.direction.dot(l_.cross(Os));if(d<0||p+d>c)return null;const _=-f*Os.dot(u_);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class TE extends Td{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vo,this.combine=nE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ky=new Qn,xo=new gR,xh=new ig,Xy=new he,Sh=new he,yh=new he,Mh=new he,c_=new he,Eh=new he,Wy=new he,Th=new he;class yr extends Sa{constructor(e=new rs,n=new TE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const f=this.morphTargetInfluences;if(l&&f){Eh.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],v=l[p];_!==0&&(c_.fromBufferAttribute(v,e),c?Eh.addScaledVector(c_,_):Eh.addScaledVector(c_.sub(n),_))}n.add(Eh)}return n}raycast(e,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),xh.copy(a.boundingSphere),xh.applyMatrix4(l),xo.copy(e.ray).recast(e.near),!(xh.containsPoint(xo.origin)===!1&&(xo.intersectSphere(xh,Xy)===null||xo.origin.distanceToSquared(Xy)>(e.far-e.near)**2))&&(ky.copy(l).invert(),xo.copy(e.ray).applyMatrix4(ky),!(a.boundingBox!==null&&xo.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,xo)))}_computeIntersections(e,n,a){let r;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,g=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const y=g[M],S=c[y.materialIndex],U=Math.max(y.start,x.start),O=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let R=U,N=O;R<N;R+=3){const w=f.getX(R),C=f.getX(R+1),b=f.getX(R+2);r=bh(this,S,e,a,d,_,v,w,C,b),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const M=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let y=M,S=T;y<S;y+=3){const U=f.getX(y),O=f.getX(y+1),R=f.getX(y+2);r=bh(this,c,e,a,d,_,v,U,O,R),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const y=g[M],S=c[y.materialIndex],U=Math.max(y.start,x.start),O=Math.min(p.count,Math.min(y.start+y.count,x.start+x.count));for(let R=U,N=O;R<N;R+=3){const w=R,C=R+1,b=R+2;r=bh(this,S,e,a,d,_,v,w,C,b),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const M=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let y=M,S=T;y<S;y+=3){const U=y,O=y+1,R=y+2;r=bh(this,c,e,a,d,_,v,U,O,R),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}}}function vR(o,e,n,a,r,l,c,f){let p;if(e.side===Ki?p=a.intersectTriangle(c,l,r,!0,f):p=a.intersectTriangle(r,l,c,e.side===Ys,f),p===null)return null;Th.copy(f),Th.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Th);return d<n.near||d>n.far?null:{distance:d,point:Th.clone(),object:o}}function bh(o,e,n,a,r,l,c,f,p,d){o.getVertexPosition(f,Sh),o.getVertexPosition(p,yh),o.getVertexPosition(d,Mh);const _=vR(o,e,n,a,Sh,yh,Mh,Wy);if(_){const v=new he;$a.getBarycoord(Wy,Sh,yh,Mh,v),r&&(_.uv=$a.getInterpolatedAttribute(r,f,p,d,v,new Wt)),l&&(_.uv1=$a.getInterpolatedAttribute(l,f,p,d,v,new Wt)),c&&(_.normal=$a.getInterpolatedAttribute(c,f,p,d,v,new he),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:p,c:d,normal:new he,materialIndex:0};$a.getNormal(Sh,yh,Mh,g.normal),_.face=g,_.barycoord=v}return _}class xR extends Bi{constructor(e=null,n=1,a=1,r,l,c,f,p,d=gi,_=gi,v,g){super(null,c,f,p,d,_,r,l,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const f_=new he,SR=new he,yR=new vt;class Eo{constructor(e=new he(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=f_.subVectors(a,n).cross(SR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const r=e.delta(f_),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return a===!0&&(c<0||c>1)?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||yR.getNormalMatrix(e),r=this.coplanarPoint(f_).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const So=new ig,MR=new Wt(.5,.5),Ah=new he;class bE{constructor(e=new Eo,n=new Eo,a=new Eo,r=new Eo,l=new Eo,c=new Eo){this.planes=[e,n,a,r,l,c]}set(e,n,a,r,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=dr,a=!1){const r=this.planes,l=e.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],v=l[5],g=l[6],x=l[7],M=l[8],T=l[9],y=l[10],S=l[11],U=l[12],O=l[13],R=l[14],N=l[15];if(r[0].setComponents(d-c,x-_,S-M,N-U).normalize(),r[1].setComponents(d+c,x+_,S+M,N+U).normalize(),r[2].setComponents(d+f,x+v,S+T,N+O).normalize(),r[3].setComponents(d-f,x-v,S-T,N-O).normalize(),a)r[4].setComponents(p,g,y,R).normalize(),r[5].setComponents(d-p,x-g,S-y,N-R).normalize();else if(r[4].setComponents(d-p,x-g,S-y,N-R).normalize(),n===dr)r[5].setComponents(d+p,x+g,S+y,N+R).normalize();else if(n===ud)r[5].setComponents(p,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),So.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(So)}intersectsSprite(e){So.center.set(0,0,0);const n=MR.distanceTo(e.center);return So.radius=.7071067811865476+n,So.applyMatrix4(e.matrixWorld),this.intersectsSphere(So)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Ah.x=r.normal.x>0?e.max.x:e.min.x,Ah.y=r.normal.y>0?e.max.y:e.min.y,Ah.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ah)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class AE extends Bi{constructor(e=[],n=Ho,a,r,l,c,f,p,d,_){super(e,n,a,r,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ou extends Bi{constructor(e,n,a=Sr,r,l,c,f=gi,p=gi,d,_=ns,v=1){if(_!==ns&&_!==Do)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,r,l,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ng(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ER extends ou{constructor(e,n=Sr,a=Ho,r,l,c=gi,f=gi,p,d=ns){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,a,r,l,c,f,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class RE extends Bi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qc extends rs{constructor(e=1,n=1,a=1,r=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:c};const f=this;r=Math.floor(r),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],v=[];let g=0,x=0;M("z","y","x",-1,-1,a,n,e,c,l,0),M("z","y","x",1,-1,a,n,-e,c,l,1),M("x","z","y",1,1,e,a,n,r,c,2),M("x","z","y",1,-1,e,a,-n,r,c,3),M("x","y","z",1,-1,e,n,a,r,l,4),M("x","y","z",-1,-1,e,n,-a,r,l,5),this.setIndex(p),this.setAttribute("position",new jr(d,3)),this.setAttribute("normal",new jr(_,3)),this.setAttribute("uv",new jr(v,2));function M(T,y,S,U,O,R,N,w,C,b,D){const z=R/C,k=N/b,B=R/2,ee=N/2,j=w/2,q=C+1,I=b+1;let G=0,Y=0;const se=new he;for(let V=0;V<I;V++){const F=V*k-ee;for(let K=0;K<q;K++){const Se=K*z-B;se[T]=Se*U,se[y]=F*O,se[S]=j,d.push(se.x,se.y,se.z),se[T]=0,se[y]=0,se[S]=w>0?1:-1,_.push(se.x,se.y,se.z),v.push(K/C),v.push(1-V/b),G+=1}}for(let V=0;V<b;V++)for(let F=0;F<C;F++){const K=g+F+q*V,Se=g+F+q*(V+1),ge=g+(F+1)+q*(V+1),Ne=g+(F+1)+q*V;p.push(K,Se,Ne),p.push(Se,ge,Ne),Y+=6}f.addGroup(x,Y,D),x+=Y,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jc extends rs{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const l=e/2,c=n/2,f=Math.floor(a),p=Math.floor(r),d=f+1,_=p+1,v=e/f,g=n/p,x=[],M=[],T=[],y=[];for(let S=0;S<_;S++){const U=S*g-c;for(let O=0;O<d;O++){const R=O*v-l;M.push(R,-U,0),T.push(0,0,1),y.push(O/f),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let U=0;U<f;U++){const O=U+d*S,R=U+d*(S+1),N=U+1+d*(S+1),w=U+1+d*S;x.push(O,R,w),x.push(R,N,w)}this.setIndex(x),this.setAttribute("position",new jr(M,3)),this.setAttribute("normal",new jr(T,3)),this.setAttribute("uv",new jr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.width,e.height,e.widthSegments,e.heightSegments)}}function lu(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];if(qy(r))r.isRenderTargetTexture?(_t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone();else if(Array.isArray(r))if(qy(r[0])){const l=[];for(let c=0,f=r.length;c<f;c++)l[c]=r[c].clone();e[n][a]=l}else e[n][a]=r.slice();else e[n][a]=r}}return e}function Oi(o){const e={};for(let n=0;n<o.length;n++){const a=lu(o[n]);for(const r in a)e[r]=a[r]}return e}function qy(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function TR(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function CE(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const bR={clone:lu,merge:Oi};var AR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Td{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AR,this.fragmentShader=RR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lu(e.uniforms),this.uniformsGroups=TR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?n.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[r]={type:"m4",value:c.toArray()}:n.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const r=e.uniforms[a];switch(this.uniforms[a]={},r.type){case"t":this.uniforms[a].value=n[r.value]||null;break;case"c":this.uniforms[a].value=new Jt().setHex(r.value);break;case"v2":this.uniforms[a].value=new Wt().fromArray(r.value);break;case"v3":this.uniforms[a].value=new he().fromArray(r.value);break;case"v4":this.uniforms[a].value=new In().fromArray(r.value);break;case"m3":this.uniforms[a].value=new vt().fromArray(r.value);break;case"m4":this.uniforms[a].value=new Qn().fromArray(r.value);break;default:this.uniforms[a].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class CR extends er{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wR extends Td{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DR extends Td{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rh=new he,Ch=new mu,sr=new he;class wE extends Sa{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qn,this.projectionMatrix=new Qn,this.projectionMatrixInverse=new Qn,this.coordinateSystem=dr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rh,Ch,sr),sr.x===1&&sr.y===1&&sr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rh,Ch,sr.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(Rh,Ch,sr),sr.x===1&&sr.y===1&&sr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rh,Ch,sr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ps=new he,Yy=new Wt,Zy=new Wt;class Ja extends wE{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=x0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return x0*2*Math.atan(Math.tan(Vm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z)}getViewSize(e,n){return this.getViewBounds(e,Yy,Zy),n.subVectors(Zy,Yy)}setViewOffset(e,n,a,r,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vm*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*r/p,n-=c.offsetY*a/d,r*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ag extends wE{constructor(e=-1,n=1,a=1,r=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-e,c=a+e,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fl=-90,Il=1;class UR extends Sa{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ja(Fl,Il,e,n);r.layers=this.layers,this.add(r);const l=new Ja(Fl,Il,e,n);l.layers=this.layers,this.add(l);const c=new Ja(Fl,Il,e,n);c.layers=this.layers,this.add(c);const f=new Ja(Fl,Il,e,n);f.layers=this.layers,this.add(f);const p=new Ja(Fl,Il,e,n);p.layers=this.layers,this.add(p);const d=new Ja(Fl,Il,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,l,c,f,p]=n;for(const d of n)this.remove(d);if(e===dr)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ud)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(a,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(a,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(a,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,x),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class NR extends Ja{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Pg=class Pg{constructor(e,n,a,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,r){const l=this.elements;return l[0]=e,l[2]=n,l[1]=a,l[3]=r,this}};Pg.prototype.isMatrix2=!0;let Ky=Pg;function Qy(o,e,n,a){const r=LR(a);switch(n){case mE:return o*e;case gE:return o*e/r.components*r.byteLength;case J0:return o*e/r.components*r.byteLength;case Go:return o*e*2/r.components*r.byteLength;case $0:return o*e*2/r.components*r.byteLength;case _E:return o*e*3/r.components*r.byteLength;case ja:return o*e*4/r.components*r.byteLength;case j0:return o*e*4/r.components*r.byteLength;case Wh:case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Yh:case Zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case X_:case q_:return Math.max(o,16)*Math.max(e,8)/4;case k_:case W_:return Math.max(o,8)*Math.max(e,8)/2;case Y_:case Z_:case Q_:case J_:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case K_:case rd:case $_:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case j_:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case e0:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case t0:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case n0:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case i0:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case a0:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case r0:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case s0:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case o0:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case l0:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case u0:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case c0:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case f0:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case h0:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case d0:case p0:case m0:return Math.ceil(o/4)*Math.ceil(e/4)*16;case _0:case g0:return Math.ceil(o/4)*Math.ceil(e/4)*8;case sd:case v0:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LR(o){switch(o){case za:case fE:return{byteLength:1,components:1};case Fc:case hE:case ts:return{byteLength:2,components:1};case K0:case Q0:return{byteLength:2,components:4};case Sr:case Z0:case hr:return{byteLength:4,components:1};case dE:case pE:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Y0}}));typeof window<"u"&&(window.__THREE__?_t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Y0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function DE(){let o=null,e=!1,n=null,a=null;function r(l,c){n(l,c),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&o!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function OR(o){const e=new WeakMap;function n(f,p){const d=f.array,_=f.usage,v=d.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,d,_),f.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,p,d){const _=p.array,v=p.updateRanges;if(o.bindBuffer(d,f),v.length===0)o.bufferSubData(d,0,_);else{v.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<v.length;x++){const M=v[g],T=v[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++g,v[g]=T)}v.length=g+1;for(let x=0,M=v.length;x<M;x++){const T=v[x];o.bufferSubData(d,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(o.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:r,remove:l,update:c}}var PR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FR=`#ifdef USE_ALPHAHASH
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
#endif`,IR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GR=`#ifdef USE_AOMAP
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
#endif`,VR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kR=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,XR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZR=`#ifdef USE_IRIDESCENCE
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
#endif`,KR=`#ifdef USE_BUMPMAP
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
#endif`,QR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,aC=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,rC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sC=`vec3 transformedNormal = objectNormal;
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
#endif`,oC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fC="gl_FragColor = linearToOutputTexel( gl_FragColor );",hC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mC=`#ifdef USE_ENVMAP
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
#endif`,_C=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MC=`#ifdef USE_GRADIENTMAP
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
}`,EC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AC=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,RC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,CC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NC=`PhysicalMaterial material;
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
#endif`,LC=`uniform sampler2D dfgLUT;
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
		return 0.5 / max( gv + gl, EPSILON );
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
}`,OC=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,FC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WC=`#if defined( USE_POINTS_UV )
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
#endif`,qC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JC=`#ifdef USE_MORPHTARGETS
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
#endif`,$C=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a2=`#ifdef USE_NORMALMAP
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
#endif`,r2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,f2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,v2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,S2=`float getShadowMask() {
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
}`,y2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M2=`#ifdef USE_SKINNING
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
#endif`,E2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T2=`#ifdef USE_SKINNING
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
#endif`,b2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w2=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D2=`#ifdef USE_TRANSMISSION
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
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F2=`uniform sampler2D t2D;
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
}`,I2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G2=`#include <common>
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
}`,V2=`#if DEPTH_PACKING == 3200
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
}`,k2=`#define DISTANCE
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
}`,X2=`#define DISTANCE
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
void main() {
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
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`uniform float scale;
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
}`,Z2=`uniform vec3 diffuse;
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
}`,K2=`#include <common>
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
}`,Q2=`uniform vec3 diffuse;
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
}`,J2=`#define LAMBERT
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
}`,$2=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,j2=`#define MATCAP
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
}`,e3=`#define MATCAP
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
}`,t3=`#define NORMAL
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
}`,n3=`#define NORMAL
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
}`,i3=`#define PHONG
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
}`,a3=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,r3=`#define STANDARD
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
}`,s3=`#define STANDARD
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
}`,o3=`#define TOON
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
}`,l3=`#define TOON
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
}`,u3=`uniform float size;
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
}`,c3=`uniform vec3 diffuse;
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
}`,f3=`#include <common>
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
}`,h3=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,d3=`uniform float rotation;
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
}`,p3=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:PR,alphahash_pars_fragment:FR,alphamap_fragment:IR,alphamap_pars_fragment:zR,alphatest_fragment:BR,alphatest_pars_fragment:HR,aomap_fragment:GR,aomap_pars_fragment:VR,batching_pars_vertex:kR,batching_vertex:XR,begin_vertex:WR,beginnormal_vertex:qR,bsdfs:YR,iridescence_fragment:ZR,bumpmap_pars_fragment:KR,clipping_planes_fragment:QR,clipping_planes_pars_fragment:JR,clipping_planes_pars_vertex:$R,clipping_planes_vertex:jR,color_fragment:eC,color_pars_fragment:tC,color_pars_vertex:nC,color_vertex:iC,common:aC,cube_uv_reflection_fragment:rC,defaultnormal_vertex:sC,displacementmap_pars_vertex:oC,displacementmap_vertex:lC,emissivemap_fragment:uC,emissivemap_pars_fragment:cC,colorspace_fragment:fC,colorspace_pars_fragment:hC,envmap_fragment:dC,envmap_common_pars_fragment:pC,envmap_pars_fragment:mC,envmap_pars_vertex:_C,envmap_physical_pars_fragment:RC,envmap_vertex:gC,fog_vertex:vC,fog_pars_vertex:xC,fog_fragment:SC,fog_pars_fragment:yC,gradientmap_pars_fragment:MC,lightmap_pars_fragment:EC,lights_lambert_fragment:TC,lights_lambert_pars_fragment:bC,lights_pars_begin:AC,lights_toon_fragment:CC,lights_toon_pars_fragment:wC,lights_phong_fragment:DC,lights_phong_pars_fragment:UC,lights_physical_fragment:NC,lights_physical_pars_fragment:LC,lights_fragment_begin:OC,lights_fragment_maps:PC,lights_fragment_end:FC,lightprobes_pars_fragment:IC,logdepthbuf_fragment:zC,logdepthbuf_pars_fragment:BC,logdepthbuf_pars_vertex:HC,logdepthbuf_vertex:GC,map_fragment:VC,map_pars_fragment:kC,map_particle_fragment:XC,map_particle_pars_fragment:WC,metalnessmap_fragment:qC,metalnessmap_pars_fragment:YC,morphinstance_vertex:ZC,morphcolor_vertex:KC,morphnormal_vertex:QC,morphtarget_pars_vertex:JC,morphtarget_vertex:$C,normal_fragment_begin:jC,normal_fragment_maps:e2,normal_pars_fragment:t2,normal_pars_vertex:n2,normal_vertex:i2,normalmap_pars_fragment:a2,clearcoat_normal_fragment_begin:r2,clearcoat_normal_fragment_maps:s2,clearcoat_pars_fragment:o2,iridescence_pars_fragment:l2,opaque_fragment:u2,packing:c2,premultiplied_alpha_fragment:f2,project_vertex:h2,dithering_fragment:d2,dithering_pars_fragment:p2,roughnessmap_fragment:m2,roughnessmap_pars_fragment:_2,shadowmap_pars_fragment:g2,shadowmap_pars_vertex:v2,shadowmap_vertex:x2,shadowmask_pars_fragment:S2,skinbase_vertex:y2,skinning_pars_vertex:M2,skinning_vertex:E2,skinnormal_vertex:T2,specularmap_fragment:b2,specularmap_pars_fragment:A2,tonemapping_fragment:R2,tonemapping_pars_fragment:C2,transmission_fragment:w2,transmission_pars_fragment:D2,uv_pars_fragment:U2,uv_pars_vertex:N2,uv_vertex:L2,worldpos_vertex:O2,background_vert:P2,background_frag:F2,backgroundCube_vert:I2,backgroundCube_frag:z2,cube_vert:B2,cube_frag:H2,depth_vert:G2,depth_frag:V2,distance_vert:k2,distance_frag:X2,equirect_vert:W2,equirect_frag:q2,linedashed_vert:Y2,linedashed_frag:Z2,meshbasic_vert:K2,meshbasic_frag:Q2,meshlambert_vert:J2,meshlambert_frag:$2,meshmatcap_vert:j2,meshmatcap_frag:e3,meshnormal_vert:t3,meshnormal_frag:n3,meshphong_vert:i3,meshphong_frag:a3,meshphysical_vert:r3,meshphysical_frag:s3,meshtoon_vert:o3,meshtoon_frag:l3,points_vert:u3,points_frag:c3,shadow_vert:f3,shadow_frag:h3,sprite_vert:d3,sprite_frag:p3},qe={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new he},probesMax:{value:new he},probesResolution:{value:new he}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},cr={basic:{uniforms:Oi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Oi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Oi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Oi([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Oi([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Oi([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Oi([qe.points,qe.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Oi([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Oi([qe.common,qe.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Oi([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Oi([qe.sprite,qe.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Oi([qe.common,qe.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Oi([qe.lights,qe.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};cr.physical={uniforms:Oi([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const wh={r:0,b:0,g:0},m3=new Qn,UE=new vt;UE.set(-1,0,0,0,1,0,0,0,1);function _3(o,e,n,a,r,l){const c=new Jt(0);let f=r===!0?0:1,p,d,_=null,v=0,g=null;function x(U){let O=U.isScene===!0?U.background:null;if(O&&O.isTexture){const R=U.backgroundBlurriness>0;O=e.get(O,R)}return O}function M(U){let O=!1;const R=x(U);R===null?y(c,f):R&&R.isColor&&(y(R,1),O=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(o.autoClear||O)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function T(U,O){const R=x(O);R&&(R.isCubeTexture||R.mapping===Ed)?(d===void 0&&(d=new yr(new Qc(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:lu(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(m3.makeRotationFromEuler(O.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(UE),d.material.toneMapped=Gt.getTransfer(R.colorSpace)!==un,(_!==R||v!==R.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,_=R,v=R.version,g=o.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new yr(new Jc(2,2),new er({name:"BackgroundMaterial",uniforms:lu(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Gt.getTransfer(R.colorSpace)!==un,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,g=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,O){U.getRGB(wh,CE(o)),n.buffers.color.setClear(wh.r,wh.g,wh.b,O,l)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(U,O=1){c.set(U),f=O,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,y(c,f)},render:M,addToRenderList:T,dispose:S}}function g3(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=g(null);let l=r,c=!1;function f(k,B,ee,j,q){let I=!1;const G=v(k,j,ee,B);l!==G&&(l=G,d(l.object)),I=x(k,j,ee,q),I&&M(k,j,ee,q),q!==null&&e.update(q,o.ELEMENT_ARRAY_BUFFER),(I||c)&&(c=!1,R(k,B,ee,j),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function p(){return o.createVertexArray()}function d(k){return o.bindVertexArray(k)}function _(k){return o.deleteVertexArray(k)}function v(k,B,ee,j){const q=j.wireframe===!0;let I=a[B.id];I===void 0&&(I={},a[B.id]=I);const G=k.isInstancedMesh===!0?k.id:0;let Y=I[G];Y===void 0&&(Y={},I[G]=Y);let se=Y[ee.id];se===void 0&&(se={},Y[ee.id]=se);let V=se[q];return V===void 0&&(V=g(p()),se[q]=V),V}function g(k){const B=[],ee=[],j=[];for(let q=0;q<n;q++)B[q]=0,ee[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ee,attributeDivisors:j,object:k,attributes:{},index:null}}function x(k,B,ee,j){const q=l.attributes,I=B.attributes;let G=0;const Y=ee.getAttributes();for(const se in Y)if(Y[se].location>=0){const F=q[se];let K=I[se];if(K===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),F===void 0||F.attribute!==K||K&&F.data!==K.data)return!0;G++}return l.attributesNum!==G||l.index!==j}function M(k,B,ee,j){const q={},I=B.attributes;let G=0;const Y=ee.getAttributes();for(const se in Y)if(Y[se].location>=0){let F=I[se];F===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(F=k.instanceColor));const K={};K.attribute=F,F&&F.data&&(K.data=F.data),q[se]=K,G++}l.attributes=q,l.attributesNum=G,l.index=j}function T(){const k=l.newAttributes;for(let B=0,ee=k.length;B<ee;B++)k[B]=0}function y(k){S(k,0)}function S(k,B){const ee=l.newAttributes,j=l.enabledAttributes,q=l.attributeDivisors;ee[k]=1,j[k]===0&&(o.enableVertexAttribArray(k),j[k]=1),q[k]!==B&&(o.vertexAttribDivisor(k,B),q[k]=B)}function U(){const k=l.newAttributes,B=l.enabledAttributes;for(let ee=0,j=B.length;ee<j;ee++)B[ee]!==k[ee]&&(o.disableVertexAttribArray(ee),B[ee]=0)}function O(k,B,ee,j,q,I,G){G===!0?o.vertexAttribIPointer(k,B,ee,q,I):o.vertexAttribPointer(k,B,ee,j,q,I)}function R(k,B,ee,j){T();const q=j.attributes,I=ee.getAttributes(),G=B.defaultAttributeValues;for(const Y in I){const se=I[Y];if(se.location>=0){let V=q[Y];if(V===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),V!==void 0){const F=V.normalized,K=V.itemSize,Se=e.get(V);if(Se===void 0)continue;const ge=Se.buffer,Ne=Se.type,ne=Se.bytesPerElement,ve=Ne===o.INT||Ne===o.UNSIGNED_INT||V.gpuType===Z0;if(V.isInterleavedBufferAttribute){const Me=V.data,Oe=Me.stride,tt=V.offset;if(Me.isInstancedInterleavedBuffer){for(let Ye=0;Ye<se.locationSize;Ye++)S(se.location+Ye,Me.meshPerAttribute);k.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ye=0;Ye<se.locationSize;Ye++)y(se.location+Ye);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Ye=0;Ye<se.locationSize;Ye++)O(se.location+Ye,K/se.locationSize,Ne,F,Oe*ne,(tt+K/se.locationSize*Ye)*ne,ve)}else{if(V.isInstancedBufferAttribute){for(let Me=0;Me<se.locationSize;Me++)S(se.location+Me,V.meshPerAttribute);k.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Me=0;Me<se.locationSize;Me++)y(se.location+Me);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Me=0;Me<se.locationSize;Me++)O(se.location+Me,K/se.locationSize,Ne,F,K*ne,K/se.locationSize*Me*ne,ve)}}else if(G!==void 0){const F=G[Y];if(F!==void 0)switch(F.length){case 2:o.vertexAttrib2fv(se.location,F);break;case 3:o.vertexAttrib3fv(se.location,F);break;case 4:o.vertexAttrib4fv(se.location,F);break;default:o.vertexAttrib1fv(se.location,F)}}}}U()}function N(){D();for(const k in a){const B=a[k];for(const ee in B){const j=B[ee];for(const q in j){const I=j[q];for(const G in I)_(I[G].object),delete I[G];delete j[q]}}delete a[k]}}function w(k){if(a[k.id]===void 0)return;const B=a[k.id];for(const ee in B){const j=B[ee];for(const q in j){const I=j[q];for(const G in I)_(I[G].object),delete I[G];delete j[q]}}delete a[k.id]}function C(k){for(const B in a){const ee=a[B];for(const j in ee){const q=ee[j];if(q[k.id]===void 0)continue;const I=q[k.id];for(const G in I)_(I[G].object),delete I[G];delete q[k.id]}}}function b(k){for(const B in a){const ee=a[B],j=k.isInstancedMesh===!0?k.id:0,q=ee[j];if(q!==void 0){for(const I in q){const G=q[I];for(const Y in G)_(G[Y].object),delete G[Y];delete q[I]}delete ee[j],Object.keys(ee).length===0&&delete a[B]}}}function D(){z(),c=!0,l!==r&&(l=r,d(l.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:D,resetDefaultState:z,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:C,initAttributes:T,enableAttribute:y,disableUnusedAttributes:U}}function v3(o,e,n){let a;function r(p){a=p}function l(p,d){o.drawArrays(a,p,d),n.update(d,a,1)}function c(p,d,_){_!==0&&(o.drawArraysInstanced(a,p,d,_),n.update(d,a,_))}function f(p,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,_);let g=0;for(let x=0;x<_;x++)g+=d[x];n.update(g,a,1)}this.setMode=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function x3(o,e,n,a){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(C){return!(C!==ja&&a.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(C){const b=C===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==za&&a.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hr&&!b)}function p(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(_t("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&_t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),w=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:U,maxVaryings:O,maxFragmentUniforms:R,maxSamples:N,samples:w}}function S3(o){const e=this;let n=null,a=0,r=!1,l=!1;const c=new Eo,f=new vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||a!==0||r;return r=g,a=v.length,x},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,x){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,S=o.get(v);if(!r||M===null||M.length===0||l&&!y)l?_(null):d();else{const U=l?0:a,O=U*4;let R=S.clippingState||null;p.value=R,R=_(M,g,O,x);for(let N=0;N!==O;++N)R[N]=n[N];S.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(v,g,x,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=p.value,M!==!0||y===null){const S=x+T*4,U=g.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<S)&&(y=new Float32Array(S));for(let O=0,R=x;O!==T;++O,R+=4)c.copy(v[O]).applyMatrix4(U,f),c.normal.toArray(y,R),y[R+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const zs=4,Jy=[.125,.215,.35,.446,.526,.582],Co=20,y3=256,cc=new ag,$y=new Jt;let h_=null,d_=0,p_=0,m_=!1;const M3=new he;class jy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,r=100,l={}){const{size:c=256,position:f=M3}=l;h_=this._renderer.getRenderTarget(),d_=this._renderer.getActiveCubeFace(),p_=this._renderer.getActiveMipmapLevel(),m_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(h_,d_,p_),this._renderer.xr.enabled=m_,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ho||e.mapping===su?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),h_=this._renderer.getRenderTarget(),d_=this._renderer.getActiveCubeFace(),p_=this._renderer.getActiveMipmapLevel(),m_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:ts,format:ja,colorSpace:od,depthBuffer:!1},r=eM(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eM(e,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=E3(l)),this._blurMaterial=b3(l,e,n),this._ggxMaterial=T3(l,e,n)}return r}_compileMaterial(e){const n=new yr(new rs,e);this._renderer.compile(n,cc)}_sceneToCubeUV(e,n,a,r,l){const p=new Ja(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor($y),v.toneMapping=_r,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yr(new Qc,new TE({name:"PMREM.Background",side:Ki,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let S=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,S=!0):(y.color.copy($y),S=!0);for(let O=0;O<6;O++){const R=O%3;R===0?(p.up.set(0,d[O],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[O],l.y,l.z)):R===1?(p.up.set(0,0,d[O]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[O],l.z)):(p.up.set(0,d[O],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[O]));const N=this._cubeSize;zl(r,R*N,O>2?N:0,N,N),v.setRenderTarget(r),S&&v.render(T,p),v.render(e,p)}v.toneMapping=x,v.autoClear=g,e.background=U}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===Ho||e.mapping===su;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tM());const l=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;zl(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,cc)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let l=1;l<r;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=a}_applyGGXFilter(e,n,a){const r=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,x=v*g,{_lodMax:M}=this,T=this._sizeLods[a],y=3*T*(a>M-zs?a-M+zs:0),S=4*(this._cubeSize-T);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=M-n,zl(l,y,S,3*T,2*T),r.setRenderTarget(l),r.render(f,cc),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-a,zl(e,y,S,3*T,2*T),r.setRenderTarget(e),r.render(f,cc)}_blur(e,n,a,r,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,a,r,"latitudinal",l),this._halfBlur(c,e,a,a,r,"longitudinal",l)}_halfBlur(e,n,a,r,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Xt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[r];v.material=d;const g=d.uniforms,x=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Co-1),T=l/M,y=isFinite(l)?1+Math.floor(_*T):Co;y>Co&&_t(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Co}`);const S=[];let U=0;for(let C=0;C<Co;++C){const b=C/T,D=Math.exp(-b*b/2);S.push(D),C===0?U+=D:C<y&&(U+=2*D)}for(let C=0;C<S.length;C++)S[C]=S[C]/U;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:O}=this;g.dTheta.value=M,g.mipInt.value=O-a;const R=this._sizeLods[r],N=3*R*(r>O-zs?r-O+zs:0),w=4*(this._cubeSize-R);zl(n,N,w,3*R,2*R),p.setRenderTarget(n),p.render(v,cc)}}function E3(o){const e=[],n=[],a=[];let r=o;const l=o-zs+1+Jy.length;for(let c=0;c<l;c++){const f=Math.pow(2,r);e.push(f);let p=1/f;c>o-zs?p=Jy[c-o+zs-1]:c===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,M=6,T=3,y=2,S=1,U=new Float32Array(T*M*x),O=new Float32Array(y*M*x),R=new Float32Array(S*M*x);for(let w=0;w<x;w++){const C=w%3*2/3-1,b=w>2?0:-1,D=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];U.set(D,T*M*w),O.set(g,y*M*w);const z=[w,w,w,w,w,w];R.set(z,S*M*w)}const N=new rs;N.setAttribute("position",new vr(U,T)),N.setAttribute("uv",new vr(O,y)),N.setAttribute("faceIndex",new vr(R,S)),a.push(new yr(N,null)),r>zs&&r--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function eM(o,e,n){const a=new gr(o,e,n);return a.texture.mapping=Ed,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function zl(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function T3(o,e,n){return new er({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:y3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bd(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function b3(o,e,n){const a=new Float32Array(Co),r=new he(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bd(),fragmentShader:`

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
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function tM(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

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
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function nM(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function bd(){return`

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
	`}class NE extends gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new AE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qc(5,5,5),l=new er({name:"CubemapFromEquirect",uniforms:lu(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Ki,blending:Jr});l.uniforms.tEquirect.value=n;const c=new yr(r,l),f=n.minFilter;return n.minFilter===wo&&(n.minFilter=Ci),new UR(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,a,r);e.setRenderTarget(l)}}function A3(o){let e=new WeakMap,n=new WeakMap,a=null;function r(g,x=!1){return g==null?null:x?c(g):l(g)}function l(g){if(g&&g.isTexture){const x=g.mapping;if(x===Bm||x===Hm)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const T=new NE(M.height);return T.fromEquirectangularTexture(o,g),e.set(g,T),g.addEventListener("dispose",d),f(T.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const x=g.mapping,M=x===Bm||x===Hm,T=x===Ho||x===su;if(M||T){let y=n.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return a===null&&(a=new jy(o)),y=M?a.fromEquirectangular(g,y):a.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),y.texture;if(y!==void 0)return y.texture;{const U=g.image;return M&&U&&U.height>0||T&&U&&p(U)?(a===null&&(a=new jy(o)),y=M?a.fromEquirectangular(g):a.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function f(g,x){return x===Bm?g.mapping=Ho:x===Hm&&(g.mapping=su),g}function p(g){let x=0;const M=6;for(let T=0;T<M;T++)g[T]!==void 0&&x++;return x===M}function d(g){const x=g.target;x.removeEventListener("dispose",d);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const M=n.get(x);M!==void 0&&(n.delete(x),M.dispose())}function v(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:r,dispose:v}}function R3(o){const e={};function n(a){if(e[a]!==void 0)return e[a];const r=o.getExtension(a);return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Ql("WebGLRenderer: "+a+" extension not supported."),r}}}function C3(o,e,n,a){const r={},l=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete r[g.id];const x=l.get(g);x&&(e.remove(x),l.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(v,g){return r[g.id]===!0||(g.addEventListener("dispose",c),r[g.id]=!0,n.memory.geometries++),g}function p(v){const g=v.attributes;for(const x in g)e.update(g[x],o.ARRAY_BUFFER)}function d(v){const g=[],x=v.index,M=v.attributes.position;let T=0;if(M===void 0)return;if(x!==null){const U=x.array;T=x.version;for(let O=0,R=U.length;O<R;O+=3){const N=U[O+0],w=U[O+1],C=U[O+2];g.push(N,w,w,C,C,N)}}else{const U=M.array;T=M.version;for(let O=0,R=U.length/3-1;O<R;O+=3){const N=O+0,w=O+1,C=O+2;g.push(N,w,w,C,C,N)}}const y=new(M.count>=65535?EE:ME)(g,1);y.version=T;const S=l.get(v);S&&e.remove(S),l.set(v,y)}function _(v){const g=l.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&d(v)}else d(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:_}}function w3(o,e,n){let a;function r(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,g){o.drawElements(a,g,l,v*c),n.update(g,a,1)}function d(v,g,x){x!==0&&(o.drawElementsInstanced(a,g,l,v*c,x),n.update(g,a,x))}function _(v,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,l,v,0,x);let T=0;for(let y=0;y<x;y++)T+=g[y];n.update(T,a,1)}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_}function D3(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:Xt("WebGLInfo: Unknown draw mode:",c);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function U3(o,e,n){const a=new WeakMap,r=new In;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(f);if(g===void 0||g.count!==v){let z=function(){b.dispose(),a.delete(f),f.removeEventListener("dispose",z)};var x=z;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],O=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let N=f.attributes.position.count*R,w=1;N>e.maxTextureSize&&(w=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const C=new Float32Array(N*w*4*v),b=new xE(C,N,w,v);b.type=hr,b.needsUpdate=!0;const D=R*4;for(let k=0;k<v;k++){const B=S[k],ee=U[k],j=O[k],q=N*w*4*k;for(let I=0;I<B.count;I++){const G=I*D;M===!0&&(r.fromBufferAttribute(B,I),C[q+G+0]=r.x,C[q+G+1]=r.y,C[q+G+2]=r.z,C[q+G+3]=0),T===!0&&(r.fromBufferAttribute(ee,I),C[q+G+4]=r.x,C[q+G+5]=r.y,C[q+G+6]=r.z,C[q+G+7]=0),y===!0&&(r.fromBufferAttribute(j,I),C[q+G+8]=r.x,C[q+G+9]=r.y,C[q+G+10]=r.z,C[q+G+11]=j.itemSize===4?r.w:1)}}g={count:v,texture:b,size:new Wt(N,w)},a.set(f,g),f.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let M=0;for(let y=0;y<d.length;y++)M+=d[y];const T=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:l}}function N3(o,e,n,a,r){let l=new WeakMap;function c(d){const _=r.render.frame,v=d.geometry,g=e.get(d,v);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==_&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),l.set(d,_))),d.isSkinnedMesh){const x=d.skeleton;l.get(x)!==_&&(x.update(),l.set(x,_))}return g}function f(){l=new WeakMap}function p(d){const _=d.target;_.removeEventListener("dispose",p),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:c,dispose:f}}const L3={[iE]:"LINEAR_TONE_MAPPING",[aE]:"REINHARD_TONE_MAPPING",[rE]:"CINEON_TONE_MAPPING",[sE]:"ACES_FILMIC_TONE_MAPPING",[lE]:"AGX_TONE_MAPPING",[uE]:"NEUTRAL_TONE_MAPPING",[oE]:"CUSTOM_TONE_MAPPING"};function O3(o,e,n,a,r,l){const c=new gr(e,n,{type:o,depthBuffer:r,stencilBuffer:l,samples:a?4:0,depthTexture:r?new ou(e,n):void 0}),f=new gr(e,n,{type:ts,depthBuffer:!1,stencilBuffer:!1}),p=new rs;p.setAttribute("position",new jr([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new jr([0,2,0,0,2,0],2));const d=new CR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new yr(p,d),v=new ag(-1,1,1,-1,0,1);let g=null,x=null,M=!1,T,y=null,S=[],U=!1;this.setSize=function(O,R){c.setSize(O,R),f.setSize(O,R);for(let N=0;N<S.length;N++){const w=S[N];w.setSize&&w.setSize(O,R)}},this.setEffects=function(O){S=O,U=S.length>0&&S[0].isRenderPass===!0;const R=c.width,N=c.height;for(let w=0;w<S.length;w++){const C=S[w];C.setSize&&C.setSize(R,N)}},this.begin=function(O,R){if(M||O.toneMapping===_r&&S.length===0)return!1;if(y=R,R!==null){const N=R.width,w=R.height;(c.width!==N||c.height!==w)&&this.setSize(N,w)}return U===!1&&O.setRenderTarget(c),T=O.toneMapping,O.toneMapping=_r,!0},this.hasRenderPass=function(){return U},this.end=function(O,R){O.toneMapping=T,M=!0;let N=c,w=f;for(let C=0;C<S.length;C++){const b=S[C];if(b.enabled!==!1&&(b.render(O,w,N,R),b.needsSwap!==!1)){const D=N;N=w,w=D}}if(g!==O.outputColorSpace||x!==O.toneMapping){g=O.outputColorSpace,x=O.toneMapping,d.defines={},Gt.getTransfer(g)===un&&(d.defines.SRGB_TRANSFER="");const C=L3[x];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=N.texture,O.setRenderTarget(y),O.render(_,v),y=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),p.dispose(),d.dispose()}}const LE=new Bi,S0=new ou(1,1),OE=new xE,PE=new aR,FE=new AE,iM=[],aM=[],rM=new Float32Array(16),sM=new Float32Array(9),oM=new Float32Array(4);function _u(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let l=iM[r];if(l===void 0&&(l=new Float32Array(r),iM[r]=l),e!==0){a.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,o[c].toArray(l,f)}return l}function ni(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function ii(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function Ad(o,e){let n=aM[e];n===void 0&&(n=new Int32Array(e),aM[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function P3(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function F3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ni(n,e))return;o.uniform2fv(this.addr,e),ii(n,e)}}function I3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ni(n,e))return;o.uniform3fv(this.addr,e),ii(n,e)}}function z3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ni(n,e))return;o.uniform4fv(this.addr,e),ii(n,e)}}function B3(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(ni(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),ii(n,e)}else{if(ni(n,a))return;oM.set(a),o.uniformMatrix2fv(this.addr,!1,oM),ii(n,a)}}function H3(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(ni(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),ii(n,e)}else{if(ni(n,a))return;sM.set(a),o.uniformMatrix3fv(this.addr,!1,sM),ii(n,a)}}function G3(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(ni(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),ii(n,e)}else{if(ni(n,a))return;rM.set(a),o.uniformMatrix4fv(this.addr,!1,rM),ii(n,a)}}function V3(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function k3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ni(n,e))return;o.uniform2iv(this.addr,e),ii(n,e)}}function X3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ni(n,e))return;o.uniform3iv(this.addr,e),ii(n,e)}}function W3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ni(n,e))return;o.uniform4iv(this.addr,e),ii(n,e)}}function q3(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function Y3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ni(n,e))return;o.uniform2uiv(this.addr,e),ii(n,e)}}function Z3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ni(n,e))return;o.uniform3uiv(this.addr,e),ii(n,e)}}function K3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ni(n,e))return;o.uniform4uiv(this.addr,e),ii(n,e)}}function Q3(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(S0.compareFunction=n.isReversedDepthBuffer()?tg:eg,l=S0):l=LE,n.setTexture2D(e||l,r)}function J3(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||PE,r)}function $3(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||FE,r)}function j3(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||OE,r)}function ew(o){switch(o){case 5126:return P3;case 35664:return F3;case 35665:return I3;case 35666:return z3;case 35674:return B3;case 35675:return H3;case 35676:return G3;case 5124:case 35670:return V3;case 35667:case 35671:return k3;case 35668:case 35672:return X3;case 35669:case 35673:return W3;case 5125:return q3;case 36294:return Y3;case 36295:return Z3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return Q3;case 35679:case 36299:case 36307:return J3;case 35680:case 36300:case 36308:case 36293:return $3;case 36289:case 36303:case 36311:case 36292:return j3}}function tw(o,e){o.uniform1fv(this.addr,e)}function nw(o,e){const n=_u(e,this.size,2);o.uniform2fv(this.addr,n)}function iw(o,e){const n=_u(e,this.size,3);o.uniform3fv(this.addr,n)}function aw(o,e){const n=_u(e,this.size,4);o.uniform4fv(this.addr,n)}function rw(o,e){const n=_u(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function sw(o,e){const n=_u(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function ow(o,e){const n=_u(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function lw(o,e){o.uniform1iv(this.addr,e)}function uw(o,e){o.uniform2iv(this.addr,e)}function cw(o,e){o.uniform3iv(this.addr,e)}function fw(o,e){o.uniform4iv(this.addr,e)}function hw(o,e){o.uniform1uiv(this.addr,e)}function dw(o,e){o.uniform2uiv(this.addr,e)}function pw(o,e){o.uniform3uiv(this.addr,e)}function mw(o,e){o.uniform4uiv(this.addr,e)}function _w(o,e,n){const a=this.cache,r=e.length,l=Ad(n,r);ni(a,l)||(o.uniform1iv(this.addr,l),ii(a,l));let c;this.type===o.SAMPLER_2D_SHADOW?c=S0:c=LE;for(let f=0;f!==r;++f)n.setTexture2D(e[f]||c,l[f])}function gw(o,e,n){const a=this.cache,r=e.length,l=Ad(n,r);ni(a,l)||(o.uniform1iv(this.addr,l),ii(a,l));for(let c=0;c!==r;++c)n.setTexture3D(e[c]||PE,l[c])}function vw(o,e,n){const a=this.cache,r=e.length,l=Ad(n,r);ni(a,l)||(o.uniform1iv(this.addr,l),ii(a,l));for(let c=0;c!==r;++c)n.setTextureCube(e[c]||FE,l[c])}function xw(o,e,n){const a=this.cache,r=e.length,l=Ad(n,r);ni(a,l)||(o.uniform1iv(this.addr,l),ii(a,l));for(let c=0;c!==r;++c)n.setTexture2DArray(e[c]||OE,l[c])}function Sw(o){switch(o){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return aw;case 35674:return rw;case 35675:return sw;case 35676:return ow;case 5124:case 35670:return lw;case 35667:case 35671:return uw;case 35668:case 35672:return cw;case 35669:case 35673:return fw;case 5125:return hw;case 36294:return dw;case 36295:return pw;case 36296:return mw;case 35678:case 36198:case 36298:case 36306:case 35682:return _w;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return xw}}class yw{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=ew(n.type)}}class Mw{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Sw(n.type)}}class Ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let l=0,c=r.length;l!==c;++l){const f=r[l];f.setValue(e,n[f.id],a)}}}const __=/(\w+)(\])?(\[|\.)?/g;function lM(o,e){o.seq.push(e),o.map[e.id]=e}function Tw(o,e,n){const a=o.name,r=a.length;for(__.lastIndex=0;;){const l=__.exec(a),c=__.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===r){lM(n,d===void 0?new yw(f,o,e):new Mw(f,o,e));break}else{let v=n.map[f];v===void 0&&(v=new Ew(f),lM(n,v)),n=v}}}class Kh{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=e.getActiveUniform(n,c),p=e.getUniformLocation(n,f.name);Tw(f,p,this)}const r=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(c):l.push(c);r.length>0&&(this.seq=r.concat(l))}setValue(e,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,l=e.length;r!==l;++r){const c=e[r];c.id in n&&a.push(c)}return a}}function uM(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const bw=37297;let Aw=0;function Rw(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=r;c<l;c++){const f=c+1;a.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const cM=new vt;function Cw(o){Gt._getMatrix(cM,Gt.workingColorSpace,o);const e=`mat3( ${cM.elements.map(n=>n.toFixed(4))} )`;switch(Gt.getTransfer(o)){case ld:return[e,"LinearTransferOETF"];case un:return[e,"sRGBTransferOETF"];default:return _t("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function fM(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+Rw(o.getShaderSource(e),f)}else return l}function ww(o,e){const n=Cw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Dw={[iE]:"Linear",[aE]:"Reinhard",[rE]:"Cineon",[sE]:"ACESFilmic",[lE]:"AgX",[uE]:"Neutral",[oE]:"Custom"};function Uw(o,e){const n=Dw[e];return n===void 0?(_t("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Dh=new he;function Nw(){Gt.getLuminanceCoefficients(Dh);const o=Dh.x.toFixed(4),e=Dh.y.toFixed(4),n=Dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_c).join(`
`)}function Ow(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function Pw(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(e,r),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(e,c),locationSize:f}}return n}function _c(o){return o!==""}function hM(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dM(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function y0(o){return o.replace(Fw,zw)}const Iw=new Map;function zw(o,e){let n=Ct[e];if(n===void 0){const a=Iw.get(e);if(a!==void 0)n=Ct[a],_t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return y0(n)}const Bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pM(o){return o.replace(Bw,Hw)}function Hw(o,e,n,a){let r="";for(let l=parseInt(e);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function mM(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Gw={[Xh]:"SHADOWMAP_TYPE_PCF",[mc]:"SHADOWMAP_TYPE_VSM"};function Vw(o){return Gw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kw={[Ho]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE",[Ed]:"ENVMAP_TYPE_CUBE_UV"};function Xw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":kw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ww={[su]:"ENVMAP_MODE_REFRACTION"};function qw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Ww[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Yw={[nE]:"ENVMAP_BLENDING_MULTIPLY",[IA]:"ENVMAP_BLENDING_MIX",[zA]:"ENVMAP_BLENDING_ADD"};function Zw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Yw[o.combine]||"ENVMAP_BLENDING_NONE"}function Kw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function Qw(o,e,n,a){const r=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=Vw(n),d=Xw(n),_=qw(n),v=Zw(n),g=Kw(n),x=Lw(n),M=Ow(l),T=r.createProgram();let y,S,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(_c).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(_c).join(`
`),S.length>0&&(S+=`
`)):(y=[mM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_c).join(`
`),S=[mM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?Ct.tonemapping_pars_fragment:"",n.toneMapping!==_r?Uw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,ww("linearToOutputTexel",n.outputColorSpace),Nw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_c).join(`
`)),c=y0(c),c=hM(c,n),c=dM(c,n),f=y0(f),f=hM(f,n),f=dM(f,n),c=pM(c),f=pM(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===wy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=U+y+c,R=U+S+f,N=uM(r,r.VERTEX_SHADER,O),w=uM(r,r.FRAGMENT_SHADER,R);r.attachShader(T,N),r.attachShader(T,w),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function C(k){if(o.debug.checkShaderErrors){const B=r.getProgramInfoLog(T)||"",ee=r.getShaderInfoLog(N)||"",j=r.getShaderInfoLog(w)||"",q=B.trim(),I=ee.trim(),G=j.trim();let Y=!0,se=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,T,N,w);else{const V=fM(r,N,"vertex"),F=fM(r,w,"fragment");Xt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+q+`
`+V+`
`+F)}else q!==""?_t("WebGLProgram: Program Info Log:",q):(I===""||G==="")&&(se=!1);se&&(k.diagnostics={runnable:Y,programLog:q,vertexShader:{log:I,prefix:y},fragmentShader:{log:G,prefix:S}})}r.deleteShader(N),r.deleteShader(w),b=new Kh(r,T),D=Pw(r,T)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let D;this.getAttributes=function(){return D===void 0&&C(this),D};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(T,bw)),z},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Aw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=w,this}let Jw=0;class $w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new jw(e),n.set(e,a)),a}}class jw{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function eD(o){return o===Go||o===rd||o===sd}function tD(o,e,n,a,r,l){const c=new SE,f=new $w,p=new Set,d=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function T(b,D,z,k,B,ee){const j=k.fog,q=B.geometry,I=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,G=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,Y=e.get(b.envMap||I,G),se=Y&&Y.mapping===Ed?Y.image.height:null,V=x[b.type];b.precision!==null&&(g=a.getMaxPrecision(b.precision),g!==b.precision&&_t("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const F=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,K=F!==void 0?F.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let ge,Ne,ne,ve;if(V){const Te=cr[V];ge=Te.vertexShader,Ne=Te.fragmentShader}else{ge=b.vertexShader,Ne=b.fragmentShader;const Te=f.getVertexShaderStage(b),ot=f.getFragmentShaderStage(b);f.update(b,Te,ot),ne=Te.id,ve=ot.id}const Me=o.getRenderTarget(),Oe=o.state.buffers.depth.getReversed(),tt=B.isInstancedMesh===!0,Ye=B.isBatchedMesh===!0,xt=!!b.map,We=!!b.matcap,it=!!Y,ct=!!b.aoMap,ft=!!b.lightMap,ce=!!b.bumpMap&&b.wireframe===!1,Ft=!!b.normalMap,qt=!!b.displacementMap,jt=!!b.emissiveMap,pt=!!b.metalnessMap,Yt=!!b.roughnessMap,Q=b.anisotropy>0,It=b.clearcoat>0,dt=b.dispersion>0,H=b.iridescence>0,A=b.sheen>0,$=b.transmission>0,ae=Q&&!!b.anisotropyMap,de=It&&!!b.clearcoatMap,Pe=It&&!!b.clearcoatNormalMap,De=It&&!!b.clearcoatRoughnessMap,_e=H&&!!b.iridescenceMap,pe=H&&!!b.iridescenceThicknessMap,Fe=A&&!!b.sheenColorMap,ke=A&&!!b.sheenRoughnessMap,Be=!!b.specularMap,ze=!!b.specularColorMap,Le=!!b.specularIntensityMap,et=$&&!!b.transmissionMap,at=$&&!!b.thicknessMap,W=!!b.gradientMap,Ue=!!b.alphaMap,xe=b.alphaTest>0,Ie=!!b.alphaHash,He=!!b.extensions;let Re=_r;b.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Re=o.toneMapping);const Ce={shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:ge,fragmentShader:Ne,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&B._colorsTexture!==null,instancing:tt,instancingColor:tt&&B.instanceColor!==null,instancingMorph:tt&&B.morphTexture!==null,outputColorSpace:Me===null?o.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:xt,matcap:We,envMap:it,envMapMode:it&&Y.mapping,envMapCubeUVHeight:se,aoMap:ct,lightMap:ft,bumpMap:ce,normalMap:Ft,displacementMap:qt,emissiveMap:jt,normalMapObjectSpace:Ft&&b.normalMapType===GA,normalMapTangentSpace:Ft&&b.normalMapType===Ay,packedNormalMap:Ft&&b.normalMapType===Ay&&eD(b.normalMap.format),metalnessMap:pt,roughnessMap:Yt,anisotropy:Q,anisotropyMap:ae,clearcoat:It,clearcoatMap:de,clearcoatNormalMap:Pe,clearcoatRoughnessMap:De,dispersion:dt,iridescence:H,iridescenceMap:_e,iridescenceThicknessMap:pe,sheen:A,sheenColorMap:Fe,sheenRoughnessMap:ke,specularMap:Be,specularColorMap:ze,specularIntensityMap:Le,transmission:$,transmissionMap:et,thicknessMap:at,gradientMap:W,opaque:b.transparent===!1&&b.blending===Kl&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:Ie,combine:b.combine,mapUv:xt&&M(b.map.channel),aoMapUv:ct&&M(b.aoMap.channel),lightMapUv:ft&&M(b.lightMap.channel),bumpMapUv:ce&&M(b.bumpMap.channel),normalMapUv:Ft&&M(b.normalMap.channel),displacementMapUv:qt&&M(b.displacementMap.channel),emissiveMapUv:jt&&M(b.emissiveMap.channel),metalnessMapUv:pt&&M(b.metalnessMap.channel),roughnessMapUv:Yt&&M(b.roughnessMap.channel),anisotropyMapUv:ae&&M(b.anisotropyMap.channel),clearcoatMapUv:de&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&M(b.sheenRoughnessMap.channel),specularMapUv:Be&&M(b.specularMap.channel),specularColorMapUv:ze&&M(b.specularColorMap.channel),specularIntensityMapUv:Le&&M(b.specularIntensityMap.channel),transmissionMapUv:et&&M(b.transmissionMap.channel),thicknessMapUv:at&&M(b.thicknessMap.channel),alphaMapUv:Ue&&M(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ft||Q),vertexNormals:!!q.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(xt||Ue),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||q.attributes.normal===void 0&&Ft===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Oe,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Se,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Re,decodeVideoTexture:xt&&b.map.isVideoTexture===!0&&Gt.getTransfer(b.map.colorSpace)===un,decodeVideoTextureEmissive:jt&&b.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(b.emissiveMap.colorSpace)===un,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Yr,flipSided:b.side===Ki,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ce.vertexUv1s=p.has(1),Ce.vertexUv2s=p.has(2),Ce.vertexUv3s=p.has(3),p.clear(),Ce}function y(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)D.push(z),D.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(S(D,b),U(D,b),D.push(o.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function S(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function U(b,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),b.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),D.hasPositionAttribute&&c.enable(23),b.push(c.mask)}function O(b){const D=x[b.type];let z;if(D){const k=cr[D];z=bR.clone(k.uniforms)}else z=b.uniforms;return z}function R(b,D){let z=_.get(D);return z!==void 0?++z.usedTimes:(z=new Qw(o,D,b,r),d.push(z),_.set(D,z)),z}function N(b){if(--b.usedTimes===0){const D=d.indexOf(b);d[D]=d[d.length-1],d.pop(),_.delete(b.cacheKey),b.destroy()}}function w(b){f.remove(b)}function C(){f.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:O,acquireProgram:R,releaseProgram:N,releaseShaderCache:w,programs:d,dispose:C}}function nD(){let o=new WeakMap;function e(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function r(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:l}}function iD(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function _M(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function gM(){const o=[];let e=0;const n=[],a=[],r=[];function l(){e=0,n.length=0,a.length=0,r.length=0}function c(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function f(g,x,M,T,y,S){let U=o[e];return U===void 0?(U={id:g.id,object:g,geometry:x,material:M,materialVariant:c(g),groupOrder:T,renderOrder:g.renderOrder,z:y,group:S},o[e]=U):(U.id=g.id,U.object=g,U.geometry=x,U.material=M,U.materialVariant=c(g),U.groupOrder=T,U.renderOrder=g.renderOrder,U.z=y,U.group=S),e++,U}function p(g,x,M,T,y,S){const U=f(g,x,M,T,y,S);M.transmission>0?a.push(U):M.transparent===!0?r.push(U):n.push(U)}function d(g,x,M,T,y,S){const U=f(g,x,M,T,y,S);M.transmission>0?a.unshift(U):M.transparent===!0?r.unshift(U):n.unshift(U)}function _(g,x,M){n.length>1&&n.sort(g||iD),a.length>1&&a.sort(x||_M),r.length>1&&r.sort(x||_M),M&&(n.reverse(),a.reverse(),r.reverse())}function v(){for(let g=e,x=o.length;g<x;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:p,unshift:d,finish:v,sort:_}}function aD(){let o=new WeakMap;function e(a,r){const l=o.get(a);let c;return l===void 0?(c=new gM,o.set(a,[c])):r>=l.length?(c=new gM,l.push(c)):c=l[r],c}function n(){o=new WeakMap}return{get:e,dispose:n}}function rD(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new he,color:new Jt};break;case"SpotLight":n={position:new he,direction:new he,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new he,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new he,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":n={color:new Jt,position:new he,halfWidth:new he,halfHeight:new he};break}return o[e.id]=n,n}}}function sD(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let oD=0;function lD(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function uD(o){const e=new rD,n=sD(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new he);const r=new he,l=new Qn,c=new Qn;function f(d){let _=0,v=0,g=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let x=0,M=0,T=0,y=0,S=0,U=0,O=0,R=0,N=0,w=0,C=0;d.sort(lD);for(let D=0,z=d.length;D<z;D++){const k=d[D],B=k.color,ee=k.intensity,j=k.distance;let q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Go?q=k.shadow.map.texture:q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=B.r*ee,v+=B.g*ee,g+=B.b*ee;else if(k.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(k.sh.coefficients[I],ee);C++}else if(k.isDirectionalLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,Y=n.get(k);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,a.directionalShadow[x]=Y,a.directionalShadowMap[x]=q,a.directionalShadowMatrix[x]=k.shadow.matrix,U++}a.directional[x]=I,x++}else if(k.isSpotLight){const I=e.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(B).multiplyScalar(ee),I.distance=j,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,a.spot[T]=I;const G=k.shadow;if(k.map&&(a.spotLightMap[N]=k.map,N++,G.updateMatrices(k),k.castShadow&&w++),a.spotLightMatrix[T]=G.matrix,k.castShadow){const Y=n.get(k);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,a.spotShadow[T]=Y,a.spotShadowMap[T]=q,R++}T++}else if(k.isRectAreaLight){const I=e.get(k);I.color.copy(B).multiplyScalar(ee),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),a.rectArea[y]=I,y++}else if(k.isPointLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),I.distance=k.distance,I.decay=k.decay,k.castShadow){const G=k.shadow,Y=n.get(k);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,Y.shadowCameraNear=G.camera.near,Y.shadowCameraFar=G.camera.far,a.pointShadow[M]=Y,a.pointShadowMap[M]=q,a.pointShadowMatrix[M]=k.shadow.matrix,O++}a.point[M]=I,M++}else if(k.isHemisphereLight){const I=e.get(k);I.skyColor.copy(k.color).multiplyScalar(ee),I.groundColor.copy(k.groundColor).multiplyScalar(ee),a.hemi[S]=I,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=qe.LTC_FLOAT_1,a.rectAreaLTC2=qe.LTC_FLOAT_2):(a.rectAreaLTC1=qe.LTC_HALF_1,a.rectAreaLTC2=qe.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const b=a.hash;(b.directionalLength!==x||b.pointLength!==M||b.spotLength!==T||b.rectAreaLength!==y||b.hemiLength!==S||b.numDirectionalShadows!==U||b.numPointShadows!==O||b.numSpotShadows!==R||b.numSpotMaps!==N||b.numLightProbes!==C)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=y,a.point.length=M,a.hemi.length=S,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=O,a.pointShadowMap.length=O,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=O,a.spotLightMatrix.length=R+N-w,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=w,a.numLightProbes=C,b.directionalLength=x,b.pointLength=M,b.spotLength=T,b.rectAreaLength=y,b.hemiLength=S,b.numDirectionalShadows=U,b.numPointShadows=O,b.numSpotShadows=R,b.numSpotMaps=N,b.numLightProbes=C,a.version=oD++)}function p(d,_){let v=0,g=0,x=0,M=0,T=0;const y=_.matrixWorldInverse;for(let S=0,U=d.length;S<U;S++){const O=d[S];if(O.isDirectionalLight){const R=a.directional[v];R.direction.setFromMatrixPosition(O.matrixWorld),r.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),v++}else if(O.isSpotLight){const R=a.spot[x];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(O.matrixWorld),r.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),x++}else if(O.isRectAreaLight){const R=a.rectArea[M];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(O.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(O.width*.5,0,0),R.halfHeight.set(0,O.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(O.isPointLight){const R=a.point[g];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),g++}else if(O.isHemisphereLight){const R=a.hemi[T];R.direction.setFromMatrixPosition(O.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:f,setupView:p,state:a}}function vM(o){const e=new uD(o),n=[],a=[],r=[];function l(g){v.camera=g,n.length=0,a.length=0,r.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function p(g){r.push(g)}function d(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:d,setupLightsView:_,pushLight:c,pushShadow:f,pushLightProbeGrid:p}}function cD(o){let e=new WeakMap;function n(r,l=0){const c=e.get(r);let f;return c===void 0?(f=new vM(o),e.set(r,[f])):l>=c.length?(f=new vM(o),c.push(f)):f=c[l],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const fD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hD=`uniform sampler2D shadow_pass;
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
}`,dD=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],pD=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],xM=new Qn,fc=new he,g_=new he;function mD(o,e,n){let a=new bE;const r=new Wt,l=new Wt,c=new In,f=new wR,p=new DR,d={},_=n.maxTextureSize,v={[Ys]:Ki,[Ki]:Ys,[Yr]:Yr},g=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:fD,fragmentShader:hD}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new rs;M.setAttribute("position",new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new yr(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let S=this.type;this.render=function(w,C,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||w.length===0)return;this.type===vA&&(_t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xh);const D=o.getRenderTarget(),z=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),B=o.state;B.setBlending(Jr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const ee=S!==this.type;ee&&C.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(q=>q.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,q=w.length;j<q;j++){const I=w[j],G=I.shadow;if(G===void 0){_t("WebGLShadowMap:",I,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Y=G.getFrameExtents();r.multiply(Y),l.copy(G.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(l.x=Math.floor(_/Y.x),r.x=l.x*Y.x,G.mapSize.x=l.x),r.y>_&&(l.y=Math.floor(_/Y.y),r.y=l.y*Y.y,G.mapSize.y=l.y));const se=o.state.buffers.depth.getReversed();if(G.camera._reversedDepth=se,G.map===null||ee===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===mc){if(I.isPointLight){_t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new gr(r.x,r.y,{format:Go,type:ts,minFilter:Ci,magFilter:Ci,generateMipmaps:!1}),G.map.texture.name=I.name+".shadowMap",G.map.depthTexture=new ou(r.x,r.y,hr),G.map.depthTexture.name=I.name+".shadowMapDepth",G.map.depthTexture.format=ns,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=gi,G.map.depthTexture.magFilter=gi}else I.isPointLight?(G.map=new NE(r.x),G.map.depthTexture=new ER(r.x,Sr)):(G.map=new gr(r.x,r.y),G.map.depthTexture=new ou(r.x,r.y,Sr)),G.map.depthTexture.name=I.name+".shadowMap",G.map.depthTexture.format=ns,this.type===Xh?(G.map.depthTexture.compareFunction=se?tg:eg,G.map.depthTexture.minFilter=Ci,G.map.depthTexture.magFilter=Ci):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=gi,G.map.depthTexture.magFilter=gi);G.camera.updateProjectionMatrix()}const V=G.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<V;F++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,F),o.clear();else{F===0&&(o.setRenderTarget(G.map),o.clear());const K=G.getViewport(F);c.set(l.x*K.x,l.y*K.y,l.x*K.z,l.y*K.w),B.viewport(c)}if(I.isPointLight){const K=G.camera,Se=G.matrix,ge=I.distance||K.far;ge!==K.far&&(K.far=ge,K.updateProjectionMatrix()),fc.setFromMatrixPosition(I.matrixWorld),K.position.copy(fc),g_.copy(K.position),g_.add(dD[F]),K.up.copy(pD[F]),K.lookAt(g_),K.updateMatrixWorld(),Se.makeTranslation(-fc.x,-fc.y,-fc.z),xM.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xM,K.coordinateSystem,K.reversedDepth)}else G.updateMatrices(I);a=G.getFrustum(),R(C,b,G.camera,I,this.type)}G.isPointLightShadow!==!0&&this.type===mc&&U(G,b),G.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(D,z,k)};function U(w,C){const b=e.update(T);g.defines.VSM_SAMPLES!==w.blurSamples&&(g.defines.VSM_SAMPLES=w.blurSamples,x.defines.VSM_SAMPLES=w.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gr(r.x,r.y,{format:Go,type:ts})),g.uniforms.shadow_pass.value=w.map.depthTexture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(C,null,b,g,T,null),x.uniforms.shadow_pass.value=w.mapPass.texture,x.uniforms.resolution.value=w.mapSize,x.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(C,null,b,x,T,null)}function O(w,C,b,D){let z=null;const k=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)z=k;else if(z=b.isPointLight===!0?p:f,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=z.uuid,ee=C.uuid;let j=d[B];j===void 0&&(j={},d[B]=j);let q=j[ee];q===void 0&&(q=z.clone(),j[ee]=q,C.addEventListener("dispose",N)),z=q}if(z.visible=C.visible,z.wireframe=C.wireframe,D===mc?z.side=C.shadowSide!==null?C.shadowSide:C.side:z.side=C.shadowSide!==null?C.shadowSide:v[C.side],z.alphaMap=C.alphaMap,z.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,z.map=C.map,z.clipShadows=C.clipShadows,z.clippingPlanes=C.clippingPlanes,z.clipIntersection=C.clipIntersection,z.displacementMap=C.displacementMap,z.displacementScale=C.displacementScale,z.displacementBias=C.displacementBias,z.wireframeLinewidth=C.wireframeLinewidth,z.linewidth=C.linewidth,b.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const B=o.properties.get(z);B.light=b}return z}function R(w,C,b,D,z){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&z===mc)&&(!w.frustumCulled||a.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const ee=e.update(w),j=w.material;if(Array.isArray(j)){const q=ee.groups;for(let I=0,G=q.length;I<G;I++){const Y=q[I],se=j[Y.materialIndex];if(se&&se.visible){const V=O(w,se,D,z);w.onBeforeShadow(o,w,C,b,ee,V,Y),o.renderBufferDirect(b,null,ee,V,w,Y),w.onAfterShadow(o,w,C,b,ee,V,Y)}}}else if(j.visible){const q=O(w,j,D,z);w.onBeforeShadow(o,w,C,b,ee,q,null),o.renderBufferDirect(b,null,ee,q,w,null),w.onAfterShadow(o,w,C,b,ee,q,null)}}const B=w.children;for(let ee=0,j=B.length;ee<j;ee++)R(B[ee],C,b,D,z)}function N(w){w.target.removeEventListener("dispose",N);for(const b in d){const D=d[b],z=w.target.uuid;z in D&&(D[z].dispose(),delete D[z])}}}function _D(o,e){function n(){let W=!1;const Ue=new In;let xe=null;const Ie=new In(0,0,0,0);return{setMask:function(He){xe!==He&&!W&&(o.colorMask(He,He,He,He),xe=He)},setLocked:function(He){W=He},setClear:function(He,Re,Ce,Te,ot){ot===!0&&(He*=Te,Re*=Te,Ce*=Te),Ue.set(He,Re,Ce,Te),Ie.equals(Ue)===!1&&(o.clearColor(He,Re,Ce,Te),Ie.copy(Ue))},reset:function(){W=!1,xe=null,Ie.set(-1,0,0,0)}}}function a(){let W=!1,Ue=!1,xe=null,Ie=null,He=null;return{setReversed:function(Re){if(Ue!==Re){const Ce=e.get("EXT_clip_control");Re?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Ue=Re;const Te=He;He=null,this.setClear(Te)}},getReversed:function(){return Ue},setTest:function(Re){Re?Me(o.DEPTH_TEST):Oe(o.DEPTH_TEST)},setMask:function(Re){xe!==Re&&!W&&(o.depthMask(Re),xe=Re)},setFunc:function(Re){if(Ue&&(Re=JA[Re]),Ie!==Re){switch(Re){case O_:o.depthFunc(o.NEVER);break;case P_:o.depthFunc(o.ALWAYS);break;case F_:o.depthFunc(o.LESS);break;case ru:o.depthFunc(o.LEQUAL);break;case I_:o.depthFunc(o.EQUAL);break;case z_:o.depthFunc(o.GEQUAL);break;case B_:o.depthFunc(o.GREATER);break;case H_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=Re}},setLocked:function(Re){W=Re},setClear:function(Re){He!==Re&&(He=Re,Ue&&(Re=1-Re),o.clearDepth(Re))},reset:function(){W=!1,xe=null,Ie=null,He=null,Ue=!1}}}function r(){let W=!1,Ue=null,xe=null,Ie=null,He=null,Re=null,Ce=null,Te=null,ot=null;return{setTest:function(we){W||(we?Me(o.STENCIL_TEST):Oe(o.STENCIL_TEST))},setMask:function(we){Ue!==we&&!W&&(o.stencilMask(we),Ue=we)},setFunc:function(we,st,Qe){(xe!==we||Ie!==st||He!==Qe)&&(o.stencilFunc(we,st,Qe),xe=we,Ie=st,He=Qe)},setOp:function(we,st,Qe){(Re!==we||Ce!==st||Te!==Qe)&&(o.stencilOp(we,st,Qe),Re=we,Ce=st,Te=Qe)},setLocked:function(we){W=we},setClear:function(we){ot!==we&&(o.clearStencil(we),ot=we)},reset:function(){W=!1,Ue=null,xe=null,Ie=null,He=null,Re=null,Ce=null,Te=null,ot=null}}}const l=new n,c=new a,f=new r,p=new WeakMap,d=new WeakMap;let _={},v={},g={},x=new WeakMap,M=[],T=null,y=!1,S=null,U=null,O=null,R=null,N=null,w=null,C=null,b=new Jt(0,0,0),D=0,z=!1,k=null,B=null,ee=null,j=null,q=null;const I=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const se=o.getParameter(o.VERSION);se.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(se)[1]),G=Y>=1):se.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),G=Y>=2);let V=null,F={};const K=o.getParameter(o.SCISSOR_BOX),Se=o.getParameter(o.VIEWPORT),ge=new In().fromArray(K),Ne=new In().fromArray(Se);function ne(W,Ue,xe,Ie){const He=new Uint8Array(4),Re=o.createTexture();o.bindTexture(W,Re),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ce=0;Ce<xe;Ce++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,He):o.texImage2D(Ue+Ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,He);return Re}const ve={};ve[o.TEXTURE_2D]=ne(o.TEXTURE_2D,o.TEXTURE_2D,1),ve[o.TEXTURE_CUBE_MAP]=ne(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[o.TEXTURE_2D_ARRAY]=ne(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ve[o.TEXTURE_3D]=ne(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Me(o.DEPTH_TEST),c.setFunc(ru),ce(!1),Ft(My),Me(o.CULL_FACE),ct(Jr);function Me(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function Oe(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function tt(W,Ue){return g[W]!==Ue?(o.bindFramebuffer(W,Ue),g[W]=Ue,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ue),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Ye(W,Ue){let xe=M,Ie=!1;if(W){xe=x.get(Ue),xe===void 0&&(xe=[],x.set(Ue,xe));const He=W.textures;if(xe.length!==He.length||xe[0]!==o.COLOR_ATTACHMENT0){for(let Re=0,Ce=He.length;Re<Ce;Re++)xe[Re]=o.COLOR_ATTACHMENT0+Re;xe.length=He.length,Ie=!0}}else xe[0]!==o.BACK&&(xe[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(xe)}function xt(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const We={[Ro]:o.FUNC_ADD,[SA]:o.FUNC_SUBTRACT,[yA]:o.FUNC_REVERSE_SUBTRACT};We[MA]=o.MIN,We[EA]=o.MAX;const it={[TA]:o.ZERO,[bA]:o.ONE,[AA]:o.SRC_COLOR,[N_]:o.SRC_ALPHA,[NA]:o.SRC_ALPHA_SATURATE,[DA]:o.DST_COLOR,[CA]:o.DST_ALPHA,[RA]:o.ONE_MINUS_SRC_COLOR,[L_]:o.ONE_MINUS_SRC_ALPHA,[UA]:o.ONE_MINUS_DST_COLOR,[wA]:o.ONE_MINUS_DST_ALPHA,[LA]:o.CONSTANT_COLOR,[OA]:o.ONE_MINUS_CONSTANT_COLOR,[PA]:o.CONSTANT_ALPHA,[FA]:o.ONE_MINUS_CONSTANT_ALPHA};function ct(W,Ue,xe,Ie,He,Re,Ce,Te,ot,we){if(W===Jr){y===!0&&(Oe(o.BLEND),y=!1);return}if(y===!1&&(Me(o.BLEND),y=!0),W!==xA){if(W!==S||we!==z){if((U!==Ro||N!==Ro)&&(o.blendEquation(o.FUNC_ADD),U=Ro,N=Ro),we)switch(W){case Kl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ey:o.blendFunc(o.ONE,o.ONE);break;case Ty:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case by:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Xt("WebGLState: Invalid blending: ",W);break}else switch(W){case Kl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ey:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ty:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case by:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",W);break}O=null,R=null,w=null,C=null,b.set(0,0,0),D=0,S=W,z=we}return}He=He||Ue,Re=Re||xe,Ce=Ce||Ie,(Ue!==U||He!==N)&&(o.blendEquationSeparate(We[Ue],We[He]),U=Ue,N=He),(xe!==O||Ie!==R||Re!==w||Ce!==C)&&(o.blendFuncSeparate(it[xe],it[Ie],it[Re],it[Ce]),O=xe,R=Ie,w=Re,C=Ce),(Te.equals(b)===!1||ot!==D)&&(o.blendColor(Te.r,Te.g,Te.b,ot),b.copy(Te),D=ot),S=W,z=!1}function ft(W,Ue){W.side===Yr?Oe(o.CULL_FACE):Me(o.CULL_FACE);let xe=W.side===Ki;Ue&&(xe=!xe),ce(xe),W.blending===Kl&&W.transparent===!1?ct(Jr):ct(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ie=W.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),jt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Me(o.SAMPLE_ALPHA_TO_COVERAGE):Oe(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(W){k!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),k=W)}function Ft(W){W!==_A?(Me(o.CULL_FACE),W!==B&&(W===My?o.cullFace(o.BACK):W===gA?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Oe(o.CULL_FACE),B=W}function qt(W){W!==ee&&(G&&o.lineWidth(W),ee=W)}function jt(W,Ue,xe){W?(Me(o.POLYGON_OFFSET_FILL),(j!==Ue||q!==xe)&&(j=Ue,q=xe,c.getReversed()&&(Ue=-Ue),o.polygonOffset(Ue,xe))):Oe(o.POLYGON_OFFSET_FILL)}function pt(W){W?Me(o.SCISSOR_TEST):Oe(o.SCISSOR_TEST)}function Yt(W){W===void 0&&(W=o.TEXTURE0+I-1),V!==W&&(o.activeTexture(W),V=W)}function Q(W,Ue,xe){xe===void 0&&(V===null?xe=o.TEXTURE0+I-1:xe=V);let Ie=F[xe];Ie===void 0&&(Ie={type:void 0,texture:void 0},F[xe]=Ie),(Ie.type!==W||Ie.texture!==Ue)&&(V!==xe&&(o.activeTexture(xe),V=xe),o.bindTexture(W,Ue||ve[W]),Ie.type=W,Ie.texture=Ue)}function It(){const W=F[V];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function dt(){try{o.compressedTexImage2D(...arguments)}catch(W){Xt("WebGLState:",W)}}function H(){try{o.compressedTexImage3D(...arguments)}catch(W){Xt("WebGLState:",W)}}function A(){try{o.texSubImage2D(...arguments)}catch(W){Xt("WebGLState:",W)}}function $(){try{o.texSubImage3D(...arguments)}catch(W){Xt("WebGLState:",W)}}function ae(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Xt("WebGLState:",W)}}function de(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Xt("WebGLState:",W)}}function Pe(){try{o.texStorage2D(...arguments)}catch(W){Xt("WebGLState:",W)}}function De(){try{o.texStorage3D(...arguments)}catch(W){Xt("WebGLState:",W)}}function _e(){try{o.texImage2D(...arguments)}catch(W){Xt("WebGLState:",W)}}function pe(){try{o.texImage3D(...arguments)}catch(W){Xt("WebGLState:",W)}}function Fe(W){return v[W]!==void 0?v[W]:o.getParameter(W)}function ke(W,Ue){v[W]!==Ue&&(o.pixelStorei(W,Ue),v[W]=Ue)}function Be(W){ge.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),ge.copy(W))}function ze(W){Ne.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ne.copy(W))}function Le(W,Ue){let xe=d.get(Ue);xe===void 0&&(xe=new WeakMap,d.set(Ue,xe));let Ie=xe.get(W);Ie===void 0&&(Ie=o.getUniformBlockIndex(Ue,W.name),xe.set(W,Ie))}function et(W,Ue){const Ie=d.get(Ue).get(W);p.get(Ue)!==Ie&&(o.uniformBlockBinding(Ue,Ie,W.__bindingPointIndex),p.set(Ue,Ie))}function at(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},v={},V=null,F={},g={},x=new WeakMap,M=[],T=null,y=!1,S=null,U=null,O=null,R=null,N=null,w=null,C=null,b=new Jt(0,0,0),D=0,z=!1,k=null,B=null,ee=null,j=null,q=null,ge.set(0,0,o.canvas.width,o.canvas.height),Ne.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Me,disable:Oe,bindFramebuffer:tt,drawBuffers:Ye,useProgram:xt,setBlending:ct,setMaterial:ft,setFlipSided:ce,setCullFace:Ft,setLineWidth:qt,setPolygonOffset:jt,setScissorTest:pt,activeTexture:Yt,bindTexture:Q,unbindTexture:It,compressedTexImage2D:dt,compressedTexImage3D:H,texImage2D:_e,texImage3D:pe,pixelStorei:ke,getParameter:Fe,updateUBOMapping:Le,uniformBlockBinding:et,texStorage2D:Pe,texStorage3D:De,texSubImage2D:A,texSubImage3D:$,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Be,viewport:ze,reset:at}}function gD(o,e,n,a,r,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Wt,_=new WeakMap,v=new Set;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(H,A){return M?new OffscreenCanvas(H,A):cd("canvas")}function y(H,A,$){let ae=1;const de=dt(H);if((de.width>$||de.height>$)&&(ae=$/Math.max(de.width,de.height)),ae<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const Pe=Math.floor(ae*de.width),De=Math.floor(ae*de.height);g===void 0&&(g=T(Pe,De));const _e=A?T(Pe,De):g;return _e.width=Pe,_e.height=De,_e.getContext("2d").drawImage(H,0,0,Pe,De),_t("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Pe+"x"+De+")."),_e}else return"data"in H&&_t("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),H;return H}function S(H){return H.generateMipmaps}function U(H){o.generateMipmap(H)}function O(H){return H.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?o.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(H,A,$,ae,de,Pe=!1){if(H!==null){if(o[H]!==void 0)return o[H];_t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let De;ae&&(De=e.get("EXT_texture_norm16"),De||_t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=A;if(A===o.RED&&($===o.FLOAT&&(_e=o.R32F),$===o.HALF_FLOAT&&(_e=o.R16F),$===o.UNSIGNED_BYTE&&(_e=o.R8),$===o.UNSIGNED_SHORT&&De&&(_e=De.R16_EXT),$===o.SHORT&&De&&(_e=De.R16_SNORM_EXT)),A===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(_e=o.R8UI),$===o.UNSIGNED_SHORT&&(_e=o.R16UI),$===o.UNSIGNED_INT&&(_e=o.R32UI),$===o.BYTE&&(_e=o.R8I),$===o.SHORT&&(_e=o.R16I),$===o.INT&&(_e=o.R32I)),A===o.RG&&($===o.FLOAT&&(_e=o.RG32F),$===o.HALF_FLOAT&&(_e=o.RG16F),$===o.UNSIGNED_BYTE&&(_e=o.RG8),$===o.UNSIGNED_SHORT&&De&&(_e=De.RG16_EXT),$===o.SHORT&&De&&(_e=De.RG16_SNORM_EXT)),A===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(_e=o.RG8UI),$===o.UNSIGNED_SHORT&&(_e=o.RG16UI),$===o.UNSIGNED_INT&&(_e=o.RG32UI),$===o.BYTE&&(_e=o.RG8I),$===o.SHORT&&(_e=o.RG16I),$===o.INT&&(_e=o.RG32I)),A===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(_e=o.RGB8UI),$===o.UNSIGNED_SHORT&&(_e=o.RGB16UI),$===o.UNSIGNED_INT&&(_e=o.RGB32UI),$===o.BYTE&&(_e=o.RGB8I),$===o.SHORT&&(_e=o.RGB16I),$===o.INT&&(_e=o.RGB32I)),A===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(_e=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(_e=o.RGBA16UI),$===o.UNSIGNED_INT&&(_e=o.RGBA32UI),$===o.BYTE&&(_e=o.RGBA8I),$===o.SHORT&&(_e=o.RGBA16I),$===o.INT&&(_e=o.RGBA32I)),A===o.RGB&&($===o.UNSIGNED_SHORT&&De&&(_e=De.RGB16_EXT),$===o.SHORT&&De&&(_e=De.RGB16_SNORM_EXT),$===o.UNSIGNED_INT_5_9_9_9_REV&&(_e=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(_e=o.R11F_G11F_B10F)),A===o.RGBA){const pe=Pe?ld:Gt.getTransfer(de);$===o.FLOAT&&(_e=o.RGBA32F),$===o.HALF_FLOAT&&(_e=o.RGBA16F),$===o.UNSIGNED_BYTE&&(_e=pe===un?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT&&De&&(_e=De.RGBA16_EXT),$===o.SHORT&&De&&(_e=De.RGBA16_SNORM_EXT),$===o.UNSIGNED_SHORT_4_4_4_4&&(_e=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(_e=o.RGB5_A1)}return(_e===o.R16F||_e===o.R32F||_e===o.RG16F||_e===o.RG32F||_e===o.RGBA16F||_e===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function N(H,A){let $;return H?A===null||A===Sr||A===Ic?$=o.DEPTH24_STENCIL8:A===hr?$=o.DEPTH32F_STENCIL8:A===Fc&&($=o.DEPTH24_STENCIL8,_t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Sr||A===Ic?$=o.DEPTH_COMPONENT24:A===hr?$=o.DEPTH_COMPONENT32F:A===Fc&&($=o.DEPTH_COMPONENT16),$}function w(H,A){return S(H)===!0||H.isFramebufferTexture&&H.minFilter!==gi&&H.minFilter!==Ci?Math.log2(Math.max(A.width,A.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?A.mipmaps.length:1}function C(H){const A=H.target;A.removeEventListener("dispose",C),D(A),A.isVideoTexture&&_.delete(A),A.isHTMLTexture&&v.delete(A)}function b(H){const A=H.target;A.removeEventListener("dispose",b),k(A)}function D(H){const A=a.get(H);if(A.__webglInit===void 0)return;const $=H.source,ae=x.get($);if(ae){const de=ae[A.__cacheKey];de.usedTimes--,de.usedTimes===0&&z(H),Object.keys(ae).length===0&&x.delete($)}a.remove(H)}function z(H){const A=a.get(H);o.deleteTexture(A.__webglTexture);const $=H.source,ae=x.get($);delete ae[A.__cacheKey],c.memory.textures--}function k(H){const A=a.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),a.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(A.__webglFramebuffer[ae]))for(let de=0;de<A.__webglFramebuffer[ae].length;de++)o.deleteFramebuffer(A.__webglFramebuffer[ae][de]);else o.deleteFramebuffer(A.__webglFramebuffer[ae]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[ae])}else{if(Array.isArray(A.__webglFramebuffer))for(let ae=0;ae<A.__webglFramebuffer.length;ae++)o.deleteFramebuffer(A.__webglFramebuffer[ae]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ae=0;ae<A.__webglColorRenderbuffer.length;ae++)A.__webglColorRenderbuffer[ae]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[ae]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=H.textures;for(let ae=0,de=$.length;ae<de;ae++){const Pe=a.get($[ae]);Pe.__webglTexture&&(o.deleteTexture(Pe.__webglTexture),c.memory.textures--),a.remove($[ae])}a.remove(H)}let B=0;function ee(){B=0}function j(){return B}function q(H){B=H}function I(){const H=B;return H>=r.maxTextures&&_t("WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+r.maxTextures),B+=1,H}function G(H){const A=[];return A.push(H.wrapS),A.push(H.wrapT),A.push(H.wrapR||0),A.push(H.magFilter),A.push(H.minFilter),A.push(H.anisotropy),A.push(H.internalFormat),A.push(H.format),A.push(H.type),A.push(H.generateMipmaps),A.push(H.premultiplyAlpha),A.push(H.flipY),A.push(H.unpackAlignment),A.push(H.colorSpace),A.join()}function Y(H,A){const $=a.get(H);if(H.isVideoTexture&&Q(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&$.__version!==H.version){const ae=H.image;if(ae===null)_t("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)_t("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe($,H,A);return}}else H.isExternalTexture&&($.__webglTexture=H.sourceTexture?H.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+A)}function se(H,A){const $=a.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&$.__version!==H.version){Oe($,H,A);return}else H.isExternalTexture&&($.__webglTexture=H.sourceTexture?H.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+A)}function V(H,A){const $=a.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&$.__version!==H.version){Oe($,H,A);return}n.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+A)}function F(H,A){const $=a.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&$.__version!==H.version){tt($,H,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+A)}const K={[G_]:o.REPEAT,[Kr]:o.CLAMP_TO_EDGE,[V_]:o.MIRRORED_REPEAT},Se={[gi]:o.NEAREST,[BA]:o.NEAREST_MIPMAP_NEAREST,[lh]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[Gm]:o.LINEAR_MIPMAP_NEAREST,[wo]:o.LINEAR_MIPMAP_LINEAR},ge={[VA]:o.NEVER,[YA]:o.ALWAYS,[kA]:o.LESS,[eg]:o.LEQUAL,[XA]:o.EQUAL,[tg]:o.GEQUAL,[WA]:o.GREATER,[qA]:o.NOTEQUAL};function Ne(H,A){if(A.type===hr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ci||A.magFilter===Gm||A.magFilter===lh||A.magFilter===wo||A.minFilter===Ci||A.minFilter===Gm||A.minFilter===lh||A.minFilter===wo)&&_t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(H,o.TEXTURE_WRAP_S,K[A.wrapS]),o.texParameteri(H,o.TEXTURE_WRAP_T,K[A.wrapT]),(H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY)&&o.texParameteri(H,o.TEXTURE_WRAP_R,K[A.wrapR]),o.texParameteri(H,o.TEXTURE_MAG_FILTER,Se[A.magFilter]),o.texParameteri(H,o.TEXTURE_MIN_FILTER,Se[A.minFilter]),A.compareFunction&&(o.texParameteri(H,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(H,o.TEXTURE_COMPARE_FUNC,ge[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gi||A.minFilter!==lh&&A.minFilter!==wo||A.type===hr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(H,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function ne(H,A){let $=!1;H.__webglInit===void 0&&(H.__webglInit=!0,A.addEventListener("dispose",C));const ae=A.source;let de=x.get(ae);de===void 0&&(de={},x.set(ae,de));const Pe=G(A);if(Pe!==H.__cacheKey){de[Pe]===void 0&&(de[Pe]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,$=!0),de[Pe].usedTimes++;const De=de[H.__cacheKey];De!==void 0&&(de[H.__cacheKey].usedTimes--,De.usedTimes===0&&z(A)),H.__cacheKey=Pe,H.__webglTexture=de[Pe].texture}return $}function ve(H,A,$){return Math.floor(Math.floor(H/$)/A)}function Me(H,A,$,ae){const Pe=H.updateRanges;if(Pe.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,$,ae,A.data);else{Pe.sort((ke,Be)=>ke.start-Be.start);let De=0;for(let ke=1;ke<Pe.length;ke++){const Be=Pe[De],ze=Pe[ke],Le=Be.start+Be.count,et=ve(ze.start,A.width,4),at=ve(Be.start,A.width,4);ze.start<=Le+1&&et===at&&ve(ze.start+ze.count-1,A.width,4)===et?Be.count=Math.max(Be.count,ze.start+ze.count-Be.start):(++De,Pe[De]=ze)}Pe.length=De+1;const _e=n.getParameter(o.UNPACK_ROW_LENGTH),pe=n.getParameter(o.UNPACK_SKIP_PIXELS),Fe=n.getParameter(o.UNPACK_SKIP_ROWS);n.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let ke=0,Be=Pe.length;ke<Be;ke++){const ze=Pe[ke],Le=Math.floor(ze.start/4),et=Math.ceil(ze.count/4),at=Le%A.width,W=Math.floor(Le/A.width),Ue=et,xe=1;n.pixelStorei(o.UNPACK_SKIP_PIXELS,at),n.pixelStorei(o.UNPACK_SKIP_ROWS,W),n.texSubImage2D(o.TEXTURE_2D,0,at,W,Ue,xe,$,ae,A.data)}H.clearUpdateRanges(),n.pixelStorei(o.UNPACK_ROW_LENGTH,_e),n.pixelStorei(o.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(o.UNPACK_SKIP_ROWS,Fe)}}function Oe(H,A,$){let ae=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ae=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ae=o.TEXTURE_3D);const de=ne(H,A),Pe=A.source;n.bindTexture(ae,H.__webglTexture,o.TEXTURE0+$);const De=a.get(Pe);if(Pe.version!==De.__version||de===!0){if(n.activeTexture(o.TEXTURE0+$),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const xe=Gt.getPrimaries(Gt.workingColorSpace),Ie=A.colorSpace===Is?null:Gt.getPrimaries(A.colorSpace),He=A.colorSpace===Is||xe===Ie?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}n.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment);let pe=y(A.image,!1,r.maxTextureSize);pe=It(A,pe);const Fe=l.convert(A.format,A.colorSpace),ke=l.convert(A.type);let Be=R(A.internalFormat,Fe,ke,A.normalized,A.colorSpace,A.isVideoTexture);Ne(ae,A);let ze;const Le=A.mipmaps,et=A.isVideoTexture!==!0,at=De.__version===void 0||de===!0,W=Pe.dataReady,Ue=w(A,pe);if(A.isDepthTexture)Be=N(A.format===Do,A.type),at&&(et?n.texStorage2D(o.TEXTURE_2D,1,Be,pe.width,pe.height):n.texImage2D(o.TEXTURE_2D,0,Be,pe.width,pe.height,0,Fe,ke,null));else if(A.isDataTexture)if(Le.length>0){et&&at&&n.texStorage2D(o.TEXTURE_2D,Ue,Be,Le[0].width,Le[0].height);for(let xe=0,Ie=Le.length;xe<Ie;xe++)ze=Le[xe],et?W&&n.texSubImage2D(o.TEXTURE_2D,xe,0,0,ze.width,ze.height,Fe,ke,ze.data):n.texImage2D(o.TEXTURE_2D,xe,Be,ze.width,ze.height,0,Fe,ke,ze.data);A.generateMipmaps=!1}else et?(at&&n.texStorage2D(o.TEXTURE_2D,Ue,Be,pe.width,pe.height),W&&Me(A,pe,Fe,ke)):n.texImage2D(o.TEXTURE_2D,0,Be,pe.width,pe.height,0,Fe,ke,pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){et&&at&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Be,Le[0].width,Le[0].height,pe.depth);for(let xe=0,Ie=Le.length;xe<Ie;xe++)if(ze=Le[xe],A.format!==ja)if(Fe!==null)if(et){if(W)if(A.layerUpdates.size>0){const He=Qy(ze.width,ze.height,A.format,A.type);for(const Re of A.layerUpdates){const Ce=ze.data.subarray(Re*He/ze.data.BYTES_PER_ELEMENT,(Re+1)*He/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,Re,ze.width,ze.height,1,Fe,Ce)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,ze.width,ze.height,pe.depth,Fe,ze.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xe,Be,ze.width,ze.height,pe.depth,0,ze.data,0,0);else _t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?W&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,ze.width,ze.height,pe.depth,Fe,ke,ze.data):n.texImage3D(o.TEXTURE_2D_ARRAY,xe,Be,ze.width,ze.height,pe.depth,0,Fe,ke,ze.data)}else{et&&at&&n.texStorage2D(o.TEXTURE_2D,Ue,Be,Le[0].width,Le[0].height);for(let xe=0,Ie=Le.length;xe<Ie;xe++)ze=Le[xe],A.format!==ja?Fe!==null?et?W&&n.compressedTexSubImage2D(o.TEXTURE_2D,xe,0,0,ze.width,ze.height,Fe,ze.data):n.compressedTexImage2D(o.TEXTURE_2D,xe,Be,ze.width,ze.height,0,ze.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?W&&n.texSubImage2D(o.TEXTURE_2D,xe,0,0,ze.width,ze.height,Fe,ke,ze.data):n.texImage2D(o.TEXTURE_2D,xe,Be,ze.width,ze.height,0,Fe,ke,ze.data)}else if(A.isDataArrayTexture)if(et){if(at&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Be,pe.width,pe.height,pe.depth),W)if(A.layerUpdates.size>0){const xe=Qy(pe.width,pe.height,A.format,A.type);for(const Ie of A.layerUpdates){const He=pe.data.subarray(Ie*xe/pe.data.BYTES_PER_ELEMENT,(Ie+1)*xe/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ie,pe.width,pe.height,1,Fe,ke,He)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Fe,ke,pe.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Be,pe.width,pe.height,pe.depth,0,Fe,ke,pe.data);else if(A.isData3DTexture)et?(at&&n.texStorage3D(o.TEXTURE_3D,Ue,Be,pe.width,pe.height,pe.depth),W&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Fe,ke,pe.data)):n.texImage3D(o.TEXTURE_3D,0,Be,pe.width,pe.height,pe.depth,0,Fe,ke,pe.data);else if(A.isFramebufferTexture){if(at)if(et)n.texStorage2D(o.TEXTURE_2D,Ue,Be,pe.width,pe.height);else{let xe=pe.width,Ie=pe.height;for(let He=0;He<Ue;He++)n.texImage2D(o.TEXTURE_2D,He,Be,xe,Ie,0,Fe,ke,null),xe>>=1,Ie>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in o){const xe=o.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),pe.parentNode!==xe){xe.appendChild(pe),v.add(A),xe.onpaint=Ie=>{const He=Ie.changedElements;for(const Re of v)He.includes(Re.image)&&(Re.needsUpdate=!0)},xe.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,pe);else{const He=o.RGBA,Re=o.RGBA,Ce=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,He,Re,Ce,pe)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Le.length>0){if(et&&at){const xe=dt(Le[0]);n.texStorage2D(o.TEXTURE_2D,Ue,Be,xe.width,xe.height)}for(let xe=0,Ie=Le.length;xe<Ie;xe++)ze=Le[xe],et?W&&n.texSubImage2D(o.TEXTURE_2D,xe,0,0,Fe,ke,ze):n.texImage2D(o.TEXTURE_2D,xe,Be,Fe,ke,ze);A.generateMipmaps=!1}else if(et){if(at){const xe=dt(pe);n.texStorage2D(o.TEXTURE_2D,Ue,Be,xe.width,xe.height)}W&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,ke,pe)}else n.texImage2D(o.TEXTURE_2D,0,Be,Fe,ke,pe);S(A)&&U(ae),De.__version=Pe.version,A.onUpdate&&A.onUpdate(A)}H.__version=A.version}function tt(H,A,$){if(A.image.length!==6)return;const ae=ne(H,A),de=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,H.__webglTexture,o.TEXTURE0+$);const Pe=a.get(de);if(de.version!==Pe.__version||ae===!0){n.activeTexture(o.TEXTURE0+$);const De=Gt.getPrimaries(Gt.workingColorSpace),_e=A.colorSpace===Is?null:Gt.getPrimaries(A.colorSpace),pe=A.colorSpace===Is||De===_e?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Fe=A.isCompressedTexture||A.image[0].isCompressedTexture,ke=A.image[0]&&A.image[0].isDataTexture,Be=[];for(let Re=0;Re<6;Re++)!Fe&&!ke?Be[Re]=y(A.image[Re],!0,r.maxCubemapSize):Be[Re]=ke?A.image[Re].image:A.image[Re],Be[Re]=It(A,Be[Re]);const ze=Be[0],Le=l.convert(A.format,A.colorSpace),et=l.convert(A.type),at=R(A.internalFormat,Le,et,A.normalized,A.colorSpace),W=A.isVideoTexture!==!0,Ue=Pe.__version===void 0||ae===!0,xe=de.dataReady;let Ie=w(A,ze);Ne(o.TEXTURE_CUBE_MAP,A);let He;if(Fe){W&&Ue&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,at,ze.width,ze.height);for(let Re=0;Re<6;Re++){He=Be[Re].mipmaps;for(let Ce=0;Ce<He.length;Ce++){const Te=He[Ce];A.format!==ja?Le!==null?W?xe&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce,0,0,Te.width,Te.height,Le,Te.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce,at,Te.width,Te.height,0,Te.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?xe&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce,0,0,Te.width,Te.height,Le,et,Te.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce,at,Te.width,Te.height,0,Le,et,Te.data)}}}else{if(He=A.mipmaps,W&&Ue){He.length>0&&Ie++;const Re=dt(Be[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,at,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(ke){W?xe&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Be[Re].width,Be[Re].height,Le,et,Be[Re].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,at,Be[Re].width,Be[Re].height,0,Le,et,Be[Re].data);for(let Ce=0;Ce<He.length;Ce++){const ot=He[Ce].image[Re].image;W?xe&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce+1,0,0,ot.width,ot.height,Le,et,ot.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce+1,at,ot.width,ot.height,0,Le,et,ot.data)}}else{W?xe&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Le,et,Be[Re]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,at,Le,et,Be[Re]);for(let Ce=0;Ce<He.length;Ce++){const Te=He[Ce];W?xe&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce+1,0,0,Le,et,Te.image[Re]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce+1,at,Le,et,Te.image[Re])}}}S(A)&&U(o.TEXTURE_CUBE_MAP),Pe.__version=de.version,A.onUpdate&&A.onUpdate(A)}H.__version=A.version}function Ye(H,A,$,ae,de,Pe){const De=l.convert($.format,$.colorSpace),_e=l.convert($.type),pe=R($.internalFormat,De,_e,$.normalized,$.colorSpace),Fe=a.get(A),ke=a.get($);if(ke.__renderTarget=A,!Fe.__hasExternalTextures){const Be=Math.max(1,A.width>>Pe),ze=Math.max(1,A.height>>Pe);de===o.TEXTURE_3D||de===o.TEXTURE_2D_ARRAY?n.texImage3D(de,Pe,pe,Be,ze,A.depth,0,De,_e,null):n.texImage2D(de,Pe,pe,Be,ze,0,De,_e,null)}n.bindFramebuffer(o.FRAMEBUFFER,H),Yt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ae,de,ke.__webglTexture,0,pt(A)):(de===o.TEXTURE_2D||de>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ae,de,ke.__webglTexture,Pe),n.bindFramebuffer(o.FRAMEBUFFER,null)}function xt(H,A,$){if(o.bindRenderbuffer(o.RENDERBUFFER,H),A.depthBuffer){const ae=A.depthTexture,de=ae&&ae.isDepthTexture?ae.type:null,Pe=N(A.stencilBuffer,de),De=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Yt(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt(A),Pe,A.width,A.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,pt(A),Pe,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Pe,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,De,o.RENDERBUFFER,H)}else{const ae=A.textures;for(let de=0;de<ae.length;de++){const Pe=ae[de],De=l.convert(Pe.format,Pe.colorSpace),_e=l.convert(Pe.type),pe=R(Pe.internalFormat,De,_e,Pe.normalized,Pe.colorSpace);Yt(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt(A),pe,A.width,A.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,pt(A),pe,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,pe,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function We(H,A,$){const ae=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,H),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=a.get(A.depthTexture);if(de.__renderTarget=A,(!de.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ae){if(de.__webglInit===void 0&&(de.__webglInit=!0,A.depthTexture.addEventListener("dispose",C)),de.__webglTexture===void 0){de.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),Ne(o.TEXTURE_CUBE_MAP,A.depthTexture);const Fe=l.convert(A.depthTexture.format),ke=l.convert(A.depthTexture.type);let Be;A.depthTexture.format===ns?Be=o.DEPTH_COMPONENT24:A.depthTexture.format===Do&&(Be=o.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Be,A.width,A.height,0,Fe,ke,null)}}else Y(A.depthTexture,0);const Pe=de.__webglTexture,De=pt(A),_e=ae?o.TEXTURE_CUBE_MAP_POSITIVE_X+$:o.TEXTURE_2D,pe=A.depthTexture.format===Do?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===ns)Yt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,_e,Pe,0,De):o.framebufferTexture2D(o.FRAMEBUFFER,pe,_e,Pe,0);else if(A.depthTexture.format===Do)Yt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,_e,Pe,0,De):o.framebufferTexture2D(o.FRAMEBUFFER,pe,_e,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(H){const A=a.get(H),$=H.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==H.depthTexture){const ae=H.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ae){const de=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ae.removeEventListener("dispose",de)};ae.addEventListener("dispose",de),A.__depthDisposeCallback=de}A.__boundDepthTexture=ae}if(H.depthTexture&&!A.__autoAllocateDepthBuffer)if($)for(let ae=0;ae<6;ae++)We(A.__webglFramebuffer[ae],H,ae);else{const ae=H.texture.mipmaps;ae&&ae.length>0?We(A.__webglFramebuffer[0],H,0):We(A.__webglFramebuffer,H,0)}else if($){A.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[ae]),A.__webglDepthbuffer[ae]===void 0)A.__webglDepthbuffer[ae]=o.createRenderbuffer(),xt(A.__webglDepthbuffer[ae],H,!1);else{const de=H.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=A.__webglDepthbuffer[ae];o.bindRenderbuffer(o.RENDERBUFFER,Pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,Pe)}}else{const ae=H.texture.mipmaps;if(ae&&ae.length>0?n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),xt(A.__webglDepthbuffer,H,!1);else{const de=H.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,Pe)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function ct(H,A,$){const ae=a.get(H);A!==void 0&&Ye(ae.__webglFramebuffer,H,H.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&it(H)}function ft(H){const A=H.texture,$=a.get(H),ae=a.get(A);H.addEventListener("dispose",b);const de=H.textures,Pe=H.isWebGLCubeRenderTarget===!0,De=de.length>1;if(De||(ae.__webglTexture===void 0&&(ae.__webglTexture=o.createTexture()),ae.__version=A.version,c.memory.textures++),Pe){$.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[_e]=[];for(let pe=0;pe<A.mipmaps.length;pe++)$.__webglFramebuffer[_e][pe]=o.createFramebuffer()}else $.__webglFramebuffer[_e]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let _e=0;_e<A.mipmaps.length;_e++)$.__webglFramebuffer[_e]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(De)for(let _e=0,pe=de.length;_e<pe;_e++){const Fe=a.get(de[_e]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=o.createTexture(),c.memory.textures++)}if(H.samples>0&&Yt(H)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _e=0;_e<de.length;_e++){const pe=de[_e];$.__webglColorRenderbuffer[_e]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[_e]);const Fe=l.convert(pe.format,pe.colorSpace),ke=l.convert(pe.type),Be=R(pe.internalFormat,Fe,ke,pe.normalized,pe.colorSpace,H.isXRRenderTarget===!0),ze=pt(H);o.renderbufferStorageMultisample(o.RENDERBUFFER,ze,Be,H.width,H.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.RENDERBUFFER,$.__webglColorRenderbuffer[_e])}o.bindRenderbuffer(o.RENDERBUFFER,null),H.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),xt($.__webglDepthRenderbuffer,H,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Pe){n.bindTexture(o.TEXTURE_CUBE_MAP,ae.__webglTexture),Ne(o.TEXTURE_CUBE_MAP,A);for(let _e=0;_e<6;_e++)if(A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)Ye($.__webglFramebuffer[_e][pe],H,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,pe);else Ye($.__webglFramebuffer[_e],H,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);S(A)&&U(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let _e=0,pe=de.length;_e<pe;_e++){const Fe=de[_e],ke=a.get(Fe);let Be=o.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Be=H.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Be,ke.__webglTexture),Ne(Be,Fe),Ye($.__webglFramebuffer,H,Fe,o.COLOR_ATTACHMENT0+_e,Be,0),S(Fe)&&U(Be)}n.unbindTexture()}else{let _e=o.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(_e=H.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(_e,ae.__webglTexture),Ne(_e,A),A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)Ye($.__webglFramebuffer[pe],H,A,o.COLOR_ATTACHMENT0,_e,pe);else Ye($.__webglFramebuffer,H,A,o.COLOR_ATTACHMENT0,_e,0);S(A)&&U(_e),n.unbindTexture()}H.depthBuffer&&it(H)}function ce(H){const A=H.textures;for(let $=0,ae=A.length;$<ae;$++){const de=A[$];if(S(de)){const Pe=O(H),De=a.get(de).__webglTexture;n.bindTexture(Pe,De),U(Pe),n.unbindTexture()}}}const Ft=[],qt=[];function jt(H){if(H.samples>0){if(Yt(H)===!1){const A=H.textures,$=H.width,ae=H.height;let de=o.COLOR_BUFFER_BIT;const Pe=H.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=a.get(H),_e=A.length>1;if(_e)for(let Fe=0;Fe<A.length;Fe++)n.bindFramebuffer(o.FRAMEBUFFER,De.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,De.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const pe=H.texture.mipmaps;pe&&pe.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(de|=o.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(de|=o.STENCIL_BUFFER_BIT)),_e){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,De.__webglColorRenderbuffer[Fe]);const ke=a.get(A[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ke,0)}o.blitFramebuffer(0,0,$,ae,0,0,$,ae,de,o.NEAREST),p===!0&&(Ft.length=0,qt.length=0,Ft.push(o.COLOR_ATTACHMENT0+Fe),H.depthBuffer&&H.resolveDepthBuffer===!1&&(Ft.push(Pe),qt.push(Pe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ft))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_e)for(let Fe=0;Fe<A.length;Fe++){n.bindFramebuffer(o.FRAMEBUFFER,De.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,De.__webglColorRenderbuffer[Fe]);const ke=a.get(A[Fe]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,De.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,ke,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&p){const A=H.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function pt(H){return Math.min(r.maxSamples,H.samples)}function Yt(H){const A=a.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Q(H){const A=c.render.frame;_.get(H)!==A&&(_.set(H,A),H.update())}function It(H,A){const $=H.colorSpace,ae=H.format,de=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||$!==od&&$!==Is&&(Gt.getTransfer($)===un?(ae!==ja||de!==za)&&_t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",$)),A}function dt(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(d.width=H.naturalWidth||H.width,d.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(d.width=H.displayWidth,d.height=H.displayHeight):(d.width=H.width,d.height=H.height),d}this.allocateTextureUnit=I,this.resetTextureUnits=ee,this.getTextureUnits=j,this.setTextureUnits=q,this.setTexture2D=Y,this.setTexture2DArray=se,this.setTexture3D=V,this.setTextureCube=F,this.rebindTextures=ct,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function vD(o,e){function n(a,r=Is){let l;const c=Gt.getTransfer(r);if(a===za)return o.UNSIGNED_BYTE;if(a===K0)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Q0)return o.UNSIGNED_SHORT_5_5_5_1;if(a===dE)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===pE)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===fE)return o.BYTE;if(a===hE)return o.SHORT;if(a===Fc)return o.UNSIGNED_SHORT;if(a===Z0)return o.INT;if(a===Sr)return o.UNSIGNED_INT;if(a===hr)return o.FLOAT;if(a===ts)return o.HALF_FLOAT;if(a===mE)return o.ALPHA;if(a===_E)return o.RGB;if(a===ja)return o.RGBA;if(a===ns)return o.DEPTH_COMPONENT;if(a===Do)return o.DEPTH_STENCIL;if(a===gE)return o.RED;if(a===J0)return o.RED_INTEGER;if(a===Go)return o.RG;if(a===$0)return o.RG_INTEGER;if(a===j0)return o.RGBA_INTEGER;if(a===Wh||a===qh||a===Yh||a===Zh)if(c===un)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Wh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===qh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Yh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Zh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Wh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===qh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Yh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Zh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===k_||a===X_||a===W_||a===q_)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===k_)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===X_)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===W_)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===q_)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Y_||a===Z_||a===K_||a===Q_||a===J_||a===rd||a===$_)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Y_||a===Z_)return c===un?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===K_)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Q_)return l.COMPRESSED_R11_EAC;if(a===J_)return l.COMPRESSED_SIGNED_R11_EAC;if(a===rd)return l.COMPRESSED_RG11_EAC;if(a===$_)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===j_||a===e0||a===t0||a===n0||a===i0||a===a0||a===r0||a===s0||a===o0||a===l0||a===u0||a===c0||a===f0||a===h0)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===j_)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===e0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===t0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===n0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===i0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===a0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===r0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===s0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===o0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===l0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===u0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===c0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===f0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===h0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===d0||a===p0||a===m0)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===d0)return c===un?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===p0)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===m0)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_0||a===g0||a===sd||a===v0)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===_0)return l.COMPRESSED_RED_RGTC1_EXT;if(a===g0)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===sd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===v0)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ic?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const xD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SD=`
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

}`;class yD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new RE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new er({vertexShader:xD,fragmentShader:SD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yr(new Jc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MD extends qo{constructor(e,n){super();const a=this;let r=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,v=null,g=null,x=null,M=null;const T=typeof XRWebGLBinding<"u",y=new yD,S={},U=n.getContextAttributes();let O=null,R=null;const N=[],w=[],C=new Wt;let b=null;const D=new Ja;D.viewport=new In;const z=new Ja;z.viewport=new In;const k=[D,z],B=new NR;let ee=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ve=N[ne];return ve===void 0&&(ve=new Km,N[ne]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ne){let ve=N[ne];return ve===void 0&&(ve=new Km,N[ne]=ve),ve.getGripSpace()},this.getHand=function(ne){let ve=N[ne];return ve===void 0&&(ve=new Km,N[ne]=ve),ve.getHandSpace()};function q(ne){const ve=w.indexOf(ne.inputSource);if(ve===-1)return;const Me=N[ve];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,d||c),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function I(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",G);for(let ne=0;ne<N.length;ne++){const ve=w[ne];ve!==null&&(w[ne]=null,N[ne].disconnect(ve))}ee=null,j=null,y.reset();for(const ne in S)delete S[ne];e.setRenderTarget(O),x=null,g=null,v=null,r=null,R=null,Ne.stop(),a.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,a.isPresenting===!0&&_t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,a.isPresenting===!0&&_t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(r,n)),v},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(O=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",I),r.addEventListener("inputsourceschange",G),U.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Oe=null,tt=null;U.depth&&(tt=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=U.stencil?Do:ns,Oe=U.stencil?Ic:Sr);const Ye={colorFormat:n.RGBA8,depthFormat:tt,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(Ye),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new gr(g.textureWidth,g.textureHeight,{format:ja,type:za,depthTexture:new ou(g.textureWidth,g.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(r,n,Me),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new gr(x.framebufferWidth,x.framebufferHeight,{format:ja,type:za,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await r.requestReferenceSpace(f),Ne.setContext(r),Ne.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(ne){for(let ve=0;ve<ne.removed.length;ve++){const Me=ne.removed[ve],Oe=w.indexOf(Me);Oe>=0&&(w[Oe]=null,N[Oe].disconnect(Me))}for(let ve=0;ve<ne.added.length;ve++){const Me=ne.added[ve];let Oe=w.indexOf(Me);if(Oe===-1){for(let Ye=0;Ye<N.length;Ye++)if(Ye>=w.length){w.push(Me),Oe=Ye;break}else if(w[Ye]===null){w[Ye]=Me,Oe=Ye;break}if(Oe===-1)break}const tt=N[Oe];tt&&tt.connect(Me)}}const Y=new he,se=new he;function V(ne,ve,Me){Y.setFromMatrixPosition(ve.matrixWorld),se.setFromMatrixPosition(Me.matrixWorld);const Oe=Y.distanceTo(se),tt=ve.projectionMatrix.elements,Ye=Me.projectionMatrix.elements,xt=tt[14]/(tt[10]-1),We=tt[14]/(tt[10]+1),it=(tt[9]+1)/tt[5],ct=(tt[9]-1)/tt[5],ft=(tt[8]-1)/tt[0],ce=(Ye[8]+1)/Ye[0],Ft=xt*ft,qt=xt*ce,jt=Oe/(-ft+ce),pt=jt*-ft;if(ve.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(pt),ne.translateZ(jt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),tt[10]===-1)ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Yt=xt+jt,Q=We+jt,It=Ft-pt,dt=qt+(Oe-pt),H=it*We/Q*Yt,A=ct*We/Q*Yt;ne.projectionMatrix.makePerspective(It,dt,H,A,Yt,Q),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function F(ne,ve){ve===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ve.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let ve=ne.near,Me=ne.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),B.near=z.near=D.near=ve,B.far=z.far=D.far=Me,(ee!==B.near||j!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),ee=B.near,j=B.far),B.layers.mask=ne.layers.mask|6,D.layers.mask=B.layers.mask&-5,z.layers.mask=B.layers.mask&-3;const Oe=ne.parent,tt=B.cameras;F(B,Oe);for(let Ye=0;Ye<tt.length;Ye++)F(tt[Ye],Oe);tt.length===2?V(B,D,z):B.projectionMatrix.copy(D.projectionMatrix),K(ne,B,Oe)};function K(ne,ve,Me){Me===null?ne.matrix.copy(ve.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ve.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=x0*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(g===null&&x===null))return p},this.setFoveation=function(ne){p=ne,g!==null&&(g.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(B)},this.getCameraTexture=function(ne){return S[ne]};let Se=null;function ge(ne,ve){if(_=ve.getViewerPose(d||c),M=ve,_!==null){const Me=_.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let Oe=!1;Me.length!==B.cameras.length&&(B.cameras.length=0,Oe=!0);for(let We=0;We<Me.length;We++){const it=Me[We];let ct=null;if(x!==null)ct=x.getViewport(it);else{const ce=v.getViewSubImage(g,it);ct=ce.viewport,We===0&&(e.setRenderTargetTextures(R,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(R))}let ft=k[We];ft===void 0&&(ft=new Ja,ft.layers.enable(We),ft.viewport=new In,k[We]=ft),ft.matrix.fromArray(it.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(it.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(ct.x,ct.y,ct.width,ct.height),We===0&&(B.matrix.copy(ft.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Oe===!0&&B.cameras.push(ft)}const tt=r.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const We=v.getDepthInformation(Me[0]);We&&We.isValid&&We.texture&&y.init(We,r.renderState)}if(tt&&tt.includes("camera-access")&&T){e.state.unbindTexture(),v=a.getBinding();for(let We=0;We<Me.length;We++){const it=Me[We].camera;if(it){let ct=S[it];ct||(ct=new RE,S[it]=ct);const ft=v.getCameraImage(it);ct.sourceTexture=ft}}}}for(let Me=0;Me<N.length;Me++){const Oe=w[Me],tt=N[Me];Oe!==null&&tt!==void 0&&tt.update(Oe,ve,d||c)}Se&&Se(ne,ve),ve.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ve}),M=null}const Ne=new DE;Ne.setAnimationLoop(ge),this.setAnimationLoop=function(ne){Se=ne},this.dispose=function(){}}}const ED=new Qn,IE=new vt;IE.set(-1,0,0,0,1,0,0,0,1);function TD(o,e){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,CE(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function r(y,S,U,O,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),v(y,S)):S.isMeshPhongMaterial?(l(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),g(y,S),S.isMeshPhysicalMaterial&&x(y,S,R)):S.isMeshMatcapMaterial?(l(y,S),M(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),T(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?p(y,S,U,O):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Ki&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Ki&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const U=e.get(S),O=U.envMap,R=U.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(ED.makeRotationFromEuler(R)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(IE),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,U,O){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*U,y.scale.value=O*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,U){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Ki&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const U=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function bD(o,e,n,a){let r={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,N){const w=N.program;a.uniformBlockBinding(R,w)}function d(R,N){let w=r[R.id];w===void 0&&(y(R),w=_(R),r[R.id]=w,R.addEventListener("dispose",U));const C=N.program;a.updateUBOMapping(R,C);const b=e.render.frame;l[R.id]!==b&&(g(R),l[R.id]=b)}function _(R){const N=v();R.__bindingPointIndex=N;const w=o.createBuffer(),C=R.__size,b=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,C,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,w),w}function v(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const N=r[R.id],w=R.uniforms,C=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let b=0,D=w.length;b<D;b++){const z=w[b];if(Array.isArray(z))for(let k=0,B=z.length;k<B;k++)x(z[k],b,k,C);else x(z,b,0,C)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(R,N,w,C){if(T(R,N,w,C)===!0){const b=R.__offset,D=R.value;if(Array.isArray(D)){let z=0;for(let k=0;k<D.length;k++){const B=D[k],ee=S(B);M(B,R.__data,z),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(D,R.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,R.__data)}}function M(R,N,w){typeof R=="number"||typeof R=="boolean"?N[0]=R:R.isMatrix3?(N[0]=R.elements[0],N[1]=R.elements[1],N[2]=R.elements[2],N[3]=0,N[4]=R.elements[3],N[5]=R.elements[4],N[6]=R.elements[5],N[7]=0,N[8]=R.elements[6],N[9]=R.elements[7],N[10]=R.elements[8],N[11]=0):ArrayBuffer.isView(R)?N.set(new R.constructor(R.buffer,R.byteOffset,N.length)):R.toArray(N,w)}function T(R,N,w,C){const b=R.value,D=N+"_"+w;if(C[D]===void 0)return typeof b=="number"||typeof b=="boolean"?C[D]=b:ArrayBuffer.isView(b)?C[D]=b.slice():C[D]=b.clone(),!0;{const z=C[D];if(typeof b=="number"||typeof b=="boolean"){if(z!==b)return C[D]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(z.equals(b)===!1)return z.copy(b),!0}}return!1}function y(R){const N=R.uniforms;let w=0;const C=16;for(let D=0,z=N.length;D<z;D++){const k=Array.isArray(N[D])?N[D]:[N[D]];for(let B=0,ee=k.length;B<ee;B++){const j=k[B],q=Array.isArray(j.value)?j.value:[j.value];for(let I=0,G=q.length;I<G;I++){const Y=q[I],se=S(Y),V=w%C,F=V%se.boundary,K=V+F;w+=F,K!==0&&C-K<se.storage&&(w+=C-K),j.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=se.storage}}}const b=w%C;return b>0&&(w+=C-b),R.__size=w,R.__cache={},this}function S(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?_t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(N.boundary=16,N.storage=R.byteLength):_t("WebGLRenderer: Unsupported uniform value type.",R),N}function U(R){const N=R.target;N.removeEventListener("dispose",U);const w=c.indexOf(N.__bindingPointIndex);c.splice(w,1),o.deleteBuffer(r[N.id]),delete r[N.id],delete l[N.id]}function O(){for(const R in r)o.deleteBuffer(r[R]);c=[],r={},l={}}return{bind:p,update:d,dispose:O}}const AD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let or=null;function RD(){return or===null&&(or=new xR(AD,16,16,Go,ts),or.name="DFG_LUT",or.minFilter=Ci,or.magFilter=Ci,or.wrapS=Kr,or.wrapT=Kr,or.generateMipmaps=!1,or.needsUpdate=!0),or}class CD{constructor(e={}){const{canvas:n=KA(),context:a=null,depth:r=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=za}=e;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=c;const T=x,y=new Set([j0,$0,J0]),S=new Set([za,Sr,Fc,Ic,K0,Q0]),U=new Uint32Array(4),O=new Int32Array(4),R=new he;let N=null,w=null;const C=[],b=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let k=!1,B=null,ee=null,j=null,q=null;this._outputColorSpace=Pa;let I=0,G=0,Y=null,se=-1,V=null;const F=new In,K=new In;let Se=null;const ge=new Jt(0);let Ne=0,ne=n.width,ve=n.height,Me=1,Oe=null,tt=null;const Ye=new In(0,0,ne,ve),xt=new In(0,0,ne,ve);let We=!1;const it=new bE;let ct=!1,ft=!1;const ce=new Qn,Ft=new he,qt=new In,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Yt(){return Y===null?Me:1}let Q=a;function It(L,J){return n.getContext(L,J)}try{const L={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Y0}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",st,!1),Q===null){const J="webgl2";if(Q=It(J,L),Q===null)throw It(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw Xt("WebGLRenderer: "+L.message),L}let dt,H,A,$,ae,de,Pe,De,_e,pe,Fe,ke,Be,ze,Le,et,at,W,Ue,xe,Ie,He,Re;function Ce(){dt=new R3(Q),dt.init(),Ie=new vD(Q,dt),H=new x3(Q,dt,e,Ie),A=new _D(Q,dt),H.reversedDepthBuffer&&g&&A.buffers.depth.setReversed(!0),ee=Q.createFramebuffer(),j=Q.createFramebuffer(),q=Q.createFramebuffer(),$=new D3(Q),ae=new nD,de=new gD(Q,dt,A,ae,H,Ie,$),Pe=new A3(z),De=new OR(Q),He=new g3(Q,De),_e=new C3(Q,De,$,He),pe=new N3(Q,_e,De,He,$),W=new U3(Q,H,de),Le=new S3(ae),Fe=new tD(z,Pe,dt,H,He,Le),ke=new TD(z,ae),Be=new aD,ze=new cD(dt),at=new _3(z,Pe,A,pe,M,p),et=new mD(z,pe,H),Re=new bD(Q,$,H,A),Ue=new v3(Q,dt,$),xe=new w3(Q,dt,$),$.programs=Fe.programs,z.capabilities=H,z.extensions=dt,z.properties=ae,z.renderLists=Be,z.shadowMap=et,z.state=A,z.info=$}Ce(),T!==za&&(D=new O3(T,n.width,n.height,f,r,l));const Te=new MD(z,Q);this.xr=Te,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const L=dt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=dt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(L){L!==void 0&&(Me=L,this.setSize(ne,ve,!1))},this.getSize=function(L){return L.set(ne,ve)},this.setSize=function(L,J,le=!0){if(Te.isPresenting){_t("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=L,ve=J,n.width=Math.floor(L*Me),n.height=Math.floor(J*Me),le===!0&&(n.style.width=L+"px",n.style.height=J+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(ne*Me,ve*Me).floor()},this.setDrawingBufferSize=function(L,J,le){ne=L,ve=J,Me=le,n.width=Math.floor(L*le),n.height=Math.floor(J*le),this.setViewport(0,0,L,J)},this.setEffects=function(L){if(T===za){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let J=0;J<L.length;J++)if(L[J].isOutputPass===!0){_t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(F)},this.getViewport=function(L){return L.copy(Ye)},this.setViewport=function(L,J,le,ie){L.isVector4?Ye.set(L.x,L.y,L.z,L.w):Ye.set(L,J,le,ie),A.viewport(F.copy(Ye).multiplyScalar(Me).round())},this.getScissor=function(L){return L.copy(xt)},this.setScissor=function(L,J,le,ie){L.isVector4?xt.set(L.x,L.y,L.z,L.w):xt.set(L,J,le,ie),A.scissor(K.copy(xt).multiplyScalar(Me).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(L){A.setScissorTest(We=L)},this.setOpaqueSort=function(L){Oe=L},this.setTransparentSort=function(L){tt=L},this.getClearColor=function(L){return L.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(L=!0,J=!0,le=!0){let ie=0;if(L){let re=!1;if(Y!==null){const Ge=Y.texture.format;re=y.has(Ge)}if(re){const Ge=Y.texture.type,Xe=S.has(Ge),Ve=at.getClearColor(),Je=at.getClearAlpha(),Ke=Ve.r,lt=Ve.g,Et=Ve.b;Xe?(U[0]=Ke,U[1]=lt,U[2]=Et,U[3]=Je,Q.clearBufferuiv(Q.COLOR,0,U)):(O[0]=Ke,O[1]=lt,O[2]=Et,O[3]=Je,Q.clearBufferiv(Q.COLOR,0,O))}else ie|=Q.COLOR_BUFFER_BIT}J&&(ie|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ie|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&Q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),B=L},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",st,!1),at.dispose(),Be.dispose(),ze.dispose(),ae.dispose(),Pe.dispose(),pe.dispose(),He.dispose(),Re.dispose(),Fe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",St),Te.removeEventListener("sessionend",yt),Mt.stop()};function ot(L){L.preventDefault(),Uy("WebGLRenderer: Context Lost."),k=!0}function we(){Uy("WebGLRenderer: Context Restored."),k=!1;const L=$.autoReset,J=et.enabled,le=et.autoUpdate,ie=et.needsUpdate,re=et.type;Ce(),$.autoReset=L,et.enabled=J,et.autoUpdate=le,et.needsUpdate=ie,et.type=re}function st(L){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Qe(L){const J=L.target;J.removeEventListener("dispose",Qe),mt(J)}function mt(L){Rn(L),ae.remove(L)}function Rn(L){const J=ae.get(L).programs;J!==void 0&&(J.forEach(function(le){Fe.releaseProgram(le)}),L.isShaderMaterial&&Fe.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,le,ie,re,Ge){J===null&&(J=jt);const Xe=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ve=En(L,J,le,ie,re);A.setMaterial(ie,Xe);let Je=le.index,Ke=1;if(ie.wireframe===!0){if(Je=_e.getWireframeAttribute(le),Je===void 0)return;Ke=2}const lt=le.drawRange,Et=le.attributes.position;let rt=lt.start*Ke,Zt=(lt.start+lt.count)*Ke;Ge!==null&&(rt=Math.max(rt,Ge.start*Ke),Zt=Math.min(Zt,(Ge.start+Ge.count)*Ke)),Je!==null?(rt=Math.max(rt,0),Zt=Math.min(Zt,Je.count)):Et!=null&&(rt=Math.max(rt,0),Zt=Math.min(Zt,Et.count));const Cn=Zt-rt;if(Cn<0||Cn===1/0)return;He.setup(re,ie,Ve,le,Je);let _n,nn=Ue;if(Je!==null&&(_n=De.get(Je),nn=xe,nn.setIndex(_n)),re.isMesh)ie.wireframe===!0?(A.setLineWidth(ie.wireframeLinewidth*Yt()),nn.setMode(Q.LINES)):nn.setMode(Q.TRIANGLES);else if(re.isLine){let an=ie.linewidth;an===void 0&&(an=1),A.setLineWidth(an*Yt()),re.isLineSegments?nn.setMode(Q.LINES):re.isLineLoop?nn.setMode(Q.LINE_LOOP):nn.setMode(Q.LINE_STRIP)}else re.isPoints?nn.setMode(Q.POINTS):re.isSprite&&nn.setMode(Q.TRIANGLES);if(re.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))nn.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const an=re._multiDrawStarts,Ze=re._multiDrawCounts,Si=re._multiDrawCount,Lt=Je?De.get(Je).bytesPerElement:1,$n=ae.get(ie).currentProgram.getUniforms();for(let ta=0;ta<Si;ta++)$n.setValue(Q,"_gl_DrawID",ta),nn.render(an[ta]/Lt,Ze[ta])}else if(re.isInstancedMesh)nn.renderInstances(rt,Cn,re.count);else if(le.isInstancedBufferGeometry){const an=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ze=Math.min(le.instanceCount,an);nn.renderInstances(rt,Cn,Ze)}else nn.render(rt,Cn)};function bt(L,J,le){L.transparent===!0&&L.side===Yr&&L.forceSinglePass===!1?(L.side=Ki,L.needsUpdate=!0,yn(L,J,le),L.side=Ys,L.needsUpdate=!0,yn(L,J,le),L.side=Yr):yn(L,J,le)}this.compile=function(L,J,le=null){le===null&&(le=L),w=ze.get(le),w.init(J),b.push(w),le.traverseVisible(function(re){re.isLight&&re.layers.test(J.layers)&&(w.pushLight(re),re.castShadow&&w.pushShadow(re))}),L!==le&&L.traverseVisible(function(re){re.isLight&&re.layers.test(J.layers)&&(w.pushLight(re),re.castShadow&&w.pushShadow(re))}),w.setupLights();const ie=new Set;return L.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ge=re.material;if(Ge)if(Array.isArray(Ge))for(let Xe=0;Xe<Ge.length;Xe++){const Ve=Ge[Xe];bt(Ve,le,re),ie.add(Ve)}else bt(Ge,le,re),ie.add(Ge)}),w=b.pop(),ie},this.compileAsync=function(L,J,le=null){const ie=this.compile(L,J,le);return new Promise(re=>{function Ge(){if(ie.forEach(function(Xe){ae.get(Xe).currentProgram.isReady()&&ie.delete(Xe)}),ie.size===0){re(L);return}setTimeout(Ge,10)}dt.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let cn=null;function mn(L){cn&&cn(L)}function St(){Mt.stop()}function yt(){Mt.start()}const Mt=new DE;Mt.setAnimationLoop(mn),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(L){cn=L,Te.setAnimationLoop(L),L===null?Mt.stop():Mt.start()},Te.addEventListener("sessionstart",St),Te.addEventListener("sessionend",yt),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;B!==null&&B.renderStart(L,J);const le=Te.enabled===!0&&Te.isPresenting===!0,ie=D!==null&&(Y===null||le)&&D.begin(z,Y);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(J),J=Te.getCamera()),L.isScene===!0&&L.onBeforeRender(z,L,J,Y),w=ze.get(L,b.length),w.init(J),w.state.textureUnits=de.getTextureUnits(),b.push(w),ce.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),it.setFromProjectionMatrix(ce,dr,J.reversedDepth),ft=this.localClippingEnabled,ct=Le.init(this.clippingPlanes,ft),N=Be.get(L,C.length),N.init(),C.push(N),Te.enabled===!0&&Te.isPresenting===!0){const Xe=z.xr.getDepthSensingMesh();Xe!==null&&Jn(Xe,J,-1/0,z.sortObjects)}Jn(L,J,0,z.sortObjects),N.finish(),z.sortObjects===!0&&N.sort(Oe,tt,J.reversedDepth),pt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,pt&&at.addToRenderList(N,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Le.beginShadows();const re=w.state.shadowsArray;if(et.render(re,L,J),ct===!0&&Le.endShadows(),(ie&&D.hasRenderPass())===!1){const Xe=N.opaque,Ve=N.transmissive;if(w.setupLights(),J.isArrayCamera){const Je=J.cameras;if(Ve.length>0)for(let Ke=0,lt=Je.length;Ke<lt;Ke++){const Et=Je[Ke];ai(Xe,Ve,L,Et)}pt&&at.render(L);for(let Ke=0,lt=Je.length;Ke<lt;Ke++){const Et=Je[Ke];fn(N,L,Et,Et.viewport)}}else Ve.length>0&&ai(Xe,Ve,L,J),pt&&at.render(L),fn(N,L,J)}Y!==null&&G===0&&(de.updateMultisampleRenderTarget(Y),de.updateRenderTargetMipmap(Y)),ie&&D.end(z),L.isScene===!0&&L.onAfterRender(z,L,J),He.resetDefaultState(),se=-1,V=null,b.pop(),b.length>0?(w=b[b.length-1],de.setTextureUnits(w.state.textureUnits),ct===!0&&Le.setGlobalState(z.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?N=C[C.length-1]:N=null,B!==null&&B.renderEnd()};function Jn(L,J,le,ie){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)le=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLightProbeGrid)w.pushLightProbeGrid(L);else if(L.isLight)w.pushLight(L),L.castShadow&&w.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||it.intersectsSprite(L)){ie&&qt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ce);const Xe=pe.update(L),Ve=L.material;Ve.visible&&N.push(L,Xe,Ve,le,qt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||it.intersectsObject(L))){const Xe=pe.update(L),Ve=L.material;if(ie&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),qt.copy(L.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),qt.copy(Xe.boundingSphere.center)),qt.applyMatrix4(L.matrixWorld).applyMatrix4(ce)),Array.isArray(Ve)){const Je=Xe.groups;for(let Ke=0,lt=Je.length;Ke<lt;Ke++){const Et=Je[Ke],rt=Ve[Et.materialIndex];rt&&rt.visible&&N.push(L,Xe,rt,le,qt.z,Et)}}else Ve.visible&&N.push(L,Xe,Ve,le,qt.z,null)}}const Ge=L.children;for(let Xe=0,Ve=Ge.length;Xe<Ve;Xe++)Jn(Ge[Xe],J,le,ie)}function fn(L,J,le,ie){const{opaque:re,transmissive:Ge,transparent:Xe}=L;w.setupLightsView(le),ct===!0&&Le.setGlobalState(z.clippingPlanes,le),ie&&A.viewport(F.copy(ie)),re.length>0&&ri(re,J,le),Ge.length>0&&ri(Ge,J,le),Xe.length>0&&ri(Xe,J,le),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function ai(L,J,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ie.id]===void 0){const rt=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ie.id]=new gr(1,1,{generateMipmaps:!0,type:rt?ts:za,minFilter:wo,samples:Math.max(4,H.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const Ge=w.state.transmissionRenderTarget[ie.id],Xe=ie.viewport||F;Ge.setSize(Xe.z*z.transmissionResolutionScale,Xe.w*z.transmissionResolutionScale);const Ve=z.getRenderTarget(),Je=z.getActiveCubeFace(),Ke=z.getActiveMipmapLevel();z.setRenderTarget(Ge),z.getClearColor(ge),Ne=z.getClearAlpha(),Ne<1&&z.setClearColor(16777215,.5),z.clear(),pt&&at.render(le);const lt=z.toneMapping;z.toneMapping=_r;const Et=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),w.setupLightsView(ie),ct===!0&&Le.setGlobalState(z.clippingPlanes,ie),ri(L,le,ie),de.updateMultisampleRenderTarget(Ge),de.updateRenderTargetMipmap(Ge),dt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Zt=0,Cn=J.length;Zt<Cn;Zt++){const _n=J[Zt],{object:nn,geometry:an,material:Ze,group:Si}=_n;if(Ze.side===Yr&&nn.layers.test(ie.layers)){const Lt=Ze.side;Ze.side=Ki,Ze.needsUpdate=!0,Sn(nn,le,ie,an,Ze,Si),Ze.side=Lt,Ze.needsUpdate=!0,rt=!0}}rt===!0&&(de.updateMultisampleRenderTarget(Ge),de.updateRenderTargetMipmap(Ge))}z.setRenderTarget(Ve,Je,Ke),z.setClearColor(ge,Ne),Et!==void 0&&(ie.viewport=Et),z.toneMapping=lt}function ri(L,J,le){const ie=J.isScene===!0?J.overrideMaterial:null;for(let re=0,Ge=L.length;re<Ge;re++){const Xe=L[re],{object:Ve,geometry:Je,group:Ke}=Xe;let lt=Xe.material;lt.allowOverride===!0&&ie!==null&&(lt=ie),Ve.layers.test(le.layers)&&Sn(Ve,J,le,Je,lt,Ke)}}function Sn(L,J,le,ie,re,Ge){L.onBeforeRender(z,J,le,ie,re,Ge),L.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(z,J,le,ie,L,Ge),re.transparent===!0&&re.side===Yr&&re.forceSinglePass===!1?(re.side=Ki,re.needsUpdate=!0,z.renderBufferDirect(le,J,ie,re,L,Ge),re.side=Ys,re.needsUpdate=!0,z.renderBufferDirect(le,J,ie,re,L,Ge),re.side=Yr):z.renderBufferDirect(le,J,ie,re,L,Ge),L.onAfterRender(z,J,le,ie,re,Ge)}function yn(L,J,le){J.isScene!==!0&&(J=jt);const ie=ae.get(L),re=w.state.lights,Ge=w.state.shadowsArray,Xe=re.state.version,Ve=Fe.getParameters(L,re.state,Ge,J,le,w.state.lightProbeGridArray),Je=Fe.getProgramCacheKey(Ve);let Ke=ie.programs;ie.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?J.environment:null,ie.fog=J.fog;const lt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ie.envMap=Pe.get(L.envMap||ie.environment,lt),ie.envMapRotation=ie.environment!==null&&L.envMap===null?J.environmentRotation:L.envMapRotation,Ke===void 0&&(L.addEventListener("dispose",Qe),Ke=new Map,ie.programs=Ke);let Et=Ke.get(Je);if(Et!==void 0){if(ie.currentProgram===Et&&ie.lightsStateVersion===Xe)return hi(L,Ve),Et}else Ve.uniforms=Fe.getUniforms(L),B!==null&&L.isNodeMaterial&&B.build(L,le,Ve),L.onBeforeCompile(Ve,z),Et=Fe.acquireProgram(Ve,Je),Ke.set(Je,Et),ie.uniforms=Ve.uniforms;const rt=ie.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=Le.uniform),hi(L,Ve),ie.needsLights=Di(L),ie.lightsStateVersion=Xe,ie.needsLights&&(rt.ambientLightColor.value=re.state.ambient,rt.lightProbe.value=re.state.probe,rt.directionalLights.value=re.state.directional,rt.directionalLightShadows.value=re.state.directionalShadow,rt.spotLights.value=re.state.spot,rt.spotLightShadows.value=re.state.spotShadow,rt.rectAreaLights.value=re.state.rectArea,rt.ltc_1.value=re.state.rectAreaLTC1,rt.ltc_2.value=re.state.rectAreaLTC2,rt.pointLights.value=re.state.point,rt.pointLightShadows.value=re.state.pointShadow,rt.hemisphereLights.value=re.state.hemi,rt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,rt.spotLightMatrix.value=re.state.spotLightMatrix,rt.spotLightMap.value=re.state.spotLightMap,rt.pointShadowMatrix.value=re.state.pointShadowMatrix),ie.lightProbeGrid=w.state.lightProbeGridArray.length>0,ie.currentProgram=Et,ie.uniformsList=null,Et}function Mn(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=Kh.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function hi(L,J){const le=ae.get(L);le.outputColorSpace=J.outputColorSpace,le.batching=J.batching,le.batchingColor=J.batchingColor,le.instancing=J.instancing,le.instancingColor=J.instancingColor,le.instancingMorph=J.instancingMorph,le.skinning=J.skinning,le.morphTargets=J.morphTargets,le.morphNormals=J.morphNormals,le.morphColors=J.morphColors,le.morphTargetsCount=J.morphTargetsCount,le.numClippingPlanes=J.numClippingPlanes,le.numIntersection=J.numClipIntersection,le.vertexAlphas=J.vertexAlphas,le.vertexTangents=J.vertexTangents,le.toneMapping=J.toneMapping}function Ta(L,J){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;R.setFromMatrixPosition(J.matrixWorld);for(let le=0,ie=L.length;le<ie;le++){const re=L[le];if(re.texture!==null&&re.boundingBox.containsPoint(R))return re}return null}function En(L,J,le,ie,re){J.isScene!==!0&&(J=jt),de.resetTextureUnits();const Ge=J.fog,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?J.environment:null,Ve=Y===null?z.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Gt.workingColorSpace,Je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ke=Pe.get(ie.envMap||Xe,Je),lt=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Et=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),rt=!!le.morphAttributes.position,Zt=!!le.morphAttributes.normal,Cn=!!le.morphAttributes.color;let _n=_r;ie.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(_n=z.toneMapping);const nn=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,an=nn!==void 0?nn.length:0,Ze=ae.get(ie),Si=w.state.lights;if(ct===!0&&(ft===!0||L!==V)){const en=L===V&&ie.id===se;Le.setState(ie,L,en)}let Lt=!1;ie.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Si.state.version||Ze.outputColorSpace!==Ve||re.isBatchedMesh&&Ze.batching===!1||!re.isBatchedMesh&&Ze.batching===!0||re.isBatchedMesh&&Ze.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ze.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ze.instancing===!1||!re.isInstancedMesh&&Ze.instancing===!0||re.isSkinnedMesh&&Ze.skinning===!1||!re.isSkinnedMesh&&Ze.skinning===!0||re.isInstancedMesh&&Ze.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ze.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ze.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ze.instancingMorph===!1&&re.morphTexture!==null||Ze.envMap!==Ke||ie.fog===!0&&Ze.fog!==Ge||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Le.numPlanes||Ze.numIntersection!==Le.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==Et||Ze.morphTargets!==rt||Ze.morphNormals!==Zt||Ze.morphColors!==Cn||Ze.toneMapping!==_n||Ze.morphTargetsCount!==an||!!Ze.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,Ze.__version=ie.version);let $n=Ze.currentProgram;Lt===!0&&($n=yn(ie,J,re),B&&ie.isNodeMaterial&&B.onUpdateProgram(ie,$n,Ze));let ta=!1,Va=!1,na=!1;const rn=$n.getUniforms(),wn=Ze.uniforms;if(A.useProgram($n.program)&&(ta=!0,Va=!0,na=!0),ie.id!==se&&(se=ie.id,Va=!0),Ze.needsLights){const en=Ta(w.state.lightProbeGridArray,re);Ze.lightProbeGrid!==en&&(Ze.lightProbeGrid=en,Va=!0)}if(ta||V!==L){A.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),rn.setValue(Q,"projectionMatrix",L.projectionMatrix),rn.setValue(Q,"viewMatrix",L.matrixWorldInverse);const tr=rn.map.cameraPosition;tr!==void 0&&tr.setValue(Q,Ft.setFromMatrixPosition(L.matrixWorld)),H.logarithmicDepthBuffer&&rn.setValue(Q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&rn.setValue(Q,"isOrthographic",L.isOrthographicCamera===!0),V!==L&&(V=L,Va=!0,na=!0)}if(Ze.needsLights&&(Si.state.directionalShadowMap.length>0&&rn.setValue(Q,"directionalShadowMap",Si.state.directionalShadowMap,de),Si.state.spotShadowMap.length>0&&rn.setValue(Q,"spotShadowMap",Si.state.spotShadowMap,de),Si.state.pointShadowMap.length>0&&rn.setValue(Q,"pointShadowMap",Si.state.pointShadowMap,de)),re.isSkinnedMesh){rn.setOptional(Q,re,"bindMatrix"),rn.setOptional(Q,re,"bindMatrixInverse");const en=re.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),rn.setValue(Q,"boneTexture",en.boneTexture,de))}re.isBatchedMesh&&(rn.setOptional(Q,re,"batchingTexture"),rn.setValue(Q,"batchingTexture",re._matricesTexture,de),rn.setOptional(Q,re,"batchingIdTexture"),rn.setValue(Q,"batchingIdTexture",re._indirectTexture,de),rn.setOptional(Q,re,"batchingColorTexture"),re._colorsTexture!==null&&rn.setValue(Q,"batchingColorTexture",re._colorsTexture,de));const ka=le.morphAttributes;if((ka.position!==void 0||ka.normal!==void 0||ka.color!==void 0)&&W.update(re,le,$n),(Va||Ze.receiveShadow!==re.receiveShadow)&&(Ze.receiveShadow=re.receiveShadow,rn.setValue(Q,"receiveShadow",re.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&J.environment!==null&&(wn.envMapIntensity.value=J.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=RD()),Va){if(rn.setValue(Q,"toneMappingExposure",z.toneMappingExposure),Ze.needsLights&&Rt(wn,na),Ge&&ie.fog===!0&&ke.refreshFogUniforms(wn,Ge),ke.refreshMaterialUniforms(wn,ie,Me,ve,w.state.transmissionRenderTarget[L.id]),Ze.needsLights&&Ze.lightProbeGrid){const en=Ze.lightProbeGrid;wn.probesSH.value=en.texture,wn.probesMin.value.copy(en.boundingBox.min),wn.probesMax.value.copy(en.boundingBox.max),wn.probesResolution.value.copy(en.resolution)}Kh.upload(Q,Mn(Ze),wn,de)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Kh.upload(Q,Mn(Ze),wn,de),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&rn.setValue(Q,"center",re.center),rn.setValue(Q,"modelViewMatrix",re.modelViewMatrix),rn.setValue(Q,"normalMatrix",re.normalMatrix),rn.setValue(Q,"modelMatrix",re.matrixWorld),ie.uniformsGroups!==void 0){const en=ie.uniformsGroups;for(let tr=0,ss=en.length;tr<ss;tr++){const js=en[tr];Re.update(js,$n),Re.bind(js,$n)}}return $n}function Rt(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function Di(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(L,J,le){const ie=ae.get(L);ie.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ae.get(L.texture).__webglTexture=J,ae.get(L.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,J){const le=ae.get(L);le.__webglFramebuffer=J,le.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(L,J=0,le=0){Y=L,I=J,G=le;let ie=null,re=!1,Ge=!1;if(L){const Ve=ae.get(L);if(Ve.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(Q.FRAMEBUFFER,Ve.__webglFramebuffer),F.copy(L.viewport),K.copy(L.scissor),Se=L.scissorTest,A.viewport(F),A.scissor(K),A.setScissorTest(Se),se=-1;return}else if(Ve.__webglFramebuffer===void 0)de.setupRenderTarget(L);else if(Ve.__hasExternalTextures)de.rebindTextures(L,ae.get(L.texture).__webglTexture,ae.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const lt=L.depthTexture;if(Ve.__boundDepthTexture!==lt){if(lt!==null&&ae.has(lt)&&(L.width!==lt.image.width||L.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(L)}}const Je=L.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ge=!0);const Ke=ae.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ke[J])?ie=Ke[J][le]:ie=Ke[J],re=!0):L.samples>0&&de.useMultisampledRTT(L)===!1?ie=ae.get(L).__webglMultisampledFramebuffer:Array.isArray(Ke)?ie=Ke[le]:ie=Ke,F.copy(L.viewport),K.copy(L.scissor),Se=L.scissorTest}else F.copy(Ye).multiplyScalar(Me).floor(),K.copy(xt).multiplyScalar(Me).floor(),Se=We;if(le!==0&&(ie=ee),A.bindFramebuffer(Q.FRAMEBUFFER,ie)&&A.drawBuffers(L,ie),A.viewport(F),A.scissor(K),A.setScissorTest(Se),re){const Ve=ae.get(L.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ve.__webglTexture,le)}else if(Ge){const Ve=J;for(let Je=0;Je<L.textures.length;Je++){const Ke=ae.get(L.textures[Je]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Je,Ke.__webglTexture,le,Ve)}}else if(L!==null&&le!==0){const Ve=ae.get(L.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ve.__webglTexture,le)}se=-1},this.readRenderTargetPixels=function(L,J,le,ie,re,Ge,Xe,Ve=0){if(!(L&&L.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ae.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){A.bindFramebuffer(Q.FRAMEBUFFER,Je);try{const Ke=L.textures[Ve],lt=Ke.format,Et=Ke.type;if(L.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ve),!H.textureFormatReadable(lt)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Et)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-ie&&le>=0&&le<=L.height-re&&Q.readPixels(J,le,ie,re,Ie.convert(lt),Ie.convert(Et),Ge)}finally{const Ke=Y!==null?ae.get(Y).__webglFramebuffer:null;A.bindFramebuffer(Q.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(L,J,le,ie,re,Ge,Xe,Ve=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ae.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je)if(J>=0&&J<=L.width-ie&&le>=0&&le<=L.height-re){A.bindFramebuffer(Q.FRAMEBUFFER,Je);const Ke=L.textures[Ve],lt=Ke.format,Et=Ke.type;if(L.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ve),!H.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,rt),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ge.byteLength,Q.STREAM_READ),Q.readPixels(J,le,ie,re,Ie.convert(lt),Ie.convert(Et),0);const Zt=Y!==null?ae.get(Y).__webglFramebuffer:null;A.bindFramebuffer(Q.FRAMEBUFFER,Zt);const Cn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await QA(Q,Cn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,rt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ge),Q.deleteBuffer(rt),Q.deleteSync(Cn),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,J=null,le=0){const ie=Math.pow(2,-le),re=Math.floor(L.image.width*ie),Ge=Math.floor(L.image.height*ie),Xe=J!==null?J.x:0,Ve=J!==null?J.y:0;de.setTexture2D(L,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,le,0,0,Xe,Ve,re,Ge),A.unbindTexture()},this.copyTextureToTexture=function(L,J,le=null,ie=null,re=0,Ge=0){let Xe,Ve,Je,Ke,lt,Et,rt,Zt,Cn;const _n=L.isCompressedTexture?L.mipmaps[Ge]:L.image;if(le!==null)Xe=le.max.x-le.min.x,Ve=le.max.y-le.min.y,Je=le.isBox3?le.max.z-le.min.z:1,Ke=le.min.x,lt=le.min.y,Et=le.isBox3?le.min.z:0;else{const wn=Math.pow(2,-re);Xe=Math.floor(_n.width*wn),Ve=Math.floor(_n.height*wn),L.isDataArrayTexture?Je=_n.depth:L.isData3DTexture?Je=Math.floor(_n.depth*wn):Je=1,Ke=0,lt=0,Et=0}ie!==null?(rt=ie.x,Zt=ie.y,Cn=ie.z):(rt=0,Zt=0,Cn=0);const nn=Ie.convert(J.format),an=Ie.convert(J.type);let Ze;J.isData3DTexture?(de.setTexture3D(J,0),Ze=Q.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(de.setTexture2DArray(J,0),Ze=Q.TEXTURE_2D_ARRAY):(de.setTexture2D(J,0),Ze=Q.TEXTURE_2D),A.activeTexture(Q.TEXTURE0),A.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,J.flipY),A.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),A.pixelStorei(Q.UNPACK_ALIGNMENT,J.unpackAlignment);const Si=A.getParameter(Q.UNPACK_ROW_LENGTH),Lt=A.getParameter(Q.UNPACK_IMAGE_HEIGHT),$n=A.getParameter(Q.UNPACK_SKIP_PIXELS),ta=A.getParameter(Q.UNPACK_SKIP_ROWS),Va=A.getParameter(Q.UNPACK_SKIP_IMAGES);A.pixelStorei(Q.UNPACK_ROW_LENGTH,_n.width),A.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,_n.height),A.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ke),A.pixelStorei(Q.UNPACK_SKIP_ROWS,lt),A.pixelStorei(Q.UNPACK_SKIP_IMAGES,Et);const na=L.isDataArrayTexture||L.isData3DTexture,rn=J.isDataArrayTexture||J.isData3DTexture;if(L.isDepthTexture){const wn=ae.get(L),ka=ae.get(J),en=ae.get(wn.__renderTarget),tr=ae.get(ka.__renderTarget);A.bindFramebuffer(Q.READ_FRAMEBUFFER,en.__webglFramebuffer),A.bindFramebuffer(Q.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let ss=0;ss<Je;ss++)na&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ae.get(L).__webglTexture,re,Et+ss),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ae.get(J).__webglTexture,Ge,Cn+ss)),Q.blitFramebuffer(Ke,lt,Xe,Ve,rt,Zt,Xe,Ve,Q.DEPTH_BUFFER_BIT,Q.NEAREST);A.bindFramebuffer(Q.READ_FRAMEBUFFER,null),A.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(re!==0||L.isRenderTargetTexture||ae.has(L)){const wn=ae.get(L),ka=ae.get(J);A.bindFramebuffer(Q.READ_FRAMEBUFFER,j),A.bindFramebuffer(Q.DRAW_FRAMEBUFFER,q);for(let en=0;en<Je;en++)na?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,wn.__webglTexture,re,Et+en):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,wn.__webglTexture,re),rn?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ka.__webglTexture,Ge,Cn+en):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ka.__webglTexture,Ge),re!==0?Q.blitFramebuffer(Ke,lt,Xe,Ve,rt,Zt,Xe,Ve,Q.COLOR_BUFFER_BIT,Q.NEAREST):rn?Q.copyTexSubImage3D(Ze,Ge,rt,Zt,Cn+en,Ke,lt,Xe,Ve):Q.copyTexSubImage2D(Ze,Ge,rt,Zt,Ke,lt,Xe,Ve);A.bindFramebuffer(Q.READ_FRAMEBUFFER,null),A.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else rn?L.isDataTexture||L.isData3DTexture?Q.texSubImage3D(Ze,Ge,rt,Zt,Cn,Xe,Ve,Je,nn,an,_n.data):J.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ze,Ge,rt,Zt,Cn,Xe,Ve,Je,nn,_n.data):Q.texSubImage3D(Ze,Ge,rt,Zt,Cn,Xe,Ve,Je,nn,an,_n):L.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Ge,rt,Zt,Xe,Ve,nn,an,_n.data):L.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Ge,rt,Zt,_n.width,_n.height,nn,_n.data):Q.texSubImage2D(Q.TEXTURE_2D,Ge,rt,Zt,Xe,Ve,nn,an,_n);A.pixelStorei(Q.UNPACK_ROW_LENGTH,Si),A.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Lt),A.pixelStorei(Q.UNPACK_SKIP_PIXELS,$n),A.pixelStorei(Q.UNPACK_SKIP_ROWS,ta),A.pixelStorei(Q.UNPACK_SKIP_IMAGES,Va),Ge===0&&J.generateMipmaps&&Q.generateMipmap(Ze),A.unbindTexture()},this.initRenderTarget=function(L){ae.get(L).__webglFramebuffer===void 0&&de.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?de.setTextureCube(L,0):L.isData3DTexture?de.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?de.setTexture2DArray(L,0):de.setTexture2D(L,0),A.unbindTexture()},this.resetState=function(){I=0,G=0,Y=null,A.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Gt._getUnpackColorSpace()}}const wD=`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,DD=`
precision highp float;

uniform float uTime, uAttenuation, uLineThickness;
uniform float uBaseRadius, uRadiusStep, uScaleRate;
uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
uniform float uFadeIn, uFadeOut;
uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
uniform vec2 uResolution, uMouse;
uniform vec3 uColor, uColorTwo;
uniform int uRingCount;

const float HP = 1.5707963;
const float CYCLE = 3.45;

float fade(float t) {
  return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
}

float ring(vec2 p, float ri, float cut, float t0, float px) {
  float t = mod(uTime + t0, CYCLE);
  float r = ri + t / CYCLE * uScaleRate;
  float d = abs(length(p) - r);
  float a = atan(abs(p.y), abs(p.x)) / HP;
  float th = max(1.0 - a, 0.5) * px * uLineThickness;
  float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
  d += pow(cut * a, 3.0) * r;
  return h * exp(-uAttenuation * d) * fade(t);
}

void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
  float cr = cos(uRotation), sr = sin(uRotation);
  p = mat2(cr, -sr, sr, cr) * p;
  p -= uMouse * uMouseInfluence;
  float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;
  p /= sc;
  vec3 c = vec3(0.0);
  float rcf = max(float(uRingCount) - 1.0, 1.0);
  for (int i = 0; i < 10; i++) {
    if (i >= uRingCount) break;
    float fi = float(i);
    vec2 pr = p - fi * uParallax * uMouse;
    vec3 rc = mix(uColor, uColorTwo, fi / rcf);
    c = mix(c, rc, vec3(ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px)));
  }
  c *= 1.0 + uBurst * 2.0;
  float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
  c += (n - 0.5) * uNoiseAmount;
  gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)) * uOpacity);
}
`;function UD({color:o="#940e20",colorTwo:e="#1a64ed",speed:n=1,ringCount:a=6,attenuation:r=10,lineThickness:l=2,baseRadius:c=.35,radiusStep:f=.1,scaleRate:p=.1,opacity:d=1,blur:_=0,noiseAmount:v=.1,rotation:g=0,ringGap:x=1.5,fadeIn:M=.7,fadeOut:T=.5,followMouse:y=!1,mouseInfluence:S=.2,hoverScale:U=1.2,parallax:O=.05,clickBurst:R=!1}){const N=An.useRef(null),w=An.useRef(null),C=An.useRef([0,0]),b=An.useRef([0,0]),D=An.useRef(0),z=An.useRef(!1),k=An.useRef(0);return w.current={color:o,colorTwo:e,speed:n,ringCount:a,attenuation:r,lineThickness:l,baseRadius:c,radiusStep:f,scaleRate:p,opacity:d,noiseAmount:v,rotation:g,ringGap:x,fadeIn:M,fadeOut:T,followMouse:y,mouseInfluence:S,hoverScale:U,parallax:O,clickBurst:R},An.useEffect(()=>{const B=N.current;if(!B)return;let ee;try{ee=new CD({alpha:!0,antialias:!0})}catch{return}ee.setClearColor(0,0),B.appendChild(ee.domElement);const j=new hR,q=new ag(-.5,.5,.5,-.5,.1,10);q.position.z=1;const I={uTime:{value:0},uAttenuation:{value:0},uResolution:{value:new Wt},uColor:{value:new Jt},uColorTwo:{value:new Jt},uLineThickness:{value:0},uBaseRadius:{value:0},uRadiusStep:{value:0},uScaleRate:{value:0},uRingCount:{value:0},uOpacity:{value:1},uNoiseAmount:{value:0},uRotation:{value:0},uRingGap:{value:1.6},uFadeIn:{value:.5},uFadeOut:{value:.75},uMouse:{value:new Wt},uMouseInfluence:{value:0},uHoverAmount:{value:0},uHoverScale:{value:1},uParallax:{value:0},uBurst:{value:0}},G=new er({vertexShader:wD,fragmentShader:DD,uniforms:I,transparent:!0}),Y=new yr(new Jc(1,1),G);j.add(Y);const se=()=>{const Se=B.clientWidth||1,ge=B.clientHeight||1,Ne=Math.min(window.devicePixelRatio,2);ee.setPixelRatio(Ne),ee.setSize(Se,ge,!1),I.uResolution.value.set(Se*Ne,ge*Ne)};se(),window.addEventListener("resize",se);const V=new ResizeObserver(se);V.observe(B);let F;const K=Se=>{F=requestAnimationFrame(K);const ge=w.current;b.current[0]+=(C.current[0]-b.current[0])*.08,b.current[1]+=(C.current[1]-b.current[1])*.08,D.current+=((z.current?1:0)-D.current)*.08,k.current*=.95,k.current<.001&&(k.current=0),I.uTime.value=Se*.001*ge.speed,I.uAttenuation.value=ge.attenuation,I.uColor.value.set(ge.color),I.uColorTwo.value.set(ge.colorTwo),I.uLineThickness.value=ge.lineThickness,I.uBaseRadius.value=ge.baseRadius,I.uRadiusStep.value=ge.radiusStep,I.uScaleRate.value=ge.scaleRate,I.uRingCount.value=ge.ringCount,I.uOpacity.value=ge.opacity,I.uNoiseAmount.value=ge.noiseAmount,I.uRotation.value=ge.rotation*Math.PI/180,I.uRingGap.value=ge.ringGap,I.uFadeIn.value=ge.fadeIn,I.uFadeOut.value=ge.fadeOut,I.uMouse.value.set(b.current[0],b.current[1]),I.uMouseInfluence.value=ge.followMouse?ge.mouseInfluence:0,I.uHoverAmount.value=D.current,I.uHoverScale.value=ge.hoverScale,I.uParallax.value=ge.parallax,I.uBurst.value=ge.clickBurst?k.current:0,ee.render(j,q)};return F=requestAnimationFrame(K),()=>{cancelAnimationFrame(F),window.removeEventListener("resize",se),V.disconnect(),ee.domElement.parentNode===B&&B.removeChild(ee.domElement),ee.dispose(),G.dispose()}},[]),React.createElement("div",{ref:N,className:"magic-rings-container",style:_>0?{filter:`blur(${_}px)`}:void 0})}const ND=({children:o,color:e="#600f26",speed:n=1,chaos:a=.12,borderRadius:r=24,className:l,style:c})=>{const f=An.useRef(null),p=An.useRef(null),d=An.useRef(null),_=An.useRef(0),v=An.useRef(0),g=An.useCallback(S=>Math.sin(S*12.9898)*43758.5453%1,[]),x=An.useCallback((S,U)=>{const O=Math.floor(S),R=Math.floor(U),N=S-O,w=U-R,C=g(O+R*57),b=g(O+1+R*57),D=g(O+(R+1)*57),z=g(O+1+(R+1)*57),k=N*N*(3-2*N),B=w*w*(3-2*w);return C*(1-k)*(1-B)+b*k*(1-B)+D*(1-k)*B+z*k*B},[g]),M=An.useCallback((S,U,O,R,N,w,C,b,D)=>{let z=0,k=N,B=w;for(let ee=0;ee<U;ee+=1){let j=k;ee===0&&(j*=D),z+=j*x(B*S+b*100,C*B*.3),B*=O,k*=R}return z},[x]),T=An.useCallback((S,U,O,R,N,w)=>{const C=R+w*N;return{x:S+O*Math.cos(C),y:U+O*Math.sin(C)}},[]),y=An.useCallback((S,U,O,R,N,w)=>{const C=R-2*w,b=N-2*w,D=Math.PI*w/2,z=2*C+2*b+4*D,k=S*z;let B=0;if(k<=B+C){const j=(k-B)/C;return{x:U+w+j*C,y:O}}if(B+=C,k<=B+D){const j=(k-B)/D;return T(U+R-w,O+w,w,-Math.PI/2,Math.PI/2,j)}if(B+=D,k<=B+b){const j=(k-B)/b;return{x:U+R,y:O+w+j*b}}if(B+=b,k<=B+D){const j=(k-B)/D;return T(U+R-w,O+N-w,w,0,Math.PI/2,j)}if(B+=D,k<=B+C){const j=(k-B)/C;return{x:U+R-w-j*C,y:O+N}}if(B+=C,k<=B+D){const j=(k-B)/D;return T(U+w,O+N-w,w,Math.PI/2,Math.PI/2,j)}if(B+=D,k<=B+b){const j=(k-B)/b;return{x:U,y:O+N-w-j*b}}B+=b;const ee=(k-B)/D;return T(U+w,O+w,w,Math.PI,Math.PI/2,ee)},[T]);return An.useEffect(()=>{const S=f.current,U=p.current;if(!S||!U)return;const O=S.getContext("2d");if(!O)return;const R=10,N=1.6,w=.7,C=a,b=10,D=0,z=60,k=60,B=()=>{const Y=U.getBoundingClientRect(),se=Y.width+k*2,V=Y.height+k*2,F=Math.min(window.devicePixelRatio||1,2);return S.width=se*F,S.height=V*F,S.style.width=`${se}px`,S.style.height=`${V}px`,O.setTransform(F,0,0,F,0,0),{width:se,height:V}};let{width:ee,height:j}=B(),q=Math.min(window.devicePixelRatio||1,2);const I=Y=>{const se=Math.min(window.devicePixelRatio||1,2);if(se!==q){q=se;const Oe=B();ee=Oe.width,j=Oe.height}const V=(Y-v.current)/1e3;_.current+=V*n,v.current=Y,O.setTransform(1,0,0,1,0,0),O.clearRect(0,0,S.width,S.height),O.scale(se,se),O.strokeStyle=e,O.lineWidth=1,O.lineCap="round",O.lineJoin="round";const F=k,K=k,Se=ee-2*k,ge=j-2*k,Ne=Math.min(Se,ge)/2,ne=Math.min(r,Ne),ve=2*(Se+ge)+2*Math.PI*ne,Me=Math.floor(ve/2);O.beginPath();for(let Oe=0;Oe<=Me;Oe+=1){const tt=Oe/Me,Ye=y(tt,F,K,Se,ge,ne),xt=M(tt*8,R,N,w,C,b,_.current,0,D),We=M(tt*8,R,N,w,C,b,_.current,1,D),it=Ye.x+xt*z,ct=Ye.y+We*z;Oe===0?O.moveTo(it,ct):O.lineTo(it,ct)}O.closePath(),O.stroke(),d.current=requestAnimationFrame(I)},G=new ResizeObserver(()=>{const Y=B();ee=Y.width,j=Y.height});return G.observe(U),d.current=requestAnimationFrame(I),()=>{d.current&&cancelAnimationFrame(d.current),G.disconnect()}},[e,n,a,r,M,y]),React.createElement("div",{ref:p,className:`electric-border ${l??""}`,style:{"--electric-border-color":e,borderRadius:r,...c}},React.createElement("div",{className:"eb-canvas-container"},React.createElement("canvas",{ref:f,className:"eb-canvas"})),React.createElement("div",{className:"eb-layers"},React.createElement("div",{className:"eb-glow-1"}),React.createElement("div",{className:"eb-glow-2"}),React.createElement("div",{className:"eb-background-glow"})),React.createElement("div",{className:"eb-content"},o))};function Wr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function zE(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ya={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zc={duration:.5,overwrite:!1,delay:0},rg,xi,Un,Ba=1e8,xn=1/Ba,M0=Math.PI*2,LD=M0/4,OD=0,BE=Math.sqrt,PD=Math.cos,FD=Math.sin,fi=function(e){return typeof e=="string"},zn=function(e){return typeof e=="function"},is=function(e){return typeof e=="number"},sg=function(e){return typeof e>"u"},Mr=function(e){return typeof e=="object"},Qi=function(e){return e!==!1},og=function(){return typeof window<"u"},Uh=function(e){return zn(e)||fi(e)},HE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wi=Array.isArray,ID=/random\([^)]+\)/g,zD=/,\s*/g,SM=/(?:-?\.?\d|\.)+/gi,GE=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ql=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,v_=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,VE=/[+-]=-?[.\d]+/,BD=/[^,'"\[\]\s]+/gi,HD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ln,lr,E0,lg,Ma={},fd={},kE,XE=function(e){return(fd=uu(e,Ma))&&ea},ug=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Bc=function(e,n){return!n&&console.warn(e)},WE=function(e,n){return e&&(Ma[e]=n)&&fd&&(fd[e]=n)||Ma},Hc=function(){return 0},GD={suppressEvents:!0,isStart:!0,kill:!1},Qh={suppressEvents:!0,kill:!1},VD={suppressEvents:!0},cg={},Xs=[],T0={},qE,pa={},x_={},yM=30,Jh=[],fg="",hg=function(e){var n=e[0],a,r;if(Mr(n)||zn(n)||(e=[e]),!(a=(n._gsap||{}).harness)){for(r=Jh.length;r--&&!Jh[r].targetTest(n););a=Jh[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new p1(e[r],a)))||e.splice(r,1);return e},Lo=function(e){return e._gsap||hg(Ha(e))[0]._gsap},YE=function(e,n,a){return(a=e[n])&&zn(a)?e[n]():sg(a)&&e.getAttribute&&e.getAttribute(n)||a},Ji=function(e,n){return(e=e.split(",")).forEach(n)||e},Gn=function(e){return Math.round(e*1e5)/1e5||0},Nn=function(e){return Math.round(e*1e7)/1e7||0},$l=function(e,n){var a=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),a==="+"?e+r:a==="-"?e-r:a==="*"?e*r:e/r},kD=function(e,n){for(var a=n.length,r=0;e.indexOf(n[r])<0&&++r<a;);return r<a},hd=function(){var e=Xs.length,n=Xs.slice(0),a,r;for(T0={},Xs.length=0,a=0;a<e;a++)r=n[a],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},dg=function(e){return!!(e._initted||e._startAt||e.add)},ZE=function(e,n,a,r){Xs.length&&!xi&&hd(),e.render(n,a,!!(xi&&n<0&&dg(e))),Xs.length&&!xi&&hd()},KE=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(BD).length<2?n:fi(e)?e.trim():e},QE=function(e){return e},Ea=function(e,n){for(var a in n)a in e||(e[a]=n[a]);return e},XD=function(e){return function(n,a){for(var r in a)r in n||r==="duration"&&e||r==="ease"||(n[r]=a[r])}},uu=function(e,n){for(var a in n)e[a]=n[a];return e},MM=function o(e,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(e[a]=Mr(n[a])?o(e[a]||(e[a]={}),n[a]):n[a]);return e},dd=function(e,n){var a={},r;for(r in e)r in n||(a[r]=e[r]);return a},Tc=function(e){var n=e.parent||Ln,a=e.keyframes?XD(wi(e.keyframes)):Ea;if(Qi(e.inherit))for(;n;)a(e,n.vars.defaults),n=n.parent||n._dp;return e},WD=function(e,n){for(var a=e.length,r=a===n.length;r&&a--&&e[a]===n[a];);return a<0},JE=function(e,n,a,r,l){var c=e[r],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=e[a],e[a]=n),n._next?n._next._prev=n:e[r]=n,n._prev=c,n.parent=n._dp=e,n},Rd=function(e,n,a,r){a===void 0&&(a="_first"),r===void 0&&(r="_last");var l=n._prev,c=n._next;l?l._next=c:e[a]===n&&(e[a]=c),c?c._prev=l:e[r]===n&&(e[r]=l),n._next=n._prev=n.parent=null},Zs=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Oo=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var a=e;a;)a._dirty=1,a=a.parent;return e},qD=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},b0=function(e,n,a,r){return e._startAt&&(xi?e._startAt.revert(Qh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},YD=function o(e){return!e||e._ts&&o(e.parent)},EM=function(e){return e._repeat?cu(e._tTime,e=e.duration()+e._rDelay)*e:0},cu=function(e,n){var a=Math.floor(e=Nn(e/n));return e&&a===e?a-1:a},pd=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Cd=function(e){return e._end=Nn(e._start+(e._tDur/Math.abs(e._ts||e._rts||xn)||0))},wd=function(e,n){var a=e._dp;return a&&a.smoothChildTiming&&e._ts&&(e._start=Nn(a._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Cd(e),a._dirty||Oo(a,e)),e},$E=function(e,n){var a;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(a=pd(e.rawTime(),n),(!n._dur||$c(0,n.totalDuration(),a)-n._tTime>xn)&&n.render(a,!0)),Oo(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(a=e;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;e._zTime=-xn}},fr=function(e,n,a,r){return n.parent&&Zs(n),n._start=Nn((is(a)?a:a||e!==Ln?Oa(e,a,n):e._time)+n._delay),n._end=Nn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),JE(e,n,"_first","_last",e._sort?"_start":0),A0(n)||(e._recent=n),r||$E(e,n),e._ts<0&&wd(e,e._tTime),e},jE=function(e,n){return(Ma.ScrollTrigger||ug("scrollTrigger",n))&&Ma.ScrollTrigger.create(n,e)},e1=function(e,n,a,r,l){if(mg(e,n,l),!e._initted)return 1;if(!a&&e._pt&&!xi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qE!==_a.frame)return Xs.push(e),e._lazy=[l,r],1},ZD=function o(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},A0=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},KD=function(e,n,a,r){var l=e.ratio,c=n<0||!n&&(!e._start&&ZD(e)&&!(!e._initted&&A0(e))||(e._ts<0||e._dp._ts<0)&&!A0(e))?0:1,f=e._rDelay,p=0,d,_,v;if(f&&e._repeat&&(p=$c(0,e._tDur,n),_=cu(p,f),e._yoyo&&_&1&&(c=1-c),_!==cu(e._tTime,f)&&(l=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==l||xi||r||e._zTime===xn||!n&&e._zTime){if(!e._initted&&e1(e,n,r,a,p))return;for(v=e._zTime,e._zTime=n||(a?xn:0),a||(a=n&&!v),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=p,d=e._pt;d;)d.r(c,d.d),d=d._next;n<0&&b0(e,n,a,!0),e._onUpdate&&!a&&va(e,"onUpdate"),p&&e._repeat&&!a&&e.parent&&va(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===c&&(c&&Zs(e,1),!a&&!xi&&(va(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},QD=function(e,n,a){var r;if(a>n)for(r=e._first;r&&r._start<=a;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=a;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},fu=function(e,n,a,r){var l=e._repeat,c=Nn(n)||0,f=e._tTime/e._tDur;return f&&!r&&(e._time*=c/e._dur),e._dur=c,e._tDur=l?l<0?1e10:Nn(c*(l+1)+e._rDelay*l):c,f>0&&!r&&wd(e,e._tTime=e._tDur*f),e.parent&&Cd(e),a||Oo(e.parent,e),e},TM=function(e){return e instanceof Zi?Oo(e):fu(e,e._dur)},JD={_start:0,endTime:Hc,totalDuration:Hc},Oa=function o(e,n,a){var r=e.labels,l=e._recent||JD,c=e.duration()>=Ba?l.endTime(!1):e._dur,f,p,d;return fi(n)&&(isNaN(n)||n in r)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in r||(r[n]=c),r[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(wi(a)?a[0]:a).totalDuration()),f>1?o(e,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},bc=function(e,n,a){var r=is(n[1]),l=(r?2:1)+(e<2?0:1),c=n[l],f,p;if(r&&(c.duration=n[1]),c.parent=a,e){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=Qi(p.vars.inherit)&&p.parent;c.immediateRender=Qi(f.immediateRender),e<2?c.runBackwards=1:c.startAt=n[l-1]}return new Kn(n[0],c,n[l+1])},$s=function(e,n){return e||e===0?n(e):n},$c=function(e,n,a){return a<e?e:a>n?n:a},Ai=function(e,n){return!fi(e)||!(n=HD.exec(e))?"":n[1]},$D=function(e,n,a){return $s(a,function(r){return $c(e,n,r)})},R0=[].slice,t1=function(e,n){return e&&Mr(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Mr(e[0]))&&!e.nodeType&&e!==lr},jD=function(e,n,a){return a===void 0&&(a=[]),e.forEach(function(r){var l;return fi(r)&&!n||t1(r,1)?(l=a).push.apply(l,Ha(r)):a.push(r)})||a},Ha=function(e,n,a){return Un&&!n&&Un.selector?Un.selector(e):fi(e)&&!a&&(E0||!hu())?R0.call((n||lg).querySelectorAll(e),0):wi(e)?jD(e,a):t1(e)?R0.call(e,0):e?[e]:[]},C0=function(e){return e=Ha(e)[0]||Bc("Invalid scope")||{},function(n){var a=e.current||e.nativeElement||e;return Ha(n,a.querySelectorAll?a:a===e?Bc("Invalid scope")||lg.createElement("div"):e)}},n1=function(e){return e.sort(function(){return .5-Math.random()})},i1=function(e){if(zn(e))return e;var n=Mr(e)?e:{each:e},a=Po(n.ease),r=n.from||0,l=parseFloat(n.base)||0,c={},f=r>0&&r<1,p=isNaN(r)||f,d=n.axis,_=r,v=r;return fi(r)?_=v={center:.5,edges:.5,end:1}[r]||0:!f&&p&&(_=r[0],v=r[1]),function(g,x,M){var T=(M||n).length,y=c[T],S,U,O,R,N,w,C,b,D;if(!y){if(D=n.grid==="auto"?0:(n.grid||[1,Ba])[1],!D){for(C=-Ba;C<(C=M[D++].getBoundingClientRect().left)&&D<T;);D<T&&D--}for(y=c[T]=[],S=p?Math.min(D,T)*_-.5:r%D,U=D===Ba?0:p?T*v/D-.5:r/D|0,C=0,b=Ba,w=0;w<T;w++)O=w%D-S,R=U-(w/D|0),y[w]=N=d?Math.abs(d==="y"?R:O):BE(O*O+R*R),N>C&&(C=N),N<b&&(b=N);r==="random"&&n1(y),y.max=C-b,y.min=b,y.v=T=(parseFloat(n.amount)||parseFloat(n.each)*(D>T?T-1:d?d==="y"?T/D:D:Math.max(D,T/D))||0)*(r==="edges"?-1:1),y.b=T<0?l-T:l,y.u=Ai(n.amount||n.each)||0,a=a&&T<0?hU(a):a}return T=(y[g]-y.min)/y.max||0,Nn(y.b+(a?a(T):T)*y.v)+y.u}},w0=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(a){var r=Nn(Math.round(parseFloat(a)/e)*e*n);return(r-r%1)/n+(is(a)?0:Ai(a))}},a1=function(e,n){var a=wi(e),r,l;return!a&&Mr(e)&&(r=a=e.radius||Ba,e.values?(e=Ha(e.values),(l=!is(e[0]))&&(r*=r)):e=w0(e.increment)),$s(n,a?zn(e)?function(c){return l=e(c),Math.abs(l-c)<=r?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=Ba,_=0,v=e.length,g,x;v--;)l?(g=e[v].x-f,x=e[v].y-p,g=g*g+x*x):g=Math.abs(e[v]-f),g<d&&(d=g,_=v);return _=!r||d<=r?e[_]:c,l||_===c||is(c)?_:_+Ai(c)}:w0(e))},r1=function(e,n,a,r){return $s(wi(e)?!n:a===!0?!!(a=0):!r,function(){return wi(e)?e[~~(Math.random()*e.length)]:(a=a||1e-5)&&(r=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((e-a/2+Math.random()*(n-e+a*.99))/a)*a*r)/r})},eU=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return function(r){return n.reduce(function(l,c){return c(l)},r)}},tU=function(e,n){return function(a){return e(parseFloat(a))+(n||Ai(a))}},nU=function(e,n,a){return o1(e,n,0,1,a)},s1=function(e,n,a){return $s(a,function(r){return e[~~n(r)]})},iU=function o(e,n,a){var r=n-e;return wi(e)?s1(e,o(0,e.length),n):$s(a,function(l){return(r+(l-e)%r)%r+e})},aU=function o(e,n,a){var r=n-e,l=r*2;return wi(e)?s1(e,o(0,e.length-1),n):$s(a,function(c){return c=(l+(c-e)%l)%l||0,e+(c>r?l-c:c)})},Gc=function(e){return e.replace(ID,function(n){var a=n.indexOf("[")+1,r=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(zD);return r1(a?r:+r[0],a?0:+r[1],+r[2]||1e-5)})},o1=function(e,n,a,r,l){var c=n-e,f=r-a;return $s(l,function(p){return a+((p-e)/c*f||0)})},rU=function o(e,n,a,r){var l=isNaN(e+n)?0:function(x){return(1-x)*e+x*n};if(!l){var c=fi(e),f={},p,d,_,v,g;if(a===!0&&(r=1)&&(a=null),c)e={p:e},n={p:n};else if(wi(e)&&!wi(n)){for(_=[],v=e.length,g=v-2,d=1;d<v;d++)_.push(o(e[d-1],e[d]));v--,l=function(M){M*=v;var T=Math.min(g,~~M);return _[T](M-T)},a=n}else r||(e=uu(wi(e)?[]:{},e));if(!_){for(p in n)pg.call(f,e,p,"get",n[p]);l=function(M){return vg(M,f)||(c?e.p:e)}}}return $s(a,l)},bM=function(e,n,a){var r=e.labels,l=Ba,c,f,p;for(c in r)f=r[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},va=function(e,n,a){var r=e.vars,l=r[n],c=Un,f=e._ctx,p,d,_;if(l)return p=r[n+"Params"],d=r.callbackScope||e,a&&Xs.length&&hd(),f&&(Un=f),_=p?l.apply(d,p):l.call(d),Un=c,_},gc=function(e){return Zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xi),e.progress()<1&&va(e,"onInterrupt"),e},Yl,l1=[],u1=function(e){if(e)if(e=!e.name&&e.default||e,og()||e.headless){var n=e.name,a=zn(e),r=n&&!a&&e.init?function(){this._props=[]}:e,l={init:Hc,render:vg,add:pg,kill:MU,modifier:yU,rawVars:0},c={targetTest:0,get:0,getSetter:gg,aliases:{},register:0};if(hu(),e!==r){if(pa[n])return;Ea(r,Ea(dd(e,l),c)),uu(r.prototype,uu(l,dd(e,c))),pa[r.prop=n]=r,e.targetTest&&(Jh.push(r),cg[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}WE(n,r),e.register&&e.register(ea,r,$i)}else l1.push(e)},vn=255,vc={aqua:[0,vn,vn],lime:[0,vn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vn],navy:[0,0,128],white:[vn,vn,vn],olive:[128,128,0],yellow:[vn,vn,0],orange:[vn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vn,0,0],pink:[vn,192,203],cyan:[0,vn,vn],transparent:[vn,vn,vn,0]},S_=function(e,n,a){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(a-n)*e*6:e<.5?a:e*3<2?n+(a-n)*(2/3-e)*6:n)*vn+.5|0},c1=function(e,n,a){var r=e?is(e)?[e>>16,e>>8&vn,e&vn]:0:vc.black,l,c,f,p,d,_,v,g,x,M;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vc[e])r=vc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+l+l+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&vn,r&vn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&vn,e&vn]}else if(e.substr(0,3)==="hsl"){if(r=M=e.match(SM),!n)p=+r[0]%360/360,d=+r[1]/100,_=+r[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,r.length>3&&(r[3]*=1),r[0]=S_(p+1/3,l,c),r[1]=S_(p,l,c),r[2]=S_(p-1/3,l,c);else if(~e.indexOf("="))return r=e.match(GE),a&&r.length<4&&(r[3]=1),r}else r=e.match(SM)||vc.transparent;r=r.map(Number)}return n&&!M&&(l=r[0]/vn,c=r[1]/vn,f=r[2]/vn,v=Math.max(l,c,f),g=Math.min(l,c,f),_=(v+g)/2,v===g?p=d=0:(x=v-g,d=_>.5?x/(2-v-g):x/(v+g),p=v===l?(c-f)/x+(c<f?6:0):v===c?(f-l)/x+2:(l-c)/x+4,p*=60),r[0]=~~(p+.5),r[1]=~~(d*100+.5),r[2]=~~(_*100+.5)),a&&r.length<4&&(r[3]=1),r},f1=function(e){var n=[],a=[],r=-1;return e.split(Ws).forEach(function(l){var c=l.match(ql)||[];n.push.apply(n,c),a.push(r+=c.length+1)}),n.c=a,n},AM=function(e,n,a){var r="",l=(e+r).match(Ws),c=n?"hsla(":"rgba(",f=0,p,d,_,v;if(!l)return e;if(l=l.map(function(g){return(g=c1(g,n,1))&&c+(n?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),a&&(_=f1(e),p=a.c,p.join(r)!==_.c.join(r)))for(d=e.replace(Ws,"1").split(ql),v=d.length-1;f<v;f++)r+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=e.split(Ws),v=d.length-1;f<v;f++)r+=d[f]+l[f];return r+d[v]},Ws=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vc)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),sU=/hsl[a]?\(/,h1=function(e){var n=e.join(" "),a;if(Ws.lastIndex=0,Ws.test(n))return a=sU.test(n),e[1]=AM(e[1],a),e[0]=AM(e[0],a,f1(e[1])),!0},Vc,_a=(function(){var o=Date.now,e=500,n=33,a=o(),r=a,l=1e3/240,c=l,f=[],p,d,_,v,g,x,M=function T(y){var S=o()-r,U=y===!0,O,R,N,w;if((S>e||S<0)&&(a+=S-n),r+=S,N=r-a,O=N-c,(O>0||U)&&(w=++v.frame,g=N-v.time*1e3,v.time=N=N/1e3,c+=O+(O>=l?4:l-O),R=1),U||(p=d(T)),R)for(x=0;x<f.length;x++)f[x](N,g,w,y)};return v={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){kE&&(!E0&&og()&&(lr=E0=window,lg=lr.document||{},Ma.gsap=ea,(lr.gsapVersions||(lr.gsapVersions=[])).push(ea.version),XE(fd||lr.GreenSockGlobals||!lr.gsap&&lr||{}),l1.forEach(u1)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&v.sleep(),d=_||function(y){return setTimeout(y,c-v.time*1e3+1|0)},Vc=1,M(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),Vc=0,d=Hc},lagSmoothing:function(y,S){e=y||1/0,n=Math.min(S||33,e)},fps:function(y){l=1e3/(y||240),c=v.time*1e3+l},add:function(y,S,U){var O=S?function(R,N,w,C){y(R,N,w,C),v.remove(O)}:y;return v.remove(y),f[U?"unshift":"push"](O),hu(),O},remove:function(y,S){~(S=f.indexOf(y))&&f.splice(S,1)&&x>=S&&x--},_listeners:f},v})(),hu=function(){return!Vc&&_a.wake()},kt={},oU=/^[\d.\-M][\d.\-,\s]/,lU=/["']/g,uU=function(e){for(var n={},a=e.substr(1,e.length-3).split(":"),r=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[r]=isNaN(d)?d.replace(lU,"").trim():+d,r=p.substr(f+1).trim();return n},cU=function(e){var n=e.indexOf("(")+1,a=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<a?e.indexOf(")",a+1):a)},fU=function(e){var n=(e+"").split("("),a=kt[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~e.indexOf("{")?[uU(n[1])]:cU(e).split(",").map(KE)):kt._CE&&oU.test(e)?kt._CE("",e):a},hU=function(e){return function(n){return 1-e(1-n)}},Po=function(e,n){return e&&(zn(e)?e:kt[e]||fU(e))||n},Yo=function(e,n,a,r){a===void 0&&(a=function(p){return 1-n(1-p)}),r===void 0&&(r=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:r},c;return Ji(e,function(f){kt[f]=Ma[f]=l,kt[c=f.toLowerCase()]=a;for(var p in l)kt[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=kt[f+"."+p]=l[p]}),l},d1=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},y_=function o(e,n,a){var r=n>=1?n:1,l=(a||(e?.3:.45))/(n<1?n:1),c=l/M0*(Math.asin(1/r)||0),f=function(_){return _===1?1:r*Math.pow(2,-10*_)*FD((_-c)*l)+1},p=e==="out"?f:e==="in"?function(d){return 1-f(1-d)}:d1(f);return l=M0/l,p.config=function(d,_){return o(e,d,_)},p},M_=function o(e,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},r=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:d1(a);return r.config=function(l){return o(e,l)},r};Ji("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var n=e<5?e+1:e;Yo(o+",Power"+(n-1),e?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});kt.Linear.easeNone=kt.none=kt.Linear.easeIn;Yo("Elastic",y_("in"),y_("out"),y_());(function(o,e){var n=1/e,a=2*n,r=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/e,2)+.75:f<r?o*(f-=2.25/e)*f+.9375:o*Math.pow(f-2.625/e,2)+.984375};Yo("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Yo("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Yo("Circ",function(o){return-(BE(1-o*o)-1)});Yo("Sine",function(o){return o===1?1:-PD(o*LD)+1});Yo("Back",M_("in"),M_("out"),M_());kt.SteppedEase=kt.steps=Ma.SteppedEase={config:function(e,n){e===void 0&&(e=1);var a=1/e,r=e+(n?0:1),l=n?1:0,c=1-xn;return function(f){return((r*$c(0,c,f)|0)+l)*a}}};zc.ease=kt["quad.out"];Ji("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return fg+=o+","+o+"Params,"});var p1=function(e,n){this.id=OD++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:YE,this.set=n?n.getSetter:gg},kc=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,fu(this,+n.duration,1,1),this.data=n.data,Un&&(this._ctx=Un,Un.data.push(this)),Vc||_a.wake()}var e=o.prototype;return e.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},e.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},e.totalDuration=function(a){return arguments.length?(this._dirty=0,fu(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(a,r){if(hu(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(wd(this,a),!l._dp||l.parent||$E(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&fr(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===xn||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),ZE(this,a,r)),this},e.time=function(a,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+EM(this))%(this._dur+this._rDelay)||(a?this._dur:0),r):this._time},e.totalProgress=function(a,r){return arguments.length?this.totalTime(this.totalDuration()*a,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(a,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+EM(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(a,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,r):this._repeat?cu(this._tTime,l)+1:1},e.timeScale=function(a,r){if(!arguments.length)return this._rts===-xn?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?pd(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-xn?0:this._rts,this.totalTime($c(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),Cd(this),qD(this)},e.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hu(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xn&&(this._tTime-=xn)))),this):this._ps},e.startTime=function(a){if(arguments.length){this._start=Nn(a);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&fr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(a){return this._start+(Qi(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(a){var r=this.parent||this._dp;return r?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pd(r.rawTime(a),this):this._tTime:this._tTime},e.revert=function(a){a===void 0&&(a=VD);var r=xi;return xi=a,dg(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),xi=r,this},e.globalTime=function(a){for(var r=this,l=arguments.length?a:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},e.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,TM(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(a){if(arguments.length){var r=this._time;return this._rDelay=a,TM(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},e.seek=function(a,r){return this.totalTime(Oa(this,a),Qi(r))},e.restart=function(a,r){return this.play().totalTime(a?-this._delay:0,Qi(r)),this._dur||(this._zTime=-xn),this},e.play=function(a,r){return a!=null&&this.seek(a,r),this.reversed(!1).paused(!1)},e.reverse=function(a,r){return a!=null&&this.seek(a||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(a,r){return a!=null&&this.seek(a,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-xn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xn,this},e.isActive=function(){var a=this.parent||this._dp,r=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=r&&l<this.endTime(!0)-xn)},e.eventCallback=function(a,r,l){var c=this.vars;return arguments.length>1?(r?(c[a]=r,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=r)):delete c[a],this):c[a]},e.then=function(a){var r=this,l=r._prom;return new Promise(function(c){var f=zn(a)?a:QE,p=function(){var _=r.then;r.then=null,l&&l(),zn(f)&&(f=f(r))&&(f.then||f===r)&&(r.then=_),c(f),r.then=_};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?p():r._prom=p})},e.kill=function(){gc(this)},o})();Ea(kc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xn,_prom:0,_ps:!1,_rts:1});var Zi=(function(o){zE(e,o);function e(a,r){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=Qi(a.sortChildren),Ln&&fr(a.parent||Ln,Wr(l),r),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&jE(Wr(l),a.scrollTrigger),l}var n=e.prototype;return n.to=function(r,l,c){return bc(0,arguments,this),this},n.from=function(r,l,c){return bc(1,arguments,this),this},n.fromTo=function(r,l,c,f){return bc(2,arguments,this),this},n.set=function(r,l,c){return l.duration=0,l.parent=this,Tc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Kn(r,l,Oa(this,c),1),this},n.call=function(r,l,c){return fr(this,Kn.delayedCall(0,r,l),c)},n.staggerTo=function(r,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new Kn(r,c,Oa(this,p)),this},n.staggerFrom=function(r,l,c,f,p,d,_){return c.runBackwards=1,Tc(c).immediateRender=Qi(c.immediateRender),this.staggerTo(r,l,c,f,p,d,_)},n.staggerFromTo=function(r,l,c,f,p,d,_,v){return f.startAt=c,Tc(f).immediateRender=Qi(f.immediateRender),this.staggerTo(r,l,f,p,d,_,v)},n.render=function(r,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=r<=0?0:Nn(r),v=this._zTime<0!=r<0&&(this._initted||!d),g,x,M,T,y,S,U,O,R,N,w,C;if(this!==Ln&&_>p&&r>=0&&(_=p),_!==this._tTime||c||v){if(f!==this._time&&d&&(_+=this._time-f,r+=this._time-f),g=_,R=this._start,O=this._ts,S=!O,v&&(d||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,y=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,l,c);if(g=Nn(_%y),_===p?(T=this._repeat,g=d):(N=Nn(_/y),T=~~N,T&&T===N&&(g=d,T--),g>d&&(g=d)),N=cu(this._tTime,y),!f&&this._tTime&&N!==T&&this._tTime-N*y-this._dur<=0&&(N=T),w&&T&1&&(g=d-g,C=1),T!==N&&!this._lock){var b=w&&N&1,D=b===(w&&T&1);if(T<N&&(b=!b),f=b?0:_%d?d:_,this._lock=1,this.render(f||(C?0:Nn(T*y)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&va(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,N=T),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,D&&(this._lock=2,f=b?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!S)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(U=QD(this,Nn(f),Nn(g)),U&&(_-=g-(g=U._start))),this._tTime=_,this._time=g,this._act=!!O,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&_&&d&&!l&&!N&&(va(this,"onStart"),this._tTime!==_))return this;if(g>=f&&r>=0)for(x=this._first;x;){if(M=x._next,(x._act||g>=x._start)&&x._ts&&U!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(g-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(g-x._start)*x._ts,l,c),g!==this._time||!this._ts&&!S){U=0,M&&(_+=this._zTime=-xn);break}}x=M}else{x=this._last;for(var z=r<0?r:g;x;){if(M=x._prev,(x._act||z<=x._end)&&x._ts&&U!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(z-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(z-x._start)*x._ts,l,c||xi&&dg(x)),g!==this._time||!this._ts&&!S){U=0,M&&(_+=this._zTime=z?-xn:xn);break}}x=M}}if(U&&!l&&(this.pause(),U.render(g>=f?0:-xn)._zTime=g>=f?1:-1,this._ts))return this._start=R,Cd(this),this.render(r,l,c);this._onUpdate&&!l&&va(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(R===this._start||Math.abs(O)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Zs(this,1),!l&&!(r<0&&!f)&&(_||f||!p)&&(va(this,_===p&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,l){var c=this;if(is(l)||(l=Oa(this,l,r)),!(r instanceof kc)){if(wi(r))return r.forEach(function(f){return c.add(f,l)}),this;if(fi(r))return this.addLabel(r,l);if(zn(r))r=Kn.delayedCall(0,r);else return this}return this!==r?fr(this,r,l):this},n.getChildren=function(r,l,c,f){r===void 0&&(r=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Ba);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof Kn?l&&p.push(d):(c&&p.push(d),r&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(r){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===r)return l[c]},n.remove=function(r){return fi(r)?this.removeLabel(r):zn(r)?this.killTweensOf(r):(r.parent===this&&Rd(this,r),r===this._recent&&(this._recent=this._last),Oo(this))},n.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nn(_a.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},n.addLabel=function(r,l){return this.labels[r]=Oa(this,l),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,l,c){var f=Kn.delayedCall(0,l||Hc,c);return f.data="isPause",this._hasPause=1,fr(this,f,Oa(this,r))},n.removePause=function(r){var l=this._first;for(r=Oa(this,r);l;)l._start===r&&l.data==="isPause"&&Zs(l),l=l._next},n.killTweensOf=function(r,l,c){for(var f=this.getTweensOf(r,c),p=f.length;p--;)Bs!==f[p]&&f[p].kill(r,l);return this},n.getTweensOf=function(r,l){for(var c=[],f=Ha(r),p=this._first,d=is(l),_;p;)p instanceof Kn?kD(p._targets,f)&&(d?(!Bs||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(r,l){l=l||{};var c=this,f=Oa(c,r),p=l,d=p.startAt,_=p.onStart,v=p.onStartParams,g=p.immediateRender,x,M=Kn.to(c,Ea({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||xn,onStart:function(){if(c.pause(),!x){var y=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());M._dur!==y&&fu(M,y,0,1).render(M._time,!0,!0),x=1}_&&_.apply(M,v||[])}},l));return g?M.render(0):M},n.tweenFromTo=function(r,l,c){return this.tweenTo(l,Ea({startAt:{time:Oa(this,r)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),bM(this,Oa(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),bM(this,Oa(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+xn)},n.shiftChildren=function(r,l,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(r=Nn(r);f;)f._start>=c&&(f._start+=r,f._end+=r),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=r);return Oo(this)},n.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Oo(this)},n.totalDuration=function(r){var l=0,c=this,f=c._last,p=Ba,d,_,v;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(v=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,fr(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!v&&!c._dp||v&&v.smoothChildTiming)&&(c._start+=Nn(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;fu(c,c===Ln&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(r){if(Ln._ts&&(ZE(Ln,pd(r,Ln)),qE=_a.frame),_a.frame>=yM){yM+=ya.autoSleep||120;var l=Ln._first;if((!l||!l._ts)&&ya.autoSleep&&_a._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||_a.sleep()}}},e})(kc);Ea(Zi.prototype,{_lock:0,_hasPause:0,_forcing:0});var dU=function(e,n,a,r,l,c,f){var p=new $i(this._pt,e,n,0,1,S1,null,l),d=0,_=0,v,g,x,M,T,y,S,U;for(p.b=a,p.e=r,a+="",r+="",(S=~r.indexOf("random("))&&(r=Gc(r)),c&&(U=[a,r],c(U,e,n),a=U[0],r=U[1]),g=a.match(v_)||[];v=v_.exec(r);)M=v[0],T=r.substring(d,v.index),x?x=(x+1)%5:T.substr(-5)==="rgba("&&(x=1),M!==g[_++]&&(y=parseFloat(g[_-1])||0,p._pt={_next:p._pt,p:T||_===1?T:",",s:y,c:M.charAt(1)==="="?$l(y,M)-y:parseFloat(M)-y,m:x&&x<4?Math.round:0},d=v_.lastIndex);return p.c=d<r.length?r.substring(d,r.length):"",p.fp=f,(VE.test(r)||S)&&(p.e=0),this._pt=p,p},pg=function(e,n,a,r,l,c,f,p,d,_){zn(r)&&(r=r(l||0,e,c));var v=e[n],g=a!=="get"?a:zn(v)?d?e[n.indexOf("set")||!zn(e["get"+n.substr(3)])?n:"get"+n.substr(3)](d):e[n]():v,x=zn(v)?d?vU:v1:_g,M;if(fi(r)&&(~r.indexOf("random(")&&(r=Gc(r)),r.charAt(1)==="="&&(M=$l(g,r)+(Ai(g)||0),(M||M===0)&&(r=M))),!_||g!==r||D0)return!isNaN(g*r)&&r!==""?(M=new $i(this._pt,e,n,+g||0,r-(g||0),typeof v=="boolean"?SU:x1,0,x),d&&(M.fp=d),f&&M.modifier(f,this,e),this._pt=M):(!v&&!(n in e)&&ug(n,r),dU.call(this,e,n,g,r,x,p||ya.stringFilter,d))},pU=function(e,n,a,r,l){if(zn(e)&&(e=Ac(e,l,n,a,r)),!Mr(e)||e.style&&e.nodeType||wi(e)||HE(e))return fi(e)?Ac(e,l,n,a,r):e;var c={},f;for(f in e)c[f]=Ac(e[f],l,n,a,r);return c},m1=function(e,n,a,r,l,c){var f,p,d,_;if(pa[e]&&(f=new pa[e]).init(l,f.rawVars?n[e]:pU(n[e],r,l,c,a),a,r,c)!==!1&&(a._pt=p=new $i(a._pt,l,e,0,1,f.render,f,0,f.priority),a!==Yl))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Bs,D0,mg=function o(e,n,a){var r=e.vars,l=r.ease,c=r.startAt,f=r.immediateRender,p=r.lazy,d=r.onUpdate,_=r.runBackwards,v=r.yoyoEase,g=r.keyframes,x=r.autoRevert,M=e._dur,T=e._startAt,y=e._targets,S=e.parent,U=S&&S.data==="nested"?S.vars.targets:y,O=e._overwrite==="auto"&&!rg,R=e.timeline,N=r.easeReverse||v,w,C,b,D,z,k,B,ee,j,q,I,G,Y;if(R&&(!g||!l)&&(l="none"),e._ease=Po(l,zc.ease),e._rEase=N&&(Po(N)||e._ease),e._from=!R&&!!r.runBackwards,e._from&&(e.ratio=1),!R||g&&!r.stagger){if(ee=y[0]?Lo(y[0]).harness:0,G=ee&&r[ee.prop],w=dd(r,cg),T&&(T._zTime<0&&T.progress(1),n<0&&_&&f&&!x?T.render(-1,!0):T.revert(_&&M?Qh:GD),T._lazy=0),c){if(Zs(e._startAt=Kn.set(y,Ea({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!T&&Qi(p),startAt:null,delay:0,onUpdate:d&&function(){return va(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(xi||!f&&!x)&&e._startAt.revert(Qh),f&&M&&n<=0&&a<=0){n&&(e._zTime=n);return}}else if(_&&M&&!T){if(n&&(f=!1),b=Ea({overwrite:!1,data:"isFromStart",lazy:f&&!T&&Qi(p),immediateRender:f,stagger:0,parent:S},w),G&&(b[ee.prop]=G),Zs(e._startAt=Kn.set(y,b)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(xi?e._startAt.revert(Qh):e._startAt.render(-1,!0)),e._zTime=n,!f)o(e._startAt,xn,xn);else if(!n)return}for(e._pt=e._ptCache=0,p=M&&Qi(p)||p&&!M,C=0;C<y.length;C++){if(z=y[C],B=z._gsap||hg(y)[C]._gsap,e._ptLookup[C]=q={},T0[B.id]&&Xs.length&&hd(),I=U===y?C:U.indexOf(z),ee&&(j=new ee).init(z,G||w,e,I,U)!==!1&&(e._pt=D=new $i(e._pt,z,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(se){q[se]=D}),j.priority&&(k=1)),!ee||G)for(b in w)pa[b]&&(j=m1(b,w,e,I,z,U))?j.priority&&(k=1):q[b]=D=pg.call(e,z,b,"get",w[b],I,U,0,r.stringFilter);e._op&&e._op[C]&&e.kill(z,e._op[C]),O&&e._pt&&(Bs=e,Ln.killTweensOf(z,q,e.globalTime(n)),Y=!e.parent,Bs=0),e._pt&&p&&(T0[B.id]=1)}k&&y1(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!Y,g&&n<=0&&R.render(Ba,!0,!0)},mU=function(e,n,a,r,l,c,f,p){var d=(e._pt&&e._ptCache||(e._ptCache={}))[n],_,v,g,x;if(!d)for(d=e._ptCache[n]=[],g=e._ptLookup,x=e._targets.length;x--;){if(_=g[x][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return D0=1,e.vars[n]="+=0",mg(e,f),D0=0,p?Bc(n+" not eligible for reset. Try splitting into individual properties"):1;d.push(_)}for(x=d.length;x--;)v=d[x],_=v._pt||v,_.s=(r||r===0)&&!l?r:_.s+(r||0)+c*_.c,_.c=a-_.s,v.e&&(v.e=Gn(a)+Ai(v.e)),v.b&&(v.b=_.s+Ai(v.b))},_U=function(e,n){var a=e[0]?Lo(e[0]).harness:0,r=a&&a.aliases,l,c,f,p;if(!r)return n;l=uu({},n);for(c in r)if(c in l)for(p=r[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},gU=function(e,n,a,r){var l=n.ease||r||"power1.inOut",c,f;if(wi(n))f=a[e]||(a[e]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:n[c],e:l})},Ac=function(e,n,a,r,l){return zn(e)?e.call(n,a,r,l):fi(e)&&~e.indexOf("random(")?Gc(e):e},_1=fg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",g1={};Ji(_1+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return g1[o]=1});var Kn=(function(o){zE(e,o);function e(a,r,l,c){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=o.call(this,c?r:Tc(r))||this;var p=f.vars,d=p.duration,_=p.delay,v=p.immediateRender,g=p.stagger,x=p.overwrite,M=p.keyframes,T=p.defaults,y=p.scrollTrigger,S=r.parent||Ln,U=(wi(a)||HE(a)?is(a[0]):"length"in r)?[a]:Ha(a),O,R,N,w,C,b,D,z;if(f._targets=U.length?hg(U):Bc("GSAP target "+a+" not found. https://gsap.com",!ya.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,M||g||Uh(d)||Uh(_)){r=f.vars;var k=r.easeReverse||r.yoyoEase;if(O=f.timeline=new Zi({data:"nested",defaults:T||{},targets:S&&S.data==="nested"?S.vars.targets:U}),O.kill(),O.parent=O._dp=Wr(f),O._start=0,g||Uh(d)||Uh(_)){if(w=U.length,D=g&&i1(g),Mr(g))for(C in g)~_1.indexOf(C)&&(z||(z={}),z[C]=g[C]);for(R=0;R<w;R++)N=dd(r,g1),N.stagger=0,k&&(N.easeReverse=k),z&&uu(N,z),b=U[R],N.duration=+Ac(d,Wr(f),R,b,U),N.delay=(+Ac(_,Wr(f),R,b,U)||0)-f._delay,!g&&w===1&&N.delay&&(f._delay=_=N.delay,f._start+=_,N.delay=0),O.to(b,N,D?D(R,b,U):0),O._ease=kt.none;O.duration()?d=_=0:f.timeline=0}else if(M){Tc(Ea(O.vars.defaults,{ease:"none"})),O._ease=Po(M.ease||r.ease||"none");var B=0,ee,j,q;if(wi(M))M.forEach(function(I){return O.to(U,I,">")}),O.duration();else{N={};for(C in M)C==="ease"||C==="easeEach"||gU(C,M[C],N,M.easeEach);for(C in N)for(ee=N[C].sort(function(I,G){return I.t-G.t}),B=0,R=0;R<ee.length;R++)j=ee[R],q={ease:j.e,duration:(j.t-(R?ee[R-1].t:0))/100*d},q[C]=j.v,O.to(U,q,B),B+=q.duration;O.duration()<d&&O.to({},{duration:d-O.duration()})}}d||f.duration(d=O.duration())}else f.timeline=0;return x===!0&&!rg&&(Bs=Wr(f),Ln.killTweensOf(U),Bs=0),fr(S,Wr(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(v||!d&&!M&&f._start===Nn(S._time)&&Qi(v)&&YD(Wr(f))&&S.data!=="nested")&&(f._tTime=-xn,f.render(Math.max(0,-_)||0)),y&&jE(Wr(f),y),f}var n=e.prototype;return n.render=function(r,l,c){var f=this._time,p=this._tDur,d=this._dur,_=r<0,v=r>p-xn&&!_?p:r<xn?0:r,g,x,M,T,y,S,U,O;if(!d)KD(this,r,l,c);else if(v!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(g=v,O=this.timeline,this._repeat){if(T=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(T*100+r,l,c);if(g=Nn(v%T),v===p?(M=this._repeat,g=d):(y=Nn(v/T),M=~~y,M&&M===y?(g=d,M--):g>d&&(g=d)),S=this._yoyo&&M&1,S&&(g=d-g),y=cu(this._tTime,T),g===f&&!c&&this._initted&&M===y)return this._tTime=v,this;M!==y&&this.vars.repeatRefresh&&!S&&!this._lock&&g!==T&&this._initted&&(this._lock=c=1,this.render(Nn(T*M),!0).invalidate()._lock=0)}if(!this._initted){if(e1(this,_?r:g,c,l,v))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&M!==y))return this;if(d!==this._dur)return this.render(r,l,c)}if(this._rEase){var R=g<f;if(R!==this._inv){var N=R?f:d-f;this._inv=R,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=N?(R?-1:1)/N:0,this._invScale=R?-this.ratio:1-this.ratio,this._invEase=R?this._rEase:this._ease}this.ratio=U=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=U=this._ease(g/d);if(this._from&&(this.ratio=U=1-U),this._tTime=v,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&v&&!l&&!y&&(va(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(U,x.d),x=x._next;O&&O.render(r<0?r:O._dur*O._ease(g/this._dur),l,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(_&&b0(this,r,l,c),va(this,"onUpdate")),this._repeat&&M!==y&&this.vars.onRepeat&&!l&&this.parent&&va(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(_&&!this._onUpdate&&b0(this,r,!0,!0),(r||!d)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&Zs(this,1),!l&&!(_&&!f)&&(v||f||S)&&(va(this,v===p?"onComplete":"onReverseComplete",!0),this._prom&&!(v<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},n.resetTo=function(r,l,c,f,p){Vc||_a.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||mg(this,d),_=this._ease(d/this._dur),mU(this,r,l,c,f,_,d,p)?this.resetTo(r,l,c,f,1):(wd(this,0),this.parent||JE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?gc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xi),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,Bs&&Bs.vars.overwrite!==!0)._first||gc(this),this.parent&&c!==this.timeline.totalDuration()&&fu(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=r?Ha(r):f,d=this._ptLookup,_=this._pt,v,g,x,M,T,y,S;if((!l||l==="all")&&WD(f,p))return l==="all"&&(this._pt=0),gc(this);for(v=this._op=this._op||[],l!=="all"&&(fi(l)&&(T={},Ji(l,function(U){return T[U]=1}),l=T),l=_U(f,l)),S=f.length;S--;)if(~p.indexOf(f[S])){g=d[S],l==="all"?(v[S]=l,M=g,x={}):(x=v[S]=v[S]||{},M=l);for(T in M)y=g&&g[T],y&&((!("kill"in y.d)||y.d.kill(T)===!0)&&Rd(this,y,"_pt"),delete g[T]),x!=="all"&&(x[T]=1)}return this._initted&&!this._pt&&_&&gc(this),this},e.to=function(r,l){return new e(r,l,arguments[2])},e.from=function(r,l){return bc(1,arguments)},e.delayedCall=function(r,l,c,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(r,l,c){return bc(2,arguments)},e.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(r,l)},e.killTweensOf=function(r,l,c){return Ln.killTweensOf(r,l,c)},e})(kc);Ea(Kn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ji("staggerTo,staggerFrom,staggerFromTo",function(o){Kn[o]=function(){var e=new Zi,n=R0.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,n)}});var _g=function(e,n,a){return e[n]=a},v1=function(e,n,a){return e[n](a)},vU=function(e,n,a,r){return e[n](r.fp,a)},xU=function(e,n,a){return e.setAttribute(n,a)},gg=function(e,n){return zn(e[n])?v1:sg(e[n])&&e.setAttribute?xU:_g},x1=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},SU=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},S1=function(e,n){var a=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;a;)r=a.p+(a.m?a.m(a.s+a.c*e):Math.round((a.s+a.c*e)*1e4)/1e4)+r,a=a._next;r+=n.c}n.set(n.t,n.p,r,n)},vg=function(e,n){for(var a=n._pt;a;)a.r(e,a.d),a=a._next},yU=function(e,n,a,r){for(var l=this._pt,c;l;)c=l._next,l.p===r&&l.modifier(e,n,a),l=c},MU=function(e){for(var n=this._pt,a,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?Rd(this,n,"_pt"):n.dep||(a=1),n=r;return!a},EU=function(e,n,a,r){r.mSet(e,n,r.m.call(r.tween,a,r.mt),r)},y1=function(e){for(var n=e._pt,a,r,l,c;n;){for(a=n._next,r=l;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:c)?n._prev._next=n:l=n,(n._next=r)?r._prev=n:c=n,n=a}e._pt=l},$i=(function(){function o(n,a,r,l,c,f,p,d,_){this.t=a,this.s=l,this.c=c,this.p=r,this.r=f||x1,this.d=p||this,this.set=d||_g,this.pr=_||0,this._next=n,n&&(n._prev=this)}var e=o.prototype;return e.modifier=function(a,r,l){this.mSet=this.mSet||this.set,this.set=EU,this.m=a,this.mt=l,this.tween=r},o})();Ji(fg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return cg[o]=1});Ma.TweenMax=Ma.TweenLite=Kn;Ma.TimelineLite=Ma.TimelineMax=Zi;Ln=new Zi({sortChildren:!1,defaults:zc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ya.stringFilter=h1;var Fo=[],$h={},TU=[],RM=0,bU=0,E_=function(e){return($h[e]||TU).map(function(n){return n()})},U0=function(){var e=Date.now(),n=[];e-RM>2&&(E_("matchMediaInit"),Fo.forEach(function(a){var r=a.queries,l=a.conditions,c,f,p,d;for(f in r)c=lr.matchMedia(r[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),E_("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(r){return a.add(null,r)})}),RM=e,E_("matchMedia"))},M1=(function(){function o(n,a){this.selector=a&&C0(a),this.data=[],this._r=[],this.isReverted=!1,this.id=bU++,n&&this.add(n)}var e=o.prototype;return e.add=function(a,r,l){zn(a)&&(l=r,r=a,a=zn);var c=this,f=function(){var d=Un,_=c.selector,v;return d&&d!==c&&d.data.push(c),l&&(c.selector=C0(l)),Un=c,v=r.apply(c,arguments),zn(v)&&c._r.push(v),Un=d,c.selector=_,c.isReverted=!1,v};return c.last=f,a===zn?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},e.ignore=function(a){var r=Un;Un=null,a(this),Un=r},e.getTweens=function(){var a=[];return this.data.forEach(function(r){return r instanceof o?a.push.apply(a,r.getTweens()):r instanceof Kn&&!(r.parent&&r.parent.data==="nested")&&a.push(r)}),a},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(a,r){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,v){return v.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof Zi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Kn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var c=Fo.length;c--;)Fo[c].id===this.id&&Fo.splice(c,1)},e.revert=function(a){this.kill(a||{})},o})(),AU=(function(){function o(n){this.contexts=[],this.scope=n,Un&&Un.data.push(this)}var e=o.prototype;return e.add=function(a,r,l){Mr(a)||(a={matches:a});var c=new M1(0,l||this.scope),f=c.conditions={},p,d,_;Un&&!c.selector&&(c.selector=Un.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=a;for(d in a)d==="all"?_=1:(p=lr.matchMedia(a[d]),p&&(Fo.indexOf(c)<0&&Fo.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(U0):p.addEventListener("change",U0)));return _&&r(c,function(v){return c.add(null,v)}),this},e.revert=function(a){this.kill(a||{})},e.kill=function(a){this.contexts.forEach(function(r){return r.kill(a,!0)})},o})(),md={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];n.forEach(function(r){return u1(r)})},timeline:function(e){return new Zi(e)},getTweensOf:function(e,n){return Ln.getTweensOf(e,n)},getProperty:function(e,n,a,r){fi(e)&&(e=Ha(e)[0]);var l=Lo(e||{}).get,c=a?QE:KE;return a==="native"&&(a=""),e&&(n?c((pa[n]&&pa[n].get||l)(e,n,a,r)):function(f,p,d){return c((pa[f]&&pa[f].get||l)(e,f,p,d))})},quickSetter:function(e,n,a){if(e=Ha(e),e.length>1){var r=e.map(function(_){return ea.quickSetter(_,n,a)}),l=r.length;return function(_){for(var v=l;v--;)r[v](_)}}e=e[0]||{};var c=pa[n],f=Lo(e),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var v=new c;Yl._pt=0,v.init(e,a?_+a:_,Yl,0,[e]),v.render(1,v),Yl._pt&&vg(1,Yl)}:f.set(e,p);return c?d:function(_){return d(e,p,a?_+a:_,f,1)}},quickTo:function(e,n,a){var r,l=ea.to(e,Ea((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),a||{})),c=function(p,d,_){return l.resetTo(n,p,d,_)};return c.tween=l,c},isTweening:function(e){return Ln.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Po(e.ease,zc.ease)),MM(zc,e||{})},config:function(e){return MM(ya,e||{})},registerEffect:function(e){var n=e.name,a=e.effect,r=e.plugins,l=e.defaults,c=e.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!pa[f]&&!Ma[f]&&Bc(n+" effect requires "+f+" plugin.")}),x_[n]=function(f,p,d){return a(Ha(f),Ea(p||{},l),d)},c&&(Zi.prototype[n]=function(f,p,d){return this.add(x_[n](f,Mr(p)?p:(d=p)&&{},this),d)})},registerEase:function(e,n){kt[e]=Po(n)},parseEase:function(e,n){return arguments.length?Po(e,n):kt},getById:function(e){return Ln.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var a=new Zi(e),r,l;for(a.smoothChildTiming=Qi(e.smoothChildTiming),Ln.remove(a),a._dp=0,a._time=a._tTime=Ln._time,r=Ln._first;r;)l=r._next,(n||!(!r._dur&&r instanceof Kn&&r.vars.onComplete===r._targets[0]))&&fr(a,r,r._start-r._delay),r=l;return fr(Ln,a,0),a},context:function(e,n){return e?new M1(e,n):Un},matchMedia:function(e){return new AU(e)},matchMediaRefresh:function(){return Fo.forEach(function(e){var n=e.conditions,a,r;for(r in n)n[r]&&(n[r]=!1,a=1);a&&e.revert()})||U0()},addEventListener:function(e,n){var a=$h[e]||($h[e]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(e,n){var a=$h[e],r=a&&a.indexOf(n);r>=0&&a.splice(r,1)},utils:{wrap:iU,wrapYoyo:aU,distribute:i1,random:r1,snap:a1,normalize:nU,getUnit:Ai,clamp:$D,splitColor:c1,toArray:Ha,selector:C0,mapRange:o1,pipe:eU,unitize:tU,interpolate:rU,shuffle:n1},install:XE,effects:x_,ticker:_a,updateRoot:Zi.updateRoot,plugins:pa,globalTimeline:Ln,core:{PropTween:$i,globals:WE,Tween:Kn,Timeline:Zi,Animation:kc,getCache:Lo,_removeLinkedListItem:Rd,reverting:function(){return xi},context:function(e){return e&&Un&&(Un.data.push(e),e._ctx=Un),Un},suppressOverwrites:function(e){return rg=e}}};Ji("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return md[o]=Kn[o]});_a.add(Zi.updateRoot);Yl=md.to({},{duration:0});var RU=function(e,n){for(var a=e._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},CU=function(e,n){var a=e._targets,r,l,c;for(r in n)for(l=a.length;l--;)c=e._ptLookup[l][r],c&&(c=c.d)&&(c._pt&&(c=RU(c,r)),c&&c.modifier&&c.modifier(n[r],e,a[l],r))},T_=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,l,c){c._onInit=function(f){var p,d;if(fi(l)&&(p={},Ji(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}CU(f,l)}}}},ea=md.registerPlugin({name:"attr",init:function(e,n,a,r,l){var c,f,p;this.tween=a;for(c in n)p=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(p||0)+"",n[c],r,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(e,n){for(var a=n._pt;a;)xi?a.set(a.t,a.p,a.b,a):a.r(e,a.d),a=a._next}},{name:"endArray",headless:1,init:function(e,n){for(var a=n.length;a--;)this.add(e,a,e[a]||0,n[a],0,0,0,0,0,1)}},T_("roundProps",w0),T_("modifiers"),T_("snap",a1))||md;Kn.version=Zi.version=ea.version="3.15.0";kE=1;og()&&hu();kt.Power0;kt.Power1;kt.Power2;kt.Power3;kt.Power4;kt.Linear;kt.Quad;kt.Cubic;kt.Quart;kt.Quint;kt.Strong;kt.Elastic;kt.Back;kt.SteppedEase;kt.Bounce;kt.Sine;kt.Expo;kt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var CM,Hs,jl,xg,Uo,wM,Sg,wU=function(){return typeof window<"u"},as={},To=180/Math.PI,eu=Math.PI/180,Bl=Math.atan2,DM=1e8,yg=/([A-Z])/g,DU=/(left|right|width|margin|padding|x)/i,UU=/[\s,\(]\S/,pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},N0=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},NU=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},LU=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},OU=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},PU=function(e,n){var a=n.s+n.c*e;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},E1=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},T1=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},FU=function(e,n,a){return e.style[n]=a},IU=function(e,n,a){return e.style.setProperty(n,a)},zU=function(e,n,a){return e._gsap[n]=a},BU=function(e,n,a){return e._gsap.scaleX=e._gsap.scaleY=a},HU=function(e,n,a,r,l){var c=e._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},GU=function(e,n,a,r,l){var c=e._gsap;c[n]=a,c.renderTransform(l,c)},On="transform",ji=On+"Origin",VU=function o(e,n){var a=this,r=this.target,l=r.style,c=r._gsap;if(e in as&&l){if(this.tfm=this.tfm||{},e!=="transform")e=pr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return a.tfm[f]=qr(r,f)}):this.tfm[e]=c.x?c[e]:qr(r,e),e===ji&&(this.tfm.zOrigin=c.zOrigin);else return pr.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(On)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ji,n,"")),e=On}(l||n)&&this.props.push(e,n,l[e])},b1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},kU=function(){var e=this.props,n=this.target,a=n.style,r=n._gsap,l,c;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?n[e[l]](e[l+2]):n[e[l]]=e[l+2]:e[l+2]?a[e[l]]=e[l+2]:a.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(yg,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=Sg(),(!l||!l.isStart)&&!a[On]&&(b1(a),r.zOrigin&&a[ji]&&(a[ji]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},A1=function(e,n){var a={target:e,props:[],revert:kU,save:VU};return e._gsap||ea.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return a.save(r)}),a},R1,L0=function(e,n){var a=Hs.createElementNS?Hs.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hs.createElement(e);return a&&a.style?a:Hs.createElement(e)},xa=function o(e,n,a){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(yg,"-$1").toLowerCase())||r.getPropertyValue(n)||!a&&o(e,du(n)||n,1)||""},UM="O,Moz,ms,Ms,Webkit".split(","),du=function(e,n,a){var r=n||Uo,l=r.style,c=5;if(e in l&&!a)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(UM[c]+e in l););return c<0?null:(c===3?"ms":c>=0?UM[c]:"")+e},O0=function(){wU()&&window.document&&(CM=window,Hs=CM.document,jl=Hs.documentElement,Uo=L0("div")||{style:{}},L0("div"),On=du(On),ji=On+"Origin",Uo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",R1=!!du("perspective"),Sg=ea.core.reverting,xg=1)},NM=function(e){var n=e.ownerSVGElement,a=L0("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),l;r.style.display="block",a.appendChild(r),jl.appendChild(a);try{l=r.getBBox()}catch{}return a.removeChild(r),jl.removeChild(a),l},LM=function(e,n){for(var a=n.length;a--;)if(e.hasAttribute(n[a]))return e.getAttribute(n[a])},C1=function(e){var n,a;try{n=e.getBBox()}catch{n=NM(e),a=1}return n&&(n.width||n.height)||a||(n=NM(e)),n&&!n.width&&!n.x&&!n.y?{x:+LM(e,["x","cx","x1"])||0,y:+LM(e,["y","cy","y1"])||0,width:0,height:0}:n},w1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&C1(e))},Ks=function(e,n){if(n){var a=e.style,r;n in as&&n!==ji&&(n=On),a.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(r==="--"?n:n.replace(yg,"-$1").toLowerCase())):a.removeAttribute(n)}},Gs=function(e,n,a,r,l,c){var f=new $i(e._pt,n,a,0,1,c?T1:E1);return e._pt=f,f.b=r,f.e=l,e._props.push(a),f},OM={deg:1,rad:1,turn:1},XU={grid:1,flex:1},Qs=function o(e,n,a,r){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=Uo.style,p=DU.test(n),d=e.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),v=100,g=r==="px",x=r==="%",M,T,y,S;if(r===c||!l||OM[r]||OM[c])return l;if(c!=="px"&&!g&&(l=o(e,n,a,"px")),S=e.getCTM&&w1(e),(x||c==="%")&&(as[n]||~n.indexOf("adius")))return M=S?e.getBBox()[p?"width":"height"]:e[_],Gn(x?l/M*v:l/100*M);if(f[p?"width":"height"]=v+(g?c:r),T=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!d?e:e.parentNode,S&&(T=(e.ownerSVGElement||{}).parentNode),(!T||T===Hs||!T.appendChild)&&(T=Hs.body),y=T._gsap,y&&x&&y.width&&p&&y.time===_a.time&&!y.uncache)return Gn(l/y.width*v);if(x&&(n==="height"||n==="width")){var U=e.style[n];e.style[n]=v+r,M=e[_],U?e.style[n]=U:Ks(e,n)}else(x||c==="%")&&!XU[xa(T,"display")]&&(f.position=xa(e,"position")),T===e&&(f.position="static"),T.appendChild(Uo),M=Uo[_],T.removeChild(Uo),f.position="absolute";return p&&x&&(y=Lo(T),y.time=_a.time,y.width=T[_]),Gn(g?M*l/v:M&&l?v/M*l:0)},qr=function(e,n,a,r){var l;return xg||O0(),n in pr&&n!=="transform"&&(n=pr[n],~n.indexOf(",")&&(n=n.split(",")[0])),as[n]&&n!=="transform"?(l=Wc(e,r),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:gd(xa(e,ji))+" "+l.zOrigin+"px"):(l=e.style[n],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=_d[n]&&_d[n](e,n,a)||xa(e,n)||YE(e,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Qs(e,n,l,a)+a:l},WU=function(e,n,a,r){if(!a||a==="none"){var l=du(n,e,1),c=l&&xa(e,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=xa(e,"borderTopColor"))}var f=new $i(this._pt,e.style,n,0,1,S1),p=0,d=0,_,v,g,x,M,T,y,S,U,O,R,N;if(f.b=a,f.e=r,a+="",r+="",r.substring(0,6)==="var(--"&&(r=xa(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(T=e.style[n],e.style[n]=r,r=xa(e,n)||r,T?e.style[n]=T:Ks(e,n)),_=[a,r],h1(_),a=_[0],r=_[1],g=a.match(ql)||[],N=r.match(ql)||[],N.length){for(;v=ql.exec(r);)y=v[0],U=r.substring(p,v.index),M?M=(M+1)%5:(U.substr(-5)==="rgba("||U.substr(-5)==="hsla(")&&(M=1),y!==(T=g[d++]||"")&&(x=parseFloat(T)||0,R=T.substr((x+"").length),y.charAt(1)==="="&&(y=$l(x,y)+R),S=parseFloat(y),O=y.substr((S+"").length),p=ql.lastIndex-O.length,O||(O=O||ya.units[n]||R,p===r.length&&(r+=O,f.e+=O)),R!==O&&(x=Qs(e,n,T,O)||0),f._pt={_next:f._pt,p:U||d===1?U:",",s:x,c:S-x,m:M&&M<4||n==="zIndex"?Math.round:0});f.c=p<r.length?r.substring(p,r.length):""}else f.r=n==="display"&&r==="none"?T1:E1;return VE.test(r)&&(f.e=0),this._pt=f,f},PM={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qU=function(e){var n=e.split(" "),a=n[0],r=n[1]||"50%";return(a==="top"||a==="bottom"||r==="left"||r==="right")&&(e=a,a=r,r=e),n[0]=PM[a]||a,n[1]=PM[r]||r,n.join(" ")},YU=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,r=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)r.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],as[f]&&(p=1,f=f==="transformOrigin"?ji:On),Ks(a,f);p&&(Ks(a,On),c&&(c.svg&&a.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Wc(a,1),c.uncache=1,b1(r)))}},_d={clearProps:function(e,n,a,r,l){if(l.data!=="isFromStart"){var c=e._pt=new $i(e._pt,n,a,0,0,YU);return c.u=r,c.pr=-10,c.tween=l,e._props.push(a),1}}},Xc=[1,0,0,1,0,0],D1={},U1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},FM=function(e){var n=xa(e,On);return U1(n)?Xc:n.substr(7).match(GE).map(Gn)},Mg=function(e,n){var a=e._gsap||Lo(e),r=e.style,l=FM(e),c,f,p,d;return a.svg&&e.getAttribute("transform")?(p=e.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?Xc:l):(l===Xc&&!e.offsetParent&&e!==jl&&!a.svg&&(p=r.display,r.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,f=e.nextElementSibling,jl.appendChild(e)),l=FM(e),p?r.display=p:Ks(e,"display"),d&&(f?c.insertBefore(e,f):c?c.appendChild(e):jl.removeChild(e))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},P0=function(e,n,a,r,l,c){var f=e._gsap,p=l||Mg(e,!0),d=f.xOrigin||0,_=f.yOrigin||0,v=f.xOffset||0,g=f.yOffset||0,x=p[0],M=p[1],T=p[2],y=p[3],S=p[4],U=p[5],O=n.split(" "),R=parseFloat(O[0])||0,N=parseFloat(O[1])||0,w,C,b,D;a?p!==Xc&&(C=x*y-M*T)&&(b=R*(y/C)+N*(-T/C)+(T*U-y*S)/C,D=R*(-M/C)+N*(x/C)-(x*U-M*S)/C,R=b,N=D):(w=C1(e),R=w.x+(~O[0].indexOf("%")?R/100*w.width:R),N=w.y+(~(O[1]||O[0]).indexOf("%")?N/100*w.height:N)),r||r!==!1&&f.smooth?(S=R-d,U=N-_,f.xOffset=v+(S*x+U*T)-S,f.yOffset=g+(S*M+U*y)-U):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=N,f.smooth=!!r,f.origin=n,f.originIsAbsolute=!!a,e.style[ji]="0px 0px",c&&(Gs(c,f,"xOrigin",d,R),Gs(c,f,"yOrigin",_,N),Gs(c,f,"xOffset",v,f.xOffset),Gs(c,f,"yOffset",g,f.yOffset)),e.setAttribute("data-svg-origin",R+" "+N)},Wc=function(e,n){var a=e._gsap||new p1(e);if("x"in a&&!n&&!a.uncache)return a;var r=e.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(e),d=xa(e,ji)||"0",_,v,g,x,M,T,y,S,U,O,R,N,w,C,b,D,z,k,B,ee,j,q,I,G,Y,se,V,F,K,Se,ge,Ne;return _=v=g=T=y=S=U=O=R=0,x=M=1,a.svg=!!(e.getCTM&&w1(e)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(r[On]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[On]!=="none"?p[On]:"")),r.scale=r.rotate=r.translate="none"),C=Mg(e,a.svg),a.svg&&(a.uncache?(Y=e.getBBox(),d=a.xOrigin-Y.x+"px "+(a.yOrigin-Y.y)+"px",G=""):G=!n&&e.getAttribute("data-svg-origin"),P0(e,G||d,!!G||a.originIsAbsolute,a.smooth!==!1,C)),N=a.xOrigin||0,w=a.yOrigin||0,C!==Xc&&(k=C[0],B=C[1],ee=C[2],j=C[3],_=q=C[4],v=I=C[5],C.length===6?(x=Math.sqrt(k*k+B*B),M=Math.sqrt(j*j+ee*ee),T=k||B?Bl(B,k)*To:0,U=ee||j?Bl(ee,j)*To+T:0,U&&(M*=Math.abs(Math.cos(U*eu))),a.svg&&(_-=N-(N*k+w*ee),v-=w-(N*B+w*j))):(Ne=C[6],Se=C[7],V=C[8],F=C[9],K=C[10],ge=C[11],_=C[12],v=C[13],g=C[14],b=Bl(Ne,K),y=b*To,b&&(D=Math.cos(-b),z=Math.sin(-b),G=q*D+V*z,Y=I*D+F*z,se=Ne*D+K*z,V=q*-z+V*D,F=I*-z+F*D,K=Ne*-z+K*D,ge=Se*-z+ge*D,q=G,I=Y,Ne=se),b=Bl(-ee,K),S=b*To,b&&(D=Math.cos(-b),z=Math.sin(-b),G=k*D-V*z,Y=B*D-F*z,se=ee*D-K*z,ge=j*z+ge*D,k=G,B=Y,ee=se),b=Bl(B,k),T=b*To,b&&(D=Math.cos(b),z=Math.sin(b),G=k*D+B*z,Y=q*D+I*z,B=B*D-k*z,I=I*D-q*z,k=G,q=Y),y&&Math.abs(y)+Math.abs(T)>359.9&&(y=T=0,S=180-S),x=Gn(Math.sqrt(k*k+B*B+ee*ee)),M=Gn(Math.sqrt(I*I+Ne*Ne)),b=Bl(q,I),U=Math.abs(b)>2e-4?b*To:0,R=ge?1/(ge<0?-ge:ge):0),a.svg&&(G=e.getAttribute("transform"),a.forceCSS=e.setAttribute("transform","")||!U1(xa(e,On)),G&&e.setAttribute("transform",G))),Math.abs(U)>90&&Math.abs(U)<270&&(l?(x*=-1,U+=T<=0?180:-180,T+=T<=0?180:-180):(M*=-1,U+=U<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-_)?-50:0)))?e.offsetWidth*a.xPercent/100:0)+c,a.y=v-((a.yPercent=v&&(!n&&a.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-v)?-50:0)))?e.offsetHeight*a.yPercent/100:0)+c,a.z=g+c,a.scaleX=Gn(x),a.scaleY=Gn(M),a.rotation=Gn(T)+f,a.rotationX=Gn(y)+f,a.rotationY=Gn(S)+f,a.skewX=U+f,a.skewY=O+f,a.transformPerspective=R+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(r[ji]=gd(d)),a.xOffset=a.yOffset=0,a.force3D=ya.force3D,a.renderTransform=a.svg?KU:R1?N1:ZU,a.uncache=0,a},gd=function(e){return(e=e.split(" "))[0]+" "+e[1]},b_=function(e,n,a){var r=Ai(n);return Gn(parseFloat(n)+parseFloat(Qs(e,"x",a+"px",r)))+r},ZU=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,N1(e,n)},yo="0deg",hc="0px",Mo=") ",N1=function(e,n){var a=n||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,v=a.rotationX,g=a.skewX,x=a.skewY,M=a.scaleX,T=a.scaleY,y=a.transformPerspective,S=a.force3D,U=a.target,O=a.zOrigin,R="",N=S==="auto"&&e&&e!==1||S===!0;if(O&&(v!==yo||_!==yo)){var w=parseFloat(_)*eu,C=Math.sin(w),b=Math.cos(w),D;w=parseFloat(v)*eu,D=Math.cos(w),c=b_(U,c,C*D*-O),f=b_(U,f,-Math.sin(w)*-O),p=b_(U,p,b*D*-O+O)}y!==hc&&(R+="perspective("+y+Mo),(r||l)&&(R+="translate("+r+"%, "+l+"%) "),(N||c!==hc||f!==hc||p!==hc)&&(R+=p!==hc||N?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+Mo),d!==yo&&(R+="rotate("+d+Mo),_!==yo&&(R+="rotateY("+_+Mo),v!==yo&&(R+="rotateX("+v+Mo),(g!==yo||x!==yo)&&(R+="skew("+g+", "+x+Mo),(M!==1||T!==1)&&(R+="scale("+M+", "+T+Mo),U.style[On]=R||"translate(0, 0)"},KU=function(e,n){var a=n||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,v=a.scaleX,g=a.scaleY,x=a.target,M=a.xOrigin,T=a.yOrigin,y=a.xOffset,S=a.yOffset,U=a.forceCSS,O=parseFloat(c),R=parseFloat(f),N,w,C,b,D;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=eu,d*=eu,N=Math.cos(p)*v,w=Math.sin(p)*v,C=Math.sin(p-d)*-g,b=Math.cos(p-d)*g,d&&(_*=eu,D=Math.tan(d-_),D=Math.sqrt(1+D*D),C*=D,b*=D,_&&(D=Math.tan(_),D=Math.sqrt(1+D*D),N*=D,w*=D)),N=Gn(N),w=Gn(w),C=Gn(C),b=Gn(b)):(N=v,b=g,w=C=0),(O&&!~(c+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(O=Qs(x,"x",c,"px"),R=Qs(x,"y",f,"px")),(M||T||y||S)&&(O=Gn(O+M-(M*N+T*C)+y),R=Gn(R+T-(M*w+T*b)+S)),(r||l)&&(D=x.getBBox(),O=Gn(O+r/100*D.width),R=Gn(R+l/100*D.height)),D="matrix("+N+","+w+","+C+","+b+","+O+","+R+")",x.setAttribute("transform",D),U&&(x.style[On]=D)},QU=function(e,n,a,r,l){var c=360,f=fi(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?To:1),d=p-r,_=r+d+"deg",v,g;return f&&(v=l.split("_")[1],v==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),v==="cw"&&d<0?d=(d+c*DM)%c-~~(d/c)*c:v==="ccw"&&d>0&&(d=(d-c*DM)%c-~~(d/c)*c)),e._pt=g=new $i(e._pt,n,a,r,d,NU),g.e=_,g.u="deg",e._props.push(a),g},IM=function(e,n){for(var a in n)e[a]=n[a];return e},JU=function(e,n,a){var r=IM({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,v,g,x,M;r.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[On]=n,f=Wc(a,1),Ks(a,On),a.setAttribute("transform",d)):(d=getComputedStyle(a)[On],c[On]=n,f=Wc(a,1),c[On]=d);for(p in as)d=r[p],_=f[p],d!==_&&l.indexOf(p)<0&&(x=Ai(d),M=Ai(_),v=x!==M?Qs(a,p,d,M):parseFloat(d),g=parseFloat(_),e._pt=new $i(e._pt,f,p,v,g-v,N0),e._pt.u=M||0,e._props.push(p));IM(f,r)};Ji("padding,margin,Width,Radius",function(o,e){var n="Top",a="Right",r="Bottom",l="Left",c=(e<3?[n,a,r,l]:[n+l,n+a,r+a,r+l]).map(function(f){return e<2?o+f:"border"+f+o});_d[e>1?"border"+o:o]=function(f,p,d,_,v){var g,x;if(arguments.length<4)return g=c.map(function(M){return qr(f,M,d)}),x=g.join(" "),x.split(g[0]).length===5?g[0]:x;g=(_+"").split(" "),x={},c.forEach(function(M,T){return x[M]=g[T]=g[T]||g[(T-1)/2|0]}),f.init(p,x,v)}});var L1={name:"css",register:O0,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,a,r,l){var c=this._props,f=e.style,p=a.vars.startAt,d,_,v,g,x,M,T,y,S,U,O,R,N,w,C,b,D;xg||O0(),this.styles=this.styles||A1(e),b=this.styles.props,this.tween=a;for(T in n)if(T!=="autoRound"&&(_=n[T],!(pa[T]&&m1(T,n,a,r,e,l)))){if(x=typeof _,M=_d[T],x==="function"&&(_=_.call(a,r,e,l),x=typeof _),x==="string"&&~_.indexOf("random(")&&(_=Gc(_)),M)M(this,e,T,_,a)&&(C=1);else if(T.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(T)+"").trim(),_+="",Ws.lastIndex=0,Ws.test(d)||(y=Ai(d),S=Ai(_),S?y!==S&&(d=Qs(e,T,d,S)+S):y&&(_+=y)),this.add(f,"setProperty",d,_,r,l,0,0,T),c.push(T),b.push(T,0,f[T]);else if(x!=="undefined"){if(p&&T in p?(d=typeof p[T]=="function"?p[T].call(a,r,e,l):p[T],fi(d)&&~d.indexOf("random(")&&(d=Gc(d)),Ai(d+"")||d==="auto"||(d+=ya.units[T]||Ai(qr(e,T))||""),(d+"").charAt(1)==="="&&(d=qr(e,T))):d=qr(e,T),g=parseFloat(d),U=x==="string"&&_.charAt(1)==="="&&_.substr(0,2),U&&(_=_.substr(2)),v=parseFloat(_),T in pr&&(T==="autoAlpha"&&(g===1&&qr(e,"visibility")==="hidden"&&v&&(g=0),b.push("visibility",0,f.visibility),Gs(this,f,"visibility",g?"inherit":"hidden",v?"inherit":"hidden",!v)),T!=="scale"&&T!=="transform"&&(T=pr[T],~T.indexOf(",")&&(T=T.split(",")[0]))),O=T in as,O){if(this.styles.save(T),D=_,x==="string"&&_.substring(0,6)==="var(--"){if(_=xa(e,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var z=e.style.perspective;e.style.perspective=_,_=xa(e,"perspective"),z?e.style.perspective=z:Ks(e,"perspective")}v=parseFloat(_)}if(R||(N=e._gsap,N.renderTransform&&!n.parseTransform||Wc(e,n.parseTransform),w=n.smoothOrigin!==!1&&N.smooth,R=this._pt=new $i(this._pt,f,On,0,1,N.renderTransform,N,0,-1),R.dep=1),T==="scale")this._pt=new $i(this._pt,N,"scaleY",N.scaleY,(U?$l(N.scaleY,U+v):v)-N.scaleY||0,N0),this._pt.u=0,c.push("scaleY",T),T+="X";else if(T==="transformOrigin"){b.push(ji,0,f[ji]),_=qU(_),N.svg?P0(e,_,0,w,0,this):(S=parseFloat(_.split(" ")[2])||0,S!==N.zOrigin&&Gs(this,N,"zOrigin",N.zOrigin,S),Gs(this,f,T,gd(d),gd(_)));continue}else if(T==="svgOrigin"){P0(e,_,1,w,0,this);continue}else if(T in D1){QU(this,N,T,g,U?$l(g,U+_):_);continue}else if(T==="smoothOrigin"){Gs(this,N,"smooth",N.smooth,_);continue}else if(T==="force3D"){N[T]=_;continue}else if(T==="transform"){JU(this,_,e);continue}}else T in f||(T=du(T)||T);if(O||(v||v===0)&&(g||g===0)&&!UU.test(_)&&T in f)y=(d+"").substr((g+"").length),v||(v=0),S=Ai(_)||(T in ya.units?ya.units[T]:y),y!==S&&(g=Qs(e,T,d,S)),this._pt=new $i(this._pt,O?N:f,T,g,(U?$l(g,U+v):v)-g,!O&&(S==="px"||T==="zIndex")&&n.autoRound!==!1?PU:N0),this._pt.u=S||0,O&&D!==_?(this._pt.b=d,this._pt.e=D,this._pt.r=OU):y!==S&&S!=="%"&&(this._pt.b=d,this._pt.r=LU);else if(T in f)WU.call(this,e,T,d,U?U+_:_);else if(T in e)this.add(e,T,d||e[T],U?U+_:_,r,l);else if(T!=="parseTransform"){ug(T,_);continue}O||(T in f?b.push(T,0,f[T]):typeof e[T]=="function"?b.push(T,2,e[T]()):b.push(T,1,d||e[T])),c.push(T)}}C&&y1(this)},render:function(e,n){if(n.tween._time||!Sg())for(var a=n._pt;a;)a.r(e,a.d),a=a._next;else n.styles.revert()},get:qr,aliases:pr,getSetter:function(e,n,a){var r=pr[n];return r&&r.indexOf(",")<0&&(n=r),n in as&&n!==ji&&(e._gsap.x||qr(e,"x"))?a&&wM===a?n==="scale"?BU:zU:(wM=a||{})&&(n==="scale"?HU:GU):e.style&&!sg(e.style[n])?FU:~n.indexOf("-")?IU:gg(e,n)},core:{_removeProperty:Ks,_getMatrix:Mg}};ea.utils.checkPrefix=du;ea.core.getStyleSaver=A1;(function(o,e,n,a){var r=Ji(o+","+e+","+n,function(l){as[l]=1});Ji(e,function(l){ya.units[l]="deg",D1[l]=1}),pr[r[13]]=o+","+e,Ji(a,function(l){var c=l.split(":");pr[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ji("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ya.units[o]="px"});ea.registerPlugin(L1);var li=ea.registerPlugin(L1)||ea;li.core.Tween;function $U(o,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(o,a.key,a)}}function jU(o,e,n){return e&&$U(o.prototype,e),o}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vi,jh,ga,Vs,ks,tu,O1,bo,nu,P1,Qr,Qa,F1,I1=function(){return vi||typeof window<"u"&&(vi=window.gsap)&&vi.registerPlugin&&vi},z1=1,Zl=[],Ut=[],xr=[],Rc=Date.now,F0=function(e,n){return n},eN=function(){var e=nu.core,n=e.bridge||{},a=e._scrollers,r=e._proxies;a.push.apply(a,Ut),r.push.apply(r,xr),Ut=a,xr=r,F0=function(c,f){return n[c](f)}},qs=function(e,n){return~xr.indexOf(e)&&xr[xr.indexOf(e)+1][n]},Cc=function(e){return!!~P1.indexOf(e)},Li=function(e,n,a,r,l){return e.addEventListener(n,a,{passive:r!==!1,capture:!!l})},Ni=function(e,n,a,r){return e.removeEventListener(n,a,!!r)},Nh="scrollLeft",Lh="scrollTop",I0=function(){return Qr&&Qr.isPressed||Ut.cache++},vd=function(e,n){var a=function r(l){if(l||l===0){z1&&(ga.history.scrollRestoration="manual");var c=Qr&&Qr.isPressed;l=r.v=Math.round(l)||(Qr&&Qr.iOS?1:0),e(l),r.cacheID=Ut.cache,c&&F0("ss",l)}else(n||Ut.cache!==r.cacheID||F0("ref"))&&(r.cacheID=Ut.cache,r.v=e());return r.v+r.offset};return a.offset=0,e&&a},zi={s:Nh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:vd(function(o){return arguments.length?ga.scrollTo(o,ti.sc()):ga.pageXOffset||Vs[Nh]||ks[Nh]||tu[Nh]||0})},ti={s:Lh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:zi,sc:vd(function(o){return arguments.length?ga.scrollTo(zi.sc(),o):ga.pageYOffset||Vs[Lh]||ks[Lh]||tu[Lh]||0})},Yi=function(e,n){return(n&&n._ctx&&n._ctx.selector||vi.utils.toArray)(e)[0]||(typeof e=="string"&&vi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},tN=function(e,n){for(var a=n.length;a--;)if(n[a]===e||n[a].contains(e))return!0;return!1},Js=function(e,n){var a=n.s,r=n.sc;Cc(e)&&(e=Vs.scrollingElement||ks);var l=Ut.indexOf(e),c=r===ti.sc?1:2;!~l&&(l=Ut.push(e)-1),Ut[l+c]||Li(e,"scroll",I0);var f=Ut[l+c],p=f||(Ut[l+c]=vd(qs(e,a),!0)||(Cc(e)?r:vd(function(d){return arguments.length?e[a]=d:e[a]})));return p.target=e,f||(p.smooth=vi.getProperty(e,"scrollBehavior")==="smooth"),p},z0=function(e,n,a){var r=e,l=e,c=Rc(),f=c,p=n||50,d=Math.max(500,p*3),_=function(M,T){var y=Rc();T||y-c>p?(l=r,r=M,f=c,c=y):a?r+=M:r=l+(M-l)/(y-f)*(c-f)},v=function(){l=r=a?0:r,f=c=0},g=function(M){var T=f,y=l,S=Rc();return(M||M===0)&&M!==r&&_(M),c===f||S-f>d?0:(r+(a?y:-y))/((a?S:c)-T)*1e3};return{update:_,reset:v,getVelocity:g}},dc=function(e,n){return n&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},zM=function(e){var n=Math.max.apply(Math,e),a=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(a)?n:a},B1=function(){nu=vi.core.globals().ScrollTrigger,nu&&nu.core&&eN()},H1=function(e){return vi=e||I1(),!jh&&vi&&typeof document<"u"&&document.body&&(ga=window,Vs=document,ks=Vs.documentElement,tu=Vs.body,P1=[ga,Vs,ks,tu],vi.utils.clamp,F1=vi.core.context||function(){},bo="onpointerenter"in tu?"pointer":"mouse",O1=Vn.isTouch=ga.matchMedia&&ga.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ga||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Qa=Vn.eventTypes=("ontouchstart"in ks?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ks?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return z1=0},500),jh=1),nu||B1(),jh};zi.op=ti;Ut.cache=0;var Vn=(function(){function o(n){this.init(n)}var e=o.prototype;return e.init=function(a){jh||H1(vi)||console.warn("Please gsap.registerPlugin(Observer)"),nu||B1();var r=a.tolerance,l=a.dragMinimum,c=a.type,f=a.target,p=a.lineHeight,d=a.debounce,_=a.preventDefault,v=a.onStop,g=a.onStopDelay,x=a.ignore,M=a.wheelSpeed,T=a.event,y=a.onDragStart,S=a.onDragEnd,U=a.onDrag,O=a.onPress,R=a.onRelease,N=a.onRight,w=a.onLeft,C=a.onUp,b=a.onDown,D=a.onChangeX,z=a.onChangeY,k=a.onChange,B=a.onToggleX,ee=a.onToggleY,j=a.onHover,q=a.onHoverEnd,I=a.onMove,G=a.ignoreCheck,Y=a.isNormalizer,se=a.onGestureStart,V=a.onGestureEnd,F=a.onWheel,K=a.onEnable,Se=a.onDisable,ge=a.onClick,Ne=a.scrollSpeed,ne=a.capture,ve=a.allowClicks,Me=a.lockAxis,Oe=a.onLockAxis;this.target=f=Yi(f)||ks,this.vars=a,x&&(x=vi.utils.toArray(x)),r=r||1e-9,l=l||0,M=M||1,Ne=Ne||1,c=c||"wheel,touch,pointer",d=d!==!1,p||(p=parseFloat(ga.getComputedStyle(tu).lineHeight)||22);var tt,Ye,xt,We,it,ct,ft,ce=this,Ft=0,qt=0,jt=a.passive||!_&&a.passive!==!1,pt=Js(f,zi),Yt=Js(f,ti),Q=pt(),It=Yt(),dt=~c.indexOf("touch")&&!~c.indexOf("pointer")&&Qa[0]==="pointerdown",H=Cc(f),A=f.ownerDocument||Vs,$=[0,0,0],ae=[0,0,0],de=0,Pe=function(){return de=Rc()},De=function(Te,ot){return(ce.event=Te)&&x&&tN(Te.target,x)||ot&&dt&&Te.pointerType!=="touch"||G&&G(Te,ot)},_e=function(){ce._vx.reset(),ce._vy.reset(),Ye.pause(),v&&v(ce)},pe=function(){var Te=ce.deltaX=zM($),ot=ce.deltaY=zM(ae),we=Math.abs(Te)>=r,st=Math.abs(ot)>=r;k&&(we||st)&&k(ce,Te,ot,$,ae),we&&(N&&ce.deltaX>0&&N(ce),w&&ce.deltaX<0&&w(ce),D&&D(ce),B&&ce.deltaX<0!=Ft<0&&B(ce),Ft=ce.deltaX,$[0]=$[1]=$[2]=0),st&&(b&&ce.deltaY>0&&b(ce),C&&ce.deltaY<0&&C(ce),z&&z(ce),ee&&ce.deltaY<0!=qt<0&&ee(ce),qt=ce.deltaY,ae[0]=ae[1]=ae[2]=0),(We||xt)&&(I&&I(ce),xt&&(y&&xt===1&&y(ce),U&&U(ce),xt=0),We=!1),ct&&!(ct=!1)&&Oe&&Oe(ce),it&&(F(ce),it=!1),tt=0},Fe=function(Te,ot,we){$[we]+=Te,ae[we]+=ot,ce._vx.update(Te),ce._vy.update(ot),d?tt||(tt=requestAnimationFrame(pe)):pe()},ke=function(Te,ot){Me&&!ft&&(ce.axis=ft=Math.abs(Te)>Math.abs(ot)?"x":"y",ct=!0),ft!=="y"&&($[2]+=Te,ce._vx.update(Te,!0)),ft!=="x"&&(ae[2]+=ot,ce._vy.update(ot,!0)),d?tt||(tt=requestAnimationFrame(pe)):pe()},Be=function(Te){if(!De(Te,1)){Te=dc(Te,_);var ot=Te.clientX,we=Te.clientY,st=ot-ce.x,Qe=we-ce.y,mt=ce.isDragging;ce.x=ot,ce.y=we,(mt||(st||Qe)&&(Math.abs(ce.startX-ot)>=l||Math.abs(ce.startY-we)>=l))&&(xt||(xt=mt?2:1),mt||(ce.isDragging=!0),ke(st,Qe))}},ze=ce.onPress=function(Ce){De(Ce,1)||Ce&&Ce.button||(ce.axis=ft=null,Ye.pause(),ce.isPressed=!0,Ce=dc(Ce),Ft=qt=0,ce.startX=ce.x=Ce.clientX,ce.startY=ce.y=Ce.clientY,ce._vx.reset(),ce._vy.reset(),Li(Y?f:A,Qa[1],Be,jt,!0),ce.deltaX=ce.deltaY=0,O&&O(ce))},Le=ce.onRelease=function(Ce){if(!De(Ce,1)){Ni(Y?f:A,Qa[1],Be,!0);var Te=!isNaN(ce.y-ce.startY),ot=ce.isDragging,we=ot&&(Math.abs(ce.x-ce.startX)>3||Math.abs(ce.y-ce.startY)>3),st=dc(Ce);!we&&Te&&(ce._vx.reset(),ce._vy.reset(),_&&ve&&vi.delayedCall(.08,function(){if(Rc()-de>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(A.createEvent){var Qe=A.createEvent("MouseEvents");Qe.initMouseEvent("click",!0,!0,ga,1,st.screenX,st.screenY,st.clientX,st.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(Qe)}}})),ce.isDragging=ce.isGesturing=ce.isPressed=!1,v&&ot&&!Y&&Ye.restart(!0),xt&&pe(),S&&ot&&S(ce),R&&R(ce,we)}},et=function(Te){return Te.touches&&Te.touches.length>1&&(ce.isGesturing=!0)&&se(Te,ce.isDragging)},at=function(){return(ce.isGesturing=!1)||V(ce)},W=function(Te){if(!De(Te)){var ot=pt(),we=Yt();Fe((ot-Q)*Ne,(we-It)*Ne,1),Q=ot,It=we,v&&Ye.restart(!0)}},Ue=function(Te){if(!De(Te)){Te=dc(Te,_),F&&(it=!0);var ot=(Te.deltaMode===1?p:Te.deltaMode===2?ga.innerHeight:1)*M;Fe(Te.deltaX*ot,Te.deltaY*ot,0),v&&!Y&&Ye.restart(!0)}},xe=function(Te){if(!De(Te)){var ot=Te.clientX,we=Te.clientY,st=ot-ce.x,Qe=we-ce.y;ce.x=ot,ce.y=we,We=!0,v&&Ye.restart(!0),(st||Qe)&&ke(st,Qe)}},Ie=function(Te){ce.event=Te,j(ce)},He=function(Te){ce.event=Te,q(ce)},Re=function(Te){return De(Te)||dc(Te,_)&&ge(ce)};Ye=ce._dc=vi.delayedCall(g||.25,_e).pause(),ce.deltaX=ce.deltaY=0,ce._vx=z0(0,50,!0),ce._vy=z0(0,50,!0),ce.scrollX=pt,ce.scrollY=Yt,ce.isDragging=ce.isGesturing=ce.isPressed=!1,F1(this),ce.enable=function(Ce){return ce.isEnabled||(Li(H?A:f,"scroll",I0),c.indexOf("scroll")>=0&&Li(H?A:f,"scroll",W,jt,ne),c.indexOf("wheel")>=0&&Li(f,"wheel",Ue,jt,ne),(c.indexOf("touch")>=0&&O1||c.indexOf("pointer")>=0)&&(Li(f,Qa[0],ze,jt,ne),Li(A,Qa[2],Le),Li(A,Qa[3],Le),ve&&Li(f,"click",Pe,!0,!0),ge&&Li(f,"click",Re),se&&Li(A,"gesturestart",et),V&&Li(A,"gestureend",at),j&&Li(f,bo+"enter",Ie),q&&Li(f,bo+"leave",He),I&&Li(f,bo+"move",xe)),ce.isEnabled=!0,ce.isDragging=ce.isGesturing=ce.isPressed=We=xt=!1,ce._vx.reset(),ce._vy.reset(),Q=pt(),It=Yt(),Ce&&Ce.type&&ze(Ce),K&&K(ce)),ce},ce.disable=function(){ce.isEnabled&&(Zl.filter(function(Ce){return Ce!==ce&&Cc(Ce.target)}).length||Ni(H?A:f,"scroll",I0),ce.isPressed&&(ce._vx.reset(),ce._vy.reset(),Ni(Y?f:A,Qa[1],Be,!0)),Ni(H?A:f,"scroll",W,ne),Ni(f,"wheel",Ue,ne),Ni(f,Qa[0],ze,ne),Ni(A,Qa[2],Le),Ni(A,Qa[3],Le),Ni(f,"click",Pe,!0),Ni(f,"click",Re),Ni(A,"gesturestart",et),Ni(A,"gestureend",at),Ni(f,bo+"enter",Ie),Ni(f,bo+"leave",He),Ni(f,bo+"move",xe),ce.isEnabled=ce.isPressed=ce.isDragging=!1,Se&&Se(ce))},ce.kill=ce.revert=function(){ce.disable();var Ce=Zl.indexOf(ce);Ce>=0&&Zl.splice(Ce,1),Qr===ce&&(Qr=0)},Zl.push(ce),Y&&Cc(f)&&(Qr=ce),ce.enable(T)},jU(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Vn.version="3.15.0";Vn.create=function(o){return new Vn(o)};Vn.register=H1;Vn.getAll=function(){return Zl.slice()};Vn.getById=function(o){return Zl.filter(function(e){return e.vars.id===o})[0]};I1()&&vi.registerPlugin(Vn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var je,Xl,Dt,ln,ma,tn,Eg,xd,qc,wc,xc,Oh,Ti,Dd,B0,Fi,BM,HM,Wl,G1,A_,V1,Pi,H0,k1,X1,Fs,G0,Tg,iu,bg,Dc,V0,R_,Ph=1,bi=Date.now,C_=bi(),Ga=0,Sc=0,GM=function(e,n,a){var r=da(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return a["_"+n+"Clamp"]=r,r?e.substr(6,e.length-7):e},VM=function(e,n){return n&&(!da(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},nN=function o(){return Sc&&requestAnimationFrame(o)},kM=function(){return Dd=1},XM=function(){return Dd=0},ur=function(e){return e},yc=function(e){return Math.round(e*1e5)/1e5||0},W1=function(){return typeof window<"u"},q1=function(){return je||W1()&&(je=window.gsap)&&je.registerPlugin&&je},ko=function(e){return!!~Eg.indexOf(e)},Y1=function(e){return(e==="Height"?bg:Dt["inner"+e])||ma["client"+e]||tn["client"+e]},Z1=function(e){return qs(e,"getBoundingClientRect")||(ko(e)?function(){return ad.width=Dt.innerWidth,ad.height=bg,ad}:function(){return Zr(e)})},iN=function(e,n,a){var r=a.d,l=a.d2,c=a.a;return(c=qs(e,"getBoundingClientRect"))?function(){return c()[r]}:function(){return(n?Y1(l):e["client"+l])||0}},aN=function(e,n){return!n||~xr.indexOf(e)?Z1(e):function(){return ad}},mr=function(e,n){var a=n.s,r=n.d2,l=n.d,c=n.a;return Math.max(0,(a="scroll"+r)&&(c=qs(e,a))?c()-Z1(e)()[l]:ko(e)?(ma[a]||tn[a])-Y1(r):e[a]-e["offset"+r])},Fh=function(e,n){for(var a=0;a<Wl.length;a+=3)(!n||~n.indexOf(Wl[a+1]))&&e(Wl[a],Wl[a+1],Wl[a+2])},da=function(e){return typeof e=="string"},Ri=function(e){return typeof e=="function"},Mc=function(e){return typeof e=="number"},Ao=function(e){return typeof e=="object"},pc=function(e,n,a){return e&&e.progress(n?0:1)&&a&&e.pause()},Hl=function(e,n,a){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return n(e,a)}):n(e,a);r&&r.totalTime&&(e.callbackAnimation=r)}},Gl=Math.abs,K1="left",Q1="top",Ag="right",Rg="bottom",Io="width",zo="height",Uc="Right",Nc="Left",Lc="Top",Oc="Bottom",Zn="padding",Fa="margin",pu="Width",Cg="Height",ei="px",Ia=function(e){return Dt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},rN=function(e){var n=Ia(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},WM=function(e,n){for(var a in n)a in e||(e[a]=n[a]);return e},Zr=function(e,n){var a=n&&Ia(e)[B0]!=="matrix(1, 0, 0, 1, 0, 0)"&&je.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return a&&a.progress(0).kill(),r},Sd=function(e,n){var a=n.d2;return e["offset"+a]||e["client"+a]||0},J1=function(e){var n=[],a=e.labels,r=e.duration(),l;for(l in a)n.push(a[l]/r);return n},sN=function(e){return function(n){return je.utils.snap(J1(e),n)}},wg=function(e){var n=je.utils.snap(e),a=Array.isArray(e)&&e.slice(0).sort(function(r,l){return r-l});return a?function(r,l,c){c===void 0&&(c=.001);var f;if(!l)return n(r);if(l>0){for(r-=c,f=0;f<a.length;f++)if(a[f]>=r)return a[f];return a[f-1]}else for(f=a.length,r+=c;f--;)if(a[f]<=r)return a[f];return a[0]}:function(r,l,c){c===void 0&&(c=.001);var f=n(r);return!l||Math.abs(f-r)<c||f-r<0==l<0?f:n(l<0?r-e:r+e)}},oN=function(e){return function(n,a){return wg(J1(e))(n,a.direction)}},Ih=function(e,n,a,r){return a.split(",").forEach(function(l){return e(n,l,r)})},ci=function(e,n,a,r,l){return e.addEventListener(n,a,{passive:!r,capture:!!l})},ui=function(e,n,a,r){return e.removeEventListener(n,a,!!r)},zh=function(e,n,a){a=a&&a.wheelHandler,a&&(e(n,"wheel",a),e(n,"touchmove",a))},qM={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Bh={toggleActions:"play",anticipatePin:0},yd={top:0,left:0,center:.5,bottom:1,right:1},ed=function(e,n){if(da(e)){var a=e.indexOf("="),r=~a?+(e.charAt(a-1)+1)*parseFloat(e.substr(a+1)):0;~a&&(e.indexOf("%")>a&&(r*=n/100),e=e.substr(0,a-1)),e=r+(e in yd?yd[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},Hh=function(e,n,a,r,l,c,f,p){var d=l.startColor,_=l.endColor,v=l.fontSize,g=l.indent,x=l.fontWeight,M=ln.createElement("div"),T=ko(a)||qs(a,"pinType")==="fixed",y=e.indexOf("scroller")!==-1,S=T?tn:a.tagName==="IFRAME"?a.contentDocument.body:a,U=e.indexOf("start")!==-1,O=U?d:_,R="border-color:"+O+";font-size:"+v+";color:"+O+";font-weight:"+x+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return R+="position:"+((y||p)&&T?"fixed;":"absolute;"),(y||p||!T)&&(R+=(r===ti?Ag:Rg)+":"+(c+parseFloat(g))+"px;"),f&&(R+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),M._isStart=U,M.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),M.style.cssText=R,M.innerText=n||n===0?e+"-"+n:e,S.children[0]?S.insertBefore(M,S.children[0]):S.appendChild(M),M._offset=M["offset"+r.op.d2],td(M,0,r,U),M},td=function(e,n,a,r){var l={display:"block"},c=a[r?"os2":"p2"],f=a[r?"p2":"os2"];e._isFlipped=r,l[a.a+"Percent"]=r?-100:0,l[a.a]=r?"1px":0,l["border"+c+pu]=1,l["border"+f+pu]=0,l[a.p]=n+"px",je.set(e,l)},wt=[],k0={},Yc,YM=function(){return bi()-Ga>34&&(Yc||(Yc=requestAnimationFrame(es)))},Vl=function(){(!Pi||!Pi.isPressed||Pi.startX>tn.clientWidth)&&(Ut.cache++,Pi?Yc||(Yc=requestAnimationFrame(es)):es(),Ga||Wo("scrollStart"),Ga=bi())},w_=function(){X1=Dt.innerWidth,k1=Dt.innerHeight},Ec=function(e){Ut.cache++,(e===!0||!Ti&&!V1&&!ln.fullscreenElement&&!ln.webkitFullscreenElement&&(!H0||X1!==Dt.innerWidth||Math.abs(Dt.innerHeight-k1)>Dt.innerHeight*.25))&&xd.restart(!0)},Xo={},lN=[],$1=function o(){return ui(Nt,"scrollEnd",o)||No(!0)},Wo=function(e){return Xo[e]&&Xo[e].map(function(n){return n()})||lN},ha=[],j1=function(e){for(var n=0;n<ha.length;n+=5)(!e||ha[n+4]&&ha[n+4].query===e)&&(ha[n].style.cssText=ha[n+1],ha[n].getBBox&&ha[n].setAttribute("transform",ha[n+2]||""),ha[n+3].uncache=1)},eT=function(){return Ut.forEach(function(e){return Ri(e)&&++e.cacheID&&(e.rec=e())})},Dg=function(e,n){var a;for(Fi=0;Fi<wt.length;Fi++)a=wt[Fi],a&&(!n||a._ctx===n)&&(e?a.kill(1):a.revert(!0,!0));Dc=!0,n&&j1(n),n||Wo("revert")},tT=function(e,n){Ut.cache++,(n||!Ii)&&Ut.forEach(function(a){return Ri(a)&&a.cacheID++&&(a.rec=0)}),da(e)&&(Dt.history.scrollRestoration=Tg=e)},Ii,Bo=0,ZM,uN=function(){if(ZM!==Bo){var e=ZM=Bo;requestAnimationFrame(function(){return e===Bo&&No(!0)})}},nT=function(){tn.appendChild(iu),bg=!Pi&&iu.offsetHeight||Dt.innerHeight,tn.removeChild(iu)},KM=function(e){return qc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},No=function(e,n){if(ma=ln.documentElement,tn=ln.body,Eg=[Dt,ln,ma,tn],Ga&&!e&&!Dc){ci(Nt,"scrollEnd",$1);return}nT(),Ii=Nt.isRefreshing=!0,Dc||eT();var a=Wo("refreshInit");G1&&Nt.sort(),n||Dg(),Ut.forEach(function(r){Ri(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),wt.slice(0).forEach(function(r){return r.refresh()}),Dc=!1,wt.forEach(function(r){if(r._subPinOffset&&r.pin){var l=r.vars.horizontal?"offsetWidth":"offsetHeight",c=r.pin[l];r.revert(!0,1),r.adjustPinSpacing(r.pin[l]-c),r.refresh()}}),V0=1,KM(!0),wt.forEach(function(r){var l=mr(r.scroller,r._dir),c=r.vars.end==="max"||r._endClamp&&r.end>l,f=r._startClamp&&r.start>=l;(c||f)&&r.setPositions(f?l-1:r.start,c?Math.max(f?l:r.start+1,l):r.end,!0)}),KM(!1),V0=0,a.forEach(function(r){return r&&r.render&&r.render(-1)}),Ut.forEach(function(r){Ri(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),tT(Tg,1),xd.pause(),Bo++,Ii=2,es(2),wt.forEach(function(r){return Ri(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Ii=Nt.isRefreshing=!1,Wo("refresh")},X0=0,nd=1,Pc,es=function(e){if(e===2||!Ii&&!Dc){Nt.isUpdating=!0,Pc&&Pc.update(0);var n=wt.length,a=bi(),r=a-C_>=50,l=n&&wt[0].scroll();if(nd=X0>l?-1:1,Ii||(X0=l),r&&(Ga&&!Dd&&a-Ga>200&&(Ga=0,Wo("scrollEnd")),xc=C_,C_=a),nd<0){for(Fi=n;Fi-- >0;)wt[Fi]&&wt[Fi].update(0,r);nd=1}else for(Fi=0;Fi<n;Fi++)wt[Fi]&&wt[Fi].update(0,r);Nt.isUpdating=!1}Yc=0},W0=[K1,Q1,Rg,Ag,Fa+Oc,Fa+Uc,Fa+Lc,Fa+Nc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],id=W0.concat([Io,zo,"boxSizing","max"+pu,"max"+Cg,"position",Fa,Zn,Zn+Lc,Zn+Uc,Zn+Oc,Zn+Nc]),cN=function(e,n,a){au(a);var r=e._gsap;if(r.spacerIsNative)au(r.spacerState);else if(e._gsap.swappedIn){var l=n.parentNode;l&&(l.insertBefore(e,n),l.removeChild(n))}e._gsap.swappedIn=!1},D_=function(e,n,a,r){if(!e._gsap.swappedIn){for(var l=W0.length,c=n.style,f=e.style,p;l--;)p=W0[l],c[p]=a[p];c.position=a.position==="absolute"?"absolute":"relative",a.display==="inline"&&(c.display="inline-block"),f[Rg]=f[Ag]="auto",c.flexBasis=a.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Io]=Sd(e,zi)+ei,c[zo]=Sd(e,ti)+ei,c[Zn]=f[Fa]=f[Q1]=f[K1]="0",au(r),f[Io]=f["max"+pu]=a[Io],f[zo]=f["max"+Cg]=a[zo],f[Zn]=a[Zn],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},fN=/([A-Z])/g,au=function(e){if(e){var n=e.t.style,a=e.length,r=0,l,c;for((e.t._gsap||je.core.getCache(e.t)).uncache=1;r<a;r+=2)c=e[r+1],l=e[r],c?n[l]=c:n[l]&&n.removeProperty(l.replace(fN,"-$1").toLowerCase())}},Gh=function(e){for(var n=id.length,a=e.style,r=[],l=0;l<n;l++)r.push(id[l],a[id[l]]);return r.t=e,r},hN=function(e,n,a){for(var r=[],l=e.length,c=a?8:0,f;c<l;c+=2)f=e[c],r.push(f,f in n?n[f]:e[c+1]);return r.t=e.t,r},ad={left:0,top:0},QM=function(e,n,a,r,l,c,f,p,d,_,v,g,x,M){Ri(e)&&(e=e(p)),da(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?ed("0"+e.substr(3),a):0));var T=x?x.time():0,y,S,U;if(x&&x.seek(0),isNaN(e)||(e=+e),Mc(e))x&&(e=je.utils.mapRange(x.scrollTrigger.start,x.scrollTrigger.end,0,g,e)),f&&td(f,a,r,!0);else{Ri(n)&&(n=n(p));var O=(e||"0").split(" "),R,N,w,C;U=Yi(n,p)||tn,R=Zr(U)||{},(!R||!R.left&&!R.top)&&Ia(U).display==="none"&&(C=U.style.display,U.style.display="block",R=Zr(U),C?U.style.display=C:U.style.removeProperty("display")),N=ed(O[0],R[r.d]),w=ed(O[1]||"0",a),e=R[r.p]-d[r.p]-_+N+l-w,f&&td(f,w,r,a-w<20||f._isStart&&w>20),a-=a-w}if(M&&(p[M]=e||-.001,e<0&&(e=0)),c){var b=e+a,D=c._isStart;y="scroll"+r.d2,td(c,b,r,D&&b>20||!D&&(v?Math.max(tn[y],ma[y]):c.parentNode[y])<=b+1),v&&(d=Zr(f),v&&(c.style[r.op.p]=d[r.op.p]-r.op.m-c._offset+ei))}return x&&U&&(y=Zr(U),x.seek(g),S=Zr(U),x._caScrollDist=y[r.p]-S[r.p],e=e/x._caScrollDist*g),x&&x.seek(T),x?e:Math.round(e)},dN=/(webkit|moz|length|cssText|inset)/i,JM=function(e,n,a,r){if(e.parentNode!==n){var l=e.style,c,f;if(n===tn){e._stOrig=l.cssText,f=Ia(e);for(c in f)!+c&&!dN.test(c)&&f[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=f[c]);l.top=a,l.left=r}else l.cssText=e._stOrig;je.core.getCache(e).uncache=1,n.appendChild(e)}},iT=function(e,n,a){var r=n,l=r;return function(c){var f=Math.round(e());return f!==r&&f!==l&&Math.abs(f-r)>3&&Math.abs(f-l)>3&&(c=f,a&&a()),l=r,r=Math.round(c),r}},Vh=function(e,n,a){var r={};r[n.p]="+="+a,je.set(e,r)},$M=function(e,n){var a=Js(e,n),r="_scroll"+n.p2,l=function c(f,p,d,_,v){var g=c.tween,x=p.onComplete,M={};d=d||a();var T=iT(a,d,function(){g.kill(),c.tween=0});return v=_&&v||0,_=_||f-d,g&&g.kill(),p[r]=f,p.inherit=!1,p.modifiers=M,M[r]=function(){return T(d+_*g.ratio+v*g.ratio*g.ratio)},p.onUpdate=function(){Ut.cache++,c.tween&&es()},p.onComplete=function(){c.tween=0,x&&x.call(g)},g=c.tween=je.to(e,p),g};return e[r]=a,a.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},ci(e,"wheel",a.wheelHandler),Nt.isTouch&&ci(e,"touchmove",a.wheelHandler),l},Nt=(function(){function o(n,a){Xl||o.register(je)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),G0(this),this.init(n,a)}var e=o.prototype;return e.init=function(a,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Sc){this.update=this.refresh=this.kill=ur;return}a=WM(da(a)||Mc(a)||a.nodeType?{trigger:a}:a,Bh);var l=a,c=l.onUpdate,f=l.toggleClass,p=l.id,d=l.onToggle,_=l.onRefresh,v=l.scrub,g=l.trigger,x=l.pin,M=l.pinSpacing,T=l.invalidateOnRefresh,y=l.anticipatePin,S=l.onScrubComplete,U=l.onSnapComplete,O=l.once,R=l.snap,N=l.pinReparent,w=l.pinSpacer,C=l.containerAnimation,b=l.fastScrollEnd,D=l.preventOverlaps,z=a.horizontal||a.containerAnimation&&a.horizontal!==!1?zi:ti,k=!v&&v!==0,B=Yi(a.scroller||Dt),ee=je.core.getCache(B),j=ko(B),q=("pinType"in a?a.pinType:qs(B,"pinType")||j&&"fixed")==="fixed",I=[a.onEnter,a.onLeave,a.onEnterBack,a.onLeaveBack],G=k&&a.toggleActions.split(" "),Y="markers"in a?a.markers:Bh.markers,se=j?0:parseFloat(Ia(B)["border"+z.p2+pu])||0,V=this,F=a.onRefreshInit&&function(){return a.onRefreshInit(V)},K=iN(B,j,z),Se=aN(B,j),ge=0,Ne=0,ne=0,ve=Js(B,z),Me,Oe,tt,Ye,xt,We,it,ct,ft,ce,Ft,qt,jt,pt,Yt,Q,It,dt,H,A,$,ae,de,Pe,De,_e,pe,Fe,ke,Be,ze,Le,et,at,W,Ue,xe,Ie,He;if(V._startClamp=V._endClamp=!1,V._dir=z,y*=45,V.scroller=B,V.scroll=C?C.time.bind(C):ve,Ye=ve(),V.vars=a,r=r||a.animation,"refreshPriority"in a&&(G1=1,a.refreshPriority===-9999&&(Pc=V)),ee.tweenScroll=ee.tweenScroll||{top:$M(B,ti),left:$M(B,zi)},V.tweenTo=Me=ee.tweenScroll[z.p],V.scrubDuration=function(we){et=Mc(we)&&we,et?Le?Le.duration(we):Le=je.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:et,paused:!0,onComplete:function(){return S&&S(V)}}):(Le&&Le.progress(1).kill(),Le=0)},r&&(r.vars.lazy=!1,r._initted&&!V.isReverted||r.vars.immediateRender!==!1&&a.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),V.animation=r.pause(),r.scrollTrigger=V,V.scrubDuration(v),Be=0,p||(p=r.vars.id)),R&&((!Ao(R)||R.push)&&(R={snapTo:R}),"scrollBehavior"in tn.style&&je.set(j?[tn,ma]:B,{scrollBehavior:"auto"}),Ut.forEach(function(we){return Ri(we)&&we.target===(j?ln.scrollingElement||ma:B)&&(we.smooth=!1)}),tt=Ri(R.snapTo)?R.snapTo:R.snapTo==="labels"?sN(r):R.snapTo==="labelsDirectional"?oN(r):R.directional!==!1?function(we,st){return wg(R.snapTo)(we,bi()-Ne<500?0:st.direction)}:je.utils.snap(R.snapTo),at=R.duration||{min:.1,max:2},at=Ao(at)?wc(at.min,at.max):wc(at,at),W=je.delayedCall(R.delay||et/2||.1,function(){var we=ve(),st=bi()-Ne<500,Qe=Me.tween;if((st||Math.abs(V.getVelocity())<10)&&!Qe&&!Dd&&ge!==we){var mt=(we-We)/pt,Rn=r&&!k?r.totalProgress():mt,bt=st?0:(Rn-ze)/(bi()-xc)*1e3||0,cn=je.utils.clamp(-mt,1-mt,Gl(bt/2)*bt/.185),mn=mt+(R.inertia===!1?0:cn),St,yt,Mt=R,Jn=Mt.onStart,fn=Mt.onInterrupt,ai=Mt.onComplete;if(St=tt(mn,V),Mc(St)||(St=mn),yt=Math.max(0,Math.round(We+St*pt)),we<=it&&we>=We&&yt!==we){if(Qe&&!Qe._initted&&Qe.data<=Gl(yt-we))return;R.inertia===!1&&(cn=St-mt),Me(yt,{duration:at(Gl(Math.max(Gl(mn-Rn),Gl(St-Rn))*.185/bt/.05||0)),ease:R.ease||"power3",data:Gl(yt-we),onInterrupt:function(){return W.restart(!0)&&fn&&Hl(V,fn)},onComplete:function(){V.update(),ge=ve(),r&&!k&&(Le?Le.resetTo("totalProgress",St,r._tTime/r._tDur):r.progress(St)),Be=ze=r&&!k?r.totalProgress():V.progress,U&&U(V),ai&&Hl(V,ai)}},we,cn*pt,yt-we-cn*pt),Jn&&Hl(V,Jn,Me.tween)}}else V.isActive&&ge!==we&&W.restart(!0)}).pause()),p&&(k0[p]=V),g=V.trigger=Yi(g||x!==!0&&x),He=g&&g._gsap&&g._gsap.stRevert,He&&(He=He(V)),x=x===!0?g:Yi(x),da(f)&&(f={targets:g,className:f}),x&&(M===!1||M===Fa||(M=!M&&x.parentNode&&x.parentNode.style&&Ia(x.parentNode).display==="flex"?!1:Zn),V.pin=x,Oe=je.core.getCache(x),Oe.spacer?Yt=Oe.pinState:(w&&(w=Yi(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Oe.spacerIsNative=!!w,w&&(Oe.spacerState=Gh(w))),Oe.spacer=dt=w||ln.createElement("div"),dt.classList.add("pin-spacer"),p&&dt.classList.add("pin-spacer-"+p),Oe.pinState=Yt=Gh(x)),a.force3D!==!1&&je.set(x,{force3D:!0}),V.spacer=dt=Oe.spacer,ke=Ia(x),Pe=ke[M+z.os2],A=je.getProperty(x),$=je.quickSetter(x,z.a,ei),D_(x,dt,ke),It=Gh(x)),Y){qt=Ao(Y)?WM(Y,qM):qM,ce=Hh("scroller-start",p,B,z,qt,0),Ft=Hh("scroller-end",p,B,z,qt,0,ce),H=ce["offset"+z.op.d2];var Re=Yi(qs(B,"content")||B);ct=this.markerStart=Hh("start",p,Re,z,qt,H,0,C),ft=this.markerEnd=Hh("end",p,Re,z,qt,H,0,C),C&&(Ie=je.quickSetter([ct,ft],z.a,ei)),!q&&!(xr.length&&qs(B,"fixedMarkers")===!0)&&(rN(j?tn:B),je.set([ce,Ft],{force3D:!0}),_e=je.quickSetter(ce,z.a,ei),Fe=je.quickSetter(Ft,z.a,ei))}if(C){var Ce=C.vars.onUpdate,Te=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){V.update(0,0,1),Ce&&Ce.apply(C,Te||[])})}if(V.previous=function(){return wt[wt.indexOf(V)-1]},V.next=function(){return wt[wt.indexOf(V)+1]},V.revert=function(we,st){if(!st)return V.kill(!0);var Qe=we!==!1||!V.enabled,mt=Ti;Qe!==V.isReverted&&(Qe&&(Ue=Math.max(ve(),V.scroll.rec||0),ne=V.progress,xe=r&&r.progress()),ct&&[ct,ft,ce,Ft].forEach(function(Rn){return Rn.style.display=Qe?"none":"block"}),Qe&&(Ti=V,V.update(Qe)),x&&(!N||!V.isActive)&&(Qe?cN(x,dt,Yt):D_(x,dt,Ia(x),De)),Qe||V.update(Qe),Ti=mt,V.isReverted=Qe)},V.refresh=function(we,st,Qe,mt){if(!((Ti||!V.enabled)&&!st)){if(x&&we&&Ga){ci(o,"scrollEnd",$1);return}!Ii&&F&&F(V),Ti=V,Me.tween&&!Qe&&(Me.tween.kill(),Me.tween=0),Le&&Le.pause(),T&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Xe){return Xe.vars.immediateRender&&Xe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),V.isReverted||V.revert(!0,!0),V._subPinOffset=!1;var Rn=K(),bt=Se(),cn=C?C.duration():mr(B,z),mn=pt<=.01||!pt,St=0,yt=mt||0,Mt=Ao(Qe)?Qe.end:a.end,Jn=a.endTrigger||g,fn=Ao(Qe)?Qe.start:a.start||(a.start===0||!g?0:x?"0 0":"0 100%"),ai=V.pinnedContainer=a.pinnedContainer&&Yi(a.pinnedContainer,V),ri=g&&Math.max(0,wt.indexOf(V))||0,Sn=ri,yn,Mn,hi,Ta,En,Rt,Di,L,J,le,ie,re,Ge;for(Y&&Ao(Qe)&&(re=je.getProperty(ce,z.p),Ge=je.getProperty(Ft,z.p));Sn-- >0;)Rt=wt[Sn],Rt.end||Rt.refresh(0,1)||(Ti=V),Di=Rt.pin,Di&&(Di===g||Di===x||Di===ai)&&!Rt.isReverted&&(le||(le=[]),le.unshift(Rt),Rt.revert(!0,!0)),Rt!==wt[Sn]&&(ri--,Sn--);for(Ri(fn)&&(fn=fn(V)),fn=GM(fn,"start",V),We=QM(fn,g,Rn,z,ve(),ct,ce,V,bt,se,q,cn,C,V._startClamp&&"_startClamp")||(x?-.001:0),Ri(Mt)&&(Mt=Mt(V)),da(Mt)&&!Mt.indexOf("+=")&&(~Mt.indexOf(" ")?Mt=(da(fn)?fn.split(" ")[0]:"")+Mt:(St=ed(Mt.substr(2),Rn),Mt=da(fn)?fn:(C?je.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,We):We)+St,Jn=g)),Mt=GM(Mt,"end",V),it=Math.max(We,QM(Mt||(Jn?"100% 0":cn),Jn,Rn,z,ve()+St,ft,Ft,V,bt,se,q,cn,C,V._endClamp&&"_endClamp"))||-.001,St=0,Sn=ri;Sn--;)Rt=wt[Sn]||{},Di=Rt.pin,Di&&Rt.start-Rt._pinPush<=We&&!C&&Rt.end>0&&(yn=Rt.end-(V._startClamp?Math.max(0,Rt.start):Rt.start),(Di===g&&Rt.start-Rt._pinPush<We||Di===ai)&&isNaN(fn)&&(St+=yn*(1-Rt.progress)),Di===x&&(yt+=yn));if(We+=St,it+=St,V._startClamp&&(V._startClamp+=St),V._endClamp&&!Ii&&(V._endClamp=it||-.001,it=Math.min(it,mr(B,z))),pt=it-We||(We-=.01)&&.001,mn&&(ne=je.utils.clamp(0,1,je.utils.normalize(We,it,Ue))),V._pinPush=yt,ct&&St&&(yn={},yn[z.a]="+="+St,ai&&(yn[z.p]="-="+ve()),je.set([ct,ft],yn)),x&&!(V0&&V.end>=mr(B,z)))yn=Ia(x),Ta=z===ti,hi=ve(),ae=parseFloat(A(z.a))+yt,!cn&&it>1&&(ie=(j?ln.scrollingElement||ma:B).style,ie={style:ie,value:ie["overflow"+z.a.toUpperCase()]},j&&Ia(tn)["overflow"+z.a.toUpperCase()]!=="scroll"&&(ie.style["overflow"+z.a.toUpperCase()]="scroll")),D_(x,dt,yn),It=Gh(x),Mn=Zr(x,!0),L=q&&Js(B,Ta?zi:ti)(),M?(De=[M+z.os2,pt+yt+ei],De.t=dt,Sn=M===Zn?Sd(x,z)+pt+yt:0,Sn&&(De.push(z.d,Sn+ei),dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Sn+ei)),au(De),ai&&wt.forEach(function(Xe){Xe.pin===ai&&Xe.vars.pinSpacing!==!1&&(Xe._subPinOffset=!0)}),q&&ve(Ue)):(Sn=Sd(x,z),Sn&&dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Sn+ei)),q&&(En={top:Mn.top+(Ta?hi-We:L)+ei,left:Mn.left+(Ta?L:hi-We)+ei,boxSizing:"border-box",position:"fixed"},En[Io]=En["max"+pu]=Math.ceil(Mn.width)+ei,En[zo]=En["max"+Cg]=Math.ceil(Mn.height)+ei,En[Fa]=En[Fa+Lc]=En[Fa+Uc]=En[Fa+Oc]=En[Fa+Nc]="0",En[Zn]=yn[Zn],En[Zn+Lc]=yn[Zn+Lc],En[Zn+Uc]=yn[Zn+Uc],En[Zn+Oc]=yn[Zn+Oc],En[Zn+Nc]=yn[Zn+Nc],Q=hN(Yt,En,N),Ii&&ve(0)),r?(J=r._initted,A_(1),r.render(r.duration(),!0,!0),de=A(z.a)-ae+pt+yt,pe=Math.abs(pt-de)>1,q&&pe&&Q.splice(Q.length-2,2),r.render(0,!0,!0),J||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),A_(0)):de=pt,ie&&(ie.value?ie.style["overflow"+z.a.toUpperCase()]=ie.value:ie.style.removeProperty("overflow-"+z.a));else if(g&&ve()&&!C)for(Mn=g.parentNode;Mn&&Mn!==tn;)Mn._pinOffset&&(We-=Mn._pinOffset,it-=Mn._pinOffset),Mn=Mn.parentNode;le&&le.forEach(function(Xe){return Xe.revert(!1,!0)}),V.start=We,V.end=it,Ye=xt=Ii?Ue:ve(),!C&&!Ii&&(Ye<Ue&&ve(Ue),V.scroll.rec=0),V.revert(!1,!0),Ne=bi(),W&&(ge=-1,W.restart(!0)),Ti=0,r&&k&&(r._initted||xe)&&r.progress()!==xe&&r.progress(xe||0,!0).render(r.time(),!0,!0),(mn||ne!==V.progress||C||T||r&&!r._initted)&&(r&&!k&&(r._initted||ne||r.vars.immediateRender!==!1)&&r.totalProgress(C&&We<-.001&&!ne?je.utils.normalize(We,it,0):ne,!0),V.progress=mn||(Ye-We)/pt===ne?0:ne),x&&M&&(dt._pinOffset=Math.round(V.progress*de)),Le&&Le.invalidate(),isNaN(re)||(re-=je.getProperty(ce,z.p),Ge-=je.getProperty(Ft,z.p),Vh(ce,z,re),Vh(ct,z,re-(mt||0)),Vh(Ft,z,Ge),Vh(ft,z,Ge-(mt||0))),mn&&!Ii&&V.update(),_&&!Ii&&!jt&&(jt=!0,_(V),jt=!1)}},V.getVelocity=function(){return(ve()-xt)/(bi()-xc)*1e3||0},V.endAnimation=function(){pc(V.callbackAnimation),r&&(Le?Le.progress(1):r.paused()?k||pc(r,V.direction<0,1):pc(r,r.reversed()))},V.labelToScroll=function(we){return r&&r.labels&&(We||V.refresh()||We)+r.labels[we]/r.duration()*pt||0},V.getTrailing=function(we){var st=wt.indexOf(V),Qe=V.direction>0?wt.slice(0,st).reverse():wt.slice(st+1);return(da(we)?Qe.filter(function(mt){return mt.vars.preventOverlaps===we}):Qe).filter(function(mt){return V.direction>0?mt.end<=We:mt.start>=it})},V.update=function(we,st,Qe){if(!(C&&!Qe&&!we)){var mt=Ii===!0?Ue:V.scroll(),Rn=we?0:(mt-We)/pt,bt=Rn<0?0:Rn>1?1:Rn||0,cn=V.progress,mn,St,yt,Mt,Jn,fn,ai,ri;if(st&&(xt=Ye,Ye=C?ve():mt,R&&(ze=Be,Be=r&&!k?r.totalProgress():bt)),y&&x&&!Ti&&!Ph&&Ga&&(!bt&&We<mt+(mt-xt)/(bi()-xc)*y?bt=1e-4:bt===1&&it>mt+(mt-xt)/(bi()-xc)*y&&(bt=.9999)),bt!==cn&&V.enabled){if(mn=V.isActive=!!bt&&bt<1,St=!!cn&&cn<1,fn=mn!==St,Jn=fn||!!bt!=!!cn,V.direction=bt>cn?1:-1,V.progress=bt,Jn&&!Ti&&(yt=bt&&!cn?0:bt===1?1:cn===1?2:3,k&&(Mt=!fn&&G[yt+1]!=="none"&&G[yt+1]||G[yt],ri=r&&(Mt==="complete"||Mt==="reset"||Mt in r))),D&&(fn||ri)&&(ri||v||!r)&&(Ri(D)?D(V):V.getTrailing(D).forEach(function(hi){return hi.endAnimation()})),k||(Le&&!Ti&&!Ph?(Le._dp._time-Le._start!==Le._time&&Le.render(Le._dp._time-Le._start),Le.resetTo?Le.resetTo("totalProgress",bt,r._tTime/r._tDur):(Le.vars.totalProgress=bt,Le.invalidate().restart())):r&&r.totalProgress(bt,!!(Ti&&(Ne||we)))),x){if(we&&M&&(dt.style[M+z.os2]=Pe),!q)$(yc(ae+de*bt));else if(Jn){if(ai=!we&&bt>cn&&it+1>mt&&mt+1>=mr(B,z),N)if(!we&&(mn||ai)){var Sn=Zr(x,!0),yn=mt-We;JM(x,tn,Sn.top+(z===ti?yn:0)+ei,Sn.left+(z===ti?0:yn)+ei)}else JM(x,dt);au(mn||ai?Q:It),pe&&bt<1&&mn||$(ae+(bt===1&&!ai?de:0))}}R&&!Me.tween&&!Ti&&!Ph&&W.restart(!0),f&&(fn||O&&bt&&(bt<1||!R_))&&qc(f.targets).forEach(function(hi){return hi.classList[mn||O?"add":"remove"](f.className)}),c&&!k&&!we&&c(V),Jn&&!Ti?(k&&(ri&&(Mt==="complete"?r.pause().totalProgress(1):Mt==="reset"?r.restart(!0).pause():Mt==="restart"?r.restart(!0):r[Mt]()),c&&c(V)),(fn||!R_)&&(d&&fn&&Hl(V,d),I[yt]&&Hl(V,I[yt]),O&&(bt===1?V.kill(!1,1):I[yt]=0),fn||(yt=bt===1?1:3,I[yt]&&Hl(V,I[yt]))),b&&!mn&&Math.abs(V.getVelocity())>(Mc(b)?b:2500)&&(pc(V.callbackAnimation),Le?Le.progress(1):pc(r,Mt==="reverse"?1:!bt,1))):k&&c&&!Ti&&c(V)}if(Fe){var Mn=C?mt/C.duration()*(C._caScrollDist||0):mt;_e(Mn+(ce._isFlipped?1:0)),Fe(Mn)}Ie&&Ie(-mt/C.duration()*(C._caScrollDist||0))}},V.enable=function(we,st){V.enabled||(V.enabled=!0,ci(B,"resize",Ec),j||ci(B,"scroll",Vl),F&&ci(o,"refreshInit",F),we!==!1&&(V.progress=ne=0,Ye=xt=ge=ve()),st!==!1&&V.refresh())},V.getTween=function(we){return we&&Me?Me.tween:Le},V.setPositions=function(we,st,Qe,mt){if(C){var Rn=C.scrollTrigger,bt=C.duration(),cn=Rn.end-Rn.start;we=Rn.start+cn*we/bt,st=Rn.start+cn*st/bt}V.refresh(!1,!1,{start:VM(we,Qe&&!!V._startClamp),end:VM(st,Qe&&!!V._endClamp)},mt),V.update()},V.adjustPinSpacing=function(we){if(De&&we){var st=De.indexOf(z.d)+1;De[st]=parseFloat(De[st])+we+ei,De[1]=parseFloat(De[1])+we+ei,au(De)}},V.disable=function(we,st){if(we!==!1&&V.revert(!0,!0),V.enabled&&(V.enabled=V.isActive=!1,st||Le&&Le.pause(),Ue=0,Oe&&(Oe.uncache=1),F&&ui(o,"refreshInit",F),W&&(W.pause(),Me.tween&&Me.tween.kill()&&(Me.tween=0)),!j)){for(var Qe=wt.length;Qe--;)if(wt[Qe].scroller===B&&wt[Qe]!==V)return;ui(B,"resize",Ec),j||ui(B,"scroll",Vl)}},V.kill=function(we,st){V.disable(we,st),Le&&!st&&Le.kill(),p&&delete k0[p];var Qe=wt.indexOf(V);Qe>=0&&wt.splice(Qe,1),Qe===Fi&&nd>0&&Fi--,Qe=0,wt.forEach(function(mt){return mt.scroller===V.scroller&&(Qe=1)}),Qe||Ii||(V.scroll.rec=0),r&&(r.scrollTrigger=null,we&&r.revert({kill:!1}),st||r.kill()),ct&&[ct,ft,ce,Ft].forEach(function(mt){return mt.parentNode&&mt.parentNode.removeChild(mt)}),Pc===V&&(Pc=0),x&&(Oe&&(Oe.uncache=1),Qe=0,wt.forEach(function(mt){return mt.pin===x&&Qe++}),Qe||(Oe.spacer=0)),a.onKill&&a.onKill(V)},wt.push(V),V.enable(!1,!1),He&&He(V),r&&r.add&&!pt){var ot=V.update;V.update=function(){V.update=ot,Ut.cache++,We||it||V.refresh()},je.delayedCall(.01,V.update),pt=.01,We=it=0}else V.refresh();x&&uN()},o.register=function(a){return Xl||(je=a||q1(),W1()&&window.document&&o.enable(),Xl=Sc),Xl},o.defaults=function(a){if(a)for(var r in a)Bh[r]=a[r];return Bh},o.disable=function(a,r){Sc=0,wt.forEach(function(c){return c[r?"kill":"disable"](a)}),ui(Dt,"wheel",Vl),ui(ln,"scroll",Vl),clearInterval(Oh),ui(ln,"touchcancel",ur),ui(tn,"touchstart",ur),Ih(ui,ln,"pointerdown,touchstart,mousedown",kM),Ih(ui,ln,"pointerup,touchend,mouseup",XM),xd.kill(),Fh(ui);for(var l=0;l<Ut.length;l+=3)zh(ui,Ut[l],Ut[l+1]),zh(ui,Ut[l],Ut[l+2])},o.enable=function(){if(Dt=window,ln=document,ma=ln.documentElement,tn=ln.body,je){if(qc=je.utils.toArray,wc=je.utils.clamp,G0=je.core.context||ur,A_=je.core.suppressOverwrites||ur,Tg=Dt.history.scrollRestoration||"auto",X0=Dt.pageYOffset||0,je.core.globals("ScrollTrigger",o),tn){Sc=1,iu=document.createElement("div"),iu.style.height="100vh",iu.style.position="absolute",nT(),nN(),Vn.register(je),o.isTouch=Vn.isTouch,Fs=Vn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),H0=Vn.isTouch===1,ci(Dt,"wheel",Vl),Eg=[Dt,ln,ma,tn],je.matchMedia?(o.matchMedia=function(_){var v=je.matchMedia(),g;for(g in _)v.add(g,_[g]);return v},je.addEventListener("matchMediaInit",function(){eT(),Dg()}),je.addEventListener("matchMediaRevert",function(){return j1()}),je.addEventListener("matchMedia",function(){No(0,1),Wo("matchMedia")}),je.matchMedia().add("(orientation: portrait)",function(){return w_(),w_})):console.warn("Requires GSAP 3.11.0 or later"),w_(),ci(ln,"scroll",Vl);var a=tn.hasAttribute("style"),r=tn.style,l=r.borderTopStyle,c=je.core.Animation.prototype,f,p;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",f=Zr(tn),ti.m=Math.round(f.top+ti.sc())||0,zi.m=Math.round(f.left+zi.sc())||0,l?r.borderTopStyle=l:r.removeProperty("border-top-style"),a||(tn.setAttribute("style",""),tn.removeAttribute("style")),Oh=setInterval(YM,250),je.delayedCall(.5,function(){return Ph=0}),ci(ln,"touchcancel",ur),ci(tn,"touchstart",ur),Ih(ci,ln,"pointerdown,touchstart,mousedown",kM),Ih(ci,ln,"pointerup,touchend,mouseup",XM),B0=je.utils.checkPrefix("transform"),id.push(B0),Xl=bi(),xd=je.delayedCall(.2,No).pause(),Wl=[ln,"visibilitychange",function(){var _=Dt.innerWidth,v=Dt.innerHeight;ln.hidden?(BM=_,HM=v):(BM!==_||HM!==v)&&Ec()},ln,"DOMContentLoaded",No,Dt,"load",No,Dt,"resize",Ec],Fh(ci),wt.forEach(function(_){return _.enable(0,1)}),p=0;p<Ut.length;p+=3)zh(ui,Ut[p],Ut[p+1]),zh(ui,Ut[p],Ut[p+2])}else if(ln){var d=function _(){o.enable(),ln.removeEventListener("DOMContentLoaded",_)};ln.addEventListener("DOMContentLoaded",d)}}},o.config=function(a){"limitCallbacks"in a&&(R_=!!a.limitCallbacks);var r=a.syncInterval;r&&clearInterval(Oh)||(Oh=r)&&setInterval(YM,r),"ignoreMobileResize"in a&&(H0=o.isTouch===1&&a.ignoreMobileResize),"autoRefreshEvents"in a&&(Fh(ui)||Fh(ci,a.autoRefreshEvents||"none"),V1=(a.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(a,r){var l=Yi(a),c=Ut.indexOf(l),f=ko(l);~c&&Ut.splice(c,f?6:2),r&&(f?xr.unshift(Dt,r,tn,r,ma,r):xr.unshift(l,r))},o.clearMatchMedia=function(a){wt.forEach(function(r){return r._ctx&&r._ctx.query===a&&r._ctx.kill(!0,!0)})},o.isInViewport=function(a,r,l){var c=(da(a)?Yi(a):a).getBoundingClientRect(),f=c[l?Io:zo]*r||0;return l?c.right-f>0&&c.left+f<Dt.innerWidth:c.bottom-f>0&&c.top+f<Dt.innerHeight},o.positionInViewport=function(a,r,l){da(a)&&(a=Yi(a));var c=a.getBoundingClientRect(),f=c[l?Io:zo],p=r==null?f/2:r in yd?yd[r]*f:~r.indexOf("%")?parseFloat(r)*f/100:parseFloat(r)||0;return l?(c.left+p)/Dt.innerWidth:(c.top+p)/Dt.innerHeight},o.killAll=function(a){if(wt.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),a!==!0){var r=Xo.killAll||[];Xo={},r.forEach(function(l){return l()})}},o})();Nt.version="3.15.0";Nt.saveStyles=function(o){return o?qc(o).forEach(function(e){if(e&&e.style){var n=ha.indexOf(e);n>=0&&ha.splice(n,5),ha.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),je.core.getCache(e),G0())}}):ha};Nt.revert=function(o,e){return Dg(!o,e)};Nt.create=function(o,e){return new Nt(o,e)};Nt.refresh=function(o){return o?Ec(!0):(Xl||Nt.register())&&No(!0)};Nt.update=function(o){return++Ut.cache&&es(o===!0?2:0)};Nt.clearScrollMemory=tT;Nt.maxScroll=function(o,e){return mr(o,e?zi:ti)};Nt.getScrollFunc=function(o,e){return Js(Yi(o),e?zi:ti)};Nt.getById=function(o){return k0[o]};Nt.getAll=function(){return wt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Nt.isScrolling=function(){return!!Ga};Nt.snapDirectional=wg;Nt.addEventListener=function(o,e){var n=Xo[o]||(Xo[o]=[]);~n.indexOf(e)||n.push(e)};Nt.removeEventListener=function(o,e){var n=Xo[o],a=n&&n.indexOf(e);a>=0&&n.splice(a,1)};Nt.batch=function(o,e){var n=[],a={},r=e.interval||.016,l=e.batchMax||1e9,c=function(d,_){var v=[],g=[],x=je.delayedCall(r,function(){_(v,g),v=[],g=[]}).pause();return function(M){v.length||x.restart(!0),v.push(M.trigger),g.push(M),l<=v.length&&x.progress(1)}},f;for(f in e)a[f]=f.substr(0,2)==="on"&&Ri(e[f])&&f!=="onRefreshInit"?c(f,e[f]):e[f];return Ri(l)&&(l=l(),ci(Nt,"refresh",function(){return l=e.batchMax()})),qc(o).forEach(function(p){var d={};for(f in a)d[f]=a[f];d.trigger=p,n.push(Nt.create(d))}),n};var jM=function(e,n,a,r){return n>r?e(r):n<0&&e(0),a>r?(r-n)/(a-n):a<0?n/(n-a):1},U_=function o(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(Vn.isTouch?" pinch-zoom":""):"none",e===ma&&o(tn,n)},kh={auto:1,scroll:1},pN=function(e){var n=e.event,a=e.target,r=e.axis,l=(n.changedTouches?n.changedTouches[0]:n).target,c=l._gsap||je.core.getCache(l),f=bi(),p;if(!c._isScrollT||f-c._isScrollT>2e3){for(;l&&l!==tn&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(kh[(p=Ia(l)).overflowY]||kh[p.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==a&&!ko(l)&&(kh[(p=Ia(l)).overflowY]||kh[p.overflowX]),c._isScrollT=f}(c._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},aT=function(e,n,a,r){return Vn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&pN,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return a&&ci(ln,Vn.eventTypes[0],tE,!1,!0)},onDisable:function(){return ui(ln,Vn.eventTypes[0],tE,!0)}})},mN=/(input|label|select|textarea)/i,eE,tE=function(e){var n=mN.test(e.target.tagName);(n||eE)&&(e._gsapAllow=!0,eE=n)},_N=function(e){Ao(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,a=n.normalizeScrollX,r=n.momentum,l=n.allowNestedScroll,c=n.onRelease,f,p,d=Yi(e.target)||ma,_=je.core.globals().ScrollSmoother,v=_&&_.get(),g=Fs&&(e.content&&Yi(e.content)||v&&e.content!==!1&&!v.smooth()&&v.content()),x=Js(d,ti),M=Js(d,zi),T=1,y=(Vn.isTouch&&Dt.visualViewport?Dt.visualViewport.scale*Dt.visualViewport.width:Dt.outerWidth)/Dt.innerWidth,S=0,U=Ri(r)?function(){return r(f)}:function(){return r||2.8},O,R,N=aT(d,e.type,!0,l),w=function(){return R=!1},C=ur,b=ur,D=function(){p=mr(d,ti),b=wc(Fs?1:0,p),a&&(C=wc(0,mr(d,zi))),O=Bo},z=function(){g._gsap.y=yc(parseFloat(g._gsap.y)+x.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",x.offset=x.cacheID=0},k=function(){if(R){requestAnimationFrame(w);var Y=yc(f.deltaY/2),se=b(x.v-Y);if(g&&se!==x.v+x.offset){x.offset=se-x.v;var V=yc((parseFloat(g&&g._gsap.y)||0)-x.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+V+", 0, 1)",g._gsap.y=V+"px",x.cacheID=Ut.cache,es()}return!0}x.offset&&z(),R=!0},B,ee,j,q,I=function(){D(),B.isActive()&&B.vars.scrollY>p&&(x()>p?B.progress(1)&&x(p):B.resetTo("scrollY",p))};return g&&je.set(g,{y:"+=0"}),e.ignoreCheck=function(G){return Fs&&G.type==="touchmove"&&k()||T>1.05&&G.type!=="touchstart"||f.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){R=!1;var G=T;T=yc((Dt.visualViewport&&Dt.visualViewport.scale||1)/y),B.pause(),G!==T&&U_(d,T>1.01?!0:a?!1:"x"),ee=M(),j=x(),D(),O=Bo},e.onRelease=e.onGestureStart=function(G,Y){if(x.offset&&z(),!Y)q.restart(!0);else{Ut.cache++;var se=U(),V,F;a&&(V=M(),F=V+se*.05*-G.velocityX/.227,se*=jM(M,V,F,mr(d,zi)),B.vars.scrollX=C(F)),V=x(),F=V+se*.05*-G.velocityY/.227,se*=jM(x,V,F,mr(d,ti)),B.vars.scrollY=b(F),B.invalidate().duration(se).play(.01),(Fs&&B.vars.scrollY>=p||V>=p-1)&&je.to({},{onUpdate:I,duration:se})}c&&c(G)},e.onWheel=function(){B._ts&&B.pause(),bi()-S>1e3&&(O=0,S=bi())},e.onChange=function(G,Y,se,V,F){if(Bo!==O&&D(),Y&&a&&M(C(V[2]===Y?ee+(G.startX-G.x):M()+Y-V[1])),se){x.offset&&z();var K=F[2]===se,Se=K?j+G.startY-G.y:x()+se-F[1],ge=b(Se);K&&Se!==ge&&(j+=ge-Se),x(ge)}(se||Y)&&es()},e.onEnable=function(){U_(d,a?!1:"x"),Nt.addEventListener("refresh",I),ci(Dt,"resize",I),x.smooth&&(x.target.style.scrollBehavior="auto",x.smooth=M.smooth=!1),N.enable()},e.onDisable=function(){U_(d,!0),ui(Dt,"resize",I),Nt.removeEventListener("refresh",I),N.kill()},e.lockAxis=e.lockAxis!==!1,f=new Vn(e),f.iOS=Fs,Fs&&!x()&&x(1),Fs&&je.ticker.add(ur),q=f._dc,B=je.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:a?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:iT(x,x(),function(){return B.pause()})},onUpdate:es,onComplete:q.vars.onComplete}),f};Nt.sort=function(o){if(Ri(o))return wt.sort(o);var e=Dt.pageYOffset||0;return Nt.getAll().forEach(function(n){return n._sortY=n.trigger?e+n.trigger.getBoundingClientRect().top:n.start+Dt.innerHeight}),wt.sort(o||function(n,a){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((a.vars.containerAnimation?1e6:a._sortY)+(a.vars.refreshPriority||0)*-1e6)})};Nt.observe=function(o){return new Vn(o)};Nt.normalizeScroll=function(o){if(typeof o>"u")return Pi;if(o===!0&&Pi)return Pi.enable();if(o===!1){Pi&&Pi.kill(),Pi=o;return}var e=o instanceof Vn?o:_N(o);return Pi&&Pi.target===e.target&&Pi.kill(),ko(e.target)&&(Pi=e),e};Nt.core={_getVelocityProp:z0,_inputObserver:aT,_scrollers:Ut,_proxies:xr,bridge:{ss:function(){Ga||Wo("scrollStart"),Ga=bi()},ref:function(){return Ti}}};q1()&&je.registerPlugin(Nt);li.registerPlugin(Nt);const kl="expo.out";function gN(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return()=>{};const e=li.context(()=>{li.set(".nav",{y:-34,opacity:0}),li.set(".openingCurtain",{scaleY:1,transformOrigin:"top"}),li.set(".heroTitle .titleChar",{yPercent:116,scaleY:.48,opacity:0,transformOrigin:"50% 100%"}),li.set(".hero .eyebrow, .heroLead, .heroActions, .heroStats span",{y:42,opacity:0}),li.set(".heroGeometry span",{scaleX:.42,opacity:0,transformOrigin:"left center"}),li.timeline({defaults:{ease:kl}}).to(".openingCurtain",{scaleY:0,duration:1.25,ease:"power4.inOut"}).to(".heroGeometry span",{scaleX:1,opacity:1,duration:1.35,stagger:.08},"-=0.9").to(".heroTitle .titleChar",{yPercent:0,scaleY:1,opacity:1,duration:1.18,stagger:.11},"-=0.72").to(".hero .eyebrow, .heroLead, .heroActions, .heroStats span",{y:0,opacity:1,duration:1.05,stagger:.1},"-=0.72").to(".nav",{y:0,opacity:1,duration:.95},"-=0.75"),li.utils.toArray(".section, .contact").forEach(a=>{const r=a.querySelector(".eyebrow"),l=a.querySelector("h2"),c=a.querySelectorAll(".portraitCard, .profileText, .dataPanel, .projectOverlay, .strengthCard, .contactLinks a"),f=a.querySelectorAll(".portraitCard img, .projectCard > img, .projectGallery img");r&&li.from(r,{scrollTrigger:{trigger:a,start:"top 72%"},y:112,scale:1.28,opacity:0,duration:1.25,ease:kl}),l&&li.from(l,{scrollTrigger:{trigger:a,start:"top 68%"},y:88,letterSpacing:"0.08em",opacity:0,duration:1.35,ease:kl}),c.length&&li.from(c,{scrollTrigger:{trigger:a,start:"top 60%"},y:76,opacity:0,duration:1.18,stagger:.13,ease:kl}),f.forEach(p=>{li.fromTo(p,{clipPath:"inset(0 100% 0 0)",scale:1.08},{scrollTrigger:{trigger:p,start:"top 78%"},clipPath:"inset(0 0% 0 0)",scale:1,duration:1.45,ease:"power4.out"}),li.to(p,{scrollTrigger:{trigger:p,start:"top bottom",end:"bottom top",scrub:1.1},yPercent:-4,ease:"none"})})}),li.utils.toArray(".projectCard").forEach(a=>{const r=a.querySelector(".projectOverlay"),l=a.querySelector(".projectOverlay strong");l&&li.from(l,{scrollTrigger:{trigger:a,start:"top 68%"},x:a.classList.contains("reverse")?-120:120,opacity:0,duration:1.35,ease:kl}),r&&li.from(r,{scrollTrigger:{trigger:a,start:"top 68%"},"--panel-shift":"18%",duration:1.5,ease:kl})})});return()=>{e.revert(),Nt.getAll().forEach(n=>n.kill())}}const vN=[{title:"美丽黄浦邮票设计",meta:"视觉设计 / 城市文化 / 2025.06",image:"/assets/huangpu-stamps.jpg",desc:"围绕上海黄浦区城市文化形象，提取海关大楼、豫园、玉兰花等元素，完成系列邮票主视觉、配色系统与组合展示。",tags:["城市视觉","插画构图","版式延展"]},{title:"高智长者智慧康养伴侣",meta:"文创产品 / 康养设计 / 2026.04-06",image:"/assets/memory-care.png",desc:"面向老年群体的智能健康陪伴设备概念，围绕活动记录、健康监测与高光时刻整理构建产品形态和展示场景。",tags:["用户调研","产品概念","展示海报"]},{title:"额济纳拼图文创礼盒",meta:"文旅文创 / 礼盒设计",image:"/assets/ejina-gift.jpg",desc:"以地域文化和旅行记忆为核心，探索拼图、包装与礼盒系统的组合表达，形成具备纪念属性的文创方案。",tags:["文旅叙事","包装系统","产品展示"]},{title:"手绘与概念草图",meta:"手绘表达 / 造型训练",image:"/assets/sketch-study.jpg",gallery:["/assets/sketch-study.jpg","/assets/sketch-patterns.jpg","/assets/sketch-architecture.jpg","/assets/sketch-structure.jpg"],desc:"通过手绘草图和概念图训练观察、结构、造型与视觉表达能力，为后续 UI、IP、产品概念提供前期表达基础。",tags:["草图表达","造型基础","概念推演"]}],xN=[["视觉整合","能将城市文化、传统元素与现代视觉语言结合，形成统一的画面系统。"],["交互意识","学习 UI 与交互设计，关注信息层级、使用路径和界面体验的基础逻辑。"],["产品表达","具备从用户需求、概念草图到展示海报的基础产品设计表达能力。"],["工具适应","熟悉 Photoshop、Illustrator、Figma，并能结合 Blender、Rhino 与 AI 工具辅助创作。"]];function SN(){return An.useEffect(()=>gN(),[]),be.createElement("main",null,be.createElement("div",{className:"openingCurtain","aria-hidden":"true"}),be.createElement("div",{className:"siteMagicBackground","aria-hidden":"true"},be.createElement(UD,{color:"#940e20",colorTwo:"#1a64ed",ringCount:7,speed:.72,attenuation:8,lineThickness:1.35,baseRadius:.2,radiusStep:.09,scaleRate:.09,opacity:.72,blur:0,noiseAmount:.035,rotation:-18,ringGap:1.46,fadeIn:.72,fadeOut:.52,followMouse:!1,parallax:.02})),be.createElement(yN,null),be.createElement(TN,null),be.createElement(bN,null),be.createElement(AN,null),be.createElement(RN,null))}function yN(){const o=EN(),e=MN();return be.createElement("section",{className:"hero",id:"top"},be.createElement("div",{className:"videoShell","aria-hidden":"true"},be.createElement("video",{ref:o,className:"heroVideo",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:"/assets/hero-poster.jpg"}),be.createElement("div",{className:"motionFallback"})),be.createElement("div",{className:"heroGeometry","aria-hidden":"true"},be.createElement("span",{className:"geoCircle"}),be.createElement("span",{className:"geoSlab teal"}),be.createElement("span",{className:"geoSlab black"}),be.createElement("span",{className:"geoSlab redOne"}),be.createElement("span",{className:"geoSlab redTwo"}),be.createElement("span",{className:"geoSlab redThree"})),be.createElement("nav",{className:`nav ${e?"isFloating":""}`},be.createElement("div",{className:"navGlass"},be.createElement("a",{href:"#top",className:"brand"},"SYH.PORTFOLIO"),be.createElement("div",{className:"navLinks"},be.createElement("a",{href:"#profile"},"经历"),be.createElement("a",{href:"#projects"},"项目"),be.createElement("a",{href:"#strengths"},"优势"),be.createElement("a",{href:"#contact"},"联系")),be.createElement("a",{className:"navCta",href:"mailto:2579010691@qq.com"},"联系我"))),be.createElement("div",{className:"heroInner"},be.createElement("div",{className:"heroCopy"},be.createElement("p",{className:"eyebrow"},"Shanghai Jian Qiao University · Art & Technology"),be.createElement("h1",{className:"heroTitle","aria-label":"沈奕涵"},be.createElement("span",{className:"titleMask"},be.createElement("span",{className:"titleChar"},"沈")),be.createElement("span",{className:"titleMask"},be.createElement("span",{className:"titleChar"},"奕")),be.createElement("span",{className:"titleMask"},be.createElement("span",{className:"titleChar"},"涵"))),be.createElement("p",{className:"heroLead"},"23级艺术与科技学生，正在寻找视觉设计、交互设计、UI设计、新媒体设计与文创产品设计方向实习。"),be.createElement("div",{className:"heroActions"},be.createElement("a",{href:"#projects",className:"primaryBtn"},"查看作品"),be.createElement("a",{href:"tel:17321265608",className:"ghostBtn"},"173 2126 5608"))),be.createElement("p",{className:"heroSideLabel"},"PORTFOLIO · 2026")),be.createElement("div",{className:"heroStats","aria-label":"作品集概览"},be.createElement("span",null,be.createElement("strong",null,"04"),"精选作品"),be.createElement("span",null,be.createElement("strong",null,"06+"),"设计技能"),be.createElement("span",null,be.createElement("strong",null,"2023"),"入学年级")))}function MN(){const[o,e]=An.useState(!1);return An.useEffect(()=>{const n=()=>{e(window.scrollY>window.innerHeight-120)};return n(),window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[]),o}function EN(){const o=An.useRef(null);return An.useEffect(()=>{const e=document.createElement("canvas"),n=e.getContext("2d"),a=o.current;let r=0,l;const c=()=>{e.width=1280,e.height=720},f=()=>{const p=e.width,d=e.height;r+=.008,n.fillStyle="#05070b",n.fillRect(0,0,p,d);const _=n.createRadialGradient(p*(.24+Math.sin(r)*.06),d*(.42+Math.cos(r*.8)*.08),20,p*.46,d*.44,p*.78);_.addColorStop(0,"rgba(61, 215, 255, 0.32)"),_.addColorStop(.48,"rgba(113, 104, 255, 0.18)"),_.addColorStop(1,"rgba(5, 7, 11, 0)"),n.fillStyle=_,n.fillRect(0,0,p,d),n.strokeStyle="rgba(226, 244, 255, 0.08)",n.lineWidth=1;for(let v=-80;v<p+120;v+=64)n.beginPath(),n.moveTo(v+Math.sin(r*2+v)*18,0),n.lineTo(v-140+Math.cos(r+v)*24,d),n.stroke();for(let v=0;v<42;v+=1){const g=(v*143+r*4200)%(p+260)-130,x=d*(.18+v*37%70/100);n.strokeStyle=`rgba(123, 223, 255, ${.08+v%5*.018})`,n.beginPath(),n.moveTo(g,x),n.lineTo(g+180+v%7*24,x-90+v%9*18),n.stroke()}l=requestAnimationFrame(f)};return e.captureStream&&a&&(c(),f(),a.srcObject=e.captureStream(30),a.play().catch(()=>{})),()=>{cancelAnimationFrame(l),a!=null&&a.srcObject&&a.srcObject.getTracks().forEach(p=>p.stop())}},[]),o}function TN(){return be.createElement("section",{className:"section profile",id:"profile"},be.createElement("div",{className:"sectionHead"},be.createElement("p",{className:"eyebrow"},"Profile"),be.createElement("h2",null,"把文化元素转译成清晰、克制、有记忆点的视觉方案。")),be.createElement(ND,{color:"#600f26",speed:.78,chaos:.1,borderRadius:18,className:"profileElectric"},be.createElement("div",{className:"profileGrid"},be.createElement("figure",{className:"portraitCard"},be.createElement("img",{src:"/assets/avatar.jpg",alt:"沈奕涵头像"}),be.createElement("figcaption",null,"Art & Technology / Visual Design Intern")),be.createElement("div",{className:"profileText"},be.createElement("p",null,"我是上海建桥学院 2023 级艺术与科技专业学生。关注视觉设计、UI 与交互、数字媒体和文创产品方向，能够完成从创意构思、草图表达到视觉呈现的基础设计流程。"),be.createElement("p",null,"目前作品涵盖城市文化邮票视觉、沪剧主题 IP、智慧康养产品概念、文旅文创礼盒与手绘训练。希望进入真实项目环境，继续提升版式、视觉系统、用户体验和项目落地能力。"),be.createElement("div",{className:"infoGrid"},be.createElement("span",null,"上海市松江区"),be.createElement("a",{href:"mailto:2579010691@qq.com"},"2579010691@qq.com"),be.createElement("a",{href:"tel:17321265608"},"173 2126 5608"),be.createElement("span",null,"求职城市：上海"))),be.createElement("div",{className:"dataPanel"},be.createElement("div",null,be.createElement("strong",null,"Photoshop"),be.createElement("span",null,"视觉修图与合成")),be.createElement("div",null,be.createElement("strong",null,"Illustrator"),be.createElement("span",null,"矢量图形与版式")),be.createElement("div",null,be.createElement("strong",null,"Figma"),be.createElement("span",null,"UI 原型与界面设计")),be.createElement("div",null,be.createElement("strong",null,"Blender / Rhino"),be.createElement("span",null,"三维建模基础"))))))}function bN(){return be.createElement("section",{className:"section projects",id:"projects"},be.createElement("div",{className:"sectionHead split"},be.createElement("div",null,be.createElement("p",{className:"eyebrow"},"Selected Works"),be.createElement("h2",null,"精选项目")),be.createElement("p",null,"以大图展示作品气质，后续可继续补充项目详情页、过程图、动效与完整作品集 PDF。")),be.createElement("div",{className:"projectGrid"},vN.map((o,e)=>be.createElement("article",{className:`projectCard ${e%2?"reverse":""}`,key:o.title},o.gallery?be.createElement("div",{className:"projectGallery","aria-label":`${o.title}作品图`},o.gallery.map((n,a)=>be.createElement("img",{src:n,alt:`${o.title} ${a+1}`,key:n}))):be.createElement("img",{src:o.image,alt:o.title}),be.createElement("div",{className:"projectOverlay"},be.createElement("strong",null,String(e+1).padStart(2,"0")),be.createElement("p",null,o.meta),be.createElement("h3",null,o.title),be.createElement("span",null,o.desc),be.createElement("div",{className:"tagRow"},o.tags.map(n=>be.createElement("em",{key:n},n))))))))}function AN(){return be.createElement("section",{className:"section strengths",id:"strengths"},be.createElement("div",{className:"sectionHead"},be.createElement("p",{className:"eyebrow"},"Advantages"),be.createElement("h2",null,"个人优势")),be.createElement("div",{className:"strengthGrid"},xN.map(([o,e],n)=>be.createElement("article",{className:"strengthCard",key:o},be.createElement("span",null,String(n+1).padStart(2,"0")),be.createElement("h3",null,o),be.createElement("p",null,e)))))}function RN(){return be.createElement("section",{className:"contact",id:"contact"},be.createElement("div",{className:"contactInner"},be.createElement("p",{className:"eyebrow"},"Contact"),be.createElement("h2",null,"期待参与真实项目，把想法推进到可被看见的作品。"),be.createElement("div",{className:"contactLinks"},be.createElement("a",{href:"mailto:2579010691@qq.com"},"2579010691@qq.com"),be.createElement("a",{href:"tel:17321265608"},"173 2126 5608"))))}mA.createRoot(document.getElementById("root")).render(be.createElement(SN,null));
