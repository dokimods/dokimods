(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12,14],{479:function(t,o,e){var content=e(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("61dde480",content,!0,{sourceMap:!1})},483:function(t,o,e){"use strict";e(479)},484:function(t,o,e){var n=e(54)(!1);n.push([t.i,".logo[data-v-44723afc]{-o-object-fit:cover;object-fit:cover;width:100%}",""]),t.exports=n},485:function(t,o,e){"use strict";e.r(o);var n={props:["mod"],methods:{logo:function(){return this.$modData.logo(this.mod)}}},r=(e(483),e(42)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return null!==t.logo()?e("img",{staticClass:"logo",attrs:{src:t.logo(),alt:"Logo"}}):t._e()}),[],!1,null,"44723afc",null);o.default=component.exports},489:function(t,o,e){var content=e(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("4d8c2e5b",content,!0,{sourceMap:!1})},502:function(t,o,e){"use strict";e(489)},503:function(t,o,e){var n=e(54)(!1);n.push([t.i,".entry-container[data-v-4c2e8f2a]{display:flex;flex-direction:column;min-width:0;padding:1.875em;background-color:#fff;border-radius:.625em;background-clip:padding-box;border:.0625em dashed #000;text-decoration:none;color:#000;transition:background-color .25s,color .25s}.entry-container .logo[data-v-4c2e8f2a]{width:100%;margin:auto}.entry-container .info[data-v-4c2e8f2a]{margin-top:.625em}.entry-container .info h1[data-v-4c2e8f2a]{min-width:0;max-width:100%;font-weight:500;font-size:1em;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.entry-container .info p[data-v-4c2e8f2a]{font-size:.875em}.entry-container[data-v-4c2e8f2a]:hover{background-color:#8599ff;color:#fff}",""]),t.exports=n},504:function(t,o,e){var content=e(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("7165f045",content,!0,{sourceMap:!1})},528:function(t,o,e){"use strict";e.r(o);e(110),e(50);var n={components:{Logo:e(485).default},props:["mod"],data:function(){return{genreText:this.mod.genre.map(this.$modData.genre).join(", ")}}},r=(e(502),e(42)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("nuxt-link",{staticClass:"entry-container",attrs:{to:t.mod.dir}},[e("div",{staticClass:"logo"},[e("Logo",{attrs:{mod:t.mod}})],1),t._v(" "),e("div",{staticClass:"info"},[e("h1",[t._v(t._s(t.mod.title))]),t._v(" "),e("p",[t._v(t._s(t.genreText))]),t._v(" "),e("p",[t._v(t._s(t.$modData.status(t.mod.status)))]),t._v(" "),e("p",[t._v(t._s(t.$modData.length(t.mod.length)))]),t._v(" "),e("p",[t._v(t._s(t.$modData.formatDate(t.mod.released)))])])])}),[],!1,null,"4c2e8f2a",null);o.default=component.exports},536:function(t,o,e){"use strict";e(504)},537:function(t,o,e){var n=e(54)(!1);n.push([t.i,".mod-entry-leave-to[data-v-4bcbe44f]{opacity:0}.mod-entry-leave-active[data-v-4bcbe44f]{display:none;position:absolute;transition:transform .8s ease}.mod-grid[data-v-4bcbe44f]{position:relative;display:grid;grid-template-columns:1fr 1fr 1fr;grid-auto-rows:1fr;grid-gap:1.25em;gap:1.25em}.mod-grid *[data-v-4bcbe44f]{width:100%;height:100%}",""]),t.exports=n},740:function(t,o,e){"use strict";e.r(o);var n={components:{Entry:e(528).default},props:["mods"]},r=(e(536),e(42)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("transition-group",{staticClass:"mod-grid",attrs:{name:"mod-entry",tag:"div"}},t._l(t.mods,(function(t){return e("Entry",{key:t.title,attrs:{mod:t}})})),1)],1)}),[],!1,null,"4bcbe44f",null);o.default=component.exports}}]);