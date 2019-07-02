// 用ＩＰ地址来查询天气情况
const fs = require('fs')
const request = require('request')
const qs = require('querystring')

readIP('./ip.json',function(err,data){
    if(err){
        console.log(err)
    }else{
        
        let index = Math.floor(Math.random() * 5)
        let ip = data[index]
        console.log(ip)
        ip2geo(ip,function(err,body){
            if(err){
                console.log(err)
            }else{
                console.log(body)
            }
        })
    }
})

// 通过JSON.parse 来解析　IP列表中的地址
function readIP(path,callback){
    fs.readFile(path,function(err,data){
        if(err){
            callback(err)
        }else{
            try{
                data = JSON.parse(data)
                callback(null,data)
            }catch(err){
                callback(err)
            }
        }
    })
}

// 通过telize的公共GEO服务来获取城市信息
function ip2geo(ip,callback){
    var url = 'http://www.telize.com/geoip/' + ip
    request({
        url:url,
        json:true
    },function(err,resp,body){
        callback(err,body)
    })
}

// 通过openweatermap　公共服务来获取当地天气
function geo2weather(lat,lon,callback){
    var params = {
        lat:lat,
        lon:lon,
        APPID:'ed2d9b35ed92f34d9b7d7560d7bf5b61s' 
        //public key 是从openweathermap 申请的开发人员唯一的ｋｅｙ
    }

    var url = 'http://api.openweatermap.org/data/2.5/weather?'+qs.stringify(params)
    request({
        url:url,
        json:true
    },function(err,resp,body){
        callback(err,bodys)
    })    
}
// 遍历IP地址
function geo2weather(geos,callback){
    var weathers = []
    var geo
    var remain = geos.length
    for(var i = 0; i<geos.length;i++){
        geo = geos[i];
        (function(geo){
            geo2weather(ge.latitude,geo.longitude,function(err,weather){
                if(err){
                    callback(err)
                }else{
                    weather.geo = geo
                    weathers.push(weather)
                    remain--
                }
                if(remain ==0){
                    callback(null,weathers)
                }
            })
        })(geo)
    }
}

// 讲结果写入　weather.json
function writeWather(weathers,callback){
    var output = []
    var weather
    //使用for循环遍历每个IP地址信息
    for(var i =0; i<weathers.length;i++){
        weather = weathers[i]
        output.push({
            ip:weather.geo.ip,
            weather:weather.weather[0].main,
            regin:weather.geo.region
        })
    }
    // 使用fs.writeFile 函数将结果写入到weather.json中
    fs.writeFile('./weather.json',JSON.stringigy(oput,null,' '),callback)
}

