import React from "react";
import { useCarrito } from "../carrito/CarritoContext";
import "../estilos/JuegoCompleto.css";

export default function JuegoCompleto({ juego, onVolver }) {
  const { agregarAlCarrito } = useCarrito();

  if (!juego) return null;

  const manejarAgregarCarrito = () => {
    agregarAlCarrito(juego);
  };

  const manejarVolver = () => {
    if (onVolver) {
      onVolver();
    } else {
      window.history.back();
    }
  };

  return (
    <div className="juego-completo-container">
      <div className="titulo-con-volver">
        <button
          onClick={manejarVolver}
          className="btn btn-secondary btn-volver"
        >
          ← Volver
        </button>
        <h1>{juego.titulo}</h1>
      </div>

      <div className="contenido-principal">
        <div className="portada-info">
          <div className="portada-section">
            <img
              src={juego.imagen}
              alt={juego.titulo}
              className="portada-imagen"
            />
            <div className="clasificacion-box">
              <span className="clasificacion-label">CLASIFICACIÓN</span>
              <span className="clasificacion-valor">PENDIENTE</span>
            </div>
          </div>
          <div className="info-lateral">
            <div className="precio-boton-inline">
              <div className="precio-destacado">
                ${juego.precio.toLocaleString()}
              </div>
              <button
                onClick={manejarAgregarCarrito}
                className="btn-agregar-carrito"
                disabled={juego.stock === 0}
              >
                {juego.stock === 0 ? "Agotado" : "Agregar al Carrito"}
              </button>
            </div>

            {juego.video && (
              <div className="video-section">
                <iframe
                  width="560"
                  height="315"
                  src={juego.video}
                  title={juego.titulo}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {juego.descripcion && (
              <div className="descripcion-section">
                <p>{juego.descripcion}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
