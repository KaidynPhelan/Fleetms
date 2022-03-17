const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    registration: {type: String, required: true},
    odometer: {type: Number, required: true},
    run: {type: String, required: true},
}, {
    timestamps: true,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;


