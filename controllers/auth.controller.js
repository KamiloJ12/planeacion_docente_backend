// controllers/authController.js
const { Docente, Administrador } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
  login: async (req, res) => {
    const { email, password, tipo } = req.body;

    let user;

    try {
      if (tipo === 'docente') {
        user = await Docente.findOne({ where: { email } });
      } else if (tipo === 'administrador') {
        user = await Administrador.findOne({ where: { email } });
      }

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
      }

      const token = jwt.sign({ id: user.id, tipo }, 'secreto', { expiresIn: '1h' });

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Agregar otras funciones de autenticación según sea necesario
};

module.exports = authController;
