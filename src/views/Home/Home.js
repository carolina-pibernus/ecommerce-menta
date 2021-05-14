import React from 'react'
import './Home.css'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Home() {
    return (
        <div>
            <h3>¡Bienvenidx a tu bazar favorito!</h3>
       
            <ItemListContainer categoria="todo"/>
        </div>
    )
}

export default Home
