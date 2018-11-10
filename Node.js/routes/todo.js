var express = require('express');
var router = express.Router();
var todo = require('../controllers/todo');

router.get('/', todo.list);
router.post('/', todo.create);
router.get('/:id', todo.show);
router.put('/:id', todo.update);
router.delete('/:id', todo.delete);

module.exports = router;
