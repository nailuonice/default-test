/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const adm_phone_print = sequelize.define('adm_component', {
    id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '拍照打印名称',
      defaultValue: null,
    },
    phone_price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: '手机照片打印价格',
      defaultValue: null,
    },
    phone_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: '手机照片打印张数',
      defaultValue: null,
    },
    phone_discount: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '手机照片打印折扣',
      defaultValue: null,
    },
    paster_price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: '贴纸拍照打印价格',
      defaultValue: null,
    },
    paster_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: '贴纸拍照打印张数',
      defaultValue: null,
    },
    paster_discount: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '贴纸拍照打印折扣',
      defaultValue: null,
    },
    extra_data: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: '额外字段',
      defaultValue: null,
      get(extra_data) {
        let val = this.getDataValue(extra_data);
        val = typeof val === 'string' ? JSON.parse(decodeURIComponent(val)) : val;
        return val || {};
      }
    },
  }, {
    tableName: 'adm_phone_print',
    underscored: true,
    paranoid: true,
    timestamps: true,
  });


  adm_phone_print.associate = function (models) {
    adm_phone_print.hasMany(models.adm_phone_print_config, {
      as: 'configs',
      foreignKey: 'app_id',
      targetKey: 'id',
      constraints: false
    });

    models.adm_phone_print_config.belongsTo(adm_phone_print, {
      as: 'prints',
      foreignKey: 'app_id',
      targetKey: 'id',
      constraints: false
    });
  };

  return adm_phone_print;
};
