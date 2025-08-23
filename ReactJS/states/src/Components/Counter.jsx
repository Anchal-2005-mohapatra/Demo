import React from "react";
import { useState } from "react";
const Counter=()=>
{
    const [count, setCount] = useState(0);
    const increment =()=>
    {
        setCount(count+1);
    }
    const decrement =()=>
    {
        setCount(count-1)
    }
    // if (count == 0) 
    //     {setCount(0)}
    // else{ setCount(count-1)}
 return(
    <div>
        <h1>count:{count} </h1>
        <button onClick={increment}>Increment</button>
        {/* <button onClick={()=>{setCount(count-1)} }>Decrement</button> */}
        <button onClick={decrement}>decrement</button>
        <button onClick={()=>{setCount(0)}}>reset</button>
    </div>
 )
}
export default Counter;