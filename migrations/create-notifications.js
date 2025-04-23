'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('NOTIFICATIONS', {
      id:         { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      user_id:    { type: Sequelize.BIGINT, allowNull: false, references: { model: 'USERS', key: 'id' } },
      type:       { type: Sequelize.ENUM('ticket','message','suggestion','feedback'), allowNull: false },
      payload:    { type: Sequelize.JSON },
      sent_at:    { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      read_at:    { type: Sequelize.DATE, allowNull: true }
    });
  },
  async down (queryInterface) {
    await queryInterface.dropTable('NOTIFICATIONS');
  }
};
