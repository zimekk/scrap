/*! For license information please see 254.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[254],{4254:(t,e,r)=>{r.r(e),r.d(e,{default:()=>C});var n=r(2784),o=r(357),a=r(5016),i=r(5104),l=r(6062),u=r.n(l),c=r(4036),s=r.n(c),f=r(6793),m=r.n(f),h=r(7892),d=r.n(h),p=r(1173),v=r.n(p),y=r(2464),g=r.n(y),b=r(8471),w={};w.styleTagTransform=g(),w.setAttributes=d(),w.insert=m().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=v(),u()(b.Z,w);const E=b.Z&&b.Z.locals?b.Z.locals:void 0;function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){l=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function S(){S=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),l=new N(o||[]);return n(i,"_invoke",{value:E(t,r,l)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function m(){}function h(){}function d(){}var p={};u(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,a)&&(p=y);var g=d.prototype=m.prototype=Object.create(p);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,a,i,l){var u=s(t[n],t,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==A(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,l)}),(function(t){o("throw",t,i,l)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return o("throw",t,i,l)}))}l(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=x(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=u(d,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),u(g,l,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function N(t,e,r,n,o,a,i){try{var l=t[a](i),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(n,o)}var j=["EUR","USD","CHF","GBP"],k=(0,o.k)(function(){var t,e=(t=S().mark((function t(e){var r;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/exchange/data.json?".concat(e));case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){N(a,n,o,i,l,"next",t)}function l(t){N(a,n,o,i,l,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}());function C(t){var e=t.version,r=void 0===e?"v1":e,o=k.read(r).rates,l=L((0,n.useState)("CHF"),2),u=l[0],c=l[1],s=L((0,n.useState)(j),2),f=s[0],m=s[1],h=(0,n.useMemo)((function(){var t;return x(t={},"2019-02-22",443.03),x(t,"2019-03-22",443.03),x(t,"2019-04-23",443.03),x(t,"2019-05-23",444.15),x(t,"2019-06-21",444.15),x(t,"2019-07-23",444.15),x(t,"2019-08-23",442.27),x(t,"2019-09-23",442.27),x(t,"2019-10-23",442.27),x(t,"2019-11-22",441.49),x(t,"2019-12-23",441.49),x(t,"2020-01-23",441.49),x(t,"2020-02-21",446.11),x(t,"2020-03-23",446.11),x(t,"2020-04-23",446.11),x(t,"2020-05-22",450.35),x(t,"2020-06-23",450.35),x(t,"2020-07-23",450.35),x(t,"2020-08-21",445.27),x(t,"2020-09-23",445.27),x(t,"2020-10-23",445.27),x(t,"2020-11-23",441.87),x(t,"2020-12-23",441.87),x(t,"2021-01-22",441.87),x(t,"2021-02-23",442.06),x(t,"2021-03-23",442.06),x(t,"2021-04-23",442.06),x(t,"2021-05-21",442.82),x(t,"2021-06-23",442.82),x(t,"2021-07-23",442.82),x(t,"2021-08-23",442.46),x(t,"2021-09-23",442.46),x(t,"2021-10-22",442.46),x(t,"2021-11-23",441.87),x(t,"2021-12-23",441.87),x(t,"2022-01-21",441.87),x(t,"2022-02-23",444.77),x(t,"2022-03-23",444.77),x(t,"2022-04-22",444.77),x(t,"2022-05-23",444.58),x(t,"2022-06-23",444.58),x(t,"2022-07-22",444.58),x(t,"2022-08-23",453.04),x(t,"2022-09-23",453.04),x(t,"2022-10-21",453.04),x(t,"2022-11-23",474.84),x(t,"2022-12-23",474.84),x(t,"2021-01-23",474.84),t}),[]),d=(0,n.useMemo)((function(){return o.filter((function(t){return t.code===u})).filter((function(t){return Object.keys(h).includes(t.date)})).map((function(t){var e=t.buy,r=t.code,n=t.date,o=t.sell,a=t.spread,i=(t.time,t.units);return{date:new Date(n),name:"".concat(i," ").concat(r),buy:Number(e),sell:Number(o),spread:Number(a),value:h[n],add:60}})).map((function(t){return Object.assign(t,{pay:Math.round(100*t.sell*t.value)/100+t.add})})).sort((function(t,e){return new Date(t.date).getTime()-new Date(e.date).getTime()}))}),[o,h,u]),p=(0,n.useMemo)((function(){return o.filter((function(t){var e=t.code;return f.includes(e)})).map((function(t){var e=t.buy,r=t.sell,n=t.code,o=t.date,a=t.time,i=t.units;return{date:new Date("".concat(o," ").concat(a)),name:"".concat(i," ").concat(n),value:Number(r),value2:Number(e),group:n}})).sort((function(t,e){return new Date(t.date).getTime()-new Date(e.date).getTime()}))}),[o,f]);return console.log({rates:o,code:u,list:d}),n.createElement("div",{className:E.Section},n.createElement("h2",null,"Exchange"),n.createElement("fieldset",null,n.createElement("legend",null,"Code"),j.map((function(t){return n.createElement("label",{key:t},n.createElement("input",{type:"checkbox",value:t,checked:f.includes(t),onChange:(0,n.useCallback)((function(t){var e=t.target;return m((function(t){return e.checked?t.concat(e.value):t.filter((function(t){return t!==e.value}))}))}),[])}),n.createElement("span",null,t))}))),n.createElement(i.A,null,n.createElement(i.Z,{list:p,type:"area",legend:!0,rule:!0}),n.createElement(i.Z,{list:p,type:"area",move:!0})),n.createElement("fieldset",null,n.createElement("label",null,n.createElement("span",null,"Code"),n.createElement("select",{value:u,onChange:(0,n.useCallback)((function(t){var e=t.target;return c(e.value)}),[])},j.map((function(t){return n.createElement("option",{key:t,value:t},t)}))))),n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,"Data"),n.createElement("th",null,"Nazwa"),n.createElement("th",null,"Kupno"),n.createElement("th",null,"Sprzedaż"),n.createElement("th",null,"Spread"),n.createElement("th",null,"Wartość"),n.createElement("th",null,"Stała"),n.createElement("th",null,"Kwota")),d.map((function(t,e){return n.createElement("tr",{key:e},n.createElement("td",{align:"right"},(0,a.Z)(t.date,"dd.MM.yyyy")),n.createElement("td",null,t.name),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:4}).format(t.buy)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:4}).format(t.sell)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:4}).format(t.spread)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.value)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.add)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.pay)))}))),n.createElement("tfoot",null,[d.reduce((function(t,e){var r=t.value,n=t.add,o=t.pay;return{value:r+e.value,add:n+e.add,pay:o+e.pay}}),{value:0,add:0,pay:0})].map((function(t,e){return n.createElement("tr",{key:e},n.createElement("td",{colSpan:5}),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.value)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.add)),n.createElement("td",{align:"right"},new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(t.pay)))})))))}},8471:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(272),o=r.n(n),a=r(2609),i=r.n(a)()(o());i.push([t.id,".B6Zp7eUYgBpjqmd1ubB8{color:purple}.HYOtY3B5vlGNT0uH_VzY{clear:both}.md3pkb8fMm3YUOeAjzY0{float:left;width:150px;height:200px}.tQM2WTe6cs7QpfRhslqC{color:#d3d3d3}.P19bo6gqrx6NwOpivm_e .ltBjGN_SfGcQnxrjG0DW.KcrPBqhF3Hx7FdbRnVRD{color:#8a2be2}","",{version:3,sources:["webpack://./src/containers/Exchange/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,UAAA,CAEF,sBACE,UAAA,CACA,WAAA,CACA,YAAA,CAEF,sBACE,aAAA,CAIE,iEACE,aAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Row {\n  clear: both;\n}\n.Gallery {\n  float: left;\n  width: 150px;\n  height: 200px;\n}\n.Sale {\n  color: lightgray;\n}\n.Details {\n  .Feature {\n    &.changed {\n      color: blueviolet;\n    }\n  }\n}\n"],sourceRoot:""}]),i.locals={Section:"B6Zp7eUYgBpjqmd1ubB8",Row:"HYOtY3B5vlGNT0uH_VzY",Gallery:"md3pkb8fMm3YUOeAjzY0",Sale:"tQM2WTe6cs7QpfRhslqC",Details:"P19bo6gqrx6NwOpivm_e",Feature:"ltBjGN_SfGcQnxrjG0DW",changed:"KcrPBqhF3Hx7FdbRnVRD"};const l=i}}]);
//# sourceMappingURL=254.js.map