const fs = require('fs')
// 使用ｓｔｒｉｎｇ写入文件
// fs.appendFile('message.txt','data to append','utf-8',callback)

// 使用buffer写入文件
fs.appendFile('message.text','data to append',(err)=>{
    if(err) throw err;
    console.log('The "data to append" was appended to file!')
    
})