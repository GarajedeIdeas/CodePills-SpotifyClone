const { Sequelize } = require('sequelize');

const database = 'codetunes';
const username = 'root';
const password = 'mysqlpassword';
const host = 'localhost';

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: 'mysql'
});

const connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('¡Conexión correcta!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sequelize, connectToDB
}