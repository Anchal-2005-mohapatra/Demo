import React from "react";
const PersonalDetails=({name, rollno, Class, address})=>
{
    return(
        <div>
           <h1> Name:{name}</h1>
           <h2>RollNo:{rollno}</h2> 
           <h2>Class:{Class}</h2>
           <h2>Address :{address}</h2>

        </div>
    )
}
export default PersonalDetails;