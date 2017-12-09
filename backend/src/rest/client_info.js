var express = require('express');
var router = express.Router();
var client_info = require('../service/').client_info;

router.get('/', client_info.list);
router.get('/:id', client_info.findById);
router.post('/', client_info.create);
router.update('/', client_info.update);

module.exports = router;