import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./pages/Home/Home";

function Router() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
                  {/* <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/products' element={<Products />} />
                  <Route path='/products/:id' element={<Product />} />
                  <Route path='*' element={<NotFound />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Router;
