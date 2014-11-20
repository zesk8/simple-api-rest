var express = require('express'),
	router = express.Router(),
	auth = require('./auth.js'),
	products = require('./products.js'),
	user = require('./users.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */
router.use('/api/v1/products', products);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.use('/api/v1/users', user);

module.exports = router;