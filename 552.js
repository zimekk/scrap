"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[552],{6552:(e,t,l)=>{l.r(t),l.d(t,{default:()=>M});var a=l(2784),n=l(357),r=l(5062),i=l.n(r),o=l(9386),s=l(5449),c=l(1128),u=l(3964),m=l(2048),d=l(5176),p=l(7122),f=l(9530),g=l(5096),h=l(2779),E=l.n(h),b=l(1231);function v({position:e,children:t,setPosition:l}){const n=(0,a.useRef)(null),r=(0,a.useMemo)((()=>({dragend(){const e=n.current;null!=e&&l(e.getLatLng())}})),[]);return a.createElement(o.J,{draggable:!0,eventHandlers:r,position:e,ref:n},a.createElement(s.u,null,t))}function y(){const e=(0,c.Sx)(),t=(0,a.useCallback)((t=>{t.preventDefault(),e.locate({setView:!0})}),[e]);return a.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},a.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},a.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},a.createElement(f.G,{icon:g.KS0}))))}function C({bounds:e,center:t,setCenter:n,list:r}){(0,a.useEffect)((()=>{delete i().Icon.Default.prototype._getIconUrl,i().Icon.Default.mergeOptions({iconRetinaUrl:l(1963).Z,iconUrl:l(379).Z,shadowUrl:l(6179).Z})}),[]);const[o,s]=(0,a.useState)(null),c=(0,a.useMemo)((()=>a.createElement(u.h,{bounds:e,whenCreated:s,zoom:13,className:E()(b.Z.Map)},a.createElement(m.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.createElement(v,{position:t,setPosition:n},`${t.lat},${t.lng}`),r.map((({i:e,id:l,position:n,name:r,item:i})=>a.createElement(d.c,{key:e,center:n,pathOptions:{color:"purple"}},a.createElement(p.G,{minWidth:90},a.createElement("section",null,a.createElement("header",null,`[${l}] ${r} (${t.distanceTo(n).toFixed(0)/1e3} km)`)))))),a.createElement(y,null))),[r,t]);return a.createElement("div",{className:E()(b.Z.Layout)},c)}var w=l(4772),k=l(9757);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}const x=[1,3,5,10,20,50,100,500],$=[0,1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6],j=[...Array(15)].map(((e,t)=>(new Date).getFullYear()-t)).reverse(),O=(0,n.k)((async e=>{const t=await fetch(`api/vehicles/data.json?${e}`);return await t.json().then((({$list:e})=>({results:e,options:e.reduce(((e,t)=>["bodyType","brand","color","emissionStandard","fuel","series","seriesCode","modelCode","transmission"].reduce(((e,l)=>({...e,[l]:Object.assign({},e[l],"object"==typeof t[l]?{[t[l].id]:t[l].label}:{[t[l]]:t[l]})})),e)),{})}))).then((({options:e,...t})=>(Object.keys(e).forEach((t=>Object.assign(e,{[t]:Object.entries(e[t]).sort((([e],[t])=>String(e)>String(t)?1:-1)).reduce(((e,[t,l])=>console.log(t,l)||Object.assign(e,{[t]:l})),{})}))),{options:e,...t})))}));function N({images:e}){return e.length?a.createElement("div",{className:k.Z.Gallery},e.map(((e,t)=>a.createElement("img",{key:t,src:e,alt:`Image #${t+1}`,referrerPolicy:"no-referrer"})))):null}function P({color:e}){return a.createElement("a",{className:k.Z.Color,style:{backgroundColor:e.code},title:e.label})}function T({href:e,...t}){const l="#"===e[0];return a.createElement("a",S({href:e,target:l?void 0:"_blank",rel:l?void 0:"noopener noreferrer"},t))}function Z({version:e="v1"}){const{results:t,options:l}=O.read(e),[n,r]=(0,a.useState)(""),[o]=(0,w.Z)(n),s=(0,a.useCallback)((({target:e})=>r(e.value)),[]),[c,u]=(0,a.useState)((()=>Object.keys(l).reduce(((e,t)=>Object.assign(e,{[t]:""})),{}))),m=(0,a.useCallback)((({target:e})=>u((t=>({...t,[e.name]:e.value})))),[]),[d,p]=(0,a.useState)(x[x.length-1]),f=(0,a.useCallback)((({target:e})=>p(Number(e.value))),[]),[g,h]=(0,a.useState)($[0]),[E,b]=(0,a.useState)($[$.length-1]),v=(0,a.useCallback)((({target:e})=>b((t=>{const l=Number(e.value);return h(l),t<l?l:t}))),[]),y=(0,a.useCallback)((({target:e})=>h((t=>{const l=Number(e.value);return b(l),l>t?t:l}))),[]),[k,S]=(0,a.useState)(j[0]),[Z,M]=(0,a.useState)(j[j.length-1]),z=(0,a.useCallback)((({target:e})=>M((t=>{const l=Number(e.value);return S(l),t<l?l:t}))),[]),L=(0,a.useCallback)((({target:e})=>S((t=>{const l=Number(e.value);return M(l),l>t?t:l}))),[]);console.log({options:l,results:t});const B=(0,a.useMemo)((()=>t.map(((e,t)=>{const{id:l,dealer:{name:a,lat:n,lng:r}}=e;return{i:t,id:l,position:{lat:n,lng:r},name:a,item:e}})).filter((({item:e})=>e.title.toLowerCase().match(o)&&g<=e.transactionalPrice&&e.transactionalPrice<=E&&k<=e.productionYear&&e.productionYear<=Z&&-1===Object.entries(c).findIndex((([t,l])=>![String("object"==typeof e[t]?e[t].id:e[t]),""].includes(l)))))),[t,o,c,k,Z,g,E]),G=function(e){return(0,a.useMemo)((()=>i().featureGroup(e.map((({position:{lat:e,lng:t}})=>i().marker([e,t])))).getBounds()),[])}(B.length?B:[{position:{lat:52.232855,lng:20.921111}}]),[I,A]=(0,a.useState)((()=>G.getCenter())),_=(0,a.useMemo)((()=>B.filter((({position:e})=>I.distanceTo(e)<1e3*d))),[B,I,d]);return a.createElement("div",null,a.createElement(C,{bounds:G,center:I,setCenter:A,list:_}),a.createElement("fieldset",null,a.createElement("div",null,a.createElement("label",null,a.createElement("span",null,"Search"),a.createElement("input",{type:"search",value:n,onChange:s})),a.createElement("label",null,a.createElement("span",null,"Radius"),a.createElement("input",{type:"range",list:"range-list",min:x[0],max:x[x.length-1],value:d,onChange:f}),a.createElement("datalist",{id:"range-list"},x.map((e=>a.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?`${e} km`:void 0})))),a.createElement("span",null,`max ${d} km`))),a.createElement("div",null,a.createElement("label",null,a.createElement("span",null,"Year From"),a.createElement("input",{type:"range",list:"year-list",min:j[0],max:j[j.length-1],value:k,onChange:z}),a.createElement("datalist",{id:"year-list"},j.map((e=>a.createElement("option",{key:e,value:e,label:[0,2010,2015,2020].includes(e)?`${e}`:void 0}))))),a.createElement("label",null,a.createElement("span",null,"Year To"),a.createElement("input",{type:"range",list:"year-list",min:j[0],max:j[j.length-1],value:E,onChange:L}),a.createElement("span",null,`${k}-${Z}`))),a.createElement("div",null,a.createElement("label",null,a.createElement("span",null,"Price From"),a.createElement("input",{type:"range",list:"price-list",min:$[0],max:$[$.length-1],value:g,onChange:v}),a.createElement("datalist",{id:"price-list"},$.map((e=>a.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?`${e} pln`:void 0}))))),a.createElement("label",null,a.createElement("span",null,"Price To"),a.createElement("input",{type:"range",list:"price-list",min:$[0],max:$[$.length-1],value:E,onChange:y}),a.createElement("span",null,`${g}-${E} pln`))),Object.entries(c).map((([e,t],n)=>a.createElement("div",{key:n},a.createElement("label",null,a.createElement("span",null,e),a.createElement("select",{name:e,value:t,onChange:m},a.createElement("option",{value:""},"--"),Object.entries(l[e]).map((([e,t])=>a.createElement("option",{key:e,value:e},t))))))))),a.createElement("div",null,`Found ${B.length} vehicles out of a total of ${t.length}`),a.createElement("ol",null,B.slice(0,100).map((({item:e})=>e)).map((({id:e,title:t,brand:l,series:n={},seriesCode:r,bodyType:i,modelCode:o,fuel:s,color:c,transmission:u,capacity:m,consumptionFuel:d,emissionStandard:p,emissionMeasurementStandard:f,emission:g,powerHP:h,productionYear:E,registration:b,age:v,mileage:y,transactionalPrice:C,newPrice:w,warranty:k,created:S,images:x,imagesLastChanged:$},j)=>a.createElement("li",{key:j},a.createElement(N,{images:[...Array(x)].slice(0,3).map(((t,l,a,n="322/255b28ffdad35cd984ff32f30da17158")=>`//najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/${n}/${e}-${l}`))}),a.createElement("ul",null,a.createElement("li",null,a.createElement(P,{color:c}),a.createElement(T,{href:`//najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/${e}/`},`[${e}] ${t}`)),a.createElement("li",null,"[",r,"] ",l.label," ",n.label," ",r.label," ",i.label," ",s.label," ",u.label),a.createElement("li",null,"[",o,"] capacity: ",m," powerHP: ",h," ","consumptionFuel: ",d," emissionStandard:"," ",p.label," ",f," ",g),a.createElement("li",null,"productionYear: ",E," registration:"," ",b.split("T")[0]," age: ",v," mileage: ",y),a.createElement("li",null,"transactionalPrice: ",C," newPrice:"," ",w," warranty: ",k),a.createElement("li",null,S," (imagesLastChanged: ",$,")")))))))}function M(){return a.createElement("div",{className:k.Z.Section},a.createElement("h2",null,"Vehicles"),a.createElement(Z,null))}},4772:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(2784);function n(e){const[t,l]=(0,a.useState)(e),n=(0,a.useRef)();return(0,a.useEffect)((()=>(clearTimeout(n.current),n.current=setTimeout((()=>l(e.toLowerCase())),400),()=>{clearTimeout(n.current)})),[e]),[t]}},1617:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var a=l(9601),n=l.n(a),r=l(2609),i=l.n(r),o=l(9138),s=i()(n());s.i(o.Z),s.push([e.id,".vXpyyqKMf2Eg0uZBGb3A{height:75vh;border:2px solid red}.vXpyyqKMf2Eg0uZBGb3A header{font-weight:bold}",""]),s.locals={Map:"vXpyyqKMf2Eg0uZBGb3A"};const c=s},303:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var a=l(9601),n=l.n(a),r=l(2609),i=l.n(r)()(n());i.push([e.id,".dnNulWhTs84wB_yi0tu2{color:green}.LihBxmStNILK5SsWSml4{display:inline-block;width:1em;height:1em;border:2px solid #000;border-radius:50%}.WV27lBhC9zjxECQGlM6O{float:left;width:200px;height:150px;overflow-x:auto;display:flex;flex-direction:row;scroll-snap-type:x mandatory}.WV27lBhC9zjxECQGlM6O img{max-width:100%;scroll-snap-align:center}",""]),i.locals={Section:"dnNulWhTs84wB_yi0tu2",Color:"LihBxmStNILK5SsWSml4",Gallery:"WV27lBhC9zjxECQGlM6O"};const o=i},1231:(e,t,l)=>{l.d(t,{Z:()=>y});var a=l(6062),n=l.n(a),r=l(4036),i=l.n(r),o=l(6793),s=l.n(o),c=l(7892),u=l.n(c),m=l(1173),d=l.n(m),p=l(2464),f=l.n(p),g=l(1617),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d();var E=n()(g.default,h);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,v=b?g:g.default.locals;e.hot.accept(1617,(t=>{g=l(1617),function(e,t,l){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!l||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(l&&"default"===a||e[a]))return!1;return!0}(v,b?g:g.default.locals,b)?(v=b?g:g.default.locals,E(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=g.default&&g.default.locals?g.default.locals:void 0},9757:(e,t,l)=>{l.d(t,{Z:()=>y});var a=l(6062),n=l.n(a),r=l(4036),i=l.n(r),o=l(6793),s=l.n(o),c=l(7892),u=l.n(c),m=l(1173),d=l.n(m),p=l(2464),f=l.n(p),g=l(303),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d();var E=n()(g.default,h);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,v=b?g:g.default.locals;e.hot.accept(303,(t=>{g=l(303),function(e,t,l){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!l||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(l&&"default"===a||e[a]))return!1;return!0}(v,b?g:g.default.locals,b)?(v=b?g:g.default.locals,E(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=g.default&&g.default.locals?g.default.locals:void 0}}]);