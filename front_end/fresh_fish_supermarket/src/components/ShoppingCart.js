
function ShoppingCart(){
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
       
 
  
        {/* Hero Section End */}
        {/* Breadcrumb Section Begin */}
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Giỏ Hàng</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Shoping Cart Section Begin */}
        <section className="shoping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th className="shoping__product">Sản Phẩm</th>
                        <th>Đơn Giá</th>
                        <th>Số Lượng</th>
                        <th>Thành Tiền</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="shoping__cart__item">
                          <img src="img/cart/cart-1.jpg" alt="" />
                          <h5>Vegetable’s Package</h5>
                        </td>
                        <td className="shoping__cart__price">
                          $55.00
                        </td>
                        <td className="shoping__cart__quantity">
                          <div className="quantity">
                         
                            <div className="pro-qty">
                            <button className="nut-tang-giam-cart">
                        <i class="fa-solid fa-minus"></i>
                        </button>
                              <input type="text" defaultValue={1} />
                              <button className="nut-tang-giam-cart">
                        <i class="fa-solid fa-plus"></i>
                        </button>
                            </div>
                            
                          </div>
                        </td>
                        <td className="shoping__cart__total">
                          $110.00
                        </td>
                        <td className="shoping__cart__item__close">
                          <span className="icon_close" />
                        </td>
                      </tr>
                      <tr>
                        <td className="shoping__cart__item">
                          <img src="img/cart/cart-2.jpg" alt="" />
                          <h5>Fresh Garden Vegetable</h5>
                        </td>
                        <td className="shoping__cart__price">
                          $39.00
                        </td>
                        <td className="shoping__cart__quantity">
                          <div className="quantity">
                         
                            <div className="pro-qty">
                            <button className="nut-tang-giam-cart">
                        <i class="fa-solid fa-minus"></i>
                        </button>
                              <input type="text" defaultValue={1} />
                              <button className="nut-tang-giam-cart">
                        <i class="fa-solid fa-plus"></i>
                        </button>
                            </div>
                            
                          </div>
                        </td>
                        <td className="shoping__cart__total">
                          $39.99
                        </td>
                        <td className="shoping__cart__item__close">
                          <span className="icon_close" />
                        </td>
                      </tr>
                      <tr>
                        <td className="shoping__cart__item">
                          <img src="img/cart/cart-3.jpg" alt="" />
                          <h5>Organic Bananas</h5>
                        </td>
                        <td className="shoping__cart__price">
                          $69.00
                        </td>
                        <td className="shoping__cart__quantity">
                          <div className="quantity">
                         
                            <div className="pro-qty">
                            <button className="nut-tang-giam-cart">
                        <i class="fa-solid fa-minus"></i>
                        </button>
                              <input type="text" defaultValue={1} />
                              <button className="nut-tang-giam-cart">
                        <i class="fa-solid fa-plus"></i>
                        </button>
                            </div>
                            
                          </div>
                        </td>
                        <td className="shoping__cart__total">
                          $69.99
                        </td>
                        <td className="shoping__cart__item__close">
                          <span className="icon_close" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="shoping__continue">
                  <div className="shoping__discount">
                    <h5>Nhập đỉa chỉ của bạn</h5>
                      <textarea className="textarea-cart"  type="text" placeholder="11 Lê Đình Lý, Quận Hải Châu, Tp. Đà nẵng"/>
                  </div>
                  <div className="shoping__discount">
                    <h5>Ghi chú</h5>
                      <textarea className="textarea-cart2"  type="text" placeholder="Note..."/>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__checkout">
                  <h5>Hóa Đơn</h5>
                  <ul>
                    <li>Thành tiền<span>$454.98</span></li>
                    <li>Phí giao hàng<span>$454.98</span></li>
                    <li>Tổng Tiền <span style={{color:"black"}}>$454.98</span></li>
                  </ul>
                  <a href="#" className="primary-btn">thanh toán</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      </div>
        </>
    )
}

export default ShoppingCart;