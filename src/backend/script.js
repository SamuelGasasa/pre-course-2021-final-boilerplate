const express=require('express');
const app=express();
const {readFileSync} = require('fs');
// app.use(express.json());

app.get('/', (req, res) =>{
    const data = readFileSync('./GET/get.json', 
        {encoding:'utf8', flag:'r'});
res.send(data);
});


app.get('/:id', (req, res) =>{
    const data = JSON.parse(readFileSync('./GET-ID/getID.json',
        {encoding:'utf8', flag:'r'}));
const id=req.params.id;
for(let obj of data){
    if(obj.id===id){ 
        res.send(obj);
    }
}
    res.send('error');

});


app.listen(3000);