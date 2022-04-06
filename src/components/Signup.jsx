import React, { useState } from 'react'

import { Typography, Button, FormGroup, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';

import { useAuth } from '../contexts/AuthContext';

import { useNavigate, Link } from 'react-router-dom';




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
  const [errorMessage, setErrorMessage] = useState("")

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const {signup} = useAuth()

  const handleSubmit = () => {

    if(password===confirmPassword){
        signup(email,password)
        .then(() => navigate("/Dashboard"))
        .catch(err => setErrorMessage(err))
        
    }
    else{
        setErrorMessage({
            message:"Passwords do not match", 
            code:"passwords do not match"
        })
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
                error={errorMessage.code==="auth/email-already-in-use" ||errorMessage.code==="auth/invalid-email"?true:false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
            />
        </FormGroup>
        <FormGroup
            className={classes.formGroup}
        >
            <TextField 
                error={errorMessage.code==="passwords do not match"?true:false}
                value={password}
                onChange={(e) => setPassword(e.target.value)}    
                label="Password"
            />
        </FormGroup>
        <FormGroup
            className={classes.formGroup}
        >
            <TextField 
                error={errorMessage.code==="passwords do not match"?true:false}
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
        {errorMessage&&<Typography variant="h4">{errorMessage.message}</Typography>}
        <Typography variant='caption' sx={{marginTop:"20px"}}> Already have an account? <Link to="/login">Log in</Link></Typography>
        
    </>
  )
}
