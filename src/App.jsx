import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayaout from './components/layout/MainLayout'
import Login from './pages/login'
import Registration from './pages/registration'
import Home from './pages/Home'
import Developers from './pages/developers'
import Dashboard from './pages/dashboard'
import { useContext } from 'react'
import { AppContext } from './context/ContexApi'



function App() {

  const {isToken} = useContext(AppContext)

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayaout /> }>

              <Route path='/' element={isToken ? <Developers /> : <Home/>} />
              <Route path='/login' element={<Login  />}/>
              <Route path='/registration' element={<Registration/>}/>
              <Route path='/developers' element={<Developers/>} />
              <Route path='/dashboard' element={<Dashboard/>}/>
            
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
