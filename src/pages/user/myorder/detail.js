import React from 'react';
import {connect} from "react-redux";
import {safeAuth,setScrollTop, localParam,lazyImg} from '../../../assets/js/utils/util.js';
import { request } from '../../../assets/js/libs/request.js';
import config from '../../../assets/js/conf/config';
import SubHeader from '../../../components/header/subHeader'; 
import Css from '../../../assets/css/user/myorder/detail.module.css';
class  OrderDetail extends React.Component{
    constructor(props){
        super(props);
        safeAuth(props);
        this.state={
            ordernum:props.location.search?localParam(props.location.search).search.ordernum:'',
            name:'',
            cellphone:'',
            status:'',
            province:'',
            city:'',
            area:'',
            address:'',
            freight:0,
            total:0,
            trueTotal:0,
            orderTime:'',
            goods:[],
        }
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return;
        }
    }
    componentDidMount(){
        setScrollTop();
        this.getUserInfo();
    }
    UNSAFE_componentWillReceiveProps(newProps){
   
    }
    
     //获取用户信息
     getUserInfo(){
        let sUrl=config.baseUrl+"api/user/myorder/desc?uid="+this.props.state.user.uid+"&ordernum="+this.state.ordernum+"&token="+config.token;
        if(this.props.state.user.isLogin){
            request(sUrl).then((res)=>{
                if(res.code===200){
                    this.setState({name:res.data.name,cellphone:res.data.cellphone,status:res.data.status,province:res.data.province,
                    city:res.data.city,area:res.data.area,address:res.data.address,freight:res.data.freight,total:res.data.total,
                    trueTotal:res.data.truetotal,orderTime:res.data.ordertime,goods:res.data.goods});
                    lazyImg();
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
            <div className={Css['page']}>
                <SubHeader title="订单详情" ></SubHeader>
                <div className={Css['main']}>
                    <div className={Css["ordernum"]}>订单编号：{this.state.ordernum}</div>
                    <div className={Css["address-wrap"]}>
                        <div className={Css["name"]}><img src={require('../../../assets/images/common/my2.png')}  alt={this.state.name} />{this.state.name}</div>
                        <div className={Css['cellphone']}><img src={require('../../../assets/images/common/cellphone.png')}  alt={this.state.name}></img>{this.state.cellphone}</div>
                        <div className={Css['address']}>{this.state.province} {this.state.city} {this.state.area} {this.state.address}</div>
                    </div>
                    <div className={Css['ordernum']+" "+Css['second']}>订单编号：{this.state.ordernum}</div>

                    {
                        this.state.goods.length>0?
                            this.state.goods.map((item,index)=>{
                                return(
                                    <div key={index} className={Css['goods-list']} onClick={this.pushPage.bind(this,"goods/details/item?gid="+item.gid)}>
                                        <div className={Css['image']}><img data-echo={item.image} src={require("../../../assets/images/common/lazyImg.jpg")} alt={item.title}/></div>
                                        <div className={Css['goods-info']}>
                                            <div className={Css['title']}>{item.title}</div>
                                            <div className={Css['attr']}>
                                                <span className={Css['amount']}>x{item.amount}</span>
                                                {
                                                    item.param!==null?
                                                        item.param.map((item2,index2)=>{
                                                            return(
                                                                <span key={index2}>{item2.title}：
                                                                    {item2.param!==null || item2.param.length>0?
                                                                        item2.param.map((item3,index3)=>{
                                                                            return (
                                                                                <React.Fragment key={index3}>
                                                                                    {item3.title}
                                                                                </React.Fragment>
                                                                            )
                                                                        })
                                                                    :''}
                                                                </span>
                                                            )
                                                        })
                                                    :''
                                                }
                                            </div>
                                        </div>
                                        <div className={Css['price']}>¥ {item.price}</div>
                                    </div>
                                )
                            })
                        : <div className="null-item">您还没有相关的订单</div>
                    }
                
                    <ul className={Css['order-status']}>
                        <li>支付状态</li>
                        <li>{this.state.status==="0"?"待付款":this.state.status==="1"?'待收货':"已收货"}</li>
                    </ul>
                    <div className={Css['total-wrap']}>
                        <ul className={Css['total']}>
                            <li>商品总额</li>
                            <li>¥ {this.state.total}</li>
                        </ul>
                        <ul className={Css['total']}>
                            <li>+运费</li>
                            <li>¥ {this.state.freight}</li>
                        </ul>
                    </div>

                    <div className={Css['true-total']}>
                        <div className={Css['total']}>实付金额：<span>¥ {this.state.trueTotal}</span></div>
                        <div className={Css['order-time']}>{this.state.orderTime}</div>
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
})(OrderDetail)