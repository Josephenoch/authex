import React, { useState } from 'react'

import { Typography, Button, FormGroup, TextField, Alert} from '@mui/material'
import { makeStyles } from '@mui/styles';

import { useAuth } from '../contexts/AuthContext';

import {Link, useNavigate} from "react-router-dom" 

import { ComponentsWrapper } from './ComponentsWrapper';

import { CircleSpinner } from "react-spinners-kit";


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
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const {login} = useAuth()

  const handleSubmit = () => {
    setLoading(true)
    login(email,password)
        .then(()=>navigate("/dashboard"))
        .catch(err =>setErrorMessage(err))
            .then(()=>setLoading(false))
  }

  return (
    <>   
        <ComponentsWrapper>
            <Typography
                variant="h2"
            >
                Login
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
                    type="password"
                />
            </FormGroup>
            <FormGroup
                className={classes.formGroup}
            >
            </FormGroup>
            <FormGroup
                className={classes.formGroup}
            >
                <Button disabled={loading} variant="contained" onClick={handleSubmit}>
                    {loading? <CircleSpinner size={18} color="#686769" loading={loading} />:"Login"}
                </Button>
            </FormGroup>
            {errorMessage&&<Alert severity="error" sx={{marginTop:"20px"}}>{errorMessage.message}</Alert>}
            <Typography 
                component={Link} 
                to="/forgot-password" 
                variant='caption' 
                sx={{marginTop:"20px"}}
            >
                Forgot Password?
            </Typography>
        </ComponentsWrapper>
        <Typography variant='caption' sx={{marginTop:"20px"}}> New here? <Link to="/">Sign Up</Link></Typography>

    </>
  )
}
