import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Productos from './views/Productos/Productos'
import Contacto from './views/Contacto/Contacto'
import Cart from './views/Cart/Cart'
import {CartProvider} from './context/CartContext/CartContext'
import {ProductsProvider} from './context/ProductsContext/ProductsContext'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';
import Checkout from './views/Checkout/Checkout'


function App() {
  return (
    <Router>
      <ProductsProvider>
      <CartProvider>
        
    <div className="App">
      <Header/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/Contacto" component={Contacto}/>
         <Route path="/productos" exact component={Productos}/>
         <Route path="/productos/:id" exact component={ItemListContainer} />
         <Route path="/productos/:id/:id" component={ItemDetailContainer} />
         <Route path="/cart" component={Cart} />
         <Route path="/checkout" component={Checkout}/>
       </Switch>
       <Footer/>
    </div>
    </CartProvider>
    </ProductsProvider>
    </Router>
  );
}

export default App;
