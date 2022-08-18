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
        <Link to="/homepage">Home</Link>
        <Link to="/products"> Product </Link>
        <p onClick={() => setCartOpen(true)}>Cart</p>
        <Link to="/login"> Login </Link>
      </div>
    </nav>
  );
};

export default Navbar;
