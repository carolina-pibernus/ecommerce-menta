import React, {createContext, useEffect, useState} from 'react'
import {db} from '../../firebase'


export const ProductsContext = createContext()

export const ProductsProvider = (props) => {
    const [productos, setProductos] = useState([])
    const getProductos = async () => {
        db.collection('items').onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id : doc.id})
            })
            setProductos(docs)
        })
    }
    useEffect(() => {
        getProductos()
    }, [])

    return (
        <ProductsContext.Provider value={productos}> {props.children} </ProductsContext.Provider>
    )
}
