'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('FEEDBACK', {
      id:         { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      ticket_id:  { type: Sequelize.BIGINT, allowNull: false, references: { model: 'TICKETS', key: 'id' } },
      user_id:    { type: Sequelize.BIGINT, allowNull: false, references: { model: 'USERS', key: 'id' } },
      rating:     { type: Sequelize.TINYINT, allowNull: false },
      comment:    { type: Sequelize.STRING },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },
  async down (queryInterface) {
    await queryInterface.dropTable('FEEDBACK');
  }
};
