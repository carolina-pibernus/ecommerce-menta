import React, {useContext} from 'react'
import { UserContext } from '../../context/UserContext/UserContext'
import { OrdersContext } from '../../context/OrdersContext/OrdersContext'
import OrderDetail from '../../components/OrderDetail/OrderDetail'

const Orders = () => {
    const [logged] = useContext(UserContext)
    const userOrders = useContext(OrdersContext)
    
    return (
        <div>
            <h3> Mis Compras</h3>

            {logged ? userOrders.map((order) => {
                return (
                    <div  key={order.id}>
                      <OrderDetail order={order} />
                     </div> 
                )
            }) : <h5>Aún no has realizado ninguna compra</h5> }
            
        </div>
    )
}

export default Orders


/*
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
    }); */