import React, {useState, useContext}  from 'react'
import Counter from '../Counter/Counter.js'
import '../ItemDetailContainer/ItemDetailContainer.css'
import {Button, LinkButton} from '../Buttons/Buttons'
import {CartContext} from '../../context/CartContext/CartContext'


function ItemDetail ({propiedad}) {
const [articulos, setArticulos] = useContext(CartContext)
const producto = propiedad    
const [cantidad, setCantidad] = useState(0)
const [verCounter, setVerCounter] = useState("visible")
const existeEnCarrito = articulos.some((articulo)=> {return articulo.producto.id === producto.id})
const onAdd = !existeEnCarrito ? ()=>{
    setVerCounter("oculto")
    setArticulos(prevArticulos => [...prevArticulos, {producto: producto, cantidad: cantidad}])} : null
const mostrarFinalizar = verCounter === "oculto" ? "ui button teal" : "ocultar"
    return(
        <div className="itemDetail">
            <h3 className="itemNombre">{propiedad.title}</h3>
            <img src={propiedad.image} alt="imagen producto" className="fotoDetalle" />
            <div className="contenedorPropiedades">
            <h5> $ {propiedad.price} </h5>
            <p> {propiedad.description}</p>
           
              <div className={verCounter}> 
              <Counter setear={setCantidad} producto={producto} verCounter={verCounter}/>
              <Button click={onAdd} text="Agregar al Carrito" classes={`ui button olive ${cantidad >= 1 ? "active" : "disabled"}`} />
              </div>

              <LinkButton linkTo={{pathname:"/cart", state:[{producto:producto}, {cantidad:cantidad}]}} classes={mostrarFinalizar} text="Finalizar Compra" />
              <p> {existeEnCarrito ? "ITEM AGREGADO" : null} </p>
            </div> 
            
             
             
        </div>
    )
}
/*
const [articulos, setArticulos] = useContext(CartContext)
const [error, setError] = useState("")
const pasarData = () => {
      articulos.some((articulo)=> {
      return articulo.producto.id === producto.id}) === false ? noEncontro() : setError("YA AGREGASTE ESTE ITEM")}
  
const noEncontro = () => {
        setVerCounter("oculto")
        setArticulos(prevArticulos => [...prevArticulos, {producto: producto, cantidad: count}])
}
              <BotonAdd verCounter={verCounter} setVerCounter={setVerCounter} producto={producto} count={cantidad} visibilidad={habilitarAgregar} />
*/
export default ItemDetail 