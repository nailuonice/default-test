/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const config_factory = sequelize.define('config_factory', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
    },
    machineCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: '机器码'
    },
    is_published: {
      type: DataTypes.STRING(11),
      allowNull: true,
      comment: '是否发布标志: 1->发布, 2->不发布',
      defaultValue: 0,
    },
    version: {
      type: DataTypes.INTEGER(30),
      allowNull: true,
      comment: '版本',
      defaultValue: 0,
    },
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: '配置类型 1-机器，2-机器升级,3-广告,4-贴纸'
    }
  }, {
    tableName: 'config_factory',
    timestamps: true,
    underscored: true,
    paranoid: true
  });

  return config_factory;
};
