import React, {useState, useEffect, createContext} from 'react'
import firebase from 'firebase/app'
import "firebase/auth";

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [user, setUser] = useState([])
    const [logged, setLogged] = useState(false)
    const getUser = async () => {
        const isLogged = firebase.auth().onAuthStateChanged((u)=> {
                u ? setLogged(true) : setLogged(false)  
              });
              
            const userLogged = firebase.auth().currentUser
            userLogged ? setUser(userLogged.providerData[0]) : setUser(null)

        }
        useEffect(() => {
            getUser()
        })
    
    return (
        <UserContext.Provider value={[user, logged]}> {props.children} </UserContext.Provider>
    )
}

