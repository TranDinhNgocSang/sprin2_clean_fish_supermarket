import axios from "axios";

export const getLimitListProductByType = async(idType,limit)=>{
   const res = await axios.get(`http://localhost:8080/product/get/${idType}/${limit}`)
return res.data;
}