const fs = require('fs')


const obj = {
    name: 'Shakil',
    email: 'me@gmail.com',
    address: 'dhaka',
    country : 'bd'
}

const  data = JSON.stringify(obj)

fs.writeFile('./test.json',data,(err)=>{
 if(err){
     console.log(err)
 }else{
     console.log('success')
 }
})
