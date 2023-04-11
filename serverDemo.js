const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) =>{

    // console.log(req.url)
    if (req.url === '/'){
        fs.readFile(path.join(__dirname, 'newONe', 'index.html'), (err, content)=>{
            if(err) throw err;
            res.end(content)
        })
    }
    if (req.url === '/api'){
        const person = [
            {name:"Sagar", age:19},
            {name:"Dona", age:22},
            {name:"Akhila", age:22},
            {name:"Thomas", age:25}
        ]
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(person))
    }
    // res.write("demo server")
    // res.end()
}).listen(9600, ()=> console.log("server running"))