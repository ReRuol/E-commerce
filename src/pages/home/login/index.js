import React from 'react';
import action from '../../../actions';
import {connect} from "react-redux";
import SubHeaderComponent from "../../../components/header/subHeader";
import Css from "../../../assets/css/home/login/index.module.css";
import {Switch,Toast} from "antd-mobile";
import config from '../../../assets/js/conf/config';
import { request } from '../../../assets/js/libs/request';
class  LoginIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            SwitchChecked:false,
            sCellphone:"",
            sPassword:"",
        }
        this.bSubmit=true;
    }
    componentDidMount(){
        document.getElementById('title').innerHTML="会员登录"
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return;
        }
    }

    //跳转页面
    pushPage(url){
        this.props.history.push(config.path+url)
    }

    //点击登录按钮提交数据
    async submitData(){
        if(this.state.sCellphone.match(/^\s*$/)){
            Toast.info("请输入您的手机号",1.7);
            return false;
        }else if(!this.state.sCellphone.match(/^1[0-9][0-9]{9}/)){
            Toast.info("请输入正确的手机号",1.7);
            return false;
        }
        let resData=await this.isSameCellphone();
        if(resData.code===200){
            if(resData.data.isreg==="0"){
                Toast.info("该手机号未注册,请先注册再登录",1.7);
                return false;
            }
        }
        if(this.state.sPassword.match(/^\s*$/)){
            Toast.info("请输入密码",1.7);
            return false;
        }
        let sUrl=config.baseUrl+"api/home/user/pwdlogin?token="+config.token;
        if(this.bSubmit){
            this.bSubmit=false;
            request(sUrl,"post",{cellphone:this.state.sCellphone,password:this.state.sPassword}).then(res=>{
                
                if(res.code===200){
                    localStorage['uid']=res.data.uid;
                    localStorage['nickName']=res.data.nickname;
                    localStorage['authToken']=res.data.auth_token;
                    localStorage['isLogin']=true;
                    this.props.dispatch(action.user.login({uid:res.data.uid,nickname:res.data.nickname,
                        authToken:res.data.auth_token,isLogin:true}));
                    this.props.history.goBack();
                }else{
                    Toast.info(res.data,1.7,()=>{
                        this.bSubmit=true;
                    })
                }
            });
        }
        
    }

    //检测手机号是否注册过
    isSameCellphone(){
        let sUrl=config.baseUrl+"api/home/user/isreg?token="+config.token;
        return request(sUrl,"post",{username:this.state.sCellphone}).then(res=>{
            return res;
        });
    }
    render(){
        return(
            <div className={Css['page']}>  
                <SubHeaderComponent title="会员登录"></SubHeaderComponent>
                <div className={Css["main"]}>
                    <div className={Css["cellphone-wrap"]}>
                        <input type="tel" placeholder="请输入手机号" onChange={(e)=>{
                            this.setState({sCellphone:e.target.value})
                        }}/>
                    </div>
                    <div className={Css["password-wrap"]}>
                        <div className={Css["password"]}>
                            <form >
                                <input type={this.state.SwitchChecked?"text":"password"} placeholder="请输入密码" autoComplete='tel' onChange={(e)=>{
                                    this.setState({sPassword:e.target.value})
                                }}/>
                            </form>
                        </div>
                        <div className={Css["switch-wrap"]}>
                            <Switch color="#eb1625" checked={this.state.SwitchChecked} onChange={()=>{
                                this.setState({SwitchChecked:!this.state.SwitchChecked})
                            }}></Switch>
                        </div>
                    </div>
                    <div className={Css["sure-btn"]} onClick={this.submitData.bind(this)}>登录</div>
                    <div className={Css["fastreg-wrap"]}>
                        <div className={Css['img-wrap']}>
                            <img src={require("../../../assets/images/home/index/forget.png" )}alt="忘记密码"/>忘记密码
                        </div>
                        <div className={Css['img-wrap']} onClick={this.pushPage.bind(this,"reg/index")}>
                            <img src={require("../../../assets/images/home/index/reg.png" )}alt="快速注册"/>快速注册
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(LoginIndex)