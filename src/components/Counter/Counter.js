import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./Counter.css";
import { Button } from "../Buttons/Buttons";

const Counter = ({ setear, producto }) => {
  const [count, setCount] = useState(0);
  const handleDecrement =
    count >= 1
      ? () => {
          setCount(count - 1);
          setear(count - 1);
        }
      : null;
  const handleIncrement =
    count < producto.stock
      ? () => {
          setCount(count + 1);
          setear(count + 1);
        }
      : null;

  return (
    <div className="counter">
      <Button classes="ui button compact" click={handleDecrement} text="-" />
      <p>{count}</p>
      <Button classes="ui button compact" click={handleIncrement} text="+" />
    </div>
  );
};
export default Counter;
