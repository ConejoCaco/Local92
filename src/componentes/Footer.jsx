import React from "react";
import "../estilos/Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="separador-footer"></div>

      <footer className="gameboy-footer">
        <div className="contenedor-fluid">
          <div className="d-flex align-items-center justify-content-center">
            <div className="d-pad me-3">
              <div className="d-pad-horizontal"></div>
              <div className="d-pad-vertical"></div>
            </div>

            <div className="footer-content text-center mx-3">
              <div className="footer-logo">LOCAL 92</div>
              <div className="footer-text">
                <p>© 2025 Local 92. Todos los derechos reservados.</p>
              </div>
            </div>

            <div className="buttons">
              <div className="gameboy-button button-a"></div>
              <div className="gameboy-button button-b"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
