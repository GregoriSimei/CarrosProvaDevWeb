const express = require('express');
const router = express.Router();
const carController = require('../controllers/CarController.js');

router.get("/carro", carController.getAll);
router.post("/carro", carController.save);
router.get("/carro/:carId", carController.getById);
router.put("/carro", carController.update);
router.delete("/carro/:carId", carController.delete);

module.exports = router;

