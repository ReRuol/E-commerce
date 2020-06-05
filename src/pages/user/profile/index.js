import React from 'react';
import {connect} from "react-redux";
import config from '../../../assets/js/conf/config';
import { request } from '../../../assets/js/libs/request';
import SubHeader from '../../../components/header/subHeader'; 
import Css from '../../../assets/css/user/profile/index.module.css';
import {ActionSheet,Toast} from 'antd-mobile';
class  ProfileIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sHead:"",
            sNickName:'',
            sPoints:0,
            sGender:'',
            iGender:0,
            sHeadName:'',

        }
    }
    componentDidMount(){
        this.getUserInfo();
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return;
        }
    }

    //获取用户信息
    getUserInfo(){
        let sUrl=config.baseUrl+"api/user/myinfo/userinfo/uid/"+this.props.state.user.uid+"?token="+config.token;
        if(this.props.state.user.isLogin){
            request(sUrl).then((res)=>{
                if(res.code===200){
                    this.setState({sHead:res.data.head,sNickName:res.data.nickname,iGender:res.data.gender,
                        sGender:res.data.gender==="1"?"男":res.data.gender==="2"?"女":''},()=>{})
                }
            })
        }
        
    }

    //选择性别
    selectGender(){
        const BUTTONS = ['男', '女','取消'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            //destructiveButtonIndex: BUTTONS.length - 2,
            title: '选择性别',
            //message: 'I am description, description, description',
            maskClosable: true,
            'data-seed': 'logId',
            onTouchStart:e=>e.preventDefault(),},

            (buttonIndex) => {
                if(buttonIndex!==2){
                    this.setState({ sGender: buttonIndex===0?"男":"女",
                    iGender:buttonIndex===0?1:2,
                    },);
                }
            }
        );
    }

    //提交保存
    submitSave(){
        if(this.state.sHead===''){
            Toast.info("请上传头像~",1.7)
            return false
        }
        if(this.state.sNickName.match(/^\s*$/)){
            Toast.info("请输入昵称",1.7)
            return false
        }
        if(this.state.sGender===''){
            Toast.info("请输入性别",1.7)
            return false
        }
        let sUrl=config.baseUrl+"/api/user/myinfo/updateuser?token="+config.token;
        let jData={
            uid:this.props.state.user.uid,nickname:this.state.sNickName,gender:this.state.iGender,
            head:this.state.sHeadName
        }
        request(sUrl,"post",jData).then((res)=>{
            if(res.code===200){
                Toast.info(res.data,1.7,()=>{
                    this.props.history.goBack();
                    //this.props.history.replace(config.path+"home/my")
                })
            }
        })
    }


    //头像上传
    uploadHead(){ 
        let sUrl=config.baseUrl+"/api/user/myinfo/formdatahead?token="+config.token;
        request(sUrl,"file",{headfile:this.refs['headfile'].files[0]}).then((res)=>{
            if(res.code===200){
                this.setState({sHead:"http://vueshop.glbuys.com/userfiles/head/"+res.data.msbox,sHeadName:res.data.msbox})
            }
        })
    }
    render(){
        return(
            <div className={Css['page']}>
                <SubHeader title="个人资料" right-text="保存" onClickRightBtn={this.submitSave.bind(this)}></SubHeader>
                <div className={Css["main"]}>
                    <ul className={Css['head']}>
                        <li>头像</li>
                        <li><img src={this.state.sHead!==''?this.state.sHead:require("../../../assets/images/user/my/default-head.png")} alt={this.state.sNickName}/>
                        <input ref="headfile" type='file' onChange={this.uploadHead.bind(this)}/></li>
                    </ul>
                    <ul className={Css['list']}>
                        <li>昵称</li>
                        <li><input type="text" placeholder="请设置昵称" value={this.state.sNickName} onChange={(e)=>{
                            this.setState({sNickName:e.target.value})
                        }}/></li>
                        <li className={Css['arrow']}></li>
                    </ul>
                    <ul className={Css['list']}>
                        <li>性别</li>
                        <li><input type="text" placeholder="请选择性别" onClick={this.selectGender.bind(this)} value={this.state.sGender} readOnly/></li>
                        <li className={Css['arrow']}></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(ProfileIndex)