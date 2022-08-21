import "./navbar.scss";
import { Link } from "react-router-dom";
import { useGetter } from "store"

import UserMenu from "components/userMenu/UserMenu"

const Navbar = () => {
  const { setCartOpen } = useGetter();

  return (
    <nav>
      <div className="logo">
        <h4 className="title">Ecommerce</h4>
      </div>
      <div className="links">
        <Link to="/homepage">Home</Link>
        <Link to="/products"> Products </Link>
        <UserMenu/>
        <img alt='shopping cart' src='https://img.icons8.com/ios/344/shopping-cart.png' onClick={() => setCartOpen(true)}></img>
      </div>
    </nav>
  );
};

export default Navbar;
