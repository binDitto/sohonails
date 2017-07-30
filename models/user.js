// USE DEPENDENCIES
    const mongoose = require('mongoose');
    const uniqueVal = require('mongoose-unique-validator');

// USER MODEL BLUEPRINT
    const userSchema = mongoose.Schema({
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        userName: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        admin: { type: Boolean },
        // Has-many services, so array of service objects
        services: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service'
        }]
    });

    userSchema.plugin(uniqueVal);

 // EXPORT FOR USE IN OTHER FILES
    module.exports = mongoose.model('User', userSchema);