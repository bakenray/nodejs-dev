var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/student'
MongoClient.connect(url,function(err,db){
    if(err){
        console.log('connect failed')
        console.log(err)
        return
    }
    console.log('connect success')
})