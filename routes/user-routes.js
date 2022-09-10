const express = require('express');
const authController = require('./../public/controllers/authController');
const userController = require('./../public/controllers/userController');

const router = express.Router();



router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post('/signup', authController.signup);
router.post('/login', authController.login);



module.exports = router;

