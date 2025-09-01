import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import CreatePost from './Components/CreatePost'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<CreatePost/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App;
