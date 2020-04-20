import React from 'react'
import './App.css'

import Main from './Main'
import Form from './Form'
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <Main>
        <NavBar />
        <Form />
      </Main>
    </div>
  )
}

export default App
