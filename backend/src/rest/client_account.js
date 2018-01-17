var express = require('express');
var router = express.Router();
var client_account = require('../service/').client_account;

router.get('/', client_account.list);
router.get('/:username', client_account.findAccount);
//router.get('/:id', client_account.findById);
router.post('/', client_account.create);
router.put('/', client_account.update);


module.exports = router;