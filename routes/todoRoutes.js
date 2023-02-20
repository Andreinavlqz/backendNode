const express = require('express');
const router = express.Router();
const perritoController = require('../controllers/Controller');

// Ruta para obtener todos los perritos
router.get('/', perritoController.getAllPerritos);

// Ruta para obtener un perrito por su ID
router.get('/:id', perritoController.getPerritoById);

// Ruta para crear un nuevo perrito
router.post('/', perritoController.createPerrito);

// Ruta para actualizar un perrito existente
router.put('/:id', perritoController.updatePerrito);

// Ruta para eliminar un perrito existente
router.delete('/:id', perritoController.deletePerrito);

module.exports = router;
