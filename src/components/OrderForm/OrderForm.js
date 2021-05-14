import React, {useContext, useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import './OrderForm.css'
import {CartContext} from '../../context/CartContext/CartContext'
import {UserContext} from '../../context/UserContext/UserContext'


const initialValues = {
    name: "",
    email: "", 
    phone: "",
    payment: "mercadopago",
}

const OrderForm = ({add, setIsAdded}) => {
    const [articulos, setArticulos, cartTotal, cantidadItems]= useContext(CartContext)
    const [user] = useContext(UserContext)
    
    const [values, setValues] = useState(initialValues)
    const disableField = articulos.length === 0 ? "disabled field" : "required field"
    const completeOrder = {
        buyerName: user.displayName,
        buyerPhone: user.phoneNumber,
        buyerEmail: user.email, 
        buyerUid: user.uid, 
        total: cartTotal,
        totalItems: cantidadItems, 
        detail: articulos,
        date: Date()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        add(completeOrder);
        setIsAdded(true)
        setValues({ ...initialValues });
        setArticulos([])
      }
    const handleOnChange = (e) => {
       const { name, value } = e.target;
       setValues({ ...values, [name]: value });
      };  

    return (
        <div className="divForm">
            <h4>Revisa tus datos</h4>
            <div>
                <h5>Comprador: {user.displayName}</h5>
                <h5>Mail: {user.uid}</h5>
                <h5>Teléfono: </h5>
            </div>
            <form className="ui form" onSubmit={handleSubmit}>
               
               <div className={disableField}>
                   <label>Elegí el medio de Pago</label>
                <select required name="payment" value={values.payment} onChange={handleOnChange}>
                    <option value="mercadopago">Mercado Pago</option>
                    <option value="efectivo">Efectivo</option>
                    <option value="transferencia">Transferencia</option>
                </select>
               </div> 

             <div>
              <h4>Cantidad de articulos: {cantidadItems}</h4>
              <h4>Total de compra: $ {cartTotal} </h4>
             </div>
               <button className={`ui button olive ${articulos.length === 0 && "disabled"}`}>Confirmar Pedido</button>
            </form> 
            
        </div>
    )
}

export default OrderForm


/*
<div className={disableField}>
                <label>Nombre y Apellido: </label>
                <input  required type="text" name="name" value={values.name} onChange={handleOnChange}/>
               </div> 
               <div className={disableField}>
                <label>E-mail:</label>
                <input required type="email" name="email" value={values.email} onChange={handleOnChange}/>
               </div> 
               <div className={disableField}>
                <label>Teléfono:</label>
                <input required type="number" name="phone" value={values.phone} onChange={handleOnChange}/>
               </div> 
               */