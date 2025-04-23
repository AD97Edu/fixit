const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Ticket = require('./ticket');
const User = require('./user');

class Feedback extends Model {}
Feedback.init({
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  ticket_id: { type: DataTypes.BIGINT, references: { model: Ticket, key: 'id' } },
  user_id: { type: DataTypes.BIGINT, references: { model: User, key: 'id' } },
  rating: { type: DataTypes.TINYINT, allowNull: false },
  comment: { type: DataTypes.STRING },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'Feedback', tableName: 'FEEDBACK', timestamps: false });

Feedback.belongsTo(Ticket, { foreignKey: 'ticket_id' });
Feedback.belongsTo(User, { foreignKey: 'user_id' });
module.exports = Feedback;
