import React from 'react'
import {useLocation} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'


const Cart = () => {
    const location = useLocation()
    const producto = location.state[0].producto
    const cantidad = location.state[1].cantidad
    const total = producto.precio * cantidad
    return (
        <div>
            <h5>Carrito de compras</h5>
            <h4>Producto: {producto.nombre}</h4>
            <h6>Precio por unidad: $ {producto.precio}</h6>
            <h6>Cantidad: {cantidad}</h6>
            
            <h5>Total a pagar: $ {total}</h5>
            <button className="ui button teal">Confirmar Compra</button>
        </div>
    )
}

export default Cart
