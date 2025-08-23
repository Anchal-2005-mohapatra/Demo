import React from "react";  
const StyleObject=()=>{
    const style ={
        color:"darkblue",
        backgroundColor:"pink",
        fontSize:"55px",
        textAlign:"center"
    }
    return(
        <div>
            <h1 style={style}>StyleObject</h1>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, harum! Assumenda quam, esse tenetur repellat, officiis, cum neque doloremque tempore fugiat incidunt a est voluptate. Libero sed enim reprehenderit quam.</p>
        </div>
    )
}
export default StyleObject;