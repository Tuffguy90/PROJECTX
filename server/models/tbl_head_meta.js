"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class tbl_head_meta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.tbl_subsidary_masters, {
        foreignKey: "subsidary_id",
        as: "subsidary",
      })

      this.belongsTo(models.tbl_mattrix_masters, {
        foreignKey: "mattrix_id",
        as: "mattrix",
      })
      this.belongsTo(models.tbl_head_masters, {
        foreignKey: "head_id",
        as: "head",
      })
    }
  }
  tbl_head_meta.init(
    {
      mattrix_id: DataTypes.INTEGER,
      subsidary_id: DataTypes.INTEGER,
      head_id: DataTypes.INTEGER,
      head_value: DataTypes.INTEGER,
      financial_year: DataTypes.STRING,
      month: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tbl_head_meta",
    }
  )
  return tbl_head_meta
}
