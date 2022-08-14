import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom"
import { useGetter } from "store";
import { useEffect } from "react";

import Cart from "components/cart/Cart";

function App() {

  const { setProducts } = useGetter();
  const { setCategories } = useGetter();

  useEffect(() => {
    setProducts();
    setCategories();
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
