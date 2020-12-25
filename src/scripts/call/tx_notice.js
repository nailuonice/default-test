var QcloudSms = require("qcloudsms_js");
// 语音消息应用 SDK AppID
var appid = 1400193830;  // SDK AppID 以1400开头
// 语音消息应用 App Key
var appkey = "e43701de481bd30b3b6ec62c43492633";
// 需要发送语音消息的手机号码
var phoneNumbers = ["17600489317"];
// 语音模板 ID，需要在语音消息控制台中申请
var templateId = 773361;  // NOTE: 这里的模板 ID`7839`只是示例，真实的模板 ID 需要在语音消息控制台中申请
// 实例化 QcloudSms
var qcloudsms = QcloudSms(appid, appkey);
// 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
function callback(err, res, resData) {
  if (err) {
      console.log("err: ", err);
  } else {
      console.log("request data: ", res.req);
      console.log("response data: ", resData);
  }
}

// 指定模板发送语音通知
var params = [];
var tvsender = qcloudsms.TtsVoiceSender();
tvsender.send("86", phoneNumbers[0], templateId, params, 2, "", callback);

// // 发送语音验证码
// var cvsender = qcloudsms.CodeVoiceSender();
// cvsender.send("86", phoneNumbers[0], "1234", 2, "", callback);