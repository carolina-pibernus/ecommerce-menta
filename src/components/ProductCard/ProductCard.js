import 'semantic-ui-css/semantic.min.css'
import Counter from '../Counter/Counter.js'
import { Card, Image } from 'semantic-ui-react'


function ProductCard ({imagenProducto, nombreProducto, precioProducto}) {
        return (
             <Card>
              <Image src={imagenProducto} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{nombreProducto}</Card.Header>
                <Card.Meta>
                 <span className='date'>{precioProducto}</span>
                </Card.Meta>
                <Counter />
              </Card.Content>
                              <button className='ui olive button'>Agregar al Carrito</button>

              
             </Card>
        )
    }


export default ProductCard