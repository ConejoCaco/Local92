import React, { useState, useEffect, useMemo } from "react";
import { useCarrito } from "../carrito/CarritoContext";
import juegosPs5 from "../juegos/juegosPs5";
import juegosPs4 from "../juegos/juegosPs4";
import juegosPs3 from "../juegos/juegosPs3";
import juegosXone from "../juegos/juegosXone";
import juegosX360 from "../juegos/juegosX360";
import juegosSwitch from "../juegos/juegosSwitch";
import juegosSwitch2 from "../juegos/juegosSwitch2";
import accesoriosPs5 from "../accesorios/accesoriosPs5";
import accesoriosPs4 from "../accesorios/accesoriosPs4";
import "../estilos/ComponenteBuscador.css";

export default function ComponenteBuscador({
  terminoBusqueda,
  onNavegar,
  onBusquedaCambio,
}) {
  const { agregarAlCarrito } = useCarrito();
  const [paginaActual, setPaginaActual] = useState(1);
  const [sugerenciasMostrar, setSugerenciasMostrar] = useState(false);
  const [sugerenciaSeleccionada, setSugerenciaSeleccionada] = useState(-1);
  const itemsPorPagina = 12;

  const formatearPrecio = (precio) => {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const todosLosProductos = useMemo(() => {
    return [
      ...juegosPs5.map((item) => ({
        ...item,
        consola: "PS5",
        categoria: "juegos",
      })),
      ...juegosPs4.map((item) => ({
        ...item,
        consola: "PS4",
        categoria: "juegos",
      })),
      ...juegosPs3.map((item) => ({
        ...item,
        consola: "PS3",
        categoria: "juegos",
      })),
      ...juegosXone.map((item) => ({
        ...item,
        consola: "XONE",
        categoria: "juegos",
      })),
      ...juegosX360.map((item) => ({
        ...item,
        consola: "X360",
        categoria: "juegos",
      })),
      ...juegosSwitch.map((item) => ({
        ...item,
        consola: "SWITCH",
        categoria: "juegos",
      })),
      ...juegosSwitch2.map((item) => ({
        ...item,
        consola: "SWITCH2",
        categoria: "juegos",
      })),
      ...accesoriosPs5.map((item) => ({
        ...item,
        consola: "PS5",
        categoria: "accesorios",
      })),
      ...accesoriosPs4.map((item) => ({
        ...item,
        consola: "PS4",
        categoria: "accesorios",
      })),
    ];
  }, []);

  const sugerencias = useMemo(() => {
    if (!terminoBusqueda || terminoBusqueda.trim().length < 2) {
      return [];
    }

    const terminoLimpio = terminoBusqueda.toLowerCase().trim();
    const sugerenciasSet = new Set();

    todosLosProductos.forEach((producto) => {
      const titulo = producto.titulo.toLowerCase();
      if (titulo.includes(terminoLimpio)) {
        sugerenciasSet.add(producto.titulo);
      }
    });

    return Array.from(sugerenciasSet).slice(0, 6);
  }, [terminoBusqueda, todosLosProductos]);

  const resultados = useMemo(() => {
    if (!terminoBusqueda || terminoBusqueda.trim() === "") {
      return [];
    }

    const terminoLimpio = terminoBusqueda.toLowerCase().trim();

    return todosLosProductos.filter(
      (producto) =>
        producto.titulo.toLowerCase().includes(terminoLimpio) ||
        producto.consola.toLowerCase().includes(terminoLimpio)
    );
  }, [terminoBusqueda, todosLosProductos]);

  const formatearNombreConsola = (consola) => {
    const nombres = {
      PS5: "PS5",
      PS4: "PS4",
      PS3: "PS3",
      XONE: "XBOX ONE",
      X360: "XBOX 360",
      SWITCH: "SWITCH",
      SWITCH2: "SWITCH 2",
    };
    return nombres[consola] || consola;
  };

  const totalPaginas = Math.ceil(resultados.length / itemsPorPagina);
  const indiceInicio = (paginaActual - 1) * itemsPorPagina;
  const indiceFin = indiceInicio + itemsPorPagina;
  const resultadosActuales = resultados.slice(indiceInicio, indiceFin);

  const handleInputFocus = () => {
    setSugerenciasMostrar(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setSugerenciasMostrar(false);
      setSugerenciaSeleccionada(-1);
    }, 150);
  };

  const handleSugerenciaClick = (sugerencia) => {
    if (onBusquedaCambio) {
      onBusquedaCambio(sugerencia);
    }
    setSugerenciasMostrar(false);
    setSugerenciaSeleccionada(-1);
  };

  const handleKeyDown = (e) => {
    if (sugerencias.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSugerenciaSeleccionada((prev) =>
        prev < sugerencias.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSugerenciaSeleccionada((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (sugerenciaSeleccionada >= 0) {
        handleSugerenciaClick(sugerencias[sugerenciaSeleccionada]);
      }
    } else if (e.key === "Escape") {
      setSugerenciasMostrar(false);
      setSugerenciaSeleccionada(-1);
    }
  };

  const irAPagina = (pagina) => {
    setPaginaActual(pagina);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      irAPagina(paginaActual - 1);
    }
  };

  const paginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      irAPagina(paginaActual + 1);
    }
  };

  useEffect(() => {
    setPaginaActual(1);
  }, [terminoBusqueda]);

  return (
    <div className="catalogo-completo-container">
      {/* Barra de búsqueda con sugerencias */}
      <div className="buscador-container">
        <div className="buscador-input-container">
          <input
            type="text"
            className="buscador-input"
            placeholder="Buscar juegos, consolas, accesorios..."
            value={terminoBusqueda || ""}
            onChange={(e) =>
              onBusquedaCambio && onBusquedaCambio(e.target.value)
            }
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
          />
          <div className="buscador-icono">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#f8a600">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>

          {/* Dropdown de sugerencias */}
          {sugerenciasMostrar && sugerencias.length > 0 && (
            <div className="sugerencias-dropdown">
              {sugerencias.map((sugerencia, index) => (
                <div
                  key={index}
                  className={`sugerencia-item ${
                    index === sugerenciaSeleccionada ? "seleccionada" : ""
                  }`}
                  onClick={() => handleSugerenciaClick(sugerencia)}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#999">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                  {sugerencia}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {!terminoBusqueda || terminoBusqueda.trim() === "" ? (
        <div className="sin-productos">
          <h3>Buscar Productos</h3>
          <p>
            Ingresa un término de búsqueda para encontrar juegos y accesorios
          </p>
        </div>
      ) : resultados.length === 0 ? (
        <div className="sin-productos">
          <h3>Sin resultados para "{terminoBusqueda}"</h3>
          <p>
            Intenta con términos diferentes como "FIFA", "Call of Duty", "PS5",
            etc.
          </p>
        </div>
      ) : (
        <>
          <h1 className="catalogo-completo-title">
            🔍 Resultados para "{terminoBusqueda}" ({resultados.length})
          </h1>

          <div className="contenedor-juegos-compacto">
            <div className="grid-juegos-compacto">
              {resultadosActuales.map((item) => (
                <div
                  key={`${item.consola}-${item.id}`}
                  className="card-juego-compacto"
                  onClick={() =>
                    onNavegar("juego", item.consola, item.categoria, item)
                  }
                >
                  <div className="imagen-juego-compacto">
                    <img
                      src={item.imagen}
                      alt={item.titulo}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/img/placeholder.jpg";
                      }}
                    />
                  </div>

                  <div className="info-juego-compacto">
                    <div className="plataforma-juego">
                      {formatearNombreConsola(item.consola)}
                    </div>
                    <h3 className="titulo-juego-compacto">{item.titulo}</h3>

                    <div className="footer-juego-compacto">
                      <div className="precio-juego-compacto">
                        ${formatearPrecio(item.precio)}
                      </div>
                      <button
                        className="btn-agregar-compacto"
                        onClick={(e) => {
                          e.stopPropagation();
                          agregarAlCarrito(item);
                        }}
                      >
                        Agregar al Carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginación */}
            {totalPaginas > 1 && (
              <div className="paginacion-container">
                <div className="paginacion-info">
                  Mostrando {indiceInicio + 1}-
                  {Math.min(indiceFin, resultados.length)} de{" "}
                  {resultados.length} resultados
                </div>

                <div className="paginacion-controles">
                  <button
                    className="btn-paginacion"
                    onClick={paginaAnterior}
                    disabled={paginaActual === 1}
                  >
                    ← Anterior
                  </button>

                  <div className="numeros-pagina">
                    {Array.from(
                      { length: Math.min(totalPaginas, 5) },
                      (_, index) => {
                        let numeroPagina;
                        if (totalPaginas <= 5) {
                          numeroPagina = index + 1;
                        } else if (paginaActual <= 3) {
                          numeroPagina = index + 1;
                        } else if (paginaActual >= totalPaginas - 2) {
                          numeroPagina = totalPaginas - 4 + index;
                        } else {
                          numeroPagina = paginaActual - 2 + index;
                        }
                        return numeroPagina;
                      }
                    ).map((numeroPagina) => (
                      <button
                        key={numeroPagina}
                        className={`btn-numero-pagina ${
                          numeroPagina === paginaActual ? "activa" : ""
                        }`}
                        onClick={() => irAPagina(numeroPagina)}
                      >
                        {numeroPagina}
                      </button>
                    ))}
                  </div>

                  <button
                    className="btn-paginacion"
                    onClick={paginaSiguiente}
                    disabled={paginaActual === totalPaginas}
                  >
                    Siguiente →
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
