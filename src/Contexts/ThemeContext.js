import React, { createContext, useState } from 'react'
import useToggle from '../Hooks/useToggle'

export const ThemeContext = createContext()

export default function ThemeProvider(props) {
  const [isDarkState, setDarkState] = useToggle()
  return (
    <ThemeContext.Provider value={{ isDark: isDarkState, setDarkState }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
