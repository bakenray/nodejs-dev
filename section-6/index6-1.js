var net =require('net')

// // 创建ＴＣＰ服务器
// var server = net.createServer(function(socket){
//     console.log('someone connects')
// })

// // 设置监听端口
// server.listen(18001,function(){
//     console.log('server is listening at 18001')
// })


// 手动触发监听端口
var server = net.createServer(function(socket){
    console.log('someone connetcs')
})
server.listen(18001)
server.on('listening',function(){
    console.log('server is listening')
})
