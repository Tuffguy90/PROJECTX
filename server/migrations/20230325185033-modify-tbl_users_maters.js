'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn(
      "tbl_user_masters", // table name
      "is_add", // new field name
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      }
    ),
    queryInterface.addColumn(
      "tbl_user_masters", // table name
      "is_delete", // new field name
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      }
    ),
    queryInterface.addColumn(
      "tbl_user_masters", // table name
      "is_edit", // new field name
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
