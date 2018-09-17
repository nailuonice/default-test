'use strict';
/*
 * scene表
 */

module.exports = function (sequelize, DataType) {

  var scene = sequelize.define('scene', {
    scene: {
      type: DataType.STRING,
      allow_null: false
    },
    subflow: {
      type: DataType.TEXT,
      allow_null: true,
      get(name) {
        let val = this.getDataValue(name);
        try {
          val = JSON.parse(val);
        } catch(err) {
          val = {};
        }
        return val || {};
      }
    },
    singleQrBg: {
      type: DataType.STRING,
      allow_null: true
    },
    multiQrBg: {
      type: DataType.STRING,
      allow_null: true
    },
    extraData: {
      type: DataType.TEXT,
      allow_null: true,
      get(name) {
        let val = this.getDataValue(name);
        try {
          val = JSON.parse(val);
        } catch(err) {
          val = {};
        }
        return val || {};
      }
    },
    isDefault: {
      type: DataType.INTEGER(1),
      allow_null: true,
      defaultValue: 0
    }
  });

  return scene;
};