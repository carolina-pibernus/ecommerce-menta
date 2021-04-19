import React, {useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './Counter.css'

const Counter = (setear) => {
  const [count, setCount] = useState(0)
  const [visibilidad, setVisibilidad] = useState("disabled")
  const [verCounter, setVerCounter] = useState("visible")

  const handleDecrement  = () => {
    const verificarCount = count >= 1 ? setCount(count - 1) : null
    const deshabilitarBoton = count > 1 ? setVisibilidad("active") : setVisibilidad("disabled")
  } 

  
  const handleIncrement = () => {
    setCount(count + 1)
    setVisibilidad("active")
  }
  const pasarData = () => {
    setear.setear(count)
    setVerCounter("oculto")
  }

  return (
    <div className={verCounter}>
      <p>{count}</p>
        <div>
          <button className="ui button compact" onClick={handleDecrement}>
            -
          </button>
          <button className="ui button compact" onClick={handleIncrement}>
            +
          </button>
        </div>
        <button className={`ui olive button ${visibilidad}`}  onClick={pasarData}>Agregar al Carrito</button> 

    </div>
  )
}

export default Counter

/*
export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrement = () => {
      if (this.state.count > 0) {
    this.setState({ count: this.state.count - 1 });
      }
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <div>
          <button className="ui button compact" onClick={this.handleDecrement}>
            -
          </button>
          <button className="ui button compact" onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}*/