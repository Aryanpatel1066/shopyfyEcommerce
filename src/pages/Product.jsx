 
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../main";
import "../pages/Product.css";
import { ProductCard } from "../component/ProductCard";
import { ProductDB } from "../Data/ProductDB";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Product({searchQuery}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortOrder, setSortOrder] = useState("highToLow"); // Default sort order
  const [selectedCategories,setSelectedCategories]=useState([]);
  const { addToCart } = useContext(CartContext);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
   };
  const handleData = async () => {
    setLoading(true);
    try {
      const res = await ProductDB("https://example.com/api/menu");
      const { data, status } = res;
      if (status === 200) {
        setData(data.menu);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleData();
  }, [location.search]);
// hear apply differente different filter logic
  const filterAndSortProducts = () => {
    let filteredData = data;
    

    if (selectedCategories.length > 0) {
      filteredData = filteredData.filter((product) =>
        selectedCategories.includes(product.category)
      );
    } else if (selectedCategory && selectedCategory !== "all") {
      filteredData = filteredData.filter(
        (product) => product.category === selectedCategory
      );
    }
  
    // Filter based on selected rating
    if (selectedRating) {
      filteredData = filteredData.filter(
        (product) => product.reting >= selectedRating
      );
    }
  
  

    // Sorting logic based on price
    return filteredData.sort((a, b) => {
      if (sortOrder === "highToLow") {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    });
  };

  const handleCategoryClick = (category) => {
    // setSelectedCategory(category);
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));

  };
  
  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };
  const handleCategoryCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((selectedCategory) => selectedCategory !== category)
      );
    } else {
      // If not selected, add it to the list
      setSelectedCategories((prevSelected) => [...prevSelected, category]);
    }
  };
  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedRating(null);
    setSortOrder("highToLow");
    setSelectedCategories([]);
  };

  return (
    <>
      <main className="main2">
      <div className="categorylist">
        {/* Update onClick handlers to use handleCategoryClick */}
        <div onClick={() => handleCategoryClick("men")}>men</div>
        <div onClick={() => handleCategoryClick("women")}>women</div>
        <div onClick={() => handleCategoryClick("kids")}>kids</div>
        <div onClick={() => handleCategoryClick("all")}>all</div>
        <button onClick={toggleMenu}className="displayNot">
        <i className="fa-solid fa-bars fa-lg"></i>
        </button>
      </div>
        <div className="fullContainer">
          <div  className={`flterbar ${menuOpen ? 'open' : 'not'}`}>
            <div className="filterHeadingContainer">
              <h3>Filters</h3>
              <NavLink onClick={handleClearFilters}>clear</NavLink>
            </div>
            <h4 className="filterHeading">Sort By Price:</h4>
            <div>
              <div className="sortOptions">
                <label className="sortLabel">
                   <input
                    type="radio"
                    value="highToLow"
                    checked={sortOrder === "highToLow"}
                    onChange={() => handleSortChange("highToLow")}
                  />
                   High to Low
                </label><br />
                <label className="sortLabel">
                  <input
                    type="radio"
                    value="lowToHigh"
                    checked={sortOrder === "lowToHigh"}
                    onChange={() => handleSortChange("lowToHigh")}
                  />
                  Low to High
                </label>
              </div>
            </div>
            <div className="sortOpitons">
              <h4 className="filterHeading">Sort by Rating</h4>
              <label className="ratinglabel">
                <input
                  type="radio"
                  onChange={() => handleRatingChange(4)}
                  checked={selectedRating === 4}
                />
                4 <i className="fa-solid fa-star" id="reting"  ></i> and above
              </label><br />

              <label className="ratinglabel">
                <input
                  type="radio"
                  onChange={() => handleRatingChange(3)}
                  checked={selectedRating === 3}
                />
                3 <i className="fa-solid fa-star" id="reting"></i> and above
              </label> <br />

              <label className="ratinglabel">
                <input
                  type="radio"
                  onChange={() => handleRatingChange(2)}
                  checked={selectedRating === 2}
                />
                2 <i className="fa-solid fa-star" id="reting"></i> and above
              </label><br />

              <label className="ratinglabel">
                <input
                  type="radio"
                  onChange={() => handleRatingChange(1)}
                  checked={selectedRating === 1}
                />
                1 <i className="fa-solid fa-star" id="reting"></i> and above
              </label><br />
            </div>
            <h4 className="filterHeading">Sort by Rating</h4>
             <label className="categoryLabel">
              <input type="checkbox" value="men"  checked={selectedCategories.includes("men")}
            onChange={() => handleCategoryCheckboxChange("men")} ></input>Men
             </label><br />

              <label className="categoryLabel">
              <input type="checkbox"value="women"  checked={selectedCategories.includes("women")}
            onChange={() => handleCategoryCheckboxChange("women")}  ></input>women
              </label><br />

              <label className="categoryLabel">            
              <input type="checkbox" value="kids"  checked={selectedCategories.includes("kids")}
            onChange={() => handleCategoryCheckboxChange("kids")} ></input>kids
              </label><br />

          </div>
          {loading &&  <div><div className="loade"></div></div>}
          <div className="imcontainer">
            {filterAndSortProducts().map((product) => (
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
                noDetail
              />
            ))}
          </div>
        </div>
        <h1>{searchQuery}</h1>
      </main>
    </>
  );
}
