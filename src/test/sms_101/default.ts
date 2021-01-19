const fs = require("fs");
const _ = require("lodash");
const args = process.argv;


var realName = 'real_text.json'
var real101Name = 'real_text_101.json'
var Name = "线下比对"
var filter_name = "real_id"
function main() {
  try {

    console.log("##############\n", args);
    // true表示线上配置

    if (args.length > 2) {
      if (args[2] == "true") {
        Name = "线上比对"
        realName = 'real_prod.json'
        real101Name = 'real_prod_101.json'
      }
      if (args[3] && _.indexOf(["virtual_id", "receiver"], args[3]) != -1) {
        filter_name = args[3]
        console.log(_.indexOf(["virtual_id", "receiver"], args[3]), filter_name)
      }
    }
    console.log("******环境\n%s\n******\n", Name)

    let realdata = fs.readFileSync(realName);
    let cur_real = JSON.parse(realdata);

    let txReal = cur_real.filter(e => e.channel == "sms" && e.vendor == "tx" && e.real_id.length == 6).map(e => {
      // console.log(JSON.stringify(e))
      if (e.virtual_id == "bsjr6oauof2mmt99nlog") {
        console.log(JSON.stringify(e))
      }
      return e;
    })

    let real101data = fs.readFileSync(real101Name);
    let real101 = JSON.parse(real101data);

    let txReal101 = real101.filter(e => e.channel == "sms" && e.vendor == "tx" && e.real_id.length == 6).map(e => {
      // console.log(JSON.stringify(e))
      return e;
    })

    console.log("真实模板len:%d 真实模板-腾讯短信len:%d\n 101条模板.len:%d 101条模板-腾讯短信.len:%d", cur_real.length, txReal.length, real101.length, txReal101.length)

    let diffTx = _.difference(txReal.map(e => e[filter_name]), txReal101.map(e => e[filter_name]))
    let diffTx101 = _.difference(txReal101.map(e => e[filter_name]), txReal.map(e => e[filter_name]))
    console.log("******短信差异长度 %d %d\n", diffTx.length, diffTx101.length)

    console.log("\n", JSON.stringify(diffTx.sort()))
    console.log("\n", JSON.stringify(diffTx101.sort()))
  } catch (err) {
    console.log(err);
  }
}

main()