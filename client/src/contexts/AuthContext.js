import React, { useContext, useState, useEffect } from 'react'
import {auth} from '../api/firebase'
// This file allows use to have access our props/states anywhere in our app
const AuthContext = React.createContext()

//Exports context
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [currentPostId, setCurrentPostId] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
  function updateProfile(displayName){
    currentUser.displayName = displayName
    return currentUser.displayName
  }
  function displayName() {
    if (currentUser.displayName === null){
      const displayName = 'Unknown'
      return displayName}
    else {return currentUser.displayName}
  }
  function displayImg() {
    if (currentUser.photoURL === null){
      const photoURL = 'https://res.cloudinary.com/andromeda-inn/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1635003692/images/marin-tulard-QdD8NwVjlGU-unsplash_ehbg4w.jpg'
      return photoURL}
    else {return currentUser.photoURL}
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    displayName,
    displayImg,
    updateProfile,
    currentPostId,
    setCurrentPostId
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
