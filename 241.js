"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[241],{6280:(e,t,r)=>{r.d(t,{r:()=>H});var n=r(2784),a=r(1148),o=r(8871),l=r(357),i=r(5096),c=function(e){var t=e.height,r=void 0===t?80:t,a=e.width,o=void 0===a?80:a,l=e.color,i=void 0===l?"green":l,c=e.radius,u=void 0===c?1:c,s=e.label,f=void 0===s?"audio-loading":s;return n.createElement("svg",{width:o,height:r,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":f},n.createElement("defs",null,n.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},n.createElement("stop",{stopColor:i,stopOpacity:"0",offset:"0%"}),n.createElement("stop",{stopColor:i,stopOpacity:".631",offset:"63.146%"}),n.createElement("stop",{stopColor:i,offset:"100%"}))),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",{transform:"translate(1 1)"},n.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:i,strokeWidth:"2"},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),n.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:u},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},u=r(2779),s=r.n(u),f=r(6062),m=r.n(f),d=r(4036),p=r.n(d),A=r(6793),h=r.n(A),v=r(7892),y=r.n(v),b=r(1173),g=r.n(b),C=r(2464),E=r.n(C),w=r(7591),x={};x.styleTagTransform=E(),x.setAttributes=y(),x.insert=h().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=g(),m()(w.Z,x);const O=w.Z&&w.Z.locals?w.Z.locals:void 0;var S=["src"];function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e,t,r,n,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M=(0,l.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var r=new Image;Object.assign(r,{onload:function(){return e(t)},onerror:function(){return e((r=(t=P(i.VmB.icon,5))[0],n=t[1],a=t[4],'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(r," ").concat(n,'"><path fill="currentColor" d="').concat(a,'"></path></svg>')));var t,r,n,a},src:t})})));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){j(o,n,a,l,i,"next",e)}function i(e){j(o,n,a,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}());function T(e){var t=e.src,r=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,S),a=M.read(t);return n.createElement("img",k({src:a},r,{referrerPolicy:"no-referrer"}))}function U(){return n.createElement("div",{className:O.Loader},n.createElement(c,null))}function _(e){var t=k({},e);return n.createElement("div",{className:O.ImgWrapper},n.createElement(n.Suspense,{fallback:n.createElement(U,null)},n.createElement(T,t)))}function H(e){var t=e.className,r=e.images,l=e.srcSet,i=void 0===l?[]:l,c=P((0,n.useState)(!1),2),u=c[0],f=c[1],m=P((0,n.useState)(!1),2),d=m[0],p=m[1],A=(0,n.useRef)(null),h=P((0,n.useState)({scale:0}),2),v=h[0],y=h[1],b=(0,n.useMemo)((function(){return new a.x}),[]);(0,n.useEffect)((function(){var e=b.pipe((0,o.b)(400)).subscribe((function(e){e.scrollLeft>=e.scrollWidth-e.offsetWidth&&p(!0)}));return function(){return e.unsubscribe()}}),[b]);var g=(0,n.useCallback)((function(e){return e.stopPropagation(),y((function(e){if(A.current){var t=A.current.getBoundingClientRect(),r=t.x,n=t.y,a=t.width,o=t.height,l=window,i=l.innerWidth,c=l.innerHeight,u=i/a*1;return e.scale?{scale:0}:{scale:u,translateX:((i-a)/2-r)/u,translateY:((c-o)/2-n)/u}}return e}))}),[A]);return(0,n.useEffect)((function(){var e=function(e){var t=e.target;return b.next(t)};if(A.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){P(e,1)[0].isIntersecting&&f(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(A.current),A.current.addEventListener("scroll",e),function(){A.current&&(t.unobserve(A.current),A.current.removeEventListener("scroll",e))}}}),[A]),r.length?n.createElement("div",{ref:A,className:s()(t,O.Gallery),style:v.scale?{cursor:"zoom-out",transform:"scale(".concat(v.scale,") translate(").concat(v.translateX,"px, ").concat(v.translateY,"px)"),zIndex:1}:{cursor:"zoom-in"},onClick:g},u&&r.slice(0,d?r.length:3).map((function(e,t){return n.createElement(_,{key:t,src:e,srcSet:v.scale?i[t]:void 0,alt:"Image #".concat(t+1)})}))):null}},891:(e,t,r)=>{r.d(t,{r:()=>l});var n=r(2784),a=["href"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){var t=e.href,r=void 0===t?"#":t,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,a),i="#"===r[0];return n.createElement("a",o({href:r,target:i?void 0:"_blank",rel:i?void 0:"noopener noreferrer"},l))}},9241:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var n=r(2784),a=r(539),o=r(357),l=r(6280),i=r(891),c=r(9539),u=r(2779),s=r.n(u),f=r(6062),m=r.n(f),d=r(4036),p=r.n(d),A=r(6793),h=r.n(A),v=r(7892),y=r.n(v),b=r(1173),g=r.n(b),C=r(2464),E=r.n(C),w=r(1498),x={};x.styleTagTransform=E(),x.setAttributes=y(),x.insert=h().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=g(),m()(w.Z,x);const O=w.Z&&w.Z.locals?w.Z.locals:void 0;var S=["priceTo"],k=["priceFrom"],j=["_created","_updated"],P=["images","srcSet"];function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function I(e,t,r,n,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}var K={title:1,brand:1,_price:1,_stars:-1,_created:-1,_updated:-1},F=[0,100,200,500,1e3,1500,2e3,3e3,4e3,5e3,1e4,15e3,2e4,25e3],R=(0,o.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/products/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){I(o,n,a,l,i,"next",e)}function i(e){I(o,n,a,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}());function Y(e){var t=e.version,r=void 0===t?"v1":t,a=R.read(r).results,o=(0,n.useMemo)((function(){return{brand:[""].concat(a.map((function(e){return e.brand})).filter(Boolean).filter((function(e,t,r){return r.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})))}}),[a]),u=_((0,n.useState)((function(){return{brand:o.brand[0],category:"",search:"",onlyPromoted:!1,onlyReduced:!1,priceFrom:F[0],priceTo:F[F.length-1]}})),2),s=u[0],f=u[1],m=_((0,c.Z)(s.search),1)[0],d=_((0,n.useState)((function(){return Object.keys(K).pop()})),2),p=d[0],A=d[1],h=(0,n.useCallback)((function(e){var t=e.target;return A(t.value)}),[]),v=(0,n.useCallback)((function(e){var t=e.target;return f((function(e){var r=e.priceTo,n=U(e,S),a=Number(t.value);return M(M({},n),{},{priceFrom:a,priceTo:r<a?a:r})}))}),[]),y=(0,n.useCallback)((function(e){var t=e.target;return f((function(e){var r=e.priceFrom,n=U(e,k),a=Number(t.value);return M(M({},n),{},{priceFrom:a>r?r:a,priceTo:a})}))}),[]);console.log({filters:s,results:a});var b=(0,n.useMemo)((function(){return a.map((function(e){var t=e._created,r=e._updated,n=void 0===r?t:r,a=U(e,j);return M({_title:a.title.toLowerCase(),_price:Number((a.price.length>0?a.price:["0"]).reverse()[0].replace(/[^0-9,]/g,"").replace(",",".")),_stars:Number(a.stars.replace(/[^0-9]/g,"")),_created:t,_updated:n,_history:{}},a)})).filter((function(e){return(e._title.match(m)||m.trim()===String(e.id))&&s.priceFrom<=e._price&&e._price<=s.priceTo&&(!s.brand||[e.brand].includes(s.brand))&&(!s.onlyPromoted||e.proms.length>0)&&(!s.onlyReduced||e.price.length>1)}))}),[a,m,s.brand,s.priceFrom,s.priceTo,s.onlyPromoted,s.onlyReduced]),g=(0,n.useMemo)((function(){return b.sort((function(e,t){return e[p]===t[p]?e._created>t._created?1:-1:K[p]*(e[p]>t[p]?1:-1)}))}),[b,p]);return n.createElement("div",null,n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:s.search,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return M(M({},e),{},{search:t.value})}))}),[])})),n.createElement("label",null,n.createElement("span",null,"Brand"),n.createElement("select",{value:s.brand,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return M(M({},e),{},{brand:t.value})}))}),[])},o.brand.map((function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("label",null,n.createElement("span",null,"Sort"),n.createElement("select",{value:p,onChange:h},Object.entries(K).map((function(e){var t=_(e,2),r=t[0];return t[1],n.createElement("option",{key:r,value:r},r)})))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:F[0],max:F[F.length-1],value:s.priceFrom,onChange:v}),n.createElement("datalist",{id:"price-list"},F.map((function(e){return n.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?"".concat(e," pln"):void 0})})))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:F[0],max:F[F.length-1],value:s.priceTo,onChange:y}),n.createElement("span",null,"".concat(s.priceFrom,"-").concat(s.priceTo," zł"))),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:s.onlyPromoted,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return M(M({},e),{},{onlyPromoted:t.checked})}))}),[])}),n.createElement("span",null,"Only Promoted")),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:s.onlyReduced,onChange:(0,n.useCallback)((function(e){var t=e.target;return f((function(e){return M(M({},e),{},{onlyReduced:t.checked})}))}),[])}),n.createElement("span",null,"Only Reduced")))),n.createElement("div",null,"Found ".concat(b.length," products out of a total of ").concat(a.length)),n.createElement("ol",null,g.slice(0,100).map((function(e){var t=e.images,r=e.srcSet,a=U(e,P);return n.createElement("li",{key:a.id,className:O.Row},n.createElement(l.r,{className:O.Gallery,images:t,srcSet:r}),n.createElement("h3",null,n.createElement(i.r,{href:a.url},a.title)),n.createElement("h4",null,a.brand),a.label&&n.createElement("div",null,a.label.join(" | ")),n.createElement(D,{item:a}),n.createElement(G,{history:Object.entries(a._history).reverse(),item:a}),a.reviews&&n.createElement(N,{reviews:a.reviews}))}))))}function G(e){var t=e.history,r=e.item,a=_((0,n.useState)((function(){return!(t.length>1)})),2),o=a[0],l=a[1];return n.createElement("div",{className:O.History},(o?t:t.slice(0,1)).map((function(e,t,a){var o=_(e,2),l=o[0],i=o[1];return n.createElement(D,{key:t,item:i,prev:t>0?a[t-1][1]:r,time:Number(l)})})),!1===o&&n.createElement(i.r,{onClick:function(e){return e.preventDefault(),l(!0)}},"Show more..."))}function D(e){var t=e.item,r=e.prev,o=e.time,l=void 0===o?t._updated||t._created:o;return n.createElement("div",{className:s()(O.Details,r&&O.separator)},n.createElement("div",{className:O.Sidebar},l&&n.createElement("div",{className:O.Date},(0,a.Z)(l,"yyyy-MM-dd HH:mm")),n.createElement("h5",null,t.price.join(" ")),n.createElement("div",{className:s()(O.Feature,r&&r.stars!==t.stars&&O.changed)},t.stars)),t.proms&&n.createElement("div",{className:s()(O.Feature,r&&r.proms!==t.proms&&O.changed)},t.proms.join(" | ")),n.createElement("ul",{className:s()(O.Feature,r&&r.links.join(":")!==t.links.join(":")&&O.changed)},t.links.map((function(e,t){return n.createElement("li",{key:t},e)}))))}function N(e){var t=e.reviews,r=_((0,n.useState)(!1),2),a=r[0],o=r[1];return n.createElement("div",null,n.createElement("div",null,n.createElement(i.r,{onClick:function(e){return e.preventDefault(),o((function(e){return!e}))}},a?"Hide reviews":"Show reviews")),a&&n.createElement("ul",null,t.map((function(e,t){var r=e.author,a=e.body,o=e.date,l=e.rating,i=void 0===l?"-":l;return n.createElement("li",{key:t},n.createElement("div",null,n.createElement("b",null,o,", ",r," (",i,")")),n.createElement("div",null,a))}))))}function W(){return n.createElement("div",{className:O.Section},n.createElement("h2",null,"Products"),n.createElement(Y,null))}},9539:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(2784);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){var t,r,o=(t=(0,n.useState)(e),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}}(t,r)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],i=o[1],c=(0,n.useRef)();return(0,n.useEffect)((function(){return clearTimeout(c.current),c.current=setTimeout((function(){return i(e.toLowerCase())}),400),function(){clearTimeout(c.current)}}),[e]),[l]}},7591:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(272),a=r.n(n),o=r(2609),l=r.n(o)()(a());l.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;width:100%;height:100%;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory;transition:transform 300ms cubic-bezier(0.2, 0, 0.2, 1)}.zDhTSHDK36rhYKliKHPK img{width:100%;height:100%;object-fit:cover;scroll-snap-align:start}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{min-width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}","",{version:3,sources:["webpack://./src/components/Gallery/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,4BAAA,CACA,uDAAA,CAMA,0BACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,uBAAA,CAGF,4CACE,cAAA,CACA,WAAA,CACA,aAAA,CAGF,4CACE,UAAA,CACA,WAAA,CAGJ,sBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,0BACE,SAAA,CACA,UAAA,CACA,WAAA",sourcesContent:[".Gallery {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  scroll-snap-type: x mandatory;\n  transition: transform 300ms cubic-bezier(0.2, 0, 0.2, 1);\n\n  &:hover {\n    // transform: scale(1.05);\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    scroll-snap-align: start;\n  }\n\n  .ImgWrapper {\n    min-width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n  }\n\n  .Loader {\n    width: 100%;\n    height: 100%;\n  }\n}\n.Loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    flex: none;\n    width: 64px;\n    height: 64px;\n  }\n}\n"],sourceRoot:""}]),l.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const i=l},1498:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(272),a=r.n(n),o=r(2609),l=r.n(o)()(a());l.push([e.id,".KUxoC6psSrrMeYM5oAlM{color:purple}.KUxoC6psSrrMeYM5oAlM h4{margin:.5em 0}.KUxoC6psSrrMeYM5oAlM h5{margin:.25em 0}.mfYsAqyyqNlAHcqIZRYo{clear:both}.IUsVGkhlVQfyeVKDBe0W{float:left;width:200px;height:150px}.oYFC57M7QUXHd0bHx90u{clear:both}.oYFC57M7QUXHd0bHx90u .d4EGmd7WGzC6jR642U4i{float:right;text-align:right;margin:0 2em}.oYFC57M7QUXHd0bHx90u .hCevawnmB_dy9ljh4Xeg.WHvJJI0E40Qb_2xC6kaz{color:#8a2be2}.oYFC57M7QUXHd0bHx90u.eCohJhUTkuxKnSmXSCp6{border-top:1px solid #d3d3d3;margin-top:.5em;padding-top:.5em}","",{version:3,sources:["webpack://./src/containers/Products/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,yBACE,aAAA,CAEF,yBACE,cAAA,CAGJ,sBACE,UAAA,CAEF,sBACE,UAAA,CACA,WAAA,CACA,YAAA,CAEF,sBACE,UAAA,CACA,4CACE,WAAA,CACA,gBAAA,CACA,YAAA,CAGA,iEACE,aAAA,CAGJ,2CACE,4BAAA,CACA,eAAA,CACA,gBAAA",sourcesContent:[".Section {\n  color: purple;\n  h4 {\n    margin: 0.5em 0;\n  }\n  h5 {\n    margin: 0.25em 0;\n  }\n}\n.Row {\n  clear: both;\n}\n.Gallery {\n  float: left;\n  width: 200px;\n  height: 150px;\n}\n.Details {\n  clear: both;\n  .Sidebar {\n    float: right;\n    text-align: right;\n    margin: 0 2em;\n  }\n  .Feature {\n    &.changed {\n      color: blueviolet;\n    }\n  }\n  &.separator {\n    border-top: 1px solid lightgray;\n    margin-top: 0.5em;\n    padding-top: 0.5em;\n  }\n}\n"],sourceRoot:""}]),l.locals={Section:"KUxoC6psSrrMeYM5oAlM",Row:"mfYsAqyyqNlAHcqIZRYo",Gallery:"IUsVGkhlVQfyeVKDBe0W",Details:"oYFC57M7QUXHd0bHx90u",Sidebar:"d4EGmd7WGzC6jR642U4i",Feature:"hCevawnmB_dy9ljh4Xeg",changed:"WHvJJI0E40Qb_2xC6kaz",separator:"eCohJhUTkuxKnSmXSCp6"};const i=l},8871:(e,t,r)=>{r.d(t,{b:()=>l});var n=r(997),a=r(1118),o=r(7394);function l(e,t){return void 0===t&&(t=n.z),(0,a.e)((function(r,n){var a=null,l=null,i=null,c=function(){if(a){a.unsubscribe(),a=null;var e=l;l=null,n.next(e)}};function u(){var r=i+e,o=t.now();if(o<r)return a=this.schedule(void 0,r-o),void n.add(a);c()}r.subscribe((0,o.x)(n,(function(r){l=r,i=t.now(),a||(a=t.schedule(u,e),n.add(a))}),(function(){c(),n.complete()}),void 0,(function(){l=a=null})))}))}}}]);
//# sourceMappingURL=241.js.map