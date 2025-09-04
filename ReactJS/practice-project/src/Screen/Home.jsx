import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const para = useParams();

    const [data, setData] = useState([]);
    const [success, setSuccess] = useState("");
    const [alert, setAlert] = useState("");
    const handleButton = () => {
        axios
            .get("http://localhost:5000/forms")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
                setAlert("");
                setSuccess("data was sucessfully store in database");
            })
            .catch((err) => {
                console.log(err);
                setSuccess("");
                setAlert("The data was not yet fetch!")
            })
    }
    useEffect(() => {
        handleButton()
    }, [])

    return (

        <div className=' '>
            {alert &&(
                <p className='text-center m-2 text-red-800'>{alert}</p>
            )}
            <div className='p-6 grid gap-3 grid-cols-1 md:grid-cols-3 lg-grid-cols-4 '>
                {data.map((items) => (
                    <div className='bg-cyan-800 w-[400px] p-8 text-white rounded-2xl shadow ' key={items.id}>
                        <h1 className='p-2'>Name : {items.name}</h1>
                        <h2 className='p-2'>Email-id:{items.email} </h2>
                        <p className='p-2'>Address :{items.address}</p>
                        <button className=' p-2 bg-emerald-50 text-black rounded hover:bg-emerald-600 active:text-white ' onClick={() => { navigate(`/form-details/${items.id}`) }}>Want to Change</button>
                    </div>
                ))}


            </div>

        </div>
        // </div>

    )
}

export default Home