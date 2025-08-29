import React, { useState } from 'react'

 const Controll = () => {
    const [name, setName] = useState("");
    const [email, SetEmail] = useState("");
    const [number, setNumber] = useState("");

    const button = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            number
        };
        if (name && email && number) {
            console.log(data);
            setName("");
            SetEmail("");
            setNumber("");
        }
        else {
            alert("please fill the required information");
        }
    }
    return (
        <div>
            <form action="" className='space-x-8 text-center'>
                <input type="text " placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='email id' value={email} onChange={(e) => { SetEmail(e.target.value) }} />
                <input type="number" placeholder='enter your no' value={number} onChange={(e)=>{setNumber(e.target.value)}} />
                <button onClick={button} className='border-2 rounded-2xl text-md text-white p-2 bg-blue-700' >Submit</button>
            </form>
        </div>
    )
}
export default Controll;