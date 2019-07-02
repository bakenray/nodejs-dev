const net = require('net')
const server = net.createServer(function(socket){
    // 本地端口
    console.log('localport:' + socket.localPort)
     // 本地ip地址
    console.log('localAddress:' + socket.localAddress)   
    // 远程端口
    console.log('remotePort:' + socket.remotePort)
     // 远程IP协议族
    console.log('remoteFamily:' + socket.remoteFamily)   
    // 远程IP地址
    console.log('remoteAddress:' + socket.remoteAddress)
})
server.listen(18001,function(){
    console.log('server is listening')
})