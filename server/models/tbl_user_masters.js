"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbl_user_masters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tbl_subsidary_masters, {
        foreignKey: "subsidary_id",
        as: "subsidary",
      });
      this.belongsTo(models.tbl_role_masters, {
        foreignKey: "role_id",
        as: "role",
      });
    }
  }
  tbl_user_masters.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
      address: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
      subsidary_id: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      token: DataTypes.STRING,
      is_add: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      is_edit: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue:0
      },
      is_delete: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue:0
      },
      createdBy: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue:0
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
      modelName: "tbl_user_masters",
    }
  );
  return tbl_user_masters;
};
