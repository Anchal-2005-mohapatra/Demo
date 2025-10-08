import React from 'react'
// import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    //   const navigate = useNavigate();  
  return (
   < div className='bg-pink-800 h-screen relative flex justify-center items-center'>
  <div className=' bg-white h-[390px] w-[500px] rounded-lg'>
                <form action="">
                    <h1 className='text-xl font-bold text-center mt-9 '>Reset Your password</h1>
                    <div className='flex flex-col mt-7 px-10 gap-4'>
                        <div><hr className='text-gray-300' /></div>
                        
                        <div><label htmlFor="">Email</label>
                            <input type="text" placeholder='Enter your email' className='border-2 border-black p-2 rounded-lg w-full ' /></div>

                        
                        <button className='bg-pink-800 text-white p-2 rounded-lg hover:bg-pink-600'>Submit</button>

                    </div>
                </form>
            </div>
            </div>
  )
}

export default ForgetPassword