import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import MyNavbar from './components/MyNavbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar></MyNavbar>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  )
}

export default App
