
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
                  <a href="./index.html"><img width = "60px" src="img/logoo.png" alt="" /></a>
                  <span style={{ fontWeight: "bold", fontSize: "1.5rem", color : "white", paddingLeft: "5px"}}>
    CÁ SẠCH DANA
  </span>
                </div>
              </div>
              <div className="col-lg-6">
              <div className="hero__search">
                      <input type="text" id="input-header" placeholder="Tìm kiếm sản phẩm..." />
                      <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li> <div className="header__top__right__auth">
                      <a href="/#"><i className="fa fa-user" style={{color:"white"}}/>Đăng nhập</a>
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
                  <ul>
                    <li><a href="/#">Fresh Meat</a></li>
                    <li><a href="/#">Vegetables</a></li>
                    <li><a href="/#">Fruit &amp; Nut Gifts</a></li>
                    <li><a href="/#">Fresh Berries</a></li>
                    <li><a href="/#">Ocean Foods</a></li>
                    <li><a href="/#">Butter &amp; Eggs</a></li>
                    <li><a href="/#">Fastfood</a></li>
                    <li><a href="/#">Fresh Onion</a></li>
                    <li><a href="/#">Papayaya &amp; Crisps</a></li>
                    <li><a href="/#">Oatmeal</a></li>
                    <li><a href="/#">Fresh Bananas</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                
                <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                  <div className="hero__text">
                    <span>HẢI SẢN SẠCH</span>
                    <h2>Cam kết <br />100% không chất bảo quản</h2>
                    <a href="/#" className="primary-btn">SHOP NOW</a>
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
                <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">All</li>
                    <li data-filter=".oranges">Oranges</li>
                    <li data-filter=".fresh-meat">Fresh Meat</li>
                    <li data-filter=".vegetables">Vegetables</li>
                    <li data-filter=".fastfood">Fastfood</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                    <ul className="featured__item__pic__hover">
                      <li><a href="/#"><i className="fa fa-heart" /></a></li>
                      <li><a href="/#"><i className="fa fa-retweet" /></a></li>
                      <li><a href="/#"><i className="fa fa-shopping-cart" /></a></li>
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
                      <li><a href="/#"><i className="fa fa-heart" /></a></li>
                      <li><a href="/#"><i className="fa fa-retweet" /></a></li>
                      <li><a href="/#"><i className="fa fa-shopping-cart" /></a></li>
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
                      <li><a href="/#"><i className="fa fa-heart" /></a></li>
                      <li><a href="/#"><i className="fa fa-retweet" /></a></li>
                      <li><a href="/#"><i className="fa fa-shopping-cart" /></a></li>
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
                      <li><a href="/#"><i className="fa fa-heart" /></a></li>
                      <li><a href="/#"><i className="fa fa-retweet" /></a></li>
                      <li><a href="/#"><i className="fa fa-shopping-cart" /></a></li>
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
                      <li><a href="/#"><i className="fa fa-heart" /></a></li>
                      <li><a href="/#"><i className="fa fa-retweet" /></a></li>
                      <li><a href="/#"><i className="fa fa-shopping-cart" /></a></li>
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
                      <li><a href="/#"><i className="fa fa-heart" /></a></li>
                      <li><a href="/#"><i className="fa fa-retweet" /></a></li>
                      <li><a href="/#"><i className="fa fa-shopping-cart" /></a></li>
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
                      <li><a href="/#"><i className="fa fa-heart" /></a></li>
                      <li><a href="/#"><i className="fa fa-retweet" /></a></li>
                      <li><a href="/#"><i className="fa fa-shopping-cart" /></a></li>
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
                      <li><a href="/#"><i className="fa fa-heart" /></a></li>
                      <li><a href="/#"><i className="fa fa-retweet" /></a></li>
                      <li><a href="/#"><i className="fa fa-shopping-cart" /></a></li>
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
        {/* Featured Section End */}
        {/* Banner Begin */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="img/banner/banner-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="img/banner/banner-2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner End */}
        {/* Latest Product Section Begin */}
        <section className="latest-product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Latest Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Top Rated Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Review Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Product Section End */}
        {/* Blog Section Begin */}
        <section className="from-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title from-blog__title">
                  <h2>From The Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="img/blog/blog-1.jpg" alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                      <li><i className="fa fa-comment-o" /> 5</li>
                    </ul>
                    <h5><a href="/#">Cooking tips make cooking simple</a></h5>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="img/blog/blog-2.jpg" alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                      <li><i className="fa fa-comment-o" /> 5</li>
                    </ul>
                    <h5><a href="/#">6 ways to prepare breakfast for 30</a></h5>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="img/blog/blog-3.jpg" alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                      <li><i className="fa fa-comment-o" /> 5</li>
                    </ul>
                    <h5><a href="/#">Visit the clean farm in the US</a></h5>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Section End */}
        {/* Footer Section Begin */}
        <footer className="footer spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__about__logo">
                    <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                  </div>
                  <ul>
                    <li>Address: 60-49 Road 11378 New York</li>
                    <li>Phone: +65 11.188.888</li>
                    <li>Email: hello@colorlib.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                <div className="footer__widget">
                  <h6>Useful Links</h6>
                  <ul>
                    <li><a href="/#">About Us</a></li>
                    <li><a href="/#">About Our Shop</a></li>
                    <li><a href="/#">Secure Shopping</a></li>
                    <li><a href="/#">Delivery infomation</a></li>
                    <li><a href="/#">Privacy Policy</a></li>
                    <li><a href="/#">Our Sitemap</a></li>
                  </ul>
                  <ul>
                    <li><a href="/#">Who We Are</a></li>
                    <li><a href="/#">Our Services</a></li>
                    <li><a href="/#">Projects</a></li>
                    <li><a href="/#">Contact</a></li>
                    <li><a href="/#">Innovation</a></li>
                    <li><a href="/#">Testimonials</a></li>
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