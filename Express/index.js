const express = require('express');
const jwt = require('jsonwebtokens');

const app = express();
app.get('/api', (req, res)=>{
    res.json({
        message:"welcome to JWT"
    })
})
