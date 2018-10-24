/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const surprise_config = sequelize.define('surprise_config', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    templateId: {
      type: DataTypes.INTEGER,
      allow_null: true,
    },
    couponId: {
      type: DataTypes.INTEGER,
      allow_null: true,
    },   
    config_type: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '配置类型 special(特别),'
    }, 
  }, {
    tableName: 'surprise_config',
    timestamps: true,
    underscored: true,
    paranoid: true
  });

  return surprise_config;
};
