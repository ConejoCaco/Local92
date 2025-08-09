import React from "react";
import juegosPs5 from "../juegos/juegosPs5";
import "../estilos/CardJuego.css";

export default function CardJuego() {
  const juegos = juegosPs5;

  return (
    <div className="grid-juegos">
      {juegos.map((juego) => (
        <div key={juego.id} className="card-juego">
          <div className="juego-imagen">
            <img
              src={juego.imagen}
              alt={juego.titulo}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <div className="placeholder-imagen"></div>
          </div>
          <div className="juego-titulo">{juego.titulo}</div>
          <div className="juego-precio">${juego.precio.toLocaleString()}</div>
          {juego.stock && (
            <div className="juego-stock">Stock: {juego.stock}</div>
          )}
        </div>
      ))}
    </div>
  );
}
