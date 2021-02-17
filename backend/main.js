const express=require("express");
const app=express();
const fs=require("fs");

app.get('/', (req,res)=>{
    res.send('<h1>Hello Samuel</h1>');
});

app.listen(3000,() =>{console.log('listening on port 3000 successfully ')})