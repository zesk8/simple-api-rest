var express = require('express'),
    router = express.Router(),
    products = require('../controllers/products.js');

router.get('/', products.getAll);
router.get('/:id', products.getOne);
router.post('/', products.create);
router.put('/:id', products.update);
router.delete('/:id', products.delete);

module.exports = router;