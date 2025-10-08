import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
  return (
   < div className='bg-blue-300 h-screen relative flex justify-center items-center'>
  <div className=' bg-white h-[540px] w-[520px] rounded-lg'>
                <form action="">
                    <h1 className='text-xl font-bold text-center mt-12 '>Welcome Back!</h1>
                    <div className='flex flex-col mt-7 px-10 gap-5'>
                        <div><hr className='text-gray-300' /></div>


                        <div><label htmlFor="">Email</label>
                            <input type="text" placeholder='Enter your email' className='border-2 border-black p-2 rounded-lg w-full ' /></div>

                        <div><hr className='text-gray-300' /></div>
                        <div> <label>
                            Password</label> <input type="password" placeholder='Enter your password' className='border-2 border-black p-2 rounded-lg w-full' /> </div>
                        <div className='text-right underline text-gray-500 cursor-pointer' onClick={()=>{navigate("/forgetpassword")}}><p>Forget Password?</p></div>
                        <button className='bg-pink-800 text-white p-2 rounded-lg hover:bg-pink-600'>Login</button>
                        <div className='text-center mt-4'>
                            <p>Don't have an account? <span className='text-pink-800 underline cursor-pointer ' onClick={()=>{navigate("/signup")}}>Sign Up </span> </p>
                        </div>

                    </div>
                </form>
            </div>
            </div>
  )
}

export default Login