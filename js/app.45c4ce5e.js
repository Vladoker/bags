(function(t){function e(e){for(var s,c,n=e[0],o=e[1],l=e[2],p=0,d=[];p<n.length;p++)c=n[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},r={app:0},i=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3066:function(t,e,a){"use strict";var s=a("bb14"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("TopBlock"),a("cloud",{attrs:{count:5}}),a("h1",[a("vue-typer",{attrs:{text:"Bags","pre-type-delay":1e3,"type-delay":300,repeat:0}}),a("span",{staticClass:"small"},[a("vue-typer",{attrs:{text:"and","pre-type-delay":3e3,"type-delay":300,repeat:0}})],1),a("vue-typer",{staticClass:"titleProduct",attrs:{text:["Backpacks","Clutches"],"pre-type-delay":t.typedSeconds,"type-delay":200,eraseStyle:t.eraseStyle},on:{typed:t.onTyped}})],1)],1),a("main",[a("section",{staticClass:"bags"},[a("h2",[t._v("Сумки")]),a("div",{staticClass:"container"},[a("div",{staticClass:"cards"},t._l(t.getBags,(function(e,s){return a("CardInfo",{key:s+e.price,attrs:{cover:e.cover,price:e.price,photos:e.photos,size:e.size},on:{clickCart:t.showCart,buy:t.buy,remove:t.remove}})})),1),a("b-pagination",{attrs:{id:"paginationBags",pills:"","total-rows":t.countPageBags,size:""},model:{value:t.curentPageBags,callback:function(e){t.curentPageBags=e},expression:"curentPageBags"}})],1)]),a("section",{staticClass:"backpacks"},[a("h2",[t._v("Рюкзаки")]),a("div",{staticClass:"container"},[a("div",{staticClass:"cards"},t._l(t.getBackpacks,(function(e,s){return a("CardInfo",{key:s+e.price+e.cover,attrs:{cover:e.cover,price:e.price,photos:e.photos,size:e.size},on:{clickCart:t.showCart,buy:t.buy,remove:t.remove}})})),1),a("b-pagination",{attrs:{id:"paginationBackpacks",pills:"","total-rows":t.countPageBackpaks,size:""},model:{value:t.curentPageBackpacks,callback:function(e){t.curentPageBackpacks=e},expression:"curentPageBackpacks"}})],1)])]),a("footer",[a("CarouselColorText")],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.showProduct,expression:"!showProduct"}],attrs:{id:"vk_community_messages"}}),a("Basket",{attrs:{total:t.total,counter:t.count,products:t.basketProducts},on:{plusCount:t.plusCount,minusCount:t.minusCount,chengeCount:t.chengeCount,toOrder:t.toOrder}}),a("b-modal",{attrs:{id:"modal-scrollable",scrollable:"",title:"Оформите заказ","ok-title":"Send","ok-only":""},on:{ok:function(e){return e.preventDefault(),t.validateForm(e)}},model:{value:t.order,callback:function(e){t.order=e},expression:"order"}},[a("form",{staticClass:"modalForm",attrs:{method:"post","accept-charset":"UTF-8"},on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[a("label",[t._v(" Name "),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),a("br"),a("label",[t._v(" Email "),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),a("br"),a("label",[t._v(" Phone "),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",attrs:{id:"phoneForm",type:"number",name:"number",required:""},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}})]),a("button",{ref:"buttonSubmit",attrs:{hidden:""}})])]),a("b-modal",{attrs:{id:"modal-xl",size:"xl","hide-title":"","hide-footer":""},on:{hidden:function(e){t.opacityOwl=0}},model:{value:t.showProduct,callback:function(e){t.showProduct=e},expression:"showProduct"}},[a("carousel",{staticClass:"owl_show_clider",attrs:{loop:!1,nav:!0,items:1,center:!0}},t._l(t.selectProduct.photos,(function(e,s){return a("img",{key:s,style:{opacity:t.opacityOwl},attrs:{src:e}})})),0)],1)],1)},i=[],c=(a("4de4"),a("a434"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"background-wrap"}},t._l(t.count,(function(t){return a("div",{key:t,class:"x"+t},[a("div",{staticClass:"cloud"})])})),0)}),n=[],o=(a("a9e3"),{name:"Cloud",props:{count:Number}}),l=o,u=(a("fe74"),a("2877")),p=Object(u["a"])(l,c,n,!1,null,"5f3912ca",null),d=p.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"waveWrapper waveAnimation"},[a("div",{staticClass:"waveWrapperInner bgTop"},[a("div",{staticClass:"wave waveTop",staticStyle:{"background-image":"url('./img/wave-top.png')"}})]),a("div",{staticClass:"waveWrapperInner bgMiddle"},[a("div",{staticClass:"wave waveMiddle",staticStyle:{"background-image":"url('./img/wave-mid.png')"}})]),a("div",{staticClass:"waveWrapperInner bgBottom"},[a("div",{staticClass:"wave waveBottom",staticStyle:{"background-image":"url('./img/wave-bot.png')"}})])])}],f={},h=f,g=(a("efff"),Object(u["a"])(h,v,m,!1,null,"314a42ce",null)),b=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"top",style:t.generatePhoto,on:{click:t.showCart}}),a("div",{staticClass:"bottom",class:{clicked:t.clicked}},[a("div",{staticClass:"left"},[a("div",{staticClass:"details"},[a("p",[t._v("MDL "+t._s(t.price))])]),a("div",{staticClass:"buy",on:{click:t.buy}},[a("fa-icon",{staticClass:"cart-plust",attrs:{name:"cart-plus",scale:"2.4"}})],1)]),a("div",{staticClass:"right"},[a("div",{staticClass:"done",on:{click:function(e){return t.transformClick(e.target)}}},[a("fa-icon",{attrs:{name:"check",scale:"2.2"}})],1),t._m(0),a("div",{staticClass:"remove",on:{click:t.remove}},[a("fa-icon",{attrs:{name:"times",scale:"2.2"}})],1)])])]),a("div",{staticClass:"inside"},[a("div",{staticClass:"icon"},[a("fa-icon",{attrs:{name:"info-circle",scale:"1.5"}})],1),a("div",{staticClass:"contents"},[a("table",[t._m(1),a("tr",[a("td",[t._v(t._s(t.width))]),a("td",[t._v(t._s(t.height))])])])])])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("p",[t._v("Добавлено в корзину")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Width")]),a("th",[t._v("Height")])])}],y=(a("e99d"),a("280f"),a("c369"),a("c52b"),a("0874")),_={components:{FaIcon:y["a"]},props:{cover:String,price:Number,width:{type:String,default:"0"},height:{type:String,default:"0"},photos:{type:Array,default:[]},size:{type:String,default:"cover"}},data:function(){return{clicked:!1}},computed:{generatePhoto:function(){return{background:"url(".concat(this.cover,") no-repeat center center"),backgroundSize:this.size}},objectCart:function(){return{cover:this.cover,count:1,price:this.price,photos:this.photos}}},methods:{showCart:function(t){this.$emit("clickCart",this.objectCart)},buy:function(t){this.clicked=!0,this.$emit("buy",this.objectCart)},remove:function(t){this.clicked=!1,this.$emit("remove",this.objectCart)},transformClick:function(t){t.style.transform="translate-y(-100%)"}}},w=_,P=(a("dbeb"),Object(u["a"])(w,C,k,!1,null,"1664a796",null)),x=P.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"cart-drawer-push",class:{"cart-drawer-pushtoleft":t.activeClass}},[a("div",{staticClass:"cart-drawer cart-drawer-right",class:{"cart-drawer-open":t.activeClass}},[a("div",{staticClass:"close-btn",class:{active:t.activeClass},on:{click:function(e){t.activeClass=!t.activeClass}}},[a("svg",{staticClass:"close-icon",attrs:{version:"1.1",x:"0px",y:"0px",width:"18px",height:"18px",viewBox:"312 387 18 18","enable-background":"new 312 387 18 18","xml:space":"preserve"}},[a("path",{attrs:{fill:"#E55959",d:"M312.54,404.46c0.36,0.36,0.84,0.54,1.26,0.54c0.42,0,0.9-0.18,1.26-0.54l5.94-5.94l5.94,5.94\n              c0.36,0.36,0.84,0.54,1.26,0.54c0.42,0,0.9-0.18,1.26-0.54c0.72-0.72,0.72-1.86,0-2.52l-5.94-5.94l5.94-5.94\n              c0.72-0.72,0.72-1.86,0-2.52c-0.72-0.72-1.86-0.72-2.52,0l-5.94,5.94l-5.94-5.94c-0.72-0.72-1.86-0.72-2.52,0\n              c-0.72,0.72-0.72,1.86,0,2.52l5.94,5.94l-5.94,5.94C311.82,402.66,311.82,403.8,312.54,404.46z"}})])]),a("div",{staticClass:"cart-content"},[a("table",{staticClass:"table "},[a("thead"),a("tbody",t._l(t.products,(function(e,s){return a("tr",{key:s+e.price},[a("td",[a("div",{staticClass:"mini-cover",style:{background:"url("+e.cover+") center / cover "}})]),a("td",[a("div",{staticClass:"calcProd"},[a("span",{staticClass:"plus",on:{click:function(e){return t.plusCount(s)}}},[t._v("+")]),a("input",{attrs:{disabled:"",type:"number"},domProps:{value:e.count},on:{change:function(e){return t.chengeCount(e.target.value,s)}}}),a("span",{staticClass:"minus",on:{click:function(e){return t.minusCount(s)}}},[t._v("-")])])]),a("td",[t._v(t._s(e.price*e.count)+" MDL")])])})),0)]),a("div",{staticClass:"selectedItem"},[a("span",{staticClass:"allCou"},[t._v(" "+t._s("Количество: "+t.counter)+" ")]),a("span",{staticClass:"AllTotal"},[t._v(" "+t._s(t.total+" MDL")+" ")])]),a("button",{staticClass:"toOrder",on:{click:t.toOrder}},[t._v("Заказать")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.activeClass&&0!=t.counter,expression:"!activeClass && counter != 0"}],staticClass:"cart-basket",on:{click:function(e){t.activeClass=!t.activeClass}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.total,expression:"total != 0"}],staticClass:"basket-total"},[t._v(" = "+t._s(t.total)+" MDL ")]),a("svg",{staticClass:"icon-basket",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"}},[a("descr",{staticStyle:{color:"#bebebe"}},[t._v("Cart")]),a("path",{attrs:{fill:"none","stroke-width":"2","stroke-miterlimit":"10",d:"M44 18h10v45H10V18h10z"}}),a("path",{attrs:{fill:"none","stroke-width":"2","stroke-miterlimit":"10",d:"M22 24V11c0-5.523 4.477-10 10-10s10 4.477 10 10v13"}})],1),a("div",{staticClass:"basket-counter"},[t._v(" "+t._s(t.counter)+" ")])])])},j=[],O={props:{total:{type:Number,default:0},counter:{type:Number,default:0},products:{type:Array,default:[]}},data:function(){return{activeClass:!1}},methods:{plusCount:function(t){this.$emit("plusCount",t)},minusCount:function(t){this.$emit("minusCount",t)},chengeCount:function(t,e){this.$emit("chengeCount",{count:t,index:e})},toOrder:function(){this.$emit("toOrder")}}},S=O,$=(a("3066"),Object(u["a"])(S,B,j,!1,null,"4f685909",null)),z=$.exports,M=a("cc6b"),T=a.n(M),E=a("6aac"),N=a("26d2"),I=a("e956"),D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"masthead-image",attrs:{id:"master-container"}},[a("div",{staticClass:"content center"},[a("h1",{attrs:{id:"master"}},[a("div",[t._v("У нас в продаже")]),a("div",{attrs:{id:"master-container-scroller"}},[a("div",{staticClass:"master-container-scroller_item"},[a("span",{staticClass:"cta-link"},[t._v("Сумки для школы")])]),a("div",{staticClass:"master-container-scroller_item"},[a("span",{staticClass:"cta-link"},[t._v("Рюкзаки")])]),a("div",{staticClass:"master-container-scroller_item"},[a("span",{staticClass:"cta-link"},[t._v("Походный рюкзак")])]),a("div",{staticClass:"master-container-scroller_item"},[a("span",{staticClass:"cta-link"},[t._v("Клатчи")])]),a("div",{staticClass:"master-container-scroller_item"},[a("span",{staticClass:"cta-link"},[t._v("Сумки для компьютера")])]),a("div",{staticClass:"master-container-scroller_item"},[a("span",{staticClass:"cta-link"},[t._v("Кейс для документов")])]),a("div",{staticClass:"master-container-scroller_item"},[a("span",{staticClass:"cta-link"},[t._v("Сумки для спорта")])]),a("div",{staticClass:"master-container-scroller_item"},[a("span",{staticClass:"cta-link"},[t._v("Сумки в путешествия")])]),a("div",{staticClass:"master-container-scroller_item"},[a("span",{staticClass:"cta-link"},[t._v("Сумки на колёсиках")])]),a("div",{staticClass:"master-container-scroller_item"})]),a("div",[t._v("....")])])])])])}],W=(a("a25b"),{}),V=Object(u["a"])(W,D,F,!1,null,"3632902c",null),A=V.exports,L=a("bc3a"),J=a.n(L),q=(VK.Widgets.CommunityMessages("vk_community_messages",196467044,{disableExpandChatSound:"1",disableButtonTooltip:"1"}),{name:"app",components:{cloud:d,TopBlock:b,carousel:T.a,CardInfo:x,Basket:z,BModal:E["a"],BPagination:N["a"],VueTyper:I["VueTyper"],CarouselColorText:A},data:function(){return{count:0,total:0,opacityOwl:0,curentPageBags:1,curentPageBackpacks:1,typedSeconds:4e3,order:!1,showProduct:!1,selectProduct:{},form:{name:"",email:"",phone:""},products:[{cover:"./img/cards/1.jpg",price:240,photos:[],type:"bag"},{cover:"./img/cards/2.jpg",price:330,photos:["./img/slider/phone.jpg","./img/slider/phone1.jpg","./img/slider/phone2.jpg"],type:"bag"},{cover:"./img/cards/3.jpg",price:500,photos:[],type:"bag"},{cover:"./img/cards/4.jpg",price:250,photos:[],type:"bag"},{cover:"./img/cards/5.jpg",price:600,photos:[],type:"bag"},{cover:"./img/cards/6.jpg",price:380,photos:[],type:"bag"},{cover:"./img/cards/7.jpg",price:650,photos:[],type:"bag"},{cover:"./img/cards/8.jpg",price:420,photos:[],size:"100%",type:"bag"},{cover:"./img/test/1.jpg",price:240,photos:[],size:"140%",type:"backpack"},{cover:"./img/test/2.jpg",price:330,photos:["./img/slider/laptop_canvas_black_2.jpg","./img/slider/Screenshot_1.png"],size:"140%",type:"backpack"},{cover:"./img/test/3.jpg",price:500,photos:[],size:"140%",type:"backpack"},{cover:"./img/test/4.jpg",price:250,photos:[],size:"140%",type:"backpack"},{cover:"./img/test/5.jpg",price:600,photos:[],size:"140%",type:"backpack"}],basketProducts:[],eraseStyle:"select-all"}},methods:{showCart:function(t){var e=this;this.selectProduct=t,this.showProduct=!0,setTimeout((function(){return e.opacityOwl=1}),1e3)},buy:function(t){this.total+=t.price*t.count,this.count++,this.basketProducts.push(t)},remove:function(t){for(var e=0;e<this.basketProducts.length;e++)this.basketProducts[e]==t&&(this.total-=t.price*t.count,this.count-=t.count,t.count=1,this.basketProducts.splice(e,1))},plusCount:function(t){var e=this.basketProducts[t];e.count++,this.count++,this.total+=e.price},minusCount:function(t){var e=this.basketProducts[t];e.count>1?(e.count--,this.count--,this.total-=e.price):this.remove(e)},chengeCount:function(t){this.basketProducts[t.index]},toOrder:function(){this.count>=1&&(this.order=!0)},validateForm:function(){this.$refs.buttonSubmit.click()},send:function(){var t={name:this.form.name,email:this.form.email,phone:this.form.phone,basket:this.basketProducts};J.a.post("/api/send.php",JSON.stringify(t)).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)}))},onTyped:function(){this.typedSeconds=1e3;var t=["backspace","select-back","select-all"],e=Math.floor(3*Math.random());this.eraseStyle=t[e]},paginationProduct:function(t){var e=[];if(1==this.curentPageBackpacks)for(var a=0;a<t.length;a++){if(8==a)break;e.push(t[a])}else if(2==this.curentPageBackpacks)for(var s=8;s<t.length;s++){if(16==s)break;e.push(t[s])}else if(3==this.curentPageBackpacks)for(var r=16;r<t.length;r++){if(24==r)break;e.push(t[r])}return e},generationPage:function(t){return 20*Math.ceil(t.length/8)}},computed:{filterBackpacks:function(){return this.products.filter((function(t){if("backpack"==t.type)return t}))},getBackpacks:function(){return this.paginationProduct(this.filterBackpacks)},countPageBackpaks:function(){return this.generationPage(this.filterBackpacks)},filterBags:function(){return this.products.filter((function(t){if("bag"==t.type)return t}))},getBags:function(){return this.paginationProduct(this.filterBags)},countPageBags:function(){return this.generationPage(this.filterBags)}}}),H=q,K=(a("5c0b"),Object(u["a"])(H,r,i,!1,null,null,null)),U=K.exports;a("f9e3"),a("2dd8");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(U)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"791f":function(t,e,a){},"9c0c":function(t,e,a){},a25b:function(t,e,a){"use strict";var s=a("ae3b"),r=a.n(s);r.a},ae3b:function(t,e,a){},b17d:function(t,e,a){},bb14:function(t,e,a){},dbeb:function(t,e,a){"use strict";var s=a("791f"),r=a.n(s);r.a},dc56:function(t,e,a){},efff:function(t,e,a){"use strict";var s=a("dc56"),r=a.n(s);r.a},fe74:function(t,e,a){"use strict";var s=a("b17d"),r=a.n(s);r.a}});