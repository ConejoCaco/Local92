import React from "react";
import ReactDOM from "react-dom/client";
import JuegoCompleto from "./JuegoCompleto";
import juegosPs5 from "../juegos/juegosPs5";
import juegosPs4 from "../juegos/juegosPs4";
import juegosPs3 from "../juegos/juegosPs3";
import juegosXone from "../juegos/juegosXone";
import juegosX360 from "../juegos/juegosX360";
import juegosSwitch from "../juegos/juegosSwitch";
import juegosSwitch2 from "../juegos/juegosSwitch2";
import "../estilos/CardJuego.css";

const juegosPorPlataforma = {
  PS5: juegosPs5,
  PS4: juegosPs4,
  PS3: juegosPs3,
  XONE: juegosXone,
  X360: juegosX360,
  NSW: juegosSwitch,
  NSW2: juegosSwitch2,
  PC: [],
};

export default function CardJuego({ limite, plataforma = "PS5", onNavegar }) {
  const todosLosJuegos = juegosPorPlataforma[plataforma] || [];

  const mostrarJuegoCompleto = (juego) => {
    const root = ReactDOM.createRoot(document.body);
    root.render(<JuegoCompleto juego={juego} />);
  };

  const estaAgotado = (juego) => {
    return !juego.stock || juego.stock === 0;
  };

  let juegos =
    limite && todosLosJuegos.length > 0
      ? todosLosJuegos.slice(0, limite)
      : todosLosJuegos;

  if (juegos.length === 0) {
    return (
      <div className="sin-juegos">
        <p>No hay juegos disponibles para {plataforma}</p>
      </div>
    );
  }

  return (
    <div className="grid-juegos">
      {juegos.map((juego) => {
        const agotado = estaAgotado(juego);

        return (
          <div
            key={juego.id}
            className={`card-juego ${agotado ? "agotado" : ""}`}
            onClick={() => onNavegar("juego", plataforma, null, juego)}
            style={{ cursor: "pointer" }}
          >
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
              {agotado && (
                <div className="overlay-agotado-grid">
                  <span className="texto-agotado-grid">AGOTADO</span>
                </div>
              )}
              <div className="placeholder-imagen"></div>
            </div>
            <div className="juego-titulo">{juego.titulo}</div>
            <div className={`juego-precio ${agotado ? "precio-agotado" : ""}`}>
              ${juego.precio.toLocaleString()}
            </div>
            {juego.stock !== undefined && (
              <div className={`juego-stock ${agotado ? "stock-agotado" : ""}`}>
                {agotado ? "Sin stock" : `Stock: ${juego.stock}`}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
