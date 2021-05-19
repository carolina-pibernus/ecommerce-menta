import React, {useContext, useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import './CheckoutForm.css'
import {CartContext} from '../../context/CartContext/CartContext'
import {UserContext} from '../../context/UserContext/UserContext'
import { ProductsContext } from '../../context/ProductsContext/ProductsContext'
import {db} from '../../firebase'
import { LinkButton } from '../Buttons/Buttons'

const initialValues = {
    payment: "Mercado Pago",
    phone: "",
}

const CheckoutForm = ({add, setIsAdded}) => {
    const [articulos, setArticulos, cartTotal, cantidadItems]= useContext(CartContext)
    const products = useContext(ProductsContext)
    const [logged, user] = useContext(UserContext)
    const [values, setValues] = useState(initialValues)
    const completeOrder = {
        buyerName: user.displayName,
        buyerEmail: user.email, 
        buyerUid: user.uid, 
        buyerPhone: values.phone,
        payment: values.payment,
        total: cartTotal,
        totalItems: cantidadItems, 
        detail: articulos,
        date: Date()
    }
    const batch = db.batch()
    const updateStock = () => {
        articulos.forEach((articulo) => {
            const idArticulo = articulo.producto.id
            const product = products.find((prod) => {
                return prod.id === idArticulo
            })
            const newStock = product.stock - articulo.cantidad
            const item = db.collection("items").doc(idArticulo);
            batch.update(item, {"stock": newStock});
        })
        batch.commit().then(() => {
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        add(completeOrder);
        setIsAdded(true)
        setValues({ ...initialValues });
        setArticulos([])
        updateStock()
      }
    const handleOnChange = (e) => {
       const { name, value } = e.target;
       setValues({ ...values, [name]: value });
      };  
    return (
        <div className="divForm">
        { logged ? 
        <div>
            <h3>Completa tu compra</h3>
            <div className="userData">
                <h5 className="userName">Comprador: {user.displayName}</h5>
                <h5>Recibiras el detalle de tu compra en: {user.uid}</h5>
            </div>
            <form className="ui form checkoutForm" onSubmit={handleSubmit}>
               
               <div className={articulos.length === 0 ? "disabled field" : "required field"}>
                   <label> Ingresa un numero de contacto</label>
                   <input placeholder="Número de teléfono" onChange={handleOnChange} name="phone" type="tel" required minLength={8} maxLength={10}/>

                   <label>Elegí el medio de Pago</label>
                <select required name="payment" value={values.payment} onChange={handleOnChange}>
                    <option value="Mercado Pago">Mercado Pago</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                </select>
               </div> 

             <div className="total">
              <h4>Cantidad de articulos: {cantidadItems}</h4>
              <h4>Total de compra: $ {cartTotal} </h4>
             </div>
               <button className={`ui button olive ${articulos.length === 0 && "disabled"}`}>Confirmar Pedido</button>
            </form> 
            
        </div> : <div><h5> Ingresa al sitio para poder comprar </h5> <LinkButton linkTo="/login" classes="ui button classic" text="Ingresar"/></div> }
        </div>
    )
}

export default CheckoutForm
