import 'semantic-ui-css/semantic.min.css'
import '../ItemListContainer/ItemListContainer.css'
import Counter from '../Counter/Counter.js'
import { Card, Image } from 'semantic-ui-react'


function Item ({producto}) {
        return (  
          <div className="itemLista">
             <Card>
              <Image src={producto.imagen} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{producto.nombre}</Card.Header>
                <Card.Meta>
                 <span className='date'>{producto.precio}</span>
                </Card.Meta>
                <Counter />
              </Card.Content>
              <button className='ui olive button'>Agregar al Carrito</button>
             
             </Card>
          </div>   
        )
    }


export default Item