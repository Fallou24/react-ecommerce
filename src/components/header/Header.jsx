import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import "./header.css";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const products = useSelector(state=>state.cart)
  return (
    <div className="header">
      <div className="headerContainer container">
        <Link to="/" className="headerLogoWrapper">
          <img
            className="headerLogo"
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
            alt=""
          />
        </Link>

        <div className={showMenu ? "nav__menu visible" : "nav__menu"}>
          <div className="nav__menu-top">
            <p>
              <img
                className="headerLogo"
                src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
                alt=""
              />
            </p>
            <span className="nav__close" onClick={() => setShowMenu(false)}>
              <i className="ri-close-line"></i>
            </span>
          </div>
          <ul className="nav__list_center">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => setShowMenu(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/about"
                className="nav__link"
                onClick={() => setShowMenu(false)}
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/products"
                className="nav__link"
                onClick={() => setShowMenu(false)}
              >
                Products
              </Link>
            </li>
          </ul>
          <div className="nav__list_right">
            <Link
              to="/cart"
              className="cart"
              onClick={() => setShowMenu(false)}
            >
              <span>Cart</span>
              <i className="ri-shopping-cart-2-fill"></i>
              <span className="totalOrder">{products.length} </span>
            </Link>
            
          </div>
        </div>
        <p className="nav__toggle" onClick={() => setShowMenu(true)}>
          <i className="ri-menu-fill"></i>
        </p>
      </div>
    </div>
  );
};

export default Header;
