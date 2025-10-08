

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
