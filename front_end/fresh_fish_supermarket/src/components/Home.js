
function Home (){
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
        {/* Page Preloder */}
   
        {/* Humberger Begin */}
        <div className="humberger__menu__overlay" />
        {/* Humberger End */}
        {/* Header Section Begin */}
        <header className="header navbarSang">
          <div className="header__top">
            <div className="container">
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <a href="./index.html"><img width = "60px" src="img/logo-end.png" alt="" /></a>
                  <span id="name-shop" style={{ fontWeight: "bold", fontSize: "1.5rem", color : "white", paddingLeft: "10px"}}>
    CÁ SẠCH DANA
  </span>
                </div>
              </div>
              <div className="col-lg-6">
              <div className="hero__search">
                      <input type="text" id="input-header" placeholder="Tìm kiếm sản phẩm..." />
                      <i class="fa-solid fa-magnifying-glass" id="icon-search"></i>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li> <div className="header__top__right__auth">
                      <a href="/#" id="dang-nhap-head"><i className="fa fa-user" style={{color:"white" }}/>Đăng nhập</a>
                    </div>  </li>
                    <li><a href="/#"><i className="fa fa-shopping-bag" style={{color:"white"}} /> <span style={{color:"white", background : "red"}} >0</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>
        {/* Header Section End */}
        {/* Hero Section Begin */}
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <span>Danh mục sản phẩm</span>
                  </div>
                  <ul >
                    <li><a className = "menu-trang-chu" href="/#">HẢI SẢN TƯƠI SỐNG</a></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><a className = "menu-trang-chu" href="/#">CÁ TƯƠI TỰ NHIÊN</a></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><a className = "menu-trang-chu" href="/#">TÔM, BẠC TUỘT, MỰC</a></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><a className = "menu-trang-chu" href="/#">ỐC, HÀU, VẸM CÁC LOẠI</a></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><a className = "menu-trang-chu" href="/#">CUA-GHẸ</a></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><a className = "menu-trang-chu" href="/#">SASHIMI CHUẨN NHẬT</a></li>
                    <hr className = "menu-trang-chu-hr"></hr>
                    <li><a className = "menu-trang-chu" href="/#">HẢI SẢN ĐÔNG LẠNH</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                
                <div className="hero__item set-bg">
                  <div className="hero__text">
                    <span>HẢI SẢN SẠCH</span>
                    <h2>Cam kết <br />100% không chất bảo quản</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
        {/* Categories Section Begin */}
        <section className="categories">
          <div className="container">
            <div className="row">
              <div className="categories__slider owl-carousel">
                <div className="col-lg-3">
                  <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                    <h5><a href="/#">Fresh Fruit</a></h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                    <h5><a href="/#">Dried Fruit</a></h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                    <h5><a href="/#">Vegetables</a></h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                    <h5><a href="/#">drink fruits</a></h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                    <h5><a href="/#">drink fruits</a></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Categories Section End */}
        {/* Featured Section Begin */}
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Sản phẩm bán chạy nhất</h2>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div className="featured__item"
                style={{
                  backgroundImage: "url('img/blog/blog-6.jpg')",
                  height: "270px",
                  // position: "relative",
                  backgroundPosition: "center"
              
                }}
                >
                  <div className="featured__item__pic">
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
              <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-2.jpg">
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
              <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
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
              <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-4.jpg">
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
            </div>
          </div>
        </section>
    
        <footer className="footer spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__about__logo">
                    <a href="./index.html"><img width = "150px" src="img/logo-end.png" alt="" /></a>
                    <p id="name-shop-footer">CÁ SẠCH DANA</p>
                  </div> 
                  <ul>
                    <li>Địa chỉ: 101 Phạm Văn Ngị, Quận Thanh Khê</li>
                    <li>Phone: 0774538628</li>
                    <li>Email: casachdana@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                <div className="footer__widget">
                  <h6>Useful Links</h6>
                  <ul>
                  <li>Địa chỉ: 101 Phạm Văn Nghị, Quận Thanh Khê</li>
                    <li>Phone: 0774538628</li>
                    <li>Email: casachdana@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="footer__widget">
                  <h6>Join Our Newsletter Now</h6>
                  <p>Get E-mail updates about our latest shop and special offers.</p>
                  <form action="/#">
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit" className="site-btn">Subscribe</button>
                  </form>
                  <div className="footer__widget__social">
                    <a href="/#"><i className="fa fa-facebook" /></a>
                    <a href="/#"><i className="fa fa-instagram" /></a>
                    <a href="/#"><i className="fa fa-twitter" /></a>
                    <a href="/#"><i className="fa fa-pinterest" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="footer__copyright">
                  <div className="footer__copyright__text"><p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p></div>
                  <div className="footer__copyright__payment"><img src="img/payment-item.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Section End */}
        {/* Js Plugins */}
      </div>
        </>
    )
}
export default Home;