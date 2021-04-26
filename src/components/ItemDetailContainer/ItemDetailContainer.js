import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useLocation} from 'react-router-dom'

export const ItemDetailContainer = () => {
    const location= useLocation()
    return (
        <div>
            <ItemDetail propiedad={location.state.producto} />
        </div>
    )
}

