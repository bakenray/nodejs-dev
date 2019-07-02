var http = require('http')
var fs = require('fs')

// 创建HTTP服务器
var server = http.createServer(function(req,res){
    
    // 设置响应头
    res.writeHead(200,{
        'content-type':'text/html'
    })

    // 读取文件数据
    var data = fs.readFileSync('./index.html')
    
    // 响应数据
    res.write(data);
    res.end()
})

server.listen(3000,function(){
    console.log('listening at 3000')
})