(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74b73ded"],{"0418":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-header"},[e("span",{staticClass:"header-back",on:{click:function(s){t.$router.go(-t.counts)}}},[e("i",{staticClass:"iconfont icon-fanhui",attrs:{id:"back"}})]),e("div",{staticClass:"header-title"},[t._v("\n    "+t._s(t.title)+"\n  ")])])},a=[],c=(e("c5f6"),{name:"music-header",props:{title:{type:String,required:!0},counts:{type:Number}}}),n=c,l=(e("fca3"),e("2877")),r=Object(l["a"])(n,i,a,!1,null,"466cfd54",null);s["a"]=r.exports},2843:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"recomDetail"},[e("header-back",{attrs:{title:t.title,counts:t.counts}}),e("div",{staticClass:"top"},[e("img",{attrs:{src:this.detail.coverImgUrl}}),e("div",{staticClass:"discribe"},[e("span",{staticClass:"name"},[t._v(t._s(this.detail.name))]),e("div",[t._v(t._s(this.detail.description))])])]),e("playList",{staticClass:"bottom"})],1)},a=[],c=e("cebc"),n=e("5923"),l=e("42ba"),r=e("0418"),u=e("bf5a"),o=e("2f62"),d={data:function(){return{title:"歌单",counts:1,detail:null,songs:[],temp:[],id:this.$route.params.detailId}},created:function(){this._getRecommendListDetail()},methods:Object(c["a"])({_getRecommendListDetail:function(){var t=this,s=this.id;Object(l["c"])(s).then(function(s){t.detail=s.data.playlist,t._getLIST()})},_getLIST:function(){var t=this;this.detail.trackIds.map(function(s){Object(n["g"])(s.id).then(function(s){t.songs.push(s.data.songs)})}),this.setItem(this.songs)}},Object(o["d"])({setItem:"SET_ITEM"})),computed:Object(c["a"])({},Object(o["c"])(["topList"])),watch:{},components:{HeaderBack:r["a"],playList:u["a"]}},m=d,f=(e("c3d9"),e("2877")),b=Object(f["a"])(m,i,a,!1,null,null,null);s["default"]=b.exports},3391:function(t,s,e){},"61b1":function(t,s,e){},"6a3b":function(t,s,e){"use strict";var i=e("3391"),a=e.n(i);a.a},a200:function(t,s,e){},bf5a:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"playList"},[e("div",{staticClass:"header"},[e("span",{staticClass:"text"},[t._v("播放全部")]),e("span",{staticClass:"count"},[t._v("(共"+t._s(this.item.length)+"首)")])]),e("ul",{staticClass:"musicList"},t._l(this.item,function(s,i){return e("li",{key:i,staticClass:"song",on:{click:function(s){return t.selectItem(i)}}},[e("div",{staticClass:"idcount"},[t._v(t._s(i+1))]),e("div",{staticClass:"songName"},[t._v(t._s(t.limitNumber(s[0].name)))]),e("div",{staticClass:"ar"},[t._v(t._s(s[0].ar[0].name)+"-"+t._s(t.limitNumber(s[0].name)))])])}),0)])},a=[],c=e("cebc"),n=e("2f62"),l={name:"playList",data:function(){return{}},methods:Object(c["a"])({selectItem:function(t){this.selectPlay({list:this.item,index:t})},limitNumber:function(t){var s=t;return s.length>15&&(s=s.substr(0,15)+"..."),s}},Object(n["b"])(["selectPlay"])),computed:Object(c["a"])({},Object(n["c"])(["item"]))},r=l,u=(e("6a3b"),e("2877")),o=Object(u["a"])(r,i,a,!1,null,null,null);s["a"]=o.exports},c3d9:function(t,s,e){"use strict";var i=e("a200"),a=e.n(i);a.a},fca3:function(t,s,e){"use strict";var i=e("61b1"),a=e.n(i);a.a}}]);
//# sourceMappingURL=chunk-74b73ded.233d2d82.js.map