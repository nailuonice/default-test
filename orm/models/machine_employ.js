/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const machine_employ = sequelize.define('machine_employ', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(10),
      allow_null: false,
      comment: '机器码',
    },  
    templateId: {
      type: DataTypes.INTEGER(10),
      allow_null: true,
      comment: '惊喜蛋id模板',
    },   
    type: {
      type: DataTypes.STRING(30),
      allow_null: true,
      comment: '类型 surprise: 惊喜蛋...',
    },             
  }, {
    tableName: 'machine_employ',
    timestamps: true,
    underscored: true,
    paranoid: true
  });  

  return machine_employ;
};
