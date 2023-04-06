"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("tbl_head_masters", "financial_year", {
      type: Sequelize.INTEGER(5),
      allowNull: true,
      after: 'head_name',
      defaultValue: null,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("financial_year");
  },
};
