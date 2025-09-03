import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import CreatePost from './Components/CreatePost'
import EditPost from './Components/EditPost'
import PostDetails from './Components/PostDetails'


const App = () => {
  return (
  
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<CreatePost/>}></Route>
        <Route path='/edit/:id' element={<EditPost/>}></Route>
        <Route path='/post-details/:id' element={<PostDetails/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>

  )
}
export default App;
