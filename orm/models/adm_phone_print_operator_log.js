/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const adm_phone_print_operator_log = sequelize.define('adm_phone_print_operator_log', {
    id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    operator_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '操作人名称',
      defaultValue: null,
    },
    operator_user_info: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '操作人详情',
      defaultValue: null,
    },
    operation_data: {
      type: DataTypes.JSON,
      allow_null: true,
      comment: '操作动作详情',
      defaultValue: null,
      get(operation_data) {
        let val = this.getDataValue(operation_data);
        val = typeof val === 'string' ? JSON.parse(decodeURIComponent(val)) : val;
        return val || {};
      }
    }
  },{
    tableName: 'adm_phone_print_operator_log',
    timestamps: true,
    underscored: true,
    paranoid: true
  });

  return adm_phone_print_operator_log;
};
