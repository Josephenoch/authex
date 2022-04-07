import React, { useState } from 'react'

import { ComponentsWrapper } from './ComponentsWrapper'
import { useAuth } from '../contexts/AuthContext'

import { Typography, Alert, FormGroup, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Link } from 'react-router-dom'

import { CircleSpinner } from "react-spinners-kit";

const useStyles = makeStyles({
    formGroup:{
        marginTop:"20px",
        width:"100%"
    }
})


export const ForgotPassword = () => {
  const classes = useStyles()
  const {resetPassword} = useAuth()
  const [email, setEmail] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [loading, setLoading] = useState()
  const [message, setMessage] = useState()
  const handleSubmit = () =>{
      setLoading(true)
      resetPassword(email).
        then(()=>setMessage("Check inbox for further instructions"))
        .catch(err=> setErrorMessage(err))
            .then(()=>setLoading(false))
        
  }
  
  return (
    <>
    <ComponentsWrapper>
        <Typography
                variant="h3"
            >
                Password Reset
            </Typography>
            {message&&<Alert severity="success" sx={{marginTop:"20px"}}>{message}</Alert>}
            <FormGroup
                className={classes.formGroup}
            >
                <TextField 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                />
            </FormGroup>
            <FormGroup
                className={classes.formGroup}
            >
                <Button variant="contained" disabled={loading} onClick={handleSubmit}>
                    {loading? <CircleSpinner size={18} color="#686769" loading={loading} />:"Reset Password"}
                </Button>
            </FormGroup>
            {errorMessage&&<Alert severity="error" sx={{marginTop:"20px"}}>{errorMessage.message}</Alert>}
            <Typography 
                component={Link} 
                to="/login" 
                variant='caption' 
                sx={{marginTop:"20px"}}
            >
                Login
            </Typography>
        </ComponentsWrapper>
        <Typography variant='caption' sx={{marginTop:"20px"}}> New here? <Link to="/">Sign Up</Link></Typography>
    </>
  )
}
