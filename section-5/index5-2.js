const fs = require('fs')
// fs操作修改文件名后获取信息
fs.rename('./tmp/hello','./tmp/world',(err)=>{
    if(err) throw err
    fs.stat('./tmp/world',(err,stats)=>{
        console.log(`stats:${JSON.stringify(stats)}`)
    })
})