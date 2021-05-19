import React, {useContext}from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'
import {LinkButton} from '../Buttons/Buttons'
import SignOut from '../SignOut/SignOut'
import { UserContext } from '../../context/UserContext/UserContext'


function Header () {
  const [logged, user] = useContext(UserContext)


  return (
    <div className="header">
      <div className="botonesDiv">{logged ? <div> <p className="userEmail"> {user.email} </p>
         <SignOut/>  </div>
           : <LinkButton linkTo="/login" classes="ui button compact" text="LogIn" />}
           </div>
      
      <Link to="/"><img src={logo} alt="logo menta" className="logo" /> </Link>
      
           
      <NavBar/>
      
    </div> 
  )
}


export default Header

