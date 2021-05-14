import OrderForm from '../../components/OrderForm/OrderForm'
import React, {useState, useContext} from 'react'
import './Checkout.css'
import { db } from '../../firebase';

const Checkout = () => {
    const [orderID, setOrderID] = useState("")
    const [isAdded, setIsAdded] = useState(false)
    const add = async (a) => {
      await db.collection('orders').add(a).then(({id}) => {
        setOrderID(id)
      })  };
    const processId = orderID !== "" ? <div> <h3>¡Gracias por tu compra!</h3> 
    <h5>Tu código de orden es  {orderID}  </h5>
        <button>ver detalles</button> </div> : <div className="ui active inverted dimmer">
    <div className="ui text loader">Estamos procesando tu pedido</div> </div>
    
        return (
        <div className="divCheckout segment">
          {isAdded ? processId : <OrderForm  add={add} setIsAdded={setIsAdded}/> }          
        </div>
    )
}

export default Checkout
