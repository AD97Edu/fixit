const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Category = require('./category');

class Ticket extends Model {}
Ticket.init({
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  urgency: { type: DataTypes.ENUM('low', 'medium', 'high'), defaultValue: 'medium' },
  status: { type: DataTypes.ENUM('open', 'in_progress', 'closed'), defaultValue: 'open' },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'Ticket', tableName: 'TICKETS', timestamps: false });

Ticket.belongsTo(User, { as: 'requester', foreignKey: 'user_id' });
Ticket.belongsTo(User, { as: 'assignee', foreignKey: 'assigned_id' });
Ticket.belongsTo(Category, { foreignKey: 'category_id' });
module.exports = Ticket;