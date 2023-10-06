import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  countSearch,
  searchByName,
  deleteProductById,
} from "../service/productService";
import { addProductToCart, totalProductOnCart } from "../service/cartService";
import { useEffect, useState } from "react";
import numeral from "numeral";
import {} from "../App.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/actions/cartActions";
import Swal from "sweetalert2";

function TimKiem() {
  const [products, setProducts] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const navigate = useNavigate();
  const [limit, setLimit] = useState(8);
  const [flag, setFlag] = useState(false);

  const { name } = useParams();
  const dispatch = useDispatch();
  const [backToTop, setBackToTop] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      setBackToTop(true);
    } else {
      setBackToTop(false);
    }
  });

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const getListProduct = async () => {
    const data = await searchByName(name.trim(), limit);
    setProducts(data);
  };

  const getQuantityProduct = async () => {
    const data = await countSearch(name.trim());
    setQuantityProduct(data);
  };

  const handleOnclickDelete = async (idProduct, nameProduct) => {
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
        await deleteProductById(idProduct, headers);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        setFlag(!flag);
      }
    });
  };

  const handleButtonXemthem = async () => {
    const newLimit = limit + 8;
    await getListProduct(newLimit);
    setLimit(newLimit);
  };

  useEffect(() => {
    getListProduct();
    getQuantityProduct();
  }, [limit, name, flag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOnClickAddToCart = async (idProduct, nameProduct) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
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

  return (
    <>
      {backToTop && (
        <button className="scroll-up" onClick={scrollup}>
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <section
          className="featured spad featuredd"
          style={{ paddingTop: "100px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title" style={{ marginBottom: "0px" }}>
                  <h2>Tìm kiếm</h2>
                  <br></br>
                  <p>
                    có <b>{quantityProduct} sản phẩm</b> cho tìm kiếm
                  </p>
                </div>
                <p style={{ marginBottom: "40px" }}>
                  kết quả tìm kiếm cho <b>"{name}"</b>
                </p>
              </div>
            </div>
            {products.length == 0 ? (
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  margin: "47px",
                }}
              >
                Không tìm thấy nội dung bạn yêu cầu
              </div>
            ) : (
              <div className="row featured__filter">
                {products.map((c) => {
                  return (
                    <div
                      className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables"
                      key={c.idProduct}
                    >
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
                              <li
                                onClick={() =>
                                  handleOnclickDelete(
                                    c.idProduct,
                                    c.nameProduct
                                  )
                                }
                              >
                                <a class="dropdown-item" href="#">
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
                            backgroundImage: `url('/${c.img}')`,
                            height: "270px",
                            backgroundepReat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "top center",
                          }}
                        >
                          <ul className="featured__item__pic__hover">
                            <li>
                              <a
                                onClick={() =>
                                  handleOnClickAddToCart(
                                    c.idProduct,
                                    c.nameProduct
                                  )
                                }
                              >
                                <span class="add-to-cart">
                                  <b>thêm vào giỏ</b>
                                </span>{" "}
                                <i className="fa fa-shopping-cart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="featured__item__text"
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
                            <a>{c.nameProduct}</a>
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
                      Xem Thêm {quantityProduct - products.length} sản phẩm
                      <i class="fa-solid fa-angle-down"></i>
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}
export default TimKiem;
