import { Link, useNavigate } from "react-router-dom";
import {
  getLimitListProductByType,
  countProductByIdType,
} from "../service/productService";
import { useEffect, useState } from "react";
import numeral from "numeral";
function TomMucList() {
  const [products, setProducts] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const navigate = useNavigate();
  const [limit, setLimit] = useState(8);

  const getListProduct = async () => {
    const data = await getLimitListProductByType(2, limit);
    setProducts(data);
  };

  const getQuantityProduct = async () => {
    const data = await countProductByIdType(2);
    setQuantityProduct(data);
  };

  const handleButtonXemthem = async () => {
    const newLimit = limit + 8;
    await getListProduct(newLimit);
    setLimit(newLimit);
  };

  useEffect(() => {
    getListProduct();
    getQuantityProduct();
  }, [limit]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                    <li style={{ backgroundColor: "rgb(25, 98, 145)" }}>
                      <Link
                        to={"/tom-muc"}
                        style={{ color: "white" }}
                        className="menu-trang-chu"
                      >
                        <b>TÔM, BẠC TUỘT, MỰC</b>
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
                      <a className="menu-trang-chu">MÓN NGON CÓ SẴN</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__item set-bg7"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured spad featuredd">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Tôm, Bạch Tuộc, Mực</h2>
                </div>
              </div>
            </div>
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
                            <li>
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
                          backgroundImage: `url('${c.img}')`,
                          height: "270px",
                          backgroundepReat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "top center",
                        }}
                        onClick={() => {
                          navigate(
                            "/detail," +
                              c.idProduct +
                              "," +
                              c.typeProduct.idTypeProduct
                          );
                        }}
                      >
                        <ul className="featured__item__pic__hover">
                          <li>
                            <a href="/#">
                              <span class="add-to-cart">
                                <b>thêm vào giỏ</b>
                              </span>{" "}
                              <i className="fa fa-shopping-cart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="featured__item__text">
                        <h6>
                          <a
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
                          </a>
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
                    Xem Thêm {quantityProduct-products.length} sản phẩm<i class="fa-solid fa-angle-down"></i>
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default TomMucList;
