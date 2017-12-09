var express = require('express');
var router = express.Router();
var adress_info = require('../service/').adress_info;

router.get('/', adress_info.list);
router.get('/:id', adress_info.findById);
router.post('/', adress_info.create);
router.update('/', adress_info.update);

module.exports = router;