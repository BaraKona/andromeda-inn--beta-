import React, { useContext, useState, useEffect } from 'react'
import {db} from '../api/firebase'

// This file allows use to have access our props/states anywhere in our app
const DataContext = React.createContext()

export function useData() {
  return useContext(DataContext)
}

export function DataProvider({ children }) {


  const dataValue = {

  }

  return (
    <DataContext.Provider value={dataValue}>
      {children}
    </DataContext.Provider>
  )
}
