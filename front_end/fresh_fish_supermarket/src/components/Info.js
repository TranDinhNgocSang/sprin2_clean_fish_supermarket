import { useEffect, useState } from "react";
import {getUserBy} from "../service/authService"

function Infor() {
  const [user,setUser]= useState();

  const headers = {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
  };

  const getUser = async()=>{
const data = await getUserBy(headers);
setUser(data);
  }

  useEffect(()=>{
getUser();
  },[])

  if(!user){
    return null;
  }

  return (
    <>
     <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="container-xl">

        <div className="section-title" style={{paddingTop:"120px"}}>
                  <h2>Tài khoảng của bạn</h2>
                </div>
          {/* <div className="table-responsive"> */}
            <div className="table-wrapper" style={{paddingTop:"0px", paddingBottom:"90px"}}>
      
              <table className="table table-striped table-hover" style={{width:"600px", marginLeft:"30%"}}>
        <tr>
            <th>Tên</th>
            <td>{user.nameUser}</td>
        </tr>
        <tr>
            <th>Giới tính</th>
            <td>{user.gender==true?"Nam":"Nữ"}</td>
        </tr>
        <tr>
            <th>Ngày sinh</th>
            <td>{user.dayOfBirth}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>{user.email}</td>
        </tr>
        <tr>
            <th>Số điện thoại</th>
            <td>{user.phone}</td>
        </tr>
      </table>
              </div>
              </div>
              </div>
      {/* <div className="section-title" style={{ paddingTop: "120px" }}>
        <h2>Tài Khoảng của tôi</h2>
      </div>
      <div style={{textAlign:"center", width:"100%"}}>
      <table>
        <tr>
            <th>Tên</th>
            <td>{user.nameUser}</td>
        </tr>
        <tr>
            <th>Giới tính</th>
            <td>{user.gender==true?"Nam":"Nữ"}</td>
        </tr>
        <tr>
            <th>Ngày sinh</th>
            <td>{user.dayOfBirth}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>{user.email}</td>
        </tr>
        <tr>
            <th>số điện thoại</th>
            <td>{user.phone}</td>
        </tr>
      </table>
      </div> */}
    </>
  );
}
export default Infor;
