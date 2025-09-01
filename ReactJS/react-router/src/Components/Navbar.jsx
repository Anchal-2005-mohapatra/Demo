import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

 const Navbar = () => {
    const navigate = useNavigate("");
    const handleButton = ()=>{
        navigate("/login");
    }
  return (
    <div className='flex items-center justify-between px-3 py-3 bg-gray-200 text-black  '>
        <h1 className='text-2xl'>
            Logo
        </h1>
        <ul className='flex justify-between gap-4'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/About"}>About</Link></li>
            <li><Link to={"/Contact"}>Contact</Link></li>
        </ul>
        <button onClick={handleButton} className='rounded p-2 border-2 bg-green-700 text-white'>Login</button>
    </div>
  )
}
export default Navbar;
