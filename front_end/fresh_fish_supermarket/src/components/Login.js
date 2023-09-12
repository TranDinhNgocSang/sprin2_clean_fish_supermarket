import { Link, useNavigate } from "react-router-dom";
import "../css/login.css"
import { Formik, Form, Field , ErrorMessage} from "formik"
import * as yup from "yup"
import {loginGetToken} from "../service/authService"
import Swal from "sweetalert2";

function Login(){
  const navigate = useNavigate();
    return(
        <>
      <section className="vh-50 gradient-custom bg-login">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark1 text-white" style={{borderRadius: '1rem', backgroundColor: "rgba(25, 25, 15, 0.1)!important"}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">ĐĂNG NHẬP</h2>
                    <p className="text-white-50 mb-5">Nhập email và mật khẩu của bạn:</p>
                    <Formik
                    initialValues={{
                      email: "",
                      password: ""
                    }}
                    validationSchema={yup.object({
                      email: yup.string().required("Bạn chưa nhập email").email("Email không đúng định dạng"),
                      password: yup.string().required("Bạn chưa nhập mật khẩu")
                
                    })}
                    onSubmit={async(value)=>{
                      const account = {
                        email : value.email,
                        password : value.password
                      }
                      try {
                        const data = await loginGetToken(account)
                      localStorage.setItem("token",data.token);
                      localStorage.setItem("userName",data.userName);
                      localStorage.setItem("role",data.role);
                      Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Đăng nhập thành công',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      navigate("/")
                      } catch (error) {
                        Swal.fire({
                          title: "Email hoặc mật Khẩu của bạn chưa đúng!",
                          text: "",
                          icon: "warning",
                          button: "Aww yiss!",
                        });
                      }
                    }} 
                    >
                      <Form>
                    <div className="form-outline form-white mb-4">
                    <p className="message-err-login">
                      <ErrorMessage name="email"></ErrorMessage>
                    </p>
                      <Field type="email" id="typeEmailX" className="form-control form-control-lg" name = "email" />
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                     
                    </div>
                    <div className="form-outline form-white mb-4">
                    <p className="message-err-login">
                      <ErrorMessage name="password"></ErrorMessage>
                    </p>
                      <Field type="password" id="typePasswordX" className="form-control form-control-lg" name = "password" />
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>
                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!"></a></p>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit"><b>Đăng nhập</b></button>
                    </Form>
                    </Formik>
                    {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
                    </div> */}
                  </div>
                  <div>
                    <p className="mb-0">Bạn đã có tài khoảng chưa? <Link to={"/register"} style={{color: "white" }}><b>Tạo mới tài khoản</b></Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
    )
}

export default Login;