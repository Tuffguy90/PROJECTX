"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class tbl_subsidary_mattrix_mapings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tbl_mattrix_masters, {
        foreignKey: "mattrix_id",
        as: "mattrix",
      })
      this.belongsTo(models.tbl_subsidary_masters, {
        foreignKey: "subsidary_id",
        as: "subsidary",
      })
      // define association here
    }
  }
  tbl_subsidary_mattrix_mapings.init(
    {
      subsidary_id: DataTypes.INTEGER,
      mattrix_id: DataTypes.INTEGER,
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
      modelName: "tbl_subsidary_mattrix_mapings",
    }
  )
  return tbl_subsidary_mattrix_mapings
}
