import React, { useState } from 'react'
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alert, setAlert] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError]= useState("");

  const handleButton = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setAlert("please enter the input field")
      return;
    }
    const data =
    {
      title, description,
    };
    axios
      .post("http://localhost:5000/posts", data)
      .then((res) => {
        console.log("post created", res);
        setSuccess("post created sucessfully");
        setTitle("");
        setAlert("");
        setDescription("");
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setAlert("");
        setError("something went wrong");
      });


  };

  return (
    <div className=' h-screen flex items-center justify-center' >

      <form action="" className='flex flex-col p-2 bg-blue-950 text-white h-[410px] w-[360px] m-3 rounded-2xl md:h-[420px] ' >
        <h1 className='text-center text-xl font-bold text-white underline '>Create Post</h1>
        <input type='text' placeholder='postTitle' className='m-3 py-4' value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
        <input type='text' placeholder='post Description' className='m-3 py-19' value={description} onChange={(e) => { setDescription(e.target.value) }}></input>
        <button onClick={handleButton} className='bg-green-800 py-2 width-full rounded cursor-pointer border-none outlinee-none hover:bg-cyan-800 text-shadow-amber-100'>Create Post</button>

        {alert && (
          <p className='text-white text-center pt-3'>{alert}</p>
        )}

        {success && (
          <p className='text-white text-center pt-3'>
            {success}
          </p>
         
        )}
         {error && (
          <p className='text-red-900 text-center pt-3'>{error}</p>
         )}
      </form>

    </div>
  )
}
export default CreatePost;
