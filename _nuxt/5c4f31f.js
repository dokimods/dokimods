(window.webpackJsonp=window.webpackJsonp||[]).push([[24,23,25],{542:function(e,n,t){"use strict";var o=t(2),r=t(543);o({target:"String",proto:!0,forced:t(544)("link")},{link:function(e){return r(this,"a","href",e)}})},543:function(e,n,t){var o=t(5),r=t(24),c=t(13),d=/"/g,l=o("".replace);e.exports=function(e,n,t,o){var f=c(r(e)),v="<"+n;return""!==t&&(v+=" "+t+'="'+l(c(o),d,"&quot;")+'"'),v+">"+f+"</"+n+">"}},544:function(e,n,t){var o=t(3);e.exports=function(e){return o((function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},552:function(e,n,t){var content=t(578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(59).default)("e4fa890c",content,!0,{sourceMap:!1})},553:function(e,n,t){var content=t(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(59).default)("0e67a916",content,!0,{sourceMap:!1})},577:function(e,n,t){"use strict";t(552)},578:function(e,n,t){var o=t(58)(!1);o.push([e.i,".download[data-v-f997196c]{color:#fff;text-decoration:none;padding:.4375em 1.875em;background:linear-gradient(90deg,#ff7878,#de0000);border-radius:10px;box-shadow:var(--box-shadow);transform:scale(1);transform-origin:center center;transition:transform .2s ease-in-out}.download[data-v-f997196c]:hover{transform:scale(1.03);transform-origin:center center}",""]),e.exports=o},579:function(e,n,t){"use strict";t(553)},580:function(e,n,t){var o=t(58)(!1);o.push([e.i,'.genre-container[data-v-764f6e0a]{height:-moz-fit-content;height:fit-content;display:grid;grid-auto-flow:column;grid-gap:.75em;gap:.75em}.genre-container h5[data-v-764f6e0a]{margin:auto;font-weight:400;font-size:1.125em}.genre-container .genre-cap[data-v-764f6e0a]{background-color:#a4deff;padding:.3125em 1.25em;border-radius:.4375em;box-shadow:var(--box-shadow)}.genre-container .genre-cap p[data-v-764f6e0a]{font-family:"Nunito";color:#0068a3;font-size:.875em}',""]),e.exports=o},581:function(e,n,t){var content=t(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(59).default)("276e8e60",content,!0,{sourceMap:!1})},602:function(e,n,t){"use strict";t.r(n);t(542);var o={props:["link"]},r=(t(577),t(41)),component=Object(r.a)(o,(function(){var e=this;return(0,e._self._c)("a",{staticClass:"download",attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[e._v("Download")])}),[],!1,null,"f997196c",null);n.default=component.exports},603:function(e,n,t){"use strict";t.r(n);var o={props:["mod"]},r=(t(579),t(41)),component=Object(r.a)(o,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"genre-container"},[n("h5",[e._v("Genre: ")]),e._v(" "),e._l(e.mod.genre,(function(t,o){return n("div",{key:o,staticClass:"genre-cap"},[n("p",[e._v(e._s(e.$modData.genre(t)))])])}))],2)}),[],!1,null,"764f6e0a",null);n.default=component.exports},615:function(e,n,t){"use strict";t(581)},616:function(e,n,t){var o=t(58)(!1);o.push([e.i,".genre-download-container[data-v-3e90a9db]{display:flex;justify-content:space-between;align-items:center}@media screen and (max-width:576px){.genre-download-container[data-v-3e90a9db]{font-size:1.4em}}",""]),e.exports=o},843:function(e,n,t){"use strict";t.r(n);var o=t(602),r=t(603),c={components:{Download:o.default,Genre:r.default},props:["mod"]},d=(t(615),t(41)),component=Object(d.a)(c,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"genre-download-container"},[n("Genre",{attrs:{mod:e.mod}}),e._v(" "),n("Download",{attrs:{link:e.mod.download_link}})],1)}),[],!1,null,"3e90a9db",null);n.default=component.exports}}]);