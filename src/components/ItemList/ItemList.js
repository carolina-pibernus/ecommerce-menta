import Item from '../Item/Item'
import '../ItemListContainer/ItemListContainer.css'
import React, { Component } from 'react'

const listado1 = [
        {nombre: "Tetera Yixing", precio:"$4500", imagen:"https://images-na.ssl-images-amazon.com/images/I/51DPPIPahsL._AC_SY450_.jpg", id:1},
        {nombre: "Juego de Tazas", precio:"$3500", imagen:"https://images-na.ssl-images-amazon.com/images/I/71sDxT1pYNL._AC_SX569_.jpg", id:2}, 
        {nombre: "Mantel Cielo", precio:"$2100", imagen:"https://m.media-amazon.com/images/I/81qRik0HcgL._AC_UL320_.jpg", id:3}, 
        {nombre: "Juego de Té", precio:"$5100", imagen:"https://images-na.ssl-images-amazon.com/images/I/61r4vGBSHEL._AC_SX679_.jpg", id:4}
    ]   
export default class ItemList extends Component {
    constructor () {
        super();
        this.state = {
            productos: []
        }
    }
    componentDidMount () {
        setTimeout(() => {
            this.setState({
                productos: listado1,
            })
        }, 2500);
    }
    render() {
        return (
            <div className="listado">
                {this.state.productos.map((producto) => {
                     return (
                <Item producto={producto} key={producto.id} />

                     )})}
            </div>
        )
    }
}