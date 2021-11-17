"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[1],{8479:(e,t,a)=>{a.d(t,{B:()=>y,Z:()=>w});var l=a(2784),n=a(5062),r=a.n(n),i=a(9386),o=a(5449),c=a(1128),s=a(3964),u=a(2048),m=a(5176),d=a(7122),p=a(9530),f=a(5096),g=a(2779),h=a.n(g),E=a(1231);function b({position:e,children:t,setPosition:a}){const n=(0,l.useRef)(null),r=(0,l.useMemo)((()=>({dragend(){const e=n.current;null!=e&&a(e.getLatLng())}})),[]);return l.createElement(i.J,{draggable:!0,eventHandlers:r,position:e,ref:n},l.createElement(o.u,null,t))}function v(){const e=(0,c.Sx)(),t=(0,l.useCallback)((t=>{t.preventDefault(),e.locate({setView:!0})}),[e]);return l.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},l.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},l.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},l.createElement(p.G,{icon:f.KS0}))))}function y(e){return(0,l.useMemo)((()=>r().featureGroup(e.map((({position:{lat:e,lng:t}})=>r().marker([e,t])))).getBounds()),[])}function w({bounds:e,center:t,setCenter:n,list:i}){(0,l.useEffect)((()=>{delete r().Icon.Default.prototype._getIconUrl,r().Icon.Default.mergeOptions({iconRetinaUrl:a(1963).Z,iconUrl:a(379).Z,shadowUrl:a(6179).Z})}),[]);const[o,c]=(0,l.useState)(null),p=(0,l.useMemo)((()=>l.createElement(s.h,{bounds:e,whenCreated:c,zoom:13,className:h()(E.Z.Map)},l.createElement(u.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.createElement(b,{position:t,setPosition:n},`${t.lat},${t.lng}`),i.map((({i:e,id:a,position:n,name:r,item:i})=>l.createElement(m.c,{key:e,center:n,pathOptions:{color:"purple"}},l.createElement(d.G,{minWidth:90},l.createElement("section",null,l.createElement("header",null,`[${a}] ${r} (${t.distanceTo(n).toFixed(0)/1e3} km)`)))))),l.createElement(v,null))),[i,t]);return l.createElement("div",{className:h()(E.Z.Layout)},p)}},4001:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var l=a(2784),n=a(357),r=a(1927),i=a.n(r),o=a(2779),c=a.n(o),s=a(9635),u=a(1148),m=a(5120),d=a(2335),p=a(6982),f=a(7831);const{width:g,height:h,left:E,right:b,top:v,bottom:y}={width:320,height:200,left:10,right:10,top:20,bottom:20},w={accessoriesPrice:"accessoriesPrice",age:"age",capacity:"capacity",consumptionFuel:"consumptionFuel",emission:"emission",id:"id",images:"images",mileage:"mileage",newPrice:"newPrice",optionsPrice:"optionsPrice",powerHP:"powerHP",powerKW:"powerKW",productionYear:"productionYear",transactionalPrice:"transactionalPrice",warranty:"warranty"};function C({list:e}){const[t,a]=(0,l.useState)(null),[{xProp:n,yProp:r},i]=(0,l.useState)((()=>({xProp:"transactionalPrice",yProp:"newPrice"}))),o=(0,l.useRef)(null),C=(0,l.useRef)(null),k=(0,l.useRef)(null),P=(0,l.useMemo)((()=>new u.x),[]);return(0,l.useEffect)((()=>{const e=P.pipe((0,d.w)((e=>(0,m.of)(e).pipe((0,p.g)(e?0:800))))).subscribe((e=>a(e)));return()=>e.unsubscribe()}),[P]),(0,l.useEffect)((()=>{const t=e.slice(0,2e3).map((({item:e})=>[e[n],e[r],`[${e.id}] ${e.title}`])),a=t.map((([e=0])=>e)),l=t.map((([,e=0])=>e)),i=[Math.min(...a),Math.max(...a)],c=[Math.min(...l),Math.max(...l)],u=(0,s.BYU)().domain(i).range([E,g-b]),m=(0,s.BYU)().domain(c).range([h-y,v]),d=(0,s.BYU)().domain(i).range(["red","blue"]);(0,s.Ys)(k.current).selectAll("circle").remove(),(0,s.Ys)(k.current).selectAll("circle").data(t).join((e=>e.append("circle").attr("cx",(([e=0])=>u(e))).attr("cy",(([,e=0])=>m(e))).attr("r",0).attr("fill",(([e=0])=>d(e))).on("mouseover",((e,[,,t])=>P.next({left:e.layerX,top:e.layerY,label:t}))).on("mouseout",((e,t)=>P.next(null))).call((e=>e.transition().duration(200).attr("r",2).style("opacity",1)))),(e=>e.attr("fill","lightgrey")),(e=>e.attr("fill","tomato").call((e=>e.transition().duration(200).attr("r",0).style("opacity",0).remove()))));const p=(0,s.LLu)(u).ticks(5).tickSizeOuter(0);(0,s.Ys)(o.current).call(p);const f=(0,s.y4O)(m).ticks(5).tickSizeOuter(0);(0,s.Ys)(C.current).call(f)}),[e,n,r]),l.createElement("div",{className:c()(f.Z.Chart)},l.createElement("fieldset",null,l.createElement("label",null,l.createElement("span",null,"x"),l.createElement("select",{value:n,onChange:e=>i((t=>({...t,xProp:e.target.value})))},Object.entries(w).map((([e,t])=>l.createElement("option",{key:e,value:e},t))))),l.createElement("label",null,l.createElement("span",null,"y"),l.createElement("select",{value:r,onChange:e=>i((t=>({...t,yProp:e.target.value})))},Object.entries(w).map((([e,t])=>l.createElement("option",{key:e,value:e},t)))))),l.createElement("svg",{ref:k,width:g,height:h,viewBox:`0, 0, ${g}, ${h}`},l.createElement("g",{transform:`translate(0, ${h-y})`,ref:o}),l.createElement("g",{transform:`translate(${E}, 0)`,ref:C})),t&&l.createElement("div",{className:f.Z.Tooltip,style:{top:t.top,left:t.left}},t.label))}var k=a(8479),P=a(4772),S=a(9757);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const Z=[1,3,5,10,20,50,100,500],N=[0,1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6],j={"":"",N:"New",U:"Used"},O=[...Array(15)].map(((e,t)=>(new Date).getFullYear()-t)).reverse(),Y=(0,n.k)((async e=>{const t=await fetch(`api/vehicles/data.json?${e}`);return await t.json().then((({$list:e})=>({results:e,options:e.reduce(((e,t)=>["bodyType","brand","color","emissionStandard","fuel","series","seriesCode","modelCode","transmission"].reduce(((e,a)=>({...e,[a]:Object.assign({},e[a],"object"==typeof t[a]?{[t[a].id]:t[a].label}:{[t[a]]:t[a]})})),e)),{})}))).then((({options:e,...t})=>(Object.keys(e).forEach((t=>Object.assign(e,{[t]:Object.entries(e[t]).sort((([e],[t])=>String(e)>String(t)?1:-1)).reduce(((e,[t,a])=>Object.assign(e,{[t]:a})),{})}))),{options:e,...t})))}));function $({images:e}){return e.length?l.createElement("div",{className:S.Z.Gallery},e.map(((e,t)=>l.createElement("img",{key:t,src:e,alt:`Image #${t+1}`,referrerPolicy:"no-referrer"})))):null}function M({...e}){return l.createElement("button",e)}function z({color:e}){return l.createElement("a",{className:S.Z.Color,style:{backgroundColor:e.code},title:e.label})}function T({href:e,...t}){const a="#"===e[0];return l.createElement("a",x({href:e,target:a?void 0:"_blank",rel:a?void 0:"noopener noreferrer"},t))}function A({version:e="v1"}){const{results:t,options:a}=Y.read(e),[n,r]=(0,l.useState)(""),[o]=(0,P.Z)(n),c=(0,l.useCallback)((({target:e})=>r(e.value)),[]),[s,u]=(0,l.useState)((()=>Object.keys(a).reduce(((e,t)=>Object.assign(e,{[t]:""})),{}))),m=(0,l.useCallback)((({target:e})=>u((t=>({...t,[e.name]:e.value})))),[]),[d,p]=(0,l.useState)(""),f=(0,l.useCallback)((({target:e})=>p(e.value)),[]),[g,h]=(0,l.useState)(Z[Z.length-1]),E=(0,l.useCallback)((({target:e})=>h(Number(e.value))),[]),[b,v]=(0,l.useState)(N[0]),[y,w]=(0,l.useState)(N[N.length-1]),x=(0,l.useCallback)((({target:e})=>w((t=>{const a=Number(e.value);return v(a),t<a?a:t}))),[]),M=(0,l.useCallback)((({target:e})=>v((t=>{const a=Number(e.value);return w(a),a>t?t:a}))),[]),[z,T]=(0,l.useState)(O[0]),[A,F]=(0,l.useState)(O[O.length-1]),L=(0,l.useCallback)((({target:e})=>F((t=>{const a=Number(e.value);return T(a),t<a?a:t}))),[]),_=(0,l.useCallback)((({target:e})=>T((t=>{const a=Number(e.value);return F(a),a>t?t:a}))),[]),W=(0,l.useCallback)((({target:e})=>{const a=Number(e.value),l=e=>[e.capacity,e.powerHP,e.consumptionFuel,e.emission,e.newPrice,e.optionsPrice,e.productionYear,e.age,e.mileage,e.transactionalPrice,e.warranty],n=i()(t.map(l));console.table(n.knn(l(t.find((e=>e.id===a)))).slice(0,10).map((e=>t[e])).map((e=>[e.id,e.title,e.capacity,e.powerHP,e.consumptionFuel,e.emission,e.newPrice,e.optionsPrice,e.productionYear,e.age,e.mileage,e.transactionalPrice,e.warranty])))}),[]);console.log({options:a,results:t});const G=(0,l.useMemo)((()=>t.map(((e,t)=>{const{id:a,dealer:{name:l,lat:n,lng:r}}=e;return{i:t,id:a,position:{lat:n,lng:r},name:l,item:e}})).filter((({item:e})=>(e.title.toLowerCase().match(o)||o.trim()===String(e.id))&&["",e.isNew?"N":"U"].includes(d)&&b<=e.transactionalPrice&&e.transactionalPrice<=y&&z<=e.productionYear&&e.productionYear<=A&&-1===Object.entries(s).findIndex((([t,a])=>![String("object"==typeof e[t]?e[t].id:e[t]),""].includes(a)))))),[t,o,d,s,z,A,b,y]),K=(0,k.B)(G.length?G:[{position:{lat:52.232855,lng:20.921111}}]),[U,H]=(0,l.useState)((()=>K.getCenter())),R=(0,l.useMemo)((()=>G.filter((({position:e})=>U.distanceTo(e)<1e3*g))),[G,U,g]);return l.createElement("div",null,l.createElement(k.Z,{bounds:K,center:U,setCenter:H,list:R}),l.createElement(C,{list:G}),l.createElement("fieldset",null,l.createElement("div",null,l.createElement("label",null,l.createElement("span",null,"Type"),l.createElement("select",{value:d,onChange:f},Object.entries(j).map((([e,t])=>l.createElement("option",{key:e,value:e},t))))),l.createElement("label",null,l.createElement("span",null,"Search"),l.createElement("input",{type:"search",value:n,onChange:c})),l.createElement("label",null,l.createElement("span",null,"Radius"),l.createElement("input",{type:"range",list:"range-list",min:Z[0],max:Z[Z.length-1],value:g,onChange:E}),l.createElement("datalist",{id:"range-list"},Z.map((e=>l.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?`${e} km`:void 0})))),l.createElement("span",null,`max ${g} km`))),l.createElement("div",null,l.createElement("label",null,l.createElement("span",null,"Year From"),l.createElement("input",{type:"range",list:"year-list",min:O[0],max:O[O.length-1],value:z,onChange:L}),l.createElement("datalist",{id:"year-list"},O.map((e=>l.createElement("option",{key:e,value:e,label:[0,2010,2015,2020].includes(e)?`${e}`:void 0}))))),l.createElement("label",null,l.createElement("span",null,"Year To"),l.createElement("input",{type:"range",list:"year-list",min:O[0],max:O[O.length-1],value:A,onChange:_}),l.createElement("span",null,`${z}-${A}`))),l.createElement("div",null,l.createElement("label",null,l.createElement("span",null,"Price From"),l.createElement("input",{type:"range",list:"price-list",min:N[0],max:N[N.length-1],value:b,onChange:x}),l.createElement("datalist",{id:"price-list"},N.map((e=>l.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?`${e} pln`:void 0}))))),l.createElement("label",null,l.createElement("span",null,"Price To"),l.createElement("input",{type:"range",list:"price-list",min:N[0],max:N[N.length-1],value:y,onChange:M}),l.createElement("span",null,`${b}-${y} pln`))),Object.entries(s).map((([e,t],n)=>l.createElement("div",{key:n},l.createElement("label",null,l.createElement("span",null,e),l.createElement("select",{name:e,value:t,onChange:m},l.createElement("option",{value:""},"--"),Object.entries(a[e]).map((([e,t])=>l.createElement("option",{key:e,value:e},t))))))))),l.createElement("div",null,`Found ${G.length} vehicles out of a total of ${t.length}`),l.createElement("ol",null,G.slice(0,100).map((({item:e})=>e)).map((({id:e,images:t,...a},n)=>l.createElement("li",{key:n,className:S.Z.Row},l.createElement($,{images:[...Array(t)].slice(0,3).map(((t,a,l,n="322/255b28ffdad35cd984ff32f30da17158")=>`//najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/${n}/${e}-${a}`))}),l.createElement(B,{item:{id:e,...a},onClickCompare:W}),Object.entries(a._history).reverse().map((([t,n],r,i)=>l.createElement(B,{key:t,_time:t,item:{id:e,...n},onClickCompare:W,prev:r?i[r-1][1]:a}))))))))}function B({_time:e,item:t,onClickCompare:a,prev:n}){const{id:r,title:i,brand:o,series:s={},seriesCode:u,bodyType:m,modelCode:d,fuel:p,color:f,transmission:g,capacity:h,consumptionFuel:E,emissionStandard:b,emissionMeasurementStandard:v,emission:y,powerHP:w,productionYear:C,registration:k,age:P,mileage:x,transactionalPrice:Z,newPrice:N,warranty:j,created:O,imagesLastChanged:Y}=t,$=e=>t&&n&&t[e]!==n[e];return l.createElement("ul",{className:S.Z.Details},l.createElement("li",null,l.createElement(z,{color:f}),l.createElement(T,{href:`//najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/${r}/`},`[${r}] ${i}`),l.createElement(M,{onClick:a,value:r},"Compare")),l.createElement("li",null,"[",u,"] ",o.label," ",s.label," ",m.label," ",p.label," ",g.label),l.createElement("li",null,"[",d,"] capacity: ",h," powerHP: ",w," consumptionFuel:"," ",E," emissionStandard: ",b.label," ",v," ",y),l.createElement("li",null,"productionYear: ",C," newPrice: ",N," registration:"," ",k?k.split("T")[0]:"-"),l.createElement("li",null,l.createElement("span",{className:c()(S.Z.Compare,$("transactionalPrice")&&S.Z.changed)},"transactionalPrice: ",Z)," ",l.createElement("span",{className:c()(S.Z.Compare,$("age")&&S.Z.changed)},"age: ",P)," ",l.createElement("span",{className:c()(S.Z.Compare,$("mileage")&&S.Z.changed)},"mileage: ",x)," ",l.createElement("span",{className:c()(S.Z.Compare,$("warranty")&&S.Z.changed)},"warranty: ",j)),l.createElement("li",null,"[",e?new Date(Number(e)).toISOString():"-","] ",O," ","(imagesLastChanged: ",Y,")"))}function F(){return l.createElement("div",{className:S.Z.Section},l.createElement("h2",null,"Vehicles"),l.createElement(A,null))}},4772:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(2784);function n(e){const[t,a]=(0,l.useState)(e),n=(0,l.useRef)();return(0,l.useEffect)((()=>(clearTimeout(n.current),n.current=setTimeout((()=>a(e.toLowerCase())),400),()=>{clearTimeout(n.current)})),[e]),[t]}},6583:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(9601),n=a.n(l),r=a(2609),i=a.n(r)()(n());i.push([e.id,".jym2UAfwYghQzKOP2VHa{position:relative;border:2px solid red}.jym2UAfwYghQzKOP2VHa svg{width:100%;height:50vh}.jym2UAfwYghQzKOP2VHa .s381NcqWwmo0Qir3pBAh{position:absolute}.s381NcqWwmo0Qir3pBAh{background:#fff;border:1px solid #add8e6;color:orange;padding:.25em}",""]),i.locals={Chart:"jym2UAfwYghQzKOP2VHa",Tooltip:"s381NcqWwmo0Qir3pBAh"};const o=i},1617:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var l=a(9601),n=a.n(l),r=a(2609),i=a.n(r),o=a(9138),c=i()(n());c.i(o.Z),c.push([e.id,".vXpyyqKMf2Eg0uZBGb3A{height:75vh;border:2px solid red}.vXpyyqKMf2Eg0uZBGb3A header{font-weight:bold}",""]),c.locals={Map:"vXpyyqKMf2Eg0uZBGb3A"};const s=c},303:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(9601),n=a.n(l),r=a(2609),i=a.n(r)()(n());i.push([e.id,".dnNulWhTs84wB_yi0tu2{color:green}.eZcT7zT7zcKeynqlJ5cC{clear:both}.LihBxmStNILK5SsWSml4{display:inline-block;width:1em;height:1em;border:2px solid #000;border-radius:50%}.WV27lBhC9zjxECQGlM6O{float:left;width:200px;height:150px;overflow-x:auto;display:flex;flex-direction:row;scroll-snap-type:x mandatory}.WV27lBhC9zjxECQGlM6O img{max-width:100%;scroll-snap-align:center}.REcFotXkdh1Z8ismoSwA{color:gray}.REcFotXkdh1Z8ismoSwA .FEMh9gY8aLCa_GmJxYqs{color:#000}.REcFotXkdh1Z8ismoSwA .FEMh9gY8aLCa_GmJxYqs.MS_t7pWYsJpHZMz6NksN{color:red}",""]),i.locals={Section:"dnNulWhTs84wB_yi0tu2",Row:"eZcT7zT7zcKeynqlJ5cC",Color:"LihBxmStNILK5SsWSml4",Gallery:"WV27lBhC9zjxECQGlM6O",Details:"REcFotXkdh1Z8ismoSwA",Compare:"FEMh9gY8aLCa_GmJxYqs",changed:"MS_t7pWYsJpHZMz6NksN"};const o=i},7831:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(6062),n=a.n(l),r=a(4036),i=a.n(r),o=a(6793),c=a.n(o),s=a(7892),u=a.n(s),m=a(1173),d=a.n(m),p=a(2464),f=a.n(p),g=a(6583),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d();var E=n()(g.default,h);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,v=b?g:g.default.locals;e.hot.accept(6583,(t=>{g=a(6583),function(e,t,a){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!a||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(a&&"default"===l||e[l]))return!1;return!0}(v,b?g:g.default.locals,b)?(v=b?g:g.default.locals,E(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=g.default&&g.default.locals?g.default.locals:void 0},1231:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(6062),n=a.n(l),r=a(4036),i=a.n(r),o=a(6793),c=a.n(o),s=a(7892),u=a.n(s),m=a(1173),d=a.n(m),p=a(2464),f=a.n(p),g=a(1617),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d();var E=n()(g.default,h);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,v=b?g:g.default.locals;e.hot.accept(1617,(t=>{g=a(1617),function(e,t,a){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!a||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(a&&"default"===l||e[l]))return!1;return!0}(v,b?g:g.default.locals,b)?(v=b?g:g.default.locals,E(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=g.default&&g.default.locals?g.default.locals:void 0},9757:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(6062),n=a.n(l),r=a(4036),i=a.n(r),o=a(6793),c=a.n(o),s=a(7892),u=a.n(s),m=a(1173),d=a.n(m),p=a(2464),f=a.n(p),g=a(303),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d();var E=n()(g.default,h);if(!g.default.locals||e.hot.invalidate){var b=!g.default.locals,v=b?g:g.default.locals;e.hot.accept(303,(t=>{g=a(303),function(e,t,a){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!a||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(a&&"default"===l||e[l]))return!1;return!0}(v,b?g:g.default.locals,b)?(v=b?g:g.default.locals,E(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=g.default&&g.default.locals?g.default.locals:void 0}}]);