const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Ticket = require('./ticket');
const User = require('./user');

class Message extends Model {}
Message.init({
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  ticket_id: { type: DataTypes.BIGINT, references: { model: Ticket, key: 'id' } },
  sender_id: { type: DataTypes.BIGINT, references: { model: User, key: 'id' } },
  content: { type: DataTypes.TEXT, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'Message', tableName: 'MESSAGES', timestamps: false });

Message.belongsTo(Ticket, { foreignKey: 'ticket_id' });
Message.belongsTo(User, { foreignKey: 'sender_id' });
module.exports = Message;