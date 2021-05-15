import React, {useContext, useState, useEffect} from 'react'
import {db} from '../../firebase'
import { UserContext } from '../../context/UserContext/UserContext'

const Orders = () => {
    const [user, logged] = useContext(UserContext)
    const [userOrders, setUserOrders] = useState([])
    const filterDocs = (docs) => {
        
        const userId = user.uid
        const filter = docs.filter((doc) => {
        return doc.buyerUid === userId
    })
    setUserOrders(filter)    }

    const getOrders = async () => {db.collection("orders")
    .get()
    .then((querySnapshot) => {
        const docs = []
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id : doc.id})
        }); filterDocs(docs)}) 
    .catch()}
    
    useEffect(() => {
        getOrders()
    }, []);

    
    return (
        <div>
            <h5> Mis Compras</h5>
            {logged ? userOrders.map((order) => {
                const products = order.detail
                return (
                <div key={order.id}>
                    <h5>Código de compra: {order.id}</h5> 
                    <div>{products.map((product) => {
                        return (
                     <ul key={product.producto.title}>
                        <li>{product.producto.title}</li>
                        <li> {product.producto.price} </li>
                        <li> {product.cantidad} </li>
                     </ul> )

                    }) }
                    </div>
                    <h5> Total de compra: {order.total}</h5>
                </div>
                )
            }) : <h5>Aún no has realizado ninguna compra</h5> }
            
        </div>
    )
}

export default Orders
