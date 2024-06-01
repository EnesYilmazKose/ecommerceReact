import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import WishList from "./Pages/WishList/WishList";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Naav from "./Components/Nav/Naav";

function App() {
  return (

    <div className="App">

      <Naav />

        <div className="main">

          <Routes>

              <Route path="/" element={<Home />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/wishlist" element={<WishList />}/>
              <Route path="/products/:id" element={<ProductDetail />}/>
              <Route path="*" element={<ErrorPage />}/>

          </Routes>

        </div>

        <Footer />

    </div>

  )
}

export default App;
