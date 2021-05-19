import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { CartContext } from "../../context/CartContext/CartContext";
import SignIn from "../../components/SignIn/SignIn";
import CreateAccount from "../../components/CreateAccount/CreateAccount";
import { Button, LinkButton } from "../../components/Buttons/Buttons";
import "./LogIn.css";

const LogIn = () => {
  const [click, setClick] = useState(false);
  const [logged, user] = useContext(UserContext);
  const [articulos] = useContext(CartContext);

  return (
    <div className="logInForm">
      {" "}
      {!logged ? (
        <div>
          {!click ? (
            <div className="formulario">
              <h3 className="tituloLogIn">Ingresa para comprar</h3>
              <SignIn />
              <h4>¿Todavía no tenes cuenta? </h4>
              <Button
                click={() => {
                  setClick(true);
                }}
                classes="ui button teal compact"
                text="Crear Cuenta"
              />
            </div>
          ) : (
            <div className="formulario">
              <h3 className="tituloLogIn">Crea una cuenta</h3>
              <CreateAccount />
              <Button
                click={() => {
                  setClick(false);
                }}
                classes="ui button classic compact"
                text="Cancelar"
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          {" "}
          <h4 className="mensajeBienvenida">
            ¡Bienvenidx, {user.displayName}!
          </h4>
          {articulos.length >= 1 ? (
            <LinkButton
              linkTo="/checkout"
              text="Continuar Compra"
              classes="ui olive button compact"
            />
          ) : null}{" "}
        </div>
      )}
    </div>
  );
};

export default LogIn;
