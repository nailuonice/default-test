/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const machine_template = sequelize.define('machine_template', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allow_null: false,
      comment: '惊喜蛋名字',
      unique: true,
      set(val) {
        this.setDataValue('name', val ? val.trim() : null);
      }
    },
    desc: {
      type: DataTypes.STRING,
      allow_null: true,
      comment: '描述',
      set(val) {
        this.setDataValue('desc', val ? val.trim() : null);
      }
    },   
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: '配置类型 1-福利社'
    },    
    start_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '上架时间',      
    },
    finish_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '下架时间',
    },
    is_default: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: '1: 默认',
    },
    extraData: {
      type: DataTypes.TEXT,
      allow_null: true,
      comment: '额外属性',
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
    tableName: 'machine_template',
    timestamps: true,
    underscored: true,
    paranoid: true
  });

  machine_template.associate = function(model){
    machine_template.belongsToMany(model.coupon_surprise, {
      as: 'coupons',
      through: {
        model: model.surprise_config,
        unique: false,
        scope: {
          config_type: 'special'
        }
      },    
      foreignKey: 'templateId',
      otherKey: 'couponId',
      constraints: false
    });

    model.coupon_surprise.belongsToMany(machine_template, {
      as: 'templates',
      through: {
        model: model.surprise_config,
        unique: false,
        scope: {
          config_type: 'special'
        }
      },    
      foreignKey: 'couponId',
      otherKey: 'templateId',
      constraints: false
    });

    //关联machine
    machine_template.hasMany(model.machine_employ, {
      as: 'machines',
      foreignKey: 'templateId',
      targetKey: 'id',
      constraints: false
    });
    model.machine_employ.belongsTo(machine_template, {
      as: 'templates',
      foreignKey: 'templateId',
      sourceKey: 'id',
      constraints: false
    });
  };

  return machine_template;
};
