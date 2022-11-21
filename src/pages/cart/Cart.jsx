import React from "react";
import Header from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.css";
import Footer from "../../components/footer/Footer";
import CartProduct from "../../components/cartProduct.jsx/CartProduct";
import { clearCart } from "../../redux/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };

  const subtotal = products.reduce((a, b) => {
    return a + b.count * b.price;
  }, 0);
  const taxe = Math.round(subtotal * 0.1);
  const total = subtotal + taxe;

  return (
    <>
      <Header />
      <div className="store__cart section">
        {products.length === 0 ? (
          <div className="empty__cart">
            <h1>Your cart is empty</h1>
            <Link to="/products" className="button cartBtn">
              Fill it
            </Link>
          </div>
        ) : (
          <div className="cart__container container">
            <div className="cartLeft">
              {products.map((product) => {
                return <CartProduct product={product} key={product.id} />;
              })}
            </div>
            <div className="totals">
              <p className="cart__btns">
                <Link to="/products" className="button">
                  Continue shopping
                </Link>
                <button className="button" onClick={handleClear}>
                  Clear Shopping Cart
                </button>
              </p>
              <div className="cart__sum">
                <p>
                  <span>Subtotal :</span>
                  <span>${subtotal}</span>
                </p>
                <p>
                  <span>Taxe :</span>
                  <span>${taxe}</span>
                </p>
                <hr />
                <p className="total__order">
                  <span>Total Order :</span>
                  <span>${total}</span>
                </p>
              </div>
              
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
