import { useParams } from "react-router-dom";
import { productos } from "./productos";
import Item from "./Item";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  let items = [];
  if (categoryName) {
    items = productos.filter(
      (producto) => producto.category === categoryName.toLowerCase()
    );
  } else {
    items = productos;
  }

  return (
    <>
      <div className="cardsContainer">
        {items.map((product) => (
          <Item
            key={product.id}
            name={product.nombre}
            price={product.precio}
            img={product.img}
            id={product.id}
          />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
