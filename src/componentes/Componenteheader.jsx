import React, { useState } from "react";
import "../estilos/Componenteheader.css";

export default function Componenteheader({ onNavegar }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

<<<<<<< Updated upstream
  const handleNavegacion = (consola, categoria) => {
=======
  const handleNavegacion = (e, consola, categoria) => {
    e.preventDefault();
>>>>>>> Stashed changes
    onNavegar("catalogo", consola, categoria);
    setActiveDropdown(null);
  };

<<<<<<< Updated upstream
  /*const handleNavegacion = (e, consola, categoria) => {
  e.preventDefault();
  if (consola === "login") {
    onNavegar("login");
  } else {
    onNavegar("catalogo", consola, categoria);
  }
  setActiveDropdown(null);
};*/

=======
>>>>>>> Stashed changes
  const toggleDropdown = (e, consola) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === consola ? null : consola);
  };

  const irAlInicio = (e) => {
    e.preventDefault();
    onNavegar("inicio");
    setActiveDropdown(null);
  };

  return (
    <div className="contenedor">
      <div id="nav">
<<<<<<< Updated upstream
=======
        {/* Logo */}
>>>>>>> Stashed changes
        <div className="logo">
          <a href="#" onClick={irAlInicio} style={{ cursor: "pointer" }}>
            <img
              src="/img/pixil-frame-0.png"
              alt="Logo"
              style={{ marginTop: "3px", height: "70px", width: "auto" }}
            />
          </a>
        </div>

        <div className="buscadorTop">
          <input
            name="consulta"
            type="text"
            id="buscadorTopProductos"
            size="40"
            autoComplete="off"
            className="inputBuscador"
            placeholder="Buscar..."
          />
        </div>

        <div className="social" style={{ minWidth: "600px" }}>
          <ul>
            <li>
              <a href="locales.asp">
                <i className="fas fa-store-alt"></i>
              </a>
            </li>
            <li>
              <a href="/contactanos.asp">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/local.92"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/local92arica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
          <div style={{ marginTop: "4px", fontSize: "12px" }}>
            Local 92 - Centro Comercial El Morro - Arica
          </div>
        </div>

        <ul id="menu" className="productos">
          <li>
            <a
              href="#"
              onClick={irAlInicio}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Inicio
            </a>
          </li>
<<<<<<< Updated upstream

=======
          {/* PS5 */}
>>>>>>> Stashed changes
          <li className={activeDropdown === "PS5" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "PS5")}>
              PS5
            </a>
            <div className="dropdown ps5">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("PS5", "juegos")}
=======
                      onClick={(e) => handleNavegacion(e, "PS5", "juegos")}
>>>>>>> Stashed changes
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("PS5", "accesorios")}
=======
                      onClick={(e) => handleNavegacion(e, "PS5", "accesorios")}
>>>>>>> Stashed changes
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("PS5", "consolas")}
=======
                      onClick={(e) => handleNavegacion(e, "PS5", "consolas")}
>>>>>>> Stashed changes
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

<<<<<<< Updated upstream
=======
          {/* PS4 */}
>>>>>>> Stashed changes
          <li className={activeDropdown === "PS4" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "PS4")}>
              PS4
            </a>
            <div className="dropdown ps4">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("PS4", "juegos")}
=======
                      onClick={(e) => handleNavegacion(e, "PS4", "juegos")}
>>>>>>> Stashed changes
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("PS4", "accesorios")}
=======
                      onClick={(e) => handleNavegacion(e, "PS4", "accesorios")}
>>>>>>> Stashed changes
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("PS4", "consolas")}
=======
                      onClick={(e) => handleNavegacion(e, "PS4", "consolas")}
>>>>>>> Stashed changes
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

<<<<<<< Updated upstream
=======
          {/* PS3 */}
>>>>>>> Stashed changes
          <li className={activeDropdown === "PS3" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "PS3")}>
              PS3
            </a>
            <div className="dropdown ps3">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("PS3", "juegos")}
=======
                      onClick={(e) => handleNavegacion(e, "PS3", "juegos")}
>>>>>>> Stashed changes
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("PS3", "accesorios")}
=======
                      onClick={(e) => handleNavegacion(e, "PS3", "accesorios")}
>>>>>>> Stashed changes
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("PS3", "consolas")}
=======
                      onClick={(e) => handleNavegacion(e, "PS3", "consolas")}
>>>>>>> Stashed changes
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

<<<<<<< Updated upstream
=======
          {/* XBOX ONE */}
>>>>>>> Stashed changes
          <li className={activeDropdown === "XONE" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "XONE")}>
              X ONE
            </a>
            <div className="dropdown xboxone">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("XONE", "juegos")}
=======
                      onClick={(e) => handleNavegacion(e, "XONE", "juegos")}
>>>>>>> Stashed changes
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("XONE", "accesorios")}
=======
                      onClick={(e) => handleNavegacion(e, "XONE", "accesorios")}
>>>>>>> Stashed changes
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("XONE", "consolas")}
=======
                      onClick={(e) => handleNavegacion(e, "XONE", "consolas")}
>>>>>>> Stashed changes
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

<<<<<<< Updated upstream
=======
          {/* XBOX 360 */}
>>>>>>> Stashed changes
          <li className={activeDropdown === "X360" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "X360")}>
              XBOX 360
            </a>
            <div className="dropdown xbox360">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("X360", "juegos")}
=======
                      onClick={(e) => handleNavegacion(e, "X360", "juegos")}
>>>>>>> Stashed changes
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("X360", "accesorios")}
=======
                      onClick={(e) => handleNavegacion(e, "X360", "accesorios")}
>>>>>>> Stashed changes
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("X360", "consolas")}
=======
                      onClick={(e) => handleNavegacion(e, "X360", "consolas")}
>>>>>>> Stashed changes
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

<<<<<<< Updated upstream
=======
          {/* SWITCH */}
>>>>>>> Stashed changes
          <li className={activeDropdown === "SWITCH" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "SWITCH")}>
              SWITCH
            </a>
            <div className="dropdown switch">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("SWITCH", "juegos")}
=======
                      onClick={(e) => handleNavegacion(e, "SWITCH", "juegos")}
>>>>>>> Stashed changes
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("SWITCH", "accesorios")}
=======
                      onClick={(e) =>
                        handleNavegacion(e, "SWITCH", "accesorios")
                      }
>>>>>>> Stashed changes
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("SWITCH", "consolas")}
=======
                      onClick={(e) => handleNavegacion(e, "SWITCH", "consolas")}
>>>>>>> Stashed changes
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

<<<<<<< Updated upstream
=======
          {/* SWITCH 2 */}
>>>>>>> Stashed changes
          <li className={activeDropdown === "SWITCH2" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "SWITCH2")}>
              SWITCH 2
            </a>
            <div className="dropdown switch2">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("SWITCH2", "juegos")}
=======
                      onClick={(e) => handleNavegacion(e, "SWITCH2", "juegos")}
>>>>>>> Stashed changes
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("SWITCH2", "accesorios")}
=======
                      onClick={(e) =>
                        handleNavegacion(e, "SWITCH2", "accesorios")
                      }
>>>>>>> Stashed changes
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("SWITCH2", "consolas")}
=======
                      onClick={(e) =>
                        handleNavegacion(e, "SWITCH2", "consolas")
                      }
>>>>>>> Stashed changes
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

<<<<<<< Updated upstream
=======
          {/* Otros */}
>>>>>>> Stashed changes
          <li className={activeDropdown === "OTROS" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "OTROS")}>
              Otros
            </a>
            <div className="dropdown otros">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("OTROS", "accesorios")}
=======
                      onClick={(e) =>
                        handleNavegacion(e, "OTROS", "accesorios")
                      }
>>>>>>> Stashed changes
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("OTROS", "mandos")}
=======
                      onClick={(e) => handleNavegacion(e, "OTROS", "mandos")}
>>>>>>> Stashed changes
                    >
                      Mandos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
<<<<<<< Updated upstream
                      onClick={() => handleNavegacion("OTROS", "consolas")}
=======
                      onClick={(e) => handleNavegacion(e, "OTROS", "consolas")}
>>>>>>> Stashed changes
                    >
                      Consolas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => handleNavegacion(e, "OTROS", "otros")}
                    >
                      Otros
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
