import React from 'react'
import { Link } from 'react-router-dom';

 const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-between px-6 py-3 bg-gray-300 font-bold md:text-md  md:px-20 lg:px-30'>
            <li>
               <Link to={"/"} className='bg-cyan-800 p-1 rounded text-white'> Home</Link>
            </li>
            <li><Link to={"create"} className='bg-cyan-800 p-1 rounded text-white'>CreatePost</Link></li>
        </ul>
    </div>
  )
}
export default Navbar;
