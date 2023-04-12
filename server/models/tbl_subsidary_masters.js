"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbl_subsidary_masters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.tbl_user_masters, {
        through: models.tbl_user_subsidary_mappings,
        foreignKey: "subsidary_id",
        as: "user",
      });
      this.belongsTo(models.tbl_subsidary_masters, {
        foreignKey: "parent_id",
        as: "parent_subsidiary",
      });
      this.hasMany(models.tbl_subsidary_masters, {
        foreignKey: "parent_id",
        as: "child_subsidiary",
      });
    }
  }
  tbl_subsidary_masters.init(
    {
      parent_id: DataTypes.INTEGER(5),
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
      short_name: DataTypes.STRING,
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
      // created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "tbl_subsidary_masters",
    }
  );
  return tbl_subsidary_masters;
};
