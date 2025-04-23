const sequelize = require('../config/database');
const Department = require('./department');
const User = require('./user');
const Category = require('./category');
const Ticket = require('./ticket');
const Message = require('./message');
const Attachment = require('./attachment');
const Suggestion = require('./suggestion');
const Feedback = require('./feedback');
const Tag = require('./tag');
const TicketTag = require('./ticketTag');
const Notification = require('./notification');

// Sincronizar modelos con la base de datos
async function syncModels() {
  await sequelize.sync({ alter: true });
  console.log('✔️ Modelos sincronizados con la base de datos.');
}

syncModels();

module.exports = {
  Department,
  User,
  Category,
  Ticket,
  Message,
  Attachment,
  Suggestion,
  Feedback,
  Tag,
  TicketTag,
  Notification
};