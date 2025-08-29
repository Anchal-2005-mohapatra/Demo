import React, { use, useState } from 'react'

const Form = () => {
    const [first, setFirst] = useState("");
    const [middile, setMiddile] = useState("");
    const [last, setLast] = useState("");
    const [date, setDate] = useState("");
    const [ph, setPh] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [display, setDisplay] = useState("");
    // const [gender, setGender] = useState("");


    const submit = (e) => {
        e.preventDefault();
        // console.log(first)
        // console.log(middile)



        setDisplay({ first, middile, last, date, ph, address, email });
           console.log(display)
        
        setFirst("");
        setMiddile("");
        setLast("");
        setDate("");
        setPh("");
        setAddress("");
        setEmail("");
     


        // const data = {
        //     first,
        //     middile,
        //     last,
        //     date,
        //     ph,
        //     address,
        //     email,

        // };
        // if (first && middile && last && date && ph && address && email ) {
        //     console.log(data);
        //     setFirst("");
        //     setMiddile("");
        //     setLast("");
        //     setDate("");
        //     setPh("");
        //     setAddress("");
        //     setEmail("");

        // }
        // else
        // {
        //     alert("enter the required filed")
        // }
    }



    return (
        <div>
            <form action="" className=' bg-purple-100 rounded'>
                <div className='flex m-4 space-x-4 items-center align-center'>
                    <label htmlFor=""> Enter your first Name : </label>
                    <input type="text" placeholder='Enter your first Name' value={first} onChange={(e) => { setFirst(e.target.value) }} />
                    <label htmlFor="">Enter your middle name : </label>
                    <input type="text" placeholder='Enter your middle Name' value={middile} onChange={(e) => { setMiddile(e.target.value) }} />
                    <label htmlFor="">Enter your last Name</label>
                    <input type="text" placeholder='Enter your last name' value={last} onChange={(e) => { setLast(e.target.value) }} />
                </div>
                <div className='p-4'>
                    <label htmlFor=""> Enter your data of birth :  </label>
                    <input type="date" placeholder='data of birth' value={date} onChange={(e) => { setDate(e.target.value) }} />
                </div>
                <div className='p-4'>
                    <label htmlFor="">Enter your phone no : </label>
                    <input type="number" name="name" id="" placeholder='number' value={ph} onChange={(e) => { setPh(e.target.value) }} />
                </div>
                <div className='p-4'>
                    <label htmlFor="">Enter your Adress :</label>
                    <input type="text" placeholder='Enter your Permanent Address' value={address} onChange={(e) => { setAddress(e.target.value) }} />
                </div>
                <div className='p-4'>
                    <label htmlFor="">Enter your mailid : </label>
                    <input type="email" placeholder='Enter your email id' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                {/* <div className='p-4 space-x-4'>
                    <label htmlFor="">Gender : </label>
                    <label htmlFor="">male</label>
                    <input type="checkbox" value={gender} onChange={(e) => { setGender(e.target.value) }}  />
                    <label htmlFor="">female</label>
                    <input type="checkbox" value={gender} onChange={(e) => { setGender(e.target.value) }} />
                    <label htmlFor="">Transgender</label>
                    <input type="checkbox" value={gender} onChange={(e) => { setGender(e.target.value) }} />
                </div> */}
                <button className='text-center p-4 bg-pink-300 rounded m-4' onClick={submit}>Submit</button>


            </form>
            {setDisplay && (<div> <h1>Submitted datas  : </h1>
            
                <h2>first ={display.first}</h2>
                <h2>middile ={display.middile}</h2>
                <h2>last ={display.last}</h2>
                <h2>date of birth ={display.date}</h2>
                <h2>ph={display.ph}</h2>
                <h2>address = {display.address}</h2>
                <h2>mail id={display.email}</h2>
            </div>)}
        </div>
    )
}
export default Form;