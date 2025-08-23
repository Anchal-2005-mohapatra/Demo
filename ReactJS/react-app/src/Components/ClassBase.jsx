import React from "react";
import { Component } from "react";
import FunctionBase from "./FunctionBase";

class ClassBase extends Component
{
    render(){
           return(
        <div>
        <h1>ClassBase Components </h1>
        <FunctionBase />
        </div>
    );
    }
 
};
export  default ClassBase;