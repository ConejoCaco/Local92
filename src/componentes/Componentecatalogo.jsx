import React from "react";
import CardJuego from "./CardJuego";
import CardBotones from "./CardBotones";
import "../estilos/Componentecatalogo.css";

export default function ComponenteCatalogo() {
  return (
    <div className="catalogo-container">
      <h1 className="catalogo-title">PLAYSTATION 5</h1>

      <div className="contenedor-principal">
        <div className="columna-juegos">
          <CardJuego />
        </div>

        <div className="columna-botones">
          <CardBotones />
        </div>
      </div>
    </div>
  );
}
