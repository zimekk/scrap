"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[552],{6552:(e,t,l)=>{l.r(t),l.d(t,{default:()=>O});var n=l(2784),a=l(357),r=l(5062),o=l.n(r),i=l(9386),s=l(5449),c=l(1128),u=l(3964),m=l(2048),d=l(5176),p=l(7122),f=l(9530),g=l(5096),h=l(2779),E=l.n(h),b=l(1231);function v({position:e,children:t,setPosition:l}){const a=(0,n.useRef)(null),r=(0,n.useMemo)((()=>({dragend(){const e=a.current;null!=e&&l(e.getLatLng())}})),[]);return n.createElement(i.J,{draggable:!0,eventHandlers:r,position:e,ref:a},n.createElement(s.u,null,t))}function y(){const e=(0,c.Sx)(),t=(0,n.useCallback)((t=>{t.preventDefault(),e.locate({setView:!0})}),[e]);return n.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},n.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},n.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},n.createElement(f.G,{icon:g.KS0}))))}function C({bounds:e,center:t,setCenter:a,list:r}){(0,n.useEffect)((()=>{delete o().Icon.Default.prototype._getIconUrl,o().Icon.Default.mergeOptions({iconRetinaUrl:l(1963).Z,iconUrl:l(379).Z,shadowUrl:l(6179).Z})}),[]);const[i,s]=(0,n.useState)(null),c=(0,n.useMemo)((()=>n.createElement(u.h,{bounds:e,whenCreated:s,zoom:13,className:E()(b.Z.Map)},n.createElement(m.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.createElement(v,{position:t,setPosition:a},`${t.lat},${t.lng}`),r.map((({i:e,id:l,position:a,name:r,item:o})=>n.createElement(d.c,{key:e,center:a,pathOptions:{color:"purple"}},n.createElement(p.G,{minWidth:90},n.createElement("section",null,n.createElement("header",null,`[${l}] ${r} (${t.distanceTo(a).toFixed(0)/1e3} km)`)))))),n.createElement(y,null))),[r,t]);return n.createElement("div",{className:E()(b.Z.Layout)},c)}var w=l(4772),k=l(9757);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}const x=[1,3,5,10,20,50,100,500],$=[0,1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6],j=(0,a.k)((async e=>{const t=await fetch(`api/vehicles/data.json?${e}`);return await t.json().then((({$list:e})=>({results:e,options:e.reduce(((e,t)=>["bodyType","brand","color","emissionStandard","fuel","series","seriesCode","modelCode","transmission"].reduce(((e,l)=>({...e,[l]:Object.assign({},e[l],"object"==typeof t[l]?{[t[l].id]:t[l].label}:{[t[l]]:t[l]})})),e)),{})})))}));function P({images:e}){return e.length?n.createElement("div",{className:k.Z.Gallery},e.map(((e,t)=>n.createElement("img",{key:t,src:e,alt:`Image #${t+1}`,referrerPolicy:"no-referrer"})))):null}function Z({color:e}){return n.createElement("a",{className:k.Z.Color,style:{backgroundColor:e.code},title:e.label})}function M({href:e,...t}){const l="#"===e[0];return n.createElement("a",S({href:e,target:l?void 0:"_blank",rel:l?void 0:"noopener noreferrer"},t))}function N({version:e="v1"}){const{results:t,options:l}=j.read(e),[a,r]=(0,n.useState)(""),[i]=(0,w.Z)(a),s=(0,n.useCallback)((({target:e})=>r(e.value)),[]),[c,u]=(0,n.useState)((()=>Object.keys(l).reduce(((e,t)=>Object.assign(e,{[t]:""})),{}))),m=(0,n.useCallback)((({target:e})=>u((t=>({...t,[e.name]:e.value})))),[]),[d,p]=(0,n.useState)(x[x.length-1]),f=(0,n.useCallback)((({target:e})=>p(Number(e.value))),[]),[g,h]=(0,n.useState)($[0]),[E,b]=(0,n.useState)($[$.length-1]),v=(0,n.useCallback)((({target:e})=>b((t=>{const l=Number(e.value);return h(l),t<l?l:t}))),[]),y=(0,n.useCallback)((({target:e})=>h((t=>{const l=Number(e.value);return b(l),l>t?t:l}))),[]);console.log({options:l,results:t});const k=(0,n.useMemo)((()=>t.map(((e,t)=>{const{id:l,dealer:{name:n,lat:a,lng:r}}=e;return{i:t,id:l,position:{lat:a,lng:r},name:n,item:e}})).filter((({name:e,item:t})=>e.toLowerCase().match(i)&&g<=t.transactionalPrice&&t.transactionalPrice<=E&&-1===Object.entries(c).findIndex((([e,l])=>![String("object"==typeof t[e]?t[e].id:t[e]),""].includes(l)))))),[t,i,c,g,E]),S=function(e){return(0,n.useMemo)((()=>o().featureGroup(e.map((({position:{lat:e,lng:t}})=>o().marker([e,t])))).getBounds()),[])}(k.length?k:[{position:{lat:52.232855,lng:20.921111}}]),[N,O]=(0,n.useState)((()=>S.getCenter())),T=(0,n.useMemo)((()=>k.filter((({position:e})=>N.distanceTo(e)<1e3*d))),[k,N,d]);return n.createElement("div",null,n.createElement(C,{bounds:S,center:N,setCenter:O,list:T}),n.createElement("fieldset",null,n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Search"),n.createElement("input",{type:"search",value:a,onChange:s})),n.createElement("label",null,n.createElement("span",null,"Radius"),n.createElement("input",{type:"range",list:"range-list",min:x[0],max:x[x.length-1],value:d,onChange:f}),n.createElement("datalist",{id:"range-list"},x.map((e=>n.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?`${e} km`:void 0})))),n.createElement("span",null,`max ${d} km`))),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"Price From"),n.createElement("input",{type:"range",list:"price-list",min:$[0],max:$[$.length-1],value:g,onChange:v}),n.createElement("datalist",{id:"price-list"},$.map((e=>n.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?`${e} pln`:void 0}))))),n.createElement("label",null,n.createElement("span",null,"Price To"),n.createElement("input",{type:"range",list:"price-list",min:$[0],max:$[$.length-1],value:E,onChange:y}),n.createElement("span",null,`${g}-${E} pln`))),Object.entries(c).map((([e,t],a)=>n.createElement("div",{key:a},n.createElement("label",null,n.createElement("span",null,e),n.createElement("select",{name:e,value:t,onChange:m},n.createElement("option",{value:""},"--"),Object.entries(l[e]).map((([e,t])=>n.createElement("option",{key:e,value:e},t))))))))),n.createElement("div",null,`Found ${k.length} vehicles out of a total of ${t.length}`),n.createElement("ol",null,k.map((({item:e})=>e)).map((({id:e,title:t,brand:l,series:a,seriesCode:r,bodyType:o,modelCode:i,fuel:s,color:c,transmission:u,capacity:m,consumptionFuel:d,emissionStandard:p,emissionMeasurementStandard:f,emission:g,powerHP:h,productionYear:E,registration:b,age:v,mileage:y,transactionalPrice:C,newPrice:w,warranty:k,created:S,images:x,imagesLastChanged:$},j)=>n.createElement("li",{key:j},n.createElement(P,{images:[...Array(x)].map(((t,l,n="322/255b28ffdad35cd984ff32f30da17158")=>`//najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/${n}/${e}-${l}`))}),n.createElement("ul",null,n.createElement("li",null,n.createElement(Z,{color:c}),n.createElement(M,{href:`//najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/${e}/`},`[${e}] ${t}`)),n.createElement("li",null,"[",r,"] ",l.label," ",a.label," ",r.label," ",o.label," ",s.label," ",u.label),n.createElement("li",null,"[",i,"] capacity: ",m," powerHP: ",h," ","consumptionFuel: ",d," emissionStandard:"," ",p.label," ",f," ",g),n.createElement("li",null,"productionYear: ",E," registration:"," ",b.split("T")[0]," age: ",v," mileage: ",y),n.createElement("li",null,"transactionalPrice: ",C," newPrice:"," ",w," warranty: ",k),n.createElement("li",null,S," (imagesLastChanged: ",$,")")))))))}function O(){return n.createElement("div",{className:k.Z.Section},n.createElement("h2",null,"Vehicles"),n.createElement(N,null))}},4772:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(2784);function a(e){const[t,l]=(0,n.useState)(e),a=(0,n.useRef)();return(0,n.useEffect)((()=>(clearTimeout(a.current),a.current=setTimeout((()=>l(e.toLowerCase())),400),()=>{clearTimeout(a.current)})),[e]),[t]}},1617:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var n=l(9601),a=l.n(n),r=l(2609),o=l.n(r),i=l(9138),s=o()(a());s.i(i.Z),s.push([e.id,".vXpyyqKMf2Eg0uZBGb3A{height:75vh;border:2px solid red}.vXpyyqKMf2Eg0uZBGb3A header{font-weight:bold}",""]),s.locals={Map:"vXpyyqKMf2Eg0uZBGb3A"};const c=s},303:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var n=l(9601),a=l.n(n),r=l(2609),o=l.n(r)()(a());o.push([e.id,".dnNulWhTs84wB_yi0tu2{color:green}.LihBxmStNILK5SsWSml4{display:inline-block;width:1em;height:1em;border:2px solid #000;border-radius:50%}.WV27lBhC9zjxECQGlM6O{float:left;width:200px;height:150px;overflow-x:auto;display:flex;flex-direction:row;scroll-snap-type:x mandatory}.WV27lBhC9zjxECQGlM6O img{max-width:100%;scroll-snap-align:center}",""]),o.locals={Section:"dnNulWhTs84wB_yi0tu2",Color:"LihBxmStNILK5SsWSml4",Gallery:"WV27lBhC9zjxECQGlM6O"};const i=o},1231:(e,t,l)=>{l.d(t,{Z:()=>y});var n=l(6062),a=l.n(n),r=l(4036),o=l.n(r),i=l(6793),s=l.n(i),c=l(7892),u=l.n(c),m=l(1173),d=l.n(m),p=l(2464),f=l.n(p),g=l(1617),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d();var E=a()(g.default,h);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,v=b?g:g.default.locals;e.hot.accept(1617,(t=>{g=l(1617),function(e,t,l){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!l||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(l&&"default"===n||e[n]))return!1;return!0}(v,b?g:g.default.locals,b)?(v=b?g:g.default.locals,E(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=g.default&&g.default.locals?g.default.locals:void 0},9757:(e,t,l)=>{l.d(t,{Z:()=>y});var n=l(6062),a=l.n(n),r=l(4036),o=l.n(r),i=l(6793),s=l.n(i),c=l(7892),u=l.n(c),m=l(1173),d=l.n(m),p=l(2464),f=l.n(p),g=l(303),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d();var E=a()(g.default,h);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,v=b?g:g.default.locals;e.hot.accept(303,(t=>{g=l(303),function(e,t,l){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!l||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(l&&"default"===n||e[n]))return!1;return!0}(v,b?g:g.default.locals,b)?(v=b?g:g.default.locals,E(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=g.default&&g.default.locals?g.default.locals:void 0}}]);