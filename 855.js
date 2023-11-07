/*! For license information please see 855.js.LICENSE.txt */
(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[855],{8262:(e,t,n)=>{"use strict";var r=n(3586);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},3980:(e,t,n)=>{e.exports=n(8262)()},3586:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8320:(e,t,n)=>{"use strict";var r=n(2322).jsx,i=/(\r\n|\r|\n)/g;e.exports=function(e){return"string"!=typeof e?e:e.split(i).map((function(e,t){return e.match(i)?r("br",{key:t}):e}))}},8283:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(2784),i=n(3980),a=n.n(i),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return a.state={},a.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},a.elements={},a.onResize=a.onResize.bind(a),a.onTruncate=a.onTruncate.bind(a),a.calcTargetWidth=a.calcTargetWidth.bind(a),a.measureWidth=a.measureWidth.bind(a),a.getLines=a.getLines.bind(a),a.renderLine=a.renderLine.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,r=document.createElement("canvas");this.canvasContext=r.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var r=t[n],i=document.createElement("div");return i.innerHTML="foo<br/>bar","foo\nbar"!==i[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),r=t[n]),r}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame((function(){t(e)})))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,r=this.canvasContext,i=this.props.width;if(t){var a=i||Math.floor(t.parentNode.getBoundingClientRect().width);if(!a)return window.requestAnimationFrame((function(){return n(e)}));var o=window.getComputedStyle(t),s=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");r.font=s,this.setState({targetWidth:a},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,i=t.ellipsis,a=t.trimWhitespace,o=this.state.targetWidth,s=this.innerText,c=this.measureWidth,u=this.onTruncate,l=this.trimRight,h=[],f=s(e.text).split("\n").map((function(e){return e.split(" ")})),p=!0,d=this.ellipsisWidth(this.elements.ellipsis),m=1;m<=n;m++){var v=f[0];if(0!==v.length){var y=v.join(" ");if(c(y)<=o&&1===f.length){p=!1,h.push(y);break}if(m===n){for(var b=v.join(" "),g=0,w=b.length-1;g<=w;){var O=Math.floor((g+w)/2);c(b.slice(0,O+1))+d<=o?g=O+1:w=O-1}var E=b.slice(0,g);if(a)for(E=l(E);!E.length&&h.length;)E=l(h.pop());y=r.createElement("span",null,E,i)}else{for(var T=0,_=v.length-1;T<=_;){var k=Math.floor((T+_)/2);c(v.slice(0,k+1).join(" "))<=o?T=k+1:_=k-1}if(0===T){m=n-1;continue}y=v.slice(0,T).join(" "),f[0].splice(0,T)}h.push(y)}else h.push(),f.shift(),m--}return u(p),h}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.createElement("span",{key:t},e);var i=r.createElement("br",{key:t+"br"});return e?[r.createElement("span",{key:t},e),i]:i}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,i=n.children,a=n.ellipsis,s=n.lines,c=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["children","ellipsis","lines"]),u=this.state.targetWidth,l=this.getLines,h=this.renderLine,f=this.onTruncate,p=void 0;return"undefined"!=typeof window&&!(!t||!u)&&(s>0?p=l().map(h):(p=i,f(!1))),delete c.onTruncate,delete c.trimWhitespace,r.createElement("span",o({},c,{ref:function(t){e.elements.target=t}}),r.createElement("span",null,p),r.createElement("span",{ref:function(t){e.elements.text=t}},i),r.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},a))}}]),t}(r.Component);c.propTypes={children:a().node,ellipsis:a().node,lines:a().oneOfType([a().oneOf([!1]),a().number]),trimWhitespace:a().bool,width:a().number,onTruncate:a().func},c.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0};const u=c},1837:(e,t,n)=>{"use strict";var r=n(2784),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},2322:(e,t,n)=>{"use strict";e.exports=n(1837)},6130:(e,t,n)=>{"use strict";n.d(t,{X:()=>i});var r=n(2970),i=function(e){function t(t){var n=e.call(this)||this;return n._value=t,n}return(0,r.__extends)(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(t){var n=e.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},t.prototype.getValue=function(){var e=this,t=e.hasError,n=e.thrownError,r=e._value;if(t)throw n;return this._throwIfClosed(),r},t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},t}(n(1148).x)},7674:(e,t,n)=>{"use strict";n.d(t,{Xf:()=>m});var r=n(2970),i=n(9361),a=n(1856),o=n(3919),s=n(1053),c=n(1305),u=n(2085),l=n(3651),h=n(2141),f=n(9126),p=n(6278),d=n(4105);function m(e){if(e instanceof o.y)return e;if(null!=e){if((0,s.c)(e))return b=e,new o.y((function(e){var t=b[d.L]();if((0,f.m)(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if((0,i.z)(e))return y=e,new o.y((function(e){for(var t=0;t<y.length&&!e.closed;t++)e.next(y[t]);e.complete()}));if((0,a.t)(e))return m=e,new o.y((function(e){m.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,p.h)}));if((0,c.D)(e))return v(e);if((0,l.T)(e))return n=e,new o.y((function(e){var t,i;try{for(var a=(0,r.__values)(n),o=a.next();!o.done;o=a.next()){var s=o.value;if(e.next(s),e.closed)return}}catch(e){t={error:e}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(t)throw t.error}}e.complete()}));if((0,h.L)(e))return t=e,v((0,h.Q)(t))}var t,n,m,y,b;throw(0,u.z)(e)}function v(e){return new o.y((function(t){(function(e,t){var n,i,a,o;return(0,r.__awaiter)(this,void 0,void 0,(function(){var s,c;return(0,r.__generator)(this,(function(u){switch(u.label){case 0:u.trys.push([0,5,6,11]),n=(0,r.__asyncValues)(e),u.label=1;case 1:return[4,n.next()];case 2:if((i=u.sent()).done)return[3,4];if(s=i.value,t.next(s),t.closed)return[2];u.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=u.sent(),a={error:c},[3,11];case 6:return u.trys.push([6,,9,10]),i&&!i.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:u.sent(),u.label=8;case 8:return[3,10];case 9:if(a)throw a.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))}))})(e,t).catch((function(e){return t.error(e)}))}))}},9266:(e,t,n)=>{"use strict";n.d(t,{H:()=>o});var r=n(3919),i=n(997),a=n(6670);function o(e,t,n){void 0===e&&(e=0),void 0===n&&(n=i.P);var o=-1;return null!=t&&((0,a.K)(t)?n=t:o=t),new r.y((function(t){var r,i=(r=e)instanceof Date&&!isNaN(r)?+e-n.now():e;i<0&&(i=0);var a=0;return n.schedule((function(){t.closed||(t.next(a++),0<=o?this.schedule(void 0,o):t.complete())}),i)}))}},7984:(e,t,n)=>{"use strict";n.d(t,{U:()=>a});var r=n(1118),i=n(7394);function a(e,t){return(0,r.e)((function(n,r){var a=0;n.subscribe((0,i.x)(r,(function(n){r.next(e.call(t,n,a++))})))}))}},878:(e,t,n)=>{"use strict";n.d(t,{z:()=>c});var r=n(7984),i=n(7674),a=n(1118),o=(n(32),n(7394)),s=n(9126);function c(e,t,n){return void 0===n&&(n=1/0),(0,s.m)(t)?c((function(n,a){return(0,r.U)((function(e,r){return t(n,e,a,r)}))((0,i.Xf)(e(n,a)))}),n):("number"==typeof t&&(n=t),(0,a.e)((function(t,r){return function(e,t,n,r,a,s,c,u){var l=[],h=0,f=0,p=!1,d=function(){!p||l.length||h||t.complete()},m=function(e){return h<r?v(e):l.push(e)},v=function(e){h++;var a=!1;(0,i.Xf)(n(e,f++)).subscribe((0,o.x)(t,(function(e){t.next(e)}),(function(){a=!0}),void 0,(function(){if(a)try{h--;for(;l.length&&h<r;)e=void 0,e=l.shift(),v(e);d()}catch(e){t.error(e)}var e})))};return e.subscribe((0,o.x)(t,m,(function(){p=!0,d()}))),function(){}}(t,r,e,n)})))}},7622:(e,t,n)=>{"use strict";n.d(t,{p:()=>c});var r=n(997),i=n(1118),a=n(7394),o=n(7674),s=n(9266);function c(e,t,n){void 0===t&&(t=r.z);var c=(0,s.H)(e,t);return function(e,t){return(0,i.e)((function(e,n){var r=null!=t?t:{},i=r.leading,s=void 0===i||i,u=r.trailing,l=void 0!==u&&u,h=!1,f=null,p=null,d=!1,m=function(){null==p||p.unsubscribe(),p=null,l&&(b(),d&&n.complete())},v=function(){p=null,d&&n.complete()},y=function(e){return p=(0,o.Xf)(c).subscribe((0,a.x)(n,m,v))},b=function(){if(h){h=!1;var e=f;f=null,n.next(e),!d&&y()}};e.subscribe((0,a.x)(n,(function(e){h=!0,f=e,(!p||p.closed)&&(s?b():y())}),(function(){d=!0,(!(l&&h&&p)||p.closed)&&n.complete()})))}))}(0,n)}},6149:(e,t,n)=>{"use strict";n.d(t,{h:()=>r});var r="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"},32:(e,t,n)=>{"use strict";function r(e,t,n,r,i){void 0===r&&(r=0),void 0===i&&(i=!1);var a=t.schedule((function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()}),r);if(e.add(a),!i)return a}n.d(t,{f:()=>r})},9361:(e,t,n)=>{"use strict";n.d(t,{z:()=>r});var r=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e}},1305:(e,t,n)=>{"use strict";n.d(t,{D:()=>i});var r=n(9126);function i(e){return Symbol.asyncIterator&&(0,r.m)(null==e?void 0:e[Symbol.asyncIterator])}},1053:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});var r=n(4105),i=n(9126);function a(e){return(0,i.m)(e[r.L])}},3651:(e,t,n)=>{"use strict";n.d(t,{T:()=>a});var r=n(6149),i=n(9126);function a(e){return(0,i.m)(null==e?void 0:e[r.h])}},1856:(e,t,n)=>{"use strict";n.d(t,{t:()=>i});var r=n(9126);function i(e){return(0,r.m)(null==e?void 0:e.then)}},2141:(e,t,n)=>{"use strict";n.d(t,{L:()=>o,Q:()=>a});var r=n(2970),i=n(9126);function a(e){return(0,r.__asyncGenerator)(this,arguments,(function(){var t,n,i;return(0,r.__generator)(this,(function(a){switch(a.label){case 0:t=e.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,(0,r.__await)(t.read())];case 3:return n=a.sent(),i=n.value,n.done?[4,(0,r.__await)(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,(0,r.__await)(i)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}function o(e){return(0,i.m)(null==e?void 0:e.getReader)}},6670:(e,t,n)=>{"use strict";n.d(t,{K:()=>i});var r=n(9126);function i(e){return e&&(0,r.m)(e.schedule)}},2085:(e,t,n)=>{"use strict";function r(e){return new TypeError("You provided "+(null!==e&&"object"==typeof e?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}n.d(t,{z:()=>r})},7302:function(e,t,n){var r=n(8834).lW;!function(t){let n;function i(e,t){const n=e.charCodeAt(t);if(isNaN(n))throw new RangeError("Index "+t+' out of range for string "'+e+'"; please open an issue at https://github.com/Trott/slug/issues/new');if(n<55296||n>57343)return[e.charAt(t),t];if(n>=55296&&n<=56319){if(e.length<=t+1)return[" ",t];const n=e.charCodeAt(t+1);return n<56320||n>57343?[" ",t]:[e.charAt(t)+e.charAt(t+1),t+1]}if(0===t)return[" ",t];const r=e.charCodeAt(t-1);if(r<55296||r>56319)return[" ",t];throw new Error('String "'+e+'" reaches code believed to be unreachable; please open an issue at https://github.com/Trott/slug/issues/new')}function a(e,t){let r=c(e,t);if(!0===(t&&void 0!==t.fallback?t.fallback:a.defaults.fallback)&&""===r){let a="";for(let t=0;t<e.length;t++){const n=i(e,t);t=n[1],a+=n[0]}r=c(n(a),t)}return r}n="undefined"!=typeof window?window.btoa?function(e){return btoa(unescape(encodeURIComponent(e)))}:function(e){const t=unescape(encodeURIComponent(e+""));let n="";for(let e,r,i=0,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.charAt(0|i)||(a="=",i%1);n+=a.charAt(63&e>>8-i%1*8)){if(r=t.charCodeAt(i+=3/4),r>255)throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");e=e<<8|r}return n}:function(e){return r.from(e).toString("base64")};const o={bg:{Й:"Y",й:"y",X:"H",x:"h",Ц:"Ts",ц:"ts",Щ:"Sht",щ:"sht",Ъ:"A",ъ:"a",Ь:"Y",ь:"y"},de:{Ä:"AE",ä:"ae",Ö:"OE",ö:"oe",Ü:"UE",ü:"ue"},sr:{đ:"dj",Đ:"DJ"},uk:{И:"Y",и:"y",Й:"Y",й:"y",Ц:"Ts",ц:"ts",Х:"Kh",х:"kh",Щ:"Shch",щ:"shch",Г:"H",г:"h"}};let s={};function c(e,t){if("string"!=typeof e)throw new Error("slug() requires a string argument, received "+typeof e);"string"==typeof t&&(t={replacement:t}),(t=t?Object.assign({},t):{}).mode=t.mode||a.defaults.mode;const n=a.defaults.modes[t.mode],r=["replacement","multicharmap","charmap","remove","lower","trim"];for(let e,i=0,a=r.length;i<a;i++)e=r[i],t[e]=e in t?t[e]:n[e];const i=o[t.locale]||s;let c=[];for(const e in t.multicharmap){if(!Object.prototype.hasOwnProperty.call(t.multicharmap,e))continue;const n=e.length;-1===c.indexOf(n)&&c.push(n)}c=c.sort((function(e,t){return t-e}));const u="rfc3986"===t.mode?/[^\w\s\-.~]/:/[^A-Za-z0-9\s]/;let l="";for(let n,r=0,a=e.length;r<a;r++){n=e[r];let a=!1;for(let i=0;i<c.length;i++){const o=c[i],s=e.substr(r,o);if(t.multicharmap[s]){r+=o-1,n=t.multicharmap[s],a=!0;break}}a||(n=i[n]?i[n]:t.charmap[n]?t.charmap[n].replace(t.replacement," "):n.includes(t.replacement)?n.replace(t.replacement," "):n.replace(u,"")),l+=n}return t.remove&&(l=l.replace(t.remove,"")),t.trim&&(l=l.trim()),l=l.replace(/\s+/g,t.replacement),t.lower&&(l=l.toLowerCase()),l}const u={फ़:"Fi",ग़:"Ghi",ख़:"Khi",क़:"Qi",ड़:"ugDha",ढ़:"ugDhha",य़:"Yi",ज़:"Za",בִי:"i",בֵ:"e",בֵי:"e",בֶ:"e",בַ:"a",בָ:"a",בֹ:"o",וֹ:"o",בֻ:"u",וּ:"u",בּ:"b",כּ:"k",ךּ:"k",פּ:"p",שׁ:"sh",שׂ:"s",בְ:"e",חֱ:"e",חֲ:"a",חֳ:"o",בִ:"i"},l={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Æ:"AE",Ç:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ő:"O",Ø:"O",Ō:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ű:"U",Ý:"Y",Þ:"TH",ß:"ss",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",æ:"ae",ç:"c",è:"e",é:"e",ê:"e",ë:"e",ì:"i",í:"i",î:"i",ï:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ő:"o",ø:"o",ō:"o",Œ:"OE",œ:"oe",ù:"u",ú:"u",û:"u",ü:"u",ű:"u",ý:"y",þ:"th",ÿ:"y",ẞ:"SS",α:"a",β:"b",γ:"g",δ:"d",ε:"e",ζ:"z",η:"h",θ:"th",ι:"i",κ:"k",λ:"l",μ:"m",ν:"n",ξ:"3",ο:"o",π:"p",ρ:"r",σ:"s",τ:"t",υ:"y",φ:"f",χ:"x",ψ:"ps",ω:"w",ά:"a",έ:"e",ί:"i",ό:"o",ύ:"y",ή:"h",ώ:"w",ς:"s",ϊ:"i",ΰ:"y",ϋ:"y",ΐ:"i",Α:"A",Β:"B",Γ:"G",Δ:"D",Ε:"E",Ζ:"Z",Η:"H",Θ:"Th",Ι:"I",Κ:"K",Λ:"L",Μ:"M",Ν:"N",Ξ:"3",Ο:"O",Π:"P",Ρ:"R",Σ:"S",Τ:"T",Υ:"Y",Φ:"F",Χ:"X",Ψ:"PS",Ω:"W",Ά:"A",Έ:"E",Ί:"I",Ό:"O",Ύ:"Y",Ή:"H",Ώ:"W",Ϊ:"I",Ϋ:"Y",ş:"s",Ş:"S",ı:"i",İ:"I",ğ:"g",Ğ:"G",а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"yo",ж:"zh",з:"z",и:"i",й:"j",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"h",ц:"c",ч:"ch",ш:"sh",щ:"sh",ъ:"u",ы:"y",ь:"",э:"e",ю:"yu",я:"ya",А:"A",Б:"B",В:"V",Г:"G",Д:"D",Е:"E",Ё:"Yo",Ж:"Zh",З:"Z",И:"I",Й:"J",К:"K",Л:"L",М:"M",Н:"N",О:"O",П:"P",Р:"R",С:"S",Т:"T",У:"U",Ф:"F",Х:"H",Ц:"C",Ч:"Ch",Ш:"Sh",Щ:"Sh",Ъ:"U",Ы:"Y",Ь:"",Э:"E",Ю:"Yu",Я:"Ya",Є:"Ye",І:"I",Ї:"Yi",Ґ:"G",є:"ye",і:"i",ї:"yi",ґ:"g",č:"c",ď:"d",ě:"e",ň:"n",ř:"r",š:"s",ť:"t",ů:"u",ž:"z",Č:"C",Ď:"D",Ě:"E",Ň:"N",Ř:"R",Š:"S",Ť:"T",Ů:"U",Ž:"Z",ľ:"l",ĺ:"l",ŕ:"r",Ľ:"L",Ĺ:"L",Ŕ:"R",ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"E",Ł:"L",Ń:"N",Ś:"S",Ź:"Z",Ż:"Z",ā:"a",ē:"e",ģ:"g",ī:"i",ķ:"k",ļ:"l",ņ:"n",ū:"u",Ā:"A",Ē:"E",Ģ:"G",Ī:"I",Ķ:"K",Ļ:"L",Ņ:"N",Ū:"U",أ:"a",إ:"i",ب:"b",ت:"t",ث:"th",ج:"g",ح:"h",خ:"kh",د:"d",ذ:"th",ر:"r",ز:"z",س:"s",ش:"sh",ص:"s",ض:"d",ط:"t",ظ:"th",ع:"aa",غ:"gh",ف:"f",ق:"k",ك:"k",ل:"l",م:"m",ن:"n",ه:"h",و:"o",ي:"y",ء:"aa",ة:"a",آ:"a",ا:"a",پ:"p",ژ:"zh",گ:"g",چ:"ch",ک:"k",ی:"i",ė:"e",į:"i",ų:"u",Ė:"E",Į:"I",Ų:"U",ț:"t",Ț:"T",ţ:"t",Ţ:"T",ș:"s",Ș:"S",ă:"a",Ă:"A",Ạ:"A",Ả:"A",Ầ:"A",Ấ:"A",Ậ:"A",Ẩ:"A",Ẫ:"A",Ằ:"A",Ắ:"A",Ặ:"A",Ẳ:"A",Ẵ:"A",Ẹ:"E",Ẻ:"E",Ẽ:"E",Ề:"E",Ế:"E",Ệ:"E",Ể:"E",Ễ:"E",Ị:"I",Ỉ:"I",Ĩ:"I",Ọ:"O",Ỏ:"O",Ồ:"O",Ố:"O",Ộ:"O",Ổ:"O",Ỗ:"O",Ơ:"O",Ờ:"O",Ớ:"O",Ợ:"O",Ở:"O",Ỡ:"O",Ụ:"U",Ủ:"U",Ũ:"U",Ư:"U",Ừ:"U",Ứ:"U",Ự:"U",Ử:"U",Ữ:"U",Ỳ:"Y",Ỵ:"Y",Ỷ:"Y",Ỹ:"Y",Đ:"D",ạ:"a",ả:"a",ầ:"a",ấ:"a",ậ:"a",ẩ:"a",ẫ:"a",ằ:"a",ắ:"a",ặ:"a",ẳ:"a",ẵ:"a",ẹ:"e",ẻ:"e",ẽ:"e",ề:"e",ế:"e",ệ:"e",ể:"e",ễ:"e",ị:"i",ỉ:"i",ĩ:"i",ọ:"o",ỏ:"o",ồ:"o",ố:"o",ộ:"o",ổ:"o",ỗ:"o",ơ:"o",ờ:"o",ớ:"o",ợ:"o",ở:"o",ỡ:"o",ụ:"u",ủ:"u",ũ:"u",ư:"u",ừ:"u",ứ:"u",ự:"u",ử:"u",ữ:"u",ỳ:"y",ỵ:"y",ỷ:"y",ỹ:"y",đ:"d",Ә:"AE",ә:"ae",Ғ:"GH",ғ:"gh",Қ:"KH",қ:"kh",Ң:"NG",ң:"ng",Ү:"UE",ү:"ue",Ұ:"U",ұ:"u",Һ:"H",һ:"h",Ө:"OE",ө:"oe",ђ:"dj",ј:"j",љ:"lj",њ:"nj",ћ:"c",џ:"dz",Ђ:"Dj",Ј:"j",Љ:"Lj",Њ:"Nj",Ћ:"C",Џ:"Dz",ǌ:"nj",ǉ:"lj",ǋ:"NJ",ǈ:"LJ",अ:"a",आ:"aa",ए:"e",ई:"ii",ऍ:"ei",ऎ:"ae",ऐ:"ai",इ:"i",ओ:"o",ऑ:"oi",ऒ:"oii",ऊ:"uu",औ:"ou",उ:"u",ब:"B",भ:"Bha",च:"Ca",छ:"Chha",ड:"Da",ढ:"Dha",फ:"Fa",ग:"Ga",घ:"Gha",ग़:"Ghi",ह:"Ha",ज:"Ja",झ:"Jha",क:"Ka",ख:"Kha",ख़:"Khi",ल:"L",ळ:"Li",ऌ:"Li",ऴ:"Lii",ॡ:"Lii",म:"Ma",न:"Na",ङ:"Na",ञ:"Nia",ण:"Nae",ऩ:"Ni",ॐ:"oms",प:"Pa",क़:"Qi",र:"Ra",ऋ:"Ri",ॠ:"Ri",ऱ:"Ri",स:"Sa",श:"Sha",ष:"Shha",ट:"Ta",त:"Ta",ठ:"Tha",द:"Tha",थ:"Tha",ध:"Thha",ड़:"ugDha",ढ़:"ugDhha",व:"Va",य:"Ya",य़:"Yi",ज़:"Za",ə:"e",Ə:"E",ა:"a",ბ:"b",გ:"g",დ:"d",ე:"e",ვ:"v",ზ:"z",თ:"t",ი:"i",კ:"k",ლ:"l",მ:"m",ნ:"n",ო:"o",პ:"p",ჟ:"zh",რ:"r",ს:"s",ტ:"t",უ:"u",ფ:"p",ქ:"k",ღ:"gh",ყ:"q",შ:"sh",ჩ:"ch",ც:"ts",ძ:"dz",წ:"ts",ჭ:"ch",ხ:"kh",ჯ:"j",ჰ:"h",ב:"v",גּ:"g",ג:"g",ד:"d",דּ:"d",ה:"h",ו:"v",ז:"z",ח:"h",ט:"t",י:"y",כ:"kh",ך:"kh",ל:"l",מ:"m",ם:"m",נ:"n",ן:"n",ס:"s",פ:"f",ף:"f",ץ:"ts",צ:"ts",ק:"k",ר:"r",תּ:"t",ת:"t"};a.charmap=Object.assign({},l),a.multicharmap=Object.assign({},u),a.defaults={charmap:a.charmap,mode:"pretty",modes:{rfc3986:{replacement:"-",remove:null,lower:!0,charmap:a.charmap,multicharmap:a.multicharmap,trim:!0},pretty:{replacement:"-",remove:null,lower:!0,charmap:a.charmap,multicharmap:a.multicharmap,trim:!0}},multicharmap:a.multicharmap,fallback:!0},a.reset=function(){a.defaults.modes.rfc3986.charmap=a.defaults.modes.pretty.charmap=a.charmap=a.defaults.charmap=Object.assign({},l),a.defaults.modes.rfc3986.multicharmap=a.defaults.modes.pretty.multicharmap=a.multicharmap=a.defaults.multicharmap=Object.assign({},u),s=""},a.extend=function(e){const t=Object.keys(e),n={},r={};for(let i=0;i<t.length;i++)t[i].length>1?n[t[i]]=e[t[i]]:r[t[i]]=e[t[i]];Object.assign(a.charmap,r),Object.assign(a.multicharmap,n)},a.setLocale=function(e){s=o[e]||{}},e.exports?e.exports=a:t.slug=a}(this)}}]);
//# sourceMappingURL=855.js.map