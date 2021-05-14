import React, {useState} from 'react'
import firebase from 'firebase/app'
import "firebase/auth";


const SingIn = () => {
  const [email, setEmail] = useState("")
  const handleOnChangeMail = (e) => {
    const mail = e.target.value;  
    setEmail(mail)  
  }
  const [password, setPassword] = useState("")
  const handleOnChangePassword = (e) => {
    const pass = e.target.value;  
    setPassword(pass)  
  }


  const onSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    
    var user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    console.log("error")
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder="E-mail" onChange={handleOnChangeMail} type="email" required/>
                <input placeholder="Password" onChange={handleOnChangePassword} type="password" required/>
                <button className="ui button compact">Sign In</button>
            </form>
        </div>
    )
}
export default SingIn
