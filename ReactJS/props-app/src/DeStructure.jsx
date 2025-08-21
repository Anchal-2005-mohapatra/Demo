import React from "react";
const DeStructure =({Name, price, rating, Description})=>
{
   return(
    <div style={{margin:"20px",backgroundColor:"gray"}}>
       <h1> Name: {Name}</h1>
       <h1>price :{price}</h1>
       <h1>Rating :{rating}</h1>
       <h1>Description :{Description}</h1>
    </div>
   )
}
export default DeStructure;