const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Ticket = require('./ticket');
const User = require('./user');

class Suggestion extends Model {}
Suggestion.init({
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  ticket_id: { type: DataTypes.BIGINT, references: { model: Ticket, key: 'id' } },
  user_id: { type: DataTypes.BIGINT, references: { model: User, key: 'id' } },
  text: { type: DataTypes.TEXT, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'Suggestion', tableName: 'SUGGESTIONS', timestamps: false });

Suggestion.belongsTo(Ticket, { foreignKey: 'ticket_id' });
Suggestion.belongsTo(User, { foreignKey: 'user_id' });
module.exports = Suggestion;