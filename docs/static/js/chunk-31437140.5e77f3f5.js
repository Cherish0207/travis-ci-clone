(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31437140"],{"11e9":function(t,e,n){var i=n("52a7"),c=n("4630"),a=n("6821"),r=n("6a99"),o=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=r(e,!0),s)try{return u(t,e)}catch(n){}if(o(t,e))return c(!i.f.call(t,e),t[e])}},"2e4d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-list"},[n("stack-header",{attrs:{title:t.$t("home")}}),n("cube-scroll",{ref:"scroll0",attrs:{data:t.list}},t._l(t.list,function(e,i){return n("main-item",{key:i,attrs:{item:e,index:i},on:{click:function(n){return t.onClick(e)}}})}),1)],1)},c=[],a={mainList:[{id:"0",background:"#7effdb",message:"在vue-router上扩展，原有导航逻辑不需改变"},{id:"1",background:"#a393eb",message:"push或者forward的时候重新渲染页面，Stack中会添加新渲染的页面"},{id:"2",background:"#fc5c9c",message:"back或者go(负数)的时候从Stack中获取先前的页面，会保留好先前的内容状态，例如表单内容等"},{id:"3",background:"#90f2ff",message:"back或者go(负数)的时候会把不用的页面从Stack中移除"},{id:"4",background:"#a393eb",message:"replace会更新Stack中页面信息"},{id:"5",background:"#fc5c9c",message:"重新渲染的时候有activited钩子函数触发"},{id:"6",background:"#3d84a8",message:"支持浏览器的后退，前进事件"},{id:"7",background:"#46cdcf",message:"支持响应路由参数的变化"},{id:"8",background:"#00b8a9"},{id:"9",background:"#8ef6e4"},{id:"10",background:"#9896f1"},{id:"11",background:"#fc5c9c"},{id:"12",background:"#a393eb"},{id:"13",background:"#90f2ff"}]},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-item",style:t.styleObject,on:{click:t.onClick,animationend:t.animationend}},[t._m(0)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"message-wrap"})])}],s=(n("c5f6"),{name:"MainItem",components:{},props:{index:{type:Number},item:{type:Object,default:function(){return{}}}},data:function(){return{isAnimationend:!1}},computed:{styleObject:function(){return{"background-color":this.item.background||"",animation:this.isAnimationend?"none":"show "+(.2*(this.index+1)+.1)+"s 1"}}},watch:{},created:function(){},methods:{onClick:function(){this.$emit("click")},animationend:function(){this.isAnimationend=!0}}}),u=s,f=(n("afff"),n("2877")),d=Object(f["a"])(u,r,o,!1,null,null,null),l=d.exports,p=n("b1cd"),m={name:"ProductList",components:{MainItem:l,StackHeader:p["a"]},props:{},data:function(){return{list:[]}},computed:{},watch:{},created:function(){this.getList()},mounted:function(){console.log(this.$pageStack.getStack())},activated:function(){console.log("activated")},methods:{onClick:function(t){this.$router.push("/main-detail/"+t.id)},getList:function(){var t=this;setTimeout(function(){t.list=a.mainList},200)}}},b=m,h=(n("339f"),Object(f["a"])(b,i,c,!1,null,null,null));e["default"]=h.exports},"339f":function(t,e,n){"use strict";var i=n("a70f"),c=n.n(i);c.a},"5dbc":function(t,e,n){var i=n("d3f4"),c=n("8b97").set;t.exports=function(t,e,n){var a,r=e.constructor;return r!==n&&"function"==typeof r&&(a=r.prototype)!==n.prototype&&i(a)&&c&&c(t,a),t}},"8b97":function(t,e,n){var i=n("d3f4"),c=n("cb7c"),a=function(t,e){if(c(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(c){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:a}},9093:function(t,e,n){var i=n("ce10"),c=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,c)}},a70f:function(t,e,n){},aa77:function(t,e,n){var i=n("5ca1"),c=n("be13"),a=n("79e5"),r=n("fdef"),o="["+r+"]",s="​",u=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),d=function(t,e,n){var c={},o=a(function(){return!!r[t]()||s[t]()!=s}),u=c[t]=o?e(l):r[t];n&&(c[n]=u),i(i.P+i.F*o,"String",c)},l=d.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=d},afff:function(t,e,n){"use strict";var i=n("c7bd"),c=n.n(i);c.a},b162:function(t,e,n){"use strict";var i=n("fce1"),c=n.n(i);c.a},b1cd:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"stack-header"},[n("div",{staticClass:"h-left"},[t._t("h-left",[n("i",{staticClass:"iconfont iconfanhui",on:{click:t.onBack}})])],2),n("h1",[t._v(t._s(t.title))]),n("div",{staticClass:"h-right"},[t._t("h-right",[n("i",{staticClass:"iconfont iconqianjin2",on:{click:t.onForward}})])],2)])},c=[],a={name:"StackHeader",data:function(){return{}},props:{title:{type:String,default:"",required:!1}},components:{},computed:{},watch:{title:{handler:function(t){window.document.title=t},immediate:!0}},methods:{onBack:function(){this.$router.back(),this.$emit("back")},onForward:function(){this.$router.forward(),this.$emit("forward")}}},r=a,o=(n("b162"),n("2877")),s=Object(o["a"])(r,i,c,!1,null,null,null);e["a"]=s.exports},c5f6:function(t,e,n){"use strict";var i=n("7726"),c=n("69a8"),a=n("2d95"),r=n("5dbc"),o=n("6a99"),s=n("79e5"),u=n("9093").f,f=n("11e9").f,d=n("86cc").f,l=n("aa77").trim,p="Number",m=i[p],b=m,h=m.prototype,g=a(n("2aeb")(h))==p,k="trim"in String.prototype,v=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=k?e.trim():l(e,3);var n,i,c,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:i=2,c=49;break;case 79:case 111:i=8,c=55;break;default:return+e}for(var r,s=e.slice(2),u=0,f=s.length;u<f;u++)if(r=s.charCodeAt(u),r<48||r>c)return NaN;return parseInt(s,i)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(g?s(function(){h.valueOf.call(n)}):a(n)!=p)?r(new b(v(e)),n,m):v(e)};for(var _,y=n("9e1e")?u(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;y.length>w;w++)c(b,_=y[w])&&!c(m,_)&&d(m,_,f(b,_));m.prototype=h,h.constructor=m,n("2aba")(i,p,m)}},c7bd:function(t,e,n){},fce1:function(t,e,n){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);