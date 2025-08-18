import React from "react";
import ComponenteCatalogo from "./Componentecatalogo";
import CatalogoCompleto from "./CatalogoCompleto";
import ComponentePanelLogin from "./ComponentepanelLogin";
import JuegoCompleto from "./JuegoCompleto";
import ComponenteBusqueda from "./ComponenteBuscador";
import "../estilos/Body.css";
import { CarritoIcono } from "../carrito/CarritoIcono";

export default function Body({
  paginaActual,
  consola,
  categoria,
  juego,
  terminoBusqueda,
  onNavegar,
}) {
  const renderizarContenido = () => {
    switch (paginaActual) {
      case "inicio":
        return (
          <>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="PS5" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="PS4" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="PS3" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="XONE" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="X360" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="NSW" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="NSW2" />
            </section>
          </>
        );

      case "catalogo":
        return (
          <section className="seccion-catalogo">
            <CatalogoCompleto
              consola={consola}
              categoria={categoria}
              onNavegar={onNavegar}
            />
          </section>
        );

      case "juego":
        return (
          <section className="seccion-catalogo">
            <JuegoCompleto
              juego={juego}
              onVolver={() => {
                if (!consola || !categoria) {
                  onNavegar("inicio");
                } else {
                  onNavegar("catalogo", consola, categoria);
                }
              }}
            />
          </section>
        );

      case "busqueda":
        return (
          <section className="seccion-catalogo">
            <ComponenteBusqueda
              terminoBusqueda={terminoBusqueda}
              onNavegar={onNavegar}
            />
          </section>
        );

      case "login":
        return <ComponentePanelLogin />;

      default:
        return (
          <section className="seccion-catalogo">
            <ComponenteCatalogo onNavegar={onNavegar} plataforma="PS5" />
          </section>
        );
    }
  };

  return (
    <main className="body-container">
      {renderizarContenido()}
      <CarritoIcono />
    </main>
  );
}
