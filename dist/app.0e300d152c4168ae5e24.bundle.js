(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7d/V":function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return s}));var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("table",{staticClass:"table table-bordered table-striped table-hover"},[r("tbody",[t._m(0),t._v(" "),t._l(t.lines,(function(n){return r("tr",{key:n.id},[r("td",[t._v(t._s(n.OrderNo))]),t._v(" "),r("td",[t._v(t._s(n.PartNo))]),t._v(" "),r("td",[t._v(t._s(n.AnalysisType))]),t._v(" "),r("td",[t._v(t._s(n.Customer))]),t._v(" "),r("td",[t._v(t._s(n.PSPNo))]),t._v(" "),r("td",[t._v(t._s(n.Orderer))])])}))],2)]),t._v(" "),t._m(1),t._v(" "),r("div",[t._v("\n    "+t._s(t.myorder)+"\n  ")])])},s=[function(){var t=this,n=t.$createElement;return(n=t._self._c||n)("tr",[n("th",[t._v("Order No.")]),t._v(" "),n("th",[t._v("Part No.")]),t._v(" "),n("th",[t._v("Analysis Type")]),t._v(" "),n("th",[t._v("Customer")]),t._v(" "),n("th",[t._v("PSP No.")]),t._v(" "),n("th",[t._v("Orderer")])])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("span",{staticClass:"glyphicon glyphicon-search",attrs:{"aria-hidden":"true"}})])}];e._withStripped=!0},"7wBX":function(t,n,r){"use strict";r.r(n);var e,s=r("mF7n"),a=r.n(s);for(e in s)["default"].indexOf(e)<0&&function(t){r.d(n,t,(function(){return s[t]}))}(e);n.default=a.a},"8uw8":function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},"9P4i":function(t,n,r){var e=r("LboF"),s=r("ZSyW");"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]),e(s,r={insert:"head",singleton:!1}),t.exports=s.locals||{}},FeVh:function(t,n,r){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["bardata","menus"],data:function(){return{currentItem:"Signin"}},methods:{submit:function(){t.get("/getUserOrderData",(function(t,n){alert("数据: "+t+"\n状态: "+n)}))}}}}).call(this,r("EVdn"))},JDQ0:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return s}));var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[r("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[r("ul",{staticClass:"nav navbar-nav"},t._l(t.menus,(function(n){return r("li",{key:n.id,class:{active:t.currentItem===n.name},on:{click:function(r){t.currentItem=n.name}}},[r("router-link",{attrs:{to:n.route}},[t._v(t._s(n.name))])],1)})),0),t._v(" "),r("ul",{staticClass:"nav navbar-nav navbar-right"},[r("li",{staticClass:"dropdown"},[t._m(1),t._v(" "),r("ul",{staticClass:"dropdown-menu"},t._l(t.bardata,(function(n){return r("li",{key:n.id},[r("a",{attrs:{href:"#"}},[t._v(t._s(n))])])})),0)])]),t._v(" "),r("form",{staticClass:"navbar-form navbar-right"},[t._m(2),t._v(" "),r("button",{staticClass:"btn btn-default",attrs:{type:"submit"},on:{click:t.submit}},[t._v("\n            Submit\n          ")])])])])])])},s=[function(){var t=this,n=t.$createElement;return(n=t._self._c||n)("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Brand")])])},function(){var t=this.$createElement;return(t=this._self._c||t)("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[this._v("Dropdown "),t("span",{staticClass:"caret"})])},function(){var t=this.$createElement;return(t=this._self._c||t)("div",{staticClass:"form-group"},[t("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})])}];e._withStripped=!0},K0wQ:function(t,n,r){"use strict";r.r(n);var e,s=r("ocsV"),a=r("zCwv");for(e in a)["default"].indexOf(e)<0&&function(t){r.d(n,t,(function(){return a[t]}))}(e);r("x9JD");var i=r("KHd+");(s=Object(i.a)(a.default,s.a,s.b,!1,null,"5878936a",null)).options.__file="src/js/newOrder.vue",n.default=s.exports},LZo8:function(t,n,r){"use strict";var e=r("k7tw");r.n(e).a},NuJC:function(t,n,r){var e=r("LboF"),s=r("RzDz");"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]),e(s,r={insert:"head",singleton:!1}),t.exports=s.locals||{}},RzDz:function(t,n,r){"use strict";r.r(n);var e=r("JPst");(e=r.n(e)()(!0)).push([t.i,"\n.main[data-v-362e36d4] {\r\n\tpadding-top: 50px;\n}\r\n","",{version:3,sources:["webpack://src/js/FECapacity.vue"],names:[],mappings:";AAiBA;CACA,iBAAA;AACA",sourcesContent:["<template>\r\n\t<div>\r\n\t\t<h1>FE Capcity</h1>\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n// import TodoList from './components/TodoList.vue'\r\n\r\nexport default {\r\n\t// components: {\r\n\t// \tTodoList\r\n\t// }\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.main {\r\n\tpadding-top: 50px;\r\n}\r\n</style>"],sourceRoot:""}]),n.default=e},T5wA:function(t,n,r){"use strict";r.r(n);var e=r("JPst");(e=r.n(e)()(!0)).push([t.i,"\n.main[data-v-5878936a] {\r\n\tpadding-top: 50px;\n}\r\n","",{version:3,sources:["webpack://src/js/newOrder.vue"],names:[],mappings:";AAiBA;CACA,iBAAA;AACA",sourcesContent:["<template>\r\n\t<div>\r\n\t\t<h1>new order</h1>\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n// import TodoList from './components/TodoList.vue'\r\n\r\nexport default {\r\n\t// components: {\r\n\t// \tTodoList\r\n\t// }\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.main {\r\n\tpadding-top: 50px;\r\n}\r\n</style>"],sourceRoot:""}]),n.default=e},US5d:function(t,n,r){"use strict";var e=r("9P4i");r.n(e).a},VHer:function(t,n,r){"use strict";r.r(n);var e,s=r("JDQ0"),a=r("cBLX");for(e in a)["default"].indexOf(e)<0&&function(t){r.d(n,t,(function(){return a[t]}))}(e);var i=r("KHd+");(s=Object(i.a)(a.default,s.a,s.b,!1,null,"29766ced",null)).options.__file="src/js/navBar.vue",n.default=s.exports},VTUL:function(t,n,r){"use strict";r.r(n);var e,s=r("zSz4"),a=r("dbb8");for(e in a)["default"].indexOf(e)<0&&function(t){r.d(n,t,(function(){return a[t]}))}(e);r("gb/u");var i=r("KHd+");(s=Object(i.a)(a.default,s.a,s.b,!1,null,"362e36d4",null)).options.__file="src/js/FECapacity.vue",n.default=s.exports},VsmP:function(t,n,r){"use strict";r.r(n);var e=r("JPst");(e=r.n(e)()(!0)).push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* @import "../../node_modules/bootstrap/dist/css/bootstrap.css"; */\n.main[data-v-717c5656] {\r\n  padding-top: 50px;\n}\r\n',"",{version:3,sources:["webpack://src/js/myOrder.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiEA,mEAAA;AACA;EACA,iBAAA;AACA",sourcesContent:['<template>\r\n  <div>\r\n    <table class="table table-bordered table-striped table-hover">\r\n      <tbody>\r\n        <tr>\r\n          <th>Order No.</th>\r\n          <th>Part No.</th>\r\n          <th>Analysis Type</th>\r\n          <th>Customer</th>\r\n          <th>PSP No.</th>\r\n          <th>Orderer</th>\r\n        </tr>\r\n        <tr v-for="item in lines" :key="item.id">\r\n          <td>{{ item.OrderNo }}</td>\r\n          <td>{{ item.PartNo }}</td>\r\n          <td>{{ item.AnalysisType }}</td>\r\n          <td>{{ item.Customer }}</td>\r\n          <td>{{ item.PSPNo }}</td>\r\n          <td>{{ item.Orderer }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div>\r\n      <span class="glyphicon glyphicon-search" aria-hidden="true"></span>\r\n    </div>\r\n    <div>\r\n      {{ myorder }}\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n// import TodoList from \'./components/TodoList.vue\'\r\n\r\nexport default {\r\n  // components: {\r\n  // \tTodoList\r\n  // },\r\n  props: [\'myorder\'],\r\n  data: function () {\r\n    return {\r\n      lines: [\r\n        {\r\n          OrderNo: "000001",\r\n          PartNo: "377000012001",\r\n          AnalysisType: "stiffness",\r\n          Customer: "BMW",\r\n          PSPNo: "61000",\r\n          Orderer: "Xuan",\r\n        },\r\n        {\r\n          OrderNo: "000002",\r\n          PartNo: "377000012002",\r\n          AnalysisType: "stress",\r\n          Customer: "Daimler",\r\n          PSPNo: "61001",\r\n          Orderer: "Xuan",\r\n        },\r\n      ],\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n\r\n<style scoped>\r\n/* @import "../../node_modules/bootstrap/dist/css/bootstrap.css"; */\r\n.main {\r\n  padding-top: 50px;\r\n}\r\n</style>'],sourceRoot:""}]),n.default=e},Vtdi:function(t,n,r){"use strict";r("+eM2"),r("SYky");var e=c(r("ukxx")),s=c(r("bcMb")),a=c(r("VHer")),i=c(r("apAw")),o=c(r("VTUL")),u=c(r("ZKb7")),d=c(r("K0wQ"));function c(t){return t&&t.__esModule?t:{default:t}}var l=r("vDqi");e.default.use(s.default),u=new s.default({routes:[{path:"/",redirect:"/signin"},{path:"/myorder",component:i.default},{path:"/neworder",component:d.default},{path:"/fecapacity",component:o.default},{path:"/signin",component:u.default}]}),new e.default({el:"#app",components:{navBar:a.default},data:{dropdownData:["Action","Another action","third action","last action"],menus:[{name:"My Order",route:"/myorder"},{name:"New Order",route:"/neworder"},{name:"FE Capacity",route:"/fecapacity"},{name:"Signin",route:"/signin"}],myorder:""},router:u,beforeMount:function(){console.log("signin:  "+this.menus[3].route),l.get("/getUserOrderData").then((function(t){console.log(t.body)}),(function(t){this.myorder="server error"}))}})},ZKb7:function(t,n,r){"use strict";r.r(n);var e,s=r("cKsI"),a=r("7wBX");for(e in a)["default"].indexOf(e)<0&&function(t){r.d(n,t,(function(){return a[t]}))}(e);r("US5d");var i=r("KHd+");(s=Object(i.a)(a.default,s.a,s.b,!1,null,"16a9ebbf",null)).options.__file="src/js/Signin.vue",n.default=s.exports},ZSyW:function(t,n,r){"use strict";r.r(n);var e=r("JPst");(e=r.n(e)()(!0)).push([t.i,"\n.main[data-v-16a9ebbf] {\r\n\tpadding-top: 50px;\n}\r\n","",{version:3,sources:["webpack://src/js/Signin.vue"],names:[],mappings:";AAoBA;CACA,iBAAA;AACA",sourcesContent:['<template>\r\n\t<div>\r\n\t\t<h1>My Todo App! signin</h1>\r\n\t\t\x3c!-- <router-link to="/login">login</router-link>\r\n        <router-link to="/register">register</router-link>\r\n        <router-view></router-view> --\x3e\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n// import TodoList from \'./components/TodoList.vue\'\r\n\r\nexport default {\r\n\t// components: {\r\n\t// \tTodoList\r\n\t// }\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.main {\r\n\tpadding-top: 50px;\r\n}\r\n</style>'],sourceRoot:""}]),n.default=e},apAw:function(t,n,r){"use strict";r.r(n);var e,s=r("7d/V"),a=r("u7TM");for(e in a)["default"].indexOf(e)<0&&function(t){r.d(n,t,(function(){return a[t]}))}(e);r("LZo8");var i=r("KHd+");(s=Object(i.a)(a.default,s.a,s.b,!1,null,"717c5656",null)).options.__file="src/js/myOrder.vue",n.default=s.exports},cBLX:function(t,n,r){"use strict";r.r(n);var e,s=r("FeVh"),a=r.n(s);for(e in s)["default"].indexOf(e)<0&&function(t){r.d(n,t,(function(){return s[t]}))}(e);n.default=a.a},cKsI:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return s}));var e=function(){this.$createElement;return this._self._c,this._m(0)},s=[function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("h1",[this._v("My Todo App! signin")])])}];e._withStripped=!0},dbb8:function(t,n,r){"use strict";r.r(n);var e,s=r("8uw8"),a=r.n(s);for(e in s)["default"].indexOf(e)<0&&function(t){r.d(n,t,(function(){return s[t]}))}(e);n.default=a.a},"gb/u":function(t,n,r){"use strict";var e=r("NuJC");r.n(e).a},htgJ:function(t,n,r){var e=r("LboF"),s=r("T5wA");"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]),e(s,r={insert:"head",singleton:!1}),t.exports=s.locals||{}},k7tw:function(t,n,r){var e=r("LboF"),s=r("VsmP");"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]),e(s,r={insert:"head",singleton:!1}),t.exports=s.locals||{}},mF7n:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},ocsV:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return s}));var e=function(){this.$createElement;return this._self._c,this._m(0)},s=[function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("h1",[this._v("new order")])])}];e._withStripped=!0},oe2z:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},u7TM:function(t,n,r){"use strict";r.r(n);var e,s=r("w0yC"),a=r.n(s);for(e in s)["default"].indexOf(e)<0&&function(t){r.d(n,t,(function(){return s[t]}))}(e);n.default=a.a},w0yC:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["myorder"],data:function(){return{lines:[{OrderNo:"000001",PartNo:"377000012001",AnalysisType:"stiffness",Customer:"BMW",PSPNo:"61000",Orderer:"Xuan"},{OrderNo:"000002",PartNo:"377000012002",AnalysisType:"stress",Customer:"Daimler",PSPNo:"61001",Orderer:"Xuan"}]}}}},x9JD:function(t,n,r){"use strict";var e=r("htgJ");r.n(e).a},zCwv:function(t,n,r){"use strict";r.r(n);var e,s=r("oe2z"),a=r.n(s);for(e in s)["default"].indexOf(e)<0&&function(t){r.d(n,t,(function(){return s[t]}))}(e);n.default=a.a},zSz4:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return s}));var e=function(){this.$createElement;return this._self._c,this._m(0)},s=[function(){var t=this.$createElement;return(t=this._self._c||t)("div",[t("h1",[this._v("FE Capcity")])])}];e._withStripped=!0}},[["Vtdi",1,2]]]);