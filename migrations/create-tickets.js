'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('TICKETS', {
      id:          { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      title:       { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT, allowNull: false },
      urgency:     { type: Sequelize.ENUM('low','medium','high'), defaultValue: 'medium' },
      status:      { type: Sequelize.ENUM('open','in_progress','closed'), defaultValue: 'open' },
      user_id:     { type: Sequelize.BIGINT, allowNull: false, references: { model: 'USERS', key: 'id' } },
      assigned_id: { type: Sequelize.BIGINT, allowNull: true, references: { model: 'USERS', key: 'id' } },
      category_id: { type: Sequelize.BIGINT, allowNull: true, references: { model: 'CATEGORIES', key: 'id' } },
      created_at:  { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at:  { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },
  async down (queryInterface) {
    await queryInterface.dropTable('TICKETS');
  }
};
