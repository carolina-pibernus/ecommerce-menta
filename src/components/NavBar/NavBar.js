import React, {useContext} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import CartWidgetFull from '../CartWidgetFull/CartWidgetFull'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { CartContext } from '../../context/CartContext/CartContext'


function NavBar () {
  const [articulos] = useContext(CartContext)
    return (
        <nav> 
          <ul>
            <Link to="/"><li>HOME</li></Link>
            <li className="menuProductos">PRODUCTOS
              <ul className="subMenu">
              <Link to="/productos"><li>VER CATEGORIAS</li></Link>   
              <Link to={{pathname:"/productos/vajilla", state:{categoria: "vajilla"}}}> <li>VAJILLA</li></Link>
              <Link to={{pathname:"/productos/teycafe", state:{categoria: "teycafe"}}}> <li>TE Y CAFE</li> </Link>
              <Link to={{pathname:"/productos/manteleria", state:{categoria: "manteleria"}}}><li>MANTELERIA</li> </Link> </ul>
            </li>
            <Link to="/Contacto"><li>CONTACTO</li></Link>
            <Link to="/cart"><li> {articulos.length > 0 ? <CartWidgetFull /> : <CartWidget />} </li></Link>
          </ul>
        </nav>
    )
}

export default NavBar