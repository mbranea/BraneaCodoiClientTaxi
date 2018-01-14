var express = require('express');
var router = express.Router();
var order = require('../service/').order;

router.get('/', order.list);
router.get('/:id', order.findById);
router.post('/', order.create);
router.delete('/:id', order.delete);
module.exports = router;
