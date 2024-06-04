const router = require('express').Router();

router.use('/users', require('./api/users'));
router.use('/artists', require('./api/artists'));
router.use('/songs', require('./api/songs'));

module.exports = router;