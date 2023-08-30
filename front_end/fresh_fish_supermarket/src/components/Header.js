import{Link} from "react-router-dom"

function Header(){
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
                      <input type="text" id="input-header" placeholder="Tìm kiếm sản phẩm..." />
                      <i class="fa-solid fa-magnifying-glass" id="icon-search"></i>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li> <div className="header__top__right__auth">
                      <Link to={"/login"} id="dang-nhap-head"><i className="fa fa-user" style={{color:"white" }}/>Đăng nhập</Link>
                    </div>  </li>
                    <li><Link to={"/cart"}><i className="fa fa-shopping-bag" style={{color:"white"}} /> <span style={{color:"white", background : "red"}} >0</span></Link></li>
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