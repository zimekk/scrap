"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[481],{779:(e,t,r)=>{r.d(t,{r:()=>w});var n=r(203),a=r(1283),l=r(2451),o=r(7946),i=r(7162),c=r.n(i),u=r(2784),s=r(357),m=r(5096),d=r(7945),f=function(e){var t=e.height,r=void 0===t?80:t,n=e.width,a=void 0===n?80:n,l=e.color,o=void 0===l?"green":l,i=e.radius,c=void 0===i?1:i,s=e.label,m=void 0===s?"audio-loading":s;return u.createElement("svg",{width:a,height:r,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":m},u.createElement("defs",null,u.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},u.createElement("stop",{stopColor:o,stopOpacity:"0",offset:"0%"}),u.createElement("stop",{stopColor:o,stopOpacity:".631",offset:"63.146%"}),u.createElement("stop",{stopColor:o,offset:"100%"}))),u.createElement("g",{fill:"none",fillRule:"evenodd"},u.createElement("g",{transform:"translate(1 1)"},u.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:o,strokeWidth:"2"},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),u.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:c},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},p=r(2779),g=r.n(p),v=r(6435),h=["src"],b=(0,s.k)(function(){var e=(0,l.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var r=new Image;Object.assign(r,{onload:function(){return e(t)},onerror:function(){return e((t=m.VmB,n=(r=(0,o.Z)(t.icon,5))[0],a=r[1],l=r[4],'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(n," ").concat(a,'"><path fill="currentColor" d="').concat(l,'"></path></svg>')));var t,r,n,a,l},src:t})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function E(e){var t=e.src,r=(0,a.Z)(e,h),l=b.read(t);return u.createElement(d.r,{href:l},u.createElement("img",(0,n.Z)({src:l},r,{referrerPolicy:"no-referrer"})))}function y(){return u.createElement("div",{className:v.Z.Loader},u.createElement(f,null))}function k(e){var t=(0,n.Z)({},e);return u.createElement("div",{className:v.Z.ImgWrapper},u.createElement(u.Suspense,{fallback:u.createElement(y,null)},u.createElement(E,t)))}function w(e){var t=e.className,r=e.images,n=(0,u.useState)(!1),a=(0,o.Z)(n,2),l=a[0],i=a[1],c=(0,u.useState)(!1),s=(0,o.Z)(c,2),m=s[0],d=s[1],f=(0,u.useRef)(null);return(0,u.useEffect)((function(){var e=function(e){var t=e.target;t.scrollLeft===t.scrollWidth-t.offsetWidth&&d(!0)};if(f.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){(0,o.Z)(e,1)[0].isIntersecting&&i(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(f.current),f.current.addEventListener("scroll",e),function(){f.current&&(t.unobserve(f.current),f.current.removeEventListener("scroll",e))}}}),[f]),r.length?u.createElement("div",{ref:f,className:g()(t,v.Z.Gallery)},l&&r.slice(0,m?r.length:3).map((function(e,t){return u.createElement(k,{key:t,src:e,alt:"Image #".concat(t+1)})}))):null}},7945:(e,t,r)=>{r.d(t,{r:()=>i});var n=r(203),a=r(1283),l=r(2784),o=["href"];function i(e){var t=e.href,r=void 0===t?"#":t,i=(0,a.Z)(e,o),c="#"===r[0];return l.createElement("a",(0,n.Z)({href:r,target:c?void 0:"_blank",rel:c?void 0:"noopener noreferrer"},i))}},2481:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Q});var n=r(203),a=r(1283),l=r(7946),o=r(965),i=r(2451),c=r(7162),u=r.n(c),s=r(2784),m=r(1148),d=r(7984),f=r(9369),p=r(8871),g=r(9530),v=r(5096),h=r(3081),b=r(357),E=r(779),y=r(7945),k=r(195),w=["parameters"];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){return k.z.object({address:k.z.record(k.z.string(),k.z.union([k.z.string(),k.z.number()])),id:k.z.string(),information:k.z.array(k.z.object({label:k.z.string(),unit:k.z.string(),values:k.z.array(k.z.string())})).optional(),location:k.z.array(k.z.string()),parameters:k.z.array(k.z.object({label:k.z.string(),value:k.z.string()}))}).transform((function(e){var t=e.parameters,r=(0,a.Z)(e,w);return j({parameters:t.concat(r.information?r.information.filter((function(e){return e.values.length>0})).map((function(e){var t=e.label,r=e.values,n=e.unit;return{label:t,value:r.join(", ").concat(n)}})):[])},r)})).transform((function(e){return j(j({},e),{},{_information:e.information?e.information.filter((function(e){return e.values.length>0})).reduce((function(e,t){var r=t.label,n=t.values;return Object.assign(e,(0,o.Z)({},r,n))}),{}):null,_parameters:e.parameters.reduce((function(e,t){var r=t.label,n=t.value;return Object.assign(e,(0,o.Z)({},r,n))}),{})})})).transform((function(t){var r,n,a,l,o,i,c,u,s=t.address,m=t.location,d=t.parameters,f=t._information,p=t._parameters;return{_area:Number(null!=f&&null!==(r=f.area)&&void 0!==r&&r.length?f.area[0]:(null===(n=p["Powierzchnia w m2"])||void 0===n?void 0:n.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_terrain_area:Number(null!=f&&null!==(a=f.terrain_area)&&void 0!==a&&a.length?f.terrain_area[0]:(null===(l=p["Powierzchnia działki w m2"])||void 0===l?void 0:l.replace(/^([\d\s]+) m2$/g,"$1").replace(/\s/,""))||0),_address:s?["lokalizacja_kraj","lokalizacja_region","lokalizacja_powiat","lokalizacja_gmina","lokalizacja_miejscowosc","lokalizacja_ulica"].map((function(e){return s[e]})).filter(Boolean):null,_location:m.join(", "),road:null!=f&&null!==(o=f.access_types)&&void 0!==o&&o.length?null===(i=f.access_types)||void 0===i?void 0:i.map((function(e){return{"access_types::asphalt":"asfaltowa","access_types::dirt":"polna","access_types::hard_surfaced":"utwardzana","access_types::soft_surfaced":"nieutwardzona"}[e]||console.log({value:e})}))[0]:p["Droga dojazdowa"],building:null!=f&&null!==(c=f.building_type)&&void 0!==c&&c.length?null===(u=f.building_type)||void 0===u?void 0:u.map((function(e){return{"building_type::detached":"wolnostojący","building_type::ribbon":"szeregowy","building_type::semi_detached":"bliźniak","building_type::residence":"pałac/dworek/willa","building_type::tenement":"kamienica"}[e]||console.log({value:e})}))[0]:p["Typ budynku"],parameters:d,coordinates:e.coordinates||(s["lokalizacja_szerokosc-geograficzna-y"]?{latitude:s["lokalizacja_szerokosc-geograficzna-y"],longitude:s["lokalizacja_dlugosc-geograficzna-x"]}:null)}})).parse(e)},z=r(2779),T=r.n(z),x=r(8805),C=["search"],Z=["areaTo"],F=["areaFrom"],N=["terrainAreaTo"],S=["terrainAreaFrom"],P=["priceTo"],H=["priceFrom"],A=["children"];function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={id:1,price:1,title:1,_area:1,_terrain_area:1,_created:-1,_updated:-1},I=[0,1e5,2e5,3e5,4e5,5e5,1e6,15e5,2e6,25e5,3e6,4e6,5e6],B=[0,50,100,150,200,250,300,400,500,600,700,800,900],L=[0,250,500,750,1e3,1500,2e3,2500,3e3,3500,4e3,5e3],Y=(0,b.k)(function(){var e=(0,i.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/properties/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json().then((function(e){return{hide:e.hide,like:e.like,results:e.results.map((function(e){return K(K({},e),O(e))}))}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=function(e){return K(K({},e),{},{_search:e.title.toLowerCase(),_price:e.price})};function U(e){var t=e.version,r=void 0===t?"v1":t,o=Y.read(r),i=o.results,c=o.hide,u=o.like,g=(0,s.useMemo)((function(){return{category:[""].concat(i.map((function(e){return e.category})).filter(Boolean).filter((function(e,t,r){return r.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),location:[""].concat(i.map((function(e){return e._location})).filter(Boolean).filter((function(e,t,r){return r.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),road:[""].concat(i.map((function(e){return e.road})).filter((function(e,t,r){return void 0!==e&&r.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)}))),building:[""].concat(i.map((function(e){return e.building})).filter((function(e,t,r){return void 0!==e&&r.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})))}}),[i]),v=(0,s.useState)((function(){return{category:g.category[0],location:g.location[0],road:g.road[0],building:g.building[0],search:"",showHide:!0,onlyLike:!1,priceFrom:I[0],priceTo:I[I.length-4],areaFrom:B[0],areaTo:B[B.length-1],terrainAreaFrom:L[0],terrainAreaTo:L[L.length-1]}})),h=(0,l.Z)(v,2),b=h[0],y=h[1],k=(0,s.useState)((function(){return b})),w=(0,l.Z)(k,2),_=w[0],j=w[1],O=(0,s.useState)((function(){return Object.keys(M)[5]})),z=(0,l.Z)(O,2),A=z[0],D=z[1],U=(0,s.useCallback)((function(e){var t=e.target;return D(t.value)}),[]),X=(0,s.useMemo)((function(){return new m.x}),[]);(0,s.useEffect)((function(){var e=X.pipe((0,d.U)((function(e){var t=e.search,r=(0,a.Z)(e,C);return JSON.stringify(K(K(K({},_),r),{},{search:t.trim()}))})),(0,f.x)(),(0,p.b)(400)).subscribe((function(e){return j((function(t){return K(K({},t),JSON.parse(e))}))}));return function(){return e.unsubscribe()}}),[X]),(0,s.useEffect)((function(){X.next(b)}),[b]),console.log({options:g,filters:b,results:i});var W=(0,s.useState)(c),Q=(0,l.Z)(W,2),R=Q[0],V=Q[1],$=(0,s.useState)(u),ee=(0,l.Z)($,2),te=ee[0],re=ee[1],ne=(0,s.useMemo)((function(){return i.map(G).filter((function(e){return(!_.category||[e.category].includes(_.category))&&(!_.location||[e._location].includes(_.location))&&(!_.road||[e.road].includes(_.road))&&(!_.building||[e.building].includes(_.building))&&(!_.onlyLike||te.includes(e.id))&&(_.showHide||!R.includes(e.id))&&(e._search.match(_.search)||_.search===String(e.id))&&(_.areaTo===B[0]||_.areaFrom<=e._area&&e._area<=_.areaTo)&&(_.terrainAreaTo===L[0]||_.terrainAreaFrom<=e._terrain_area&&e._terrain_area<=_.terrainAreaTo)&&(_.priceTo===I[0]||_.priceFrom<=e._price&&e._price<=_.priceTo)}))}),[i,_]),ae=(0,s.useMemo)((function(){return ne.sort((function(e,t){return M[A]*(e[A]>t[A]?1:-1)}))}),[ne,A]);return s.createElement("div",null,s.createElement("fieldset",null,s.createElement("label",null,s.createElement("span",null,"Category"),s.createElement("select",{value:b.category,onChange:(0,s.useCallback)((function(e){var t=e.target;return y((function(e){return K(K({},e),{},{category:t.value})}))}),[])},g.category.map((function(e){return s.createElement("option",{key:e,value:e},e)})))),s.createElement("label",null,s.createElement("span",null,"Search"),s.createElement("input",{type:"search",value:b.search,onChange:(0,s.useCallback)((function(e){var t=e.target;return y((function(e){return K(K({},e),{},{search:t.value})}))}),[])})),s.createElement("label",null,s.createElement("span",null,"Show hidden"),s.createElement("input",{type:"checkbox",checked:b.showHide,onChange:(0,s.useCallback)((function(e){var t=e.target;return y((function(e){return K(K({},e),{},{showHide:t.checked})}))}),[])})),s.createElement("label",null,s.createElement("span",null,"Only likes"),s.createElement("input",{type:"checkbox",checked:b.onlyLike,onChange:(0,s.useCallback)((function(e){var t=e.target;return y((function(e){return K(K({},e),{},{onlyLike:t.checked})}))}),[])})),s.createElement("label",null,s.createElement("span",null,"Sort"),s.createElement("select",{value:A,onChange:U},Object.entries(M).map((function(e){var t=(0,l.Z)(e,1)[0];return s.createElement("option",{key:t,value:t},t)})))),s.createElement("div",null,s.createElement("label",null,s.createElement("span",null,"Location"),s.createElement("select",{value:b.location,onChange:(0,s.useCallback)((function(e){var t=e.target.value;return y((function(e){return K(K({},e),{},{location:t})}))}),[])},g.location.map((function(e){return s.createElement("option",{key:e,value:e},e)}))))),s.createElement("div",null,s.createElement("label",null,s.createElement("span",null,"Road"),s.createElement("select",{value:b.road,onChange:(0,s.useCallback)((function(e){var t=e.target.value;return y((function(e){return K(K({},e),{},{road:t})}))}),[])},g.road.map((function(e){return s.createElement("option",{key:e,value:e},e)}))))),s.createElement("div",null,s.createElement("label",null,s.createElement("span",null,"Building"),s.createElement("select",{value:b.building,onChange:(0,s.useCallback)((function(e){var t=e.target.value;return y((function(e){return K(K({},e),{},{building:t})}))}),[])},g.building.map((function(e){return s.createElement("option",{key:e,value:e},e)}))))),s.createElement("div",null,s.createElement("label",null,s.createElement("span",null,"Area From"),s.createElement("input",{type:"range",list:"area-list",min:B[0],max:B[B.length-1],value:b.areaFrom,onChange:(0,s.useCallback)((function(e){var t=e.target;return y((function(e){var r=e.areaTo,n=(0,a.Z)(e,Z),l=Number(t.value);return K(K({},n),{},{areaFrom:l,areaTo:r<l?l:r})}))}),[])}),s.createElement("datalist",{id:"area-list"},B.map((function(e){return s.createElement("option",{key:e,value:e})})))),s.createElement("label",null,s.createElement("span",null,"Area To"),s.createElement("input",{type:"range",list:"area-list",min:B[0],max:B[B.length-1],value:b.areaTo,onChange:(0,s.useCallback)((function(e){var t=e.target;return y((function(e){var r=e.areaFrom,n=(0,a.Z)(e,F),l=Number(t.value);return K(K({},n),{},{areaFrom:l>r?r:l,areaTo:l})}))}),[])}),s.createElement("span",null,"".concat((new Intl.NumberFormat).format(b.areaFrom)," - ").concat((new Intl.NumberFormat).format(b.areaTo)," m2")))),s.createElement("div",null,s.createElement("label",null,s.createElement("span",null,"Terrain Area From"),s.createElement("input",{type:"range",list:"terrain-area-list",min:L[0],max:L[L.length-1],value:b.terrainAreaFrom,onChange:(0,s.useCallback)((function(e){var t=e.target;return y((function(e){var r=e.terrainAreaTo,n=(0,a.Z)(e,N),l=Number(t.value);return K(K({},n),{},{terrainAreaFrom:l,terrainAreaTo:r<l?l:r})}))}),[])}),s.createElement("datalist",{id:"terrain-area-list"},L.map((function(e){return s.createElement("option",{key:e,value:e})})))),s.createElement("label",null,s.createElement("span",null,"Terrain Area To"),s.createElement("input",{type:"range",list:"terrain-area-list",min:L[0],max:L[L.length-1],value:b.terrainAreaTo,onChange:(0,s.useCallback)((function(e){var t=e.target;return y((function(e){var r=e.terrainAreaFrom,n=(0,a.Z)(e,S),l=Number(t.value);return K(K({},n),{},{terrainAreaFrom:l>r?r:l,terrainAreaTo:l})}))}),[])}),s.createElement("span",null,"".concat((new Intl.NumberFormat).format(b.terrainAreaFrom)," - ").concat((new Intl.NumberFormat).format(b.terrainAreaTo)," m2")))),s.createElement("div",null,s.createElement("label",null,s.createElement("span",null,"Price From"),s.createElement("input",{type:"range",list:"price-list",min:I[0],max:I[I.length-1],value:b.priceFrom,onChange:(0,s.useCallback)((function(e){var t=e.target;return y((function(e){var r=e.priceTo,n=(0,a.Z)(e,P),l=Number(t.value);return K(K({},n),{},{priceFrom:l,priceTo:r<l?l:r})}))}),[])}),s.createElement("datalist",{id:"price-list"},I.map((function(e){return s.createElement("option",{key:e,value:e})})))),s.createElement("label",null,s.createElement("span",null,"Price To"),s.createElement("input",{type:"range",list:"price-list",min:I[0],max:I[I.length-1],value:b.priceTo,onChange:(0,s.useCallback)((function(e){var t=e.target;return y((function(e){var r=e.priceFrom,n=(0,a.Z)(e,H),l=Number(t.value);return K(K({},n),{},{priceFrom:l>r?r:l,priceTo:l})}))}),[])}),s.createElement("span",null,"".concat((new Intl.NumberFormat).format(b.priceFrom)," - ").concat((new Intl.NumberFormat).format(b.priceTo)," PLN"))))),s.createElement("div",null,"Found ".concat(ne.length," products out of a total of ").concat(i.length)),s.createElement("ol",null,ae.slice(0,100).map((function(e){return s.createElement("li",{key:e.id,className:T()(x.Z.Row,te.includes(e.id)&&x.Z.Like,R.includes(e.id)&&x.Z.Hide)},!R.includes(e.id)&&s.createElement(E.r,{className:x.Z.Gallery,images:e.images}),s.createElement(q,(0,n.Z)({},e,{hide:R,setHide:V,like:te,setLike:re})),!R.includes(e.id)&&s.createElement(J,e))}))))}function X(e){e.canonical;var t=e.coordinates,r=t.latitude,n=t.longitude,a="//www.google.pl/maps?t=k&q=loc:".concat(r,"+").concat(n,"&hl=pl");return s.createElement(y.r,{href:a,rel:"",target:"map"},s.createElement(g.G,{icon:v.FGq}))}function W(e){var t=e.children,r=(0,a.Z)(e,A);return s.createElement("label",null,s.createElement("input",(0,n.Z)({type:"checkbox"},r)),s.createElement("span",null,t))}function q(e){var t=e.id,r=e.canonical,n=e.coordinates,a=e.price,l=e.title,o=e.hide,i=e.setHide,c=e.like,u=e.setLike,m=e._address,d=e._created;return s.createElement("div",{className:x.Z.Summary},s.createElement("div",null,s.createElement("div",{className:x.Z.Sidebar},s.createElement(W,{checked:c.includes(t),onChange:function(e){return fetch("api/properties/like.json?id=".concat(t)),u((function(r){return e.target.checked?r.concat(t):r.filter((function(e){return e!==t}))}))}},"Like"),s.createElement(W,{checked:o.includes(t),onChange:function(e){return fetch("api/properties/hide.json?id=".concat(t)),i((function(r){return e.target.checked?r.concat(t):r.filter((function(e){return e!==t}))}))}},"Hide")),s.createElement("div",null,(0,h.Z)(d,"yyyy-MM-dd HH:mm"))),s.createElement("div",{style:{clear:"right"}},s.createElement("h4",null,"".concat((new Intl.NumberFormat).format(a)," PLN")),s.createElement("h3",null,s.createElement(y.r,{href:r},l)," ",n&&s.createElement(X,{canonical:r,coordinates:n}))),m&&s.createElement("h6",null,m.join(" / ")))}function J(e){var t=e.description,r=e.parameters;return s.createElement("div",{className:x.Z.Details},t.map((function(e,t){return s.createElement("p",{key:t},e)})),s.createElement("ul",null,r.map((function(e,t){var r=e.label,n=e.value;return s.createElement("li",{key:t},r,": ",s.createElement("b",null,n))}))))}function Q(){return s.createElement("div",{className:x.Z.Section},s.createElement("h2",null,"Properties"),s.createElement(U,null))}},4388:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(9601),a=r.n(n),l=r(2609),o=r.n(l)()(a());o.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.zDhTSHDK36rhYKliKHPK img{max-height:100%;scroll-snap-align:start}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}",""]),o.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const i=o},6917:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(9601),a=r.n(n),l=r(2609),o=r.n(l)()(a());o.push([e.id,".KYBwyVHwYFPduDcS8tJA{color:purple}.bUNjBJTWIMSq_XWNswT2{clear:both;padding:.5em 0;border:2px solid transparent;margin:.5em}.bUNjBJTWIMSq_XWNswT2.TXzld0_Enrx67356XQvV{border-color:#8a2be2}.bUNjBJTWIMSq_XWNswT2.yknHg6Kx6g072wclMnRw{opacity:.5}.e3KhqV06cOMe70OduX67{float:left;width:200px;height:200px}.YzMcljUk8YpF_3sH71Qy h3{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h4{float:right;margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy h6{margin-block-start:.5em;margin-block-end:.5em}.YzMcljUk8YpF_3sH71Qy .OZ2Fnz11BkBbwH0I6IEx{float:right}.GzN8lDh8Bf0lo_aG_yN4{border-bottom:1px solid #d3d3d3;padding-bottom:.5em}.GzN8lDh8Bf0lo_aG_yN4 p{margin:0}",""]),o.locals={Section:"KYBwyVHwYFPduDcS8tJA",Row:"bUNjBJTWIMSq_XWNswT2",Like:"TXzld0_Enrx67356XQvV",Hide:"yknHg6Kx6g072wclMnRw",Gallery:"e3KhqV06cOMe70OduX67",Summary:"YzMcljUk8YpF_3sH71Qy",Sidebar:"OZ2Fnz11BkBbwH0I6IEx",Details:"GzN8lDh8Bf0lo_aG_yN4"};const i=o},6435:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(6062),a=r.n(n),l=r(4036),o=r.n(l),i=r(6793),c=r.n(i),u=r(7892),s=r.n(u),m=r(1173),d=r.n(m),f=r(2464),p=r.n(f),g=r(4388),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d();var h=a()(g.default,v);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,E=b?g:g.default.locals;e.hot.accept(4388,(t=>{g=r(4388),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(E,b?g:g.default.locals,b)?(E=b?g:g.default.locals,h(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=g.default&&g.default.locals?g.default.locals:void 0},8805:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(6062),a=r.n(n),l=r(4036),o=r.n(l),i=r(6793),c=r.n(i),u=r(7892),s=r.n(u),m=r(1173),d=r.n(m),f=r(2464),p=r.n(f),g=r(6917),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d();var h=a()(g.default,v);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,E=b?g:g.default.locals;e.hot.accept(6917,(t=>{g=r(6917),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(E,b?g:g.default.locals,b)?(E=b?g:g.default.locals,h(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=g.default&&g.default.locals?g.default.locals:void 0}}]);