const express = require('express');

let bodyParser = require('body-parser')



let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let port = process.env.PORT || 8086 ;

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

app.post('/api/user', function(req, res) {
    let user_id = req.body.user_id;
    let name = req.body.name;
    res.send(user_id + ' From Post' + name);
});

app.post
app.listen( port, () => {
    console.log("Server Started : " ,port)
});