"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbl_role_masters extends Model {
    static associate(models) {
      this.hasMany(models.tbl_user_masters, {
        foreignKey: "role_id",
        as: "role",
      });
    }
  }
  tbl_role_masters.init(
    {
      name: DataTypes.STRING(50),
      short_name: DataTypes.STRING(30),
    },
    {
      sequelize,
      modelName: "tbl_role_masters",
    }
  );
  return tbl_role_masters;
};
