import React,{createContext} from 'react'
import "./style.css";
import UnControlled from './Components/UnControlled'
import Reference from "./Components/Reference"
import Controll from './Components/Controll';

import  AllStudent from './Components/AllStudent';

export const details = createContext();

 const App = () => {
  
  return (
    <div>
   {/* <Reference/>
   <UnControlled/> */}
     {/* <Controll/> */}

     <details.Provider value={{name:"Anchal", age:20, address:"BBSR"}}>   <AllStudent/> </details.Provider>
   
    </div>
  )
}
export default App;
 