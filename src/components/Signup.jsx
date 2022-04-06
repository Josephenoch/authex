import React, { useState } from 'react'

import { Typography, Button, FormGroup, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';

import { useAuth } from '../contexts/AuthContext';

import { useNavigate } from 'react-router-dom';




const useStyles = makeStyles({
    formGroup:{
        marginTop:"20px",
        width:"100%"
    }
}) 
export const Signup = () => {
  const classes = useStyles()
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const {signup} = useAuth()

  const handleSubmit = () => {

    if(password===confirmPassword){
        signup(email,password)
        navigate("/Dashboard")
    }

  }
  return (
    <>  
        <Typography
            variant="h2"
        >
            Sign Up
        </Typography>
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
            <TextField 
                value={password}
                onChange={(e) => setPassword(e.target.value)}    
                label="Password"
            />
        </FormGroup>
        <FormGroup
            className={classes.formGroup}
        >
            <TextField 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}  
                label="Confirm Pasword"
            />
        </FormGroup>
        <FormGroup
            className={classes.formGroup}
        >
            <Button variant="contained" onClick={handleSubmit}>Sign Up</Button>
        </FormGroup>
    </>
  )
}
