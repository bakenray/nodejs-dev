var MongoClient = require('mongodb').MongoClient
var Db = require('mongodb').Db
var server = require('mongodb').server
var studentDb = new Db('student',new server('localhost','27017'))

var student1 = {
    id:1201,
    name:'张三',
    age:13
}
var student2 = {
    id:1202,
    name:'李四',
    age:14
}
var student3 = {
    id:1203,
    name:'王五',
    age:15
}

studentDb.open(function(err,db){
    if(err){
        console.log('open err')
        console.log(err)
        return
    }
    db.collection('student',function(err,collection){
        if(err){
            console.log('collection err')
            console.log(err)
            return
        }
        collection.deleteOne({name:'bakenray'},function(err,docs){
            studentDb.close()
            if(err){
                console.log('delete failed')
                console.log(err)
                return
            }
            console.log('delete successs')
        })
    })
})