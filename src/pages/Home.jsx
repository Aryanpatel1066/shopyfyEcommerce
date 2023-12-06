import headerimage from "../assets/headerimage.jpg";
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.jpg";
import category3 from "../assets/category3.jpg";
import summerImg from "../assets/summerImg.jpg";

import Footer from "../component/Footer";
import "../pages/Home.css";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <header>
        <NavLink to="/product">
        <img className="headingImg" src={headerimage} />
        </NavLink>
      </header>
      <main>
        {/* category collection card  */}
         <div className="category">
          <NavLink  className="card" to="/product">
          <div className="categoryCard">
            <img className="categoryImg" src={category1} />
            <div className="categoryDescription">
              <div className="categoryHeader">NEW ARRIVAL</div>
              <div className="categoryCollecton">MAN Collection</div>
              <div className="categoryCollectionDescription">
                Check out our best man collection
              </div>
            </div>
          </div>
          </NavLink>
          <NavLink  className="card"to="/product">
           <div className="categoryCard">
            <img className="categoryImg" src={category2} />
            <div className="categoryDescription">
              <div className="categoryHeader">NEW ARRIVAL</div>
              <div className="categoryCollecton">WOMAN Collection</div>
              <div className="categoryCollectionDescription">
                Check out our best woman collection
              </div>
            </div>
          </div>
          </NavLink>
          <NavLink className="card" to="/product">
          <div className="categoryCard">
            <img className="categoryImg" src={category3} />

            <div className="categoryDescription">
              <div className="categoryHeader">NEW ARRIVAL</div>
              <div className="categoryCollecton">KIDS Collection</div>
              <div className="categoryCollectionDescription">
                Check out our best Kids collection
              </div>
            </div>
          </div>
          </NavLink>
        </div>

        {/* ------------------------- summer sale header-------------------------------------- */}
         <div className="summerSale">
          <div className="salesContent">
            <p className="summerSaleHeadingBlink">The Summer Sale</p>
            <p className="summerSaleHeadingBlink">Up to 30% off</p>
          <NavLink to="/product">  <button className="summerSaleButtone">Shop Now</button></NavLink>
          </div>
        </div>
         {/* create our services */}
        <div className="shippingArea">
            <div className="shippingAreaIconBox">
                <i className="fa-solid fa-rotate-right fa-2xl"></i>
                <div className="iconDescription">EASY RETURN</div>
            </div>

            <div className="shippingAreaIconBox">
                <i className="fa-solid fa-tag fa-2xl"></i>
                <div className="iconDescription">TOP BRANDS</div>
          </div>
          <div className="shippingAreaIconBox">
                <i className="fa-solid fa-cloud-arrow-up fa-2xl"></i>
                <div className="iconDescription">100% ORIGINAL PRODUCTS </div>
          </div>
          <div className="shippingAreaIconBox">
          <i className="fa-solid fa-truck-fast fa-2xl"></i>

                <div className="iconDescription">FREE SHIPPING</div>
          </div>
          <div className="shippingAreaIconBox">
                <i className="fa-solid fa-hand-holding-heart fa-2xl"></i>
                <div className="iconDescription">CUSTOMER CARE</div>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
