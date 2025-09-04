import React, { useState } from 'react'
import axios from "axios";
import {  useNavigate, useParams } from 'react-router-dom';



const CreateForm = () => {

    const navigate = useNavigate();
    const para= useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [alert, setAlert] = useState("");
    const [success, setSuccess] = useState("");
 
    // const [show, setShow] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const info = {
            name, email, address
        };
        if (!name || !email || !address) {
            setAlert("The data is not yet filled!");
            setSuccess("");
            return;
        }
        // setShow({ name, email, address })
        // console.log(info);
        axios.post("http://localhost:5000/forms", info)
            .then((res) => {
                console.log(res.data);
                setAlert("");
                setSuccess("Form was successfully fillup ..")
                setName("");
                setEmail("");
                setAddress("");
            })
            .catch((err) => {
                console.log(err);
                setAlert("The wrong URL/Something went wrong !");
                setSuccess("");
            })
    }
    return (
        <div className='h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <form action="" className=' border-2 w-[580px]  m-8 p-6 bg-cyan-300' >
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="" >Email : </label>
                    <input type="email" placeholder='enter your mail id' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className='flex flex-cols m-4  text-center'></div>
                    <textarea type="text " placeholder='enter your address ' className='bg-white w-full' rows={6} value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                    <button onClick={handleSubmit} className='bg-white text-black p-2 w-full mt-2 rounded hover:bg-cyan-800 active:text-white'>Create Form</button>
                    {alert && (
                        <p className='text-center m-2 text-red-800'>{alert}</p>
                    )}
                    {success &&
                        (
                            <div>
                                <p className='text-center m-2 text-red-800' onClick={() => navigate("/")}> {success}</p>
                                <button onClick={() => navigate(`/`)} className='bg-white text-black p-2 w-full mt-2 rounded hover:bg-cyan-800 active:text-white'>Form-details</button>
                            </div>
                        )}
                </form>
                {/* {show && (
                    <div>
                        <h1>name :{name}</h1>
                        <h2>email: {email}</h2>
                        <p>addres : {address}</p></div>
                )} */}
            </div>
        </div>

    )
}

export default CreateForm;