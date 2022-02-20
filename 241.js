"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[241],{779:(e,t,r)=>{r.d(t,{r:()=>w});var n=r(203),a=r(1283),l=r(2451),o=r(7946),i=r(7162),c=r.n(i),u=r(2784),s=r(357),f=r(5096),m=r(7945),d=function(e){var t=e.height,r=void 0===t?80:t,n=e.width,a=void 0===n?80:n,l=e.color,o=void 0===l?"green":l,i=e.radius,c=void 0===i?1:i,s=e.label,f=void 0===s?"audio-loading":s;return u.createElement("svg",{width:a,height:r,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":f},u.createElement("defs",null,u.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},u.createElement("stop",{stopColor:o,stopOpacity:"0",offset:"0%"}),u.createElement("stop",{stopColor:o,stopOpacity:".631",offset:"63.146%"}),u.createElement("stop",{stopColor:o,offset:"100%"}))),u.createElement("g",{fill:"none",fillRule:"evenodd"},u.createElement("g",{transform:"translate(1 1)"},u.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:o,strokeWidth:"2"},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),u.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:c},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},p=r(2779),v=r.n(p),h=r(6435),g=["src"],E=(0,s.k)(function(){var e=(0,l.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var r=new Image;Object.assign(r,{onload:function(){return e(t)},onerror:function(){return e((t=f.VmB,n=(r=(0,o.Z)(t.icon,5))[0],a=r[1],l=r[4],'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(n," ").concat(a,'"><path fill="currentColor" d="').concat(l,'"></path></svg>')));var t,r,n,a,l},src:t})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function b(e){var t=e.src,r=(0,a.Z)(e,g),l=E.read(t);return u.createElement(m.r,{href:l},u.createElement("img",(0,n.Z)({src:l},r,{referrerPolicy:"no-referrer"})))}function y(){return u.createElement("div",{className:h.Z.Loader},u.createElement(d,null))}function Z(e){var t=(0,n.Z)({},e);return u.createElement("div",{className:h.Z.ImgWrapper},u.createElement(u.Suspense,{fallback:u.createElement(y,null)},u.createElement(b,t)))}function w(e){var t=e.className,r=e.images,n=(0,u.useState)(!1),a=(0,o.Z)(n,2),l=a[0],i=a[1],c=(0,u.useState)(!1),s=(0,o.Z)(c,2),f=s[0],m=s[1],d=(0,u.useRef)(null);return(0,u.useEffect)((function(){var e=function(e){var t=e.target;t.scrollLeft===t.scrollWidth-t.offsetWidth&&m(!0)};if(d.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){(0,o.Z)(e,1)[0].isIntersecting&&i(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(d.current),d.current.addEventListener("scroll",e),function(){d.current&&(t.unobserve(d.current),d.current.removeEventListener("scroll",e))}}}),[d]),r.length?u.createElement("div",{ref:d,className:v()(t,h.Z.Gallery)},l&&r.slice(0,f?r.length:3).map((function(e,t){return u.createElement(Z,{key:t,src:e,alt:"Image #".concat(t+1)})}))):null}},7945:(e,t,r)=>{r.d(t,{r:()=>i});var n=r(203),a=r(1283),l=r(2784),o=["href"];function i(e){var t=e.href,r=void 0===t?"#":t,i=(0,a.Z)(e,o),c="#"===r[0];return l.createElement("a",(0,n.Z)({href:r,target:c?void 0:"_blank",rel:c?void 0:"noopener noreferrer"},i))}},9241:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n=r(1283),a=r(965),l=r(7946),o=r(2451),i=r(7162),c=r.n(i),u=r(2784),s=r(3081),f=r(357),m=r(779),d=r(7945),p=r(4772),v=r(2779),h=r.n(v),g=r(7715),E=["_image"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var y={title:1,brand:1,_price:1,_stars:-1,_created:-1,_updated:-1},Z=[0,100,200,500,1e3,1500,2e3,3e3,4e3,5e3,1e4,15e3,2e4],w=(0,f.k)(function(){var e=(0,o.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/products/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function x(e){var t=e.version,r=void 0===t?"v1":t,o=w.read(r).results,i=(0,u.useState)(""),c=(0,l.Z)(i,2),s=c[0],f=c[1],v=(0,p.Z)(s),h=(0,l.Z)(v,1)[0],x=(0,u.useCallback)((function(e){var t=e.target;return f(t.value)}),[]),S=(0,u.useState)((function(){return Object.keys(y).pop()})),O=(0,l.Z)(S,2),j=O[0],H=O[1],K=(0,u.useCallback)((function(e){var t=e.target;return H(t.value)}),[]),M=(0,u.useState)(Z[0]),_=(0,l.Z)(M,2),N=_[0],P=_[1],U=(0,u.useState)(Z[Z.length-1]),D=(0,l.Z)(U,2),T=D[0],Y=D[1],G=(0,u.useCallback)((function(e){var t=e.target;return Y((function(e){var r=Number(t.value);return P(r),e<r?r:e}))}),[]),A=(0,u.useCallback)((function(e){var t=e.target;return P((function(e){var r=Number(t.value);return Y(r),r>e?e:r}))}),[]);console.log({results:o});var I=(0,u.useMemo)((function(){return o.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({_image:e.image.filter((function(e){return e.match(/small/)})),_title:e.title.toLowerCase(),_price:Number(e.price.reverse()[0].replace(/[^0-9,]/g,"").replace(",",".")),_stars:Number(e.stars.replace(/[^0-9]/g,"")),_history:{}},e)})).filter((function(e){return(e._title.match(h)||h.trim()===String(e.id))&&N<=e._price&&e._price<=T}))}),[o,h,N,T]),X=(0,u.useMemo)((function(){return I.sort((function(e,t){return y[j]*(e[j]>t[j]?1:-1)}))}),[I,j]);return u.createElement("div",null,u.createElement("fieldset",null,u.createElement("label",null,u.createElement("span",null,"Search"),u.createElement("input",{type:"search",value:s,onChange:x})),u.createElement("label",null,u.createElement("span",null,"Sort"),u.createElement("select",{value:j,onChange:K},Object.entries(y).map((function(e){var t=(0,l.Z)(e,2),r=t[0];return t[1],u.createElement("option",{key:r,value:r},r)})))),u.createElement("div",null,u.createElement("label",null,u.createElement("span",null,"Price From"),u.createElement("input",{type:"range",list:"price-list",min:Z[0],max:Z[Z.length-1],value:N,onChange:G}),u.createElement("datalist",{id:"price-list"},Z.map((function(e){return u.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?"".concat(e," pln"):void 0})})))),u.createElement("label",null,u.createElement("span",null,"Price To"),u.createElement("input",{type:"range",list:"price-list",min:Z[0],max:Z[Z.length-1],value:T,onChange:A}),u.createElement("span",null,"".concat(N,"-").concat(T," pln"))))),u.createElement("div",null,"Found ".concat(I.length," products out of a total of ").concat(o.length)),u.createElement("ol",null,X.slice(0,100).map((function(e){var t=e._image,r=(0,n.Z)(e,E);return u.createElement("li",{key:r.id,className:g.Z.Row},u.createElement(m.r,{className:g.Z.Gallery,images:t}),u.createElement("h3",null,u.createElement(d.r,{href:r.url},r.title)),u.createElement("h4",null,r.brand),r.label&&u.createElement("div",null,r.label.join(" | ")),u.createElement(k,{item:r}),u.createElement(C,{history:Object.entries(r._history).reverse(),item:r}))}))))}function C(e){var t=e.history,r=e.item,n=(0,u.useState)((function(){return!(t.length>1)})),a=(0,l.Z)(n,2),o=a[0],i=a[1];return u.createElement("div",{className:g.Z.History},(o?t:t.slice(0,1)).map((function(e,t,n){var a=(0,l.Z)(e,2),o=a[0],i=a[1];return u.createElement(k,{key:t,item:i,prev:t>0?n[t-1][1]:r,time:Number(o)})})),!1===o&&u.createElement(d.r,{onClick:function(e){return e.preventDefault(),i(!0)}},"more..."))}function k(e){var t=e.item,r=e.prev,n=e.time,a=void 0===n?t._updated||t._created:n;return u.createElement("div",{className:h()(g.Z.Details,r&&g.Z.separator)},u.createElement("div",{className:g.Z.Sidebar},a&&u.createElement("div",{className:g.Z.Date},(0,s.Z)(a,"yyyy-MM-dd HH:mm")),u.createElement("h5",null,t.price.join(" ")),u.createElement("div",{className:h()(g.Z.Feature,r&&r.stars!==t.stars&&g.Z.changed)},t.stars)),t.proms&&u.createElement("div",{className:h()(g.Z.Feature,r&&r.proms!==t.proms&&g.Z.changed)},t.proms.join(" | ")),u.createElement("ul",{className:h()(g.Z.Feature,r&&r.links.join(":")!==t.links.join(":")&&g.Z.changed)},t.links.map((function(e,t){return u.createElement("li",{key:t},e)}))))}function S(){return u.createElement("div",{className:g.Z.Section},u.createElement("h2",null,"Products"),u.createElement(x,null))}},4772:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7946),a=r(2784);function l(e){var t=(0,a.useState)(e),r=(0,n.Z)(t,2),l=r[0],o=r[1],i=(0,a.useRef)();return(0,a.useEffect)((function(){return clearTimeout(i.current),i.current=setTimeout((function(){return o(e.toLowerCase())}),400),function(){clearTimeout(i.current)}}),[e]),[l]}},4388:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(9601),a=r.n(n),l=r(2609),o=r.n(l)()(a());o.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.zDhTSHDK36rhYKliKHPK img{max-height:100%;scroll-snap-align:start}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}",""]),o.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const i=o},9621:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(9601),a=r.n(n),l=r(2609),o=r.n(l)()(a());o.push([e.id,".KUxoC6psSrrMeYM5oAlM{color:purple}.KUxoC6psSrrMeYM5oAlM h4{margin:.5em 0}.KUxoC6psSrrMeYM5oAlM h5{margin:.25em 0}.mfYsAqyyqNlAHcqIZRYo{clear:both}.IUsVGkhlVQfyeVKDBe0W{float:left;width:200px;height:150px}.oYFC57M7QUXHd0bHx90u{clear:both}.oYFC57M7QUXHd0bHx90u .d4EGmd7WGzC6jR642U4i{float:right;text-align:right;margin:0 2em}.oYFC57M7QUXHd0bHx90u .hCevawnmB_dy9ljh4Xeg.WHvJJI0E40Qb_2xC6kaz{color:#8a2be2}.oYFC57M7QUXHd0bHx90u.eCohJhUTkuxKnSmXSCp6{border-top:1px solid #d3d3d3;margin-top:.5em;padding-top:.5em}",""]),o.locals={Section:"KUxoC6psSrrMeYM5oAlM",Row:"mfYsAqyyqNlAHcqIZRYo",Gallery:"IUsVGkhlVQfyeVKDBe0W",Details:"oYFC57M7QUXHd0bHx90u",Sidebar:"d4EGmd7WGzC6jR642U4i",Feature:"hCevawnmB_dy9ljh4Xeg",changed:"WHvJJI0E40Qb_2xC6kaz",separator:"eCohJhUTkuxKnSmXSCp6"};const i=o},6435:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(6062),a=r.n(n),l=r(4036),o=r.n(l),i=r(6793),c=r.n(i),u=r(7892),s=r.n(u),f=r(1173),m=r.n(f),d=r(2464),p=r.n(d),v=r(4388),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=m();var g=a()(v.default,h);if(!v.default.locals||e.hot.invalidate){var E=!v.default.locals,b=E?v:v.default.locals;e.hot.accept(4388,(t=>{v=r(4388),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(b,E?v:v.default.locals,E)?(b=E?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const y=v.default&&v.default.locals?v.default.locals:void 0},7715:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(6062),a=r.n(n),l=r(4036),o=r.n(l),i=r(6793),c=r.n(i),u=r(7892),s=r.n(u),f=r(1173),m=r.n(f),d=r(2464),p=r.n(d),v=r(9621),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=m();var g=a()(v.default,h);if(!v.default.locals||e.hot.invalidate){var E=!v.default.locals,b=E?v:v.default.locals;e.hot.accept(9621,(t=>{v=r(9621),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(b,E?v:v.default.locals,E)?(b=E?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const y=v.default&&v.default.locals?v.default.locals:void 0},203:(e,t,r)=>{function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:()=>n})}}]);