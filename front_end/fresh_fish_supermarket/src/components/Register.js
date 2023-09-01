
function Register(){
    return(
        <>
        <section className="vh-50 gradient-custom bg-login">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration bg-dark1" style={{borderRadius: '15px'}}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 dang-ky"><b>TẠO TÀI KHOẢN</b></h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="firstName" className="form-control form-control-lg" />
                          <label className="form-label dang-ky" htmlFor="firstName">First Name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="lastName" className="form-control form-control-lg" />
                          <label className="form-label dang-ky" htmlFor="lastName">Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input type="text" className="form-control form-control-lg" id="birthdayDate" />
                          <label htmlFor="birthdayDate" className="form-label dang-ky">Birthday</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1 dang-ky">Gender: </h6>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="option1" defaultChecked />
                          <label className="form-check-label dang-ky" htmlFor="femaleGender">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" defaultValue="option2" />
                          <label className="form-check-label dang-ky" htmlFor="maleGender">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" defaultValue="option3" />
                          <label className="form-check-label dang-ky" htmlFor="otherGender">Other</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input type="email" id="emailAddress" className="form-control form-control-lg" />
                          <label className="form-label dang-ky" htmlFor="emailAddress">Email</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                          <label className="form-label dang-ky" htmlFor="phoneNumber">Phone Number</label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                    <button className="btn btn-outline-light btn-lg px-5" type="submit"><b>Đăng ký</b></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )

}
export default Register;