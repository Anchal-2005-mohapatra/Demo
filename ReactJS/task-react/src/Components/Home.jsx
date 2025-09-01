import React from 'react'

const Home = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className=' w-[360px] h-[250px] mx-2 py-4 bg-blue-100 m-4 px-4 rounded-2xl  '>
                <label htmlFor="" >Post Title/Heading : </label>
                <input type="text" placeholder='heading' className='my-4' />
                <label>Description : </label>
                <input type="text " placeholder='description' className='my-4' />
                <div className='flex justify-around mr-4 mt-4 '>
                    <button className='p-2 bg-green-500 rounded text-bold'>Edit </button>
                    <button className='p-2 bg-green-500 rounded text-bold'>Delete</button>
                </div>
            </div>
            <div className=' w-[360px] h-[250px] mx-2 py-4 bg-blue-100 m-4 px-4 rounded-2xl  '>
                <label htmlFor="" >Post Title/Heading : </label>
                <input type="text" placeholder='heading' className='my-4' />
                <label>Description : </label>
                <input type="text " placeholder='description' className='my-4' />
                <div className='flex justify-around mr-4 mt-4 '>
                    <button className='p-2 bg-yellow-500  rounded text-bold'>Edit </button>
                    <button className='p-2 bg-yellow-500 rounded text-bold'>Delete</button>
                </div>
            </div>



           <div className=' w-[360px] h-[250px] mx-2 py-4 bg-blue-100 m-4 px-4 rounded-2xl  '>
                <label htmlFor="" >Post Title/Heading : </label>
                <input type="text" placeholder='heading' className='my-4' />
                <label>Description : </label>
                <input type="text " placeholder='description' className='my-4' />
                <div className='flex justify-around mr-4 mt-4 '>
                    <button className='p-2 bg-gray-500 text-white rounded text-bold'>Edit </button>
                    <button className='p-2 bg-gray-500 text-white  rounded text-bold'>Delete</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
