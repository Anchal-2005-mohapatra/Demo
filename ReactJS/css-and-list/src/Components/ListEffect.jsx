import React, { useEffect,useState } from "react";
const ListEffect=()=>{
    const [product, setProduct] =useState([]);

    const getProduct = async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const data =await response.json();
        setProduct(data);
        console.log(data)
       

    };
    useEffect (()=>{getProduct();}, []);
    return(
        <div>
           <h1>List Effect</h1>
           {product?.map((item)=>(
            <div>
                <img src={item.image} alt={item.title} height="200px" width="200px"/>
                <h1>{item.title}</h1>
                <h2>{item.price}</h2>
                <h2>{item.description}</h2>
                
                </div>
           ))}
        </div>
    )
}
export default ListEffect;