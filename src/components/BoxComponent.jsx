import React from 'react'
import { useThemeUpdate, useTheme } from '../ThemeContext'

export const BoxComponent = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const styles ={
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding:"2rem",
    margin:"2rem"

  }
 
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={styles}>Wow, used context</div>

    </>
  )
}
