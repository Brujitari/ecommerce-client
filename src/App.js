import { Outlet } from "react-router-dom"
import { useGetter } from "store";
import { useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import Cart from "components/cart/Cart";
import Footer from "components/footer/Footer";

function App() {

  const { setProducts } = useGetter();
  const { setCategories } = useGetter();
  const { setUser } = useGetter();

  useEffect(() => {
    setProducts();
    setCategories();
    setUser();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Cart />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
