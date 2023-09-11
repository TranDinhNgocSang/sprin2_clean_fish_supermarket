import axios from "axios";

export const loginGetToken = async (account)=>{
const res = await axios.post("http://localhost:8080/auth/signin",account)
return res.data;
}