import OrderForm from '../../components/OrderForm/OrderForm'
import React, {useEffect, useState} from 'react'
import './Checkout.css'
import { db } from '../../firebase';


const Checkout = () => {
    const [orders, setOrders] = useState([])
    const [orderID, setOrderID] = useState("")
    const add = async (a) => {
        await db.collection('orders').doc().set(a);
      };

    const getOrders = async () => {
          
      db.collection('orders').onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          setOrderID(doc.id)
          docs.push({ ...doc.data(), id: doc.id });
        });
        setOrders(docs);
      });
    };
    useEffect(() => {
        getOrders();
      }, []);
  

    return (
        <div className="divCheckout">
            <OrderForm  add={add} orders={orders} orderID={orderID}/>        

        </div>
    )
}

export default Checkout
