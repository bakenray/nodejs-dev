const path =require('path')
const str = 'C:/fontEnd/node/node.js'
let obj =path.parse(str)
let strs = path.format(obj)
console.log(obj)
console.log(strs)