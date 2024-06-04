const { sequelize } = require('./config/db');
const { DataTypes } = require('sequelize');

const Song = sequelize.define('Song',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        album: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        coverImg: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cloudinaryPublicId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cloudinarySecureUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: true, tableName: 'songs' });

const Artist = sequelize.define('Artist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'No bio available'
    },
    coverImg: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    }
}, { timestamps: true, tableName: 'artists' })

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: true, tableName: 'users' })

// Relaciones
Artist.hasMany(Song, { foreignKey: 'artistId', as: 'songs' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

User.hasMany(Artist, { foreignKey: 'userId' });
Artist.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync();

module.exports = { Song, Artist, User };