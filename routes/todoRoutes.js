const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.post('/create', authController.signup);
router.post('/read', authController.login);

module.exports = router;