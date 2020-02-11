const express = require('express');
const router = express.Router();

// Controllers import
const userController = require('../Controllers/user');

// Get the User
router.post('/login', userController.login);

//Add new User
router.post('/signup', userController.signup);

//Get User
router.get('/getUser/:userId' , userController.getUser);


module.exports = router