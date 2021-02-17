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

app.get('/b/:name',(req,res)=>{
    const {name}=req.params;
    try{
        const file=fs.readFileSync(`./backend/storage/test${name}.json`);
        const string=JSON.parse(file);
        console.log(string);
        res.send('found the file');
    }
    catch(e){
        console.log('no such file');
        res.send(`error: ${e}`);
    }
});

app.post('/b',(req,res)=>{
    const {body}=req;
    try{
        const newFile=fs.writeFileSync(`./backend/storage/test${body.name}.json`,JSON.stringify(body));
        res.send(newFile);
    }
    catch(e){
        res.send(`error: ${e}`);
    }
});

app.put('/put',(req,res)=>{
    let file=fs.readFileSync('./backend/storage/test.json');
    let stringFile=JSON.parse(file);
    console.log(stringFile.lastName);
    res.send('hi');
});

app.delete('/delete',(req,res)=>{
    fs.unlinkSync('./backend/storage/test.json');
    res.send('file deleted');
});

app.listen(3000,() =>{console.log('listening on port 3000 successfully ')});