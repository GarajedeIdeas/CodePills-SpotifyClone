const jwt = require('jsonwebtoken');

const { User } = require('../models');

const checkToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.status(403).json({ message: 'No se puede acceder' });
    }

    const token = req.headers['authorization'];

    let payload;
    try {
        payload = jwt.verify(token, 'clave secreta');
    } catch (error) {
        return res.status(403).json({ message: 'No se puede acceder' });
    }

    const user = await User.findByPk(payload.id);
    req.user = user;

    next();
}

module.exports = { checkToken };