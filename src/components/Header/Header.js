import React, {useContext}from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'
import {LinkButton} from '../Buttons/Buttons'
import SignOut from '../SignOut/SignOut'
import { UserContext } from '../../context/UserContext/UserContext'


function Header () {
  const [user, logged] = useContext(UserContext)


  return (
    <div className="header">
      <div className="botonesDiv">{logged ? <div> <p> {user.email} </p>
         <SignOut/>  </div>
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

/*
  const [userName, setUserName] = useState("")
  useEffect(() => {
    if (logged != {}) {
     setUserName(user.displayName) }
  }, [user])
  */