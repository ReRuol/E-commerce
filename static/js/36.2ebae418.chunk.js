(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[36],{468:function(e,t,a){e.exports={"search-header":"_2Yerq-ohlRA-FmFdy5ehsq",back:"_2_GQN1VrFr7WzckkhZAtQz",search:"_12V2o5-YeB9eTdZeD-2OK4","goods-main":"_39O8zwtdOO4Kl48s7Jbbmj","classify-wrap":"_3nGtG0XqH-nNJoKid0pEKS","classify-item":"_2W0HTi9fbek5ii0s2By7o0",active:"XPe4t7WnlCESWlWwdvFzn","goods-content":"_3Vias5K-TulUOuh8KgR69V"}},576:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var s=a(52),i=a(53),l=a(55),n=a(54),c=a(1),o=a.n(c),r=a(37),h=a(11),f=a(7),y=a(426),u=a.n(y),m=a(468),d=a.n(m),p=a(382),v=a(386),g=a(427),k=Object(h.a)((function(){return a.e(33).then(a.bind(null,564))})),C=function(e){Object(l.a)(a,e);var t=Object(n.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state={aClassify:[],pageStyle:{display:"none"}},i.myScroll=null,i.aTempClassify=[],i.cid=e.location.search?Object(v.b)(e.location.search).search.cid:"492",i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getClassifyData()}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"replacePage",value:function(e){this.props.history.replace(f.a.path+e)}},{key:"goBack",value:function(){this.props.history.goBack()}},{key:"eventScroll",value:function(){var e=this.refs["scroll-classify"];e.addEventListener("touchmove",(function(e){e.preventDefault()}),{passive:!1}),this.myScroll=new u.a(e,{scrollX:!1,scrollY:!0,preventDefault:!1})}},{key:"getClassifyData",value:function(){var e=this;Object(p.a)(f.a.baseUrl+"/api/home/category/menu?token="+f.a.token).then((function(t){if(200===t.code){e.aTempClassify=t.data;for(var a=0;a<e.aTempClassify.length;a++)e.aTempClassify[a].bActive=!1;e.setState({aClassify:e.aTempClassify},(function(){e.eventScroll(),e.defaultClassifyStyle()}))}}))}},{key:"changeStyle",value:function(e,t){if(this.aTempClassify.length>0)for(var a=0;a<this.aTempClassify.length;a++)this.aTempClassify[a].bActive=!1;this.aTempClassify[t].bActive=!0,this.setState({aClassify:this.aTempClassify}),this.handleScroll(t),this.replacePage(e)}},{key:"handleScroll",value:function(e){var t=this.refs["scroll-classify"],a=Math.round(parseInt(this.refs["item-"+e].offsetHeight)*e),s=Math.round(t.offsetHeight/3),i=t.scrollHeight-a;a>s&&i>t.offsetHeight&&this.myScroll.scrollTo(0,-a,300,u.a.utils.ease.elastic)}},{key:"defaultClassifyStyle",value:function(){if(this.aTempClassify.length>0){for(var e=0;e<this.aTempClassify.length;e++)if(this.aTempClassify[e].cid===this.cid){this.aTempClassify[e].bActive=!0;break}this.replacePage("goods/classify/items?cid="+this.cid),this.setState({aClassify:this.aTempClassify})}}},{key:"getStyle",value:function(e){this.setState({pageStyle:e})}},{key:"changeSearch",value:function(){this.setState({pageStyle:{display:"block"}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:d.a["search-header"]},o.a.createElement("div",{className:d.a.back,onClick:this.goBack.bind(this)}),o.a.createElement("div",{className:d.a.search,onClick:this.changeSearch.bind(this)},"\u8bf7\u8f93\u5165\u5b9d\u8d1d\u540d\u79f0")),o.a.createElement("div",{className:d.a["goods-main"]},o.a.createElement("div",{ref:"scroll-classify",className:d.a["classify-wrap"]},o.a.createElement("div",null,null!=this.state.aClassify?this.state.aClassify.map((function(t,a){return o.a.createElement("div",{ref:"item-"+a,className:t.bActive?d.a["classify-item"]+" "+d.a.active:d.a["classify-item"],key:a,onClick:e.changeStyle.bind(e,"goods/classify/items?cid="+t.cid,a)},t.title)})):"")),o.a.createElement("div",{className:d.a["goods-content"]},o.a.createElement(r.d,null,o.a.createElement(r.b,{path:f.a.path+"goods/classify/items",component:k})))),o.a.createElement(g.a,{pageStyle:this.state.pageStyle,childStyle:this.getStyle.bind(this)}))}}]),a}(o.a.Component)}}]);
//# sourceMappingURL=36.2ebae418.chunk.js.map