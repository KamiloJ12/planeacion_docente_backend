// controllers/adminController.js
const { Administrador } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminController = {
  createAdmin: async (req, res) => {
    const { email, password, nombre } = req.body;

    try {
      // Verificar si ya existe un administrador con el mismo correo
      const existingAdmin = await Administrador.findOne({ where: { email } });
      if (existingAdmin) {
        return res.status(400).json({ error: 'Ya existe un administrador con este correo' });
      }

      // Crear un nuevo administrador
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newAdmin = await Administrador.create({
        email,
        password: hashedPassword,
        nombre,
      });

      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAdmins: async (req, res) => {
    try {
      const admins = await Administrador.findAll();
      res.status(200).json(admins);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Agregar otras funciones según sea necesario
};

module.exports = adminController;
