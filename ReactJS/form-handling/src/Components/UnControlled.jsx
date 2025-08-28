import React,{useRef} from 'react'

const UnControlled=()=> {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef =useRef();
  

  const buttonHandle =(e)=>{
    e.preventDefault();
console.log(nameRef.current.value);
console.log(emailRef.current.value);
console.log(numberRef.current.value);
  };

  return (
    <div>
      <form action="" className='space-x-8 text-center'>
         <input type="text " placeholder='Enter your name' ref={nameRef} />
        <input type="email" placeholder='email id' ref={emailRef} />
        <input type="number" placeholder='enter your no' ref={numberRef} />
        <button onClick={buttonHandle} className='border-2 rounded-2xl text-md text-white p-2 bg-blue-700'>Submit</button>
      </form>
       
    </div>
  );
};
export default UnControlled;