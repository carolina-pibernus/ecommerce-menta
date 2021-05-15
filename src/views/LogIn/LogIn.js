import React, {useState, useContext}from 'react'
import SignIn from '../../components/SignIn/SingIn'
import CreateAccount from '../../components/CreateAccount/CreateAccount'
import { Button, LinkButton } from '../../components/Buttons/Buttons'
import { UserContext } from '../../context/UserContext/UserContext'
import { CartContext } from '../../context/CartContext/CartContext'

const LogIn = () => {
    const [click, setClick] = useState(false)
    const [user, logged] = useContext(UserContext)
    const [articulos] = useContext(CartContext)
        
    return (
        <div> {!logged ? <div>
            {!click ? <div>
                <h3>Ingresa para comprar</h3>
                <SignIn /> 
                <h4>¿Todavía no tenes cuenta? </h4> 
                <Button click={()=>{setClick(true)}} classes="ui button teal" text="Crear Cuenta" /> 
                </div> : <div>
                    <h3>Crea una cuenta</h3>
                    <CreateAccount/>
                    <Button click={()=>{setClick(false)}} classes="ui button orange" text="Cancelar" />
                </div>}
        </div> : <div> <h4>Bienvenidx {user.displayName}</h4> 
        {articulos.length >= 1 ? <LinkButton linkTo="/checkout" text="Continuar Compra" classes="ui olive button"/> : null} </div>}
        
        </div>
    )
}

export default LogIn
