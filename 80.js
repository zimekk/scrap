"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[80],{8080:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(965),r=a(7946),l=a(2784),i=a(1115);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=Object.assign({env:"prod",marketId:1,country:"PL",language:"pl",taxes:.23,brand:"bmw",brandId:1,stockType:"car",stockCategory:"used",basePath:"/uzywane",endpoint:"/uzywane/api/v1/",stage:"bmw-used-pl_PL",gmApiKey:"AIzaSyAF9anKNFdmMr9std0B7sJuiT9f5-MjzVY",currency:{iso:"PLN",sign:"zł",prepend:!1,separate:!0},numbers:{thousandsSeparator:" ",decimalSeparator:","},translations:{toast:{close:"Zamknij"},gallery:{close:"Zamknij",fullscreenEnter:"Pełny ekran",fullscreenExit:"Wyjdź z trybu pełnego ekranu",slideshowPause:"Wyłącz pokaz slajdów",slideshowStart:"Włącz pokaz slajdów",thumbs:"Miniatury",zoomIn:"Powiększ",zoomOut:"Pomniejsz",slideNext:"dalej",slidePrev:"wstecz"}},calculator:{yucAgeLimit:25,ageLimit:85,mileageLimit:15e4,residualValueAdjust:.15,residualValueAdjustLimit:1,tarRvDevVersion:1618561672},version:"1fma0146h",contentId:"101-9453",user:{loginState:"not logged in",id:""}},{vehicle:{id:9453,productionYear:2019,registration:"2019-09-04T00:00:00+00:00",registrationYear:"2019",mileage:88901,age:26,isYUC:!1,newPrice:239800,optionsPrice:0,accessoriesPrice:0,transactionalPrice:239800,leaseProduct:{type:"lease",label:"LO U",downPaymentLimits:{min:0,max:.45,step:1e3,default:0},termLimits:{min:24,max:60,step:1,default:48},totalAgeLimit:120,residualValueFactorLimits:[{term:24,min:.187,max:.35},{term:25,min:.17,max:.35},{term:26,min:.155,max:.35},{term:27,min:.14,max:.35},{term:28,min:.12,max:.35},{term:29,min:.105,max:.35},{term:30,min:.09,max:.3},{term:31,min:.07,max:.3},{term:32,min:.055,max:.3},{term:33,min:.04,max:.3},{term:34,min:.02,max:.3},{term:35,min:.01,max:.3},{term:36,min:.005,max:.25},{term:37,min:.005,max:.25},{term:42,min:.005,max:.2},{term:48,min:.005,max:.15},{term:54,min:.005,max:.1}],residualValueStep:.005,residualValueDefault:"max",interestRates:[{term:0,value:.105},{term:26,value:.1011},{term:38,value:.0966},{term:50,value:.0944}]},comfortLeaseProduct:{type:"comfort_lease",label:"CL U",calculationMode:"brv_based",downPaymentLimits:{min:0,max:.35,step:1e3,default:.15},termLimits:{min:24,max:60,step:1,default:36},totalAgeLimit:96,annualMileageLimits:{min:1e4,max:5e4,step:5e3,default:15e3},interestRates:[{term:0,value:.105},{term:26,value:.105},{term:38,value:.105},{term:50,value:.105}],tarRvMod:{id:77632,tmdate:"21/10/11",accessoryLimit:.3,rvValue:.441,brvValue:.441,rvValueUsed:.49,brvValueUsed:.441,carSegmentId:"2"},tarRvDev:{term:36,totalMileage:15e3,rvDev:.024,rvDevUsed:.024}},title:"X3 xDrive30d ZA",seriesCode:"G01",series:"Seria X",bodyType:"SAV ",transmission:"automatic",modelCode:"TX75",color:"BLACK SAPPHIRE METALLIC",newPriceNet:"194959",taxes:"44841",fuel:"D",stock:"used car",classification:"used car"},dealer:{id:10,name:"Inchcape Poznań"}});function m(e){var t=e.product,a=t.type,n=t.label,i=t.downPaymentLimits,u=t.termLimits,m=t.totalAgeLimit,c=t.residualValueFactorLimits,d=t.residualValueStep,p=t.residualValueDefault,f=t.interestRates,v=t.annualMileageLimits,g=o.taxes,b=o.vehicle.transactionalPrice;console.log({type:a,label:n,downPaymentLimits:i,termLimits:u,totalAgeLimit:m,residualValueFactorLimits:c,residualValueStep:d,residualValueDefault:p,interestRates:f});var y=(0,l.useState)(Object.assign({downPaymentGross:i.default*b,term:u.default},v?{annualMileage:v.default}:{},c?{residualValueGross:c.filter((function(e){return e.term<=u.default})).at(-1)[p]*b}:{})),P=(0,r.Z)(y,2),h=P[0],x=P[1];console.log(h);var w=(0,l.useMemo)((function(){return 100*h.downPaymentGross/b}),[h.downPaymentGross,b]),E=(0,l.useMemo)((function(){return c?c.filter((function(e){return e.term<=h.term})).at(-1):void 0}),[h.term,c]),V=(0,l.useMemo)((function(){return 100*h.residualValueGross/b}),[h.residualValueGross,b]),k=(0,l.useMemo)((function(){return f.filter((function(e){return e.term<=h.term})).at(-1).value}),[h.term,f]),L=(0,l.useMemo)((function(){var e=k/12,t=b-h.downPaymentGross;if(console.log({interestRate:k,interestRatePerMonth:e,financedAmount:t}),0===e)return(t+V)/h.term;var a=Math.pow(e+1,h.term);return console.log({n:a,residualValue:V}),(t*a-(V||0))*e/(a-1)}),[h.downPaymentGross,h.term,b,V,k]),z=(0,l.useMemo)((function(){return(g+1)*L}),[L,g]);return l.createElement("div",null,l.createElement("fieldset",null,l.createElement("div",null,l.createElement("label",null,l.createElement("span",null,"Opłata wstępna"),l.createElement("input",{type:"range",min:i.min*b,max:i.max*b,step:i.step,value:h.downPaymentGross,onChange:(0,l.useCallback)((function(e){var t=e.target;return x((function(e){return s(s({},e),{},{downPaymentGross:Number(t.value)})}))}),[])}),l.createElement("span",null,"".concat(h.downPaymentGross," zł")))),l.createElement("div",null,l.createElement("label",null,l.createElement("span",null,"Okres"),l.createElement("input",{type:"range",min:u.min,max:u.max,step:u.step,value:h.term,onChange:(0,l.useCallback)((function(e){var t=e.target;return x((function(e){return s(s({},e),{},{term:Number(t.value)})}))}),[])}),l.createElement("span",null,"".concat(h.term," Miesiące")))),v&&l.createElement("div",null,l.createElement("label",null,l.createElement("span",null,"Roczny przebieg"),l.createElement("input",{type:"range",min:v.min,max:v.max,step:v.step,value:h.annualMileage,onChange:(0,l.useCallback)((function(e){var t=e.target;return x((function(e){return s(s({},e),{},{annualMileage:Number(t.value)})}))}),[])}),l.createElement("span",null,"".concat(h.annualMileage," km")))),E&&l.createElement("div",null,l.createElement("label",null,l.createElement("span",null,"Wartość końcowa"),l.createElement("input",{type:"range",min:E.min*b,max:E.max*b,step:d*b,value:h.residualValueGross,onChange:(0,l.useCallback)((function(e){var t=e.target;return x((function(e){return s(s({},e),{},{residualValueGross:Number(t.value)})}))}),[])}),l.createElement("span",null,"".concat(h.residualValueGross," zł"))))),l.createElement("div",null,a),l.createElement("ul",null,l.createElement("li",null,"Opłata wstępna: ".concat(h.downPaymentGross," zł (").concat(Math.round(100*w)/100,"%)")),l.createElement("li",null,"Okres: ".concat(h.term," Miesiące")),void 0!==h.annualMileage&&l.createElement("li",null,"Roczny przebieg: ".concat(h.annualMileage,"km")),void 0!==h.residualValueGross&&l.createElement("li",null,"Wartość końcowa: ".concat(h.residualValueGross," zł (").concat(V,"%)")),l.createElement("li",null,"Miesięczna rata: ".concat(z," zł (netto ").concat(L," zł)"))))}function c(){return l.createElement("div",{className:i.Z.Section},l.createElement("h2",null,"Finances"),l.createElement(m,{product:o.vehicle.comfortLeaseProduct}),l.createElement(m,{product:o.vehicle.leaseProduct}))}console.log({METADATA:o})},4705:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(9601),r=a.n(n),l=a(2609),i=a.n(l)()(r());i.push([e.id,".nvV1WxhOKsmZ_3ZZgvPH{color:purple}.MDQN71dP8IFsWrBVYBh9{clear:both}.YgmSNZto9Gkde768jShN{float:left;width:150px;height:200px}.s67wbixa9me9T9nVduxK{color:#d3d3d3}.Wum5FOTU5jhX9zAIHmQA .hNYYcy_GkF0eJVd_Dqu1.vkflzqQ4pho4xXgYm9QR{color:#8a2be2}",""]),i.locals={Section:"nvV1WxhOKsmZ_3ZZgvPH",Row:"MDQN71dP8IFsWrBVYBh9",Gallery:"YgmSNZto9Gkde768jShN",Sale:"s67wbixa9me9T9nVduxK",Details:"Wum5FOTU5jhX9zAIHmQA",Feature:"hNYYcy_GkF0eJVd_Dqu1",changed:"vkflzqQ4pho4xXgYm9QR"};const u=i},1115:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(6062),r=a.n(n),l=a(4036),i=a.n(l),u=a(6793),s=a.n(u),o=a(7892),m=a.n(o),c=a(1173),d=a.n(c),p=a(2464),f=a.n(p),v=a(4705),g={};g.styleTagTransform=f(),g.setAttributes=m(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d();var b=r()(v.default,g);if(!v.default.locals||e.hot.invalidate){var y=!v.default.locals,P=y?v:v.default.locals;e.hot.accept(4705,(t=>{v=a(4705),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!a||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(a&&"default"===n||e[n]))return!1;return!0}(P,y?v:v.default.locals,y)?(P=y?v:v.default.locals,b(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){b()}));const h=v.default&&v.default.locals?v.default.locals:void 0},965:(e,t,a)=>{function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,{Z:()=>n})}}]);