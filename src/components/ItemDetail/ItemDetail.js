import React, { useState, useContext } from "react";
import Counter from "../Counter/Counter.js";
import "./ItemDetail.css";
import { Button, LinkButton } from "../Buttons/Buttons";
import { CartContext } from "../../context/CartContext/CartContext";

function ItemDetail({ producto }) {
  const [articulos, setArticulos] = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);
  const existeEnCarrito = articulos.some((articulo) => {
    return articulo.producto.id === producto.id;
  });
  const onAdd = !existeEnCarrito
    ? () => {
        setArticulos((prevArticulos) => [
          ...prevArticulos,
          { producto: producto, cantidad: cantidad },
        ]);
      }
    : null;

  return (
    <div className="itemDetail">
      <h3 className="itemNombre">{producto.title}</h3>
      <img src={producto.image} alt="imagen producto" className="fotoDetalle" />
      <div className="contenedorPropiedades">
        <p className="itemDescription"> {producto.description}</p>
        <h4> $ {producto.price} </h4>

        {existeEnCarrito ? (
          <div>
            <p className="itemAgregado">Item agregado al carrito</p>
            <LinkButton
              linkTo="/cart"
              classes="ui button teal"
              text="Finalizar Compra"
            />
          </div>
        ) : (
          <div>
            <Counter setear={setCantidad} producto={producto} />
            <Button
              click={onAdd}
              text="Agregar al Carrito"
              classes={`ui button olive compact ${
                cantidad >= 1 ? "active" : "disabled"
              }`}
            />
            {producto.stock <= 0 ? (
              <p className="stock">Sin stock disponible</p>
            ) : (
              <p className="stock"> Unidades disponibles: {producto.stock}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
