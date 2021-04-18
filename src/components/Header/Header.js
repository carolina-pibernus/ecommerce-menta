import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'

function Header () {
  return (
    <div className="header">
        <Link to="/"><img src={logo} alt="logo menta" className="logo" /> </Link>
        <NavBar/>
    </div>    
  )
}

export default Header