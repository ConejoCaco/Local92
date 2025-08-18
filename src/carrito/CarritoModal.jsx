import React from "react";
import { useCarrito } from "./CarritoContext";
import "./Carrito.css";

export const CarritoModal = ({ isOpen, onClose }) => {
  const { carrito, eliminarDelCarrito, actualizarCantidad, totalPrecio } =
    useCarrito();

  if (!isOpen) return null;

  return (
    <div className="carrito-fondo">
      <div className="carrito-contenedor">
        <button className="carrito-cerrar" onClick={onClose}>
          ×
        </button>
        <h2 className="carrito-titulo">TU CARRITO 🎮</h2>

        {carrito.length === 0 ? (
          <p className="carrito-vacio">¡No hay items en tu carrito!</p>
        ) : (
          <div className="carrito-lista">
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="carrito-imagen"
                />
                <div className="carrito-detalle">
                  <h3>{item.titulo}</h3>
                  <p>${item.precio.toLocaleString()}</p>
                  <div className="carrito-controles">
                    <button
                      onClick={() =>
                        actualizarCantidad(item.id, item.cantidad - 1)
                      }
                    >
                      −
                    </button>
                    <span>{item.cantidad}</span>
                    <button
                      onClick={() =>
                        actualizarCantidad(item.id, item.cantidad + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="carrito-eliminar"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="carrito-total">
          <span>Total:</span>
          <span>${totalPrecio.toLocaleString()}</span>
        </div>
        <button className="carrito-comprar">PAGAR AHORA</button>
      </div>
    </div>
  );
};
