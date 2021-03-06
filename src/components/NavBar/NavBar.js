import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { UserContext } from "../../context/UserContext/UserContext";
import CartWidget from "../CartWidget/CartWidget";
import CartWidgetFull from "../CartWidgetFull/CartWidgetFull";
import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  const [articulos] = useContext(CartContext);
  const [logged] = useContext(UserContext);
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <li className="menuProductos">
          PRODUCTOS
          <ul className="subMenu">
            <Link to="/productos">
              <li>VER CATEGORIAS</li>
            </Link>
            <Link
              to={{
                pathname: "/productos/vajilla",
                state: { categoria: "vajilla" },
              }}
            >
              {" "}
              <li>VAJILLA</li>
            </Link>
            <Link
              to={{
                pathname: "/productos/teycafe",
                state: { categoria: "teycafe" },
              }}
            >
              {" "}
              <li>TE Y CAFE</li>{" "}
            </Link>
            <Link
              to={{
                pathname: "/productos/manteleria",
                state: { categoria: "manteleria" },
              }}
            >
              <li>MANTELERIA</li>{" "}
            </Link>{" "}
          </ul>
        </li>

        <Link to="/Contacto">
          <li>CONTACTO</li>
        </Link>
        {logged ? (
          <Link to="/orders">
            <li>COMPRAS</li>
          </Link>
        ) : null}
        <Link to="/cart">
          <li>
            {" "}
            {articulos.length > 0 ? <CartWidgetFull /> : <CartWidget />}{" "}
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
