import React from "react";
import CardJuegoCompleto from "./CardJuegoCompleto";
import "../estilos/CatalogoCompleto.css";

export default function CatalogoCompleto({ consola, categoria }) {
  const obtenerTitulo = () => {
<<<<<<< Updated upstream
=======
    // Mapeo de nombres de consola para mostrar nombres completos
>>>>>>> Stashed changes
    const nombresConsola = {
      XONE: "XBOX ONE",
      X360: "XBOX 360",
      PS4: "PLAYSTATION 4",
      PS5: "PLAYSTATION 5",
      PS3: "PLAYSTATION 3",
      NSW: "NINTENDO SWITCH",
<<<<<<< Updated upstream
      NSW2: "NINTENDO SWITCH 2",
=======
      WII: "NINTENDO WII",
      WIIU: "NINTENDO WII U",
      N3DS: "NINTENDO 3DS",
      PC: "PC",
>>>>>>> Stashed changes
    };

    const consolaFormateada =
      nombresConsola[consola] || consola?.replace("_", " ") || "";
    const categoriaFormateada =
      categoria?.charAt(0).toUpperCase() + categoria?.slice(1) || "";

    return `${consolaFormateada} - ${categoriaFormateada}`.trim();
  };

  return (
    <div className="catalogo-completo-container">
      <h1 className="catalogo-completo-title">{obtenerTitulo()}</h1>
      <div className="contenedor-juegos-compacto">
        <CardJuegoCompleto consola={consola} categoria={categoria} />
      </div>
    </div>
  );
}
