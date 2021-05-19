import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ classes, click, text }) => {
  return (
    <div>
      <button className={classes} onClick={click}>
        {text}
      </button>
    </div>
  );
};

export const LinkButton = ({ linkTo, classes, text }) => {
  return (
    <div>
      <Link to={linkTo}>
        <button className={classes}>{text}</button>
      </Link>
    </div>
  );
};
