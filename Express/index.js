const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();


app.get('/api', (req, res)=>{
    res.json({
        message:"welcome to JWT"
    })
})

app.post('api/posts', verifyToken, (req, res) =>{
    jwt.verify(req.token, 'fiajfiej!2u32u', (err, data) =>{
        if (err){
            res.sendStatus(403)
        }else{
            res.json({
                message: "Post created", 
                data
            })
        }
    })
})

app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: "knapan007",
        email: 'kanpan077@gmail.com'
    }
    jwt.sign({user}, 'fiajfiej!2u32u', {expiresIn: '3days'}, (err, token) =>{
        res.json({
            token
        })
    })
})


function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1]

        req.token = bearerToken;
        next()
    }else{
        res.sendStatus(403)
    }
}


app.listen(5555,()=>{
    console.log("Server running")
})