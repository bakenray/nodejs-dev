const dns = require('dns')
let domain ='www.bakenray.com'
dns.resolve(domain,function(err,address){
    if(err){
        console.log(err)
        return
    }
    console.log(address)
})