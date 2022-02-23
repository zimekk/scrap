"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[241],{6280:(e,t,r)=>{r.d(t,{r:()=>K});var n=r(2784),a=r(357),l=r(5096),o=r(891),i=function(e){var t=e.height,r=void 0===t?80:t,a=e.width,l=void 0===a?80:a,o=e.color,i=void 0===o?"green":o,c=e.radius,u=void 0===c?1:c,s=e.label,f=void 0===s?"audio-loading":s;return n.createElement("svg",{width:l,height:r,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":f},n.createElement("defs",null,n.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},n.createElement("stop",{stopColor:i,stopOpacity:"0",offset:"0%"}),n.createElement("stop",{stopColor:i,stopOpacity:".631",offset:"63.146%"}),n.createElement("stop",{stopColor:i,offset:"100%"}))),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",{transform:"translate(1 1)"},n.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:i,strokeWidth:"2"},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),n.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:u},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},c=r(2779),u=r.n(c),s=r(6062),f=r.n(s),m=r(4036),p=r.n(m),A=r(6793),d=r.n(A),h=r(7892),v=r.n(h),y=r(1173),g=r.n(y),b=r(2464),C=r.n(b),E=r(7591),w={};w.styleTagTransform=C(),w.setAttributes=v(),w.insert=d().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=g(),f()(E.Z,w);const x=E.Z&&E.Z.locals?E.Z.locals:void 0;var O=["src"];function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e,t,r,n,a,l,o){try{var i=e[l](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var U=(0,a.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var r=new Image;Object.assign(r,{onload:function(){return e(t)},onerror:function(){return e((r=(t=k(l.VmB.icon,5))[0],n=t[1],a=t[4],'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(r," ").concat(n,'"><path fill="currentColor" d="').concat(a,'"></path></svg>')));var t,r,n,a},src:t})})));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function o(e){j(l,n,a,o,i,"next",e)}function i(e){j(l,n,a,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}());function M(e){var t=e.src,r=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,O),a=U.read(t);return n.createElement(o.r,{href:a},n.createElement("img",S({src:a},r,{referrerPolicy:"no-referrer"})))}function B(){return n.createElement("div",{className:x.Loader},n.createElement(i,null))}function H(e){var t=S({},e);return n.createElement("div",{className:x.ImgWrapper},n.createElement(n.Suspense,{fallback:n.createElement(B,null)},n.createElement(M,t)))}function K(e){var t=e.className,r=e.images,a=k((0,n.useState)(!1),2),l=a[0],o=a[1],i=k((0,n.useState)(!1),2),c=i[0],s=i[1],f=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e=function(e){var t=e.target;t.scrollLeft===t.scrollWidth-t.offsetWidth&&s(!0)};if(f.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){k(e,1)[0].isIntersecting&&o(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(f.current),f.current.addEventListener("scroll",e),function(){f.current&&(t.unobserve(f.current),f.current.removeEventListener("scroll",e))}}}),[f]),r.length?n.createElement("div",{ref:f,className:u()(t,x.Gallery)},l&&r.slice(0,c?r.length:3).map((function(e,t){return n.createElement(H,{key:t,src:e,alt:"Image #".concat(t+1)})}))):null}},891:(e,t,r)=>{r.d(t,{r:()=>o});var n=r(2784),a=["href"];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e){var t=e.href,r=void 0===t?"#":t,o=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,a),i="#"===r[0];return n.createElement("a",l({href:r,target:i?void 0:"_blank",rel:i?void 0:"noopener noreferrer"},o))}},9241:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var n=r(2784),a=r(1498),l=r(357),o=r(6280),i=r(891),c=r(9539),u=r(2779),s=r.n(u),f=r(6062),m=r.n(f),p=r(4036),A=r.n(p),d=r(6793),h=r.n(d),v=r(7892),y=r.n(v),g=r(1173),b=r.n(g),C=r(2464),E=r.n(C),w=r(6339),x={};x.styleTagTransform=E(),x.setAttributes=y(),x.insert=h().bind(null,"head"),x.domAPI=A(),x.insertStyleElement=b(),m()(w.Z,x);const O=w.Z&&w.Z.locals?w.Z.locals:void 0;var S=["_image"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t,r,n,a,l,o){try{var i=e[l](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}var B={title:1,brand:1,_price:1,_stars:-1,_created:-1,_updated:-1},H=[0,100,200,500,1e3,1500,2e3,3e3,4e3,5e3,1e4,15e3,2e4],K=(0,l.k)(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/products/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function o(e){M(l,n,a,o,i,"next",e)}function i(e){M(l,n,a,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}());function I(e){var t=e.version,r=void 0===t?"v1":t,a=K.read(r).results,l=P((0,n.useState)(""),2),u=l[0],s=l[1],f=P((0,c.Z)(u),1)[0],m=(0,n.useCallback)((function(e){var t=e.target;return s(t.value)}),[]),p=P((0,n.useState)((function(){return Object.keys(B).pop()})),2),A=p[0],d=p[1],h=(0,n.useCallback)((function(e){var t=e.target;return d(t.value)}),[]),v=P((0,n.useState)(H[0]),2),y=v[0],g=v[1],b=P((0,n.useState)(H[H.length-1]),2),C=b[0],E=b[1],w=(0,n.useCallback)((function(e){var t=e.target;return E((function(e){var r=Number(t.value);return g(r),e<r?r:e}))}),[]),x=(0,n.useCallback)((function(e){var t=e.target;return g((function(e){var r=Number(t.value);return E(r),r>e?e:r}))}),[]);console.log({results:a});var U=(0,n.useMemo)((function(){return a.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({_image:e.image.filter((function(e){return e.match(/small|cyfro/)})),_title:e.title.toLowerCase(),_price:Number(e.price.reverse()[0].replace(/[^0-9,]/g,"").replace(",",".")),_stars:Number(e.stars.replace(/[^0-9]/g,"")),_history:{}},e)})).filter((function(e){return(e._title.match(f)||f.trim()===String(e.id))&&y<=e._price&&e._price<=C}))}),[a,f,y,C]),M=(0,n.useMemo)((function(){return U.sort((function(e,t){return B[A]*(e[A]>t[A]?1:-1)}))}),[U,A]);return n.createElement("div",null,n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:u,onChange:m})),n.createElement("label",null,n.createElement("span",null,"Sort"),n.createElement("select",{value:A,onChange:h},Object.entries(B).map((function(e){var t=P(e,2),r=t[0];return t[1],n.createElement("option",{key:r,value:r},r)})))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:H[0],max:H[H.length-1],value:y,onChange:w}),n.createElement("datalist",{id:"price-list"},H.map((function(e){return n.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?"".concat(e," pln"):void 0})})))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:H[0],max:H[H.length-1],value:C,onChange:x}),n.createElement("span",null,"".concat(y,"-").concat(C," pln"))))),n.createElement("div",null,"Found ".concat(U.length," products out of a total of ").concat(a.length)),n.createElement("ol",null,M.slice(0,100).map((function(e){var t=e._image,r=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,S);return n.createElement("li",{key:r.id,className:O.Row},n.createElement(o.r,{className:O.Gallery,images:t}),n.createElement("h3",null,n.createElement(i.r,{href:r.url},r.title)),n.createElement("h4",null,r.brand),r.label&&n.createElement("div",null,r.label.join(" | ")),n.createElement(G,{item:r}),n.createElement(_,{history:Object.entries(r._history).reverse(),item:r}))}))))}function _(e){var t=e.history,r=e.item,a=P((0,n.useState)((function(){return!(t.length>1)})),2),l=a[0],o=a[1];return n.createElement("div",{className:O.History},(l?t:t.slice(0,1)).map((function(e,t,a){var l=P(e,2),o=l[0],i=l[1];return n.createElement(G,{key:t,item:i,prev:t>0?a[t-1][1]:r,time:Number(o)})})),!1===l&&n.createElement(i.r,{onClick:function(e){return e.preventDefault(),o(!0)}},"more..."))}function G(e){var t=e.item,r=e.prev,l=e.time,o=void 0===l?t._updated||t._created:l;return n.createElement("div",{className:s()(O.Details,r&&O.separator)},n.createElement("div",{className:O.Sidebar},o&&n.createElement("div",{className:O.Date},(0,a.Z)(o,"yyyy-MM-dd HH:mm")),n.createElement("h5",null,t.price.join(" ")),n.createElement("div",{className:s()(O.Feature,r&&r.stars!==t.stars&&O.changed)},t.stars)),t.proms&&n.createElement("div",{className:s()(O.Feature,r&&r.proms!==t.proms&&O.changed)},t.proms.join(" | ")),n.createElement("ul",{className:s()(O.Feature,r&&r.links.join(":")!==t.links.join(":")&&O.changed)},t.links.map((function(e,t){return n.createElement("li",{key:t},e)}))))}function N(){return n.createElement("div",{className:O.Section},n.createElement("h2",null,"Products"),n.createElement(I,null))}},9539:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(2784);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e){var t,r,l=(t=(0,n.useState)(e),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=l[0],i=l[1],c=(0,n.useRef)();return(0,n.useEffect)((function(){return clearTimeout(c.current),c.current=setTimeout((function(){return i(e.toLowerCase())}),400),function(){clearTimeout(c.current)}}),[e]),[o]}},7591:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(272),a=r.n(n),l=r(2609),o=r.n(l)()(a());o.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.zDhTSHDK36rhYKliKHPK img{max-height:100%;scroll-snap-align:start}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}","",{version:3,sources:["webpack://./src/components/Gallery/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,eAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,4BAAA,CAEA,4CACE,UAAA,CACA,WAAA,CACA,aAAA,CAGF,4CACE,UAAA,CACA,WAAA,CAGF,0BACE,eAAA,CACA,uBAAA,CAGJ,sBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,0BACE,SAAA,CACA,UAAA,CACA,WAAA",sourcesContent:[".Gallery {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  scroll-snap-type: x mandatory;\n\n  .ImgWrapper {\n    width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n  }\n\n  .Loader {\n    width: 100%;\n    height: 100%;\n  }\n\n  img {\n    max-height: 100%;\n    scroll-snap-align: start;\n  }\n}\n.Loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    flex: none;\n    width: 64px;\n    height: 64px;\n  }\n}\n"],sourceRoot:""}]),o.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const i=o},6339:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(272),a=r.n(n),l=r(2609),o=r.n(l)()(a());o.push([e.id,".KUxoC6psSrrMeYM5oAlM{color:purple}.KUxoC6psSrrMeYM5oAlM h4{margin:.5em 0}.KUxoC6psSrrMeYM5oAlM h5{margin:.25em 0}.mfYsAqyyqNlAHcqIZRYo{clear:both}.IUsVGkhlVQfyeVKDBe0W{float:left;width:200px;height:150px}.oYFC57M7QUXHd0bHx90u{clear:both}.oYFC57M7QUXHd0bHx90u .d4EGmd7WGzC6jR642U4i{float:right;text-align:right;margin:0 2em}.oYFC57M7QUXHd0bHx90u .hCevawnmB_dy9ljh4Xeg.WHvJJI0E40Qb_2xC6kaz{color:#8a2be2}.oYFC57M7QUXHd0bHx90u.eCohJhUTkuxKnSmXSCp6{border-top:1px solid #d3d3d3;margin-top:.5em;padding-top:.5em}","",{version:3,sources:["webpack://./src/containers/Products/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,yBACE,aAAA,CAEF,yBACE,cAAA,CAGJ,sBACE,UAAA,CAEF,sBACE,UAAA,CACA,WAAA,CACA,YAAA,CAEF,sBACE,UAAA,CACA,4CACE,WAAA,CACA,gBAAA,CACA,YAAA,CAGA,iEACE,aAAA,CAGJ,2CACE,4BAAA,CACA,eAAA,CACA,gBAAA",sourcesContent:[".Section {\n  color: purple;\n  h4 {\n    margin: 0.5em 0;\n  }\n  h5 {\n    margin: 0.25em 0;\n  }\n}\n.Row {\n  clear: both;\n}\n.Gallery {\n  float: left;\n  width: 200px;\n  height: 150px;\n}\n.Details {\n  clear: both;\n  .Sidebar {\n    float: right;\n    text-align: right;\n    margin: 0 2em;\n  }\n  .Feature {\n    &.changed {\n      color: blueviolet;\n    }\n  }\n  &.separator {\n    border-top: 1px solid lightgray;\n    margin-top: 0.5em;\n    padding-top: 0.5em;\n  }\n}\n"],sourceRoot:""}]),o.locals={Section:"KUxoC6psSrrMeYM5oAlM",Row:"mfYsAqyyqNlAHcqIZRYo",Gallery:"IUsVGkhlVQfyeVKDBe0W",Details:"oYFC57M7QUXHd0bHx90u",Sidebar:"d4EGmd7WGzC6jR642U4i",Feature:"hCevawnmB_dy9ljh4Xeg",changed:"WHvJJI0E40Qb_2xC6kaz",separator:"eCohJhUTkuxKnSmXSCp6"};const i=o}}]);
//# sourceMappingURL=241.js.map