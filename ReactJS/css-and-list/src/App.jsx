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
import "./style.css"
import React from "react";  
import InlineCss from "./Components/InlineCss";
import StyleObject from "./Components/StyleObject";
import GlobalCss from "./Components/GlobalCss";
import ModuleCss from "./Components/ModuleCss";
import Product from "./Components/Product";
const App=()=>
{
 return(<div>
    Css and list
    <Product name="bird" price="300" rating="4.3" />
    <InlineCss />
    <StyleObject/>
    <GlobalCss/>
    <ModuleCss/>
  </div>)  
}
export default App;