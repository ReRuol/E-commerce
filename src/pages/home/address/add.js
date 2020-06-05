import React from 'react';
import {connect} from "react-redux";
import config from '../../../assets/js/conf/config';
import { request } from '../../../assets/js/libs/request';
import {safeAuth,setScrollTop} from '../../../assets/js/utils/util.js';
import SubHeader from "../../../components/header/subHeader";
import Css from "../../../assets/css/home/address/add.module.css";
import {Picker ,Toast} from "antd-mobile";
import {province} from "../../../assets/data/province";
class  AddressAdd extends React.Component{
    constructor(props){
        super(props);
        safeAuth(props);
        this.state={
            defaultProvince:'',
            sProvince:"",
            sCity:'',
            sArea:'',
            sName:'',
            sCellphone:'',
            sAddress:'',
            bChecked:false,
        }
        this.bSubmit=true;
    }
    componentDidMount(){
        setScrollTop();
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return;
        }
    }

    //提交数据到后台
    submitData(){
        if(this.state.sName.match(/^\s*$/)){
            Toast.info("请填写收货人姓名",1.7)
            return false
        }else if(this.state.sCellphone.match(/^\s*$/)){
            Toast.info("请填写收货人手机号",1.7)
            return false
        }
        if(!this.state.sCellphone.match(/^1[0-9][0-9]{9}$/)){
            Toast.info("您输入的手机号码不正确",1.7)
            return false
        }
        if(this.state.defaultProvince===''){
            Toast.info("请填写所在地区",1.7)
            return false
        }
        if(this.state.sAddress.match(/^\s*$/)){
            Toast.info("请输入详细地址",1.7)
            return false
        }
        let url = config.baseUrl + "/api/user/address/add?token="+config.token;
        let data = {
            uid:this.props.state.user.uid,
            name:this.state.sName,
            cellphone:this.state.sCellphone,
            province:this.state.sProvince,
            city:this.state.sCity,
            area:this.state.sArea,
            address:this.state.sAddress,
            isdefault:this.state.bChecked?"1":"0"
        }

        //使用this.bSubmit来防止网速慢时重复提交的问题,其他提交数据库问题同理
        if(this.bSubmit){
            this.bSubmit=false;
            request(url,"post",data).then((res)=>{
                if(this.state.bChecked){
                    localStorage['addressId']=res.data.addressId;
                    sessionStorage.removeItem("addressId");
                }
                if(res.code===200){
                    Toast.info("添加收货地址成功!",1.7 ,()=>{
                        //this.props.history.replace(config.path+"address/index")
                        this.props.history.goBack();
                    })
                }
            });
        }

        

    }
    render(){
        return(
            <div className={Css['page']}>
                <SubHeader title="添加收货地址"></SubHeader>
                <div className={Css["main"]}>
                    <ul>
                        <li>收货人</li>
                        <li><input type="text" placeholder="收货人姓名" onChange={(e)=>{
                            this.setState({sName:e.target.value})
                        }}/></li>
                    </ul>
                    <ul>
                        <li>联系方式</li>
                        <li><input type="text" placeholder="联系人手机号" onChange={(e)=>{
                            this.setState({sCellphone:e.target.value})
                        }}/></li>
                    </ul>
                    <ul>
                        <li>所在地区</li>
                        <li>
                            <Picker data={province} title="选择地区" onOk={e =>{
                                this.setState({defaultProvince:e.join(" "),sProvince:e[0],sCity:e[1],sArea:e[2]!==undefined?e[2]:''})

                            } } >

                                <input type="text" placeholder="请选择收货地址" readOnly value={this.state.defaultProvince} className={Css['area']}/>
                            </Picker> 
                        </li>
                            
                    </ul>
                    <ul>
                        <li>详细地址</li>
                        <li><input type="text" placeholder="街道详细地址" onChange={(e)=>{
                            this.setState({sAddress:e.target.value})}}/></li>
                    </ul>
                    <ul>
                        <li>设置为默认地址</li>
                        <li><input type="checkbox" className={Css['checkbox']} checked={this.state.bChecked} onChange={(e)=>{
                            this.setState({bChecked:!this.state.bChecked})
                        }}/></li>
                    </ul>

                    <button type="button" className={Css['submit-save']} onClick={this.submitData.bind(this)}>保存</button>
                </div>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        state:state
    }
})(AddressAdd)