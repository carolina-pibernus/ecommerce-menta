import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { UserContext } from "../../context/UserContext/UserContext";
import { Button, LinkButton } from "../../components/Buttons/Buttons";
import "semantic-ui-css/semantic.min.css";
import "./Cart.css";

const Cart = () => {
  const [articulos, setArticulos, cartTotal, cantidadItems] =
    useContext(CartContext);
  const [logged] = useContext(UserContext);

  return (
    <div className="cart">
      <h3>Tu Carrito</h3>

      {articulos.map((articulo) => {
        const subtotal = articulo.cantidad * articulo.producto.price;
        return (
          <div key={articulo.producto.id} className="itemCart">
            <h4 className="itemName">Producto: {articulo.producto.title}</h4>
            <ul className="itemDescription">
              <li>Precio por unidad: $ {articulo.producto.price}</li>
              <li>Cantidad: {articulo.cantidad}</li>
              <li>Subtotal: $ {subtotal}</li>
            </ul>
            <Button
              classes="botonRemove button ui classic compact"
              text="Eliminar Item"
              click={() => {
                const filtrarItems = articulos.filter((art) => {
                  return art !== articulo;
                });
                setArticulos(filtrarItems);
              }}
            />
          </div>
        );
      })}
      <div className="cartResumen">
        <h4>
          {articulos.length > 0 ? `Cantidad de Items: ${cantidadItems}` : null}
        </h4>
        <h4>
          {articulos.length === 0
            ? "Aún no sumaste productos"
            : `Total de compra: $ ${cartTotal}`}{" "}
        </h4>
        {articulos.length === 0 ? (
          <LinkButton
            linkTo="/productos"
            classes="ui button teal compact"
            text="Ir a Productos"
          />
        ) : (
          <div className="divButtons">
            <LinkButton
              linkTo={logged ? "checkout" : "login"}
              classes="ui button olive compact"
              text="Continuar Compra"
            />
            <Button
              classes="ui button classic  inverted compact"
              text="Vaciar Carrito"
              click={() => {
                setArticulos([]);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
