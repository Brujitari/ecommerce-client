import "./navbar.scss";
import { Link } from "react-router-dom";
import { useGetter } from "store"

const Navbar = () => {
  const { setCartOpen } = useGetter();
  return (
    <nav >
      <div className="logo">
        <h4 className="title">Ecommerce</h4>
      </div>
      <div className="links">
        <Link to="/homepage">Home</Link>
        <Link to="/products"> Product </Link>
        <Link to="/login"> Login </Link>
        <img alt='shopping cart' src='https://img.icons8.com/pastel-glyph/452/shopping-cart--v2.png' onClick={() => setCartOpen(true)}></img>
      </div>
    </nav>
  );
};

export default Navbar;
