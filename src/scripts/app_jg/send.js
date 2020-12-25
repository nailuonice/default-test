
var JPush = require("jpush-async/lib/JPush/JPushAsync.js")
var client = JPush.buildClient('db86152e57e8f36ac3eab2c3', '65a235be62a9e403bd2c059a')

function main() {
  client.push().setPlatform('android')
    // .setAudience(JPush.tag('555', '666'), JPush.alias('666,777'))
    .setAudience(JPush.alias("2007171119AATZBS"))
    .setNotification('Hi, JPush', JPush.ios('ios alert'), JPush.android('android alert', null, 1))
    .setMessage('msg content')
    .setOptions(null, 60, null, true)
    .send()
    .then(function(result) {
        console.log(result)
    }).catch(function(err) {
        console.log(err)
    });
}

main()