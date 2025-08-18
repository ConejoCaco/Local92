import React, { useState, useEffect } from "react";
import { useCarrito } from "./CarritoContext";
import "./Carrito.css";

export const CarritoIcono = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const {
    carrito,
    eliminarDelCarrito,
    actualizarCantidad,
    totalPrecio,
    totalItems,
  } = useCarrito();

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isModal = e.target.closest(".carrito-modal");
      const isBoton = e.target.closest(".carrito-boton-flotante");

      if (modalAbierto && !isModal && !isBoton) {
        setModalAbierto(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalAbierto]);

  return (
    <>
      {modalAbierto && (
        <div
          className="carrito-overlay"
          onClick={() => setModalAbierto(false)}
        />
      )}

      <button
        className="carrito-boton-flotante"
        onClick={() => setModalAbierto(!modalAbierto)}
        aria-label="Ver carrito"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
        {totalItems > 0 && <span className="carrito-badge">{totalItems}</span>}
      </button>

      {modalAbierto && (
        <div className="carrito-modal">
          <div className="carrito-header">
            <h3>Tu Carrito ({totalItems})</h3>
            <button
              onClick={() => setModalAbierto(false)}
              aria-label="Cerrar carrito"
            >
              ×
            </button>
          </div>

          <div className="carrito-items">
            {carrito.length > 0 ? (
              carrito.map((item) => (
                <div
                  key={`${item.id}-${item.cantidad}`}
                  className="carrito-item"
                >
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="carrito-img"
                    loading="lazy"
                  />
                  <div className="carrito-info">
                    <div className="carrito-detalle">
                      <h4>{item.nombre}</h4>
                      <p>
                        $
                        {item.precio.toLocaleString("es-CL").replace(/,/g, ".")}
                      </p>
                    </div>
                    <div className="carrito-acciones">
                      <div className="carrito-cantidad">
                        <button
                          onClick={() =>
                            actualizarCantidad(item.id, item.cantidad - 1)
                          }
                          disabled={item.cantidad <= 1}
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
                      <button
                        className="carrito-eliminar"
                        onClick={() => eliminarDelCarrito(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="carrito-vacio">Tu carrito está vacío</p>
            )}
          </div>

          <div className="carrito-footer">
            <div className="carrito-total">
              <span>Total:</span>
              <span>
                ${totalPrecio.toLocaleString("es-CL").replace(/,/g, ".")}
              </span>
            </div>
            <button className="carrito-comprar" disabled={carrito.length === 0}>
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </>
  );
};
