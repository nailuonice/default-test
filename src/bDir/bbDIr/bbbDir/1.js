const server_send = require("./2.js");
var tmp = new Promise(function (resolve, reject){
    server_send.get_search_data(function (err, data) {
        console.warn("come in 2222222"+data);
        if (err) {
            reject(error);
        }else{
            resolve(data);
        }
    });
});
// tmp.then(function (data) {
//     console.warn("***"+data);
// }).catch(function (err) {
//     console.warn(err);
// })
async function getData() {
    // return await tmp;
    return await Promise.all([tmp,tmp]);

}
getData().then(function (data) {
    console.warn("***"+data);
}).catch(function (err) {
    console.warn(err);
});

var qs = require('querystring');
var param = {a:'1',b:'2'};
var data = param || "defaultData please check!";
var content = qs.stringify(data);
console.warn(data.toString());
console.warn(param, data, qs.stringify(data),content,typeof(content));

