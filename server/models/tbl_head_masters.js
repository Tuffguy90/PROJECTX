"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class tbl_head_masters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.tbl_head_meta, {
        foreignKey: "head_id",
        as: "meta",
      })
    }
  }
  tbl_head_masters.init(
    {
      sub_mat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subsidary_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mattrix_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      head_name: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
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
      paranoid:true,
      modelName: "tbl_head_masters",
    }
  )
  return tbl_head_masters
}
