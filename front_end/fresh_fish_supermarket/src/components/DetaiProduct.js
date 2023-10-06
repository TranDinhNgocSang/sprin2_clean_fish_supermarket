import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  getProductById,
  getLimitListProductByType,
} from "../service/productService";
import numeral from "numeral";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import {
  addProductToCart,
  totalProductOnCart,
  addProductToCartDetail,
} from "../service/cartService";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function DetaiProduct() {
  const { data } = useParams();
  // const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [listProduct, setListProduct] = useState([]);
  // const [flag,setFlag]= useState(false);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const arrData = data.split(",");
  const idProduct = arrData[1];
  const idType = arrData[2];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 6000, min: 5000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const getProduct = async () => {
    try {
      const data = await getProductById(idProduct);
    setProduct(data);
    } catch (error) {
    navigate("/404")
    }
 
  };

  const handelOnClick = async (id) => {
    window.scrollTo(0, 0);
    const data = await getProductById(id);
    setProduct(data);
    setCount(1);
  };

  const getListProduct = async () => {
    const data = await getLimitListProductByType(idType, 12);
    setListProduct(data);
  };

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleOnClickAddToCart = async (idProduct, nameProduct) => {
    try {
      await addProductToCart(idProduct, headers);
      toast.success(`Đã thêm ${nameProduct} vào giỏ`, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const data = await totalProductOnCart(headers);
      dispatch(updateCart(data));
    } catch (error) {
      Swal.fire("Bạn hãy đăng nhập để mua hàng nhé !");
    }
  };

  const handleOnClickAddToCartt = async (idProduct, nameProduct) => {
    try {
   
      if(count>50){
        Swal.fire({
          position: 'top-center',
          icon: 'warning',
          title: 'Số lượng tối đa 50',
          showConfirmButton: false,
          timer: 1500
        })
        return;
      }
      if(count>product.quantity){
        Swal.fire({
          position: 'top-center',
          icon: 'warning',
          title: 'Số lượng trong kho không đủ',
          showConfirmButton: false,
          timer: 1500
        })
        return;
      }

      if(count<1){
        Swal.fire({
          position: 'top-center',
          icon: 'warning',
          title: 'Số lượng phải lớn hơn 0',
          showConfirmButton: false,
          timer: 1500
        })
        return;
      }
      await addProductToCartDetail(idProduct, count, headers);
      toast.success(`Đã thêm ${nameProduct} vào giỏ`, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const data = await totalProductOnCart(headers);
      dispatch(updateCart(data));
    } catch (error) {
      Swal.fire("Bạn hãy đăng nhập để mua hàng nhé !");
    }
  };

  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
    getListProduct();
  }, []);

  if (!product) {
    return null;
  }

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ogani Template" />
        <meta name="keywords" content="Ogani, unica, creative, html" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Ogani | Template</title>
        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap"
          rel="stylesheet"
        />
        {/* Css Styles */}
        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
        <link
          rel="stylesheet"
          href="css/font-awesome.min.css"
          type="text/css"
        />
        <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
        <link rel="stylesheet" href="css/nice-select.css" type="text/css" />
        <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css" />
        <link
          rel="stylesheet"
          href="css/owl.carousel.min.css"
          type="text/css"
        />
        <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
        <link rel="stylesheet" href="css/style.css" type="text/css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        ></link>

        <div className="humberger__menu__overlay" />

        <section className="product-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="product__details__pic">
                  <div className="product__details__pic__item">
                    <img
                      style={{ width: "200px" }}
                      className="product__details__pic__item--large"
                      src={product.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                  <h3>{product.nameProduct}</h3>
                  <div className="product__details__price">
                    {numeral(product.price).format("00,0 đ")}đ
                  </div>
                  <p>{product.describeProduct}</p>
                  {product.quantity>0
                    ?
                    <>
<div className="product__details__quantity">
                    {product.typeProduct.idTypeProduct == 5 || product.typeProduct.idTypeProduct == 6 ? (
                      <p className="detail-text">ĐƠN VỊ : 1 PHẦN </p>
                    ) : (
                      <p className="detail-text">KHỐI LƯỢNG: 1KG </p>
                    )}
                    <div className="quantity">
                      <div className="pro-qty">
                        <button
                          className="nut-tang-giam"
                          onClick={() => {
                            if (count > 1) {
                              setCount(count - 1);
                            }
                            if(count>product.quantity){
                              setCount(product.quantity)
                            }
                          }}
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <input type="number" value={count} min={1} onChange={
                          (e)=>
                          {
                            if(e.target.value>product.quantity){
                              setCount(product.quantity)
                            }else{
                              setCount(e.target.value)
                            }
                          }
                          }/>
                        <button
                          className="nut-tang-giam"
                          onClick={() => {
                            if(count<product.quantity){
                              setCount(count*1 + 1);
                            }
                          }}
                        >
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    id="add-detail"
                    onClick={() =>
                      handleOnClickAddToCartt(
                        product.idProduct,
                        product.nameProduct
                      )
                    }
                  >
                    <b>Thêm vào giỏ</b>
                  </button>
                  </>
                  :
                  <h3 style={{color:"#dd2222"}}>Đã hết hàng</h3>
                  }
                  
                  <ul>
                    <li>
                      <i className="fa-solid fa-truck"></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;Giao hàng nhanh trong 2 giờ, nội
                      thành TP.Đà Nẵng.
                    </li>
                    <li>
                      <i className="fa-solid fa-box"></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đổi trả với bất kỳ lý do gì
                      liên quan đến sản phẩm.
                    </li>
                    <li>
                      <i className="fa-solid fa-gift"></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nhiều ưu đã cho thành viên.
                    </li>
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
            <div className="row" style={{height:"70px"}}>
              <div className="col-lg-12" style={{height:"70px"}}>
                <div className="section-title related__product__title">
                  <h2>Sản Phẩm Cùng Loại</h2>
                </div>
              </div>
            </div>
            <div className="row" style={{height:"400px"}}>
            <Carousel responsive={responsive}>
              {listProduct.map((c) => {
                if(c.idProduct!=product.idProduct){
                  return (
                    <div
                      className="col-lg-12 fresh-meat"
                      key={c.idProduct}
                    >
                      <div
                        className="featured__item"
                        style={{
                          backgroundImage: `url('${c.img}')`,
                          height: "270px",
                          backgroundepReat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "top center",
                        }}
                      >
                        <div className="featured__item__pic">
                          <ul
                            className="featured__item__pic__hover"
                            onClick={() =>
                              handleOnClickAddToCart(c.idProduct, c.nameProduct)
                            }
                          >
                            <li>
                              <a>
                                <span class="add-to-cart">
                                  <b>Thêm vào giỏ</b>
                                </span>{" "}
                                <i className="fa fa-shopping-cart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="featured__item__text"
                          onClick={() => {
                            handelOnClick(c.idProduct);
                          }}
                        >
                          <h6>
                            <a
                              onClick={() => {
                                handelOnClick(c.idProduct);
                              }}
                            >
                              {c.nameProduct}
                            </a>
                            {/* <h5>{numeral(c.price).format("00,0 đ")} vnđ</h5> */}
                          </h6>
                          <h5>{numeral(c.price).format("00,0 đ")} vnđ</h5>
                        </div>
                      </div>
                    </div>
                  );
                }
                
              })}
              </Carousel>
            </div>
            <ToastContainer></ToastContainer>
          </div>
        </section>
      </div>
    </>
  );
}
export default DetaiProduct;
