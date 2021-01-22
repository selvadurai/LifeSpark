(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"139f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("br"),a("Buttons"),a("br"),a("GoalForm")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/goal")}}},[t._v("View Goals")]),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/AddGoal")}}},[t._v("Add Goal")])])},l=[],r=a("2877"),o={},u=Object(r["a"])(o,n,l,!1,null,null,null),c=u.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("form",{on:{submit:function(e){return t.submit()}}},[a("span",[t._v("Goal Type")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.goalType,expression:"data.goalType"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"goalType",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),a("option",[t._v("Financial")]),a("option",[t._v("Health")]),a("option",[t._v("Technolgy")]),a("option",[t._v("Other")])]),a("br"),a("br"),a("span",[t._v("Time Frame")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.time,expression:"data.time"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"time",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),a("option",[t._v("Yearly")]),a("option",[t._v("Monthly")])]),a("br"),a("br"),a("span",[t._v("Title")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.title,expression:"data.title"}],attrs:{type:"text"},domProps:{value:t.data.title},on:{input:function(e){e.target.composing||t.$set(t.data,"title",e.target.value)}}}),a("br"),a("br"),a("span",[t._v("Level Of Diffculty")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.diffculty,expression:"data.diffculty"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"diffculty",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),a("option",[t._v("Easy")]),a("option",[t._v("Medium")]),a("option",[t._v("Hard")])]),a("br"),a("br"),a("span",[t._v("Description")]),a("p",[t._v(t._s(t.data.description))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.description,expression:"data.description"}],attrs:{placeholder:"add multiple lines"},domProps:{value:t.data.description},on:{input:function(e){e.target.composing||t.$set(t.data,"description",e.target.value)}}}),a("br"),a("span",[t._v("Measureable Goal ?")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.measureable,expression:"data.measureable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.data.measureable)?t._i(t.data.measureable,null)>-1:t.data.measureable},on:{change:function(e){var a=t.data.measureable,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,l=t._i(a,n);s.checked?l<0&&t.$set(t.data,"measureable",a.concat([n])):l>-1&&t.$set(t.data,"measureable",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.data,"measureable",i)}}}),a("br"),a("br"),1==t.data.measureable?a("div",[a("span",[t._v("Current Number:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.curNum,expression:"data.curNum"}],attrs:{type:"number"},domProps:{value:t.data.curNum},on:{input:function(e){e.target.composing||t.$set(t.data,"curNum",e.target.value)}}}),a("br"),a("br"),a("span",[t._v("End Number:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.endNum,expression:"data.endNum"}],attrs:{type:"number"},domProps:{value:t.data.endNum},on:{input:function(e){e.target.composing||t.$set(t.data,"endNum",e.target.value)}}}),a("br")]):t._e(),a("span",[t._v("Tags")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.tags,expression:"data.tags"}],attrs:{type:"text"},domProps:{value:t.data.tags},on:{input:function(e){e.target.composing||t.$set(t.data,"tags",e.target.value)}}}),a("br"),a("br"),a("span",[t._v("Due Date:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.dueDate,expression:"data.dueDate"}],attrs:{type:"date"},domProps:{value:t.data.dueDate},on:{input:function(e){e.target.composing||t.$set(t.data,"dueDate",e.target.value)}}}),a("br"),a("br"),a("input",{attrs:{type:"submit",value:"Submit"}})])])},m=[],v=a("bc3a"),p=a.n(v),f={name:"GoalForm",data(){return{data:{goalType:"",title:"",time:"",description:"",diffculty:"",measureable:!1,curNum:0,endNum:0,tags:"",dueDate:null}}},methods:{submit(){var t=new Date,e=t.getFullYear();p.a.post("http://localhost:8888/api/goals",{goalType:this.data.goalType,title:this.data.title,time:this.data.time,description:this.data.description,measureable:this.data.measureable,curNum:this.data.curNum,endNum:this.data.endNum,tags:this.data.tags,dueDate:this.data.dueDate,diffculty:this.data.diffculty,year:e}).then(function(t){console.log("Data Successfully Transfered! ")}.bind(this)),this.$router.push("/goal")}}},_=f,b=Object(r["a"])(_,d,m,!1,null,null,null),h=b.exports,g={name:"AddGoal",components:{Buttons:c,GoalForm:h}},y=g,C=Object(r["a"])(y,s,i,!1,null,null,null);e["default"]=C.exports},"4f9d":function(t,e,a){},"56fb":function(t,e,a){"use strict";a("f7ca")},"66d6":function(t,e,a){"use strict";a("f6a0")},"91aa":function(t,e,a){},"9f35":function(t,e,a){"use strict";a("4f9d")},a92d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("br"),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/goal")}}},[t._v("View Goals")]),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/AddGoal")}}},[t._v("Add Goal")]),a("br"),a("br"),a("vision"),a("br"),t._m(0),a("Yearly")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[a("b",[a("u",[t._v("Yearly Goals")])])])}],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[t._v("Cras justo odio")]),a("li",{staticClass:"list-group-item"},[t._v("Dapibus ac facilisis in")]),a("li",{staticClass:"list-group-item"},[t._v("Morbi leo risus")]),a("li",{staticClass:"list-group-item"},[t._v("Porta ac consectetur ac")]),a("li",{staticClass:"list-group-item"},[t._v("Vestibulum at eros")])])}],r={name:"LongTerm"},o=r,u=a("2877"),c=Object(u["a"])(o,n,l,!1,null,null,null),d=c.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-group"},[a("a",{staticClass:"list-group-item list-group-item-action flex-column align-items-start",attrs:{href:"#"}},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-1"},[t._v("List group item heading")]),a("small",[t._v("3 days ago")])]),a("p",{staticClass:"mb-1"},[t._v("Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")]),a("small",[t._v("Donec id elit non mi porta.")])]),a("a",{staticClass:"list-group-item list-group-item-action flex-column align-items-start",attrs:{href:"#"}},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-1"},[t._v("List group item heading")]),a("small",{staticClass:"text-muted"},[t._v("3 days ago")])]),a("p",{staticClass:"mb-1"},[t._v("Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")]),a("small",{staticClass:"text-muted"},[t._v("Donec id elit non mi porta.")])]),a("a",{staticClass:"list-group-item list-group-item-action flex-column align-items-start",attrs:{href:"#"}},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-1"},[t._v("List group item heading")]),a("small",{staticClass:"text-muted"},[t._v("3 days ago")])]),a("p",{staticClass:"mb-1"},[t._v("Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")]),a("small",{staticClass:"text-muted"},[t._v("Donec id elit non mi porta.")])])])}],p={name:"Monthly"},f=p,_=Object(u["a"])(f,m,v,!1,null,null,null),b=_.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[t._m(0),t._l(t.healthList,(function(e){return a("ul",{staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h6",{staticClass:"mb-1"},[a("b",[a("u",[t._v(t._s(e.title))])])]),a("small",[t._v("Due Date:"+t._s(e.dueDate))])]),a("p",{staticClass:"mb-1"},[t._v(t._s(e.description))])])})),t._m(1),t._l(t.wealthList,(function(e){return a("ul",{staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h6",{staticClass:"mb-1"},[a("b",[a("u",[t._v(t._s(e.title))])])]),a("small",[t._v("Due Date:"+t._s(e.dueDate))])]),a("p",{staticClass:"mb-1"},[t._v(t._s(e.description))])])})),t._m(2),t._l(t.techList,(function(e){return a("ul",{staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h6",{staticClass:"mb-1"},[a("b",[a("u",[t._v(t._s(e.title))])])]),a("small",[t._v("Due Date:"+t._s(e.dueDate))])]),a("p",{staticClass:"mb-1"},[t._v(t._s(e.description))])])})),a("br"),t._m(3),t._l(t.otherList,(function(e){return a("ul",{staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h6",{staticClass:"mb-1"},[a("b",[a("u",[t._v(t._s(e.title))])])]),a("small",[t._v("Due Date:"+t._s(e.dueDate))])]),a("p",{staticClass:"mb-1"},[t._v(t._s(e.description))])])}))],2)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",[a("b",[a("u",[t._v("Health")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",[a("b",[a("u",[t._v("Financial")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",[a("b",[a("u",[t._v("Technology/Career Goal")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",[a("b",[a("u",[t._v("Other")])])])}],y=a("bc3a"),C=a.n(y),x={name:"Yearly",data(){return{wealthList:[],healthList:[],techList:[],otherList:[]}},async created(){C.a.get("http://192.168.0.16:9999/api/goals").then(t=>{const e=t.data;var a,s=new Date,i=s.getFullYear();for(a=0;a<e.length;a++)"Financial"===e[a].goalType&&e[a].year===i&&this.wealthList.push(e[a]),"Health"===e[a].goalType&&e[a].year===i&&this.healthList.push(e[a]),"Technolgy"===e[a].goalType&&e[a].year===i&&this.techList.push(e[a]),"Other"===e[a].goalType&&e[a].year===i&&this.otherList.push(e[a])}).catch(t=>console.log(t))}},D=x,w=(a("9f35"),Object(u["a"])(D,h,g,!1,null,null,null)),$=w.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[a("b",[a("u",[t._v("Vision")])])]),a("p",{staticClass:"card-text"},[a("b",[t._v("To make money, get fit and be the best I can be")])])])}],E={name:"Vision"},L=E,j=(a("56fb"),Object(u["a"])(L,N,T,!1,null,null,null)),G=j.exports,O={name:"Goals",components:{LongTerm:d,Yearly:$,Monthly:b,Vision:G}},k=O,A=(a("66d6"),Object(u["a"])(k,s,i,!1,null,null,null));e["default"]=A.exports},e76e:function(t,e,a){"use strict";a("91aa")},f6a0:function(t,e,a){},f7ca:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"small"},[a("line-chart",{attrs:{"chart-data":t.datacollection}}),a("button",{on:{click:function(e){return t.fillData()}}},[t._v("Randomize")])],1)])},i=[],n=a("2c07"),l={components:{LineChart:n["a"]},data(){return{datacollection:null}},mounted(){this.fillData()},methods:{fillData(){this.datacollection={labels:[this.getRandomInt(),this.getRandomInt()],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[this.getRandomInt(),this.getRandomInt()]},{label:"Data One",backgroundColor:"#f87979",data:[this.getRandomInt(),this.getRandomInt()]}]}},getRandomInt(){return Math.floor(46*Math.random())+5}}},r=l,o=(a("e76e"),a("2877")),u=Object(o["a"])(r,s,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=about.402c225d.js.map