const fs = require('fs')

fs.open('./tmp/text.txt','r+',function(err,fd){
    if(err){
        return console.log(err)
    }
    console.log('文件打开成功')
    
    // 关闭文件
    fs.close(fd,function(err){
        if(err){
            console.log(err)
        }
        console.log('文件关闭成功')
    })
    // 文件打开后自动关闭
    // fs.writeFileSync("./tmp/text.txt","abcs")
})


