import React, { useState } from 'react';

export default function Componenteformaddjuegos() {
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [clasificacion, setClasificacion] = useState("0");
  const [descripcion, setDescripcion] = useState("");
  const [video, setVideo] = useState("");
  const [fecha, setFecha] = useState("");
  const [consola, setConsola] = useState("otros");
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("precio", precio);
    formData.append("stock", stock);
    formData.append("clasificacion", clasificacion);
    formData.append("descripcion", descripcion);
    formData.append("video", video);
    formData.append("fecha", fecha);
    formData.append("consola", consola);
    formData.append("imagen", imagen);

    try {
      const res = await fetch("http://localhost/backend/subir_juego.php", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert(data.message);
      if (data.message === "Juego agregado correctamente") {
        // Reset form fields
        setTitulo("");
        setPrecio("");
        setStock("");
        setClasificacion("0");
        setDescripcion("");
        setVideo("");
        setFecha("");
        setConsola("otros");
        setImagen(null);
      }
    } catch (err) {
      console.error(err);
      alert("Error al enviar datos");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
      <div className="card p-4 shadow pixel-card" style={{ width: '500px' }}>
        <h2 className="text-center mb-4">Añadir Juegos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre del Juego</label>
            <input 
              type="text" 
              className="form-control" 
              value={titulo} 
              onChange={(e) => setTitulo(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Precio</label>
            <input 
              type="number" 
              className="form-control" 
              min="0"
              value={precio} 
              onChange={(e) => setPrecio(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Imagen</label>
            <input 
              type="file" 
              className="form-control" 
              accept="image/*" 
              onChange={(e) => setImagen(e.target.files[0])} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de Lanzamiento</label>
            <input 
              type="date" 
              className="form-control" 
              value={fecha} 
              onChange={(e) => setFecha(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Existencias</label>
            <input 
              type="number" 
              className="form-control" 
              min="0"
              value={stock} 
              onChange={(e) => setStock(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Clasificación por edad</label>
            <select 
              className="form-select" 
              value={clasificacion} 
              onChange={(e) => setClasificacion(e.target.value)}
            >
              <option value="0">Para todos</option>
              <option value="1">+7</option>
              <option value="2">+12</option>
              <option value="3">+16</option>
              <option value="4">+18</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea 
              className="form-control" 
              rows="3" 
              value={descripcion} 
              onChange={(e) => setDescripcion(e.target.value)} 
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Link de video</label>
            <input 
              type="url" 
              className="form-control" 
              value={video} 
              onChange={(e) => setVideo(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Consola</label>
            <select 
              className="form-select" 
              value={consola} 
              onChange={(e) => setConsola(e.target.value)}
            >
              <option value="otros">Otros</option>
              <option value="ps5">PS5</option>
              <option value="ps4">PS4</option>
              <option value="ps3">PS3</option>
              <option value="xbox_one">Xbox One</option>
              <option value="xbox_360">Xbox 360</option>
              <option value="switch">Switch</option>
              <option value="switch2">Switch 2</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Añadir Juego</button>
        </form>
      </div>
    </div>
  );
}