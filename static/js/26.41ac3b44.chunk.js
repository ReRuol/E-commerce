(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[26],{382:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(69),r=a.n(n),o=a(160),i=r.a.findDOMNode(document.getElementById("page-load"));function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get".toLocaleLowerCase(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};c();var n={},r={},i="";if(t==="file".toLocaleLowerCase()){if(t="post",a instanceof Object)for(var s in i=new FormData,a)i.append(s,a[s]);n={method:t,body:i}}else if(t==="get".toLocaleLowerCase())n={method:t};else{if(r={"Content-Type":"application/x-www-form-urlencoded"},a instanceof Object){for(var l in a)i+="&".concat(l,"=").concat(encodeURIComponent(a[l]));i=i.slice(1)}n={method:t,headers:r,body:i}}return Object(o.a)(e,n).then((function(e){return u(),e.json()}))}function c(){i.style.display="block"}function u(){i.style.display="none"}},387:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"addHistoryKeywords",(function(){return i}));var r={};a.r(r),a.d(r,"addCart",(function(){return s})),a.d(r,"delItem",(function(){return c})),a.d(r,"checkItem",(function(){return u})),a.d(r,"setAllChecked",(function(){return l})),a.d(r,"incAmount",(function(){return d})),a.d(r,"decAmount",(function(){return p})),a.d(r,"changeAmount",(function(){return h})),a.d(r,"clearCart",(function(){return m}));var o={};function i(e){return{type:"addHk",data:e}}function s(e){return{type:"addCart",data:e}}function c(e){return{type:"delItem",data:e}}function u(e){return{type:"checkItem",data:e}}function l(e){return{type:"allItem",data:e}}function d(e){return{type:"incAmount",data:e}}function p(e){return{type:"decAmount",data:e}}function h(e){return{type:"changeAmount",data:e}}function m(e){return{type:"clearCart",data:e}}function f(e){return{type:"login",data:e}}function g(){return{type:"outLogin",data:{}}}a.r(o),a.d(o,"login",(function(){return f})),a.d(o,"outLogin",(function(){return g}));t.a={hk:n,cart:r,user:o}},388:function(e,t,a){"use strict";var n=a(52),r=a(53),o=a(55),i=a(54),s=a(1),c=a.n(s),u=a(37),l=a(7),d=a(389),p=a.n(d),h=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"goBack",value:function(){this.props.location.pathname===l.a.path+"address/index"?this.props.history.replace(l.a.path+"balance/index"):this.props.history.goBack()}},{key:"getClick",value:function(){this.props.onClickRightBtn()}},{key:"render",value:function(){return c.a.createElement("div",{className:p.a["sub-header"]},c.a.createElement("div",{className:p.a.back,onClick:this.goBack.bind(this)}),c.a.createElement("div",{className:p.a.title},this.props.title),c.a.createElement("div",{className:""!==this.props["right-text"]?p.a["right-btn"]:"hide",onClick:this.getClick.bind(this)},this.props["right-text"]))}}]),a}(c.a.Component);t.a=Object(u.g)(h)},389:function(e,t,a){e.exports={"sub-header":"subHeader_sub-header__1pvh_",back:"subHeader_back__3K4yL",title:"subHeader_title__1gr8C","right-btn":"subHeader_right-btn__1-dOl"}},519:function(e,t,a){e.exports={page:"login_page__kC9CZ",main:"login_main__3eUln","cellphone-wrap":"login_cellphone-wrap__2N28O","password-wrap":"login_password-wrap__3_sNa",password:"login_password__qsFh4","switch-wrap":"login_switch-wrap__1eZwk","sure-btn":"login_sure-btn__14qrD","fastreg-wrap":"login_fastreg-wrap__5sTxZ","img-wrap":"login_img-wrap__beW7Y"}},520:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACKElEQVRYR8WXv04VQRSHPxITQqcdHZDYK70FJPRARWGhPoH6BOATqE8glBAKEh4AAg+AiY0FRq1sjZ2JBvIlZ8ks7OzM3XvJPcnNzWZ353znd/7M7AxTtpkp+2cIwCLwGniawP8AToG9UQMaBeAh8B54CfwEjoDf4VCYdUCQTeBzLUgtgM5PgCVgI6K97UNlPgTIauaZO1y1AMqrAyNtos4FuRsQwpaeraqBlYi+NirVMgWC7JRSUaOACxl5WnSldXX8IlLW+2wNgPL7K0aTeGpUK65ffCDyaHFNDeAKeDcigOm6gHKN1SgwBMBsmAZTN7gG7HcLyf9xTAgV7ITJKWC+t2O0+qITboiZCpVwSr6K1myt0wXQVHDnC0MogDcxxh1OrWC6AIb0fQ2Xw8n9o9VNXQA1ff8MOADmw/M3YC02qb4R7ThX4RsbAqDzM+APcBgrPQdmY/K5U3aZket8bIBfwBzgzG9sAVCFL8DyfQP8A45j3099mTqrPgVL709MgRyAk88qv3eAS0DJHydF5/X3qI1WjhMJJqaAzr4CD4DziFjp/0Zt5LpgYgA6EMKe1vH/TE3cBpkoQLO4Ry4HTE72wUXooo7Pko0CoGJaa3PLjeInPf2cQm3FxX6B1M6wSz7Gybl3EjourWhPQW9LElTed38xctdunZRz27EfH58ivw6Y4vE6A9LM/ke574m+E5EvW7n+j2PWk2p2nilqjmTjOC++O3WAa7s7fiH4ZcEhAAAAAElFTkSuQmCC"},521:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA+0lEQVRYR+2W4Q2CMBCFPzbQDdzAuIFOopuom8gEjqBuoBPoCG6geQkYQlpKK5WY3P0hBNr77sH1XsHIUYycn78BmADzSLVuwDO0JqTANSFxO6f2WPhAugBmwB0ogUOoEs/zDbAG/6fuAlgCJ2AP7BIBtG5rAKaAKQBMfYfSr9pwBZxdrWwApoApEPIDr8Y01GTTfd+op6imYVIbKlETICa51qq4ehwPAuCqXFZN4bNeWQFkWI4VgCqU9WpHVoB6cyX1uaasAJJf57uuUuORSwEZ0m9MqYxp0jRUQUPY8kulkLN9Q+dAc5Fkjg11h+vn/OwTAxCbvNf7BvAGJoBjIRa5KqsAAAAASUVORK5CYII="},579:function(e,t,a){"use strict";a.r(t);a(443);var n=a(444),r=a.n(n),o=a(86),i=a.n(o),s=(a(391),a(392)),c=a.n(s),u=a(119),l=a(52),d=a(53),p=a(55),h=a(54),m=a(1),f=a.n(m),g=a(387),A=a(118),b=a(388),w=a(519),k=a.n(w),C=a(7),v=a(382),y=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={SwitchChecked:!1,sCellphone:"",sPassword:""},a.bSubmit=!0,a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("title").innerHTML="\u4f1a\u5458\u767b\u5f55"}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"pushPage",value:function(e){this.props.history.push(C.a.path+e)}},{key:"submitData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.sCellphone.match(/^\s*$/)){e.next=5;break}return c.a.info("\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7",1.7),e.abrupt("return",!1);case 5:if(this.state.sCellphone.match(/^1[0-9][0-9]{9}/)){e.next=8;break}return c.a.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7",1.7),e.abrupt("return",!1);case 8:return e.next=10,this.isSameCellphone();case 10:if(200!==(t=e.sent).code){e.next=15;break}if("0"!==t.data.isreg){e.next=15;break}return c.a.info("\u8be5\u624b\u673a\u53f7\u672a\u6ce8\u518c,\u8bf7\u5148\u6ce8\u518c\u518d\u767b\u5f55",1.7),e.abrupt("return",!1);case 15:if(!this.state.sPassword.match(/^\s*$/)){e.next=18;break}return c.a.info("\u8bf7\u8f93\u5165\u5bc6\u7801",1.7),e.abrupt("return",!1);case 18:a=C.a.baseUrl+"api/home/user/pwdlogin?token="+C.a.token,this.bSubmit&&(this.bSubmit=!1,Object(v.a)(a,"post",{cellphone:this.state.sCellphone,password:this.state.sPassword}).then((function(e){200===e.code?(localStorage.uid=e.data.uid,localStorage.nickName=e.data.nickname,localStorage.authToken=e.data.auth_token,localStorage.isLogin=!0,n.props.dispatch(g.a.user.login({uid:e.data.uid,nickname:e.data.nickname,authToken:e.data.auth_token,isLogin:!0})),n.props.history.goBack()):c.a.info(e.data,1.7,(function(){n.bSubmit=!0}))})));case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isSameCellphone",value:function(){var e=C.a.baseUrl+"api/home/user/isreg?token="+C.a.token;return Object(v.a)(e,"post",{username:this.state.sCellphone}).then((function(e){return e}))}},{key:"render",value:function(){var e=this;return f.a.createElement("div",{className:k.a.page},f.a.createElement(b.a,{title:"\u4f1a\u5458\u767b\u5f55"}),f.a.createElement("div",{className:k.a.main},f.a.createElement("div",{className:k.a["cellphone-wrap"]},f.a.createElement("input",{type:"tel",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onChange:function(t){e.setState({sCellphone:t.target.value})}})),f.a.createElement("div",{className:k.a["password-wrap"]},f.a.createElement("div",{className:k.a.password},f.a.createElement("form",null,f.a.createElement("input",{type:this.state.SwitchChecked?"text":"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",autoComplete:"tel",onChange:function(t){e.setState({sPassword:t.target.value})}}))),f.a.createElement("div",{className:k.a["switch-wrap"]},f.a.createElement(r.a,{color:"#eb1625",checked:this.state.SwitchChecked,onChange:function(){e.setState({SwitchChecked:!e.state.SwitchChecked})}}))),f.a.createElement("div",{className:k.a["sure-btn"],onClick:this.submitData.bind(this)},"\u767b\u5f55"),f.a.createElement("div",{className:k.a["fastreg-wrap"]},f.a.createElement("div",{className:k.a["img-wrap"]},f.a.createElement("img",{src:a(520),alt:"\u5fd8\u8bb0\u5bc6\u7801"}),"\u5fd8\u8bb0\u5bc6\u7801"),f.a.createElement("div",{className:k.a["img-wrap"],onClick:this.pushPage.bind(this,"reg/index")},f.a.createElement("img",{src:a(521),alt:"\u5feb\u901f\u6ce8\u518c"}),"\u5feb\u901f\u6ce8\u518c"))))}}]),n}(f.a.Component);t.default=Object(A.b)((function(e){return{state:e}}))(y)}}]);
//# sourceMappingURL=26.41ac3b44.chunk.js.map