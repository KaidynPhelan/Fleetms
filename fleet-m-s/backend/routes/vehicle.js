const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');

router.route('/').get((req,res) => {
    Vehicle.find()
    .then(vehicles => res.json(vehicles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const make = req.body.make;
    const model = req.body.model;
    const registration = req.body.registration;
    const odometer = Number(req.body.odometer);
    const run = req.body.run;

    const newVehicle = new Vehicle({
        make,
        model,
        registration,
        odometer,
        run,
    });
    
    newVehicle.save()
    .then(() => res.json('Vehicle Added'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Vehicle.findById(req.params.id)
        .then(vehicles => res.json(vehicles))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Vehicle.findByIdAndDelete(req.params.id)
        .then(() => res.json('Vehicle Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Vehicle.findById(req.params.id)
        .then(vehicles => {
            vehicles.make = req.body.make;
            vehicles.model = req.body.model;
            vehicles.registration = req.body.registration;
            vehicles.odometer = Number(req.body.odometer);
            vehicles.run = req.body.run;

            vehicles.save()
                .then(() => res.json('Vehicle Details Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
