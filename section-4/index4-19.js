const dns = require('dns')
let domain ='www.bakenray.com'
dns.lookup(domain,function(err,address){
    if(err){
        console.log(err)
        return
    }
    console.log(address)
})