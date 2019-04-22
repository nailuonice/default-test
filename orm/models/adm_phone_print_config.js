/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const adm_phone_print_config = sequelize.define('adm_phone_print_config', {
    id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(80),
      allowNull: true,
      comment: '机器码',
      defaultValue: null,
    },
    app_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      comment: '对应模板id',
      defaultValue: 0,
    },
    mall_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: '商场id',
      defaultValue: null,
    },
    mall_name: {
      type: DataTypes.STRING(80),
      allowNull: true,
      comment: '商场名称',
      defaultValue: null,
    },
    config_type: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: false,
      comment: '配置类型 1.全国 2.商场 3.机器',
      defaultValue: '3',
      get(prop) {
        let val = this.getDataValue(prop);
        return Number(val);
      }
    }
  }, {
    tableName: 'adm_phone_print_config',
    underscored: true,
    paranoid: true,
    timestamps: true,
  });

  return adm_phone_print_config;
};
