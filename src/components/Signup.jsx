import React from 'react'

import { Typography, Button, FormGroup, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    formGroup:{
        marginTop:"20px"
    }
}) 
export const Signup = () => {
  const classes = useStyles()
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
            <TextField label="Email"/>
        </FormGroup>
        <FormGroup
            className={classes.formGroup}
        >
            <TextField label="Password"/>
        </FormGroup>
        <FormGroup
            className={classes.formGroup}
        >
            <TextField label="Confirm Pasword"/>
        </FormGroup>
        <FormGroup
            className={classes.formGroup}
        >
            <Button variant="contained">Sign Up</Button>
        </FormGroup>
    </>
  )
}
