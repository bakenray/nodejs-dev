const querystring = require('querystring')
let str = 'keyWord=node.js&name=bakenray'
let obj =querystring.parse(str)
console.log(obj)