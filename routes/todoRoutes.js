
const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();


// @route    GET todos/
// @desc     list of all todos
// @access   public
router.get('/', todoController.todos);

// @route    GET todos/create
// @desc     create new todo items 
// @access   public
router.post('/create', todoController.createTodo);

module.exports = router;