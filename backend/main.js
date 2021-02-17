const express=require("express");
const app=express();
const fs=require("fs");
const { get } = require("http");


app.use(express.json());

app.get('/b', (req,res)=>{
    const getAll=fs.readdirSync('./backend/storage');
    console.log(getAll);
    res.send(getAll);
});

app.get('/b/:id',(req,res)=>{
    const {id}=req.params;
    try{
        const file=fs.readFileSync(`./backend/storage/test${id}.json`);
        const string=JSON.parse(file);
        console.log(string);
        console.log(file);
        res.send(file);
    }
    catch(e){
        res.send(`no such list: ${e}`);
    }
});

app.post('/b',(req,res)=>{
    const {body}=req;
    try{
        const newFile=fs.writeFileSync(`./backend/storage/test${body.text}.json`,JSON.stringify(body, null, 4));
        console.log(newFile);
        res.send(newFile);
    }
    catch(e){
        res.send(`error: ${e}`);
    }
});

app.put('/b/:id',(req,res)=>{
    const {id}=req.params;
    const {body}=req;
    try{
        fs.writeFileSync(`./backend/storage/test${id}.json`,JSON.stringify(body, null ,4));
        const file=fs.readFileSync(`./backend/storage/test${id}.json`);
        console.log(file);
        res.send(file);
    }
    catch(e){
      res.send(`couldn't find the list ${id} you were looking for`);  
    }
});

app.delete('/b/:id',(req,res)=>{
    const {id}=req.params;
    try{
        fs.unlinkSync(`./backend/storage/test${id}.json`);
        res.send('file deleted');
    }
    catch(e){
        res.send(`couldn't delete the list${id}.`);
    }
});

app.listen(3000,() =>{console.log('listening on port 3000 successfully')});