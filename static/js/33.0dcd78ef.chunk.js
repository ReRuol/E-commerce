(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[33],{400:function(e,t,a){e.exports=a.p+"static/media/lazyImg.639beef7.jpg"},564:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(52),o=a(53),s=a(55),c=a(54),i=a(1),l=a.n(i),r=a(7),u=a(382),d=a(426),m=a.n(d),p=a(386),f=a(565),h=a.n(f),v=function(e){Object(s.a)(i,e);var t=Object(c.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e)).state={aGoods:[]},a.myScroll=null,a}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.getData(this.props)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.getData(e)}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"getData",value:function(e){var t=this,a=e.location.search?Object(p.b)(e.location.search).search.cid:"";Object(u.a)(r.a.baseUrl+"/api/home/category/show?cid="+a+"&token="+r.a.token).then((function(e){200===e.code?t.setState({aGoods:e.data},(function(){t.eventScroll(),Object(p.a)(),t.myScroll.on("scrollEnd",(function(){Object(p.a)()}))})):t.setState({aGoods:[]})}))}},{key:"eventScroll",value:function(){var e=this.refs["goods-content-main"];e.addEventListener("touchmove",(function(e){e.preventDefault()}),{passive:!1}),this.myScroll=new m.a(e,{scrollX:!1,scrollY:!0,preventDefault:!1})}},{key:"pushPage",value:function(e){this.props.history.push(r.a.path+e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{ref:"goods-content-main",className:h.a["goods-content-main"]},l.a.createElement("div",null,this.state.aGoods.length>0?this.state.aGoods.map((function(t,n){return l.a.createElement("div",{className:h.a["goods-wrap"],key:n},l.a.createElement("div",{className:h.a["classify-name"]},t.title),l.a.createElement("div",{className:h.a["goods-items-wrap"]},null!=t.goods?t.goods.map((function(t,n){return l.a.createElement("ul",{key:n,onClick:e.pushPage.bind(e,"goods/details/item?gid="+t.gid)},l.a.createElement("li",null,l.a.createElement("img",{"data-echo":t.image,src:a(400),alt:t.title})),l.a.createElement("li",null,t.title))})):""))})):l.a.createElement("div",{className:"null-item"},"\u6ca1\u6709\u76f8\u5173\u5546\u54c1\uff01")))}}]),i}(l.a.Component)},565:function(e,t,a){e.exports={"goods-content-main":"_2fBEkDnC7jw7_7ZJ-YttfC","goods-wrap":"_3awxzLkwC1dxZ5XC6uouqF","classify-name":"_2p47zYZ5_hcQ9FEqSXVfB2","goods-items-wrap":"Fqz54mfBdJ4LrbKnLTxRd"}}}]);
//# sourceMappingURL=33.0dcd78ef.chunk.js.map