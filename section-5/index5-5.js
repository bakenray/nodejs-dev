const fs = require('fs')
fs.open('./tmp/text.txt','r+',function(err,fd){
    if(err){
        return console.error(err)
    }
    console.log('成功打开文件')
})