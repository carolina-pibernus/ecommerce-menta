import 'semantic-ui-css/semantic.min.css'
import '../ItemListContainer/ItemListContainer.css'
import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'



function Item ({producto}) {  
        return (  
          <div className="itemLista">
            <Link to={{pathname:`/productos/${producto.categoria}/${producto.id}`, state:{producto:producto}}}> 
             <Card>
              <Image src={producto.imagen} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{producto.nombre}</Card.Header>
                <Card.Meta>
                 <span className='date'>{producto.precio}</span>
                </Card.Meta>
                <button className='ui olive button'>Ver Detalle</button>

              </Card.Content>     
             </Card>
             </Link>
          </div>   
        )
    }


export default Item