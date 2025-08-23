import React from "react";
import PersonalDetails from "./PersonalDetails";
const Student =({Name, rollno, Class, address})=>
{
    return(
        <div>
            <PersonalDetails name={Name} rollno={rollno} Class={Class} address={address} />
        </div>
    )
}
export default Student;