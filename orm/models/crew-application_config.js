/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const application_config = sequelize.define('application_config', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    application_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    machine_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    app_type: {
      type: DataTypes.STRING(80),
      allowNull: true
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
    tableName: 'application_config',
    timestamps: true,
    underscored: true,
    paranoid: true
  });
  

  return application_config;
};
