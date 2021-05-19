import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import React, { useState } from "react";
import "./Checkout.css";
import { db } from "../../firebase";
import { LinkButton } from "../../components/Buttons/Buttons";

const Checkout = () => {
  const [orderID, setOrderID] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const add = async (a) => {
    await db
      .collection("orders")
      .add(a)
      .then(({ id }) => {
        setOrderID(id);
      });
  };
  const processId =
    orderID !== "" ? (
      <div className="checkoutEnd">
        <h3>¡Gracias por tu compra!</h3>
        <h5>Tu código de orden es {orderID} </h5>
        <LinkButton linkTo="/orders" classes="ui button compact classic" text="Ver Compras" />

      </div>
    ) : (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Por favor aguarda, estamos procesando tu pedido</div>{" "}
      </div>
    );

  return (
    <div className="divCheckout segment">
      {isAdded ? processId : <CheckoutForm add={add} setIsAdded={setIsAdded} />}
    </div>
  );
};

export default Checkout;
