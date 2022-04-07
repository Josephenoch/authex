import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
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
  const login = (email, password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logout = () =>{
    return signOut(auth)
  }
  const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email)
  }
  onAuthStateChanged(auth, user=>{
    setCurrentUser(user)
  })
  const value = {
    currentUser, 
    signup,
    login, 
    logout,
    resetPassword
  }
  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}