(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6ea9994"],{"3edf":function(t,e,s){},"3f15":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend"},[s("div",{staticClass:"slider",on:{mouseover:function(e){return t.stop()},mouseout:function(e){return t.move()}}},[s("div",{staticClass:"show"},[s("transition-group",{attrs:{tag:"ul",name:"image"}},t._l(t.result,function(e,n){return s("li",{key:n,class:n===t.mark?"current":"ordinary",on:{click:function(s){return t.selectSong(e)}}},[s("div",{class:n===t.mark?"null":"mengc"}),s("img",{attrs:{src:e.picUrl}}),s("span",{staticClass:"describe"},[t._v(t._s(e.name))])])}),0)],1)]),s("div",{staticClass:"Songs"},t._l(t.left,function(e,n){return s("div",{key:n,staticClass:"contain",on:{click:function(s){return t.selectSong(e)}}},[s("img",{staticClass:"item",attrs:{src:e.picUrl}}),s("span",{staticClass:"describeitem"},[t._v(t._s(e.name))])])}),0),s("div",{staticClass:"footer"})])},i=[],a=s("cebc"),c=s("e60d"),r=s("5923"),l=s("2f62"),o={name:"recommendSongs",data:function(){return{mark:0,timer:null,result:[],all:[],left:[]}},created:function(){this._getRecommend(),this.play()},methods:Object(a["a"])({_getRecommend:function(){var t=this;Object(r["e"])().then(function(e){e.status===c["a"]&&(t.all=e.data.result,t.result=t.all.slice(0,3),t.left=t.all.slice(4,30))})},atuoPlayAdd:function(){this.mark++,3===this.mark&&(this.mark=0)},play:function(){this.timer=setInterval(this.atuoPlayAdd,5e3)},stop:function(){clearInterval(this.timer)},move:function(){this.timer=setInterval(this.atuoPlayAdd,5e3)},selectSong:function(t){this.$router.push("".concat("songDetail/"+t.id)),this.setTopList(t)}},Object(l["d"])({setTopList:"SET_TOP_LIST"}))},u=o,d=(s("60b8"),s("2877")),m=Object(d["a"])(u,n,i,!1,null,"7d5b7e16",null);e["default"]=m.exports},"60b8":function(t,e,s){"use strict";var n=s("3edf"),i=s.n(n);i.a}}]);
//# sourceMappingURL=chunk-d6ea9994.d7035b84.js.map