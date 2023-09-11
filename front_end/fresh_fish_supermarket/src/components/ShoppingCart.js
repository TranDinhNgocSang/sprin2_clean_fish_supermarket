import { useEffect, useState } from "react";
import {listProductOnCart, deleteProductOnCart, addProductToCart, miniusProductToCart} from "../service/cartService"
import numeral from "numeral";
function ShoppingCart(){
  const [products, setProducts]= useState([]);
  const [flag, setFlag] = useState(false);

  const headers = {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
  };

  const getListProduct = async()=>{
    try {
      const data = await listProductOnCart(headers);
    setProducts(data)
    } catch (error) {
      
    }
  }

  const handleOnClickDelete = async(idProduct)=>{
await deleteProductOnCart(idProduct,headers);
setFlag(!flag);
  }

  const handleButtonPlus = async(idProduct)=>{
await addProductToCart(idProduct,headers);
setFlag(!flag);
  }

  const handleButtonMinius = async(idProduct)=>{
    await miniusProductToCart(idProduct,headers);
    setFlag(!flag);
      }

  useEffect(()=>{
getListProduct();
  },[flag])

  var toltalPrice = 0;

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
        {products.length==0?
        <div style={{textAlign:"center"}}><img width={500} src ="img/empty-cart.png"></img></div>
        :
<section className="shoping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th className="shoping__product">Sản Phẩm</th>
                        <th style={{width:"280px"}}>Đơn Giá (vnđ)</th>
                        <th>Số Lượng</th>
                        <th style={{width:"300px"}}>Thành Tiền (vnđ)</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((c)=>{
                        return(
<tr>
                        <td className="shoping__cart__item">
                          <img src={c.product.img} width={150} alt="" style={{marginRight:"100px"}}/>
                          <h5>{c.product.nameProduct}</h5>
                        </td>
                        <td className="shoping__cart__price">
                          {numeral(c.product.price).format("00,0 đ")}
                        </td>
                        <td className="shoping__cart__quantity">
                          <div className="quantity">
                         
                            <div className="pro-qty">
                            <button className="nut-tang-giam-cart" onClick={()=>{handleButtonMinius(c.product.idProduct)}}>
                        <i class="fa-solid fa-minus"></i>
                        </button>
                              <input type="number" readOnly value={c.quantityProduct} />
                              <button className="nut-tang-giam-cart" onClick={()=>{handleButtonPlus(c.product.idProduct)}}>
                        <i class="fa-solid fa-plus"></i>
                        </button>
                            </div>
                            <span style={{display : "none"}}>
                            {toltalPrice+=c.product.price*c.quantityProduct}
                            </span>
                          </div>
                        </td>
                        <td className="shoping__cart__total"> 
                        {numeral(c.product.price*c.quantityProduct).format("00,0 đ")}
                        </td>
                        <td className="shoping__cart__item__close" onClick={()=>{handleOnClickDelete(c.product.idProduct)}}>
                          <span className="icon_close" />
                        </td>
                      </tr>
                        )
                      })}
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
                    <li>Thành tiền<span>{numeral(toltalPrice).format("00,0 đ")}đ</span></li>
                    <li>Phí giao hàng<span>20,000đ</span></li>
                    <li>Tổng Tiền <span style={{color:"black"}}>{numeral(toltalPrice+20000).format("00,0 đ")}đ</span></li>
                  </ul>
                  <a href="#" className="primary-btn">thanh toán</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
        
      
      </div>
        </>
    )
}

export default ShoppingCart;