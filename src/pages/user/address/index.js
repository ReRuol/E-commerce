import React from 'react';
import {connect} from "react-redux";
import config from '../../../assets/js/conf/config';
import { request } from '../../../assets/js/libs/request';
import SubHeader from '../../../components/header/subHeader'; 
import Css from '../../../assets/css/user/address/index.module.css';
import {safeAuth,setScrollTop} from '../../../assets/js/utils/util.js';
class  UserAddressIndex extends React.Component{
    constructor(props){
        super(props);
        safeAuth(props);
        this.state={
            datas:[],

        }
    }
    componentDidMount(){
        setScrollTop();
        this.getData();
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return;
        }
    }

    //从后台获取数据
    getData(){
        let sUrl=config.baseUrl+"/api/user/address/index?uid="+this.props.state.user.uid +"&token="+config.token;
        request(sUrl).then((res)=>{
            if(res.code===200){
                this.setState({datas:res.data})
            }
        })
    }
    
    //跳转页面
    pushPage(url){
        this.props.history.push(config.path+url)
    }
    
    render(){
        return(
            <div className={Css['page']}>
                <SubHeader title="收货地址管理"></SubHeader>
               <div className={Css['main']}>
                   {
                       this.state.datas.length>0?
                            this.state.datas.map((item,index)=>{
                                return(
                                    <div key={index} className={Css['list']} onClick={this.pushPage.bind(this,"user/address/mod?aid="+item.aid)}>
                                        <div className={Css['name-wrap']}>
                                        <span>{item.name}</span>    <span>{item.cellphone}</span>
                                        </div>
                                        <div className={Css['address']}>
                                            {item.isdefault==="1"?<span>默认</span>:''}
                                            {item.province} {item.city} {item.area} {item.address}
                                        </div>
                                        <div className={Css['right-arrow']}></div>
                                    </div>
                                )
                            })
                       :<div className="null-item">您还没有设置收货地址!</div>
                   }
                   

                   <div className={Css['bottom-block']}></div>
               </div>

               <div className={Css['btn-wrap']}>
                    <div className={Css['add-btn']} onClick={this.pushPage.bind(this,"address/add")}>+添加新地址</div>
               </div>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(UserAddressIndex)