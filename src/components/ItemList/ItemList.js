import Item from '../Item/Item'
import '../ItemListContainer/ItemListContainer.css'
import React, {useContext} from 'react'
import {ProductsContext} from '../../context/ProductsContext/ProductsContext'


const ItemList = (categoria) => {
    const listaProd = useContext(ProductsContext)  
    const productos = categoria.categoria === "todo" ? listaProd : listaProd.filter((prod) => {
        return prod.categoryId === categoria.categoria
    })

    return (
       
           <div className="listado">
                {productos.map((producto) => {
                     return (
                   <Item producto={producto} key={producto.id}/>

                     )})}
            </div>
       
    )
}    
export default ItemList
