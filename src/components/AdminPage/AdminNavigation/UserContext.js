import React, { useContext, useState, useEffect } from "react"
import { auth } from "../../../firebase"
import { EmailAuthProvider } from "firebase/auth"

export const UserContext = React.createContext()

export const useAuth = () => {
  return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(" ");


  useEffect(() => {
    auth.onAuthStateChanged(user => {setCurrentUser(user)})}, [])

  const value = {currentUser}

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}