
let CartData={
    aCartData:localStorage['cartData']!==undefined?JSON.parse(localStorage['cartData']):[],
    total:localStorage['total']!==undefined?parseFloat(localStorage['total']):0,
    freight:localStorage['freight']!==undefined?parseFloat(localStorage['freight']):0,
}

function CartReducer(state=CartData,action){
    switch (action.type){
        case "addCart":
            addCart(state,action.data);
            return Object.assign({},state, action);
        case "delItem":
            delItem(state,action.data);
            return Object.assign({},state, action);
        case "checkItem":
            checkItem(state,action.data);
            return Object.assign({},state, action);
        case "allItem":
            setAllChecked(state,action.data);
            return Object.assign({},state, action);
        case "incAmount":
            incAmount(state,action.data);
            return Object.assign({},state, action);
        case "decAmount":
            decAmount(state,action.data);
            return Object.assign({},state, action);
        case "changeAmount":
            changeAmount(state,action.data);
            return Object.assign({},state, action);
        case "clearCart":
            clearCart(state);
            return Object.assign({},state, action);
        default:
            return state;
    }
}
//添加商品
function addCart(state,action){
    let bSameItem=false;
    if(state.aCartData.length>0){
        //购物车里有相同的商品数量加1
        for(let key in state.aCartData){
            if(state.aCartData[key].gid===action.gid && JSON.stringify(state.aCartData[key].attrs)===JSON.stringify(action.attrs)){
                state.aCartData[key].amount+=1;
                bSameItem=true;
                break;
            }
        }
    }

    //没有相同的数据,则增加购物车商品
    if(!bSameItem){
        state.aCartData.push(action);
    }

    setTotal(state);
    localStorage['cartData']=JSON.stringify(state.aCartData);
}

function delItem(state,action){
    state.aCartData.splice(action.index,1);
    localStorage['cartData']=JSON.stringify(state.aCartData);
    setFreight(state);
    setTotal(state);
}

//重新计算总价
function setTotal(state){
    let total=0;
    for(let key in state.aCartData){
        if(state.aCartData[key].checked===true){
            total+=parseFloat(state.aCartData[key].price)*parseInt(state.aCartData[key].amount)
        }
    }
    //state.total=parseFloat(Math.round(total).toFixed(2));
    state.total=parseFloat(total.toFixed(3));
    localStorage['total']=state.total;
}

//计算运费
function setFreight(state){
    let aFreight=[];
    for (let key in state.aCartData){
        if(state.aCartData[key].checked){
            aFreight.push(state.aCartData[key].freight);
        }
    }
    if(aFreight.length>0){
        state.freight=Math.max.apply(null,aFreight);
    }else{
        state.freight=0
    }
    localStorage['freight']=state.freight;
}

//选择商品
function checkItem(state,action){
    state.aCartData[action.index].checked=action.checked;
    setFreight(state);
    setTotal(state);
    localStorage['cartData']=JSON.stringify(state.aCartData);
}

//全选商品
function setAllChecked(state,action){
    for(let key in state.aCartData){
        if(action.checked){
            state.aCartData[key].checked=true
        }else{
            state.aCartData[key].checked=false
        }
    }
    setTotal(state);
    setFreight(state);
    localStorage['cartData']=JSON.stringify(state.aCartData);
}

//增加数量
function incAmount(state,action){
    if(state.aCartData[action.index].amount<9999){
        state.aCartData[action.index].amount+=1;
        setTotal(state);
        localStorage['cartData']=JSON.stringify(state.aCartData);
    }
}

//减少数量
function decAmount(state,action){
    if(state.aCartData[action.index].amount>1){
        state.aCartData[action.index].amount-=1;
        setTotal(state);
        localStorage['cartData']=JSON.stringify(state.aCartData);
    }
}

//改变数量
function changeAmount(state,action){
    state.aCartData[action.index].amount=action.amount;
    setTotal(state);
    localStorage['cartData']=JSON.stringify(state.aCartData);
}

//清空购物车
function clearCart(state){
    localStorage.removeItem('cartData');
    localStorage.removeItem('total');
    localStorage.removeItem('freight');
    state.aCartData=[];
    state.total=0;
    state.freight=0;
}
export default CartReducer;