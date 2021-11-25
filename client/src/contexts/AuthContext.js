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
  function updateName(name){
    currentUser.updateProfile({
      displayName: name
    }).then(() => {
      console.log("success")
      // Update successful
      // ...
    }).catch((error) => {
      console.log(error)
      // An error occurred
      // ...
    });
  }
  function updatePhoto(photo){
    currentUser.photoURL = photo
    return currentUser.photoURL
  }
  function displayName() {
    if (currentUser.displayName === null){
      const displayName = 'Unknown'
      return displayName}
    else {return currentUser.displayName}
  }
  function displayImg() {
    if (currentUser.photoURL === null){
      const photoURL = 'https://res.cloudinary.com/andromeda-inn/image/upload/v1635003692/images/marin-tulard-QdD8NwVjlGU-unsplash_ehbg4w.jpg'
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
    updateName,
    updatePhoto,
    currentPostId,
    setCurrentPostId
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
