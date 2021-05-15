import React, {useContext, useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import './OrderForm.css'
import {CartContext} from '../../context/CartContext/CartContext'
import {UserContext} from '../../context/UserContext/UserContext'
import { ProductsContext } from '../../context/ProductsContext/ProductsContext'
import {db} from '../../firebase'

const initialValues = {
    payment: "mercadopago",
}

const OrderForm = ({add, setIsAdded}) => {
    const [articulos, setArticulos, cartTotal, cantidadItems]= useContext(CartContext)
    const products = useContext(ProductsContext)
    const [user] = useContext(UserContext)
    const [payment, setPayment] = useState(initialValues)
    const completeOrder = {
        buyerName: user.displayName,
        buyerPhone: user.phoneNumber,
        buyerEmail: user.email, 
        buyerUid: user.uid, 
        payment: payment.payment,
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
            console.log("Desconto")
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        add(completeOrder);
        setIsAdded(true)
        setPayment({ ...initialValues });
        setArticulos([])
        updateStock()
      }
    const handleOnChange = (e) => {
       const { name, value } = e.target;
       setPayment({ ...payment, [name]: value });
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
               
               <div className={articulos.length === 0 ? "disabled field" : "required field"}>
                   <label>Elegí el medio de Pago</label>
                <select required name="payment" value={payment.payment} onChange={handleOnChange}>
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
