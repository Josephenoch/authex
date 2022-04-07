import { FormGroup, Typography, Button, Box } from '@mui/material'
import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import { ComponentsWrapper } from './ComponentsWrapper';


export const Dashboard = () => {
  const {currentUser, logout} = useAuth()
  const handleLogout = () =>{
      logout()
  }
  return (
    <>  
     <ComponentsWrapper>
        <Typography variant="h3">Profile</Typography>
        <Typography variant="body1" sx={{marginTop:"20px", width:"100%"}}><b>Email</b>:{currentUser.email}</Typography>
        <FormGroup sx={{marginTop:"20px", width:"100%"}}>
            <Button variant="contained" onClick={handleLogout}>Log Out</Button>
        </FormGroup>
      </ComponentsWrapper>
    </>
  )
}
