import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cartContainer">
      <p>Este es el Carrito importado</p>
      <div className="buttonCart">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/checkout">
          <button>Pagar</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
