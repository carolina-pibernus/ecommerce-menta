import Item from '../Item/Item'
import '../ItemList/ItemList.css'
import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
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
                   <div className="itemLista" key={producto.id}>    
                   <Link to={{pathname:`/productos/${producto.categoryId}/${producto.id}`, state:{producto:producto}}} >
                     <Item producto={producto}/>
                   </Link>
                   </div>

                     )})}
            </div>
       
    )
}    
export default ItemList
