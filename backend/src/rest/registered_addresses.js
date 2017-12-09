var express = require('express');
var router = express.Router();
var registered_addresses = require('../service/').registered_addresses;

router.get('/', registered_addresses.list);
router.get('/:id', registered_addresses.findById);
router.post('/', registered_addresses.create);
router.update('/', registered_addresses.update);

module.exports = router;