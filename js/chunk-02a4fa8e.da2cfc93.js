(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02a4fa8e"],{"0418":function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"music-header"},[a("span",{staticClass:"header-back",on:{click:function(s){t.$router.go(-t.counts)}}},[a("i",{staticClass:"iconfont icon-fanhui",attrs:{id:"back"}})]),a("div",{staticClass:"header-title"},[t._v("\n    "+t._s(t.title)+"\n  ")])])},i=[],c=(a("c5f6"),{name:"music-header",props:{title:{type:String,required:!0},counts:{type:Number}}}),e=c,o=(a("fca3"),a("2877")),r=Object(o["a"])(e,n,i,!1,null,"466cfd54",null);s["a"]=r.exports},"2ae3":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ranking"},[a("header-back",{attrs:{title:t.title,counts:t.counts}}),a("h3",[t._v("官方榜")]),a("div",{staticClass:"scroll"},[a("ul",t._l(t.yunTopList,function(s,n){return a("li",{key:n,staticClass:"item",on:{click:function(a){return t.selectSongs(s)}}},[a("img",{attrs:{src:s.coverImgUrl}}),a("ul",{staticClass:"songlist"},t._l(s.top,function(s,n){return a("li",{key:n,staticClass:"song"},[a("span",[t._v(t._s(n+1)+".")]),a("span",[t._v(t._s(s.name)+" - "+t._s(s.ar[0].name))])])}),0)])}),0)]),a("div",{staticClass:"recommendRanking"},[a("h3",[t._v("推荐榜")]),a("div",{staticClass:"Songs"},t._l(t.recommendTop,function(s){return a("div",{key:s.id,staticClass:"contain",on:{click:function(a){return t.selectSongs(s)}}},[a("img",{staticClass:"item",attrs:{src:s.coverImgUrl}}),a("span",{staticClass:"describe"},[t._v(t._s(s.name))])])}),0)]),a("div",{staticClass:"globalRanking"},[a("h3",[t._v("全球榜")]),a("div",{staticClass:"Songs"},t._l(t.globalTop,function(s,n){return a("div",{key:n,staticClass:"contain",on:{click:function(a){return t.selectSongs(s)}}},[a("img",{staticClass:"item",attrs:{src:s.coverImgUrl}}),a("span",{staticClass:"describe"},[t._v(t._s(s.name))])])}),0)]),a("div",{staticClass:"moreRanking"},[a("h3",[t._v("更多榜单")]),a("div",{staticClass:"Songs"},t._l(t.moreTop,function(s){return a("div",{key:s.id,staticClass:"contain",on:{click:function(a){return t.selectSongs(s)}}},[a("img",{staticClass:"item",attrs:{src:s.coverImgUrl}}),a("span",{staticClass:"describe"},[t._v(t._s(s.name))])])}),0)]),a("router-view")],1)},i=[],c=a("cebc"),e=a("0418"),o=a("bc3a"),r=a.n(o),l=a("e60d");function u(t){var s=l["b"]+"/top/list?idx=".concat(t);return r.a.get(s)}var p=a("2f62"),d=[3,1,0,2,17],v=[23,22,18,15,21,7],f=[6,5,8,10,21,16],m=[4,9,11,12,13,14,19,20],g={data:function(){return{counts:1,title:"排行榜",yunTopList:[],recommendTop:[],globalTop:[],moreTop:[]}},created:function(){this._getTopList()},methods:Object(c["a"])({_getTopList:function(){for(var t=this,s=0;s<d.length;s++)u(d[s]).then(function(s){var a=s.data.playlist;a.top=s.data.playlist.tracks.slice(0,3),t.yunTopList.push(a)});for(var a=0;a<6;a++)u(v[a]).then(function(s){var a=s.data.playlist;a.top=s.data.playlist.tracks.slice(0,3),t.recommendTop.push(a)});for(var n=0;n<6;n++)u(f[n]).then(function(s){var a=s.data.playlist;a.top=s.data.playlist.tracks.slice(0,3),t.globalTop.push(a)});for(var i=0;i<m.length;i++)u(m[i]).then(function(s){var a=s.data.playlist;a.top=s.data.playlist.tracks.slice(0,3),t.moreTop.push(a)})},selectSongs:function(t){this.$router.push("".concat("ranking/"+t.id)),this.setTopList(t)}},Object(p["d"])({setTopList:"SET_TOP_LIST"})),components:{HeaderBack:e["a"]}},h=g,_=(a("c224"),a("2877")),k=Object(_["a"])(h,n,i,!1,null,null,null);s["default"]=k.exports},"61b1":function(t,s,a){},aaec:function(t,s,a){},c224:function(t,s,a){"use strict";var n=a("aaec"),i=a.n(n);i.a},fca3:function(t,s,a){"use strict";var n=a("61b1"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-02a4fa8e.da2cfc93.js.map