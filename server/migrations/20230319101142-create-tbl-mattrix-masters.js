'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_mattrix_masters', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100)
      },
      status: {
        type: Sequelize.INTEGER(12),
        allowNull: false,
        defaultValue: 1
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
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_mattrix_masters');
  }
};