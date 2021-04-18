import ItemList from '../ItemList/ItemList'
import React, {useState} from 'react'

function ItemListContainer () {
   const [categoria, setCategoria] = useState("todo")
    return (
        <div>
            <div className="selectCategoria">
             <label>Elige una categoría:</label>
              <select onChange={(e)=> {
                  setCategoria(e.target.value)
                  
              }}>
                  <option value="todo">TODO</option>
                  <option value="teycafe">TE y CAFE</option>
                  <option value="vajilla">VAJILLA</option>
              </select>
            </div>  
            <ItemList categoria={categoria} />
        </div>

    )
}

export default ItemListContainer