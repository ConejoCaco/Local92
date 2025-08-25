import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import JuegoCompleto from "./JuegoCompleto";
import juegosPs5 from "../juegos/juegosPs5";
import juegosPs4 from "../juegos/juegosPs4";
import juegosPs3 from "../juegos/juegosPs3";
import juegosXone from "../juegos/juegosXone";
import juegosX360 from "../juegos/juegosX360";
import juegosSwitch from "../juegos/juegosSwitch";
import juegosSwitch2 from "../juegos/juegosSwitch2";
import accesoriosPs5 from "../accesorios/accesoriosPs5";
import accesoriosPs4 from "../accesorios/accesoriosPs4";
import { useCarrito } from "../carrito/CarritoContext";
import "../estilos/CardJuegoCompleto.css";

export default function CardJuegoCompleto({
  consola = "PS5",
  categoria = "juegos",
  onNavegar,
}) {
  const { agregarAlCarrito } = useCarrito();
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 10;

  const formatearPrecio = (precio) => {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const mostrarJuegoCompleto = (juego) => {
    const root = ReactDOM.createRoot(document.body);
    root.render(<JuegoCompleto juego={juego} />);
  };

  const estaAgotado = (item) => {
    return !item.stock || item.stock === 0;
  };

  const obtenerDatos = () => {
    const clave = `${consola}_${categoria}`;
    switch (clave) {
      case "PS5_juegos":
        return juegosPs5;
      case "PS5_accesorios":
        return accesoriosPs5;
      case "PS4_juegos":
        return juegosPs4;
      case "PS4_accesorios":
        return accesoriosPs4;
      case "PS3_juegos":
        return juegosPs3;
      case "XONE_juegos":
        return juegosXone;
      case "X360_juegos":
        return juegosX360;
      case "SWITCH_juegos":
        return juegosSwitch;
      case "SWITCH2_juegos":
        return juegosSwitch2;
      case "OTROS_accesorios":
        return [...accesoriosPs4, ...accesoriosPs5];
      default:
        return [];
    }
  };

  const formatearNombreConsola = (consola) => {
    const nombres = {
      PS5: "PS5",
      PS4: "PS4",
      PS3: "PS3",
      XONE: "XBOX ONE",
      X360: "XBOX 360",
      SWITCH: "SWITCH",
      SWITCH2: "SWITCH 2",
      OTROS: "OTROS",
    };
    return nombres[consola] || consola;
  };

  const datos = obtenerDatos();

  if (!datos || datos.length === 0) {
    return (
      <div className="sin-productos">
        <h3>Próximamente disponible</h3>
        <p>
          Esta sección estará disponible pronto para{" "}
          {formatearNombreConsola(consola)} - {categoria}.
        </p>
      </div>
    );
  }

  const totalPaginas = Math.ceil(datos.length / itemsPorPagina);
  const indiceInicio = (paginaActual - 1) * itemsPorPagina;
  const indiceFin = indiceInicio + itemsPorPagina;
  const datosActuales = datos.slice(indiceInicio, indiceFin);

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

  return (
    <div className="catalogo-con-paginacion">
      <div className="lista-juegos-compacta">
        {datosActuales.map((item) => {
          const agotado = estaAgotado(item);

          return (
            <div
              key={item.id}
              className={`card-juego-compact ${agotado ? "agotado" : ""}`}
              onClick={() => onNavegar("juego", consola, categoria, item)}
              style={{ cursor: "pointer" }}
            >
              <div className="imagen-container-compact">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="imagen-juego-compact"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/img/placeholder.jpg";
                  }}
                />
                {agotado && (
                  <div className="overlay-agotado">
                    <span className="texto-agotado">AGOTADO</span>
                  </div>
                )}
              </div>

              <div className="info-container-compact">
                <div className="plataforma-compact">
                  {formatearNombreConsola(consola)}
                </div>
                <h3 className="titulo-juego-compact">{item.titulo}</h3>

                <div className="fila-inferior-compact">
                  <div className="clasificacion-compact">
                    CLASIFICACIÓN PENDIENTE
                  </div>
                  <div className="precio-boton-container">
                    <div className="precio-compact">
                      ${formatearPrecio(item.precio)}
                    </div>
                    <button
                      className={`btn-comprar-compact ${
                        agotado ? "deshabilitado" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!agotado) {
                          agregarAlCarrito(item);
                        }
                      }}
                      disabled={agotado}
                    >
                      {agotado ? "AGOTADO" : "AGREGAR AL CARRITO"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {totalPaginas > 1 && (
        <div className="paginacion-container">
          <div className="paginacion-info">
            Mostrando {indiceInicio + 1}-{Math.min(indiceFin, datos.length)} de{" "}
            {datos.length} productos
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
                { length: totalPaginas },
                (_, index) => index + 1
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
  );
}
