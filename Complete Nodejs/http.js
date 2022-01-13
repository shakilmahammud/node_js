const http = require('http')

const server =http.createServer((req,res)=>{
 res.end("<h2>Hello</h2>")
})

server.listen(4141,()=>{
    console.log('Server is runnning')
})