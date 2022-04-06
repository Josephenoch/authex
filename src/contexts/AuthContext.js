import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState } from "react";

import {auth} from "../firebase-config"

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}


export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState()

  const signup = (email, password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  onAuthStateChanged(auth, user=>{
    setCurrentUser(user)
  })
  const value = {
    currentUser, 
    signup
  }
  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}