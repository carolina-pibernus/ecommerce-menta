import React, {useContext} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import CartWidgetFull from '../CartWidgetFull/CartWidgetFull'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { CartContext } from '../CartContext/CartContext'


function NavBar () {
  const [articulos] = useContext(CartContext)
    return (
        <nav> 
          <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/productos"> <li>PRODUCTOS</li> </Link>
            <Link to="/Contacto"><li>CONTACTO</li></Link>
            <Link to="/cart"><li> {articulos.length > 0 ? <CartWidgetFull /> : <CartWidget />} </li></Link>
          </ul>
        </nav>
    )
}

export default NavBar