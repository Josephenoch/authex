import React from 'react'
import { Box } from '@mui/material'

export const ComponentsWrapper = ({children}) => {
  return (
    <Box
      sx={{
        minWidth:"400px",
        maxWidth:"400px",
        border:"1px solid grey",
        padding:"20px",
        borderRadius:"10px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
      }}
    >
        {children}
    </Box>
  )
}
