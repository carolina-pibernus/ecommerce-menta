import ItemDetail from '../ItemDetail/ItemDetail'
import {Link} from 'react-router-dom'

function ItemDetailContainer () {
    return (
        <div>
            <ItemDetail />
            <Link to="/ItemListContainer"><button>Volver a Productos</button> </Link>
        </div>
        
    )
}

export default ItemDetailContainer