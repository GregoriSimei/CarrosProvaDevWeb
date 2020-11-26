const car = require("../models/Car.js");

class CarController {

    async save(req, resp) {
        var id = req.body.licensePlate;
        var carFound = await car.findOne({ licensePlate: id });

        if (carFound == null) {
            try {
                var result = await car.create(req.body);
                resp.status(201).json(result);
                console.log("carro foi salvo");
            }
            catch (error) {
                resp.status(500).json(error);
            }
        }
        else {
            console.log("carro nao foi salvo");
            resp.status(500).json({ message: "carro ja existe" });
        }
    }

    async getAll(req, resp) {
        var result = await car.find({});
        resp.status(200).json(result);
        console.log("pegou todos os carros");
    }

    async getById(req, resp) {
        var id = req.params.carId;
        var result = await car.find({ licensePlate: id });
        resp.status(200).json(result);
        console.log("pegou um carro pelo id");
    }

    async delete(req, resp) {
        var id = req.params.carId;
        var result = await car.deleteOne({ licensePlate: id });
        console.log("deletou um carro");
    }

    async update(req, resp) {
        var id = req.body.licensePlate;
        var carFound = await car.findOne({ licensePlate: id });
        carFound = req.body;
        await car.updateOne({ licensePlate: id }, carFound);
        console.log("atualizou um carro");
    }

}

module.exports = new CarController();