const express = require('express');
const router = express.Router();
const carController = require('../controllers/CarController.js');

router.get("/carro/listar", carController.getAll);
router.post("/carro/cadastrar", carController.save);
router.get("/carro/buscar/:carId", carController.getById);
router.put("/carro/alterar", carController.update);
router.delete("/carro/remover/:carId", carController.delete);

module.exports = router;

