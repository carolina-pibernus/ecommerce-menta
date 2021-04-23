import React, {useState}  from 'react'
import Counter from '../Counter/Counter.js'
import '../ItemDetailContainer/ItemDetailContainer.css'
import {Link} from 'react-router-dom'
import { BotonAdd } from '../BotonAdd/BotonAdd'

function ItemDetail ({propiedad}) {
const producto = propiedad    
const [cantidad, setCantidad] = useState(0)
const [verCounter, setVerCounter] = useState("visible")

const mostrarFinalizar = verCounter === "oculto" ? "ui button teal" : "ocultar"
const habilitarAgregar = cantidad >= 1 ? "active" : "disabled"
    return(
        <div className="itemDetail">
            <h3 className="itemNombre">{propiedad.nombre}</h3>
            <img src={propiedad.imagen} alt="imagen producto" className="fotoDetalle" />
            <div className="contenedorPropiedades">
            <h5> $ {propiedad.precio} </h5>
            <p> {propiedad.descripcion}</p>
           
              <div className={verCounter}> 
              <Counter setear={setCantidad} producto={producto} verCounter={verCounter}/>
              <BotonAdd verCounter={verCounter} setVerCounter={setVerCounter} producto={producto} count={cantidad} visibilidad={habilitarAgregar} />
              </div>

              <Link to={{pathname:"/cart", state:[{producto:producto}, {cantidad:cantidad}]}}>
            <button className={mostrarFinalizar}>Finalizar Compra</button></Link>
            </div> 
            
             
             
        </div>
    )
}

export default ItemDetail 