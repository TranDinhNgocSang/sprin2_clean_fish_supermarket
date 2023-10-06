import axios from "axios";

export const payWithVNpay = async (total) =>{
    const res = await axios.post(`http://localhost:8080/vnpay/create/${total}`)
    return res.data;
}

export const returnPaymentVNpay = async(address,note,headers)=>{
  const res = await axios.post(`http://localhost:8080/vnpay/${address}/${note}`,null,{headers})
  return res.data;
}

export const keepProduct = async(headers)=>{
  const res = await axios.get(`http://localhost:8080/vnpay/keep-product`,{headers})
  return res.data;
}

export const returnProduct = async(headers)=>{
  const res = await axios.get(`http://localhost:8080/vnpay/return-product`,{headers})
  return res.data;
}

