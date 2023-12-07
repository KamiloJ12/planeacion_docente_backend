// routes/adminRoutes.js
const express = require('express');
const adminController = require('../controllers/administrador.controller');

const router = express.Router();

router.post('/', adminController.createAdmin);
router.get('/', adminController.getAdmins);
// Agregar otras rutas según sea necesario

module.exports = router;
