var http = require('http')
var server = http.createServer(function(req,res){
    // 设置响应头
    res.writeHead(200,{
        'content-type':'text/plain'
    })
    // 设置响应数据
    res.end('Hello Node.js')
})

server.listen(3000,function(){
    console.log('listen port 3000')
})
