var express = require('express'),
    router = express.Router(),
    user = require('../controllers/users.js');

router.get('/', user.getAll);
router.get('/:id', user.getOne);
router.post('/', user.create);
router.put('/:id', user.update);
router.delete('/:id', user.delete);

module.exports = router;