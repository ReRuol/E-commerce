import React from 'react';
import {connect} from "react-redux";
import SubHeader from '../../../components/header/subHeader'; 
import Css from '../../../assets/css/user/myorder/add_review.module.css';
import { request } from '../../../assets/js/libs/request.js';
import {safeAuth,localParam} from '../../../assets/js/utils/util.js';
import {Toast} from 'antd-mobile';
import config from '../../../assets/js/conf/config';
class OrderPage extends React.Component{
    constructor(props){
        super(props);
        safeAuth(props);
        this.state={
            service:[],
            content:'',
        };
        this.gid=localParam(this.props.location.search).search.gid?localParam(this.props.location.search).search.gid:'';
        this.ordernum=localParam(this.props.location.search).search.ordernum?localParam(this.props.location.search).search.ordernum:'';
        this.isSubmit=true;
    }
    componentDidMount(){
        this.getServices();
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

    //选择评分星级
    selectScores(index,index2){
        let service=this.state.service;
        for(let i=0;i<service[index].scores.length;i++){
            service[index].scores[i].checked=false;
        }
        for(let i=0;i<=index2;i++){
            service[index].scores[i].checked=true;
        }
        this.setState({service:service});
    }

    //获取星级选项数据
    getServices(){
        let sUrl=config.baseUrl+"/api/home/reviews/service?token="+config.token;
        request(sUrl).then((res)=>{
            if(res.code===200){
                let service=res.data;
                for(let i=0;i<service.length;i++){
                    service[i].scores=[
                        {
                            checked:false,
                            score:1,
                        },
                        {
                            checked:false,
                            score:2,
                        },
                        {
                            checked:false,
                            score:3,
                        },
                        {
                            checked:false,
                            score:4,
                        },
                        {
                            checked:false,
                            score:5,
                        },

                    ]
                };
                this.setState({service:service});
            }
        })
    }

    //提交评价
    submitSave(){
        if(this.isSubmit){
            this.isSubmit=false;
            let isCheck=false,rsdata=[],scores=[],score=0;
            for(let i=0;i<this.state.service.length;i++){
                isCheck=false;
                for(let j=0;j<this.state.service[i].scores.length;j++){
                    if(this.state.service[i].scores[j].checked){
                        isCheck=true;
                        break;
                    }
                }
                if(!isCheck){
                    Toast.info("请选择"+this.state.service[i].title,1.7);
                    this.isSubmit=true;
                    return;
                }
            }
            if(this.state.content.match(/^\s*$/)){
                Toast.info("请填写评价~",1.7);
                this.isSubmit=true;
                return;
            }
            //组装评价数据
            for(let i=0;i<this.state.service.length;i++){
                scores=[];
                for(let j=0;j<this.state.service[i].scores.length;j++){
                    if(this.state.service[i].scores[j].checked){
                        scores.push(this.state.service[i].scores[j].score)
                    }
                }
                score=scores[scores.length-1];
                rsdata.push({
                    gid:this.gid,
                    myid:this.props.state.user.uid,
                    rsid:this.state.service[i].rsid,
                    score:score,
                })
            }
            let data={
                uid:this.props.state.user.uid,gid:this.gid,ordernum:this.ordernum,content:this.state.content,
                rsdata:JSON.stringify(rsdata),
            }
            let sUrl=config.baseUrl+"/api/home/reviews/add?token="+config.token;
            request(sUrl,"post",data).then((res)=>{
                if(res.code===200){
                    Toast.info(res.data,1.7,()=>{
                        this.props.history.goBack();
                    })
                }else{
                    this.isSubmit=true;
                }
            })
        }
        

    }
    render(){
        return(
            <div className={Css['page']}>
                <SubHeader title="评价页面"></SubHeader>
                <div className={Css['main']}>
                    {
                        this.state.service.length>0?
                            this.state.service.map((item,index)=>{
                                return (
                                    <ul key={index} className={Css['service']}>
                                        <li>{item.title}</li>
                                        <li>
                                            {
                                                item.scores.length>0?
                                                    item.scores.map((item2,index2)=>{
                                                        return(
                                                            <div key={index2} onClick={this.selectScores.bind(this,index,index2)}
                                                            className={item2.checked?Css['stars']+' '+Css['active']:Css['stars']}></div>
                                                        )
                                                    })
                                                :''
                                            }
                                        </li>
                                    </ul>
                                )
                            })
                        :''
                    }

                    <div className={Css['content-wrap']}>
                        <textarea placeholder="快来分享你的评价吧!" value={this.state.content} onChange={(e)=>{this.setState({content:e.target.value})}}></textarea>
                    </div>
                    <button className={Css['submit']} onClick={this.submitSave.bind(this)}>提交</button>
                </div>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(OrderPage)