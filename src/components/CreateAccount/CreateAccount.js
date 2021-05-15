import React, {useState} from 'react'
import firebase from 'firebase/app'
import "firebase/auth";

const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: ""
  }
const CreateAccount =() => {
    const [values, setValues] = useState(initialValues)
    const handleOnChange = (e) => {
      const {name, value} = e.target;  
      setValues({ ...values, [name]: value })  
    }
      const onSubmit = (e) => {
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user)
        changeName()
      // ...
      })
      .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage)
      // ..
      });
    }
    
  const changeName = () => {
    var user = firebase.auth().currentUser;
  
    user.updateProfile({
    displayName: values.name,
    phoneNumber: values.phone
  }).then(function() {
  }).catch(function(error) {
    console.log(error)
  });
  }
     return (
          <div>     
              <form onSubmit={onSubmit}>
                  <input placeholder="Nombre y Apellido" onChange={handleOnChange}name="name" type="text" required />
                  <input placeholder="Número de teléfono" onChange={handleOnChange} name="phone" type="tel" required minLength={8} maxLength={10}/>
                  <input placeholder="E-mail" onChange={handleOnChange} name="email" type="email" required/>
                  <input placeholder="Password" onChange={handleOnChange} name="password" type="password" required minLength={8} maxLength={10}/>
                  <button>Registrarme</button>
              </form>
          </div>
     )
  
  }
  export default CreateAccount