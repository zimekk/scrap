"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[836],{7216:(t,e,n)=>{n.d(e,{W:()=>T,c:()=>j});var r=n(5668),a=n(4456),o=n(9348),l=n(5980),c=n(1764),i=n(8580),s=n(9680),u=n(2504);function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=n(1252),m=n.n(d),y=n(2108),A=n.n(y),p=n(7020),v=n.n(p),g=n(7240),h=n.n(g),b=n(9516),C=n.n(b),x=n(2940),E=n.n(x),M=n(9296),k=n.n(M),w=n(3688),S={};S.styleTagTransform=k(),S.setAttributes=C(),S.insert=h().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=E(),A()(w.c,S);const U=w.c&&w.c.locals?w.c.locals:void 0;function B(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,l,c=[],i=!0,s=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(c.push(r.value),c.length!==e);i=!0);}catch(t){s=!0,a=t}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var N=(0,r.createContext)(void 0);function T(t){var e=t.children,n=(0,r.useMemo)((function(){return new l.E}),[]);return r.createElement(N.Provider,{value:n},e)}function j(t){var e=t.legend,n=void 0!==e&&e,d=t.list,y=t.move,A=t.type,p=void 0===A?"line":A,v=t.rule,g=void 0!==v&&v,h=(0,r.useMemo)((function(){return new l.E}),[]),b=(0,r.useContext)(N)||h,C=(0,r.useId)(),x=(0,r.useRef)(null),E=(0,r.useRef)(null),M=(0,r.useRef)(null),k=function(t){var e,n,a=(e=(0,r.useState)(null),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,l,c=[],i=!0,s=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(c.push(r.value),c.length!==e);i=!0);}catch(t){s=!0,a=t}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],l=a[1];return(0,r.useEffect)((function(){var e=t.current;if(e){var n=new u.c((function(t){t.forEach((function(t){l(t.contentRect)}))}));return n.observe(e),function(){n.unobserve(e)}}}),[t]),o}(M),w=B((0,r.useState)(),2),S=w[0],D=w[1],T=B((0,r.useState)(null),2),j=T[0],O=T[1],R=(0,r.useMemo)((function(){return new l.E}),[]);(0,r.useEffect)((function(){var t=(0,a.MlD)(E.current).style("opacity",0).style("pointer-events","none"),e=R.pipe((0,i.G)((function(t){return(0,c.of)(t).pipe((0,s.o)(t?0:400))}))).subscribe((function(e){if(e){var n={x:30,y:30},r=e.x,a=e.y,o=e.data,l=M.current.getBoundingClientRect(),c=E.current.getBoundingClientRect(),i="translate(".concat(r+(r<l.width-c.width-n.x?n.x:-n.x-c.width),"px,").concat(a+(a<l.height-c.height-n.y?n.y:n.y-c.height),"px)");"0"===t.style("opacity")&&t.style("transform",i),t.transition().duration(300).style("opacity",.9).style("transform",i),O(o)}else t.transition().duration(300).style("opacity",0)}));return function(){return e.unsubscribe()}}),[R]);var I=(0,r.useMemo)((function(){return(0,a.yAb)(d,(function(t){return t.group}))}),[d]);return(0,r.useEffect)((function(){if(M.current&&x.current){var t=(0,a.MlD)(x.current),e=t.select(".content"),r=k||M.current.getBoundingClientRect(),l=r.width,c=r.height,i=(0,a.sle)().domain((0,a.Sgp)(d,(function(t){return t.date}))).range([10,l-10]);if(S){var s=S.rescaleX(i);i.domain(s.domain())}var u,f,m,A,v=(0,a.M89)().domain((0,a.Sgp)(d.map((function(t){return t.value})).concat("area"===p?d.map((function(t){return t.value2})):[]))).range([c-10,10]),h=(0,a.cFK)().x((function(t){return i(t.date)})).y((function(t){return v(t.value)})).curve(a.MhT),C=(0,a.wd$)().x((function(t){return i(t.date)})).y0((function(t){return v(t.value)})).y1((function(t){return v(t.value2)})),E=(0,a.knW)().domain(Array.from(I.keys(),String)).range(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]);e.selectAll(".myLine").data(I).join("path").attr("class","myLine").attr("stroke",(function(t){return E(t[0])})).attr("fill-opacity","0.5").attr("fill",(function(t){return"area"===p?E(t[0]):"none"})).attr("d",(function(t){return"area"===p?C(t[1]):h(t[1])})),e.selectAll(".myDot").data((u=i.domain(),f=B(u,2),m=f[0],A=f[1],a.IBc.count(m,A)>6?[]:d)).join("circle").attr("class","myDot").attr("stroke","black").attr("r",3).attr("fill",(function(t){return E(t.group)})).attr("cx",(function(t){return i(t.date)})).attr("cy",(function(t){return v(t.value)})).on("mouseenter",(function(t,e){var n=i(e.date),r=v(e.value);R.next({x:n,y:r,data:e})})).on("mouseleave",(function(){R.next(null)}));var w=(0,a.s5Y)(i).tickSizeInner(20-c);t.select(".x-axis").attr("transform","translate(0, ".concat(c,")")).call(w).call((function(t){return t.selectAll(".tick line").attr("transform","translate(0,".concat(-10,")")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}));var U=(0,a.e_G)(v).tickSizeInner(20-l);t.select(".y-axis").call(U).call((function(t){return t.selectAll(".tick line").attr("transform","translate(".concat(10,",0)")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}));var N=(0,a.qQV)().extent([[0,0],[l,c]]).on("start brush end",(function(t){var e=t.sourceEvent,n=t.selection;n&&e&&b.next({type:"select",selection:n})})),T=(0,a.ATs)().scaleExtent([1,20]).translateExtent([[0,0],[l,c]]).on("zoom",(function(t){var e=t.sourceEvent,n=t.transform;b.next({type:"zoom",sourceEvent:e,transform:n})}));y?t.select(".brush").call(N).on("dblclick",(function(){var t=(0,a.CoP)(this)?null:[0,l];(0,a.MlD)(this).call(N.move,t)})):t.call(T);var j=E.domain();if(n&&t.select(".legend").selectAll(".label").data(j).join((function(t){var e=t.append("g").style("color",(function(t){return E(t)}));return e.append("circle").attr("fill","currentColor").attr("r",7),e.append("text").attr("transform","translate(10,4)"),e})).attr("class","label").attr("transform",(function(t,e){return"translate(".concat(10+(l-10-10)/j.length*(e+.2),",").concat(.05*c,")")})).select("text").text((function(t){return t})),g){var O=t.select(".cursor").style("opacity","0");O.selectAll(".mouse-line").data([0]).join("path").attr("class","mouse-line").style("stroke","black").style("stroke-width","1px").style("stroke-dasharray","1,1"),O.selectAll(".mouse-text").data([0]).join("text").attr("class","mouse-text").attr("transform","translate(10,3)").attr("filter","url(#bg-text)").style("fill","black").style("font","11px arial");var F=O.selectAll(".mouse-per-line").data(j).enter().append("g").attr("class","mouse-per-line").style("color",(function(t){return E(t)}));F.append("circle").attr("r",6).style("stroke","currentColor").style("fill","none").style("stroke-width","1px"),F.append("text").attr("transform","translate(10,3)").attr("filter","url(#bg-text)").style("fill","black").style("font","11px arial"),t.select(".mouse").attr("width",l).attr("height",c).attr("fill","none").attr("pointer-events","all").on("mouseout",(function(){(0,a.MlD)(".cursor").style("opacity","0")})).on("mouseover",(function(){(0,a.MlD)(".cursor").style("opacity","1")})).on("mousemove",(function(t){var e=B((0,a.ERE)(t),2),n=e[0];e[1],(0,a.MlD)(".mouse-line").attr("d",(function(){return"M".concat(n,",").concat(c," ").concat(n,",",0)})),(0,a.COP)(".mouse-per-line").attr("visibility",(function(t){return I.get(t)?"visible":"hidden"})).attr("transform",(function(t,e){var r=i.invert(n),l=I.get(t);if(!l)return"";var c=(0,a.SUe)((function(t){return t.date})).center,s=l[c(l,r)],u=v(s.value);return(0,a.MlD)(this).select("text").text("".concat(s.value)),e||(0,a.MlD)(".mouse-text").text((0,o.E9)(s.date,"dd.MM.yyyy HH:mm")),"translate("+i(s.date)+","+u+")"}))}))}var q=b.subscribe((function(e){if(y){if("zoom"===e.type){var n=e.sourceEvent,r=e.transform;if(n){var o=[0,l].map(r.invertX,r);t.select(".brush").call(N.move,o)}}}else if("zoom"===e.type){var c=e.sourceEvent,i=e.transform;x.current&&c&&(x.current.contains(c.target)||t.call(T.transform,i)),D(i)}else if("select"===e.type){var s=e.selection;s[1]>s[0]&&t.call(T).call(T.transform,a.uW0.scale(l/(s[1]-s[0])).translate(-s[0],0))}}));return function(){return q.unsubscribe()}}}),[S,I,k,y,b]),r.createElement("div",{className:m()(U.Chart),ref:M},r.createElement("div",{ref:E,className:U.Tooltip},j&&r.createElement("pre",null,JSON.stringify(j,null,2))),r.createElement("svg",{ref:x,style:y?{height:150}:{}},r.createElement("defs",null,r.createElement("clipPath",{id:C},r.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%"})),r.createElement("filter",{x:"0",y:"0",width:"1",height:"1",id:"bg-text"},r.createElement("feFlood",{floodColor:"rgba(255,255,255,0.75)"}),r.createElement("feMerge",null,r.createElement("feMergeNode",{in:"bg"}),r.createElement("feMergeNode",{in:"SourceGraphic"}))," ")),r.createElement("g",{className:"content",clipPath:"url(#".concat(C,")")}),r.createElement("g",{className:"x-axis"}),r.createElement("g",{className:"y-axis"}),r.createElement("g",{className:"brush"}),r.createElement("g",{className:"legend"}),r.createElement("g",{className:"cursor"}),r.createElement("rect",{className:"mouse"})))}},3688:(t,e,n)=>{n.d(e,{c:()=>c});var r=n(2876),a=n.n(r),o=n(1849),l=n.n(o)()(a());l.push([t.id,".TM2RQ5NCM80BeuU4weFg{position:relative;padding:2em}.TM2RQ5NCM80BeuU4weFg svg{display:block;width:100%;height:300px;background:#f7f7f7;overflow:visible}.TM2RQ5NCM80BeuU4weFg svg rect.D6JO0K0U9pALPDqqDDkn{stroke:none}.TM2RQ5NCM80BeuU4weFg svg .d3pFeUS0CMMgf0_zItXX text{font:11px arial;color:#000}.TM2RQ5NCM80BeuU4weFg .My38BlBqUTAUd9UrSUrO{position:absolute}.My38BlBqUTAUd9UrSUrO{background:#fff;border:1px solid #d3d3d3;color:orange;padding:.25em}","",{version:3,sources:["webpack://./src/components/ZoomableLineChart/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,WAAA,CAEA,0BACE,aAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CAEA,oDACE,WAAA,CAGA,qDACE,eAAA,CACA,UAAA,CAKN,4CACE,iBAAA,CAGJ,sBACE,eAAA,CACA,wBAAA,CACA,YAAA,CACA,aAAA",sourcesContent:[".Chart {\n  position: relative;\n  padding: 2em;\n\n  svg {\n    display: block;\n    width: 100%;\n    height: 300px;\n    background: #f7f7f7;\n    overflow: visible;\n\n    rect.selection {\n      stroke: none;\n    }\n    .mouse-per-line {\n      text {\n        font: 11px arial;\n        color: black;\n      }\n    }\n  }\n\n  .Tooltip {\n    position: absolute;\n  }\n}\n.Tooltip {\n  background: white;\n  border: 1px solid lightgray;\n  color: orange;\n  padding: 0.25em;\n}\n"],sourceRoot:""}]),l.locals={Chart:"TM2RQ5NCM80BeuU4weFg",selection:"D6JO0K0U9pALPDqqDDkn","mouse-per-line":"d3pFeUS0CMMgf0_zItXX",Tooltip:"My38BlBqUTAUd9UrSUrO"};const c=l}}]);
//# sourceMappingURL=836.js.map