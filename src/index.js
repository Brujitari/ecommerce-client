import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useUser, useProduct, useCreateOrder, useCategories } from 'hooks';
import Context, { useGetter } from "store";

import App from "./App";
import Register from "./pages/authPage/Register";
import Login from "./pages/authPage/Login";
import HomePage from './pages/HomePage';
import ProductPage from "./pages/ProductPage";
import { ProductDetails } from "components/productDetails/ProductDetails";
import RouteNotFound from "components/routeNotFound";

const Guard = ({ component: Component }) => {
  const { user } = useGetter();
  return user ? Component : <Navigate to="/login" replace />;
};


const Container = () => {
  const [user, setUser] = useUser();
  const [categories, setCategories] = useCategories();
  const [products, setProducts] = useProduct();
  const [isCartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const createOrder = useCreateOrder();
  



  return (
    <Context.Provider
      value={{ user, setUser, isCartOpen, setCartOpen, cart, setCart, products, setProducts, createOrder, categories, setCategories }}
    >
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<App />} >
            <Route path="products" element={<ProductPage />} />
            <Route path='homepage' element={<HomePage />} />
            {/* <Route path=':product' element={<ProductDetails />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
