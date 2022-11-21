import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, modifyCount } from "../../redux/cartSlice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { imgUrl, productName, price, id } = product;

  const [count, setCount] = useState(product.count);
  const handleIncrease = () => {
    setCount((c) => c + 1);
    dispatch(modifyCount({ count: count + 1, id }));
  };
  const handleDecrease = () => {
    if (count === 1) {
      return;
    }

    setCount((c) => c - 1);
    dispatch(modifyCount({ count: count - 1, id }));
  };
  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };
  return (
    <article key={id} className="product__choosen">
      <p className="cart__img-cont">
        <img src={imgUrl} alt="" className="product__cart-img" />
      </p>

      <div className="cart__product-info">
        <div className="productNameWrapper">
          <p>{productName}</p>
          <p className="product__price">${price}</p>
        </div>
        <p className="product__controls">
          <span className="moin" onClick={handleDecrease}>
            -
          </span>
          <span>{count}</span>
          <span className="plus" onClick={handleIncrease}>
            +
          </span>
        </p>
        <p className="delete__product" onClick={handleDelete}>
          <i className="ri-delete-bin-7-line"></i>
        </p>
      </div>
    </article>
  );
};

export default CartProduct;
