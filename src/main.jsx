 // main.jsx
import { BrowserRouter as ReactRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';

import App from './App.jsx';
import { CartContext, CartProvider } from "./context/CartContext.jsx";
import { WishlistContext, WishlistProvider } from "./context/WishlistContext.jsx";

// Remove these lines as they are not needed
export { CartContext }
export { WishlistContext }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactRouter>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </ReactRouter>
  </React.StrictMode>,
);
