// Creación y configuración del SERVER
const http = require('http');
const app = require('./src/app');
const { connectToDB } = require('./src/config/db');

// Config .env
require('dotenv').config();

// Creación server
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Listeners
server.on('listening', () => {
    console.log(`Servidor escuchando sobre el puerto ${PORT}`);
    connectToDB();
    const { Song, Artist, User } = require('./src/models')
});

server.on('error', (error) => {
    console.log(error);
})