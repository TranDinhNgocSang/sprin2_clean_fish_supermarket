import{Link} from "react-router-dom"

function OcHauList (){
    return(
        <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ogani Template" />
        <meta name="keywords" content="Ogani, unica, creative, html" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Ogani | Template</title>
        {/* Google Font */}
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet" />
        {/* Css Styles */}
        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
        <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
        <link rel="stylesheet" href="css/nice-select.css" type="text/css" />
        <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
        <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
        <link rel="stylesheet" href="css/style.css" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
 
    
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <span>Danh mục sản phẩm</span>
                  </div>
                  <ul >
                    <li><Link to={"/ca-tuoi"} className = "menu-trang-chu" href="/#">CÁ TƯƠI TỰ NHIÊN</Link></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><Link to={"/tom-muc"} className = "menu-trang-chu" href="/#">TÔM, BẠC TUỘT, MỰC</Link></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li style={{backgroundColor:"rgb(25, 98, 145)"}}><Link to={"/oc-hau "} style={{color: "white"}} className = "menu-trang-chu"><b>ỐC, HÀU, VẸM CÁC LOẠI</b></Link></li>

                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><Link to={"/cua-ghe"} className = "menu-trang-chu" href="/#">CUA-GHẸ</Link></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><Link to={"/sashimi"} className = "menu-trang-chu" href="/#">SASHIMI CHUẨN NHẬT</Link></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><Link to={"/hs-dong-lanh"} className = "menu-trang-chu" href="/#">HẢI SẢN ĐÔNG LẠNH</Link></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><a className = "menu-trang-chu" >MÓN NGON CÓ SẴN</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                
                <div className="hero__item set-bg3">
             
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured spad featuredd">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Ốc, Nghêu, Sò, ....</h2>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-5.jpg">
                    <ul className="featured__item__pic__hover">
                    <li><a href="/#"><span class="add-to-cart"><b>add to cart</b></span> <i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6><a href="/#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-6.jpg">
                    <ul className="featured__item__pic__hover">
                    <li><a href="/#"><span class="add-to-cart"><b>add to cart</b></span> <i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6><a href="/#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-7.jpg">
                    <ul className="featured__item__pic__hover">
                    <li><a href="/#"><span class="add-to-cart"><b>add to cart</b></span> <i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6><a href="/#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-8.jpg">
                    <ul className="featured__item__pic__hover">
                    <li><a href="/#"><span class="add-to-cart"><b>add to cart</b></span> <i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6><a href="/#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div style={{textAlign: "center"}}>
          <button className="bth-xem-them">Xem Thêm sản phẩm ốc, nghêu, sò...</button>
          </div>
            </div>
          </div>
          
        </section>
      </div>
        </>
    )
}
export default OcHauList;