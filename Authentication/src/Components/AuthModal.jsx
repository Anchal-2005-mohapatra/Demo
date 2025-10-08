import React,{useState} from 'react'

const AuthModal = ({isOpen, onClose}) => {
    const [isLogin, setIsLogin] = useState(true);
    const[isForgetPassword,setIsForgetPassword]=useState(false);
    if(!isOpen) return null;
  return (
    // <div>
    //     <div className="fixed inset-0 flex items-center justify-center z-50 ">
    //     <div className="fixed inset-0 bg-black opacity-80"></div>
    //     <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 relative">
    //       {/* Close Button */}
    //       <button
    //         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
    //         onClick={onClose}
    //       >
    //         ✕
    //       </button> 
    //         {/* Title */}
    //         <h2 className="text-2xl font-bold text-center mb-6">
    //             {isLogin ? "Welcome back!" : "Create an account"}
    //         </h2>
    //         {/* Form */}
    //         <form className="space-y-4">
    //             {!isLogin && (
    //                 <div>
    //                     <label className="block text-sm font-medium text-gray-700 mb-1">
    //                         Name 
    //                     </label>
    //                     <input
    //                         type="text"
    //                         placeholder="Enter your name"
    //                         className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //                     />
    //                 </div>
    //             )}  
    //             <div>
    //                 <label className="block text-sm font-medium text-gray-700 mb-1">
    //                     Email
    //                 </label>
    //                 <input
    //                     type="email"
    //                     placeholder="Enter your email"
    //                     className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"          
    //                 />
    //             </div>
    //             <div>

    //                 <label className="block text-sm font-medium text-gray-700 mb-1">
    //                     Password
    //                 </label>        
    //                 <input
    //                     type="password"
    //                     placeholder="Enter your password"       
    //                     className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //                 />
    //             </div>  
    //             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
    //                 {isLogin ? "Login" : "Sign Up"}
    //             </button>
    //         </form>
    //         <p className="text-center text-sm text-gray-600 mt-4">
    //             {isLogin ? "Don't have an account? " : "Already have an account? "}
    //             <span
    //                 className="text-blue-600 font-medium cursor-pointer"
    //                 onClick={() => setIsLogin(!isLogin)}
    //             >
    //                 {isLogin ? "Sign Up" : "Login"}
    //             </span>
    //         </p>
    //     </div>
    //   </div>
    // </div>


    <div className=' bg-opacity-90  h-screen w-full fixed  flex justify-center items-center'>
        <div className='bg-white h-[500px] w-[500px]  px-4 mt-6 rounded-2xl text-black  '>
            <div className='mt-9 px-5 '>
                <p onClick={onClose} className='text-right'>✕</p>
               
               <h1 className='text-center '> {isLogin ? "Welcome Back!" : "Welcome !"} </h1>



               <form action="">
                {!isLogin &&  (
                <div>
                    <hr className='mt-3 text-gray-300'/>
                 <label htmlFor="" >name</label>
                    <input type="text" placeholder='Enter your name' className='border-2 border-black p-2 rounded-lg w-full mt-2 ' />
                     </div>)}

                        <hr className='mt-3 text-gray-300'/>
                    <div>
                        <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter your email' className='border-2 border-black p-2 rounded-lg w-full mt-2 ' />
                          <hr className='mt-3 text-gray-300'/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter your password' className='border-2 border-black p-2 rounded-lg w-full mt-2 ' />
                    </div>

                    {
                        isLogin &&  <div className='text-right underline text-gray-500 cursor-pointer'><p onClick={()=>{setIsForgetPassword(!isForgetPassword)}}>Forget Password?</p></div>
                    }
                
                    <button className='bg-pink-800 text-white p-2 rounded-lg w-full mt-4 hover:bg-pink-600'>{isLogin ? "Login" : "Sign Up"}</button>
               
                    
               </form>
            
               <hr className='mt-3 text-gray-300'/>
               <p className='text-center mt-3'> {isLogin ? "Don't have an account?" : "Already have an account?"} <span onClick={() => setIsLogin(!isLogin)} className='text-pink-800 underline cursor-pointer'> {isLogin ? "Sign Up" : "Login"} </span> </p>
            </div>
        </div>
    </div>
  )
}

export default AuthModal