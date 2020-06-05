//添加购物车商品
function addCart(data){
    return {
        type:"addCart",
        data:data,
    }
}

//删除购物车商品
function delItem(data){
    return {
        type:"delItem",
        data:data,
    }
}

//选择购物车商品
function checkItem(data){
    return {
        type:"checkItem",
        data:data,
    }
}

//全选购物车商品
function setAllChecked(data){
    return {
        type:"allItem",
        data:data,
    }
}

//增加购物车商品数量
function incAmount(data){
    return {
        type:"incAmount",
        data:data,
    }
}

//减少购物车商品数量
function decAmount(data){
    return {
        type:"decAmount",
        data:data,
    }
}

//改变数量
function changeAmount(data){
    return {
        type:"changeAmount",
        data:data,
    }
}

//清空购物车
function clearCart(data){
    return {
        type:"clearCart",
        data:data,
    }
}
export{
    addCart,
    delItem,
    checkItem,
    setAllChecked,
    incAmount,
    decAmount,
    changeAmount,
    clearCart,
}