 // Wishlist.jsx
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import wishlistEmptyImg from "../assets/wishlistEmptyImg.png";
 import { NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";
import { WishlistContext } from "../context/WishlistContext"; 
import { CartContext } from "../main";

import "../pages/Wishlist.css";

export default function Wishlist() {
  const { wishlist ,reomveFromWishlist} = useContext(WishlistContext);
  const { cart,addToCart} = useContext(CartContext);
   
  const isInCart = (id) => cart.some((item) => item.id === id);
     const handleAddToCart = (id,title,price,image,reting,is_off,size,cancel_price,category,description) => {
      if (!isInCart(id)  ) {
        addToCart({
          id,
          title,
          price,
          image,
          reting,
          is_off,
          size,
          cancel_price,
          category,
          description,
        });
      }
      toast.success("item added to cart", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    };
    const handeleDelete = (itemId) => {
      reomveFromWishlist(itemId);
      console.log("click")
      toast.error(' item removed from wishlist', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });   
    };
    
  
  return (
    <>
      <div className="wishlistContainer">
        
        <h1 className="wishlistHeading">wishlist: {wishlist.length}</h1>
        <div className="cartEmptyContainer">
{wishlist.length <=0 && <div><img className="emptyImg" src={wishlistEmptyImg} />
 <div className="emptyWishlistHeading">Your Wishlist is Empty!
</div> 
<p className="cartEmptyDescription">Go ahead and explore exclusive products!</p><button className="cartEmptyButton"><NavLink className="cartEmptyLink" to="/product">Shop Now</NavLink></button></div>}
        </div>
        <div className="wishlistCardContainer">
          {
            wishlist.map((item)=>(
               <div className="outerProductContainer">
              <img className="productImg" src={item.image} alt={item.title} />
              <i   onClick={()=>handeleDelete(item.id)}id="wishlist" style={{color:"red"}} className="fa-solid fa-heart fa-xl"></i>
              <ToastContainer/>

               <div className="headingRetingBox">
                <h4 className="title">{item.title}</h4>
                <div className="retingBox">
                  <p className="reting">{item.reting}</p>
                  <i className="fa-solid fa-star" id="retingStar"></i>
                </div>
              </div>
              <div className="priceContainer">
                <p className="mrpPrice">
                  MRP: <span className="heilightmrpPrice">₹{item.price}</span>
                </p>
                <p className="cancelPrice">
                  <span className="strikeCancelPrice">₹{item.cancel_price}</span>
                </p>
                <p className="off">{item.is_off}% OFF</p>
              </div>
               
           <button onClick={() => handleAddToCart(item.id, item.title, item.price, item.image, item.reting, item.is_off, item.size, item.cancel_price, item.category, item.description)} className="add-to-cart">
  <span>
    {" "}
    <i className="fa-solid fa-cart-shopping fa-xl"></i>
  </span>{" "}
  {isInCart(item.id) ? (
    <NavLink className="cartText" to="/cart">
      <button className="pas"> 
        <span>
          {" "}
          <i className="fa-solid fa-cart-shopping fa-xl"></i>
        </span>{" "}
        Go to Cart
      </button>
    </NavLink>
  ) : (
    "Add to Cart"
  )}
</button>

                       </div>
            ))
          }
        </div>
        
        
      </div>
    </>
  );
}
