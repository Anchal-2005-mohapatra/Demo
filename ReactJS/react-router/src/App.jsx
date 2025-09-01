import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/about' element={<Aboutus/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Footer/></BrowserRouter>
    </div>
  )
}
export default App;