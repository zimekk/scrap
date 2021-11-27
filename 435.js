"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[435],{8435:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var r=n(1283),a=n(7946),l=n(965),o=n(2451),c=n(7162),u=n.n(c),i=n(2784),s=n(357),f=n(369),d=n(9635),p=n(2779),m=n.n(p),v=n(1148),b=n(5120),h=n(2335),g=n(9468),y=n(4437);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=200,k={id:"id",station_id:"station_id",network_id:"network_id",_petrol_on:"_petrol_on",_petrol_pb:"_petrol_pb",_distance:"_distance",_created:"_created",_updated:"_updated"};function j(e){var t=e.list,n=(0,i.useState)(null),r=(0,a.Z)(n,2),l=r[0],o=r[1],c=(0,i.useState)((function(){return{xProp:"network_id",yProp:"_petrol_pb"}})),u=(0,a.Z)(c,2),s=u[0],p=s.xProp,E=s.yProp,j=u[1],w=(0,i.useRef)(null),_=(0,i.useRef)(null),S=(0,i.useRef)(null),P=(0,i.useMemo)((function(){return new v.x}),[]);return(0,i.useEffect)((function(){var e=P.pipe((0,h.w)((function(e){return(0,b.of)(e).pipe((0,g.g)(e?0:800))}))).subscribe((function(e){return o(e)}));return function(){return e.unsubscribe()}}),[P]),(0,i.useEffect)((function(){var e=t.filter((function(e){var t=e.item;return t[p]&&t[E]})).slice(0,2e3).map((function(e){var t=e.item;return[t[p],t[E],"[".concat(t.id,"] ").concat(t.network_name," (").concat(t[p]," / ").concat(t[E],")")]})),n=e.map((function(e){var t=(0,a.Z)(e,1)[0];return void 0===t?0:t})),r=e.map((function(e){var t=(0,a.Z)(e,2)[1];return void 0===t?0:t})),l=[Math.min.apply(Math,(0,f.Z)(n)),Math.max.apply(Math,(0,f.Z)(n))],o=[Math.min.apply(Math,(0,f.Z)(r)),Math.max.apply(Math,(0,f.Z)(r))],c=(0,d.BYU)().domain(l).range([10,310]),u=(0,d.BYU)().domain(o).range([180,20]),i=(0,d.BYU)().domain(l).range(["red","blue"]);(0,d.Ys)(S.current).selectAll("circle").remove(),(0,d.Ys)(S.current).selectAll("circle").data(e).join((function(e){return e.append("circle").attr("cx",(function(e){var t=(0,a.Z)(e,1)[0];return c(void 0===t?0:t)})).attr("cy",(function(e){var t=(0,a.Z)(e,2)[1];return u(void 0===t?0:t)})).attr("r",0).attr("fill",(function(e){var t=(0,a.Z)(e,1)[0];return i(void 0===t?0:t)})).on("mouseover",(function(e,t){var n=(0,a.Z)(t,3)[2];return P.next({left:e.layerX,top:e.layerY,label:n})})).on("mouseout",(function(e,t){return P.next(null)})).call((function(e){return e.transition().duration(200).attr("r",2).style("opacity",1)}))}),(function(e){return e.attr("fill","lightgrey")}),(function(e){return e.attr("fill","tomato").call((function(e){return e.transition().duration(200).attr("r",0).style("opacity",0).remove()}))}));var s=(0,d.LLu)(c).ticks(5).tickSizeOuter(0);(0,d.Ys)(w.current).call(s);var m=(0,d.y4O)(u).ticks(5).tickSizeOuter(0);(0,d.Ys)(_.current).call(m)}),[t,p,E]),i.createElement("div",{className:m()(y.Z.Chart)},i.createElement("fieldset",null,i.createElement("label",null,i.createElement("span",null,"x"),i.createElement("select",{value:p,onChange:function(e){return j((function(t){return O(O({},t),{},{xProp:e.target.value})}))}},Object.entries(k).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return i.createElement("option",{key:n,value:n},r)})))),i.createElement("label",null,i.createElement("span",null,"y"),i.createElement("select",{value:E,onChange:function(e){return j((function(t){return O(O({},t),{},{yProp:e.target.value})}))}},Object.entries(k).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return i.createElement("option",{key:n,value:n},r)}))))),i.createElement("svg",{ref:S,width:320,height:Z,viewBox:"0, 0, ".concat(320,", ").concat(Z)},i.createElement("g",{transform:"translate(0, ".concat(180,")"),ref:w}),i.createElement("g",{transform:"translate(".concat(10,", 0)"),ref:_})),l&&i.createElement("div",{className:y.Z.Tooltip,style:{top:l.top,left:l.left}},l.label))}var w=n(5062),_=n.n(w),S=n(809),P=n(7234),x=n(5804),N=n(493),C=n(8969),M=n(9982),T=n(6127),U=n(9530),I=n(5096),D=n(7815);function Y(e){var t=e.position,n=e.children,r=e.setPosition,a=(0,i.useRef)(null),l=(0,i.useMemo)((function(){return{dragend:function(){var e=a.current;null!=e&&r(e.getLatLng())}}}),[]);return i.createElement(S.J,{draggable:!0,eventHandlers:l,position:t,ref:a},i.createElement(P.u,null,n))}function H(){var e=(0,x.Sx)(),t=(0,i.useCallback)((function(t){t.preventDefault(),e.locate({setView:!0})}),[e]);return i.createElement("div",{className:"leaflet-top leaflet-left",style:{top:80,fontSize:16}},i.createElement("div",{className:"leaflet-control-locate leaflet-bar leaflet-control"},i.createElement("a",{className:"leaflet-bar-part leaflet-bar-part-single",title:"Locate",href:"#",onClick:t},i.createElement(U.G,{icon:I.KS0}))))}function L(e){var t=e.data;return i.createElement("div",null,i.createElement("table",null,i.createElement("tbody",null,i.createElement("tr",null,i.createElement("td",null),Object.keys(t.header).map((function(e,t){return i.createElement("th",{key:t},e)}))),t.rows.sort((function(e,t){return t.date-e.date})).map((function(e,n){var r=e.date,a=e.list;return i.createElement("tr",{key:n},i.createElement("th",null,new Date(r).toISOString().split("T")[0]),Object.keys(t.header).map((function(e,t){return i.createElement("td",{key:t},a[e])})))})))))}function G(e){return(0,i.useMemo)((function(){return _().featureGroup(e.map((function(e){var t=e.position,n=t.lat,r=t.lng;return _().marker([n,r])}))).getBounds()}),[])}function B(e){var t=e.bounds,r=e.center,o=e.setCenter,c=e.list,u=e.zoom,s=void 0===u?12:u;(0,i.useEffect)((function(){delete _().Icon.Default.prototype._getIconUrl,_().Icon.Default.mergeOptions({iconRetinaUrl:n(1963).Z,iconUrl:n(379).Z,shadowUrl:n(6179).Z})}),[]);var f=(0,i.useMemo)((function(){return i.createElement(N.h,{bounds:t,center:r,zoom:s,className:m()(D.Z.Map)},i.createElement(C.I,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.createElement(Y,{position:r,setPosition:o},"".concat(r.lat,",").concat(r.lng)),c.map((function(e){var t=e.i,n=e.id,o=e.position,c=e.name,u=e.item;return i.createElement(M.c,{key:t,center:o,pathOptions:{color:"purple"}},i.createElement(T.G,{minWidth:90},i.createElement("section",null,i.createElement("header",null,"[".concat(n,"] ").concat([c].concat(u.address||[]).join(" - ")," (").concat(r.distanceTo(o).toFixed(0)/1e3," km)")),i.createElement(L,{data:Object.entries(Object.assign((0,l.Z)({},u._updated||u._created,u.petrol_list.reduce((function(e,t){var n=t.type,r=t.price;return Object.assign(e,(0,l.Z)({},n,r))}),{})),u._history)).reduce((function(e,t){var n=(0,a.Z)(t,2),r=n[0],o=n[1];return Object.assign(e,{header:Object.keys(o).reduce((function(e,t){return Object.assign(e,(0,l.Z)({},t,t))}),e.header),rows:e.rows.concat([{date:Number(r),list:o}])})}),{header:{},rows:[]})}))))})),i.createElement(H,null))}),[c,r]);return i.createElement("div",{className:m()(D.Z.Layout)},f)}var A=n(4772),R=n(8723),z=["position","item"];function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=[1,3,5,10,20,50,100,500],F=[0,1,2,3,4,5,6,7,8,9,10],K={"":"",pb:"pb","pb+":"pb+",on:"on","on+":"on+",lpg:"lpg","lpg+":"lpg+"},V=(0,s.k)(function(){var e=(0,o.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/stations/data.json?".concat(t));case 2:return n=e.sent,e.next=5,n.json().then((function(e){return{results:e.results.map((function(e){return J(J({},e.petrol_list.reduce((function(e,t){var n=t.type,r=t.price;return Object.assign(e,(0,l.Z)({},"_petrol_".concat(n),Number(r)||0))}),{})),e)}))}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function W(e){var t=e.version,n=void 0===t?"v1":t,l=V.read(n).results,o=(0,i.useState)(""),c=(0,a.Z)(o,2),u=c[0],s=c[1],f=(0,A.Z)(u),d=(0,a.Z)(f,1)[0],p=(0,i.useCallback)((function(e){var t=e.target;return s(t.value)}),[]),m=(0,i.useState)(5),v=(0,a.Z)(m,2),b=v[0],h=v[1],g=(0,i.useCallback)((function(e){var t=e.target;return h(Number(t.value))}),[]),y=(0,i.useState)((function(){return Object.keys(K)[0]})),E=(0,a.Z)(y,2),O=E[0],Z=E[1],k=(0,i.useCallback)((function(e){var t=e.target;return Z(t.value)}),[]),w=(0,i.useState)(F[0]),_=(0,a.Z)(w,2),S=_[0],P=_[1],x=(0,i.useState)(F[F.length-1]),N=(0,a.Z)(x,2),C=N[0],M=N[1],T=(0,i.useCallback)((function(e){var t=e.target;return M((function(e){var n=Number(t.value);return P(n),e<n?n:e}))}),[]),U=(0,i.useCallback)((function(e){var t=e.target;return P((function(e){var n=Number(t.value);return M(n),n>e?e:n}))}),[]);console.log({results:l});var I=(0,i.useMemo)((function(){return l.map((function(e,t){return{i:t,id:e.station_id,position:{lat:e.x,lng:e.y},name:e.network_name,item:e}})).filter((function(e){var t,n=e.name,r=e.item,a=r.petrol_list,l=r.address,o=void 0===l?"":l;return(n.toLowerCase().match(d)||o.toLowerCase().match(d))&&(!O||(t=a.find((function(e){return e.type===O})),Boolean(t)&&S<=t.price&&t.price<=C))}))}),[l,d,O,S,C]),D=G([{position:{lat:52.232855,lng:20.921111}}]),Y=(0,i.useState)((function(){return D.getCenter()})),H=(0,a.Z)(Y,2),L=H[0],R=H[1],Q=(0,i.useMemo)((function(){return I.map((function(e){var t=e.position,n=e.item,a=(0,r.Z)(e,z);return J({position:t,item:J(J({},n),{},{_distance:L.distanceTo(t)})},a)})).filter((function(e){return e.item._distance<1e3*b}))}),[I,L,b]),W=G(Q);return i.createElement("div",null,i.createElement(B,{bounds:W,center:L,setCenter:R,list:Q}),i.createElement(j,{list:Q}),i.createElement("fieldset",null,i.createElement("div",null,i.createElement("label",null,i.createElement("span",null,"Search"),i.createElement("input",{type:"search",value:u,onChange:p})),i.createElement("label",null,i.createElement("span",null,"Radius"),i.createElement("input",{type:"range",list:"range-list",min:X[0],max:X[X.length-1],value:b,onChange:g}),i.createElement("datalist",{id:"range-list"},X.map((function(e){return i.createElement("option",{key:e,value:e,label:[1,25,100].includes(e)?"".concat(e," km"):void 0})}))),i.createElement("span",null,"max ".concat(b," km")))),i.createElement("div",null,i.createElement("label",null,i.createElement("span",null,"Type"),i.createElement("select",{value:O,onChange:k},Object.entries(K).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return i.createElement("option",{key:n,value:n},r)}))))),i.createElement("div",null,i.createElement("label",null,i.createElement("span",null,"Price From"),i.createElement("input",{type:"range",list:"price-list",min:F[0],max:F[F.length-1],value:S,onChange:T}),i.createElement("datalist",{id:"price-list"},F.map((function(e){return i.createElement("option",{key:e,value:e,label:[0,1,2,3,4,5].includes(e)?"".concat(e," pln/l"):void 0})})))),i.createElement("label",null,i.createElement("span",null,"Price To"),i.createElement("input",{type:"range",list:"price-list",min:F[0],max:F[F.length-1],value:C,onChange:U}),i.createElement("span",null,"".concat(S,"-").concat(C," pln/l"))))))}function q(){return i.createElement("div",{className:R.Z.Section},i.createElement("h2",null,"Stations"),i.createElement(W,null))}},4772:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7946),a=n(2784);function l(e){var t=(0,a.useState)(e),n=(0,r.Z)(t,2),l=n[0],o=n[1],c=(0,a.useRef)();return(0,a.useEffect)((function(){return clearTimeout(c.current),c.current=setTimeout((function(){return o(e.toLowerCase())}),400),function(){clearTimeout(c.current)}}),[e]),[l]}},8365:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(9601),a=n.n(r),l=n(2609),o=n.n(l)()(a());o.push([e.id,".NjHXg9NGgpl1h6itsGUI{position:relative;border:2px solid red}.NjHXg9NGgpl1h6itsGUI svg{width:100%;height:50vh}.NjHXg9NGgpl1h6itsGUI .Qeuu3ubiYLZshSsQhUN6{position:absolute}.Qeuu3ubiYLZshSsQhUN6{background:#fff;border:1px solid #add8e6;color:orange;padding:.25em}",""]),o.locals={Chart:"NjHXg9NGgpl1h6itsGUI",Tooltip:"Qeuu3ubiYLZshSsQhUN6"};const c=o},4312:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(9601),a=n.n(r),l=n(2609),o=n.n(l),c=n(9138),u=o()(a());u.i(c.Z),u.push([e.id,".cStyiPbxd0HI9tByMkkY{height:75vh;border:2px solid red}.cStyiPbxd0HI9tByMkkY header{font-weight:bold}",""]),u.locals={Map:"cStyiPbxd0HI9tByMkkY"};const i=u},7938:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(9601),a=n.n(r),l=n(2609),o=n.n(l)()(a());o.push([e.id,".JTHop_UDHoyJmmN4pc6w{color:blue}",""]),o.locals={Section:"JTHop_UDHoyJmmN4pc6w"};const c=o},4437:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(6062),a=n.n(r),l=n(4036),o=n.n(l),c=n(6793),u=n.n(c),i=n(7892),s=n.n(i),f=n(1173),d=n.n(f),p=n(2464),m=n.n(p),v=n(8365),b={};b.styleTagTransform=m(),b.setAttributes=s(),b.insert=u().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d();var h=a()(v.default,b);if(!v.default.locals||e.hot.invalidate){var g=!v.default.locals,y=g?v:v.default.locals;e.hot.accept(8365,(t=>{v=n(8365),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(y,g?v:v.default.locals,g)?(y=g?v:v.default.locals,h(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const E=v.default&&v.default.locals?v.default.locals:void 0},7815:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(6062),a=n.n(r),l=n(4036),o=n.n(l),c=n(6793),u=n.n(c),i=n(7892),s=n.n(i),f=n(1173),d=n.n(f),p=n(2464),m=n.n(p),v=n(4312),b={};b.styleTagTransform=m(),b.setAttributes=s(),b.insert=u().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d();var h=a()(v.default,b);if(!v.default.locals||e.hot.invalidate){var g=!v.default.locals,y=g?v:v.default.locals;e.hot.accept(4312,(t=>{v=n(4312),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(y,g?v:v.default.locals,g)?(y=g?v:v.default.locals,h(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const E=v.default&&v.default.locals?v.default.locals:void 0},8723:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(6062),a=n.n(r),l=n(4036),o=n.n(l),c=n(6793),u=n.n(c),i=n(7892),s=n.n(i),f=n(1173),d=n.n(f),p=n(2464),m=n.n(p),v=n(7938),b={};b.styleTagTransform=m(),b.setAttributes=s(),b.insert=u().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d();var h=a()(v.default,b);if(!v.default.locals||e.hot.invalidate){var g=!v.default.locals,y=g?v:v.default.locals;e.hot.accept(7938,(t=>{v=n(7938),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(y,g?v:v.default.locals,g)?(y=g?v:v.default.locals,h(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const E=v.default&&v.default.locals?v.default.locals:void 0}}]);