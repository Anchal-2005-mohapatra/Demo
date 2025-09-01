import React from 'react'

const CreatePost = () => {
  return (
    <div>
        <form action="" className='grid m-4 p-4 justify-center bg-blue-950 text-white h-[200px] w-[300px]' >
            <input type='text' placeholder='postTitle' className='m-3 '></input>
            <input type='text' placeholder='post Description' className='m-3'></input>
            <input type='text' placeholder='create Button' className='m-3'></input>
        </form>
    </div>
  )
}
export default CreatePost;
