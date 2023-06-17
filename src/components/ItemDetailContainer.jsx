import { useParams } from "react-router-dom";
import { formatPrice } from "../lib/utils";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { Context } from "../context/cartContext";
import { useContext, useState, useEffect } from "react";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import spinner from "../assets/img/spinner.svg";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { productsAdded, addItems } = useContext(Context);
  const [inputValue, setInputValue] = useState(1);
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const dataBase = getFirestore();
    const itemRef = doc(dataBase, "items", itemId);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
        setLoader(false);
      })
      .catch((error) => console.log({ error }));
  }, []);

  if (loader) {
    return (
      <div className="loaderPage">
        <img src={spinner} alt="" />
      </div>
    );
  }

  const add = () => {
    if (inputValue >= 1) {
      setInputValue(inputValue + 1);
    }
  };

  const subtract = () => {
    if (inputValue > 1) {
      setInputValue(inputValue - 1);
    }
  };

  const addProductToCart = (prod, quantity) => {
    addItems({ ...prod, quantity });
  };

  function handleBuyProduct() {
    const productExist = productsAdded.find((product) => product.id === itemId);

    if (!productExist) {
      addProductToCart(product, inputValue);
    }
  }

  return (
    <div className="containerItem">
      <section className="features">
        <div className="feature">
          <img src={product.imageId} alt={product.title} />
          <h2 className="nameProduct">{product.title}</h2>
          <p className="descriptionProduct">{product.description}</p>
          <div className="callToAction">
            <span className="priceProduct">{formatPrice(product.price)}</span>
            <div>
              <button className="buttonModal" onClick={subtract}>
                -
              </button>
              <input
                type="number"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(parseInt(event.target.value));
                }}
              />

              <button className="buttonModal" onClick={add}>
                +
              </button>
            </div>
            <div className="pushCartButton">
              <Button
                variant="primary"
                onClick={() => {
                  addProductToCart(product, inputValue);
                }}
              >
                Agregar
              </Button>
              <LinkContainer to="/cart">
                <Button variant="success" onClick={handleBuyProduct}>
                  Comprar
                </Button>
              </LinkContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetailContainer;
