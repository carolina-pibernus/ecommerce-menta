import React, {useState, useEffect, createContext} from 'react'
import firebase from 'firebase/app'
import "firebase/auth";

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [user, setUser] = useState([])
    const [logged, setLogged] = useState(false)
    const [userName, setUserName] = useState("")
    const changeValues = (a, b) => {
        setUser(a)
        setUserName(b)
    }
    const loggedUser = () => {
        setLogged(true)
        const userLogged = firebase.auth().currentUser
        changeValues (userLogged.providerData[0], userLogged.displayName)

    }

    const getUser = async () => {
        firebase.auth().onAuthStateChanged((u)=> {
                u ? loggedUser() : setLogged(false)  
              });
        }
        useEffect(() => {
            getUser()
           
        })
    
    return (
        <UserContext.Provider value={[ logged,user, userName]}> {props.children} </UserContext.Provider>
    )
}

