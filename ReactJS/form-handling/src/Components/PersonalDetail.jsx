import React, { useContext } from 'react'
import { details } from '../App'

 const PersonalDetail = () => {
    console.log(details);

    const data = useContext(details);
    console.log(data);

  return (
    <div>
        <h1>name:{data.name}</h1>
        <h2>age:{data.age}</h2>
        <h2>address:{data.address}</h2>
    </div>
  )
}
export default PersonalDetail;
