import { useContext } from "react";
import { formatPrice } from "../lib/utils";
import { LinkContainer } from "react-router-bootstrap";
import { Context } from "../context/cartContext";

const ShoppingCart = ({ id, title, price, img, quantity }) => {
  const { deleteProduct, changeQuantityByProduct } = useContext(Context);

  const add = () => {
    if (quantity >= 1) {
      changeQuantityByProduct(id, quantity + 1);
    }
  };

  const subtract = () => {
    if (quantity > 1) {
      changeQuantityByProduct(id, quantity - 1);
    }
  };

  const dlt = () => {
    deleteProduct(id);
  };

  return (
    <div className="shoppingCards">
      <LinkContainer to={`/item/${id}`}>
        <img src={img} width={130} />
      </LinkContainer>
      <div>
        <h4 style={{ width: 200 }}>{title}</h4>
        <p>{formatPrice(price)}</p>
      </div>
      <div className="quantityItemCart">
        <button className="buttonModal" onClick={subtract}>
          -
        </button>
        <span>{quantity}</span>
        <button className="buttonModal" onClick={add}>
          +
        </button>
      </div>
      <h3>{formatPrice(price * quantity)}</h3>
      <h2 style={{ cursor: "pointer" }} onClick={dlt}>
        x
      </h2>
    </div>
  );
};

export default ShoppingCart;
