import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "./CreateAccount.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const CreateAccount = () => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        updateUser();
      })
      .catch(() => {
        setError(true);
      });
  };

  const updateUser = () => {
    var user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: values.name,
      })
      .then()
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="ui form" id="createAccountForm">
        <div className="required field">
          <label>Nombre y Apellido</label>
          <input
            placeholder="Nombre y Apellido"
            onChange={handleOnChange}
            name="name"
            type="text"
            required
          />
          <label>E-mail:</label>
          <input
            placeholder="E-mail"
            onChange={handleOnChange}
            name="email"
            type="email"
            required
          />
          <label>Contraseña: </label>
          <input
            placeholder="Password"
            onChange={handleOnChange}
            name="password"
            type="password"
            required
            minLength={8}
            maxLength={10}
          />
        </div>
        <div className="registrarme">
          <button className="ui teal button compact">Registrarme</button>
        </div>
      </form>

      {error ? (
        <p>Disculpa, se produjo un error inesperado, inténtalo nuevamente. </p>
      ) : null}
    </div>
  );
};
export default CreateAccount;
