const tencentcloud = require("tencentcloud-sdk-nodejs");
const SmsClient = tencentcloud.sms.v20190711.Client;

function main() {
    const SmsClient = tencentcloud.sms.v20190711.Client;

    const clientConfig = {
        credential: {
            secretId: "AKIDEG1YaM266rMcU6uZOzyhAhzRdZaRqMRG",
            secretKey: "e43701de481bd30b3b6ec62c43492633",
        },
        region: "",
        profile: {
            httpProfile: {
                endpoint: "sms.tencentcloudapi.com",
            },
        },
    };

    const client = new SmsClient(clientConfig);
    const params = {
        "TemplateName": "小仕测试推广短信",
        "TemplateContent": "您的验证码是：{1}，请于10分钟内正确输入进行登录，切勿将验证码泄露于他人。",
        "SmsType": 0,
        "International": 0,
        "Remark": "小仕测试推广短信"
    };
    client.AddSmsTemplate(params).then(
        (data) => {
            console.log(data);
        },
        (err) => {
            console.error("error", err);
        }
    );
}

main();