import React, {useContext, useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import './OrderForm.css'
import {CartContext} from '../../context/CartContext/CartContext'

const initialValues = {
    name: "",
    email: "", 
    phone: "",

}

const OrderForm = ({add, orders, orderID}) => {
    const [articulos, setArticulos]= useContext(CartContext)
    const total = articulos.reduce((currentTotal, articulo) =>{
        return (articulo.cantidad * articulo.producto.price) + currentTotal}, 0)
    const cantidadItems = articulos.reduce((currentTotal, articulo) =>{
        return articulo.cantidad + currentTotal}, 0) 
    const [values, setValues] = useState(initialValues)
    const [compra, setCompra] = useState(false)  

    const completeOrder = {
        buyer: values, 
        total: total,
        detail: articulos,
        date: Date()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        add(completeOrder);
        setValues({ ...initialValues });
        setCompra(true)
        setArticulos([])
      }
    const handleOnChange = (e) => {
       const { name, value } = e.target;
       setValues({ ...values, [name]: value });
      };  


    return (
        <div className="divForm">
           {compra ? <div> 
               <h3>¡Gracias por tu compra!</h3> 
               <h5>Tu código de orden es   {orderID}</h5>
               </div> : 
            <div> <h4>Completá tus datos </h4>
            <form className="ui form" onSubmit={handleSubmit}>
               <div className="required field">
                <label>Nombre y Apellido: </label>
                <input required type="text" name="name" value={values.name} onChange={handleOnChange}/>
               </div> 
               <div className="required field">
                <label>E-mail:</label>
                <input required type="email" name="email" value={values.email} onChange={handleOnChange}/>
               </div> 
               <div className="required field">
                <label>Teléfono:</label>
                <input required type="number" name="phone" value={values.phone} onChange={handleOnChange}/>
               </div> 

             <div>
              <h4>Cantidad de articulos: {cantidadItems}</h4>
              <h4>Total de compra: $ {total} </h4>
             </div>
               <button className="ui button olive" >Confirmar Compra</button>
            </form> </div> }
            
        </div>
    )
}

export default OrderForm
