(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[35],{416:function(e,t,n){"use strict";n.r(t);var a=n(384),o=n.n(a),i=n(378),s=n.n(i),r=n(381),l=n.n(r),c=n(379),u=n.n(c),p=n(380),d=n.n(p),h=n(1),m=n.n(h),v=n(69),f=n.n(v),y=n(402),C=function(e){function t(){return s()(this,t),u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d()(t,e),l()(t,[{key:"shouldComponentUpdate",value:function(e){return!!e.hiddenClassName||!!e.visible}},{key:"render",value:function(){var e=this.props.className;this.props.hiddenClassName&&!this.props.visible&&(e+=" "+this.props.hiddenClassName);var t=o()({},this.props);return delete t.hiddenClassName,delete t.visible,t.className=e,m.a.createElement("div",o()({},t))}}]),t}(m.a.Component);function b(){}var k=function(e){function t(){s()(this,t);var e=u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.getDialogElement=function(){var t=e.props,n=t.closable,a=t.prefixCls,o=void 0;t.footer&&(o=m.a.createElement("div",{className:a+"-footer",ref:function(t){return e.footerRef=t}},t.footer));var i=void 0;t.title&&(i=m.a.createElement("div",{className:a+"-header",ref:function(t){return e.headerRef=t}},m.a.createElement("div",{className:a+"-title"},t.title)));var s=void 0;n&&(s=m.a.createElement("button",{onClick:e.close,"aria-label":"Close",className:a+"-close"},m.a.createElement("span",{className:a+"-close-x"})));var r=e.getTransitionName(),l=m.a.createElement(C,{key:"dialog-element",role:"document",ref:function(t){return e.dialogRef=t},style:t.style||{},className:a+" "+(t.className||""),visible:t.visible},m.a.createElement("div",{className:a+"-content"},s,i,m.a.createElement("div",{className:a+"-body",style:t.bodyStyle,ref:function(t){return e.bodyRef=t}},t.children),o));return m.a.createElement(y.a,{key:"dialog",showProp:"visible",onAppear:e.onAnimateAppear,onLeave:e.onAnimateLeave,transitionName:r,component:"",transitionAppear:!0},l)},e.onAnimateAppear=function(){document.body.style.overflow="hidden"},e.onAnimateLeave=function(){document.body.style.overflow="",e.wrapRef&&(e.wrapRef.style.display="none"),e.props.onAnimateLeave&&e.props.onAnimateLeave(),e.props.afterClose&&e.props.afterClose()},e.close=function(t){e.props.onClose&&e.props.onClose(t)},e.onMaskClick=function(t){t.target===t.currentTarget&&e.close(t)},e}return d()(t,e),l()(t,[{key:"componentWillUnmount",value:function(){document.body.style.overflow="",this.wrapRef&&(this.wrapRef.style.display="none")}},{key:"getZIndexStyle",value:function(){var e={},t=this.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e}},{key:"getWrapStyle",value:function(){var e=this.props.wrapStyle||{};return o()({},this.getZIndexStyle(),e)}},{key:"getMaskStyle",value:function(){var e=this.props.maskStyle||{};return o()({},this.getZIndexStyle(),e)}},{key:"getMaskTransitionName",value:function(){var e=this.props,t=e.maskTransitionName,n=e.maskAnimation;return!t&&n&&(t=e.prefixCls+"-"+n),t}},{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName,n=e.animation;return!t&&n&&(t=e.prefixCls+"-"+n),t}},{key:"getMaskElement",value:function(){var e=this.props,t=void 0;if(e.mask){var n=this.getMaskTransitionName();t=m.a.createElement(C,o()({style:this.getMaskStyle(),key:"mask-element",className:e.prefixCls+"-mask",hiddenClassName:e.prefixCls+"-mask-hidden",visible:e.visible},e.maskProps)),n&&(t=m.a.createElement(y.a,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:n},t))}return t}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.maskClosable,i=this.getWrapStyle();return t.visible&&(i.display=null),m.a.createElement("div",null,this.getMaskElement(),m.a.createElement("div",o()({className:n+"-wrap "+(t.wrapClassName||""),ref:function(t){return e.wrapRef=t},onClick:a?this.onMaskClick:void 0,role:"dialog","aria-labelledby":t.title,style:i},t.wrapProps),this.getDialogElement()))}}]),t}(m.a.Component),g=k;k.defaultProps={afterClose:b,className:"",mask:!0,visible:!1,closable:!0,maskClosable:!0,prefixCls:"rmc-dialog",onClose:b};var E=!!f.a.createPortal,N=!("undefined"===typeof window||!window.document||!window.document.createElement),w=function(e){function t(){s()(this,t);var e=u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.saveRef=function(t){E&&(e._component=t)},e.getComponent=function(t){var n=o()({},e.props);return["visible","onAnimateLeave"].forEach((function(e){n.hasOwnProperty(e)&&delete n[e]})),m.a.createElement(g,o()({},n,{visible:t,onAnimateLeave:e.removeContainer,ref:e.saveRef}))},e.removeContainer=function(){e.container&&(E||f.a.unmountComponentAtNode(e.container),e.container.parentNode.removeChild(e.container),e.container=null)},e.getContainer=function(){if(!e.container){var t=document.createElement("div"),n=e.props.prefixCls+"-container-"+(new Date).getTime();t.setAttribute("id",n),document.body.appendChild(t),e.container=t}return e.container},e}return d()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.props.visible&&this.componentDidUpdate()}},{key:"shouldComponentUpdate",value:function(e){var t=e.visible;return!(!this.props.visible&&!t)}},{key:"componentWillUnmount",value:function(){this.props.visible?E?this.removeContainer():this.renderDialog(!1):this.removeContainer()}},{key:"componentDidUpdate",value:function(){E||this.renderDialog(this.props.visible)}},{key:"renderDialog",value:function(e){f.a.unstable_renderSubtreeIntoContainer(this,this.getComponent(e),this.getContainer())}},{key:"render",value:function(){if(!N)return null;var e=this.props.visible;return E&&(e||this._component)?f.a.createPortal(this.getComponent(e),this.getContainer()):null}}]),t}(m.a.Component);t.default=w;w.defaultProps={visible:!1,prefixCls:"rmc-dialog",onClose:function(){}}},417:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(384),o=n.n(a),i=n(378),s=n.n(i),r=n(381),l=n.n(r),c=n(379),u=n.n(c),p=n(380),d=n.n(p),h=n(1),m=n.n(h),v=n(383),f=n.n(v),y=function(e){function t(){s()(this,t);var e=u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(t){e.triggerEvent("TouchStart",!0,t)},e.onTouchMove=function(t){e.triggerEvent("TouchMove",!1,t)},e.onTouchEnd=function(t){e.triggerEvent("TouchEnd",!1,t)},e.onTouchCancel=function(t){e.triggerEvent("TouchCancel",!1,t)},e.onMouseDown=function(t){e.triggerEvent("MouseDown",!0,t)},e.onMouseUp=function(t){e.triggerEvent("MouseUp",!1,t)},e.onMouseLeave=function(t){e.triggerEvent("MouseLeave",!1,t)},e}return d()(t,e),l()(t,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,t,n){var a="on"+e,o=this.props.children;o.props[a]&&o.props[a](n),t!==this.state.active&&this.setState({active:t})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.disabled,a=e.activeClassName,i=e.activeStyle,s=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},r=m.a.Children.only(t);if(!n&&this.state.active){var l=r.props,c=l.style,u=l.className;return!1!==i&&(i&&(c=o()({},c,i)),u=f()(u,a)),m.a.cloneElement(r,o()({className:u,style:c},s))}return m.a.cloneElement(r,s)}}]),t}(m.a.Component),C=y;y.defaultProps={disabled:!1}},585:function(e,t,n){"use strict";n.r(t);n(445);var a=n(446),o=n.n(a),i=(n(391),n(392)),s=n.n(i),r=n(52),l=n(53),c=n(55),u=n(54),p=n(1),d=n.n(p),h=n(118),m=n(7),v=n(382),f=n(386),y=n(387),C=n(447),b=n.n(C),k=n(448),g=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),a=t.call(this,e),Object(f.c)(e),a.state={defaultProvince:"",sProvince:"",sCity:"",sArea:"",sName:"",sCellphone:"",sAddress:"",bChecked:!1},a.aid=Object(f.b)(a.props.location.search).search.aid,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getAddress()}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"submitData",value:function(){var e=this;if(this.state.sName.match(/^\s*$/))return s.a.info("\u8bf7\u586b\u5199\u6536\u8d27\u4eba\u59d3\u540d",1.7),!1;if(this.state.sCellphone.match(/^\s*$/))return s.a.info("\u8bf7\u586b\u5199\u6536\u8d27\u4eba\u624b\u673a\u53f7",1.7),!1;if(!this.state.sCellphone.match(/^1[0-9][0-9]{9}$/))return s.a.info("\u60a8\u8f93\u5165\u7684\u624b\u673a\u53f7\u7801\u4e0d\u6b63\u786e",1.7),!1;if(""===this.state.defaultProvince)return s.a.info("\u8bf7\u586b\u5199\u6240\u5728\u5730\u533a",1.7),!1;if(this.state.sAddress.match(/^\s*$/))return s.a.info("\u8bf7\u8f93\u5165\u8be6\u7ec6\u5730\u5740",1.7),!1;var t=m.a.baseUrl+"/api/user/address/mod?token="+m.a.token,n={aid:this.aid,uid:this.props.state.user.uid,name:this.state.sName,cellphone:this.state.sCellphone,province:this.state.sProvince,city:this.state.sCity,area:this.state.sArea,address:this.state.sAddress,isdefault:this.state.bChecked?"1":"0"};Object(v.a)(t,"post",n).then((function(t){e.state.bChecked&&sessionStorage.removeItem("addressId"),200===t.code&&s.a.info("\u4fee\u6539\u6210\u529f!",1.7,(function(){e.props.history.goBack()}))}))}},{key:"getAddress",value:function(){var e=this,t=m.a.baseUrl+"/api/user/address/info?uid="+this.props.state.user.uid+"&aid="+this.aid+"&token="+m.a.token;Object(v.a)(t).then((function(t){200===t.code&&e.setState({sName:t.data.name,sCellphone:t.data.cellphone,sProvince:t.data.province,sCity:t.data.city,sArea:t.data.area,sAddress:t.data.address,bChecked:"1"===t.data.isdefault,defaultProvince:"".concat(t.data.province," ").concat(t.data.city," ").concat(t.data.area)})}))}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:b.a.page},d.a.createElement(y.a,{title:"\u4fee\u6539\u6536\u8d27\u5730\u5740"}),d.a.createElement("div",{className:b.a.main},d.a.createElement("ul",null,d.a.createElement("li",null,"\u6536\u8d27\u4eba"),d.a.createElement("li",null,d.a.createElement("input",{type:"text",placeholder:"\u6536\u8d27\u4eba\u59d3\u540d",value:this.state.sName,onChange:function(t){e.setState({sName:t.target.value})}}))),d.a.createElement("ul",null,d.a.createElement("li",null,"\u8054\u7cfb\u65b9\u5f0f"),d.a.createElement("li",null,d.a.createElement("input",{type:"text",placeholder:"\u8054\u7cfb\u4eba\u624b\u673a\u53f7",value:this.state.sCellphone,onChange:function(t){e.setState({sCellphone:t.target.value})}}))),d.a.createElement("ul",null,d.a.createElement("li",null,"\u6240\u5728\u5730\u533a"),d.a.createElement("li",null,d.a.createElement(o.a,{data:k.a,title:"\u9009\u62e9\u5730\u533a",onOk:function(t){e.setState({defaultProvince:t.join(" "),sProvince:t[0],sCity:t[1],sArea:void 0!==t[2]?t[2]:""})}},d.a.createElement("input",{type:"text",placeholder:"\u8bf7\u9009\u62e9\u6536\u8d27\u5730\u5740",readOnly:!0,value:this.state.defaultProvince,className:b.a.area})))),d.a.createElement("ul",null,d.a.createElement("li",null,"\u8be6\u7ec6\u5730\u5740"),d.a.createElement("li",null,d.a.createElement("input",{type:"text",placeholder:"\u8857\u9053\u8be6\u7ec6\u5730\u5740",value:this.state.sAddress,onChange:function(t){e.setState({sAddress:t.target.value})}}))),d.a.createElement("ul",null,d.a.createElement("li",null,"\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u5730\u5740"),d.a.createElement("li",null,d.a.createElement("input",{type:"checkbox",className:b.a.checkbox,checked:this.state.bChecked,onChange:function(t){e.setState({bChecked:!e.state.bChecked})}}))),d.a.createElement("button",{type:"button",className:b.a["submit-save"],onClick:this.submitData.bind(this)},"\u4fdd\u5b58")))}}]),n}(d.a.Component);t.default=Object(h.b)((function(e){return{state:e}}))(g)}}]);
//# sourceMappingURL=35.19d226a7.chunk.js.map