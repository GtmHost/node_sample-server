const axios  = require('axios');

axios.get('http://localhost:8086/getJson').then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.log(err);
});