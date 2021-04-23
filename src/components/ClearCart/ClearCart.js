import React, {useContext} from 'react'
import {CartContext} from '../CartContext/CartContext'
import 'semantic-ui-css/semantic.min.css'



const ClearCart = () => {
    const [articulos, setArticulos] = useContext(CartContext)
    const eliminar = () => {
        setArticulos([])
    }


    return (
        <div>
            <button className="ui button classic" onClick={eliminar}>Eliminar Todo</button>
        </div>
    )
}

export default ClearCart
