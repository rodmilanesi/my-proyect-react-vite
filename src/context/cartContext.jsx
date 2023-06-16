import { createContext, useState } from "react";

export const Context = createContext([]);

export const CustomProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);

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

  const changeQuantityByProduct = (id, quantity) => {
    const productOnCart = structuredClone(productsAdded);
    const productOnCartIndex = productOnCart.findIndex(
      (prod) => prod.id === id
    );
    productOnCart[productOnCartIndex].quantity = quantity;
    setProductsAdded(productOnCart);
  };

  const spanItem = productsAdded.reduce((acc, currrentItem) => {
    return acc + currrentItem.quantity;
  }, 0);

  const totalCart = productsAdded.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const deleteCart = () => {
    setProductsAdded([]);
  };

  const deleteProduct = (id) => {
    const updateProduct = productsAdded.filter((product) => product.id !== id);
    setProductsAdded(updateProduct);
  };

  const value = {
    productsAdded,
    addItems,
    spanItem,
    deleteProduct,
    deleteCart,
    totalCart,
    changeQuantityByProduct,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
