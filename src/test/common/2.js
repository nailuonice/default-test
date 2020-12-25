var fs = require('fs');
var http = require('http');
var qs = require('querystring');


exports.get_search_data = function(cb){
    var data = {
        key:"1111111111111"
    };

    var content = qs.stringify(data);
    var options = {
        // host:'47.92.39.141',
        // port:7070,
        host:'127.0.0.1',
        port:7073,
        path:'/v1/blockchain/test',
        method: 'POST',
        headers:{
            //'Content-Type':'application/x-www-form-urlencoded',
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'Content-Length':Buffer.byteLength(content)
        }
    };

    var req = http.request(options,function(res){
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        var body = '';
        res.setEncoding('utf-8');
        res.on('data',function(chunk){
            console.log('body分隔线---------------------------------\r\n');
            console.log(chunk);
            body += chunk;
        });
        res.on('end',function(){
            console.log('No more data in res.********');
            console.warn(typeof(body));
            cb && cb(null, body)
        });
    });

    req.on('error',function(err){
        console.error(err);
    });
    req.write(content);

    req.end();
}
