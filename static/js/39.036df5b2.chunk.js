(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[39],{558:function(e,a,t){"use strict";t.r(a),function(e){var i=t(52),s=t(53),l=t(55),o=t(54),c=t(1),n=t.n(c),r=t(465),m=t.n(r),d=t(118),g=(t(466),t(7)),p=t(382),v=t(386),h=t(559),u=t.n(h),E=t(427),N=function(a){Object(l.a)(r,a);var c=Object(o.a)(r);function r(){var e;return Object(i.a)(this,r),(e=c.call(this)).state={aSwiper:[],aNav:[],aGoods:[],aRecoGoods:[],bScroll:!1,pageStyle:{display:"none"}},e.bScroll=!0,e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){Object(v.d)(e.scrollTop.index),this.getSwiper(),this.getNav(),this.getGoodsLevel(),this.getReco(),window.addEventListener("scroll",this.eventScroll.bind(this),!1)}},{key:"componentWillUnmount",value:function(){this.bScroll=!1,window.removeEventListener("scroll",this.eventScroll.bind(this)),this.setState=function(e,a){}}},{key:"eventScroll",value:function(){if(this.bScroll){var a=document.documentElement.scrollTop||document.body.scrollTop;e.scrollTop.index=a,a>=80?this.setState({bScroll:!0}):this.setState({bScroll:!1})}}},{key:"getSwiper",value:function(){var e=this;Object(p.a)(g.a.baseUrl+"/api/home/index/slide?token="+g.a.token).then((function(a){200===a.code&&e.setState({aSwiper:a.data},(function(){new m.a(e.refs["swiper-wrap"],{autoplay:3500,pagination:".swiper-pagination",autoplayDisableOnInteraction:!1})}))}))}},{key:"getNav",value:function(){var e=this;Object(p.a)(g.a.baseUrl+"/api/home/index/nav?token="+g.a.token).then((function(a){200===a.code&&e.setState({aNav:a.data})}))}},{key:"getGoodsLevel",value:function(){var e=this;Object(p.a)(g.a.baseUrl+"/api/home/index/goodsLevel?token="+g.a.token).then((function(a){200===a.code&&e.setState({aGoods:a.data},(function(){Object(v.a)()}))}))}},{key:"getReco",value:function(){var e=this;Object(p.a)(g.a.baseUrl+"/api/home/index/recom?token="+g.a.token).then((function(a){200===a.code&&e.setState({aRecoGoods:a.data},(function(){Object(v.a)()}))}))}},{key:"pushPage",value:function(e){this.props.history.push(g.a.path+e)}},{key:"showSearch",value:function(){this.setState({pageStyle:{display:"block"}})}},{key:"getStyle",value:function(e){this.setState({pageStyle:e}),console.log(e)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:u.a.page},n.a.createElement("div",{className:u.a["search-header"]+" "+u.a["red-bg"]},n.a.createElement("div",{className:u.a["classify-icon"],onClick:this.pushPage.bind(this,"goods/classify")}),n.a.createElement("div",{className:u.a["search-wrap"],onClick:this.showSearch.bind(this)},n.a.createElement("div",{className:u.a["search-icon"]}),n.a.createElement("div",{className:u.a["search-text"]},"\u8bf7\u8f93\u5165\u5b9d\u8d1d\u540d\u79f0")),n.a.createElement("div",{className:u.a["login-wrap"]},this.props.state.user.isLogin?n.a.createElement("div",{className:u.a.my,onClick:this.pushPage.bind(this,"home/my")}):n.a.createElement("div",{className:u.a["login-text"],onClick:this.pushPage.bind(this,"login/index")},"\u767b\u5f55"))),n.a.createElement("div",{ref:"swiper-wrap",className:u.a["swiper-wrap"]},n.a.createElement("div",{className:"swiper-wrapper"},null!=this.state.aSwiper?this.state.aSwiper.map((function(e,a){return n.a.createElement("div",{key:a,className:"swiper-slide"},n.a.createElement("a",{href:e.webs,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:e.image,alt:e.title})))})):""),n.a.createElement("div",{className:"swiper-pagination"})),n.a.createElement("div",{className:u.a["quick-nav"]},null!=this.state.aNav?this.state.aNav.map((function(a,t){return n.a.createElement("ul",{key:t,className:u.a.item},n.a.createElement("li",{className:u.a["item-img"]},n.a.createElement("img",{src:a.image,onClick:e.pushPage.bind(e,"goods/classify/items?cid="+a.cid),alt:a.title})),n.a.createElement("li",{className:u.a["item-text"]},a.title))})):""),null!=this.state.aGoods?this.state.aGoods.map((function(a,i){return n.a.createElement("div",{key:i,className:u.a["goods-level-wrap"]},n.a.createElement("div",{className:u.a["classify-title"]+" "+u.a["color"+(i+1)]},"\u2014\u2014 ",a.title," \u2014\u2014"),i%2===1?n.a.createElement("div",{className:u.a["goods-level1-wrap"]},null!=a.items?a.items.slice(0,2).map((function(a,i){return n.a.createElement("div",{key:i,onClick:e.pushPage.bind(e,"goods/details/item?gid="+a.gid),className:u.a["goods-level1-item0"]},n.a.createElement("div",{className:u.a["goods-title2"]},a.title),n.a.createElement("div",{className:u.a["goods-text2"]},"\u706b\u7206\u5f00\u552e"),n.a.createElement("div",{className:u.a["goods-img2"]},n.a.createElement("img",{"data-echo":a.image,src:t(400),alt:a.title})))})):""):n.a.createElement("div",{className:u.a["goods-level1-wrap"]},n.a.createElement("div",{className:u.a["goods-level1-item0"],onClick:e.pushPage.bind(e,"goods/details/item?gid="+(null!=a.items[0].gid?a.items[0].gid:""))},n.a.createElement("div",{className:u.a["goods-title"]},null!=a.items?a.items[0].title:""),n.a.createElement("div",{className:u.a["goods-text"]},"\u7cbe\u54c1\u6253\u6298"),n.a.createElement("div",{className:u.a["goods-price"+(i+1)]},null!=a.items?a.items[0].price:"","\u5143"),n.a.createElement("div",{className:u.a["goods-img"]},n.a.createElement("img",{"data-echo":null!=a.items?a.items[0].image:"",src:t(400),alt:null!=a.items?a.items[0].title:""}))),n.a.createElement("div",{className:u.a["goods-level1-item1"]},null!=a.items?a.items.slice(1,3).map((function(a,i){return n.a.createElement("div",{key:i,className:u.a["goods-row"],onClick:e.pushPage.bind(e,"goods/details/item?gid="+a.gid)},n.a.createElement("div",{className:u.a["goods-row-title"]},a.title),n.a.createElement("div",{className:u.a["goods-row-text"]},"\u54c1\u8d28\u7cbe\u6311"),n.a.createElement("div",{className:u.a["goods-row-img"]},n.a.createElement("img",{src:t(400),"data-echo":a.image,alt:a.title})))})):"")),n.a.createElement("div",{className:u.a["goods-list-wrap"]},null!=a.items?a.items.slice(i%2===1?2:3).map((function(a,i){return n.a.createElement("div",{key:i,className:u.a["goods-list"],onClick:e.pushPage.bind(e,"goods/details/item?gid="+a.gid)},n.a.createElement("div",{className:u.a.title},a.title),n.a.createElement("div",{className:u.a.image},n.a.createElement("img",{src:t(400),"data-echo":a.image,alt:a.title})),n.a.createElement("div",{className:u.a.price},"\xa5",a.price),n.a.createElement("div",{className:u.a.unprice},"\xa5",2*a.price))})):""))})):"",n.a.createElement("div",{className:u.a["reco-title-wrap"]},n.a.createElement("div",{className:u.a.line}),n.a.createElement("div",{className:u.a["reco-text-wrap"]},n.a.createElement("div",{className:u.a["reco-icon"]}),n.a.createElement("div",{className:u.a["reco-text"]},"\u4e3a\u60a8\u63a8\u8350")),n.a.createElement("div",{className:u.a.line})),n.a.createElement("div",{className:u.a["reco-item-wrap"]},null!=this.state.aRecoGoods?this.state.aRecoGoods.map((function(a,i){return n.a.createElement("div",{key:i,className:u.a["reco-item"],onClick:e.pushPage.bind(e,"goods/details/item?gid="+a.gid)},n.a.createElement("div",{className:u.a.image},n.a.createElement("img",{src:t(400),alt:a.title,"data-echo":a.image})),n.a.createElement("div",{className:u.a.title},a.title),n.a.createElement("div",{className:u.a.price},"\xa5",a.price))})):""),n.a.createElement(E.a,{pageStyle:this.state.pageStyle,childStyle:this.getStyle.bind(this)}))}}]),r}(n.a.Component);a.default=Object(d.b)((function(e){return{state:e}}))(N)}.call(this,t(57))},559:function(e,a,t){e.exports={page:"_2Ul-2uXyKTXStI8Z4jgKSf","search-header":"_3VipQiylaKVdZMLF5WKcNy","red-bg":"hxgqoaHqqFsWM_QIr4w7w","classify-icon":"_1kS8AXdMyRajP1WiNmOfoi","search-wrap":"_2dYW7zyCL-5BX-TP3091TX","search-icon":"fO-7J0AxSsTLaGa0UYULk","search-text":"V0IF1NqTVop7BU8s3lK8h","login-wrap":"_1fHEU_KXG87jJmYDv22Xc3","login-text":"_1YUbik_qGsN1YslzqrHnRd",my:"XsR6pgVqqAQOf6ivirrzK","swiper-wrap":"BtjcKH_IHI0NtkPqZ3ygu","quick-nav":"zg-TsteKBJhBeYDDFYbDu",item:"_13s8Ru2Fz1zxwrnRy5UzHL","item-img":"_31hANq7Es82p-tdMiUjJrA","item-text":"_2SSoJCDZSgmv3g6iGNUWDD","goods-level-wrap":"_1ANj4igt0vmoP1hbEW79h5","classify-title":"_2g8FRp0_75OxJZZ4i7Crgn",color1:"_3hXXyYzQP0Pent2Gl-8uxL",color2:"_3B7jxKYTg1Db0Yu0Ho7Glm",color3:"_1ZqCWmRYzViSe1YhjWA96T","goods-level1-wrap":"_2b1Ua9qCqOOlSbfGh-_YN2","goods-level1-item0":"_2CNar3HASGhU7V42IZlhrk","goods-title2":"_2mwoo4jqJmjU5B9V7YDUGA","goods-text2":"_3x2kQTzWb_UEDyba_818ph","goods-img2":"_1lAlNimLRuVCyoNatBhKaK","goods-level1-item1":"OX9IxJ4ijNyMgSHe6Hj_I","goods-title":"_1mdPAiaX4X48EvV6xS8F7X","goods-text":"_88b8D2V3buc7wcD-z-6z1","goods-price1":"_3rUpoBvmDeaelZg3G7w-Fg","goods-price3":"JchpCM3fHkmEcCYeNQdyz","goods-img":"_2VlaOkS77Fw1AA_f7feF_H","goods-row":"zMZYsFS4xEmxwQsGT6FQS","goods-row-title":"_1xL9YmqSOGfSwjee5MQJBP","goods-row-text":"_392im05MZelc0co6DwaW-t","goods-row-img":"_18hXSTPz3j94v4-Qe3e5Uk","goods-list-wrap":"_1MFmwuvGNWoqbUahAJnSPG","goods-list":"wnEXW-kkXGgJv7MxzG8zV",title:"_1sTH6cehPdrfUNpC9bNA8D",image:"_3tXbYrP68meCJ6kgv_ATte",price:"_1EBSCyJeCLvK8MF5MM_yRX",unprice:"_23pqYQufFDWKyWB6EoDTJr","reco-title-wrap":"_2U9OtWXTVwAdHWDJRl37FO",line:"_28AcoWVAX3xOC7q3_48mcv","reco-text-wrap":"_1v5NuJApqAUgrQiMoRELEv","reco-icon":"_2ZloRmmslWt4mhpWkHvkTJ","reco-text":"Jfi9kiZjGhJjb6-6Ov3v9","reco-item-wrap":"_1COwGGObQxUrigDSPZbcxi","reco-item":"_1Y3eExDGWxtN0C7JcaaAqL"}}}]);
//# sourceMappingURL=39.036df5b2.chunk.js.map