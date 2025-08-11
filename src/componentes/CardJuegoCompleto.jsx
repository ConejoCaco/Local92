import React from "react";
import juegosPs5 from "../juegos/juegosPs5";
import juegosPs4 from "../juegos/juegosPs4";
import juegosPs3 from "../juegos/juegosPs3";
<<<<<<< Updated upstream
import juegosXone from "../juegos/juegosXone";
import juegosX360 from "../juegos/juegosX360";
import juegosSwitch from "../juegos/juegosSwitch";
import juegosSwitch2 from "../juegos/juegosSwitch2";
=======
import juegosXboxOne from "../juegos/juegosXone";
import juegosXbox360 from "../juegos/juegosX360";
import juegosSwitch from "../juegos/juegosSwitch";

>>>>>>> Stashed changes
import accesoriosPs5 from "../accesorios/accesoriosPs5";
import accesoriosPs4 from "../accesorios/accesoriosPs4";

import "../estilos/CardJuegoCompleto.css";

export default function CardJuegoCompleto({
  consola = "PS5",
  categoria = "juegos",
}) {
  const obtenerDatos = () => {
    const clave = `${consola}_${categoria}`;

    console.log("Buscando datos para:", clave);

    switch (clave) {
      case "PS5_juegos":
        return juegosPs5;
      case "PS5_accesorios":
        return accesoriosPs5;
      case "PS5_consolas":
        return [];

      case "PS4_juegos":
        return juegosPs4;
      case "PS4_accesorios":
        return accesoriosPs4;
      case "PS4_consolas":
        return [];

      case "PS3_juegos":
        return juegosPs3;
      case "PS3_accesorios":
        return [];
      case "PS3_consolas":
        return [];

      case "XONE_juegos":
<<<<<<< Updated upstream
        return juegosXone;
=======
        return [];
>>>>>>> Stashed changes
      case "XONE_accesorios":
        return [];
      case "XONE_consolas":
        return [];

      case "X360_juegos":
<<<<<<< Updated upstream
        return juegosX360;
=======
        return [];
>>>>>>> Stashed changes
      case "X360_accesorios":
        return [];
      case "X360_consolas":
        return [];

      case "SWITCH_juegos":
<<<<<<< Updated upstream
        return juegosSwitch;
=======
        return [];
>>>>>>> Stashed changes
      case "SWITCH_accesorios":
        return [];
      case "SWITCH_consolas":
        return [];

      case "SWITCH2_juegos":
<<<<<<< Updated upstream
        return juegosSwitch2;
=======
        return [];
>>>>>>> Stashed changes
      case "SWITCH2_accesorios":
        return [];
      case "SWITCH2_consolas":
        return [];

      case "OTROS_accesorios":
<<<<<<< Updated upstream
        return accesoriosPs4, accesoriosPs5;
=======
        return [];
>>>>>>> Stashed changes
      case "OTROS_mandos":
        return [];
      case "OTROS_consolas":
        return [];
      case "OTROS_otros":
        return [];

      default:
        console.log("Clave no encontrada:", clave);
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

  return (
    <div className="lista-juegos-compacta">
      {datos.map((item) => (
        <div key={item.id} className="card-juego-compact">
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
                  ${item.precio.toLocaleString()}
                </div>
<<<<<<< Updated upstream
                <button className="btn-comprar-compact">
                  {" "}
                  AGREGAR AL CARRITO
                </button>
=======
                <button className="btn-comprar-compact">+ CARRITO</button>
>>>>>>> Stashed changes
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
