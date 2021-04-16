import React from 'react'

function ItemDetail ({propiedad}) {
    return(
        <div>
            <h3>{propiedad.nombre}</h3>
            <img src={propiedad.imagen} alt="imagen producto" />
            <h5> {propiedad.precio} </h5>
            <p>Tetera Yixing de arcilla morada. Realizada a mano, 100% artesanal. </p>
        </div>
    )
}

export default ItemDetail 