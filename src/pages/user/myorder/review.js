import React from 'react';
import {connect} from "react-redux";
import Css from '../../../assets/css/user/myorder/review.module.css';
import { request } from '../../../assets/js/libs/request.js';
import UpRefresh from "../../../assets/js/libs/uprefresh.js";
import {safeAuth,lazyImg} from '../../../assets/js/utils/util.js';
import config from '../../../assets/js/conf/config';
class OrderPage extends React.Component{
    constructor(props){
        super(props);
        safeAuth(props);
        this.state={
            aOrder:[],
        };
        this.oUpRefresh=null;
        this.curPage=1;
        this.maxPage=0;
        this.offsetBottom=100;
    }
    componentDidMount(){
        this.getData();
    }
    componentWillUnmount(){
        this.oUpRefresh=null;
        this.setState=(state,callback)=>{
            return;
        }
    }

    //获取待评价订单信息
    getData(){
        let sUrl=config.baseUrl+"/api/user/myorder/reviewOrder?uid="+this.props.state.user.uid+"&page="+this.curPage+"&token="+config.token;
        request(sUrl).then((res)=>{
            if(res.code===200){
                this.maxPage=res.pageinfo.pagenum;
                this.setState({aOrder:res.data},()=>{
                    lazyImg();
                    this.getScrollPage();
                });
            }
        })
        
    }

    //向下滑动刷新商品列表
    getScrollPage(){
        this.oUpRefresh=new UpRefresh({"curPage":this.curPage,"maxPage":this.maxPage,"offsetBottom":this.offsetBottom},curPage=>{
            let sUrl=config.baseUrl+"/api/user/myorder/reviewOrder?uid="+this.props.state.user.uid+"&page="+this.curPage+"&token="+config.token;
            request(sUrl).then((res)=>{
                if (res.code===200){
                    if (res.data.length>0){
                        let aOrder=this.state.aOrder;
                        for (let i=0;i<res.data.length;i++){
                            aOrder.push(res.data[i]);
                        }
                        this.setState({aOrder:aOrder},()=>{
                            lazyImg();
                        });
                    }
                }
            });
        });
       
    }

    //跳转页面
    pushPage(url){
        this.props.history.push(config.path+url)
    }
    render(){
        return(
            <React.Fragment>
                {
                    this.state.aOrder.length>0?
                        this.state.aOrder.map((item,index)=>{
                            return (
                                <div key={index} className={Css["order-list"]} onClick={this.pushPage.bind(this,"order/detail?ordernum="+item.ordernum)}>
                                    <div className={Css["ordernum-wrap"]}>
                                        <div className={Css["ordernum"]}>订单编号:{item.ordernum}</div>
                                        <div className={Css["status"]}>{item.status==="0"?"待付款":item.satus==="1"?"待收货":"已收货"}</div>
                                    </div>
                                    
                                    {
                                        item.goods.length>0?
                                            item.goods.map((item2,index2)=>{
                                                return (
                                                    <div key={index2} className={Css["item-list"]} >
                                                        <div className={Css["image"]}><img data-echo={item2.image} src={require("../../../assets/images/common/lazyImg.jpg")} alt={item2.title}/></div>
                                                        <div className={Css["title"]}>{item2.title}</div>
                                                        <div className={Css["amount"]}>x{item2.amount}</div>
                                                        <div className={Css["status-btn"]} onClick={(e)=>{e.stopPropagation();this.pushPage("order/add_review?gid="+item2.gid+"&ordernum="+item.ordernum)}}>
                                                            {item2.isreview==="0"?"评价":"追加评价"}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        :''
                                    }
                                    <div className={Css["total-wrap"]}>
                                        <div className={Css["total"]}>实际金额：¥{item.total}</div>
                                    </div> 
                                </div>
                            )
                        })
                    :<div className="null-item">您还没有相关的订单</div>
                }
            </React.Fragment>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(OrderPage)