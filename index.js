const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

const trending = require('./data/trending.json');

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/trending',(req,res)=>{
    res.send(trending);
})

app.listen(port)