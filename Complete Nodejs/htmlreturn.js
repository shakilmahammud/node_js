const fs = require('fs')

const htpp = require('http')


const server = htpp.createServer((req,res)=>{
 fs.readFile('./index.html',(err,data)=>{
     res.write(data)
     res.end()
 })
})

server.listen(4141,()=>{
console.log('server is runing')
})