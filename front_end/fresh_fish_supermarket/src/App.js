import CatuoiList from "./components/CatuoiList";
import CuaGheList from "./components/CuaGheList";
import DetaiProduct from "./components/DetaiProduct";
import Footer from "./components/Footer";
import HaiSanDongLanhList from "./components/HaiSanDongLanhList";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import OcHauList from "./components/OcHauList";
import SashimiList from "./components/SashimiList";
import ShoppingCart from "./components/ShoppingCart";
import TomMucList from "./components/TomMucList";
import {Routes,Route} from "react-router-dom"
import Register from "./components/Register";
import TimKiem from "./components/TimKiem";
import Return from "./components/Return";
import HistoryOrder from "./components/HistoryOrder";
import Infor from "./components/Info";
import NotFound from "./components/NotFound";



function App() {
  return (
<>
<Header></Header>
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/ca-tuoi" element={<CatuoiList></CatuoiList>}></Route>
  <Route path="/tom-muc" element={<TomMucList></TomMucList>}></Route>
  <Route path="/oc-hau" element={<OcHauList></OcHauList>}></Route>
  <Route path="/cua-ghe" element={<CuaGheList></CuaGheList>}></Route>
  <Route path="/sashimi" element={<SashimiList></SashimiList>}></Route>
  <Route path="/hs-dong-lanh" element={<HaiSanDongLanhList></HaiSanDongLanhList>}></Route>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path="/cart" element={<ShoppingCart></ShoppingCart>}></Route>
  <Route path="/:data" element={<DetaiProduct></DetaiProduct>}></Route>
  <Route path="/register" element={<Register></Register>}></Route>
  <Route path="/timkiem/:name" element={<TimKiem></TimKiem>}></Route>
  <Route path="/Return" element={<Return></Return>}></Route>
  <Route path="/lich-su-mua-hang" element={<HistoryOrder></HistoryOrder>}></Route>
  <Route path="/info" element={<Infor></Infor>}></Route>
  <Route path="/404" element={<NotFound></NotFound>}></Route>
</Routes>
<Footer></Footer>
</>
  );
}
export default App;
