(window.webpackJsonp=window.webpackJsonp||[]).push([[14,12],{472:function(t,o,e){var content=e(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(56).default)("61dde480",content,!0,{sourceMap:!1})},476:function(t,o,e){"use strict";e(472)},477:function(t,o,e){var n=e(55)(!1);n.push([t.i,".logo[data-v-44723afc]{-o-object-fit:cover;object-fit:cover;width:100%}",""]),t.exports=n},478:function(t,o,e){"use strict";e.r(o);var n={props:["mod"],methods:{logo:function(){return this.$modData.logo(this.mod)}}},r=(e(476),e(41)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return null!==t.logo()?e("img",{staticClass:"logo",attrs:{src:t.logo(),alt:"Logo"}}):t._e()}),[],!1,null,"44723afc",null);o.default=component.exports},482:function(t,o,e){var content=e(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(56).default)("4d8c2e5b",content,!0,{sourceMap:!1})},495:function(t,o,e){"use strict";e(482)},496:function(t,o,e){var n=e(55)(!1);n.push([t.i,".entry-container[data-v-4c2e8f2a]{display:flex;flex-direction:column;min-width:0;padding:1.875em;background-color:#fff;border-radius:.625em;background-clip:padding-box;border:.0625em dashed #000;text-decoration:none;color:#000;transition:background-color .25s,color .25s}.entry-container .logo[data-v-4c2e8f2a]{width:100%;margin:auto}.entry-container .info[data-v-4c2e8f2a]{margin-top:.625em}.entry-container .info h1[data-v-4c2e8f2a]{min-width:0;max-width:100%;font-weight:500;font-size:1em;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.entry-container .info p[data-v-4c2e8f2a]{font-size:.875em}.entry-container[data-v-4c2e8f2a]:hover{background-color:#8599ff;color:#fff}",""]),t.exports=n},521:function(t,o,e){"use strict";e.r(o);e(108),e(50);var n={components:{Logo:e(478).default},props:["mod"],data:function(){return{genreText:this.mod.genre.map(this.$modData.genre).join(", ")}}},r=(e(495),e(41)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("nuxt-link",{staticClass:"entry-container",attrs:{to:t.mod.dir}},[e("div",{staticClass:"logo"},[e("Logo",{attrs:{mod:t.mod}})],1),t._v(" "),e("div",{staticClass:"info"},[e("h1",[t._v(t._s(t.mod.title))]),t._v(" "),e("p",[t._v(t._s(t.genreText))]),t._v(" "),e("p",[t._v(t._s(t.$modData.status(t.mod.status)))]),t._v(" "),e("p",[t._v(t._s(t.$modData.length(t.mod.length)))]),t._v(" "),e("p",[t._v(t._s(t.$modData.formatDate(t.mod.released)))])])])}),[],!1,null,"4c2e8f2a",null);o.default=component.exports}}]);