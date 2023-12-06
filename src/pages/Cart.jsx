 
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../main";
import cartEmptyImg from "../assets/cartEmptyImg.webp";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Initialize quantities with the current cart state
    const initialQuantities = {};
    cart.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);
// delete item from cart
  const handleDelete = (itemId) => {
    removeFromCart(itemId);
    toast.error("item removed from cart", {
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
// increment quantity
  const handleIncrement = (itemId) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[itemId] = (updatedQuantities[itemId] || 1) + 1;
      return updatedQuantities;
    });
  };
//decrement quantity
  const handleDecrement = (itemId) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[itemId] = Math.max(
        (updatedQuantities[itemId] || 1) - 1,
        1
      );
      return updatedQuantities;
    });
  };

  return (
    <>
      <h1 className="cartHeading">cart {cart.length} </h1>
      <div className="cartEmptyContainer">
        {cart.length <= 0 && (
          <div>
            {" "}
            <img className="emptyImg" src={cartEmptyImg} />
            <p className="cartEmptyDescription">
              Explore exclusive products and add your favourites to Wishlist!
            </p>
            <button className="cartEmptyButton">
              <NavLink className="cartEmptyLink" to="/product">
                Shop Now
              </NavLink>
            </button>
          </div>
        )}
      </div>

      <div className="bodyContainer">
        <div className="cartContainer">
          <ToastContainer />
          <div className="mainCardProductContainer">
            {cart.map((item) => (
              <div className="cartProduct" key={item.id}>
                <img
                  className="cartImg"
                  src={item.image}
                  alt={item.title}
                />
                <div className="cartTitle">{item.title}</div>
                <div className="productSize">size ({item.size})</div>
                <div className="priceContainer p2">
                  <p className="mrpPrice">
                    MRP: <span className="heilightmrpPrice">₹{item.price}</span>
                  </p>
                  <p className="cancelPrice">
                    <span className="strikeCancelPrice">
                      ₹{item.cancel_price}
                    </span>
                  </p>
                  <p className="off">{item.is_off}% OFF</p>
                </div>
                {/* quantity */}
                <div>
                  <button
                    className="incrementBtn"
                    onClick={() => handleDecrement(item.id)}
                    disabled={quantities[item.id] <= 1}
                  >
                    -
                  </button>
                  <span className="incrementValue">
                    {quantities[item.id]}
                  </span>
                  <button
                    className="incrementBtn"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="cartEmptyButton remove"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

     <div>   {cart.length > 0 && (
          <div className="cartTotalPriceContainer">
            <hr />
            <h1 className="priceDetailsHeading">Price Details</h1>
            <hr />
            <div className="priceDetails">
              <div className="priceDetailsTitle">
                Price (
                {Object.values(quantities).reduce(
                  (total, qty) => total + qty,
                  0
                )}{" "}
                items)
              </div>
              <div>
                ₹{" "}
                {cart.reduce(
                  (totalDiscount, item) =>
                    (totalDiscount +=
                      item.cancel_price * quantities[item.id]),
                  0
                )}
              </div>

              <div className="priceDetailsTitle">Discount</div>
              <div>
                ₹{" "}
                {cart.reduce(
                  (totalDiscount, item) =>
                    (totalDiscount +=
                      (item.cancel_price - item.price) *
                      quantities[item.id]),
                  0
                )}
              </div>

              <div className="priceDetailsTitle">Delivery Charges</div>
              <div>FREE</div>
              <div className="priceDetailsTitle">Shipping Charges</div>
              <div>₹ 0.00</div>
            </div>
            <hr />
            {cart.length > 0 && (
              <div className="priceDetailsHeading">
                Total: ₹
                {cart.reduce(
                  (totalPrice, item) =>
                    (totalPrice +=
                      item.price * (quantities[item.id] || 1)),
                  0
                )}
                .00
              </div>
            )}
            <hr />
          </div>
        )}
      </div></div>
    </>
  );
}
