
function Footer(){
    return(
        <>
        <footer className="footer spad">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="footer__about">
                  <div className="footer__about__logo">
                    <a href="./index.html"><img width = "150px" src="img/logo-end.png" alt="" /></a>
                    <p id="name-shop-footer">CÁ SẠCH DANA</p>
                  </div> 
                </div>
              </div>
              <div className="col-2"
              style={{marginLeft:"30px", marginRight: "40px"}}
              >
                  <h5 className= "text-footer"><b>Tra cứu thông tin</b></h5>
                    <p className= "text-footer">Đăng ký chào hàng</p>
                    <p className= "text-footer">Về chúng tôi</p>
                    <p className= "text-footer">Tuyển dụng</p>
                    <p className= "text-footer">Liên hệ</p>
              </div>
              <div className="col-2"
              style={{marginLeft:"30px", marginRight: "40px"}}
              >
                  <h5 className= "text-footer"><b>Hỗ trợ khách hàng</b></h5>
                  <p className= "text-footer">Hướng dẫn mua hàng</p>
                    <p className= "text-footer">Chính sách đổi trả</p>
                    <p className= "text-footer">Chính sách đổi trả</p>
                    <p className= "text-footer">Khách hàng thân thiết</p>
              </div>
              <div className="col-3">
                  <h6 id="cham-soc-foot">Chăm sóc khách hàng</h6>
                  <p id="phone-foot"><i class="fa-solid fa-phone"></i> 0236 653 3888</p>
                  <p className= "text-footer">Địa chỉ: 101 Phạm Văn Nghị, Quận Thanh Khê, TP.Đà Nẵng</p>
                  <p className= "text-footer">Gmail: casachdana@gmail.com</p>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}

export default Footer;