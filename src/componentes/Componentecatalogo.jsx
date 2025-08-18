import React from "react";
import CardJuego from "./CardJuego";
import CardBotones from "./CardBotones";
import "../estilos/Componentecatalogo.css";

const titulos = {
  PS5: "PLAYSTATION 5",
  PS4: "PLAYSTATION 4",
  PS3: "PLAYSTATION 3",
  XONE: "XBOX ONE",
  X360: "XBOX 360",
  NSW: "NINTENDO SWITCH",
  NSW2: "NINTENDO SWITCH 2",
};

export default function ComponenteCatalogo({ onNavegar, plataforma = "PS5" }) {
  return (
    <div className="catalogo-container">
      <h1 className="catalogo-title">
        {titulos[plataforma] || "PLAYSTATION 5"}
      </h1>

      <div className="contenedor-principal">
        <div className="columna-juegos">
          <CardJuego limite={5} plataforma={plataforma} onNavegar={onNavegar} />
        </div>

        <div className="columna-botones">
          <CardBotones onNavegar={onNavegar} consola={plataforma} />
        </div>
      </div>
    </div>
  );
}
