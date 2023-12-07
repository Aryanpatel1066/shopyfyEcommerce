import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react"
import {CartContext} from "../main"
import { WishlistContext } from "../main";
import "./Header.css";

 
export default function Header() {
  const {cart}=useContext(CartContext);
  const {wishlist}=useContext(WishlistContext);

  const [menuOpen, setMenuOpen] = useState(false);
  //step1: defe searchquery
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
   };
   
  

  return (
    <>
      <nav>
        <NavLink to="/">
          {" "}
          <img
            className="navLogo"
            src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjo3MCwidyI6MTAwMCwiZnMiOjcwLCJmZ2MiOiIjNzEzREIxIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U2hvcHlmeQ/airtravelerspersonaluse-bdit.png"
            alt="Logo"
          />{" "}
        </NavLink>
        <button className="hamburgerBtn" onClick={toggleMenu}>
          <i id="hamburgerIcon" className="fa-solid fa-bars fa-lg"></i>
        </button>
  <div></div>
         <div className="navIcons">
          <NavLink to="/product">
          <input
            className="searchBox"
            placeholder="search on shopyfy..."
            type="search"
            // onKeyDown={handleSearch}
            // onChange={(e)=>setSearchQuery(e.target.value)}
            
          />
          </NavLink>
          {/* <button className="searchBtn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button> */}
           <NavLink className="links" to="/product">
            <i className="fa-solid fa-bag-shopping fa-xl"></i>
           
          </NavLink>
          <NavLink className="links" to="/cart">
            <i className="fa-solid fa-cart-shopping fa-xl"></i> <sup>{cart.length}</sup>
          </NavLink>
          <NavLink className="links" to="/wishlist">
            <i className="fa-solid fa-heart fa-xl"></i> <sup>{wishlist.length}</sup>
          </NavLink>
          <NavLink className="links" to="/login">
            <i className="fa-solid fa-user fa-xl"></i>
          </NavLink>
        </div>
      </nav>
      {/* make hamberger menu for responsive */}
      <div className={`${menuOpen ? "slider" : "none"}`}>
        <div className="slider2">
        <button className="hamburgerBtn2" onClick={toggleMenu}>
          <i id="hamburgerIcon2" className="fa-solid fa-xmark"></i>
        </button>
        <input
          className="searchBox2"
          placeholder="search on shopyfy"
          type="search"
        />
        {/* <div className="flex"> */}
        <NavLink className="links l2" to="/product">
          <i className="fa-solid fa-bag-shopping fa-xl"></i> 
        </NavLink>
        <NavLink className="links l2" to="/cart">
          <i className="fa-solid fa-cart-shopping fa-xl"></i><sup>{cart.length}</sup>
        </NavLink>
        <NavLink className="links l2" to="/wishlist">
          <i className="fa-solid fa-heart fa-xl"></i>
          <sup>{wishlist.length}</sup>
        </NavLink>
        <NavLink className="links l2" to="/login">
          <i className="fa-solid fa-user fa-xl"></i>
        </NavLink>
        </div>
      </div>
      
    </>
  );
}
