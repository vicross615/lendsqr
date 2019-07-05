const express = require('express');
const path = require('path');

const router = express.Router();

const authController = require('../../controllers/auth/authController');


router.get('/', authController.login);

module.exports = router;