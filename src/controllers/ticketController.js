const { Ticket, Message, Category, User } = require('../models');

// Crear nueva incidencia
exports.createTicket = async (req, res) => {
  try {
    const { title, description, urgency, category_id, user_id } = req.body;
    const ticket = await Ticket.create({ title, description, urgency, category_id, user_id });
    res.status(201).json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la incidencia.' });
  }
};

// Listar todas las incidencias (admin)
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({ include: [
      { model: User, as: 'requester', attributes: ['id','name','email'] },
      { model: User, as: 'assignee', attributes: ['id','name','email'] },
      Category
    ]});
    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener incidencias.' });
  }
};

// Obtener incidencia por ID
exports.getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findByPk(id, { include: [
      { model: User, as: 'requester', attributes: ['id','name'] },
      { model: User, as: 'assignee', attributes: ['id','name'] },
      Category,
      { model: Message, include: [{ model: User, attributes: ['id','name'] }] }
    ]});
    if (!ticket) return res.status(404).json({ message: 'Incidencia no encontrada.' });
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la incidencia.' });
  }
};

// Actualizar estado, urgencia o asignación
exports.updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Ticket.update(req.body, { where: { id } });
    if (!updated) return res.status(404).json({ message: 'Incidencia no encontrada.' });
    const ticket = await Ticket.findByPk(id);
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la incidencia.' });
  }
};

// Asignar incidencia a técnico
exports.assignTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { assigned_id } = req.body;
    const ticket = await Ticket.findByPk(id);
    if (!ticket) return res.status(404).json({ message: 'Incidencia no encontrada.' });
    ticket.assigned_id = assigned_id;
    await ticket.save();
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al asignar la incidencia.' });
  }
};