"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[691],{8691:(e,t,l)=>{l.r(t),l.d(t,{default:()=>S});var n=l(2784),a=l(357),o=l(5062),r=l.n(o),i=l(9386),u=l(7122),c=l(1128),s=l(3964),d=l(2048),f=l(9530),m=l(5096),p=l(2779),h=l.n(p),v=l(7243);function E({position:e,children:t,onOpen:l,setPosition:a}){const o=(0,n.useRef)(null),r=(0,n.useMemo)((()=>({dragend(){const e=o.current;null!=e&&a(e.getLatLng())}})),[]);return n.createElement(i.J,{draggable:!0,eventHandlers:r,position:e,ref:o},n.createElement(u.G,{minWidth:90,onOpen:l},n.createElement("span",null,t)))}function g(){const e=(0,c.Sx)(),t=(0,n.useCallback)((t=>{t.preventDefault(),e.locate({setView:!0})}),[e]);return n.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},n.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},n.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},n.createElement(f.G,{icon:m.KS0}))))}function b({map:e}){const[t]=(0,n.useState)((()=>({position:e.getCenter(),zoom:e.getZoom()}))),[l,a]=(0,n.useState)(e.getCenter()),o=(0,n.useCallback)((()=>{e.setView(t.position,t.zoom)}),[e]),r=(0,n.useCallback)((()=>{a(e.getCenter())}),[e]),i=(0,n.useCallback)((e=>{const{latlng:t,radius:l}=e;console.log({latlng:t,radius:l})}),[]);return(0,n.useEffect)((()=>(e.on("locationfound",i).on("move",r),()=>{e.off("locationfound",i).off("move",r)})),[e,r]),n.createElement("div",{className:h()(v.Z.DisplayPosition)},"latitude: ",l.lat.toFixed(4),", longitude: ",l.lng.toFixed(4)," ",n.createElement("button",{onClick:o},"Reset"),n.createElement("button",{onClick:()=>e.locate({setView:!0})},"Locate"))}function C({list:e}){(0,n.useEffect)((()=>{delete r().Icon.Default.prototype._getIconUrl,r().Icon.Default.mergeOptions({iconRetinaUrl:l(1963).Z,iconUrl:l(379).Z,shadowUrl:l(6179).Z})}),[]);const t=(0,n.useMemo)((()=>r().featureGroup(e.map((({position:{lat:e,lng:t}})=>r().marker([e,t])))).getBounds()),[]),[a,o]=(0,n.useState)(null),i=(0,n.useMemo)((()=>n.createElement(s.h,{bounds:t,whenCreated:o,zoom:13,className:h()(v.Z.Map)},n.createElement(d.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.map((({...e},t)=>({...e,i:t}))).map((({i:e,position:t,name:l,setPosition:a})=>n.createElement(E,{key:e,position:t,setPosition:a},l))),n.createElement(g,null))),[e]);return n.createElement("div",{className:h()(v.Z.Layout)},a?n.createElement(b,{map:a}):null,i)}var _=l(3654);var k=l(3400);const y=(0,a.k)((async e=>{const t=await fetch(`api/data.json?${e}`);return await t.json()}));function w({version:e="v1"}){const{total_found:t,results:l}=y.read(e),a=function(e){const t=(0,n.useMemo)((()=>e.join("\n")),[e]);return(0,n.useMemo)((()=>`https://zimekk.github.io/place/#${(e=>window.btoa(String.fromCharCode.apply(null,_.ZP.deflate(e))))(unescape(encodeURIComponent(t)))}`),[t])}(l.map((({latitude:e,longitude:t,our_url:l})=>`${e},${t}|${l}`))),[o,r]=(0,n.useState)(""),[i]=function(e){const[t,l]=(0,n.useState)(e),a=(0,n.useRef)();return(0,n.useEffect)((()=>(clearTimeout(a.current),a.current=setTimeout((()=>l(e.toLowerCase())),400),()=>{clearTimeout(a.current)})),[e]),[t]}(o),u=(0,n.useCallback)((({target:e})=>r(e.value)),[]);return n.createElement("div",null,"[",t,"]",n.createElement("fieldset",null,n.createElement("input",{type:"search",value:o,onChange:u})),n.createElement(C,{list:l.filter((({description_short:e})=>e.toLowerCase().match(i))).map((({latitude:e,longitude:t,our_url:l})=>({position:{lat:e,lng:t},name:l})))}),n.createElement("ol",null,l.filter((({description_short:e})=>e.toLowerCase().match(i))).map((({latitude:e,longitude:t,kind:l,type:o,format:r,area_m2:i,price:u,price_per_m2_pln:c,description_short:s,our_url:d,created:f,changed:m},p)=>n.createElement("li",{key:p},n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:a},`${e},${t}|${d}`)),n.createElement("li",null,l),n.createElement("li",null,o),n.createElement("li",null,r),n.createElement("li",null,i),n.createElement("li",null,u),n.createElement("li",null,c),n.createElement("li",null,s),n.createElement("li",null,f),n.createElement("li",null,m)))))))}function S(){return n.createElement("div",{className:k.Z.Scrap},n.createElement("h2",null,"Scrap"),n.createElement(w,null))}},1064:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var n=l(9601),a=l.n(n),o=l(2609),r=l.n(o),i=l(9138),u=r()(a());u.i(i.Z),u.push([e.id,".RVfG0Rv_8vapHyo_a_Wz{height:50vh;border:2px solid red}",""]),u.locals={Map:"RVfG0Rv_8vapHyo_a_Wz"};const c=u},6458:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var n=l(9601),a=l.n(n),o=l(2609),r=l.n(o)()(a());r.push([e.id,".HxwS5mg98o3C3ovYIOqH{color:orange}",""]),r.locals={Scrap:"HxwS5mg98o3C3ovYIOqH"};const i=r},7243:(e,t,l)=>{l.d(t,{Z:()=>C});var n=l(6062),a=l.n(n),o=l(4036),r=l.n(o),i=l(6793),u=l.n(i),c=l(7892),s=l.n(c),d=l(1173),f=l.n(d),m=l(2464),p=l.n(m),h=l(1064),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=u().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=f();var E=a()(h.default,v);if(!h.default.locals||e.hot.invalidate){var g=!h.default.locals,b=g?h:h.default.locals;e.hot.accept(1064,(t=>{h=l(1064),function(e,t,l){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!l||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(l&&"default"===n||e[n]))return!1;return!0}(b,g?h:h.default.locals,g)?(b=g?h:h.default.locals,E(h.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const C=h.default&&h.default.locals?h.default.locals:void 0},3400:(e,t,l)=>{l.d(t,{Z:()=>C});var n=l(6062),a=l.n(n),o=l(4036),r=l.n(o),i=l(6793),u=l.n(i),c=l(7892),s=l.n(c),d=l(1173),f=l.n(d),m=l(2464),p=l.n(m),h=l(6458),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=u().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=f();var E=a()(h.default,v);if(!h.default.locals||e.hot.invalidate){var g=!h.default.locals,b=g?h:h.default.locals;e.hot.accept(6458,(t=>{h=l(6458),function(e,t,l){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!l||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(l&&"default"===n||e[n]))return!1;return!0}(b,g?h:h.default.locals,g)?(b=g?h:h.default.locals,E(h.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const C=h.default&&h.default.locals?h.default.locals:void 0}}]);