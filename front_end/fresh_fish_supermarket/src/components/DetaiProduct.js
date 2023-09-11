import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getProductById, getLimitListProductByType} from "../service/productService"
import numeral from "numeral";

function DetaiProduct (){
  const {data} = useParams();
  const navigate = useNavigate();
  const [product,setProduct] = useState();
  const [listProduct,setListProduct] = useState([]);
  const [flag,setFlag]= useState(false);

  const arrData = data.split(",");
  const idProduct = arrData[1];
  const idType = arrData[2];


  const getProduct = async()=>{
const data = await getProductById(idProduct);
setProduct(data);
  }

  const handelOnClick = async(id)=>{
    window.scrollTo(0, 0);
    const data = await getProductById(id);
    setProduct(data);
  }

  const getListProduct = async ()=>{
const data = await getLimitListProductByType(idType,4)
setListProduct(data);
  }

  console.log(product);

  useEffect(()=>{
    getProduct();
    window.scrollTo(0, 0);
    getListProduct();
  },[])

  if(!product){
    return null;
  }
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
                    <img style={{ width: "200px" }} className="product__details__pic__item--large" src={product.img} alt="" />
                  </div>  
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                  <h3>{product.nameProduct}</h3>
                  <div className="product__details__price">{numeral(product.price).format('00,0 đ')}đ</div>
                  <p>{product.describeProduct}</p>
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
                    <li><i className="fa-solid fa-truck"></i>&nbsp;&nbsp;&nbsp;&nbsp;Giao hàng nhanh trong 2 giờ, nội thành TP.Đà Nẵng.</li>
                    <li><i className="fa-solid fa-box"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đổi trả với bất kỳ lý do gì liên quan đến sản phẩm.</li>
                    <li><i className="fa-solid fa-gift"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nhiều ưu đã cho thành viên.</li>
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
            {listProduct.map((c)=>{
                return(
<div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" key={c.idProduct}>
                <div className="featured__item"
                style={{
                  backgroundImage:`url('${c.img}')`,
                  height: "270px",
                  backgroundepReat: "no-repeat",
	                backgroundSize: "cover",
	                backgroundPosition: "top center",
                }}
                onClick={()=>{handelOnClick(c.idProduct)}}
                >
                  <div className="featured__item__pic">
                    <ul className="featured__item__pic__hover">
                      <li><a href="/#"><span class="add-to-cart"><b>thêm vào giỏ</b></span> <i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6><a onClick={()=>{handelOnClick(c.idProduct)}}>{c.nameProduct}</a></h6>
                    <h5>{numeral(c.price).format('00,0 đ')} vnđ</h5>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
        </>
    )
}
export default DetaiProduct;