import React from 'react';
import {connect} from "react-redux";
import action from '../../../actions';
import config from '../../../assets/js/conf/config';
import { request } from '../../../assets/js/libs/request';
import SubHeader from '../../../components/header/subHeader'; 
import Css from '../../../assets/css/user/my/index.module.css';
import {setScrollTop} from '../../../assets/js/utils/util.js';
import {Modal} from 'antd-mobile';
class  IndexComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sHead:"",
            sNickName:'',
            sPoints:0,

        }
    }
    componentDidMount(){
        setScrollTop();
        this.getUserInfo();
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return;
        }
    }

    //安全退出
    outLogin(){
        if(this.props.state.user.isLogin===true){
            Modal.alert('', '确认要退出吗？', [
                { text: '取消', onPress: () => {}, style: 'default' },
                { text: '确认', onPress: () => {
                    let sUrl=config.baseUrl+"/api/home/user/safeout?token="+config.token;
                    request(sUrl, "post",{uid:this.props.state.user.uid}).then(res=>{
                        if (res.code===200){
                            this.props.dispatch(action.user.outLogin());
                            this.props.dispatch(action.cart.clearCart());
                            this.props.history.push(config.path+'login/index');
                        }
                    });}
                    
                    
                }
            ]);
            
        }else{
            this.props.history.push(config.path+'login/index');
        }
    }

    //获取用户信息
    getUserInfo(){
        let sUrl=config.baseUrl+"api/user/myinfo/userinfo/uid/"+this.props.state.user.uid+"?token="+config.token;
        if(this.props.state.user.isLogin){
            request(sUrl).then((res)=>{
                if(res.code===200){
                    this.setState({sHead:res.data.head,sNickName:res.data.nickname,sPoints:res.data.points})
                }
            })
        }
        
    }

    //跳转页面
    pushPage(url){
        this.props.history.push(config.path+url)
    }
    render(){
        return(
            <div>
                <SubHeader title="个人中心"></SubHeader>
                <div className={Css['user-info-wrap']}>
                    <div className={Css["head"]}>
                        <img src={this.state.sHead!==''?this.state.sHead:require("../../../assets/images/user/my/default-head.png")} alt={this.state.sNickName}/>
                    </div>
                    <div className={Css["nickname"]}>{this.state.sNickName!==""?this.state.sNickName:"会员昵称"}</div>
                    <div className={Css["points"]}>我的积分：{this.state.sPoints}</div>
                </div>
                <div className={Css["order-name-wrap"]} onClick={this.pushPage.bind(this,"myorder/order?status=all")}>
                    <div className={Css["order-name"]}>全部订单</div>
                    <div className={Css["show-order"]}>查看全部订单></div>
                </div>
                <div className={Css["order-status-wrap"]}>
                    <div className={Css["item"]} onClick={this.pushPage.bind(this,"myorder/order?status=0")}>
                        <div className={Css["icon"]+" "+Css['wait']}></div>
                        <div className={Css["text"]}>待支付</div>
                    </div>
                    <div className={Css["item"]} onClick={this.pushPage.bind(this,"myorder/order?status=1")}>
                        <div className={Css["icon"]+" "+Css['take']}></div>
                        <div className={Css["text"]}>待收货</div>
                    </div>
                    <div className={Css["item"]} onClick={this.pushPage.bind(this,"myorder/review")}>
                        <div className={Css["icon"]+" "+Css['comment']}></div>
                        <div className={Css["text"]}>待评价</div>
                    </div>
                </div>
                <div className={Css["list-menu-wrap"]}>
                    <ul onClick={this.pushPage.bind(this,"profile/index")}>
                        <li >个人资料</li>
                        <li></li>
                    </ul>
                    <ul onClick={this.pushPage.bind(this,"user/address/index")}>
                        <li>收货地址管理</li>
                        <li></li>
                    </ul>
                    <ul onClick={this.pushPage.bind(this,"user/mobile/index")}>
                        <li>绑定手机</li>
                        <li></li>
                    </ul>
                    <ul onClick={this.pushPage.bind(this,"user/modpwd/index")}>
                        <li>修改密码</li>
                        <li></li>
                    </ul>
                    <ul onClick={this.pushPage.bind(this,"user/myfav/index")}>
                        <li>我的收藏</li>
                        <li></li>
                    </ul>
                    <div className={Css["btn"]} onClick={this.outLogin.bind(this)}>{this.props.state.user.isLogin?"安全退出":"登录/注册"}</div>
                </div>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(IndexComponent)