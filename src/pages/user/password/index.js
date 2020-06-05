import React from 'react';
import {connect} from "react-redux";
import config from '../../../assets/js/conf/config';
import { request } from '../../../assets/js/libs/request';
import {Toast,Switch} from "antd-mobile";
import SubHeader from '../../../components/header/subHeader'; 
import Css from '../../../assets/css/user/password/index.module.css';
import {safeAuth} from '../../../assets/js/utils/util.js';
class  MobileIndex extends React.Component{
    constructor(props){
        super(props);
        safeAuth(props);
        this.state={
            sPassword:'',
            SwitchChecked:false,

        }
        this.bSubmit=true;
    }
    componentDidMount(){
        
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

     //点击注册按钮提交数据
     async submitData(){
        if(this.state.sPassword.match(/^\s*$/)){
            Toast.info("请输入您的密码",1.7);
            return false;
        }
        if(this.state.sPassword.length<6){
            Toast.info("请输入不小于6位的密码",1.7);
            return false;
        }
        let sUrl=config.baseUrl+"api/user/myinfo/modpwd?token="+config.token;
        if(this.bSubmit){
            this.bSubmit=false;
            request(sUrl,"post",{password:this.state.sPassword,uid:this.props.state.user.uid}).then(res=>{
                if(res.code===200){
                    Toast.info(res.data,1.7,()=>{
                        this.props.history.goBack();
                    })
                    
                }else{
                    Toast.info(res.data,1.7)
                    this.bSubmit=true;
                }
            });
        }
        
    }

    render(){
        return(
            <div className={Css['page']}>
                <SubHeader title="修改密码"></SubHeader>
               <div className={Css['main']}>
                   <div className={Css['input-wrap']}>
                       <input className={Css['code']} placeholder="请输入不低于6位的密码" type={this.state.SwitchChecked?"text":"password"} onChange={(e)=>{this.setState({sPassword:e.target.value})}}/>
                       <div className={Css["switch-wrap"]}>
                            <Switch checked={this.state.SwitchChecked} onChange={()=>{
                                this.setState({SwitchChecked:!this.state.SwitchChecked})
                            }}></Switch>
                        </div>
                   </div>
                   <div className={Css['save-btn']} onClick={this.submitData.bind(this)}>保存</div>
               </div>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(MobileIndex)