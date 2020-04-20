import React from 'react'
import './App.css'

import Main from './Main'
import Form from './Form'
import NavBar from './NavBar'
import { ThemeProvider } from './Contexts/ThemeContext'
import LanguageProvider from './Contexts/LanguageContext'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <Main>
            <NavBar />
            <Form />
          </Main>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
