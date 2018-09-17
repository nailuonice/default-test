'use strict';

module.exports = function(sequelize, DataType){

  let activity = sequelize.define('activity', {
    id: {
      type: DataType.INTEGER(11),
      primaryKey: true
    },
    name: {
      type: DataType.STRING(255)
    },
    extra_data: {
      type: DataType.TEXT,
    },
    is_default: {
      type: DataType.INTEGER(1)
    }
  }, {
    underscored: true
  });

  return activity;
};