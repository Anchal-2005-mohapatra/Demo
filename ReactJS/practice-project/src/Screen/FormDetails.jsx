import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const FormDetails = () => {
    const [read, setRead] = useState({});
    const para= useParams();
    const navigate =useNavigate();
    const[alert, setAlert]= useState("");
    const getData= ()=>
    {
        axios.get(`http://localhost:5000/forms/${para.id}`)
        .then((res)=>{
            console.log(res.data);
            setRead(res.data);
            setAlert("");

        })
        .catch((err)=>{
            console.log(err);
            setAlert("something went wrong!")
        })
    }
    useEffect(()=>{
        getData()
    },[])


    const deleteForm = ()=>{
        axios.delete(`http://localhost:5000/forms/${para.id}`).then((res)=>{
            console.log(res.data);
            navigate("/");
            setAlert("");
        }).catch((err)=>{
            console.log(err);
            setAlert("failed to delete the data");
        })
    }
    return (
               <div className=' h-[90vh] p-8 flex flex-col justify-center items-center'>
            <div className='bg-indigo-900 w-[600px] p-8 text-white rounded-2xl shadow '>
                <h1 className='p-2'>Name : {read.name}</h1>
                <h2 className='p-2'>Email-id : {read.email}</h2>
                <p className='p-2'>Address :{read.address}</p>
                <div className='flex justify-between p-2'>
                    <button className=' bg-emerald-50 text-black p-2 rounded hover:bg-emerald-600 active:text-white' onClick={()=>navigate(`/edit-form/${para.id}`)}>Edit</button>
            <button className=' bg-emerald-50 text-black p-2 rounded hover:bg-emerald-600 active:text-white'onClick={()=>navigate("/")}>keep</button>
                    <button className='bg-emerald-50 text-black p-2 rounded hover:bg-emerald-600 active:text-white' onClick={deleteForm}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default FormDetails;