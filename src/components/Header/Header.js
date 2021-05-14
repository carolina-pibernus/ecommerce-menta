import React, {useContext, useState, useEffect}from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'
import {LinkButton} from '../Buttons/Buttons'
import SignOut from '../SignOut/SignOut'
import { UserContext } from '../../context/UserContext/UserContext'


function Header () {
  const [user, logged] = useContext(UserContext)
  const [userName, setUserName] = useState("")
  useEffect(() => {
     setUserName(user.displayName)
  })

  return (
    <div className="header">
      <div className="botonesDiv">{logged ? <div> <p>¡HOLA, {userName.toUpperCase()}! </p>
        <LinkButton linkTo="/orders" text="Mis Compras" classes="ui button compact"/> <SignOut/>  </div>
           : <LinkButton linkTo="/login" classes="ui button compact" text="LogIn" />}</div>
      
      <div className="logoDiv">
      <Link to="/"><img src={logo} alt="logo menta" className="logo" /> </Link>
      </div> 
      <div className="navbarDiv" >        
      <NavBar/>
      </div>
    </div> 
  )
}

export default Header
