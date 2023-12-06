import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  function addToWishlist(item) {
    setWishlist((wishlist) => [...wishlist, item]);
  }
  function reomveFromWishlist(itemId){
        const updateWishlist = wishlist.filter((item)=>item.id !== itemId)
        setWishlist(updateWishlist)
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist,reomveFromWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
}
