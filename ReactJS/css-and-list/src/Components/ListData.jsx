import React from "react";
const ListData=()=>{
    const data =[
        {
            id:1,
            name:"Anchal",
            age:20
        },
        {
            id:2,
            name:"Michal",
            age:17
        },
        {
             id:3,
             name:"om",
             age:15
        },
        {
            id:4,
            name:"maa",
            age:40
        },
        {
            id:5,
            name:"baba",
            age:44
        },
        {
            id:6,
            name:"jeje",
            age:57
        }

    ]
   return (
        <div>
            <h1 className="text-center text-2xl text-pink-700">List of datas</h1>
            <div className="grid grid-cols-3  ">
                {data.map((item)=>(
                    <div className=" p-4 m-5 bg-emerald-500 rounded-2xl" key={item.id}>
                        <h1>Name:{item.name}</h1>
                        <p>id:{item.id}</p>
                        <p>age:{item.age}</p>
                        </div>
                ))}
            </div>
        </div>
    )
}
export default ListData;