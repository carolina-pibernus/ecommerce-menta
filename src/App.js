import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
       <Switch>
         <Route path="/ItemListContainer" exact component={ItemListContainer}/>
         <Route path="/ItemDetailContainer" component={ItemDetailContainer} />
       </Switch>
      
    </div>
    </Router>
  );
}

export default App;
