
const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.get('/', todoController.todos);
router.post('/create', todoController.createTodo);
// router.post('/read', todoController.read);

module.exports = router;