import React, {useState, createContext} from 'react'


export const CartContext = createContext()


export const CartProvider = (props) => {
    const [articulos, setArticulos] = useState([])
    const cartTotal =  articulos.reduce((currentTotal, articulo) =>{
        return (articulo.cantidad * articulo.producto.price) + currentTotal}, 0)
    const cantidadItems = articulos.reduce((currentTotal, articulo) =>{
        return articulo.cantidad + currentTotal}, 0) 
    return (
        <CartContext.Provider value={[articulos, setArticulos, cartTotal, cantidadItems]}> {props.children} </CartContext.Provider>
    )
}

