import React from "react";
import "../estilos/CardJuego.css";

const juegos = [
  { id: 1, titulo: "Elden Ring Nightreign", precio: 39900 },
  { id: 2, titulo: "Black Myth: Wukong", precio: 74900 },
  { id: 3, titulo: "Grand Theft Auto V", precio: 22900 },
  { id: 4, titulo: "Clair Obscur Expedition", precio: 59900 },
  { id: 5, titulo: "MADiSON - Possesse|d", precio: 17900 },
];

export default function CardJuego() {
  return (
    <div className="grid-juegos">
      {juegos.map((juego) => (
        <div key={juego.id} className="card-juego">
          <div className="juego-imagen"></div>
          <div className="juego-titulo">{juego.titulo}</div>
          <div className="juego-precio">${juego.precio.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}
