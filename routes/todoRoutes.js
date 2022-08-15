const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.post('/create', todoController.create);
router.post('/read', todoController.read);

module.exports = router;