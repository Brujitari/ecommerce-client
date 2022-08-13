import { useGetter } from "store";
import "./cart.scss";

export default function Cart() {
  const { isCartOpen, setCartOpen, cart, createOrder } = useGetter();

  const quantities = cart.reduce(function (prev, cur) {
    prev[cur.name] = (prev[cur.name] || 0) + 1;
    return prev;
  }, {});

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  return (
    <div
      className="container"
      style={{
        transform: !isCartOpen && "translateX(450px)",
      }}
    >
      <p
        onClick={() => {
          setCartOpen(false);
        }}
      >
        Close
      </p>
      <div className="products">
        {getUniqueListBy(cart, "name").map((product) => (
          <div className="product">
            <img src={product.image} width="50" />
            <div>
              <p>{product.name}</p>
              <p>
                {product.price}€ x {quantities[product.name]}
              </p>
              <p>TOTAL: {product.price * quantities[product.name]}€</p>
            </div>
          </div>
        ))}
      </div>
      <button className="button" onClick={() => createOrder(getUniqueListBy(cart, "name"))}>Make Order</button>
    </div>
  );
}
