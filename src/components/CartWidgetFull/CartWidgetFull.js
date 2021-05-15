import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext/CartContext'
import FullCartIcon from "./FullCartIcon.svg"

function CartWidgetFull (){
    const cart = useContext(CartContext)
    return (
        <div>
        <img src={FullCartIcon} alt="Icono Cart"/>
        <p> ( {cart[3]} ) </p>
        </div>
    )
}
export default CartWidgetFull