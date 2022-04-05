import React,{useState, createContext, useContext} from 'react'

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}
export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext)
}
export const ThemeProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
      setDarkTheme(!darkTheme)
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}  
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
