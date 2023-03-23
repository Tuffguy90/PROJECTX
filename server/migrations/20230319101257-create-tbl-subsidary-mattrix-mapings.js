'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_subsidary_mattrix_mapings', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subsidary_id: {
        type: Sequelize.INTEGER(5),
        allowNull: false
      },
      mattrix_id: {
        type: Sequelize.INTEGER(5),
        allowNull: false
      },
      createdBy: {
        allowNull: true,
        type: Sequelize.INTEGER(5)
      },
      updatedBy: {
        allowNull: true,
        type: Sequelize.INTEGER(5)
      },
      deletedBy: {
        allowNull: true,
        type: Sequelize.INTEGER(5)
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_subsidary_mattrix_mapings');
  }
};