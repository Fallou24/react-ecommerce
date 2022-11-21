import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import ProductDetails from './pages/productDetails/ProductDetails';
import ProductList from './pages/products/ProductList';
import "./style.css"
const App = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/about"  element={<About />} />
      <Route path="/products"  element={<ProductList/>} />
      <Route path="/cart"  element={<Cart/>} />
      <Route path="/product/:id"  element={<ProductDetails/>} />
      <Route path="*"  element={<NotFound/>} />
    </Routes>
  );
};

export default App;