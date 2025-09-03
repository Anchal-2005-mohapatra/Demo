import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const PostDetails = () => {
  const param = useParams("");
  const [getPost, setGetpost] = useState({});
  const [alert, setAlert] = useState("");

  const navigation = useNavigate("");


  const getPostId = () => {
    axios.get(`http://localhost:5000/posts/${param.id}`)
      .then((res) => {
        console.log(res.data);
        setGetpost(res.data);
        setAlert("");

      })
      .catch((res) => {
        console.log(res);
        setAlert("failed to fetch");
        setGetpost("");

      })
  }

  const deletePost = ()=>{
    axios.delete(`http://localhost:5000/posts/${param.id}`)
    .then((res)=>{
      console.log(res.data);
      navigation("/");
      setAlert("");
    })
    .catch((err)=>{
      console.log(err);
      setAlert("failed to delete");
    })
  }
  useEffect(() => { getPostId(); }, [])
  return (
    <div className='h-screen flex flex-cols bg-pink-100 justify-center items-center  '>
      {alert && (<p>{alert}</p>)}
      <div className=' m-4 bg-[#5682B1] p-8 rounded text-xl min-w-[90vw] max-w-3xl'>  
        <h1 className='p-3'>title:{getPost.title}</h1>
        <h1 className='p-3'>description :{getPost.description}</h1>
        <div className='flex justify-between p-3'>
          <button className='px-6 bg-green-500 rounded cursor-pointer hover:bg-emerald-700 hover:text-white active:bg-amber-300 transition duration-300 scale-100' onClick={() => { navigation(`/edit/${param.id}`) }}>
            Edit </button>
          <button onClick={deletePost} className=' px-6 bg-green-500 rounded'>Delete</button>
        </div>
      </div>
    </div>
  )
}
export default PostDetails;
