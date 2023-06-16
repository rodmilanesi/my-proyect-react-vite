import { Link } from "react-router-dom";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useContext } from "react";
import { Context } from "../context/cartContext";

const Checkout = () => {
  const { productsAdded, deleteCart } = useContext(Context);
  const dataBase = getFirestore();

  function updateOrder(productId, finalStock) {
    const itemRef = doc(dataBase, "items", productId);
    updateDoc(itemRef, { stock: finalStock }).catch((error) =>
      console.lof({ error })
    );
  }

  function sendOrder({ name, email, phone }) {
    const collectionRef = collection(dataBase, "orders");
    const total = productsAdded.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );

    const order = {
      buyer: { name: name, email: email, phone: phone },
      item: productsAdded,
      total,
    };

    addDoc(collectionRef, order)
      .then(() => {
        productsAdded.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateOrder(product.id, finalStock);
        });

        deleteCart();
      })
      .catch((error) => console.log({ error }));
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const buyerOrder = {
      name: event.target.buyerName.value,
      email: event.target.buyerMail.value,
      phone: event.target.buyerPhone.value,
    };
    sendOrder(buyerOrder);
    console.log(event.target.buyerName.value);
  };

  return (
    <div className="checkoutContainer">
      <div>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="buyerName">Nombre Completo</label>
          <input
            type="text"
            placeholder="Nombre Completo"
            id="buyerName"
            name="buyerName"
          />
          <label htmlFor="buyerMail">Correo Electrónico</label>
          <input
            type="email"
            placeholder="tumail@ejemplo.com"
            required
            id="buyerMail"
            name="buyerMail"
          />
          <label htmlFor="buyerPhone">Teléfono de Contacto</label>
          <input
            type="tel"
            placeholder="+56 987654321"
            id="buyerPhone"
            name="buyerPhone"
          />

          <button type="submit">Pagar</button>
        </form>
      </div>
      <div className="buttonCart">
        <Link to="/">
          <button>Seguir Comprando</button>
        </Link>
        <Link to="/cart">
          <button>Volver al carrito</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
