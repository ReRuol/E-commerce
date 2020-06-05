import React from 'react';
import {withRouter} from 'react-router';
import config from '../../assets/js/conf/config.js';
import {localParam} from '../../assets/js/utils/util.js';
import Css from './tags.module.css';
import {connect} from "react-redux";
class TagsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
           status:localParam(this.props.location.search).search.status?localParam(this.props.location.search).search.status:'',
        }
       
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return;
        }
    }
    UNSAFE_componentWillReceiveProps(newProps){
        this.setState({status:localParam(newProps.location.search).search.status})
    }
    
    //跳转页面
    replacePage(url){
        this.props.history.replace(config.path+"transfer");
        setTimeout(()=>{
            this.props.history.replace(config.path+url)
        },20)
        
    }

    render(){
        return(
            <div className={Css["tags-wrap"]}>
                <div className={this.state.status==="all"?Css["tags"]+" "+Css['active']:Css["tags"]} 
                    onClick={this.replacePage.bind(this,"myorder/order?status=all")}>全部订单</div>

                <div className={this.state.status==="0"?Css["tags"]+" "+Css['active']:Css["tags"]} 
                    onClick={this.replacePage.bind(this,"myorder/order?status=0")}>待付款</div>

                <div className={this.state.status==="1"?Css["tags"]+" "+Css['active']:Css["tags"]} 
                    onClick={this.replacePage.bind(this,"myorder/order?status=1")}>待收货</div>

                <div className={this.state.status==="2"?Css["tags"]+" "+Css['active']:Css["tags"]} 
                    onClick={this.replacePage.bind(this,"myorder/review?status=2")}>待评价</div>
            </div>
        );
    }
}
export default connect((state)=>{
    return{
        state:state
    }
})(withRouter(TagsComponent))