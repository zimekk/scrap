"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[104],{5104:(t,e,n)=>{n.d(e,{A:()=>R,Z:()=>Y});var r=n(2784),a=n(4397),o=n(161),l=n(1148),c=n(5120),i=n(2335),s=n(9468),u=n(7209);function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=n(2779),m=n.n(d),y=n(6062),A=n.n(y),p=n(4036),v=n.n(p),g=n(6793),h=n.n(g),b=n(7892),x=n.n(b),C=n(1173),E=n.n(C),w=n(2464),k=n.n(w),M=n(2930),U={};U.styleTagTransform=k(),U.setAttributes=x(),U.insert=h().bind(null,"head"),U.domAPI=v(),U.insertStyleElement=E(),A()(M.Z,U);const B=M.Z&&M.Z.locals?M.Z.locals:void 0;function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(t);!(l=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(t){c=!0,a=t}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var T=(0,r.createContext)(void 0);function R(t){var e=t.children,n=(0,r.useMemo)((function(){return new l.x}),[]);return r.createElement(T.Provider,{value:n},e)}function Y(t){var e=t.legend,n=void 0!==e&&e,d=t.list,y=t.move,A=t.type,p=void 0===A?"line":A,v=t.rule,g=void 0!==v&&v,h=(0,r.useMemo)((function(){return new l.x}),[]),b=(0,r.useContext)(T)||h,x=(0,r.useId)(),C=(0,r.useRef)(null),E=(0,r.useRef)(null),w=(0,r.useRef)(null),k=function(t){var e,n,a=(e=(0,r.useState)(null),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(t);!(l=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(t){c=!0,a=t}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,n)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],l=a[1];return(0,r.useEffect)((function(){var e=t.current;if(e){var n=new u.Z((function(t){t.forEach((function(t){l(t.contentRect)}))}));return n.observe(e),function(){n.unobserve(e)}}}),[t]),o}(w),M=S((0,r.useState)(),2),U=M[0],N=M[1],R=S((0,r.useState)(null),2),Y=R[0],j=R[1],D=(0,r.useMemo)((function(){return new l.x}),[]);(0,r.useEffect)((function(){var t=(0,a.Ys)(E.current).style("opacity",0).style("pointer-events","none"),e=D.pipe((0,i.w)((function(t){return(0,c.of)(t).pipe((0,s.g)(t?0:400))}))).subscribe((function(e){if(e){var n={x:30,y:30},r=e.x,a=e.y,o=e.data,l=w.current.getBoundingClientRect(),c=E.current.getBoundingClientRect(),i="translate(".concat(r+(r<l.width-c.width-n.x?n.x:-n.x-c.width),"px,").concat(a+(a<l.height-c.height-n.y?n.y:n.y-c.height),"px)");"0"===t.style("opacity")&&t.style("transform",i),t.transition().duration(300).style("opacity",.9).style("transform",i),j(o)}else t.transition().duration(300).style("opacity",0)}));return function(){return e.unsubscribe()}}),[D]);var I=(0,r.useMemo)((function(){return(0,a.ruo)(d,(function(t){return t.group}))}),[d]);return(0,r.useEffect)((function(){if(w.current&&C.current){var t=(0,a.Ys)(C.current),e=t.select(".content"),r=k||w.current.getBoundingClientRect(),l=r.width,c=r.height,i=(0,a.Xf)().domain((0,a.Wem)(d,(function(t){return t.date}))).range([10,l-10]);if(U){var s=U.rescaleX(i);i.domain(s.domain())}var u,f,m,A,v=(0,a.BYU)().domain((0,a.Wem)(d.map((function(t){return t.value})).concat("area"===p?d.map((function(t){return t.value2})):[]))).range([c-10,10]),h=(0,a.jvg)().x((function(t){return i(t.date)})).y((function(t){return v(t.value)})).curve(a.YY7),x=(0,a.SOn)().x((function(t){return i(t.date)})).y0((function(t){return v(t.value)})).y1((function(t){return v(t.value2)})),E=(0,a.PKp)().domain(Array.from(I.keys(),String)).range(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]);e.selectAll(".myLine").data(I).join("path").attr("class","myLine").attr("stroke",(function(t){return E(t[0])})).attr("fill-opacity","0.5").attr("fill",(function(t){return"area"===p?E(t[0]):"none"})).attr("d",(function(t){return"area"===p?x(t[1]):h(t[1])})),e.selectAll(".myDot").data((u=i.domain(),f=S(u,2),m=f[0],A=f[1],a.F0B.count(m,A)>6?[]:d)).join("circle").attr("class","myDot").attr("stroke","black").attr("r",3).attr("fill",(function(t){return E(t.group)})).attr("cx",(function(t){return i(t.date)})).attr("cy",(function(t){return v(t.value)})).on("mouseenter",(function(t,e){var n=i(e.date),r=v(e.value);D.next({x:n,y:r,data:e})})).on("mouseleave",(function(){D.next(null)}));var M=(0,a.LLu)(i).tickSizeInner(20-c);t.select(".x-axis").attr("transform","translate(0, ".concat(c,")")).call(M).call((function(t){return t.selectAll(".tick line").attr("transform","translate(0,".concat(-10,")")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}));var B=(0,a.y4O)(v).tickSizeInner(20-l);t.select(".y-axis").call(B).call((function(t){return t.selectAll(".tick line").attr("transform","translate(".concat(10,",0)")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}));var T=(0,a.Yud)().extent([[0,0],[l,c]]).on("start brush end",(function(t){var e=t.sourceEvent,n=t.selection;n&&e&&b.next({type:"select",selection:n})})),R=(0,a.sPX)().scaleExtent([1,20]).translateExtent([[0,0],[l,c]]).on("zoom",(function(t){var e=t.sourceEvent,n=t.transform;b.next({type:"zoom",sourceEvent:e,transform:n})}));y?t.select(".brush").call(T).on("dblclick",(function(){var t=(0,a.mN7)(this)?null:[0,l];(0,a.Ys)(this).call(T.move,t)})):t.call(R);var Y=E.domain();if(n&&t.select(".legend").selectAll(".label").data(Y).join((function(t){var e=t.append("g").style("color",(function(t){return E(t)}));return e.append("circle").attr("fill","currentColor").attr("r",7),e.append("text").attr("transform","translate(10,3)").text((function(t){return"".concat(t)})),e})).attr("class","label").attr("transform",(function(t,e){return"translate(".concat(10+(l-10-10)/Y.length*(e+.2),",").concat(.05*c,")")})),g){var j=t.select(".cursor").style("opacity","0");j.selectAll(".mouse-line").data([0]).join("path").attr("class","mouse-line").style("stroke","black").style("stroke-width","1px").style("stroke-dasharray","1,1"),j.selectAll(".mouse-text").data([0]).join("text").attr("class","mouse-text").attr("transform","translate(10,3)").attr("filter","url(#bg-text)").style("fill","black").style("font","11px arial");var O=j.selectAll(".mouse-per-line").data(Y).enter().append("g").attr("class","mouse-per-line").style("color",(function(t){return E(t)}));O.append("circle").attr("r",6).style("stroke","currentColor").style("fill","none").style("stroke-width","1px"),O.append("text").attr("transform","translate(10,3)").attr("filter","url(#bg-text)").style("fill","black").style("font","11px arial"),t.select(".mouse").attr("width",l).attr("height",c).attr("fill","none").attr("pointer-events","all").on("mouseout",(function(){(0,a.Ys)(".cursor").style("opacity","0")})).on("mouseover",(function(){(0,a.Ys)(".cursor").style("opacity","1")})).on("mousemove",(function(t){var e=S((0,a.cx$)(t),2),n=e[0];e[1],(0,a.Ys)(".mouse-line").attr("d",(function(){return"M".concat(n,",").concat(c," ").concat(n,",",0)})),(0,a.td_)(".mouse-per-line").attr("transform",(function(t,e){var r=i.invert(n),l=I.get(t);if(!l)return"";var c=l[(0,(0,a.YFb)((function(t){return t.date})).center)(l,r)],s=v(c.value);return(0,a.Ys)(this).select("text").text("".concat(c.value)),e||(0,a.Ys)(".mouse-text").text((0,o.Z)(c.date,"dd.MM.yyyy HH:mm")),"translate("+i(c.date)+","+s+")"}))}))}var F=b.subscribe((function(e){if(y){if("zoom"===e.type){var n=e.sourceEvent,r=e.transform;if(n){var o=[0,l].map(r.invertX,r);t.select(".brush").call(T.move,o)}}}else if("zoom"===e.type){var c=e.sourceEvent,i=e.transform;C.current&&c&&(C.current.contains(c.target)||t.call(R.transform,i)),N(i)}else if("select"===e.type){var s=e.selection;s[1]>s[0]&&t.call(R).call(R.transform,a.CRH.scale(l/(s[1]-s[0])).translate(-s[0],0))}}));return function(){return F.unsubscribe()}}}),[U,I,k,y,b]),r.createElement("div",{className:m()(B.Chart),ref:w},r.createElement("div",{ref:E,className:B.Tooltip},Y&&r.createElement("pre",null,JSON.stringify(Y,null,2))),r.createElement("svg",{ref:C,style:y?{height:150}:{}},r.createElement("defs",null,r.createElement("clipPath",{id:x},r.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%"})),r.createElement("filter",{x:"0",y:"0",width:"1",height:"1",id:"bg-text"},r.createElement("feFlood",{floodColor:"rgba(255,255,255,0.75)"}),r.createElement("feMerge",null,r.createElement("feMergeNode",{in:"bg"}),r.createElement("feMergeNode",{in:"SourceGraphic"}))," ")),r.createElement("g",{className:"content",clipPath:"url(#".concat(x,")")}),r.createElement("g",{className:"x-axis"}),r.createElement("g",{className:"y-axis"}),r.createElement("g",{className:"brush"}),r.createElement("g",{className:"legend"}),r.createElement("g",{className:"cursor"}),r.createElement("rect",{className:"mouse"})))}},2930:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(272),a=n.n(r),o=n(2609),l=n.n(o)()(a());l.push([t.id,".TM2RQ5NCM80BeuU4weFg{position:relative;padding:2em}.TM2RQ5NCM80BeuU4weFg svg{display:block;width:100%;height:300px;background:#f7f7f7;overflow:visible}.TM2RQ5NCM80BeuU4weFg svg rect.D6JO0K0U9pALPDqqDDkn{stroke:none}.TM2RQ5NCM80BeuU4weFg svg .d3pFeUS0CMMgf0_zItXX text{font:11px arial;color:#000}.TM2RQ5NCM80BeuU4weFg .My38BlBqUTAUd9UrSUrO{position:absolute}.My38BlBqUTAUd9UrSUrO{background:#fff;border:1px solid #d3d3d3;color:orange;padding:.25em}","",{version:3,sources:["webpack://./src/components/ZoomableLineChart/styles.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,WAAA,CAEA,0BACE,aAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CAEA,oDACE,WAAA,CAGA,qDACE,eAAA,CACA,UAAA,CAKN,4CACE,iBAAA,CAGJ,sBACE,eAAA,CACA,wBAAA,CACA,YAAA,CACA,aAAA",sourcesContent:[".Chart {\n  position: relative;\n  padding: 2em;\n\n  svg {\n    display: block;\n    width: 100%;\n    height: 300px;\n    background: #f7f7f7;\n    overflow: visible;\n\n    rect.selection {\n      stroke: none;\n    }\n    .mouse-per-line {\n      text {\n        font: 11px arial;\n        color: black;\n      }\n    }\n  }\n\n  .Tooltip {\n    position: absolute;\n  }\n}\n.Tooltip {\n  background: white;\n  border: 1px solid lightgray;\n  color: orange;\n  padding: 0.25em;\n}\n"],sourceRoot:""}]),l.locals={Chart:"TM2RQ5NCM80BeuU4weFg",selection:"D6JO0K0U9pALPDqqDDkn","mouse-per-line":"d3pFeUS0CMMgf0_zItXX",Tooltip:"My38BlBqUTAUd9UrSUrO"};const c=l}}]);
//# sourceMappingURL=104.js.map