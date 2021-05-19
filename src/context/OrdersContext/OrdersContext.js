import React, {useState, useContext, useEffect, createContext} from 'react'
import { UserContext } from '../UserContext/UserContext'
import {db} from '../../firebase'

export const OrdersContext = createContext()


export const OrdersProvider = (props) => {
 const [logged, user] = useContext(UserContext)
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
     if (logged){
     getOrders()}
 });

 return (
    <OrdersContext.Provider value={userOrders}> {props.children} </OrdersContext.Provider>
)
}