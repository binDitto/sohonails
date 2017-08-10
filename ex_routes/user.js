// USE DEPENDENCIES
    const express = require('express');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');

// USE USER MODEL
    const User = require('../models/user');

// SET ROUTER
    const router = express.Router();

// USE CONFIG DATABASE FILE FOR TOKEN SECRET PASSCODE
    const config = require('.././config/database');

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
                message: 'User Successfully Created To The Database!',
                obj: createdUserRes
            });
            

        });
    });

// LOG IN
    router.post('/login', (req, res, next) => {

        /* 
        Fetch the user to sign in from database, by using the entered email and password 
        from the front-end input request submissions.
        Use the mongo-shell findOne command for fetching from mongodb database.
        example: mongoosemodel.findOne({query-property: inputValue}, callback function);
        */

        User.findOne({email: req.body.email}, (err, signedInUserRes) => {

            if (err) {
                return res.status(500).json({
                    title: 'Error signing in User, User not found',
                    error: err
                });
            } 

            if (!signedInUserRes) {
                return res.status(500).json({
                    title: 'Login failed.',
                    error: { message: 'Invalid login credentials' }
                });
            }

            /* 
            Bcryptjs 'compareSync' decrypts passwords by comparing what was entered
            in the front-end input fields, parsed into json by body-parser to the 
            bcrypt hashed password in the database. 
            If !not comparable or the same, it will return an error with a title 
            and error object that we specify.
            ex: bcrypt.compareSync(front-end-pw, back-end-pw)
            */
            
            if (!bcrypt.compareSync(req.body.password, signedInUserRes.password)) {
                return res.status(401).json({
                    title: 'Logon failed',
                    error: { message: 'Invalid login credentials'}
                });
            }

            /* 
            If none of the above gets returned that means user input on the front-end
            for logging in matched a user in the database and the following code will be
            initiated.
            We will use jsonwebtoken package.
            npm install --save jsonwebtoken
            jsonwebtoken will return a token for usage on our web app that lets the browser know
            the same user using this token is still in logged in state in the localStorage
            */

            let token = jwt.sign({ user: signedInUserRes }, config.tokenSecret, { expiresIn: 7200 });

            res.status(200).json({
                message: 'Sucessfully logged in',
                token: 'JWT - ' + token,
                userId: signedInUserRes._id
            });
        });
        
    });

    // FETCH
    router.get('/:id', (req, res, next) => {

        /*
            Pull user from mongoose mongo db by using req.params.id.
        */
        User.findById(req.params.id, (err, userProfile) => {
            if (err) {
                return res.status(500).json({
                    title: 'Cannot retrieve profile',
                    error: err
                });
            }

            res.status(200).json({
                message: 'User Profile retrieved',
                user: userProfile
            });
        });

    });
        

// EXPORT THE ROUTER
    module.exports = router;