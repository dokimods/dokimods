(window.webpackJsonp=window.webpackJsonp||[]).push([[17,15],{508:function(o,t,e){var content=e(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(57).default)("602e6700",content,!0,{sourceMap:!1})},511:function(o,t,e){"use strict";e(508)},512:function(o,t,e){var n=e(56)((function(i){return i[1]}));n.push([o.i,".logo[data-v-6da76760]{-o-object-fit:cover;object-fit:cover;width:100%}",""]),n.locals={},o.exports=n},516:function(o,t,e){"use strict";e.r(t);var n={props:["mod"],methods:{logo:function(){return this.$modData.logo(this.mod)}}},r=(e(511),e(39)),component=Object(r.a)(n,(function(){var o=this,t=o._self._c;return null!==o.logo()?t("img",{staticClass:"logo lazyload",attrs:{src:o.logo(),alt:"Logo"}}):o._e()}),[],!1,null,"6da76760",null);t.default=component.exports},522:function(o,t,e){var content=e(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(57).default)("60b2c367",content,!0,{sourceMap:!1})},541:function(o,t,e){"use strict";e(522)},542:function(o,t,e){var n=e(56)((function(i){return i[1]}));n.push([o.i,".entry-container[data-v-5e9d4ef0]{background-clip:padding-box;background-color:var(--color-container);border:.0625em dashed var(--color);border-radius:.5em;color:var(--color);display:flex;flex-direction:column;min-width:0;padding:1.875em;-webkit-text-decoration:none;text-decoration:none;transition:background-color .25s,color .25s,transform .25s ease-in-out}.entry-container .logo[data-v-5e9d4ef0]{margin:auto;width:100%}.entry-container .info[data-v-5e9d4ef0]{margin-top:.625em}.entry-container .info h1[data-v-5e9d4ef0]{font-size:1em;font-weight:500;max-width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.entry-container .info p[data-v-5e9d4ef0]{font-size:.875em}.entry-container[data-v-5e9d4ef0]:hover{background-color:var(--container-hover);color:#fff;transform:scale(1.03);transform-origin:center center}",""]),n.locals={},o.exports=n},573:function(o,t,e){"use strict";e.r(t);e(118),e(48);var n={components:{Logo:e(516).default},props:["mod"],data:function(){return{genreText:this.mod.genre.map(this.$modData.genre).join(", ")}}},r=(e(541),e(39)),component=Object(r.a)(n,(function(){var o=this,t=o._self._c;return t("nuxt-link",{staticClass:"entry-container",attrs:{to:o.mod.dir}},[t("div",{staticClass:"logo"},[t("Logo",{attrs:{mod:o.mod}})],1),o._v(" "),t("div",{staticClass:"info"},[t("h1",[o._v(o._s(o.mod.title))]),o._v(" "),t("p",[o._v("by "),t("b",[o._v(o._s(o.mod.authors))])]),o._v(" "),t("br"),o._v(" "),t("p",[o._v(o._s(o.genreText))]),o._v(" "),t("p",[o._v(o._s(o.$modData.status(o.mod.status)))]),o._v(" "),t("p",[o._v(o._s(o.$modData.length(o.mod.length)))]),o._v(" "),t("p",[o._v(o._s(o.$modData.formatDate(o.mod.released)))])])])}),[],!1,null,"5e9d4ef0",null);t.default=component.exports}}]);