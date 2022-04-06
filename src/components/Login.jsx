import React, { useState } from 'react'

import { Typography, Button, FormGroup, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';

import { useAuth } from '../contexts/AuthContext';

import {useNavigate} from "react-router-dom" 


const useStyles = makeStyles({
    formGroup:{
        marginTop:"20px",
        width:"100%"

    }
}) 
export const Login= () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const {login} = useAuth()

  const handleSubmit = () => {
    login(email,password).
    then(()=>navigate("/dashboard")).
    catch(err => setErrorMessage(err))
    

  }
  return (
    <>  
        <Typography
            variant="h2"
        >
            Sign In
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
        </FormGroup>
        <FormGroup
            className={classes.formGroup}
        >
            <Button variant="contained" onClick={handleSubmit}>Login</Button>
        </FormGroup>
        <h4>{errorMessage&&errorMessage.code}</h4>
    </>
  )
}
