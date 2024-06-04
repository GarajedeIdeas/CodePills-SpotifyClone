const Op = require('sequelize').Op;

const { Artist, Song } = require('../models');

const getAll = async (req, res) => {
    try {
        const artists = await Artist.findAll({
            include: {
                model: Song,
                as: 'songs',
                separate: true,
                order: [['createdAt', 'desc']]
            }
        });
        res.json(artists);
    } catch (error) {
        res.json(error);
    }
}

const ownArtists = async (req, res) => {
    try {
        const artists = await Artist.findAll({ userId: req.user.id })
        res.json(artists);
    } catch (error) {
        res.json(error);
    }
}

const getById = async (req, res) => {
    const { id } = req.params;

    try {
        const artist = await Artist.findByPk(id, {
            include: {
                model: Song,
                as: 'songs',
                separate: true,
                order: [['createdAt', 'desc']]
            }
        });
        res.json(artist);
    } catch (error) {
        res.json(error);
    }
}

const getSongsByArtist = async (req, res) => {
    const { artist_id } = req.params;

    try {
        const songs = await Song.findAll({ artistId: artist_id })
        res.json(songs);
    } catch (error) {
        res.json(error);
    }
}

const create = async (req, res) => {
    try {
        req.body.userId = req.user.id;
        const artist = await Artist.create(req.body);
        res.json(artist);
    } catch (error) {
        res.json(error);
    }
}

const search = async (req, res) => {
    const { search } = req.body;

    try {
        const artists = await Artist.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${search}%` } },
                    { bio: { [Op.like]: `%${search}%` } }
                ]
            }
        });

        res.json(artists);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { getAll, ownArtists, getById, getSongsByArtist, create, search };