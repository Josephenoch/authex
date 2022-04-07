import React, { useState } from 'react'

import { Typography, Button, FormGroup, TextField, Alert, Box } from '@mui/material'
import { makeStyles } from '@mui/styles';

import { useAuth } from '../contexts/AuthContext';

import { useNavigate, Link } from 'react-router-dom';
import { ComponentsWrapper } from './ComponentsWrapper';

import { CircleSpinner } from "react-spinners-kit";

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
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const {signup} = useAuth()

  const handleSubmit = () => {

    if(password===confirmPassword){
        setLoading(true)
        signup(email,password)
            .then(() => navigate("/Dashboard"))
            .catch(err => setErrorMessage(err))
                .then(()=>setLoading(false))
        
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
        <ComponentsWrapper>
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
                    type="password"
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
                    type="password"
                />
            </FormGroup>
            <FormGroup
                className={classes.formGroup}
            >
                <Button variant="contained" disabled={loading} onClick={handleSubmit}>
                    {loading? <CircleSpinner size={18} color="#686769" loading={loading} />:"Signup"}   
                </Button>
            </FormGroup>
            {errorMessage&&<Alert severity="error" sx={{marginTop:"20px"}}>{errorMessage.message}</Alert>}
        </ComponentsWrapper>
        <Typography variant='caption' sx={{marginTop:"20px"}}> Already have an account? <Link to="/login">Log in</Link></Typography>   
    </>
  )
}
