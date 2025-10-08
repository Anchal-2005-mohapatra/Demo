import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';


const App = () => {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
<Footer/>
   </BrowserRouter>
  )
}

export default App