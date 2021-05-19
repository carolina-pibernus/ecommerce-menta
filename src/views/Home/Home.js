import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import "./Home.css";

function Home() {
  return (
    <div>
      <h3>¡Bienvenidx a tu bazar favorito!</h3>

      <ItemListContainer categoria="todo" />
    </div>
  );
}

export default Home;
