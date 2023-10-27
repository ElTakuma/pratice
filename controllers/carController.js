const Car = require("../models/car")

exports.allCars = (req, res, next) => {
    Car.find()
        .then(cars => res.status(200).json(cars))
        .catch(error => res.status(400).json({error}))
}

exports.addCars = (req, res, next) => {
    const car = new Car({
        ...req.body,
        nbr_place: req.body.ndp,
        mileage: req.body.km,
        production_date: req.body.ddp,
    });

    car.save()
        .then(() => res.status(201).json({message: "Voiture enregistrer"}))
        .catch(error => res.status(400).json({error}))
}

