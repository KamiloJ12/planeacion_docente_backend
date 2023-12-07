const express = require('express');
const docenteController = require('../controllers/docente.controller');

const router = express.Router();

router.post('/', docenteController.createDocente);
router.get('/', docenteController.getDocentes);
router.get('/:id', docenteController.getDocente);
router.patch('/:id', docenteController.updateDocente);
router.delete('/:id', docenteController.deleteDocente);
// Agregar otras rutas según sea necesario

module.exports = router;
