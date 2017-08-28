// INCLUDE DEPENDENCIES
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const passport = require('passport');
    const mongoose = require('mongoose');
    const multer = require('multer');

// INITIALIZE NODE APP
    const app = express();

// SET ROUTE TREE
    const userRoutes = require('./ex_routes/user');
    const serviceRoutes = require('./ex_routes/service');

// CONNECT TO MONGODB OR MONGOLAB
    const config = require('./config/database');

    mongoose.connect(config.database);
        //-- Check for connection or errors
        mongoose.connection.on('connected', ()=> {
            console.log('Connected to database ' + config.database);
        });
        mongoose.connection.on('error', (err) =>{
            console.log('Database Error: ' + err);
        });

// ESTABLISH DEV AND HEROKU PROD PORT
    const port = process.env.PORT || 8080;

// USE 'CORS' FOR SETTING HEADERS - ALLOWS MAKING REQUEST TO API FROM DIFFERENT DOMAIN NAME
    app.use(cors());

// SET STATIC FOLDER
    app.use(express.static(path.join(__dirname, 'public')));

// PARSE REQ DATA INTO JSON FORMAT WITH 'BODY-PARSER'
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

// PASSPORT MIDDLEWARE -- FOR AUTHENTIFICATION STRATEGIES
    app.use(passport.initialize());
    app.use(passport.session());

    // require('./config/passport')(passport);

// USE ROUTES

    app.use('/users', userRoutes);
    app.use('/services', serviceRoutes);
    
    // reaches no route functionality
    app.get('/', (req, res) => {
        res.render('INVALID ENDPOINT!');
    });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });
   

// RUN SERVER -- NPM START (AS SETUP IN PACKAGE.JSON)
    app.listen(port, ()=>{
        console.log('Server is online! Using port ' + port);
    });