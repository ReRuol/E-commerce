import React from 'react';
import config from '../../../assets/js/conf/config.js';
import {request} from "../../../assets/js/libs/request";
import {localParam} from '../../../assets/js/utils/util.js';
import Css from '../../../assets/css/home/goods/details_content.module.css';
export default class  DetailsContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bodys:"",
            gid:props.location.search!==""?localParam(props.location.search).search.gid:"",

        }
        
    }
    componentDidMount(){
        let sUrl=config.baseUrl+"/api/home/goods/info?gid="+this.state.gid+"&type=details&token="+config.token;
        request(sUrl).then((res)=>{
            if(res.code===200){
                /* res.data.body.replace(/[A-z]/g , ""); */
                this.setState({bodys:res.data.bodys})
            }
        });
    }
    UNSAFE_componentWillReceiveProps(){
       
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return;
        }
    }
   
    render(){
        return(
            <div>
                <div className={Css["page"]}>
                   <div className={Css['content']} dangerouslySetInnerHTML={{__html:this.state.bodys}}></div>
                </div>
            </div>
        );
    }
}