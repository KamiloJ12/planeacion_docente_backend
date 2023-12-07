// controllers/docenteController.js
const { docente } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const docenteController = {
  createDocente: async (req, res) => {
    const { codigo, nombre, materia, email=nombre+'gmail.com', grupo, password } = req.body;

    try {
      // Verificar si ya existe un docente con el mismo correo
      const existingDocente = await docente.findOne({ where: { email } });
      if (existingDocente) {
        return res.status(400).json({ error: 'Ya existe un docente con este correo' });
      }

      // Crear un nuevo docente
      const newDocente = await docente.create({
        codigo,
        nombre,
        materia,
        email,
        password: '123456',
        grupo,
      });

      res.status(201).json(newDocente);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },

  getDocentes: async (req, res) => {
    try {
      const docentes = await docente.findAll();
      res.status(200).json(docentes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delteDocente: async (req, res) => {
    try {
      const { id } = req.params; 
      const docente = await docente.destroy({
        where: { id }
      });
      res.status(200).json(docente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateDocente: async (req, res) => {
    try {
      const { codigo, nombre, materia, grupo } = req.body;
      const data = { codigo, nombre, materia, grupo };
      const { id } = req.params; 
      const docente = await docente.update(data, {
        where: { id }
      });
      res.status(200).json(docente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  // Agregar otras funciones según sea necesario
};

module.exports = docenteController;
