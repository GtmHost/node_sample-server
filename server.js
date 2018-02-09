const express = require('express');

let app = express();

app.get('/',(req, res)=>{
    res.send('Welcome to Express!');
});

app.get('/getJson',(req , res)=>{
    let user = req.param('name');
    res.send({
        name:user,
        age:22,
        likes:['sleeping' , 'coding' , 'learning']
    })
});

app.post
app.listen(8086);