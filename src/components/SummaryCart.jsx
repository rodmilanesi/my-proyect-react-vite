import { Context } from "../context/cartContext";
import { useContext } from "react";
import { formatPrice } from "../lib/utils";

const SummaryCart = () => {
  const { totalCart, spanItem } = useContext(Context);

  return (
    <div className="summary">
      <div>
        <h2>Resumen de Compra</h2>
      </div>
      <div>
        <h3 style={{ color: "grey" }}>
          Items <span>{spanItem}</span>
        </h3>
      </div>
      <hr style={{ width: "70%", margin: "auto" }} />
      <h2>
        Total a Pagar <span>{formatPrice(totalCart)}</span>
      </h2>
    </div>
  );
};

export default SummaryCart;
