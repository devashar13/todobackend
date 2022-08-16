const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// @route    GET auth/signup
// @desc     Test route
// @access   public
router.post('/signup', authController.signup);

// @route    GET auth/login
// @desc     Test route
// @access   public
router.post('/login', authController.login);

module.exports = authRouter;