(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-table/u-table"],{"32f8":function(t,e,n){},6577:function(t,e,n){"use strict";var r=n("32f8"),o=n.n(r);o.a},"88de":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-table",props:{borderColor:{type:String,default:"#e4e7ed"},align:{type:String,default:"center"},padding:{type:String,default:"10rpx 6rpx"},fontSize:{type:[String,Number],default:28},color:{type:String,default:"#606266"},thStyle:{type:Object,default:function(){return{}}},bgColor:{type:String,default:"#ffffff"}},provide:function(){return{uTable:this}},data:function(){return{}},computed:{tableStyle:function(){var t={};return t.borderLeft="solid 1px ".concat(this.borderColor),t.borderTop="solid 1px ".concat(this.borderColor),t.backgroundColor=this.bgColor,t}}};e.default=r},"922a":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.tableStyle]));t.$mp.data=Object.assign({},{$root:{s0:n}})},u=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}))},e208:function(t,e,n){"use strict";n.r(e);var r=n("88de"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},e213:function(t,e,n){"use strict";n.r(e);var r=n("922a"),o=n("e208");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("6577");var a,f=n("f0c5"),i=Object(f["a"])(o["default"],r["b"],r["c"],!1,null,"157101c6",null,!1,r["a"],a);e["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-table/u-table-create-component',
    {
        'uview-ui/components/u-table/u-table-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e213"))
        })
    },
    [['uview-ui/components/u-table/u-table-create-component']]
]);