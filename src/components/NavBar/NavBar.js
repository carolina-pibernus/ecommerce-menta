import CartWidget from '../CartWidget/CartWidget'

function NavBar () {
    return (
        <nav> 
          <ul>
            <li><a href="https://www.google.com/">HOME</a></li>
            <li><a href="https://www.google.com/">VAJILLA</a></li>
            <li><a href="https://www.google.com/">UTENSILIOS</a></li>
            <li><a href="https://www.google.com/">DECO</a></li>
            <li><a href="https://www.google.com/">ACCESORIOS</a></li>
            <li><a href="https://www.google.com/">CONTACTO</a></li>
            <li><a href="https://www.google.com/"> <CartWidget /> </a></li>
          </ul>
        </nav>
    )
}

export default NavBar