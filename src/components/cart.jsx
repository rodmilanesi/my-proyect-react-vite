import { Link } from "react-router-dom";
import { Context } from "../context/cartContext";
import { useContext } from "react";
import ShoppingCart from "./shoppingCart";
import SummaryCart from "./SummaryCart";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { productsAdded, spanItem, deleteCart } = useContext(Context);

  return (
    <div className="cartContainer">
      <div className="cartSummary">
        <div className="cartModal">
          <div className="shoppingCart">
            <div className="headerShoppingCart">
              <h2>Carrito de Compras</h2>
              <h4 className="remindInfo">
                <span>{spanItem}</span> Items
              </h4>
            </div>
            <div className="bodyShoppingCart">
              {productsAdded.map((product) => (
                <ShoppingCart
                  key={product.id}
                  title={product.title}
                  img={product.imageId}
                  price={product.price}
                  quantity={product.quantity}
                  id={product.id}
                />
              ))}
              <hr />
              <div className="dltButtonCart">
                <Button variant="primary" onClick={deleteCart}>
                  Vaciar Carrito
                </Button>
              </div>
            </div>
          </div>
          <SummaryCart />
        </div>
        <div className="buttonCart">
          <Link to="/">
            <Button variant="primary">Seguir Comprando</Button>
          </Link>
          <Link to="/checkout">
            <Button variant="success">Ir a Pagar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
