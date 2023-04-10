const http = require('http')

http.createServer((req, res) =>{
    res.write("demo server")
    res.end()
}).listen(9600, ()=> console.log("server running"))