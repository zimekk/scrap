"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[650],{779:(e,t,r)=>{r.d(t,{r:()=>b});var n=r(7946),a=r(203),l=r(1283),c=r(2451),o=r(7162),i=r.n(o),u=r(2784),s=r(357),f=function(e){var t=e.height,r=void 0===t?80:t,n=e.width,a=void 0===n?80:n,l=e.color,c=void 0===l?"green":l,o=e.radius,i=void 0===o?1:o,s=e.label,f=void 0===s?"audio-loading":s;return u.createElement("svg",{width:a,height:r,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":f},u.createElement("defs",null,u.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},u.createElement("stop",{stopColor:c,stopOpacity:"0",offset:"0%"}),u.createElement("stop",{stopColor:c,stopOpacity:".631",offset:"63.146%"}),u.createElement("stop",{stopColor:c,offset:"100%"}))),u.createElement("g",{fill:"none",fillRule:"evenodd"},u.createElement("g",{transform:"translate(1 1)"},u.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:c,strokeWidth:"2"},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),u.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:i},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},m=r(2779),d=r.n(m),p=r(6435),v=["src"],h=(0,s.k)(function(){var e=(0,c.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var r=new Image;Object.assign(r,{onload:e,src:t})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function g(e){var t=e.src,r=(0,l.Z)(e,v);return h.read(t),u.createElement("img",(0,a.Z)({src:t},r,{referrerPolicy:"no-referrer"}))}function E(){return u.createElement("div",{className:p.Z.Loader},u.createElement(f,null))}function y(e){var t=(0,a.Z)({},e);return u.createElement("div",{className:p.Z.ImgWrapper},u.createElement(u.Suspense,{fallback:u.createElement(E,null)},u.createElement(g,t)))}function b(e){var t=e.className,r=e.images,a=(0,u.useState)(!1),l=(0,n.Z)(a,2),c=l[0],o=l[1],i=(0,u.useState)(!1),s=(0,n.Z)(i,2),f=s[0],m=s[1],v=(0,u.useRef)(null);return(0,u.useEffect)((function(){var e=function(e){var t=e.target;t.scrollLeft===t.scrollWidth-t.offsetWidth&&m(!0)};if(v.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){(0,n.Z)(e,1)[0].isIntersecting&&o(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(v.current),v.current.addEventListener("scroll",e),function(){v.current&&(t.unobserve(v.current),v.current.removeEventListener("scroll",e))}}}),[v]),r.length?u.createElement("div",{ref:v,className:d()(t,p.Z.Gallery)},c&&r.slice(0,f?r.length:3).map((function(e,t){return u.createElement(y,{key:t,src:e,alt:"Image #".concat(t+1)})}))):null}},7945:(e,t,r)=>{r.d(t,{r:()=>o});var n=r(203),a=r(1283),l=r(2784),c=["href"];function o(e){var t=e.href,r=void 0===t?"#":t,o=(0,a.Z)(e,c),i="#"===r[0];return l.createElement("a",(0,n.Z)({href:r,target:i?void 0:"_blank",rel:i?void 0:"noopener noreferrer"},o))}},8650:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n=r(1283),a=r(7946),l=r(965),c=r(2451),o=r(7162),i=r.n(o),u=r(2784),s=r(3081),f=r(357),m=r(4772),d=r(779),p=r(7945),v=r(8805),h=["priceTo"],g=["priceFrom"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={id:1,price:1,title:1,_created:-1},w=[0,1e5,2e5,3e5,4e5,5e5,1e6,15e5,2e6],k=(0,f.k)(function(){var e=(0,c.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/properties/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=function(e){return y(y({},e),{},{categories:[],_filter:e.title.toLowerCase(),_price:e.price})};function T(e){var t=e.version,r=void 0===t?"v1":t,l=k.read(r).results,c=(0,u.useMemo)((function(){return{category:[]}}),[l]),o=(0,u.useState)((function(){return{category:"",search:"",priceFrom:w[0],priceTo:w[w.length-2]}})),i=(0,a.Z)(o,2),s=i[0],f=i[1],p=(0,m.Z)(s.search),E=(0,a.Z)(p,1)[0],T=(0,u.useState)((function(){return Object.keys(b)[0]})),S=(0,a.Z)(T,2),N=S[0],P=S[1],j=(0,u.useCallback)((function(e){var t=e.target;return P(t.value)}),[]),C=(0,u.useCallback)((function(e){var t=e.target;return f((function(e){var r=e.priceTo,a=(0,n.Z)(e,h),l=Number(t.value);return y(y({},a),{},{priceFrom:l,priceTo:r<l?l:r})}))}),[]),K=(0,u.useCallback)((function(e){var t=e.target;return f((function(e){var r=e.priceFrom,a=(0,n.Z)(e,g),l=Number(t.value);return y(y({},a),{},{priceFrom:l>r?r:l,priceTo:l})}))}),[]);console.log({options:c,filters:s,results:l});var _=(0,u.useMemo)((function(){return l.map(O).filter((function(e){return(!s.category||e.categories.includes(s.category))&&(e._filter.match(E)||E.trim()===String(e.id))&&(s.priceTo===w[0]||s.priceFrom<=e._price&&e._price<=s.priceTo)}))}),[l,E,s.category,s.priceFrom,s.priceTo]),D=(0,u.useMemo)((function(){return _.sort((function(e,t){return b[N]*(e[N]>t[N]?1:-1)}))}),[_,N]);return u.createElement("div",null,u.createElement("fieldset",null,u.createElement("label",null,u.createElement("span",null,"Category"),u.createElement("select",{value:s.category,onChange:(0,u.useCallback)((function(e){var t=e.target;return f((function(e){return y(y({},e),{},{category:t.value})}))}),[])},c.category.map((function(e){return u.createElement("option",{key:e,value:e},e)})))),u.createElement("label",null,u.createElement("span",null,"Search"),u.createElement("input",{type:"search",value:s.search,onChange:(0,u.useCallback)((function(e){var t=e.target;return f((function(e){return y(y({},e),{},{search:t.value})}))}),[])})),u.createElement("label",null,u.createElement("span",null,"Sort"),u.createElement("select",{value:N,onChange:j},Object.entries(b).map((function(e){var t=(0,a.Z)(e,1)[0];return u.createElement("option",{key:t,value:t},t)})))),u.createElement("div",null,u.createElement("label",null,u.createElement("span",null,"Price From"),u.createElement("input",{type:"range",list:"price-list",min:w[0],max:w[w.length-1],value:s.priceFrom,onChange:C}),u.createElement("datalist",{id:"price-list"},w.map((function(e){return u.createElement("option",{key:e,value:e,label:w.includes(e)?"".concat(e," PLN"):void 0})})))),u.createElement("label",null,u.createElement("span",null,"Price To"),u.createElement("input",{type:"range",list:"price-list",min:w[0],max:w[w.length-1],value:s.priceTo,onChange:K}),u.createElement("span",null,"".concat(s.priceFrom,"-").concat(s.priceTo," pln"))))),u.createElement("div",null,"Found ".concat(_.length," products out of a total of ").concat(l.length)),u.createElement("ol",null,D.slice(0,100).map((function(e){return u.createElement("li",{key:e.id,className:v.Z.Row},u.createElement(d.r,{className:v.Z.Gallery,images:e.images}),u.createElement(Z,e),u.createElement(x,e))}))))}function Z(e){var t=e.canonical,r=e.price,n=e.title,a=e._created;return u.createElement("div",{className:v.Z.Summary},u.createElement("div",null,(0,s.Z)(a,"yyyy-MM-dd HH:mm")),u.createElement("h4",null,"".concat(r," PLN")),u.createElement("h3",null,u.createElement(p.r,{href:t},n)))}function x(e){var t=e.description,r=e.parameters;return u.createElement("div",{className:v.Z.Details},t.map((function(e,t){return u.createElement("p",{key:t},e)})),u.createElement("ul",null,r.map((function(e,t){var r=e.label,n=e.value;return u.createElement("li",{key:t},r,": ",u.createElement("b",null,n))}))))}function S(){return u.createElement("div",{className:v.Z.Section},u.createElement("h2",null,"Properties"),u.createElement(T,null))}},4772:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7946),a=r(2784);function l(e){var t=(0,a.useState)(e),r=(0,n.Z)(t,2),l=r[0],c=r[1],o=(0,a.useRef)();return(0,a.useEffect)((function(){return clearTimeout(o.current),o.current=setTimeout((function(){return c(e.toLowerCase())}),400),function(){clearTimeout(o.current)}}),[e]),[l]}},4388:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(9601),a=r.n(n),l=r(2609),c=r.n(l)()(a());c.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.zDhTSHDK36rhYKliKHPK img{max-height:100%;scroll-snap-align:start}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}",""]),c.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const o=c},6917:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(9601),a=r.n(n),l=r(2609),c=r.n(l)()(a());c.push([e.id,".KYBwyVHwYFPduDcS8tJA{color:purple}.bUNjBJTWIMSq_XWNswT2{clear:both;padding:.5em 0}.e3KhqV06cOMe70OduX67{float:left;width:200px;height:200px}.YzMcljUk8YpF_3sH71Qy h3{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h4{float:right;margin-block-start:.5em;margin-block-end:.5em}.GzN8lDh8Bf0lo_aG_yN4{border-bottom:1px solid #d3d3d3}.GzN8lDh8Bf0lo_aG_yN4 p{margin:0}",""]),c.locals={Section:"KYBwyVHwYFPduDcS8tJA",Row:"bUNjBJTWIMSq_XWNswT2",Gallery:"e3KhqV06cOMe70OduX67",Summary:"YzMcljUk8YpF_3sH71Qy",Details:"GzN8lDh8Bf0lo_aG_yN4"};const o=c},6435:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(6062),a=r.n(n),l=r(4036),c=r.n(l),o=r(6793),i=r.n(o),u=r(7892),s=r.n(u),f=r(1173),m=r.n(f),d=r(2464),p=r.n(d),v=r(4388),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=m();var g=a()(v.default,h);if(!v.default.locals||e.hot.invalidate){var E=!v.default.locals,y=E?v:v.default.locals;e.hot.accept(4388,(t=>{v=r(4388),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(y,E?v:v.default.locals,E)?(y=E?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const b=v.default&&v.default.locals?v.default.locals:void 0},8805:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(6062),a=r.n(n),l=r(4036),c=r.n(l),o=r(6793),i=r.n(o),u=r(7892),s=r.n(u),f=r(1173),m=r.n(f),d=r(2464),p=r.n(d),v=r(6917),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=m();var g=a()(v.default,h);if(!v.default.locals||e.hot.invalidate){var E=!v.default.locals,y=E?v:v.default.locals;e.hot.accept(6917,(t=>{v=r(6917),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(y,E?v:v.default.locals,E)?(y=E?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const b=v.default&&v.default.locals?v.default.locals:void 0},203:(e,t,r)=>{function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:()=>n})}}]);