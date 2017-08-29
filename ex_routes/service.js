// USE DEPENDENCIES
    const express = require('express');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');

// USE USER MODEL
    const User = require('../models/user');

// USE SERVICE MODEL
    const Service = require('../models/service');

// USE SERVICE MODEL
    const Image = require('../models/image');

// SET ROUTER
    const router = express.Router();

// USE CONFIG.TOKENSECRET
    const config = require('.././config/database');

// FETCH
    router.get('/', (req, res, next) => {
        /*
        User mongoose shell command model.find() to 
        fetch correct service.
            .sort to sert by property, 1 ascending -1 descending.
        */
        Service.find().sort({createdAt: -1})
                /*
                Populate (mongoose) will expand the related data to this data
                that we are fetching. So we can specify which parts of the
                user part of the service date we want populated so we can work with.
                */
                .populate('user')
                .exec((err, fetchedServicesRes) => {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred fetching the services data',
                            error: err
                        });
                    }

                    res.status(200).json({
                        message: 'Success! Services fetched!',
                        obj: fetchedServicesRes
                    });
                });
    });

// ROUTE AUTHENTIFICATION
    router.use('/', (req, res, next) => {
        /*
        Checks if user is issuing a valid JWT token to localStorage of browser.
        Import jsonwebtoken and use it to pull token by adding the token to a query in the url.
        ex: 'services/:id?token=asdfkljsaldfj' etc.
        Use secret key set up in the config database file to allow for use of token
        ex: jwt.verify(query, secret, callback)
        */
        jwt.verify(req.query.token, config.tokenSecret, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({
                    title: 'Not Authenticated, cannot pass',
                    error: err
                });
            }
            /*
            If no errors found, call the next() function to pass onto the next middleware, meaning
            authentication passed and routes from here onwards are allowed to be viewed by requesting user.
            */
            next();
        });
    });

// MULTER USAGE

// SAVE DATA
    /*
         multer to save image to diskStorage.
    */
    const multer = require('multer');
    

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '../ng-app/public/assets/images/services/')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.jpg')
        }
    });

    const upload = multer({ storage: storage });

    /*
    Made to require a signed in User to create services.
    */
    router.post('/', upload.single('serviceImage'), createService);
    
    function createService(req, res, next) {
        /*
        Doesn't check validity of token but just decodes for usage
        because token is validated in previous route before reaching this point.
        This is what is needed to validate that a user is logged in to mess with the service.
        */
        let decodedToken = jwt.decode(req.query.token);

       

        /*
        Use decoded token to locate user ID from database to create a relation to this newly created service.
        */
        User.findById(decodedToken.user._id, loggedInUserCallBack);
            
        function loggedInUserCallBack (err, loggedInUser) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred locating User',
                    error: err
                });
            }

            /*
            This will add a new service and add the returned user 
            from the decoded token(logged on user) and create a relation to that service.
            */
            const body = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                type: req.body.type,
                user: loggedInUser,
                image: req.file
            };
            
            let service = new Service(body);
            
            // Start Service Saving
            service.save(createServiceResCallBack);

            function createServiceResCallBack (err, createdServiceRes) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred registering the service to the db',
                        error: err
                    });
                }

                /*
                This will push the created service to the logged in User's array of services
                */
                loggedInUser.services.push(createdServiceRes);
                /*
                Remember to save the changes on the User.
                */
                loggedInUser.save();

                /*
                Everything went okay, service is saved as well as user.service pushed.
                Resources were created = 201.
                Respond to the front-end with the created service and a message in json format.
                */
                res. status(201).json({
                    message: 'Service saved to DB',
                    obj: createdServiceRes
                });
            }
            // End Service Saving
        }
    }

// EDIT 
    router.patch('/:id', upload.single('serviceImage'), (req, res, next) => {
         /*
        Doesn't check validity of token but just decodes for usage
        because token is validated in previous route before reaching this point.
        This is what is needed to validate that a user is logged in to mess with the service.
        */
        let decodedToken = jwt.decode(req.query.token);

        let serviceToEdit = req.params.id;

        Service.findById(serviceToEdit, (err, editServiceRes) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred retrieving the single service requested for editing',
                    error: err
                });
            }
            /*
            If empty/null or no service data matching the id passed in for editing.
            */
            if (!editServiceRes) {
                return res.status(500).json({
                    title: 'An error occurred, no service found for editing',
                    error: { message: 'Service not found' }
                });
            }

            /*
            Current logged in user is different from service creator,
            service can't be edited.
            */
            if (editServiceRes.user != decodedToken.user._id) {
                return res.status(401).json({
                    title: 'Not authenticated, cannot edit',
                    error: { message: 'User of service and you do not match' }
                });
            }

            /* 
                Create an instance of current edit Service Res before changing values.
                Use to check whether the image path before is different from image path we're adding
                from edit form.
            */
           const instanceOfEdit = editServiceRes.image.path;
            
            /* 
                Fields to be edited.
            */
            editServiceRes.name = req.body.name;
            editServiceRes.price = req.body.price;
            editServiceRes.description = req.body.description;
            editServiceRes.type = req.body.type;
            editServiceRes.image = req.file;

            /*
                if service image path from database does not match path
                the incoming file path, that means path has changed. We will delete 
                current image and replace with new path when new image is added.
            */
            if ( editServiceRes.image.path !== instanceOfEdit)
            fs.stat(instanceOfEdit, deleteImage);

            function deleteImage(err, stats) {
                console.log(stats); // here we got all info of file in stats variable

                if (err) {
                    return console.error(err);
                }

                fs.unlink(instanceOfEdit, errorCallBack); // This part does the actually deletion.
                function errorCallBack(err) {
                    if (err) return console.log(err);
                    console.log('image successfully deleted before adding new image');
                }
            }

            editServiceRes.save((err, editedServiceRes) => {

            

                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred updated/editing the service',
                        error: err
                    });
                }
                /*
                Everything went okay, service updated
                */
                res. status(200).json({
                    message: 'Service and image updated!',
                    obj: editedServiceRes
                });
            })

        });


    });

// DELETE

    /*
        fs to delete image from diskStorage.
    */
    const fs = require('fs');

    router.delete('/:id', (req, res, next) => {
        /*
        Doesn't check validity of token but just decodes for usage
        because token is validated in previous route before reaching this point.
        This is what is needed to validate that a user is logged in to mess with the service.
        */
        let decodedToken = jwt.decode(req.query.token);

        let serviceToDelete = req.params.id;

        Service.findById(serviceToDelete, (err, deleteServiceRes) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred retrieving the single service for deletion.',
                    error: err
                });
            }

            /*
             If empty/null or no service data matching the id passed in for editing.
             */
            if (!deleteServiceRes) {
                return res.status(500).json({
                    title: 'An error occurred, no service found for editing',
                    error: { message: 'Service not found' }
                });
            }

            /*
            Current logged in user is different from service creator,
            service can't be deleted.
            */
            if (deleteServiceRes.user != decodedToken.user._id) {
                return res.status(401).json({
                    title: 'Not authenticated, cannot edit',
                    error: { message: 'User of service and you do not match' }
                });
            }

            /*
                Using image path from service to delete the image from diskStorage.
            */
            fs.stat(deleteServiceRes.image.path, deleteImage);

            function deleteImage (err, stats) {
                console.log(stats); // here we got all info of file in stats variable

                if (err) {
                    return console.error(err);
                }

                fs.unlink(deleteServiceRes.image.path, errorCallBack); // This part does the actually deletion.
                function errorCallBack (err) {
                    if (err) return console.log(err);
                    console.log('image successfully deleted');
                }
            }

            deleteServiceRes.remove((err, deletedServiceRes) => {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred deleting the service',
                        error: err
                    });
                }

                /*
                Everything okay, service was able to be deleted.
                */
                res.status(200).json({
                    message: 'Service deleted',
                    obj: deletedServiceRes
                });
            })
        });

    });




// EXPORT THE ROUTER
    module.exports = router;