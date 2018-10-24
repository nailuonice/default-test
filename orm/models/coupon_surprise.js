/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const coupon_surprise = sequelize.define('coupon_surprise', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allow_null: false,
      comment: '惊喜蛋名字',
      unique: true,
      set(val) {
        this.setDataValue('name', val ? val.trim() : null);
      }
    },
    desc: {
      type: DataTypes.STRING,
      allow_null: true,
      comment: '描述',
      set(val) {
        this.setDataValue('desc', val ? val.trim() : null);
      }
    },     
    cover_page: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '惊喜蛋封面图 url',
    },
    eggContent: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '点击后弹出的详情图片 url',
    },
    extraData: {
      type: DataTypes.TEXT,
      allow_null: true,
      comment: '额外属性',
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
  }, {
    tableName: 'coupon_surprise',
    timestamps: true,
    underscored: true,
    paranoid: true
  });

  return coupon_surprise;
};
