import React from 'react';
import {connect} from "react-redux";
import config from '../../../assets/js/conf/config';
import { request } from '../../../assets/js/libs/request';
import {Toast,Modal} from "antd-mobile";
import SubHeader from '../../../components/header/subHeader'; 
import Css from '../../../assets/css/user/myfav/index.module.css';
import {safeAuth,lazyImg,setScrollTop} from '../../../assets/js/utils/util.js';
import UpRefresh from "../../../assets/js/libs/uprefresh.js";
class  MyFav extends React.Component{
    constructor(props){
        super(props);
        safeAuth(props);
        this.state={
            aGoods:[],

        }
        this.oUpRefresh=null;
        this.curPage=1;
        this.maxPage=0;
        this.offsetBottom=100;
    }
    componentDidMount(){
        setScrollTop();
        this.getData();
    }
    componentWillUnmount(){
        this.oUpRefresh=null;
        this.setState=(state,callback)=>{
            return;
        }
    }
    
    //跳转页面
    pushPage(url){
        this.props.history.push(config.path+url)
    }

    //删除收藏
    delFav(index,fid){
        Modal.alert('', '确认要删除吗？', [
            { text: '取消', onPress: () => {}, style: 'default' },
            { text: '确认', onPress: () => {
                let url=config.baseUrl+"api/user/fav/del?uid="+this.props.state.user.uid+"&fid="+fid+"&token="+config.token;
                request(url,"post").then((res)=>{
                    if(res.code===200){
                        let aGoods=this.state.aGoods;
                        aGoods.splice(index,1);
                        this.setState({aGoods:aGoods},()=>{
                            lazyImg();
                        });
                    }else{
                        Toast.info(res.data,1.7)
                    }
                })
                
                }
                
                
            }
        ]);
    }

    //获取数据
    getData(){
        let url=config.baseUrl+"api/user/fav/index?uid="+this.props.state.user.uid+"&token="+config.token+"&page=1";
        request(url).then((res)=>{
            if(res.code===200){
                this.maxPage=res.pageinfo.pagenum;
                this.setState({aGoods:res.data},()=>{
                    lazyImg();
                    this.getScrollPage();
                });
            }
        })
    }

    //向下滑动刷新商品列表
    getScrollPage(){
        this.oUpRefresh=new UpRefresh({"curPage":this.curPage,"maxPage":this.maxPage,"offsetBottom":this.offsetBottom},curPage=>{
            let sUrl=config.baseUrl+"api/user/fav/index?uid="+this.props.state.user.uid+"&token="+config.token+"&page="+curPage;
            request(sUrl).then((res)=>{
                if (res.code===200){
                    if (res.data.length>0){
                        let aGoods=this.state.aGoods;
                        for (let i=0;i<res.data.length;i++){
                            aGoods.push(res.data[i]);
                        }
                        this.setState({aGoods:aGoods},()=>{
                            lazyImg();
                        });
                    }
                }
            });
        });
       
    }
    render(){
        return(
            <div className={Css['page']}>
                <SubHeader title="我的收藏"></SubHeader>
               <div className={Css['main']}>
                   {
                       this.state.aGoods.length>0?
                            this.state.aGoods.map((item,index)=>{
                                return(
                                    <div key={index} className={Css['goods-list']}>
                                        <div className={Css['image']}><img  data-echo={item.image} src={require("../../../assets/images/common/lazyImg.jpg")} alt={item.title}></img></div>
                                        <div className={Css['title']}>{item.title}</div>
                                        <div className={Css['price']}>¥ {item.price}</div>
                                        <div className={Css['btn-wrap']}>
                                            <div className={Css['btn']} onClick={this.pushPage.bind(this,"goods/details/item?gid="+item.gid)}>购买</div>
                                            <div className={Css['btn']} onClick={this.delFav.bind(this,index,item.fid)}>删除</div>
                                        </div>
                                    </div>
                                )
                            })
                       :<div className='null-item'>还没有收藏商品!</div>
                   }
               </div>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(MyFav)