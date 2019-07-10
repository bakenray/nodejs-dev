var mongoClient = require('mongodb').mongoClient
var Db = require('mongodb').Db
var server = require('mongodb').server
var studentDb = new Db('student',new server('localhost','27017'))

var student = {
    id:'1101',
    name:'bakenray',
    age:26
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
        collection.insertOne(student,function(err,doc){
            studentDb.close()
            if(err){
                console.log('docuemnt err')
                console.log(err)
                return
            }
            console.log(doc[0])
        })
    })
})