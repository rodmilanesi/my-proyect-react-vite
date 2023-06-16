import React from "react";
import { Context } from "../context/cartContext";
import { useContext } from "react";
import { formatPrice } from "../lib/utils";

const SummaryCart = () => {
  const { productsAdded } = useContext(Context);
  return (
    <div>
      <div className="headerSummary">
        <h3>
          Items <span>{productsAdded.length}</span>
        </h3>
      </div>
      <div>
        <h3>Tipo de Envío</h3>
        <select name="" id="">
          <option value="1">Standard-Delivery - {formatPrice(3500)}</option>
          <option value="2">Fasted-Delivery - {formatPrice(8500)}</option>
          <option value="3">Retiro en Tienda - {formatPrice(0)}</option>
        </select>
      </div>
      <div>
        <h3>Ingresa tu Código de Descuento</h3>
        <input type="text" value="Ingresa Aquí el Código" />
      </div>
      <hr />
      <h2>
        Total a Pagar <span>{formatPrice(100)}</span>
      </h2>
    </div>
  );
};

export default SummaryCart;
