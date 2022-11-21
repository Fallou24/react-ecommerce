import React from "react";
import { useState } from "react";
import products from "../../assets/data/products";
import FilterProduct from "../../components/filterProduct/FilterProduct";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Product from "../../components/product/Product";
import "./productList.css";

const ProductList = () => {
  const [productList, setProductList] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [rangeValue,setRangeValue] = useState(1000)
  const [selectedValue, setSelectedValue] = useState("lowest_price");
  const filterProduct = productList
    .filter((p) => {
      if (searchTerm === "") {
        return p;
      } else {
        return p.productName.toLowerCase().includes(searchTerm.toLowerCase());
      }
    })
    .sort((a, b) => {
      if (selectedValue === "lowest_price") {
        return a.price - b.price;
      } else if (selectedValue === "higgest_price") {
        return b.price - a.price;
      } else if (selectedValue === "NameA-Z") {
        let x = a.productName.toLowerCase();
        let y = b.productName.toLowerCase();
        return x == y ? 0 : x > y ? 1 : -1;
      } else if (selectedValue === "NameZ-A") {
        let x = a.productName.toLowerCase();
        let y = b.productName.toLowerCase();
        return x == y ? 0 : x > y ? -1 : 1;
      } else {
      }
    }).filter(p=>p.price<=rangeValue);

  return (
    <>
      <Header />
      <div className="products section">
        <div className="products__container container">
          <FilterProduct
            setProductList={setProductList}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            rangeValue={rangeValue}
            setRangeValue={setRangeValue}
          />
          <div className="product__list">
            <div className="sort__container">
              <span>{filterProduct.length} products found</span>
              <span className="line"></span>
              <form>
                <label htmlFor="sort">Sort By</label>
                <select
                  id="sort"
                  onChange={(e) => setSelectedValue(e.target.value)}
                >
                  <option value="lowest_price">Price (Lowest)</option>
                  <option value="higgest_price">Price (Higgest)</option>
                  <option value="NameA-Z">Name (A-Z)</option>
                  <option value="NameZ-A">Name (Z-A)</option>
                </select>
              </form>
            </div>
            {filterProduct.length === 0 ? (
              <h2>Sorry, no products matched your search.</h2>
            ) : (
              <div className="productList__container grid">
                {filterProduct.map((product) => {
                  return <Product product={product} key={product.id} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
