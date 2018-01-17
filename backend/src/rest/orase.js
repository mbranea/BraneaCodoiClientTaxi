var express = require('express');
var router = express.Router();
var orase = require('../service/').orase;

router.get('/', orase.list);
router.get('/:id', orase.findById);
router.post('/', orase.create);
router.put('/', orase.update);
router.delete('/:id'. orase.delete);

module.exports = router;