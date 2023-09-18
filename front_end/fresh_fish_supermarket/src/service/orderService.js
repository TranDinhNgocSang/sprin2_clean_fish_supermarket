import axios from "axios";


export const getListOrderByUser = async (page,headers)=>{
    const res = await axios.get("http://localhost:8080/order/list-order/"+page,{headers});
    return res.data;
}

export const getListOrderDetail= async (idOrder,headers)=>{
    const res = await axios.get("http://localhost:8080/order/list-order-detail/"+idOrder,{headers});
    return res.data;
}