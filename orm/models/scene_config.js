/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const scene_config = sequelize.define('scene_config', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    scene: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(60),
      allow_null: false
    },
    type: {
      type: DataTypes.STRING(20),
      allow_null: false,
      comment: '类型 1：商场'
    },
    extraData: {
      type: DataTypes.TEXT,
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
  }, {
    tableName: 'scene_config',
    timestamps: true,
    underscored: true,
    paranoid: true
  });

  return scene_config;
};
