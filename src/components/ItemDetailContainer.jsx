import { productos } from "./productos";
import { useParams } from "react-router-dom";
import { formatPrice } from "../lib/utils";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const product = productos.find(
    (product) => product.id === itemId.toLowerCase()
  );

  return (
    <div className="containerItem">
      <section className="features">
        <div className="feature">
          <img src={product.img} alt={product.nombre} />
          <h2 className="nameProduct">{product.nombre}</h2>
          <p className="descriptionProduct">{product.description}</p>
          <span className="priceProduct">{formatPrice(product.precio)}</span>
        </div>
      </section>
    </div>
  );
};

export default ItemDetailContainer;
