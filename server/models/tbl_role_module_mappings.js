'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_role_module_mappings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tbl_role_masters, {
        foreignKey: "role_id",
        as: "role",
      })
      this.belongsTo(models.tbl_module_masters, {
        foreignKey: "module_id",
        as: "module",
      })
    }
  }
  tbl_role_module_mappings.init({
    role_id: DataTypes.INTEGER,
    module_id: DataTypes.INTEGER,
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
  }, {
    sequelize,
    modelName: 'tbl_role_module_mappings',
  });
  return tbl_role_module_mappings;
};