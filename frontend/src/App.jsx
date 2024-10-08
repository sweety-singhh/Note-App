import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Navbar from './components/Navbar'

const App =() => {
  return  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  
  </Routes>
  
  </BrowserRouter>
}

export default App
