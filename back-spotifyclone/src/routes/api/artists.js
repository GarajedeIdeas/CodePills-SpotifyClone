const router = require('express').Router();

const { getAll, ownArtists, getById, getSongsByArtist, create, search } = require('../../controllers/artists.controller');
const { checkToken } = require('../../helpers/middlewares');

router.get('/', getAll);
router.get('/own', checkToken, ownArtists);
router.get('/:id', getById);
router.get('/songs/:artist_id', getSongsByArtist);

router.post('/', checkToken, create);
router.post('/search', search);

module.exports = router;