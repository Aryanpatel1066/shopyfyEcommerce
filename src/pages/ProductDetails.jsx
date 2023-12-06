import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductCard } from "../component/ProductCard";
import { ProductDB } from "../Data/ProductDB";
import "../pages/ProductDetails.css";
export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await ProductDB("https://example.com/api/menu");
        const product = res.data.menu.find(
          (p) => p.id === parseInt(productId, 10)
        );
        setProduct(product);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProduct();
  }, [productId]);

  return (
    <>
      {/* <div className="test"></div> */}
      <div className="mainProductDetailsContainer">
        {/* <h1>ProductList page</h1> */}
        <div id="box">
          {product ? (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              reting={product.reting}
              is_off={product.is_off}
              size={product.size}
              cancel_price={product.cancel_price}
              category={product.category}
              description={product.description}
            />
          ) : (
            <div className="loader"></div>
 )}{" "}
        </div>
        <Link className="links all" to="/product">
          view all items...
        </Link>
       
      </div>
    </>
  );
}
