import React, {useState} from 'react'
import firebase from 'firebase/app'
import "firebase/auth";
import './SignIn.css'

const initialValues = {
  email: "" ,
  password: ""
}

const SignIn = () => {
  const [values, setValues] = useState(initialValues)
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  const [error, setError] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(values.email, values.password)
  .then((userCredential) => {  })
  .catch((error) => {
    setError(true)
  });
}
    return (
        <div>
            <form onSubmit={onSubmit} className="ui form " id="signIn">
              <div className="required field" ><label>Email: </label>
                <input placeholder="E-mail" onChange={handleOnChange} type="email" name="email" required className="required field"/>
              <label>Contraseña: </label>  
                <input placeholder="Password" onChange={handleOnChange} type="password" name="password" required />
                </div> 
                <div className="ingresar">                
                  <button className="ui button compact olive">Ingresar</button>
                </div>
                {error ? <p>Usuario o contraseña inválido</p> : null}
            </form>
        </div>
    )
}
export default SignIn
