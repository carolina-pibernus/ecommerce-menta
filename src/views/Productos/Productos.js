import React from "react";
import { Link } from "react-router-dom";
import "./Productos.css";

const Productos = () => {
  return (
    <div className="categorias">
      <Link to={{ pathname: "/productos/todo", state: { categoria: "todo" } }}>
        <div className="divCategoria">
          <img
            alt="imagen"
            src="https://images-na.ssl-images-amazon.com/images/I/71bQGbyXvQL._AC_SL1500_.jpg"
          ></img>
          <h3>VER TODO</h3>
        </div>
      </Link>
      <Link
        to={{ pathname: "/productos/teycafe", state: { categoria: "teycafe" } }}
      >
        <div className="divCategoria">
          <img
            alt="imagenTeCafe"
            src="https://images-na.ssl-images-amazon.com/images/I/71sDxT1pYNL._AC_SX569_.jpg"
          ></img>
          <h3>TE Y CAFE</h3>
        </div>
      </Link>
      <Link
        to={{ pathname: "/productos/vajilla", state: { categoria: "vajilla" } }}
      >
        <div className="divCategoria">
          <img
            alt="imagen vajlla"
            src="https://images-na.ssl-images-amazon.com/images/I/61ZLaYTQKpL._AC_SL1500_.jpg"
          ></img>
          <h3>VAJILLA</h3>
        </div>
      </Link>
      <Link
        to={{
          pathname: "/productos/manteleria",
          state: { categoria: "manteleria" },
        }}
      >
        <div className="divCategoria">
          <img
            alt="imagen manteleria"
            src="https://images-na.ssl-images-amazon.com/images/I/71IVRoczVFL._AC_SL1500_.jpg"
          ></img>
          <h3>MANTELERIA</h3>
        </div>
      </Link>
    </div>
  );
};

export default Productos;
