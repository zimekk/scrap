"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[616],{6616:(t,e,n)=>{n.d(e,{u:()=>j,A:()=>O});var r=n(4041),a=n(4895),o=n(8283),l=n(6004),c=n(5118),i=n(8737),s=n(2818),u=n(9126);function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=n(3373),m=n.n(d),A=n(2591),y=n.n(A),v=n(1740),p=n.n(v),g=n(8128),h=n.n(g),b=n(855),x=n.n(b),C=n(3051),E=n.n(C),w=n(3656),k=n.n(w),M=n(4661),U={};U.styleTagTransform=k(),U.setAttributes=x(),U.insert=h().bind(null,"head"),U.domAPI=p(),U.insertStyleElement=E(),y()(M.A,U);const B=M.A&&M.A.locals?M.A.locals:void 0;function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,l,c=[],i=!0,s=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(c.push(r.value),c.length!==e);i=!0);}catch(t){s=!0,a=t}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var T=(0,r.createContext)(void 0);function j(t){var e=t.children,n=(0,r.useMemo)((function(){return new l.B}),[]);return r.createElement(T.Provider,{value:n},e)}function O(t){var e=t.legend,n=void 0!==e&&e,d=t.list,A=t.move,y=t.type,v=void 0===y?"line":y,p=t.rule,g=void 0!==p&&p,h=(0,r.useMemo)((function(){return new l.B}),[]),b=(0,r.useContext)(T)||h,x=(0,r.useId)(),C=(0,r.useRef)(null),E=(0,r.useRef)(null),w=(0,r.useRef)(null),k=function(t){var e,n,a=(e=(0,r.useState)(null),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,l,c=[],i=!0,s=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(c.push(r.value),c.length!==e);i=!0);}catch(t){s=!0,a=t}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],l=a[1];return(0,r.useEffect)((function(){var e=t.current;if(e){var n=new u.A((function(t){t.forEach((function(t){l(t.contentRect)}))}));return n.observe(e),function(){n.unobserve(e)}}}),[t]),o}(w),M=S((0,r.useState)(),2),U=M[0],N=M[1],j=S((0,r.useState)(null),2),O=j[0],R=j[1],L=(0,r.useMemo)((function(){return new l.B}),[]);(0,r.useEffect)((function(){var t=(0,a.Ltv)(E.current).style("opacity",0).style("pointer-events","none"),e=L.pipe((0,i.n)((function(t){return(0,c.of)(t).pipe((0,s.c)(t?0:400))}))).subscribe((function(e){if(e){var n={x:30,y:30},r=e.x,a=e.y,o=e.data,l=w.current.getBoundingClientRect(),c=E.current.getBoundingClientRect(),i="translate(".concat(r+(r<l.width-c.width-n.x?n.x:-n.x-c.width),"px,").concat(a+(a<l.height-c.height-n.y?n.y:n.y-c.height),"px)");"0"===t.style("opacity")&&t.style("transform",i),t.transition().duration(300).style("opacity",.9).style("transform",i),R(o)}else t.transition().duration(300).style("opacity",0)}));return function(){return e.unsubscribe()}}),[L]);var I=(0,r.useMemo)((function(){return(0,a.Os0)(d,(function(t){return t.group}))}),[d]);return(0,r.useEffect)((function(){if(w.current&&C.current){var t=(0,a.Ltv)(C.current),e=t.select(".content"),r=k||w.current.getBoundingClientRect(),l=r.width,c=r.height,i=(0,a.w7C)().domain((0,a.Xxv)(d,(function(t){return t.date}))).range([10,l-10]);if(U){var s=U.rescaleX(i);i.domain(s.domain())}var u,f,m,y,p=(0,a.m4Y)().domain((0,a.Xxv)(d.map((function(t){return t.value})).concat("area"===v?d.map((function(t){return t.value2})):[]))).range([c-10,10]),h=(0,a.n8j)().x((function(t){return i(t.date)})).y((function(t){return p(t.value)})).curve(a.y8u),x=(0,a.Wcw)().x((function(t){return i(t.date)})).y0((function(t){return p(t.value)})).y1((function(t){return p(t.value2)})),E=(0,a.UMr)().domain(Array.from(I.keys(),String)).range(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]);e.selectAll(".myLine").data(I).join("path").attr("class","myLine").attr("stroke",(function(t){return E(t[0])})).attr("fill-opacity","0.5").attr("fill",(function(t){return"area"===v?E(t[0]):"none"})).attr("d",(function(t){return"area"===v?x(t[1]):h(t[1])})),e.selectAll(".myDot").data((u=i.domain(),f=S(u,2),m=f[0],y=f[1],a.Ui6.count(m,y)>6?[]:d)).join("circle").attr("class","myDot").attr("stroke","black").attr("r",3).attr("fill",(function(t){return E(t.group)})).attr("cx",(function(t){return i(t.date)})).attr("cy",(function(t){return p(t.value)})).on("mouseenter",(function(t,e){var n=i(e.date),r=p(e.value);L.next({x:n,y:r,data:e})})).on("mouseleave",(function(){L.next(null)}));var M=(0,a.l78)(i).tickSizeInner(20-c);t.select(".x-axis").attr("transform","translate(0, ".concat(c,")")).call(M).call((function(t){return t.selectAll(".tick line").attr("transform","translate(0,".concat(-10,")")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}));var B=(0,a.V4s)(p).tickSizeInner(20-l);t.select(".y-axis").call(B).call((function(t){return t.selectAll(".tick line").attr("transform","translate(".concat(10,",0)")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}));var T=(0,a.n55)().extent([[0,0],[l,c]]).on("start brush end",(function(t){var e=t.sourceEvent,n=t.selection;n&&e&&b.next({type:"select",selection:n})})),j=(0,a.s_O)().scaleExtent([1,20]).translateExtent([[0,0],[l,c]]).on("zoom",(function(t){var e=t.sourceEvent,n=t.transform;b.next({type:"zoom",sourceEvent:e,transform:n})}));A?t.select(".brush").call(T).on("dblclick",(function(){var t=(0,a.ZRL)(this)?null:[0,l];(0,a.Ltv)(this).call(T.move,t)})):t.call(j);var O=E.domain();if(n&&t.select(".legend").selectAll(".label").data(O).join((function(t){var e=t.append("g").style("color",(function(t){return E(t)}));return e.append("circle").attr("fill","currentColor").attr("r",7),e.append("text").attr("transform","translate(10,4)"),e})).attr("class","label").attr("transform",(function(t,e){return"translate(".concat(10+(l-10-10)/O.length*(e+.2),",").concat(.05*c,")")})).select("text").text((function(t){return t})),g){var R=t.select(".cursor").style("opacity","0");R.selectAll(".mouse-line").data([0]).join("path").attr("class","mouse-line").style("stroke","black").style("stroke-width","1px").style("stroke-dasharray","1,1"),R.selectAll(".mouse-text").data([0]).join("text").attr("class","mouse-text").attr("transform","translate(10,3)").attr("filter","url(#bg-text)").style("fill","black").style("font","11px arial");var D=R.selectAll(".mouse-per-line").data(O).enter().append("g").attr("class","mouse-per-line").style("color",(function(t){return E(t)}));D.append("circle").attr("r",6).style("stroke","currentColor").style("fill","none").style("stroke-width","1px"),D.append("text").attr("transform","translate(10,3)").attr("filter","url(#bg-text)").style("fill","black").style("font","11px arial"),t.select(".mouse").attr("width",l).attr("height",c).attr("fill","none").attr("pointer-events","all").on("mouseout",(function(){(0,a.Ltv)(".cursor").style("opacity","0")})).on("mouseover",(function(){(0,a.Ltv)(".cursor").style("opacity","1")})).on("mousemove",(function(t){var e=S((0,a.WnM)(t),2),n=e[0];e[1],(0,a.Ltv)(".mouse-line").attr("d",(function(){return"M".concat(n,",").concat(c," ").concat(n,",",0)})),(0,a.Ubm)(".mouse-per-line").attr("visibility",(function(t){return I.get(t)?"visible":"hidden"})).attr("transform",(function(t,e){var r=i.invert(n),l=I.get(t);if(!l)return"";var c=(0,a.ylB)((function(t){return t.date})).center,s=l[c(l,r)],u=p(s.value);return(0,a.Ltv)(this).select("text").text("".concat(s.value)),e||(0,a.Ltv)(".mouse-text").text((0,o.GP)(s.date,"dd.MM.yyyy HH:mm")),"translate("+i(s.date)+","+u+")"}))}))}var F=b.subscribe((function(e){if(A){if("zoom"===e.type){var n=e.sourceEvent,r=e.transform;if(n){var o=[0,l].map(r.invertX,r);t.select(".brush").call(T.move,o)}}}else if("zoom"===e.type){var c=e.sourceEvent,i=e.transform;C.current&&c&&(C.current.contains(c.target)||t.call(j.transform,i)),N(i)}else if("select"===e.type){var s=e.selection;s[1]>s[0]&&t.call(j).call(j.transform,a.GSI.scale(l/(s[1]-s[0])).translate(-s[0],0))}}));return function(){return F.unsubscribe()}}}),[U,I,k,A,b]),r.createElement("div",{className:m()(B.Chart),ref:w},r.createElement("div",{ref:E,className:B.Tooltip},O&&r.createElement("pre",null,JSON.stringify(O,null,2))),r.createElement("svg",{ref:C,style:A?{height:150}:{}},r.createElement("defs",null,r.createElement("clipPath",{id:x},r.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%"})),r.createElement("filter",{x:"0",y:"0",width:"1",height:"1",id:"bg-text"},r.createElement("feFlood",{floodColor:"rgba(255,255,255,0.75)"}),r.createElement("feMerge",null,r.createElement("feMergeNode",{in:"bg"}),r.createElement("feMergeNode",{in:"SourceGraphic"}))," ")),r.createElement("g",{className:"content",clipPath:"url(#".concat(x,")")}),r.createElement("g",{className:"x-axis"}),r.createElement("g",{className:"y-axis"}),r.createElement("g",{className:"brush"}),r.createElement("g",{className:"legend"}),r.createElement("g",{className:"cursor"}),r.createElement("rect",{className:"mouse"})))}},4661:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(2001),a=n.n(r),o=n(935),l=n.n(o)()(a());l.push([t.id,".TM2RQ5NCM80BeuU4weFg{position:relative;padding:2em}.TM2RQ5NCM80BeuU4weFg svg{display:block;width:100%;height:300px;background:#f7f7f7;overflow:visible}.TM2RQ5NCM80BeuU4weFg svg rect.D6JO0K0U9pALPDqqDDkn{stroke:none}.TM2RQ5NCM80BeuU4weFg svg .d3pFeUS0CMMgf0_zItXX text{font:11px arial;color:#000}.TM2RQ5NCM80BeuU4weFg .My38BlBqUTAUd9UrSUrO{position:absolute}.My38BlBqUTAUd9UrSUrO{background:#fff;border:1px solid #d3d3d3;color:orange;padding:.25em}","",{version:3,sources:["webpack://./src/components/ZoomableLineChart/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,WAAA,CAEA,0BACE,aAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CAEA,oDACE,WAAA,CAGA,qDACE,eAAA,CACA,UAAA,CAKN,4CACE,iBAAA,CAGJ,sBACE,eAAA,CACA,wBAAA,CACA,YAAA,CACA,aAAA",sourcesContent:[".Chart {\n  position: relative;\n  padding: 2em;\n\n  svg {\n    display: block;\n    width: 100%;\n    height: 300px;\n    background: #f7f7f7;\n    overflow: visible;\n\n    rect.selection {\n      stroke: none;\n    }\n    .mouse-per-line {\n      text {\n        font: 11px arial;\n        color: black;\n      }\n    }\n  }\n\n  .Tooltip {\n    position: absolute;\n  }\n}\n.Tooltip {\n  background: white;\n  border: 1px solid lightgray;\n  color: orange;\n  padding: 0.25em;\n}\n"],sourceRoot:""}]),l.locals={Chart:"TM2RQ5NCM80BeuU4weFg",selection:"D6JO0K0U9pALPDqqDDkn","mouse-per-line":"d3pFeUS0CMMgf0_zItXX",Tooltip:"My38BlBqUTAUd9UrSUrO"};const c=l}}]);
//# sourceMappingURL=616.js.map