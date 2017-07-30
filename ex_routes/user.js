// USE DEPENDENCIES
    const express = require('express');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');

// USE USER MODEL
    const User = require('../models/user');

// SET ROUTER
    const router = express.Router();


// CREATE 
    router.post('/', (req, res, next) => {
        /*

        Pull in user from request body -- taken either 
        from html body, ex: angular 2 front-end and parsed with body-parser, 
        or by posting the json object through postman.
        For this app, use: Postman.
        
        */
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            /*

            Use bcrypt encryption with hashSync(password, saltstrength),
            example: bcrypt.hashSync('password', 10)

            */
            password: bcrypt.hashSync(req.body.password, 10)
        });

        /* 
        If first User, admin status will be set to true,
        else it'd be set to false.
        */
        User.count({}, (err, count) => {
            if (count === 0) {
                user.admin = true;
                console.log('User admin set to ' + user.admin);
            } else {
                user.admin = false;
                console.log('User admin set to ' + user.admin);
            }
        });

        user.save((err, createdUserRes) => {

            if (err) {
                return res.status(500).json({
                    title: 'Error saving User to database',
                    error: err
                });
            }

            /*
            If request for user object is successful, the next block of
            code will be executed.
            201 status = resource created.
            A JSON Object will be sent back with a message, and the requested User obj.
            */
            res.status(201).json({
                message: 'User Successfully Created',
                obj: createdUserRes
            });
            

        });
    });


// EXPORT THE ROUTER
    module.exports = router;