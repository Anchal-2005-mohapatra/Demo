const http = require("http");
const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    return res.send("Home Page");
});
app.get('/about',(req,res)=>{
    return res.send(`About Page ${req.query.name} anchal`);
});
app.get('/contact',(req,res)=>{
    return res.send("Contact Page");
});

app.listen(8000,()=>{
    console.log("Express server started on port 8000")
});