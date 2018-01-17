var express = require('express');
var router = express.Router();
var registered_adresses = require('../service/').registered_adresses;

router.get('/', registered_adresses.list);
router.get('/:id', registered_adresses.findById);
router.post('/', registered_adresses.create);
router.put('/', registered_adresses.update);


module.exports = router;