import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ProductCard from './components/ProductCard/ProductCard'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MENTA</h1>
        <NavBar/>
        <ItemListContainer greeting="¡Bienvenidx a tu bazar favorito!"/>
      </header>
      <div className="DivProductCards">
       <ProductCard nombreProducto="Tetera Yixing" precioProducto="$4500" imagenProducto="https://images-na.ssl-images-amazon.com/images/I/51DPPIPahsL._AC_SY450_.jpg"/>
       <ProductCard nombreProducto="Juego de Café" precioProducto="$5000" imagenProducto="https://images-na.ssl-images-amazon.com/images/I/71sDxT1pYNL._AC_SX569_.jpg"/> 
       <ProductCard nombreProducto="Mantel Cielo" precioProducto="$2100" imagenProducto="https://m.media-amazon.com/images/I/81qRik0HcgL._AC_UL320_.jpg"/> 
      </div>
    </div>
  );
}

export default App;
