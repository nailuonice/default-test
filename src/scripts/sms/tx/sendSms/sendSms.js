const tencentcloud = require("tencentcloud-sdk-nodejs");
const SmsClient = tencentcloud.sms.v20190711.Client;

function main() {
    const clientConfig = {
        credential: {
            secretId: AppId,
            secretKey: AppKey,
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
        "PhoneNumberSet": [
            "+8617600489317"
        ],
        "TemplateParamSet": [
            "1232"
        ],
        "TemplateID": "709509",
        "SmsSdkAppid": AppId,
        "Sign": "微拍堂"
    };
    client.SendSms(params).then(
        (data) => {
            console.log(data);
        },
        (err) => {
            console.error("error", err);
        }
    );
}

main();