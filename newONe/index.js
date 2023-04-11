const http = require('http')
const path = require('path')
const fs = require('fs')



// http.createServer((req, res) =>{
//     res.write("demo server")
//     res.end()
// }).listen(9600, ()=> console.log("server running"))

const server = http.createServer( (req, res) =>{
    console.log(req.url) 
    res.write("hello")
    res.end()
    
    // if (req.url === '/'){
    //     console.log("hello")
    //     // fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
    //     //     if (err) throw err;
    //     //     res.end(content)
    //     // })
    // }
})


server.listen(6666, ()=>console.log("Server running"))