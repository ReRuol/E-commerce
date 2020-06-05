import React from 'react';
import SubHeaderComponent from "../../../components/header/subHeader";
import Css from "../../../assets/css/home/reg/index.module.css";
import {Switch,Toast} from "antd-mobile";
import config from '../../../assets/js/conf/config';
import { request } from '../../../assets/js/libs/request';
export default class  RegIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            SwitchChecked:false,
            sCellphone:"",
            bCodeSuccess:false,
            sCodeText:"获取短信验证码",
            sCode:"",
            sPassword:"",
        }
        this.timer=null;
        this.bSendCode=true;
        this.bSubmit=true;
    }
    componentDidMount(){
        document.getElementById('title').innerHTML="会员注册"
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        this.setState=(state,callback)=>{
            return;
        }
    }
    //验证手机号
    checkCellphone(e){
        this.setState({sCellphone:e.target.value},()=>{
            if(this.bSendCode){
                if(this.state.sCellphone.match(/^1[0-9][0-9]{9}$/)){
                    this.setState({bCodeSuccess:true})
                }else{
                    this.setState({bCodeSuccess:false})
                }
            }   
        })
    }

    //获取短信验证码
    async getCode(){
        if(this.bSendCode && this.state.bCodeSuccess){
            let resData=await this.isSameCellphone();
            if(resData.code===200){
                if(resData.data.isreg==="1"){
                    Toast.info("该手机号已注册",1.7);
                    return false;
                }
            }

            let iTime=10;
            this.setState({sCodeText:"重新发送"+iTime+"s",bCodeSuccess:false});
            this.bSendCode=false;
            this.timer=setInterval(()=>{
                if(iTime>0){
                    iTime--;
                    this.setState({sCodeText:"重新发送"+iTime+"s"})
                }else{
                    this.bSendCode=true;
                    clearInterval(this.timer);
                    this.setState({sCodeText:"获取短信验证码"})
                    this.setState({bCodeSuccess:true})
                }
            },1000)
        }
    }

    //点击注册按钮提交数据
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
            if(resData.data.isreg==="1"){
                Toast.info("该手机号已注册",1.7);
                return false;
            }
        }
        if(this.state.sCode.match(/^\s*$/)){
            Toast.info("请输入短信验证码",1.7);
            return false;
        }else if(this.state.sPassword.match(/^\s*$/)){
            Toast.info("请输入密码",1.7);
            return false;
        }
        let sUrl=config.baseUrl+"api/home/user/reg?token="+config.token;

        //使用this.bSubmit变量来避免多次点击按钮重复注册的问题
        if(this.bSubmit){
            this.bSubmit=false;
            request(sUrl,"post",{vcode:this.state.sCode,cellphone:this.state.sCellphone,password:this.state.sPassword}).then(res=>{
                if(res.code===200){
                    this.props.history.goBack();
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
                <SubHeaderComponent title="会员注册"></SubHeaderComponent>
                <div className={Css["main"]}>
                    <div className={Css["cellphone-wrap"]}>
                        <div className={Css["cellphone"]}>
                            <input type="tel" placeholder="请输入您的手机号" onChange={(e)=>{this.checkCellphone(e)}}/>
                        </div>
                        <div className={this.state.bCodeSuccess?Css["code-btn"]+" "+Css['success']:Css["code-btn"]} 
                        onClick={this.getCode.bind(this)}>{this.state.sCodeText}
                        </div>
                    </div>
                    <div className={Css["code-wrap"]}>
                        <input type="tel" placeholder="请输入短信验证码" onChange={(e)=>{
                            this.setState({sCode:e.target.value})
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
                            <Switch  checked={this.state.SwitchChecked} onChange={()=>{
                                this.setState({SwitchChecked:!this.state.SwitchChecked})
                            }}></Switch>
                        </div>
                    </div>
                    <div className={Css["sure-btn"]} onClick={this.submitData.bind(this)}>注册</div>
                </div>
            </div>
        );
    }
}