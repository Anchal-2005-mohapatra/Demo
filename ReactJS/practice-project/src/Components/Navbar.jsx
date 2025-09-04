import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =()=> {
  return (
    <div>
        <ul className='flex justify-between p-2 w-full bg-pink-700' >
            <li className='bg-blue-100 rounded p-2 font-bold '>
                <Link to={"/"}>Home</Link>
            </li>
            <li className='bg-blue-100 rounded p-2 font-bold '>
                <Link to={"/createForm"}>Create-Form</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar