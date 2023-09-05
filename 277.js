/*! For license information please see 277.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[277],{4277:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>J});var m=t(2784),a=t(6216),u=t(2779),r=t.n(u),s=t(6062),o=t.n(s),i=t(4036),d=t.n(i),b=t(6793),l=t.n(b),c=t(7892),f=t.n(c),A=t(1173),g=t.n(A),p=t(2464),h=t.n(p),v=t(9399),y={};y.styleTagTransform=h(),y.setAttributes=f(),y.insert=l().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=g(),o()(v.Z,y);const E=v.Z&&v.Z.locals?v.Z.locals:void 0;function C(n){var e=n.list,t=n.balance,u=(0,m.useRef)(null),s=(0,m.useRef)(null),o=(0,m.useMemo)((function(){return e.map((function(n){var e=n.date,t=n.number,m=n.amount;return{date:new Date(e),group:t,value:m}}))}),[e]);return(0,m.useEffect)((function(){if(s.current&&u.current){var n=(0,a.Ys)(u.current),e=(0,a.ruo)(o,(function(n){return n.group})),m=Array.from(e.keys()),r=u.current.getBoundingClientRect(),i=r.width,d=r.height,b=(0,a.Xf)().domain((0,a.Wem)(t.concat({date:new Date(Date.now()+432e6).toISOString()}),(function(n){var e=n.date;return new Date(e)}))).range([10,i-10]),l=(0,a.BYU)().domain((0,a.Wem)(o,(function(n){return n.value}))).range([d-10,10]),c=(0,a.PKp)().domain(e.keys()).range(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]);n.select(".chart").remove(),n.append("g").attr("class","chart").selectAll("g").data(o).join("rect").attr("fill",(function(n){var e=n.group;return c(e)})).attr("x",(function(n){var e=n.value,t=n.date,a=n.group;return b(t)+5*m.indexOf(a)+(e>0?-1:1)})).attr("y",(function(n){var e=n.value;return l(e>0?e:0)})).attr("width",2).attr("height",(function(n){var e=n.value;return e>0?l(0)-l(e):l(e)-l(0)}));var f=(0,a.LLu)(b).tickSizeInner(20-d);n.select(".xaxis").remove(),n.append("g").attr("class","xaxis").attr("transform","translate(0, ".concat(d,")")).call(f).call((function(n){return n.selectAll(".tick line").attr("transform","translate(0,".concat(-10,")")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}));var A=(0,a.y4O)(l).tickSizeInner(20-i);n.select(".yaxis").remove(),n.append("g").attr("class","yaxis").call(A).call((function(n){return n.selectAll(".tick line").attr("transform","translate(".concat(10,",0)")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}))}}),[o,t]),m.createElement("div",{className:r()(E.Chart),ref:s},m.createElement("svg",{ref:u}))}function B(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var m,a,u,r,s=[],o=!0,i=!1;try{if(u=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;o=!1}else for(;!(o=(m=u.call(t)).done)&&(s.push(m.value),s.length!==e);o=!0);}catch(n){i=!0,a=n}finally{try{if(!o&&null!=t.return&&(r=t.return(),Object(r)!==r))return}finally{if(i)throw a}}return s}}(n,e)||function(n,e){if(n){if("string"==typeof n)return k(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,m=new Array(e);t<e;t++)m[t]=n[t];return m}function w(n){var e=n.list,t=(0,m.useRef)(null),u=(0,m.useRef)(null),s=(0,m.useMemo)((function(){return e.map((function(n){var e=n.date,t=n.number,m=n.amount;return{date:new Date(e),group:t,value:m}}))}),[e]);return(0,m.useEffect)((function(){if(u.current&&t.current){var n=(0,a.Ys)(t.current),e=n.select(".content"),m=(0,a.ruo)(s,(function(n){return n.group})),r=t.current.getBoundingClientRect(),o=r.width,i=r.height,d=(0,a.Xf)().domain((0,a.Wem)(s.concat({date:new Date(Date.now()+432e6),group:"",value:0}),(function(n){return n.date}))).range([10,o-10]),b=(0,a.BYU)().domain((0,a.Wem)(s,(function(n){return n.value}))).range([i-10,10]),l=(0,a.PKp)().domain(m.keys()).range(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]);e.selectAll(".line").data(m).join("path").attr("class","line").attr("stroke",(function(n){var e=B(n,1)[0];return l(e)})).attr("fill-opacity","0.5").attr("fill","none").attr("d",(function(n){var e=B(n,2),t=(e[0],e[1]);return(0,a.jvg)()(t.map((function(n){var e=n.date,t=n.value;return[d(e),b(t)]})))})),e.selectAll(".dot").data(s).join("circle").attr("class","dot").attr("stroke","black").attr("r",3).attr("fill",(function(n){var e=n.group;return l(e)})).attr("cx",(function(n){return d(n.date)})).attr("cy",(function(n){return b(n.value)}));var c=(0,a.LLu)(d).tickSizeInner(20-i);n.select(".x-axis").attr("transform","translate(0, ".concat(i,")")).call(c).call((function(n){return n.selectAll(".tick line").attr("transform","translate(0,".concat(-10,")")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}));var f=(0,a.y4O)(b).tickSizeInner(20-o);n.select(".y-axis").call(f).call((function(n){return n.selectAll(".tick line").attr("transform","translate(".concat(10,",0)")).attr("stroke-opacity",.5).attr("stroke-dasharray","2,2")}))}}),[s]),m.createElement("div",{className:r()(E.Chart),ref:u},m.createElement("svg",{ref:t},m.createElement("g",{className:"content"}),m.createElement("g",{className:"x-axis"}),m.createElement("g",{className:"y-axis"})))}function G(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var m,a,u,r,s=[],o=!0,i=!1;try{if(u=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;o=!1}else for(;!(o=(m=u.call(t)).done)&&(s.push(m.value),s.length!==e);o=!0);}catch(n){i=!0,a=n}finally{try{if(!o&&null!=t.return&&(r=t.return(),Object(r)!==r))return}finally{if(i)throw a}}return s}}(n,e)||function(n,e){if(n){if("string"==typeof n)return x(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?x(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,m=new Array(e);t<e;t++)m[t]=n[t];return m}var I=function(n){return"number"==typeof n?"".concat(n," min"):n},M=function(n){return n>1100?"".concat(n/1e3," GB"):"".concat(n," MB")},S=function(n){return"".concat(n," zł")},j=function(n){return"".concat(n," sms")},L=function(n){return"number"==typeof n?n:(t=(e=G(n.split(":"),2))[0],m=e[1],Number(t)+Number(m)/60);var e,t,m};function N(){var n=G((0,m.useState)((function(){return[{date:"2023-09-01",number:"183",amount:-5,net:"1GB"},{date:"2023-09-01",number:"183",amount:10},{date:"2023-09-01",number:"938",amount:5},{date:"2023-09-01",number:"379",amount:25},{date:"2023-09-01",number:"818",amount:5},{date:"2023-09-01",number:"828",amount:-9,net:"2GB"},{date:"2023-09-01",number:"828",amount:10},{date:"2023-08-01",number:"183",amount:-10,net:"4GB"},{date:"2023-08-01",number:"183",amount:10},{date:"2023-08-01",number:"938",amount:-5,sms:100},{date:"2023-08-01",number:"379",amount:25},{date:"2023-08-01",number:"818",amount:-5,net:"1GB"},{date:"2023-08-01",number:"828",amount:-10,net:"4GB"},{date:"2023-08-01",number:"828",amount:10},{date:"2023-07-20",number:"828",amount:-5,net:"1GB"},{date:"2023-07-20",number:"828",amount:5},{date:"2023-07-15",number:"183",amount:10},{date:"2023-07-10",number:"183",amount:-5,net:"1GB"},{date:"2023-07-05",number:"828",amount:-5,sms:100},{date:"2023-07-01",number:"183",amount:5},{date:"2023-07-01",number:"938",amount:5},{date:"2023-07-01",number:"379",amount:25},{date:"2023-07-01",number:"818",amount:5},{date:"2023-07-01",number:"828",amount:5},{date:"2023-06-26",number:"828",amount:-5,sms:100},{date:"2023-06-26",number:"828",amount:5},{date:"2023-06-15",number:"828",amount:-9,net:"2GB"},{date:"2023-06-15",number:"828",amount:5},{date:"2023-06-02",number:"183",amount:-9,net:"2GB"},{date:"2023-06-02",number:"183",amount:-5,sms:100},{date:"2023-06-02",number:"183",amount:5},{date:"2023-06-02",number:"938",amount:5},{date:"2023-06-02",number:"379",amount:25},{date:"2023-06-02",number:"818",amount:-5,sms:100},{date:"2023-06-02",number:"828",amount:-5,sms:100},{date:"2023-06-02",number:"828",amount:5},{date:"2023-05-01",number:"183",amount:5},{date:"2023-05-01",number:"938",amount:-15,min:100},{date:"2023-05-01",number:"938",amount:5},{date:"2023-05-01",number:"379",amount:25},{date:"2023-05-01",number:"818",amount:5},{date:"2023-05-01",number:"828",amount:5},{date:"2023-04-19",number:"183",amount:-9,net:"2GB"},{date:"2023-04-19",number:"183",amount:10},{date:"2023-04-19",number:"828",amount:-5,net:"1GB"},{date:"2023-04-10",number:"379",amount:-25,net:1e4,package:"SOLO M (10 GB)"},{date:"2023-04-01",number:"183",amount:-15,min:100},{date:"2023-04-01",number:"183",amount:-5,net:"1GB"},{date:"2023-04-01",number:"183",amount:15},{date:"2023-04-01",number:"938",amount:5},{date:"2023-04-01",number:"379",amount:25},{date:"2023-04-01",number:"818",amount:5},{date:"2023-04-01",number:"828",amount:5},{date:"2023-03-10",number:"379",amount:-25,net:1e4,package:"SOLO M (10 GB)"},{date:"2023-03-01",number:"183",amount:5},{date:"2023-03-01",number:"938",amount:5},{date:"2023-03-01",number:"379",amount:25},{date:"2023-03-01",number:"818",amount:-5,net:"1GB"},{date:"2023-03-01",number:"828",amount:-5,sms:100},{date:"2023-03-01",number:"828",amount:5},{date:"2023-02-19",number:"828",amount:-5,sms:100},{date:"2023-02-19",number:"828",amount:5},{date:"2023-02-18",number:"183",amount:-9,net:"2GB"},{date:"2023-02-18",number:"183",amount:5},{date:"2023-02-10",number:"379",amount:-25,net:"10GB",package:"SOLO M (10 GB)"},{date:"2023-02-10",number:"379",amount:25},{date:"2023-02-02",number:"183",amount:-5,net:"1GB"},{date:"2023-02-02",number:"183",amount:5},{date:"2023-02-02",number:"938",amount:-15,min:100},{date:"2023-02-02",number:"938",amount:5},{date:"2023-02-02",number:"818",amount:-5,net:"1GB"},{date:"2023-02-02",number:"828",amount:-15,min:100},{date:"2023-02-02",number:"828",amount:5}]})),1)[0],e=(0,m.useMemo)((function(){return n.filter((function(n){return n.amount>0}))}),[n]),t=(0,m.useMemo)((function(){return n.filter((function(n){return n.amount<0}))}),[n]),a=G((0,m.useState)((function(){return[{date:"2023-09-05",number:"183",amount:6.95,net:1410,min:"29:43",sms:115},{date:"2023-09-05",number:"938",amount:10.94,net:1400,min:104,sms:208},{date:"2023-09-05",number:"379",amount:27.72,net:7090,min:"1:22",sms:130},{date:"2023-09-05",number:"818",amount:18.65,net:1900,min:166,sms:176},{date:"2023-09-05",number:"828",amount:.99,net:1910,min:130,sms:183},{date:"2023-09-01",number:"183",amount:6.95,net:1720,min:"31:25",sms:115},{date:"2023-09-01",number:"938",amount:10.94,net:1420,min:104,sms:208},{date:"2023-09-01",number:"379",amount:27.72,net:7730,min:"1:22",sms:130},{date:"2023-09-01",number:"818",amount:18.65,net:1920,min:166,sms:176},{date:"2023-09-01",number:"828",amount:.99,net:2e3,min:131,sms:183},{date:"2023-08-30",number:"183",amount:1.95,net:2530,min:"42:22",sms:115},{date:"2023-08-30",number:"938",amount:5.94,net:1420,min:104,sms:209},{date:"2023-08-30",number:"379",amount:2.72,net:7750,min:"1:22",sms:130},{date:"2023-08-30",number:"818",amount:13.65,net:1920,min:166,sms:176},{date:"2023-08-30",number:"828",amount:0,net:0,min:132,sms:183},{date:"2023-08-25",number:"183",amount:1.95,net:2910,min:"42:22",sms:115},{date:"2023-08-25",number:"938",amount:5.94,net:1450,min:104,sms:209},{date:"2023-08-25",number:"379",amount:2.72,net:8020,min:"1:22",sms:130},{date:"2023-08-25",number:"818",amount:13.65,net:1980,min:166,sms:176},{date:"2023-08-25",number:"828",amount:0,net:1390,min:132,sms:183},{date:"2023-08-20",number:"183",amount:1.95,net:3280,min:"43:02",sms:117},{date:"2023-08-20",number:"938",amount:5.94,net:1470,min:104,sms:209},{date:"2023-08-20",number:"379",amount:2.72,net:8850,min:"1:22",sms:130},{date:"2023-08-20",number:"818",amount:13.65,net:2e3,min:166,sms:176},{date:"2023-08-20",number:"828",amount:0,net:2750,min:132,sms:183},{date:"2023-08-15",number:"183",amount:1.95,net:3380,min:"48:28",sms:117},{date:"2023-08-15",number:"938",amount:5.94,net:1500,min:105,sms:209},{date:"2023-08-15",number:"379",amount:2.72,net:9e3,min:"1:22",sms:130},{date:"2023-08-15",number:"818",amount:13.65,net:2020,min:166,sms:176},{date:"2023-08-15",number:"828",amount:0,net:3730,min:132,sms:183},{date:"2023-08-10",number:"183",amount:1.95,net:4060,min:"48:28",sms:117},{date:"2023-08-10",number:"938",amount:5.94,net:1540,min:118,sms:209},{date:"2023-08-10",number:"379",amount:2.72,net:10020,min:"1:22",sms:130},{date:"2023-08-10",number:"818",amount:13.65,net:2040,min:166,sms:176},{date:"2023-08-10",number:"828",amount:0,net:3970,min:132,sms:184},{date:"2023-08-05",number:"183",amount:1.95,net:4670,min:"48:55",sms:117},{date:"2023-08-05",number:"938",amount:5.94,net:1580,min:118,sms:209},{date:"2023-08-05",number:"379",amount:27.72,net:6260,min:"1:22",sms:130},{date:"2023-08-05",number:"818",amount:13.65,net:2090,min:166,sms:176},{date:"2023-08-05",number:"828",amount:0,net:3990,min:132,sms:184},{date:"2023-08-01",number:"183",amount:1.95,net:4690,min:"55:12",sms:117},{date:"2023-08-01",number:"938",amount:5.94,net:1590,min:118,sms:209},{date:"2023-08-01",number:"379",amount:27.72,net:6440,min:"1:22",sms:130},{date:"2023-08-01",number:"818",amount:18.65,net:2090,min:166,sms:176},{date:"2023-08-01",number:"828",amount:0,net:4e3,min:132,sms:184},{date:"2023-07-30",number:"183",amount:1.95,net:815,min:"55:49",sms:117},{date:"2023-07-30",number:"938",amount:10.94,net:1600,min:118,sms:109},{date:"2023-07-30",number:"379",amount:2.72,net:6540,min:"1:22",sms:130},{date:"2023-07-30",number:"818",amount:18.65,net:1100,min:166,sms:176},{date:"2023-07-30",number:"828",amount:.61,net:405,min:132,sms:184},{date:"2023-07-25",number:"183",amount:1.95,net:1100,min:"59:03",sms:118},{date:"2023-07-25",number:"938",amount:10.94,net:1650,min:120,sms:111},{date:"2023-07-25",number:"379",amount:2.72,net:7140,min:"1:22",sms:130},{date:"2023-07-25",number:"818",amount:18.65,net:1120,min:166,sms:176},{date:"2023-07-25",number:"828",amount:.61,net:1040,min:132,sms:184},{date:"2023-07-20",number:"183",amount:1.95,net:1390,min:"60:19",sms:119},{date:"2023-07-20",number:"938",amount:10.94,net:1650,min:148,sms:111},{date:"2023-07-20",number:"379",amount:2.72,net:7690,min:"1:22",sms:130},{date:"2023-07-20",number:"818",amount:18.65,net:1150,min:166,sms:176},{date:"2023-07-20",number:"828",amount:.61,net:1050,min:132,sms:184},{date:"2023-07-15",number:"183",amount:1.95,net:1880,min:"60:40",sms:119},{date:"2023-07-15",number:"938",amount:10.94,net:1660,min:148,sms:111},{date:"2023-07-15",number:"379",amount:2.72,net:8870,min:"1:22",sms:130},{date:"2023-07-15",number:"818",amount:18.65,net:1160,min:166,sms:176},{date:"2023-07-15",number:"828",amount:.61,net:708,min:132,sms:184},{date:"2023-07-10",number:"183",amount:.95,net:1180,min:"74:37",sms:121},{date:"2023-07-10",number:"938",amount:10.94,net:1680,min:148,sms:111},{date:"2023-07-10",number:"379",amount:2.72,net:10200,min:"1:22",sms:130},{date:"2023-07-10",number:"818",amount:18.65,net:1190,min:166,sms:176},{date:"2023-07-10",number:"828",amount:.61,net:708,min:132,sms:184},{date:"2023-07-05",number:"183",amount:5.95,net:908,min:"75:18",sms:126},{date:"2023-07-05",number:"938",amount:10.94,net:1710,min:148,sms:111},{date:"2023-07-05",number:"379",amount:27.72,net:6420,min:"1:22",sms:130},{date:"2023-07-05",number:"818",amount:18.65,net:1220,min:166,sms:176},{date:"2023-07-05",number:"828",amount:.61,net:1030,min:132,sms:184},{date:"2023-07-01",number:"183",amount:5.95,net:1020,min:"75:18",sms:126},{date:"2023-07-01",number:"938",amount:10.94,net:1720,min:148,sms:111},{date:"2023-07-01",number:"379",amount:27.72,net:7380,min:"1:22",sms:130},{date:"2023-07-01",number:"818",amount:18.65,net:1220,min:166,sms:176},{date:"2023-07-01",number:"828",amount:5.61,net:1330,min:132,sms:102},{date:"2023-06-26",number:"183",amount:.95,net:1460,min:"75:18",sms:127},{date:"2023-06-26",number:"938",amount:5.94,net:1720,min:150,sms:111},{date:"2023-06-26",number:"379",amount:2.72,net:7940,min:"1:22",sms:130},{date:"2023-06-26",number:"818",amount:13.65,net:1250,min:166,sms:176},{date:"2023-06-26",number:"828",amount:.61,net:1630,min:132,sms:102},{date:"2023-06-21",number:"183",amount:.95,net:1460,min:"75:18",sms:127},{date:"2023-06-21",number:"938",amount:5.94,net:1720,min:155,sms:111},{date:"2023-06-21",number:"379",amount:2.72,net:8690,min:"1:22",sms:130},{date:"2023-06-21",number:"818",amount:13.65,net:1270,min:166,sms:176},{date:"2023-06-21",number:"828",amount:.61,net:2230,min:133,sms:92},{date:"2023-06-15",number:"183",amount:.95,net:1590,min:"77:12",sms:127},{date:"2023-06-15",number:"938",amount:5.94,net:1750,min:158,sms:111},{date:"2023-06-15",number:"379",amount:2.72,net:9110,min:"1:22",sms:130},{date:"2023-06-15",number:"818",amount:13.65,net:1670,min:166,sms:176},{date:"2023-06-15",number:"828",amount:4.61,net:286,min:133,sms:94},{date:"2023-06-11",number:"183",amount:.95,net:1680,min:"77:12",sms:129},{date:"2023-06-11",number:"938",amount:5.94,net:1780,min:158,sms:111},{date:"2023-06-11",number:"379",amount:2.72,net:9800,min:"1:22",sms:130},{date:"2023-06-11",number:"818",amount:13.65,net:2590,min:166,sms:176},{date:"2023-06-11",number:"828",amount:4.61,net:323,min:133,sms:109},{date:"2023-06-05",number:"183",amount:.95,net:2040,min:"77:12",sms:132},{date:"2023-06-05",number:"938",amount:5.94,net:1800,min:158,sms:111},{date:"2023-06-05",number:"379",amount:27.72,net:4990,min:"1:22",sms:130},{date:"2023-06-05",number:"818",amount:13.65,net:2640,min:166,sms:176},{date:"2023-06-05",number:"828",amount:4.61,net:720,min:136,sms:121},{date:"2023-06-02",number:"183",amount:9.95,net:148,min:"82:53",sms:32},{date:"2023-06-02",number:"938",amount:.94,net:1820,min:158,sms:111},{date:"2023-06-02",number:"379",amount:2.72,net:6020,min:"1:22",sms:130},{date:"2023-06-02",number:"818",amount:18.65,net:2650,min:166,sms:76},{date:"2023-06-02",number:"828",amount:4.61,net:729,min:139,sms:28},{date:"2023-05-30",number:"183",amount:9.95,net:211,min:"82:53",sms:32},{date:"2023-05-30",number:"938",amount:.94,net:1830,min:158,sms:111},{date:"2023-05-30",number:"379",amount:2.72,net:6090,min:"1:22",sms:130},{date:"2023-05-30",number:"818",amount:18.65,net:2660,min:166,sms:76},{date:"2023-05-30",number:"828",amount:4.61,net:753,min:140,sms:28},{date:"2023-05-26",number:"183",amount:9.95,net:433,min:"84:57",sms:33},{date:"2023-05-26",number:"938",amount:.94,net:1850,min:158,sms:111},{date:"2023-05-26",number:"379",amount:2.72,net:6680,min:"1:22",sms:130},{date:"2023-05-26",number:"818",amount:18.65,net:2690,min:166,sms:76},{date:"2023-05-26",number:"828",amount:4.61,net:811,min:146,sms:38},{date:"2023-05-20",number:"183",amount:9.95,net:681,min:"85:49",sms:34},{date:"2023-05-20",number:"938",amount:.94,net:1860,min:168,sms:111},{date:"2023-05-20",number:"379",amount:2.72,net:6840,min:"1:22",sms:130},{date:"2023-05-20",number:"818",amount:18.65,net:2730,min:166,sms:93},{date:"2023-05-20",number:"828",amount:5.2,net:899,min:146,sms:67},{date:"2023-05-15",number:"183",amount:9.95,net:750,min:"85:49",sms:34},{date:"2023-05-15",number:"938",amount:.94,net:1860,min:168,sms:111},{date:"2023-05-15",number:"379",amount:2.72,net:6840,min:"1:22",sms:130},{date:"2023-05-15",number:"818",amount:18.65,net:2730,min:166,sms:105},{date:"2023-05-15",number:"828",amount:5.2,net:963,min:148,sms:67},{date:"2023-05-10",number:"183",amount:9.95,net:1500,min:"87:50",sms:43},{date:"2023-05-10",number:"938",amount:.94,net:1910,min:199,sms:111},{date:"2023-05-10",number:"379",amount:2.72,net:9310,min:"1:22",sms:130},{date:"2023-05-10",number:"818",amount:18.65,net:2750,min:166,sms:105},{date:"2023-05-10",number:"828",amount:5.2,net:1030,min:149,sms:68},{date:"2023-05-05",number:"183",amount:9.95,net:1720,min:"87:50",sms:45},{date:"2023-05-05",number:"938",amount:.94,net:1920,min:199,sms:111},{date:"2023-05-05",number:"379",amount:27.72,net:7120,min:"1:22",sms:130},{date:"2023-05-05",number:"818",amount:13.65,net:2770,min:166,sms:105},{date:"2023-05-05",number:"828",amount:5.2,net:1040,min:150,sms:77},{date:"2023-05-01",number:"183",amount:4.95,net:1870,min:"88:05",sms:45},{date:"2023-05-01",number:"938",amount:10.94,net:1950,min:"99:37",sms:111},{date:"2023-05-01",number:"379",amount:2.72,net:7450,min:"1:22",sms:130},{date:"2023-05-01",number:"818",amount:13.65,net:2780,min:166,sms:105},{date:"2023-05-01",number:"828",amount:.2,net:1080,min:150,sms:77},{date:"2023-04-26",number:"183",amount:4.95,net:2010,min:"89:27",sms:45},{date:"2023-04-26",number:"938",amount:10.94,net:1950,min:"99:37",sms:111},{date:"2023-04-26",number:"379",amount:2.72,net:7830,min:"1:22",sms:130},{date:"2023-04-26",number:"818",amount:13.65,net:2810,min:166,sms:105},{date:"2023-04-26",number:"828",amount:.2,net:1080,min:150,sms:77},{date:"2023-04-21",number:"183",amount:4.95,net:2100,min:"89:36",sms:45},{date:"2023-04-21",number:"938",amount:10.94,net:1970,min:"99:37",sms:111},{date:"2023-04-21",number:"379",amount:2.72,net:8640,min:"1:22",sms:130},{date:"2023-04-21",number:"818",amount:13.65,net:2830,min:166,sms:105},{date:"2023-04-21",number:"828",amount:.2,net:1210,min:150,sms:77},{date:"2023-04-19",number:"183",amount:3.95,net:125,min:"89:36",sms:45},{date:"2023-04-19",number:"938",amount:10.94,net:1970,min:101,sms:111},{date:"2023-04-19",number:"379",amount:2.72,net:8850,min:"1:22",sms:130},{date:"2023-04-19",number:"818",amount:13.65,net:2870,min:166,sms:105},{date:"2023-04-19",number:"828",amount:5.2,net:225,min:150,sms:77},{date:"2023-04-17",number:"183",amount:3.95,net:216,min:"89:36",sms:45},{date:"2023-04-17",number:"938",amount:10.94,net:1970,min:101,sms:111},{date:"2023-04-17",number:"379",amount:2.72,net:9010,min:"1:22",sms:130},{date:"2023-04-17",number:"818",amount:13.65,net:2890,min:166,sms:105},{date:"2023-04-17",number:"828",amount:5.2,net:227,min:150,sms:77},{date:"2023-04-11",number:"183",amount:3.95,net:691,min:"93:43",sms:55},{date:"2023-04-11",number:"938",amount:10.94,net:1990,min:110,sms:127},{date:"2023-04-11",number:"379",amount:2.72,net:9760,min:"1:22",sms:130},{date:"2023-04-11",number:"818",amount:13.65,net:2910,min:166,sms:109},{date:"2023-04-11",number:"828",amount:5.2,net:247,min:150,sms:112},{date:"2023-04-07",number:"183",amount:3.64,net:1160,min:"93:43",sms:61},{date:"2023-04-07",number:"938",amount:10.94,net:2e3,min:112,sms:127},{date:"2023-04-07",number:"379",amount:27.72,net:7690,min:"1:22",sms:130},{date:"2023-04-07",number:"818",amount:13.65,net:2930,min:166,sms:112},{date:"2023-04-07",number:"828",amount:5.2,net:268,min:150,sms:112},{date:"2023-04-04",number:"183",amount:3.95,net:1160,min:"93:59",sms:61},{date:"2023-04-04",number:"938",amount:10.94,net:2020,min:115,sms:149},{date:"2023-04-04",number:"379",amount:27.72,net:7840,min:"1:22",sms:130},{date:"2023-04-04",number:"818",amount:13.65,net:2940,min:169,sms:122},{date:"2023-04-04",number:"828",amount:5.2,net:276,min:150,sms:112},{date:"2023-04-01",number:"183",amount:8.95,net:188,min:"1:26",sms:61},{date:"2023-04-01",number:"938",amount:5.94,net:2030,min:115,sms:149},{date:"2023-04-01",number:"379",amount:2.72,net:8110,min:"1:22",sms:130},{date:"2023-04-01",number:"818",amount:8.65,net:3130,min:169,sms:128},{date:"2023-04-01",number:"828",amount:.2,net:283,min:150,sms:112},{date:"2023-03-28",number:"183",amount:8.95,net:333,min:"2:15",sms:69},{date:"2023-03-28",number:"938",amount:5.94,net:2040,min:115,sms:149},{date:"2023-03-28",number:"379",amount:2.72,net:8390,min:"1:22",sms:130},{date:"2023-03-28",number:"818",amount:8.65,net:3160,min:170,sms:133},{date:"2023-03-28",number:"828",amount:.2,net:290,min:150,sms:119},{date:"2023-03-23",number:"183",amount:8.95,net:739,min:"12:10",sms:75},{date:"2023-03-23",number:"938",amount:5.94,net:2040,min:115,sms:149},{date:"2023-03-23",number:"379",amount:2.72,net:9020,min:"1:22",sms:130},{date:"2023-03-23",number:"818",amount:8.65,net:3250,min:170,sms:140},{date:"2023-03-23",number:"828",amount:.2,net:299,min:150,sms:125},{date:"2023-03-17",number:"183",amount:8.95,net:818,min:"12:54",sms:75},{date:"2023-03-17",number:"938",amount:5.94,net:2050,min:115,sms:149},{date:"2023-03-17",number:"379",amount:2.72,net:9540,min:"1:22",sms:130},{date:"2023-03-17",number:"818",amount:8.65,net:3290,min:170,sms:140},{date:"2023-03-17",number:"828",amount:.2,net:299,min:150,sms:125},{date:"2023-03-14",number:"183",amount:8.95,net:872,min:"15:23",sms:75},{date:"2023-03-14",number:"938",amount:5.94,net:2060,min:115,sms:149},{date:"2023-03-14",number:"379",amount:2.72,net:9890,min:"1:22",sms:130},{date:"2023-03-14",number:"818",amount:8.65,net:3320,min:170,sms:140},{date:"2023-03-14",number:"828",amount:.2,net:299,min:150,sms:125},{date:"2023-03-13",number:"183",amount:8.95,net:873,min:16,sms:75},{date:"2023-03-10",number:"183",amount:8.95,net:1e3,min:"16:30",sms:75},{date:"2023-03-10",number:"938",amount:5.94,net:2070,min:115,sms:151},{date:"2023-03-10",number:"379",amount:2.72,net:10010,min:"1:22",sms:130},{date:"2023-03-10",number:"818",amount:8.65,net:3350,min:170,sms:140},{date:"2023-03-10",number:"828",amount:.2,net:299,min:150,sms:29},{date:"2023-02-19",number:"183",amount:3.95,net:1820,min:"40:23",sms:80},{date:"2023-02-19",number:"938",amount:.94,net:2100,min:115,sms:154},{date:"2023-02-19",number:"379",amount:2.72,net:9860,min:"1:22",sms:130},{date:"2023-02-19",number:"818",amount:13.65,net:2470,min:170,sms:140},{date:"2023-02-19",number:"828",amount:.2,net:354,min:151,sms:0},{date:"2023-02-18",number:"183",amount:7.95,net:101,min:"40:23",sms:80},{date:"2023-02-18",number:"938",amount:.94,net:2110,min:115,sms:154},{date:"2023-02-18",number:"379",amount:2.72,net:12590,min:"1:22",sms:130},{date:"2023-02-18",number:"818",amount:13.65,net:2480,min:170,sms:140},{date:"2023-02-18",number:"828",amount:2.93,net:358,min:151,sms:13},{date:"2023-02-10",number:"183",amount:7.95,net:1570,min:"58:25",sms:83},{date:"2023-02-10",number:"938",amount:.94,net:2140,min:120,sms:154},{date:"2023-02-10",number:"379",amount:2.72,net:3700,min:"1:21",sms:130},{date:"2023-02-10",number:"818",amount:13.65,net:2530,min:170,sms:140},{date:"2023-02-10",number:"828",amount:2.93,net:817,min:152,sms:88},{date:"2023-02-02",number:"183",amount:7.95,net:863,min:"58:25",sms:87},{date:"2023-02-02",number:"938",amount:10.94,net:2170,min:"36:26",sms:154},{date:"2023-02-02",number:"379",amount:2.72,net:3870,min:"6:28",sms:130},{date:"2023-02-02",number:"818",amount:18.65,net:2590,min:170,sms:140},{date:"2023-02-02",number:"828",amount:2.93,net:1008,min:152,sms:88}]})),1)[0],u=(0,m.useMemo)((function(){return a.map((function(n){return{date:n.date,number:n.number,amount:n.amount,net:n.net,min:n.min,sms:n.sms}}))}),[a]);return m.createElement("div",{className:E.Elixir},m.createElement("h3",null,"Recharges & Purchases"),m.createElement(C,{list:e.concat(t.map((function(n){return{date:n.date,number:n.number,amount:n.amount}}))),balance:u}),m.createElement("h3",null,"Balance"),m.createElement(w,{list:u}),m.createElement("h3",null,"Internet"),m.createElement(w,{list:u.map((function(n){return{number:n.number,date:n.date,amount:n.net/1e3}}))}),m.createElement("h3",null,"Minutes"),m.createElement(w,{list:u.map((function(n){var e=n.number,t=n.date,m=n.min;return{number:e,date:t,amount:L(m)}}))}),m.createElement("h3",null,"Messages"),m.createElement(w,{list:u.map((function(n){return{number:n.number,date:n.date,amount:n.sms}}))}),m.createElement("table",null,m.createElement("thead",null,m.createElement("tr",null,m.createElement("th",null,"date"),m.createElement("th",null,"number"),m.createElement("th",null,"balance"),m.createElement("th",null,"internet"),m.createElement("th",null,"min"),m.createElement("th",null,"sms"))),m.createElement("tbody",null,u.map((function(n,e){var t=n.date,a=n.number,u=n.amount,r=n.net,s=n.min,o=n.sms;return[m.createElement("tr",{key:e},m.createElement("th",null,t),m.createElement("td",null,{183:"507 *** ".concat(a),938:"509 *** ".concat(a),379:"501 *** ".concat(a),818:"575 *** ".concat(a),828:"575 *** ".concat(a)}[a]),m.createElement("td",null,S(u)),m.createElement("td",null,M(r)),m.createElement("td",null,I(s)),m.createElement("td",null,j(o)))]})))))}function J(){return m.createElement("div",{className:E.Section},m.createElement("h2",null,"Mobile"),m.createElement(N,null))}},2779:(n,e)=>{var t;!function(){"use strict";var m={}.hasOwnProperty;function a(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e];if(t){var u=typeof t;if("string"===u||"number"===u)n.push(t);else if(Array.isArray(t)){if(t.length){var r=a.apply(null,t);r&&n.push(r)}}else if("object"===u){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var s in t)m.call(t,s)&&t[s]&&n.push(s)}}}return n.join(" ")}n.exports?(a.default=a,n.exports=a):void 0===(t=function(){return a}.apply(e,[]))||(n.exports=t)}()},9399:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var m=t(272),a=t.n(m),u=t(2609),r=t.n(u)()(a());r.push([n.id,".iqnqsUuBNnL0KCwnepLc{color:purple}.QJIy6ghB2AgNJ7zMTLGF{font-family:Arial,Helvetica,sans-serif;font-size:.7em}.QJIy6ghB2AgNJ7zMTLGF table{border-collapse:collapse}.QJIy6ghB2AgNJ7zMTLGF thead th{text-align:center}.QJIy6ghB2AgNJ7zMTLGF tbody tr:nth-child(even){background-color:#f7f7f7}.QJIy6ghB2AgNJ7zMTLGF th,.QJIy6ghB2AgNJ7zMTLGF td{padding:.5em 1em}.QJIy6ghB2AgNJ7zMTLGF th{text-align:left}.QJIy6ghB2AgNJ7zMTLGF td{text-align:right}.QJIy6ghB2AgNJ7zMTLGF .GmYjH7fkQ3pkcr4Sqa5C{background:#add8e6}.QJIy6ghB2AgNJ7zMTLGF .muj3jwMp6fujzgV48_VQ:hover{background-color:#e0e0e0}.QJIy6ghB2AgNJ7zMTLGF .muj3jwMp6fujzgV48_VQ.GmYjH7fkQ3pkcr4Sqa5C{color:#f7f7f7;background:purple}.Q9Hd9YwfuqsP7uq1jV02{clear:both;padding:.5em 0;border:2px solid rgba(0,0,0,0);margin:.5em}.qLMYkTVITt9UXsXWIxAl{position:relative;padding:2em}.qLMYkTVITt9UXsXWIxAl svg{display:block;width:100%;height:25vw;background:#f7f7f7;overflow:visible}.qLMYkTVITt9UXsXWIxAl svg text{font:1em arial}","",{version:3,sources:["webpack://./src/containers/Mobile/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,sCAAA,CACA,cAAA,CACA,4BACE,wBAAA,CAGA,+BACE,iBAAA,CAKA,+CACE,wBAAA,CAIN,kDAEE,gBAAA,CAEF,yBACE,eAAA,CAEF,yBACE,gBAAA,CAEF,4CACE,kBAAA,CAGA,kDACE,wBAAA,CAEF,iEACE,aAAA,CACA,iBAAA,CAIN,sBACE,UAAA,CACA,cAAA,CACA,8BAAA,CACA,WAAA,CAEF,sBACE,iBAAA,CACA,WAAA,CAEA,0BACE,aAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,gBAAA,CAEA,+BACE,cAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Elixir {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.7em;\n  table {\n    border-collapse: collapse;\n  }\n  thead {\n    th {\n      text-align: center;\n    }\n  }\n  tbody {\n    tr {\n      &:nth-child(even) {\n        background-color: #f7f7f7;\n      }\n    }\n  }\n  th,\n  td {\n    padding: 0.5em 1em;\n  }\n  th {\n    text-align: left;\n  }\n  td {\n    text-align: right;\n  }\n  .selected {\n    background: lightblue;\n  }\n  .active {\n    &:hover {\n      background-color: #e0e0e0;\n    }\n    &.selected {\n      color: #f7f7f7;\n      background: purple;\n    }\n  }\n}\n.Row {\n  clear: both;\n  padding: 0.5em 0;\n  border: 2px solid transparent;\n  margin: 0.5em;\n}\n.Chart {\n  position: relative;\n  padding: 2em;\n\n  svg {\n    display: block;\n    width: 100%;\n    height: 25vw;\n    background: #f7f7f7;\n    overflow: visible;\n\n    text {\n      font: 1em arial;\n    }\n  }\n}\n"],sourceRoot:""}]),r.locals={Section:"iqnqsUuBNnL0KCwnepLc",Elixir:"QJIy6ghB2AgNJ7zMTLGF",selected:"GmYjH7fkQ3pkcr4Sqa5C",active:"muj3jwMp6fujzgV48_VQ",Row:"Q9Hd9YwfuqsP7uq1jV02",Chart:"qLMYkTVITt9UXsXWIxAl"};const s=r}}]);
//# sourceMappingURL=277.js.map