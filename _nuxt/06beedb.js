(window.webpackJsonp=window.webpackJsonp||[]).push([[16,4,9,10,11],{1331:function(t,n,e){"use strict";e.r(n);var o=e(5),c=(e(46),e(127),e(32),e(13),e(31),e(275)),r=e(644),m=e(272),d={components:{Navbar:c.default,ModEntries:r.default,Footer:m.default},data:function(){return{currPage:0,searchQuery:"",mods:[],totalMods:0}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$content("mods",{deep:!0}).limit(6).fetch();case 2:return t.mods=n.sent,n.t0=parseInt,n.next=6,t.$content("mods",{deep:!0}).only([]).fetch();case 6:n.t1=n.sent.length,t.totalMods=(0,n.t0)(n.t1);case 8:case"end":return n.stop()}}),n)})))()},head:function(){return{title:"DokiMods - Mod Page",meta:[{hid:"description",name:"description",content:"The best catalogue of mods for Doki Doki Literature Club!"},{hid:"og:title",name:"og:title",content:"DokiMods"},{hid:"og:image",property:"og:image",content:e(461)},{hid:"og:description",property:"og:description",content:"The best catalogue of mods for Doki Doki Literature Club!"},{hid:"og:url",property:"og:url",content:"https://dokimods.me/"},{hid:"twitter:card",name:"twitter:card",content:"summary"}]}},computed:{numVisible:function(){return Math.min(this.totalPages(),3)}},watch:{searchQuery:function(t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=11;break}return e.next=3,n.$content("mods",{deep:!0}).sortBy("slug").skip(6*n.currPage).limit(6).fetch();case 3:return n.mods=e.sent,e.t0=parseInt,e.next=7,n.$content("mods",{deep:!0}).only([]).fetch();case 7:e.t1=e.sent.length,n.totalMods=(0,e.t0)(e.t1),e.next=19;break;case 11:return e.next=13,n.$content("mods",{deep:!0}).sortBy("slug").search("title",t).skip(6*n.currPage).limit(6).fetch();case 13:return n.mods=e.sent,e.t2=parseInt,e.next=17,n.$content("mods",{deep:!0}).search("title",t).only([]).fetch();case 17:e.t3=e.sent.length,n.totalMods=(0,e.t2)(e.t3);case 19:n.currPage=0;case 20:case"end":return e.stop()}}),e)})))()}},methods:{changePage:function(t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currPage=t,n.searchQuery){e.next=7;break}return e.next=4,n.$content("mods",{deep:!0}).sortBy("slug").skip(6*n.currPage).limit(6).fetch();case 4:n.mods=e.sent,e.next=10;break;case 7:return e.next=9,n.$content("mods",{deep:!0}).sortBy("slug").search("title",n.searchQuery).skip(6*n.currPage).limit(6).fetch();case 9:n.mods=e.sent;case 10:n.scrollUp();case 11:case"end":return e.stop()}}),e)})))()},scrollUp:function(){window.scrollTo({top:0,behavior:"smooth"})},paginator:function(){var t=this.totalPages(),n=this.currPage,e=this.numVisible,o=Math.floor(e/2);return n<o?this.range(1,e,1):t-n<=o?this.range(t-2*o,t,1):this.range(n-o+1,n+o+1,1)},range:function(t,n,e){return Array.from({length:(n-t)/e+1},(function(n,i){return t+i*e}))},totalPages:function(){return Math.floor(this.totalMods/6)}}},l=(e(650),e(45)),component=Object(l.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("div",{ref:"start"}),t._v(" "),e("Navbar"),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"search-tools"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"searchbar",attrs:{type:"search",autocomplete:"off",placeholder:"Search Mods"},domProps:{value:t.searchQuery},on:{input:function(n){n.target.composing||(t.searchQuery=n.target.value)}}})]),t._v(" "),e("br"),t._v(" "),t.totalMods>6?e("ul",{staticClass:"pagination-container"},[e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){return t.changePage(0)}}},[t._v("\n          <<\n        ")])]),t._v(" "),e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){t.changePage(Math.max(t.currPage-1,0))}}},[t._v("\n          <\n        ")])]),t._v(" "),t.currPage-t.numVisible+1>=0?e("li",{staticClass:"pagination"},[e("p",[t._v("...")])]):t._e(),t._v(" "),t._l(t.paginator(),(function(n,o){return e("li",{key:o,staticClass:"pagination"},[e("a",{staticClass:"pagination-link",class:{active:t.currPage==n-1},on:{click:function(e){return t.changePage(n-1)}}},[t._v("\n          "+t._s(n)+"\n        ")])])})),t._v(" "),t.currPage+t.numVisible-1<t.totalPages()?e("li",{staticClass:"pagination"},[e("p",[t._v("...")])]):t._e(),t._v(" "),e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){t.changePage(Math.min(t.currPage+1,t.totalPages()-1))}}},[t._v("\n          >\n        ")])]),t._v(" "),e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){t.changePage(Math.floor(t.totalMods/6)-1)}}},[t._v("\n          >>\n        ")])])],2):t._e(),t._v(" "),e("br"),t._v(" "),t.mods.length?e("div",{staticClass:"mod-container"},t._l(t.mods,(function(n,o){return e("div",{key:o},[t.$fetchState.pending?e("div",[e("content-placeholders-img"),t._v(" "),e("content-placeholders-heading")],1):e("ModEntries",{attrs:{mod:n}})],1)})),0):e("div",[e("h1",[t._v("No mods found.")])]),t._v(" "),e("br")]),t._v(" "),e("Footer")],1)}),[],!1,null,"621ec79b",null);n.default=component.exports;installComponents(component,{Navbar:e(275).default,Footer:e(272).default})},272:function(t,n,e){"use strict";e.r(n);e(276);var o=e(45),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("div",{staticClass:"content"},[e("p",[t._v("\n      © "+t._s((new Date).getFullYear())+" DokiMods\n      "),e("br"),t._v(" "),e("br"),t._v("\n      Not affiliated with Team Salvato.\n    ")])])])}),[],!1,null,"32cf5647",null);n.default=component.exports;installComponents(component,{Footer:e(272).default})},273:function(t,n,e){var content=e(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("80e3bb92",content,!0,{sourceMap:!1})},274:function(t,n,e){var content=e(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("31f95efe",content,!0,{sourceMap:!1})},275:function(t,n,e){"use strict";e.r(n);e(279);var o=e(45),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("nav",[o("ul",{staticClass:"menu"},[o("li",{staticClass:"icon"},[o("NuxtLink",{attrs:{to:"/"}},[o("img",{attrs:{src:e(278)}})])],1),t._v(" "),o("li",{staticClass:"spacing"}),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/mods"}},[t._v("\n        Mods\n      ")])],1),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/installation-guide"}},[t._v("\n        Mod Installation Guide\n      ")])],1),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/about-us"}},[t._v("\n        About Us\n      ")])],1)])])}),[],!1,null,"68fe01d2",null);n.default=component.exports},276:function(t,n,e){"use strict";e(273)},277:function(t,n,e){var o=e(42)(!1);o.push([t.i,'[data-v-32cf5647]:root{font-size:16px;font-family:"Work Sans",sans-serif}footer[data-v-32cf5647]{margin-top:auto;background-color:#ffcfc4}.content[data-v-32cf5647]{display:block;padding:.75em}.content p[data-v-32cf5647]{color:#000;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto}p[data-v-32cf5647]{text-align:center}',""]),t.exports=o},278:function(t,n,e){t.exports=e.p+"img/8f0ad80.webp"},279:function(t,n,e){"use strict";e(274)},280:function(t,n,e){var o=e(42)(!1);o.push([t.i,"nav[data-v-68fe01d2]{z-index:99;width:100%;position:fixed}nav ul[data-v-68fe01d2]{display:flex;align-items:center;height:4em;list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:var(--primary-color)}.buttons-right[data-v-68fe01d2]{padding-right:.5em}.icon[data-v-68fe01d2]{flex:1;height:100%;padding:.5em}nav ul li .nav-btn[data-v-68fe01d2]{display:block;color:#fff;text-align:center;padding:.5em 1.5em;border-radius:25px;text-decoration:none;transition:background-color .25s}nav ul li .nav-btn[data-v-68fe01d2]:hover{background-color:var(--secondary-color)}.menu img[data-v-68fe01d2]{width:auto;height:100%}.spacing[data-v-68fe01d2]{flex:1}",""]),t.exports=o},282:function(t,n,e){t.exports=e.p+"img/5c690b1.webp"},283:function(t,n,e){"use strict";e.r(n);var o={props:{mod:{type:Object,default:function(){return{dir:""}}}},methods:{imgSrc:function(){try{var t=this.mod;return e(449)("./content".concat(t.dir,"/thumbnail.jpg"))}catch(t){return e(450)}}}},c=e(45),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("img",{staticClass:"logo",attrs:{src:t.imgSrc(),alt:""}})}),[],!1,null,"1adf35ae",null);n.default=component.exports},285:function(t,n,e){t.exports=e.p+"img/dc67090.webp"},286:function(t,n,e){t.exports=e.p+"img/eee0d2d.webp"},287:function(t,n,e){t.exports=e.p+"img/2624903.webp"},288:function(t,n,e){t.exports=e.p+"img/1b4fbb4.webp"},289:function(t,n,e){t.exports=e.p+"img/c26f98d.webp"},290:function(t,n,e){t.exports=e.p+"img/8975dea.webp"},291:function(t,n,e){t.exports=e.p+"img/aab6bac.webp"},292:function(t,n,e){t.exports=e.p+"img/b465f0a.webp"},293:function(t,n,e){t.exports=e.p+"img/4acb338.webp"},294:function(t,n,e){t.exports=e.p+"img/ab72e41.webp"},295:function(t,n,e){t.exports=e.p+"img/0abd04d.webp"},296:function(t,n,e){t.exports=e.p+"img/dcaf444.webp"},297:function(t,n,e){t.exports=e.p+"img/dbec483.webp"},298:function(t,n,e){t.exports=e.p+"img/d59de7c.webp"},299:function(t,n,e){t.exports=e.p+"img/5478c9d.webp"},300:function(t,n,e){t.exports=e.p+"img/1d3865c.webp"},301:function(t,n,e){t.exports=e.p+"img/49dbdaa.webp"},302:function(t,n,e){t.exports=e.p+"img/23eb16a.webp"},303:function(t,n,e){t.exports=e.p+"img/1007ff4.webp"},304:function(t,n,e){t.exports=e.p+"img/8f4e1ce.webp"},305:function(t,n,e){t.exports=e.p+"img/83eade7.webp"},306:function(t,n,e){t.exports=e.p+"img/f2b1d02.webp"},307:function(t,n,e){t.exports=e.p+"img/0308f06.webp"},308:function(t,n,e){t.exports=e.p+"img/ef98e4a.webp"},309:function(t,n,e){t.exports=e.p+"img/bce2f0d.webp"},310:function(t,n,e){t.exports=e.p+"img/b0edbeb.webp"},311:function(t,n,e){t.exports=e.p+"img/470e6a3.webp"},312:function(t,n,e){t.exports=e.p+"img/5135503.webp"},313:function(t,n,e){t.exports=e.p+"img/6f2c707.webp"},314:function(t,n,e){t.exports=e.p+"img/2909478.webp"},315:function(t,n,e){t.exports=e.p+"img/a1f478d.webp"},316:function(t,n,e){t.exports=e.p+"img/d132c5a.webp"},317:function(t,n,e){t.exports=e.p+"img/ee78a3f.webp"},318:function(t,n,e){t.exports=e.p+"img/d09b100.webp"},319:function(t,n,e){t.exports=e.p+"img/567edd2.webp"},320:function(t,n,e){t.exports=e.p+"img/6bc3275.webp"},321:function(t,n,e){t.exports=e.p+"img/b2fd187.webp"},322:function(t,n,e){t.exports=e.p+"img/08dd844.webp"},323:function(t,n,e){t.exports=e.p+"img/bf3833d.webp"},324:function(t,n,e){t.exports=e.p+"img/4e21093.webp"},325:function(t,n,e){t.exports=e.p+"img/a5fb9a5.webp"},326:function(t,n,e){t.exports=e.p+"img/db08de6.webp"},327:function(t,n,e){t.exports=e.p+"img/1ab1e0b.webp"},328:function(t,n,e){t.exports=e.p+"img/e9f035c.webp"},329:function(t,n,e){t.exports=e.p+"img/aed02e7.webp"},330:function(t,n,e){t.exports=e.p+"img/053757f.webp"},331:function(t,n,e){t.exports=e.p+"img/7fd7f10.webp"},332:function(t,n,e){t.exports=e.p+"img/2295299.webp"},333:function(t,n,e){t.exports=e.p+"img/eaf7c07.webp"},334:function(t,n,e){t.exports=e.p+"img/fc0a318.webp"},335:function(t,n,e){t.exports=e.p+"img/20b6ba5.webp"},336:function(t,n,e){t.exports=e.p+"img/c477f38.webp"},337:function(t,n,e){t.exports=e.p+"img/ce2bf04.webp"},338:function(t,n,e){t.exports=e.p+"img/1a7a05a.webp"},339:function(t,n,e){t.exports=e.p+"img/f1feb15.webp"},340:function(t,n,e){t.exports=e.p+"img/59af339.webp"},341:function(t,n,e){t.exports=e.p+"img/d52bc7c.webp"},342:function(t,n,e){t.exports=e.p+"img/dc78e54.webp"},343:function(t,n,e){t.exports=e.p+"img/7690043.webp"},344:function(t,n,e){t.exports=e.p+"img/b8cf65c.webp"},345:function(t,n,e){t.exports=e.p+"img/35a4225.webp"},346:function(t,n,e){t.exports=e.p+"img/84a5ded.webp"},347:function(t,n,e){t.exports=e.p+"img/2537ead.webp"},348:function(t,n,e){t.exports=e.p+"img/c8eceab.webp"},349:function(t,n,e){t.exports=e.p+"img/b9f8a65.webp"},350:function(t,n,e){t.exports=e.p+"img/bb49eb8.webp"},351:function(t,n,e){t.exports=e.p+"img/094770e.webp"},352:function(t,n,e){t.exports=e.p+"img/20e415e.webp"},353:function(t,n,e){t.exports=e.p+"img/a4948e4.webp"},354:function(t,n,e){t.exports=e.p+"img/ef98555.webp"},355:function(t,n,e){t.exports=e.p+"img/78f620a.webp"},356:function(t,n,e){t.exports=e.p+"img/3d36497.webp"},357:function(t,n,e){t.exports=e.p+"img/4dd6445.webp"},358:function(t,n,e){t.exports=e.p+"img/37d708f.webp"},359:function(t,n,e){t.exports=e.p+"img/5c7cc17.webp"},360:function(t,n,e){t.exports=e.p+"img/7f7a57a.webp"},361:function(t,n,e){t.exports=e.p+"img/d35817a.webp"},362:function(t,n,e){t.exports=e.p+"img/0fb8b50.webp"},363:function(t,n,e){t.exports=e.p+"img/0df93d0.webp"},364:function(t,n,e){t.exports=e.p+"img/9bd063a.webp"},365:function(t,n,e){t.exports=e.p+"img/6deacf3.webp"},366:function(t,n,e){t.exports=e.p+"img/5bfd544.webp"},367:function(t,n,e){t.exports=e.p+"img/5e35727.webp"},368:function(t,n,e){t.exports=e.p+"img/9cdf71d.webp"},369:function(t,n,e){t.exports=e.p+"img/d104d26.webp"},370:function(t,n,e){t.exports=e.p+"img/15763be.webp"},371:function(t,n,e){t.exports=e.p+"img/9a4fa6e.webp"},372:function(t,n,e){t.exports=e.p+"img/95ec674.webp"},373:function(t,n,e){t.exports=e.p+"img/6a7e30d.webp"},374:function(t,n,e){t.exports=e.p+"img/20f2b08.webp"},375:function(t,n,e){t.exports=e.p+"img/1fc0536.webp"},376:function(t,n,e){t.exports=e.p+"img/738f824.webp"},377:function(t,n,e){t.exports=e.p+"img/5d7d8ea.webp"},378:function(t,n,e){t.exports=e.p+"img/252188e.webp"},379:function(t,n,e){t.exports=e.p+"img/4178ce7.webp"},380:function(t,n,e){t.exports=e.p+"img/9d7a3fa.webp"},381:function(t,n,e){t.exports=e.p+"img/aaf25b8.webp"},382:function(t,n,e){t.exports=e.p+"img/6000807.webp"},383:function(t,n,e){t.exports=e.p+"img/64db1d9.webp"},384:function(t,n,e){t.exports=e.p+"img/8a857e2.webp"},385:function(t,n,e){t.exports=e.p+"img/d58334c.webp"},386:function(t,n,e){t.exports=e.p+"img/cf27c21.webp"},387:function(t,n,e){t.exports=e.p+"img/eb98448.webp"},388:function(t,n,e){t.exports=e.p+"img/213831d.webp"},389:function(t,n,e){t.exports=e.p+"img/60cd2f8.webp"},390:function(t,n,e){t.exports=e.p+"img/4c417d8.webp"},391:function(t,n,e){t.exports=e.p+"img/7c18d37.webp"},392:function(t,n,e){t.exports=e.p+"img/60fbdea.webp"},393:function(t,n,e){t.exports=e.p+"img/a9114b4.webp"},394:function(t,n,e){t.exports=e.p+"img/ac892c3.webp"},395:function(t,n,e){t.exports=e.p+"img/b0be7fa.webp"},396:function(t,n,e){t.exports=e.p+"img/fe8b848.webp"},397:function(t,n,e){t.exports=e.p+"img/8f7727a.webp"},398:function(t,n,e){t.exports=e.p+"img/0bf944b.webp"},399:function(t,n,e){t.exports=e.p+"img/5544961.webp"},400:function(t,n,e){t.exports=e.p+"img/626c370.webp"},401:function(t,n,e){t.exports=e.p+"img/77c8819.webp"},402:function(t,n,e){t.exports=e.p+"img/d0479c0.webp"},403:function(t,n,e){t.exports=e.p+"img/5ad0c64.webp"},404:function(t,n,e){t.exports=e.p+"img/f839fae.webp"},405:function(t,n,e){t.exports=e.p+"img/5cad2b2.webp"},406:function(t,n,e){t.exports=e.p+"img/17987ab.webp"},407:function(t,n,e){t.exports=e.p+"img/b649bea.webp"},408:function(t,n,e){t.exports=e.p+"img/9927008.webp"},409:function(t,n,e){t.exports=e.p+"img/6c80424.webp"},410:function(t,n,e){t.exports=e.p+"img/36c2d2c.webp"},411:function(t,n,e){t.exports=e.p+"img/f0e0a3e.webp"},412:function(t,n,e){t.exports=e.p+"img/1af3fa1.webp"},413:function(t,n,e){t.exports=e.p+"img/078fb9f.webp"},414:function(t,n,e){t.exports=e.p+"img/2b9db16.webp"},415:function(t,n,e){t.exports=e.p+"img/e97af33.webp"},416:function(t,n,e){t.exports=e.p+"img/234baf2.webp"},417:function(t,n,e){t.exports=e.p+"img/e7a0b3c.webp"},418:function(t,n,e){t.exports=e.p+"img/1622625.webp"},419:function(t,n,e){t.exports=e.p+"img/a2fdc37.webp"},420:function(t,n,e){t.exports=e.p+"img/8083b62.webp"},421:function(t,n,e){t.exports=e.p+"img/c813319.webp"},422:function(t,n,e){t.exports=e.p+"img/87d99ac.webp"},423:function(t,n,e){t.exports=e.p+"img/d217a31.webp"},424:function(t,n,e){t.exports=e.p+"img/0445872.webp"},425:function(t,n,e){t.exports=e.p+"img/3a7b759.webp"},426:function(t,n,e){t.exports=e.p+"img/7d68f57.webp"},427:function(t,n,e){t.exports=e.p+"img/524536f.webp"},428:function(t,n,e){t.exports=e.p+"img/4cea803.webp"},429:function(t,n,e){t.exports=e.p+"img/4e933c7.webp"},430:function(t,n,e){t.exports=e.p+"img/32e89ab.webp"},431:function(t,n,e){t.exports=e.p+"img/41ca2d0.webp"},432:function(t,n,e){t.exports=e.p+"img/4bfa784.webp"},433:function(t,n,e){t.exports=e.p+"img/638f9cf.webp"},434:function(t,n,e){t.exports=e.p+"img/c64c90e.webp"},435:function(t,n,e){t.exports=e.p+"img/17a83da.webp"},436:function(t,n,e){t.exports=e.p+"img/8617860.webp"},437:function(t,n,e){t.exports=e.p+"img/3cae3dc.webp"},438:function(t,n,e){t.exports=e.p+"img/d2066b9.webp"},439:function(t,n,e){t.exports=e.p+"img/42dee57.webp"},440:function(t,n,e){t.exports=e.p+"img/9b4c75e.webp"},441:function(t,n,e){t.exports=e.p+"img/c9788d6.webp"},442:function(t,n,e){t.exports=e.p+"img/9522e5f.webp"},443:function(t,n,e){t.exports=e.p+"img/fcd1274.webp"},444:function(t,n,e){t.exports=e.p+"img/8a87716.webp"},445:function(t,n,e){t.exports=e.p+"img/7d20b0d.webp"},446:function(t,n,e){t.exports=e.p+"img/94ceaa1.webp"},447:function(t,n,e){t.exports=e.p+"img/9ba9b1d.webp"},448:function(t,n,e){t.exports=e.p+"img/cb247b7.webp"},449:function(t,n,e){var map={"./content/mods/2nd-anniversary/thumbnail.jpg":285,"./content/mods/48hr/thumbnail.jpg":286,"./content/mods/a-brand-new-day/thumbnail.jpg":287,"./content/mods/a-date-with-sayori/thumbnail.jpg":288,"./content/mods/a-fathers-redemption/thumbnail.jpg":289,"./content/mods/a-lost-chapter/thumbnail.jpg":290,"./content/mods/a-slice-of-life/thumbnail.jpg":291,"./content/mods/after-school-demo/thumbnail.jpg":292,"./content/mods/alone-together/thumbnail.jpg":293,"./content/mods/another-world/thumbnail.jpg":294,"./content/mods/april-fools-unlocked/thumbnail.jpg":295,"./content/mods/art-club/thumbnail.jpg":296,"./content/mods/bad-memories/thumbnail.jpg":297,"./content/mods/behind-closed-doors/thumbnail.jpg":298,"./content/mods/bff/thumbnail.jpg":299,"./content/mods/bland-rewrite/thumbnail.jpg":300,"./content/mods/chad-mc/thumbnail.jpg":301,"./content/mods/choice-based/thumbnail.jpg":302,"./content/mods/christmas-adventure/thumbnail.jpg":303,"./content/mods/christmas-heist-2/thumbnail.jpg":304,"./content/mods/christmas-heist/thumbnail.jpg":305,"./content/mods/christmas-story/thumbnail.jpg":306,"./content/mods/coldest-summer/thumbnail.jpg":307,"./content/mods/college-club-2/thumbnail.jpg":308,"./content/mods/college-club/thumbnail.jpg":309,"./content/mods/corrupted-files/thumbnail.jpg":310,"./content/mods/date-club/thumbnail.jpg":311,"./content/mods/day-of-reckoning/thumbnail.jpg":312,"./content/mods/deletion-rewrite/thumbnail.jpg":313,"./content/mods/despair/thumbnail.jpg":314,"./content/mods/dimensions/thumbnail.jpg":315,"./content/mods/disappearance/thumbnail.jpg":316,"./content/mods/divided-hearts/thumbnail.jpg":317,"./content/mods/do-you-lift-club/thumbnail.jpg":318,"./content/mods/doki-doki-simulator/thumbnail.jpg":319,"./content/mods/doki-heika-banzai/thumbnail.jpg":320,"./content/mods/dokis-dont-wear-ties/thumbnail.jpg":321,"./content/mods/dokis-n-dragons/thumbnail.jpg":322,"./content/mods/dont/thumbnail.jpg":323,"./content/mods/dreams/thumbnail.jpg":324,"./content/mods/easter-hunt/thumbnail.jpg":325,"./content/mods/emerald-heart/thumbnail.jpg":326,"./content/mods/encore/thumbnail.jpg":327,"./content/mods/enter-traceback/thumbnail.jpg":328,"./content/mods/exit-music-redux-demo/thumbnail.jpg":329,"./content/mods/exit-music/thumbnail.jpg":330,"./content/mods/fake-reality/thumbnail.jpg":331,"./content/mods/fallen-angel/thumbnail.jpg":332,"./content/mods/fleeting-feelings/thumbnail.jpg":333,"./content/mods/forever-and-ever/thumbnail.jpg":334,"./content/mods/forgotten/thumbnail.jpg":335,"./content/mods/forward-momentum/thumbnail.jpg":336,"./content/mods/found-love/thumbnail.jpg":337,"./content/mods/go-home-club/thumbnail.jpg":338,"./content/mods/god-syndrome/thumbnail.jpg":339,"./content/mods/hells-kitchen/thumbnail.jpg":340,"./content/mods/her/thumbnail.jpg":341,"./content/mods/hypnopompic/thumbnail.jpg":342,"./content/mods/in-a-nutshell/thumbnail.jpg":343,"./content/mods/india-man-time/thumbnail.jpg":344,"./content/mods/into-the-dark/thumbnail.jpg":345,"./content/mods/isolation/thumbnail.jpg":346,"./content/mods/it-wasnt-her/thumbnail.jpg":347,"./content/mods/just-us/thumbnail.jpg":348,"./content/mods/just-yuri/thumbnail.jpg":349,"./content/mods/keeper-of-reality/thumbnail.jpg":350,"./content/mods/lavender-scent/thumbnail.jpg":351,"./content/mods/longer-roads/thumbnail.jpg":352,"./content/mods/loser-mc/thumbnail.jpg":353,"./content/mods/lost-ascension/thumbnail.jpg":354,"./content/mods/love-and-literature/thumbnail.jpg":355,"./content/mods/love-secrets/thumbnail.jpg":356,"./content/mods/magical-literary-heroine-natsuki/thumbnail.jpg":357,"./content/mods/malignancy/thumbnail.jpg":358,"./content/mods/mc-does-not-dream-of-monika/thumbnail.jpg":359,"./content/mods/mcs-revenge/thumbnail.jpg":360,"./content/mods/meme-club-2/thumbnail.jpg":361,"./content/mods/meme-club/thumbnail.jpg":362,"./content/mods/memorial/thumbnail.jpg":363,"./content/mods/memories-of-nothing/thumbnail.jpg":364,"./content/mods/mercy/thumbnail.jpg":365,"./content/mods/murder-case/thumbnail.jpg":366,"./content/mods/my-escape/thumbnail.jpg":367,"./content/mods/natsukis-expanded-story/thumbnail.jpg":368,"./content/mods/never-ending-tomorrow/thumbnail.jpg":369,"./content/mods/new-blood/thumbnail.jpg":370,"./content/mods/new-eyes/thumbnail.jpg":371,"./content/mods/new-friends-act-one/thumbnail.jpg":372,"./content/mods/new-world/thumbnail.jpg":373,"./content/mods/no-happiness/thumbnail.jpg":374,"./content/mods/one-last-memory/thumbnail.jpg":375,"./content/mods/onii-chan-club/thumbnail.jpg":376,"./content/mods/other-clubs/thumbnail.jpg":377,"./content/mods/our-castle-walls/thumbnail.jpg":378,"./content/mods/our-final-heartbeat/thumbnail.jpg":379,"./content/mods/our-reality/thumbnail.jpg":380,"./content/mods/our-time/thumbnail.jpg":381,"./content/mods/outbreak-red-sky/thumbnail.jpg":382,"./content/mods/outcast/thumbnail.jpg":383,"./content/mods/pantomime-show/thumbnail.jpg":384,"./content/mods/pink-eyes/thumbnail.jpg":385,"./content/mods/president-natsuki/thumbnail.jpg":386,"./content/mods/purist/thumbnail.jpg":387,"./content/mods/recoded/thumbnail.jpg":388,"./content/mods/relapse/thumbnail.jpg":389,"./content/mods/return-to-the-portrait/thumbnail.jpg":390,"./content/mods/rhapsody/thumbnail.jpg":391,"./content/mods/rising-storm-2/thumbnail.jpg":392,"./content/mods/rising-storm/thumbnail.jpg":393,"./content/mods/rpg/thumbnail.jpg":394,"./content/mods/salvation/thumbnail.jpg":395,"./content/mods/sans-in-ddlc/thumbnail.jpg":396,"./content/mods/save-sayori/thumbnail.jpg":397,"./content/mods/savior-of-souls/thumbnail.jpg":398,"./content/mods/sayonara-dreams-of-letting-go-prologue/thumbnail.jpg":399,"./content/mods/sayori-date/thumbnail.jpg":400,"./content/mods/sayori-shoots-up-the-literature-club/thumbnail.jpg":401,"./content/mods/scattered-stars/thumbnail.jpg":402,"./content/mods/second-chances/thumbnail.jpg":403,"./content/mods/shattered-world/thumbnail.jpg":404,"./content/mods/snafu/thumbnail.jpg":405,"./content/mods/somnium/thumbnail.jpg":406,"./content/mods/spark-of-hope/thumbnail.jpg":407,"./content/mods/starry-eyed/thumbnail.jpg":408,"./content/mods/summer-hope/thumbnail.jpg":409,"./content/mods/sunny-rains/thumbnail.jpg":410,"./content/mods/sunshine-days/thumbnail.jpg":411,"./content/mods/sweet-dreams/thumbnail.jpg":412,"./content/mods/switcheroo/thumbnail.jpg":413,"./content/mods/take-two/thumbnail.jpg":414,"./content/mods/the-binding-of-isaac-mod/thumbnail.jpg":415,"./content/mods/the-blood-moon-chapters-chapter-1--before-during-and-after-the-stories/thumbnail.jpg":416,"./content/mods/the-festival/thumbnail.jpg":417,"./content/mods/the-fruits-of-the-literature-club/thumbnail.jpg":418,"./content/mods/the-good-ending/thumbnail.jpg":419,"./content/mods/the-last-sky/thumbnail.jpg":420,"./content/mods/the-musical/thumbnail.jpg":421,"./content/mods/the-new-literature-club/thumbnail.jpg":422,"./content/mods/the-perfect-story/thumbnail.jpg":423,"./content/mods/the-portrait-of-markov/thumbnail.jpg":424,"./content/mods/the-post-credit-scene/thumbnail.jpg":425,"./content/mods/the-yuri-parable/thumbnail.jpg":426,"./content/mods/thot-club/thumbnail.jpg":427,"./content/mods/through-time-and-space/thumbnail.jpg":428,"./content/mods/time-to-be-an-epic-hero/thumbnail.jpg":429,"./content/mods/total-fold/thumbnail.jpg":430,"./content/mods/true-feelings/thumbnail.jpg":431,"./content/mods/true-happiness/thumbnail.jpg":432,"./content/mods/true-world/thumbnail.jpg":433,"./content/mods/tutorial/thumbnail.jpg":434,"./content/mods/twin-realities/thumbnail.jpg":435,"./content/mods/ultimate-combo/thumbnail.jpg":436,"./content/mods/undone-fate/thumbnail.jpg":437,"./content/mods/vigilante/thumbnail.jpg":438,"./content/mods/we-are-the-literature-club-ii/thumbnail.jpg":439,"./content/mods/we-are-the-literature-club/thumbnail.jpg":440,"./content/mods/weatheard-world/thumbnail.jpg":441,"./content/mods/west-virginia-club/thumbnail.jpg":442,"./content/mods/window-to-your-heart/thumbnail.jpg":443,"./content/mods/world-of-dreams/thumbnail.jpg":444,"./content/mods/yandere-club/thumbnail.jpg":445,"./content/mods/yandere-madness/thumbnail.jpg":446,"./content/mods/youtuber-club/thumbnail.jpg":447,"./content/mods/yuri-reality/thumbnail.jpg":448};function o(t){var n=c(t);return e(n)}function c(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=c,t.exports=o,o.id=449},450:function(t,n,e){t.exports=e.p+"img/8af0bbc.webp"},454:function(t,n,e){var content=e(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("51793b20",content,!0,{sourceMap:!1})},459:function(t,n,e){"use strict";e(454)},460:function(t,n,e){var o=e(42)(!1);o.push([t.i,'article[data-v-bf8718ec]{transition:background-color .25s;border-radius:25px;font-family:"Mali",Arial,Helvetica,sans-serif;padding:1.5em}article[data-v-bf8718ec]:hover{background-color:hsla(0,0%,100%,.31373)}.logo[data-v-bf8718ec]{width:100%}a[data-v-bf8718ec]{text-decoration:none}.fields[data-v-bf8718ec]{color:#fff;text-align:center}.fields span[data-v-bf8718ec]{color:#ff99cb}',""]),t.exports=o},461:function(t,n,e){t.exports=e.p+"img/2657e51.png"},474:function(t,n,e){var content=e(651);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("8db4f3c2",content,!0,{sourceMap:!1})},644:function(t,n,e){"use strict";e.r(n);var o={components:{ModLogo:e(283).default},props:{mod:{type:Object,default:function(){return{dir:"",title:"",genre1:"",genre2:""}}}}},c=(e(459),e(45)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",[e("nuxt-link",{attrs:{to:t.mod.dir}},[e("ModLogo",{staticClass:"logo",attrs:{mod:t.mod}}),t._v(" "),e("div",[e("h4",{staticClass:"fields"},[t._v("\n        "+t._s(t.mod.title)+"\n      ")]),t._v(" "),e("h5",{staticClass:"fields"},[t._v("\n        Genre: "),t._l(t.mod.genre,(function(n,o){return e("span",{key:o},[o?e("span",[t._v(",")]):t._e(),t._v(" "+t._s(t.$ModDataMapper.genre(n)))])}))],2)])],1)],1)}),[],!1,null,"bf8718ec",null);n.default=component.exports;installComponents(component,{ModLogo:e(283).default})},650:function(t,n,e){"use strict";e(474)},651:function(t,n,e){var o=e(42),c=e(192),r=e(282),m=o(!1),d=c(r);m.push([t.i,"main[data-v-621ec79b]{min-height:100vh;color:#fff;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url("+d+');background-attachment:fixed;background-size:cover}.content[data-v-621ec79b]{padding:0 6em;padding-top:7em!important}.content .mod-container[data-v-621ec79b]{padding:0 2em;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:2em;gap:2em}.content .search-tools[data-v-621ec79b]{background-color:#fff;padding:0 2em;border-radius:25px;display:flex;align-items:center}.content .search-tools .searchbar[data-v-621ec79b]{font-family:"Work Sans",Arial,Helvetica,sans-serif;flex:1;border:0;height:3em;outline:0!important}.pagination-container[data-v-621ec79b]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:flex;margin:auto;padding:0}.pagination-container .pagination[data-v-621ec79b]{list-style-type:none;margin:.3em}.pagination-container .pagination .pagination-link[data-v-621ec79b]{font-family:"Work Sans",sans-serif;font-feature-settings:tabular-nums lining-nums;font-variant-numeric:tabular-nums lining-nums;padding:.5em 1em;cursor:pointer;border-radius:10px;transition:background-color .25s}.pagination-container .pagination .active[data-v-621ec79b]{background-color:hsla(0,0%,100%,.53333)}@media only screen and (max-width:600px){.content[data-v-621ec79b]{padding:0 2em}.content .mod-container[data-v-621ec79b]{grid-template-columns:1fr}}@media only screen and (min-width:600px){.content[data-v-621ec79b]{padding:0 2em}.content .mod-container[data-v-621ec79b]{grid-template-columns:1fr}}@media only screen and (min-width:768px){.content .mod-container[data-v-621ec79b]{grid-template-columns:1fr 1fr}}@media only screen and (min-width:992px){.content .mod-container[data-v-621ec79b]{grid-template-columns:1fr 1fr 1fr}.content[data-v-621ec79b]{padding:0 6em}}',""]),t.exports=m}}]);