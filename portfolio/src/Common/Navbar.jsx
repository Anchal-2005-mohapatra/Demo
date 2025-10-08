import React,{useState} from 'react'
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const[menu ,setMenu]=useState(false);
    const open =()=>{
        setMenu(!menu);
    }
  return (
    <div className='sticky top-0' >
         <div className=' px-5 flex justify-between items-center  shadow-md  bg-black text-white md:px-10 lg:px-15 py-4 '>
        <h2>Anchal</h2>
        <ul className=' hidden  sm:flex sm:gap-3  md:flex md:gap-4 lg:flex lg:gap-8  xl:flex xl:gap-10 2xl:flex 2xl:gap-12'>
            <li>Home</li>
            <li>About Me</li>
            <li> Works</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <button className=' hidden shadow-lg px-3 py-2  sm:block lg:block xl:block rounded-xl border-1 border-white  bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 bg-clip-text text-transparent tranaform duration-500 hover:scale-95  '>Contact With me</button>
        <div className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
            <CiMenuFries size={24} onClick={open} />
        </div>
        {!menu && 
        <div className=' w-[200px]  absolute top-0 right-0 bg-pink-900 h-screen shadow-lg text-white rounded px-5 py-10 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
           <div>
            <RxCross2  size={18} onClick={open} className='relative left-30 '/>

            <ul className='grid gap-5 px-5 py-7'><li>Home</li>
            <li className='hover:bg-amber-400 active:text-7xl'>About Me</li>
            <li className=''>Services</li>
            <li className=''>Portfolio</li>
            <li className=''>Contact</li></ul></div> 
            </div>}
    </div>
    </div>
   
  )
}

export default Navbar;