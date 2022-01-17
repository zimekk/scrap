"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[893],{779:(e,t,n)=>{n.d(t,{r:()=>x});var l=n(203),a=n(1283),r=n(2451),c=n(7946),u=n(7162),o=n.n(u),i=n(2784),s=n(357),d=n(5096),m=function(e){var t=e.height,n=void 0===t?80:t,l=e.width,a=void 0===l?80:l,r=e.color,c=void 0===r?"green":r,u=e.radius,o=void 0===u?1:u,s=e.label,d=void 0===s?"audio-loading":s;return i.createElement("svg",{width:a,height:n,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":d},i.createElement("defs",null,i.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},i.createElement("stop",{stopColor:c,stopOpacity:"0",offset:"0%"}),i.createElement("stop",{stopColor:c,stopOpacity:".631",offset:"63.146%"}),i.createElement("stop",{stopColor:c,offset:"100%"}))),i.createElement("g",{fill:"none",fillRule:"evenodd"},i.createElement("g",{transform:"translate(1 1)"},i.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:c,strokeWidth:"2"},i.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),i.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:o},i.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},f=n(2779),p=n.n(f),v=n(6435),E=["src"],h=(0,s.k)(function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=new Image;Object.assign(n,{onload:function(){return e(t)},onerror:function(){return e((t=d.VmB,l=(n=(0,c.Z)(t.icon,5))[0],a=n[1],r=n[4],'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(l," ").concat(a,'"><path fill="currentColor" d="').concat(r,'"></path></svg>')));var t,n,l,a,r},src:t})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function g(e){var t=e.src,n=(0,a.Z)(e,E);return i.createElement("img",(0,l.Z)({src:h.read(t)},n,{referrerPolicy:"no-referrer"}))}function b(){return i.createElement("div",{className:v.Z.Loader},i.createElement(m,null))}function y(e){var t=(0,l.Z)({},e);return i.createElement("div",{className:v.Z.ImgWrapper},i.createElement(i.Suspense,{fallback:i.createElement(b,null)},i.createElement(g,t)))}function x(e){var t=e.className,n=e.images,l=(0,i.useState)(!1),a=(0,c.Z)(l,2),r=a[0],u=a[1],o=(0,i.useState)(!1),s=(0,c.Z)(o,2),d=s[0],m=s[1],f=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=function(e){var t=e.target;t.scrollLeft===t.scrollWidth-t.offsetWidth&&m(!0)};if(f.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){(0,c.Z)(e,1)[0].isIntersecting&&u(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(f.current),f.current.addEventListener("scroll",e),function(){f.current&&(t.unobserve(f.current),f.current.removeEventListener("scroll",e))}}}),[f]),n.length?i.createElement("div",{ref:f,className:p()(t,v.Z.Gallery)},r&&n.slice(0,d?n.length:3).map((function(e,t){return i.createElement(y,{key:t,src:e,alt:"Image #".concat(t+1)})}))):null}},7945:(e,t,n)=>{n.d(t,{r:()=>u});var l=n(203),a=n(1283),r=n(2784),c=["href"];function u(e){var t=e.href,n=void 0===t?"#":t,u=(0,a.Z)(e,c),o="#"===n[0];return r.createElement("a",(0,l.Z)({href:n,target:o?void 0:"_blank",rel:o?void 0:"noopener noreferrer"},u))}},5018:(e,t,n)=>{n.d(t,{np:()=>f,D:()=>p,CO:()=>v});var l=n(7946),a=n(2784),r=n(809),c=n(7234),u=n(5804),o=n(9530),i=n(5096),s=n(2779),d=n.n(s),m=n(5037);function f(e){var t=e.map,n=(0,a.useState)((function(){return{position:t.getCenter(),zoom:t.getZoom()}})),r=(0,l.Z)(n,1)[0],c=(0,a.useState)(t.getCenter()),u=(0,l.Z)(c,2),o=u[0],i=u[1],s=(0,a.useCallback)((function(){t.setView(r.position,r.zoom)}),[t]),f=(0,a.useCallback)((function(){i(t.getCenter())}),[t]),p=(0,a.useCallback)((function(e){var t=e.latlng,n=e.radius;console.log({latlng:t,radius:n})}),[]);return(0,a.useEffect)((function(){return t.on("locationfound",p).on("move",f),function(){t.off("locationfound",p).off("move",f)}}),[t,f]),a.createElement("div",{className:d()(m.Z.DisplayPosition)},"latitude: ",o.lat.toFixed(4),", longitude: ",o.lng.toFixed(4)," ",a.createElement("button",{onClick:s},"Reset"),a.createElement("button",{onClick:function(){return t.locate({setView:!0})}},"Locate"))}function p(e){var t=e.position,n=e.children,l=e.setPosition,u=(0,a.useRef)(null),o=(0,a.useMemo)((function(){return{dragend:function(){var e=u.current;null!=e&&l(e.getLatLng())}}}),[]);return a.createElement(r.J,{draggable:!0,eventHandlers:o,position:t,ref:u},a.createElement(c.u,null,n))}function v(){var e=(0,u.Sx)(),t=(0,a.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return a.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},a.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},a.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},a.createElement(o.G,{icon:i.KS0}))))}},6893:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var l=n(2451),a=n(965),r=n(7946),c=n(7162),u=n.n(c),o=n(2784),i=n(357),s=n(3081),d=n(203),m=n(369),f=n(5062),p=n.n(f),v=n(493),E=n(8969),h=n(9982),g=n(6127),b=n(779),y=n(7945),x=n(5018),C=n(2779),k=n.n(C),Z=n(3897),w=(0,o.createContext)({});function _(e){var t=e.children,n=e.initialIndex,l=void 0===n?0:n,a=(0,o.useState)(l),c=(0,r.Z)(a,2),u=c[0],i=c[1];return o.createElement(w.Provider,{value:{index:u,setIndex:i}},o.createElement("div",{className:Z.Z.Tabs},o.Children.toArray(t).reduce((function(e,t,n){return{children:e.children.concat(t.type===z||e.sequence===u?o.cloneElement(t):[]),sequence:t.type===S?e.sequence+1:e.sequence}}),{children:[],sequence:0}).children))}function S(e){var t=e.children;return o.createElement("div",{className:Z.Z.TabPanel},t)}function z(e){var t=e.children,n=(0,o.useContext)(w),l=n.index,a=n.setIndex;return o.createElement("div",{className:Z.Z.TabList},o.Children.toArray(t).map((function(e,t){return o.cloneElement(e,{selected:l===t,onSelect:function(){return a(t)}})})))}function T(e){var t=e.children,n=e.selected,l=e.onSelect;return o.createElement("div",{className:k()(Z.Z.Tab,n&&Z.Z.selected),onClick:l},t)}var P={1:{1:"mieszkanie na sprzedaż",2:"mieszkanie do wynajęcia"},2:{1:"dom na sprzedaż"},4:{1:"działka na sprzedaż"}},O=n(3839);function D(e){var t=e.description_short,n=e.description,l=void 0===n?t:n,a=e.our_title,r=e.title,c=e.images,u=e.id,i=e.name,s=e.center,d=e.position;return o.createElement("section",null,o.createElement("header",null,o.createElement(y.r,{href:I("#scrap/${id}",{id:u,name:i})},r||a)," ","(","".concat(s.distanceTo(d).toFixed(0)/1e3," km"),")"),o.createElement(b.r,{className:O.Z.Gallery,images:c}),o.createElement("p",{dangerouslySetInnerHTML:{__html:l}}))}function N(e){var t=e.kind,n=e.type,l=e.location_user,a=e.offerowner_name,r=e.f,c=e.format,u=e.format_specific,i=e.created,s=e.changed,d=e.id;return o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("th",null,"Format:"),o.createElement("td",null,c)),o.createElement("tr",null,o.createElement("th",null,"Typ nieruchomości:"),o.createElement("td",null,P[t][n])),o.createElement("tr",null,o.createElement("th",null,"Dodano:"),o.createElement("td",null,i)),o.createElement("tr",null,o.createElement("th",null,"Ostatnia aktualizacja:"),o.createElement("td",null,s)),o.createElement("tr",null,o.createElement("th",null,"Powierzchnia:"),o.createElement("td",null,r.area_m2," m² (",r.area_m2_4," ",r.area_m2_4t,")")),o.createElement("tr",null,o.createElement("th",null,"Cena:"),o.createElement("td",null,r.p_pln," zł")),o.createElement("tr",null,o.createElement("th",null,"Cena za m²:"),o.createElement("td",null,r.pp_m2_pln_wz," zł")),o.createElement("tr",null,o.createElement("th",null,"Cena za ar:"),o.createElement("td",null,r.pp_m2_pln_4," zł")),o.createElement("tr",null,o.createElement("th",null,"Lokalizacja:"),o.createElement("td",null,l)),u&&o.createElement("tr",null,o.createElement("th",null,"Dojazd:"),o.createElement("td",null,u.id_dojazd)),u&&o.createElement("tr",null,o.createElement("th",null,"Agent prowadzący:"),o.createElement("td",null,u.kontakt_osoba)),u&&o.createElement("tr",null,o.createElement("th",null,"Rodzaj działki:"),o.createElement("td",null,u.id_rodzaj_dzialki)),o.createElement("tr",null,o.createElement("th",null,"Pośrednik:"),o.createElement("td",null,a)),o.createElement("tr",null,o.createElement("th",null,"Nr ogłoszenia:"),o.createElement("td",null,d))))}var I=function(e,t){return Function.apply(void 0,(0,m.Z)(Object.keys(t)).concat(["return `".concat(e,"`")])).apply(void 0,(0,m.Z)(Object.values(t)))};function M(e){var t=e.bounds,l=e.center,a=e.setCenter,c=e.list;(0,o.useEffect)((function(){delete p().Icon.Default.prototype._getIconUrl,p().Icon.Default.mergeOptions({iconRetinaUrl:n(1963).Z,iconUrl:n(379).Z,shadowUrl:n(6179).Z})}),[]);var u=(0,o.useState)(null),i=(0,r.Z)(u,2),s=i[0],m=i[1],f=(0,o.useMemo)((function(){return o.createElement(v.h,{bounds:t,whenCreated:m,zoom:13,className:k()(O.Z.Map)},o.createElement(E.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.createElement(x.D,{position:l,setPosition:a},"".concat(l.lat,",").concat(l.lng)),c.map((function(e){var t=e.i,n=e.id,a=e.position,r=e.name,c=e.item;return o.createElement(h.c,{key:t,center:a,pathOptions:{color:"purple"}},o.createElement(g.G,{minWidth:90},o.createElement(_,null,o.createElement(z,null,o.createElement(T,null,"Summary"),o.createElement(T,null,"Details")),o.createElement(S,null,o.createElement(D,(0,d.Z)({id:n,name:r,center:l,position:a},c))),o.createElement(S,null,o.createElement(N,(0,d.Z)({id:n},c))))))})),o.createElement(x.CO,null))}),[c,l]);return o.createElement("div",{className:k()(O.Z.Layout)},s?o.createElement(x.np,{map:s}):null,f)}var G=n(4772),K=n(1885),A=n(1742),j=function(e,t){return[e,t].join(":")},q=Object.entries(P).reduce((function(e,t){var n=(0,r.Z)(t,2),l=n[0],c=n[1];return Object.entries(c).reduce((function(e,t){var n=(0,r.Z)(t,2),c=n[0],u=n[1];return Object.assign(e,(0,a.Z)({},j(l,c),u))}),e)}),{}),F=[1,3,5,10,15,20,25,30,40,50,75,100],R=[0,400,600,800,1e3,1200,1400,1600,1800,2e3,5e3],W=[0,100,200,400,800,1e3,1200,1400,1600,1800,2e3,5e3,1e4],Y=[1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,1e6,12e5,15e5,2e6,5e6],B=(0,i.k)(function(){var e=(0,l.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function L(e){var t=e.version,n=void 0===t?"v1":t,l=B.read(n).results,a=(0,K.Z)(l.map((function(e){var t=e.latitude,n=e.longitude,l=e.our_url;return"".concat(t,",").concat(n,"|").concat(l)}))),c=(0,o.useState)(""),u=(0,r.Z)(c,2),i=u[0],d=u[1],m=(0,G.Z)(i),f=(0,r.Z)(m,1)[0],v=(0,o.useCallback)((function(e){var t=e.target;return d(t.value)}),[]),E=(0,o.useState)(15),h=(0,r.Z)(E,2),g=h[0],x=h[1],C=(0,o.useCallback)((function(e){var t=e.target;return x(Number(t.value))}),[]),k=(0,o.useState)((function(){return Object.keys(q)[3]})),Z=(0,r.Z)(k,2),w=Z[0],_=Z[1],S=(0,o.useCallback)((function(e){var t=e.target;return _(t.value)}),[]),z=(0,o.useState)((function(){return(0,s.Z)(Date.now()-2592e6,"yyyy-MM-dd")})),T=(0,r.Z)(z,2),P=T[0],O=T[1],D=(0,o.useState)((function(){return(0,s.Z)(Date.now(),"yyyy-MM-dd")})),N=(0,r.Z)(D,2),I=N[0],L=N[1],H=(0,o.useCallback)((function(e){var t=e.target;return L((function(e){var n=t.value;return O(n),e<n?n:e}))}),[]),U=(0,o.useCallback)((function(e){var t=e.target;return O((function(e){var n=t.value;return L(n),n>e?e:n}))}),[]),V=(0,o.useState)(400),Q=(0,r.Z)(V,2),X=Q[0],J=Q[1],$=(0,o.useState)(2e3),ee=(0,r.Z)($,2),te=ee[0],ne=ee[1],le=(0,o.useCallback)((function(e){var t=e.target;return ne((function(e){var n=Number(t.value);return J(n),e<n?n:e}))}),[]),ae=(0,o.useCallback)((function(e){var t=e.target;return J((function(e){var n=Number(t.value);return ne(n),n>e?e:n}))}),[]),re=(0,o.useState)(100),ce=(0,r.Z)(re,2),ue=ce[0],oe=ce[1],ie=(0,o.useState)(2e3),se=(0,r.Z)(ie,2),de=se[0],me=se[1],fe=(0,o.useCallback)((function(e){var t=e.target;return me((function(e){var n=Number(t.value);return oe(n),e<n?n:e}))}),[]),pe=(0,o.useCallback)((function(e){var t=e.target;return oe((function(e){var n=Number(t.value);return me(n),n>e?e:n}))}),[]),ve=(0,o.useState)(1e6),Ee=(0,r.Z)(ve,2),he=Ee[0],ge=Ee[1],be=(0,o.useCallback)((function(e){var t=e.target;return ge(Number(t.value))}),[]),ye=(0,o.useMemo)((function(){return l.filter((function(e){var t=e.description_short,n=e.area_m2,l=e.price,a=e.price_per_m2_pln,r=e.created,c=e.kind,u=e.type;return t.toLowerCase().match(f)&&w===j(c,u)&&"".concat(P," 00:00:00")<=r&&r<="".concat(I," 23:59:59")&&X<=n&&n<=te&&ue<=a&&a<=de&&l<=he})).map((function(e,t){return{i:t,id:e.id,position:{lat:e.latitude,lng:e.longitude},name:e.our_url,item:e}}))}),[l,f,w,P,I,X,te,ue,de,he]),xe=function(e){return(0,o.useMemo)((function(){return p().featureGroup(e.map((function(e){var t=e.position,n=t.lat,l=t.lng;return p().marker([n,l])}))).getBounds()}),[])}(ye.length?ye:[{position:{lat:52.232855,lng:20.921111}}]),Ce=(0,o.useState)((function(){return xe.getCenter()})),ke=(0,r.Z)(Ce,2),Ze=ke[0],we=ke[1],_e=(0,o.useMemo)((function(){return ye.filter((function(e){var t=e.position;return Ze.distanceTo(t)<1e3*g}))}),[ye,Ze,g]);return console.log({nearby:_e}),o.createElement("div",null,o.createElement(M,{bounds:xe,center:Ze,setCenter:we,list:_e}),o.createElement("fieldset",null,o.createElement("div",null,o.createElement("label",null,o.createElement("span",null,"Search"),o.createElement("input",{type:"search",value:i,onChange:v})),o.createElement("label",null,o.createElement("span",null,"Radius"),o.createElement("input",{type:"range",list:"range-list",min:F[0],max:F[F.length-1],value:g,onChange:C}),o.createElement("datalist",{id:"range-list"},F.map((function(e){return o.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?"".concat(e," km"):void 0})}))),o.createElement("span",null,"max ".concat(g," km")))),o.createElement("div",null,o.createElement("label",null,o.createElement("span",null,"Type"),o.createElement("select",{value:w,onChange:S},Object.entries(q).map((function(e){var t=(0,r.Z)(e,2),n=t[0],l=t[1];return o.createElement("option",{key:n,value:n},l)}))))),o.createElement("div",null,o.createElement("label",null,o.createElement("span",null,"Date From"),o.createElement("input",{type:"date",value:P,onChange:H})),o.createElement("label",null,o.createElement("span",null,"Date To"),o.createElement("input",{type:"date",value:I,onChange:U}))),o.createElement("div",null,o.createElement("label",null,o.createElement("span",null,"Area From"),o.createElement("input",{type:"range",list:"area-list",min:R[0],max:R[R.length-1],value:X,onChange:le}),o.createElement("datalist",{id:"area-list"},R.map((function(e){return o.createElement("option",{key:e,value:e,label:[0,1e3,2e3,5e3].includes(e)?"".concat(e," m2"):void 0})})))),o.createElement("label",null,o.createElement("span",null,"Area To"),o.createElement("input",{type:"range",list:"area-list",min:R[0],max:R[R.length-1],value:te,onChange:ae}),o.createElement("span",null,"".concat(X,"-").concat(te," m2")))),o.createElement("div",null,o.createElement("label",null,o.createElement("span",null,"Price From"),o.createElement("input",{type:"range",list:"price-list",min:W[0],max:W[W.length-1],value:ue,onChange:fe}),o.createElement("datalist",{id:"price-list"},W.map((function(e){return o.createElement("option",{key:e,value:e,label:[0,1e3,2e3,5e3].includes(e)?"".concat(e," pln/m2"):void 0})})))),o.createElement("label",null,o.createElement("span",null,"Price To"),o.createElement("input",{type:"range",list:"price-list",min:W[0],max:W[W.length-1],value:de,onChange:pe}),o.createElement("span",null,"".concat(ue,"-").concat(de," pln/m2")))),o.createElement("div",null,o.createElement("label",null,o.createElement("span",null,"Price"),o.createElement("input",{type:"range",list:"total-list",min:Y[0],max:Y[Y.length-1],value:he,onChange:be,style:{width:350}}),o.createElement("datalist",{id:"total-list"},Y.map((function(e){return o.createElement("option",{key:e,value:e,label:[1e5,1e6,5e6].includes(e)?"".concat(e," pln"):void 0})}))),o.createElement("span",null,"max ".concat(he," pln"))))),o.createElement("div",null,"Found ".concat(_e.length," locations (out of ").concat(ye.length,") out of a total of ").concat(l.length)),o.createElement("ol",null,ye.map((function(e){return e.item})).map((function(e,t){var n=e.images,l=e.latitude,r=e.longitude,c=e.kind,u=e.type,i=e.format,s=e.area_m2,d=e.price,m=e.price_per_m2_pln,f=e.description_short,p=e.our_url,v=e.created,E=e.changed;return o.createElement("li",{key:t},o.createElement("ul",null,o.createElement("li",null,o.createElement(b.r,{className:A.Z.Gallery,images:n}),o.createElement(y.r,{href:a},"".concat(l,",").concat(r,"|").concat(p))),o.createElement("li",null,c),o.createElement("li",null,u),o.createElement("li",null,i),o.createElement("li",null,s),o.createElement("li",null,d),o.createElement("li",null,m),o.createElement("li",null,f),o.createElement("li",null,v),o.createElement("li",null,E)))}))))}function H(){return o.createElement("div",{className:A.Z.Section},o.createElement("h2",null,"Scrap"),o.createElement(L,null))}},1885:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(2784),a=n(3654);function r(e){var t=(0,l.useMemo)((function(){return e.join("\n")}),[e]);return(0,l.useMemo)((function(){return"https://zimekk.github.io/place/#".concat(function(e){return window.btoa(String.fromCharCode.apply(null,a.ZP.deflate(e)))}(unescape(encodeURIComponent(t))))}),[t])}},4772:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7946),a=n(2784);function r(e){var t=(0,a.useState)(e),n=(0,l.Z)(t,2),r=n[0],c=n[1],u=(0,a.useRef)();return(0,a.useEffect)((function(){return clearTimeout(u.current),u.current=setTimeout((function(){return c(e.toLowerCase())}),400),function(){clearTimeout(u.current)}}),[e]),[r]}},4388:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(9601),a=n.n(l),r=n(2609),c=n.n(r)()(a());c.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.zDhTSHDK36rhYKliKHPK img{max-height:100%;scroll-snap-align:start}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}",""]),c.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const u=c},8423:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(9601),a=n.n(l),r=n(2609),c=n.n(r)()(a());c.push([e.id,"",""]),c.locals={};const u=c},1402:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(9601),a=n.n(l),r=n(2609),c=n.n(r)()(a());c.push([e.id,".P3Q9GkPwIqNuy8dlqpE7{display:flex;flex-direction:column}.cvrF_PSyooSdvEiMfe27{display:flex;flex-direction:row;background:gray}.GvqsYcBpAV0qgF9U37VA{flex:1;color:#d3d3d3;padding:1em}.GvqsYcBpAV0qgF9U37VA.vRObf1WxeMfIdnBjn4VW{color:#fff}",""]),c.locals={Tabs:"P3Q9GkPwIqNuy8dlqpE7",TabList:"cvrF_PSyooSdvEiMfe27",Tab:"GvqsYcBpAV0qgF9U37VA",selected:"vRObf1WxeMfIdnBjn4VW"};const u=c},1245:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(9601),a=n.n(l),r=n(2609),c=n.n(r),u=n(9138),o=c()(a());o.i(u.Z),o.push([e.id,".bftehQR4Czxzu4llx5hI{display:flex;flex-direction:row;scroll-snap-type:x mandatory}.bftehQR4Czxzu4llx5hI img{max-width:100%;scroll-snap-align:center}.wED2yBxKbDWWn0YmR1Pt{height:75vh;border:2px solid red}.wED2yBxKbDWWn0YmR1Pt header{font-weight:bold}",""]),o.locals={Gallery:"bftehQR4Czxzu4llx5hI",Map:"wED2yBxKbDWWn0YmR1Pt"};const i=o},5011:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(9601),a=n.n(l),r=n(2609),c=n.n(r)()(a());c.push([e.id,".Cr_uxdeFGMbnY_b8m7Ua{color:orange}.ruFpYGCvVWkqcHBOpYBO{float:left;width:200px;height:150px;display:flex;flex-direction:row;scroll-snap-type:x mandatory}.ruFpYGCvVWkqcHBOpYBO img{max-width:100%;scroll-snap-align:center}",""]),c.locals={Section:"Cr_uxdeFGMbnY_b8m7Ua",Gallery:"ruFpYGCvVWkqcHBOpYBO"};const u=c},6435:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(6062),a=n.n(l),r=n(4036),c=n.n(r),u=n(6793),o=n.n(u),i=n(7892),s=n.n(i),d=n(1173),m=n.n(d),f=n(2464),p=n.n(f),v=n(4388),E={};E.styleTagTransform=p(),E.setAttributes=s(),E.insert=o().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=m();var h=a()(v.default,E);if(!v.default.locals||e.hot.invalidate){var g=!v.default.locals,b=g?v:v.default.locals;e.hot.accept(4388,(t=>{v=n(4388),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!n||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(n&&"default"===l||e[l]))return!1;return!0}(b,g?v:v.default.locals,g)?(b=g?v:v.default.locals,h(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=v.default&&v.default.locals?v.default.locals:void 0},5037:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(6062),a=n.n(l),r=n(4036),c=n.n(r),u=n(6793),o=n.n(u),i=n(7892),s=n.n(i),d=n(1173),m=n.n(d),f=n(2464),p=n.n(f),v=n(8423),E={};E.styleTagTransform=p(),E.setAttributes=s(),E.insert=o().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=m();var h=a()(v.default,E);if(!v.default.locals||e.hot.invalidate){var g=!v.default.locals,b=g?v:v.default.locals;e.hot.accept(8423,(t=>{v=n(8423),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!n||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(n&&"default"===l||e[l]))return!1;return!0}(b,g?v:v.default.locals,g)?(b=g?v:v.default.locals,h(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=v.default&&v.default.locals?v.default.locals:void 0},3897:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(6062),a=n.n(l),r=n(4036),c=n.n(r),u=n(6793),o=n.n(u),i=n(7892),s=n.n(i),d=n(1173),m=n.n(d),f=n(2464),p=n.n(f),v=n(1402),E={};E.styleTagTransform=p(),E.setAttributes=s(),E.insert=o().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=m();var h=a()(v.default,E);if(!v.default.locals||e.hot.invalidate){var g=!v.default.locals,b=g?v:v.default.locals;e.hot.accept(1402,(t=>{v=n(1402),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!n||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(n&&"default"===l||e[l]))return!1;return!0}(b,g?v:v.default.locals,g)?(b=g?v:v.default.locals,h(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=v.default&&v.default.locals?v.default.locals:void 0},3839:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(6062),a=n.n(l),r=n(4036),c=n.n(r),u=n(6793),o=n.n(u),i=n(7892),s=n.n(i),d=n(1173),m=n.n(d),f=n(2464),p=n.n(f),v=n(1245),E={};E.styleTagTransform=p(),E.setAttributes=s(),E.insert=o().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=m();var h=a()(v.default,E);if(!v.default.locals||e.hot.invalidate){var g=!v.default.locals,b=g?v:v.default.locals;e.hot.accept(1245,(t=>{v=n(1245),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!n||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(n&&"default"===l||e[l]))return!1;return!0}(b,g?v:v.default.locals,g)?(b=g?v:v.default.locals,h(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=v.default&&v.default.locals?v.default.locals:void 0},1742:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(6062),a=n.n(l),r=n(4036),c=n.n(r),u=n(6793),o=n.n(u),i=n(7892),s=n.n(i),d=n(1173),m=n.n(d),f=n(2464),p=n.n(f),v=n(5011),E={};E.styleTagTransform=p(),E.setAttributes=s(),E.insert=o().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=m();var h=a()(v.default,E);if(!v.default.locals||e.hot.invalidate){var g=!v.default.locals,b=g?v:v.default.locals;e.hot.accept(5011,(t=>{v=n(5011),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!n||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(n&&"default"===l||e[l]))return!1;return!0}(b,g?v:v.default.locals,g)?(b=g?v:v.default.locals,h(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=v.default&&v.default.locals?v.default.locals:void 0}}]);