var express = require('express');

function external(cb) {
    console.warn(`333`);;
    process.nextTick(function () {
        console.warn(`444`);;
        throw new Error();
        console.warn(`55`);;
        cb.call(null, 'sunny');
    })
}

var app = express();
app.get('/weather', function (req, res) {
    console.warn(`11111`);
    external(function (data) {
        console.warn(`22222`);
        debugger;
        res.end('Weather of Beijing is ' + data);
    })
})
app.listen(8018);


function noop(){
    console.warn(`come in noop`);
}
process.on('uncaughtException', noop);