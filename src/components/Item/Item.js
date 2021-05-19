import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./Item.css";

function Item({ producto }) {
  const activeNoStock = producto.stock <= 0 ? "stockWarning" : "ocultar"
  return (
    <div className="itemLista">
      <div className="ui card">
        <div className="image">
          <img src={producto.image} alt="item" className="imagenItem"/>
          <p className={activeNoStock}> Sin stock</p>
        </div>
        <div className="content">
          <h4 className="tituloItem">{producto.title}</h4>
          <div className="meta">
            <span className="precioItem"> $ {producto.price}</span>
          </div>
          <button className="ui olive button compact">Ver Detalle</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
