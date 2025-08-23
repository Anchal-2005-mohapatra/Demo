import React from "react";
import image from "../assets/bird.jpg";
const Product=()=>{
    return(
    <div className="h-60 w-70 ">
        <img src={image} alt="" />
        <h2>name:</h2>
        <h2>price:</h2>
        <h2>rating :</h2>
    </div>)
}
export default Product;
