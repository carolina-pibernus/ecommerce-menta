import React from 'react'
import Counter from '../Counter/Counter.js'

function ItemDetail ({propiedad}) {
    return(
        <div>
            <h3>{propiedad.nombre}</h3>
            <img src={propiedad.imagen} alt="imagen producto" />
            <h5> {propiedad.precio} </h5>
            <p> {propiedad.descripcion}</p>

           
              <div> 
              <Counter />
              <button className='ui olive button'>Agregar al Carrito</button> 
              </div>
            
             
             
        </div>
    )
}

export default ItemDetail 