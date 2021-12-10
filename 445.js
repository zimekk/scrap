"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[445],{779:(e,t,n)=>{n.d(t,{r:()=>b});var r=n(7946),a=n(203),l=n(1283),c=n(2451),o=n(7162),i=n.n(o),u=n(2784),s=n(357),m=function(e){var t=e.height,n=void 0===t?80:t,r=e.width,a=void 0===r?80:r,l=e.color,c=void 0===l?"green":l,o=e.radius,i=void 0===o?1:o,s=e.label,m=void 0===s?"audio-loading":s;return u.createElement("svg",{width:a,height:n,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":m},u.createElement("defs",null,u.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},u.createElement("stop",{stopColor:c,stopOpacity:"0",offset:"0%"}),u.createElement("stop",{stopColor:c,stopOpacity:".631",offset:"63.146%"}),u.createElement("stop",{stopColor:c,offset:"100%"}))),u.createElement("g",{fill:"none",fillRule:"evenodd"},u.createElement("g",{transform:"translate(1 1)"},u.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:c,strokeWidth:"2"},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),u.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:i},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))},p=n(2779),f=n.n(p),d=n(6435),v=["src"],E=(0,s.k)(function(){var e=(0,c.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=new Image;Object.assign(n,{onload:e,src:t})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function g(e){var t=e.src,n=(0,l.Z)(e,v);return E.read(t),u.createElement("img",(0,a.Z)({src:t},n,{referrerPolicy:"no-referrer"}))}function h(){return u.createElement("div",{className:d.Z.Loader},u.createElement(m,null))}function y(e){var t=(0,a.Z)({},e);return u.createElement("div",{className:d.Z.ImgWrapper},u.createElement(u.Suspense,{fallback:u.createElement(h,null)},u.createElement(g,t)))}function b(e){var t=e.className,n=e.images,a=(0,u.useState)(!1),l=(0,r.Z)(a,2),c=l[0],o=l[1],i=(0,u.useState)(!1),s=(0,r.Z)(i,2),m=s[0],p=s[1],v=(0,u.useRef)(null);return(0,u.useEffect)((function(){var e=function(e){var t=e.target;t.scrollLeft===t.scrollWidth-t.offsetWidth&&p(!0)};if(v.current instanceof HTMLElement){var t=new IntersectionObserver((function(e){(0,r.Z)(e,1)[0].isIntersecting&&o(!0)}),{root:null,rootMargin:"0px",threshold:1});return t.observe(v.current),v.current.addEventListener("scroll",e),function(){v.current&&(t.unobserve(v.current),v.current.removeEventListener("scroll",e))}}}),[v]),n.length?u.createElement("div",{ref:v,className:f()(t,d.Z.Gallery)},c&&n.slice(0,m?n.length:3).map((function(e,t){return u.createElement(y,{key:t,src:e,alt:"Image #".concat(t+1)})}))):null}},7945:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(203),a=n(1283),l=n(2784),c=["href"];function o(e){var t=e.href,n=void 0===t?"#":t,o=(0,a.Z)(e,c),i="#"===n[0];return l.createElement("a",(0,r.Z)({href:n,target:i?void 0:"_blank",rel:i?void 0:"noopener noreferrer"},o))}},5445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ke});var r=n(203),a=n(7946),l=n(1283),c=n(9151),o=n(965),i=n(2451),u=n(369),s=n(7162),m=n.n(s),p=n(2784),f=n(1148),d=n(7984),v=n(9369),E=n(8871),g=n(3081),h=n(357),y=n(1927),b=n.n(y),Z=n(9561),w=n(4819),C=n.n(w),k=n(779),P=n(7945),T=n(9635),O=n(5120),F=n(2335),x=n(9468),S=n(2779),j=n.n(S),N=n(7831);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=200,_={accessoriesPrice:"accessoriesPrice",age:"age",capacity:"capacity",consumptionFuel:"consumptionFuel",emission:"emission",id:"id",images:"images",mileage:"mileage",newPrice:"newPrice",optionsPrice:"optionsPrice",powerHP:"powerHP",powerKW:"powerKW",productionYear:"productionYear",transactionalPrice:"transactionalPrice",warranty:"warranty",_created:"_created",_updated:"_updated"};function H(e){var t=e.list,n=e.onSelect,r=(0,p.useState)(null),l=(0,a.Z)(r,2),c=l[0],o=l[1],i=(0,p.useState)((function(){return{xProp:"transactionalPrice",yProp:"newPrice"}})),s=(0,a.Z)(i,2),m=s[0],d=m.xProp,v=m.yProp,E=s[1],g=(0,p.useRef)(null),h=(0,p.useRef)(null),y=(0,p.useRef)(null),b=(0,p.useMemo)((function(){return new f.x}),[]);return(0,p.useEffect)((function(){var e=b.pipe((0,F.w)((function(e){return(0,O.of)(e).pipe((0,x.g)(e?0:800))}))).subscribe((function(e){return o(e)}));return function(){return e.unsubscribe()}}),[b]),(0,p.useEffect)((function(){var e=t.slice(0,2e3).map((function(e){var t=e.item;return[t[d],t[v],"[".concat(t.id,"] ").concat(t.title),t.id]})),r=e.map((function(e){var t=(0,a.Z)(e,1)[0];return void 0===t?0:t})),l=e.map((function(e){var t=(0,a.Z)(e,2)[1];return void 0===t?0:t})),c=[Math.min.apply(Math,(0,u.Z)(r)),Math.max.apply(Math,(0,u.Z)(r))],o=[Math.min.apply(Math,(0,u.Z)(l)),Math.max.apply(Math,(0,u.Z)(l))],i=(0,T.BYU)().domain(c).range([10,310]),s=(0,T.BYU)().domain(o).range([180,20]),m=(0,T.BYU)().domain(c).range(["red","blue"]);(0,T.Ys)(y.current).selectAll("circle").remove(),(0,T.Ys)(y.current).selectAll("circle").data(e).join((function(e){return e.append("circle").attr("cx",(function(e){var t=(0,a.Z)(e,1)[0];return i(void 0===t?0:t)})).attr("cy",(function(e){var t=(0,a.Z)(e,2)[1];return s(void 0===t?0:t)})).attr("r",0).attr("fill",(function(e){var t=(0,a.Z)(e,1)[0];return m(void 0===t?0:t)})).on("click",(function(e,t){var r=(0,a.Z)(t,4)[3];return n(r)})).on("mouseover",(function(e,t){var n=(0,a.Z)(t,3)[2];return b.next({left:e.layerX,top:e.layerY,label:n})})).on("mouseout",(function(e,t){return b.next(null)})).call((function(e){return e.transition().duration(200).attr("r",2).style("opacity",1)}))}),(function(e){return e.attr("fill","lightgrey")}),(function(e){return e.attr("fill","tomato").call((function(e){return e.transition().duration(200).attr("r",0).style("opacity",0).remove()}))}));var p=(0,T.LLu)(i).ticks(5).tickSizeOuter(0);(0,T.Ys)(g.current).call(p);var f=(0,T.y4O)(s).ticks(5).tickSizeOuter(0);(0,T.Ys)(h.current).call(f)}),[t,d,v]),p.createElement("div",{className:j()(N.Z.Chart)},p.createElement("fieldset",null,p.createElement("label",null,p.createElement("span",null,"x"),p.createElement("select",{value:d,onChange:function(e){return E((function(t){return Y(Y({},t),{},{xProp:e.target.value})}))}},Object.entries(_).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)})))),p.createElement("label",null,p.createElement("span",null,"y"),p.createElement("select",{value:v,onChange:function(e){return E((function(t){return Y(Y({},t),{},{yProp:e.target.value})}))}},Object.entries(_).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)}))))),p.createElement("svg",{ref:y,width:320,height:K,viewBox:"0, 0, ".concat(320,", ").concat(K)},p.createElement("g",{transform:"translate(0, ".concat(180,")"),ref:g}),p.createElement("g",{transform:"translate(".concat(10,", 0)"),ref:h})),c&&p.createElement("div",{className:N.Z.Tooltip,style:{top:c.top,left:c.left}},c.label))}var B=n(5062),D=n.n(B),A=n(809),R=n(7234),z=n(5804),L=n(493),U=n(8969),G=n(9982),W=n(6127),I=n(9530),q=n(5096),J=n(1231);function X(e){var t=e.position,n=e.children,r=e.setPosition,a=(0,p.useRef)(null),l=(0,p.useMemo)((function(){return{dragend:function(){var e=a.current;null!=e&&r(e.getLatLng())}}}),[]);return p.createElement(A.J,{draggable:!0,eventHandlers:l,position:t,ref:a},p.createElement(R.u,null,n))}function Q(){var e=(0,z.Sx)(),t=(0,p.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return p.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},p.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},p.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},p.createElement(I.G,{icon:q.KS0}))))}function V(e){var t=e.bounds,r=e.center,l=e.setCenter,c=e.list;(0,p.useEffect)((function(){delete D().Icon.Default.prototype._getIconUrl,D().Icon.Default.mergeOptions({iconRetinaUrl:n(1963).Z,iconUrl:n(379).Z,shadowUrl:n(6179).Z})}),[]);var o=(0,p.useState)(null),i=(0,a.Z)(o,2),u=(i[0],i[1]),s=(0,p.useMemo)((function(){return p.createElement(L.h,{bounds:t,whenCreated:u,zoom:13,className:j()(J.Z.Map)},p.createElement(U.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),p.createElement(X,{position:r,setPosition:l},"".concat(r.lat,",").concat(r.lng)),c.map((function(e){var t=e.i,n=e.id,a=e.position,l=e.name;return e.item,p.createElement(G.c,{key:t,center:a,pathOptions:{color:"purple"}},p.createElement(W.G,{minWidth:90},p.createElement("section",null,p.createElement("header",null,"[".concat(n,"] ").concat(l," (").concat(r.distanceTo(a).toFixed(0)/1e3," km)")))))})),p.createElement(Q,null))}),[c,r]);return p.createElement("div",{className:j()(J.Z.Layout)},s)}var $=n(9757),ee=["options"],te=["children"],ne=["id","images"],re=["entries"],ae=["priceTo"],le=["priceFrom"],ce=["mileageTo"],oe=["mileageFrom"],ie=["powerTo"],ue=["powerFrom"],se=["yearTo"],me=["yearFrom"],pe=["createdTo"],fe=["createdFrom"];function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee={registration:-1,transactionalPrice:1,mileage:1,consumptionFuel:1,productionYear:-1,powerHP:-1,newPrice:-1,optionsPrice:-1,accessoriesPrice:-1,warranty:-1,modelCode:1,seriesCode:1,title:1,_created:-1,_updated:-1},ge=[1,3,5,10,20,50,100,500],he=[0,1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6],ye=[0,1e3,5e3,1e4,2e4,5e4,1e5,15e4,2e5,5e5],be=[0,100,150,200,250,300,400,500,600,700,800,900],Ze={"":"",N:"New",U:"Used"},we=(0,u.Z)(Array(15)).map((function(e,t){return(new Date).getFullYear()-t})).reverse(),Ce=(0,Z.Z)("criterion-vehicles"),ke=(0,Z.Z)("favorites-vehicles"),Pe=(0,h.k)(function(){var e=(0,i.Z)(m().mark((function e(t){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/vehicles/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return e.results})).then((function(e){return{results:e,options:e.reduce((function(e,t){return["dealer","bodyType","driveType","brand","color","fuel","series","seriesCode","modelCode","transmission","gearBox","vatReclaimable","warranty"].reduce((function(e,n){return ve(ve({},e),{},(0,o.Z)({},n,Object.assign({},e[n],"object"===(0,c.Z)(t[n])?(0,o.Z)({},t[n].id,t[n].label||t[n].name):(0,o.Z)({},t[n],t[n]))))}),e)}),{})}})).then((function(e){var t=e.options,n=(0,l.Z)(e,ee);return Object.keys(t).forEach((function(e){return Object.assign(t,(0,o.Z)({},e,Object.entries(t[e]).sort((function(e,t){var n=(0,a.Z)(e,1)[0],r=(0,a.Z)(t,1)[0];return String(n)>String(r)?1:-1})).reduce((function(e,t){var n=(0,a.Z)(t,2),r=n[0],l=n[1];return Object.assign(e,(0,o.Z)({},r,l))}),{})))})),ve({options:t},n)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function Te(e){var t=(0,r.Z)({},e);return p.createElement("button",t)}function Oe(e){var t=e.children,n=(0,l.Z)(e,te);return p.createElement("label",null,p.createElement("input",(0,r.Z)({type:"checkbox"},n)),p.createElement("span",null,t))}function Fe(e){var t=e.color;return p.createElement("a",{className:$.Z.Color,style:{backgroundColor:t.code},title:t.label})}var xe=function(e){var t=e.search,n=e.options;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({filter:t,sortBy:"transactionalPrice",type:"",radius:ge[ge.length-1],priceFrom:he[0],priceTo:he[he.length-1],mileageFrom:ye[0],mileageTo:ye[ye.length-1],powerFrom:be[0],powerTo:be[be.length-1],yearFrom:we[0],yearTo:we[we.length-1],createdFrom:(0,g.Z)(Date.now()-2592e6,"yyyy-MM-dd"),createdTo:(0,g.Z)(Date.now(),"yyyy-MM-dd"),entries:Object.keys(n).reduce((function(e,t){return Object.assign(e,(0,o.Z)({},t,""))}),{})},e)}};function Se(e){var t=e.version,n=void 0===t?"v1":t,o=Pe.read(n),i=o.results,u=o.options,s=(0,p.useState)(""),m=(0,a.Z)(s,2),g=m[0],h=m[1],y=(0,p.useState)(xe({search:g,options:u})),Z=(0,a.Z)(y,2),w=Z[0],C=Z[1],T=(0,p.useMemo)((function(){return new f.x}),[]);(0,p.useEffect)((function(){var e=T.pipe((0,d.U)((function(e){return e.trim()})),(0,v.x)(),(0,E.b)(400)).subscribe((function(e){return C((function(t){return ve(ve({},t),{},{filter:e})}))}));return function(){return e.unsubscribe()}}),[T]),(0,p.useEffect)((function(){T.next(g)}),[g]);var O=(0,p.useCallback)((function(e){var t=e.target.value,n=function(e){return[e.powerHP,e.newPrice,e.optionsPrice,e.productionYear,e.mileage,e.transactionalPrice,e.warranty]},r=b()(i.map(n));console.table(r.knn(n(i.find((function(e){return e._id===t}))),10).slice(0,10).map((function(e){return i[e]})).map((function(e){return[e.id,e.title,e.powerHP,e.newPrice,e.optionsPrice,e.productionYear,e.mileage,e.transactionalPrice,e.warranty]})))}),[i]);console.log({options:u,criteria:w,results:i});var F=(0,p.useMemo)((function(){return i.map((function(e,t){var n=e.id,r=e.dealer,a=r.name;return{i:t,id:n,position:{lat:r.lat,lng:r.lng},name:a,item:e}})).filter((function(e){var t=e.item;return(t.title.toLowerCase().match(w.filter)||w.filter.split(",").map((function(e){return e.trim()})).includes(String(t.id)))&&["",t.isNew?"N":"U"].includes(w.type)&&w.priceFrom<=t.transactionalPrice&&t.transactionalPrice<=w.priceTo&&(void 0===t.mileage||w.mileageFrom<=t.mileage&&t.mileage<=w.mileageTo)&&w.powerFrom<=t.powerHP&&t.powerHP<=w.powerTo&&w.yearFrom<=t.productionYear&&t.productionYear<=w.yearTo&&new Date("".concat(w.createdFrom," 00:00:00")).getTime()<=t._created&&t._created<=new Date("".concat(w.createdTo," 23:59:59")).getTime()&&-1===Object.entries(w.entries).findIndex((function(e){var n=(0,a.Z)(e,2),r=n[0],l=n[1];return![String("object"===(0,c.Z)(t[r])?t[r].id:t[r]),""].includes(l)}))}))}),[i,w]),x=function(e){return(0,p.useMemo)((function(){return D().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return D().marker([n,r])}))).getBounds()}),[])}(F.length?F:[{position:{lat:"52.1530829",lng:"21.1104411"}}]),S=(0,p.useState)((function(){return x.getCenter()})),j=(0,a.Z)(S,2),N=j[0],M=j[1],Y=(0,p.useMemo)((function(){return F.filter((function(e){var t=e.position;return N.distanceTo(t)<1e3*w.radius}))}),[F,N,w.radius]),K=(0,p.useMemo)((function(){return F.sort((function(e,t){return Ee[w.sortBy]*(e.item[w.sortBy]===t.item[w.sortBy]?0:(e.item[w.sortBy]||0)>(t.item[w.sortBy]||0)?1:-1)}))}),[F,w.sortBy]),_=ke([]),B=(0,a.Z)(_,2),A=B[0],R=B[1],z=Ce((function(){return{selected:"",list:[]}})),L=(0,a.Z)(z,2),U=L[0],G=L[1];return(0,p.useEffect)((function(){if(""!==U.selected){var e=U.list[U.selected].criteria;C(xe({search:g,options:u})(e)),h(e.filter)}}),[C,h,U.selected]),p.createElement("div",null,p.createElement(V,{bounds:x,center:N,setCenter:M,list:Y}),p.createElement(H,{list:F,onSelect:function(e){return h(String(e))}}),p.createElement(Me,(0,r.Z)({},w,{options:u,setCriteria:C,search:g,setSearch:h})),p.createElement(Ne,(0,r.Z)({},w,{options:u})),p.createElement(je,{criterion:U,setCriterion:G,criteria:w}),A.length>0?p.createElement("div",null,"Your favorites: ".concat(A.map((function(e){return"[".concat(e,"]")})).join(", "))," ",p.createElement(P.r,{onClick:function(e){return e.preventDefault(),h(A.join(", "))}},"search")," ","|"," ",p.createElement(P.r,{onClick:function(e){return e.preventDefault(),R([])}},"clear")):p.createElement("div",null,"You don't have favorites"),p.createElement("div",null,"Found ".concat(F.length," vehicles out of a total of ").concat(i.length)),p.createElement("ol",null,K.slice(0,100).map((function(e){return e.item})).map((function(e,t){var n=e.id,r=e.images,c=(0,l.Z)(e,ne);return p.createElement("li",{key:t,className:$.Z.Row},p.createElement(k.r,{className:$.Z.Gallery,images:r}),p.createElement(Ye,{item:ve({id:n},c),onClickCompare:O,favorites:A,setFavorites:R}),Object.entries(c._history||{}).reverse().map((function(e,t,r){var l=(0,a.Z)(e,2),o=l[0],i=l[1];return p.createElement(Ye,{key:o,_time:o,item:ve({id:n},i),prev:t?r[t-1][1]:c})})))}))))}function je(e){var t=e.criterion,n=e.setCriterion,r=e.criteria,a=(0,p.useCallback)((function(){return n((function(e){return ve(ve({},e),{},{selected:String(e.list.length),list:e.list.concat([{label:prompt("Filter name:"),criteria:r}])})}))}),[t,r]),l=(0,p.useCallback)((function(){return n((function(e){return C()(e,{list:(0,o.Z)({},e.selected,{criteria:{$apply:function(){return r}}})})}))}),[t,r]),c=(0,p.useCallback)((function(){return n((function(e){return C()(e,{list:(0,o.Z)({},e.selected,{label:{$apply:function(e){return prompt("Rename filter:",e)}}})})}))}),[t]),i=(0,p.useCallback)((function(){return n((function(e){return ve(ve({},e),{},{selected:"",list:e.list.filter((function(t,n){return String(n)!==e.selected}))})}))}),[t]),u=(0,p.useCallback)((function(e){var t=e.target;return n((function(e){return ve(ve({},e),{},{selected:t.value})}))}),[t]),s=(0,p.useMemo)((function(){return""!==t.selected&&JSON.stringify(t.list[t.selected].criteria)===JSON.stringify(r)}),[t,r]);return p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Saved Filters"),p.createElement("select",{value:t.selected,onChange:u},p.createElement("option",{value:""},"--"),t.list.map((function(e,t){var n=e.label;return p.createElement("option",{key:t,value:String(t)},n)}))),""===t.selected?p.createElement("button",{onClick:a},"Save as new criteria"):p.createElement(p.Fragment,null,p.createElement("button",{onClick:l,disabled:s},"Update criteria"),p.createElement("button",{onClick:c},"Rename criteria"),p.createElement("button",{onClick:i},"Remove criteria"))))}function Ne(e){var t=e.filter,n=e.options,r=e.entries,l=e.type,c=e.yearFrom,o=e.yearTo,i=e.createdFrom,u=e.createdTo,s=e.priceFrom,m=e.priceTo,f=e.mileageFrom,d=e.mileageTo,v=e.powerFrom,E=e.powerTo,g=e.radius,h=e.sortBy;return p.createElement("fieldset",null,l&&p.createElement("div",null,p.createElement("span",null,"Type")," ",p.createElement("span",null,Ze[l])),t&&p.createElement("div",null,p.createElement("span",null,"Search")," ",p.createElement("span",null,t)),p.createElement("div",null,p.createElement("span",null,"Sort")," ",p.createElement("span",null,h)),p.createElement("div",null,p.createElement("span",null,"Radius")," ",p.createElement("span",null,"max ".concat(g," km"))),p.createElement("div",null,p.createElement("span",null,"Year")," ",p.createElement("span",null,"".concat(c,"-").concat(o))),p.createElement("div",null,p.createElement("span",null,"Mileage")," ",p.createElement("span",null,"".concat(f,"-").concat(d," km"))),p.createElement("div",null,p.createElement("span",null,"Price")," ",p.createElement("span",null,"".concat(s,"-").concat(m," pln"))),p.createElement("div",null,p.createElement("span",null,"Power")," ",p.createElement("span",null,"".concat(v,"-").concat(E," hp"))),p.createElement("div",null,p.createElement("span",null,"Created")," ",p.createElement("span",null,"".concat(i,"-").concat(u))),Object.entries(r).filter((function(e){return""!==(0,a.Z)(e,2)[1]})).map((function(e,t){var r=(0,a.Z)(e,2),l=r[0],c=r[1];return p.createElement("div",{key:t},p.createElement("span",null,l)," ",p.createElement("span",null,n[l][c]))})))}function Me(e){var t=e.search,n=e.options,r=e.entries,c=e.type,i=e.yearFrom,u=e.yearTo,s=e.createdFrom,m=e.createdTo,f=e.priceFrom,d=e.priceTo,v=e.mileageFrom,E=e.mileageTo,g=e.powerFrom,h=e.powerTo,y=e.radius,b=e.setCriteria,Z=e.setSearch,w=e.sortBy,C=(0,p.useCallback)((function(e){var t=e.target;return Z(t.value)}),[]),k=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.entries;return ve(ve({},(0,l.Z)(e,re)),{},{entries:ve(ve({},n),{},(0,o.Z)({},t.name,t.value))})}))}),[]),P=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){return ve(ve({},e),{},{sortBy:t.value})}))}),[]),T=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){return ve(ve({},e),{},{type:t.value})}))}),[]),O=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){return ve(ve({},e),{},{radius:Number(t.value)})}))}),[]),F=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.priceTo,r=(0,l.Z)(e,ae),a=Number(t.value);return ve(ve({},r),{},{priceFrom:a,priceTo:n<a?a:n})}))}),[]),x=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.priceFrom,r=(0,l.Z)(e,le),a=Number(t.value);return ve(ve({},r),{},{priceFrom:a>n?n:a,priceTo:a})}))}),[]),S=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.mileageTo,r=(0,l.Z)(e,ce),a=Number(t.value);return ve(ve({},r),{},{mileageFrom:a,mileageTo:n<a?a:n})}))}),[]),j=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.mileageFrom,r=(0,l.Z)(e,oe),a=Number(t.value);return ve(ve({},r),{},{mileageFrom:a>n?n:a,mileageTo:a})}))}),[]),N=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.powerTo,r=(0,l.Z)(e,ie),a=Number(t.value);return ve(ve({},r),{},{powerFrom:a,powerTo:n<a?a:n})}))}),[]),M=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.powerFrom,r=(0,l.Z)(e,ue),a=Number(t.value);return ve(ve({},r),{},{powerFrom:a>n?n:a,powerTo:a})}))}),[]),Y=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.yearTo,r=(0,l.Z)(e,se),a=Number(t.value);return ve(ve({},r),{},{yearFrom:a,yearTo:n<a?a:n})}))}),[]),K=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.yearFrom,r=(0,l.Z)(e,me),a=Number(t.value);return ve(ve({},r),{},{yearFrom:a>n?n:a,yearTo:a})}))}),[]),_=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.createdTo,r=(0,l.Z)(e,pe),a=t.value;return ve(ve({},r),{},{createdFrom:a,createdTo:n<a?a:n})}))}),[]),H=(0,p.useCallback)((function(e){var t=e.target;return b((function(e){var n=e.createdFrom,r=(0,l.Z)(e,fe),a=t.value;return ve(ve({},r),{},{createdFrom:a>n?n:a,createdTo:a})}))}),[]);return p.createElement("fieldset",null,p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Type"),p.createElement("select",{value:c,onChange:T},Object.entries(Ze).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)})))),p.createElement("label",null,p.createElement("span",null,"Search"),p.createElement("input",{type:"search",value:t,onChange:C})),p.createElement("label",null,p.createElement("span",null,"Sort"),p.createElement("select",{value:w,onChange:P},Object.entries(Ee).map((function(e){var t=(0,a.Z)(e,1)[0];return p.createElement("option",{key:t,value:t},t)})))),p.createElement("label",null,p.createElement("span",null,"Radius"),p.createElement("input",{type:"range",list:"range-list",min:ge[0],max:ge[ge.length-1],value:y,onChange:O}),p.createElement("datalist",{id:"range-list"},ge.map((function(e){return p.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?"".concat(e," km"):void 0})}))),p.createElement("span",null,"max ".concat(y," km")))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Year From"),p.createElement("input",{type:"range",list:"year-list",min:we[0],max:we[we.length-1],value:i,onChange:Y}),p.createElement("datalist",{id:"year-list"},we.map((function(e){return p.createElement("option",{key:e,value:e,label:[0,2010,2015,2020].includes(e)?"".concat(e):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Year To"),p.createElement("input",{type:"range",list:"year-list",min:we[0],max:we[we.length-1],value:u,onChange:K}),p.createElement("span",null,"".concat(i,"-").concat(u)))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Mileage From"),p.createElement("input",{type:"range",list:"mileage-list",min:ye[0],max:ye[ye.length-1],value:v,onChange:S}),p.createElement("datalist",{id:"mileage-list"},ye.map((function(e){return p.createElement("option",{key:e,value:e,label:ye.includes(e)?"".concat(e):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Mileage To"),p.createElement("input",{type:"range",list:"mileage-list",min:ye[0],max:ye[ye.length-1],value:E,onChange:j}),p.createElement("span",null,"".concat(v,"-").concat(E," km")))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Price From"),p.createElement("input",{type:"range",list:"price-list",min:he[0],max:he[he.length-1],value:f,onChange:F}),p.createElement("datalist",{id:"price-list"},he.map((function(e){return p.createElement("option",{key:e,value:e,label:[0,1e5,2e5,3e5,4e5,5e5].includes(e)?"".concat(e," pln"):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Price To"),p.createElement("input",{type:"range",list:"price-list",min:he[0],max:he[he.length-1],value:d,onChange:x}),p.createElement("span",null,"".concat(f,"-").concat(d," pln")))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Power From"),p.createElement("input",{type:"range",list:"power-list",min:be[0],max:be[be.length-1],value:g,onChange:N}),p.createElement("datalist",{id:"power-list"},be.map((function(e){return p.createElement("option",{key:e,value:e,label:be.includes(e)?"".concat(e," hp"):void 0})})))),p.createElement("label",null,p.createElement("span",null,"Power To"),p.createElement("input",{type:"range",list:"power-list",min:be[0],max:be[be.length-1],value:h,onChange:M}),p.createElement("span",null,"".concat(g,"-").concat(h," hp")))),p.createElement("div",null,p.createElement("label",null,p.createElement("span",null,"Created From"),p.createElement("input",{type:"date",value:s,onChange:_})),p.createElement("label",null,p.createElement("span",null,"Created To"),p.createElement("input",{type:"date",value:m,onChange:H}))),Object.entries(r).filter((function(e){var t=(0,a.Z)(e,1)[0];return n[t]})).map((function(e,t){var r=(0,a.Z)(e,2),l=r[0],c=r[1];return p.createElement("div",{key:t},p.createElement("label",null,p.createElement("span",null,l),p.createElement("select",{name:l,value:c,onChange:k},p.createElement("option",{value:""},"--"),Object.entries(n[l]).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return p.createElement("option",{key:n,value:n},r)})))))})))}function Ye(e){var t=e._time,n=e.item,r=e.onClickCompare,a=e.prev,l=e.favorites,o=e.setFavorites,i=n.id,u=n.href,s=n.title,m=n.brand,f=n.series,d=void 0===f?{}:f,v=n.seriesCode,E=n.bodyType,h=n.modelCode,y=n.fuel,b=n.color,Z=n.transmission,w=n.capacity,C=n.consumptionFuel,k=n.emission,T=n.powerHP,O=n.productionYear,F=n.registration,x=n.age,S=n.mileage,N=n.transactionalPrice,M=n.newPrice,Y=n.warranty,K=n.created,_=n.imagesLastChanged,H=function(e){return n&&a&&n[e]!==a[e]};return p.createElement("ul",{className:$.Z.Details},p.createElement("li",null,p.createElement(Fe,{color:b}),p.createElement(P.r,{href:u},"[".concat(i,"] ").concat(s)),r&&p.createElement(Te,{onClick:r,value:n._id},"Compare"),o&&p.createElement(Oe,{checked:l.includes(i),onChange:function(e){return o((function(t){return e.target.checked?t.concat(i):t.filter((function(e){return e!==i}))}))}},"Favorite")),p.createElement("li",null,"[","object"===(0,c.Z)(v)?v.label:v,"]"," ",m.label," ",d.label," ",E.label," ",y.label," ",Z.label),p.createElement("li",null,"[","object"===(0,c.Z)(h)?h.label:h,"]"," ",w&&p.createElement("span",null,"capacity: ",w)," ",T&&p.createElement("span",null,"powerHP: ",T)," ",C&&p.createElement("span",null,"consumptionFuel: ",C)," ",k&&p.createElement("span",null,"emission: ",k)),p.createElement("li",null,p.createElement("span",null,"productionYear: ",O)," ",Boolean(M)&&p.createElement("span",null,"newPrice: ",M)," ",Boolean(n.optionsPrice)&&p.createElement("span",null,"optionsPrice: ",n.optionsPrice)," ",Boolean(n.accessoriesPrice)&&p.createElement("span",null,"accessoriesPrice: ",n.accessoriesPrice)),p.createElement("li",null,F&&p.createElement("span",{className:j()($.Z.Compare,H("registration")&&$.Z.changed)},"registration: ",F.split("T")[0])," ",x&&p.createElement("span",{className:j()($.Z.Compare,H("age")&&$.Z.changed)},"age: ",x)," ",S&&p.createElement("span",{className:j()($.Z.Compare,H("mileage")&&$.Z.changed)},"mileage: ",S)),p.createElement("li",null,p.createElement("span",{className:j()($.Z.Compare,H("transactionalPrice")&&$.Z.changed)},"transactionalPrice: ",N)," ",p.createElement("span",{className:j()($.Z.Compare,H("vatReclaimable")&&$.Z.changed)},"vatReclaimable: ",n.vatReclaimable)," ",p.createElement("span",{className:j()($.Z.Compare,H("warranty")&&$.Z.changed)},"warranty: ",Y)),(t||_)&&p.createElement("li",null,"[",t?(0,g.Z)(Number(t),"yyyy-MM-dd HH:mm"):"-","] ",K," ",_&&p.createElement("span",null,"imagesLastChanged: ",_)),(n._created||n._updated)&&p.createElement("li",null,n._created&&p.createElement("span",{className:j()($.Z.Compare)},"_created: ",(0,g.Z)(Number(n._created),"yyyy-MM-dd HH:mm")," "),n._updated&&p.createElement("span",{className:j()($.Z.Compare)},"_updated: ",(0,g.Z)(Number(n._updated),"yyyy-MM-dd HH:mm")," ")))}function Ke(){return p.createElement("div",{className:$.Z.Section},p.createElement("h2",null,"Vehicles"),p.createElement(Se,null))}},4388:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(9601),a=n.n(r),l=n(2609),c=n.n(l)()(a());c.push([e.id,".zDhTSHDK36rhYKliKHPK{position:relative;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;scroll-snap-type:x mandatory}.zDhTSHDK36rhYKliKHPK .UnJMuQpv6llk8RTmAd38{width:100%;height:100%;flex-shrink:0}.zDhTSHDK36rhYKliKHPK .dqe1lChX5OeU5si424uG{width:100%;height:100%}.zDhTSHDK36rhYKliKHPK img{max-height:100%;scroll-snap-align:start}.dqe1lChX5OeU5si424uG{display:flex;align-items:center;justify-content:center}.dqe1lChX5OeU5si424uG svg{flex:none;width:64px;height:64px}",""]),c.locals={Gallery:"zDhTSHDK36rhYKliKHPK",ImgWrapper:"UnJMuQpv6llk8RTmAd38",Loader:"dqe1lChX5OeU5si424uG"};const o=c},6583:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(9601),a=n.n(r),l=n(2609),c=n.n(l)()(a());c.push([e.id,".jym2UAfwYghQzKOP2VHa{position:relative;border:2px solid red}.jym2UAfwYghQzKOP2VHa svg{width:100%;height:50vh}.jym2UAfwYghQzKOP2VHa .s381NcqWwmo0Qir3pBAh{position:absolute}.s381NcqWwmo0Qir3pBAh{background:#fff;border:1px solid #add8e6;color:orange;padding:.25em}",""]),c.locals={Chart:"jym2UAfwYghQzKOP2VHa",Tooltip:"s381NcqWwmo0Qir3pBAh"};const o=c},1617:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(9601),a=n.n(r),l=n(2609),c=n.n(l),o=n(9138),i=c()(a());i.i(o.Z),i.push([e.id,".vXpyyqKMf2Eg0uZBGb3A{height:75vh;border:2px solid red}.vXpyyqKMf2Eg0uZBGb3A header{font-weight:bold}",""]),i.locals={Map:"vXpyyqKMf2Eg0uZBGb3A"};const u=i},303:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(9601),a=n.n(r),l=n(2609),c=n.n(l)()(a());c.push([e.id,".dnNulWhTs84wB_yi0tu2{color:green}.eZcT7zT7zcKeynqlJ5cC{clear:both}.LihBxmStNILK5SsWSml4{display:inline-block;width:1em;height:1em;border:2px solid #000;border-radius:50%}.WV27lBhC9zjxECQGlM6O{float:left;width:200px;height:150px}.REcFotXkdh1Z8ismoSwA{color:gray}.REcFotXkdh1Z8ismoSwA .FEMh9gY8aLCa_GmJxYqs{color:#000}.REcFotXkdh1Z8ismoSwA .FEMh9gY8aLCa_GmJxYqs.MS_t7pWYsJpHZMz6NksN{color:red}",""]),c.locals={Section:"dnNulWhTs84wB_yi0tu2",Row:"eZcT7zT7zcKeynqlJ5cC",Color:"LihBxmStNILK5SsWSml4",Gallery:"WV27lBhC9zjxECQGlM6O",Details:"REcFotXkdh1Z8ismoSwA",Compare:"FEMh9gY8aLCa_GmJxYqs",changed:"MS_t7pWYsJpHZMz6NksN"};const o=c},6435:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(6062),a=n.n(r),l=n(4036),c=n.n(l),o=n(6793),i=n.n(o),u=n(7892),s=n.n(u),m=n(1173),p=n.n(m),f=n(2464),d=n.n(f),v=n(4388),E={};E.styleTagTransform=d(),E.setAttributes=s(),E.insert=i().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=p();var g=a()(v.default,E);if(!v.default.locals||e.hot.invalidate){var h=!v.default.locals,y=h?v:v.default.locals;e.hot.accept(4388,(t=>{v=n(4388),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(y,h?v:v.default.locals,h)?(y=h?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const b=v.default&&v.default.locals?v.default.locals:void 0},7831:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(6062),a=n.n(r),l=n(4036),c=n.n(l),o=n(6793),i=n.n(o),u=n(7892),s=n.n(u),m=n(1173),p=n.n(m),f=n(2464),d=n.n(f),v=n(6583),E={};E.styleTagTransform=d(),E.setAttributes=s(),E.insert=i().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=p();var g=a()(v.default,E);if(!v.default.locals||e.hot.invalidate){var h=!v.default.locals,y=h?v:v.default.locals;e.hot.accept(6583,(t=>{v=n(6583),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(y,h?v:v.default.locals,h)?(y=h?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const b=v.default&&v.default.locals?v.default.locals:void 0},1231:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(6062),a=n.n(r),l=n(4036),c=n.n(l),o=n(6793),i=n.n(o),u=n(7892),s=n.n(u),m=n(1173),p=n.n(m),f=n(2464),d=n.n(f),v=n(1617),E={};E.styleTagTransform=d(),E.setAttributes=s(),E.insert=i().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=p();var g=a()(v.default,E);if(!v.default.locals||e.hot.invalidate){var h=!v.default.locals,y=h?v:v.default.locals;e.hot.accept(1617,(t=>{v=n(1617),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(y,h?v:v.default.locals,h)?(y=h?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const b=v.default&&v.default.locals?v.default.locals:void 0},9757:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(6062),a=n.n(r),l=n(4036),c=n.n(l),o=n(6793),i=n.n(o),u=n(7892),s=n.n(u),m=n(1173),p=n.n(m),f=n(2464),d=n.n(f),v=n(303),E={};E.styleTagTransform=d(),E.setAttributes=s(),E.insert=i().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=p();var g=a()(v.default,E);if(!v.default.locals||e.hot.invalidate){var h=!v.default.locals,y=h?v:v.default.locals;e.hot.accept(303,(t=>{v=n(303),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(y,h?v:v.default.locals,h)?(y=h?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const b=v.default&&v.default.locals?v.default.locals:void 0}}]);