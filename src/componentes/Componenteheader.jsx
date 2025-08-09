import React, { useState } from "react";
import "../estilos/Componenteheader.css";

export default function Componenteheader({ onNavegar }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavegacion = (consola, categoria) => {
    onNavegar("catalogo", consola, categoria);
    setActiveDropdown(null);
  };

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
                      onClick={() => handleNavegacion("PS5", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS5", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS5", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

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
                      onClick={() => handleNavegacion("PS4", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS4", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS4", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

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
                      onClick={() => handleNavegacion("PS3", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS3", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS3", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

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
                      onClick={() => handleNavegacion("XONE", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("XONE", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("XONE", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

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
                      onClick={() => handleNavegacion("X360", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("X360", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("X360", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

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
                      onClick={() => handleNavegacion("SWITCH", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("SWITCH", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("SWITCH", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

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
                      onClick={() => handleNavegacion("SWITCH2", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("SWITCH2", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("SWITCH2", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

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
                      onClick={() => handleNavegacion("OTROS", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("OTROS", "mandos")}
                    >
                      Mandos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("OTROS", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("OTROS", "otros")}
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
