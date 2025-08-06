import React from "react";
import "../estilos/Footer.css";

const Footer = () => {
  const handleDpadClick = (direction) => {
    console.log(`D-pad ${direction} pressed`);
  };

  const handleActionClick = (button) => {
    console.log(`Action button ${button} pressed`);
  };

  return (
    <footer className="footer-gameboy">
      <div className="footer-content">
        {/* Controls Section */}
        <div className="footer-controls">
          {/* D-Pad */}
          <div className="footer-dpad">
            <button
              className="dpad-btn dpad-up"
              onClick={() => handleDpadClick("up")}
            >
              ▲
            </button>
            <button
              className="dpad-btn dpad-left"
              onClick={() => handleDpadClick("left")}
            >
              ◀
            </button>
            <div className="dpad-center">+</div>
            <button
              className="dpad-btn dpad-right"
              onClick={() => handleDpadClick("right")}
            >
              ▶
            </button>
            <button
              className="dpad-btn dpad-down"
              onClick={() => handleDpadClick("down")}
            >
              ▼
            </button>
          </div>

          {/* Action Buttons */}
          <div className="footer-actions">
            <button
              className="action-btn"
              onClick={() => handleActionClick("A")}
            >
              A
            </button>
            <button
              className="action-btn"
              onClick={() => handleActionClick("B")}
            >
              B
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-info">
          <div className="footer-phone">+56 991315746</div>
          <div className="footer-text">@ LOCAL 92</div>
          <div className="footer-text">C.COMERCIAL EL MORRO</div>
          <div className="footer-text">LOCAL 92 - ARICA</div>

          <div className="footer-social">
            <button className="social-btn" title="WhatsApp">
              📱
            </button>
            <button className="social-btn" title="Email">
              ✉️
            </button>
            <button className="social-btn" title="Instagram">
              📷
            </button>
            <button className="social-btn" title="Facebook">
              📘
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
