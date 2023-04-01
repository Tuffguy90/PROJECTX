'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_user_subsidary_mappings extends Model {
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
      this.belongsTo(models.tbl_user_masters, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  tbl_user_subsidary_mappings.init({
    user_id: DataTypes.INTEGER,
    subsidary_id: DataTypes.INTEGER,
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
  }, {
    sequelize,
    modelName: 'tbl_user_subsidary_mappings',
  });
  return tbl_user_subsidary_mappings;
};