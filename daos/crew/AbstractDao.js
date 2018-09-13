'use strict'

class AbstractDao {
    constructor(model) {
        this.model = model;
    }

    /**
     * 获取计数
     * @param obj 条件
     */
    count(obj) {
        return new Promise((resolve, reject) => {
            this.model.count({
                where: obj,
                logging: false
            }).then((count) => {
                resolve(count);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    /**
     * 获取单个记录
     * @param id 记录的主键
     */
    load(id) {
        return new Promise((resolve, reject) => {
            this.model.findById(id, {
                logging: false
            }).then(result => {
                let re = null;
                if (result) {
                    re = result.dataValues;
                }
                resolve(re);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    /**
     * 删除（批量或单个）
     * @param ids id数组或者单个id
     */
    del(obj) {
        return new Promise((resolve, reject) => {
            this.model.destroy({
                where: obj,
                logging: false
            }).then(count => {
                //count为已经删除的行数
                resolve(count);
            }).catch((err) => {
                reject(err);
            });
        })
    }
    /**
     * 获取所有数据
     * @param obj 条件
     */
    find_one(obj) {
        return new Promise((resolve, reject) => {
            this.model.find_one({
                where: obj,
                logging: false
            }).then(result => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        })
    }
    /**
     * 通过id获取数据
     * @param obj 条件
     */
    _findById(id) {
      return new Promise((resolve, reject) => {
        this.model.findById(id)
          .then(result => {
            resolve(result);
          }).catch((err) => {
          reject(err);
        });
      })
    }
    /**
     * 获取所有数据
     * @param obj 条件
     */
    find_all(obj) {
        return new Promise((resolve, reject) => {
          console.log(this.model);
            this.model.findAll({
                where: obj,
                logging: false
            }).then(result => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        })
    }
    /**
     * 条件查询
     * @param obj 查询条件
     * @param start 开始记录
     * @param limit 分页大小
     */
    search(obj, start, limit) {
        return new Promise((resolve, reject) => {
            this.model.findAndCountAll({
                where: obj,
                limit: limit,
                offset: start,
                logging: true
            }).then(function (result) {
                const re = {
                    count: result.count,
                    rows: []
                };
                for (let i = 0; i < result.rows.length; i++) {
                    re.rows.push(result.rows[i].dataValues);
                }
                resolve(re);
            }).catch((err) => {
                reject(err)
            });
        })
    }

    /**
     * 查询
     * @param start 开始记录
     * @param limit 分页大小
     */
    list(start, limit) {
        this.search(null, start, limit);
    }

    /**
     * 创建新的记录
     * @param obj 新的记录
     */
    create(obj) {
        return new Promise((resolve, reject) => {
            this.model.create(obj, {
                logging: true
            }).then(function (result) {
                resolve(result.dataValues);
            }).catch(err => {
                reject(err);
            });
        })
    }

    /**
     * 批量创建新的记录
     * @param objs 新记录数组
     */
    multiCreate(objs) {
        return new Promise((resolve, reject) => {
            this.model.bulkCreate(objs).then(function (result) {
                const array = [];
                for (let i = 0; i < result.length; i++) {
                    array.push(result[i].dataValues);
                }
                resolve(array);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    /**
     * 更新记录
     * @param obj1 更新条件
     * @param obj2 待更新的记录
     */
    Update(obj1, obj2) {
        return new Promise((resolve, reject) => {
            this.model.update(obj2, {
                where: obj1,
                logging: false
            }).then(function (result) {
                //返回影响条数
                resolve(result[0]);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    /**
     * 根据条件查询，然后排序
     * @param obj1 查询条件
     * @param obj2 排序条件
     */
    allDesc(obj1, obj2) {
        return new Promise((resolve, reject) => {
            this.model.findAll({
                where: obj1,
                order: obj2,
                raw: true
            }).then(function (result) {
                resolve({
                    count: result.length,
                    rows: result
                })
            }).catch(error => {
                reject(error);
            });
        })
    }

    /**
     * 查询指定信息是否存在，不存在则创建
     * @param obj 查询条件
     * @param parm 添加的内容
     */
    _findCreateFind(obj, parm) {
        return new Promise((resolve, reject) => {
            this.model.findCreateFind({
                where: obj,
                defaults: parm
            }).then(result => {
                // console.info("[_findCreateFind] result: %s\n", JSON.stringify(result));
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    }

    /**
     * 求和某一字段
     * @param field 求和列名
     * @param obj 条件
     */
    sumField(field, obj) {
        return new Promise((resolve, reject) => {
            this.model.sum(field, {
                where: obj,
                raw: true
            }).then(result => {
                resolve(result)
            }).catch(error => {
                reject(error)
            })
        })
    }

    //根据ID，自增加某字段
    incrementField(id, field) {
        return new Promise((resolve, reject) => {
            this.model.findById(id).then(function (user) {
                user.increment(field).then(function (user) {
                    resolve('success')
                })
            }).catch(error => {
                reject(error)
            })
        })
    }
}

module.exports = AbstractDao;