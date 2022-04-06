import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

export const ProtectedRoute = ({children}) => {
  const {currentUser} = useAuth()
  if(currentUser){
    return children 
  }
  return <Navigate to="/login" replace/>
}
