import React,{useContext} from 'react'
import { useTheme } from '../ThemeContext'



export const ReadingTheme = () => {
  const darkTheme = useTheme()
  return (
    <div>
        <h1>{darkTheme ? "Dark Mode" : "Light Mode"}</h1>
    </div>
  )
}
