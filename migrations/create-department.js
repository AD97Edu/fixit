'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('DEPARTMENTS', {
      id:          { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      name:        { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT },
      created_at:  { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },
  async down (queryInterface) {
    await queryInterface.dropTable('DEPARTMENTS');
  }
};
