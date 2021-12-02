"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[445],{7480:(e,t,n)=>{n.d(t,{$:()=>a});var r=n(2784),a=function(e){var t=e.height,n=void 0===t?80:t,a=e.width,l=void 0===a?80:a,c=e.color,i=void 0===c?"green":c,o=e.radius,u=void 0===o?1:o,s=e.label,m=void 0===s?"audio-loading":s;return r.createElement("svg",{width:l,height:n,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":m},r.createElement("defs",null,r.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},r.createElement("stop",{stopColor:i,stopOpacity:"0",offset:"0%"}),r.createElement("stop",{stopColor:i,stopOpacity:".631",offset:"63.146%"}),r.createElement("stop",{stopColor:i,offset:"100%"}))),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("g",{transform:"translate(1 1)"},r.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:i,strokeWidth:"2"},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),r.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:u},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))}},5445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ze});var r=n(203),a=n(7946),l=n(1283),c=n(9151),i=n(965),o=n(2451),u=n(369),s=n(7162),m=n.n(s),p=n(2784),f=n(1148),d=n(7984),v=n(9369),g=n(8871),E=n(357),h=n(1927),b=n.n(h),y=n(9561),w=n(4819),Z=n.n(w),C=n(2779),k=n.n(C),P=n(9635),x=n(5120),O=n(2335),S=n(9468),T=n(7831);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=200,M={accessoriesPrice:"accessoriesPrice",age:"age",capacity:"capacity",consumptionFuel:"consumptionFuel",emission:"emission",id:"id",images:"images",mileage:"mileage",newPrice:"newPrice",optionsPrice:"optionsPrice",powerHP:"powerHP",powerKW:"powerKW",productionYear:"productionYear",transactionalPrice:"transactionalPrice",warranty:"warranty",_created:"_created",_updated:"_updated"};function Y(e){var t=e.list,n=e.onSelect,r=(0,p.useState)(null),l=(0,a.Z)(r,2),c=l[0],i=l[1],o=(0,p.useState)((function(){return{xProp:"transactionalPrice",yProp:"newPrice"}})),s=(0,a.Z)(o,2),m=s[0],d=m.xProp,v=m.yProp,g=s[1],E=(0,p.useRef)(null),h=(0,p.useRef)(null),b=(0,p.useRef)(null),y=(0,p.useMemo)((function(){return new f.x}),[]);return(0,p.useEffect)((function(){var e=y.pipe((0,O.w)((function(e){return(0,x.of)(e).pipe((0,S.g)(e?0:800))}))).subscribe((function(e){return i(e)}));return function(){return e.unsubscribe()}}),[y]),(0,p.useEffect)((function(){var e=t.slice(0,2e3).map((function(e){var t=e.item;return[t[d],t[v],"[".concat(t.id,"] ").concat(t.title),t.id]})),r=e.map((function(e){var t=(0,a.Z)(e,1)[0];return void 0===t?0:t})),l=e.map((function(e){var t=(0,a.Z)(e,2)[1];return void 0===t?0:t})),c=[Math.min.apply(Math,(0,u.Z)(r)),Math.max.apply(Math,(0,u.Z)(r))],i=[Math.min.apply(Math,(0,u.Z)(l)),Math.max.apply(Math,(0,u.Z)(l))],o=(0,P.BYU)().domain(c).range([10,310]),s=(0,P.BYU)().domain(i).range([180,20]),m=(0,P.BYU)().domain(c).range(["red","blue"]);(0,P.Ys)(b.current).selectAll("circle").remove(),(0,P.Ys)(b.current).selectAll("circle").data(e).join((function(e){return e.append("circle").attr("cx",(function(e){var t=(0,a.Z)(e,1)[0];return o(void 0===t?0:t)})).attr("cy",(function(e){var t=(0,a.Z)(e,2)[1];return s(void 0===t?0:t)})).attr("r",0).attr("fill",(function(e){var t=(0,a.Z)(e,1)[0];return m(void 0===t?0:t)})).on("click",(function(e,t){var r=(0,a.Z)(t,4)[3];return n(r)})).on("mouseover",(function(e,t){var n=(0,a.Z)(t,3)[2];return y.next({left:e.layerX,top:e.layerY,label:n})})).on("mouseout",(function(e,t){return y.next(null)})).call((function(e){return e.transition().duration(200).attr("r",2).style("opacity",1)}))}),(function(e){return e.attr("fill","lightgrey")}),(function(e){return e.attr("fill","tomato").call((function(e){return e.transition().duration(200).attr("r",0).style("opacity",0).remove()}))}));var p=(0,P.LLu)(o).ticks(5).tickSizeOuter(0);(0,P.Ys)(E.current).call(p);var f=(0,P.y4O)(s).ticks(5).tickSizeOuter(0);(0,P.Ys)(h.current).call(f)}),[t,d,v]),p.createElement("div",{className:k()(T.Z.Chart)},p.createElement("fieldset",null,p.createElement("label",null,p.createElement("span",null,"x"),p.createElement("select",{value:d,onChange:function(e){return g((function(t){return F(F({},t),{},{xProp:e.target.value})}))}},Object.entries(M).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)})))),p.createElement("label",null,p.createElement("span",null,"y"),p.createElement("select",{value:v,onChange:function(e){return g((function(t){return F(F({},t),{},{yProp:e.target.value})}))}},Object.entries(M).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)}))))),p.createElement("svg",{ref:b,width:320,height:N,viewBox:"0, 0, ".concat(320,", ").concat(N)},p.createElement("g",{transform:"translate(0, ".concat(180,")"),ref:E}),p.createElement("g",{transform:"translate(".concat(10,", 0)"),ref:h})),c&&p.createElement("div",{className:T.Z.Tooltip,style:{top:c.top,left:c.left}},c.label))}var B=n(5062),_=n.n(B),L=n(809),R=n(7234),z=n(5804),U=n(493),A=n(8969),W=n(9982),I=n(6127),D=n(9530),G=n(5096),H=n(1231);function V(e){var t=e.position,n=e.children,r=e.setPosition,a=(0,p.useRef)(null),l=(0,p.useMemo)((function(){return{dragend:function(){var e=a.current;null!=e&&r(e.getLatLng())}}}),[]);return p.createElement(L.J,{draggable:!0,eventHandlers:l,position:t,ref:a},p.createElement(R.u,null,n))}function K(){var e=(0,z.Sx)(),t=(0,p.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return p.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},p.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},p.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},p.createElement(D.G,{icon:G.KS0}))))}function Q(e){var t=e.bounds,r=e.center,l=e.setCenter,c=e.list;(0,p.useEffect)((function(){delete _().Icon.Default.prototype._getIconUrl,_().Icon.Default.mergeOptions({iconRetinaUrl:n(1963).Z,iconUrl:n(379).Z,shadowUrl:n(6179).Z})}),[]);var i=(0,p.useState)(null),o=(0,a.Z)(i,2),u=(o[0],o[1]),s=(0,p.useMemo)((function(){return p.createElement(U.h,{bounds:t,whenCreated:u,zoom:13,className:k()(H.Z.Map)},p.createElement(A.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),p.createElement(V,{position:r,setPosition:l},"".concat(r.lat,",").concat(r.lng)),c.map((function(e){var t=e.i,n=e.id,a=e.position,l=e.name;return e.item,p.createElement(W.c,{key:t,center:a,pathOptions:{color:"purple"}},p.createElement(I.G,{minWidth:90},p.createElement("section",null,p.createElement("header",null,"[".concat(n,"] ").concat(l," (").concat(r.distanceTo(a).toFixed(0)/1e3," km)")))))})),p.createElement(K,null))}),[c,r]);return p.createElement("div",{className:k()(H.Z.Layout)},s)}var q=n(7480),J=n(9757),X=["options"],$=["src"],ee=["children"],te=["href"],ne=["id","images"],re=["entries"],ae=["priceTo"],le=["priceFrom"],ce=["mileageTo"],ie=["mileageFrom"],oe=["powerTo"],ue=["powerFrom"],se=["yearTo"],me=["yearFrom"];function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de={registration:-1,transactionalPrice:1,mileage:1,consumptionFuel:1,productionYear:-1,powerHP:-1,newPrice:-1,optionsPrice:-1,accessoriesPrice:-1,warranty:-1,modelCode:1,seriesCode:1,title:1,_created:-1,_updated:-1},ve=[1,3,5,10,20,50,100,500],ge=[0,1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6],Ee=[0,1e3,5e3,1e4,2e4,5e4,1e5,15e4,2e5,5e5],he=[0,100,150,200,250,300,400,500,600,700,800,900],be={"":"",N:"New",U:"Used"},ye=(0,u.Z)(Array(15)).map((function(e,t){return(new Date).getFullYear()-t})).reverse(),we=(0,y.Z)("criterion-vehicles"),Ze=(0,y.Z)("favorites-vehicles"),Ce=(0,E.k)(function(){var e=(0,o.Z)(m().mark((function e(t){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/vehicles/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return e.results})).then((function(e){return{results:e,options:e.reduce((function(e,t){return["dealer","bodyType","driveType","brand","color","fuel","series","seriesCode","modelCode","transmission","gearBox","vatReclaimable","warranty"].reduce((function(e,n){return fe(fe({},e),{},(0,i.Z)({},n,Object.assign({},e[n],"object"===(0,c.Z)(t[n])?(0,i.Z)({},t[n].id,t[n].label||t[n].name):(0,i.Z)({},t[n],t[n]))))}),e)}),{})}})).then((function(e){var t=e.options,n=(0,l.Z)(e,X);return Object.keys(t).forEach((function(e){return Object.assign(t,(0,i.Z)({},e,Object.entries(t[e]).sort((function(e,t){var n=(0,a.Z)(e,1)[0],r=(0,a.Z)(t,1)[0];return String(n)>String(r)?1:-1})).reduce((function(e,t){var n=(0,a.Z)(t,2),r=n[0],l=n[1];return Object.assign(e,(0,i.Z)({},r,l))}),{})))})),fe({options:t},n)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ke=(0,E.k)(function(){var e=(0,o.Z)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=new Image;Object.assign(n,{onload:e,src:t})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function Pe(e){var t=e.src,n=(0,l.Z)(e,$);return ke.read(t),p.createElement("img",(0,r.Z)({src:t},n,{referrerPolicy:"no-referrer"}))}function xe(){return p.createElement("div",{className:J.Z.Loader},p.createElement(q.$,null))}function Oe(e){var t=(0,r.Z)({},e);return p.createElement("div",{className:J.Z.ImgWrapper},p.createElement(p.Suspense,{fallback:p.createElement(xe,null)},p.createElement(Pe,t)))}function Se(e){var t=e.images,n=(0,p.useState)(!1),r=(0,a.Z)(n,2),l=r[0],c=r[1],i=(0,p.useState)(!1),o=(0,a.Z)(i,2),u=o[0],s=o[1],m=(0,p.useRef)(null);return(0,p.useEffect)((function(){var e=function(e){var t=e.target;t.scrollLeft===t.scrollWidth-t.offsetWidth&&s(!0)};if(m.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){(0,a.Z)(e,1)[0].isIntersecting&&c(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(m.current),m.current.addEventListener("scroll",e),function(){m.current&&(t.unobserve(m.current),m.current.removeEventListener("scroll",e))}}}),[m]),t.length?p.createElement("div",{ref:m,className:J.Z.Gallery},l&&t.slice(0,u?t.length:3).map((function(e,t){return p.createElement(Oe,{key:t,src:e,alt:"Image #".concat(t+1)})}))):null}function Te(e){var t=(0,r.Z)({},e);return p.createElement("button",t)}function je(e){var t=e.children,n=(0,l.Z)(e,ee);return p.createElement("label",null,p.createElement("input",(0,r.Z)({type:"checkbox"},n)),p.createElement("span",null,t))}function Fe(e){var t=e.color;return p.createElement("a",{className:J.Z.Color,style:{backgroundColor:t.code},title:t.label})}function Ne(e){var t=e.href,n=void 0===t?"#":t,a=(0,l.Z)(e,te),c="#"===n[0];return p.createElement("a",(0,r.Z)({href:n,target:c?void 0:"_blank",rel:c?void 0:"noopener noreferrer"},a))}var Me=function(e){var t=e.search,n=e.options;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({filter:t,sortBy:"transactionalPrice",type:"",radius:ve[ve.length-1],priceFrom:ge[0],priceTo:ge[ge.length-1],mileageFrom:Ee[0],mileageTo:Ee[Ee.length-1],powerFrom:he[0],powerTo:he[he.length-1],yearFrom:ye[0],yearTo:ye[ye.length-1],entries:Object.keys(n).reduce((function(e,t){return Object.assign(e,(0,i.Z)({},t,""))}),{})},e)}};function Ye(e){var t=e.version,n=void 0===t?"v1":t,i=Ce.read(n),o=i.results,u=i.options,s=(0,p.useState)(""),m=(0,a.Z)(s,2),E=m[0],h=m[1],y=(0,p.useState)(Me({search:E,options:u})),w=(0,a.Z)(y,2),Z=w[0],C=w[1],k=(0,p.useMemo)((function(){return new f.x}),[]);(0,p.useEffect)((function(){var e=k.pipe((0,d.U)((function(e){return e.trim()})),(0,v.x)(),(0,g.b)(400)).subscribe((function(e){return C((function(t){return fe(fe({},t),{},{filter:e})}))}));return function(){return e.unsubscribe()}}),[k]),(0,p.useEffect)((function(){k.next(E)}),[E]);var P=(0,p.useCallback)((function(e){var t=e.target.value,n=function(e){return[e.powerHP,e.newPrice,e.optionsPrice,e.productionYear,e.mileage,e.transactionalPrice,e.warranty]},r=b()(o.map(n));console.table(r.knn(n(o.find((function(e){return e._id===t}))),10).slice(0,10).map((function(e){return o[e]})).map((function(e){return[e.id,e.title,e.powerHP,e.newPrice,e.optionsPrice,e.productionYear,e.mileage,e.transactionalPrice,e.warranty]})))}),[o]);console.log({options:u,criteria:Z,results:o});var x=(0,p.useMemo)((function(){return o.map((function(e,t){var n=e.id,r=e.dealer,a=r.name;return{i:t,id:n,position:{lat:r.lat,lng:r.lng},name:a,item:e}})).filter((function(e){var t=e.item;return(t.title.toLowerCase().match(Z.filter)||Z.filter.split(",").map((function(e){return e.trim()})).includes(String(t.id)))&&["",t.isNew?"N":"U"].includes(Z.type)&&Z.priceFrom<=t.transactionalPrice&&t.transactionalPrice<=Z.priceTo&&(void 0===t.mileage||Z.mileageFrom<=t.mileage&&t.mileage<=Z.mileageTo)&&Z.powerFrom<=t.powerHP&&t.powerHP<=Z.powerTo&&Z.yearFrom<=t.productionYear&&t.productionYear<=Z.yearTo&&-1===Object.entries(Z.entries).findIndex((function(e){var n=(0,a.Z)(e,2),r=n[0],l=n[1];return![String("object"===(0,c.Z)(t[r])?t[r].id:t[r]),""].includes(l)}))}))}),[o,Z]),O=function(e){return(0,p.useMemo)((function(){return _().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return _().marker([n,r])}))).getBounds()}),[])}(x.length?x:[{position:{lat:"52.1530829",lng:"21.1104411"}}]),S=(0,p.useState)((function(){return O.getCenter()})),T=(0,a.Z)(S,2),j=T[0],F=T[1],N=(0,p.useMemo)((function(){return x.filter((function(e){var t=e.position;return j.distanceTo(t)<1e3*Z.radius}))}),[x,j,Z.radius]),M=(0,p.useMemo)((function(){return x.sort((function(e,t){return de[Z.sortBy]*(e.item[Z.sortBy]===t.item[Z.sortBy]?0:(e.item[Z.sortBy]||0)>(t.item[Z.sortBy]||0)?1:-1)}))}),[x,Z.sortBy]),B=Ze([]),L=(0,a.Z)(B,2),R=L[0],z=L[1],U=we((function(){return{selected:"",list:[]}})),A=(0,a.Z)(U,2),W=A[0],I=A[1];return(0,p.useEffect)((function(){if(""!==W.selected){var e=W.list[W.selected].criteria;C(Me({search:E,options:u})(e)),h(e.filter)}}),[C,h,W.selected]),p.createElement("div",null,p.createElement(Q,{bounds:O,center:j,setCenter:F,list:N}),p.createElement(Y,{list:x,onSelect:function(e){return h(String(e))}}),p.createElement(Le,(0,r.Z)({},Z,{options:u,setCriteria:C,search:E,setSearch:h})),p.createElement(_e,(0,r.Z)({},Z,{options:u})),p.createElement(Be,{criterion:W,setCriterion:I,criteria:Z}),R.length>0?p.createElement("div",null,"Your favorites: ".concat(R.map((function(e){return"[".concat(e,"]")})).join(", "))," ",p.createElement(Ne,{onClick:function(e){return e.preventDefault(),h(R.join(", "))}},"search")," ","|"," ",p.createElement(Ne,{onClick:function(e){return e.preventDefault(),z([])}},"clear")):p.createElement("div",null,"You don't have favorites"),p.createElement("div",null,"Found ".concat(x.length," vehicles out of a total of ").concat(o.length)),p.createElement("ol",null,M.slice(0,100).map((function(e){return e.item})).map((function(e,t){var n=e.id,r=e.images,c=(0,l.Z)(e,ne);return p.createElement("li",{key:t,className:J.Z.Row},p.createElement(Se,{images:r}),p.createElement(Re,{item:fe({id:n},c),onClickCompare:P,favorites:R,setFavorites:z}),Object.entries(c._history||{}).reverse().map((function(e,t,r){var l=(0,a.Z)(e,2),i=l[0],o=l[1];return p.createElement(Re,{key:i,_time:i,item:fe({id:n},o),prev:t?r[t-1][1]:c})})))}))))}function Be(e){var t=e.criterion,n=e.setCriterion,r=e.criteria,a=(0,p.useCallback)((function(){return n((function(e){return fe(fe({},e),{},{selected:String(e.list.length),list:e.list.concat([{label:prompt("Filter name:"),criteria:r}])})}))}),[t,r]),l=(0,p.useCallback)((function(){return n((function(e){return Z()(e,{list:(0,i.Z)({},e.selected,{criteria:{$apply:function(){return r}}})})}))}),[t,r]),c=(0,p.useCallback)((function(){return n((function(e){return Z()(e,{list:(0,i.Z)({},e.selected,{label:{$apply:function(e){return prompt("Rename filter:",e)}}})})}))}),[t]),o=(0,p.useCallback)((function(){return n((function(e){return fe(fe({},e),{},{selected:"",list:e.list.filter((function(t,n){return String(n)!==e.selected}))})}))}),[t]),u=(0,p.useCallback)((function(e){var t=e.target;return n((function(e){return fe(fe({},e),{},{selected:t.value})}))}),[t]),s=(0,p.useMemo)((function(){return""!==t.selected&&JSON.stringify(t.list[t.selected].criteria)===JSON.stringify(r)}),[t,r]);return p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Saved Filters"),p.createElement("select",{value:t.selected,onChange:u},p.createElement("option",{value:""},"--"),t.list.map((function(e,t){var n=e.label;return p.createElement("option",{key:t,value:String(t)},n)}))),""===t.selected?p.createElement("button",{onClick:a},"Save as new criteria"):p.createElement(p.Fragment,null,p.createElement("button",{onClick:l,disabled:s},"Update criteria"),p.createElement("button",{onClick:c},"Rename criteria"),p.createElement("button",{onClick:o},"Remove criteria"))))}function _e(e){var t=e.filter,n=e.options,r=e.entries,l=e.type,c=e.yearFrom,i=e.yearTo,o=e.priceFrom,u=e.priceTo,s=e.mileageFrom,m=e.mileageTo,f=e.powerFrom,d=e.powerTo,v=e.radius,g=e.sortBy;return p.createElement("fieldset",null,l&&p.createElement("div",null,p.createElement("span",null,"Type")," ",p.createElement("span",null,be[l])),t&&p.createElement("div",null,p.createElement("span",null,"Search")," ",p.createElement("span",null,t)),p.createElement("div",null,p.createElement("span",null,"Sort")," ",p.createElement("span",null,g)),p.createElement("div",null,p.createElement("span",null,"Radius")," ",p.createElement("span",null,"max ".concat(v," km"))),p.createElement("div",null,p.createElement("span",null,"Year")," ",p.createElement("span",null,"".concat(c,"-").concat(i))),p.createElement("div",null,p.createElement("span",null,"Mileage")," ",p.createElement("span",null,"".concat(s,"-").concat(m," km"))),p.createElement("div",null,p.createElement("span",null,"Price")," ",p.createElement("span",null,"".concat(o,"-").concat(u," pln"))),p.createElement("div",null,p.createElement("span",null,"Power")," ",p.createElement("span",null,"".concat(f,"-").concat(d," hp"))),Object.entries(r).filter((function(e){return""!==(0,a.Z)(e,2)[1]})).map((function(e,t){var r=(0,a.Z)(e,2),l=r[0],c=r[1];return p.createElement("div",{key:t},p.createElement("span",null,l)," ",p.createElement("span",null,n[l][c]))})))}function Le(e){var t=e.search,n=e.options,r=e.entries,c=e.type,o=e.yearFrom,u=e.yearTo,s=e.priceFrom,m=e.priceTo,f=e.mileageFrom,d=e.mileageTo,v=e.powerFrom,g=e.powerTo,E=e.radius,h=e.setCriteria,b=e.setSearch,y=e.sortBy,w=(0,p.useCallback)((function(e){var t=e.target;return b(t.value)}),[]),Z=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){var n=e.entries;return fe(fe({},(0,l.Z)(e,re)),{},{entries:fe(fe({},n),{},(0,i.Z)({},t.name,t.value))})}))}),[]),C=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){return fe(fe({},e),{},{sortBy:t.value})}))}),[]),k=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){return fe(fe({},e),{},{type:t.value})}))}),[]),P=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){return fe(fe({},e),{},{radius:Number(t.value)})}))}),[]),x=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){var n=e.priceTo,r=(0,l.Z)(e,ae),a=Number(t.value);return fe(fe({},r),{},{priceFrom:a,priceTo:n<a?a:n})}))}),[]),O=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){var n=e.priceFrom,r=(0,l.Z)(e,le),a=Number(t.value);return fe(fe({},r),{},{priceFrom:a>n?n:a,priceTo:a})}))}),[]),S=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){var n=e.mileageTo,r=(0,l.Z)(e,ce),a=Number(t.value);return fe(fe({},r),{},{mileageFrom:a,mileageTo:n<a?a:n})}))}),[]),T=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){var n=e.mileageFrom,r=(0,l.Z)(e,ie),a=Number(t.value);return fe(fe({},r),{},{mileageFrom:a>n?n:a,mileageTo:a})}))}),[]),j=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){var n=e.powerTo,r=(0,l.Z)(e,oe),a=Number(t.value);return fe(fe({},r),{},{powerFrom:a,powerTo:n<a?a:n})}))}),[]),F=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){var n=e.powerFrom,r=(0,l.Z)(e,ue),a=Number(t.value);return fe(fe({},r),{},{powerFrom:a>n?n:a,powerTo:a})}))}),[]),N=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){var n=e.yearTo,r=(0,l.Z)(e,se),a=Number(t.value);return fe(fe({},r),{},{yearFrom:a,yearTo:n<a?a:n})}))}),[]),M=(0,p.useCallback)((function(e){var t=e.target;return h((function(e){var n=e.yearFrom,r=(0,l.Z)(e,me),a=Number(t.value);return fe(fe({},r),{},{yearFrom:a>n?n:a,yearTo:a})}))}),[]);return p.createElement("fieldset",null,p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Type"),p.createElement("select",{value:c,onChange:k},Object.entries(be).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)})))),p.createElement("label",null,p.createElement("span",null,"Search"),p.createElement("input",{type:"search",value:t,onChange:w})),p.createElement("label",null,p.createElement("span",null,"Sort"),p.createElement("select",{value:y,onChange:C},Object.entries(de).map((function(e){var t=(0,a.Z)(e,1)[0];return p.createElement("option",{key:t,value:t},t)})))),p.createElement("label",null,p.createElement("span",null,"Radius"),p.createElement("input",{type:"range",list:"range-list",min:ve[0],max:ve[ve.length-1],value:E,onChange:P}),p.createElement("datalist",{id:"range-list"},ve.map((function(e){return p.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?"".concat(e," km"):void 0})}))),p.createElement("span",null,"max ".concat(E," km")))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Year From"),p.createElement("input",{type:"range",list:"year-list",min:ye[0],max:ye[ye.length-1],value:o,onChange:N}),p.createElement("datalist",{id:"year-list"},ye.map((function(e){return p.createElement("option",{key:e,value:e,label:[0,2010,2015,2020].includes(e)?"".concat(e):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Year To"),p.createElement("input",{type:"range",list:"year-list",min:ye[0],max:ye[ye.length-1],value:u,onChange:M}),p.createElement("span",null,"".concat(o,"-").concat(u)))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Mileage From"),p.createElement("input",{type:"range",list:"mileage-list",min:Ee[0],max:Ee[Ee.length-1],value:f,onChange:S}),p.createElement("datalist",{id:"mileage-list"},Ee.map((function(e){return p.createElement("option",{key:e,value:e,label:Ee.includes(e)?"".concat(e):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Mileage To"),p.createElement("input",{type:"range",list:"mileage-list",min:Ee[0],max:Ee[Ee.length-1],value:d,onChange:T}),p.createElement("span",null,"".concat(f,"-").concat(d," km")))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Price From"),p.createElement("input",{type:"range",list:"price-list",min:ge[0],max:ge[ge.length-1],value:s,onChange:x}),p.createElement("datalist",{id:"price-list"},ge.map((function(e){return p.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?"".concat(e," pln"):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Price To"),p.createElement("input",{type:"range",list:"price-list",min:ge[0],max:ge[ge.length-1],value:m,onChange:O}),p.createElement("span",null,"".concat(s,"-").concat(m," pln")))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Power From"),p.createElement("input",{type:"range",list:"power-list",min:he[0],max:he[he.length-1],value:v,onChange:j}),p.createElement("datalist",{id:"power-list"},he.map((function(e){return p.createElement("option",{key:e,value:e,label:he.includes(e)?"".concat(e," hp"):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Power To"),p.createElement("input",{type:"range",list:"power-list",min:he[0],max:he[he.length-1],value:g,onChange:F}),p.createElement("span",null,"".concat(v,"-").concat(g," hp")))),Object.entries(r).filter((function(e){var t=(0,a.Z)(e,1)[0];return n[t]})).map((function(e,t){var r=(0,a.Z)(e,2),l=r[0],c=r[1];return p.createElement("div",{key:t},p.createElement("label",null,p.createElement("span",null,l),p.createElement("select",{name:l,value:c,onChange:Z},p.createElement("option",{value:""},"--"),Object.entries(n[l]).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)})))))})))}function Re(e){var t=e._time,n=e.item,r=e.onClickCompare,a=e.prev,l=e.favorites,i=e.setFavorites,o=n.id,u=n.href,s=n.title,m=n.brand,f=n.series,d=void 0===f?{}:f,v=n.seriesCode,g=n.bodyType,E=n.modelCode,h=n.fuel,b=n.color,y=n.transmission,w=n.capacity,Z=n.consumptionFuel,C=n.emission,P=n.powerHP,x=n.productionYear,O=n.registration,S=n.age,T=n.mileage,j=n.transactionalPrice,F=n.newPrice,N=n.warranty,M=n.created,Y=n.imagesLastChanged,B=function(e){return n&&a&&n[e]!==a[e]};return p.createElement("ul",{className:J.Z.Details},p.createElement("li",null,p.createElement(Fe,{color:b}),p.createElement(Ne,{href:u},"[".concat(o,"] ").concat(s)),r&&p.createElement(Te,{onClick:r,value:n._id},"Compare"),i&&p.createElement(je,{checked:l.includes(o),onChange:function(e){return i((function(t){return e.target.checked?t.concat(o):t.filter((function(e){return e!==o}))}))}},"Favorite")),p.createElement("li",null,"[","object"===(0,c.Z)(v)?v.label:v,"]"," ",m.label," ",d.label," ",g.label," ",h.label," ",y.label),p.createElement("li",null,"[","object"===(0,c.Z)(E)?E.label:E,"]"," ",w&&p.createElement("span",null,"capacity: ",w)," ",P&&p.createElement("span",null,"powerHP: ",P)," ",Z&&p.createElement("span",null,"consumptionFuel: ",Z)," ",C&&p.createElement("span",null,"emission: ",C)),p.createElement("li",null,p.createElement("span",null,"productionYear: ",x)," ",Boolean(F)&&p.createElement("span",null,"newPrice: ",F)," ",Boolean(n.optionsPrice)&&p.createElement("span",null,"optionsPrice: ",n.optionsPrice)," ",Boolean(n.accessoriesPrice)&&p.createElement("span",null,"accessoriesPrice: ",n.accessoriesPrice)),p.createElement("li",null,O&&p.createElement("span",{className:k()(J.Z.Compare,B("registration")&&J.Z.changed)},"registration: ",O.split("T")[0])," ",S&&p.createElement("span",{className:k()(J.Z.Compare,B("age")&&J.Z.changed)},"age: ",S)," ",T&&p.createElement("span",{className:k()(J.Z.Compare,B("mileage")&&J.Z.changed)},"mileage: ",T)),p.createElement("li",null,p.createElement("span",{className:k()(J.Z.Compare,B("transactionalPrice")&&J.Z.changed)},"transactionalPrice: ",j)," ",p.createElement("span",{className:k()(J.Z.Compare,B("vatReclaimable")&&J.Z.changed)},"vatReclaimable: ",n.vatReclaimable)," ",p.createElement("span",{className:k()(J.Z.Compare,B("warranty")&&J.Z.changed)},"warranty: ",N)),(t||Y)&&p.createElement("li",null,"[",t?new Date(Number(t)).toISOString():"-","] ",M," ",Y&&p.createElement("span",null,"imagesLastChanged: ",Y)),(n._created||n._updated)&&p.createElement("li",null,n._created&&p.createElement("span",{className:k()(J.Z.Compare)},"_created:"," ",new Date(Number(n._created)).toISOString().split("T")[0]," "),n._updated&&p.createElement("span",{className:k()(J.Z.Compare)},"_updated:"," ",new Date(Number(n._updated)).toISOString().split(".")[0]," ")))}function ze(){return p.createElement("div",{className:J.Z.Section},p.createElement("h2",null,"Vehicles"),p.createElement(Ye,null))}},6583:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(9601),a=n.n(r),l=n(2609),c=n.n(l)()(a());c.push([e.id,".jym2UAfwYghQzKOP2VHa{position:relative;border:2px solid red}.jym2UAfwYghQzKOP2VHa svg{width:100%;height:50vh}.jym2UAfwYghQzKOP2VHa .s381NcqWwmo0Qir3pBAh{position:absolute}.s381NcqWwmo0Qir3pBAh{background:#fff;border:1px solid #add8e6;color:orange;padding:.25em}",""]),c.locals={Chart:"jym2UAfwYghQzKOP2VHa",Tooltip:"s381NcqWwmo0Qir3pBAh"};const i=c},1617:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(9601),a=n.n(r),l=n(2609),c=n.n(l),i=n(9138),o=c()(a());o.i(i.Z),o.push([e.id,".vXpyyqKMf2Eg0uZBGb3A{height:75vh;border:2px solid red}.vXpyyqKMf2Eg0uZBGb3A header{font-weight:bold}",""]),o.locals={Map:"vXpyyqKMf2Eg0uZBGb3A"};const u=o},303:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(9601),a=n.n(r),l=n(2609),c=n.n(l)()(a());c.push([e.id,".dnNulWhTs84wB_yi0tu2{color:green}.eZcT7zT7zcKeynqlJ5cC{clear:both}.LihBxmStNILK5SsWSml4{display:inline-block;width:1em;height:1em;border:2px solid #000;border-radius:50%}.WV27lBhC9zjxECQGlM6O{position:relative;float:left;width:200px;height:150px;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory}.WV27lBhC9zjxECQGlM6O .xxSn9iOTx_wlad8kZI7j{width:100%;height:100%;flex-shrink:0}.WV27lBhC9zjxECQGlM6O .r6NFVpUdPnLRLUYR6xzw{width:100%;height:100%}.WV27lBhC9zjxECQGlM6O img{max-height:100%;scroll-snap-align:start}.r6NFVpUdPnLRLUYR6xzw{display:flex;align-items:center;justify-content:center}.r6NFVpUdPnLRLUYR6xzw svg{flex:none;width:64px;height:64px}.REcFotXkdh1Z8ismoSwA{color:gray}.REcFotXkdh1Z8ismoSwA .FEMh9gY8aLCa_GmJxYqs{color:#000}.REcFotXkdh1Z8ismoSwA .FEMh9gY8aLCa_GmJxYqs.MS_t7pWYsJpHZMz6NksN{color:red}",""]),c.locals={Section:"dnNulWhTs84wB_yi0tu2",Row:"eZcT7zT7zcKeynqlJ5cC",Color:"LihBxmStNILK5SsWSml4",Gallery:"WV27lBhC9zjxECQGlM6O",ImgWrapper:"xxSn9iOTx_wlad8kZI7j",Loader:"r6NFVpUdPnLRLUYR6xzw",Details:"REcFotXkdh1Z8ismoSwA",Compare:"FEMh9gY8aLCa_GmJxYqs",changed:"MS_t7pWYsJpHZMz6NksN"};const i=c},7831:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(6062),a=n.n(r),l=n(4036),c=n.n(l),i=n(6793),o=n.n(i),u=n(7892),s=n.n(u),m=n(1173),p=n.n(m),f=n(2464),d=n.n(f),v=n(6583),g={};g.styleTagTransform=d(),g.setAttributes=s(),g.insert=o().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=p();var E=a()(v.default,g);if(!v.default.locals||e.hot.invalidate){var h=!v.default.locals,b=h?v:v.default.locals;e.hot.accept(6583,(t=>{v=n(6583),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(b,h?v:v.default.locals,h)?(b=h?v:v.default.locals,E(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=v.default&&v.default.locals?v.default.locals:void 0},1231:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(6062),a=n.n(r),l=n(4036),c=n.n(l),i=n(6793),o=n.n(i),u=n(7892),s=n.n(u),m=n(1173),p=n.n(m),f=n(2464),d=n.n(f),v=n(1617),g={};g.styleTagTransform=d(),g.setAttributes=s(),g.insert=o().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=p();var E=a()(v.default,g);if(!v.default.locals||e.hot.invalidate){var h=!v.default.locals,b=h?v:v.default.locals;e.hot.accept(1617,(t=>{v=n(1617),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(b,h?v:v.default.locals,h)?(b=h?v:v.default.locals,E(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=v.default&&v.default.locals?v.default.locals:void 0},9757:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(6062),a=n.n(r),l=n(4036),c=n.n(l),i=n(6793),o=n.n(i),u=n(7892),s=n.n(u),m=n(1173),p=n.n(m),f=n(2464),d=n.n(f),v=n(303),g={};g.styleTagTransform=d(),g.setAttributes=s(),g.insert=o().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=p();var E=a()(v.default,g);if(!v.default.locals||e.hot.invalidate){var h=!v.default.locals,b=h?v:v.default.locals;e.hot.accept(303,(t=>{v=n(303),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(b,h?v:v.default.locals,h)?(b=h?v:v.default.locals,E(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){E()}));const y=v.default&&v.default.locals?v.default.locals:void 0}}]);