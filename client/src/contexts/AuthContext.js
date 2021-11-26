import React, { useContext, useState, useEffect } from 'react'
import {auth} from '../api/firebase'
import axios from 'axios'
// This file allows use to have access our props/states anywhere in our app
const AuthContext = React.createContext()
// const cloudinary = require('cloudinary').v2

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
  function uploadImg(data){
    axios.post("https://api.cloudinary.com/v1_1/andromeda-inn/image/upload", data)
    .then((response) => {
      updatePhoto(response.data.url)
      console.log(response)
    })
  }
  function deleteImg(deleteData, data){
    axios.post("https://api.cloudinary.com/v1_1/andromeda-inn/image/destroy", data)
    .then((response) =>{
      uploadImg(data)
      console.log(response)
    }).catch((error) =>{
      console.log(error)
    })
  }
  function updatePhoto(photo){
    currentUser.updateProfile({
      photoURL: photo
    }).then((response) => {
      console.log("success")
      return(response)
      // Update successful
      // ...
    }).catch((error) => {
      console.log(error)
      // An error occurred
      // ...
    });
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
    uploadImg,
    deleteImg,
    setCurrentPostId
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
