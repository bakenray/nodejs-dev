var MongoClient = require('mongodb').MongoClient
var Db = require('mongodb').Db
var server = require('mongodb').server
var studentDb = new Db('student',new server('localhost','27017'))

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
        }
        collection.findOne({},function(err,docs){
            studendDb.close()
            if(err){
                console.log('findOne err')
                console.log(err)
            }
            console.log(docs)
        })
    })
})