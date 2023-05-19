import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkoutContainer">
      <p>Este es el CheckOut Importado</p>
      <div className="buttonCart">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/cart">
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
