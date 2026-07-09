const { registerUser, loginUser, currentUser } = require("../controllers/usersController");

const express= require('express');

const router= express.Router();

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/current').post(currentUser)

module.exports = router;