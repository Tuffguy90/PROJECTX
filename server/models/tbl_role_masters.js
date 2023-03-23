'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_role_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.tbl_module_masters, {
        through: db.tbl_role_module_mappings, foreignKey: "role_id",
        as: "module",
      })
    }
  }
  tbl_role_master.init({
    name: DataTypes.STRING,
    short_name: DataTypes.STRING,
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
    modelName: 'tbl_role_master',
  });
  return tbl_role_master;
};