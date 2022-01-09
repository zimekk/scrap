"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[650],{779:(e,t,n)=>{n.d(t,{r:()=>y});var r=n(7946),a=n(203),l=n(1283),o=n(2451),c=n(7162),i=n.n(c),u=n(2784),s=n(357),m=function(e){var t=e.height,n=void 0===t?80:t,r=e.width,a=void 0===r?80:r,l=e.color,o=void 0===l?"green":l,c=e.radius,i=void 0===c?1:c,s=e.label,m=void 0===s?"audio-loading":s;return u.createElement("svg",{width:a,height:n,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":m},u.createElement("defs",null,u.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},u.createElement("stop",{stopColor:o,stopOpacity:"0",offset:"0%"}),u.createElement("stop",{stopColor:o,stopOpacity:".631",offset:"63.146%"}),u.createElement("stop",{stopColor:o,offset:"100%"}))),u.createElement("g",{fill:"none",fillRule:"evenodd"},u.createElement("g",{transform:"translate(1 1)"},u.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:o,strokeWidth:"2"},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),u.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:i},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},f=n(2779),d=n.n(f),p=n(6435),v=["src"],h=(0,s.k)(function(){var e=(0,o.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=new Image;Object.assign(n,{onload:e,src:t})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function g(e){var t=e.src,n=(0,l.Z)(e,v);return h.read(t),u.createElement("img",(0,a.Z)({src:t},n,{referrerPolicy:"no-referrer"}))}function b(){return u.createElement("div",{className:p.Z.Loader},u.createElement(m,null))}function E(e){var t=(0,a.Z)({},e);return u.createElement("div",{className:p.Z.ImgWrapper},u.createElement(u.Suspense,{fallback:u.createElement(b,null)},u.createElement(g,t)))}function y(e){var t=e.className,n=e.images,a=(0,u.useState)(!1),l=(0,r.Z)(a,2),o=l[0],c=l[1],i=(0,u.useState)(!1),s=(0,r.Z)(i,2),m=s[0],f=s[1],v=(0,u.useRef)(null);return(0,u.useEffect)((function(){var e=function(e){var t=e.target;t.scrollLeft===t.scrollWidth-t.offsetWidth&&f(!0)};if(v.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){(0,r.Z)(e,1)[0].isIntersecting&&c(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(v.current),v.current.addEventListener("scroll",e),function(){v.current&&(t.unobserve(v.current),v.current.removeEventListener("scroll",e))}}}),[v]),n.length?u.createElement("div",{ref:v,className:d()(t,p.Z.Gallery)},o&&n.slice(0,m?n.length:3).map((function(e,t){return u.createElement(E,{key:t,src:e,alt:"Image #".concat(t+1)})}))):null}},7945:(e,t,n)=>{n.d(t,{r:()=>c});var r=n(203),a=n(1283),l=n(2784),o=["href"];function c(e){var t=e.href,n=void 0===t?"#":t,c=(0,a.Z)(e,o),i="#"===n[0];return l.createElement("a",(0,r.Z)({href:n,target:i?void 0:"_blank",rel:i?void 0:"noopener noreferrer"},c))}},8650:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var r=n(1283),a=n(7946),l=n(965),o=n(2451),c=n(7162),i=n.n(c),u=n(2784),s=n(1148),m=n(7984),f=n(9369),d=n(8871),p=n(3081),v=n(357),h=n(779),g=n(7945),b=n(8805),E=["search"],y=["areaTo"],w=["areaFrom"],k=["priceTo"],O=["priceFrom"];function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={id:1,price:1,title:1,_area:1,_created:-1},C=[0,1e5,2e5,3e5,4e5,5e5,1e6,15e5,2e6],N=[0,500,1e3,1500,2e3,2500,5e3],_=(0,v.k)(function(){var e=(0,o.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/properties/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{results:e.results.map((function(e){var t,n,r;return Object.assign(e,{_area:Number((null===(t=e.parameters.find((function(e){var t=e.label;return["Powierzchnia działki w m2"].includes(t)})))||void 0===t?void 0:t.value.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_address:e.address?["lokalizacja_kraj","lokalizacja_region","lokalizacja_powiat","lokalizacja_gmina","lokalizacja_miejscowosc"].map((function(t){return e.address[t]})).filter(Boolean):null,location:e.location.join(", "),road:null===(n=e.parameters.find((function(e){var t=e.label;return["Droga dojazdowa"].includes(t)})))||void 0===n?void 0:n.value,building:null===(r=e.parameters.find((function(e){var t=e.label;return["Typ budynku"].includes(t)})))||void 0===r?void 0:r.value})}))}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Z=function(e){return x(x({},e),{},{categories:[],_search:e.title.toLowerCase(),_price:e.price})};function F(e){var t=e.version,n=void 0===t?"v1":t,l=_.read(n).results,o=(0,u.useMemo)((function(){return{category:[""],location:[""].concat(l.map((function(e){return e.location})).filter(Boolean).filter((function(e,t,n){return n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),road:[""].concat(l.map((function(e){return e.road})).filter((function(e,t,n){return void 0!==e&&n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),building:[""].concat(l.map((function(e){return e.building})).filter((function(e,t,n){return void 0!==e&&n.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})))}}),[l]),c=(0,u.useState)((function(){return{category:o.category[0],location:o.location[0],road:o.road[0],building:o.building[0],search:"",priceFrom:C[0],priceTo:C[C.length-2],areaFrom:N[0],areaTo:N[N.length-1]}})),i=(0,a.Z)(c,2),p=i[0],v=i[1],g=(0,u.useState)((function(){return p})),T=(0,a.Z)(g,2),F=T[0],K=T[1],D=(0,u.useState)((function(){return Object.keys(j)[0]})),z=(0,a.Z)(D,2),H=z[0],M=z[1],Y=(0,u.useCallback)((function(e){var t=e.target;return M(t.value)}),[]),G=(0,u.useMemo)((function(){return new s.x}),[]);(0,u.useEffect)((function(){var e=G.pipe((0,m.U)((function(e){var t=e.search,n=(0,r.Z)(e,E);return JSON.stringify(x(x(x({},F),n),{},{search:t.trim()}))})),(0,f.x)(),(0,d.b)(400)).subscribe((function(e){return K((function(t){return x(x({},t),JSON.parse(e))}))}));return function(){return e.unsubscribe()}}),[G]),(0,u.useEffect)((function(){G.next(p)}),[p]),console.log({options:o,filters:p,results:l});var I=(0,u.useMemo)((function(){return l.map(Z).filter((function(e){return(!F.category||e.categories.includes(F.category))&&(!F.location||[e.location].includes(F.location))&&(!F.road||[e.road].includes(F.road))&&(!F.building||[e.building].includes(F.building))&&(e._search.match(F.search)||F.search===String(e.id))&&(F.areaTo===N[0]||F.areaFrom<=e._area&&e._area<=F.areaTo)&&(F.priceTo===C[0]||F.priceFrom<=e._price&&e._price<=F.priceTo)}))}),[l,F]),U=(0,u.useMemo)((function(){return I.sort((function(e,t){return j[H]*(e[H]>t[H]?1:-1)}))}),[I,H]);return u.createElement("div",null,u.createElement("fieldset",null,u.createElement("label",null,u.createElement("span",null,"Category"),u.createElement("select",{value:p.category,onChange:(0,u.useCallback)((function(e){var t=e.target;return v((function(e){return x(x({},e),{},{category:t.value})}))}),[])},o.category.map((function(e){return u.createElement("option",{key:e,value:e},e)})))),u.createElement("label",null,u.createElement("span",null,"Search"),u.createElement("input",{type:"search",value:p.search,onChange:(0,u.useCallback)((function(e){var t=e.target;return v((function(e){return x(x({},e),{},{search:t.value})}))}),[])})),u.createElement("label",null,u.createElement("span",null,"Sort"),u.createElement("select",{value:H,onChange:Y},Object.entries(j).map((function(e){var t=(0,a.Z)(e,1)[0];return u.createElement("option",{key:t,value:t},t)})))),u.createElement("div",null,u.createElement("label",null,u.createElement("span",null,"Location"),u.createElement("select",{value:p.location,onChange:(0,u.useCallback)((function(e){var t=e.target.value;return v((function(e){return x(x({},e),{},{location:t})}))}),[])},o.location.map((function(e){return u.createElement("option",{key:e,value:e},e)}))))),u.createElement("div",null,u.createElement("label",null,u.createElement("span",null,"Road"),u.createElement("select",{value:p.road,onChange:(0,u.useCallback)((function(e){var t=e.target.value;return v((function(e){return x(x({},e),{},{road:t})}))}),[])},o.road.map((function(e){return u.createElement("option",{key:e,value:e},e)}))))),u.createElement("div",null,u.createElement("label",null,u.createElement("span",null,"Building"),u.createElement("select",{value:p.building,onChange:(0,u.useCallback)((function(e){var t=e.target.value;return v((function(e){return x(x({},e),{},{building:t})}))}),[])},o.building.map((function(e){return u.createElement("option",{key:e,value:e},e)}))))),u.createElement("div",null,u.createElement("label",null,u.createElement("span",null,"Area From"),u.createElement("input",{type:"range",list:"area-list",min:N[0],max:N[N.length-1],value:p.areaFrom,onChange:(0,u.useCallback)((function(e){var t=e.target;return v((function(e){var n=e.areaTo,a=(0,r.Z)(e,y),l=Number(t.value);return x(x({},a),{},{areaFrom:l,areaTo:n<l?l:n})}))}),[])}),u.createElement("datalist",{id:"area-list"},N.map((function(e){return u.createElement("option",{key:e,value:e})})))),u.createElement("label",null,u.createElement("span",null,"Area To"),u.createElement("input",{type:"range",list:"area-list",min:N[0],max:N[N.length-1],value:p.areaTo,onChange:(0,u.useCallback)((function(e){var t=e.target;return v((function(e){var n=e.areaFrom,a=(0,r.Z)(e,w),l=Number(t.value);return x(x({},a),{},{areaFrom:l>n?n:l,areaTo:l})}))}),[])}),u.createElement("span",null,"".concat((new Intl.NumberFormat).format(p.areaFrom)," - ").concat((new Intl.NumberFormat).format(p.areaTo)," m2")))),u.createElement("div",null,u.createElement("label",null,u.createElement("span",null,"Price From"),u.createElement("input",{type:"range",list:"price-list",min:C[0],max:C[C.length-1],value:p.priceFrom,onChange:(0,u.useCallback)((function(e){var t=e.target;return v((function(e){var n=e.priceTo,a=(0,r.Z)(e,k),l=Number(t.value);return x(x({},a),{},{priceFrom:l,priceTo:n<l?l:n})}))}),[])}),u.createElement("datalist",{id:"price-list"},C.map((function(e){return u.createElement("option",{key:e,value:e})})))),u.createElement("label",null,u.createElement("span",null,"Price To"),u.createElement("input",{type:"range",list:"price-list",min:C[0],max:C[C.length-1],value:p.priceTo,onChange:(0,u.useCallback)((function(e){var t=e.target;return v((function(e){var n=e.priceFrom,a=(0,r.Z)(e,O),l=Number(t.value);return x(x({},a),{},{priceFrom:l>n?n:l,priceTo:l})}))}),[])}),u.createElement("span",null,"".concat((new Intl.NumberFormat).format(p.priceFrom)," - ").concat((new Intl.NumberFormat).format(p.priceTo)," PLN"))))),u.createElement("div",null,"Found ".concat(I.length," products out of a total of ").concat(l.length)),u.createElement("ol",null,U.slice(0,100).map((function(e){return u.createElement("li",{key:e.id,className:b.Z.Row},u.createElement(h.r,{className:b.Z.Gallery,images:e.images}),u.createElement(S,e),u.createElement(P,e))}))))}function S(e){var t=e.canonical,n=e.price,r=e.title,a=e._address,l=e._created;return u.createElement("div",{className:b.Z.Summary},u.createElement("div",null,(0,p.Z)(l,"yyyy-MM-dd HH:mm")),u.createElement("h4",null,"".concat((new Intl.NumberFormat).format(n)," PLN")),u.createElement("h3",null,u.createElement(g.r,{href:t},r)),a&&u.createElement("h6",null,a.join(" / ")))}function P(e){var t=e.description,n=e.parameters;return u.createElement("div",{className:b.Z.Details},t.map((function(e,t){return u.createElement("p",{key:t},e)})),u.createElement("ul",null,n.map((function(e,t){var n=e.label,r=e.value;return u.createElement("li",{key:t},n,": ",u.createElement("b",null,r))}))))}function K(){return u.createElement("div",{className:b.Z.Section},u.createElement("h2",null,"Properties"),u.createElement(F,null))}},4388:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(9601),a=n.n(r),l=n(2609),o=n.n(l)()(a());o.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.zDhTSHDK36rhYKliKHPK img{max-height:100%;scroll-snap-align:start}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}",""]),o.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const c=o},6917:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(9601),a=n.n(r),l=n(2609),o=n.n(l)()(a());o.push([e.id,".KYBwyVHwYFPduDcS8tJA{color:purple}.bUNjBJTWIMSq_XWNswT2{clear:both;padding:.5em 0}.e3KhqV06cOMe70OduX67{float:left;width:200px;height:200px}.YzMcljUk8YpF_3sH71Qy h3{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h4{float:right;margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h6{margin-block-start:.5em;margin-block-end:.5em}.GzN8lDh8Bf0lo_aG_yN4{border-bottom:1px solid #d3d3d3;padding-bottom:.5em}.GzN8lDh8Bf0lo_aG_yN4 p{margin:0}",""]),o.locals={Section:"KYBwyVHwYFPduDcS8tJA",Row:"bUNjBJTWIMSq_XWNswT2",Gallery:"e3KhqV06cOMe70OduX67",Summary:"YzMcljUk8YpF_3sH71Qy",Details:"GzN8lDh8Bf0lo_aG_yN4"};const c=o},8871:(e,t,n)=>{n.d(t,{b:()=>o});var r=n(997),a=n(1118),l=n(7394);function o(e,t){return void 0===t&&(t=r.z),(0,a.e)((function(n,r){var a=null,o=null,c=null,i=function(){if(a){a.unsubscribe(),a=null;var e=o;o=null,r.next(e)}};function u(){var n=c+e,l=t.now();if(l<n)return a=this.schedule(void 0,n-l),void r.add(a);i()}n.subscribe(new l.Q(r,(function(n){o=n,c=t.now(),a||(a=t.schedule(u,e),r.add(a))}),(function(){i(),r.complete()}),void 0,(function(){o=a=null})))}))}},9369:(e,t,n)=>{n.d(t,{x:()=>o});var r=n(9676),a=n(1118),l=n(7394);function o(e,t){return void 0===t&&(t=r.y),e=null!=e?e:c,(0,a.e)((function(n,r){var a,o=!0;n.subscribe(new l.Q(r,(function(n){var l=t(n);!o&&e(a,l)||(o=!1,a=l,r.next(n))})))}))}function c(e,t){return e===t}},6435:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(6062),a=n.n(r),l=n(4036),o=n.n(l),c=n(6793),i=n.n(c),u=n(7892),s=n.n(u),m=n(1173),f=n.n(m),d=n(2464),p=n.n(d),v=n(4388),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=f();var g=a()(v.default,h);if(!v.default.locals||e.hot.invalidate){var b=!v.default.locals,E=b?v:v.default.locals;e.hot.accept(4388,(t=>{v=n(4388),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(E,b?v:v.default.locals,b)?(E=b?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const y=v.default&&v.default.locals?v.default.locals:void 0},8805:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(6062),a=n.n(r),l=n(4036),o=n.n(l),c=n(6793),i=n.n(c),u=n(7892),s=n.n(u),m=n(1173),f=n.n(m),d=n(2464),p=n.n(d),v=n(6917),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=f();var g=a()(v.default,h);if(!v.default.locals||e.hot.invalidate){var b=!v.default.locals,E=b?v:v.default.locals;e.hot.accept(6917,(t=>{v=n(6917),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(E,b?v:v.default.locals,b)?(E=b?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const y=v.default&&v.default.locals?v.default.locals:void 0},203:(e,t,n)=>{function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:()=>r})}}]);