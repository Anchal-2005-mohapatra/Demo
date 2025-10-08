import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
      const navigate = useNavigate();  
  return (
   < div className='bg-purple-400 h-screen relative flex justify-center items-center'>
  <div className=' bg-white h-[540px] w-[520px] rounded-lg'>
                <form action="">
                    <h1 className='text-xl font-bold text-center mt-9 '>Welcome !</h1>
                    <div className='flex flex-col mt-7 px-10 gap-4'>
                        <div><hr className='text-gray-300' /></div>
                        <div>
                            <label htmlFor="">Name </label>
                            <input type="text" placeholder='Enter your name' className='border-2 border-black p-2 rounded-lg w-full ' /></div>
                        <div><hr className='text-gray-300' /></div>
                        <div><label htmlFor="">Email</label>
                            <input type="text" placeholder='Enter your email' className='border-2 border-black p-2 rounded-lg w-full ' /></div>

                        <div><hr className='text-gray-300' /></div>
                        <div> <label>
                            Password</label> <input type="password" placeholder='Enter your password' className='border-2 border-black p-2 rounded-lg w-full' /> </div>
                        <button className='bg-pink-800 text-white p-2 rounded-lg hover:bg-pink-600'>Login</button>
                        <div className='text-center'>
                            <p>Already have an account ? <span className='text-pink-800 underline cursor-pointer' onClick={()=>{navigate("/login")}}>Login</span> </p>
                        </div>

                    </div>
                </form>
            </div>
            </div>
  )
}

export default SignUp