'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ATTACHMENTS', {
      id:          { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      message_id:  { type: Sequelize.BIGINT, allowNull: false, references: { model: 'MESSAGES', key: 'id' } },
      filename:    { type: Sequelize.STRING, allowNull: false },
      url:         { type: Sequelize.STRING, allowNull: false },
      uploaded_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },
  async down (queryInterface) {
    await queryInterface.dropTable('ATTACHMENTS');
  }
};
