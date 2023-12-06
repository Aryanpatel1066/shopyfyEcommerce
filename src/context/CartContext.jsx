// import context
import { createContext,useState } from "react";
// create context
 export const CartContext = createContext();

// hear children is the app
 export function CartProvider({children}){
    const [cart,setCart] = useState([]);
      function addToCart(item){
        setCart((cart)=>[...cart,item]);
      }
      function removeFromCart(itemId) {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
      }
      return(
     <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
       {children}
     </CartContext.Provider>
        )
 }