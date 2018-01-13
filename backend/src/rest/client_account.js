var express = require('express');
var router = express.Router();
var client_account = require('../service/').client_account;

router.get('/', client_account.list);
router.get('/:id', client_account.findById);
router.post('/', client_account.create);
router.update('/', client_account.update);
router.delete('/:id'. client_account.delete);

module.exports = router;