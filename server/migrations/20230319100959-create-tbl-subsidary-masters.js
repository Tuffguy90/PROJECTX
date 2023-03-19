'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_subsidary_masters',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        code: {
          type: Sequelize.STRING,
          allowNull: false
        },
        short_name: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        mobile: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 1
        },
        createdBy: {
          allowNull: true,
          type: Sequelize.INTEGER
        },
        updatedBy: {
          allowNull: true,
          type: Sequelize.INTEGER
        },
        deletedBy: {
          allowNull: true,
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('tbl_subsidary_masters');
  }
};