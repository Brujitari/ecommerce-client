import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage"
import { Outlet } from "react-router-dom"
import { useGetter } from "store";
import products from "product-data";
import { useEffect } from "react";

import ProductPage from "./pages/ProductPage";
import Cart from "components/cart/Cart";

function App() {

  const { setProducts, products } = useGetter();
  console.log(products)

  useEffect(() => {
    setProducts();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Cart />
      <Outlet />
    </div>
  );
}
export default App;
