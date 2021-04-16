import React from 'react'

function ItemDetail ({producto}) {
    return(
        <div>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt="imagen producto" />
            <h5> {producto.precio} </h5>
            <p>Tetera Yixing de arcilla morada. Realizada a mano, 100% artesanal. </p>
        </div>
    )
}

export default ItemDetail 