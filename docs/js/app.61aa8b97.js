(function(t){function e(e){for(var s,a,d=e[0],o=e[1],l=e[2],u=0,p=[];u<d.length;u++)a=d[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,d=1;d<i.length;d++){var o=i[d];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={app:0},r=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/project-name/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],o=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var c=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0ff8":function(t,e,i){t.exports=i.p+"img/pic_27_dragdrop.9a19f7af.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("board")],1)},r=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",[t._v("my Trello")]),i("main",[i("p",{staticClass:"info-line"},[t._v("All: "+t._s(t.totalCardCount)+" tasks")]),i("draggable",{staticClass:"list-index",attrs:{list:t.lists,options:{animation:300,handle:".handle"}},on:{end:t.movingList}},[t._l(t.lists,(function(e,s){return i("list",{key:e.id,attrs:{title:e.title,cards:e.cards,listIndex:s},on:{change:t.movingCard}})})),i("list-add")],2)],1)])},d=[],o=i("5530"),l=i("b76a"),c=i.n(l),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{class:t.classList,on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"text-input",attrs:{type:"text",placeholder:"Add new list"},domProps:{value:t.title},on:{focusin:t.startEditing,focusout:t.finishEditing,input:function(e){e.target.composing||(t.title=e.target.value)}}}),t.isEditing||t.titleExists?i("button",{staticClass:"add-button",attrs:{type:"submit",Add:""}},[t._v(" Add ")]):t._e()])},p=[],f={data:function(){return{title:"",isEditing:!1}},computed:{classList:function(){var t=["addlist"];return this.isEditing&&t.push("active"),this.titleExists&&t.push("addable"),t},titleExists:function(){return this.title.length>0}},methods:{addList:function(){this.$store.dispatch("addlist",{title:this.title}),this.title=""},startEditing:function(){this.isEditing=!0},finishEditing:function(){this.isEditing=!1}}},m=f,h=i("2877"),v=Object(h["a"])(m,u,p,!1,null,null,null),b=v.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[i("div",{staticClass:"listheader"},[t._m(0),i("p",{staticClass:"list-title"},[t._v(t._s(t.title))]),i("p",{staticClass:"list-counter"},[t._v("total: "+t._s(t.totalCardList))]),i("div",{staticClass:"deletelist",on:{click:t.removeList}},[t._v("×")])]),i("draggable",{attrs:{group:"cards",list:t.cards,options:{animation:300,handle:".handle"}},on:{end:function(e){return t.$emit("change")}}},[t._l(t.cards,(function(e,s){return i("card",{key:e.id,attrs:{body:e.body,cardIndex:s,listIndex:t.listIndex}})})),i("card-add",{attrs:{listIndex:t.listIndex}})],2)],1)},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"handle"},[s("img",{attrs:{src:i("0ff8"),alt:"",width:"30",height:"30"}})])}],y=(i("a9e3"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{class:t.classList,on:{submit:function(e){return e.preventDefault(),t.addCardToList(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"text-input",attrs:{type:"text",placeholder:"Add new card"},domProps:{value:t.body},on:{focusin:t.startEditing,focusout:t.finishEditing,input:function(e){e.target.composing||(t.body=e.target.value)}}}),t.isEditing||t.bodyExists?i("button",{staticClass:"add-button",attrs:{type:"submit"}},[t._v(" Add ")]):t._e()])}),_=[],C={props:{listIndex:{type:Number,required:!0}},data:function(){return{body:"",isEditing:!1}},computed:{classList:function(){var t=["addcard"];return this.isEditing&&t.push("active"),this.bodyExists&&t.push("addable"),t},bodyExists:function(){return this.body.length>0}},methods:{startEditing:function(){this.isEditing=!0},finishEditing:function(){this.isEditing=!1},addCardToList:function(){this.$store.dispatch("addCardToList",{body:this.body,listIndex:this.listIndex}),this.body=""}}},I=C,L=Object(h["a"])(I,y,_,!1,null,null,null),E=L.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-contena"},[i("div",{staticClass:"card"},[t._m(0),i("button",{staticClass:"close-button",on:{click:t.removeCardFromList}},[t._v("×")]),i("div",{staticClass:"body"},[t._v(" "+t._s(t.body)+" ")])]),i("details-add",{attrs:{cardIndex:t.cardIndex,listIndex:t.listIndex}}),i("Details",{attrs:{cardIndex:t.cardIndex,listIndex:t.listIndex}})],1)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"handle"},[s("img",{attrs:{src:i("0ff8"),alt:"",width:"30",height:"30"}})])}],$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v(t._s(t.details))])])},w=[],T={props:{listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},computed:{details:function(){return this.$store.state.lists[this.listIndex].cards[this.cardIndex]["details"]}}},A=T,N=Object(h["a"])(A,$,w,!1,null,null,null),S=N.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("form",[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.details,expression:"details"}],staticClass:"details",attrs:{type:"text",placeholder:"詳細入力"},domProps:{value:t.details},on:{input:function(e){e.target.composing||(t.details=e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"submit"},on:{click:t.detailsAddToList}},[t._v("追加・編集")])])])},k=[],P={props:{cardIndex:{type:Number,required:!0},listIndex:{type:Number,required:!0}},data:function(){return{details:""}},methods:{detailsAddToList:function(){this.$store.dispatch("detailsAddToList",{details:this.details,listIndex:this.listIndex,cardIndex:this.cardIndex}),this.details=""}}},D=P,F=Object(h["a"])(D,q,k,!1,null,null,null),M=F.exports,J={components:{DetailsAdd:M,Details:S},props:{body:{type:String,required:!0},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},data:function(){return{details_notifi:""}},methods:{removeCardFromList:function(){confirm("本当にこのカードを削除しますか？")&&this.$store.dispatch("removeCardFromList",{cardIndex:this.cardIndex,listIndex:this.listIndex})}}},B=J,z=Object(h["a"])(B,O,j,!1,null,null,null),G=z.exports,H={components:{draggable:c.a,CardAdd:E,Card:G},props:{title:{type:String,required:!0},cards:{type:Array,required:!0},listIndex:{type:Number,required:!0}},computed:{totalCardList:function(){return this.cards.length}},methods:{removeList:function(){confirm("本当にこのリストを削除しますか？")&&this.$store.dispatch("removelist",{listIndex:this.listIndex})}}},K=H,Q=Object(h["a"])(K,g,x,!1,null,null,null),R=Q.exports,U=i("2f62"),V={components:{draggable:c.a,ListAdd:b,List:R},computed:Object(o["a"])(Object(o["a"])({},Object(U["b"])(["lists"])),{},{totalCardCount:function(){return this.$store.getters.totalCardCount}}),methods:{movingCard:function(){this.$store.dispatch("updateList",{lists:this.lists})},movingList:function(){this.$store.dispatch("updateList",{lists:this.lists})}}},W=V,X=Object(h["a"])(W,a,d,!1,null,null,null),Y=X.exports,Z={name:"app",components:{Board:Y}},tt=Z,et=Object(h["a"])(tt,n,r,!1,null,null,null),it=et.exports;i("d81d"),i("a434");s["a"].use(U["a"]);var st=localStorage.getItem("trello-lists"),nt=new U["a"].Store({state:{lists:st?JSON.parse(st):[{title:"Backlog",cards:[{body:"English",details:"詳細"},{body:"Mathematics",details:"詳細"}]},{title:"Todo",cards:[{body:"Science",details:"詳細"}]},{title:"Doing",cards:[]}]},mutations:{addlist:function(t,e){t.lists.push({title:e.title,cards:[]})},removelist:function(t,e){t.lists.splice(e.listIndex,1)},addCardToList:function(t,e){t.lists[e.listIndex].cards.push({body:e.body})},removeCardFromList:function(t,e){t.lists[e.listIndex].cards.splice(e.cardIndex,1)},updateList:function(t,e){t.lists=e.lists},detailsAddToList:function(t,e){t.lists[e.listIndex].cards[e.cardIndex]["details"]=e.details}},actions:{addlist:function(t,e){t.commit("addlist",e)},removelist:function(t,e){t.commit("removelist",e)},addCardToList:function(t,e){t.commit("addCardToList",e)},removeCardFromList:function(t,e){t.commit("removeCardFromList",e)},updateList:function(t,e){t.commit("updateList",e)},detailsAddToList:function(t,e){t.commit("detailsAddToList",e)}},getters:{totalCardCount:function(t){var e=0;return t.lists.map((function(t){return e+=t.cards.length})),e}}});nt.subscribe((function(t,e){localStorage.setItem("trello-lists",JSON.stringify(e.lists))}));var rt=nt;i("6672");s["a"].config.productionTip=!1,new s["a"]({store:rt,render:function(t){return t(it)}}).$mount("#app")},6672:function(t,e,i){}});
//# sourceMappingURL=app.61aa8b97.js.map