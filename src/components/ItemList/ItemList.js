import Item from '../Item/Item'
import '../ItemListContainer/ItemListContainer.css'
import React from 'react'

const listado1 = [
        {nombre: "Tetera Yixing", precio:"$4500", imagen:"https://images-na.ssl-images-amazon.com/images/I/51DPPIPahsL._AC_SY450_.jpg", 
        id:1, categoria: "teycafe", descripcion:"Tetera de arcilla morada. 100% Artesanal"},
        {nombre: "Juego de Tazas", precio:"$3500", imagen:"https://images-na.ssl-images-amazon.com/images/I/71sDxT1pYNL._AC_SX569_.jpg", 
        id:2, categoria:"teycafe", descripcion: "Juego de Tazas de porcelana para té o café. 6 tazas y 6 platos. "}, 
        {nombre: "Mantel Cielo", precio:"$2100", imagen:"https://m.media-amazon.com/images/I/81qRik0HcgL._AC_UL320_.jpg", 
        id:3, categoria:"vajilla", descripcion: "Mantel 100% lino. Color Celeste, 1,90 x 1,10 mts"}, 
        {nombre: "Juego de Té", precio:"$5100", imagen:"https://images-na.ssl-images-amazon.com/images/I/61r4vGBSHEL._AC_SX679_.jpg", 
        id:4, categoria:"teycafe", descripcion: "Juego de té y/o café. Incluye tetera/cafetera, bandeja y 6 tazas."}
    ] 

const ItemList = (categoria) => {

    const productos = categoria.categoria === "todo" ? listado1 : listado1.filter((prod) => {
        return prod.categoria === categoria.categoria
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
