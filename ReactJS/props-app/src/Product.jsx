import React from "react";
const Product =(props)=>
{
    return(
    <div style={
    {height:"200px ", width:"400px", backgroundColor:"pink" , border:"1px solid black ", margin:"10px", padding : "10px"}
    }>
        <h1>Name:{props.Name}</h1>
        <h2>price:{props.price}</h2>
        <h3>rating:{props.rating}</h3>
        <p>Description :{props.Description}</p>

    </div>);
};
export default Product;