import React from 'react'
import './Home.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function Home() {
    return (
        <div>
            <h3>¡Bienvenidx a tu bazar favorito!</h3>
            <p>Encontrá todo lo que necesitas para refrescar con estilo tu cocina y tu mesa</p>
       
            <ItemListContainer categoria="todo"/>
        </div>
    )
}

export default Home
