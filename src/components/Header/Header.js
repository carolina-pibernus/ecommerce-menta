import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import logo from "./logo.png";
import { LinkButton } from "../Buttons/Buttons";
import SignOut from "../SignOut/SignOut";
import "./Header.css";


function Header() {
  const [logged, user] = useContext(UserContext);

  return (
    <div className="header">
      <div className="botonesDiv">
        {logged ? (
          <div>
            {" "}
            <p className="userEmail"> {user.email} </p>
            <SignOut />{" "}
          </div>
        ) : (
          <LinkButton
            linkTo="/login"
            classes="ui button compact"
            text="LogIn"
          />
        )}
      </div>

      <Link to="/">
        <img src={logo} alt="logo menta" className="logo" />{" "}
      </Link>

      <NavBar />
    </div>
  );
}

export default Header;
