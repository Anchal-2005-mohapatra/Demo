// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
import Product from "./Product";
import DeStructure from "./DeStructure";
import AllStudent from "./AllStudent";
const App=()=>
{
   return(
    <div>
    {/* <Product  Name="Mobile"
     price ="385"
     rating="5.4"
     Description ="you have to know about the product" />
      <Product Name="lapi"
      price="489"
      rating="2.5"
      Description="Lapi is more usefull in your daily life"/>
        <Product 
        Name="watch"
        price ="342"
        rating ="3.4"
        Description="watch is usefull for timing in your life"
        />
 */}



       
        {/* <DeStructure  Name="Mobile"
     price ="385"
     rating="5.4"
     Description ="you have to know about the product" />
      <DeStructure Name="lapi"
      price="489"
      rating="2.5"
      Description="Lapi is more usefull in your daily life"/>
        <DeStructure 
        Name="watch"
        price ="342"
        rating ="3.4"
        Description="watch is usefull for timing in your life"
        /> */}

        <AllStudent  name="Anchal" rollno="12" Class="12th" address= "Bhubaneswar" />
      </div>
  
   );
};
export default App;
