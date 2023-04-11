const fs = require('fs')
const path = require('path')


// fs.mkdir(path.join(__dirname, '/Sagar'), {}, (err)=>{
//     if(err) throw err;
//     console.log("folder created")
// })


// fs.writeFile(path.join(__dirname, '/Sagar', 'sample.txt'), "Welcome Home!", (err)=>{
//     if(err) throw err;
//     console.log("file created.")
// })

// fs.readFile(path.join(__dirname, '/Sagar', 'sample.txt'), 'utf-8', (err, data)=>{
//     if (err) throw err;
//     console.log(data)
// })

fs.rename(path.join(__dirname, '/Sagar', 'sample.txt'), path.join(__dirname, '/Sagar', 'demo.txt'), (err)=>{
    if (err) throw err;
    console.log("file renamed")
})