// Creación y configuración de la APP de Express
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de rutas
app.use('/api', require('./routes/api'));

module.exports = app;