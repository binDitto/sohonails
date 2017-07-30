// USE DEPENDENCIES
    const express = require('express');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');

// USE USER MODEL
    const User = require('../models/user');

// SET ROUTER
    const router = express.Router();



// EXPORT THE ROUTER
    module.exports = router;