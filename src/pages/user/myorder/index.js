import React from 'react';
import {connect} from "react-redux";
import {Route,Switch} from 'react-router-dom';
import asyncComponents from '../../../components/async/AsyncComponent';
import {localParam,safeAuth} from '../../../assets/js/utils/util.js';
import config from '../../../assets/js/conf/config';
import SubHeader from '../../../components/header/subHeader'; 
import Css from '../../../assets/css/user/myorder/index.module.css';
import Tags from '../../../components/tags/tags';
const OrderPage=asyncComponents(()=>import('./order.js'));
const ReviewPage=asyncComponents(()=>import('./review.js'));
class  MyOrderIndex extends React.Component{
    constructor(props){
        super(props);
        safeAuth(props);
        this.state={
            status:localParam(this.props.location.search).search.status?localParam(this.props.location.search).search.status:'',
            title:'',
        }
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return;
        }
    }
    componentDidMount(){
        this.getTitle();
    }
    UNSAFE_componentWillReceiveProps(newProps){
        this.setState({status:localParam(newProps.location.search).search.status},()=>{
            this.getTitle();
        })
    }
    

    getTitle(){
        switch(this.state.status){
            case "all":
                this.setState({title:"全部订单"});
                break;
            case "0":
                this.setState({title:"待付款"});
                break;
            case "1":
                this.setState({title:"待收货"});
                break;
            case "2":
                this.setState({title:"待评价"});
                break;
            default:
                this.setState({title:"全部订单"});
                break;
            
        }
    }

    render(){
        return(
            <div className={Css['page']}>
                <SubHeader title={this.state.title} ></SubHeader>
                <Tags></Tags>
                <div className={Css["main"]}>
                    <Switch>
                        <Route path={config.path+"myorder/order"} component={OrderPage}></Route>
                        <Route path={config.path+"myorder/review"} component={ReviewPage}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(MyOrderIndex)