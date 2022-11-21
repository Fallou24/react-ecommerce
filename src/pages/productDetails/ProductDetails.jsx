import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../assets/data/products";
import Header from "../../components/header/Header";
import "./productDetail.css";
import {useDispatch} from "react-redux"
import { addProduct } from "../../redux/cartSlice";

const ProductDetails = () => {
  const [count,setCount] = useState(1)
  const { id } = useParams();
  const dispatch = useDispatch()
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(products.find((p) => p.id === id));
  }, [id]);

  const { productName, avgRating, imgUrl, price, description, category } =
    product;
  const startArray = [...Array(5).keys()].map((i) => i + 1);

  const handleAddProduct = () =>{
    dispatch(addProduct({...product,count}))
  }
  const handleIncrease = () =>{
    setCount(c=>c+1)
  }
  const handleDecrease = () =>{
    if (count===1) {
      return
    }
    setCount(c=>c-1)
  }

  return (
    <>
      <Header />
      <div className="product__details section">
        <div className="container">
          <Link to="/products" className="button backBtn">
            Back to products
          </Link>
          <div className="productDetailCont">
            <div className="productDetailImg">
              <img src={imgUrl} alt="" />
            </div>
            <div className="productDetailRight">
              <h2 className="product__detail-name">{productName}</h2>
              <p className="ratings">
                {startArray.map((i,index) => (
                  <span
                  key={index}
                    style={{ color: avgRating >= i ? "orange" : "lightgrey" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </span>
                ))}

                <span>({avgRating}) ratings</span>
              </p>
              <p className="price">
                <span className="product__detail_price">${price}</span>
                <span>Category: {category}</span>
              </p>
              <p className="description">{description}</p>
              <p className="product__number">
                <span className="moin" onClick={handleDecrease}>-</span>
                <span>{count}</span>
                <span className="plus" onClick={handleIncrease}>+</span>
              </p>
              <p>
                <Link to="/cart" className="button add" onClick={handleAddProduct}>Add to cart</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
