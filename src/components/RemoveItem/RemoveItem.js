import React, { useContext } from 'react'
import {CartContext} from '../CartContext/CartContext'
import 'semantic-ui-css/semantic.min.css'


const RemoveItem = (articulo) => {
    const [articulos, setArticulos] = useContext(CartContext)
    const filtrarItems = articulos.filter((art) => {
        return art !== articulo.articulo
    })
    const eliminar = () => {
        setArticulos(filtrarItems)

    }
    return (
        <div>
            <button className="ui button classic" onClick={eliminar}>Eliminar Item</button>
        </div>
    )
}

export default RemoveItem