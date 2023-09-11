import axios from "axios";

export const getLimitListProductByType = async(idType,limit)=>{
   const res = await axios.get(`http://localhost:8080/product/get/${idType}/${limit}`)
return res.data;
}

export const getProductById = async(id)=>{
   const res = await axios.get(`http://localhost:8080/product/${id}`)
return res.data;
}

export const countProductByIdType = async(idType)=>{
   const res = await axios.get(`http://localhost:8080/product/count/${idType}`)
return res.data;
}

export const searchByName = async(name,limit)=>{
   const res = await axios.get(`http://localhost:8080/product/search/${name}/${limit}`)
return res.data;
}

export const countSearch = async(name)=>{
   const res = await axios.get(`http://localhost:8080/product/count-search/${name}`)
return res.data;
}

export const countSearchBetween = async(begin,end,idType)=>{
   const res = await axios.get(`http://localhost:8080/product/count-between/${begin}/${end}/${idType}`)
return res.data;
}

export const getListProductBetweenByPrice= async(begin,end,idType,limit)=>{
   const res = await axios.get(`http://localhost:8080/product/between/${begin}/${end}/${idType}/${limit}`)
return res.data;
}