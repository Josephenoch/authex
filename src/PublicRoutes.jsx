import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

export const PublicRoutes = ({children}) => {
  const {currentUser} = useAuth()
  return currentUser?<Navigate to="/dashboard"/>:children
}
