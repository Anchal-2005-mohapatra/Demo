import React from 'react'
import { Link } from 'react-router-dom';

 const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-between px-3 py-3 bg-gray-300 font-bold'>
            <li>
               <Link to={"/"}> Home</Link>
            </li>
            <li><Link to={"create"}>CreatePost</Link></li>
        </ul>
    </div>
  )
}
export default Navbar;
