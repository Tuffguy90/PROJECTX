'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_module_masters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.tbl_role_masters, {
        through: models.tbl_role_module_mappings, foreignKey: "module_id",
        as: "r0le",
      })
    }
  }
  tbl_module_masters.init({
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    icon: DataTypes.STRING,
    slug: DataTypes.STRING,
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
    modelName: 'tbl_module_masters',
  });
  return tbl_module_masters;
};