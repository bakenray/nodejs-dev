const http = require('http');

const server = http.createServer(function(req,res){
    res.writeHead(200,{
        'content-type':'text/plain'
    })
    res.end('Hello,node.js')
})
server.listen(3000,function(){
    console.log('在3000端口监听着，试试看')
})