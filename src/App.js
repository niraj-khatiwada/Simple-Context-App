import React from 'react'
import './App.css'

import Main from './Main'
import Form from './Form'
import NavBar from './NavBar'
import { ThemeProvider } from './Contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Main>
          <NavBar />
          <Form />
        </Main>
      </ThemeProvider>
    </div>
  )
}

export default App
