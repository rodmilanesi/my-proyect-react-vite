import { Link } from "react-router-dom";
import { Context } from "../context/cartContext";
import { useContext } from "react";
import ShoppingCart from "./shoppingCart";
import SummaryCart from "./SummaryCart";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";

const Cart = () => {
  const { productsAdded, spanItem } = useContext(Context);
  const dataBase = getFirestore();

  function updateOrder(productId, finalStock) {
    const itemRef = doc(dataBase, "items", productId);
    updateDoc(itemRef, { stock: finalStock }).catch((error) =>
      console.lof({ error })
    );
  }

  function sendOrder() {
    const collectionRef = collection(dataBase, "orders");
    const total = productsAdded.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );

    const order = {
      buyer: { name: "Rodri", email: "rodri@gmail.com", phone: "+56987654321" },
      item: productsAdded,
      total,
    };

    addDoc(collectionRef, order)
      .then(() => {
        productsAdded.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateOrder(product.id, finalStock);
        });
      })
      .catch((error) => console.log({ error }));
  }

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
              <div>
                <button variant="success">Vaciar Carrito</button>
              </div>
            </div>
          </div>
          <div className="summary">
            <div>
              <h2>Resumen de Compra</h2>
            </div>
            <SummaryCart />
          </div>
        </div>
        <div className="buttonCart">
          <Link to="/">
            <button>Seguir Comprando</button>
          </Link>
          <Link to="/checkout">
            <button>Ir a Pagar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
