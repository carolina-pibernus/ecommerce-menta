import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contacto from './components/Contacto/Contacto'
import Cart from './components/Cart/Cart'
import {CartProvider} from './components/CartContext/CartContext'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <Router>
      <CartProvider>
    <div className="App">
      <Header/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/Contacto" component={Contacto}/>
         <Route path="/productos" exact component={ItemListContainer}/>
         <Route path="/productos/:id/:id" component={ItemDetailContainer} />
         <Route path="/cart" component={Cart} />
       </Switch>
       <Footer/>
    </div>
    </CartProvider>
    </Router>
  );
}

export default App;
