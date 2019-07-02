const fs = require('fs')

// 异步操作删除文件
// fs.unlink('./tmp/hello',(err)=>{
//     if(err) throw err ;
//     console.log('successfully deleted ./temp/hello')
// })

//同步操作删除文件
fs.unlinkSync('./tmp/hello')
console.log('successfully deleted /tmp/hello')