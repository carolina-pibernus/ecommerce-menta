import ItemList from '../ItemList/ItemList'
import React from 'react'
import {useLocation} from 'react-router-dom'

function ItemListContainer (categoria) {
    
    const location= useLocation()
    const cat = categoria.categoria === "todo" ? "todo" : location.state.categoria

    return (
        <div>
            <ItemList categoria={cat} />
        </div>
    )
}
export default ItemListContainer

