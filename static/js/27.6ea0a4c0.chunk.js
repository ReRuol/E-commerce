(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[27],{382:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(69),i=a.n(n),s=a(160),c=i.a.findDOMNode(document.getElementById("page-load"));function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get".toLocaleLowerCase(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r();var n={},i={},c="";if(t==="file".toLocaleLowerCase()){if(t="post",a instanceof Object)for(var l in c=new FormData,a)c.append(l,a[l]);n={method:t,body:c}}else if(t==="get".toLocaleLowerCase())n={method:t};else{if(i={"Content-Type":"application/x-www-form-urlencoded"},a instanceof Object){for(var d in a)c+="&".concat(d,"=").concat(encodeURIComponent(a[d]));c=c.slice(1)}n={method:t,headers:i,body:c}}return Object(s.a)(e,n).then((function(e){return o(),e.json()}))}function r(){c.style.display="block"}function o(){c.style.display="none"}},388:function(e,t,a){"use strict";var n=a(52),i=a(53),s=a(55),c=a(54),l=a(1),r=a.n(l),o=a(37),d=a(7),h=a(389),u=a.n(h),m=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"goBack",value:function(){this.props.location.pathname===d.a.path+"address/index"?this.props.history.replace(d.a.path+"balance/index"):this.props.history.goBack()}},{key:"getClick",value:function(){this.props.onClickRightBtn()}},{key:"render",value:function(){return r.a.createElement("div",{className:u.a["sub-header"]},r.a.createElement("div",{className:u.a.back,onClick:this.goBack.bind(this)}),r.a.createElement("div",{className:u.a.title},this.props.title),r.a.createElement("div",{className:""!==this.props["right-text"]?u.a["right-btn"]:"hide",onClick:this.getClick.bind(this)},this.props["right-text"]))}}]),a}(r.a.Component);t.a=Object(o.g)(m)},389:function(e,t,a){e.exports={"sub-header":"subHeader_sub-header__1pvh_",back:"subHeader_back__3K4yL",title:"subHeader_title__1gr8C","right-btn":"subHeader_right-btn__1-dOl"}},449:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMzVmOWY2MS1mNTNkLTJhNDItOGFiYy1iZGFhNTUwODU1YzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQ0OUY4RjBCRUNEMTFFNkIxRjFFMTc5OURBMzYzOUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQ0OUY4RUZCRUNEMTFFNkIxRjFFMTc5OURBMzYzOUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OWI2ODI4Ny1mNWFjLTQ3NzctOWZmZS1jZjMzZmRjMjY1NzgiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3ZmZjOWRkNS01OGIwLTExNzktYjg2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"},547:function(e,t,a){e.exports={page:"profile_page__byPIV",main:"profile_main__1PyXA",head:"profile_head__20ZFM",list:"profile_list__2tPPE",arrow:"profile_arrow__1CX3x"}},586:function(e,t,a){"use strict";a.r(t);a(391);var n=a(392),i=a.n(n),s=(a(540),a(544)),c=a.n(s),l=a(52),r=a(53),o=a(55),d=a(54),h=a(1),u=a.n(h),m=a(118),p=a(7),g=a(382),I=a(388),b=a(547),f=a.n(b),v=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={sHead:"",sNickName:"",sPoints:0,sGender:"",iGender:0,sHeadName:""},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"getUserInfo",value:function(){var e=this,t=p.a.baseUrl+"api/user/myinfo/userinfo/uid/"+this.props.state.user.uid+"?token="+p.a.token;this.props.state.user.isLogin&&Object(g.a)(t).then((function(t){200===t.code&&e.setState({sHead:t.data.head,sNickName:t.data.nickname,iGender:t.data.gender,sGender:"1"===t.data.gender?"\u7537":"2"===t.data.gender?"\u5973":""},(function(){}))}))}},{key:"selectGender",value:function(){var e=this,t=["\u7537","\u5973","\u53d6\u6d88"];c.a.showActionSheetWithOptions({options:t,cancelButtonIndex:t.length-1,title:"\u9009\u62e9\u6027\u522b",maskClosable:!0,"data-seed":"logId",onTouchStart:function(e){return e.preventDefault()}},(function(t){2!==t&&e.setState({sGender:0===t?"\u7537":"\u5973",iGender:0===t?1:2})}))}},{key:"submitSave",value:function(){var e=this;if(""===this.state.sHead)return i.a.info("\u8bf7\u4e0a\u4f20\u5934\u50cf~",1.7),!1;if(this.state.sNickName.match(/^\s*$/))return i.a.info("\u8bf7\u8f93\u5165\u6635\u79f0",1.7),!1;if(""===this.state.sGender)return i.a.info("\u8bf7\u8f93\u5165\u6027\u522b",1.7),!1;var t=p.a.baseUrl+"/api/user/myinfo/updateuser?token="+p.a.token,a={uid:this.props.state.user.uid,nickname:this.state.sNickName,gender:this.state.iGender,head:this.state.sHeadName};Object(g.a)(t,"post",a).then((function(t){200===t.code&&i.a.info(t.data,1.7,(function(){e.props.history.goBack()}))}))}},{key:"uploadHead",value:function(){var e=this,t=p.a.baseUrl+"/api/user/myinfo/formdatahead?token="+p.a.token;Object(g.a)(t,"file",{headfile:this.refs.headfile.files[0]}).then((function(t){200===t.code&&e.setState({sHead:"http://vueshop.glbuys.com/userfiles/head/"+t.data.msbox,sHeadName:t.data.msbox})}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:f.a.page},u.a.createElement(I.a,{title:"\u4e2a\u4eba\u8d44\u6599","right-text":"\u4fdd\u5b58",onClickRightBtn:this.submitSave.bind(this)}),u.a.createElement("div",{className:f.a.main},u.a.createElement("ul",{className:f.a.head},u.a.createElement("li",null,"\u5934\u50cf"),u.a.createElement("li",null,u.a.createElement("img",{src:""!==this.state.sHead?this.state.sHead:a(449),alt:this.state.sNickName}),u.a.createElement("input",{ref:"headfile",type:"file",onChange:this.uploadHead.bind(this)}))),u.a.createElement("ul",{className:f.a.list},u.a.createElement("li",null,"\u6635\u79f0"),u.a.createElement("li",null,u.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8bbe\u7f6e\u6635\u79f0",value:this.state.sNickName,onChange:function(t){e.setState({sNickName:t.target.value})}})),u.a.createElement("li",{className:f.a.arrow})),u.a.createElement("ul",{className:f.a.list},u.a.createElement("li",null,"\u6027\u522b"),u.a.createElement("li",null,u.a.createElement("input",{type:"text",placeholder:"\u8bf7\u9009\u62e9\u6027\u522b",onClick:this.selectGender.bind(this),value:this.state.sGender,readOnly:!0})),u.a.createElement("li",{className:f.a.arrow}))))}}]),n}(u.a.Component);t.default=Object(m.b)((function(e){return{state:e}}))(v)}}]);
//# sourceMappingURL=27.6ea0a4c0.chunk.js.map