"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[1],{8479:(e,t,l)=>{l.d(t,{B:()=>y,Z:()=>w});var a=l(2784),n=l(5062),r=l.n(n),i=l(9386),o=l(5449),s=l(1128),c=l(3964),u=l(2048),m=l(5176),d=l(7122),p=l(9530),f=l(5096),g=l(2779),h=l.n(g),E=l(1231);function b({position:e,children:t,setPosition:l}){const n=(0,a.useRef)(null),r=(0,a.useMemo)((()=>({dragend(){const e=n.current;null!=e&&l(e.getLatLng())}})),[]);return a.createElement(i.J,{draggable:!0,eventHandlers:r,position:e,ref:n},a.createElement(o.u,null,t))}function v(){const e=(0,s.Sx)(),t=(0,a.useCallback)((t=>{t.preventDefault(),e.locate({setView:!0})}),[e]);return a.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},a.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},a.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},a.createElement(p.G,{icon:f.KS0}))))}function y(e){return(0,a.useMemo)((()=>r().featureGroup(e.map((({position:{lat:e,lng:t}})=>r().marker([e,t])))).getBounds()),[])}function w({bounds:e,center:t,setCenter:n,list:i}){(0,a.useEffect)((()=>{delete r().Icon.Default.prototype._getIconUrl,r().Icon.Default.mergeOptions({iconRetinaUrl:l(1963).Z,iconUrl:l(379).Z,shadowUrl:l(6179).Z})}),[]);const[o,s]=(0,a.useState)(null),p=(0,a.useMemo)((()=>a.createElement(c.h,{bounds:e,whenCreated:s,zoom:13,className:h()(E.Z.Map)},a.createElement(u.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.createElement(b,{position:t,setPosition:n},`${t.lat},${t.lng}`),i.map((({i:e,id:l,position:n,name:r,item:i})=>a.createElement(m.c,{key:e,center:n,pathOptions:{color:"purple"}},a.createElement(d.G,{minWidth:90},a.createElement("section",null,a.createElement("header",null,`[${l}] ${r} (${t.distanceTo(n).toFixed(0)/1e3} km)`)))))),a.createElement(v,null))),[i,t]);return a.createElement("div",{className:h()(E.Z.Layout)},p)}},4001:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Z});var a=l(2784),n=l(357),r=l(1927),i=l.n(r),o=l(9635),s=l(2779),c=l.n(s),u=l(7831);const{width:m,height:d,left:p,right:f,top:g,bottom:h}={width:320,height:200,left:10,right:10,top:20,bottom:20};function E({list:e}){const t=(0,a.useRef)(null),l=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const a=e.slice(0,500).map((({item:e})=>[e.mileage,e.transactionalPrice])),r=a.map((([e=0])=>e)),i=a.map((([,e=0])=>e)),s=[Math.min(...r),Math.max(...r)],c=[Math.min(...i),Math.max(...i)],u=(0,o.BYU)().domain(s).range([p,m-f]),E=(0,o.BYU)().domain(c).range([g,d-h]),b=(0,o.BYU)().domain(s).range(["red","blue"]);(0,o.Ys)(n.current).selectAll("circle").data(a).join((e=>e.append("circle").attr("cx",(([e=0])=>u(e))).attr("cy",(([,e=0])=>E(e))).attr("r",0).attr("fill",(([e=0])=>b(e))).call((e=>e.transition().duration(200).attr("r",2).style("opacity",1)))),(e=>e.attr("fill","lightgrey")),(e=>e.attr("fill","tomato").call((e=>e.transition().duration(200).attr("r",0).style("opacity",0).remove()))));const v=(0,o.LLu)(u).ticks(5).tickSizeOuter(0);(0,o.Ys)(t.current).call(v);const y=(0,o.y4O)(E).ticks(5).tickSizeOuter(0);(0,o.Ys)(l.current).call(y)}),[e]),a.createElement("div",{className:c()(u.Z.Chart)},a.createElement("svg",{ref:n,width:m,height:d,viewBox:`0, 0, ${m}, ${d}`},a.createElement("g",{transform:`translate(0, ${d-h})`,ref:t}),a.createElement("g",{transform:`translate(${p}, 0)`,ref:l})))}var b=l(8479),v=l(4772),y=l(9757);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}const C=[1,3,5,10,20,50,100,500],k=[0,1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6],S={"":"",N:"New",U:"Used"},P=[...Array(15)].map(((e,t)=>(new Date).getFullYear()-t)).reverse(),x=(0,n.k)((async e=>{const t=await fetch(`api/vehicles/data.json?${e}`);return await t.json().then((({$list:e})=>({results:e,options:e.reduce(((e,t)=>["bodyType","brand","color","emissionStandard","fuel","series","seriesCode","modelCode","transmission"].reduce(((e,l)=>({...e,[l]:Object.assign({},e[l],"object"==typeof t[l]?{[t[l].id]:t[l].label}:{[t[l]]:t[l]})})),e)),{})}))).then((({options:e,...t})=>(Object.keys(e).forEach((t=>Object.assign(e,{[t]:Object.entries(e[t]).sort((([e],[t])=>String(e)>String(t)?1:-1)).reduce(((e,[t,l])=>Object.assign(e,{[t]:l})),{})}))),{options:e,...t})))}));function $({images:e}){return e.length?a.createElement("div",{className:y.Z.Gallery},e.map(((e,t)=>a.createElement("img",{key:t,src:e,alt:`Image #${t+1}`,referrerPolicy:"no-referrer"})))):null}function j({...e}){return a.createElement("button",e)}function O({color:e}){return a.createElement("a",{className:y.Z.Color,style:{backgroundColor:e.code},title:e.label})}function N({href:e,...t}){const l="#"===e[0];return a.createElement("a",w({href:e,target:l?void 0:"_blank",rel:l?void 0:"noopener noreferrer"},t))}function T({version:e="v1"}){const{results:t,options:l}=x.read(e),[n,r]=(0,a.useState)(""),[o]=(0,v.Z)(n),s=(0,a.useCallback)((({target:e})=>r(e.value)),[]),[c,u]=(0,a.useState)((()=>Object.keys(l).reduce(((e,t)=>Object.assign(e,{[t]:""})),{}))),m=(0,a.useCallback)((({target:e})=>u((t=>({...t,[e.name]:e.value})))),[]),[d,p]=(0,a.useState)(""),f=(0,a.useCallback)((({target:e})=>p(e.value)),[]),[g,h]=(0,a.useState)(C[C.length-1]),w=(0,a.useCallback)((({target:e})=>h(Number(e.value))),[]),[T,Z]=(0,a.useState)(k[0]),[z,M]=(0,a.useState)(k[k.length-1]),Y=(0,a.useCallback)((({target:e})=>M((t=>{const l=Number(e.value);return Z(l),t<l?l:t}))),[]),B=(0,a.useCallback)((({target:e})=>Z((t=>{const l=Number(e.value);return M(l),l>t?t:l}))),[]),[A,L]=(0,a.useState)(P[0]),[U,G]=(0,a.useState)(P[P.length-1]),I=(0,a.useCallback)((({target:e})=>G((t=>{const l=Number(e.value);return L(l),t<l?l:t}))),[]),K=(0,a.useCallback)((({target:e})=>L((t=>{const l=Number(e.value);return G(l),l>t?t:l}))),[]),F=(0,a.useCallback)((({target:e})=>{const l=Number(e.value),a=e=>[e.capacity,e.powerHP,e.consumptionFuel,e.emission,e.newPrice,e.optionsPrice,e.productionYear,e.age,e.mileage,e.transactionalPrice,e.warranty],n=i()(t.map(a));console.table(n.knn(a(t.find((e=>e.id===l)))).slice(0,10).map((e=>t[e])).map((e=>[e.id,e.title,e.capacity,e.powerHP,e.consumptionFuel,e.emission,e.newPrice,e.optionsPrice,e.productionYear,e.age,e.mileage,e.transactionalPrice,e.warranty])))}),[]);console.log({options:l,results:t});const R=(0,a.useMemo)((()=>t.map(((e,t)=>{const{id:l,dealer:{name:a,lat:n,lng:r}}=e;return{i:t,id:l,position:{lat:n,lng:r},name:a,item:e}})).filter((({item:e})=>(e.title.toLowerCase().match(o)||o.trim()===String(e.id))&&["",e.isNew?"N":"U"].includes(d)&&T<=e.transactionalPrice&&e.transactionalPrice<=z&&A<=e.productionYear&&e.productionYear<=U&&-1===Object.entries(c).findIndex((([t,l])=>![String("object"==typeof e[t]?e[t].id:e[t]),""].includes(l)))))),[t,o,d,c,A,U,T,z]),_=(0,b.B)(R.length?R:[{position:{lat:52.232855,lng:20.921111}}]),[H,V]=(0,a.useState)((()=>_.getCenter())),W=(0,a.useMemo)((()=>R.filter((({position:e})=>H.distanceTo(e)<1e3*g))),[R,H,g]);return a.createElement("div",null,a.createElement(b.Z,{bounds:_,center:H,setCenter:V,list:W}),a.createElement(E,{list:R}),a.createElement("fieldset",null,a.createElement("div",null,a.createElement("label",null,a.createElement("span",null,"Type"),a.createElement("select",{value:d,onChange:f},Object.entries(S).map((([e,t])=>a.createElement("option",{key:e,value:e},t))))),a.createElement("label",null,a.createElement("span",null,"Search"),a.createElement("input",{type:"search",value:n,onChange:s})),a.createElement("label",null,a.createElement("span",null,"Radius"),a.createElement("input",{type:"range",list:"range-list",min:C[0],max:C[C.length-1],value:g,onChange:w}),a.createElement("datalist",{id:"range-list"},C.map((e=>a.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?`${e} km`:void 0})))),a.createElement("span",null,`max ${g} km`))),a.createElement("div",null,a.createElement("label",null,a.createElement("span",null,"Year From"),a.createElement("input",{type:"range",list:"year-list",min:P[0],max:P[P.length-1],value:A,onChange:I}),a.createElement("datalist",{id:"year-list"},P.map((e=>a.createElement("option",{key:e,value:e,label:[0,2010,2015,2020].includes(e)?`${e}`:void 0}))))),a.createElement("label",null,a.createElement("span",null,"Year To"),a.createElement("input",{type:"range",list:"year-list",min:P[0],max:P[P.length-1],value:U,onChange:K}),a.createElement("span",null,`${A}-${U}`))),a.createElement("div",null,a.createElement("label",null,a.createElement("span",null,"Price From"),a.createElement("input",{type:"range",list:"price-list",min:k[0],max:k[k.length-1],value:T,onChange:Y}),a.createElement("datalist",{id:"price-list"},k.map((e=>a.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?`${e} pln`:void 0}))))),a.createElement("label",null,a.createElement("span",null,"Price To"),a.createElement("input",{type:"range",list:"price-list",min:k[0],max:k[k.length-1],value:z,onChange:B}),a.createElement("span",null,`${T}-${z} pln`))),Object.entries(c).map((([e,t],n)=>a.createElement("div",{key:n},a.createElement("label",null,a.createElement("span",null,e),a.createElement("select",{name:e,value:t,onChange:m},a.createElement("option",{value:""},"--"),Object.entries(l[e]).map((([e,t])=>a.createElement("option",{key:e,value:e},t))))))))),a.createElement("div",null,`Found ${R.length} vehicles out of a total of ${t.length}`),a.createElement("ol",null,R.slice(0,100).map((({item:e})=>e)).map((({id:e,title:t,brand:l,series:n={},seriesCode:r,bodyType:i,modelCode:o,fuel:s,color:c,transmission:u,capacity:m,consumptionFuel:d,emissionStandard:p,emissionMeasurementStandard:f,emission:g,powerHP:h,productionYear:E,registration:b,age:v,mileage:w,transactionalPrice:C,newPrice:k,warranty:S,created:P,images:x,imagesLastChanged:T},Z)=>a.createElement("li",{key:Z,className:y.Z.Row},a.createElement($,{images:[...Array(x)].slice(0,3).map(((t,l,a,n="322/255b28ffdad35cd984ff32f30da17158")=>`//najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/${n}/${e}-${l}`))}),a.createElement("ul",null,a.createElement("li",null,a.createElement(O,{color:c}),a.createElement(N,{href:`//najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/${e}/`},`[${e}] ${t}`),a.createElement(j,{onClick:F,value:e},"Compare")),a.createElement("li",null,"[",r,"] ",l.label," ",n.label," ",i.label," ",s.label," ",u.label),a.createElement("li",null,"[",o,"] capacity: ",m," powerHP: ",h," ","consumptionFuel: ",d," emissionStandard:"," ",p.label," ",f," ",g),a.createElement("li",null,"productionYear: ",E," age: ",v," mileage:"," ",w," registration:"," ",b?b.split("T")[0]:"-"),a.createElement("li",null,"transactionalPrice: ",C," newPrice:"," ",k," warranty: ",S),a.createElement("li",null,P," (imagesLastChanged: ",T,")")))))))}function Z(){return a.createElement("div",{className:y.Z.Section},a.createElement("h2",null,"Vehicles"),a.createElement(T,null))}},4772:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(2784);function n(e){const[t,l]=(0,a.useState)(e),n=(0,a.useRef)();return(0,a.useEffect)((()=>(clearTimeout(n.current),n.current=setTimeout((()=>l(e.toLowerCase())),400),()=>{clearTimeout(n.current)})),[e]),[t]}},6583:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var a=l(9601),n=l.n(a),r=l(2609),i=l.n(r)()(n());i.push([e.id,".jym2UAfwYghQzKOP2VHa{height:50vh;border:2px solid red}.jym2UAfwYghQzKOP2VHa svg{width:100%;height:100%}",""]),i.locals={Chart:"jym2UAfwYghQzKOP2VHa"};const o=i},1617:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var a=l(9601),n=l.n(a),r=l(2609),i=l.n(r),o=l(9138),s=i()(n());s.i(o.Z),s.push([e.id,".vXpyyqKMf2Eg0uZBGb3A{height:75vh;border:2px solid red}.vXpyyqKMf2Eg0uZBGb3A header{font-weight:bold}",""]),s.locals={Map:"vXpyyqKMf2Eg0uZBGb3A"};const c=s},303:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var a=l(9601),n=l.n(a),r=l(2609),i=l.n(r)()(n());i.push([e.id,".dnNulWhTs84wB_yi0tu2{color:green}.eZcT7zT7zcKeynqlJ5cC{clear:both}.LihBxmStNILK5SsWSml4{display:inline-block;width:1em;height:1em;border:2px solid #000;border-radius:50%}.WV27lBhC9zjxECQGlM6O{float:left;width:200px;height:150px;overflow-x:auto;display:flex;flex-direction:row;scroll-snap-type:x mandatory}.WV27lBhC9zjxECQGlM6O img{max-width:100%;scroll-snap-align:center}",""]),i.locals={Section:"dnNulWhTs84wB_yi0tu2",Row:"eZcT7zT7zcKeynqlJ5cC",Color:"LihBxmStNILK5SsWSml4",Gallery:"WV27lBhC9zjxECQGlM6O"};const o=i},7831:(e,t,l)=>{l.d(t,{Z:()=>y});var a=l(6062),n=l.n(a),r=l(4036),i=l.n(r),o=l(6793),s=l.n(o),c=l(7892),u=l.n(c),m=l(1173),d=l.n(m),p=l(2464),f=l.n(p),g=l(6583),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d();var E=n()(g.default,h);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,v=b?g:g.default.locals;e.hot.accept(6583,(t=>{g=l(6583),function(e,t,l){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!l||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(l&&"default"===a||e[a]))return!1;return!0}(v,b?g:g.default.locals,b)?(v=b?g:g.default.locals,E(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=g.default&&g.default.locals?g.default.locals:void 0},1231:(e,t,l)=>{l.d(t,{Z:()=>y});var a=l(6062),n=l.n(a),r=l(4036),i=l.n(r),o=l(6793),s=l.n(o),c=l(7892),u=l.n(c),m=l(1173),d=l.n(m),p=l(2464),f=l.n(p),g=l(1617),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d();var E=n()(g.default,h);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,v=b?g:g.default.locals;e.hot.accept(1617,(t=>{g=l(1617),function(e,t,l){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!l||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(l&&"default"===a||e[a]))return!1;return!0}(v,b?g:g.default.locals,b)?(v=b?g:g.default.locals,E(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=g.default&&g.default.locals?g.default.locals:void 0},9757:(e,t,l)=>{l.d(t,{Z:()=>y});var a=l(6062),n=l.n(a),r=l(4036),i=l.n(r),o=l(6793),s=l.n(o),c=l(7892),u=l.n(c),m=l(1173),d=l.n(m),p=l(2464),f=l.n(p),g=l(303),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d();var E=n()(g.default,h);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,v=b?g:g.default.locals;e.hot.accept(303,(t=>{g=l(303),function(e,t,l){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!l||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(l&&"default"===a||e[a]))return!1;return!0}(v,b?g:g.default.locals,b)?(v=b?g:g.default.locals,E(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=g.default&&g.default.locals?g.default.locals:void 0}}]);