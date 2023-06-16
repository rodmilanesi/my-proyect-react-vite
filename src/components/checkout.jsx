import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/div.svg";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useContext, useEffect } from "react";
import { Context } from "../context/cartContext";
import { formatPrice } from "../lib/utils";
import Button from "react-bootstrap/Button";

const delivery = {
  standard: 3500,
  fasted: 8500,
  store: 0,
};

const Checkout = () => {
  const navigate = useNavigate();
  const { productsAdded, deleteCart } = useContext(Context);
  const dataBase = getFirestore();

  function updateOrder(productId, finalStock) {
    const itemRef = doc(dataBase, "items", productId);
    updateDoc(itemRef, { stock: finalStock }).catch((error) =>
      console.log({ error })
    );
  }

  function sendOrder({ name, email, phone, shipping }) {
    const collectionRef = collection(dataBase, "orders");
    const total = productsAdded.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );
    const totalOrder = total + delivery[shipping];

    console.log(totalOrder);

    const order = {
      buyer: { name: name, email: email, phone: phone },
      item: productsAdded,
      shipping,
      total: totalOrder,
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
      shipping: event.target.selectDelivery.value,
    };

    sendOrder(buyerOrder);
    navigate("/thankyoupage");
  };

  useEffect(() => {
    if (productsAdded.length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <div className="checkoutContainer">
      <div className="formCheckout">
        <form onSubmit={handleOnSubmit} className="form">
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

          <div className="shippingPay">
            <h3>Tipo de Envío</h3>
            <select name="selectDelivery" id="">
              <option value="standard">
                Standard-Delivery - {formatPrice(3500)}
              </option>
              <option value="fasted">
                Fasted-Delivery - {formatPrice(8500)}
              </option>
              <option value="store">Retiro en Tienda - {formatPrice(0)}</option>
            </select>
          </div>
          <div className="submitButton">
            <button type="submit">Pagar</button>
          </div>
        </form>
        <div>
          <img src={logo} alt="logo" width="400" />
        </div>
      </div>

      <div className="buttonCart">
        <Link to="/">
          <Button variant="primary">Seguir Comprando</Button>
        </Link>
        <Link to="/cart">
          <Button variant="primary">Volver al carrito</Button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
