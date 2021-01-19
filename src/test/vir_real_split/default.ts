const fs = require("fs");
const _ = require("lodash");
const args = process.argv;

var curlPath = ""
function main() {
  try {

    console.log("##############\n", args);
    // true表示线上配置

    if (args.length <= 2) {
      console.log("未传入文件路径")
      return
    } else {
      curlPath = args[2]
    }

    console.log("******curlPath \n%s\n******\n", curlPath)

    let realdata = fs.readFileSync(curlPath);
    let cur_real = JSON.parse(realdata);
    let tmp = cur_real.reduce((state, key) => {
      let channel = key["channel"]
      if (state[channel]) {
        state[channel] = _.concat(state[channel], key)
      } else {
        state[channel] = [key]
      }
      return state;
    }, {})

    console.log("%s\n", JSON.stringify(Object.keys(tmp), null, 2))

    let len = 0
    Object.keys(tmp).map(e => {
      len+=tmp[e].length
      console.log("key: %s value.len: %s value:\n%s\n", e, tmp[e].length, JSON.stringify(_.sortBy(tmp[e], ["vendor", "receiver", "real_id"]),null,4))
      return e
    })
    console.log("总长度为 \n",len)


    // console.log("真实模板len:%d 真实模板-腾讯短信len:%d\n 101条模板.len:%d 101条模板-腾讯短信.len:%d", cur_real.length, txReal.length, real101.length, txReal101.length)

    // let diffTx = _.difference(txReal.map(e => e[filter_name]), txReal101.map(e => e[filter_name]))
    // let diffTx101 = _.difference(txReal101.map(e => e[filter_name]), txReal.map(e => e[filter_name]))
    // console.log("******短信差异长度 %d %d\n", diffTx.length, diffTx101.length)

    // console.log("\n", JSON.stringify(diffTx.sort()))
    // console.log("\n", JSON.stringify(diffTx101.sort()))
  } catch (err) {
    console.log(err);
  }
}

main()