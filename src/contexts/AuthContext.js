import React, { useContext, useState, useEffect } from 'react'
import {auth} from '../Api/firebase'
// This file allows use to have access our current user anywhere in our app
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])


    const User = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value = {User}>
            {children}
        </AuthContext.Provider>
    )
}
