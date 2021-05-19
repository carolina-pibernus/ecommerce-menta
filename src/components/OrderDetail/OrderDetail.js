import React from 'react'
import './OrderDetail.css'

const OrderDetail = ({order}) => {
    
    const products = order.detail
    const splitDate = (order.date).split(" ")
    const orderDate = (splitDate[2] + " " + splitDate[1] + " " + splitDate[3])
   
    return (
        
                <div className="order">
                    <h5 className="orderID">Compra: {order.id}</h5> 
                    <h5 className="orderDate"> {orderDate}</h5>
                    <div>{products.map((product) => {
                        return (
                     <ul key={product.producto.title} className="orderDescription">
                        <li>{product.producto.title} (x {product.cantidad})</li>
                        <li>$ {product.producto.price} (por unidad) </li>
                     </ul> )

                    }) }
                    </div>
                    <ul className="orderTotal">
                        <li>Total: $ {order.total}</li>
                        <li>Medio de Pago: {order.payment}</li>
                    </ul>
                    
                </div>
                            
        
    )
}


export default OrderDetail
