import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { productName, imgUrl, price, category,id } = product;
  return (
    <article className="product">
      <div className="item__img">
        <img src={imgUrl} alt="" className="productImg" />
        <p className="search__container">
          <Link to={"/product/" + id}>
            <i className="ri-search-line"></i>
          </Link>
        </p>
      </div>
      <p className="product_detail">
        <span className="productName">{productName}</span>
        <span className="product__category">{category}</span>
        <span className="product__price">${price}</span>
      </p>
    </article>
  );
};

export default Product;
