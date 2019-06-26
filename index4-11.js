const querystring = require('querystring')
let obj = {
    keyWord:'node.js',
    name:'bakenray'
}
let str = querystring.stringify(obj)
console.log(str)