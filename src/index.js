import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import { useUser, useProduct, useCreateOrder } from 'hooks';
import ProductPage from "./pages/ProductPage";
import App from "./App";
import Context, { useGetter } from "store";
import Login from "./pages/authPage/Login";
import Register from "./pages/authPage/Register";

const Guard = ({ component: Component }) => {
  const { user } = useGetter();
  return user ? Component : <Navigate to="/login" replace />;
};

const Container = () => {
  const [user, setUser] = useUser();
  const [products, setProducts] = useProduct();
  const [isCartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const createOrder = useCreateOrder();


  return (
    <Context.Provider
      value={{ user, setUser, isCartOpen, setCartOpen, cart, setCart, products, setProducts, createOrder }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="product-page" element={<ProductPage />} />
            <Route path='home-page' element={<HomePage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
