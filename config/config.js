/*
* Created by lishi
* Created on 2018/6/12
*/

const config = {
    server: {
        host:      "127.0.0.1",
        port:      7071,
        type:      "application/json"
    },
    trust_server: {
        host:      "127.0.0.1",
        port:      7073,
        path:      "/v1/blockchain/test"
    },
    btc_config: {
        host: '10.200.172.75',
        port: 18332,
        username: 'admin',
        password: 'admin',
    },
    mongoDB: {
        testParam:  "mongodb://127.0.0.1:27017/lishi"
    },
    msyql_config: {
        database:   'lishi',
        username:   "root",
        password:   "123456",
        dialect:    "mysql",
        host:       "127.0.0.1",
        port:       3306,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
};

module.exports = config;