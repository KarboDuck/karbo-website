(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{342:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("cc0ccc2a",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n(342)},344:function(t,e,n){var o=n(55)(!1);o.push([t.i,".max-w-256px[data-v-09a43827]{max-width:256px}.dropdown[data-v-09a43827]{position:relative}.dropdown>header>.button[data-v-09a43827]{padding-left:2.5em;padding-right:0}.dropdown>header>.button>span[data-v-09a43827]:first-child{padding-right:2.5em}.dropdown>header>.button .arrow[data-v-09a43827]{display:flex;align-items:center;justify-content:center;--bg-opacity:1;background-color:#1a63e9;background-color:rgba(26,99,233,var(--bg-opacity));width:3em;height:3em}.dropdown>header>.button .arrow[data-v-09a43827]  .icon{transition:transform .3s ease-in-out}.dropdown>main[data-v-09a43827]{display:none;position:absolute;border-radius:.25rem;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));top:calc(100% - 2rem);left:0;right:0;box-shadow:0 1px 6px rgba(0,0,0,.14)}.dropdown>main[data-v-09a43827] >a .icon{--text-opacity:1;color:#8e9eb8;color:rgba(142,158,184,var(--text-opacity))}.dropdown>main[data-v-09a43827] >a:last-child>.icon{transform:rotate(90deg)}.dropdown>main[data-v-09a43827] >a:hover,.dropdown>main[data-v-09a43827] >a:hover .icon{--text-opacity:1;color:#4585fb;color:rgba(69,133,251,var(--text-opacity))}.dropdown.open>header>.button[data-v-09a43827]{--bg-opacity:1;background-color:#1a63e9;background-color:rgba(26,99,233,var(--bg-opacity))}.dropdown.open>header>.button>.arrow[data-v-09a43827]  .icon{transform:rotate(180deg)}.dropdown.open>main[data-v-09a43827]{display:block}",""]),t.exports=o},345:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("26bc8086",content,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";n.r(e);n(71);var o=n(4),r=n(29),l=n(41),c=n(39),d=n(40),f=n(16),h=n(8),m=(n(33),n(19),n(14)),v=n(97),w=n.n(v),x=n(117);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var _=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},C=function(t){Object(c.a)(d,t);var e,n=y(d);function d(){var t;return Object(r.a)(this,d),(t=n.apply(this,arguments)).open=!1,t}return Object(l.a)(d,[{key:"fetch",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("wallets/fetchWalletDetails",{version:x.WalletVersion.Karbo,type:x.WalletType.Spring});case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"wallets",get:function(){var t=this.$accessor.wallets.karbo[x.WalletType.Spring].details;return[{icon:"windows",label:this.$i18n.t("wallets.windows"),href:t.windows.href},{icon:"linux",label:this.$i18n.t("wallets.linux"),href:t.ubuntu.href},{icon:"apple",label:this.$i18n.t("wallets.macos"),href:t.macos.href},{icon:"android",href:this.$accessor.wallets.mobile.android,label:this.$i18n.t("wallets.android")},{label:this.$i18n.t("wallets.web"),icon:"web",href:this.$accessor.wallets.web}]}}]),d}(m.Vue),O=C=_([Object(m.Component)({directives:{ClickOutside:w.a}})],C),j=(n(343),n(22)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown",class:{open:t.open},on:{mouseleave:function(e){t.open=!1}}},[n("header",[n("nuxt-link",{staticClass:"button rounded border-r bg-blue-mid text-white hover:no-underline font-semibold",attrs:{to:t.localeRoute({hash:"#download"})},nativeOn:{mouseover:function(e){t.open=!0}}},[n("span",[t._v(t._s(t.$t("hero.downloadButton.title")))]),t._v(" "),n("span",{staticClass:"arrow rounded-r"},[n("SvgIcon",{staticClass:"text-white w-3 h-3",attrs:{name:"arrow-down"}})],1)]),t._v(" "),n("p",{staticClass:"text-xs mt-2 max-w-256px"},[t._v("\n      "+t._s(t.$t("hero.downloadButton.disclaimer.preLine"))),n("span",{staticClass:"font-semibold"},[t._v(t._s(t.$t("hero.downloadButton.disclaimer.linkTitle")))])])],1),t._v(" "),t.open?n("main",{staticClass:"pt-2"},[t._l(t.wallets,(function(e,i){var label=e.label,o=e.icon,r=e.href;return n("a",{key:i,staticClass:"flex items-center py-2 px-4 hover:no-underline text-sm hover:text-blue-mid",attrs:{href:r}},[n("SvgIcon",{staticClass:"w-5 h-5 mr-2",attrs:{name:"wallets/"+o}}),t._v(" "),n("span",[t._v(t._s(label))])],1)})),t._v(" "),n("nuxt-link",{staticClass:"flex items-center border-t border-grey-light hover:no-underline text-sm py-4 px-4 mt-2",attrs:{to:t.localeRoute({hash:"#download"})}},[n("SvgIcon",{staticClass:"w-4 h-4 mr-2 -rotate-90",attrs:{name:"arrow-right"}}),t._v(" "),n("span",[t._v("\n        "+t._s(t.$t("hero.downloadButton.wallets.all"))+"\n      ")])],1)],2):t._e()])}),[],!1,null,"09a43827",null);e.default=component.exports},351:function(t,e,n){t.exports=n.p+"img/hero2.66332f2.svg"},352:function(t,e,n){"use strict";n(345)},353:function(t,e,n){var o=n(55)(!1);o.push([t.i,".hero[data-v-1fa5b5e6]{background:linear-gradient(180deg,#fff,#f6f8fc)}.hero>main>header>section>h2[data-v-1fa5b5e6]{font-size:2.875rem;line-height:3.625rem}.hero>main>header>section>h3[data-v-1fa5b5e6]{font-size:1.5rem;line-height:2.25rem}@media(max-width:768px){.hero>main[data-v-1fa5b5e6]{padding-left:6.25vw;padding-right:6.25vw}}@media (min-width:768px){.hero>main>header>section>h2[data-v-1fa5b5e6]{font-size:3.5rem;line-height:4rem}.hero>main>header>section>h3[data-v-1fa5b5e6]{font-size:1.75rem;line-height:2.625rem}.hero>main>header>aside[data-v-1fa5b5e6]{min-width:320px}}@media (min-width:1024px){.hero>main>header>section>h2[data-v-1fa5b5e6]{font-size:3.75rem;line-height:4.25rem}.hero>main>header>section>h3[data-v-1fa5b5e6]{font-size:1.875rem;line-height:2.75rem}.hero>main>header>aside[data-v-1fa5b5e6]{min-width:410px}}",""]),t.exports=o},366:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"flex items-center"},[e("img",{staticClass:"hidden md:block w-full",attrs:{width:"322",height:"287",src:n(351),alt:"Karbo"}})])}],r=(n(71),n(29)),l=n(41),c=n(39),d=n(40),f=n(16),h=n(8),m=(n(19),n(14)),v=n(350);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var x=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},y=function(t){Object(c.a)(n,t);var e=w(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"githubLink",get:function(){return"https://github.com/Karbovanets/karbo"}}]),n}(m.Vue),_=y=x([Object(m.Component)({components:{DownloadDropdown:v.default}})],y),C=(n(352),n(22)),component=Object(C.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero"},[n("main",{staticClass:"py-12 md:py-16 md:container md:pl-12 lg:pl-20 xl:pl-32 md:pr-8 lg:pr-16 xl:pr-40"},[n("header",{staticClass:"flex justify-between"},[n("section",[n("h2",{staticClass:"text-5xl font-extrabold"},[n("span",{staticClass:"text-blue-dark"},[t._v(t._s(t.$t("hero.title.line1")))]),n("br"),t._v("\n          "+t._s(t.$t("hero.title.line2"))+"\n        ")]),t._v(" "),n("h3",{staticClass:"text-2xl text-grey-mid font-light font-mono leading-9 mt-4"},[t._v("\n          "+t._s(t.$t("hero.subtitle.pre"))+"\n          "),n("span",{staticClass:"font-normal italic"},[t._v(t._s(t.$t("hero.subtitle.blockchain")))]),t._v("\n          "+t._s(t.$t("hero.subtitle.suff"))+"\n        ")])]),t._v(" "),t._m(0)]),t._v(" "),n("footer",{staticClass:"md:mt-6 lg:mt-0 xl:-mt-20 md:flex"},[n("DownloadDropdown"),t._v(" "),n("a",{staticClass:"flex items-center font-mono font-medium hover:no-underline sm:mt-6 md:mt-0 md:ml-8 h-12",attrs:{href:t.githubLink,rel:"noopener",target:"_blank"}},[n("SvgIcon",{staticClass:"h-8 w-8",attrs:{name:"github"}}),t._v(" "),n("span",{staticClass:"ml-3 mr-2"},[t._v(t._s(t.$t("hero.githubContribution")))]),t._v(" "),n("SvgIcon",{staticClass:"h-4 w-4",attrs:{name:"arrow-right"}})],1)],1)])])}),o,!1,null,"1fa5b5e6",null);e.default=component.exports}}]);
//# sourceMappingURL=4ab8467.js.map