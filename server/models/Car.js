const { text } = require("express");
const mongoose = require("mongoose");

const Car = new mongoose.Schema({
    placa: {
        type: String,
        required: [true, "The car license plate is required"]
    },
    modelo: {
        type: String,
        required: [true, "The car model is required"]
    },
    ano: {
        type: Number,
        required: [true, "The car year is required"]
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("carros", Car);