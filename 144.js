/*! For license information please see 144.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[144],{6280:(t,e,r)=>{r.d(e,{r:()=>N});var n=r(2784),o=r(1148),i=r(8871),a=r(357),c=r(5096),l=function(t){var e=t.height,r=void 0===e?80:e,o=t.width,i=void 0===o?80:o,a=t.color,c=void 0===a?"green":a,l=t.radius,u=void 0===l?1:l,s=t.label,f=void 0===s?"audio-loading":s;return n.createElement("svg",{width:i,height:r,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":f},n.createElement("defs",null,n.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},n.createElement("stop",{stopColor:c,stopOpacity:"0",offset:"0%"}),n.createElement("stop",{stopColor:c,stopOpacity:".631",offset:"63.146%"}),n.createElement("stop",{stopColor:c,offset:"100%"}))),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",{transform:"translate(1 1)"},n.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:c,strokeWidth:"2"},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),n.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:u},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},u=r(2779),s=r.n(u),f=r(6062),h=r.n(f),p=r(4036),d=r.n(p),v=r(6793),y=r.n(v),m=r(7892),A=r.n(m),g=r(1173),w=r.n(g),b=r(2464),x=r.n(b),C=r(7591),E={};E.styleTagTransform=x(),E.setAttributes=A(),E.insert=y().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=w(),h()(C.Z,E);const O=C.Z&&C.Z.locals?C.Z.locals:void 0;function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var S=["src"];function j(){return(j=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function k(){k=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function f(){}function h(){}function p(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(E([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=p.prototype=f.prototype=Object.create(d);function A(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function n(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==L(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,c(m,"constructor",p),c(p,"constructor",h),h.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},A(g.prototype),c(g.prototype,i,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(m),c(m,a,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function P(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var _=(0,a.k)(function(){var t,e=(t=k().mark((function t(e){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var r=new Image;Object.assign(r,{onload:function(){return t(e)},onerror:function(){return t((r=(e=G(c.VmB.icon,5))[0],n=e[1],o=e[4],'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(r," ").concat(n,'"><path fill="currentColor" d="').concat(o,'"></path></svg>')));var e,r,n,o},src:e})})));case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){P(i,n,o,a,c,"next",t)}function c(t){P(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}());function T(t){var e=t.src,r=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,S),o=_.read(e);return n.createElement("img",j({src:o},r,{referrerPolicy:"no-referrer"}))}function B(){return n.createElement("div",{className:O.Loader},n.createElement(l,null))}function I(t){var e=j({},t);return n.createElement("div",{className:O.ImgWrapper},n.createElement(n.Suspense,{fallback:n.createElement(B,null)},n.createElement(T,e)))}function N(t){var e=t.className,r=t.images,a=t.srcSet,c=void 0===a?[]:a,l=G((0,n.useState)(!1),2),u=l[0],f=l[1],h=G((0,n.useState)(!1),2),p=h[0],d=h[1],v=(0,n.useRef)(null),y=G((0,n.useState)({scale:0}),2),m=y[0],A=y[1],g=(0,n.useMemo)((function(){return new o.x}),[]);(0,n.useEffect)((function(){var t=g.pipe((0,i.b)(400)).subscribe((function(t){t.scrollLeft>=t.scrollWidth-t.offsetWidth&&d(!0)}));return function(){return t.unsubscribe()}}),[g]);var w=(0,n.useCallback)((function(t){return t.stopPropagation(),A((function(t){if(v.current){var e=v.current.getBoundingClientRect(),r=e.x,n=e.y,o=e.width,i=e.height,a=window,c=a.innerWidth,l=a.innerHeight,u=c/o*1;return t.scale?{scale:0}:{scale:u,translateX:((c-o)/2-r)/u,translateY:((l-i)/2-n)/u}}return t}))}),[v]);return(0,n.useEffect)((function(){var t=function(t){var e=t.target;return g.next(e)};if(v.current instanceof HTMLElement){var e=new IntersectionObserver((function(t){G(t,1)[0].isIntersecting&&f(!0)}),{root:null,rootMargin:"0px",threshold:1});return e.observe(v.current),v.current.addEventListener("scroll",t),function(){v.current&&(e.unobserve(v.current),v.current.removeEventListener("scroll",t))}}}),[v]),r.length?n.createElement("div",{ref:v,className:s()(e,O.Gallery),style:m.scale?{cursor:"zoom-out",transform:"scale(".concat(m.scale,") translate(").concat(m.translateX,"px, ").concat(m.translateY,"px)"),zIndex:1}:{cursor:"zoom-in"},onClick:w},u&&r.slice(0,p?r.length:3).map((function(t,e){return n.createElement(I,{key:e,src:t,srcSet:m.scale?c[e]:void 0,alt:"Image #".concat(e+1)})}))):null}},891:(t,e,r)=>{r.d(e,{r:()=>a});var n=r(2784),o=["href"];function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function a(t){var e=t.href,r=void 0===e?"#":e,a=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,o),c="#"===r[0];return n.createElement("a",i({href:r,target:c?void 0:"_blank",rel:c?void 0:"noopener noreferrer"},a))}},7591:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(272),o=r.n(n),i=r(2609),a=r.n(i)()(o());a.push([t.id,".zDhTSHDK36rhYKliKHPK{position:relative;width:100%;height:100%;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory;transition:transform 300ms cubic-bezier(0.2, 0, 0.2, 1)}.zDhTSHDK36rhYKliKHPK img{width:100%;height:100%;object-fit:cover;scroll-snap-align:start}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{min-width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}","",{version:3,sources:["webpack://./src/components/Gallery/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,4BAAA,CACA,uDAAA,CAMA,0BACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,uBAAA,CAGF,4CACE,cAAA,CACA,WAAA,CACA,aAAA,CAGF,4CACE,UAAA,CACA,WAAA,CAGJ,sBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,0BACE,SAAA,CACA,UAAA,CACA,WAAA",sourcesContent:[".Gallery {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  scroll-snap-type: x mandatory;\n  transition: transform 300ms cubic-bezier(0.2, 0, 0.2, 1);\n\n  &:hover {\n    // transform: scale(1.05);\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    scroll-snap-align: start;\n  }\n\n  .ImgWrapper {\n    min-width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n  }\n\n  .Loader {\n    width: 100%;\n    height: 100%;\n  }\n}\n.Loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    flex: none;\n    width: 64px;\n    height: 64px;\n  }\n}\n"],sourceRoot:""}]),a.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const c=a}}]);
//# sourceMappingURL=144.js.map