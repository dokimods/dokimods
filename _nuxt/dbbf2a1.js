(window.webpackJsonp=window.webpackJsonp||[]).push([[17,27],{460:function(t,e,n){"use strict";n.r(e);var o={props:["title"]},r=(n(463),n(38)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("hr")])}),[],!1,null,"583de700",null);e.default=component.exports},461:function(t,e,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("504be48a",content,!0,{sourceMap:!1})},463:function(t,e,n){"use strict";n(461)},464:function(t,e,n){var o=n(50)(!1);o.push([t.i,".heading[data-v-583de700]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.heading h2[data-v-583de700]{font-weight:500;font-size:1.25em}.heading hr[data-v-583de700]{width:100%;height:.125em;border:none;background:linear-gradient(90deg,#f54242,#ff9e9e);border-radius:.0625em;margin:.3125em 0 1.25em}",""]),t.exports=o},470:function(t,e,n){var content=n(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("43734d04",content,!0,{sourceMap:!1})},480:function(t,e,n){"use strict";n(470)},481:function(t,e,n){var o=n(50)(!1);o.push([t.i,".sorting-container[data-v-014416a9]{padding:0 .625em;display:flex;flex-direction:column;grid-gap:.625em;gap:.625em}.sorting-container .sorting[data-v-014416a9]{cursor:pointer;padding:.125em .625em;border-radius:.75em;text-decoration:none;font-size:.875em;transition:background-color .25s ease,color .25s ease;text-align:center}.sorting-container .selected[data-v-014416a9]{background-color:transparent;border:.125em solid #9685ff}.sorting-container .idle[data-v-014416a9]{background-color:#9685ff;color:#fff;border:.125em solid transparent}",""]),t.exports=o},509:function(t,e,n){"use strict";n.r(e);n(204);var o={components:{SectionHeader:n(460).default},data:function(){return{sort:this.value,sortings:["A to Z","Z to A","Newest to Oldest","Oldest to Newest"]}},props:["value"],watch:{sort:function(t){this.updateCheck(t)}},methods:{clickedCheck:function(t){this.sort=t},updateCheck:function(t){this.$emit("input",this.sort)}}},r=(n(480),n(38)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SectionHeader",{attrs:{title:"Sorting"}}),t._v(" "),n("div",{staticClass:"sorting-container"},t._l(t.sortings,(function(e,o){return n("a",{key:o,staticClass:"sorting",class:[t.sort===o?"selected":"idle"],on:{click:function(e){return t.clickedCheck(o)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0)],1)}),[],!1,null,"014416a9",null);e.default=component.exports;installComponents(component,{SectionHeader:n(460).default})}}]);