import { Outlet } from "react-router-dom"
import { useGetter } from "store";
import { useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import Cart from "components/cart/Cart";
import Footer from "components/footer/Footer";

function App() {

  const { setProducts } = useGetter();
  const { setCategories } = useGetter();

  useEffect(() => {
    setProducts();
    setCategories();
  }, []);

  return (
    <div>
      <div className="App">
        <Navbar />
        <Cart />
        <Outlet />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}
export default App;
