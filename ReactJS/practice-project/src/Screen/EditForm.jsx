import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditForm = () => {
    const para=useParams();
    const [name, setName] = useState("");
    const [alert, setAlert] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const getInfo = () => {
        axios.get(`http://localhost:5000/forms/${para.id}`)
        .then((res) => {
            console.log(res.data);
            setName(res.data.name);
            setEmail(res.data.email);
            setAddress(res.data.address);
            setAlert("");
        }).catch((err) => {
            console.log(err);
            setAlert("Not fetch!");
            setName("");
            setEmail("");
            setAddress("");
        })
    }

    const updataForm = (e) => {
        e.preventDefault();
        if (!name || !email || !address) {
            setAlert("please fill the datas");
            return;
        }
        const datas = {
            name, email, address
        };
        axios.put(`http://localhost:5000/forms/${para.id}`, datas)
            .then((res) => {
                console.log(res.data);
                // navigate('/')
                setSuccess("your form was succesfully updates...")


            })
            .catch((err)=>{
                console.log(err);
                setAlert("something went wrong")
            })
    }
    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div className='h-screen'>
            {alert &&(
                <p>
                    {alert}
                </p>
            )}
            <div className='flex flex-col justify-center items-center'>
                <form action="" className=' border-2 w-[580px]  m-8 p-6 bg-emerald-400' >
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder='Enter your name' value={name} onChange={(e) =>setName(e.target.value) } />
                    <label htmlFor="" >Email : </label>
                    <input type="email" placeholder='enter your mail id' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <div className='flex flex-cols m-4  text-center'></div>
                    <textarea type="text " placeholder='enter your address ' className='bg-white w-full' rows={6 } value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
                    <button onClick={updataForm} className='bg-white text-black p-2 w-full mt-2 rounded hover:bg-cyan-800 active:text-white'>Update Form</button>
                    {success && (<div>
                         <p className='text-center m-2 text-blue-900'>
                        {success}
                        
                    </p>
                    <button onClick={()=>navigate(`/form-details/${para.id}`)} className='w-full bg-amber-100 rounded'> See Updated Form</button>
                    </div>
                       )}
                    {/* {alert && (
                        <p className='text-center m-2 text-red-800'>{alert}</p>
                    )}

                    {success &&
                        (<p className='text-center m-2 text-red-800' onClick={()=>navigate("/")}> {success}</p>)}
                    <button onClick={()=>navigate(`/form-details`)} className='bg-white text-black p-2 w-full mt-2 rounded hover:bg-cyan-800 active:text-white'>Form-details</button> */}
                </form>

            </div>
        </div>

    )
}

export default EditForm;