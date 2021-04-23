import React, {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import './Counter.css'


const Counter = ({setear, producto}) => {
  const [count, setCount] = useState(0)

  const handleDecrement  = () => {
    const verificarCount = count >= 1 ? (setCount(count - 1), setear(count-1)) : null
  } 
   const handleIncrement = () => {
     const verificarStock = count < producto.stock ? (setCount(count + 1), setear(count+1)) : null
  }
    
  return (
    <div className="visible">
      <p>{count}</p>
        <div>
          <button className="ui button compact" onClick={handleDecrement}>
            -
          </button>
          <button className="ui button compact" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
  )
}

export default Counter