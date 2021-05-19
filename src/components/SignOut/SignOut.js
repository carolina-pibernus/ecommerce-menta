import React from 'react'
import firebase from 'firebase/app'
import "firebase/auth";
import { Button } from '../Buttons/Buttons';

const SignOut = () => {
  const handleOnClick = (e) => {
    e.preventDefault()
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
     
    });

  }
  return (
    <div>
      <Button classes="ui button inverted compact mini" text="Salir" click={handleOnClick}/>
    </div>
  )
}

export default SignOut

