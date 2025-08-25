import React,{useState} from 'react'
import "../estilos/Componenteformaddjuegos.css";
import "../index.js";


export default function Componenteformaddproducto() {

    const [titulo, setTitulo] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [video, setVideo] = useState("");
    const [consola, setConsola] = useState("otros");
    const [imagen, setImagen] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("precio", precio);
        formData.append("stock", stock);
        formData.append("descripcion", descripcion);
        formData.append("video", video);
        formData.append("consola", consola);
        formData.append("imagen", imagen);
    
        try {
          const res = await fetch("http://localhost/backend/subir_producto.php", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          alert(data.message);
          if (data.message === "Producto agregado correctamente") {
            setTitulo("");
            setPrecio("");
            setStock("");
            setDescripcion("");
            setVideo("");
            setConsola("otros");
            setImagen(null);
          }
        } catch (err) {
          console.error(err);
          alert("Error al enviar datos");
        }
      };



  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '75vh' }}>
        <div className='card p-4 shadow pixel-card' style={{ width: '500px' }}>
            <h2 className='text-center mb-4'>Añadir Producto</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre del Producto</label>
                    <input value= {titulo}type='text' className='form-control' placeholder='Nombre del producto' required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input value={precio} type='number' className='form-control' name='precio' required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Imagen</label>
                    <input value={imagen} type='file' className='form-control' accept='image/*' required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Existencias</label>
                    <input value= {stock} type='number' className='form-control' required/>
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
                <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <textarea value={descripcion} className='form-control' rows='3' placeholder='Descripción del producto' required></textarea>
                </div> 
                <button type='submit' className='btn btn-primary w-100'>Añadir Producto</button>  
            </form>
        </div>
    </div>
  )
}
