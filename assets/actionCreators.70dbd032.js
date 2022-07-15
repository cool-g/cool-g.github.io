import{r as f,y as X,m as $,w as A,j as I,i as L,b as P,k as Y,e as tt,z as et,E as rt,G as ot,H as nt,h as C,M as it,I as at,J as st,S as lt,K as ut,N as W,F as q,O as ct,Q as dt}from"./index.83c6c1e7.js";function Ft(n,t){const i=n;for(const c in t)t.hasOwnProperty(c)&&(i[c]=t[c]);return i}var ft=function(t){return function(i,c){var u=f.exports.useRef(!1);t(function(){return function(){u.current=!1}},[]),t(function(){if(!u.current)u.current=!0;else return i()},c)}},ht=function(t){return typeof t=="function"};function G(n,t){if(n===t)return!0;for(var i=0;i<n.length;i++)if(!Object.is(n[i],t[i]))return!1;return!0}function pt(n){var t=f.exports.useRef(n);return t.current=n,t}var mt=function(t){var i=pt(t);f.exports.useEffect(function(){return function(){i.current()}},[])},vt=mt,gt=!!(typeof window!="undefined"&&window.document&&window.document.createElement),J=gt;function N(n,t){if(!!J){if(!n)return t;var i;return ht(n)?i=n():"current"in n?i=n.current:i=n,i}}var bt=function(t){var i=function(u,p,l){var g=f.exports.useRef(!1),_=f.exports.useRef([]),y=f.exports.useRef([]),d=f.exports.useRef();t(function(){var h,v=Array.isArray(l)?l:[l],x=v.map(function(E){return N(E)});if(!g.current){g.current=!0,_.current=x,y.current=p,d.current=u();return}(x.length!==_.current.length||!G(x,_.current)||!G(p,y.current))&&((h=d.current)===null||h===void 0||h.call(d),_.current=x,y.current=p,d.current=u())}),vt(function(){var h;(h=d.current)===null||h===void 0||h.call(d),g.current=!1})};return i},wt=bt,yt=wt(f.exports.useEffect),xt=yt;(function(){if(typeof window!="object")return;if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});return}function n(e){try{return e.defaultView&&e.defaultView.frameElement||null}catch{return null}}var t=function(e){for(var r=e,o=n(r);o;)r=o.ownerDocument,o=n(r);return r}(window.document),i=[],c=null,u=null;function p(e){this.time=e.time,this.target=e.target,this.rootBounds=E(e.rootBounds),this.boundingClientRect=E(e.boundingClientRect),this.intersectionRect=E(e.intersectionRect||x()),this.isIntersecting=!!e.intersectionRect;var r=this.boundingClientRect,o=r.width*r.height,a=this.intersectionRect,s=a.width*a.height;o?this.intersectionRatio=Number((s/o).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0}function l(e,r){var o=r||{};if(typeof e!="function")throw new Error("callback must be a function");if(o.root&&o.root.nodeType!=1&&o.root.nodeType!=9)throw new Error("root must be a Document or Element");this._checkForIntersections=_(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(o.rootMargin),this.thresholds=this._initThresholds(o.threshold),this.root=o.root||null,this.rootMargin=this._rootMarginValues.map(function(a){return a.value+a.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}l.prototype.THROTTLE_TIMEOUT=100,l.prototype.POLL_INTERVAL=null,l.prototype.USE_MUTATION_OBSERVER=!0,l._setupCrossOriginUpdater=function(){return c||(c=function(e,r){!e||!r?u=x():u=R(e,r),i.forEach(function(o){o._checkForIntersections()})}),c},l._resetCrossOriginUpdater=function(){c=null,u=null},l.prototype.observe=function(e){var r=this._observationTargets.some(function(o){return o.element==e});if(!r){if(!(e&&e.nodeType==1))throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(e.ownerDocument),this._checkForIntersections()}},l.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(r){return r.element!=e}),this._unmonitorIntersections(e.ownerDocument),this._observationTargets.length==0&&this._unregisterInstance()},l.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},l.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},l.prototype._initThresholds=function(e){var r=e||[0];return Array.isArray(r)||(r=[r]),r.sort().filter(function(o,a,s){if(typeof o!="number"||isNaN(o)||o<0||o>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return o!==s[a-1]})},l.prototype._parseRootMargin=function(e){var r=e||"0px",o=r.split(/\s+/).map(function(a){var s=/^(-?\d*\.?\d+)(px|%)$/.exec(a);if(!s)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(s[1]),unit:s[2]}});return o[1]=o[1]||o[0],o[2]=o[2]||o[0],o[3]=o[3]||o[1],o},l.prototype._monitorIntersections=function(e){var r=e.defaultView;if(!!r&&this._monitoringDocuments.indexOf(e)==-1){var o=this._checkForIntersections,a=null,s=null;this.POLL_INTERVAL?a=r.setInterval(o,this.POLL_INTERVAL):(y(r,"resize",o,!0),y(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in r&&(s=new r.MutationObserver(o),s.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push(function(){var w=e.defaultView;w&&(a&&w.clearInterval(a),d(w,"resize",o,!0)),d(e,"scroll",o,!0),s&&s.disconnect()});var b=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=b){var m=n(e);m&&this._monitorIntersections(m.ownerDocument)}}},l.prototype._unmonitorIntersections=function(e){var r=this._monitoringDocuments.indexOf(e);if(r!=-1){var o=this.root&&(this.root.ownerDocument||this.root)||t,a=this._observationTargets.some(function(m){var w=m.element.ownerDocument;if(w==e)return!0;for(;w&&w!=o;){var T=n(w);if(w=T&&T.ownerDocument,w==e)return!0}return!1});if(!a){var s=this._monitoringUnsubscribes[r];if(this._monitoringDocuments.splice(r,1),this._monitoringUnsubscribes.splice(r,1),s(),e!=o){var b=n(e);b&&this._unmonitorIntersections(b.ownerDocument)}}}},l.prototype._unmonitorAllIntersections=function(){var e=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var r=0;r<e.length;r++)e[r]()},l.prototype._checkForIntersections=function(){if(!(!this.root&&c&&!u)){var e=this._rootIsInDom(),r=e?this._getRootRect():x();this._observationTargets.forEach(function(o){var a=o.element,s=v(a),b=this._rootContainsTarget(a),m=o.entry,w=e&&b&&this._computeTargetAndRootIntersection(a,s,r),T=null;this._rootContainsTarget(a)?(!c||this.root)&&(T=r):T=x();var O=o.entry=new p({time:g(),target:a,boundingClientRect:s,rootBounds:T,intersectionRect:w});m?e&&b?this._hasCrossedThreshold(m,O)&&this._queuedEntries.push(O):m&&m.isIntersecting&&this._queuedEntries.push(O):this._queuedEntries.push(O)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},l.prototype._computeTargetAndRootIntersection=function(e,r,o){if(window.getComputedStyle(e).display!="none"){for(var a=r,s=D(e),b=!1;!b&&s;){var m=null,w=s.nodeType==1?window.getComputedStyle(s):{};if(w.display=="none")return null;if(s==this.root||s.nodeType==9)if(b=!0,s==this.root||s==t)c&&!this.root?!u||u.width==0&&u.height==0?(s=null,m=null,a=null):m=u:m=o;else{var T=D(s),O=T&&v(T),F=T&&this._computeTargetAndRootIntersection(T,O,o);O&&F?(s=T,m=R(O,F)):(s=null,a=null)}else{var H=s.ownerDocument;s!=H.body&&s!=H.documentElement&&w.overflow!="visible"&&(m=v(s))}if(m&&(a=h(m,a)),!a)break;s=s&&D(s)}return a}},l.prototype._getRootRect=function(){var e;if(this.root&&!j(this.root))e=v(this.root);else{var r=j(this.root)?this.root:t,o=r.documentElement,a=r.body;e={top:0,left:0,right:o.clientWidth||a.clientWidth,width:o.clientWidth||a.clientWidth,bottom:o.clientHeight||a.clientHeight,height:o.clientHeight||a.clientHeight}}return this._expandRectByRootMargin(e)},l.prototype._expandRectByRootMargin=function(e){var r=this._rootMarginValues.map(function(a,s){return a.unit=="px"?a.value:a.value*(s%2?e.width:e.height)/100}),o={top:e.top-r[0],right:e.right+r[1],bottom:e.bottom+r[2],left:e.left-r[3]};return o.width=o.right-o.left,o.height=o.bottom-o.top,o},l.prototype._hasCrossedThreshold=function(e,r){var o=e&&e.isIntersecting?e.intersectionRatio||0:-1,a=r.isIntersecting?r.intersectionRatio||0:-1;if(o!==a)for(var s=0;s<this.thresholds.length;s++){var b=this.thresholds[s];if(b==o||b==a||b<o!=b<a)return!0}},l.prototype._rootIsInDom=function(){return!this.root||S(t,this.root)},l.prototype._rootContainsTarget=function(e){var r=this.root&&(this.root.ownerDocument||this.root)||t;return S(r,e)&&(!this.root||r==e.ownerDocument)},l.prototype._registerInstance=function(){i.indexOf(this)<0&&i.push(this)},l.prototype._unregisterInstance=function(){var e=i.indexOf(this);e!=-1&&i.splice(e,1)};function g(){return window.performance&&performance.now&&performance.now()}function _(e,r){var o=null;return function(){o||(o=setTimeout(function(){e(),o=null},r))}}function y(e,r,o,a){typeof e.addEventListener=="function"?e.addEventListener(r,o,a||!1):typeof e.attachEvent=="function"&&e.attachEvent("on"+r,o)}function d(e,r,o,a){typeof e.removeEventListener=="function"?e.removeEventListener(r,o,a||!1):typeof e.detachEvent=="function"&&e.detachEvent("on"+r,o)}function h(e,r){var o=Math.max(e.top,r.top),a=Math.min(e.bottom,r.bottom),s=Math.max(e.left,r.left),b=Math.min(e.right,r.right),m=b-s,w=a-o;return m>=0&&w>=0&&{top:o,bottom:a,left:s,right:b,width:m,height:w}||null}function v(e){var r;try{r=e.getBoundingClientRect()}catch{}return r?(r.width&&r.height||(r={top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.right-r.left,height:r.bottom-r.top}),r):x()}function x(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function E(e){return!e||"x"in e?e:{top:e.top,y:e.top,bottom:e.bottom,left:e.left,x:e.left,right:e.right,width:e.width,height:e.height}}function R(e,r){var o=r.top-e.top,a=r.left-e.left;return{top:o,left:a,height:r.height,width:r.width,bottom:o+r.height,right:a+r.width}}function S(e,r){for(var o=r;o;){if(o==e)return!0;o=D(o)}return!1}function D(e){var r=e.parentNode;return e.nodeType==9&&e!=t?n(e):(r&&r.assignedSlot&&(r=r.assignedSlot.parentNode),r&&r.nodeType==11&&r.host?r.host:r)}function j(e){return e&&e.nodeType===9}window.IntersectionObserver=l,window.IntersectionObserverEntry=p})();var z=globalThis&&globalThis.__assign||function(){return z=Object.assign||function(n){for(var t,i=1,c=arguments.length;i<c;i++){t=arguments[i];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(n[u]=t[u])}return n},z.apply(this,arguments)},Z=globalThis&&globalThis.__read||function(n,t){var i=typeof Symbol=="function"&&n[Symbol.iterator];if(!i)return n;var c=i.call(n),u,p=[],l;try{for(;(t===void 0||t-- >0)&&!(u=c.next()).done;)p.push(u.value)}catch(g){l={error:g}}finally{try{u&&!u.done&&(i=c.return)&&i.call(c)}finally{if(l)throw l.error}}return p},_t=globalThis&&globalThis.__values||function(n){var t=typeof Symbol=="function"&&Symbol.iterator,i=t&&n[t],c=0;if(i)return i.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&c>=n.length&&(n=void 0),{value:n&&n[c++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};function Et(n,t){var i=Z(f.exports.useState(),2),c=i[0],u=i[1],p=Z(f.exports.useState(),2),l=p[0],g=p[1];return xt(function(){var _=N(n);if(!!_){var y=new IntersectionObserver(function(d){var h,v;try{for(var x=_t(d),E=x.next();!E.done;E=x.next()){var R=E.value;g(R.intersectionRatio),u(R.isIntersecting)}}catch(S){h={error:S}}finally{try{E&&!E.done&&(v=x.return)&&v.call(x)}finally{if(h)throw h.error}}},z(z({},t),{root:N(t==null?void 0:t.root)}));return y.observe(_),function(){y.disconnect()}}},[],n),[c,l]}var It=J?f.exports.useLayoutEffect:f.exports.useEffect,U=It;const Rt={closeOnMaskClick:!1,destroyOnClose:!1,disableBodyScroll:!0,forceRender:!1,getContainer:()=>document.body,mask:!0,showCloseButton:!1,stopPropagation:["click"],visible:!1};function Tt(n){const[t,i]=f.exports.useState(n);return U(()=>{i(n)},[n]),t}function kt(n){return!!n&&typeof n=="object"&&typeof n.then=="function"}function Ht(){return X?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1}const k="adm-button",Ot={color:"default",fill:"solid",block:!1,loading:!1,loadingIcon:I(tt,{color:"currentColor"}),type:"button",shape:"default",size:"middle"},Ct=f.exports.forwardRef((n,t)=>{const i=$(Ot,n),[c,u]=f.exports.useState(!1),p=f.exports.useRef(null),l=i.loading==="auto"?c:i.loading,g=i.disabled||l;f.exports.useImperativeHandle(t,()=>({get nativeElement(){return p.current}}));const _=y=>Y(void 0,void 0,void 0,function*(){if(!i.onClick)return;const d=i.onClick(y);if(kt(d))try{u(!0),yield d,u(!1)}catch(h){throw u(!1),h}});return A(i,I("button",{ref:p,type:i.type,onClick:_,className:L(k,i.color?`${k}-${i.color}`:null,{[`${k}-block`]:i.block,[`${k}-disabled`]:g,[`${k}-fill-outline`]:i.fill==="outline",[`${k}-fill-none`]:i.fill==="none",[`${k}-mini`]:i.size==="mini",[`${k}-small`]:i.size==="small",[`${k}-large`]:i.size==="large",[`${k}-loading`]:l},`${k}-shape-${i.shape}`),disabled:g,onMouseDown:i.onMouseDown,onMouseUp:i.onMouseUp,onTouchStart:i.onTouchStart,onTouchEnd:i.onTouchEnd,children:l?P("div",{className:`${k}-loading-wrapper`,children:[i.loadingIcon,i.loadingText]}):i.children}))});var Wt=Ct;const St=ft(U);const Dt=Object.assign(Object.assign({},Rt),{getContainer:null}),Mt=n=>{const t=$(Dt,n),i=et(),c=rt({scale:t.visible?1:.8,opacity:t.visible?1:0,config:{mass:1.2,tension:200,friction:25,clamp:!0},onRest:()=>{var d,h;i.current||(p(t.visible),t.visible?(d=t.afterShow)===null||d===void 0||d.call(t):(h=t.afterClose)===null||h===void 0||h.call(t))}}),[u,p]=f.exports.useState(t.visible);U(()=>{t.visible&&p(!0)},[t.visible]);const l=f.exports.useRef(null);ot(l,t.disableBodyScroll&&u);const g=Tt(u&&t.visible),_=I("div",{className:L("adm-center-popup-body",t.bodyClassName),style:t.bodyStyle,children:t.children}),y=nt(t.stopPropagation,A(t,C.createElement("div",{className:"adm-center-popup",style:{display:u?void 0:"none",pointerEvents:u?void 0:"none"}},t.mask&&I(it,{visible:g,forceRender:t.forceRender,destroyOnClose:t.destroyOnClose,onMaskClick:d=>{var h,v;(h=t.onMaskClick)===null||h===void 0||h.call(t,d),t.closeOnMaskClick&&((v=t.onClose)===null||v===void 0||v.call(t))},style:t.maskStyle,className:L("adm-center-popup-mask",t.maskClassName),disableBodyScroll:!1,stopPropagation:t.stopPropagation}),C.createElement("div",{className:"adm-center-popup-wrap",role:t.role,"aria-label":t["aria-label"]},C.createElement(at.div,{style:c,ref:l},t.showCloseButton&&I("a",{className:L("adm-center-popup-close","adm-plain-anchor"),onClick:()=>{var d;(d=t.onClose)===null||d===void 0||d.call(t)},children:I(st,{})}),_)))));return I(lt,{active:u,forceRender:t.forceRender,destroyOnClose:t.destroyOnClose,children:ut(t.getContainer,y)})};var qt=Mt;var V={},Lt=W&&W.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(V,"__esModule",{value:!0});var K=V.staged=void 0;const zt=Lt(f.exports);function Q(n){return typeof n=="function"?zt.default.createElement(Bt,{stage:n}):n}function Bt(n){const t=n.stage();return Q(t)}function Pt(n){return function(i,c){const u=n(i,c);return Q(u)}}K=V.staged=Pt;function M(n){return typeof n=="number"?`${n}px`:n}const Nt=n=>{const t=f.exports.useRef(null),[i]=Et(t);return f.exports.useEffect(()=>{i&&n.onActive()},[i]),I("div",{ref:t})},$t=()=>C.createElement("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:"M41.396 6.234c1.923 0 3.487 1.574 3.487 3.505v29.14c0 1.937-1.568 3.51-3.491 3.51H6.604c-1.923 0-3.487-1.573-3.487-3.51V9.745c0-1.936 1.564-3.51 3.487-3.51Zm0 2.847H6.604c-.355 0-.654.3-.654.658V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.405 2.405 0 0 1 1.933.752l4.182 4.525 7.58-11.005a2.374 2.374 0 0 1 1.96-1.01c.79 0 1.532.38 1.966 1.01L42.05 34.89V9.74a.664.664 0 0 0-.654-.658Zm-28.305 2.763a3.119 3.119 0 0 1 3.117 3.117 3.119 3.119 0 0 1-3.117 3.117 3.122 3.122 0 0 1-3.117-3.117 3.119 3.119 0 0 1 3.117-3.117Z",fill:"#DBDBDB",fillRule:"nonzero"})),At=()=>C.createElement("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:"M19.233 6.233 17.42 9.08l-10.817.001a.665.665 0 0 0-.647.562l-.007.096V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.415 2.415 0 0 1 1.807.625l.126.127 4.182 4.525 2.267-3.292 5.461 7.841-4.065 7.375H6.604c-1.86 0-3.382-1.47-3.482-3.317l-.005-.192V9.744c0-1.872 1.461-3.405 3.296-3.505l.19-.005h12.63Zm22.163 0c1.86 0 3.382 1.472 3.482 3.314l.005.192v29.14a3.507 3.507 0 0 1-3.3 3.505l-.191.006H27.789l3.63-6.587.06-.119a1.87 1.87 0 0 0-.163-1.853l-6.928-9.949 3.047-4.422a2.374 2.374 0 0 1 1.96-1.01 2.4 2.4 0 0 1 1.86.87l.106.14L42.05 34.89V9.74a.664.664 0 0 0-.654-.658H21.855l1.812-2.848h17.73Zm-28.305 5.611c.794 0 1.52.298 2.07.788l-.843 1.325-.067.114a1.87 1.87 0 0 0 .11 1.959l.848 1.217c-.556.515-1.3.83-2.118.83a3.122 3.122 0 0 1-3.117-3.116 3.119 3.119 0 0 1 3.117-3.117Z",fill:"#DBDBDB",fillRule:"nonzero"})),B="adm-image",Ut={fit:"fill",placeholder:I("div",{className:`${B}-tip`,children:I($t,{})}),fallback:I("div",{className:`${B}-tip`,children:I(At,{})}),lazy:!1,draggable:!1},Vt=K(n=>{const t=$(Ut,n),[i,c]=f.exports.useState(!1),[u,p]=f.exports.useState(!1),l=f.exports.useRef(null);let g=t.src,_=t.srcSet;const[y,d]=f.exports.useState(!t.lazy);g=y?t.src:void 0,_=y?t.srcSet:void 0,St(()=>{c(!1),p(!1)},[g]);function h(){if(u)return I(q,{children:t.fallback});const x=I("img",{className:`${B}-img`,src:g,alt:t.alt,onClick:t.onClick,onLoad:E=>{var R;c(!0),(R=t.onLoad)===null||R===void 0||R.call(t,E)},onError:E=>{var R;p(!0),(R=t.onError)===null||R===void 0||R.call(t,E)},style:{objectFit:t.fit,display:i?"block":"none"},crossOrigin:t.crossOrigin,decoding:t.decoding,loading:t.loading,referrerPolicy:t.referrerPolicy,sizes:t.sizes,srcSet:_,useMap:t.useMap,draggable:t.draggable});return P(q,{children:[!i&&t.placeholder,x]})}const v={};return t.width&&(v["--width"]=M(t.width),v.width=M(t.width)),t.height&&(v["--height"]=M(t.height),v.height=M(t.height)),A(t,P("div",{ref:l,className:B,style:v,onClick:t.onContainerClick,children:[t.lazy&&!y&&I(Nt,{onActive:()=>{d(!0)}}),h()]}))});var Gt=Vt;const Zt=n=>({type:dt,data:n}),Jt=n=>({type:ct,data:n});export{Wt as B,qt as C,Gt as I,Ft as a,xt as b,Jt as c,Rt as d,U as e,Tt as f,N as g,St as h,Zt as i,Ht as j,pt as u};
