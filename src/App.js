import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Home from './views/Home/Home'
import Productos from './views/Productos/Productos'
import Contacto from './views/Contacto/Contacto'
import Cart from './views/Cart/Cart'
import Orders from './views/Orders/Orders'
import Checkout from './views/Checkout/Checkout'
import LogIn from './views/LogIn/LogIn'

import {CartProvider} from './context/CartContext/CartContext'
import {ProductsProvider} from './context/ProductsContext/ProductsContext'
import { UserProvider } from './context/UserContext/UserContext'
import { OrdersProvider} from './context/OrdersContext/OrdersContext'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'

import './App.css';


function App() {
  return (
    <Router>
      <ProductsProvider>
      <CartProvider>
         <UserProvider>
           <OrdersProvider>
         
        
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
         <Route path="/login" component={LogIn} />
         <Route path="/orders" component={Orders} />


       </Switch>
       <Footer/>
    </div>
    </OrdersProvider>
    </UserProvider> 
     </CartProvider>
    </ProductsProvider>
    
    </Router>
  );
}

export default App;
