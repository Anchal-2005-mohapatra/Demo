import React from "react";
import image from "../assets/bird.jpg";
const Product=({name, price, rating})=>{
    return(
    <div className="h-60 w-70 bg-amber-300 border-2 p-3 m-auto rounded-xl shadow-xl" >
        <img src={image} alt="" className="h-30 w-50 m-auto rounded-xl"/>
        <h2 className="text-2xl text-blue-900 font-bold font-sans ">Name :{name}</h2>
        <h2 className="text-xl  text-blue-900 font-bold font-mono">price :{price}</h2>
        <h2 className="text-xl  text-blue-900 font-bold font-serif">rating :{rating}</h2>
    </div>)
}
export default Product;
