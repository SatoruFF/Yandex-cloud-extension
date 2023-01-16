import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import MyNavbar from './components/MyNavbar'
import { AuthContext } from './context'

function App() {
  const [isAuth, setIsAuth]: any = useState(false);

  return (
    <div className="App">
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
            <MyNavbar></MyNavbar>
            <AppRouter></AppRouter>
          </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}

export default App
