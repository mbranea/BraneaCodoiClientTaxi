var express = require('express');
var router = express.Router();
var cartiere = require('../service/').cartiere;

router.get('/', cartiere.list);
router.get('/:id', cartiere.findById);
router.post('/', cartiere.create);
router.update('/', cartiere.update);

module.exports = router;