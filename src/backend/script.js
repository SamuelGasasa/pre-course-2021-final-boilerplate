const express=require('express');
const app=express();
const {readFileSync} = require('fs');
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('<h1>Hello</h1>');
});

app.listen(3000);