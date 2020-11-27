const car = require("../models/Car.js");

class CarController {

    async save(req, resp) {
        var placa = req.body.placa;
        var carFound = await car.findOne({ placa: placa });

        if (carFound == null) {
            try {
                var result = await car.create(req.body);
                resp.status(201).json(result);
            }
            catch (error) {
                resp.status(500).json(error);
            }
        }
        else {
            resp.status(500).json({ message: "carro ja existe" });
        }
    }

    async getAll(req, resp) {
        var result = await car.find({});
        resp.status(200).json(result);
    }

    async getById(req, resp) {
        var id = req.params.carId;
        var result = await car.find({ licensePlate: id });
        resp.status(200).json(result);
    }

    async delete(req, resp) {
        var id = req.params.carId;
        var result = await car.deleteOne({ licensePlate: id });
    }

    async update(req, resp) {
        var id = req.body.licensePlate;
        var carFound = await car.findOne({ licensePlate: id });
        carFound = req.body;
        await car.updateOne({ licensePlate: id }, carFound);
    }

}

module.exports = new CarController();