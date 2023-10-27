const mongoose = require("mongoose")

const Car = new mongoose.Schema({
    marque: String,
    chassis: Number,
    couleur: String,
    nbr_place: Number,
    mileage: Number, // kilometrage
    production_date: Date,
    version: String
});

module.exports = mongoose.model('Car', Car);
