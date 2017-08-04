// USE DEPENDENCIES
    const mongoose = require('mongoose');
    const uniqueVal = require('mongoose-unique-validator');

// USE USER MODEL
    const User = require('./user');

// SERVICE MODEL BLUEPRINT
    const serviceSchema = new mongoose.Schema({
        name: { type: String, unique: true, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        // Belongs-to one user -- so single user object
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    });

    serviceSchema.plugin(uniqueVal);

// DEPENDENT ON REMOVAL
    serviceSchema.post('remove', (service) => {

        /* Use mongoose to find user-owner of service and delete service 
        relation to that user when service is 'removed' from db. */

        User.findById(service.user, (err, returnedUserObj) => {
            returnedUserObj.services.pull(service);
            returnedUserObj.save();
        });
    });

// EXPORT FOR USE IN OTHER FILES
    module.exports = mongoose.model('Service', serviceSchema);