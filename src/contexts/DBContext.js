import React, { useContext, useState, useEffect } from 'react'
import {db} from '../api/firebase'

// This file allows use to have access our props/states anywhere in our app
const DataContext = React.createContext()

export function useData() {
  return useContext(DataContext)
}

export function DataProvider({ children }) {

  function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
      set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    }


  const dataValue = {
    writeUserData
  }

  return (
    <DataContext.Provider value={dataValue}>
      {!loading && children}
    </DataContext.Provider>
  )
}
