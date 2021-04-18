import 'semantic-ui-css/semantic.min.css'
import '../ItemListContainer/ItemListContainer.css'
import {Link} from 'react-router-dom'
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
                <Link to={{pathname:`/productos/${producto.categoria}/${producto.id}`, state:{producto:producto}}}> <button className='ui olive button'>Ver Detalle</button> </Link>

              </Card.Content>     
             </Card>
          </div>   
        )
    }


export default Item