// USE DEPENDENCIES
    const mongoose = require('mongoose');
    const uniqueVal = require('mongoose-unique-validator');
    const updatedTimeStamp = require('mongoose-updated_at');

// SERVICE
    const Service = require('./service');

// IMAGE BLUEPRINT

    const imageSchema = new mongoose.Schema({
        divId: { type: String, required: true },
        width: { type: Number, required: true },
        file: { data: Buffer, contentType: String },
        originalname: { type: String, required: true },
        filename: { type: String, required: true },
        path: { type: String, required: true },
        destination: { type: String, required: true },
        size: { type: Number, required: true },
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            required: true
        },
        createdAt: { type: Date, default: Date.now }
    });

    imageSchema.plugin(updatedTimeStamp);

    // DEPENDENT ON REMOVAL
    imageSchema.post('remove', (image) => {

        /* Use mongoose to find user-owner of Image and delete image
        relation to that service when image data is 'removed' from db. */

        Service.findById(image.service, (err, returnedServiceObj) => {
            returnedServiceObj.images.pull(image);
            returnedServiceObj.save();
        });
    });

    // EXPORT FOR USE IN OTHER FILES
    module.exports = mongoose.model('Image', imageSchema);