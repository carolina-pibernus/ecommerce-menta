import Item from '../Item/Item'
import '../ItemListContainer/ItemListContainer.css'
import React, {useContext} from 'react'
import {ProductsContext} from '../../context/ProductsContext/ProductsContext'


const ItemList = ({categoria}) => {
    const productos = useContext(ProductsContext)  
    const listaProductos = categoria === "todo" ? productos : productos.filter((prod) => {
        return prod.categoryId === categoria
    })

    return (
       
           <div className="listado">
                {listaProductos.map((producto) => {
                     return (
                   <Item producto={producto} key={producto.id}/>

                     )})}
            </div>
       
    )
}    
export default ItemList
