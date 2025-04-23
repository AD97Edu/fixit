const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
require('./models');

const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);

app.get('/', (req, res) => res.send('API de FixIT funcionando'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));