import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext/CartContext'
import FullCartIcon from "./FullCartIcon.svg"
import './CartWidgetFull.css'

function CartWidgetFull (){
    const cart = useContext(CartContext)
    return (
        <div className="cartWidgetFull">
        <img src={FullCartIcon} alt="Icono Cart"/>
        <span> {cart[3]}  </span>
        </div>
    )
}
export default CartWidgetFull