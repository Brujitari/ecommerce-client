import "./navbar.scss";
import { Link } from "react-router-dom";
import { useGetter } from "store"

const Navbar = () => {
  const { setCartOpen } = useGetter();
  return (
    <nav>
      <div className="logo">
        <h4 className="title">Ecommerce</h4>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/product-page"> Product </Link>
        <p onClick={() => setCartOpen(true)}>Cart</p>
        <p>Login</p>
      </div>
    </nav>
  );
};

export default Navbar;
