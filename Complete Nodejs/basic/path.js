const path = require('path')

const mycurrentpath = __filename
console.log(path.basename(__dirname)) // it's give us directory name

console.log(path.extname(mycurrentpath)) //it's give us file curent file extention formate

let pathObj = {
    dir: 'usr/local',
    name: 'testFile',
    exit: '.js'
}


console.log(path.format(pathObj)) // it's format us our objcet

console.log(path.isAbsolute(mycurrentpath))// true
console.log(path.isAbsolute('./math.js'))//false

console.log(path.join('user','local','shakil'))

console.log(path.resolve(__dirname,'script'))

console.log(path.parse(mycurrentpath))

