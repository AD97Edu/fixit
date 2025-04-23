const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

class Notification extends Model {}
Notification.init({
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.BIGINT, references: { model: User, key: 'id' } },
  type: { type: DataTypes.ENUM('ticket', 'message', 'suggestion', 'feedback'), allowNull: false },
  payload: { type: DataTypes.JSON },
  sent_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  read_at: { type: DataTypes.DATE }
}, { sequelize, modelName: 'Notification', tableName: 'NOTIFICATIONS', timestamps: false });

Notification.belongsTo(User, { foreignKey: 'user_id' });
module.exports = Notification;