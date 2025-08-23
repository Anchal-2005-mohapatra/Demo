import React from "react";
import Student from "./Student";
const AllStudent = ({name, rollno, Class, address})=>
{
     return(
        <div>
        <Student Name={name} rollno={rollno} Class={Class} address={address}/>
        </div>
     )
}
export default AllStudent;