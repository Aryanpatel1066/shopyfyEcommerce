import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../main";
import { WishlistContext } from "../main";
import "../pages/Product.css";
import "../component/ProductCard.css";
export function ProductCard({
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
  noDetail,
}) {
  const { cart, addToCart } = useContext(CartContext);
    const {wishlist,addToWishlist,reomveFromWishlist}=useContext(WishlistContext)
  const isInCart = cart.some((item) => item.id === id);
  const isInWishlist = wishlist.some((item)=>item.id ===id);
  const [likes,setLikes]=useState(isInWishlist);

const handleAddToWishlist=()=>{
  if(!isInWishlist){
  addToWishlist({
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
  toast.success("item added to wishlist", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  
  // setLikes(!likes);
}
// else{
//   removeFromWishlist(id)
// }
else {
  reomveFromWishlist(id);
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
 }
setLikes((likes)=>!likes)

}
const handleAddToCart = () => {
  if (!isInCart) {
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
  return (
    <>
        <div className={`outerProductContainer `}>
           <NavLink to={`/productdetails/${id}`} className="linkgo">
          <img className="productImg" src={image} alt={title} /></NavLink>
          <i onClick={handleAddToWishlist} style={{color:likes?"red":""}}id="wishlist"   className="fa-solid fa-heart fa-xl"></i>
          <NavLink to={`/productdetails/${id}`} className="linkgo">
          <div className="test">
          <div className="headingRetingBox">
            <h4 className="title">{title}</h4>
            <div className="retingBox">
              <p className="reting">{reting}</p>
              <i className="fa-solid fa-star" id="retingStar"></i>
            </div>
          </div>
          <div className="priceContainer">
            <p className="mrpPrice">
              MRP: <span className="heilightmrpPrice">₹{price}</span>
            </p>
            <p className="cancelPrice">
              <span className="strikeCancelPrice">₹{cancel_price}</span>
            </p>
            <p className="off">{is_off}% OFF</p>
          </div>
          </div>
          </NavLink>
          <ToastContainer />
          {!noDetail && (
            <div className="descriptionBox">
              <div className="details">
                <i className="fa-solid fa-tag fa-xl"></i>
                <span className="bold">Details: </span>
                {description}
              </div>
              <i className="fa-solid fa-tag fa-xl"></i>
              <span className="bold"> size:</span>
              {size}
            </div>
          )}

          <button onClick={handleAddToCart} className="add-to-cart">
            <span>
              {" "}
              <i className="fa-solid fa-cart-shopping fa-xl"></i>
            </span>{" "}
            {isInCart ? (
              <NavLink className="cartText" to="/cart">
                           <button className="pas"> <span>
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
      
    </>
  );
}
 