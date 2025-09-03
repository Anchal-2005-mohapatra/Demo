import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const EditPost = () => {
const para = useParams();
const [title, setTitle] =useState("");
const [description, setDescription] = useState("");
const [alert, setAlert] = useState("");

  
const navigate= useNavigate();
const getPost = ()=>{
  axios.get(`http://localhost:5000/posts/${para.id}`)
  .then((res)=>{
    console.log(res.data);
    setTitle(res.data.title);
    setDescription(res.data.description);

  })
  .catch((err)=>{
    console.log(err);
  })
  
}

const updatePost = (e)=>{
  e.preventDefault();
  if(!title || !description)
  {
    setAlert("Please fill the empty filled");
    return;
  }
  const post= {
    title,description
  };
  axios.put(`http://localhost:5000/posts/${para.id}`,post)
  .then((res)=>{
    console.log(res.data);
    navigate(`/post-details/${para.id}`)
    // navigate(`/`)
    
  })
  .catch((err)=>{
    console.log(err);
    setAlert("something went wrong");
  })
}


useEffect(()=>{
  getPost()
},[])
  
  return (
    <div className=' h-screen flex items-center justify-center' >
 
         <form action="" className='flex flex-col  p-4 justify-center bg-blue-950 text-white h-[410px] w-[350px] content-center rounded-2xl ' >
                 <h1 className='text-center text-xl font-bold text-white underline '>Update Post</h1>
            <input type='text' placeholder='postTitle' className='m-3 ' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <input type='text' placeholder='post Description' className='m-3 py-20' value={description} onChange={(e)=>setDescription(e.target.value)} ></input>
            <button className='bg-green-800 py-2 rounded cursor-pointer border-none outlinee-none hover:bg-cyan-800 text-shadow-amber-100' onClick={updatePost}>Update Post</button>
             {alert &&(
              <p className='text-center p-4'>
          {alert}
        </p>)}
        </form>
       
       
    </div>
  )
}
export default EditPost;
