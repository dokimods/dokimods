(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{445:function(t,e,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("314eb77b",content,!0,{sourceMap:!1})},446:function(t,e,n){"use strict";n.r(e);var r={props:{text:{type:String,default:""},nuxtLink:{type:Boolean,default:!1},dest:{type:String,default:"javascript:void(0);"},method:{type:Function,default:function(){}}}},o=(n(447),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.nuxtLink?n("nuxt-link",{staticClass:"button",attrs:{to:t.dest},on:{click:function(e){return t.method()}}},[n("p",[t._v(t._s(t.text))])]):n("a",{staticClass:"button",attrs:{href:t.dest},on:{click:function(e){return t.method()}}},[n("p",[t._v(t._s(t.text))])])],1)}),[],!1,null,"3e16130a",null);e.default=component.exports},447:function(t,e,n){"use strict";n(445)},448:function(t,e,n){var r=n(29)(!1);r.push([t.i,".button[data-v-3e16130a]{cursor:pointer;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background-color:var(--primary-color);padding:.75em 2em;border-radius:10px;transition:background-color .25s;text-decoration:none}.button[data-v-3e16130a]:hover{background-color:var(--secondary-color)}.button p[data-v-3e16130a]{font-weight:500;color:#fff}",""]),t.exports=r},454:function(t,e,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("28a72bb1",content,!0,{sourceMap:!1})},468:function(t,e,n){t.exports=n.p+"img/b1148a0.png"},469:function(t,e,n){t.exports=n.p+"img/916c56a.webp"},470:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzcuMDgiIGhlaWdodD0iMjM3LjA4Ij48cGF0aCBkYXRhLW5hbWU9IlBhdGggMTYiIGQ9Ik0xNS44MDUgMEgwdjIzNy4wOGgyMzcuMDhWMzkuNTEzYTcuOSA3LjkgMCAwIDAtMTQuMzM1LTQuNTg0bC03Mi43NTIgMTAxLjgzNS00MC45MzYtNTQuNTc2YTcuOSA3LjkgMCAwIDAtMTIuOS4zNjRMMTUuODA1IDIwMy4wODN6IiBmaWxsPSIjZmZkNWVkIi8+PC9zdmc+"},471:function(t,e,n){t.exports=n.p+"img/0c3b046.svg"},472:function(t,e,n){"use strict";n(454)},473:function(t,e,n){var r=n(29)(!1);r.push([t.i,'section[data-v-9be0c130]{position:relative;display:flex;flex-direction:column;align-items:center;box-sizing:border-box}.front-page-card-container[data-v-9be0c130]{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr 1fr;grid-gap:1em;gap:1em;grid-template-areas:"card1 card1 card1 svg1" "svg2 card2 card2 card2"}.card[data-v-9be0c130]{display:flex;width:100%;border-radius:25px;box-shadow:0 1px 4px 0 rgb(0 0 0/16%);background:linear-gradient(90deg,#ffcfe5,#fff 35%)}.card img[data-v-9be0c130]{padding:1em 1em 0;max-width:15em;-o-object-fit:scale-down;object-fit:scale-down;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;align-self:flex-end}.card .content[data-v-9be0c130]{width:auto;padding:2em;display:grid;grid-gap:1em 0;gap:1em 0}.card .content .header[data-v-9be0c130]{font-weight:500;color:#4c2b3f;font-size:1.3em}.link[data-v-9be0c130]{margin-top:auto}.svg-container[data-v-9be0c130]{width:100%;border-radius:25px;box-shadow:0 1px 4px 0 rgb(0 0 0/16%);padding:60px;background:#fff}.svg-container img[data-v-9be0c130]{max-width:8em;height:auto;-o-object-fit:contain;object-fit:contain}@media only screen and (max-width:600px){.card[data-v-9be0c130]{background:#fff}.card img[data-v-9be0c130]{display:none}}@media only screen and (max-width:992px){.front-page-card-container[data-v-9be0c130]{grid-template-columns:none;grid-template-rows:1fr 1fr;grid-template-areas:"card1" "card2"}.svg-container[data-v-9be0c130]{display:none}}',""]),t.exports=r},476:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"svg-container",staticStyle:{"grid-area":"svg1"}},[e("img",{attrs:{src:n(470),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"svg-container",staticStyle:{"grid-area":"svg2"}},[e("img",{attrs:{src:n(471),alt:""}})])}],o=n(5),c=(n(34),{components:{LinkButton:n(446).default},data:function(){return{mods:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("mods",{deep:!0}).only(["dir"]).fetch();case 2:t.mods=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{getRandomMod:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push(t.mods[Math.floor(Math.random()*t.mods.length)].dir);case 2:case"end":return e.stop()}}),e)})))()}}}),d=(n(472),n(15)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"front-page-card-container"},[r("div",{staticClass:"card",staticStyle:{"grid-area":"card1"}},[r("img",{attrs:{src:n(468),alt:""}}),t._v(" "),r("div",{staticClass:"content"},[r("p",{staticClass:"header"},[t._v("\n          We have "+t._s(t.mods.length)+" mods in our databases as of now.\n        ")]),t._v(" "),r("p",[t._v("Click on the button if you want a random mod picked out.")]),t._v(" "),r("LinkButton",{staticClass:"link",attrs:{text:"I'm feeling lucky",method:t.getRandomMod}})],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"card",staticStyle:{"grid-area":"card2"}},[r("img",{attrs:{src:n(469),alt:""}}),t._v(" "),r("div",{staticClass:"content"},[r("p",{staticClass:"header"},[t._v("\n          Unsure how to install a mod or forgot how to install one?\n        ")]),t._v(" "),r("p",[t._v("Click here to read our installation guide!")]),t._v(" "),r("LinkButton",{staticClass:"link",attrs:{text:"Read More",dest:"/installation-guide","nuxt-link":!0}})],1)])])])}),r,!1,null,"9be0c130",null);e.default=component.exports;installComponents(component,{LinkButton:n(446).default})}}]);