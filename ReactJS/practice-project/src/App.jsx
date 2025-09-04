import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Screen/Home'
import CreateForm from './Screen/CreateForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormDetails from './Screen/FormDetails'
import EditForm from './Screen/EditForm'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>

          </Route>
          <Route path='/createform' element={<CreateForm />}></Route>
          <Route path='/form-details/:id' element={<FormDetails/>}></Route>
          <Route path='/edit-form/:id' element={<EditForm/>}></Route>
        </Routes>

        <Footer /></BrowserRouter>

    </div>
  )
}

export default App