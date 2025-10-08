import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';


const Home = () => {
    const [allPost, setAllpost] = useState([]);
    const [alert,setAlert] = useState("");
    const navigate = useNavigate();
    

  
    const getpost = () => {
        axios
        .get("http://localhost:5000/posts")
            .then((res) => {
                console.log(res.data);
                setAllpost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getpost();
     }, []);
    return (
        <div className=' h-screen  '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols:3 xl:grid-cols-4 gap-1 m-4 '>
                {allPost.map((post) => (
                    <div className='grid w-[360px] h-[250px] mx-2 py-4 bg-blue-100 m-4 px-4 rounded-2xl' key={post.id}>
                        <h1><Link to={`post-details/${post.id}`}>Title:{post.title}</Link></h1>
                        <h1>Description:{post.description.slice(0, 100) + "......"}</h1>
                        <button className= ' text-white bg-blue-600 rounded' onClick={()=>{navigate(`/post-details/${post.id}`)}}>Seemore</button>
                    </div>
                ))}

                {/* <div className='grid w-[360px] h-[250px] mx-2 py-4 bg-blue-100 m-4 px-4 rounded-2xl  '>
                <h1>Title</h1>
                <h1>Description</h1>
                <div className='flex justify-between'>
                    <button className='px-6 bg-green-500 rounded text-bold cursor-pointer hover:bg-emerald-700 hover:text-white active:bg-amber-300 transition duration-300 scale-100'>Edit </button>
                    <button className=' px-6 bg-green-500 rounded text-bold'>Delete</button>
                </div>
                </div>
                <div className='grid w-[360px] h-[250px] mx-2 py-4 bg-blue-100 m-4 px-4 rounded-2xl  '>
                <h1>Title</h1>
                <h1>Description</h1>
                <div className='flex justify-between'>
                    <button className='px-6 bg-green-500 rounded text-bold cursor-pointer hover:bg-emerald-700 hover:text-white active:bg-amber-300 transition duration-300 scale-100'>Edit </button>
                    <button className=' px-6 bg-green-500 rounded text-bold'>Delete</button>
                </div>
                </div> */}
            </div>
        </div>
    )
}
export default Home;
