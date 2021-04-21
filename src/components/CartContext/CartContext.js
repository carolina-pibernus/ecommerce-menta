import React, {useState, createContext} from 'react'


export const CartContext = createContext()


export const CartProvider = (props) => {
    const [articulos, setArticulos] = useState([])
    return (
        <CartContext.Provider value={[articulos, setArticulos]}> {props.children} </CartContext.Provider>
    )
}

