import React, {createContext} from 'react'


export const ProductsContext = createContext()

export const ProductsProvider = (props) => {
    const productos = [{nombre: "Tetera Yixing", precio:4500, imagen:"https://images-na.ssl-images-amazon.com/images/I/51DPPIPahsL._AC_SY450_.jpg", 
    id:1, stock: 5, categoria: "teycafe", descripcion:"Tetera de arcilla morada. 100% Artesanal"},
    {nombre: "Juego de Tazas", precio:3500, imagen:"https://images-na.ssl-images-amazon.com/images/I/71sDxT1pYNL._AC_SX569_.jpg", 
    id:2, stock: 5, categoria:"teycafe", descripcion: "Juego de Tazas de porcelana para té o café. 6 tazas y 6 platos. "}, 
    {nombre: "Mantel Cielo", precio:2100, imagen:"https://m.media-amazon.com/images/I/81qRik0HcgL._AC_UL320_.jpg", 
    id:3, stock: 3, categoria:"manteleria", descripcion: "Mantel 100% lino. Color Celeste, 1,90 x 1,10 mts"}, 
    {nombre: "Mantel Stripes", precio:2200, imagen:"https://images-na.ssl-images-amazon.com/images/I/71IVRoczVFL._AC_SL1500_.jpg", 
    id:4, stock: 4, categoria:"manteleria", descripcion: "Mantel Stripes con borlas. Color Verde, Celeste y Natural. Medidas de 2,20 x 1,40 mts"},
    {nombre: "Juego de Té", precio:5100 , imagen:"https://images-na.ssl-images-amazon.com/images/I/61r4vGBSHEL._AC_SX679_.jpg", 
    id:5, stock: 6, categoria:"teycafe", descripcion: "Juego de té y/o café. Incluye tetera/cafetera, bandeja y 6 tazas."}, 
    {nombre:"Set Bel Tempo", precio:7500, imagen:"https://images-na.ssl-images-amazon.com/images/I/814ughhpXRL._AC_SX679_.jpg", 
    id:6, stock: 2, categoria:"vajilla", descripcion:"Set de vajilla modelo Bel Tempo. Este moderno juego de vajilla rústica en color azul ahumado se compone de 6 platos llanos, 6 platos de postre y 6 prácticos cuencos multiusos (se pueden utilizar como cuencos de cereales, ensaladera y platos hondos) (18 piezas en total)" }, 
    {nombre:"Set Stone Lain", precio:6300, imagen:"https://images-na.ssl-images-amazon.com/images/I/81uA%2BIVnJcL._AC_SL1500_.jpg",
    id:7, stock: 4, categoria:"vajilla", descripcion:"Set de vajilla modelo Stone Lain.  incluye 4 platos redondos, 4 platos de ensalada, 4 cuencos y 4 tazas con asa. Todo con un diseño de borde posmoderno."}, 
    {nombre:"Set Classic", precio:7500, imagen:"https://images-na.ssl-images-amazon.com/images/I/61ZLaYTQKpL._AC_SL1500_.jpg", 
    id:8, stock:3, categoria:"vajilla", descripcion: "Vajilla de loza, 30 piezas, vajilla para 6 personas. Contiene 6 cuencos, platos llanos, cuencos para salsas y palillos, color blanco con virola negra"}
] 
    return (
        <ProductsContext.Provider value={productos}> {props.children} </ProductsContext.Provider>
    )
}