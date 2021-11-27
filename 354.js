"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[354],{8479:(e,t,n)=>{n.d(t,{B:()=>w,Z:()=>Z});var r=n(7946),a=n(2784),l=n(5062),i=n.n(l),o=n(809),c=n(7234),u=n(5804),s=n(493),m=n(8969),p=n(9982),d=n(6127),f=n(9530),v=n(5096),g=n(2779),E=n.n(g),y=n(1231);function b(e){var t=e.position,n=e.children,r=e.setPosition,l=(0,a.useRef)(null),i=(0,a.useMemo)((function(){return{dragend:function(){var e=l.current;null!=e&&r(e.getLatLng())}}}),[]);return a.createElement(o.J,{draggable:!0,eventHandlers:i,position:t,ref:l},a.createElement(c.u,null,n))}function h(){var e=(0,u.Sx)(),t=(0,a.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return a.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},a.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},a.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},a.createElement(f.G,{icon:v.KS0}))))}function w(e){return(0,a.useMemo)((function(){return i().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return i().marker([n,r])}))).getBounds()}),[])}function Z(e){var t=e.bounds,l=e.center,o=e.setCenter,c=e.list;(0,a.useEffect)((function(){delete i().Icon.Default.prototype._getIconUrl,i().Icon.Default.mergeOptions({iconRetinaUrl:n(1963).Z,iconUrl:n(379).Z,shadowUrl:n(6179).Z})}),[]);var u=(0,a.useState)(null),f=(0,r.Z)(u,2),v=(f[0],f[1]),g=(0,a.useMemo)((function(){return a.createElement(s.h,{bounds:t,whenCreated:v,zoom:13,className:E()(y.Z.Map)},a.createElement(m.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.createElement(b,{position:l,setPosition:o},"".concat(l.lat,",").concat(l.lng)),c.map((function(e){var t=e.i,n=e.id,r=e.position,i=e.name;return e.item,a.createElement(p.c,{key:t,center:r,pathOptions:{color:"purple"}},a.createElement(d.G,{minWidth:90},a.createElement("section",null,a.createElement("header",null,"[".concat(n,"] ").concat(i," (").concat(l.distanceTo(r).toFixed(0)/1e3," km)")))))})),a.createElement(h,null))}),[c,l]);return a.createElement("div",{className:E()(y.Z.Layout)},g)}},354:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Oe});var r=n(203),a=n(7946),l=n(9151),i=n(965),o=n(1283),c=n(2451),u=n(369),s=n(7162),m=n.n(s),p=n(2784),d=n(1148),f=n(7984),v=n(9369),g=n(8871),E=n(357),y=n(1927),b=n.n(y),h=n(7704),w=n(9561),Z=n(4819),C=n.n(Z),P=n(2779),k=n.n(P),O=n(9635),x=n(5120),T=n(2335),F=n(9468),j=n(7831);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=200,B={accessoriesPrice:"accessoriesPrice",age:"age",capacity:"capacity",consumptionFuel:"consumptionFuel",emission:"emission",id:"id",images:"images",mileage:"mileage",newPrice:"newPrice",optionsPrice:"optionsPrice",powerHP:"powerHP",powerKW:"powerKW",productionYear:"productionYear",transactionalPrice:"transactionalPrice",warranty:"warranty"};function M(e){var t=e.list,n=e.onSelect,r=(0,p.useState)(null),l=(0,a.Z)(r,2),i=l[0],o=l[1],c=(0,p.useState)((function(){return{xProp:"transactionalPrice",yProp:"newPrice"}})),s=(0,a.Z)(c,2),m=s[0],f=m.xProp,v=m.yProp,g=s[1],E=(0,p.useRef)(null),y=(0,p.useRef)(null),b=(0,p.useRef)(null),h=(0,p.useMemo)((function(){return new d.x}),[]);return(0,p.useEffect)((function(){var e=h.pipe((0,T.w)((function(e){return(0,x.of)(e).pipe((0,F.g)(e?0:800))}))).subscribe((function(e){return o(e)}));return function(){return e.unsubscribe()}}),[h]),(0,p.useEffect)((function(){var e=t.slice(0,2e3).map((function(e){var t=e.item;return[t[f],t[v],"[".concat(t.id,"] ").concat(t.title),t.id]})),r=e.map((function(e){var t=(0,a.Z)(e,1)[0];return void 0===t?0:t})),l=e.map((function(e){var t=(0,a.Z)(e,2)[1];return void 0===t?0:t})),i=[Math.min.apply(Math,(0,u.Z)(r)),Math.max.apply(Math,(0,u.Z)(r))],o=[Math.min.apply(Math,(0,u.Z)(l)),Math.max.apply(Math,(0,u.Z)(l))],c=(0,O.BYU)().domain(i).range([10,310]),s=(0,O.BYU)().domain(o).range([180,20]),m=(0,O.BYU)().domain(i).range(["red","blue"]);(0,O.Ys)(b.current).selectAll("circle").remove(),(0,O.Ys)(b.current).selectAll("circle").data(e).join((function(e){return e.append("circle").attr("cx",(function(e){var t=(0,a.Z)(e,1)[0];return c(void 0===t?0:t)})).attr("cy",(function(e){var t=(0,a.Z)(e,2)[1];return s(void 0===t?0:t)})).attr("r",0).attr("fill",(function(e){var t=(0,a.Z)(e,1)[0];return m(void 0===t?0:t)})).on("click",(function(e,t){var r=(0,a.Z)(t,4)[3];return n(r)})).on("mouseover",(function(e,t){var n=(0,a.Z)(t,3)[2];return h.next({left:e.layerX,top:e.layerY,label:n})})).on("mouseout",(function(e,t){return h.next(null)})).call((function(e){return e.transition().duration(200).attr("r",2).style("opacity",1)}))}),(function(e){return e.attr("fill","lightgrey")}),(function(e){return e.attr("fill","tomato").call((function(e){return e.transition().duration(200).attr("r",0).style("opacity",0).remove()}))}));var p=(0,O.LLu)(c).ticks(5).tickSizeOuter(0);(0,O.Ys)(E.current).call(p);var d=(0,O.y4O)(s).ticks(5).tickSizeOuter(0);(0,O.Ys)(y.current).call(d)}),[t,f,v]),p.createElement("div",{className:k()(j.Z.Chart)},p.createElement("fieldset",null,p.createElement("label",null,p.createElement("span",null,"x"),p.createElement("select",{value:f,onChange:function(e){return g((function(t){return S(S({},t),{},{xProp:e.target.value})}))}},Object.entries(B).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)})))),p.createElement("label",null,p.createElement("span",null,"y"),p.createElement("select",{value:v,onChange:function(e){return g((function(t){return S(S({},t),{},{yProp:e.target.value})}))}},Object.entries(B).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)}))))),p.createElement("svg",{ref:b,width:320,height:Y,viewBox:"0, 0, ".concat(320,", ").concat(Y)},p.createElement("g",{transform:"translate(0, ".concat(180,")"),ref:E}),p.createElement("g",{transform:"translate(".concat(10,", 0)"),ref:y})),i&&p.createElement("div",{className:j.Z.Tooltip,style:{top:i.top,left:i.left}},i.label))}var _=n(8479),z=function(e){var t=e.height,n=void 0===t?80:t,r=e.width,a=void 0===r?80:r,l=e.color,i=void 0===l?"green":l,o=e.radius,c=void 0===o?1:o,u=e.label,s=void 0===u?"audio-loading":u;return p.createElement("svg",{width:a,height:n,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":s},p.createElement("defs",null,p.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},p.createElement("stop",{stopColor:i,stopOpacity:"0",offset:"0%"}),p.createElement("stop",{stopColor:i,stopOpacity:".631",offset:"63.146%"}),p.createElement("stop",{stopColor:i,offset:"100%"}))),p.createElement("g",{fill:"none",fillRule:"evenodd"},p.createElement("g",{transform:"translate(1 1)"},p.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:i,strokeWidth:"2"},p.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),p.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:c},p.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},L=n(9757),R=["_id","_created","_updated"],A=["_id","_created","_updated"],U=["options"],D=["src"],W=["children"],H=["href"],K=["id","images"],G=["entries"],I=["priceTo"],V=["priceFrom"],q=["mileageTo"],Q=["mileageFrom"],J=["powerTo"],X=["powerFrom"],$=["yearTo"],ee=["yearFrom"];function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re={created:-1,registration:-1,transactionalPrice:1,mileage:1,consumptionFuel:1,productionYear:-1,powerHP:-1,newPrice:-1,optionsPrice:-1,accessoriesPrice:-1,warranty:-1,modelCode:1,seriesCode:1,title:1},ae=[1,3,5,10,20,50,100,500],le=[0,1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6],ie=[0,1e3,5e3,1e4,2e4,5e4,1e5,15e4,2e5,5e5],oe=[0,100,150,200,250,300,400,500,600,700,800,900],ce={"":"",N:"New",U:"Used"},ue=(0,u.Z)(Array(15)).map((function(e,t){return(new Date).getFullYear()-t})).reverse(),se=(0,w.Z)("criterion-vehicles"),me=(0,w.Z)("favorites-vehicles"),pe=(0,E.k)(function(){var e=(0,c.Z)(m().mark((function e(t){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/vehicles/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){var t=e.$list,n=void 0===t?[]:t,r=e.vehicleBasic,a=void 0===r?[]:r;return[].concat(n.map((function(e){var t,n,r,a,l,i,c,s,m,p,d,f,v,g,E,y,b,h,w,Z,C,P,k,O,x,T,F,j=e._id,N=e._created,S=e._updated,Y=(0,o.Z)(e,R);return ne(ne({_id:j,_created:N,_updated:S,source:Y,title:Y.title,dealer:(T=Y,F=T.dealer,{id:F.id,name:F.name,lat:F.lat,lng:F.lng})},(a=(r=Y).id,l=r.isNew,i=r.vatReclaimable,c=r.warranty,s=r.productionYear,m=r.newPrice,p=r.optionsPrice,d=r.accessoriesPrice,f=r.transactionalPrice,v=r.brand,g=r.bodyType,E=r.series,y=r.seriesCode,b=r.modelCode,h=r.powerHP,w=r.powerKW,Z=r.capacity,C=r.fuel,P=r.consumptionFuel,k=r.transmission,O=r.color,x=r.images,{id:a,href:"//najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/".concat(a,"/"),isNew:l,newPrice:m,optionsPrice:p,accessoriesPrice:d,vatReclaimable:i,warranty:Boolean(c>0)?1:0,productionYear:s,transactionalPrice:f,brand:v,bodyType:g,series:E,seriesCode:y,modelCode:b,powerHP:h,powerKW:w,capacity:Z,fuel:C,consumptionFuel:P,transmission:k,color:O,images:(0,u.Z)(Array(x)).map((function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"322/255b28ffdad35cd984ff32f30da17158";return"//najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/".concat(r,"/").concat(a,"-").concat(t)}))})),Y.isNew?{}:(n=(t=Y).mileage,{registration:t.registration,mileage:n}))}))).concat(a.map((function(e){var t,n,r,a,l,c,u,s,m,p=e._id,d=e._created,f=e._updated,v=(0,o.Z)(e,A);return ne(ne({_id:p,_created:d,_updated:f,source:v,title:v.model.description,dealer:(l=v,c=l.dealer,u=c.id,s=c.name,m=c.geoLocation,{id:u,name:s,lat:m.lat,lng:m.lon})},function(e){var t,n,r,a,l,o,c,u,s,m,p,d,f,v=e.id,g=e.carId,E=e.used,y=e.vatReclaimable,b=e.warrantyPlus,h=e.productionYear,w=e.typedPrices,Z=e.brand,C=e.model,P=e.symbolicCarline,k=e.symbolicCarlineGroup,O=e.bodyType,x=e.driveType,T=e.gearBox,F=e.powerDisplay,j=void 0===F?"":F,N=e.io.fuels,S=e.gearType,Y=e.extColor,B=e.pictures,M=void 0===B?[]:B;return ne(ne(ne({id:g,href:"//www.audi.pl/pl/web/pl/wyszukiwarka-samochodow-uzywanych/details.sc_detail.".concat(v,".html"),isNew:!Boolean(E),vatReclaimable:y,warranty:b?1:0,productionYear:h,transactionalPrice:w[0].amount,brand:(p=Z,d=p.code,f=p.description,{id:d,label:void 0===f?"Audi":f}),series:(m=k||{},{id:m.code,label:m.description}),seriesCode:(s=P,{id:s.code,label:s.description}),modelCode:(u=C,{id:u.code,label:u.description}),bodyType:(c=O||{},{id:c.code,label:c.description}),driveType:(o=x||{},{id:o.code,label:o.description})},(l=j.match(/(\d+) kW \((\d+) KM\)/))?{powerKW:Number(l[1]),powerHP:Number(l[2])}:{}),N?{fuel:{DIESEL:{id:2,label:"Diesel"},PETROL:{id:1,label:"Benzyna"},ELECTRICAL:{id:3,label:"Elektryczny"}}[N[0].fuel]||{},consumptionFuel:(r=N[0],a=r.consumption.consolidated.value,Number(a.replace(",",".")))}:{fuel:{}}),{},{gearBox:(n=T||{},{id:n.code,label:n.description}),transmission:function(e){var t,n=e.code,r=e.description;return{id:(t={},(0,i.Z)(t,"gear-type.automatic",0),(0,i.Z)(t,"gear-type.null",0),(0,i.Z)(t,"gear-type.manual",1),t)[n],label:r}}(S),color:(t=Y,{id:t.code,label:t.description}),images:null!=E&&E.pictureUrls?E.pictureUrls:M.map((function(e){return e.url}))})}(v)),"N"===v.type?{}:(n=(t=v.used).numPreviousOwners,r=t.mileage,a=t.initialRegistrationDate,{numPreviousOwners:n,registration:new Date(a).toISOString(),mileage:r}))})))})).then((function(e){return e.sort((function(e,t){return e._id>t._id?1:-1}))})).then((function(e){return{results:e,options:e.reduce((function(e,t){return["dealer","bodyType","driveType","brand","color","fuel","series","seriesCode","modelCode","transmission","gearBox","warranty"].reduce((function(e,n){return ne(ne({},e),{},(0,i.Z)({},n,Object.assign({},e[n],"object"===(0,l.Z)(t[n])?(0,i.Z)({},t[n].id,t[n].label||t[n].name):(0,i.Z)({},t[n],t[n]))))}),e)}),{})}})).then((function(e){var t=e.options,n=(0,o.Z)(e,U);return Object.keys(t).forEach((function(e){return Object.assign(t,(0,i.Z)({},e,Object.entries(t[e]).sort((function(e,t){var n=(0,a.Z)(e,1)[0],r=(0,a.Z)(t,1)[0];return String(n)>String(r)?1:-1})).reduce((function(e,t){var n=(0,a.Z)(t,2),r=n[0],l=n[1];return Object.assign(e,(0,i.Z)({},r,l))}),{})))})),ne({options:t},n)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),de=(0,E.k)(function(){var e=(0,c.Z)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=new Image;Object.assign(n,{onload:e,src:t})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function fe(e){var t=e.src,n=(0,o.Z)(e,D);return de.read(t),p.createElement("img",(0,r.Z)({src:t},n,{referrerPolicy:"no-referrer"}))}function ve(){return p.createElement("div",{className:L.Z.Loader},p.createElement(z,null))}function ge(e){var t=e.images,n=(0,h.YD)({delay:100,triggerOnce:!0}),r=(0,a.Z)(n,2),l=r[0],i=r[1];return t.length?p.createElement("div",{ref:l,className:L.Z.Gallery},p.createElement(p.Suspense,{fallback:p.createElement(ve,null)},i&&t.map((function(e,t){return p.createElement(fe,{key:t,src:e,alt:"Image #".concat(t+1)})})))):null}function Ee(e){var t=(0,r.Z)({},e);return p.createElement("button",t)}function ye(e){var t=e.children,n=(0,o.Z)(e,W);return p.createElement("label",null,p.createElement("input",(0,r.Z)({type:"checkbox"},n)),p.createElement("span",null,t))}function be(e){var t=e.color;return p.createElement("a",{className:L.Z.Color,style:{backgroundColor:t.code},title:t.label})}function he(e){var t=e.href,n=void 0===t?"#":t,a=(0,o.Z)(e,H),l="#"===n[0];return p.createElement("a",(0,r.Z)({href:n,target:l?void 0:"_blank",rel:l?void 0:"noopener noreferrer"},a))}function we(e){var t=e.version,n=void 0===t?"v1":t,c=pe.read(n),u=c.results,s=c.options,m=(0,p.useState)(""),E=(0,a.Z)(m,2),y=E[0],h=E[1],w=(0,p.useState)((function(){return{filter:y,sortBy:"transactionalPrice",type:"",radius:ae[ae.length-1],priceFrom:le[0],priceTo:le[le.length-1],mileageFrom:ie[0],mileageTo:ie[ie.length-1],powerFrom:oe[0],powerTo:oe[oe.length-1],yearFrom:ue[0],yearTo:ue[ue.length-1],entries:Object.keys(s).reduce((function(e,t){return Object.assign(e,(0,i.Z)({},t,""))}),{})}})),Z=(0,a.Z)(w,2),C=Z[0],P=Z[1],k=(0,p.useMemo)((function(){return new d.x}),[]);(0,p.useEffect)((function(){var e=k.pipe((0,f.U)((function(e){return e.trim()})),(0,v.x)(),(0,g.b)(400)).subscribe((function(e){return P((function(t){return ne(ne({},t),{},{filter:e})}))}));return function(){return e.unsubscribe()}}),[k]),(0,p.useEffect)((function(){k.next(y)}),[y]);var O=(0,p.useCallback)((function(e){var t=e.target,n=Number(t.value),r=function(e){return[e.capacity,e.powerHP,e.consumptionFuel,e.emission,e.newPrice,e.optionsPrice,e.productionYear,e.age,e.mileage,e.transactionalPrice,e.warranty]},a=b()(u.map(r));console.table(a.knn(r(u.find((function(e){return e.id===n})))).slice(0,10).map((function(e){return u[e]})).map((function(e){return[e.id,e.title,e.capacity,e.powerHP,e.consumptionFuel,e.emission,e.newPrice,e.optionsPrice,e.productionYear,e.age,e.mileage,e.transactionalPrice,e.warranty]})))}),[]);console.log({options:s,results:u});var x=(0,p.useMemo)((function(){return u.map((function(e,t){var n=e.id,r=e.dealer,a=r.name;return{i:t,id:n,position:{lat:r.lat,lng:r.lng},name:a,item:e}})).filter((function(e){var t=e.item;return(t.title.toLowerCase().match(C.filter)||C.filter.split(",").map((function(e){return e.trim()})).includes(String(t.id)))&&["",t.isNew?"N":"U"].includes(C.type)&&C.priceFrom<=t.transactionalPrice&&t.transactionalPrice<=C.priceTo&&(void 0===t.mileage||C.mileageFrom<=t.mileage&&t.mileage<=C.mileageTo)&&C.powerFrom<=t.powerHP&&t.powerHP<=C.powerTo&&C.yearFrom<=t.productionYear&&t.productionYear<=C.yearTo&&-1===Object.entries(C.entries).findIndex((function(e){var n=(0,a.Z)(e,2),r=n[0],i=n[1];return![String("object"===(0,l.Z)(t[r])?t[r].id:t[r]),""].includes(i)}))}))}),[u,C]),T=(0,_.B)(x.length?x:[{position:{lat:"52.1530829",lng:"21.1104411"}}]),F=(0,p.useState)((function(){return T.getCenter()})),j=(0,a.Z)(F,2),N=j[0],S=j[1],Y=(0,p.useMemo)((function(){return x.filter((function(e){var t=e.position;return N.distanceTo(t)<1e3*C.radius}))}),[x,N,C.radius]),B=(0,p.useMemo)((function(){return x.sort((function(e,t){return re[C.sortBy]*(e.item[C.sortBy]>t.item[C.sortBy]?1:-1)}))}),[x,C.sortBy]),z=me([]),R=(0,a.Z)(z,2),A=R[0],U=R[1],D=se((function(){return{selected:"",list:[]}})),W=(0,a.Z)(D,2),H=W[0],G=W[1];return(0,p.useEffect)((function(){if(""!==H.selected){var e=H.list[H.selected].criteria;P(e),h(e.filter)}}),[P,h,H.selected]),p.createElement("div",null,p.createElement(_.Z,{bounds:T,center:N,setCenter:S,list:Y}),p.createElement(M,{list:x,onSelect:function(e){return h(String(e))}}),p.createElement(Pe,(0,r.Z)({},C,{options:s,setCriteria:P,search:y,setSearch:h})),p.createElement(Ce,(0,r.Z)({},C,{options:s})),p.createElement(Ze,{criterion:H,setCriterion:G,criteria:C}),A.length>0?p.createElement("div",null,"Your favorites: ".concat(A.map((function(e){return"[".concat(e,"]")})).join(", "))," ",p.createElement(he,{onClick:function(e){return e.preventDefault(),h(A.join(", "))}},"search")," ","|"," ",p.createElement(he,{onClick:function(e){return e.preventDefault(),U([])}},"clear")):p.createElement("div",null,"You don't have favorites"),p.createElement("div",null,"Found ".concat(x.length," vehicles out of a total of ").concat(u.length)),p.createElement("ol",null,B.slice(0,100).map((function(e){return e.item})).map((function(e,t){var n=e.id,r=e.images,l=(0,o.Z)(e,K);return p.createElement("li",{key:t,className:L.Z.Row},p.createElement(ge,{images:r.slice(0,5)}),p.createElement(ke,{item:ne({id:n},l),onClickCompare:O,favorites:A,setFavorites:U}),Object.entries(l._history||{}).reverse().map((function(e,t,r){var i=(0,a.Z)(e,2),o=i[0],c=i[1];return p.createElement(ke,{key:o,_time:o,item:ne({id:n},c),prev:t?r[t-1][1]:l})})))}))))}function Ze(e){var t=e.criterion,n=e.setCriterion,r=e.criteria,a=(0,p.useCallback)((function(){return n((function(e){return ne(ne({},e),{},{selected:String(e.list.length),list:e.list.concat([{label:prompt("Filter name:"),criteria:r}])})}))}),[t,r]),l=(0,p.useCallback)((function(){return n((function(e){return C()(e,{list:(0,i.Z)({},e.selected,{criteria:{$apply:function(){return r}}})})}))}),[t,r]),o=(0,p.useCallback)((function(){return n((function(e){return C()(e,{list:(0,i.Z)({},e.selected,{label:{$apply:function(e){return prompt("Rename filter:",e)}}})})}))}),[t]),c=(0,p.useCallback)((function(){return n((function(e){return ne(ne({},e),{},{selected:"",list:e.list.filter((function(t,n){return String(n)!==e.selected}))})}))}),[t]),u=(0,p.useCallback)((function(e){var t=e.target;return n((function(e){return ne(ne({},e),{},{selected:t.value})}))}),[t]),s=(0,p.useMemo)((function(){return""!==t.selected&&JSON.stringify(t.list[t.selected].criteria)===JSON.stringify(r)}),[t,r]);return p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Saved Filters"),p.createElement("select",{value:t.selected,onChange:u},p.createElement("option",{value:""},"--"),t.list.map((function(e,t){var n=e.label;return p.createElement("option",{key:t,value:String(t)},n)}))),""===t.selected?p.createElement("button",{onClick:a},"Save as new criteria"):p.createElement(p.Fragment,null,p.createElement("button",{onClick:l,disabled:s},"Update criteria"),p.createElement("button",{onClick:o},"Rename criteria"),p.createElement("button",{onClick:c},"Remove criteria"))))}function Ce(e){var t=e.filter,n=e.options,r=e.entries,l=e.type,i=e.yearFrom,o=e.yearTo,c=e.priceFrom,u=e.priceTo,s=e.mileageFrom,m=e.mileageTo,d=e.powerFrom,f=e.powerTo,v=e.radius,g=e.sortBy;return p.createElement("fieldset",null,l&&p.createElement("div",null,p.createElement("span",null,"Type")," ",p.createElement("span",null,ce[l])),t&&p.createElement("div",null,p.createElement("span",null,"Search")," ",p.createElement("span",null,t)),p.createElement("div",null,p.createElement("span",null,"Sort")," ",p.createElement("span",null,g)),p.createElement("div",null,p.createElement("span",null,"Radius")," ",p.createElement("span",null,"max ".concat(v," km"))),p.createElement("div",null,p.createElement("span",null,"Year")," ",p.createElement("span",null,"".concat(i,"-").concat(o))),p.createElement("div",null,p.createElement("span",null,"Mileage")," ",p.createElement("span",null,"".concat(s,"-").concat(m," km"))),p.createElement("div",null,p.createElement("span",null,"Price")," ",p.createElement("span",null,"".concat(c,"-").concat(u," pln"))),p.createElement("div",null,p.createElement("span",null,"Power")," ",p.createElement("span",null,"".concat(d,"-").concat(f," hp"))),Object.entries(r).filter((function(e){return""!==(0,a.Z)(e,2)[1]})).map((function(e,t){var r=(0,a.Z)(e,2),l=r[0],i=r[1];return p.createElement("div",{key:t},p.createElement("span",null,l)," ",p.createElement("span",null,n[l][i]))})))}function Pe(e){var t=e.search,n=e.options,r=e.entries,l=e.type,c=e.yearFrom,u=e.yearTo,s=e.priceFrom,m=e.priceTo,d=e.mileageFrom,f=e.mileageTo,v=e.powerFrom,g=e.powerTo,E=e.radius,y=e.setCriteria,b=e.setSearch,h=e.sortBy,w=(0,p.useCallback)((function(e){var t=e.target;return b(t.value)}),[]),Z=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){var n=e.entries;return ne(ne({},(0,o.Z)(e,G)),{},{entries:ne(ne({},n),{},(0,i.Z)({},t.name,t.value))})}))}),[]),C=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){return ne(ne({},e),{},{sortBy:t.value})}))}),[]),P=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){return ne(ne({},e),{},{type:t.value})}))}),[]),k=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){return ne(ne({},e),{},{radius:Number(t.value)})}))}),[]),O=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){var n=e.priceTo,r=(0,o.Z)(e,I),a=Number(t.value);return ne(ne({},r),{},{priceFrom:a,priceTo:n<a?a:n})}))}),[]),x=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){var n=e.priceFrom,r=(0,o.Z)(e,V),a=Number(t.value);return ne(ne({},r),{},{priceFrom:a>n?n:a,priceTo:a})}))}),[]),T=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){var n=e.mileageTo,r=(0,o.Z)(e,q),a=Number(t.value);return ne(ne({},r),{},{mileageFrom:a,mileageTo:n<a?a:n})}))}),[]),F=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){var n=e.mileageFrom,r=(0,o.Z)(e,Q),a=Number(t.value);return ne(ne({},r),{},{mileageFrom:a>n?n:a,mileageTo:a})}))}),[]),j=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){var n=e.powerTo,r=(0,o.Z)(e,J),a=Number(t.value);return ne(ne({},r),{},{powerFrom:a,powerTo:n<a?a:n})}))}),[]),N=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){var n=e.powerFrom,r=(0,o.Z)(e,X),a=Number(t.value);return ne(ne({},r),{},{powerFrom:a>n?n:a,powerTo:a})}))}),[]),S=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){var n=e.yearTo,r=(0,o.Z)(e,$),a=Number(t.value);return ne(ne({},r),{},{yearFrom:a,yearTo:n<a?a:n})}))}),[]),Y=(0,p.useCallback)((function(e){var t=e.target;return y((function(e){var n=e.yearFrom,r=(0,o.Z)(e,ee),a=Number(t.value);return ne(ne({},r),{},{yearFrom:a>n?n:a,yearTo:a})}))}),[]);return p.createElement("fieldset",null,p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Type"),p.createElement("select",{value:l,onChange:P},Object.entries(ce).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)})))),p.createElement("label",null,p.createElement("span",null,"Search"),p.createElement("input",{type:"search",value:t,onChange:w})),p.createElement("label",null,p.createElement("span",null,"Sort"),p.createElement("select",{value:h,onChange:C},Object.entries(re).map((function(e){var t=(0,a.Z)(e,1)[0];return p.createElement("option",{key:t,value:t},t)})))),p.createElement("label",null,p.createElement("span",null,"Radius"),p.createElement("input",{type:"range",list:"range-list",min:ae[0],max:ae[ae.length-1],value:E,onChange:k}),p.createElement("datalist",{id:"range-list"},ae.map((function(e){return p.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?"".concat(e," km"):void 0})}))),p.createElement("span",null,"max ".concat(E," km")))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Year From"),p.createElement("input",{type:"range",list:"year-list",min:ue[0],max:ue[ue.length-1],value:c,onChange:S}),p.createElement("datalist",{id:"year-list"},ue.map((function(e){return p.createElement("option",{key:e,value:e,label:[0,2010,2015,2020].includes(e)?"".concat(e):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Year To"),p.createElement("input",{type:"range",list:"year-list",min:ue[0],max:ue[ue.length-1],value:u,onChange:Y}),p.createElement("span",null,"".concat(c,"-").concat(u)))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Mileage From"),p.createElement("input",{type:"range",list:"mileage-list",min:ie[0],max:ie[ie.length-1],value:d,onChange:T}),p.createElement("datalist",{id:"mileage-list"},ie.map((function(e){return p.createElement("option",{key:e,value:e,label:ie.includes(e)?"".concat(e):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Mileage To"),p.createElement("input",{type:"range",list:"mileage-list",min:ie[0],max:ie[ie.length-1],value:f,onChange:F}),p.createElement("span",null,"".concat(d,"-").concat(f," km")))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Price From"),p.createElement("input",{type:"range",list:"price-list",min:le[0],max:le[le.length-1],value:s,onChange:O}),p.createElement("datalist",{id:"price-list"},le.map((function(e){return p.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?"".concat(e," pln"):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Price To"),p.createElement("input",{type:"range",list:"price-list",min:le[0],max:le[le.length-1],value:m,onChange:x}),p.createElement("span",null,"".concat(s,"-").concat(m," pln")))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Power From"),p.createElement("input",{type:"range",list:"power-list",min:oe[0],max:oe[oe.length-1],value:v,onChange:j}),p.createElement("datalist",{id:"power-list"},oe.map((function(e){return p.createElement("option",{key:e,value:e,label:oe.includes(e)?"".concat(e," hp"):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Power To"),p.createElement("input",{type:"range",list:"power-list",min:oe[0],max:oe[oe.length-1],value:g,onChange:N}),p.createElement("span",null,"".concat(v,"-").concat(g," hp")))),Object.entries(r).map((function(e,t){var r=(0,a.Z)(e,2),l=r[0],i=r[1];return p.createElement("div",{key:t},p.createElement("label",null,p.createElement("span",null,l),p.createElement("select",{name:l,value:i,onChange:Z},p.createElement("option",{value:""},"--"),Object.entries(n[l]).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)})))))})))}function ke(e){var t=e._time,n=e.item,r=e.onClickCompare,a=e.prev,i=e.favorites,o=e.setFavorites,c=n.id,u=n.href,s=n.title,m=n.brand,d=n.series,f=void 0===d?{}:d,v=n.seriesCode,g=n.bodyType,E=n.modelCode,y=n.fuel,b=n.color,h=n.transmission,w=n.capacity,Z=n.consumptionFuel,C=n.emission,P=n.powerHP,O=n.productionYear,x=n.registration,T=n.age,F=n.mileage,j=n.transactionalPrice,N=n.newPrice,S=n.warranty,Y=n.created,B=n.imagesLastChanged,M=function(e){return n&&a&&n[e]!==a[e]};return p.createElement("ul",{className:L.Z.Details},p.createElement("li",null,p.createElement(be,{color:b}),p.createElement(he,{href:u},"[".concat(c,"] ").concat(s)),r&&p.createElement(Ee,{onClick:r,value:c},"Compare"),o&&p.createElement(ye,{checked:i.includes(c),onChange:function(e){return o((function(t){return e.target.checked?t.concat(c):t.filter((function(e){return e!==c}))}))}},"Favorite")),p.createElement("li",null,"[","object"===(0,l.Z)(v)?v.label:v,"]"," ",m.label," ",f.label," ",g.label," ",y.label," ",h.label),p.createElement("li",null,"[","object"===(0,l.Z)(E)?E.label:E,"]"," ",w&&p.createElement("span",null,"capacity: ",w)," ",P&&p.createElement("span",null,"powerHP: ",P)," ",Z&&p.createElement("span",null,"consumptionFuel: ",Z)," ",C&&p.createElement("span",null,"emission: ",C)),p.createElement("li",null,p.createElement("span",null,"productionYear: ",O)," ",Boolean(N)&&p.createElement("span",null,"newPrice: ",N)," ",Boolean(n.optionsPrice)&&p.createElement("span",null,"optionsPrice: ",n.optionsPrice)," ",Boolean(n.accessoriesPrice)&&p.createElement("span",null,"accessoriesPrice: ",n.accessoriesPrice)),p.createElement("li",null,p.createElement("span",{className:k()(L.Z.Compare,M("transactionalPrice")&&L.Z.changed)},"transactionalPrice: ",j)," ",x&&p.createElement("span",null,"registration: ",x.split("T")[0]),T&&p.createElement("span",{className:k()(L.Z.Compare,M("age")&&L.Z.changed)},"age: ",T)," ",F&&p.createElement("span",{className:k()(L.Z.Compare,M("mileage")&&L.Z.changed)},"mileage: ",F)," ",p.createElement("span",{className:k()(L.Z.Compare,M("warranty")&&L.Z.changed)},"warranty: ",S)),(t||B)&&p.createElement("li",null,"[",t?new Date(Number(t)).toISOString():"-","] ",Y," ",B&&p.createElement("span",null,"imagesLastChanged: ",B)))}function Oe(){return p.createElement("div",{className:L.Z.Section},p.createElement("h2",null,"Vehicles"),p.createElement(we,null))}},6583:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(9601),a=n.n(r),l=n(2609),i=n.n(l)()(a());i.push([e.id,".jym2UAfwYghQzKOP2VHa{position:relative;border:2px solid red}.jym2UAfwYghQzKOP2VHa svg{width:100%;height:50vh}.jym2UAfwYghQzKOP2VHa .s381NcqWwmo0Qir3pBAh{position:absolute}.s381NcqWwmo0Qir3pBAh{background:#fff;border:1px solid #add8e6;color:orange;padding:.25em}",""]),i.locals={Chart:"jym2UAfwYghQzKOP2VHa",Tooltip:"s381NcqWwmo0Qir3pBAh"};const o=i},1617:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(9601),a=n.n(r),l=n(2609),i=n.n(l),o=n(9138),c=i()(a());c.i(o.Z),c.push([e.id,".vXpyyqKMf2Eg0uZBGb3A{height:75vh;border:2px solid red}.vXpyyqKMf2Eg0uZBGb3A header{font-weight:bold}",""]),c.locals={Map:"vXpyyqKMf2Eg0uZBGb3A"};const u=c},303:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(9601),a=n.n(r),l=n(2609),i=n.n(l)()(a());i.push([e.id,".dnNulWhTs84wB_yi0tu2{color:green}.eZcT7zT7zcKeynqlJ5cC{clear:both}.LihBxmStNILK5SsWSml4{display:inline-block;width:1em;height:1em;border:2px solid #000;border-radius:50%}.WV27lBhC9zjxECQGlM6O{float:left;width:200px;height:150px;overflow-x:auto;display:flex;flex-direction:row;scroll-snap-type:x mandatory}.WV27lBhC9zjxECQGlM6O .r6NFVpUdPnLRLUYR6xzw{width:100%;height:100%}.WV27lBhC9zjxECQGlM6O img{max-width:100%;scroll-snap-align:center}.r6NFVpUdPnLRLUYR6xzw{display:flex;align-items:center;justify-content:center}.r6NFVpUdPnLRLUYR6xzw svg{flex:none;width:64px;height:64px}.REcFotXkdh1Z8ismoSwA{color:gray}.REcFotXkdh1Z8ismoSwA .FEMh9gY8aLCa_GmJxYqs{color:#000}.REcFotXkdh1Z8ismoSwA .FEMh9gY8aLCa_GmJxYqs.MS_t7pWYsJpHZMz6NksN{color:red}",""]),i.locals={Section:"dnNulWhTs84wB_yi0tu2",Row:"eZcT7zT7zcKeynqlJ5cC",Color:"LihBxmStNILK5SsWSml4",Gallery:"WV27lBhC9zjxECQGlM6O",Loader:"r6NFVpUdPnLRLUYR6xzw",Details:"REcFotXkdh1Z8ismoSwA",Compare:"FEMh9gY8aLCa_GmJxYqs",changed:"MS_t7pWYsJpHZMz6NksN"};const o=i},7831:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(6062),a=n.n(r),l=n(4036),i=n.n(l),o=n(6793),c=n.n(o),u=n(7892),s=n.n(u),m=n(1173),p=n.n(m),d=n(2464),f=n.n(d),v=n(6583),g={};g.styleTagTransform=f(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p();var E=a()(v.default,g);if(!v.default.locals||e.hot.invalidate){var y=!v.default.locals,b=y?v:v.default.locals;e.hot.accept(6583,(t=>{v=n(6583),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(b,y?v:v.default.locals,y)?(b=y?v:v.default.locals,E(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const h=v.default&&v.default.locals?v.default.locals:void 0},1231:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(6062),a=n.n(r),l=n(4036),i=n.n(l),o=n(6793),c=n.n(o),u=n(7892),s=n.n(u),m=n(1173),p=n.n(m),d=n(2464),f=n.n(d),v=n(1617),g={};g.styleTagTransform=f(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p();var E=a()(v.default,g);if(!v.default.locals||e.hot.invalidate){var y=!v.default.locals,b=y?v:v.default.locals;e.hot.accept(1617,(t=>{v=n(1617),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(b,y?v:v.default.locals,y)?(b=y?v:v.default.locals,E(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const h=v.default&&v.default.locals?v.default.locals:void 0},9757:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(6062),a=n.n(r),l=n(4036),i=n.n(l),o=n(6793),c=n.n(o),u=n(7892),s=n.n(u),m=n(1173),p=n.n(m),d=n(2464),f=n.n(d),v=n(303),g={};g.styleTagTransform=f(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p();var E=a()(v.default,g);if(!v.default.locals||e.hot.invalidate){var y=!v.default.locals,b=y?v:v.default.locals;e.hot.accept(303,(t=>{v=n(303),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(b,y?v:v.default.locals,y)?(b=y?v:v.default.locals,E(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const h=v.default&&v.default.locals?v.default.locals:void 0}}]);