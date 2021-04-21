import React, { useContext, useState } from 'react'
import {CartContext} from '../CartContext/CartContext'
import RemoveItem from '../RemoveItem/RemoveItem'
import ClearCart from '../ClearCart/ClearCart'
import 'semantic-ui-css/semantic.min.css'
import './Cart.css'


const Cart = () => {
   const [articulos, setArticulos]= useContext(CartContext)
   const [total, setTotal] = useState(0)
   const ver = articulos.length === 0 ? "Aún no sumaste productos" : <ClearCart/>
       
    return (
        <div>
          <h3>Tu Carrito</h3>

         {articulos.map((articulo)=> {
             const subtotal = articulo.cantidad * articulo.producto.precio
             return(
              <div key={articulo.producto.id} className="itemCart">
           
                <h4>Producto: {articulo.producto.nombre}</h4>
                <h6>Precio por unidad: $ {articulo.producto.precio}</h6>
                <h6>Cantidad: {articulo.cantidad}</h6>
                
                <h5>Subtotal: $ {subtotal}</h5>
                <RemoveItem articulo={articulo}/>
                
              </div>  
             )
         })}
          {ver}
        </div>
    )
}

export default Cart

/*
    const location = useLocation()
    const producto = location.state[0].producto
    const cantidad = location.state[1].cantidad
    const total = producto.precio * cantidad

<p>{articulos[0].producto.nombre}</p>
            <h5>Carrito de compras</h5>
            <h4>Producto: {articulos[0].producto.nombre}</h4>
            <h6>Precio por unidad: $ {articulos[0].producto.precio}</h6>
            <h6>Cantidad: {cantidad}</h6>
            
            <h5>Total a pagar: $ {total}</h5>
            <button className="ui button teal">Confirmar Compra</button>

            */