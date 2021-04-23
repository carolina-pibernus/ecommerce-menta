import React, {useContext, useState}from 'react'
import 'semantic-ui-css/semantic.min.css'
import {CartContext} from '../CartContext/CartContext'


export const BotonAdd = ({verCounter, setVerCounter, producto, count, visibilidad}) => {
    const [articulos, setArticulos] = useContext(CartContext)
    const [error, setError] = useState("")
    const pasarData = () => {
        articulos.some((articulo)=> {
          return articulo.producto.id === producto.id}) === false ? noEncontro() : setError("YA AGREGASTE ESTE ITEM")}
      
    const noEncontro = () => {
            setVerCounter("oculto")
            setArticulos(prevArticulos => [...prevArticulos, {producto: producto, cantidad: count}])
    }
    return (
        <div>
        <button className={`ui olive button ${visibilidad} ${verCounter}`}  onClick={pasarData}>Agregar al Carrito</button> 
        <p>{error}</p>
        </div>
    )
}
