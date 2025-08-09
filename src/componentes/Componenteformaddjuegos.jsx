import React from 'react'
import "../estilos/Componenteformaddjuegos.css";
import "../index.js";



export default function Componenteformaddjuegos() {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '75vh' }}>
        <div className='card p-4 shadow pixel-card' style={{ width: '500px' }}>
            <h2 className='text-center mb-4'>Añadir Juegos</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='mb-3'>
                <label className='form-label'>Nombre del Juego</label>
                    <input type='text' className='form-control' placeholder='Nombre del juego' required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input type='number' className='form-control' name='precio'  required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Imagen</label>
                    <input type='file' className='form-control' accept='image/*' required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Fecha de Lanzamiento</label>
                    <input type='date' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Existencias</label>
                    <input type='number' className='form-control' required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Clasificación por edad</label>
                    <select className='form-select'>
                        <option value='0'>Para todos </option>
                        <option value='1'>+7  </option>
                        <option value='2'>+12 </option>
                        <option value='3'>+16 </option>
                        <option value='4'>+18 </option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <textarea className='form-control' rows='3' placeholder='Descripción del juego' required></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Link de video</label>
                    <input type='url' className='form-control' placeholder='URL de youtube' required />
                </div>
                <button type='submit' className='btn btn-primary w-100'>Añadir Juego</button>
            </form>
        </div>
    </div>
  )
}
