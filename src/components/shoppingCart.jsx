import { useState } from "react";
import { formatPrice } from "../lib/utils";
import { LinkContainer } from "react-router-bootstrap";

const ShoppingCart = ({ id, title, price, img, quantity }) => {
  const [prodQuantity, setProdQuantity] = useState(quantity);

  const add = () => {
    if (prodQuantity >= 1) {
      setProdQuantity(prodQuantity + 1);
    }
  };

  const subtract = () => {
    if (prodQuantity > 1) {
      setProdQuantity(prodQuantity - 1);
    }
  };

  return (
    <div className="shoppingCards">
      <LinkContainer to={`/item/${id}`}>
        <img src={img} width={160} />
      </LinkContainer>
      <div>
        <h4 style={{ width: 200 }}>{title}</h4>
        <p>{formatPrice(price)}</p>
      </div>
      <div>
        <button className="buttonModal" onClick={subtract}>
          -
        </button>
        <input type="text" value={prodQuantity} />

        <button className="buttonModal" onClick={add}>
          +
        </button>
      </div>
      <h3>{formatPrice(price * prodQuantity)}</h3>
      <span>x</span>
    </div>
  );
};

export default ShoppingCart;
