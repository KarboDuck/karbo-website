(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(t,e,r){"use strict";r(172),r(106),r(57),r(20),r(44);var n=r(8),o=r(12),c=r(202),l=r.n(c),d=r(77);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=function(t){var e=t.store,r=l.a.theme.screens,c=Object.keys(r).reduce((function(t,e){return m(m({},t),{},Object(o.a)({},e,Number(r[e].replace("px",""))))}),{}),f=function(){for(var t=d.ViewSizes.SM,r=0,o=Object.entries(c);r<o.length;r++){var l=Object(n.a)(o[r],2),f=l[0],m=l[1];window.innerWidth>=m&&(t=f)}e.commit("tailwind/setViewSize",t)};"undefined"!=typeof window&&(f(),window.addEventListener("resize",f))}},170:function(t,e,r){t.exports=r.p+"img/logo.ef96da2.svg"},171:function(t,e,r){var content=r(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("76352ace",content,!0,{sourceMap:!1})},175:function(t,e,r){var content=r(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("3d3e5c60",content,!0,{sourceMap:!1})},176:function(t,e,r){var content=r(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("36427eb0",content,!0,{sourceMap:!1})},177:function(t,e,r){var content=r(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("ac18da96",content,!0,{sourceMap:!1})},178:function(t,e,r){var content=r(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("15f12e55",content,!0,{sourceMap:!1})},202:function(t,e){t.exports={theme:{screens:{sm:"320px",md:"768px",lg:"1024px",xl:"1440px"},container:{center:!0},colors:{"denim-dark":"#082840","grey-dark":"#425166","grey-mid":"#586881",grey:"#8E9EB8","grey-light":"#DFE4EA","grey-airy":"#EDEFF2","blue-airy":"#F6F8FC","blue-light":"#E5EEFE",blue:"#6D9FFC","blue-icon":"#90B5FB","blue-mid":"#4585FB","blue-dark":"#1A63E9","navy-dark":"#0F3A8A",orange:"#EDA93A","orange-light":"#FEDDA7",white:"#FFFFFF"},fontFamily:{sans:["Inter","sans-serif"],mono:["Roboto Mono","monospace"]}}}},205:function(t,e,r){"use strict";r(61);var n=r(19),o=r(27),c=r(28),l=r(14),d=r(5),f=r(13),m=r(206),h=r(207);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var v=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(o.a)(r,t);var e=x(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(f.Vue),w=y=v([Object(f.Component)({components:{Footer:m.default,Header:h.default}})],y),k=r(16),component=Object(k.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-layout"},[r("Header",{staticClass:"fixed top-0 left-0 right-0"}),t._v(" "),r("Nuxt"),t._v(" "),r("Footer")],1)}),[],!1,null,"88f09a74",null);e.a=component.exports},206:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("img",{staticClass:"lg:mr-24 lg:-mt-1",attrs:{src:r(170),width:"128",height:"142",alt:"Karbo"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"flex flex-col"},[r("span",{staticClass:"font-extrabold"},[t._v("Resources")]),t._v(" "),r("a",{staticClass:"mt-2",attrs:{href:"#info"}},[t._v("Info")]),t._v(" "),r("a",{staticClass:"mt-2",attrs:{href:"#usage"}},[t._v("Usage")]),t._v(" "),r("a",{staticClass:"mt-2",attrs:{href:"#download"}},[t._v("Download")]),t._v(" "),r("a",{staticClass:"mt-2",attrs:{href:"#explorer"}},[t._v("Explorer")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"flex flex-col"},[r("span",{staticClass:"font-extrabold"},[t._v("Legal")]),t._v(" "),r("a",{staticClass:"mt-2",attrs:{href:"#terms"}},[t._v("Terms and conditions")]),t._v(" "),r("a",{staticClass:"mt-2",attrs:{href:"#privacy"}},[t._v("Privacy Policy")])])}],o=(r(61),r(19)),c=r(33),l=r(27),d=r(28),f=r(14),m=r(5),h=r(13);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var v=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(l.a)(r,t);var e=x(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"socials",get:function(){return[{icon:"social/redit",href:""},{icon:"github",href:""},{icon:"social/twitter",href:""},{icon:"social/telegram",href:""},{icon:"social/discord",href:""},{icon:"social/facebook",href:""}]}},{key:"currentYear",get:function(){return(new Date).getFullYear()}}]),r}(h.Vue),w=y=v([h.Component],y),k=(r(252),r(16)),component=Object(k.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"flex justify-between lg:mt-32 lg:px-24 py-8"},[r("div",{staticClass:"flex flex-col justify-between"},[t._m(0),t._v(" "),r("p",{staticClass:"text-sm"},[t._v("\n      © "+t._s(t.currentYear)+" Karbo\n    ")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"flex"},t._l(t.socials,(function(e,i){var n=e.icon,o=e.href;return r("a",{key:i,staticClass:"opacity-50 hover:opacity-100",class:{"mr-5":t.socials.length-1!==i},attrs:{href:o}},[r("SvgIcon",{staticClass:"w-4 h-4",attrs:{name:n}})],1)})),0)])}),n,!1,null,"03eaf057",null);e.default=component.exports},207:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"sm:flex-grow ml-5 z-20 md:ml-0",attrs:{href:"/"}},[n("span",{staticClass:"sr-only"},[t._v("Karbo")]),t._v(" "),n("img",{staticClass:"hidden md:block lg:mr-24 lg:-mt-1",attrs:{src:r(170),width:"128",height:"142",alt:"Karbo"}}),t._v(" "),n("img",{staticClass:"py-2 sm:block md:hidden",attrs:{src:r(254),width:"35",height:"35",alt:"Karbo"}})])}],o=(r(61),r(19)),c=r(33),l=r(27),d=r(28),f=r(14),m=r(5),h=r(13),x=r(208),v=r(209),y=r(65);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var k=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(l.a)(r,t);var e=w(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).mobileMenu=!1,t.scrolled=!1,t}return Object(c.a)(r,[{key:"menu",get:function(){return[{label:this.$t("About"),hash:"#about"},{label:this.$t("Download"),hash:"#download"},{label:this.$t("Usage"),hash:"#usage"},{label:this.$t("Community"),hash:"#social"}]}},{key:"mounted",value:function(){var t=this,e=function(){t.scrolled=window.scrollY>0};document.addEventListener("scroll",e),this.$once("beforeUnmount",(function(){document.removeEventListener("scroll",e)}))}},{key:"hasShadow",get:function(){return this.scrolled||"sm"===this.$accessor.tailwind.viewSize}}]),r}(h.Vue),j=O=k([Object(h.Component)({components:{PriceList:x.default,LanguageList:v.default,MobileModal:y.default}})],O),_=(r(263),r(16)),component=Object(_.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"w-full bg-white",class:{"has-shadow":t.hasShadow}},[r("div",{staticClass:"flex items-center w-full md:justify-between md:container md:py-6 xl:px-24 lg:px-12 md:px-6 bg-white"},[t._m(0),t._v(" "),r("nav",{staticClass:"hidden md:flex flex-grow md:items-center"},t._l(t.menu,(function(e,i){var n=e.hash,label=e.label;return r("nuxt-link",{key:i,staticClass:"font-sm md:px-3 lg:px-4 xl:px-5",attrs:{to:t.localeRoute({hash:n})},nativeOn:{click:function(e){t.mobileMenu=!1}}},[t._v("\n        "+t._s(label)+"\n      ")])})),1),t._v(" "),r("LanguageList",{staticClass:"hidden md:block"}),t._v(" "),r("PriceList",{staticClass:"mr-4 md:ml-4 md:mr-0"}),t._v(" "),r("SvgIcon",{staticClass:"w-6 h-6 mr-3 text-blue-mid cursor-pointer md:hidden",attrs:{name:"menu"},on:{click:function(e){t.mobileMenu=!0}}}),t._v(" "),r("no-ssr",[r("MobileModal",{attrs:{open:t.mobileMenu&&"sm"===t.$accessor.tailwind.viewSize},on:{close:function(e){t.mobileMenu=!1}}},[r("nav",{staticClass:"flex flex-col my-4"},t._l(t.menu,(function(e,i){var n=e.hash,label=e.label;return r("nuxt-link",{key:i,staticClass:"font-sm py-2 text-lg",attrs:{to:t.localeRoute({hash:n})},nativeOn:{click:function(e){t.mobileMenu=!1}}},[t._v("\n            "+t._s(label)+"\n          ")])})),1),t._v(" "),r("LanguageList",{on:{selected:function(e){t.mobileMenu=!1}}})],1)],1)],1)])}),n,!1,null,"c66c9230",null);e.default=component.exports;installComponents(component,{MobileModal:r(65).default})},208:function(t,e,r){"use strict";r.r(e);r(37),r(68),r(172),r(255),r(61),r(57),r(29);var n=r(3),o=r(19),c=r(33),l=r(27),d=r(28),f=r(14),m=r(5),h=r(13),x=r(102),v=r.n(x),y=r(65);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var k=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O="selectedCurrency",j={USD:{sign:"$"},BTC:{sign:"฿",fraction:8},CNY:{sign:"元"},EUR:{sign:"€"},PLN:{sign:"zł"},JPY:{sign:"¥"},KRW:{sign:"₩"},RUB:{sign:"₽"}},_=function(t){Object(l.a)(d,t);var e,r=w(d);function d(){var t;return Object(o.a)(this,d),(t=r.apply(this,arguments)).open=!1,t.loaded=!1,t.selected="USD",t.quotes={},t}return Object(c.a)(d,[{key:"dropdownList",get:function(){return Object.keys(j)}},{key:"fetch",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("https://api.coinpaprika.com/v1/tickers/krb-karbo",{params:{quotes:Object.keys(j).join(",")}}).then((function(t){var e=t.data.quotes;return r.loaded=!0,e}));case 2:this.quotes=t.sent,"undefined"!=typeof window&&(e=window.localStorage.getItem(O))&&j[e]&&(this.selected=e);case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"closeDropdown",value:function(){this.open=!1}},{key:"trend",value:function(t){var e;return(null===(e=this.quotes[t])||void 0===e?void 0:e.percent_change_24h)>0}},{key:"formattedPrice",value:function(t){var e,r=j[t],n=r.sign,o=r.fraction,c=null===(e=this.quotes[t])||void 0===e?void 0:e.price;return"".concat(n).concat(Number(c).toFixed(o||2))}},{key:"select",value:function(t){window.localStorage.setItem(O,t),this.selected=t,this.open=!1}}]),d}(h.Vue),C=_=k([Object(h.Component)({components:{MobileModal:y.default},directives:{ClickOutside:v.a}})],_),z=(r(259),r(16)),component=Object(z.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loaded?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"price-list flex items-center relative font-mono",class:{open:t.open}},[r("header",{staticClass:"trigger flex items-center cursor-pointer",on:{click:function(e){t.open=!t.open}}},[r("SvgIcon",{staticClass:"w-5 h-5 mr-2",attrs:{name:t.trend(t.selected)?"trend-up":"trend-down"}}),t._v(" "),r("span",{staticClass:"font-semibold"},[t._v(t._s(t.formattedPrice(t.selected)))]),t._v(" "),r("SvgIcon",{staticClass:"arrow-down w-3 h-3 ml-2",attrs:{name:"arrow-down"}})],1),t._v(" "),"sm"===t.$accessor.tailwind.viewSize?r("MobileModal",{attrs:{open:t.open},on:{close:function(e){t.open=!1}}},[r("ul",{staticClass:"font-semibold text-lg my-4"},t._l(t.dropdownList,(function(e,i){return r("li",{key:i,staticClass:"cursor-pointer py-2",on:{click:function(r){return t.select(e)}}},[r("span",{staticClass:"font-medium"},[t._v("\n          "+t._s(t.formattedPrice(e))+"\n        ")])])})),0)]):r("main",{staticClass:"absolute rounded border-2 border-grey-light"},[r("ul",t._l(t.dropdownList,(function(e,i){return r("li",{key:i,staticClass:"cursor-pointer px-4 py-1 text-xs font-medium hover:text-blue-dark",on:{click:function(r){return t.select(e)}}},[r("span",[t._v("\n          "+t._s(t.formattedPrice(e))+"\n        ")])])})),0)])],1):t._e()}),[],!1,null,"507cc35a",null);e.default=component.exports;installComponents(component,{MobileModal:r(65).default})},209:function(t,e,r){"use strict";r.r(e);r(61);var n=r(19),o=r(33),c=r(27),l=r(28),d=r(14),f=r(5),m=r(13),h=r(102),x=r.n(h);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},w=function(t){Object(c.a)(r,t);var e=v(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).open=!1,t}return Object(o.a)(r,[{key:"selectLang",value:function(code){this.open=!1,this.$i18n.setLocale(code),this.$emit("selected",code)}},{key:"closeDropdown",value:function(){this.open=!1}}]),r}(m.Vue),k=w=y([Object(m.Component)({directives:{ClickOutside:x.a}})],w),O=(r(261),r(16)),component=Object(O.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"language-list flex items-center relative",class:{open:t.open}},[r("header",{staticClass:"flex justify-between items-center cursor-pointer border-2 rounded border-grey-light w-full py-2 px-4 bg-white",on:{click:function(e){t.open=!t.open}}},[r("span",{staticClass:"capitalize font-semibold"},[t._v("\n      "+t._s("sm"===t.$accessor.tailwind.viewSize?t.$i18n.localeProperties.name:t.$i18n.locale)+"\n    ")]),t._v(" "),r("SvgIcon",{staticClass:"arrow-down w-3 h-3 ml-1",attrs:{name:"arrow-down"}})],1),t._v(" "),r("main",{staticClass:"absolute md:border-2 md:border-grey-light md:rounded"},[r("ul",t._l(t.$i18n.locales,(function(e){var code=e.code,n=e.name;return r("li",{key:code,staticClass:"flex items-center cursor-pointer px-4 py-2 font-medium",class:{selected:code===t.$i18n.locale},on:{click:function(e){return t.selectLang(code)}}},[r("span",{staticClass:"hover:text-blue-dark"},[t._v(t._s(n))])])})),0)])])}),[],!1,null,"58fb6af0",null);e.default=component.exports},212:function(t,e,r){r(213),t.exports=r(214)},247:function(t,e,r){var content=r(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("a07579c2",content,!0,{sourceMap:!1})},248:function(t,e,r){var n=r(41)(!1);n.push([t.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:Inter,sans-serif;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Roboto Mono,monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.button{display:inline-flex;font-weight:700;height:3em;padding:calc(.75em - 2px) 1em;line-height:1em;border:2px solid transparent;white-space:nowrap;text-align:center;cursor:pointer;justify-content:center;align-items:center}.button:focus{outline:2px dotted #fff;outline-offset:2px}body,html{--text-opacity:1;color:#082840;color:rgba(8,40,64,var(--text-opacity))}a:hover{text-decoration:underline}.container{width:100%;margin-right:auto;margin-left:auto}@media (min-width:320px){.container{max-width:320px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1440px){.container{max-width:1440px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.bg-denim-dark{--bg-opacity:1;background-color:#082840;background-color:rgba(8,40,64,var(--bg-opacity))}.bg-blue-light{--bg-opacity:1;background-color:#e5eefe;background-color:rgba(229,238,254,var(--bg-opacity))}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.border-grey-light{--border-opacity:1;border-color:#dfe4ea;border-color:rgba(223,228,234,var(--border-opacity))}.border-blue-light{--border-opacity:1;border-color:#e5eefe;border-color:rgba(229,238,254,var(--border-opacity))}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.border-2{border-width:2px}.border{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-1{flex:1 1 0%}.flex-grow{flex-grow:1}.font-mono{font-family:Roboto Mono,monospace}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-12{height:3rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-5xl{font-size:3rem}.my-4{margin-top:1rem;margin-bottom:1rem}.mr-1{margin-right:.25rem}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mr-3{margin-right:.75rem}.mr-4{margin-right:1rem}.mr-5{margin-right:1.25rem}.mb-5{margin-bottom:1.25rem}.ml-5{margin-left:1.25rem}.mt-6{margin-top:1.5rem}.mr-6{margin-right:1.5rem}.mt-10{margin-top:2.5rem}.mt-12{margin-top:3rem}.mt-16{margin-top:4rem}.ml-32{margin-left:8rem}.mr-64{margin-right:16rem}.ml-auto{margin-left:auto}.max-w-xl{max-width:36rem}.max-w-3xl{max-width:48rem}.opacity-50{opacity:.5}.hover\\:opacity-100:hover{opacity:1}.overflow-hidden{overflow:hidden}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-16{padding-left:4rem;padding-right:4rem}.pt-6{padding-top:1.5rem}.pt-8{padding-top:2rem}.pb-8{padding-bottom:2rem}.pt-12{padding-top:3rem}.pr-12{padding-right:3rem}.pt-16{padding-top:4rem}.pr-16{padding-right:4rem}.pt-24{padding-top:6rem}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.top-0{top:0}.right-0{right:0}.left-0{left:0}.resize{resize:both}.text-center{text-align:center}.text-grey{--text-opacity:1;color:#8e9eb8;color:rgba(142,158,184,var(--text-opacity))}.text-blue-light{--text-opacity:1;color:#e5eefe;color:rgba(229,238,254,var(--text-opacity))}.text-blue-mid{--text-opacity:1;color:#4585fb;color:rgba(69,133,251,var(--text-opacity))}.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.hover\\:text-blue-dark:hover{--text-opacity:1;color:#1a63e9;color:rgba(26,99,233,var(--text-opacity))}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.tracking-widest{letter-spacing:.1em}.align-middle{vertical-align:middle}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-12{width:3rem}.w-full{width:100%}.z-10{z-index:10}.z-20{z-index:20}.gap-6{grid-gap:1.5rem;gap:1.5rem}.transform{--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}.rotate-180{--transform-rotate:180deg}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:320px){.sm\\:container{width:100%;margin-right:auto;margin-left:auto}}@media (min-width:320px) and (min-width:320px){.sm\\:container{max-width:320px}}@media (min-width:320px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:320px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:320px) and (min-width:1440px){.sm\\:container{max-width:1440px}}@media (min-width:320px){.sm\\:block{display:block}.sm\\:flex-grow{flex-grow:1}}@media (min-width:768px){.md\\:container{width:100%;margin-right:auto;margin-left:auto}}@media (min-width:768px) and (min-width:320px){.md\\:container{max-width:320px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1440px){.md\\:container{max-width:1440px}}@media (min-width:768px){.md\\:border-grey-light{--border-opacity:1;border-color:#dfe4ea;border-color:rgba(223,228,234,var(--border-opacity))}.md\\:rounded{border-radius:.25rem}.md\\:border-2{border-width:2px}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}.md\\:mr-0{margin-right:0}.md\\:ml-0{margin-left:0}.md\\:ml-4{margin-left:1rem}.md\\:px-3{padding-left:.75rem;padding-right:.75rem}.md\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1024px){.lg\\:container{width:100%;margin-right:auto;margin-left:auto}}@media (min-width:1024px) and (min-width:320px){.lg\\:container{max-width:320px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1440px){.lg\\:container{max-width:1440px}}@media (min-width:1024px){.lg\\:font-extrabold{font-weight:800}.lg\\:text-3xl{font-size:1.875rem}.lg\\:text-6xl{font-size:4rem}.lg\\:leading-none{line-height:1}.lg\\:mr-24{margin-right:6rem}.lg\\:mt-32{margin-top:8rem}.lg\\:-mt-1{margin-top:-.25rem}.lg\\:px-4{padding-left:1rem;padding-right:1rem}.lg\\:px-12{padding-left:3rem;padding-right:3rem}.lg\\:px-24{padding-left:6rem;padding-right:6rem}.lg\\:px-32{padding-left:8rem;padding-right:8rem}.lg\\:pb-16{padding-bottom:4rem}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1440px){.xl\\:container{width:100%;margin-right:auto;margin-left:auto}}@media (min-width:1440px) and (min-width:320px){.xl\\:container{max-width:320px}}@media (min-width:1440px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1440px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1440px) and (min-width:1440px){.xl\\:container{max-width:1440px}}@media (min-width:1440px){.xl\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.xl\\:px-24{padding-left:6rem;padding-right:6rem}}",""]),t.exports=n},252:function(t,e,r){"use strict";r(171)},253:function(t,e,r){var n=r(41)(!1);n.push([t.i,"footer[data-v-03eaf057]{background-color:#f8fafb}",""]),t.exports=n},254:function(t,e,r){t.exports=r.p+"img/logo_small.0649c44.svg"},257:function(t,e,r){"use strict";r(175)},258:function(t,e,r){var n=r(41)(!1);n.push([t.i,"",""]),t.exports=n},259:function(t,e,r){"use strict";r(176)},260:function(t,e,r){var n=r(41)(!1);n.push([t.i,".price-list .trigger .arrow-down[data-v-507cc35a]{transition:transform .3s ease-in-out}.price-list>main[data-v-507cc35a]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));display:none;top:calc(100% + 1rem);left:0}.price-list.open .trigger .arrow-down[data-v-507cc35a]{transform:rotate(180deg)}.price-list.open>main[data-v-507cc35a]{display:block}",""]),t.exports=n},261:function(t,e,r){"use strict";r(177)},262:function(t,e,r){var n=r(41)(!1);n.push([t.i,".language-list>header .arrow-down[data-v-58fb6af0]{transition:transform .3s ease-in-out}.language-list>main[data-v-58fb6af0]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));top:calc(100% + 1rem);display:none;left:0}.language-list>main>ul>li.selected[data-v-58fb6af0]{--bg-opacity:1;background-color:#e5eefe;background-color:rgba(229,238,254,var(--bg-opacity))}@media(max-width:768px){.language-list>main[data-v-58fb6af0]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10;background:hsla(0,0%,100%,.7)}.language-list>main>ul[data-v-58fb6af0]{position:absolute;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));opacity:1;top:4rem;left:1.2rem;right:1.2rem;box-shadow:0 0 15px 2px rgba(0,0,0,.1)}}.language-list.open>header[data-v-58fb6af0]{--bg-opacity:1;background-color:#082840;background-color:rgba(8,40,64,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));--border-opacity:1;border-color:#082840;border-color:rgba(8,40,64,var(--border-opacity))}.language-list.open>header .arrow-down[data-v-58fb6af0]{--transform-rotate:180deg;--text-opacity:1;color:#4585fb;color:rgba(69,133,251,var(--text-opacity))}.language-list.open>main[data-v-58fb6af0]{display:block}",""]),t.exports=n},263:function(t,e,r){"use strict";r(178)},264:function(t,e,r){var n=r(41)(!1);n.push([t.i,"header[data-v-c66c9230]{display:flex}header.has-shadow[data-v-c66c9230]{box-shadow:0 0 3px rgba(0,0,0,.15027)}",""]),t.exports=n},265:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return c})),r.d(e,"accessorType",(function(){return l}));var n=r(103),o=r(77),c=function(){return{}},l=Object(n.b)({state:c,modules:{tailwind:o}})},288:function(t,e,r){var map={"./about.svg":289,"./icons.svg":290,"./language.svg":291,"./social.svg":292,"./usage.svg":293,"./wallets.svg":294};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=288},289:function(t,e,r){"use strict";r.r(e),e.default=r.p+"02a0116a444b960f36956d4e9142e1af.svg"},290:function(t,e,r){"use strict";r.r(e),e.default=r.p+"863fa845eecd21e822ecfd9e23131d72.svg"},291:function(t,e,r){"use strict";r.r(e),e.default=r.p+"92f5d8f46593a35b0d069706868924d7.svg"},292:function(t,e,r){"use strict";r.r(e),e.default=r.p+"72e9494e3300a6a908a1a9854d902fbb.svg"},293:function(t,e,r){"use strict";r.r(e),e.default=r.p+"8199b6fddfebcfb173e7421eae8619eb.svg"},294:function(t,e,r){"use strict";r.r(e),e.default=r.p+"f419862a07aeab4fffc9776ab530e6a6.svg"},65:function(t,e,r){"use strict";r.r(e);r(61);var n=r(19),o=r(33),c=r(27),l=r(28),d=r(14),f=r(5),m=r(13);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var x=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},v=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"disableBodyScroll",value:function(t){document.body.style.overflow=t?"hidden":"auto"}}]),r}(m.Vue);x([Object(m.Prop)({required:!0})],v.prototype,"open",void 0),x([Object(m.Watch)("open")],v.prototype,"disableBodyScroll",null);var y=v=x([m.Component],v),w=(r(257),r(16)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-col modal fixed z-10 inset-0 bg-white",class:{flex:t.open,hidden:!t.open}},[r("div",{staticClass:"flex flex-row-reverse"},[r("SvgIcon",{staticClass:"w-12 h-12 p-2 text-grey cursor-pointer",attrs:{name:"close"},on:{click:function(e){return t.$emit("close")}}})],1),t._v(" "),r("div",{staticClass:"px-6"},[t._t("default")],2)])}),[],!1,null,"f7f3af6a",null);e.default=component.exports},77:function(t,e,r){"use strict";var n;r.r(e),r.d(e,"ViewSizes",(function(){return n})),r.d(e,"state",(function(){return o})),r.d(e,"getters",(function(){return c})),r.d(e,"mutations",(function(){return l})),function(t){t.SM="sm",t.MD="md",t.LG="lg",t.XL="xl"}(n||(n={}));var o=function(){return{viewSize:n.MD}},c={viewSize:function(t){return t.viewSize}},l={setViewSize:function(t,e){t.viewSize=e}}}},[[212,13,2,14]]]);