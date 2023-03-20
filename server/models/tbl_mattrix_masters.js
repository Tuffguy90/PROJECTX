"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class tbl_mattrix_masters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_mattrix_masters.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.INTEGER,
      createdBy: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      updatedBy: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      deletedBy: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "tbl_mattrix_masters",
    }
  )
  return tbl_mattrix_masters
}
