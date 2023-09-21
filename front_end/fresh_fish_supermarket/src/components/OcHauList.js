import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getLimitListProductByType,
  countProductByIdType,
  getListProductBetweenByPrice,
  countSearchBetween,
  deleteProductById
} from "../service/productService";
import {addProductToCart, totalProductOnCart} from "../service/cartService";
import { useEffect, useState } from "react";
import numeral from "numeral";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/actions/cartActions";

function OcHauList() {
  const [products, setProducts] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const navigate = useNavigate();
  const [limit, setLimit] = useState(8);
  const [textLoc, settextLoc] = useState("");
  const [textSapXep, setTextSapXep] = useState("");
  const [flag, setFlag] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const idType = 3;

  const headers = {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
  };

  const getListProduct = async () => {
    const data = await getLimitListProductByType(idType, limit);
    setProducts(data);
  };

  const getQuantityProduct = async () => {
    const data = await countProductByIdType(idType);
    setQuantityProduct(data);
  };

  const handleOnclickDelete = async (idProduct,nameProduct)=>{
    Swal.fire({
      title: `Bạn muốn xóa ${nameProduct}?`,
      text: "chức năng này không thể hoàn tác",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProductById(idProduct,headers)
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        setFlag(!flag)
      }
      
    });

  }

  const handleButtonXemthem = async () => {
    const newLimit = limit + 8;
    setLimit(newLimit);
    const data = await getLimitListProductByType(idType, newLimit);
    switch(textSapXep){
      case "Tăng dần":
        data.sort((a, b) => b.price - a.price);
        setProducts(data);
        break;
        case "Giảm dần":
          data.sort((a, b) => a.price - b.price);
          setProducts(data);
          break;
          default :
          setProducts(data);
    }   

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
    getListProduct();
    getQuantityProduct();
  }, [flag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getcountBetween = async (begin, end, idType) => {
    const data = await countSearchBetween(begin, end, idType);
    setQuantityProduct(data);
  };

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
                    <li style={{ backgroundColor: "rgb(25, 98, 145)" }}>
                      <Link
                        to={"/oc-hau "}
                        style={{ color: "white" }}
                        className="menu-trang-chu"
                      >
                        <b>ỐC, HÀU, VẸM CÁC LOẠI</b>
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
                      <a className="menu-trang-chu">MÓN NGON CÓ SẴN</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__item set-bg3"></div>
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
            <div className="row">
              <div className="col-lg-2">
                <div className="bo-loc">
                  <p className="boloc">
                    <i class="fa-solid fa-filter"></i> BỘ LỌC
                  </p>
                </div>
              </div>
              <div className="col-lg-1" >
                <div className="bo-loc">
                  <div class="dropdown">
                    <a
                      class="btn-secondary dropdown-toggle loc-gia"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Lọc giá
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li
                        onClick={async () => {
                          setLimit(8);
                          const data = await getListProductBetweenByPrice(
                            0,
                            100000,
                            idType,
                            8
                          );
                          setProducts(data);
                          getcountBetween(0,100000,idType)
                          settextLoc("Dưới 100,000đ");
                        }}
                      >
                        <a class="dropdown-item">Dưới 100,0000đ</a>
                      </li>
                      <li
                        onClick={async () => {
                          setLimit(8);
                          const data = await getListProductBetweenByPrice(
                            100000,
                            200000,
                            idType,
                            8
                          );
                          setProducts(data);
                          getcountBetween(100000,200000,idType)
                          settextLoc("100,000đ - 200,000đ");
                        }}
                      >
                        <a class="dropdown-item">100,000đ - 200,000đ</a>
                      </li>
                      <li
                        onClick={async () => {
                          setLimit(8);
                          const data = await getListProductBetweenByPrice(
                            200000,
                            300000,
                            idType,
                            8
                          );
                          setProducts(data);
                          getcountBetween(200000,300000,idType)
                          settextLoc("200,000đ - 300,000đ");
                        }}
                      >
                        <a class="dropdown-item">200,000đ - 300,000đ</a>
                      </li>
                      <li
                        onClick={async () => {
                          setLimit(8);
                          const data = await getListProductBetweenByPrice(
                            300000,
                            400000,
                            idType,
                            8
                          );
                          setProducts(data);
                          getcountBetween(300000,400000,idType)
                          settextLoc("300,000đ - 400,000đ");
                        }}
                      >
                        <a class="dropdown-item">300,000đ - 400,000đ</a>
                      </li>
                      <li
                        onClick={async () => {
                          setLimit(8);
                          const data = await getListProductBetweenByPrice(
                            400000,
                            9000000,
                            idType,
                            8
                          );
                          setProducts(data);
                          getcountBetween(400000,9000000,idType)
                          settextLoc("Trên 400,000đ");
                        }}
                      >
                        <a class="dropdown-item">Trên 400,000đ</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3" style={{zIndex : "-999 !important"}}>
                <div className="bo-loc">
                  <div class="dropdown">
                    <a
                      class="btn-secondary dropdown-toggle loc-gia sap-xep"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sắp xếp{textSapXep!==""?<span> : {textSapXep}</span>:<></>}
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li
                      onClick={()=>{
                        const pro = products
                        pro.sort((a, b) => a.price - b.price);
                        setProducts([...pro]);
                        setTextSapXep("Tăng dần");
                      }}
                      >
                        <a class="dropdown-item">
                          <i class="fa-solid fa-arrow-down-1-9"></i> Giá: Tăng dần
                        </a>
                      </li>
                      <li
                        onClick={()=>{
                          const pro = products
                          pro.sort((a, b) => b.price - a.price);
                          setProducts([...pro]);
                          setTextSapXep("Giảm dần");
                        }}
                      >
                        <a class="dropdown-item">
                          <i class="fa-solid fa-arrow-down-9-1"></i> Giá: Giảm dần
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {textLoc !== "" ? (
              <p className="text-loc">
                Lọc giá: <b>{textLoc}</b>
                <span
                  className="dau-x"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    getListProduct();
                    getQuantityProduct();
                    setLimit(8);
                    settextLoc("");
                    setTextSapXep("");
                  }}
                >
                  {" "}
                  x
                </span>
              </p>
            ) : (
              <></>
            )}
            {products.length==0?
            <div className="khongsp">Không có sản phẩm nào</div>
            :
<div className="row featured__filter">
              {products.map((c) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div className="featured__item">
                      {localStorage.getItem("role") === "ROLE_ADMIN" ? (
                        <div class="dropdown">
                          <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          ></button>
                          <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li onClick={()=>handleOnclickDelete(c.idProduct,c.nameProduct)}>
                              <a class="dropdown-item" >
                                Xóa
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Sửa
                              </a>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div
                        className="featured__item__pic set-bg"
                        style={{
                          backgroundImage: `url('${c.img}')`,
                          height: "270px",
                          backgroundepReat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "top center",
                        }}
                        // onClick={() => {
                        //   navigate(
                        //     "/detail," +
                        //       c.idProduct +
                        //       "," +
                        //       c.typeProduct.idTypeProduct
                        //   );
                        // }}
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
                        <p className="name-product">{c.nameProduct}</p>
                        </h6>
                        <h5>{numeral(c.price).format("00,0 đ")} vnđ</h5>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div style={{ textAlign: "center" }}>
                {products.length < quantityProduct ? (
                  <button className="btn-plus" onClick={handleButtonXemthem}>
                    Xem Thêm {quantityProduct - products.length} sản phẩm{" "}
                    <i class="fa-solid fa-angle-down"></i>
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          }

            
          </div>
        </section>
      </div>
    </>
  );
}
export default OcHauList;
