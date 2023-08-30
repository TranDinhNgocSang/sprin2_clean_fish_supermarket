import { useEffect } from "react";

function DetaiProduct (){

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"></link>
      
        <div className="humberger__menu__overlay" />

        <section className="product-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="product__details__pic">
                  <div className="product__details__pic__item">
                    <img style={{ width: "200px" }} className="product__details__pic__item--large" src="https://dacsannanggio.vn/image/catalog/Ca/ca-lao/ca-lao.jpg" alt="" />
                  </div>  
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                  <h3>Cá chìa vôi</h3>
                  <div className="product__details__price">$50.00</div>
                  <p>Thơm ngon mời bạn ăn nha, tôi đây không chờ bạn nữa giờ tôi ăn liền</p>
                  <div className="product__details__quantity">
                  <p className="detail-text">KHỐI LƯỢNG: 1KG </p>
                    <div className="quantity">                  
                      <div className="pro-qty">
                        <button className="nut-tang-giam">
                        <i class="fa-solid fa-minus"></i>
                        </button>
                        <input type="text" defaultValue={1} />
                        <button className="nut-tang-giam">
                        <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button id="add-detail"><b>ADD TO CARD</b></button>
                  <ul>
                    <li><i class="fa-solid fa-truck"></i>&nbsp;&nbsp;&nbsp;&nbsp;Giao hàng nhanh trong 2 giờ, nội thành TP.Đà Nẵng.</li>
                    <li><i class="fa-solid fa-box"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đổi trả với bất kỳ lý do gì liên quan đến sản phẩm.</li>
                    <li><i class="fa-solid fa-gift"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nhiều ưu đã cho thành viên.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product Details Section End */}
        {/* Related Product Section Begin */}
        <section className="related-product">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title related__product__title">
                  <h2>Sản Phẩm Cùng Loại</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                    <ul className="featured__item__pic__hover">
                    <li><a href="/#"><span class="add-to-cart"><b>add to cart</b></span> <i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                    <ul className="featured__item__pic__hover">
                    <li><a href="/#"><span className="add-to-cart"><b>add to cart</b></span> <i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                    <ul className="featured__item__pic__hover">
                    <li><a href="/#"><span class="add-to-cart"><b>add to cart</b></span> <i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                    <ul className="featured__item__pic__hover">
                    <li><a href="/#"><span class="add-to-cart"><b>add to cart</b></span> <i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        </>
    )
}
export default DetaiProduct;