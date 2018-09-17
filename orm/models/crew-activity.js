/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const activity = sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_default: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    start_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    finish_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    extra_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      get(name) {
        let val = this.getDataValue(name);
        try {
          val = JSON.parse(val);
        } catch(err) {
          val = {};
        }
        return val;
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'activity',
    timestamps: true,
    underscored: true,
    paranoid: true
  });

  // activity.findOrCreate({
  //   where: {
  //     name: 'default',
  //     is_default: 1
  //   }
  // });

  return activity;
};
