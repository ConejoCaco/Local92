import React from "react";
import "../estilos/CardBotones.css";

export default function CardBotones({
  onNavegar = () => console.log("Navegación no configurada"),
  consola = "PS5",
  categoriaActiva,
}) {
  const categorias = [
    { nombre: "Juegos", key: "juegos" },
    { nombre: "Accesorios", key: "accesorios" },
    { nombre: "Consolas", key: "consolas" },
  ];

  const handleClick = (categoria) => {
    onNavegar("catalogo", consola, categoria);
  };

  return (
    <div className="card-botones-container">
      {categorias.map((cat) => (
        <button
          key={cat.key}
          className={`boton-categoria ${
            categoriaActiva === cat.key ? "active" : ""
          }`}
          onClick={() => handleClick(cat.key)}
        >
          {cat.nombre}
        </button>
      ))}
    </div>
  );
}
