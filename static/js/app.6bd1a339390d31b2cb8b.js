webpackJsonp([1],{"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.4f2d707.png"},D1eD:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("D1eD")},null,null).exports,s=n("/ocq"),l=n("mvHQ"),i=n.n(l),u=n("kPrG"),c={props:{value:{type:Number,required:!0}},data:function(){return{tweeningValue:0}},watch:{value:function(t,e){this.tween(e,t)}},mounted:function(){this.tween(0,this.value)},methods:{tween:function(t,e){var n=this;new u.Tween({tweeningValue:t}).to({tweeningValue:e},500).onUpdate(function(t){n.tweeningValue=t.tweeningValue.toFixed(0)}).start(),function t(){u.update()&&requestAnimationFrame(t)}()}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"font-size":"80px"}},[n("span",[t._v(t._s(t.tweeningValue))])])},staticRenderFns:[]},d={components:{animatedInteger:n("VU/8")(c,h,!1,null,null,null).exports},created:function(){this.count=this.$route.params.count,this.initCount()},data:function(){return{bgImg:n("dZ/S"),rankName:"三等奖",selected:3,count:1,selectedList:[{label:"三等奖",value:3,count:40},{label:"二等奖",value:2,count:10},{label:"一等奖",value:1,count:3},{label:"特等奖",value:0,count:1}],lotteryState:!1,randomIntervalId:null,animatedNum:1,showNumCls:"lotteryShow-40",lotteryArr:[],countArr:[],times:[1,1,1,1],allLocCount:[]}},methods:{initCount:function(){for(var t=1;t<=this.count;t++)this.countArr.push(t)},handleLottery:function(){var t=this,e=this.selectedList.filter(function(e){return e.value==t.selected})[0];this.times[e.value]<=0?this.$message.error("只能抽取一次"+e.label):(this.rankName=e.label,this.randomIntervalId=setInterval(function(){t.animatedNum=function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}(1,t.count)},500),this.lotteryState=!this.lotteryState)},handlePause:function(){var t=this,e=this.selectedList.filter(function(e){return e.value==t.selected})[0];this.times[e.value]--;var n,a=e.count;this.showNumCls=40==(n=a)?"lotteryShow-40":10==n?"lotteryShow-10":3==n?"lotteryShow-3":"lotteryShow-1";var o=function(t,e){var n=e.length,a=[];do{var o=parseInt(Math.random()*n);a.indexOf(o)<0&&a.push(o)}while(a.length!=t);var r=[],s=[];return e.forEach(function(t,e){a.indexOf(e)>=0?r.push(t):s.push(t)}),{lotteryArr:r,countArr:s}}(a,this.countArr);this.countArr=o.countArr,this.lotteryArr=o.lotteryArr,this.allLocCount.push(this.lotteryArr),console.log(this.countArr,this.lotteryArr,this.times,this.allLocCount),localStorage.setItem("allLocCount",i()(this.allLocCount)),localStorage.setItem("noLocCount",i()(this.countArr)),clearInterval(this.randomIntervalId),this.randomIntervalId=null,this.lotteryState=!this.lotteryState}}};var v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"content",style:{backgroundImage:"url("+t.bgImg+")"}},[a("img",{staticClass:"logo",attrs:{src:n("7Otq")}}),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"box-header"},[a("h1",{directives:[{name:"show",rawName:"v-show",value:0!=t.lotteryArr.length,expression:"lotteryArr.length!=0"}]},[t._v(t._s(t.rankName)+"中奖名单")])]),t._v(" "),a("div",{staticClass:"box-content"},[t.lotteryState?a("div",{staticClass:"lotteryShow-ramdom"},[a("animated-integer",{attrs:{value:t.animatedNum}})],1):a("div",{staticClass:"lotteryShow",class:t.showNumCls},t._l(t.lotteryArr,function(e){return a("span",{key:e,staticClass:"showNum"},[a("em",[a("span",[t._v(t._s(e))])])])}))]),t._v(" "),a("div",{staticClass:"box-footer"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.selectedList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("div",{staticClass:"button"},[t.lotteryState?a("el-button",{attrs:{type:"primary"},on:{click:t.handlePause}},[t._v("停止")]):a("el-button",{attrs:{type:"primary"},on:{click:t.handleLottery}},[t._v("抽奖")])],1)],1)])])])},staticRenderFns:[]};var m=n("VU/8")(d,v,!1,function(t){n("Zeiv")},"data-v-809a184e",null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"center"},[n("el-input",{staticClass:"input",attrs:{placeholder:"请输入总人数"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handler(e)}},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}}),t._v(" "),n("el-button",{attrs:{type:"primary",plain:""},on:{click:t.handler}},[t._v("确定抽奖总人数")])],1)])},staticRenderFns:[]};var f=n("VU/8")({data:function(){return{count:0}},methods:{handler:function(){this.count>55&&this.count<=150?this.$router.push({name:"Main",params:{count:this.count}}):this.$message.error("请输入有效的抽奖人数")}}},p,!1,function(t){n("zqDO")},"data-v-5e94133b",null).exports,_={data:function(){return{allCount:[],noCount:[]}},methods:{transform:function(t){return 1==t?"特":3==t?"一":10==t?"二":"三"}},mounted:function(){this.allCount=JSON.parse(localStorage.getItem("allLocCount")),this.noCount=JSON.parse(localStorage.getItem("noLocCount")),console.log(this.allCount,this.noCount)}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show"},[n("h1",[t._v("获奖一览")]),t._v(" "),t._l(t.allCount,function(e,a){return n("div",{key:a},[n("h2",[t._v(t._s(t.transform(e.length))+"等奖")]),t._v(" "),n("div",{staticClass:"box"},t._l(e,function(e){return n("span",{key:e},[t._v(t._s(e))])}))])}),t._v(" "),n("h1",[t._v("未获奖")]),t._v(" "),n("div",{staticClass:"box"},t._l(t.noCount,function(e){return n("span",{key:e},[t._v(t._s(e))])}))],2)},staticRenderFns:[]};var y=n("VU/8")(_,g,!1,function(t){n("VDeR")},"data-v-6ab803fe",null).exports;a.default.use(s.a);var C=new s.a({routes:[{path:"/",name:"login",component:f},{path:"/login",name:"Login",component:f},{path:"/main/:count",name:"Main",component:m},{path:"/show",name:"Show",component:y}]}),w=n("mwE6"),b=n.n(w);n("cU5d");a.default.config.productionTip=!1,a.default.use(b.a),new a.default({el:"#app",router:C,components:{App:r},template:"<App/>"})},VDeR:function(t,e){},Zeiv:function(t,e){},cU5d:function(t,e){},"dZ/S":function(t,e,n){t.exports=n.p+"static/img/bg.1b04cac.jpg"},zqDO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6bd1a339390d31b2cb8b.js.map