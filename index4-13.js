const util =require('util')
let obj = {
    keyWord:'node.js',
    name:'bakenray'
}
let str = util.inspect(obj,{
    'color':true
})
console.log(str)