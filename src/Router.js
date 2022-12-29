import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/checkout/CheckOut";
import MyAddress from "./components/myAddress/MyAddress";
import MyBankAccount from "./components/myBankAccount/MyBankAccount";
import MyOrderHistory from "./components/myOrderHistory/MyOrderHistory";
import MyProfile from "./components/myProfile/MyProfile";
import MyVouchers from "./components/myVouchers/MyVouchers";
import PCategories from "./components/pCategories/PCategories";
import Profile from "./components/profile/Profile";
import SearchPage from "./components/searchPage/SearchPage";
import WishList from "./components/wishList/WishList";
import Home from "./pages/Home/Home";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/products' element={<Products />} />
                  <Route path='/products/:id' element={<Product />} />
                  <Route path='*' element={<NotFound />} /> */}
          <Route path="/pcategories" element={<PCategories />} />
          <Route path="/myOrderHistory" element={<MyOrderHistory />} />
          <Route path="/myBankAccount" element={<MyBankAccount />} />
          <Route path="/myvouchers" element={<MyVouchers />} />
          <Route path='/myAddress' element={<MyAddress />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
