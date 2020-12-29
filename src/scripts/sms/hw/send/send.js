/*jshint esversion: 6 */
var https = require('https'); //引入https模块
var url = require('url'); //引入url模块
var querystring = require('querystring'); // 引入querystring模块

//必填,请参考"开发准备"获取如下数据,替换为实际值
var realUrl = 'https://rtcsms.cn-north-1.myhuaweicloud.com:10743/sms/batchSendSms/v1'; //APP接入地址+接口访问URI
var appKey = 'X2S7q1iqLsRAo3I5zf6FtIGP9uYX'; //APP_Key
var appSecret = 'YbCt26YV08z0I2GP4M8pI6K9ho24'; //APP_Secret
var sender = '8820122523199'; //国内短信签名通道号或国际/港澳台短信通道号
var templateId = '9392ef032f284f1b8c55c5f8f76d1ab1'; //模板ID

//条件必填,国内短信关注,当templateId指定的模板类型为通用模板时生效且必填,必须是已审核通过的,与模板类型一致的签名名称
//国际/港澳台短信不用关注该参数
var signature = "微拍堂"; //签名名称

//必填,全局号码格式(包含国家码),示例:+8615123456789,多个号码之间用英文逗号分隔
var receiver = '+8617600489317'; //短信接收人号码

//选填,短信状态报告接收地址,推荐使用域名,为空或者不填表示不接收状态报告
var statusCallBack = '';

/**
 * 选填,使用无变量模板时请赋空值 var templateParas = '';
 * 单变量模板示例:模板内容为"您的验证码是${1}"时,templateParas可填写为'["369751"]'
 * 双变量模板示例:模板内容为"您有${1}件快递请到${2}领取"时,templateParas可填写为'["3","人民公园正门"]'
 * 模板中的每个变量都必须赋值，且取值不能为空
 * 查看更多模板和变量规范:产品介绍>模板和变量规范
 */
var templateParas = '["369751"]'; //模板变量，此处以单变量验证码短信为例，请客户自行生成6位验证码，并定义为字符串类型，以杜绝首位0丢失的问题（例如：002569变成了2569）。

/**
 * 构造请求Body体
 * 
 * @param sender
 * @param receiver
 * @param templateId
 * @param templateParas
 * @param statusCallBack
 * @param signature | 签名名称,使用国内短信通用模板时填写
 * @returns
 */
function buildRequestBody(sender, receiver, templateId, templateParas, statusCallBack, signature) {
  if (null !== signature && signature.length > 0) {
    return querystring.stringify({
      'from': sender,
      'to': receiver,
      'templateId': templateId,
      'templateParas': templateParas,
      'statusCallback': statusCallBack,
      'signature': signature
    });
  }

  return querystring.stringify({
    'from': sender,
    'to': receiver,
    'templateId': templateId,
    'templateParas': templateParas,
    'statusCallback': statusCallBack
  });
}

/**
 * 构造X-WSSE参数值
 * 
 * @param appKey
 * @param appSecret
 * @returns
 */
function buildWsseHeader(appKey, appSecret) {
  var crypto = require('crypto');
  var util = require('util');

  var time = new Date(Date.now()).toISOString().replace(/.[0-9]+\Z/, 'Z'); //Created
  console.log(Date.now(), time)
  var nonce = crypto.randomBytes(64).toString('hex'); //Nonce
  var passwordDigestBase64Str = crypto.createHash('sha256').update(nonce + time + appSecret).digest('base64'); //PasswordDigest
  console.log(nonce, time, passwordDigestBase64Str)


  digestBase64Str = crypto.createHash('sha256').update("5fe97f2b5ec3c53e40f76ccb" + "2020-12-28T06:46:03Z" + "YbCt26YV08z0I2GP4M8pI6K9ho24").digest('base64')
  console.log(digestBase64Str)

  return util.format('UsernameToken Username="%s",PasswordDigest="%s",Nonce="%s",Created="%s"', appKey, passwordDigestBase64Str, nonce, time);
}

var urlobj = url.parse(realUrl); //解析realUrl字符串并返回一个 URL对象

var options = {
  host: urlobj.hostname, //主机名
  port: urlobj.port, //端口
  path: urlobj.pathname, //URI
  method: 'POST', //请求方法为POST
  headers: { //请求Headers
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'WSSE realm="SDP",profile="UsernameToken",type="Appkey"',
    'X-WSSE': buildWsseHeader(appKey, appSecret)
  },
  rejectUnauthorized: false //为防止因HTTPS证书认证失败造成API调用失败,需要先忽略证书信任问题
};
// 请求Body,不携带签名名称时,signature请填null
var body = buildRequestBody(sender, receiver, templateId, templateParas, statusCallBack, signature);

// var req = https.request(options, (res) => {
//   console.log('statusCode:', res.statusCode); //打印响应码

//   res.setEncoding('utf8'); //设置响应数据编码格式
//   res.on('data', (d) => {
//     console.log('resp:', d); //打印响应数据
//   });
// });
// req.on('error', (e) => {
//   console.error(e.message); //请求错误时,打印错误信息
// });
// req.write(body); //发送请求Body数据
// req.end(); //结束请求
