import React from 'react';
import {connect} from "react-redux";
import Css from '../../../assets/css/home/balance/end.module.css';
import { request } from '../../../assets/js/libs/request';
import {safeAuth,setScrollTop} from '../../../assets/js/utils/util.js';
import config from '../../../assets/js/conf/config';
import SubHeader from "../../../components/header/subHeader";
class  BalanceEnd extends React.Component{
    constructor(props){
        super(props);
        safeAuth(props);
        this.state={
            orderNum:'',
        }

    }
    
    replacePage(url){
        this.props.history.replace(config.path+url)
    }

    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return;
        }
    }

    componentDidMount(){
        setScrollTop();
        this.getOrdernum();
    }

    //获取订单编号
    getOrdernum(){
        let sUrl=config.baseUrl+"/api/order/lastordernum?uid="+this.props.state.user.uid+"&token="+config.token;
        request(sUrl).then((res)=>{
            if(res.code===200){
                this.setState({orderNum:res.data.ordernum})
            }
        })
    }

    //跳转页面
    pushPage(url){
        this.props.history.replace(config.path+url)
    }
    render(){
        return(
            <div className={Css['page']}>
                <SubHeader title="订单已完成"></SubHeader>
                <div className={Css["main"]}>
                    <div className={Css["list"]+" "+Css['success']}>订购成功</div>
        <div className={Css["list"]+" "+Css['ordernum']}>订单编号：{this.state.orderNum}</div>
                    <div className={Css["list"]} onClick={this.pushPage.bind(this,"myorder/order?status=all")}>查看订单</div>
                    <div className={Css["pay-btn"]}>去付款</div>
                </div>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(BalanceEnd)