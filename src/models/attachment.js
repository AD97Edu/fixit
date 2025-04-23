const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Message = require('./message');

class Attachment extends Model {}
Attachment.init({
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  message_id: { type: DataTypes.BIGINT, references: { model: Message, key: 'id' } },
  filename: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, allowNull: false },
  uploaded_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'Attachment', tableName: 'ATTACHMENTS', timestamps: false });

Attachment.belongsTo(Message, { foreignKey: 'message_id' });
module.exports = Attachment;