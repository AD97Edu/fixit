'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    // TAGS
    await queryInterface.createTable('TAGS', {
      id:   { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false, unique: true }
    });
    // TICKETS_TAGS
    await queryInterface.createTable('TICKETS_TAGS', {
      ticket_id: { type: Sequelize.BIGINT, allowNull: false, references: { model: 'TICKETS', key: 'id' }, primaryKey: true },
      tag_id:    { type: Sequelize.INTEGER, allowNull: false, references: { model: 'TAGS', key: 'id' }, primaryKey: true }
    });
  },
  async down (queryInterface) {
    await queryInterface.dropTable('TICKETS_TAGS');
    await queryInterface.dropTable('TAGS');
  }
};
