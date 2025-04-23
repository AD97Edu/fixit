'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('USERS', {
      id:             { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      department_id:  { type: Sequelize.BIGINT, allowNull: true, references: { model: 'DEPARTMENTS', key: 'id' }, onDelete: 'SET NULL' },
      name:           { type: Sequelize.STRING, allowNull: false },
      email:          { type: Sequelize.STRING, allowNull: false, unique: true },
      password_hash:  { type: Sequelize.STRING, allowNull: false },
      role:           { type: Sequelize.ENUM('user','admin','technician'), allowNull: false },
      created_at:     { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at:     { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },
  async down (queryInterface) {
    await queryInterface.dropTable('USERS');
  }
};
