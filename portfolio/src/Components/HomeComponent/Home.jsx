import React from 'react'
import myImg from "../../assets/Anchal Photo.jpeg"

const Home = () => {
  return (
    <div className='bg-black h-screen'>
      <img src={myImg} alt={myImg.alt} className='m-auto border-none rounded-full w-[200px] h-[210px] p-4 ' />
      <div className='px-5'>
        <h1 className='text-center text-3xl font-bold px-25 pt-4 bg-gradient-to-r from-pink-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent '>I am Anchal Mohapatra, <span className='text-white'>frontend developer. </span></h1>
        <p className='text-white text-center px-10 text-sm fomt-semibold pb-3 pt-5 lg:px-70'>I am a frontend developer with 0 experence, as a fresher i want to develop my skills with such company which built my career and work more efficiently</p>
<div className='flex justify-center gap-5 py-9 text-white '>
  <button className='border-1 rounded-3xl px-4 py-3 hover:bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400'>Connect with me</button>
  <button className='border-1 rounded-3xl px-4 py-3 hover:bg-gradient-to-r  from-pink-500 via-orange-400 to-yellow-400 '>My resume</button>
</div>

      </div>
    </div>
  )
}

export default Home;