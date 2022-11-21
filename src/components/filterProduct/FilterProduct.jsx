import React, { useEffect, useState } from "react";
import products from "../../assets/data/products";

const FilterProduct = ({ setProductList,setSearchTerm,searchTerm,rangeValue,setRangeValue}) => {
  const [categories, setCategories] = useState([]);
  const [currentCat,setCurrentCat] = useState("All")
  useEffect(() => {
    const set = new Set();
    products.forEach((p) => set.add(p.category));
    setCategories(["All", ...Array.from(set)]);
  }, []);

  const handleFilterByCat = (cat) => {
    setCurrentCat(cat)
    if (cat === "All") {
      setProductList(products);
    } else {
      setProductList(products.filter((p) => p.category === cat));
    }
  };
  const handleClear = () =>{
    setSearchTerm("")
    setCurrentCat("All")
    setProductList(products)
    setRangeValue(1000)
  }
  return (
    <div className="productsListFilter">
      <input
        type="text"
        className="searchProduct"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <h3 className="category__title">Category</h3>
      <p className="categories">
        {categories.map((cat, index) => {
          return (
            <span
              className={cat===currentCat ? "currentCat category" : "category"}
              key={index}
              onClick={() => handleFilterByCat(cat)}
            >
              {cat}
            </span>
          );
        })}
      </p>
      <h3 className="category__title">Price</h3>
      <p>${rangeValue}</p>
      <input type="range" min='0' max="1000" value={rangeValue} onChange={(e)=>{
        setRangeValue(e.target.value)
        
        }} />
      <br />
      <button className="button clear__filter" onClick={handleClear}>Clear filters</button>
    </div>
  );
};

export default FilterProduct;
