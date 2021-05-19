import 'semantic-ui-css/semantic.min.css'
import './Item.css'
import React from 'react'
import {Link} from 'react-router-dom'


function Item ({producto}) {  
        return (  
          <div className="itemLista">
            <Link to={{pathname:`/productos/${producto.categoryId}/${producto.id}`, state:{producto:producto}}}> 
             <div className="ui card">
               <div className="image">
              <img src={producto.image} alt="item"/>
              </div>
              <div className="content">
                <h4 className="tituloItem">{producto.title}</h4>
                <div className="meta">
                 <span className='precioItem'> $ {producto.price}</span>
                 </div>
                <button className='ui olive button compact'>Ver Detalle</button>

              </div>     
             </div>
             </Link>
          </div>   
        )
    }


export default Item