import { createContext, useState } from "react";

export const Context = createContext([]);

export const CustomProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [loading, setLoading] = useState(true);

  const addItems = (product) => {
    const productOnCart = structuredClone(productsAdded);
    const productOnCartIndex = productOnCart.findIndex(
      (prod) => prod.id === product.id
    );
    if (productOnCartIndex !== -1) {
      productOnCart[productOnCartIndex].quantity += product.quantity;
      setProductsAdded(productOnCart);
    } else {
      setProductsAdded((preState) => preState.concat(product));
    }
  };

  const spanItem = productsAdded.reduce((acc, currrentItem) => {
    return acc + currrentItem.quantity;
  }, 0);

  const value = { productsAdded, addItems, spanItem };

  const deleteCart = () => {
    setProductsAdded([]);
  };

  const loader = () => {
    if (loading) {
      return <span></span>;
    }
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
