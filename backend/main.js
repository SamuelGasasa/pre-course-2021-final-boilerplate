const express=require("express");
const app=express();
const fs=require("fs");

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('<h1>Hello Samuel</h1>');
});
app.post('/post',(req,res)=>{
    const {body}=req;
    try{
        fs.writeFileSync('./backend/storage/test.json',JSON.stringify(body));
        res.send('successful post');
    }
    catch(e){
        res.send(`error: ${e}`);
    }
    
});

app.listen(3000,() =>{console.log('listening on port 3000 successfully ')});