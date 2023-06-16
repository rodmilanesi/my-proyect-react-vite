import { useParams } from "react-router-dom";
import Item from "./Item";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import spinner from "../assets/img/spinner.svg";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  //FIRESTORE PARA COLECIONES
  useEffect(() => {
    const dataBase = getFirestore();
    const collectionRef = collection(dataBase, "items");

    getDocs(collectionRef)
      .then((snapshot) => {
        setProducts(() =>
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setLoader(false);
      })
      .catch((error) => console.log({ error }));
  }, []);

  if (loader) {
    return (
      <div className="loaderPage">
        <img src={spinner} alt="spinner" />
      </div>
    );
  }

  let items = [];
  if (categoryName) {
    items = products.filter(
      (producto) => producto.categoryId === categoryName.toLowerCase()
    );
  } else {
    items = products;
  }

  return (
    <>
      <div className="cardsContainer">
        {items.map((product) => (
          <Item
            key={product.id}
            name={product.title}
            price={product.price}
            img={product.imageId}
            id={product.id}
          />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
