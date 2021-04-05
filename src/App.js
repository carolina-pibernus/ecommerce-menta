import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MENTA</h1>
        <NavBar/>
        <ItemListContainer greeting="¡Bienvenidx a tu bazar favorito!"/>
      </header>

    </div>
  );
}

export default App;
