webpackJsonp([1],{"+QrS":function(t,n){},"1hGw":function(t,n){},D1eD:function(t,n){},Fly4:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var u=e("VU/8")({name:"App"},s,!1,function(t){e("D1eD")},null,null).exports,i=e("/ocq"),r=e("mvHQ"),o=e.n(r),l=e("Gu7T"),c=e.n(l),h=e("kPrG"),m={props:{value:{type:Number,required:!0}},data:function(){return{tweeningValue:0}},watch:{value:function(t,n){this.tween(n,t)}},mounted:function(){this.tween(0,this.value)},methods:{tween:function(t,n){var e=this;new h.Tween({tweeningValue:t}).to({tweeningValue:n},500).onUpdate(function(t){e.tweeningValue=t.tweeningValue.toFixed(0)}).start(),function t(){h.update()&&requestAnimationFrame(t)}()}}},A={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"font-size":"80px"}},[e("span",[t._v(t._s(t.tweeningValue))])])},staticRenderFns:[]},d={components:{animatedInteger:e("VU/8")(m,A,!1,null,null,null).exports},mounted:function(){this.init()},data:function(){return{status:!0,list:[{value:"0",label:"特等奖"},{value:"1",label:"一等奖"},{value:"2",label:"二等奖"},{value:"3",label:"三等奖"},{value:"4",label:"四等奖"}],value:"4",count:[],locCount:[],num:30,maxNum:100,numClass:"num-30",ramdom:30,allLocCount:{0:[],1:[],2:[],3:[],4:[]},times:{0:1,1:1,2:2,3:2,4:3},animateNum:1,intervalId:null}},methods:{init:function(){for(var t=this.$route.params.count,n=[],e=0;e<t;e++)n.push(e+1);this.count=n,this.locCount=[]},handleChange:function(t){this.num=t},handleStart:function(){var t=this;0!=this.times[this.value]?(this.times[this.value]--,this.status=!this.status,this.intervalId=setInterval(function(){t.animateNum=function(t,n){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(n-t+1)+t,10);default:return 0}}(1,t.$route.params.count)},500)):this.$message.error("不能再抽这个了~")},handlePause:function(){var t;this.intervalId=null,this.status=!this.status,function(t){this.numClass=0==t?"num-1":1==t?"num-3":2==t?"num-5":3==t?"num-20":"num-30"}.call(this,this.value),this.lottery(this.count,this.num),(t=this.allLocCount[this.value]).push.apply(t,c()(this.locCount)),localStorage.setItem("allLocCount",o()(this.allLocCount))},lottery:function(){var t=this.count.length,n=[];if(0!=t)if(t<=this.num)this.locCount=this.count,this.count=[];else{do{var e=parseInt(Math.random()*t);n.indexOf(e)<0&&n.push(e)}while(n.length!=this.num);var a=[],s=[];this.count.forEach(function(t,e){n.indexOf(e)>=0?a.push(t):s.push(t)}),this.locCount=a,this.count=s}else this.$message.error("抽奖人数已达上限")}},watch:{value:function(t,n){2==t&&3==n&&this.init(),0==t?(this.num=1,this.maxNum=1,this.ramdom=1):1==t?(this.num=3,this.maxNum=10,this.ramdom=3):2==t?(this.num=5,this.maxNum=30,this.ramdom=5):3==t?(this.num=20,this.maxNum=60,this.ramdom=20):(this.num=30,this.maxNum=100,this.ramdom=30)}}};var v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[t._m(0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"content"},t._l(t.locCount,function(n,a){return e("span",{key:a,class:t.numClass},[t._v(t._s(n))])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.status,expression:"!status"}],staticClass:"content center"},[e("animated-integer",{attrs:{value:t.animateNum}})],1),t._v(" "),e("div",{staticClass:"footer"},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}},t._l(t.list,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),t.status?e("el-button",{attrs:{type:"primary",plain:""},on:{click:t.handleStart}},[t._v("开始抽奖")]):e("el-button",{attrs:{type:"primary",plain:""},on:{click:t.handlePause}},[t._v("暂停抽奖...")])],1)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"header"},[n("img",{attrs:{src:e("X7HA"),alt:""}})])}]};var p=e("VU/8")(d,v,!1,function(t){e("+QrS")},"data-v-0a4ea78e",null).exports,f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"login"},[e("div",{staticClass:"center"},[e("el-input",{staticClass:"input",attrs:{placeholder:"请输入总人数"},model:{value:t.count,callback:function(n){t.count=n},expression:"count"}}),t._v(" "),e("el-button",{attrs:{type:"primary",plain:""},on:{click:t.handler}},[t._v("确定抽奖总人数")])],1)])},staticRenderFns:[]};var C=e("VU/8")({data:function(){return{count:0}},methods:{handler:function(){this.count>0&&this.count<=137?this.$router.push({name:"Main",params:{count:this.count}}):this.$message.error("请输入有效的抽奖人数")}}},f,!1,function(t){e("Fly4")},"data-v-0db97622",null).exports,g={data:function(){return{allCount:{}}},methods:{transform:function(t){return 0==t?"特":1==t?"一":2==t?"二":3==t?"三":"四"}},mounted:function(){this.allCount=JSON.parse(localStorage.getItem("allLocCount"))}},w={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"show"},[e("h1",[t._v("获奖一览")]),t._v(" "),t._l(t.allCount,function(n,a,s){return e("div",{key:s},[e("h2",[t._v(t._s(t.transform(a))+"等奖")]),t._v(" "),e("div",{staticClass:"box"},t._l(n,function(n){return e("span",{key:n},[t._v(t._s(n))])}))])})],2)},staticRenderFns:[]};var B=e("VU/8")(g,w,!1,function(t){e("1hGw")},"data-v-6bd7d363",null).exports;a.default.use(i.a);var E=new i.a({routes:[{path:"/",name:"login",component:C},{path:"/login",name:"Login",component:C},{path:"/main/:count",name:"Main",component:p},{path:"/show",name:"Show",component:B}]}),U=e("mwE6"),G=e.n(U);e("cU5d");a.default.config.productionTip=!1,a.default.use(G.a),new a.default({el:"#app",router:E,components:{App:u},template:"<App/>"})},X7HA:function(t,n){t.exports="data:image/png;base64,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"},cU5d:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.efaadc809788fa1f8496.js.map