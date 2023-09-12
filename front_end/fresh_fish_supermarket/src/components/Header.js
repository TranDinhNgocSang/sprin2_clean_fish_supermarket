import { useEffect, useState } from "react";
import{Link, useLocation, useNavigate} from "react-router-dom";
import {totalProductOnCart} from "../service/cartService";
import { useSelector } from "react-redux";
import {getCart, getCount} from "../store/actions/cartActions";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/actions/cartActions";

function Header(){
  const[flag,setFlag]= useState();
  const[search,setSearch]= useState("");
  const[numProduct,setNumProduct] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const numberOfProductsInCart = useSelector(getCart);
  const dispatch = useDispatch();
  const getCountCheck = useSelector(getCount);

  const handleOnClickSearch = ()=>{
    const searchUp = search;
    setSearch("")
    if(searchUp!==""){
      navigate("/timkiem/"+searchUp)
    }
  }

  const getToltalProductOnCart = async()=>{
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const data = await totalProductOnCart(headers);
    setNumProduct(data);
    } catch (error) {
      setNumProduct(0);
    }

  }

  useEffect(()=>{
getToltalProductOnCart();
  },[flag,location])

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      const searchUp = search;
      setSearch("")
      if(searchUp!==""){
        navigate("/timkiem/"+searchUp)
      }
      e.preventDefault();
    }
  };

    return(
        <>
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
        <header className="header navbarSang">
          <div className="header__top">
            <div className="container">
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <Link to={"/"}><img width = "60px" src="img/logo-end.png" alt="" /></Link>
                  <Link to={"/"} id="name-shop" style={{ fontWeight: "bold", fontSize: "1.5rem", color : "white", paddingLeft: "10px", textDecoration:"none"}}>
    CÁ SẠCH DANA
  </Link>
                </div>
              </div>
              <div className="col-lg-6">
              <div className="hero__search">
                      <input type="text" id="input-header" placeholder="Tìm kiếm sản phẩm..." onChange={(e)=>{setSearch(e.target.value)}} style={{paddingLeft: "20px"}} value={search} onKeyPress={handleOnKeyPress}/>
                      <i class="fa-solid fa-magnifying-glass" id="icon-search" onClick={handleOnClickSearch}></i>

                </div>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li> <div className="header__top__right__auth">
                      {localStorage.getItem("userName")==null?
                      <Link to={"/login"} id="dang-nhap-head"><i className="fa fa-user" style={{color:"white" }}/>Đăng nhập</Link>
                      :
                      <div className="login-user" id="dang-nhap-head2"><i className="fa fa-user" style={{color:"white" }}/>
                      <b className="logout-head">{localStorage.getItem("userName")}</b>
                        <div className="login-user-list">
                        <div className="login-user-item"
                        onClick={()=>{
                          localStorage.removeItem("token");
                          localStorage.removeItem("userName");
                          localStorage.removeItem("role");
                          setFlag(!flag);
                          navigate("/login");
                        }}
                        >Đăng xuất</div>
                        <div className="login-user-item">Lịch sử mua hàng</div> 
                       </div>
                      </div>
                    }
                      
                    </div>  </li>
                    <li><Link to={"/cart"}><i className="fa fa-shopping-bag" style={{color:"white"}} />
                    <span style={{color:"white", background : "red"}} >
                      {getCountCheck==0?
                      numProduct
                      :
                      numberOfProductsInCart
                    }
                      {/* {numProduct} */}
                      </span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>
        </>
    )
}
export default Header;