/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const mall_config = sequelize.define('mall_config', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mall_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    application_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    app_type: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
  }, {
    tableName: 'mall_config',
    timestamps: true,
    underscored: true,
    paranoid: true
  });

  // mall_config.associate = function(model) {
  //   model.mall.belongsToMany(model.machine_scene_define, {
  //     as: 'scenes',
  //     through: {
  //       model: model.mall_config,
  //       unique: false,
  //       scope: {
  //         app_type: 'scene'
  //       }
  //     },
  //     foreignKey: 'mall_id',
  //     otherKey: 'application_id',
  //     constraints: false
  //   });

  //   model.machine_scene_define.belongsToMany(model.mall, {
  //     as: 'malls',
  //     through: {
  //       model: model.mall_config,
  //       unique: false,
  //       scope: {
  //         app_type: 'scene'
  //       }
  //     },
  //     foreignKey: 'application_id',
  //     otherKey: 'mall_id',
  //     constraints: false
  //   });
  // };

  return mall_config;
};
