import React, { useContext, useState, useEffect } from 'react'
import io from 'socket.io-client';

// This file allows use to have access our props/states anywhere in our app
const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  const socketContextData = {
    socket,
  }
  useEffect(() => {
    const newSocket = io()
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <SocketContext.Provider value={socketContextData}>
      {children}
    </SocketContext.Provider>
  )
}
