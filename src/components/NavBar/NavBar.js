import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
import './NavBar.css'


function NavBar () {
    return (
        <nav> 
          <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/productos"> <li>PRODUCTOS</li> </Link>
            <Link to="/Contacto"><li>CONTACTO</li></Link>
            <Link to={{pathname:"/cart", state:[{producto:[]}, {cantidad:[]}]}}><li> <CartWidget /> </li></Link>
          </ul>
        </nav>
    )
}

export default NavBar