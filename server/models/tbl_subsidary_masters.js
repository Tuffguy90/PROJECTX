"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class tbl_subsidary_masters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.tbl_subsidary_mattrix_mapings, {
        foreignKey: "subsidary_id",
        as: "subMattrix",
      })
    }
  }
  tbl_subsidary_masters.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
      short_name: DataTypes.STRING,
      status: DataTypes.INTEGER,
      // created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tbl_subsidary_masters",
    }
  )
  return tbl_subsidary_masters
}
