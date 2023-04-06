'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("tbl_subsidary_masters", "parent_id", {
      type: Sequelize.INTEGER(5),
      allowNull: false,
      after: 'id',
      defaultValue: 0,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("parent_id");
  }
};
