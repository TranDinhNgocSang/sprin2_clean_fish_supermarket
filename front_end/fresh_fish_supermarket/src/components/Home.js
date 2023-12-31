import { Link, useLocation, useNavigate } from "react-router-dom";
import { getLimitListProductByType , getListProductBestSelling } from "../service/productService";
import { useEffect, useState } from "react";
import numeral from "numeral";

import {addProductToCart, totalProductOnCart} from "../service/cartService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/actions/cartActions";

function Home() {
  const navigate = useNavigate();
  const [caTuoi, setCaTuoi] = useState([]);
  const [tomMuc, setTomMuc] = useState([]);
  const [ocNgheu, setOcNgheu] = useState([]);
  const [cuaGhe, setcuaGhe] = useState([]);
  const [sashimi, setSashimi] = useState([]);
  const [dongLanh, setDongLanh] = useState([]);
  const [productsBestSelling, setProductsBestSelling] = useState([]);
  const dispatch = useDispatch();
  const [backToTop, setBackToTop] = useState(false);


    window.addEventListener("scroll",()=>{
      if(window.scrollY >500){
        setBackToTop(true);
      }else{
        setBackToTop(false);
      }
    })
    

  const scrollup = () =>{
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  const getProductsBestSelling = async ()=>{
    const data = await getListProductBestSelling();
    setProductsBestSelling(data);
  }

  const getListCaTuoi = async () => {
    const data = await getLimitListProductByType(1, 4);
    setCaTuoi(data);
  };

  const getListTomMuc = async () => {
    const data = await getLimitListProductByType(2, 4);
    setTomMuc(data);
  };

  const getListOcNgheu = async () => {
    const data = await getLimitListProductByType(3, 4);
    setOcNgheu(data);
  };

  const getListCuaGhe = async () => {
    const data = await getLimitListProductByType(4, 4);
    setcuaGhe(data);
  };

  const getListSashimi = async () => {
    const data = await getLimitListProductByType(5, 4);
    setSashimi(data);
  };

  const getListDongLanh = async () => {
    const data = await getLimitListProductByType(6, 4);
    setDongLanh(data);
  };


  const handleOnClickAddToCart = async (idProduct,nameProduct) =>{
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      await addProductToCart(idProduct,headers);
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
      Swal.fire('Bạn hãy đăng nhập để mua hàng nhé !')
    }

  }

  useEffect(() => {
    getProductsBestSelling();
    getListCaTuoi();
    getListTomMuc();
    getListOcNgheu();
    getListCuaGhe();
    getListSashimi();
    getListDongLanh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(productsBestSelling);

  return (
    <>
    {backToTop && (
      <button className="scroll-up"
      onClick={scrollup}
      >
<i class="fa-solid fa-chevron-up"></i>
      </button>
    )}
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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />

        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <span>Danh mục sản phẩm</span>
                  </div>
                  <ul>
                    <li>
                      <Link
                        to={"/ca-tuoi"}
                        className="menu-trang-chu"
                        href="/#"
                      >
                        CÁ TƯƠI TỰ NHIÊN
                      </Link>
                    </li>
                    <hr className="menu-trang-chu-hr"></hr>
                    <li>
                      <Link
                        to={"/tom-muc"}
                        className="menu-trang-chu"
                        href="/#"
                      >
                        TÔM, BẠC TUỘT, MỰC
                      </Link>
                    </li>
                    <hr className="menu-trang-chu-hr"></hr>
                    <li>
                      <Link to={"/oc-hau"} className="menu-trang-chu" href="/#">
                        ỐC, HÀU, VẸM CÁC LOẠI
                      </Link>
                    </li>
                    <hr className="menu-trang-chu-hr"></hr>
                    <li>
                      <Link
                        to={"/cua-ghe"}
                        className="menu-trang-chu"
                        href="/#"
                      >
                        CUA-GHẸ
                      </Link>
                    </li>
                    <hr className="menu-trang-chu-hr"></hr>
                    <li>
                      <Link
                        to={"/sashimi"}
                        className="menu-trang-chu"
                        href="/#"
                      >
                        SASHIMI CHUẨN NHẬT
                      </Link>
                    </li>
                    <hr className="menu-trang-chu-hr"></hr>
                    <li>
                      <Link
                        to={"/hs-dong-lanh"}
                        className="menu-trang-chu"
                        href="/#"
                      >
                        HẢI SẢN ĐÔNG LẠNH
                      </Link>
                    </li>
                    <hr className="menu-trang-chu-hr"></hr>
                    <li>
                      <a className="menu-trang-chu" href="/#">
                        MÓN NGON CÓ SẴN
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__item set-bg">
                  <div className="hero__text">
                    <span>HẢI SẢN SẠCH</span>
                    <h2>
                      Cam kết <br />
                      100% không chất bảo quản
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Sản Phẩm Bán Chạy Nhất</h2>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              {productsBestSelling.map((c)=>{
                return(
<div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood" key={c.idProduct}>
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    data-setbg="img/featured/feature-2.jpg"
                    style={{
                      backgroundImage: `url('${c.img}')`,
                      height: "270px",
                      backgroundepReat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                    }}
                  >
                    
                      {c.quantity>0?
                      <ul className="featured__item__pic__hover">
                      <li>
                      <a className="name-product" onClick={()=>handleOnClickAddToCart(c.idProduct,c.nameProduct)}>
                        <span class="add-to-cart">
                            Thêm vào giỏ
                        </span>{" "}
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                    </ul>
                    :
                  <div className="het-hang">
                    <h4 className="het-hang-conten"><b>Tạm hết hàng</b></h4>
                    </div>

                    }
                      
                   
                  </div>
                  <div className="featured__item__text"
                       onClick={() => {
                        navigate(
                          "/detail," +
                            c.idProduct +
                            "," +
                            c.typeProduct.idTypeProduct
                        );
                      }}
                  >
                    <h6>
                      <p className="name-product">{c.nameProduct}</p>
                    </h6>
                    <h5>{numeral(c.price).format("00,0 đ")} vnđ/Kg</h5>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="featured spad featuredd">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2
                    onClick={() => {
                      navigate("/ca-tuoi");
                    }}
                  >
                    Cá Tươi Tự Nhiên
                  </h2>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              {caTuoi.map((c) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
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
                      {c.quantity>0?
                      <ul className="featured__item__pic__hover">
                      <li>
                      <a className="name-product" onClick={()=>handleOnClickAddToCart(c.idProduct,c.nameProduct)}>
                        <span class="add-to-cart">
                            Thêm vào giỏ
                        </span>{" "}
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                    </ul>
                    :
                  <div className="het-hang">
                    <h4 className="het-hang-conten"><b>Tạm hết hàng</b></h4>
                    </div>

                    }
                        <ToastContainer></ToastContainer>
                      </div>
                      <div className="featured__item__text"
                      onClick={() => {
                        navigate(
                          "/detail," +
                            c.idProduct +
                            "," +
                            c.typeProduct.idTypeProduct
                        );
                      }}
                      >
                        <h6>
                          <p className="name-product"
                            onClick={() => {
                              navigate(
                                "/detail," +
                                  c.idProduct +
                                  "," +
                                  c.typeProduct.idTypeProduct
                              );
                            }}
                          >
                            {c.nameProduct}
                          </p>
                        </h6>
                        <h5>{numeral(c.price).format("00,0 đ")} vnđ/Kg</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div style={{ textAlign: "center" }}>
                <button
                  className="bth-xem-them"
                  onClick={() => {
                    navigate("/ca-tuoi");
                  }}
                >
                  Xem Thêm sản phẩm cá tươi tự nhiên...
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="featured spad featuredd">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2
                    onClick={() => {
                      navigate("/tom-muc");
                    }}
                  >
                    Tôm, Bạch Tuộc, Mực
                  </h2>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              {tomMuc.map((c) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
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
                      {c.quantity>0?
                      <ul className="featured__item__pic__hover">
                      <li>
                      <a className="name-product" onClick={()=>handleOnClickAddToCart(c.idProduct,c.nameProduct)}>
                        <span class="add-to-cart">
                            Thêm vào giỏ
                        </span>{" "}
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                    </ul>
                    :
                  <div className="het-hang">
                    <h4 className="het-hang-conten"><b>Tạm hết hàng</b></h4>
                    </div>

                    }
                      </div>
                      <div className="featured__item__text"
                       onClick={() => {
                        navigate(
                          "/detail," +
                            c.idProduct +
                            "," +
                            c.typeProduct.idTypeProduct
                        );
                      }}
                      >
                        <h6>
                          <p className="name-product"
                            onClick={() => {
                              navigate(
                                "/detail," +
                                  c.idProduct +
                                  "," +
                                  c.typeProduct.idTypeProduct
                              );
                            }}
                          >
                            {c.nameProduct}
                          </p>
                        </h6>
                        <h5>{numeral(c.price).format("00,0 đ")} vnđ/kg</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div style={{ textAlign: "center" }}>
                <button
                  className="bth-xem-them"
                  onClick={() => {
                    navigate("/tom-muc");
                  }}
                >
                  Xem Thêm sản phẩm tôm, mực...
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="featured spad featuredd">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2
                    onClick={() => {
                      navigate("/oc-hau");
                    }}
                  >
                    Ốc, Nghêu, Sò, ....
                  </h2>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              {ocNgheu.map((c) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
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
                      {c.quantity>0?
                      <ul className="featured__item__pic__hover">
                      <li>
                      <a className="name-product" onClick={()=>handleOnClickAddToCart(c.idProduct,c.nameProduct)}>
                        <span class="add-to-cart">
                            Thêm vào giỏ
                        </span>{" "}
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                    </ul>
                    :
                  <div className="het-hang">
                    <h4 className="het-hang-conten"><b>Tạm hết hàng</b></h4>
                    </div>

                    }
                      </div>
                      <div className="featured__item__text"
                      onClick={() => {
                        navigate(
                          "/detail," +
                            c.idProduct +
                            "," +
                            c.typeProduct.idTypeProduct
                        );
                      }}>
                        <h6>
                          <p className="name-product"
                            onClick={() => {
                              navigate(
                                "/detail," +
                                  c.idProduct +
                                  "," +
                                  c.typeProduct.idTypeProduct
                              );
                            }}
                          >
                            {c.nameProduct}
                          </p>
                        </h6>
                        <h5>{numeral(c.price).format("00,0 đ")} vnđ/Kg</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div style={{ textAlign: "center" }}>
                <button
                  className="bth-xem-them"
                  onClick={() => {
                    navigate("/oc-hau");
                  }}
                >
                  Xem Thêm sản phẩm ốc, nghêu, sò...
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="featured spad featuredd">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2
                    onClick={() => {
                      navigate("/cua-ghe");
                    }}
                  >
                    Cua, Ghẹ
                  </h2>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              {cuaGhe.map((c) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
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
                      {c.quantity>0?
                      <ul className="featured__item__pic__hover">
                      <li>
                      <a className="name-product" onClick={()=>handleOnClickAddToCart(c.idProduct,c.nameProduct)}>
                        <span class="add-to-cart">
                            Thêm vào giỏ
                        </span>{" "}
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                    </ul>
                    :
                  <div className="het-hang">
                    <h4 className="het-hang-conten"><b>Tạm hết hàng</b></h4>
                    </div>

                    }
                      </div>
                      <div className="featured__item__text"
                       onClick={() => {
                        navigate(
                          "/detail," +
                            c.idProduct +
                            "," +
                            c.typeProduct.idTypeProduct
                        );
                      }}
                      >
                        <h6>
                          <p className="name-product"
                            onClick={() => {
                              navigate(
                                "/detail," +
                                  c.idProduct +
                                  "," +
                                  c.typeProduct.idTypeProduct
                              );
                            }}
                          >
                            {c.nameProduct}
                          </p>
                        </h6>
                        <h5>{numeral(c.price).format("00,0 đ")} vnđ/Kg</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div style={{ textAlign: "center" }}>
                <button
                  className="bth-xem-them"
                  onClick={() => {
                    navigate("/cua-ghe");
                  }}
                >
                  Xem Thêm sản phẩm Cua, Ghẹ...
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="featured spad featuredd">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2
                    onClick={() => {
                      navigate("/sashimi");
                    }}
                  >
                    Sashimi - Ngon Chuẩn Nhật
                  </h2>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              {sashimi.map((c) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
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
                      {c.quantity>0?
                      <ul className="featured__item__pic__hover">
                      <li>
                      <a className="name-product" onClick={()=>handleOnClickAddToCart(c.idProduct,c.nameProduct)}>
                        <span class="add-to-cart">
                            Thêm vào giỏ
                        </span>{" "}
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                    </ul>
                    :
                  <div className="het-hang">
                    <h4 className="het-hang-conten"><b>Tạm hết hàng</b></h4>
                    </div>

                    }
                      </div>
                      <div className="featured__item__text"
                       onClick={() => {
                        navigate(
                          "/detail," +
                            c.idProduct +
                            "," +
                            c.typeProduct.idTypeProduct
                        );
                      }}
                      >
                        <h6>
                          <p className="name-product"
                            onClick={() => {
                              navigate(
                                "/detail," +
                                  c.idProduct +
                                  "," +
                                  c.typeProduct.idTypeProduct
                              );
                            }}
                          >
                            {c.nameProduct}
                          </p>
                        </h6>
                        <h5>{numeral(c.price).format("00,0 đ")} vnđ</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div style={{ textAlign: "center" }}>
                <button
                  className="bth-xem-them"
                  onClick={() => {
                    navigate("/sashimi");
                  }}
                >
                  Xem Thêm sản phẩm sashimi...
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="featured spad featuredd">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2
                    onClick={() => {
                      navigate("/hs-dong-lanh");
                    }}
                  >
                    Hải Sản Đông Lạnh
                  </h2>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              {dongLanh.map((c) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
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
                      {c.quantity>0?
                      <ul className="featured__item__pic__hover">
                      <li>
                      <a className="name-product" onClick={()=>handleOnClickAddToCart(c.idProduct,c.nameProduct)}>
                        <span class="add-to-cart">
                            Thêm vào giỏ
                        </span>{" "}
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                    </ul>
                    :
                  <div className="het-hang">
                    <h4 className="het-hang-conten"><b>Tạm hết hàng</b></h4>
                    </div>

                    }
                      </div>
                      <div className="featured__item__text"
                       onClick={() => {
                        navigate(
                          "/detail," +
                            c.idProduct +
                            "," +
                            c.typeProduct.idTypeProduct
                        );
                      }}
                      >
                        <h6>
                          <p className="name-product"
                            onClick={() => {
                              navigate(
                                "/detail," +
                                  c.idProduct +
                                  "," +
                                  c.typeProduct.idTypeProduct
                              );
                            }}
                          >
                            {c.nameProduct}
                          </p>
                        </h6>
                        <h5>{numeral(c.price).format("00,0 đ")} vnđ</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div style={{ textAlign: "center" }}>
                <button
                  className="bth-xem-them"
                  onClick={() => {
                    navigate("/hs-dong-lanh");
                  }}
                >
                  Xem Thêm sản phẩm hải sản đông lạnh...
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;
