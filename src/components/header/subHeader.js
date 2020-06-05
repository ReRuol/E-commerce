import React from 'react';
import {withRouter} from "react-router";
import config from '../../assets/js/conf/config';
import Css from './subHeader.module.css';
class  SubHeader extends React.Component{
    componentDidMount(){
   
    }
    goBack(){
        if(this.props.location.pathname===config.path+"address/index"){
            this.props.history.replace(config.path+"balance/index")
        }else{
            this.props.history.goBack();
        }
    }

    //获取父组件的点击事件
    getClick(){
        this.props['onClickRightBtn']();
    }   
    render(){
        return(
            <div className={Css['sub-header']}>
                <div className={Css["back"]}  
                    onClick={this.goBack.bind(this)}>
                </div>
                <div className={Css["title"]}>{this.props.title}</div>
                <div className={this.props["right-text"]!==""?Css["right-btn"]:"hide"} onClick={this.getClick.bind(this)}>
                    {this.props['right-text']}
                </div>
            </div>
        );
    }
}
export default withRouter(SubHeader);