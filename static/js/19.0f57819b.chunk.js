(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[19],{382:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a(69),r=a.n(n),o=a(160),i=r.a.findDOMNode(document.getElementById("page-load"));function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get".toLocaleLowerCase(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s();var n={},r={},i="";if(e==="file".toLocaleLowerCase()){if(e="post",a instanceof Object)for(var c in i=new FormData,a)i.append(c,a[c]);n={method:e,body:i}}else if(e==="get".toLocaleLowerCase())n={method:e};else{if(r={"Content-Type":"application/x-www-form-urlencoded"},a instanceof Object){for(var u in a)i+="&".concat(u,"=").concat(encodeURIComponent(a[u]));i=i.slice(1)}n={method:e,headers:r,body:i}}return Object(o.a)(t,n).then((function(t){return l(),t.json()}))}function s(){i.style.display="block"}function l(){i.style.display="none"}},386:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return l})),a.d(e,"d",(function(){return u})),a.d(e,"c",(function(){return d}));var n=a(390),r=a.n(n),o=a(388),i=a(7),c=a(382);function s(){r.a.init({offset:100,throttle:0})}function l(t,e){t=t||window.location.search,e=e||window.location.hash;var a=function(t,e){if(t){var a={};return t.replace(e,(function(t,e,n,r){a[e]=r})),a}};return{search:a(t,new RegExp("([^?=&]+)(=([^&]*))?","g"))||{},hash:a(e,new RegExp("([^#=&]+)(=([^&]*))?","g"))||{}}}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;setTimeout((function(){document.body.scrollTop=t,document.documentElement.scrollTop=t}),500)}function d(t){var e=i.a.baseUrl+"/api/home/user/safe?token="+i.a.token;Object(c.a)(e,"post",{uid:t.state.user.uid,auth_token:t.state.user.authToken}).then((function(e){200!==e.code&&(t.dispatch(o.a.user.outLogin()),t.dispatch(o.a.cart.clearCart()),t.history.replace(i.a.path+"login/index"))}))}},387:function(t,e,a){"use strict";var n=a(52),r=a(53),o=a(55),i=a(54),c=a(1),s=a.n(c),l=a(37),u=a(7),d=a(389),m=a.n(d),h=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"goBack",value:function(){this.props.location.pathname===u.a.path+"address/index"?this.props.history.replace(u.a.path+"balance/index"):this.props.history.goBack()}},{key:"getClick",value:function(){this.props.onClickRightBtn()}},{key:"render",value:function(){return s.a.createElement("div",{className:m.a["sub-header"]},s.a.createElement("div",{className:m.a.back,onClick:this.goBack.bind(this)}),s.a.createElement("div",{className:m.a.title},this.props.title),s.a.createElement("div",{className:""!==this.props["right-text"]?m.a["right-btn"]:"hide",onClick:this.getClick.bind(this)},this.props["right-text"]))}}]),a}(s.a.Component);e.a=Object(l.g)(h)},388:function(t,e,a){"use strict";var n={};a.r(n),a.d(n,"addHistoryKeywords",(function(){return i}));var r={};a.r(r),a.d(r,"addCart",(function(){return c})),a.d(r,"delItem",(function(){return s})),a.d(r,"checkItem",(function(){return l})),a.d(r,"setAllChecked",(function(){return u})),a.d(r,"incAmount",(function(){return d})),a.d(r,"decAmount",(function(){return m})),a.d(r,"changeAmount",(function(){return h})),a.d(r,"clearCart",(function(){return f}));var o={};function i(t){return{type:"addHk",data:t}}function c(t){return{type:"addCart",data:t}}function s(t){return{type:"delItem",data:t}}function l(t){return{type:"checkItem",data:t}}function u(t){return{type:"allItem",data:t}}function d(t){return{type:"incAmount",data:t}}function m(t){return{type:"decAmount",data:t}}function h(t){return{type:"changeAmount",data:t}}function f(t){return{type:"clearCart",data:t}}function p(t){return{type:"login",data:t}}function g(){return{type:"outLogin",data:{}}}a.r(o),a.d(o,"login",(function(){return p})),a.d(o,"outLogin",(function(){return g}));e.a={hk:n,cart:r,user:o}},389:function(t,e,a){t.exports={"sub-header":"_1tYQSWE0eNM6Iu_B_jiJFD",back:"_2Lzz8D_AeNWRjPyUrH2_S2",title:"_1sWYJVYekCdrxBAi3kEm3p","right-btn":"_1UbjrHkAJM5t8wjVZqephO"}},390:function(t,e,a){var n,r;r=document,void 0===(n=function(){return function(t){var e,a,n,r,o,i={},c=function(){},s=function(t,e){if(function(t){return null===t.offsetParent}(t))return!1;var a=t.getBoundingClientRect();return a.right>=e.l&&a.bottom>=e.t&&a.left<=e.r&&a.top<=e.b},l=function(){(r||!a)&&(clearTimeout(a),a=setTimeout((function(){i.render(),a=null}),n))};return i.init=function(a){var s=(a=a||{}).offset||0,u=a.offsetVertical||s,d=a.offsetHorizontal||s,m=function(t,e){return parseInt(t||e,10)};e={t:m(a.offsetTop,u),b:m(a.offsetBottom,u),l:m(a.offsetLeft,d),r:m(a.offsetRight,d)},n=m(a.throttle,250),r=!1!==a.debounce,o=!!a.unload,c=a.callback||c,i.render(),document.addEventListener?(t.addEventListener("scroll",l,!1),t.addEventListener("load",l,!1)):(t.attachEvent("onscroll",l),t.attachEvent("onload",l))},i.render=function(){for(var a,n,r=document.querySelectorAll("img[data-echo], [data-echo-background]"),l=r.length,u={l:0-e.l,t:0-e.t,b:(t.innerHeight||document.documentElement.clientHeight)+e.b,r:(t.innerWidth||document.documentElement.clientWidth)+e.r},d=0;l>d;d++)n=r[d],s(n,u)?(o&&n.setAttribute("data-echo-placeholder",n.src),null!==n.getAttribute("data-echo-background")?n.style.backgroundImage="url("+n.getAttribute("data-echo-background")+")":n.src=n.getAttribute("data-echo"),o||(n.removeAttribute("data-echo"),n.removeAttribute("data-echo-background")),c(n,"load")):o&&(a=n.getAttribute("data-echo-placeholder"))&&(null!==n.getAttribute("data-echo-background")?n.style.backgroundImage="url("+a+")":n.src=a,n.removeAttribute("data-echo-placeholder"),c(n,"unload"));l||i.detach()},i.detach=function(){document.removeEventListener?t.removeEventListener("scroll",l):t.detachEvent("onscroll",l),clearTimeout(a)},i}(r)}.call(e,a,e,t))||(t.exports=n)},400:function(t,e,a){t.exports=a.p+"static/media/lazyImg.639beef7.jpg"},550:function(t,e,a){t.exports={page:"_1iJLW8vNsbft_2WImlDOCF",main:"_3-BM80k7ZQ_HAsk_ONGvr-",ordernum:"_1so92bN2DGSGIJbak1jI1E",second:"_3FumLUOFvgRV7UzX8fVUFJ","address-wrap":"_3s4GSuUOd0_wzA8CVtnlxi",name:"_1-j0o-tZiKm73_CBTqpkPf",cellphone:"_3hpYlWgutw4ft27QFc_Q22",address:"_3lNfJMnfD_zcrt6Y4ymHTy","goods-list":"_2FPPenEPBtyGuIwWxUSrQn",image:"_3776qAkvZUPMktsMz4DPwS","goods-info":"LBRgKS_Rnr2G5XTRT5Ib3",price:"OxN-lcwHpWEyKDt6CMddu",title:"_ddHzq3UlvQUT-0der50n",attr:"_27re5Oq7R0QuJo7GRC88_y",amount:"_3g_Mko2Xf3_9jiLFp1Q-9V","order-status":"Jio5Ja5M7Bg4Jr8poGV5x","total-wrap":"_1TDHjk_4yyToCnVCwz4eFE",total:"_2qwevERg1K1wSoqS70j8lh","true-total":"_1Uob0Ol2wKhcIglB7lAuKa","order-time":"_3o3l8qDwQQ2dHFvMztzQSR"}},551:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHCklEQVR4Xu2af4xVxRXHP+e+hYXWhcgCUmXf/UVMbWtU0rQm1bQ0FhObVjdBa/FH0daaWCI0rVRiiQWpv01DqekPihjLtik2qCkateofxtjGpJK0Nq2V++OxC0VAGqSIC/vuaWb3biFElnffnQclu/PfZuec8z2fOzNv5swIo7zJKM+fMQBjI2CUExibAqN8AIwtgidlCuzgjA8fYOI0YEYFZ6ANdn6EeIfAwRM9Ik8YgF5mnpXRfo3CAuCcD0pU0dccZL1Df08XfXtOBIyWA+gjOHsAlgFfBakMJaV1kLcV3SZIm6JnCkwHGdSjcFDQtRUO/rCLvm2tBNEyAAqVlOAhgYUmcYV+gQ0KG6H+rE/6/pGJ7WJqxwEmX5ahVwLdII4B4aB3u8TLWwWhJQD6OKvzEO1PCHJx/kWfaidbdCZJrZFEasz6uJL9HOQz+YjZNIH9V8/g7f2N2BfpYx1ALzMn1hn/GsgnQA8Ier1L8rsioob7poR3Ad8fgqgve8RzBLJmfB3LxjqAlPAJ4ArQPRV0ThfJX8oITvEXgrM69/GgR3RbGX9H21oFkBAuEFhnFjkH/XyV5GUbYlNCk/T9xpdDdmmV5Hkbfo0PawASvAng1ASZruhSn/heWyKNn4TgZ4LcrOhfPeLzbU0FawBqhEsU7gNNXeKzBQ7ZBLCHYPJeZKvAJCG7ziVZb8O/NQApwd9BPgp6rUfcY0Pc0T4OTwV90SO+xEYMKwASPE+oJAr7PKJO219/ONFeZk6pM36n+bsDZ0onW94tC8ESgGCxID8CfcQj/npZUSPZJ4TPClwqZF9xSTaUjWUJgL9KcG5VuMEnerSsqJHsU/w7wFkp8D2XaPCXoUyzAiAleBxknpDNdUn+UEbQ8WyHf2oVXeUTLz5e/+P93xKA8CVgDgzM9qhtPl7QMv9PCb4Isgm0xyO+towva/uA4d2foF9wiV8oK2ok+xrh1xQeBX3YI15YNpatEfAL4CZFb/SJ15UVNfIaEJqzwV2KLveJf1A2liUA/rfA+QmwxiP6ZllRIwMInga5TKHbJ3qybCxLANzZ0PZn0H+7xNME6mWFfZB9jerpStsuU19o4/2pM9n2Ttk4VgAoSEqQClI9MTtBXvWI8lpBOQRWABgJCcHtgtzTqrPAO8ya9C7aJ9AhZKbG8KtyqQ9ZWwOwk2mnvUfHWyAzgGUe0UobAod9pISmJrDQNmBrAIzQlLCbwZqfal4JsnJiSwivEDCFFlMbusYj/rUtuFYB5FNh8NxuiiKCzi+7X68RXKTwPMhE0PUe8XW2krc6BYZFKYyrEbwEclE+Em52SdY0I7pGsEiRBwFTOv+9R9xt+xfG+ggwiQ4VRtufAT6XJ/7keLLFRarCGfqwwGcHBz085RHNExhoBuRINi0BkIset5VghcKSvMbfD/y2Qn1jHZ5r/F6AZVWiB2SQg/3WMgDDUnvxP1VHHhqaEv+bKCPeDOWL3SbBud1ly9/sp33YY8sBmN0bjLsyQ1cIckaDyURCtryd9za24jLkSA0tA9BLcG4dWaZwucD4fFocAn1dkH8BuwXdrYP3hdqpSCeoJ8h5R4yUA8BvoL7So5Y0CK9QN+sAthF2HYTVApcPJa17BVmt1F/0aPujsMWsBcds2wmqh6BbkauBC/PpkCmyvo3+b9u+NbYKYCv+3DqyQZDJwH+AVR3I/c0WL2sElyjcA/LJnJi5Kb7KI3q10GceobM1AAnBUkHuzmNtrtD/JVtX2zX8eYrzU2BqvsG64f/qLFAjuFORvDiha13iW2y/9jAl8QHa1wl8Od9gLXBJHis7EkqPgBT/O+CY3RqC3ukSrygraiT7lNAcsu4wEIB5HvHGMvFKAUjwLhScV0yBQtB7XeKlZcQ0apsSPgB816wzFbigi2hLo7ZH92sagDmf7yN7Mz/+/tIjuqlZEc3YpQQ9IPPzy9ILmj0jNA0gJTSXErcp+k/Izjt6a9tMUkVszCuUASa8CXQqeotPbBbJwq0pANvx3X6ctwR1HOT8KtEbhSNbMEgJ5oP0mMcYE9hfbWbX2BSAhOA+QZYAj3tEV1nIpWkXKeHrgJkCi1yiHxd11CSA0NzTdwl6sUv8StGgNvsffpXCZo9odlHfhQH04n26TuVPoG94xOcWDWi7vzKrvUa2HWSKUj/HJ/1HkRiFARyx6VnpEZkHkCe9pQRrQW4UuNUlGn5Q1ZCuwgASgucEmWv7sVJDao/RKcX/BjhrmrkwLQRg6AIk3CvoaR9i36Tp7DIHnpPealQ/powzhZPII5pVRFBRAJUagUl6h0fsFwnU6r4p4W7Qikd8epFYhQAYx+bxs4P2N1rgLCKmTN8a1UBQqdIbFfFTGEAR56dC3zEAp8JXaqXGsRHQSrqngu+xEXAqfKVWahz1I+C/OJZhX4eiQ1kAAAAASUVORK5CYII="},552:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACKklEQVR4Xu1bS1ICMRB97QzuLHHnAqrgBB5BPIGshFvIDcAbeAxx43gDjiAnEEsWLrVkg3zaCp8qtMBKmCCheLPu9KRfvyT9ZjqCPX9kz+MHASAD9hwBLgGfBNDqaWGkmToUZQiyPn3Pfanq0wGQRPfdGx/+vTFgUM2VZCwPmwr8d7AGiPirdyHJ+3saILwAoOVsdnR49PxfwS+w4SZz321sHYDhVd5Q/sFhIo8mg0vtBWWBnFn66sTN16Kl7YrXpRk9Gzu4yjVEpG7rKup/nqyi7qCSuxXIta2vuPmaisWpBs8n6QoAgA6gneVBSsk2eGO3qwC4xPinLQEIawnoi6qh9+YfETkPbgmoaupjyRa6YSWvBCC0TZAM4BLgHsBNMK044SlgiQCPQdYBLIRYCbIUZikc2AcRagFqAWoBagFqgZR/aiylAKgFqAWoBagFqAWoBagFwvo7TDFEMUQxRDFEMUQxlK5vb6fV4N/dX7ah2dpNu8nYJBVWk5Rt9gAoPqDjWhSNWkPEBVGpAbh08DAx3VkGqOhF5q7bWgx4WMknriDsLADLJr5Gx2kYDFijWRqRDIpy9/ajp9C1TxjQl7jZLbgum0V7L73Cs3b5DgTHtpP53e+/Dog+xJcXAEzQswsTiQsIU7C0BYjJolMmFdqO+71SEBcm5lmfXJkZZ8wFBnN/wJoNtqyZwAVtQ5H4Krm9McAliJBsCUBI2djGXMiAbaAe0jv3ngHfd4ZJXxvzzDgAAAAASUVORK5CYII="},587:function(t,e,a){"use strict";a.r(e);var n=a(52),r=a(53),o=a(55),i=a(54),c=a(1),s=a.n(c),l=a(118),u=a(386),d=a(382),m=a(7),h=a(387),f=a(550),p=a.n(f),g=function(t){Object(o.a)(c,t);var e=Object(i.a)(c);function c(t){var a;return Object(n.a)(this,c),a=e.call(this,t),Object(u.c)(t),a.state={ordernum:t.location.search?Object(u.b)(t.location.search).search.ordernum:"",name:"",cellphone:"",status:"",province:"",city:"",area:"",address:"",freight:0,total:0,trueTotal:0,orderTime:"",goods:[]},a}return Object(r.a)(c,[{key:"componentWillUnmount",value:function(){this.setState=function(t,e){}}},{key:"componentDidMount",value:function(){Object(u.d)(),this.getUserInfo()}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){}},{key:"getUserInfo",value:function(){var t=this,e=m.a.baseUrl+"api/user/myorder/desc?uid="+this.props.state.user.uid+"&ordernum="+this.state.ordernum+"&token="+m.a.token;this.props.state.user.isLogin&&Object(d.a)(e).then((function(e){200===e.code&&(t.setState({name:e.data.name,cellphone:e.data.cellphone,status:e.data.status,province:e.data.province,city:e.data.city,area:e.data.area,address:e.data.address,freight:e.data.freight,total:e.data.total,trueTotal:e.data.truetotal,orderTime:e.data.ordertime,goods:e.data.goods}),Object(u.a)())}))}},{key:"pushPage",value:function(t){this.props.history.push(m.a.path+t)}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:p.a.page},s.a.createElement(h.a,{title:"\u8ba2\u5355\u8be6\u60c5"}),s.a.createElement("div",{className:p.a.main},s.a.createElement("div",{className:p.a.ordernum},"\u8ba2\u5355\u7f16\u53f7\uff1a",this.state.ordernum),s.a.createElement("div",{className:p.a["address-wrap"]},s.a.createElement("div",{className:p.a.name},s.a.createElement("img",{src:a(551),alt:this.state.name}),this.state.name),s.a.createElement("div",{className:p.a.cellphone},s.a.createElement("img",{src:a(552),alt:this.state.name}),this.state.cellphone),s.a.createElement("div",{className:p.a.address},this.state.province," ",this.state.city," ",this.state.area," ",this.state.address)),s.a.createElement("div",{className:p.a.ordernum+" "+p.a.second},"\u8ba2\u5355\u7f16\u53f7\uff1a",this.state.ordernum),this.state.goods.length>0?this.state.goods.map((function(e,n){return s.a.createElement("div",{key:n,className:p.a["goods-list"],onClick:t.pushPage.bind(t,"goods/details/item?gid="+e.gid)},s.a.createElement("div",{className:p.a.image},s.a.createElement("img",{"data-echo":e.image,src:a(400),alt:e.title})),s.a.createElement("div",{className:p.a["goods-info"]},s.a.createElement("div",{className:p.a.title},e.title),s.a.createElement("div",{className:p.a.attr},s.a.createElement("span",{className:p.a.amount},"x",e.amount),null!==e.param?e.param.map((function(t,e){return s.a.createElement("span",{key:e},t.title,"\uff1a",null!==t.param||t.param.length>0?t.param.map((function(t,e){return s.a.createElement(s.a.Fragment,{key:e},t.title)})):"")})):"")),s.a.createElement("div",{className:p.a.price},"\xa5 ",e.price))})):s.a.createElement("div",{className:"null-item"},"\u60a8\u8fd8\u6ca1\u6709\u76f8\u5173\u7684\u8ba2\u5355"),s.a.createElement("ul",{className:p.a["order-status"]},s.a.createElement("li",null,"\u652f\u4ed8\u72b6\u6001"),s.a.createElement("li",null,"0"===this.state.status?"\u5f85\u4ed8\u6b3e":"1"===this.state.status?"\u5f85\u6536\u8d27":"\u5df2\u6536\u8d27")),s.a.createElement("div",{className:p.a["total-wrap"]},s.a.createElement("ul",{className:p.a.total},s.a.createElement("li",null,"\u5546\u54c1\u603b\u989d"),s.a.createElement("li",null,"\xa5 ",this.state.total)),s.a.createElement("ul",{className:p.a.total},s.a.createElement("li",null,"+\u8fd0\u8d39"),s.a.createElement("li",null,"\xa5 ",this.state.freight))),s.a.createElement("div",{className:p.a["true-total"]},s.a.createElement("div",{className:p.a.total},"\u5b9e\u4ed8\u91d1\u989d\uff1a",s.a.createElement("span",null,"\xa5 ",this.state.trueTotal)),s.a.createElement("div",{className:p.a["order-time"]},this.state.orderTime))))}}]),c}(s.a.Component);e.default=Object(l.b)((function(t){return{state:t}}))(g)}}]);
//# sourceMappingURL=19.0f57819b.chunk.js.map