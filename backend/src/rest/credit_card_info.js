var express = require('express');
var router = express.Router();
var credit_card_info = require('../service/').credit_card_info;

router.get('/', credit_card_info.list);
router.get('/:id', credit_card_info.findById);
router.post('/', credit_card_info.create);
router.update('/', credit_card_info.update);
router.delete('/:id'. client_card_info.delete);

module.exports = router;