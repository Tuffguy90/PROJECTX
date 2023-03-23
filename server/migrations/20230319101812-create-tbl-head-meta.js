'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_head_meta', 
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
      head_id: {
        type: Sequelize.INTEGER(5),
        allowNull: true
      },
      head_value: {
        type: Sequelize.INTEGER(5),
        allowNull: true
      },
      financial_year: {
        type: Sequelize.INTEGER(5),
        allowNull: false
      },
      month: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('tbl_head_meta');
  }
};