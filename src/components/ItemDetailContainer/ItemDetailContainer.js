import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {Link} from 'react-router-dom'

const ItemDetailContainer = ({match}) => {
    const products = [
        {nombre: "Tetera Yixing", precio:"$4500", imagen:"https://images-na.ssl-images-amazon.com/images/I/51DPPIPahsL._AC_SY450_.jpg", id:1},
        {nombre: "Juego de Tazas", precio:"$3500", imagen:"https://images-na.ssl-images-amazon.com/images/I/71sDxT1pYNL._AC_SX569_.jpg", id:2}, 
        {nombre: "Mantel Cielo", precio:"$2100", imagen:"https://m.media-amazon.com/images/I/81qRik0HcgL._AC_UL320_.jpg", id:3}, 
        {nombre: "Juego de Té", precio:"$5100", imagen:"https://images-na.ssl-images-amazon.com/images/I/61r4vGBSHEL._AC_SX679_.jpg", id:4}
    ]
    const prodElegido = products.find((prod) => {
        return (prod.id == match.params.id)
    })
        
    return (
        <div>
            <ItemDetail producto={prodElegido}/>
            <Link to="/productos"><button>Volver a Productos</button> </Link>
        </div>
        
    )
}

export default ItemDetailContainer