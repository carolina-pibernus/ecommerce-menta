import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../CartContext/CartContext'
import RemoveItem from '../RemoveItem/RemoveItem'
import ClearCart from '../ClearCart/ClearCart'
import 'semantic-ui-css/semantic.min.css'
import './Cart.css'


const Cart = () => {
   const [articulos, setArticulos]= useContext(CartContext)

   const total = articulos.reduce((currentTotal, articulo) =>{
     return (articulo.cantidad * articulo.producto.precio) + currentTotal}, 0)
   const cantidadItems = articulos.reduce((currentTotal, articulo) =>{
     return articulo.cantidad + currentTotal}, 0)  
       
    return (
        <div>
          <h3>Tu Carrito</h3>

         {articulos.map((articulo)=> {
             const subtotal = articulo.cantidad * articulo.producto.precio
             return(
              <div key={articulo.producto.id} className="itemCart">
           
                <h4 className="itemName">Producto: {articulo.producto.nombre}</h4>
                <ul className="itemDescription">
                  <li>Precio por unidad: $ {articulo.producto.precio}</li>
                  <li>Cantidad: {articulo.cantidad}</li>
                  <li>Subtotal: $ {subtotal}</li>
                </ul>
                <RemoveItem articulo={articulo} className="botonRemove"/>
                
              </div>  
             )
         })}
          <h4>{articulos.length > 0 ? `Cantidad de Items: ${cantidadItems}` : null}</h4>
          <h4>{articulos.length === 0 ? "Aún no sumaste productos" : `Total de compra: ${total}`} </h4>
          {articulos.length === 0 ? <Link to="/productos"><button className="ui button teal">Ir a Productos</button></Link> : <ClearCart/>}

        </div>
    )
}

export default Cart
