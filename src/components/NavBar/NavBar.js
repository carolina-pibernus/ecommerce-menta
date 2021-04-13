import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'


function NavBar () {
    return (
        <nav> 
          <ul>
            <li><a href="https://www.google.com/">HOME</a></li>
            <Link to="/ItemListContainer"> <li>PRODUCTOS</li> </Link>
            <li><a href="https://www.google.com/">SOBRE MENTA</a></li>
            <li><a href="https://www.google.com/">CONTACTO</a></li>
            <li><a href="https://www.google.com/"> <CartWidget /> </a></li>
          </ul>
        </nav>
    )
}

export default NavBar