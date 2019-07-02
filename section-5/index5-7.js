const fs = require('fs')

fs.open('./tmp/text.txt','r',function(err,fd){

    var readBuffer = new Buffer(1024),
    offset = 0,
    len = readBuffer.length,
    filePosition = 100;
    fs.read(fd,readBuffer,offset,len,filePosition,function(err,readByte){
        console.log('读取数据总数：' + readByte +'bytes')
        // 读取数据总数
        console.log(readBuffer.slice(0,readByte))
        // 数据已经被填充到readBuffer中
    })


})