const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Ticket = require('./ticket');
const Tag = require('./tag');

class TicketTag extends Model {}
TicketTag.init({
  ticket_id: { type: DataTypes.BIGINT, references: { model: Ticket, key: 'id' }, primaryKey: true },
  tag_id: { type: DataTypes.INTEGER, references: { model: Tag, key: 'id' }, primaryKey: true }
}, { sequelize, modelName: 'TicketTag', tableName: 'TICKETS_TAGS', timestamps: false });

Ticket.belongsToMany(Tag, { through: TicketTag, foreignKey: 'ticket_id' });
Tag.belongsToMany(Ticket, { through: TicketTag, foreignKey: 'tag_id' });
module.exports = TicketTag;