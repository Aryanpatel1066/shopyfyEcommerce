import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../component/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import NotFound from "../pages/404";
// import Signup from "../pages/Signup";
import "./Header.css";
 
export default function Router() {
  return (
    <>
      {/* <Header   /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:category?" element={<Product />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
        {/* <Route path="/signup" element={<Signup/>}></Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
