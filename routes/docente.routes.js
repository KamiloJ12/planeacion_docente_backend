const express = require('express');
const docenteController = require('../controllers/docente.controller');

const router = express.Router();

router.post('/', docenteController.createDocente);
router.get('/', docenteController.getDocentes);
router.patch('/:id', docenteController.updateDocente);
router.delete('/', docenteController.delteDocente);
// Agregar otras rutas según sea necesario

module.exports = router;
