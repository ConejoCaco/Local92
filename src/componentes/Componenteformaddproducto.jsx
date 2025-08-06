import React from 'react'
import "../estilos/Componenteformaddjuegos.css";
import "../index.js";


export default function Componenteformaddproducto() {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '75vh' }}>
        <div className='card p-4 shadow pixel-card' style={{ width: '500px' }}>
            <h2 className='text-center mb-4'>Añadir Producto</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre del Producto</label>
                    <input type='text' className='form-control' placeholder='Nombre del producto' required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input type='number' className='form-control' name='precio' required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Imagen</label>
                    <input type='file' className='form-control' accept='image/*' required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Existencias</label>
                    <input type='number' className='form-control' required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Fabricante-Marca</label>
                    <input type='text' className='form-control' placeholder='Fabricante o Marca' required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <textarea className='form-control' rows='3' placeholder='Descripción del producto' required></textarea>
                </div>
                <button type='submit' className='btn btn-primary w-100'>Añadir Producto</button>  
            </form>
        </div>
    </div>
  )
}
