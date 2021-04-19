import React, {useState}  from 'react'
import Counter from '../Counter/Counter.js'
import '../ItemDetailContainer/ItemDetailContainer.css'
import {Link} from 'react-router-dom'

function ItemDetail ({propiedad}) {
const producto = propiedad    
const [cantidad, setCantidad] = useState(0)
const mostrarBoton = cantidad >= 1 ? "ui button teal" : "ocultar"

    return(
        <div>
            <h3>{propiedad.nombre}</h3>
            <img src={propiedad.imagen} alt="imagen producto" className="fotoDetalle" />
            <h5> $ {propiedad.precio} </h5>
            <p> {propiedad.descripcion}</p>

           
              <div> 
              <Counter setear={setCantidad}/>
              </div>
              <p>Cantidad de productyospasados al ItemDetail {cantidad}</p>
              <Link to={{pathname:"/cart", state:[{producto:producto}, {cantidad:cantidad}]}}>
            <button className={mostrarBoton}>Finalizar Compra</button></Link>
            
             
             
        </div>
    )
}

export default ItemDetail 